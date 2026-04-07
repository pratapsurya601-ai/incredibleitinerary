import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Nashville 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Nashville trip in 3 days. Plan the perfect 3-day Nashville trip. Honky tonk bars on Broadway, the Grand Ole Opry, hot chicken, RCA Studio B.",
  keywords: [
    "Nashville travel guide",
    "Nashville 3 days",
    "Broadway Nashville honky tonk",
    "Grand Ole Opry visit",
    "Nashville hot chicken",
    "Country Music Hall of Fame",
    "RCA Studio B Elvis",
    "Ryman Auditorium Nashville",
    "Nashville itinerary 2026",
    "Music City USA guide",
  ],
  alternates: { canonical: "https://incredibleitinerary.com/blog/nashville-3-days" },
  openGraph: {
    title: "Nashville 3-Day Itinerary 2026: Trip Planner",
    description:
      "Live country music at noon on Broadway, hot chicken with a spice warning, the Grand Ole Opry, and RCA Studio B where Elvis recorded — your complete 3-day Nashville, Music City USA itinerary.",
    url: "https://incredibleitinerary.com/blog/nashville-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://incredibleitinerary.com/og/nashville-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "Nashville Broadway honky tonk bars with live country music Tennessee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nashville 3-Day Itinerary 2026: Trip Planner",
    description:
      "Honky tonk bars, hot chicken, the Grand Ole Opry, and RCA Studio B — your 3-day Music City USA travel guide.",
    images: ["https://incredibleitinerary.com/og/nashville-3-days.jpg"],
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nashville in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "A complete 3-day Nashville itinerary covering Broadway honky tonk bars, the Grand Ole Opry, Country Music Hall of Fame, RCA Studio B, Ryman Auditorium, the Bluebird Cafe, hot chicken, and the Jack Daniel's Distillery day trip.",
    datePublished: "2026-04-05T00:00:00Z",
    dateModified: "2026-04-05T00:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      url: "https://incredibleitinerary.com",
    },
    url: "https://incredibleitinerary.com/blog/nashville-3-days",
    image: "https://incredibleitinerary.com/og/nashville-3-days.jpg",
    mainEntityOfPage: "https://incredibleitinerary.com/blog/nashville-3-days",
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
        name: "Nashville 3-Day Guide",
        item: "https://incredibleitinerary.com/blog/nashville-3-days",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Nashville",
    description:
      "Music City USA — home to the Grand Ole Opry, Broadway honky tonk bars, the Country Music Hall of Fame, RCA Studio B, the Ryman Auditorium, and the hottest hot chicken on the planet.",
    url: "https://incredibleitinerary.com/blog/nashville-3-days",
    touristType: ["MusicTourist", "CulturalTourist", "FoodTourist"],
    hasMap: "https://maps.google.com/?q=Nashville+Tennessee",
  },
];

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Nashville",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "nashville-3-days",
  heroQuery: "nashville broadway honky tonk live music tennessee usa",
  heroAlt: "Nashville Broadway honky tonk bars with live country music Tennessee",
  category: "North America",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Live country music pouring from honky tonk bars at noon on Broadway, hot chicken so spicy it comes with a warning, the Grand Ole Opry where every country star has played since 1925, and a city that has somehow turned line dancing into a major international export — Nashville, Music City USA.",

  stats: {
    duration: "3 Days",
    budgetFrom: "$85",
    bestMonths: "Apr–May or Sep–Oct",
    airport: "BNA (Nashville International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🎵", label: "Top Highlights" },
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
      sub: "$85/day",
      days: [
        {
          day: "Day 1",
          title: "Broadway Honky Tonks & Downtown Nashville",
          items: [
            "Fly into BNA — take the WeGo Bus Route 18 to downtown ($2 each way) or split a rideshare (~$15)",
            "Check into a Nashville hostel or budget hotel near Broadway (from $45/night hostel, $80/night budget hotel)",
            "Broadway strip in the afternoon — no cover charge at any of the honky tonks. Walk the entire strip from 1st to 5th Ave",
            "Tootsie's Orchid Lounge — the most legendary bar in Nashville history (opens early, free entry, live music all day)",
            "Robert's Western World — the locals' favourite: live honky tonk music, no cover, fried bologna sandwiches for $5",
            "Legend's Corner — another free-entry classic with rotating live acts from open to close",
            "Ryman Auditorium exterior — the 'Mother Church of Country Music' (free to see outside; $20+ tours inside)",
            "Walk down Second Avenue Historic District — the brick Victorian buildings that survived the Civil War",
            "Hot chicken from Prince's Hot Chicken (the original, cash only, get the medium and expect to sweat, ~$12)",
            "Back to Broadway for the evening — the strip is even wilder after dark, still no cover on most bars",
          ],
          cost: "$30–45 (food + transit + optional bar drinks at $5–7 each)",
        },
        {
          day: "Day 2",
          title: "Country Music Hall of Fame, RCA Studio B & East Nashville",
          items: [
            "Country Music Hall of Fame & Museum ($30 general admission) — the most comprehensive music museum in the USA. Hank Williams' stage suit, Elvis's gold Cadillac, original recordings, and floor-to-ceiling country music history",
            "Add the RCA Studio B tour ($12 extra, book at the museum) — this is the actual recording studio in Music Row where Elvis, Dolly Parton, Roy Orbison, and the Everly Brothers recorded. Arguably the most historically significant recording space in American music",
            "Lunch on Music Row: Rotier's Restaurant (Nashville institution, burgers since 1945, ~$12) or the 5 Points Pizza truck (~$10)",
            "Walk through Music Row — see the historic studios (RCA, Sony, BMG) and the Demonbreun Street murals",
            "Rideshare to East Nashville ($8) — the hip, artsy neighbourhood that locals actually live in",
            "Five Points area: browse Grimey's New & Preloved Music (best independent record store in the South), boutiques and vintage shops",
            "Dinner in East Nashville: Margot Cafe & Bar (~$30pp) or take a slice at Pharmacy Burger ($15)",
            "Bluebird Cafe reservation (book online at bluebirdcafe.com weeks in advance, $7–15 reservation fee) — the legendary songwriter showcase where Garth Brooks was discovered. Tables of 4 face the stage in an intimate room seating fewer than 100",
          ],
          cost: "$50–70 (museum + RCA + food + Bluebird)",
        },
        {
          day: "Day 3",
          title: "Grand Ole Opry or Jack Daniel's Day Trip",
          items: [
            "Option A: Grand Ole Opry (best on Tuesday, Friday, or Saturday shows — book at opry.com, $40–75pp). Arrive early for a backstage tour ($35 extra)",
            "Option B: Jack Daniel's Distillery day trip to Lynchburg (80 minutes south) — free grounds tour, tastings $20–25. Lynchburg is a dry county despite hosting the world's most famous distillery, so you can only taste on-site at the distillery itself",
            "Nashville Parthenon in Centennial Park (free to visit outside, $6 inside) — a full-scale replica of the Athenian Parthenon built in 1897 for Tennessee's Centennial Exposition. Surreal to see a Greek temple in the middle of Tennessee",
            "Hattie B's Hot Chicken for lunch (if you missed Prince's yesterday, ~$12) — get the 'Damn Hot' level for the full Nashville experience",
            "Shelby Bottoms Greenway — free, 5 miles of trails along the Cumberland River",
            "Printer's Alley historic district — once Nashville's entertainment hub (1940s–70s), now revived bars and venues",
            "Final Broadway crawl — one last round at Tootsie's, Robert's, and Layla's Bluegrass Inn ($5 tip per band set)",
            "Head to BNA: WeGo Bus or rideshare",
          ],
          cost: "$40–80 (Grand Ole Opry or day trip + food + Parthenon)",
        },
      ],
    },
    {
      label: "Mid-Range Traveller",
      sub: "$170/day",
      days: [
        {
          day: "Day 1",
          title: "Broadway, Ryman Auditorium & Hot Chicken",
          items: [
            "Fly into BNA, rideshare to hotel ($20–25). Check into a hotel near SoBro (South of Broadway) or The Gulch ($130–200/night)",
            "Ryman Auditorium guided tour ($30pp) — the original home of the Grand Ole Opry, stunning acoustics, see the original pews, backstage, and dressing rooms. Guided tours run every 30 minutes",
            "If there's a Ryman show that night, book tickets in advance ($35–150pp) — a far more intimate experience than the modern Grand Ole Opry",
            "Honky Tonk Highway afternoon at your own pace — Tootsie's, Robert's, Layla's, Whiskey Bent. No covers, just tip the bands",
            "Lunch: Puckett's Grocery & Restaurant (live music while you eat, meat-and-three plates, ~$18)",
            "Nashville Farmer's Market at Bicentennial Capitol Mall State Park — seasonal produce, local food vendors, outdoor space",
            "Hot chicken dinner: Hattie B's Hot Chicken on Broadway (sit-down, ~$20) — order the 'Hot' level your first time, 'Damn Hot' if you're experienced with spice",
            "Evening: Live show at the Station Inn in The Gulch (bluegrass, small venue, $12–20 cover) — as authentic as Nashville gets",
          ],
          cost: "$110–140 (hotel portion + Ryman + food + show)",
        },
        {
          day: "Day 2",
          title: "Country Music Hall of Fame, Studio B & East Nashville",
          items: [
            "Country Music Hall of Fame ($30) + RCA Studio B combo ($42 combined) — spend 3–4 hours here",
            "Lunch at Merchants Restaurant in SoBro (~$22pp) — two floors, historic space, excellent burgers and salads",
            "Afternoon: Music Row walking tour, audio guide available or hire a private guide",
            "Johnny Cash Museum ($20) — comprehensive museum covering Cash's entire life and career, including his time at Sun Records and his American Recordings era. Small but perfectly curated",
            "Rideshare to East Nashville ($8) — Five Points neighbourhood exploration",
            "Grimey's record store — even if you don't buy, the community board lists every Nashville show happening this week",
            "Cocktails at Attaboy East Nashville (acclaimed cocktail bar, no menu — just tell them what you like, ~$16/drink)",
            "Dinner at Rolf and Daughters (acclaimed Italian, seasonal, ~$50pp) or Margot Cafe & Bar (~$40pp)",
            "Bluebird Cafe songwriter showcase ($7 reservation + tips) — this is non-negotiable if you can get a seat",
          ],
          cost: "$120–150 (hotel portion + museums + food + Bluebird)",
        },
        {
          day: "Day 3",
          title: "Grand Ole Opry & Nashville Parthenon",
          items: [
            "Morning: Nashville Parthenon in Centennial Park ($6 inside) — 42-foot statue of Athena, the largest indoor statue in the Western Hemisphere",
            "Centennial Park walk — free, peaceful, ducks on the lake",
            "Brunch: The Nashville Palace (~$22pp) or Mitchell's Deli in East Nashville ($15)",
            "Afternoon: Backstage tour of the Grand Ole Opry ($35pp) — see the storied dressing rooms and the famous wooden circle of the Ryman stage embedded in the Grand Ole Opry stage floor",
            "Grand Ole Opry show (evening) — Tuesday, Friday, or Saturday shows are the best. Tickets $45–80pp. A rotating lineup of country legends and emerging artists performs in 30-minute sets",
            "Post-Opry: The General Jackson Showboat moonlight cruise on the Cumberland River (Tues/Fri/Sat, $55–85pp including dinner show) — combine with the Opry for the ultimate Nashville evening",
            "Or: head back to Broadway for one last night on the honky tonk strip",
            "WeGo Bus or rideshare to BNA in the morning",
          ],
          cost: "$130–160 (hotel portion + Opry + brunch + optional showboat)",
        },
      ],
    },
    {
      label: "Luxury Experience",
      sub: "$380/day",
      days: [
        {
          day: "Day 1",
          title: "Private Music City Tour & VIP Broadway Evening",
          items: [
            "Private car from BNA to hotel ($45–60)",
            "Check into The Joseph (Nashville's leading luxury hotel), 1 Hotel Nashville, or Loews Vanderbilt ($350–650/night)",
            "Private Music City history tour with a professional guide ($150–200pp, 4 hours) — covers the music industry, civil rights history, and Nashville's transformation from a regional city to a global music hub",
            "Ryman Auditorium VIP behind-the-scenes tour ($65pp) with access to the backstage artist lounge",
            "Lunch at Josephine (seasonal New American, ~$45pp) or Lockeland Table (~$40pp)",
            "Afternoon: The Gulch neighbourhood, boutique shopping, and the 'I Believe in Nashville' mural for photos",
            "Pre-dinner cocktails at the rooftop bar at L27 Rooftop at Thompson Nashville (panoramic city views, ~$18/cocktail)",
            "Dinner at The 404 Kitchen (converted shipping container, Michelin-recognized, ~$80pp) or Adele's (~$70pp)",
            "VIP bar seating at Tootsie's with a dedicated server — request in advance for best tables ($25/person minimum spend)",
          ],
          cost: "$450–550 (hotel portion + private guide + fine dining + VIP Broadway)",
        },
        {
          day: "Day 2",
          title: "Recording Studio Experience, Hall of Fame & Bluebird",
          items: [
            "Private 2-hour recording session at a working Music Row studio — several studios offer tourist recording experiences where you record one song with session musicians ($200–400pp depending on studio and musicians)",
            "Country Music Hall of Fame + RCA Studio B private curator tour ($75pp supplement for private group access)",
            "Lunch at Catbird Seat (avant-garde tasting menu, book weeks in advance, $155pp) — one of the most acclaimed restaurants in the American South",
            "Afternoon: private guide to East Nashville including the storied history of the Edgefield neighbourhood and the record shops",
            "Grimey's new releases listening session — the store staff will curate a listening session for serious music fans (free)",
            "Spa treatment at The Joseph's Rhinestone Cowboy spa or 1 Hotel's rooftop pool",
            "Private dinner reservation at Rolf and Daughters (top table, ~$60pp) followed by exclusive Bluebird Cafe reservation",
            "Bluebird Cafe: ask your hotel concierge about private party reservations for groups or early seating access",
          ],
          cost: "$500–650 (hotel portion + recording session + fine dining + private guide + spa)",
        },
        {
          day: "Day 3",
          title: "Jack Daniel's Private Tour & Grand Ole Opry VIP",
          items: [
            "Private car to Lynchburg for the Jack Daniel's Distillery ($200 car round trip, 80 min each way)",
            "Jack Daniel's private master distiller tour ($75pp) — exclusive access to the warehouse sampling, cave spring water source, and barrel selection experience",
            "Lynchburg lunch at Miss Mary Bobo's Boarding House (book ahead, family-style Southern lunch, ~$35pp) — a genuine Tennessee institution since 1908",
            "Return to Nashville in the afternoon",
            "Grand Ole Opry: premium circle seating ($95–150pp) — the best seats in the house with unobstructed views of the stage",
            "Backstage meet-and-greet with artists post-show (arrange through Opry Fan Club or hotel concierge, availability varies)",
            "Post-Opry farewell dinner at Henley (modern American, Kimpton Aertson Hotel, ~$80pp) or Fable Lounge for craft cocktails and small plates (~$50pp)",
            "Private car to BNA in the morning — Priority Pass lounge access in the main terminal",
          ],
          cost: "$550–700 (hotel portion + Jack Daniel's private tour + Opry premium + fine dining + private car)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget 🎒",
      accommodation: "$45–80 (hostel/budget hotel)",
      food: "$25–40 (hot chicken, honky tonk bar food)",
      transport: "$10–20 (WeGo bus + rideshares)",
      activities: "$10–30 (Hall of Fame or Ryman, honky tonks free)",
      total: "$90–170/day",
    },
    {
      tier: "Mid-Range ✨",
      accommodation: "$130–200 (SoBro/Gulch hotel)",
      food: "$55–85 (restaurants + bar tabs)",
      transport: "$25–40 (rideshares)",
      activities: "$40–75 (museums + Opry show + Bluebird)",
      total: "$250–400/day",
    },
    {
      tier: "Luxury 💎",
      accommodation: "$350–650 (The Joseph, 1 Hotel, Loews)",
      food: "$130–200 (fine dining tasting menus)",
      transport: "$50–80 (private car)",
      activities: "$100–400 (recording session, private tours, Opry VIP)",
      total: "$630–1,330/day",
    },
    {
      tier: "Bachelorette Season 👰",
      accommodation: "+40–60% (book 3–6 months ahead on weekends)",
      food: "Same range but bar tabs multiply",
      transport: "$30–60 (party bus rentals start at $100/hr shared)",
      activities: "$50–200 (pedal taverns, bar crawls, tour packages)",
      total: "Add $80–200 to base tier on weekends",
    },
    {
      tier: "Jack Daniel's Day Trip 🥃",
      accommodation: "Stay in Nashville",
      food: "$35 (Miss Mary Bobo's lunch)",
      transport: "$40 (car rental) or $200 (private car)",
      activities: "$20–75 (distillery tour + tasting)",
      total: "$95–310 total for the day trip",
    },
  ],

  mistakes: [
    {
      icon: "🎤",
      title: "Not Booking the Bluebird Cafe Far Enough in Advance",
      desc: "The Bluebird Cafe seats fewer than 100 people and hosts some of the most intimate and extraordinary songwriting showcases in the world. Tables sell out weeks ahead for weekend shows. Book at bluebirdcafe.com the moment you know your Nashville dates — the $7–15 reservation fee is the best value in Music City.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌶️",
      title: "Ordering Too-Spicy Hot Chicken on Your First Try",
      desc: "Nashville hot chicken has five or more heat levels. If you're not a regular chilli-head, start at 'Medium' (plenty of heat). 'Hot' is genuinely hot. 'Damn Hot' and above will cause most people real pain. The chicken is so good that going too spicy on your first try and having to stop eating is a genuine tragedy. Work your way up.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏨",
      title: "Booking a Weekend Hotel Without Enough Lead Time",
      desc: "Nashville is one of the USA's most popular bachelorette and bachelor party destinations. Downtown hotels on Friday and Saturday nights in spring and fall sell out months in advance and prices spike dramatically. Book 8–12 weeks ahead for weekend stays. Weeknights (Tuesday–Thursday) are 30–40% cheaper and the city is more relaxed.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚌",
      title: "Assuming Nashville is Walkable Like Other Cities",
      desc: "Downtown Broadway is extremely walkable, but Nashville is a car-centric Southern city. The Grand Ole Opry is 8 miles from downtown (a $20 rideshare). East Nashville is a $10 rideshare. Jack Daniel's is 80 minutes by car. Budget for rideshares or rent a car. The WeGo bus system exists but runs infrequently outside of the main routes.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🎸",
      title: "Ignoring East Nashville and Focusing Only on Broadway",
      desc: "Broadway is a must, but if you only spend time there, you'll miss the real Nashville. East Nashville's Five Points is where working musicians actually live, drink, and play. Grimey's record store, the Pharmacy Burger, Attaboy cocktail bar, and small venues like 3rd & Lindsley are where music fans come to hear tomorrow's country and Americana stars tonight.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🎵",
      title: "Tip the Band — It's How They Make a Living",
      desc: "Every honky tonk band on Broadway plays all day for tips — there's no cover charge, but they depend on tips from the audience. $1–5 per set is the expected norm. Robert's Western World in particular has an extraordinary house band (the band 'BR549' members often play there) — be generous. You're getting a live music experience that costs $50+ in any other city, for free.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🥃",
      title: "The Jack Daniel's Distillery is Technically in a Dry County",
      desc: "Moore County, Tennessee — home to the Jack Daniel's Distillery — is one of the few dry counties in the USA, meaning alcohol cannot be sold in restaurants or shops. You can only taste whiskey at the distillery itself as part of a paid tour experience. This is a quirk of Tennessee law that has existed since Prohibition and was never repealed. It's worth knowing before you drive 80 minutes expecting to drink at a local bar.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎟️",
      title: "Book Grand Ole Opry Tickets for a Tuesday or Friday Show",
      desc: "The Grand Ole Opry runs shows Tuesday, Friday, and Saturday. Saturday night shows are the most prestigious and sell out first, but Friday shows often feature equally big names with a more relaxed crowd. Tuesday shows are the best-kept secret — dedicated fans and industry insiders fill the seats, and the atmosphere is electric without the tourist spike. Go to opry.com and check who's on the bill for each night before booking.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏛️",
      title: "The Nashville Parthenon is More Impressive Than It Sounds",
      desc: "A full-scale replica of the Athenian Parthenon in a Tennessee park sounds like a novelty act — but the Nashville Parthenon is genuinely stunning. Built in 1897 for the state centennial, it houses a 42-foot gilded statue of Athena (the largest indoor statue in the Western Hemisphere) and an impressive collection of 19th-century American paintings. The exterior at sunset is extraordinary. Pay the $6 to go inside.",
      color: "bg-teal-50 border-teal-200",
    },
  ],

  faqs: [
    {
      q: "What is the best time to visit Nashville?",
      a: "April–May is ideal: warm weather (65–80°F), the CMA Fest lineup is announced (the festival itself is in June, draw your own conclusions), and spring wildflowers make Centennial Park beautiful. September–October is equally good: cooler temperatures, the Americana Music Festival in September, and the fall colours beginning. Summer (June–August) is hot, humid, and Nashville is packed with bachelor/bachelorette parties. January–February is the slowest and cheapest time to visit.",
    },
    {
      q: "How do I get from Nashville Airport (BNA) to downtown?",
      a: "The WeGo Bus Route 18 Express goes from BNA to downtown Nashville for $2 each way — it runs frequently and is the budget option. A rideshare (Uber/Lyft) costs $20–25 to downtown and takes 15–25 minutes. There's no direct rail connection. If you're renting a car, BNA has rental car facilities on-site, and downtown parking in garages runs $15–30/day.",
    },
    {
      q: "Is Nashville safe for tourists?",
      a: "Downtown Nashville and the Broadway area are very tourist-friendly and busy with visitors year-round. Like any city, exercise normal awareness late at night. East Nashville is safe and increasingly gentrified. The Gulch and Midtown are fine. Avoid walking alone late at night in unfamiliar areas beyond downtown. Broadway specifically is extremely well-patrolled given the tourist economy.",
    },
    {
      q: "Can you do the Grand Ole Opry and Jack Daniel's Distillery in the same trip?",
      a: "Yes, but not on the same day — Jack Daniel's is 80 minutes south and the Grand Ole Opry is east of downtown. Plan Jack Daniel's as a full day trip (leave by 9am, back by 4pm, then have your evening free). Go to the Opry on a separate evening. If you have 3 days, a logical split is: Day 1 Broadway honky tonks, Day 2 museums + Bluebird Cafe, Day 3 morning Jack Daniel's day trip + evening Grand Ole Opry.",
    },
  ],

  combineWith: ["Memphis", "New Orleans", "Asheville", "Louisville", "Chattanooga"],
  relatedSlugs: ["new-orleans-4-days", "memphis-2-days", "asheville-3-days", "usa-south-road-trip"],

  galleryQuery: "nashville broadway honky tonk grand ole opry country music tennessee",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function NashvillePage() {
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
