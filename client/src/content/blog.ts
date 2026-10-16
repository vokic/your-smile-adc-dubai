// Patient-education articles shown at /blog/<slug>: the list and metadata.
// The article texts live in blog-bodies.ts so that the Home page teaser,
// which ships in the main bundle, does not carry them. English is authored
// here; ru/de override title/excerpt/category/body through the locale files
// (`blogArticles.<slug>.*`), the same overlay pattern as content/services.
// Facts must match the owner-confirmed copy: no prices, no invented
// statistics, ceramic veneers only. Approved by the owner (Oct 2026); do not
// add a "medically reviewed by" line or reviewedBy schema (owner's decision).

import type { Overlay } from "./services/localize";

export interface BlogArticle {
  slug: string;
  title: string;
  /** <title> without the site-name suffix. Max 45 characters. */
  seoTitle: string;
  /** Meta description, 130–155 characters. */
  seoDescription: string;
  excerpt: string;
  category: string;
  /** ISO date (yyyy-mm-dd). */
  datePublished: string;
  /** 2–4 treatment pages (route paths) shown as "Related treatments". */
  related: string[];
}

export const BLOG_ARTICLES: readonly BlogArticle[] = [
  {
    slug: "dental-veneers-guide",
    title: "The Complete Guide to Dental Veneers: Transform Your Smile",
    seoTitle: "Dental Veneers: The Complete Patient Guide",
    seoDescription:
      "A guide to no-prep ceramic veneers in Dubai: no shaving, no injections, just two visits. How long veneers last, who they suit and how to look after them.",
    excerpt:
      "Discover how ceramic veneers can give you a natural-looking Hollywood smile. Learn how no-prep veneers work, how long they last and what to expect at each visit.",
    category: "Cosmetic Dentistry",
    datePublished: "2026-10-14",
    related: ["/veneers", "/cosmetic", "/whitening", "/crowns-bridges/porcelain-crowns"],
  },
  {
    slug: "invisalign-vs-braces",
    title: "Invisalign vs Traditional Braces: Which Is Right for You?",
    seoTitle: "Invisalign or Braces? How to Choose",
    seoDescription:
      "Invisalign or braces? Compare clear aligners with metal and ceramic braces on comfort, visibility, treatment time and results, with advice from Dubai JLT.",
    excerpt:
      "Compare the pros and cons of clear aligners versus metal braces to make the best choice for your orthodontic journey.",
    category: "Orthodontics",
    datePublished: "2026-10-14",
    related: [
      "/orthodontics/invisalign",
      "/orthodontics/metal-braces",
      "/orthodontics/ceramic-braces",
      "/orthodontics/retainers",
    ],
  },
  {
    slug: "teeth-whitening-myths",
    title: "Professional Teeth Whitening: Myths vs Reality",
    seoTitle: "Teeth Whitening Myths: What Really Works",
    seoDescription:
      "Does whitening damage enamel? Do strips work? We separate teeth whitening myths from facts and compare laser, in-office and take-home options in Dubai.",
    excerpt:
      "Understand the facts about professional whitening treatments and why they're superior to store-bought options.",
    category: "Teeth Whitening",
    datePublished: "2026-10-14",
    related: ["/whitening/laser", "/whitening/in-office", "/whitening/take-home-kits", "/veneers"],
  },
  {
    slug: "signs-you-need-crown-or-bridge",
    title: "5 Signs You Need a Dental Crown or Bridge",
    seoTitle: "5 Signs You Need a Dental Crown or Bridge",
    seoDescription:
      "A large filling, a cracked or root-treated tooth, worn teeth or a gap: five signs you may need a dental crown or bridge, and how our Dubai dentists help.",
    excerpt:
      "Learn how to identify if your teeth require restorative treatment with crowns or bridges to restore function and aesthetics.",
    category: "Restorative Dentistry",
    datePublished: "2026-10-14",
    related: [
      "/crowns-bridges",
      "/crowns-bridges/zirconia-crowns",
      "/crowns-bridges/traditional-bridges",
      "/restorative/inlays-onlays",
    ],
  },
  {
    slug: "dental-implants-missing-teeth",
    title: "Dental Implants: The Ultimate Solution for Missing Teeth",
    seoTitle: "Missing Teeth? How Dental Implants Help",
    seoDescription:
      "How dental implants replace missing teeth: titanium or ceramic, each treatment step, bone grafting and the lifetime warranty on our implants in Dubai JLT.",
    excerpt:
      "Everything you need to know about dental implants, from the procedure to recovery and long-term benefits.",
    category: "Dental Implants",
    datePublished: "2026-10-14",
    related: [
      "/implants",
      "/crowns-bridges/implant-supported-bridges",
      "/dental-surgery/bone-grafting",
      "/dental-surgery/sinus-lift",
    ],
  },
  {
    slug: "dental-emergency-what-to-do",
    title: "Emergency Dentistry: When to Call and What to Do",
    seoTitle: "Dental Emergency in Dubai: What to Do",
    seoDescription:
      "Knocked-out tooth, toothache, swelling or a lost crown? What to do in a dental emergency, when to call our emergency line and how to get help in Dubai.",
    excerpt:
      "Quick guide on recognizing dental emergencies and the steps to take before reaching our clinic.",
    category: "Emergency Care",
    datePublished: "2026-10-14",
    related: ["/emergency", "/at-home", "/dental-surgery/extractions", "/crowns-bridges/same-day-crowns"],
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry: Save Money by Preventing Problems",
    seoTitle: "Preventive Dentistry in Dubai: Why It Pays",
    seoDescription:
      "Why preventive dentistry in Dubai saves money and discomfort: check-ups, cleanings, fluoride, sealants and daily habits that keep dental problems small.",
    excerpt:
      "Understand why preventive care is the best investment for your oral health and long-term savings.",
    category: "General & Preventive",
    datePublished: "2026-10-14",
    related: [
      "/general-preventive/check-ups",
      "/general-preventive/cleanings",
      "/general-preventive/sealants",
      "/general-preventive/kids-dentistry",
    ],
  },
  {
    slug: "digital-dental-xrays",
    title: "How Digital X-Rays Are Revolutionizing Dental Diagnostics",
    seoTitle: "Digital Dental X-Rays: OPG and CBCT Explained",
    seoDescription:
      "How digital X-rays, OPG panoramic, 3D CBCT and cephalometric imaging improve dental diagnosis and treatment planning with low radiation, in Dubai JLT.",
    excerpt:
      "Explore the technology behind modern digital X-rays and how they improve treatment planning and patient safety.",
    category: "Technology",
    datePublished: "2026-10-14",
    related: ["/xray-opg", "/implants", "/dental-surgery/wisdom-tooth", "/general-preventive/check-ups"],
  },
  {
    slug: "gum-disease-guide",
    title: "The Truth About Gum Disease: Symptoms, Treatment, and Prevention",
    seoTitle: "Gum Disease: Early Signs and What to Do",
    seoDescription:
      "Bleeding gums? The warning signs of gum disease, how gingivitis and periodontitis are treated, and how to prevent gum problems. Expert advice in Dubai.",
    excerpt:
      "Comprehensive overview of gum disease stages, warning signs, and effective treatment options available.",
    category: "Oral Health",
    datePublished: "2026-10-14",
    related: [
      "/general-preventive/gum-care",
      "/general-preventive/cleanings",
      "/general-preventive/check-ups",
      "/xray-opg",
    ],
  },
];

export function findArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}

export const blogPath = (a: Pick<BlogArticle, "slug">) => `/blog/${a.slug}`;

/**
 * Overlay ru/de translations from `blogArticles.<slug>.*`; anything not yet
 * translated falls back to the English source above.
 */
export function localizeArticle(a: BlogArticle, { tOr }: Overlay): BlogArticle {
  const base = `blogArticles.${a.slug}`;
  return {
    ...a,
    title: tOr(`${base}.title`, a.title),
    seoTitle: tOr(`${base}.seoTitle`, a.seoTitle),
    seoDescription: tOr(`${base}.seoDescription`, a.seoDescription),
    excerpt: tOr(`${base}.excerpt`, a.excerpt),
    category: tOr(`${base}.category`, a.category),
  };
}

const DATE_LOCALES: Record<string, string> = { en: "en-GB", ru: "ru-RU", de: "de-DE" };

/** "14 October 2026" in the visitor's language. */
export function formatArticleDate(iso: string, language: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(DATE_LOCALES[language] ?? "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
