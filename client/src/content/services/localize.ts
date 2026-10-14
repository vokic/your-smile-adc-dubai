import type { ServiceCategory, SubService } from "./types";

/**
 * The treatment copy in this folder is authored in English TypeScript — it is
 * the English locale. Russian and German are supplied as overlays in the
 * locale files under `subServices.<slug>.*` and `serviceCategories.<slug>.*`,
 * and anything a translator has not reached yet falls back to the English
 * source here. That keeps one editable copy of the English rather than a
 * duplicate set of ~900 keys in en.json.
 */
export interface Overlay {
  tOr: (key: string, fallback: string) => string;
  tListOr: (key: string, fallback: string[]) => string[];
}

export function localizeCategory(c: ServiceCategory, { tOr }: Overlay): ServiceCategory {
  const base = `serviceCategories.${c.slug}`;
  return {
    ...c,
    name: tOr(`${base}.name`, c.name),
    shortName: tOr(`${base}.shortName`, c.shortName),
  };
}

export function localizeSubService(s: SubService, { tOr, tListOr }: Overlay): SubService {
  const base = `subServices.${s.slug}`;
  return {
    ...s,
    name: tOr(`${base}.name`, s.name),
    h1: tOr(`${base}.h1`, s.h1),
    seoTitle: tOr(`${base}.seoTitle`, s.seoTitle),
    seoDescription: tOr(`${base}.seoDescription`, s.seoDescription),
    heroSubtitle: tOr(`${base}.heroSubtitle`, s.heroSubtitle),
    intro: {
      heading: tOr(`${base}.intro.heading`, s.intro.heading),
      paragraphs: tListOr(`${base}.intro.paragraphs`, [...s.intro.paragraphs]),
    },
    highlights: s.highlights.map((h, i) => ({
      title: tOr(`${base}.highlights.${i}.title`, h.title),
      desc: tOr(`${base}.highlights.${i}.desc`, h.desc),
    })),
    steps: s.steps.map((step, i) => ({
      title: tOr(`${base}.steps.${i}.title`, step.title),
      description: tOr(`${base}.steps.${i}.description`, step.description),
      duration: step.duration === undefined ? undefined : tOr(`${base}.steps.${i}.duration`, step.duration),
    })),
    benefits: tListOr(`${base}.benefits`, [...s.benefits]),
    faqs: s.faqs.map((f, i) => ({
      question: tOr(`${base}.faqs.${i}.question`, f.question),
      answer: tOr(`${base}.faqs.${i}.answer`, f.answer),
    })),
    cta: {
      title: tOr(`${base}.cta.title`, s.cta.title),
      text: tOr(`${base}.cta.text`, s.cta.text),
    },
  };
}
