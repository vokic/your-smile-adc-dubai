// Single source of truth for clinic facts (NAP, hours, social, people).
// Every value here was confirmed by the owner (see .claude/workspace/specs/
// odgovori-vlasnika-2026-09.md). Do not invent numbers — if a fact is
// unknown, leave it out rather than guess.

// Phone Numbers (three distinct lines on purpose — not a NAP inconsistency)
export const EMERGENCY_PHONE = "+971523301356";
export const REGULAR_PHONE = "+971588282432";
export const WHATSAPP_PHONE = "+971585828257";

// Formatted phone numbers for display
export const EMERGENCY_PHONE_DISPLAY = "+971 52 330 1356";
export const REGULAR_PHONE_DISPLAY = "+971 58 828 2432";
export const WHATSAPP_PHONE_DISPLAY = "+971 58 582 82 57";

/** wa.me deep link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Working Hours (confirmed by owner, Sept 2026 — same schedule year-round,
// no holiday/Ramadan variation)
// `day` / `label` stay in English because schema.org JSON-LD consumes them.
// `key` is what the UI translates (hours.days.* / hours.summary.*); `closed`
// marks the rows whose time cell is a word rather than a clock range.
export const WORKING_HOURS = [
  { key: "monday", day: "Monday", hours: "12 PM – 9 PM" },
  { key: "tuesday", day: "Tuesday", hours: "9 AM – 6 PM" },
  { key: "wednesday", day: "Wednesday", hours: "12 PM – 9 PM" },
  { key: "thursday", day: "Thursday", hours: "9 AM – 6 PM" },
  { key: "friday", day: "Friday", hours: "Closed", closed: true },
  { key: "saturday", day: "Saturday", hours: "12 PM – 9 PM" },
  { key: "sunday", day: "Sunday", hours: "9 AM – 6 PM" },
] as const;

/** Compact hours summary for footers / cards. */
export const WORKING_HOURS_SUMMARY = [
  { key: "midWeek", label: "Mon, Wed, Sat", hours: "12 PM – 9 PM" },
  { key: "altDays", label: "Tue, Thu, Sun", hours: "9 AM – 6 PM" },
  { key: "friday", label: "Friday", hours: "Closed", closed: true },
] as const;

/** "12 PM – 9 PM" → { opens: "12:00", closes: "21:00" }; null for "Closed". */
export function parseHours(hours: string): { opens: string; closes: string } | null {
  const match = hours.match(/(\d{1,2})\s*(AM|PM)\s*[–-]\s*(\d{1,2})\s*(AM|PM)/i);
  if (!match) return null;
  const to24h = (h: string, ampm: string) => {
    let n = parseInt(h, 10);
    if (ampm.toUpperCase() === "PM" && n !== 12) n += 12;
    if (ampm.toUpperCase() === "AM" && n === 12) n = 0;
    return String(n).padStart(2, "0") + ":00";
  };
  return { opens: to24h(match[1], match[2]), closes: to24h(match[3], match[4]) };
}

/**
 * A clock range as the visitor's language writes it: English keeps
 * "12 PM – 9 PM", Russian and German read "12:00–21:00".
 */
export function formatHours(hours: string, language: string): string {
  if (language === "en") return hours;
  const parsed = parseHours(hours);
  return parsed ? `${parsed.opens}–${parsed.closes}` : hours;
}

// Social Media Links (taken from the previous clinic website)
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yoursmile.adc.dubai/",
  facebook:
    "https://www.facebook.com/people/Your-Smile-Advanced-Dental-Center-Dubai/61570641483846/",
} as const;

// Clinic Information
export const CLINIC_NAME = "Your Smile Advanced Dental Center";
export const CLINIC_SHORT_NAME = "Your Smile ADC";
export const CLINIC_BUILDING = "HDS Business Centre";
export const CLINIC_CLUSTER = "Cluster M";
export const CLINIC_STREET = `${CLINIC_BUILDING}, Office 1604, ${CLINIC_CLUSTER}`;
export const CLINIC_AREA = "Jumeirah Lake Towers";
export const CLINIC_CITY = "Dubai";
export const CLINIC_ADDRESS = `${CLINIC_STREET}, ${CLINIC_AREA}, ${CLINIC_CITY}, UAE`;
export const CLINIC_MAPS_URL = "https://maps.app.goo.gl/KrBurSoUigfgZ1df7";
/** Pin of the clinic's Google Maps listing (the place behind CLINIC_MAPS_URL). */
export const CLINIC_GEO = { latitude: 25.0641917, longitude: 55.1380504 } as const;

/**
 * Source for the map iframes. Google geocodes the `q` parameter on its side,
 * so this stays correct as long as the address does. The alternative
 * `/maps/embed?pb=...` form hard-codes a place id and viewport and only
 * works when copied verbatim out of Google Maps — a hand-written one points
 * nowhere. The office number is left out because it confuses the geocoder.
 */
export const CLINIC_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${CLINIC_BUILDING}, ${CLINIC_CLUSTER}, ${CLINIC_AREA}, ${CLINIC_CITY}`,
)}&output=embed`;
export const CLINIC_EMAIL = "info@yoursmileadcdubai.com";
export const CLINIC_FOUNDED_YEAR = "2025";

// Google Business Profile (owner-confirmed, Sept 2026). Update both values
// together when the count changes meaningfully — they are shown in the
// Footer and GoogleRatingBanner.
export const GOOGLE_REVIEW_COUNT = 107;
export const GOOGLE_REVIEW_RATING = 5.0;
export const GOOGLE_REVIEWS_URL = CLINIC_MAPS_URL;

// Founder (public name as the owner wants it shown)
export const FOUNDER = {
  name: "Dr. Nemanja Kukoljac",
  credentials: "DMD, DDS",
  title: "Specialist Dentist | Implantologist | Oral Surgery & Cosmetic Dentistry",
  /** Years of cosmetic dentistry experience — refers to Dr. Kukoljac personally, not the clinic. */
  cosmeticExperienceYears: 18,
} as const;

// Implants
// The warranty and positioning copy is translated, so it lives in the locale
// files (clinic.implantWarranty, clinic.specialties).
export const IMPLANT_BRAND = "JD Evolution Plus";

// Legal
export const LEGAL_LAST_UPDATED = "14 October 2026";
