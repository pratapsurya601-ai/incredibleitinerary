import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "New Orleans 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your New Orleans trip in 4 days. Plan the perfect 4-day New Orleans itinerary — French Quarter, Frenchmen Street jazz, beignets at Café Du Monde,.",
  keywords: [
    "New Orleans travel guide",
    "New Orleans itinerary 4 days",
    "French Quarter New Orleans",
    "Frenchmen Street jazz",
    "Cafe du Monde beignets",
    "New Orleans budget travel",
    "Mardi Gras New Orleans",
    "Commander's Palace restaurant",
    "New Orleans swamp tour",
    "Garden District mansions",
    "ESTA visa USA",
    "US B1/B2 tourist visa",
    "Louisiana travel guide",
  ],
  openGraph: {
    title: "New Orleans 4-Day Itinerary 2026: Trip Planner",
    description:
      "Jazz at 11am, free beignets at Café Du Monde, second-line parades, and ghost tours in America's most haunted city. Full itinerary from $80/day.",
    url: "https://incredibleitinerary.com/blog/new-orleans-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?new-orleans,french-quarter,jazz",
        width: 1200,
        height: 630,
        alt: "New Orleans French Quarter with jazz clubs colorful buildings Bourbon Street",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Orleans 4-Day Itinerary 2026: Trip Planner",
    description:
      "Bourbon Street, Frenchmen Street jazz, beignets and ghost tours — New Orleans defies every rule of American cities. Full guide from $80/day.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/new-orleans-4-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "New Orleans in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day New Orleans itinerary covering the French Quarter, Frenchmen Street, Café Du Monde, Garden District, swamp tours and the best food in America — with plans from $80 to $350 per day.",
      image: "https://source.unsplash.com/1200x630/?new-orleans,french-quarter,jazz",
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/new-orleans-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "New Orleans 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/new-orleans-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "New Orleans",
      description:
        "A vibrant Louisiana city famous for jazz music, Creole and Cajun cuisine, Mardi Gras, the historic French Quarter, and a culture unlike anywhere else in the United States.",
      url: "https://incredibleitinerary.com/blog/new-orleans-4-days",
      touristType: ["Music", "Food & Drink", "Culture", "History", "Festivals"],
      geo: { "@type": "GeoCoordinates", latitude: 29.9511, longitude: -90.0715 },
    },
  ],
};

