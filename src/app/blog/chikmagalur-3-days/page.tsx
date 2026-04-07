import type { Metadata } from "next";
import ChikmagalurClient from "./ChikmagalurClient";

export const metadata: Metadata = {
  title: "Chikmagalur 3 Days: Coffee Estates, Mullayanagiri & Hebbe Falls (2026 Guide)",
  description:
    "Complete 3-day Chikmagalur itinerary — Mullayanagiri peak (1,930m), Baba Budangiri hills, Hebbe Falls, Kemmanagundi, Kudremukh trek, and where to buy fresh estate coffee. Budget from ₹7,000.",
  keywords: [
    "chikmagalur 3 days itinerary",
    "chikmagalur coffee estate stay",
    "mullayanagiri peak trek",
    "hebbe falls chikmagalur",
    "baba budangiri hills",
    "kemmanagundi hill station",
    "kudremukh national park trek",
    "chikmagalur travel guide 2026",
    "chikmagalur budget trip",
    "coffee plantation karnataka",
  ],
  openGraph: {
    title: "Chikmagalur 3 Days: Coffee Estates, Mullayanagiri & Hebbe Falls (2026 Guide)",
    description:
      "Mullayanagiri sunrise, Baba Budangiri mist, 168m Hebbe Falls, fresh peaberry coffee. Real costs from ₹7,000 for 3 days.",
    images: [
      {
        url: "/images/blog/chikmagalur-coffee-estate.jpg",
        width: 1200,
        height: 630,
        alt: "Coffee plantation in Chikmagalur Karnataka India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Chikmagalur", "Karnataka", "India", "Coffee", "Trekking", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chikmagalur 3 Days: Coffee Estates, Mullayanagiri & Hebbe Falls (2026 Guide)",
    description: "Mullayanagiri, Baba Budangiri, Hebbe Falls, fresh peaberry coffee. 3-day Chikmagalur guide.",
    images: ["/images/blog/chikmagalur-coffee-estate.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/chikmagalur-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/chikmagalur-3-days#article",
      "headline": "Chikmagalur 3 Days: Coffee Estates, Mullayanagiri & Hebbe Falls (2026 Guide)",
      "description": "Complete 3-day Chikmagalur itinerary — Mullayanagiri peak, Baba Budangiri, Hebbe Falls, Kemmanagundi, Kudremukh, and fresh estate coffee shopping.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/chikmagalur-coffee-estate.jpg",
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
        "@id": "https://www.incredibleitinerary.com/blog/chikmagalur-3-days",
      },
      "keywords": "chikmagalur itinerary, mullayanagiri trek, hebbe falls, baba budangiri, coffee estate stay, kemmanagundi, kudremukh",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Chikmagalur 3 Days", "item": "https://www.incredibleitinerary.com/blog/chikmagalur-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Chikmagalur, Karnataka, India",
      "description": "Karnataka's coffee heartland — produces 50% of India's coffee output. Home to Mullayanagiri (1,930m, highest peak in Karnataka), Hebbe Falls, Baba Budangiri hills, and the best fresh-roasted peaberry coffee in India.",
      "url": "https://www.incredibleitinerary.com/blog/chikmagalur-3-days",
      "touristType": ["Nature Tourism", "Adventure Tourism", "Agritourism", "Trekking"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best time to visit Chikmagalur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "September to February is the best time. October–January offers the clearest skies, coolest temperatures (10–22°C), and waterfalls at peak flow. September is good if you want lush green landscapes with fewer leeches than full monsoon. Avoid July–August — heavy rain, leeches everywhere on trails, and most waterfalls are dangerously flooded.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I reach Chikmagalur from Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chikmagalur is 245km from Bangalore — approximately 5 hours by road. KSRTC buses run from Bangalore Majestic bus stand (₹250–400, about 6 hours). Driving is the recommended option as it gives flexibility to stop at coffee estates and viewpoints en route. There is no direct train to Chikmagalur — the nearest railhead is Kadur (25km) with trains from Bangalore.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the Mullayanagiri trek difficult?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mullayanagiri (1,930m) involves about 1km of walking from the parking area — it is not a difficult trek. The path is paved and well-maintained. The main challenge is the altitude and the weather — heavy cloud cover can roll in quickly. Start early (before 7am) for the best chance of clear views over the Deccan. The summit has a small Murugan temple.",
      },
    },
    {
      "@type": "Question",
      "name": "What coffee should I buy in Chikmagalur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peaberry coffee is the most prized — small, round beans that occur naturally in about 5% of coffee cherries, with a more intense, sweeter flavour. Chikmagalur is one of the few places in India to buy it directly from the estate. Also look for Plantation A arabica (smooth, good for filter coffee) and estate blends. Buy from coffee estates directly or from Coffee Cabin on the main road — prices ₹300–600 per 250g. Avoid packaged brands sold at tourist spots.",
      },
    },
  ],
};

export default function ChikmagalurPage() {
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
      <ChikmagalurClient />
    </>
  );
}
