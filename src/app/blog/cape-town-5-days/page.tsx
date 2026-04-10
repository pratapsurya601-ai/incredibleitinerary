import type { Metadata } from "next";
import CapeTownClient from "./CapeTownClient";

export const metadata: Metadata = {
  title: "Cape Town in 5 Days: Table Mountain, Penguins, Winelands & Robben Island (2026)",
  description: "Complete 5-day Cape Town itinerary covering Table Mountain, Boulders Beach penguins, Cape Peninsula, Stellenbosch Winelands, and Robben Island. Budget hostels to Ellerman House luxury.",
  keywords: [
    "cape town itinerary 5 days",
    "cape town travel guide 2026",
    "table mountain guide",
    "robben island booking",
    "cape town winelands day trip",
    "cape peninsula self drive",
    "boulders beach penguins",
    "south africa travel guide",
  ],
  openGraph: {
    title: "Cape Town in 5 Days: Table Mountain, Penguins, Winelands & Robben Island (2026)",
    description: "Table Mountain cable car secrets, Robben Island booking tips, Franschhoek wine estates, and the best sundowner spots on the Atlantic. All budgets covered.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Cape Town Table Mountain with cable car overlooking Atlantic Ocean South Africa",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Town in 5 Days (2026)",
    description: "Table Mountain, penguins, Winelands, Robben Island — complete guide with real Rand costs.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/cape-town-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cape Town in 5 Days: Table Mountain, Penguins, Winelands & Robben Island (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
      description:
        "Complete 5-day Cape Town travel guide covering Table Mountain, Cape Peninsula, Winelands, and Robben Island with budget breakdowns and practical tips.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cape Town 5 Days",
          item: "https://www.incredibleitinerary.com/blog/cape-town-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cape Town, South Africa",
      description:
        "South Africa's Mother City — home to Table Mountain, Boulders Beach penguins, Robben Island, the Cape Winelands, and some of the most spectacular coastal scenery in the world.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.9249,
        longitude: 18.4241,
      },
      touristType: ["Adventure travelers", "Wine enthusiasts", "Wildlife lovers", "History buffs", "Beach travelers"],
    },
  ],
};

export default function CapeTownPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CapeTownClient />
    </>
  );
}
