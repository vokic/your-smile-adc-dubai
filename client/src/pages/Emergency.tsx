import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Emergency() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const emergencies = [
    { title: "Severe Toothache", desc: "Immediate pain relief and treatment of infection" },
    { title: "Broken or Chipped Tooth", desc: "Restore function and appearance quickly" },
    { title: "Knocked-Out Tooth", desc: "Fast re-implantation may save your tooth" },
    { title: "Lost Crown or Filling", desc: "Prevent further damage with urgent replacement" },
    { title: "Abscess or Swelling", desc: "Treat infection before it spreads" },
    { title: "Bleeding Gums or Trauma", desc: "Emergency care after accidents or injury" }
  ];

  const benefits = [
    "24/7 availability for urgent care",
    "Immediate pain relief and treatment",
    "Advanced digital diagnostics for quick decisions",
    "Experienced team in dental trauma and infections",
    "★5.0 rated clinic trusted by patients in Dubai"
  ];

  const faqs = [
    {
      question: "What should I do if I knock out a tooth?",
      answer: "Rinse the tooth gently, avoid touching the root, and place it in milk or saliva. Bring it immediately to the clinic, quick action within 30–60 minutes can save your tooth."
    },
    {
      question: "Can I go to the emergency room for dental pain?",
      answer: "Hospitals can provide pain relief, but only a dentist can perform the necessary treatment. It's best to contact an emergency dentist directly."
    },
    {
      question: "How do I know if my dental problem is an emergency?",
      answer: "Severe pain, swelling, bleeding, broken or knocked-out teeth, or infections with fever are all emergencies that require immediate care."
    },
    {
      question: "Are emergency dental treatments painful?",
      answer: "No. Treatments are done under local anesthesia or sedation if needed. Our priority is to relieve pain quickly and restore comfort."
    },
    {
      question: "Can children receive emergency dental care?",
      answer: "Yes. We treat dental emergencies for children, including broken teeth, knocked-out teeth, and toothaches."
    },
    {
      question: "What if my crown or filling falls out?",
      answer: "Contact us immediately. Temporary measures may prevent further damage, and we can replace the crown or filling quickly to restore your tooth."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-red-600 pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">PATIENT WITH TOOTHACHE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-600/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Emergency Dentistry in <span className="text-yellow-300">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-100 font-light max-w-2xl">
              24/7 urgent dental care for toothaches, injuries, and dental emergencies.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-yellow-400 text-red-600 hover:bg-yellow-300 font-bold gap-2 rounded-full">
                <Phone className="h-5 w-5" />
                Call Now for Emergency Care
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is Emergency Dentistry */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">FIRST-AID CROSS & TOOTH ICON</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Immediate Relief When You Need It Most</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Emergency dentistry provides fast treatment for urgent dental issues such as severe tooth pain, broken teeth, or accidents. Our emergency dentists in Dubai are equipped with advanced technology to relieve pain and protect your oral health immediately.
              </p>
              <div className="space-y-3">
                {["Fast response", "Pain relief", "Advanced diagnostics", "Expert care", "Peace of mind"].map((item) => (
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

      {/* 3. Common Dental Emergencies We Treat */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">When to Visit an Emergency Dentist in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencies.map((emergency, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border-2 border-red-200 hover:shadow-md transition-all space-y-3">
                <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  {emergency.title}
                </h3>
                <p className="text-muted-foreground">{emergency.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Our Emergency Dental Care */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:order-reverse">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">DENTIST WITH PATIENT</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Dubai's Trusted Emergency Dentists</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                    <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0 mt-1" />
                    <p className="text-secondary font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Patient Comfort & Safety */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Fast, Gentle & Painless Treatments</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              We understand emergencies are stressful. Our dentists prioritize patient comfort with painless anesthesia, quick relief, and a calm, supportive environment.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-8 bg-card rounded-xl border-2 border-red-200 space-y-4">
              <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                <span className="text-3xl">🏥</span>
                Immediate & Compassionate Care
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your comfort is our priority. We use the latest pain management techniques and create a supportive environment to help you feel at ease during your emergency treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-2 border-red-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-card hover:bg-red-50/50 transition-colors text-left"
                  >
                    <span className="font-medium text-secondary text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-red-500 shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 py-5 bg-white border-t-2 border-red-200 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border-2 border-red-300">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Call Our Emergency Dentists in Dubai Now</h2>
            <p className="text-muted-foreground text-lg">
              Don't wait in pain, our emergency dental team is ready 24/7 to provide immediate care and relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white gap-2 text-lg font-bold rounded-full" size="lg">
                <Phone className="h-5 w-5" />
                Call Now for Urgent Care
              </Button>
              <Button variant="outline" className="gap-2 border-2 border-red-300 rounded-full rounded-full">
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
