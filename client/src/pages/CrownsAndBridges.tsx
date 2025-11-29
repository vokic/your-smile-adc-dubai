import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export default function CrownsAndBridges() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">CROWNS & BRIDGES HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Crowns & Bridges - Restore Your <span className="text-primary">Smile Function</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Strengthen damaged teeth and replace missing ones with natural-looking crowns and bridges.
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

      {/* Crowns Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">CROWN IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Dental Crowns</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A crown is a tooth-shaped cap that covers a damaged, discolored, or weakened tooth. Crowns restore strength, function, and aesthetics while protecting your natural tooth.
              </p>
              <div className="space-y-3">
                {["Protect weak teeth", "Cover discoloration", "Restore function", "Improve appearance", "Last 10-15 years"].map((item) => (
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

      {/* Bridges Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:order-reverse">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">BRIDGE IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Dental Bridges</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A bridge replaces one or more missing teeth by anchoring to adjacent teeth. It restores your bite, prevents remaining teeth from shifting, and improves your smile.
              </p>
              <div className="space-y-3">
                {["Fill missing gaps", "Restore smile appearance", "Maintain facial structure", "Fixed permanent solution", "Improved chewing"].map((item) => (
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

      {/* Crown & Bridge Options */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Our Crown & Bridge Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Porcelain Crowns", desc: "Most natural-looking, stain-resistant, perfect for front teeth" },
              { title: "Metal Crowns", desc: "Extremely durable, best for back teeth, long-lasting" },
              { title: "Porcelain-Fused Metal", desc: "Strong and aesthetic, great all-around option" },
              { title: "Traditional Bridges", desc: "Anchored to adjacent teeth, proven and reliable" },
              { title: "Implant Bridges", desc: "Supported by implants, no need for adjacent teeth" },
              { title: "Cantilever Bridges", desc: "For missing teeth at the end of a row" }
            ].map((option, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-xl border border-white/20 space-y-2">
                <h3 className="font-bold text-lg">{option.title}</h3>
                <p className="text-gray-200 text-sm">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">The Crown & Bridge Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Preparation", desc: "Tooth is shaped and impression taken" },
              { num: "2", title: "Temporary", desc: "Temporary crown placed while restoration is made" },
              { num: "3", title: "Fabrication", desc: "Custom crown or bridge created in lab" },
              { num: "4", title: "Placement", desc: "Final restoration cemented in place" }
            ].map((step) => (
              <div key={step.num} className="p-6 bg-card rounded-xl border border-border space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">{step.num}</div>
                <h3 className="font-bold text-secondary">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Restore Your Smile Today</h2>
            <p className="text-muted-foreground text-lg">
              Schedule a consultation to discuss crowns and bridges and find the best solution for your dental needs.
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
