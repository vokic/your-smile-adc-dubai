import { useState } from "react";
import { Facebook, Instagram, MapPin, Phone, Mail, Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { EmergencyConfirmModal } from "@/components/EmergencyConfirmModal";
import {
  EMERGENCY_PHONE,
  EMERGENCY_PHONE_DISPLAY,
  REGULAR_PHONE,
  REGULAR_PHONE_DISPLAY,
  CLINIC_EMAIL,
  CLINIC_ADDRESS,
  CLINIC_MAPS_URL,
  WORKING_HOURS_SUMMARY,
  formatHours,
  SOCIAL_LINKS,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEW_RATING,
  GOOGLE_REVIEWS_URL,
  CLINIC_NAME,
} from "@/lib/constants";
import { track } from "@/lib/analytics";
import { useLanguage } from "@/hooks/useLanguage";

// No newsletter for now (owner decision, Oct 2026). The signup form that
// stood in the fourth column is in git history if it ever comes back; it
// also needs the "newsletter" Netlify form in index.html and a privacy-
// notice section again.

const QUICK_LINKS = [
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "doctors", path: "/doctors" },
  { key: "emergency", path: "/emergency" },
  { key: "atHome", path: "/at-home" },
  { key: "dentalTourism", path: "/dental-tourism" },
  { key: "blog", path: "/blog" },
  { key: "faq", path: "/faq" },
  { key: "contact", path: "/contact" },
];

export function Footer() {
  const { t, language } = useLanguage();
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const handleConfirmEmergency = () => {
    setShowEmergencyModal(false);
    track("emergency_confirm", { source: "footer" });
    window.location.href = `tel:${EMERGENCY_PHONE}`;
  };

  return (
    // Bottom padding leaves room for the fixed contact bar, which is shown on
    // every screen size (h-14 + pb-3 on mobile, h-16 + pb-5 from sm up).
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-28 sm:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">{CLINIC_NAME}</h3>
            <div className="flex items-start gap-3 text-sm opacity-90">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p>{CLINIC_ADDRESS}</p>
                <a href={CLINIC_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs font-semibold">{t("footer.googleMaps")}</a>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm opacity-90">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p>
                  <a href={`tel:${REGULAR_PHONE}`} className="hover:text-primary transition-colors" onClick={() => track("call_click", { source: "footer", line: "regular" })}>
                    {REGULAR_PHONE_DISPLAY}
                  </a>
                </p>
                <button
                  onClick={() => setShowEmergencyModal(true)}
                  className="text-xs text-red-400 mt-1 hover:text-red-300 transition-colors font-semibold underline cursor-pointer"
                  data-testid="button-footer-emergency"
                >
                  {t("footer.emergencyLabel", { phone: EMERGENCY_PHONE_DISPLAY })}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-primary transition-colors">{CLINIC_EMAIL}</a>
            </div>
          </div>

          {/* 2. Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">{t("footer.openingHours")}</h4>
            <div className="space-y-2 text-sm opacity-90">
              {WORKING_HOURS_SUMMARY.map((h, i) => (
                <div
                  key={h.label}
                  className={`flex justify-between gap-4 ${i < WORKING_HOURS_SUMMARY.length - 1 ? "border-b border-white/10 pb-2" : ""} ${
                    h.hours === "Closed" ? "text-primary font-medium" : ""
                  }`}
                >
                  <span>{t(`hours.summary.${h.key}`)}</span>
                  <span>{"closed" in h ? t("hours.closed") : formatHours(h.hours, language)}</span>
                </div>
              ))}
              <p className="text-xs opacity-70 pt-2">{t("footer.emergencyOutsideHours")}</p>
            </div>
          </div>

          {/* 3. Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">{t("footer.quickLinks")}</h4>
            {/* Two columns on phones halves the list height; py-1.5 gives each
                link a ~32px tap target instead of the bare 17px text line. */}
            <ul className="grid grid-cols-2 gap-x-4 md:grid-cols-1 md:gap-y-2 text-sm opacity-90">
              {QUICK_LINKS.map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className="block py-1.5 md:py-0 hover:text-primary transition-colors cursor-pointer">{t(`footer.links.${l.key}`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Social and rating */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-bold">{t("footer.stayConnected")}</h4>
              <div className="flex gap-4">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-2" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="fill-current h-4 w-4" />)}
              </div>
              <p className="text-xs opacity-80 inline-flex items-center gap-1">
                {t("footer.ratingLine", { rating: GOOGLE_REVIEW_RATING.toFixed(1), count: GOOGLE_REVIEW_COUNT })} <ExternalLink className="h-3 w-3" />
              </p>
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-8 space-y-4 text-xs opacity-60">
          <p className="max-w-4xl">
            {t("footer.disclaimer")}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>{t("footer.copyright", { year: new Date().getFullYear(), clinic: CLINIC_NAME })}</p>
            <div className="flex flex-wrap justify-center gap-x-6">
              <Link href="/privacy" className="py-2 hover:text-white transition-colors cursor-pointer">{t("footer.privacyPolicy")}</Link>
              <Link href="/terms" className="py-2 hover:text-white transition-colors cursor-pointer">{t("footer.terms")}</Link>
              <Link href="/sitemap" className="py-2 hover:text-white transition-colors cursor-pointer">{t("footer.sitemap")}</Link>
            </div>
          </div>
        </div>
      </div>

      <EmergencyConfirmModal
        isOpen={showEmergencyModal}
        onClose={() => setShowEmergencyModal(false)}
        onConfirm={handleConfirmEmergency}
        phoneNumber={EMERGENCY_PHONE_DISPLAY}
      />
    </footer>
  );
}
