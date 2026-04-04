import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Quebec City in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Plan your perfect Quebec City trip with our 3-day guide covering budget, mid-range, and luxury options. Château Frontenac, Vieux-Québec, Winter Carnival, Montmorency Falls, and maple syrup everything.",
  keywords: [
    "Quebec City travel guide",
    "Quebec City 3 days itinerary",
    "Vieux-Québec UNESCO",
    "Château Frontenac",
    "Quebec Winter Carnival",
    "Montmorency Falls",
    "Quebec City budget travel",
    "Old Quebec things to do",
    "Canada travel 2026",
  ],
  openGraph: {
    title: "Quebec City in 3 Days: Complete Travel Guide 2026",
    description:
      "North America's only walled city, a fairy-tale castle above the St Lawrence, maple crêpes in 200-year-old lanes — the only Quebec City guide you need.",
    url: "https://incredibleitinerary.com/blog/quebec-city-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618047-3c4e4a81f20b?w=1200",
        width: 1200,
        height: 630,
        alt: "Quebec City Château Frontenac castle overlooking St Lawrence River in winter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quebec City in 3 Days: Complete Travel Guide 2026",
    description:
      "Budget to luxury 3-day Quebec City itinerary — Château Frontenac, walled city, Winter Carnival, and maple everything.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/quebec-city-3-days",
  },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Quebec City in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 3-day Quebec City travel guide covering budget, mid-range, and luxury itineraries, visa requirements, Winter Carnival, and insider tips for North America's most European city.",
    image: "https://images.unsplash.com/photo-1558618047-3c4e4a81f20b?w=1200",
    author: { "@type": "Organization", name: "IncredibleItinerary" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/quebec-city-3-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Quebec City 3 Days",
        item: "https://incredibleitinerary.com/blog/quebec-city-3-days",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Quebec City",
    description:
      "Quebec City is the only walled city north of Mexico — a UNESCO World Heritage city where Château Frontenac presides over the St Lawrence River, maple syrup flows into everything, and a Winter Carnival makes February magical.",
    url: "https://incredibleitinerary.com/blog/quebec-city-3-days",
    touristType: ["Culture", "History", "Gastronomy", "Winter Sports"],
    geo: { "@type": "GeoCoordinates", latitude: 46.8139, longitude: -71.2082 },
    containedInPlace: { "@type": "Country", name: "Canada" },
  },
];

