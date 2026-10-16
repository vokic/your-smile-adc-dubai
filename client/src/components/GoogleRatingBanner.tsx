import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEW_RATING,
  GOOGLE_REVIEWS_URL,
} from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/content";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Honest social proof: the real Google rating + count, a link to read them
 * all on Google, and the testimonials we actually have permission to show.
 * Replaces the old carousel of invented "Google Patient" quotes.
 */
export function GoogleRatingBanner() {
  const { t } = useLanguage();
  const rating = GOOGLE_REVIEW_RATING.toFixed(1);
  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-14">
          <div className="flex gap-1" role="img" aria-label={t("googleRating.starsAria", { rating })}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
              {t("googleRating.title", { rating })}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              {t("googleRating.body", { count: GOOGLE_REVIEW_COUNT })}
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/40 text-white hover:bg-white hover:text-secondary gap-2"
          >
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              {t("googleRating.readAll", { count: GOOGLE_REVIEW_COUNT })} <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((quote) => (
            <blockquote
              key={quote.author}
              className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/10 text-left hover:bg-white/15 transition-all flex flex-col"
            >
              <div className="flex gap-0.5 mb-4" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="italic text-white/90 leading-relaxed flex-1">"{t(`patientQuotes.${quote.key}.text`)}"</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-light/20 flex items-center justify-center text-white font-bold text-sm">
                  {quote.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{quote.author}</p>
                  <p className="text-xs text-white/80">{t(`patientQuotes.${quote.key}.meta`)}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
