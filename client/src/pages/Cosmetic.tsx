import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Cosmetic() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    { title: "Veneers in Dubai", desc: "Achieve a flawless, natural smile with porcelain or composite veneers" },
    { title: "Teeth Whitening in Dubai", desc: "Brighten your teeth safely and effectively in one visit" },
    { title: "Orthodontics & Clear Aligners", desc: "Straighten your teeth discreetly with Invisalign or braces" },
    { title: "Dental Implants in Dubai", desc: "Replace missing teeth with permanent, natural-looking implants" },
    { title: "Smile Makeover", desc: "Combine multiple treatments for a complete smile transformation" }
  ];

  const benefits = [
    "Correct stained, chipped, or misaligned teeth",
    "Restore function along with aesthetics",
    "Boost confidence and self-esteem",
    "Custom treatments tailored to your needs",
    "Long-lasting, natural-looking results"
  ];

  const faqs = [
    {
      question: "What's the difference between cosmetic and general dentistry?",
      answer: "General dentistry focuses on health and function, while cosmetic dentistry enhances appearance while often improving function too."
    },
    {
      question: "How long do cosmetic dental treatments last?",
      answer: "With proper care, veneers and crowns can last 10–15 years, implants can last a lifetime, and whitening can last 6–12 months with touch-ups."
    },
    {
      question: "Is cosmetic dentistry safe?",
      answer: "Yes. All treatments are carried out with biocompatible materials and advanced techniques, ensuring both safety and long-term success."
    },
    {
      question: "Who is a good candidate for cosmetic dentistry?",
      answer: "Anyone unhappy with the appearance of their smile, whether due to stains, chips, gaps, misalignment, or missing teeth can benefit. A consultation helps determine the right treatment plan."
    },
    {
      question: "Can I combine treatments for better results?",
      answer: "Yes. Many patients choose a combination, such as veneers with whitening, or implants with orthodontics, for a complete smile transformation."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">PATIENT WITH PERFECT SMILE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Cosmetic Dentistry in <span className="text-primary">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Transform your smile with veneers, whitening, orthodontics, implants, and complete smile makeovers.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book Your Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is Cosmetic Dentistry */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">DIGITAL SMILE DESIGN</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Enhancing Smiles, Boosting Confidence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cosmetic dentistry focuses on improving the appearance of your teeth and smile. From correcting imperfections to designing a Hollywood smile, our cosmetic treatments combine advanced techniques and artistry for natural, long-lasting results.
              </p>
              <div className="space-y-3">
                {["Advanced techniques", "Artistic approach", "Natural results", "Custom designs", "Hollywood smiles"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cosmetic Dentistry Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Cosmetic Dental Treatments in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3 lg:col-span-1">
                <h3 className="text-base font-bold text-secondary">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits of Cosmetic Dentistry */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Benefits of Cosmetic Dentistry</h2>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-secondary font-medium text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Smile Makeover Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Hollywood Smile Makeover in Dubai</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our signature Hollywood smile makeovers combine veneers, whitening, orthodontics, and implants to create a customized, stunning smile. With digital smile design, you can preview your new smile before treatment begins.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Book Your Smile Makeover Consultation
              </Button>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">BEFORE & AFTER GALLERY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Our Clinic */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:order-reverse">
            <div className="h-[400px] rounded-2xl overflow-hidden bg-muted/20 border border-white/10 flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">CLINIC INTERIORS & EQUIPMENT</span>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Dubai's Trusted Cosmetic Dentists</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  With 15+ years of expertise, internationally trained dentists, and advanced digital technology, we are one of Dubai's top-rated clinics for cosmetic dentistry. Our ★5.0 Google rating reflects our commitment to patient satisfaction and excellence.
                </p>
              </div>
              <div className="space-y-3">
                {["15+ years of expertise", "Internationally trained specialists", "Advanced digital technology", "★5.0 Google rating", "Patient-focused care"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-all">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
                  >
                    <span className="font-medium text-secondary text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 py-5 bg-white border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Book Your Cosmetic Dentistry Consultation in Dubai Today</h2>
            <p className="text-muted-foreground text-lg">
              Ready for your dream smile? Schedule a consultation with our cosmetic experts and discover the best treatment plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Button>
              <Button variant="outline" className="gap-2 rounded-full">
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
