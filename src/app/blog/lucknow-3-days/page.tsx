import type { Metadata } from "next";
import LucknowClient from "./LucknowClient";

export const metadata: Metadata = {
  title: "Lucknow in 3 Days: Nawabi Heritage, Kebabs & City of Nawabs Guide (2026)",
  description:
    "3-day Lucknow itinerary — Bara Imambara bhul-bhulaiya, Chota Imambara, Tunday Kababi galawati kebab, Hazratganj, Lucknow Zoo, best hotels and travel tips for 2026.",
  keywords: [
    "lucknow travel guide",
    "bara imambara lucknow",
    "lucknow itinerary 3 days",
    "tunday kababi lucknow",
    "lucknow nawab food guide 2026",
  ],
  openGraph: {
    title: "Lucknow in 3 Days: Nawabi Heritage, Kebabs & City of Nawabs Guide (2026)",
    description:
      "3-day Lucknow itinerary — Bara Imambara bhul-bhulaiya, Chota Imambara, Tunday Kababi galawati kebab, Hazratganj, Lucknow Zoo, best hotels and travel tips for 2026.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590253230532-a67f5527a593?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bara Imambara Lucknow grand entrance",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Lucknow", "India", "Travel", "Itinerary", "Uttar Pradesh", "Nawabs"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucknow in 3 Days: Nawabi Heritage, Kebabs & City of Nawabs Guide (2026)",
    description:
      "Bara Imambara labyrinth, galawati kebabs, chikan embroidery, budget breakdown for 3 days.",
    images: [
      "https://images.unsplash.com/photo-1590253230532-a67f5527a593?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/lucknow-3-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/lucknow-3-days#article",
      headline:
        "Lucknow in 3 Days: Nawabi Heritage, Kebabs & City of Nawabs Guide (2026)",
      description:
        "3-day Lucknow itinerary — Bara Imambara bhul-bhulaiya, Chota Imambara, Tunday Kababi galawati kebab, Hazratganj, Lucknow Zoo, best hotels and travel tips for 2026.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1590253230532-a67f5527a593?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-07T00:00:00Z",
      dateModified: "2026-04-07T00:00:00Z",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
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
        "@id": "https://www.incredibleitinerary.com/blog/lucknow-3-days",
      },
      keywords:
        "lucknow travel guide, bara imambara lucknow, lucknow itinerary 3 days, tunday kababi lucknow, lucknow nawab food guide 2026",
      articleSection: "Travel Guides",
      inLanguage: "en-IN",
      wordCount: 4200,
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
          name: "Lucknow in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/lucknow-3-days",
        },
      ],
    },
  ],
};

// FAQPage schema — separate block
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is 3 days enough for Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3 days covers the major monuments, a food tour, and some shopping. If you're deeply interested in Mughal history or the 1857 uprising, add a 4th day for the Residency and Dilkusha Kothi in detail.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best area to stay in Lucknow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hazratganj for shopping and eating (central, safe, well-lit). Old City (near Aminabad) for authentic atmosphere but noisier. Hotels near Charbagh station for early departures.",
      },
    },
    {
      "@type": "Question",
      name: "Is Lucknow safe for solo women travelers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lucknow is one of UP's safest cities for travelers. Hazratganj and the monument areas have good police presence. Standard precautions apply — avoid deserted lanes after 10 PM.",
      },
    },
    {
      "@type": "Question",
      name: "What is Awadhi cuisine and where should I eat it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Awadhi cooking uses the 'dum' technique — slow-cooking in sealed pots. Signature dishes: galawati kebab (melt-in-mouth texture), nihari (slow-stewed mutton), sheermal (sweet bread), and biryani. Best restaurants: Tunday Kababi, Dastarkhwan, Wahid Biryani.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do a day trip from Lucknow to Ayodhya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Ayodhya is 130 km (2 hrs by road or 45 min by train). It's manageable as a day trip from Lucknow, leaving by 7 AM and returning by 9 PM. But Ayodhya deserves an overnight stay for the morning darshan and Saryu ghat aarti.",
      },
    },
  ],
};

export default function LucknowBlogPage() {
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
      <LucknowClient />
    </>
  );
}
