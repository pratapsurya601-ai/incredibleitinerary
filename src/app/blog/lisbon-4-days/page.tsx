import type { Metadata } from "next";
import LisbonClient from "./LisbonClient";

export const metadata: Metadata = {
  title: "When to Go to Lisbon: 4-Day Itinerary (Winter, Summer, Spring, Autumn 2026)",
  description: "When to go to Lisbon — Lisbon in winter, summer, spring, autumn. Complete 4-day itinerary with Sintra day trip, Tram 28 secrets, Pastéis de Belém tips, real euro costs.",
  keywords: [
    "lisbon itinerary 4 days",
    "lisbon travel guide 2026",
    "sintra day trip from lisbon",
    "lisbon budget travel",
    "tram 28 lisbon",
    "pasteis de belem",
    "lisbon trip planner",
    "portugal travel guide",
    "when to go to lisbon",
    "lisbon winter summer spring autumn",
  ],
  openGraph: {
    title: "When to Go to Lisbon: 4-Day Itinerary (Winter, Summer, Spring, Autumn 2026)",
    description: "When to go to Lisbon across winter, summer, spring and autumn — Sintra day trip, Tram 28 secrets, Pastéis de Belém. Full 4-day itinerary.",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Lisbon Alfama trams colorful buildings Portugal" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Lisbon", "Portugal", "Travel", "Itinerary", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lisbon in 4 Days: The Only Guide You Need (2026)",
    description: "3 plans, Sintra day trip, Tram 28 tips, real euro costs.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/lisbon-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/lisbon-4-days#article",
      headline: "Lisbon in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete Lisbon plans with Sintra day trip, Tram 28 secrets, Pastéis de Belém tips, and real costs in euros.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/lisbon-4-days" },
      keywords: "lisbon itinerary, lisbon 4 days, sintra day trip, tram 28, pasteis de belem, alfama, portugal travel",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 5200,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Lisbon in 4 Days", item: "https://www.incredibleitinerary.com/blog/lisbon-4-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Lisbon, Portugal",
      description: "Europe's oldest and most affordable western capital, known for yellow trams, Moorish Alfama, fado music, and the pastéis de nata invented at Pastéis de Belém in 1837.",
      url: "https://www.incredibleitinerary.com/blog/lisbon-4-days",
      touristType: ["Cultural Tourism", "Culinary Tourism", "Urban Tourism", "Heritage Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is Lisbon better than Porto?", acceptedAnswer: { "@type": "Answer", text: "Different cities, different energy. Lisbon is larger, grander, more cosmopolitan. Porto is smaller and more intimate with better wine access. Most visitors do both — Lisbon 4 days, Porto 3 days, with a 3-hour train between them." } },
        { "@type": "Question", name: "Can I do a Sintra day trip from Lisbon?", acceptedAnswer: { "@type": "Answer", text: "Yes — train from Rossio takes 40 minutes, €4.50 each way. Trains every 20–30 minutes. Book Pena Palace tickets online in advance. Allow 6–7 hours for a full day." } },
        { "@type": "Question", name: "What is the best time to visit Lisbon?", acceptedAnswer: { "@type": "Answer", text: "March–May and September–October. Mild weather, fewer crowds, affordable hotels. July–August is hot (35°C+) and very crowded. November–February is cheapest but cooler." } },
        { "@type": "Question", name: "How much does 4 days in Lisbon cost?", acceptedAnswer: { "@type": "Answer", text: "Budget: €40–65/day. Mid-range: €120–200/day. Luxury: €350+/day. Lisbon is one of Western Europe's most affordable capitals." } },
        { "@type": "Question", name: "Is Lisbon safe for solo travellers?", acceptedAnswer: { "@type": "Answer", text: "Lisbon is one of the safest capitals in Europe, ranking in the top 10 globally. Solo female travellers report feeling comfortable. Watch pockets on Tram 28 and in crowded Alfama." } },
      ],
};

export default function LisbonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <LisbonClient />
    </>
  );
}
