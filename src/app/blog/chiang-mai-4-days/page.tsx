import type { Metadata } from "next";
import ChiangMaiClient from "./ChiangMaiClient";

export const metadata: Metadata = {
  title: "Chiang Mai 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Chiang Mai trip in 4 days. 3 complete Chiang Mai plans — Budget, Mid-Range, Luxury — with Doi Suthep, ethical elephant sanctuaries, night.",
  keywords: [
    "chiang mai itinerary 4 days",
    "chiang mai travel guide 2026",
    "chiang mai budget travel",
    "doi suthep temple",
    "chiang mai elephant sanctuary",
    "chiang mai night market",
    "chiang mai cooking class",
    "chiang mai trip planner",
  ],
  openGraph: {
    title: "Chiang Mai 4-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets in Thai Baht, temple routes, ethical elephant sanctuaries. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Chiang Mai Doi Suthep golden temple",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Chiang Mai", "Thailand", "Travel", "Itinerary", "Temples", "Culture"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiang Mai 4-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs in Baht, temple routes.",
    images: ["https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/chiang-mai-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/chiang-mai-4-days#article",
      "headline": "Chiang Mai in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Chiang Mai plans — Budget, Mid-Range, Luxury — with Doi Suthep, ethical elephant sanctuaries, night markets, cooking classes and real costs in Thai Baht.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/chiang-mai-4-days",
      },
      "keywords": "chiang mai itinerary, chiang mai 4 days, doi suthep, elephant sanctuary, sunday night market, chiang mai cooking class",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5900,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Chiang Mai in 4 Days", "item": "https://www.incredibleitinerary.com/blog/chiang-mai-4-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Chiang Mai, Thailand",
      "description": "Thailand's cultural capital in the northern mountains, known for ancient temples, ethical elephant sanctuaries, incredible street food, night markets, and a thriving cafe culture.",
      "url": "https://www.incredibleitinerary.com/blog/chiang-mai-4-days",
      "touristType": ["Cultural Tourism", "Food Tourism", "Eco Tourism", "Adventure Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Chiang Mai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is ideal to cover Old City temples, Doi Suthep, an ethical elephant sanctuary, cooking class, and night markets. 3 days works if you skip the day trip. 5-7 days lets you add Doi Inthanon, Pai, or a multi-day trek.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Chiang Mai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "November to February is cool season with temperatures of 15-28 degrees Celsius and clear skies. March-April is burning season with heavy smoke and haze - avoid if possible. May-October is rainy season with lush green landscapes and lower prices.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Chiang Mai trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: 2,400-4,800 Baht (68-135 USD) total for 4 days. Mid-range: 6,000-12,000 Baht (170-340 USD). Luxury: 20,000+ Baht (565+ USD). All include accommodation, food, transport and activities. Chiang Mai is one of the cheapest destinations in Southeast Asia.",
          },
        },
        {
          "@type": "Question",
          "name": "Do Indian passport holders need a visa for Chiang Mai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, same rules as all Thailand entry points. eVisa (apply online, 60-day stay), Visa on Arrival at Chiang Mai airport (15-day stay, 2,000 Baht fee), or Tourist Visa from Thai embassy (60 days). Most Western passports get 30-60 days visa-free.",
          },
        },
        {
          "@type": "Question",
          "name": "Are elephant sanctuaries in Chiang Mai ethical?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not all of them. Avoid any place that offers elephant riding, chains elephants, or uses bullhooks. Ethical sanctuaries let you feed, bathe, and walk with elephants in their natural habitat. Look for Elephant Nature Park, Elephant Jungle Sanctuary, or Patara Elephant Farm. The experience is better and ethical.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best area to stay in Chiang Mai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Old City (inside the moat) for temples and walking access. Nimmanhaemin Road area for cafes, boutiques, and modern vibe. Riverside for quiet boutique stays. Night Bazaar area for shopping access. Old City is best for first-timers as everything is walkable.",
          },
        },
      ],
};

export default function ChiangMaiBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ChiangMaiClient />
    </>
  );
}
