import type { Metadata } from "next";
import LandourClient from "./LandourClient";

export const metadata: Metadata = {
  title: "Landour in 2 Days: Above Mussoorie, Ruskin Bond's Home & Char Dukan (2026)",
  description:
    "2-day Landour travel guide — char dukan bakery, Lal Tibba viewpoint, colonial walking loop, Ruskin Bond's writing cottage, Landour Language School and best budget homestays for 2026.",
  keywords: [
    "landour travel guide",
    "landour mussoorie itinerary",
    "char dukan landour",
    "ruskin bond landour",
    "landour hill station uttarakhand 2026",
  ],
  openGraph: {
    title: "Landour in 2 Days: Above Mussoorie, Ruskin Bond's Home & Char Dukan (2026)",
    description:
      "2-day Landour travel guide — char dukan bakery, Lal Tibba viewpoint, colonial walking loop, Ruskin Bond's writing cottage, Landour Language School and best budget homestays for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Himalayan valley misty hills Landour Mussoorie",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Landour", "India", "Travel", "Uttarakhand", "Mussoorie", "Ruskin Bond"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landour in 2 Days: Above Mussoorie, Ruskin Bond's Home & Char Dukan (2026)",
    description: "2-day Landour guide: Char Dukan, Lal Tibba, Camel's Back Road and Ruskin Bond's hill town.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/landour-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/landour-2-days#article",
      "headline": "Landour in 2 Days: Above Mussoorie, Ruskin Bond's Home & Char Dukan (2026)",
      "description":
        "2-day Landour travel guide — char dukan bakery, Lal Tibba viewpoint, colonial walking loop, Ruskin Bond's writing cottage, Landour Language School and best budget homestays for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/landour-2-days",
      },
      "keywords": "landour travel guide, landour mussoorie itinerary, char dukan landour, ruskin bond landour, landour hill station uttarakhand 2026",
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
          "name": "Landour in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/landour-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Landour, Uttarakhand, India",
      "description":
        "A tiny cantonment village above Mussoorie at 2,275m, home to Ruskin Bond, the Char Dukan bakery, Lal Tibba viewpoint, and the historic Camel's Back walking road.",
      "url": "https://www.incredibleitinerary.com/blog/landour-2-days",
      "touristType": ["Heritage Tourism", "Literary Tourism", "Nature Tourism", "Leisure Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get to Landour from Mussoorie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Landour is 3 km uphill from Mussoorie's Kulri/Gandhi Chowk. Walk uphill (40–45 min, steep) or share a local taxi (₹50–100 per person). Many travelers base themselves in Mussoorie and walk up to Landour for the day — perfectly manageable.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there accommodation in Landour itself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — several homestays and small guesthouses: Rokeby Manor (heritage, ₹4000–7000), Char Dukan area homestays (₹800–1500), and colonial-style cottages (₹1500–3000). Staying in Landour rather than Mussoorie gives you the quiet evenings and dark-sky nights.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I meet Ruskin Bond?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ruskin Bond doesn't do formal meet-and-greets, but he is sometimes spotted at the Char Dukan or local bookshops. Cambridge Book Depot in Mussoorie often has information. Don't approach him aggressively if you see him — he's in his late 80s and values his privacy.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Landour safe for solo women?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — it's one of India's safest hill stations. The small, walking-only paths, active community of residents (including many expats and retirees), and Army presence nearby make it extremely secure. The main caution is the steep, unlit path back from Mussoorie after dark — take a taxi after 8 PM.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Landour Language School?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Landour Language School has been teaching Hindi to foreigners (missionaries, diplomats, researchers) since the 19th century. It's still operational today. The school's presence explains why Landour has a small expat/international community despite its small size.",
      },
    },
  ],
};

export default function LandourBlogPage() {
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
      <LandourClient />
    </>
  );
}
