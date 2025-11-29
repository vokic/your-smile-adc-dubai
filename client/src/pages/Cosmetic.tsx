import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export default function Cosmetic() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">COSMETIC DENTISTRY HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Cosmetic Dentistry - Transform Your <span className="text-primary">Smile</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              From veneers to smile makeovers, we create beautiful, confident smiles tailored to you.
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

      {/* Cosmetic Treatments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Our Cosmetic Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Veneers",
                desc: "Custom porcelain veneers create a flawless, natural smile in just 2 visits"
              },
              {
                title: "Teeth Whitening",
                desc: "Professional whitening treatments brighten your smile safely and effectively"
              },
              {
                title: "Smile Makeover",
                desc: "Complete smile transformation combining veneers, whitening, and more"
              },
              {
                title: "Bonding",
                desc: "Tooth-colored resin repairs chips, gaps, and discoloration instantly"
              },
              {
                title: "Gum Contouring",
                desc: "Reshape gums for a more proportionate, attractive smile"
              },
              {
                title: "Smile Design",
                desc: "Digital smile design to see your results before treatment begins"
              }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border space-y-4 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-secondary">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cosmetic */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">COSMETIC RESULTS IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Why Choose Our Cosmetic Dentistry?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our cosmetic dentists combine artistic vision with technical expertise to create smiles that are both beautiful and natural-looking.
              </p>
              <div className="space-y-3">
                {["Expert cosmetic dentists", "Digital smile design", "Natural-looking results", "Latest techniques", "5.0★ patient reviews", "Personalized approach"].map((item) => (
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

      {/* Transformation Showcase */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Real Smile Transformations</h2>
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

      {/* Digital Smile Design */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:order-reverse">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">DIGITAL SMILE DESIGN IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Digital Smile Design</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                See exactly what your smile will look like before treatment begins. Our digital smile design technology allows you to preview your cosmetic transformation and make informed decisions.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Digital Smile Design Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Discover Your Best Smile</h2>
            <p className="text-muted-foreground text-lg">
              Schedule a cosmetic consultation today and let us help you achieve the smile of your dreams.
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
