import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Luxembourg City",
  country: "Luxembourg",
  countryFlag: "🇱🇺",
  slug: "luxembourg-city-2-days",
  heroQuery: "luxembourg city casemates grund valley panorama",
  heroAlt: "Luxembourg City panorama showing the Alzette River valley, Grund quarter, and fortress walls at sunset",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "10 min read",
  intro:
    "Luxembourg City is one of Europe's most dramatically situated capitals — a medieval fortress city perched on sandstone cliffs above two river valleys, with 17 kilometres of underground tunnels (the Bock Casemates) carved directly into the rock, a UNESCO-listed old quarter (the Grund) sitting 70 metres below the plateau, and a fairytale surrounding countryside dotted with moss-covered gorges and Viking-age castle ruins. Two full days is exactly what it takes to see it properly — and the day trip north to Vianden Castle and the Mullerthal forest makes this small country genuinely unmissable.",
  stats: { duration: "2 Days", budgetFrom: "€55", bestMonths: "May–Jun or Sep–Oct", airport: "LUX" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Casemates, Grund & Grand Ducal Palace" },
    { id: "day2", emoji: "📅", label: "Day 2 — Vianden Castle & Mullerthal Forest" },
    { id: "bonus", emoji: "🗺️", label: "What to Eat: Judd mat Gaardebounen" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C)"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Luxembourg Embassy or VFS Global (via Belgian consulate in many cities)"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Luxembourg has no embassy in India — apply via the Belgian Embassy or VFS Global. Apply 8 weeks early."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "Public transport in Luxembourg is entirely free — including trains to Vianden and Echternach. No transit card needed."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€55–75/day",
      days: [
        {
          day: "Day 1",
          title: "Bock Casemates, Grund Quarter & Grand Ducal Palace",
          items: [
            "09:00 — Bock Casemates opening time — arrive at 9am to beat tour groups at this UNESCO-listed network of underground tunnels carved into the sandstone cliff in 1644; entry €8; the gun galleries and 40-metre-deep shafts overlook the Alzette valley far below",
            "11:00 — Walk the Chemin de la Corniche — dubbed 'Europe's most beautiful balcony', this promenade along the cliff edge above the Grund quarter is completely free and offers the best views of Luxembourg City from above",
            "12:30 — Descend the elevator or staircase to the Grund quarter — Luxembourg's most atmospheric neighbourhood sits in the Alzette valley 70 metres below the old city; lunch at a Grund cafe costs €10–15; try the Brasserie de la Poste for a Moselle wine with a croque monsieur",
            "15:00 — Grand Ducal Palace exterior and Place Guillaume II — the official residence of the Grand Duke; the exterior with its Spanish Renaissance facade is free to view; changing of the guard at 10:15 if visiting on a weekday",
            "17:00 — National Museum of History and Art (MNHA) free on the first Sunday of each month; otherwise €7 — covers Luxembourg's remarkable Celtic, Roman, and medieval history",
            "19:30 — Dinner: judd mat gaardebounen (smoked collar of pork with broad beans) at a traditional Luxembourgish brasserie costs €14–18; try Brasserie Chiggeri near Place d'Armes for authentic local cooking without tourist pricing",
          ],
          cost: "€45–58 (accommodation, casemates, MNHA, meals)",
        },
        {
          day: "Day 2",
          title: "Vianden Castle Day Trip & Mullerthal Forest",
          items: [
            "07:30 — Free train from Luxembourg City station to Ettelbruck (55 minutes, no ticket needed — all public transport is free in Luxembourg) then Bus 570 to Vianden (30 minutes, also free)",
            "09:30 — Vianden Castle (€10 entry) — one of the best-preserved medieval fortresses in Western Europe, dramatically perched above the Our River valley; the fully restored banquet halls, knight's chapel, and count's tower take 90 minutes to explore properly",
            "12:00 — Lunch in Vianden village: the village below the castle has several good cafes; grilled trout from the Our River with local riesling costs €14–18",
            "14:00 — Bus to Echternach (via Diekirch), the gateway to the Mullerthal region — the fairytale sandstone gorge landscapes of Little Switzerland (Petite Suisse Luxembourgeoise) are unlike anywhere else in Benelux; free hiking on marked trails",
            "16:30 — Short walk on the Mullerthal Trail Section 1 through the Gorge du Loup — moss-covered boulders, narrow rock clefts, and ancient beech forest for free; the most photographed section takes 2 hours for the full loop or 45 minutes for the gorge section only",
            "19:30 — Free train back to Luxembourg City; farewell dinner at a wine bar near the station (€18–22/pp) with a glass of Moselle Riesling grown just 30 minutes from the city",
          ],
          cost: "€42–55 (Vianden Castle, lunch, dinner — all transport free)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Full City Immersion — Casemates to Kirchberg",
          items: [
            "09:00 — Check in to a 3-star hotel in the Old Quarter or Ville Haute (€80–120/night); Luxembourg is expensive — mid-range in this city equals budget in Paris or Amsterdam",
            "10:00 — Bock Casemates (€8) with audio guide — the 40 kilometres of tunnels once housed 35,000 soldiers; the audio guide explains the military history from Vauban fortifications to WWII use",
            "12:00 — Chemin de la Corniche cliff walk then descent to the Grund for lunch at Ma Langue Sourit — a Michelin Bib Gourmand restaurant serving seasonal Luxembourg produce; 2 courses costs €28–35",
            "14:30 — Grand Ducal Palace area then Mudam (Luxembourg Museum of Modern Art, €10) — designed by I.M. Pei and housing one of Europe's finest collections of contemporary art in a striking glass pavilion built into the Kirchberg plateau",
            "18:00 — Moselle wine bar tasting in the Old Town — Luxembourg's Moselle valley produces excellent Riesling and Pinot Gris; a curated 4-glass tasting at Caves Bernard-Massard costs €18–22",
            "20:30 — Dinner at Brasserie Chiggeri (€35–45/pp) — the city's most respected traditional Luxembourg restaurant; judd mat gaardebounen, fried gudgeon fish from the Moselle, and Riesling spaetzle are standout dishes",
          ],
          cost: "€160–200 (hotel, museums, wine tasting, Michelin lunch, dinner)",
        },
        {
          day: "Day 2",
          title: "Vianden, Mullerthal & Moselle Valley Return",
          items: [
            "07:45 — Free train to Ettelbruck then Bus 570 to Vianden — arrive before 9:30am to have Vianden Castle largely to yourself for the first hour",
            "09:30 — Vianden Castle (€10) with the full 90-minute guided tour (€5 extra, runs at 10am and 2pm) — the guide unlocks rooms closed to self-guided visitors including the private chapel and the weapons collection",
            "12:30 — Vianden chair lift (€6 return) over the Our River valley for a panoramic view of the castle from above — one of the most dramatic landscape perspectives in Luxembourg",
            "14:00 — Drive or bus to the Mullerthal Trail — guided hiking with a local nature guide (€35, bookable via Luxembourg tourism) through the most scenic section of gorge; 3 hours including picnic lunch packed by your hotel",
            "19:00 — Return to Luxembourg City; dinner at a Michelin-recommended brasserie in the Grund quarter (€40–55/pp); the Moselle valley Auxerrois white wine pairs perfectly with local fish dishes",
          ],
          cost: "€165–210 (hotel, castle, chair lift, guided hike, dinner)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€350–550/day",
      days: [
        {
          day: "Day 1",
          title: "Private City Tour & Rooftop Dining",
          items: [
            "12:00 — Check in to Hotel Le Royal Luxembourg or Sofitel Luxembourg Le Grand Ducal (€250–450/night) — the Le Royal has spa and indoor pool; the Sofitel occupies a Grand Ducal Palace-adjacent building with fortress wall views",
            "14:00 — Private guided tour of the Bock Casemates and Old Town with a licensed Luxembourg historian (€120 for 3 hours) — access the full tunnel network with expert commentary on the city's 10 sieges and Vauban engineering",
            "18:00 — Pre-dinner drink at the hotel rooftop bar or the terrace at Hotel Le Place d'Armes (€14/cocktail) overlooking the Grand Ducal Palace square",
            "20:00 — Dinner at Ma Langue Sourit (1 Michelin star, €90–120/pp) — Chef Christophe Hardiquest's seasonal Luxembourg tasting menu uses foraged Ardennes mushrooms, Moselle River fish, and Oesling farmstead cheeses; outstanding wine list heavy on Moselle producers",
          ],
          cost: "€500–700 (hotel, private tour, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Vianden Transfer & Mullerthal Helicopter",
          items: [
            "08:30 — Private car to Vianden (€80 one-way, 45 minutes) with a private guide — arrive at castle opening time with the valley mist still clinging to the Our River",
            "09:00 — Vianden Castle private after-hours access (€80 supplement, arranged via castle administration) — 30 minutes before public opening with a curator who explains the Counts of Vianden family history and the 20th-century restoration project",
            "12:00 — Private lunch at Vianden's best restaurant — Hotel Heintz serves a seasonal 3-course menu with paired Moselle wines for €65/pp in a dining room overlooking the castle",
            "14:30 — Private car to Mullerthal; private nature guide for a 2-hour gorge walk through the best sandstone formations (€75); the guide identifies the geological formations, medicinal plants, and explains Luxembourg's Celtic heritage",
            "19:30 — Private car back to Luxembourg City; farewell dinner at Mosconi (2 Michelin stars, €130–160/pp) — the city's most prestigious Italian-Luxembourg fusion restaurant; book 4–6 weeks ahead",
          ],
          cost: "€600–850 (hotel, private transfers, castle, guide, 2-star dinner)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€30–45 (hostel or budget guesthouse)",
      food: "€18–28 (brasseries + markets)",
      transport: "€0 (all public transport free in Luxembourg)",
      activities: "€8–18 (casemates + castle)",
      total: "€55–75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€80–120 (3-star Old Quarter hotel)",
      food: "€45–65 (restaurants + wine tasting)",
      transport: "€0–15 (free trains + occasional Bolt)",
      activities: "€20–35 (museums + guided hike)",
      total: "€120–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–450 (5-star city centre hotel)",
      food: "€100–180 (Michelin dining + wine)",
      transport: "€80–160 (private car + transfers)",
      activities: "€80–120 (private tours + castle access)",
      total: "€350–550/day",
    },
    {
      tier: "Vianden Day Trip",
      accommodation: "—",
      food: "€14–35 (village lunch)",
      transport: "€0 (free trains and buses)",
      activities: "€10–16 (castle + chair lift)",
      total: "€24–51 extra",
    },
    {
      tier: "Mullerthal Hiking",
      accommodation: "—",
      food: "€0–15 (picnic or trail cafe)",
      transport: "€0 (free bus from Echternach)",
      activities: "€0–35 (free trails or guided)",
      total: "€0–50 extra",
    },
  ],
  mistakes: [
    {
      icon: "🚌",
      title: "Paying for public transport",
      desc: "Luxembourg made all public transport — trains, buses, and trams — permanently free in 2020. Many visitors do not know this and waste money on taxis or rental cars for the Vianden and Mullerthal day trips. Simply board any train or bus; no ticket or pass required.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏰",
      title: "Treating Luxembourg City as a single-afternoon stop",
      desc: "Brussels-to-Strasbourg train travellers often stop 3–4 hours in Luxembourg and leave thinking it was nice but nothing special. The Bock Casemates alone take 90 minutes. The Grund quarter requires 2 hours. Vianden is a full day. The city needs 2 full days minimum.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌿",
      title: "Skipping the Mullerthal fairy-tale forest",
      desc: "The Mullerthal region is Luxembourg's greatest natural secret — narrow sandstone gorges, ancient moss-covered boulders, and beech forest canopies that look like fantasy set design. It is completely free to visit and reachable by free bus from Echternach. Most visitors never go.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍽️",
      title: "Never trying judd mat gaardebounen",
      desc: "Luxembourg's national dish — smoked collar of pork with broad beans in cream sauce — is found only in Luxembourg and is outstanding. Restaurants near the tourist centre of Place d'Armes often serve a watered-down version. Ask for a traditional brasserie in the Grund or Clausen for the real thing.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💶",
      title: "Assuming Luxembourg is unaffordably expensive",
      desc: "Luxembourg is expensive by European standards but not outrageously so for Western Europe. Budget accommodation exists (€25–45/night in hostels), supermarkets are reasonably priced, and the free transport system eliminates one major cost category entirely. You can have an excellent 2-day trip for €110–150 total excluding accommodation.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🚆",
      title: "All public transport is free — use it aggressively",
      desc: "Trains run hourly to Ettelbruch (for Vianden connection) and to Echternach (for Mullerthal). The free network is clean, punctual, and covers the entire country. Download the Luxembourg CFL app for real-time schedules. Book Vianden and Mullerthal via getyourguide: https://www.getyourguide.com/s/?q=Luxembourg&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🕘",
      title: "Enter the Bock Casemates at opening time (9am)",
      desc: "The casemates fill quickly with tour groups from Belgium and Germany by 10:30am. Arriving at 9am means you often have long underground gallery sections entirely to yourself for the first 45 minutes — a dramatically different experience from mid-morning crowds.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍷",
      title: "Drink Moselle Riesling — Luxembourg wines are exceptional",
      desc: "The Luxembourg Moselle valley produces first-rate Riesling, Pinot Gris, and Cremant sparkling wine. Local wine is served at most restaurants but often not prominently listed — ask specifically for Moselle Luxembourg wines. A bottle at a wine bar costs €18–28; supermarket bottles of excellent quality cost €7–12.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌄",
      title: "See the Chemin de la Corniche at sunset, not midday",
      desc: "Europe's most beautiful balcony looks its best when the Alzette valley below the cliff fills with golden evening light and the church towers of the Grund cast long shadows. Most visitors walk it mid-morning as an orientation stop. Walk it at 6:30–7:30pm for photographs that look genuinely extraordinary.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is public transport really free in Luxembourg?",
      a: "Yes — since 29 February 2020, all standard-class public transport in Luxembourg (trains, trams, and buses) is permanently free for everyone, residents and tourists alike. This includes the train to Ettelbruch for Vianden connections, the bus to Vianden, and the bus from Echternach into the Mullerthal. First class on trains costs €2/journey. Simply board; no ticket or pass is required for standard class.",
    },
    {
      q: "How do I get from Luxembourg City to Vianden Castle?",
      a: "Take the free train from Luxembourg City station to Ettelbruck (55 minutes, hourly departures), then Bus 570 to Vianden (30 minutes, approximately hourly). Total journey is about 90 minutes each way. Both train and bus are completely free in standard class. The Bus 570 stops directly in Vianden village, 10 minutes' walk below the castle.",
    },
    {
      q: "What is the Mullerthal and is it worth a half-day?",
      a: "The Mullerthal (also called Luxembourg's Little Switzerland) is a region of sandstone rock formations, narrow gorges, and ancient forest in eastern Luxembourg around the town of Echternach. Section 1 of the Mullerthal Trail through the Gorge du Loup takes 2 hours for the scenic gorge section. It is genuinely spectacular and completely free. Take the free bus from Echternach into the trail. The landscape is unlike anywhere else in Benelux.",
    },
    {
      q: "When is the best time to visit Luxembourg City?",
      a: "May–June and September–October are ideal — mild temperatures (15–22 degrees), long daylight hours for walking the Corniche and exploring Mullerthal, and fewer crowds than July–August. Christmas markets in December are excellent with the Old Town beautifully lit. January–February are cold and grey but uncrowded. July and August are busy with Belgian and German summer tourists.",
    },
  ],
  combineWith: ["brussels-3-days", "cologne-3-days", "strasbourg-3-days"],
  relatedSlugs: ["bruges-3-days", "ghent-3-days", "strasbourg-3-days", "cologne-3-days"],
};

export const metadata: Metadata = {
  title: "Luxembourg City in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 2-day Luxembourg City itinerary — Bock Casemates tunnels, Grund quarter, Grand Ducal Palace, Vianden Castle day trip, Mullerthal fairy-tale forest, and judd mat gaardebounen. Budget €55/day. All transport is free.",
  keywords: [
    "Luxembourg City itinerary",
    "Luxembourg 2 days",
    "Luxembourg travel guide 2026",
    "Bock Casemates",
    "Vianden Castle",
    "Mullerthal hiking",
    "Luxembourg free transport",
    "Luxembourg visa Indian passport",
  ],
  openGraph: {
    title: "Luxembourg City in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Bock Casemates, Grund quarter, Vianden Castle, Mullerthal forest, and judd mat gaardebounen — Luxembourg in 2 days from €55/day. All public transport is free.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/luxembourg-city-2-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxembourg City in 2 Days: Complete 2026 Itinerary",
    description: "Bock Casemates, Vianden Castle, Mullerthal forest — all in 2 days from €55/day with free transport.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/luxembourg-city-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Luxembourg City in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxembourg City in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/luxembourg-city-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Luxembourg City",
      description:
        "Luxembourg City, Luxembourg — UNESCO-listed fortress city with Bock Casemates underground tunnels, the Grund river valley quarter, and gateway to Vianden Castle and Mullerthal forest.",
      geo: { "@type": "GeoCoordinates", latitude: 49.6116, longitude: 6.1319 },
    },
  ],
};

export default function LuxembourgCityPage() {
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
