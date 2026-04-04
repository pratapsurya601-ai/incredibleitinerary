import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Doha in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Plan the perfect 3 days in Doha, Qatar — Museum of Islamic Art, Souq Waqif, The Pearl, desert safaris, and the world's fastest-growing skyline. Budget ($90/day) to luxury ($500/day) itineraries inside.",
  keywords: [
    "Doha 3 days itinerary",
    "Doha travel guide 2026",
    "Qatar tourism",
    "Museum of Islamic Art Doha",
    "Souq Waqif",
    "The Pearl Qatar",
    "Doha budget travel",
    "Doha luxury hotels",
    "Qatar visa on arrival Indian",
    "Doha desert safari",
  ],
  openGraph: {
    title: "Doha in 3 Days: The Complete Travel Guide (2026)",
    description:
      "One of the world's newest mega-cities rising from a desert peninsula — Museum of Islamic Art, Souq Waqif, Corniche, and the fastest-growing skyline on Earth.",
    url: "https://incredibleitinerary.com/blog/doha-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?doha+qatar+skyline+corniche+west+bay+towers+night",
        width: 1200,
        height: 630,
        alt: "Doha Qatar skyline West Bay skyscrapers reflected in Corniche waterfront at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doha in 3 Days: The Complete Travel Guide (2026)",
    description:
      "Museum of Islamic Art, Souq Waqif, The Pearl, and a desert safari — all in 3 days in Doha, Qatar.",
    images: [
      "https://source.unsplash.com/1200x630/?doha+qatar+skyline+corniche+west+bay+towers+night",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/doha-3-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Doha in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Plan the perfect 3 days in Doha, Qatar — from the Museum of Islamic Art to Souq Waqif and a desert safari.",
    image:
      "https://source.unsplash.com/1200x630/?doha+qatar+skyline+corniche+west+bay+towers+night",
    datePublished: "2026-04-05T00:00:00Z",
    dateModified: "2026-04-05T00:00:00Z",
    author: { "@type": "Organization", name: "IncredibleItinerary" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: {
        "@type": "ImageObject",
        url: "https://incredibleitinerary.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://incredibleitinerary.com/blog/doha-3-days",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Doha 3 Days", item: "https://incredibleitinerary.com/blog/doha-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Doha",
    description:
      "The capital of Qatar — one of the world's newest mega-cities with a world-class museum, restored ancient souq, and the fastest-growing skyline on Earth.",
    geo: { "@type": "GeoCoordinates", latitude: 25.2854, longitude: 51.531 },
    touristType: "Culture, Luxury, Architecture, History",
    url: "https://incredibleitinerary.com/blog/doha-3-days",
  },
];

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Doha",
  country: "Qatar",
  countryFlag: "🇶🇦",
  slug: "doha-3-days",
  heroQuery: "doha qatar skyline corniche west bay towers night",
  heroAlt: "Doha Qatar skyline West Bay skyscrapers reflected in Corniche waterfront at night",
  category: "Middle East",
  date: "April 5, 2026",
  readTime: "14 min read",

  intro:
    "Doha is one of the world's newest mega-cities — a skyline of twisting glass towers rising from a desert peninsula that was a fishing village in the 1970s. The Museum of Islamic Art sits on its own island like a textbook of 14 centuries of civilisation, the National Museum of Qatar spirals like a desert rose, Souq Waqif thrums with falcon sellers and spice merchants until midnight, and the fastest-growing skyline on Earth reflects in the Corniche at dawn. This is Qatar's remarkable, breathtaking, slightly surreal transformation — and three days is just enough to feel it.",

  stats: {
    duration: "3 Days",
    budgetFrom: "$90",
    bestMonths: "Nov–Apr (cool season)",
    airport: "DOH (Hamad International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Choose Your Plan" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "getting-around", emoji: "🚌", label: "Getting Around" },
    { id: "affiliate", emoji: "🎟️", label: "Book Tours & Activities" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Type", "Visa on Arrival at Doha airport"],
        ["Cost", "$30 (approximately)"],
        ["Duration", "30 days, extendable"],
        ["eVisa", "Available online at evisa.moi.gov.qa"],
        ["Processing", "On arrival — fast, usually under 20 minutes"],
        ["Note", "Very straightforward; Qatar actively courts Indian tourists"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Type", "Visa-free entry"],
        ["Duration", "30–180 days depending on nationality"],
        ["US / UK", "Up to 180 days"],
        ["EU / AU", "Typically 30 days, extendable"],
        ["Requirement", "Passport valid 6+ months; return ticket"],
        ["Note", "Qatar is one of the most open Gulf states for Western travellers"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$90/day",
      days: [
        {
          day: "Day 1",
          title: "Corniche, MIA & Souq Waqif",
          items: [
            "Morning: Walk the 7km Corniche promenade — best skyline views, free",
            "Museum of Islamic Art (MIA) — I.M. Pei masterpiece, free entry, world-class Islamic art collection",
            "Lunch: Shawarma or Pakistani rice plate near Souq Waqif (~$4–6)",
            "Afternoon: Explore Souq Waqif on foot — spice alley, falcon market, traditional dress shops",
            "Evening: Dhow boat cruise from Souq Waqif waterfront (~$10–15 pp)",
            "Dinner: Al Shami restaurant in Souq Waqif — Lebanese mezze (~$10–15)",
            "Night: Coffee and shisha at a Souq Waqif café",
          ],
          cost: "~$90 total (incl. hostel ~$25, meals ~$25, transport Metro ~$5, boat cruise ~$15, MIA free)",
        },
        {
          day: "Day 2",
          title: "The Pearl & Katara Cultural Village",
          items: [
            "Morning: Metro to The Pearl artificial island — walk the boardwalk, see the yachts and luxury towers",
            "Coffee at a Pearl café with marina views (~$5)",
            "Lunch: Filipino or Indian restaurant on The Pearl (~$8–12)",
            "Afternoon: Katara Cultural Village — open-air arts district, free beach, amphitheatre, mosques",
            "Explore Katara Beach (free access during off-peak hours)",
            "Evening: Villaggio Mall if you want AC and a gondola ride through a fake Venice",
            "Dinner: Food court at Villaggio or budget Indian restaurant (~$8)",
          ],
          cost: "~$85 total (Metro $3, meals $25, coffee $5, Katara free, accommodation $25)",
        },
        {
          day: "Day 3",
          title: "National Museum + Desert Safari",
          items: [
            "Morning: National Museum of Qatar — Jean Nouvel's desert rose architecture alone is worth it ($14 entry)",
            "Browse the permanent collection on Qatar's history, pearl diving, Bedouin life",
            "Lunch: Light meal at museum café (~$10)",
            "Afternoon: Budget desert safari — dune bashing, camel ride, sandboarding (~$40–50 group tour from Souq Waqif)",
            "Watch sunset from the dunes",
            "Evening: Return to Doha, final dinner at Souq Waqif",
            "Night walk along Corniche for goodbye skyline views",
          ],
          cost: "~$110 total (museum $14, desert safari $45, meals $20, transport $6, accommodation $25)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$200/day",
      days: [
        {
          day: "Day 1",
          title: "Corniche, MIA & Souq Waqif (Comfortable)",
          items: [
            "Check into 4-star hotel near West Bay or Souq Waqif (~$80–100/night)",
            "Morning: Corniche walk + MIA (free entry) — spend 2 hours properly",
            "Lunch: Automatic Restaurant in Souq Waqif — solid Lebanese (~$20–25 pp)",
            "Afternoon: Guided Souq Waqif walking tour with falcon show ($30)",
            "Pre-dinner drinks: rooftop bar with skyline views at a West Bay hotel",
            "Evening: Private or small-group dhow dinner cruise (~$45–60 pp)",
            "Dinner included on dhow cruise with buffet and entertainment",
          ],
          cost: "~$200 total (hotel $90, meals $50, activities $60)",
        },
        {
          day: "Day 2",
          title: "The Pearl, Katara & Lusail City",
          items: [
            "Morning: Taxi to The Pearl — leisurely exploration, Qanat Quartier canals",
            "Coffee at Tim Hortons or Starbucks Pearl (~$6)",
            "Lunch: Seafood at one of The Pearl's waterfront restaurants (~$30–40)",
            "Afternoon: Katara Cultural Village — visit the gallery, see the stunning mosque",
            "Drive through Lusail City — Qatar's planned future city, built for World Cup",
            "Pass by Lusail Stadium (largest 2022 FIFA World Cup venue)",
            "Evening: West Bay skyline walk + dinner at a nice hotel restaurant (~$40)",
          ],
          cost: "~$210 total (hotel $90, meals $90, transport taxi $20, activities $10)",
        },
        {
          day: "Day 3",
          title: "National Museum + Premium Desert Safari",
          items: [
            "Morning: National Museum of Qatar with audio guide — 2–3 hours minimum",
            "Lunch: Parisa restaurant or similar — Persian fine casual (~$30)",
            "Afternoon: Private 4WD desert safari — dune bashing, camel ride, traditional Arabic coffee ceremony, falconry (~$80–100 private)",
            "Sunset from the dunes — unforgettable",
            "Evening: Return to Doha; farewell dinner at restaurant with skyline view",
            "Optional: visit a World Cup stadium on the way back",
          ],
          cost: "~$220 total (hotel $90, meals $60, desert safari $90, transport $20)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$500/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival in Style — Souq Waqif & MIA",
          items: [
            "Check into St. Regis Doha, Four Seasons, or Raffles Doha (~$350–600/night) with Butler Service",
            "Morning: Private museum tour of MIA with an art historian guide ($120)",
            "Lunch: Idam by Alain Ducasse at MIA — Michelin-starred with museum and bay views (~$80–120)",
            "Afternoon: Private Souq Waqif tour including visit to falcon hospital with expert guide",
            "Sunset: Cocktails at a West Bay rooftop or hotel sky bar",
            "Evening: Dinner at Al Mourjan at Banyan Tree — exceptional seafood and view (~$100+)",
            "Night: Corniche waterfront stroll with hotel car on standby",
          ],
          cost: "~$700 total (hotel $400, fine dining $200, private tours $100)",
        },
        {
          day: "Day 2",
          title: "The Pearl, Katara & Exclusive Experiences",
          items: [
            "Morning: Private yacht charter from The Pearl (half-day, ~$400–600 for group)",
            "Sail the bay, swim, see Doha's skyline from the water",
            "Lunch: Nobu Doha at the W Hotel — Japanese-Peruvian fusion (~$80–120)",
            "Afternoon: Private Katara Cultural Village tour + Qatar Museums VIP access",
            "Visit the Museum of Illusions or attend a cultural performance",
            "Evening: St. Regis butler prepares in-suite dining experience",
            "Or dinner at Spice Market or Cielo Sky Lounge",
          ],
          cost: "~$900 total (hotel $400, yacht $500 split, fine dining $150, activities $80)",
        },
        {
          day: "Day 3",
          title: "Private Desert Luxury + National Museum",
          items: [
            "Morning: Private guide at National Museum of Qatar — behind-the-scenes curator access",
            "Lunch: Museum restaurant with champagne and premium mezze",
            "Afternoon: Luxury private desert camp — helicopter transfer to desert camp, private camel parade, traditional Bedouin feast under the stars ($400–600)",
            "Traditional Arabic ceremonies: coffee, dates, incense, falconry",
            "Sunset dinner in the dunes with white-glove service",
            "Return: private transfer to hotel for final night spa treatment",
          ],
          cost: "~$1,200 total (hotel $400, helicopter desert camp $600, museum $14, meals $150)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$20–30 (hostel/budget hotel)",
      food: "$20–30",
      transport: "$5–10 (Metro)",
      activities: "$15–30",
      total: "~$90/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–120 (4-star)",
      food: "$50–80",
      transport: "$15–25 (taxi)",
      activities: "$50–80",
      total: "~$200/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–600 (St Regis / Four Seasons)",
      food: "$150–250",
      transport: "$50–100 (private car)",
      activities: "$100–300",
      total: "~$500–700/day",
    },
    {
      tier: "🎯 Day Tripper",
      accommodation: "N/A (transit hotel)",
      food: "$15–20",
      transport: "$20 (airport taxi)",
      activities: "$30–50",
      total: "~$80/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "$120–200 (suite / 2 rooms)",
      food: "$60–100",
      transport: "$20–40",
      activities: "$60–100",
      total: "~$250/day",
    },
  ],

  mistakes: [
    {
      icon: "☀️",
      title: "Visiting in June–September (peak summer heat)",
      desc: "Doha in summer is brutal — 45°C+ with near-100% humidity. Everything is outdoors. Unless you enjoy living between malls and hotel rooms, stick to November–April when it's genuinely pleasant (20–28°C).",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "👗",
      title: "Ignoring dress codes in traditional areas",
      desc: "Souq Waqif, mosques, and the Katara Cultural Village expect modest dress. Shoulders and knees should be covered — women especially. Qatar is tolerant but a respectful approach makes the experience far richer.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍺",
      title: "Expecting to drink alcohol freely",
      desc: "Alcohol is available at licensed hotel bars and some restaurants but is expensive ($15–25 per drink) and not publicly available. Don't arrive expecting a bar-hopping holiday — Doha's nightlife is hotel-based.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚕",
      title: "Ignoring the Metro (it's excellent)",
      desc: "Doha's Metro is modern, air-conditioned, cheap, and connects all major attractions. Many tourists pay for expensive taxis unnecessarily. The Metro reaches the Museum of Islamic Art, Souq Waqif, The Pearl, and Hamad airport.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📸",
      title: "Photographing people or government buildings without permission",
      desc: "Photography is generally fine in tourist areas, but photographing local women without consent or government buildings can cause serious issues. Always ask before photographing people in the souq.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🕌",
      title: "Visit MIA on a weekday morning — it's almost empty",
      desc: "The Museum of Islamic Art is free and one of the most important collections of its kind in the world. On Thursday or Friday evenings it fills with locals. Go Tuesday or Wednesday at 9am and you'll have the building to yourself.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🦅",
      title: "Book the Souq Waqif falcon hospital visit",
      desc: "Qatar is the falconry capital of the world. The Souq Waqif falcon hospital offers guided tours where you can hold a falcon, watch veterinary care, and understand this 4,000-year-old tradition. One of Doha's most memorable hours.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌅",
      title: "Corniche at dawn beats Corniche at any other time",
      desc: "The West Bay skyline reflects perfectly in the Corniche at first light — pink, gold, and glass. It's 20°C, there are almost no people, and the view is the one on every Qatar tourism poster. Set your alarm.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🏟️",
      title: "Add a FIFA World Cup stadium tour if you're a football fan",
      desc: "Qatar's 8 World Cup stadiums are extraordinary engineering — especially Lusail Stadium and Al Bayt. Stadium tours run daily (~$15–25). If you're any kind of football fan, this is an unmissable detour.",
      color: "bg-teal-50 border-teal-200",
    },
  ],

  faqs: [
    {
      q: "Is Doha safe for tourists?",
      a: "Qatar is one of the safest countries in the world for tourists — violent crime is virtually nonexistent, the infrastructure is world-class, and the government invests heavily in the visitor experience. Solo female travellers report feeling very comfortable.",
    },
    {
      q: "Can I visit Doha as a stopover from Qatar Airways?",
      a: "Yes — Qatar Airways offers a free or discounted 'Doha Stopover' programme for passengers transiting through Hamad International Airport. You can get a free hotel night and guided tour if your layover is long enough. It's one of the world's best transit deals.",
    },
    {
      q: "What currency does Qatar use?",
      a: "The Qatari Riyal (QAR). 1 USD ≈ 3.64 QAR (pegged rate — very stable). Cards are accepted almost everywhere in Doha; cash is useful for small souq purchases and tips.",
    },
    {
      q: "Is the Museum of Islamic Art really free?",
      a: "Yes — permanent collection entry is completely free. Temporary exhibitions may charge a small fee. The building, the architecture, the views of the bay, and the permanent collection of Islamic art spanning 14 centuries are all free.",
    },
  ],

  combineWith: ["dubai-5-days", "abu-dhabi-3-days", "oman-7-days", "jordan-5-days"],
  relatedSlugs: ["dubai-5-days", "abu-dhabi-3-days", "tbilisi-4-days", "jordan-5-days"],
  galleryQuery: "doha qatar museum islamic art souq waqif pearl skyline",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function DohaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
