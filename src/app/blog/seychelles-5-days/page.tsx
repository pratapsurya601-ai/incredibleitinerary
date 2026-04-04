import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Page metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Seychelles in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
  description:
    "Plan the perfect 5-day Seychelles itinerary — from Anse Source d'Argent granite boulders to Vallée de Mai's prehistoric palm forest. Budget $200/day to luxury Six Senses. Visa info, day-by-day plans, costs, and insider tips.",
  keywords: [
    "Seychelles travel guide",
    "Seychelles 5 days itinerary",
    "Anse Source d'Argent",
    "Vallée de Mai Praslin",
    "La Digue Seychelles",
    "Seychelles budget travel",
    "Seychelles luxury resorts",
    "Indian Ocean islands",
    "Africa travel guide",
  ],
  openGraph: {
    title: "Seychelles in 5 Days: The Complete Travel Guide (2026)",
    description:
      "The most beautiful beaches in the world, full stop — pink-red granite boulders, sea turtles, coco de mer palms, and 115 islands of Indian Ocean perfection. Your complete 2026 Seychelles guide.",
    url: "https://incredibleitinerary.com/blog/seychelles-5-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Seychelles Anse Source d'Argent beach with granite boulders and turquoise sea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seychelles in 5 Days: The Complete Travel Guide (2026)",
    description:
      "Pink-red granite boulders, sea turtles, coco de mer palms — your complete Seychelles itinerary from $200/day budget to Six Senses luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/seychelles-5-days",
  },
};

