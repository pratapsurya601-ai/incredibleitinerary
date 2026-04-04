import type { Metadata } from "next";
import BangkokClient from "./BangkokClient";

export const metadata: Metadata = {
  title: "Bangkok in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description:
    "3 complete Bangkok plans — Budget, Mid-Range, Luxury — with real timings, costs in Thai Baht, temple routes, street food spots and the mistakes every first-timer makes.",
  keywords: [
    "bangkok itinerary 4 days",
    "bangkok travel guide 2026",
    "bangkok budget travel",
    "bangkok temples guide",
    "grand palace bangkok",
    "chatuchak market bangkok",
    "bangkok street food",
    "bangkok trip planner",
  ],
  openGraph: {
    title: "Bangkok in 4 Days: Budget to Luxury Itinerary 2026",
    description:
      "Real timings, actual budgets in Thai Baht, BTS routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bangkok Grand Palace golden temple spires",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Bangkok", "Thailand", "Travel", "Itinerary", "Temples"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangkok in 4 Days: The Only Guide You Need (2026)",
    description: "3 plans, real timings, actual costs in Baht, BTS routes.",
    images: ["https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/bangkok-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/bangkok-4-days#article",
      "headline": "Bangkok in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Bangkok plans — Budget, Mid-Range, Luxury — with real timings, costs in Thai Baht, temple routes, street food spots and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80",
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
        "@id": "https://incredibleitinerary.com/blog/bangkok-4-days",
      },
      "keywords": "bangkok itinerary, bangkok 4 days, bangkok travel guide, grand palace, chatuchak market, bangkok street food",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5800,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Bangkok in 4 Days", "item": "https://incredibleitinerary.com/blog/bangkok-4-days" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Bangkok?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is ideal to cover Bangkok's temples, markets, food scene and a day trip to Ayutthaya. 2-3 days works if you skip Ayutthaya. 5-6 days lets you add Kanchanaburi or a slower pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Bangkok?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "November to February is the cool and dry season with temperatures around 25-32 degrees Celsius. March-May is extremely hot (35-40 degrees). June-October is monsoon season with afternoon downpours but lower prices and fewer crowds.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Bangkok trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 4 days for 3,200-6,000 Baht (90-170 USD) per day including accommodation. Mid-range is 8,000-16,000 Baht (225-450 USD) per day. Luxury starts at 24,000 Baht (680 USD) per day. All include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Do Indian passport holders need a visa for Thailand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian passport holders can apply for a Thailand eVisa online or get a Visa on Arrival for stays up to 15 days (1,000 Baht fee). For stays up to 60 days apply for a Tourist Visa at the Thai embassy. Most Western passport holders get 30-60 days visa-free entry.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Bangkok safe for solo travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bangkok is very safe for solo travellers including women. Violent crime against tourists is rare. Main scams include tuk-tuk gem shop redirects, inflated taxi meters, and jet ski damage scams. Use BTS, MRT, and Grab for safe transport.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best area to stay in Bangkok?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For first-timers: Sukhumvit (near BTS Nana to Ekkamai) for convenience and nightlife. For temples and old city: Khao San Road area. For luxury: Riverside near ICONSIAM. For budget: Khao San Road or Silom. Always stay near a BTS or MRT station.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Bangkok, Thailand",
      "description": "Thailand's capital city known for ornate temples, vibrant street food, floating markets, and a seamless blend of traditional culture and modern city life.",
      "url": "https://incredibleitinerary.com/blog/bangkok-4-days",
      "touristType": ["Cultural Tourism", "Food Tourism", "Shopping Tourism"],
    },
  ],
};

export default function BangkokBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BangkokClient />
    </>
  );
}
