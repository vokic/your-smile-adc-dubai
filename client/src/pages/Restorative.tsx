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
import { subServicesFor, subServicePath, localizeSubService } from "@/content/services";
import type { FAQ } from "@/content/services";
import { useLanguage } from "@/hooks/useLanguage";

export default function Restorative() {
  const { t, tList, tItems, tOr, tListOr } = useLanguage();
  const subs = subServicesFor("restorative").map((s) => localizeSubService(s, { tOr, tListOr }));
  const faqs = tItems<FAQ>("restorative.faqs");
  const treatment = t("restorative.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("restorative.crumb"), path: "/restorative" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("restorative.seoTitle")}
        description={t("restorative.seoDescription")}
        path="/restorative"
        jsonLd={[jsonLdFAQPage(faqs), jsonLdBreadcrumb(crumbs)]}
      />
      <ServiceHero
        title={t("restorative.heroTitle")}
        subtitle={t("restorative.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        backgroundImage={IMG.crowns}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.crowns} icon={Layers} className="h-[320px] lg:h-[380px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("restorative.introTitle")}</h2>
              {tList("restorative.introParagraphs").map((p) => (
                <p key={p} className="text-muted-foreground text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              <ul className="space-y-2">
                {tList("restorative.introPoints").map((i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary font-medium"><CheckCircle2 className="h-5 w-5 text-primary" /> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-service cards */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("restorative.treatmentsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all space-y-3">
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
        title={t("restorative.benefitsTitle")}
        benefits={tList("restorative.benefits")}
        bgColor="bg-background"
      />

      <PackagesCallout treatment={treatment} />
      <FAQSection title={t("restorative.faqsTitle")} faqs={faqs} />
      <CTASection
        title={t("restorative.ctaTitle")}
        text={t("restorative.ctaText")}
        treatment={treatment}
        bgColor="bg-background"
      />
    </div>
  );
}
