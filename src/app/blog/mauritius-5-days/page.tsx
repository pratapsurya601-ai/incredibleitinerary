import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Page metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mauritius 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Mauritius trip in 5 days. Plan the perfect 5-day Mauritius itinerary — from the underwater waterfall illusion to Île aux Cerfs, Black River.",
  keywords: [
    "Mauritius travel guide",
    "Mauritius 5 days itinerary",
    "Mauritius underwater waterfall",
    "Île aux Cerfs Mauritius",
    "Black River Gorges",
    "Chamarel Seven Coloured Earths",
    "Mauritius budget travel",
    "Mauritius luxury resorts",
    "Indian Ocean islands",
    "Africa travel guide",
  ],
  openGraph: {
    title: "Mauritius 5-Day Itinerary 2026: Trip Planner",
    description:
      "An underwater waterfall that isn't really a waterfall, 7 cuisines on one island, and beaches where the ocean gradient goes turquoise to cobalt in 10 metres. Your complete 2026 Mauritius guide.",
    url: "https://incredibleitinerary.com/blog/mauritius-5-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mauritius turquoise lagoon with underwater waterfall illusion and tropical beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauritius 5-Day Itinerary 2026: Trip Planner",
    description:
      "Underwater waterfall, 7 cuisines, Île aux Cerfs lagoon — your complete Mauritius itinerary from $130/day budget to One&Only luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/mauritius-5-days",
  },
};

