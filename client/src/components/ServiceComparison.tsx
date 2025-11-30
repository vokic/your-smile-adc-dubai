import { CheckCircle2, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  invisalign: boolean | string;
  braces: boolean | string;
  veneers?: boolean | string;
}

interface ServiceComparisonProps {
  title?: string;
  subtitle?: string;
  rows?: ComparisonRow[];
  showThirdColumn?: boolean;
}

export function ServiceComparison({
  title = "How to Choose Your Treatment",
  subtitle = "Compare popular treatments to find what's right for you",
  showThirdColumn = false,
  rows,
}: ServiceComparisonProps) {
  const defaultRows: ComparisonRow[] = [
    {
      feature: "Duration of treatment",
      invisalign: "6-12 months",
      braces: "18-24 months",
      veneers: "2-3 weeks",
    },
    {
      feature: "Visibility",
      invisalign: "Virtually invisible",
      braces: "Visible",
      veneers: "Natural-looking",
    },
    {
      feature: "Removable",
      invisalign: true,
      braces: false,
      veneers: false,
    },
    {
      feature: "Cost",
      invisalign: "Moderate",
      braces: "Budget-friendly",
      veneers: "Premium",
    },
    {
      feature: "Maintenance",
      invisalign: "Remove daily",
      braces: "Extra brushing needed",
      veneers: "Regular brushing",
    },
    {
      feature: "Dietary restrictions",
      invisalign: "None",
      braces: "Yes",
      veneers: "None",
    },
    {
      feature: "For all ages",
      invisalign: "13+",
      braces: "Any age",
      veneers: "18+",
    },
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-lg border border-border shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary text-secondary-foreground">
                <th className="px-6 py-4 text-left font-bold">Feature</th>
                <th className="px-6 py-4 text-center font-bold">
                  Clear Aligners
                </th>
                <th className="px-6 py-4 text-center font-bold">Braces</th>
                {showThirdColumn && (
                  <th className="px-6 py-4 text-center font-bold">Veneers</th>
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
                  <td className="px-6 py-4 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-foreground">
                    {renderCell(row.invisalign)}
                  </td>
                  <td className="px-6 py-4 text-center text-foreground">
                    {renderCell(row.braces)}
                  </td>
                  {showThirdColumn && row.veneers !== undefined && (
                    <td className="px-6 py-4 text-center text-foreground">
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
            Not sure which treatment is right for you?
          </p>
          <a
            href="https://wa.me/971585828257"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
            data-testid="link-consultation-comparison"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
