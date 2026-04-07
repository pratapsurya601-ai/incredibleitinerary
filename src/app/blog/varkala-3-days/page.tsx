import type { Metadata } from "next";
import VarkalaClient from "./VarkalaClient";

export const metadata: Metadata = {
  title: "Varkala 3 Days: Cliff Beach, Ayurveda & What Goa Should Have Been",
  description:
    "Complete 3-day Varkala guide — cliff beach, Papanasam Beach, Janardanaswamy Temple, ayurvedic treatments, budget from ₹2,500/day. Better than Goa for many travellers.",
  keywords: [
    "varkala 3 days itinerary",
    "varkala travel guide 2026",
    "varkala cliff beach",
    "papanasam beach varkala",
    "varkala ayurveda",
    "varkala vs goa",
    "varkala budget travel",
    "janardanaswamy temple varkala",
    "kappil lake varkala",
    "kerala beach travel",
  ],
  openGraph: {
    title: "Varkala 3 Days: Cliff Beach, Ayurveda & What Goa Should Have Been",
    description:
      "Complete 3-day Varkala guide — cliff beach, Papanasam Beach, Janardanaswamy Temple, ayurvedic treatments, budget from ₹2,500/day.",
    images: [
      {
        url: "/images/blog/varkala-cliff-beach.jpg",
        width: 1200,
        height: 630,
        alt: "Varkala cliff beach Kerala red laterite cliffs Arabian Sea",
      },
    ],
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Varkala", "Kerala", "Beach", "Ayurveda", "Budget Travel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varkala 3 Days: Cliff Beach, Ayurveda & What Goa Should Have Been",
    description: "Cliff beach, 2,000-year-old temple, authentic Ayurveda. Complete 3-day Varkala guide.",
    images: ["/images/blog/varkala-cliff-beach.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/varkala-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/varkala-3-days#article",
      "headline": "Varkala 3 Days: Cliff Beach, Ayurveda & What Goa Should Have Been",
      "description": "Complete 3-day Varkala guide — cliff beach, Papanasam Beach, Janardanaswamy Temple, ayurvedic treatments, budget from ₹2,500/day.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/varkala-cliff-beach.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-28T00:00:00Z",
      "dateModified": "2026-04-03T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/varkala-3-days",
      },
      "keywords": "varkala itinerary, varkala 3 days, varkala cliff beach, papanasam beach, varkala ayurveda, janardanaswamy temple, kerala beach",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
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
          "name": "Varkala in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/varkala-3-days",
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Varkala, Kerala, India",
      "description": "Kerala's cliff beach town — 15m red laterite cliffs over the Arabian Sea, Papanasam holy beach, the 2,000-year-old Janardanaswamy Temple, and authentic Ayurvedic treatments.",
      "url": "https://www.incredibleitinerary.com/blog/varkala-3-days",
      "touristType": ["Beach Tourism", "Spiritual Tourism", "Wellness Tourism", "Budget Travel"],
    },
  ],
};

// FAQPage schema — separate block
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days are enough for Varkala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 days is ideal for Varkala. Day 1 covers the cliff path and Papanasam Beach. Day 2 covers Kappil Lake, Black Beach and seafood. Day 3 is for an Ayurvedic massage, Helipad Beach and exploring the town. 2 days is possible but you will feel rushed.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Varkala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to March is the best time. November to February is peak season with calm seas and 25-32°C temperatures. Avoid June to September — the monsoon brings rough seas, the beach closes for swimming, and the cliff path can be slippery.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a 3-day Varkala trip cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can manage on ₹2,000-3,000 per day including a cliff guesthouse (₹700-1,200/night) and cafe meals. Mid-range is ₹5,000-8,000/day with a boutique cliff hotel. Save money by eating breakfast and dinner in Varkala town — cliff prices are 40% higher.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Varkala better than Goa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For solo travellers and couples seeking a quieter, more authentic experience, Varkala is significantly better than Goa. It has less commercial noise, lower prices, an actual 2,000-year-old temple on the cliff, genuine Ayurveda, and the unique red laterite cliffs. If you want nightlife and water sports, go to Goa.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Varkala safe for solo female travellers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Varkala is considered one of the safer beach destinations in India for solo female travellers. The cliff area has many international tourists and guesthouses are accustomed to solo travellers. Stick to the lifeguard zone at Papanasam Beach for swimming and use your guesthouse's recommendations for massage centres.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get from Thiruvananthapuram to Varkala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From Thiruvananthapuram (Trivandrum): 51km, about 1.5 hours. Bus costs ₹60 and is the most common option. Taxi costs ₹800-1,000. Trains run from Trivandrum to Varkala Railway Station in about 45 minutes. The station is 3km from the cliff — take an auto for ₹150-200.",
      },
    },
  ],
};

export default function VarkalaBlogPage() {
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
      <VarkalaClient />
    </>
  );
}
