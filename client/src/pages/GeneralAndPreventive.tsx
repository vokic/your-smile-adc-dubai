import { Link } from "wouter";
import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { subServicesFor, subServicePath } from "@/content/services";

const FAQS = [
  { question: "How often should I visit the dentist for a check-up?", answer: "Every six months for a routine exam and cleaning. Regular visits catch cavities and gum disease early. Patients with gum problems may need more frequent visits." },
  { question: "Are professional cleanings painful?", answer: "No. You may feel mild sensitivity if your gums are inflamed, but gentle techniques and modern ultrasonic tools keep you comfortable." },
  { question: "What are the signs of gum disease?", answer: "Bleeding gums, persistent bad breath, swollen or tender gums and receding gum lines. Untreated, it can lead to tooth loss, so early treatment matters." },
  { question: "Do root canals hurt?", answer: "With modern anaesthesia and technique, a root canal feels much like a filling — and it relieves the pain caused by the infection." },
  { question: "Can children benefit from sealants?", answer: "Yes. Sealants are thin protective coatings on the chewing surfaces of children's molars that block bacteria from settling in deep grooves. Quick, painless and protective for years." },
  { question: "Can you come to my home for a check-up?", answer: "Yes. Check-ups, cleanings and fillings are available as private at-home visits across Dubai." },
];

const ALSO = [
  { name: "Root Canal Treatment", desc: "Save infected teeth with painless endodontic care.", href: "/restorative" },
  { name: "Digital X-Ray, OPG & CBCT", desc: "Low-radiation imaging for precise diagnosis.", href: "/xray-opg" },
  { name: "Private At-Home Visit", desc: "Check-ups, cleanings and fillings at your home.", href: "/at-home" },
];

export default function GeneralAndPreventive() {
  const subs = subServicesFor("general-preventive");
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "General & Preventive", path: "/general-preventive" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="General & Preventive Dentistry in Dubai - Family Dental Care"
        description="Family dental care in Dubai JLT: check-ups, professional cleanings, fillings, gum disease treatment, children's dentistry and sealants. Also available as at-home visits."
        path="/general-preventive"
        jsonLd={[
          jsonLdService({ name: "General & Preventive Dentistry in Dubai", description: "Check-ups, cleanings, fillings, gum care, kids dentistry, sealants.", path: "/general-preventive" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="General & Preventive Dentistry in Dubai"
        subtitle="Protect your smile with routine check-ups, cleanings and preventive care for the whole family."
        breadcrumbs={crumbs}
        treatment="a dental check-up"
        primaryButtonText="Book Appointment"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual icon={HeartPulse} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Prevent Problems Before They Start</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Preventive dentistry keeps your mouth healthy and avoids bigger treatments later. With regular visits we detect problems early, saving you time, discomfort and cost.
              </p>
              <div className="space-y-3">
                {["Catch problems early", "Healthier gums, fresher breath", "Fewer major treatments over a lifetime", "Gentle care for children and anxious adults", "Multilingual team"].map((item) => (
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">General & Preventive Dental Services in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{s.heroSubtitle}</p>
              </Link>
            ))}
            {ALSO.map((a) => (
              <Link key={a.href} href={a.href} className="group p-6 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{a.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection
        title="Benefits of Preventive Dental Care"
        benefits={["Early detection of problems", "Save money with fewer major treatments", "Fresher breath and healthier gums", "Maintain a confident smile for life"]}
        bgColor="bg-background"
      />

      <FAQSection title="Frequently Asked Questions About Preventive Dentistry" faqs={FAQS} />
      <CTASection title="Book Your Preventive Check-Up Today" text="Regular check-ups and cleanings are the key to a healthy smile. Book in JLT or ask about a home visit." treatment="a dental check-up" />
    </div>
  );
}
