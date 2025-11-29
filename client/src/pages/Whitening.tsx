import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Whitening() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const treatments = [
    { title: "Laser Teeth Whitening in Dubai", desc: "Advanced technology for fast, visible results" },
    { title: "In-Office Whitening", desc: "Professional chairside treatment for safe and predictable outcomes" },
    { title: "Take-Home Whitening Kits", desc: "Custom trays with professional-grade gel for gradual whitening at home" }
  ];

  const benefits = [
    "Safe for enamel & gums",
    "Noticeable results after one session",
    "Tailored treatment strength to your needs",
    "Performed by ★5.0 rated dental professionals"
  ];

  const faqs = [
    {
      question: "Is teeth whitening safe?",
      answer: "Yes. Professional teeth whitening performed by a dentist is safe and does not damage enamel or gums. Unlike over-the-counter kits, clinical treatments use controlled methods and biocompatible whitening agents to protect your teeth while removing deep stains."
    },
    {
      question: "How long do whitening results last?",
      answer: "Results typically last 6–12 months, depending on lifestyle and oral care. Patients who avoid excessive coffee, tea, red wine, or smoking usually enjoy brighter smiles for longer. Regular check-ups and occasional touch-up sessions help maintain results for years."
    },
    {
      question: "Does whitening damage enamel?",
      answer: "No. Professional whitening systems are designed to penetrate stains without harming enamel. Some temporary sensitivity can occur after treatment, but this usually resolves within a day or two."
    },
    {
      question: "How white can my teeth get?",
      answer: "The degree of whitening varies from person to person, depending on natural tooth color and stain depth. Most patients achieve teeth several shades lighter in a single session, resulting in a visibly brighter and more confident smile."
    },
    {
      question: "What's the difference between laser whitening and home whitening kits?",
      answer: "Laser whitening provides immediate, dramatic results in one session under professional supervision. Home whitening kits, on the other hand, use lower-strength gels in custom trays, delivering gradual results over 1–2 weeks. Many patients combine both approaches for long-term brightness."
    },
    {
      question: "Can whitening remove all stains?",
      answer: "Teeth whitening works best on stains caused by food, drinks, and aging. However, it may not be as effective for intrinsic discoloration caused by medication, trauma, or enamel defects. In such cases, veneers or bonding may be recommended as alternatives."
    },
    {
      question: "Who is a good candidate for teeth whitening?",
      answer: "Most adults with healthy teeth and gums are good candidates. Whitening is not recommended for children, pregnant women, or patients with untreated cavities or gum disease. A dental consultation ensures the treatment is safe and effective for you."
    },
    {
      question: "Will whitening make my teeth sensitive?",
      answer: "Some patients may experience temporary tooth sensitivity after whitening, especially to cold foods and drinks. This sensitivity usually fades within 24–48 hours. Our dentists use protective gels and modern systems to minimize any discomfort."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">PATIENT WITH BRIGHT SMILE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Teeth Whitening in <span className="text-primary">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Brighten your smile safely and effectively with professional whitening treatments.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-5 w-5" />
                Book Whitening Session
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is Professional Teeth Whitening */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">DENTIST WITH LED/LASER LAMP</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Safe, Fast & Professional Whitening</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Unlike over-the-counter products, professional teeth whitening delivers dramatic results in a single visit. Our treatments use advanced whitening systems that remove deep stains without damaging enamel, giving you a brighter smile in just 45–60 minutes.
              </p>
              <div className="space-y-3">
                {["Fast results (45-60 min)", "Advanced technology", "Enamel safe", "Professional strength", "Dramatic whitening"].map((item) => (
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

      {/* 3. Types of Whitening Treatments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Teeth Whitening Options in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {treatments.map((treatment, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-secondary">{treatment.title}</h3>
                <p className="text-muted-foreground">{treatment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Whitening at Our Clinic */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:order-reverse">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">PATIENT IN CHAIR WITH DENTIST</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Whitening with Confidence</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <p className="text-secondary font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Before & After Results */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Teeth Whitening Before & After</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              See how our patients achieved radiant smiles with professional whitening treatments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden bg-muted border border-border h-[400px] flex items-center justify-center hover:shadow-lg transition-all">
                <span className="text-lg font-bold text-muted-foreground">BEFORE & AFTER {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions About Teeth Whitening</h2>
            
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

      {/* 7. Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Get a Brighter Smile Today</h2>
            <p className="text-muted-foreground text-lg">
              Book your whitening session now and see results instantly – safe, effective, and done by experts.
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
