import type { Metadata } from "next";
import BangaloreGetawaysClient from "./BangaloreGetawaysClient";

export const metadata: Metadata = {
  title: "21 Best Weekend Getaways from Bangalore 2026: Hills, Beaches & Heritage",
  description:
    "The definitive Bangalore weekend trip guide — 21 destinations sorted by distance with drive times, best seasons, costs, and where to stay. Nandi Hills (1.5hrs) to Gokarna (8hrs) — every getaway worth making from Bengaluru.",
  keywords: [
    "weekend getaways from bangalore",
    "places to visit near bangalore",
    "bangalore weekend trip",
    "2 day trip from bangalore",
    "short trips from bangalore",
    "places near bangalore for weekend",
    "bangalore to coorg",
    "bangalore to ooty",
    "bangalore to hampi",
    "road trips from bangalore",
  ],
  openGraph: {
    title: "21 Best Weekend Getaways from Bangalore (2026)",
    description: "Every weekend trip worth making from Bengaluru — sorted by distance with drive times, best months, and honest assessments.",
    images: [{ url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1200&q=80", width: 1200, height: 630, alt: "Coorg coffee plantation hills Bangalore weekend getaway Karnataka" }],
    type: "article", publishedTime: "2026-04-07T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "21 Best Weekend Getaways from Bangalore (2026)",
    description: "Every weekend trip from Bengaluru sorted by distance — drive times, best months, and where to stay.",
    images: ["https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/best-weekend-getaways-from-bangalore" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "21 Best Weekend Getaways from Bangalore (2026)",
      "description": "Complete guide to weekend trips from Bangalore — 21 destinations sorted by distance with drive times, best seasons, costs, and accommodation.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1200&q=80" },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "bangalore weekend trips, getaways from bangalore, coorg ooty mysore hampi wayanad",
      "wordCount": 3800,
      "articleSection": "Weekend Trips",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Weekend Getaways from Bangalore", "item": "https://www.incredibleitinerary.com/blog/best-weekend-getaways-from-bangalore" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best weekend getaway from Bangalore?",
          "acceptedAnswer": { "@type": "Answer", "text": "For a 2-day trip, Coorg (265km, 5–6hrs) is the most popular — coffee estates, Abbey Falls, Dubare Elephant Camp, and misty hills. Mysore (140km, 3hrs) is the best short trip for heritage. For beaches, Gokarna (480km, 8hrs) is better value than Goa for a quick visit. For trekking, Chikmagalur (240km, 4hrs) or Kudremukh offer the best trails." },
        },
        {
          "@type": "Question",
          "name": "How far is Coorg from Bangalore?",
          "acceptedAnswer": { "@type": "Answer", "text": "Coorg (Madikeri) is 265km from Bangalore — about 5–6 hours via NH275 through Mysuru. The Mysuru–Madikeri stretch passes through coffee and cardamom plantations and is one of Karnataka's most scenic drives. Leave Friday night or very early Saturday to make the most of the weekend. KSRTC buses run daily from Bangalore's Majestic bus stand to Madikeri." },
        },
        {
          "@type": "Question",
          "name": "Which Bangalore getaway is best in monsoon (June–September)?",
          "acceptedAnswer": { "@type": "Answer", "text": "Monsoon is actually the best time for some Bangalore getaways: Agumbe (Western Ghats, 360km) gets India's second-highest rainfall and is spectacular; Coorg turns intensely green but leeches are on trails; Dudhsagar Falls (350km, Goa border) is only accessible in monsoon; Wayanad (280km) has misty tea estates. Avoid Hampi in monsoon — roads to Tungabhadra can flood." },
        },
        {
          "@type": "Question",
          "name": "What are the best one-day trips from Bangalore?",
          "acceptedAnswer": { "@type": "Answer", "text": "Best one-day trips: Nandi Hills (60km, 1.5hrs) for sunrise; Mysore (140km, 3hrs) for Mysore Palace and Chamundeshwari Temple; Shivanasamudra Falls (130km, 2.5hrs) for waterfall picnic; Ramanagara (50km, 1hr) for rock climbing (Sholay filming location); Lepakshi (120km, 2hrs) for Vijayanagara era temples; Bheemeshwari (100km, 2hrs) for mahseer fishing and nature camp." },
        },
      ],
    },
  ],
};

export default function BangaloreGetawaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BangaloreGetawaysClient />
    </>
  );
}
