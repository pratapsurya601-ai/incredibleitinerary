import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Boston 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Boston trip in 3 days. Plan the perfect 3-day Boston trip. Walk the Freedom Trail, eat clam chowder at Faneuil Hall, visit Harvard, and catch.",
  keywords: [
    "Boston travel guide",
    "Boston 3 days",
    "Freedom Trail Boston",
    "Faneuil Hall Boston",
    "Fenway Park visit",
    "Harvard University Cambridge",
    "Boston clam chowder",
    "Boston budget travel",
    "Boston itinerary 2026",
    "North End Boston Little Italy",
  ],
  alternates: { canonical: "https://incredibleitinerary.com/blog/boston-3-days" },
  openGraph: {
    title: "Boston 3-Day Itinerary 2026: Trip Planner",
    description:
      "Walk the 2.5-mile red-brick Freedom Trail, eat clam chowder at Faneuil Hall, catch a Red Sox game at Fenway Park, and punt around Harvard Yard — your complete 3-day Boston itinerary.",
    url: "https://incredibleitinerary.com/blog/boston-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://incredibleitinerary.com/og/boston-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "Boston Freedom Trail historic buildings Massachusetts USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boston 3-Day Itinerary 2026: Trip Planner",
    description:
      "The Freedom Trail, Fenway Park, Harvard, and the best clam chowder in New England — your 3-day Boston travel guide.",
    images: ["https://incredibleitinerary.com/og/boston-3-days.jpg"],
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Boston in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 3-day Boston itinerary covering the Freedom Trail, Faneuil Hall, Fenway Park, Harvard University, the North End, Boston Common, and everything from budget hostels to luxury hotels.",
    datePublished: "2026-04-05T00:00:00Z",
    dateModified: "2026-04-05T00:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      url: "https://incredibleitinerary.com",
    },
    url: "https://incredibleitinerary.com/blog/boston-3-days",
    image: "https://incredibleitinerary.com/og/boston-3-days.jpg",
    mainEntityOfPage: "https://incredibleitinerary.com/blog/boston-3-days",
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
        name: "Boston 3-Day Guide",
        item: "https://incredibleitinerary.com/blog/boston-3-days",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Boston",
    description:
      "America's most walkable and most historic city, home to the Freedom Trail, Fenway Park, Harvard University, the North End, and some of the finest clam chowder on the planet.",
    url: "https://incredibleitinerary.com/blog/boston-3-days",
    touristType: ["CulturalTourist", "HistoryTourist", "SportsEnthusiast"],
    hasMap: "https://maps.google.com/?q=Boston+Massachusetts",
  },
];

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Boston",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "boston-3-days",
  heroQuery: "boston freedom trail massachusetts usa historic",
  heroAlt: "Boston Freedom Trail historic buildings Massachusetts USA",
  category: "North America",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Walking a 2.5-mile red-brick line through 400 years of American history, eating clam chowder from a sourdough bread bowl at Faneuil Hall, watching the Boston Red Sox at Fenway Park (the oldest ballpark in America), and punching above your weight at Harvard in Cambridge — Boston, America's most walkable and most historic city.",

  stats: {
    duration: "3 Days",
    budgetFrom: "$80",
    bestMonths: "Sep–Nov or Apr–Jun",
    airport: "BOS (Logan)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "📸", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Type", "B1/B2 Tourist Visa"],
        ["Fee", "$185 USD (non-refundable)"],
        ["Interview", "Required at US Embassy/Consulate"],
        ["Processing", "3–5 weeks (apply early)"],
        ["Validity", "Up to 10 years, multiple entry"],
        ["Duration", "Up to 6 months per visit"],
        ["DS-160", "Online form required before appointment"],
        ["Tip", "Book appointment 2–3 months ahead"],
      ],
    },
    {
      flag: "🇬🇧🇦🇺🇪🇺",
      title: "UK / AU / EU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Type", "ESTA (Visa Waiver Program)"],
        ["Fee", "$21 USD"],
        ["Apply", "Online at esta.cbp.dhs.gov"],
        ["Processing", "Usually instant, up to 72 hrs"],
        ["Valid For", "2 years or until passport expires"],
        ["Stay", "Up to 90 days per visit"],
        ["Tip", "Apply at least 72 hours before departure"],
        ["Note", "Must have e-Passport (biometric chip)"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Backpacker",
      sub: "$80/day",
      days: [
        {
          day: "Day 1",
          title: "Freedom Trail & North End",
          items: [
            "Take the Silver Line from Logan Airport to South Station (free from airport), then subway to your hostel — check into HI Boston or Oasis Guest House from $45/night",
            "Start the Freedom Trail at Boston Common — the 2.5-mile red-brick line connects 16 historic sites, all free to walk",
            "Massachusetts State House (gold dome) — free, open weekdays",
            "Park Street Church and Granary Burying Ground — final resting place of Samuel Adams, Paul Revere, and John Hancock (free)",
            "King's Chapel and Burying Ground — Boston's oldest cemetery (free outside, $2 suggested donation inside)",
            "Old South Meeting House — where the Boston Tea Party was planned ($7 admission or pass on by)",
            "Old State House — where the Declaration of Independence was first read to Bostonians ($12 or admire exterior free)",
            "Cross into the North End (Boston's Little Italy) — Mike's Pastry for a $3.50 cannoli, the best in the city",
            "Paul Revere House — the oldest surviving structure in downtown Boston ($6 admission)",
            "Grab a $13 slice and beer at Regina Pizzeria (est. 1926) — the original location on Thacher St",
            "Old North Church — 'One if by land, two if by sea' — basic visit free, tower tour $8",
          ],
          cost: "$25–40 (food + transit + optional admissions)",
        },
        {
          day: "Day 2",
          title: "Cambridge (Harvard & MIT) + Boston Common",
          items: [
            "Take the Red Line to Harvard Square (one stop from Central Square, ~$2.40)",
            "Harvard Yard — walk the free grounds, see Massachusetts Hall (oldest building, 1720), Johnston Gate, Widener Library",
            "Harvard Art Museums — $20 admission, one of the great university art collections in the world (free for Massachusetts residents)",
            "Harvard Museum of Natural History — fascinating glass flowers exhibit, $15",
            "If on a budget: skip the Harvard museums and walk the free grounds, then continue to MIT",
            "Walk or take the Red Line two stops to MIT campus — free to explore. See the Great Dome, Kresge Auditorium, Stata Center (Frank Gehry building)",
            "Lunch near MIT at Clover Food Lab — innovative vegetarian fast food, ~$12",
            "Back to Boston: Boston Public Garden — free, the Swan Boats run April–September ($4.50)",
            "Make Way for Ducklings bronze sculptures — free, great for kids and adults alike",
            "Beacon Hill evening stroll — the gas-lit 19th century brownstone streets are free and magical at dusk",
            "Dinner at a Beacon Hill spot like 75 Chestnut (~$20pp) or grab takeout from Paramount (~$14)",
          ],
          cost: "$30–50 (transit + optional museums + food)",
        },
        {
          day: "Day 3",
          title: "Fenway, Museum of Fine Arts & Newbury Street",
          items: [
            "Fenway Park tour (self-guided or guided, $26) — the oldest Major League ballpark in America (1912). Standing in the left field corner looking out at the Green Monster is a genuine bucket-list moment",
            "If there's a day game: buy standing-room tickets on game day from the box office, from $30",
            "Museum of Fine Arts Boston — $27 admission, one of America's great encyclopedic art museums. Egyptian mummies, Monet's garden paintings, American art wing",
            "Walk from MFA down Huntington Ave to the Back Bay",
            "Newbury Street — Boston's most fashionable shopping street, 8 blocks of boutiques and cafes from Hermes at the Arlington end to vintage shops at the Mass Ave end",
            "Lunch on Newbury — Parish Cafe (famous for sandwiches designed by celebrity chefs, ~$16) or Trident Booksellers & Café (books + food, ~$14)",
            "Final walk across the Harvard Bridge back toward the hotel",
            "Last dinner: Flour Bakery & Café for incredible sandwiches and pastries (~$15), or splurge at Neptune Oyster in the North End (cash only, raw bar plates ~$25)",
          ],
          cost: "$40–65 (Fenway tour/game + MFA + food)",
        },
      ],
    },
    {
      label: "Mid-Range Traveller",
      sub: "$160/day",
      days: [
        {
          day: "Day 1",
          title: "Freedom Trail, North End & Waterfront",
          items: [
            "Silver Line from Logan to South Station — or taxi ($25–30). Check into a Back Bay or Downtown Crossing hotel from $150/night",
            "Guided Freedom Trail tour with a costumed guide — National Park Service offers free ranger-led tours departing from the Visitor Center on State Street at scheduled times",
            "Or hire a private Freedom Trail guide through GetYourGuide (2 hours, ~$28pp) for a more personalized experience",
            "Lunch at Quincy Market inside Faneuil Hall Marketplace — clam chowder in a bread bowl from Boston Chowda (~$14), lobster roll available",
            "Faneuil Hall itself — free to enter, live street performers and market stalls",
            "North End afternoon: Mike's Pastry vs Modern Pastry debate (get one from each, ~$4pp) — this is a genuine Boston rivalry",
            "Parziale's Bakery for focaccia, Salumeria Italiana for Italian specialty groceries",
            "Sunset walk along the Rose Kennedy Greenway — the park built over the old elevated highway",
            "Dinner in the North End: Mamma Maria (upscale Italian, ~$55pp) or Neptune Oyster (cash only, raw bar, ~$50pp)",
            "Evening: CityView Trolley tour sunset departure or stroll the Seaport District's Institute of Contemporary Art (free Thursday evenings 5–9pm)",
          ],
          cost: "$100–130 (hotel portion + food + guided tour)",
        },
        {
          day: "Day 2",
          title: "Cambridge Day Trip + Isabella Stewart Gardner Museum",
          items: [
            "Morning Red Line to Harvard — explore Harvard Yard, peek into Memorial Hall and Sanders Theatre",
            "Harvard Art Museums ($20) — particularly the Fogg Museum with its stunning Renzo Piano-designed courtyard",
            "Brunch in Harvard Square at Grafton Street (~$22pp) or Harvest restaurant (Cambridge institution, ~$30pp)",
            "Walk across the Anderson Bridge to the Charles River Esplanade — popular for rowing and walking",
            "Back to Boston: Isabella Stewart Gardner Museum ($20–30 admission, price varies by day) — one of the most extraordinary private art collections in the world, housed in a Venetian palazzo. Site of the famous 1990 art heist — the empty frames still hang where the stolen Rembrandt and Vermeer once were",
            "Museum of Fine Arts adjacent — buy a combo ticket ($35) and spend an hour in the Egyptian rooms",
            "Dinner in the South End: Toro (Spanish tapas, lively, ~$50pp) or Myers + Chang (Asian-fusion, ~$40pp)",
            "South End evening: art gallery stroll on Harrison Avenue, cocktails at Wink & Nod speakeasy (~$16/drink)",
          ],
          cost: "$110–140 (hotel portion + museums + food + drinks)",
        },
        {
          day: "Day 3",
          title: "Fenway Park & Back Bay",
          items: [
            "Guided Fenway Park tour, 1 hour ($26pp) — behind the dugout, the Monster Seats, warning track",
            "If a Red Sox game: buy advance tickets ($35–80pp) on stubhub or directly from redsox.com",
            "Lunch at Baseball Tavern across from Fenway or hotdogs inside the park (~$15–25)",
            "Walk back through the Fenway neighbourhood — Victory Gardens in the Fens (Boston's community gardens, free)",
            "Back Bay: Prudential Center observation deck Skywalk ($23) for panoramic city views",
            "Commonwealth Avenue Mall — Boston's grand Parisian-style boulevard with statues and brownstones",
            "Newbury Street shops and galleries",
            "Farewell dinner at Sorellina (Italian, upscale Back Bay, ~$60pp) or Oak Long Bar + Kitchen in the Copley Plaza hotel (~$50pp)",
            "Logan Airport: Blue Line from Government Center or taxi ($25–35)",
          ],
          cost: "$100–140 (Fenway + Skywalk + food + transport to airport)",
        },
      ],
    },
    {
      label: "Luxury Experience",
      sub: "$350/day",
      days: [
        {
          day: "Day 1",
          title: "Private History Tour & Waterfront Dining",
          items: [
            "Town car from Logan Airport to hotel ($55–70)",
            "Check into The Liberty Hotel (former Charles Street Jail, extraordinary conversion), XV Beacon, or Mandarin Oriental Boston ($380–700/night)",
            "Private historian-led Freedom Trail tour ($150–200pp for a 3-hour private group) — go deeper into colonial history with access to lesser-visited sites",
            "Private North End lunch: reserved table at Mamma Maria, upstairs dining room, 3-course lunch (~$60pp including wine)",
            "Afternoon: Duck Tour (amphibious vehicle through streets and Charles River, $44pp) — touristy but genuinely fun",
            "Old South Meeting House immersive experience for context on the Boston Tea Party",
            "Boston Tea Party Ships & Museum ($35pp) — highly theatrical re-enactment experience",
            "Dinner at No. 9 Park (Barbara Lynch's flagship, upscale continental, ~$95pp) or Clio at the Eliot Hotel (~$90pp tasting menu)",
            "Evening: Post-dinner nightcap at the Casbah bar in The Liberty Hotel",
          ],
          cost: "$400–500 (hotel portion + private guide + fine dining + tours)",
        },
        {
          day: "Day 2",
          title: "Harvard, Gardner Museum & Symphony",
          items: [
            "Private car to Cambridge ($30) for a Harvard campus tour with a student or alumni guide ($80pp private)",
            "Harvard Faculty Club lunch by special arrangement — or brunch at Harvest restaurant in Harvard Square (~$45pp)",
            "MIT campus architectural tour — see the Stata Center and Kresge Auditorium with an architecture-focused guide",
            "Isabella Stewart Gardner Museum — arrange a curator-led highlights tour ($50pp supplement) to hear the full story of the 1990 art theft and Mrs. Gardner's extraordinary vision",
            "Spa afternoon at Exhale Spa (Back Bay) or the Mandarin Oriental spa",
            "Boston Symphony Orchestra at Symphony Hall — one of America's finest concert halls, tickets $65–200pp depending on seat",
            "Pre-concert dinner at The Verb Hotel's Hojoko restaurant (Japanese-inspired, lively, ~$60pp) or post-concert supper at Select Oyster Bar (exceptional raw bar, ~$80pp)",
          ],
          cost: "$450–550 (hotel portion + private guides + symphony + fine dining + spa)",
        },
        {
          day: "Day 3",
          title: "Private Fenway Experience & Farewell Brunch",
          items: [
            "Premium Fenway Park VIP tour — includes field access, dugout, and Monster Seats area (arrange through team concierge, ~$75pp)",
            "On game days: premium seating in Green Monster seats ($150–400pp) or dugout box seats",
            "Pre-game or tour brunch at Island Creek Oyster Bar in Kenmore Square (outstanding seafood brunch, ~$65pp)",
            "Back Bay shopping at Newbury Street — from Chanel at the Arlington end to rare vintage at Mass Ave end",
            "Beacon Hill: Acorn Street photos (most photographed street in the USA), stroll Mount Vernon and Chestnut Streets",
            "Farewell dinner at Menton (Barbara Lynch's fine dining flagship, $145pp tasting menu) or Uni sashimi bar at the Eliot Hotel (~$100pp)",
            "Town car to Logan Airport — allow 30–45 minutes; Priority Pass lounge access in Terminal B or C",
          ],
          cost: "$450–600 (hotel portion + premium Fenway + fine dining + private transport)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget 🎒",
      accommodation: "$45–65 (hostel dorm/private)",
      food: "$25–35 (markets, food courts, bakeries)",
      transport: "$10–15 (subway Charlie Card)",
      activities: "$0–25 (Freedom Trail free, some paid museums)",
      total: "$80–140/day",
    },
    {
      tier: "Mid-Range ✨",
      accommodation: "$150–220 (3-star hotel Back Bay)",
      food: "$55–80 (sit-down restaurants)",
      transport: "$20–35 (subway + occasional taxi)",
      activities: "$25–55 (Fenway tour, MFA, Gardner Museum)",
      total: "$250–390/day",
    },
    {
      tier: "Luxury 💎",
      accommodation: "$380–700 (The Liberty, XV Beacon, Mandarin)",
      food: "$130–200 (fine dining, oyster bars)",
      transport: "$55–80 (town car transfers)",
      activities: "$80–200 (private guides, Red Sox premium seats, symphony)",
      total: "$645–1,180/day",
    },
    {
      tier: "Red Sox Game Day 🧢",
      accommodation: "Same as tier",
      food: "$40–100 (park food + restaurant)",
      transport: "$10–20 (subway, heavy traffic on game day)",
      activities: "$30–400 (SRO to Monster Seats, varies enormously)",
      total: "Add $50–400 to base tier",
    },
    {
      tier: "Fall Foliage Season 🍂",
      accommodation: "+20% (book 6–8 weeks ahead)",
      food: "Normal range",
      transport: "+$30–60 for a day trip to New Hampshire or Vermont",
      activities: "$0–25 (Arnold Arboretum free, some farms charge)",
      total: "Add $30–85 to base tier",
    },
  ],

  mistakes: [
    {
      icon: "🦞",
      title: "Buying Lobster Rolls in Tourist Traps",
      desc: "Faneuil Hall Marketplace is convenient but overpriced for lobster rolls ($35+). Head instead to James Hook & Co. (just south of the Seaport on Atlantic Ave) for better quality at $28–32, or Row 34 in the Seaport for the full experience. In the North End, Yankee Lobster is the locals' choice.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚇",
      title: "Ignoring the Charlie Card Vs Charlie Ticket Difference",
      desc: "Boston's MBTA charges $2.40 with a Charlie Card (rechargeable) vs $3.00 with a single-use paper Charlie Ticket. Get a Charlie Card from the visitor centre or any staffed station — it saves $0.60 per ride. A 7-day unlimited pass ($22.50) pays off after 10+ rides.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "⚾",
      title: "Not Booking Fenway Park Tickets Early Enough",
      desc: "Red Sox home games sell out weeks in advance, especially against rivals like the Yankees. Book on redsox.com as soon as you know your travel dates. The park tour ($26) is always available, but if you want to watch a game, plan 4–6 weeks ahead during peak season.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌨️",
      title: "Underestimating Boston Winters",
      desc: "December through March can be brutally cold with heavy snow and winds off the harbour. Boston is still very visitable in winter — the museums are quiet and hotel prices drop 40% — but pack properly. A heavy coat, hat, gloves, and waterproof boots are non-negotiable from November to March.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🗺️",
      title: "Trying to Drive in Boston",
      desc: "Boston's road system famously defies logic — it was built on old cow paths. Parking is expensive ($30–50/day in garages) and driving is stressful. The MBTA subway, buses, and walking cover everything a tourist needs. If you're renting a car, pick it up on the day you leave the city for a New England road trip.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🧭",
      title: "Walk the Freedom Trail at Your Own Pace — No Guide Needed",
      desc: "The Freedom Trail is clearly marked by a red-brick or painted red line in the pavement. Download the free NPS Freedom Trail app for audio narration at each of the 16 sites. You can walk the whole trail in 3–4 hours or spread it over a morning. Rangers give free guided tours from the State Street Visitor Center at scheduled times.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🥣",
      title: "The Best Clam Chowder Rankings",
      desc: "The annual Chowderfest at Boston Common crowns a winner each October, but year-round consensus is: Legal Sea Foods (classic, consistent), Neptune Oyster (richer, North End), Boston Chowda at Quincy Market (touristy but genuinely good in the bread bowl). Avoid anything pre-packaged at Dunkin' or chain restaurants.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚢",
      title: "Take the Ferry Across Boston Harbour to Charlestown",
      desc: "The MBTA Inner Harbour Ferry from Long Wharf to Charlestown Navy Yard costs $3.70 and takes 10 minutes. In Charlestown you'll find the USS Constitution (Old Ironsides — the world's oldest commissioned naval vessel, free to tour) and Bunker Hill Monument (free). Far more scenic and enjoyable than the bus.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏛️",
      title: "Book Isabella Stewart Gardner Museum Tickets in Advance",
      desc: "The Gardner Museum limits daily attendance to preserve the intimate atmosphere. Book timed-entry tickets at gardnermuseum.org. Visit on a weekday morning for the quietest experience in the stunning courtyard garden, which is the heart of the palazzo and is filled with seasonal flowers year-round.",
      color: "bg-green-50 border-green-200",
    },
  ],

  faqs: [
    {
      q: "How many days do I need in Boston?",
      a: "Three days is the sweet spot for most visitors — enough to walk the Freedom Trail, visit Cambridge (Harvard and MIT), see Fenway Park, explore the North End, and visit one or two major museums. Extend to 4–5 days if you want to do a day trip to Salem (Halloween season) or Cape Cod, or if you want to slow down and really soak in each neighbourhood.",
    },
    {
      q: "Is Boston worth visiting outside of Red Sox season?",
      a: "Absolutely. The Freedom Trail, Harvard, the Gardner Museum, and the restaurants are year-round draws. Fall (September–November) has spectacular foliage and the Chowderfest in October. Spring (April–June) brings milder weather and blooming Public Garden. Winter (December–March) means 40% cheaper hotels, zero lines at museums, and the Boston Common ice rink.",
    },
    {
      q: "How do I get from Logan Airport to downtown Boston?",
      a: "The Silver Line bus (free from all Logan terminals) runs to South Station in under 15 minutes. From South Station, the Red Line connects to downtown, Back Bay, Cambridge, and Beacon Hill. Total cost from airport to most hotels: $2.40 on a Charlie Card. Taxis and rideshares cost $25–35 to downtown but can be slower in traffic. The Silver Line + subway is almost always the best option.",
    },
    {
      q: "What's the best neighbourhood to stay in Boston?",
      a: "Back Bay (near Copley Square) is the most convenient for mid-range and luxury travellers — central, walkable, near Newbury Street and the Prudential Center. Beacon Hill is the most beautiful and atmospheric. Downtown Crossing is most affordable and well-connected by transit. The South End has the best restaurant scene. For budget travellers, hostels in Downtown or near South Station have the easiest airport connections.",
    },
  ],

  combineWith: ["New York City", "Washington DC", "Providence", "Salem", "Cape Cod"],
  relatedSlugs: ["new-york-5-days", "washington-dc-4-days", "philadelphia-2-days", "usa-east-coast-road-trip"],

  galleryQuery: "boston freedom trail faneuil hall fenway park harvard cambridge",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function BostonPage() {
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
