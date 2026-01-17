import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { EmergencyConfirmModal } from "@/components/EmergencyConfirmModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@/components/ui/spinner";
import { apiRequest } from "@/lib/queryClient";
import { EMERGENCY_PHONE, EMERGENCY_PHONE_DISPLAY, REGULAR_PHONE_DISPLAY, CLINIC_EMAIL, CLINIC_ADDRESS, WORKING_HOURS } from "@/lib/constants";
import { usePageTitle } from "@/hooks/usePageTitle";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  usePageTitle({
    title: "Contact Us",
    description: "Get in touch with Your Smile Advanced Dental Center in Dubai. Book an appointment, ask questions, or reach out for emergency dental care.",
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const handleEmergencyConfirm = () => {
    window.location.href = `tel:${EMERGENCY_PHONE}`;
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with actual API endpoint when available
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // In production, use: await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Emergency Modal */}
      <EmergencyConfirmModal
        isOpen={showEmergencyModal}
        onClose={() => setShowEmergencyModal(false)}
        onConfirm={handleEmergencyConfirm}
        phoneNumber={EMERGENCY_PHONE_DISPLAY}
      />

      {/* 1. Hero Block */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted" aria-hidden="true">
          <span className="text-4xl font-bold text-muted-foreground/20">CONTACT HERO IMAGE</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
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
                      <a href={`tel:${REGULAR_PHONE_DISPLAY.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">{REGULAR_PHONE_DISPLAY}</a>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowEmergencyModal(true)}
                    className="w-full flex items-start gap-4 p-5 bg-red-50 rounded-xl border-2 border-red-200 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <Phone className="h-6 w-6 text-red-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="font-bold text-red-700">Emergency Phone (24/7)</p>
                      <p className="text-red-600 hover:text-red-700 transition-colors font-medium">{EMERGENCY_PHONE_DISPLAY}</p>
                      <p className="text-xs text-red-500 mt-1">Click for emergency details</p>
                    </div>
                  </button>
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">Email</p>
                      <a href={`mailto:${CLINIC_EMAIL}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">{CLINIC_EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">Address</p>
                      <p className="text-muted-foreground">{CLINIC_ADDRESS}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Clinic Hours</h2>
                <div className="bg-muted/30 rounded-xl p-8 border border-border">
                  <div className="space-y-4">
                    {WORKING_HOURS.map((item, i) => (
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" className="h-10 rounded-full" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="+971..." className="h-10 rounded-full" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" className="h-10 rounded-full" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you?" className="min-h-[120px] resize-none rounded-2xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-11 rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner className="mr-2 h-4 w-4" />
                          Sending...
                        </>
                      ) : (
                        "Submit Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Map Section */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-3">Find Us Easily</h2>
                  <p className="text-muted-foreground">Located at HDS Business Centre in JLT, easily accessible by car or public transport.</p>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.0524823!2d55.14507!3d25.08543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c8f8f8f8f%3A0x12345678!2sHDS%20Business%20Centre%2C%20Jumeirah%20Lake%20Towers%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000" 
                  width="100%" 
                  height="350px" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Your Smile Advanced Dental Center Location - HDS Business Centre, Jumeirah Lake Towers, Dubai"
                  aria-label="Interactive map showing the location of Your Smile Advanced Dental Center at HDS Business Centre, Jumeirah Lake Towers, Dubai"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
