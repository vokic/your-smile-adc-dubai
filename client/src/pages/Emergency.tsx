import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, AlertCircle } from "lucide-react";

export default function Emergency() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">EMERGENCY DENTISTRY HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Emergency Dental Care - 24/7 <span className="text-primary">Support</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Immediate relief for dental emergencies. We're here when you need us most.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 gap-2">
                <AlertCircle className="h-5 w-5" />
                Emergency Call
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2">
                <Phone className="h-5 w-5" />
                +971 52 330 1356
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Common Dental Emergencies We Treat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Severe Toothache", desc: "Sudden, intense pain requiring immediate attention" },
              { title: "Broken/Chipped Tooth", desc: "Damaged teeth requiring urgent repair or restoration" },
              { title: "Knocked Out Tooth", desc: "Lost tooth that may be saved if treated quickly" },
              { title: "Lost Filling", desc: "Exposed tooth requiring immediate protection" },
              { title: "Abscess/Infection", desc: "Painful infection requiring urgent treatment" },
              { title: "Injured Gums", desc: "Bleeding, swelling, or trauma to soft tissues" }
            ].map((emergency, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border space-y-3 hover:shadow-md transition-all">
                <AlertCircle className="h-6 w-6 text-red-500" />
                <h3 className="text-lg font-bold text-secondary">{emergency.title}</h3>
                <p className="text-muted-foreground text-sm">{emergency.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">EMERGENCY CARE IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Why Choose Us for Emergencies?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We understand that dental emergencies can't wait. Our experienced team is ready to provide immediate relief and expert care whenever you need it.
              </p>
              <div className="space-y-3">
                {["24/7 availability", "Fast response time", "Expert dentists", "State-of-the-art equipment", "Immediate pain relief", "Comprehensive solutions"].map((item) => (
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

      {/* Emergency Response */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Our Emergency Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Call Immediately", desc: "Contact us as soon as possible with your emergency" },
              { num: "2", title: "Describe Symptoms", desc: "Tell us what happened and your pain level" },
              { num: "3", title: "Get Advice", desc: "Receive immediate guidance on first aid" },
              { num: "4", title: "See Dentist", desc: "Get scheduled for urgent treatment appointment" }
            ].map((step) => (
              <div key={step.num} className="p-6 bg-white/10 rounded-xl border border-white/20 space-y-2">
                <div className="w-10 h-10 rounded-full bg-primary text-secondary font-bold flex items-center justify-center">{step.num}</div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="text-gray-200 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">First Aid for Dental Emergencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Severe Toothache",
                tips: ["Rinse with warm water", "Use dental floss to remove debris", "Take pain reliever", "Contact us for appointment"]
              },
              {
                title: "Knocked Out Tooth",
                tips: ["Find the tooth", "Hold by crown, not root", "Rinse gently if needed", "Place in milk, see us immediately"]
              },
              {
                title: "Broken Tooth",
                tips: ["Rinse mouth with warm water", "Apply cold compress", "Avoid hard foods", "Contact us urgently"]
              },
              {
                title: "Lost Filling",
                tips: ["Avoid chewing on that side", "Gently clean area", "Use temporary filling", "Schedule appointment soon"]
              }
            ].map((emergency, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border space-y-3">
                <h3 className="font-bold text-secondary text-lg">{emergency.title}</h3>
                <ul className="space-y-2">
                  {emergency.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-red-50 border-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Need Emergency Care?</h2>
            <p className="text-muted-foreground text-lg">
              Don't wait. Contact us immediately at our emergency number and get the care you need right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-red-500 hover:bg-red-600 text-white gap-2 text-lg" size="lg">
                <Phone className="h-5 w-5" />
                Call Emergency: +971 52 330 1356
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
