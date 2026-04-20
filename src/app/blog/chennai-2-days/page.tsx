import type { Metadata } from "next";
import ChennaiClient from "./ChennaiClient";

export const metadata: Metadata = {
  title: "Chennai Itinerary: 2 Days in Chennai (What to Do, Temples & Food)",
  description:
    "Complete Chennai itinerary — what to do in Chennai in 2 days (or 3 days): Marina Beach, Kapaleeshwarar Temple, Mahabalipuram, best South Indian food, all Chennai highlights.",
  keywords: [
    "Chennai travel guide",
    "Chennai itinerary 2 days",
    "Marina Beach",
    "Kapaleeshwarar Temple",
    "Mahabalipuram day trip from Chennai",
    "Chennai food guide",
    "South India travel",
    "chennai itinerary",
    "chennai what to do",
    "all chennai",
    "3 days in chennai",
  ],
  openGraph: {
    title: "Chennai Itinerary: 2 Days in Chennai (What to Do, Temples & Food)",
    description:
      "What to do in Chennai: Marina Beach at sunrise, Kapaleeshwarar Temple, Mylapore, Chola bronzes, filter coffee. Complete 2-day (and 3-day) Chennai itinerary with real costs.",
    images: [
      {
        url: "https://www.incredibleitinerary.com/images/blog/chennai-marina-beach.jpg",
        width: 1200,
        height: 630,
        alt: "Marina Beach Chennai at sunrise — world's second longest urban beach",
      },
    ],
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Chennai", "Tamil Nadu", "India", "Travel", "Food", "Temples", "Itinerary"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chennai 2 Days: The Real City Guide (Temples, Marina Beach & Food)",
    description:
      "Marina Beach sunrise, Kapaleeshwarar Temple, Chola bronzes, best filter coffee. Real 2-day Chennai guide.",
    images: ["https://www.incredibleitinerary.com/images/blog/chennai-marina-beach.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/chennai-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/chennai-2-days#article",
      "headline": "Chennai 2 Days: The Real City Guide (Temples, Marina Beach & Food)",
      "description":
        "Complete 2-day Chennai itinerary — Kapaleeshwarar Temple, Marina Beach, Mahabalipuram day trip, Egmore Museum, best South Indian food, budget from ₹2,500/day.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/chennai-marina-beach.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-01T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/chennai-2-days",
      },
      "keywords":
        "Chennai travel guide, Chennai itinerary 2 days, Marina Beach, Kapaleeshwarar Temple, Mahabalipuram day trip from Chennai, Chennai food guide, South India travel",
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
          "name": "Chennai in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/chennai-2-days",
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Chennai, Tamil Nadu, India",
      "description":
        "Gateway to South India — Marina Beach (world's second longest urban beach), Kapaleeshwarar Temple, Mylapore neighbourhood, world-class Chola bronzes at the Government Museum, and South India's finest filter coffee culture.",
      "url": "https://www.incredibleitinerary.com/blog/chennai-2-days",
      "touristType": ["Cultural Tourism", "Food Tourism", "Heritage Tourism", "Beach Tourism"],
    },
  ],
};

// FAQPage schema — standalone block
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days do you need in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2 days is enough to cover Marina Beach, Kapaleeshwarar Temple, Mylapore, San Thome Cathedral, the Government Museum, and one evening in Besant Nagar. Add a third day for a Mahabalipuram day trip (58km away, UNESCO Shore Temple).",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "November to February is the best time — temperatures 28–32°C, pleasant weather. Note: Chennai gets the northeast monsoon (Oct–Dec), not the southwest monsoon like the rest of India. April is hot (35–40°C) but manageable with early morning starts. June–September is actually drier in Chennai.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a 2-day Chennai trip cost per person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can cover 2 days for ₹5,000–₹7,000 including accommodation (Egmore guesthouse ₹700–1,200/night), meals (₹150–300/meal at local restaurants), and metro/auto transport. Mid-range budget is ₹10,000–16,000 for two days. Chennai is notably cheaper than Mumbai and Delhi for equivalent quality.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Marina Beach worth visiting in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but timing is everything. Marina Beach at sunrise (before 7am) is spectacular — 13km of beach, fishing boats returning, and virtually empty. Avoid 11am–5pm when it becomes scorching hot and crowded. Evening (after 5pm) is also good with food stalls and local activity.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I do a Mahabalipuram day trip from Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely — Mahabalipuram is 58km south of Chennai (1.5–2 hours). You can see the Shore Temple (UNESCO), Five Rathas, Arjuna's Penance, and Krishna's Butter Ball in one day. Leave Chennai by 7am to avoid noon heat at the open-air monuments. CMBT bus costs ₹60 each way; cab is ₹1,200–1,500 one way.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best food to eat in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with filter coffee and idli-sambar at Ratna Cafe (Triplicane) — a Chennai institution since 1948. Murugan Idli Shop for the best idli in the city. Saravana Bhavan for reliable thalis. For Chettinad cuisine, try Ponnusamy Hotel (Egmore) or Kaaraikudi (Nungambakkam). Apollo Banana Leaf in T Nagar for banana leaf meals.",
      },
    },
  ],
};

export default function ChennaiPage() {
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
      <ChennaiClient />
    </>
  );
}
