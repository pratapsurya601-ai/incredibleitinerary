import type { Metadata } from "next";
import PhuketClient from "./PhuketClient";

export const metadata: Metadata = {
  title: "Phuket in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description:
    "3 complete Phuket plans — Budget, Mid-Range, Luxury — with Phi Phi Island, Phang Nga Bay, Old Town, real costs in Thai Baht and the mistakes every first-timer makes.",
  keywords: [
    "phuket itinerary 5 days",
    "phuket travel guide 2026",
    "phuket budget travel",
    "phi phi island day trip",
    "phang nga bay james bond island",
    "phuket beaches guide",
    "phuket trip planner",
    "phuket thailand",
  ],
  openGraph: {
    title: "Phuket in 5 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets in Thai Baht, island-hopping routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Phuket Phi Phi Islands turquoise water limestone cliffs",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Phuket", "Thailand", "Travel", "Itinerary", "Islands", "Beach"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phuket in 5 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs in Baht, island routes.",
    images: ["https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/phuket-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/phuket-5-days#article",
      "headline": "Phuket in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Phuket plans — Budget, Mid-Range, Luxury — with Phi Phi Island, Phang Nga Bay, Old Town, real costs in Thai Baht and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://incredibleitinerary.com/blog/phuket-5-days",
      },
      "keywords": "phuket itinerary, phuket 5 days, phi phi island, phang nga bay, james bond island, phuket beaches",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 6200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Phuket in 5 Days", "item": "https://incredibleitinerary.com/blog/phuket-5-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Phuket?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "5 days is ideal to cover Phuket beaches, Phi Phi Island, Phang Nga Bay, Old Town culture and a cooking class. 3 days works if you pick either Phi Phi or Phang Nga, not both. 7 days lets you add Similan Islands or Krabi.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Phuket?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "November to April is dry season with calm seas and clear skies. December-January is peak season with highest prices. May-October is monsoon season with rough seas, but lower prices and fewer tourists. Phi Phi boats may be cancelled in rough weather.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 5-day Phuket trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: 6,000-10,000 Baht (170-280 USD) total for 5 days. Mid-range: 15,000-25,000 Baht (420-700 USD). Luxury: 40,000+ Baht (1,125+ USD). All include accommodation, food, transport and activities. International flights not included.",
          },
        },
        {
          "@type": "Question",
          "name": "Do Indian passport holders need a visa for Phuket?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Same rules as all Thailand entry points. Options: eVisa (apply online, 60-day stay), Visa on Arrival at Phuket airport (15-day stay, 2,000 Baht fee, carry 10,000 Baht cash), or Tourist Visa from Thai embassy (60 days). Most Western passports get 30-60 days visa-free.",
          },
        },
        {
          "@type": "Question",
          "name": "Patong or Kata Beach - which is better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patong for nightlife, shopping, and first-timer energy. Kata and Karon for families, couples, and anyone who wants actual sleep. Rawai for authentic Thai food and local vibes. Stay in Kata or Rawai and visit Patong for one evening if curious.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Phi Phi Island day trip worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. The limestone cliffs rising from turquoise water as you approach is one of those views that genuinely makes you gasp. Speedboat trips are 1,500-3,500 Baht and cover Phi Phi Don, Maya Bay, Pileh Lagoon and snorkelling spots. Go early to beat the crowds.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Phuket, Thailand",
      "description": "Thailand's largest island known for stunning beaches, Phi Phi Island day trips, Phang Nga Bay limestone karsts, vibrant Old Town, and world-class diving.",
      "url": "https://incredibleitinerary.com/blog/phuket-5-days",
      "touristType": ["Beach Tourism", "Island Tourism", "Adventure Tourism", "Cultural Tourism"],
    },
  ],
};

export default function PhuketBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PhuketClient />
    </>
  );
}
