import { CheckCircle2, XCircle, Plane, Users, Clock, ShieldCheck, Hotel, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { IMG } from "@/lib/images";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage } from "@/lib/seo";
import { whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";

// Two packages, per owner: treatment-only vs all-inclusive (treatment +
// accommodation, transport and Dubai sightseeing organisation).
const INCLUDED = [
  { feature: "Remote consultation & digital treatment plan before you fly", treatment: true, inclusive: true },
  { feature: "Appointments condensed into the fewest possible visits", treatment: true, inclusive: true },
  { feature: "All dental treatment, materials and lab work", treatment: true, inclusive: true },
  { feature: "Interpreter / multilingual coordinator", treatment: true, inclusive: true },
  { feature: "Aftercare plan and remote follow-up calls", treatment: true, inclusive: true },
  { feature: "Hotel accommodation booked and coordinated", treatment: false, inclusive: true },
  { feature: "Airport transfers and clinic transport", treatment: false, inclusive: true },
  { feature: "Organised Dubai sightseeing between appointments", treatment: false, inclusive: true },
  { feature: "Dedicated concierge during your stay", treatment: false, inclusive: true },
];

const FAQS = [
  { question: "How do I get a treatment plan before travelling?", answer: "Send us recent photos and any X-rays or a panoramic scan on WhatsApp. Our doctors review them, hold a video consultation if needed, and send you a written plan with the number of visits, timeline and package." },
  { question: "How long do I need to stay in Dubai?", answer: "It depends on the treatment. Veneers usually need two visits 3–10 days apart. Implants need two trips several months apart, or one longer stay for All-on-4 with a temporary bridge. We tell you exactly before you book flights." },
  { question: "What is the difference between the two packages?", answer: "The Treatment-Only package covers everything dental: planning, treatment, materials and follow-up. The All-Inclusive package adds your hotel, airport and clinic transfers, and an organised Dubai programme between appointments." },
  { question: "Which languages does the team speak?", answer: "English, Arabic, Russian, Serbian and Italian are spoken in the clinic, and we arrange interpreters for other languages." },
  { question: "What happens if I need follow-up after I go home?", answer: "You receive a detailed aftercare plan and we schedule remote check-ins by video call. Our doctors remain available for questions, and we coordinate with your local dentist if anything needs attention." },
];

export default function DentalTourism() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Dental Tourism", path: "/dental-tourism" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Dental Tourism in Dubai - Treatment-Only & All-Inclusive Packages"
        description="Combine premium dental treatment with a Dubai stay. Two clear packages: treatment-only or all-inclusive with hotel, transfers and sightseeing. Veneers, implants, full-mouth rehab."
        path="/dental-tourism"
        jsonLd={[jsonLdFAQPage(FAQS), jsonLdBreadcrumb(crumbs)]}
      />
      <ServiceHero
        title="Dental Tourism in Dubai — World-Class Care + Premium Experience"
        subtitle="Combine your smile transformation with a stay in Dubai. Choose treatment-only or let us organise everything."
        breadcrumbs={crumbs}
        treatment="dental tourism"
        primaryButtonText="Get Your Travel Package"
        backgroundImage={IMG.handshake}
      />

      {/* Why */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Why International Patients Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Complex cases are our speciality — and we plan them so you spend as little time in the chair, and as much time enjoying Dubai, as possible.</p>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Plane, title: "Plan Before You Fly", desc: "Remote consultation and a written plan so there are no surprises on arrival." },
              { icon: Users, title: "Multilingual Team", desc: "English, Arabic, Russian, Serbian and Italian spoken in the clinic." },
              { icon: Clock, title: "Condensed Schedules", desc: "Visits grouped so your treatment fits your trip." },
              { icon: ShieldCheck, title: "Same Standards", desc: "The same doctors, materials and warranties as our Dubai patients." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="mb-6 p-4 rounded-full bg-primary/5"><Icon className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two packages */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Two Packages, Clearly Explained</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pick the level of support you want. Both are quoted individually after your remote consultation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-2xl border border-border p-8 space-y-4">
              <Stethoscope className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-secondary">Treatment-Only Package</h3>
              <p className="text-muted-foreground leading-relaxed">You arrange your own flights and hotel; we take care of everything dental — planning, treatment, materials, interpreter and aftercare — scheduled around your trip.</p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-primary p-8 space-y-4 shadow-lg relative">
              <span className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most convenient</span>
              <Hotel className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-bold text-secondary">All-Inclusive Dubai Smile Package</h3>
              <p className="text-muted-foreground leading-relaxed">Everything in Treatment-Only plus your hotel, airport and clinic transfers, and an organised Dubai programme between appointments — one contact for the whole stay.</p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border shadow-sm bg-white">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-6 py-4 text-left font-bold">What's included</th>
                  <th className="px-6 py-4 text-center font-bold">Treatment-Only</th>
                  <th className="px-6 py-4 text-center font-bold">All-Inclusive</th>
                </tr>
              </thead>
              <tbody>
                {INCLUDED.map((row, i) => (
                  <tr key={row.feature} className={`border-t border-border ${i % 2 ? "bg-muted/20" : ""}`}>
                    <td className="px-6 py-4 text-secondary font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">{row.treatment ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" /> : <XCircle className="h-5 w-5 text-muted-foreground/40 mx-auto" />}</td>
                    <td className="px-6 py-4 text-center">{row.inclusive ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" /> : <XCircle className="h-5 w-5 text-muted-foreground/40 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
              <a
                href={whatsappLink("Hello, I'm an international patient interested in a dental tourism package. I'm travelling from: ")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "tourism-packages" })}
              >
                Request Your Personalised Package
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Your Dental Tourism Journey</h2>
              <p className="text-lg text-muted-foreground">From the first message to the follow-up call after you're home.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                { step: "1", title: "Remote Consultation", desc: "Send photos and X-rays; our doctors review them and hold a video call if needed." },
                { step: "2", title: "Plan & Package", desc: "You receive a written treatment plan, timeline, number of visits and your chosen package." },
                { step: "3", title: "Arrival", desc: "All-Inclusive: we meet you at the airport and check you into your hotel. Treatment-Only: we confirm your first appointment." },
                { step: "4", title: "Treatment", desc: "Condensed appointments with the same doctors from start to finish." },
                { step: "5", title: "Enjoy Dubai", desc: "Between visits, recover and explore — organised for you on the All-Inclusive package." },
                { step: "6", title: "Follow-Up", desc: "Aftercare plan, remote check-ins and coordination with your local dentist if needed." },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoTestimonials />

      <FAQSection title="Dental Tourism FAQs" faqs={FAQS} />

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-primary/10">
            <Visual src={IMG.handshake} icon={Plane} className="w-full md:w-1/2 h-[320px]" />
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Ready to Transform Your Smile in Dubai?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Tell us where you're travelling from and what you'd like to change about your smile. We'll reply with a plan and a package, not a sales pitch.</p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
                <a href={whatsappLink("Hello, I'd like to start planning dental treatment in Dubai.")} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "tourism-cta" })}>
                  Start Your Journey
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Questions Before You Book?" text="Message us on WhatsApp — a coordinator who speaks your language will answer." treatment="dental tourism" bgColor="bg-background" />
    </div>
  );
}
