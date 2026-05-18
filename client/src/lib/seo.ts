import {
  CLINIC_ADDRESS,
  CLINIC_EMAIL,
  REGULAR_PHONE,
  SOCIAL_LINKS,
  WORKING_HOURS,
} from "./constants";

export const SITE_URL = "https://yoursmileadvanceddental.ae";
export const SITE_NAME = "Your Smile Advanced Dental Center";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";
export const TWITTER_HANDLE = ""; // TODO(placeholder): real clinic Twitter handle

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

function parseHours(hours: string): { opens: string; closes: string } | null {
  // Hours like "9 AM – 9 PM" or "Closed"
  if (hours === "Closed") return null;
  const match = hours.match(
    /(\d{1,2})\s*(AM|PM)\s*[–-]\s*(\d{1,2})\s*(AM|PM)/i
  );
  if (!match) return null;
  const to24h = (h: string, ampm: string) => {
    let n = parseInt(h, 10);
    if (ampm.toUpperCase() === "PM" && n !== 12) n += 12;
    if (ampm.toUpperCase() === "AM" && n === 12) n = 0;
    return String(n).padStart(2, "0") + ":00";
  };
  return {
    opens: to24h(match[1], match[2]),
    closes: to24h(match[3], match[4]),
  };
}

function openingHoursSpecification() {
  return WORKING_HOURS
    .map((wh) => {
      const parsed = parseHours(wh.hours);
      if (!parsed) return null;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[wh.day] ?? wh.day,
        opens: parsed.opens,
        closes: parsed.closes,
      };
    })
    .filter(Boolean);
}

// TODO(placeholder): real founding date, founder name, review count/rating.
// See PLACEHOLDERS.md for the full pre-go-live verification list.
const PLACEHOLDER_FOUNDING_DATE = "2024";
const PLACEHOLDER_FOUNDER_NAME = "Dr. Nemanja Vokic";
const PLACEHOLDER_REVIEW_COUNT = "250";
const PLACEHOLDER_REVIEW_RATING = "5";

export function jsonLdLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: SITE_NAME,
    image: `${SITE_URL}/logo.jpg`,
    description:
      "Luxury dental center in Dubai JLT offering veneers, implants, Invisalign, teeth whitening, and emergency care.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "HDS Business Centre, Jumeirah Lake Towers",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    telephone: REGULAR_PHONE,
    email: CLINIC_EMAIL,
    url: SITE_URL,
    priceRange: "AED",
    areaServed: "Dubai, UAE",
    sameAs: Object.values(SOCIAL_LINKS),
    openingHoursSpecification: openingHoursSpecification(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: PLACEHOLDER_REVIEW_RATING,
      reviewCount: PLACEHOLDER_REVIEW_COUNT,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    sameAs: Object.values(SOCIAL_LINKS),
    foundingDate: PLACEHOLDER_FOUNDING_DATE,
    founders: [{ "@type": "Person", name: PLACEHOLDER_FOUNDER_NAME }],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: REGULAR_PHONE,
      email: CLINIC_EMAIL,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "HDS Business Centre, Jumeirah Lake Towers",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  };
}

export function jsonLdFAQPage(
  faqs: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function jsonLdBreadcrumb(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
