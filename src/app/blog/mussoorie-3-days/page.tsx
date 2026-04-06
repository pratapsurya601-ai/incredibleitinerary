import type { Metadata } from "next";
import MusoorieClient from "./MusoorieClient";

export const metadata: Metadata = {
  title: "Mussoorie 3-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Mussoorie plans — Budget, Family, Premium — with real timings, costs, Google Maps routes and the mistakes every first-timer makes.",
  keywords: [
    "mussoorie itinerary 3 days",
    "mussoorie travel guide 2026",
    "mussoorie budget travel",
    "mussoorie family trip",
    "kempty falls mussoorie",
    "landour mussoorie",
    "mussoorie hill station",
    "mussoorie trip planner",
  ],
  openGraph: {
    title: "Mussoorie 3-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Google Maps routes. 3 complete plans for every type of traveller.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mussoorie mountain valley with Himalayan peaks",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mussoorie", "India", "Travel", "Itinerary", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mussoorie 3-Day Itinerary 2026: Trip Planner",
    description: "3 plans, real timings, actual costs, Google Maps routes.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mussoorie-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mussoorie-3-days#article",
      "headline": "Mussoorie in 3 Days: Complete Hill Station Guide (Budget to Premium, 2026)",
      "description": "3 complete Mussoorie plans — Budget, Family, Premium — with real timings, costs, Google Maps routes and the mistakes every first-timer makes.",
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
        "@id": "https://www.incredibleitinerary.com/blog/mussoorie-3-days",
      },
      "keywords": "mussoorie itinerary, mussoorie 3 days, mussoorie travel guide, kempty falls, landour, gun hill, lal tibba",
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
          "name": "Mussoorie in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/mussoorie-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Mussoorie, Uttarakhand, India",
      "description": "The Queen of Hills — a charming British-era hill station in the Garhwal Himalayas known for Landour's literary heritage, panoramic Himalayan views, and colonial-era walks.",
      "url": "https://www.incredibleitinerary.com/blog/mussoorie-3-days",
      "touristType": ["Hill Station Tourism", "Nature Tourism", "Cultural Tourism"],
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
          "name": "How many days are enough for Mussoorie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 days is ideal for Mussoorie — enough for Mall Road, Kempty Falls, Gun Hill, Landour, Lal Tibba, and Cloud's End. 2 days feels rushed and you'll miss Landour entirely. 4-5 days lets you add Dhanaulti, Kanatal, or the George Everest trek.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Mussoorie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "March to June for pleasant weather (15-30 degrees C) and clear Himalayan views. September to November for post-monsoon greenery and fewer crowds. Avoid July-August (heavy rain, landslides) and December-February unless you want snowfall (roads may close, many hotels shut down).",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 3-day Mussoorie trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget solo: under 7,000 rupees including accommodation. Family of 4: 8,000-18,000 rupees total. Premium couple: 18,000-30,000 rupees for two. All prices include stay, food, transport and activities.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Mussoorie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nearest airport: Jolly Grant, Dehradun (60km, 1.5hrs by taxi). Nearest railway station: Dehradun (34km, 1hr). Most people take a Shatabdi Express from Delhi to Dehradun (5.5hrs) then a shared taxi or bus to Mussoorie. Delhi to Mussoorie by road is 290km, about 6-7 hours.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Mussoorie better than Shimla?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mussoorie wins for Landour's charm, closer proximity to Delhi, easier access from Dehradun, and a less commercialised feel in the Landour side. Shimla wins for grander colonial architecture, better Mall Road shopping, and more hotel variety. For a literary, quieter hill station experience, Mussoorie edges ahead.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Kempty Falls worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Honestly, it depends on timing. In peak season (May-June, weekends), Kempty Falls is overcrowded with 500+ people. Go at 7am on a weekday and it's genuinely beautiful. If you're visiting in peak season, skip it and do the Cloud's End trek instead — far more rewarding and almost no crowds.",
          },
        },
      ],
};

export default function MussooriesBlogPage() {
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
      <MusoorieClient />
    </>
  );
}
