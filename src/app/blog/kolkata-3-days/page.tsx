import type { Metadata } from "next";
import KolkataClient from "./KolkataClient";

export const metadata: Metadata = {
  title: "Kolkata 3 Days: The Real City Guide (Howrah, Victoria, Durga Puja & Food)",
  description:
    "Complete 3-day Kolkata itinerary — Howrah Bridge, Victoria Memorial, College Street, Kumartuli, Park Street food, Dakshineswar, budget from ₹2,000/day. India's most underrated city.",
  keywords: [
    "Kolkata travel guide",
    "Kolkata itinerary 3 days",
    "Howrah Bridge",
    "Victoria Memorial",
    "Kolkata food guide",
    "things to do in Kolkata",
    "Kolkata hidden gems",
  ],
  openGraph: {
    title: "Kolkata 3 Days: The Real City Guide (Howrah, Victoria, Durga Puja & Food)",
    description:
      "Complete 3-day Kolkata itinerary — Howrah Bridge, Victoria Memorial, College Street, Kumartuli, Park Street food, Dakshineswar, budget from ₹2,000/day.",
    images: [
      {
        url: "https://www.incredibleitinerary.com/images/blog/kolkata-howrah-bridge.jpg",
        width: 1200,
        height: 630,
        alt: "Howrah Bridge over the Hooghly River at sunrise, Kolkata",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Kolkata", "India", "Travel", "Itinerary", "Food", "Culture", "West Bengal"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolkata 3 Days: The Real City Guide (Howrah, Victoria, Durga Puja & Food)",
    description:
      "Howrah Bridge at dawn, Kumartuli idol workshops, the world's best street food. Real 3-day Kolkata guide.",
    images: ["https://www.incredibleitinerary.com/images/blog/kolkata-howrah-bridge.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kolkata-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kolkata-3-days#article",
      "headline": "Kolkata 3 Days: The Real City Guide (Howrah, Victoria, Durga Puja & Food)",
      "description":
        "Complete 3-day Kolkata itinerary — Howrah Bridge, Victoria Memorial, College Street, Kumartuli, Park Street food, Dakshineswar, budget from ₹2,000/day. India's most underrated city.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/kolkata-howrah-bridge.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-07T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/kolkata-3-days",
      },
      "keywords":
        "Kolkata travel guide, Kolkata itinerary 3 days, Howrah Bridge, Victoria Memorial, Kolkata food guide, things to do in Kolkata, Kolkata hidden gems",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
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
          "name": "Blog",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kolkata in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/kolkata-3-days",
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Kolkata (Calcutta), West Bengal, India",
      "description":
        "India's most literary and intellectual city — home to Howrah Bridge, Victoria Memorial, Durga Puja, and the finest street food in the subcontinent.",
      "url": "https://www.incredibleitinerary.com/blog/kolkata-3-days",
      "touristType": ["Cultural Tourism", "Food Tourism", "Heritage Tourism"],
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
      "name": "How many days are enough for Kolkata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 days is ideal to experience Kolkata properly — Howrah Bridge, Victoria Memorial, Kumartuli, College Street, Dakshineswar, and enough meals to appreciate the food culture. 2 days works for highlights only. 4-5 days lets you go deeper into neighbourhoods and day-trip to Sundarbans.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Kolkata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to February is the best time to visit Kolkata (25–32°C, pleasant). October during Durga Puja is spectacular but extremely crowded. March–April gets hot. May–September brings brutal heat and monsoon. Winter (November–February) is the sweet spot.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a 3-day Kolkata trip cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A budget traveller can do 3 days in Kolkata for ₹4,500–₹7,500 including accommodation (Sudder Street guesthouses ₹600–₹1,000/night). Mid-range costs ₹12,000–₹21,000. Kolkata is the cheapest major city in India — 30–40% less than Delhi or Mumbai for equivalent quality.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Kolkata safe for solo travellers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Kolkata is one of India's safer major cities. It has a strong community culture (para culture) where locals look out for each other. Solo women travellers generally find it more relaxed than Delhi or Mumbai. Use the metro, which is clean and efficient.",
      },
    },
    {
      "@type": "Question",
      "name": "What food must I try in Kolkata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kati rolls at Nizam's (original inventor), phuchka at Dacres Lane, kosha mangsho (slow-cooked mutton) at Golbari in Shyambazar, mishti doi and rosogolla at KC Das, fish curry and rice at Bhojohori Manna, chelo kebab at Peter Cat, and morning luchi with aloo dum at any neighbourhood shop.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get around Kolkata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The metro is the fastest option (₹5–25/ride). Trams are atmospheric but slow (₹7 — world's cheapest transport). Yellow taxis and auto-rickshaws cover areas the metro doesn't. Ola and Uber work throughout the city. For Dakshineswar, take the ferry from Bagh Bazaar (₹10–15).",
      },
    },
  ],
};

export default function KolkataBlogPage() {
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
      <KolkataClient />
    </>
  );
}
