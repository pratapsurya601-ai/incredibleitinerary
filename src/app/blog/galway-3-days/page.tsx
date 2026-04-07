import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Galway",
  country: "Ireland",
  countryFlag: "🇮🇪",
  slug: "galway-3-days",
  heroQuery: "galway latin quarter ireland cobblestones street",
  heroAlt: "Galway Latin Quarter cobblestone streets with colourful shopfronts, Ireland",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Galway is the soul of the Irish west — a compact city of 80,000 people that punches far above its weight in music, food, and craic. The Latin Quarter's cobblestones are lined with brightly painted shopfronts, traditional music sessions spill out of pubs every night of the week, and Galway Bay oysters slipped from the shell with a glass of Guinness may be the finest four seconds in food. Three days covers the city thoroughly, allows a full day trip to wild Connemara National Park, and leaves time for the Aran Islands ferry to Inis Mor for some of the most dramatic cliff scenery in Europe.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€55",
    bestMonths: "May–Sep",
    airport: "SNN (Shannon) or DUB",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Latin Quarter & Galway Bay" },
    { id: "day2", emoji: "📅", label: "Day 2 — Connemara National Park" },
    { id: "day3", emoji: "📅", label: "Day 3 — Aran Islands" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Irish Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Irish Short Stay Visa (Type C)"],
        ["Processing", "8–10 weeks (apply early)"],
        ["Fee", "€60 per person (single entry)"],
        ["Validity", "Up to 90 days; single or multiple entry"],
        ["Apply at", "Irish Naturalisation and Immigration Service (INIS) online"],
        ["Documents", "Return flight, hotel bookings, 6-month bank statements, employment letter"],
        ["Notes", "Ireland is NOT in the Schengen Area. A Schengen visa does not cover Ireland. Apply separately at the Irish Embassy or via the online visa portal."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Common Travel Area / EU Freedom of Movement)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "Up to 90 days per visit"],
        ["ETA", "No ETA or ETIAS required for Ireland"],
        ["Passport", "Must be valid for duration of stay"],
        ["Notes", "UK passport holders enter under the Common Travel Area with no restrictions. US, Canadian, and Australian citizens are visa-free for up to 90 days."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€55–75/day",
      days: [
        {
          day: "Day 1",
          title: "Latin Quarter Arrival & Trad Music Evening",
          items: [
            "14:00 — Arrive Galway by Bus Eireann from Dublin (€13, 2.5 hours) or from Shannon Airport (€12, 1 hour); drop bags at a hostel on Eyre Square (dorms from €22/night) and head straight into the Latin Quarter on foot",
            "15:00 — Walk Shop Street, Quay Street, and Kirwan's Lane — Galway's cobblestone heart; free street performances are common on summer afternoons; browse Claddagh ring shops and handmade Irish craft stores",
            "16:30 — Galway City Museum on Spanish Parade (free entry) — excellent exhibits on the Claddagh fishing village, the Spanish Arch, and Galway's medieval merchant history",
            "18:00 — Pre-dinner pint at Tigh Neachtain on Cross Street — one of Galway's oldest pubs, low beams, open fires, and a local crowd; pints of Guinness from €5.50",
            "19:30 — Dinner: fish and chips from McDonagh's on Quay Street (€12–15) — a Galway institution since 1902; queue outside is part of the experience and moves quickly",
            "21:00 — Trad music at The Crane Bar on Sea Road (free) — the most authentic traditional music pub in Galway; sessions start around 9:30pm upstairs and the musicians are genuinely exceptional",
          ],
          cost: "€35–45 (food, drinks, transport from bus station)",
        },
        {
          day: "Day 2",
          title: "Connemara National Park Day Trip",
          items: [
            "08:30 — Bus Eireann route 419 from Galway to Clifden via Connemara (€14 return) departing from Eyre Square — the two-hour journey through Connemara bog landscape is itself one of Ireland's great bus rides",
            "10:30 — Connemara National Park visitor centre (free) near Letterfrack — pick up a trail map and hike the Diamond Hill loop (7km, 2.5 hours); the summit views across the Twelve Bens and Atlantic coast are genuinely stunning",
            "14:00 — Lunch at the Station House in Clifden or pack sandwiches from Galway to save money — budget €8–12 for a bowl of chowder and brown bread in Clifden",
            "15:30 — Walk Clifden's two-street centre and the Sky Road loop if time allows (4km, 1 hour) — the Atlantic cliffs of the Sky Road are some of Connemara's most dramatic scenery",
            "18:30 — Return bus to Galway; quick change and head back out for the evening",
            "20:30 — Salthill promenade walk (free) — the 2km seafront walk along Galway Bay; tradition demands you kick the wall at the end before turning back",
          ],
          cost: "€30–40 (bus, lunch, snacks)",
        },
        {
          day: "Day 3",
          title: "Aran Islands Day Trip & Departure",
          items: [
            "08:30 — Aran Islands Ferries from Rossaveal (€25 return adult; shuttle bus from Galway €6 extra) — book online at aranislandferries.com; the 40-minute ferry to Inis Mor crosses open Atlantic with spectacular views of the Connemara coastline",
            "10:00 — Inis Mor: rent a bicycle at the pier (€15/day) and cycle to Dun Aonghasa — the Iron Age fort perched on 90-metre sheer cliffs over the Atlantic is one of Europe's most dramatic prehistoric monuments; entry €5",
            "13:00 — Lunch at one of the pier-side restaurants in Kilronan: chowder and soda bread for €12–15; the seafood here comes off the boats that morning",
            "15:00 — Cycle to the Seven Churches ruins and the Worm Hole (a natural rectangular tidal pool used for cliff diving competitions) — both free and far fewer visitors than Dun Aonghasa",
            "17:30 — Ferry back to Rossaveal and shuttle bus to Galway; arrive back in Galway by 19:30",
            "20:00 — Final night: oysters and Guinness at Moran's Oyster Cottage on the Weir (€18–22 for half-dozen oysters) or a cheaper trad music pub session at An Pucan on Forster Street",
          ],
          cost: "€55–70 (ferry, shuttle, bike hire, food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Latin Quarter Comfort & Oyster Dinner",
          items: [
            "13:00 — Check in to a 3-star hotel in the Latin Quarter or near Eyre Square (€90–140/night) — The House Hotel on Lower Merchant's Road is boutique and well-positioned; drop bags and explore on foot",
            "14:30 — Galway City Museum (free) and Spanish Arch waterfront — the arch is the last remaining section of Galway's medieval city walls; great photos at low tide with Claddagh visible across the river",
            "17:00 — Galway Bay oyster tasting at Ard Bia at Nimmos (€18 for six native oysters) — the restaurant sits right on the River Corrib and is Galway's most atmospheric lunch and dinner spot",
            "19:00 — Cocktails at The g Hotel bar (if staying elsewhere; €12–15 per cocktail) — Philippe Starck-designed interior, outrageous pink decor, and excellent Irish whiskey selection",
            "20:30 — Dinner at Aniar restaurant on Lower Dominick Street (Michelin star, €75–90 tasting menu; book 3–4 weeks ahead) or Kai Cafe and Restaurant on Sea Road (€35–45/pp, book in advance) — both focus on west of Ireland produce",
          ],
          cost: "€140–170 (hotel, oysters, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Connemara with Comfort",
          items: [
            "08:30 — Rent a car from Galway city centre (€35–50/day) and drive the N59 west through Connemara — the freedom to stop at Lough Corrib, Kylemore Abbey, and unnamed bogs on a whim is worth the extra cost over the bus",
            "11:00 — Kylemore Abbey (€18) in the shadow of the Twelve Bens — a Victorian Gothic castle on a lake used as a Benedictine convent; the walled Victorian garden is beautifully maintained and includes a restored glasshouse",
            "13:30 — Lunch at the Kylemore Abbey cafe (€15–20) or the Clifden Station House (€20–25/pp)",
            "15:00 — Connemara National Park Diamond Hill hike (free) — with a car you park at the visitor centre car park and have the hike to yourself by mid-afternoon",
            "18:30 — Drive back via the coast road through Spiddal — stop at Oliver's Seafood Bar in Cleggan for the freshest possible smoked salmon (€15–18) if open",
            "21:00 — Return to Galway; evening drinks at Tigh Neachtain or Monroe's Tavern",
          ],
          cost: "€150–180 (car hire, Kylemore, meals)",
        },
        {
          day: "Day 3",
          title: "Aran Islands in Comfort",
          items: [
            "08:30 — Aer Arann Islands flight from Connemara Airport near Inverin (€50 return, 7 minutes flight) — a spectacular low-level island-hopping flight over Atlantic limestone is one of Ireland's great cheap experiences",
            "10:00 — Hire a minibus tour on Inis Mor (€15/pp, meets ferry and plane arrivals) — covers Dun Aonghasa, the Seven Churches, and the Worm Hole with a local guide who explains the pre-Christian history",
            "13:00 — Lunch at Tig Ruairi in Kilronan (€20–25/pp) — the island's best restaurant; seafood chowder with freshly baked bread and Inis Mor crab claws",
            "15:30 — Return flight or ferry to Rossaveal; drive or shuttle back to Galway",
            "19:00 — Farewell dinner at Cava Bodega on Lower Dominick Street (€30–40/pp) — Spanish tapas and natural wines in a buzzing Galway atmosphere",
          ],
          cost: "€140–170 (flight or ferry, minibus tour, meals)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€280–450/day",
      days: [
        {
          day: "Day 1",
          title: "Connemara Hotel Arrival & Galway Oyster Feast",
          items: [
            "12:00 — Check in to Dromoland Castle (65km south, €300–500/night) or Lough Inagh Lodge in Connemara (€200–280/night) — Lough Inagh Lodge sits directly on a lake surrounded by the Twelve Bens and offers one of Ireland's most dramatic hotel settings",
            "15:00 — Private driver into Galway city (30 minutes from Connemara) for an afternoon walking food tour (€80/pp) covering oysters, smoked salmon, artisan cheese, and Irish soda bread from the English Market-style producers",
            "19:00 — Champagne and Galway Bay oysters at the g Hotel (€60 for dozen oysters with Chablis) — the full native oyster experience with expert food and wine pairing",
            "20:30 — Dinner at Aniar (Michelin star; €90–110 tasting menu) — Michael O'Meara's tasting menu changes monthly and showcases only Connacht and Clare producers; one of the best meals in Ireland",
          ],
          cost: "€350–500 (hotel, private driver, Michelin dinner, oysters)",
        },
        {
          day: "Day 2",
          title: "Private Connemara & Kylemore",
          items: [
            "09:00 — Private guided Connemara day tour with a historian-driver (€180–240) covering Kylemore Abbey with private guided access, a walk along Killary Harbour (Ireland's only fjord), and a stop at a working Connemara pony farm",
            "13:00 — Private lunch at Ballynahinch Castle hotel (€40–60/pp) — a 17th-century castle on a salmon river; the dining room sources Connemara lamb, fresh Atlantic salmon, and hand-dived scallops from within 30km",
            "16:00 — Guided fly-fishing session on the Ballynahinch River (€80/pp for a 2-hour guided lesson) — some of the finest wild salmon and sea-trout fishing in Europe in extraordinary scenery",
            "21:00 — Return to hotel; nightcap of a Connemara peated single malt from the hotel bar",
          ],
          cost: "€400–550 (hotel, private guide, castle lunch, fishing)",
        },
        {
          day: "Day 3",
          title: "Private Aran Islands & Farewell",
          items: [
            "08:00 — Private charter flight over all three Aran Islands (€300 for the plane, shared if 2–4 people) — a loop above Inis Mor, Inis Meain, and Inis Oirr with the pilot pointing out prehistoric forts and hidden beaches from above",
            "10:30 — Land on Inis Mor for a private guided tour of Dun Aonghasa (€100/pp for a private archaeologist guide) — an expert on Bronze and Iron Age Irish history provides context that transforms the fort from impressive to extraordinary",
            "13:00 — Private seafood lunch on Inis Mor at the Pier House restaurant — lobster, crab claws, and Aran scallops fresh from that morning; €50–70/pp",
            "16:00 — Return flight or ferry to Galway; private transfer to Shannon Airport or Galway rail station",
          ],
          cost: "€450–650 (charter flight, private guide, private lunch, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget",
      accommodation: "€22–35 (hostel dorm or budget B&B)",
      food: "€18–28 (cafes, chippers, market stalls)",
      transport: "€5–12 (Bus Eireann, walking)",
      activities: "€10–20 (museum free, ferry share)",
      total: "€55–75/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "€90–140 (3-star Latin Quarter hotel)",
      food: "€40–60 (bistros and seafood restaurants)",
      transport: "€20–40 (car hire or day tour)",
      activities: "€25–45 (Aran ferry, Kylemore, oysters)",
      total: "€120–170/day",
    },
    {
      tier: "Luxury",
      accommodation: "€200–500 (castle hotel or Connemara lodge)",
      food: "€100–180 (Michelin and castle dining)",
      transport: "€60–180 (private driver or charter flight)",
      activities: "€100–250 (private tours, fishing, charter)",
      total: "€280–450/day",
    },
    {
      tier: "Day Trip from Dublin",
      accommodation: "N/A (based in Dublin)",
      food: "€20–35 (lunch + snacks in Galway)",
      transport: "€26 return (Bus Eireann express)",
      activities: "€15–25 (city walk + one attraction)",
      total: "€60–85/day",
    },
    {
      tier: "Galway Races Week",
      accommodation: "€150–250 (premium during races week)",
      food: "€60–100 (festival dining and hospitality)",
      transport: "€15–30 (shuttle from city to racecourse)",
      activities: "€30–80 (race tickets; enclosures vary)",
      total: "€250–450/day during Galway Races",
    },
  ],
  mistakes: [
    {
      icon: "🌊",
      title: "Not booking the Aran Islands ferry in advance",
      desc: "The Aran Islands ferries fill completely in July and August, especially on weekends. Book at aranislandferries.com or islandferries.net at least 3 days ahead. The Rossaveal ferry is more reliable and faster than the older Galway Docks route.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍺",
      title: "Expecting trad music on every night in winter",
      desc: "Year-round trad sessions are concentrated in summer (May–September). In January and February even Galway's best trad pubs may have sessions only on weekends. The Crane Bar and Tigh Coili run sessions year-round but check schedules at Galway.ie before planning evenings around music.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚗",
      title: "Trying to see Connemara without transport",
      desc: "Bus Eireann reaches the main towns but the most spectacular Connemara landscapes — the bogs at Maam Cross, the Killary fjord road, the hidden lake shores — require a car or a dedicated tour. A car hire for one day (€35–50) opens up a completely different Connemara than the bus.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🥇",
      title: "Skipping Galway Races week without knowing it",
      desc: "The Galway Races (last week of July and early August) are one of Ireland's biggest events. The city is booked solid 6 months ahead and hotel prices triple. If you are not attending the races, either avoid this week or book 6 months in advance. If you are attending, it is one of the great Irish cultural events.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🦪",
      title: "Eating oysters outside of oyster season",
      desc: "Galway Bay native oysters are at their absolute peak from September to April (the months with an R). The famous Galway Oyster Festival in September celebrates the start of prime season. In July and August you will likely be served rock oysters, which are good but not the same as the native flat oysters in autumn.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎵",
      title: "Go to The Crane Bar for the best trad sessions",
      desc: "The Crane Bar on Sea Road runs the most authentic traditional music sessions in Galway — not performed for tourists but by local musicians who turn up and play for fun. Arrive by 9pm to get a seat upstairs. Sessions are free; buy a pint and settle in. Book tours and experiences at https://www.getyourguide.com/s/?q=Galway&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Walk the Salthill Prom at sunset",
      desc: "The 2km Salthill promenade along Galway Bay faces due west across the Atlantic and produces some of the finest sunsets in Ireland. Walk from Galway city centre (25 minutes on foot or €8 taxi) and kick the wall at the end — a Galway tradition that locals follow religiously.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🥘",
      title: "Eat at Kai Cafe on Sea Road at least once",
      desc: "Kai Cafe and Restaurant is consistently voted one of Ireland's best restaurants and operates on a simple farm-to-table philosophy. The lunch menu is outstanding value (€18–25 for two courses) using west of Ireland producers. Dinner is more elaborate and requires booking 1–2 weeks ahead.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "📅",
      title: "Time your visit around the Galway Film Fleadh or Oyster Festival",
      desc: "The Galway Film Fleadh (July) and Galway International Arts Festival (July) are world-class events that transform the city. The Oyster Festival (September) is one of Ireland's most sociable weekends. All three events have evening free outdoor events and create a festival atmosphere throughout the city.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Dublin to Galway?",
      a: "Bus Eireann Express routes X20 and 20 run from Dublin city centre (Busaras) and Dublin Airport to Galway Eyre Square every hour. Journey time is 2.5–3 hours. Tickets cost €13–20 booked in advance online. Irish Rail also runs Dublin Heuston to Galway Ceannt Station (2.5 hours, €20–35 depending on booking time). Both options drop you in the city centre.",
    },
    {
      q: "What is the best time of year to visit Galway?",
      a: "May to September offers the best weather (relatively) and the most events. July is peak tourist season with festivals but also packed streets. September is the locals favourite month — quieter than July, the Oyster Festival, excellent weather odds, and the best native oysters of the year. October is beautiful for Connemara colours but wetter. December has Christmas markets and strong trad music.",
    },
    {
      q: "Can I do both Connemara and the Aran Islands in 3 days?",
      a: "Yes, with efficient planning. Day 1 covers Galway city. Day 2 is Connemara by car or bus (full day, return to Galway by evening). Day 3 is the Aran Islands ferry from Rossaveal (full day). You need to book both the car hire and the ferry in advance. The ferry shuttle bus from Galway to Rossaveal is included in most ferry ticket packages.",
    },
    {
      q: "Is Galway suitable for vegetarian and vegan travellers?",
      a: "Galway is one of Ireland's most vegetarian-friendly cities. Kai Cafe, Ard Bia at Nimmos, and Gourmet Tart Co all have strong plant-based menus. The Latin Quarter has several dedicated vegetarian cafes and the Saturday market at Eyre Square always has excellent vegetarian street food. Vegan options have expanded significantly across all price ranges since 2020.",
    },
  ],
  combineWith: ["dublin-4-days", "belfast-4-days", "edinburgh-4-days"],
  relatedSlugs: ["dublin-4-days", "belfast-4-days", "edinburgh-4-days", "london-5-days"],
  galleryQuery: "galway ireland cobblestones connemara aran islands",
};

export const metadata: Metadata = {
  title: "Galway in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The ultimate 3-day Galway itinerary — Latin Quarter, Connemara National Park, Aran Islands ferry, Galway Bay oysters, Salthill promenade, and trad music pubs. Budget €55/day to luxury castle hotels. All visa info included.",
  keywords: [
    "Galway itinerary",
    "Galway 3 days",
    "Galway travel guide 2026",
    "Connemara day trip",
    "Aran Islands ferry",
    "Galway oysters",
    "trad music Galway",
    "Galway visa Indian passport",
  ],
  openGraph: {
    title: "Galway in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Latin Quarter cobblestones, Connemara, Aran Islands, and Galway Bay oysters — Ireland's west coast in 3 days from €55/day to luxury castle hotels.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/galway-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galway in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Connemara, Aran Islands, Galway Bay oysters, and the best trad music in Ireland — the complete Galway travel guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/galway-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Galway in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
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
          name: "Galway in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/galway-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Galway",
      description:
        "Galway, Ireland — the capital of the Irish west, with cobblestone Latin Quarter streets, Connemara, Aran Islands, Galway Bay oysters, and nightly traditional music.",
      geo: { "@type": "GeoCoordinates", latitude: 53.2707, longitude: -9.0568 },
    },
  ],
};

export default function GalwayPage() {
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
