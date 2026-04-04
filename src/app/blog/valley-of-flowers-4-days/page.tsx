import type { Metadata } from "next";
import ValleyOfFlowersClient from "./ValleyOfFlowersClient";

export const metadata: Metadata = {
  title: "Valley of Flowers in 4 Days: Trek Guide, Hemkund Sahib & Wildflower Season (2026)",
  description:
    "3 complete Valley of Flowers plans — Budget Trek, Comfortable, Guided — with real costs, trek route from Govindghat, 600+ wildflower species, Hemkund Sahib, and Ghangaria base camp tips.",
  keywords: [
    "valley of flowers trek",
    "valley of flowers itinerary 4 days",
    "valley of flowers travel guide 2026",
    "hemkund sahib trek",
    "ghangaria base camp",
    "govindghat to ghangaria",
    "uttarakhand wildflowers trek",
    "nanda devi biosphere reserve",
    "valley of flowers national park UNESCO",
    "bhyundar valley trek",
  ],
  openGraph: {
    title: "Valley of Flowers in 4 Days: Trek, Wildflowers & Hemkund Sahib (2026)",
    description:
      "Real trek costs, route from Govindghat, 600+ wildflower species, Hemkund Sahib guide. 3 complete plans for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Valley of Flowers wildflower meadow with Himalayan peaks in Uttarakhand",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Valley of Flowers", "Uttarakhand", "India", "Trek", "Himalayas", "Wildflowers", "UNESCO"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valley of Flowers in 4 Days: India's UNESCO Wildflower Trek (2026)",
    description: "3 plans, real costs, Govindghat trek route, Hemkund Sahib, 600+ species guide.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/valley-of-flowers-4-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Article schema
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/valley-of-flowers-4-days#article",
      "headline": "Valley of Flowers in 4 Days: Trek Guide, Hemkund Sahib & Wildflower Season (2026)",
      "description": "3 complete Valley of Flowers plans — Budget Trek, Comfortable, Guided — with real costs, trek route, 600+ wildflower species, and Hemkund Sahib guide.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/valley-of-flowers-4-days",
      },
      "keywords": "valley of flowers trek, hemkund sahib, ghangaria, govindghat, uttarakhand wildflowers, nanda devi biosphere, bhyundar valley, UNESCO world heritage",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
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
          "name": "Valley of Flowers in 4 Days",
          "item": "https://www.incredibleitinerary.com/blog/valley-of-flowers-4-days",
        },
      ],
    },

    // FAQPage
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best time to visit Valley of Flowers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mid-July to mid-August is peak bloom with 600+ species of wildflowers in full colour. The valley is open June to October, but July-August offers the most spectacular display. Early June has snow patches and limited flowers. September has fewer flowers but clearer mountain views and fewer trekkers.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Valley of Flowers trek cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget trek: under ₹8,000 for 4 days including guesthouse accommodation, food, and permits. Comfortable trip: ₹10,000-₹20,000 with better lodges and porter support. Guided expedition with professional guide and all-inclusive arrangements: ₹20,000-₹35,000 per person.",
          },
        },
        {
          "@type": "Question",
          "name": "How difficult is the Valley of Flowers trek?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The trek from Govindghat to Ghangaria is 14km and rated moderate. It involves a steady uphill climb along the Lakshman Ganga river with an elevation gain of about 1,200m. Reasonably fit people complete it in 6-8 hours. Mules are available for ₹2,000 if needed. The valley walk itself from Ghangaria is an easy 3.5km each way.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I visit Hemkund Sahib and Valley of Flowers in the same trip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both are accessed from Ghangaria base camp. Valley of Flowers is 3.5km northwest, Hemkund Sahib is 6km southeast. Plan separate days for each — both are demanding full-day excursions. Most trekkers spend 2-3 nights in Ghangaria to cover both destinations comfortably.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a permit for Valley of Flowers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Valley of Flowers National Park requires an entry permit. Indian nationals pay ₹150 for a 3-day pass, foreigners pay ₹600. Permits are available at the forest checkpost in Ghangaria. Carry valid photo ID. There is no online booking — permits are issued on the spot.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Govindghat from Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Delhi to Govindghat is approximately 525km. Drive via Rishikesh-Joshimath (12-14 hours by car). Overnight buses from Rishikesh and Haridwar cost ₹800-₹1,500. Nearest airport is Jolly Grant, Dehradun (295km). From Joshimath, Govindghat is just 25km (1 hour drive). Break the journey at Joshimath or Pipalkoti for comfort.",
          },
        },
      ],
    },

    // TouristDestination
    {
      "@type": "TouristDestination",
      "name": "Valley of Flowers National Park, Uttarakhand, India",
      "description": "UNESCO World Heritage Site in the Nanda Devi Biosphere Reserve, known for its 600+ species of wildflowers, alpine meadows in Bhyundar Valley, and proximity to Hemkund Sahib gurdwara at 4,632m.",
      "url": "https://www.incredibleitinerary.com/blog/valley-of-flowers-4-days",
      "touristType": ["Trekking", "Nature Tourism", "Eco Tourism", "Adventure Tourism"],
    },
  ],
};

export default function ValleyOfFlowersBlogPage() {
  return (
    <>
      {/* Inject JSON-LD into page head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ValleyOfFlowersClient />
    </>
  );
}
