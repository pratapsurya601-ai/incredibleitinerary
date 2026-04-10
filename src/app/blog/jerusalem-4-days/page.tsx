import type { Metadata } from "next";
import JerusalemClient from "./JerusalemClient";

export const metadata: Metadata = {
  title: "Jerusalem 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Jerusalem trip in 4 days. The ultimate Jerusalem travel guide — Western Wall, Dome of the Rock, Church of the Holy Sepulchre, Via Dolorosa, Yad Vashem, and the Mahane Yehuda market.",
  keywords: [
    "Jerusalem travel guide",
    "Jerusalem itinerary 4 days",
    "Old City Jerusalem",
    "Western Wall",
    "Dome of the Rock",
    "Church of the Holy Sepulchre",
    "Via Dolorosa",
    "Yad Vashem",
    "Dead Sea day trip",
    "Israel travel 2026",
    "Jerusalem budget travel",
    "Jerusalem things to do",
    "Mahane Yehuda market",
    "Ein Gedi",
    "Jewish Quarter",
    "Muslim Quarter",
    "Christian Quarter",
    "Armenian Quarter",
  ],
  openGraph: {
    title: "Jerusalem 4-Day Itinerary 2026: Trip Planner",
    description:
      "Three Abrahamic faiths, four quarters, and 3,000 years of civilisation in one walled city. Your complete Jerusalem itinerary — budget to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/jerusalem-4-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jerusalem Old City with Western Wall and Dome of the Rock at golden hour",
      },
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jerusalem-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Jerusalem in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Three Abrahamic faiths, four quarters, and 3,000 years of civilisation. Complete Jerusalem itinerary from $60/day to $320/day.",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/jerusalem-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Jerusalem 4-Day Guide", item: "https://www.incredibleitinerary.com/blog/jerusalem-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Jerusalem",
      description:
        "One of the world's oldest and most sacred cities, home to the Western Wall, Dome of the Rock, Church of the Holy Sepulchre, and the ancient Old City — a UNESCO World Heritage Site.",
      url: "https://www.incredibleitinerary.com/blog/jerusalem-4-days",
      touristType: ["Religious tourists", "History enthusiasts", "Cultural travellers", "Backpackers", "Luxury travellers"],
    },
  ],
};

export default function JerusalemPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JerusalemClient />
    </>
  );
}
