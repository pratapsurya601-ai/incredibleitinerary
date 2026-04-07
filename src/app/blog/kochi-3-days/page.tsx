import type { Metadata } from "next";
import KochiClient from "./KochiClient";

export const metadata: Metadata = {
  title: "Kochi in 3 Days: Fort Kochi, Chinese Fishing Nets & Kerala's Cosmopolitan Port (2026)",
  description:
    "3-day Kochi itinerary — Fort Kochi heritage walk, Chinese fishing nets at sunset, Mattancherry Palace, Jew Town, Kathakali performance, backwater day trip and best hotels for 2026.",
  keywords: [
    "kochi travel guide",
    "fort kochi itinerary",
    "chinese fishing nets kochi",
    "kochi 3 days itinerary",
    "kathakali kochi",
    "kerala backwaters from kochi 2026",
  ],
  openGraph: {
    title: "Kochi in 3 Days: Fort Kochi, Chinese Fishing Nets & Kerala's Cosmopolitan Port (2026)",
    description:
      "3-day Kochi itinerary — Fort Kochi heritage walk, Chinese fishing nets at sunset, Mattancherry Palace, Jew Town, Kathakali performance, backwater day trip and best hotels for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Chinese fishing nets at Fort Kochi Kerala at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kochi", "Kerala", "India", "Travel", "Fort Kochi", "Backwaters"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kochi in 3 Days: Fort Kochi, Chinese Fishing Nets & Kerala's Cosmopolitan Port (2026)",
    description:
      "3-day Kochi guide — Fort Kochi, Kathakali show, Mattancherry, Jew Town, Alleppey day trip.",
    images: ["https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kochi-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kochi-3-days#article",
      "headline": "Kochi in 3 Days: Fort Kochi, Chinese Fishing Nets & Kerala's Cosmopolitan Port (2026)",
      "description":
        "3-day Kochi itinerary — Fort Kochi heritage walk, Chinese fishing nets at sunset, Mattancherry Palace, Jew Town, Kathakali performance, backwater day trip and best hotels for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/kochi-3-days",
      },
      "keywords":
        "kochi travel guide, fort kochi itinerary, chinese fishing nets kochi, kochi 3 days itinerary, kathakali kochi, kerala backwaters from kochi 2026",
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
          "name": "Kochi in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/kochi-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Kochi, Kerala, India",
      "description":
        "Kerala's cosmopolitan port city — a layered blend of Chinese fishing nets, Dutch palaces, Portuguese churches, Jewish synagogues, and some of the finest seafood in South India.",
      "url": "https://www.incredibleitinerary.com/blog/kochi-3-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Food Tourism", "Art Tourism"],
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
      "name": "Is Fort Kochi different from Ernakulam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Kochi district has two main areas. Ernakulam (the mainland) is the commercial hub — shopping malls, railways, airport connections. Fort Kochi (the peninsula, reached by ferry or road) is the heritage area — colonial buildings, fishing nets, art galleries, guesthouses. Most visitors stay in Fort Kochi.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get from Kochi to Munnar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Munnar is 130 km (4–5 hrs by road through tea estates). KSRTC buses run from Ernakulam every 2 hours (₹180, 5 hrs). Private car: ₹2,500–3,500. The drive through Periyar and tea plantations is beautiful. Alternatively: Kochi–Thekkady (Periyar Wildlife) is another 4-hr option.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to see Chinese fishing nets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The nets are visible all day but the light is best at 5–6:30 PM (golden hour). They're raised and lowered every 45 minutes to catch fish. The sunrise view (6 AM) with fishermen at work is equally beautiful and crowd-free.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Kochi expensive compared to other Kerala destinations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kochi is mid-range — more expensive than rural Kerala but cheaper than international cities. Budget: ₹1,500–2,500/day (hostel + local food). Mid-range: ₹4,000–8,000/day (guesthouse + restaurant meals + ferry/auto). Luxury: ₹15,000+/day (Brunton Boatyard + fine dining).",
      },
    },
    {
      "@type": "Question",
      "name": "Can I combine Kochi, Munnar, and Alleppey?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is Kerala's golden triangle. Standard routing: Kochi (2 days) → Munnar (2 days, 4 hrs drive) → Thekkady Periyar (1 day, 3 hrs from Munnar) → Alleppey houseboat (1 night) → Back to Kochi (2.5 hrs). 6–7 days total.",
      },
    },
  ],
};

export default function KochiBlogPage() {
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
      <KochiClient />
    </>
  );
}
