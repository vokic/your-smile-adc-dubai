import { CheckCircle2, Scan } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ServiceHero } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { Visual } from "@/components/Visual";
import { jsonLdBreadcrumb, jsonLdService } from "@/lib/seo";

const IMAGING = [
  { title: "IOPA (Intraoral X-Ray)", desc: "Detailed image of one or two teeth and the surrounding bone.", uses: ["Cavities between teeth", "Root canal assessment", "Bone level around a tooth"] },
  { title: "OPG (Panoramic X-Ray)", desc: "One image of all teeth, both jaws and the sinuses.", uses: ["Wisdom tooth position", "Overall treatment planning", "Bone evaluation"] },
  { title: "CBCT (3D Cone Beam)", desc: "Three-dimensional scan showing the exact structure and dimensions of bone.", uses: ["Implant planning", "Sinus lift and bone grafting", "Complex root anatomy"] },
  { title: "Cephalometric X-Ray", desc: "Side-view image of the skull and jaws used in orthodontics.", uses: ["Braces and aligner planning", "Bite and jaw relationship", "Growth assessment in children"] },
];

export default function DentalXrayOPG() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Digital X-Ray, OPG & CBCT", path: "/xray-opg" },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Dental X-Ray, OPG, CBCT & Cephalometric Imaging in Dubai"
        description="In-clinic digital dental imaging in Dubai JLT: IOPA, OPG panoramic, CBCT 3D and cephalometric X-rays with low radiation for precise diagnosis and treatment planning."
        path="/xray-opg"
        jsonLd={[
          jsonLdService({ name: "Digital Dental Imaging in Dubai", description: "IOPA, OPG, CBCT and cephalometric X-rays.", path: "/xray-opg", serviceType: "Diagnostic imaging" }),
          jsonLdBreadcrumb(crumbs),
        ]}
      />
      <ServiceHero
        title="Digital X-Ray, OPG & CBCT Imaging in Dubai"
        subtitle="Precise, low-radiation imaging — IOPA, OPG, CBCT and cephalometric — for accurate diagnosis and treatment planning, all in-clinic."
        breadcrumbs={crumbs}
        treatment="dental imaging"
        primaryButtonText="Book Imaging"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Visual icon={Scan} className="h-[350px]" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Advanced Imaging Technology</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our digital X-ray, OPG and CBCT systems produce crystal-clear images with minimal radiation. Having all four types of imaging in-clinic means diagnosis and planning happen in one visit — no referrals to an outside imaging centre.
              </p>
              <div className="space-y-3">
                {["Low radiation exposure", "Instant digital results", "High-resolution 2D and 3D images", "Comfortable for patients", "Precise planning for implants, surgery and orthodontics"].map((item) => (
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Our Imaging Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {IMAGING.map((i) => (
              <div key={i.title} className="p-8 bg-card rounded-xl border border-border space-y-4">
                <h3 className="text-xl font-bold text-secondary">{i.title}</h3>
                <p className="text-muted-foreground">{i.desc}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {i.uses.map((u) => <li key={u}>✓ {u}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Why Advanced Imaging Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Early Detection", desc: "Identify cavities, infections and bone loss before they become serious" },
              { title: "Accurate Diagnosis", desc: "High-quality images and expert analysis" },
              { title: "Treatment Planning", desc: "Plan implants, surgery and orthodontics with confidence" },
              { title: "Patient Safety", desc: "Low-radiation technology protects your health" },
              { title: "Faster Results", desc: "Digital imaging provides instant results" },
              { title: "Better Outcomes", desc: "Accurate imaging means fewer surprises and complications" },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white/10 rounded-xl border border-white/20 space-y-2">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Get Precise Imaging Today" text="IOPA, OPG, CBCT or cephalometric — schedule your imaging and get an accurate diagnosis in one visit." treatment="dental imaging" primaryLabel="Book Imaging" bgColor="bg-background" />
    </div>
  );
}
