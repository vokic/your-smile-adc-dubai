import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage } from "@/lib/seo";
import { subServicesFor, subServicePath } from "@/content/services";

const FAQS = [
  { question: "What is the difference between a filling, an inlay, an onlay and a crown?", answer: "A filling is placed directly into a small cavity in one visit. An inlay is a lab-made piece that fits inside the tooth between the cusps; an onlay also covers one or more cusps. Both preserve far more natural tooth than a crown, which covers the entire tooth. We recommend the least invasive option that will last." },
  { question: "What are overlays or table tops?", answer: "Thin ceramic caps that cover the whole chewing surface of a worn back tooth with minimal or no drilling. They rebuild lost height and protect the remaining enamel, and are often part of a full-mouth rehabilitation for patients with worn or ground-down teeth." },
  { question: "Which materials do you use?", answer: "Mostly lithium-disilicate ceramic or zirconia designed with CAD/CAM from a digital scan, and composite where indicated. Your dentist will explain which suits your tooth and bite." },
  { question: "How many visits are needed?", answer: "Usually two: preparation and scan, then bonding once the restoration is made. Some cases can be milled and fitted the same day." },
  { question: "Are restorative treatments covered by insurance?", answer: "Many UAE dental plans cover part of restorative work. Tell us your insurer when you book and we will confirm coverage before treatment." },
];

export default function Restorative() {
  const subs = subServicesFor("restorative");
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Restorative Dentistry", path: "/restorative" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Restorative Dentistry in Dubai - Inlays, Onlays & Overlays"
        description="Conservative restorative dentistry in Dubai JLT: ceramic inlays, onlays and overlays (table tops) that rebuild damaged or worn teeth while preserving healthy enamel."
        path="/restorative"
        jsonLd={[jsonLdFAQPage(FAQS), jsonLdBreadcrumb(crumbs)]}
      />
      <ServiceHero
        title="Restorative Dentistry in Dubai"
        subtitle="Rebuild damaged, decayed or worn teeth with precise ceramic inlays, onlays and overlays that keep as much of your natural tooth as possible."
        breadcrumbs={crumbs}
        treatment="restorative dentistry"
        backgroundImage={IMG.crowns}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.crowns} icon={Layers} className="h-[320px] lg:h-[380px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Between a filling and a crown</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When a cavity or fracture is too large for a simple filling but the tooth is too healthy to justify a full crown, an inlay, onlay or overlay restores it precisely. Each piece is designed digitally from a scan of your tooth and bonded in place, so the result is strong, tight-fitting and virtually invisible.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Because we specialise in complex full-mouth rehabilitation, these conservative restorations are also how we rebuild worn-down bites and protect remaining enamel for patients who grind their teeth.
              </p>
              <ul className="space-y-2">
                {["Preserves healthy tooth structure", "Digital scan — no messy impressions", "Ceramic that matches your natural shade", "Same-day milling available for many cases"].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary font-medium"><CheckCircle2 className="h-5 w-5 text-primary" /> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-service cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Our Restorative Treatments in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground">{s.heroSubtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection
        title="Why Choose Us for Restorative Dentistry"
        benefits={[
          "Conservative approach: we keep as much natural tooth as possible",
          "Digital design and in-clinic milling for a precise fit",
          "Restorations planned as part of your whole bite, not tooth by tooth",
          "Experienced in complex full-mouth rehabilitation",
          "Clear, honest recommendation on filling vs inlay vs crown",
        ]}
        bgColor="bg-background"
      />

      <PackagesCallout treatment="restorative dentistry" />
      <FAQSection title="Restorative Dentistry FAQs" faqs={FAQS} />
      <CTASection title="Restore Your Tooth, Keep Your Smile" text="Book a consultation in JLT and find out which restoration is right for your tooth." treatment="restorative dentistry" bgColor="bg-background" />
    </div>
  );
}
