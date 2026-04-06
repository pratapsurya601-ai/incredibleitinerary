import type { Metadata } from "next";
import DwarkaClient from "./DwarkaClient";

export const metadata: Metadata = {
  title: "Dwarka 2-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Dwarka trip in 2 days. Budget and Pilgrimage — with real timings, costs, Google Maps routes and the spots most tourists miss at Krishna's.",
  keywords: [
    "dwarka itinerary 2 days",
    "dwarka travel guide 2026",
    "dwarkadhish temple guide",
    "nageshwar jyotirlinga",
    "bet dwarka island",
    "gomti ghat dwarka",
    "dwarka budget travel",
    "dwarka trip planner",
  ],
  openGraph: {
    title: "Dwarka 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 2 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dwarkadhish Temple spire against the Arabian Sea at Dwarka",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Dwarka", "India", "Travel", "Itinerary", "Temple", "Pilgrimage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarka 2-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/dwarka-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/dwarka-2-days#article",
      "headline": "Dwarka in 2 Days: Dwarkadhish Temple to Bet Dwarka Island (Budget to Pilgrimage, 2026)",
      "description": "2 complete Dwarka plans — Budget and Pilgrimage — with real timings, costs, Google Maps routes and the spots most tourists miss at Krishna's legendary kingdom on the Arabian Sea.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/dwarka-2-days",
      },
      "keywords": "dwarka itinerary, dwarkadhish temple, nageshwar jyotirlinga, bet dwarka, gomti ghat, dwarka 2 days",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4400,
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
          "name": "Dwarka in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/dwarka-2-days",
        },
      ],
    },    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Dwarka, India",
      "description": "One of the four sacred Char Dham pilgrimage sites and the legendary kingdom of Lord Krishna, located on the western tip of Gujarat where the Gomti River meets the Arabian Sea. Home to the ancient Dwarkadhish Temple and the Nageshwar Jyotirlinga.",
      "url": "https://www.incredibleitinerary.com/blog/dwarka-2-days",
      "touristType": ["Pilgrimage Tourism", "Cultural Tourism", "Heritage Tourism"],
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
          "name": "How many days are enough for Dwarka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is ideal for Dwarka. Day 1 covers Dwarkadhish Temple, Gomti Ghat, Rukmini Temple, and the lighthouse. Day 2 covers Bet Dwarka island, Nageshwar Jyotirlinga, and Okha port. 1 day is too rushed if you want the Bet Dwarka ferry trip. 3 days only if you want to include Porbandar or the underwater archaeology sites.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Dwarka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Dwarka. October-November has pleasant weather and fewer crowds. December-February is peak pilgrimage season with comfortable temperatures of 20-30°C. Janmashtami (August-September) is spectacular but extremely crowded. Avoid April-June when temperatures cross 40°C.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Dwarka trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under ₹4,000 including accommodation. Pilgrimage mid-range: ₹5,000-₹12,000 per person. Temple entry is free. Bet Dwarka ferry costs ₹20-₹50 per person. All prices include accommodation, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Bet Dwarka island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Take a local bus or auto from Dwarka to Okha port (30km, about 45 minutes). From Okha, government ferries run every 30 minutes to Bet Dwarka island. The ferry ride is 30 minutes and costs ₹20-₹50. Last return ferry is around 5:30pm. Private boats cost ₹500-₹800 for a group.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the underwater city of Dwarka real?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marine archaeological surveys by the ASI and National Institute of Oceanography have found submerged structures off the Dwarka coast dating back thousands of years. Whether it is Krishna's legendary city is debated, but the archaeological site is real. Scuba diving tours to the underwater ruins are now available but must be booked weeks in advance through authorized operators.",
          },
        },
        {
          "@type": "Question",
          "name": "What food is Dwarka famous for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dwarka is a vegetarian pilgrim town — most restaurants serve pure veg Gujarati thalis with unlimited dal, sabzi, roti, rice, and buttermilk for ₹100-₹180. Street food highlights include kachori, dabeli, and fresh sugarcane juice. For seafood, you need to go to Okha port area. Temple prasadam at Dwarkadhish is available daily.",
          },
        },
      ],
};

export default function DwarkaBlogPage() {
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
      <DwarkaClient />
    </>
  );
}
