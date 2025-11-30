
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Phone, MessageCircle, CheckCircle2, Star, ShieldCheck } from "lucide-react";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Nemanja Kukoljac",
      title: "Specialist Dentist | Implantologist | Oral Surgery & Cosmetic Dentistry",
      bio: "With over 10 years of experience, Dr. Kukoljac specializes in implantology, oral surgery, and cosmetic dentistry. He continually enhances his skills through advanced training and emerges at the forefront of modern dental techniques."
    },
    {
      name: "Dr. Upasana Khemka",
      title: "Oral & Maxillofacial Surgeon | Cosmetic & Restorative Dentistry",
      bio: "With nearly two decades of experience, Dr. Khemka excels in complex oral surgical procedures, full-mouth rehabilitations, and smile makeovers, delivering both functionality and beauty with precision and care."
    },
    {
      name: "Dr. Amelio Tommaso",
      title: "General Dentist | Implantologist | Dental Prosthetics & Aesthetic Dentistry",
      bio: "A veteran dentist with a technical background, Dr. Tommaso specializes in aesthetic restorations, implantology, and prosthetics. His dual skill set ensures that each treatment is both functional and beautifully designed."
    },
    {
      name: "Dr. Youssef Saweres",
      title: "General Dentist | Advanced Veneers & Holistic Aesthetic Smile Solutions",
      bio: "An expert in smile design and cosmetic dentistry, Dr. Saweres brings advanced certification in veneers and aesthetic solutions, blending functional precision with holistic smile transformations."
    },
    {
      name: "Dr. Mileva Karabasil Jovanovic",
      title: "General Dentist | BDS, MDS (Orthodontics), PhD",
      bio: "With over 20 years of experience across Serbia, Japan, and the UAE, Dr. Mileva combines orthodontic expertise and scientific rigor. She provides compassionate, personalized care and excels in restorative and cosmetic dentistry."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">TEAM HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Meet Our Dentists <span className="text-primary">in Dubai</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              Experienced, caring, and internationally trained dental specialists for your smile.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book Consultation on WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 relative h-[400px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">CLINIC/TEAM INTRO IMAGE</span>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Your Smile Team - Expertise You Can Trust</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our team comprises highly qualified dental specialists, trained internationally, dedicated to providing personalized, gentle, and advanced care in a comfortable environment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-2 font-medium text-secondary">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> International Experts
                 </div>
                 <div className="flex items-center gap-2 font-medium text-secondary">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Gentle Care
                 </div>
                 <div className="flex items-center gap-2 font-medium text-secondary">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Advanced Tech
                 </div>
                 <div className="flex items-center gap-2 font-medium text-secondary">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> Multilingual Team
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Credentials & Certifications */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Professional Credentials & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "International Training", desc: "BDS, MDS, PhD qualifications from leading dental schools worldwide" },
              { title: "Specialist Certifications", desc: "Advanced credentials in Implantology, Orthodontics, and Oral Surgery" },
              { title: "Continuous Education", desc: "Active participation in dental conferences, workshops, and research" },
              { title: "5.0★ Patient Rated", desc: "Trusted by 500+ patients with exceptional clinical outcomes" },
              { title: "Digital Dentistry Experts", desc: "Certified in CAD/CAM, 3D implant planning, and advanced diagnostics" },
              { title: "Multilingual Care", desc: "Fluent in English, Russian, German, and other languages for patient comfort" },
            ].map((cred, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all space-y-3">
                <h3 className="text-lg font-bold">{cred.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet Our Specialists */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">Our Dental Experts in Dubai</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {doctors.map((doctor, i) => (
              <div key={i} className="flex flex-col md:flex-row bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border group">
                <div className="w-full md:w-1/3 h-[300px] md:h-auto bg-muted flex items-center justify-center shrink-0">
                  <span className="text-muted-foreground font-medium">DOCTOR PORTRAIT</span>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-secondary">{doctor.name}</h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">{doctor.title}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {doctor.bio}
                  </p>
                  <div className="pt-2">
                    <Button variant="link" className="p-0 h-auto text-secondary font-bold hover:text-primary group-hover:translate-x-1 transition-transform">
                      Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Our Team Stands Out */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Patients Choose Our Dentists</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {[
               "Advanced international training & specializations",
               "Expertise across cosmetic, restorative, orthodontic, and surgical disciplines",
               "Compassionate, multilingual patient care",
               "Use of cutting-edge digital technology for treatments"
             ].map((benefit, i) => (
               <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                  <h3 className="font-medium leading-snug text-lg">{benefit}</h3>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Patient Reviews */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-12">What Patients Say About Our Dentists</h2>
          
          <div className="max-w-3xl mx-auto bg-card p-10 rounded-2xl shadow-sm border border-border relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground p-3 rounded-full">
                <MessageCircle className="h-6 w-6" />
             </div>
             <div className="flex justify-center gap-1 mb-6 pt-4">
               {[1,2,3,4,5].map(star => <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />)}
             </div>
             <blockquote className="text-xl md:text-2xl font-serif italic text-secondary mb-6 leading-relaxed">
               “From the moment I walked in, I felt welcomed... the treatment was painless and precise.”
             </blockquote>
             <cite className="not-italic font-bold text-muted-foreground block text-lg">– Marko</cite>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10">
            <div className="w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">CONSULTATION IMAGE</span>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">Book a Consultation with Our Expert Dentists</h2>
              <p className="text-muted-foreground text-lg">
                Choose the right specialist for your smile goals—cosmetic, restorative, surgical, or orthodontic. Schedule your consultation today.
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
