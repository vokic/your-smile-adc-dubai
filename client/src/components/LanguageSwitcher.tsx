import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect, useId } from 'react';

interface LanguageSwitcherProps {
  isDark?: boolean;
}

type LangCode = 'en' | 'ru' | 'de';

// Inline SVG flags — emoji flags don't render on Windows.
function Flag({ code }: { code: LangCode }) {
  // Unique clipPath id per instance: the switcher renders twice (desktop + mobile)
  const clipId = `uk-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const className = 'h-3.5 w-5 shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]';

  if (code === 'de') {
    return (
      <svg viewBox="0 0 5 3" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
        <rect width="5" height="3" fill="#FFCE00" />
        <rect width="5" height="2" fill="#DD0000" />
        <rect width="5" height="1" fill="#000" />
      </svg>
    );
  }

  if (code === 'ru') {
    return (
      <svg viewBox="0 0 9 6" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
        <rect width="9" height="6" fill="#D52B1E" />
        <rect width="9" height="4" fill="#0039A6" />
        <rect width="9" height="2" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <clipPath id={clipId}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${clipId})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function LanguageSwitcher({ isDark = false }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages: { code: LangCode; label: string; fullName: string }[] = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'ru', label: 'RU', fullName: 'Русский' },
    { code: 'de', label: 'DE', fullName: 'Deutsch' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="relative" ref={ref}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`gap-2 rounded-full px-4 py-1.5 h-9 font-semibold text-sm ${
          isDark 
            ? 'bg-white/25 text-white hover:bg-white/40 border-2 border-white/40 backdrop-blur-sm' 
            : 'bg-background border border-border text-foreground hover:bg-muted'
        }`}
        aria-label={t("languageSwitcher.aria")}
        data-testid="button-language-toggle"
      >
        {currentLang && <Flag code={currentLang.code} />}
        {currentLang?.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 rounded-lg shadow-lg z-50 min-w-[140px] ${
          isDark
            ? 'bg-white/95 border border-white/20'
            : 'bg-background border border-border'
        }`}>
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 text-left px-4 py-2 text-sm transition-colors ${
                language === lang.code
                  ? 'bg-primary text-white font-semibold'
                  : isDark ? 'hover:bg-black/5' : 'hover:bg-muted'
              } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'de' ? 'rounded-b-lg' : ''} ${
                isDark ? 'text-foreground' : ''
              }`}
              data-testid={`button-lang-${lang.code}`}
            >
              <Flag code={lang.code} />
              {lang.fullName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
