import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  title: string;
  text: string;
  rating: number;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const defaultTestimonials: Testimonial[] = [
    {
      name: "Sarah Al Mansoori",
      title: "Business Owner, Dubai",
      text: "Amazing experience! Dr. Nemanja and his team made my smile transformation seamless. Professional, kind, and the results exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      title: "Marketing Manager, Abu Dhabi",
      text: "Best dental clinic in Dubai. The care and attention to detail is exceptional. I felt comfortable throughout the entire implant procedure.",
      rating: 5,
    },
    {
      name: "Miloš Jeremić",
      title: "Software Engineer, Dubai",
      text: "The team's professionalism and kindness made my treatment smooth and comfortable. My smile has never looked better. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      title: "Doctor, Dubai",
      text: "As a healthcare professional, I appreciate their scientific approach and modern equipment. My Invisalign treatment was perfectly planned.",
      rating: 5,
    },
    {
      name: "James Thompson",
      title: "Expatriate, Dubai",
      text: "Traveled from UK for dental tourism package. Exceptional service, hotel coordination, and follow-up care. Worth every penny!",
      rating: 5,
    },
  ];

  const items = testimonials || defaultTestimonials;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoScroll) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (isMobile ? items.length : Math.ceil(items.length / 3)));
    }, 5000);
    return () => clearInterval(timer);
  }, [autoScroll, items.length, isMobile]);

  const handlePrev = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : (isMobile ? items.length : Math.ceil(items.length / 3)) - 1));
  };

  const handleNext = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev + 1) % (isMobile ? items.length : Math.ceil(items.length / 3)));
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [items[currentIndex]];
    }
    return items.slice(currentIndex * 3, currentIndex * 3 + 3);
  };

  const visibleItems = getVisibleTestimonials();
  const totalSlides = isMobile ? items.length : Math.ceil(items.length / 3);

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from patients who transformed their smiles
          </p>
        </div>

        {/* Desktop: 3 Cards, Mobile: 1 Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {visibleItems.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border transition-all duration-500 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-foreground mb-8 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-bold text-secondary text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoScroll(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-primary/50 w-2"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Counter */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          {isMobile ? `${currentIndex + 1} of ${items.length}` : `Showing ${currentIndex * 3 + 1}-${Math.min((currentIndex + 1) * 3, items.length)} of ${items.length}`}
        </p>
      </div>
    </section>
  );
}
