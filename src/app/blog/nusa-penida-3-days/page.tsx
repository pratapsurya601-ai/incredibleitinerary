import type { Metadata } from "next";
import NusaPenidaClient from "./NusaPenidaClient";

export const metadata: Metadata = {
  title: "Nusa Penida in 3 Days: Kelingking Beach, Manta Rays & Indonesia's Best Views (2026)",
  description: "Complete Nusa Penida 3-day guide: Kelingking Beach hike, manta ray snorkeling at Manta Point, Diamond Beach, Angel's Billabong, and how to get from Bali. Real costs, tips.",
  keywords: [
    "nusa penida itinerary 3 days",
    "nusa penida travel guide 2026",
    "kelingking beach hike",
    "manta ray snorkeling nusa penida",
    "diamond beach nusa penida",
    "angel's billabong nusa penida",
    "nusa penida from bali",
    "indonesia travel guide",
  ],
  openGraph: {
    title: "Nusa Penida in 3 Days: Kelingking, Manta Rays & Indonesia's Best Views (2026)",
    description: "Kelingking at 6am, manta rays at dawn, Diamond Beach from above and below — the complete Nusa Penida guide for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kelingking Beach Nusa Penida Bali Indonesia",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nusa Penida in 3 Days (2026)",
    description: "Kelingking, manta rays, Diamond Beach — Indonesia's most dramatic island guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/nusa-penida-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nusa Penida in 3 Days: Kelingking Beach, Manta Rays & Indonesia's Best Views (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
      description:
        "Complete 3-day Nusa Penida itinerary covering Kelingking Beach, Angel's Billabong, Manta Point snorkeling, Diamond Beach, Atuh Beach, and Peguyangan Waterfall.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Nusa Penida 3 Days",
          item: "https://www.incredibleitinerary.com/blog/nusa-penida-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nusa Penida, Indonesia",
      description:
        "An island off the southeastern coast of Bali — home to Indonesia's most photographed beach viewpoint, year-round manta ray encounters, dramatic limestone cliff formations, and some of the most pristine ocean scenery in Southeast Asia.",
      touristType: ["Adventure travellers", "Snorkeling and diving enthusiasts", "Photography travellers", "Wildlife watchers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.7278,
        longitude: 115.5444,
      },
    },
  ],
};

export default function NusaPenidaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NusaPenidaClient />
    </>
  );
}
