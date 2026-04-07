import type { Metadata } from "next";
import BikanerClient from "./BikanerClient";

export const metadata: Metadata = {
  title: "Bikaner in 2 Days: Junagarh Fort, Camels & Rajasthan's Desert Gem (2026)",
  description:
    "2-day Bikaner travel guide — Junagarh Fort interior tour, Karni Mata rat temple, NRCC camel research farm, Bikaner bhujia, camel safari and best hotels for 2026.",
  keywords: [
    "bikaner travel guide",
    "junagarh fort bikaner",
    "bikaner itinerary 2 days",
    "karni mata temple bikaner",
    "bikaner rajasthan desert 2026",
  ],
  openGraph: {
    title: "Bikaner in 2 Days: Junagarh Fort, Camels & Rajasthan's Desert Gem (2026)",
    description:
      "2-day Bikaner travel guide — Junagarh Fort interior tour, Karni Mata rat temple, NRCC camel research farm, Bikaner bhujia, camel safari and best hotels for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rajasthan desert cityscape with fort architecture",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Bikaner", "India", "Travel", "Rajasthan", "Junagarh Fort", "Desert"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikaner in 2 Days: Junagarh Fort, Camels & Rajasthan's Desert Gem (2026)",
    description:
      "2-day Bikaner guide — Junagarh Fort, Karni Mata temple, camel safari, bhujia shopping.",
    images: ["https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bikaner-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/bikaner-2-days#article",
      "headline": "Bikaner in 2 Days: Junagarh Fort, Camels & Rajasthan's Desert Gem (2026)",
      "description":
        "2-day Bikaner travel guide — Junagarh Fort interior tour, Karni Mata rat temple, NRCC camel research farm, Bikaner bhujia, camel safari and best hotels for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/bikaner-2-days",
      },
      "keywords":
        "bikaner travel guide, junagarh fort bikaner, bikaner itinerary 2 days, karni mata temple bikaner, bikaner rajasthan desert 2026",
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
          "name": "Bikaner in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/bikaner-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Bikaner, Rajasthan, India",
      "description":
        "Rajasthan's desert gem — home to the unconquered Junagarh Fort, the Karni Mata rat temple, India's only camel research farm, and the original Bikaner bhujia.",
      "url": "https://www.incredibleitinerary.com/blog/bikaner-2-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Desert Tourism", "Food Tourism"],
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
      "name": "How is Bikaner different from Jaisalmer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jaisalmer is more famous (golden fort, sand dunes, camel safari). Bikaner is less touristed, more authentic, and has arguably better fort interiors. Bikaner's bhujia, camel research farm, and rat temple are unique. If choosing one: Jaisalmer for dunes, Bikaner for history.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the rat temple (Karni Mata) safe to visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — it's completely safe. The rats are protected and fed regularly so they are not aggressive. Some visitors find it unsettling, but it's a genuinely fascinating example of living faith. Wear closed shoes.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I combine Bikaner with Jaisalmer and Jodhpur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The classic Rajasthan circuit: Delhi → Jaipur → Pushkar → Jodhpur → Jaisalmer → Bikaner → Delhi. Bikaner to Jaisalmer is 330 km (6 hrs by road). The overnight Jaisalmer–Bikaner train takes 5 hours.",
      },
    },
    {
      "@type": "Question",
      "name": "When is the Bikaner Camel Festival?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually January (exact date varies). The camel beauty pageant, camel races, and cultural performances draw thousands. Book hotels 2 months ahead if visiting during the festival.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Gajner Palace near Bikaner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gajner Palace is a royal hunting lodge 30 km from Bikaner on a lake — now a heritage hotel (₹6000–12000/night). The Gajner Wildlife Sanctuary around it has blackbuck, chinkara, and migratory birds. Worth a day visit even if not staying.",
      },
    },
  ],
};

export default function BikanerBlogPage() {
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
      <BikanerClient />
    </>
  );
}
