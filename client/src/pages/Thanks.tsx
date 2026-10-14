import { Link } from "wouter";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  REGULAR_PHONE,
  REGULAR_PHONE_DISPLAY,
  WHATSAPP_PHONE,
} from "@/lib/constants";
import { SEO } from "@/components/SEO";
import { track } from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}`;

export default function Thanks() {
  const { t } = useLanguage();
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background py-16 md:py-24">
      <SEO
        title={t("thanks.seoTitle")}
        description={t("thanks.seoDescription")}
        path="/thanks"
        noindex
      />
      <div className="container mx-auto px-4 max-w-2xl text-center space-y-8">
        <div className="flex justify-center">
          <CheckCircle2 className="h-20 w-20 text-primary" strokeWidth={1.5} />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
            {t("thanks.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t("thanks.body")}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("thanks.whatsappAria")}
              onClick={() => track("whatsapp_click", { source: "thanks" })}
            >
              <MessageCircle className="h-5 w-5" />
              {t("thanks.whatsappCta")}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 rounded-full"
          >
            <a href={`tel:${REGULAR_PHONE}`} aria-label={t("thanks.callAria", { phone: REGULAR_PHONE_DISPLAY })} onClick={() => track("call_click", { source: "thanks", line: "regular" })}>
              <Phone className="h-5 w-5" />
              {t("thanks.callCta", { phone: REGULAR_PHONE_DISPLAY })}
            </a>
          </Button>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
          >
            {t("thanks.backHome")}
          </Link>
        </div>
      </div>
    </section>
  );
}
