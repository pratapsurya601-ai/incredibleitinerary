import type { Metadata } from "next";
import AssamTeaClient from "./AssamTeaClient";

export const metadata: Metadata = {
  title: "Assam Tea Garden Circuit in 3 Days: Colonial Bungalows & World's Strongest Brew (2026)",
  description:
    "3-day Assam tea garden tour — colonial tea bungalow stay, GFOP tea factory visit, Brahmaputra sunset, Kaziranga nearby, how to reach Dibrugarh for 2026 tea garden circuit.",
  keywords: [
    "assam tea garden tour",
    "assam tea estate visit",
    "dibrugarh tea bungalow stay",
    "assam tea garden circuit",
    "northeast india tea tour 2026",
  ],
  openGraph: {
    title: "Assam Tea Garden Circuit in 3 Days: Colonial Bungalows & World's Strongest Brew (2026)",
    description:
      "Colonial tea bungalow stay, GFOP factory tour, Brahmaputra fishing, Kaziranga rhino safari. 2 complete plans for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Assam tea garden estate green rows Brahmaputra valley",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Assam", "India", "Travel", "Tea Gardens", "Northeast India", "Dibrugarh"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assam Tea Garden Circuit in 3 Days: Colonial Bungalows & World's Strongest Brew (2026)",
    description: "Colonial bungalow stays, tea factory tours, Brahmaputra, Kaziranga. 2 plans.",
    images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/assam-tea-garden-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/assam-tea-garden-3-days#article",
      "headline": "Assam Tea Garden Circuit in 3 Days: Colonial Bungalows & World's Strongest Brew (2026)",
      "description":
        "3-day Assam tea garden tour — colonial tea bungalow stay, GFOP tea factory visit, Brahmaputra sunset, Kaziranga nearby, how to reach Dibrugarh for 2026 tea garden circuit.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
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
        "@id": "https://www.incredibleitinerary.com/blog/assam-tea-garden-3-days",
      },
      "keywords":
        "assam tea garden tour, assam tea estate visit, dibrugarh tea bungalow stay, assam tea garden circuit, northeast india tea tour 2026",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4100,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Assam Tea Garden Circuit in 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/assam-tea-garden-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Assam Tea Circuit, Dibrugarh & Jorhat, India",
      "description":
        "The world's largest tea-growing region — 800+ estates in the Brahmaputra Valley, with colonial bungalow stays, factory tours, and proximity to Kaziranga National Park.",
      "url": "https://www.incredibleitinerary.com/blog/assam-tea-garden-3-days",
      "touristType": ["Cultural Tourism", "Agri Tourism", "Wildlife Tourism", "Heritage Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I visit Assam tea estates without a formal tour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most large estates welcome independent visitors during working hours (6 AM–5 PM). Call ahead or ask your Dibrugarh hotel to arrange it. The Tocklai Tea Research Institute in Jorhat is open to the public and has excellent exhibits on tea history, cultivation, and processing.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the difference between Assam tea and Darjeeling tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Assam tea (CTC or Orthodox, lowland, bold/malty/strong) is the base of most Indian chai and English breakfast blends. Darjeeling tea (high-altitude, delicate, muscatel flavor) is milder and usually drunk without milk. Assam tea has higher caffeine and theaflavin; Darjeeling has more nuanced terroir.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Majuli Island and how do I reach it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Majuli (near Jorhat) is the world's largest river island, in the Brahmaputra River. It's home to 22 Vaishnavite Satras (monastery-villages). Ferry from Nimati Ghat (Jorhat) to Majuli: 1–2 hours depending on water level. Best visited October–March.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Assam tea available to buy at the estates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — virtually all estates sell directly at much lower prices than retail. Expect to pay ₹200–600 for 250g of premium first or second flush Orthodox tea (vs ₹800–1500+ in specialty stores). Whole-leaf GFOP or TGFOP grades are the best to ask for.",
      },
    },
    {
      "@type": "Question",
      "name": "What is Kaziranga like to combine with a tea garden trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kaziranga (2.5 hrs from Jorhat) has the world's largest one-horned rhino concentration (2,600+), plus tigers, elephants, wild buffalo, and excellent birdwatching. Jeep safari (₹2000–3000 per jeep) covers multiple zones. Best time: October–April. Closed July–October.",
      },
    },
  ],
};

export default function AssamTeaBlogPage() {
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
      <AssamTeaClient />
    </>
  );
}
