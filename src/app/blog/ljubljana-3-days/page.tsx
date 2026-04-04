import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Ljubljana in 3 Days: The Complete Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "The definitive 3-day Ljubljana guide — Ljubljana Castle, Triple Bridge, Dragon Bridge, Old Town cafes, Lake Bled, Postojna Cave, and the most underrated food scene in Europe. Budget €50/day to luxury €260/day.",
  keywords: [
    "Ljubljana 3 days itinerary",
    "Ljubljana travel guide 2026",
    "Lake Bled day trip",
    "Ljubljana Castle",
    "Postojna Cave",
    "Dragon Bridge Ljubljana",
    "Slovenia travel",
    "Ljubljana budget travel",
  ],
  openGraph: {
    title: "Ljubljana in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    description:
      "Dragon bridges, a castle on a hill, Lake Bled's island church, and the most sustainable city in Europe — the definitive 3-day Ljubljana guide.",
    url: "https://incredibleitinerary.com/blog/ljubljana-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555993539-0a3b0b57f4e1?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ljubljana Slovenia Old Town with castle on hill and Triple Bridge over Ljubljanica River",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ljubljana in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    description:
      "Dragon bridges, castle on a hill, Lake Bled, and the most sustainable capital in Europe.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/ljubljana-3-days",
  },
};

