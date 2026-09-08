import { useState } from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmergencyConfirmModal } from "@/components/EmergencyConfirmModal";
import {
  EMERGENCY_PHONE,
  EMERGENCY_PHONE_DISPLAY,
  REGULAR_PHONE,
  REGULAR_PHONE_DISPLAY,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  CLINIC_MAPS_URL,
  WORKING_HOURS_SUMMARY,
  SOCIAL_LINKS,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEW_RATING,
  GOOGLE_REVIEWS_URL,
  CLINIC_NAME,
} from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@/components/ui/spinner";
import { track } from "@/lib/analytics";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const QUICK_LINKS = [
  { name: "About Us", path: "/about" },
  { name: "All Services", path: "/services" },
  { name: "Our Doctors", path: "/doctors" },
  { name: "Emergency Dentist", path: "/emergency" },
  { name: "At-Home Visits", path: "/at-home" },
  { name: "Dental Tourism", path: "/dental-tourism" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

export function Footer() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const { toast } = useToast();

  const newsletterForm = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const handleConfirmEmergency = () => {
    setShowEmergencyModal(false);
    track("emergency_confirm", { source: "footer" });
    window.location.href = `tel:${EMERGENCY_PHONE}`;
  };

  // Posts to Netlify Forms (static form "newsletter" declared in index.html).
  const onNewsletterSubmit = async (data: NewsletterFormValues) => {
    setIsSubmittingNewsletter(true);
    try {
      const body = new URLSearchParams({ "form-name": "newsletter", email: data.email });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      track("form_submit", { form: "newsletter" });
      toast({
        title: "Subscribed",
        description: "Thanks — you'll hear from us with dental tips and clinic news.",
      });
      newsletterForm.reset();
    } catch {
      toast({
        title: "Subscription failed",
        description: "Please try again later or message us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  return (
    // Bottom padding leaves room for the fixed contact bar on small screens.
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-28 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">{CLINIC_NAME}</h3>
            <div className="flex items-start gap-3 text-sm opacity-90">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p>{CLINIC_ADDRESS}</p>
                <a href={CLINIC_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs font-semibold">Google Maps</a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p>
                  <a href={`tel:${REGULAR_PHONE}`} className="hover:text-primary transition-colors" onClick={() => track("call_click", { source: "footer", line: "regular" })}>
                    {REGULAR_PHONE_DISPLAY}
                  </a>
                </p>
                <button
                  onClick={() => setShowEmergencyModal(true)}
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

          {/* 2. Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm opacity-90">
              {WORKING_HOURS_SUMMARY.map((h, i) => (
                <div
                  key={h.label}
                  className={`flex justify-between gap-4 ${i < WORKING_HOURS_SUMMARY.length - 1 ? "border-b border-white/10 pb-2" : ""} ${
                    h.hours === "Closed" ? "text-primary font-medium" : ""
                  }`}
                >
                  <span>{h.label}</span>
                  <span>{h.hours}</span>
                </div>
              ))}
              <p className="text-xs opacity-70 pt-2">Emergency line available outside these hours.</p>
            </div>
          </div>

          {/* 3. Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {QUICK_LINKS.map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className="hover:text-primary transition-colors cursor-pointer">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Social, rating, newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Stay Connected</h4>
              <div className="flex gap-4">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-2" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="fill-current h-4 w-4" />)}
              </div>
              <p className="text-xs opacity-80 inline-flex items-center gap-1">
                {GOOGLE_REVIEW_RATING.toFixed(1)} rating · {GOOGLE_REVIEW_COUNT} Google reviews <ExternalLink className="h-3 w-3" />
              </p>
            </a>

            <div className="space-y-2">
              <h5 className="text-sm font-medium">Dental tips & clinic news</h5>
              <Form {...newsletterForm}>
                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="flex gap-2" name="newsletter" data-netlify="true">
                  <input type="hidden" name="form-name" value="newsletter" />
                  <FormField
                    control={newsletterForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email address"
                            autoComplete="email"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 rounded-full" disabled={isSubmittingNewsletter} aria-label="Subscribe">
                    {isSubmittingNewsletter ? <Spinner className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-8 space-y-4 text-xs opacity-60">
          <p className="max-w-4xl">
            The information on this website is for general educational purposes and does not replace a clinical examination. Treatment results vary from patient to patient. Before-and-after photographs show real patients of the clinic who consented to publication.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors cursor-pointer">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      <EmergencyConfirmModal
        isOpen={showEmergencyModal}
        onClose={() => setShowEmergencyModal(false)}
        onConfirm={handleConfirmEmergency}
        phoneNumber={EMERGENCY_PHONE_DISPLAY}
      />
    </footer>
  );
}
