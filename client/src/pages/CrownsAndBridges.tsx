import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Crown } from "lucide-react";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { SmileTransformations } from "@/components/SmileTransformations";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { subServicesFor, subServicePath } from "@/content/services";

const FAQS = [
  { question: "What is the difference between a crown and a bridge?", answer: "A crown covers and protects a single damaged tooth, while a bridge fills the gap of one or more missing teeth using neighbouring teeth or implants for support." },
  { question: "Is the procedure painful?", answer: "No. Procedures are performed under local anaesthesia. Mild sensitivity after treatment is temporary and easily managed." },
  { question: "What materials are used?", answer: "Zirconia, lithium-disilicate porcelain and, where indicated, porcelain-fused-to-metal. Zirconia and porcelain give the most natural aesthetics and durability." },
  { question: "How long do crowns and bridges last?", answer: "With proper care, typically 10–15 years or longer. Good oral hygiene and regular check-ups extend their lifespan." },
  { question: "Can I get a crown in one visit?", answer: "Often yes. Our same-day crowns are scanned, designed and milled in-clinic, so many patients leave with the final crown in a single appointment." },
  { question: "Why choose an implant-supported bridge?", answer: "It replaces missing teeth without grinding down healthy neighbours, preserves the jawbone and feels more natural than a traditional bridge." },
  { question: "Who is a good candidate?", answer: "Anyone with damaged, weakened or missing teeth and healthy gums. Implant-supported options also require adequate bone, which we assess with a 3D scan." },
];

export default function CrownsAndBridges() {
  const subs = subServicesFor("crowns-bridges");
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Crowns & Bridges", path: "/crowns-bridges" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Crowns & Bridges in Dubai - Zirconia, Porcelain, Same-Day"
        description="Custom zirconia and porcelain crowns, same-day CAD/CAM crowns and implant-supported bridges in Dubai JLT. Complete smile transformations with crowns and bridges."
        path="/crowns-bridges"
        jsonLd={[
          jsonLdService({ name: "Dental Crowns & Bridges in Dubai", description: "Zirconia, porcelain, same-day crowns and implant-supported bridges.", path: "/crowns-bridges" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="Dental Crowns & Bridges in Dubai"
        subtitle="Restore strength, function and aesthetics with custom crowns and bridges — from a single tooth to a complete smile transformation."
        breadcrumbs={crumbs}
        treatment="crowns and bridges"
        backgroundImage={IMG.crowns}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.crowns} icon={Crown} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Crowns & Bridges Explained</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dental crowns are protective caps that cover and strengthen damaged teeth, while bridges replace one or more missing teeth by anchoring to neighbouring teeth or implants. Designed digitally from a scan and milled from ceramic, they blend in with your natural smile.
              </p>
              <div className="space-y-3">
                {["Protect damaged or root-treated teeth", "Replace missing teeth", "Restore chewing function", "Natural aesthetics, matched to your shade", "Same-day options for many cases"].map((item) => (
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Types of Crowns & Bridges We Offer in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{s.heroSubtitle}</p>
              </Link>
            ))}
            <Link href="/restorative" className="group p-6 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">Inlays, Onlays & Overlays</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm">Too big for a filling, too healthy for a crown? See our restorative dentistry options.</p>
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection
        title="Dubai's Trusted Restorative Specialists"
        benefits={["CAD/CAM precision for a perfect fit", "High-quality biocompatible ceramics", "Gentle procedures under local anaesthesia", "Experienced in complete smile transformations with crowns and bridges", "Digital scan — no messy impressions"]}
        bgColor="bg-background"
      />

      <PackagesCallout treatment="crowns and bridges" />

      <SmileTransformations category="Smile Makeover" title="Smile Transformations with Crowns" subtitle="Real cases from our JLT clinic. Individual results vary." bgColor="bg-background" showViewAll />

      <FAQSection title="Frequently Asked Questions" faqs={FAQS} />
      <CTASection title="Restore Your Smile Today" text="Don't let damaged or missing teeth hold you back. Book your consultation in JLT." treatment="crowns and bridges" />
    </div>
  );
}
