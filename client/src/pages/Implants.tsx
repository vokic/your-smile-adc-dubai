import { Link } from "wouter";
import { CheckCircle2, ShieldCheck, Anchor } from "lucide-react";
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
import { IMPLANT_BRAND } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";
import type { FAQ, Step } from "@/content/services";

// Only four of the eight solution cards link anywhere; the rest are informational.
const SOLUTION_LINKS: (string | undefined)[] = [
  undefined,
  undefined,
  undefined,
  "/crowns-bridges/implant-supported-bridges",
  undefined,
  "/dental-surgery/bone-grafting",
  undefined,
  undefined,
];

export default function Implants() {
  const { t, tList, tItems } = useLanguage();
  const warranty = t("clinic.implantWarranty", { brand: IMPLANT_BRAND });
  const vars = { brand: IMPLANT_BRAND, warranty };
  const solutions = tItems<{ title: string; desc: string }>("implants.solutions");
  const steps = tItems<Omit<Step, "number">>("implants.steps");
  const faqs = tItems<FAQ>("implants.faqs", vars);
  const treatment = t("implants.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("implants.crumb"), path: "/implants" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("implants.seoTitle")}
        description={t("implants.seoDescription", vars)}
        path="/implants"
        jsonLd={[
          jsonLdService({
            name: t("implants.jsonLdName"),
            description: t("implants.jsonLdDescription"),
            path: "/implants",
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("implants.heroTitle")}
        subtitle={t("implants.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        backgroundImage={IMG.implants}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.implants} icon={Anchor} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("implants.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("implants.introBody")}</p>
              <div className="space-y-3">
                {tList("implants.introPoints").map((item) => (
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

      {/* Solutions grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("implants.solutionsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((s, idx) => {
              const href = SOLUTION_LINKS[idx];
              const inner = (
                <>
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </>
              );
              return href ? (
                <Link key={s.title} href={href} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
                  {inner}
                </Link>
              ) : (
                <div key={s.title} className="group p-6 bg-card rounded-xl border border-border space-y-3">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProcedureSteps
        title={t("implants.journeyTitle")}
        subtitle={t("implants.journeySubtitle")}
        steps={steps.map((s, i) => ({ number: i + 1, ...s }))}
      />

      <BenefitsSection
        title={t("implants.benefitsTitle")}
        benefits={tList("implants.benefits", vars)}
        bgColor="bg-background"
      />

      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-6">
          <ShieldCheck className="h-14 w-14 text-primary shrink-0" />
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">{t("implants.warrantyTitle")}</h2>
            <p className="text-white/80 text-lg">{t("implants.warrantyBody", vars)}</p>
          </div>
        </div>
      </section>

      <PackagesCallout treatment={t("implants.packagesTreatment")} bgColor="bg-background" />

      <SmileTransformations
        category="Implants"
        title={t("implants.transformationsTitle")}
        subtitle={t("implants.transformationsSubtitle")}
        bgColor="bg-muted/30"
      />

      <FAQSection title={t("implants.faqsTitle")} faqs={faqs} />

      <CTASection title={t("implants.ctaTitle")} text={t("implants.ctaText")} treatment={treatment} />
    </div>
  );
}
