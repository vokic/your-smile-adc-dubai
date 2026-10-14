import { CheckCircle2, Scan } from "lucide-react";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdService } from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";

interface Card {
  title: string;
  desc: string;
}

export default function DentalXrayOPG() {
  const { t, tList, tItems } = useLanguage();
  const imaging = tItems<Card>("xrayOpg.imaging");
  const why = tItems<Card>("xrayOpg.why");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("xrayOpg.crumb"), path: "/xray-opg" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("xrayOpg.seoTitle")}
        description={t("xrayOpg.seoDescription")}
        path="/xray-opg"
        jsonLd={[
          jsonLdService({
            name: t("xrayOpg.jsonLdName"),
            description: t("xrayOpg.jsonLdDescription"),
            path: "/xray-opg",
            serviceType: t("xrayOpg.jsonLdServiceType"),
          }),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("xrayOpg.heroTitle")}
        subtitle={t("xrayOpg.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={t("xrayOpg.treatment")}
        primaryButtonText={t("xrayOpg.bookImaging")}
        backgroundImage={IMG.treatmentPlan}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.treatmentPlan} icon={Scan} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("xrayOpg.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("xrayOpg.introBody")}</p>
              <div className="space-y-3">
                {tList("xrayOpg.introPoints").map((item) => (
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">{t("xrayOpg.servicesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {imaging.map((i, idx) => (
              <div key={i.title} className="p-8 bg-card rounded-xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-secondary">{i.title}</h3>
                <p className="text-muted-foreground">{i.desc}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {tList(`xrayOpg.imagingUses.${idx}`).map((u) => (
                    <li key={u}>✓ {u}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">{t("xrayOpg.whyTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((item) => (
              <div key={item.title} className="p-6 bg-white/10 rounded-xl border border-white/20 space-y-2">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t("xrayOpg.ctaTitle")}
        text={t("xrayOpg.ctaText")}
        treatment={t("xrayOpg.treatment")}
        primaryLabel={t("xrayOpg.bookImaging")}
        bgColor="bg-background"
      />
    </div>
  );
}
