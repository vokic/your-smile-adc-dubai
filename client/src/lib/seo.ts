import {
  CLINIC_AREA,
  CLINIC_CITY,
  CLINIC_EMAIL,
  CLINIC_FOUNDED_YEAR,
  CLINIC_MAPS_URL,
  CLINIC_NAME,
  CLINIC_STREET,
  FOUNDER,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEW_RATING,
  REGULAR_PHONE,
  SOCIAL_LINKS,
  WORKING_HOURS,
} from "./constants";

export const SITE_URL = "https://yoursmileadvanceddental.ae";
export const SITE_NAME = CLINIC_NAME;
export const DEFAULT_OG_IMAGE = "/og-image.jpg";
// The clinic has no X/Twitter account. Leave empty until it does.
export const TWITTER_HANDLE = "";

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
        dayOfWeek: wh.day,
        opens: parsed.opens,
        closes: parsed.closes,
      };
    })
    .filter(Boolean);
}

// UAE addresses have no Western postal code — the field is intentionally
// omitted rather than shipped with a bogus value.
function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: CLINIC_STREET,
    addressLocality: CLINIC_AREA,
    addressRegion: CLINIC_CITY,
    addressCountry: "AE",
  };
}

function founderPerson() {
  return {
    "@type": "Person",
    name: FOUNDER.name,
    honorificSuffix: FOUNDER.credentials,
    jobTitle: FOUNDER.title,
    worksFor: { "@type": "Dentist", name: SITE_NAME },
  };
}

export function jsonLdLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#clinic`,
    name: SITE_NAME,
    image: `${SITE_URL}/logo.jpg`,
    description:
      "Dental center in Dubai JLT specializing in complex cases: emergency care, Hollywood smiles, full-mouth implant rehabilitation, no-prep ceramic veneers, crowns, orthodontics and private at-home dental visits.",
    address: postalAddress(),
    hasMap: CLINIC_MAPS_URL,
    telephone: REGULAR_PHONE,
    email: CLINIC_EMAIL,
    url: SITE_URL,
    priceRange: "AED",
    areaServed: "Dubai, UAE",
    founder: founderPerson(),
    foundingDate: CLINIC_FOUNDED_YEAR,
    sameAs: Object.values(SOCIAL_LINKS),
    openingHoursSpecification: openingHoursSpecification(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_REVIEW_RATING.toFixed(1),
      reviewCount: String(GOOGLE_REVIEW_COUNT),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    sameAs: Object.values(SOCIAL_LINKS),
    foundingDate: CLINIC_FOUNDED_YEAR,
    founders: [founderPerson()],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: REGULAR_PHONE,
      email: CLINIC_EMAIL,
    },
    address: postalAddress(),
  };
}

/** Schema for a single treatment page (service landing). */
export function jsonLdService(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    procedureType: opts.serviceType ?? "Dental procedure",
    provider: { "@id": `${SITE_URL}/#clinic` },
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
