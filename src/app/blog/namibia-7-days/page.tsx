import type { Metadata } from "next";
import NamibiaClient from "./NamibiaClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Namibia 7-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Namibia trip in 7 days. Complete Namibia 7-day self-drive itinerary covering Sossusvlei, Deadvlei, Etosha National Park, Swakopmund, Fish River.",
  keywords: [
    "Namibia 7 day itinerary",
    "Namibia self-drive guide",
    "Sossusvlei sand dunes",
    "Deadvlei dead trees",
    "Etosha National Park safari",
    "Namibia travel guide 2026",
    "Namibia budget itinerary",
    "Fish River Canyon",
    "Swakopmund adventure",
    "Namibia visa Indian passport",
  ],
  openGraph: {
    title: "Namibia 7-Day Itinerary 2026: Trip Planner",
    description:
      "Climb the world's tallest sand dunes at dawn, stand among 900-year-old dead trees in Deadvlei, and watch lions at Etosha waterholes. Complete 7-day Namibia itinerary from $120/day.",
    url: "https://incredibleitinerary.com/blog/namibia-7-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/namibia-7-days.jpg",
        width: 1200,
        height: 630,
        alt: "Namibia Sossusvlei red sand dunes with dead trees in Deadvlei ancient lake",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namibia 7-Day Itinerary 2026: Trip Planner",
    description:
      "Complete Namibia self-drive itinerary from $120/day. Sossusvlei, Etosha, Swakopmund, Fish River Canyon — day-by-day plans for every budget.",
    images: ["https://incredibleitinerary.com/og/namibia-7-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/namibia-7-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Namibia in 7 Days: The Complete Self-Drive Guide (Budget to Luxury, 2026)",
    description:
      "Complete Namibia 7-day self-drive itinerary covering Sossusvlei, Etosha National Park, Swakopmund, and Fish River Canyon with budget to luxury plans.",
    image: "https://incredibleitinerary.com/og/namibia-7-days.jpg",
    datePublished: "2026-01-20",
    dateModified: "2026-04-01",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/namibia-7-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Namibia 7 Days", item: "https://incredibleitinerary.com/blog/namibia-7-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Namibia — Sossusvlei & Namib Desert",
    description:
      "Home to the world's oldest desert, the tallest sand dunes on Earth, and one of Africa's most spectacular self-drive safari destinations.",
    url: "https://incredibleitinerary.com/blog/namibia-7-days",
    touristType: ["Adventure Traveller", "Wildlife Enthusiast", "Photography Enthusiast"],
    geo: { "@type": "GeoCoordinates", latitude: -24.7419, longitude: 15.2663 },
    includesAttraction: [
      { "@type": "TouristAttraction", name: "Sossusvlei & Deadvlei" },
      { "@type": "TouristAttraction", name: "Etosha National Park" },
      { "@type": "TouristAttraction", name: "Fish River Canyon" },
      { "@type": "TouristAttraction", name: "Swakopmund" },
    ],
  },
];

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function NamibiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NamibiaClient />
    </>
  );
}
