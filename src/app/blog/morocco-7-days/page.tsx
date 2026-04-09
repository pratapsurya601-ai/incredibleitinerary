import type { Metadata } from "next";
import MoroccoClient from "./MoroccoClient";

export const metadata: Metadata = {
  title: "Morocco in 7 Days: Marrakech, Fes, Sahara Desert & Chefchaouen (2026)",
  description:
    "Complete Morocco 7-day itinerary covering Djemaa el-Fna, Fes medina, Sahara camel rides, and the blue city of Chefchaouen — with real costs from $35/day to luxury.",
  keywords: [
    "morocco itinerary 7 days",
    "morocco travel guide 2026",
    "marrakech guide",
    "fes medina travel",
    "sahara desert merzouga",
    "chefchaouen blue city",
    "morocco budget travel",
  ],
  openGraph: {
    title: "Morocco in 7 Days: Marrakech, Fes, Sahara & Chefchaouen (2026)",
    description:
      "Djemaa el-Fna at dusk, Fes medina tanneries, Sahara stars, and the blue city — all covered with real costs for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Camel caravan crossing Sahara Desert dunes at sunset in Merzouga Morocco",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morocco in 7 Days (2026)",
    description:
      "Marrakech, Fes, Sahara Desert, Chefchaouen — complete itinerary from $35/day to luxury riads.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/morocco-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Morocco in 7 Days: Marrakech, Fes, Sahara Desert & Chefchaouen (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
      description:
        "Complete 7-day Morocco itinerary: Djemaa el-Fna, Fes medina, Sahara Desert, Chefchaouen blue city — with real costs from $35/day.",
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
          name: "Morocco 7 Days",
          item: "https://www.incredibleitinerary.com/blog/morocco-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Morocco",
      description:
        "A North African kingdom of ancient medinas, Sahara dunes, and painted blue cities — one of the world's great travel destinations.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.7917,
        longitude: -7.0926,
      },
      touristType: [
        "Culture travellers",
        "Adventure seekers",
        "Photography enthusiasts",
        "Budget backpackers",
        "Luxury travellers",
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
      name: "Is Morocco safe for tourists in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morocco is generally safe for tourists with standard street awareness. Primary concerns are petty theft in crowded souks and unofficial guides. The crime rate against tourists involving violence is very low.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best 7-day route for first-time visitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The classic route: Marrakech (2 nights), Fes (2 nights), Merzouga Sahara (1 night), Chefchaouen (1 night), departure from Tangier or Fes.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Sahara desert worth the long journey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Erg Chebbi dunes at Merzouga are the real Sahara: 150m-tall dune fields. The overnight desert camp under the stars is consistently rated the single most memorable night of a Morocco trip.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a visa for Morocco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indian passport holders need an e-Visa ($30, apply online). Citizens of the EU, USA, UK, Canada, Australia and most Western nations enter visa-free for up to 90 days.",
      },
    },
  ],
};

export default function MoroccoPage() {
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
      <MoroccoClient />
    </>
  );
}
