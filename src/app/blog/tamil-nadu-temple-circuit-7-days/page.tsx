import type { Metadata } from "next";
import TamilNaduCircuitClient from "./TamilNaduCircuitClient";

export const metadata: Metadata = {
  title: "Tamil Nadu Temple Circuit 7 Days: Tirupati to Rameswaram (2026)",
  description:
    "The definitive south Indian temple road trip — Tirupati, Kanchipuram, Mahabalipuram, Thanjavur, Trichy, Madurai, Rameswaram. 7 days, real costs, route logic.",
  keywords: [
    "tamil nadu temple circuit",
    "south india temple tour 7 days",
    "tirupati to rameswaram",
    "tamil nadu road trip",
    "dravidian temple tour",
    "meenakshi temple madurai",
    "brihadeeswarar temple thanjavur",
    "srirangam trichy",
  ],
  openGraph: {
    title: "Tamil Nadu Temple Circuit 7 Days: Tirupati to Rameswaram (2026)",
    description: "7 temples, 7 days, 1 road trip — the complete south Indian temple circuit.",
    images: [{ url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80", width: 1200, height: 630, alt: "Meenakshi Amman Temple Madurai gopuram" }],
    type: "article",
    publishedTime: "2026-04-08T00:00:00Z",
    authors: ["Surya Pratap"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamil Nadu Temple Circuit 7 Days: Tirupati to Rameswaram (2026)",
    description: "Tirupati → Kanchipuram → Mahabalipuram → Thanjavur → Trichy → Madurai → Rameswaram.",
    images: ["https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/tamil-nadu-temple-circuit-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Tamil Nadu Temple Circuit in 7 Days: Tirupati to Rameswaram (2026)",
      description: "The definitive south Indian temple road trip — Tirupati, Kanchipuram, Mahabalipuram, Thanjavur, Trichy, Madurai, Rameswaram. Route logic, real costs, 7 days.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80" },
      datePublished: "2026-04-08T00:00:00Z",
      dateModified: "2026-04-08T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      keywords: "Tamil Nadu, temple circuit, Tirupati, Kanchipuram, Thanjavur, Madurai, Rameswaram, Srirangam",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 7000,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Tamil Nadu Temple Circuit 7 Days", item: "https://www.incredibleitinerary.com/blog/tamil-nadu-temple-circuit-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Tamil Nadu Temple Circuit, India",
      description: "A 7-day road trip through South India's greatest Dravidian temples — from Tirupati in the north to Rameswaram at India's southern tip.",
      url: "https://www.incredibleitinerary.com/blog/tamil-nadu-temple-circuit-7-days",
      touristType: ["Spiritual Tourism", "Cultural Tourism", "Road Trip"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many days do you need for the Tamil Nadu temple circuit?", acceptedAnswer: { "@type": "Answer", text: "7 days covers Tirupati, Kanchipuram, Mahabalipuram, Thanjavur, Trichy/Srirangam, Madurai and Rameswaram at a comfortable pace. You can compress to 5 days by cutting Mahabalipuram and reducing Madurai, but 7 is recommended." } },
    { "@type": "Question", name: "Is it better to drive or take trains?", acceptedAnswer: { "@type": "Answer", text: "A car with driver is recommended for flexibility — approximately ₹28,000–₹35,000 for a 7-day sedan rental with driver (fuel extra). Trains work for major hops (Chennai–Thanjavur, Trichy–Madurai) but add time and limit temple visits between cities." } },
    { "@type": "Question", name: "What is the temple dress code?", acceptedAnswer: { "@type": "Answer", text: "Most Tamil Nadu temples require modest dress — covered shoulders and legs. Some temples (Srirangam, Madurai Meenakshi, Tirupati) strictly require traditional attire: dhoti/veshti for men, sari or long skirt for women. Rental is available at most temple gates for ₹20–₹50." } },
    { "@type": "Question", name: "What is the best time for the temple circuit?", acceptedAnswer: { "@type": "Answer", text: "November to February is ideal — 22–32°C, comfortable for walking temple complexes. Avoid April–June when temperatures exceed 40°C across Tamil Nadu. The circuit works year-round but monsoon (Oct–Dec) can bring heavy rain." } },
    { "@type": "Question", name: "How much does the 7-day temple circuit cost?", acceptedAnswer: { "@type": "Answer", text: "Budget: ₹22,000–₹30,000 per person (buses, budget hotels, local food). Mid-range: ₹45,000–₹65,000 (car rental, 3-star hotels). Luxury: ₹1,00,000+ (AC SUV, heritage hotels, guided tours). The biggest variable is transport — car hire vs buses." } },
  ],
};

export default function TamilNaduCircuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <TamilNaduCircuitClient />
    </>
  );
}
