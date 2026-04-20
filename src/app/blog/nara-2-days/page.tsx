import type { Metadata } from "next";
import NaraClient from "./NaraClient";

export const metadata: Metadata = {
  title: "Nara in 2 Days: Deer, Great Buddha & Japan's Ancient Capital (2026 Guide)",
  description:
    "Complete Nara 2-day itinerary: feed 1,300 sacred deer, see the world's largest wooden building, walk Kasuga Taisha's 3,000 lanterns, and explore Naramachi. Budget to luxury, real costs.",
  keywords: [
    "nara itinerary 2 days",
    "nara travel guide 2026",
    "nara deer park",
    "todaiji great buddha nara",
    "kasuga taisha shrine nara",
    "nara day trip from kyoto",
    "nara overnight stay",
    "japan ancient capital nara",
    "nara budget guide",
    "yoshikien garden nara",
  ],
  openGraph: {
    title: "Nara in 2 Days: Deer, Great Buddha & Japan's Ancient Capital (2026)",
    description:
      "Feed 1,300 sacred deer at dawn, stand before a 15-metre bronze Buddha in the world's largest wooden building, and walk stone-lantern corridors — the complete Nara guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nara Japan deer bowing in front of Todai-ji Temple",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nara in 2 Days — Japan's Deer Capital (2026)",
    description: "Sacred deer, Great Buddha, 3,000 lanterns, and a town that feels like 752 AD. The complete Nara guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/nara-2-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nara in 2 Days: Deer, Great Buddha & Japan's Ancient Capital (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
      description:
        "A complete 2-day Nara itinerary covering Nara Park, Tōdai-ji Great Buddha, Kasuga Taisha shrine, Yoshikien and Isuien gardens, Naramachi merchant quarter, Kasugayama primeval forest, and Shin-Yakushi-ji temple.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Nara 2 Days",
          item: "https://www.incredibleitinerary.com/blog/nara-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nara, Japan",
      description:
        "Japan's first permanent capital (710–784 AD), home to 1,300 wild sacred deer, the world's largest wooden building containing a 15-metre bronze Buddha, Kasuga Taisha shrine with 3,000 lanterns, and a primeval forest untouched for 1,300 years.",
      touristType: ["Cultural travellers", "History enthusiasts", "Wildlife experience seekers", "Japan travel lovers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.6851,
        longitude: 135.8048,
      },
    },
  ],
};

export default function NaraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NaraClient />
    </>
  );
}
