import type { Metadata } from "next";
import CoorgClient from "./CoorgClient";

export const metadata: Metadata = {
  title: "Coorg 3 Days: Coffee Estates, Abbey Falls & Trekking (Complete Guide 2026)",
  description:
    "Complete 3-day Coorg itinerary — Abbey Falls, Dubare Elephant Camp, Raja's Seat, Namdroling Monastery, Tadiandamol trek, budget from ₹3,000/day. Karnataka's Scotland — the complete guide.",
  keywords: [
    "coorg 3 days itinerary",
    "coorg travel guide 2026",
    "abbey falls coorg",
    "dubare elephant camp",
    "raja's seat madikeri",
    "namdroling monastery bylakuppe",
    "tadiandamol trek coorg",
    "coorg coffee estate stay",
    "coorg from bangalore",
    "kodagu karnataka",
  ],
  openGraph: {
    title: "Coorg 3 Days: Coffee Estates, Abbey Falls & Trekking (Complete Guide 2026)",
    description:
      "Complete 3-day Coorg itinerary — Abbey Falls, Dubare Elephant Camp, Raja's Seat, Namdroling Monastery, Tadiandamol trek, budget from ₹3,000/day.",
    images: [
      {
        url: "/images/blog/coorg-coffee-plantation.jpg",
        width: 1200,
        height: 630,
        alt: "Coorg coffee plantation Karnataka misty green hills",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Coorg", "Karnataka", "Coffee", "Trekking", "India", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coorg 3 Days: Coffee Estates, Abbey Falls & Trekking (Complete Guide 2026)",
    description:
      "Abbey Falls, Dubare Elephant Camp, Namdroling Monastery, Tadiandamol trek. Complete 3-day Coorg guide.",
    images: ["/images/blog/coorg-coffee-plantation.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/coorg-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/coorg-3-days#article",
      "headline": "Coorg 3 Days: Coffee Estates, Abbey Falls & Trekking (Complete Guide 2026)",
      "description":
        "Complete 3-day Coorg itinerary — Abbey Falls, Dubare Elephant Camp, Raja's Seat, Namdroling Monastery, Tadiandamol trek, budget from ₹3,000/day. Karnataka's Scotland — the complete guide.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/coorg-coffee-plantation.jpg",
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
        "@id": "https://www.incredibleitinerary.com/blog/coorg-3-days",
      },
      "keywords":
        "coorg itinerary, coorg 3 days, abbey falls, dubare elephant camp, raja seat, namdroling monastery, tadiandamol trek, coorg coffee estate",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5000,
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
          "name": "Coorg 3 Days",
          "item": "https://www.incredibleitinerary.com/blog/coorg-3-days",
        },
      ],
    },

    {
      "@type": "TouristDestination",
      "name": "Coorg (Kodagu), Karnataka, India",
      "description":
        "The Scotland of India — a lush hill district in the Western Ghats known for rolling coffee and cardamom plantations, misty valleys, Abbey Falls, Dubare Elephant Camp on the Kaveri river, Tadiandamol peak, and the golden Namdroling Monastery at Bylakuppe.",
      "url": "https://www.incredibleitinerary.com/blog/coorg-3-days",
      "touristType": ["Eco Tourism", "Adventure Tourism", "Cultural Tourism"],
    },
  ],
};

// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days are enough for Coorg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3 days is ideal for Coorg — covering Abbey Falls, Dubare Elephant Camp, Raja's Seat, Namdroling Monastery, and either the Tadiandamol trek or Mandalpatti jeep track. 2 days works for a quick Bangalore weekend trip covering the main sights. 4 days lets you add Iruppu Falls, a full coffee estate tour, and the Brahmagiri Wildlife Sanctuary.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Coorg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "October to May is the best time. Peak season is November to February — cool (12–22°C), dry, coffee harvest underway and estates fragrant. March to May is warmer but manageable with clear trekking visibility. Monsoon (June to September) is when Coorg receives some of India's heaviest rainfall — Abbey Falls is spectacular but most trails are leech-infested and roads can flood. Research carefully before visiting in monsoon.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I get to Coorg from Bangalore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coorg (Madikeri) is 265km from Bangalore — approximately 5–6 hours by road via NH275 through Mysuru. KSRTC buses run daily from Bangalore to Madikeri (₹350–₹500, 5–6 hrs). From Mysore it is only 120km and 2.5 hours. A private cab from Bangalore costs ₹3,500–₹4,500 one way and is the most convenient option for groups visiting the estates.",
      },
    },
    {
      "@type": "Question",
      "name": "Is Coorg good for trekking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Coorg has Karnataka's best accessible trekking. Tadiandamol (1,748m) is the highest peak in Coorg with a 7km return trail from the trailhead, moderate difficulty, and spectacular Western Ghats views on clear days. Start at 6am to summit by 9am before clouds roll in. Brahmagiri (Iruppu area) and Pushpagiri are other options. Mandalpatti requires a hired jeep but rewards with dramatic mist valley views.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a 3-day Coorg trip cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget travellers can do 3 days in Coorg for ₹3,000–₹4,000 per person per day including basic homestay accommodation (₹1,000–₹1,800/night), meals (₹300–₹500/day), and entry fees. Mid-range plantation stay trips cost ₹6,000–₹10,000 per person per day. Peak season (December–January) prices are 40–50% higher. Dubare Elephant Camp (₹500–₹750/person) and the Mandalpatti jeep (₹2,000 for 4 people) are the main activity costs.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I buy in Coorg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coorg coffee is the top buy — fresh Arabica or Robusta beans/powder from estate shops costs ₹150–₹300 per 250g, far cheaper than Bangalore. Also look for green cardamom (₹400–₹600/100g), black pepper, Coorg honey, and locally distilled fruit wine. Buy directly from estate shops or Madikeri market for the best prices and freshest produce.",
      },
    },
  ],
};

export default function CoorgBlogPage() {
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
      <CoorgClient />
    </>
  );
}
