import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Calendar, Clock, Tag, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const articlesPerPage = 3;

  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Dental Veneers: Transform Your Smile",
      excerpt: "Discover how porcelain veneers can give you a Hollywood smile. Learn about the process, costs, and what to expect.",
      category: "Cosmetic Dentistry",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "VENEER GUIDE",
      content: "Veneers are one of the most popular cosmetic dental treatments. In this comprehensive guide, we cover everything from the consultation process to aftercare..."
    },
    {
      id: 2,
      title: "Invisalign vs Traditional Braces: Which Is Right for You?",
      excerpt: "Compare the pros and cons of clear aligners versus metal braces to make the best choice for your orthodontic journey.",
      category: "Orthodontics",
      date: "December 12, 2024",
      readTime: "7 min read",
      image: "INVISALIGN VS BRACES",
      content: "Both Invisalign and traditional braces can straighten your teeth effectively. Here's what you need to know about each option..."
    },
    {
      id: 3,
      title: "Professional Teeth Whitening: Myths vs Reality",
      excerpt: "Understand the facts about professional whitening treatments and why they're superior to store-bought options.",
      category: "Teeth Whitening",
      date: "December 10, 2024",
      readTime: "4 min read",
      image: "WHITENING MYTHS",
      content: "There are many misconceptions about teeth whitening. Let's separate fact from fiction and explore what professional treatments can achieve..."
    },
    {
      id: 4,
      title: "5 Signs You Need a Dental Crown or Bridge",
      excerpt: "Learn how to identify if your teeth require restorative treatment with crowns or bridges to restore function and aesthetics.",
      category: "Restorative Dentistry",
      date: "December 8, 2024",
      readTime: "6 min read",
      image: "CROWN SIGNS",
      content: "Crowns and bridges are essential restorative treatments. Recognize these warning signs that you might need one..."
    },
    {
      id: 5,
      title: "Dental Implants: The Ultimate Solution for Missing Teeth",
      excerpt: "Everything you need to know about dental implants, from the procedure to recovery and long-term benefits.",
      category: "Dental Implants",
      date: "December 5, 2024",
      readTime: "8 min read",
      image: "IMPLANT GUIDE",
      content: "Dental implants are a revolutionary solution for missing teeth. Learn about the advanced technology and techniques we use..."
    },
    {
      id: 6,
      title: "Emergency Dentistry: When to Call and What to Do",
      excerpt: "Quick guide on recognizing dental emergencies and the steps to take before reaching our clinic.",
      category: "Emergency Care",
      date: "December 1, 2024",
      readTime: "5 min read",
      image: "EMERGENCY TIPS",
      content: "Dental emergencies can happen unexpectedly. Here's what you should know about symptoms, first aid, and when to seek urgent care..."
    },
    {
      id: 7,
      title: "Preventive Dentistry: Save Money by Preventing Problems",
      excerpt: "Understand why preventive care is the best investment for your oral health and long-term savings.",
      category: "General & Preventive",
      date: "November 28, 2024",
      readTime: "6 min read",
      image: "PREVENTIVE CARE",
      content: "Prevention is always better than treatment. Discover the comprehensive preventive care strategies we recommend..."
    },
    {
      id: 8,
      title: "How Digital X-Rays Are Revolutionizing Dental Diagnostics",
      excerpt: "Explore the technology behind modern digital X-rays and how they improve treatment planning and patient safety.",
      category: "Technology",
      date: "November 25, 2024",
      readTime: "5 min read",
      image: "DIGITAL XRAY TECH",
      content: "Digital X-ray technology offers superior image quality with minimal radiation exposure. Learn about the advantages..."
    },
    {
      id: 9,
      title: "The Truth About Gum Disease: Symptoms, Treatment, and Prevention",
      excerpt: "Comprehensive overview of gum disease stages, warning signs, and effective treatment options available.",
      category: "Oral Health",
      date: "November 22, 2024",
      readTime: "7 min read",
      image: "GUM DISEASE",
      content: "Gum disease affects millions worldwide. Understanding the causes and symptoms is crucial for early intervention..."
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
              Dental Blog & Expert Tips
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest advice on cosmetic dentistry, implants, orthodontics, and preventive care.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or category..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-muted/30 flex-grow">
        <div className="container mx-auto px-4">
          {paginatedArticles.length > 0 ? (
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              {paginatedArticles.map((article) => (
                <Link key={article.id} href="/blog-post">
                  <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="sm:col-span-1 h-48 sm:h-auto rounded-t-xl sm:rounded-none sm:rounded-l-xl bg-muted border-b sm:border-b-0 sm:border-r border-border flex items-center justify-center overflow-hidden group-hover:bg-primary/5 transition-colors">
                      <span className="text-sm font-bold text-muted-foreground text-center px-4">{article.image}</span>
                    </div>

                    {/* Content */}
                    <div className="sm:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        {/* Category and Read Time */}
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <Tag className="h-4 w-4 text-primary" />
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                              {article.category}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </div>
                        <span className="text-sm font-semibold text-primary group-hover:translate-x-2 transition-transform">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">No articles found matching your search.</p>
              <Button
                onClick={() => setSearchTerm("")}
                variant="outline"
                className="rounded-full"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-12 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                variant="outline"
                className="gap-2 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    variant={currentPage === page ? "default" : "outline"}
                    className={currentPage === page ? "bg-primary text-primary-foreground rounded-full" : "rounded-full"}
                    size="sm"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                variant="outline"
                className="gap-2 rounded-full"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-center mt-6 text-sm text-muted-foreground">
              Page <span className="font-semibold text-secondary">{currentPage}</span> of{" "}
              <span className="font-semibold text-secondary">{totalPages}</span>
              {filteredArticles.length > 0 && (
                <span> • Showing {startIndex + 1}-{Math.min(startIndex + articlesPerPage, filteredArticles.length)} of {filteredArticles.length} articles</span>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-200">
              Get the latest dental tips, treatment updates, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-full bg-white text-secondary placeholder:text-muted-foreground focus:outline-none flex-grow"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-muted-foreground text-lg">
              Schedule a consultation with our expert dentists and discover the perfect treatment plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </Button>
              <Button variant="outline" className="gap-2 rounded-full">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
