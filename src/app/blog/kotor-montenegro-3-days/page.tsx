import type { Metadata } from "next";
import KotorMontenegroClient from "./KotorMontenegroClient";

export const metadata: Metadata = {
  title: "Kotor Montenegro in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Kotor Montenegro itinerary — Bay of Kotor UNESCO fjord, Old Town medieval walls, San Giovanni fortress hike, Perast boat to Our Lady of the Rocks, Njeguski smoked ham, and Montenegrin wine. Budget €45/day to luxury marina hotels. Visa info included.",
  keywords: [
    "Kotor Montenegro itinerary",
    "Kotor 3 days",
    "Kotor travel guide 2026",
    "Bay of Kotor",
    "Our Lady of the Rocks Perast",
    "San Giovanni fortress hike",
    "Kotor old town",
    "Kotor visa Indian passport",
    "Montenegro travel guide",
    "Njeguski prsut ham",
  ],
  openGraph: {
    title: "Kotor Montenegro in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Bay of Kotor UNESCO fjord, medieval walls, fortress hike, Perast boat to Our Lady of the Rocks, and Njeguski smoked ham — Kotor in 3 days from €45/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotor Montenegro in 3 Days: Complete 2026 Itinerary",
    description:
      "Medieval walls, a UNESCO bay, Perast boat trips, and Montenegrin wine. The complete Kotor guide for every budget.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days#article",
      headline: "Kotor Montenegro in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.incredibleitinerary.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days",
      },
      keywords: "Kotor Montenegro itinerary, Bay of Kotor, San Giovanni fortress, Our Lady of the Rocks, Perast, Njeguski prsut",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 5200,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kotor Montenegro in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kotor, Montenegro",
      description:
        "Kotor, Montenegro — a UNESCO-listed medieval walled city on the deepest fjord in the Adriatic, surrounded by limestone mountains.",
      url: "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days",
      geo: { "@type": "GeoCoordinates", latitude: 42.4247, longitude: 18.7712 },
      touristType: ["Heritage Tourism", "Cultural Tourism", "Adventure Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a visa to visit Montenegro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "US, UK, EU, and Australian passport holders enter Montenegro visa-free for up to 90 days. Indian passport holders need a Montenegro visa (€35–60) unless they hold a valid Schengen, US, or UK visa — which may allow visa-free entry for 30 days under bilateral agreements. Montenegro is not in the EU or Schengen Area and has no ETIAS requirement.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get from Dubrovnik to Kotor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Dubrovnik–Kotor bus runs several times daily, takes 2.5 hours, and costs €10–15. The route crosses the Bosnian border at Neum — bring your passport. Private transfers cost €30–60. Seasonal fast ferry services run between Dubrovnik and Kotor in 2 hours by sea.",
      },
    },
    {
      "@type": "Question",
      name: "How many days do you need in Kotor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3 days is ideal. Day 1 for the old town and San Giovanni Fortress. Day 2 for Perast and Our Lady of the Rocks. Day 3 for Njeguski village and Lovćen National Park. 2 days is the minimum for the old town and Perast.",
      },
    },
    {
      "@type": "Question",
      name: "What is the San Giovanni Fortress hike?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "San Giovanni Fortress is reached by 1,350 steps climbing the medieval city walls from inside Kotor old town. Entry costs €8 and covers the full 4.5km wall circuit. The hike takes 60–90 minutes to the castle at 260m altitude. Go at dawn or golden hour — midday in summer is dangerously hot on the exposed limestone steps.",
      },
    },
    {
      "@type": "Question",
      name: "What currency does Montenegro use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Montenegro uses the euro (€) despite not being an EU member. Cash is preferred at local konobas, buses, and markets. ATMs are available in Kotor old town. Keep €20–30 in small notes for buses, boats, and konoba meals.",
      },
    },
    {
      "@type": "Question",
      name: "Is Kotor worth visiting in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Kotor remains one of Europe's most extraordinary medieval cities, significantly less expensive than comparable Dubrovnik, and surrounded by the UNESCO Bay of Kotor. The combination of fortress hike, baroque island church at Perast, Njeguski smoked ham, and Montenegrin wine makes it a compelling 3-day destination from €45/day.",
      },
    },
  ],
};

export default function KotorMontenegroPage() {
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
      <KotorMontenegroClient />
    </>
  );
}
