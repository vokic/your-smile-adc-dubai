import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export default function Orthodontics() {
  const treatments = [
    { title: "Metal Braces", description: "Reliable and effective", icon: "⚙️" },
    { title: "Ceramic Braces", description: "Discreet and tooth-colored", icon: "🎨" },
    { title: "Invisalign & Clear Aligners", description: "Virtually invisible and removable", icon: "✨" },
    { title: "Retainers", description: "Maintain results long-term", icon: "🔒" },
    { title: "Space Maintainers", description: "Guide proper tooth eruption for kids", icon: "👶" },
    { title: "Bite Correction", description: "Treat overbite, underbite, crossbite", icon: "🧩" }
  ];

  const benefits = [
    "15 years of experience",
    "Certified Invisalign providers",
    "Digital scans, no messy impressions",
    "5.0 ★ rated clinic",
    "Personalized treatment plans"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">ORTHODONTICS HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Orthodontics & Clear Aligners in <span className="text-primary">Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Braces and Invisalign treatments for straighter teeth and a healthier smile.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-5 w-5" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Orthodontics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Straight Teeth, Healthy Bite</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Orthodontics corrects misaligned teeth and bite issues, improving both function and aesthetics. Our treatments combine modern technology and personalized care for every patient.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Orthodontic Options in Dubai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:shadow-md transition-all space-y-4">
                <div className="text-4xl">{treatment.icon}</div>
                <h3 className="text-xl font-bold text-secondary">{treatment.title}</h3>
                <p className="text-muted-foreground">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Dubai's Orthodontic Experts</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-white/10 rounded-lg border border-white/20">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Real Orthodontic Results</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See transformations achieved with braces and Invisalign in Dubai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl overflow-hidden bg-muted border border-border h-[350px] flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground">BEFORE & AFTER {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invisalign Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Invisalign Dubai</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Clear aligners that are removable, comfortable, and nearly invisible. Designed for teens and adults who want discreet treatment without the commitment of traditional braces.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With digital scans and custom-made aligners, you'll see results faster with minimal impact on your daily life.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Your Invisalign Consultation
              </Button>
            </div>
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">INVISALIGN IMAGE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Get Started with Your Perfect Smile</h2>
            <p className="text-muted-foreground text-lg">
              Schedule a free consultation today and let our orthodontic experts design a treatment plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-4 w-4" />
                Book Consultation
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
