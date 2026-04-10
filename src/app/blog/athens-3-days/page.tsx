import type { Metadata } from "next";
import AthensClient from "./AthensClient";

export const metadata: Metadata = {
  title: "Athens in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Athens plans with Acropolis timing secrets, real costs in euros, combined ticket guide, and the rooftop bars with Parthenon views nobody tells you about.",
  keywords: ["athens itinerary 3 days", "athens travel guide 2026", "acropolis guide", "athens budget travel", "greece travel guide", "athens things to do"],
  openGraph: { title: "Athens in 3 Days: Budget to Luxury 2026", description: "Acropolis timing secrets, real euro costs, rooftop bar guide.", images: [{ url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80", width: 1200, height: 630, alt: "Athens Acropolis Parthenon Greece" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Athens in 3 Days (2026)", description: "3 plans, Acropolis timing secrets, real euro costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/athens-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Athens in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Athens 3 Days", item: "https://www.incredibleitinerary.com/blog/athens-3-days" }] },
    { "@type": "TouristDestination", name: "Athens, Greece", description: "The cradle of Western civilization, home to the Acropolis, Parthenon, and ancient Agora." },
  ],
};

export default function AthensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AthensClient />
    </>
  );
}
