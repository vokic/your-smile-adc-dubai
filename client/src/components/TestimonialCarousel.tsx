import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS, type Testimonial } from "@/lib/content";
import { useLanguage } from "@/hooks/useLanguage";

interface TestimonialCarouselProps {
  testimonials?: readonly Testimonial[];
}

/** Patient testimonials from lib/content.ts (owner-supplied, not invented). */
export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const { t: translate } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  // Paused while the pointer or keyboard focus is inside the carousel, so a
  // quote doesn't slide away mid-read (WCAG 2.2.2).
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const items = testimonials ?? TESTIMONIALS;
  const perPage = isMobile ? 1 : 3;
  const totalSlides = Math.max(1, Math.ceil(items.length / perPage));
  // Rotating the phone (3 per page ↔ 1 per page) changes the slide count, so
  // a stored index can point past the end; wrap it instead of rendering an
  // empty page.
  const slide = currentIndex % totalSlides;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoScroll || paused || totalSlides <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoScroll, paused, totalSlides]);

  const go = (idx: number) => {
    setAutoScroll(false);
    setCurrentIndex((idx + totalSlides) % totalSlides);
  };

  const visibleItems = items.slice(slide * perPage, slide * perPage + perPage);

  if (items.length === 0) return null;

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{translate("testimonials.title")}</h2>
          <p className="text-muted-foreground text-lg">{translate("testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12 max-w-5xl mx-auto">
          {visibleItems.map((quote) => (
            <blockquote
              key={quote.author}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base md:text-lg text-foreground mb-6 md:mb-8 italic leading-relaxed flex-1">"{translate(`patientQuotes.${quote.key}.text`)}"</p>
              <footer className="border-t border-border pt-6">
                <p className="font-bold text-secondary text-lg">{quote.author}</p>
                <p className="text-sm text-muted-foreground">{translate(`patientQuotes.${quote.key}.meta`)}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-4">
            <Button onClick={() => go(slide - 1)} variant="outline" size="icon" className="rounded-full" aria-label={translate("testimonials.prevAria")}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  aria-current={idx === slide ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${idx === slide ? "bg-primary w-8" : "bg-secondary/20 hover:bg-primary/50 w-2"}`}
                  aria-label={translate("testimonials.goToPageAria", { page: idx + 1 })}
                />
              ))}
            </div>
            <Button onClick={() => go(slide + 1)} variant="outline" size="icon" className="rounded-full" aria-label={translate("testimonials.nextAria")}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
