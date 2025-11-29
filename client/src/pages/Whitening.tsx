import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export default function Whitening() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">TEETH WHITENING HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Professional Teeth Whitening - Brighten Your <span className="text-primary">Smile</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Safe, effective professional whitening treatments that give you results fast.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-5 w-5" />
                Book Whitening
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Whitening */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">WHITENING PROCESS IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Professional vs. At-Home Whitening</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Professional whitening delivers faster, more dramatic results than over-the-counter products. Our dentists use clinical-grade whitening agents that are safe and effective.
              </p>
              <div className="space-y-3">
                {["Faster results", "Stronger formulation", "Professional supervision", "Safer for enamel", "Better results", "Long-lasting effects"].map((item) => (
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

      {/* Whitening Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Our Whitening Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border space-y-4">
              <h3 className="text-xl font-bold text-secondary">In-Office Whitening</h3>
              <p className="text-muted-foreground">Professional whitening done in our clinic for immediate, dramatic results</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Takes 1 hour</p>
                <p>✓ Dramatic whitening</p>
                <p>✓ Professional supervision</p>
                <p>✓ Best for quick results</p>
              </div>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border space-y-4">
              <h3 className="text-xl font-bold text-secondary">Take-Home Kits</h3>
              <p className="text-muted-foreground">Custom-fitted trays for whitening at home over several days</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Custom trays</p>
                <p>✓ Convenient</p>
                <p>✓ Gradual whitening</p>
                <p>✓ Great maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Whitening Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl overflow-hidden bg-white/10 border border-white/20">
                <div className="h-[300px] bg-muted/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-muted-foreground">BEFORE & AFTER {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Maintain Your White Smile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { title: "Avoid Staining Foods", desc: "Reduce coffee, tea, red wine, and dark-colored foods" },
              { title: "Use a Whitening Toothpaste", desc: "Maintain results with professional-grade whitening toothpaste" },
              { title: "Regular Touch-Ups", desc: "Schedule touch-up treatments every 6-12 months" },
              { title: "Practice Good Hygiene", desc: "Brush twice daily and floss to keep teeth bright" }
            ].map((tip, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border space-y-3">
                <h3 className="font-bold text-secondary text-lg">{tip.title}</h3>
                <p className="text-muted-foreground text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Brighten Your Smile Today</h2>
            <p className="text-muted-foreground text-lg">
              Schedule your professional whitening treatment and get a brighter smile in just one hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="h-4 w-4" />
                Book Whitening
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
