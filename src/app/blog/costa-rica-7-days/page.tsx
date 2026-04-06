import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Costa Rica in 7 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "A complete 7-day Costa Rica travel guide covering Arenal Volcano, Monteverde Cloud Forest, Manuel Antonio, surfing and wildlife — for every budget from $75/day to $380/day.",
    "image": "https://incredibleitinerary.com/og/costa-rica-7-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/costa-rica-7-days"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Costa Rica 7 Days", "item": "https://incredibleitinerary.com/blog/costa-rica-7-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Costa Rica",
    "description": "A Central American nation renowned for biodiversity, active volcanoes, cloud forests, and the Pura Vida philosophy.",
    "geo": { "@type": "GeoCoordinates", "latitude": 9.7489, "longitude": -83.7534 },
    "touristType": ["Nature Traveller", "Adventure Traveller", "Wildlife Enthusiast"],
    "url": "https://incredibleitinerary.com/blog/costa-rica-7-days"
  }
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Costa Rica 7-Day Itinerary 2026: Trip Planner",
  description: "Plan your Costa Rica trip in 7 days. 7-day Costa Rica itinerary covering Arenal Volcano, Monteverde Cloud Forest, Manuel Antonio and more — from $75/day.",
  keywords: ["Costa Rica itinerary", "Costa Rica 7 days", "Arenal Volcano", "Monteverde Cloud Forest", "Manuel Antonio", "Costa Rica budget travel", "Pura Vida"],
  openGraph: {
    title: "Costa Rica 7-Day Itinerary 2026: Trip Planner",
    description: "7-day Costa Rica itinerary covering Arenal Volcano, Monteverde Cloud Forest, Manuel Antonio — from $75/day to $380/day.",
    url: "https://incredibleitinerary.com/blog/costa-rica-7-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/costa-rica-7-days.jpg", width: 1200, height: 630, alt: "Costa Rica Arenal Volcano with rainforest and cloud forest wildlife" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Costa Rica 7-Day Itinerary 2026: Trip Planner",
    description: "7-day Costa Rica itinerary — Arenal, Monteverde, Manuel Antonio, $75–$380/day.",
    images: ["https://incredibleitinerary.com/og/costa-rica-7-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/costa-rica-7-days" },
};

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Costa Rica",
  country: "Costa Rica",
  countryFlag: "🇨🇷",
  slug: "costa-rica-7-days",
  heroQuery: "costa rica arenal volcano jungle sloth toucan wildlife",
  heroAlt: "Costa Rica Arenal Volcano with rainforest and cloud forest wildlife",
  category: "Central America",
  date: "January 15, 2026",
  readTime: "14 min read",
  intro: "A country so committed to the environment it produces 99% of its electricity from renewables. Sloths move so slowly they grow algae on their fur in the cloudforest. Arenal Volcano erupts gently while you soak in a hot spring at its base. You surf the same wave as a sea turtle on the Nicoya Peninsula. The Pura Vida philosophy turns a simple lifestyle into a national identity. Costa Rica — where the jungle always wins.",

  stats: {
    duration: "7 Days",
    budgetFrom: "$75",
    bestMonths: "Dec–Apr (dry season)",
    airport: "SJO (Juan Santamaría, San José)",
  },

  toc: [
    { id: "visa",        emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights",  emoji: "🌋", label: "Top Highlights" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "gallery",     emoji: "📸", label: "Photo Gallery" },
    { id: "combine",     emoji: "🗺️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "No — visa-free entry"],
        ["Stay Allowed", "90 days on arrival"],
        ["Passport Validity", "6 months beyond stay"],
        ["Proof Required", "Return ticket + sufficient funds"],
        ["Extension", "Extendable at immigration office"],
        ["Note", "One of the few visa-free countries for Indian passport holders in the Americas"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passport",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required", "No — visa-free entry"],
        ["Stay Allowed", "90 days on arrival"],
        ["Passport Validity", "Valid for duration of stay"],
        ["Proof Required", "Return ticket recommended"],
        ["Extension", "Possible via immigration (Dirección General de Migración)"],
        ["Note", "Costa Rica is not part of CA-4 — 90-day clock is separate from other Central American countries"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Backpacker",
      sub: "$75/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival in San José → La Fortuna by shuttle",
          items: [
            "Land at SJO, take shared Interbus shuttle to La Fortuna (3–4 hrs, ~$35)",
            "Check into a hostel dorm near the main strip (Selina La Fortuna or similar, ~$18/night)",
            "Walk to the free viewpoint at the edge of town for first glimpse of Arenal Volcano",
            "Eat at a local soda (family restaurant) — rice, beans, chicken casado for $4",
            "Hang out on the hostel terrace and meet fellow travellers",
          ],
          cost: "$70 (shuttle $35, dorm $18, food $12, misc $5)",
        },
        {
          day: "Day 2",
          title: "Arenal Volcano hike + free hot springs",
          items: [
            "Rent a bicycle (~$10/day) and ride Arenal Volcano National Park perimeter trails",
            "Hike the Las Coladas trail (lava field trail from 1992 eruption) — entry ~$18",
            "Picnic lunch from La Fortuna market (~$5)",
            "Free hot springs: Río Cholín — walk 1.5km from town to the free riverside hot spring pool (local secret)",
            "Dinner at Soda La Hormiga — best casado in town for $5",
          ],
          cost: "$65 (park entry $18, bike $10, food $20, springs free, misc $17)",
        },
        {
          day: "Day 3",
          title: "Hanging bridges + La Fortuna Waterfall",
          items: [
            "Morning: La Fortuna Waterfall hike — 500 steps down, worth every one ($18 entry)",
            "Swim in the pool at the base of the 70-metre waterfall",
            "Afternoon: Mistico Hanging Bridges (self-guided, ~$24) — 16 bridges over primary rainforest canopy",
            "Spot toucans, howler monkeys, and poison dart frogs",
            "Evening: Cook dinner at hostel or grab a $3 pizza slice at the market",
          ],
          cost: "$70 (waterfall $18, bridges $24, food $15, misc $13)",
        },
        {
          day: "Day 4",
          title: "Monteverde Cloud Forest (transfer day)",
          items: [
            "Take the scenic jeep-boat-jeep transfer from La Fortuna to Monteverde (~$30, 3 hrs — far better than the 5-hour bus)",
            "Check in to a hostel or budget guesthouse in Santa Elena (~$20/night)",
            "Explore the Santa Elena Cloud Forest Reserve (cheaper than Monteverde main reserve, $14 entry)",
            "Afternoon walk through the cloud forest — spot howler monkeys, coatis, and if lucky, resplendent quetzals",
            "Dinner at Taco Taco or a local soda in Santa Elena",
          ],
          cost: "$80 (transfer $30, hostel $20, reserve $14, food $16)",
        },
        {
          day: "Day 5",
          title: "Zip-lining above the cloud forest canopy",
          items: [
            "Morning: Budget zip-lining with 100% Aventura or Extremo (~$45 for 11 cables including a Tarzan swing)",
            "Afternoon: Free walk on the Cerro Plano neighbourhood trails — no ticket needed",
            "Coffee stop at Café Caburé — famous for homemade chocolate and quetzal sightings in the fig tree outside",
            "Visit the cheese factory (La Lechería) for affordable local cheese and snacks",
            "Pack and prep for tomorrow's Manuel Antonio bus",
          ],
          cost: "$75 (zip-line $45, food $20, souvenirs $10)",
        },
        {
          day: "Day 6",
          title: "Manuel Antonio National Park",
          items: [
            "Take the 6am Interbus shuttle Monteverde → Manuel Antonio (5 hrs, ~$45 with connection)",
            "Check in to a budget guesthouse in Quepos (~$22/night)",
            "Afternoon entry to Manuel Antonio National Park ($18) — the park closes at 4pm, afternoon is quieter",
            "Spot white-faced capuchin monkeys, sloths, coatis, and scarlet macaws — they are genuinely fearless",
            "Swim at Playa Biesanz (just outside park, free) at sunset",
          ],
          cost: "$100 (shuttle $45, hostel $22, park $18, food $15)",
        },
        {
          day: "Day 7",
          title: "Manuel Antonio beach day + return to San José",
          items: [
            "Full morning in Manuel Antonio National Park — enter at 7am when it opens (book tickets online in advance, max 1,500 visitors/day)",
            "Hike to Punta Catedral viewpoint — 360° views of the Pacific and islands",
            "Watch for three-toed sloths in the cecropia trees along the main path",
            "Afternoon bus back to San José (~$10, 3 hrs) for evening flight, or spend the night",
            "Budget souvenir shopping at Mercado Artesanal near Parque Central",
          ],
          cost: "$60 (park $18, bus $10, food $20, misc $12)",
        },
      ],
    },
    {
      label: "Mid-Range Explorer",
      sub: "$160/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival in San José → La Fortuna private transfer",
          items: [
            "Private transfer from SJO to La Fortuna (~$120 for up to 4 people) — comfortable, door-to-door",
            "Check in to a 3-star boutique hotel or B&B near Arenal ($60–80/night)",
            "Welcome dinner at Don Rufino restaurant — the best restaurant in La Fortuna, try the tenderloin in mushroom sauce",
            "Evening stroll along La Fortuna park and church",
            "Pre-book Arenal hike and hot springs for tomorrow",
          ],
          cost: "$160 (transport $50/pp, hotel $70, dinner $25, misc $15)",
        },
        {
          day: "Day 2",
          title: "Arenal Volcano + Tabacón Hot Springs",
          items: [
            "Guided Arenal Volcano hike with a naturalist guide ($35) — the stories about the 1968 eruption that destroyed three villages are gripping",
            "Afternoon: Tabacón Grand Thermal Resort day pass (~$85) — series of thermally heated pools and waterfalls in a lush garden at the volcano's base",
            "Kayak or paddleboard on Lago Arenal ($30) — views of the volcano from the water",
            "Dinner back at hotel or at El Novillo del Arenal (lake-view steakhouse)",
          ],
          cost: "$165 (guide $35, hot springs $85, kayak $30, food $15)",
        },
        {
          day: "Day 3",
          title: "La Fortuna Waterfall + white water rafting",
          items: [
            "Morning: La Fortuna Waterfall with a guide ($18 entry + $15 guide)",
            "Afternoon: Grade III–IV white water rafting on the Balsa River with Desafío Adventures (~$75) — best beginner-friendly rapids near La Fortuna",
            "Post-rafting ceviche and cold Imperial beer at the outfitter's deck",
            "Evening: Traditional cooking class at a local family farm ($45) — make gallo pinto, tortillas, and fresh cheese",
          ],
          cost: "$170 (waterfall $33, rafting $75, cooking class $45, food $17)",
        },
        {
          day: "Day 4",
          title: "Jeep-boat-jeep to Monteverde",
          items: [
            "Jeep-boat-jeep transfer ($30) across Lago Arenal — scenic and fun",
            "Check in to a mid-range boutique hotel in Monteverde ($70–100/night)",
            "Late afternoon walk in the Monteverde Cloud Forest Reserve ($25) — the original and most impressive reserve",
            "Guided night walk in cloud forest ($30) — spot tree frogs, tarantulas, and sleeping birds with a spotlight",
            "Dinner at Sofia Restaurant — creative contemporary Costa Rican cuisine",
          ],
          cost: "$170 (transfer $30, hotel $85, reserves $55, food $30, misc $10)",
        },
        {
          day: "Day 5",
          title: "Full Monteverde experience",
          items: [
            "Morning: Premium zip-lining with Sky Adventures ($85) — 10 cables, gondola, and hanging bridges combo",
            "Afternoon: Selvatura Park butterfly garden + hummingbird garden ($30 combined)",
            "Quetzal guided birdwatching walk with a specialist guide ($50, 6am–8am) — resplendent quetzal season is Jan–May",
            "Artisan chocolate and coffee tasting at El Trapiche working farm (~$20)",
            "Dinner at Tree House Restaurant — literally built around a century-old fig tree",
          ],
          cost: "$200 (zip-line $85, parks $30, birdwatching $50, farm $20, food $35)",
        },
        {
          day: "Day 6",
          title: "Manuel Antonio National Park",
          items: [
            "Shared shuttle Monteverde → Manuel Antonio ($55, 5 hrs)",
            "Check in to a mid-range hotel in Manuel Antonio ($80–110/night) — many have sea views",
            "Afternoon guided tour of Manuel Antonio National Park with a naturalist ($35 guide + $18 entry)",
            "Spot sloths, monkeys, scarlet macaws, and if you're lucky, a white-tipped shark in the ocean shallows",
            "Sundowner cocktails at Barba Roja restaurant with Pacific Ocean panorama",
          ],
          cost: "$170 (shuttle $55, hotel $95, guide $53, food $30, drinks $12)",
        },
        {
          day: "Day 7",
          title: "Quepos boat trip + return",
          items: [
            "Morning: Catamaran snorkelling tour from Quepos marina (~$80) — coral reefs, dolphins, and manta ray sightings",
            "Lunch on the boat — fresh ceviche included",
            "Afternoon private transfer San José ($100) or shared shuttle ($25)",
            "Optional: brief San José visit — Museo del Oro Precolombino (Pre-Columbian Gold Museum, $10) near Plaza de la Cultura",
            "Dinner in San José at Restaurante Nuestra Tierra for a final gallo pinto",
          ],
          cost: "$175 (catamaran $80, transport $45, museum $10, food $25, misc $15)",
        },
      ],
    },
    {
      label: "Luxury Eco-Lodge",
      sub: "$380/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival + Arenal eco-lodge check-in",
          items: [
            "Private driver-guide from SJO to La Fortuna (~$180 for the vehicle, bilingual naturalist) — birding stops en route",
            "Check in to Nayara Springs or Arenal Observatory Lodge (~$300–$450/night) — private plunge pool with volcano view",
            "Welcome rum cocktail in your villa as howler monkeys serenade from the treeline",
            "Gourmet dinner at the lodge restaurant — locally sourced catch with estate-grown herbs",
            "Soak in your private volcanic hot spring pool under the stars",
          ],
          cost: "$420 (transport $80/pp, lodge $350, dinner/drinks incl.)",
        },
        {
          day: "Day 2",
          title: "Private volcano experience + Tabacón Spa",
          items: [
            "Private naturalist-guided Arenal Volcano and lava field hike ($120 for private guide)",
            "Full-day access to Tabacón Thermal Resort ($85) including the full thermal river walk",
            "Afternoon: 90-minute volcanic mud massage at the Tabacón Spa ($180) — mineral-rich mud sourced at the volcano base",
            "Private kayak tour of Lago Arenal at sunset with guide ($95)",
            "Chef's tasting menu at the lodge — 5 courses paired with Costa Rican craft wines",
          ],
          cost: "$400 (guide $120, spa $265, kayak $95, food incl. lodge package)",
        },
        {
          day: "Day 3",
          title: "Pacuare River white water rafting overnight",
          items: [
            "Transfer to Turrialba for full-day Grade IV rafting on the Pacuare River ($175 with Ríos Tropicales — the world's top-rated river trip)",
            "Camp overnight in the Pacuare Jungle Lodge (accessible only by raft — no roads) — $380/night including all meals",
            "Night jungle walk with naturalist guide inside the Pacuare reserve",
            "Howler monkey chorus as your wake-up alarm",
            "Indigenous Cabécar community visit — learn about traditional forest medicine",
          ],
          cost: "$420 (rafting + lodge package per person)",
        },
        {
          day: "Day 4",
          title: "Raft out + helicopter transfer to Monteverde",
          items: [
            "Morning raft downstream through Class II rapids — a gentle glide to finish",
            "Helicopter transfer from Turrialba to Monteverde ($450 pp — 20 minutes vs 4 hours by road, aerial views of both slopes of the Cordillera Central)",
            "Check in to El Silencio Lodge & Spa or Monteverde Lodge ($200–$300/night)",
            "Private evening guided tour of Monteverde Cloud Forest Reserve at dusk — best time for quetzal activity",
            "Dinner at lodge with sommelier-selected wine pairing",
          ],
          cost: "$500 (helicopter $450, lodge $250, dinner incl.)",
        },
        {
          day: "Day 5",
          title: "Quetzal spotting + cloud forest spa day",
          items: [
            "Pre-dawn guided birdwatching for resplendent quetzal with the reserve's lead ornithologist ($120 private tour)",
            "Morning: Private canopy walk with resident naturalist — photography-focused, slow pace, maximum 4 people",
            "Afternoon: Full wellness treatment at lodge spa — volcanic clay wrap, cloud forest aromatherapy massage ($200)",
            "Late afternoon: Private coffee and cacao farm visit with artisan tasting ($60)",
            "Five-course dinner with pairings at lodge — Costa Rican terroir menu",
          ],
          cost: "$380 (birding $120, spa $200, farm $60, dining incl.)",
        },
        {
          day: "Day 6",
          title: "Private boat to Osa Peninsula / Corcovado",
          items: [
            "Charter flight San José → Puerto Jiménez ($180 one-way, 45 min vs 7 hrs by road)",
            "Check in to Lapa Rios Ecolodge or TikiVillas Rainforest Lodge (~$350/night) — in the buffer zone of Corcovado",
            "Afternoon guided hike in Corcovado National Park (the most biodiverse place on Earth) with resident naturalist",
            "Spot tapirs, peccaries, giant anteaters, scarlet macaws, and poison dart frogs",
            "Dinner on the open-air deck as bioluminescent waves glow below",
          ],
          cost: "$450 (flight $180, lodge $350, guide incl. in lodge package)",
        },
        {
          day: "Day 7",
          title: "Corcovado morning + return flight",
          items: [
            "Dawn guided boat tour of the Golfo Dulce — spot dolphins, sea turtles, and humpback whales (Jul–Oct)",
            "Final guided Corcovado hike: Sirena Station ranger trail, home to the densest big cat population in Central America",
            "Return charter flight to San José ($180)",
            "Private lounge access at SJO, farewell cocktail",
            "Depart with a lifetime of wildlife memories and a serious Pura Vida addiction",
          ],
          cost: "$350 (boat $80, guide incl., flight $180, lounge + food $90)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–25 (hostel dorm)",
      food: "$15–20 (sodas & markets)",
      transport: "$10–15 (shared shuttles)",
      activities: "$15–25 (park entries)",
      total: "$75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–100 (boutique hotel)",
      food: "$30–45 (restaurants)",
      transport: "$20–30 (shared + private)",
      activities: "$40–60 (guided tours)",
      total: "$160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$250–450 (eco-lodge)",
      food: "$60–80 (incl. in lodge)",
      transport: "$50–100 (private, charter)",
      activities: "$80–150 (private guides)",
      total: "$380/day",
    },
    {
      tier: "🎒 Flashpacker",
      accommodation: "$35–55 (private room)",
      food: "$20–30 (mixed)",
      transport: "$15–25 (shared shuttles)",
      activities: "$25–40 (select tours)",
      total: "$110/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "$90–150 (family room)",
      food: "$40–60 (restaurants)",
      transport: "$30–50 (private van)",
      activities: "$50–80 (family packages)",
      total: "$200/day",
    },
  ],

  mistakes: [
    {
      icon: "🌧️",
      title: "Visiting in rainy season without planning for it",
      desc: "May–November is rainy season. The Pacific side (Guanacaste, Manuel Antonio) gets heavy afternoon rains. The Caribbean side (Tortuguero) is actually drier in these months. Know which coast you're visiting and when.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎟️",
      title: "Not booking Manuel Antonio tickets in advance",
      desc: "Manuel Antonio has a hard cap of 1,500 visitors per day and sells out weeks ahead in dry season (Dec–Apr). Book at sinac.go.cr as soon as you know your dates. Showing up without a ticket means you're turned away.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚌",
      title: "Taking public buses between major stops",
      desc: "The bus from La Fortuna to Monteverde via San José takes 5+ hours. The jeep-boat-jeep takes 3 hours and is far more scenic. Use shared shuttles (Interbus, Grayline) — they cost $25–$55 but save enormous time.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🦥",
      title: "Skipping a guide in the national parks",
      desc: "Guides in Manuel Antonio and Monteverde can spot animals you'd walk right past — sloths 20m up in a tree look exactly like a lump of leaves without knowing where to look. A 3-hour guided walk at $30–$50 transforms the experience.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💵",
      title: "Underestimating activity costs",
      desc: "Costa Rica is the most expensive country in Central America. A rafting trip is $75, a zip-line is $60–85, a hot spring resort is $50–85. Budget travellers who come expecting SE Asia prices are routinely shocked. Budget $20–30/day for activities alone even at the budget level.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "📱",
      title: "Get a local SIM immediately at the airport",
      desc: "Kolbi or Claro SIMs with 4G data are available at the SJO arrivals hall for ~$10 with 10–15GB data. Data coverage even in remote areas is surprisingly good — essential for navigation and Uber (which works in San José).",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌊",
      title: "Go to Tortuguero in turtle season (June–October)",
      desc: "Tortuguero, accessible only by boat or small plane, is the premier sea turtle nesting site in the Western Hemisphere. Green turtles nest July–October. Book a night tour with a licensed guide for a life-changing experience — watching a 150kg turtle lay eggs under red-filtered torchlight.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏄",
      title: "Surfing: Santa Teresa beats all the famous spots on price",
      desc: "Nosara and Tamarindo are overrun and expensive. Santa Teresa on the southern Nicoya Peninsula still has that 1990s lost-beach energy — consistent waves, great surf schools ($40/2-hr lesson), cheap casados, and zero high-rises. Access via ferry from Puntarenas.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌿",
      title: "Pack biodegradable sunscreen and reef-safe insect repellent",
      desc: "Many parks (including Manuel Antonio) ban chemical sunscreen in the water to protect coral. DEET is also avoided near sensitive ecosystems. Pack picaridin-based repellent and mineral sunscreen — both are widely available in San José pharmacies.",
      color: "bg-teal-50 border-teal-200",
    },
  ],

  faqs: [
    {
      q: "Is Costa Rica safe to visit in 2026?",
      a: "Costa Rica is consistently ranked the safest country in Central America. Violent crime against tourists is rare. The main risks are petty theft in San José, rip currents at Pacific beaches, and road hazards (unpaved roads, potholes, river crossings). Exercise normal vigilance in crowded areas, use registered taxis or Uber, and never leave valuables in a rental car.",
    },
    {
      q: "Do Indian passport holders need a visa for Costa Rica?",
      a: "No. Indian passport holders can enter Costa Rica visa-free for up to 90 days. This is unusually generous — one of very few Latin American countries that offers this to Indian nationals. Bring your return ticket and proof of funds when asked at immigration.",
    },
    {
      q: "What is the best 7-day Costa Rica route for first-timers?",
      a: "The classic circuit is: La Fortuna/Arenal (3 nights) → Monteverde (2 nights) → Manuel Antonio (2 nights). Use the jeep-boat-jeep between La Fortuna and Monteverde, and a shared shuttle for the rest. This covers the volcano, cloud forest, and Pacific coast beach — the three essential Costa Rican experiences.",
    },
    {
      q: "When is the best time to visit Costa Rica?",
      a: "December to April (dry season) is optimal for the Pacific coast (Arenal, Manuel Antonio, Guanacaste). However, the Caribbean coast (Tortuguero, Puerto Viejo) has its dry season in Sep–Oct and Feb–Mar. If you want sea turtles at Tortuguero, go June–October despite the rain. The cloud forest is beautiful year-round — the mist and rain are part of the atmosphere.",
    },
  ],

  combineWith: ["panama-city-4-days", "nicaragua-managua", "colombia-cartagena"],
  relatedSlugs: ["antigua-guatemala-4-days", "cartagena-4-days", "mexico-city-4-days"],
  galleryQuery: "costa rica wildlife jungle volcano beach",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function CostaRicaPage() {
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
