import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  /** Defaults to the translated "Frequently Asked Questions". */
  title?: string;
  faqs: FAQ[];
}

export function FAQSection({
  title,
  faqs,
}: FAQSectionProps) {
  const { t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const idPrefix = useId();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-8 md:mb-12 text-center">
            {title ?? t("faqSection.defaultTitle")}
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition-all"
                data-testid={`faq-item-${index}`}
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 bg-card hover:bg-card/80 transition-colors text-left"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`${idPrefix}-${index}`}
                  data-testid={`button-faq-toggle-${index}`}
                >
                  <span className="font-bold text-secondary">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Always in the DOM (hidden when collapsed) so the answers are
                    in the prerendered HTML and match the FAQPage JSON-LD. */}
                <div
                  id={`${idPrefix}-${index}`}
                  hidden={openFaqIndex !== index}
                  className="px-5 md:px-6 py-4 bg-background border-t border-border animate-in fade-in"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
