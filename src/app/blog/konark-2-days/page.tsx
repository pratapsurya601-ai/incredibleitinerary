import type { Metadata } from "next";
import KonarkClient from "./KonarkClient";

export const metadata: Metadata = {
  title: "Konark in 2 Days: Sun Temple, Black Pagoda & Odisha's UNESCO Gem (2026)",
  description:
    "2-day Konark and Puri travel guide — Sun Temple UNESCO history, 24 chariot wheels explained, Chandrabhaga beach sunrise, Puri combination, Odisha dance festival and budget for 2026.",
  keywords: [
    "konark sun temple guide",
    "konark odisha itinerary",
    "konark puri 2 days",
    "konark temple UNESCO",
    "black pagoda odisha 2026",
  ],
  openGraph: {
    title: "Konark in 2 Days: Sun Temple, Black Pagoda & Odisha's UNESCO Gem (2026)",
    description:
      "Sun Temple UNESCO history, 24 chariot wheels explained, Chandrabhaga beach sunrise, Puri combination, Odisha dance festival and budget for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Konark Sun Temple chariot wheels in Odisha",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Konark", "Odisha", "India", "Travel", "UNESCO", "Sun Temple"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konark in 2 Days: Sun Temple, Black Pagoda & Odisha's UNESCO Gem (2026)",
    description: "24 chariot wheels as sundials, Chandrabhaga beach sunrise, Puri combo — full 2026 guide.",
    images: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/konark-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/konark-2-days#article",
      "headline": "Konark in 2 Days: Sun Temple, Black Pagoda & Odisha's UNESCO Gem (2026)",
      "description":
        "2-day Konark and Puri travel guide — Sun Temple UNESCO history, 24 chariot wheels explained, Chandrabhaga beach sunrise, Puri combination, Odisha dance festival and budget for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/konark-2-days",
      },
      "keywords": "konark sun temple guide, konark odisha itinerary, konark puri 2 days, konark temple UNESCO, black pagoda odisha",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4000,
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
          "name": "Konark in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/konark-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Konark, Odisha, India",
      "description":
        "Home to the 13th-century UNESCO-listed Sun Temple — a colossal stone chariot dedicated to Surya with 24 intricately carved wheels that function as sundials.",
      "url": "https://www.incredibleitinerary.com/blog/konark-2-days",
      "touristType": ["Heritage Tourism", "UNESCO Tourism", "Cultural Tourism", "Beach Tourism"],
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
      "name": "Can non-Hindus enter the Konark Sun Temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Sun Temple complex is open to all visitors — it's an archaeological monument managed by ASI, not an active place of worship. The main sanctum is sealed (since 1904, to preserve it) but the entire exterior, natya mandapa (dance hall), and grounds are fully accessible.",
      },
    },
    {
      "@type": "Question",
      "name": "What happened to the Konark temple's main tower?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main shikhara (tower) of the Sun Temple collapsed some time in the 16th–18th century (historians debate when). The dance hall (jagamohana) still stands intact. Sand was packed inside the jagamohana in 1904 by the British to prevent further collapse — so no one can enter the hall.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the significance of the 24 wheels at Konark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 24 wheels represent 24 hours in a day (some say 12 months of the year, in pairs). The 7 horses represent the 7 days of the week. The whole monument is a colossal chariot of the sun god Surya, rendered in stone as if mid-journey across the sky.",
      },
    },
    {
      "@type": "Question",
      "name": "How is Konark different from Khajuraho?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both feature erotic temple sculptures. Konark is in Odisha (coastal, more humid), is a single large temple complex, and is UNESCO-listed. Khajuraho (Madhya Pradesh) has a group of 20+ temples spread across a complex. Konark's erotic sculptures are more subtle — they're friezes at the base, part of a larger theological narrative. Khajuraho's are more prominent and explicit.",
      },
    },
    {
      "@type": "Question",
      "name": "Best time to visit Konark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to February is ideal — cool weather, the Chandrabhaga Mela in January, and the Dance Festival in December. Avoid May–June (extreme heat, 40°C+). The monsoon (July–September) makes the stone temple dramatic to photograph, though some road sections flood.",
      },
    },
  ],
};

export default function KonarkBlogPage() {
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
      <KonarkClient />
    </>
  );
}
