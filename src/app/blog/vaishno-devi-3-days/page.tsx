import type { Metadata } from "next";
import VaishnodeviClient from "./VaishnodeviClient";

export const metadata: Metadata = {
  title: "Vaishno Devi in 3 Days: Complete Yatra Guide, Routes & Tips (2026)",
  description:
    "Complete Vaishno Devi pilgrimage guide for 2026 — helicopter vs trek route, Katra to cave shrine, Bhairavnath temple, RFID registration, hotels and budget breakdown.",
  keywords: [
    "vaishno devi yatra guide",
    "vaishno devi trek route",
    "vaishno devi helicopter booking",
    "katra to vaishno devi",
    "vaishno devi pilgrimage 2026",
  ],
  openGraph: {
    title: "Vaishno Devi in 3 Days: Complete Yatra Guide, Routes & Tips (2026)",
    description:
      "Complete Vaishno Devi pilgrimage guide for 2026 — helicopter vs trek route, Katra to cave shrine, Bhairavnath temple, RFID registration, hotels and budget breakdown.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vaishno Devi mountain trek Katra Jammu pilgrimage India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Vaishno Devi", "Katra", "Jammu", "India", "Travel", "Pilgrimage", "Trek"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishno Devi in 3 Days: Complete Yatra Guide, Routes & Tips (2026)",
    description:
      "Helicopter vs trek, RFID registration, Bhairavnath temple — complete Vaishno Devi yatra guide for 2026.",
    images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/vaishno-devi-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/vaishno-devi-3-days#article",
      "headline": "Vaishno Devi in 3 Days: Complete Yatra Guide, Routes & Tips (2026)",
      "description":
        "Complete Vaishno Devi pilgrimage guide for 2026 — helicopter vs trek route, Katra to cave shrine, Bhairavnath temple, RFID registration, hotels and budget breakdown.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/vaishno-devi-3-days",
      },
      "keywords":
        "vaishno devi yatra guide, vaishno devi trek route, vaishno devi helicopter booking, katra to vaishno devi, vaishno devi pilgrimage 2026",
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
          "name": "Vaishno Devi in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/vaishno-devi-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Vaishno Devi, Jammu & Kashmir, India",
      "description":
        "One of the most sacred Hindu pilgrimage sites — the cave shrine of Mata Vaishno Devi at 5,200 ft in the Trikuta Mountains, reached by a 14 km trek from Katra.",
      "url": "https://www.incredibleitinerary.com/blog/vaishno-devi-3-days",
      "touristType": ["Religious Tourism", "Pilgrimage Tourism", "Adventure Tourism", "Mountain Tourism"],
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
      "name": "How difficult is the Vaishno Devi trek for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 14 km trail is well-paved and gradual — it's doable for most ages. Carry water, wear proper shoes, and start by 4–5 AM to avoid crowds and midday heat. The toughest section is the final climb to Bhavan.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Vaishno Devi open in winter (December–February)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the shrine is open year-round. Winter means snow on the path, longer trek times, and cold nights. It's actually less crowded than summer. Ice cleats/warm gear required December–January.",
      },
    },
    {
      "@type": "Question",
      "name": "What is inside the Vaishno Devi cave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The original cave shrine houses three natural rock formations (pindis) representing Mahakali, Mahalakshmi, and Marasaraswati. A new artificial cave (Ardh Kunwari) has been built for quicker darshan — the original cave is narrower and requires crawling.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does the full Vaishno Devi yatra take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Katra to Bhavan takes 5–7 hours trekking (one way). Add 1–2 hours for darshan queues. Most pilgrims do it in one long day; staying overnight at Bhavan is more relaxed.",
      },
    },
    {
      "@type": "Question",
      "name": "Best time to visit Vaishno Devi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "March–June and September–November are ideal. July–August has monsoon landslides — SMVDSB sometimes closes sections. The Navratri festival (March and October) is busiest but most auspicious.",
      },
    },
  ],
};

export default function VaishnodeviiBlogPage() {
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
      <VaishnodeviClient />
    </>
  );
}
