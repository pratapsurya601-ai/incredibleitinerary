import type { Metadata } from "next";
import IguazuFallsClient from "./IguazuFallsClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Iguazu Falls 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Iguazu Falls trip in 4 days. Both sides of the falls, Devil's Throat, jungle walks, boat rides, Triple Frontier — complete guide from $80/day.",
  keywords: [
    "Iguazu Falls travel guide",
    "Iguazu Falls 4 days itinerary",
    "Argentine side vs Brazilian side Iguazu",
    "Devil's Throat Iguazu",
    "Foz do Iguaçu travel guide",
    "Puerto Iguazú Argentina",
    "Iguazu boat ride under falls",
    "Triple Frontier Argentina Brazil Paraguay",
    "Iguazu Falls visa Indian passport",
    "Iguazu budget travel 2026",
  ],
  openGraph: {
    title: "Iguazu Falls 4-Day Itinerary 2026: Trip Planner",
    description:
      "275 waterfalls, 2.7km wide, and a Devil's Throat that thunders 82m straight down. Our complete 4-day guide to both sides of Iguazu from $80/day.",
    url: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544179700-855cb29a2bd8?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Iguazu Falls Argentina Brazil panoramic waterfalls jungle rainbow mist",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iguazu Falls 4-Day Itinerary 2026: Trip Planner",
    description:
      "Eleanor Roosevelt said 'Poor Niagara' after seeing Iguazu. Our 4-day guide covers both sides, the boat ride, and the Triple Frontier — from $80/day.",
    images: ["https://images.unsplash.com/photo-1544179700-855cb29a2bd8?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Iguazu Falls in 4 Days: The Complete Guide — Argentine & Brazilian Sides (2026)",
      description:
        "A complete 4-day Iguazu Falls guide covering both the Argentine and Brazilian sides, Devil's Throat, boat rides, Triple Frontier, and Itaipu Dam — for every budget.",
      image: "https://images.unsplash.com/photo-1544179700-855cb29a2bd8?w=1200&q=80",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Iguazu Falls 4-Day Guide",
          item: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Iguazu Falls",
      description:
        "The world's most theatrical natural wonder — 275 individual falls stretching 2.7km wide on the Argentina-Brazil border, with the Devil's Throat plunging 82 metres in a thundering horseshoe.",
      url: "https://www.incredibleitinerary.com/blog/iguazu-falls-4-days",
      touristType: ["Nature Traveller", "Adventure Traveller", "Photographer"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -25.6953,
        longitude: -54.4367,
      },
      containedInPlace: [
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Brazil" },
      ],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which side of Iguazu Falls is better — Argentine or Brazilian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both sides are essential. The Argentine side gives you the close-up immersive experience on elevated catwalks directly above and beside the falls, including the Devil's Throat at 82m. The Brazilian side gives you the iconic panoramic wide-angle view showing all 275 falls across 2.7km simultaneously. Visit both — allocate one full day each.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see Iguazu Falls properly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Allow 1 full day for the Argentine side (Upper + Lower Circuit + Devil's Throat + Macuco Safari = 6–7 hours) and 1 full day for the Brazilian side (panoramic walkway + Bird Park + boat ride = 4–5 hours). Add a third day for the Macuco jungle trail, Itaipu Dam, and Triple Frontier. Four days is ideal.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Macuco Safari boat ride worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — almost universally cited as one of the best experiences at Iguazu. A zodiac inflatable boat takes you directly under a curtain of falling water. You will be completely soaked. Argentine side costs ~$50; Brazilian side ~$30 (R$150). Book in advance — it sells out by midday in peak season.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pre-book tickets for Iguazu Falls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, especially in high season. Argentine side: book at iguazuargentina.com. Brazilian side: cataratasdoiguacu.com.br. The Macuco Safari boat should be booked online or immediately at park opening. Belmond Hotel das Cataratas requires months of advance booking for August–October.",
      },
    },
    {
      "@type": "Question",
      name: "How do I cross between the Argentine and Brazilian sides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Take the direct international bus from Puerto Iguazú (Argentina) to Foz do Iguaçu (Brazil) — runs every 30 minutes, 06:00–22:00, costs R$15 (~$3) or ARS 800, 30-minute journey. The bus stops briefly at both Argentine and Brazilian customs for passport stamps. Carry your actual passport.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Iguazu Falls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "August to November is ideal — 18–28°C, comfortable for walking all day, lower humidity, and the rainbow effect in the mist is strongest. December to February is peak season with 40°C heat and 90% humidity — crowds double and walking the circuits in midday heat is unpleasant. March to May has the most powerful water flow after the rainy season.",
      },
    },
  ],
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function IguazuFallsPage() {
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
      <IguazuFallsClient />
    </>
  );
}
