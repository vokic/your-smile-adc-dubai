// Thin dataLayer wrapper. GTM (loaded from client/index.html when
// VITE_GTM_ID is set at build time) owns GA4 / Meta Pixel configuration —
// nothing vendor-specific lives in app code. Every CTA funnels through
// track() so marketing can wire conversions in GTM without a deploy.
//
// Page views are deliberately NOT pushed from here. GA4 (enhanced
// measurement: "page changes based on browser history events", on by
// default) and the Meta Pixel both record SPA navigations by themselves, so
// a plain Google tag + Pixel in GTM counts every page exactly once. An extra
// app-sent page_view could only ever double-count.

type EventName =
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

export type ConsentChoice = "granted" | "denied";

/** localStorage key for the visitor's choice. index.html reads it too. */
export const CONSENT_STORAGE_KEY = "ysadc-consent";

/** Fired on window when the visitor answers the banner (detail: choice). */
export const CONSENT_EVENT = "ysadc-consent-change";

/** The stored choice, or null if the visitor hasn't answered (or storage is blocked). */
export function readConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/**
 * GTM Consent Mode v2. The default (denied, or the stored choice of a
 * returning visitor) is set inline in index.html before GTM loads; this
 * updates it when the visitor answers the banner. GTM tags for GA4 and Meta
 * Pixel should be configured to respect these consent signals.
 */
export function updateConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  const state: ConsentChoice = granted ? "granted" : "denied";
  // gtag() is defined by the inline consent script in index.html.
  window.gtag?.("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  track("consent_update", { consent: state });
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}
