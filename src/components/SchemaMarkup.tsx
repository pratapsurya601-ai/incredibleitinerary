import type { BlogPost } from "@/data/blog";

const BASE_URL = "https://www.incredibleitinerary.com";

/** Convert "March 21, 2026" or "April 2026" → ISO 8601 string */
function toISO(date: string): string {
  const d = new Date(date);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

/**
 * Article + BreadcrumbList + TouristDestination schema for every blog post.
 * Drop this into any blog post page that doesn't have its own inline schema.
 */
export function BlogPostSchema({ post }: { post: BlogPost }) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const iso = toISO(post.date);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: { "@type": "ImageObject", url: post.image },
        datePublished: iso,
        dateModified: iso,
        author: {
          "@type": "Organization",
          name: "IncredibleItinerary",
          url: BASE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "IncredibleItinerary",
          url: BASE_URL,
          logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
        },
        keywords: post.tags.join(", "),
        articleSection: "Travel Guides",
        inLanguage: "en-IN",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Blog",  item: `${BASE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.destination, item: url },
        ],
      },
      {
        "@type": "TouristDestination",
        name: post.destination,
        description: post.excerpt,
        url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * FAQPage schema for rich Q&A snippets in Google Search.
 * Pass the same FAQ items you render visibly on the page.
 */
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (!faqs.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
