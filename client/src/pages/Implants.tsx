import { Link } from "wouter";
import { CheckCircle2, ShieldCheck, Anchor } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { SmileTransformations } from "@/components/SmileTransformations";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { IMPLANT_BRAND, IMPLANT_WARRANTY } from "@/lib/constants";

const IMPLANT_SERVICES = [
  { title: "Single-Tooth Implants", desc: "Replace one missing tooth with an implant and a natural-looking crown.", href: undefined },
  { title: "All-on-4", desc: "A full arch of fixed teeth supported by four strategically placed implants — often without bone grafting.", href: undefined },
  { title: "All-on-6", desc: "Six implants per arch for maximum stability and load distribution in full-mouth rehabilitation.", href: undefined },
  { title: "Implant-Supported Bridges", desc: "Replace several neighbouring teeth on two or more implants without touching healthy teeth.", href: "/crowns-bridges/implant-supported-bridges" },
  { title: "Implant-Supported Dentures", desc: "Secure, comfortable dentures anchored by implants — no slipping, no adhesive." },
  { title: "Bone Grafting & Sinus Lift", desc: "Rebuild lost bone so implants can be placed safely and last.", href: "/dental-surgery/bone-grafting" },
  { title: "3D Implant Planning", desc: "CBCT imaging maps the exact structure and dimensions of your bone before surgery." },
  { title: "Titanium or Ceramic", desc: "Biocompatible titanium as standard; metal-free ceramic implants available for selected cases on request." },
];

const FAQS = [
  { question: "How long do dental implants last?", answer: `With proper care, dental implants can last a lifetime. The implant post integrates permanently with your jawbone. The crown may need replacement after 10–15 years, but the implant foundation lasts for decades — and our ${IMPLANT_BRAND} implants come with a lifetime warranty.` },
  { question: "Are dental implants painful?", answer: "The procedure is performed under local anaesthesia, so you feel no pain during surgery. Mild discomfort or swelling can occur afterwards but usually settles within a few days." },
  { question: "What is the recovery time for dental implants?", answer: "Initial healing usually takes 1–2 weeks. Full integration (osseointegration) can take 2–6 months. During this period, temporary crowns or dentures may be used." },
  { question: "Do I need bone grafting before getting implants?", answer: "If your jawbone has thinned after tooth loss, bone grafting may be required. A 3D CBCT scan tells us the exact structure and dimensions of your bone, so you know before we start." },
  { question: "What does the lifetime warranty cover?", answer: `${IMPLANT_WARRANTY} Ask us for the written warranty terms at your consultation.` },
  { question: "Are dental implants better than dentures or bridges?", answer: "Implants are permanent, stable and preserve bone health. Unlike dentures they don't slip, and unlike traditional bridges they don't require grinding down healthy neighbouring teeth." },
  { question: "Am I a good candidate for dental implants?", answer: "Most adults with missing teeth are. Ideal candidates have healthy gums and enough bone; where bone is lacking, grafting or All-on-4 techniques usually make implants possible anyway." },
  { question: "Do you offer ceramic (metal-free) implants?", answer: "Yes, ceramic implants are available for selected cases, for example patients with metal sensitivities or very thin gums in the smile zone. Titanium remains the standard for most patients. We will recommend the right option after your scan." },
  { question: "How do I take care of dental implants?", answer: "Like natural teeth: brush twice daily, floss or use interdental brushes, and keep regular check-ups. Avoid smoking, which slows healing." },
  { question: "Can implants replace all my teeth?", answer: "Yes. All-on-4 or All-on-6 restores an entire arch on just four or six implants, giving you fixed teeth that look and function naturally." },
];

export default function Implants() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Dental Implants", path: "/implants" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Dental Implants in Dubai - All-on-4, All-on-6, Lifetime Warranty"
        description={`Dental implants in Dubai JLT: single teeth to full-mouth All-on-4 and All-on-6, titanium or ceramic, 3D-planned surgery and a lifetime warranty on ${IMPLANT_BRAND} implants.`}
        path="/implants"
        jsonLd={[
          jsonLdService({ name: "Dental Implants in Dubai", description: "Single, multiple and full-arch dental implants with 3D planning.", path: "/implants" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="Dental Implants in Dubai"
        subtitle="Permanent, natural-looking tooth replacement — from a single tooth to full-mouth All-on-4 and All-on-6 rehabilitation."
        breadcrumbs={crumbs}
        treatment="dental implants"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual icon={Anchor} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">A Permanent Solution for Missing Teeth</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dental implants replace missing teeth with artificial roots made from biocompatible titanium or ceramic. They look, feel and function just like natural teeth, and they protect your jawbone from shrinking.
              </p>
              <div className="space-y-3">
                {["Biocompatible titanium or metal-free ceramic", "Permanent integration with your bone", "Natural appearance and full chewing function", "Planned in 3D before surgery", "Lifetime warranty on the implant"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Our Implant Solutions in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPLANT_SERVICES.map((s) => {
              const inner = (
                <>
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </>
              );
              return s.href ? (
                <Link key={s.title} href={s.href} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all space-y-3">
                  {inner}
                </Link>
              ) : (
                <div key={s.title} className="group p-6 bg-card rounded-xl border border-border space-y-3">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProcedureSteps
        title="Your Dental Implant Journey"
        subtitle="From consultation to your new smile — typically 3–6 months"
        steps={[
          { number: 1, title: "3D Consultation & Planning", description: "A CBCT scan shows the exact structure and dimensions of your bone so we can plan the implant position precisely. You see a digital preview of your final result.", duration: "45 min" },
          { number: 2, title: "Implant Surgery", description: "Under local anaesthesia, we place the titanium or ceramic implant into your jawbone. The procedure is painless, and most patients return to normal activities within days.", duration: "30–60 min" },
          { number: 3, title: "Osseointegration (Healing)", description: "Your implant bonds with the bone over 2–6 months. Temporary crowns or dentures are worn during this period to maintain function and aesthetics.", duration: "2–6 months" },
          { number: 4, title: "Permanent Crown Placement", description: "Once integration is complete, we fit your custom-made crown or bridge. Your new teeth are fully functional and look completely natural.", duration: "45–60 min" },
        ]}
      />

      <BenefitsSection
        title="Why Choose Dental Implants With Us?"
        benefits={[
          IMPLANT_WARRANTY,
          "Permanent, stable and durable — no slipping, no adhesive",
          "Natural look and feel; prevents bone loss",
          "Full-mouth All-on-4 / All-on-6 rehabilitation is our speciality",
          "3D-planned surgery by an experienced implantology and oral surgery team",
        ]}
        bgColor="bg-background"
      />

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row items-center gap-6">
          <ShieldCheck className="h-14 w-14 text-primary shrink-0" />
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Lifetime Implant Warranty</h2>
            <p className="text-white/80 text-lg">{IMPLANT_WARRANTY} You receive the warranty terms in writing with your treatment plan.</p>
          </div>
        </div>
      </section>

      <PackagesCallout treatment="dental implant" bgColor="bg-background" />

      <SmileTransformations category="Implants" title="Implant Transformations" subtitle="Real implant cases from our JLT clinic. Individual results vary." bgColor="bg-muted/30" />

      <FAQSection title="Frequently Asked Questions About Dental Implants" faqs={FAQS} />

      <CTASection title="Get Your Teeth Back for Good" text="Book a 3D implant consultation in JLT and receive a clear plan, timeline and package — no pressure, just honest recommendations." treatment="dental implants" />
    </div>
  );
}
