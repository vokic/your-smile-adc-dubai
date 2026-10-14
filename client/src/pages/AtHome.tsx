import { Link } from "wouter";
import { CheckCircle2, XCircle, Home as HomeIcon, ShieldCheck, Clock, Users, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { REGULAR_PHONE, REGULAR_PHONE_DISPLAY, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";
import type { FAQ, Step } from "@/content/services";

// What the owner confirmed CAN and CANNOT be done outside the clinic lives
// in the locale files (atHome.canDo / atHome.cannotDo); only the icons for
// the three intro badges stay here.
const INTRO_BADGE_ICONS = [ShieldCheck, Clock, Users];

interface CanDoItem {
  title: string;
  desc: string;
}

export default function AtHome() {
  const { t, tList, tItems } = useLanguage();
  const canDo = tItems<CanDoItem>("atHome.canDo");
  const faqs = tItems<FAQ>("atHome.faqs");
  const steps = tItems<Omit<Step, "number">>("atHome.steps");
  const treatment = t("atHome.treatment");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("atHome.crumb"), path: "/at-home" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("atHome.seoTitle")}
        description={t("atHome.seoDescription")}
        path="/at-home"
        jsonLd={[
          jsonLdService({
            name: t("atHome.jsonLdName"),
            description: t("atHome.jsonLdDescription"),
            path: "/at-home",
            serviceType: t("atHome.jsonLdServiceType"),
          }),
          jsonLdFAQPage(faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />

      <ServiceHero
        title={t("atHome.heroTitle")}
        subtitle={t("atHome.heroSubtitle")}
        breadcrumbs={crumbs}
        treatment={treatment}
        primaryButtonText={t("atHome.bookVisit")}
        backgroundImage={IMG.handshake}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("atHome.introTitle")}</h2>
              {tList("atHome.introParagraphs").map((para) => (
                <p key={para} className="text-muted-foreground text-lg leading-relaxed">
                  {para}
                </p>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {tList("atHome.introBadges")
                  .map((label, idx) => ({ label, Icon: INTRO_BADGE_ICONS[idx] }))
                  .map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-secondary font-medium text-sm">
                    <Icon className="h-5 w-5 text-primary shrink-0" /> {label}
                  </div>
                ))}
              </div>
            </div>
            <Visual src={IMG.reception} icon={HomeIcon} className="h-[340px] lg:h-[420px]" />
          </div>
        </div>
      </section>

      {/* Can do */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("atHome.canDoTitle")}</h2>
            <p className="text-muted-foreground text-lg">{t("atHome.canDoSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {canDo.map((item) => (
              <div key={item.title} className="p-6 bg-card rounded-xl border border-border hover:shadow-sm transition-all space-y-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cannot do — transparency builds trust */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("atHome.clinicOnlyTitle")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("atHome.clinicOnlyBody")}</p>
              <Button asChild variant="outline" className="rounded-full gap-2">
                <Link href="/contact">{t("atHome.clinicAddressLink")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
            <ul className="lg:col-span-3 space-y-3">
              {tList("atHome.cannotDo").map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 bg-muted/40 rounded-xl border border-border">
                  <XCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcedureSteps
        title={t("atHome.journeyTitle")}
        subtitle={t("atHome.journeySubtitle")}
        steps={steps.map((step, i) => ({ number: i + 1, ...step }))}
      />

      {/* Pricing note */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5 p-10 bg-card rounded-2xl border border-border">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary">{t("atHome.feesTitle")}</h2>
            <p className="text-muted-foreground text-lg">{t("atHome.feesBody")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <a
                  href={whatsappLink(t("atHome.quoteWhatsapp"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "at-home-fees" })}
                >
                  <MessageCircle className="h-4 w-4" /> {t("atHome.getQuote")}
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 rounded-full">
                <a href={`tel:${REGULAR_PHONE}`} onClick={() => track("call_click", { source: "at-home-fees", line: "regular" })}>
                  <Phone className="h-4 w-4" /> {REGULAR_PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title={t("atHome.faqsTitle")} faqs={faqs} />

      <CTASection
        title={t("atHome.ctaTitle")}
        text={t("atHome.ctaText")}
        treatment={treatment}
        primaryLabel={t("atHome.bookVisit")}
      />
    </div>
  );
}
