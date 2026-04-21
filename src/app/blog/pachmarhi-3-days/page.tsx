import type { Metadata } from "next";
import PachmarhiClient from "./PachmarhiClient";

export const metadata: Metadata = {
  title: "Pachmarhi 3-Day Itinerary (2026): Bee Falls, Dhupgarh Sunrise + Satpura Safari",
  description:
    "3-day Pachmarhi guide — Bee Falls swimming, Pandava Caves, Dhupgarh sunrise (MP's highest point), Satpura tiger safari, MP Tourism bungalows. Budget from ₹1,700/day. MP's only hill station.",
  keywords: [
    "pachmarhi 3 days itinerary",
    "pachmarhi travel guide 2026",
    "bee falls pachmarhi",
    "dhupgarh sunrise pachmarhi",
    "satpura national park safari",
    "pandava caves pachmarhi",
    "pachmarhi hill station madhya pradesh",
    "rajat prapat silver falls",
    "mp tourism pachmarhi bungalow",
    "pachmarhi colonial history",
  ],
  openGraph: {
    title: "Pachmarhi 3-Day Itinerary (2026): Bee Falls, Dhupgarh Sunrise + Satpura Safari",
    description:
      "Bee Falls swimming, Pandava Caves, Dhupgarh sunrise (MP's highest point), Satpura safari, MP Tourism bungalows. Budget from ₹1,700/day.",
    images: [
      {
        url: "/images/blog/pachmarhi-bee-falls.jpg",
        width: 1200,
        height: 630,
        alt: "Bee Falls waterfall Pachmarhi Madhya Pradesh Satpura hills",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Pachmarhi", "Madhya Pradesh", "India", "Hill Station", "Wildlife", "Waterfalls"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pachmarhi 3 Days (2026): Bee Falls + Satpura Safari",
    description: "Bee Falls, Dhupgarh sunrise, Satpura tiger safari. Budget from ₹1,700/day.",
    images: ["/images/blog/pachmarhi-bee-falls.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/pachmarhi-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/pachmarhi-3-days#article",
      "headline": "Pachmarhi 3 Days: Madhya Pradesh's Only Hill Station (Complete Guide)",
      "description": "Complete 3-day Pachmarhi itinerary — Bee Falls, Pandava Caves, Dhupgarh sunrise, Satpura safari, colonial heritage. Budget from ₹1,700/day.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/pachmarhi-bee-falls.jpg",
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
        "@id": "https://www.incredibleitinerary.com/blog/pachmarhi-3-days",
      },
      "keywords": "pachmarhi travel guide, bee falls pachmarhi, satpura national park, dhupgarh highest point mp, pandava caves, pachmarhi colonial history",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5000,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Pachmarhi 3 Days", "item": "https://www.incredibleitinerary.com/blog/pachmarhi-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Pachmarhi, Madhya Pradesh, India",
      "description": "Madhya Pradesh's only hill station at 1,067m in the Satpura Range — colonial British cantonment atmosphere, multiple waterfalls, 5th–9th century Pandava Caves, Satpura Tiger Reserve, and the highest point in MP at Dhupgarh (1,352m).",
      "url": "https://www.incredibleitinerary.com/blog/pachmarhi-3-days",
      "touristType": ["Nature Tourism", "Wildlife Tourism", "Heritage Tourism", "Adventure Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I reach Pachmarhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pachmarhi is 195km from Bhopal — about 4 hours by car or bus. The nearest railway station is Pipariya (47km), which has good connectivity with Bhopal, Mumbai, and Jabalpur. MP Tourism runs regular bus services from Pipariya to Pachmarhi. From Nagpur it is 260km (5 hours).",
      },
    },
    {
      "@type": "Question",
      "name": "Is Satpura better than other tiger reserves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Satpura National Park offers a different experience from Bandhavgarh or Kanha. Tiger density is lower but the park allows walking safaris and boat safaris — unique in Indian tiger reserves. The biodiversity is remarkable: Indian giant squirrel, dhole (wild dog), gaur, sloth bear, leopard, and tigers. It is a quieter, more immersive experience than the famous tiger parks.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Pachmarhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to February is the best time — temperatures are 10–25°C and wildlife is most active. March–April is warmer but manageable. May–June sees temperatures around 35–38°C. June–September is accessible but leeches appear on jungle paths and trails become very wet. The waterfalls are most impressive in monsoon but the jungle is difficult.",
      },
    },
    {
      "@type": "Question",
      "name": "Should I stay in MP Tourism accommodation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — MP Tourism bungalows and resorts in Pachmarhi are well-maintained, reasonably priced (₹600–₹2,500/night), and often better located than private hotels. The Satpura Retreat and Amaltas Resort are their flagship properties. Private hotels in Pachmarhi are overpriced for the quality offered.",
      },
    },
    {
      "@type": "Question",
      "name": "How many days are enough for Pachmarhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 days is the minimum to cover Pachmarhi properly — one day for waterfalls and colonial sites, one for Pandava Caves and Dhupgarh, one for the Satpura jungle safari. Two days forces you to rush. Four days allows you to add Rajat Prapat (Silver Falls, 107m), quieter jungle walks, and the Mahadeo Hill climb.",
      },
    },
  ],
};

export default function PachmarhiBlogPage() {
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
      <PachmarhiClient />
    </>
  );
}
