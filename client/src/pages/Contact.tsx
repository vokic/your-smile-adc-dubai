import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { EmergencyConfirmModal } from "@/components/EmergencyConfirmModal";
import { IMG } from "@/lib/images";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@/components/ui/spinner";
import {
  EMERGENCY_PHONE,
  EMERGENCY_PHONE_DISPLAY,
  REGULAR_PHONE,
  REGULAR_PHONE_DISPLAY,
  whatsappLink,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  CLINIC_MAPS_EMBED_URL,
  WORKING_HOURS,
} from "@/lib/constants";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/hooks/useLanguage";

// The value posted to Netlify stays English so submissions stay comparable
// across languages; only the visible label is translated.
const SERVICE_OPTIONS = [
  { value: "General inquiry", key: "general" },
  { value: "Veneers", key: "veneers" },
  { value: "Dental Implants", key: "implants" },
  { value: "Orthodontics & Invisalign", key: "orthodontics" },
  { value: "Teeth Whitening", key: "whitening" },
  { value: "Crowns & Bridges", key: "crownsBridges" },
  { value: "Cosmetic Dentistry", key: "cosmetic" },
  { value: "Emergency", key: "emergency" },
  { value: "Private At-Home Visit", key: "atHome" },
  { value: "Other", key: "other" },
] as const;

type Translate = (key: string, vars?: Record<string, string | number>) => string;

// Rebuilt per render so validation messages follow the active language.
const makeContactFormSchema = (t: Translate) =>
  z.object({
    name: z
      .string()
      .min(2, t("contact.validation.nameMin"))
      .max(100, t("contact.validation.nameMax")),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, t("contact.validation.phone")),
    email: z.string().email(t("contact.validation.email")),
    service: z.string().min(1, t("contact.validation.service")),
    message: z
      .string()
      .min(10, t("contact.validation.messageMin"))
      .max(1000, t("contact.validation.messageMax")),
  });

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

function encodeForm(data: Record<string, string>): string {
  return Object.keys(data)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

export default function Contact() {
  const { t } = useLanguage();
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(makeContactFormSchema(t)),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const handleEmergencyConfirm = () => {
    window.location.href = `tel:${EMERGENCY_PHONE}`;
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({
          "form-name": "contact",
          "bot-field": "",
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      form.reset();
      setLocation("/thanks");
    } catch (error) {
      toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorBody", { phone: REGULAR_PHONE_DISPLAY }),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("contact.seoTitle")}
        description={t("contact.seoDescription")}
        path="/contact"
      />
      {/* Emergency Modal */}
      <EmergencyConfirmModal
        isOpen={showEmergencyModal}
        onClose={() => setShowEmergencyModal(false)}
        onConfirm={handleEmergencyConfirm}
        phoneNumber={EMERGENCY_PHONE_DISPLAY}
      />

      {/* 1. Hero Block */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <img src={IMG.handshake.src} srcSet={IMG.handshake.srcSet} sizes="100vw" alt={IMG.handshake.alt} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/20" />

        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              {t("contact.heroTitle")} <span className="text-primary">{t("contact.heroTitleAccent")}</span>
            </h1>
            {/* A paragraph, not an h2: every other hero subtitle is Lato light,
                and h2 now carries the display serif. */}
            <p className="text-xl text-gray-200 font-light max-w-2xl">{t("contact.heroSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <a href={whatsappLink(t("contact.bookWhatsappMessage"))} target="_blank" rel="noopener noreferrer" aria-label={t("contact.bookWhatsapp")}>
                  <MessageCircle className="h-5 w-5" />
                  {t("contact.bookWhatsapp")}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full">
                <a href={`tel:${REGULAR_PHONE}`} aria-label={t("contact.callAria", { phone: REGULAR_PHONE_DISPLAY })}>
                  <Phone className="h-5 w-5" />
                  {t("common.callNow")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Column: Contact Details & Hours */}
            <div className="space-y-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("contact.getInTouch")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-sm transition-all">
                    <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">{t("contact.phoneBooking")}</p>
                      <a href={`tel:${REGULAR_PHONE}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">{REGULAR_PHONE_DISPLAY}</a>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowEmergencyModal(true)}
                    className="w-full flex items-start gap-4 p-5 bg-red-50 rounded-xl border-2 border-red-200 hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <Phone className="h-6 w-6 text-red-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="font-bold text-red-700">{t("contact.emergencyPhone")}</p>
                      <p className="text-red-600 hover:text-red-700 transition-colors font-medium">{EMERGENCY_PHONE_DISPLAY}</p>
                      <p className="text-xs text-red-500 mt-1">{t("contact.emergencyHint")}</p>
                    </div>
                  </button>
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-sm transition-all">
                    <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">{t("contact.email")}</p>
                      <a href={`mailto:${CLINIC_EMAIL}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">{CLINIC_EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-sm transition-all">
                    <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-secondary">{t("contact.address")}</p>
                      <p className="text-muted-foreground">{CLINIC_ADDRESS}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{t("contact.clinicHours")}</h2>
                <div className="bg-muted/30 rounded-xl p-8 border border-border">
                  <div className="space-y-4">
                    {WORKING_HOURS.map((item) => (
                      <div key={item.key} className="flex justify-between items-center border-b border-border/50 last:border-0 pb-3 last:pb-0">
                        <span className="font-medium text-secondary">{t(`hours.days.${item.key}`)}</span>
                        <span className={`text-sm font-medium ${"closed" in item ? "text-red-500" : "text-muted-foreground"}`}>
                          {"closed" in item ? t("hours.closed") : item.hours}
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
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-3">{t("contact.formTitle")}</h2>
                  <p className="text-muted-foreground">{t("contact.formSubtitle")}</p>
                </div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    {/* Netlify Forms hidden fields */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        {t("contact.honeypot")} <input name="bot-field" />
                      </label>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.labelName")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("contact.placeholderName")} className="h-10 rounded-full" {...field} />
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
                            <FormLabel>{t("contact.labelPhone")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("contact.placeholderPhone")} className="h-10 rounded-full" {...field} />
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
                          <FormLabel>{t("contact.labelEmail")}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t("contact.placeholderEmail")} className="h-10 rounded-full" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.labelService")}</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-10 rounded-full">
                                <SelectValue placeholder={t("contact.placeholderService")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SERVICE_OPTIONS.map((service) => (
                                <SelectItem key={service.key} value={service.value}>
                                  {t(`contact.services.${service.key}`)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("contact.labelMessage")}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t("contact.placeholderMessage")} className="min-h-[120px] resize-none rounded-2xl" {...field} />
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
                          {t("contact.sending")}
                        </>
                      ) : (
                        t("contact.submit")
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Map Section */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-3">{t("contact.findUsTitle")}</h2>
                  <p className="text-muted-foreground">{t("contact.findUsBody")}</p>
                </div>
                <iframe
                  src={CLINIC_MAPS_EMBED_URL}
                  width="100%"
                  height="350px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title={t("contact.mapTitle")}
                  aria-label={t("contact.mapAria")}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
