import type { Metadata } from "next";
import SanchiClient from "./SanchiClient";

export const metadata: Metadata = {
  title: "Sanchi in 2 Days: India's Oldest Stone Monuments & Great Stupa (2026)",
  description:
    "2-day Sanchi travel guide — Great Stupa UNESCO history, four carved toranas (gateways), Ashoka pillar, Sanchi museum, Udaygiri caves and Vidisha day trip for 2026.",
  keywords: [
    "sanchi stupa travel guide",
    "sanchi madhya pradesh itinerary",
    "great stupa sanchi",
    "sanchi UNESCO world heritage",
    "ashoka pillar sanchi 2026",
  ],
  openGraph: {
    title: "Sanchi in 2 Days: India's Oldest Stone Monuments & Great Stupa (2026)",
    description:
      "2-day Sanchi travel guide — Great Stupa UNESCO history, four carved toranas (gateways), Ashoka pillar, Sanchi museum, Udaygiri caves and Vidisha day trip for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Great Stupa of Sanchi UNESCO World Heritage Site",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Sanchi", "India", "Travel", "Madhya Pradesh", "UNESCO", "Buddhist Heritage", "Great Stupa"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanchi in 2 Days: India's Oldest Stone Monuments & Great Stupa (2026)",
    description:
      "2-day Sanchi guide — Great Stupa, four carved toranas, Ashoka pillar, Udaygiri caves, Vidisha day trip.",
    images: ["https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/sanchi-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/sanchi-2-days#article",
      "headline": "Sanchi in 2 Days: India's Oldest Stone Monuments & Great Stupa (2026)",
      "description":
        "2-day Sanchi travel guide — Great Stupa UNESCO history, four carved toranas (gateways), Ashoka pillar, Sanchi museum, Udaygiri caves and Vidisha day trip for 2026.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/sanchi-2-days",
      },
      "keywords":
        "sanchi stupa travel guide, sanchi madhya pradesh itinerary, great stupa sanchi, sanchi UNESCO world heritage, ashoka pillar sanchi 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3700,
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
          "name": "Sanchi in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/sanchi-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Sanchi, Madhya Pradesh, India",
      "description":
        "India's oldest and best-preserved Buddhist complex (3rd century BCE), home to the Great Stupa, four exquisitely carved toranas depicting Buddha's life, the Ashoka Pillar, and the finest collection of early Buddhist sculpture in India.",
      "url": "https://www.incredibleitinerary.com/blog/sanchi-2-days",
      "touristType": ["Heritage Tourism", "Archaeological Tourism", "Cultural Tourism", "Religious Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the significance of Sanchi's toranas (gateways)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The four toranas (north, south, east, west gateways) were built by artisan guilds in the 1st century BCE and carved with the most detailed narrative Buddhist art in existence. They depict Buddha's past lives (Jatakas), his enlightenment, and the spread of Buddhism — all without ever depicting Buddha in human form.",
      },
    },
    {
      "@type": "Question",
      "name": "How many Buddhist sites are in the Sanchi area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Over 50 ancient Buddhist monuments survive in the Sanchi hills alone. Beyond the Great Stupa, there are 3 main stupas (with original relics), 5 temples, several smaller stupas, and the Ashoka pillar — all on one ridge. Nearby: Udaygiri caves (13 km), Vidisha/Besnagar (8 km), and Satdhara (40 km) with more undiscovered stupas.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I visit Sanchi as a day trip from Bhopal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Easily — 46 km (1 hr by train or road). The Sanchi complex itself takes 3–4 hours to explore properly. Add Udaygiri Caves (another 2 hours, 13 km away). Return to Bhopal by evening. However, staying overnight lets you photograph at sunrise — the empty complex at 6 AM is magical.",
      },
    },
    {
      "@type": "Question",
      "name": "What did Ashoka have to do with Sanchi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Emperor Ashoka (268–232 BCE) built the original Great Stupa (much smaller than current), the Ashoka Pillar, and several smaller monasteries at Sanchi. The relics of the Buddha were distributed from Sanchi to stupas across his empire. Sanchi's location (near Vidisha, where Ashoka met his wife Devi) made it personally significant.",
      },
    },
    {
      "@type": "Question",
      "name": "How is Sanchi different from other UNESCO Buddhist sites in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sanchi is the oldest and best-preserved Buddhist complex in India (3rd century BCE vs Ajanta's 2nd century BCE caves). Unlike Ajanta/Ellora (rock-cut, inland Maharashtra), Sanchi is free-standing architecture. Unlike Bodh Gaya (active pilgrimage), Sanchi is archaeological — quieter, more scholarly, and often uncrowded.",
      },
    },
  ],
};

export default function SanchiBlogPage() {
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
      <SanchiClient />
    </>
  );
}
