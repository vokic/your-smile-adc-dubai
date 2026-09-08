import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEW_RATING,
  GOOGLE_REVIEWS_URL,
} from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/content";

/**
 * Honest social proof: the real Google rating + count, a link to read them
 * all on Google, and the testimonials we actually have permission to show.
 * Replaces the old carousel of invented "Google Patient" quotes.
 */
export function GoogleRatingBanner() {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-14">
          <div className="flex gap-1" aria-label={`${GOOGLE_REVIEW_RATING.toFixed(1)} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Rated {GOOGLE_REVIEW_RATING.toFixed(1)} on Google
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              {GOOGLE_REVIEW_COUNT} verified patient reviews, every one of them real. Read what our patients in Dubai say
              about their implants, veneers, emergency visits and family care.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/40 text-white hover:bg-white hover:text-secondary gap-2"
          >
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Read all {GOOGLE_REVIEW_COUNT} reviews on Google <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.author}
              className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/10 text-left hover:bg-white/15 transition-all flex flex-col"
            >
              <div className="flex gap-0.5 mb-4" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="italic text-white/90 leading-relaxed flex-1">"{t.text}"</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.author}</p>
                  {t.meta && <p className="text-xs text-white/60">{t.meta}</p>}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
