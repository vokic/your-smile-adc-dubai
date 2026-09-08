import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Scissors } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { PackagesCallout } from "@/components/PackagesCallout";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { subServicesFor, subServicePath } from "@/content/services";

const FAQS = [
  { question: "Is wisdom tooth extraction painful?", answer: "No. Wisdom tooth extractions are done under local anaesthesia, so you won't feel pain during the procedure. Mild swelling or discomfort afterwards usually subsides within a few days with pain relief and a soft diet." },
  { question: "How long does recovery take after oral surgery?", answer: "Simple extractions heal within 2–3 days, wisdom tooth extractions may need up to a week, and bone grafting or sinus lifts take a few weeks for soft-tissue healing. You receive personalised aftercare instructions." },
  { question: "Do I need bone grafting before dental implants?", answer: "If bone was lost after missing teeth, gum disease or trauma, grafting may be needed to support implants. A 3D CBCT scan tells us before we start. Not every patient needs it." },
  { question: "What is gum surgery and when is it needed?", answer: "Gum surgery treats advanced periodontal disease, reshapes gum tissue and restores oral health when gums recede, become infected or cause loose teeth." },
  { question: "Is oral surgery safe?", answer: "Yes. Performed by qualified oral surgeons in a sterile, modern clinic with digital imaging and strict sterilisation protocols, oral surgery is safe and predictable." },
  { question: "How do I prepare for dental surgery?", answer: "We review your medical history and advise on medications, fasting if sedation is used, and oral hygiene. Most patients return to normal activities within a few days." },
  { question: "Do you offer sedation for anxious patients?", answer: "Yes. Sedation options are available for patients who feel anxious, in addition to local anaesthesia." },
  { question: "What aftercare is required?", answer: "Rest, soft foods, gentle hygiene, prescribed medication and cold compresses for swelling. Follow-up visits check healing, and our emergency line is available if anything worries you." },
];

export default function DentalSurgery() {
  const subs = subServicesFor("dental-surgery");
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Dental Surgery", path: "/dental-surgery" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Oral & Dental Surgery in Dubai - Wisdom Teeth, Grafting"
        description="Specialist oral surgery in Dubai JLT: wisdom tooth removal, extractions, bone grafting, sinus lift and apicoectomy by an oral & maxillofacial surgery team."
        path="/dental-surgery"
        jsonLd={[
          jsonLdService({ name: "Oral & Dental Surgery in Dubai", description: "Wisdom teeth, extractions, bone grafting, sinus lift, apicoectomy.", path: "/dental-surgery" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="Expert Dental Surgery in Dubai - Safe, Advanced & Trusted Care"
        subtitle="From wisdom tooth removal to bone grafting and sinus lifts, our oral surgeons deliver precise results with comfort and care."
        breadcrumbs={crumbs}
        treatment="oral surgery"
        primaryButtonText="Book Your Surgical Consultation"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">What Is Dental Surgery?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dental surgery covers specialised procedures that address complex oral conditions: impacted teeth, infections that root canal treatment cannot fix, and missing bone that stands between you and implants. Our goal is to restore function, relieve pain and prepare your mouth for lasting results.
              </p>
              <div className="space-y-3">
                {["Oral & maxillofacial surgery expertise", "3D CBCT imaging in-clinic", "Local anaesthesia and sedation options", "Strict sterilisation protocols", "Emergency line for after-care questions"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Visual icon={Scissors} className="h-[350px]" />
          </div>
        </div>
      </section>

      {/* Each service → its own landing page */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Our Dental Surgery Services in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subs.map((s) => (
              <Link key={s.slug} href={subServicePath(s)} className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{s.name}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">{s.heroSubtitle}</p>
              </Link>
            ))}
            <Link href="/implants" className="group p-8 bg-primary/5 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">Dental Implants</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm">Single tooth to full-arch All-on-4 / All-on-6 with lifetime implant warranty.</p>
            </Link>
          </div>
        </div>
      </section>

      <BenefitsSection
        title="Trusted Oral Surgeons in Dubai"
        benefits={["Oral & maxillofacial surgeon and implantologists on the team", "Pain-free treatment with advanced anaesthesia options", "3D planning for predictable, safe procedures", "Modern surgical facilities in JLT", "Detailed aftercare and follow-up support"]}
        bgColor="bg-background"
      />

      <PackagesCallout treatment="oral surgery" />
      <FAQSection title="Frequently Asked Questions About Dental Surgery" faqs={FAQS} />
      <CTASection title="Book Your Dental Surgery Consultation in Dubai" text="Don't wait for pain to get worse. Schedule a consultation with our oral surgeons in JLT." treatment="oral surgery" bgColor="bg-background" />
    </div>
  );
}
