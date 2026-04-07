import type { Metadata } from "next";
import GuwahatiClient from "./GuwahatiClient";

export const metadata: Metadata = {
  title: "Guwahati in 2 Days: Kamakhya Temple, Brahmaputra & Northeast Gateway (2026)",
  description:
    "2-day Guwahati travel guide — Kamakhya Temple Shakti peetha, Umananda Island, Brahmaputra river cruise, Srimanta Sankardeva Kalakshetra, Assam State Museum and ILP info for 2026.",
  keywords: [
    "guwahati travel guide",
    "kamakhya temple guwahati",
    "guwahati itinerary 2 days",
    "brahmaputra guwahati",
    "guwahati northeast india 2026",
  ],
  openGraph: {
    title: "Guwahati in 2 Days: Kamakhya Temple, Brahmaputra & Northeast Gateway (2026)",
    description:
      "2-day Guwahati travel guide — Kamakhya Temple Shakti peetha, Umananda Island, Brahmaputra river cruise, Srimanta Sankardeva Kalakshetra, Assam State Museum and ILP info for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kamakhya Temple Guwahati Assam hilltop view",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Guwahati", "Assam", "Northeast India", "Kamakhya Temple", "Brahmaputra"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guwahati in 2 Days: Kamakhya Temple, Brahmaputra & Northeast Gateway (2026)",
    description:
      "2-day Guwahati guide — Kamakhya Temple, Umananda Island, Brahmaputra sunset cruise, Assam silk shopping.",
    images: ["https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/guwahati-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/guwahati-2-days#article",
      "headline": "Guwahati in 2 Days: Kamakhya Temple, Brahmaputra & Northeast Gateway (2026)",
      "description":
        "2-day Guwahati travel guide — Kamakhya Temple Shakti peetha, Umananda Island, Brahmaputra river cruise, Srimanta Sankardeva Kalakshetra, Assam State Museum and ILP info for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1518639192441-5b9e9eea7faf?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/guwahati-2-days",
      },
      "keywords":
        "guwahati travel guide, kamakhya temple guwahati, guwahati itinerary 2 days, brahmaputra guwahati, guwahati northeast india 2026",
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
          "name": "Guwahati in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/guwahati-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Guwahati, Assam, India",
      "description":
        "The gateway city to Northeast India — home to the powerful Kamakhya Shakti peetha, the Brahmaputra river, and the cultural heritage of the Ahom dynasty.",
      "url": "https://www.incredibleitinerary.com/blog/guwahati-2-days",
      "touristType": ["Religious Tourism", "Cultural Tourism", "Heritage Tourism", "River Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Kamakhya Temple famous for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Kamakhya is one of India's most powerful tantric temples and the most important of the 51 Shakti Peethas (sites where Sati's body parts fell). The sanctum enshrines a rock cleft representing the goddess's yoni — there is no statue. The temple celebrates the goddess's menstruation (Ambubachi Mela, June), making it unique in world religions. Tantric practices including animal sacrifice are performed here.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Guwahati safe for tourists?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes — Guwahati is Assam's capital and a major commercial city. Tourist areas (Fancy Bazaar, Kamakhya Hill, Brahmaputra ghats) are safe. Standard urban precautions apply. Assam's political situation has been stable in recent years; check advisories before travel.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get an ILP (Inner Line Permit) for Northeast states from Guwahati?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "If traveling to Arunachal Pradesh, Nagaland, Mizoram, or Manipur from Guwahati, you need an ILP. For Nagaland and Manipur: get online at respective state portals. For Arunachal Pradesh: apply at Commissioner's Office, Guwahati (1–2 days processing). Meghalaya, Sikkim, and Assam itself don't require ILP for Indians.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Srimanta Sankardeva Kalakshetra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "A 12-acre cultural complex dedicated to the 15th-century Assamese saint-reformer Srimanta Sankardeva, who revolutionized Assamese society through Vaishnavism, literature, and Sattriya dance/theatre. The complex includes a museum of Assamese tribal heritage, performance venues, traditional weaving units, and galleries of Assam's 5 major riverine communities. Open Tuesday–Sunday, 10 AM–5 PM, ₹25 entry.",
      },
    },
    {
      "@type": "Question",
      "name": "How many days should I spend in Guwahati?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "1–2 days is ideal if using Guwahati as a transit hub for Northeast travel. 2 full days covers Kamakhya, Umananda, the Brahmaputra cruise, and the cultural museums. Don't try to see everything in one day — Kamakhya queue alone can take 2–3 hours during peak times.",
      },
    },
  ],
};

export default function GuwahatiiBlogPage() {
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
      <GuwahatiClient />
    </>
  );
}
