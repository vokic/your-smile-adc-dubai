import { Link } from "wouter";
import { CheckCircle2, Sparkles, Ban, Syringe, Clock, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { SmileTransformations } from "@/components/SmileTransformations";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { FOUNDER, GOOGLE_REVIEW_RATING } from "@/lib/constants";

const FAQS = [
  { question: "How long do ceramic veneers last?", answer: "Ceramic veneers typically last 10–15 years and often longer. Their longevity depends on daily care, regular dental check-ups, and avoiding habits like teeth grinding or biting hard objects." },
  { question: "Do veneers look natural?", answer: "Yes. Each veneer is custom-made to match the colour, shape and size of your teeth. Ceramic mimics the translucency of natural enamel, making the veneers indistinguishable from real teeth." },
  { question: "Are veneers painful?", answer: "The procedure is virtually pain-free." },
  { question: "Do veneers damage natural teeth?", answer: "Not with our approach. We specialise in no-prep veneers: no shaving of enamel, no injections and no temporaries. Your natural teeth stay intact underneath the ceramic." },
  { question: "Can veneers chip or stain?", answer: "Ceramic veneers are stain-resistant and rarely chip when properly cared for. Avoid using your teeth as tools and wear a night guard if you grind." },
  { question: "Who is a good candidate for veneers?", answer: "Veneers suit patients with discoloured, chipped, slightly misaligned or gapped teeth. Severe decay or gum disease must be treated first; we will tell you honestly at the consultation." },
  { question: "How many veneers do I need?", answer: "It depends on your smile line. Some patients need only 2–4 veneers to cover imperfections, while a full Hollywood smile usually involves 8–10 per arch." },
  { question: "How long does the whole process take?", answer: "Two visits, 3–10 days apart depending on urgency. Visit one is 45–60 minutes (consultation, design and digital scan); visit two is 90–120 minutes for placement." },
  { question: "How do I take care of my veneers?", answer: "Exactly like natural teeth: brush twice daily, floss and keep up regular check-ups. Limit strongly staining foods and drinks to keep the surrounding teeth matching." },
];

export default function Veneers() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Veneers", path: "/veneers" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="No-Prep Ceramic Veneers in Dubai - Hollywood Smile in 2 Visits"
        description="Specialist no-prep ceramic veneers in Dubai JLT: no shaving, no injections, no temporaries. Hollywood smile in two visits, 3–10 days. Rated 5.0 on Google."
        path="/veneers"
        jsonLd={[
          jsonLdService({ name: "Ceramic Veneers in Dubai", description: "No-prep ceramic veneers and Hollywood smile design.", path: "/veneers" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="Veneers in Dubai - Your Dream Smile Starts Here"
        subtitle="Achieve a flawless, natural-looking smile with premium ceramic veneers, tailored just for you. No prep, no shaving, no pain."
        breadcrumbs={crumbs}
        treatment="ceramic veneers"
        backgroundImage={IMG.clinicSmile}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.treatmentPlan} icon={Smile} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Tired of hiding your smile?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Stains, chips or gaps can hold you back. With ceramic veneers we transform your smile and your confidence in just two visits, and because we work exclusively with no-prep techniques, your natural teeth stay untouched underneath.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Veneers are led by our founder {FOUNDER.name}, who brings {FOUNDER.cosmeticExperienceYears} years of cosmetic dentistry experience to every Hollywood smile we design.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <Link href="/gallery">See smile transformations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* No-prep highlight */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">We Specialise in No-Prep Veneers</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Traditional veneers require grinding down healthy enamel. We don't. A 15–20 minute digital scan is all it takes to design your new smile, and your own teeth remain intact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Ban, label: "No prep" },
              { icon: Ban, label: "No shaving" },
              { icon: Sparkles, label: "No pain" },
              { icon: Syringe, label: "No injection" },
              { icon: Clock, label: "No temporaries" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="p-5 bg-white/10 rounded-xl border border-white/15 text-center space-y-2">
                <Icon className="h-7 w-7 text-primary mx-auto" />
                <p className="font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcedureSteps
        title="Your Veneers Journey"
        subtitle="Two visits. 3–10 days in total, depending on urgency."
        steps={[
          { number: 1, title: "Consultation, Smile Design & Digital Scan", description: "We analyse your smile, agree on shape and shade, and take a 15–20 minute digital scan — no impressions, no drilling. You see a preview of your new smile before anything is made.", duration: "45–60 min" },
          { number: 2, title: "Placement", description: "Your custom ceramic veneers are bonded to your untouched teeth, polished and checked for bite and comfort. You walk out with your new smile.", duration: "90–120 min" },
        ]}
      />

      <BenefitsSection
        title="Why Choose Veneers in Dubai With Us?"
        benefits={[
          "Two visits, 3–10 days: smile makeover without weeks of temporaries",
          "Natural & durable: ceramic veneers last 10–15 years with good care",
          "Digital Smile Design: preview your result before treatment starts",
          `Trusted expertise: ${FOUNDER.cosmeticExperienceYears} years of cosmetic dentistry experience (${FOUNDER.name})`,
          `Top-rated clinic: ${GOOGLE_REVIEW_RATING.toFixed(1)} Google rating from Dubai patients`,
        ]}
        bgColor="bg-muted/30"
      />

      <PackagesCallout treatment="veneers" bgColor="bg-background" />

      <SmileTransformations category="Veneers" title="Veneer Transformations" subtitle="Real ceramic veneer cases from our JLT clinic. Individual results vary." bgColor="bg-muted/30" />

      <FAQSection title="Frequently Asked Questions About Veneers" faqs={FAQS} />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="text-muted-foreground">Related:</span>
            {[
              { name: "Cosmetic Dentistry & Hollywood Smile", path: "/cosmetic" },
              { name: "Teeth Whitening", path: "/whitening" },
              { name: "Crowns & Bridges", path: "/crowns-bridges" },
              { name: "Dental Implants", path: "/implants" },
            ].map((l) => (
              <Link key={l.path} href={l.path} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Your Perfect Smile Is Two Visits Away" text="Book a consultation and see your new smile designed digitally before we make a single veneer." treatment="ceramic veneers" />
    </div>
  );
}
