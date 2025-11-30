import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Plane, Users, Clock, CheckCircle2, Star } from "lucide-react";
import { Link } from "wouter";

export default function DentalTourism() {
  const tourismPackages = [
    {
      title: "All-Inclusive Smile Packages",
      desc: "Complete treatment plans with accommodation and travel assistance for international patients. Tailored packages combining cosmetic, restorative, and surgical treatments.",
      features: ["Customized treatment plans", "Hotel coordination", "Airport transfers", "Interpreter services", "Post-treatment follow-up"]
    },
    {
      title: "VIP Patient Experience",
      desc: "Personalized care, flexible scheduling, and professional translation services. Premium accommodations and concierge support throughout your dental journey.",
      features: ["Priority scheduling", "Private consultation rooms", "Multilingual staff", "Concierge services", "Premium accommodations"]
    },
    {
      title: "Medical Tourism Coordination",
      desc: "Seamless coordination with hotels, transportation, and post-treatment support. We handle everything so you can focus on recovery.",
      features: ["Hotel partnerships", "Transportation arranged", "Recovery support", "Follow-up videocalls", "Companion services"]
    }
  ];

  const benefits = [
    { icon: <Plane className="h-8 w-8 text-primary" />, title: "Easy Travel", desc: "We coordinate flights, hotels, and transfers seamlessly." },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Multilingual Team", desc: "English, Arabic, Russian, and more languages available." },
    { icon: <Clock className="h-8 w-8 text-primary" />, title: "Flexible Scheduling", desc: "Convenient appointment times for international visitors." },
    { icon: <CheckCircle2 className="h-8 w-8 text-primary" />, title: "Quality Assurance", desc: "Same world-class standards as our local patients." }
  ];

  const countries = [
    { name: "United Kingdom", patients: "500+" },
    { name: "United States", patients: "400+" },
    { name: "Canada", patients: "300+" },
    { name: "Australia", patients: "250+" },
    { name: "Europe", patients: "600+" },
    { name: "Middle East", patients: "800+" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">DENTAL TOURISM HERO</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Dental Tourism in Dubai - <span className="text-primary">World-Class Care + Premium Experience</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Combine your smile transformation with a luxury Dubai vacation. All-inclusive packages for international patients.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-5 w-5" />
                Get Your Travel Package
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dental Tourism */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Why Patients Choose Our Dental Tourism</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Experience world-class dentistry while enjoying Dubai's luxury hospitality and stunning attractions.</p>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="mb-6 p-4 rounded-full bg-primary/5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tourism Packages */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Our Dental Tourism Packages</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tourismPackages.map((pkg, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all p-8 space-y-6">
                <h3 className="text-2xl font-bold text-primary">{pkg.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pkg.desc}</p>
                <div className="space-y-3">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-secondary font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">We Serve Patients Worldwide</h2>
            <p className="text-lg text-gray-200">Successfully treated thousands of international patients from around the globe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all text-center">
                <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                <p className="text-lg text-primary font-semibold">{country.patients} Patients</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Your Dental Tourism Journey</h2>
              <p className="text-lg text-muted-foreground">From consultation to recovery, we guide you through every step.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                { step: "1", title: "Consultation", desc: "Virtual or in-person consultation to discuss your smile goals and treatment plan." },
                { step: "2", title: "Planning", desc: "We arrange flights, accommodation, transfers, and create your personalized treatment timeline." },
                { step: "3", title: "Arrival", desc: "Welcome assistance, hotel check-in, and relaxation before your treatment begins." },
                { step: "4", title: "Treatment", desc: "World-class dental care with world-class comfort and hospitality." },
                { step: "5", title: "Recovery", desc: "Post-treatment support with comfortable accommodations and our care team on call." },
                { step: "6", title: "Follow-Up", desc: "Remote check-ins and videocalls to ensure your smile stays perfect long after you leave." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-primary/10">
            <div className="w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">TOURISM IMAGE</span>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Ready to Transform Your Smile?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join thousands of international patients who've discovered the perfect combination of premium dental care and Dubai luxury. Let us create your all-inclusive dental tourism package today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="rounded-full gap-2">
                  <Phone className="h-5 w-5" />
                  +971 58 828 2432
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