/* ── JSON-LD structured data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Seychelles in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 5-day Seychelles itinerary covering Anse Source d'Argent, Vallée de Mai, La Digue, Praslin, and Mahé — with budget plans from $200 to $900/day.",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/seychelles-5-days",
      image:
        "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=80",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Seychelles 5 Days",
          item: "https://incredibleitinerary.com/blog/seychelles-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Seychelles",
      description:
        "115-island archipelago in the Indian Ocean, home to Anse Source d'Argent, Vallée de Mai UNESCO palm forest, and some of the world's most spectacular beaches.",
      url: "https://incredibleitinerary.com/blog/seychelles-5-days",
      touristType: ["Beach lovers", "Nature lovers", "Honeymooners", "Snorkellers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -4.6796,
        longitude: 55.4920,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Seychelles",
      },
    },
  ],
};

/* ── Blog data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Seychelles",
  country: "Seychelles",
  countryFlag: "🇸🇨",
  slug: "seychelles-5-days",
  heroQuery: "seychelles praslin la digue granite boulders turquoise sea",
  heroAlt: "Seychelles Anse Source d'Argent beach with granite boulders and turquoise sea",
  category: "Africa",
  date: "January 15, 2026",
  readTime: "14 min read",
  intro:
    "The most beautiful beaches in the world, full stop: Anse Source d'Argent on La Digue with its signature pink-red granite boulders and turquoise shallows, sea turtles nesting on Cousine Island, coco de mer palms (the world's heaviest seed, looks exactly as suggestive as you think), and Vallée de Mai on Praslin where giant palms create a prehistoric forest that looks like Eden — Seychelles, 115 islands of perfection in the Indian Ocean.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$200",
    bestMonths: "Apr–May or Oct–Nov (calm seas)",
    airport: "SEZ (Mahé Seychelles International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🌊", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "📸", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "No visa required"],
        ["On arrival?", "Visitor permit on arrival — 30 days (extendable)"],
        ["Requirements", "Return ticket and proof of accommodation required"],
        ["Duration", "30 days, extendable at Immigration Office in Victoria"],
        ["Cost", "Free"],
        ["Note", "Show confirmed hotel booking and onward ticket at immigration"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "Western Passports (US / UK / EU / AU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "No visa required"],
        ["On arrival?", "Visitor permit on arrival"],
        ["Duration", "Up to 30 days initially, extendable up to 3 months"],
        ["Requirements", "Return ticket, proof of accommodation, sufficient funds"],
        ["Cost", "Free"],
        ["Note", "Seychelles is visa-free for virtually all nationalities"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$200/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Mahé — Victoria & Beau Vallon",
          items: [
            "Arrive at SEZ Mahé International Airport, take shared taxi or bus to guesthouse (~$5–10)",
            "Check in to a self-catering guesthouse in Victoria area (from $80/night)",
            "Walk Victoria: Sir Selwyn Clarke Market (fresh fish, tropical fruits), the famous clock tower replica, botanical garden (free)",
            "Take local bus to Beau Vallon beach — swim, snorkel from the shore (free)",
            "Dinner at a local Creole restaurant: grilled fish with coconut curry and breadfruit (~$15–20)",
          ],
          cost: "$100–130 (accommodation + food + transport)",
        },
        {
          day: "Day 2",
          title: "Mahé — St Anne Marine Park & Morne Seychellois",
          items: [
            "Morning: Book a shared snorkel boat trip to St Anne Marine National Park ($40–60 with mask/fins)",
            "Snorkel with reef fish, hawksbill turtles, and nurse sharks in turquoise shallows",
            "Afternoon: Hike Morne Seychellois National Park trails (free) — La Misère trail has Indian Ocean views",
            "Pick up Creole takeaway for the beach — grilled octopus, roti, fresh coconut",
            "Sunset at Anse Major — a short hike from Bel Ombre along the coast",
          ],
          cost: "$60–90 (boat trip + food + hikes are free)",
        },
        {
          day: "Day 3",
          title: "Ferry to Praslin — Vallée de Mai UNESCO Forest",
          items: [
            "Morning: Take Cat Cocos ferry Mahé → Praslin (1 hour, ~$65 return, book in advance)",
            "Check in to a budget guesthouse near Anse Volbert ($80–100/night)",
            "Afternoon: Vallée de Mai National Park — walk the coco de mer palm forest, spot black parrots (~$20 entry)",
            "Vallée de Mai is UNESCO-listed and one of only two places coco de mer grows wild",
            "Evening: Anse Volbert beach walk, dinner at local spot — fresh grilled fish (~$15)",
          ],
          cost: "$160–180 (ferry + accommodation + park + food)",
        },
        {
          day: "Day 4",
          title: "Praslin — Anse Lazio + Cousin Island",
          items: [
            "Morning: Take a taxi to Anse Lazio (consistently rated one of the world's best beaches) — $20 return by taxi",
            "Swim, snorkel from shore (incredible visibility, free), pack a picnic",
            "Afternoon: Book a boat trip to Cousin Island Bird Sanctuary ($50) — nesting tropicbirds, hawksbill turtles, frigate birds",
            "Optional: Curieuse Island boat trip to see giant Aldabra tortoises roaming freely (~$60)",
            "Dinner: Fresh tuna tataki at a beach restaurant on Anse Volbert",
          ],
          cost: "$130–170 (taxis + boat trips + meals)",
        },
        {
          day: "Day 5",
          title: "La Digue — Anse Source d'Argent & Depart",
          items: [
            "Morning: Take inter-island ferry Praslin → La Digue (15 min, ~$15 return)",
            "Rent a bicycle on La Digue ($10/day) — the island has almost no motor vehicles",
            "Anse Source d'Argent: the most photographed beach in Africa — rose-pink granite boulders, shallow warm water, surreal beauty",
            "Cycle to Anse Cocos and Grand Anse for quiet stretches of beach (bring water)",
            "Afternoon ferry back to Praslin, then Cat Cocos to Mahé for evening departure flight",
          ],
          cost: "$80–100 (ferries + bike + meals)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$400/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Mahé — Victoria & Beau Vallon",
          items: [
            "Private transfer from SEZ airport to boutique hotel in Beau Vallon area (~$40)",
            "Check in to a 3–4 star hotel with sea view (from $200/night, e.g. Coral Strand Smart Choice)",
            "Victoria half-day tour: clock tower, Sir Selwyn Clarke Market, botanical garden (guided ~$40)",
            "Sunset swim at Beau Vallon, one of Mahé's best beaches",
            "Dinner at a proper Creole restaurant — fish curry, octopus salad, fresh coconut bread (~$40/person)",
          ],
          cost: "$280–320 (hotel + transfers + tours + food)",
        },
        {
          day: "Day 2",
          title: "Mahé — Private Snorkel Charter & Anse Major Hike",
          items: [
            "Morning: Private half-day snorkel charter to St Anne Marine National Park ($120–160 for a couple)",
            "Swim with turtles, reef sharks, and colourful reef fish in the clearest water imaginable",
            "Afternoon: Guided hike through Morne Seychellois — guide explains the endemic plants and birds",
            "Pre-dinner drinks at a beach bar — local Seybrew beer or freshly pressed fruit juice",
            "Dinner at Marie Antoinette Restaurant — Mahé's most famous Creole dining institution, set menu (~$50)",
          ],
          cost: "$380–420 (hotel + activities + guide + dinner)",
        },
        {
          day: "Day 3",
          title: "Ferry to Praslin — Vallée de Mai & Anse Lazio",
          items: [
            "Cat Cocos ferry Mahé → Praslin, met by private taxi",
            "Check in to a mid-range resort at Anse Volbert — Coco de Mer Hotel or Lemuria area (from $250/night)",
            "Vallée de Mai guided tour (ranger included, ~$40) — detailed explanation of coco de mer pollination, black parrots",
            "Afternoon: Anse Lazio — arrange a snorkel guide from the beach for reef fish ($30)",
            "Dinner at Bonbon Plume or equivalent beach restaurant — freshly grilled red snapper (~$60)",
          ],
          cost: "$360–400 (ferry + hotel + guide + activities + food)",
        },
        {
          day: "Day 4",
          title: "Praslin — Curieuse & Cousin Island Day Trip",
          items: [
            "Full-day boat trip combining Curieuse Island + Cousin Bird Sanctuary (~$120/person including park fees)",
            "Walk among hundreds of free-roaming giant Aldabra tortoises on Curieuse — a surreal Jurassic experience",
            "Cousin Island: nesting hawksbill turtles, fairy terns, Seychelles warblers",
            "Beach picnic lunch served on the boat — grilled fish, fresh salads, tropical fruit",
            "Evening: Spa treatment at resort, dinner on-site",
          ],
          cost: "$420–450 (boat + lunch + resort dinner + spa)",
        },
        {
          day: "Day 5",
          title: "La Digue — Anse Source d'Argent & Depart",
          items: [
            "Ferry to La Digue, private bicycle hire with guide for 2 hours ($35)",
            "Anse Source d'Argent: photograph at dawn before crowds — the light on the pink granite boulders is unreal",
            "Explore Anse Cocos by foot (30-min walk from Source d'Argent)",
            "L'Union Estate: colonial copra plantation and giant tortoise pen (small fee)",
            "Afternoon: Return to Mahé via ferry, enjoy a final fresh coconut water before departure",
          ],
          cost: "$180–220 (ferries + guide + L'Union + meals)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$900/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Mahé — Private Transfer & Four Seasons",
          items: [
            "Private helicopter or VIP car transfer from SEZ airport to Four Seasons Resort Seychelles at Petite Anse",
            "Check in to an Ocean View Suite or Hilltop Villa — infinity pool above the Indian Ocean",
            "Complimentary welcome drink, Creole afternoon tea, resort orientation",
            "Private sunset cruise from Petite Anse — champagne, seafood canapes, Indian Ocean dolphins",
            "Dinner at Kannel Restaurant — fine dining with tasting menu, locally sourced reef fish and lobster",
          ],
          cost: "$900–1,200 (suite + helicopter + dinner + cruise)",
        },
        {
          day: "Day 2",
          title: "Mahé — Private Marine Reserve Charter",
          items: [
            "Private full-day yacht charter with certified marine biologist guide ($600–800)",
            "Snorkel and freedive in protected zones — encounter manta rays, tiger sharks (safely), sea turtles",
            "Gourmet packed lunch on the boat — chilled lobster, tropical fruit, local rum cocktails",
            "Afternoon: Spa treatment at Four Seasons — 90-min Creole healing ritual with coconut oil",
            "Dinner: in-suite dining with private butler service",
          ],
          cost: "$1,000–1,300 (yacht + spa + in-suite dining)",
        },
        {
          day: "Day 3",
          title: "Helicopter to Praslin — North Island or Fregate Preview",
          items: [
            "Private helicopter Mahé → Praslin (20 min, $300/person) with aerial views of the archipelago",
            "Check in to Constance Lemuria Resort — one of the finest in the Indian Ocean",
            "Private guided Vallée de Mai tour at opening time (before tourist groups) — ranger exclusive access",
            "Anse Lazio exclusive beach setup: private sun loungers, waiter service, champagne bucket",
            "Sunset cocktails at Constance Lemuria terrace, dinner with wine pairing",
          ],
          cost: "$1,100–1,400 (helicopter + Lemuria suite + exclusive tours)",
        },
        {
          day: "Day 4",
          title: "Cousin & Cousine — Sea Turtles & Bird Sanctuary",
          items: [
            "Private boat to Cousine Island (exclusive conservation island, $600+ per visit) — nesting loggerhead turtles, rare birds",
            "Snorkel the pristine reef around Cousin Island — hawksbill turtles swim alongside you",
            "Curieuse Island: private ranger walk among hundreds of giant Aldabra tortoises",
            "Back at Lemuria: evening degustation menu at Diva Restaurant",
            "Optional: night snorkel from the beach — bioluminescent plankton in the lagoon",
          ],
          cost: "$1,000–1,200 (private island + boat + fine dining)",
        },
        {
          day: "Day 5",
          title: "La Digue — Private Sunrise at Anse Source d'Argent",
          items: [
            "Private boat to La Digue at dawn — arrive at Anse Source d'Argent before any other visitor",
            "Photography session with the pink granite boulders in golden hour light",
            "Private bicycle tour of the island with local guide",
            "Champagne picnic on Anse Cocos — completely deserted, just you and the Indian Ocean",
            "Helicopter back to Mahé for private lounge access and departure",
          ],
          cost: "$800–1,000 (private boat + guide + helicopter + picnic)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$80–100/night guesthouse",
      food: "$30–40 (local Creole spots)",
      transport: "$30–50 (shared taxis, buses, ferries)",
      activities: "$40–60 (shared snorkel, parks)",
      total: "$200–250/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$200–280/night boutique hotel",
      food: "$60–80 (restaurant dining)",
      transport: "$50–80 (private taxis, ferries)",
      activities: "$80–120 (private charters, guided tours)",
      total: "$390–460/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$500–800/night resort villa",
      food: "$100–150 (fine dining, in-resort)",
      transport: "$100–200 (private transfers, helicopter)",
      activities: "$150–300 (private yacht, exclusive access)",
      total: "$850–1,450/day",
    },
    {
      tier: "🚀 Ultra-Luxury",
      accommodation: "$1,500+/night (Six Senses Zil Pasyon, North Island)",
      food: "$150–200 (private chef, tasting menus)",
      transport: "$300+ (seaplane, private helicopter)",
      activities: "$400+ (Cousine Island exclusive, private marine reserve)",
      total: "$2,350+/day",
    },
    {
      tier: "📊 Avg. Couple/5 Days",
      accommodation: "Most spend $200–400/night total",
      food: "Budget $50–100/day for food",
      transport: "Inter-island ferries: budget $150 total",
      activities: "Activities: budget $100–300 total",
      total: "$1,500–4,000 total per couple",
    },
  ],

  mistakes: [
    {
      icon: "✈️",
      title: "Not booking inter-island ferries in advance",
      desc: "Cat Cocos ferries between Mahé, Praslin, and La Digue sell out — especially December to January and Easter week. Book online at least 2 weeks ahead. Missing a ferry in Seychelles means an expensive last-minute helicopter or wasted day.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💸",
      title: "Underestimating costs — Seychelles is expensive",
      desc: "Seychelles is consistently one of the most expensive destinations in the world. A 'cheap' meal at a local spot still costs $15–20. Budget travellers should plan for $200/day minimum — anything less means running out of money on the second day.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌊",
      title: "Going during rough season (June–August) without checking",
      desc: "June to August brings the southeast trade winds (the 'Grand Bleu'). Seas between islands get choppy, La Digue's east coast beaches are rough, and some water activities are suspended. Go in April–May or October–November for the calmest conditions.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌴",
      title: "Only visiting Mahé and skipping La Digue",
      desc: "Many visitors stay on Mahé and make a day trip to Praslin, completely missing La Digue — which has Anse Source d'Argent, arguably the most spectacular beach in the world. Stay at least one night on La Digue. It's only a 15-minute ferry from Praslin.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🐠",
      title: "Skipping the Vallée de Mai — it's not just another palm forest",
      desc: "The Vallée de Mai is a UNESCO World Heritage site and genuinely prehistoric — you walk through a forest of the rarest palms on Earth and may spot the Seychelles black parrot. Many tourists skip it thinking it's just trees. It's one of the most otherworldly places in Africa.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🚲",
      title: "Rent a bicycle on La Digue — it's the only way to travel",
      desc: "La Digue has virtually no motor vehicles for tourists. Everything is by bicycle or ox cart. Rent from the ferry dock for about $10/day and cycle the entire island in a few hours. Anse Source d'Argent, Grand Anse, and Anse Cocos are all accessible by bike.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "📸",
      title: "Arrive at Anse Source d'Argent at 7am",
      desc: "By 10am, Anse Source d'Argent is full of day-trippers from cruise ships. Arrive at dawn and you'll often have the entire beach to yourself — the light on the pink granite boulders at sunrise is extraordinary. L'Union Estate opens early and the entry fee is minimal.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🥥",
      title: "Eat at local Creole 'table d'hôte' restaurants",
      desc: "Skip resort restaurants for lunch. Local table d'hôte spots (like those along the Beau Vallon beachfront) serve enormous plates of grilled fish, coconut curry, and tropical fruit for $15–25. The best food in Seychelles is always at the least-Instagram-worthy tables.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🐢",
      title: "Book Cousin Island in advance — entry is strictly limited",
      desc: "Cousin Island Special Reserve limits daily visitors to protect the nesting hawksbill turtles and rare birds. Booking via Nature Seychelles in advance is essential. Guided tours run at set times — miss your slot and you can't get on the island.",
      color: "bg-indigo-50 border-indigo-200",
    },
  ],

  faqs: [
    {
      q: "Do I need a visa for Seychelles?",
      a: "No. Seychelles operates a visa-free system for all nationalities — you receive a visitor permit on arrival valid for 30 days (extendable to 3 months). You need a return ticket, confirmed accommodation, and proof of sufficient funds. Indian passport holders are fully included in this system.",
    },
    {
      q: "What currency does Seychelles use and can I use cards?",
      a: "The Seychellois Rupee (SCR) is the local currency, but US dollars, Euros, and British pounds are widely accepted at hotels and restaurants. Credit cards are accepted at most resorts and restaurants but may not work at local markets and small guesthouses. Bring some USD cash.",
    },
    {
      q: "Which islands should I prioritise — Mahé, Praslin, or La Digue?",
      a: "All three. Mahé (largest, airport, capital Victoria, Morne national park). Praslin (Vallée de Mai UNESCO, Anse Lazio). La Digue (Anse Source d'Argent, cycling, no cars). For 5 days: 1 night Mahé, 2 nights Praslin, 1 night La Digue, return to Mahé for departure works perfectly.",
    },
    {
      q: "Is Seychelles worth the money? It's very expensive.",
      a: "Yes — but only if you go for the right reasons. Seychelles genuinely has the most beautiful beaches in the world (not an exaggeration), exceptional snorkelling, and a unique ecosystem found nowhere else. It's expensive but not as expensive as the Maldives for comparable beach quality. Budget travellers can manage on $200/day with guesthouses and local Creole food.",
    },
  ],

  combineWith: ["mauritius-5-days", "maldives-5-days", "zanzibar-5-days"],
  relatedSlugs: ["mauritius-5-days", "victoria-falls-4-days", "kenya-7-days"],
  galleryQuery: "seychelles anse source argent la digue praslin vallee de mai",
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function SeychellesPage() {
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
