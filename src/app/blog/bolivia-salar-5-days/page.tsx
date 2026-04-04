import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Salar de Uyuni in 5 Days: The Complete Bolivia Travel Guide (2026) | IncredibleItinerary",
  description:
    "Plan the perfect 5 days at Salar de Uyuni, Bolivia — the world's largest salt flat, mirror effect, Isla Incahuasi cactus island, flamingo lagoons, and sleeping in a salt hotel. Budget ($60/day) to luxury ($280/day) itineraries.",
  keywords: [
    "Salar de Uyuni itinerary",
    "Bolivia salt flat trip",
    "Uyuni travel guide 2026",
    "Salar de Uyuni mirror effect",
    "Isla Incahuasi",
    "Laguna Colorada flamingos",
    "Bolivia budget travel",
    "salt flat tour",
    "La Paz Bolivia",
    "Bolivia visa Indian passport",
  ],
  openGraph: {
    title: "Salar de Uyuni in 5 Days: The Complete Bolivia Travel Guide (2026)",
    description:
      "Driving across the world's largest mirror — 10,582 km² of salt where the sky perfectly reflects and the horizon disappears. Bolivia's greatest wonder.",
    url: "https://incredibleitinerary.com/blog/bolivia-salar-5-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?salar+de+uyuni+bolivia+salt+flat+reflection+sky+mirror",
        width: 1200,
        height: 630,
        alt: "Salar de Uyuni Bolivia world's largest salt flat with perfect sky reflection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salar de Uyuni in 5 Days: The Complete Bolivia Travel Guide (2026)",
    description:
      "The world's largest mirror, flamingo lagoons, a cactus island, and a hotel built of salt blocks — Salar de Uyuni is Bolivia's greatest wonder.",
    images: [
      "https://source.unsplash.com/1200x630/?salar+de+uyuni+bolivia+salt+flat+reflection+sky+mirror",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/bolivia-salar-5-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Salar de Uyuni in 5 Days: The Complete Bolivia Travel Guide (Budget to Luxury, 2026)",
    description:
      "Everything you need to plan 5 days at Salar de Uyuni — the world's largest salt flat, rainy season mirror effect, flamingo lagoons, Isla Incahuasi, and La Paz gateway.",
    image:
      "https://source.unsplash.com/1200x630/?salar+de+uyuni+bolivia+salt+flat+reflection+sky+mirror",
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
      "@id": "https://incredibleitinerary.com/blog/bolivia-salar-5-days",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bolivia Salar de Uyuni 5 Days",
        item: "https://incredibleitinerary.com/blog/bolivia-salar-5-days",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Salar de Uyuni",
    description:
      "The world's largest salt flat at 3,656m altitude in Bolivia — 10,582 square kilometres of white salt crust with a perfect sky-mirror effect during the rainy season.",
    geo: { "@type": "GeoCoordinates", latitude: -20.1338, longitude: -67.4891 },
    touristType: "Adventure, Nature, Photography, Unique Experiences",
    url: "https://incredibleitinerary.com/blog/bolivia-salar-5-days",
  },
];

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Salar de Uyuni",
  country: "Bolivia",
  countryFlag: "🇧🇴",
  slug: "bolivia-salar-5-days",
  heroQuery: "salar de uyuni bolivia salt flat reflection sky mirror",
  heroAlt: "Salar de Uyuni Bolivia world's largest salt flat with perfect sky reflection",
  category: "South America",
  date: "April 5, 2026",
  readTime: "16 min read",

  intro:
    "Imagine driving across the world's largest mirror — 10,582 square kilometres of blinding white salt at 3,656 metres altitude where the sky reflects perfectly in a thin film of water and the horizon simply disappears. You wake at 4am to watch the sunrise turn the salt crust pink and orange while a flamingo colony wades through the shallows of Laguna Colorada, a blood-red lake at 4,278m. You sleep in a hotel built entirely of salt blocks. You stand on a cactus island in the middle of an ancient sea. This is Salar de Uyuni, Bolivia's greatest, strangest, most otherworldly wonder — and five days gives you just enough time to absorb it.",

  stats: {
    duration: "5 Days",
    budgetFrom: "$60",
    bestMonths: "Dec–Apr (rainy season for mirror effect) or May–Nov (dry, clear)",
    airport: "VVI (Viru Viru, Santa Cruz) or LPB (La Paz)",
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
    { id: "altitude", emoji: "🏔️", label: "Altitude Sickness Guide" },
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
        ["Type", "No visa required"],
        ["Duration", "90 days on arrival"],
        ["Cost", "Free"],
        ["Requirements", "Valid passport (6+ months), return ticket"],
        ["Entry ports", "La Paz or Santa Cruz airports, land borders"],
        ["Note", "Bolivia is one of the few South American countries fully open to Indian passport holders without any visa process"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passports",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      titleColor: "text-yellow-800",
      items: [
        ["Type", "No visa required"],
        ["Duration", "90 days"],
        ["Cost", "Free (reciprocity fees no longer apply as of 2025)"],
        ["Requirements", "Valid passport, proof of onward travel"],
        ["Note", "Bolivia is very straightforward for Western passport holders"],
        ["Tip", "Register your itinerary with your embassy if venturing to remote areas like Laguna Verde"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$60/day",
      days: [
        {
          day: "Day 1",
          title: "La Paz Arrival & Acclimatisation",
          items: [
            "Fly into La Paz (LPB) at 3,640m altitude — take it very easy on day 1",
            "Check into a hostel in the Sopocachi or Miraflores neighbourhood (~$10–15/night)",
            "Drink coca tea immediately — it genuinely helps with altitude sickness",
            "Afternoon: Gentle walk to Witches' Market (Mercado de las Brujas) — llama foetuses, potions, traditional medicine",
            "Cable car Mi Teleférico — world's highest urban cable car system, rides from $0.50 per segment, panoramic views",
            "Dinner: Salteñas (Bolivian empanadas) at a local market (~$3–5)",
            "Early night: altitude acclimatisation is serious at 3,640m",
          ],
          cost: "~$40 total (hostel $12, meals $15, cable car $3, transport $5, coca tea $2)",
        },
        {
          day: "Day 2",
          title: "La Paz Exploration + Night Bus to Uyuni",
          items: [
            "Morning: Plaza Murillo (government square), Cathedral Basilica, Presidential Palace",
            "San Francisco Church and monastery — colonial architecture, free to enter",
            "Lunch: Mercado Rodriguez or Lanza Market — set menu (almuerzo) for $2–3 pp",
            "Afternoon: Valle de la Luna (Valley of the Moon) — eroded clay spires outside La Paz, taxi ~$8 return",
            "Museum of the Coca (~$4 entry) — fascinating history of coca leaf in Andean culture",
            "Evening: Board overnight bus to Uyuni (~$15–25, 10–12 hours) — semi-cama recommended",
          ],
          cost: "~$55 total (hostel $12, meals $10, Valley Moon taxi $8, bus $20, activities $6)",
        },
        {
          day: "Day 3",
          title: "Uyuni Town + Train Cemetery + Salt Flat Day 1",
          items: [
            "Arrive Uyuni early morning — check into a hostel ($10–15/night)",
            "Morning: Train Cemetery (Cementerio de Trenes) — rusted steam locomotive graveyard, free, 3km from town, great sunrise spot",
            "Breakfast in Uyuni town ($3–5)",
            "Afternoon: Join a group salt flat tour — basic 4WD group tour from town (~$25–35 pp for half-day)",
            "Drive onto the Salar — first views of the endless white expanse",
            "Perspective photos with props at Dakar Rally monument and salt hexagon formations",
            "Isla Incahuasi (cactus island) — $5 entry, walk among giant cacti in middle of the salt flat",
            "Sunset on the salt flat — extraordinary colours",
          ],
          cost: "~$60 total (hostel $12, meals $10, train cemetery free, group tour $30, Isla $5)",
        },
        {
          day: "Day 4",
          title: "Sunrise on Salt + Laguna Colorada (Full Southwest Circuit)",
          items: [
            "Wake at 4:30am for sunrise on the Salar — the pink and orange light on white salt is indescribable",
            "Full-day 4WD group tour to the Southwest Circuit (~$40–60 pp for full day including lagoons)",
            "Laguna Colorada (4,278m) — blood-red lake, thousands of pink flamingos, otherworldly landscape",
            "Desert de Dalí — wind-eroded rock formations resembling a Surrealist painting",
            "Arbol de Piedra (Stone Tree) — volcanic rock sculpted by desert winds",
            "Various coloured lagoons: Verde, Blanca, Hedionda",
            "Return to salt hotel or Uyuni for the night",
          ],
          cost: "~$75 total (hostel/salt hotel $20, group 4WD tour $50, meals $10)",
        },
        {
          day: "Day 5",
          title: "Mirror Effect (Rainy Season) + Departure",
          items: [
            "Rainy season (Dec–April): Final morning mirror effect tour — thin film of water creates infinite reflection",
            "Dry season (May–Nov): Sunrise salt hexagon photography + salt harvesting villages",
            "Photograph the mirror at golden hour — bring wide-angle lens if possible",
            "Return to Uyuni town by 10am",
            "Late morning: browse Uyuni market for souvenirs — alpaca wool, salt lamps, pottery",
            "Afternoon bus or flight back to La Paz or onward to Chile (Atacama desert connection)",
          ],
          cost: "~$55 total (accommodation $12, mirror tour $20, meals $10, transport to La Paz $20)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$120/day",
      days: [
        {
          day: "Day 1",
          title: "La Paz Comfortable Arrival",
          items: [
            "Fly into La Paz; check into a 3-star or boutique hotel in Sopocachi (~$40–60/night)",
            "Hotel supplies coca tea on arrival — important ritual",
            "Afternoon: Private guided city tour with coca history, Witches' Market, and Mi Teleférico ($50)",
            "Dinner: Gustu restaurant or similar — modern Bolivian cuisine using local ingredients (~$30–40)",
            "Early night — altitude is real at 3,640m",
          ],
          cost: "~$140 total (hotel $50, guided tour $50, meals $35, transport $10)",
        },
        {
          day: "Day 2",
          title: "La Paz Day Trips + Afternoon Flight to Uyuni",
          items: [
            "Morning: Valle de la Luna private tour + Tiwanaku archaeological site (~$60 with guide)",
            "Tiwanaku is a pre-Inca civilisation site 70km from La Paz — extraordinary stone carvings and Gate of the Sun",
            "Lunch: La Paz restaurant — set lunch menu at a good restaurant (~$15)",
            "Afternoon: Fly La Paz to Uyuni (Amaszonas or Boliviana de Aviación) — 1 hour (~$80–120 one way)",
            "Check into a comfortable Uyuni hotel or salt hotel (~$60/night)",
            "Evening: Orientation walk in Uyuni town, local dinner (~$15)",
          ],
          cost: "~$270 total (hotel $60, flight $100, tours $60, meals $30, transport $20)",
        },
        {
          day: "Day 3",
          title: "Private Salt Flat Full Day",
          items: [
            "Private 4WD with driver/guide for the day (~$120–150 private vehicle for 2–4 people)",
            "Train Cemetery at sunrise — private, no group crowds",
            "Drive onto Salar — private photography session on the salt hexagons",
            "Isla Incahuasi — arrive before 10am when group tours arrive; near-private cactus forest",
            "Gourmet picnic on the salt flat — hotel-packed lunch with local produce",
            "Afternoon: Salt harvesting cooperative visit and salt hotel architecture tour",
            "Sunset at salt flat with champagne — iconic photography moment",
          ],
          cost: "~$230 total (hotel $60, private 4WD $130, meals $30, Isla entry $5, champagne $20)",
        },
        {
          day: "Day 4",
          title: "Southwest Circuit — Flamingos & Coloured Lagoons",
          items: [
            "Full-day private 4WD Southwest Circuit (~$180–220 private vehicle)",
            "Laguna Colorada at sunrise — flamingos feed in early morning, best light and least crowds",
            "Geysers Sol de Mañana (4,850m) — boiling mud pools and steam vents at altitude",
            "Laguna Verde at midday — emerald green lake at 5,000m with Licancabur volcano backdrop",
            "Desert de Dalí and stone formations in afternoon",
            "Return; dinner at salt hotel restaurant (~$30)",
          ],
          cost: "~$260 total (hotel $60, private 4WD $200, meals $30)",
        },
        {
          day: "Day 5",
          title: "Mirror Effect Photography + Departure",
          items: [
            "Early 5am start for the best mirror effect light (rainy season)",
            "Private photographer guide can be hired (~$50) for reflection portraits",
            "Breakfast back at hotel",
            "Check out; flight or comfortable bus back to La Paz",
            "Afternoon in La Paz: farewell dinner at a rooftop restaurant with Illimani mountain view",
          ],
          cost: "~$180 total (hotel $60, early tour $50, photographer $50, meals $20, flight $100)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$280/day",
      days: [
        {
          day: "Day 1",
          title: "La Paz — Altitude in Style",
          items: [
            "Fly into La Paz; private airport transfer to Atix Hotel or Casa Grande Hotel (~$150–200/night)",
            "Altitude acclimatisation suite — some hotels offer oxygen therapy (~$30)",
            "Private exclusive city tour: Witches' Market, cholita wrestling show, cable car ride ($100)",
            "Lunch: Gustu restaurant — Bolivia's premier fine dining, indigenous ingredients, world-recognised ($60–80)",
            "Afternoon rest; hotel spa treatment",
            "Dinner: Chef's tasting menu at hotel or Cocina de Autores (~$80–100)",
          ],
          cost: "~$550 total (hotel $175, private tour $100, fine dining $170, spa $60, transport $30)",
        },
        {
          day: "Day 2",
          title: "Tiwanaku Private Archaeological Tour + Private Flight to Uyuni",
          items: [
            "Private archaeologist-guided morning tour of Tiwanaku UNESCO site ($150) — behind-the-scenes access",
            "Lunch at La Paz fine dining",
            "Private charter flight or business class to Uyuni ($200–400)",
            "Check into Palacio de Sal Hotel or Luna Salada Hotel (~$120–200/night) — entirely built of salt",
            "Salt hotel welcome ceremony: local music, salteñas, singani cocktails",
            "Dinner: Salt hotel restaurant — Bolivian cuisine with Andean wines (~$50–70)",
          ],
          cost: "~$800 total (hotel $160, private flight $300, Tiwanaku tour $150, meals $120, transport $70)",
        },
        {
          day: "Day 3",
          title: "Exclusive Salar de Uyuni Full Day",
          items: [
            "Sunrise: Private 4WD departs 5am — arrive at salt flat for first light, completely alone",
            "Drone photography session over the Salar (hire local licensed operator ~$150)",
            "Private photography guide for perspective shots — full creative setup",
            "Isla Incahuasi private entry before public tours arrive",
            "Gourmet lunch on the salt flat: white tablecloth dining in the middle of the world's largest mirror ($150 experience)",
            "Afternoon: Salt cooperative visit; artisan salt lamp workshop",
            "Sunset champagne on Salar; back to salt hotel",
          ],
          cost: "~$700 total (hotel $160, private 4WD+guide $200, drone $150, gourmet lunch $150, activities $60)",
        },
        {
          day: "Day 4",
          title: "Southwest Circuit — Private Luxury 4WD",
          items: [
            "Private luxury 4WD with expert naturalist guide ($300 for private vehicle all day)",
            "Laguna Colorada at dawn — photograph flamingos with a telephoto lens in perfect light",
            "Geysers Sol de Mañana — VIP viewing platform; hot springs bath",
            "Laguna Verde private stop — Licancabur volcano reflection",
            "Gourmet picnic in the Dali Desert — local quinoa dishes, Andean cheeses, singani pisco sour",
            "Return to salt hotel; in-room massage ($80)",
            "Farewell dinner at Palacio de Sal with Bolivian sommelier and wine pairing",
          ],
          cost: "~$750 total (hotel $160, private 4WD $300, picnic $100, spa $80, dinner $100)",
        },
        {
          day: "Day 5",
          title: "Mirror Sunrise + La Paz Farewell",
          items: [
            "Private predawn transfer to mirror spot — guide, tripod, hot coffee thermos, blankets provided",
            "Sunrise mirror photography at the most photogenic corner of the Salar",
            "Hotel breakfast; personal checkout service",
            "Private charter or business class back to La Paz",
            "Afternoon: VIP shopping in La Paz — Casa de los Tesoros or upscale alpaca boutiques",
            "Farewell dinner: Gustu or Alex Guzman restaurant (~$100)",
            "Private transfer to airport",
          ],
          cost: "~$700 total (hotel $160, private flight $300, mirror tour $100, meals $100, shopping $80)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$10–20 (hostel/basic hotel)",
      food: "$8–15",
      transport: "$15–25 (buses/group tours)",
      activities: "$30–50 (group salt tours)",
      total: "~$60/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$50–80 (boutique/salt hotel)",
      food: "$25–45",
      transport: "$30–60 (private 4WD share)",
      activities: "$60–100",
      total: "~$120/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$120–200 (Palacio de Sal / Luna Salada)",
      food: "$80–150",
      transport: "$150–300 (private charter/4WD)",
      activities: "$100–250",
      total: "~$280–500/day",
    },
    {
      tier: "🎯 Photography Focus",
      accommodation: "$50–150",
      food: "$20–40",
      transport: "$100–200 (private vehicle)",
      activities: "$100–200 (drone, guide, sunrise)",
      total: "~$200/day",
    },
    {
      tier: "👨‍👩‍👧 Family (4 people)",
      accommodation: "$80–160 (family room)",
      food: "$40–80",
      transport: "$80–120 (private 4WD shared)",
      activities: "$60–100",
      total: "~$65–90/person/day",
    },
  ],

  mistakes: [
    {
      icon: "🏔️",
      title: "Underestimating altitude sickness — it can ruin your trip",
      desc: "La Paz is at 3,640m and Salar de Uyuni at 3,656m. Laguna Colorada is at 4,278m and some points in the Southwest Circuit reach 5,000m+. Altitude sickness (headache, nausea, fatigue) affects even fit travellers. Spend at least 1 day acclimatising in La Paz, drink coca tea constantly, avoid alcohol for the first 48 hours, and carry altitude sickness medication (acetazolamide/Diamox — consult a doctor first).",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📅",
      title: "Going in the wrong season for the wrong reason",
      desc: "The mirror effect requires the rainy season (December–April) and at least a thin film of water on the salt. In the dry season (May–November), the Salar is still extraordinary — brilliant white salt hexagons, crystal-clear skies, perfect photography of cacti and stars — but there is no mirror. Decide what you want and plan accordingly. Both seasons are spectacular; don't arrive in dry season expecting a mirror.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💊",
      title: "Not bringing sun protection — the UV is extreme",
      desc: "At 3,656m altitude, the UV radiation is roughly 40% more intense than at sea level. The white salt reflects it back at you from below as well. Without very strong sunscreen (SPF 50+), a hat, sunglasses, and lip balm, you will be badly burned in 2 hours. This is not optional advice.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌡️",
      title: "Packing only for heat — nights on the Salar are freezing",
      desc: "Days can be warm (15–20°C in the sun), but temperatures on the Salar drop to -10°C to -20°C at night, especially in the dry season when the sky is clear. You need a down jacket, thermal base layers, gloves, and a warm hat even if you're visiting in December.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🚗",
      title: "Booking the cheapest tour without reading reviews",
      desc: "Some budget tour operators use very old 4WDs that break down in remote areas (2 hours from the nearest town), have poor English-speaking guides, and rush the best spots. Read TripAdvisor reviews carefully. A slightly more expensive reputable operator makes an enormous difference to the experience — this is a trip of a lifetime.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "📷",
      title: "Bring props for perspective photos — they make the images iconic",
      desc: "The flat, featureless expanse of the Salar makes perspective tricks possible that work nowhere else — tiny humans holding giant objects, people appearing to stand on each other, miniature toy scenes. Bring small toys, figurines, or props from home. Every tour guide will happily set up the shots. These are the photos that go viral.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "⭐",
      title: "Stay overnight on the Salar for stargazing — it's otherworldly",
      desc: "The Salar sits at high altitude far from any city — the Milky Way is visible with the naked eye and reflects in the salt. If you book a salt hotel, wake at 2am and step outside. Bring a wide-angle camera. The night sky above a white salt flat is one of the most extraordinary natural experiences on Earth.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🦩",
      title: "See the flamingos at Laguna Colorada at dawn — not midday",
      desc: "Pink flamingos feeding in a blood-red lake against a snow-capped volcano at sunrise — this is the image. Flamingos are most active in the early morning and disperse by midday. Most group tours arrive at Laguna Colorada around 11am. Book a private 4WD or an early-starting group tour to be there at 7–8am.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🔗",
      title: "Connect to Chile's Atacama Desert for an epic South America circuit",
      desc: "Many tours run from Uyuni to the Atacama Desert in Chile (crossing at the Bolivia-Chile border near Laguna Verde). You can complete the Southwest Circuit and end in San Pedro de Atacama — one of the world's great multi-day adventure journeys. Book GetYourGuide's combined Uyuni-to-Atacama tours for the best-value guided crossing.",
      color: "bg-amber-50 border-amber-200",
    },
  ],

  faqs: [
    {
      q: "When is the best time to visit Salar de Uyuni for the mirror effect?",
      a: "The mirror effect occurs during Bolivia's rainy season from December to April, when a thin layer of water (usually 5–30cm) floods the Salar and creates a perfect sky reflection. Peak mirror effect is January–March. The dry season (May–November) offers a completely different but equally stunning experience: blinding white salt hexagons, turquoise skies, and zero mud. Both are worth visiting for different reasons.",
    },
    {
      q: "How do I get to Uyuni from La Paz?",
      a: "Option 1: Overnight bus (10–12 hours, $15–25 for semi-cama reclining seat) — bumpy but an adventure. Option 2: Amaszonas or Boliviana de Aviación flights (1 hour, $80–150 one way) from El Alto Airport, La Paz. Option 3: Train — Expreso del Sur runs Oruro–Uyuni several times per week (5–6 hours, scenic, book in advance). The flight is recommended for the luxury/mid-range traveller who wants to maximise time on the Salar.",
    },
    {
      q: "Is Salar de Uyuni safe to visit?",
      a: "Generally yes — the main risks are altitude sickness (very serious above 4,000m), UV radiation (extreme at high altitude), and cold (temperatures can drop below -15°C at night). With proper preparation (acclimatisation, sun protection, warm layers), it is safe and accessible. The Southwest Circuit areas can be very remote — always travel with an experienced guide and reputable operator.",
    },
    {
      q: "What currency does Bolivia use and how much cash should I bring?",
      a: "Bolivia uses the Boliviano (BOB). 1 USD ≈ 6.9 BOB. Most of Uyuni town is cash-only — ATMs exist but are unreliable and often empty. Bring enough USD or BOB cash from La Paz for your entire Uyuni stay. Tour operators, salt hotels, and most restaurants in Uyuni do not accept cards. La Paz has reliable ATMs. Bolivia is one of South America's cheapest countries.",
    },
  ],

  combineWith: ["patagonia-7-days", "peru-machu-picchu-5-days", "atacama-4-days", "argentina-buenos-aires"],
  relatedSlugs: ["peru-machu-picchu-5-days", "tbilisi-4-days", "doha-3-days", "patagonia-7-days"],
  galleryQuery: "salar de uyuni bolivia salt flat flamingos laguna colorada mirror effect",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function BoliviaSalarPage() {
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
