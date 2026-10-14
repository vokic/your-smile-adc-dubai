import { Link } from "wouter";
import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { subServicesFor, subServicePath, localizeSubService } from "@/content/services";
import type { FAQ } from "@/content/services";
import { useLanguage } from "@/hooks/useLanguage";

// Names and blurbs come from `generalPreventive.also`, in the same order.
const ALSO_LINKS = ["/restorative", "/xray-opg", "/at-home"];

interface AlsoItem {
  name: string;
  desc: string;
}

export default function GeneralAndPreventive() {
  const { t, tList, tItems, tOr, tListOr } = useLanguage();
  const subs = subServicesFor("general-preventive").map((s) => localizeSubService(s, { tOr, tListOr }));
  const faqs = tItems<FAQ>("generalPreventive.faqs");
  const also = tItems<AlsoItem>("generalPreventive.also");
  const treatment = t("generalPreventive.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("generalPreventive.crumb"), path: "/general-preventive" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("generalPreventive.seoTitle")}
        description={t("generalPreventive.seoDescription")}
        path="/general-preventive"
        jsonLd={[
          jsonLdService({
            name: t("generalPreventive.jsonLdName"),
            description: t("generalPreventive.jsonLdDescription"),
            path: "/general-preventive",
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("generalPreventive.heroTitle")}
        subtitle={t("generalPreventive.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        primaryButtonText={t("generalPreventive.heroCta")}
        backgroundImage={IMG.clinicSmile}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.treatmentPlan} icon={HeartPulse} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("generalPreventive.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("generalPreventive.introBody")}</p>
              <div className="space-y-3">
                {tList("generalPreventive.introPoints").map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("generalPreventive.servicesTitle")}</h2>
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
            {also.map((a, idx) => (
              <Link key={ALSO_LINKS[idx]} href={ALSO_LINKS[idx]} className="group p-6 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{a.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection
        title={t("generalPreventive.benefitsTitle")}
        benefits={tList("generalPreventive.benefits")}
        bgColor="bg-background"
      />

      <FAQSection title={t("generalPreventive.faqsTitle")} faqs={faqs} />
      <CTASection
        title={t("generalPreventive.ctaTitle")}
        text={t("generalPreventive.ctaText")}
        treatment={treatment}
      />
    </div>
  );
}
