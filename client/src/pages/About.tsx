import { Link } from "wouter";
import { CheckCircle2, Lightbulb, Heart, Trophy, ArrowRight, Home as HomeIcon, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb } from "@/lib/seo";
import { CLINIC_FOUNDED_YEAR, CLINIC_NAME, FOUNDER } from "@/lib/constants";
import { DOCTORS, FOUNDER_PHOTO } from "@/lib/content";

const VALUES = [
  { title: "Complex Cases Welcome", description: "Full-mouth rehabilitation, Hollywood smiles and cases other clinics turn away." },
  { title: "Emergency Coverage", description: "A dedicated emergency line for severe pain, trauma and infections." },
  { title: "Digital & Safe Diagnostics", description: "Low-radiation X-ray, OPG and 3D CBCT imaging for precise, comfortable planning." },
  { title: "International Expertise", description: "A team with extensive international experience across surgery, orthodontics and aesthetics." },
  { title: "Private At-Home Visits", description: "Among the first clinics in Dubai to bring check-ups, cleanings and urgent care to your home." },
  { title: "Patient-Centred Approach", description: "Clear explanations, no pressure, honest recommendations." },
];

const STEPS = [
  { number: "1", title: "Book Your Visit", description: "WhatsApp, phone or the contact form. Have your insurance details ready if you have them." },
  { number: "2", title: "Visit & Consult", description: "A thorough examination and digital imaging in a calm, comfortable environment." },
  { number: "3", title: "Receive Your Smile Plan", description: "A clear, personalised proposal with a transparent package. No hidden costs." },
  { number: "4", title: "Enjoy Your New Smile", description: "Treatment, aftercare and follow-up from the same team." },
];

export default function About() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="About Your Smile Advanced Dental Center - Dental Clinic in Dubai JLT"
        description="Your Smile Advanced Dental Center in Jumeirah Lake Towers, founded by Dr. Nemanja Kukoljac: an international team specialising in complex full-mouth rehabilitation, implants, veneers and patient-centred care."
        path="/about"
        jsonLd={[jsonLdBreadcrumb(crumbs)]}
      />
      <ServiceHero
        title="About Your Smile Advanced Dental Center"
        subtitle="Experienced, internationally trained dental professionals in Jumeirah Lake Towers, dedicated to your confidence and care."
        breadcrumbs={crumbs}
        primaryButtonText="Book Your Visit"
        backgroundImage={IMG.team}
      />

      {/* Introduction (owner's paste-ready copy) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual src={IMG.reception} icon={Building2} className="h-[350px]" />
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">A Trusted Dental Clinic in Jumeirah Lakes Towers</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {CLINIC_NAME} is a trusted dental clinic in Jumeirah Lakes Towers, specialising in complex full-mouth rehabilitation, dental implants, crowns, veneers, clear aligners, braces and comprehensive dentistry.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide patient-centred care in a welcoming environment, focusing on long-term oral health and natural-looking results. Using advanced technology and gentle techniques, we clearly explain every step with no pressure and just honest recommendations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our goal is to help you feel safe, informed and confident while achieving a healthy, natural smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-[3/4] bg-muted">
                <img src={FOUNDER_PHOTO} alt={`${FOUNDER.name}, founder of ${CLINIC_NAME}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-5">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">Founder</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                {FOUNDER.name}, <span className="text-muted-foreground font-sans text-2xl">{FOUNDER.credentials}</span>
              </h2>
              <p className="text-secondary font-medium">{FOUNDER.title}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {CLINIC_NAME} was established by {FOUNDER.name} in Dubai in {CLINIC_FOUNDED_YEAR}. Through dedication and excellence, the clinic has become recognised as a destination for aesthetic dentistry (Hollywood smile and complete smile restorations), dental implants and oral surgery.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dr. Kukoljac brings {FOUNDER.cosmeticExperienceYears} years of cosmetic dentistry experience and leads a team of doctors with extensive international experience, so every case, however complex, is planned and delivered under one roof.
              </p>
              <Button asChild variant="outline" className="rounded-full gap-2">
                <Link href="/doctors">Meet the whole team <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-16 text-center">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Lightbulb, color: "text-primary", bg: "bg-primary/10", title: "Our Vision", text: "To become a superior and trusted dental provider for all levels of society, raising the quality of dental care in Dubai." },
              { icon: Heart, color: "text-secondary", bg: "bg-secondary/10", title: "Our Mission", text: "Promoting a culture of learning, innovation and continuous improvement, and building a centre of excellence with international-standard care." },
              { icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-100/50", title: "Core Values", text: "Excellence in every treatment. Integrity and transparency. Patient comfort and safety." },
            ].map(({ icon: Icon, color, bg, title, text }) => (
              <div key={title} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-border p-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <h3 className={`text-2xl font-serif font-bold ${color}`}>{title}</h3>
                </div>
                <p className="text-secondary text-lg leading-relaxed font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us unique */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">What Makes Us Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {VALUES.map((v) => (
              <div key={v.title} className="p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-all space-y-3">
                {v.title.includes("At-Home") ? <HomeIcon className="h-6 w-6 text-primary" /> : <CheckCircle2 className="h-6 w-6 text-primary" />}
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Your Smile Expert Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Dentists, hygienists and support staff working together so you get the best care at the most convenient time for you.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {DOCTORS.map((d) => (
              <Link key={d.slug} href="/doctors" className="group text-center space-y-2">
                <div className="aspect-square rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors bg-muted">
                  <img src={d.photo} alt={d.name} className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <p className="text-sm font-semibold text-secondary group-hover:text-primary transition-colors leading-tight">{d.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Your Smile Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.number} className="space-y-4 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">{step.number}</div>
                <h3 className="text-lg font-bold text-secondary">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <CTASection title="Book Your Consultation Today" text="Achieve a healthy, confident smile with a team that takes the time to explain every step." bgColor="bg-primary/5" />
    </div>
  );
}
