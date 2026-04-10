import type { Metadata } from "next";
import BratislavaClient from "./BratislavaClient";

export const metadata: Metadata = {
  title: "Bratislava in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Bratislava itinerary — Michael's Gate, UFO Bridge viewpoint, Devin Castle ruins, Slovak wine, craft beer, boar goulash, and a Vienna day trip. Budget €40/day to luxury riverside hotels.",
  keywords: [
    "Bratislava itinerary",
    "Bratislava 3 days",
    "Bratislava travel guide 2026",
    "Bratislava budget travel",
    "Devin Castle",
    "UFO Bridge Bratislava",
    "Slovak wine",
    "Bratislava visa Indian passport",
  ],
  openGraph: {
    title: "Bratislava in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Michael's Gate, UFO Bridge, Devin Castle ruins, Slovak wine, and a Vienna day trip — Bratislava in 3 days from €40/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/bratislava-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bratislava in 3 Days: Complete 2026 Itinerary",
    description: "Michael's Gate, UFO Bridge, Devin Castle, Slovak wine, and Vienna day trip — all in 3 days from €40/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bratislava-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bratislava in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bratislava in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/bratislava-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bratislava",
      description:
        "Bratislava, Slovakia — medieval Old Town, Michael's Gate, UFO Bridge, Devin Castle ruins, Slovak wine, and the gateway to Vienna.",
      geo: { "@type": "GeoCoordinates", latitude: 48.1486, longitude: 17.1077 },
    },
  ],
};

export default function BratislavaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BratislavaClient />
    </>
  );
}
