import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Zagreb",
  country: "Croatia",
  countryFlag: "🇭🇷",
  slug: "zagreb-3-days",
  heroQuery: "zagreb upper town st mark church croatia",
  heroAlt: "Zagreb Upper Town with St Mark's Church colourful tiled roof and medieval tower at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Zagreb is Croatia's most underestimated city — a Central European capital with a compact medieval upper town, an absurdly good museum scene anchored by the globally famous Museum of Broken Relationships, a daily farmers market (Dolac) that has operated since 1930, vibrant Tkalciceva Street cafe culture, and a rakija bar scene that keeps going until 3am. Three days gives you the city in full, plus a morning at Zagreb Cathedral, a funicular ride between the upper and lower towns, and — on day three — one of Europe's most breathtaking day trips: Plitvice Lakes National Park.",
  stats: { duration: "3 Days", budgetFrom: "€45", bestMonths: "Apr–Jun or Sep–Oct", airport: "ZAG" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Upper Town, Dolac & Broken Relationships" },
    { id: "day2", emoji: "📅", label: "Day 2 — Cathedral, Funicular & Tkalciceva" },
    { id: "day3", emoji: "📅", label: "Day 3 — Plitvice Lakes Day Trip" },
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
        ["Apply at", "Croatian Embassy or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Croatia joined the Schengen area in January 2023 — a single Schengen visa covers the entire trip. Apply 6–8 weeks early."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area since Jan 2023)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "Croatia uses the Euro since January 2023. No currency exchange needed from other Eurozone countries."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€45–65/day",
      days: [
        {
          day: "Day 1",
          title: "Upper Town, Dolac Market & Museum of Broken Relationships",
          items: [
            "09:00 — Dolac market (open 7am–2pm daily) — Zagreb's central farmers market on the raised square above the lower town; vendors sell seasonal vegetables, homemade cheeses, honey, and local fruits; browse and buy a breakfast of burek (flaky pastry with cheese, €1.50) from a stall at the market edge",
            "10:30 — Museum of Broken Relationships (€7, Cirilometodska 2) — the world's most emotionally resonant quirky museum; each donated object comes with a story of a relationship that ended; Croatian-born concept now has permanent exhibitions on four continents; allow 90 minutes minimum",
            "12:30 — Walk Upper Town (Gornji Grad) — St Mark's Church with its spectacular Croatian coat-of-arms tiled roof (free, exterior); Lotrscak Tower (€2 to climb, cannon fired daily at noon) and the Stone Gate with its miraculous Madonna painting",
            "14:00 — Lunch at a konoba (traditional Croatian tavern) in the Upper Town: grilled trout with blitva (Swiss chard with potatoes) costs €10–13; or a cheaper cevapcici with ajvar (grilled minced meat with pepper sauce) from a fast-food spot for €5–7",
            "16:00 — Walk Ilica Street (Zagreb's main shopping boulevard) to the Britanski Trg antiques flea market — outdoor book and antique sellers most days; always busy on Sundays",
            "20:00 — Rakija bar crawl: Zagreb's rakija bars serve small shots of Croatian fruit brandies (walnut, plum, cherry, honey-herb) for €1.50–2.50 each; start at Rakijarna Klet on Tkalciceva and work your way up the street",
          ],
          cost: "€35–48 (hostel, museum, meals, rakija tasting)",
        },
        {
          day: "Day 2",
          title: "Zagreb Cathedral, Funicular & Tkalciceva Street",
          items: [
            "09:00 — Zagreb Cathedral (Katedrala Marijina Uznesenja) — free entry; the twin-spired neo-Gothic cathedral dominates the lower town skyline; the silver altar and Romanesque sacristy are open to the public; the cathedral is undergoing partial restoration but remains open",
            "10:30 — Zagreb Funicular (Uspinjaca) — the shortest funicular in the world at 66 metres, running since 1890; a single ride costs €0.66 and takes 55 seconds; ride up to the Upper Town for the Lotrscak Tower view and walk back down on foot through the staircase lanes",
            "12:00 — Strossmayer Promenade (Strossmayerovo Setaliste) — the tree-lined cliff-edge walkway above the lower town offers panoramic views across Zagreb's terracotta rooftops and the plains beyond; free, uncrowded, and completely lovely",
            "13:00 — Lunch at a Lower Town restaurant near Tkalciceva: grilled pork neck (vrat) with house salad costs €9–12; or fresh pasta with truffle cream sauce (Istrian influence) for €10–14",
            "15:00 — Technical Museum Nikola Tesla (€5) — extensive collection covering energy, astronomy, and engineering, with live demonstrations; Zagreb's best museum for children and adults with a science interest",
            "19:00 — Evening on Tkalciceva Street — the pedestrianised cafe and bar street in the heart of Zagreb; outdoor tables from April onwards; a glass of Croatian wine costs €3–5, Croatian craft beer €3–4; the street is busy until midnight, lively until 2am on weekends",
          ],
          cost: "€38–52 (funicular, museum, meals, drinks)",
        },
        {
          day: "Day 3",
          title: "Plitvice Lakes National Park Day Trip",
          items: [
            "06:30 — Bus from Zagreb Main Bus Station (Autobusni Kolodvor) to Plitvice Lakes (€15 return, 2 hours each way) — buy return ticket the night before at the station or online; buses depart at 07:00, 07:30, and 08:00 from Zagreb",
            "09:00 — Plitvice Lakes National Park (€30–40 entry depending on season; highest rate April–October) — 16 terraced lakes connected by hundreds of waterfalls in a UNESCO World Heritage landscape; Board Programme C covers the most spectacular sections including the largest waterfall (Veliki Slap, 78m) in 4–5 hours",
            "11:00 — Electric boat across the main lake (included in ticket) to reach the upper lakes section — the turquoise water colour comes from mineral deposits and changes shade depending on light and season; spring snowmelt makes April and May the most dramatic months",
            "14:00 — Picnic lunch on the lakeside wooden boardwalks (bring food from Zagreb) or eat at the park restaurant at Entrance 1 (€12–16 for a main course); avoid the peak lunch rush by eating at 1:30pm",
            "16:30 — Return bus to Zagreb arriving 18:30; farewell dinner at a Tkalciceva konoba: roast lamb shoulder with roasted potatoes (€14–18/pp) washed down with a glass of Dingac red wine from the Dalmatian coast",
          ],
          cost: "€60–75 (Plitvice entry + bus + meals — higher due to park entry)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€100–145/day",
      days: [
        {
          day: "Day 1",
          title: "Markets, Museums & Croatian Wine Evening",
          items: [
            "09:00 — Check in to a boutique hotel in the Lower Town near Tkalciceva (€70–100/night); the best mid-range hotels in Zagreb are 3-star boutique properties with characterful interiors in the 19th-century tenement buildings",
            "10:00 — Dolac Market coffee and burek breakfast at the market edge (€4); then browse the upper flower level and lower covered hall for local cheeses and honey to take home",
            "11:00 — Museum of Broken Relationships (€7) with proper time to read every object label; then walk Upper Town with the audio guide available at the museum (€3)",
            "13:30 — Lunch at Vinodol restaurant near Ilica — one of Zagreb's most respected traditional restaurants serving spit-roast lamb and veal under a peka (bell-shaped iron lid); main course €16–22, order the lamb 30 minutes ahead",
            "16:00 — Croatian History Museum (€4, Upper Town) and the Croatian Museum of Naive Art (€5) — the naive art collection is world-class, featuring extraordinary self-taught Croatian peasant painters from the Hlebine school",
            "20:00 — Croatian wine dinner and tasting at Restaurant Agava (€35–50/pp) — the wine list covers all Croatian regions; a 3-glass Croatian wine flight paired with truffle pasta, lamb, and Pag island cheese is the signature experience",
          ],
          cost: "€140–175 (hotel, museums, wine dinner)",
        },
        {
          day: "Day 2",
          title: "Cathedral, Mirogoj & Culinary Walking Tour",
          items: [
            "09:00 — Zagreb Cathedral morning visit — arrive before 9:30am when school groups begin arriving; the neo-Gothic interior and 13th-century treasury are worth the first light of morning",
            "10:30 — Mirogoj Cemetery by Tram 106 (€1.33) — one of Europe's most beautiful cemeteries; designed by Herman Bolle in 1876 with an arcaded entrance and parkland graves of Croatia's most celebrated cultural figures; free to enter",
            "12:30 — Zagreb Culinary Walking Tour (€45, 3 hours, bookable via local operators) — visits 5 food stops covering burek, strukli (Croatian cheese pastry), sir i vrhnje (cottage cheese), Skradin risotto, and local wine; the best single introduction to Croatian cuisine",
            "16:30 — Zagreb Funicular (€0.66) up to the Upper Town; walk Strossmayer Promenade for the late afternoon view over the city",
            "20:00 — Dinner at Restaurant Lari & Penati (€30–40/pp) — a beloved neighbourhood restaurant in the Lower Town serving creative modern Croatian dishes: octopus carpaccio, truffled risotto, and Zagreb-style structure cheese pastry for dessert",
          ],
          cost: "€145–180 (hotel, culinary tour, tram, dinner)",
        },
        {
          day: "Day 3",
          title: "Plitvice Lakes with Private Driver",
          items: [
            "07:00 — Private driver from Zagreb to Plitvice Lakes (€80 one-way shared; or €140 return private) — depart early to arrive at 9am before the largest tour bus groups; private driver waits while you tour and returns at your chosen time",
            "09:00 — Plitvice Lakes Programme C full day (€35–40 entry) — spend the morning on the lower lakes boardwalks, take the electric boat, then hike the upper lakes rim trail for a complete circuit; the rim trail provides overhead views of the turquoise lake terraces that the boardwalk visitors below cannot see",
            "13:30 — Lunch at the park restaurant (€16–22) or packed lunch from hotel; eat on the lakeside terrace",
            "16:30 — Private driver return to Zagreb",
            "19:30 — Farewell drinks on Tkalciceva: a plate of Croatian charcuterie (kulen sausage, dalmatian ham, Paski sir cheese) with a bottle of Dingac or Postup Dalmatian wine costs €22–30 at a good wine bar",
          ],
          cost: "€155–195 (hotel, private driver, Plitvice entry, farewell drinks)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€300–500/day",
      days: [
        {
          day: "Day 1",
          title: "Private City Tour & Fine Croatian Dining",
          items: [
            "13:00 — Check in to the Esplanade Zagreb Hotel (€200–350/night) — the grand 1925 Art Deco railway hotel that hosted Orient Express passengers; restored to original splendour with a spa, pool, and the finest breakfast buffet in Croatia",
            "15:00 — Private guided tour of the Upper Town, Museum of Broken Relationships, and Zagreb Cathedral with a licensed art historian (€100 for 3 hours) — the guide provides context on Zagreb's role in Yugoslav history and the 1991 Croatian independence war",
            "18:30 — Pre-dinner cocktails at the Esplanade's Zinfandel Bar — the hotel bar is Zagreb's most elegant; a Croatian wine cocktail costs €12–15",
            "20:30 — Dinner at Restaurant 360 degrees or Zinfandel's at the Esplanade (€70–100/pp) — both serve creative contemporary Croatian cuisine with exceptional wine lists featuring small-production Croatian vineyards; the Esplanade's sommelier can arrange vertical tastings of Grgic Hills or Kozlovic wines by arrangement",
          ],
          cost: "€500–700 (hotel, private tour, fine dining)",
        },
        {
          day: "Day 2",
          title: "Private Market Tour, Cooking Class & Rakija Experience",
          items: [
            "09:00 — Private chef-guided Dolac market tour (€80) — Zagreb's best private food experience; a local chef takes you through the market selecting seasonal produce for a cooking class",
            "10:30 — Private Croatian cooking class (€120/pp) — learn to make strukli cheese pastry, black risotto, and roast lamb under a peka; 3-hour class ending with a lunch of everything prepared",
            "15:00 — Spa session at the Esplanade or boutique spa near the hotel (€60–90) — afternoon recovery before the evening",
            "18:00 — Private rakija tasting with a Croatian spirits expert (€60/pp) — sample 8 Croatian rakija varieties including walnut, medica (honey herb), travarica (herbal), and aged sljivovica plum brandy with food pairings",
            "20:30 — Dinner at Noel restaurant (€80–100/pp) — Zagreb's most critically acclaimed fine dining restaurant; tasting menu of 8 courses focusing on seasonal Croatian and Central European ingredients; outstanding natural wine list; reserve 2–3 weeks ahead",
          ],
          cost: "€550–750 (hotel, cooking class, spa, rakija tasting, Noel dinner)",
        },
        {
          day: "Day 3",
          title: "Private Plitvice Lakes Helicopter & Departure",
          items: [
            "07:30 — Private helicopter transfer to Plitvice Lakes (€400–600 per helicopter, 4 seats, 20-minute flight) — the aerial view of the 16 turquoise terraced lakes from above is extraordinarily dramatic; land at the nearby Grabovac helipad and transfer by private car to the park entrance",
            "09:00 — Plitvice Lakes private guided tour (€80 for a 3-hour private naturalist guide) — the guide identifies endemic plant species, explains the geological travertine barrier formation process, and takes you off the main boardwalk to viewpoints most visitors miss",
            "13:00 — Private picnic lunch arranged by hotel concierge at a lakeside clearing: Croatian charcuterie, fresh bread, truffle cheese, and a chilled bottle of Kozlovic Malvazija white wine",
            "15:30 — Private car return to Zagreb (2 hours) with a stop at a Small Carpathian or Zagorje wine estate for a cellar visit (€40/pp) en route",
            "19:00 — Farewell dinner at the Esplanade's Zinfandel's restaurant before departure; the restaurant's sommelier can arrange a parting bottle of Croatia's finest Dingac Plavac Mali red wine (€60–120/bottle)",
          ],
          cost: "€700–1000 (hotel, helicopter, private guide, estate visit, farewell dinner)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18–28 (hostel dorm or budget guesthouse)",
      food: "€18–25 (konoba meals + market snacks)",
      transport: "€3–8 (tram + day trip bus)",
      activities: "€10–18 (museums + funicular)",
      total: "€45–65/day (€75 on Plitvice day)",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€70–100 (boutique Lower Town hotel)",
      food: "€35–55 (restaurants + wine bar)",
      transport: "€8–20 (Bolt + tram + tour bus)",
      activities: "€20–40 (culinary tour + museums)",
      total: "€100–145/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200–350 (Esplanade Hotel)",
      food: "€80–130 (fine dining + wine)",
      transport: "€50–600 (private car + helicopter)",
      activities: "€80–160 (private tours + cooking class)",
      total: "€300–500/day",
    },
    {
      tier: "Plitvice Day Trip (Budget)",
      accommodation: "—",
      food: "€10–18 (packed lunch + snack)",
      transport: "€15 (return bus from Zagreb)",
      activities: "€30–40 (park entry fee)",
      total: "€55–73 extra",
    },
    {
      tier: "Plitvice Day Trip (Mid-Range)",
      accommodation: "—",
      food: "€16–22 (park restaurant)",
      transport: "€80–140 (private driver return)",
      activities: "€35–40 (park entry)",
      total: "€131–202 extra",
    },
  ],
  mistakes: [
    {
      icon: "🏖️",
      title: "Treating Zagreb as just a transit stop to the coast",
      desc: "Most Croatia visitors fly into Zagreb and immediately take the bus to Split or Dubrovnik. Three days in Zagreb reveals a city with better museums, more authentic food, and a more genuine local culture than most of coastal Croatia. The Museum of Broken Relationships alone justifies two nights.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Skipping Plitvice Lakes because it seems 'too touristy'",
      desc: "Plitvice does get crowded in July–August but the park is large enough to escape the masses on the upper lake rim trail. April–June and September–October offer the same spectacular waterfalls and turquoise water with 40–50% fewer visitors. It is genuinely one of Europe's most beautiful natural sites.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍷",
      title: "Drinking imported wine in Croatia",
      desc: "Croatia produces world-class wines: Dingac and Postup Plavac Mali reds from the Peljesac peninsula, Kozlovic and Clai Malvazija whites from Istria, and Grasevina dry whites from Slavonia. Any of these cost €4–8 per glass at a wine bar and will surprise anyone who has not tried Croatian wine before.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🚶",
      title: "Not walking Tkalciceva Street after 9pm",
      desc: "Tkalciceva comes alive properly after dark. The street fills with a mix of Zagreb students, professionals, and visitors at outdoor tables from spring onwards. Rakija bars begin their best service after 9pm. This is Zagreb's genuine social scene — not a tourist creation — and missing it means missing the city's most vivid daily ritual.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📅",
      title: "Visiting in January or February without a plan",
      desc: "Zagreb winters are cold (0–5 degrees) and grey. The Old Town is atmospheric but outdoor Tkalciceva cafe culture is on hold. However, Zagreb Christmas market (December) is outstanding and the museums are warm and crowd-free. If visiting January–February, plan museum-heavy days and book into a hotel with a good bar.",
      color: "bg-orange-50 border-orange-200",
    },
  ],
  tips: [
    {
      icon: "🥃",
      title: "Start with rakija, not beer",
      desc: "Rakija (Croatian fruit brandy) is the cultural entry point to Zagreb's bar scene. A shot costs €1.50–2.50 at a traditional rakija bar on Tkalciceva. Order medica (honey herb), orahovac (walnut), or sljivovica (plum) as your introduction. Craft beer is excellent and widely available, but rakija is the local handshake. Book a food and drink tour at https://www.getyourguide.com/s/?q=Zagreb&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎫",
      title: "Buy the Zagreb Card for 24 or 72 hours",
      desc: "The Zagreb Card (€10/24h or €16/72h) covers unlimited tram and bus rides, free or discounted museum entry, and discounts at restaurants and shops. If you plan to visit 2+ museums and use public transport, it pays for itself within the first half-day. Buy at the tourist office on Trg ban Josip Jelacic.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🛒",
      title: "Shop at Dolac market before 11am",
      desc: "Dolac market operates 7am–2pm but the best produce, the freshest cheese, and the most variety is available before 11am. After 11am, vendors begin packing up their best stock. A morning at Dolac market with a burek pastry is the most authentically Zagreb experience available for under €3.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚃",
      title: "Take the funicular for the experience, then walk back down",
      desc: "The Zagreb Funicular (Uspinjaca) is a 66-metre ride from Tomiceva to the Upper Town costing €0.66. It is the shortest public funicular in the world and has been running since 1890. Ride it up for the novelty; walk back down through the charming staircase lanes and garden terraces between the upper and lower towns for the better experience.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Zagreb worth visiting or should I just go straight to the Croatian coast?",
      a: "Zagreb absolutely rewards 2–3 days. The Museum of Broken Relationships is one of Europe's most creative and emotionally affecting museums. The daily Dolac market, the rakija bar scene on Tkalciceva, and the Plitvice Lakes day trip are all experiences unavailable in Split or Dubrovnik. Zagreb also has far better value for money than the Dalmatian coast in summer.",
    },
    {
      q: "How do I get from Zagreb to Plitvice Lakes?",
      a: "Buses depart Zagreb Main Bus Station (Autobusni Kolodvor) to Plitvice Lakes hourly from 07:00, costing €13–16 return and taking approximately 2 hours each way. Buy return tickets at the station or online at getbybus.com or flixbus.com. The bus drops you at Entrance 1 or Entrance 2 depending on the service — both are park entrances. Return buses run until 18:00.",
    },
    {
      q: "What is the Museum of Broken Relationships and is it worth visiting?",
      a: "The Museum of Broken Relationships (Muzej prekinutih veza) is a permanent collection of objects donated by people from around the world, each representing a relationship that ended. The concept started in Zagreb in 2006 by two Croatian artists after their own breakup. It is now internationally acclaimed, with affiliated exhibitions on four continents. Entry is €7 and it takes 60–90 minutes. It is genuinely one of Europe's most original museums.",
    },
    {
      q: "When is the best time to visit Zagreb?",
      a: "April–June and September–October are ideal: mild weather (15–25 degrees), Tkalciceva cafe culture at full swing, Dolac market at its most colourful with spring or autumn produce, and Plitvice Lakes at their most dramatic with spring waterfalls or autumn foliage. Avoid mid-July to mid-August — Zagreb itself is fine but Plitvice Lakes are genuinely overcrowded and park entry must be pre-booked weeks ahead.",
    },
  ],
  combineWith: ["split-croatia-4-days", "dubrovnik-4-days", "ljubljana-3-days"],
  relatedSlugs: ["split-croatia-4-days", "dubrovnik-4-days", "ljubljana-3-days", "budapest-4-days"],
};

export const metadata: Metadata = {
  title: "Zagreb in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Zagreb itinerary — Museum of Broken Relationships, St Mark's Church, Dolac market, Zagreb Cathedral, Tkalciceva rakija bars, funicular ride, and Plitvice Lakes day trip. Budget €45/day to luxury Esplanade Hotel.",
  keywords: [
    "Zagreb itinerary",
    "Zagreb 3 days",
    "Zagreb travel guide 2026",
    "Museum of Broken Relationships",
    "Plitvice Lakes day trip from Zagreb",
    "Tkalciceva Street",
    "Zagreb budget travel",
    "Zagreb visa Indian passport",
  ],
  openGraph: {
    title: "Zagreb in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Museum of Broken Relationships, St Mark's Church, Dolac market, rakija bars, and Plitvice Lakes — Zagreb in 3 days from €45/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/zagreb-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zagreb in 3 Days: Complete 2026 Itinerary",
    description: "Museum of Broken Relationships, Dolac market, rakija bars, and Plitvice day trip — from €45/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/zagreb-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Zagreb in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Zagreb in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/zagreb-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Zagreb",
      description:
        "Zagreb, Croatia — medieval Upper Town, Museum of Broken Relationships, Dolac market, Tkalciceva rakija bars, and gateway to Plitvice Lakes National Park.",
      geo: { "@type": "GeoCoordinates", latitude: 45.8150, longitude: 15.9819 },
    },
  ],
};

export default function ZagrebPage() {
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
