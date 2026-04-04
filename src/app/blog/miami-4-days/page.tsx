import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Miami",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "miami-4-days",
  heroQuery: "miami south beach art deco florida usa ocean drive",
  heroAlt: "Miami South Beach Ocean Drive Art Deco buildings at night with neon lights Florida USA",
  category: "North America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Miami is the only American city that genuinely feels like a foreign country — in the best possible way. On Calle Ocho in Little Havana, old men play dominoes outside Café Versailles and argue about baseball in Spanish while the café cubano costs a dollar and tastes better than anything in a specialty coffee shop. In Wynwood, murals the size of apartment buildings compete for your attention. And the beach is still there, a perfect Atlantic beach, completely free, available to every tourist and every local equally. Four days is the minimum to make sense of it.",
  stats: { duration: "4 Days", budgetFrom: "$85", bestMonths: "Nov–Apr", airport: "MIA (Miami International)" },
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
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["B-2 Tourist Visa", "Indian passport holders require a B-2 visitor visa for the USA — ESTA is not available for Indian passports. Apply through the US Embassy in New Delhi, Mumbai, Chennai, Kolkata, or Hyderabad. Non-refundable MRV fee: $185. Processing time: 3–10 weeks. Book your consular interview appointment at least 6–8 weeks in advance as slots in major cities fill up quickly, particularly during peak periods (January–April, October–November)."],
        ["Required Documents", "Completed DS-160 form, passport with at least 6 months validity beyond travel dates, recent bank statements (last 3–6 months showing sufficient funds), confirmed hotel bookings, return flight tickets, employment letter confirming job title and salary, recent payslips (3–6 months), income tax returns for the most recent 2 years, and property or asset documentation to demonstrate ties to India."],
        ["Visa Interview Tips", "The interview typically takes 2–5 minutes. Be specific: know your exact hotel names, planned activities, and travel dates. The most common reason for denial is inability to demonstrate strong ties to India that will compel you to return. Be prepared to explain your employment situation, family connections, and property or financial commitments in India. A well-organized application folder with clearly labeled documents makes a strong impression."],
        ["US Medical Costs", "Travel insurance is not required for the visa but is critically important. A single day in a US hospital without insurance costs $3,000–15,000. Emergency care, ambulance services, and prescription medications are extremely expensive. Purchase a comprehensive policy with at least $500,000 medical coverage and emergency evacuation before departure. Most Indian insurers (ICICI Lombard, HDFC Ergo, Bajaj Allianz) offer US travel policies at $30–80 for a 2-week trip."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["ESTA / Visa Waiver Program", "Citizens of 42 Visa Waiver Program countries — including UK, Australia, Canada, Germany, France, Japan, South Korea, and most EU nations — can enter the USA visa-free under ESTA for up to 90 days. Apply at esta.cbp.dhs.gov before travel. Fee: $21. Approval typically within minutes; allow up to 72 hours. ESTA is valid for 2 years or until your passport expires, for multiple trips."],
        ["ESTA Eligibility Requirements", "Your passport must be an electronic passport (e-passport with a chip symbol on the cover) for ESTA eligibility. If you have previously been denied a US visa, arrested, or have traveled to Cuba, Iran, Iraq, Libya, North Korea, Somalia, Sudan, Syria, or Yemen since March 2011, you must apply for a B-2 visitor visa instead of ESTA. Dual nationals with certain nationalities are also excluded from ESTA."],
        ["Canadian Citizens", "Canadians enter the USA without a visa or ESTA — simply present your Canadian passport at the port of entry. Canadian citizens may stay up to 6 months as visitors at the border officer's discretion, though most stamps allow 6 months automatically. Note that days spent in the USA count toward your 90-day US presence allowance if you are on a TN or other status."],
        ["Important Travel Note", "Regardless of your entry method, US Customs and Border Protection (CBP) officers have full discretion to refuse entry. The most common issue for leisure visitors is carrying too much cash (over $10,000 must be declared), carrying marijuana (illegal federally), or giving inconsistent answers about the purpose of travel. Be honest and consistent. Miami International Airport (MIA) processes extensive international arrivals — immigration queues can reach 60–90 minutes on busy international arrival days."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$85–140/day",
      days: [
        {
          day: "Day 1",
          title: "South Beach Art Deco & Ocean Drive",
          items: [
            "9:00am — Arrive at South Beach via the Miami Beach Trolley (free, runs every 10–20 minutes along the main corridors) or Metrobus route 150 ($2.25/ride from Miami International Airport, 45–60 minutes). Uber/Lyft from MIA to South Beach: $20–35.",
            "9:30am — Ocean Drive Art Deco Historic District walking tour (self-guided, free). Ocean Drive between 5th and 15th Streets contains the largest collection of Art Deco architecture in the world — 800+ buildings from the 1930s and 1940s. Pick up a free walking map from the Art Deco Welcome Center (1001 Ocean Drive). The pastel-painted hotels, neon signs, and rounded corners are the defining visual of Miami.",
            "11:00am — Art Deco Museum (1001 Ocean Drive, $20 admission) — 45 minutes covers the architectural history of the district with excellent photographs and building diagrams. Alternatively, book a guided walking tour through the Miami Design Preservation League ($30, 90 minutes, runs daily at 10:30am).",
            "1:00pm — Lunch on the budget: Puerto Sagua Restaurant (700 Collins Ave, since 1962) — Cuban food at real prices, not tourist prices. Ropa vieja with rice and beans $14, Cuban sandwich $10, café cubano $2. Cash preferred, lines out the door at noon.",
            "2:30pm — Lummus Park Beach (between Ocean Drive and the Atlantic, 5th to 15th Streets) — free entry, free public beach by Florida law. The beach is wide, the water is clear Atlantic blue, and the lifeguard towers are painted in pastel colors that have become as iconic as the buildings. Swim, rest, or simply watch the South Beach parade.",
            "5:30pm — Lincoln Road pedestrian mall (17th Street between Alton Road and Washington Avenue) — free outdoor shopping mall with palm trees, free public art installations, and buskers. The best street people-watching in Miami. Window shopping is free; a meal here is $20–45.",
            "8:00pm — Evening on Ocean Drive for atmosphere (sit at a sidewalk café, $8–12 for a drink) — the neon lights, the vintage cars cruising the strip, and the restaurants in full swing is the essential Miami evening experience. Eat beforehand (Ocean Drive restaurant prices are tourist-tier: $25–45/entree); have one drink for the ambiance.",
          ],
          cost: "$50–80 total",
        },
        {
          day: "Day 2",
          title: "Wynwood Walls & Little Havana",
          items: [
            "10:00am — Wynwood Walls (NW 2nd Avenue between 25th and 26th Streets) — the outdoor portion is free: walk the streets surrounding the main complex for enormous murals covering every building for 6 square blocks. The ticketed Wynwood Walls courtyard ($12) contains the curated interior exhibitions and the original murals that made the neighborhood famous. Arrive before noon to beat the weekend crowds.",
            "11:30am — Walk Wynwood for free: NW 2nd Avenue, NW 24th Street, and the surrounding blocks have murals commissioned from artists from 40+ countries. Goldman Properties and the Wynwood Business Improvement District have turned this formerly industrial neighborhood into one of the most photographed street art destinations in the world.",
            "1:00pm — Early lunch in Wynwood before the afternoon crowds: Coyo Taco ($12–16/person) for Mexican street food in a converted warehouse, or KYU ($18–25/person) for Asian-inspired wood-fired cuisine. Both are Wynwood institutions.",
            "2:30pm — Little Havana via Uber or Metrobus ($2.25): Calle Ocho (SW 8th Street) between SW 12th and SW 27th Avenues is the heart of Cuban-American Miami. Start at Maximo Gomez Domino Park (SW 15th Avenue and Calle Ocho, free) and watch the daily domino games — this has been happening since the 1960s when the first Cuban exiles arrived.",
            "3:30pm — Versailles Restaurant (3555 SW 8th Street) — not the most atmospheric, but the definitive Cuban-American political and cultural institution in Miami. Have a café cubano ($1.50) and a pastelito de guayaba (guava pastry, $2.50) at the walk-up ventanita window on the side of the restaurant. The bakery counter inside has exceptional desserts.",
            "5:00pm — Tower Theater (1508 SW 8th Street) — a 1926 movie palace that anchors Calle Ocho, now a Miami-Dade cultural center. The exterior is one of the finest Art Deco facades outside South Beach. Free to view from outside.",
            "8:00pm — Dinner in Little Havana: El Cristo Restaurant (1543 SW 8th Street, $15–22/person) for honest Cuban home cooking — lechon asado, black beans, yuca con mojo. This is the meal that costs three times as much on South Beach.",
          ],
          cost: "$40–65 total",
        },
        {
          day: "Day 3",
          title: "Everglades National Park Day Trip",
          items: [
            "7:30am — Early departure is essential for the Everglades — the 1.5-hour drive south on the Florida Turnpike and US-1 to the Ernest F. Coe Visitor Center (40001 State Road 9336, Homestead). Entry: $35/vehicle or $20/person on foot or bicycle. Valid 7 days.",
            "9:00am — Anhinga Trail (0.8km, flat, paved) — the single best wildlife trail in the park. Anhinga birds dry their wings within arm's reach, alligators bask on the trail edges, turtles cross the path, and great blue herons hunt in the open water. Wildlife is extremely dense and unafraid of humans. Budget 45–60 minutes.",
            "10:00am — Gumbo Limbo Trail (0.8km loop, hammock forest, hardwood trees): the abrupt contrast between the open sawgrass prairie and the dense subtropical jungle happens within 50 meters.",
            "11:00am — Drive to the Flamingo area (50km southwest inside the park, no additional entry fee). The Florida Bay views and the opportunity to spot crocodiles (not alligators — Flamingo is one of few US locations with American crocodiles in the wild) make this worth the extra driving.",
            "12:30pm — Airboat tour: book with Everglades Safari Park or Coopertown Airboats on the Tamiami Trail ($25–45/person, 30–60 minute tours). Airboats access the open sawgrass river that the road-based trails cannot reach. Essential for the full Everglades experience. Ear protection provided.",
            "3:00pm — Return drive north toward Miami. Stop at Robert Is Here fruit stand (19200 SW 344th Street, Homestead) — a Florida landmark since 1959. Fresh-squeezed juices, unusual tropical fruits (black sapote, canistel, mamey sapote), and milkshakes. The mango milkshake ($7) is non-negotiable.",
            "7:30pm — Dinner back in Miami at Brickell City Centre or the Design District — return trip timing means you will be back in the city by 6–7pm. Budget $20–30 at any Brickell restaurant.",
          ],
          cost: "$65–95 total (including park entry and airboat)",
        },
        {
          day: "Day 4",
          title: "Design District, PAMM & Departure",
          items: [
            "9:00am — Design District (NE 38th to 42nd Streets between NE 1st and NE 2nd Avenues) — free to walk. Miami's high-design luxury retail neighborhood with Hermès, Louis Vuitton, Prada, Rolex, and Tom Ford boutiques in architecturally notable buildings. The Institute of Contemporary Art Miami (ICA, 61 NE 41st Street) is free admission every day — genuinely excellent rotating contemporary art exhibitions.",
            "11:00am — Bayside Marketplace (401 Biscayne Blvd) — outdoor waterfront marketplace on Biscayne Bay, free entry. The barge restaurants are overpriced tourist fare, but the waterfront walk is free and provides good views of the Port of Miami and Biscayne Bay. Marina boat tours depart from here ($35–60, 90 minutes).",
            "1:00pm — Pérez Art Museum Miami (PAMM, 1103 Biscayne Blvd, $16 adults, free on first Fridays of the month) — a Herzog & de Meuron-designed building on Biscayne Bay. The hanging gardens on the exterior (tropical plants suspended in massive macramé installations) are as notable as the art inside. The collection focuses on post-WWII and contemporary art with a strong focus on the Caribbean and Latin American diaspora.",
            "3:30pm — Coconut Grove neighborhood (30 minutes south by car or Metrorail from Brickell): Miami's oldest neighborhood, filled with banyan trees, boutiques, and waterfront parks. CocoWalk (3015 Grand Ave) reopened in 2020 after a full renovation. Peacock Park and the bayfront are free.",
            "5:30pm — Return to hotel for checkout if departing today. Uber from South Beach to MIA: $20–35. Allow 45–60 minutes for the airport, plus TSA time. MIA is a busy international hub — security lines on Sunday afternoons can reach 45 minutes.",
            "7:00pm — If staying an extra night: dinner at Zuma Miami in the Epic Hotel (100 SE 2nd Street, $60–90/person) for the best Japanese robatayaki in the city, or Cvi.che 105 (105 NE 3rd Avenue, $30–45/person) for Peruvian ceviche with an extraordinary wine list.",
          ],
          cost: "$40–75 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$220–400/day",
      days: [
        {
          day: "Day 1",
          title: "South Beach with Historic District Tour",
          items: [
            "10:00am — Check into Circa 39 Hotel ($120–200/night) in the North Beach/Mid-Beach area — excellent value and just far enough from the Spring Break crowds of South Beach while remaining walkable to everything.",
            "12:00pm — Guided Art Deco walking tour with the Miami Design Preservation League ($30, 90 minutes, leaves from the Welcome Center daily at 10:30am) or book a private architectural tour through Context Travel ($80–120/person) for a deeper dive into the Streamline Moderne and Mediterranean Revival buildings alongside the Art Deco.",
            "2:00pm — Lummus Park beach afternoon. Rent beach chairs and an umbrella ($20–30 for the set) from one of the beach service operators along the strand. Order fresh coconut water from the beach vendors ($5–7). Swim in the clear Atlantic.",
            "5:00pm — Lincoln Road: the standard outdoor mall experience elevated by excellent people-watching. SoulCycle and Equinox face each other across the promenade. Van Dyke Café for an espresso on the terrace ($4–6).",
            "7:30pm — Dinner at Stubborn Seed (150 Sunset Harbour Drive, $60–90/person tasting menu) — James Beard-nominated chef Jeremy Ford's most celebrated restaurant. The tasting menu changes weekly based on what is extraordinary at that moment. Book 2–3 weeks in advance.",
          ],
          cost: "$140–200 total",
        },
        {
          day: "Day 2",
          title: "Wynwood Art Deep Dive & Little Havana Food Tour",
          items: [
            "10:00am — Wynwood with a local guide: book a Wynwood art tour through Miami Photo Tours or Airbnb Experiences ($40–70/person) to understand the commissioning history and the artists behind the murals. The context transforms the experience from photo-taking to genuine understanding.",
            "12:30pm — Lunch at KYU Wynwood ($25–40/person) — the Japanese wood-fire restaurant that became the neighborhood anchor when Wynwood was still being discovered. The Korean fried cauliflower, the glazed short rib, and the wagyu dumplings are perennial menu items.",
            "2:30pm — Little Havana food tour: several operators run 3-hour Cuban food and culture tours of Calle Ocho ($65–85/person) including tastings at Versailles, a cigar rolling demonstration, domino park visit, and café cubano education. Miami Culinary Tours is the most established operator.",
            "6:00pm — Sunset drinks at Sugar rooftop bar (East Hotel, Brickell, 788 Brickell Plaza, 40th floor) — panoramic views over the bay and the Miami skyline. Cocktails $18–24. Free to access the rooftop (just arrive before the cover charge starts at 10pm).",
            "8:00pm — Dinner at Ariete (3540 Main Hwy, Coconut Grove, $50–70/person) — Michael Beltran's Cuban-American cuisine. The crab cakes, the short rib, and the key lime pie are exceptional. One of the most awarded young restaurants in the city.",
          ],
          cost: "$180–260 total",
        },
        {
          day: "Day 3",
          title: "Everglades & Key Biscayne",
          items: [
            "7:00am — Private Everglades tour: several operators offer half-day private airboat and nature tours ($200–300/person for a private or small-group experience that includes naturalist commentary unavailable on public tours). Book through Everglades Day Safari or Natural Habitat Adventures.",
            "12:00pm — Return drive north. Detour to Key Biscayne via the Rickenbacker Causeway (toll $2 each way). Bill Baggs Cape Florida State Park ($8/car) at the southern tip of the island has one of the finest beaches in Florida — white sand, clear shallow water, and a 19th-century lighthouse ($5 tower tours, three times daily).",
            "3:00pm — Crandon Park Beach (northern Key Biscayne, also $8/car entry) — the widest beach in Miami-Dade County, exceptionally calm water, mangrove lagoon for kayaking. Kayak rentals: $25/hour.",
            "6:00pm — Drive back across the Rickenbacker to Brickell. Cocktails at Quinto La Huella (East Hotel, Brickell, ground floor, $15–22) — a contemporary Argentine restaurant-bar with extraordinary cocktails and a chic terrace.",
            "8:00pm — Dinner at Byblos Miami (1545 Collins Ave, $50–75/person) — Middle Eastern-Mediterranean cuisine in a beautiful space. The mezze selections, the lamb kibbeh, and the whole fish with chermoula are the highlights.",
          ],
          cost: "$200–280 total",
        },
        {
          day: "Day 4",
          title: "Design District, PAMM & Farewell",
          items: [
            "9:30am — Design District with time to actually enter the ICA Miami (free) — the rotating exhibitions are consistently at international gallery quality. The building's outdoor spaces and the surrounding district are walkable and beautiful.",
            "11:30am — PAMM ($16): the Herzog & de Meuron building deserves time. The Maximo Caminero collection of contemporary Caribbean art and the permanent collection anchored by Frank Stella are the core.",
            "1:30pm — Farewell lunch at Zuma Miami (100 SE 2nd Street, $50–75/person) on the Miami River terrace — Japanese robatayaki with excellent cocktails. The black cod with miso glaze and the rock shrimp tempura are essential orders. A different price point from the weeknight dinner menu.",
            "4:00pm — Final South Beach walk: collect a box of pastries from La Rosa Bakery (531 Lincoln Road, $2–4 each) — Cuban-style guava pastries, croquetas, and ham and cheese to eat on the beach one last time before heading to the airport.",
            "6:00pm — Depart for MIA. Allow 45–60 minutes from South Beach. The Miami Beach Trolley connects to the MacArthur Causeway area; from there Uber to MIA is $20–30.",
          ],
          cost: "$140–200 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$600–2000+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at Faena or 1 Hotel",
          items: [
            "Private transfer from MIA via Carey or Blacklane ($120–180 to South Beach in a luxury sedan). Your hotel butler has arranged early check-in.",
            "Check into Faena Hotel Miami Beach ($500–1,200/night) — the most theatrical hotel in Miami, designed by Baz Luhrmann and Catherine Martin. The gilded woolly mammoth skeleton in the arts center, the Damien Hirst installations, the red color palette — nothing in Miami looks like this. Alternatively, 1 Hotel South Beach ($350–700/night) offers the same tier of experience in a sustainability-focused design.",
            "Afternoon: private Art Deco architectural tour of the historic district with an architectural historian ($300–500 for a 3-hour private tour through Context Travel or Miami Design Preservation League VIP). Access to rooftops and interiors normally closed to the public.",
            "8:00pm — Dinner at Cote Miami (3900 NE 2nd Avenue, $120–200/person) — the James Beard Award-winning Korean steakhouse from New York, now with a Miami outpost in the Design District. The butcher's feast (four prime cuts) and the banchan selection are extraordinary. Book 3–4 weeks in advance.",
          ],
          cost: "$600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Everglades Safari & Biscayne Bay Yacht",
          items: [
            "7:00am — Private Everglades naturalist tour: book through Natural Habitat Adventures or Everglades Day Safari for a private full-day excursion ($600–900 for two people) covering airboat, kayaking, and birding with a specialist guide who provides conservation and ecological context unavailable on group tours.",
            "12:00pm — Lunch at Robert Is Here fruit stand and farm — even at this level of travel, the mamey sapote milkshake is non-negotiable and costs $7. Eat under the trees with the fruit vendors and the alligator wrestling families for a genuinely Floridian experience.",
            "3:00pm — Sunset yacht charter from Bayside Marketplace marina ($1,500–3,000 for 3-hour private charter, catered food and Champagne included): Biscayne Bay at golden hour, with the Miami skyline glittering behind you and the bay glass-flat in the evening calm. Several luxury charter operators: Island Queen Charters, Miami Boat Rentals, and Sea Experience.",
            "9:00pm — Dinner at La Mar by Gaston Acurio (Mandarin Oriental Miami, 500 Brickell Key Drive, $80–130/person): the Peruvian culinary legend's Florida outpost, on the water. The ceviche selection and the tiraditos are the finest Peruvian food in Florida.",
          ],
          cost: "$900–1,500 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Art Basel Experience & Design District Collecting",
          items: [
            "10:00am — Private access to Miami's top contemporary art galleries: Gagosian Miami (DE LA CRUZ Collection Contemporary Art Space), the Bass Museum of Art ($16 admission, the finest art museum on Miami Beach), and the private collection at the Moore Building in the Design District. Several Miami art advisors offer half-day gallery circuit tours ($300–500).",
            "1:00pm — Lunch at Le Jardinier (151 NE 41st Street, Design District, $60–90/person) — Joël Robuchon's garden-to-table French restaurant in the Design District. The market vegetable plate and the sustainable fish of the day are exceptional. The interior design by Issy Wood and the plant-filled space are worth dining in even before the food.",
            "4:00pm — Private shopping appointment in the Design District: Hermès Miami, Tom Ford, Brunello Cucinelli, and Bottega Veneta all offer private client experiences by appointment. Contact client services 1–2 weeks in advance.",
            "9:00pm — Dinner at Stubborn Seed ($150–200/person for the full tasting menu with wine pairing) — James Beard finalist Jeremy Ford's tasting menu elevated with the optional wine pairing. The restaurant's compact size (40 seats) and intimate atmosphere make it a genuinely personal dining experience.",
          ],
          cost: "$800–1,300 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Spa Morning, Key West Option & Departure",
          items: [
            "9:00am — Spa at Faena Miami Beach ($200–500/treatment): the Tierra Santa Healing House is one of the most celebrated hotel spas in Florida. The hammam ceremony and the watsu floating massage are signature treatments.",
            "Option A — Key West day trip by helicopter ($800–1,200 round trip per person via Wings Air Helicopters or Air Key West) — 45 minutes each way, arrive in Key West by 10:30am, have lunch at Pepe's Café (oldest restaurant in Key West, since 1909), walk Duval Street, visit the Hemingway House ($17), and return by 4pm. The aerial view of the Florida Keys — coral atolls in turquoise water — is extraordinary.",
            "Option B — Miami Beach private morning: pool and beach at your hotel. The Faena's pool area and direct beach access make this the easiest luxury day in Miami — order the tuna tartare and fresh juice from the pool service ($60–80 for lunch), swim in the Atlantic, and consider whether you ever need to leave.",
            "4:00pm — Checkout. Private transfer to MIA ($120–180 via Blacklane or Carey). Access the American Airlines Admirals Club or the international terminal luxury lounge for departure. MIA has one of the better airport lounge networks in the USA.",
          ],
          cost: "$600–1,200 total (excl. hotel, varies by Option)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$30–60", food: "$20–30", transport: "$10–20", activities: "$15–30", total: "$85–140/day" },
    { tier: "✨ Mid-Range", accommodation: "$120–200", food: "$45–80", transport: "$25–50", activities: "$30–70", total: "$220–400/day" },
    { tier: "💎 Luxury", accommodation: "$350–1,200", food: "$120–350", transport: "$80–200", activities: "$100–400", total: "$600–2,000+/day" },
  ],
  mistakes: [
    { icon: "☀️", title: "Visiting in Summer Heat and Hurricane Season", desc: "June through October in Miami is brutally hot (34–38°C), extremely humid (80–95% relative humidity), and subject to daily afternoon thunderstorms. Hurricane season peaks in August–October. Several major hurricanes have struck South Florida in recent decades. If you must visit summer, book fully refundable accommodation, monitor NOAA's National Hurricane Center forecasts, and have a flexible return flight. The difference between December and August in Miami is not a matter of preference — it fundamentally affects every outdoor activity.", color: "bg-red-50 border-red-200" },
    { icon: "🗺️", title: "Never Leaving South Beach for Little Havana", desc: "The single most common regret of first-time Miami visitors is spending all four days between Ocean Drive and Lincoln Road and never crossing the causeway to the actual city of Miami. Little Havana, Wynwood, Brickell, Coconut Grove, and the Design District are all within 20 minutes of South Beach and cost a fraction of the price for equal or superior food, art, and culture. Miami Beach is a beautiful resort island; Miami is a city with enormous depth.", color: "bg-orange-50 border-orange-200" },
    { icon: "🍽️", title: "Eating Only on Ocean Drive", desc: "Ocean Drive restaurants are among the most aggressively overpriced tourist-facing dining in the USA — $35 for a chicken sandwich, $28 for a Caesar salad, mandatory service charges on already-elevated prices. The Cuban food three miles away on Calle Ocho costs 25–30% of the same meal on Ocean Drive and is dramatically better. Have one drink on Ocean Drive for the ambiance; eat everywhere else.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🐊", title: "Skipping the Everglades Day Trip", desc: "The Everglades is one of the most unique ecosystems on the planet — a 6,000 square kilometer slow-moving river covered in sawgrass prairie, cypress domes, and mangrove estuaries. It is 1.5 hours from South Beach. Skipping it for a fourth day on the beach is genuinely the wrong call for first-time visitors to South Florida. The wildlife density on the Anhinga Trail rivals anything in East Africa for ease of viewing, and the airboat experience is unlike anything else in North America.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "☕", title: "Café Cubano: The Dollar That Changes Your Day", desc: "The café cubano — a thimble-sized espresso brewed with raw sugar mixed in during extraction, producing a caramel-sweet crema unlike anything else — is the defining beverage of Miami. It costs $1–2 at any Cuban bakery or ventanita (walk-up window). The ventanita at Versailles Restaurant on Calle Ocho ($1.50) and the walk-up counter at La Carreta (multiple Miami locations, $1.75) are the benchmark. A medianoche sandwich ($6–10) pairs with it perfectly.", color: "bg-amber-50 border-amber-200" },
    { icon: "🏖️", title: "Florida Law: All Beaches Are Free and Public", desc: "Florida law guarantees public access to all Atlantic and Gulf beaches. In Miami Beach, this means the entire stretch of sand from South Pointe Park north to Bal Harbour is publicly accessible. Beach vendors rent chairs and umbrellas ($20–30/set) but you are not required to use them or purchase anything. Lifeguard towers on South Beach are staffed year-round (unlike most US beaches). Water quality in the Atlantic off Miami Beach is consistently excellent.", color: "bg-teal-50 border-teal-200" },
    { icon: "🎨", title: "Art Basel Miami Beach Transforms the Entire City", desc: "Art Basel Miami Beach (first full week of December each year) is the most important art fair in the Americas and one of the three most significant in the world alongside the Swiss and Hong Kong fairs. The city's hotels sell out months in advance at 3–5x normal rates. But the satellite fairs — NADA, Untitled, Scope, Context — are free or inexpensive to attend and occur throughout Wynwood, the Design District, and the beach. The street programming and gallery events during Basel week are accessible at no cost.", color: "bg-green-50 border-green-200" },
    { icon: "🚕", title: "Uber from MIA to South Beach: What You Should Pay", desc: "Miami International Airport to South Beach (8km) should cost $20–35 by Uber or Lyft under normal conditions. Surge pricing during afternoon peak, major events, and rain storms can push this to $50–70. The Miami Beach Trolley (free) connects to South Beach but requires a connecting bus from the airport. Taxi cabs from MIA are metered at $2.90 base + $0.40/tenth mile — typically $35–50 to South Beach. Avoid private car services outside the official taxi stand at the airport.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "When is hurricane season in Miami and should I avoid it?", a: "The Atlantic hurricane season runs June 1 through November 30, with the statistical peak in August–October. Major hurricanes affecting Miami have historically included Irma (2017), Andrew (1992), and several smaller storms. The risk of a major hurricane hitting on any specific week is low, but the combination of heat, humidity, and storm risk makes summer a genuinely poor time to visit Miami for a leisure trip. November is the transitional sweet spot: hurricane risk dropping, temperatures cooling to the mid-20s, and prices not yet at winter premium levels." },
    { q: "What is the best area to stay in Miami for first-timers?", a: "South Beach between 5th and 20th Streets is the classic first-timer choice — walkable, beach-adjacent, Art Deco architecture everywhere, and all the main attractions easily accessible. Brickell (the financial district) is better for business travelers and has excellent restaurants but requires Uber to reach the beach. Mid-Beach (between 23rd and 42nd Streets) offers calmer streets and better value hotels while remaining on Miami Beach. Avoid Downtown Miami and Overtown for accommodation — limited walkability and safety concerns after dark." },
    { q: "How far is the Everglades from Miami?", a: "The Ernest F. Coe Visitor Center at the main park entrance is approximately 60km and 1.5 hours south of South Beach via the Florida Turnpike and US-1. The Shark Valley entrance on the Tamiami Trail (US-41) is about 80km and 1.5–2 hours west of Miami. Most visitors do the southern entrance via Homestead, see the Anhinga and Gumbo Limbo trails, and then head to the Flamingo area before returning. Budget a full day (8am–6pm) for a proper Everglades experience." },
    { q: "Are Florida beaches really free and publicly accessible?", a: "Yes — by Florida law, all beaches seaward of the mean high water line are publicly owned and accessible. This is enforced by the Florida Department of Environmental Protection. Even in front of private hotels and residences in Miami Beach, you can walk the shoreline. Beach chair and umbrella vendors rent equipment ($20–30/set) but you can bring your own or simply use the beach without any rental. Lifeguards are stationed at regular intervals along South Beach year-round." },
    { q: "Is South Beach safe for tourists?", a: "South Beach and Miami Beach generally are very safe for tourists during daylight hours and in the main tourist corridors at night. The main practical risks are: bag theft on the beach (never leave valuables unattended), car break-ins (do not leave anything visible in a parked car), and occasional aggressive behavior on Ocean Drive late at night during major events. Avoid the streets north of 8th Street and west of Collins Avenue in the South of Fifth area very late at night. Spring Break (late February–early April) brings significantly more rowdy crowds to South Beach." },
    { q: "Is a Key West day trip from Miami realistic?", a: "Technically possible but not recommended for a single day. Key West is 255km (160 miles) from Miami via the Overseas Highway — a 3.5-hour drive each way with no traffic. With traffic (common on weekends and holidays), it can reach 4.5+ hours each way. You would spend 7–9 hours driving to have 4–5 hours in Key West. A more realistic approach is to rent a car and stay one night in Key West, making it a proper overnight. Alternatively, helicopter transfers ($800–1,200/person round trip) reduce each leg to 45 minutes and make a day trip genuinely enjoyable." },
  ],
  combineWith: ["new-york-5-days", "las-vegas-4-days", "los-angeles-5-days"],
  relatedSlugs: ["new-york-5-days", "los-angeles-5-days", "las-vegas-4-days", "cancun-4-days"],
  galleryQuery: "miami south beach florida art deco wynwood everglades sunset",
};

export const metadata: Metadata = {
  title: "Miami in 4 Days: South Beach, Little Havana, Wynwood & Everglades (2026)",
  description: "Complete 4-day Miami itinerary covering South Beach Art Deco, Wynwood Walls, Little Havana café cubano, Everglades day trip, Design District, and PAMM — budget to luxury.",
  keywords: ["miami itinerary 4 days", "miami travel guide 2026", "miami budget travel", "south beach art deco guide", "miami things to do", "wynwood walls guide", "everglades day trip from miami", "little havana guide"],
  openGraph: {
    title: "Miami in 4 Days: South Beach, Little Havana & Everglades (2026)",
    description: "Art Deco architecture, Wynwood murals, $1 café cubano in Little Havana, and the Everglades — complete Miami guide for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80", width: 1200, height: 630, alt: "Miami South Beach Ocean Drive Art Deco Florida USA" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Miami in 4 Days (2026)", description: "South Beach, Wynwood, Little Havana, Everglades — complete Miami itinerary for every budget." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/miami-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Miami in 4 Days: South Beach, Little Havana, Wynwood & Everglades (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80",
      description: "Complete 4-day Miami itinerary from South Beach Art Deco and Wynwood Walls to Little Havana and the Everglades National Park.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Miami 4 Days", item: "https://www.incredibleitinerary.com/blog/miami-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Miami, Florida, USA",
      description: "The Magic City — home to South Beach Art Deco architecture, Wynwood street art, Little Havana Cuban culture, and the gateway to the Everglades National Park.",
      touristType: ["Beach lovers", "Art and culture enthusiasts", "Food travelers", "Nature and wildlife visitors", "Nightlife seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
  ],
};

export default function MiamiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
