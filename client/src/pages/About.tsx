import { Link } from "wouter";
import { CheckCircle2, Lightbulb, Heart, Trophy, ArrowRight, Home as HomeIcon, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb } from "@/lib/seo";
import { CLINIC_FOUNDED_YEAR, CLINIC_NAME, FOUNDER } from "@/lib/constants";
import { DOCTORS, FOUNDER_PHOTO } from "@/lib/content";
import { useLanguage } from "@/hooks/useLanguage";

// Copy for these three blocks lives in the locale file; only the icons and
// the accent styling stay in code. `atHomeIndex` marks the one card that
// gets the house icon — matching on the English title would break once the
// title is translated.
const VALUE_AT_HOME_INDEX = 4;

const PILLAR_STYLES = [
  { icon: Lightbulb, color: "text-primary", bg: "bg-primary/10" },
  { icon: Heart, color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-100/50" },
];

interface ValueCard {
  title: string;
  description: string;
}

interface PillarCopy {
  title: string;
  text: string;
}

interface StepCard {
  title: string;
  description: string;
}

export default function About() {
  const { t, tList, tItems } = useLanguage();
  const clinicVars = {
    clinic: CLINIC_NAME,
    name: FOUNDER.name,
    year: CLINIC_FOUNDED_YEAR,
    years: FOUNDER.cosmeticExperienceYears,
  };
  const values = tItems<ValueCard>("about.values");
  const pillars = tItems<PillarCopy>("about.pillars");
  const steps = tItems<StepCard>("about.steps");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("about.crumb"), path: "/about" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("about.seoTitle")}
        description={t("about.seoDescription")}
        path="/about"
        jsonLd={[jsonLdBreadcrumb(crumbs)]}
      />
      <ServiceHero
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
        breadcrumbs={crumbs}
        primaryButtonText={t("about.heroCta")}
        backgroundImage={IMG.team}
      />

      {/* Introduction (owner's paste-ready copy) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.reception} icon={Building2} className="h-[350px]" />
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("about.introTitle")}</h2>
              {tList("about.introParagraphs", clinicVars).map((para) => (
                <p key={para} className="text-muted-foreground text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-[3/4] bg-muted">
                <img src={FOUNDER_PHOTO} alt={t("about.founderPhotoAlt", clinicVars)} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-5">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">{t("about.founderLabel")}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                {FOUNDER.name}, <span className="text-muted-foreground font-sans text-2xl">{FOUNDER.credentials}</span>
              </h2>
              <p className="text-secondary font-medium">{t("doctors.profiles.nemanja-kukoljac.title")}</p>
              {tList("about.founderParagraphs", clinicVars).map((para) => (
                <p key={para} className="text-muted-foreground text-lg leading-relaxed">
                  {para}
                </p>
              ))}
              <Button asChild variant="outline" className="rounded-full gap-2">
                <Link href="/doctors">{t("about.meetTeam")} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-16 text-center">{t("about.visionMissionTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars
              .map((copy, idx) => ({ ...copy, ...PILLAR_STYLES[idx] }))
              .map(({ icon: Icon, color, bg, title, text }) => (
              <div key={title} className="bg-white rounded-3xl shadow-lg hover:shadow-lg transition-all duration-300 border-2 border-border p-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h3 className={`text-2xl font-serif font-bold ${color}`}>{title}</h3>
                </div>
                <p className="text-secondary text-lg leading-relaxed font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us unique */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">{t("about.uniqueTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, idx) => (
              <div key={v.title} className="p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-all space-y-3">
                {idx === VALUE_AT_HOME_INDEX ? <HomeIcon className="h-6 w-6 text-primary" /> : <CheckCircle2 className="h-6 w-6 text-primary" />}
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("about.teamTitle")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("about.teamSubtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {DOCTORS.map((d) => (
              <Link key={d.slug} href="/doctors" className="group text-center space-y-2">
                <div className="aspect-square rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors bg-muted">
                  <img src={d.photo} alt={d.name} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <p className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors leading-tight">{d.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">{t("about.journeyTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={step.title} className="space-y-4 p-6 bg-card rounded-xl border border-border hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">{idx + 1}</div>
                <h3 className="text-lg font-bold text-secondary">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <CTASection title={t("about.ctaTitle")} text={t("about.ctaText")} bgColor="bg-primary/5" />
    </div>
  );
}
