import { Link, useLocation } from "wouter";
import { ArrowRight, CheckCircle2, Stethoscope } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import {
  ALL_SUB_SERVICES,
  CATEGORIES,
  findSubService,
  subServicePath,
  subServicesFor,
} from "@/content/services";
import NotFound from "@/pages/not-found";
import { CATEGORY_HERO, CATEGORY_VISUAL } from "@/lib/images";

/**
 * Renders any sub-service landing page from its data object. The route is
 * registered in routes.json; the data lives in content/services/<cat>.ts.
 */
export default function SubServicePage() {
  const [location] = useLocation();
  const service = findSubService(location);
  if (!service) return <NotFound />;

  const category = CATEGORIES[service.category];
  const path = subServicePath(service);
  const siblings = subServicesFor(service.category).filter((s) => s.slug !== service.slug);
  const related = (service.related ?? [])
    .map((p) => ALL_SUB_SERVICES.find((s) => subServicePath(s) === p))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const moreLinks = (related.length ? related : siblings).slice(0, 4);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: category.shortName, path: category.path },
    { name: service.name, path },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        path={path}
        jsonLd={[
          jsonLdService({ name: service.h1, description: service.seoDescription, path }),
          jsonLdFAQPage(service.faqs),
          jsonLdBreadcrumb(crumbs),
        ]}
      />

      <ServiceHero
        title={service.h1}
        subtitle={service.heroSubtitle}
        breadcrumbs={crumbs}
        treatment={service.name}
        backgroundImage={CATEGORY_HERO[service.category]}
      />

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={CATEGORY_VISUAL[service.category]} icon={Stethoscope} className="h-[320px] lg:h-[380px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{service.intro.heading}</h2>
              {service.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
              {service.name}: What It Treats
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.highlights.map((h) => (
              <div key={h.title} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-secondary">{h.title}</h3>
                </div>
                <p className="text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcedureSteps
        title={`Your ${service.name} Journey`}
        subtitle="What to expect, step by step"
        steps={service.steps.map((s, i) => ({ number: i + 1, ...s }))}
      />

      <BenefitsSection title={`Why Choose Us for ${service.name} in Dubai`} benefits={service.benefits} bgColor="bg-muted/30" />

      <PackagesCallout treatment={service.name} bgColor="bg-background" />

      <FAQSection title={`${service.name} FAQs`} faqs={service.faqs} />

      {/* Related */}
      {moreLinks.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary">
                More {category.shortName} Treatments
              </h2>
              <Link href={category.path} className="text-primary font-semibold inline-flex items-center gap-1 hover:underline">
                All {category.shortName} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {moreLinks.map((s) => (
                <Link
                  key={s.slug}
                  href={subServicePath(s)}
                  className="group p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{s.heroSubtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={service.cta.title} text={service.cta.text} treatment={service.name} bgColor="bg-background" />
    </div>
  );
}
