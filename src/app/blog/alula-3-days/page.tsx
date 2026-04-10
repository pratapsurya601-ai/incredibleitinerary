import type { Metadata } from "next";
import AlulaClient from "./AlulaClient";

export const metadata: Metadata = {
  title: "AlUla in 3 Days: Complete Travel Guide to Hegra & Beyond (2026)",
  description:
    "The complete AlUla 3-day itinerary — Hegra Nabataean tombs, Elephant Rock, Old Town AlUla, Maraya Concert Hall, Winter at Tantora festival. Budget $120 to luxury $500/day. Saudi e-Visa guide included.",
  keywords: [
    "AlUla travel guide",
    "Hegra Mada'in Salih",
    "AlUla itinerary",
    "Saudi Arabia tourism",
    "Nabataean tombs",
    "Elephant Rock AlUla",
    "Winter at Tantora festival",
    "AlUla visa Indian passport",
    "Saudi Arabia 3 days",
    "Middle East travel 2026",
  ],
  openGraph: {
    title: "AlUla in 3 Days: Saudi Arabia's Secret Ancient Wonder (2026)",
    description:
      "111 Nabataean rock-cut tombs, rose-red sandstone formations and a night sky so dense with stars it looks rendered. AlUla from $120/day.",
    url: "https://incredibleitinerary.com/blog/alula-3-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/alula-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "AlUla Hegra Nabataean rock-cut tombs in desert Saudi Arabia ancient ruins",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlUla in 3 Days — Saudi Arabia's Hidden UNESCO Wonder",
    description: "Petra's lesser-known sibling, carved by the same civilisation, visited by a fraction of the crowd.",
    images: ["https://incredibleitinerary.com/og/alula-3-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/alula-3-days",
  },
};

export default function AlulaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AlUla in 3 Days: Complete Travel Guide to Hegra & Beyond (2026)",
      description:
        "Complete 3-day AlUla itinerary: Hegra UNESCO tombs, Elephant Rock, Dadan, Jabal Ikmah and Maraya Concert Hall for every budget.",
      image: "https://incredibleitinerary.com/og/alula-3-days.jpg",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/alula-3-days",
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
          name: "AlUla 3 Days",
          item: "https://incredibleitinerary.com/blog/alula-3-days",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: "AlUla",
      description:
        "Ancient oasis city in northwestern Saudi Arabia featuring Hegra — the Nabataean UNESCO World Heritage Site with 111 rock-cut tombs.",
      url: "https://incredibleitinerary.com/blog/alula-3-days",
      touristType: ["History lovers", "Archaeology enthusiasts", "Luxury travellers", "Adventure seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.6143,
        longitude: 37.9222,
      },
      hasMap: "https://maps.google.com/?q=AlUla,Saudi+Arabia",
      containedInPlace: {
        "@type": "Place",
        name: "Saudi Arabia",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AlulaClient />
    </>
  );
}
