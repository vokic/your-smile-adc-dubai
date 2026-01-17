// Hardcoded content data - to be moved to CMS/API in the future

export const SERVICES = [
  { 
    title: "Veneers in Dubai", 
    desc: "Achieve a flawless smile with natural-looking porcelain or composite veneers.", 
    link: "/veneers", 
    image: "VENEERS PROCEDURE" 
  },
  { 
    title: "Dental Implants in Dubai", 
    desc: "Restore missing teeth permanently with advanced implant systems.", 
    link: "/implants", 
    image: "IMPLANT SURGERY" 
  },
  { 
    title: "Orthodontics & Invisalign", 
    desc: "Straighten your teeth discreetly with clear aligners.", 
    link: "/orthodontics", 
    image: "ORTHODONTICS" 
  },
  { 
    title: "Teeth Whitening in Dubai", 
    desc: "Safe, fast, and effective whitening treatments.", 
    link: "/whitening", 
    image: "WHITENING LAMP" 
  },
  { 
    title: "Crowns & Bridges", 
    desc: "Restore damaged or missing teeth with custom-made restorations.", 
    link: "/crowns-bridges", 
    image: "CROWNS BRIDGE" 
  },
  { 
    title: "Cosmetic Dentistry", 
    desc: "Complete smile transformations combining multiple treatments.", 
    link: "/cosmetic", 
    image: "SMILE DESIGN" 
  },
] as const;

export const DOCTORS = [
  { name: "Dr. Sarah Johnson", role: "Cosmetic Specialist" },
  { name: "Dr. Michael Chen", role: "Implantologist" },
  { name: "Dr. Emily Roberts", role: "Orthodontist" },
] as const;

export const TRANSFORMATIONS = [
  { before: "BEFORE VENEERS", after: "AFTER VENEERS" },
  { before: "BEFORE IMPLANTS", after: "AFTER IMPLANTS" },
  { before: "BEFORE INVISALIGN", after: "AFTER INVISALIGN" },
  { before: "BEFORE MAKEOVER", after: "AFTER MAKEOVER" },
  { before: "BEFORE WHITENING", after: "AFTER WHITENING" },
] as const;

export const GOOGLE_REVIEWS = [
  { 
    id: "1", 
    text: "Best experience ever! The veneers look so natural. Highly recommend Dr. Sarah.", 
    author: "Google Patient", 
    initials: "GP", 
    verified: true 
  },
  { 
    id: "2", 
    text: "Painless implant procedure. The team is so professional and kind.", 
    author: "Google Patient", 
    initials: "GP", 
    verified: true 
  },
  { 
    id: "3", 
    text: "My kids actually love coming to the dentist now. Great pediatric care!", 
    author: "Google Patient", 
    initials: "GP", 
    verified: true 
  },
  { 
    id: "4", 
    text: "Outstanding service! Invisalign treatment exceeded all my expectations.", 
    author: "Google Patient", 
    initials: "GP", 
    verified: true 
  },
  { 
    id: "5", 
    text: "Dr. Nemanja is absolutely brilliant. Very professional and caring.", 
    author: "Google Patient", 
    initials: "GP", 
    verified: true 
  },
] as const;

export const BLOG_POSTS = [
  { title: "5 Tips for Maintaining Your Veneers", date: "Nov 28, 2024", category: "Cosmetic Care" },
  { title: "Dental Implants: A Lifetime Investment", date: "Nov 25, 2024", category: "Implants" },
  { title: "Invisalign vs Traditional Braces", date: "Nov 22, 2024", category: "Orthodontics" },
] as const;
