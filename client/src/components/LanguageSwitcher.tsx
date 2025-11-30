import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          language === 'en'
            ? 'bg-primary text-white'
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
        data-testid="button-lang-en"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          language === 'ru'
            ? 'bg-primary text-white'
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        }`}
        data-testid="button-lang-ru"
      >
        RU
      </button>
    </div>
  );
}
