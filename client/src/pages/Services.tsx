
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, MessageCircle, Star } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const serviceCategories = [
    {
      title: "Cosmetic Dentistry",
      items: [
        { name: "Veneers", desc: "Achieve a flawless smile with porcelain or composite veneers.", href: "/veneers" },
        { name: "Teeth Whitening", desc: "Brighten your smile safely and effectively.", href: "/whitening" },
        { name: "Smile Makeover", desc: "Transform your entire smile with customized treatments.", href: "/cosmetic" }
      ]
    },
    {
      title: "Restorative Dentistry",
      items: [
        { name: "Dental Implants", desc: "Permanent replacements for missing teeth.", href: "/implants" },
        { name: "Crowns & Bridges", desc: "Strengthen damaged teeth and replace missing ones.", href: "/crowns-bridges" },
        { name: "Expert Dental Surgery", desc: "Wisdom tooth extraction, gum surgery, bone grafting.", href: "/dental-surgery" }
      ]
    },
    {
      title: "Orthodontics",
      items: [
        { name: "Braces & Clear Aligners", desc: "Metal, ceramic, and Invisalign options for all ages.", href: "/orthodontics" },
        { name: "Bite Correction", desc: "Treat overbites, underbites, and crossbites.", href: "/orthodontics" }
      ]
    },
    {
      title: "Preventive Dentistry",
      items: [
        { name: "Routine Check-Ups", desc: "Regular exams to maintain oral health.", href: "/general-preventive" },
        { name: "Professional Cleanings", desc: "Scaling & polishing for healthy gums and fresh breath.", href: "/general-preventive" },
        { name: "Gum Disease Treatment", desc: "Early detection and therapy for healthy gums.", href: "/general-preventive" }
      ]
    },
    {
      title: "Specialized Diagnostics",
      items: [
        { name: "Digital X-Ray & OPG", desc: "Low-radiation imaging for accurate treatment planning.", href: "/xray-opg" }
      ]
    },
    {
      title: "Dental Tourism",
      items: [
        { name: "All-Inclusive Smile Packages", desc: "Complete treatment plans with accommodation and travel assistance for international patients.", href: "/dental-tourism" },
        { name: "VIP Patient Experience", desc: "Personalized care, flexible scheduling, and professional translation services.", href: "/dental-tourism" },
        { name: "Medical Tourism Coordination", desc: "Seamless coordination with hotels, transportation, and post-treatment support.", href: "/dental-tourism" }
      ]
    },
    {
      title: "Emergency Dentistry",
      items: [
        { name: "24/7 Emergency Care", desc: "Immediate relief for toothaches, injuries, and trauma.", href: "/emergency" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">SERVICES HERO</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Comprehensive Dental Services <span className="text-primary">in Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              From preventive care to advanced cosmetic treatments, we provide complete dental solutions for a healthy, confident smile.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book Your Consultation on WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Our Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-muted flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">WHY CHOOSE US IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Your Trusted Dental Clinic in Dubai</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With 15+ years of experience, internationally trained dentists, and ★5.0 patient ratings, we provide a full range of dental services under one roof. Whether you need a simple check-up or a full smile makeover, our team ensures safe, comfortable, and long-lasting results.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">Internationally Trained</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">Latest Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">5.0★ Patient Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Services Overview */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Explore Our Dental Treatments in Dubai</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From cosmetic enhancements to restorative procedures and specialized dental tourism packages, we offer comprehensive solutions for every smile.</p>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceCategories.map((category, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-xl font-bold text-primary border-b border-primary/20 pb-3">{category.title}</h3>
                <div className="space-y-6">
                  {category.items.map((item, j) => (
                    <div key={j} className="mb-8">
                      <Link href={item.href}>
                        <a className="block group p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                          <div className="flex justify-between items-start gap-3">
                            <h4 className="font-semibold text-secondary group-hover:text-primary transition-colors">{item.name}</h4>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{item.desc}</p>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits of Choosing Us */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Why Patients Trust Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "15+ years of dental expertise",
                "State-of-the-art technology (CAD/CAM, 3D implant planning)",
                "Gentle, pain-free procedures",
                "Multilingual, family-friendly team",
                "★5.0 Google Rated Dental Clinic in Dubai",
                "Comprehensive care under one roof"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                  <h3 className="font-medium leading-snug">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Patient Testimonials Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">What Our Patients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Thousands of happy patients in Dubai have trusted us with their smiles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Absolutely the best clinic in Dubai. The veneers changed my life!", author: "Sarah M." },
              { text: "Professional, clean, and very friendly staff. Highly recommended.", author: "James D." },
              { text: "I was afraid of dentists, but Dr. Ahmed made me feel so comfortable.", author: "Layla K." }
            ].map((review, i) => (
              <div key={i} className="p-8 bg-card rounded-xl shadow-sm border border-border relative">
                <div className="flex justify-center gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />)}
                </div>
                <p className="italic text-secondary mb-4">"{review.text}"</p>
                <p className="font-bold text-primary text-sm">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10">
            <div className="w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">CTA IMAGE</span>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Book Your Dental Appointment in Dubai Today</h2>
              <p className="text-muted-foreground text-lg">
                From preventive check-ups to advanced smile makeovers, our team is ready to provide the dental care you deserve. Schedule your consultation now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto rounded-full">
                  <MessageCircle className="h-5 w-5" />
                  Book on WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto rounded-full">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
