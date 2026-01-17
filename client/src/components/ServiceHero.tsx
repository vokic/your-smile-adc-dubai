import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function ServiceHero({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText = "Book Your Consultation",
  secondaryButtonText = "Call Now",
  onPrimaryClick,
  onSecondaryClick,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden bg-secondary pt-10 md:pt-0">
      <div className="absolute inset-0 opacity-40 flex items-center justify-center bg-muted" aria-hidden="true">
        <span className="text-4xl font-bold text-muted-foreground/20">
          {backgroundImage || "SERVICE HERO IMAGE"}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />

      <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
          <h1
            className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight"
            data-testid="heading-service-hero"
          >
            {title}
          </h1>
          <h2 className="text-xl text-gray-200 font-light max-w-2xl">
            {subtitle}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full"
              onClick={onPrimaryClick}
              data-testid="button-hero-primary"
            >
              <MessageCircle className="h-5 w-5" />
              {primaryButtonText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-secondary gap-2 rounded-full"
              onClick={onSecondaryClick}
              data-testid="button-hero-secondary"
            >
              <Phone className="h-5 w-5" />
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
