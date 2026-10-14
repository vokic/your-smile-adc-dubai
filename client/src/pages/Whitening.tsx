import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Sun } from "lucide-react";
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
import { useLanguage } from "@/hooks/useLanguage";
import type { FAQ } from "@/content/services";

export default function Whitening() {
  const { t, tList, tItems, tOr, tListOr } = useLanguage();
  const subs = subServicesFor("whitening").map((s) => localizeSubService(s, { tOr, tListOr }));
  const faqs = tItems<FAQ>("whitening.faqs");
  const treatment = t("whitening.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("whitening.crumb"), path: "/whitening" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("whitening.seoTitle")}
        description={t("whitening.seoDescription")}
        path="/whitening"
        jsonLd={[
          jsonLdService({ name: t("whitening.jsonLdName"), description: t("whitening.jsonLdDescription"), path: "/whitening" }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("whitening.heroTitle")}
        subtitle={t("whitening.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        backgroundImage={IMG.clinicSmile}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.clinicSmile} icon={Sun} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("whitening.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("whitening.introBody")}</p>
              <div className="space-y-3">
                {tList("whitening.introPoints").map((item) => (
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
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("whitening.optionsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all space-y-3 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground flex-1">{s.heroSubtitle}</p>
                <span className="text-primary text-sm font-semibold">{t("common.learnMore")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection
        title={t("whitening.benefitsTitle")}
        benefits={tList("whitening.benefits")}
        bgColor="bg-background"
      />

      <PackagesCallout treatment={treatment} />
      <FAQSection title={t("whitening.faqsTitle")} faqs={faqs} />
      <CTASection
        title={t("whitening.ctaTitle")}
        text={t("whitening.ctaText")}
        treatment={treatment}
        bgColor="bg-background"
      />
    </div>
  );
}
