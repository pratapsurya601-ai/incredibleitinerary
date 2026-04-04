import type { Metadata } from "next";
import KhajurahoClient from "./KhajurahoClient";

export const metadata: Metadata = {
  title: "Khajuraho in 2 Days: UNESCO Temples, Raneh Falls & Panna Safari (2026)",
  description:
    "Complete Khajuraho guide — Western, Eastern & Southern temple groups, Raneh Falls canyon, Panna National Park, Sound & Light Show. 2 plans: Budget and Comfortable with real costs.",
  keywords: [
    "khajuraho itinerary 2 days",
    "khajuraho travel guide 2026",
    "khajuraho temples UNESCO",
    "western group of temples khajuraho",
    "raneh falls khajuraho",
    "panna national park safari",
    "khajuraho sound light show",
    "khajuraho madhya pradesh",
  ],
  openGraph: {
    title: "Khajuraho in 2 Days: UNESCO Temples & Hidden Gems (2026)",
    description:
      "Western Group at sunrise, Raneh Falls canyon, Panna safari — real costs, 2 complete plans.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Khajuraho temple sculpture Madhya Pradesh India",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Khajuraho", "India", "Travel", "Itinerary", "Heritage", "UNESCO"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khajuraho in 2 Days: Complete Guide (2026)",
    description: "UNESCO temples, Raneh Falls, Panna safari — 2 plans, real costs.",
    images: ["https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/khajuraho-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/khajuraho-2-days#article",
      "headline": "Khajuraho in 2 Days: UNESCO Temples, Raneh Falls & Panna Safari (2026)",
      "description":
        "Complete Khajuraho guide covering Western, Eastern and Southern temple groups, Raneh Falls canyon, Panna National Park and Sound & Light Show. 2 plans for every budget.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
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
        "@id": "https://www.incredibleitinerary.com/blog/khajuraho-2-days",
      },
      "keywords": "khajuraho itinerary, khajuraho 2 days, khajuraho temples, western group temples, raneh falls, panna national park",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4200,
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
          "name": "Khajuraho in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/khajuraho-2-days",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Khajuraho?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is ideal for Khajuraho. Day 1 covers the Western and Eastern temple groups plus the Sound & Light Show. Day 2 covers the Southern Group, Raneh Falls, and optionally a Panna National Park safari. 1 day is possible if you only visit the Western Group, but you will miss the best parts.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Khajuraho?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time. Temperatures are 15-28°C and comfortable for walking between temple groups. November-February is ideal. Avoid April-June when temperatures hit 45°C+ and exploring ruins in the open becomes genuinely dangerous. Monsoon (July-September) makes Raneh Falls spectacular but temple grounds can be slippery.",
          },
        },
        {
          "@type": "Question",
          "name": "Are the Khajuraho temples only about erotic sculptures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The erotic sculptures are roughly 10% of the total carvings. The majority depict everyday life, war scenes, religious iconography, celestial dancers and musicians, animals, and geometric patterns. The artistry of the non-erotic sculptures is extraordinary and most visitors rush past them looking only for the famous panels.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I reach Khajuraho?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Khajuraho has its own airport (HJR) with direct flights from Delhi and Varanasi. By train, the nearest major station is Jhansi (175km, 4-5hrs by road) or Mahoba (63km, 1.5hrs). Overnight buses run from Jhansi, Orchha and Varanasi. Most travellers combine Khajuraho with Orchha (175km) or Varanasi (400km).",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Sound and Light Show at Khajuraho worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, especially if you visit the Western Group temples during the day first. The show runs nightly in the Western Group complex, costs ₹250 for Indians and ₹700 for foreigners, and lasts about 50 minutes. The temple facades lit up at night are genuinely spectacular. The English show usually runs at 7:30pm in winter and 8:30pm in summer.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Raneh Falls and is it worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Raneh Falls is a canyon of volcanic rock with a waterfall on the Ken River, about 20km from Khajuraho. The canyon walls are made of pure crystalline granite in shades of red, pink, and grey. It is strikingly beautiful and almost nobody visits. Entry is ₹25 for Indians and ₹200 for foreigners. Best visited after monsoon (October-December) when water levels are highest.",
          },
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Khajuraho, Madhya Pradesh, India",
      "description": "A UNESCO World Heritage Site famous for its medieval Hindu and Jain temples adorned with intricate sculptures, located in Madhya Pradesh. One of India's most remarkable architectural achievements.",
      "url": "https://www.incredibleitinerary.com/blog/khajuraho-2-days",
      "touristType": ["Heritage Tourism", "Cultural Tourism", "Religious Tourism"],
    },
  ],
};

export default function KhajurahoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KhajurahoClient />
    </>
  );
}
