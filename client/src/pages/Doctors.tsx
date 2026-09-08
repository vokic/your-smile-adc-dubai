import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { jsonLdBreadcrumb } from "@/lib/seo";
import { DOCTORS } from "@/lib/content";
import { whatsappLink } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";
import { track } from "@/lib/analytics";

const CREDENTIALS = [
  { title: "Specialist Training", desc: "Specialist dentists in implantology, oral & maxillofacial surgery and orthodontics (MDS, PhD)." },
  { title: "International Experience", desc: "Doctors who have practised across Europe, Asia and the Middle East." },
  { title: "Continuous Education", desc: "Ongoing training in digital dentistry, implant systems and aesthetic techniques." },
  { title: "Digital Dentistry", desc: "Intraoral scanning, CAD/CAM design and 3D implant planning as daily practice." },
  { title: "Multilingual Care", desc: "English, Arabic, Russian, Serbian and Italian spoken in the clinic." },
  { title: "Complex Cases", desc: "Full-mouth rehabilitation and emergency care are where the team does its best work." },
];

function jsonLdDoctors() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: DOCTORS.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: d.name,
        jobTitle: d.title,
        honorificSuffix: d.credentials,
        image: `${SITE_URL}${d.photo}`,
        worksFor: { "@id": `${SITE_URL}/#clinic` },
      },
    })),
  };
}

export default function Doctors() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Our Doctors", path: "/doctors" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Meet Our Dentists in Dubai - International Specialist Team"
        description="Meet the dentists of Your Smile Advanced Dental Center Dubai JLT: implantologists, an oral & maxillofacial surgeon, an orthodontist and cosmetic dentists with extensive international experience."
        path="/doctors"
        jsonLd={[jsonLdBreadcrumb(crumbs), jsonLdDoctors()]}
      />
      <ServiceHero
        title="Meet Our Dentists in Dubai"
        subtitle="Experienced, caring and internationally trained dental specialists for your smile."
        breadcrumbs={crumbs}
        primaryButtonText="Book Consultation on WhatsApp"
        backgroundImage={IMG.team}
      />

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Your Smile Team — Expertise You Can Trust</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team comprises highly qualified dental specialists with extensive international experience, dedicated to personalised, gentle and advanced care in a comfortable environment.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {["International experts", "Gentle care", "Digital dentistry", "Multilingual team"].map((i) => (
                <span key={i} className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm font-medium text-secondary">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">Our Dental Experts in Dubai</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {DOCTORS.map((doctor) => (
              <article
                key={doctor.slug}
                id={doctor.slug}
                className="flex flex-col md:flex-row bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border"
              >
                <div className="w-full md:w-1/3 md:min-h-[360px] bg-gradient-to-b from-primary/10 to-muted shrink-0">
                  <img src={doctor.photo} alt={`${doctor.name} — ${doctor.role}`} className="h-72 md:h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center space-y-4">
                  <div>
                    {doctor.isFounder && <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Founder</p>}
                    <h3 className="text-2xl font-serif font-bold text-secondary">
                      {doctor.name}
                      {doctor.credentials && <span className="text-muted-foreground font-sans text-base ml-2">{doctor.credentials}</span>}
                    </h3>
                  </div>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">{doctor.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
                  <div className="pt-2">
                    <Button asChild variant="link" className="p-0 h-auto text-secondary font-bold hover:text-primary">
                      <a
                        href={whatsappLink(`Hello, I'd like to book an appointment with ${doctor.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track("whatsapp_click", { source: "doctor-card", doctor: doctor.slug })}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" /> Book with {doctor.name.replace(/^Dr\.\s*/, "Dr. ").split(" ").slice(0, 2).join(" ")}
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Why Patients Choose Our Dentists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CREDENTIALS.map((c) => (
              <div key={c.title} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all space-y-3">
                <ShieldCheck className="h-7 w-7 text-primary" />
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Book a Consultation with Our Expert Dentists" text="Choose the right specialist for your smile goals — cosmetic, restorative, surgical or orthodontic." bgColor="bg-primary/5" />
    </div>
  );
}
