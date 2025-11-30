import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PricingTables } from "@/components/PricingTables";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TrustBadges } from "@/components/TrustBadges";

export default function Whitening() {
  const treatments = [
    { title: "Laser Teeth Whitening in Dubai", desc: "Advanced technology for fast, visible results in one session" },
    { title: "In-Office Whitening", desc: "Professional chairside treatment for safe and predictable outcomes" },
    { title: "Take-Home Whitening Kits", desc: "Custom trays with professional-grade gel for gradual whitening at home" }
  ];

  const benefits = ["Safe for enamel & gums", "Noticeable results after one session", "Tailored treatment strength to your needs", "Performed by ★5.0 rated dental professionals"];

  const faqs = [
    { question: "Is teeth whitening safe?", answer: "Yes. Professional teeth whitening by a dentist is safe and does not damage enamel or gums. Unlike over-the-counter kits, clinical treatments use controlled methods and biocompatible agents." },
    { question: "How long do whitening results last?", answer: "Results typically last 6–12 months, depending on lifestyle and oral care. Patients who avoid excessive coffee, tea, red wine, or smoking enjoy brighter smiles for longer." },
    { question: "Does whitening damage enamel?", answer: "No. Professional whitening systems are designed to penetrate stains without harming enamel. Some temporary sensitivity can occur, but this usually resolves within a day or two." },
    { question: "How white can my teeth get?", answer: "The degree of whitening varies from person to person. Most patients achieve teeth several shades lighter in a single session, resulting in a visibly brighter and more confident smile." },
    { question: "What's the difference between laser whitening and home whitening kits?", answer: "Laser whitening provides immediate, dramatic results in one session. Home whitening kits use lower-strength gels, delivering gradual results over 1–2 weeks. Many patients combine both approaches." },
    { question: "Can whitening remove all stains?", answer: "Teeth whitening works best on stains caused by food, drinks, and aging. It may not be as effective for intrinsic discoloration caused by medication or enamel defects. Veneers or bonding may be recommended as alternatives." },
    { question: "Who is a good candidate for teeth whitening?", answer: "Most adults with healthy teeth and gums are good candidates. Whitening is not recommended for children, pregnant women, or patients with untreated cavities or gum disease." },
    { question: "Will whitening make my teeth sensitive?", answer: "Some patients may experience temporary tooth sensitivity after whitening. This sensitivity usually fades within 24–48 hours. We use protective gels and modern systems to minimize discomfort." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero title="Teeth Whitening in Dubai" subtitle="Brighten your smile safely and effectively with professional whitening treatments." backgroundImage="PATIENT WITH BRIGHT SMILE" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center"><span className="text-xl font-bold text-muted-foreground">DENTIST WITH LED LAMP</span></div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Safe, Fast & Professional Whitening</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Professional teeth whitening delivers dramatic results in a single visit. Our treatments remove deep stains without damaging enamel, giving you a brighter smile in just 45–60 minutes.</p>
              <div className="space-y-3">
                {["Fast results (45-60 min)", "Advanced technology", "Enamel safe", "Professional strength", "Dramatic whitening"].map((item) => (
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

      <ServiceGrid title="Our Teeth Whitening Options" services={treatments} columns="1" bgColor="bg-muted/30" />

      <BenefitsSection title="Why Professional Teeth Whitening?" benefits={benefits} bgColor="bg-background" />

      <PricingTables title="Teeth Whitening Pricing" subtitle="Achieve a brighter smile at affordable prices" tiers={[
        { name: "Laser Whitening", price: "AED 899", description: "Single professional treatment", features: ["Immediate results (45 min)", "8+ shades brighter", "LED laser technology", "Touch-up after 6 months"] },
        { name: "Take-Home Kit", price: "AED 499", description: "Custom tray + professional gel", features: ["Gradual 1-2 week results", "Custom-fitted trays", "Professional-grade gel", "At-home convenience"], highlighted: true },
        { name: "Combo Package", price: "AED 1,299", description: "Laser + home kit included", features: ["Immediate + sustained results", "Best value option", "Custom trays included", "Lifetime follow-up"] }
      ]} />

      <TrustBadges title="Why Choose Our Whitening Services" bgColor="bg-muted/30" />

      <FAQSection title="Whitening FAQs" faqs={faqs} />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Ready for a Brighter Smile?</h2>
            <p className="text-muted-foreground text-lg">Book your professional teeth whitening session today and see results in just 45 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full"><MessageCircle className="h-4 w-4" /> Book Whitening</Button>
              <Button variant="outline" className="gap-2 rounded-full"><Phone className="h-4 w-4" /> Call Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
