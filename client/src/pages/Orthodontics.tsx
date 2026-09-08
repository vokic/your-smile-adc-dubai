import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Smile } from "lucide-react";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceComparison } from "@/components/ServiceComparison";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { SmileTransformations } from "@/components/SmileTransformations";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { subServicesFor, subServicePath } from "@/content/services";

const FAQS = [
  { question: "How long will treatment take?", answer: "6–12 months for mild cases with aligners; 18–24 months for more complex cases with braces. Your orthodontist gives you a personal estimate after the scan." },
  { question: "Are braces painful?", answer: "You may feel pressure for a few days after adjustments, but it is temporary and most patients adapt quickly." },
  { question: "Can children have orthodontic treatment?", answer: "Yes. An early evaluation around age 7 helps prevent more serious issues later, and early intervention often gives better outcomes." },
  { question: "Do results last forever?", answer: "With proper retainer wear, orthodontic results can last a lifetime. We provide clear guidance on retainers after treatment." },
  { question: "Do you do digital scans instead of impressions?", answer: "Yes. A digital intraoral scan replaces messy putty impressions and lets you preview your projected result before you start." },
];

export default function Orthodontics() {
  const subs = subServicesFor("orthodontics");
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Orthodontics", path: "/orthodontics" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Invisalign & Braces in Dubai - Clear Aligners & Orthodontics"
        description="Straighten your teeth in Dubai JLT with Invisalign clear aligners, ceramic braces and metal braces. Digital scans, orthodontist-led treatment for teens and adults."
        path="/orthodontics"
        jsonLd={[
          jsonLdService({ name: "Orthodontics & Clear Aligners in Dubai", description: "Invisalign, clear aligners, ceramic and metal braces, retainers.", path: "/orthodontics" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="Orthodontics & Clear Aligners in Dubai"
        subtitle="Braces and Invisalign treatments for straighter teeth and a healthier bite — for teens and adults."
        breadcrumbs={crumbs}
        treatment="orthodontics"
        primaryButtonText="Book Consultation"
        backgroundImage={IMG.treatmentPlan}
      />

      {/* Comparison (no price row, per owner) */}
      <ServiceComparison
        title="Invisalign vs Braces"
        subtitle="Compare the most popular teeth-straightening options"
        showThirdColumn={false}
        rows={[
          { feature: "Typical duration", invisalign: "6–12 months", braces: "18–24 months" },
          { feature: "Visibility", invisalign: "Virtually invisible", braces: "Visible brackets & wires" },
          { feature: "Removable", invisalign: true, braces: false },
          { feature: "Maintenance", invisalign: "Remove to eat, clean trays daily", braces: "Extra brushing around brackets" },
          { feature: "Dietary restrictions", invisalign: "None", braces: "Avoid hard, sticky foods" },
          { feature: "Effective for", invisalign: "Mild to moderate cases", braces: "All severity levels" },
        ]}
      />

      {/* Treatments FIRST, journey after (owner: swap order) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Orthodontic Treatments in Dubai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{s.heroSubtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcedureSteps
        title="Your Teeth Straightening Journey"
        subtitle="From consultation to your perfect smile"
        steps={[
          { number: 1, title: "Comprehensive Consultation", description: "Digital scan, photos and X-rays; we discuss your concerns and present options including braces and Invisalign. Your treatment plan is designed at this visit.", duration: "1 hour" },
          { number: 2, title: "Treatment Begins", description: "For braces: brackets and wires are placed. For Invisalign: you receive your first aligners and attachments. Both are comfortable to adapt to.", duration: "30 min – 2 hours" },
          { number: 3, title: "Regular Check-ups", description: "Adjustments or new aligner sets every 4–8 weeks. We track progress against your digital plan.", duration: "30 min per visit" },
          { number: 4, title: "Braces Off / Retainer Phase", description: "Appliances come off and custom retainers are fitted so your new smile lasts.", duration: "1 hour" },
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Invisalign in Dubai</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nearly invisible, removable aligners designed for modern lifestyles. Eat, brush and live normally while your teeth gradually move into place.
              </p>
              <div className="space-y-3">
                {["No visible brackets or wires", "Remove for eating and drinking", "Easy oral hygiene", "Comfortable and effective", "Digital preview of your result"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Smile className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/orthodontics/invisalign" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                Learn more about Invisalign <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <Visual src={IMG.clinicSmile} icon={Smile} className="h-[400px]" />
          </div>
        </div>
      </section>

      <BenefitsSection
        title="Dubai's Orthodontic Experts"
        benefits={["Orthodontist-led treatment (MDS Orthodontics, PhD)", "Digital scans instead of messy impressions", "Aligners, ceramic and metal braces under one roof", "Whitening and veneers available after alignment for a full smile transformation"]}
        bgColor="bg-muted/30"
      />

      <PackagesCallout treatment="orthodontic" bgColor="bg-background" />

      <SmileTransformations category="Orthodontics" title="Orthodontic Transformations" subtitle="Real aligner and braces cases from our JLT clinic. Individual results vary." bgColor="bg-muted/30" />

      <FAQSection faqs={FAQS} />

      <CTASection title="Book Your Orthodontic Consultation" text="Discover the best option for your smile — braces or Invisalign — with a digital scan and preview at our JLT clinic." treatment="orthodontics" />
    </div>
  );
}
