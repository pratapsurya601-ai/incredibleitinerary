import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Plovdiv",
  country: "Bulgaria",
  countryFlag: "🇧🇬",
  slug: "plovdiv-3-days",
  heroQuery: "Plovdiv old town Bulgaria colorful houses hills",
  heroAlt: "Plovdiv Old Town with colourful Revival-era houses cascading down the hills at sunset",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Plovdiv is the Balkans' best-kept secret — Europe's oldest continuously inhabited city, where a 2nd-century Roman amphitheatre sits in a living neighbourhood, cobblestone Revival-era mansions drip with wisteria, and the Kapana creative quarter buzzes with rakiya bars and street art. Three days is enough to explore the Old Town, taste local wine, and even day-trip to the Valley of the Roses.",
  stats: { duration: "3 Days", budgetFrom: "€25", bestMonths: "Apr–Jun or Sep–Oct", airport: "PDV" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Old Town & Kapana" },
    { id: "day2", emoji: "📅", label: "Day 2 — Thracian Heritage" },
    { id: "day3", emoji: "📅", label: "Day 3 — Rose Valley Day Trip" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C) — Bulgaria joins full Schengen by end 2025"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Bulgarian Embassy or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Apply 6–8 weeks early. Biometric appointment required. Bulgaria increasingly processes visas quickly."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area from 2026)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register online before travel)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free under 90/180 rule. No border controls from Schengen states."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€25–40/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Walk & Kapana Bar Crawl",
          items: [
            "10:00 — Check in to a hostel or guesthouse in the Old Town or Kapana district (€12–18/night in dorm); drop bags and head straight for the cobblestone streets of Stariya Grad (Old Town)",
            "11:00 — Walk the Old Town's steep lanes: stop at the Regional Ethnographic Museum (free on first Sunday; €2 other days) inside a grand National Revival house with a hanging bay window — one of Bulgaria's finest examples",
            "13:00 — Lunch at a mehana (traditional tavern) on Ulitsa Saborna: shopska salad (€2.50), kebapche (grilled minced-meat rolls, €4), and a glass of local Mavrud wine (€2) — a full lunch under €10",
            "15:00 — Roman Amphitheatre viewing from the free terrace above — the 2nd-century AD structure seats 7,000 and hosts live concerts; enter the arena for €5 to stand on the ancient stage itself",
            "17:30 — Kapana creative district for evening — street art, indie coffee shops, and rakiya bars; try a shot of local grape rakiya (€1–1.50) and a craft beer (€2–3) at one of the atmospheric courtyard bars",
            "19:30 — Dinner in Kapana: grilled trout or stuffed peppers at a local restaurant (€8–12 total); the district is most alive on weekend evenings with live music spilling into the streets",
          ],
          cost: "€30–40 (hostel, food, amphitheatre, drinks)",
        },
        {
          day: "Day 2",
          title: "Thracian Heritage & Three Hills",
          items: [
            "09:00 — Hike Nebet Tepe (Prayer Hill), the highest of Plovdiv's famous Seven Hills — free entry, 20-minute walk from the Old Town; the view over the Rhodope mountains and the city is the best in the region",
            "10:30 — Regional Archaeological Museum (€5): home to the Panagyurishte Gold Treasure — a 2,400-year-old Thracian gold ceremonial set of drinking vessels that is one of the world's great archaeological finds",
            "12:30 — Street food lunch: banitsa (cheese-and-egg pastry, €1.50) and ayran (yoghurt drink, €0.80) from a bakery near the central market — eat like a local student",
            "14:00 — Alyosha Monument walk: the giant Soviet-era soldier on Bunardzhika Hill overlooks the whole city; free to visit, the base offers panoramic views in every direction",
            "16:00 — Dzhumaya Mosque (14th century, free to enter respectfully) and the Ottoman-era bazaar ruins beneath the adjacent underpass — one of Europe's most unusual urban archaeological sites",
            "19:00 — Dinner: traditional Bulgarian stew (kavarma) at a mehana on ul. Knyaz Tseretelev (€6–8); finish with baklava from a nearby pastry shop (€1)",
          ],
          cost: "€25–35 (food, museums, transport)",
        },
        {
          day: "Day 3",
          title: "Rose Valley Day Trip & Departure",
          items: [
            "07:30 — Bus to Kazanlak (1.5 hours, €4 each way) — gateway to Bulgaria's Valley of the Roses, which produces 70% of the world's rose oil; buses from Plovdiv Central Bus Station run regularly",
            "09:30 — Kazanlak Thracian Tomb (UNESCO, replica free; original €5 with guide) — a 4th-century BC beehive tomb with extraordinary frescoes depicting Thracian funeral banquets",
            "11:00 — Rose Museum in Kazanlak (€3): learn how Bulgarian rose oil (attar of roses) is distilled; one litre requires 3–4 tonnes of hand-picked petals; May–June visit coincides with the Rose Festival",
            "13:00 — Lunch in Kazanlak town centre: grilled chicken and salad (€5–7); buy a small bottle of rose water or cosmetics as souvenirs (€3–8)",
            "15:30 — Bus back to Plovdiv; evening stroll along the Maritsa River embankment before heading to the bus or train station for departure",
          ],
          cost: "€20–28 (bus, museum, lunch, souvenirs)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€70–110/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Guesthouses & Roman Ruins",
          items: [
            "12:00 — Check in to a boutique guesthouse in the Old Town (€45–70/night) — many are restored National Revival mansions with frescoed ceilings and garden terraces; Hikers Hostel and Guest House Plovdiv are top picks",
            "14:00 — Guided Old Town walking tour (€15, 2 hours) — a local guide brings the layers of Thracian, Greek, Roman, Ottoman, and Bulgarian Revival history to life as you wind through the cobblestone streets",
            "17:00 — Roman Amphitheatre arena entry (€5) followed by wine tasting at a nearby wine bar in Kapana — Bulgaria's Thracian wine region produces excellent Mavrud and Rubin varietals; tasting flights €8–12",
            "20:00 — Dinner at a contemporary Bulgarian restaurant in Kapana (€20–30/pp): try Plovdiv's revival-style slow-cooked lamb or pan-fried carp with walnut sauce; local wine pairing €8–12 extra",
          ],
          cost: "€90–110 (guesthouse, tour, dinner, wine)",
        },
        {
          day: "Day 2",
          title: "Museums, Mosques & Mountain Views",
          items: [
            "09:30 — Plovdiv Regional Archaeological Museum (€5): the Panagyurishte Thracian Gold Treasure alone is worth the visit — nine golden rhytons, amphorae, and a phiale representing the apex of ancient goldsmithing",
            "11:30 — Ethnographic Museum (€5) inside the Kuyumdzhioglu House — the most beautiful National Revival building in Bulgaria; the painted ceiling and hanging oriel rooms are extraordinary",
            "13:30 — Lunch at Pavaj restaurant in the Old Town (€15–20/pp): creative takes on Bulgarian classics — shopska salad with roasted pepper, grilled autumn vegetables, and house-made bread",
            "15:30 — Dzhumaya Mosque and the Plovdiv Ancient Stadium ruins visible through the main pedestrian street underpass — the Roman stadium once held 30,000 spectators; sections visible through glass floor panels",
            "19:30 — Sunset at Nebet Tepe hill followed by dinner at a terrace restaurant with Rhodope mountain views (€20–25/pp)",
          ],
          cost: "€80–100 (museums, meals, tastings)",
        },
        {
          day: "Day 3",
          title: "Rose Valley & Thracian Tombs",
          items: [
            "08:00 — Private day tour to Kazanlak and Rose Valley (€45–60 per person including transport and guide) — far more comfortable than public buses and includes stops at the Thracian Tomb, rose distillery, and Valley viewpoints",
            "10:00 — Kazanlak Thracian Tomb UNESCO site with expert guide: the painted frescos depicting the chariot race, banquet, and the deceased Thracian ruler are among the finest preserved Hellenistic paintings in Europe",
            "12:30 — Lunch at a local family restaurant in Kazanlak (€12–15/pp): fresh Rhodope mountain trout, herb salads, and local rose-hip jam desserts",
            "15:00 — Rose distillery visit and attar demonstration — see how 1 kg of precious rose oil requires 3–4 tonnes of hand-picked Damask roses; tasting of rose products and optional purchases",
            "17:30 — Return to Plovdiv; evening cocktails at a Kapana rooftop bar (€6–10/drink) with views over the Old Town",
          ],
          cost: "€90–110 (tour, lunch, tastings, cocktails)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€200–350/day",
      days: [
        {
          day: "Day 1",
          title: "Revival Mansion Stay & Private Old Town Tour",
          items: [
            "13:00 — Check in to a luxury boutique hotel in a restored National Revival mansion in the Old Town (€120–200/night) — Hebros Hotel is the finest, with individually decorated rooms and a celebrated restaurant inside a 19th-century merchant's house",
            "15:00 — Private 3-hour Old Town tour with a specialist archaeologist or art historian (€80–120) — bespoke access to private chapels, hidden courtyards, and buildings not on the public trail; includes Roman Amphitheatre arena access",
            "19:00 — Pre-dinner wine tasting at a premium local cellar: Bessa Valley Winery or Villa Yustina offer curated vertical tastings of award-winning Merlot and Syrah from the Thracian Lowlands (€30–50/person)",
            "21:00 — Dinner at Hebros Hotel Restaurant (€50–70/pp): the chef uses 19th-century Bulgarian Revival recipes with contemporary technique; the rose-brandy lamb and Rhodope mushroom risotto are signature dishes",
          ],
          cost: "€280–350 (hotel, private tour, tasting, dinner)",
        },
        {
          day: "Day 2",
          title: "Thracian Gold, Spa & Amphitheatre Concert",
          items: [
            "10:00 — Private museum morning: pre-arranged access to the Panagyurishte Gold Treasure at the Archaeological Museum with a curator-led explanation of the Thracian world view and ritual drinking culture (€50 private session)",
            "13:00 — Lunch at Pavaj or a contemporary Bulgarian fine-dining restaurant (€30–45/pp) with curated wine pairing — the Thracian wine region rivals Tuscany for quality-to-price ratio at the luxury level",
            "15:30 — Spa afternoon at a boutique wellness centre: rose oil treatments using locally produced attar are unique to this region of Bulgaria; 90-minute rose massage €60–80",
            "20:00 — Amphitheatre evening concert (check schedule — opera, classical, and folk performances run spring through autumn, tickets €15–50); the 2nd-century stone seating with the Old Town as backdrop is one of Europe's great performance settings",
          ],
          cost: "€250–320 (museum, spa, meals, concert)",
        },
        {
          day: "Day 3",
          title: "Private Rose Valley & Winery Tour",
          items: [
            "08:30 — Private chauffeured day trip to the Valley of the Roses and Kazanlak (€150–200 for full-day private car and guide)",
            "10:00 — Private access to working rose distillery during harvest season (May–June): see the copper alembic stills, participate in rose picking, and receive a gift bottle of pure rose water",
            "12:30 — Vineyard lunch at Bessa Valley Winery: 6-course tasting menu with vertical wine flight in the barrel room (€80–100/pp) — the winery is co-owned by Château Léoville Poyferré and produces Bordeaux-quality reds",
            "16:00 — Return to Plovdiv; farewell cocktails at the Hebros terrace with views over the Rhodope hills",
          ],
          cost: "€320–420 (private car, distillery, winery lunch, hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€12–18 (hostel dorm or guesthouse)",
      food: "€8–14 (mehana, street food)",
      transport: "€3–6 (city buses + day-trip bus)",
      activities: "€5–10 (select museums)",
      total: "€25–40/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€45–70 (boutique guesthouse Old Town)",
      food: "€25–40 (restaurants + wine bars)",
      transport: "€10–20 (taxis + day tours)",
      activities: "€20–35 (guided tours, museums)",
      total: "€70–110/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€120–200 (heritage mansion hotel)",
      food: "€80–130 (fine dining + wine)",
      transport: "€50–120 (private car + driver)",
      activities: "€80–150 (private tours, spa, concerts)",
      total: "€200–350/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€8–12 (hostel dorm)",
      food: "€5–10 (bakeries, markets, student canteens)",
      transport: "€2–4 (walking + occasional bus)",
      activities: "€3–8 (free hills, selective entry)",
      total: "€18–28/day",
    },
    {
      tier: "🌸 Special (Rose Festival)",
      accommodation: "€50–90 (book 3+ months ahead in May/June)",
      food: "€20–35 (festival food + local restaurants)",
      transport: "€15–30 (festival buses + private transfers)",
      activities: "€25–50 (festival events, winery tours)",
      total: "€90–160/day",
    },
  ],
  mistakes: [
    {
      icon: "🗓️",
      title: "Visiting in the height of summer without shade breaks",
      desc: "Plovdiv in July–August hits 38°C and the cobblestone Old Town offers little shade. April–June and September–October bring perfect temperatures of 18–25°C. If you must visit in summer, do Old Town walks before 10am and after 6pm.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌹",
      title: "Missing the Rose Valley if travelling in May or June",
      desc: "The Kazanlak Rose Festival (late May/early June) is one of Eastern Europe's most spectacular events — rose parades, folk dancing, and the harvest. Missing it during this window means waiting another year. Book accommodation months ahead for festival dates.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🍷",
      title: "Overlooking Bulgaria's wine scene",
      desc: "The Thracian Lowlands around Plovdiv are home to some of Europe's best-value premium wines — Mavrud, Rubin, and international varietals grown in a climate similar to Bordeaux, at a fraction of French prices. Many tourists drink only beer and miss it entirely.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🎭",
      title: "Not checking the amphitheatre events calendar",
      desc: "Plovdiv's Roman amphitheatre hosts concerts and opera from spring through autumn. Tickets are €15–50 and performances in this 2nd-century venue are unforgettable. Check the programme at the city's cultural calendar before you arrive and book in advance.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏛️",
      title: "Ignoring Kapana in favour of only the Old Town",
      desc: "The Old Town is stunning but heavily photographed. The Kapana creative quarter one block away is where Plovdiv's living culture breathes — local designers, indie coffee roasters, rakiya cocktail bars, and a genuine young Bulgarian crowd. Don't miss it.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🚶",
      title: "Walk everything — Plovdiv is very compact",
      desc: "The Old Town, Kapana, the Roman Amphitheatre, and the Archaeological Museum are all within 15 minutes' walk of each other. Taxis are cheap (€2–4 across the city) but mostly unnecessary. Save money and get the best views by walking up the hills. Book activities at https://www.getyourguide.com/s/?q=Plovdiv+Bulgaria&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🥂",
      title: "Try rakiya — it's part of every genuine Bulgarian experience",
      desc: "Rakiya is Bulgaria's national spirit — grape or plum brandy served neat or with a shopska salad as an aperitif. A shot costs €1–1.50 in a mehana. Home-made rakiya (domashna) is offered at family restaurants as a gesture of hospitality — accepting is polite.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "📸",
      title: "Climb the hills at dawn for crowd-free photography",
      desc: "Plovdiv's colourful Old Town looks extraordinary from Nebet Tepe at sunrise with zero tourists and golden light on the Revival-era facades. The same spot at midday is crowded and flat-lit. The climb takes 15 minutes from the Old Town entrance.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏺",
      title: "Spend at least 90 minutes at the Archaeological Museum",
      desc: "The Panagyurishte Gold Treasure is one of the most extraordinary Thracian artefacts in existence. Most visitors rush through in 20 minutes. The nine golden ritual vessels from around 400 BC tell a complete story of Thracian religion and feasting culture that rewards a slow visit.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Sofia to Plovdiv?",
      a: "Buses from Sofia Central Bus Station to Plovdiv run every 30–60 minutes, take 2 hours, and cost €5–7. Trains take 2.5–3 hours and cost €6–8 but the bus is faster. Plovdiv Airport (PDV) has limited direct international flights — most travellers fly into Sofia (SOF) and take the bus.",
    },
    {
      q: "Is Plovdiv worth visiting beyond the Old Town?",
      a: "Absolutely. The Archaeological Museum with Thracian gold, the Kapana creative quarter, the Ottoman Dzhumaya Mosque, and the Roman Stadium ruins beneath the pedestrian street all deserve time. The day trip to Kazanlak and the Rose Valley adds a completely different Balkan landscape and ancient history to the trip.",
    },
    {
      q: "What currency does Bulgaria use and is it cheap?",
      a: "Bulgaria uses the Bulgarian Lev (BGN). The exchange rate is roughly 1 EUR = 1.95 BGN (fixed peg). Bulgaria is one of Europe's cheapest countries — a full restaurant meal costs €5–10, craft beers are €2, and museum entry is €2–5. Even a mid-range hotel in the Old Town costs less than €70.",
    },
    {
      q: "When is the best time to visit Plovdiv?",
      a: "April–June is ideal: warm temperatures (18–25°C), spring flowers, and the Rose Festival in late May/early June for those who want the full Valley of the Roses experience. September–October is equally good with harvest season, wine festivals, and fewer tourists than summer. Avoid July–August heat unless you enjoy 38°C.",
    },
  ],
  combineWith: ["sofia-weekend", "istanbul-5-days", "bucharest-3-days"],
  relatedSlugs: ["ohrid-3-days", "albania-riviera-5-days", "istanbul-5-days", "athens-4-days"],
  galleryQuery: "Plovdiv Bulgaria old town colourful houses amphitheatre",
};

