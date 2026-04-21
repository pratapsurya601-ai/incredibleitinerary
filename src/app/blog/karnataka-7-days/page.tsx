import type { Metadata } from "next";
import KarnatakaCircuitClient from "./KarnatakaCircuitClient";

export const metadata: Metadata = {
  title: "Karnataka 7-Day Itinerary (2026): Mysore → Coorg → Gokarna → Hampi Route",
  description:
    "Complete 7-day Karnataka circuit — Bangalore, Mysore Palace, Coorg coffee estates, Gokarna beaches, Hampi ruins. Real costs from ₹12,000, route map, when to visit each stop.",
  keywords: [
    "karnataka 7 days itinerary",
    "mysore to hampi road trip",
    "karnataka circuit tour",
    "coorg coffee estate",
    "gokarna beaches",
    "hampi ruins guide",
    "mysore palace visit",
    "karnataka travel guide 2026",
    "south india road trip",
  ],
  openGraph: {
    title: "Karnataka 7-Day Itinerary (2026): Mysore → Coorg → Gokarna → Hampi",
    description: "Bangalore → Mysore → Coorg → Gokarna → Hampi. Real costs from ₹12,000, route map, when to visit each.",
    images: [{ url: "https://images.unsplash.com/photo-1600112356600-6e7faf5f5e76?w=1200&q=80", width: 1200, height: 630, alt: "Mysore Palace illuminated at night Karnataka India" }],
    type: "article",
    publishedTime: "2026-04-09T00:00:00Z",
    authors: ["Surya Pratap"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karnataka 7-Day Itinerary (2026): Mysore → Hampi",
    description: "Full circuit — palaces, coffee estates, beaches, Hampi ruins. From ₹12,000.",
    images: ["https://images.unsplash.com/photo-1600112356600-6e7faf5f5e76?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/karnataka-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Karnataka in 7 Days: Mysore to Hampi — Palaces, Coffee & Ruins (2026)",
      description: "Complete Karnataka circuit — Bangalore, Mysore, Coorg, Gokarna, Hampi. 7 days, real costs, route logic, budget breakdown.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1600112356600-6e7faf5f5e76?w=1200&q=80" },
      datePublished: "2026-04-09T00:00:00Z",
      dateModified: "2026-04-09T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      keywords: "Karnataka, Mysore, Coorg, Gokarna, Hampi, Bangalore, road trip, palaces, coffee estates",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 7000,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Karnataka 7 Days", item: "https://www.incredibleitinerary.com/blog/karnataka-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Karnataka Circuit, India",
      description: "A 7-day road trip through Karnataka covering palaces in Mysore, coffee estates in Coorg, beaches in Gokarna and ancient ruins in Hampi.",
      url: "https://www.incredibleitinerary.com/blog/karnataka-7-days",
      touristType: ["Cultural Tourism", "Nature Tourism", "Beach Tourism", "Road Trip"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many days do you need for a Karnataka circuit?", acceptedAnswer: { "@type": "Answer", text: "7 days covers Mysore, Coorg, Gokarna and Hampi at a comfortable pace starting and ending in Bangalore. You can compress to 5 days by cutting Gokarna, but 7 days is recommended to avoid exhausting drives." } },
    { "@type": "Question", name: "Is it better to drive or take buses in Karnataka?", acceptedAnswer: { "@type": "Answer", text: "A car with driver is strongly recommended for this circuit — approximately ₹15,000–₹22,000 for 7 days plus ₹8,000–₹12,000 fuel. The Coorg to Gokarna and Gokarna to Hampi legs are poorly connected by public transport. Buses work for Bangalore–Mysore but become impractical beyond that." } },
    { "@type": "Question", name: "What is the best time to visit Karnataka?", acceptedAnswer: { "@type": "Answer", text: "October to March is ideal — pleasant weather across all destinations. Coorg is best September–March (misty mornings, coffee harvest season). Avoid April–May when Hampi exceeds 40°C. Monsoon (June–September) makes Coorg lush but Gokarna beaches are rough." } },
    { "@type": "Question", name: "How much does the 7-day Karnataka circuit cost?", acceptedAnswer: { "@type": "Answer", text: "Budget: ₹15,000–₹22,000 per person (buses, budget stays, local food). Mid-range: ₹35,000–₹55,000 (car with driver, 3-star hotels, coffee estate homestays). Luxury: ₹80,000–₹1,40,000 (heritage stays, private guides, premium resorts)." } },
    { "@type": "Question", name: "Can I combine Karnataka with Goa?", acceptedAnswer: { "@type": "Answer", text: "Yes — Gokarna is only 150km south of Goa. You can extend the circuit by adding 2–3 days in Goa after Gokarna before heading to Hampi. This makes it a 10-day trip but covers two states beautifully." } },
    { "@type": "Question", name: "Is Hampi worth the long drive from Gokarna?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Hampi is a UNESCO World Heritage Site with over 500 monuments spread across a surreal boulder landscape. The 340km drive from Gokarna is long but Hampi is unlike anything else in India — a ruined Vijayanagara capital frozen in time." } },
  ],
};

export default function KarnatakaCircuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KarnatakaCircuitClient />
    </>
  );
}
