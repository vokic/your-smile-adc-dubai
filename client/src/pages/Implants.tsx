import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Implants() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const benefits = [
    "Permanent solution for missing teeth",
    "Looks, feels, and functions like natural teeth",
    "Prevents bone loss and maintains facial structure",
    "Durable - lasts 15+ years with proper care",
    "No impact on adjacent healthy teeth",
    "5.0★ Google rated clinic"
  ];

  const faqs = [
    {
      question: "What is a dental implant?",
      answer: "A dental implant is an artificial tooth root made of titanium that is surgically placed into the jawbone. Once the implant fuses with the bone, a crown is attached on top, creating a permanent, natural-looking replacement tooth."
    },
    {
      question: "How long does the implant process take?",
      answer: "The complete process typically takes 3-6 months. This includes the surgical placement of the implant, bone integration (osseointegration), and the placement of the final crown. Some cases can be completed faster with advanced techniques."
    },
    {
      question: "Are dental implants painful?",
      answer: "The surgical procedure is performed under anesthesia, so you won't feel pain during placement. After surgery, you may experience mild discomfort for a few days, which is manageable with pain relief medication."
    },
    {
      question: "Who is a good candidate for implants?",
      answer: "Most people with good overall health and sufficient jawbone density can receive implants. If you have bone loss, bone grafting may be required first. We evaluate each patient individually with advanced imaging."
    },
    {
      question: "How do I care for dental implants?",
      answer: "Implants require the same care as natural teeth - brush twice daily, floss, and visit your dentist regularly. Avoid smoking and maintain good oral hygiene for optimal longevity."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last 15-25 years or even a lifetime. The crown may need replacement after 10-15 years due to normal wear."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">IMPLANTS HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Dental Implants in Dubai - Permanent <span className="text-primary">Tooth Replacement</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Replace missing teeth with natural-looking, permanent implants designed to last a lifetime.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-5 w-5" />
                Book Your Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Implants Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">IMPLANT PROCEDURE IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Why Choose Dental Implants?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dental implants are the gold standard for replacing missing teeth. Unlike dentures or bridges, implants are anchored directly into your jawbone, providing unmatched stability and functionality.
              </p>
              <div className="space-y-3">
                {["Permanent solution", "Maintain bone structure", "Natural appearance", "Eat and speak with confidence"].map((item) => (
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

      {/* Benefits Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Benefits of Dental Implants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="text-secondary font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">The Implant Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <div className="w-10 h-10 rounded-full bg-primary text-secondary font-bold flex items-center justify-center mb-4">1</div>
              <h3 className="text-lg font-bold mb-2">Assessment</h3>
              <p className="text-gray-200 text-sm">We evaluate your jawbone with 3D imaging to ensure you're a suitable candidate.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <div className="w-10 h-10 rounded-full bg-primary text-secondary font-bold flex items-center justify-center mb-4">2</div>
              <h3 className="text-lg font-bold mb-2">Implant Placement</h3>
              <p className="text-gray-200 text-sm">The titanium implant is surgically placed into the jawbone under anesthesia.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <div className="w-10 h-10 rounded-full bg-primary text-secondary font-bold flex items-center justify-center mb-4">3</div>
              <h3 className="text-lg font-bold mb-2">Crown Placement</h3>
              <p className="text-gray-200 text-sm">Once the implant fuses with bone, a custom crown is attached.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                    <div className="px-6 py-5 bg-muted/30 border-t border-border">
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
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Restore Your Smile Today</h2>
            <p className="text-muted-foreground text-lg">
              Don't let missing teeth hold you back. Schedule a consultation with our implant specialists and discover your smile restoration options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-4 w-4" />
                Book Consultation
              </Button>
              <Button variant="outline" className="gap-2">
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
