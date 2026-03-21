import type { Metadata } from "next";
import ShopClient from "./ShopClient";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "IncredibleItinerary Shop",
  "description": "Digital travel itinerary PDFs for India",
  "url": "https://incredibleitinerary.com/shop",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Credit Card, UPI, Net Banking",
  "priceRange": "₹149 - ₹299",
};

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShopClient />
    </>
  );
}
