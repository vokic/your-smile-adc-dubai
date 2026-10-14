import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { jsonLdFAQPage } from "@/lib/seo";
import { HeroBackdrop } from "@/components/ServiceHero";
import { REGULAR_PHONE, REGULAR_PHONE_DISPLAY, whatsappLink } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";
import type { FAQ } from "@/content/services";

export default function FAQ() {
  const { t, tItems } = useLanguage();
  // The booking answer repeats the clinic number, so it comes from constants
  // rather than being typed into the copy twice.
  const faqs = tItems<FAQ>("faq.items", { phone: REGULAR_PHONE_DISPLAY });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("faq.seoTitle")}
        description={t("faq.seoDescription")}
        path="/faq"
        jsonLd={jsonLdFAQPage(faqs)}
      />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
        <HeroBackdrop />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/30" />
        
        <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              {t("faq.heroTitle")} <span className="text-primary">{t("faq.heroTitleAccent")}</span>
            </h1>
            <h2 className="text-xl text-gray-200 font-light max-w-2xl">{t("faq.heroSubtitle")}</h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <a href={whatsappLink(t("faq.askWhatsapp"))} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  {t("faq.askQuestion")}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full">
                <a href={`tel:${REGULAR_PHONE}`}>
                  <Phone className="h-5 w-5" />
                  {t("faq.callUs")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">{t("faq.hereToHelp")}</h2>
              <p className="text-muted-foreground text-lg">{t("faq.hereToHelpBody")}</p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition-all">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
                  >
                    <span className="font-medium text-secondary text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-5 bg-muted/30 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 md:p-10 bg-card rounded-2xl border border-border text-center">
              <h3 className="text-2xl font-serif font-bold text-secondary mb-3">{t("faq.stillQuestions")}</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{t("faq.stillQuestionsBody")}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                  <MessageCircle className="h-4 w-4" />
                  {t("faq.messageWhatsapp")}
                </Button>
                <Button variant="outline" className="gap-2 rounded-full">
                  <Phone className="h-4 w-4" />
                  {t("faq.callPhone", { phone: REGULAR_PHONE_DISPLAY })}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
