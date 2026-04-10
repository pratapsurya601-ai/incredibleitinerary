import type { Metadata } from "next";
import LimaClient from "./LimaClient";

export const metadata: Metadata = {
  title: "Lima in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Lima itinerary — Miraflores cliffs, Larco Museum gold, Barranco murals, ceviche at Central, pisco sours, and Machu Picchu planning. Budget $35/day to Belmond luxury.",
  keywords: [
    "Lima itinerary",
    "Lima 4 days",
    "Lima travel guide 2026",
    "Lima food guide",
    "Miraflores cliffs",
    "Larco Museum Lima",
    "Machu Picchu planning",
    "Lima visa Indian passport",
    "ceviche Lima",
    "pisco sour Lima",
  ],
  openGraph: {
    title: "Lima in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Miraflores cliffs, Larco Museum, Barranco art, ceviche at Central, and pisco sours — Lima in 4 days from $35/day to Belmond luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/lima-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lima in 4 Days: Complete 2026 Itinerary",
    description: "The world's best food city in 4 days — Miraflores, Larco Museum, Barranco, ceviche, pisco sours, and Machu Picchu planning hub.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/lima-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Lima in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lima in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/lima-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Lima",
      description:
        "Lima, Peru — the food capital of the Americas, with Miraflores cliffs, the Larco Museum, Barranco bohemian district, and world-ranking restaurants including Central and Maido.",
      geo: { "@type": "GeoCoordinates", latitude: -12.0464, longitude: -77.0428 },
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Lima safe for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miraflores and Barranco are among the safest districts in South America for tourists. Use Uber rather than street taxis, keep phones out of sight, and avoid the Historic Centre at night. Lima is significantly safer than most people expect.",
      },
    },
    {
      "@type": "Question",
      name: "How many days should I spend in Lima before Machu Picchu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two days minimum for a top restaurant and the Larco Museum. Four days is ideal for a full Lima experience plus Machu Picchu planning. Allow at least one night in Cusco (3,400m) to acclimatise before the ruins.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Lima?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lima summer (Dec–Mar) is warmest (22–28°C) with some sun. Winter (May–Oct) brings garúa sea mist but is the best time for Machu Picchu and the Andean dry season. Many travellers visit Lima in its grey season to enjoy perfect Andean conditions inland.",
      },
    },
    {
      "@type": "Question",
      name: "Can I visit Machu Picchu as a day trip from Lima?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technically possible but strongly discouraged — 20 hours of travel for 2–3 hours at the ruins. Always spend at least one night in Aguas Calientes or Ollantaytambo and allow acclimatisation time in Cusco.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a table at Central or Maido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Central takes reservations at centralrestaurante.com.pe, opening windows 6–8 weeks ahead. Maido takes bookings at maido.pe, 3–4 weeks ahead. Both fill within hours of new dates opening. Check for cancellations 48 hours before your desired date.",
      },
    },
    {
      "@type": "Question",
      name: "What is leche de tigre and where can I try it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leche de tigre (tiger's milk) is the ceviche curing liquid — lime juice, ají amarillo, fish stock, and raw fish trimmings blended together. Most cevicherias serve it as a shot ($1–3). Best versions at La Mar, El Mercado, and Mercado de Surquillo.",
      },
    },
  ],
};

export default function LimaPage() {
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
      <LimaClient />
    </>
  );
}
