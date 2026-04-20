import type { Metadata } from "next";
import MekongDeltaClient from "./MekongDeltaClient";

export const metadata: Metadata = {
  title: "Mekong Delta in 3 Days: Floating Markets, River Villages & Can Tho (2026)",
  description: "3 complete Mekong Delta plans with Cai Rang floating market secrets, Ben Tre coconut canals, real USD costs, and how to see the delta before the tourist boats arrive.",
  keywords: ["mekong delta itinerary 3 days", "cai rang floating market", "can tho travel guide", "mekong delta vietnam 2026", "ben tre vietnam", "vietnam river delta travel"],
  openGraph: {
    title: "Mekong Delta in 3 Days: Floating Markets & River Villages (2026)",
    description: "Cai Rang at 5am, Ben Tre coconut canals, and real budget costs for the Mekong Delta.",
    images: [{ url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80", width: 1200, height: 630, alt: "Mekong Delta Vietnam floating market boats river" }],
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mekong Delta", "Vietnam", "Travel", "Itinerary", "Floating Markets"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mekong Delta in 3 Days (2026)",
    description: "Floating markets, river canals, and $22/day budget breakdown.",
    images: ["https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mekong-delta-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mekong-delta-3-days#article",
      "headline": "Mekong Delta in 3 Days: Floating Markets, River Villages & Can Tho (2026)",
      "description": "3 complete Mekong Delta plans with Cai Rang floating market secrets, Ben Tre coconut canals, and real USD costs for every budget.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-05T00:00:00Z",
      "dateModified": "2026-04-05T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
        "url": "https://www.incredibleitinerary.com/about",
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
        "@id": "https://www.incredibleitinerary.com/blog/mekong-delta-3-days",
      },
      "keywords": "mekong delta itinerary, mekong delta 3 days, cai rang floating market, can tho travel, ben tre vietnam",
      "articleSection": "Travel Guides",
      "inLanguage": "en",
      "wordCount": 5200,
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
          "name": "Travel Guides",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mekong Delta 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/mekong-delta-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Mekong Delta, Vietnam",
      "description": "The Mekong Delta is the southernmost region of Vietnam, a vast network of rivers, swamps and islands where the Mekong River approaches its end, famous for floating markets and river villages.",
      "url": "https://www.incredibleitinerary.com/blog/mekong-delta-3-days",
      "geo": { "@type": "GeoCoordinates", "latitude": 10.0452, "longitude": 105.7469 },
      "touristType": ["Adventure Tourism", "Cultural Tourism", "Food Tourism", "Photography"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you do the Mekong Delta as a day trip from Ho Chi Minh City?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technically yes, but the floating market operates from 5-8am, only accessible if you overnight in Can Tho. Day-trippers arrive to a market winding down and packed with tourist boats. One night in Can Tho ($10-20) transforms the trip entirely.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit the Mekong Delta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "November through April is the dry season and best time to visit. The rainy season (May-October) brings daily downpours, flooding, and intense mosquito activity. The floating market operates all year but is best experienced in dry season.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a boat to Cai Rang floating market cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A shared local boat from Can Tho pier costs VND 200,000-375,000 ($8-15) per person for 3-4 hours. Private boats cost VND 500,000-800,000 ($20-32) total. Hotels arrange private boats with guides for $25-60/person.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the Mekong Delta floating market dying out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The floating markets are changing, not dying. Wholesale trading still happens at Cai Rang every morning at 5am. The retail function has declined as supermarkets replaced it for locals. Arrive early to see the market at its most genuine and active.",
      },
    },
    {
      "@type": "Question",
      "name": "Do Indian passport holders need a visa for Vietnam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Indian passport holders need a Vietnam e-visa ($25, 90 days, multiple entry) from evisa.xuatnhapcanh.gov.vn. Processing takes 3 business days. No additional permits needed for the Mekong Delta.",
      },
    },
  ],
};

export default function MekongDeltaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <MekongDeltaClient />
    </>
  );
}
