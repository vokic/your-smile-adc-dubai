import { CheckCircle2 } from "lucide-react";

interface BenefitsSectionProps {
  title?: string;
  benefits: string[];
  bgColor?: "bg-background" | "bg-muted/30" | "bg-secondary text-white";
}

export function BenefitsSection({
  title = "Why Choose Us?",
  benefits,
  bgColor = "bg-muted/30",
}: BenefitsSectionProps) {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
              {title}
            </h2>
          </div>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all"
                data-testid={`item-benefit-${index}`}
              >
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-secondary font-medium text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
