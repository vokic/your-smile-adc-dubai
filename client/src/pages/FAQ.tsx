import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What dental services does your clinic offer?",
      answer: "Your Smile ADC Dubai offers a full spectrum of dental services - from dental surgery, implants, and orthodontics, to cosmetic treatments, general dentistry, and emergency care. We combine advanced technology with personalized treatment plans to build healthy, confident smiles."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting every 6 months for routine check-ups and cleanings. Regular visits help us catch small issues early before they become more serious."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "We accept various dental insurance plans. During your appointment, our team will help you understand your coverage and any out-of-pocket costs."
    },
    {
      question: "Are dental procedures painful?",
      answer: "Most treatments are performed with local anesthesia to ensure comfort. Our team prioritizes gentle care and uses modern techniques to minimize discomfort."
    },
    {
      question: "How can I schedule an appointment?",
      answer: "You can easily book an appointment by calling +971 58 828 2432 or by sending us a message on WhatsApp. We aim to respond quickly to schedule you at your convenience."
    },
    {
      question: "Do you offer teeth cleaning and preventive care services?",
      answer: "Yes. We provide professional cleanings, fluoride applications, sealants, and preventive exams to help maintain your oral health and prevent future issues."
    },
    {
      question: "Do you provide emergency dental services?",
      answer: "Absolutely. Our clinic offers prompt emergency care, whether you're dealing with severe pain, a broken tooth, or injury, our emergency team is ready to help."
    },
    {
      question: "Do you offer teeth whitening treatments?",
      answer: "Yes. We provide professional teeth whitening services that offer safe and effective results, perfect for both quick smile refreshes and comprehensive cosmetic enhancements."
    },
    {
      question: "Do you offer dental implants?",
      answer: "Yes. We specialize in dental implant treatments, using advanced 3D planning for precise placement and restoring both aesthetics and function."
    },
    {
      question: "Do you offer clear aligner treatments like Invisalign?",
      answer: "Yes. We provide Invisalign and other gentle aligner treatments, ideal for discreetly straightening teeth and correcting bite issues."
    },
    {
      question: "Do you use digital X-rays for diagnostics?",
      answer: "Yes. Our clinic uses low-radiation digital X-rays and full-mouth OPG scans for accurate, efficient diagnostics and treatment planning."
    },
    {
      question: "Do you offer sedation options for anxious patients?",
      answer: "Yes. We understand dental anxiety and offer sedation options to ensure a calm and comfortable treatment experience."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">FAQ HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Find answers to common questions about our services, procedures, and how we can help your dental health.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Ask a Question
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">We're Here to Help</h2>
              <p className="text-muted-foreground text-lg">Can't find the answer you're looking for? Contact our team directly.</p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-all">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
                  >
                    <span className="font-medium text-secondary text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-5 bg-muted/30 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 md:p-10 bg-card rounded-2xl border border-border text-center">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-3">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our dental team is ready to answer any additional questions. Reach out to us via phone, WhatsApp, or email.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </Button>
                <Button variant="outline" className="gap-2 rounded-full">
                  <Phone className="h-4 w-4" />
                  Call +971 58 828 2432
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
