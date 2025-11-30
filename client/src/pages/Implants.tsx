import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { TestimonialsGallery } from "@/components/TestimonialsGallery";

export default function Implants() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const implantServices = [
    { title: "Single-Tooth Implants in Dubai", desc: "Replace one missing tooth with a natural-looking implant and crown" },
    { title: "Full-Mouth Implants", desc: "Restore an entire arch of teeth with advanced implant systems" },
    { title: "Implant-Supported Dentures", desc: "Secure, comfortable dentures anchored by implants" },
    { title: "Bone Grafting in Dubai", desc: "Build up lost bone to support implants" },
    { title: "3D Implant Planning", desc: "Digital scans ensure precision and safety" },
    { title: "Biocompatible Materials", desc: "Titanium and ceramic options for maximum comfort and health" }
  ];

  const benefits = [
    "Permanent, stable, and durable",
    "Natural look and feel",
    "Prevents bone loss",
    "Improves chewing and speaking",
    "Long-lasting investment in your health"
  ];

  const faqs = [
    {
      question: "How long do dental implants last?",
      answer: "With proper care, dental implants can last a lifetime. The implant post itself is designed to integrate with your jawbone permanently (osseointegration). The crown attached to the implant may need replacement after 10–15 years, depending on wear, but the implant foundation is built to last for decades."
    },
    {
      question: "Are dental implants painful?",
      answer: "The procedure is performed under local anesthesia, so patients do not feel pain during surgery. Afterward, mild discomfort, swelling, or sensitivity can occur, but this usually subsides within a few days. Most patients describe implant surgery as far less painful than they expected, and recovery is generally smooth."
    },
    {
      question: "What is the recovery time for dental implants?",
      answer: "Initial healing usually takes 1–2 weeks. However, the full integration of the implant with the bone (osseointegration) can take 3–6 months, depending on your health and bone density. During this period, temporary crowns or dentures may be used, and once healing is complete, the permanent crown is placed."
    },
    {
      question: "Do I need bone grafting before getting implants?",
      answer: "If your jawbone has thinned or weakened due to tooth loss, gum disease, or trauma, bone grafting may be required to build enough bone for stable implant placement. Thanks to advanced 3D scans, our dentists can quickly determine whether bone grafting is necessary during your consultation."
    },
    {
      question: "How much do dental implants cost in Dubai?",
      answer: "The cost varies depending on how many teeth you are replacing, the type of implant system used, and whether additional treatments (such as bone grafting or sinus lift) are required. Contact us for a personalized quote based on your specific needs."
    },
    {
      question: "Are dental implants better than dentures or bridges?",
      answer: "Yes, implants offer advantages that dentures and bridges cannot: they are permanent, stable, and preserve bone health. Unlike dentures, implants do not slip or require adhesives. Unlike bridges, they don't rely on grinding down adjacent teeth. Implants function and look like natural teeth, making them the gold standard for tooth replacement."
    },
    {
      question: "Am I a good candidate for dental implants?",
      answer: "Most adults with missing teeth are good candidates. Ideal candidates have healthy gums and enough bone density to support implants. Even if bone is lacking, bone grafting can often make implants possible. Patients with uncontrolled diabetes, heavy smoking habits, or untreated gum disease may require additional preparation before implant surgery."
    },
    {
      question: "How safe are dental implants?",
      answer: "Dental implants are one of the safest and most predictable procedures in modern dentistry, with a success rate of over 95%. Using biocompatible titanium or ceramic materials ensures long-term safety and compatibility with your body. With proper hygiene and regular check-ups, implant complications are rare."
    },
    {
      question: "How do I take care of dental implants?",
      answer: "Implants should be cared for like natural teeth: brush twice daily, floss regularly, and visit your dentist for check-ups. Avoid smoking and excessive alcohol consumption, as these can slow healing and affect long-term success. With proper maintenance, implants remain healthy and functional for decades."
    },
    {
      question: "Can implants replace all my teeth?",
      answer: "Yes. Full-mouth dental implants or implant-supported dentures can restore an entire arch of missing teeth. Depending on your case, as few as 4-6 implants can support a full arch (All-on-4 or All-on-6 technique), providing a strong, stable, and natural-looking solution."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">PATIENT WITH NATURAL SMILE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Dental Implants in <span className="text-primary">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Permanent, natural-looking tooth replacement solutions that restore your smile and confidence.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book Implant Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Are Dental Implants */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">IMPLANT ILLUSTRATION</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">A Permanent Solution for Missing Teeth</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dental implants replace missing teeth with artificial roots made from biocompatible titanium. They look, feel, and function just like natural teeth, offering unmatched stability and durability compared to bridges or dentures.
              </p>
              <div className="space-y-3">
                {["Biocompatible titanium", "Permanent integration", "Natural appearance", "Durable solution", "Restores functionality"].map((item) => (
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

      {/* 3. Types of Implant Treatments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Our Implant Solutions in Dubai</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {implantServices.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-3">
                <h3 className="text-lg font-bold text-secondary">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Implant Procedure Timeline */}
      <ProcedureSteps
        title="Your Dental Implant Journey"
        subtitle="From consultation to your new smile - typically 4-6 months"
        steps={[
          {
            number: 1,
            title: "3D Consultation & Planning",
            description: "We perform 3D imaging (CBCT) to evaluate bone density and plan precise implant placement. You'll see a digital preview of your final result.",
            duration: "45 min",
          },
          {
            number: 2,
            title: "Implant Surgery",
            description: "Under local anesthesia, we place the titanium implant into your jawbone. The procedure is painless, and most patients return to normal activities within days.",
            duration: "30-60 min",
          },
          {
            number: 3,
            title: "Osseointegration (Healing)",
            description: "Your implant bonds with the bone over 3-6 months. Temporary crowns or dentures are worn during this period to maintain function and aesthetics.",
            duration: "3-6 months",
          },
          {
            number: 4,
            title: "Permanent Crown Placement",
            description: "Once integration is complete, we create and attach your custom-made crown. Your new tooth is now fully functional and looks completely natural.",
            duration: "1-2 hours",
          },
        ]}
      />

      {/* 5. Why Choose Implants */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Why Choose Dental Implants?</h2>
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

      {/* 5. Before & After Transformations & Video Testimonials */}
      <TestimonialsGallery
        beforeAfterItems={[
          { id: "implant-1", title: "Single Tooth Restoration", category: "Single Implant" },
          { id: "implant-2", title: "Multiple Missing Teeth", category: "Full Mouth Implants" },
          { id: "implant-3", title: "Bone Grafting Success", category: "Complex Case" },
        ]}
        videoTestimonials={[
          { id: "vid-1", title: "Eating Again with Confidence", patientName: "Ahmed K." },
          { id: "vid-2", title: "Smile Restored", patientName: "Noor R." },
        ]}
      />

      {/* 6. Dental Implant Cost */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">How Much Do Dental Implants Cost in Dubai?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The cost of implants depends on the number of teeth, type of implant, and whether additional procedures (like bone grafting) are needed. Full-mouth implants and implant-supported dentures are quoted after consultation.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full rounded-full">
              Get Your Free Implant Quote
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Trust & Expertise */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Dubai's Implant Specialists</h2>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Our implantologists are internationally trained, using 3D planning and premium implant systems to ensure safety, comfort, and long-lasting results. Rated ★5.0 on Google by Dubai patients.
                </p>
              </div>
              <div className="space-y-3">
                {["Internationally trained specialists", "Advanced 3D planning", "Premium implant systems", "95%+ success rate", "Expert aftercare"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] rounded-2xl overflow-hidden bg-muted/20 border border-white/10 flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">DOCTORS & TECHNOLOGY IMAGE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Frequently Asked Questions About Dental Implants</h2>
            
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

      {/* 9. Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Book Your Implant Consultation Today</h2>
            <p className="text-muted-foreground text-lg">
              Don't let missing teeth affect your life. Book your consultation today and restore your smile with advanced dental implants in Dubai.
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
