import type { Metadata } from "next";
import MajuliClient from "./MajuliClient";

export const metadata: Metadata = {
  title: "Majuli Island 3-Day Itinerary 2026: Trip Planner"s Largest River Island Before It Disappears (2026)",
  description:
    "2 complete Majuli plans — Budget and Cultural Immersion — with ferry timings, Satra visits, Mishing villages, mask-making, pottery and real costs.",
  keywords: [
    "majuli island itinerary",
    "majuli travel guide 2026",
    "majuli island assam",
    "largest river island world",
    "majuli satra monastery",
    "majuli mask making",
    "jorhat to majuli ferry",
    "majuli trip planner",
  ],
  openGraph: {
    title: "Majuli Island 3-Day Itinerary 2026: Trip Planner",
    description:
      "Ferry timings, Satra visits, mask-making, Mishing villages. 2 complete plans for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1615466459632-4e14e0e2a1f0?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Majuli island Brahmaputra river Assam",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Majuli", "Assam", "India", "Travel", "Itinerary", "River Island"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Majuli Island 3-Day Itinerary 2026: Trip Planner",
    description: "2 plans, ferry timings, Satra visits, real costs.",
    images: ["https://images.unsplash.com/photo-1615466459632-4e14e0e2a1f0?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/majuli-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/majuli-3-days#article",
      "headline": "Majuli Island in 3 Days: World's Largest River Island Before It Disappears (2026)",
      "description": "2 complete Majuli plans — Budget and Cultural Immersion — with ferry timings, Satra visits, Mishing villages, mask-making, pottery and real costs.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1615466459632-4e14e0e2a1f0?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/majuli-3-days",
      },
      "keywords": "majuli island, majuli 3 days, majuli satra, largest river island, assam travel guide",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
    },

    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Majuli Island 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/majuli-3-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Majuli Island, Assam, India",
      "description": "The world's largest river island in the Brahmaputra, known for its Vaishnavite Satras (monasteries), Mishing tribal culture, mask-making tradition, and pottery villages.",
      "url": "https://www.incredibleitinerary.com/blog/majuli-3-days",
      "touristType": ["Cultural Tourism", "Eco Tourism", "Heritage Tourism"],
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
          "name": "How do I reach Majuli Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fly to Jorhat Airport (JRH), then drive 14km to Nimati Ghat. Take the government ferry (1 hour, ₹15-20 per person) or a private boat to Kamalabari Ghat on Majuli. Ferries run from around 10am to 3pm. There are no bridges to the island.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Majuli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time. November offers the Raas Leela festival at the Satras. The monsoon season (June-September) makes ferries unreliable and floods large parts of the island. April-May is hot but still accessible.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Majuli trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can do 3 days for under ₹5,000 including basic accommodation, food, ferry and bicycle rental. A cultural immersion trip with guided Satra visits, homestays and craft workshops costs ₹6,000-₹15,000 per person.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Majuli Island really disappearing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Majuli has lost roughly two-thirds of its area since the 1950s due to Brahmaputra erosion. It was 1,255 sq km and is now around 352 sq km. Erosion is ongoing every monsoon season, making it one of India's most time-sensitive travel destinations.",
          },
        },
        {
          "@type": "Question",
          "name": "How many days are enough for Majuli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2-3 days is ideal. Day 1 for the major Satras and mask-making, Day 2 for Mishing tribal villages and pottery, Day 3 for cycling the island and catching the sunset over the Brahmaputra. 1 day is too rushed to absorb the culture.",
          },
        },
        {
          "@type": "Question",
          "name": "What are Satras in Majuli?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Satras are Vaishnavite monasteries founded in the 15th-16th century by the saint Srimanta Sankardeva. They are living centres of neo-Vaishnavite culture preserving dance, music, mask-making and theatre. Majuli has 22 active Satras, each with a distinct art form.",
          },
        },
      ],
};

export default function MajuliBlogPage() {
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
      <MajuliClient />
    </>
  );
}