/* ── JSON-LD structured data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mauritius in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 5-day Mauritius itinerary covering Île aux Cerfs, Black River Gorges, the underwater waterfall, Chamarel, Port Louis, and Blue Bay Marine Park — with budget plans from $130 to $700/day.",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/mauritius-5-days",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mauritius 5 Days",
          item: "https://incredibleitinerary.com/blog/mauritius-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Mauritius",
      description:
        "A diverse island nation in the Indian Ocean known for its lagoons, reefs, beaches, and remarkable multicultural cuisine blending Indian, Chinese, French, and Creole influences.",
      url: "https://incredibleitinerary.com/blog/mauritius-5-days",
      touristType: ["Beach lovers", "Foodies", "Water sports enthusiasts", "Nature lovers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -20.3484,
        longitude: 57.5522,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Mauritius",
      },
    },
  ],
};

/* ── Blog data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Mauritius",
  country: "Mauritius",
  countryFlag: "🇲🇺",
  slug: "mauritius-5-days",
  heroQuery: "mauritius beach lagoon underwater waterfall ile aux cerfs turquoise",
  heroAlt: "Mauritius turquoise lagoon with underwater waterfall illusion and tropical beach",
  category: "Africa",
  date: "January 20, 2026",
  readTime: "13 min read",
  intro:
    "An underwater waterfall that isn't actually a waterfall (it's a sand and silt optical illusion that looks perfect from above), beaches where the Indian Ocean gradient goes from turquoise to cobalt in 10 metres, a cuisine so multicultural (Indian, Chinese, French, Creole) it has 7 different cuisines on one island, and dodo-shaped everything in memory of the bird that made Mauritius famous before being eaten to extinction — Mauritius, the most diverse island in the ocean.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$130",
    bestMonths: "May–Nov (dry season)",
    airport: "MRU (Sir Seewoosagur Ramgoolam)",
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
        ["Visa required?", "No visa required for Indian passport holders"],
        ["On arrival?", "Visitor permit on arrival — 60 days"],
        ["Requirements", "Return ticket, hotel booking, and sufficient funds"],
        ["Duration", "60 days on arrival (longer than most other nationalities)"],
        ["Cost", "Free"],
        ["Note", "Mauritius is one of the few Indian Ocean islands offering 60 days to Indian passport holders"],
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
        ["Duration", "90 days (UK: 6 months)"],
        ["Requirements", "Return or onward ticket, proof of accommodation"],
        ["Cost", "Free"],
        ["UK specific", "British passport holders get 6 months due to Commonwealth ties"],
        ["Note", "Mauritius is visa-free for virtually all Western nationalities"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$130/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive — Port Louis & Grand Baie",
          items: [
            "Arrive at MRU Airport, take the airport bus or shared taxi to Grand Baie (~$15–20 by taxi)",
            "Check in to a guesthouse or small hotel in Grand Baie (from $50–70/night)",
            "Walk the Grand Baie beachfront and La Cuvette public beach (free)",
            "Lunch at a local dholl puri stall — the national street food, a flaky flatbread with yellow split pea filling (~$1–2)",
            "Evening: Port Louis night market or a local Chinese-Mauritian restaurant (~$10–15 dinner)",
          ],
          cost: "$80–100 (accommodation + food + transport)",
        },
        {
          day: "Day 2",
          title: "Île aux Cerfs — Best Beach Day",
          items: [
            "Morning: Take a shared boat to Île aux Cerfs from Mahébourg or Trou d'Eau Douce (~$20 return)",
            "Île aux Cerfs has the most stunning lagoon in Mauritius — turquoise shallows, white sand, reef snorkelling",
            "Rent snorkel gear ($8–10) and explore the reef from the shore",
            "Lunch on the island: BBQ grilled fish with rice and rougaille (Creole tomato sauce) (~$15)",
            "Afternoon: Lounge on the lagoon, take the free speedboat between the island beaches",
          ],
          cost: "$55–75 (boat + snorkel + lunch + transport)",
        },
        {
          day: "Day 3",
          title: "Chamarel — Seven Coloured Earths & Rum Distillery",
          items: [
            "Rent a scooter or take a shared minivan tour to Chamarel (south-west Mauritius) — budget tour ~$30",
            "Chamarel Seven Coloured Earths: volcanic earth in 7 distinct natural pigments — entry ~$8",
            "Chamarel Rum Distillery: guided tour and tasting of aged Mauritian rum — entry ~$15",
            "Chamarel Waterfall: surrounded by black lava cliffs, the highest single-drop waterfall in Mauritius",
            "Lunch at a Chamarel village restaurant: Creole curry with rice and achards (pickled vegetables) ~$10",
          ],
          cost: "$65–85 (transport + entry fees + lunch)",
        },
        {
          day: "Day 4",
          title: "Blue Bay Marine Park & Black River Gorges",
          items: [
            "Morning: Blue Bay Marine Park (south-east coast) — best snorkelling in Mauritius, UNESCO-protected reef (~free/gear hire $8)",
            "Coral gardens with 50+ coral species, sea turtles, and parrotfish in spectacular visibility",
            "Afternoon: Drive or bus to Black River Gorges National Park — free hiking trails through tropical forest",
            "Spot Mauritius kestrel (endemic, nearly went extinct), pink pigeon, Java deer, and macaque monkeys",
            "Sunset at La Prairie viewpoint — panoramic view over the south-west lagoon",
          ],
          cost: "$45–65 (transport + gear hire + park free)",
        },
        {
          day: "Day 5",
          title: "Port Louis Central Market & Depart",
          items: [
            "Morning: Port Louis Central Market — the beating heart of Mauritius, selling spices, saris, street food, and vanilla",
            "Caudan Waterfront: colonial harbour area, cafes, souvenir shopping",
            "Try a fish vindaye or halim at a street food stall — Port Louis has incredible cheap food",
            "Pamplemousses Botanical Garden (30 min north of Port Louis) — giant Victoria amazonica water lilies, free/small entry",
            "Afternoon transfer to MRU airport for departure",
          ],
          cost: "$50–70 (market + botanical garden + airport transfer)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$280/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive — Port Louis & North Coast",
          items: [
            "Private transfer from MRU airport to a 3-4 star hotel in Grand Baie or Pereybere (~$60)",
            "Check in to a beachfront hotel (from $150/night, e.g. Veranda Grand Baie or Coin de Mire Attitude)",
            "Welcome cocktail and beach time at the hotel's private beach area",
            "Evening: Guided food tour of Port Louis — try dholl puri, gato piment (chilli cakes), octopus salad ($40–60)",
            "Dinner at a proper Port Louis Creole restaurant with wine (~$50 for two)",
          ],
          cost: "$260–300 (hotel + transfer + food tour + dinner)",
        },
        {
          day: "Day 2",
          title: "Île aux Cerfs — Private Boat & Water Sports",
          items: [
            "Private speedboat to Île aux Cerfs ($80 for a couple, includes snorkel) from Trou d'Eau Douce",
            "Underwater snorkel safari guided by a local marine guide ($50/person)",
            "Parasailing over the Île aux Cerfs lagoon — unforgettable view of the reef ($60/person)",
            "Lunch: proper sit-down restaurant on the island — seafood platter, fresh coconut ($40 per person)",
            "Optional: Glass-bottom boat tour of the reef channels on the return ($20)",
          ],
          cost: "$270–320 (boat + water sports + guided snorkel + lunch)",
        },
        {
          day: "Day 3",
          title: "Underwater Waterfall & Chamarel Full Day",
          items: [
            "Morning: Helicopter flight over Le Morne Peninsula to see the underwater waterfall illusion from above ($200–250/person)",
            "The 'waterfall' is a sand and silt cascade over an underwater shelf — from the air it's spectacular",
            "Afternoon: Chamarel Seven Coloured Earths + Chamarel Rum Distillery premium tour ($60 combined)",
            "Dinner at Chamarel Restaurant — elevated Creole cuisine with Le Morne views ($60–80 per person)",
          ],
          cost: "$380–430 (helicopter + tours + dinner)",
        },
        {
          day: "Day 4",
          title: "Black River Gorges & Flic en Flac",
          items: [
            "Guided hiking tour of Black River Gorges National Park ($60 with nature guide) — rare endemic birds, deer, endemic plants",
            "Viewpoint at Macchabée Ridge — panoramic views across the entire south-west of the island",
            "Afternoon: Drive to Flic en Flac beach — long white beach on the west coast with clean water",
            "Sunset drinks at a beachfront bar, watching the sun drop behind Tamarin Bay",
            "Dinner at a west coast seafood restaurant — catch of the day grilled with garlic butter ($50)",
          ],
          cost: "$170–210 (guide + transport + dinner)",
        },
        {
          day: "Day 5",
          title: "Pamplemousses, Le Morne & Depart",
          items: [
            "Morning: Pamplemousses Botanical Garden — private guided tour ($40) of the Victoria water lilies, talipot palm, baobab trees",
            "Le Morne Brabant: UNESCO-listed mountain symbolic of the runaway slave resistance — coastal walk at its base",
            "Caudan Waterfront: coffee and last-minute shopping before departure",
            "Private transfer to MRU airport",
          ],
          cost: "$120–160 (garden tour + Le Morne + transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$700/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive — Shangri-La Le Touessrok or One&Only",
          items: [
            "Private VIP transfer with luxury vehicle from MRU airport",
            "Check in to One&Only Le Saint Géran or Shangri-La Le Touessrok — both on private peninsulas with private beaches",
            "Champagne welcome, butler introduction, private villa walkthrough",
            "Sunset catamaran cruise along the east coast — canapés, rum cocktails, dolphins",
            "Dinner at the resort's fine dining restaurant — 7-course tasting menu with wine pairing",
          ],
          cost: "$800–1,000 (suite + transfer + catamaran + dinner)",
        },
        {
          day: "Day 2",
          title: "Private Île aux Cerfs Experience",
          items: [
            "Private speedboat from the resort to Île aux Cerfs — reserved at One&Only's private beach club",
            "Private snorkel and kayaking with a certified guide — reef, turtles, reef sharks in the channels",
            "Private beach lunch set up by the resort — lobster, grilled local fish, iced champagne",
            "Afternoon: Le Touessrok Golf Course (if staying there) — 18 holes on an ocean peninsula ($200/round)",
            "Evening: Spa at the resort — 2-hour couples signature treatment with exotic Mauritian ingredients",
          ],
          cost: "$900–1,100 (private beach club + spa + golf + dinner)",
        },
        {
          day: "Day 3",
          title: "Helicopter Waterfall & Chamarel Exclusive",
          items: [
            "Private helicopter tour: Le Morne, underwater waterfall, Black River Gorges, Chamarel ($400–600 private)",
            "Exclusive Chamarel distillery VIP tour — vertical rum tasting from aged reserve barrels",
            "Seven Coloured Earths private visit at sunset — no crowds, the colours deepen as the sun drops",
            "Return by private vehicle along the scenic coast road",
            "Dinner: private chef dinner in the villa — Creole fusion with local lobster and vanilla crème brûlée",
          ],
          cost: "$900–1,100 (helicopter + exclusive tours + private chef)",
        },
        {
          day: "Day 4",
          title: "Blue Bay & Le Morne",
          items: [
            "Private catamaran to Blue Bay Marine Park — exclusive guided reef dive or snorkel ($300–500 for private boat)",
            "Drift snorkel through coral gardens with visibility exceeding 30 metres",
            "Le Morne Brabant: guided historical walk with a local historian — the mountain's role in the resistance movement",
            "Afternoon: return to resort, leisure time, afternoon tea with ocean view",
            "Final dinner: the resort's signature restaurant — reserve the best table for sunset views",
          ],
          cost: "$800–1,000 (private catamaran + guide + resort dining)",
        },
        {
          day: "Day 5",
          title: "Port Louis Private Food Tour & Depart",
          items: [
            "Private guide and driver: morning food tour of Port Louis Central Market ($100) — curated street food tasting",
            "Pamplemousses Botanical Garden: private early-morning visit before it opens to the public",
            "Caudan Waterfront: private shopping experience at the luxury boutiques",
            "Private lounge access at MRU airport, champagne send-off",
          ],
          cost: "$500–600 (private guide + market + lounge + transfer)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$50–70/night guesthouse",
      food: "$20–30 (street food, local spots)",
      transport: "$20–35 (bus, shared taxis)",
      activities: "$30–50 (shared boats, park fees)",
      total: "$120–185/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–200/night hotel",
      food: "$50–70 (restaurants, food tours)",
      transport: "$40–60 (private taxis, boat)",
      activities: "$60–100 (guided tours, water sports)",
      total: "$300–430/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$400–700/night resort villa",
      food: "$80–120 (fine dining, in-resort)",
      transport: "$80–150 (private transfers)",
      activities: "$150–300 (helicopter, private boat)",
      total: "$710–1,270/day",
    },
    {
      tier: "🚀 Ultra-Luxury",
      accommodation: "$800+/night (One&Only, Shangri-La Le Touessrok)",
      food: "$150–200 (tasting menus, private chef)",
      transport: "$200+ (helicopter, private catamaran)",
      activities: "$300+ (exclusive charters, private tours)",
      total: "$1,450+/day",
    },
    {
      tier: "📊 Avg. Couple/5 Days",
      accommodation: "Budget $200–500/night total for two",
      food: "Budget $50–100/day for food and drinks",
      transport: "Car hire: ~$40/day, taxis: $15–60/trip",
      activities: "Activities: budget $100–300 total",
      total: "$1,300–3,500 total per couple",
    },
  ],

  mistakes: [
    {
      icon: "🚗",
      title: "Not renting a car or scooter for the south and west",
      desc: "Public buses in Mauritius are slow and have limited coverage outside major towns. To reach Chamarel, Black River Gorges, Blue Bay, and Flic en Flac comfortably, rent a car ($30–40/day) or scooter ($15/day). Everything is easier and you can stop wherever you like.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌧️",
      title: "Mauritius 5-Day Itinerary 2026: Trip Planner",
      desc: "Mauritius cyclone season runs roughly December to April. A direct hit is rare but possible — cyclone Freddy caused major disruption in 2023. Travel insurance covering weather cancellation is essential if you book December to March. May to November is far safer.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏨",
      title: "Booking a hotel on the wrong coast",
      desc: "The east coast (Grand Gaube, Trou d'Eau Douce, Île aux Cerfs) is calm and protected year-round. The west coast (Flic en Flac) is better May to October. The north (Grand Baie) is the most social and touristy. Know which experience you want before booking — the island is 65km long and moving between coasts takes time.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🐬",
      title: "Missing the underwater waterfall — it's not visible from the ground",
      desc: "The 'underwater waterfall' near Le Morne is only visible from the air. You need a helicopter ($150–250/person) or a light aircraft flight. Do not book a boat trip expecting to see it — from sea level it's invisible. Worth every dollar of the helicopter cost.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍽️",
      title: "Only eating at the resort",
      desc: "Mauritius has one of the most extraordinary food cultures in the world — Indian, Chinese, Hakka Chinese, French, Creole, and more. Eating only at your resort means missing all of it. Port Louis Central Market, local dholl puri stalls, and Creole table d'hôte restaurants are unmissable.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🛵",
      title: "Rent a scooter for one day just to explore the coast road",
      desc: "The coastal road around the south and west of Mauritius is spectacular — black lava cliffs, sugarcane fields, fishing villages, and sudden turquoise lagoons. Rent a scooter for $15/day and just ride. There are almost no hills in the coastal areas and traffic is light outside Port Louis.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍛",
      title: "Eat dholl puri for breakfast — it costs $1",
      desc: "Dholl puri is Mauritius's national street food: a thin, flaky flatbread made with split pea flour, served with curry and chutney. Every Mauritian eats it. Find a stall (especially in the central plateau towns) and pay $1 for a breakfast that beats any hotel buffet.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🤿",
      title: "Go to Blue Bay Marine Park on a weekday morning",
      desc: "Blue Bay Marine Park is the best snorkelling in Mauritius — but it gets very busy on weekends. Arrive at 8am on a Tuesday or Wednesday and you'll have the coral gardens nearly to yourself. The visibility and coral diversity rivals the Maldives at a fraction of the cost.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏔️",
      title: "Visit Le Morne Brabant at dusk for the light",
      desc: "Le Morne Brabant is a UNESCO-listed mountain and one of the most atmospheric places in Mauritius — its history as a refuge for escaped slaves is deeply moving. The mountain glows orange at dusk against the turquoise lagoon below. Stop here on your drive back from Chamarel.",
      color: "bg-indigo-50 border-indigo-200",
    },
  ],

  faqs: [
    {
      q: "Do Indian passport holders need a visa for Mauritius?",
      a: "No. Indian passport holders receive a free visitor permit on arrival for 60 days — one of the most generous visa-free arrangements available to Indian passport holders anywhere in the world. Bring a return ticket and proof of accommodation.",
    },
    {
      q: "What is the best time to visit Mauritius?",
      a: "May to November is the dry season — warm (25–28°C), low humidity, calm seas. December to April is hot and humid with the occasional cyclone. June and July can have strong trade winds on the east coast, making the west coast beaches (Flic en Flac, La Preneuse) preferable. October to November is often considered the sweet spot.",
    },
    {
      q: "How do I see the underwater waterfall in Mauritius?",
      a: "The 'underwater waterfall' is a sand and silt optical illusion visible only from the air near Le Morne on the south-west coast. Book a helicopter flight from any operator in Mauritius ($150–250/person, 30 minutes). Some operators combine it with a tour of Black River Gorges and Chamarel from the air. Do not book a boat trip — you cannot see it from sea level.",
    },
    {
      q: "Is Mauritius or Maldives better for a beach holiday?",
      a: "Different strengths. Maldives has more dramatic over-water bungalow experiences and arguably more pristine reefs for diving. Mauritius has far more to do on land — national parks, multicultural cities, rum distilleries, waterfalls, and incredible food. Mauritius is also significantly more affordable. For first-timers, Mauritius often wins because of the variety.",
    },
  ],

  combineWith: ["seychelles-5-days", "maldives-5-days", "zanzibar-5-days"],
  relatedSlugs: ["seychelles-5-days", "victoria-falls-4-days", "kenya-7-days"],
  galleryQuery: "mauritius ile aux cerfs blue bay chamarel seven coloured earths le morne",
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function MauritiusPage() {
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
