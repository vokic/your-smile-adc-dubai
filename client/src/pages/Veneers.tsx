import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { TestimonialsGallery } from "@/components/TestimonialsGallery";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PricingTables } from "@/components/PricingTables";
import { AnimatedStats } from "@/components/AnimatedStats";
import { TrustBadges } from "@/components/TrustBadges";

export default function Veneers() {
  const benefits = ["Same-Day Results: Smile makeover in as little as 2 visits", "Natural & Durable: Porcelain veneers last 10–15 years", "Digital Smile Design: See your results before treatment starts", "Trusted Expertise: 15 years of cosmetic dentistry experience", "Top-Rated Clinic: ★5.0 Google Reviews from Dubai patients"];

  const faqs = [
    { question: "How long do veneers last?", answer: "Porcelain veneers typically last between 10–15 years, while composite veneers last 4–7 years. Their longevity depends on daily care, regular dental check-ups, and avoiding habits like teeth grinding or biting hard objects." },
    { question: "Do veneers look natural?", answer: "Yes. Modern veneers are custom-made to match the color, shape, and size of your teeth. Porcelain veneers mimic the translucency of natural enamel, making them indistinguishable from real teeth." },
    { question: "Are veneers painful?", answer: "The procedure is virtually pain-free. A local anesthetic is applied before treatment. Some patients may experience mild sensitivity for a few days after, but this usually subsides quickly." },
    { question: "What is the difference between porcelain and composite veneers?", answer: "Porcelain veneers are stronger, more durable, and stain-resistant, lasting over 10 years. Composite veneers are faster and more affordable but less durable and may require touch-ups sooner." },
    { question: "Can veneers chip or stain?", answer: "Porcelain veneers are stain-resistant and rarely chip if properly cared for. Composite veneers can stain over time and are more prone to wear, but can be easily polished or repaired." },
    { question: "Do veneers damage natural teeth?", answer: "To place veneers, a very thin layer of enamel is removed (usually less than 1mm). This is necessary to ensure proper bonding and does not harm your overall dental health." },
    { question: "Who is a good candidate for veneers?", answer: "Veneers are ideal for patients with discolored, chipped, slightly misaligned, or gapped teeth. However, they may not be suitable for those with severe tooth decay or gum disease." },
    { question: "How many veneers do I need?", answer: "This depends on your smile line. Some patients only need 2–4 veneers to cover imperfections, while others choose 6–10 for a full smile makeover." },
    { question: "How do I take care of my veneers?", answer: "Veneers require the same care as natural teeth: brushing twice daily, flossing, and visiting your dentist regularly. Avoid using your teeth to open packages and limit staining foods/drinks." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero title="Veneers in Dubai - Your Dream Smile Starts Here" subtitle="Achieve a flawless, natural-looking smile with premium porcelain & composite veneers - tailored just for you." backgroundImage="PATIENT SMILE - LIFESTYLE" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center" aria-label="Before and after veneer transformation">
              <span className="text-xl font-bold text-muted-foreground" aria-hidden="true">BEFORE & AFTER IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Tired of hiding your smile?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Stains, chips, or gaps can hold you back. With veneers, transform your smile and confidence in just a few visits.</p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">Start Your Smile Journey Today</Button>
            </div>
          </div>
        </div>
      </section>

      <ProcedureSteps title="Your Veneers Journey" subtitle="4 simple steps to your perfect smile" steps={[
        { number: 1, title: "Digital Consultation", description: "Analyze your smile and discuss goals. Digital smile design shows your new smile preview.", duration: "30-45 min" },
        { number: 2, title: "Tooth Preparation", description: "A thin layer of enamel is gently removed. We take impressions and place temporary veneers.", duration: "1 hour" },
        { number: 3, title: "Permanent Placement", description: "Your custom veneers arrive from our lab. We place them permanently with special bonding agents.", duration: "1-2 hours" },
        { number: 4, title: "Final Adjustments", description: "We polish your veneers, adjust your bite, and provide aftercare instructions.", duration: "30 min" },
      ]} />

      <BenefitsSection title="Why Choose Veneers in Dubai With Us?" benefits={benefits} bgColor="bg-muted/30" />

      <AnimatedStats title="Real Results. Real Confidence." stats={[
        { label: "Veneer Transformations", value: "500", suffix: "+" },
        { label: "Success Rate", value: "98", suffix: "%" },
        { label: "Average Longevity", value: "12", suffix: " years" },
        { label: "Happy Smile Patients", value: "4.9", suffix: "★" }
      ]} />

      <PricingTables title="Veneer Pricing in Dubai" subtitle="Transparent pricing for your smile transformation" tiers={[
        { name: "Single Veneer", price: "AED 2,500", description: "Perfect for one tooth fix", features: ["Digital design preview", "Professional placement", "Porcelain or composite", "Lifetime warranty"] },
        { name: "Full Smile Veneers", price: "AED 12,000", description: "6-10 veneers for complete transformation", features: ["Complete smile makeover", "Digital smile design", "Premium porcelain", "5-year warranty"], highlighted: true },
        { name: "Touch-Up Session", price: "AED 1,500", description: "Maintenance & polish", features: ["Professional cleaning", "Minor repairs", "Shine restoration", "Check-up included"] }
      ]} />

      <TestimonialsGallery beforeAfterItems={[
        { id: "veneer-1", title: "Complete Smile Makeover", category: "Full Mouth Veneers" },
        { id: "veneer-2", title: "Stain Correction", category: "Porcelain Veneers" },
        { id: "veneer-3", title: "Gap & Alignment Fix", category: "Cosmetic Veneers" },
      ]} videoTestimonials={[
        { id: "vid-1", title: "Life-Changing Transformation", patientName: "Fatima M." },
        { id: "vid-2", title: "Confidence Restored", patientName: "Sarah A." },
      ]} />

      <TrustBadges title="Dubai's Trusted Veneers Specialists" bgColor="bg-muted/30" />

      <FAQSection title="Frequently Asked Questions About Veneers" faqs={faqs} />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Your Perfect Smile Is Just One Click Away</h2>
            <p className="text-muted-foreground text-lg">Don't wait to love your smile. Book a free consultation today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full"><MessageCircle className="h-4 w-4" /> Book on WhatsApp</Button>
              <Button variant="outline" className="gap-2 rounded-full"><Phone className="h-4 w-4" /> Call Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
