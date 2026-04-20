import type { Metadata } from "next";
import NewOrleansClient from "./NewOrleansClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "New Orleans 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your New Orleans trip in 4 days. Plan the perfect 4-day New Orleans itinerary — French Quarter, Frenchmen Street jazz, beignets at Café Du Monde,.",
  keywords: [
    "New Orleans travel guide",
    "New Orleans itinerary 4 days",
    "French Quarter New Orleans",
    "Frenchmen Street jazz",
    "Cafe du Monde beignets",
    "New Orleans budget travel",
    "Mardi Gras New Orleans",
    "Commander's Palace restaurant",
    "New Orleans swamp tour",
    "Garden District mansions",
    "ESTA visa USA",
    "US B1/B2 tourist visa",
    "Louisiana travel guide",
  ],
  openGraph: {
    title: "New Orleans 4-Day Itinerary 2026: Trip Planner",
    description:
      "Jazz at 11am, free beignets at Café Du Monde, second-line parades, and ghost tours in America's most haunted city. Full itinerary from $80/day.",
    url: "https://incredibleitinerary.com/blog/new-orleans-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?new-orleans,french-quarter,jazz",
        width: 1200,
        height: 630,
        alt: "New Orleans French Quarter with jazz clubs colorful buildings Bourbon Street",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Orleans 4-Day Itinerary 2026: Trip Planner",
    description:
      "Bourbon Street, Frenchmen Street jazz, beignets and ghost tours — New Orleans defies every rule of American cities. Full guide from $80/day.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/new-orleans-4-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "New Orleans in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day New Orleans itinerary covering the French Quarter, Frenchmen Street, Café Du Monde, Garden District, swamp tours and the best food in America — with plans from $80 to $350 per day.",
      image: "https://source.unsplash.com/1200x630/?new-orleans,french-quarter,jazz",
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/new-orleans-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "New Orleans 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/new-orleans-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "New Orleans",
      description:
        "A vibrant Louisiana city famous for jazz music, Creole and Cajun cuisine, Mardi Gras, the historic French Quarter, and a culture unlike anywhere else in the United States.",
      url: "https://incredibleitinerary.com/blog/new-orleans-4-days",
      touristType: ["Music", "Food & Drink", "Culture", "History", "Festivals"],
      geo: { "@type": "GeoCoordinates", latitude: 29.9511, longitude: -90.0715 },
    },
  ],
};

/* ── Page component ────────────────────────────────────────────────────── */
export default function NewOrleansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewOrleansClient />
    </>
  );
}
