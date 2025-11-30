import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { TestimonialsGallery } from "@/components/TestimonialsGallery";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { ServiceGrid } from "@/components/ServiceGrid";

export default function CrownsAndBridges() {
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
    { question: "What is the difference between a crown and a bridge?", answer: "A crown covers and protects a single damaged tooth, while a bridge fills the gap of one or more missing teeth using neighboring teeth or implants for support." },
    { question: "Is the procedure painful?", answer: "No. Procedures are performed under local anesthesia. Patients may feel mild sensitivity after treatment, but this is temporary and easily managed." },
    { question: "What materials are used?", answer: "We use porcelain, zirconia, and porcelain-fused-to-metal. Porcelain and zirconia provide the most natural aesthetics and durability." },
    { question: "How long do crowns and bridges last?", answer: "With proper care, crowns and bridges typically last 10–15 years or longer. Good oral hygiene and regular dental check-ups extend their lifespan." },
    { question: "Can crowns or bridges be repaired?", answer: "Minor issues can sometimes be fixed, but in many cases replacement is recommended for long-term success." },
    { question: "Why choose implant-supported bridges?", answer: "They provide stability without affecting adjacent teeth, preserve jawbone health, and feel more natural compared to traditional bridges." },
    { question: "Who is a good candidate?", answer: "Ideal candidates are those with damaged, weakened, or missing teeth who have healthy gums and good oral hygiene. Implant-supported solutions may also require adequate bone density." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero
        title="Dental Crowns & Bridges in Dubai"
        subtitle="Restore strength, function, and aesthetics with custom crowns and bridges tailored to your smile."
        backgroundImage="SMILING PATIENT AFTER TREATMENT"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">CROWN & BRIDGE ILLUSTRATION</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Crowns & Bridges Explained</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Dental crowns act as protective caps that cover and strengthen damaged teeth, while dental bridges replace one or more missing teeth by anchoring to surrounding teeth or implants.</p>
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

      <ServiceGrid title="Types of Crowns & Bridges We Offer in Dubai" services={services} columns="2" bgColor="bg-muted/30" />

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

      <TestimonialsGallery
        beforeAfterItems={[
          { id: "crown-1", title: "Damaged Tooth Restoration", category: "Single Crown" },
          { id: "crown-2", title: "Multiple Teeth Bridge", category: "Dental Bridge" },
          { id: "crown-3", title: "Full Smile Restoration", category: "Multiple Crowns" },
        ]}
        videoTestimonials={[
          { id: "vid-1", title: "Back to Smiling Confidently", patientName: "Hassan M." },
          { id: "vid-2", title: "Stronger & More Beautiful", patientName: "Amira S." },
        ]}
      />

      <FAQSection title="Frequently Asked Questions" faqs={faqs} />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Restore Your Smile Today</h2>
            <p className="text-muted-foreground text-lg">Don't let damaged or missing teeth hold you back. Book your consultation now.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-4 w-4" /> Book Consultation
              </Button>
              <Button variant="outline" className="gap-2 rounded-full">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
