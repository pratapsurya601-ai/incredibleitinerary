import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Palawan",
  country: "Philippines",
  countryFlag: "🇵🇭",
  slug: "palawan-4-days",
  heroQuery: "palawan el nido philippines limestone cliffs turquoise lagoon",
  heroAlt: "Palawan El Nido Philippines limestone karst islands rising from turquoise lagoon",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro: "Palawan has been voted the world's best island more times than anywhere else — and El Nido makes the case effortlessly. Hundreds of limestone karst towers erupt from electric blue water, hidden lagoons can only be reached by swimming through submerged rock arches, and a UNESCO-listed underground river runs for 8.2 kilometers beneath a jungle mountain. Four days is enough to see the essential Palawan — El Nido's island-hopping circuit, the Underground River, and if diving calls, a crossing to Coron's WWII shipwreck reefs.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$40",
    bestMonths: "Nov–May (dry season)",
    airport: "PPS (Puerto Princesa) or LGP (El Nido via small aircraft)",
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
        ["Visa on Arrival", "Indian passport holders currently receive a 30-day visa on arrival at Manila (NAIA) airport — FREE, no pre-application required. This policy applies when transiting through Manila to El Nido. Always verify the current policy at the Philippine Embassy website or VFS before booking, as visa-on-arrival arrangements can change."],
        ["What to Carry", "Return or onward flight ticket (essential — immigration requires proof of departure), hotel booking confirmation for the first night, and sufficient funds ($500 or equivalent recommended). Immigration officers at NAIA do ask for these documents."],
        ["Manila Transit", "Most routes from India (Delhi, Mumbai, Chennai, Bengaluru) require a connection at Manila (NAIA). You clear immigration on arrival at Manila, then take a domestic flight (Air Asia, Cebu Pacific) or small aircraft to Puerto Princesa (PPS) or El Nido (LGP). Book the domestic sector as a separate ticket and allow 3+ hours connection time at NAIA."],
        ["Philippine Peso", "$1 = ~57 PHP (Philippine Peso). ATMs available at NAIA and Puerto Princesa. El Nido has limited ATMs — withdraw cash in Puerto Princesa before traveling north. Most tour operators and restaurants in El Nido are cash only."],
      ],
    },
    {
      flag: "🌍",
      title: "Western & Other Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Entry", "USA, UK, EU, Canada, Australia, New Zealand, and most Western passport holders enter the Philippines visa-free for 30 days, extendable to 59 days at the Bureau of Immigration ($50 extension fee). No prior application needed — entry stamp issued at NAIA on arrival."],
        ["Extension to 59 Days", "Apply at the Bureau of Immigration in Puerto Princesa (or Manila, or any provincial BI office) for the extension. Bring your passport, the fee, and a completed form. The process takes 30–60 minutes."],
        ["Tourism Tax", "A tourism tax (environmental fee) is charged at some national park sites including the Underground River ($10 included in the entry fee) and El Nido island hopping tours ($4 environmental fee included in tour prices)."],
        ["Travel Insurance", "Not legally required but strongly recommended — emergency medical evacuation from remote Palawan islands can cost $5,000–20,000. Ensure your policy covers water activities and remote island access."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$40–70/day",
      days: [
        {
          day: "Day 1",
          title: "El Nido Arrival & Orientation",
          items: [
            "Arrive at El Nido via shuttle van from Puerto Princesa airport (5–6 hours, $12–15) or direct small aircraft to LGP (Lio Airport, 10 minutes from El Nido town, $50–80 with Air Juan or Island Transvoyager). Budget travelers take the van — it passes through the rugged Palawan interior and is an experience in itself.",
            "El Nido town is small and walkable. Check in to a beachfront guesthouse or hostel in the town proper ($12–25/night) — Frendz Hostel, El Nido Garden Beach Resort, or any of the dozens of budget options on the main beach road.",
            "Book island hopping tours immediately on arrival — go to the accredited tour operators along the beachfront, not street touts. Tour A ($20–25/person including lunch, snorkeling gear, and boat) covers the best lagoons and snorkeling spots.",
            "Las Cabanas Beach (free, 4km from El Nido town, $2 trike ride) — the local sunset beach. A zipline crosses to a small island ($6 for the ride). The wide arc of the bay with limestone towers in the background makes for the finest sunset view accessible on foot from town. Arrive by 5pm.",
            "El Nido night market begins at 6pm along the main beach road — fresh grilled seafood (squid, prawns, fish) for $3–8 per plate, cold San Miguel beer for $1, and the best people-watching in northern Palawan. The atmosphere is relaxed and genuinely local.",
            "Eat Filipino food from the night market: pork barbeque skewers (PHP 50 / ~$0.90), grilled squid (PHP 200 / ~$3.50), garlic rice (PHP 50), and a cold beer. Full meal for $5–7.",
          ],
          cost: "$40–60 total (shuttle + accommodation + food + tours booked for next day)",
        },
        {
          day: "Day 2",
          title: "Island Hopping Tour A — The Lagoons",
          items: [
            "Tour A departs at 8:30–9am from El Nido beach. The shared outrigger boat holds 8–15 people and includes a packed Filipino lunch on a beach ($20–25/person all inclusive with snorkeling mask and fins).",
            "Big Lagoon — the largest and most dramatic. Limestone towers rise 200 meters on all sides from translucent jade-green water. The lagoon is entered by outrigger boat. Kayaks are available for rent inside ($10/2 hours) for independent paddling deeper into the karst maze.",
            "Small Lagoon — accessed by swimming through a narrow rock arch at low tide (the opening is 1.5m x 1m — not claustrophobic but requires swimming). Inside: a perfectly calm circular lagoon ringed by vertical limestone, inhabited by reef fish and sea turtles. One of the most extraordinary confined natural spaces in Southeast Asia.",
            "Secret Lagoon — a hidden beach behind a climbable rock face, accessible only by squeezing through a cleft in the limestone. Small, perfectly sheltered, ringed by vegetation. The 'secret' label is accurate — it isn't visible from outside until you're inside.",
            "Shimizu Island snorkeling — the best reef snorkeling on Tour A. Clownfish, sea turtles, parrotfish, and coral gardens in 3–8 meters of visibility. Lunch is served on the beach here — grilled fish, rice, vegetables, and fresh watermelon.",
            "Return to El Nido town by 5pm. Sunburned, salt-rinsed, and thoroughly happy. Shower and return to the night market.",
          ],
          cost: "$25–35 total (tour + drinks + trike)",
        },
        {
          day: "Day 3",
          title: "Island Hopping Tour C — Hidden Beaches",
          items: [
            "Tour C ($25–30/person) covers a different set of islands from Tour A — do both for full El Nido coverage.",
            "Secret Beach — accessible only by swimming underwater through a rock tunnel (2 meters long, manageable for confident swimmers). Emerges into a completely enclosed beach surrounded by 100-meter vertical cliffs. The most dramatic and completely hidden beach in El Nido.",
            "Hidden Beach — a wide crescent of white sand tucked behind a limestone headland, invisible from the open water. Only accessible by boat through a narrow channel. Calm, shallow water, good for swimming.",
            "Matinloc Shrine — a hilltop shrine with panoramic views across the Bacuit Archipelago. 10-minute hike from the boat landing, the view extends across dozens of limestone islands to the horizon.",
            "Tapiutan Island snorkeling — the coral gardens here are in better condition than Tour A spots. Sea turtles are reliably spotted feeding on the seagrass beds.",
            "Alternative Day 3: Kayak solo in Big Lagoon ($10/2h, rent from the beach) after the main boat tours have left at 3pm. The lagoon in late afternoon light with the tourists gone is magical — the water turns deep green and the limestone tower shadows create extraordinary patterns. Pair with Helicopter Island visit (the island shaped like a helicopter from the sea, classic Instagram shot, 15-min boat ride).",
          ],
          cost: "$30–45 total (tour + drinks + optional kayak)",
        },
        {
          day: "Day 4",
          title: "Underground River or Coron Transfer",
          items: [
            "Option A — Puerto Princesa Underground River (UNESCO World Heritage Site, $20 entry + $15 paddle boat inside the cave + $15 shuttle from El Nido to Sabang) — book months ahead at undergroundriver.com.ph as day permits sell out. The 8.2km cave is the world's longest navigable underground river. A 45-minute guided paddle through chambers containing cathedral-scale formations, bats in the millions, and cave-dwelling swiftlets. The entrance chamber at the river mouth, with ocean waves breaking into the cave opening, is visually extraordinary.",
            "The Underground River requires a full day from El Nido: 1.5-hour shuttle to Sabang, waiting time, 45-minute cave tour, lunch, and 1.5-hour return. Exhausting but worth it if you haven't been. Book it for Day 4 and fly home from Puerto Princesa the same evening.",
            "Option B — Transfer to Coron for WWII wreck diving (overnight ferry 8–10 hours, $15–25, departs El Nido at 8am or 9pm; or 30-minute flight, $50–100 with Air Juan). Coron Bay holds 12 Japanese warships sunk in a 1944 US Navy airstrike — Lusong Gunboat, Olympia Maru, Irako, Akitsushima. The wrecks are at 10–40m depth, penetrable with a guide, and encrusted with coral and marine life. A full-day dive with 2–3 dives costs $60–100 with equipment rental from Coron operators.",
            "Filipino food to try before departing: Adobo (chicken or pork braised in vinegar and soy sauce — the national dish), Sinigang (sour tamarind soup with fish or shrimp, restorative after a day in the sun), Lechon (whole roasted pig, crispy skin, served at celebrations — order by the kilo at a lechon shop), Sisig (chopped pork face and offal on a sizzling plate, the most popular bar snack in the Philippines), Halo-halo (shaved ice with sweetened beans, jellies, fruit, and ube ice cream — essential in the Philippine heat).",
          ],
          cost: "$45–80 total (Underground River) OR $70–120 (Coron transfer + diving)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$120–220/day",
      days: [
        {
          day: "Day 1",
          title: "El Nido Arrival — Fly & Settle",
          items: [
            "Fly directly to El Nido via Air Juan or Island Transvoyager from Manila ($80–120, 1h20min) or take the Cebu Pacific flight to Puerto Princesa then shuttle ($50 flight + $15 shuttle, or a mid-range private transfer of $60–80 for the Puerto Princesa–El Nido road).",
            "Stay at a mid-range resort on Corong-Corong beach south of El Nido town ($80–140/night) — Frangipani El Nido, Miniloc Island Resort shuttle-accessible, or Cuna Boutique Hotel with pool. Quieter than town, sunset views, better food on-site.",
            "Private sunset boat charter at dusk ($40–60 for 2 hours on a private bangka) — circle the bay's limestone towers as the sun drops into the Sulu Sea, stopping at Payong-Payong Beach for a swim. More peaceful than the crowded Las Cabanas beach zipline scene.",
            "Dinner at El Nido restaurants: Trattoria Altrove (Italian-Filipino fusion, pasta and wood-fired pizza, $10–18/person), Art Cafe (rooftop, cocktails, Western menu, $12–20), or book a private chef dinner at your resort.",
          ],
          cost: "$150–200 total (flight, accommodation, private boat, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Island Hopping — Lagoons",
          items: [
            "Private island hopping boat charter ($120–180 for 6–8 hours, for up to 8 people, split the cost if traveling with others) — covers Tour A and Tour B spots in a single custom day with your own schedule.",
            "Big Lagoon by kayak for 2 hours before the shared tour boats arrive (your private boat can leave at 7am). The lagoon at 7am is completely silent — only the drip of water from limestone overhangs and the splash of your paddle.",
            "Pinagbuyutan Island snorkeling — a mid-range tour extra not typically on budget tours. The reef here has exceptional coral health and consistent sea turtle encounters.",
            "Private beach barbecue lunch on an uninhabited beach — your tour operator prepares grilled fish, rice, and tropical fruit on a beach you may have entirely to yourselves.",
            "Seven Commandos Beach afternoon stop — the postcard beach of El Nido. Wide white sand, perfect water, backed by jungle and karst. A shared tour boat moment, but arrive after 3pm when the day-trippers have left.",
          ],
          cost: "$160–220 total (private boat split, meals, snorkeling)",
        },
        {
          day: "Day 3",
          title: "Kayaking & Hidden Corners",
          items: [
            "Half-day kayaking tour with a guide ($45–65/person) covering the limestone channels north of El Nido town. The guide knows which arches are passable at what tide and which hidden beaches have no access except by kayak.",
            "Cadlao Lagoon by kayak — larger than the Big Lagoon, less visited, and equally spectacular. The surrounding cliffs have caves accessible only at low tide.",
            "Afternoon freediving or snorkeling lesson ($50–80 for a 3-hour introductory session) — El Nido's calm lagoon conditions are ideal for learning freediving. Several operators offer PADI freediving intro courses.",
            "Evening Firefly watching tour ($15–25/person, departs dusk) — a short boat ride up a mangrove river to see bioluminescent fireflies covering the mangrove trees. A surreal, quiet experience that El Nido does well.",
          ],
          cost: "$130–190 total",
        },
        {
          day: "Day 4",
          title: "Underground River or Coron — World-Class",
          items: [
            "Underground River with a mid-range day tour from El Nido ($70–90/person all inclusive — transport, lunch, boat, permits). A fixed-price tour simplifies the logistics substantially versus booking each component independently.",
            "Or fly to Coron ($50–100, 30 minutes on Air Juan) and stay at a mid-range dive resort ($80–130/night) — Coron Westown Resort, Two Seasons Coron, or Kalui Dive Resort.",
            "Full-day wreck diving in Coron Bay ($80–120 with equipment, 2–3 dives) with a certified guide. The Japanese warships of Coron — the Olympia Maru cargo ship, the Akitsushima seaplane tender, the Irako refrigerator ship — are among the finest accessible wreck dives in the world.",
            "Kayangan Lake (the clearest lake in Asia, $10 entry, 15-min hike) — on a day off from diving, this Coron highlight is reachable by boat tour ($30–40) and delivers extraordinary turquoise water in a completely enclosed lagoon.",
          ],
          cost: "$140–220 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$400–1,200+/day",
      days: [
        {
          day: "Day 1",
          title: "Private Island Arrival",
          items: [
            "Fly business class to Manila, then charter a small seaplane or private aircraft directly to El Nido ($300–500 for the charter, avoiding Puerto Princesa entirely). Land on the water off your resort's private jetty.",
            "Stay at Miniloc Island Resort ($400–700/night all inclusive) or El Nido Resorts Lagen Island ($500–800/night) — the original eco-resort island properties set in the Bacuit Archipelago with private beach access, kayaks, and reef snorkeling directly off the jetty.",
            "Sunset welcome cocktail on your private beach or over-water sala. The Miniloc Island property sits directly inside the Bacuit Archipelago — you can kayak to Small Lagoon from the jetty in 20 minutes.",
            "Private chef multi-course dinner on the beach featuring local seafood: kinilaw (Filipino ceviche with fresh tuna), grilled lapu-lapu (grouper), coconut-based prawn curry, and fresh tropical fruit.",
          ],
          cost: "$600–1,000 (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Lagoon Expedition",
          items: [
            "Private bangka boat with dedicated guide and crew for the day ($300–400 for 8–10 hours) — covers every lagoon and hidden beach at your own pace with no other tourists.",
            "Dawn departure at 6am to Big Lagoon before sunrise — the limestone towers emerge from mist over mirror-flat water with nobody else present. The resident hornbills call from the cliff faces. This is what the lagoon is supposed to look like.",
            "Private snorkeling session at a reef known only to local fishermen — your guide takes you to their family's spot, away from the tour boat circuits, for better coral and more diverse marine life.",
            "Picnic lunch on an uninhabited island — fresh grilled fish, coconut rice, papaya salad, and cold Palawan coconuts cracked on the beach.",
            "Freediving guide for the afternoon ($100–150 for private session) at the Big Lagoon wall — the underwater limestone formations extend 30 meters below the surface.",
          ],
          cost: "$500–800/day (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Underground River — Private Charter",
          items: [
            "Private vehicle charter to Sabang for the Underground River — departure at 6am to arrive before the public tour permit holders. VIP priority boarding on the first cave paddle of the day ($300–400 for the private arrangement through your resort concierge, including all permits and transport).",
            "Extended private paddle of the first 1.5km of the underground river (standard tours are 45 minutes; VIP arrangements can extend to 90 minutes in the cave).",
            "Lunch at a private beach on the way back — Sabang Beach has excellent fresh seafood at beach shacks ($10–20 for grilled barracuda or blue marlin).",
            "Return to El Nido for sunset and final night at the resort. Arrange a bioluminescent kayaking experience with your resort (kayaks with clear bottoms over bioluminescent plankton, best in Jun–Oct).",
          ],
          cost: "$400–700/day (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Coron or Private Departure",
          items: [
            "Private speedboat or seaplane transfer to Coron ($400–600 for the charter vs $50–100 for commercial flight). The 2-hour speedboat crosses open water between the Calamian Islands — arrange with your El Nido resort.",
            "Stay at Club Paradise Palawan ($300–500/night, all inclusive) on Dimakya Island — a private island resort within snorkeling distance of some of Coron's coral gardens.",
            "Private wreck diving expedition with a Coron specialist ($200–300, 2 dives with private guide and dedicated boat) — the Japanese warships are extraordinary at any budget level, but private guidance allows deeper penetration and more time.",
            "Private departure: seaplane from Coron Bay directly to Manila, or private vehicle charter to Busuanga Airport (USU, 1-hour flight to Manila) for international connection.",
          ],
          cost: "$700–1,200+/day (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–25",
      food: "$8–15",
      transport: "$5–10",
      activities: "$20–35",
      total: "$40–70/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–120",
      food: "$20–40",
      transport: "$20–40",
      activities: "$40–80",
      total: "$120–220/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–800",
      food: "$60–150",
      transport: "$80–200",
      activities: "$100–250",
      total: "$400–1,200+/day",
    },
  ],
  mistakes: [
    {
      icon: "🌧️",
      title: "Visiting June–October (Typhoon Season)",
      desc: "Palawan sits in a typhoon corridor. June–October brings regular squalls, rough seas, and conditions where island-hopping boats cannot safely operate. Many tours are cancelled during this period and some islands are completely inaccessible. The Underground River also has periodic closures due to cave flooding. The dry season (November–May) gives reliable weather, calm lagoon water, and full access to all sites. Book a November–May trip, not a June–October one.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎟️",
      title: "Not Booking the Underground River in Advance",
      desc: "The Puerto Princesa Underground River accepts a limited number of daily visitors and issues permits that genuinely run out. Peak season (December–April) sees permits selling out weeks ahead. Book online at undergroundriver.com.ph immediately after confirming your travel dates. Day permits, boat allocations, and shuttle timing all need advance coordination. Travelers who show up without a permit are turned away at Sabang — the trip from El Nido takes 3 hours one way.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚣",
      title: "Booking Tours Through Street Touts",
      desc: "El Nido's beachfront is lined with tour sellers competing for customers. Some unaccredited operators use older, less seaworthy boats with no life jackets, skip the safety briefing, and overload the vessel. Book through accredited operators who display their DENR (Department of Environment and Natural Resources) permit and provide proper safety equipment. The price difference is minimal ($3–5/person more) and the safety difference is significant. Ask to see the boat before paying.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🤿",
      title: "Skipping Coron if You Dive or Snorkel",
      desc: "El Nido has better surface scenery — the lagoons, cliffs, and hidden beaches are more dramatic. Coron has better underwater scenery — the WWII Japanese warships are among the finest wreck dives in the world, and Kayangan Lake is the clearest freshwater lake in Asia. If you have any interest in diving or snorkeling, adding 2 days in Coron to your Palawan trip (overnight ferry $15, or 30-minute flight $50) transforms it from a great island-hopping trip to a genuinely complete Philippines experience.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🚣",
      title: "Big Lagoon by Kayak After 3pm — Alone With the Cliffs",
      desc: "The shared island hopping tours visit Big Lagoon between 9am and 2pm. After 3pm the tour boats have left and the kayak rental operator inside the lagoon is still working. Arrange transport to the lagoon entrance by a chartered bangka ($15–20 for the water taxi), rent a kayak ($10 for 2 hours), and paddle the vast lagoon in complete silence with the limestone towers turning gold in the late afternoon light. It is the best single experience in El Nido, and almost nobody does it.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏝️",
      title: "Tour A and Tour C Cover Different Islands — Do Both",
      desc: "A common mistake is choosing between Tour A and Tour C. They visit entirely different islands and have completely different highlights: Tour A covers Big Lagoon, Small Lagoon, Secret Lagoon, and Shimizu Island snorkeling. Tour C covers Secret Beach (swimming underwater through a rock opening), Hidden Beach, Matinloc Shrine, and Tapiutan Island. Budget travelers on 4 days should do both — $45–55 total for the two tours is the best value available in Southeast Asia.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍖",
      title: "El Nido Night Market at 6pm — Fresh Seafood for $3",
      desc: "The nightly El Nido beach barbecue market begins at dusk along the main beachfront. Local vendors grill squid, prawns, fish, and pork skewers over charcoal — choose your item, pay by weight or by piece, and eat at plastic tables on the beach. Squid for PHP 180 (~$3.20), grilled lapu-lapu (grouper) for PHP 250 (~$4.40), garlic rice for PHP 50. A full dinner with a cold San Miguel beer costs $6–9. The atmosphere at sunset, with the limestone bay behind, is hard to beat anywhere in the Philippines.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Do Philippines give visa on arrival to Indians?",
      a: "As of current policy, Indian passport holders receive a 30-day visa on arrival at Manila (NAIA) airport free of charge. This allows onward domestic travel to El Nido, Puerto Princesa, and Coron. Always verify this at the Philippine Embassy website (www.philembassy.net.in) before booking, as visa-on-arrival arrangements are subject to change. Carry a return/onward ticket, hotel booking for first night, and sufficient funds when presenting to immigration at NAIA.",
    },
    {
      q: "When is the best time to visit Palawan?",
      a: "November–May is the dry season and the correct time to visit. December–March is peak season with the most reliable weather, calmest lagoon water, and best visibility for snorkeling. January–March is generally the best month combination. November and April–May have good weather with fewer tourists than the December–January peak. June–October is typhoon season — island hopping is frequently cancelled, seas are rough, and some experiences are impossible. Do not plan a Palawan trip June–October.",
    },
    {
      q: "El Nido vs Coron — which is better?",
      a: "They're better understood as complements than competitors. El Nido wins on surface scenery: the limestone lagoons, hidden beaches, and island-hopping circuits are the finest in Southeast Asia. Coron wins on underwater experience: WWII Japanese shipwrecks at 10–40m depth and Kayangan Lake (the clearest in Asia). A complete Palawan trip does both — 3 nights in El Nido and 2 nights in Coron. If forced to choose one: non-divers should pick El Nido; divers should pick Coron.",
    },
    {
      q: "What is typhoon season in the Philippines and when does it affect Palawan?",
      a: "The Philippines has 20 typhoons per year on average, most passing through the archipelago June–October. Palawan lies on the typhoon corridor's western edge — it's less frequently hit directly than the Visayas and Luzon, but the associated weather (heavy rain, rough seas, strong winds) makes island hopping dangerous and often impossible June–September. Some operators also close for maintenance during this period. November sees the transition to dry season — most of November is fine for travel in Palawan.",
    },
    {
      q: "What should I bring for island hopping in El Nido?",
      a: "Reef-safe sunscreen (non-nano zinc oxide formulas — chemical sunscreens are banned in El Nido's marine park and destroy coral). A rash guard or light long-sleeve top for sun protection — 6 hours on a boat at the equator at full sun will burn even dark skin tones. Waterproof phone case or dry bag ($5–10 from El Nido shops). Cash in Philippine Pesos — most tour operators, island lunch stops, and beach bars are cash only. Snorkeling fins if you have them (rentals are available but often the wrong size).",
    },
  ],
  combineWith: ["bali-5-days", "cebu-philippines", "singapore-3-days"],
  relatedSlugs: ["sri-lanka-7-days", "nepal-7-days", "bali-5-days", "thailand-7-days"],
  galleryQuery: "el nido palawan philippines lagoon limestone karst island hopping",
};

export const metadata: Metadata = {
  title: "Palawan in 4 Days: El Nido Island Hopping, Underground River & Coron (2026)",
  description: "Complete 4-day Palawan itinerary covering El Nido lagoons, island hopping Tours A & C, the UNESCO Underground River, and Coron wreck diving — real costs, Philippines visa info for Indians.",
  keywords: [
    "palawan itinerary 4 days",
    "el nido philippines travel guide",
    "el nido island hopping tour a tour c",
    "underground river palawan",
    "coron wreck diving",
    "philippines visa on arrival indians",
    "palawan budget travel 2026",
  ],
  openGraph: {
    title: "Palawan in 4 Days: El Nido Island Hopping & Underground River (2026)",
    description: "Electric blue lagoons, secret beaches, a UNESCO cave river, and WWII shipwrecks — complete Palawan guide from $40/day.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "El Nido Palawan Philippines limestone karst islands turquoise lagoon",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palawan in 4 Days (2026)",
    description: "El Nido lagoons, Underground River, Coron wrecks — real costs and Philippines visa info.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/palawan-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Palawan in 4 Days: El Nido Island Hopping, Underground River & Coron (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80",
      description:
        "4-day Palawan itinerary covering El Nido island hopping lagoons, the Puerto Princesa Underground River UNESCO site, and Coron WWII wreck diving.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Palawan 4 Days",
          item: "https://www.incredibleitinerary.com/blog/palawan-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Palawan, Philippines",
      description:
        "Palawan island in the western Philippines — home to El Nido's limestone lagoons, the UNESCO Puerto Princesa Underground River, and Coron's WWII Japanese shipwrecks.",
      touristType: ["Beach travelers", "Divers", "Wildlife enthusiasts", "Island hoppers", "Adventure travelers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 10.0,
        longitude: 119.0,
      },
    },
  ],
};

export default function PalawanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
