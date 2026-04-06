import type { Metadata } from "next";
import DarjeelingClient from "./DarjeelingClient";

export const metadata: Metadata = {
  title: "Darjeeling 4-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Darjeeling plans — Budget, Comfortable, Premium — with Tiger Hill sunrise, toy train, tea estates, real timings and costs.",
  keywords: [
    "darjeeling itinerary 4 days",
    "darjeeling travel guide 2026",
    "darjeeling budget travel",
    "tiger hill sunrise darjeeling",
    "darjeeling toy train",
    "darjeeling tea estate visit",
    "darjeeling trip planner",
    "darjeeling packages india",
  ],
  openGraph: {
    title: "Darjeeling 4-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Tiger Hill sunrise, toy train, tea estates. 3 complete plans for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1622227056993-6e7f88420855?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Darjeeling tea gardens with Kangchenjunga mountain view",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Darjeeling", "India", "Travel", "Itinerary", "Hill Station", "Mountains"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darjeeling 4-Day Itinerary 2026: Trip Planner",
    description: "3 plans, Tiger Hill sunrise, toy train, tea estates, real costs.",
    images: ["https://images.unsplash.com/photo-1622227056993-6e7f88420855?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/darjeeling-4-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/darjeeling-4-days#article",
      "headline": "Darjeeling in 4 Days: Complete Hill Station Guide (Budget to Premium, 2026)",
      "description": "3 complete Darjeeling plans — Budget, Comfortable, Premium — with Tiger Hill sunrise, toy train, tea estates, real timings and costs.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1622227056993-6e7f88420855?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/darjeeling-4-days",
      },
      "keywords": "darjeeling itinerary, darjeeling 4 days, tiger hill sunrise, darjeeling toy train, happy valley tea estate",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5200,
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
          "name": "Darjeeling in 4 Days",
          "item": "https://www.incredibleitinerary.com/blog/darjeeling-4-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Darjeeling, West Bengal, India",
      "description": "Queen of the Hills — a colonial-era hill station at 6,710 ft known for tea gardens, Kangchenjunga views, the UNESCO Heritage toy train, and Himalayan culture.",
      "url": "https://www.incredibleitinerary.com/blog/darjeeling-4-days",
      "touristType": ["Mountain Tourism", "Cultural Tourism", "Heritage Tourism", "Tea Tourism"],
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
          "name": "How many days are enough for Darjeeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is ideal to cover Tiger Hill, the toy train, tea estates, Peace Pagoda, and a day trip to Kalimpong or Sandakphu. 3 days works if you skip the day trip. 5-6 days allows adding Mirik Lake and trekking.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Darjeeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to December offers the clearest Kangchenjunga views and pleasant weather. March to May is the second-best season with blooming rhododendrons. Avoid June to September (monsoon) when landslides are common and views are obscured.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Darjeeling trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 4 days for under ₹10,000 including accommodation. A comfortable mid-range trip costs ₹10,000-₹25,000. Premium stays with luxury hotels and private transport run ₹25,000-₹45,000. All prices per person.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Darjeeling toy train worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but take the 40-minute joyride from Darjeeling to Ghum instead of the full 7-hour NJP route. The joyride covers the best section including Batasia Loop and costs ₹800-₹1,500. The full route is for serious train enthusiasts only.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I see Kangchenjunga from Darjeeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Tiger Hill at 4am gives the best view of Kangchenjunga (world's 3rd highest peak) at sunrise. October-December has the highest chance of clear skies. Even from Mall Road and Observatory Hill you can see the peaks on clear days.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Darjeeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fly to Bagdogra Airport (IXB), then drive 3 hours uphill to Darjeeling (80km). Shared jeeps cost ₹250-₹350 per person from Siliguri, private cabs ₹2,500-₹3,500. The toy train from NJP takes 7 hours — scenic but impractical for most.",
          },
        },
      ],
};

export default function DarjeelingBlogPage() {
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
      <DarjeelingClient />
    </>
  );
}
