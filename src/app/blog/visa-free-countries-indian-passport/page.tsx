import type { Metadata } from "next";
import VisaFreeClient from "./VisaFreeClient";

export const metadata: Metadata = {
  title: "Visa-Free Countries for Indian Passport 2026: 60+ Destinations",
  description:
    "Complete 2026 list of countries Indians can visit without a visa or with visa on arrival — Southeast Asia, Maldives, UAE, Malaysia, Thailand, Mauritius, Seychelles & more. Real entry rules, stay limits, what to carry.",
  keywords: [
    "visa free countries for indian passport",
    "visa on arrival for indian passport 2026",
    "countries indian passport can visit without visa",
    "indian passport visa free countries list",
    "where can indians travel without visa",
    "visa free travel for indians",
    "indian passport power 2026",
    "countries with free visa for india",
  ],
  openGraph: {
    title: "Visa-Free Countries for Indian Passport 2026: 60+ Destinations Without Pre-Approval",
    description:
      "Every country Indians can enter without a visa or with visa on arrival in 2026 — grouped by region with stay limits, entry rules, and tips.",
    images: [{ url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80", width: 1200, height: 630, alt: "Indian passport travel visa free destinations 2026" }],
    type: "article", publishedTime: "2026-04-07T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa-Free Countries for Indian Passport 2026",
    description: "60+ countries Indians can visit without pre-approval — full list with stay limits and entry rules.",
    images: ["https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/visa-free-countries-indian-passport" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Visa-Free Countries for Indian Passport 2026: Complete List",
      "description": "Complete list of 60+ countries Indians can visit without a visa or with visa on arrival in 2026.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80" },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "indian passport visa free, visa on arrival india, where can indians travel 2026",
      "wordCount": 3200,
      "articleSection": "Travel Tips",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Visa-Free Countries for Indian Passport", "item": "https://www.incredibleitinerary.com/blog/visa-free-countries-indian-passport" },
      ],
    },
  ],
};

// FAQPage schema — standalone, must NOT be inside @graph with Article
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many countries can Indian passport holders visit visa-free in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "Indian passport holders can visit approximately 57–62 countries without obtaining a visa in advance as of 2026. This includes countries with true visa-free entry (like Nepal, Maldives, Mauritius, Seychelles, Fiji) and countries with visa on arrival or e-visa on arrival (like Thailand, Indonesia, Sri Lanka, UAE, Kenya, Malaysia). The exact count varies based on how you classify e-visa vs visa on arrival." },
    },
    {
      "@type": "Question",
      "name": "Which Southeast Asian countries are visa-free for Indians in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "In Southeast Asia, Indians can get visa on arrival in Thailand (30 days, free since Nov 2023 policy), Indonesia (30 days, USD 35 at airport), Cambodia (e-visa USD 30), Laos (VOA USD 35), Myanmar (varies), and Vietnam (45-day e-visa). Malaysia is visa-free for Indians for up to 30 days since December 2023. Singapore requires a visa but approval rates are very high." },
    },
    {
      "@type": "Question",
      "name": "Can Indians travel to UAE without a visa?",
      "acceptedAnswer": { "@type": "Answer", "text": "No — Indians require a UAE visa in advance. However, the process is easy and fast: you can apply online through icp.gov.ae, directly with Emirates/IndiGo/Air India (they offer visa on booking), or via travel agents. The UAE tourist visa costs ₹3,000–₹5,000 and takes 3–5 business days. UAE also offers visa on arrival for certain categories (holders of US/UK/EU Schengen visas)." },
    },
    {
      "@type": "Question",
      "name": "What documents do I need for visa-free or visa on arrival travel with an Indian passport?",
      "acceptedAnswer": { "@type": "Answer", "text": "Standard documents for visa on arrival travel: (1) Indian passport valid for at least 6 months beyond your travel dates, (2) return/onward flight ticket, (3) proof of accommodation (hotel booking), (4) sufficient funds (usually USD 50–100/day, shown via bank statement or cash), (5) VOA fee in USD cash where applicable. Some countries (like Bhutan) require additional permits. Always check the specific country's requirements before travel." },
    },
    {
      "@type": "Question",
      "name": "Which African countries are visa-free for Indians?",
      "acceptedAnswer": { "@type": "Answer", "text": "Several African countries offer visa-free or easy e-visa access for Indians: Mauritius (90 days visa-free), Seychelles (visa on arrival, free), Kenya (e-visa online, USD 51), Tanzania (e-visa, USD 50), Rwanda (visa on arrival, free for 30 days), Ethiopia (VOA at Addis airport), Zimbabwe (VOA USD 30), Mozambique (VOA), Zambia (e-visa or VOA). South Africa requires a visa in advance — apply at VFS Global." },
    },
  ],
};

export default function VisaFreePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <VisaFreeClient />
    </>
  );
}
