import type { Metadata } from "next";
import AbuDhabiClient from "./AbuDhabiClient";

export const metadata: Metadata = {
  title: "Abu Dhabi 3-Day Itinerary 2026: Trip Planner",
  description:
    "2 complete Abu Dhabi plans — Budget, Comfortable — with real timings, costs in AED/USD, Sheikh Zayed Mosque tips and the mistakes every first-timer makes.",
  keywords: [
    "abu dhabi itinerary 3 days",
    "abu dhabi travel guide 2026",
    "sheikh zayed mosque",
    "louvre abu dhabi",
    "abu dhabi budget travel",
    "abu dhabi trip planner",
    "uae travel guide",
    "yas island abu dhabi",
  ],
  openGraph: {
    title: "Abu Dhabi 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Sheikh Zayed Mosque golden hour tips. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sheikh Zayed Grand Mosque Abu Dhabi at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Abu Dhabi", "UAE", "Travel", "Itinerary", "Middle East"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Dhabi 3-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, actual costs, Sheikh Zayed Mosque tips.",
    images: ["https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/abu-dhabi-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/abu-dhabi-3-days#article",
      "headline": "Abu Dhabi in 3 Days: Complete Itinerary Guide (Budget to Comfortable, 2026)",
      "description": "2 complete Abu Dhabi plans with real timings, costs in AED/USD, Sheikh Zayed Mosque tips and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com", "logo": { "@type": "ImageObject", "url": "https://www.incredibleitinerary.com/logo.png" } },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/abu-dhabi-3-days" },
      "keywords": "abu dhabi itinerary, abu dhabi 3 days, sheikh zayed mosque, louvre abu dhabi, yas island",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 4200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Abu Dhabi in 3 Days", "item": "https://www.incredibleitinerary.com/blog/abu-dhabi-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Abu Dhabi, United Arab Emirates",
      "description": "The UAE capital, known for Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, Yas Island theme parks, and a more culturally authentic Emirati experience than Dubai.",
      "url": "https://www.incredibleitinerary.com/blog/abu-dhabi-3-days",
      "touristType": ["Cultural Tourism", "Urban Tourism", "Family Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
        { "@type": "Question", "name": "How many days are enough for Abu Dhabi?", "acceptedAnswer": { "@type": "Answer", "text": "3 days is ideal for Abu Dhabi. You can cover Sheikh Zayed Mosque, Louvre, Yas Island, and the Corniche without rushing. 2 days as a Dubai day-extension is possible but tight." } },
        { "@type": "Question", "name": "How much does a 3-day Abu Dhabi trip cost?", "acceptedAnswer": { "@type": "Answer", "text": "Budget: AED 250-450/day ($68-123 USD). Comfortable: AED 500-1000/day ($136-272 USD). This includes accommodation, food, transport and activities." } },
        { "@type": "Question", "name": "Do I need a visa for Abu Dhabi?", "acceptedAnswer": { "@type": "Answer", "text": "Same as Dubai. Indian passport holders need a UAE visa (apply online, AED 350-500). US, UK, EU, AU, CA citizens get visa-on-arrival for 30 days free." } },
        { "@type": "Question", "name": "Is Abu Dhabi worth visiting if I've seen Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Abu Dhabi is culturally richer with Sheikh Zayed Mosque and Louvre Abu Dhabi. It's less commercial, more spacious, and the Emirati culture is more visible. They're complementary, not redundant." } },
        { "@type": "Question", "name": "What is the best time to visit Abu Dhabi?", "acceptedAnswer": { "@type": "Answer", "text": "November to March for comfortable outdoor weather (20-28C). December-January is peak season. October and April are shoulder months. May-September is extremely hot (45C+)." } },
      ],
};

export default function AbuDhabiBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <AbuDhabiClient />
    </>
  );
}
