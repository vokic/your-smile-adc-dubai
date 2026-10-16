import { CheckCircle2, Clock, AlertCircle, Smile } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface Step {
  number: number;
  title: string;
  description: string;
  duration?: string;
  icon?: React.ReactNode;
}

interface ProcedureStepsProps {
  /** Both default to the translated journey heading / subheading. */
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export function ProcedureSteps({
  title,
  subtitle,
  steps,
}: ProcedureStepsProps) {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">
            {title ?? t("procedure.defaultTitle")}
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle ?? t("procedure.defaultSubtitle")}</p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-3 sm:gap-6">
                {/* Step Number Circle */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  {/* Connector: stretches with the card (tall on phones) and
                      -mb-8 bridges the space-y-8 gap down to the next circle,
                      the last one down to the "complete" check. */}
                  <div aria-hidden="true" className="w-0.5 flex-1 -mb-8 bg-primary/20" />
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0 pt-1">
                  <div className="p-4 sm:p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-secondary break-words">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <div className="flex max-w-full items-center gap-2 text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-2xl">
                          <Clock className="h-4 w-4 shrink-0" />
                          {step.duration}
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final Checkmark */}
          <div className="flex gap-3 sm:gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="p-4 sm:p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-2">
                  {t("procedure.completeTitle")}
                </h3>
                <p className="text-green-700">
                  {t("procedure.completeBody")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
