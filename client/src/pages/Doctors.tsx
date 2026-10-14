import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { clinicRef, jsonLdBreadcrumb } from "@/lib/seo";
import { DOCTORS } from "@/lib/content";
import { whatsappLink } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";
import { track } from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";

const CREDENTIAL_KEYS = [
  "specialist",
  "international",
  "education",
  "digital",
  "multilingual",
  "complex",
];

type Translate = (key: string, vars?: Record<string, string | number>) => string;

// jobTitle follows the rendered language: the JSON-LD describes this page,
// and the page is served in the visitor's language.
function jsonLdDoctors(t: Translate) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: DOCTORS.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: d.name,
        jobTitle: t(`doctors.profiles.${d.slug}.title`),
        honorificSuffix: d.credentials,
        image: `${SITE_URL}${d.photo}`,
        worksFor: clinicRef(),
      },
    })),
  };
}

export default function Doctors() {
  const { t, tList } = useLanguage();
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("nav.ourDoctors"), path: "/doctors" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("doctors.seoTitle")}
        description={t("doctors.seoDescription")}
        path="/doctors"
        jsonLd={[jsonLdBreadcrumb(crumbs), jsonLdDoctors(t)]}
      />
      <ServiceHero
        title={t("doctors.heroTitle")}
        subtitle={t("doctors.heroSubtitle")}
        breadcrumbs={crumbs}
        primaryButtonText={t("doctors.heroCta")}
        backgroundImage={IMG.team}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("doctors.introTitle")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("doctors.introBody")}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {tList("doctors.introChips").map((i) => (
                <span key={i} className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm font-medium text-secondary">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">{t("doctors.listTitle")}</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {DOCTORS.map((doctor) => (
              <article
                key={doctor.slug}
                id={doctor.slug}
                className="flex flex-col md:flex-row bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 border border-border"
              >
                <div className="w-full md:w-1/3 md:min-h-[360px] bg-gradient-to-b from-primary/10 to-muted shrink-0">
                  <img src={doctor.photo} alt={t("doctors.photoAlt", { name: doctor.name, role: t(`doctors.profiles.${doctor.slug}.role`) })} className="h-72 md:h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center space-y-4">
                  <div>
                    {doctor.isFounder && <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{t("doctors.founderLabel")}</p>}
                    <h3 className="text-2xl font-serif font-bold text-secondary">
                      {doctor.name}
                      {doctor.credentials && <span className="text-muted-foreground font-sans text-base ml-2">{doctor.credentials}</span>}
                    </h3>
                  </div>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">{t(`doctors.profiles.${doctor.slug}.title`)}</p>
                  <p className="text-muted-foreground leading-relaxed">{t(`doctors.profiles.${doctor.slug}.bio`)}</p>
                  <div className="pt-2">
                    <Button asChild variant="link" className="p-0 h-auto text-secondary font-bold hover:text-primary">
                      <a
                        href={whatsappLink(t("doctors.bookWhatsappMessage", { name: doctor.name }))}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track("whatsapp_click", { source: "doctor-card", doctor: doctor.slug })}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />{" "}
                        {t("doctors.bookWith", { name: doctor.name.split(" ").slice(0, 2).join(" ") })}
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">{t("doctors.credentialsTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CREDENTIAL_KEYS.map((c) => (
              <div key={c} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all space-y-3">
                <ShieldCheck className="h-7 w-7 text-primary" />
                <h3 className="text-lg font-bold">{t(`doctors.credentials.${c}.title`)}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{t(`doctors.credentials.${c}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t("doctors.ctaTitle")} text={t("doctors.ctaText")} bgColor="bg-primary/5" />
    </div>
  );
}
