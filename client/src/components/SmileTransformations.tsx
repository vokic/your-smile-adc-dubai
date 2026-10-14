import { Link } from "wouter";
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";
import {
  TRANSFORMATIONS,
  TRANSFORMATION_CATEGORIES,
  type Transformation,
  type TransformationCategory,
} from "@/lib/content";
import { useLanguage } from "@/hooks/useLanguage";

interface SmileTransformationsProps {
  /** Show only one category (used on treatment pages). */
  category?: TransformationCategory;
  /** Cap the number of pairs shown (Home uses a small teaser). */
  limit?: number;
  /** Both default to the translated gallery heading / subheading. */
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  bgColor?: "bg-background" | "bg-muted/30";
}

/**
 * Before/after gallery fed by TRANSFORMATIONS in lib/content.ts. When there
 * are no cases yet it renders an honest "gallery coming soon" card pointing
 * to Instagram — never fabricated patient stories or placeholder art.
 */
export function SmileTransformations({
  category,
  limit,
  title,
  subtitle,
  showViewAll = true,
  bgColor = "bg-background",
}: SmileTransformationsProps) {
  const { t } = useLanguage();
  const items = TRANSFORMATIONS.filter((t) => !category || t.category === category).slice(
    0,
    limit ?? Infinity
  );

  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{title ?? t("transformations.defaultTitle")}</h2>
          <p className="text-muted-foreground text-lg">{subtitle ?? t("transformations.defaultSubtitle")}</p>
        </div>

        {items.length === 0 ? (
          <ComingSoon />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {items.map((t, i) => (
              <BeforeAfterPair key={`${t.category}-${i}`} item={t} />
            ))}
          </div>
        )}

        {showViewAll && items.length > 0 && (
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full font-semibold" asChild>
              <Link href="/gallery">
                {t("transformations.viewFullGallery")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function BeforeAfterPair({ item }: { item: Transformation }) {
  const { t } = useLanguage();
  const category = t(`transformationCategories.${item.category}`).toLowerCase();
  return (
    <figure className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative rounded-xl overflow-hidden border border-border aspect-[4/3] bg-muted">
          <img src={item.before} alt={t("transformations.beforeAlt", { category })} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute top-3 left-3 bg-secondary/80 text-white px-3 py-1 rounded-full text-xs font-bold">{t("common.before")}</span>
        </div>
        <div className="relative rounded-xl overflow-hidden border border-primary/30 aspect-[4/3] bg-muted">
          <img src={item.after} alt={t("transformations.afterAlt", { category })} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">{t("common.after")}</span>
        </div>
      </div>
      <figcaption className="flex items-center justify-between text-sm">
        <span className="font-semibold text-primary">{t(`transformationCategories.${item.category}`)}</span>
        {item.caption && <span className="text-muted-foreground">{item.caption}</span>}
      </figcaption>
    </figure>
  );
}

function ComingSoon() {
  const { t } = useLanguage();
  const categories = TRANSFORMATION_CATEGORIES.slice(0, 3)
    .map((c) => t(`transformationCategories.${c}`))
    .join(", ")
    .toLowerCase();
  return (
    <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-10 text-center space-y-5">
      <p className="text-secondary text-lg font-medium">
        {t("transformations.comingSoonLead")}
      </p>
      <p className="text-muted-foreground">
        {t("transformations.comingSoonBody", { categories })}
      </p>
      {/* h-auto + whitespace-normal: the DE label is wider than the card on a 375px screen. */}
      <Button asChild variant="outline" className="h-auto min-h-10 whitespace-normal rounded-full gap-2">
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram className="h-4 w-4" /> {t("transformations.instagramCta")}
        </a>
      </Button>
    </div>
  );
}