/* ── Page data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "New Orleans",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "new-orleans-4-days",
  heroQuery: "new orleans bourbon street jazz french quarter louisiana",
  heroAlt: "New Orleans French Quarter with jazz clubs colorful buildings Bourbon Street",
  category: "North America",
  date: "January 20, 2026",
  readTime: "15 min read",

  intro:
    "At 11am on a Tuesday, jazz is already spilling from a bar on Frenchmen Street. A second-line funeral procession — brass band, umbrellas, dancing mourners — turns a corner and transforms grief into pure joy. At Café Du Monde, a mountain of powdered sugar beignets arrives with a café au lait so thick it could be dessert. Somewhere across the French Quarter, a ghost tour guide explains why this block has more documented hauntings per square mile than anywhere in America. New Orleans defies every rule of American cities: it eats better, parties harder, mourns more beautifully, and remembers its past more vividly than any other place in the country. Four days is enough to fall completely in love — and not nearly enough to see it all.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$80",
    bestMonths: "Oct–Apr (avoid summer humidity)",
    airport: "MSY",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "food", emoji: "🍽️", label: "Food & Drink Scene" },
    { id: "music", emoji: "🎷", label: "Music & Nightlife" },
    { id: "getting-around", emoji: "🚃", label: "Getting Around" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Type", "B1/B2 US Tourist/Business Visa"],
        ["Fee", "$185 (non-refundable, at time of application)"],
        ["Processing", "2–8 weeks (varies by consulate; can be longer)"],
        ["Validity", "Up to 10 years (multiple entry), typically 180 days per stay"],
        ["Apply At", "US Embassy or Consulate in India (New Delhi, Mumbai, Chennai, Kolkata, Hyderabad)"],
        ["Documents", "DS-160 form, passport photo, financial proof, ties to India, travel itinerary"],
        ["Interview", "In-person interview usually required — book early, slots fill fast"],
        ["Tip", "Apply 3–6 months in advance; summer slots fill quickly at all Indian consulates"],
      ],
    },
    {
      flag: "🇬🇧",
      title: "UK / AU / EU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "No visa required — ESTA mandatory"],
        ["ESTA Fee", "$21 (online at esta.cbp.dhs.gov — official only)"],
        ["ESTA Processing", "Usually approved within minutes; allow 72h before flying"],
        ["Stay Limit", "90 days per visit, no extensions"],
        ["EU Citizens", "ESTA required (same as UK/AU — €21)"],
        ["Passport", "Must be e-Passport (biometric chip) for ESTA eligibility"],
        ["Tip", "Only apply on the official CBP site — third-party ESTA sites charge up to $100 for the same result"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$80/day",
      days: [
        {
          day: "Day 1",
          title: "French Quarter & Frenchmen Street Introduction",
          items: [
            "Fly into Louis Armstrong New Orleans International Airport (MSY) — airport shuttle to French Quarter costs $24pp (Uber is ~$30)",
            "Check into a French Quarter hostel — India House or St Christopher's have dorms from $28/night",
            "Walk Bourbon Street in the afternoon before the drunk tourist rush — the architecture and iron-lace balconies are best appreciated sober",
            "Obligatory stop: Café Du Monde for beignets and café au lait ($5 for the classic order) — open 24 hours on Jackson Square",
            "Walk to Jackson Square: street musicians, fortune tellers, the St Louis Cathedral — all free",
            "Evening: take the $2 streetcar on St Charles Avenue for a moving tour of the Garden District",
            "Night: Frenchmen Street in the Marigny neighbourhood — the real jazz scene, free music from multiple bars, no cover at most venues",
          ],
          cost: "~$70 (airport shuttle + hostel + food + streetcar + 2 drinks)",
        },
        {
          day: "Day 2",
          title: "Garden District, Cemeteries & Po'Boys",
          items: [
            "Morning: ride the St Charles streetcar ($2 each way, or $3 for a day pass) to the Garden District — antebellum mansions and oak-draped streets",
            "Walk Magazine Street: independent shops, coffee shops, and neighbourhood bakeries — free entertainment",
            "Lunch: a classic dressed po'boy from Domilise's or Parkway Bakery (~$10–13) — roast beef, gravy, pickles, and hot sauce",
            "Afternoon: guided walking tour of St Louis Cemetery No.1 ($20 — required by law, no solo entry) — above-ground tombs dating from 1789, Marie Laveau's rumoured tomb",
            "New Orleans Museum of Art (NOMA) on Tuesdays: free admission — worth visiting for the Sydney & Walda Besthoff Sculpture Garden alone",
            "Evening: back to Frenchmen Street for more jazz — Spotted Cat Music Club and d.b.a. are the best venues ($5–10 cover some nights)",
            "Late-night: grab a Lucky Dog hot dog from a cart on Bourbon Street — an authentic New Orleans tradition since 1947",
          ],
          cost: "~$65 (streetcar + cemetery tour + lunch + a couple drinks)",
        },
        {
          day: "Day 3",
          title: "Swamp Tour & Creole Soul Food",
          items: [
            "Morning: budget swamp tour departing from New Orleans — Jean Lafitte Swamp Tours offer shared boats from $25pp (pickup available from French Quarter)",
            "See alligators, cypress trees draped in Spanish moss, and water birds in the Atchafalaya Basin — genuinely wild and unlike anything in urban America",
            "Lunch on return: Central Grocery on Decatur Street — birthplace of the muffuletta sandwich (half muffuletta feeds two, ~$14)",
            "Afternoon: walk the Treme neighbourhood — America's oldest African American neighbourhood, cradle of jazz, and still vibrant",
            "Visit the backside of Congo Square in Louis Armstrong Park (free) — where enslaved people gathered on Sundays and forged what became jazz",
            "WWII Museum if time allows ($30 — America's best history museum, genuinely extraordinary)",
            "Evening: cheap Creole dinner — Willie Mae's Scotch House in Treme for the best fried chicken in the city (~$15 for a plate)",
          ],
          cost: "~$80 (swamp tour + food + beer + attractions)",
        },
        {
          day: "Day 4",
          title: "Magazine Street, Bywater & Farewell",
          items: [
            "Morning: wander the Bywater neighbourhood (east of the Marigny) — colourful shotgun houses, street art, and the best coffee shops in the city",
            "Café: Satsuma Cafe or Mojo Coffee for pour-overs and a fresh breakfast bowl (~$12)",
            "Walk the Mississippi Riverfront from the French Market back to Café Du Monde — free and beautiful in the morning light",
            "French Market: browse the outdoor market for local hot sauces, Zatarain's spices, and pralines (one praline from Southern Candymakers ~$3)",
            "Final lunch: a cup of gumbo and a bowl of red beans and rice at Dooky Chase's in Treme (~$15 — Leah Chase fed the Civil Rights movement here)",
            "Pick up a bottle of Louisiana hot sauce and a box of Community Coffee for souvenirs before heading to MSY",
            "Uber to MSY airport from French Quarter: ~$30–40",
          ],
          cost: "~$75 (food + market + Uber to airport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$160/day",
      days: [
        {
          day: "Day 1",
          title: "French Quarter & Jazz in the Right Places",
          items: [
            "Fly into MSY — take a pre-booked Lyft to your boutique hotel in the French Quarter or Marigny ($30–35)",
            "Check into a mid-range French Quarter hotel: the Maison de Ville or Hotel St Pierre — doubles from $120/night, excellent location",
            "Afternoon: join a guided French Quarter architecture tour (2h, $35pp via GetYourGuide) — the balconies, courtyards, and history are explained brilliantly",
            "Cocktail: the Sazerac at the Sazerac Bar in the Roosevelt Hotel — a New Orleans invention from 1838, ~$16",
            "Dinner: Dooky Chase's Restaurant (Treme) for a full Creole meal — fried chicken, gumbo, red beans, bread pudding, ~$45pp",
            "Evening: Frenchmen Street — tip the musicians at the Spotted Cat ($5 cover or tip jar) and enjoy world-class jazz in a living room-sized venue",
          ],
          cost: "~$150 (hotel + guided tour + Sazerac + dinner + jazz bar)",
        },
        {
          day: "Day 2",
          title: "Garden District, Commander's Palace & Cemeteries",
          items: [
            "Morning: St Charles streetcar to the Garden District for a self-guided mansion walk — download a Garden District map from the NOTMC website",
            "Coffee: Ancora Pizzeria and Salumeria on Magazine Street for espresso and a proper pastry",
            "Lunch: Commander's Palace — book in advance, famous for white-tablecloth Creole excellence; the weekday Jazz Brunch is ~$65pp and legendary",
            "Post-lunch: walk off Commander's Palace in Lafayette Cemetery No.1 (free, self-guided) — film location for Interview with the Vampire",
            "Afternoon: guided cemetery tour of St Louis No.1 ($20) and optional voodoo history walk in Treme ($25)",
            "Evening: cocktail at Arnaud's French 75 Bar — old-world glamour, excellent Champagne cocktails, ~$18",
            "Dinner: Cochon for Louisiana pork-forward Cajun cuisine, ~$50pp — chef Donald Link is a James Beard winner",
          ],
          cost: "~$165 (Commander's brunch + tours + cocktails + dinner)",
        },
        {
          day: "Day 3",
          title: "Swamp Tour, WWII Museum & Frenchmen",
          items: [
            "Morning: book a small-group swamp airboat tour ($65pp, GetYourGuide) — faster and more thrilling than pontoon boats, alligators up close",
            "Return by noon — check into hotel spa for a quick refresh if available",
            "Lunch: Parkway Bakery for the original roast beef po'boy (mid-range portion: ~$15) — a James Beard American Classic",
            "Afternoon: the National WWII Museum ($30) — genuinely extraordinary, allow 3+ hours, don't skip the 4D film",
            "Cocktail hour: Carousel Bar at the Hotel Monteleone — a slowly revolving bar in the French Quarter, a New Orleans institution (~$16/drink)",
            "Dinner: Clancy's in Uptown for classic New Orleans neighbourhood dining — fried oysters, smoked soft-shell crab, ~$55pp",
            "Late: Frenchmen Street for dancing — Café Negril or the Blue Nite Café for live R&B and funk",
          ],
          cost: "~$160 (airboat tour + museum + restaurant meals + cocktails)",
        },
        {
          day: "Day 4",
          title: "Bywater, Brunch & Departure",
          items: [
            "Brunch: Maurepas Foods in the Bywater — farm-to-table New Orleans brunch, highly regarded, ~$30pp",
            "Walk the Bywater and St Claude Arts District — street murals, galleries, and the most vibrant local neighbourhood in the city",
            "Coffee at Startenders on Magazine Street (specialty coffee) and pick up local goods: Creole spice kits, chicory coffee, Tabasco",
            "Last lunch option: Mother's Restaurant on Poydras — the debris po'boy (roast beef scraps) is legendary, a New Orleans must-try",
            "Afternoon: revisit favourite spots, buy pralines at Southern Candymakers, and pack",
            "Lyft to MSY: ~$35–45 from most central neighbourhoods; allow 45 minutes during peak afternoon traffic",
          ],
          cost: "~$160 (brunch + coffee + lunch + souvenirs + taxi to MSY)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$350/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at the Highest Level",
          items: [
            "Private car transfer from MSY airport (~$80) to the Windsor Court Hotel or Hotel Monteleone — both iconic French Quarter luxury properties from $350+/night",
            "Check-in and settle into a suite overlooking the French Quarter or the Mississippi River",
            "Afternoon: private French Quarter history tour with a historian-guide (2.5h, $150 private) — covering architecture, voodoo, the slave trade, and Creole culture",
            "Pre-dinner cocktails at the Windsor Court's Polo Club Lounge — the best whiskey selection in the South",
            "Dinner: Galatoire's on Bourbon Street — the most storied restaurant in New Orleans, beloved by locals since 1905; reserve the front room, ~$90pp minimum",
            "After dinner: private jazz experience at a Frenchmen Street venue — many musicians offer private after-hours sessions (arrange via hotel concierge)",
          ],
          cost: "~$380 (luxury hotel + private tour + Galatoire's + cocktails)",
        },
        {
          day: "Day 2",
          title: "Commander's Palace, Garden District & Cocktail Royalty",
          items: [
            "Breakfast in bed or in-room dining from the hotel — included at top-tier properties",
            "Morning: private guided Garden District walk with an architectural historian ($120 private, 2h)",
            "Brunch: Commander's Palace — book the Garden Room, order the Turtle Soup au Sherry, the Pecan-crusted Gulf Fish, and the Bread Pudding Soufflé; ~$80pp",
            "Post-brunch: private Lafayette Cemetery tour with the same guide who explained the mansions — narrative continuity is remarkable",
            "Afternoon: private cocktail masterclass at the Sazerac Bar — learn to make the Sazerac, the Vieux Carré, and the Ramos Gin Fizz with a master bartender ($95pp)",
            "Spa: Book a treatment at the Windsor Court Spa — 90-minute massage ~$200",
            "Dinner: August by John Besh for refined Louisiana cuisine in a stunning French warehouse space, ~$120pp with wine",
          ],
          cost: "~$380 (luxury hotel + Commander's + cocktail class + spa + fine dining)",
        },
        {
          day: "Day 3",
          title: "Private Swamp, WWII & After-Hours Jazz",
          items: [
            "Morning: private charter airboat tour of the Honey Island Swamp ($250 for 2, 3 hours) — a naturalist guide, wildlife photography time, zero tourist crowds",
            "Lunch: return to the city for a tasting menu at Compère Lapin — Nina Compton's Caribbean-meets-Louisiana cuisine, ~$75pp",
            "Afternoon: private curator-guided tour of the National WWII Museum — skip the lines, go behind-the-scenes, access research archives ($150 private experience)",
            "Cocktail hour: Arnaud's French 75 Bar — order the house French 75 (Cognac not gin, as is the New Orleans tradition), ~$18",
            "Private ghost and voodoo history tour ($180 private, 2h after dark) — the French Quarter has more documented ghost stories than Salem",
            "Late dinner: Brennan's for their theatrical Bananas Foster tableside flambé and a classic New Orleans tasting menu, ~$100pp",
          ],
          cost: "~$370 (private swamp + tasting menus + cocktails + private ghost tour)",
        },
        {
          day: "Day 4",
          title: "Bywater Brunch & Bespoke Departure",
          items: [
            "Late check-out (arrange with hotel, usually complimentary at luxury properties) — lounge or spa morning",
            "Final brunch: Upperline Restaurant in Uptown — award-winning, creative New Orleans food in a home-turned-restaurant, ~$55pp",
            "Private shopping experience: a boutique manager walks you through the French Quarter antique shops on Royal Street for bespoke New Orleans art and antiques",
            "Custom praline order: have a box of personalised pralines made at Leah's Pralines — the best in the city",
            "Last cocktail: rooftop bar at the Ace Hotel for a final view over the city skyline",
            "Private executive car to MSY ($80–100) — allow extra time, New Orleans traffic is unpredictable",
          ],
          cost: "~$350 (late check-out + brunch + antique shopping + private car)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$28–45 (hostel dorm)",
      food: "$20–30 (po'boys, gumbo, Café Du Monde)",
      transport: "$5–10 (streetcar + occasional Uber)",
      activities: "$20–30 (cemetery tour + free jazz)",
      total: "~$80/day",
    },
    {
      tier: "🏨 Economy",
      accommodation: "$80–100 (budget hotel)",
      food: "$40–55 (mix of casual and mid restaurants)",
      transport: "$15–20 (Uber + streetcar)",
      activities: "$30–45 (museum + swamp tour)",
      total: "~$120/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$120–160 (boutique hotel)",
      food: "$70–90 (Commander's, Cochon, etc.)",
      transport: "$25–35 (Lyft + streetcar)",
      activities: "$60–80 (guided tours + WWII Museum)",
      total: "~$160/day",
    },
    {
      tier: "🌟 Upper-Mid",
      accommodation: "$200–280 (4-star French Quarter)",
      food: "$100–130 (fine Creole dining)",
      transport: "$40–60 (private car)",
      activities: "$100–130 (private tours + cocktail class)",
      total: "~$280/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–500 (Windsor Court / Monteleone suite)",
      food: "$130–180 (tasting menus, Galatoire's)",
      transport: "$80–120 (private transfers)",
      activities: "$150–200 (private guides + experiences)",
      total: "~$350/day",
    },
  ],

  mistakes: [
    {
      icon: "🌡️",
      title: "Visiting in July or August",
      desc: "New Orleans summer is brutal — temperatures of 35–38°C (95–100°F) combined with near-100% humidity makes outdoor exploration genuinely miserable. Mosquitoes are legendary. Hurricane season runs June–November. The sweet spot is October–April: mild temperatures, dry days, and the full festive calendar including Jazz Fest (late April) and Mardi Gras (February). If you must visit in summer, stick to morning and evening excursions with long afternoon AC breaks.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🎷",
      title: "Spending Your Whole Night on Bourbon Street",
      desc: "Bourbon Street is a tourist strip — expensive, loud, and largely devoid of authentic New Orleans culture. Walk it once, have one drink, and move on. The real music scene is on Frenchmen Street in the Marigny neighbourhood: multiple clubs within a two-block radius, live jazz and blues every night, and a mostly local crowd. Venues like the Spotted Cat, d.b.a., and the Frenchmen Art Market are the genuine article.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "⛔",
      title: "Entering St Louis Cemetery No.1 Without a Tour",
      desc: "Since 2015, St Louis Cemetery No.1 requires all visitors to enter with a licensed tour guide. Solo entry is illegal. This is for safety (the labyrinthine above-ground tombs made it easy for criminals to ambush tourists) and for preservation. Tours cost $20–25pp and are actually excellent — don't skip them, and don't try to sneak in. Other cemeteries (Lafayette No.1, Metairie) allow self-guided entry.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🍽️",
      title: "Ignoring Neighbourhood Restaurants for Chain Hotels",
      desc: "New Orleans has some of the best restaurant culture in the world — and chain hotel dining is a waste of a meal here. Willie Mae's Scotch House, Dooky Chase's, Parkway Bakery, and Central Grocery are James Beard-recognised American classics. Commander's Palace has been the training ground for chefs including Emeril Lagasse and Paul Prudhomme. Every meal should be at an independently owned New Orleans institution.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "💊",
      title: "Ignoring Personal Safety at Night",
      desc: "New Orleans has a high crime rate by US standards — particularly in certain neighbourhoods at night. The French Quarter is well-policed and generally safe for tourists. However, avoid walking alone in the areas north of the French Quarter (above Iberville) at night, and exercise caution in parts of Treme after midnight. Use Uber rather than walking between neighbourhoods late at night. Don't flash expensive cameras or phones in empty streets.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🚗",
      title: "Renting a Car in New Orleans",
      desc: "Unless you're doing a swamp tour independently or a road trip to the Plantation Country, you don't need a car in New Orleans. The French Quarter, Marigny, Bywater, Garden District, and Uptown are all served by the iconic St Charles streetcar line ($3 all-day pass) or cheap Lyft/Uber. Parking in the French Quarter costs $25–40/day, traffic is chaotic, and flooding can strand you. Use the streetcar and rideshares.",
      color: "border-green-200 bg-green-50",
    },
  ],

  tips: [
    {
      icon: "🎷",
      title: "Go to Frenchmen Street on a Tuesday or Wednesday",
      desc: "Frenchmen Street is good every night, but weekends get crowded with visitors from surrounding states. Tuesday and Wednesday nights are when the real local jazz community is out — musicians sitting in with each other, impromptu sessions running until 3am. The Spotted Cat Music Club has live music from 2pm daily with zero cover — just a tip jar and a drink minimum. Go early to get a good spot.",
      color: "border-gold-200 bg-amber-50",
    },
    {
      icon: "🎭",
      title: "Time Your Trip Around Jazz Fest or Mardi Gras",
      desc: "The New Orleans Jazz & Heritage Festival (last weekend of April, first weekend of May) brings the best musicians in the world to the Fair Grounds Race Course. Day tickets are $95+. Mardi Gras (February, date varies) is a two-week citywide carnival of parades, costumes, and music. Both require hotel booking 6–12 months in advance. If your dates allow it, plan around one of these — they're bucket-list events.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🏛️",
      title: "Book GetYourGuide Tours for Cemetery & Ghost Walks",
      desc: "New Orleans has some of the best-guided walking tours in the USA. Licensed cemetery guides are required for St Louis No.1. Ghost tours run nightly and vary enormously in quality — look for guides with history credentials, not just actors. Book via GetYourGuide at getyourguide.com/s/?q=New+Orleans&partner_id=PSZA5UI for verified reviews, licensed guides, and free cancellation up to 24h before.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🌊",
      title: "Take the Canal Street Ferry — It's Free",
      desc: "The Algiers Point ferry crosses the Mississippi River from Canal Street (a short walk from the French Quarter) to the Algiers neighbourhood on the West Bank. The crossing takes 8 minutes, it's completely free, and the views of the New Orleans skyline and the massive Mississippi are extraordinary. Walk around Algiers Point (a beautifully preserved Victorian neighbourhood) and take the next ferry back. Allow 90 minutes total.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🍤",
      title: "Order the Local Dishes in the Right Order",
      desc: "New Orleans has a specific food sequence to hit: beignets and café au lait (breakfast at Café Du Monde), a dressed po'boy for lunch (roast beef with debris gravy), a cup of gumbo at a neighbourhood restaurant (not a tourist-targeted spot), red beans and rice on Monday (the traditional New Orleans Monday meal), and Commander's Palace for a special occasion. Don't leave without trying charbroiled oysters at Drago's.",
      color: "border-green-200 bg-green-50",
    },
  ],

  faqs: [
    {
      q: "When is the best time to visit New Orleans?",
      a: "October through April is optimal. October and November offer warm but manageable temperatures (22–27°C / 72–80°F), minimal hurricanes, and the beginning of the festive season. December through February is the coolest and least crowded, perfect for museum-heavy visits. March is Mardi Gras season (depending on Easter). Late April sees Jazz Fest. Avoid June through August: oppressive heat (38°C+), high humidity, hurricane risk, and peak mosquito season.",
    },
    {
      q: "Is New Orleans safe for tourists?",
      a: "The tourist-facing areas — the French Quarter, the Warehouse District, Garden District, Uptown, and Frenchmen Street — are generally safe with basic common sense. The French Quarter has a heavy police presence. Avoid walking alone north of the French Quarter at night, and use rideshares rather than walking between neighbourhoods after midnight. New Orleans has a high violent crime rate by US standards, but the vast majority of crime is localised to residential areas away from the tourist core.",
    },
    {
      q: "How do I get around New Orleans without a car?",
      a: "The St Charles streetcar ($1.25/ride or $3 all-day pass) connects the French Quarter to the Garden District and Uptown. The Rampart-St Claude line runs through the Marigny to the Bywater. Lyft and Uber are cheap and reliable for crosstown trips (most French Quarter rides are $8–15). The Canal Street ferry to Algiers is free. Walking is best within neighbourhoods — the city is quite compact and flat (with the notable exception of flooding risk).",
    },
    {
      q: "What is the difference between Creole and Cajun food?",
      a: "Creole food (gumbo, red beans and rice, étouffée, bananas Foster) is New Orleans urban cuisine — a sophisticated blend of French, Spanish, African, and Native American influences. It often uses tomatoes and roux. Cajun food comes from the rural Acadians (French Canadians) who settled in the Louisiana bayou — heartier, spicier, more rustic (crawfish boils, boudin sausage, blackened fish). Both are extraordinary. New Orleans restaurants serve primarily Creole, with Cajun on most menus too.",
    },
    {
      q: "Is the WWII Museum worth the $30 entry fee?",
      a: "Unequivocally yes — the National WWII Museum is consistently ranked one of the top 5 museums in the United States. It's an entire city block of immersive exhibits, rare artefacts, survivor testimonials, and the stunning 4D film 'Beyond All Boundaries' narrated by Tom Hanks. Allow a full half-day minimum. The optional upstairs exhibits on the Pacific and European theatres are worth the extra $10. Buy tickets online to skip queues.",
    },
  ],

  combineWith: ["miami-4-days", "nashville-3-days", "savannah-3-days"],
  relatedSlugs: ["miami-4-days", "nashville-3-days", "chicago-4-days", "new-york-5-days"],

  galleryQuery: "new orleans jazz french quarter louisiana food music",
};

/* ── Page component ────────────────────────────────────────────────────── */
export default function NewOrleansPage() {
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
