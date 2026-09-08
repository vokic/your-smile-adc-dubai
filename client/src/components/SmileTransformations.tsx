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

interface SmileTransformationsProps {
  /** Show only one category (used on treatment pages). */
  category?: TransformationCategory;
  /** Cap the number of pairs shown (Home uses a small teaser). */
  limit?: number;
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
  title = "Smile Transformations",
  subtitle = "Real results from real patients treated at our JLT clinic. Individual results vary.",
  showViewAll = true,
  bgColor = "bg-background",
}: SmileTransformationsProps) {
  const items = TRANSFORMATIONS.filter((t) => !category || t.category === category).slice(
    0,
    limit ?? Infinity
  );

  return (
    <section className={`py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
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
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function BeforeAfterPair({ item }: { item: Transformation }) {
  return (
    <figure className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative rounded-xl overflow-hidden border border-border aspect-[4/3] bg-muted">
          <img src={item.before} alt={`Before ${item.category.toLowerCase()} treatment`} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute top-3 left-3 bg-secondary/80 text-white px-3 py-1 rounded-full text-xs font-bold">BEFORE</span>
        </div>
        <div className="relative rounded-xl overflow-hidden border border-primary/30 aspect-[4/3] bg-muted">
          <img src={item.after} alt={`After ${item.category.toLowerCase()} treatment`} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">AFTER</span>
        </div>
      </div>
      <figcaption className="flex items-center justify-between text-sm">
        <span className="font-semibold text-primary">{item.category}</span>
        {item.caption && <span className="text-muted-foreground">{item.caption}</span>}
      </figcaption>
    </figure>
  );
}

function ComingSoon() {
  return (
    <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-10 text-center space-y-5">
      <p className="text-secondary text-lg font-medium">
        We are preparing our before &amp; after gallery with patients who have kindly agreed to share their results.
      </p>
      <p className="text-muted-foreground">
        In the meantime, follow us on Instagram for the latest {TRANSFORMATION_CATEGORIES.slice(0, 3).join(", ").toLowerCase()} and smile
        makeover cases from the clinic.
      </p>
      <Button asChild variant="outline" className="rounded-full gap-2">
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram className="h-4 w-4" /> See our latest cases on Instagram
        </a>
      </Button>
    </div>
  );
}
