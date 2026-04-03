import type { Metadata } from "next";
import ShopClient from "./ShopClient";
import { SHOP_PRODUCTS } from "@/lib/config";

export const metadata: Metadata = {
  title: "India Travel Itinerary PDFs — Shop | IncredibleItinerary",
  description:
    "Download ready-made India travel itinerary PDFs. Goa 3-day guide, Rajasthan 7-day royal circuit, India budget guide — instant download after payment.",
  alternates: { canonical: "https://incredibleitinerary.com/shop" },
  openGraph: {
    title: "India Travel PDFs — Instant Download | IncredibleItinerary",
    description: "Ready-made itinerary PDFs for Goa, Rajasthan and India travel. Instant download.",
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "IncredibleItinerary Shop",
    description: "Digital travel itinerary PDFs for India",
    url: "https://incredibleitinerary.com/shop",
    currenciesAccepted: "INR",
    paymentAccepted: "Credit Card, UPI, Net Banking",
    priceRange: "₹149 - ₹299",
  },
  ...SHOP_PRODUCTS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    description: p.subtitle,
    url: `https://incredibleitinerary.com/shop#${p.id}`,
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  })),
];

export default function ShopPage() {
  return (
    <>
      {jsonLd.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <ShopClient />
    </>
  );
}
