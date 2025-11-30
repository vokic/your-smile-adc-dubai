import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Block */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted">
          <span className="text-4xl font-bold text-muted-foreground/20">CONTACT HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Contact Your Smile <span className="text-primary">Advanced Dental Center</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">
              We're here for your dental needs - whether you're booking an appointment or need emergency care.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Details & Hours */}
            <div className="space-y-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">Phone (Booking)</p>
                      <a href="tel:+971585828257" className="text-muted-foreground hover:text-primary transition-colors font-medium">+971 58 582 82 57</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                    <Phone className="h-6 w-6 text-red-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">Emergency Phone</p>
                      <a href="tel:+971523301356" className="text-muted-foreground hover:text-primary transition-colors font-medium">+971 52 330 1356</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">Email</p>
                      <a href="mailto:info@yoursmileadcdubai.com" className="text-muted-foreground hover:text-primary transition-colors font-medium">info@yoursmileadcdubai.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">Address</p>
                      <p className="text-muted-foreground">HDS Business Centre, Jumeirah Lake Towers (JLT), Dubai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Clinic Hours</h2>
                <div className="bg-muted/30 rounded-xl p-8 border border-border">
                  <div className="space-y-4">
                    {[
                      { day: "Monday", hours: "12 PM – 9 PM" },
                      { day: "Tuesday", hours: "9 AM – 6 PM" },
                      { day: "Wednesday", hours: "12 PM – 9 PM" },
                      { day: "Thursday", hours: "9 AM – 6 PM" },
                      { day: "Friday", hours: "Closed" },
                      { day: "Saturday", hours: "12 PM – 9 PM" },
                      { day: "Sunday", hours: "9 AM – 6 PM" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-border/50 last:border-0 pb-3 last:pb-0">
                        <span className="font-medium text-secondary">{item.day}</span>
                        <span className={`text-sm font-medium ${item.hours === "Closed" ? "text-red-500" : "text-muted-foreground"}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form & Map */}
            <div className="space-y-12">
              {/* Contact Form */}
              <div className="space-y-6 bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-border">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-3">Send Us a Message</h2>
                  <p className="text-muted-foreground">Questions or want to book? Fill out the form - we'll respond within 24 hours.</p>
                </div>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                      <Input id="name" placeholder="Your full name" className="h-10" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-secondary">Phone</label>
                      <Input id="phone" placeholder="+971..." className="h-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" className="h-10" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px] resize-none" />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-11 rounded-full">
                    Submit Message
                  </Button>
                </form>
              </div>

              {/* Map Section */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-3">Find Us Easily</h2>
                  <p className="text-muted-foreground">Located at HDS Business Centre in JLT, easily accessible by car or public transport.</p>
                </div>
                <div className="h-[350px] w-full rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center relative">
                  <span className="text-xl font-bold text-muted-foreground">GOOGLE MAP EMBED</span>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                    <MapPin className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
