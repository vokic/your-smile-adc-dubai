import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, MessageCircle, Clock, ShieldCheck, CreditCard, Sparkles, Stethoscope, Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { GoogleRatingBanner } from "@/components/GoogleRatingBanner";
import { SmileTransformations } from "@/components/SmileTransformations";
import {
  REGULAR_PHONE,
  REGULAR_PHONE_DISPLAY,
  CLINIC_ADDRESS,
  CLINIC_EMAIL,
  CLINIC_MAPS_URL,
  WORKING_HOURS_SUMMARY,
  formatHours,
  whatsappLink,
} from "@/lib/constants";
import { SERVICES, DOCTORS } from "@/lib/content";
import { BLOG_ARTICLES, blogPath, localizeArticle } from "@/content/blog";
import { SEO } from "@/components/SEO";
import { MapEmbed } from "@/components/MapEmbed";
import { jsonLdLocalBusiness, jsonLdWebSite } from "@/lib/seo";
import { track } from "@/lib/analytics";
import { IMG } from "@/lib/images";

const SERVICE_ICONS = [Sparkles, Stethoscope, ShieldCheck, Sparkles, Sparkles, HomeIcon];

export default function Home() {
  const { t, tList, tOr, tListOr, language } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("home.seoTitle")}
        description={t("home.seoDescription")}
        path="/"
        jsonLd={[jsonLdLocalBusiness(), jsonLdWebSite()]}
      />

      {/* 1. Hero */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-secondary">
        <img
          src={IMG.clinicSmile.src}
          srcSet={IMG.clinicSmile.srcSet}
          sizes="100vw"
          alt={IMG.clinicSmile.alt}
          className="absolute inset-0 h-full w-full object-cover object-right"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/25" />

        <div className="container relative mx-auto px-4 flex items-center min-h-[80vh] py-10 md:py-16">
          <div className="max-w-3xl flex flex-col gap-6 md:gap-8">
            {/* The H1 carries the search intent ("dental clinic in JLT,
                Dubai"); the large positioning line below is display copy. */}
            <h1 className="self-start inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-sans font-medium tracking-normal text-white">
              <ShieldCheck className="h-4 w-4 text-primary" /> {t("home.heroBadge")}
            </h1>
            <p className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
              {t("home.heroTitle")} <span className="text-primary italic">{t("home.heroTitleAccent")}</span>
            </p>
            <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
              {t("home.heroSubtitle")}
            </p>
            <ul className="order-last sm:order-none grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-white/90 text-sm md:text-base">
              {tList("clinic.specialties").map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {s}
                </li>
              ))}
            </ul>
            <div className="md:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-10 h-14 md:h-16 font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105 rounded-full">
                <a
                  href={whatsappLink(t("common.whatsappBookMessageGeneric"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "home-hero" })}
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> {t("home.bookAppointment")}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary text-base md:text-lg px-8 h-14 md:h-16 rounded-full">
                <Link href="/emergency">{t("home.emergencyCta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Smile Transformations (before services, per owner) */}
      <SmileTransformations limit={4} />

      {/* 3. Services */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">{t("home.servicesTitle")}</h2>
              <p className="text-white/70 text-lg">{t("home.servicesSubtitle")}</p>
            </div>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-secondary rounded-full" asChild>
              <Link href="/services">{t("home.exploreAllServices")}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <Link
                  key={service.link}
                  href={service.link}
                  className="group rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 p-6 md:p-7 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-primary/15 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-white transition-colors">{t(`homeServices.${service.key}.title`)}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{t(`homeServices.${service.key}.desc`)}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Doctors */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{t("home.doctorsTitle")}</h2>
            <p className="text-muted-foreground text-lg">{t("home.doctorsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
            {DOCTORS.slice(0, 4).map((doc) => (
              <Link key={doc.slug} href="/doctors" className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-primary/10 to-muted">
                  <img src={doc.photo} alt={doc.name} className="h-full w-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4 md:p-5 text-center">
                  <h3 className="text-base md:text-lg font-bold text-secondary mb-1">{doc.name}</h3>
                  <p className="text-primary font-medium text-xs uppercase tracking-wider">{t(`doctors.profiles.${doc.slug}.role`)}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="rounded-full font-bold px-10" asChild>
              <Link href="/doctors">{t("home.meetWholeTeam", { count: DOCTORS.length })}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <TestimonialCarousel />

      {/* 6. Google rating */}
      <GoogleRatingBanner />

      {/* 7. Insurance & Payment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">{t("home.insuranceTitle")}</h2>
          <p className="text-muted-foreground text-lg mb-8">{t("home.insuranceBody")}</p>
          <div className="flex flex-wrap justify-center gap-4 text-secondary">
            <span className="inline-flex items-center gap-2 border px-5 py-2.5 rounded-full font-medium"><ShieldCheck className="h-5 w-5 text-primary" /> {t("home.insuranceAccepted")}</span>
            <span className="inline-flex items-center gap-2 border px-5 py-2.5 rounded-full font-medium"><CreditCard className="h-5 w-5 text-primary" /> {t("home.instalmentPlans")}</span>
          </div>
        </div>
      </section>

      {/* 8. Blog */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16 gap-6">
            <div className="space-y-4 flex-1">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">{t("home.blogTitle")}</h2>
              <p className="text-white/70 text-lg">{t("home.blogSubtitle")}</p>
            </div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold whitespace-nowrap">
              <Link href="/blog">{t("home.viewAllArticles")}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {BLOG_ARTICLES.slice(0, 3).map((source) => {
              const article = localizeArticle(source, { tOr, tListOr });
              return (
                <Link key={source.slug} href={blogPath(source)} className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 rounded-xl p-6 transition-all group cursor-pointer block">
                  <span className="inline-block text-xs font-bold text-primary bg-primary/20 px-3 py-1 rounded-full mb-4">{article.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-white/60 line-clamp-2">{article.excerpt}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Location & Contact */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 rounded-3xl overflow-hidden bg-white shadow-lg border border-border">
            <div className="p-6 md:p-12 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("home.locationTitle")}</h2>
              <p className="text-muted-foreground text-lg">{t("home.locationSubtitle")}</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary">{t("home.address")}</h3>
                    <p className="text-muted-foreground">{CLINIC_ADDRESS}</p>
                    <a href={CLINIC_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline">{t("home.openInMaps")}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary">{t("home.workingHours")}</h3>
                    <ul className="text-muted-foreground">
                      {WORKING_HOURS_SUMMARY.map((h) => (
                        <li key={h.key}>
                          <span className="font-medium text-secondary">{t(`hours.summary.${h.key}`)}:</span>{" "}
                          {"closed" in h ? t("hours.closed") : formatHours(h.hours, language)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary">{t("home.contact")}</h3>
                    <p className="text-muted-foreground"><a href={`tel:${REGULAR_PHONE}`} className="hover:text-primary" onClick={() => track("call_click", { source: "home-location", line: "regular" })}>{REGULAR_PHONE_DISPLAY}</a></p>
                    <p className="text-muted-foreground"><a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-primary">{CLINIC_EMAIL}</a></p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold" asChild>
                <Link href="/contact">{t("home.sendMessage")}</Link>
              </Button>
            </div>

            <div className="h-[300px] md:h-[400px] lg:h-auto lg:min-h-[400px]">
              <MapEmbed title={t("home.mapTitle")} className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
