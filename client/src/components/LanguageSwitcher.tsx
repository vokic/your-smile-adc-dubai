import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface LanguageSwitcherProps {
  isDark?: boolean;
}

export function LanguageSwitcher({ isDark = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en' as const, label: 'English' },
    { code: 'ru' as const, label: 'Русский' },
    { code: 'de' as const, label: 'Deutsch' },
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
        className={`gap-2 rounded-full px-6 py-2.5 h-auto font-semibold ${
          isDark 
            ? 'bg-white/25 text-white hover:bg-white/40 border-2 border-white/40 backdrop-blur-sm' 
            : 'bg-background border border-border text-foreground hover:bg-muted'
        }`}
        data-testid="button-language-toggle"
      >
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
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                language === lang.code
                  ? 'bg-primary text-white font-semibold'
                  : isDark ? 'hover:bg-black/5' : 'hover:bg-muted'
              } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'de' ? 'rounded-b-lg' : ''} ${
                isDark ? 'text-foreground' : ''
              }`}
              data-testid={`button-lang-${lang.code}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
