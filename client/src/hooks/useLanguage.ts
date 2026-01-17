import React, { createContext, useContext, useState, ReactNode } from 'react';
import enJson from '../locales/en.json';
import ruJson from '../locales/ru.json';
import deJson from '../locales/de.json';

type Language = 'en' | 'ru' | 'de';

// Type for translation values - can be string or nested object
type TranslationValue = string | { [key: string]: TranslationValue };

// Type for the translation object structure
type TranslationObject = typeof enJson;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, TranslationObject> = {
  en: enJson,
  ru: ruJson,
  de: deJson,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language | null;
      if (stored && (stored === 'en' || stored === 'ru' || stored === 'de')) {
        return stored;
      }
      return 'en';
    }
    return 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: TranslationValue | undefined = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Key not found, return the key itself or log in development
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Translation key not found: ${key} for language: ${language}`);
        }
        return key;
      }
    }

    // Ensure we return a string
    if (typeof value === 'string') {
      return value;
    }
    
    // Fallback to key if value is not a string
    return key;
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage: handleSetLanguage, t } },
    children
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
