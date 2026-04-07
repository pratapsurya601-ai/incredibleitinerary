import type { Metadata } from "next";
import BangaloreClient from "./BangaloreClient";

export const metadata: Metadata = {
  title: "Bangalore 3 Days: Cubbon Park, Lalbagh, Brewpubs & Day Trips (Complete Guide)",
  description:
    "Complete 3-day Bangalore itinerary — Cubbon Park, Tipu Sultan's Summer Palace, Lalbagh Botanical Garden, Koramangala food scene, Bannerghatta National Park. Budget from ₹5,000 for 3 days.",
  keywords: [
    "bangalore 3 days itinerary",
    "bangalore travel guide 2026",
    "cubbon park bangalore",
    "lalbagh botanical garden",
    "tipu sultan summer palace",
    "bannerghatta national park safari",
    "bangalore food guide darshini",
    "nandi hills day trip",
    "bangalore budget travel",
    "bangalore weekend guide",
  ],
  openGraph: {
    title: "Bangalore 3 Days: Cubbon Park, Lalbagh, Brewpubs & Day Trips (Complete Guide)",
    description:
      "3-day Bangalore guide — Lalbagh glasshouse, Tipu Sultan's palace, craft beer scene, Bannerghatta safari. Real costs from ₹5,000 total.",
    images: [
      {
        url: "/images/blog/bangalore-lalbagh.jpg",
        width: 1200,
        height: 630,
        alt: "Lalbagh Botanical Garden glass house Bangalore",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Bangalore", "Karnataka", "India", "City Guide", "Food", "Nature"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangalore 3 Days: Cubbon Park, Lalbagh, Brewpubs & Day Trips",
    description: "Darshini breakfasts, heritage palaces, craft beer, Bannerghatta safari. 3-day Bangalore guide.",
    images: ["/images/blog/bangalore-lalbagh.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bangalore-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/bangalore-3-days#article",
      "headline": "Bangalore 3 Days: Cubbon Park, Lalbagh, Brewpubs & Day Trips (Complete Guide)",
      "description": "Complete 3-day Bangalore itinerary with real prices, darshini food guide, heritage sites, craft beer scene, and Bannerghatta National Park safari.",
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
        "@id": "https://www.incredibleitinerary.com/blog/bangalore-3-days",
      },
      "keywords": "bangalore itinerary, bangalore 3 days, cubbon park, lalbagh, tipu sultan palace, bannerghatta safari, darshini food",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5200,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Bangalore 3 Days", "item": "https://www.incredibleitinerary.com/blog/bangalore-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Bangalore, Karnataka, India",
      "description": "India's tech capital and garden city at 920m — colonial parks, Tipu Sultan's palace, legendary darshini breakfast culture, craft beer scene, and Bannerghatta National Park.",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best time to visit Bangalore?",
      "acceptedAnswer": { "@type": "Answer", "text": "October to February is the best time to visit Bangalore. Temperatures stay between 15–28°C. Avoid April–June which can reach 38–40°C. Bangalore has no monsoon season to worry about for sightseeing but July–September sees frequent afternoon showers." },
    },
    {
      "@type": "Question",
      "name": "How much does a 3-day Bangalore trip cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Budget travellers can cover 3 days for ₹5,000–₹8,000 (staying in a hostel at ₹500–₹900/night, eating at darshinis for ₹40–₹200 per meal). Mid-range runs ₹12,000–₹18,000 for 3 days with a decent hotel." },
    },
    {
      "@type": "Question",
      "name": "What is a darshini and why is it important in Bangalore?",
      "acceptedAnswer": { "@type": "Answer", "text": "Darshinis are standing self-service South Indian restaurants unique to Bangalore. You pay at a counter, collect your food, and eat standing at a high counter. Masala dosa costs ₹35–₹50, filter coffee ₹15–₹25. Vidyarthi Bhavan (since 1943) and MTR are the most famous. Eating at a darshini is an essential Bangalore experience." },
    },
    {
      "@type": "Question",
      "name": "Is Bannerghatta worth visiting from Bangalore?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for the lion and tiger safari. Bannerghatta National Park is 40km from the city centre, entry ₹60, safari ₹250. Allow 4–5 hours return including travel. The zoo section is large and reasonably well-maintained. Go on a weekday to avoid crowds." },
    },
  ],
};

export default function BangaloreBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <BangaloreClient />
    </>
  );
}
