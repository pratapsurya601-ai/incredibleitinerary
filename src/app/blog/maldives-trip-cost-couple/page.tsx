import type { Metadata } from "next";
import MaldivesCoupleClient from "./MaldivesCoupleClient";

export const metadata: Metadata = {
  title: "Maldives Trip Cost for Couple from India 2026 | Honest Budget Breakdown",
  description:
    "Complete Maldives honeymoon cost breakdown for Indian couples — flights from Delhi, Mumbai & Bangalore, resort tiers, food, activities and visa. Budget ₹80,000 to luxury ₹6,00,000+. Real prices, no fluff.",
  keywords: [
    "maldives trip cost for couple from india",
    "maldives honeymoon cost india",
    "maldives package for couple",
    "maldives budget couple india",
    "maldives trip cost 2026",
    "maldives overwater bungalow cost india",
    "maldives honeymoon itinerary 7 days",
    "maldives resort prices indian rupees",
  ],
  openGraph: {
    title: "Maldives Trip Cost for Couple from India 2026 | Honest Budget Breakdown",
    description: "Flights · Resorts · Activities · Visa — real Maldives costs for Indian couples from ₹80k to ₹6L+.",
    images: [{
      url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
      width: 1200, height: 630,
      alt: "Maldives overwater bungalow couple honeymoon",
    }],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maldives Trip Cost for Couple from India 2026",
    description: "Real Maldives honeymoon costs for Indian couples — budget ₹80k to luxury ₹6L+.",
    images: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/maldives-trip-cost-couple" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/maldives-trip-cost-couple#article",
      "headline": "Maldives Trip Cost for Couple from India 2026 | Honest Budget Breakdown",
      "description": "Complete Maldives honeymoon cost breakdown for Indian couples — flights, resorts, food, activities and visa. Budget ₹80,000 to luxury ₹6,00,000+.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
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
      },
      "keywords": "maldives trip cost india, maldives honeymoon couple, maldives package india, overwater bungalow cost",
      "wordCount": 6200,
      "articleSection": "Honeymoon & Couples",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Maldives Trip Cost for Couple", "item": "https://www.incredibleitinerary.com/blog/maldives-trip-cost-couple" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Maldives",
      "description": "The Maldives — 1,200 coral islands in the Indian Ocean, famous for overwater bungalows, crystal-clear lagoons, house reefs and world-class snorkelling. A top honeymoon destination for Indian couples.",
      "url": "https://www.incredibleitinerary.com/blog/maldives-trip-cost-couple",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the total cost of Maldives trip for a couple from India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A budget Maldives trip for an Indian couple costs ₹80,000–₹1,20,000 (guesthouse, economy flights, local food). Mid-range with a 4-star resort costs ₹1,50,000–₹2,50,000. A luxury overwater bungalow trip costs ₹3,00,000–₹6,00,000+. Prices vary by season and origin city.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the cheapest time to visit Maldives from India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "May to October is the off-season with 30–40% lower resort rates and cheaper flights. June–August has occasional rain but the sea is still calm in most atolls. Best value months are May and October — shoulder season with good weather and lower prices.",
      },
    },
    {
      "@type": "Question",
      "name": "Do Indians need a visa for Maldives?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Indians get a free 30-day visa on arrival in Maldives. You need a valid passport, return ticket, hotel/resort booking confirmation, and proof of sufficient funds (approximately $100/day). No advance visa application required.",
      },
    },
    {
      "@type": "Question",
      "name": "How do you reach the resort from Malé airport in Maldives?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From Velana International Airport (Malé) you reach your resort by speedboat (₹3,000–₹8,000/couple, 20–90 mins) or seaplane (₹15,000–₹35,000/couple, 25–45 mins). North Malé and South Malé atolls are speedboat-accessible. Baa and Raa atolls require a seaplane.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Maldives worth it for Indian couples on a budget?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — if you stay on a local island like Maafushi or Thulusdhoo, fly in off-season, and eat at local restaurants, a couple can enjoy the Maldives for ₹80,000–₹1,20,000 total. You still get access to the same turquoise water, snorkelling, and sunsets — just without the overwater villa.",
      },
    },
  ],
};

export default function MaldivesTripCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <MaldivesCoupleClient />
    </>
  );
}
