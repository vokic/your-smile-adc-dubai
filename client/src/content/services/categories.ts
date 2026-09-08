import type { CategorySlug, ServiceCategory } from "./types";

export const CATEGORIES: Record<CategorySlug, ServiceCategory> = {
  "dental-surgery": {
    slug: "dental-surgery",
    path: "/dental-surgery",
    name: "Oral & Dental Surgery",
    shortName: "Dental Surgery",
  },
  "general-preventive": {
    slug: "general-preventive",
    path: "/general-preventive",
    name: "General & Preventive Dentistry",
    shortName: "General & Preventive",
  },
  "crowns-bridges": {
    slug: "crowns-bridges",
    path: "/crowns-bridges",
    name: "Crowns & Bridges",
    shortName: "Crowns & Bridges",
  },
  whitening: {
    slug: "whitening",
    path: "/whitening",
    name: "Teeth Whitening",
    shortName: "Whitening",
  },
  orthodontics: {
    slug: "orthodontics",
    path: "/orthodontics",
    name: "Orthodontics & Clear Aligners",
    shortName: "Orthodontics",
  },
  restorative: {
    slug: "restorative",
    path: "/restorative",
    name: "Restorative Dentistry",
    shortName: "Restorative",
  },
};
