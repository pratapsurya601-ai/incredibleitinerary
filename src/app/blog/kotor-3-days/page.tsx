import type { Metadata } from "next";
import KotorClient from "./KotorClient";

export const metadata: Metadata = {
  title: "Kotor in 3 Days: The Complete Montenegro Travel Guide (2026)",
  description:
    "The complete Kotor 3-day itinerary — City Walls hike, Perast & Our Lady of the Rocks, Sveti Stefan, Budva beaches and Lovćen mountains. From €45/day budget to luxury. Indian passport visa-free.",
  keywords: [
    "Kotor travel guide",
    "Montenegro itinerary",
    "Kotor old town",
    "Bay of Kotor boat tour",
    "Perast Montenegro",
    "Sveti Stefan Montenegro",
    "Kotor City Walls hike",
    "Montenegro visa Indian passport",
    "Kotor 3 days",
    "Balkans travel 2026",
  ],
  openGraph: {
    title: "Kotor in 3 Days: Montenegro's Most Dramatic Medieval City (2026)",
    description:
      "A UNESCO walled city, a fjord-like bay, fortress walls zigzagging up a mountain — Kotor from €45/day. The Adriatic's best-kept secret.",
    url: "https://incredibleitinerary.com/blog/kotor-3-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/kotor-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "Kotor Bay Montenegro medieval walled city and fortress walls on mountain",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotor in 3 Days — Montenegro's Adriatic Masterpiece",
    description: "More dramatic than Dubrovnik, half the price, a fraction of the crowds. Kotor is Europe's best-kept secret.",
    images: ["https://incredibleitinerary.com/og/kotor-3-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/kotor-3-days",
  },
};

export default function KotorPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Kotor in 3 Days: The Complete Montenegro Travel Guide (2026)",
      description:
        "Complete 3-day Kotor itinerary covering the UNESCO Old Town, City Walls hike, Perast, Sveti Stefan and Budva for every budget.",
      image: "https://incredibleitinerary.com/og/kotor-3-days.jpg",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/kotor-3-days",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kotor 3 Days",
          item: "https://incredibleitinerary.com/blog/kotor-3-days",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: "Kotor",
      description:
        "UNESCO-listed medieval walled city on the Bay of Kotor in Montenegro, the most dramatic Adriatic city in the Balkans.",
      url: "https://incredibleitinerary.com/blog/kotor-3-days",
      touristType: ["History lovers", "Budget travellers", "Hikers", "Cruise travellers", "Couples"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 42.4247,
        longitude: 18.7712,
      },
      hasMap: "https://maps.google.com/?q=Kotor,Montenegro",
      containedInPlace: {
        "@type": "Place",
        name: "Montenegro",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KotorClient />
    </>
  );
}
