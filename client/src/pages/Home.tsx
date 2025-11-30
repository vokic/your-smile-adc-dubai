import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, MapPin, Phone, MessageCircle, Clock, CreditCard, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { AnimatedStats } from "@/components/AnimatedStats";
import { TrustBadges } from "@/components/TrustBadges";
import { GoogleReviewsCarousel } from "@/components/GoogleReviewsCarousel";

export default function Home() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformations = [
    { before: "BEFORE VENEERS", after: "AFTER VENEERS" },
    { before: "BEFORE IMPLANTS", after: "AFTER IMPLANTS" },
    { before: "BEFORE INVISALIGN", after: "AFTER INVISALIGN" },
    { before: "BEFORE MAKEOVER", after: "AFTER MAKEOVER" },
    { before: "BEFORE WHITENING", after: "AFTER WHITENING" },
  ];

  const handlePrev = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : transformations.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev < transformations.length - 1 ? prev + 1 : 0));
  };

  const current = transformations[currentSlide];
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] md:h-[85vh] w-full overflow-hidden bg-muted pt-10 md:pt-0">
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground/20 text-9xl font-bold select-none">
          HERO IMAGE
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
              Trusted Dental Clinic in Dubai for <span className="text-primary italic">{t('home.heroTitleAccent')}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
              {t('home.heroSubtitle')}
            </h2>
            <div className="pt-6">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-16 font-bold shadow-xl shadow-primary/20 transition-transform hover:scale-105 rounded-full">
                <a href="https://wa.me/971585828257" target="_blank" rel="noopener noreferrer">
                  {t('home.bookAppointment')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Animated Stats */}
      <AnimatedStats 
        title="Trusted by Thousands Across Dubai & UAE"
        stats={[
          { label: "Happy Patients", value: "500", suffix: "+" },
          { label: "Years Experience", value: "15", suffix: "+" },
          { label: "Success Rate", value: "95", suffix: "%" },
          { label: "Treatments Completed", value: "5000", suffix: "+" }
        ]}
      />

      {/* 3. Trust Badges */}
      <TrustBadges title="Why We're Among Dubai's Best Dentists" bgColor="bg-background" />

      {/* 4. Our Services */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Comprehensive Dental Services in Dubai</h2>
              <p className="text-white/70 text-lg">World-class treatments designed for your health and beauty.</p>
            </div>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-secondary rounded-full" asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Veneers in Dubai", desc: "Achieve a flawless smile with natural-looking porcelain or composite veneers.", link: "/veneers", image: "VENEERS PROCEDURE" },
              { title: "Dental Implants in Dubai", desc: "Restore missing teeth permanently with advanced implant systems.", link: "/implants", image: "IMPLANT SURGERY" },
              { title: "Orthodontics & Invisalign", desc: "Straighten your teeth discreetly with clear aligners.", link: "/orthodontics", image: "ORTHODONTICS" },
              { title: "Teeth Whitening in Dubai", desc: "Safe, fast, and effective whitening treatments.", link: "/whitening", image: "WHITENING LAMP" },
              { title: "Crowns & Bridges", desc: "Restore damaged or missing teeth with custom-made restorations.", link: "/crowns-bridges", image: "CROWNS BRIDGE" },
              { title: "Cosmetic Dentistry", desc: "Complete smile transformations combining multiple treatments.", link: "/cosmetic", image: "SMILE DESIGN" },
            ].map((service, i) => (
              <Link key={i} href={service.link} className="group rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 flex flex-col md:flex-row">
                {/* Image - 1/3 on left (or full width on mobile) */}
                <div className="w-full md:w-1/3 h-48 md:h-auto bg-muted/40 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 shrink-0">
                  <span className="text-muted-foreground text-sm font-medium text-center px-2">{service.image}</span>
                </div>
                
                {/* Content - 2/3 on right */}
                <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-white transition-colors flex-1">{service.title}</h3>
                    <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Smile Transformations Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Smile Transformations</h2>
            <p className="text-muted-foreground text-lg">Real results from real patients. Scroll through our transformation gallery to see the impact of our treatments.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Before & After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className="rounded-xl overflow-hidden border-2 border-secondary/20 bg-muted h-72 md:h-96 flex items-center justify-center relative">
                <span className="text-muted-foreground font-bold text-sm">{current.before}</span>
                <div className="absolute top-4 left-4 bg-secondary/40 text-secondary px-3 py-1 rounded-full text-xs font-bold">
                  BEFORE
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden border-2 border-primary/20 bg-muted h-72 md:h-96 flex items-center justify-center relative">
                <span className="text-muted-foreground font-bold text-sm">{current.after}</span>
                <div className="absolute top-4 left-4 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
                  AFTER
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <Button 
                onClick={handlePrev} 
                size="sm" 
                className="rounded-full bg-secondary hover:bg-secondary/90 text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-1.5">
                {transformations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`rounded-full transition-all ${
                      currentSlide === idx ? "bg-primary h-2 w-8" : "bg-primary/30 hover:bg-primary/50 h-2 w-2"
                    }`}
                    data-testid={`gallery-dot-${idx}`}
                  />
                ))}
              </div>

              <Button 
                onClick={handleNext} 
                size="sm" 
                className="rounded-full bg-secondary hover:bg-secondary/90 text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full font-semibold" asChild>
                <Link href="/gallery">View Full Gallery with Patient Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Doctors */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Meet Our Expert Dentists in Dubai</h2>
            <p className="text-muted-foreground text-lg">Our team of internationally trained dentists specializes in cosmetic dentistry, dental implants, orthodontics, and family care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Dr. Sarah Johnson", role: "Cosmetic Specialist" },
              { name: "Dr. Michael Chen", role: "Implantologist" },
              { name: "Dr. Emily Roberts", role: "Orthodontist" },
            ].map((doc, i) => (
              <div key={i} className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
                <div className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">DOCTOR IMAGE</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-secondary mb-1">{doc.name}</h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-wider">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 rounded-full">
              <a href="https://wa.me/971585828257" target="_blank" rel="noopener noreferrer">
                Book Your Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Patient Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 8. Google Reviews Carousel */}
      <GoogleReviewsCarousel 
        reviews={[
          { id: "1", text: "Best experience ever! The veneers look so natural. Highly recommend Dr. Sarah.", author: "Google Patient", initials: "GP", verified: true },
          { id: "2", text: "Painless implant procedure. The team is so professional and kind.", author: "Google Patient", initials: "GP", verified: true },
          { id: "3", text: "My kids actually love coming to the dentist now. Great pediatric care!", author: "Google Patient", initials: "GP", verified: true },
          { id: "4", text: "Outstanding service! Invisalign treatment exceeded all my expectations.", author: "Google Patient", initials: "GP", verified: true },
          { id: "5", text: "Dr. Nemanja is absolutely brilliant. Very professional and caring.", author: "Google Patient", initials: "GP", verified: true },
        ]}
        title="★5.0 Google Reviews - Dental Clinic Dubai"
        subtitle="Our dental clinic in Dubai is rated ★5.0 on Google, trusted by patients for veneers, implants, Invisalign, and family care."
      />

      {/* 9. Insurance & Payment */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">Dental Insurance & Flexible Payment Plans in Dubai</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            We accept major UAE dental insurance providers and offer flexible installment plans for cosmetic treatments.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-xl font-bold text-secondary border px-6 py-3 rounded-full">
              <CreditCard className="h-6 w-6" /> Tabby
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-secondary border px-6 py-3 rounded-full">
              <CreditCard className="h-6 w-6" /> Tamara
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-secondary border px-6 py-3 rounded-full">
              <ShieldCheck className="h-6 w-6" /> AXA
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-secondary border px-6 py-3 rounded-full">
              <ShieldCheck className="h-6 w-6" /> MetLife
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-secondary border px-6 py-3 rounded-full">
              <ShieldCheck className="h-6 w-6" /> NextCare
            </div>
          </div>
        </div>
      </section>

      {/* 10. Blog Section with "View All Articles" Button */}
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
            {[
              { title: "5 Tips for Maintaining Your Veneers", date: "Nov 28, 2024", category: "Cosmetic Care" },
              { title: "Dental Implants: A Lifetime Investment", date: "Nov 25, 2024", category: "Implants" },
              { title: "Invisalign vs Traditional Braces", date: "Nov 22, 2024", category: "Orthodontics" },
            ].map((article, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 rounded-xl p-6 transition-all group cursor-pointer">
                <div className="mb-4">
                  <span className="inline-block text-xs font-bold text-primary bg-primary/20 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-white/60">{article.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Locations & Contact */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-white shadow-xl border border-border">
            <div className="p-8 md:p-12 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Find Our Dental Clinic in Dubai</h2>
              <p className="text-muted-foreground text-lg">Conveniently located in Dubai with easy access, free parking, and nearby metro stations.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-secondary">Address</h4>
                    <p className="text-muted-foreground">HDS Business Centre, Jumeirah Lake Towers, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-secondary">Working Hours</h4>
                    <p className="text-muted-foreground">Mon – Sat: 9:00 AM – 9:00 PM <br/> Sun: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-secondary">Contact</h4>
                    <p className="text-muted-foreground">+971 58 828 2432</p>
                    <p className="text-muted-foreground">info@yoursmileadcdubai.com</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-bold" asChild>
                <Link href="/contact">Send us a Message</Link>
              </Button>
            </div>

            <div className="h-[400px] rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0524823!2d55.14507!3d25.08543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c8f8f8f8f%3A0x12345678!2sHDS%20Business%20Centre%2C%20Jumeirah%20Lake%20Towers%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
