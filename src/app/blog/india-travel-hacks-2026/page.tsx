import type { Metadata } from "next";
import IndiaTravelHacks2026Client from "./IndiaTravelHacks2026Client";

export const metadata: Metadata = {
  title: "47 India Travel Hacks Most Tourists Learn Too Late (2026)",
  description:
    "IRCTC booking tricks, Rail Neer water overcharging warning, UPI for foreigners, Tatkal tips, scam avoidance, SIM cards and more — the India travel hacks most tourists learn after getting burned.",
  keywords: [
    "india travel hacks",
    "india travel tips",
    "irctc tips",
    "train travel india",
    "india scams",
    "rail neer overcharging",
    "tatkal booking tips",
    "upi for foreigners",
    "first time india tips",
  ],
  openGraph: {
    title: "47 India Travel Hacks Most Tourists Learn Too Late (2026)",
    description:
      "IRCTC tricks, Rail Neer pricing, UPI for foreigners, Tatkal tips, scam avoidance, SIM cards & more.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "India travel scene with train and colorful streets",
      },
    ],
    type: "article",
    publishedTime: "2026-04-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "47 India Travel Hacks Most Tourists Learn Too Late (2026)",
    description:
      "IRCTC, Rail Neer, UPI, Tatkal, scams, SIMs — the stuff India travelers wish they knew sooner.",
    images: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
    ],
  },
  alternates: {
    canonical:
      "https://www.incredibleitinerary.com/blog/india-travel-hacks-2026",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id":
        "https://www.incredibleitinerary.com/blog/india-travel-hacks-2026#article",
      headline: "47 India Travel Hacks Most Tourists Learn Too Late (2026)",
      description:
        "47 practical travel hacks for India covering IRCTC booking, Rail Neer water overcharging, UPI for foreigners, Tatkal, scam avoidance, and more.",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
      datePublished: "2026-04-21T00:00:00Z",
      dateModified: "2026-04-21T00:00:00Z",
      author: {
        "@type": "Person",
        name: "Surya Pratap",
        url: "https://www.incredibleitinerary.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      mainEntityOfPage:
        "https://www.incredibleitinerary.com/blog/india-travel-hacks-2026",
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "India Travel Hacks 2026",
          item: "https://www.incredibleitinerary.com/blog/india-travel-hacks-2026",
        },
      ],
    },
  ],
};

export default function IndiaTravelHacks2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndiaTravelHacks2026Client />
    </>
  );
}
