import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  CONSENT_STORAGE_KEY,
  readConsent,
  updateConsent,
  type ConsentChoice,
} from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Minimal consent banner (UAE PDPL + Google/Meta consent mode). Analytics
 * and ad tags stay in "denied" mode until the visitor accepts. The choice is
 * remembered per browser; the inline script in index.html applies it as the
 * Consent Mode default on every load, before GTM starts.
 */
export function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent()) return;
    // Delay so the banner doesn't compete with first paint. (The prerender
    // step strips it from the HTML snapshots.)
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const choose = (choice: ConsentChoice) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      /* private mode — fine, banner will show again next visit */
    }
    updateConsent(choice === "granted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookies.aria")}
      className="fixed left-3 right-3 sm:left-auto sm:right-6 bottom-[5.5rem] sm:bottom-28 z-50 sm:max-w-md rounded-2xl border border-border bg-card/95 backdrop-blur p-3 sm:p-5 shadow-lg animate-in fade-in slide-in-from-bottom-4"
      data-testid="cookie-consent"
    >
      <p className="text-xs sm:text-sm text-secondary leading-relaxed">
        {t("cookies.body")}{" "}
        <Link href="/privacy" className="text-primary underline underline-offset-2">
          {t("cookies.privacyLink")}
        </Link>
        .
      </p>
      <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
        <Button
          size="sm"
          className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => choose("granted")}
          data-testid="button-consent-accept"
        >
          {t("cookies.accept")}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 rounded-full"
          onClick={() => choose("denied")}
          data-testid="button-consent-decline"
        >
          {t("cookies.essentialOnly")}
        </Button>
      </div>
    </div>
  );
}
