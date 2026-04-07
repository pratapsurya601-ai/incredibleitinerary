import type { Metadata } from "next";
import MahabalipuramClient from "./MahabalipuramClient";

export const metadata: Metadata = {
  title: "Mahabalipuram 2 Days: Shore Temple, Arjuna's Penance & Beach Guide",
  description:
    "Complete 2-day Mahabalipuram itinerary — Shore Temple, Arjuna's Penance, Five Rathas, Crocodile Bank, budget from ₹2,500/day. 1-hour from Chennai.",
  keywords: [
    "mahabalipuram 2 days itinerary",
    "mahabalipuram travel guide",
    "shore temple mahabalipuram",
    "arjuna's penance mahabalipuram",
    "five rathas mahabalipuram",
    "mamallapuram travel guide",
    "crocodile bank mahabalipuram",
    "mahabalipuram from chennai",
    "mahabalipuram budget trip",
    "mahabalipuram UNESCO sites",
  ],
  openGraph: {
    title: "Mahabalipuram 2 Days: Shore Temple, Arjuna's Penance & Beach Guide",
    description:
      "UNESCO temples, world's largest bas-relief, crocodiles, and a quiet beach — 1 hour from Chennai. Real costs and day-by-day itinerary.",
    images: [
      {
        url: "/images/blog/mahabalipuram-shore-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Shore Temple at Mahabalipuram facing the Bay of Bengal",
      },
    ],
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Mahabalipuram", "Tamil Nadu", "UNESCO", "History", "Beach", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahabalipuram 2 Days: Shore Temple, Arjuna's Penance & Beach Guide",
    description: "UNESCO temples, world's largest bas-relief, crocodiles, and a quiet beach — 1 hour from Chennai.",
    images: ["/images/blog/mahabalipuram-shore-temple.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mahabalipuram-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mahabalipuram-2-days#article",
      "headline": "Mahabalipuram 2 Days: Shore Temple, Arjuna's Penance & Beach Guide",
      "description": "Complete 2-day Mahabalipuram itinerary — Shore Temple, Arjuna's Penance, Five Rathas, Crocodile Bank, budget from ₹2,500/day. 1-hour from Chennai.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/mahabalipuram-shore-temple.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-25T00:00:00Z",
      "dateModified": "2026-04-02T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/mahabalipuram-2-days",
      },
      "keywords": "mahabalipuram itinerary, shore temple, arjuna's penance, five rathas, mamallapuram, crocodile bank, mahabalipuram from chennai",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3800,
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
          "name": "Mahabalipuram 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/mahabalipuram-2-days",
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Mahabalipuram (Mamallapuram), Tamil Nadu, India",
      "description": "A UNESCO World Heritage coastal town famous for the Shore Temple, Arjuna's Penance bas-relief, and the Pancha Rathas — all built by the Pallava dynasty in the 7th and 8th centuries.",
      "url": "https://www.incredibleitinerary.com/blog/mahabalipuram-2-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Beach Tourism"],
    },
  ],
};

// FAQPage schema — separate block (must NOT be inside @graph with Article)
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days do you need for Mahabalipuram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2 days is ideal for Mahabalipuram. Day 1 covers the core monuments — Shore Temple, Arjuna's Penance, Five Rathas, Krishna's Butter Ball, and Mahishasura Mardini Cave. Day 2 adds Crocodile Bank (15km north), Tiger Cave, and beach time. One day is possible as a day trip from Chennai but you miss the sunrise at Shore Temple and Crocodile Bank.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Mahabalipuram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "November to February is the best time to visit Mahabalipuram, with temperatures of 22–28°C and sea breezes. October can see cyclone activity on the Tamil Nadu coast. May and June are extremely hot (40°C+) with high humidity. December sees the annual Mahabalipuram Dance Festival at the Shore Temple.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get to Mahabalipuram from Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mahabalipuram is 58km from Chennai. The easiest option is the CMBT (Chennai Mofussil Bus Terminal) to Mahabalipuram bus — runs every 30 minutes, takes 1.5–2 hours, costs ₹60. A taxi from Chennai costs ₹1,200–₹1,500 and takes 1.5 hours via the East Coast Road (ECR). There is no direct train — the nearest station is Chengalpattu (27km away), then a connecting bus or auto.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the entry fee for Mahabalipuram monuments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Individual tickets: Shore Temple ₹40 (Indians) / ₹600 (foreigners), Five Rathas ₹40 / ₹600. The ASI combo ticket costs ₹600 for all ASI sites including Shore Temple, Five Rathas, and cave temples — this is the best value if visiting multiple sites. Arjuna's Penance and Krishna's Butter Ball are free to view from the road.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the Crocodile Bank worth visiting from Mahabalipuram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely — it is one of the most underrated wildlife attractions in Tamil Nadu. The Madras Crocodile Bank Trust, 15km north of Mahabalipuram on the ECR, houses 2,500+ crocodiles across 14 species. Entry is ₹150. It opens at 8:30am and closes at 5:30pm. Most visitors to Mahabalipuram skip it entirely — a genuine mistake.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the budget for a 2-day Mahabalipuram trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can do 2 days for ₹2,500–₹3,500 per day (guesthouse ₹600–₹1,000, meals ₹150–₹250, auto ₹200–₹400, ASI combo ticket ₹600 total). Mid-range costs ₹5,000–₹7,000 per day with a hotel and restaurant meals. The ASI combo ticket saves significant money — buy it at the first ASI site you visit.",
      },
    },
  ],
};

export default function MahabalipuramBlogPage() {
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
      <MahabalipuramClient />
    </>
  );
}
