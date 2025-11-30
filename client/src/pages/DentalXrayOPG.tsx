import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";

export default function DentalXrayOPG() {
  const features = [
    "Low-radiation digital X-rays",
    "Full-mouth OPG scans",
    "3D cone beam imaging",
    "Instant results",
    "Detailed treatment planning",
    "Patient safety first"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">XRAY/OPG HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Digital X-Ray & OPG Imaging - Advanced <span className="text-primary">Diagnostics</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Precise, low-radiation imaging for accurate diagnosis and treatment planning.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book Imaging
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">XRAY TECHNOLOGY IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Advanced Imaging Technology</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our state-of-the-art digital X-ray and OPG systems provide crystal-clear images with minimal radiation exposure. We use the latest technology to diagnose conditions accurately and plan treatments effectively.
              </p>
              <div className="space-y-3">
                {["Low radiation exposure", "Instant digital results", "High resolution images", "Comfortable for patients", "Better treatment planning"].map((item) => (
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

      {/* Imaging Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Our Imaging Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border space-y-4">
              <h3 className="text-xl font-bold text-secondary">Digital X-Rays</h3>
              <p className="text-muted-foreground">Individual tooth and bite-wing X-rays for detailed examination of specific areas</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Periapical (PA) X-rays</li>
                <li>✓ Bite-wing X-rays</li>
                <li>✓ Panoramic views</li>
              </ul>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border space-y-4">
              <h3 className="text-xl font-bold text-secondary">OPG (Orthopantomogram)</h3>
              <p className="text-muted-foreground">Full-mouth X-ray showing all teeth, jawbone, and surrounding structures in one image</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Complete mouth overview</li>
                <li>✓ Wisdom tooth assessment</li>
                <li>✓ Bone evaluation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Use These Technologies */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Why Advanced Imaging Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Early Detection", desc: "Identify cavities, infections, and bone loss before they become serious" },
              { title: "Accurate Diagnosis", desc: "Get precise diagnoses with high-quality images and expert analysis" },
              { title: "Treatment Planning", desc: "Plan complex treatments like implants and surgery with confidence" },
              { title: "Patient Safety", desc: "Low-radiation technology protects your health during imaging" },
              { title: "Faster Results", desc: "Digital imaging provides instant results without waiting" },
              { title: "Better Outcomes", desc: "Accurate imaging leads to better treatment results and fewer complications" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-xl border border-white/20 space-y-2">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Get Precise Imaging Today</h2>
            <p className="text-muted-foreground text-lg">
              Schedule your X-ray or OPG imaging and get accurate diagnostics with our advanced technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
                Book Imaging
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
