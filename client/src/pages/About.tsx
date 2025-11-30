import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle2, Star } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      title: "Comprehensive Care",
      description: "Full suite of dental services, from prevention to advanced surgery."
    },
    {
      title: "24/7 Emergency Coverage",
      description: "We ensure urgent dental support, even on weekends and holidays."
    },
    {
      title: "Digital & Safe Diagnostics",
      description: "Advanced X-ray and OPG technology for precise, comfortable screenings."
    },
    {
      title: "International Expertise",
      description: "Our specialists bring global training and high standards across orthodontics, surgery, and esthetics."
    },
    {
      title: "Patient-Centered Approach",
      description: "We prioritize your comfort with tailored plans and gentle treatments."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Book Your Visit",
      description: "Online, via phone, or walk-in with your preferred date and insurance ready."
    },
    {
      number: "2",
      title: "Visit & Consult",
      description: "Personalized consultation in a comfortable environment."
    },
    {
      number: "3",
      title: "Receive Free Smile Plan",
      description: "Transparent proposal tailored to your goals."
    },
    {
      number: "4",
      title: "Enjoy Your New Smile",
      description: "Transformational care from start to finish."
    }
  ];

  const testimonials = [
    {
      text: "The team's professionalism and kindness made my treatment smooth and comfortable. My smile has never looked better.",
      author: "Miloš",
      title: "Software Engineer"
    },
    {
      text: "Best dental clinic in Dubai. The care and attention to detail is exceptional.",
      author: "Sarah",
      title: "Business Owner"
    },
    {
      text: "I was nervous about my procedure, but the doctors made me feel completely at ease.",
      author: "Ahmed",
      title: "Marketing Manager"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">CLINIC SCENE IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              About Your Smile Advanced <span className="text-primary">Dental Center</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Experienced, internationally-certified dental professionals dedicated to your confidence and care.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Meet Our Doctors
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Book Your Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">TEAM IMAGE</span>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Personalized Dental Care from a Trusted Team</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team - including dentists, hygienists, assistants, and support staff, combines international training with a patient-first philosophy. We deliver high-quality, safe care tailored to each individual's needs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 15 years of experience serving Dubai's diverse community, we've built a reputation for excellence, compassion, and transformational results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="space-y-4 p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-2xl font-serif font-bold text-primary">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become a superior and trusted healthcare provider delivering excellence to all community members in Dubai.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-2xl font-serif font-bold text-primary">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fostering innovation, continuous learning, and international-standard care through excellence and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">What Makes Us Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-all space-y-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All-in-One Destination */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">All-in-One Premium Dental Destination</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From routine checkups, cosmetic enhancements like veneers and whitening, to implants, orthodontics, and full-mouth rehab, we offer seamless, high-end dental care under one roof.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                No referrals needed. No jumping between clinics. Just comprehensive, world-class dental care delivered by specialists who know you.
              </p>
              <Link href="/services">
                <a className="inline-block">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Explore Our Services
                  </Button>
                </a>
              </Link>
            </div>
            <div className="h-[350px] rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-muted-foreground">SERVICES DIAGRAM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Your Smile Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Your Smile Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4 p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-secondary">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12 text-center">Hear From Our Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border space-y-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="italic text-secondary text-lg leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-secondary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Join Thousands of Happy Smiles in Dubai</h2>
            <p className="text-muted-foreground text-lg">
              Experience exceptional dental care with our expert team. Book your free consultation today and unlock your best smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
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
