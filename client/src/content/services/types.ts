/**
 * Data model for per-treatment landing pages (Google Ads destinations).
 * One object per sub-service; rendered by pages/services/SubServicePage.tsx.
 *
 * Copy rules (owner + SEO):
 *  - No prices, no discounts. Packages only (PackagesCallout handles it).
 *  - No invented statistics ("98% success"), no "X years of experience"
 *    figures except Dr. Kukoljac's 18 years of cosmetic dentistry.
 *  - Ceramic veneers only — never mention composite veneers.
 *  - H1 includes "in Dubai". Plain English a patient understands.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  description: string;
  duration?: string;
}

export interface Highlight {
  title: string;
  desc: string;
}

export type CategorySlug =
  | "dental-surgery"
  | "general-preventive"
  | "crowns-bridges"
  | "whitening"
  | "orthodontics"
  | "restorative";

export interface ServiceCategory {
  slug: CategorySlug;
  /** Parent route, e.g. "/dental-surgery". */
  path: string;
  name: string;
  /** Short label used in breadcrumbs / cards. */
  shortName: string;
}

export interface SubService {
  /** URL segment under the category, e.g. "wisdom-tooth". */
  slug: string;
  category: CategorySlug;
  /** Card title on the parent page and nav (2–4 words). */
  name: string;
  /** H1. Must contain "in Dubai". */
  h1: string;
  /** <title> without site suffix, ≤ 60 chars. */
  seoTitle: string;
  /** Meta description, 130–160 chars. */
  seoDescription: string;
  /** Hero subtitle, one sentence. */
  heroSubtitle: string;
  /** Intro block: heading + 2–3 paragraphs (60–110 words each). */
  intro: {
    heading: string;
    paragraphs: string[];
  };
  /** 3–6 "who is it for / what it treats" cards. */
  highlights: Highlight[];
  /** 3–5 procedure steps with durations where sensible. */
  steps: Step[];
  /** 4–6 "why choose us" bullets (facts only). */
  benefits: string[];
  /** 4–6 FAQs, 40–90 word answers. */
  faqs: FAQ[];
  /** Closing CTA heading + one sentence. */
  cta: {
    title: string;
    text: string;
  };
  /** Optional related sub-service slugs (same or other category) as full paths. */
  related?: string[];
}
