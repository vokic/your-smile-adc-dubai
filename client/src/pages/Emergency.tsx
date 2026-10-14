import { useState } from "react";
import { Link } from "wouter";
import { MessageCircle, Phone, CheckCircle2, AlertCircle, Home as HomeIcon, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { FAQSection } from "@/components/FAQSection";
import { EmergencyConfirmModal } from "@/components/EmergencyConfirmModal";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { EMERGENCY_PHONE, EMERGENCY_PHONE_DISPLAY, WORKING_HOURS_SUMMARY, formatHours, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";
import type { FAQ } from "@/content/services";

export default function Emergency() {
  const { t, tList, tItems, language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const faqs = tItems<FAQ>("emergency.faqs");
  const cases = tItems<{ title: string; desc: string }>("emergency.cases");
  const hours = WORKING_HOURS_SUMMARY.map(
    (h) => `${t(`hours.summary.${h.key}`)} ${"closed" in h ? t("hours.closed") : formatHours(h.hours, language)}`,
  ).join(" \u00b7 ");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("emergency.crumb"), path: "/emergency" },
  ];
  const confirmCall = () => {
    setShowModal(false);
    track("emergency_confirm", { source: "emergency-page" });
    window.location.href = `tel:${EMERGENCY_PHONE}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("emergency.seoTitle")}
        description={t("emergency.seoDescription")}
        path="/emergency"
        jsonLd={[
          jsonLdService({
            name: t("emergency.jsonLdName"),
            description: t("emergency.jsonLdDescription"),
            path: "/emergency",
            serviceType: t("emergency.jsonLdServiceType"),
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title={t("emergency.heroTitle")}
        subtitle={t("emergency.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={t("emergency.treatment")}
        primaryButtonText={t("emergency.heroPrimary")}
        secondaryButtonText={t("emergency.heroSecondary")}
        tone="emergency"
      />

      {/* Emergency line block */}
      <section className="py-10 md:py-14 bg-red-50 border-b border-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white rounded-2xl border-2 border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-10 w-10 text-red-600 shrink-0" />
              <div>
                <p className="font-bold text-secondary text-lg">{t("emergency.lineTitle")}</p>
                <p className="text-muted-foreground text-sm">{t("emergency.lineBody")}</p>
                <p className="text-xs text-muted-foreground mt-2 inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {t("emergency.clinicHours", { hours })}
                </p>
              </div>
            </div>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full gap-2 font-bold text-lg shrink-0" onClick={() => setShowModal(true)} data-testid="button-emergency-line">
              <Phone className="h-5 w-5" /> {EMERGENCY_PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual icon={AlertCircle} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("emergency.introTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("emergency.introBody")}</p>
              <div className="space-y-3">
                {tList("emergency.introPoints").map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("emergency.whenTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((e) => (
              <div key={e.title} className="p-6 bg-card rounded-xl border-2 border-red-200 hover:shadow-sm transition-all space-y-3">
                <h3 className="text-lg font-bold text-red-600 flex items-center gap-2"><AlertCircle className="h-5 w-5" />{e.title}</h3>
                <p className="text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* At-home emergency */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 md:p-12 rounded-3xl bg-secondary text-white">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm"><HomeIcon className="h-4 w-4" /> {t("emergency.atHomeEyebrow")}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{t("emergency.atHomeTitle")}</h2>
              <p className="text-white/80 text-lg leading-relaxed">{t("emergency.atHomeBody")}</p>
              <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-secondary gap-2">
                <Link href="/at-home">{t("emergency.atHomeLink")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
            <ul className="space-y-3">
              {tList("emergency.atHomePoints").map((i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-white/10 rounded-xl border border-white/15"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("emergency.gentleTitle")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">{t("emergency.gentleBody")}</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 md:py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border-2 border-red-300">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("emergency.ctaTitle")}</h2>
            <p className="text-muted-foreground text-lg">{t("emergency.ctaBody")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white gap-2 text-lg font-bold rounded-full" size="lg" onClick={() => setShowModal(true)}>
                <Phone className="h-5 w-5" /> {t("emergency.callLine")}
              </Button>
              <Button asChild variant="outline" className="gap-2 border-2 border-red-300 rounded-full">
                <a href={whatsappLink(t("fab.waMessageEmergency"))} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "emergency-cta" })}>
                  <MessageCircle className="h-4 w-4" /> {t("emergency.messageWhatsapp")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EmergencyConfirmModal isOpen={showModal} onClose={() => setShowModal(false)} onConfirm={confirmCall} phoneNumber={EMERGENCY_PHONE_DISPLAY} />
    </div>
  );
}
