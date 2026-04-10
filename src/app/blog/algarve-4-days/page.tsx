import type { Metadata } from "next";
import AlgarveClient from "./AlgarveClient";

export const metadata: Metadata = {
  title: "Algarve in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Algarve plans — Budget, Mid-Range, Luxury — covering Ponta da Piedade sea caves, Benagil Cave, Sagres, and the golden cliff beaches. Real costs in euros.",
  keywords: [
    "algarve itinerary 4 days",
    "algarve travel guide 2026",
    "benagil cave tour",
    "ponta da piedade lagos",
    "sagres portugal",
    "algarve beaches",
    "portugal coast guide",
    "algarve budget travel",
  ],
  openGraph: {
    title: "Algarve in 4 Days: Budget to Luxury Itinerary 2026",
    description: "Ponta da Piedade caves, Benagil Cave, Sagres sunset — 3 complete Algarve plans with real euro costs.",
    images: [{ url: "https://images.unsplash.com/photo-1548625361-58a9d86b2c46?w=1200&q=80", width: 1200, height: 630, alt: "Algarve golden cliffs rock arches Ponta da Piedade Portugal coast" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Algarve", "Portugal", "Travel", "Itinerary", "Europe", "Beaches"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algarve in 4 Days: The Only Guide You Need (2026)",
    description: "3 plans, Benagil Cave tips, Ponta da Piedade kayaking, Sagres sunset — real euro costs.",
    images: ["https://images.unsplash.com/photo-1548625361-58a9d86b2c46?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/algarve-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/algarve-4-days#article",
      headline: "Algarve in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete Algarve plans covering Ponta da Piedade sea caves, Benagil Cave boat tours, Sagres, and golden cliff beaches.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1548625361-58a9d86b2c46?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/algarve-4-days" },
      keywords: "algarve itinerary, benagil cave, ponta da piedade, sagres, lagos portugal, algarve beaches, portugal coast",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 5000,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Algarve in 4 Days", item: "https://www.incredibleitinerary.com/blog/algarve-4-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Algarve, Portugal",
      description: "Southern Portugal's Atlantic coast, famous for golden limestone cliff arches, Benagil Cave, Ponta da Piedade sea grottos, and Sagres at Europe's southwestern tip.",
      url: "https://www.incredibleitinerary.com/blog/algarve-4-days",
      touristType: ["Beach Tourism", "Adventure Tourism", "Nature Tourism", "Coastal Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the best base for an Algarve trip?", acceptedAnswer: { "@type": "Answer", text: "Lagos for western cliff beaches and Sagres access. Carvoeiro for central coast and Benagil Cave. Tavira for the quieter, more authentic east. Lagos is most popular for 4-day trips." } },
        { "@type": "Question", name: "Do I need a car in the Algarve?", acceptedAnswer: { "@type": "Answer", text: "Yes for a 4-day trip. Buses connect towns but the best coastline requires a car and cliff-path walks. Rent at Faro Airport — €20–35/day in shoulder season." } },
        { "@type": "Question", name: "Is Benagil Cave accessible without a tour?", acceptedAnswer: { "@type": "Answer", text: "No safe independent access. Swimming from the beach requires a dangerous 200m open-sea swim in Atlantic swell. Boat tours (€20–35) and guided kayaks (€30) are the correct options." } },
        { "@type": "Question", name: "What is the best time to visit the Algarve?", acceptedAnswer: { "@type": "Answer", text: "May–June for warm weather, fewer crowds, and wildflowers. September–October for warm sea and lower prices. Avoid July–August — overcrowded and prices double." } },
        { "@type": "Question", name: "How does the Algarve compare to other European beach destinations?", acceptedAnswer: { "@type": "Answer", text: "The golden limestone cliffs and sea caves are uniquely dramatic — unlike anything in the Mediterranean. Cheaper than Amalfi or Santorini. Water is Atlantic (cooler) but the coastal landscape is more theatrical. Best for active travellers wanting kayaking and cliff walks alongside beaches." } },
      ],
};

export default function AlgarvePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <AlgarveClient />
    </>
  );
}
