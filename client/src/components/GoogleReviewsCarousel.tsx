import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GoogleReview {
  id: string;
  text: string;
  author: string;
  initials: string;
  verified?: boolean;
}

interface GoogleReviewsCarouselProps {
  reviews?: GoogleReview[];
  title?: string;
  subtitle?: string;
}

export function GoogleReviewsCarousel({
  reviews,
  title = "★5.0 Google Reviews - Dental Clinic Dubai",
  subtitle = "Our dental clinic in Dubai is rated ★5.0 on Google, trusted by patients for veneers, implants, Invisalign, and family care."
}: GoogleReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const defaultReviews: GoogleReview[] = [
    {
      id: "1",
      text: "Best experience ever! The veneers look so natural. Highly recommend Dr. Sarah.",
      author: "Google Patient",
      initials: "GP",
      verified: true
    },
    {
      id: "2",
      text: "Painless implant procedure. The team is so professional and kind.",
      author: "Google Patient",
      initials: "GP",
      verified: true
    },
    {
      id: "3",
      text: "My kids actually love coming to the dentist now. Great pediatric care!",
      author: "Google Patient",
      initials: "GP",
      verified: true
    },
    {
      id: "4",
      text: "Outstanding service! Invisalign treatment exceeded all my expectations.",
      author: "Google Patient",
      initials: "GP",
      verified: true
    },
    {
      id: "5",
      text: "Dr. Nemanja is absolutely brilliant. Very professional and caring.",
      author: "Google Patient",
      initials: "GP",
      verified: true
    },
  ];

  const displayReviews = reviews || defaultReviews;
  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(displayReviews.length / itemsPerPage);
  const showArrows = displayReviews.length > 3;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const getVisibleReviews = () => {
    const start = currentIndex * itemsPerPage;
    return displayReviews.slice(start, start + itemsPerPage);
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">{title}</h2>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed mx-auto">{subtitle}</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8 max-w-5xl mx-auto">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/10 text-left hover:bg-white/15 transition-all animate-in fade-in slide-in-from-bottom-4"
            >
              <p className="italic text-white/90 mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{review.author}</p>
                  {review.verified && (
                    <p className="text-xs text-green-400">✓ Verified Review</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Only show if more than 3 items */}
        {showArrows && (
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              onClick={handlePrev}
              size="icon"
              className="rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-secondary transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-yellow-400 w-8" : "bg-white/30 hover:bg-white/50 w-2"
                  }`}
                  aria-label={`Go to reviews page ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              size="icon"
              className="rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-secondary transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Page Counter */}
        {showArrows && (
          <p className="text-center text-white/60 text-sm">
            {isMobile
              ? `${currentIndex + 1} of ${totalPages}`
              : `Showing ${currentIndex * itemsPerPage + 1}-${Math.min((currentIndex + 1) * itemsPerPage, displayReviews.length)} of ${displayReviews.length}`}
          </p>
        )}
      </div>
    </section>
  );
}
