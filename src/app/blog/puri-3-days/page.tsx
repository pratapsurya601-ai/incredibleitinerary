import type { Metadata } from "next";
import PuriClient from "./PuriClient";

export const metadata: Metadata = {
  title: "Puri 3 Days: Jagannath Temple, Konark Sun Temple & Odisha Coast (Complete Guide)",
  description:
    "Complete 3-day Puri itinerary — Jagannath Temple, Konark Sun Temple UNESCO site, Puri Beach sunrise, Chilika Lake dolphins, Odisha cuisine guide. Budget from ₹5,000 for 3 days.",
  keywords: [
    "puri 3 days itinerary",
    "puri odisha travel guide 2026",
    "jagannath temple puri non hindu",
    "konark sun temple unesco",
    "puri beach odisha",
    "chilika lake dolphins",
    "puri rath yatra",
    "odisha food guide dalma",
    "puri budget travel",
    "bhubaneswar puri temple circuit",
  ],
  openGraph: {
    title: "Puri 3 Days: Jagannath Temple, Konark Sun Temple & Odisha Coast (Complete Guide)",
    description:
      "3-day Puri guide — Jagannath Temple darshan, Konark's chariot temple, Puri Beach sunrise, Chilika Lake. Practical guide including entry rules for non-Hindus.",
    images: [
      {
        url: "/images/blog/puri-beach-odisha.jpg",
        width: 1200,
        height: 630,
        alt: "Puri beach sunrise Bay of Bengal Odisha",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Puri", "Odisha", "India", "Temple", "Beach", "UNESCO"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puri 3 Days: Jagannath Temple, Konark Sun Temple & Odisha Coast",
    description: "Konark chariot temple, Puri beach sunrise, Jagannath darshan, Chilika dolphins. 3-day Puri guide.",
    images: ["/images/blog/puri-beach-odisha.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/puri-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/puri-3-days#article",
      "headline": "Puri 3 Days: Jagannath Temple, Konark Sun Temple & Odisha Coast (Complete Guide)",
      "description": "Complete 3-day Puri itinerary — Jagannath Temple, UNESCO Konark Sun Temple, Puri Beach, Chilika Lake, Odisha food guide.",
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
        "url": "https://www.incredibleitinerary.com/about",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/puri-3-days",
      },
      "keywords": "puri itinerary, jagannath temple, konark sun temple, puri beach, chilika lake, puri travel guide",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5000,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Puri 3 Days", "item": "https://www.incredibleitinerary.com/blog/puri-3-days" },
      ],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can non-Hindus enter Jagannath Temple in Puri?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. The Jagannath Temple in Puri strictly prohibits entry to non-Hindus — this is enforced by guards at all four gates. Non-Hindu visitors can view the 65-metre shikhara (tower) from the rooftop of the Raghunandan Library opposite the main gate, which offers a clear view. The Srimandir Parikrama (circumambulation path) around the outer wall is accessible to all." },
    },
    {
      "@type": "Question",
      "name": "Is it safe to swim at Puri Beach?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puri Beach has dangerous undercurrents that cause deaths every year. Only swim in designated areas where lifeguards (in yellow uniforms) are present — these are near the Golden Beach area. Never swim alone, never venture beyond chest depth, and obey lifeguard instructions. The northern end (Swargadwar) has the strongest currents and is not safe for swimming." },
    },
    {
      "@type": "Question",
      "name": "How do I get from Puri to Konark Sun Temple?",
      "acceptedAnswer": { "@type": "Answer", "text": "Konark is 35km from Puri. OSRTC buses depart from the Puri bus stand every 30 minutes from 6am (₹25, 1 hour). Auto-rickshaws charge ₹350–₹500 for a return trip with waiting time. The Konark Sun Temple is open from 6am–8pm. Entry is ₹40 for Indians, ₹600 for foreign nationals." },
    },
    {
      "@type": "Question",
      "name": "When is Rath Yatra in Puri and should I plan around it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Rath Yatra falls in June or July (date varies by Hindu calendar). During this period, 1 million+ pilgrims descend on Puri — witnessing it is extraordinary but accommodation must be booked months in advance. Outside of Rath Yatra, Puri is manageable year-round with October–February being most comfortable temperature-wise." },
    },
  ],
};

export default function PuriBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PuriClient />
    </>
  );
}
