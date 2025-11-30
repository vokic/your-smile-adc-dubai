import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown, Smile } from "lucide-react";
import { useState } from "react";
import { ServiceComparison } from "@/components/ServiceComparison";

export default function Orthodontics() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const treatments = [
    { title: "Metal Braces", description: "Reliable and effective" },
    { title: "Ceramic Braces", description: "Discreet and tooth-colored" },
    { title: "Invisalign & Clear Aligners", description: "Virtually invisible and removable" },
    { title: "Retainers", description: "Maintain results long-term" },
    { title: "Space Maintainers", description: "Guide proper tooth eruption for kids" },
    { title: "Bite Correction", description: "Treat overbite, underbite, crossbite" }
  ];

  const benefits = [
    "15+ years of orthodontic experience",
    "Certified Invisalign providers",
    "Digital scans instead of messy impressions",
    "★5.0 rated clinic trusted by Dubai families"
  ];

  const faqs = [
    {
      question: "How long will treatment take?",
      answer: "6–12 months for mild cases with aligners; 18–24 months for more complex cases with braces."
    },
    {
      question: "Are braces painful?",
      answer: "You may feel pressure for a few days after adjustments, but this is temporary. Most patients adapt quickly."
    },
    {
      question: "Can children have orthodontic treatment?",
      answer: "Yes – early evaluation from age 7 helps prevent more serious issues later. Early intervention often results in better outcomes."
    },
    {
      question: "Do results last forever?",
      answer: "With proper retainer wear, orthodontic results can last a lifetime. We provide clear guidance on retainer care."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">ORTHODONTICS HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Orthodontics & Clear Aligners in <span className="text-primary">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Braces and Invisalign treatments for straighter teeth and a healthier smile.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Comparison */}
      <ServiceComparison
        title="Invisalign vs Braces"
        subtitle="Compare the most popular teeth straightening options"
        showThirdColumn={false}
        rows={[
          {
            feature: "Duration of treatment",
            invisalign: "6-12 months",
            braces: "18-24 months",
          },
          {
            feature: "Visibility",
            invisalign: "Virtually invisible",
            braces: "Visible brackets & wires",
          },
          {
            feature: "Removable",
            invisalign: true,
            braces: false,
          },
          {
            feature: "Cost",
            invisalign: "AED 8,000-15,000",
            braces: "AED 5,000-10,000",
          },
          {
            feature: "Maintenance",
            invisalign: "Remove daily, clean tray",
            braces: "Extra brushing needed",
          },
          {
            feature: "Dietary restrictions",
            invisalign: "None",
            braces: "Avoid hard, sticky foods",
          },
          {
            feature: "Effective for all cases",
            invisalign: "Mild to moderate",
            braces: "All severity levels",
          },
        ]}
      />

      {/* What Is Orthodontics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Straight Teeth, Healthy Bite</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Orthodontics corrects misaligned teeth and bite issues, improving both function and aesthetics. Our treatments combine modern technology and personalized care for every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Orthodontic Treatments in Dubai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-4">
                <h3 className="text-lg font-bold text-secondary">{treatment.title}</h3>
                <p className="text-muted-foreground">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Dubai's Orthodontic Experts</h2>
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

      {/* Before & After */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Real Orthodontic Results</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See transformations achieved with braces and Invisalign for both teens and adults.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden bg-muted border border-border h-[400px] flex items-center justify-center hover:shadow-lg transition-all">
                <span className="text-lg font-bold text-muted-foreground">BEFORE & AFTER {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invisalign Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Invisalign in Dubai</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nearly invisible, removable aligners designed for modern lifestyles. Eat, brush, and live normally while your teeth gradually move into place. Perfect for professionals and active adults.
              </p>
              <div className="space-y-3">
                {["No visible brackets or wires", "Remove for eating and drinking", "Easy to maintain oral hygiene", "Comfortable and effective", "Discreet treatment option"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Smile className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">INVISALIGN CLEAR ALIGNERS</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
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

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Book Your Orthodontic Consultation</h2>
            <p className="text-muted-foreground text-lg">
              Discover the best treatment option for your smile – braces or Invisalign. Schedule your consultation today with our orthodontic experts.
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
