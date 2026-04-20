import type { Metadata } from "next";
import BestEuropeanItinerariesClient from "./BestEuropeanItinerariesClient";

export const metadata: Metadata = {
  title: "Best European Itineraries: 12 Perfect Europe Trips for Every Traveler (2026)",
  description:
    "12 curated Europe itineraries — classic Italy-France, Nordic, Balkans, Mediterranean, Iberian, Greek Islands and more. Durations, highlights, and real budgets in rupees and euros.",
  keywords: [
    "best european itineraries",
    "perfect europe trip",
    "europe itinerary",
    "travel itinerary to europe",
    "european travel plans",
    "europe trip planner 2026",
    "europe vacation ideas",
  ],
  openGraph: {
    title: "Best European Itineraries: 12 Perfect Europe Trips (2026)",
    description:
      "12 Europe itineraries for every kind of traveler — classic, Nordic, Balkans, Iberian, Greek Islands. Real budgets included.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Europe travel itinerary planning with map and landmarks",
      },
    ],
    type: "article",
    publishedTime: "2026-04-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best European Itineraries (2026)",
    description: "12 perfect Europe trips — classic, Nordic, Balkans, Iberian, Greek Islands.",
    images: ["https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/best-european-itineraries",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id":
        "https://www.incredibleitinerary.com/blog/best-european-itineraries#article",
      headline:
        "Best European Itineraries: 12 Perfect Europe Trips for Every Traveler (2026)",
      description:
        "12 curated Europe itineraries — classic, Nordic, Balkans, Mediterranean, Iberian, Greek Islands and more, with real budgets in rupees and euros.",
      image:
        "https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=1200&q=80",
      datePublished: "2026-04-21T00:00:00Z",
      dateModified: "2026-04-21T00:00:00Z",
      author: {
        "@type": "Person",
        name: "Surya Pratap",
        url: "https://www.incredibleitinerary.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      mainEntityOfPage:
        "https://www.incredibleitinerary.com/blog/best-european-itineraries",
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best European Itineraries",
          item: "https://www.incredibleitinerary.com/blog/best-european-itineraries",
        },
      ],
    },
  ],
};

export default function BestEuropeanItinerariesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BestEuropeanItinerariesClient />
    </>
  );
}
