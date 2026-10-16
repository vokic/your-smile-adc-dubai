import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGULAR_PHONE, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";
import { inlineCase, useLanguage } from "@/hooks/useLanguage";

interface PackagesCalloutProps {
  /** Treatment name used in the copy and the WhatsApp message. */
  treatment: string;
  /** Defaults to the translated "Flexible Treatment Packages". */
  title?: string;
  bgColor?: "bg-background" | "bg-muted/30";
}

/**
 * Replaces the old pricing tables. Owner policy: no prices anywhere on the
 * site — only mention that packages exist and invite the patient to ask.
 */
export function PackagesCallout({
  treatment,
  title,
  bgColor = "bg-muted/30",
}: PackagesCalloutProps) {
  const { t, language } = useLanguage();
  const message = t("packages.whatsappMessage", { treatment });
  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-14 bg-card rounded-2xl border border-border">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{title ?? t("packages.defaultTitle")}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("packages.body", { treatment: inlineCase(treatment, language) })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "packages", treatment })}
              >
                <MessageCircle className="h-4 w-4" /> {t("packages.cta")}
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <a href={`tel:${REGULAR_PHONE}`} onClick={() => track("call_click", { source: "packages", line: "regular", treatment })}>
                <Phone className="h-4 w-4" /> {t("common.callNow")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
