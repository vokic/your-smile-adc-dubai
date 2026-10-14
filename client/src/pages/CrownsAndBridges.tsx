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
import { subServicesFor, subServicePath, localizeSubService } from "@/content/services";
import type { FAQ } from "@/content/services";
import { useLanguage } from "@/hooks/useLanguage";

export default function CrownsAndBridges() {
  const { t, tList, tItems, tOr, tListOr } = useLanguage();
  const subs = subServicesFor("crowns-bridges").map((s) => localizeSubService(s, { tOr, tListOr }));
  const faqs = tItems<FAQ>("crownsAndBridges.faqs");
  const treatment = t("crownsAndBridges.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("crownsAndBridges.crumb"), path: "/crowns-bridges" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("crownsAndBridges.seoTitle")}
        description={t("crownsAndBridges.seoDescription")}
        path="/crowns-bridges"
        jsonLd={[
          jsonLdService({
            name: t("crownsAndBridges.jsonLdName"),
            description: t("crownsAndBridges.jsonLdDescription"),
            path: "/crowns-bridges",
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("crownsAndBridges.heroTitle")}
        subtitle={t("crownsAndBridges.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        backgroundImage={IMG.crowns}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.crowns} icon={Crown} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("crownsAndBridges.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("crownsAndBridges.introBody")}</p>
              <div className="space-y-3">
                {tList("crownsAndBridges.introPoints").map((item) => (
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

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("crownsAndBridges.typesTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{s.heroSubtitle}</p>
              </Link>
            ))}
            <Link href="/restorative" className="group p-6 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{t("crownsAndBridges.restorativeCardTitle")}</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm">{t("crownsAndBridges.restorativeCardDesc")}</p>
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection
        title={t("crownsAndBridges.benefitsTitle")}
        benefits={tList("crownsAndBridges.benefits")}
        bgColor="bg-background"
      />

      <PackagesCallout treatment={treatment} />

      <SmileTransformations
        category="Smile Makeover"
        title={t("crownsAndBridges.transformationsTitle")}
        subtitle={t("crownsAndBridges.transformationsSubtitle")}
        bgColor="bg-background"
        showViewAll
      />

      <FAQSection faqs={faqs} />
      <CTASection
        title={t("crownsAndBridges.ctaTitle")}
        text={t("crownsAndBridges.ctaText")}
        treatment={treatment}
      />
    </div>
  );
}
