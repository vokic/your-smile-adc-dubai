import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { SEO } from "@/components/SEO";
import { ALL_SUB_SERVICES, CATEGORIES, subServicePath } from "@/content/services";
import type { CategorySlug } from "@/content/services";

const MAIN = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Doctors", path: "/doctors" },
  { name: "Smile Transformation Gallery", path: "/gallery" },
  { name: "Blog & News", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

const TREATMENTS = [
  { name: "All Services", path: "/services" },
  { name: "Emergency Dentist", path: "/emergency" },
  { name: "Dental Implants", path: "/implants" },
  { name: "Veneers", path: "/veneers" },
  { name: "Cosmetic Dentistry", path: "/cosmetic" },
  { name: "Digital X-Ray, OPG & CBCT", path: "/xray-opg" },
  { name: "Private At-Home Visit", path: "/at-home" },
  { name: "Dental Tourism", path: "/dental-tourism" },
];

const CATEGORY_ORDER: CategorySlug[] = ["dental-surgery", "crowns-bridges", "restorative", "orthodontics", "whitening", "general-preventive"];

export default function Sitemap() {
  const categorySections = CATEGORY_ORDER.map((slug) => {
    const cat = CATEGORIES[slug];
    return {
      title: cat.name,
      links: [
        { name: `${cat.shortName} overview`, path: cat.path },
        ...ALL_SUB_SERVICES.filter((s) => s.category === slug).map((s) => ({ name: s.name, path: subServicePath(s) })),
      ],
    };
  });

  const sections = [
    { title: "Main Pages", links: MAIN },
    { title: "Treatments", links: TREATMENTS },
    ...categorySections,
    { title: "Legal", links: [{ name: "Privacy Policy", path: "/privacy" }, { name: "Terms & Conditions", path: "/terms" }] },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO title="Sitemap" description="Complete list of pages on the Your Smile Advanced Dental Center Dubai website." path="/sitemap" />
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">Sitemap</h1>
            <p className="text-muted-foreground text-lg">Browse all pages and services available on our website.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl p-8 border border-border hover:border-primary/40 transition-all shadow-sm hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-bold text-secondary">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        <Link href={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                          <span className="text-primary">›</span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Looking for something specific?</h2>
              <p className="text-muted-foreground mb-6">If you can't find what you're looking for, please reach out to our team. We're here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full font-semibold" asChild>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
