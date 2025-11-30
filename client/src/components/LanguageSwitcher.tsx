import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
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
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2 rounded-full"
        data-testid="button-language-toggle"
      >
        {currentLang?.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[140px]">
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
                  : 'hover:bg-muted'
              } ${lang.code === 'en' ? 'rounded-t-lg' : ''} ${lang.code === 'de' ? 'rounded-b-lg' : ''}`}
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
