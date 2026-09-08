import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { REGULAR_PHONE, whatsappLink } from "@/lib/constants";
import { track } from "@/lib/analytics";
import type { WebImage } from "@/lib/images";

export interface Crumb {
  name: string;
  path: string;
}

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  /**
   * Real image URL (imported asset or /public path). When omitted the hero
   * renders a branded gradient backdrop — no placeholder text ever ships.
   */
  backgroundImage?: string | WebImage;
  imageAlt?: string;
  breadcrumbs?: Crumb[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  /** Treatment name for the pre-filled WhatsApp message. */
  treatment?: string;
  tone?: "default" | "emergency";
}

export function ServiceHero({
  title,
  subtitle,
  backgroundImage,
  imageAlt = "",
  breadcrumbs,
  primaryButtonText = "Book Your Consultation",
  secondaryButtonText = "Call Now",
  treatment,
  tone = "default",
}: ServiceHeroProps) {
  const isEmergency = tone === "emergency";
  const message = treatment
    ? `Hello, I'd like to book a consultation for ${treatment}.`
    : "Hello, I'd like to book a consultation at Your Smile Advanced Dental Center.";

  return (
    <section
      className={`relative min-h-[50vh] md:h-[60vh] w-full overflow-hidden pt-10 md:pt-0 ${
        isEmergency ? "bg-red-700" : "bg-secondary"
      }`}
    >
      {backgroundImage ? (
        <img
          src={typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src}
          srcSet={typeof backgroundImage === "string" ? undefined : backgroundImage.srcSet}
          sizes="100vw"
          alt={typeof backgroundImage === "string" ? imageAlt : backgroundImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      ) : (
        <HeroBackdrop emergency={isEmergency} />
      )}
      <div
        className={`absolute inset-0 ${
          isEmergency
            ? "bg-gradient-to-r from-red-700 via-red-700/90 to-red-700/40"
            : backgroundImage
              ? "bg-gradient-to-r from-secondary via-secondary/85 to-secondary/20"
              : "bg-gradient-to-r from-secondary via-secondary/90 to-secondary/30"
        }`}
      />

      <div className="container relative h-full mx-auto px-4 flex items-center py-12 md:py-0">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-1">
                {breadcrumbs.map((c, i) => (
                  <li key={c.path} className="flex items-center gap-1">
                    {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
                    {i < breadcrumbs.length - 1 ? (
                      <Link href={c.path} className="hover:text-white transition-colors">
                        {c.name}
                      </Link>
                    ) : (
                      <span className="text-white" aria-current="page">
                        {c.name}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1
            className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight"
            data-testid="heading-service-hero"
          >
            {title}
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className={`gap-2 rounded-full ${
                isEmergency
                  ? "bg-yellow-400 text-red-700 hover:bg-yellow-300 font-bold"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              data-testid="button-hero-primary"
            >
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "hero", treatment })}
              >
                <MessageCircle className="h-5 w-5" />
                {primaryButtonText}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={`gap-2 rounded-full text-white border-white hover:bg-white ${
                isEmergency ? "hover:text-red-700" : "hover:text-secondary"
              }`}
              data-testid="button-hero-secondary"
            >
              <a
                href={`tel:${REGULAR_PHONE}`}
                onClick={() => track("call_click", { source: "hero", treatment, line: "regular" })}
              >
                <Phone className="h-5 w-5" />
                {secondaryButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Decorative backdrop used until real photography is supplied. */
export function HeroBackdrop({ emergency = false }: { emergency?: boolean }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className={`absolute inset-0 ${
          emergency
            ? "bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.22),_transparent_55%)]"
            : "bg-[radial-gradient(ellipse_at_top_right,_rgba(55,168,227,0.55),_transparent_55%)]"
        }`}
      />
      <div className="absolute -right-24 -bottom-32 h-[28rem] w-[28rem] rounded-full border-[40px] border-white/10" />
      <div className="absolute right-40 top-10 h-40 w-40 rounded-full bg-white/5" />
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] bg-[size:48px_48px]" />
    </div>
  );
}
