// Hardcoded content data — single source for services, team, gallery and
// testimonials. Facts here must be owner-confirmed; see
// .claude/workspace/specs/odgovori-vlasnika-2026-09.md.

import nemanjaPhoto from "@assets/doctors/nemanja-kukoljac.png";
import upasanaPhoto from "@assets/doctors/upasana-khemka.png";
import amelioPhoto from "@assets/doctors/amelio-tommaso.png";
import milevaPhoto from "@assets/doctors/mileva-karabasil-jovanovic.png";
import maiPhoto from "@assets/doctors/mai-ahmed.png";
import ayyaPhoto from "@assets/doctors/ayya-abu-shamleh.png";
import mariamPhoto from "@assets/doctors/mariam-hares.png";
import founderPhoto from "@assets/doctors/founder.jpg";

// Prose lives in the locale files (`homeServices.<key>.*`); only the routing
// and ordering stay here.
export const SERVICES = [
  { key: "veneers", link: "/veneers" },
  { key: "implants", link: "/implants" },
  { key: "emergency", link: "/emergency" },
  { key: "crownsBridges", link: "/crowns-bridges" },
  { key: "orthodontics", link: "/orthodontics" },
  { key: "atHome", link: "/at-home" },
] as const;

export interface Doctor {
  slug: string;
  /** Proper noun — never translated. */
  name: string;
  credentials?: string;
  photo: string;
  isFounder?: boolean;
}

// Roster taken from the clinic's previous website (our-doctors page) and
// confirmed by the owner. Per the owner's instruction, no "years of
// experience" figures are shown for individual doctors.
// Role, full title and bio are translated: `doctors.profiles.<slug>.*`.
export const DOCTORS: readonly Doctor[] = [
  { slug: "nemanja-kukoljac", name: "Dr. Nemanja Kukoljac", credentials: "DMD, DDS", photo: nemanjaPhoto, isFounder: true },
  { slug: "upasana-khemka", name: "Dr. Upasana Khemka", photo: upasanaPhoto },
  { slug: "amelio-tommaso", name: "Dr. Amelio Tommaso", photo: amelioPhoto },
  { slug: "mileva-karabasil-jovanovic", name: "Dr. Mileva Karabasil Jovanovic", credentials: "BDS, MDS, PhD", photo: milevaPhoto },
  { slug: "mai-ahmed", name: "Dr. Mai Ahmed", credentials: "BDS", photo: maiPhoto },
  { slug: "ayya-abu-shamleh", name: "Dr. Ayya Abu Shamleh", photo: ayyaPhoto },
  { slug: "mariam-hares", name: "Dr. Mariam Hares", photo: mariamPhoto },
];

export const FOUNDER_PHOTO = founderPhoto;

export type TransformationCategory =
  | "Veneers"
  | "Implants"
  | "Orthodontics"
  | "Smile Makeover"
  | "Whitening";

export interface Transformation {
  category: TransformationCategory;
  before: string;
  after: string;
  caption?: string;
}

// Real before/after pairs are being supplied by the owner separately. Until
// they land, this list stays EMPTY and gallery sections render an honest
// "coming soon" state instead of placeholder art. To add a case: drop the
// two images into attached_assets/gallery/<category>/ and push an entry.
export const TRANSFORMATIONS: readonly Transformation[] = [];

export const TRANSFORMATION_CATEGORIES: readonly TransformationCategory[] = [
  "Veneers",
  "Implants",
  "Orthodontics",
  "Smile Makeover",
  "Whitening",
];

export interface Testimonial {
  /** Locale key under `patientQuotes.<key>` for the quote and the sub-label. */
  key: string;
  /** Proper noun — never translated. */
  author: string;
}

// Testimonials carried over from the clinic's previous website. The quote
// text is translated rather than re-written: `patientQuotes.<key>.text`.
export const TESTIMONIALS: readonly Testimonial[] = [
  { key: "julie", author: "Julie R." },
  { key: "milos", author: "Miloš" },
  { key: "marco", author: "Marco" },
];

// Titles, categories and formatted dates live in `blogPosts.<key>.*`.
export const BLOG_POSTS = [
  { key: "veneerTips" },
  { key: "implantsInvestment" },
  { key: "invisalignVsBraces" },
] as const;
