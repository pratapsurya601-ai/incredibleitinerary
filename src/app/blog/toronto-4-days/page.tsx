import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Toronto in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "The ultimate 4-day Toronto itinerary — CN Tower, Kensington Market, Distillery District, Niagara Falls day trip, and the world's most multicultural food scene. Budget, mid-range & luxury plans.",
  keywords: [
    "Toronto travel guide",
    "Toronto 4 days itinerary",
    "Toronto budget travel",
    "CN Tower Toronto",
    "Kensington Market Toronto",
    "Distillery District Toronto",
    "Niagara Falls day trip from Toronto",
    "Toronto things to do",
    "Canada travel 2026",
  ],
  openGraph: {
    title: "Toronto in 4 Days: Complete Travel Guide 2026",
    description:
      "Stand on the CN Tower glass floor 447m up, eat your way through Kensington Market, and day-trip to Niagara Falls. The only Toronto guide you need.",
    url: "https://incredibleitinerary.com/blog/toronto-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1200",
        width: 1200,
        height: 630,
        alt: "Toronto CN Tower skyline with Lake Ontario in foreground",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toronto in 4 Days: Complete Travel Guide 2026",
    description:
      "Budget to luxury 4-day Toronto itinerary — CN Tower, Kensington Market, Distillery District, and Niagara Falls.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/toronto-4-days",
  },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Toronto in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 4-day Toronto travel guide covering budget, mid-range, and luxury itineraries, visa requirements, Niagara Falls day trip, and insider food tips.",
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1200",
    author: { "@type": "Organization", name: "IncredibleItinerary" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/toronto-4-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Toronto 4 Days", item: "https://incredibleitinerary.com/blog/toronto-4-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Toronto",
    description:
      "Toronto is the world's most multicultural city — a metropolis where over 200 languages are spoken, Chinatown meets Little Italy meets Little India, and the CN Tower pierces a skyline backed by Lake Ontario.",
    url: "https://incredibleitinerary.com/blog/toronto-4-days",
    touristType: ["Culture", "Gastronomy", "Architecture", "Nature"],
    geo: { "@type": "GeoCoordinates", latitude: 43.6532, longitude: -79.3832 },
    containedInPlace: { "@type": "Country", name: "Canada" },
  },
];

