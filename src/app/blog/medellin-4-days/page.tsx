import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/medellin-4-days#article",
      "headline": "Medellín in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      "description":
        "Complete 4-day Medellín itinerary covering budget, mid-range and luxury options — El Poblado, Guatapé, Comuna 13, Botero Plaza, Metrocable views, visa info and insider tips.",
      "image": "https://incredibleitinerary.com/og/medellin-4-days.jpg",
      "author": { "@type": "Organization", "name": "IncredibleItinerary" },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
      },
      "datePublished": "2026-01-10",
      "dateModified": "2026-04-05",
      "url": "https://incredibleitinerary.com/blog/medellin-4-days",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Medellín 4-Day Guide", "item": "https://incredibleitinerary.com/blog/medellin-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Medellín",
      "description":
        "Colombia's second city — winner of the Wall Street Journal Most Innovative City award, famous for its cable cars, eternal spring climate, Botero sculptures, flower festival, and the most dramatic urban transformation story of the 21st century.",
      "url": "https://incredibleitinerary.com/blog/medellin-4-days",
      "touristType": ["Adventure Tourist", "Cultural Tourist", "Budget Traveller", "Luxury Traveller"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.2442,
        "longitude": -75.5812,
      },
      "containedInPlace": { "@type": "Country", "name": "Colombia" },
    },
  ],
};

