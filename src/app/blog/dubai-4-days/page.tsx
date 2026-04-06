import type { Metadata } from "next";
import DubaiClient from "./DubaiClient";

export const metadata: Metadata = {
  title: "Dubai 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Dubai trip in 4 days. Budget, Mid-Range, Luxury — with real timings, costs in AED/USD, Burj Khalifa sunrise tips and the mistakes every.",
  keywords: [
    "dubai itinerary 4 days",
    "dubai travel guide 2026",
    "dubai budget travel",
    "burj khalifa tickets",
    "dubai desert safari",
    "dubai trip planner",
    "uae travel guide",
    "dubai mall guide",
  ],
  openGraph: {
    title: "Dubai 4-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, desert safari tips. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dubai skyline with Burj Khalifa at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Dubai", "UAE", "Travel", "Itinerary", "Middle East"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai 4-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, desert safari tips.",
    images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/dubai-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/dubai-4-days#article",
      "headline": "Dubai in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      "description": "3 complete Dubai plans — Budget, Mid-Range, Luxury — with real timings, costs in AED/USD, Burj Khalifa sunrise tips and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/dubai-4-days",
      },
      "keywords": "dubai itinerary, dubai 4 days, burj khalifa, desert safari, dubai mall, gold souk",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Dubai in 4 Days", "item": "https://www.incredibleitinerary.com/blog/dubai-4-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Dubai, United Arab Emirates",
      "description": "The UAE's most famous city, known for record-breaking architecture, luxury shopping, desert adventures, and a blend of Arabian heritage with futuristic design.",
      "url": "https://www.incredibleitinerary.com/blog/dubai-4-days",
      "touristType": ["Urban Tourism", "Luxury Tourism", "Adventure Tourism", "Cultural Tourism"],
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
          "name": "How many days are enough for Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is ideal for Dubai. You can cover Burj Khalifa, Dubai Mall, Old Dubai, a desert safari, and the beaches without rushing. 3 days is possible but tight. 5+ days lets you add Abu Dhabi or deeper exploration.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Dubai trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget: AED 300-500/day ($82-136 USD). Mid-range: AED 600-1200/day ($163-327 USD). Luxury: AED 2000+/day ($545+ USD). This includes accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a visa for Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian passport holders need a UAE visa (apply online or through airlines, AED 350-500, 3-5 working days). US, UK, EU, Australian, and Canadian citizens get visa-on-arrival for 30 days. No pre-registration required.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "November to March offers the best weather (20-30C). December-January is peak season with highest prices. October and April are shoulder months with good deals. May-September is extremely hot (45C+) but indoor attractions are 24/7 air-conditioned.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Dubai expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dubai can be done on any budget. Street food in Old Dubai costs AED 15-25 per meal. The metro is AED 3-7.50 per ride. Budget hotels in Deira start at AED 150/night. The expensive reputation comes from luxury experiences which are optional.",
          },
        },
      ],
};

export default function DubaiBlogPage() {
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
      <DubaiClient />
    </>
  );
}
