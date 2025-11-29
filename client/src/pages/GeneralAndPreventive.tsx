import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export default function GeneralAndPreventive() {
  const services = [
    { title: "Routine Check-Ups", description: "Regular exams to catch issues early" },
    { title: "Professional Cleanings", description: "Scaling & polishing for healthy gums" },
    { title: "Gum Disease Treatment", description: "Early detection and therapy" },
    { title: "Fluoride Treatment", description: "Strengthen enamel and prevent decay" },
    { title: "Sealants", description: "Protective coating for back teeth" },
    { title: "Bite Analysis", description: "Identify and correct bite problems" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">PREVENTIVE CARE HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              General & Preventive Dentistry - Your Health <span className="text-primary">Comes First</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Regular check-ups and preventive care keep your smile healthy for life.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-5 w-5" />
                Schedule Check-Up
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Prevention */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Prevention is Better Than Cure</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Regular preventive care catches problems early before they become expensive and painful. Our comprehensive approach ensures your teeth and gums stay healthy for life.
              </p>
              <div className="space-y-3">
                {["Catch issues early", "Prevent tooth decay", "Maintain healthy gums", "Save money long-term", "Keep your natural smile"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">PREVENTIVE CARE IMAGE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Our Preventive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Schedule */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Recommended Visit Schedule</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <h3 className="text-lg font-bold mb-2">Every 6 Months</h3>
              <p className="text-gray-200">Regular check-ups and professional cleanings for most patients</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <h3 className="text-lg font-bold mb-2">Every 3 Months</h3>
              <p className="text-gray-200">Patients with gum disease or specific risk factors</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl border border-white/20">
              <h3 className="text-lg font-bold mb-2">As Recommended</h3>
              <p className="text-gray-200">Children and teenagers may require more frequent visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Keep Your Smile Healthy</h2>
            <p className="text-muted-foreground text-lg">
              Schedule your preventive appointment today and let our team help you maintain excellent oral health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-4 w-4" />
                Book Check-Up
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
