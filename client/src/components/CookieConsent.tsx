import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { updateConsent } from "@/lib/analytics";

const STORAGE_KEY = "ysadc-consent";

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Minimal consent banner (UAE PDPL + Google/Meta consent mode). Analytics
 * and ad tags stay in "denied" mode until the visitor accepts. The choice is
 * remembered per browser; re-applied on every load so GTM sees it.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readChoice();
    if (stored) {
      updateConsent(stored === "granted");
    } else {
      // Delay so the banner doesn't compete with first paint / prerender.
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const choose = (choice: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
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
      aria-label="Cookie preferences"
      className="fixed left-3 right-3 sm:left-auto sm:right-6 bottom-24 sm:bottom-28 z-50 max-w-md rounded-2xl border border-border bg-card p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-4"
      data-testid="cookie-consent"
    >
      <p className="text-sm text-secondary leading-relaxed">
        We use cookies to measure how the website is used and to improve our services. Analytics and marketing
        cookies are only set with your consent. See our{" "}
        <Link href="/privacy" className="text-primary underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <Button
          size="sm"
          className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => choose("granted")}
          data-testid="button-consent-accept"
        >
          Accept
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 rounded-full"
          onClick={() => choose("denied")}
          data-testid="button-consent-decline"
        >
          Essential only
        </Button>
      </div>
    </div>
  );
}
