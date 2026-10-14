import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Calendar, Clock, Tag, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/hooks/useLanguage";

interface Article {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export default function Blog() {
  const { t, tItems } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const articlesPerPage = 3;

  const articles = tItems<Article>("blog.articles");

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
      <SEO
        title={t("blog.seoTitle")}
        description={t("blog.seoDescription")}
        path="/blog"
      />
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
              {t("blog.title")}
            </h1>
            <p className="text-xl text-muted-foreground">{t("blog.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t("blog.searchPlaceholder")}
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-muted/30 flex-grow">
        <div className="container mx-auto px-4">
          {paginatedArticles.length > 0 ? (
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              {paginatedArticles.map((article) => (
                <Link key={article.title} href="/blog-post">
                  <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="sm:col-span-1 h-48 sm:h-auto rounded-t-xl sm:rounded-none sm:rounded-l-xl bg-gradient-to-br from-primary/15 via-muted to-secondary/10 border-b sm:border-b-0 sm:border-r border-border flex items-center justify-center overflow-hidden group-hover:from-primary/25 transition-colors" aria-hidden="true">
                      <Tag className="h-10 w-10 text-primary/60" />
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
                          {t("blog.readMore")}
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
              <p className="text-lg text-muted-foreground mb-4">{t("blog.noResults")}</p>
              <Button
                onClick={() => setSearchTerm("")}
                variant="outline"
                className="rounded-full"
              >
                {t("blog.clearSearch")}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-10 md:py-14 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-4">
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                variant="outline"
                className="gap-2 rounded-full px-3 sm:px-4"
                aria-label={t("blog.prevPageAria")}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{t("blog.prevPage")}</span>
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-2">
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
                className="gap-2 rounded-full px-3 sm:px-4"
                aria-label={t("blog.nextPageAria")}
              >
                <span className="hidden sm:inline">{t("blog.nextPage")}</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-center mt-6 text-sm text-muted-foreground">
              {t("blog.pageOf")} <span className="font-semibold text-secondary">{currentPage}</span>{" "}
              {t("blog.pageOfSeparator")}{" "}
              <span className="font-semibold text-secondary">{totalPages}</span>
              {filteredArticles.length > 0 && (
                <span>
                  {t("blog.showingRange", {
                    from: startIndex + 1,
                    to: Math.min(startIndex + articlesPerPage, filteredArticles.length),
                    total: filteredArticles.length,
                  })}
                </span>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              {t("blog.newsletterTitle")}
            </h2>
            <p className="text-lg text-gray-200">{t("blog.newsletterBody")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder={t("blog.newsletterPlaceholder")}
                className="px-4 py-3 rounded-full bg-white text-secondary placeholder:text-muted-foreground focus:outline-none flex-grow"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full">
                {t("blog.subscribe")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 p-10 md:p-16 bg-card rounded-2xl border border-border">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
              {t("blog.ctaTitle")}
            </h2>
            <p className="text-muted-foreground text-lg">{t("blog.ctaBody")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
                {t("common.bookOnWhatsapp")}
              </Button>
              <Button variant="outline" className="gap-2 rounded-full">
                <Phone className="h-4 w-4" />
                {t("common.callNow")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
