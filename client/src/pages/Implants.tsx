import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { ProcedureSteps } from "@/components/ProcedureSteps";
import { TestimonialsGallery } from "@/components/TestimonialsGallery";
import { ServiceHero } from "@/components/ServiceHero";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FAQSection } from "@/components/FAQSection";
import { ServiceGrid } from "@/components/ServiceGrid";

export default function Implants() {
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
    { question: "How long do dental implants last?", answer: "With proper care, dental implants can last a lifetime. The implant post integrates with your jawbone permanently. The crown may need replacement after 10–15 years, but the implant foundation lasts for decades." },
    { question: "Are dental implants painful?", answer: "The procedure is performed under local anesthesia, so patients do not feel pain during surgery. Mild discomfort or swelling can occur afterward, but this usually subsides within a few days." },
    { question: "What is the recovery time for dental implants?", answer: "Initial healing usually takes 1–2 weeks. The full integration (osseointegration) can take 3–6 months. During this period, temporary crowns or dentures may be used." },
    { question: "Do I need bone grafting before getting implants?", answer: "If your jawbone has thinned due to tooth loss, bone grafting may be required. Advanced 3D scans help determine whether bone grafting is necessary." },
    { question: "How much do dental implants cost in Dubai?", answer: "The cost varies depending on how many teeth you're replacing, the implant system used, and whether additional treatments are required. Contact us for a personalized quote." },
    { question: "Are dental implants better than dentures or bridges?", answer: "Yes, implants are permanent, stable, and preserve bone health. Unlike dentures, they don't slip. Unlike bridges, they don't require grinding down adjacent teeth." },
    { question: "Am I a good candidate for dental implants?", answer: "Most adults with missing teeth are good candidates. Ideal candidates have healthy gums and enough bone density. Bone grafting can often make implants possible even if bone is lacking." },
    { question: "How safe are dental implants?", answer: "Dental implants are one of the safest procedures in modern dentistry with a success rate over 95%. Biocompatible titanium or ceramic materials ensure long-term safety." },
    { question: "How do I take care of dental implants?", answer: "Care for implants like natural teeth: brush twice daily, floss regularly, and visit your dentist for check-ups. Avoid smoking and excessive alcohol." },
    { question: "Can implants replace all my teeth?", answer: "Yes. Full-mouth dental implants or implant-supported dentures can restore an entire arch. As few as 4-6 implants can support a full arch using All-on-4 or All-on-6 techniques." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero
        title="Dental Implants in Dubai"
        subtitle="Permanent, natural-looking tooth replacement solutions that restore your smile and confidence."
        backgroundImage="PATIENT WITH NATURAL SMILE"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">IMPLANT ILLUSTRATION</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">A Permanent Solution for Missing Teeth</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">Dental implants replace missing teeth with artificial roots made from biocompatible titanium. They look, feel, and function just like natural teeth.</p>
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

      <ServiceGrid title="Our Implant Solutions in Dubai" services={implantServices} columns="2" bgColor="bg-muted/30" />

      <ProcedureSteps
        title="Your Dental Implant Journey"
        subtitle="From consultation to your new smile - typically 4-6 months"
        steps={[
          { number: 1, title: "3D Consultation & Planning", description: "We perform 3D imaging (CBCT) to evaluate bone density and plan precise implant placement. You'll see a digital preview of your final result.", duration: "45 min" },
          { number: 2, title: "Implant Surgery", description: "Under local anesthesia, we place the titanium implant into your jawbone. The procedure is painless, and most patients return to normal activities within days.", duration: "30-60 min" },
          { number: 3, title: "Osseointegration (Healing)", description: "Your implant bonds with the bone over 3-6 months. Temporary crowns or dentures are worn during this period to maintain function and aesthetics.", duration: "3-6 months" },
          { number: 4, title: "Permanent Crown Placement", description: "Once integration is complete, we create and attach your custom-made crown. Your new tooth is now fully functional and looks completely natural.", duration: "1-2 hours" },
        ]}
      />

      <BenefitsSection title="Why Choose Dental Implants?" benefits={benefits} bgColor="bg-background" />

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

      <FAQSection title="Frequently Asked Questions About Dental Implants" faqs={faqs} />
    </div>
  );
}
