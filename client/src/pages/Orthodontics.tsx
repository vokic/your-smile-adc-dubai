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
import { subServicesFor, subServicePath, localizeSubService } from "@/content/services";
import type { FAQ, Step } from "@/content/services";
import { useLanguage } from "@/hooks/useLanguage";

interface ComparisonRowCopy {
  feature: string;
  aligners: string;
  braces: string;
}

export default function Orthodontics() {
  const { t, tList, tItems, tOr, tListOr } = useLanguage();
  const subs = subServicesFor("orthodontics").map((s) => localizeSubService(s, { tOr, tListOr }));
  const faqs = tItems<FAQ>("orthodontics.faqs");
  const steps = tItems<Omit<Step, "number">>("orthodontics.steps");
  const comparisonCopy = tItems<ComparisonRowCopy>("orthodontics.comparisonRows");
  const treatment = t("orthodontics.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("orthodontics.crumb"), path: "/orthodontics" },
  ];

  // "Removable" is a yes/no row, so it is spliced in after the first two
  // text rows rather than coming from the translated copy list.
  const comparisonRows = [
    ...comparisonCopy.slice(0, 2).map((r) => ({ feature: r.feature, invisalign: r.aligners, braces: r.braces })),
    { feature: t("orthodontics.removableFeature"), invisalign: true, braces: false },
    ...comparisonCopy.slice(2).map((r) => ({ feature: r.feature, invisalign: r.aligners, braces: r.braces })),
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("orthodontics.seoTitle")}
        description={t("orthodontics.seoDescription")}
        path="/orthodontics"
        jsonLd={[
          jsonLdService({
            name: t("orthodontics.jsonLdName"),
            description: t("orthodontics.jsonLdDescription"),
            path: "/orthodontics",
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("orthodontics.heroTitle")}
        subtitle={t("orthodontics.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        primaryButtonText={t("orthodontics.heroCta")}
        backgroundImage={IMG.treatmentPlan}
      />

      {/* Comparison (no price row, per owner) */}
      <ServiceComparison
        title={t("orthodontics.comparisonTitle")}
        subtitle={t("orthodontics.comparisonSubtitle")}
        showThirdColumn={false}
        rows={comparisonRows}
      />

      {/* Treatments FIRST, journey after (owner: swap order) */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">{t("orthodontics.treatmentsTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
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
        title={t("orthodontics.journeyTitle")}
        subtitle={t("orthodontics.journeySubtitle")}
        steps={steps.map((s, i) => ({ number: i + 1, ...s }))}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("orthodontics.invisalignTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("orthodontics.invisalignBody")}</p>
              <div className="space-y-3">
                {tList("orthodontics.invisalignPoints").map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Smile className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/orthodontics/invisalign" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                {t("orthodontics.invisalignLink")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <Visual src={IMG.clinicSmile} icon={Smile} className="h-[400px]" />
          </div>
        </div>
      </section>

      <BenefitsSection
        title={t("orthodontics.benefitsTitle")}
        benefits={tList("orthodontics.benefits")}
        bgColor="bg-muted/30"
      />

      <PackagesCallout treatment={t("orthodontics.packagesTreatment")} bgColor="bg-background" />

      <SmileTransformations
        category="Orthodontics"
        title={t("orthodontics.transformationsTitle")}
        subtitle={t("orthodontics.transformationsSubtitle")}
        bgColor="bg-muted/30"
      />

      <FAQSection faqs={faqs} />

      <CTASection title={t("orthodontics.ctaTitle")} text={t("orthodontics.ctaText")} treatment={treatment} />
    </div>
  );
}
