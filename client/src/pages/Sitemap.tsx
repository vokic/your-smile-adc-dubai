import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Grid2X2, FileText } from "lucide-react";

export default function Sitemap() {
  const sections = [
    {
      title: "Main Pages",
      icon: FileText,
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "FAQ", path: "/faq" },
      ]
    },
    {
      title: "Services",
      icon: FileText,
      links: [
        { name: "All Services", path: "/services" },
        { name: "Veneers", path: "/veneers" },
        { name: "Dental Implants", path: "/implants" },
        { name: "Orthodontics", path: "/orthodontics" },
        { name: "Teeth Whitening", path: "/whitening" },
        { name: "Crowns & Bridges", path: "/crowns-bridges" },
        { name: "Cosmetic Dentistry", path: "/cosmetic" },
        { name: "General & Preventive", path: "/general-preventive" },
        { name: "Dental Surgery", path: "/dental-surgery" },
        { name: "Digital X-Ray & OPG", path: "/xray-opg" },
        { name: "Emergency Care", path: "/emergency" },
      ]
    },
    {
      title: "Gallery & Team",
      icon: FileText,
      links: [
        { name: "Smile Transformation Gallery", path: "/gallery" },
        { name: "Our Doctors", path: "/doctors" },
        { name: "Dental Tourism", path: "/dental-tourism" },
      ]
    },
    {
      title: "Resources",
      icon: FileText,
      links: [
        { name: "Blog & News", path: "/blog" },
      ]
    },
    {
      title: "Legal",
      icon: FileText,
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Sitemap
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse all pages and services available on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-8 border border-border hover:border-primary/40 transition-all shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
                        >
                          <span className="text-primary">›</span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">Looking for something specific?</h2>
              <p className="text-muted-foreground mb-6">
                If you can't find what you're looking for, please reach out to our team. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full font-semibold" asChild>
                  <a href="https://wa.me/971585828257" target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
