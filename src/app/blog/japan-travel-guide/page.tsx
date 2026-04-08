import type { Metadata } from "next";
import JapanGuideClient from "./JapanGuideClient";

export const metadata: Metadata = {
  title: "Japan Travel Guide: Tokyo, Kyoto, Osaka & Beyond (2026)",
  description:
    "Complete Japan travel guide covering Tokyo, Kyoto, Osaka, Hiroshima and more with routes, budgets, JR Pass tips and visa info.",
  keywords: [
    "japan travel guide",
    "japan itinerary 2026",
    "tokyo kyoto osaka",
    "jr pass guide",
    "japan budget travel",
    "japan visa for indians",
    "japan trip planner",
    "japan travel tips",
  ],
  openGraph: {
    title: "Japan Travel Guide: Tokyo, Kyoto, Osaka & Beyond (2026)",
    description:
      "8 city guides, 3 suggested routes, real budgets in yen, JR Pass breakdown and the mistakes that ruin Japan trips.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tokyo Shibuya Crossing with cherry blossoms and neon lights",
      },
    ],
    type: "article",
    publishedTime: "2026-04-09T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Japan", "Tokyo", "Kyoto", "Osaka", "Travel", "Asia"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Travel Guide: Tokyo, Kyoto, Osaka & Beyond (2026)",
    description: "8 city guides, 3 routes, real budgets, JR Pass breakdown.",
    images: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/japan-travel-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/japan-travel-guide#article",
      "headline": "Japan Travel Guide: Tokyo, Kyoto, Osaka & Beyond (2026)",
      "description":
        "Complete Japan travel guide covering Tokyo, Kyoto, Osaka, Hiroshima and more with routes, budgets, JR Pass tips and visa info.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-09T00:00:00Z",
      "dateModified": "2026-04-09T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/japan-travel-guide",
      },
      "keywords": "japan travel guide, tokyo, kyoto, osaka, hiroshima, jr pass, japan visa",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 7500,
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
          "name": "Japan Travel Guide",
          "item": "https://www.incredibleitinerary.com/blog/japan-travel-guide",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Japan",
      "description":
        "An island nation blending ancient temples, world-class cuisine, futuristic cities and natural beauty from Hokkaido to Okinawa.",
      "url": "https://www.incredibleitinerary.com/blog/japan-travel-guide",
      "touristType": ["Cultural Tourism", "City Tourism", "Food Tourism", "Adventure Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Japan Rail Pass worth it in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you are travelling between multiple cities. A 7-day JR Pass costs around 50,000 yen and covers bullet trains between Tokyo, Kyoto, Osaka and Hiroshima. A single Tokyo-Kyoto round trip by Shinkansen costs about 28,000 yen, so adding even one more city makes the pass worthwhile.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a Japan trip cost per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can manage on 8,000-12,000 yen per day (about 53-80 USD) using hostels, convenience store meals and local trains. Mid-range travellers spend 15,000-25,000 yen per day (100-167 USD). Luxury travellers should budget 40,000 yen and above per day (267+ USD). All figures exclude international flights.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Japan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Late March to mid-April for cherry blossoms, or mid-October to late November for autumn foliage. May and September-October offer pleasant weather with fewer crowds. Avoid Golden Week (late April to early May), Obon (mid-August) and New Year when domestic travel peaks and prices surge.",
      },
    },
    {
      "@type": "Question",
      "name": "Do Indian passport holders need a visa for Japan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Indian passport holders must apply for a tourist visa at the Japanese Embassy or Consulate. Processing takes 5-7 working days. You need a confirmed return ticket, hotel bookings and a recent bank statement. Most Western passport holders (US, UK, EU, Australia) get visa-free entry for up to 90 days.",
      },
    },
    {
      "@type": "Question",
      "name": "Is 7 days enough for Japan or should I plan 14 days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "7 days is enough for the classic Tokyo-Kyoto-Osaka route. 10 days lets you add Hiroshima and Nara comfortably. 14 days is ideal for a complete circuit including Hokkaido or a slower pace with day trips to Hakone, Yokohama and smaller cities. First-timers should aim for at least 10 days.",
      },
    },
  ],
};

export default function JapanGuidePage() {
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
      <JapanGuideClient />
    </>
  );
}
