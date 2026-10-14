import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_SIZE,
  TITLE_SUFFIX,
} from "@/lib/seo";
import { useLanguage } from "@/hooks/useLanguage";

interface SEOProps {
  /**
   * Page title without the brand suffix (added automatically). Keep it
   * under ~45 characters so the whole title fits Google's ~60-char snippet.
   */
  title: string;
  /** Meta description for this page. Aim for 120–160 chars. */
  description: string;
  /** Route path starting with `/`, e.g. `/veneers`. Used for canonical and og:url. */
  path: string;
  /** Absolute URL or path-relative image for og:image / twitter:image. */
  image?: string;
  /** og:type — defaults to "website". Use "article" for blog posts. */
  ogType?: "website" | "article";
  /** One or more JSON-LD schema.org objects. */
  jsonLd?: object | object[];
  /** Set true to ask search engines not to index this page. */
  noindex?: boolean;
}

const OG_LOCALE = { en: "en_US", ru: "ru_RU", de: "de_DE" } as const;

/**
 * Per-page metadata. Relies on React 19's native hoisting of <title>,
 * <meta>, and <link> from anywhere in the tree into <head>. JSON-LD
 * <script> tags are not hoisted but Google reads them anywhere in the
 * document, so they're fine in-body.
 */
export function SEO({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  noindex = false,
}: SEOProps) {
  const { language } = useLanguage();
  const fullTitle =
    title.includes(SITE_NAME) || title.includes(TITLE_SUFFIX)
      ? title
      : `${title} | ${TITLE_SUFFIX}`;
  const url = `${SITE_URL}${path}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const isDefaultImage = image === DEFAULT_OG_IMAGE;
  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {/* A canonical on a noindex page (404, /thanks) is a mixed signal. */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <link rel="canonical" href={url} />
      )}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImage} />
      {isDefaultImage && (
        <>
          <meta property="og:image:width" content={String(DEFAULT_OG_IMAGE_SIZE.width)} />
          <meta property="og:image:height" content={String(DEFAULT_OG_IMAGE_SIZE.height)} />
          <meta property="og:image:alt" content={SITE_NAME} />
        </>
      )}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE[language]} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
