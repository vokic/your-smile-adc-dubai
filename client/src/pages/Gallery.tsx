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
        { before: "BEFORE VENEERS", after: "AFTER VENEERS", story: "Sarah's discolored and chipped teeth were holding her back. With 8 porcelain veneers, she achieved a naturally bright smile in just 3 visits. Result: Confidence restored, 10+ years durability.", duration: "3 weeks", procedure: "Porcelain Veneers" },
        { before: "BEFORE VENEERS 2", after: "AFTER VENEERS 2", story: "Emma wanted a perfect smile for her wedding. 6 premium veneers transformed her gapped teeth into a stunning, natural-looking smile. She's been smiling confidently ever since.", duration: "2 weeks", procedure: "Porcelain Veneers" },
        { before: "BEFORE VENEERS 3", after: "AFTER VENEERS 3", story: "Marcus had severe staining from years of coffee. 10 veneers gave him a completely new lease on life and restored his professional confidence at work.", duration: "3 weeks", procedure: "Full Smile Veneers" },
        { before: "BEFORE VENEERS 4", after: "AFTER VENEERS 4", story: "Lisa combined veneers with whitening for the ultimate smile makeover. The results speak for themselves - natural, beautiful, and radiant.", duration: "4 weeks", procedure: "Veneers + Whitening" },
      ]
    },
    {
      title: "Dental Implants Gallery",
      description: "Missing teeth restored with permanent, natural-looking implants",
      category: "Implants",
      images: [
        { before: "BEFORE IMPLANTS", after: "AFTER IMPLANTS", story: "Ahmed lost a tooth in an accident. A single dental implant with crown restored his smile and functionality. Now he smiles confidently without worrying about slipping or gaps.", duration: "6 months", procedure: "Dental Implant + Crown" },
        { before: "BEFORE IMPLANTS 2", after: "AFTER IMPLANTS 2", story: "Fatima had multiple missing teeth affecting her speech and confidence. 4 implants with custom bridgework restored her smile completely. She's back to social events with pride.", duration: "8 months", procedure: "Full-Mouth Implants" },
        { before: "BEFORE IMPLANTS 3", after: "AFTER IMPLANTS 3", story: "David's bone loss from decay seemed impossible to fix. Our bone grafting + implant solution gave him a permanent, stable solution that looks completely natural.", duration: "10 months", procedure: "Bone Grafting + Implant" },
        { before: "BEFORE IMPLANTS 4", after: "AFTER IMPLANTS 4", story: "Noor replaced loose dentures with implant-supported teeth. The stability and comfort are life-changing. She can eat, laugh, and live without worry.", duration: "7 months", procedure: "Implant-Supported Bridge" },
      ]
    },
    {
      title: "Invisalign & Clear Aligners Gallery",
      description: "Straight teeth achieved discreetly with clear aligners",
      category: "Orthodontics",
      images: [
        { before: "BEFORE INVISALIGN", after: "AFTER INVISALIGN", story: "Layla had crowded teeth but wanted a discreet solution. 18 months of Invisalign gave her perfectly aligned teeth without anyone noticing. Clear, comfortable, effective.", duration: "18 months", procedure: "Invisalign Clear Aligners" },
        { before: "BEFORE INVISALIGN 2", after: "AFTER INVISALIGN 2", story: "James was skeptical about Invisalign until he saw his results. 14 months later, his teeth are straight, his bite is perfect, and he never missed a day of smiling.", duration: "14 months", procedure: "Invisalign" },
        { before: "BEFORE INVISALIGN 3", after: "AFTER INVISALIGN 3", story: "Aisha had moderate crowding that affected her confidence. Invisalign gave her the freedom to smile, eat, and drink normally while her teeth straightened invisibly.", duration: "16 months", procedure: "Clear Aligners" },
        { before: "BEFORE INVISALIGN 4", after: "AFTER INVISALIGN 4", story: "Tommy's overbite was corrected with Invisalign, and he loved the ease of removal for sports and eating. Professional results without metal braces.", duration: "15 months", procedure: "Invisalign Treatment" },
      ]
    },
    {
      title: "Smile Makeovers Gallery",
      description: "Complete smile transformations combining multiple treatments",
      category: "Smile Makeover",
      images: [
        { before: "BEFORE MAKEOVER", after: "AFTER MAKEOVER", story: "Omar combined 6 veneers, professional whitening, and gum contouring for a Hollywood-level smile. From shy to show-stopping in 8 weeks. Complete transformation with natural results.", duration: "8 weeks", procedure: "Veneers + Whitening + Contouring" },
        { before: "BEFORE MAKEOVER 2", after: "AFTER MAKEOVER 2", story: "Rania had discoloration, gaps, and misalignment. A combination treatment with veneers, whitening, and Invisalign gave her the smile she always dreamed of.", duration: "6 months", procedure: "Complete Smile Makeover" },
        { before: "BEFORE MAKEOVER 3", after: "AFTER MAKEOVER 3", story: "Hassan wanted everything perfect for his engagement photos. Implants, veneers, and whitening created a stunning smile that photographs beautifully.", duration: "10 weeks", procedure: "Implants + Veneers + Whitening" },
        { before: "BEFORE MAKEOVER 4", after: "AFTER MAKEOVER 4", story: "Zainab's complete smile transformation included bone grafting, implants, veneers, and whitening. The before and after are life-changing. She's finally confident.", duration: "12 weeks", procedure: "Full Comprehensive Makeover" },
      ]
    },
    {
      title: "Teeth Whitening Gallery",
      description: "Professional whitening treatments for brighter smiles",
      category: "Whitening",
      images: [
        { before: "BEFORE WHITENING", after: "AFTER WHITENING", story: "Sarah wanted her teeth 8 shades brighter for a special event. Professional laser whitening delivered stunning results in just 45 minutes. She's glowing.", duration: "1 hour", procedure: "Professional Laser Whitening" },
        { before: "BEFORE WHITENING 2", after: "AFTER WHITENING 2", story: "Khalid's years of coffee staining disappeared after one whitening session. His confidence boost was immediate and noticeable to everyone around him.", duration: "1 session", procedure: "In-Office Whitening" },
        { before: "BEFORE WHITENING 3", after: "AFTER WHITENING 3", story: "Mona used our at-home kit and achieved beautiful results gradually over two weeks. The convenience of home whitening with professional strength and results.", duration: "2 weeks", procedure: "Take-Home Whitening Kit" },
        { before: "BEFORE WHITENING 4", after: "AFTER WHITENING 4", story: "Ali combined laser whitening with our maintenance kit for long-lasting results. His smile stayed brilliantly white for over a year.", duration: "Ongoing", procedure: "Whitening Combo Package" },
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
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

              {/* Patient Story */}
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 mb-6">
                <p className="text-secondary leading-relaxed mb-4">{currentImage.story}</p>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                  <div className="flex items-center gap-1 text-primary">
                    <span className="font-bold">Procedure:</span>
                    <span className="text-secondary">{currentImage.procedure}</span>
                  </div>
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="font-bold">Duration:</span>
                    <span>{currentImage.duration}</span>
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
