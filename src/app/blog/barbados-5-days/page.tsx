import type { Metadata } from "next";
import BarbadosClient from "./BarbadosClient";

export const metadata: Metadata = {
  title: "Barbados in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
  description:
    "Plan your perfect 5-day Barbados trip. Flying fish at Oistins, sea turtles at Payne's Bay, Mount Gay Rum, Harrison's Cave, Crane Beach — all budgets covered.",
  keywords: [
    "Barbados travel guide",
    "Barbados 5 days itinerary",
    "Barbados Caribbean",
    "Oistins Fish Fry",
    "Mount Gay Rum distillery",
    "Harrison's Cave Barbados",
    "Crane Beach Barbados",
    "Barbados visa Indian passport",
    "Platinum Coast beaches",
    "Barbados budget travel",
  ],
  openGraph: {
    title: "Barbados in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "The most civilized island in the Caribbean — flying fish, sea turtles, the world's oldest rum, and west coast beaches that defy description. Your complete 5-day guide.",
    type: "article",
    url: "https://incredibleitinerary.com/blog/barbados-5-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1548574505-5e239809f769?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Barbados west coast beach with turquoise Caribbean water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbados in 5 Days: The Complete Travel Guide 2026",
    description: "Flying fish, sea turtles, the world's oldest rum — your complete Barbados itinerary for every budget.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/barbados-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Barbados in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Flying fish, sea turtles, the world's oldest rum distillery, Crane Beach, and the legendary Oistins Fish Fry. Your complete 5-day Barbados guide from budget to Sandy Lane luxury.",
      image: "https://images.unsplash.com/photo-1548574505-5e239809f769?w=1200&h=630&fit=crop",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/barbados-5-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Barbados 5 Days",
          item: "https://incredibleitinerary.com/blog/barbados-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Barbados",
      description:
        "The most easterly Caribbean island, known for its calm west coast beaches, world-class rum production, flying fish cuisine, cricket culture, and welcoming Bajan hospitality.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.1939,
        longitude: -59.5432,
      },
      touristType: ["Beach traveller", "Rum tourist", "Cultural traveller", "Luxury traveller"],
      includesAttraction: [
        { "@type": "TouristAttraction", name: "Oistins Fish Fry" },
        { "@type": "TouristAttraction", name: "Mount Gay Rum Distillery" },
        { "@type": "TouristAttraction", name: "Harrison's Cave" },
        { "@type": "TouristAttraction", name: "Crane Beach" },
        { "@type": "TouristAttraction", name: "St Nicholas Abbey" },
        { "@type": "TouristAttraction", name: "Animal Flower Cave" },
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
      name: "Do Indian passport holders need a visa for Barbados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Indian passport holders require a visa to enter Barbados. Apply through the Barbados High Commission in New Delhi or the online visa portal. The fee is approximately $50 USD and processing takes 5–10 business days. Apply at least 3 weeks before travel.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to visit Barbados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "December to May is the dry season — warm, sunny, and the ideal time to visit. The Crop Over Festival in July–August is worth building a trip around despite the hurricane season. Avoid August–October without comprehensive travel insurance.",
      },
    },
    {
      "@type": "Question",
      name: "Is Barbados expensive compared to other Caribbean islands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Barbados is mid-to-high range. Budget travellers using public buses and eating locally can manage on $100 USD/day. Mid-range with a west coast hotel runs $220–350/day. The luxury tier is among the most expensive in the Caribbean.",
      },
    },
    {
      "@type": "Question",
      name: "Can you swim with sea turtles in Barbados for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hawksbill sea turtles feed at Payne's Bay on the west coast every morning. Swim out 50 metres with a mask and fins — no tour needed. Go between 8–10am before tour boats arrive.",
      },
    },
  ],
};

export default function BarbadosPage() {
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
      <BarbadosClient />
    </>
  );
}
