import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { SmileTransformations } from "@/components/SmileTransformations";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { FOUNDER, GOOGLE_REVIEW_RATING, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";

// Every card links to the matching treatment page (owner request).
const SERVICES = [
  { title: "Veneers in Dubai", desc: "No-prep ceramic veneers for a flawless, natural smile", href: "/veneers" },
  { title: "Teeth Whitening in Dubai", desc: "Brighten your teeth safely in one visit", href: "/whitening" },
  { title: "Orthodontics & Clear Aligners", desc: "Straighten discreetly with Invisalign or braces", href: "/orthodontics" },
  { title: "Dental Implants in Dubai", desc: "Replace missing teeth with permanent, natural-looking implants", href: "/implants" },
  { title: "Crowns & Bridges", desc: "Zirconia and porcelain restorations that transform worn or damaged teeth", href: "/crowns-bridges" },
  { title: "Hollywood Smile Makeover", desc: "Combine treatments for a complete smile transformation", href: "/gallery" },
];

const FAQS = [
  { question: "What's the difference between cosmetic and general dentistry?", answer: "General dentistry focuses on health and function; cosmetic dentistry enhances appearance while usually improving function too." },
  { question: "How long do cosmetic dental treatments last?", answer: "With proper care, ceramic veneers and crowns last 10–15 years or more, implants can last a lifetime, and whitening lasts 6–12 months with touch-ups." },
  { question: "Is cosmetic dentistry safe?", answer: "Yes. All treatments use biocompatible materials and minimally invasive techniques — our veneers, for example, require no shaving of your natural teeth." },
  { question: "Who is a good candidate for cosmetic dentistry?", answer: "Anyone unhappy with stains, chips, gaps, misalignment or missing teeth. A consultation with a digital smile design shows what is possible for you." },
  { question: "Can I combine treatments for better results?", answer: "Yes. Most Hollywood smile makeovers combine several treatments, such as whitening then veneers, or implants with crowns, planned together for a harmonious result." },
];

export default function Cosmetic() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Cosmetic Dentistry", path: "/cosmetic" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Cosmetic Dentistry in Dubai - Hollywood Smile Makeovers"
        description="Complete smile transformations in Dubai JLT: no-prep ceramic veneers, whitening, implants, crowns and Hollywood smile design, led by a dentist with 18 years of cosmetic experience."
        path="/cosmetic"
        jsonLd={[
          jsonLdService({ name: "Cosmetic Dentistry in Dubai", description: "Hollywood smile makeovers combining veneers, whitening, implants and crowns.", path: "/cosmetic" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="Cosmetic Dentistry in Dubai"
        subtitle="Transform your smile with ceramic veneers, whitening, orthodontics, implants and complete Hollywood smile makeovers."
        breadcrumbs={crumbs}
        treatment="a smile makeover"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual icon={Sparkles} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Enhancing Smiles, Boosting Confidence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cosmetic dentistry improves the appearance of your teeth and smile. From correcting single imperfections to designing a full Hollywood smile, we combine digital planning and artistry for natural, long-lasting results.
              </p>
              <div className="space-y-3">
                {["Digital Smile Design preview", "Minimally invasive, no-prep techniques", "Natural results matched to your face", "One team for every treatment", "Complex cases welcome"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Cosmetic Dental Treatments in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.href + s.title} href={s.href} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-secondary group-hover:text-primary transition-colors">{s.title}</h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection
        title="Benefits of Cosmetic Dentistry"
        benefits={["Correct stained, chipped or misaligned teeth", "Restore function along with aesthetics", "Boost confidence and self-esteem", "Custom treatments tailored to your needs", "Long-lasting, natural-looking results"]}
        bgColor="bg-background"
      />

      {/* Hollywood smile highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Hollywood Smile Makeover in Dubai</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our signature Hollywood smile makeovers combine no-prep ceramic veneers, whitening, orthodontics and implants into one plan. With digital smile design you preview your new smile before treatment begins.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <a
                  href={whatsappLink("Hello, I'd like to book a Hollywood smile makeover consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "cosmetic-makeover" })}
                >
                  Book Your Smile Makeover Consultation
                </a>
              </Button>
            </div>
            <Visual icon={Sparkles} className="h-[400px]" />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Dubai's Trusted Cosmetic Dentists</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Cosmetic treatment is led by our founder {FOUNDER.name}, with {FOUNDER.cosmeticExperienceYears} years of cosmetic dentistry experience, supported by an international team and digital technology. Our {GOOGLE_REVIEW_RATING.toFixed(1)} Google rating reflects our commitment to patient satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[`${FOUNDER.cosmeticExperienceYears} years of cosmetic dentistry (${FOUNDER.name})`, "Internationally trained specialists", "Digital smile design", `${GOOGLE_REVIEW_RATING.toFixed(1)} Google rating`, "Patient-focused care"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PackagesCallout treatment="smile makeover" bgColor="bg-background" />
      <SmileTransformations category="Smile Makeover" title="Smile Makeover Transformations" subtitle="Real complete smile makeovers from our JLT clinic. Individual results vary." bgColor="bg-muted/30" />
      <FAQSection faqs={FAQS} />
      <CTASection title="Book Your Cosmetic Dentistry Consultation in Dubai" text="Ready for your dream smile? Schedule a consultation and see your new smile designed digitally." treatment="a smile makeover" />
    </div>
  );
}
