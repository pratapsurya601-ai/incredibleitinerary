import type { Metadata } from "next";
import KanyakumariClient from "./KanyakumariClient";

export const metadata: Metadata = {
  title: "Kanyakumari 2-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Kanyakumari trip in 2 days. Complete Kanyakumari guide — Vivekananda Rock Memorial, Thiruvalluvar Statue, Triveni Sangam, sunrise and sunset.",
  keywords: [
    "kanyakumari itinerary 2 days",
    "kanyakumari travel guide 2026",
    "vivekananda rock memorial kanyakumari",
    "triveni sangam three oceans",
    "kanyakumari sunrise sunset",
    "thiruvalluvar statue kanyakumari",
    "padmanabhapuram palace",
    "kanyakumari tamil nadu trip",
  ],
  openGraph: {
    title: "Kanyakumari 2-Day Itinerary 2026: Trip Planner",
    description:
      "Vivekananda Rock, Triveni Sangam, sunrise and sunset from the same point — 2 complete plans with real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vivekananda Rock Memorial Kanyakumari sunset ocean",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kanyakumari", "India", "Travel", "Itinerary", "Coastal", "Tamil Nadu"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanyakumari 2-Day Itinerary 2026: Trip Planner",
    description: "Vivekananda Rock, three oceans meeting, sunrise & sunset — 2 plans, real costs.",
    images: ["https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kanyakumari-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kanyakumari-2-days#article",
      "headline": "Kanyakumari in 2 Days: Where Three Oceans Meet — Sunrise, Sunset & Vivekananda Rock (2026)",
      "description": "Complete Kanyakumari guide — Vivekananda Rock Memorial, Thiruvalluvar Statue, Triveni Sangam, sunrise and sunset from the same spot, Padmanabhapuram Palace. 2 plans with real costs.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/kanyakumari-2-days",
      },
      "keywords": "kanyakumari itinerary, kanyakumari 2 days, vivekananda rock memorial, triveni sangam, three oceans, kanyakumari sunrise sunset",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4400,
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
          "name": "Kanyakumari in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/kanyakumari-2-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Kanyakumari, Tamil Nadu, India",
      "description": "The southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean meet — famous for sunrise and sunset views from the same point, Vivekananda Rock Memorial, and Thiruvalluvar Statue.",
      "url": "https://www.incredibleitinerary.com/blog/kanyakumari-2-days",
      "touristType": ["Coastal Tourism", "Cultural Tourism", "Pilgrimage Tourism"],
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
          "name": "How many days are enough for Kanyakumari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is ideal for Kanyakumari. Day 1 covers the sunrise, Vivekananda Rock Memorial, Thiruvalluvar Statue, Triveni Sangam and sunset. Day 2 covers Padmanabhapuram Palace, Our Lady of Ransom Church, and the town's temples. A single day trip from Trivandrum misses the sunrise and sunset — which is the entire point.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Kanyakumari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time to visit Kanyakumari. The weather is pleasant (24-30°C), skies are clear for sunrise and sunset views, and the sea is calm enough for the ferry to Vivekananda Rock. April to June is hot and humid. Monsoon (June-September) brings rough seas and the ferry to the Rock may be cancelled.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Kanyakumari trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 2 days in Kanyakumari for under ₹4,000 including accommodation, food, ferry tickets and entry fees. A comfortable plan costs ₹5,000-₹12,000 for two including sea-view hotels, Padmanabhapuram Palace visit and better restaurants. Kanyakumari is very affordable.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you really see both sunrise and sunset from the same spot in Kanyakumari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — Kanyakumari is the only place in mainland India where you can watch both sunrise and sunset over the ocean from the same viewpoint. The tip of the peninsula faces south, so the sun rises over the Bay of Bengal to your left and sets over the Arabian Sea to your right. The Sunrise View Point near the Gandhi Memorial is the best spot.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get to Vivekananda Rock Memorial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ferry to Vivekananda Rock Memorial departs from the Kanyakumari ferry terminal every 30 minutes. Tickets cost ₹69 for the round trip. The ride takes about 5 minutes each way. Go early (8am when the ferry starts) to avoid long queues. The Rock is closed on Tuesdays. Rough seas during monsoon may cancel services.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Padmanabhapuram Palace worth visiting from Kanyakumari?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Padmanabhapuram Palace is 65 km from Kanyakumari and is one of the finest wooden palaces in Asia. Built in the 16th century, it has original murals, carved ceilings, and a medicine room with 17th-century herbal preparations still intact. Entry is ₹20 for Indians. Closed on Mondays. Budget 2-3 hours including travel.",
          },
        },
      ],
};

export default function KanyakumariBlogPage() {
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
      <KanyakumariClient />
    </>
  );
}
