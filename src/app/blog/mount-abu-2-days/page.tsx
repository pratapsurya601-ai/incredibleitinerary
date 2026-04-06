import type { Metadata } from "next";
import MountAbuClient from "./MountAbuClient";

export const metadata: Metadata = {
  title: "Mount Abu 2-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Mount Abu trip in 2 days. 2 complete Mount Abu plans — Budget and Comfortable — with real timings for Dilwara Jain Temples, Nakki Lake, Sunset.",
  keywords: [
    "mount abu itinerary 2 days",
    "mount abu travel guide 2026",
    "dilwara jain temples mount abu",
    "nakki lake mount abu",
    "guru shikhar rajasthan",
    "mount abu hill station",
    "achalgarh fort mount abu",
    "mount abu budget travel",
    "rajasthan hill station",
    "mount abu wildlife sanctuary",
  ],
  openGraph: {
    title: "Mount Abu 2-Day Itinerary 2026: Trip Planner",
    description:
      "Real timings, actual budgets, honest tips. 2 complete plans for Rajasthan's only hill station.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1609766856923-7e0a7a3b0908?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mount Abu hills and Dilwara temple architecture in Rajasthan",
      },
    ],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Mount Abu", "India", "Travel", "Itinerary", "Rajasthan", "Hill Station"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Abu 2-Day Itinerary 2026: Trip Planner",
    description: "2 plans, real timings, honest tips, actual costs.",
    images: ["https://images.unsplash.com/photo-1609766856923-7e0a7a3b0908?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mount-abu-2-days",
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/mount-abu-2-days#article",
      "headline": "Mount Abu in 2 Days: Dilwara Temples, Nakki Lake & Guru Shikhar Guide (2026)",
      "description": "2 complete Mount Abu plans — Budget and Comfortable — with real timings for Dilwara Jain Temples, Nakki Lake, Sunset Point, Guru Shikhar, and Achalgarh Fort.",
      "image": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1609766856923-7e0a7a3b0908?w=1200&q=80",
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-04-04T00:00:00Z",
      "dateModified": "2026-04-04T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "url": "https://www.incredibleitinerary.com",
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
        "@id": "https://www.incredibleitinerary.com/blog/mount-abu-2-days",
      },
      "keywords": "mount abu itinerary, dilwara temples, nakki lake, guru shikhar, achalgarh fort, rajasthan hill station",
      "articleSection": "Travel Guides",
      "inLanguage": "en-IN",
      "wordCount": 4800,
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mount Abu in 2 Days",
          "item": "https://www.incredibleitinerary.com/blog/mount-abu-2-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      "name": "Mount Abu, Rajasthan, India",
      "description": "Rajasthan's only hill station, home to the extraordinary Dilwara Jain Temples, Nakki Lake, and the highest peak in the Aravalli Range.",
      "url": "https://www.incredibleitinerary.com/blog/mount-abu-2-days",
      "touristType": ["Hill Station Tourism", "Cultural Tourism", "Religious Tourism", "Nature Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many days are enough for Mount Abu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "2 days is perfect for Mount Abu. Day 1 covers Dilwara Jain Temples, Nakki Lake, and Sunset Point. Day 2 covers Guru Shikhar, Achalgarh Fort, Trevor's Tank, and the Wildlife Sanctuary. 1 day is too rushed to see the Dilwara Temples properly, and 3 days means you'll run out of things to do.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time to visit Mount Abu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "October to March is the best time. November to February is peak season with temperatures between 10-25 degrees Celsius — perfect for sightseeing and trekking. Mount Abu is Rajasthan's only hill station and stays 15 degrees cooler than the plains. Monsoon (July-September) brings lush greenery but heavy fog and slippery trails. Avoid April-June only if you dislike warm weather, though it's still cooler than the rest of Rajasthan.",
          },
        },
        {
          "@type": "Question",
          "name": "How much does a 2-day Mount Abu trip cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Budget travellers can do 2 days in Mount Abu for under 5,000 rupees including guesthouse stays, local food, and entry fees. A comfortable trip costs 6,000-15,000 rupees with good hotels, sit-down restaurants, and private transport. Mount Abu is affordable compared to other Indian hill stations.",
          },
        },
        {
          "@type": "Question",
          "name": "Are the Dilwara Temples really worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Dilwara Jain Temples are widely considered the finest example of marble carving in India. The ceiling of Luna Vasahi temple features marble carved so thin it's almost translucent. Many visitors consider the detail more intricate than the Taj Mahal. Photography is not allowed inside. Allow 1.5-2 hours and visit in the morning for smaller crowds. Free entry.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I get to Mount Abu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The nearest railway station is Abu Road, 28 km downhill from Mount Abu town. Regular trains connect Abu Road to Ahmedabad (4 hours), Jaipur (8 hours), Jodhpur (5 hours), and Delhi (12 hours). From Abu Road, shared taxis to Mount Abu cost 50-80 rupees per person, private taxis cost 500-800 rupees. The drive up the ghat road takes 30-40 minutes. Direct buses from Udaipur (4 hours) and Ahmedabad (5 hours) also run daily.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Guru Shikhar and can anyone trek there?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Guru Shikhar at 1,722 metres is the highest peak in the Aravalli Range and the highest point in Rajasthan. It is not a difficult trek — you can drive most of the way and walk 300-400 steps to the summit. There is a small Dattatreya temple at the top. The 360-degree views of the Aravalli hills and plains are spectacular, especially at sunset. It is accessible for people of all fitness levels.",
          },
        },
      ],
};

export default function MountAbuBlogPage() {
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
      <MountAbuClient />
    </>
  );
}
