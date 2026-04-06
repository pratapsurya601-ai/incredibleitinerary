import type { Metadata } from "next";
import TawangClient from "./TawangClient";

export const metadata: Metadata = {
  title: "Tawang 4-Day Itinerary 2026: Trip Planner",
  description:
    "3 complete Tawang plans — Budget, Comfortable, Premium — with Tawang Monastery, Sela Pass, Madhuri Lake, Bumla Pass, real timings and costs.",
  keywords: [
    "tawang itinerary 4 days",
    "tawang travel guide 2026",
    "tawang budget travel",
    "tawang monastery arunachal pradesh",
    "sela pass tawang",
    "madhuri lake tawang",
    "bumla pass india china border",
    "tawang trip planner",
  ],
  openGraph: {
    title: "Tawang 4-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, Sela Pass, Tawang Monastery, Madhuri Lake. 3 complete plans for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1609766857041-2924cf3a8ede?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tawang Monastery in Arunachal Pradesh with mountain backdrop",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Tawang", "Arunachal Pradesh", "India", "Travel", "Itinerary", "Mountains", "Buddhism"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawang 4-Day Itinerary 2026: Trip Planner",
    description: "3 plans, Tawang Monastery, Sela Pass, Madhuri Lake, Bumla Pass, real costs.",
    images: ["https://images.unsplash.com/photo-1609766857041-2924cf3a8ede?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/tawang-4-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/tawang-4-days#article",
      "headline": "Tawang in 4 Days: Complete Arunachal Pradesh Guide (Budget to Premium, 2026)",
      "description": "3 complete Tawang plans — Budget, Comfortable, Premium — with Tawang Monastery, Sela Pass, Madhuri Lake, Bumla Pass, real timings and costs.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1609766857041-2924cf3a8ede?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/tawang-4-days",
      },
      "keywords": "tawang itinerary, tawang 4 days, tawang monastery, sela pass, madhuri lake, bumla pass, arunachal pradesh",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5400,
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
          "name": "Tawang in 4 Days",
          "item": "https://www.incredibleitinerary.com/blog/tawang-4-days",
        },
      ],
    },

        {
      "@type": "TouristDestination",
      "name": "Tawang, Arunachal Pradesh, India",
      "description": "Home to India's largest Buddhist monastery, perched at 10,000ft in the eastern Himalayas. Known for Sela Pass, high-altitude lakes, the India-China border at Bumla, and the 1962 war memorial.",
      "url": "https://www.incredibleitinerary.com/blog/tawang-4-days",
      "touristType": ["Mountain Tourism", "Cultural Tourism", "Buddhist Tourism", "Adventure Tourism"],
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
          "name": "How many days are enough for Tawang?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "4 days is the sweet spot to cover Tawang Monastery, Sela Pass, Madhuri Lake, the War Memorial, and either Bumla Pass or Nuranang Falls. 3 days works if you skip the Bumla excursion. 5-6 days allows adding Dirang sightseeing and PTSO Lake at a relaxed pace.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Tawang?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "March to June and September to October are best. April-May offers clear skies and blooming rhododendrons. October has post-monsoon clarity and snow-dusted peaks. Avoid July-August (heavy rains and landslides) and December-February (roads may close due to heavy snowfall at Sela Pass).",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 4-day Tawang trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 4 days for under ₹12,000 including accommodation. A comfortable mid-range trip costs ₹12,000-₹25,000. Premium with the best hotels and private SUV runs ₹25,000-₹40,000. All prices per person, excluding flights to Guwahati.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need an Inner Line Permit for Tawang?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, an Inner Line Permit (ILP) is mandatory for all Indian citizens visiting Arunachal Pradesh. Apply online at arunachalilp.com at least 2 days before travel. You need passport-size photos and ID proof. Foreign nationals need a Protected Area Permit (PAP) which takes longer.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Bumla Pass worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Bumla Pass at 15,200ft is the actual India-China border and visiting it is a unique experience. You need a separate military permit obtained through your hotel or tour operator in Tawang. The drive itself through high-altitude terrain is spectacular. Open April to October only.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Tawang from Guwahati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Drive from Guwahati via Tezpur and Bomdila — 450km, 12-14 hours. Most people break the journey at Dirang or Bomdila overnight. Shared Sumos run from Tezpur to Tawang (₹800-₹1,200). Private SUV from Guwahati costs ₹8,000-₹12,000 one way. There is no railway or airport at Tawang.",
          },
        },
      ],
};

export default function TawangBlogPage() {
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
      <TawangClient />
    </>
  );
}
