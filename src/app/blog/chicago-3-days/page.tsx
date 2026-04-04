import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Chicago",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "chicago-3-days",
  heroQuery: "chicago skyline bean cloud gate illinois usa lake michigan",
  heroAlt: "Chicago skyline reflected in Cloud Gate (The Bean) at Millennium Park with Lake Michigan behind",
  category: "North America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Chicago is the American city that proves not everything great is on a coast — a place where the architecture is so extraordinary that a 90-minute boat tour of the river is the best single activity in the USA, where the blues runs so deep the genre effectively invented itself here on the South Side, and where the argument about pizza style is the most passionately irrelevant debate in American food. Three days gives you The Bean, Alcatraz's equal in cultural weight, the finest collection of Impressionist masterpieces outside Paris, and enough Chicago deep dish to constitute a genuine life experience.",
  stats: {
    duration: "3 Days",
    budgetFrom: "$80",
    bestMonths: "Jun–Sep",
    airport: "ORD (O'Hare) or MDW (Midway)",
  },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["B-2 Tourist Visa Required", "Indian passport holders require a US B-2 tourist visa. ESTA (the visa waiver program) is not available on an Indian passport. Apply through the US Embassy or Consulate in India via ustraveldocs.com. Fee: $185 (non-refundable). Chicago's O'Hare is a major international hub — once you have a valid US visa, entry is straightforward."],
        ["Application Lead Time", "Apply 3–4 months before your intended travel date. Interview appointment wait times at US Consulates in India vary from 2 weeks to 3+ months — Delhi and Mumbai tend to have the longest waits during summer application season (December–February for Northern Hemisphere summer travel). Chennai and Hyderabad often have shorter waits."],
        ["Airports: ORD vs MDW", "O'Hare (ORD) is one of the busiest airports in the world — 85+ airlines, 160+ international destinations. Most international flights arrive here. Midway (MDW) is a domestic hub primarily serving Southwest Airlines with cheaper fares. From downtown Chicago, ORD is 45 minutes by Blue Line 'L' train ($5). MDW is 30 minutes by Orange Line 'L' train ($5). Both are efficient connections."],
        ["Chicago Entry & Customs", "Customs and Border Protection at O'Hare can be slow for international arrivals — budget 45–75 minutes for customs, immigration, and baggage in peak hours. Global Entry membership ($120, 5 years) bypasses the queue entirely. If arriving on a connection through Chicago, ensure your layover is at least 2–2.5 hours to account for customs clearance."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["ESTA for Visa Waiver Countries", "Citizens of the 42 Visa Waiver Program countries (UK, EU, Australia, Japan, etc.) use ESTA: apply at esta.cbp.dhs.gov ($21, valid 2 years). Most approvals are instant. Have your ESTA approved before boarding — airlines check at check-in."],
        ["Canadian Citizens", "Canadians enter with passport only — no visa, no ESTA required. O'Hare has designated Canadian citizen lanes. Chicago is the most visited US city by Canadians due to proximity — many arrive by car, bus, or Amtrak from Toronto (12 hours) or Winnipeg."],
        ["Chicago as a Hub", "O'Hare is one of the most connected airports in the USA — nearly every international visitor to the Midwest arrives here. If you're combining Chicago with other US cities, American Airlines and United Airlines hub extensively at ORD, offering competitive prices on domestic connections."],
        ["Midwest Entry Advantage", "Chicago CBP processes fewer international arrivals than JFK, LAX, or MIA, which means customs queues are often faster. The 'L' train from O'Hare to downtown ($5, 45 minutes, Blue Line runs 24/7) is one of the most convenient airport-to-city connections in the USA.",
        ],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$80–130/day",
      days: [
        {
          day: "Day 1",
          title: "The Loop, Architecture & Millennium Park",
          items: [
            "Arrive at O'Hare. Take the Blue Line 'L' train to downtown ($5, 45 minutes, runs every 7–10 minutes). Check into HI Chicago Hostel (South Michigan Avenue, $35–55/night dorm, $80–110 private) or a budget hotel in the South Loop. The hostel is directly across from Grant Park with lake views.",
            "Chicago Riverwalk (free, 3km of waterfront walkway) — start at Michigan Avenue Bridge and walk west along both sides of the Chicago River. The river is flanked by 100+ years of architectural masterpieces: the Tribune Tower (1925, Gothic revival with stones from the world's great buildings embedded in the base), Marina City (the 1964 'corn cob' towers), the Wrigley Building, and the Merchandise Mart. Every building has a story.",
            "Architecture Foundation River Cruise ($52, 90 minutes, book at architecture.org or same-day at the Riverwalk booth near Michigan Avenue) — this is the best value tour in the USA. Docent-led, covers 50+ buildings and 150 years of architectural history. The guides are professional architectural historians. Every architecture student in the world puts this on their bucket list. If you do one paid activity in Chicago, make it this.",
            "Millennium Park (free, Michigan Avenue between Randolph and Monroe) — Cloud Gate (The Bean): Anish Kapoor's 110-ton reflective steel sculpture reflects the Chicago skyline in a distorted panorama. Free, open 24 hours, perpetually photogenic. The Crown Fountain (two 15m towers facing each other, projecting faces of Chicago residents, water runs in summer — free) and the Jay Pritzker Pavilion (Frank Gehry's outdoor concert hall, free lawn seating for summer concerts).",
            "Art Institute of Chicago ($35, Michigan Avenue at Adams — skip if budget is very tight, but don't skip it if you can manage it). One of the top five art museums in the world: Georges Seurat's A Sunday on La Grande Jatte, Edward Hopper's Nighthawks, Grant Wood's American Gothic, Picasso's The Old Guitarist, and the Impressionist collection that rivals the Musée d'Orsay. Budget 2–3 hours minimum.",
            "Deep dish pizza dinner at Lou Malnati's (Multiple locations, $18–26 for a small deep dish, 45-minute wait after ordering — the pizza bakes in the pan). Or Giordano's (stuffed deep dish, slightly different style, similar price). Deep dish is Chicago's most famous export — butter pastry crust, layers of mozzarella, filling, then crushed tomatoes on top. Order 45 minutes before you're hungry.",
          ],
          cost: "$50–80 total",
        },
        {
          day: "Day 2",
          title: "Navy Pier, Lincoln Park & Chicago Blues",
          items: [
            "Navy Pier (free to walk, Grand Avenue at the lakefront) — Chicago's most visited attraction is better than its tourist reputation suggests. The 1916 Municipal Pier was restored in the 1990s as an entertainment venue. Walk to the end (900m into Lake Michigan) for the best view of the Chicago skyline from the water. The Ferris wheel ($18, 10 minutes, panoramic lake and city views) and the Chicago Shakespeare Theater are the best reasons to go beyond the food stalls.",
            "Chicago deep dish vs. thin crust debate: Day 2, do the thin crust. Pequod's Pizza (Webster Avenue, Lincoln Park — worth the journey, $16–22) makes a caramelized-crust pan pizza that is the real Chicago thin/pan hybrid. Order the sausage and pepperoni.",
            "Lincoln Park (free, lakefront from North Avenue to Diversey) — Chicago's largest park runs along Lake Michigan's shore. The free Lincoln Park Zoo (one of the last free zoos in the USA, open year-round) has 200 species including gorillas and polar bears. The lakefront path is jogging and cycling territory — rent a Divvy bike ($3.30/30-minute ride) and cycle north along the lake to Wrigley Field (historic baseball stadium, tours $30 if a game isn't on).",
            "Wicker Park neighbourhood (take the Blue Line to Damen) — Chicago's most compelling neighborhood for independent culture: vintage record stores, independent bookshops (Myopic Books, 1564 N Milwaukee, used books floor-to-ceiling), street art, coffee shops (Intelligentsia Coffee, the Chicago roaster that changed American specialty coffee). Walk Milwaukee Avenue from Division to North for the full experience.",
            "Blues at Kingston Mines (2548 N Halsted Street, cover $15 after 9pm) — the most famous blues bar in Chicago. Two stages running simultaneously, so when one set ends the other begins. Opens at 8pm, best sets start at midnight. The music is the real Chicago blues lineage — electric, rootsy, not a tourist performance. Kingston Mines has been running since 1968. Alternatively, Green Mill (Uptown, 4802 N Broadway) for jazz: Al Capone's former speakeasy turned jazz club, the longest-running jazz club in America.",
          ],
          cost: "$40–70 total",
        },
        {
          day: "Day 3",
          title: "Museum of Science and Industry & Chicago Hot Dog Farewell",
          items: [
            "Choose your museum: Museum of Science and Industry (57th Street, Hyde Park, $23) is one of the largest science museums in the world — inside a stunning 1893 World's Columbian Exposition building. Highlights: the U-505 German submarine captured in 1944 (the only WWII submarine captured in open ocean, brought to Chicago in a remarkable operation), Coal Mine exhibit, Space Center with actual Apollo spacecraft, and the Baby Chick hatchery. Budget 3 hours.",
            "Field Museum alternative (Roosevelt Road, $30) — natural history on the grandest scale. Sue the T. Rex (the largest, most complete T. rex skeleton ever found), Egyptian mummies, gemstone collection, and the Hall of Africa. Chicago's Field Museum is comparable to the Smithsonian Natural History Museum in Washington.",
            "360 Chicago Observation Deck (John Hancock Center, $30 — or TILT experience $35, the window that tilts outward at 1,000 feet) — the view from the 94th floor takes in all four directions: Lake Michigan to the east, the Chicago grid extending to the horizon in every direction, the entire city layout visible at once. Willis Tower Skydeck ($30 for the Ledge glass boxes that extend out from the 103rd floor) is the other option — both are excellent, both require booking ahead in peak season.",
            "Chicago hot dog education: a proper Chicago-style hot dog is Vienna Beef frank in a steamed poppy-seed bun, topped with yellow mustard, chopped white onion, bright green sweet pickle relish, a dill pickle spear, tomato wedges, pickled sport peppers, and celery salt. NO KETCHUP (this is genuinely important to Chicagoans — don't ask for ketchup). Best at Portillo's (multiple locations, $5–7), Chicago Dog House, or Gene & Jude's (River Grove — the original since 1946).",
            "Second City comedy show ($28–48) if you have evening energy — the comedy club that launched John Belushi, Gilda Radner, Bill Murray, Tina Fey, Stephen Colbert, and half the cast of SNL since 1959. The main stage shows are scripted; the Friday/Saturday midnight sets are improv. Both are excellent. Located in Old Town (1616 N Wells Street, take the Red Line to North/Clybourn). Book ahead — popular shows sell out.",
            "Final meal option — Chicago's Greektown (Halsted Street, West Loop) for the flambéed saganaki cheese ($12, the waiter sets it on fire and yells 'Opa'!) at Greek Islands or Santorini. Unpretentious, family-run, generous portions, a hidden gem of Chicago's neighbourhood dining scene.",
          ],
          cost: "$45–80 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$220–380/day",
      days: [
        {
          day: "Day 1",
          title: "Architecture Cruise, Art Institute & Steakhouse",
          items: [
            "Check into Hotel Viceroy Chicago (Gold Coast, $200–320/night) or Virgin Hotel Chicago (amenities-forward, $180–280/night). Both have excellent rooftop bars with lake or city views.",
            "Architecture River Cruise at 9am ($52 — same tour as budget but morning light on the river is exceptional, fewer other boats, cleaner sight lines). Add a private architecture tour ($120–180/person for a smaller group with a licensed architect-guide through CAF — Chicago Architecture Foundation).",
            "Art Institute lunch at Terzo Piano (the museum's third-floor restaurant, $25–40/person, excellent). Then spend 2.5 hours in the museum focusing on the Impressionists, the Thorne Miniature Rooms (unexpected delight — 68 rooms in miniature scale spanning 500 years of interior design), and the Architecture and Design gallery.",
            "Dinner at RPM Steak (East Illinois Street, River North, $65–90/person) or Boka (Lincoln Park, $60–85/person tasting menu) — both are James Beard-recognized and represent Chicago's best contemporary dining. Deep dish is for lunch; steakhouse is for dinner in Chicago.",
          ],
          cost: "$200–320 total",
        },
        {
          day: "Day 2",
          title: "Chicago Food Tour & Rooftop Views",
          items: [
            "Chicago Neighborhood Food Tour with Chicago Food Planet or Tastebud Tours ($65–85/person, 3 hours, covers 6–8 stops through the West Loop and River North). Includes Italian beef sandwich (Chicago's other great contribution to American sandwiches — thin-sliced beef in au jus with giardiniera), Chicago-style hot dog, deep dish pizza, and neighbourhood history.",
            "360 Chicago Observation Deck at 2pm ($30) or Willis Tower Skydeck ($30). Willis Tower's Skydeck is the Ledge experience — glass boxes extending 1.3m from the 103rd floor at 412m. On a clear day you can see four states.",
            "Wicker Park afternoon: boutique shopping and independent record stores. Reckless Records (Milwaukee Avenue) for vinyl. West Town Bakery for afternoon coffee and layer cake.",
            "Evening: Green Mill jazz club for the 8pm set ($15 cover) — cocktails at the original Art Deco bar while a Chicago jazz trio plays. One of the most atmospheric music bars in America.",
          ],
          cost: "$200–310 total",
        },
        {
          day: "Day 3",
          title: "Hyde Park & Museum Campus + Italian Beef Farewell",
          items: [
            "Hyde Park morning: the University of Chicago campus (free to walk, Gothic architecture surrounding a central quad — the Rockefeller Chapel is extraordinary). Museum of Science and Industry ($23) for 2 hours — the U-505 submarine is the centrepiece.",
            "Museum Campus lakefront walk (free, 30 minutes along the lake from MSI to the Field Museum) — the Chicago skyline from the museum campus waterfront is among the best city views in the Midwest.",
            "Italian beef sandwich from Al's Beef (original since 1938, $8–10 dipped in au jus, topped with hot giardiniera) or Mr. Beef (where Anthony Bourdain famously ate) — a Chicago Italian beef is Chicago's true street food identity, predating the deep dish pizza debate by decades.",
            "Second City comedy evening show ($38) for the scripted main stage revue. Post-show drinks at Delilah's bar (Lincoln Avenue, dive bar with 200+ whiskeys, no frills, authentically Chicago).",
          ],
          cost: "$180–280 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$600–1500+/day",
      days: [
        {
          day: "Day 1",
          title: "The Peninsula Chicago & Private Architecture",
          items: [
            "The Peninsula Chicago (108 E Superior Street, $500–900/night) or Four Seasons Chicago ($450–800/night) or Waldorf Astoria Chicago (Gold Coast, $400–750/night). All three are among the finest urban hotels in the Midwest — the Peninsula's afternoon tea service ($65/person) is a Chicago institution.",
            "Private architecture tour with a licensed architect-guide from the Chicago Architecture Center ($200–350/person, 3 hours, access to building interiors not open on public tours — lobbies of the Rookery Building, the Sullivan Center trading floor, private access to specific skyscraper mechanical floors with panoramic views).",
            "Dinner at Alinea (1723 N Halsted, Michelin 3-star, $400–450/person tasting menu, book 2–3 months ahead). Chef Grant Achatz's molecular gastronomy flagship is the most creatively ambitious restaurant in the USA — courses arrive as abstract art pieces, flavors are deconstructed and reconstructed. The dessert course is served directly on the table. A genuinely unrepeatable experience.",
          ],
          cost: "$700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Art Institute Tour & Exclusive Blues",
          items: [
            "Art Institute of Chicago private curator-led morning tour ($200–300 for 2 hours, arranged through the museum's special events department). The Impressionist collection with a specialist who can contextualize each work beyond the placard description. Access to the conservation labs and study rooms is occasionally possible through concierge connections.",
            "Lunch at Smyth (1178 W Fulton Market, Michelin 2-star, $90–120/person for the set lunch menu) or Temporis (Lincoln Park, 2 Michelin stars, $180 tasting menu, 10 courses).",
            "Private blues experience: hire a guide ($100–150 for the evening) who takes you to 3 authentic South Side blues venues — not the tourist-circuit North Side clubs but the neighbourhood bars on the South Side where Chicago blues was invented and still lives. Starting at 8pm, finishing after midnight.",
          ],
          cost: "$600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Lake Michigan Charter & Farewell Tasting Menu",
          items: [
            "Private sailboat or motor yacht charter on Lake Michigan (4 hours, $600–1,200 for the charter, up to 6 people). The Chicago skyline from the lake is the most dramatic urban view in the Midwest — the buildings rise directly from the water's edge with no transition. Morning mist on the lake adds atmosphere.",
            "Chicago CityPASS not needed at this level — individual museum access is already included in experiences. Instead: private tour of the Chicago History Museum ($150–200 through the museum's private events team) for the full context of the 1871 Great Chicago Fire, the Columbian Exposition, and the city's transformation.",
            "Farewell dinner at Oriole (661 W Walnut, West Loop, Michelin 2-star, $275+/person, book 6–8 weeks ahead). Named the best restaurant in Chicago multiple times — intimate, 28-seat dining room, 20-course tasting menu of hyper-seasonal Great Lakes ingredients. The wine pairing ($175 additional) focuses on natural and biodynamic producers.",
            "Post-dinner: The Violet Hour cocktail bar (Wicker Park, no sign on the door, just a blue light). One of the foundational craft cocktail bars in American history — opened 2007, still producing some of the most technically accomplished cocktails in the country. $18–22 per cocktail. No reservations — arrive before 9pm.",
          ],
          cost: "$800–1,500 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$35–80",
      food: "$20–35",
      transport: "$10–15",
      activities: "$20–40",
      total: "$85–170/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–280",
      food: "$50–80",
      transport: "$15–25",
      activities: "$40–80",
      total: "$255–465/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$400–900",
      food: "$100–300",
      transport: "$30–80",
      activities: "$100–300",
      total: "$630–1,580/day",
    },
  ],
  mistakes: [
    {
      icon: "🥶",
      title: "Visiting Chicago in January or February",
      desc: "Chicago's winter is genuinely dangerous, not merely uncomfortable. Wind chill temperatures of -20°C to -30°C are normal in January and February — cold enough that exposed skin begins to suffer frostbite in 10–15 minutes. The 'Windy City' nickname understates the reality: wind off Lake Michigan amplifies cold to life-threatening levels. Multiple Chicago winters have produced wind chills of -40°C. If your travel dates are flexible, never visit between late November and late March. June through September is warm and exceptional.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍕",
      title: "Only Eating Deep Dish Pizza (Missing the Full Picture)",
      desc: "Chicago deep dish is excellent and you should eat it once — but Chicagoans themselves eat thin crust more regularly. The tavern-style thin crust (cut into squares, not slices) at Pequod's, Vito & Nick's, or Pat's Pizza represents an equal and different Chicago pizza tradition. The Italian beef sandwich (thinly sliced beef dipped in au jus, served with hot giardiniera on Italian bread) is arguably Chicago's more authentic street food legacy. Chicago has a genuine food culture beyond the deep dish headline.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚢",
      title: "Skipping the Architecture River Cruise",
      desc: "Every visitor to Chicago who skips the Architecture Foundation River Cruise because 'I'm not really into architecture' misses the best single activity in the city. The Chicago River corridor contains the most concentrated collection of important 20th-century buildings anywhere on earth — and the cruise docents are professional architectural historians who bring each building to life with the development story, the architect's vision, and the city's evolving self-image. It's 90 minutes, it's $52, and there is nothing else in Chicago that delivers that much insight for that price.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Architecture Cruise at 9am — Fewer Boats, Best Morning Light",
      desc: "The Chicago Architecture Foundation River Cruise runs from 9am to 9pm in peak season. The 9am departure has two significant advantages: the morning light falls on the east-facing river at a low angle that illuminates the upper stories of buildings in ways that afternoon light doesn't, and there are fewer tour boats on the river creating cleaner sight lines and less boat noise. By 11am, 8–10 tour boats are operating simultaneously and the experience feels more crowded. Book the first departure.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🫘",
      title: "Cloud Gate at Sunrise — The Bean With No Crowds",
      desc: "Cloud Gate in Millennium Park is open 24 hours. The Park officially opens at 6am; The Bean is accessible from the street side at any hour. At sunrise (6–7am in summer), the sculpture is completely empty of other visitors. The reflection shows the predawn sky turning pink and orange over the Chicago skyline — an entirely different image from the crowded midday version. The sculpture's distorted reflections are more interesting with dramatic light and no people blocking the lens. This is one of the most photogenic 30 minutes available in any American city.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎸",
      title: "Kingston Mines at Midnight — The Most Authentic Blues in Chicago",
      desc: "Kingston Mines (2548 N Halsted, Lincoln Park) runs two stages simultaneously from 8pm to 4am, seven nights a week. The real show starts at midnight, when the headlining bands take the stage and the energy shifts from warm-up to the genuine article. The cover is $15 after 9pm on weekdays. The musicians are professional Chicago blues players — not a tourist cabaret, not a nostalgia act. Order a beer ($5–7), stand near either stage, and understand why Chicago blues was the direct ancestor of rock and roll.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Chicago vs New York City — which is better to visit?",
      a: "Chicago and New York City are genuinely different propositions. Chicago is more compact and walkable, significantly cheaper (hotels 30–50% less, restaurants 20–40% less), and has proportionally more iconic architecture concentrated in a smaller area. New York has greater breadth — more museums, more neighborhoods, more of everything. For first-time US visitors, New York is the default answer for sheer scale and diversity. But Chicago specifically wins for: architecture, blues music, the lakefront, the food scene value proposition, and the sense that it's a real working American city rather than a global theme park. Many experienced travelers prefer Chicago on repeat visits.",
    },
    {
      q: "Do Indian passport holders need a visa for Chicago / the USA?",
      a: "Yes. Indian passport holders require a B-2 US tourist visa. ESTA is not available for Indian passport holders. Apply through the US Embassy or Consulate in India at ustraveldocs.com. The $185 application fee is non-refundable. Interview wait times at US Consulates in India range from 2 weeks to 3+ months depending on location and season. Apply at least 3–4 months before travel. Once approved, a B-2 visa is typically issued for 10 years with multiple entries, allowing stays of up to 6 months per visit.",
    },
    {
      q: "Is the Chicago CityPASS worth buying?",
      a: "The Chicago CityPASS ($118 adult) covers 5 attractions: Art Institute of Chicago ($35), Field Museum ($30), 360 Chicago Observation Deck ($30), Shedd Aquarium ($40.95), and Adler Planetarium ($18) — total face value $153.95. It saves approximately $36 and also skips the general admission line at each venue. If you plan to visit all 5 within 9 consecutive days, it saves money and time. If you're only doing 2–3 of the five attractions, individual tickets are cheaper. The biggest individual value is the Art Institute ($35 saved plus line skip) — that alone justifies the pass if you're also doing 2 other attractions.",
    },
    {
      q: "What is a Chicago winter actually like and should I avoid it?",
      a: "Yes, avoid visiting November through March if your dates are flexible. Chicago's winter is objectively one of the harshest of any major American city. Average January temperature: -6°C (21°F). Wind chill: commonly -20°C to -30°C. Lake Michigan generates brutal wind that makes every stated temperature feel 10–15°C colder. The city effectively continues operating — Chicago natives are pragmatic — but tourist infrastructure suffers: outdoor attractions close or curtail hours, the lakefront is inhospitable, and outdoor activities become unpleasant. If you must visit in winter, dress in serious layers (thermal base, fleece mid, wind-blocking outer shell, hat, gloves, scarf). The indoor activities — museums, restaurants, blues bars — are excellent year-round.",
    },
  ],
  combineWith: ["new-york-5-days", "nashville-3-days", "detroit-2-days"],
  relatedSlugs: ["new-york-5-days", "san-francisco-4-days", "las-vegas-3-days", "washington-dc-3-days"],
  galleryQuery: "chicago cloud gate millennium park architecture river skyline lake michigan",
};

export const metadata: Metadata = {
  title: "Chicago in 3 Days: Cloud Gate, Architecture, Deep Dish Pizza & Blues (2026)",
  description: "Complete 3-day Chicago travel guide: Architecture River Cruise secrets, Cloud Gate at sunrise, deep dish pizza debate, Kingston Mines blues — real USD costs from $80/day.",
  keywords: [
    "chicago itinerary 3 days",
    "chicago travel guide 2026",
    "architecture river cruise chicago",
    "cloud gate millennium park",
    "chicago deep dish pizza",
    "chicago blues bars",
  ],
  openGraph: {
    title: "Chicago in 3 Days: Architecture, Deep Dish Pizza & Blues (2026)",
    description: "Architecture River Cruise secrets, Cloud Gate sunrise, Kingston Mines blues, and real costs — complete 3-day Chicago guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Chicago skyline Cloud Gate Millennium Park Lake Michigan",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago 3 Days (2026)",
    description: "Architecture cruise secrets, Cloud Gate at sunrise, deep dish pizza — complete Chicago guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/chicago-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Chicago in 3 Days: Cloud Gate, Architecture, Deep Dish Pizza & Blues (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
      description:
        "Complete 3-day Chicago travel guide covering Architecture River Cruise, Cloud Gate, Art Institute, deep dish pizza, and Kingston Mines blues.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chicago 3 Days",
          item: "https://www.incredibleitinerary.com/blog/chicago-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Chicago, Illinois, USA",
      description:
        "America's great inland city — extraordinary architecture, world-class art, Chicago blues, deep dish pizza, and the magnificent lakefront of Lake Michigan.",
      geo: { "@type": "GeoCoordinates", latitude: 41.8781, longitude: -87.6298 },
      touristType: ["Architecture enthusiasts", "Food lovers", "Music fans", "Art museum visitors"],
    },
  ],
};

export default function ChicagoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
