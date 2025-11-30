import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingTablesProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
}

export function PricingTables({ title = "Transparent Pricing", subtitle, tiers }: PricingTablesProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 flex flex-col ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-xl scale-105"
                  : "border-border bg-card hover:shadow-lg"
              }`}
            >
              {tier.highlighted && (
                <div className="bg-primary text-white text-center py-2 text-sm font-bold rounded-t-xl">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-secondary mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-serif font-bold text-primary">{tier.price}</span>
                  {!tier.price.includes("Custom") && (
                    <span className="text-muted-foreground text-sm ml-2">per treatment</span>
                  )}
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full gap-2 rounded-full ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  <MessageCircle className="h-4 w-4" />
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            💡 Prices may vary based on complexity. Free consultation available to discuss your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
}
