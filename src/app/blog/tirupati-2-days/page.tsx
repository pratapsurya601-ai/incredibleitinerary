import type { Metadata } from "next";
import TirupatiClient from "./TirupatiClient";

export const metadata: Metadata = {
  title: "Tirupati 2 Days: Complete Darshan Guide, Timings & Budget (2026)",
  description:
    "Complete 2-day Tirupati itinerary — Sudarshan Darshan booking, Special Entry darshan, Tirumala laddoo prasadam, dress code, TTD accommodation, and base town temples. Real costs from ₹2,000 total.",
  keywords: [
    "tirupati darshan guide 2026",
    "tirumala venkateswara temple",
    "sudarshan darshan booking",
    "tirupati 2 days itinerary",
    "tirumala dress code",
    "tirupati laddoo prasadam",
    "TTD accommodation booking",
    "tirupati budget travel",
    "how to visit tirupati temple",
    "tirupati special entry darshan",
  ],
  openGraph: {
    title: "Tirupati 2 Days: Complete Darshan Guide, Timings & Budget (2026)",
    description:
      "Sudarshan darshan booking, dress code, laddoo prasadam, TTD free accommodation, Sarva Darshan vs Special Entry. Real costs from ₹2,000.",
    images: [
      {
        url: "/images/blog/tirupati-tirumala-temple.jpg",
        width: 1200,
        height: 630,
        alt: "Tirumala Venkateswara Temple Tirupati Andhra Pradesh",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Tirupati", "Andhra Pradesh", "India", "Pilgrimage", "Temple", "Darshan"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirupati 2 Days: Complete Darshan Guide, Timings & Budget (2026)",
    description: "Sudarshan darshan booking, dress code, laddoo prasadam, TTD accommodation. Complete guide.",
    images: ["/images/blog/tirupati-tirumala-temple.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/tirupati-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/tirupati-2-days#article",
      "headline": "Tirupati 2 Days: Complete Darshan Guide, Timings & Budget (2026)",
      "description": "Complete 2-day Tirupati itinerary — Sudarshan Darshan booking, Special Entry darshan, Tirumala laddoo prasadam, dress code, TTD accommodation, and base town temples.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/tirupati-tirumala-temple.jpg",
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
        "@id": "https://www.incredibleitinerary.com/blog/tirupati-2-days",
      },
      "keywords": "tirupati darshan, tirumala temple, sudarshan darshan booking, tirupati itinerary, TTD accommodation, tirupati laddoo",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4500,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Tirupati 2 Days", "item": "https://www.incredibleitinerary.com/blog/tirupati-2-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Tirupati, Andhra Pradesh, India",
      "description": "Home to the Tirumala Venkateswara Temple — the most visited pilgrimage site on earth, receiving 80,000+ devotees daily. Located at 852m on the Tirumala Hills, 140km from Chennai.",
      "url": "https://www.incredibleitinerary.com/blog/tirupati-2-days",
      "touristType": ["Religious Tourism", "Pilgrimage"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I book Sudarshan Darshan at Tirupati?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sudarshan Darshan (₹300 per person) is booked online at tirupatibalaji.ap.gov.in. Slots open 3 months in advance and are released at specific times — they sell out within minutes. Book as early as possible. You can book for yourself and up to 6 family members at once.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the dress code for Tirumala temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Men must wear dhoti (veshti) or shirt with lungi. Women must wear saree, salwar kameez, or churidar. Jeans, shorts, sleeveless tops, and short skirts are strictly prohibited — you will be turned away at the entry gate. Dhotis and sarees can be rented near the Tirumala gate for ₹50–100.",
      },
    },
    {
      "@type": "Question",
      "name": "Can non-Hindus visit Tirupati Tirumala temple?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-Hindus are not permitted inside the main Venkateswara temple at Tirumala. There is a declaration counter at the temple entry where visitors state their faith. Non-Hindu visitors can explore the Tirumala complex — the Pushkarini tank, Akasaganga waterfall (2km from temple), and Papavinasam waterfall are accessible to everyone.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does the Tirupati laddoo cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Tirumala laddoo (prasadam) costs ₹50 per packet (175g). Each person is allowed maximum 2 packets. The laddoo is GI-tagged and the recipe is a closely guarded TTD secret. It is available at the Prasadam counter immediately after darshan exit. Do not buy laddoos from outside sellers — they are not authentic.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get from Tirupati to Tirumala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shared APSRTC buses run from Tirupati bus stand to Tirumala continuously — ₹60 per person, 30–40 minutes through hairpin bends. Private taxis cost ₹400–600. You can also walk the Alipiri foot path (15km, 4–5 hours uphill, free, popular with devotees). The Srivari Mettu foot path (4km, starts from Tirumala road) is shorter.",
      },
    },
  ],
};

export default function TirupatiPage() {
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
      <TirupatiClient />
    </>
  );
}
