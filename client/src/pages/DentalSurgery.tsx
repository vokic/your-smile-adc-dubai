import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DentalSurgery() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const surgeryTypes = [
    { title: "Wisdom Tooth Extraction", icon: "🦷" },
    { title: "Dental Implants", icon: "⚙️" },
    { title: "Bone Grafting", icon: "🧬" },
    { title: "Gum Surgery", icon: "🩺" },
    { title: "Jaw Correction", icon: "⚡" },
    { title: "Frenectomy", icon: "✨" }
  ];

  const benefits = [
    "15 years of surgical excellence",
    "Internationally trained oral surgeons",
    "Pain-free treatments with advanced anesthesia options",
    "State-of-the-art surgical facilities",
    "★5.0 Google Rated Dental Clinic in Dubai"
  ];

  const faqs = [
    {
      question: "Is wisdom tooth extraction painful?",
      answer: "No. Wisdom tooth extractions are done under local anesthesia, so you won't feel pain during the procedure. You may experience mild swelling or discomfort afterward, which usually subsides within a few days. Pain relief medication and a soft diet help ensure a smooth recovery."
    },
    {
      question: "How long does recovery take after oral surgery?",
      answer: "Recovery time depends on the type of procedure. Simple tooth extractions typically heal within 2–3 days, while wisdom tooth extractions may require up to a week. More complex procedures like bone grafting or jaw surgery can take a few weeks for full recovery. Our surgeons provide personalized aftercare instructions to speed up healing."
    },
    {
      question: "Do I need bone grafting before dental implants?",
      answer: "If you've experienced bone loss due to missing teeth, gum disease, or trauma, bone grafting may be necessary to rebuild the jaw and support implants. During your consultation, we use advanced imaging to determine whether bone grafting is required. Not all patients need it, but when recommended, it greatly improves implant success."
    },
    {
      question: "What is gum surgery, and when is it needed?",
      answer: "Gum surgery treats advanced periodontal disease, reshapes gum tissue, and restores oral health. It's needed when gums recede, become infected, or cause loose teeth. Surgical treatment helps prevent further damage and tooth loss, while also improving smile aesthetics."
    },
    {
      question: "Is oral surgery safe?",
      answer: "Yes. When performed by qualified oral surgeons in a sterile, modern clinic, dental surgeries are safe and predictable. Our team uses advanced anesthesia options, strict sterilization protocols, and digital imaging to ensure precision and comfort at every step."
    },
    {
      question: "How do I prepare for dental surgery?",
      answer: "Before surgery, our team will review your medical history and advise you on fasting (if sedation is used), medications, and oral hygiene steps. Most patients can return to normal activities within a few days, depending on the procedure."
    },
    {
      question: "What is jaw correction surgery, and who needs it?",
      answer: "Jaw correction (orthognathic surgery) is a procedure that aligns the upper and lower jaws to improve chewing, speech, breathing, and facial balance. It is recommended for patients with misaligned bites, jaw pain, or cosmetic concerns that cannot be corrected with orthodontics alone."
    },
    {
      question: "What aftercare is required following oral surgery?",
      answer: "After surgery, patients are advised to rest, avoid hard foods, maintain proper oral hygiene, and follow prescribed medications. Cold compresses reduce swelling, while follow-up visits ensure proper healing. Our team provides complete aftercare support to make recovery simple and stress-free."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">DENTAL SURGERY HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Expert Dental Surgery in Dubai - Safe, Advanced & <span className="text-primary">Trusted Care</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              From wisdom tooth removal to complex jaw correction, our skilled surgeons deliver precise results with comfort and care.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-5 w-5" />
                Book Your Surgical Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Dental Surgery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">What Is Dental Surgery?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dental surgery covers a wide range of specialized procedures that address complex oral health conditions. Our goal is to restore function, relieve pain, and enhance your overall oral health with the latest surgical techniques.
              </p>
            </div>
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">DENTAL SURGERY ILLUSTRATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Surgery Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Our Dental Surgery Services in Dubai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgeryTypes.map((surgery, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:shadow-md transition-all text-center space-y-3">
                <div className="text-5xl">{surgery.icon}</div>
                <h3 className="text-xl font-bold text-secondary">{surgery.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Trusted Oral Surgeons in Dubai</h2>
            <p className="text-gray-200 text-lg">
              With 15 years of surgical excellence, internationally trained oral surgeons, and state-of-the-art facilities, we deliver safe, predictable outcomes with patient comfort at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/10 rounded-lg border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">PATIENT TESTIMONIAL/VIDEO</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Comfort, Care & Lasting Results</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From your first consultation to post-surgery follow-up, we focus on patient comfort, safety, and predictable outcomes. Our oral surgeons ensure every step of your treatment is explained and stress-free.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions About Dental Surgery</h2>
            
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

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Book Your Dental Surgery Consultation in Dubai</h2>
            <p className="text-muted-foreground text-lg">
              Don't wait for pain to get worse. Schedule a consultation with our oral surgeons and get expert care tailored to your needs.
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
