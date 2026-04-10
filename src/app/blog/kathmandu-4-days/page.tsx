import type { Metadata } from "next";
import KathmanduClient from "./KathmanduClient";

const siteUrl = "https://www.incredibleitinerary.com";

export const metadata: Metadata = {
  title: "Kathmandu in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Kathmandu itinerary covering Pashupatinath, Boudhanath, Swayambhunath, Durbar Squares, Himalayan views, dal bhat, and momos. Budget $25/day to luxury heritage hotels. Full visa info for Indian and Western passports.",
  keywords: [
    "Kathmandu itinerary",
    "Kathmandu 4 days",
    "Kathmandu travel guide 2026",
    "Nepal budget travel",
    "Pashupatinath Temple",
    "Boudhanath Stupa",
    "Swayambhunath Monkey Temple",
    "Kathmandu visa Indian passport",
  ],
  openGraph: {
    title: "Kathmandu in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Pashupatinath ghats, Boudhanath Stupa, Himalayan sunrises, dal bhat, and momo dumplings — Kathmandu in 4 days from $25/day to luxury heritage hotels.",
    type: "article",
    url: `${siteUrl}/blog/kathmandu-4-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kathmandu in 4 Days: Complete 2026 Itinerary",
    description:
      "Budget to luxury guide for 4 days in Kathmandu, Nepal — Pashupatinath, Boudhanath, Himalayan views, momos, and dal bhat.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/kathmandu-4-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Kathmandu in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kathmandu in 4 Days",
          item: `${siteUrl}/blog/kathmandu-4-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kathmandu",
      description:
        "Kathmandu, Nepal — gateway to the Himalayas, home to seven UNESCO World Heritage Sites, and the spiritual capital of the Hindu and Buddhist world.",
      geo: { "@type": "GeoCoordinates", latitude: 27.7172, longitude: 85.3240 },
    },
  ],
};

export default function KathmanduPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KathmanduClient />
    </>
  );
}
