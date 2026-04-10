import type { Metadata } from "next";
import DublinClient from "./DublinClient";

export const metadata: Metadata = {
  title: "Dublin in 4 Days: Guinness, Temple Bar, Cliffs of Moher & Irish Culture (2026)",
  description: "4 complete Dublin plans: Book of Kells, Guinness Storehouse, Kilmainham Gaol, Howth cliff walk, Wicklow Mountains — with real euro costs, Irish visa advice for Indians, and pub tips only locals know.",
  keywords: ["dublin itinerary 4 days", "dublin travel guide 2026", "guinness storehouse", "temple bar dublin", "howth cliff walk", "ireland travel guide", "dublin budget travel"],
  openGraph: {
    title: "Dublin in 4 Days: Budget to Luxury 2026 Itinerary",
    description: "Book of Kells, Guinness Storehouse, Howth cliff walk, Wicklow Mountains — real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1548533893-59c99f22c3b2?w=1200&q=80", width: 1200, height: 630, alt: "Dublin Temple Bar Ireland" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Dublin in 4 Days (2026)", description: "Guinness Storehouse, Howth, Wicklow, real euro costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/dublin-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Dublin in 4 Days: Guinness, Temple Bar, Cliffs of Moher & Irish Culture (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1548533893-59c99f22c3b2?w=1200&q=80",
      description: "4 complete Dublin plans with Guinness Storehouse tips, Kilmainham Gaol booking secrets, Howth cliff walk details, and Irish visa advice for every passport.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Dublin 4 Days", item: "https://www.incredibleitinerary.com/blog/dublin-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Dublin, Ireland",
      description: "The capital of Ireland — home to Trinity College, the Guinness Storehouse, Kilmainham Gaol, and one of the great pub cultures in the world.",
      geo: { "@type": "GeoCoordinates", latitude: 53.3498, longitude: -6.2603 },
      touristType: ["Cultural tourists", "History buffs", "Food and drink lovers", "Nature walkers"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a separate visa for Ireland if I have a UK visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost certainly yes. Ireland is not part of the UK and not part of the Schengen Zone. A UK visa does not grant entry to Ireland for most nationalities. The British-Irish Visa Scheme (BIVS) allows certain nationalities with a valid UK visa to also enter Ireland, but check inis.gov.ie for the current country list.",
      },
    },
    {
      "@type": "Question",
      name: "Can I visit the Cliffs of Moher from Dublin in a day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Daily coach tours run from Dublin (approximately 4 hours each way), with 2–3 hours at the cliffs. Total cost: €45–60 per person including the visitor levy.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I drink Guinness in Dublin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Guinness Storehouse Gravity Bar is the experience. For the best daily pint: Mulligan's (Poolbeg Street, est. 1782), The Stag's Head (Dame Court), Kehoe's (South Anne Street), or Toner's (Baggot Street).",
      },
    },
  ],
};

export default function DublinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <DublinClient />
    </>
  );
}
