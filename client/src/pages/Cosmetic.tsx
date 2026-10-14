import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { FOUNDER, GOOGLE_REVIEW_RATING, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";
import type { FAQ } from "@/content/services";

// Every card links to the matching treatment page (owner request); titles
// and blurbs come from `cosmetic.services`, in this order.
const SERVICE_LINKS = ["/veneers", "/whitening", "/orthodontics", "/implants", "/crowns-bridges", "/gallery"];

export default function Cosmetic() {
  const { t, tList, tItems } = useLanguage();
  const founderVars = {
    name: FOUNDER.name,
    years: FOUNDER.cosmeticExperienceYears,
    rating: GOOGLE_REVIEW_RATING.toFixed(1),
  };
  const services = tItems<{ title: string; desc: string }>("cosmetic.services");
  const faqs = tItems<FAQ>("cosmetic.faqs");
  const treatment = t("cosmetic.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("cosmetic.crumb"), path: "/cosmetic" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("cosmetic.seoTitle")}
        description={t("cosmetic.seoDescription")}
        path="/cosmetic"
        jsonLd={[
          jsonLdService({
            name: t("cosmetic.jsonLdName"),
            description: t("cosmetic.jsonLdDescription"),
            path: "/cosmetic",
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("cosmetic.heroTitle")}
        subtitle={t("cosmetic.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        backgroundImage={IMG.clinicSmile}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.treatmentPlan} icon={Sparkles} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("cosmetic.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("cosmetic.introBody")}</p>
              <div className="space-y-3">
                {tList("cosmetic.introPoints").map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary" />
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("cosmetic.treatmentsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, idx) => (
              <Link key={SERVICE_LINKS[idx]} href={SERVICE_LINKS[idx]} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">{s.title}</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection
        title={t("cosmetic.benefitsTitle")}
        benefits={tList("cosmetic.benefits")}
        bgColor="bg-background"
      />

      {/* Hollywood smile highlight */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("cosmetic.hollywoodTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("cosmetic.hollywoodBody")}</p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <a
                  href={whatsappLink(t("cosmetic.hollywoodWhatsapp"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "cosmetic-makeover" })}
                >
                  {t("cosmetic.hollywoodCta")}
                </a>
              </Button>
            </div>
            <Visual src={IMG.clinicSmile} icon={Sparkles} className="h-[400px]" />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">{t("cosmetic.whyTitle")}</h2>
            <p className="text-gray-200 text-lg leading-relaxed">{t("cosmetic.whyBody", founderVars)}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tList("cosmetic.whyChips", founderVars).map((item) => (
                <span key={item} className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PackagesCallout treatment={t("cosmetic.packagesTreatment")} bgColor="bg-background" />
      <SmileTransformations
        category="Smile Makeover"
        title={t("cosmetic.transformationsTitle")}
        subtitle={t("cosmetic.transformationsSubtitle")}
        bgColor="bg-muted/30"
      />
      <FAQSection faqs={faqs} />
      <CTASection title={t("cosmetic.ctaTitle")} text={t("cosmetic.ctaText")} treatment={treatment} />
    </div>
  );
}
