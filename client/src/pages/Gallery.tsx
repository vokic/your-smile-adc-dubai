import { SEO } from "@/components/SEO";
import { SmileTransformations } from "@/components/SmileTransformations";
import { CTASection } from "@/components/CTASection";
import { jsonLdBreadcrumb } from "@/lib/seo";
import { TRANSFORMATIONS, TRANSFORMATION_CATEGORIES } from "@/lib/content";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Before & after gallery grouped by category with plain headings — the
 * owner decided a filter UI isn't needed for the current volume of cases.
 */
export default function Gallery() {
  const { t } = useLanguage();
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("gallery.crumb"), path: "/gallery" },
  ];
  const categoriesWithCases = TRANSFORMATION_CATEGORIES.filter((c) =>
    TRANSFORMATIONS.some((t) => t.category === c)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("gallery.seoTitle")}
        description={t("gallery.seoDescription")}
        path="/gallery"
        jsonLd={[jsonLdBreadcrumb(crumbs)]}
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">{t("gallery.title")}</h1>
            <p className="text-xl text-muted-foreground">{t("gallery.subtitle")}</p>
          </div>
        </div>
      </section>

      {categoriesWithCases.length === 0 ? (
        <SmileTransformations title={t("gallery.emptyTitle")} emptySubtitle={t("gallery.emptySubtitle")} showViewAll={false} />
      ) : (
        categoriesWithCases.map((cat, i) => (
          <SmileTransformations
            key={cat}
            category={cat}
            title={t(`transformationCategories.${cat}`)}
            subtitle=""
            showViewAll={false}
            bgColor={i % 2 ? "bg-muted/30" : "bg-background"}
          />
        ))
      )}

      <CTASection title={t("gallery.ctaTitle")} text={t("gallery.ctaText")} />
    </div>
  );
}
