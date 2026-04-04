import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Rwanda in 5 Days: Gorilla Trekking Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Complete Rwanda 5-day itinerary covering gorilla trekking in Volcanoes National Park, the Kigali Genocide Memorial, Lake Kivu, and Nyungwe Forest. Budget ($150/day) to luxury ($500/day) plans with visa info for Indian and Western passports.",
  keywords: [
    "Rwanda gorilla trekking",
    "Rwanda 5 day itinerary",
    "Volcanoes National Park gorillas",
    "gorilla permit Rwanda",
    "Rwanda travel guide 2026",
    "Rwanda budget itinerary",
    "Kigali travel guide",
    "mountain gorilla trekking Africa",
    "Rwanda visa Indian passport",
    "Rwanda luxury safari",
  ],
  openGraph: {
    title: "Rwanda in 5 Days: Gorilla Trekking Guide (Budget to Luxury, 2026)",
    description:
      "Sit 7 metres from a silverback gorilla in the mist-covered forests of Rwanda. Complete 5-day itinerary from $150/day, including gorilla permit strategy and visa info.",
    url: "https://incredibleitinerary.com/blog/rwanda-gorillas-5-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/rwanda-gorillas-5-days.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain gorilla family in Rwanda Volcanoes National Park Africa",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda in 5 Days: Gorilla Trekking Guide (Budget to Luxury, 2026)",
    description:
      "Complete Rwanda gorilla trekking itinerary from $150/day. Permits, logistics, visa info, and day-by-day plans.",
    images: ["https://incredibleitinerary.com/og/rwanda-gorillas-5-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/rwanda-gorillas-5-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rwanda in 5 Days: The Complete Gorilla Trekking Guide (Budget to Luxury, 2026)",
    description:
      "Complete Rwanda 5-day itinerary covering gorilla trekking in Volcanoes National Park, Kigali, Lake Kivu, and Nyungwe Forest with budget to luxury plans.",
    image: "https://incredibleitinerary.com/og/rwanda-gorillas-5-days.jpg",
    datePublished: "2026-01-15",
    dateModified: "2026-04-01",
    author: { "@type": "Organization", name: "IncredibleItinerary" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/rwanda-gorillas-5-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Rwanda Gorillas 5 Days", item: "https://incredibleitinerary.com/blog/rwanda-gorillas-5-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Rwanda — Volcanoes National Park",
    description:
      "Home to half the world's remaining mountain gorillas, Rwanda's Volcanoes National Park is one of Africa's most extraordinary wildlife destinations.",
    url: "https://incredibleitinerary.com/blog/rwanda-gorillas-5-days",
    touristType: ["Wildlife Enthusiast", "Adventure Traveller", "Eco-Traveller"],
    geo: { "@type": "GeoCoordinates", latitude: -1.4733, longitude: 29.5289 },
    includesAttraction: [
      { "@type": "TouristAttraction", name: "Volcanoes National Park" },
      { "@type": "TouristAttraction", name: "Kigali Genocide Memorial" },
      { "@type": "TouristAttraction", name: "Lake Kivu" },
      { "@type": "TouristAttraction", name: "Nyungwe Forest National Park" },
    ],
  },
];

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Rwanda",
  country: "Rwanda",
  countryFlag: "🇷🇼",
  slug: "rwanda-gorillas-5-days",
  heroQuery: "rwanda mountain gorilla volcanoes national park africa",
  heroAlt: "Mountain gorilla family in Rwanda Volcanoes National Park Africa",
  category: "Africa",
  date: "January 15, 2026",
  readTime: "14 min read",

  intro:
    "Sitting 7 metres from a 400 lb silverback gorilla who looks you in the eye with complete, unbothered calm — this is Rwanda. The forest smells of earth and rain as the gorilla family moves around you: juveniles tumbling through the undergrowth, a mother nursing, and the silverback watching everything with quiet authority. Rwanda transformed from the darkest chapter in modern African history into one of the continent's cleanest, safest, and most progressive nations in a single generation. It is the only place in the world where you can track mountain gorillas without a military escort, in forests so orderly and well-managed that it feels less like wilderness and more like a living cathedral. This is the Land of a Thousand Hills — and it will change the way you see Africa.",

  stats: {
    duration: "5 Days",
    budgetFrom: "$150",
    bestMonths: "Jun–Sep or Dec–Feb (dry seasons)",
    airport: "KGL (Kigali)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "gorilla-permits", emoji: "🦍", label: "Gorilla Permit Guide" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🚐", label: "Getting Around" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Type", "East Africa Tourist Visa ($100) — covers Rwanda, Uganda & Kenya"],
        ["Single Entry", "Rwanda single-entry visa on arrival: $50"],
        ["Process", "Apply online at irembo.gov.rw or on arrival at Kigali airport"],
        ["Processing", "Online: 3–5 business days. On arrival: same day"],
        ["Validity", "30 days single entry / 90 days East Africa Tourist Visa"],
        ["Ease Rating", "Very Easy — Rwanda is among Africa's most visitor-friendly visa systems"],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / Australian Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa on Arrival", "$50 at Kigali airport — fast, efficient, rarely queues"],
        ["Visa-Free", "Some nationalities (check rwandaimmigration.gov.rw) enter free"],
        ["East Africa Visa", "$100 multi-entry covering Rwanda, Uganda & Kenya"],
        ["Process", "Fill form on arrival or apply online in advance"],
        ["Validity", "30 days, extendable to 90 days in-country"],
        ["Ease Rating", "One of Africa's easiest — the airport process takes minutes"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Plan",
      sub: "~$150/day (excl. gorilla permit)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Kigali — City of a Thousand Hills",
          items: [
            "Arrive at Kigali International Airport (KGL). Grab visa on arrival ($50) and an MTN SIM card (~$5 with data).",
            "Take a shared taxi-moto (motorcycle taxi) or public bus to your hostel in Nyamirambo or Kiyovu (~$2–5).",
            "Check in to a budget guesthouse or hostel ($15–25/night). Ubumwe Community Hotel is a solid social-enterprise option.",
            "Walk Kigali's famously clean streets — no plastic bags, no litter. Genuinely remarkable compared to any African capital.",
            "Dinner at a local inzoga (local restaurant) in Nyamirambo — brochettes (grilled meat skewers) and Primus beer (~$5–8).",
            "Evening: stroll the lively Kimironko area and adjust to the altitude (1,567m).",
          ],
          cost: "$30–50 (accommodation, food, local transport)",
        },
        {
          day: "Day 2",
          title: "Kigali Genocide Memorial + Kimironko Market",
          items: [
            "Morning: Kigali Genocide Memorial (free entry, donations welcome). Allow 2–3 hours — this is sobering, essential, and one of the most important museums in Africa.",
            "The memorial documents the 1994 genocide with devastating clarity. Rwanda wants the world to understand and remember.",
            "Lunch at Heaven Restaurant or a local spot near the memorial (~$6–10).",
            "Afternoon: Kimironko Market — Kigali's largest open-air market. Fabrics, crafts, fresh produce, and local life. Bargain respectfully.",
            "Visit Inema Arts Centre (free or small donation) — a vibrant gallery showcasing contemporary Rwandan artists. One of Kigali's hidden gems.",
            "Evening: Sundowner at a rooftop bar in the CBD — Kigali glitters at night with surprisingly good infrastructure.",
          ],
          cost: "$25–40 (food, market, transport)",
        },
        {
          day: "Day 3",
          title: "Transfer to Musanze (Ruhengeri) — Gateway to Gorillas",
          items: [
            "Morning: take a public bus or shared minibus from Nyabugogo bus station to Musanze (~3 hours, $3–5).",
            "Check in to a budget guesthouse near Musanze town ($20–35/night). Fatima Guesthouse or similar local options are clean and friendly.",
            "Afternoon: visit the twin lakes of Burera and Ruhondo for scenic views and a canoe trip (~$10).",
            "Optional: hike to Musanze Caves (ancient lava tube caves, $10 entry) — a hidden local attraction.",
            "Evening: briefing from your gorilla trekking company (if booked through a local operator). Confirm your gorilla family assignment and meeting time (typically 7am).",
            "Important: lay out all your trekking gear. You will need sturdy waterproof boots, long sleeves, rain jacket, and gloves.",
          ],
          cost: "$40–60 (transport, accommodation, activities)",
        },
        {
          day: "Day 4",
          title: "GORILLA TREKKING DAY — Volcanoes National Park",
          items: [
            "Wake up at 5:30am. Hearty breakfast at your guesthouse. This is the day.",
            "Drive to the Kinigi park HQ (30 min from Musanze) for the 7am briefing. Rules: stay 7m from gorillas, no flash photography, no eating/drinking near them, 1-hour maximum with the family.",
            "Trek into the rainforest with your guide and trackers. Hikes range from 30 minutes to 5 hours depending on where the gorilla family is that morning.",
            "GORILLA HOUR: 60 minutes with a habituated gorilla family. Watch silverbacks, juveniles playing, mothers with babies. Nothing in the world prepares you for this.",
            "Trek back out (often harder than going in — steep volcanic slopes). Certificate presented at park HQ.",
            "Afternoon: recover at your guesthouse. Many trekkers are emotionally floored by the experience.",
            "GORILLA PERMIT COST: $1,500/person — this is a fixed Rwanda Development Board fee, applies to ALL budget tiers, non-negotiable, and must be booked months in advance.",
          ],
          cost: "$1,500 gorilla permit (ALL tiers) + $30–50 for the day",
        },
        {
          day: "Day 5",
          title: "Golden Monkey Trek or Lake Kivu — Farewell Rwanda",
          items: [
            "Option A: Golden Monkey Trek in Volcanoes NP ($100 permit). These endangered primates are acrobatic, playful, and much easier to book last-minute than gorilla permits.",
            "Option B: Head to Lake Kivu (Gisenyi/Rubavu, 30 min from Musanze). Kayak or take a boat on this vast volcanic lake. Budget boats from $10.",
            "Lunch at a lakeside restaurant in Gisenyi — fresh tilapia fish from Lake Kivu is not to be missed ($6–12).",
            "Afternoon: bus or shared taxi back to Kigali (2.5–3 hours, $4–6). Or fly direct from Musanze airstrip if budget allows.",
            "Evening flight home from KGL, or extend to Uganda (gorillas, bungee jumping at the Nile) or Kenya (Masai Mara) on the East Africa Tourist Visa.",
          ],
          cost: "$50–120 (golden monkeys or lake activities + transport)",
        },
      ],
    },
    {
      label: "Mid-Range Plan",
      sub: "~$250/day (excl. gorilla permit)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Kigali — Boutique Hotel & City Exploration",
          items: [
            "Arrive KGL, private airport transfer arranged by your hotel (~$30–40). Comfortable and hassle-free after a long flight.",
            "Check in to a boutique mid-range hotel: Hotel des Mille Collines (the famous 'Hotel Rwanda'), Kigali Serena, or Bamboo Boutique Hotel ($80–150/night).",
            "Lunch at The Hut — excellent Rwandan and international menu with city views (~$15–25).",
            "Afternoon guided walking tour of Kigali's key neighbourhoods: Kiyovu, Kimihurura, and Nyamirambo with a local guide ($30–50).",
            "Sundowner at Repub Lounge or Cheza Bar, popular with diplomats and expats, for cocktails and Kigali's sparkling nighttime panorama.",
            "Dinner at Fusion restaurant or Khana Khazana (Indian cuisine in Kigali — excellent) (~$20–35).",
          ],
          cost: "$100–160 (accommodation, food, guided activities)",
        },
        {
          day: "Day 2",
          title: "Kigali Deep Dive — Memorial, Arts & Cuisine",
          items: [
            "Morning: Kigali Genocide Memorial with a private guide who can provide deeper historical context ($25–40 guide fee).",
            "Visit the Presidential Palace Museum — the former home of President Habyarimana, preserved as it was on the day of the genocide. Eerie and important ($10).",
            "Lunch at Question Coffee — Rwanda's finest specialty coffee chain, supporting women farmers. Try the cold brew ($8–12).",
            "Afternoon: Inema Arts Centre and the Ivuka Arts studio. Rwanda has a thriving contemporary art scene — buy a piece to take home.",
            "Afternoon: guided Kigali food tour with Eco-Tours Rwanda — local breweries, markets, and street food with cultural context ($45).",
            "Evening: dinner at Repub Lounge — renowned for excellent food and atmosphere. Try the grilled tilapia or nyama choma (grilled meats) (~$25–40).",
          ],
          cost: "$80–130 (guided tours, museum fees, meals)",
        },
        {
          day: "Day 3",
          title: "Scenic Drive to Musanze — Countryside & Volcanoes",
          items: [
            "Private driver/transfer Kigali to Musanze (3 hours) through Rwanda's famously terraced hills ($60–80 transfer). Stop at the equator line for photos.",
            "Check in to Gorillas' Hill or Muhabura Hotel in Musanze (~$80–120/night). Comfortable rooms with mountain views.",
            "Afternoon: guided visit to the Dian Fossey Gorilla Fund's Karisoke Research Centre visitor experience — understand the history of gorilla conservation ($20).",
            "Visit a local Iby'Iwacu Cultural Village — traditional Rwandan dance, music, and a chance to meet former poachers turned conservation guides ($15).",
            "Evening gorilla trek briefing at Kinigi HQ. Your guide will confirm the gorilla family (each family has a name: Amahoro, Sabyinyo, Susa, etc.) and terrain details.",
            "Early dinner and in bed by 9pm. Tomorrow requires energy.",
          ],
          cost: "$100–160 (transfer, accommodation, cultural activities)",
        },
        {
          day: "Day 4",
          title: "Gorilla Trekking Day — Volcanoes National Park",
          items: [
            "5:30am breakfast at hotel. Hotel will pack a packed lunch for the trek.",
            "7am briefing at Kinigi HQ. Mid-range trekkers often access slightly smaller groups (max 8 people per gorilla family) for a more intimate experience.",
            "Trek with experienced guides and trackers (often former poachers) through lush bamboo and Hagenia forests on the volcanic slopes.",
            "THE MOMENT: one hour with a mountain gorilla family. The silverback may be 10 metres away, the juveniles closer. Do not speak above a whisper.",
            "Post-trek: lodge lunch, hot shower, and time to process the experience — most people describe it as life-changing.",
            "Afternoon: optional sunset hike to a viewpoint over the five Virunga volcanoes straddling Rwanda, Uganda, and DRC.",
            "GORILLA PERMIT: $1,500/person fixed government fee — booked in advance through Rwanda Development Board or a licensed operator.",
          ],
          cost: "$1,500 gorilla permit + $80–120 for the day",
        },
        {
          day: "Day 5",
          title: "Golden Monkeys + Lake Kivu Farewell",
          items: [
            "Morning: Golden Monkey Trek ($100 permit) — these Critically Endangered primates are found only in the Virunga Mountains. Playful, acrobatic, and photogenic.",
            "Private transfer to Gisenyi on Lake Kivu (30 minutes from Musanze). Check in to a lakeside lodge for a long lunch.",
            "Boat trip on Lake Kivu — this enormous lake sits in the Great Rift Valley and borders the DRC. The water is mysteriously methane-rich.",
            "Lunch at Paradis Malahide or Lake Kivu Serena — fresh lake fish and cold Primus beer with DRC in the background.",
            "Private transfer back to Kigali for your evening flight ($80–100). Stop at any craft shops en route.",
          ],
          cost: "$100–180 (golden monkeys, lake activities, transfer)",
        },
      ],
    },
    {
      label: "Luxury Plan",
      sub: "~$500/day (excl. gorilla permit)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Kigali — The Retreat & Private City Tour",
          items: [
            "Private VIP airport transfer in a luxury 4x4. Met by a dedicated concierge.",
            "Check in to The Retreat Kigali or Kigali Marriott Hotel ($200–350/night). Rwanda's luxury hotels rival any in Africa for service and design.",
            "Private chef's table lunch at Chez Lando or the hotel's fine dining restaurant. Rwandan cuisine elevated: plantain, umuburozo (sorghum porridge), and fine wines.",
            "Private half-day city tour with an expert local guide: Genocide Memorial, Presidential Palace, contemporary art galleries, and the spectacular views from Mont Kigali.",
            "Sunset cocktails on the hotel terrace. The Kigali skyline is genuinely beautiful — a skyline that did not exist 30 years ago.",
            "Dinner at Fusion Restaurant or a private chef dinner arranged by the hotel. Pair Rwandan coffee liqueur with dessert.",
          ],
          cost: "$250–400 (hotel, private guides, fine dining)",
        },
        {
          day: "Day 2",
          title: "Kigali Cultural Immersion & Private Experiences",
          items: [
            "Private Kigali Genocide Memorial experience with a survivor guide — a deeply personal and historically profound morning.",
            "Private specialty coffee experience at Question Coffee or Bourbon Coffee — Rwanda produces some of the finest coffee on Earth.",
            "Helicopter flight over Kigali and the Thousand Hills (available through private charter operators, ~$300–500 for the flight). Optional but extraordinary.",
            "Afternoon: private Inema Arts Centre experience with the artists, including a painting workshop and exclusive gallery access.",
            "Pre-departure shopping at the Caplaki Craft Market with a private stylist for Rwandan imigongo art and Agaseke baskets.",
            "Gala dinner at the hotel with curated Rwandan wine and spirits pairing.",
          ],
          cost: "$300–600 (private experiences, optional helicopter)",
        },
        {
          day: "Day 3",
          title: "Helicopter to Musanze — Bisate Lodge Arrival",
          items: [
            "Helicopter transfer Kigali to Musanze (40 minutes over the Thousand Hills — extraordinary). Includes luggage transfer.",
            "Check in to Bisate Lodge (from &Beyond) or One&Only Gorilla's Nest ($800–1,200/night). These are among the most celebrated lodges in Africa.",
            "Bisate Lodge: six forest villas perched on an extinct volcano crater, with floor-to-ceiling windows facing the Virunga volcanoes. An architectural masterpiece.",
            "Afternoon: private tour of the Lodge's reforestation programme — Bisate has planted over 130,000 indigenous trees on degraded agricultural land.",
            "Sundowner at the crater rim viewpoint with Virunga volcanoes stretching into Uganda and DRC. Champagne provided.",
            "Gourmet dinner at the lodge with Rwandan-inspired menus designed by the head chef. Sleep to the sounds of forest birds.",
          ],
          cost: "$900–1,300 (helicopter, lodge, included meals)",
        },
        {
          day: "Day 4",
          title: "Private Gorilla Trek + Afternoon Habituated Group",
          items: [
            "Private wake-up call with breakfast delivered to your villa. The lodge prepares a gourmet trek lunch.",
            "Private gorilla trek with a dedicated tracker and guide (luxury lodges often have priority access to the gorilla families closest to the lodge).",
            "THE SILVERBACK: at Bisate, the Susa or Amahoro family groups are often tracked. Susa group was Dian Fossey's study group — among the most famous gorilla families on Earth.",
            "Some luxury guests combine with an afternoon Gorilla Habituation Experience ($1,500 — 4 hours with a gorilla family being habituated to humans, more intimate, fewer visitors).",
            "Return to lodge for a hot outdoor bath with volcano views. This is what $1,200/night looks like.",
            "Evening: conservation lecture by the lodge's resident naturalist on gorilla behaviour, ecology, and the threats they still face.",
            "GORILLA PERMIT: $1,500/person fixed fee. Habituation Experience permit: additional $1,500.",
          ],
          cost: "$1,500 gorilla permit + $900–1,200 lodge rate",
        },
        {
          day: "Day 5",
          title: "Golden Monkeys, Lake Kivu & Farewell Rwanda",
          items: [
            "Sunrise golden monkey trek with private tracker — an intimate experience with critically endangered primates in the bamboo forest at dawn.",
            "Farewell gourmet brunch at the lodge prepared by the kitchen team. Take a final walk through the reforested crater.",
            "Helicopter to Gisenyi and a private boat tour of Lake Kivu, stopping at volcanic hot springs and a remote beach island.",
            "Lunch at the Lake Kivu Serena Hotel — lakeside terrace, fresh fish, and cold Mutzig beer with the DRC mountains across the water.",
            "Private helicopter or charter flight back to Kigali for onward connections.",
            "Depart Rwanda having experienced what most people never will — and having contributed to the conservation of the species with your permit fee.",
          ],
          cost: "$400–700 (helicopter, lake activities, gourmet meals)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–35 (hostel/guesthouse)",
      food: "$10–20 (local restaurants)",
      transport: "$5–15 (bus/moto)",
      activities: "$20–50 (markets, museums)",
      total: "~$150/day*",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–150 (boutique hotel)",
      food: "$30–60 (mix of restaurants)",
      transport: "$40–80 (private transfers)",
      activities: "$50–100 (guided tours)",
      total: "~$250/day*",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$800–1,200 (Bisate/Gorilla's Nest)",
      food: "$80–150 (fine dining, included)",
      transport: "$200–500 (helicopter/4x4)",
      activities: "$100–300 (private guides)",
      total: "~$500+/day*",
    },
    {
      tier: "🦍 Gorilla Permit",
      accommodation: "N/A",
      food: "N/A",
      transport: "N/A",
      activities: "$1,500 fixed — ALL tiers",
      total: "$1,500/person",
    },
    {
      tier: "🐒 Golden Monkeys",
      accommodation: "N/A",
      food: "N/A",
      transport: "N/A",
      activities: "$100 fixed — ALL tiers",
      total: "$100/person",
    },
  ],

  mistakes: [
    {
      icon: "🦍",
      title: "Waiting to Book Your Gorilla Permit",
      desc: "Rwanda issues only 96 gorilla trekking permits per day across 12 habituated families (8 people per family). During peak season (Jun–Sep, Dec–Feb) permits sell out months in advance. Book the moment you have dates confirmed — through the Rwanda Development Board website or a licensed operator.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "👟",
      title: "Wearing Wrong Footwear for the Trek",
      desc: "The Virunga volcanic slopes are steep, muddy, and unpredictable. Cheap trainers or sandals will leave you slipping in the mud. You need waterproof hiking boots with ankle support. Rent gaiters at the park ($5) — they genuinely help with stinging nettles on the lower slopes.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚫",
      title: "Ignoring the 7-Metre Rule (and Flash Photography)",
      desc: "Rangers enforce this strictly. Gorillas can transmit human respiratory diseases — if you have even a mild cold, you will be asked to stay back further or not trek at all. Flash photography is absolutely banned — a surprised silverback is an unpredictable silverback. Keep your phone on silent.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "💵",
      title: "Not Budgeting Separately for the Gorilla Permit",
      desc: "The $1,500 gorilla permit is a fixed government fee that applies to every visitor, regardless of budget tier. It is not negotiable, not reducible, and cannot be avoided. Many first-timers look at '$150/day budget' and forget that the gorilla permit is a separate, one-off additional cost.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌧️",
      title: "Going in the Wet Season Without Rain Gear",
      desc: "Rwanda has two wet seasons (Mar–May and Oct–Nov). The forests remain open but treks are muddier and harder. Even in the dry season, the rainforest can dump a sudden downpour. A lightweight waterproof jacket is non-negotiable. The gorillas don't care about the rain — you'll need to not care either.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  tips: [
    {
      icon: "🌿",
      title: "Go Early for the Best Gorilla Trek",
      desc: "The 7am briefing group gets the first track of the day — gorillas are most active in the morning. By afternoon, some families move deeper into the forest and the trek can be significantly longer. Early groups also benefit from better light for photography.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎒",
      title: "Hire a Porter — It Helps the Community",
      desc: "Porters are available at the park gate for $15–20. They carry your daypack, help you on steep sections, and earn their income from tourism. It is genuinely one of the best ways to directly support local communities, and most trekkers are glad they hired one.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "☕",
      title: "Rwanda Makes Some of the World's Best Coffee",
      desc: "The Volcanic soil of the Thousand Hills produces extraordinary specialty coffee. Visit Question Coffee or Bourbon Coffee in Kigali for single-origin Rwanda coffees — and buy a bag to take home. Rwanda coffee regularly wins international competitions. A $5 bag at the airport is world-class.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🛡️",
      title: "Rwanda is Genuinely Safe — Relax",
      desc: "Rwanda consistently ranks as one of Africa's safest countries for tourists. Kigali has functioning streetlights, clean streets, rare petty crime, and a well-organised police force. Women can walk alone at night with more comfort than in most European cities. Adjust your instincts accordingly.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  faqs: [
    {
      q: "How much does gorilla trekking in Rwanda cost in 2026?",
      a: "The gorilla trekking permit costs $1,500 per person — a fixed fee set by the Rwanda Development Board. This applies to all visitors regardless of nationality or budget. The fee goes directly to conservation and community development. On top of the permit, budget $30–50 for the day (transport, food, guide tips). Book permits at rdb.rw or through a licensed tour operator.",
    },
    {
      q: "Is Rwanda safe for solo travel and female travellers?",
      a: "Yes — Rwanda is consistently rated one of Africa's safest countries. Kigali has functioning street lighting, low crime, and a helpful and visible police presence. Solo female travellers regularly describe it as safer than many European cities. The country's transformation since 1994 has produced a society with remarkable social cohesion and a zero-tolerance approach to public disorder.",
    },
    {
      q: "What is the best time of year to visit Rwanda for gorilla trekking?",
      a: "The two dry seasons — June to September and December to February — are peak gorilla trekking season. Trails are drier, the vegetation slightly less dense, and photography conditions better. However, gorilla permits sell out fastest during these months. The wet seasons (March–May and October–November) offer lower lodge rates and more available permits, though treks are muddier.",
    },
    {
      q: "Can I combine Rwanda with Uganda or Kenya?",
      a: "Absolutely — this is one of the best combinations in Africa. The East Africa Tourist Visa ($100) covers Rwanda, Uganda, and Kenya in a single multi-entry visa. Common routes: Kigali to Entebbe (Uganda) for more gorilla trekking and chimpanzees in Kibale Forest, or Nairobi (Kenya) for the Masai Mara wildebeest migration. Both countries are well-connected by daily flights.",
    },
  ],

  combineWith: ["Uganda", "Kenya Masai Mara", "Tanzania", "Ethiopia"],
  relatedSlugs: ["namibia-7-days", "ethiopia-lalibela-5-days", "kenya-masai-mara-7-days"],

  galleryQuery: "rwanda kigali volcanoes national park gorilla africa landscape",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function RwandaPage() {
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
