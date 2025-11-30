import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CrownsAndBridges() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    { title: "Same-Day Crowns", desc: "CAD/CAM technology for crowns in a single visit" },
    { title: "Porcelain & Zirconia Crowns", desc: "Strong, natural-looking, and stain resistant" },
    { title: "Traditional Fixed Bridges", desc: "Replace missing teeth using adjacent crowns as anchors" },
    { title: "Implant-Supported Bridges", desc: "Stable, long-lasting bridges that do not require grinding down neighboring teeth" }
  ];

  const benefits = [
    "CAD/CAM precision for perfect fit",
    "High-quality biocompatible materials",
    "Gentle, pain-free procedures",
    "★5.0 rated dental clinic in Dubai"
  ];

  const faqs = [
    {
      question: "What is the difference between a crown and a bridge?",
      answer: "A crown covers and protects a single damaged tooth, while a bridge fills the gap of one or more missing teeth using neighboring teeth or implants for support."
    },
    {
      question: "Is the procedure painful?",
      answer: "No. Procedures are performed under local anesthesia. Patients may feel mild sensitivity after treatment, but this is temporary and easily managed."
    },
    {
      question: "What materials are used?",
      answer: "We use porcelain, zirconia, and porcelain-fused-to-metal. Porcelain and zirconia provide the most natural aesthetics and durability."
    },
    {
      question: "How long do crowns and bridges last?",
      answer: "With proper care, crowns and bridges typically last 10–15 years or longer. Good oral hygiene and regular dental check-ups extend their lifespan."
    },
    {
      question: "Can crowns or bridges be repaired?",
      answer: "Minor issues can sometimes be fixed, but in many cases replacement is recommended for long-term success."
    },
    {
      question: "Why choose implant-supported bridges?",
      answer: "They provide stability without affecting adjacent teeth, preserve jawbone health, and feel more natural compared to traditional bridges."
    },
    {
      question: "Who is a good candidate?",
      answer: "Ideal candidates are those with damaged, weakened, or missing teeth who have healthy gums and good oral hygiene. Implant-supported solutions may also require adequate bone density."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">SMILING PATIENT AFTER TREATMENT</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Dental Crowns & Bridges in <span className="text-primary">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Restore strength, function, and aesthetics with custom crowns and bridges tailored to your smile.
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

      {/* 2. Crowns & Bridges Explained */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">CROWN & BRIDGE ILLUSTRATION</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Crowns & Bridges Explained</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dental crowns act as protective caps that cover and strengthen damaged teeth, while dental bridges replace one or more missing teeth by anchoring to surrounding teeth or implants. Both provide durable, natural-looking restorations that restore oral health and confidence.
              </p>
              <div className="space-y-3">
                {["Protect damaged teeth", "Replace missing teeth", "Restore function", "Natural aesthetics", "Long-lasting solutions"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Types of Crowns & Bridges We Offer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Types of Crowns & Bridges We Offer in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3">
                <h3 className="text-lg font-bold text-secondary">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:order-reverse">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">DENTIST WITH PATIENT & LAB TECHNOLOGY</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Dubai's Trusted Restorative Specialists</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p className="text-secondary font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Before & After Results */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Smile Transformations with Crowns & Bridges</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              See how our patients regained function and aesthetics with customized crowns and bridges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden bg-muted border border-border h-[400px] flex items-center justify-center hover:shadow-lg transition-all">
                <span className="text-lg font-bold text-muted-foreground">BEFORE & AFTER {item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2 rounded-full">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
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

      {/* 7. Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Restore Your Smile with Crowns & Bridges in Dubai</h2>
            <p className="text-muted-foreground text-lg">
              Book your consultation today and discover the best restorative solution for your smile.
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
