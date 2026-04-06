import type { Metadata } from "next";
import MunnarClient from "./MunnarClient";

export const metadata: Metadata = {
  title: "Munnar 3-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Munnar plans — Budget, Couple, Premium — with real timings, costs, Google Maps routes and the spots most tourists walk right past.",
  keywords: [
    "munnar itinerary 3 days",
    "munnar travel guide 2026",
    "munnar budget travel",
    "munnar couple trip",
    "munnar tea plantations",
    "eravikulam national park",
    "kolukkumalai sunrise trek",
    "munnar trip planner",
  ],
  openGraph: {
    title: "Munnar 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Munnar tea plantations and rolling green hills",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Munnar", "Kerala", "India", "Travel", "Itinerary", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munnar 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/munnar-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/munnar-3-days#article",
      "headline": "Munnar in 3 Days: Tea Hills, Wildlife & Sunrise Itinerary (Budget to Premium, 2026)",
      "description": "3 complete Munnar plans — Budget, Couple, Premium — with real timings, costs, Google Maps routes and the spots most tourists walk right past.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/munnar-3-days",
      },
      "keywords": "munnar itinerary, munnar 3 days, munnar travel guide, tea plantations kerala, eravikulam national park",
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
          "name": "Munnar in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/munnar-3-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Munnar, Kerala, India",
      "description": "Kerala's most famous hill station, known for endless tea plantations, endangered Nilgiri Tahr, misty peaks, and the highest tea estate in the world at Kolukkumalai.",
      "url": "https://www.incredibleitinerary.com/blog/munnar-3-days",
      "touristType": ["Nature Tourism", "Wildlife Tourism", "Adventure Tourism"],
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
          "name": "How many days are enough for Munnar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal to cover Munnar's major attractions including tea plantations, Eravikulam National Park, Mattupetty Dam, and a Kolukkumalai sunrise trip. 2 days feels rushed, 4 days lets you add a Thekkady side trip.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Munnar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "September to March is the best time. September-November offers post-monsoon greenery with fewer crowds. December-January has the best weather but peak tourist season. February-March is the sweet spot with clear skies and thinning crowds. April-May is hot. June-August monsoon brings heavy rain but the landscape is spectacular.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Munnar trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo traveller: under ₹7,000 including accommodation. Couple mid-range: ₹8,000-₹20,000 for two. Premium: ₹20,000-₹35,000 for two. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Munnar from Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Munnar is 130km from Kochi (4-5 hours by road). KSRTC buses run every 30 minutes from Ernakulam bus stand (₹150-₹250). Private cabs cost ₹2,500-₹3,500 one way. The last 60km is winding hill road with 40+ hairpin bends — sit on the left side for valley views.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Munnar worth visiting with kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Munnar is excellent for families. Mattupetty Dam boating, the TATA Tea Museum, and Eravikulam National Park are all kid-friendly. Skip Kolukkumalai with young children — the 4am jeep ride on rough terrain is not suitable for kids under 10.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need to book Eravikulam National Park tickets in advance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Eravikulam tickets must be booked online at munnarwildlife.com. Only 3,000 visitors per day are allowed, and weekends and holidays sell out days in advance. Book at least a week ahead during peak season (Oct-Jan). Entry is ₹125 for Indians, ₹525 for foreigners.",
          },
        },
      ],
};

export default function MunnarBlogPage() {
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
      <MunnarClient />
    </>
  );
}
