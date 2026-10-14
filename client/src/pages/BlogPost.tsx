import type { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, Clock, Tag } from "lucide-react";
import { SEO } from "@/components/SEO";
import { HeroBackdrop } from "@/components/ServiceHero";
import { CTASection } from "@/components/CTASection";
import { jsonLdArticle, jsonLdBreadcrumb } from "@/lib/seo";
import {
  BLOG_ARTICLES,
  blogPath,
  findArticle,
  formatArticleDate,
  localizeArticle,
} from "@/content/blog";
import { articleBody, readingMinutes } from "@/content/blog-bodies";
import { ALL_SUB_SERVICES, localizeSubService, subServicePath } from "@/content/services";
import { useLanguage } from "@/hooks/useLanguage";
import NotFound from "@/pages/not-found";

/** Top-level treatment pages an article can point to → `search.pages.<key>`. */
const PAGE_KEYS: Record<string, string> = {
  "/emergency": "emergency",
  "/implants": "implants",
  "/veneers": "veneers",
  "/crowns-bridges": "crownsBridges",
  "/cosmetic": "cosmetic",
  "/orthodontics": "orthodontics",
  "/whitening": "whitening",
  "/dental-surgery": "dentalSurgery",
  "/restorative": "restorative",
  "/general-preventive": "generalPreventive",
  "/xray-opg": "xrayOpg",
  "/at-home": "atHome",
  "/dental-tourism": "dentalTourism",
};

/** Inline markup used in article copy: **bold** and [anchor](/internal-path). */
function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(\/[^)\s]*\))/g).map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i} className="font-semibold text-secondary">{bold[1]}</strong>;
    const link = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
    if (link) {
      return (
        <Link key={i} href={link[2]} className="text-primary font-medium underline underline-offset-4 hover:no-underline">
          {link[1]}
        </Link>
      );
    }
    return part;
  });
}

function ArticleBlock({ text }: { text: string }) {
  if (text.startsWith("## ")) {
    return <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary pt-6">{text.slice(3)}</h2>;
  }
  const lines = text.split("\n");
  if (lines.every((line) => line.startsWith("- "))) {
    return (
      <ul className="list-disc pl-6 space-y-2 marker:text-primary">
        {lines.map((line, i) => (
          <li key={i}>{renderInline(line.slice(2))}</li>
        ))}
      </ul>
    );
  }
  return <p>{renderInline(text)}</p>;
}

export default function BlogPost() {
  const [location] = useLocation();
  const { t, tOr, tListOr, language } = useLanguage();
  const source = findArticle(location.replace(/^\/blog\//, ""));
  if (!source) return <NotFound />;

  const overlay = { tOr, tListOr };
  const article = localizeArticle(source, overlay);
  const body = articleBody(source.slug, overlay);
  const path = blogPath(source);
  const crumbs = [
    { name: t("nav.home"), path: "/" },
    { name: t("footer.links.blog"), path: "/blog" },
    { name: article.title, path },
  ];

  const related = source.related.map((href) => {
    const sub = ALL_SUB_SERVICES.find((s) => subServicePath(s) === href);
    if (sub) {
      const s = localizeSubService(sub, overlay);
      return { href, title: s.name, text: s.heroSubtitle };
    }
    const key = PAGE_KEYS[href];
    return { href, title: t(`search.pages.${key}.title`), text: t(`search.pages.${key}.excerpt`) };
  });

  // The next three articles in list order, wrapping around.
  const index = BLOG_ARTICLES.indexOf(source);
  const more = [1, 2, 3]
    .map((n) => BLOG_ARTICLES[(index + n) % BLOG_ARTICLES.length])
    .map((a) => localizeArticle(a, overlay));

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={article.seoTitle}
        description={article.seoDescription}
        path={path}
        ogType="article"
        jsonLd={[
          jsonLdArticle({
            headline: source.title,
            description: source.seoDescription,
            path,
            datePublished: source.datePublished,
          }),
          jsonLdBreadcrumb(crumbs),
        ]}
      />

      {/* Header */}
      <section className="relative w-full overflow-hidden bg-secondary">
        <HeroBackdrop />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
        <div className="container relative mx-auto px-4 py-14 md:py-20">
          <div className="max-w-3xl space-y-5">
            <nav aria-label={t("common.breadcrumbAria")} className="text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-1">
                {crumbs.slice(0, -1).map((c, i) => (
                  <li key={c.path} className="flex items-center gap-1">
                    {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
                    <Link href={c.path} className="hover:text-white transition-colors">{c.name}</Link>
                  </li>
                ))}
              </ol>
            </nav>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Tag className="h-4 w-4" /> {article.category}
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={source.datePublished}>{formatArticleDate(source.datePublished, language)}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {t("blog.minRead", { minutes: readingMinutes(source.slug) })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto space-y-5 text-lg leading-relaxed text-muted-foreground">
            {body.map((block, i) => (
              <ArticleBlock key={i} text={block} />
            ))}
            <p className="pt-6 text-sm italic">{t("blogPost.disclaimer")}</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-base text-primary font-semibold hover:underline">
              <ArrowLeft className="h-4 w-4" /> {t("blogPost.backToBlog")}
            </Link>
          </article>
        </div>
      </section>

      {/* Related treatments */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-8">{t("blogPost.relatedTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-secondary group-hover:text-primary transition-colors">{r.title}</h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{r.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-8">{t("blogPost.moreArticles")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {more.map((a) => (
                <Link
                  key={a.slug}
                  href={blogPath(a)}
                  className="group p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-sm transition-all"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">{a.category}</span>
                  <h3 className="mt-2 font-bold text-secondary group-hover:text-primary transition-colors">{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title={t("blogPost.ctaTitle")} text={t("blogPost.ctaText")} bgColor="bg-muted/30" />
    </div>
  );
}
