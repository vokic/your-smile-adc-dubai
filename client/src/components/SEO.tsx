import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

interface SEOProps {
  /** Page title without the site-name suffix (added automatically). */
  title: string;
  /** Meta description for this page. Aim for 130–160 chars. */
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
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

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
