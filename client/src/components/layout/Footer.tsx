import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmergencyConfirmModal } from "@/components/EmergencyConfirmModal";
import { EMERGENCY_PHONE, EMERGENCY_PHONE_DISPLAY, REGULAR_PHONE, REGULAR_PHONE_DISPLAY, CLINIC_EMAIL, CLINIC_ADDRESS, WORKING_HOURS, SOCIAL_LINKS } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@/components/ui/spinner";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function Footer() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const { toast } = useToast();

  const newsletterForm = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleEmergencyClick = () => {
    setShowEmergencyModal(true);
  };

  const handleConfirmEmergency = () => {
    setShowEmergencyModal(false);
    window.location.href = `tel:${EMERGENCY_PHONE}`;
  };

  const onNewsletterSubmit = async (data: NewsletterFormValues) => {
    setIsSubmittingNewsletter(true);
    try {
      // TODO: Replace with actual API endpoint when available
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Subscribed successfully!",
        description: "You'll receive dental tips and offers in your inbox.",
      });
      newsletterForm.reset();
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* 1. Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Your Smile</h3>
            <div className="flex items-start gap-3 text-sm opacity-90">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <p>{CLINIC_ADDRESS}</p>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p><a href={`tel:${REGULAR_PHONE}`} className="hover:text-primary transition-colors">{REGULAR_PHONE_DISPLAY}</a></p>
                <button
                  onClick={handleEmergencyClick}
                  className="text-xs text-red-400 mt-1 hover:text-red-300 transition-colors font-semibold underline cursor-pointer"
                  data-testid="button-footer-emergency"
                >
                  Emergency: {EMERGENCY_PHONE_DISPLAY}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-primary transition-colors">{CLINIC_EMAIL}</a>
            </div>
          </div>

          {/* 2. Working Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm opacity-90">
              {WORKING_HOURS.map((item, i) => (
                <div key={i} className={`flex justify-between ${i < WORKING_HOURS.length - 1 ? 'border-b border-white/10 pb-2' : ''} ${item.hours === "Closed" ? "text-primary font-medium" : ""}`}>
                  <span>{item.day === "Monday" ? "Monday – Friday" : item.day === "Saturday" ? "Saturday" : item.day === "Sunday" ? "Sunday" : ""}</span>
                  {item.day === "Monday" && <span>{item.hours}</span>}
                  {item.day === "Saturday" && <span>{item.hours}</span>}
                  {item.day === "Sunday" && <span>{item.hours}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/about" className="hover:text-primary transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/doctors" className="hover:text-primary transition-colors cursor-pointer">Our Doctors</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors cursor-pointer">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* 4, 5, 6. Socials, Reviews, Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
               <h4 className="text-lg font-bold">Stay Connected</h4>
               <div className="flex gap-4">
                 <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                 <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                 <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                 <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
               </div>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
              </div>
              <p className="text-xs opacity-80">"Best dental experience in Dubai!" - Google Reviews</p>
            </div>

            <div className="space-y-2">
              <h5 className="text-sm font-medium">Subscribe for dental tips & offers</h5>
              <Form {...newsletterForm}>
                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="flex gap-2">
                  <FormField
                    control={newsletterForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input 
                            placeholder="Email address" 
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="bg-primary hover:bg-primary/90 rounded-full"
                    disabled={isSubmittingNewsletter}
                  >
                    {isSubmittingNewsletter ? (
                      <Spinner className="h-4 w-4" />
                    ) : (
                      <Mail className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* 7. Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Your Smile Advanced Dental Center. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors cursor-pointer">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Emergency Confirmation Modal */}
      <EmergencyConfirmModal
        isOpen={showEmergencyModal}
        onClose={() => setShowEmergencyModal(false)}
        onConfirm={handleConfirmEmergency}
        phoneNumber={EMERGENCY_PHONE_DISPLAY}
      />
    </footer>
  );
}
