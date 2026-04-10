import type { Metadata } from "next";
import CotswoldsClient from "./CotswoldsClient";

export const metadata: Metadata = {
  title: "Cotswolds in 3 Days: The Best Villages, Drives & Walks (2026)",
  description: "The complete 3-day Cotswolds guide: best villages to visit, essential driving routes, Bibury at dawn, Snowshill lavender, Cotswold Way walks, and where to stay — budget to luxury.",
  keywords: ["cotswolds itinerary 3 days", "cotswolds travel guide 2026", "best cotswolds villages", "bibury arlington row", "cotswold way walk", "chipping campden broadway", "cotswolds without car", "uk countryside travel"],
  openGraph: {
    title: "Cotswolds in 3 Days: Best Villages, Drives & Walks (2026)",
    description: "Bibury at dawn, Chipping Campden's perfect High Street, Snowshill lavender, Cotswold Way walks — the complete 3-day guide to England's most beautiful countryside.",
    images: [{ url: "https://images.unsplash.com/photo-1509822929464-92b27e59a4e7?w=1200&q=80", width: 1200, height: 630, alt: "Cotswolds Village Honey Stone Cottages England UK" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Cotswolds in 3 Days (2026)", description: "Best villages, Bibury at dawn, Snowshill lavender — complete 3-day Cotswolds guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/cotswolds-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cotswolds in 3 Days: The Best Villages, Drives & Walks (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1509822929464-92b27e59a4e7?w=1200&q=80",
      description: "The complete 3-day guide to the Cotswolds covering the best villages, essential driving routes, Bibury early morning tips, Snowshill lavender, and Cotswold Way walks.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Cotswolds 3 Days", item: "https://www.incredibleitinerary.com/blog/cotswolds-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cotswolds, England, UK",
      description: "An Area of Outstanding Natural Beauty in the English Midlands, famous for its honey-coloured limestone villages, rolling hills, country house hotels, antiques trade, and the Cotswold Way walking trail.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.8330,
        longitude: -1.8433,
      },
      touristType: ["Nature lovers", "Architecture enthusiasts", "Walkers and hikers", "Antiques collectors", "Food and countryside tourists"],
    },
  ],
};

export default function CotswoldsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CotswoldsClient />
    </>
  );
}
