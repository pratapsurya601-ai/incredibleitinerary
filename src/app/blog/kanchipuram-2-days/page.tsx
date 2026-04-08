import type { Metadata } from "next";
import KanchipuramClient from "./KanchipuramClient";

export const metadata: Metadata = {
  title: "Kanchipuram 2-Day Itinerary 2026: Temples & Silk Guide",
  description:
    "Kanchipuram in 2 days — Kailasanathar, Ekambareswarar, Kamakshi Amman temples. Authentic Kanjivaram silk shopping guide. Day trip from Chennai.",
  keywords: [
    "kanchipuram itinerary 2 days",
    "kanchipuram temple guide 2026",
    "kanjivaram silk sari",
    "kailasanathar temple kanchipuram",
    "kanchipuram from chennai",
    "kanchipuram temples list",
    "best silk shop kanchipuram",
  ],
  openGraph: {
    title: "Kanchipuram 2-Day Itinerary 2026: Temples & Silk Guide",
    description:
      "Pallava temples, Chola history and original Kanjivaram silk — the complete Kanchipuram guide from Chennai.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1621427642928-21f0e1adaaac?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kailasanathar Temple Kanchipuram sandstone Pallava architecture",
      },
    ],
    type: "article",
    publishedTime: "2026-04-08T00:00:00Z",
    authors: ["Surya Pratap"],
    tags: ["Kanchipuram", "Tamil Nadu", "Temples", "Silk", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanchipuram 2-Day Itinerary 2026: Temples & Silk Guide",
    description:
      "Kailasanathar, Ekambareswarar, Kamakshi Amman — plus where to buy real Kanjivaram silk.",
    images: [
      "https://images.unsplash.com/photo-1621427642928-21f0e1adaaac?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kanchipuram-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id":
        "https://www.incredibleitinerary.com/blog/kanchipuram-2-days#article",
      headline:
        "Kanchipuram in 2 Days: Pallava Temples & Kanjivaram Silk (2026)",
      description:
        "Complete Kanchipuram travel guide — Kailasanathar Temple, Ekambareswarar, Kamakshi Amman, Varadaraja Perumal. Where to buy authentic Kanjivaram silk saris.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1621427642928-21f0e1adaaac?w=1200&q=80",
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
        "@id": "https://www.incredibleitinerary.com/blog/kanchipuram-2-days",
      },
      keywords:
        "Kanchipuram, Kailasanathar Temple, Kanjivaram silk, Pallava temples, Tamil Nadu temples",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 4800,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kanchipuram in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/kanchipuram-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kanchipuram, Tamil Nadu, India",
      description:
        "One of India's seven sacred cities — home to some of the oldest and finest Dravidian temples and the birthplace of the world-famous Kanjivaram silk sari.",
      url: "https://www.incredibleitinerary.com/blog/kanchipuram-2-days",
      touristType: [
        "Spiritual Tourism",
        "Cultural Tourism",
        "Heritage Tourism",
      ],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many days are enough for Kanchipuram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2 days is ideal — one day for the major temples (Kailasanathar, Ekambareswarar, Kamakshi Amman, Varadaraja Perumal) and one for silk shopping, smaller temples and Mahabalipuram. A single long day trip from Chennai covers the highlights but is rushed.",
      },
    },
    {
      "@type": "Question",
      name: "How to reach Kanchipuram from Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kanchipuram is 75km from Chennai. By bus: TNSTC buses from CMBT every 15–20 minutes, 2 hours, ₹60–₹100. By car: 1.5–2 hours via NH48. By train: limited trains to Kanchipuram station. Bus is the easiest option.",
      },
    },
    {
      "@type": "Question",
      name: "Where to buy authentic Kanjivaram silk saris?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Kanchipuram Silk Sarees Co-operative Society (government-backed, fixed prices), Nalli Silks (most trusted chain), and Sri Kumaran Silks are the safest options. Avoid small shops near temples. Authentic handloom Kanjivaram saris start at ₹3,000 and go up to ₹2,00,000+ for heavy zari work.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Kanchipuram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "November to February is the best time — comfortable temperatures (22–30°C). Avoid April–June when it gets brutally hot (38–42°C). The temples are open year-round. The annual Brahmotsavam festival at Varadaraja Perumal Temple (May) is spectacular but extremely hot.",
      },
    },
    {
      "@type": "Question",
      name: "How to identify real Kanjivaram silk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Authentic Kanjivaram silk has a GI tag and comes with a certification mark. The zari test: real zari (gold thread) will leave a reddish residue when burned, while fake zari melts like plastic. The silk should feel heavy and have a natural sheen. Government co-operative shops guarantee authenticity.",
      },
    },
  ],
};

export default function KanchipuramPage() {
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
      <KanchipuramClient />
    </>
  );
}
