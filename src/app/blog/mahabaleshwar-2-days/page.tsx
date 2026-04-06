import type { Metadata } from "next";
import MahabaleshwarClient from "./MahabaleshwarClient";

export const metadata: Metadata = {
  title: "Mahabaleshwar 2-Day Itinerary 2026: Trip Planner",
  description:
    "2 complete Mahabaleshwar plans — Budget and Weekend — with real timings, costs, viewpoint tips and the mistakes every first-timer makes.",
  keywords: [
    "mahabaleshwar itinerary 2 days",
    "mahabaleshwar travel guide 2026",
    "mahabaleshwar budget trip",
    "mahabaleshwar weekend trip",
    "arthurs seat mahabaleshwar",
    "pratapgad fort mahabaleshwar",
    "mahabaleshwar strawberry farms",
    "mahabaleshwar viewpoints",
  ],
  openGraph: {
    title: "Mahabaleshwar 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, viewpoint tips. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mahabaleshwar Western Ghats valley viewpoint",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mahabaleshwar", "India", "Travel", "Itinerary", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahabaleshwar 2-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, actual costs, viewpoint tips.",
    images: ["https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mahabaleshwar-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mahabaleshwar-2-days#article",
      "headline": "Mahabaleshwar in 2 Days: Hill Station Itinerary with Viewpoints, Forts & Strawberry Farms (2026)",
      "description": "2 complete Mahabaleshwar plans — Budget and Weekend — with real timings, costs, viewpoint tips and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/mahabaleshwar-2-days",
      },
      "keywords": "mahabaleshwar itinerary, mahabaleshwar 2 days, arthurs seat, pratapgad fort, strawberry farms, western ghats",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3800,
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
          "name": "Mahabaleshwar in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/mahabaleshwar-2-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Mahabaleshwar, Maharashtra, India",
      "description": "Maharashtra's most popular hill station in the Western Ghats, famous for dramatic cliff viewpoints, strawberry farms, ancient temples, and the historic Pratapgad Fort.",
      "url": "https://www.incredibleitinerary.com/blog/mahabaleshwar-2-days",
      "touristType": ["Nature Tourism", "Hill Station", "Weekend Getaway", "Heritage Tourism"],
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
          "name": "How many days are enough for Mahabaleshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is enough to cover all major viewpoints, Pratapgad Fort, Mapro Garden, Venna Lake and strawberry farms. 3 days lets you add Old Mahabaleshwar temples and the Koyna Valley drive at a relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Mahabaleshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to May is the best time. October-November has post-monsoon greenery with fewer crowds. December-February is peak season with pleasant weather but weekend crowds from Mumbai and Pune. March-May is strawberry season. June-September the hill station is closed due to heavy monsoon rainfall.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Mahabaleshwar trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget trip costs under ₹5,000 per person including transport, stay and food. A comfortable weekend trip costs ₹6,000-₹15,000 per person with a good hotel, meals at restaurants, and all activities. All prices include accommodation, food, transport and entry fees.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Mahabaleshwar good for a weekend trip from Mumbai or Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mahabaleshwar is one of the best weekend getaways from both Mumbai (260km, 5-6 hours) and Pune (120km, 2.5-3 hours). Leave Friday evening or early Saturday morning. The Pune route via Wai is the most scenic approach through the Western Ghats.",
          },
        },
        {
          "@type": "Question",
          "name": "Are strawberry farms worth visiting in Mahabaleshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The pick-your-own strawberry farms are fun for families with kids but overpriced for adults at around ₹400 for a small basket. You get better value buying fresh strawberries at roadside stalls for ₹100-₹150 per box. Mapro Garden is worth a free visit for tastings and the chocolate factory tour.",
          },
        },
        {
          "@type": "Question",
          "name": "What should I not miss in Mahabaleshwar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arthur's Seat viewpoint at 7am before the fog rolls in, Pratapgad Fort which most tourists skip despite being just 24km away, and the ancient temples at Old Mahabaleshwar. The drive to Pratapgad through the Western Ghats is worth the trip on its own.",
          },
        },
      ],
};

export default function MahabaleshwarBlogPage() {
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
      <MahabaleshwarClient />
    </>
  );
}
