import type { Metadata } from "next";
import TripCalculatorClient from "./TripCalculatorClient";

export const metadata: Metadata = {
  title:
    "Trip Cost Calculator — Estimate Your Travel Budget",
  description:
    "Free trip cost calculator for India, Thailand, Japan & Italy. Instantly estimate accommodation, food, transport & activity costs across Budget, Mid-Range and Luxury tiers.",
  keywords: [
    "trip cost calculator",
    "travel budget estimator",
    "trip budget planner",
    "travel cost calculator India",
    "Thailand travel budget",
    "Japan trip cost",
    "Italy travel budget",
    "holiday cost estimator",
    "vacation budget calculator",
    "travel expense calculator",
  ],
  openGraph: {
    title: "Trip Cost Calculator — Estimate Your Travel Budget",
    description:
      "Estimate your travel budget for 68+ destinations across India, Thailand, Japan & Italy. Budget, Mid-Range and Luxury breakdowns with daily cost data.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/tools/trip-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Trip Cost Calculator",
  url: "https://www.incredibleitinerary.com/tools/trip-calculator",
  description:
    "Free trip cost calculator for India, Thailand, Japan & Italy. Estimate accommodation, food, transport & activity costs across Budget, Mid-Range and Luxury tiers.",
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

export default function TripCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TripCalculatorClient />
    </>
  );
}
