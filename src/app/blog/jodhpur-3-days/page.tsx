import type { Metadata } from "next";
import JodhpurClient from "./JodhpurClient";

export const metadata: Metadata = {
  title: "Jodhpur 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Jodhpur trip in 3 days. Budget, Heritage, Royal — with real timings, costs, Google Maps routes. Mehrangarh Fort, Blue City, Umaid Bhawan, Clock.",
  keywords: [
    "jodhpur itinerary 3 days",
    "jodhpur travel guide 2026",
    "jodhpur budget travel",
    "mehrangarh fort jodhpur",
    "blue city jodhpur",
    "umaid bhawan palace",
    "jodhpur trip planner",
    "jodhpur rajasthan",
  ],
  openGraph: {
    title: "Jodhpur 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller visiting the Blue City.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jodhpur Blue City aerial view with Mehrangarh Fort",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Jodhpur", "Rajasthan", "India", "Travel", "Itinerary", "Fort"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jodhpur 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jodhpur-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/jodhpur-3-days#article",
      "headline": "Jodhpur in 3 Days: Blue City Itinerary Guide (Budget to Royal, 2026)",
      "description": "3 complete Jodhpur plans — Budget, Heritage, Royal — with real timings, costs, Google Maps routes. Mehrangarh Fort, Blue City, Umaid Bhawan, Clock Tower food trail.",
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
        "@id": "https://www.incredibleitinerary.com/blog/jodhpur-3-days",
      },
      "keywords": "jodhpur itinerary, jodhpur 3 days, blue city, mehrangarh fort, umaid bhawan palace, clock tower market",
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
          "name": "Jodhpur in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/jodhpur-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Jodhpur, Rajasthan, India",
      "description": "The Blue City of India, known for Mehrangarh Fort, blue-painted old city houses, Umaid Bhawan Palace, vibrant street food and Rajasthani heritage.",
      "url": "https://www.incredibleitinerary.com/blog/jodhpur-3-days",
      "touristType": ["Cultural Tourism", "Heritage Tourism", "Adventure Tourism", "Food Tourism"],
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
          "name": "How many days are enough for Jodhpur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal to cover Mehrangarh Fort, the Blue City lanes, Umaid Bhawan Palace, Clock Tower market, Mandore Gardens and the surrounding areas without rushing. 2 days works if you skip Mandore and Osian. 4-5 days lets you add Bishnoi village safaris and Osian desert camps.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Jodhpur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Jodhpur. October-November and February-March offer pleasant temperatures around 25-30 degrees Celsius with fewer crowds. December-January can get cold at night (8-10 degrees) but days are perfect. April-June sees extreme heat exceeding 45 degrees Celsius. Monsoon (July-September) brings brief rains and dramatic skies but some attractions may be harder to access.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Jodhpur trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 3 days in Jodhpur for under 6,000 rupees including accommodation. A heritage mid-range trip costs 8,000-20,000 rupees. A royal luxury experience with palace hotels and private tours runs 20,000-50,000 rupees. All prices per person including accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Mehrangarh Fort worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mehrangarh Fort is widely considered the most impressive fort in all of Rajasthan. The museum inside is world-class, the views over the Blue City are unmatched, and the sheer scale of it rising from the cliff edge is extraordinary. Budget at least 2-3 hours. The audio guide is excellent and worth the extra cost.",
          },
        },
        {
          "@type": "Question",
          "name": "What food should I try in Jodhpur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jodhpur is one of the best food cities in India. Must-try items include mirchi vada (deep-fried chilli fritters), makhania lassi (saffron-enriched buttermilk), pyaaz ki kachori (onion-stuffed fried pastry), dal baati churma (the signature Rajasthani dish), and gulab jamun from Shahi Samosa near Clock Tower. The Clock Tower market area after dark is the epicentre of Jodhpur street food.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I do zip-lining at Mehrangarh Fort?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Flying Fox operates zip-line tours across the Mehrangarh Fort walls and lake. There are 6 zip lines covering about 400 metres total. Sessions last around 1.5 hours and cost approximately 1,800-2,500 rupees per person. Book in advance during peak season (October-March). It is one of the most unique adventure activities in Rajasthan.",
          },
        },
      ],
};

export default function JodhpurBlogPage() {
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
      <JodhpurClient />
    </>
  );
}