export const metadata: Metadata = {
  title: "Plovdiv in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
  description:
    "The perfect 3-day Plovdiv itinerary — Roman amphitheatre, National Revival Old Town, Kapana creative district, Thracian gold, and rose valley day trip. From €25/day. Full visa info for Indian & Western passports.",
  keywords: [
    "Plovdiv itinerary",
    "Plovdiv 3 days",
    "Plovdiv travel guide 2026",
    "Bulgaria travel",
    "Plovdiv Old Town",
    "Kapana district",
    "Rose Valley Bulgaria",
    "Plovdiv visa Indian passport",
    "Bulgarian amphitheatre",
    "Thracian heritage Bulgaria",
  ],
  openGraph: {
    title: "Plovdiv in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
    description:
      "Roman amphitheatre, Revival-era Old Town, Kapana bar district, Thracian gold, and rose valley — Plovdiv in 3 days from €25/day.",
    type: "article",
    url: `${siteUrl}/blog/plovdiv-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Plovdiv in 3 Days: Complete 2026 Travel Guide",
    description:
      "Plovdiv's Roman amphitheatre, colourful Old Town, Kapana creative district, and Rose Valley — all in 3 days from €25/day.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/plovdiv-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Plovdiv in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
      description:
        "A complete 3-day Plovdiv itinerary covering the Roman amphitheatre, National Revival Old Town, Kapana creative quarter, Thracian heritage, and a day trip to Bulgaria's Valley of the Roses.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/plovdiv-3-days`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Plovdiv in 3 Days",
          item: `${siteUrl}/blog/plovdiv-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Plovdiv",
      description:
        "Plovdiv, Bulgaria — Europe's oldest continuously inhabited city, with a Roman amphitheatre, National Revival Old Town, Kapana creative district, and gateway to the Valley of the Roses.",
      geo: { "@type": "GeoCoordinates", latitude: 42.1354, longitude: 24.7453 },
      touristType: ["History Enthusiasts", "Cultural Tourists", "Budget Travellers", "Wine Lovers"],
    },
  ],
};

export default function PlovdivPage() {
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
