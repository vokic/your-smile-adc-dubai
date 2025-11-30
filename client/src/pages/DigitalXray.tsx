import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown, Zap } from "lucide-react";
import { useState } from "react";

export default function DigitalXray() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const benefits = [
    "Low-radiation imaging for safety",
    "Crystal-clear digital images for accurate diagnosis",
    "Faster results compared to traditional X-rays",
    "Better planning for implants and surgery",
    "3D imaging capabilities for complex cases",
    "Detailed records for your health"
  ];

  const faqs = [
    {
      question: "Is digital X-ray imaging safe?",
      answer: "Yes. Digital X-rays use significantly less radiation than traditional X-rays – up to 80% less exposure. They are completely safe and performed regularly on patients of all ages, including children."
    },
    {
      question: "How often do I need X-rays?",
      answer: "For most patients, routine check-ups include X-rays every 1-2 years. However, if you have gum disease, cavities, or are undergoing treatment like implants or orthodontics, your dentist may recommend more frequent imaging."
    },
    {
      question: "What is an OPG (Orthopantomogram)?",
      answer: "An OPG is a panoramic X-ray that captures your entire mouth – all teeth, jaw, and surrounding structures – in a single image. It's essential for implant planning, orthodontic assessment, and detecting jaw problems."
    },
    {
      question: "How does 3D imaging help with implant planning?",
      answer: "3D imaging provides precise measurements of bone density, volume, and location, allowing our dentists to plan implant placement with millimeter accuracy. This reduces surgical time, improves outcomes, and prevents complications."
    },
    {
      question: "Can digital X-rays be shared with other dentists?",
      answer: "Yes. Digital X-ray files are easily stored, archived, and shared securely with specialists or other dentists if you need a second opinion or transfer your records."
    },
    {
      question: "Will I feel anything during a digital X-ray?",
      answer: "No. Digital X-rays are painless and quick. You simply bite gently on a sensor while the image is captured in seconds. The entire process is non-invasive."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">DIGITAL X-RAY & IMAGING TECHNOLOGY</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Digital X-Ray & OPG in <span className="text-primary">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Low-radiation imaging for precise, safe, and comfortable dental diagnostics.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book Your X-Ray
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is Digital X-Ray & OPG */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">DIGITAL X-RAY EQUIPMENT</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Precision Diagnostics with Advanced Technology</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Digital X-rays and OPG (Orthopantomogram) imaging provide clear, detailed views of your teeth, jaw, and bone structure. Unlike traditional X-rays, digital imaging is faster, more accurate, and uses significantly less radiation – protecting your health while delivering superior diagnostic information.
              </p>
              <div className="space-y-3">
                {["Accurate diagnosis", "Safer technology", "Instant results", "Better treatment planning", "Comfortable process"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Digital X-Ray & OPG */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Why Choose Digital X-Ray & OPG?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Safer imaging technology with superior clarity for better diagnosis and treatment planning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <p className="text-secondary font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Applications & Uses */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Digital Imaging for Every Treatment</h2>
            </div>
            <div className="space-y-6">
              {[
                { title: "Implant Planning", desc: "3D imaging provides precise bone measurements for safe, accurate implant placement." },
                { title: "Orthodontic Assessment", desc: "OPG shows tooth position, root development, and jaw structure for effective treatment planning." },
                { title: "Surgical Cases", desc: "Detailed imaging helps our surgeons plan complex extractions and bone grafts with precision." },
                { title: "Cavity Detection", desc: "High-resolution images detect cavities between teeth and under existing crowns early." },
                { title: "Gum Disease Monitoring", desc: "Track bone loss and disease progression accurately over time." },
                { title: "General Dentistry", desc: "Routine check-ups include digital X-rays for comprehensive oral health assessment." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Technology */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:order-reverse">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">ADVANCED X-RAY TECHNOLOGY</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">State-of-the-Art Imaging Equipment</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our clinic features the latest digital X-ray systems and 3D imaging technology. This advanced equipment delivers:
              </p>
              <div className="space-y-3">
                {["Ultra-low radiation exposure", "Crystal-clear image quality", "Instant digital processing", "3D imaging capabilities", "Secure cloud storage", "Easy sharing with specialists"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-secondary font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions About Digital X-Rays</h2>
            
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Get Clear Imaging for Better Dental Health</h2>
            <p className="text-muted-foreground text-lg">
              Our state-of-the-art digital X-ray and OPG imaging ensures accurate diagnosis and precise treatment planning. Book your imaging appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Button>
              <Button variant="outline" className="gap-2 rounded-full">
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
