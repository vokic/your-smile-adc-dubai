import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Sparkles, Stethoscope, Home as HomeIcon, Plane, Scan, HeartPulse, Layers, Crown, Smile, Sun, Scissors, AlertCircle, Anchor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { GoogleRatingBanner } from "@/components/GoogleRatingBanner";
import { jsonLdBreadcrumb } from "@/lib/seo";
import { subServicesFor, subServicePath, CATEGORIES } from "@/content/services";
import type { CategorySlug } from "@/content/services";

interface Card {
  name: string;
  desc: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Simple, obvious structure per the owner: "people here don't think — it
 * has to be simple and obvious". Complex-case treatments first, then the
 * rest, each category showing its sub-pages as plain links.
 */
const FEATURED: Card[] = [
  { name: "Emergency Dentist", desc: "Same-day relief for toothache, broken teeth, swelling and trauma.", href: "/emergency", icon: AlertCircle },
  { name: "Hollywood Smile & Veneers", desc: "No-prep ceramic veneers and complete smile makeovers.", href: "/veneers", icon: Sparkles },
  { name: "Dental Implants", desc: "Single teeth to full-mouth All-on-4 / All-on-6 with lifetime implant warranty.", href: "/implants", icon: Anchor },
  { name: "Crowns & Bridges", desc: "Zirconia, porcelain and same-day crowns; implant-supported bridges.", href: "/crowns-bridges", icon: Crown },
  { name: "Cosmetic Dentistry", desc: "Complete smile transformations combining several treatments.", href: "/cosmetic", icon: Smile },
  { name: "Private At-Home Visit", desc: "Check-ups, cleanings, fillings and urgent care at your home.", href: "/at-home", icon: HomeIcon },
];

const CATEGORY_ICONS: Record<CategorySlug, LucideIcon> = {
  "dental-surgery": Scissors,
  "crowns-bridges": Crown,
  restorative: Layers,
  orthodontics: Smile,
  whitening: Sun,
  "general-preventive": HeartPulse,
};

const CATEGORY_ORDER: CategorySlug[] = ["dental-surgery", "orthodontics", "whitening", "crowns-bridges", "restorative", "general-preventive"];

const OTHER: Card[] = [
  { name: "Digital X-Ray, OPG & CBCT", desc: "Low-radiation 2D and 3D imaging in-clinic.", href: "/xray-opg", icon: Scan },
  { name: "Dental Tourism", desc: "Treatment-only or all-inclusive packages for international patients.", href: "/dental-tourism", icon: Plane },
  { name: "Smile Gallery", desc: "Before and after results.", href: "/gallery", icon: Stethoscope },
];

export default function Services() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Dental Services in Dubai - Implants, Veneers, Emergency & More"
        description="All treatments at Your Smile Advanced Dental Center Dubai JLT: emergency care, implants, veneers, crowns, orthodontics, whitening, oral surgery, restorative, preventive and at-home visits."
        path="/services"
        jsonLd={[jsonLdBreadcrumb(crumbs)]}
      />
      <ServiceHero
        title="Dental Services in Dubai"
        subtitle="Specialists in complex cases — and everything else your family needs, under one roof in Jumeirah Lake Towers."
        breadcrumbs={crumbs}
      />

      {/* Featured / complex cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">What We Do Best</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The cases other clinics turn away are where we start.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED.map(({ name, desc, href, icon: Icon }) => (
              <Link key={href} href={href} className="group p-7 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-primary/10 p-3 text-primary"><Icon className="h-6 w-6" /></span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{name}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories with sub-pages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">All Treatments</h2>
            <p className="text-muted-foreground text-lg">Every treatment has its own page with what to expect, step by step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORY_ORDER.map((slug) => {
              const cat = CATEGORIES[slug];
              const Icon = CATEGORY_ICONS[slug];
              const subs = subServicesFor(slug);
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
            {OTHER.map(({ name, desc, href, icon: Icon }) => (
              <Link key={href} href={href} className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-md transition-all flex items-start gap-4">
                <span className="rounded-full bg-primary/10 p-2.5 text-primary shrink-0"><Icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-bold text-secondary group-hover:text-primary transition-colors">{name}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Why Patients Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Specialists in complex and full-mouth cases",
              "Digital planning: intraoral scans, CAD/CAM, 3D implant planning",
              "Gentle, pain-free procedures with sedation options",
              "Multilingual, family-friendly international team",
              "Lifetime warranty on JD Evolution Plus implants",
              "Comprehensive care under one roof in JLT",
            ].map((b) => (
              <div key={b} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                <ShieldCheck className="h-7 w-7 text-primary shrink-0" />
                <p className="font-medium leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleRatingBanner />

      <CTASection title="Book Your Dental Appointment in Dubai" text="From a check-up to a full smile makeover, tell us what you need and we'll guide you to the right treatment." bgColor="bg-primary/5" />
    </div>
  );
}
