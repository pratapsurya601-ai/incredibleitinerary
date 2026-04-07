import type { Metadata } from "next";
import SpitiClient from "./SpitiClient";

export const metadata: Metadata = {
  title: "Spiti Valley 7 Days: The Complete Solo & Group Itinerary (2026)",
  description:
    "Complete 7-day Spiti Valley itinerary — Kaza, Key Monastery, Chandratal Lake, Pin Valley, Kibber, Langza fossil village, budget from ₹3,000/day. Best time, permits, altitude tips.",
  keywords: [
    "Spiti Valley itinerary",
    "Spiti Valley 7 days",
    "Kaza travel guide",
    "Key Monastery Spiti",
    "Chandratal Lake Spiti",
    "Spiti Valley solo trip",
    "Spiti Valley budget",
    "best time to visit Spiti",
  ],
  openGraph: {
    title: "Spiti Valley 7 Days: The Complete Solo & Group Itinerary (2026)",
    description:
      "Kaza · Key Monastery · Chandratal Lake — complete 7-day Spiti circuit with real costs, altitude tips, and permit guide.",
    images: [
      {
        url: "https://www.incredibleitinerary.com/images/blog/spiti-valley-key-monastery.jpg",
        width: 1200,
        height: 630,
        alt: "Key Monastery Spiti Valley Himachal Pradesh",
      },
    ],
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Spiti Valley", "India", "Travel", "Road Trip", "Himachal Pradesh", "Solo Travel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiti Valley 7 Days: The Complete Solo & Group Itinerary (2026)",
    description:
      "Key Monastery, Chandratal Lake, Kaza — real costs, altitude tips, permit guide.",
    images: ["https://www.incredibleitinerary.com/images/blog/spiti-valley-key-monastery.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/spiti-valley-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/spiti-valley-7-days#article",
      "headline": "Spiti Valley 7 Days: The Complete Solo & Group Itinerary (2026)",
      "description":
        "Complete 7-day Spiti Valley itinerary — Kaza, Key Monastery, Chandratal Lake, Pin Valley, Kibber, Langza fossil village, budget from ₹3,000/day. Best time, permits, altitude tips.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/spiti-valley-key-monastery.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-03-15T00:00:00Z",
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
        "@id": "https://www.incredibleitinerary.com/blog/spiti-valley-7-days",
      },
      "keywords":
        "Spiti Valley itinerary, Spiti Valley 7 days, Kaza travel guide, Key Monastery Spiti, Chandratal Lake Spiti, Spiti Valley solo trip, Spiti Valley budget, best time to visit Spiti",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 7200,
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
          "name": "Travel Guides",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Spiti Valley 7 Days",
          "item": "https://www.incredibleitinerary.com/blog/spiti-valley-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Spiti Valley, Himachal Pradesh, India",
      "description":
        "A remote high-altitude cold desert valley in the Himalayas, receiving less than 170mm of rain per year. Known for 1,000-year-old Buddhist monasteries, Chandratal Lake, and landscapes that look more like Mars than India.",
      "url": "https://www.incredibleitinerary.com/blog/spiti-valley-7-days",
      "touristType": ["Adventure Tourism", "Cultural Tourism", "Road Trip Tourism", "Solo Travel"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When is the best time to visit Spiti Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "July to September is the best time — roads are fully open, weather is clear, and Chandratal Lake is accessible. October has golden colours and fewer crowds but roads start closing. June is dramatic with some snow still on passes. April and May are dangerous — both Rohtang and Kunzum passes are closed or risky.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the budget for a 7-day Spiti Valley trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Budget travellers on homestays and shared jeeps can manage ₹2,500–₹3,500 per day. Mid-range with better rooms and private taxi costs ₹5,000–₹8,000 per day. Total for 7 days: ₹18,000–₹25,000 budget, ₹35,000–₹55,000 mid-range. Carry ₹10,000+ cash — Kaza has only one ATM and it is often out of order.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need permits for Spiti Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Indian nationals generally do not need a permit for Spiti Valley itself. Some restricted areas near the Tibet border require an Inner Line Permit (ILP). Chandratal Lake requires registration at the Batal checkpost. Carry 5 passport photos and photocopies of ID. Rules change annually — check with the SDM office in Kaza.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I handle altitude sickness in Spiti Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Acclimatise in Manali (2,050m) for 1–2 days before going to Kaza (3,800m). Drink 3–4 litres of water daily. Do not ascend faster than 500m per day above 3,000m. Consider Diamox (acetazolamide) 125mg twice daily starting 2 days before. Symptoms of serious AMS — severe headache, vomiting, confusion — mean descend 500m immediately. Do not push through AMS.",
      },
    },
    {
      "@type": "Question",
      "name": "Which route is better for Spiti — Manali or Shimla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The Shimla–Kinnaur route (roughly 400km, 14–16 hrs over 2 days) is recommended for first-timers — it is open year-round, has better roads, and gives more gradual altitude gain through Kinnaur apple orchards and Nako Lake. The Manali route (roughly 200km, 7–9 hrs) is more dramatic but requires crossing two high passes above 4,500m and is only open June to October. The ideal circuit enters one side and exits the other.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I not miss in Spiti Valley?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Chandratal Lake (the crescent moon-shaped turquoise lake at 4,300m — the most extraordinary sight in Spiti), Key Monastery (1,000-year-old monastery at 4,166m with sweeping valley views), Langza fossil village (marine fossils in the fields, giant Buddha statue), Dhankar Monastery (perched on a crumbling cliff above the Spiti–Pin confluence), and Tabo Monastery (the Ajanta of the Himalayas with 1,000-year-old frescoes).",
      },
    },
  ],
};

export default function SpitiPage() {
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
      <SpitiClient />
    </>
  );
}
