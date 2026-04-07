import type { Metadata } from "next";
import MukteshwarClient from "./MukteshwarClient";

export const metadata: Metadata = {
  title: "Mukteshwar 2 Days: Himalayan Views, Chauli Ki Jali & Kumaon Silence (2026 Guide)",
  description:
    "Complete 2-day Mukteshwar itinerary — Chauli Ki Jali cliff viewpoint, Mukteshwar Dham temple, Bhalu Gaad waterfall, Satkhol bird sanctuary, and why it beats Nainital. Budget from ₹2,500. Altitude 2,286m.",
  keywords: [
    "mukteshwar 2 days itinerary",
    "mukteshwar hill station uttarakhand",
    "chauli ki jali viewpoint",
    "mukteshwar temple trek",
    "bhalu gaad waterfall mukteshwar",
    "mukteshwar vs nainital",
    "kumaon himalaya views",
    "mukteshwar homestay",
    "uttarakhand hill station guide 2026",
    "satkhol bird sanctuary",
  ],
  openGraph: {
    title: "Mukteshwar 2 Days: Himalayan Views, Chauli Ki Jali & Kumaon Silence (2026 Guide)",
    description:
      "Nanda Devi views at 2,286m, the Chauli Ki Jali cliff-edge thrill, Bhalu Gaad waterfall, Satkhol birds. The Nainital alternative. Budget ₹2,500.",
    images: [
      {
        url: "/images/blog/mukteshwar-himalaya-views.jpg",
        width: 1200,
        height: 630,
        alt: "Mukteshwar hill station Kumaon Uttarakhand Himalaya views",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Mukteshwar", "Uttarakhand", "India", "Himalaya", "Hill Station", "Kumaon"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukteshwar 2 Days: Himalayan Views, Chauli Ki Jali & Kumaon Silence (2026 Guide)",
    description: "Nanda Devi views, Chauli Ki Jali cliff, Bhalu Gaad waterfall. The Nainital alternative. 2-day guide.",
    images: ["/images/blog/mukteshwar-himalaya-views.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mukteshwar-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mukteshwar-2-days#article",
      "headline": "Mukteshwar 2 Days: Himalayan Views, Chauli Ki Jali & Kumaon Silence (2026 Guide)",
      "description": "Complete 2-day Mukteshwar itinerary — Chauli Ki Jali, Mukteshwar Dham temple, Bhalu Gaad waterfall, Satkhol bird sanctuary, and why it beats Nainital.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/mukteshwar-himalaya-views.jpg",
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
        "@id": "https://www.incredibleitinerary.com/blog/mukteshwar-2-days",
      },
      "keywords": "mukteshwar itinerary, chauli ki jali, mukteshwar temple, bhalu gaad waterfall, satkhol birds, kumaon himalaya views",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Mukteshwar 2 Days", "item": "https://www.incredibleitinerary.com/blog/mukteshwar-2-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Mukteshwar, Uttarakhand, India",
      "description": "A Kumaon hill station at 2,286m — higher than Nainital, with direct views of the Nanda Devi and Trishul Himalayan peaks, a cliff-edge rock formation called Chauli Ki Jali, and the quietest homestay culture in Uttarakhand.",
      "url": "https://www.incredibleitinerary.com/blog/mukteshwar-2-days",
      "touristType": ["Nature Tourism", "Adventure Tourism", "Hill Station"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Chauli Ki Jali in Mukteshwar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chauli Ki Jali is a rock formation at the edge of a 1,000m cliff near Mukteshwar Dham temple — you grip the natural handholds in the rock face while looking straight down into the Ramganga valley below. It is the single most thrilling viewpoint in Kumaon, a 10-minute walk from the temple. Best visited on clear mornings when the Himalayan main range (Nanda Devi, Trishul) is visible. It is free and requires no guide.",
      },
    },
    {
      "@type": "Question",
      "name": "Why choose Mukteshwar over Nainital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nainital receives approximately 3 million tourists per year. Mukteshwar receives perhaps 50,000. They are 51km apart on the same Kumaon ridgeline but completely different experiences. Mukteshwar sits 400m higher (2,286m vs 2,084m for Nainital's highest point), has direct views of the main Himalayan range, no traffic congestion, no lake-side noise, and a family homestay culture that is genuinely among the best in Uttarakhand. If you have already done Nainital, do Mukteshwar.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I reach Mukteshwar from Delhi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mukteshwar is 330km from Delhi — approximately 7 hours by road. The best route is Delhi to Haldwani (280km, ~6 hours) then Haldwani to Mukteshwar via Bhowali and Ramgarh (50km, 1.5 hours of mountain roads). The Kathgodam railway station (4km from Haldwani) is the nearest railhead — trains from Delhi take 5–6 hours. From Kathgodam, hire a taxi to Mukteshwar (₹1,200–1,500, 2 hours).",
      },
    },
  ],
};

export default function MukteshwarPage() {
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
      <MukteshwarClient />
    </>
  );
}
