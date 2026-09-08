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
export const WORKING_HOURS = [
  { day: "Monday", hours: "12 PM – 9 PM" },
  { day: "Tuesday", hours: "9 AM – 6 PM" },
  { day: "Wednesday", hours: "12 PM – 9 PM" },
  { day: "Thursday", hours: "9 AM – 6 PM" },
  { day: "Friday", hours: "Closed" },
  { day: "Saturday", hours: "12 PM – 9 PM" },
  { day: "Sunday", hours: "9 AM – 6 PM" },
] as const;

/** Compact hours summary for footers / cards. */
export const WORKING_HOURS_SUMMARY = [
  { label: "Mon, Wed, Sat", hours: "12 PM – 9 PM" },
  { label: "Tue, Thu, Sun", hours: "9 AM – 6 PM" },
  { label: "Friday", hours: "Closed" },
] as const;

// Social Media Links (taken from the previous clinic website)
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yoursmile.adc.dubai/",
  facebook:
    "https://www.facebook.com/people/Your-Smile-Advanced-Dental-Center-Dubai/61570641483846/",
} as const;

// Clinic Information
export const CLINIC_NAME = "Your Smile Advanced Dental Center";
export const CLINIC_SHORT_NAME = "Your Smile ADC";
export const CLINIC_STREET = "HDS Business Centre, Office 1604, Cluster M";
export const CLINIC_AREA = "Jumeirah Lake Towers";
export const CLINIC_CITY = "Dubai";
export const CLINIC_ADDRESS = `${CLINIC_STREET}, ${CLINIC_AREA}, ${CLINIC_CITY}, UAE`;
export const CLINIC_MAPS_URL = "https://maps.app.goo.gl/KrBurSoUigfgZ1df7";
export const CLINIC_EMAIL = "info@yoursmileadcdubai.com";
export const CLINIC_FOUNDED_YEAR = "2025";

// Google Business Profile (owner-confirmed, Sept 2026). Update both values
// together when the count changes meaningfully — they feed JSON-LD.
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
export const IMPLANT_BRAND = "JD Evolution Plus";
export const IMPLANT_WARRANTY =
  `Lifetime warranty on ${IMPLANT_BRAND} implants, backed by our supplier agreement in Dubai.`;

// Positioning — the one line the whole site repeats
export const CLINIC_TAGLINE =
  "Specialists in complex cases: emergency care, Hollywood smiles and complete smile transformations.";
export const CLINIC_SPECIALTIES = [
  "Emergency dental care",
  "Hollywood smile",
  "Complete smile transformations",
  "Smile transformation with implants",
  "Smile transformation with veneers",
  "Smile transformation with crowns & bridges",
] as const;

// Legal
export const LEGAL_LAST_UPDATED = "8 September 2026";
