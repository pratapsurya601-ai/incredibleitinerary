import type { Metadata } from "next";
import PackingListClient from "./PackingListClient";

export const metadata: Metadata = {
  title: "Free Packing List Generator 2026 — Customize for Any Trip | IncredibleItinerary",
  description:
    "Generate a customized travel packing list for any destination, duration, and travel style. Printable, checkable, and completely free.",
  keywords: [
    "packing list generator",
    "travel packing list",
    "what to pack for travel",
    "packing list beach",
    "packing list mountains",
    "packing list winter",
    "travel checklist",
    "printable packing list",
    "packing list safari",
    "backpacking packing list",
    "luxury travel packing",
    "packing list 2026",
  ],
  openGraph: {
    title: "Free Packing List Generator 2026 — Customize for Any Trip",
    description:
      "Generate a customized travel packing list for any destination, duration, and travel style. Printable, checkable, and completely free.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553531087-b25b47b52f9a?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/tools/packing-list",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Packing List Generator",
  url: "https://www.incredibleitinerary.com/tools/packing-list",
  description:
    "Generate a customized travel packing list for any destination, duration, and travel style. Printable, checkable, and completely free.",
  applicationCategory: "TravelApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Organization",
    name: "IncredibleItinerary",
    url: "https://www.incredibleitinerary.com",
  },
};

export default function PackingListPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PackingListClient />
    </>
  );
}
