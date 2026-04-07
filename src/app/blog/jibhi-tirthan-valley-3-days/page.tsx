import type { Metadata } from "next";
import JibhiClient from "./JibhiClient";

export const metadata: Metadata = {
  title: "Jibhi & Tirthan Valley 3 Days: The Himachal Trip Nobody Talks About",
  description:
    "Complete 3-day Jibhi and Tirthan Valley itinerary — Jalori Pass, Serolsar Lake, Raghupur Fort, GHNP trout stream walks, waterfalls, budget ₹3,000/day. The peaceful Himachal alternative to crowded Manali.",
  keywords: [
    "Jibhi travel guide",
    "Tirthan Valley itinerary",
    "Jibhi 3 days",
    "Jalori Pass trek",
    "Serolsar Lake",
    "Raghupur Fort trek",
    "GHNP Tirthan Valley",
    "Himachal Pradesh hidden gem",
  ],
  openGraph: {
    title: "Jibhi & Tirthan Valley 3 Days: The Himachal Trip Nobody Talks About",
    description:
      "Jalori Pass · Serolsar Lake · Raghupur Fort · GHNP — Himachal&apos;s best-kept secret with real costs and day-by-day itinerary.",
    images: [
      {
        url: "https://www.incredibleitinerary.com/images/blog/jibhi-valley.jpg",
        width: 1200,
        height: 630,
        alt: "Jibhi Tirthan Valley Himachal Pradesh wooden cottages mountains",
      },
    ],
    type: "article",
    publishedTime: "2026-03-10T00:00:00Z",
    modifiedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Jibhi", "Tirthan Valley", "Himachal Pradesh", "India", "Travel", "Jalori Pass"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jibhi & Tirthan Valley 3 Days: The Himachal Trip Nobody Talks About",
    description:
      "Jalori Pass, Serolsar Lake, Raghupur Fort, GHNP — Himachal hidden gem, real costs and itinerary.",
    images: ["https://www.incredibleitinerary.com/images/blog/jibhi-valley.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days#article",
      "headline": "Jibhi & Tirthan Valley 3 Days: The Himachal Trip Nobody Talks About",
      "description":
        "Complete 3-day Jibhi and Tirthan Valley itinerary — Jalori Pass, Serolsar Lake, Raghupur Fort, GHNP trout stream walks, waterfalls, budget ₹3,000/day. The peaceful Himachal alternative to crowded Manali.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/jibhi-valley.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-10T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days",
      },
      "keywords":
        "Jibhi travel guide, Tirthan Valley itinerary, Jibhi 3 days, Jalori Pass trek, Serolsar Lake, Raghupur Fort trek, GHNP Tirthan Valley, Himachal Pradesh hidden gem",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5500,
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
          "name": "Jibhi & Tirthan Valley 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Jibhi & Tirthan Valley, Himachal Pradesh, India",
      "description":
        "A hidden gem in the Banjar Valley, Kullu district — peaceful wooden cottages, trout-filled rivers, Jalori Pass, Serolsar Lake, Raghupur Fort and the Great Himalayan National Park UNESCO buffer zone.",
      "url": "https://www.incredibleitinerary.com/blog/jibhi-tirthan-valley-3-days",
      "touristType": ["Eco Tourism", "Adventure Tourism", "Nature Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I reach Jibhi from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From Delhi, take an overnight HRTC bus to Aut (12 hrs, Rs.700–Rs.1,000), then a local cab to Jibhi (45 min, Rs.500–Rs.600). Total cost: Rs.1,200–Rs.1,500. Alternatively fly to Bhuntar (Kullu) and take a taxi to Jibhi (1 hr, Rs.1,200–Rs.1,500). Driving is also popular — 500km via Chandigarh, 10–12 hrs.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Jibhi and Tirthan Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "April to June (18–22°C, snow patches at Jalori Pass, apple blossoms, clear skies) and September to November (golden foliage, fewer tourists, sharp mountain views) are ideal. Avoid July–August — heavy monsoon rains bring landslide risk on the valley roads and leeches on every forest trail.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Jibhi better than Manali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jibhi is better if you want peace, authentic Himachali homestays, and nature without crowds. It costs 30–40% less than Manali, treks are accessible without tour operators, and there is zero Rohtang Pass tourist circus. Manali wins for adventure sports, nightlife and better transport connectivity. Jibhi is what Manali was 20 years ago.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the best treks near Jibhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jalori Pass to Serolsar Lake (5km one-way, easy, 2.5–3 hrs through deodar forest) is the most popular. Raghupur Fort from Jalori Pass (4km, easy, 2 hrs, fewer crowds and extraordinary meadow views) is equally worthwhile. Both start from Jalori Pass, which is 10km from Jibhi by road.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the budget for a 3-day Jibhi trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can manage Rs.2,500–Rs.3,500/day (homestay with meals Rs.800–Rs.1,500, local transport Rs.500, food Rs.300). Mid-range travellers spending Rs.5,000–Rs.7,000/day get a wooden cottage with mountain views and a private cab. Delhi to Jibhi transport adds Rs.1,200–Rs.1,500 per person one way by bus + cab.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there an ATM in Jibhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No ATM in Jibhi village. The nearest ATM is in Banjar town (15km away) or Aut (12km on the other side). Carry enough cash before entering the valley — UPI works at some homestays but do not rely on it.",
      },
    },
  ],
};

export default function JibhiPage() {
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
      <JibhiClient />
    </>
  );
}
