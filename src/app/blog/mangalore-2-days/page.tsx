import type { Metadata } from "next";
import MangaloreClient from "./MangaloreClient";

export const metadata: Metadata = {
  title: "Mangalore 2 Days: Tulu Cuisine, Beaches & St. Mary's Islands (2026 Guide)",
  description:
    "Complete 2-day Mangalore itinerary — Kadri Temple, Bejai fish market, Sultan Battery, Tannirbhavi Beach, Malpe Beach, St. Mary's Islands basalt columns, and Udupi. Real food guide: Kori Rotti, neer dosa, Kane fry. Budget from ₹3,000.",
  keywords: [
    "mangalore 2 days itinerary",
    "mangalore food guide kori rotti",
    "malpe beach st marys islands",
    "kadri temple mangalore",
    "neer dosa mangalore",
    "udupi krishna temple",
    "mangalore travel guide 2026",
    "mangalorean cuisine guide",
    "bejai fish market mangalore",
    "coastal karnataka travel",
  ],
  openGraph: {
    title: "Mangalore 2 Days: Tulu Cuisine, Beaches & St. Mary's Islands (2026 Guide)",
    description:
      "Kori Rotti, neer dosa, Kane fry, Bejai fish market, St. Mary's basalt columns. Coastal Karnataka's most honest food city in 2 days.",
    images: [
      {
        url: "/images/blog/mangalore-coastal-karnataka.jpg",
        width: 1200,
        height: 630,
        alt: "Mangalore coastal Karnataka India Arabian Sea beach",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Mangalore", "Karnataka", "India", "Coastal", "Food", "Beach"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mangalore 2 Days: Tulu Cuisine, Beaches & St. Mary's Islands (2026 Guide)",
    description: "Kori Rotti, neer dosa, Kane fry, Bejai fish market, St. Mary's basalt columns. 2-day Mangalore guide.",
    images: ["/images/blog/mangalore-coastal-karnataka.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mangalore-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mangalore-2-days#article",
      "headline": "Mangalore 2 Days: Tulu Cuisine, Beaches & St. Mary's Islands (2026 Guide)",
      "description": "Complete 2-day Mangalore itinerary — Kadri Temple, Bejai fish market, Sultan Battery, Malpe Beach, St. Mary's Islands, and Udupi. Full Tulu cuisine guide.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/mangalore-coastal-karnataka.jpg",
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
        "@id": "https://www.incredibleitinerary.com/blog/mangalore-2-days",
      },
      "keywords": "mangalore itinerary, mangalorean food, kori rotti, neer dosa, malpe beach, st marys islands, kadri temple, udupi",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Mangalore 2 Days", "item": "https://www.incredibleitinerary.com/blog/mangalore-2-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Mangalore, Karnataka, India",
      "description": "Coastal Karnataka's port city — home to Tulu-Konkani cuisine, India's best neer dosa and Kori Rotti, Malpe Beach, and the 88-million-year-old basalt columns of St. Mary's Islands where Vasco da Gama first landed.",
      "url": "https://www.incredibleitinerary.com/blog/mangalore-2-days",
      "touristType": ["Food Tourism", "Beach Tourism", "Heritage Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Kori Rotti and where to eat it in Mangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kori Rotti is Tulu Nadu's most iconic dish — a dry chicken curry (Kori Gassi, coconut-based) served with Rotti, which are crispy dried rice wafers. The combination of the rich, spiced curry soaking into the crunchy wafers is extraordinary. Best eaten at Shri Krishna Boarding near the bus stand or any local Tulu restaurant. Cost ₹150–200 per plate.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get to St. Mary's Islands from Mangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "St. Mary's Islands are reached by ferry from Malpe Beach harbour (65km north of Mangalore, near Udupi). Ferry tickets cost ₹200 return per person. Ferries run approximately every 30–45 minutes when operational (timing depends on sea conditions — check at Malpe harbour). The journey takes 15–20 minutes. The islands are famous for their hexagonal basalt rock columns, 88 million years old, formed during the Deccan Traps volcanic period.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Mangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "November to February is the best time — sea conditions are calm, beaches are safe, and temperatures are comfortable (22–32°C). March–May is hotter but still manageable. Avoid June–September completely — the southwest monsoon hits the Karnataka coast with enormous force, seas are closed to swimmers, and beaches are unsafe.",
      },
    },
  ],
};

export default function MangalorePage() {
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
      <MangaloreClient />
    </>
  );
}
