import type { Metadata } from "next";
import ManaliClient from "./ManaliClient";

export const metadata: Metadata = {
  title: "Manali 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Manali trip in 5 days. The complete Manali travel guide — Solang Valley snow, Rohtang Pass, Old Manali cafes, Kasol day trip, Spiti Valley. 4.",
  keywords: [
    "manali itinerary 5 days",
    "manali travel guide 2026",
    "solang valley manali snow",
    "rohtang pass manali permit",
    "old manali cafes",
    "manali budget trip",
    "manali couple trip",
    "manali group trip",
    "manali to ladakh road trip",
    "kasol manali trip",
  ],
  openGraph: {
    title: "Manali 5-Day Itinerary 2026: Trip Planner",
    description: "Solang Valley · Rohtang Pass · Old Manali — 4 plans, real costs, Rohtang permit guide.",
    images: [{ url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80", width: 1200, height: 630, alt: "Manali mountains snow Himachal Pradesh" }],
    type: "article", publishedTime: "2026-03-21T00:00:00Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manali 5-Day Itinerary 2026: Trip Planner",
    description: "Solang Valley, Rohtang Pass, Old Manali — 4 plans, real costs, permit guide.",
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/manali-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Manali in 5 Days: Solang Valley, Rohtang Pass & Old Manali (2026)",
      "description": "Complete Manali travel guide with Solang Valley snow, Rohtang Pass permit guide, Old Manali cafes, Kasol day trip. 4 plans with real 2026 budgets.",
      "image": { "@type": "ImageObject", "url": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80" },
      "datePublished": "2026-03-21T00:00:00Z",
      "dateModified": "2026-03-21T00:00:00Z",
      "author": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "url": "https://www.incredibleitinerary.com" },
      "keywords": "manali, solang valley, rohtang pass, old manali, himachal pradesh, manali snow",
      "wordCount": 5800,
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Manali 5 Days", "item": "https://www.incredibleitinerary.com/blog/manali-5-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Manali, Himachal Pradesh, India",
      "description": "A popular hill station in the Kullu Valley — known for snow-covered mountains, Solang Valley adventure sports, Rohtang Pass, Old Manali's backpacker culture and as the gateway to Ladakh and Spiti.",
      "url": "https://www.incredibleitinerary.com/blog/manali-5-days",
      "touristType": ["Adventure Tourism", "Snow Tourism", "Backpacker Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best time to visit Manali?", "acceptedAnswer": { "@type": "Answer", "text": "December to February for snow (Solang Valley and Rohtang get heavy snowfall). March to June for pleasant weather and Rohtang Pass access. July to September is monsoon — landslides on the highway, Rohtang closed. October to November is off-season but beautiful — golden trees, fewer crowds, cold nights." } },
        { "@type": "Question", "name": "How do I get to Manali?", "acceptedAnswer": { "@type": "Answer", "text": "By bus: Volvo AC bus from Delhi (14–16hrs, Rs.900–Rs.1,800). Best value option — leaves Kashmere Gate ISBT at 5–7pm, arrives Manali early morning. By car: Delhi to Manali is 540km (10–12hrs). By air: nearest airport is Bhuntar (Kullu), 50km from Manali. Flights from Delhi 1hr but expensive and weather-dependent." } },
        { "@type": "Question", "name": "Is Rohtang Pass permit required?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — all vehicles need an online permit to cross Rohtang Pass (3,978m). Book at rohtangpermit.com at least 1 day in advance. Only 1,200 vehicles allowed per day. Cost: Rs.550 for petrol vehicles, Rs.650 for diesel. The permit must match your vehicle's registration. Rohtang is closed during heavy snowfall and July–August monsoon." } },
        { "@type": "Question", "name": "What is Old Manali and why is it better?", "acceptedAnswer": { "@type": "Answer", "text": "Old Manali is the original village, 3km uphill from Mall Road. It has the best cafes (Cafe 1947, Dylan's Toasted and Roasted, The Lazy Dog), a relaxed hippie vibe, the ancient Manu Temple, and much cheaper accommodation than Mall Road. Most experienced travellers stay in Old Manali and use Mall Road only for transport." } },
      ],
};

export default function ManaliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <ManaliClient />
    </>
  );
}
