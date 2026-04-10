import type { Metadata } from "next";
import PragueClient from "./PragueClient";

export const metadata: Metadata = {
  title: "Prague in 4 Days: Castle, Charles Bridge, Old Town & the Best Beer in Europe (2026)",
  description: "4 complete Prague itineraries — Budget (€40/day) to Luxury — with Prague Castle strategy, the Kutná Hora Bone Church, Charles Bridge at dawn, and where to drink €2 Pilsner away from the tourist traps.",
  keywords: ["prague itinerary 4 days", "prague travel guide 2026", "prague budget travel", "charles bridge guide", "kutna hora bone church", "prague castle tickets", "czech republic travel"],
  openGraph: {
    title: "Prague in 4 Days: Castle, Charles Bridge & Czech Beer (2026)",
    description: "Prague Castle strategy, the Kutná Hora Bone Church, Charles Bridge at 5:30am, and where to drink €2 Pilsner away from the tourist traps.",
    images: [{ url: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80", width: 1200, height: 630, alt: "Prague Castle and Charles Bridge at dawn Czech Republic" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Prague in 4 Days (2026)", description: "Castle, Charles Bridge, Bone Church, €2 beer. Full itinerary." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/prague-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Prague in 4 Days: Castle, Charles Bridge, Old Town & the Best Beer in Europe (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80",
      description: "4 complete Prague itineraries — budget to luxury — with castle strategy, Bone Church, and real Czech beer culture.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Prague 4 Days", item: "https://www.incredibleitinerary.com/blog/prague-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Prague, Czech Republic",
      description: "The capital of the Czech Republic — home to the world's largest castle complex, medieval Charles Bridge, the Astronomical Clock, and Europe's greatest beer culture.",
      touristType: ["Cultural tourists", "Architecture enthusiasts", "Beer lovers", "History buffs"],
      geo: { "@type": "GeoCoordinates", latitude: 50.0755, longitude: 14.4378 },
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is Prague still cheap in 2026?", acceptedAnswer: { "@type": "Answer", text: "Prague remains significantly cheaper than Western European capitals — a beer costs 45-70 CZK ($1.90-2.90) in a local pub, a full Czech lunch costs 150-250 CZK ($6.25-10.40), and a hostel bed is 350-600 CZK/night. The tourist centre has narrowed the gap but walk one block off the square and prices drop dramatically." } },
    { "@type": "Question", name: "Do Indian passport holders need a visa for Prague?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Czech Republic is a full Schengen member and Indian passport holders must apply for a Schengen short-stay visa (approximately EUR 80 fee) before travel. Processing takes 15-45 days." } },
    { "@type": "Question", name: "What is the best time to visit Prague?", acceptedAnswer: { "@type": "Answer", text: "April-June and September-October. Spring brings warm days and outdoor cafe culture. September is arguably the finest month with fewer crowds and golden autumn light." } },
    { "@type": "Question", name: "Prague vs Vienna vs Budapest — which should I choose?", acceptedAnswer: { "@type": "Answer", text: "Prague has the most spectacular medieval architecture and richest beer culture. Vienna has the grandest imperial heritage. Budapest has the most dramatic cityscape and unique thermal baths. For a first Central European visit, Prague edges ahead on visual drama and value." } },
    { "@type": "Question", name: "Is Czech beer really the best in the world?", acceptedAnswer: { "@type": "Answer", text: "The Czechs consume more beer per capita than any other nation — 184 litres per person per year. The Bohemian pilsner style originated in Plzen in 1842 and is the template from which all modern lager descended." } },
    { "@type": "Question", name: "Is Prague safe for solo travellers and women?", acceptedAnswer: { "@type": "Answer", text: "Prague is one of the safest capitals in Europe for solo travellers. The main practical concerns are pickpockets around Old Town Square and Charles Bridge. The city is very walkable late at night." } },
  ],
};

export default function PraguePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PragueClient />
    </>
  );
}
