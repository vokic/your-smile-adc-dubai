import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleries = [
    {
      title: "Porcelain Veneers Gallery",
      description: "Beautiful smile transformations with natural-looking veneers",
      category: "Veneers",
      images: [
        { before: "BEFORE VENEERS 1", after: "AFTER VENEERS 1" },
        { before: "BEFORE VENEERS 2", after: "AFTER VENEERS 2" },
        { before: "BEFORE VENEERS 3", after: "AFTER VENEERS 3" },
        { before: "BEFORE VENEERS 4", after: "AFTER VENEERS 4" },
      ]
    },
    {
      title: "Dental Implants Gallery",
      description: "Missing teeth restored with permanent, natural-looking implants",
      category: "Implants",
      images: [
        { before: "BEFORE IMPLANTS 1", after: "AFTER IMPLANTS 1" },
        { before: "BEFORE IMPLANTS 2", after: "AFTER IMPLANTS 2" },
        { before: "BEFORE IMPLANTS 3", after: "AFTER IMPLANTS 3" },
        { before: "BEFORE IMPLANTS 4", after: "AFTER IMPLANTS 4" },
      ]
    },
    {
      title: "Invisalign & Clear Aligners Gallery",
      description: "Straight teeth achieved discreetly with clear aligners",
      category: "Orthodontics",
      images: [
        { before: "BEFORE INVISALIGN 1", after: "AFTER INVISALIGN 1" },
        { before: "BEFORE INVISALIGN 2", after: "AFTER INVISALIGN 2" },
        { before: "BEFORE INVISALIGN 3", after: "AFTER INVISALIGN 3" },
        { before: "BEFORE INVISALIGN 4", after: "AFTER INVISALIGN 4" },
      ]
    },
    {
      title: "Smile Makeovers Gallery",
      description: "Complete smile transformations combining multiple treatments",
      category: "Smile Makeover",
      images: [
        { before: "BEFORE MAKEOVER 1", after: "AFTER MAKEOVER 1" },
        { before: "BEFORE MAKEOVER 2", after: "AFTER MAKEOVER 2" },
        { before: "BEFORE MAKEOVER 3", after: "AFTER MAKEOVER 3" },
        { before: "BEFORE MAKEOVER 4", after: "AFTER MAKEOVER 4" },
      ]
    },
    {
      title: "Teeth Whitening Gallery",
      description: "Professional whitening treatments for brighter smiles",
      category: "Whitening",
      images: [
        { before: "BEFORE WHITENING 1", after: "AFTER WHITENING 1" },
        { before: "BEFORE WHITENING 2", after: "AFTER WHITENING 2" },
        { before: "BEFORE WHITENING 3", after: "AFTER WHITENING 3" },
        { before: "BEFORE WHITENING 4", after: "AFTER WHITENING 4" },
      ]
    },
  ];

  const handlePrev = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : galleries[currentCategory].images.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev < galleries[currentCategory].images.length - 1 ? prev + 1 : 0));
  };

  const [currentCategory, setCurrentCategory] = useState(0);
  const current = galleries[currentCategory];
  const currentImage = current.images[currentSlide];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
              Smile Transformation Gallery
            </h1>
            <p className="text-xl text-muted-foreground">
              Real results from real patients. Browse before and after transformations from our Dubai dental clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {galleries.map((gallery, idx) => (
              <Button
                key={idx}
                onClick={() => {
                  setCurrentCategory(idx);
                  setCurrentSlide(0);
                }}
                variant={currentCategory === idx ? "default" : "outline"}
                className={`rounded-full ${currentCategory === idx ? "bg-primary text-primary-foreground" : ""}`}
              >
                {gallery.category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery Carousel */}
      <section className="py-20 bg-muted/30 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Title & Description */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                {current.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {current.description}
              </p>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Before Image */}
                <div className="rounded-xl overflow-hidden border border-muted-foreground/20 bg-muted h-[300px] md:h-[400px] flex items-center justify-center relative">
                  <span className="text-base md:text-lg font-bold text-muted-foreground text-center px-4">{currentImage.before}</span>
                  <div className="absolute top-4 left-4 bg-secondary/40 text-secondary px-3 py-1 rounded-full text-xs font-bold">
                    BEFORE
                  </div>
                </div>

                {/* After Image */}
                <div className="rounded-xl overflow-hidden border border-primary/20 bg-muted h-[300px] md:h-[400px] flex items-center justify-center relative">
                  <span className="text-base md:text-lg font-bold text-muted-foreground text-center px-4">{currentImage.after}</span>
                  <div className="absolute top-4 left-4 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                  Previous
                </Button>

                <div className="flex items-center gap-2 px-6">
                  <span className="text-sm font-medium text-secondary">
                    {currentSlide + 1} / {current.images.length}
                  </span>
                </div>

                <Button
                  onClick={handleNext}
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-full"
                >
                  Next
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Thumbnail Indicators */}
              <div className="flex justify-center gap-2 mt-6 flex-wrap">
                {current.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-3 w-3 rounded-full transition-all ${
                      currentSlide === idx
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { stat: "500+", label: "Happy Patients" },
              { stat: "1000+", label: "Smile Transformations" },
              { stat: "15+", label: "Years Experience" },
              { stat: "5.0 ★", label: "Google Rating" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-4xl font-bold text-primary">{item.stat}</p>
                <p className="text-muted-foreground font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-black/20 rounded-2xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Ready for Your Smile Transformation?
            </h2>
            <p className="text-lg text-gray-200">
              Schedule a consultation with our expert dentists and discover which treatment is perfect for your smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
