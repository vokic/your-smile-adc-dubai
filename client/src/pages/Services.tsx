import { Link } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";
import {
  ToothChipped, ToothVeneer, ToothImplant, ToothCrown, FaceSmile, Home as HomeIcon, ToothExtraction, ToothFilling,
  ToothBraces, ToothClean, ToothProtection, ToothXray, Airplane, Gallery,
} from "@/components/DentalIcons";
import type { DentalIcon } from "@/components/DentalIcons";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { GoogleRatingBanner } from "@/components/GoogleRatingBanner";
import { jsonLdBreadcrumb } from "@/lib/seo";
import { subServicesFor, subServicePath, CATEGORIES } from "@/content/services";
import type { CategorySlug } from "@/content/services";
import { localizeCategory, localizeSubService } from "@/content/services";
import { useLanguage } from "@/hooks/useLanguage";
import { IMPLANT_BRAND } from "@/lib/constants";

interface Card {
  name: string;
  desc: string;
}

/**
 * Simple, obvious structure per the owner: "people here don't think — it
 * has to be simple and obvious". Complex-case treatments first, then the
 * rest, each category showing its sub-pages as plain links.
 */
const CATEGORY_ICONS: Record<CategorySlug, DentalIcon> = {
  "dental-surgery": ToothExtraction,
  "crowns-bridges": ToothCrown,
  restorative: ToothFilling,
  orthodontics: ToothBraces,
  whitening: ToothClean,
  "general-preventive": ToothProtection,
};

const CATEGORY_ORDER: CategorySlug[] = ["dental-surgery", "orthodontics", "whitening", "crowns-bridges", "restorative", "general-preventive"];

// Icons and routes stay in code; names and blurbs come from the locale
// lists `services.featured` / `services.other`, in these orders.
const FEATURED_META: { href: string; icon: DentalIcon }[] = [
  { href: "/emergency", icon: ToothChipped },
  { href: "/veneers", icon: ToothVeneer },
  { href: "/implants", icon: ToothImplant },
  { href: "/crowns-bridges", icon: ToothCrown },
  { href: "/cosmetic", icon: FaceSmile },
  { href: "/at-home", icon: HomeIcon },
];

const OTHER_META: { href: string; icon: DentalIcon }[] = [
  { href: "/xray-opg", icon: ToothXray },
  { href: "/dental-tourism", icon: Airplane },
  { href: "/gallery", icon: Gallery },
];

export default function Services() {
  const { t, tList, tItems, tOr, tListOr } = useLanguage();
  const overlay = { tOr, tListOr };
  const featured = tItems<Card>("services.featured");
  const other = tItems<Card>("services.other");
  const crumbs = [
    { name: t("common.home"), path: "/" },
    { name: t("services.crumb"), path: "/services" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("services.seoTitle")}
        description={t("services.seoDescription")}
        path="/services"
        jsonLd={[jsonLdBreadcrumb(crumbs)]}
      />
      <ServiceHero
        title={t("services.heroTitle")}
        subtitle={t("services.heroSubtitle")}
        breadcrumbs={crumbs}
        backgroundImage={IMG.clinicSmile}
      />

      {/* Featured / complex cases */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{t("services.featuredTitle")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("services.featuredSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(({ name, desc }, idx) => {
              const { href, icon: Icon } = FEATURED_META[idx];
              return (
              <Link key={href} href={href} className="group p-7 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-primary/10 p-3 text-primary"><Icon className="h-6 w-6" /></span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories with sub-pages */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("services.allTitle")}</h2>
            <p className="text-muted-foreground text-lg">{t("services.allSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORY_ORDER.map((slug) => {
              const cat = localizeCategory(CATEGORIES[slug], overlay);
              const Icon = CATEGORY_ICONS[slug];
              const subs = subServicesFor(slug).map((s) => localizeSubService(s, overlay));
              return (
                <div key={slug} className="bg-card rounded-2xl border border-border p-7 flex flex-col">
                  <Link href={cat.path} className="group flex items-center gap-3 mb-4">
                    <span className="rounded-full bg-primary/10 p-2.5 text-primary"><Icon className="h-5 w-5" /></span>
                    <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors flex-1">{cat.name}</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </Link>
                  <ul className="space-y-1.5 flex-1">
                    {subs.map((s) => (
                      <li key={s.slug}>
                        <Link href={subServicePath(s)} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                          <span className="text-primary">›</span> {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {other.map(({ name, desc }, idx) => {
              const { href, icon: Icon } = OTHER_META[idx];
              return (
              <Link key={href} href={href} className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-sm transition-all flex items-start gap-4">
                <span className="rounded-full bg-primary/10 p-2.5 text-primary shrink-0"><Icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-bold text-secondary group-hover:text-primary transition-colors">{name}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">{t("services.whyTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tList("services.why", { brand: IMPLANT_BRAND }).map((b) => (
              <div key={b} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                <ShieldCheck className="h-7 w-7 text-primary-light shrink-0" />
                <p className="font-medium leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleRatingBanner />

      <CTASection title={t("services.ctaTitle")} text={t("services.ctaText")} bgColor="bg-primary/5" />
    </div>
  );
}
