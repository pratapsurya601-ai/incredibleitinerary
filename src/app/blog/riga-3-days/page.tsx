import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Riga in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "The definitive 3-day Riga itinerary covering budget, mid-range and luxury plans, visa info for Indian and Western passports, costs, top mistakes and insider tips for 2026.",
    "image": "https://incredibleitinerary.com/og/riga-3-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-10",
    "dateModified": "2026-04-05",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/riga-3-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Riga 3 Days", "item": "https://incredibleitinerary.com/blog/riga-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Riga",
    "description": "Capital of Latvia and home to the largest collection of Art Nouveau architecture in the world — over 800 buildings — plus a UNESCO Old Town, a colossal Central Market inside five Zeppelin hangars, and the legendary Black Balsam herbal liqueur.",
    "touristType": ["Architecture", "Culture", "History", "Food", "Christmas Markets"],
    "geo": { "@type": "GeoCoordinates", "latitude": 56.9496, "longitude": 24.1052 },
    "containedInPlace": { "@type": "Country", "name": "Latvia" },
  },
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Riga in 3 Days: Complete 2026 Travel Guide (Budget to Luxury) | IncredibleItinerary",
  description: "Plan the perfect 3 days in Riga, Latvia. Detailed itineraries for every budget, visa info for Indian & Western passports, Art Nouveau district guide, costs, mistakes to avoid and insider tips for 2026.",
  keywords: ["Riga travel guide", "Riga 3 days", "Riga itinerary 2026", "Riga Art Nouveau", "Latvia travel", "Riga Old Town", "Riga Christmas market", "Black Balsam"],
  openGraph: {
    title: "Riga in 3 Days: The Complete 2026 Travel Guide",
    description: "The world's greatest Art Nouveau city, a market inside Zeppelin hangars and a herbal liqueur that tastes like medicine — your definitive 3-day Riga guide.",
    url: "https://incredibleitinerary.com/blog/riga-3-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/riga-3-days.jpg", width: 1200, height: 630, alt: "Riga Latvia Art Nouveau architecture and Old Town with Daugava River" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riga in 3 Days: Complete 2026 Travel Guide",
    description: "The world's greatest Art Nouveau city and a market inside Zeppelin hangars — your definitive 3-day Riga guide.",
    images: ["https://incredibleitinerary.com/og/riga-3-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/riga-3-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Riga",
  country: "Latvia",
  countryFlag: "🇱🇻",
  slug: "riga-3-days",
  heroQuery: "riga latvia art nouveau old town cathedral baltic",
  heroAlt: "Riga Latvia Art Nouveau architecture and Old Town with Daugava River",
  category: "Europe",
  date: "January 10, 2026",
  readTime: "13 min read",
  intro:
    "Riga holds a secret that most of Europe has overlooked: it contains the largest collection of Art Nouveau architecture in the world — more than 800 buildings, surpassing Vienna and Paris combined. Walk along Alberta Iela and the facades are so extraordinary they look like theatre sets, all flowing curves, mythological faces and ornate ironwork. Then there's the Central Market, operating inside five repurposed First World War Zeppelin hangars beside the Daugava River, where amber, smoked fish, grey peas and local cheese sit alongside 21st-century street food stalls. And at the end of every evening, there is Rīga Melnais balzāms — Black Balsam — a 45-herb liqueur that tastes somewhere between medicine and midnight and is poured into everything from cocktails to ice cream. Riga is Europe's most underappreciated capital, and it is glorious.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€40",
    bestMonths: "May–Sep or Dec (Christmas Market)",
    airport: "RIX (Riga International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "food", emoji: "🍽️", label: "Food & Drink" },
    { id: "daytrips", emoji: "🚌", label: "Day Trips" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required", "Schengen short-stay visa (Latvia)"],
        ["Fee", "€80 (adult)"],
        ["Validity", "Up to 90 days in 180-day period"],
        ["Processing", "15–30 business days"],
        ["Apply at", "Latvian (or Schengen) embassy / VFS Global"],
        ["Documents", "Hotel booking, return flights, bank statements, travel insurance"],
        ["ETIAS", "Not applicable — full visa required"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇦🇺",
      title: "Western Passports (US / UK / AU / EU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required", "No — visa-free for Schengen area"],
        ["Stay limit", "90 days in any 180-day period"],
        ["ETIAS", "Required from mid-2025 (~€7, online pre-travel)"],
        ["Passport validity", "Must be valid 3 months beyond departure date"],
        ["UK passports", "Visa-free but ETIAS required from 2025"],
        ["Currency", "Euro (€) — Latvia adopted EUR in 2014"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€40/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town & the Daugava Riverfront",
          items: [
            "Check into a central hostel or budget guesthouse (Dome Hotel Hostel or similar, €16–20/night)",
            "Start at Riga Cathedral (Dome Cathedral) — the largest medieval church in the Baltic states, interior organ concerts (€3 entry)",
            "Explore Old Town on foot: Blackheads House (exterior, restoration masterpiece), Town Hall Square, Swedish Gate (the only surviving city gate)",
            "Climb St Peter's Church tower for panoramic views of the city and the Daugava River (€9)",
            "Lunch at Lido — the famous Latvian cafeteria chain with hearty buffet food, grey peas with bacon (€5–8)",
            "Walk the Daugava riverfront promenade in the late afternoon",
            "Dinner at a local kafejnīca (cafe-restaurant) — borscht, rye bread and smoked fish platter (€8–12)",
          ],
          cost: "€33–42",
        },
        {
          day: "Day 2",
          title: "Art Nouveau District & Central Market",
          items: [
            "Morning: Alberta Iela (Art Nouveau street) — the most extraordinary collection of facades in Europe, free to walk",
            "Elizabetes Iela and Strēlnieku Iela for more Art Nouveau buildings — the \"Quiet Center\" district",
            "Art Nouveau Museum at Alberta 12 (Mikhail Eisenstein's masterwork building) — €8, guided tours available",
            "Lunch at Central Market — five Zeppelin hangars, the world's largest market: smoked fish, cheese, amber stalls, cheap hot food (€4–7)",
            "Afternoon: explore all five hangars — meat, dairy, vegetables, fish, and the outdoor bazaar",
            "Latvian National Museum of Art (free on Fridays, otherwise €5) — impressive collection of Baltic painting",
            "Evening: try Black Balsam in a traditional bar — order it straight or mixed with blackcurrant juice (€3–4)",
          ],
          cost: "€28–36",
        },
        {
          day: "Day 3",
          title: "Jūrmala Beach or Sigulda Day Trip",
          items: [
            "Option A — Jūrmala (25 min by train, €2 return): Latvia's Baltic Sea resort town, wooden Art Nouveau villas, pine-lined beach",
            "Option B — Sigulda (1 hr by train, €3 return): medieval Turaida Castle ruins, Gauja National Park, bobsled track (spectator free)",
            "Packed lunch from Central Market the night before (smoked fish, rye bread, cheese) — save €8",
            "Return to Riga by late afternoon",
            "Final souvenir shop: amber jewellery (buy from market, not tourist shops — 50% cheaper), linen scarves, Black Balsam miniatures",
            "Farewell dinner at a local restaurant — cepelinai-style potato dish and Latvian dark beer (€9–14)",
          ],
          cost: "€25–34",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€90/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Immersion & Latvian Cuisine",
          items: [
            "Check into a 3-star boutique hotel in the Old Town or Quiet Center (€50–70/night)",
            "Dome Cathedral guided tour with organ concert (€12–18) — acoustics are exceptional",
            "Guided Old Town walking tour (€15–20/person, 2 hours)",
            "Blackheads House interior visit — restored Hanseatic merchants' guild hall (€7)",
            "Lunch at Restaurant 3 Pavāru (Three Chefs) — inventive Latvian modern cuisine, seasonal menu (€20–28)",
            "Latvian National Museum of Art (€5) — spend 2 hours with the Baltic Symbolist and Expressionist collections",
            "Dinner at Valmiermuižas Alus Restorāns — farm-brewery restaurant, estate-brewed ales and Latvian comfort food (€22–30)",
          ],
          cost: "€80–100",
        },
        {
          day: "Day 2",
          title: "Art Nouveau & Central Market Deep Dive",
          items: [
            "Private Art Nouveau architecture tour (€45–60, 3 hours with expert guide)",
            "Alberta Iela, Elizabetes Iela, Strēlnieku Iela — detailed facade interpretation",
            "Art Nouveau Museum interior with audio guide (€8)",
            "Lunch at Rozengrāls — medieval cellar restaurant in Old Town, candlelit atmosphere, Latvian medieval recipes (€18–25)",
            "Central Market afternoon: guided food tour of all five Zeppelin hangars (€30–45)",
            "Latvian chocolate and craft spirits tasting at Laimas",
            "Dinner at Aqua Luna — upscale Latvian-European fusion on the Daugava waterfront (€35–45)",
          ],
          cost: "€85–110",
        },
        {
          day: "Day 3",
          title: "Rundale Palace or Sigulda Medieval Castles",
          items: [
            "Option A — Rundale Palace (80 km, half-day by car or guided tour, €35–50): Latvia's answer to Versailles, Baroque state rooms, rose garden",
            "Option B — Sigulda full day (guided tour, €50): Turaida Castle, Gutmanis Cave (ancient inscriptions), Gauja valley hike",
            "Lunch at a local restaurant near the chosen destination (€15–22)",
            "Return to Riga, evening leisure in the Art Nouveau Quiet Center district",
            "Cocktails with Black Balsam at Skyline Bar (26th floor, Reval Hotel Latvija) — panoramic views at sunset",
            "Final dinner at Vincents — Riga's most acclaimed restaurant, refined Latvian tasting menu (€50–70 per person)",
          ],
          cost: "€85–105",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€220/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Hotel Suite & Private Old Town",
          items: [
            "Check into Grand Hotel Kempinski or Hotel Bergs — 5-star, €130–200/night",
            "Private 3-hour Old Town and Art Nouveau tour with architectural historian (€150 for two)",
            "Champagne welcome at Dome Cathedral — private early-morning access possible with advance booking",
            "Michelin-calibre lunch at Vincents — chef's tasting menu with Latvian wine pairing (€80–100/person)",
            "Private curator tour of Latvian National Museum of Art (book via museum, €100)",
            "Spa and hammam treatment at the hotel wellness centre (€80–100)",
            "Dinner at Bibliotēka No.1 — intimate fine dining in a former bookshop, 6-course menu (€70–90/person)",
          ],
          cost: "€200–250",
        },
        {
          day: "Day 2",
          title: "Zeppelin Market, Amber Atelier & Coastal Drive",
          items: [
            "Private food tour of Central Market with a Latvian chef (€80/person) — sourcing ingredients, tasting everything",
            "Custom amber jewellery commission at a Riga atelier (€80–200)",
            "Chauffeured drive to Jūrmala for a private beach lunch at Restaurant Orizzonte (€60–80/person)",
            "Afternoon Baltic Sea swimming or private beach club access",
            "Return to Riga — Art Nouveau cocktail hour: private aperitivo at a Quiet Center design hotel",
            "Dinner at Romeo — French-Latvian contemporary fine dining, wine cellar experience (€90–120/person with pairing)",
          ],
          cost: "€210–260",
        },
        {
          day: "Day 3",
          title: "Rundale Palace Private Tour & Farewell",
          items: [
            "Private chauffeured car to Rundale Palace (€120 one way): full private palace tour before public opening",
            "Breakfast in the palace cafe — pastries, local honey, estate coffee",
            "Guided tour of the Duke's state apartments, ballroom and the extraordinary rose garden",
            "Champagne picnic in the palace grounds, prepared by the hotel kitchen",
            "Return to Riga via Bauska Castle ruins (medieval stronghold)",
            "Final Black Balsam tasting flight at premium bar — rare aged variants",
            "Farewell dinner at the hotel restaurant with the sommelier's Baltic wine selection (€80–100)",
          ],
          cost: "€210–250",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€16–20 (hostel/guesthouse)",
      food: "€10–14",
      transport: "€2–4",
      activities: "€7–12",
      total: "€35–50",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€50–70 (3-star boutique)",
      food: "€28–40",
      transport: "€8–15",
      activities: "€18–28",
      total: "€80–105",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€130–200 (5-star)",
      food: "€60–100",
      transport: "€30–60",
      activities: "€50–90",
      total: "€190–250",
    },
    {
      tier: "🚂 Jūrmala Day Trip",
      accommodation: "N/A",
      food: "€12–35",
      transport: "€2–4 (train)",
      activities: "€0–10",
      total: "€14–49",
    },
    {
      tier: "🏰 Rundale Day Trip",
      accommodation: "N/A",
      food: "€15–40",
      transport: "€30–50 (bus/car)",
      activities: "€8–18",
      total: "€53–108",
    },
  ],

  mistakes: [
    {
      icon: "🏛️",
      title: "Skipping the Art Nouveau district entirely",
      desc: "Most tourists spend all their time in Old Town and never walk 10 minutes to Alberta Iela. This is a catastrophic mistake — the Art Nouveau facades on Elizabetes and Alberta streets are among the most extraordinary streetscapes in Europe. Budget at least 2 hours for the Quiet Center.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🛍️",
      title: "Buying amber from tourist shop traps in Old Town",
      desc: "Old Town amber shops charge 3–5x the real price. The Central Market has the same quality amber at honest prices. Ask to see certification and never buy from aggressive street vendors. Genuine Baltic amber is warm, lightweight and should feel warm when you hold it.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚂",
      title: "Not making the Jūrmala or Sigulda day trip",
      desc: "Jūrmala (25 min by train, €2) is a beautiful Baltic resort of wooden Art Nouveau villas and pine forests — completely different from urban Riga. Sigulda (1 hr, €3) has medieval castles and national park hiking. Both are easy and cheap — skipping them wastes half of what makes Latvia special.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🍺",
      title: "Judging Black Balsam by its first sip",
      desc: "Rīga Black Balsam is 45% alcohol with 45 herbs and initially tastes medicinal. Most tourists try it once and stop. The trick: mix it with blackcurrant juice (the traditional way) or order it as a Balsam Sour cocktail. After two, you'll understand why Latvians consider it a national treasure.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🗓️",
      title: "Visiting the Central Market on a Monday morning",
      desc: "The Central Market is at its best on Saturday and Sunday mornings — freshest produce, most vendors, best atmosphere. Monday mornings can be quiet with fewer stalls open. If you only have one visit, make it a weekend morning when the Zeppelin hangars are alive with locals.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🚶",
      title: "Walk both banks of the Daugava River",
      desc: "Cross the Stone Bridge (Akmens Tilts) to the Pardaugava district for a completely different, untouristy view of Riga. The skyline of Old Town from the opposite bank at golden hour is one of the best free views in the Baltic states.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🎵",
      title: "Attend a Dome Cathedral organ concert",
      desc: "The Riga Dome Cathedral has one of Europe's finest pipe organs — the 1884 Walcker organ with 6,768 pipes. Concerts happen regularly and tickets cost just €10–18. The acoustics in the medieval interior are extraordinary. Check the schedule at organsconcerts.lv.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌮",
      title: "Eat grey peas with bacon — the national dish",
      desc: "Pelēkie zirņi ar speķi (grey peas with bacon) is the Latvian national dish served at Christmas and throughout the year at traditional restaurants. It tastes nothing like it sounds — rich, smoky, nutty and deeply satisfying. Lido cafeteria chain serves it authentically for €3–5.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "📸",
      title: "Shoot the Art Nouveau facades in morning light",
      desc: "Alberta Iela and Elizabetes Iela face roughly east and are best photographed in morning light (8–10am) when the sun illuminates the facade details. By midday the light is harsh. The street is also emptier in the morning — you get clean shots without crowds.",
      color: "border-green-200 bg-green-50",
    },
  ],

  faqs: [
    {
      q: "Is Riga worth visiting for 3 days?",
      a: "Absolutely. Three days in Riga allows you to cover Old Town thoroughly, explore the Art Nouveau district (2–3 hours minimum), visit the Central Market, and make one day trip to Jūrmala or Sigulda. The city is compact, walkable and remarkably good value. Most visitors leave wishing they had stayed longer — it's frequently cited as one of Europe's most underrated capitals.",
    },
    {
      q: "How do I get from Tallinn to Riga?",
      a: "The most popular route is by Lux Express or Ecolines bus (4–4.5 hours, €10–20 booked in advance). Buses are comfortable, punctual and run multiple times daily. There's no direct train. Driving takes about the same time via the Via Baltica (E67). Flying is an option but rarely worth it for such a short distance — the airport transfers alone consume the time saved.",
    },
    {
      q: "Is Riga expensive compared to Western Europe?",
      a: "No — Riga is significantly cheaper than Western European capitals. Budget travellers can live well on €40/day (hostel, market lunches, cheap restaurants). Mid-range travellers spending €80–100/day eat in good restaurants every meal and stay in boutique hotels. Even luxury travel is 30–40% cheaper than equivalent experiences in Paris, Amsterdam or Copenhagen.",
    },
    {
      q: "What is the best neighbourhood to stay in Riga?",
      a: "Old Town (Vecriga) for atmosphere and walking distance to everything — great for first-timers. The Quiet Center (Kluss Centrs) for the Art Nouveau district and a more local feel — slightly better value. Avoid staying near the Central Station area for a first visit. Old Town is most convenient but books up faster, so reserve early, especially for December.",
    },
  ],

  combineWith: [
    "Combine with Tallinn (4.5 hrs by bus north) for the classic Baltic double",
    "Add Vilnius (4–5 hrs by bus south) to complete all three Baltic capitals",
    "Jūrmala day trip (25 min by train) — Baltic Sea resort and Art Nouveau villas",
    "Rundale Palace (80 km south) — Latvia's Versailles, half-day or full day",
    "Sigulda and Gauja National Park (1 hr by train) — medieval castles and forested valleys",
  ],

  relatedSlugs: [
    "tallinn-3-days",
    "vilnius-3-days",
    "warsaw-3-days",
    "krakow-3-days",
    "helsinki-3-days",
  ],

  galleryQuery: "riga latvia art nouveau architecture old town",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function RigaPage() {
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
