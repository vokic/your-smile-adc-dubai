import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Calendar, Clock, Tag, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost() {
  const [expandedGallery, setExpandedGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dummy blog post data
  const post = {
    id: 1,
    title: "The Complete Guide to Dental Veneers: Transform Your Smile",
    category: "Cosmetic Dentistry",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "FEATURED BLOG IMAGE",
    content: `
      Veneers are one of the most popular cosmetic dental treatments available today. Whether you're looking to fix minor imperfections or completely transform your smile, porcelain veneers offer a versatile solution that combines aesthetics with durability.

      **What Are Dental Veneers?**
      
      Dental veneers are thin, custom-made shells crafted from porcelain or composite materials that are bonded to the front surface of your teeth. They're designed to cover imperfections like stains, chips, gaps, or misalignment, creating a flawless smile in just 2-3 appointments.

      **Types of Veneers**
      
      There are two main types: porcelain veneers and composite resin veneers. Porcelain veneers are more durable and stain-resistant, lasting 10-15 years or longer. Composite veneers are more affordable but require more maintenance and typically last 5-7 years.

      **The Procedure**
      
      The process begins with a consultation where we discuss your goals and design your ideal smile. We then prepare your teeth by removing a thin layer of enamel, take impressions, and create custom veneers in our lab. Once ready, the veneers are bonded to your teeth using special adhesive and light curing.

      **Benefits of Veneers**
      
      Beyond the obvious aesthetic improvements, veneers can boost your confidence, improve bite function, and protect damaged tooth surfaces. They're also relatively quick to place compared to other cosmetic procedures.

      **Aftercare Tips**
      
      To maintain your veneers, avoid chewing on hard objects, practice good oral hygiene, and schedule regular check-ups. With proper care, your veneers will maintain their beautiful appearance for many years.

      Whether you're considering veneers for the first time or have questions about the process, our team is here to help you achieve the smile you've always wanted.
    `
  };

  // Dummy gallery images
  const galleryImages = [
    "BEFORE VENEERS 1",
    "AFTER VENEERS 1",
    "BEFORE VENEERS 2",
    "AFTER VENEERS 2",
    "BEFORE VENEERS 3",
    "AFTER VENEERS 3",
    "SMILE TRANSFORMATION 1",
    "SMILE TRANSFORMATION 2"
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Featured Image */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground/20 text-4xl font-bold select-none">
          {post.image}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
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
              {post.content.split('\n\n').map((paragraph, idx) => {
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
                Book Consultation on WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-serif font-bold text-secondary">Gallery</h2>
              <p className="text-muted-foreground">Click on images to view details</p>
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
                  Expand
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
                  className="aspect-square rounded-lg border border-border bg-card hover:border-primary hover:shadow-md transition-all flex items-center justify-center overflow-hidden"
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
              data-testid="button-expand-prev"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          </div>

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handleNextImage}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
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
