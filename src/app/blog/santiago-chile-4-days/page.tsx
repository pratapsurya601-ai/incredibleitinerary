import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Santiago",
  country: "Chile",
  countryFlag: "🇨🇱",
  slug: "santiago-chile-4-days",
  heroQuery: "santiago chile cerro san cristobal andes cityscape",
  heroAlt: "Santiago Chile skyline with the Andes mountains and Cerro San Cristobal in the background",
  category: "South America",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Santiago surprises first-time visitors — a gleaming modern city of 8 million backed by snow-capped Andean peaks, with one of South America's best food and craft beer scenes, a vibrant arts district in Barrio Italia, and Pablo Neruda's extraordinary house-museum. Day-trip to Valparaiso's hillside murals and Concha y Toro winery, climb Cerro San Cristobal on the funicular for the finest panoramic view in South America, then eat empanadas in a neighbourhood that feels like it has never heard of tourists. Santiago is the surprise of the continent.",
  stats: { duration: "4 Days", budgetFrom: "$40", bestMonths: "Oct–Apr (spring/summer)", airport: "SCL" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Cerro San Cristobal" },
    { id: "day2", emoji: "📅", label: "Day 2 — Neruda House & Barrio Italia" },
    { id: "day3", emoji: "📅", label: "Day 3 — Valparaiso Day Trip" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Tourist Visa required"],
        ["Processing", "10–20 business days"],
        ["Fee", "Approx. $40–50 USD"],
        ["Validity", "Up to 90 days stay permitted"],
        ["Apply at", "Embassy of Chile or via VFS Global"],
        ["Documents", "Return flight, hotel bookings, bank statements (3 months), travel insurance"],
        ["Notes", "Apply 6–8 weeks before travel. Invite letter from Chilean contact speeds processing."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free entry"],
        ["Processing", "No visa needed"],
        ["Fee", "Free (US passports previously paid reciprocity fee — now abolished)"],
        ["Stay Allowed", "Up to 90 days on arrival"],
        ["Passport", "Must be valid at least 6 months beyond travel dates"],
        ["Entry Card", "PDI migration card issued on arrival, keep it safe"],
        ["Notes", "No advance registration required. Proof of onward travel and funds recommended."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$40–60/day",
      days: [
        {
          day: "Day 1",
          title: "Cerro San Cristobal & Bellavista Barrio",
          items: [
            "13:00 — Check in to a hostel in Barrio Bellavista or Providencia ($12–18 dorm) — Bellavista is safe, colourful, and walking distance to the Cerro San Cristobal funicular",
            "14:30 — Cerro San Cristobal by funicular — the telecabina return costs $5; the hill rises 300m above Santiago to a 22-metre Virgin Mary statue; the panorama of Santiago backed by Andean peaks is the definitive image of the city",
            "17:00 — Walk down through Bellavista neighbourhood — dozens of street murals, independent bookshops, and hole-in-the-wall empanada stalls; a baked empanada de pino (beef, egg, olive) costs $1.50",
            "19:00 — Craft beer at Barrio Bellavista bars — Santiago has an excellent craft beer scene; Ebrew, Kross, and Guayacan are Chilean craft labels; a pint from $3 at neighbourhood bars",
            "20:30 — Dinner at a Bellavista picanterias — cazuela de vacuno (beef and vegetable stew) or pastel de choclo (corn and meat pie) from $6–8 at neighbourhood restaurants along Av. Bellavista",
          ],
          cost: "$30–40 (funicular, food, craft beer)",
        },
        {
          day: "Day 2",
          title: "La Chascona & Barrio Italia Crafts",
          items: [
            "09:30 — La Chascona museum (Pablo Neruda house) in Barrio Bellavista — entry $12 with audio guide; Neruda designed this eccentric house to resemble a ship; his Nobel Prize and personal art collection are on display",
            "11:30 — Mercado Central fish market hall for lunch — the central nave has expensive tourist restaurants; find the smaller stalls around the perimeter for fresh fish empanadas and caldillo de congrio (Neruda's favourite conger eel soup) from $6–8",
            "14:00 — Barrio Italia by metro (Line 5, Italia station) — the city's most creative neighbourhood; antique furniture shops, record stores, independent cafes, and street art fill a 10-block radius",
            "16:00 — Vintage shopping and craft beer at Barrio Italia brewpubs — Cerveceria Kross taproom on Av. Italia has 8 taps of Chilean craft beer from $3 per glass; the neighbourhood empanada bakeries nearby are excellent",
            "19:30 — Dinner at Liguria restaurant in Providencia ($12–15/pp) — a Santiago institution since 1987; huge portions of Chilean home cooking; order the lomo a la plancha or porotos granados (bean stew)",
          ],
          cost: "$30–40 (La Chascona, metro, market lunch, beer, dinner)",
        },
        {
          day: "Day 3",
          title: "Valparaiso Day Trip — Murals & Hills",
          items: [
            "07:30 — Bus from Pajaritos terminal to Valparaiso ($5 each way, 90 minutes) — Tur-Bus and Pullman Bus run every 30 minutes; buy tickets at the terminal on arrival or on the bus",
            "09:30 — Valparaiso cerros (hills) by ascensor (funicular tram) — each hill has its own personality; Cerro Alegre and Cerro Concepcion have the most famous murals; ascensor rides cost $0.30",
            "12:00 — Lunch at a Cerro Alegre restaurant with Pacific views ($8–12/pp) — the hillside restaurants have dramatically better value than the tourist waterfront; the chupe de mariscos (shellfish chowder) is excellent",
            "14:30 — Street art walking tour of Cerro Bellavista (free, self-guided) — the Open Sky Museum (Museo a Cielo Abierto) has 20 murals by Chile's finest street artists painted directly on staircase walls; download a map at the tourist office",
            "17:00 — Return bus to Santiago ($5); arrive Pajaritos and metro back to hostel",
            "20:00 — Budget dinner near hostel — Santiago supermarkets (Lider, Jumbo) have excellent empanada sections for $1–2 each; or a neighbourhood restaurant set meal for $5",
          ],
          cost: "$25–35 (bus return, lunch, ascensores, dinner)",
        },
        {
          day: "Day 4",
          title: "Concha y Toro & Departure",
          items: [
            "09:00 — Concha y Toro winery tour at Pirque ($20 for basic tour and tasting, book online) — the largest wine producer in Latin America is 45 minutes from Santiago by metro and local bus; the Casillero del Diablo cellar legend tour is entertaining",
            "12:30 — Return to Santiago and lunch at a supermarket or empanada bakery near the bus stop ($3–5)",
            "14:00 — Final walk through Barrio Lastarria and Cerro Santa Lucia — a 69-metre hill park in the city centre, free to enter; the views of the financial district and Andes are excellent",
            "16:00 — Metro to Arturo Merino Benitez Airport (SCL) via Line 2 to Pajaritos then Bus Centropuerto ($5 total); allow 2.5 hours before flight",
          ],
          cost: "$25–35 (winery tour, lunch, transport to airport)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Cerro San Cristobal, Bellavista & Craft Beer Tour",
          items: [
            "13:00 — Check in to a boutique hotel in Barrio Providencia or Lastarria ($80–110/night) — Santiago's most polished neighbourhoods; the Lastarria hotels are a short walk from the Cerro Santa Lucia park and the city's best galleries",
            "15:00 — Cerro San Cristobal funicular and panorama walk ($5) — the white Virgin statue on the summit is illuminated at night; on clear winter days (May–Sep) the snow-capped Andes backdrop is extraordinary",
            "17:30 — Guided craft beer and empanada tour of Barrio Bellavista ($40, 2.5 hours) — visit 3 craft breweries with tastings and 4 empanada varieties including the seafood version rarely seen in tourist spots",
            "20:30 — Dinner at Boragó ($80/pp, reservation 3–4 weeks ahead) — ranked in Latin America's 50 Best; Rodolfo Guzman's hyper-local Chilean tasting menu uses endemic plants, fungi, and coastline ingredients unavailable anywhere else on earth",
          ],
          cost: "$170–200 (hotel, funicular, beer tour, Borago dinner)",
        },
        {
          day: "Day 2",
          title: "Neruda Houses, MAVI & Barrio Italia",
          items: [
            "09:30 — La Chascona museum ($12 with audio guide) — allow 90 minutes for the full tour; Neruda's three Chilean houses are all UNESCO-nominated; La Chascona is the most intimate",
            "11:30 — Museo de Artes Visuales (MAVI) in Lastarria ($5 suggested donation) — the finest contemporary Chilean art collection in the country; photography, video, and painting by artists from post-Pinochet Chile",
            "13:30 — Lunch at Como Agua Para Chocolate in Barrio Italia ($20–25/pp) — the best mid-range restaurant in the barrio; Chilean recipes with a modern touch; the humitas and cazuela de ave are superb",
            "16:00 — Antique and vintage shopping in Barrio Italia — the stretch between Metro Italia and Av. Condell has 40+ antique shops; Chilean silver, mid-century furniture, and vintage posters",
            "19:30 — Sundowner pisco sour at a Bellavista rooftop bar ($8/drink) — Bar El Toro and La Piojera are Santiago drinking institutions; La Piojera invented the terremotor cocktail (pipeño wine, fernet, pineapple ice cream)",
          ],
          cost: "$130–160 (museums, lunch, shopping, dinner)",
        },
        {
          day: "Day 3",
          title: "Valparaiso UNESCO Heritage Day Trip",
          items: [
            "07:30 — Private transfer from hotel to Pajaritos terminal or direct to Valparaiso ($60 one way) or Tur-Bus first class ($8 each way)",
            "09:30 — Valparaiso guided walking tour with a local guide ($35, 3 hours) — covers the UNESCO heritage cerros, the ascensores, and the political history of the port city through its street art",
            "13:00 — Lunch at La Concepcion restaurant on Cerro Concepcion ($20–25/pp) — panoramic Pacific views; the reineta fish with quinoa crust and the ceviche chileno are the highlights",
            "15:30 — Cerro Alegre independent boutique shopping — artisan ceramics, Chilean lapis lazuli jewellery, and hand-printed textiles from resident artists; budget $20–50 for souvenirs",
            "18:00 — Return to Santiago by bus; dinner at hotel restaurant or a Lastarria neighbourhood bistro ($25–30/pp)",
          ],
          cost: "$130–160 (guide, transport, lunch, shopping, dinner)",
        },
        {
          day: "Day 4",
          title: "Concha y Toro Wine Tour & Departure",
          items: [
            "09:00 — Concha y Toro premium tour and tasting ($55, 3 hours, book online) — the Pirque estate tour includes the Casillero del Diablo legend cellar, vertical tastings of Marques de Casa Concha, and a vineyard walk with the Andes as backdrop",
            "13:00 — Return to Santiago by hotel transfer or Uber ($25); late lunch at a Providencia restaurant ($20/pp)",
            "15:30 — Final shopping at the Pueblito Los Dominicos artisan market near Las Condes metro ($free entry) — the best artisan handicraft market in Santiago; lapis lazuli, mapuche textiles, and silver work",
            "17:00 — Transfer to Arturo Merino Benitez Airport ($25 via Uber from Providencia); allow 2.5 hours before international flight",
          ],
          cost: "$120–150 (winery, lunch, shopping, airport transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$400–700/day",
      days: [
        {
          day: "Day 1",
          title: "Singular Santiago Arrival & Private Andes Panorama",
          items: [
            "12:00 — Check in to The Singular Santiago ($350–500/night) in Barrio Lastarria — housed in a converted 1929 industrial building; the rooftop bar overlooks the city and Andes; extraordinary service and Chilean art collection throughout",
            "14:30 — Private helicopter tour over the Andes ($400, 45 minutes) — operated by Helicopter Chile; Santiago to Portillo ski resort and back; the scale of the Andean chain from the air is genuinely overwhelming",
            "18:00 — Private pisco sour masterclass at the hotel bar with Chile's leading mixologist ($150, 2 hours) — history of pisco in the Atacama, tasting 10 premium single-varietal piscos, crafting cocktails including the lesser-known piscola and ponche",
            "21:00 — Dinner at Boragó ($150/pp with pisco pairing, reservation 6–8 weeks ahead) — South America's most creative tasting menu; the full 14-course endemic Chile experience with paired beverages",
          ],
          cost: "$700–950 (hotel, helicopter, masterclass, Borago)",
        },
        {
          day: "Day 2",
          title: "Private Neruda Tour, MAVI & Barrio Italia",
          items: [
            "09:00 — Private guided Neruda experience ($200, 3 hours) — exclusive early morning access to La Chascona before public opening; specialist literary guide covers the poetry and the political exile in context of the murals inside",
            "12:30 — Lunch at Ambrosia Bistrot in Lastarria ($50/pp) — the best Sunday lunch in Santiago; the chef uses only Chilean producers for an elevated criollo menu; the raw scallops from Puerto Montt and the lamb from Patagonia are exceptional",
            "15:00 — Private art advisory tour of Barrio Italia galleries ($120, 2 hours) — contemporary Chilean art with a specialist; visits to three private galleries not on public maps; collection acquisition advice if desired",
            "19:30 — Sundowners at hotel rooftop with Andes views; Chile's best craft spirits — pisco, singani, and Chilean whisky — before dinner at a private club restaurant in Barrio El Golf ($100/pp)",
          ],
          cost: "$550–750 (private Neruda, lunch, art tour, dinner)",
        },
        {
          day: "Day 3",
          title: "Private Valparaiso & Concha y Toro",
          items: [
            "08:00 — Private car to Valparaiso ($80 one way, 90 minutes) — depart early to have the hilltop cerros before the tourist groups arrive",
            "09:30 — Private street art tour of Valparaiso with an art historian ($150, 3 hours) — covers the political context of the murals, visits to studios of working artists, and access to private gallery collections on Cerro Alegre",
            "13:00 — Lunch at Fauna restaurant on Cerro Alegre ($40/pp) — Valparaiso's finest restaurant with Pacific views; the local fish ceviche and the chupe de jaibas (crab chowder) are outstanding",
            "16:00 — Concha y Toro VIP private estate tour ($150, 3 hours) — private access to the premium vineyards, the Don Melchor cellar, and a guided vertical tasting of their Puente Alto Cabernet library vintages",
            "20:00 — Return to Santiago; dinner at hotel restaurant ($80/pp) with Chilean wine pairing",
          ],
          cost: "$600–800 (private car, art tour, restaurant, winery VIP)",
        },
        {
          day: "Day 4",
          title: "Andes Spa Morning & Private Airport Transfer",
          items: [
            "08:00 — Hotel spa morning ($120, 90-minute treatment) — The Singular spa offers Andean-inspired treatments using local ingredients including copihue flower oil and atacamite mineral clay; the rooftop pool overlooks the Andes",
            "11:00 — Farewell Chilean breakfast on the hotel terrace — the full spread of pan amasado, pebre, avocado, and Chilean cheeses with cafe de olla; complimentary with luxury room rate",
            "13:00 — Private shopping tour of Las Condes jewellers for lapis lazuli — Chile has the world's finest lapis lazuli deposits; specialist jewellers on Av. Isidora Goyenechea craft extraordinary pieces ($200–2000+)",
            "16:00 — Private car to Arturo Merino Benitez Airport ($80 via hotel service) with meet-and-greet, luggage handling, and airport lounge access",
          ],
          cost: "$300–500 (spa, shopping, airport transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–18 (hostel dorm Bellavista or Providencia)",
      food: "$15–22 (empanadas + set lunches + markets)",
      transport: "$3–8 (metro + bus)",
      activities: "$10–20 (La Chascona + funicular + ascensores)",
      total: "$40–60/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–110 (boutique hotel Lastarria or Providencia)",
      food: "$40–60 (restaurants + food tours)",
      transport: "$10–25 (Uber + bus to Valparaiso)",
      activities: "$30–55 (guided tours + winery)",
      total: "$120–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–500 (The Singular or similar)",
      food: "$150–250 (Borago tasting menu + fine dining)",
      transport: "$80–400 (private car + helicopter)",
      activities: "$150–350 (private tours + pisco masterclass)",
      total: "$400–700/day",
    },
    {
      tier: "🍷 Wine Day",
      accommodation: "$0 (day trip from Santiago hotel)",
      food: "$20–40 (vineyard restaurant lunch)",
      transport: "$10–80 (bus or private car to Concha y Toro)",
      activities: "$20–150 (winery tour and tasting)",
      total: "$50–270 for wine day",
    },
    {
      tier: "🚌 Valparaiso Day",
      accommodation: "$0 (day trip from Santiago hotel)",
      food: "$12–25 (cerro restaurant lunch)",
      transport: "$10–80 (bus or private car return)",
      activities: "$5–35 (ascensores + guided tour)",
      total: "$27–140 for Valparaiso day",
    },
  ],
  mistakes: [
    {
      icon: "🗓️",
      title: "Visiting Santiago in the grey winter months without planning Andean trips",
      desc: "May to August brings clear Andes views but grey skies over Santiago. The upside is that the Andes are fully snow-covered and ski resorts like Valle Nevado are 90 minutes away. If you see snow-capped peaks on a clear day from Cerro San Cristobal, that is as good as it gets.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🚇",
      title: "Renting a car in Santiago",
      desc: "Santiago has one of the best metro systems in South America — fast, clean, safe, and covers all major attractions. Renting a car adds parking costs ($20/day in Providencia) and traffic headaches. Use metro for the city and bus or Uber for Valparaiso and Concha y Toro.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍷",
      title: "Only visiting Concha y Toro and missing boutique wineries",
      desc: "Concha y Toro is excellent but its Maipo Valley neighbours include Almaviva, Casa Lapostolle, and Santa Carolina — smaller estates with more personal tours. The Casablanca and Aconcagua valleys (90 minutes north) produce Chile's finest whites and are rarely visited by package tourists.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "⏰",
      title: "Arriving in Valparaiso after midday",
      desc: "Valparaiso's ascensores start shutting down by 6pm and the hillside restaurants fill by 1pm. Depart Santiago by 7:30am bus to reach Cerro Alegre and Cerro Concepcion before tour groups arrive. Late arrivals miss the quiet hillside atmosphere that makes Valparaiso magical.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💸",
      title: "Paying tourist prices in the Mercado Central nave",
      desc: "The central nave of Mercado Central charges $25–40 for fish dishes that cost $8–12 at the smaller stalls around the perimeter. Every review warns about this — walk past the aggressive touts in the central area and find the quieter counters near the market exits for honest pricing.",
      color: "bg-red-50 border-red-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Get the Bip! metro card immediately on arrival",
      desc: "Santiago metro cash top-ups let you ride for $0.80 per trip vs. $1.50 with a paper ticket. The Bip card is available at any metro station for $1.50 and covers buses too. The metro runs until midnight and connects the airport to the city. Book day tours at https://www.getyourguide.com/s/?q=Santiago+Chile&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🥑",
      title: "Eat avocado on everything — it is a Chilean obsession",
      desc: "Chile produces some of the world's best avocados and Santiaguinos put them on everything: completos (hot dogs), sandwiches, and even pasta. The chorrillana (fries with beef, onion, and egg) topped with avocado at a Barrio Italia diner is a genuine Santiago experience for $6.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏨",
      title: "Book boutique hotels in Lastarria or Barrio Italia on Booking.com",
      desc: "Lastarria and Barrio Italia boutique hotels have the best combination of location, design, and value in Santiago. Always check Booking.com for free cancellation rates as Santiago has frequent public holiday weekends (Sep 18 national holidays) that fill hotels fast.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "⛷️",
      title: "In winter, add a ski day at Valle Nevado",
      desc: "Between June and September, Valle Nevado ski resort is 60km from Santiago and receives some of South America's deepest powder. Day ski passes cost $70–90 and transfers from Providencia run from $30 per person. A powder day in the Andes with Santiago visible in the valley below is one of the great ski experiences on the continent.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Santiago safe for tourists?",
      a: "Barrio Lastarria, Providencia, Barrio Italia, and Bellavista are all safe for tourists during the day and into the evening. Petty theft (bag snatching, phone theft) has increased since 2022 in crowded areas and on public transport. Keep phones in pockets on the metro, use hotel safes, and do not wear expensive jewellery. The Centro Historico is safe in daylight but avoid it late at night. Santiago is broadly safer than most South American capitals.",
    },
    {
      q: "How do I get to Valparaiso from Santiago?",
      a: "Tur-Bus and Pullman Bus run every 20–30 minutes from Pajaritos terminal (end of metro Line 1) to Valparaiso for $5–8 each way. The journey takes 90 minutes. First-class seats are worth the $3 upgrade for more comfortable reclining seats. Taxis and Ubers from Valparaiso bus station to the cerros cost $3–5.",
    },
    {
      q: "What is the best time to visit Santiago?",
      a: "October to April (spring and summer) brings warm sunny weather (20–30C), long evenings, and the best outdoor dining. Santiago's Lollapalooza and Jazz al Parque festivals happen in spring. May to August is the Andean ski season; ski resorts are spectacular but Santiago itself can be grey and smoggy. September 18 is Chilean National Day and the entire city celebrates with asados and cueca dancing.",
    },
    {
      q: "Can I combine Santiago with Patagonia?",
      a: "Absolutely and it is one of the great South American itineraries. LATAM and Sky Airline fly Santiago to Punta Arenas (4 hours, $80–150) or Puerto Montt for the Chilean Lake District (2 hours, $60–100). A 10-day trip combining 4 days in Santiago, 2 days in the Lake District, and 4 days in Torres del Paine is one of the best adventure travel routes in the world.",
    },
  ],
  combineWith: ["lima-4-days", "mendoza-argentina-4-days", "buenos-aires-4-days"],
  relatedSlugs: ["lima-4-days", "mendoza-argentina-4-days", "buenos-aires-4-days", "bogota-4-days"],
  galleryQuery: "santiago chile valparaiso cerro san cristobal andes",
};

export const metadata: Metadata = {
  title: "Santiago Chile in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Santiago itinerary — Cerro San Cristobal funicular, La Chascona Neruda house, Barrio Italia craft beer, Valparaiso murals, Concha y Toro winery. Budget $40/day to luxury.",
  keywords: [
    "Santiago Chile itinerary",
    "Santiago 4 days",
    "Santiago travel guide 2026",
    "Valparaiso day trip",
    "Cerro San Cristobal",
    "La Chascona Neruda",
    "Concha y Toro winery",
    "Santiago visa Indian passport",
    "Barrio Italia Santiago",
    "Chile travel guide",
  ],
  openGraph: {
    title: "Santiago Chile in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Cerro San Cristobal, La Chascona Neruda house, Barrio Italia craft beer, Valparaiso murals, and Concha y Toro — Santiago in 4 days from $40/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/santiago-chile-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Chile in 4 Days: Complete 2026 Itinerary",
    description: "Andes panoramas, Neruda houses, Valparaiso murals, craft beer, empanadas, and world-class wine — Santiago in 4 days.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/santiago-chile-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Santiago Chile in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
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
          name: "Santiago Chile in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/santiago-chile-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Santiago",
      description:
        "Santiago, Chile — a modern Andean capital with Cerro San Cristobal panoramas, Pablo Neruda's La Chascona house-museum, bohemian Barrio Italia, Valparaiso murals, and world-class Concha y Toro wines.",
      geo: { "@type": "GeoCoordinates", latitude: -33.4489, longitude: -70.6693 },
    },
  ],
};

export default function SantiagoPage() {
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
