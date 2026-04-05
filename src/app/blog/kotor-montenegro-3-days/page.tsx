import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Kotor, Montenegro",
  country: "Montenegro",
  countryFlag: "🇲🇪",
  slug: "kotor-montenegro-3-days",
  heroQuery: "kotor montenegro bay old town medieval walls",
  heroAlt: "Kotor Montenegro Old Town with medieval walls climbing the limestone mountain above the Bay of Kotor",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Kotor is the Adriatic's best-kept secret — a perfectly preserved medieval city enclosed by 4.5km of walls that climb vertically up a limestone mountain, all surrounded by a deep fjord that the Venetians called the most beautiful bay in the world. The Bay of Kotor is technically a submerged river canyon, not a fjord, but its dark inky depths, sheer karst cliffs, and mirrored morning calm feel more dramatic than much of Norway. Three days is ideal: enough time to hike the fortress walls at sunrise, take a boat to the baroque church on Our Lady of the Rocks island in Perast, eat Njeguski smoked ham in a village above the bay, and drink Montenegrin wine as the sun sets over the still water.",
  stats: { duration: "3 Days", budgetFrom: "€45", bestMonths: "Apr–Jun or Sep–Oct", airport: "TIV" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Old Town & Walls" },
    { id: "day2", emoji: "📅", label: "Day 2 — Perast & Boat" },
    { id: "day3", emoji: "📅", label: "Day 3 — Villages & Departure" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Montenegro visa — NOT in Schengen, separate visa required"],
        ["Processing", "10–20 business days at Montenegro Embassy"],
        ["Fee", "€35–60 depending on embassy location"],
        ["Validity", "Single or multiple entry, up to 30 days"],
        ["Apply at", "Embassy of Montenegro or relevant consulate"],
        ["Documents", "Hotel bookings, return flight, bank statements, travel insurance"],
        ["Notes", "Holders of valid Schengen, US, or UK visas may enter Montenegro visa-free for up to 30 days — verify current rules before travel."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Montenegro is not in Schengen but grants visa-free access)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days in a 180-day period"],
        ["ETIAS", "Not applicable — Montenegro is not an EU or Schengen member state"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "Montenegro is an EU candidate country but has not yet joined. No ETIAS requirement currently planned."],
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
          title: "Old Town Arrival & San Giovanni Fortress Hike",
          items: [
            "13:00 — Arrive Tivat Airport (10 min taxi to Kotor, €10–15) or Podgorica Airport (90 min bus, €8); check into a hostel inside the old town walls or just outside the Sea Gate (€15–25/night)",
            "15:00 — San Giovanni Fortress hike: 1,350 steps up the rampart walls from inside the old town (€8 entry at the Church of St Mary) — allow 90 minutes round trip; the view over the bay from the top is the defining Kotor photograph",
            "17:30 — Explore the old town alleys for free: Cathedral of Saint Tryphon (€3), Maritime Museum (€4), and the numerous Venetian-era palaces and churches in the maze of lanes",
            "20:00 — Dinner at a local konoba inside the old walls (€10–15/pp) — grilled fresh fish, lamb under peka, and the local grape spirit loza; avoid the touristy restaurants directly on the main square",
            "22:00 — Evening stroll along the old town walls with bay reflections — completely different atmosphere to the daytime and usually quiet by 10pm",
          ],
          cost: "€35–45 (hostel, entry fees, dinner, taxi from airport)",
        },
        {
          day: "Day 2",
          title: "Perast & Our Lady of the Rocks",
          items: [
            "09:00 — Local bus to Perast village (€2, 20 min) — the most perfectly preserved Baroque town on the Adriatic with 17 churches and 12 palaces for a village of 300 people",
            "10:00 — Rowboat taxi to Our Lady of the Rocks island (€5 each way) — the iconic artificial island church built from stones and shipwrecks since 1452; the interior tapestries stitched by local women over decades are extraordinary",
            "12:30 — Lunch in Perast at a konoba on the waterfront (€12–15) — fresh lake trout, local lamb, and a glass of Vranac red wine; the view down the bay from Perast's waterfront is a UNESCO postcard",
            "15:00 — Return bus to Kotor; afternoon walk along the city walls promenade on the waterfront outside the walls (free, unlike the interior walls) for different angles of the bay",
            "19:00 — Evening at a local bar in the old town; try the domestic Niksicko beer (€2) or a glass of Montenegrin Krstac white wine (€3)",
          ],
          cost: "€30–40 (bus, boat, lunch, drinks)",
        },
        {
          day: "Day 3",
          title: "Njeguski Village & Departure",
          items: [
            "08:30 — Shared taxi or local bus to Njeguski village above the bay (€8–12 each way) — the mountain village famous for Njeguski prsut smoked ham and cheese; the road climbs through hairpin bends with panoramic bay views",
            "10:00 — Visit a local smokehouse in Njeguski to buy prsut ham and hard cheese directly from producers (€10–15/kg) — the best souvenir from Montenegro and unavailable outside this region at this quality",
            "12:00 — Lunch at a village konoba in Njeguski (€12–15) — roast lamb, smoked ham platters, local polenta, and the homecoming meal of Montenegro since 1519",
            "15:00 — Return to Kotor; farewell walk through the old town and a final coffee at a square cafe (€1.50 espresso)",
            "17:00 — Transfer to Tivat or Podgorica Airport (taxi €10–50 depending on which airport)",
          ],
          cost: "€35–50 (village transport, lunch, ham shopping, airport taxi)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€100–150/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Hotel & Guided Walls Tour",
          items: [
            "13:00 — Check in to a boutique hotel inside the old town walls (€70–120/night) — converted Venetian palaces with stone-vaulted rooms; the Hotel Cattaro and Forza Mare offer good mid-range options with bay views",
            "15:00 — Guided historical walking tour of Kotor Old Town with a licensed guide (€20/person, 90 min) — covers the four city gates, the Venetian Arsenal, the Cathedral, and the Maritime Museum with rich context",
            "18:00 — San Giovanni Fortress at golden hour (€8) — the sun sets behind the Vrmac ridge and the bay turns gold and pink; go at 5:30pm in spring for the best light",
            "20:30 — Dinner at Galion restaurant on the waterfront outside the walls (€35–45/pp) — considered one of Montenegro's finest restaurants with fresh Adriatic seafood and bay views from every table",
          ],
          cost: "€120–145 (hotel, tour, fortress, dinner)",
        },
        {
          day: "Day 2",
          title: "Perast, Our Lady of the Rocks & Budva",
          items: [
            "09:00 — Private taxi to Perast (€20 one way) for a more flexible morning than the bus allows",
            "10:00 — Our Lady of the Rocks island with a private guided visit from a local boatman who explains the island's history (€30 including boat and 30-min tour)",
            "13:00 — Lunch at Restaurant Conte in Perast (€30/pp) — the finest restaurant in the village with white-glove service, fresh lagoon fish, and a terrace directly over the water",
            "15:00 — Private taxi onward to Budva Old Town (€25) — Montenegro's liveliest medieval walled town with beaches directly below the walls and a completely different atmosphere to quiet Kotor",
            "21:00 — Return taxi to Kotor (€20); nightcap drink at a Kotor old town bar",
          ],
          cost: "€130–155 (taxi, boat, guided visit, lunch, Budva visit)",
        },
        {
          day: "Day 3",
          title: "Lovcen National Park & Njeguski",
          items: [
            "09:00 — Organised tour or private taxi to Lovcen National Park and Njeguski village (€40–60 including transport and park entry) — Lovcen mausoleum at 1,660m altitude honours Montenegro's founder-king Petar II Njegos",
            "10:30 — Lovcen Mausoleum: 461 steps up from the car park to one of Europe's most dramatic viewpoints — 360 degrees over Montenegro, Albania, and the Adriatic on a clear day",
            "13:00 — Njeguski village lunch at a konoba with prsut ham board, local cheeses, and barrel wine (€20/pp)",
            "15:30 — Wine tasting at a Montenegrin winery on the road back to Kotor (€15 for 4 wines including Vranac, Krstac, and Zupa) — Montenegro's winemaking tradition dates back to Roman times",
            "19:00 — Farewell dinner in Kotor old town (€25–35/pp); transfer to airport at departure time",
          ],
          cost: "€110–140 (tour, mausoleum, lunch, wine tasting, dinner)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€280–450/day",
      days: [
        {
          day: "Day 1",
          title: "Bay Arrival & Private Fortress Tour",
          items: [
            "12:00 — Private transfer from Tivat Airport to a 5-star hotel on the Bay of Kotor (€40) — the Regent Porto Montenegro in Tivat or One&Only Portonovi are the Montenegro luxury benchmarks; both have their own marinas",
            "15:00 — Private guide for Kotor Old Town and San Giovanni Fortress with after-hours access (€120/hour, 2 hours) — includes private access to the Cathedral Treasury and the Venetian city archives",
            "19:00 — Sunset aperitivo on the hotel marina terrace with locally foraged Montenegrin herb cocktails and Adriatic prawn bruschetta (€30/pp)",
            "21:00 — Dinner at the hotel fine-dining restaurant (€80–120/pp) with a tasting menu of Montenegrin cuisine elevated with European technique; the sommelier will pair regional wines including rare old-vintage Vranac",
          ],
          cost: "€350–450 (hotel, private tour, dinner, transfer)",
        },
        {
          day: "Day 2",
          title: "Private Boat Through the Bay",
          items: [
            "09:00 — Private boat charter through the Bay of Kotor (€400–600/day for an 8m motorboat with captain, shared among 4) — stops at Our Lady of the Rocks, the Blue Cave at Risan, and secluded swimming bays",
            "11:00 — Private guided visit to Our Lady of the Rocks with the church custodian who unlocks the vestry and explains the 69 tapestries stitched over 25 years by one woman (€80 for private access)",
            "14:00 — Lunch on board at anchor in a quiet bay — private chef prepares Montenegrin seafood charcuterie and charcoal-grilled fresh catch (€70/pp catered)",
            "17:00 — Sunset from the water on the return to Kotor — the bay at dusk from a boat, with the medieval walls rising from the water and mountain silhouettes behind, is the most beautiful scene in the Adriatic",
            "21:00 — Dinner at Galion or Stari Mlini restaurant (€70–100/pp) with private table reservation arranged by hotel concierge",
          ],
          cost: "€420–550 (boat, private access, catered lunch, dinner)",
        },
        {
          day: "Day 3",
          title: "Lovcen, Njeguski Estate & Departure",
          items: [
            "08:30 — Private car and guide for a full-day Lovcen and inland Montenegro experience (€250 for driver and guide)",
            "10:00 — Lovcen Mausoleum private early access before public opening (arranged through hotel, €100 extra) — just your group on the summit of Montenegro at dawn",
            "13:00 — Private lunch at a traditional family estate in Njeguski — a 4-hour peka meal prepared overnight served with estate wine and rakija spirits; the family serves as hosts and storytellers (€90/pp private booking)",
            "16:00 — Return via the Serpentine Road with stops at panoramic viewpoints that tour buses cannot reach",
            "19:00 — Final drinks at the hotel marina bar; private transfer to Tivat Airport at departure time",
          ],
          cost: "€350–500 (private car, estate lunch, private access, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€15–25 (hostel or guesthouse in old town)",
      food: "€15–25 (konoba meals + local bars)",
      transport: "€8–15 (buses + local taxis)",
      activities: "€8–20 (fortress, cathedral, boat to island)",
      total: "€45–65/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€70–120 (boutique hotel in old town)",
      food: "€40–60 (restaurants + wine tastings)",
      transport: "€25–40 (private taxis + organised tours)",
      activities: "€30–50 (guided tours, Lovcen, wine)",
      total: "€100–150/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–500 (5-star bay hotel or marina resort)",
      food: "€100–180 (fine dining + catered boat lunch)",
      transport: "€80–200 (private boat, car, transfers)",
      activities: "€100–200 (private tours, exclusive access)",
      total: "€280–450/day",
    },
    {
      tier: "🎟 Day Trip Only",
      accommodation: "N/A (based elsewhere in region)",
      food: "€10–15 (packed lunch or konoba)",
      transport: "€15–30 (bus or shared taxi from Dubrovnik or Split)",
      activities: "€8–15 (fortress and old town)",
      total: "€33–60/day trip",
    },
    {
      tier: "🍽 Food Budget",
      accommodation: "N/A",
      food: "€6–10 (burek, Njeguski prsut, local bread)",
      transport: "€0 (walking old town)",
      activities: "€3 (cathedral)",
      total: "€9–13/food day",
    },
  ],
  mistakes: [
    {
      icon: "🏃",
      title: "Treating Kotor as a half-day cruise stop",
      desc: "Cruise ships from Dubrovnik dump 3,000 passengers into Kotor's tiny old town between 10am and 2pm. This is the worst possible time to visit. Arrive the evening before or stay overnight and explore in the morning before the ships arrive. The old town before 9am is completely different.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⛵",
      title: "Missing the boat to Our Lady of the Rocks",
      desc: "Our Lady of the Rocks island in Perast is one of the most beautiful baroque churches in the Adriatic and reachable only by a 5-minute rowboat. Most people who visit Perast walk the waterfront and leave without taking the boat. The island church is the entire point of going to Perast.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "☀️",
      title: "Hiking San Giovanni Fortress in the midday heat",
      desc: "The 1,350-step fortress hike with no shade reaches brutal temperatures by 11am June through September. Start at 7am for cool air, golden light, and no queues. Or go at 5pm for sunset light. Midday hiking means heat exhaustion on exposed limestone steps.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍷",
      title: "Ignoring Montenegrin wine",
      desc: "Montenegro produces exceptional wine that almost nobody outside the Balkans has tasted. Vranac red from the Podgorica plain is bold and tannic. Krstac white from the Crmnica region is crisp and mineral. A full bottle of quality local wine costs €8–12 in a shop — less than a single glass of import wine.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Not leaving the old town to explore the bay shores",
      desc: "The Bay of Kotor is 28km long with villages, churches, and viewpoints all around its shores. Renting a car or taking taxis to Dobrota, Ljuta, Risno, and Muo reveals a different Montenegro entirely. Staying only in the old town misses the scale of what makes the bay extraordinary.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Book tours and activities on GetYourGuide",
      desc: "Kotor boat tours, Lovcen hikes, and wine tasting experiences all have free cancellation on GetYourGuide — essential when Bay of Kotor weather can bring afternoon bora winds that cancel boat trips. Book at https://www.getyourguide.com/s/?q=Kotor+Montenegro&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Arrive in Kotor for the morning light on the bay",
      desc: "The Bay of Kotor in early morning is mirror-calm, fog drifts off the mountains, and the old town walls reflect in the water. This scene happens only for 90 minutes at dawn. Stay overnight — the cruise day-tripper experience bears no resemblance to watching the bay wake up.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🧀",
      title: "Buy Njeguski prsut and cheese directly in the village",
      desc: "Njeguski smoked ham is Montenegro's national food product. Bought at a village smokehouse in Njeguski it costs €12–15/kg. The same ham in an old town tourist shop costs €30–40/kg. The mountain road up to Njeguski is one of Montenegro's most scenic drives regardless of the ham.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏰",
      title: "Walk the full 4.5km of city walls",
      desc: "Most people enter the walls from the old town and hike up to San Giovanni. The full wall circuit continues beyond the fortress and along the hillside back down — a 3-hour complete loop with walls that in places are 20m thick. Entry is €8 and covers the entire circuit including the fortress peak.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Do I need a visa for Montenegro?",
      a: "Montenegro is not in the EU or Schengen Area. US, UK, EU, and Australian passport holders enter visa-free for up to 90 days. Indian passport holders need a separate Montenegro visa (€35–60) unless they hold a valid Schengen, US, or UK visa — in which case visa-free entry for 30 days may be granted. Verify the current rules with the Montenegro Embassy as these bilateral agreements change. Montenegro has no ETIAS requirement.",
    },
    {
      q: "How do I get from Dubrovnik to Kotor?",
      a: "The most scenic route is by bus along the Adriatic Highway (2.5 hours, €10–15). This crosses the Bosnian border at Neum for 9km — bring your passport. Alternatively, a shared shuttle or private transfer costs €30–60 for the journey. Fast ferry services also run seasonally between Dubrovnik and Kotor, taking 2 hours by sea through the most beautiful coastline in the region.",
    },
    {
      q: "Is Kotor walkable or do I need a car?",
      a: "The old town itself is entirely pedestrianised and walkable. For day trips to Perast, buses cost €2 and run every 1–2 hours. Taxis are cheap (Perast €15, Njeguski €20–25). For Lovcen National Park and inland Montenegro, either join an organised tour (€35–50) or rent a car (€30–50/day). A car unlocks the full bay circuit and mountain villages.",
    },
    {
      q: "What currency does Montenegro use?",
      a: "Montenegro uses the euro (€) despite not being an EU member — they unilaterally adopted it. Cash is still widely preferred in small konobas, local buses, and markets. ATMs are available in Kotor old town. Credit cards work in larger restaurants and hotels. Keep €20–30 in small notes for buses, boats, and konoba meals.",
    },
  ],
  combineWith: ["split-croatia-4-days", "tirana-albania-3-days", "dubrovnik-3-days"],
  relatedSlugs: ["split-croatia-4-days", "tirana-albania-3-days", "venice-4-days", "florence-4-days"],
  galleryQuery: "kotor montenegro bay old town fortress adriatic",
};

export const metadata: Metadata = {
  title: "Kotor Montenegro in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Kotor Montenegro itinerary — Bay of Kotor UNESCO fjord, Old Town medieval walls, San Giovanni fortress hike, Perast boat to Our Lady of the Rocks, Njeguski smoked ham, and Montenegrin wine. Budget €45/day to luxury marina hotels. Visa info included.",
  keywords: [
    "Kotor Montenegro itinerary",
    "Kotor 3 days",
    "Kotor travel guide 2026",
    "Bay of Kotor",
    "Our Lady of the Rocks Perast",
    "San Giovanni fortress hike",
    "Kotor old town",
    "Kotor visa Indian passport",
    "Montenegro travel guide",
    "Njeguski prsut ham",
  ],
  openGraph: {
    title: "Kotor Montenegro in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Bay of Kotor UNESCO fjord, medieval walls, fortress hike, Perast boat to Our Lady of the Rocks, and Njeguski smoked ham — Kotor in 3 days from €45/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotor Montenegro in 3 Days: Complete 2026 Itinerary",
    description:
      "Medieval walls, a UNESCO bay, Perast boat trips, and Montenegrin wine. The complete Kotor guide for every budget.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Kotor Montenegro in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Kotor Montenegro in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/kotor-montenegro-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kotor, Montenegro",
      description:
        "Kotor, Montenegro — a UNESCO-listed medieval walled city on the deepest fjord in the Adriatic, surrounded by limestone mountains.",
      geo: { "@type": "GeoCoordinates", latitude: 42.4247, longitude: 18.7712 },
    },
  ],
};

export default function KotorMontenegroPage() {
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
