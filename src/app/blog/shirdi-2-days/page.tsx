import type { Metadata } from "next";
import ShirdiClient from "./ShirdiClient";

export const metadata: Metadata = {
  title: "Shirdi in 2 Days: Sai Baba Darshan & Complete Guide (2026)",
  description:
    "Complete 2-day Shirdi guide — online darshan slot booking, kakad aarti timing, Dwarkamai, Chavadi, Shani Shingnapur day trip, budget hotels and travel tips for 2026.",
  keywords: [
    "shirdi darshan guide",
    "shirdi sai baba darshan booking",
    "shirdi itinerary 2 days",
    "kakad aarti shirdi",
    "shirdi travel guide 2026",
  ],
  openGraph: {
    title: "Shirdi in 2 Days: Sai Baba Darshan & Complete Guide (2026)",
    description:
      "Complete 2-day Shirdi guide — online darshan slot booking, kakad aarti timing, Dwarkamai, Chavadi, Shani Shingnapur day trip, budget hotels and travel tips for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565117350842-c15fe4be68af?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Shirdi Sai Baba Samadhi Mandir temple",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Shirdi", "India", "Travel", "Itinerary", "Maharashtra", "Sai Baba"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shirdi in 2 Days: Sai Baba Darshan & Complete Guide (2026)",
    description:
      "Online darshan booking, kakad aarti timing, Shani Shingnapur day trip, budget breakdown.",
    images: [
      "https://images.unsplash.com/photo-1565117350842-c15fe4be68af?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/shirdi-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/shirdi-2-days#article",
      headline:
        "Shirdi in 2 Days: Sai Baba Darshan & Complete Guide (2026)",
      description:
        "Complete 2-day Shirdi guide — online darshan slot booking, kakad aarti timing, Dwarkamai, Chavadi, Shani Shingnapur day trip, budget hotels and travel tips for 2026.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1565117350842-c15fe4be68af?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-07T00:00:00Z",
      dateModified: "2026-04-07T00:00:00Z",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.incredibleitinerary.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/shirdi-2-days",
      },
      keywords:
        "shirdi darshan guide, shirdi sai baba darshan booking, shirdi itinerary 2 days, kakad aarti shirdi, shirdi travel guide 2026",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 3800,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shirdi in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/shirdi-2-days",
        },
      ],
    },
  ],
};

// FAQPage schema — separate block
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How to book Shirdi darshan online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit sai.org.in → 'Online Darshan Booking' → Select date, preferred aarti, and number of visitors. You'll receive a confirmation with a QR code. Arrive 15 min early at the designated gate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Samadhi Mandir and Dwarkamai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samadhi Mandir houses Sai Baba's marble tomb — this is the main darshan site with the longest queues. Dwarkamai is the old mosque where Sai Baba lived for 60 years, kept a sacred fire, and performed miracles. Both are in the same complex, 200m apart.",
      },
    },
    {
      "@type": "Question",
      name: "Is Shirdi worth visiting for non-devotees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The atmosphere of faith at Kakad Aarti transcends religion. Even non-devotees often find the experience moving. The Shani Shingnapur day trip (village with no locks for 400 years) is fascinating from an anthropological perspective.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Shirdi from Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "240 km by road (4–5 hrs on NH60). By train: Sainagar Shirdi station has direct trains from Mumbai CST/LTT (4.5 hrs). By flight: Shirdi Airport has direct flights from Mumbai (30 min), Delhi, Hyderabad.",
      },
    },
    {
      "@type": "Question",
      name: "What are the aarti timings at Shirdi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "(1) Kakad Aarti: 4:30 AM, (2) Madhyan Aarti: 12:00 PM, (3) Dhoop Aarti: 5:45 PM, (4) Shej Aarti: 10:30 PM. Each lasts 30–40 minutes. The Kakad and Shej aartis are the most atmospheric.",
      },
    },
  ],
};

export default function ShirdiBlogPage() {
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
      <ShirdiClient />
    </>
  );
}
