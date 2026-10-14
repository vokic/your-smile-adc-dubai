import { Fragment } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { LEGAL_LAST_UPDATED } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * Renderer for the privacy notice and the website terms. Both are plain
 * prose documents, so their content lives in the locale files as a list of
 * sections rather than as JSX — that way a translator edits one structured
 * document instead of a few hundred scattered keys.
 *
 * A block is either a paragraph or a bullet list, and `**bold**` inside a
 * string renders as <strong>. That is the whole markup vocabulary these two
 * pages need.
 */
export interface LegalBlock {
  type: "p" | "ul";
  /** Set for `type: "p"`. */
  text?: string;
  /** Set for `type: "ul"`. */
  items?: string[];
}

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

/** Split on **…** and wrap the marked runs in <strong>. */
function renderInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-secondary">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

interface LegalDocumentProps {
  /** Locale namespace, e.g. "privacy" or "terms". */
  namespace: string;
  path: string;
  /** Values interpolated into the section copy (clinic name, email, phone…). */
  vars: Record<string, string | number>;
}

export function LegalDocument({ namespace, path, vars }: LegalDocumentProps) {
  const { t, tItems } = useLanguage();
  const sections = tItems<LegalSection>(`${namespace}.sections`, vars);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t(`${namespace}.seoTitle`)}
        description={t(`${namespace}.seoDescription`, vars)}
        path={path}
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              {t(`${namespace}.title`)}
            </h1>
            <p className="text-muted-foreground text-lg">{t(`${namespace}.subtitle`)}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-serif font-bold text-secondary mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.blocks.map((block, i) =>
                    block.type === "ul" ? (
                      <ul key={i} className="list-disc pl-6 space-y-2">
                        {(block.items ?? []).map((item) => (
                          <li key={item}>{renderInline(item)}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i}>{renderInline(block.text ?? "")}</p>
                    ),
                  )}
                </div>
              </div>
            ))}
            <p className="text-sm">
              <em>{t("legal.lastUpdated", { date: LEGAL_LAST_UPDATED })}</em>
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-6">{t(`${namespace}.ctaLead`)}</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold"
            asChild
          >
            <Link href="/contact">{t(`${namespace}.ctaButton`)}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