/* ── JSON-LD ───────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/ljubljana-3-days#article",
      headline: "Ljubljana in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "Ljubljana — Europe's most sustainable capital, with a pedestrianized old town, dragons on every bridge, a castle on a hill, and Lake Bled 55 minutes away. The complete 3-day guide.",
      image: "https://images.unsplash.com/photo-1555993539-0a3b0b57f4e1?w=1200&q=80",
      datePublished: "2026-02-01",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/ljubljana-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Ljubljana 3 Days", item: "https://incredibleitinerary.com/blog/ljubljana-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Ljubljana",
      description:
        "Ljubljana is Slovenia's compact, walkable, and extraordinarily liveable capital — with a baroque old town, a hilltop castle, the Plečnik-designed riverside market, and Lake Bled just 55 minutes away.",
      geo: { "@type": "GeoCoordinates", latitude: 46.0569465, longitude: 14.5057515 },
      touristType: ["Sustainable travelers", "City break tourists", "Outdoor enthusiasts", "Food lovers"],
      hasMap: "https://maps.google.com/?q=Ljubljana,Slovenia",
    },
  ],
};

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Ljubljana",
  country: "Slovenia",
  countryFlag: "🇸🇮",
  slug: "ljubljana-3-days",
  heroQuery: "ljubljana slovenia castle river dragon bridge old town",
  heroAlt: "Ljubljana Slovenia Old Town with castle on hill and Triple Bridge over Ljubljanica River",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",

  intro:
    "Europe's most sustainable capital city with pedestrianized old town streets where dragon statues stand guard on every bridge, a castle on a hill above a baroque old town compact enough to walk end-to-end in 20 minutes, the most underrated food scene in the Balkans mixing Austrian, Italian, and Balkan influences, and Bled Lake 55 minutes away with a church on an island so postcard-perfect it seems fake — Ljubljana is Europe's most liveable small capital, and most travellers have never heard of it.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€50",
    bestMonths: "Apr–Oct",
    airport: "LJU (Brnik, Jože Pučnik)",
  },

  toc: [
    { id: "visa",        emoji: "📋", label: "Visa & Entry" },
    { id: "plans",       emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "highlights",  emoji: "🏰", label: "Top Highlights" },
    { id: "daytrips",    emoji: "🏔️", label: "Day Trips" },
    { id: "food",        emoji: "🍽️", label: "Food & Drink" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa",        "Schengen visa required (apply via Slovenian embassy or Italian/Austrian consulate)"],
        ["Fee",         "€80 visa application fee"],
        ["Validity",    "Up to 90 days within any 180-day period"],
        ["Processing",  "15–30 business days — apply well in advance"],
        ["Documents",   "Bank statements, hotel bookings, travel insurance, return flights"],
        ["Tip",         "Slovenia is part of Schengen — the same visa covers Croatia, Austria, and Italy in the same trip"],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders (US/UK/EU/AUS)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa",        "Visa-free for Schengen zone (90 days in any 180-day period)"],
        ["ETIAS",       "ETIAS travel authorisation required from mid-2025 — €7, apply online, valid 3 years"],
        ["Passport",    "Must be valid 3 months beyond planned Schengen departure date"],
        ["Entry check", "Can enter via land borders from Austria, Italy, Croatia, or Hungary"],
        ["UK holders",  "Visa-free but ETIAS required; 90-day Schengen limit applies"],
        ["Tip",         "Ljubljana is a natural hub — combine with Zagreb, Vienna, Venice, and Salzburg in one Schengen trip"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "€50/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town, Castle & the Ljubljanica",
          items: [
            "Morning: Arrive in Ljubljana — the entire old town is pedestrianized and car-free; the absence of traffic noise is immediately striking",
            "Prešeren Square (Prešernov trg) — the city's central square; the pink Franciscan Church dominates, the Triple Bridge fans across the Ljubljanica River",
            "Walk across the Triple Bridge (Tromostovje) — designed by Jože Plečnik, Ljubljana's visionary architect who redesigned the city in the early 20th century",
            "Ljubljana Castle: walk up the hill (free, 20 minutes) or take the funicular (€4 return) — the grounds are free; the tower observation deck costs €10 but the views over the red-roofed old town are excellent",
            "Lunch: Stari Pisker courtyard food scene or a burek (meat pastry, €2–3) from the Central Market — classic Balkan street food",
            "Afternoon: Explore the Old Town cafes along the Ljubljanica River — the terrace bars stretch the length of the riverside; a coffee and people-watching session is the local lifestyle",
            "Dragon Bridge (Zmajski most) — the 1901 cast-iron bridge guarded by four copper dragons; the city's most photographed symbol",
            "Evening: Metelkova City — Ljubljana's autonomous cultural centre in a former army barracks; street art, bars, and live music from 9 pm",
          ],
          cost: "€25–35",
        },
        {
          day: "Day 2",
          title: "Lake Bled Full Day",
          items: [
            "Morning: Bus from Ljubljana bus station to Bled (1.5 hrs, €7 each way) — or train to Lesce-Bled station then bus (cheaper but slower)",
            "Lake Bled arrival: the scene from the eastern shore (Bled Promenada) with the island church and Bled Castle on the cliff above is genuinely one of Europe's most beautiful views",
            "Row to the island: hire a rowing boat (€20 for 2 hours, €15 for the island church entry if you want to ring the wishing bell) — or take a traditional pletna gondola (€18 per person)",
            "Bled Castle (Blejski Grad, €15): perched on a 130-metre cliff above the lake; medieval rooms, wine cellar, and the best panoramic view of the lake",
            "Lunch: Kremšnita (Bled cream cake) at Park Hotel or Slatina Café — the most famous pastry in Slovenia, €4",
            "Afternoon: Walk the circular lake path (6 km, 1.5 hrs) — passes the casino, several swimming spots, and the inlet at Ojstrica for the Instagram angle",
            "If time allows: 5 km drive to Vintgar Gorge — 45-minute walk on wooden boardwalks above turquoise water through a dramatic gorge (€8–10 entry)",
            "Return bus to Ljubljana by 7–8 pm",
          ],
          cost: "€35–45",
        },
        {
          day: "Day 3",
          title: "Postojna Cave + Predjama Castle",
          items: [
            "Morning: Bus from Ljubljana to Postojna (1 hr, €8 each way) — buses run regularly",
            "Postojna Cave: one of the world's largest cave systems (27 km of passages); the tour takes 1.5 hours including a miniature train ride through the cave (€27 entry)",
            "See the olm (Proteus anguinus) — Slovenia's famous blind cave salamander nicknamed 'the human fish'; lives only in this cave system",
            "Lunch: Simple café near Postojna Cave entrance — budget €8–12",
            "Predjama Castle (9 km from Postojna, €15 entry + taxi ~€12): a 12th-century castle built literally inside a cliff cave — one of the most dramatic castle settings in Europe; the robber baron Erasmus of Lueg held off a siege here for a year using a secret tunnel",
            "Return to Ljubljana by 5–6 pm",
            "Final evening: Open Kitchen (Odprta kuhna) on Friday evenings — Ljubljana's beloved street food market on Pogačarjev trg, 50+ food stalls mixing Slovenian, Asian, and international cuisine; a plate and a glass of wine for €10–15",
            "Or if not a Friday: dinner along the Ljubljanica River, beef or venison goulash and a glass of Slovenian Rebula white wine",
          ],
          cost: "€30–45",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€110/day",
      days: [
        {
          day: "Day 1",
          title: "Ljubljana Old Town Deep Dive",
          items: [
            "Check into a boutique hotel in the Old Town or Krakovo neighbourhood — Krakovo is the oldest surviving neighbourhood, a 5-minute walk from the river",
            "Guided walking tour of Ljubljana (€15–20, 2 hours) — covers Plečnik's architecture, the Triple Bridge, the Roman ruins under the city, and the Dragon Bridge legend",
            "Ljubljana Central Market (Plečnik-designed): the colonnaded riverside market with fresh produce, honey, cheese, and Slovenian specialties — browse and sample",
            "Lunch: Gostilna Šestica (one of the oldest restaurants in Ljubljana, since 1776) — traditional Slovenian dishes including žlikrofi (potato dumplings), €20–25",
            "Afternoon: Ljubljana Castle via cable car — pay for the Tower (€10) and the Virtual Castle (€8) for the full experience; 2 hours",
            "Late afternoon: Tivoli Park — Ljubljana's central park designed by Plečnik; ideal for a peaceful afternoon walk through chestnut tree avenues",
            "Evening: Aperitif along the river terraces then dinner at JB Restaurant (one of Ljubljana's top fine-dining venues) — Slovenian ingredients, modern technique, €40–55",
          ],
          cost: "€70–90",
        },
        {
          day: "Day 2",
          title: "Lake Bled + Vintgar Gorge",
          items: [
            "Private car or rental car to Bled (55 min) — allows flexibility to combine Bled and Vintgar on the same day",
            "Arrive at Bled by 9 am — walk the Promenada eastern shore for the classic view before the tour groups",
            "Pletna gondola to the island church (€18 pp, round trip) — the handmade wooden boats have been operated by the same families for generations; ring the wishing bell 3 times",
            "Bled Castle (€15): the cliff-top castle with museum, wine tasting, and views",
            "Kremšnita cream cake at Park Hotel — mandatory",
            "Vintgar Gorge (10 min drive, €10 entry): the most dramatic short walk in Slovenia — boardwalks over the Radovna river cutting through a narrow limestone gorge",
            "Return to Ljubljana — stop at Radovljica for the Baroque old town and the Beekeeping Museum (€5, Slovenia is famous for its beekeeping heritage)",
            "Dinner in Ljubljana: Gostilna Pri Škofu in Krakovo (local institution, excellent idrijski žlikrofi and venison stew) — €30–40",
          ],
          cost: "€80–100",
        },
        {
          day: "Day 3",
          title: "Postojna, Predjama & Lipica",
          items: [
            "Rental car morning departure (or organised day tour, €60–80 from Ljubljana): Postojna Cave (1 hr) then Predjama Castle (9 km, 15 min)",
            "Postojna Cave guided tour (€27) with the underground train — the stalactite formations in the Concert Hall are genuinely awe-inspiring",
            "Predjama Castle private or guided visit (€15) — ask about the secret tunnel system that supplied the castle during the famous siege",
            "Lunch near Predjama: traditional country inn, Karst cuisine — prosciutto, Teran wine, aged Karst cheese (€20–25)",
            "Optional afternoon: Lipica Stud Farm (20 min from Predjama) — the original home of the Lipizzaner horses that perform in Vienna's Spanish Riding School; horse shows and stable tours (€15–20)",
            "Return to Ljubljana by 5 pm",
            "Final evening: Open Kitchen or Ljubljana riverside bar — choose a Slovenian craft beer (Vizir or Reservoir Dogs Brewery) and watch the swans on the Ljubljanica",
          ],
          cost: "€70–90",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€260/day",
      days: [
        {
          day: "Day 1",
          title: "Private Ljubljana + Michelin Dining",
          items: [
            "Stay: Vander Urbani Resort (5-star, riverside, Old Town) or Cubo Hotel — both are design hotels in the heart of old Ljubljana",
            "Private architectural guide — Ljubljana's entire city centre is a UNESCO-nominated open-air museum of Plečnik's modernist-classical design; a private guide brings it to life (€150–200 for 3 hours)",
            "Triple Bridge, Dragon Bridge, the market colonnades, the National and University Library (ring the leather doorknobs), Žale Cemetery (Plečnik's masterpiece)",
            "Lunch: Strelec Restaurant inside Ljubljana Castle — Slovenian fine dining with castle courtyard views; tasting menu €60–80",
            "Afternoon: Private cooking class with a local chef — make idrijski žlikrofi (Slovenian dumplings with DOC status), potica (walnut roll), and cook with local Karst truffles (€120–160 per person)",
            "Evening: Cocktails on the riverside terrace, then dinner at Atelje (top-rated Ljubljana restaurant) — modern Slovenian tasting menu €85–110 with wine pairing from Slovenian orange wine producers",
          ],
          cost: "€200–350",
        },
        {
          day: "Day 2",
          title: "Private Lake Bled + Triglav Experience",
          items: [
            "Private car to Bled (55 min) — arrive before the day-trip crowds for the most magical lake atmosphere",
            "Private boat hire on Lake Bled — your own wooden rowboat for 2 hours (€40); row to the island at sunrise when the light is pink over the Karavanke mountains",
            "Island church of the Assumption: the bell inside is the wishing bell — the tradition says anyone who rings it three times will have their wish granted",
            "Bled Castle private wine tasting (€30 per person) — the castle has its own wine cellar with Slovenian varieties; extraordinary cliff-top setting",
            "Lunch: Hotel Triglav Bled — one of the finest restaurants on the lake, Slovenian tasting menu with lake and mountain views, €60–80",
            "Afternoon: Bohinj Valley (20 min from Bled) — quieter and even more beautiful; kayaking or SUP on Lake Bohinj (€25–35/hour), the Savica waterfall hike",
            "Return to Ljubljana — dinner at JB Restaurant or Valvas'Or — both in the top tier of Ljubljana dining, €70–100 with wine",
          ],
          cost: "€250–400",
        },
        {
          day: "Day 3",
          title: "Postojna Private Tour + Karst Wine Region",
          items: [
            "Private driver to Postojna (1 hr, €60 one way)",
            "Private Postojna Cave tour — off-the-public-path access to sections normally closed; specialist guide explaining karst geology, the cave ecosystem, and the 200 years of exploration history",
            "Predjama Castle with private historian guide (€200–250 for combined private cave + castle) — the siege story and the secret tunnel system come alive with proper context",
            "Lunch: Čuknja Restaurant near Lipica — Karst cuisine at its finest: air-dried prosciutto, Teran wine (a tart red unique to the Karst plateau), truffles, aged cheese",
            "Afternoon: Karst wine region tasting tour — visit 2 small family producers for Teran and Vitovska tastings with the winemakers; €60–80 including bottles to take home",
            "Lipica Stud Farm farewell visit — see the Lipizzaner horses in their home paddocks",
            "Return to Ljubljana — farewell dinner at Atelje or Grill Šestica with a bottle of Slovenian orange wine",
          ],
          cost: "€250–400",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18–28 (hostel or budget guesthouse)",
      food: "€12–18 (Central Market, burek, riverside cafes)",
      transport: "€8–12 (bus to Bled or Postojna)",
      activities: "€10–18 (Castle walk, cave entry, lake)",
      total: "€50/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€60–90 (boutique hotel, Old Town)",
      food: "€30–45 (sit-down gostilnas, wine, coffee)",
      transport: "€15–25 (rental car or private transfer)",
      activities: "€20–35 (guided tours, Bled, cave)",
      total: "€110/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€150–250 (5-star design hotel)",
      food: "€80–120 (Michelin-level restaurants, wine pairings)",
      transport: "€60–100 (private car, boat hire on Bled)",
      activities: "€60–120 (private guides, cooking classes)",
      total: "€260/day",
    },
    {
      tier: "🎓 Student",
      accommodation: "€15–22 (hostel)",
      food: "€8–14 (burek, Open Kitchen, supermarket)",
      transport: "€6–10 (bus passes)",
      activities: "€5–12 (free castle grounds, lake walks)",
      total: "€40/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€80–130 (apartment or family hotel)",
      food: "€45–65 (mix of self-catering + restaurants)",
      transport: "€20–35 (rental car covers everything)",
      activities: "€35–55 (Bled, Postojna, castle)",
      total: "€110/day",
    },
  ],

  mistakes: [
    {
      icon: "🕐",
      title: "Not going to Lake Bled early morning",
      desc: "Lake Bled receives 2 million tourists per year — the vast majority arrive between 10 am and 3 pm. The lake at 7–8 am, before the tour buses, is serene and genuinely magical. Stay in Bled overnight or take the first morning bus from Ljubljana (departs 6:30 am) to get the lake to yourself.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "📅",
      title: "Missing the Open Kitchen if visiting on a non-Friday",
      desc: "Ljubljana's Open Kitchen street food market (Odprta kuhna) runs Friday afternoons and evenings from March to October only. It's one of the city's most fun experiences — 50+ food stalls along the riverside. Check the dates before you book; if you're not there on a Friday, the Central Market is a good substitute.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🏰",
      title: "Skipping Predjama Castle because it's 'near' Postojna",
      desc: "Most visitors do Postojna Cave and skip Predjama Castle 9 km away. This is a significant mistake. Predjama is one of the most dramatic castle settings in Europe — a Renaissance fortress embedded inside a cliff cave. Combine them on the same day (2 km taxi or organised tour), it adds only 2 hours and €15.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "💶",
      title: "Treating Ljubljana as a 'cheap Eastern European' destination",
      desc: "Slovenia uses the euro and prices are comparable to southern Germany or Austria — not to the Western Balkans. A mid-range restaurant meal costs €15–25, a coffee €2.50–3.50. It is cheaper than Zurich or Paris but significantly more expensive than nearby Zagreb or Budapest. Budget accordingly.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🚗",
      title: "Trying to drive into the pedestrian Old Town",
      desc: "The entire Ljubljana Old Town is closed to private vehicles. If you arrive by car or rent a car, you must park at the edge of the pedestrian zone (Kongresni trg car park or Podzemna garaža NUK). The city is so compact and walkable that a car is a liability inside Ljubljana — use it only for day trips to Bled, Postojna, or the Karst.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "🐉",
      title: "The dragon is everywhere — learn why",
      desc: "According to legend, Jason and the Argonauts camped on the site of Ljubljana after stealing the Golden Fleece, and Jason killed a dragon in the swamp that is now the city. Dragons appear on the city's coat of arms, on the Dragon Bridge (1901), and on dozens of buildings. Locals are fiercely proud of their dragon — don't call it a 'lizard' or a 'crocodile'.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🏔️",
      title: "A rental car unlocks Slovenia completely",
      desc: "Ljubljana makes an excellent base for exploring the entire country. Renting a car for 2 days (€30–50/day) gives you access to Lake Bled, Vintgar Gorge, Bohinj, Postojna, Predjama, the Karst wine region, and the Soča Valley — all within 1–2 hours. Slovenia's roads are excellent and GPS navigation works perfectly.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🍷",
      title: "Try Slovenian orange wine and Teran",
      desc: "Slovenia is one of the world's original orange wine regions — white wines fermented with skin contact, producing amber-coloured, complex, slightly tannic wines. The Brda region and Karst produce extraordinary bottles at affordable prices (€15–25 in a restaurant). Teran is a local red from the Karst plateau, tart and mineral — pair it with prosciutto and Karst cheese.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🚲",
      title: "Rent a bike for the Tivoli and beyond",
      desc: "Ljubljana has an excellent bike-sharing system (Bicike(LJ), €1/day subscription then first hour free) and the city is almost entirely flat. You can cycle from the old town to Tivoli Park, along the Ljubljanica river, through Krakovo, and out to the Botanical Garden in 30 minutes. Biking is how locals actually get around.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "How many days do you need in Ljubljana?",
      a: "2 days is enough to see all of Ljubljana's old town, castle, and key sights. 3 days is ideal — it gives you one full day for a Lake Bled day trip and another for Postojna Cave and Predjama Castle. If you have 4–5 days, add the Soča Valley or the Bohinj area for some of Europe's most spectacular alpine scenery.",
    },
    {
      q: "Is Ljubljana worth visiting?",
      a: "Emphatically yes. Ljubljana is one of Europe's most underrated capitals — compact, pedestrianized, safe, affordable by Western European standards, with an excellent food scene, brilliant day trips, and a genuine local culture. It consistently ranks as one of Europe's most sustainable and liveable cities. Most visitors spend 2 days and wish they'd booked 4.",
    },
    {
      q: "Is Lake Bled worth visiting from Ljubljana?",
      a: "Absolutely. Lake Bled is 55 minutes from Ljubljana by car or 1.5 hours by bus. The combination of the emerald lake, the island church, the clifftop castle, and the Karavanke mountains behind makes it one of the most visually stunning places in Europe. Visit early morning to avoid crowds, combine with Vintgar Gorge if you have a car, and eat the Bled cream cake (kremšnita) while you're there.",
    },
    {
      q: "What is Ljubljana known for?",
      a: "Ljubljana is known for: its pedestrianized baroque old town; the Dragon Bridge and the dragon as city symbol; the architecture of Jože Plečnik who redesigned the city; the Ljubljanica River café culture; being the world's first capital to declare itself 'green capital' (European Green Capital 2016); proximity to Lake Bled; and a food scene that mixes Austro-Hungarian, Italian, and Balkan influences.",
    },
  ],

  combineWith: ["lake-bled-2-days", "zagreb-2-days", "vienna-3-days", "venice-3-days"],
  relatedSlugs: ["lake-bled-2-days", "zagreb-2-days", "vienna-3-days", "krakow-3-days"],

  galleryQuery: "ljubljana castle old town dragon bridge lake bled slovenia",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function LjubljanPage() {
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
