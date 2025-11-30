import { Play, Youtube } from "lucide-react";
import { useState } from "react";

interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
}

interface VideoTestimonial {
  id: string;
  title: string;
  patientName: string;
  youtubeUrl?: string;
}

interface TestimonialsGalleryProps {
  beforeAfterItems?: BeforeAfterItem[];
  videoTestimonials?: VideoTestimonial[];
}

export function TestimonialsGallery({
  beforeAfterItems = [],
  videoTestimonials = [],
}: TestimonialsGalleryProps) {
  const [activeTab, setActiveTab] = useState<"before-after" | "videos">(
    "before-after"
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary">
            Real Transformations, Real Smiles
          </h2>
          <p className="text-muted-foreground text-lg">
            See the incredible results from our patients. Every smile tells a story of confidence regained.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("before-after")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "before-after"
                ? "bg-primary text-white shadow-lg"
                : "bg-card border border-border text-secondary hover:border-primary"
            }`}
            data-testid="tab-before-after"
          >
            Before & After
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "videos"
                ? "bg-primary text-white shadow-lg"
                : "bg-card border border-border text-secondary hover:border-primary"
            }`}
            data-testid="tab-videos"
          >
            Patient Stories
          </button>
        </div>

        {/* Before & After Gallery */}
        {activeTab === "before-after" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterItems.length > 0 ? (
              beforeAfterItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  data-testid={`card-before-after-${item.id}`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-muted border border-border h-[450px] flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-lg font-bold text-muted-foreground group-hover:opacity-0 transition-opacity">
                      BEFORE & AFTER {item.id.toUpperCase()}
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <h3 className="text-white font-bold text-xl">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Default placeholder gallery
              <div className="col-span-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-2xl bg-muted border border-border h-[450px] flex items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-lg font-bold text-muted-foreground group-hover:opacity-0 transition-opacity">
                          BEFORE & AFTER {item}
                        </span>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-center space-y-3">
                            <h3 className="text-white font-bold text-xl">
                              Stunning Transformation
                            </h3>
                            <p className="text-white/80 text-sm">
                              Smile Makeover
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Video Testimonials */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoTestimonials.length > 0 ? (
              videoTestimonials.map((video) => (
                <div
                  key={video.id}
                  className="group"
                  onMouseEnter={() => setHoveredId(video.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  data-testid={`card-video-${video.id}`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-border h-[380px] flex flex-col items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                    {/* YouTube Thumbnail Area */}
                    <div className="w-full h-3/4 bg-black/20 relative flex items-center justify-center overflow-hidden group-hover:bg-black/30 transition-colors">
                      {video.youtubeUrl ? (
                        // If YouTube URL exists, show preview
                        <div className="w-full h-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${extractYouTubeId(
                              video.youtubeUrl
                            )}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-t-2xl"
                          />
                        </div>
                      ) : (
                        // Placeholder with play button
                        <div className="flex flex-col items-center gap-4">
                          <div className="bg-primary/20 p-6 rounded-full group-hover:bg-primary/30 transition-colors">
                            <Youtube className="h-12 w-12 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground text-center px-4">
                            YouTube link to be added
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Info Section */}
                    <div className="w-full h-1/4 bg-card px-6 py-4 flex flex-col justify-center border-t border-border">
                      <h3 className="font-bold text-secondary text-lg line-clamp-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {video.patientName}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Default placeholder video cards
              <>
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="group"
                    onMouseEnter={() => setHoveredId(`video-${item}`)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-border h-[380px] flex flex-col items-center justify-center group-hover:shadow-2xl transition-all duration-300 group-hover:border-primary/50">
                      {/* Placeholder */}
                      <div className="w-full h-3/4 bg-black/20 relative flex items-center justify-center overflow-hidden group-hover:bg-black/30 transition-colors">
                        <div className="flex flex-col items-center gap-4">
                          <div className="bg-primary/20 p-6 rounded-full group-hover:bg-primary/30 transition-colors">
                            <Youtube className="h-12 w-12 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground text-center px-4">
                            YouTube link to be added
                          </p>
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="w-full h-1/4 bg-card px-6 py-4 flex flex-col justify-center border-t border-border">
                        <h3 className="font-bold text-secondary text-lg">
                          Patient Story {item}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Happy Patient
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to start your own transformation?
          </p>
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            data-testid="button-book-consultation"
          >
            Book Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

// Helper function to extract YouTube video ID from various URL formats
function extractYouTubeId(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?v=([^&\n?#]+)/,
    /youtu\.be\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return url;
}
