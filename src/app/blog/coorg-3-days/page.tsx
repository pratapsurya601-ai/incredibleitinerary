import type { Metadata } from "next";
import CoorgClient from "./CoorgClient";

export const metadata: Metadata = {
  title: "Coorg 3-Day Itinerary 2026: Raja's Seat Complete Guide 2026",
  description:
    "Plan your Coorg trip in 3 days. The complete Coorg travel guide — coffee estate stays, Abbey Falls, Dubare Elephant Camp, Namdroling Monastery, Raja's.",
  keywords: [
    "coorg itinerary 3 days",
    "coorg travel guide 2026",
    "coorg from bangalore",
    "abbey falls coorg",
    "coorg coffee estate stay",
    "dubare elephant camp coorg",
    "raja seat coorg",
    "coorg weekend trip",
    "madikeri coorg",
    "namdroling monastery coorg",
  ],
  openGraph: {
    title: "Coorg 3-Day Itinerary 2026: Trip Planner",
    description: "Abbey Falls · Coffee estates · Dubare Elephant Camp — 4 plans, real costs from Bangalore.",
    images: [{ url: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1200&q=80", width: 1200, height: 630, alt: "Coorg coffee plantation Karnataka misty hills" }],
    type: "article", publishedTime: "2026-03-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coorg 3-Day Itinerary 2026: Trip Planner",
    description: "Abbey Falls, coffee estates, Dubare Elephant Camp — 4 plans, real costs from Bangalore.",
    images: ["https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/coorg-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Coorg in 3 Days: Coffee Estates, Abbey Falls & Raja's Seat (2026)",
      "description": "Complete Coorg travel guide with coffee estate stays, Abbey Falls, Dubare Elephant Camp and Raja's Seat. 4 plans with real costs from Bangalore.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1200&q=80" },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "coorg, madikeri, abbey falls, coffee estate, dubare elephant camp, raja seat, coorg weekend trip",
      "wordCount": 5200,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Coorg 3 Days", "item": "https://www.incredibleitinerary.com/blog/coorg-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Coorg (Kodagu), Karnataka, India",
      "description": "The Scotland of India — a lush hill district in Karnataka known for coffee plantations, misty hills, Abbey Falls, Dubare Elephant Camp and Kodava culture.",
      "url": "https://www.incredibleitinerary.com/blog/coorg-3-days",
      "touristType": ["Eco Tourism", "Cultural Tourism", "Wellness Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
        { "@type": "Question", "name": "How far is Coorg from Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Coorg (Madikeri) is 265km from Bangalore — approximately 5–6 hours by road via NH275 through Mysuru. The Mysuru–Madikeri stretch is a beautiful drive through coffee and spice plantations. KSRTC buses run daily from Bangalore to Madikeri (6–7hrs, Rs.300–Rs.600). By car is more convenient for exploring the estates." } },
        { "@type": "Question", "name": "What is the best time to visit Coorg?", "acceptedAnswer": { "@type": "Answer", "text": "October to March is ideal — cool, dry weather (15–25°C), coffee harvest season October–January, excellent visibility for trekking. April to June is hot but manageable. July to September is monsoon — extremely heavy rainfall (Coorg is one of the wettest places in India), leeches on trails, many roads flooded. Beautiful if you like rain but not for sightseeing." } },
        { "@type": "Question", "name": "Is Coorg good for a 2-day trip from Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — 2 days from Bangalore is the most common Coorg trip. Leave Friday night (overnight drive or early Saturday morning), arrive Saturday morning, do Abbey Falls + Raja's Seat + Dubare Elephant Camp, one night on a coffee estate, Sunday morning Namdroling Monastery + coffee estate tour, drive back Sunday evening. 3 days is better and adds Iruppu Falls and a trek." } },
        { "@type": "Question", "name": "What should I buy in Coorg?", "acceptedAnswer": { "@type": "Answer", "text": "Coorg coffee (whole beans or powder, Rs.200–Rs.500/250g), cardamom (Rs.300–Rs.600/100g), pepper (black and white, Rs.150–Rs.300/100g), Coorg honey (Rs.200–Rs.400/500g), Coorg wine made from local fruits. Buy directly from estate shops or the Madikeri market — significantly cheaper than Bangalore or supermarkets." } },
      ],
};

export default function CoorgPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <CoorgClient />
    </>
  );
}
