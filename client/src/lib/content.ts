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

export const SERVICES = [
  {
    title: "Veneers in Dubai",
    desc: "No-prep ceramic veneers: a natural, flawless smile without shaving your teeth.",
    link: "/veneers",
  },
  {
    title: "Dental Implants in Dubai",
    desc: "Single implants to full-arch All-on-4 / All-on-6 rehabilitation with lifetime implant warranty.",
    link: "/implants",
  },
  {
    title: "Emergency Dentist",
    desc: "Same-day relief for toothache, broken teeth, swelling and dental trauma.",
    link: "/emergency",
  },
  {
    title: "Crowns & Bridges",
    desc: "Zirconia and porcelain crowns, same-day CAD/CAM crowns and implant-supported bridges.",
    link: "/crowns-bridges",
  },
  {
    title: "Orthodontics & Invisalign",
    desc: "Clear aligners, ceramic and metal braces for teens and adults.",
    link: "/orthodontics",
  },
  {
    title: "Private At-Home Dental Visit",
    desc: "Check-ups, cleanings, fillings and urgent care at your home or office in Dubai.",
    link: "/at-home",
  },
] as const;

export interface Doctor {
  slug: string;
  name: string;
  /** Short role shown on cards. */
  role: string;
  /** Full title as published on the clinic's previous website. */
  title: string;
  credentials?: string;
  bio: string;
  photo: string;
  isFounder?: boolean;
}

// Roster taken from the clinic's previous website (our-doctors page) and
// confirmed by the owner. Per the owner's instruction, no "years of
// experience" figures are shown for individual doctors.
export const DOCTORS: readonly Doctor[] = [
  {
    slug: "nemanja-kukoljac",
    name: "Dr. Nemanja Kukoljac",
    role: "Founder · Implantologist & Oral Surgeon",
    title: "Specialist Dentist | Implantologist | Oral Surgery & Cosmetic Dentistry",
    credentials: "DMD, DDS",
    bio: "Founder of Your Smile Advanced Dental Center. Dr. Kukoljac specializes in implantology, oral surgery and cosmetic dentistry, with a particular focus on complex full-mouth rehabilitation, Hollywood smile design and no-prep ceramic veneers. He continually refines his skills through advanced training in modern surgical and digital techniques.",
    photo: nemanjaPhoto,
    isFounder: true,
  },
  {
    slug: "upasana-khemka",
    name: "Dr. Upasana Khemka",
    role: "Oral & Maxillofacial Surgeon",
    title: "Specialist Dentist | Oral & Maxillofacial Surgeon | Cosmetic & Restorative Dentistry",
    bio: "Dr. Khemka excels in complex oral surgical procedures, full-mouth rehabilitations and smile makeovers, delivering both function and beauty with precision and care.",
    photo: upasanaPhoto,
  },
  {
    slug: "amelio-tommaso",
    name: "Dr. Amelio Tommaso",
    role: "Implantologist & Prosthodontics",
    title: "General Dentist | Oral Implantologist | Dental Prosthetics & Aesthetic Dentistry",
    bio: "A dentist with a technical background, Dr. Tommaso specializes in aesthetic restorations, implantology and prosthetics. His dual skill set ensures that each treatment is both functional and beautifully designed.",
    photo: amelioPhoto,
  },
  {
    slug: "mileva-karabasil-jovanovic",
    name: "Dr. Mileva Karabasil Jovanovic",
    role: "Orthodontics",
    title: "General Dentist | BDS, MDS (Orthodontics), PhD",
    credentials: "BDS, MDS, PhD",
    bio: "With international experience across Serbia, Japan and the UAE, Dr. Mileva combines orthodontic expertise with scientific rigor. She provides compassionate, personalized care and excels in restorative and cosmetic dentistry.",
    photo: milevaPhoto,
  },
  {
    slug: "mai-ahmed",
    name: "Dr. Mai Ahmed",
    role: "General & Cosmetic Dentist",
    title: "General and Cosmetic Dentist (BDS)",
    credentials: "BDS",
    bio: "Dr. Ahmed provides general and cosmetic dentistry, from preventive care and fillings to whitening and smile enhancements, with a gentle, patient-first approach.",
    photo: maiPhoto,
  },
  {
    slug: "ayya-abu-shamleh",
    name: "Dr. Ayya Abu Shamleh",
    role: "Aesthetic & Restorative Dentist",
    title: "General Dentist | Aesthetic & Restorative Dentistry",
    bio: "Dr. Abu Shamleh focuses on aesthetic and restorative dentistry, restoring damaged teeth with natural-looking results and a careful, detail-oriented approach.",
    photo: ayyaPhoto,
  },
  {
    slug: "mariam-hares",
    name: "Dr. Mariam Hares",
    role: "Aesthetic & Restorative Dentist",
    title: "General Dentist | Aesthetic & Restorative Dentistry",
    bio: "Dr. Hares provides aesthetic and restorative treatments, combining modern materials with a caring chairside manner to keep every visit comfortable.",
    photo: mariamPhoto,
  },
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
  text: string;
  author: string;
  /** Where the patient is from, or their role — shown under the name. */
  meta?: string;
}

// Testimonials carried over from the clinic's previous website. Google
// review texts will replace/extend these once the owner sends them.
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    text: "I recently visited Your Smile ADC and was highly impressed by the exceptional care and service. The warm and friendly staff, along with Dr. Nemanja's professionalism, made my visit outstanding. The state-of-the-art facilities, meticulous hygiene, and personalized care put me at ease.",
    author: "Julie R.",
    meta: "Google review",
  },
  {
    text: "The professionalism and friendliness of the entire staff made my dental experience stress-free. The results are amazing, and I appreciate the high standard of care they provide. I will definitely return for future treatments.",
    author: "Miloš",
    meta: "Patient from Serbia",
  },
  {
    text: "I was impressed by the level of expertise and attention to detail at this clinic. The team took the time to explain everything, and the treatment was painless and precise. My smile has never looked better!",
    author: "Marco",
    meta: "Patient from Italy",
  },
];

export const BLOG_POSTS = [
  { title: "5 Tips for Maintaining Your Veneers", date: "Nov 28, 2024", category: "Cosmetic Care" },
  { title: "Dental Implants: A Lifetime Investment", date: "Nov 25, 2024", category: "Implants" },
  { title: "Invisalign vs Traditional Braces", date: "Nov 22, 2024", category: "Orthodontics" },
] as const;
