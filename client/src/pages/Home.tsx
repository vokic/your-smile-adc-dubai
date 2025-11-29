import heroImage from '@assets/generated_images/luxury_dental_clinic_reception_area_with_modern_lighting_and_gold_accents.png';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury Dental Clinic Reception" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Experience <span className="text-primary italic">Luxury</span> <br/>
              Dental Care in Dubai
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-lg">
              World-class dentistry in a state-of-the-art facility. We design smiles that change lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-secondary text-lg px-8 h-14">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <CheckCircle2 className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-lg">Expert Team</h3>
                <p className="text-sm opacity-90">Internationally qualified specialists</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <CheckCircle2 className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-lg">Latest Technology</h3>
                <p className="text-sm opacity-90">Advanced digital dentistry</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <CheckCircle2 className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-lg">Premium Comfort</h3>
                <p className="text-sm opacity-90">Relaxing, pain-free experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Content to enable scrolling */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Comprehensive Dental Solutions</h2>
            <p className="text-muted-foreground text-lg">
              From routine check-ups to complex full-mouth reconstructions, our team of experts provides the highest standard of care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cosmetic Dentistry", desc: "Veneers, Whitening, Smile Design" },
              { title: "Implantology", desc: "Single Implants, All-on-4, Bone Grafting" },
              { title: "Orthodontics", desc: "Invisalign, Metal Braces, Retainers" },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-xl border bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                  <ArrowRight className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
