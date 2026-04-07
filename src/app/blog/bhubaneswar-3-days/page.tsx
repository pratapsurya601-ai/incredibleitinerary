import type { Metadata } from "next";
import BhubaneswarClient from "./BhubaneswarClient";

export const metadata: Metadata = {
  title: "Bhubaneswar 3 Days: Lingaraj Temple, Ashoka's Edicts & Hidden Odisha (2026 Guide)",
  description:
    "Complete 3-day Bhubaneswar itinerary — Lingaraj Temple, Mukteswara Temple, Dhauli Ashoka edicts, Hirapur Yogini temple, Udayagiri Jain caves, Nandankanan Zoo, and Odia food guide. Budget from ₹5,000.",
  keywords: [
    "bhubaneswar 3 days itinerary",
    "lingaraj temple bhubaneswar",
    "mukteswara temple kalinga architecture",
    "dhauli ashoka rock edicts",
    "hirapur yogini temple",
    "udayagiri khandagiri caves",
    "bhubaneswar temple guide",
    "odisha travel guide 2026",
    "bhubaneswar budget trip",
    "odissi dance bhubaneswar",
  ],
  openGraph: {
    title: "Bhubaneswar 3 Days: Lingaraj Temple, Ashoka's Edicts & Hidden Odisha (2026 Guide)",
    description:
      "500+ temples, 2,300-year-old Ashoka inscriptions, 9th-century Yogini shrine, Jain caves. Odisha's underrated capital in 3 days.",
    images: [
      {
        url: "/images/blog/bhubaneswar-lingaraj-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Lingaraj Temple Bhubaneswar Odisha ancient architecture",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Bhubaneswar", "Odisha", "India", "Temples", "Heritage", "Buddhism"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhubaneswar 3 Days: Lingaraj Temple, Ashoka's Edicts & Hidden Odisha",
    description: "500+ temples, Ashoka edicts, hidden Yogini shrine, Jain caves. 3-day Bhubaneswar guide.",
    images: ["/images/blog/bhubaneswar-lingaraj-temple.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bhubaneswar-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/bhubaneswar-3-days#article",
      "headline": "Bhubaneswar 3 Days: Lingaraj Temple, Ashoka's Edicts & Hidden Odisha (2026 Guide)",
      "description": "Complete 3-day Bhubaneswar itinerary covering Lingaraj, Mukteswara, Dhauli, Hirapur Yogini temple, Udayagiri caves, and Nandankanan Zoo.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/bhubaneswar-lingaraj-temple.jpg",
        "width": 1200,
        "height": 630,
      },
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
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/bhubaneswar-3-days",
      },
      "keywords": "bhubaneswar itinerary, lingaraj temple, mukteswara temple, dhauli ashoka, hirapur yogini, udayagiri caves, odisha travel",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5000,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Bhubaneswar 3 Days", "item": "https://www.incredibleitinerary.com/blog/bhubaneswar-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Bhubaneswar, Odisha, India",
      "description": "The Temple City of India — over 500 temples within 5km², spanning 1,400 years of Kalinga architecture. Home to Ashoka's battlefield conversion, one of India's rarest Yogini shrines, and an underrated food culture.",
      "url": "https://www.incredibleitinerary.com/blog/bhubaneswar-3-days",
      "touristType": ["Heritage Tourism", "Religious Tourism", "Archaeological Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can non-Hindus enter Lingaraj Temple in Bhubaneswar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-Hindus cannot enter the inner sanctum of Lingaraj Temple. However, the Archaeological Survey of India has built a viewing platform on the north wall opposite the temple — from here, non-Hindu visitors can see the temple complex, the 55m Rekha Deula tower, and observe the outer rituals. The Mukteswara Temple (10th century, 200m away) is open to all visitors.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the Hirapur Yogini temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Hirapur Chausathi Yogini temple (30km from Bhubaneswar) is a 9th-century circular roofless shrine containing 64 yogini figures — tantric goddess forms carved in black chlorite stone. It is one of only four such circular Yogini temples in India and possibly the most perfectly preserved. Entry is free. The atmosphere of the roofless circular shrine with 64 yoginis facing inward is extraordinary and unlike anything else in India.",
      },
    },
    {
      "@type": "Question",
      "name": "How many days do you need for Bhubaneswar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 days covers the main sites — Lingaraj, Mukteswara, Rajarani temples, Dhauli, Nandankanan Zoo, Hirapur Yogini temple, and Udayagiri/Khandagiri Jain caves. Most visitors spend only 1 day and miss the best sites. 5 days allows you to add Puri (60km) and Konark Sun Temple (65km) — the Odishan Golden Triangle which needs 5 days minimum.",
      },
    },
  ],
};

export default function BhubaneswarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <BhubaneswarClient />
    </>
  );
}
