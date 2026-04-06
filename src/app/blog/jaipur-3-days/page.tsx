import type { Metadata } from "next";
import JaipurClient from "./JaipurClient";

export const metadata: Metadata = {
  title: "Jaipur 3-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Jaipur plans — Budget, Heritage, Royal — with real timings, costs, Google Maps routes and the mistakes every first-timer makes.",
  keywords: [
    "jaipur itinerary 3 days",
    "jaipur travel guide 2026",
    "jaipur budget travel",
    "amber fort jaipur",
    "hawa mahal jaipur",
    "city palace jaipur",
    "jaipur rajasthan trip",
    "jaipur trip planner",
  ],
  openGraph: {
    title: "Jaipur 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hawa Mahal Jaipur pink city at golden hour",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Jaipur", "India", "Travel", "Itinerary", "Rajasthan", "Heritage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jaipur-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/jaipur-3-days#article",
      "headline": "Jaipur in 3 Days: The Only Itinerary Guide You Need (Budget to Royal, 2026)",
      "description": "3 complete Jaipur plans — Budget, Heritage, Royal — with real timings, costs, Google Maps routes and the mistakes every first-timer makes.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/jaipur-3-days",
      },
      "keywords": "jaipur itinerary, jaipur 3 days, jaipur travel guide, amber fort, hawa mahal, city palace, rajasthan",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5200,
    },

    // BreadcrumbList
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
          "name": "Jaipur in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/jaipur-3-days",
        },
      ],
    },    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Jaipur, Rajasthan, India",
      "description": "The Pink City of India, known for its stunning forts, ornate palaces, vibrant bazaars, and rich Rajasthani heritage. A UNESCO World Heritage City.",
      "url": "https://www.incredibleitinerary.com/blog/jaipur-3-days",
      "touristType": ["Cultural Tourism", "Heritage Tourism", "Food Tourism"],
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
          "name": "How many days are enough for Jaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is the ideal duration for Jaipur. Day 1 covers Amber Fort and the old city, Day 2 handles the forts and cultural sights, and Day 3 allows for food, shopping and hidden gems. If you have 5 days, add day trips to Pushkar and Ranthambore.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Jaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Jaipur. October-November has pleasant weather and fewer crowds. December-January can be chilly at dawn but perfect for daytime sightseeing. February-March brings the Holi festival and ideal temperatures. Avoid April-June when temperatures exceed 45 degrees Celsius.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Jaipur trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A budget traveller can do 3 days in Jaipur for under 6,000 rupees including accommodation. A heritage mid-range trip costs 8,000 to 20,000 rupees. A royal luxury experience ranges from 20,000 to 50,000 rupees. All prices include accommodation, food, transport and entry fees.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Jaipur safe for solo female travellers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaipur is generally safe for solo female travellers, especially in tourist areas. Stick to well-lit areas at night, use Uber or Ola instead of random autos, and dress modestly when visiting temples. The old city is busiest and safest during morning hours. Many women travel solo here without issues.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I buy a composite ticket for Jaipur monuments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the composite ticket costs 100 rupees for Indians and 1,000 rupees for foreigners, covering Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Albert Hall Museum, Nahargarh Fort, and several other monuments. Valid for 2 days, it saves 40-60 percent over individual tickets.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best way to get around Jaipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Uber and Ola are the most reliable options. Auto-rickshaws work but always negotiate before boarding. For Day 1 with Amber Fort, hire a full-day cab for 1,200 to 1,800 rupees as most sights are spread out. The old city on Day 2 is best explored on foot. Avoid renting a scooter as Jaipur traffic is genuinely chaotic.",
          },
        },
      ],
};

export default function JaipurBlogPage() {
  return (
    <>
      {/* Inject JSON-LD into page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <JaipurClient />
    </>
  );
}
