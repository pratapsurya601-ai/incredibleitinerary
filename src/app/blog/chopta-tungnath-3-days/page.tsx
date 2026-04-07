import type { Metadata } from "next";
import ChoptaClient from "./ChoptaClient";

export const metadata: Metadata = {
  title: "Chopta & Tungnath 3 Days: Highest Shiva Temple Trek (Complete Guide)",
  description:
    "Complete 3-day Chopta and Tungnath itinerary — Tungnath temple (3,680m), Chandrashila summit (4,130m), Deoria Tal reflection lake, Kanchula Korak musk deer sanctuary. Budget from ₹1,500/day.",
  keywords: [
    "chopta tungnath trek guide",
    "chopta 3 days itinerary",
    "tungnath temple highest shiva temple",
    "chandrashila summit trek",
    "deoria tal reflection lake",
    "chopta uttarakhand travel guide",
    "kanchula korak musk deer",
    "chopta best time to visit",
    "tungnath trek difficulty",
    "uttarakhand himalaya trekking",
  ],
  openGraph: {
    title: "Chopta & Tungnath 3 Days: Highest Shiva Temple Trek (Complete Guide)",
    description:
      "Trek to the world's highest Shiva temple at 3,680m, summit Chandrashila at 4,130m, Deoria Tal reflection. Real costs, snow guide, acclimatization tips.",
    images: [
      {
        url: "/images/blog/tungnath-temple-snow.jpg",
        width: 1200,
        height: 630,
        alt: "Tungnath temple in snow with Himalayan peaks Chopta Uttarakhand",
      },
    ],
    type: "article",
    publishedTime: "2026-04-07T00:00:00Z",
    authors: ["https://www.incredibleitinerary.com/about"],
    tags: ["Chopta", "Tungnath", "Uttarakhand", "India", "Trekking", "Himalaya", "Temples"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chopta & Tungnath 3 Days: Highest Shiva Temple Trek (Complete Guide)",
    description: "World's highest Shiva temple, Chandrashila 360° views, Deoria Tal mirror lake. 3-day Chopta guide.",
    images: ["/images/blog/tungnath-temple-snow.jpg"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/chopta-tungnath-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/chopta-tungnath-3-days#article",
      "headline": "Chopta & Tungnath 3 Days: Highest Shiva Temple Trek (Complete Guide)",
      "description": "Complete 3-day Chopta and Tungnath itinerary — world's highest Shiva temple at 3,680m, Chandrashila 4,130m, Deoria Tal, Kanchula Korak. Budget from ₹1,500/day.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.incredibleitinerary.com/images/blog/tungnath-temple-snow.jpg",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-07T00:00:00Z",
      "dateModified": "2026-04-07T00:00:00Z",
      "author": {
        "@type": "Person",
        "name": "Surya Pratap",
        "url": "https://www.incredibleitinerary.com/about",
      },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.incredibleitinerary.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.incredibleitinerary.com/blog/chopta-tungnath-3-days",
      },
      "keywords": "chopta tungnath trek, tungnath temple altitude, chandrashila summit, deoria tal lake, chopta uttarakhand, himalaya trekking guide",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 5100,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Chopta Tungnath 3 Days", "item": "https://www.incredibleitinerary.com/blog/chopta-tungnath-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Chopta, Uttarakhand, India",
      "description": "Uttarakhand's most accessible high-altitude meadow at 2,700m. Base for the Tungnath–Chandrashila trek, Deoria Tal reflection lake, and Kanchula Korak musk deer sanctuary.",
      "url": "https://www.incredibleitinerary.com/blog/chopta-tungnath-3-days",
      "touristType": ["Trekking", "Spiritual Tourism", "Nature Tourism", "Photography"],
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How difficult is the Tungnath trek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Tungnath trek from Chopta is easy to moderate — 3.5km each way with 1,000m elevation gain on a well-maintained path. Most people complete the round trip in 4–5 hours. The additional 1km to Chandrashila summit (4,130m) is steeper. Start by 6:30am to reach the summit before afternoon clouds close in.",
      },
    },
    {
      "@type": "Question",
      "name": "When does the Chopta road open after winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Chopta road typically opens in the 3rd week of April, after heavy winter snowfall clears. The exact date varies yearly — check with local operators before visiting. Snow is present on the Chandrashila trail until late May and can be trekked with microspikes.",
      },
    },
    {
      "@type": "Question",
      "name": "Is altitude sickness a concern at Chopta and Tungnath?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chopta at 2,700m and Chandrashila at 4,130m can cause altitude sickness if you ascend too fast from Delhi (200m). The standard advice is to spend at least one night at Chopta before the Tungnath trek. Walk slowly, stay hydrated, and descend immediately if you develop severe headache or nausea.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the best time to visit Chopta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "April to June and September to November are the best times. April–May has rhododendron bloom and possible snow trek with microspikes. June is green meadows. October is the clearest sky of the year with superb Himalayan views. Avoid November–March when the road is closed due to snowfall.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I reach Chopta from Rishikesh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chopta is 200km from Rishikesh — approximately 6–7 hours by car via Ukhimath. The route goes Rishikesh → Devprayag → Srinagar → Rudraprayag → Ukhimath → Chopta. There is no direct bus — hire a private taxi or take a bus to Ukhimath and arrange local transport from there.",
      },
    },
  ],
};

export default function ChoptaTungnathBlogPage() {
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
      <ChoptaClient />
    </>
  );
}
