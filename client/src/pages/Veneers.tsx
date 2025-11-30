import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { TestimonialsGallery } from "@/components/TestimonialsGallery";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";

export default function Veneers() {
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
      <ServiceHero
        title="Veneers in Dubai - Your Dream Smile Starts Here"
        subtitle="Achieve a flawless, natural-looking smile with premium porcelain & composite veneers - tailored just for you."
        backgroundImage="PATIENT SMILE - LIFESTYLE"
      />

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

      {/* 3. Procedure Timeline */}
      <ProcedureSteps
        title="Your Veneers Journey"
        subtitle="4 simple steps to your perfect smile"
        steps={[
          {
            number: 1,
            title: "Digital Consultation",
            description: "We analyze your smile and discuss your goals. Using digital smile design, you'll see a preview of your new smile before treatment begins.",
            duration: "30-45 min",
          },
          {
            number: 2,
            title: "Tooth Preparation",
            description: "A thin layer of enamel is gently removed from the front surface of your teeth (less than 1mm). We take impressions and place temporary veneers while your permanent ones are crafted.",
            duration: "1 hour",
          },
          {
            number: 3,
            title: "Permanent Placement",
            description: "Your custom veneers arrive from our lab. We place them permanently using special bonding agents, ensuring perfect fit, color, and alignment.",
            duration: "1-2 hours",
          },
          {
            number: 4,
            title: "Final Adjustments",
            description: "We polish your veneers, adjust your bite, and provide aftercare instructions. Your smile is now ready to shine!",
            duration: "30 min",
          },
        ]}
      />

      {/* 4. Benefits Section */}
      <BenefitsSection
        title="Why Choose Veneers in Dubai With Us?"
        benefits={benefits}
        bgColor="bg-muted/30"
      />

      {/* 5. Before & After Transformations & Video Testimonials */}
      <TestimonialsGallery
        beforeAfterItems={[
          { id: "veneer-1", title: "Complete Smile Makeover", category: "Full Mouth Veneers" },
          { id: "veneer-2", title: "Stain Correction", category: "Porcelain Veneers" },
          { id: "veneer-3", title: "Gap & Alignment Fix", category: "Cosmetic Veneers" },
        ]}
        videoTestimonials={[
          { id: "vid-1", title: "Life-Changing Transformation", patientName: "Fatima M." },
          { id: "vid-2", title: "Confidence Restored", patientName: "Sarah A." },
        ]}
      />

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
      <FAQSection title="Frequently Asked Questions About Veneers" faqs={faqs} />
            
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
