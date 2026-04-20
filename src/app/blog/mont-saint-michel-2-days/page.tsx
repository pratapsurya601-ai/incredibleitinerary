import type { Metadata } from "next";
import MontSaintMichelClient from "./MontSaintMichelClient";

export const metadata: Metadata = {
  title: "Mont Saint-Michel in 2 Days: Complete 2026 Guide (Tides, Abbey, Bay Crossing)",
  description:
    "Mont Saint-Michel guide — tide timing secrets, abbey guide, bay crossing on foot, when to arrive for no crowds. Combined with D-Day beaches road trip. Real costs.",
  keywords: [
    "mont saint michel itinerary",
    "mont saint michel guide 2026",
    "bay crossing mont saint michel",
    "normandy travel guide",
    "france travel guide",
    "d-day beaches guide",
  ],
  openGraph: {
    title: "Mont Saint-Michel in 2 Days: Complete 2026 Guide (Tides, Abbey, Bay Crossing)",
    description:
      "Tide timing secrets, abbey guide, bay crossing on foot, when to arrive for no crowds. D-Day beaches road trip combination. Real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mont Saint-Michel island abbey rising from tidal flats in morning mist Normandy France",
      },
    ],
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mont Saint-Michel", "Normandy", "France", "Travel", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mont Saint-Michel in 2 Days: Tides, Abbey & Bay Crossing (2026)",
    description: "Tide timing, abbey guide, bay crossing on foot — real costs and D-Day road trip advice.",
    images: ["https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days#article",
      headline: "Mont Saint-Michel in 2 Days: Complete 2026 Guide (Tides, Abbey, Bay Crossing)",
      description:
        "Mont Saint-Michel guide — tide timing secrets, abbey guide, bay crossing on foot, when to arrive for no crowds. Combined with D-Day beaches road trip. Real costs.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days",
      },
      keywords:
        "mont saint michel itinerary, mont saint michel guide, bay crossing, normandy travel, d-day beaches, abbey tour, tide tables",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4600,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mont Saint-Michel in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Mont Saint-Michel, Normandy, France",
      description:
        "A UNESCO World Heritage Gothic abbey perched on a tidal island in Normandy, rising from the bay twice daily as the sea floods the surrounding flats.",
      url: "https://www.incredibleitinerary.com/blog/mont-saint-michel-2-days",
      touristType: ["Cultural Tourism", "Historical Tourism", "Pilgrimage Tourism", "Nature Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
        {
          "@type": "Question",
          name: "Is Mont Saint-Michel worth visiting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unambiguously yes. It delivers on its photographs. Get the tide timing right, arrive early or late in the day, and do the bay crossing. Those three things make it exceptional rather than merely impressive.",
          },
        },
        {
          "@type": "Question",
          name: "Can I walk across the bay to Mont Saint-Michel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, only with a certified guide (€10–15). The bay has quicksand zones and tides that move faster than a person can run. With a certified guide from Découverte de la Baie it's completely safe and one of the best experiences in Normandy.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the Abbey tour take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1.5–2 hours at a relaxed pace. Focus on the Cloister garden, the Refectory, the Crypts below the main abbey, the Knights' Hall, and the terrace views. Audioguide is included in the €13 ticket.",
          },
        },
        {
          "@type": "Question",
          name: "Where to stay — on the island or mainland?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On the island (Hôtel La Mère Poulard or Auberge Saint-Pierre, €150–350/night) for the experience of the island after day-trippers leave. Mainland Pontorson or Avranches (€50–80/night) for budget. One night on the island is worth the premium if your budget allows.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best time of year to visit Mont Saint-Michel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "April–June and September–October for good weather and manageable crowds. July–August is peak season — crowded but still spectacular. December–January is quiet, cold, and dramatically atmospheric with extraordinary tides and mist.",
          },
        },
      ],
};

export default function MontSaintMichelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <MontSaintMichelClient />
    </>
  );
}
