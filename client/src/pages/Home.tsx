
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, MapPin, Phone, MessageCircle, Clock, CreditCard, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beforeAfterSlides = [
    { title: "Porcelain Veneers Transformation", before: "BEFORE VENEERS", after: "AFTER VENEERS" },
    { title: "Dental Implants Restoration", before: "BEFORE IMPLANTS", after: "AFTER IMPLANTS" },
    { title: "Invisalign Alignment", before: "BEFORE INVISALIGN", after: "AFTER INVISALIGN" },
    { title: "Complete Smile Makeover", before: "BEFORE MAKEOVER", after: "AFTER MAKEOVER" },
  ];

  const handlePrev = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : beforeAfterSlides.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev < beforeAfterSlides.length - 1 ? prev + 1 : 0));
  };

  const current = beforeAfterSlides[currentSlide];
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground/20 text-9xl font-bold select-none">
          HERO IMAGE
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
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

      {/* 2. Why Choose Us */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Why We’re Among the Best Dentists in Dubai?</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Star className="h-10 w-10 text-primary" />, 
                title: "15+ Years Experience", 
                desc: "Decades of trusted expertise in Dubai" 
              },
              { 
                icon: <ShieldCheck className="h-10 w-10 text-primary" />, 
                title: "Internationally Trained", 
                desc: "Team of expert certified dentists" 
              },
              { 
                icon: <CheckCircle2 className="h-10 w-10 text-primary" />, 
                title: "Latest Technology", 
                desc: "Pain-free & advanced treatments" 
              },
              { 
                icon: <MessageCircle className="h-10 w-10 text-primary" />, 
                title: "5,000+ Smiles", 
                desc: "Transformed lives across the UAE" 
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-6 p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Services */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Comprehensive Dental Services in Dubai</h2>
              <p className="text-white/70 text-lg">World-class treatments designed for your health and beauty.</p>
            </div>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-secondary rounded-full rounded-full" asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Veneers in Dubai",
                desc: "Achieve a flawless smile with natural-looking porcelain or composite veneers, designed for long-lasting results.",
                link: "/veneers"
              },
              {
                title: "Dental Implants in Dubai",
                desc: "Restore missing teeth permanently with advanced implant systems, ensuring strength and natural aesthetics.",
                link: "/implants"
              },
              {
                title: "Orthodontics & Invisalign",
                desc: "Straighten your teeth discreetly with clear aligners, the most popular orthodontic solution for adults and teens in Dubai.",
                link: "/orthodontics"
              },
              {
                title: "Teeth Whitening in Dubai",
                desc: "Safe, fast, and effective whitening treatments for a brighter, more confident smile.",
                link: "/whitening"
              },
              {
                title: "Crowns & Bridges",
                desc: "Restore damaged or missing teeth with custom-made restorations for strength and beauty.",
                link: "/crowns-bridges"
              },
              {
                title: "Cosmetic Dentistry",
                desc: "Complete smile transformations combining multiple treatments for your dream smile.",
                link: "/cosmetic"
              },
              {
                title: "General & Preventive",
                desc: "Check-ups, cleanings, and preventive care to keep your smile healthy for life.",
                link: "/general-preventive"
              },
              {
                title: "Dental Surgery",
                desc: "Expert surgical treatments including wisdom teeth extraction and bone grafts.",
                link: "/dental-surgery"
              },
              {
                title: "Digital X-Ray & OPG",
                desc: "Advanced low-radiation imaging for precise diagnosis and treatment planning.",
                link: "/xray-opg"
              },
              {
                title: "Emergency Dentist Dubai",
                desc: "24/7 emergency dental care for pain relief, broken teeth, and urgent treatments.",
                link: "/emergency"
              },
            ].map((service, i) => (
              <Link key={i} href={service.link} className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-white transition-colors">{service.title}</h3>
                  <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-white/70 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Before & After */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Smile Transformations</h2>
            <p className="text-muted-foreground text-lg">
              Real results from real patients. Discover the impact of our treatments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Carousel */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-muted h-72 flex items-center justify-center border-2 border-secondary/20">
                  <span className="text-muted-foreground font-bold text-sm">{current.before}</span>
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">BEFORE</div>
                </div>
                
                {/* After */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-muted h-72 flex items-center justify-center border-2 border-primary/20">
                  <span className="text-muted-foreground font-bold text-sm">{current.after}</span>
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">AFTER</div>
                </div>
              </div>

              {/* Title */}
              <p className="text-center text-sm font-semibold text-primary">{current.title}</p>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-6">
                <Button
                  onClick={handlePrev}
                  size="sm"
                  className="rounded-full bg-secondary hover:bg-secondary/90 text-white"
                  data-testid="button-prev-slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex gap-1.5">
                  {beforeAfterSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`rounded-full transition-all ${
                        currentSlide === idx
                          ? "bg-primary h-2 w-8"
                          : "bg-primary/30 hover:bg-primary/50 h-2 w-2"
                      }`}
                      data-testid={`button-slide-${idx}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  size="sm"
                  className="rounded-full bg-secondary hover:bg-secondary/90 text-white"
                  data-testid="button-next-slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="text-center pt-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full font-semibold" asChild>
                  <Link href="/gallery">View Full Gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Doctors */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Meet Our Expert Dentists in Dubai</h2>
            <p className="text-muted-foreground text-lg">
              Our team of internationally trained dentists in Dubai specializes in cosmetic dentistry, dental implants, orthodontics, and family care. Each doctor combines years of experience with a passion for creating healthy, confident smiles.
            </p>
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
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 rounded-full rounded-full">
              <a href="https://wa.me/971585828257" target="_blank" rel="noopener noreferrer">
                Book Your Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Reviews */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">5.0 ★ Rated Dental Clinic in Dubai</h2>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Our dental clinic in Dubai is rated ★5.0 on Google, trusted by patients for veneers, implants, Invisalign, and family care. Read real reviews and discover why we’re among the top-rated dentists in Dubai.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
              {[
                "Best experience ever! The veneers look so natural. Highly recommend Dr. Sarah.",
                "Painless implant procedure. The team is so professional and kind.",
                "My kids actually love coming to the dentist now. Great pediatric care!"
              ].map((review, i) => (
                <div key={i} className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/10 text-left">
                  <p className="italic text-white/90 mb-4">"{review}"</p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                      GP
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Google Patient</p>
                      <p className="text-xs text-white/50">Verified Review</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 font-bold mt-8 rounded-full">
              <a href="https://wa.me/971585828257" target="_blank" rel="noopener noreferrer">
                Book Your Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Insurance & Payment */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">Dental Insurance & Flexible Payment Plans in Dubai</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            We accept major UAE dental insurance providers and offer flexible installment plans for cosmetic treatments such as veneers, dental implants, Invisalign, and whitening. Affordable dental care in Dubai has never been easier.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for Insurance Logos - using text for now as icons */}
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

      {/* 8. Locations & Contact */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-3xl overflow-hidden bg-white shadow-xl border border-border">
            <div className="p-8 md:p-12 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Find Our Dental Clinic in Dubai</h2>
              <p className="text-muted-foreground text-lg">
                Conveniently located in Dubai with easy access, free parking, and nearby metro stations. Visit our dental clinic for veneers, implants, Invisalign, and family dentistry.
              </p>
              
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

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 rounded-full">
                  <a href="https://wa.me/971585828257" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Book on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 rounded-full rounded-full">
                  <a href="tel:+971585828257" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0524823!2d55.14507!3d25.08543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c8f8f8f8f%3A0x12345678!2sHDS%20Business%20Centre%2C%20Jumeirah%20Lake%20Towers%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "400px" } as React.CSSProperties} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
            
          </div>
        </div>
      </section>

      {/* 9. Newsletter / Blog CTA */}
      <section className="py-24 bg-secondary text-white">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Dental Blog & Expert Tips from Our Dubai Dentists</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
              Stay updated with the latest dental tips, cosmetic dentistry trends, and guides on veneers, implants, Invisalign, and whitening in Dubai.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
               {[
                 "Everything You Need to Know About Veneers",
                 "Invisalign vs. Braces: What's Right for You?",
                 "5 Tips for Long-Lasting Teeth Whitening"
               ].map((title, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="h-40 bg-white/10 rounded-lg mb-4 w-full overflow-hidden flex items-center justify-center text-white/30 font-medium">
                       BLOG THUMB
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-sm text-white/50">Read Article &rarr;</p>
                 </div>
               ))}
            </div>

            <div className="max-w-md mx-auto bg-white p-2 rounded-full flex shadow-lg">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-transparent border-none px-6 py-2 text-secondary placeholder:text-gray-400 focus:outline-none"
              />
              <Button className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">Subscribe</Button>
            </div>
         </div>
      </section>
    </div>
  );
}
