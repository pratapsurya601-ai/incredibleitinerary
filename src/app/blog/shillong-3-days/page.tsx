import type { Metadata } from "next";
import ShillongClient from "./ShillongClient";

export const metadata: Metadata = {
  title: "Shillong 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Shillong trip in 3 days. Budget, Comfortable, Premium — with real timings, costs, and insider tips for Ward's Lake, Elephant Falls, Don Bosco.",
  keywords: [
    "shillong itinerary 3 days",
    "shillong travel guide 2026",
    "shillong budget travel",
    "meghalaya trip planner",
    "northeast india travel",
    "laitlum canyons shillong",
    "don bosco museum shillong",
    "shillong tourism",
  ],
  openGraph: {
    title: "Shillong 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, insider tips. 3 complete plans for exploring the Scotland of the East.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Shillong green hills and pine forests in Meghalaya",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Shillong", "Meghalaya", "Northeast India", "Travel", "Itinerary"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shillong 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, insider Northeast India tips.",
    images: ["https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/shillong-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/shillong-3-days#article",
      "headline": "Shillong in 3 Days: Complete Northeast India Guide (Budget to Premium, 2026)",
      "description": "3 complete Shillong plans — Budget, Comfortable, Premium — with real timings, costs, and insider tips for the Scotland of the East.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/shillong-3-days",
      },
      "keywords": "shillong itinerary, shillong 3 days, meghalaya travel guide, laitlum canyons, don bosco museum, northeast india",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
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
          "name": "Shillong in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/shillong-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Shillong, Meghalaya, India",
      "description": "The Scotland of the East and rock music capital of India — a hill station in Northeast India known for its pine forests, sacred groves, waterfalls, and vibrant Khasi culture.",
      "url": "https://www.incredibleitinerary.com/blog/shillong-3-days",
      "touristType": ["Cultural Tourism", "Nature Tourism", "Adventure Tourism"],
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
          "name": "What is the best time to visit Shillong?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to May is the best time to visit Shillong. October-November has clear skies and post-monsoon greenery. March-May brings spring with cherry blossoms and pleasant temperatures of 15-25°C. Avoid June-September when heavy monsoon rains make outdoor activities and road travel difficult.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Shillong?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fly to Guwahati (Lokpriya Gopinath Bordoloi International Airport), then take a shared Sumo or private cab to Shillong — 100km, approximately 3 hours via NH6. Shillong also has a small airport at Umroi (30km away) with limited flights. Most travellers fly to Guwahati for better connectivity and fares.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Shillong trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo traveller: under ₹7,000 for 3 days including accommodation, food, local transport and entry fees. Comfortable mid-range: ₹8,000-₹18,000 per person. Premium experience: ₹18,000-₹30,000 per person with boutique stays and private transport. All prices exclude flights to Guwahati.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Shillong safe for solo travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Shillong is one of the safest cities in India for solo travellers, including solo women. The Khasi people are matrilineal — women hold property and family names. Crime rates are very low, locals are genuinely helpful, and the city is compact enough to navigate easily on foot. Standard travel precautions apply.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a permit to visit Shillong?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian citizens do not need any permit for Shillong or most of Meghalaya. Foreign nationals need an Inner Line Permit (ILP) which can be obtained online or at the Meghalaya House in Guwahati. Processing takes 1-2 hours and is valid for 15 days. Carry your passport and two passport photos.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I combine Shillong with Cherrapunji or Dawki?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and you should. Cherrapunji (Sohra) is 55km south of Shillong — a day trip covers the living root bridges, Nohkalikai Falls and Seven Sisters Falls. Dawki with its crystal-clear Umngot River is 80km from Shillong and works as a full-day trip. Add 1-2 extra days for these side trips.",
          },
        },
      ],
};

export default function ShillongBlogPage() {
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
      <ShillongClient />
    </>
  );
}
