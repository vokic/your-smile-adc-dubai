import { CheckCircle2, XCircle, Plane, Users, Clock, ShieldCheck, Hotel, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage } from "@/lib/seo";
import { whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";
import type { FAQ } from "@/content/services";

// Two packages, per owner: treatment-only vs all-inclusive (treatment +
// accommodation, transport and Dubai sightseeing organisation). The row
// labels come from `dentalTourism.includedRows`; this array just says which
// of the two packages each row belongs to, in the same order.
const INCLUDED_IN: { treatment: boolean; inclusive: boolean }[] = [
  { treatment: true, inclusive: true },
  { treatment: true, inclusive: true },
  { treatment: true, inclusive: true },
  { treatment: true, inclusive: true },
  { treatment: true, inclusive: true },
  { treatment: false, inclusive: true },
  { treatment: false, inclusive: true },
  { treatment: false, inclusive: true },
  { treatment: false, inclusive: true },
];

const WHY_ICONS = [Plane, Users, Clock, ShieldCheck];

interface Card {
  title: string;
  desc: string;
}

export default function DentalTourism() {
  const { t, tList, tItems } = useLanguage();
  const faqs = tItems<FAQ>("dentalTourism.faqs");
  const why = tItems<Card>("dentalTourism.why");
  const journey = tItems<Card>("dentalTourism.journey");
  const includedRows = tList("dentalTourism.includedRows");
  const treatment = t("dentalTourism.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("dentalTourism.crumb"), path: "/dental-tourism" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("dentalTourism.seoTitle")}
        description={t("dentalTourism.seoDescription")}
        path="/dental-tourism"
        jsonLd={[jsonLdFAQPage(faqs), jsonLdBreadcrumb(crumbs)]}
      />
      <ServiceHero
        title={t("dentalTourism.heroTitle")}
        subtitle={t("dentalTourism.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        primaryButtonText={t("dentalTourism.heroCta")}
        backgroundImage={IMG.handshake}
      />

      {/* Why */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{t("dentalTourism.whyTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("dentalTourism.whySubtitle")}</p>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {why
              .map((card, idx) => ({ ...card, Icon: WHY_ICONS[idx] }))
              .map(({ Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="mb-6 p-4 rounded-full bg-primary/5"><Icon className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two packages */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{t("dentalTourism.packagesTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("dentalTourism.packagesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-2xl border border-border p-8 space-y-4">
              <Stethoscope className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-secondary">{t("dentalTourism.treatmentOnlyTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("dentalTourism.treatmentOnlyBody")}</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-primary p-8 space-y-4 shadow-lg relative">
              <span className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{t("dentalTourism.mostConvenient")}</span>
              <Hotel className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-secondary">{t("dentalTourism.allInclusiveTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("dentalTourism.allInclusiveBody")}</p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border shadow-sm bg-white">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-3 py-3 md:px-6 md:py-4 text-left font-bold">{t("dentalTourism.colIncluded")}</th>
                  <th className="px-3 py-3 md:px-6 md:py-4 text-center font-bold">{t("dentalTourism.colTreatmentOnly")}</th>
                  <th className="px-3 py-3 md:px-6 md:py-4 text-center font-bold">{t("dentalTourism.colAllInclusive")}</th>
                </tr>
              </thead>
              <tbody>
                {includedRows.map((feature, i) => (
                  <tr key={feature} className={`border-t border-border ${i % 2 ? "bg-muted/20" : ""}`}>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-secondary font-medium">{feature}</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-center">{INCLUDED_IN[i]?.treatment ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" /> : <XCircle className="h-5 w-5 text-muted-foreground/40 mx-auto" />}</td>
                    <td className="px-3 py-3 md:px-6 md:py-4 text-center">{INCLUDED_IN[i]?.inclusive ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" /> : <XCircle className="h-5 w-5 text-muted-foreground/40 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
              <a
                href={whatsappLink(t("dentalTourism.packageWhatsapp"))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "tourism-packages" })}
              >
                {t("dentalTourism.requestPackage")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("dentalTourism.journeyTitle")}</h2>
              <p className="text-lg text-muted-foreground">{t("dentalTourism.journeySubtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {journey.map((item, idx) => (
                <div key={item.title} className="flex gap-6 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">{idx + 1}</div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoTestimonials />

      <FAQSection title={t("dentalTourism.faqsTitle")} faqs={faqs} />

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-primary/10">
            <Visual src={IMG.handshake} icon={Plane} className="w-full md:w-1/2 h-[320px]" />
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("dentalTourism.readyTitle")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("dentalTourism.readyBody")}</p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
                <a href={whatsappLink(t("dentalTourism.startWhatsapp"))} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "tourism-cta" })}>
                  {t("dentalTourism.startJourney")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t("dentalTourism.ctaTitle")}
        text={t("dentalTourism.ctaText")}
        treatment={treatment}
        bgColor="bg-background"
      />
    </div>
  );
}
