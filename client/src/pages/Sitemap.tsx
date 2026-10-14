import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import { SEO } from "@/components/SEO";
import { track } from "@/lib/analytics";
import { ALL_SUB_SERVICES, CATEGORIES, subServicePath } from "@/content/services";
import type { CategorySlug } from "@/content/services";
import { localizeCategory, localizeSubService } from "@/content/services";
import { BLOG_ARTICLES, blogPath, localizeArticle } from "@/content/blog";
import { useLanguage } from "@/hooks/useLanguage";

// Link labels live in the locale lists (sitemap.main / .treatmentLinks /
// .legalLinks); these arrays fix the order and the routes.
const MAIN_PATHS = ["/", "/about", "/doctors", "/gallery", "/blog", "/faq", "/contact"];
const TREATMENT_PATHS = [
  "/services",
  "/emergency",
  "/implants",
  "/veneers",
  "/cosmetic",
  "/xray-opg",
  "/at-home",
  "/dental-tourism",
];
const LEGAL_PATHS = ["/privacy", "/terms"];

function zip(labels: string[], paths: string[]) {
  return labels.map((name, i) => ({ name, path: paths[i] }));
}

const CATEGORY_ORDER: CategorySlug[] = ["dental-surgery", "crowns-bridges", "restorative", "orthodontics", "whitening", "general-preventive"];

export default function Sitemap() {
  const { t, tList, tOr, tListOr } = useLanguage();
  const overlay = { tOr, tListOr };

  const categorySections = CATEGORY_ORDER.map((slug) => {
    const cat = localizeCategory(CATEGORIES[slug], overlay);
    return {
      title: cat.name,
      links: [
        { name: t("sitemap.categoryOverview", { category: cat.shortName }), path: cat.path },
        ...ALL_SUB_SERVICES.filter((s) => s.category === slug)
          .map((s) => ({ name: localizeSubService(s, overlay).name, path: subServicePath(s) })),
      ],
    };
  });

  const sections = [
    { title: t("sitemap.mainPages"), links: zip(tList("sitemap.main"), MAIN_PATHS) },
    { title: t("sitemap.treatments"), links: zip(tList("sitemap.treatmentLinks"), TREATMENT_PATHS) },
    ...categorySections,
    {
      title: t("sitemap.blogArticles"),
      links: BLOG_ARTICLES.map((a) => ({ name: localizeArticle(a, overlay).title, path: blogPath(a) })),
    },
    { title: t("sitemap.legal"), links: zip(tList("sitemap.legalLinks"), LEGAL_PATHS) },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO title={t("sitemap.seoTitle")} description={t("sitemap.seoDescription")} path="/sitemap" />
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">{t("sitemap.title")}</h1>
            <p className="text-muted-foreground text-lg">{t("sitemap.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl p-8 border border-border hover:border-primary/40 transition-all shadow-sm hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-bold text-secondary">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.path}>
                        <Link href={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                          <span className="text-primary">›</span>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h2 className="text-2xl font-serif font-bold text-secondary mb-4">{t("sitemap.lookingTitle")}</h2>
              <p className="text-muted-foreground mb-6">{t("sitemap.lookingBody")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold" asChild>
                  <Link href="/contact">{t("sitemap.contactUs")}</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full font-semibold" asChild>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "sitemap" })}>{t("sitemap.messageWhatsapp")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
