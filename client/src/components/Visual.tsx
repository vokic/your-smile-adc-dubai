import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";
import type { WebImage } from "@/lib/images";

interface VisualProps {
  /** Real image when available (path or WebImage with srcset). */
  src?: string | WebImage;
  alt?: string;
  /** Decorative icon shown on the branded panel when there's no image. */
  icon?: LucideIcon;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Image slot. Renders the real photo when `src` is provided, otherwise a
 * branded decorative panel (no placeholder text). Replaces the old
 * "HERO IMAGE" / "BEFORE & AFTER" text boxes so nothing unfinished ships.
 */
export function Visual({ src, alt = "", icon: Icon = Sparkles, className = "", tone = "light" }: VisualProps) {
  if (src) {
    const img = typeof src === "string" ? { src, srcSet: undefined, alt } : src;
    return (
      <div className={`overflow-hidden rounded-2xl border border-border shadow-sm ${className}`}>
        <img
          src={img.src}
          srcSet={img.srcSet}
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt={img.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  const dark = tone === "dark";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${
        dark ? "border-white/10 bg-white/5" : "border-border bg-gradient-to-br from-primary/10 via-muted to-secondary/10"
      } ${className}`}
      aria-hidden="true"
    >
      <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[28px] border-primary/10" />
      <div className="absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-secondary/5" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`rounded-full p-6 ${dark ? "bg-white/10 text-primary" : "bg-white/70 text-primary shadow-sm"}`}>
          <Icon className="h-10 w-10" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