/* ── Page Data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Quebec City",
  country: "Canada",
  countryFlag: "🇨🇦",
  slug: "quebec-city-3-days",
  heroQuery: "quebec city old town chateau frontenac winter snow canada",
  heroAlt: "Quebec City Château Frontenac castle overlooking St Lawrence River in winter",
  category: "North America",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Stand inside the only walled city north of Mexico and look up at Château Frontenac — a turreted castle so improbably dramatic that it looks like someone placed a Loire Valley château on top of a cliff above the St Lawrence River on a dare. Around you, the narrow streets of Vieux-Québec carry the smell of crêpes au sucre d'érable from a crêperie that has been making them in the same stone building for 200 years. In February, the city hosts a Winter Carnival where the official mascot is a giant friendly snowman named Bonhomme and ice sculptures line every boulevard. Quebec City is, by unanimous agreement, North America's most European city — and it has absolutely no intention of apologising for it.",

  stats: {
    duration: "3 Days",
    budgetFrom: "CAD $75 (~$55)",
    bestMonths: "Dec–Mar (Winter Carnival) or Jun–Aug",
    airport: "YQB",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Choose Your Plan" },
    { id: "itineraries", emoji: "📅", label: "3-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "getting-around", emoji: "🚶", label: "Getting Around" },
    { id: "tours", emoji: "🎟️", label: "Tours & Experiences" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Canadian Tourist Visa (TRV) — mandatory"],
        ["Apply Via", "IRCC online portal (canada.ca)"],
        ["Biometrics", "CAD $85 (fingerprints + photo at VAC)"],
        ["Visa Fee", "CAD $100 per application"],
        ["Processing", "2–8 weeks (apply 3+ months ahead)"],
        ["Key Requirement", "Strong home-country ties (job, property, family)"],
        ["Documents", "Bank statements, ITR, employment letter, travel history"],
        ["Validity", "Single or multiple entry, up to 10 years"],
      ],
    },
    {
      flag: "🌍",
      title: "US / Western Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["USA", "No visa required — valid passport only"],
        ["UK / EU / AU", "eTA required — CAD $7, apply online before flying"],
        ["eTA Processing", "Usually minutes; allow up to 72 hours"],
        ["eTA Validity", "5 years or until passport expires"],
        ["Entry", "Border officers may ask for itinerary & accommodation proof"],
        ["Tip", "eTA links to your passport — if you renew your passport, reapply"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Explorer",
      sub: "CAD $75/day",
      days: [
        {
          day: "Day 1",
          title: "Vieux-Québec & the Lower Town",
          items: [
            "Walk through the fortification walls into Haute-Ville (Upper Town) — free, one of a kind in North America",
            "Photograph Château Frontenac from the Dufferin Terrace boardwalk (free, iconic view)",
            "Take the funicular down to Basse-Ville (Lower Town) — CAD $4 one-way or walk the steep Breakneck Stairs for free",
            "Explore Rue du Petit-Champlain — the narrow pedestrian street with artisan shops (browsing is free)",
            "Crêpe au sucre d'érable (maple syrup crêpe) from a street crêperie — CAD $6",
            "Dinner at a casual Québécois table d'hôte (set menu) restaurant — many around CAD $20–25",
          ],
          cost: "CAD $45–60",
        },
        {
          day: "Day 2",
          title: "Plains of Abraham & Montmorency Falls",
          items: [
            "Walk the Plains of Abraham — the historic 1759 battlefield is now a massive urban park (free)",
            "Visit the Discovery Pavilion for battlefield history — CAD $10",
            "Bus #800 from downtown to Montmorency Falls Park — bus CAD $3.50",
            "View Montmorency Falls from the free lookout — at 83m, they're taller than Niagara",
            "Walk the suspension bridge above the falls — CAD $11, worth the vertigo",
            "Return to the city, dinner in Saint-Jean-Baptiste neighbourhood (~CAD $18)",
          ],
          cost: "CAD $45–60",
        },
        {
          day: "Day 3",
          title: "Île d'Orléans & Departure",
          items: [
            "Bus or hitchhike to Île d'Orléans — a farming island in the St Lawrence accessible by bridge (free to walk on)",
            "Buy strawberries, cidre, and maple products directly from farm stands (CAD $15)",
            "Walk or cycle the island perimeter road — bicycles can be rented on the island for CAD $25",
            "Return to Quebec City for a farewell bowl of soupe aux pois (pea soup) — a Québécois staple (~CAD $10)",
            "Final walk on the Dufferin Terrace at dusk with the château lit above",
            "Bus or taxi to YQB airport",
          ],
          cost: "CAD $50–70",
        },
      ],
    },
    {
      label: "Mid-Range Explorer",
      sub: "CAD $160/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Immersion",
          items: [
            "Check into a charming auberge (inn) inside the walled city (~CAD $140/night)",
            "Guided walking tour of Vieux-Québec including the fortifications (~CAD $25)",
            "Château Frontenac lobby and terrace visit — iconic photos; afternoon tea inside (~CAD $40)",
            "Explore Rue du Petit-Champlain for artisan maple products and Québécois craft",
            "Dinner at a celebrated restaurant in the old city featuring Quebec game — caribou, bison (~CAD $65)",
          ],
          cost: "CAD $150–180",
        },
        {
          day: "Day 2",
          title: "Falls, History & Gastronomy",
          items: [
            "Taxi to Montmorency Falls Park (CAD $20) — see the falls, cross the suspension bridge, walk the canyon trail",
            "Return to Haute-Ville, visit the Musée National des Beaux-Arts du Québec — CAD $22",
            "Plains of Abraham bike tour with a guide (~CAD $45 including bicycle)",
            "Late afternoon cidre and cheese tasting at a local Quebec cave à fromage (~CAD $25)",
            "Dinner at Aux Anciens Canadiens restaurant in a 17th-century house (~CAD $65)",
          ],
          cost: "CAD $155–200",
        },
        {
          day: "Day 3",
          title: "Île d'Orléans & Farewell",
          items: [
            "Guided day trip to Île d'Orléans — farm visits, maple sugar shack, church tour (~CAD $60)",
            "Artisan cider tasting at the island's celebrated orchards (~CAD $15)",
            "Return for lunch at a Saint-Roch neighbourhood bistro — Quebec's coolest district (~CAD $35)",
            "Browse Saint-Roch's independent galleries and design shops",
            "Farewell dinner at a wine bar in the old city (~CAD $55)",
          ],
          cost: "CAD $145–185",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "CAD $350/day",
      days: [
        {
          day: "Day 1",
          title: "Château Arrival & Haute Cuisine",
          items: [
            "Check into Fairmont Le Château Frontenac — the most photographed hotel in the world, from CAD $400/night",
            "Private guided tour of the fortress walls and old city with a historian (~CAD $150)",
            "Afternoon tea at the Château Frontenac's elegant dining room (~CAD $60)",
            "Spa evening at the Château's spa with St Lawrence River views",
            "Dinner at Légende par René Lévesque — Quebec's finest tasting menu (~CAD $200)",
          ],
          cost: "CAD $700–900",
        },
        {
          day: "Day 2",
          title: "Montmorency, Plains & Private Experiences",
          items: [
            "Private chauffeured excursion to Montmorency Falls — helicopter option available (~CAD $350)",
            "VIP access to a Plains of Abraham private dawn walk with a military historian",
            "Gourmet lunch at a riverside auberge overlooking the St Lawrence (~CAD $80)",
            "Musée National des Beaux-Arts private tour after hours (~CAD $150)",
            "Dinner at a nominated chef's table in the old city (~CAD $200)",
          ],
          cost: "CAD $750–950",
        },
        {
          day: "Day 3",
          title: "Île d'Orléans Private & Departure",
          items: [
            "Private driver and guide to Île d'Orléans — exclusive farm visits, private maple sugar harvest experience",
            "Artisan cidre pairing lunch at the island's finest orchard (~CAD $120 with pairings)",
            "Return for a final Château Frontenac brunch before departure",
            "Luxury transfer to YQB airport",
            "Depart with vacuum-packed Quebec cheeses, artisan cidre, and maple products",
          ],
          cost: "CAD $550–700",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "Hostel / gîte CAD $35–45",
      food: "Crêperies & table d'hôte CAD $20",
      transport: "Walk + bus CAD $7",
      activities: "Parks & free sights CAD $10",
      total: "CAD $75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "Old city auberge CAD $140",
      food: "Bistros & markets CAD $55",
      transport: "Taxi + walking CAD $20",
      activities: "Museums & guided tours CAD $40",
      total: "CAD $160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "Château Frontenac CAD $400+",
      food: "Tasting menus & wine CAD $180",
      transport: "Private chauffeur CAD $80",
      activities: "Private tours & helicopter CAD $200",
      total: "CAD $350+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "Auberge de jeunesse CAD $28",
      food: "Crêpes, poutine & dep stores CAD $12",
      transport: "Walk everywhere CAD $3",
      activities: "Plains & walls (free) CAD $5",
      total: "CAD $50/day",
    },
    {
      tier: "❄️ Winter Carnival",
      accommodation: "Hotel near Carnaval CAD $180",
      food: "Festival food & restaurants CAD $60",
      transport: "Walk (compact city) CAD $5",
      activities: "Carnival pass CAD $20–30",
      total: "CAD $170/day",
    },
  ],

  mistakes: [
    {
      icon: "🗓️",
      title: "Only Visiting in Summer and Missing Winter Magic",
      desc: "Quebec City in winter — especially during the February Carnaval — is one of the most magical experiences in North America. The snow-covered old city, the ice sculptures, the toboggan runs on the Dufferin Terrace, and Bonhomme the snowman mascot are genuinely unforgettable. Summer is beautiful; winter is extraordinary.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏨",
      title: "Staying Outside the Walled City",
      desc: "Hotels inside Vieux-Québec are more expensive but the experience of waking up inside a 400-year-old fortified city and walking to the Dufferin Terrace at dawn is worth every cent. The city is compact enough that one or two nights inside the walls transforms the trip.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍁",
      title: "Ignoring the Maple Sugar Shack Experience",
      desc: "Maple syrup in Quebec isn't a condiment — it's a culture. A sugar shack (cabane à sucre) visit in March–April for the maple harvest season, with taffy poured on snow and traditional Québécois food, is a rite of passage that most tourists skip entirely.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚌",
      title: "Missing Île d'Orléans",
      desc: "The island in the St Lawrence River, connected to Quebec City by a single bridge, feels like the province transported back to 1950. Farm stands, church steeples, apple orchards, and cidre — it's just 15 minutes from the old city and most visitors never go.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💧",
      title: "Underestimating Montmorency Falls",
      desc: "Most tourists go to see Niagara Falls and forget that Montmorency Falls, 15 minutes from Quebec City's old town, is actually 30 metres taller. The suspension bridge above the falls and the canyon walk are exhilarating and far less crowded than Niagara.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🎢",
      title: "Ride the Toboggan Slide on Dufferin Terrace in Winter",
      desc: "The historic toboggan slide on the Dufferin Terrace beside Château Frontenac has operated since the 1880s. In winter, it's one of the most Canadian experiences imaginable — CAD $3 a ride, with the château glowing above you.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🧭",
      title: "Walk the Fortification Walls at Sunrise",
      desc: "The 4.6 km circuit of Quebec City's intact fortification walls is free to walk and takes about 90 minutes. At sunrise, with frost on the cannons and the St Lawrence glittering below, it is genuinely unlike anywhere else in the Americas.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍎",
      title: "Buy Quebec Cidre at Île d'Orléans",
      desc: "The island's artisan ice cider (cidre de glace) is a Quebec invention — apple cider fermented from frozen apples, intensely flavoured and delicious. It's available in Quebec LCBO stores but freshest bought directly from island producers.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌡️",
      title: "Dress in Layers for Winter Visits",
      desc: "Quebec City in January averages -14°C with windchill regularly hitting -25°C. Thermal base layers, a Canada Goose-grade parka, wool socks, and waterproof boots are not optional — they are survival. The old city is compact and walkable even in extreme cold.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  faqs: [
    {
      q: "Is Quebec City worth visiting in winter?",
      a: "Absolutely — many travellers consider winter the best time to visit. The snow-covered Château Frontenac and cobblestone streets look extraordinary, the Winter Carnival (early February) is a bucket-list event, and the crowds are far smaller than summer. Just dress very warmly.",
    },
    {
      q: "Do I need to speak French in Quebec City?",
      a: "French is the primary language and most locals prefer it, but English is widely spoken in the tourist areas of Vieux-Québec. Opening with 'Bonjour' is important etiquette. Unlike Montreal, fewer service staff are fluent English speakers, especially in smaller restaurants — a French phrasebook helps.",
    },
    {
      q: "How do I get from Montreal to Quebec City?",
      a: "The VIA Rail train from Montreal Centrale to Quebec City (Gare du Palais) takes about 3.5 hours and costs CAD $30–90 depending on booking time. It's scenic along the St Lawrence. Buses (Orléans Express) take about 3 hours for CAD $25–50. Driving is 2.5 hours on the A-20.",
    },
    {
      q: "When is the Quebec Winter Carnival?",
      a: "The Carnaval de Québec typically runs for 17 days in late January and early February — it's one of the world's largest winter festivals. Highlights include the ice palace, night parades, snow sculpture competitions, and dogsled races. A festival pass costs CAD $20–30.",
    },
  ],

  combineWith: ["Montreal", "Charlevoix", "Ottawa"],
  relatedSlugs: ["montreal-4-days", "toronto-4-days", "charlevoix-weekend"],
  galleryQuery: "quebec city chateau frontenac vieux-quebec winter carnival",
};

/* ── Page Component ──────────────────────────────────────────────────────── */
export default function QuebecCityPage() {
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
