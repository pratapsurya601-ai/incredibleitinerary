import type { Metadata } from "next";
import TrivandrumClient from "./TrivandrumClient";

export const metadata: Metadata = {
  title: "Trivandrum in 2 Days: Padmanabhaswamy Temple, Kovalam & Kerala's Capital (2026)",
  description:
    "2-day Trivandrum travel guide — Padmanabhaswamy Temple vault mystery, Kovalam lighthouse beach, Napier Museum, Kuthiramalika Palace, Kerala sadya and best hotels for 2026.",
  keywords: [
    "trivandrum travel guide",
    "padmanabhaswamy temple trivandrum",
    "kovalam beach trivandrum",
    "trivandrum itinerary 2 days",
    "thiruvananthapuram kerala 2026",
  ],
  openGraph: {
    title: "Trivandrum in 2 Days: Padmanabhaswamy Temple, Kovalam & Kerala's Capital (2026)",
    description:
      "2-day Trivandrum travel guide — Padmanabhaswamy Temple vault mystery, Kovalam lighthouse beach, Napier Museum, Kuthiramalika Palace, Kerala sadya and best hotels for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Padmanabhaswamy Temple Trivandrum Kerala gopuram",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Trivandrum", "Thiruvananthapuram", "Kerala", "Kovalam", "Padmanabhaswamy"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trivandrum in 2 Days: Padmanabhaswamy Temple, Kovalam & Kerala's Capital (2026)",
    description:
      "2-day Trivandrum guide — Padmanabhaswamy Temple treasure vault, Kovalam beach, Kuthiramalika Palace, Kerala sadya.",
    images: ["https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/trivandrum-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/trivandrum-2-days#article",
      "headline": "Trivandrum in 2 Days: Padmanabhaswamy Temple, Kovalam & Kerala's Capital (2026)",
      "description":
        "2-day Trivandrum travel guide — Padmanabhaswamy Temple vault mystery, Kovalam lighthouse beach, Napier Museum, Kuthiramalika Palace, Kerala sadya and best hotels for 2026.",
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
        "@id": "https://www.incredibleitinerary.com/blog/trivandrum-2-days",
      },
      "keywords":
        "trivandrum travel guide, padmanabhaswamy temple trivandrum, kovalam beach trivandrum, trivandrum itinerary 2 days, thiruvananthapuram kerala 2026",
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
          "name": "Trivandrum in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/trivandrum-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Trivandrum (Thiruvananthapuram), Kerala, India",
      "description":
        "Kerala's capital — home to the world's richest temple (Padmanabhaswamy), Kovalam beach, and some of Kerala's finest traditional architecture.",
      "url": "https://www.incredibleitinerary.com/blog/trivandrum-2-days",
      "touristType": ["Religious Tourism", "Cultural Tourism", "Beach Tourism", "Heritage Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can non-Hindus visit Padmanabhaswamy Temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "No — the inner temple is strictly restricted to Hindus only. Non-Hindus can photograph the temple's eastern gate and exterior gopuram. The Kuthiramalika Palace (adjacent, open to all) and the temple museum display the temple's history, architecture, and artifacts. The treasure vault story is available in the museum.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Padmanabhaswamy Temple treasure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In 2011, Indian Supreme Court-mandated audit found 6 vaults containing gold coins, jewels, crowns, diamond necklaces, and ancient artifacts valued at over $20 billion — making it the richest religious institution on earth. The treasure accumulated over 500+ years of royal donations. Vault B remains sealed by tradition and has not been inventoried.",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Kovalam from Trivandrum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "14 km (30–40 minutes) by road. Local bus from East Fort (₹15, 45 min). Auto: ₹300–400. Taxi: ₹500–700. Kovalam is best visited in the afternoon after morning sightseeing in Trivandrum city — the lighthouse is the best sunset spot.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Trivandrum worth visiting vs skipping for Alleppey or Kochi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Most Kerala visitors skip Trivandrum. But Padmanabhaswamy Temple (even for non-Hindus, the exterior and history are fascinating), Kuthiramalika Palace, and Padmanabhapuram Palace are genuinely exceptional. Add Kovalam Beach. 2 full days justifies the stop on a Kerala circuit.",
      },
    },
    {
      "@type": "Question",
      "name": "What ayurveda treatments are available in Kovalam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Kovalam is Kerala's most established ayurveda destination. Options range from basic (60-min Abhyanga oil massage at beach-side clinics, ₹800–1,500) to comprehensive 7-21 day Panchakarma treatments at dedicated retreat centres. The Green Health Ayurveda Hospital and Pothys Ayurvedic Centres are reputable. Book in advance for multi-day treatments.",
      },
    },
  ],
};

export default function TrivandrumBlogPage() {
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
      <TrivandrumClient />
    </>
  );
}
