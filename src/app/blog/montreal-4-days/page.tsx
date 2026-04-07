import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Montreal 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Montreal trip in 4 days. Plan your perfect Montreal trip with our 4-day itinerary covering budget, mid-range, and luxury options. Notre-Dame.",
  keywords: [
    "Montreal travel guide",
    "Montreal 4 days itinerary",
    "Montreal budget travel",
    "Old Montreal things to do",
    "Notre-Dame Basilica Montreal",
    "Schwartz's deli Montreal",
    "Montreal bagels",
    "Montreal Jazz Festival",
    "Canada travel 2026",
  ],
  openGraph: {
    title: "Montreal 4-Day Itinerary 2026: Trip Planner",
    description:
      "From Notre-Dame Basilica's 10,000-star ceiling to midnight smoked meat at Schwartz's — the only Montreal guide you need.",
    url: "https://incredibleitinerary.com/blog/montreal-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
        width: 1200,
        height: 630,
        alt: "Montreal Old Port with Notre-Dame Basilica illuminated at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montreal 4-Day Itinerary 2026: Trip Planner",
    description:
      "Budget to luxury 4-day Montreal itinerary — Old Port, bagels, smoked meat, and bilingual magic.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/montreal-4-days",
  },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Montreal in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 4-day Montreal travel guide covering budget, mid-range, and luxury itineraries, visa requirements, budget breakdown, and insider tips.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/montreal-4-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Montreal 4 Days", item: "https://incredibleitinerary.com/blog/montreal-4-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Montreal",
    description:
      "Montreal is Canada's most European city — a bilingual metropolis where French café culture collides with North American energy, world-class jazz, legendary bagels, and smoked meat sandwiches.",
    url: "https://incredibleitinerary.com/blog/montreal-4-days",
    touristType: ["Culture", "Gastronomy", "Architecture", "Festivals"],
    geo: { "@type": "GeoCoordinates", latitude: 45.5017, longitude: -73.5673 },
    containedInPlace: { "@type": "Country", name: "Canada" },
  },
];

