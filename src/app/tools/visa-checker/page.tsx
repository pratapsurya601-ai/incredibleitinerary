import type { Metadata } from "next";
import VisaCheckerClient from "./VisaCheckerClient";

export const metadata: Metadata = {
  title:
    "Visa Checker — Check Visa Requirements for Any Country | IncredibleItinerary",
  description:
    "Instantly check visa requirements for any destination. Find out if you need a visa, eVisa, or can travel visa-free — with cost estimates, processing times and key requirements.",
  keywords: [
    "visa checker",
    "visa requirements",
    "do I need a visa",
    "eVisa",
    "visa free countries",
    "travel visa check",
    "india visa",
    "thailand visa",
    "japan visa",
    "italy visa",
    "schengen visa",
    "visa on arrival",
  ],
  openGraph: {
    title: "Visa Checker — Check Visa Requirements for Any Country",
    description:
      "Select your passport and destination to instantly see visa requirements, costs, processing times and what you need to apply.",
    type: "website",
    url: "https://www.incredibleitinerary.com/tools/visa-checker",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/tools/visa-checker" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Visa Checker",
  url: "https://www.incredibleitinerary.com/tools/visa-checker",
  description:
    "Check visa requirements for any destination based on your passport country. Covers visa-free travel, eVisa, visa on arrival and embassy visa information.",
  applicationCategory: "TravelApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "IncredibleItinerary",
    url: "https://www.incredibleitinerary.com",
  },
};

export default function VisaCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VisaCheckerClient />
    </>
  );
}
