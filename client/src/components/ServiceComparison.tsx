import { CheckCircle2, X } from "lucide-react";
import { WHATSAPP_PHONE } from "@/lib/constants";
import { useLanguage } from "@/hooks/useLanguage";

interface ComparisonRow {
  feature: string;
  invisalign: boolean | string;
  braces: boolean | string;
  veneers?: boolean | string;
}

interface ServiceComparisonProps {
  /** Both default to the translated comparison heading / subheading. */
  title?: string;
  subtitle?: string;
  rows?: ComparisonRow[];
  showThirdColumn?: boolean;
}

export function ServiceComparison({
  title,
  subtitle,
  showThirdColumn = false,
  rows,
}: ServiceComparisonProps) {
  const { t } = useLanguage();
  const defaultRows: ComparisonRow[] = [
    { feature: t("comparison.rows.duration.feature"), invisalign: t("comparison.rows.duration.aligners"), braces: t("comparison.rows.duration.braces"), veneers: t("comparison.rows.duration.veneers") },
    { feature: t("comparison.rows.visibility.feature"), invisalign: t("comparison.rows.visibility.aligners"), braces: t("comparison.rows.visibility.braces"), veneers: t("comparison.rows.visibility.veneers") },
    { feature: t("comparison.rows.removable.feature"), invisalign: true, braces: false, veneers: false },
    { feature: t("comparison.rows.cost.feature"), invisalign: t("comparison.rows.cost.aligners"), braces: t("comparison.rows.cost.braces"), veneers: t("comparison.rows.cost.veneers") },
    { feature: t("comparison.rows.maintenance.feature"), invisalign: t("comparison.rows.maintenance.aligners"), braces: t("comparison.rows.maintenance.braces"), veneers: t("comparison.rows.maintenance.veneers") },
    { feature: t("comparison.rows.diet.feature"), invisalign: t("comparison.rows.diet.aligners"), braces: t("comparison.rows.diet.braces"), veneers: t("comparison.rows.diet.veneers") },
    { feature: t("comparison.rows.ages.feature"), invisalign: t("comparison.rows.ages.aligners"), braces: t("comparison.rows.ages.braces"), veneers: t("comparison.rows.ages.veneers") },
  ];

  const data = rows || defaultRows;

  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle2 className="h-6 w-6 text-primary mx-auto" />
      ) : (
        <X className="h-6 w-6 text-muted-foreground mx-auto opacity-30" />
      );
    }
    return value;
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">
            {title ?? t("comparison.defaultTitle")}
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle ?? t("comparison.defaultSubtitle")}</p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-lg border border-border shadow-lg">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-secondary text-secondary-foreground">
                <th className="px-3 py-3 md:px-6 md:py-4 text-left font-bold">{t("comparison.colFeature")}</th>
                <th className="px-3 py-3 md:px-6 md:py-4 text-center font-bold">
                  {t("comparison.colAligners")}
                </th>
                <th className="px-3 py-3 md:px-6 md:py-4 text-center font-bold">{t("comparison.colBraces")}</th>
                {showThirdColumn && (
                  <th className="px-3 py-3 md:px-6 md:py-4 text-center font-bold">{t("comparison.colVeneers")}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-border hover:bg-muted/50 transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-muted/20"
                  }`}
                >
                  <td className="px-3 py-3 md:px-6 md:py-4 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-3 py-3 md:px-6 md:py-4 text-center text-foreground">
                    {renderCell(row.invisalign)}
                  </td>
                  <td className="px-3 py-3 md:px-6 md:py-4 text-center text-foreground">
                    {renderCell(row.braces)}
                  </td>
                  {showThirdColumn && row.veneers !== undefined && (
                    <td className="px-3 py-3 md:px-6 md:py-4 text-center text-foreground">
                      {renderCell(row.veneers)}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            {t("comparison.ctaLead")}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
            data-testid="link-consultation-comparison"
          >
            {t("comparison.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
