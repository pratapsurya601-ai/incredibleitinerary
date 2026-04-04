import type { Metadata } from "next";
import UniversalBlogClient from "@/components/blog/UniversalBlogClient";
import type { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Malta in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Plan the perfect 4-day Malta itinerary — Valletta, Mdina, Blue Lagoon, Gozo, and the Hypogeum. Visa info, budget breakdown, and day-by-day plans for every budget.",
  keywords: [
    "Malta travel guide",
    "Malta 4 days itinerary",
    "Valletta travel guide",
    "Blue Lagoon Malta",
    "Mdina silent city",
    "Gozo island Malta",
    "Malta budget travel 2026",
    "Hal Saflieni Hypogeum",
  ],
  openGraph: {
    title: "Malta in 4 Days: The Complete Travel Guide (2026)",
    description:
      "The world's most concentrated history: Valletta's Baroque grandeur, Mdina's medieval streets, the Blue Lagoon on Comino, and a 5,000-year-old underground temple.",
    url: "https://incredibleitinerary.com/blog/malta-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555629151-5738e6afe3a7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Valletta Malta baroque capital city with Grand Harbour Mediterranean sea",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malta in 4 Days: Complete Guide (2026)",
    description:
      "Day-by-day Malta itinerary — Valletta, Mdina, Blue Lagoon, Gozo, Hypogeum. Budget from €55/day.",
    images: ["https://images.unsplash.com/photo-1555629151-5738e6afe3a7?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/malta-4-days",
  },
};

/* ── JSON-LD Structured Data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Malta in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Complete 4-day Malta travel guide covering Valletta, Mdina, Blue Lagoon, Gozo, and the Ħal Saflieni Hypogeum across all budgets.",
      image: "https://images.unsplash.com/photo-1555629151-5738e6afe3a7?w=1200&q=80",
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/malta-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Malta 4 Days",
          item: "https://incredibleitinerary.com/blog/malta-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Malta",
      description:
        "The smallest EU capital in the world with more UNESCO World Heritage sites per square kilometre than any country on Earth. Home to Valletta, Mdina, the Blue Lagoon, Gozo, and the world's only prehistoric underground temple.",
      url: "https://incredibleitinerary.com/blog/malta-4-days",
      touristType: ["History Enthusiasts", "Diving", "Mediterranean Travellers", "Culture Seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.9375,
        longitude: 14.3754,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Malta",
      },
    },
  ],
};

/* ── Page Data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Malta",
  country: "Malta",
  countryFlag: "🇲🇹",
  slug: "malta-4-days",
  heroQuery: "malta valletta capital mediterranean harbor baroque architecture",
  heroAlt: "Valletta Malta baroque capital city with Grand Harbour Mediterranean sea",
  category: "Europe",
  date: "January 20, 2026",
  readTime: "13 min read",

  intro:
    "The smallest EU capital in the world with more UNESCO World Heritage sites per square kilometre than any country on Earth — the Grand Harbour where the Knights of St John held off the Ottoman Empire in the Great Siege of 1565, the Blue Lagoon that still photographs as impossibly turquoise, and the Ħal Saflieni Hypogeum — an underground temple 5,000 years old where the acoustics were deliberately engineered for chanting. Malta: the Mediterranean's most compacted history.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€55",
    bestMonths: "Apr–Jun or Sep–Oct",
    airport: "MLA (Malta International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "4-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "getting-there", emoji: "✈️", label: "Getting There" },
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
        ["Visa Required", "Schengen visa (Malta)"],
        ["Fee", "€80 application fee"],
        ["Apply At", "Malta High Commission or VFS Global"],
        ["Processing", "10–15 working days"],
        ["Validity", "Single or multiple entry, up to 90 days"],
        ["Documents", "Bank statements, hotel bookings, travel insurance, return ticket"],
        ["Note", "Schengen visa valid for all 27 Schengen member states"],
      ],
    },
    {
      flag: "🇪🇺",
      title: "Western Passport Holders (US/UK/EU/AU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["EU Citizens", "No visa required — freedom of movement"],
        ["US/UK/AU/CA", "Visa-free up to 90 days in any 180-day period"],
        ["ETIAS", "EU ETIAS travel authorisation required from late 2026 for non-EU visitors"],
        ["Currency", "Euro (€) — full Eurozone member since 2008"],
        ["Language", "English is an official language — widely spoken everywhere"],
        ["Passport", "Valid for duration of stay; EU passport only needs to be valid"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "€55/day",
      days: [
        {
          day: "Day 1",
          title: "Valletta — The World's Smallest Capital",
          items: [
            "Arrive MLA airport — bus route X4 or 119 to Valletta bus terminus, €1.50",
            "Check into a budget guesthouse or hostel in Valletta or nearby St Julian's (€20–30/night)",
            "Valletta City Gate and Renzo Piano Parliament building — modern architecture free to admire from outside",
            "St John's Co-Cathedral — €15 entry but absolutely mandatory, contains Caravaggio's largest painting (The Beheading of Saint John) and the most ornate Baroque interior in Malta",
            "Upper Barrakka Gardens — free, stunning views over the Grand Harbour and the Three Cities across the water",
            "Cannon salute at noon from the Saluting Battery — free to watch from the gardens above",
            "Dinner in Valletta: pastizzi (savoury pastry stuffed with ricotta or peas) from a bakery, €0.50 each — the national street food",
          ],
          cost: "€50–60 including accommodation, St John's entry, meals",
        },
        {
          day: "Day 2",
          title: "Blue Lagoon, Comino Island",
          items: [
            "Early morning ferry from Ċirkewwa (bus from Valletta, €1.50) to Comino island — return ferry ticket €10–15",
            "Blue Lagoon — one of the Mediterranean's most photographed spots, electric turquoise water over white sand in a sheltered cove",
            "Swim and snorkel in the crystal-clear water — bring your own snorkel gear or hire for €5",
            "Comino is otherwise mostly uninhabited — walk to the old watchtower for panoramic sea views",
            "Packed lunch recommended — a few food kiosks operate but prices are inflated (bring bread, cheese, fruit from Valletta)",
            "Return ferry by 4pm — Comino gets very crowded in July–August, much quieter in shoulder season",
            "Evening: stroll the Three Cities by water taxi from Valletta — €2.50 each way, views of the Grand Harbour at dusk",
          ],
          cost: "€30–40 including ferry, snorkel, food",
        },
        {
          day: "Day 3",
          title: "Mdina — The Silent City",
          items: [
            "Bus from Valletta to Mdina — €1.50, 30 mins",
            "Mdina (Medina) — Malta's medieval capital, inhabited since the Bronze Age, now home to just 300 people — hence 'the Silent City'",
            "Walk the entire walled city — narrow limestone streets, Baroque palaces, St Paul's Cathedral (€5 entry)",
            "Mdina Experience — short film on Malta's history €5, good context before exploring",
            "Lunch at a café outside the city walls — ftira (Maltese bread ring with tuna and olives) €5",
            "Walk down to Rabat (just outside the walls) — St Paul's Catacombs (€5), 4th-century underground burial chambers",
            "Return to Valletta, evening walk along the waterfront at Marsaskala or Sliema",
          ],
          cost: "€30–40 including transport, entry tickets, meals",
        },
        {
          day: "Day 4",
          title: "Gozo Island Day Trip",
          items: [
            "Ferry from Ċirkewwa to Gozo (Mġarr) — 25 mins, €4.65 return",
            "Ggantija Temples — 3,600 BC, older than Stonehenge, one of the oldest free-standing structures on Earth — €10",
            "Victoria (Rabat) — the capital of Gozo, hilltop citadel with views across the entire island — €5 for museum complex",
            "Inland Sea at Dwejra — where the Azure Window rock arch once stood, still dramatic geology and sea caves accessible by boat — €5",
            "Lunch in Victoria: rabbit stew (fenek) is Gozo's signature dish — €10–12 at a local restaurant",
            "Xlendi Bay or Marsalforn for an afternoon swim before the return ferry",
            "Return to Malta, evening dinner in Sliema — grilled fish at a harbourside restaurant €15–18",
          ],
          cost: "€50–65 including ferry, Ggantija, citadel, meals",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120/day",
      days: [
        {
          day: "Day 1",
          title: "Valletta Deep Dive — Grand Masters & Caravaggio",
          items: [
            "Private airport transfer to Valletta boutique hotel (€40–55/night B&B in an old town townhouse)",
            "Valletta walking tour with local guide — €25pp, 2.5 hours covering the Knights of St John, the Great Siege of 1565, and the city's extraordinary Renaissance layout",
            "Grand Master's Palace — €10, the seat of the Knights of St John for 200 years, now the President's residence; Armoury contains 5,000 suits of armour",
            "St John's Co-Cathedral — €15, with guide commentary on the Caravaggio",
            "Upper and Lower Barrakka Gardens for sunset views over the Grand Harbour",
            "Dinner at a Valletta restaurant: slow-cooked rabbit, kinnie (local bitter orange drink), Maltese wine — €30–35pp",
          ],
          cost: "€110–130 including hotel, guided tour, dinner",
        },
        {
          day: "Day 2",
          title: "Three Cities & Grand Harbour Boat Tour",
          items: [
            "Morning Grand Harbour boat tour — €15–20pp, see Valletta, Senglea, Vittoriosa and the great fortifications from the water",
            "Explore Vittoriosa (Birgu) — the oldest of the Three Cities, Fort St Angelo, Inquisitor's Palace (€5)",
            "Senglea — the 'fortified peninsula', Great Siege of Malta Museum (€10, excellent)",
            "Lunch at a waterfront restaurant in Birgu — fresh fish and local wine — €25pp",
            "Afternoon: private speedboat hire for Blue Lagoon run — €50–80pp, less crowded than the public ferry",
            "Swim at Blue Lagoon, return by early evening",
            "Evening: Valletta waterfront drinks — the 'Gut' (Strait Street) for cocktails in a restored interwar bar",
          ],
          cost: "€110–130 including boat tour, Three Cities, speedboat, dinner",
        },
        {
          day: "Day 3",
          title: "Mdina, Hypogeum & Local Food Tour",
          items: [
            "Taxi or private hire to Mdina — €20 each way",
            "Private guided tour of Mdina and Rabat with specialist guide — €50pp, includes catacombs, cathedral, and a private palace visit",
            "Ħal Saflieni Hypogeum — MUST pre-book months in advance online (heritagemalta.mt), maximum 80 visitors per day — €35pp; the world's only prehistoric underground temple, 5,000 years old, built beneath a residential street",
            "Afternoon: Valletta food tour — €45pp, guided walk tasting pastizzi, bigilla (bean dip), ġbejniet (sheep cheese), imqaret (date pastries) and local ftira bread",
            "Dinner at a bistro in Valletta — tasting menu with Maltese produce — €40pp",
          ],
          cost: "€120–140 including transport, Hypogeum, food tour, dinner",
        },
        {
          day: "Day 4",
          title: "Gozo with Ggantija & Diving",
          items: [
            "Private boat charter to Gozo — €80pp, stops at the Blue Lagoon en route",
            "Ggantija Temples with private guide — €25pp, put the 5,600-year history in context",
            "Victoria Citadel — cathedral, museums, and panoramic rooftop views — €8 museum pass",
            "Afternoon: intro dive at a Gozo dive centre (Xlendi or Marsalforn) — €55pp, world-class visibility, wrecks like the HMS Majestic and P29 patrol boat are legendary",
            "Late lunch in Xlendi Bay — seafood pasta and local Ġellewża wine — €25pp",
            "Return to Malta by ferry, farewell dinner in Sliema — €35pp",
          ],
          cost: "€120–140 including private boat, diving, guide, meals",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€280/day",
      days: [
        {
          day: "Day 1",
          title: "Valletta Private Immersion & Grand Harbour Sunset",
          items: [
            "Private transfer from MLA in Mercedes to a 5-star boutique hotel in Valletta — Hotel Rosselli or Iniala Harbour House (€200–350/night)",
            "Private 3-hour art history tour of St John's Co-Cathedral and its two Caravaggio masterpieces — €120pp with art historian",
            "Grand Master's Palace private access with specialist guide — €80pp",
            "Champagne and canapés at Upper Barrakka Gardens for the noon cannon salute — arranged by concierge",
            "Afternoon: private rooftop pool access and spa treatment — €80",
            "Fine dining at Noni or Palazzo Preca — Michelin-level Maltese tasting menu with Maltese wine pairing — €80–100pp",
          ],
          cost: "€280–350 including luxury hotel, private tours, fine dining",
        },
        {
          day: "Day 2",
          title: "Private Yacht — Blue Lagoon & Sea Caves",
          items: [
            "Full-day private yacht charter — €400–600 for the vessel (2–6 people), skipper included",
            "Depart Valletta at 9am, sail to Comino's Blue Lagoon before the day-tripper ferries arrive",
            "Swim, snorkel, and paddle board in the Blue Lagoon — gear provided on yacht",
            "Sail to the caves and grottos of Gozo's western coast — swim through sea arches",
            "Chef-prepared gourmet lunch on board — fresh fish, Maltese bread, antipasti, chilled rosé",
            "Sunset sail back via Valletta's Grand Harbour — the most beautiful way to see the fortifications",
            "Dinner at a Valletta terrace restaurant — €70–80pp",
          ],
          cost: "€280–320 including yacht charter, lunch, dinner",
        },
        {
          day: "Day 3",
          title: "Hypogeum VIP, Mdina & Private Palazzo Dinner",
          items: [
            "Private early-access Ħal Saflieni Hypogeum visit — arranged via specialist tour operator (standard tickets sell out months ahead; concierge services can sometimes secure VIP slots) — €120pp",
            "Private helicopter transfer to Mdina — €200 for the aircraft",
            "Exclusive guided tour of a private Mdina palazzo with the noble family — arranged by luxury tour operator — €150pp",
            "Private lunch in the palazzo garden — Maltese produce, local wine",
            "Afternoon spa and pool at hotel",
            "Exclusive private dinner in a historic Valletta building (private dining experience) — €120pp chef's table",
          ],
          cost: "€300–380 including Hypogeum VIP, helicopter, private palazzo experience",
        },
        {
          day: "Day 4",
          title: "Gozo Luxury & Wreck Diving",
          items: [
            "Private boat to Gozo — €150 for private water taxi",
            "Luxury Gozo villa day use — swim in a private clifftop pool overlooking the Mediterranean",
            "Private dive guide for wreck diving — two dives including the HMS Majestic wreck — €120pp all-inclusive",
            "Gourmet lunch at a Gozo restaurant — rabbit, fresh-caught lampuka (dolphin fish), local honey and cheeses — €50pp",
            "Ggantija Temples private guided tour — €50pp",
            "Private boat return to Malta — sunset cocktails on board",
            "Final luxury dinner: Il-Qanpiena or Bahia — €80pp, Malta's finest",
          ],
          cost: "€280–350 including private boat, diving, villa, fine dining",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–30 (hostel/guesthouse)",
      food: "€12–18 (local restaurants + pastizzi)",
      transport: "€3–5 (public bus network)",
      activities: "€15–20 (St John's, Gozo ferry)",
      total: "€55/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€50–80 (boutique townhouse)",
      food: "€30–45 (restaurant meals + wine)",
      transport: "€15–25 (taxi/private hire)",
      activities: "€30–50 (guided tours, diving)",
      total: "€120/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200–350 (5-star boutique hotel)",
      food: "€70–100 (fine dining)",
      transport: "€80–150 (private car/boat/helicopter)",
      activities: "€80–150 (private guides, yacht, VIP access)",
      total: "€280+/day",
    },
    {
      tier: "🎯 Backpacker",
      accommodation: "€15–20 (hostel dorm)",
      food: "€8–12 (pastizzi + bakeries + supermarket)",
      transport: "€2–3 (bus)",
      activities: "€10 (selective sights)",
      total: "€40/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€80–120 (holiday apartment)",
      food: "€35–50 (restaurants + self-catering)",
      transport: "€10–20 (bus + day taxis)",
      activities: "€30–50 (family tickets)",
      total: "€120/day",
    },
  ],

  mistakes: [
    {
      icon: "🏛️",
      title: "Not booking the Hypogeum months in advance",
      desc: "The Ħal Saflieni Hypogeum is capped at 80 visitors per day to protect the ancient site. It routinely sells out 3–6 months ahead in summer. Book immediately at heritagemalta.mt the moment your travel dates are confirmed — this is the one booking that simply cannot be left to the last minute.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "☀️",
      title: "Going to the Blue Lagoon in peak summer without arriving early",
      desc: "The Blue Lagoon on Comino is one of the most stunning spots in the Mediterranean, but in July–August the ferries dump thousands of tourists on a small beach. Take the first ferry of the day (usually 9am) and leave by 1pm before the hordes arrive — or visit in May or September when it's a paradise.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🚌",
      title: "Underestimating Malta's bus network",
      desc: "Malta's public buses (€1.50 any journey, day passes available) connect everywhere on the main island including Mdina, the Ċirkewwa ferry terminal, and Marsaxlokk. Many visitors hire cars unnecessarily — parking in Valletta is nearly impossible, and the bus is genuinely excellent.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🤿",
      title: "Skipping Gozo's diving",
      desc: "Malta has some of the best diving in the Mediterranean — extraordinary visibility (30–45m on good days), WWII wrecks, and sea caves. Even novice snorkellers can see dramatic underwater scenery at sites like the Blue Grotto and Xlendi Cave. Gozo diving in particular is world-class.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "💸",
      title: "Eating only in touristy Valletta restaurants",
      desc: "Valletta restaurants can be pricey. The same quality food costs 30–40% less in nearby Rabat, Mosta, or Marsaxlokk (the fishing village Sunday market). Marsaxlokk is particularly good for fresh fish — the Sunday market is one of the best in the Mediterranean.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "🎫",
      title: "Buy the Heritage Malta Multi-Site Pass",
      desc: "Heritage Malta's multi-site pass (around €50 for adults) covers entry to Ħal Saflieni Hypogeum, Ggantija, the Tarxien Temples, Mnajdra, and several museums. If you plan to visit more than 3 sites it's excellent value — and it includes some of the most important prehistoric sites on Earth.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🌅",
      title: "Watch the Grand Harbour from Valletta at golden hour",
      desc: "Upper Barrakka Gardens at sunset — with the Three Cities across the water turning amber and the limestone fortifications glowing — is one of the most magnificent city views in Europe. It's completely free. The noon cannon salute from the Saluting Battery below is also free to watch from the gardens.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🐟",
      title: "Try lampuka (dolphin fish) in season — October–November",
      desc: "Lampuka is Malta's most beloved seasonal fish, available only in autumn. Order it baked with tomatoes, capers, and olives (lampuki pie — aljotta) at any traditional restaurant. The Marsaxlokk Sunday fish market is the best place to see (and buy) fresh local catch.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🏘️",
      title: "Walk the Three Cities — Vittoriosa, Senglea, Cospicua",
      desc: "Most visitors go straight to Valletta and miss the Three Cities across the Grand Harbour — which actually predate Valletta and contain Fort St Angelo, the Inquisitor's Palace, and some of Malta's most authentic neighbourhood streets. Take the cheap water taxi (dgħajsa) from Valletta's waterfront — a 5-minute crossing that feels like stepping back centuries.",
      color: "border-indigo-200 bg-indigo-50",
    },
  ],

  faqs: [
    {
      q: "How many days do you need in Malta?",
      a: "Four days is ideal for covering the main island of Malta (Valletta, Mdina, Blue Lagoon, Three Cities) plus a day trip to Gozo. If you add the Hypogeum and want unhurried time in Gozo (it genuinely rewards a night's stay), five days is better. Three days is workable but rushed.",
    },
    {
      q: "Is Malta worth visiting or is it too small?",
      a: "Malta is one of the most rewarding destinations in Europe precisely because of its small size — you can cover an extraordinary amount of history, culture, and natural beauty in four days. The density of UNESCO heritage, prehistoric temples, Baroque architecture, and Mediterranean beaches is unmatched anywhere of comparable size. It's also one of the safest, most English-friendly destinations in Europe.",
    },
    {
      q: "What is the best time to visit Malta?",
      a: "April–June (warm, not scorching, off-peak prices) and September–October (sea still warm, crowds gone, lampuka season) are ideal. July–August is very hot (35°C+) and extremely crowded at the Blue Lagoon. Winter is mild (15–18°C) and very quiet — good for history and culture but not swimming. The Carnival in February and the September regatta are exceptional events.",
    },
    {
      q: "Can you do Malta without a car?",
      a: "Absolutely. Malta's public bus network (operated by Malta Public Transport) covers the entire island with reliable, cheap €1.50 flat-fare buses. The ferry to Comino and Gozo are easy to reach by bus. Valletta, Mdina, and the Three Cities are all walkable. A car is useful only for independent access to the very south of the island (Marsaxlokk area) or for Gozo.",
    },
  ],

  combineWith: ["Sicily", "Rome", "Barcelona", "Athens", "Dubrovnik"],
  relatedSlugs: [
    "sicily-7-days",
    "rome-4-days",
    "athens-3-days",
    "dubrovnik-4-days",
    "santorini-4-days",
  ],

  galleryQuery: "malta valletta grand harbour blue lagoon gozo mediterranean",
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function MaltaPage() {
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
