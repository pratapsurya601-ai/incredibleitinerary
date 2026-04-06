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
    "https://www.linkedin.com/in/surya-pratap-singh-490a18320",
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
// Generate destination-specific FAQs from post metadata
// Used for posts that don't have a dedicated page.tsx with custom JSON-LD
// ---------------------------------------------------------------------------
function generateFAQs(post: BlogPost): { question: string; answer: string }[] {
  const dest = post.destination;
  const dur  = post.duration;
  const days = parseInt(dur) || 5;
  const cat  = post.category;
  const country = post.country ?? "India";
  const isIndia = country === "India";

  return [
    {
      question: `How many days is enough for ${dest}?`,
      answer: `${dur} is the recommended duration for a fulfilling ${dest} trip. This gives you enough time to cover the top highlights, experience local culture, and explore ${cat.toLowerCase()} experiences without feeling rushed.`,
    },
    {
      question: `What is the best time to visit ${dest}?`,
      answer: isIndia
        ? `The best time to visit ${dest} is generally October to March when the weather is cooler and more pleasant. The peak tourist season runs November to February. Avoid the monsoon months (June–September) unless you specifically enjoy lush green landscapes.`
        : `The best time to visit ${dest} depends on your preferences. Generally, spring (March–May) and autumn (September–November) offer the most comfortable weather with fewer crowds and better prices on flights and accommodation.`,
    },
    {
      question: `How much does a ${days}-day trip to ${dest} cost?`,
      answer: isIndia
        ? `A ${dur} trip to ${dest} costs approximately ₹8,000–₹12,000 on a budget, ₹18,000–₹35,000 mid-range, and ₹60,000+ for a luxury experience per person. Costs vary based on accommodation type, travel season, and activities chosen.`
        : `A ${dur} trip to ${dest} typically costs ₹50,000–₹90,000 per person at a mid-range budget, including flights from India. Budget travellers can manage in ₹35,000–₹55,000, while a comfortable experience runs ₹80,000–₹1,50,000+.`,
    },
    {
      question: `Is ${dest} safe for solo travellers?`,
      answer: isIndia
        ? `${dest} is generally safe for solo travellers, including solo women. Stay in well-reviewed accommodation, avoid poorly lit areas at night, and keep your accommodation details private. Millions of solo travellers visit every year without incident.`
        : `${dest} is considered safe for solo travellers. Like any destination, take standard precautions — keep copies of your passport, use reputable transport, and stay in reviewed accommodation. Check your government's current travel advisory before departure.`,
    },
  ];
}

// ---------------------------------------------------------------------------
// BlogPostSchema — Article + BreadcrumbList + FAQPage + TouristDestination
// ---------------------------------------------------------------------------
export function BlogPostSchema({
  post,
  faqs,
}: {
  post: BlogPost;
  faqs?: { question: string; answer: string }[];
}) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const iso = toISO(post.date);
  const wordCount = estimateWordCount(post.duration);
  const faqItems = faqs && faqs.length > 0 ? faqs : generateFAQs(post);

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
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Travel Guides", item: `${BASE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: `${post.destination} ${post.duration} Guide`, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
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
