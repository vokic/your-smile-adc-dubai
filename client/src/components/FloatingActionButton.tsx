import { MessageCircle, Phone } from "lucide-react";
import { useLocation } from "wouter";
import {
  EMERGENCY_PHONE,
  REGULAR_PHONE,
  whatsappLink,
} from "@/lib/constants";
import { track } from "@/lib/analytics";

/**
 * Two always-visible contact buttons pinned to the bottom corners.
 * Owner brief: "people here are lazy — if they have to scroll to find a
 * phone number, forget it. The button has to chase them: click me."
 *
 * Left  = WhatsApp (green, brand colour)
 * Right = Call (primary). On /emergency it dials the emergency line.
 * No toggle, no hidden menu. Labels stay visible on every screen size.
 */
export function FloatingActionButton() {
  const [location] = useLocation();
  const isEmergency = location.startsWith("/emergency");
  const phone = isEmergency ? EMERGENCY_PHONE : REGULAR_PHONE;

  const waMessage = isEmergency
    ? "Hello, I have a dental emergency and need help as soon as possible."
    : "Hello, I'd like to book an appointment at Your Smile Advanced Dental Center.";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 pointer-events-none"
      data-testid="floating-contact-bar"
    >
      <div className="container mx-auto px-3 sm:px-4 pb-3 sm:pb-5 flex items-end justify-between gap-3">
        {/* WhatsApp — left */}
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "fab", page: location })}
          className="pointer-events-auto group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#25D366] text-white pl-3 pr-4 sm:pl-4 sm:pr-6 h-14 sm:h-16 shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] ring-4 ring-white/70 hover:bg-[#1ebe5b] hover:scale-[1.04] active:scale-[0.98] transition-transform motion-safe:animate-fab-nudge"
          aria-label="Chat with us on WhatsApp"
          data-testid="button-fab-whatsapp"
        >
          <span className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20">
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-white motion-safe:animate-ping opacity-80" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight text-left">
            <span className="text-[11px] sm:text-xs font-medium opacity-90">Book now</span>
            <span className="text-sm sm:text-base font-bold">WhatsApp</span>
          </span>
        </a>

        {/* Call — right */}
        <a
          href={`tel:${phone}`}
          onClick={() =>
            track("call_click", {
              source: "fab",
              line: isEmergency ? "emergency" : "regular",
              page: location,
            })
          }
          className={`pointer-events-auto group inline-flex items-center gap-2 sm:gap-3 rounded-full text-white pl-3 pr-4 sm:pl-4 sm:pr-6 h-14 sm:h-16 ring-4 ring-white/70 hover:scale-[1.04] active:scale-[0.98] transition-transform ${
            isEmergency
              ? "bg-red-600 hover:bg-red-700 shadow-[0_10px_30px_-5px_rgba(220,38,38,0.55)]"
              : "bg-secondary hover:bg-secondary/90 shadow-[0_10px_30px_-5px_rgba(57,76,111,0.55)]"
          }`}
          aria-label={isEmergency ? "Call our emergency line now" : "Call the clinic now"}
          data-testid="button-fab-call"
        >
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/20">
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          <span className="flex flex-col leading-tight text-left">
            <span className="text-[11px] sm:text-xs font-medium opacity-90">
              {isEmergency ? "Emergency line" : "Talk to us"}
            </span>
            <span className="text-sm sm:text-base font-bold">Call now</span>
          </span>
        </a>
      </div>
    </div>
  );
}
