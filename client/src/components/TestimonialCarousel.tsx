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
    if (!autoScroll) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoScroll, items.length]);

  const handlePrev = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const current = items[currentIndex];

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

        <div className="max-w-2xl mx-auto">
          <div
            className="relative h-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border transition-all duration-500"
            key={currentIndex}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-foreground mb-8 italic leading-relaxed">
              "{current.text}"
            </p>

            {/* Author */}
            <div className="border-t border-border pt-6">
              <p className="font-bold text-secondary text-lg">{current.name}</p>
              <p className="text-sm text-muted-foreground">{current.title}</p>
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoScroll(false);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  data-testid={`testimonial-dot-${idx}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-20">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Testimonial Count */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </section>
  );
}