/* ── Page Data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Toronto",
  country: "Canada",
  countryFlag: "🇨🇦",
  slug: "toronto-4-days",
  heroQuery: "toronto cn tower skyline lake ontario canada",
  heroAlt: "Toronto CN Tower skyline with Lake Ontario in foreground",
  category: "North America",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "You're standing on the glass floor of the CN Tower, 447 metres above the city, Lake Ontario stretching south until it disappears into the horizon — and a Kensington Market that smells like a dozen countries at once is waiting for you below. Toronto is a city where Little Italy, Little Portugal, Chinatown, Little India, and Greektown all sit within cycling distance of each other, and where Niagara Falls thunders 80 km away like a day trip that seems almost unfair. The world's most multicultural city doesn't boast about it — it just feeds you extraordinarily well.",

  stats: {
    duration: "4 Days",
    budgetFrom: "CAD $85 (~$63)",
    bestMonths: "May–Oct",
    airport: "YYZ (Pearson)",
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
        ["Tip", "eTA links to your passport — if you renew your passport, reapply"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Explorer",
      sub: "CAD $85/day",
      days: [
        {
          day: "Day 1",
          title: "Downtown Core & Waterfront",
          items: [
            "Walk Nathan Phillips Square and take in the Toronto sign (free iconic photo)",
            "Explore the Distillery District on foot — Victorian industrial architecture, free to wander",
            "Pick up lunch at St Lawrence Market (open Tue–Sat) — a peameal bacon sandwich is a Toronto rite of passage (~CAD $7)",
            "Walk the Harbourfront waterfront path along Lake Ontario (free)",
            "Visit Ripley's Aquarium of Canada — budget CAD $32 but can split over an afternoon",
            "Dinner at a Chinatown restaurant on Spadina Ave — massive portions, ~CAD $12",
          ],
          cost: "CAD $55–70",
        },
        {
          day: "Day 2",
          title: "Kensington Market & Annex",
          items: [
            "Morning at Kensington Market — explore the outdoor stalls, vintage shops, and global food vendors (free to wander)",
            "Breakfast tacos or Jamaican patties from a market vendor (~CAD $6)",
            "Walk north through the Annex neighbourhood to Bloor Street",
            "Visit the Royal Ontario Museum — budget CAD $23, worth it for the world cultures galleries",
            "Cycle or walk the Rosedale Valley Trail (free)",
            "Dinner on Bloor Street West in Little Korea — Korean BBQ ~CAD $18",
          ],
          cost: "CAD $60–80",
        },
        {
          day: "Day 3",
          title: "Niagara Falls Day Trip",
          items: [
            "Take the GO Bus from Union Station to Niagara Falls — CAD $15–20 return",
            "Walk to the Canadian side of the falls — the Horseshoe Falls view is free from the public promenade",
            "Journey Behind the Falls attraction — CAD $25 to stand inside the waterfall curtain",
            "Clifton Hill for a cheap lunch (~CAD $12) and classic tourist chaos",
            "Return to Toronto by early evening",
            "Grab poutine for dinner in the Distillery District (~CAD $12)",
          ],
          cost: "CAD $70–90",
        },
        {
          day: "Day 4",
          title: "Toronto Islands & Departure",
          items: [
            "Ferry to Toronto Islands (Ward's Island or Centre Island) — CAD $8.60 return",
            "Rent a bike on the island for CAD $10/hour and circle the lagoons",
            "Swim at the island beaches if visiting May–September",
            "Return ferry, walk along the waterfront path back to downtown",
            "Final lunch at a Little India restaurant on Gerrard Street East (~CAD $12)",
            "UP Express train to YYZ Pearson — CAD $12.35",
          ],
          cost: "CAD $50–70",
        },
      ],
    },
    {
      label: "Mid-Range Explorer",
      sub: "CAD $175/day",
      days: [
        {
          day: "Day 1",
          title: "Skyline, Distillery & Fine Food",
          items: [
            "Check into a boutique hotel in the Entertainment District or King West (~CAD $180/night)",
            "CN Tower visit including glass floor — CAD $42, book online to skip queues",
            "Afternoon in the Distillery District — browse galleries, artisan shops, and cafés",
            "Pre-dinner cocktails at a rooftop bar with skyline views",
            "Dinner at a mid-range restaurant in King West — farm-to-table Ontario cuisine (~CAD $60)",
          ],
          cost: "CAD $160–200",
        },
        {
          day: "Day 2",
          title: "Art, Markets & Culture",
          items: [
            "Art Gallery of Ontario (AGO) — CAD $28, houses one of Canada's finest collections",
            "Late morning at Kensington Market — grab a fresh juice and explore",
            "St Lawrence Market for a gourmet peameal bacon sandwich and local cheese",
            "Afternoon at the Royal Ontario Museum — CAD $23 for world cultures and natural history",
            "Dinner at a celebrated restaurant in Chinatown or Little Portugal (~CAD $55)",
          ],
          cost: "CAD $165–200",
        },
        {
          day: "Day 3",
          title: "Niagara Falls with a Guide",
          items: [
            "Guided Niagara Falls day tour from Toronto (~CAD $85) including hotel pickup",
            "Boat tour on the Maid of the Mist to the base of the Horseshoe Falls (~CAD $35 add-on)",
            "Niagara-on-the-Lake wine country stop for an afternoon tasting (~CAD $25)",
            "Return to Toronto for a relaxed dinner in the Annex (~CAD $50)",
          ],
          cost: "CAD $180–220",
        },
        {
          day: "Day 4",
          title: "Islands, Beaches & Final Eats",
          items: [
            "Morning ferry to Toronto Islands — CAD $8.60 return",
            "Kayak rental at the islands for 2 hours (~CAD $40)",
            "Return to waterfront, walk the Martin Goodman Trail",
            "Lunch at a trendy brunch spot in Leslieville (~CAD $30)",
            "Final shopping in Distillery District or Queen West",
            "UP Express to YYZ (~CAD $12)",
          ],
          cost: "CAD $150–180",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "CAD $400/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Arrival & Elevated Skyline",
          items: [
            "Check into the Ritz-Carlton Toronto or Four Seasons (from CAD $500/night)",
            "CN Tower private EdgeWalk experience — walking outside the tower at 356m (~CAD $225)",
            "Champagne afternoon tea at a luxury hotel",
            "Dinner at Alo Restaurant — regularly named Canada's best restaurant, tasting menu ~CAD $250",
            "Nightcap at a speakeasy cocktail bar in the Entertainment District",
          ],
          cost: "CAD $800–1000",
        },
        {
          day: "Day 2",
          title: "Private Culture & Gastronomy",
          items: [
            "Private docent tour of the Art Gallery of Ontario with curator access (~CAD $200)",
            "Chef-led private market tour of St Lawrence and Kensington (~CAD $200)",
            "Spa afternoon at the Ritz-Carlton spa",
            "Pre-dinner cocktails at Bar Raval (stunning Gaudí-inspired bar)",
            "Dinner at Canoe Restaurant — 54th floor city views, tasting menu ~CAD $180",
          ],
          cost: "CAD $700–900",
        },
        {
          day: "Day 3",
          title: "Niagara Private Experience",
          items: [
            "Helicopter tour from Toronto to Niagara Falls (~CAD $500/person)",
            "Private wine tour of Niagara-on-the-Lake's best vineyards with sommelier",
            "Lunch at Treadwell Farm-to-Table Cuisine overlooking the Niagara River",
            "Return by private transfer",
            "Dinner at a Michelin-recommended restaurant in Yorkville (~CAD $200)",
          ],
          cost: "CAD $900–1100",
        },
        {
          day: "Day 4",
          title: "Waterfront & Departure",
          items: [
            "Private sailing charter on Lake Ontario — 3-hour morning sail (~CAD $400)",
            "Brunch at a celebrated Leslieville or Harbourfront restaurant",
            "Final shopping at Holt Renfrew or boutiques on Bloor Street Mink Mile",
            "Luxury transfer to YYZ Pearson in a chauffeured vehicle",
            "Departure with Ontario wine and maple syrup as gifts",
          ],
          cost: "CAD $600–800",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "Hostel / budget hotel CAD $40–55",
      food: "Markets & ethnic restaurants CAD $20",
      transport: "TTC subway/bus CAD $10",
      activities: "Free sights & parks CAD $12",
      total: "CAD $85/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "Boutique hotel CAD $160",
      food: "Sit-down restaurants CAD $60",
      transport: "TTC + Uber CAD $20",
      activities: "CN Tower, ROM, AGO CAD $45",
      total: "CAD $175/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "Ritz/Four Seasons CAD $500+",
      food: "Fine dining & wine CAD $180",
      transport: "Chauffeur/Uber Black CAD $50",
      activities: "EdgeWalk, private tours CAD $200",
      total: "CAD $400+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "HI Toronto hostel CAD $32",
      food: "Chinatown & Kensington CAD $14",
      transport: "Walk + occasional TTC CAD $5",
      activities: "Islands ferry & free CAD $10",
      total: "CAD $65/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "Airbnb in The Beaches CAD $200",
      food: "Casual dining CAD $90",
      transport: "TTC day pass CAD $30",
      activities: "Ripley's + CN Tower CAD $100",
      total: "CAD $220/day",
    },
  ],

  mistakes: [
    {
      icon: "🚗",
      title: "Driving Downtown Toronto",
      desc: "Toronto's downtown traffic is brutal and parking costs CAD $30–50/day. The TTC subway and streetcar system is far faster and cheaper for getting between major attractions. Use Uber only for trips the TTC doesn't serve well.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Visiting Niagara Falls from the US Side",
      desc: "The American side offers a poor view of the Horseshoe Falls compared to the Canadian side. Always approach from Ontario — the full panoramic view of the falls is dramatically better and the infrastructure for visitors is superior.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📅",
      title: "Missing St Lawrence Market on the Right Days",
      desc: "The main food market is only open Tuesday–Saturday. The Saturday farmers' market is the best. Sunday is the antique market. Plan your visit accordingly — many tourists arrive Monday to find it closed.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏖️",
      title: "Overlooking the Toronto Islands",
      desc: "Many visitors spend all 4 days on the mainland and never cross to the Toronto Islands. The view of the skyline from Ward's Island is one of the best in the world and the ferry is just CAD $8.60.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍕",
      title: "Eating Only at Tourist Restaurants",
      desc: "Toronto's greatest food is in its ethnic neighbourhoods — Gerrard Street East (Little India), Spadina Chinatown, Corso Italia, Greektown on Danforth, and Little Portugal on Dundas West. These areas are cheap, authentic, and extraordinary.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🎟️",
      title: "Buy a TTC Day Pass",
      desc: "A TTC day pass (CAD $14.50) covers unlimited subway, streetcar, and bus rides for a full day. For sightseeing, you'll easily use it 4–6 times. The PRESTO card is the standard payment system — load it at any station.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌅",
      title: "See the Skyline from the Islands at Dusk",
      desc: "The last ferry to Ward's Island departs around 11pm in summer. Watching the Toronto skyline light up from the island beach at dusk is completely free and more spectacular than any paid viewpoint.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🥩",
      title: "Get the Peameal Bacon Sandwich at St Lawrence",
      desc: "The peameal (back) bacon sandwich at Carousel Bakery inside St Lawrence Market is a Toronto institution — it costs about CAD $7 and defines the city's food identity far more than any restaurant ever could.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍁",
      title: "Visit in Fall for Maple Season Colours",
      desc: "Toronto in October is genuinely stunning — the Don Valley parks, High Park, and the ravine system turn deep amber and red. High Park's cherry blossoms in late April are equally spectacular and always free.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  faqs: [
    {
      q: "How do I get from Toronto Pearson Airport (YYZ) to downtown?",
      a: "The UP Express train runs directly from YYZ to Union Station in 25 minutes for CAD $12.35 (using PRESTO) — by far the fastest and most reliable option. Taxis cost CAD $55–75 and Uber runs CAD $40–60 depending on traffic.",
    },
    {
      q: "Is the CN Tower worth it?",
      a: "Yes, if heights don't bother you. The glass floor and outdoor observation deck at 447m give a genuinely spectacular Lake Ontario view. Book online to save time. The EdgeWalk (walking outside the tower) costs more but is a bucket-list experience.",
    },
    {
      q: "How far is Niagara Falls from Toronto?",
      a: "Niagara Falls is approximately 80 km south of Toronto — about 1.5 hours by car (without traffic) or 2 hours by GO bus from Union Station. It's very manageable as a day trip, especially if you start before 9am.",
    },
    {
      q: "What is the best area to stay in Toronto?",
      a: "For first-time visitors, the Entertainment District or King West puts you within walking distance of the CN Tower, Distillery District, and the waterfront. The Annex is great for mid-range budgets with easy subway access to everywhere.",
    },
  ],

  combineWith: ["Montreal", "Niagara Falls", "Ottawa"],
  relatedSlugs: ["montreal-4-days", "quebec-city-3-days", "niagara-falls-weekend"],
  galleryQuery: "toronto cn tower distillery district kensington market",
};

/* ── Page Component ──────────────────────────────────────────────────────── */
export default function TorontoPage() {
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
