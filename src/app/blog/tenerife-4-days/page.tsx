import type { Metadata } from "next";
import UniversalBlogClient from "@/components/blog/UniversalBlogClient";
import type { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Tenerife in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
  description:
    "Plan 4 days in Tenerife: Teide National Park, Los Gigantes cliffs, Anaga laurel forest, whale watching, and the best beaches in Europe's year-round sun island. Budget €55–€280/day.",
  keywords: [
    "Tenerife travel guide",
    "Tenerife 4 days itinerary",
    "Teide National Park",
    "Los Gigantes cliffs",
    "Anaga Rural Park",
    "Tenerife budget travel",
    "Canary Islands holiday",
    "Tenerife whale watching",
    "Masca gorge hike",
    "La Laguna UNESCO",
  ],
  openGraph: {
    title: "Tenerife in 4 Days: The Complete Travel Guide (2026)",
    description:
      "From Teide volcano to Los Gigantes cliffs — your complete 4-day Tenerife itinerary with budget, mid-range, and luxury plans.",
    url: "https://www.incredibleitinerary.com/blog/tenerife-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tenerife Canary Islands Teide volcano peak above clouds with beach below",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenerife in 4 Days: The Complete Travel Guide (2026)",
    description:
      "Teide, Los Gigantes, Anaga forest — complete 4-day itinerary for every budget.",
    images: ["https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/tenerife-4-days",
  },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Tenerife in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Plan 4 days in Tenerife with day-by-day itineraries for budget, mid-range, and luxury travellers. Covers Teide, Los Gigantes, Anaga, whale watching, and more.",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      datePublished: "2026-01-10",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/tenerife-4-days",
      image: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=1200&q=80",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Tenerife 4 Days", item: "https://www.incredibleitinerary.com/blog/tenerife-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Tenerife",
      description:
        "Tenerife is the largest of Spain's Canary Islands, home to Teide National Park, the world's third-largest volcano, ancient laurisilva forests, dramatic cliffs, and Europe's best year-round climate.",
      url: "https://www.incredibleitinerary.com/blog/tenerife-4-days",
      touristType: ["Beach traveller", "Hiker", "Nature lover", "Budget traveller", "Luxury traveller"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.2916,
        longitude: -16.6291,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Spain",
      },
    },
  ],
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Tenerife",
  country: "Spain",
  countryFlag: "🇪🇸",
  slug: "tenerife-4-days",
  heroQuery: "tenerife canary islands teide volcano beach spain",
  heroAlt: "Tenerife Canary Islands Teide volcano peak above clouds with beach below",
  category: "Europe",
  date: "10 Jan 2026",
  readTime: "14 min read",
  intro:
    "Tenerife is the Canary Island where you can hike through snow in the morning and swim in the Atlantic by afternoon — because Teide, Spain's highest mountain and the world's third-largest volcano, rises 3,718 metres above sea level from a subtropical island. Pilot whales live year-round in the Teno Strait and you can watch them from a catamaran before lunch. The Anaga Rural Park shelters an ancient laurisilva forest descended from the Jurassic era, a misty green world that has no business existing on a volcanic Atlantic island. And nowhere else on Earth records an average temperature of 22°C every single month of the year — Tenerife, Europe's undisputed year-round sun destination.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€55",
    bestMonths: "Year-round (Europe's best climate)",
    airport: "TFN (Norte) or TFS (Sur)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🌋", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "📸", label: "Photo Gallery" },
    { id: "combine", emoji: "✈️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Schengen visa (Spain)"],
        ["Fee", "€80 (adults)"],
        ["Processing", "15–30 working days"],
        ["Apply At", "Spanish Consulate / VFS Global"],
        ["Duration", "Up to 90 days in any 180"],
        ["Tip", "Apply at least 6 weeks before travel"],
      ],
    },
    {
      flag: "🌍",
      title: "UK / US / EU / AUS Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "Visa-free (Schengen area)"],
        ["ETIAS", "Required from mid-2025 (€7, online)"],
        ["Duration", "Up to 90 days in any 180"],
        ["UK Note", "UK no longer in Schengen — ETIAS applies"],
        ["Passport", "Valid 3+ months beyond stay"],
        ["Entry", "No stamp needed for EU passports"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€55/day",
      days: [
        {
          day: "Day 1",
          title: "Santa Cruz & La Laguna",
          items: [
            "Arrive at TFS (Sur), take the TITSA bus 111 to Santa Cruz (€3.35) — faster than a taxi for solo travellers",
            "Check into a hostel dorm in Santa Cruz (€18–22/night) — try Hostel Tenerife or similar",
            "Explore the Mercado de Nuestra Señora de África market — free and genuinely spectacular",
            "Walk the Rambla de Santa Cruz promenade along the seafront",
            "Bus 014 to San Cristóbal de La Laguna (€1.45) — a UNESCO old town that most tourists skip entirely",
            "Wander the historic centre: Calle Herradores, Plaza del Adelantado, the Cathedral",
            "Dinner at a Canarian guachinche (farmhouse wine restaurant) — papas arrugadas with mojo for €8–10",
          ],
          cost: "€35–42 (transport + food + hostel)",
        },
        {
          day: "Day 2",
          title: "Teide National Park",
          items: [
            "Take the TITSA 342/348 bus to Teide (€10 return from Puerto de la Cruz, book online)",
            "Arrive at the cable car base (2,356m) — rides cost €27 return, buy tickets online at least 2 weeks ahead",
            "Walk the Roques de García circular trail (3.5km, 1.5 hrs) — free, dramatic volcanic landscapes",
            "Bring packed lunch and thermals — temperatures at altitude can be 15°C colder than the coast",
            "The summit above the cable car top station requires a free permit (book via Gobierno de Canarias website, scarce)",
            "Return bus to your base by late afternoon",
            "Supermarket dinner back at the hostel to keep costs down",
          ],
          cost: "€40–48 (bus + cable car + food)",
        },
        {
          day: "Day 3",
          title: "Los Gigantes & Masca",
          items: [
            "Take bus 325 from Los Cristianos to Los Gigantes (€3.80) — the cliffs are best seen from the port",
            "Book the cheapest whale-watching catamaran from the Los Gigantes harbour (€35–40) — pilot whales guaranteed or money back on most reputable tours",
            "After the trip, walk the clifftop path for free views of the 600-metre vertical walls",
            "Take a taxi (€12) or arrange a tour to Masca village — the road is extremely narrow",
            "Walk through the village (free) — Masca gorge hike to the beach costs €40 by boat return pick-up",
            "Bus back towards Los Cristianos then onward connections",
            "Eat a fresh fish plate at a port-side restaurant in Los Gigantes (€12–15)",
          ],
          cost: "€55–65 (whale watching + transport + food)",
        },
        {
          day: "Day 4",
          title: "Anaga & Departure",
          items: [
            "Early bus to Anaga Rural Park via Las Mercedes (bus 075 from Santa Cruz, €1.45)",
            "Walk the Bosque de la Mercedes trail — ancient laurel forest, completely free, deeply atmospheric",
            "Continue to Taganana village via the park road — ask locals about the black sand beach below",
            "Return to Santa Cruz by bus — the Anaga landscape from the bus windows alone is worth it",
            "Late lunch at Mercado de Nuestra Señora de África — fresh fruit and local cheese",
            "Head to airport via bus (TFS: bus 111 from Santa Cruz, €3.35)",
          ],
          cost: "€20–28 (transport + food only)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€120/day",
      days: [
        {
          day: "Day 1",
          title: "Puerto de la Cruz & North Tenerife",
          items: [
            "Fly into TFN (Norte airport) and take a taxi to Puerto de la Cruz (€20) — a proper Canarian resort town, not the concrete south",
            "Check into a 3-star hotel or boutique guesthouse in Puerto de la Cruz (€65–80/night)",
            "Visit Loro Parque in the afternoon — one of Europe's best zoo/marine parks (€38 adults, book online)",
            "Stroll the Puerto de la Cruz old town: Plaza del Charco, Lago Martiánez lido (€7 entry)",
            "Dinner at a mid-range restaurant on the seafront — fresh local fish and Canarian wine (€25–35/person)",
          ],
          cost: "€100–120 (hotel + park + dinner + taxi)",
        },
        {
          day: "Day 2",
          title: "Teide National Park in Depth",
          items: [
            "Pre-booked hire car (€30–40/day) gives full flexibility for Teide — essential for seeing the park properly",
            "Drive the TF-21 through the Orotava Valley — spectacular views before entering the park",
            "Cable car to 3,555m (pre-booked, €27) plus voluntary walk on the lunar landscape plateau",
            "If you have a summit permit, hike the final 163m to the actual crater rim — extraordinary on a clear day",
            "Drive the TF-38 back via Vilaflor, Spain's highest village, and stop for a coffee",
            "Return to Puerto de la Cruz via the motorway — stop at the Orotava valley viewpoint at sunset",
            "Dinner at a Michelin-recommended local restaurant (€35–45/person)",
          ],
          cost: "€110–130 (hire car + cable car + meals)",
        },
        {
          day: "Day 3",
          title: "Los Gigantes, Whale Watching & Masca",
          items: [
            "Drive south on the TF-1 motorway (40 mins) to Los Gigantes",
            "Book a premium 3-hour whale watching catamaran with guaranteed sightings (€50–60) — pilot whales, occasional orcas, bottle-nose dolphins",
            "Drive the dramatic TF-436 mountain road to Masca village (park before the village)",
            "Walk the Masca gorge hike down to the sea (3 hrs, free, challenging) — pre-arrange the boat back (€15)",
            "Seafood lunch at a Los Gigantes harbour restaurant",
            "Drive back north via the Las Cañadas viewpoint if time allows",
          ],
          cost: "€95–115 (whale watching + fuel + meals)",
        },
        {
          day: "Day 4",
          title: "Anaga Rural Park & La Laguna",
          items: [
            "Morning drive into the Anaga Rural Park — hire car opens up the remote hamlets",
            "Walk the Roque Taborno trail (moderate, 2 hrs) — the best ridge walk in the park with Atlantic views both sides",
            "Drive to Taganana and down to Benijo black-sand beach for a swim",
            "Afternoon in La Laguna UNESCO old town — coffee in a historic square",
            "Return hire car at TFN or TFS depending on departure",
            "Farewell dinner in La Laguna or at the airport",
          ],
          cost: "€80–100 (fuel + meals + activities)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€280/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Abama Resort",
          items: [
            "Private transfer from TFS to the Abama Golf & Spa Resort or Royal Garden Villas (€60–80)",
            "Check into a luxury 5-star resort on the southwest coast — ocean-view room or villa (€250–600/night)",
            "Afternoon at the infinity pool overlooking the Atlantic — most luxury properties have direct cliff beach access",
            "Sunset cocktails at the terrace bar",
            "Dinner at a resort Michelin-star restaurant (€80–120/person with wine) — Kabuki at Abama has a Michelin star",
          ],
          cost: "€380–520 (resort + transfer + dinner)",
        },
        {
          day: "Day 2",
          title: "Private Teide Sunrise Experience",
          items: [
            "Private guided sunrise tour to Teide (departs 5am, €150–200/person) — watch dawn break over the clouds from 3,500m",
            "Private guide handles all permits and logistics — summit access included",
            "Return by late morning for a spa session at the resort",
            "Afternoon: private yacht charter from Los Gigantes (€300–400 for up to 8 guests, 4 hrs) — includes swimming stops and whale watching with a marine biologist",
            "Sunset dinner on board or at a premium restaurant in Costa Adeje",
          ],
          cost: "€500–650 (private tour + yacht + dining)",
        },
        {
          day: "Day 3",
          title: "Anaga & Private Chef Experience",
          items: [
            "Private guided hiking day in Anaga Rural Park with a naturalist guide (€120/person)",
            "Visit the Taganana valley, remote hamlets, and a black-sand beach inaccessible by road",
            "Guided foraging walk explaining the Jurassic laurisilva ecosystem",
            "Return to resort for spa afternoon (included in luxury properties)",
            "Private chef dinner at your villa featuring Canarian ingredients (arranged through resort concierge, €150–200/person)",
          ],
          cost: "€400–550 (guide + spa + private dinner)",
        },
        {
          day: "Day 4",
          title: "La Laguna & Departure in Style",
          items: [
            "Chauffeured morning tour of La Laguna UNESCO old town with a local historian (€80–100)",
            "Coffee and pastries at Café El Tafor in La Laguna — a 16th-century building",
            "Visit the Cathedral and the Museo de la Historia de Tenerife",
            "Leisurely lunch at a top Canarian restaurant before departure",
            "Private transfer to TFS or TFN — flight connection or helicopter transfer if onward connecting",
          ],
          cost: "€250–350 (guide + meals + transfer)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18–22 (hostel dorm)",
      food: "€12–18 (markets, guachinches)",
      transport: "€8–12 (TITSA buses)",
      activities: "€10–15 (free hikes + 1 paid)",
      total: "€55–70/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€65–85 (3-star hotel)",
      food: "€30–45 (restaurants)",
      transport: "€30–40 (hire car)",
      activities: "€30–50 (whale watching, cable car)",
      total: "€120–160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–600 (5-star resort)",
      food: "€80–120 (Michelin, private chef)",
      transport: "€60–100 (private transfers)",
      activities: "€100–200 (private tours, yacht)",
      total: "€280–450/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€15–18 (dorm)",
      food: "€8–12 (self-catering)",
      transport: "€5–8 (bus pass)",
      activities: "€5–10 (free trails)",
      total: "€40–50/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€90–130 (apartment)",
      food: "€40–60 (self-catering mix)",
      transport: "€35–45 (hire car)",
      activities: "€50–80 (Loro Parque, water parks)",
      total: "€130–180/day",
    },
  ],

  mistakes: [
    {
      icon: "🎿",
      title: "Booking the summit permit at the last minute",
      desc: "The Teide summit permit (above the cable car top station) is free but extremely limited — it books out weeks or months in advance online via the Gobierno de Canarias website. Many visitors get the cable car and are frustrated they can't go higher. Book the permit before your flights.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚌",
      title: "Staying only in the resort south and missing everything",
      desc: "Playa de las Américas is fine for sun but Tenerife's extraordinary landscapes — Teide, Anaga, Los Gigantes, La Laguna — all require leaving the southern hotel strip. Rent a car or plan your bus connections. The south is a base, not the destination.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "❄️",
      title: "Not bringing layers for Teide",
      desc: "It can be 28°C on the coast and 5°C with wind at 3,500m on the same day. Every year visitors arrive at the Teide cable car in flip-flops and shorts and can't go anywhere. Pack a warm layer and proper shoes regardless of the season.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Swimming on unmarked north coast beaches without checking conditions",
      desc: "The north coast beaches (including some Anaga beaches) can have serious Atlantic swells and rip currents. The safe swimming beaches are flagged. Never enter the water if there's a red flag — the Atlantic here is not the calm Mediterranean.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚗",
      title: "Driving the Masca road unprepared",
      desc: "The TF-436 road to Masca is genuinely one of the most difficult roads in Spain — single track, hairpin bends, sheer drops. If you're not comfortable with extreme mountain driving, take a tour or a taxi. It is not suitable for large hire cars or nervous drivers.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🐳",
      title: "The Teno Strait is one of the world's best whale watching spots",
      desc: "Pilot whales are resident year-round in the channel between Tenerife and La Gomera. This is not seasonal whale watching — it's almost guaranteed any day of the year. Book with operators departing from Los Gigantes or Los Cristianos, and choose certified sustainable tour operators.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍷",
      title: "Seek out guachinches for authentic Canarian food",
      desc: "Guachinches are unlicensed farmhouse restaurants that open when the wine harvest comes in — they serve simple Canarian food (papas arrugadas, mojo, grilled meats) at absurdly low prices. They're mostly in the north around La Orotava and La Victoria de Acentejo. Look for handwritten signs.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌋",
      title: "The stargazing at Teide is world-class",
      desc: "Teide National Park is one of the best stargazing sites in the northern hemisphere — the altitude, clean air, and proximity to the Tropic of Cancer make it extraordinary. Several operators run evening stargazing tours (€30–50) with powerful telescopes. The Milky Way is visible to the naked eye most nights.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🗺️",
      title: "Use the Titsa bus app and buy a 10-trip card",
      desc: "The TITSA bus network covers most of Tenerife at genuinely low prices. Download the Titsa app for real-time timetables and buy a rechargeable Bono card (€2 card fee) which gives you roughly 30% discount on each journey. The 342/348 buses to Teide are the key routes to master.",
      color: "bg-amber-50 border-amber-200",
    },
  ],

  faqs: [
    {
      q: "What is the best time of year to visit Tenerife?",
      a: "Tenerife is genuinely a year-round destination — its average temperature never drops below 18°C even in winter. However, spring (March–May) and autumn (October–November) offer the best combination of pleasant temperatures, fewer crowds, and lower prices. July and August are peak season with higher prices but reliable sun everywhere.",
    },
    {
      q: "Which airport should I fly into — TFN (Norte) or TFS (Sur)?",
      a: "TFS (Tenerife Sur) serves most budget airlines and is closest to the resort south (Playa de las Américas, Los Cristianos). TFN (Tenerife Norte) is closer to Puerto de la Cruz, La Laguna, and the north — better for exploring the island properly. If you're renting a car, the choice matters less as the motorway connects them in 50 minutes.",
    },
    {
      q: "Do I need a car in Tenerife?",
      a: "For budget travellers, the TITSA bus network is excellent for the main attractions (Teide, Santa Cruz, La Laguna, Puerto de la Cruz, Los Gigantes). However, a hire car unlocks Anaga's remote trails, the Masca road, Vilaflor, and the rural north in a way buses simply cannot. For 4 days, a hire car is strongly recommended for mid-range and luxury travellers.",
    },
    {
      q: "Is it possible to hike to the Teide summit without the cable car?",
      a: "Yes — there are marked trails from the base of the park (Montaña Blanca route, about 5–6 hours up). You still need the free summit permit for the final section above the Altavista refuge hut (3,270m). The trail is demanding and requires good fitness and proper equipment. Many people combine it with staying overnight at the Altavista refuge to reach the summit at sunrise.",
    },
  ],

  combineWith: ["gran-canaria-4-days", "lanzarote-3-days", "la-gomera-2-days", "madrid-4-days"],
  relatedSlugs: ["ibiza-4-days", "valencia-3-days", "mallorca-5-days", "seville-3-days"],
  galleryQuery: "tenerife teide volcano anaga canary islands",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function TenerifePage() {
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
