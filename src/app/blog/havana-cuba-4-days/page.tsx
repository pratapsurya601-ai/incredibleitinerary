import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Havana, Cuba",
  country: "Cuba",
  countryFlag: "🇨🇺",
  slug: "havana-cuba-4-days",
  heroQuery: "havana cuba malecon 1950s classic cars old havana colonial architecture",
  heroAlt: "Havana Malecon at sunset with colourful 1950s American cars and colonial buildings along the waterfront",
  category: "Caribbean",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Havana is the world's greatest time capsule — a city where 1950s Chevrolets and Buicks cruise past crumbling baroque palaces, where Hemingway's barstool at Floridita is preserved under glass, and where salsa music bleeds out of every doorway at midnight. Old Havana's cobblestone squares are a UNESCO World Heritage Site. The Malecon promenade is 8km of ocean wall where the entire city comes to watch the sun sink into the Caribbean. Four days here is enough to drink daiquiris at Floridita, mojitos at Bodeguita del Medio, smoke a hand-rolled cigar in a Vinales tobacco barn, and dance salsa badly but joyfully until 2am.",
  stats: { duration: "4 Days", budgetFrom: "$60", bestMonths: "Nov-Apr", airport: "HAV" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Old Havana & Malecon" },
    { id: "day2", emoji: "📅", label: "Day 2 — Hemingway & Salsa" },
    { id: "day3", emoji: "📅", label: "Day 3 — Vinales Valley Day Trip" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Tourist Card Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Cuban Tourist Card (Tarjeta del Turista)"],
        ["Processing", "Available on arrival or in advance online"],
        ["Fee", "$25-75 USD depending on purchase point"],
        ["Validity", "30 days (extendable once for 30 more days in Cuba)"],
        ["Apply at", "Cuban embassy, airline, or online via cubavisas.com"],
        ["Insurance", "Travel health insurance mandatory — Cuba requires proof of coverage"],
        ["Notes", "Buy the tourist card before arrival if possible to avoid queues. Most airlines sell it at check-in for flights to Cuba."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US Passport — Special Regulations Apply",
      bg: "bg-red-50",
      border: "border-red-200",
      titleColor: "text-red-800",
      items: [
        ["Requirement", "Tourist Card + authorized travel category"],
        ["Processing", "Must travel under one of 12 authorized categories"],
        ["Fee", "$25-100 USD depending on airline and booking method"],
        ["Validity", "30 days"],
        ["Categories", "Support for Cuban people, educational activities, and others are valid"],
        ["Notes", "Regulations change frequently. Check OFAC guidelines before booking. Many Americans travel via Mexico City or Cancun."],
        ["Insurance", "Travel health insurance mandatory (Cuban government requirement)"],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$60-90/day",
      days: [
        {
          day: "Day 1",
          title: "Old Havana UNESCO Cobblestones & Malecon",
          items: [
            "13:00 — Arrive at Jose Marti International Airport (HAV); official taxi to Old Havana costs 25-35 CUP (negotiate before entering); check in to a casa particular (private room in a Cuban home) for $25-45/night — casas are the best accommodation option at all budgets in Cuba and vastly better value than state-run hotels",
            "15:00 — Old Havana UNESCO walking tour starting at Plaza de Armas (Havana's oldest square): the 16th-century Castillo de la Real Fuerza, the second-hand book market, and the Museum of the City in the Palacio de los Capitanes Generales (entry $2-3)",
            "16:30 — Plaza de la Catedral and the baroque Havana Cathedral (1748): the asymmetrical towers and ornate facade are among the finest Spanish colonial architecture in the Americas; free to enter the square, $1 for the cathedral interior",
            "18:00 — Walk to Floridita bar (Hemingway's favourite daiquiri bar since the 1920s): a daiquiri costs $6-8; Hemingway's bronze statue at the end of the bar is a major photo stop; the house daiquiri is a frozen lime-and-rum masterpiece",
            "20:00 — Dinner at a paladar (private restaurant) near Old Havana: ropa vieja (shredded beef) or arroz con pollo for $8-15 — paladars consistently outperform state restaurants in quality and value",
            "21:30 — Evening walk along the Malecon: the 8km promenade is where Havana comes to sit, play guitar, fish, and watch the waves crash over the wall; entirely free and absolutely the heartbeat of the city",
          ],
          cost: "$40-60 (taxi, daiquiri, dinner, entry fees)",
        },
        {
          day: "Day 2",
          title: "Bodeguita del Medio, Classic Cars & Salsa",
          items: [
            "09:00 — La Bodeguita del Medio (Hemingway's mojito bar, 2 blocks from Plaza de la Catedral): mojito costs $6-8; the walls are covered floor to ceiling in signatures from decades of visitors; arrive early before tour groups fill the narrow bar",
            "10:30 — Explore the remaining Old Havana plazas: Plaza Vieja (restored colonial square with cafes and the Camera Obscura), Plaza de San Francisco (17th-century basilica), and the colourful Callejon de Hamel street art neighbourhood in Centro Havana",
            "12:30 — Classic car tour: negotiate a 1-hour tour of Havana in a 1950s convertible Chevrolet or Pontiac from the stand outside El Capitolio ($30-40 for the car, split between passengers); the Malecon, Vedado, and Revolution Square route is the standard loop",
            "15:00 — Cigar factory tour (Real Fabrica de Tabacos Partagas near El Capitolio, $10 entry): watch hand-rollers assemble cigars using centuries-old technique; the lector (reader) who traditionally read novels aloud to workers is a historically fascinating custom; buy a cigar at the factory shop",
            "19:00 — Dinner at a Vedado paladar ($15-20/person): the Vedado neighbourhood has the best paladar concentration with rooftop terraces and creative Cuban cuisine",
            "21:30 — Salsa class at a casa de la trova or local dance school ($10-15 for 1 hour): basic salsa in Cuba takes 60 minutes to learn well enough to dance socially; staff at casas particulares can recommend authentic (non-tourist) venues for dancing afterward",
          ],
          cost: "$55-80 (car tour, factory, dinner, salsa class)",
        },
        {
          day: "Day 3",
          title: "Vinales Tobacco Valley Day Trip",
          items: [
            "06:30 — Shared minibus to Vinales Valley (3 hours each way, $15-20 one-way): book the night before through your casa; the valley is a UNESCO World Heritage Site with dramatic limestone mogotes (hills) rising from flat tobacco fields",
            "10:00 — Explore Vinales valley by hired bicycle (10 CUP/$0.50 per hour) or on foot: visit a tobacco farm to see the curing barn with drying leaves and watch a farmer hand-roll a cigar using leaves from that day's harvest",
            "12:00 — Lunch at a Vinales paladar: fresh lobster is inexplicably cheap here ($12-18 for a full lobster), or try the traditional Cuban roast pork and black beans",
            "14:00 — Mural de la Prehistoria: a controversial 120m mural painted on a cliff face from 1961-1975; scenic viewpoint regardless of artistic opinion",
            "16:00 — Shared minibus return to Havana",
            "20:00 — Final night in Havana: walk the Malecon at sunset and find a rooftop bar in Vedado for rum cocktails ($3-5 a drink) with city views",
          ],
          cost: "$50-70 (minibus, bicycle, lunch, dinner)",
        },
        {
          day: "Day 4",
          title: "Revolution Square, Cigar Rolling & Departure",
          items: [
            "09:00 — Plaza de la Revolucion: the vast ceremonial square with Che Guevara's steel outline on the Interior Ministry building and the Jose Marti Memorial (entry $2 for the tower, 109m tall, best city views in Havana)",
            "11:00 — Final Old Havana wander: pick up a box of Cohiba or Montecristo cigars at an official La Casa del Habano shop (avoid street sellers offering cheaper boxes — they are almost always fake or inferior quality)",
            "13:00 — Lunch at a rooftop paladar with Old Havana views: mojito, black bean soup, and a Cuban sandwich ($12-18)",
            "15:00 — Transfer to HAV Airport: allow 60 minutes from Old Havana; official airport taxis cost $25-30",
          ],
          cost: "$40-60 (entry, lunch, cigars, airport taxi)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$130-200/day",
      days: [
        {
          day: "Day 1",
          title: "Old Havana Deep Dive & Malecon Evening",
          items: [
            "13:00 — Private taxi from HAV Airport ($35-45) to a boutique casa particular or small private hotel in Old Havana ($70-120/night); Airbnb equivalents booked in advance offer great locations inside the UNESCO core",
            "15:00 — Guided Old Havana walking tour with a licensed guide ($30-40 for 2 hours): a specialist in colonial architecture or Cuban history can transform the plazas and fortifications into a living story; ask your casa to recommend a guide",
            "17:30 — Floridita and a proper Hemingway bar crawl: start with a daiquiri at Floridita, walk to Bodeguita del Medio for a mojito, then find a local La Guarida-era bar for a Cuba Libre; budget $25-35 for the evening drinks circuit",
            "20:00 — Dinner at La Guarida restaurant in Centro Havana ($30-40/person): the most famous paladar in Cuba, set inside a crumbling baroque mansion; book 3-4 days ahead; the rooftop terrace has extraordinary views and the food is genuinely excellent",
          ],
          cost: "$140-180 (hotel, guide, dinner, bars)",
        },
        {
          day: "Day 2",
          title: "Hemingway's Finca Vigia & Classic Car Sunset",
          items: [
            "09:00 — Private taxi to Finca Vigia, Hemingway's Cuban home in San Francisco de Paula ($20-25 return including wait time); entry $8; the house is preserved exactly as he left it in 1960 — his fishing rods, his library of 9,000 books, the animal trophies; view rooms through the open windows as rules prevent entering",
            "11:00 — Cojimar fishing village (15 minutes from Finca Vigia): the inspiration for The Old Man and the Sea; the small Hemingway bust in the town square was made from bronze donated by local fishermen; excellent fresh fish lunch at a cojimar paladar ($15-25)",
            "14:00 — El Morro and La Cabana fortresses across the harbour: take the ferry ($0.10) or taxi through the tunnel; the fortress complex is huge and the views back to Old Havana are the best available; entry $8 combined",
            "18:00 — Convertible 1950s car along the Malecon at sunset: negotiate a 2-hour Malecon circuit in a classic Chevrolet ($50-60 for the car) timed for the golden hour; the low Caribbean light on the buildings and ocean wall is the definitive Havana image",
            "20:30 — Dinner at a Vedado neighbourhood paladar with live music ($25-35/person)",
          ],
          cost: "$150-190 (taxi, entries, lunch, car tour, dinner)",
        },
        {
          day: "Day 3",
          title: "Vinales Valley Private Tour",
          items: [
            "07:00 — Private car and driver to Vinales ($60-80 return including full day): far more comfortable and flexible than shared transport; stop at the Mirador de los Jazmines (valley viewpoint) on the way in for the classic Vinales photo",
            "10:00 — Private tobacco farm visit with demonstration and cigar rolling lesson ($25-35): a local farmer explains the full cultivation, harvesting, and curing process; roll your own cigar to take home",
            "12:30 — Lunch at El Olivo restaurant in Vinales ($20-30/person): consistently recommended as the best in the valley; the terrace overlooks tobacco fields and mogotes",
            "14:30 — Vinales village: the colonial main street is well-preserved and the Casa de la Cultura has afternoon music sessions; horseback riding through the valley is available ($20/hour)",
            "19:00 — Return to Havana and a relaxed evening at a Vedado rooftop bar",
          ],
          cost: "$160-200 (private car, farm tour, meals)",
        },
        {
          day: "Day 4",
          title: "Art, Cigars & Departure",
          items: [
            "09:00 — Museo Nacional de Bellas Artes (National Fine Arts Museum, Cuban art wing): the most comprehensive collection of Cuban art from colonial to contemporary; entry $5; the revolutionary era works are fascinating regardless of political perspective",
            "11:30 — La Casa del Habano flagship store in Vedado: the best selection of authentic Cohiba, Montecristo, Bolivar, and Romeo y Julieta in Havana; a trained staff member can advise on boxes worth buying as gifts or for personal smoking",
            "13:30 — Final lunch at a rooftop paladar in Old Havana with cocktails ($20-30/person)",
            "16:00 — Private taxi to HAV Airport ($35-45); allow 90 minutes before international departure",
          ],
          cost: "$130-160 (museum, cigars, lunch, taxi)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$350-700/day",
      days: [
        {
          day: "Day 1",
          title: "Gran Hotel Arrival & Private Old Havana Tour",
          items: [
            "12:00 — Private luxury transfer from HAV ($60-80) to the Gran Hotel Manzana Kempinski La Habana or Hotel Saratoga ($250-500/night): the only international 5-star properties in Old Havana; the Kempinski is inside a restored 19th-century shopping arcade with a rooftop pool overlooking El Capitolio",
            "14:00 — Private expert guided tour of Old Havana with a historian or architectural specialist ($100-150 for 3 hours): deeper context on the Spanish colonial architecture, the 1959 revolution's impact on the city, and the ongoing UNESCO restoration programme",
            "17:00 — Floridita VIP: a daiquiri at the bar followed by a proper cocktail pairing education with a La Habana rum specialist at the hotel bar ($40-60 for the session including premium rums)",
            "20:00 — Dinner at El Del Frente or La Fontana ($40-60/person with wine): some of Havana's finest contemporary Cuban cuisine in an intimate setting; reserve 5-7 days ahead",
          ],
          cost: "$500-700 (hotel, guide, premium dining, cocktails)",
        },
        {
          day: "Day 2",
          title: "Private Finca Vigia, Cigar Master & Salsa Lesson",
          items: [
            "08:30 — Private car and Hemingway specialist guide to Finca Vigia ($80-100 including guide): the scholarly context on Hemingway's 21 years in Cuba, his fishing boat El Pilar (visible in the museum grounds), and his relationship with the revolution makes the visit transformative",
            "11:00 — Private master cigar roller session at a Havana cigar workshop ($80-120): a master torcedor (roller) teaches you the full technique; you take home a set of hand-rolled cigars along with personalised labels",
            "13:30 — Lunch at La Guarida ($40-50/person with reservation): the iconic baroque paladar; try the guava-glazed lamb and the rooftop bar above for a pre-lunch mojito",
            "16:00 — Private 2-hour salsa lesson with a professional Cuban dancer ($60-80): a dedicated lesson in a dance studio followed by a guided evening at an authentic Havana club (Casa de la Musica or La Zorra y el Cuervo)",
            "21:00 — Late dinner and dancing at Havana's best live music venue ($20-30 cover plus drinks)",
          ],
          cost: "$500-700 (hotel, guide, class, restaurants, club)",
        },
        {
          day: "Day 3",
          title: "Vinales Private Helicopter + Tobacco Estate",
          items: [
            "08:00 — Private helicopter transfer to Vinales ($400-600 for the charter): the 30-minute flight over the Cuban countryside is extraordinary and the bird's-eye view of the mogote landscape is unlike anything else in the Caribbean",
            "10:00 — Private guided visit to a working tobacco estate with a master farmer and Spanish interpreter ($100-150): the full story of Cuban tobacco from seed to finished cigar; a private lunch of traditional Cuban country food cooked on a wood-fire stove is included",
            "14:00 — Horseback ride through the valley with a private guide ($50-80/hour): access areas not reachable by vehicle; the late-afternoon light on the mogotes from horseback is exceptional",
            "17:00 — Return to Havana by private car ($80-100 with driver)",
            "20:30 — Private sunset dinner on the Kempinski rooftop ($80-120/person): the pool terrace with El Capitolio and the Old Havana skyline below; private table with Cuban rum pairing",
          ],
          cost: "$700-1000 (helicopter, estate, horse ride, dinner)",
        },
        {
          day: "Day 4",
          title: "Revolution Tour, Art Collection & Departure",
          items: [
            "09:00 — Private revolution history tour with a Cuban historian ($120-150): Plaza de la Revolucion, the Che Guevara Memorial in Santa Clara context, the Museum of the Revolution; a balanced account of the 1959 revolution and its aftermath that only a Cuban insider can provide",
            "12:00 — Private visit to a Havana art collector or gallerist ($80-100): access to contemporary Cuban art studios and private collections not open to tourists; a chance to purchase authentic work directly from artists",
            "14:00 — Farewell lunch at the hotel ($40-60/person) followed by premium cigar selection at La Casa del Habano with a humidor specialist ($200-500 for a curated box)",
            "17:00 — Private luxury transfer to HAV Airport ($60-80) with full concierge departure assistance",
          ],
          cost: "$500-800 (history tour, art, lunch, cigars, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget",
      accommodation: "$25-45 (casa particular)",
      food: "$15-25 (paladars + street food)",
      transport: "$8-15 (shared taxis + classic car share)",
      activities: "$10-20 (entry fees + salsa class)",
      total: "$60-90/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "$70-120 (boutique casa or hotel)",
      food: "$40-60 (paladars + La Guarida)",
      transport: "$25-40 (private taxi + classic car tour)",
      activities: "$30-50 (guided tours + Finca Vigia)",
      total: "$130-200/day",
    },
    {
      tier: "Luxury",
      accommodation: "$250-500 (Kempinski or Saratoga)",
      food: "$100-160 (fine dining + private lunches)",
      transport: "$80-200 (private car + helicopter)",
      activities: "$150-300 (private guides + experiences)",
      total: "$350-700/day",
    },
    {
      tier: "Ultra-Budget",
      accommodation: "$15-25 (basic casa dorm or shared room)",
      food: "$8-15 (street food + simple paladars)",
      transport: "$5-10 (shared taxis + walking)",
      activities: "$5-10 (self-guided + free areas)",
      total: "$40-60/day",
    },
    {
      tier: "Vinales Add-On",
      accommodation: "$20-30 (Vinales casa)",
      food: "$15-25 (valley paladars)",
      transport: "$15-80 (shared bus to private car)",
      activities: "$20-50 (tobacco farm + horseback)",
      total: "$70-150/day extra",
    },
  ],
  mistakes: [
    {
      icon: "💱",
      title: "Not understanding Cuba's currency situation",
      desc: "Cuba uses the Cuban peso (CUP) for most transactions. Foreign tourists can use CUP and some places accept USD or EUR directly. Many tourist-facing transactions quote in USD but change in CUP. Always confirm currency before paying. Use CADECA official exchange bureaux rather than hotels for better rates. ATMs are unreliable — bring sufficient cash.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📶",
      title: "Expecting reliable internet or mobile data",
      desc: "Cuba has very limited internet access. Wi-Fi works at ETECSA hotspots (buy a card for $1-2/hour) in parks and hotel lobbies. Mobile data requires a Cubacel SIM with NAUTA plan. Download offline maps (Maps.me for Havana), your hotel booking confirmation, and any guides before arriving. Embrace the digital detox — it is part of the experience.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚬",
      title: "Buying cigars from street sellers",
      desc: "Countless Havana street vendors offer Cohiba and Montecristo boxes at half-price. Nearly all are counterfeit, filled with inferior tobacco in branded packaging. Authentic Cuban cigars must be purchased at official La Casa del Habano stores or at certified factory shops. The saving is illusory — fake cigars taste terrible and are not importable as genuine Habanos.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏨",
      title: "Booking state-run hotels over casas particulares",
      desc: "State-run hotels in Cuba are uniformly expensive and mediocre. Casas particulares (private homestays) offer better rooms, better breakfasts, better locations, and a genuine connection with Cuban families at 30-50% of the cost. Your casa host is also your best source of paladar recommendations, neighbourhood knowledge, and practical advice.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🎭",
      title: "Missing the Vinales day trip",
      desc: "Many travellers spend all 4 days in Havana and skip Vinales. This is a significant miss. The Vinales Valley is one of the Caribbean's most beautiful landscapes and the tobacco farming culture there is unique on earth. The 3-hour drive is entirely manageable as a day trip from Havana and costs as little as $15-20 by shared minibus.",
      color: "bg-red-50 border-red-200",
    },
  ],
  tips: [
    {
      icon: "🎶",
      title: "Follow the music, not the tourist shows",
      desc: "The best music in Havana is free and unscripted: a trova singer in a bar doorway, a rumba drumming circle in a Vedado park on Sunday afternoon, or a trumpet player practising on a rooftop. Avoid the packaged tourist shows at larger hotels which are expensive and sanitised. Ask your casa host where locals actually go on Friday and Saturday nights. Book tours at https://www.getyourguide.com/s/?q=Havana+Cuba&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍴",
      title: "Always eat at paladars, never at state restaurants",
      desc: "Cuban state restaurants are almost universally poor value: expensive, slow, and with limited menus. Paladars (private restaurants operating since the 1993 reforms) range from basic to excellent but are always better than the equivalent state option. La Guarida, El Del Frente, and hundreds of less-famous paladars represent the real Cuban food revival.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "💵",
      title: "Bring enough cash for the entire trip",
      desc: "Most international credit and debit cards do not work in Cuba due to the US embargo affecting card networks. US-issued cards are entirely unusable. Bring all cash you need for the trip in USD or EUR and exchange at CADECA. A reasonable budget allowance is $100-150/day mid-range plus a contingency reserve. Do not rely on ATMs.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🚗",
      title: "Negotiate classic car prices in advance and firmly",
      desc: "The 1950s American cars are one of Havana's great joys and a legitimate tourist attraction. Rates start at $30/hour for a shared open-top convertible and $50-60/hour for a private car. Agree on the route and price before getting in, confirm what the price covers (whether tips are expected), and have small USD bills ready. The drivers are generally friendly and knowledgeable.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Can Americans travel to Cuba legally in 2026?",
      a: "Yes, Americans can travel to Cuba under one of 12 authorized travel categories defined by OFAC. Tourism is not one of them, but 'support for the Cuban people' (which includes staying at casas particulares, eating at paladars, and engaging with private business owners) is widely used. Regulations change frequently — check the latest OFAC guidance before booking. Many Americans travel via Mexico (Cancun or Mexico City) to avoid the US ban on direct flights and to avoid the Cuban entry stamp in their passport.",
    },
    {
      q: "What is the best time of year to visit Havana?",
      a: "November to April is the dry season and the best time to visit. Temperatures are comfortable at 22-28 degrees Celsius, humidity is low, and rainfall is minimal. May to October is hurricane season with heavy rain, high humidity, and the risk of storms. The hottest and most humid months are July and August. December to February is peak tourist season with the best weather and the Havana Jazz Festival in January.",
    },
    {
      q: "How do I get around Havana without speaking Spanish?",
      a: "Havana is very manageable without Spanish. Most paladar owners and casa hosts have some English. Key transport phrases: 'cuanto cuesta' (how much), the destination name, and pointing go a long way. Taxis are plentiful — official yellow cabs are metered while the pink and blue classic cars are negotiated. The major Old Havana sights are all walkable from each other within 20 minutes. Download a Havana offline map before arrival.",
    },
    {
      q: "Are Havana cigars and rum good purchases to take home?",
      a: "Yes, both are among the best value luxury purchases in the world when bought from official sources. Authentic Cuban cigars (Cohiba, Montecristo, Bolivar, Partagas) are legally purchasable at La Casa del Habano stores. Havana Club rum is available at supermarkets and hotel shops at a fraction of export prices. US citizens can now bring home $800 worth of Cuban goods duty-free including cigars and rum, but check current OFAC regulations as this may change.",
    },
  ],
  combineWith: ["trinidad-cuba-3-days", "cancun-4-days", "cartagena-4-days"],
  relatedSlugs: ["cartagena-4-days", "mexico-city-4-days", "cancun-4-days", "san-jose-costa-rica-4-days"],
  galleryQuery: "havana cuba old havana colonial architecture malecon classic cars",
};

export const metadata: Metadata = {
  title: "Havana Cuba in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The ultimate 4-day Havana itinerary — Old Havana UNESCO, Malecon, Hemingway's Finca Vigia, Floridita daiquiris, Bodeguita mojitos, Vinales tobacco valley, salsa dancing, and 1950s classic cars. Visa info included.",
  keywords: [
    "Havana Cuba itinerary",
    "Havana 4 days",
    "Havana travel guide 2026",
    "Cuba travel 2026",
    "Old Havana UNESCO",
    "Vinales valley day trip",
    "Hemingway Cuba",
    "Floridita Bodeguita del Medio",
    "Cuba budget travel",
    "Havana visa Indian passport",
  ],
  openGraph: {
    title: "Havana Cuba in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "1950s cars, Old Havana cobblestones, Hemingway bars, Vinales tobacco, and salsa until midnight — Havana in 4 days from $60/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/havana-cuba-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Havana Cuba in 4 Days: Complete 2026 Itinerary",
    description:
      "Old Havana UNESCO, 1950s classics, Hemingway haunts, and Vinales tobacco — the definitive Havana guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/havana-cuba-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Havana Cuba in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Havana Cuba in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/havana-cuba-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Havana, Cuba",
      description:
        "Havana, Cuba — UNESCO Old Havana, the Malecon promenade, 1950s American cars, Hemingway bars, and the world's finest handmade cigars.",
      geo: { "@type": "GeoCoordinates", latitude: 23.1136, longitude: -82.3666 },
    },
  ],
};

export default function HavanaCubaPage() {
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
