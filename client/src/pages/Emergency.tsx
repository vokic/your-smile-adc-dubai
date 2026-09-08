import { useState } from "react";
import { Link } from "wouter";
import { MessageCircle, Phone, CheckCircle2, AlertCircle, Home as HomeIcon, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { FAQSection } from "@/components/FAQSection";
import { EmergencyConfirmModal } from "@/components/EmergencyConfirmModal";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdFAQPage, jsonLdService } from "@/lib/seo";
import { EMERGENCY_PHONE, EMERGENCY_PHONE_DISPLAY, WORKING_HOURS_SUMMARY, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";

const EMERGENCIES = [
  { title: "Severe Toothache", desc: "Immediate pain relief and treatment of the cause" },
  { title: "Broken or Chipped Tooth", desc: "Restore function and appearance quickly" },
  { title: "Knocked-Out Tooth", desc: "Fast re-implantation may save your tooth" },
  { title: "Lost Crown or Filling", desc: "Prevent further damage with urgent replacement" },
  { title: "Abscess or Swelling", desc: "Treat infection before it spreads" },
  { title: "Bleeding Gums or Trauma", desc: "Emergency care after accidents or injury" },
];

const FAQS = [
  { question: "What should I do if I knock out a tooth?", answer: "Rinse the tooth gently, avoid touching the root, and place it in milk or saliva. Bring it to the clinic immediately — quick action within 30–60 minutes can save your tooth." },
  { question: "Can I go to the emergency room for dental pain?", answer: "Hospitals can provide pain relief, but only a dentist can perform the necessary treatment. It's best to contact an emergency dentist directly." },
  { question: "How do I know if my dental problem is an emergency?", answer: "Severe pain, swelling, bleeding, broken or knocked-out teeth, or infection with fever are all emergencies that need immediate care." },
  { question: "Are emergency dental treatments painful?", answer: "No. Treatments are done under local anaesthesia, with sedation if needed. Our priority is to relieve pain quickly." },
  { question: "Can you come to me?", answer: "Yes. For patients who cannot travel, our private at-home service covers pain relief, temporary repairs, re-cementing crowns and simple extractions. Surgical cases are treated in the clinic." },
  { question: "Can children receive emergency dental care?", answer: "Yes. We treat dental emergencies for children, including broken teeth, knocked-out teeth and toothaches." },
];

export default function Emergency() {
  const [showModal, setShowModal] = useState(false);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Emergency Dentist", path: "/emergency" },
  ];
  const confirmCall = () => {
    setShowModal(false);
    track("emergency_confirm", { source: "emergency-page" });
    window.location.href = `tel:${EMERGENCY_PHONE}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Emergency Dentist in Dubai - Same-Day Pain Relief"
        description="Emergency dental care in Dubai JLT for toothache, broken teeth, abscess, lost crowns and trauma. Dedicated emergency line, same-day treatment, at-home visits available."
        path="/emergency"
        jsonLd={[
          jsonLdService({ name: "Emergency Dentistry in Dubai", description: "Same-day emergency dental care in Dubai JLT.", path: "/emergency", serviceType: "Emergency dental care" }),
          jsonLdFAQPage(FAQS),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="Emergency Dentist in Dubai"
        subtitle="Urgent dental care for toothaches, injuries and infections. Call our emergency line and we'll tell you exactly what to do next."
        breadcrumbs={crumbs}
        treatment="a dental emergency"
        primaryButtonText="Message Us Now"
        secondaryButtonText="Call the Clinic"
        tone="emergency"
      />

      {/* Emergency line block */}
      <section className="py-10 bg-red-50 border-b border-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white rounded-2xl border-2 border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-10 w-10 text-red-600 shrink-0" />
              <div>
                <p className="font-bold text-secondary text-lg">Dedicated emergency line</p>
                <p className="text-muted-foreground text-sm">For severe pain, trauma, swelling or bleeding. Available outside regular hours.</p>
                <p className="text-xs text-muted-foreground mt-2 inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Clinic hours: {WORKING_HOURS_SUMMARY.map((h) => `${h.label} ${h.hours}`).join(" · ")}</p>
              </div>
            </div>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full gap-2 font-bold text-lg shrink-0" onClick={() => setShowModal(true)} data-testid="button-emergency-line">
              <Phone className="h-5 w-5" /> {EMERGENCY_PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual icon={AlertCircle} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Immediate Relief When You Need It Most</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Emergency dentistry provides fast treatment for urgent problems such as severe tooth pain, broken teeth or accidents. Our emergency dentists in Dubai use digital imaging to diagnose quickly, relieve pain and protect your oral health.
              </p>
              <div className="space-y-3">
                {["Fast response", "Pain relief first", "Digital diagnostics on site", "Oral surgery expertise for trauma", "Peace of mind"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">When to Call an Emergency Dentist in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMERGENCIES.map((e) => (
              <div key={e.title} className="p-6 bg-card rounded-xl border-2 border-red-200 hover:shadow-md transition-all space-y-3">
                <h3 className="text-lg font-bold text-red-600 flex items-center gap-2"><AlertCircle className="h-5 w-5" />{e.title}</h3>
                <p className="text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* At-home emergency */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 md:p-12 rounded-3xl bg-secondary text-white">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm"><HomeIcon className="h-4 w-4" /> Can't come to us?</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">We Come to You</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                For patients who cannot travel — after an accident, with limited mobility, or with a child in pain at home — our private at-home service brings emergency pain relief, temporary repairs, re-cementing of crowns and simple extractions to your door anywhere in Dubai.
              </p>
              <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-secondary gap-2">
                <Link href="/at-home">About at-home visits <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
            <ul className="space-y-3">
              {["Emergency pain relief and medication", "Temporary fillings and crown re-cementing", "Simple extractions", "Assessment and priority clinic booking if surgery is needed"].map((i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-white/10 rounded-xl border border-white/15"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Fast, Gentle & Painless Treatment</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Emergencies are stressful. Our dentists prioritise your comfort with effective anaesthesia, quick relief and a calm, supportive environment.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} />

      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border-2 border-red-300">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Call Our Emergency Dentists in Dubai Now</h2>
            <p className="text-muted-foreground text-lg">Don't wait in pain. Our team is ready to provide immediate care and relief.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white gap-2 text-lg font-bold rounded-full" size="lg" onClick={() => setShowModal(true)}>
                <Phone className="h-5 w-5" /> Call Emergency Line
              </Button>
              <Button asChild variant="outline" className="gap-2 border-2 border-red-300 rounded-full">
                <a href={whatsappLink("Hello, I have a dental emergency and need help as soon as possible.")} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "emergency-cta" })}>
                  <MessageCircle className="h-4 w-4" /> Message on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EmergencyConfirmModal isOpen={showModal} onClose={() => setShowModal(false)} onConfirm={confirmCall} phoneNumber={EMERGENCY_PHONE_DISPLAY} />
    </div>
  );
}
