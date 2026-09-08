import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, MessageCircle, Clock, ShieldCheck, CreditCard, Sparkles, Stethoscope, Home as HomeIcon } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { GoogleRatingBanner } from "@/components/GoogleRatingBanner";
import { SmileTransformations } from "@/components/SmileTransformations";
import {
  REGULAR_PHONE,
  REGULAR_PHONE_DISPLAY,
  CLINIC_ADDRESS,
  CLINIC_EMAIL,
  CLINIC_MAPS_URL,
  CLINIC_SPECIALTIES,
  WORKING_HOURS_SUMMARY,
  whatsappLink,
} from "@/lib/constants";
import { SERVICES, DOCTORS, BLOG_POSTS } from "@/lib/content";
import { SEO } from "@/components/SEO";
import { jsonLdLocalBusiness, jsonLdOrganization } from "@/lib/seo";
import { track } from "@/lib/analytics";
import { IMG } from "@/lib/images";

const SERVICE_ICONS = [Sparkles, Stethoscope, ShieldCheck, Sparkles, Sparkles, HomeIcon];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Dentist in Dubai JLT for Complex Cases - Implants, Veneers, Emergency"
        description="Your Smile Advanced Dental Center in Dubai JLT specialises in complex cases: emergency care, Hollywood smile, full-mouth implants, no-prep ceramic veneers and crowns. Rated 5.0 on Google."
        path="/"
        jsonLd={[jsonLdLocalBusiness(), jsonLdOrganization()]}
      />

      {/* 1. Hero */}
      <section className="relative min-h-[80vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <img
          src={IMG.clinicSmile.src}
          srcSet={IMG.clinicSmile.srcSet}
          sizes="100vw"
          alt={IMG.clinicSmile.alt}
          className="absolute inset-0 h-full w-full object-cover object-right"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/25" />

        <div className="container relative mx-auto px-4 flex items-center min-h-[80vh] py-16">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white">
              <ShieldCheck className="h-4 w-4 text-primary" /> Specialists in complex cases · Jumeirah Lake Towers, Dubai
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
              We solve the cases <span className="text-primary italic">other clinics can't</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
              Emergency dentistry, Hollywood smiles and complete smile transformations with implants, veneers, crowns and bridges — planned digitally, delivered by an international team.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-white/90 text-sm md:text-base">
              {CLINIC_SPECIALTIES.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {s}
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-16 font-bold shadow-xl shadow-primary/20 transition-transform hover:scale-105 rounded-full">
                <a
                  href={whatsappLink("Hello, I'd like to book a consultation at Your Smile Advanced Dental Center.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { source: "home-hero" })}
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> {t("home.bookAppointment")}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary text-lg px-8 h-16 rounded-full">
                <Link href="/emergency">Dental emergency? Start here</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Smile Transformations (before services, per owner) */}
      <SmileTransformations limit={4} />

      {/* 3. Services */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">What We Do Best</h2>
              <p className="text-white/70 text-lg">Complex cases first. Everything else, under the same roof in JLT.</p>
            </div>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-secondary rounded-full" asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <Link
                  key={service.link}
                  href={service.link}
                  className="group rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 p-7 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-primary/15 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{service.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Doctors */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Meet Our Dentists in Dubai</h2>
            <p className="text-muted-foreground text-lg">
              An international team with extensive experience in implantology, oral surgery, orthodontics, cosmetic and restorative dentistry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {DOCTORS.slice(0, 4).map((doc) => (
              <Link key={doc.slug} href="/doctors" className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
                <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-primary/10 to-muted">
                  <img src={doc.photo} alt={doc.name} className="h-full w-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4 md:p-5 text-center">
                  <h3 className="text-base md:text-lg font-bold text-secondary mb-1">{doc.name}</h3>
                  <p className="text-primary font-medium text-xs uppercase tracking-wider">{doc.role}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="rounded-full font-bold px-10" asChild>
              <Link href="/doctors">Meet the whole team ({DOCTORS.length} dentists)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <TestimonialCarousel />

      {/* 6. Google rating */}
      <GoogleRatingBanner />

      {/* 7. Insurance & Payment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">Insurance & Flexible Payment</h2>
          <p className="text-muted-foreground text-lg mb-8">
            We work with major UAE dental insurance providers and offer flexible payment plans for larger treatments. Tell us your insurer when you book and we will confirm your coverage before your visit.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-secondary">
            <span className="inline-flex items-center gap-2 border px-5 py-2.5 rounded-full font-medium"><ShieldCheck className="h-5 w-5 text-primary" /> Insurance accepted</span>
            <span className="inline-flex items-center gap-2 border px-5 py-2.5 rounded-full font-medium"><CreditCard className="h-5 w-5 text-primary" /> Instalment plans</span>
          </div>
        </div>
      </section>

      {/* 8. Blog */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="space-y-4 flex-1">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Dental Health Insights & Tips</h2>
              <p className="text-white/70 text-lg">Read our latest articles about dental care, smile transformations, and oral health.</p>
            </div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold whitespace-nowrap">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((article) => (
              <Link key={article.title} href="/blog" className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 rounded-xl p-6 transition-all group cursor-pointer block">
                <span className="inline-block text-xs font-bold text-primary bg-primary/20 px-3 py-1 rounded-full mb-4">{article.category}</span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-xs text-white/60">{article.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Location & Contact */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-white shadow-xl border border-border">
            <div className="p-8 md:p-12 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Find Our Dental Clinic in JLT</h2>
              <p className="text-muted-foreground text-lg">HDS Business Centre, Cluster M, Jumeirah Lake Towers — a short walk from DMCC Metro Station.</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary">Address</h3>
                    <p className="text-muted-foreground">{CLINIC_ADDRESS}</p>
                    <a href={CLINIC_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline">Open in Google Maps</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary">Working Hours</h3>
                    <ul className="text-muted-foreground">
                      {WORKING_HOURS_SUMMARY.map((h) => (
                        <li key={h.label}>
                          <span className="font-medium text-secondary">{h.label}:</span> {h.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-secondary">Contact</h3>
                    <p className="text-muted-foreground"><a href={`tel:${REGULAR_PHONE}`} className="hover:text-primary">{REGULAR_PHONE_DISPLAY}</a></p>
                    <p className="text-muted-foreground"><a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-primary">{CLINIC_EMAIL}</a></p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold" asChild>
                <Link href="/contact">Send us a Message</Link>
              </Button>
            </div>

            <div className="h-[400px] lg:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=HDS+Business+Centre,+Cluster+M,+Jumeirah+Lake+Towers,+Dubai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Your Smile Advanced Dental Center location - HDS Business Centre, Cluster M, Jumeirah Lake Towers, Dubai"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
