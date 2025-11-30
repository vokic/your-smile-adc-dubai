import { CheckCircle2, Clock, AlertCircle, Smile } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  duration?: string;
  icon?: React.ReactNode;
}

interface ProcedureStepsProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export function ProcedureSteps({
  title = "Your Treatment Journey",
  subtitle = "Step-by-step guide to your perfect smile",
  steps,
}: ProcedureStepsProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                {/* Step Number Circle */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    {/* Connector Line */}
                    {idx !== steps.length - 1 && (
                      <div className="absolute left-1/2 top-12 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary/30 to-transparent" />
                    )}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-1">
                  <div className="p-6 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-secondary">
                        {step.title}
                      </h3>
                      {step.duration && (
                        <div className="flex items-center gap-2 text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                          <Clock className="h-4 w-4" />
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
          <div className="flex gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            </div>
            <div className="flex-1 pt-1">
              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-2">
                  Treatment Complete!
                </h3>
                <p className="text-green-600">
                  Enjoy your new smile with our comprehensive aftercare guidance and follow-up support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
