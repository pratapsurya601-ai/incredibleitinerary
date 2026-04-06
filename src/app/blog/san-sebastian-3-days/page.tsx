import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "San Sebastián in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    "description": "Your complete San Sebastián 3-day itinerary covering La Concha beach, pintxos bars in Parte Vieja, Monte Urgull, Monte Igueldo, and day trips to Biarritz and the Guggenheim Bilbao.",
    "image": "https://incredibleitinerary.com/og/san-sebastian-3-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/san-sebastian-3-days" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "San Sebastián 3 Days", "item": "https://incredibleitinerary.com/blog/san-sebastian-3-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "San Sebastián",
    "description": "The Basque city with the most Michelin stars per capita in the world, famous for La Concha beach, pintxos bars, Monte Urgull, and its extraordinary gastronomic culture.",
    "url": "https://incredibleitinerary.com/blog/san-sebastian-3-days",
    "touristType": ["Gastronomic Tourism", "Beach Tourism", "Cultural Tourism", "Surfing"],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.3183,
      "longitude": -1.9812
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "Spain"
    }
  }
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "San Sebastián 3-Day Itinerary 2026: Trip Planner",
  description: "Plan your San Sebastián trip in 3 days. Plan the perfect 3-day San Sebastián trip: pintxos in Parte Vieja, La Concha beach, Monte Urgull, day trips to.",
  keywords: ["San Sebastián travel guide", "San Sebastian 3 days itinerary", "La Concha beach", "pintxos bars Parte Vieja", "Basque Country Spain", "Monte Urgull", "Guggenheim Bilbao day trip", "San Sebastián food guide"],
  openGraph: {
    title: "San Sebastián 3-Day Itinerary 2026: Trip Planner",
    description: "More Michelin stars per capita than anywhere on Earth, pintxos at €2 each, La Concha bay curving between two green mountains — 3 days in Spain's gastronomic capital.",
    url: "https://incredibleitinerary.com/blog/san-sebastian-3-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/san-sebastian-3-days.jpg", width: 1200, height: 630, alt: "San Sebastián La Concha beach with city skyline Basque Country Spain" }],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Sebastián 3-Day Itinerary 2026: Trip Planner",
    description: "Budget €60/day to luxury €320/day — 3-day San Sebastián itinerary with pintxos crawls, La Concha, Bilbao day trip & more.",
    images: ["https://incredibleitinerary.com/og/san-sebastian-3-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/san-sebastian-3-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "San Sebastián",
  country: "Spain",
  countryFlag: "🇪🇸",
  slug: "san-sebastian-3-days",
  heroQuery: "san sebastian la concha beach pintxos basque country spain",
  heroAlt: "San Sebastián La Concha beach with city skyline Basque Country Spain",
  category: "Europe",
  date: "January 15, 2026",
  readTime: "12 min read",
  intro:
    "The city with the most Michelin stars per capita in the world — but where the real action is standing at the bar eating pintxos, the Basque answer to tapas, at €2 each with a txakoli wine poured from a height to add effervescence; La Concha bay curving between two green mountains like the most beautiful urban beach in Europe; and a surfing culture that goes back 70 years — San Sebastián is Spain's gastronomic capital and one of its most beautiful cities.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€60",
    bestMonths: "Jun–Sep",
    airport: "EAS (San Sebastián) or BIO (Bilbao, 100km)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "pintxos", emoji: "🍢", label: "Pintxos Guide" },
    { id: "day-trips", emoji: "🚌", label: "Day Trips" },
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
        ["Visa required", "Schengen Short-Stay Visa (Spain)"],
        ["Fee", "€80"],
        ["Processing", "15–30 business days"],
        ["Apply via", "VFS Global or Spanish Consulate"],
        ["Duration", "Up to 90 days in any 180-day period"],
        ["Tip", "Show proof of accommodation and return flights; apply 6 weeks early"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇦🇺",
      title: "US / UK / EU / Western Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["EU Citizens", "Free movement — no formalities"],
        ["US / UK / AU / CA", "Visa-free up to 90 days"],
        ["ETIAS", "Required from mid-2025 (€7, online pre-registration)"],
        ["Note", "Crossing into Biarritz, France is seamless — no border checks in Schengen"],
        ["Currency", "Euro (€) — cards accepted everywhere"],
        ["Tip", "France uses Euro too, so no currency exchange needed for Biarritz day trip"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€60/day",
      days: [
        {
          day: "Day 1",
          title: "Pintxos Crawl & La Concha Beach",
          items: [
            "Arrive by bus from Bilbao Airport (€16–18, 1hr 15min) or direct train from Madrid/Barcelona",
            "Check into a hostel in Gros neighbourhood (dorm €22–28/night) — cool surfer vibe, close to Zurriola beach",
            "Morning: walk La Concha promenade — rated the most beautiful city beach in Europe, free entry, swim if warm enough",
            "Lunch: pintxos crawl in Parte Vieja (Old Town) — visit Bar Goiz Argi, La Cuchara de San Telmo, Bar Txepetxa for anchovy pintxos",
            "The system: walk in, point at pintxos on the bar, order a drink, pay €2–3 per bite — budget €12–15 for a full lunch",
            "Afternoon: climb Monte Urgull — free, 30-minute walk, fort at the top, panoramic views of La Concha and city",
            "Evening pintxos round 2: different bars — try Bar Borda Berri and Atari Gastroteka for hot pintxos cooked to order",
          ],
          cost: "€45–55 including accommodation",
        },
        {
          day: "Day 2",
          title: "Monte Igueldo, Zurriola Surfing & Sidrerías",
          items: [
            "Morning: Monte Igueldo funicular (€4.50 return) — hilltop amusement park from 1912 with the best view of La Concha bay",
            "Walk back down via the residential hillside and through Ondarreta beach",
            "Zurriola beach in the afternoon — San Sebastián's surf beach across the river Urumea, watch the surfers or take a lesson (€30–40 with board)",
            "San Telmo Museum — Basque history and art in a 16th-century convent, €6, excellent free on Sunday before 2pm",
            "Evening: take a taxi to a sidrería (cider house) on the outskirts, 20 min — Petritegi or Zelaia are excellent, all-inclusive dinner with cider poured from barrels (€30–35 including food and unlimited cider)",
            "Walk Gros neighbourhood bars on return — younger, less touristy pintxos scene",
          ],
          cost: "€50–60",
        },
        {
          day: "Day 3",
          title: "Day Trip to Biarritz, France (45 min)",
          items: [
            "Bus to Biarritz, France (€4.50 each way, runs every 30 min from Pl. del Buen Pastor) — no border check",
            "Biarritz Grande Plage — the grande dame of French surf beaches; coffee at a beachfront café (French prices similar to Spanish)",
            "Walk Le Rocher de la Vierge — rock connected by bridge to a cliff-top statue, waves crashing below",
            "Marché Couvert de Biarritz (covered market) — excellent Basque produce, cheese, ham, and local wine",
            "Return to San Sebastián for a final lunch pintxos session — try Bar Atari or Bergara Bar in Gros",
            "Afternoon stroll through La Bretxa market area and Parte Vieja boutiques",
            "Farewell: one final txakoli (fizzy Basque white wine, €2–3) standing at a bar in the Old Town",
          ],
          cost: "€40–50",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€130/day",
      days: [
        {
          day: "Day 1",
          title: "La Concha, Old Town & Fine Pintxos",
          items: [
            "Fly into Bilbao (BIO) and take the direct bus to San Sebastián (€16, 1hr 15min) or hire a car for the week",
            "Check into a 3-star hotel on or near La Concha (€100–140/night) — wake up to bay views",
            "Morning swim at La Concha — rent a sun lounger (€5) and enjoy Europe's most beautiful city beach",
            "Lunch: sit-down pintxos meal at Restaurante Arzak (book weeks ahead) or a more accessible txoko-style restaurant in Parte Vieja (€25–35)",
            "Afternoon: Aquarium San Sebastián — impressive, right on the port, €13; walk through Parte Vieja afterwards",
            "Evening: Monte Urgull at sunset — climb the walls for the light on La Concha",
            "Dinner: modern Basque cuisine at Bodegón Alejandro or Mirador de Ulía — €45–60 with wine",
          ],
          cost: "€120–140 including accommodation",
        },
        {
          day: "Day 2",
          title: "Sidrería Morning, Surfing & Gastronomic Tour",
          items: [
            "Morning: guided food tour of Parte Vieja — expert guide walks you through 5–6 pintxos bars, explaining Basque food culture (€45–60 per person, well worth it)",
            "La Bretxa market: browse the fresh produce stalls — Basque cheese, Ibérico ham, Idiazabal sheep's cheese",
            "Zurriola beach: book a 2-hour surf lesson with a local surf school (€35–45) — San Sebastián's surf scene is unpretentious and excellent",
            "Monte Igueldo funicular and amusement park: €4.50, genuinely charming and old-fashioned",
            "Evening: sidrería dinner — taxi to Astigarraga (Basque cider country, 10 min) for a full cider-house dinner at Petritegi (€35 all-inclusive)",
            "Late night: Parte Vieja bar crawl — the Old Town gets lively after 10pm, especially on weekends",
          ],
          cost: "€100–125",
        },
        {
          day: "Day 3",
          title: "Bilbao & Guggenheim Day Trip",
          items: [
            "Early bus or drive to Bilbao (1hr 15min) — the Guggenheim Museum is genuinely one of the world's great buildings",
            "Guggenheim Bilbao — arrive at opening (10am), €16 entry; allow 3 hours for the collection and the architecture",
            "Lunch in Bilbao's Casco Viejo (Old Town) — pintxos bars here are excellent and slightly less expensive than San Sebastián",
            "Walk the Abandoibarra waterfront: Jeff Koons' Puppy sculpture, the Iberdrola Tower, the estuary",
            "Return to San Sebastián by 6pm; check out La Perla spa on La Concha beachfront (seawater therapies, €35–50)",
            "Farewell dinner: Bodegón Alejandro or Rekondo restaurant for grilled Basque fish (merluza, kokotxas) — €45–55",
          ],
          cost: "€95–115",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€320/day",
      days: [
        {
          day: "Day 1",
          title: "La Concha Arrival & Arzak Dinner",
          items: [
            "Private transfer from Bilbao Airport (€80–100)",
            "Check into Hotel Maria Cristina (iconic Belle Époque hotel on the Urumea river, €250–400/night) or Villa Soro (boutique Basque villa, €200–300)",
            "Personal pintxos guide for the afternoon — private 3-hour Parte Vieja tour with a local food expert (€120–150 for 2 people)",
            "Afternoon spa at the Gran Hotel La Perla — Art Nouveau hotel with a rooftop pool overlooking La Concha (day pass €50–80)",
            "Dinner at Arzak — arguably the world's most famous Basque restaurant, 3 Michelin stars, 4th generation, tasting menu €260–280pp; book 3–6 months ahead",
            "Post-dinner: cocktails at the Hotel Maria Cristina bar — elegant and historic",
          ],
          cost: "€450–600 including accommodation",
        },
        {
          day: "Day 2",
          title: "Private Food Tour & Akelarre Lunch",
          items: [
            "Private morning cooking class with a Basque chef — learn to make pintxos, bacalao al pil-pil, and txangurro (stuffed crab), €150–200pp",
            "Lunch at Akelarre (3 Michelin stars, Pedro Subijana) — clifftop restaurant above the Bay of Biscay, tasting menu €240–260pp, views are extraordinary",
            "Afternoon: private sailing trip on the Bay of Biscay — 3-hour charter, €200–300 for the boat",
            "Monte Urgull private guided walk at sunset with a historian — Basque history, the fort, the city layout (€80)",
            "Dinner: Mugaritz (2 Michelin stars, Andoni Aduriz) — avant-garde Basque cuisine, 20-course tasting menu €220–250pp, one of the world's most experimental restaurants",
          ],
          cost: "€500–700",
        },
        {
          day: "Day 3",
          title: "Biarritz, Cider Country & Farewell",
          items: [
            "Private chauffeured day to Biarritz (45 min) — lunch at the celebrated Hôtel du Palais restaurant (Belle Époque palace, €80–120pp)",
            "Biarritz villa district walk and the Rocher de la Vierge; boutique shopping on Avenue de la Marne",
            "Return to San Sebastián via the Astigarraga cider country — private tour and tasting at a historic sidrería (€50–80pp)",
            "Afternoon: Basque wine tasting — txakoli and Rioja Alavesa private tasting in San Sebastián's Gros neighbourhood (€60)",
            "La Perla spa thermal circuit — seawater hydrotherapy with views of La Concha (€45)",
            "Farewell dinner: Zuberoa restaurant (1 Michelin star, historic farmhouse setting outside the city) — €120–150pp; perfect final-night splurge",
          ],
          cost: "€400–550",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€22–30 (hostel dorm)",
      food: "€15–22 (pintxos bars, markets)",
      transport: "€5–10 (bus/walk)",
      activities: "€8–15",
      total: "€60–80/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€100–140 (3-star hotel)",
      food: "€40–60 (restaurants + wine)",
      transport: "€15–25 (bus + hire car)",
      activities: "€25–40",
      total: "€130–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–400 (Maria Cristina / Villa Soro)",
      food: "€150–280 (Michelin tasting menus)",
      transport: "€40–100 (private transfers)",
      activities: "€80–150 (private guides, spa, sailing)",
      total: "€320–550/day",
    },
    {
      tier: "🍢 Pintxos Only",
      accommodation: "€22–35 (hostel / guesthouse)",
      food: "€20–30 (pure pintxos crawls)",
      transport: "€3–8 (walk mostly)",
      activities: "€5–12 (museums, funicular)",
      total: "€60–85/day",
    },
    {
      tier: "🌊 Surf + Beach",
      accommodation: "€30–60 (Gros neighbourhood)",
      food: "€18–28 (Gros bars, casual)",
      transport: "€5–12",
      activities: "€35–50 (surf lesson + board)",
      total: "€80–130/day",
    },
  ],

  mistakes: [
    {
      icon: "🍽️",
      title: "Sitting down for dinner before 9pm",
      desc: "San Sebastián runs on Basque time. Locals don't eat dinner before 9pm — arrive at a restaurant at 7pm and you'll either be refused or ushered into a ghost-town dining room. Embrace the rhythm: pintxos from 7–9pm, dinner from 9:30pm onwards. This is part of why the city's food culture feels so alive.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "📍",
      title: "Only eating in the Parte Vieja (Old Town)",
      desc: "Yes, Parte Vieja is excellent — but the Gros neighbourhood across the river has equally good pintxos bars with fewer tourists and slightly lower prices. Borda Berri, Bergara Bar, and Bar Zeruko in Gros are world-class. Spread your crawls across both neighbourhoods.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🎟️",
      title: "Not booking Michelin restaurants months in advance",
      desc: "Arzak, Akelarre, and Mugaritz — San Sebastián's 3-Michelin-star triumvirate — are booked solid 3–6 months ahead. If luxury dining is your reason for visiting, lock in reservations before you book your flights. Turning up and hoping for a table is a fantasy.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🌧️",
      title: "Underestimating the rain",
      desc: "The Basque Country is the greenest part of Spain because it rains — a lot. Even in summer, pack a waterproof layer. The pintxos bars and cider houses are perfect shelter, which is why the food culture thrives. Locals consider the rain a badge of honour; don't let it catch you off guard.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚗",
      title: "Driving or parking in the city centre",
      desc: "San Sebastián's Old Town is mostly pedestrianised and the rest of the city is navigated perfectly on foot. Parking is expensive and scarce. If arriving by car, use the park-and-ride at Amara and walk or take a taxi. The city is compact enough that you'll rarely need any transport within it.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🍷",
      title: "Order txakoli — and watch it being poured",
      desc: "Txakoli is the local Basque white wine — light, slightly fizzy, bone dry. It's always poured from a height (sometimes 60cm above the glass) to add natural carbonation and release the aromas. It costs €2–3 a glass, pairs perfectly with pintxos, and is an unmissably theatrical experience. Ask for 'txakoli' and enjoy the performance.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🌅",
      title: "Watch sunset from Monte Igueldo",
      desc: "The funicular up Monte Igueldo costs €4.50 return. At the top, the old amusement park rides are delightfully retro. But the real reason to go is the view at sunset: La Concha bay becomes a sheet of copper, the islands glow, and the city lights slowly come on. Go 45 minutes before sunset and stay until dark.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🏄",
      title: "Take a surf lesson at Zurriola",
      desc: "San Sebastián has been a surf city since the 1960s. The Zurriola beach (across the Urumea river from La Concha) has reliable beach breaks and multiple surf schools offering 2-hour beginner lessons for €30–40 including wetsuit and board. Even if you've never surfed, this is a genuine 'I'm actually in the Basque Country' experience.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🎟️",
      title: "Book a food tour for Day 1",
      desc: "San Sebastián's pintxos scene can be overwhelming without context — which bars are tourist traps, which are legendary, what to order and how. A local food guide for 3 hours on your first evening will transform the rest of the trip. GetYourGuide has excellent vetted tours from €40–60 per person.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "How much does a pintxos crawl actually cost?",
      a: "Dramatically less than you'd think for the quality. A standard pintxo (singular) costs €2–3. A txakoli wine costs €2–3. A satisfying evening crawl of 6–8 pintxos and 3 drinks comes to €15–22 per person — cheaper than a main course at a mid-range restaurant in London or New York. This is why San Sebastián is paradoxically one of Europe's great cheap gourmet destinations.",
    },
    {
      q: "Is San Sebastián worth visiting for non-foodies?",
      a: "Absolutely yes. La Concha beach is genuinely one of the most beautiful city beaches in Europe. Monte Urgull offers wonderful hiking and a fort with panoramic views. Monte Igueldo has spectacular vistas and a charming vintage funicular. The Gros neighbourhood has a thriving surf culture. The day trip to Biarritz (45 min) is one of the easiest and most rewarding cross-border trips in Europe. The food is exceptional even if you're not obsessed with it.",
    },
    {
      q: "Should I fly into San Sebastián or Bilbao?",
      a: "Almost always Bilbao (BIO). San Sebastián's airport (EAS) has very few international routes and no transatlantic connections. Bilbao has regular flights from most European cities and is 100km from San Sebastián — the bus takes 1hr 15min and costs €16–18. Alternatively, San Sebastián has excellent train connections from Madrid (5hrs by standard train, 5.5hrs by high-speed, ~€30–60) and Barcelona (5.5hrs, ~€40–70).",
    },
    {
      q: "Can I do the Guggenheim Bilbao as a day trip from San Sebastián?",
      a: "Yes, easily — and it's one of the best day trips in northern Spain. The bus from San Sebastián to Bilbao runs every 30 minutes (€16–18 return, 1hr 15min). Arrive at the Guggenheim when it opens at 10am, spend 3 hours there, have lunch in Bilbao's Casco Viejo pintxos bars, walk the Abandoibarra waterfront, and be back in San Sebastián by early evening. A hugely satisfying day.",
    },
  ],

  combineWith: ["bilbao-2-days", "biarritz-2-days", "barcelona-4-days"],
  relatedSlugs: ["barcelona-4-days", "mallorca-4-days", "lisbon-4-days", "porto-3-days"],

  galleryQuery: "san sebastian pintxos la concha beach parte vieja basque country",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function SanSebastianPage() {
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
