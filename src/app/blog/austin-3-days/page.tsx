import type { Metadata } from "next";
import AustinClient from "./AustinClient";

export const metadata: Metadata = {
  title: "Austin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
  description:
    "Plan your perfect 3-day Austin trip. Franklin Barbecue, Sixth Street live music, Barton Springs, the bat colony, and SoCo shopping — all budgets covered for 2026.",
  keywords: [
    "Austin travel guide",
    "Austin 3 days itinerary",
    "Austin Texas things to do",
    "Franklin Barbecue Austin",
    "Austin live music Sixth Street",
    "Barton Springs Pool Austin",
    "SXSW Austin",
    "Austin budget travel",
    "Austin visa ESTA",
    "Austin Texas food scene",
  ],
  openGraph: {
    title: "Austin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "The live music capital of the world — Franklin BBQ, Sixth Street, Barton Springs, 1.5 million bats at dusk, and the best tacos in America. Your complete 3-day guide.",
    type: "article",
    url: "https://incredibleitinerary.com/blog/austin-3-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Austin Texas Sixth Street live music district at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin in 3 Days: The Complete Travel Guide 2026",
    description: "Franklin BBQ, live music, bats at dusk, Barton Springs — your complete Austin, Texas itinerary.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/austin-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Austin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "The live music capital of the world — Franklin Barbecue, Sixth Street, Barton Springs Pool, the Congress Avenue bat colony, and SXSW. Your complete 3-day Austin guide.",
      image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&h=630&fit=crop",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/austin-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Austin 3 Days",
          item: "https://incredibleitinerary.com/blog/austin-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Austin",
      description:
        "The Live Music Capital of the World and home of Franklin Barbecue, Barton Springs Pool, South by Southwest (SXSW), and the largest urban bat colony in North America.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.2672,
        longitude: -97.7431,
      },
      touristType: ["Music lover", "Foodie", "Tech traveller", "Festival-goer"],
      includesAttraction: [
        { "@type": "TouristAttraction", name: "Franklin Barbecue" },
        { "@type": "TouristAttraction", name: "Sixth Street Entertainment District" },
        { "@type": "TouristAttraction", name: "Barton Springs Pool" },
        { "@type": "TouristAttraction", name: "Congress Avenue Bat Colony" },
        { "@type": "TouristAttraction", name: "Texas State Capitol" },
        { "@type": "TouristAttraction", name: "South Congress Avenue (SoCo)" },
      ],
    },
  ],
};

export default function AustinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AustinClient />
    </>
  );
}
