import type { Metadata } from "next";
import Netherlands5DaysClient from "./Netherlands5DaysClient";

export const metadata: Metadata = {
  title: "Netherlands in 5 Days: Amsterdam, Rotterdam, Utrecht & The Hague (2026)",
  description:
    "Complete 5-day Netherlands itinerary — Amsterdam canals, Rotterdam architecture, Utrecht cafes, The Hague & Delft. Trains, tulips, stroopwafel, cycling. Real budgets in euros and rupees.",
  keywords: [
    "netherlands 5 days itinerary",
    "4 days in netherlands",
    "netherlands travel guide",
    "holland itinerary",
    "netherlands trip",
    "amsterdam rotterdam utrecht itinerary",
    "netherlands by train",
  ],
  openGraph: {
    title: "Netherlands in 5 Days: The Complete Itinerary (2026)",
    description:
      "Amsterdam 2 days, Rotterdam 1 day, Utrecht 1 day, The Hague + Delft 1 day. Real budgets, trains, tulips, cycling.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534351590666-13e3e96c5017?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Netherlands canal houses and bicycles in Amsterdam",
      },
    ],
    type: "article",
    publishedTime: "2026-04-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands in 5 Days (2026)",
    description: "Amsterdam, Rotterdam, Utrecht, The Hague & Delft — complete itinerary.",
    images: ["https://images.unsplash.com/photo-1534351590666-13e3e96c5017?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/netherlands-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.incredibleitinerary.com/blog/netherlands-5-days#article",
      headline:
        "Netherlands in 5 Days: Amsterdam, Rotterdam, Utrecht & The Hague (2026)",
      description:
        "Complete 5-day Netherlands itinerary including Amsterdam, Rotterdam, Utrecht, The Hague, and Delft, with real budgets and train routes.",
      image:
        "https://images.unsplash.com/photo-1534351590666-13e3e96c5017?w=1200&q=80",
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
        "https://www.incredibleitinerary.com/blog/netherlands-5-days",
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
          name: "Netherlands 5 Days",
          item: "https://www.incredibleitinerary.com/blog/netherlands-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Netherlands",
      description:
        "A flat, canal-laced country with Amsterdam at its heart — plus Rotterdam, Utrecht, The Hague, and Delft all reachable within an hour by train.",
      geo: { "@type": "GeoCoordinates", latitude: 52.1326, longitude: 5.2913 },
    },
  ],
};

export default function Netherlands5DaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Netherlands5DaysClient />
    </>
  );
}
