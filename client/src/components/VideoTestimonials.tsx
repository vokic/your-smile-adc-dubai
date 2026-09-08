import { Youtube } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export interface VideoTestimonial {
  /** YouTube video ID (the part after v=). */
  youtubeId: string;
  title: string;
  patient: string;
}

// Patient video testimonials are being supplied by the owner separately.
// Host them on the clinic's YouTube channel (unlisted is fine) and add the
// IDs here. While empty, the section renders a short honest note.
export const VIDEO_TESTIMONIALS: readonly VideoTestimonial[] = [];

export function VideoTestimonials({ title = "Patient Stories" }: { title?: string }) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">{title}</h2>
          <p className="text-muted-foreground text-lg">International patients on their treatment and their time in Dubai.</p>
        </div>

        {VIDEO_TESTIMONIALS.length === 0 ? (
          <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-card p-10 text-center space-y-4">
            <Youtube className="h-10 w-10 text-primary mx-auto" />
            <p className="text-secondary font-medium">Video stories from our international patients are on the way.</p>
            <p className="text-muted-foreground text-sm">
              Until then, you can see recent cases and patient moments on our{" "}
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Instagram
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {VIDEO_TESTIMONIALS.map((v) => (
              <figure key={v.youtubeId} className="rounded-2xl overflow-hidden border border-border bg-card">
                <div className="aspect-video bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <figcaption className="p-5">
                  <p className="font-bold text-secondary">{v.title}</p>
                  <p className="text-sm text-muted-foreground">{v.patient}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
