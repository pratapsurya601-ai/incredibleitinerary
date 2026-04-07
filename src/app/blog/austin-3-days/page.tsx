import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Austin",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "austin-3-days",
  heroQuery: "austin texas sixth street live music capitol building texas",
  heroAlt: "Austin Texas Sixth Street live music bars and Texas State Capitol",
  category: "North America",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "The live music capital of the world has more live music venues per capita than Nashville — on any given Tuesday night you can hear world-class blues, country, jazz, and rock simultaneously from bars within a single block of each other. People queue from 6am for Franklin Barbecue's 11am opening, willing to wait four hours for brisket that redefines the word. You can swim in Barton Springs Pool — a natural 68°F spring in the middle of the city — for $5. And the tech industry has turned a music city into Silicon Hills without, somehow, killing the weird. Austin, Texas: weird and proud of it.",
  stats: {
    duration: "3 Days",
    budgetFrom: "$75",
    bestMonths: "Mar–May (SXSW/bluebonnets) or Oct–Nov",
    airport: "AUS (Austin-Bergstrom)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "music", emoji: "🎸", label: "Live Music Guide" },
    { id: "food", emoji: "🍖", label: "BBQ & Food Scene" },
    { id: "getaround", emoji: "🚌", label: "Getting Around" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Yes — B1/B2 Tourist/Business Visa"],
        ["Fee", "$185 USD (non-refundable MRV fee)"],
        ["Process", "Online DS-160 application + in-person interview at US Consulate/Embassy"],
        ["Locations", "US Embassy New Delhi, Consulates in Mumbai, Chennai, Hyderabad, Kolkata"],
        ["Processing", "3–8 weeks; apply at least 3 months before travel"],
        ["Validity", "Typically 10-year multiple entry visa; each stay up to 6 months"],
        ["Tip", "Strong bank statements, employment letter, and property ownership significantly improve approval chances"],
      ],
    },
    {
      flag: "🇬🇧🇦🇺🇪🇺",
      title: "UK / Australian / EU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required", "No — ESTA (Electronic System for Travel Authorization)"],
        ["Fee", "$21 USD per application"],
        ["Apply", "Online at esta.cbp.dhs.gov — official US government site only"],
        ["Validity", "2 years or until passport expires (multiple entries, 90 days each)"],
        ["Processing", "Usually approved within minutes; apply at least 72 hours before departure"],
        ["Note", "ESTA is not a visa — denial is possible; if previously denied a visa, apply for B1/B2 instead"],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$75/day",
      days: [
        {
          day: "Day 1",
          title: "Sixth Street, Capitol & Free Austin",
          items: [
            "Arrive at AUS, take the 100 Flyer bus downtown ($1.25) or share a Lyft ($15–20)",
            "Check into a hostel — Austin Hostel or Drifter Jack's Hostel (dorm $35–45/night, great locations)",
            "Walk the Texas State Capitol grounds (free) — the Texas Capitol is taller than the US Capitol in Washington DC",
            "Free interior tours of the Capitol run hourly 8:30am–4:30pm — genuinely impressive rotunda",
            "Lunch on South Congress Avenue (SoCo): Torchy's Tacos ($10–14) or Amy's Ice Creams for dessert ($5)",
            "Afternoon: walk SoCo from 1st to Oltorf — vintage boutiques, local shops, great street murals",
            "Evening: Sixth Street begins at 9pm — start at the east side for authentic music bars (no cover or $5)",
            "Catch live music at Hole in the Wall, Emo's, or Stubb's outdoor stage (free outdoor shows some nights)",
          ],
          cost: "$65–85 (accommodation + food + transport)",
        },
        {
          day: "Day 2",
          title: "Franklin Barbecue (Early Queue) + Barton Springs",
          items: [
            "Arrive at Franklin Barbecue (900 E 11th St) by 7am — yes, 7am for an 11am opening. Bring a camp chair, coffee, and a book. The queue is a social event.",
            "Franklin opens at 11am — brisket, ribs, pulled pork, sausage. The brisket will ruin all other brisket for the rest of your life. Half-pound brisket plate with sides: ~$22",
            "Alternatively: La Barbecue (shorter queue, nearly as good) or Terry Black's (no queue, great brisket) if you want to sleep",
            "Afternoon: Barton Springs Pool ($5) — a spring-fed natural pool, 68°F year-round, 1/3 mile long, in the middle of Zilker Park",
            "Walk around Zilker Park ($0) — 351 acres along the Colorado River, Austin's Central Park",
            "Sunset: Rainey Street bars — Banger's Sausage House and Beer Garden, or Half Step cocktail bar",
            "Evening: more live music — Continental Club on South Congress for legendary Austin country/rock",
          ],
          cost: "$65–85 (BBQ + pool + drinks + food)",
        },
        {
          day: "Day 3",
          title: "Bat Bridge, East Austin & Departure",
          items: [
            "Morning: Congress Avenue Bridge bat colony — 1.5 million Mexican free-tailed bats emerge at dusk (March–November). For daytime, check the bat cam underneath the bridge — fascinating colony visible from below",
            "Blanton Museum of Art (UT Campus, $12) — one of the best university art museums in the USA; Ellsworth Kelly's 'Austin' chapel is extraordinary",
            "East Austin brunch: Veracruz All Natural tacos ($3–4 each) from the food truck on Airport Blvd — the best breakfast tacos in Austin",
            "Walk or bike the East Austin street art district — murals along Cesar Chavez and 6th Street East",
            "Round Rock Donuts if departing north — the sugar-dusted giant rounds are legendary ($2 each), take a dozen home",
            "Bullock Texas State History Museum ($13) — three floors of Texas history with the IMAX theatre",
            "Head to AUS — the airport has great Tex-Mex if you want one final taco before departure",
          ],
          cost: "$55–75 (museum + food + transport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$155/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive, SoCo & Dinner at Uchiko",
          items: [
            "Arrive AUS, Lyft or rideshare to hotel ($20–30) — check in at Hotel Magdalena (South Congress, $180–220/night), South Congress Hotel, or Kimpton Hotel Van Zandt (music-themed, East Austin)",
            "South Congress Avenue walk — try Amy's Ice Creams, browse vintage shops, lunch at Perla's Seafood & Oyster Bar ($30–40)",
            "Afternoon: Texas State Capitol interior tour — free, 45 minutes, genuinely interesting Texas history",
            "Walk the Congress Ave Bridge and check the bat colony timing on the city's bat cam",
            "Evening: dinner at Uchiko ($60–80/person) — Tyson Cole's Japanese farmhouse cuisine, one of Austin's most acclaimed restaurants. Book in advance.",
            "After dinner: Stubb's Waller Creek Amphitheater or the venues on Red River Cultural District for live music",
          ],
          cost: "$280–360 (hotel + dining + activities)",
        },
        {
          day: "Day 2",
          title: "Franklin BBQ + Lake Travis + Live Music",
          items: [
            "Franklin Barbecue — queue from 8am (mid-range travellers can handle 3 hours if it means Franklin's). Worth every minute. Budget $25–30 for a full plate",
            "Afternoon: drive or Lyft to Lake Travis ($25 Lyft) — rent a kayak ($30/hour) or book a lake cruise on a pontoon boat ($45/person)",
            "Lake Travis swimming in turquoise Highland Lakes water — surprisingly clear for Texas",
            "Return to Austin: cocktails at Midnight Cowboy (reservation-only speakeasy, $20 cocktails) — one of the most unique bars in Texas",
            "Dinner at Launderette ($45–60/person) — Mediterranean-inspired Austin cuisine in a converted laundromat; charred broccolini and chicken under a brick are legendary",
            "Late night: Continental Club on SoCo for country/roots music — cover $10–15",
          ],
          cost: "$200–280 (Franklin + Lake Travis + dining + music)",
        },
        {
          day: "Day 3",
          title: "East Austin Arts, Blanton & Farewell Taco",
          items: [
            "Morning: East Austin breakfast at Kemuri Tatsu-ya ($20–30) — Japanese-Texas BBQ fusion, izakaya style, only in Austin",
            "Blanton Museum of Art ($12) — don't miss Ellsworth Kelly's 'Austin' building, a chapel of light commissioned for UT and completed just before Kelly died in 2015",
            "Walk the UT Austin campus (free) — the Tower, the South Mall, and the LBJ Presidential Library ($10)",
            "Lunch at Veracruz All Natural food truck ($12) — widely considered the best breakfast taco in Austin",
            "SXSW note: if visiting in March, the city transforms — free outdoor shows everywhere, tech keynotes, film premieres. Get a wristband for $200–300 for full access or attend free outdoor shows",
            "Bullock Texas State History Museum ($13) — essential Texas context before departure",
            "Depart AUS — grab a breakfast taco from the airport's Tacodeli for the flight",
          ],
          cost: "$150–200 (meals + museums + activities)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$340/day",
      days: [
        {
          day: "Day 1",
          title: "Four Seasons Austin & Sunset Rooftop",
          items: [
            "Arrive AUS, private car service to hotel ($60–80)",
            "Check in at Four Seasons Austin ($450–700/night) on the Colorado River, or Hotel Saint Cecilia (South Congress, boutique luxury, $350–600/night)",
            "Afternoon: pool and spa at Four Seasons — 90-minute massage $250",
            "Private Capitol tour with a state legislator guide (arranged via concierge) — $150 private experience",
            "Sunset cocktails at the Four Seasons terrace overlooking Lady Bird Lake",
            "Dinner at Uchi ($80–120/person) — the original Tyson Cole restaurant, the one that put Austin on the culinary map. Reserve 3 weeks in advance.",
            "Private music room experience at Hotel Van Zandt — live musician in a reserved listening room ($300 experience)",
          ],
          cost: "$900–1,200 (hotel + spa + dining)",
        },
        {
          day: "Day 2",
          title: "Private Franklin Barbecue + Lake Travis Private Boat",
          items: [
            "Franklin Barbecue — at this tier, use the online waitlist ($55 premium pre-order) to skip the full queue. Franklin now offers online ordering for pickup during limited windows. Worth it.",
            "Picnic at Barton Springs with Franklin BBQ — the most Austin thing you can possibly do",
            "Afternoon: private boat rental on Lake Travis ($400–600 for 4 hours, captain included) — swim off the boat in clear blue water 30 miles from downtown",
            "Return to Austin: private music history tour of Sixth Street and Red River with a local musician-guide ($150)",
            "Evening: Dinner at Comedor ($70–90/person) — contemporary Mexican in downtown Austin, sophisticated without being precious",
            "Private table at Austin City Limits Live at the Moody Center if a show is scheduled ($100–400 depending on artist)",
          ],
          cost: "$900–1,200 (Franklin + boat + dining + music)",
        },
        {
          day: "Day 3",
          title: "LBJ Ranch Day Trip + Farewell Dinner",
          items: [
            "Private car day trip to LBJ National Historic Site and Ranch, Stonewall TX (1.5 hrs each way, $200 private car) — Lyndon Johnson's birthplace, home, and grave; one of the most moving presidential sites in America",
            "Drive the Texas Hill Country back roads through Fredericksburg ($40 fuel) — wildflowers in March–April",
            "Lunch in Fredericksburg at the Ausländer Biergarten — German Texan food and craft beer $35",
            "Return to Austin for a final afternoon at Blanton Museum — Ellsworth Kelly's Austin chapel is unmissable",
            "Farewell dinner at Odd Duck ($65–85/person) — farm-to-table Texas cuisine using local producers; changing menu based on what's ready that week",
            "One final Sixth Street walk — even at the luxury level, the street is the street. Live music is free from the sidewalk.",
            "Private car to AUS — depart with Round Rock Donuts for the flight",
          ],
          cost: "$500–700 (day trip + dining + activities + transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$35–45 (hostel dorm)",
      food: "$20–30 (food trucks + tacos)",
      transport: "$5–15 (bus + share rides)",
      activities: "$15–25 (Capitol + pool)",
      total: "$75–115/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$180–220 (boutique hotel)",
      food: "$55–80 (restaurants + BBQ)",
      transport: "$25–45 (rideshare)",
      activities: "$30–60 (museums + kayak)",
      total: "$290–405/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–700 (Four Seasons/Saint Cecilia)",
      food: "$100–150 (Uchi/Comedor/Odd Duck)",
      transport: "$60–200 (private car)",
      activities: "$150–600 (private tours + boat)",
      total: "$660–1,650/day",
    },
    {
      tier: "🎸 SXSW Surge",
      accommodation: "2–3x normal rates ($200–600+)",
      food: "As above",
      transport: "As above",
      activities: "$0 (free shows) to $300+ (wristband)",
      total: "Add $200–600 over base costs",
    },
    {
      tier: "🍖 BBQ Budget",
      accommodation: "Not applicable",
      food: "$20–35 (Franklin/La BBQ/Terry Black's)",
      transport: "$10 (rideshare to Franklin)",
      activities: "Not applicable",
      total: "$30–45 (one magnificent meal)",
    },
  ],
  mistakes: [
    {
      icon: "⏰",
      title: "Arriving at Franklin Barbecue after 9am",
      desc: "Franklin Barbecue sells out every single day, usually by 1pm. If you arrive at 11am when they open without having queued, you will be turned away. The queue starts at 6–7am. Bring a camp chair, coffee, snacks, and patience. Or go to La Barbecue (shorter queue) or Terry Black's (no queue) — both excellent.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🎸",
      title: "Only going to Sixth Street (and missing the better venues)",
      desc: "Sixth Street is the famous strip but Red River Cultural District (on Red River St between 7th and 10th) is where Austin's real music scene lives — Stubb's, Mohawk, Emo's, Antone's. South Congress has the Continental Club, one of the most legendary venues in American music. Don't spend all your time on crowded Sixth Street.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🌡️",
      title: "Underestimating Austin summer heat",
      desc: "June–August in Austin is genuinely brutal — 38–42°C (100–107°F) with high humidity. Outdoor activities become difficult by noon. If visiting in summer, schedule outdoor activities for before 10am and after 6pm, stay in air-conditioned spaces midday, and hydrate constantly. March–May and October–November are far more pleasant.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🚗",
      title: "Assuming you don't need a car",
      desc: "Downtown Austin and South Congress are walkable, but Lake Travis, the Hill Country, Round Rock, and LBJ Ranch all require a car. Austin's public transport is limited outside the central corridor. Rent a car for day trips or you'll pay $40–60 each way in rideshares. The Lyft/Uber surge pricing during SXSW and ACL Festival is also extreme.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "📅",
      title: "Not checking the live music calendar in advance",
      desc: "Austin has venues with national-level acts most nights, but the best shows sell out weeks in advance. Check Do512.com (Austin's best events calendar) before you travel and buy tickets for any shows you want. Stubb's outdoor amphitheater, ACL Live at the Moody Center, and Emo's all have ticketed shows. Free outdoor shows are great but ticketed shows are often extraordinary.",
      color: "border-purple-200 bg-purple-50",
    },
  ],
  tips: [
    {
      icon: "🦇",
      title: "The bat emergence is free and extraordinary",
      desc: "Congress Avenue Bridge hosts the largest urban bat colony in North America — 1.5 million Mexican free-tailed bats emerge at dusk from March through November. Show up 20 minutes before sunset, stand on the bridge or watch from the kayak launch below. It takes 45 minutes for all bats to emerge. Completely free, completely spectacular, unlike anything else in the USA.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌮",
      title: "Breakfast tacos are the religion — order correctly",
      desc: "Austin's breakfast taco is a distinct cultural institution. The best are at Veracruz All Natural (food truck), Juan in a Million (East Austin institution), and Tacodeli. Order: migas taco (eggs scrambled with crispy tortilla strips), barbacoa taco (braised beef cheek), and the Don Juan at Juan in a Million. Under $5 each. Eat two or three.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "💻",
      title: "SXSW is worth building a trip around",
      desc: "South by Southwest (March, 10 days) transforms Austin into the world's largest convergence of music, film, and tech. A wristband ($200–300) gives access to hundreds of official showcases. But dozens of free outdoor shows happen simultaneously — walk Sixth Street and Red River for free world-class performances. The energy of Austin during SXSW is unlike any other event on earth.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🏊",
      title: "Barton Springs is the best $5 you'll spend in Texas",
      desc: "Barton Springs Pool is a 68°F (20°C) natural spring in Zilker Park, open year-round (except Thursdays for cleaning). In summer heat, it's an essential refuge. In winter, locals still swim in it. $5 entry, bring your own towel. The greenbelt hiking trail starts directly from Barton Springs and winds through limestone canyons — completely free.",
      color: "border-purple-200 bg-purple-50",
    },
  ],
  faqs: [
    {
      q: "Do UK and Australian passport holders need a visa for Austin / the USA?",
      a: "No. UK and Australian citizens (along with most EU passport holders) qualify for ESTA — the Electronic System for Travel Authorization. Apply online at esta.cbp.dhs.gov for $21. Approval is usually instant. ESTA allows up to 90 days per visit and is valid for 2 years or until your passport expires. Apply at least 72 hours before departure. Never use third-party ESTA websites — only the official .gov site.",
    },
    {
      q: "Is 3 days enough for Austin?",
      a: "Three days covers the essential Austin experience — Franklin Barbecue, Sixth Street live music, Barton Springs, the Capitol, and South Congress. Four or five days adds Lake Travis, the Hill Country, and a more relaxed pace. If visiting during SXSW or ACL Festival (October), extend to 4–5 days to absorb the festival atmosphere properly. Austin rewards slow exploration.",
    },
    {
      q: "When is the best time to visit Austin?",
      a: "March–May is peak season: wildflower season (Texas bluebonnets transform the Hill Country), SXSW in March, and warm-but-not-brutal weather (22–28°C). October–November is equally excellent — Austin City Limits Music Festival (ACL) in October, cooler temperatures, and fall colour in the Hill Country. Avoid June–August unless you're heat-tolerant: it regularly hits 40°C+ and outdoor activities become difficult.",
    },
    {
      q: "What makes Austin's BBQ different from other Texas BBQ?",
      a: "Central Texas BBQ — the style practised at Franklin, La Barbecue, and Terry Black's — is defined by beef brisket cooked low-and-slow over post oak wood for 12–18 hours with only salt and pepper as seasoning. No sauce (sauce is served on the side as an afterthought). The goal is a deep mahogany bark, a pink smoke ring, and meat so tender it collapses. It is fundamentally different from Memphis ribs, Kansas City sauce-heavy BBQ, or Carolina pulled pork. Austin's style is considered by many food critics to be the apex of American BBQ.",
    },
  ],
  combineWith: ["san-antonio-2-days", "houston-3-days", "new-orleans-4-days", "dallas-2-days"],
  relatedSlugs: ["nashville-3-days", "denver-4-days", "miami-4-days", "new-york-5-days"],
  galleryQuery: "austin texas live music sixth street bbq brisket capitol texas",
};

export const metadata: Metadata = {
  title: "Austin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
  description:
    "Plan your perfect 3-day Austin trip. Franklin Barbecue, Sixth Street live music, Barton Springs, the bat colony, and SoCo shopping — all budgets covered for 2026.",
  keywords: [
    "Austin travel guide",
    "Austin 3 days itinerary",
    "Austin Texas things to do",
    "Franklin Barbecue Austin",
    "Austin live music Sixth Street",
    "Barton Springs Pool Austin",
    "SXSW Austin",
    "Austin budget travel",
    "Austin visa ESTA",
    "Austin Texas food scene",
  ],
  openGraph: {
    title: "Austin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "The live music capital of the world — Franklin BBQ, Sixth Street, Barton Springs, 1.5 million bats at dusk, and the best tacos in America. Your complete 3-day guide.",
    type: "article",
    url: "https://incredibleitinerary.com/blog/austin-3-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Austin Texas Sixth Street live music district at night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin in 3 Days: The Complete Travel Guide 2026",
    description: "Franklin BBQ, live music, bats at dusk, Barton Springs — your complete Austin, Texas itinerary.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/austin-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Austin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "The live music capital of the world — Franklin Barbecue, Sixth Street, Barton Springs Pool, the Congress Avenue bat colony, and SXSW. Your complete 3-day Austin guide.",
      image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1200&h=630&fit=crop",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/austin-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Austin 3 Days",
          item: "https://incredibleitinerary.com/blog/austin-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Austin",
      description:
        "The Live Music Capital of the World and home of Franklin Barbecue, Barton Springs Pool, South by Southwest (SXSW), and the largest urban bat colony in North America.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.2672,
        longitude: -97.7431,
      },
      touristType: ["Music lover", "Foodie", "Tech traveller", "Festival-goer"],
      includesAttraction: [
        { "@type": "TouristAttraction", name: "Franklin Barbecue" },
        { "@type": "TouristAttraction", name: "Sixth Street Entertainment District" },
        { "@type": "TouristAttraction", name: "Barton Springs Pool" },
        { "@type": "TouristAttraction", name: "Congress Avenue Bat Colony" },
        { "@type": "TouristAttraction", name: "Texas State Capitol" },
        { "@type": "TouristAttraction", name: "South Congress Avenue (SoCo)" },
      ],
    },
  ],
};

export default function AustinPage() {
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
