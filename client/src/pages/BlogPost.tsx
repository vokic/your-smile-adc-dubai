import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Calendar, Clock, Tag, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { HeroBackdrop } from "@/components/ServiceHero";
import { useLanguage } from "@/hooks/useLanguage";

export default function BlogPost() {
  const { t, tList } = useLanguage();
  const [expandedGallery, setExpandedGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const post = {
    title: t("blogPost.post.title"),
    category: t("blogPost.post.category"),
    date: t("blogPost.post.date"),
    readTime: t("blogPost.post.readTime"),
    content: t("blogPost.post.content"),
  };

  const galleryImages = tList("blogPost.galleryLabels");

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={t("blogPost.seoTitle")}
        description={t("blogPost.seoDescription")}
        path="/blog-post"
        ogType="article"
      />
      {/* Featured Image */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-secondary">
        <HeroBackdrop />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-transparent" />
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Meta Info */}
            <div className="space-y-4 pb-6 border-b border-border">
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-primary uppercase tracking-wide">{post.category}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              {post.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.trim().startsWith('**')) {
                  return (
                    <h2 key={idx} className="text-2xl font-serif font-bold text-secondary mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h2>
                  );
                }
                return <p key={idx} className="text-lg">{paragraph}</p>;
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-5 w-5" />
                {t("blogPost.bookConsultation")}
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2">
                <Phone className="h-5 w-5" />
                {t("common.callNow")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-serif font-bold text-secondary">{t("blogPost.galleryTitle")}</h2>
              <p className="text-muted-foreground">{t("blogPost.gallerySubtitle")}</p>
            </div>

            {/* Desktop: Single Image Carousel */}
            <div className="hidden md:block">
              <div className="relative bg-card rounded-xl overflow-hidden border border-border">
                <div className="h-96 flex items-center justify-center bg-muted text-muted-foreground text-lg font-bold">
                  {galleryImages[currentImageIndex]}
                </div>
                
                {/* Navigation */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    onClick={handlePrevImage}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    data-testid="button-prev-image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    data-testid="button-next-image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {galleryImages.length}
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => setExpandedGallery(true)}
                  className="absolute top-4 right-4 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full font-medium transition-colors"
                  data-testid="button-expand-gallery"
                >
                  {t("blogPost.expand")}
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
                      currentImageIndex === idx
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                    data-testid={`thumbnail-${idx}`}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-muted text-xs font-bold text-center px-1 text-muted-foreground">
                      {idx + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile: Thumbnail Grid */}
            <div className="md:hidden grid grid-cols-3 gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setExpandedGallery(true)}
                  className="aspect-square rounded-lg border border-border bg-card hover:border-primary hover:shadow-sm transition-all flex items-center justify-center overflow-hidden"
                  data-testid={`mobile-thumbnail-${idx}`}
                >
                  <div className="text-xs font-bold text-center px-1 text-muted-foreground">
                    {img}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Gallery Modal */}
      {expandedGallery && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setExpandedGallery(false)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
            aria-label={t("blogPost.closeGallery")}
            data-testid="button-close-gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center w-full px-4">
            <div className="max-w-5xl w-full h-full flex items-center justify-center bg-muted/20 rounded-lg border border-white/10">
              <span className="text-white text-2xl font-bold text-center">{galleryImages[currentImageIndex]}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handlePrevImage}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              aria-label={t("blogPost.prevImage")}
              data-testid="button-expand-prev"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          </div>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handleNextImage}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
              aria-label={t("blogPost.nextImage")}
              data-testid="button-expand-next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>

          {/* Thumbnails Strip */}
          <div className="w-full px-4 py-4 bg-black/40 flex gap-2 overflow-x-auto justify-center pb-4">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-all ${
                  currentImageIndex === idx
                    ? 'border-primary bg-primary/20'
                    : 'border-white/20 hover:border-white/50'
                }`}
                data-testid={`expanded-thumbnail-${idx}`}
              >
                <div className="w-full h-full flex items-center justify-center bg-muted/30 text-white text-xs font-bold text-center">
                  {idx + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