/* ── Page data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Medellín",
  country: "Colombia",
  countryFlag: "🇨🇴",
  slug: "medellin-4-days",
  heroQuery: "medellin colombia cable car metro hillside comunas urban transformation",
  heroAlt: "Medellín Colombia cable car over hillside comunas with city skyline below",
  category: "South America",
  date: "January 10, 2026",
  readTime: "14 min read",

  intro:
    "Once branded the most dangerous city on Earth — home to Pablo Escobar's cartel and a murder rate that paralysed an entire nation — Medellín pulled off something no urban planner had ever dared imagine: it won the Wall Street Journal's award for Most Innovative City in the world. The cable cars that thread up to the hillside comunas didn't just solve a transport problem; they stitched a city back together. Colombia produces 10% of the world's cut flowers, and Medellín is their capital — every August, silleteros carry cascading flower arrangements on their backs through streets packed with a million spectators for the Feria de las Flores. The 'City of Eternal Spring' sits at 1,495 metres, keeping temperatures a perfect 22°C year-round. This is the most remarkable urban transformation story of the 21st century, and it's wide open for you to explore.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$50",
    bestMonths: "Dec–Mar or Jun–Aug (dry seasons)",
    airport: "MDE (José María Córdova)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "affiliate", emoji: "🎟️", label: "Book Activities" },
    { id: "related", emoji: "🗺️", label: "Related Guides" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "No — visa-free entry for Indian passport holders"],
        ["Stay allowed", "Up to 90 days on arrival"],
        ["Extension", "Extendable to 180 days at Migración Colombia"],
        ["Proof needed", "Return/onward ticket + proof of funds (~$35/day)"],
        ["Entry stamp", "Ensure passport stamped at border; keep it safe"],
        ["Pro tip", "Register with your embassy if staying over 30 days"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passport",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "No — visa-free for all major Western passports"],
        ["Stay allowed", "90 days; extendable once for another 90 days"],
        ["Airport tax", "Departure tax typically included in airfare"],
        ["Currency", "Colombian Peso (COP); USD accepted in tourist areas"],
        ["Health rec.", "Yellow fever vaccination recommended for jungle trips"],
        ["Safety note", "Use Uber/InDriver over taxis; avoid flashing valuables"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$50/day",
      days: [
        {
          day: "Day 1",
          title: "El Poblado Arrival + Parque Lleras",
          items: [
            "Fly into MDE; take the Envigado Metro or airport shuttle (~$3) to El Poblado",
            "Check into a hostel in El Poblado (dorms from $12 — try Selina or The Black Sheep)",
            "Walk Parque Lleras and El Poblado streets; try a street bandeja paisa (~$4)",
            "Evening: cheap beer at a local tienda and people-watching on the park benches",
            "Free: Plaza Botero in the evening — Fernando Botero's 23 bronze sculptures fill the square",
          ],
          cost: "$25–35 (hostel dorm + food + metro)",
        },
        {
          day: "Day 2",
          title: "Metrocable + Parque Arví + Comuna 13",
          items: [
            "Metro + Metrocable Línea K to Santo Domingo (cable car is included in metro fare ~$0.80)",
            "Continue on Metrocable Línea L to Parque Arví nature reserve (extra ~$1.50 each way)",
            "Explore Arví's trails and local market; pack your own lunch to save money",
            "Afternoon: head to Comuna 13 for a free self-guided graffiti walk (electric escalators are free)",
            "Optional guided street-art tour of Comuna 13 (~$10 with a local guide — worth every cent)",
          ],
          cost: "$20–30 (transport + food + optional tour)",
        },
        {
          day: "Day 3",
          title: "Guatapé Day Trip (El Peñol Rock)",
          items: [
            "Terminal del Sur bus to Guatapé — 2 hours, ~$4 each way",
            "Climb El Peñol rock: 740 steps, $3 entry — Colombia's single best panoramic view",
            "Wander Guatapé village's zócalos (painted bas-relief walls, every building unique)",
            "Lunch: fresh trout from the reservoir at a local restaurant (~$6)",
            "Return bus to Medellín; evening meal in your hostel neighbourhood",
          ],
          cost: "$25–35 (transport + rock entry + food)",
        },
        {
          day: "Day 4",
          title: "Museo de Antioquia + Las Palmas Market",
          items: [
            "Morning: Museo de Antioquia ($4 entry) — Botero's own donation of 119 paintings and sculptures",
            "Walk through downtown Centro to the Las Palmas flower market (free, open mornings)",
            "Try a cheap almuerzo del día (set lunch) in Centro for ~$3",
            "Afternoon: Laureles neighbourhood — quieter, more local feel; browse the coffee shops",
            "Afternoon flight or evening departure; metro to airport (~$0.80)",
          ],
          cost: "$20–30 (museum + food + transport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$110/day",
      days: [
        {
          day: "Day 1",
          title: "El Poblado + Botero Plaza + Nightlife",
          items: [
            "Private transfer from MDE airport to El Poblado boutique hotel (~$25)",
            "Check into a boutique hotel in El Poblado (from $60/night — try Casa Dann Carlton area)",
            "Late morning: guided walking tour of El Poblado neighbourhood ($20, covers history + transformation)",
            "Afternoon: Plaza Botero and Museo de Antioquia (full Botero collection, $4 entry)",
            "Evening: dinner at Carmen restaurant (El Poblado's best contemporary Colombian kitchen, ~$35pp)",
          ],
          cost: "$90–120 (hotel + transfer + tour + dinner)",
        },
        {
          day: "Day 2",
          title: "Cable Cars + Parque Arví + Comuna 13 Tour",
          items: [
            "Metro + Metrocable combo to Santo Domingo; coffee at a hilltop café with valley views",
            "Metrocable Línea L up to Parque Arví; guided nature walk through the reserve ($15)",
            "Lunch in Arví market — try chicharrón, arepas, and fresh juices (~$10)",
            "Afternoon: professionally guided Comuna 13 tour (3 hrs, $25 — includes transformer story, graffiti, escalators)",
            "Evening: cocktails at Pergamon rooftop bar or El Social in El Poblado (~$20)",
          ],
          cost: "$100–130 (tours + food + drinks)",
        },
        {
          day: "Day 3",
          title: "Guatapé Private Day Trip",
          items: [
            "Private car to Guatapé (~$70 round trip, 2 hours each way with local driver)",
            "El Peñol rock climb: 740 steps, $3 entry — arrive early before tour buses",
            "Private boat tour of the Guatapé reservoir (1.5 hrs, ~$20 per person)",
            "Lunch at Donde las Mellizas — best trout in Guatapé, ~$15",
            "Return via scenic route; stop at a viewpoint above the valley",
          ],
          cost: "$120–150 (private car + activities + lunch)",
        },
        {
          day: "Day 4",
          title: "Coffee Region Day Excursion or Spa Morning",
          items: [
            "Option A: guided day trip to a coffee finca in Santa Elena (~$60 including tour, tasting, lunch)",
            "Option B: morning spa treatment at your hotel; afternoon shopping for Colombian coffee and artisanal chocolates",
            "Lunch at Pergamon or Bonuar in El Poblado (~$20pp)",
            "Afternoon: Envigado neighbourhood — more relaxed, local coffee bars, less touristy than El Poblado",
            "Evening flight or late checkout; private transfer back to MDE (~$25)",
          ],
          cost: "$100–140 (excursion or spa + food + transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$260/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival + Medellín's Best Table",
          items: [
            "Business class arrival at MDE; private luxury transfer to El Poblado ($50)",
            "Check into The Charlee Hotel or Casa Dann Carlton (from $150/night, rooftop pool + city views)",
            "Late afternoon: private city orientation tour with a historian guide ($80, 3 hrs)",
            "Pre-dinner drinks on The Charlee rooftop as the sun sets over the valley",
            "Dinner at El Cielo by Juan Manuel Barrientos — molecular Colombian cuisine, tasting menu ~$80pp",
          ],
          cost: "$280–350 (hotel + private guide + tasting menu dinner)",
        },
        {
          day: "Day 2",
          title: "Private Helicopter Tour + Comuna 13 VIP",
          items: [
            "Private helicopter over the Andes and Medellín valley (30 min, ~$200pp) — one of Latin America's great experiences",
            "Gourmet brunch at Hacienda Junín or in-hotel restaurant",
            "VIP private tour of Comuna 13 with expert urban transformation guide ($60, 3 hrs)",
            "El Peñol in a private vehicle — arrive before crowds, private guide explains geology and history",
            "Evening: Jazz at The Charlee, or private chef cocktail evening",
          ],
          cost: "$350–450 (helicopter + private tours + premium dining)",
        },
        {
          day: "Day 3",
          title: "Guatapé VIP + Reservoir Boat",
          items: [
            "Private luxury SUV to Guatapé ($90 round trip) with bilingual driver-guide",
            "Private climb of El Peñol before public opening; photographer to capture the view (~$50)",
            "Private boat tour of Guatapé reservoir, stopping at floating restaurant for lunch ($40pp)",
            "Visit a private coffee finca overlooking the reservoir for private cupping session",
            "Return to Medellín; cocktails and dinner at Urbano or Carmen",
          ],
          cost: "$300–380 (private transport + experiences + meals)",
        },
        {
          day: "Day 4",
          title: "Spa + Coffee Culture + Departure",
          items: [
            "Morning: full spa treatment at The Charlee or Casa Dann Carlton spa ($80–120)",
            "Private coffee experience: a master roaster at a specialty café teaches the 'third wave' Colombia story",
            "Farewell lunch at Enrique restaurant or Bonuar — best contemporary tasting menu in Medellín",
            "Afternoon: private shopping tour of artisanal markets for emeralds, ceramics, and coffee",
            "Private transfer to MDE for evening departure ($50)",
          ],
          cost: "$280–350 (spa + private experiences + farewell dinner)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$10–18 (hostel dorm)",
      food: "$8–12 (street food, set lunches)",
      transport: "$3–5 (metro + cable cars)",
      activities: "$10–18 (entry fees, tours)",
      total: "~$50/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$55–85 (boutique hotel)",
      food: "$25–35 (restaurants)",
      transport: "$15–25 (Uber/private car)",
      activities: "$25–45 (guided tours)",
      total: "~$110/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$150–250 (5-star hotel)",
      food: "$60–100 (fine dining)",
      transport: "$40–80 (private transfers)",
      activities: "$80–200 (helicopter, VIP)",
      total: "~$260/day",
    },
    {
      tier: "🎪 Feria (Aug)",
      accommodation: "$20–30 premium (book 3+ months ahead)",
      food: "$10–30 (festival food stalls)",
      transport: "$5–10 (metro fills up)",
      activities: "$0–40 (parade, street events)",
      total: "+20–30% surge",
    },
    {
      tier: "🗓️ Avg Trip (4d)",
      accommodation: "$40–1,000 total",
      food: "$32–400 total",
      transport: "$12–320 total",
      activities: "$40–800 total",
      total: "$200–1,040 total",
    },
  ],

  mistakes: [
    {
      icon: "🚖",
      title: "Taking yellow taxis from the airport",
      desc: "Unofficial taxis at MDE airport are notorious for overcharging tourists. Use the official Aeropuerto taxi booth inside arrivals (fixed rates), the Envigado Metro bus, or pre-book a transfer via your hotel or Uber.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📅",
      title: "Visiting Guatapé on a Colombian holiday weekend",
      desc: "El Peñol sees 5,000+ visitors on long weekends. Queues for the 740 steps can exceed 2 hours. Go on a Tuesday–Thursday, leave Medellín before 8am, and you'll have the summit nearly to yourself.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏨",
      title: "Staying only in El Poblado",
      desc: "El Poblado is safe and convenient but prices are 40% higher than the rest of the city and it feels like a tourist bubble. Spend at least one day in Laureles or Envigado to see how Paisas actually live.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💊",
      title: "Underestimating altitude on arrival",
      desc: "Medellín at 1,495m is gentler than Bogotá but the heat and humidity can dehydrate you faster than expected. Drink 3 litres of water on day one, avoid heavy alcohol the first night, and pace yourself on the Guatapé climb.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "📱",
      title: "Not getting a local SIM or data plan",
      desc: "Uber and InDriver are far safer than street taxis in Medellín, but they need data. Buy a Claro or Movistar SIM at the airport (~$5 for 5GB) the moment you land. It's the most important $5 you'll spend.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🚠",
      title: "The cable car is the best free view in South America",
      desc: "The Metrocable Línea K from Acevedo station to Santo Domingo costs less than $1 (included in metro fare) and delivers a 20-minute ride over the hillside comunas with views of the full Medellín valley. No entry fee, no queue, no tourist markup. Ride it at sunset.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "☕",
      title: "Order tinto, not 'coffee'",
      desc: "In Colombian Spanish, asking for 'coffee' in a local place gets you instant coffee. Ask for 'tinto' (black, from a fresh pot) or 'café de filtro' (filter/pour-over). Specialty third-wave coffee shops in El Poblado and Laureles serve world-class Colombian single-origin for $2–3.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌺",
      title: "Time your trip for Feria de las Flores (first week of August)",
      desc: "The Feria is one of South America's greatest festivals — a week of parades, concerts, classic car shows, and the silletero parade where flower farmers carry arrangements weighing up to 80kg on their backs. Book accommodation 3–4 months ahead. Prices rise but the experience is unforgettable.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🎨",
      title: "Buy a GetYourGuide tour for Comuna 13 — the context transforms the experience",
      desc: "Walking through Comuna 13 without context is just photos. A guided tour ($10–25) tells you which murals document the military Operation Orion of 2002, which celebrate the youth who reclaimed the neighbourhood, and introduces you to local artists who lived through the transformation. Book at: https://www.getyourguide.com/s/?q=Medellin+Comuna+13&partner_id=PSZA5UI",
      color: "bg-green-50 border-green-200",
    },
  ],

  faqs: [
    {
      q: "Is Medellín safe for tourists in 2026?",
      a: "Yes, for informed tourists. El Poblado, Laureles, and Envigado are as safe as any major Latin American city. The historic violence was concentrated in peripheral comunas and has fallen dramatically. Use Uber/InDriver rather than street taxis, don't walk with expensive gear on display at night, and avoid the downtown La Candelaria area after dark. Hundreds of thousands of tourists visit safely each year.",
    },
    {
      q: "How many days do I need in Medellín?",
      a: "Four days covers the essential Medellín experience: El Poblado, Botero Plaza, one full cable-car day, the Guatapé day trip, and time in a local neighbourhood. Add two more days if you want to reach the coffee region (Salento or Santa Elena) or attend a festival. Medellín also works well as a longer base for Colombian exploration.",
    },
    {
      q: "What's the best neighbourhood to stay in?",
      a: "El Poblado is the tourist standard — safe, easy, restaurants and nightlife everywhere, but 30–40% more expensive. Laureles is the local favourite — great restaurants, a more authentic Paisa atmosphere, and slightly cheaper. Envigado (technically a separate municipality) offers the best value. Avoid staying in Centro as a first-time visitor.",
    },
    {
      q: "Can I do the Guatapé day trip without a tour?",
      a: "Absolutely. Take the 6am or 7am bus from Terminal del Sur (south bus terminal) — about $4 each way, 2 hours. Buses run frequently. Climb El Peñol independently ($3 entry), wander Guatapé village, and catch an afternoon bus back. The whole day costs under $20 independently versus $40–60 with a tour. The tour adds context and convenience but isn't essential.",
    },
  ],

  combineWith: ["cartagena", "bogota", "salento-coffee-region", "san-andres-islands"],
  relatedSlugs: ["panama-city-3-days", "botswana-okavango-6-days", "cartagena-3-days"],

  galleryQuery: "medellin colombia poblado commune 13 botero guatape orchids flowers",
};

/* ── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Medellín in 4 Days: Complete Travel Guide 2026 (Budget to Luxury) | IncredibleItinerary",
  description:
    "Your complete 4-day Medellín itinerary: cable cars over the comunas, Guatapé rock climb, Botero Plaza, Comuna 13 graffiti tours, visa info, budget breakdown and pro tips for 2026.",
  keywords: [
    "Medellín travel guide",
    "Medellín 4 days",
    "Medellín itinerary 2026",
    "Guatapé El Peñol",
    "Medellín cable car",
    "Comuna 13 graffiti tour",
    "Colombia travel",
    "Medellín budget guide",
    "Feria de las Flores",
    "Botero Plaza Medellín",
  ],
  openGraph: {
    title: "Medellín in 4 Days: Complete Travel Guide 2026 | IncredibleItinerary",
    description:
      "From cable cars over the hillside comunas to 740 steps up El Peñol rock — the complete 4-day Medellín guide for every budget.",
    url: "https://incredibleitinerary.com/blog/medellin-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/medellin-4-days.jpg",
        width: 1200,
        height: 630,
        alt: "Medellín Colombia cable car over hillside comunas with city skyline below",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medellín in 4 Days: Complete Travel Guide 2026",
    description:
      "Cable cars, graffiti tours, orchids and the world's most remarkable urban transformation — 4-day Medellín guide for every budget.",
    images: ["https://incredibleitinerary.com/og/medellin-4-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/medellin-4-days",
  },
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function MedellinPage() {
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
