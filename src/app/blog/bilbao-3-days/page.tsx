import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Bilbao",
  country: "Spain",
  countryFlag: "🇪🇸",
  slug: "bilbao-3-days",
  heroQuery: "bilbao guggenheim museum gehry titanium basque spain",
  heroAlt: "Guggenheim Museum Bilbao titanium facade reflected in the Nervion River at sunset",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Bilbao pulled off the most celebrated urban reinvention of the 20th century — a rusting Basque industrial port transformed by Frank Gehry's titanium Guggenheim into one of Europe's most exciting cities. Three days is enough to understand why: world-class modern art in a building that IS art, pintxos bar-hopping that reduces the finest restaurants in other cities to irrelevance, a pilgrimage up the island rock of Gaztelugatxe for cliff views that take your breath away, and enough Txakoli white wine and Rioja to understand why the Basques say they have the best food culture in Spain. They are right.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€60",
    bestMonths: "Apr–Jun or Sep–Oct",
    airport: "BIO (Bilbao Airport)",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Guggenheim & Old Town Pintxos" },
    { id: "day2", emoji: "📅", label: "Day 2 — Gaztelugatxe & Basque Coast" },
    { id: "day3", emoji: "📅", label: "Day 3 — Rioja Wine & La Ribera Market" },
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
        ["Apply at", "Spanish Consulate or VFS Global Spain"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance"],
        ["Notes", "Apply 6–8 weeks before travel. Spain is in the Schengen Area — one visa covers Spain, France, Germany and 25 other countries. Biometric appointment required."],
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
        ["Fee", "Free (ETIAS required from mid-2026: €7)"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 for US, UK, AU, and other non-EU nationals"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free but subject to 90/180 rule. Register for ETIAS before mid-2026 departure online."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€60–80/day",
      days: [
        {
          day: "Day 1",
          title: "Guggenheim Exterior & Old Town Pintxos Crawl",
          items: [
            "10:00 — Walk to the Guggenheim Museum from the city centre (15 minutes from the Old Town) — even if you skip the paid entry (€16), the titanium exterior, the Puppy flower sculpture by Jeff Koons, and the Louise Bourgeois Maman spider are free to see and worth 45 minutes of exploration",
            "11:00 — Guggenheim interior (€16, book online for timed entry) — the permanent collection includes Richard Serra's massive Torqued Ellipses steel sculptures in the atrium; even if modern art is not your thing, the building alone justifies entry",
            "13:30 — Walk across the Zubizuri pedestrian bridge (free, designed by Santiago Calatrava) to the Old Town (Casco Viejo) — the bridge is itself a work of public art",
            "14:00 — Pintxos lunch at the Seven Streets (Siete Calles) — Plaza Nueva has the highest concentration of pintxos bars; budget €2–3 per pintxo and €2.50 per txakoli; eat 4–5 pintxos for a full lunch for under €15",
            "17:00 — La Ribera covered market (free to browse) — the largest indoor market in Europe by floor area; even mid-afternoon the fish, cheese, and charcuterie counters are extraordinary",
            "20:00 — Evening pintxos crawl through Calle del Perro and Calle Jardines — the serious pintxos bars open at 7:30pm; the best ones are standing room only by 8:30pm; budget €20 for a proper crawl",
          ],
          cost: "€40–55 (museum, pintxos, txakoli, transport)",
        },
        {
          day: "Day 2",
          title: "Gaztelugatxe Hermitage Hike",
          items: [
            "08:00 — Bus from Abando bus station to Bakio (€3 each way, Bus Bizkaibus A3517, 45 minutes) — from Bakio take a taxi (€8) or walk 5km to San Juan de Gaztelugatxe",
            "10:00 — Hike the 231 steps up to the Gaztelugatxe hermitage on its island rock (free entry, reservation required at reservas.bizkaia.eus, free reservation) — the causeway path and the summit views across the Bay of Biscay are unforgettable; Game of Thrones fans know this as Dragonstone",
            "12:30 — Ring the bell at the top three times (tradition grants three wishes) and take photos from the cliff edge — the views to the Cantabrian coast are extraordinary on a clear day",
            "13:30 — Lunch at Eneperi restaurant in Bakio (€12–18) or the beachfront bar near Bakio beach — grilled fish and a glass of txakoli with Atlantic views",
            "16:00 — Bus back to Bilbao or stop at Gernika (add a bus connection) — the small town is the spiritual and political capital of the Basque people; the Peace Museum (€5) tells the story of the 1937 Nazi bombing immortalised by Picasso's painting",
            "20:30 — Return to Bilbao for evening pintxos on Calle Ledesma — one of the city's best pintxos streets for more adventurous creative pintxos",
          ],
          cost: "€35–45 (bus, hike, lunch, pintxos)",
        },
        {
          day: "Day 3",
          title: "La Ribera Market & Rioja Wine Country",
          items: [
            "09:00 — La Ribera market in the morning (free) — the morning sees the full market in operation; the fish mongers on the ground floor are selling Atlantic catch from 7am; grab a coffee and breakfast pintxo at the market bar for €3",
            "10:30 — Bus from Abando to Haro (€8, 1 hour 15 minutes, Conda buses) — the capital of Rioja Alta wine country; the town plaza is surrounded by bodegas and wine bars",
            "12:00 — Self-guided walk to Haro wine quarter (Barrio de la Estacion) — the greatest concentration of grand Rioja bodegas in the world within 5 minutes walk; Lopez de Heredia offers a public tasting for €12 including a glass of aged Rioja white",
            "14:00 — Long lunch at a Haro restaurant: braised lamb with Rioja and patatas a la Riojana (€15–20) — the local cuisine is heartier and meatier than Basque pintxos",
            "17:00 — Return bus to Bilbao; final evening walk along the Nervion riverfront at sunset — the Guggenheim and the Isozaki towers lit up at dusk make a spectacular final image of Bilbao",
          ],
          cost: "€40–55 (bus, wine tasting, lunch, dinner)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€130–180/day",
      days: [
        {
          day: "Day 1",
          title: "Guggenheim & Elevated Pintxos",
          items: [
            "12:00 — Check in to a 3-star hotel in the Old Town or near the Guggenheim (€90–140/night) — Hotel Zenit Bilbao or Petit Palace Arana are well-positioned and comfortable",
            "13:30 — Guggenheim Museum full visit (€16, book timed entry online) — allow 2.5 hours; the Jeff Koons, Basquiat, and Serra rooms are highlights; the building's curved titanium galleries are architecturally extraordinary even as circulation spaces",
            "17:00 — Museo de Bellas Artes (Fine Arts Museum, €10 or free on certain days) — one of Spain's best art museums is consistently overlooked by Guggenheim visitors; El Greco, Goya, and Zuloaga with almost no queue",
            "20:00 — Elevated pintxos at Bar Gatz on Calle Santa Maria (€3–5 per pintxo) — creative modern Basque pintxos; try the foie with apple and the bacalao a la vizcaina; wash down with glasses of txakoli from the Bizkaiko txakolina appellation",
            "22:00 — Late nightcap at El Globo on Diputacion — standing bar packed with locals from 10pm onwards; the best jambon iberico and manchego pintxos in the city for late night eating",
          ],
          cost: "€140–170 (hotel, museums, pintxos, drinks)",
        },
        {
          day: "Day 2",
          title: "Gaztelugatxe & Basque Coast Comfort",
          items: [
            "08:30 — Hire a car (€35–50/day from city centre) or book a private Basque coast tour (€60–80/pp) — the freedom of a car lets you stop at the Urdaibai biosphere reserve and Bermeo fishing village on the way to Gaztelugatxe",
            "11:00 — Gaztelugatxe (free, reservation required) — with a car you park at the dedicated car park (€3) and reach the causeway in 5 minutes; midweek visits are far less crowded than weekends",
            "13:30 — Lunch in Bermeo fishing village (€25–35/pp at a harbour-front restaurant) — the best anchovies in Spain come from the Cantabrian coast and Bermeo serves them fresh and salt-packed in every form",
            "15:30 — Urdaibai biosphere reserve coastal walk (free) — UNESCO-protected estuary with flamingos, egrets, and extraordinary light over the Cantabrian marshland",
            "20:00 — Return to Bilbao; dinner at Mina restaurant on Muelle Marzana (€60–80/pp; book 1–2 weeks ahead) — 1 Michelin star, focused on hyper-local Basque ingredients; the tasting menu changes with the season",
          ],
          cost: "€150–180 (car hire, Michelin dinner, lunch, attractions)",
        },
        {
          day: "Day 3",
          title: "Rioja Wine Country with Bodega Visits",
          items: [
            "09:00 — Drive or take the train to Haro (Renfe Cercanias, €8 return, 1 hour) — the Rioja wine capital has the highest concentration of bodegas outside of Bordeaux",
            "11:00 — Guided tour and tasting at Bodegas CVNE (€20 including tour + 3 wines) — one of the great historic Rioja producers with 19th-century cellars; their Vina Real Crianza is exceptional value at €8 from the bodega shop",
            "13:00 — Long lunch at Terrace restaurant in Haro (€30–40/pp) — the Rioja dining tradition involves long multi-course lunches with good local wine; slow-roasted lamb and garnacha from the Rioja Alta",
            "16:00 — Return to Bilbao via the A68 motorway; stop at the Bilbao viewpoint on Artxanda hill (funicular €4 return) for the best panoramic views over the entire city and the Nervion valley",
            "20:00 — Final pintxos at Victor Montes on Plaza Nueva — one of the oldest and most celebrated pintxos bars in the city; the crispy potato pintxos and the gourmet mushroom tosta are unmissable",
          ],
          cost: "€140–170 (transport, bodega tour, Rioja lunch, funicular)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€320–500/day",
      days: [
        {
          day: "Day 1",
          title: "Gran Domine Hotel & Private Guggenheim",
          items: [
            "13:00 — Check in to Gran Domine Hotel (€250–400/night) — the only hotel in the world designed to face the Guggenheim; the rooms have floor-to-ceiling windows framing the titanium curves; the rooftop terrace is Bilbao's best aperitivo spot",
            "15:00 — Private guided Guggenheim tour (€80/pp, book via the museum) — the museum's expert guides provide architectural and curatorial context that transforms the experience; private access to the Gehry archive is occasionally available",
            "18:00 — Champagne on the Gran Domine rooftop with Guggenheim views (€20 per glass) — the hotel bar has an extraordinary wine list focused on Spanish cavas and Basque Txakoli",
            "20:30 — Dinner at Nerua inside the Guggenheim (1 Michelin star, €120–140 tasting menu; book 6–8 weeks ahead) — Josean Alija's hyper-minimalist Basque tasting menu using the finest Cantabrian ingredients; eating inside the Guggenheim is a unique experience",
          ],
          cost: "€400–560 (hotel, private tour, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Basque Coast & Gaztelugatxe",
          items: [
            "08:30 — Private chauffeur-driven Basque coast tour (€200–260) covering Gaztelugatxe, Bermeo, Urdaibai, and the cliff villages of the Basque coast — a local guide explains the Basque national mythology behind Gaztelugatxe and the history of the fishing villages",
            "13:00 — Private lunch at Elkano in Getaria (€80–120/pp; one of Spain's most celebrated fish restaurants, 1 Michelin star) — the turbot grilled whole over charcoal is considered one of the finest dishes in the world; the 45-minute detour is absolutely worth it",
            "16:00 — Stop at a txakoli vineyard on the coast for a private tasting (arrange through hotel concierge; €40–60) — txakoli is only produced in three Basque appellations and a coastal vineyard tasting is the perfect way to understand this unique wine",
            "21:00 — Return to Bilbao; nightcap of 2015 La Rioja Alta Gran Reserva 890 at the Gran Domine bar",
          ],
          cost: "€450–600 (hotel, private driver, Michelin lunch, txakoli tasting)",
        },
        {
          day: "Day 3",
          title: "Private Rioja Tour & Departure",
          items: [
            "09:00 — Private chauffeur to Rioja wine country (€180–220 day hire) visiting two top bodegas: Lopez de Heredia (private barrel-room tour, €50) and Marques de Riscal in Elciego — the Marques de Riscal hotel designed by Frank Gehry is the Guggenheim of wine architecture",
            "13:00 — Lunch at the Marques de Riscal hotel restaurant (€60–90/pp) — a Michelin-starred restaurant inside a Frank Gehry titanium structure in a medieval Basque village; the set lunch menu offers the best value",
            "16:00 — Visit the Rioja wine museum in Briones (€7) — housed in a 17th-century palace; excellent collection of wine-making artefacts and a Rioja wine history spanning Roman settlement to today",
            "19:00 — Return to Bilbao for a final evening; private transfer to Bilbao Airport the next morning (€40) — Bilbao Airport is 12km from the city centre with regular Bizkaibus services (€1.50)",
          ],
          cost: "€400–550 (hotel, private driver, Michelin lunch, bodega tours)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget",
      accommodation: "€25–40 (hostel or pension in Old Town)",
      food: "€18–28 (pintxos bars, market stalls)",
      transport: "€5–10 (metro, Bizkaibus)",
      activities: "€16–25 (Guggenheim, La Ribera browse)",
      total: "€60–80/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "€90–140 (3-star Old Town or Guggenheim area hotel)",
      food: "€40–65 (creative pintxos bars, Michelin bistro)",
      transport: "€20–40 (car hire or day tour)",
      activities: "€30–50 (museums, bodega visit, funicular)",
      total: "€130–180/day",
    },
    {
      tier: "Luxury",
      accommodation: "€250–400 (Gran Domine or Gran Hotel Domine)",
      food: "€100–200 (Nerua or Mina Michelin tasting menu)",
      transport: "€60–180 (private car or chauffeur)",
      activities: "€80–200 (private tours, txakoli tasting, bodega)",
      total: "€320–500/day",
    },
    {
      tier: "Day Trip from San Sebastian",
      accommodation: "N/A (based in San Sebastian)",
      food: "€20–35 (pintxos lunch + coffee)",
      transport: "€10 return (bus or train each way)",
      activities: "€16–25 (Guggenheim exterior free; entry paid)",
      total: "€55–85/day",
    },
    {
      tier: "Long Weekend (4 nights)",
      accommodation: "€90–130 per night",
      food: "€45–70 per day (full pintxos + dinner)",
      transport: "€15–35 per day (car hire Day 2–3)",
      activities: "€30–60 per day (Guggenheim, Gaztelugatxe, Rioja)",
      total: "€180–290/day all-in",
    },
  ],
  mistakes: [
    {
      icon: "📅",
      title: "Not booking Gaztelugatxe in advance",
      desc: "Access to the Gaztelugatxe peninsula is managed by the Basque government and requires a free online reservation at reservas.bizkaia.eus. Without a reservation you will be turned away at the car park. Reservations open 3 days in advance and fill within hours in summer. Book the moment your travel dates are confirmed.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍷",
      title: "Drinking txakoli too cold",
      desc: "Txakoli (the local Basque white wine) is poured from height to aerate it and should be served slightly chilled but not ice cold. Many tourist restaurants over-chill it. Ask for it at cellar temperature. The slight effervescence and green apple acidity are best appreciated when the wine is around 10 degrees.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🕐",
      title: "Trying to eat pintxos before 7:30pm",
      desc: "Pintxos bars in Bilbao operate on Basque time — they open for the pintxos hour from 7:30pm to 10pm, then again at 1pm to 3:30pm for lunch. Arriving at 6pm will find most bars serving only drinks with a limited selection. The evening pintxos rush from 8pm to 9:30pm is the time to go when the trays are freshest.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🎨",
      title: "Only visiting the Guggenheim and missing the Bellas Artes",
      desc: "The Museo de Bellas Artes two blocks from the Guggenheim holds one of Spain's finest collections including El Greco, Goya, Murillo, and the Basque master Zuloaga. It is consistently empty while the Guggenheim is packed and far better value. A combined Guggenheim + Bellas Artes ticket costs €18.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚆",
      title: "Flying into Madrid or Barcelona instead of Bilbao",
      desc: "Bilbao Airport (BIO) has direct flights from London, Paris, Amsterdam, and most major European cities. Flying into Madrid or Barcelona and taking a 4-hour bus or train adds a full day to your trip and significant cost. Check Vueling, Iberia, Ryanair, and EasyJet directly to Bilbao before accepting a connecting route.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🍴",
      title: "Do a proper pintxos crawl — at least 4 bars",
      desc: "The pintxos bar culture means you have one or two items at each bar then move on. The best pintxos in Bilbao are spread across multiple streets — Plaza Nueva, Calle del Perro, Calle Jardines, and Calle Ledesma each have specialities. Budget €20–25 for a serious 4-bar crawl and book experiences at https://www.getyourguide.com/s/?q=Bilbao&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🚇",
      title: "Use the Bilbao metro and Bilbobus",
      desc: "Bilbao has a Norman Foster-designed metro system (called the Fosteritos for its glass canopy entrances). A single trip costs €1.50 and a Barik card (rechargeable, €3 for the card) reduces fares to €0.86 per trip. The metro connects the airport, Old Town, Guggenheim, and Abando train station efficiently.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌡️",
      title: "Visit April–June or September–October for ideal weather",
      desc: "Bilbao and the Basque coast get more rain than the rest of Spain due to Atlantic weather. July and August are the driest months but also the most crowded and most expensive. Late spring and early autumn offer 18–22 degrees, manageable crowds, and excellent Basque seasonal produce including autumn mushrooms and new-harvest txakoli.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍷",
      title: "Buy Rioja wine directly from bodegas in Haro",
      desc: "Rioja wine from the bodega shop in Haro costs 40–60% less than the same bottles in Bilbao restaurants or European wine shops. A guided tour at Lopez de Heredia, CVNE, or Muga includes tasting and direct purchase. You can carry up to 2 litres per person in EU hand luggage or 12 bottles in checked bags.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Bilbao Airport to the city centre?",
      a: "Bizkaibus A3247 runs from Bilbao Airport to Termibus bus station in the city every 20–30 minutes (€1.50, 30 minutes). From Termibus the metro takes 10 minutes to the city centre. Taxis cost €25–30 and take 15–20 minutes. The bus is far better value and drops you at the metro interchange. There is no train link directly to the airport.",
    },
    {
      q: "How many days do you need in Bilbao?",
      a: "Three days is the sweet spot — Day 1 for the Guggenheim and Old Town pintxos, Day 2 for Gaztelugatxe and the Basque coast, Day 3 for La Ribera market and a half-day to Rioja. If you have 4 days, add San Sebastian (1.5 hours by bus) for a perfect Basque city combination. Two days is enough for just the city highlights.",
    },
    {
      q: "Is Bilbao better than San Sebastian for food?",
      a: "They offer different experiences. San Sebastian has more Michelin stars per capita than almost anywhere on earth and is the top destination for formal gastronomy. Bilbao has arguably the better everyday pintxos culture — more standing bar energy, less tourist-facing. Most visitors base themselves in Bilbao (cheaper accommodation) and do a day trip to San Sebastian. The 1.5-hour bus costs €7 each way.",
    },
    {
      q: "When is the best time to visit the Guggenheim Museum Bilbao?",
      a: "Tuesday to Thursday mornings offer the smallest crowds. The museum is closed on Mondays year-round (except in summer when it opens daily). Book a timed entry slot online at guggenheim-bilbao.eus — tickets are €16 for adults and include audio guide. The titanium facade looks most spectacular in early morning or late afternoon light when the curved surfaces reflect the changing sky.",
    },
  ],
  combineWith: ["san-sebastian-3-days", "madrid-3-days", "barcelona-4-days"],
  relatedSlugs: ["san-sebastian-3-days", "madrid-3-days", "barcelona-4-days", "porto-3-days"],
  galleryQuery: "bilbao guggenheim pintxos basque country spain",
};

export const metadata: Metadata = {
  title: "Bilbao in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Bilbao itinerary — Guggenheim Museum, pintxos bar-hopping, Gaztelugatxe island hermitage hike, La Ribera market, Rioja wine, and Txakoli. Budget €60/day to luxury hotel stays. Visa info for all passports.",
  keywords: [
    "Bilbao itinerary",
    "Bilbao 3 days",
    "Bilbao travel guide 2026",
    "Guggenheim Museum Bilbao",
    "pintxos Bilbao",
    "Gaztelugatxe",
    "Rioja wine day trip",
    "Bilbao visa Indian passport",
  ],
  openGraph: {
    title: "Bilbao in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Guggenheim Museum, pintxos, Gaztelugatxe, and Rioja wine — Bilbao and the Basque Country in 3 days from €60/day to luxury stays.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/bilbao-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilbao in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Guggenheim titanium curves, pintxos bar crawls, Gaztelugatxe cliffs, and Rioja wine — the complete Bilbao travel guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bilbao-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bilbao in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Bilbao in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/bilbao-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bilbao",
      description:
        "Bilbao, Spain — Basque capital famous for the Guggenheim Museum by Frank Gehry, world-class pintxos culture, Gaztelugatxe island, and proximity to Rioja wine country.",
      geo: { "@type": "GeoCoordinates", latitude: 43.263, longitude: -2.935 },
    },
  ],
};

export default function BilbaoPage() {
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
