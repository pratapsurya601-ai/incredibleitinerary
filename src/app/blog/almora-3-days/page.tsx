import type { Metadata } from "next";
import AlmoraClient from "./AlmoraClient";

export const metadata: Metadata = {
  title: "Almora in 3 Days: Kumaon Hills, Kasar Devi & Himalayan Views (2026)",
  description:
    "3-day Almora travel guide — Kasar Devi temple Van Allen Belt, Zero Point Himalayan panorama, Kumaoni cuisine, Binsar Wildlife Sanctuary, Bright End Corner sunset and best hotels for 2026.",
  keywords: [
    "almora travel guide",
    "almora uttarakhand itinerary",
    "kasar devi almora",
    "almora hill station 3 days",
    "kumaon hills travel 2026",
  ],
  openGraph: {
    title: "Almora in 3 Days: Kumaon Hills, Kasar Devi & Himalayan Views (2026)",
    description:
      "3-day Almora travel guide — Kasar Devi temple Van Allen Belt, Zero Point Himalayan panorama, Kumaoni cuisine, Binsar Wildlife Sanctuary, Bright End Corner sunset and best hotels for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Himalayan peaks panorama from Kumaon hills Almora",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Almora", "India", "Travel", "Uttarakhand", "Kumaon", "Himalayas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almora in 3 Days: Kumaon Hills, Kasar Devi & Himalayan Views (2026)",
    description: "3-day Almora guide: Kasar Devi, Zero Point Binsar, Kumaoni food and Himalayan panoramas.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/almora-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/almora-3-days#article",
      "headline": "Almora in 3 Days: Kumaon Hills, Kasar Devi & Himalayan Views (2026)",
      "description":
        "3-day Almora travel guide — Kasar Devi temple Van Allen Belt, Zero Point Himalayan panorama, Kumaoni cuisine, Binsar Wildlife Sanctuary, Bright End Corner sunset and best hotels for 2026.",
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
        "@id": "https://www.incredibleitinerary.com/blog/almora-3-days",
      },
      "keywords": "almora travel guide, almora uttarakhand itinerary, kasar devi almora, almora hill station 3 days, kumaon hills travel 2026",
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
          "name": "Almora in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/almora-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Almora, Uttarakhand, India",
      "description":
        "A Kumaoni hill town at 1,638m with the famous Kasar Devi Van Allen Belt anomaly, Binsar Wildlife Sanctuary Zero Point, and authentic Kumaoni culture.",
      "url": "https://www.incredibleitinerary.com/blog/almora-3-days",
      "touristType": ["Nature Tourism", "Spiritual Tourism", "Cultural Tourism", "Wildlife Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Kasar Devi's connection to famous foreigners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Swami Vivekananda meditated here in the late 1800s. In the 1960s-70s, it became part of the 'Crank's Ridge' hippie trail — Timothy Leary, Bob Dylan, Cat Stevens, and Allen Ginsberg all visited. Several still maintain properties in the area. The cosmic vibration belief isn't just spiritual — the Van Allen Belt anomaly here has been scientifically measured.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Almora better than Nainital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different experiences. Nainital is more commercial — boat lake, malls, heavy tourist traffic. Almora is quieter, more authentic, and has better Himalayan views. For peace and genuine hill culture, Almora wins. For families and first-timers, Nainital is easier.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Binsar Wildlife Sanctuary famous for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Binsar is known for Zero Point — a 2,412m viewpoint with arguably the best Himalayan panorama in Uttarakhand (65+ peaks on clear days). It's also a birding sanctuary with 200+ species including Himalayan monal, koklass pheasant, and cheer pheasant. Wildlife includes leopard, barking deer, and rhesus macaque.",
      },
    },
    {
      "@type": "Question",
      "name": "Best time to visit Almora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "March–June (pleasant, 15–25°C, blossoming rhododendrons) and October–November (crystal clear skies, best peak views, 8–20°C). Avoid December–February (cold, snow possible) and July–September (monsoon, landslide risk on roads).",
      },
    },
    {
      "@type": "Question",
      "name": "Is Almora safe for solo women travelers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Almora is a small, conservative hill town with low crime. The bazaar and popular sights are safe. Carry a flashlight for evening walks (street lighting is inconsistent). The hippie community around Kasar Devi has made the area slightly more internationally accustomed.",
      },
    },
  ],
};

export default function AlmoraBlogPage() {
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
      <AlmoraClient />
    </>
  );
}
