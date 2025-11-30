import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function GeneralAndPreventive() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = [
    { title: "Routine Check-Ups in Dubai", desc: "Comprehensive exams to detect and prevent dental problems early" },
    { title: "Professional Cleanings", desc: "Remove plaque and tartar buildup for healthier gums and fresher breath" },
    { title: "Root Canal Treatment in Dubai", desc: "Save damaged or infected teeth with painless endodontic care" },
    { title: "Gum Disease Treatment", desc: "Early intervention and advanced care for gingivitis and periodontitis" },
    { title: "Cavity Fillings", desc: "Natural-looking, durable fillings to restore teeth" },
    { title: "Fluoride & Sealants", desc: "Protective treatments to strengthen enamel and prevent decay, especially for children" }
  ];

  const benefits = [
    "Early detection of problems",
    "Save money with fewer major treatments",
    "Fresher breath & healthier gums",
    "Maintain a confident smile for life"
  ];

  const faqs = [
    {
      question: "How often should I visit the dentist for a check-up?",
      answer: "Most patients should see a dentist every six months for a routine exam and cleaning. Regular visits allow us to catch early signs of cavities, gum disease, or other issues before they become serious. Some patients with gum problems or ongoing treatments may need more frequent visits."
    },
    {
      question: "Are professional dental cleanings painful?",
      answer: "No. Professional cleanings are generally painless. You may feel mild sensitivity if you have inflamed gums or tartar buildup, but our dentists use gentle techniques and modern tools to keep you comfortable throughout the procedure."
    },
    {
      question: "What are the signs of gum disease?",
      answer: "Common signs include bleeding gums, persistent bad breath, swollen or tender gums, and receding gum lines. If left untreated, gum disease can lead to tooth loss. Early detection and treatment are key to restoring gum health."
    },
    {
      question: "Do root canals hurt?",
      answer: "Root canals have a reputation for being painful, but with modern anesthesia and technology, they are virtually painless. Most patients report that the discomfort is no worse than getting a filling, and the treatment actually relieves the pain caused by infection."
    },
    {
      question: "Are fluoride treatments safe?",
      answer: "Yes. Fluoride treatments are completely safe when applied by a dentist. They strengthen enamel, help prevent cavities, and are especially beneficial for children and patients prone to tooth decay. The concentration used in professional settings is carefully controlled for safety."
    },
    {
      question: "Can children benefit from sealants?",
      answer: "Absolutely. Dental sealants are thin, protective coatings applied to the chewing surfaces of children's molars. They prevent cavities by blocking bacteria and food particles from settling into deep grooves. Sealants are quick, painless, and can protect teeth for years."
    },
    {
      question: "What happens if I skip regular dental visits?",
      answer: "Skipping routine visits can allow small issues like cavities or gum inflammation to progress into more serious conditions. Preventive care saves you from discomfort, complex treatments, and potential tooth loss in the long run."
    },
    {
      question: "What's the difference between preventive and general dentistry?",
      answer: "Preventive dentistry focuses on avoiding future problems - like cleanings, sealants, and fluoride, while general dentistry includes treating existing issues, such as fillings, root canals, and gum disease therapy. Both work hand in hand to keep your smile healthy for life."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">DOCTOR & PATIENT CONSULTATION</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              General & Preventive Dentistry in <span className="text-primary">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Protect your smile with routine check-ups, cleanings, and preventive care for lifelong oral health.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is Preventive Dentistry */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">PREVENTIVE CARE ICONS</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Prevent Problems Before They Start</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Preventive dentistry focuses on maintaining oral health and avoiding future issues. With regular visits, our dentists detect problems early, saving you time, money, and discomfort.
              </p>
              <div className="space-y-3">
                {["Catch problems early", "Maintain healthy teeth", "Save on treatment costs", "Prevent serious conditions", "Build better habits"].map((item) => (
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

      {/* 3. General & Preventive Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">General & Preventive Dental Services in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3">
                <h3 className="text-lg font-bold text-secondary">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits of Preventive Dental Care */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Benefits of Preventive Dental Care</h2>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-secondary font-medium text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Before & After / Patient Experience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Cleaner, Healthier Smiles</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              See the difference preventive dentistry makes-fresher breath, brighter teeth, and stronger gums.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden bg-muted border border-border h-[400px] flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground">BEFORE & AFTER {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions About Preventive Dentistry</h2>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-all">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
                  >
                    <span className="font-medium text-secondary text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 py-5 bg-white border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Book Your Preventive Check-Up Today</h2>
            <p className="text-muted-foreground text-lg">
              Regular check-ups and cleanings are the key to a healthy smile. Schedule your preventive dentistry appointment now and protect your teeth for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Button>
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