/* ── Page Data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Montreal",
  country: "Canada",
  countryFlag: "🇨🇦",
  slug: "montreal-4-days",
  heroQuery: "montreal old port notre dame basilica canada night",
  heroAlt: "Montreal Old Port with Notre-Dame Basilica illuminated at night",
  category: "North America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Step inside Notre-Dame Basilica and tilt your head up at a ceiling of 10,000 hand-painted stars glowing electric blue — then walk ten minutes to Schwartz's Deli and wait in a midnight queue with locals for a smoked meat sandwich that has no equal on Earth. Montreal is the city where French café culture and North American energy argue productively: two languages on every sign, two bagel schools (St-Viateur versus Fairmount) locked in a century-old war, and a Jazz Festival that simply takes over the streets every June. Canada's most European city will leave you genuinely confused about which continent you're on.",

  stats: {
    duration: "4 Days",
    budgetFrom: "CAD $80 (~$59)",
    bestMonths: "Jun–Sep (summer) or Dec–Jan (winter festivals)",
    airport: "YUL",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Choose Your Plan" },
    { id: "itineraries", emoji: "📅", label: "4-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "getting-around", emoji: "🚇", label: "Getting Around" },
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
        ["Entry", "Border officers may ask itinerary & accommodation proof"],
        ["Tip", "eTA is linked to your passport — if you renew, reapply"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Explorer",
      sub: "CAD $80/day",
      days: [
        {
          day: "Day 1",
          title: "Old Montreal & the Waterfront",
          items: [
            "Walk the cobblestones of Vieux-Montréal (free) from Place Jacques-Cartier to the Old Port",
            "Admire Notre-Dame Basilica exterior for free — interior entry CAD $15 but worth every cent",
            "Grab a Montreal-style bagel from St-Viateur Bagel ($1.50) — sesame, fresh from the wood-fired oven",
            "Picnic at Parc du Bassin Bonsecours overlooking the St Lawrence River",
            "Evening walk along the Old Port Promenade — free and stunning at sunset",
            "Dinner at a BYOB (apportez votre vin) restaurant — save on wine, pay ~CAD $15 for food",
          ],
          cost: "CAD $35–45",
        },
        {
          day: "Day 2",
          title: "Plateau-Mont-Royal & Mont Royal",
          items: [
            "Hike up Mont Royal Park — free, 45 min walk from the Plateau, city views at the summit",
            "Stop at Lac des Castors (Beaver Lake) and enjoy the parkland",
            "Descend to Plateau-Mont-Royal for Rue Saint-Laurent street food exploration",
            "Grab a poutine (fries, cheese curds, gravy) at a local casse-croûte for CAD $10",
            "Browse the Plateau's colourful murals and independent bookshops (free)",
            "Cheap dinner at a Vietnamese pho spot on Rue Saint-Denis (~CAD $12)",
          ],
          cost: "CAD $30–40",
        },
        {
          day: "Day 3",
          title: "Mile End & Jean-Talon Market",
          items: [
            "Morning bagel debate: Fairmount Bagel vs St-Viateur — try both (CAD $3 total)",
            "Explore Mile End neighbourhood — Leonard Cohen's old stomping ground, free to wander",
            "Take the Metro (CAD $3.75/ride) to Jean-Talon Market — Quebec's largest public market",
            "Sample maple products, local cheeses, and seasonal produce at market stalls",
            "Afternoon at Parc Jarry — read, relax, watch locals play pétanque",
            "Evening at a comedy show at Comedy Nest (CAD $15–20) or free outdoor performance in summer",
          ],
          cost: "CAD $30–40",
        },
        {
          day: "Day 4",
          title: "Underground City & Departure",
          items: [
            "Explore RESO (Underground City) — 33 km of tunnels connecting malls, Metro stations, and offices (free)",
            "Visit Musée d'art contemporain de Montréal on a Sunday morning (reduced or free admission some days)",
            "Final smoked meat sandwich at Schwartz's Deli — budget ~CAD $15, worth the iconic queue",
            "Walk through Chinatown for cheap dim sum lunch (CAD $10)",
            "Last stop: grab a Montreal-style hot dog (steamé) from a local dep (corner store)",
            "Metro to YUL airport — CAD $10 fare",
          ],
          cost: "CAD $35–50",
        },
      ],
    },
    {
      label: "Mid-Range Explorer",
      sub: "CAD $170/day",
      days: [
        {
          day: "Day 1",
          title: "Old Montreal in Style",
          items: [
            "Check into a boutique hotel in Vieux-Montréal (CAD $150–200/night)",
            "Notre-Dame Basilica interior + AURA immersive light show (CAD $30–50) — book in advance",
            "Guided walking tour of Old Montreal (~CAD $25) with a bilingual local guide",
            "Dinner at Olive & Gourmando or Liverpool House — Québec comfort food elevated (~CAD $45)",
            "Evening stroll along Rue de la Commune with a glass of wine from a nearby bar",
          ],
          cost: "CAD $150–180",
        },
        {
          day: "Day 2",
          title: "Mont Royal & The Plateau",
          items: [
            "Rent a bixi (bike share) for CAD $12/day and cycle through the Plateau to Mont Royal",
            "Summit Mont Royal for panoramic city views — bring a picnic from a Plateau bakery",
            "Marché Atwater for gourmet Quebec cheeses, charcuterie, and artisan bread (CAD $30)",
            "Afternoon at Musée des beaux-arts de Montréal (permanent collection free, special exhibits CAD $25)",
            "Dinner at one of the Plateau's acclaimed BYOB restaurants with a great bottle (~CAD $60 total)",
          ],
          cost: "CAD $160–190",
        },
        {
          day: "Day 3",
          title: "Mile End, Rosemont & Food Scene",
          items: [
            "Brunch at Lawrence or Arthurs Nosh Bar in Mile End (~CAD $25)",
            "Explore the Mile End's indie boutiques, record stores, and café culture",
            "Afternoon food tour of the Plateau and Mile End (~CAD $70) — includes 6+ tastings",
            "Visit the Musée Redpath (natural history, free) or Stewart Museum (CAD $15)",
            "Cocktails at a rooftop bar in the Golden Square Mile (CAD $20)",
            "Dinner at a trendy brasserie on Rue Saint-Laurent (~CAD $50)",
          ],
          cost: "CAD $160–200",
        },
        {
          day: "Day 4",
          title: "Daytrip or Cultural Deep Dive",
          items: [
            "Option A: Day trip to Mont-Tremblant (2h drive) for hiking or skiing — car rental CAD $80",
            "Option B: Pointe-à-Callière museum (Montreal's archaeology) — CAD $25",
            "Jean-Talon Market for gourmet Quebec products to take home",
            "Final lunch at a celebrated smoked meat institution — Schwartz's or The Main (~CAD $20)",
            "Explore the Old Port's Bonsecours Market for artisan Quebec souvenirs",
            "Airport transfer by taxi or Uber (~CAD $50)",
          ],
          cost: "CAD $150–200",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "CAD $380/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Arrival & Vieux-Montréal",
          items: [
            "Check into Hotel Le Saint-Sulpice or W Montreal (from CAD $350/night)",
            "Private guided tour of Vieux-Montréal with a historian (~CAD $150)",
            "Notre-Dame Basilica VIP access + AURA light show private viewing",
            "Dinner at Toqué! — arguably Canada's best restaurant, tasting menu ~CAD $180/person",
            "After-dinner drinks at a rooftop bar overlooking the illuminated Basilica",
          ],
          cost: "CAD $550–700",
        },
        {
          day: "Day 2",
          title: "Art, Culture & Michelin-Level Dining",
          items: [
            "Private chef-led morning market tour of Jean-Talon (~CAD $200)",
            "Musée des beaux-arts with private docent, full collection access (~CAD $50)",
            "Spa afternoon at Bota Bota (floating spa on a boat in the Old Port) — from CAD $60",
            "Pre-dinner cocktails at a mixology bar in Griffintown",
            "Dinner at Joe Beef or Le Vin Papillon (~CAD $150/person with wine)",
          ],
          cost: "CAD $500–650",
        },
        {
          day: "Day 3",
          title: "Helicopter, Festivals & Gastronomy",
          items: [
            "Helicopter tour over Montreal island and the St Lawrence (~CAD $300/person)",
            "Champagne brunch at the Ritz-Carlton Montreal (~CAD $120)",
            "Exclusive private food tour of Mile End and the Plateau with a local food writer",
            "Cirque du Soleil show (if in season) or Orchestre symphonique de Montréal concert",
            "Tasting menu dinner at a nominated chef's table experience (~CAD $200)",
          ],
          cost: "CAD $700–900",
        },
        {
          day: "Day 4",
          title: "Mont-Tremblant & Departure",
          items: [
            "Chauffeured transfer to Mont-Tremblant resort (2 hours north)",
            "Spa morning at the Tremblant spa or skiing/hiking depending on season",
            "Lunch at a mountain-view restaurant in Tremblant village",
            "Return to Montreal for airport transfer in a luxury vehicle",
            "Departure from YUL with Quebec maple products and artisan gifts",
          ],
          cost: "CAD $600–800",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "Hostel dorm CAD $35–50",
      food: "Bagels, poutine, BYOB CAD $20",
      transport: "Metro/walk CAD $8",
      activities: "Parks & free sights CAD $10",
      total: "CAD $80/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "Boutique hotel CAD $150",
      food: "Brasseries & markets CAD $60",
      transport: "Bixi + Metro CAD $15",
      activities: "Museums & tours CAD $40",
      total: "CAD $170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "Design hotel CAD $350+",
      food: "Fine dining & wine CAD $150",
      transport: "Taxi/Uber CAD $40",
      activities: "Private tours & shows CAD $150",
      total: "CAD $380+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "HI Montreal hostel CAD $28",
      food: "Dep store & Fairmount bagels CAD $12",
      transport: "Walk everywhere CAD $4",
      activities: "Parks & street life CAD $5",
      total: "CAD $55/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "Airbnb in Plateau CAD $180",
      food: "Casual restaurants CAD $80",
      transport: "Metro + car CAD $25",
      activities: "Museums + Biodome CAD $60",
      total: "CAD $200/day",
    },
  ],

  mistakes: [
    {
      icon: "🥯",
      title: "Not Trying Both Bagel Institutions",
      desc: "Fairmount Bagel (open 24/7) and St-Viateur are 5 minutes apart. Eating only one is a traveller sin. They're genuinely different — buy both and taste the difference.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎭",
      title: "Skipping the AURA Light Show Inside Notre-Dame",
      desc: "The free exterior is beautiful, but the AURA immersive light show inside the Basilica is a completely different and stunning experience. Book it online — it sells out.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌨️",
      title: "Underestimating Montreal Winters",
      desc: "January lows hit -20°C with windchill. But the Underground City (RESO) makes winter navigation genius — if you stay connected to it, you can go entire days without outdoor exposure.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍷",
      title: "Paying Full Price for Wine at BYOB Restaurants",
      desc: "Montreal's BYOB (apportez votre vin) culture is a gift. Buy a good bottle from the SAQ (government liquor store) before dinner and save significantly — many great restaurants charge zero corkage.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗣️",
      title: "Only Speaking English or Assuming Everyone Speaks It",
      desc: "A simple 'Bonjour' before switching to English goes a very long way in Montreal. Most locals are fluently bilingual, but a greeting in French is genuinely appreciated and changes interactions.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🎵",
      title: "Time Your Visit for Jazz Fest",
      desc: "The Montreal International Jazz Festival (late June to early July) fills the downtown streets with free outdoor concerts. Hundreds of shows are completely free — this is one of the best free music events on Earth.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚇",
      title: "Get a Weekly OPUS Card",
      desc: "The OPUS card loads all Metro rides. A 7-day unlimited pass costs CAD $29.25 and pays off if you use the Metro more than 8 times. The Metro is efficient, clean, and safe until after midnight.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏔️",
      title: "Climb Mont Royal at Sunrise",
      desc: "The summit of Mont Royal at sunrise — with the city spread below and the St Lawrence glinting in the distance — is entirely free and genuinely one of the most beautiful urban views in North America.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🧀",
      title: "Buy Quebec Cheese at Atwater Market",
      desc: "Marché Atwater carries Quebec artisan cheeses unavailable almost anywhere else in the world. Cheeses like Oka, Riopelle de l'Isle, and Le Cendrillon are worth taking home vacuum-packed.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  faqs: [
    {
      q: "Is Montreal safe for tourists?",
      a: "Yes, Montreal is one of Canada's safest major cities. The tourist areas of Vieux-Montréal, the Plateau, and Mile End are extremely safe day and night. Standard urban awareness applies after midnight in quieter areas.",
    },
    {
      q: "Do I need to speak French to visit Montreal?",
      a: "No. Virtually all Montrealers in the tourist industry are bilingual. That said, opening with 'Bonjour' before English is a sign of respect that locals genuinely appreciate. Menus in tourist areas are usually bilingual.",
    },
    {
      q: "What is the best neighbourhood to stay in Montreal?",
      a: "Vieux-Montréal is the most atmospheric (and expensive). The Plateau-Mont-Royal and Mile End are popular with younger travellers for their cafe culture and walkability. Downtown is convenient for the Metro and major sights.",
    },
    {
      q: "When is the Montreal Jazz Festival?",
      a: "The Festival International de Jazz de Montréal runs for 10–11 days from late June into early July. Most outdoor concerts on Quartier des Spectacles are completely free. It draws over 2 million visitors annually.",
    },
  ],

  combineWith: ["Quebec City", "Toronto", "Ottawa"],
  relatedSlugs: ["toronto-4-days", "quebec-city-3-days", "ottawa-weekend"],
  galleryQuery: "montreal old port plateau mont royal notre dame",
};

/* ── Page Component ──────────────────────────────────────────────────────── */
export default function MontrealPage() {
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
