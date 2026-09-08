// Thin dataLayer wrapper. GTM (loaded from client/index.html when
// VITE_GTM_ID is set at build time) owns GA4 / Meta Pixel configuration —
// nothing vendor-specific lives in app code. Every CTA funnels through
// track() so marketing can wire conversions in GTM without a deploy.

type EventName =
  | "page_view"
  | "whatsapp_click"
  | "call_click"
  | "emergency_confirm"
  | "form_submit"
  | "language_switch"
  | "search_open"
  | "consent_update";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: EventName, params: Params = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

/** Fire an SPA page_view — Wouter navigations don't reload the document. */
export function trackPageView(path: string): void {
  track("page_view", {
    page_path: path,
    page_title: typeof document !== "undefined" ? document.title : undefined,
    page_location:
      typeof window !== "undefined" ? window.location.href : undefined,
  });
}

/**
 * GTM Consent Mode v2. Defaults are denied (set inline in index.html before
 * GTM loads); this updates them once the visitor chooses. GTM tags for GA4
 * and Meta Pixel should be configured to respect these consent signals.
 */
export function updateConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  const state = granted ? "granted" : "denied";
  window.dataLayer = window.dataLayer ?? [];
  // gtag('consent', 'update', {...}) shape, pushed via the dataLayer so it
  // works whether or not gtag() itself is defined yet.
  window.dataLayer.push([
    "consent",
    "update",
    {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    },
  ]);
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  }
  track("consent_update", { consent: state });
}
