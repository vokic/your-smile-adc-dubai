import { SEO } from "@/components/SEO";
import { SmileTransformations } from "@/components/SmileTransformations";
import { CTASection } from "@/components/CTASection";
import { jsonLdBreadcrumb } from "@/lib/seo";
import { TRANSFORMATIONS, TRANSFORMATION_CATEGORIES } from "@/lib/content";

/**
 * Before & after gallery grouped by category with plain headings — the
 * owner decided a filter UI isn't needed for the current volume of cases.
 */
export default function Gallery() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Smile Gallery", path: "/gallery" },
  ];
  const categoriesWithCases = TRANSFORMATION_CATEGORIES.filter((c) =>
    TRANSFORMATIONS.some((t) => t.category === c)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Smile Transformation Gallery - Before & After in Dubai"
        description="Before-and-after smile transformations from Your Smile Advanced Dental Center Dubai JLT: veneers, implants, orthodontics, whitening and complete smile makeovers."
        path="/gallery"
        jsonLd={[jsonLdBreadcrumb(crumbs)]}
      />

      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">Smile Transformation Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Real results from real patients of our Dubai clinic, shared with their consent. Individual results vary.
            </p>
          </div>
        </div>
      </section>

      {categoriesWithCases.length === 0 ? (
        <SmileTransformations title="Before & After" subtitle="Our gallery is being prepared." showViewAll={false} />
      ) : (
        categoriesWithCases.map((cat, i) => (
          <SmileTransformations
            key={cat}
            category={cat}
            title={cat}
            subtitle=""
            showViewAll={false}
            bgColor={i % 2 ? "bg-muted/30" : "bg-background"}
          />
        ))
      )}

      <CTASection title="Ready for Your Smile Transformation?" text="Book a consultation and see your own before-and-after designed digitally first." />
    </div>
  );
}
