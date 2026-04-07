import type { Metadata } from "next";
import KodaikanalClient from "./KodaikanalClient";

export const metadata: Metadata = {
  title: "Kodaikanal 2 Days: The Honest Guide (Lake, Pillar Rocks & What to Skip)",
  description:
    "Complete 2-day Kodaikanal itinerary — Kodai Lake, Pillar Rocks, Coaker's Walk, Dolphin's Nose, Bear Shola Falls, budget from ₹2,500/day. Honest guide including what's overhyped.",
  keywords: [
    "kodaikanal 2 days itinerary",
    "kodaikanal travel guide 2026",
    "kodai lake boat ride",
    "pillar rocks kodaikanal",
    "coakers walk kodaikanal",
    "dolphin nose kodaikanal",
    "bear shola falls",
    "kodaikanal budget travel",
    "kodaikanal best time to visit",
    "kodaikanal from madurai",
  ],
  openGraph: {
    title: "Kodaikanal 2 Days: The Honest Guide (Lake, Pillar Rocks & What to Skip)",
    description:
      "Complete 2-day Kodaikanal itinerary with real costs, morning-only viewpoint guide, and honest takes on what's worth your time.",
    images: [
      {
        url: "/images/blog/kodaikanal-lake.jpg",
        width: 1200,
        height: 630,
        alt: "Kodaikanal lake surrounded by misty green hills Tamil Nadu",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Kodaikanal", "Tamil Nadu", "Hill Station", "Nature", "Weekend Trip"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodaikanal 2 Days: The Honest Guide (Lake, Pillar Rocks & What to Skip)",
    description: "2-day itinerary, real costs, morning-only viewpoint guide, and honest takes on what's overhyped.",
    images: ["/images/blog/kodaikanal-lake.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kodaikanal-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kodaikanal-2-days#article",
      "headline": "Kodaikanal 2 Days: The Honest Guide (Lake, Pillar Rocks & What to Skip)",
      "description": "Complete 2-day Kodaikanal itinerary — Kodai Lake, Pillar Rocks, Coaker's Walk, Dolphin's Nose, Bear Shola Falls, budget from ₹2,500/day. Honest guide including what's overhyped.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/kodaikanal-lake.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
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
        "@id": "https://www.incredibleitinerary.com/blog/kodaikanal-2-days",
      },
      "keywords": "kodaikanal itinerary, kodaikanal 2 days, kodai lake, pillar rocks, coakers walk, bear shola falls, kodaikanal travel guide",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 3800,
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
          "name": "Kodaikanal 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/kodaikanal-2-days",
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Kodaikanal, Dindigul District, Tamil Nadu, India",
      "description": "The Princess of Hill Stations — a misty Tamil Nadu hill station at 2,133m in the Palani Hills, known for its star-shaped lake, Pillar Rocks granite formations, Coaker's Walk, and eucalyptus-scented forest roads.",
      "url": "https://www.incredibleitinerary.com/blog/kodaikanal-2-days",
      "touristType": ["Nature Tourism", "Hill Station", "Weekend Getaway"],
    },
  ],
};

// FAQPage schema — separate block (must NOT be inside @graph with Article)
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days are enough for Kodaikanal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2 days is ideal for a focused Kodai trip — lake circuit, Pillar Rocks, Coaker's Walk, Bear Shola Falls, and shopping. 3 days lets you add Berijam Lake and a more relaxed pace. 1 day is possible but rushed.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Kodaikanal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "April to June is the most popular window — temperatures 12–20°C, mist is atmospheric, roses bloom in Bryant Park. September to November offers the clearest post-monsoon views, ideal for Pillar Rocks and Dolphin's Nose. Avoid May peak season if you hate crowds.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a 2-day Kodaikanal trip cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A budget traveller can manage Kodaikanal for ₹2,500–₹3,500 per day including accommodation. Budget guesthouses near the lake start at ₹700/night. Mid-range options (proper hotel with heating) cost ₹2,000–₹4,000/night. Kodaikanal is significantly cheaper than Ooty for equivalent accommodation.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Dolphin's Nose worth visiting in Kodaikanal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only on clear days. Dolphin's Nose is 30km from Kodai town and on roughly 70% of days it is completely fogged in by the time you arrive. Check: if Pillar Rocks is clearly visible from town at 8am, Dolphin's Nose may be worth the 60km round trip. If Pillar Rocks looks foggy, skip Dolphin's Nose entirely.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get to Kodaikanal from Madurai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Madurai is the most common gateway to Kodaikanal — 120km, 3.5 hours by bus (₹100–150) or cab (₹1,500–2,200). TNSTC buses run from Mattuthavani bus stand in Madurai. There is no direct railway to Kodai — the nearest station is Kodai Road (100km on the plains), from where you take a bus or cab up the 64-hairpin ghat road.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I buy in Kodaikanal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best buys in Kodaikanal are local wildflower honey (₹150–300/jar from small home operators), eucalyptus oil (genuine and cheap, ₹80–150), and handmade soaps. The famous PT Road chocolate shops are mostly commercial tourist operations — skip the main road shops and find a small home-based seller instead. Ask your guesthouse for recommendations.",
      },
    },
  ],
};

export default function KodaikanalBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <KodaikanalClient />
    </>
  );
}
