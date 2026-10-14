import { useEffect, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_ADDRESS, CLINIC_MAPS_EMBED_URL, CLINIC_MAPS_URL } from "@/lib/constants";
import { CONSENT_EVENT, readConsent } from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";

interface MapEmbedProps {
  /** Accessible title for the iframe. */
  title: string;
  /** Sizing/rounding for the map box; it fills the box either way. */
  className?: string;
}

/**
 * Google Maps embed that only loads once the visitor has accepted cookies
 * (or clicks "Show map"). The iframe sets Google cookies and weighs ~1 MB, so
 * until then a lightweight card with the address and a Maps link stands in.
 */
export function MapEmbed({ title, className = "" }: MapEmbedProps) {
  const { t } = useLanguage();
  const [load, setLoad] = useState(() => readConsent() === "granted");

  useEffect(() => {
    const onChange = (e: Event) => {
      if ((e as CustomEvent).detail === "granted") setLoad(true);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (load) {
    return (
      <iframe
        src={CLINIC_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
        title={title}
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 bg-muted/40 border border-border p-6 text-center ${className}`}
    >
      <MapPin className="h-10 w-10 text-primary" aria-hidden="true" />
      <p className="max-w-sm text-sm font-medium text-secondary">{CLINIC_ADDRESS}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="rounded-full" onClick={() => setLoad(true)}>
          {t("map.show")}
        </Button>
        <Button variant="outline" className="rounded-full gap-2" asChild>
          <a href={CLINIC_MAPS_URL} target="_blank" rel="noopener noreferrer">
            {t("map.openInGoogle")} <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
      <p className="max-w-sm text-xs text-muted-foreground">{t("map.notice")}</p>
    </div>
  );
}
