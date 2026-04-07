import type { Metadata } from "next";
import KutchClient from "./KutchClient";

export const metadata: Metadata = {
  title: "Kutch 3 Days: White Rann, Bhuj Palaces & Craft Villages (Complete Guide)",
  description:
    "Complete 3-day Kutch itinerary — Great Rann of Kutch white salt desert, Prag Mahal, Aina Mahal, Nirona craft village, Kalo Dungar. Rann Utsav guide. Budget from ₹6,000 for 3 days.",
  keywords: [
    "kutch 3 days itinerary",
    "rann of kutch travel guide 2026",
    "great rann of kutch white desert",
    "bhuj palaces prag mahal",
    "rann utsav tent city",
    "nirona village rogan art",
    "kalo dungar kutch",
    "kutch craft villages",
    "bhuj travel guide",
    "kutch budget travel",
  ],
  openGraph: {
    title: "Kutch 3 Days: White Rann, Bhuj Palaces & Craft Villages (Complete Guide)",
    description:
      "3-day Kutch guide — 7,500km² salt flat, Prag Mahal Gothic architecture, Nirona rogan art, Kalo Dungar sunset. Real costs from ₹6,000.",
    images: [
      {
        url: "/images/blog/kutch-rann.jpg",
        width: 1200,
        height: 630,
        alt: "Great Rann of Kutch white salt desert Gujarat",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Kutch", "Gujarat", "India", "Salt Desert", "Crafts", "Heritage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kutch 3 Days: White Rann, Bhuj Palaces & Craft Villages",
    description: "White salt desert, Gothic palace in the desert, the last rogan art family, Kalo Dungar. 3-day Kutch guide.",
    images: ["/images/blog/kutch-rann.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kutch-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kutch-3-days#article",
      "headline": "Kutch 3 Days: White Rann, Bhuj Palaces & Craft Villages (Complete Guide)",
      "description": "Complete 3-day Kutch itinerary covering the Great Rann white salt desert, Bhuj's Prag Mahal and Aina Mahal, Nirona and Hodka craft villages, Kalo Dungar, and Rann Utsav.",
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
        "@id": "https://www.incredibleitinerary.com/blog/kutch-3-days",
      },
      "keywords": "kutch itinerary, rann of kutch, bhuj travel, prag mahal, rann utsav, nirona craft village, kalo dungar",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5100,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Kutch 3 Days", "item": "https://www.incredibleitinerary.com/blog/kutch-3-days" },
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
      "name": "When is Rann Utsav and how do I book the tent city?",
      "acceptedAnswer": { "@type": "Answer", "text": "Rann Utsav runs November to February, organized by Gujarat Tourism. The tent city near Dhordo village is the official accommodation — tents range from ₹8,000 to ₹15,000 per night including meals and cultural programs. Book through Gujarat Tourism's official website as early as October for the November–December period. It sells out months in advance." },
    },
    {
      "@type": "Question",
      "name": "Can I visit the Rann of Kutch outside the Utsav season?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, the Rann is accessible year-round except that the official tent city is only set up November–February. During March–June, you can still drive to the salt flat from Bhuj (80km) but accommodation near the Rann is limited. Avoid April–June when temperatures hit 45–48°C and the salt flat becomes inhospitable." },
    },
    {
      "@type": "Question",
      "name": "What is rogan art and where can I see it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Rogan art is a 300-year-old craft of painting on fabric using castor oil-based paint. Abdul Gafur Khatri in Nirona village (40km from Bhuj) is one of the last practitioners — his family is widely considered the only one still making authentic rogan art. Visit Nirona village and watch the process in person. Pieces start from ₹500 for small works." },
    },
  ],
};

export default function KutchBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <KutchClient />
    </>
  );
}
