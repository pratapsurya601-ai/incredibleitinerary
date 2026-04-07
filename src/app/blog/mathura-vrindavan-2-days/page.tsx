import type { Metadata } from "next";
import MathuraClient from "./MathuraClient";

export const metadata: Metadata = {
  title: "Mathura & Vrindavan in 2 Days: Krishna's Birthplace Complete Guide (2026)",
  description:
    "2-day Mathura Vrindavan itinerary — Krishna Janmabhoomi, Banke Bihari temple, Prem Mandir, Holi in Barsana, Yamuna ghat aarti, budget and tips for 2026.",
  keywords: [
    "mathura vrindavan itinerary",
    "krishna janmabhoomi mathura",
    "banke bihari temple vrindavan",
    "holi in mathura 2026",
    "mathura vrindavan trip guide",
  ],
  openGraph: {
    title: "Mathura & Vrindavan in 2 Days: Krishna's Birthplace Complete Guide (2026)",
    description:
      "2-day Mathura Vrindavan itinerary — Krishna Janmabhoomi, Banke Bihari temple, Prem Mandir, Holi in Barsana, Yamuna ghat aarti, budget and tips for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mathura Vrindavan Krishna birthplace temple India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mathura", "Vrindavan", "India", "Travel", "Pilgrimage", "Krishna", "Holi"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathura & Vrindavan in 2 Days: Krishna's Birthplace Complete Guide (2026)",
    description:
      "Krishna Janmabhoomi, Banke Bihari, Prem Mandir, Yamuna aarti — complete 2-day Mathura Vrindavan guide.",
    images: ["https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mathura-vrindavan-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mathura-vrindavan-2-days#article",
      "headline": "Mathura & Vrindavan in 2 Days: Krishna's Birthplace Complete Guide (2026)",
      "description":
        "2-day Mathura Vrindavan itinerary — Krishna Janmabhoomi, Banke Bihari temple, Prem Mandir, Holi in Barsana, Yamuna ghat aarti, budget and tips for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/mathura-vrindavan-2-days",
      },
      "keywords":
        "mathura vrindavan itinerary, krishna janmabhoomi mathura, banke bihari temple vrindavan, holi in mathura 2026, mathura vrindavan trip guide",
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
          "name": "Mathura & Vrindavan in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/mathura-vrindavan-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Mathura & Vrindavan, Uttar Pradesh, India",
      "description":
        "The birthplace of Lord Krishna and the town where he spent his childhood. Home to Krishna Janmabhoomi, Banke Bihari temple, Prem Mandir, ISKCON, and world-famous Holi celebrations.",
      "url": "https://www.incredibleitinerary.com/blog/mathura-vrindavan-2-days",
      "touristType": ["Religious Tourism", "Pilgrimage Tourism", "Cultural Tourism", "Festival Tourism"],
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
      "name": "Is Mathura worth visiting outside Holi season?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the daily temple aartis and ghats are beautiful year-round. Janmashtami (Krishna's birthday, August) is another peak time with midnight celebrations. Only avoid May–June.",
      },
    },
    {
      "@type": "Question",
      "name": "How to reach Mathura from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Train: Shatabdi or Jan Shatabdi (2–2.5 hrs, ₹150–450). By road: Yamuna Expressway, 2.5–3 hrs (150 km). Mathura is also on the Delhi–Agra highway.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between Mathura and Vrindavan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mathura is Krishna's birthplace — more urban, with Yamuna ghats and the Janmabhoomi complex. Vrindavan (12 km away) is where Krishna spent his childhood — more forests, more temples, more ISKCON community. Visit both.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the 84 Kos Parikrama pilgrimage route accessible?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 84-Kos (252 km) circuit around the entire Braj region takes 4–5 days on foot. Most visitors instead do the inner Vrindavan Parikrama (10.5 km, 2–3 hours). It's flat and paved.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Nidhivan and why is it locked at sunset?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nidhivan is a sacred grove in Vrindavan where, according to tradition, Radha-Krishna perform the Raas Lila every night. The grove is locked at sunset, animals leave on their own, and no one stays inside. It's open for visits 7 AM–5 PM.",
      },
    },
  ],
};

export default function MathuraVrindavanBlogPage() {
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
      <MathuraClient />
    </>
  );
}
