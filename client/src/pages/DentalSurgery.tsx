import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Scissors } from "lucide-react";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { subServicesFor, subServicePath, localizeSubService } from "@/content/services";
import type { FAQ } from "@/content/services";
import { useLanguage } from "@/hooks/useLanguage";

export default function DentalSurgery() {
  const { t, tList, tItems, tOr, tListOr } = useLanguage();
  const subs = subServicesFor("dental-surgery").map((s) => localizeSubService(s, { tOr, tListOr }));
  const faqs = tItems<FAQ>("dentalSurgery.faqs");
  const treatment = t("dentalSurgery.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("dentalSurgery.crumb"), path: "/dental-surgery" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("dentalSurgery.seoTitle")}
        description={t("dentalSurgery.seoDescription")}
        path="/dental-surgery"
        jsonLd={[
          jsonLdService({
            name: t("dentalSurgery.jsonLdName"),
            description: t("dentalSurgery.jsonLdDescription"),
            path: "/dental-surgery",
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("dentalSurgery.heroTitle")}
        subtitle={t("dentalSurgery.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        primaryButtonText={t("dentalSurgery.heroCta")}
        backgroundImage={IMG.treatmentPlan}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("dentalSurgery.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("dentalSurgery.introBody")}</p>
              <div className="space-y-3">
                {tList("dentalSurgery.introPoints").map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Visual src={IMG.implants} icon={Scissors} className="h-[350px]" />
          </div>
        </div>
      </section>

      {/* Each service → its own landing page */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("dentalSurgery.servicesTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{s.heroSubtitle}</p>
              </Link>
            ))}
            <Link href="/implants" className="group p-8 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{t("dentalSurgery.implantsCardTitle")}</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm">{t("dentalSurgery.implantsCardDesc")}</p>
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection
        title={t("dentalSurgery.benefitsTitle")}
        benefits={tList("dentalSurgery.benefits")}
        bgColor="bg-background"
      />

      <PackagesCallout treatment={treatment} />
      <FAQSection title={t("dentalSurgery.faqsTitle")} faqs={faqs} />
      <CTASection
        title={t("dentalSurgery.ctaTitle")}
        text={t("dentalSurgery.ctaText")}
        treatment={treatment}
        bgColor="bg-background"
      />
    </div>
  );
}
