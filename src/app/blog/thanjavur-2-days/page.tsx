import type { Metadata } from "next";
import ThanjavurClient from "./ThanjavurClient";

export const metadata: Metadata = {
  title: "Thanjavur 2-Day Itinerary 2026: Big Temple & Chola Art",
  description:
    "Thanjavur in 2 days — Brihadeeswarar Big Temple (UNESCO), Chola bronzes, Saraswathi Mahal Library. Day trips to Darasuram and Gangaikonda Cholapuram.",
  keywords: [
    "thanjavur itinerary 2 days",
    "brihadeeswarar temple guide",
    "big temple thanjavur",
    "thanjavur palace",
    "chola bronzes",
    "darasuram temple",
    "gangaikonda cholapuram",
    "saraswathi mahal library",
  ],
  openGraph: {
    title: "Thanjavur 2-Day Itinerary 2026: Big Temple & Chola Art",
    description:
      "Brihadeeswarar Temple, Chola bronzes, Saraswathi Mahal Library — the complete Thanjavur guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621365523158-7af3db4f8e1e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Brihadeeswarar Temple Thanjavur Big Temple vimana UNESCO",
      },
    ],
    type: "article",
    publishedTime: "2026-04-08T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Thanjavur", "Tamil Nadu", "UNESCO", "Chola", "Temples", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanjavur 2-Day Itinerary 2026: Big Temple & Chola Art",
    description:
      "Brihadeeswarar Temple, Chola bronzes, Thanjavur paintings — 2-day guide.",
    images: [
      "https://images.unsplash.com/photo-1621365523158-7af3db4f8e1e?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/thanjavur-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/thanjavur-2-days#article",
      headline: "Thanjavur in 2 Days: Brihadeeswarar Temple & Chola Art (2026)",
      description:
        "Complete Thanjavur travel guide — Brihadeeswarar Temple (UNESCO), Thanjavur Palace, Saraswathi Mahal Library, Chola bronzes, Airavatesvara Temple.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1621365523158-7af3db4f8e1e?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-08T00:00:00Z",
      dateModified: "2026-04-08T00:00:00Z",
      author: {
        "@type": "Person",
        name: "Surya Pratap",
        url: "https://www.incredibleitinerary.com/about",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.incredibleitinerary.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/thanjavur-2-days",
      },
      keywords:
        "Thanjavur, Brihadeeswarar Temple, Big Temple, Chola dynasty, UNESCO, Tamil Nadu",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 5200,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Thanjavur in 2 Days", item: "https://www.incredibleitinerary.com/blog/thanjavur-2-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Thanjavur (Tanjore), Tamil Nadu, India",
      description:
        "The cultural capital of the Chola dynasty — home to the Brihadeeswarar Temple (UNESCO), the finest collection of Chola bronzes in the world, and the Saraswathi Mahal Library with 49,000 manuscripts.",
      url: "https://www.incredibleitinerary.com/blog/thanjavur-2-days",
      touristType: ["Heritage Tourism", "Cultural Tourism", "Spiritual Tourism"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many days are enough for Thanjavur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2 days is ideal — one day for Brihadeeswarar Temple, Thanjavur Palace and Art Gallery, and one for day trips to Airavatesvara Temple at Darasuram (25km) and Gangaikonda Cholapuram (75km). A single day covers the Big Temple and Palace if you're short on time.",
      },
    },
    {
      "@type": "Question",
      name: "Is photography allowed inside Brihadeeswarar Temple?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Photography is allowed in the outer courtyard and around the main vimana tower. Photography is NOT allowed inside the sanctum sanctorum. The Nandi monolith and the temple exterior are the most photographed spots. No tripods allowed anywhere on the premises.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reach Thanjavur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By train: Thanjavur Junction has trains from Chennai (6–8 hours, ₹200–₹800), Trichy (1 hour, ₹30–₹60), and Madurai (4 hours, ₹100–₹300). By bus: TNSTC buses from all major Tamil Nadu cities. By air: nearest airport is Trichy (55km, 1 hour by car).",
      },
    },
    {
      "@type": "Question",
      name: "What is the Brihadeeswarar Temple capstone mystery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 80-tonne granite capstone sits at the top of the 216-foot vimana tower. How the Cholas placed it there in 1010 CE without modern machinery is debated — the leading theory is a 6km-long ramp from the village of Sarapallam. No cranes existed that could lift 80 tonnes to that height in the 11th century.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Thanjavur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "November to February is best — 22–30°C, comfortable for temple walking. The annual Brihadeeswarar Temple festival (February) sees extraordinary processions. Avoid April–June when temperatures exceed 40°C.",
      },
    },
  ],
};

export default function ThanjavurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ThanjavurClient />
    </>
  );
}
