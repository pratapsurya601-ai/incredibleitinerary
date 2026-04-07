import type { Metadata } from "next";
import AlibaugClient from "./AlibaugClient";

export const metadata: Metadata = {
  title: "Alibaug in 2 Days: Mumbai's Best Beach Escape & Kolaba Fort (2026)",
  description:
    "2-day Alibaug travel guide — Kolaba Fort at low tide, Kihim Beach, Mandwa ferry from Mumbai, Korlai Fort, Konkan food, best beach resorts near Mumbai for 2026.",
  keywords: [
    "alibaug travel guide",
    "alibaug mumbai weekend trip",
    "kolaba fort alibaug",
    "mandwa ferry mumbai",
    "alibaug beach resort 2026",
  ],
  openGraph: {
    title: "Alibaug in 2 Days: Mumbai's Best Beach Escape & Kolaba Fort (2026)",
    description:
      "Kolaba Fort at low tide, Kihim Beach, Mandwa ferry from Mumbai, Konkan food guide. 2 complete plans for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Alibaug beach Maharashtra coastline",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Alibaug", "India", "Travel", "Maharashtra", "Beaches", "Mumbai"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alibaug in 2 Days: Mumbai's Best Beach Escape & Kolaba Fort (2026)",
    description: "Kolaba Fort, Kihim Beach, Mandwa ferry, Konkan food. 2 plans.",
    images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/alibaug-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/alibaug-2-days#article",
      "headline": "Alibaug in 2 Days: Mumbai's Best Beach Escape & Kolaba Fort (2026)",
      "description":
        "2-day Alibaug travel guide — Kolaba Fort at low tide, Kihim Beach, Mandwa ferry from Mumbai, Korlai Fort, Konkan food, best beach resorts near Mumbai for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/alibaug-2-days",
      },
      "keywords":
        "alibaug travel guide, alibaug mumbai weekend trip, kolaba fort alibaug, mandwa ferry mumbai, alibaug beach resort 2026",
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
          "name": "Alibaug in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/alibaug-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Alibaug, Maharashtra, India",
      "description":
        "Mumbai's premier beach getaway — 1 hour by ferry, with Kolaba Fort walkable at low tide, Kihim Beach, Konkan cuisine, and the Korlai Portuguese fort.",
      "url": "https://www.incredibleitinerary.com/blog/alibaug-2-days",
      "touristType": ["Beach Tourism", "Heritage Tourism", "Weekend Getaway", "Food Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get to Alibaug from Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Best route: Ferry from Gateway of India to Mandwa (1 hr, ₹190–200, Maldar or PNP Catamaran). Then bus or auto to Alibaug town (15 km, 30 min). By road: Mumbai to Alibaug via Pen (100 km, 3–4 hrs depending on traffic). The ferry is faster and far more enjoyable.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Alibaug better than Goa for a Mumbai weekend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Mumbai residents, Alibaug has one key advantage: 1-hour ferry vs 8-10 hours to Goa. Alibaug is quieter, more Konkan-authentic, and less commercial than North Goa. For a 2-day escape: Alibaug wins. For a week: Goa wins.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I walk to Kolaba Fort?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — at low tide, you can walk approximately 2 km across the sand to the fort. The walk takes 20–25 minutes. The window is 2–3 hours around low tide. The fort is NOT accessible during high tide — you'd need a boat (₹200–300).",
      },
    },
    {
      "@type": "Question",
      "name": "Is Alibaug safe for swimming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Alibaug Beach and Nagaon have lifeguards and are generally safe for swimming. Kihim and Kashid are excellent for swimming. Avoid swimming during monsoon (June–September) when currents are strong and jellyfish are common. The sea is calmest November–February.",
      },
    },
    {
      "@type": "Question",
      "name": "What water sports are available near Alibaug?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nagaon Beach offers jet skiing, banana boat, and parasailing (₹400–1500/activity). Kihim is better for kayaking. Mandwa has speedboat joyrides. Dive Alibaug runs basic snorkeling sessions in the clearer waters near Kolaba Fort.",
      },
    },
  ],
};

export default function AlibaugBlogPage() {
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
      <AlibaugClient />
    </>
  );
}
