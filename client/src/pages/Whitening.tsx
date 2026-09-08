import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Sun } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { subServicesFor, subServicePath } from "@/content/services";

const FAQS = [
  { question: "Is teeth whitening safe?", answer: "Yes. Professional whitening by a dentist is safe and does not damage enamel or gums. Unlike over-the-counter kits, clinical treatments use controlled concentrations and full gum protection." },
  { question: "How long do whitening results last?", answer: "Results typically last 6–12 months depending on lifestyle and oral care. Patients who limit coffee, tea, red wine and smoking enjoy brighter smiles for longer." },
  { question: "Does whitening damage enamel?", answer: "No. Professional systems lift stains without harming enamel. Some temporary sensitivity can occur, but it usually resolves within a day or two." },
  { question: "How white can my teeth get?", answer: "It varies from person to person. Most patients see a clearly noticeable change after one session. We compare your shade before and after rather than promising a fixed number." },
  { question: "Laser, in-office or take-home — which should I choose?", answer: "Laser gives the fastest result in one visit; in-office without light is gentler for sensitive teeth; take-home trays whiten gradually and are ideal for maintenance. Many patients combine a clinic session with a home kit." },
  { question: "Can whitening remove all stains?", answer: "Whitening works best on stains from food, drink and ageing. Discolouration inside the tooth from medication or enamel defects responds less; ceramic veneers may be recommended instead." },
  { question: "Who is a good candidate?", answer: "Most adults with healthy teeth and gums. Whitening is not recommended for children, during pregnancy, or with untreated cavities or gum disease." },
  { question: "Will whitening make my teeth sensitive?", answer: "Some patients experience temporary sensitivity that fades within 24–48 hours. We use protective gels and adjust the protocol for sensitive patients." },
];

export default function Whitening() {
  const subs = subServicesFor("whitening");
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Teeth Whitening", path: "/whitening" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Professional Teeth Whitening in Dubai - Laser & In-Office"
        description="Safe, dentist-supervised teeth whitening in Dubai JLT: laser whitening, in-office treatment and custom take-home kits. Visible results in one session."
        path="/whitening"
        jsonLd={[
          jsonLdService({ name: "Teeth Whitening in Dubai", description: "Laser, in-office and take-home professional whitening.", path: "/whitening" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero title="Teeth Whitening in Dubai" subtitle="Brighten your smile safely and effectively with professional whitening treatments." breadcrumbs={crumbs} treatment="teeth whitening" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual icon={Sun} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Safe, Fast & Professional Whitening</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Professional teeth whitening delivers a visible change in a single visit. Our treatments remove deep stains without damaging enamel, with your gums fully protected, in about 45–60 minutes.
              </p>
              <div className="space-y-3">
                {["Fast results (45–60 min)", "Dentist-controlled gel strength", "Enamel safe", "Gum protection throughout", "Take-home trays for maintenance"].map((item) => (
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

      {/* Options → sub-pages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Our Teeth Whitening Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all space-y-3 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground flex-1">{s.heroSubtitle}</p>
                <span className="text-primary text-sm font-semibold">Learn more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection
        title="Why Professional Teeth Whitening?"
        benefits={["Safe for enamel and gums", "Noticeable results after one session", "Treatment strength tailored to your teeth", "Performed by our dentists, not a salon", "Honest advice if veneers would suit your stains better"]}
        bgColor="bg-background"
      />

      <PackagesCallout treatment="teeth whitening" />
      <FAQSection title="Whitening FAQs" faqs={FAQS} />
      <CTASection title="Ready for a Brighter Smile?" text="Book your professional whitening session in JLT and see the difference in about an hour." treatment="teeth whitening" bgColor="bg-background" />
    </div>
  );
}
