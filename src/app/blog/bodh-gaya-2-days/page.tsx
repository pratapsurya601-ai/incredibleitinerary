import type { Metadata } from "next";
import BodhGayaClient from "./BodhGayaClient";

export const metadata: Metadata = {
  title: "Bodh Gaya in 2 Days: Where Buddha Found Enlightenment (2026)",
  description:
    "2-day Bodh Gaya travel guide — Mahabodhi Temple UNESCO, the Bodhi Tree, 80ft Buddha statue, 17 international monasteries, Sujata Kuti and Rajgir day trip for 2026.",
  keywords: [
    "bodh gaya travel guide",
    "mahabodhi temple bodh gaya",
    "bodh gaya itinerary 2 days",
    "bodhi tree buddha enlightenment",
    "bodh gaya bihar 2026",
  ],
  openGraph: {
    title: "Bodh Gaya in 2 Days: Where Buddha Found Enlightenment (2026)",
    description:
      "2-day Bodh Gaya travel guide — Mahabodhi Temple UNESCO, the Bodhi Tree, 80ft Buddha statue, 17 international monasteries, Sujata Kuti and Rajgir day trip for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mahabodhi Temple Bodh Gaya UNESCO World Heritage",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Bodh Gaya", "India", "Travel", "Bihar", "Buddhist Circuit", "Mahabodhi Temple"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodh Gaya in 2 Days: Where Buddha Found Enlightenment (2026)",
    description:
      "2-day Bodh Gaya guide — Mahabodhi Temple, Bodhi Tree meditation, 17 monasteries, Rajgir day trip.",
    images: ["https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bodh-gaya-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/bodh-gaya-2-days#article",
      "headline": "Bodh Gaya in 2 Days: Where Buddha Found Enlightenment (2026)",
      "description":
        "2-day Bodh Gaya travel guide — Mahabodhi Temple UNESCO, the Bodhi Tree, 80ft Buddha statue, 17 international monasteries, Sujata Kuti and Rajgir day trip for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/bodh-gaya-2-days",
      },
      "keywords":
        "bodh gaya travel guide, mahabodhi temple bodh gaya, bodh gaya itinerary 2 days, bodhi tree buddha enlightenment, bodh gaya bihar 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3900,
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
          "name": "Bodh Gaya in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/bodh-gaya-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Bodh Gaya, Bihar, India",
      "description":
        "The holiest site in Buddhism, where Siddhartha Gautama attained enlightenment under the Bodhi Tree. Home to the UNESCO Mahabodhi Temple complex, 17 international monasteries, and India's Buddhist Circuit.",
      "url": "https://www.incredibleitinerary.com/blog/bodh-gaya-2-days",
      "touristType": ["Religious Tourism", "Spiritual Tourism", "Cultural Tourism", "Heritage Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the significance of the Bodhi Tree in Bodh Gaya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This tree is a propagated descendant of the original Bodhi Tree under which Siddhartha Gautama attained enlightenment around 528 BCE. The original tree was destroyed several times; the current tree was grown from a branch sent to Sri Lanka by Emperor Ashoka in 288 BCE, then returned to Bodh Gaya in 1881. It is the holiest living object in Buddhism.",
      },
    },
    {
      "@type": "Question",
      "name": "Can non-Buddhists visit the Mahabodhi Temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the Mahabodhi Temple is open to all visitors regardless of religion. Remove shoes, dress modestly (no shorts, cover shoulders), and maintain silence inside. Photography is allowed in some areas but prohibited near the Bodhi Tree during meditation hours.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Diamond Throne (Vajrasana)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Vajrasana is the red sandstone platform placed by Emperor Ashoka to mark the exact spot where Buddha sat in meditation. It sits beneath the Bodhi Tree. Meditating on or near this stone, Buddhists believe, connects you with the moment of enlightenment.",
      },
    },
    {
      "@type": "Question",
      "name": "How far is Bodh Gaya from Varanasi and Kolkata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Varanasi: 250 km (5 hrs by road). Kolkata: 450 km (8 hrs by road or train). Patna: 130 km (3 hrs). Gaya has direct trains from Delhi, Kolkata, Patna, and Varanasi — making it easy to include in a Northeast India loop.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time for meditation retreats in Bodh Gaya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October–March is peak spiritual season. The Kagyu Monlam festival (November) and Tibetan New Year celebrations attract thousands. Several monasteries and the Root Institute offer 3-day to 10-day Vipassana and Buddhist meditation courses — book 2–3 months ahead.",
      },
    },
  ],
};

export default function BodhGayaBlogPage() {
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
      <BodhGayaClient />
    </>
  );
}
