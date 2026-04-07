import type { Metadata } from "next";
import CurrencyConverterClient from "./CurrencyConverterClient";

export const metadata: Metadata = {
  title: "Currency Converter for Travelers 2026 — IncredibleItinerary",
  description:
    "Free travel currency converter for INR, USD, EUR, GBP, JPY, THB, AED, SGD and more. Instantly convert between 17 major travel currencies with approximate exchange rates.",
  robots: {
    index: false,
    follow: true,
  },
  keywords: [
    "currency converter",
    "travel currency converter",
    "INR to USD",
    "rupee to dollar",
    "travel money converter",
    "foreign exchange calculator",
    "currency exchange rates",
    "travel currency calculator",
    "INR to EUR",
    "INR to THB",
    "currency converter for travelers",
    "travel exchange rate",
  ],
  openGraph: {
    title: "Currency Converter for Travelers 2026 — IncredibleItinerary",
    description:
      "Convert between 17 major travel currencies instantly. INR, USD, EUR, GBP, JPY, THB, AED, SGD and more. Built for travelers.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1200&q=80",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/tools/currency-converter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Currency Converter for Travelers",
  url: "https://www.incredibleitinerary.com/tools/currency-converter",
  description:
    "Free travel currency converter supporting 17 major currencies including INR, USD, EUR, GBP, JPY, THB, AED and SGD.",
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

export default function CurrencyConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CurrencyConverterClient />
    </>
  );
}
