import type { Metadata } from "next";
import JibhiClient from "./JibhiClient";

export const metadata: Metadata = {
  title: "Jibhi & Tirthan Valley 3-Day Itinerary 2026: Trip Planner"s Hidden Gem (2026 Guide)",
  description:
    "Plan your Jibhi & Tirthan Valley trip in 3 days. Complete Jibhi and Tirthan Valley travel guide — Great Himalayan National Park, Jalori Pass, Serolsar.",
  keywords: [
    "jibhi travel guide",
    "tirthan valley itinerary",
    "jibhi himachal pradesh",
    "jalori pass trek",
    "serolsar lake jibhi",
    "great himalayan national park",
    "jibhi homestay",
    "hidden himachal destination",
  ],
  openGraph: {
    title: "Jibhi & Tirthan Valley 3 Days: Himachal's Hidden Gem (2026)",
    description:
      "Jalori Pass · Serolsar Lake · GHNP — Himachal's best kept secret with real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585087905632-6e3af9e60baf?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jibhi Tirthan Valley Himachal Pradesh mountains",
      },
    ],
    type: "article",
    publishedTime: "2026-03-21T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Jibhi", "Tirthan Valley", "India", "Travel", "Himachal Pradesh"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jibhi & Tirthan Valley 3-Day Itinerary 2026: Trip Planner",
    description: "Jalori Pass, Serolsar Lake, GHNP — Himachal's hidden gem, real costs.",
    images: ["https://images.unsplash.com/photo-1585087905632-6e3af9e60baf?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days#article",
      "headline": "Jibhi & Tirthan Valley in 3 Days: Himachal's Hidden Gem (2026)",
      "description":
        "Complete Jibhi and Tirthan Valley travel guide with Great Himalayan National Park, Jalori Pass, Serolsar Lake, trout fishing and authentic Himachali homestays.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1585087905632-6e3af9e60baf?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days",
      },
      "keywords": "jibhi, tirthan valley, jalori pass, serolsar lake, great himalayan national park, himachal hidden gem",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5000,
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
          "name": "Travel Guides",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Jibhi & Tirthan Valley in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to reach Jibhi from Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Delhi to Jibhi: 510km, 10-12 hours by road via Chandigarh-Shimla-Aut-Banjar. Overnight bus from Delhi to Kullu/Bhuntar (Rs.600-Rs.1,200), then local taxi to Jibhi (Rs.800-Rs.1,200, 1.5hrs). Best to drive.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Jibhi known for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jibhi is a small village in the Tirthan Valley, known for its extreme peace and quiet, traditional Himachali wooden houses, the Tirthan River for trout fishing, Jalori Pass (3,120m) just 8km away, and the Great Himalayan National Park buffer zone. Very few tourists compared to Manali or Shimla.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Jibhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "March to June for pleasant weather (15-25°C) and clear views. September to November for post-monsoon clarity and golden autumn leaves. December to February for snowfall — Jalori Pass is snow-covered and stunning but the road may be closed. Avoid July-August — heavy monsoon rains, leeches on trails, landslides on the road.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Jibhi better than Manali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jibhi is better if you want peace, nature and authenticity. Manali is better for adventure sports, nightlife and more tourist infrastructure. Jibhi has no Mall Road crowds, no traffic jams, and almost no commercialisation. It is what Manali was 20 years ago. If you want a quiet mountain retreat with riverside homestays, choose Jibhi.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the best treks near Jibhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jalori Pass to Serolsar Lake (5km one way, easy, 2-3 hours) is the most popular. Raghupur Fort trek from Jalori Pass (3km, easy, 1.5 hours) offers panoramic views. The Great Himalayan National Park has multi-day treks starting from Gushaini (permits required). Chehni Kothi trek (7km from Jibhi, moderate) leads to a 1,500-year-old tower temple.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Jibhi trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget trip costs Rs.4,000-Rs.7,000 per person (homestay Rs.500-Rs.800/night, meals included). A mid-range trip costs Rs.8,000-Rs.15,000 per person (riverside cottage, guided treks). Transport from Delhi adds Rs.600-Rs.1,500 each way by bus, or Rs.3,000-Rs.5,000 per person if sharing a taxi.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Jibhi & Tirthan Valley, Himachal Pradesh, India",
      "description": "A hidden gem in Himachal Pradesh's Kullu district — a peaceful valley known for traditional wooden homestays, trout-filled rivers, the Great Himalayan National Park, and Jalori Pass treks.",
      "url": "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days",
      "touristType": ["Eco Tourism", "Adventure Tourism", "Wellness Tourism"],
    },
  ],
};

export default function JibhiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JibhiClient />
    </>
  );
}
