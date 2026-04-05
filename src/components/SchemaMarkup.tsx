import type { BlogPost } from "@/data/blog";

const BASE_URL = "https://www.incredibleitinerary.com";

// Editorial author entity — consistent across all posts for E-E-A-T
const AUTHOR_ENTITY = {
  "@type": "Person",
  name: "IncredibleItinerary Editorial Team",
  description:
    "Travel writers with first-hand experience across India, Southeast Asia, Europe, and the Middle East. Every guide is researched on the ground.",
  url: `${BASE_URL}/about`,
  sameAs: [
    "https://instagram.com/incredibleitinerary",
    "https://facebook.com/incredibleitinerary",
  ],
};

const PUBLISHER_ENTITY = {
  "@type": "Organization",
  name: "IncredibleItinerary",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
};

/** Convert "March 21, 2026" → ISO 8601 string */
function toISO(date: string): string {
  const d = new Date(date);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

/** Estimate word count from duration string ("6 Days" → ~4200 words) */
function estimateWordCount(duration: string): number {
  const days = parseInt(duration) || 5;
  return Math.round(days * 700);
}

// ---------------------------------------------------------------------------
// BlogPostSchema — Article + BreadcrumbList + TouristDestination + Speakable
// ---------------------------------------------------------------------------
export function BlogPostSchema({ post }: { post: BlogPost }) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const iso = toISO(post.date);
  const wordCount = estimateWordCount(post.duration);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        image: {
          "@type": "ImageObject",
          url: post.image,
          description: post.imageAlt,
        },
        datePublished: iso,
        dateModified: iso,
        author: AUTHOR_ENTITY,
        publisher: PUBLISHER_ENTITY,
        keywords: post.tags.join(", "),
        wordCount,
        articleSection: "Travel Guides",
        inLanguage: "en-IN",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        about: {
          "@type": "TouristDestination",
          name: post.destination,
          description: post.excerpt,
          url,
          ...(post.country ? { containedInPlace: { "@type": "Country", name: post.country } } : {}),
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".article-summary", ".quick-answer"],
        },
        timeRequired: `P${parseInt(post.duration) || 5}D`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Blog",  item: `${BASE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.destination, item: url },
        ],
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

// ---------------------------------------------------------------------------
// FAQSchema — FAQPage rich snippet
// ---------------------------------------------------------------------------
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
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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

// ---------------------------------------------------------------------------
// HowToSchema — Step-by-step itinerary rich snippet (shows in Google SERP)
// Pass the destination, duration, and the per-day steps.
// ---------------------------------------------------------------------------
export function HowToSchema({
  destination,
  duration,
  url,
  steps,
  description,
}: {
  destination: string;
  duration: string;
  url: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  const days = parseInt(duration) || 5;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Plan a ${destination} Trip in ${duration}`,
    description,
    totalTime: `P${days}D`,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "Varies by budget",
    },
    supply: [
      { "@type": "HowToSupply", name: "Valid passport or ID" },
      { "@type": "HowToSupply", name: "Travel insurance" },
      { "@type": "HowToSupply", name: "Accommodation bookings" },
    ],
    tool: [
      { "@type": "HowToTool", name: "IncredibleItinerary Trip Calculator", url: `${BASE_URL}/tools/trip-calculator` },
      { "@type": "HowToTool", name: "IncredibleItinerary Visa Checker", url: `${BASE_URL}/tools/visa-checker` },
    ],
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url,
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

// ---------------------------------------------------------------------------
// GeneratedPostSchema — lightweight Article schema for programmatic posts
// ---------------------------------------------------------------------------
export function GeneratedPostSchema({
  slug,
  title,
  description,
  destination,
  publishDate,
  image,
}: {
  slug: string;
  title: string;
  description: string;
  destination: string;
  publishDate: string;
  image: string;
}) {
  const url = `${BASE_URL}/blog/${slug}`;
  const iso = toISO(publishDate);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        image: { "@type": "ImageObject", url: image },
        datePublished: iso,
        dateModified: iso,
        author: AUTHOR_ENTITY,
        publisher: PUBLISHER_ENTITY,
        articleSection: "Travel Guides",
        inLanguage: "en-IN",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        about: {
          "@type": "TouristDestination",
          name: destination,
          url: `${BASE_URL}/blog`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: destination, item: url },
        ],
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
