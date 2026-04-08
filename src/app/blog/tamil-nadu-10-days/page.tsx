import type { Metadata } from "next";
import TamilNadu10DaysClient from "./TamilNadu10DaysClient";

export const metadata: Metadata = {
  title: "Tamil Nadu 10 Days: Chennai → Pondicherry → Madurai → Kodaikanal → Ooty (2026)",
  description:
    "Tamil Nadu in 10 days — Chennai, Pondicherry, Thanjavur, Madurai, Kodaikanal, Ooty. Beaches, temples, hill stations. Real costs and day-by-day route.",
  keywords: [
    "tamil nadu itinerary 10 days",
    "tamil nadu tour plan",
    "chennai to ooty trip",
    "tamil nadu travel guide 2026",
    "tamil nadu full circuit",
    "chennai pondicherry madurai kodaikanal ooty",
    "best of tamil nadu",
    "south india 10 days",
    "tamil nadu road trip",
    "meenakshi temple madurai",
    "nilgiri toy train ooty",
    "kodaikanal hill station",
  ],
  openGraph: {
    title: "Tamil Nadu 10 Days: Chennai → Pondicherry → Madurai → Kodaikanal → Ooty (2026)",
    description: "Coast, temples, French colonial streets, two hill stations and a UNESCO toy train — the complete Tamil Nadu circuit in 10 days.",
    images: [{ url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80", width: 1200, height: 630, alt: "Tamil Nadu landscape temples and Nilgiri hills" }],
    type: "article",
    publishedTime: "2026-04-08T00:00:00Z",
    authors: ["Surya Pratap"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamil Nadu 10 Days: Chennai → Pondicherry → Madurai → Kodaikanal → Ooty (2026)",
    description: "Chennai → Mahabalipuram → Pondicherry → Thanjavur → Trichy → Madurai → Kodaikanal → Ooty → Coimbatore.",
    images: ["https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/tamil-nadu-10-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Tamil Nadu in 10 Days: Chennai to Ooty — the Complete Circuit (2026)",
      description: "The complete Tamil Nadu circuit — Marina Beach, Shore Temple, French Quarter Pondicherry, Brihadeeswarar, Meenakshi Temple, Kodaikanal, Nilgiri Toy Train Ooty. 10 days, real costs, route logic.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80" },
      datePublished: "2026-04-08T00:00:00Z",
      dateModified: "2026-04-08T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      keywords: "Tamil Nadu, 10 days, Chennai, Pondicherry, Mahabalipuram, Thanjavur, Madurai, Kodaikanal, Ooty, Nilgiri",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 8000,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Tamil Nadu 10 Days", item: "https://www.incredibleitinerary.com/blog/tamil-nadu-10-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Tamil Nadu, India",
      description: "A 10-day circuit through Tamil Nadu covering beaches, UNESCO temples, French colonial Pondicherry, Meenakshi Temple Madurai, and the Nilgiri hill stations of Kodaikanal and Ooty.",
      url: "https://www.incredibleitinerary.com/blog/tamil-nadu-10-days",
      touristType: ["Cultural Tourism", "Hill Station", "Road Trip", "Spiritual Tourism", "Beach Holiday"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can I do the Tamil Nadu full circuit in 7 days?", acceptedAnswer: { "@type": "Answer", text: "Yes — cut Pondicherry (save 1 day) and combine Thanjavur + Trichy into a faster day. But 10 days is the comfortable pace. For a temple-only trip, see the separate Tamil Nadu Temple Circuit 7-day guide." } },
    { "@type": "Question", name: "Is a car with driver worth the cost for Tamil Nadu?", acceptedAnswer: { "@type": "Answer", text: "Yes, especially for the ghat roads to Kodaikanal and Ooty. 10-day sedan rental with driver costs approximately ₹47,000–₹60,000 total (including fuel). The driver handles hairpin bends, temple parking chaos, and lets you start early each day." } },
    { "@type": "Question", name: "What is the best time to visit Tamil Nadu?", acceptedAnswer: { "@type": "Answer", text: "November to February is ideal — comfortable 22–30°C on the plains, 10–20°C in the hills. Avoid April–June when plains hit 40°C+. Pongal festival in mid-January is magical. Hill stations are pleasant year-round." } },
    { "@type": "Question", name: "How much does a 10-day Tamil Nadu trip cost?", acceptedAnswer: { "@type": "Answer", text: "Budget (trains/buses, budget hotels): ₹25,000–₹35,000 per person. Mid-range (car with driver, 3-star hotels): ₹55,000–₹80,000. Luxury (AC SUV, heritage hotels, guided tours): ₹1,20,000–₹2,00,000. Flights to/from Tamil Nadu not included." } },
    { "@type": "Question", name: "Do I need to book the Nilgiri Toy Train in advance?", acceptedAnswer: { "@type": "Answer", text: "Yes — the Nilgiri Mountain Railway (Ooty–Coonoor section) sells out 1–2 weeks in advance. Book on irctc.co.in as soon as dates are confirmed. First class ₹200, second class ₹30." } },
    { "@type": "Question", name: "Is Tamil Nadu safe for solo travellers?", acceptedAnswer: { "@type": "Answer", text: "Tamil Nadu is one of India's safest states for solo travel with excellent public transport. Chennai, Pondicherry and the hill stations are particularly comfortable. Standard precautions apply." } },
  ],
};

export default function TamilNadu10DaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <TamilNadu10DaysClient />
    </>
  );
}
