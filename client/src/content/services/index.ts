import type { CategorySlug, SubService } from "./types";
import { CATEGORIES } from "./categories";
import { DENTAL_SURGERY } from "./dental-surgery";
import { GENERAL_PREVENTIVE } from "./general-preventive";
import { CROWNS_BRIDGES } from "./crowns-bridges";
import { WHITENING } from "./whitening";
import { ORTHODONTICS } from "./orthodontics";
import { RESTORATIVE } from "./restorative";

export { CATEGORIES } from "./categories";
export type { SubService, ServiceCategory, CategorySlug, FAQ, Step, Highlight } from "./types";

export const ALL_SUB_SERVICES: readonly SubService[] = [
  ...DENTAL_SURGERY,
  ...GENERAL_PREVENTIVE,
  ...CROWNS_BRIDGES,
  ...WHITENING,
  ...ORTHODONTICS,
  ...RESTORATIVE,
];

export function subServicePath(s: SubService): string {
  return `${CATEGORIES[s.category].path}/${s.slug}`;
}

export function subServicesFor(category: CategorySlug): SubService[] {
  return ALL_SUB_SERVICES.filter((s) => s.category === category);
}

const BY_PATH = new Map(ALL_SUB_SERVICES.map((s) => [subServicePath(s), s]));

export function findSubService(path: string): SubService | undefined {
  return BY_PATH.get(path.replace(/\/+$/, "") || "/");
}
