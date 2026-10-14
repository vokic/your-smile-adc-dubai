import { Link } from "wouter";
import { CheckCircle2, Sparkles, Ban, Syringe, Clock, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { SmileTransformations } from "@/components/SmileTransformations";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { FOUNDER, GOOGLE_REVIEW_RATING } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";
import type { FAQ, Step } from "@/content/services";

const RELATED_LINKS = ["/cosmetic", "/whitening", "/crowns-bridges", "/implants"];

export default function Veneers() {
  const { t, tList, tItems } = useLanguage();
  const founderVars = {
    name: FOUNDER.name,
    years: FOUNDER.cosmeticExperienceYears,
    rating: GOOGLE_REVIEW_RATING.toFixed(1),
  };
  const faqs = tItems<FAQ>("veneers.faqs");
  const steps = tItems<Omit<Step, "number">>("veneers.steps");
  const relatedLinks = tItems<{ name: string }>("veneers.relatedLinks");
  const treatment = t("veneers.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("veneers.crumb"), path: "/veneers" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("veneers.seoTitle")}
        description={t("veneers.seoDescription")}
        path="/veneers"
        jsonLd={[
          jsonLdService({
            name: t("veneers.jsonLdName"),
            description: t("veneers.jsonLdDescription"),
            path: "/veneers",
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("veneers.heroTitle")}
        subtitle={t("veneers.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        backgroundImage={IMG.clinicSmile}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.treatmentPlan} icon={Smile} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("veneers.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("veneers.introBody")}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("veneers.introFounder", founderVars)}</p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <Link href="/gallery">{t("veneers.seeTransformations")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* No-prep highlight */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">{t("veneers.noPrepTitle")}</h2>
            <p className="text-white/80 text-lg leading-relaxed">{t("veneers.noPrepBody")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[Ban, Ban, Sparkles, Syringe, Clock]
              .map((Icon, idx) => ({ Icon, label: tList("veneers.noPrepLabels")[idx] ?? "" }))
              .map(({ Icon, label }) => (
              <div key={label} className="p-5 bg-white/10 rounded-xl border border-white/15 text-center space-y-2">
                <Icon className="h-7 w-7 text-primary mx-auto" />
                <p className="font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcedureSteps
        title={t("veneers.journeyTitle")}
        subtitle={t("veneers.journeySubtitle")}
        steps={steps.map((s, i) => ({ number: i + 1, ...s }))}
      />

      <BenefitsSection
        title={t("veneers.benefitsTitle")}
        benefits={tList("veneers.benefits", founderVars)}
        bgColor="bg-muted/30"
      />

      <PackagesCallout treatment={treatment} bgColor="bg-background" />

      <SmileTransformations
        category="Veneers"
        title={t("veneers.transformationsTitle")}
        subtitle={t("veneers.transformationsSubtitle")}
        bgColor="bg-muted/30"
      />

      <FAQSection title={t("veneers.faqsTitle")} faqs={faqs} />

      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-muted-foreground">{t("common.related")}</span>
            {relatedLinks.map((l, idx) => (
              <Link key={RELATED_LINKS[idx]} href={RELATED_LINKS[idx]} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t("veneers.ctaTitle")} text={t("veneers.ctaText")} treatment={treatment} />
    </div>
  );
}
