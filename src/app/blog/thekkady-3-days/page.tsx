import type { Metadata } from "next";
import ThekkadyClient from "./ThekkadyClient";

export const metadata: Metadata = {
  title: "Thekkady 3 Days: Periyar Boat Safari, Bamboo Rafting & Spice Plantations (Complete Guide)",
  description:
    "Complete 3-day Thekkady itinerary — Periyar Tiger Reserve boat safari, bamboo rafting, spice plantation walk, Kalaripayattu show, tribal walks. Budget from ₹6,000 for 3 days.",
  keywords: [
    "thekkady 3 days itinerary",
    "thekkady periyar travel guide 2026",
    "periyar tiger reserve boat safari",
    "bamboo rafting thekkady booking",
    "spice plantation thekkady",
    "kalaripayattu thekkady show",
    "ktdc lake palace thekkady",
    "thekkady budget travel",
    "periyar wildlife sanctuary elephants",
    "kumily bazaar spices",
  ],
  openGraph: {
    title: "Thekkady 3 Days: Periyar Boat Safari, Bamboo Rafting & Spice Plantations (Complete Guide)",
    description:
      "3-day Thekkady guide — Periyar Lake boat safari for elephants, bamboo rafting through mist, cardamom hills spice walk, Kalaripayattu. Real costs and booking tips.",
    images: [
      {
        url: "/images/blog/thekkady-periyar.jpg",
        width: 1200,
        height: 630,
        alt: "Periyar wildlife sanctuary boat safari elephants Kerala",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Thekkady", "Kerala", "India", "Wildlife", "Spices", "Jungle"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thekkady 3 Days: Periyar Boat Safari, Bamboo Rafting & Spice Plantations",
    description: "Periyar Lake elephants, bamboo rafting at dawn, cardamom hills, Kalaripayattu. 3-day Thekkady guide.",
    images: ["/images/blog/thekkady-periyar.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/thekkady-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/thekkady-3-days#article",
      "headline": "Thekkady 3 Days: Periyar Boat Safari, Bamboo Rafting & Spice Plantations (Complete Guide)",
      "description": "Complete 3-day Thekkady itinerary covering Periyar Tiger Reserve boat safari, bamboo rafting, spice plantation walk, Kalaripayattu show, and tribal nature walks.",
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
        "@id": "https://www.incredibleitinerary.com/blog/thekkady-3-days",
      },
      "keywords": "thekkady itinerary, periyar boat safari, bamboo rafting thekkady, spice plantation kerala, thekkady wildlife",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5000,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Thekkady 3 Days", "item": "https://www.incredibleitinerary.com/blog/thekkady-3-days" },
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
      "name": "How do I book bamboo rafting in Thekkady?",
      "acceptedAnswer": { "@type": "Answer", "text": "Bamboo rafting in Thekkady is run by the Kerala Forest Department and must be booked in advance — ideally 2–4 weeks ahead during October–March season. It costs ₹1,150 per person and includes a forest officer escort. The 4-hour experience starts at 8am. Book through the KTDC or Kerala Forest Department Thekkady office. Walk-in spots occasionally open up but it's not worth gambling on." },
    },
    {
      "@type": "Question",
      "name": "Will I see tigers on the Periyar Lake boat safari?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tiger sightings on the Periyar Lake boat safari are genuinely rare. The reserve has approximately 35 tigers across 925km² — the odds on any given boat trip are low. What you will reliably see: elephants at the lake edge (especially the 7am departure), Indian bison (gaur), wild boar, various waterbirds, and otters. The elephant sightings alone make the safari worthwhile." },
    },
    {
      "@type": "Question",
      "name": "What spices should I buy in Thekkady and where?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Cardamom Hills produce some of India's finest cardamom, black pepper, vanilla, coffee, and cinnamon. Buy from Kumily bazaar (the town near Thekkady) — prices are roughly 3x cheaper than the tourist shops near the hotel zone. Buy cardamom pods (not powder), whole black peppercorns, and vanilla beans if available. A 100g bag of quality cardamom costs around ₹120–₹180 in the bazaar." },
    },
    {
      "@type": "Question",
      "name": "How far is Thekkady from Kochi and Munnar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Thekkady (Kumily) is 190km from Kochi airport — approximately 4.5 hours by road via Kothamangalam. From Munnar, it is 115km — roughly 3 hours. The Munnar–Thekkady drive through the Cardamom Hills is one of the most scenic in Kerala and makes an excellent two-destination circuit." },
    },
  ],
};

export default function ThekkadyBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ThekkadyClient />
    </>
  );
}
