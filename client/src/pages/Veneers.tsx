import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Veneers() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const benefits = [
    "Same-Day Results: Smile makeover in as little as 2 visits",
    "Natural & Durable: Porcelain veneers last 10–15 years",
    "Digital Smile Design: See your results before treatment starts",
    "Trusted Expertise: 15 years of cosmetic dentistry experience",
    "Top-Rated Clinic: ★5.0 Google Reviews from Dubai patients"
  ];

  const faqs = [
    {
      question: "How long do veneers last?",
      answer: "Porcelain veneers typically last between 10–15 years, while composite veneers last 4–7 years. Their longevity depends on daily care, regular dental check-ups, and avoiding habits like teeth grinding or biting hard objects. With proper maintenance, porcelain veneers can serve you for over a decade without losing their natural look."
    },
    {
      question: "Do veneers look natural?",
      answer: "Yes. Modern veneers are custom-made to match the color, shape, and size of your teeth. Porcelain veneers, in particular, mimic the translucency of natural enamel, making them indistinguishable from real teeth. When placed by experienced cosmetic dentists, veneers look and feel completely natural."
    },
    {
      question: "Are veneers painful?",
      answer: "The procedure is virtually pain-free. Before any preparation, a local anesthetic is applied to ensure maximum comfort. Some patients may experience mild sensitivity for a few days after the procedure, especially with porcelain veneers, but this usually subsides quickly."
    },
    {
      question: "What is the difference between porcelain and composite veneers?",
      answer: "Porcelain veneers are stronger, more durable, and stain-resistant. They provide the most natural appearance and can last over 10 years. Composite veneers are applied directly to the tooth, making them a faster and more affordable option. However, they are less durable and may require touch-ups sooner. Your dentist will recommend the best option depending on your smile goals and budget."
    },
    {
      question: "Can veneers chip or stain?",
      answer: "Porcelain veneers are stain-resistant and rarely chip if properly cared for. Composite veneers can stain over time and are more prone to wear, but can be easily polished or repaired. Regular check-ups and avoiding habits like nail-biting or chewing ice will help maintain their longevity."
    },
    {
      question: "Do veneers damage natural teeth?",
      answer: "To place veneers, a very thin layer of enamel is removed—usually less than 1 millimeter. This is necessary to ensure proper bonding and a natural fit. When performed by skilled dentists, the process does not harm your overall dental health and preserves as much of the natural tooth as possible."
    },
    {
      question: "Who is a good candidate for veneers?",
      answer: "Veneers are ideal for patients with discolored, chipped, slightly misaligned, or gapped teeth. However, they may not be suitable for those with severe tooth decay, gum disease, or heavy grinding habits. A consultation with our dentists will determine if veneers are the right choice for you."
    },
    {
      question: "How many veneers do I need?",
      answer: "This depends on your smile line. Some patients only need 2–4 veneers to cover imperfections, while others choose 6–10 for a full smile makeover. During your consultation, we'll design a treatment plan that fits your goals, budget, and natural smile."
    },
    {
      question: "How do I take care of my veneers?",
      answer: "Veneers require the same care as natural teeth: brushing twice daily, flossing, and visiting your dentist regularly. Avoid using your teeth to open packages, and limit foods/drinks that cause stains (coffee, tea, red wine) for composite veneers. With proper care, veneers will keep your smile bright and confident for years."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">PATIENT SMILE - LIFESTYLE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Veneers in Dubai - Your Dream <span className="text-primary">Smile Starts Here</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Achieve a flawless, natural-looking smile with premium porcelain & composite veneers - tailored just for you.
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

      {/* 2. Emotional Hook */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">BEFORE & AFTER IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Tired of hiding your smile?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Stains, chips, or gaps can hold you back. With veneers, you can transform your smile and your confidence in just a few visits. Our Dubai cosmetic dentists design veneers that look and feel like your natural teeth.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full rounded-full">
                Start Your Smile Journey Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Why Choose Veneers in Dubai With Us?</h2>
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

      {/* 5. Before & After Transformations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Real Veneers Results in Dubai</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Nothing speaks louder than results. Explore real smile makeovers done by our cosmetic dentists - natural, stunning, and life-changing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden bg-muted border border-border h-[400px] flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground">VENEER RESULT {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Trust Elements */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Dubai's Trusted Veneers Specialists</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Our internationally trained cosmetic dentists have transformed thousands of smiles. With ★5.0 rating on Google, we're proud to be among Dubai's top-rated dental clinics.
                </p>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full rounded-full">
                Book with Our Veneers Experts Today
              </Button>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden bg-muted/20 border border-white/10 flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">DOCTORS & REVIEWS IMAGE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions About Veneers</h2>
            
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
                    <div className="px-6 py-5 bg-muted/30 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Your Perfect Smile Is Just One Click Away</h2>
            <p className="text-muted-foreground text-lg">
              Don't wait to love your smile. Book a free consultation today and see how veneers can transform your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Button>
              <Button variant="outline" className="gap-2 rounded-full rounded-full">
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
