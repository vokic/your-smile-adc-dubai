import { Link } from "wouter";
import { CheckCircle2, XCircle, Home as HomeIcon, ShieldCheck, Clock, Users, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { REGULAR_PHONE, REGULAR_PHONE_DISPLAY, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";

// What the owner confirmed CAN and CANNOT be done outside the clinic.
const CAN_DO = [
  { title: "Check-ups & consultations", desc: "Full examination, treatment planning and second opinions." },
  { title: "Professional cleaning", desc: "Scaling and polishing with portable ultrasonic equipment." },
  { title: "Fillings", desc: "Tooth-coloured composite fillings for cavities and chipped teeth." },
  { title: "Simple extractions", desc: "Removal of loose, decayed or broken teeth that do not require surgery." },
  { title: "Emergency pain relief", desc: "Toothache, swelling, lost fillings and re-cementing crowns." },
  { title: "Denture care", desc: "Adjustments, relines and repairs for comfortable dentures." },
  { title: "Teeth whitening", desc: "Professional whitening in the comfort of your home." },
  { title: "Follow-up visits", desc: "Post-operative checks and suture removal after clinic treatment." },
];

const CANNOT_DO = [
  "Surgical procedures such as impacted wisdom teeth, bone grafting or sinus lifts",
  "Dental implant placement",
  "Orthodontics (braces and aligner fittings)",
  "Full-arch (circular) bridges",
  "Full-jaw veneer preparation",
];

const FAQS = [
  {
    question: "Who is the at-home service for?",
    answer:
      "Anyone who prefers privacy or convenience, patients with limited mobility, elderly family members, busy executives, new parents, and people who feel anxious in a clinical setting. We also visit hotels and offices across Dubai.",
  },
  {
    question: "Is it as safe and hygienic as the clinic?",
    answer:
      "Yes. We bring sealed, sterilised instrument kits, single-use consumables and portable equipment, and follow the same infection-control protocols we use in the clinic. Anything that requires the clinic's surgical set-up or 3D imaging is scheduled at our JLT centre instead.",
  },
  {
    question: "How much does a home visit cost?",
    answer:
      "The fee depends on your location in Dubai and the treatment needed, so we quote it on request when you book. There are no hidden costs: you will know the price before we arrive.",
  },
  {
    question: "Which areas of Dubai do you cover?",
    answer:
      "We cover Dubai and can often arrange visits to neighbouring emirates by prior agreement. Tell us your location when you message us and we will confirm availability and timing.",
  },
  {
    question: "What if I need treatment that cannot be done at home?",
    answer:
      "We will tell you straight away and book you into our clinic in Jumeirah Lake Towers, where the same doctors continue your care with full surgical and imaging facilities.",
  },
];

export default function AtHome() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Private At-Home Dental Visit", path: "/at-home" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Private At-Home Dentist in Dubai - Home Dental Visits"
        description="Private at-home dental treatment across Dubai: check-ups, cleanings, fillings, simple extractions, emergency pain relief and denture care at your home, office or hotel."
        path="/at-home"
        jsonLd={[
          jsonLdService({
            name: "Private At-Home Dental Treatment in Dubai",
            description: "Mobile dental care delivered at the patient's home, office or hotel in Dubai.",
            path: "/at-home",
            serviceType: "Home dental visit",
          }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />

      <ServiceHero
        title="Private At-Home Dental Treatment in Dubai"
        subtitle="Professional dental care in the comfort and privacy of your home, office or hotel. Among the first clinics in Dubai to offer it."
        breadcrumbs={crumbs}
        treatment="a private at-home dental visit"
        primaryButtonText="Book a Home Visit"
        backgroundImage={IMG.handshake}
      />

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">The clinic comes to you</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Experience professional dental care in the comfort of your home. Our mobile service brings portable equipment, sterilised instruments and the same doctors you would see in our JLT clinic to your door. Every visit starts with a proper examination and a personalised treatment plan.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Perfect for patients seeking privacy, convenience or special-care support: elderly relatives, people with limited mobility, families with young children, busy professionals and visitors staying in Dubai hotels.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { icon: ShieldCheck, label: "Clinic-grade sterilisation" },
                  { icon: Clock, label: "Flexible appointment times" },
                  { icon: Users, label: "Same doctors as in clinic" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-secondary font-medium text-sm">
                    <Icon className="h-5 w-5 text-primary shrink-0" /> {label}
                  </div>
                ))}
              </div>
            </div>
            <Visual src={IMG.reception} icon={HomeIcon} className="h-[340px] lg:h-[420px]" />
          </div>
        </div>
      </section>

      {/* Can do */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">What We Can Do at Your Home</h2>
            <p className="text-muted-foreground text-lg">Most everyday dentistry travels well. These are the treatments we routinely provide on a home visit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAN_DO.map((item) => (
              <div key={item.title} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cannot do — transparency builds trust */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">What Needs the Clinic</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Some treatments need our surgical set-up, 3D imaging or in-house lab. For these we welcome you at our clinic in Jumeirah Lake Towers, where your care continues with the same team.
              </p>
              <Button asChild variant="outline" className="rounded-full gap-2">
                <Link href="/contact">Clinic address & hours <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
            <ul className="lg:col-span-3 space-y-3">
              {CANNOT_DO.map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 bg-muted/40 rounded-xl border border-border">
                  <XCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcedureSteps
        title="How a Home Visit Works"
        subtitle="From your first message to the follow-up call"
        steps={[
          { number: 1, title: "Message or call us", description: "Tell us where you are in Dubai, what is bothering you and when suits you. We confirm whether it can be treated at home and quote the visit fee.", duration: "5 min" },
          { number: 2, title: "We arrive prepared", description: "Your dentist arrives with sterilised instrument kits, portable equipment and everything needed for the agreed treatment.", duration: "At the agreed time" },
          { number: 3, title: "Examination & treatment", description: "A full check of your teeth and gums, then treatment on the spot wherever possible. You receive clear aftercare instructions.", duration: "45–90 min" },
          { number: 4, title: "Follow-up", description: "We check in after your visit and, if anything needs the clinic, arrange a priority appointment in JLT.", duration: "1–3 days later" },
        ]}
      />

      {/* Pricing note */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5 p-10 bg-card rounded-2xl border border-border">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary">Fees Quoted on Request</h2>
            <p className="text-muted-foreground text-lg">
              The home-visit fee depends on your location and the treatment you need. Message us with your address and we reply with a clear quote before booking. No surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <a
                  href={whatsappLink("Hello, I'd like to book a private at-home dental visit. My location is: ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "at-home-fees" })}
                >
                  <MessageCircle className="h-4 w-4" /> Get a Quote on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 rounded-full">
                <a href={`tel:${REGULAR_PHONE}`} onClick={() => track("call_click", { source: "at-home-fees", line: "regular" })}>
                  <Phone className="h-4 w-4" /> {REGULAR_PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection title="At-Home Dental Visit FAQs" faqs={FAQS} />

      <CTASection
        title="Book Your Private Home Visit"
        text="Your safety and comfort are always our priority. Message us with your location and we'll arrange a visit at a time that suits you."
        treatment="a private at-home dental visit"
        primaryLabel="Book a Home Visit"
      />
    </div>
  );
}
