import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGULAR_PHONE, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";

interface CTASectionProps {
  title: string;
  text: string;
  treatment?: string;
  primaryLabel?: string;
  bgColor?: "bg-background" | "bg-muted/30" | "bg-primary/5";
}

/** Closing call-to-action used at the bottom of every treatment page. */
export function CTASection({
  title,
  text,
  treatment,
  primaryLabel = "Book on WhatsApp",
  bgColor = "bg-muted/30",
}: CTASectionProps) {
  const message = treatment
    ? `Hello, I'd like to book a consultation for ${treatment}.`
    : "Hello, I'd like to book a consultation at Your Smile Advanced Dental Center.";
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">{title}</h2>
          <p className="text-muted-foreground text-lg">{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "cta", treatment })}
              >
                <MessageCircle className="h-4 w-4" /> {primaryLabel}
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <a href={`tel:${REGULAR_PHONE}`} onClick={() => track("call_click", { source: "cta", treatment, line: "regular" })}>
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
