import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import enJson from '../locales/en.json';

type Language = 'en' | 'ru' | 'de';

export const LANGUAGES: readonly Language[] = ['en', 'ru', 'de'];

/** A locale file is an arbitrarily nested tree of strings / string arrays. */
type TranslationItem = Record<string, string>;
type TranslationValue = string | string[] | TranslationItem[] | { [key: string]: TranslationValue };
type TranslationTree = { [key: string]: TranslationValue };

/** Values injected into `{placeholders}` inside a translation. */
export type TranslationVars = Record<string, string | number>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /** Translate a dotted key. Missing keys fall back to English, then to the key. */
  t: (key: string, vars?: TranslationVars) => string;
  /** Translate a dotted key that holds an array of strings (bullet lists). */
  tList: (key: string, vars?: TranslationVars) => string[];
  /**
   * Translate a key whose English source lives outside the locale files —
   * the treatment data in `content/services/` is authored in English TS and
   * only overlaid with ru/de. Returns `fallback` when no override exists.
   */
  tOr: (key: string, fallback: string, vars?: TranslationVars) => string;
  /** Array form of `tOr`. */
  tListOr: (key: string, fallback: string[], vars?: TranslationVars) => string[];
  /**
   * Translate a key holding an array of flat objects — FAQ question/answer
   * pairs, step titles/descriptions and the like. Keeps a readable array in
   * the locale file instead of `faqs.0.question`-style flattened keys.
   */
  tItems: <T extends object>(key: string, vars?: TranslationVars) => T[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// The JSON files are structurally richer than the recursive alias TS infers
// for them (nested block lists in the legal documents), so they go through
// `unknown` rather than being asserted directly.
const EN = enJson as unknown as TranslationTree;

// English ships in the main bundle (it is the prerendered, indexed language
// and every other locale's fallback). Russian and German are ~350 KB of JSON
// together, so they load as separate chunks only when a visitor picks them;
// until the chunk arrives `t()` falls back to English.
const LOADERS: Record<Exclude<Language, 'en'>, () => Promise<{ default: unknown }>> = {
  ru: () => import('../locales/ru.json'),
  de: () => import('../locales/de.json'),
};

function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'ru' || value === 'de';
}

/** Walk a dotted path through one locale tree. Returns undefined if absent. */
function lookup(tree: TranslationTree | undefined, key: string): TranslationValue | undefined {
  let value: TranslationValue | undefined = tree;
  for (const part of key.split('.')) {
    if (value && typeof value === 'object' && !Array.isArray(value) && part in value) {
      value = (value as { [k: string]: TranslationValue })[part];
    } else {
      return undefined;
    }
  }
  return value;
}

/** Replace every `{name}` with vars.name. Unknown placeholders are left alone. */
function interpolate(text: string, vars?: TranslationVars): string {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in vars ? String(vars[name]) : match,
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('language');
    } catch {
      /* storage blocked (cookies disabled) — reading it throws SecurityError */
    }
    if (isLanguage(stored)) return stored;
    // Honour the browser's preference on a first visit, but only for the
    // languages we actually ship.
    const browser = navigator.language?.slice(0, 2).toLowerCase();
    return isLanguage(browser) ? browser : 'en';
  });

  const [loaded, setLoaded] = useState<Partial<Record<Language, TranslationTree>>>({ en: EN });
  const tree = loaded[language];

  useEffect(() => {
    if (language === 'en' || loaded[language]) return;
    let cancelled = false;
    LOADERS[language]()
      .then((mod) => {
        if (!cancelled) {
          setLoaded((prev) => ({ ...prev, [language]: mod.default as TranslationTree }));
        }
      })
      .catch(() => {
        /* offline / chunk error — the page simply stays in English */
      });
    return () => {
      cancelled = true;
    };
  }, [language, loaded]);

  // Keep <html lang> in sync so screen readers and Google see the right language.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('language', lang);
      } catch {
        /* private mode — the choice just won't persist */
      }
    }
  };

  /**
   * Resolve a key in the active language, falling back to English when a
   * translation is missing. The fallback is what lets us ship a locale that
   * is only partly translated without blanking the page.
   */
  const resolve = (key: string): TranslationValue | undefined => {
    const hit = lookup(tree, key);
    if (hit !== undefined && hit !== '') return hit;
    if (language !== 'en') {
      const fallback = lookup(EN, key);
      if (fallback !== undefined && fallback !== '') return fallback;
    }
    return undefined;
  };

  const t = (key: string, vars?: TranslationVars): string => {
    const value = resolve(key);
    if (typeof value === 'string') return interpolate(value, vars);
    if (import.meta.env.DEV) {
      console.warn(`[i18n] missing string: ${key} (${language})`);
    }
    return key;
  };

  const tList = (key: string, vars?: TranslationVars): string[] => {
    const value = resolve(key);
    if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
      return (value as string[]).map((item) => interpolate(item, vars));
    }
    if (import.meta.env.DEV) {
      console.warn(`[i18n] missing list: ${key} (${language})`);
    }
    return [];
  };

  const tItems = <T extends object>(key: string, vars?: TranslationVars): T[] => {
    const value = resolve(key);
    if (Array.isArray(value) && value.every((item) => item && typeof item === 'object')) {
      if (!vars) return value as unknown as T[];
      // Interpolate every string anywhere in the tree: the legal documents
      // nest blocks and bullet lists under each section.
      const deep = (node: unknown): unknown => {
        if (typeof node === 'string') return interpolate(node, vars);
        if (Array.isArray(node)) return node.map(deep);
        if (node && typeof node === 'object') {
          return Object.fromEntries(
            Object.entries(node as Record<string, unknown>).map(([k, v]) => [k, deep(v)]),
          );
        }
        return node;
      };
      return (value as unknown[]).map(deep) as T[];
    }
    if (import.meta.env.DEV) {
      console.warn(`[i18n] missing item list: ${key} (${language})`);
    }
    return [];
  };

  const tOr = (key: string, fallback: string, vars?: TranslationVars): string => {
    if (language === 'en') return interpolate(fallback, vars);
    const value = lookup(tree, key);
    return typeof value === 'string' && value !== ''
      ? interpolate(value, vars)
      : interpolate(fallback, vars);
  };

  const tListOr = (key: string, fallback: string[], vars?: TranslationVars): string[] => {
    if (language === 'en') return fallback.map((item) => interpolate(item, vars));
    const value = lookup(tree, key);
    return Array.isArray(value) && value.length > 0 && value.every((item) => typeof item === 'string')
      ? (value as string[]).map((item) => interpolate(item, vars))
      : fallback.map((item) => interpolate(item, vars));
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage: handleSetLanguage, t, tList, tItems, tOr, tListOr } },
    children,
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
