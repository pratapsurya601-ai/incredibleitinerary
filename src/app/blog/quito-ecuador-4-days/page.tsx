import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Quito",
  country: "Ecuador",
  countryFlag: "🇪🇨",
  slug: "quito-ecuador-4-days",
  heroQuery: "quito ecuador historic center colonial architecture andes mountains",
  heroAlt: "Quito Ecuador historic UNESCO colonial center with Andes mountains and church spires at sunrise",
  category: "South America",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Quito sits at 2,850 metres in a long Andean valley, the world's highest official capital city, and one of the best-preserved colonial cities on earth. Its UNESCO-listed historic centre — declared the first World Heritage Site in 1978 — packs Baroque churches, cobblestone plazas, and 16th-century convents into 320 hectares of intact colonial architecture. Beyond the city, the Middle of the World monument straddles the actual equator, Cotopaxi volcano looms at 5,897 metres above the tree line, and the TeleferiQo cable car lifts you to 4,100 metres for views across the whole Andes. Four days in Quito is enough to do all of it: colonial history, highland volcano day trip, cable car sunrise, La Ronda colonial street at night, and bowls of ceviche de camaron and locro potato soup in between.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$30",
    bestMonths: "Jun–Sep (dry season)",
    airport: "UIO (Mariscal Sucre)",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Historic Centre & La Ronda" },
    { id: "day2", emoji: "📅", label: "Day 2 — Middle of the World & TeleferiQo" },
    { id: "day3", emoji: "📅", label: "Day 3 — Cotopaxi Day Trip" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free for up to 90 days"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days per calendar year"],
        ["Documents", "Return/onward ticket, proof of funds (min $500 or $50/day)"],
        ["Passport", "Must be valid throughout the stay"],
        ["Notes", "Ecuador uses the US Dollar as its currency, making budgeting straightforward. Indian passport holders are among the nationals who receive visa-free access."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free for up to 90 days"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days per visit"],
        ["Documents", "Return/onward ticket, proof of accommodation"],
        ["Passport", "Must be valid for the duration of stay"],
        ["Notes", "Ecuador is one of the most accessible countries in Latin America. No pre-registration or e-visa required."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$30–45/day",
      days: [
        {
          day: "Day 1",
          title: "Historic Centre UNESCO Walk & La Ronda at Night",
          items: [
            "09:00 — Take the Ecovia BRT bus from Mariscal Sucre new city to the historic centre (Cumanda stop, $0.25) — the most direct public route into the UNESCO zone from the backpacker district",
            "09:30 — Plaza de la Independencia (Plaza Grande): the heart of colonial Quito with the Presidential Palace (free exterior viewing), Metropolitan Cathedral, and Archbishop's Palace surrounding a large central plaza; the palace exterior guard change is worth watching",
            "11:00 — La Compania de Jesus church ($4 entry) — the most ornate Baroque church in the Americas, with an interior entirely covered in gold leaf; allow 45 minutes; no photography inside",
            "12:30 — Lunch at Mercado Central in the historic centre: locro de papa (creamy potato and cheese soup with avocado, $2–3) at a market stall — the most emblematic Quito dish and one of the cheapest good meals in the city",
            "14:30 — Museo de la Ciudad (City Museum, $3) inside a 16th-century hospital building — traces Quito's history from pre-Inca settlements through colonial rule to independence; excellent context before exploring the streets",
            "17:00 — San Francisco Monastery and Convent (free to enter the atrium, $4 for the full monastery tour) — the oldest Spanish colonial building in Quito, built in 1535; the main plaza in front is the largest colonial square in South America",
            "20:00 — La Ronda street at night: the narrow cobblestone alley in the historic centre comes alive after dark with musicians, artisan workshops, and small bars; order craft beer ($2) and canelazo (hot cinnamon-sugar rum drink, $1.50) and listen to Ecuadorian pasillo music",
          ],
          cost: "$25–35 (transport, museums, food, drinks)",
        },
        {
          day: "Day 2",
          title: "Middle of the World & TeleferiQo Cable Car",
          items: [
            "08:00 — Shared bus or taxi to Ciudad Mitad del Mundo (Middle of the World monument, 25km north of Quito, $5–8 by shared taxi) — the monument marks the 0 latitude line where you can stand in both hemispheres simultaneously",
            "09:30 — Middle of the World: the monument ($5 entry) has a museum and you can straddle the equator line; more interesting is the nearby Museo Intinan ($4) where guides demonstrate experiments showing the Coriolis effect and water draining differently on each side of the equator",
            "12:00 — Return to Quito by shared taxi ($5–8); eat lunch near Mariscal Sucre: ceviche de camaron (shrimp ceviche with popcorn and plantain chips, $4–6) at a cevicheria — the coastal Ecuadorian version uses citrus-marinated shrimp served room temperature, distinct from Peruvian ceviche",
            "14:30 — TeleferiQo cable car at the west slope of Pichincha volcano ($9 including cable car up and down) — the gondola climbs from 2,950m to 4,100m in 10 minutes; at the top you are above the cloud line with views over the entire Quito valley and the volcanoes beyond",
            "16:00 — At the TeleferiQo summit: the hiking trail to Cruz Loma ridge (30-minute walk each way) gains another 200m and gives a 360-degree Andean panorama on clear days; bring a jacket as temperatures drop to 5C at the top",
            "18:30 — Return to Quito city; street food dinner near Mariscal: llapingachos (potato patties with peanut sauce and chorizo, $3) from a food cart",
          ],
          cost: "$30–40 (transport, monuments, cable car, food)",
        },
        {
          day: "Day 3",
          title: "Cotopaxi Day Trip",
          items: [
            "06:00 — Depart Quito by shared shuttle to Cotopaxi National Park (2 hours, $20–25 in shared tour van) — Cotopaxi is the world's highest active volcano with a near-perfect snow cone summit at 5,897m",
            "08:30 — Enter Cotopaxi National Park ($5 entry fee): the drive through the paramo (high Andean grassland) at 3,600–4,000m passes wild horses and the otherworldly volcanic landscape; stop at Laguna Limpiopungo (3,800m) to see flamingoes and Andean ducks in the lake",
            "10:00 — Hike to the Refugio Jose Ribas hut at 4,800m (1.5-hour uphill hike from the parking area at 4,600m) — the refugio sits on the snow line below the summit glacier; the altitude makes every step an effort but the views of the summit ice cap and the valley below are extraordinary",
            "12:30 — Packed lunch at the refugio or return to the national park cafeteria near the main entrance ($3–5); the park cafeteria serves quinoa soup and rice plates",
            "16:00 — Return to Quito by shared shuttle; rest and altitude recovery",
            "19:00 — Dinner: seco de pollo (Ecuadorian chicken stew with rice and salad, $5–7) at a traditional restaurant near the hotel",
          ],
          cost: "$35–50 (shuttle, park entry, hike, meals)",
        },
        {
          day: "Day 4",
          title: "Basilica del Voto Nacional & Departure",
          items: [
            "09:00 — Basilica del Voto Nacional (free exterior, $2 tower access) — the largest neo-Gothic basilica in the Americas, built over 100 years from 1892 to the present; climb the towers via ladders (surprisingly vertiginous) for the best rooftop view of the historic centre and the surrounding volcanoes",
            "11:00 — Final walk through the historic centre markets: Mercado Artesanal (craft market) near the Mariscal district for tagua nut carvings, Panama hats (which actually originate in Ecuador), and woven textiles; budget $10–20 for souvenirs",
            "13:00 — Farewell lunch: bandeja (a sampler plate of locro, tamales, llapingachos, and grilled corn, $6–8) at a traditional local restaurant near Alameda park",
            "15:00 — Transfer to Mariscal Sucre Airport (UIO) by taxi ($25–30) or airport bus via the Ecovia and feeder routes ($2); airport is 45 minutes from the historic centre",
          ],
          cost: "$40–55 (basilica, souvenirs, lunch, airport transfer)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$80–130/day",
      days: [
        {
          day: "Day 1",
          title: "Guided Historic Centre Tour & Colonial Dinner",
          items: [
            "09:00 — Check into a boutique colonial hotel in the historic centre (Hotel Casa Gangotena, Plaza Foch area, or similar, $80–130/night) — staying in the historic centre puts you 2 minutes' walk from every major sight and the atmosphere at night is exceptional",
            "10:00 — Guided walking tour of the historic centre with a certified English-speaking guide (2.5 hours, $25–35/person) — covers La Compania, San Francisco, the Government Palace, and the hidden courtyards of the colonial convents that independent visitors never find",
            "13:00 — Lunch at Theatrum restaurant inside the Teatro Sucre (National Theatre): Ecuadorian haute cuisine with a colonial backdrop ($20–30/pp) — the seco de guanta (highland rabbit stew) and corn-based dishes are the standout options",
            "16:00 — Monastery of San Francisco rooftop tour ($8) for afternoon light views over the red-tiled rooftops of the historic centre toward Pichincha volcano",
            "20:00 — La Ronda colonial street dinner at La Ronda restaurant: full Ecuadorian set dinner with canelazo welcome drink, hornado (slow-roasted pork), mote (white corn), and dessert ($25/pp) plus live folk music",
          ],
          cost: "$100–130 (hotel, guided tour, colonial dinner)",
        },
        {
          day: "Day 2",
          title: "Equator Monument & TeleferiQo Sunset",
          items: [
            "09:00 — Private taxi to Ciudad Mitad del Mundo and Museo Intinan ($20–25 round trip) — a private taxi driver can wait while you explore both sites and bring you back on your own schedule; both sites take 2.5 hours total",
            "12:30 — Lunch at a seafood restaurant in the Mariscal district: ceviche de camaron with chifles (plantain chips) and patacones ($12–15) plus a Club beer",
            "14:30 — TeleferiQo cable car ($9); at the top take the 30-minute hike to Cruz Loma and hire a local guide ($10) who explains the Andean ecology, the cloud forest below, and identifies the seven volcanoes visible on a clear day",
            "18:00 — Watch the sunset from the TeleferiQo summit — the sky over the valley turns deep orange and the city lights begin to appear below; one of the most spectacular views in South America",
            "20:30 — Dinner at Zazu restaurant ($30–40/pp): modern Ecuadorian tasting menu with Amazonian and coastal ingredients — the tiradito of palmito (heart of palm ceviche) and Andean trout are excellent",
          ],
          cost: "$90–120 (transport, museums, cable car, dinner)",
        },
        {
          day: "Day 3",
          title: "Cotopaxi Guided Tour & Cloud Forest Return",
          items: [
            "06:00 — Depart on a private guided Cotopaxi day tour ($50–80/person including transport, guide, snacks, and park entry) — private operators include a naturalist guide who explains the paramo ecosystem and volcano geology",
            "09:00 — Laguna Limpiopungo birdwatching stop: the guide identifies Andean condors (occasionally), flamingoes, carunculated caracara, and the Andean lapwing; bring binoculars",
            "11:00 — Hike to Refugio Jose Ribas (4,800m) with the guide; many guides offer acclimatisation tips and the option to continue slightly higher toward the glacier for more experienced hikers",
            "14:00 — Lunch at a hacienda near the park entrance: traditional sopa de quinoa and grilled trout ($15–20/pp) in a historic highland ranch",
            "17:00 — Optional stop at Cotopaxi Agri-Tourism: visit a working flower farm (Ecuador is the world's third-largest rose exporter) and buy a bunch of fresh roses for $3",
            "20:00 — Return Quito; dinner near hotel: locro de papa and a glass of Ecuadorian craft beer from Bandido Brewing ($20–25 total)",
          ],
          cost: "$80–120 (private tour, hacienda lunch, dinner)",
        },
        {
          day: "Day 4",
          title: "Basilica Views, Artisan Market & Departure",
          items: [
            "09:00 — Basilica del Voto Nacional tower climb ($2) with a coffee from a nearby colonial cafe; the morning light on the Andean peaks is clearest before 10am",
            "11:00 — Artisan market and craft shopping in the Mariscal district; mid-range souvenirs include genuine Montecristi Panama hats ($30–80), tagua nut animal carvings ($5–15), and ikat woven textiles ($20–40)",
            "13:00 — Farewell lunch at Urko restaurant ($25–35/pp): farm-to-table Andean cuisine with ingredients from the Pichincha countryside and a rotating seasonal menu",
            "15:00 — Private taxi to Mariscal Sucre Airport ($25–30); allow 1.5 hours from the historic centre in afternoon traffic",
          ],
          cost: "$70–100 (basilica, shopping, lunch, airport taxi)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$300–600/day",
      days: [
        {
          day: "Day 1",
          title: "Casa Gangotena, Private Colonial Tour & Tasting Menu",
          items: [
            "Check into Casa Gangotena (the finest colonial boutique hotel in Quito's historic centre, $300–500/night) — a restored 1920s mansion on Plaza San Francisco with 31 rooms, each with views of colonial spires or the inner courtyard",
            "11:00 — Private exclusive guided historic centre tour with a senior heritage guide from Quito's municipal cultural office ($80–120 for 3 hours) — access to areas of La Compania church not open to general visitors, private viewing of the cathedral treasury, and rooftop access at the San Francisco monastery",
            "15:00 — La Compania church exclusive late afternoon visit (arrange through hotel, $30–50 extra) — with fewer than 10 other visitors in the gold-leaf interior, the effect is genuinely breathtaking",
            "20:00 — Dinner at Nuema restaurant ($60–80/pp) — Ecuador's most innovative kitchen, led by Andres Gomez, with a tasting menu that reinterprets pre-Columbian Andean ingredients: cushuro (waterbloom algae from mountain lakes), mashua tubers, and Amazonian chocolate",
          ],
          cost: "$450–650 (hotel, private tour, tasting menu)",
        },
        {
          day: "Day 2",
          title: "Private Equator Experience & TeleferiQo Sunrise",
          items: [
            "05:30 — Private car to TeleferiQo for the first gondola of the day (cable car opens 6am, $9); at 4,100m at sunrise the horizon glows gold over the entire Andes chain with no other tourists present",
            "08:00 — Private naturalist guide at TeleferiQo summit for 2 hours ($60): condor identification, Andean ecology lecture, and the option to extend the hike toward the Cruz Loma summit cone (4,600m) for committed hikers",
            "11:00 — Private car to Ciudad Mitad del Mundo with a private archaeoastronomy guide ($80) who explains how indigenous Quitu-Cara people used the equator for solar ceremony and agricultural calendars — a perspective tourist groups never get",
            "14:00 — Ceviche de camaron lunch at a top-rated Marisqueria in the Cumbaya Valley east of Quito ($20–30/pp): the prawn ceviche with tigre juice (the leftover marinade), chifles, and cold beer",
            "20:00 — In-suite dinner prepared by Casa Gangotena private chef: Ecuadorian ingredients tasting (queso de hoja cheese, chocolate fondue with Amazonian cacao, highland lamb with mortiño berry sauce) served in the private courtyard ($150–200 for two)",
          ],
          cost: "$350–500 (private guide, transport, chef dinner)",
        },
        {
          day: "Day 3",
          title: "Cotopaxi Private Expedition & Hacienda Overnight",
          items: [
            "06:00 — Private vehicle to Cotopaxi with a UIAGM-certified mountain guide ($150–200/person) — the guide is qualified to take fit and acclimatised clients above the refugio onto the lower glacier for a non-summit mountaineering experience",
            "10:00 — Full private laguna and refugio experience with the guide; at the Refugio Jose Ribas (4,800m) the guide assesses conditions for an optional glacier walk on crampons ($30 crampon hire) to 5,000m elevation",
            "14:00 — Transfer to Hacienda San Agustin de Callo (inside Cotopaxi National Park): the only luxury lodge built on Inca ruins in the Americas; check in for the night ($250–400/night) — dinner of highland trout and corn tamales prepared by the hacienda kitchen",
            "20:00 — Stargazing from the hacienda grounds: at 3,500m with no light pollution, the Milky Way and Southern Cross are extraordinary; the hacienda provides telescopes and a guide for $30",
          ],
          cost: "$500–800 (private guide, glacier, hacienda, dinner, stargazing)",
        },
        {
          day: "Day 4",
          title: "Hacienda Breakfast, Quito Return & Departure",
          items: [
            "07:00 — Hacienda breakfast in the Inca stone dining room: homemade bread, fresh highland cheese, Ecuadorian coffee, and tropical fruit from the lowland farms",
            "09:00 — Return to Quito by private vehicle; stop at a working Otavalo-style artisan cooperative on the route for curated textile and jewellery shopping",
            "12:00 — Farewell lunch at Zazu or Urko ($40–60/pp); then private transfer to Mariscal Sucre Airport with the hotel concierge arranging check-in and luggage handling",
          ],
          cost: "$300–450 (hacienda breakfast, shopping, lunch, airport transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$10–20 (hostel or budget guesthouse)",
      food: "$8–15 (market meals + street food)",
      transport: "$3–8 (Ecovia bus + shared taxis)",
      activities: "$10–15 (museums + cable car + park entry)",
      total: "$31–58/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–130 (boutique colonial hotel)",
      food: "$30–55 (restaurants + guided lunch)",
      transport: "$20–35 (private taxi + private tours)",
      activities: "$30–60 (guided tours + Cotopaxi day trip)",
      total: "$160–280/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–500 (Casa Gangotena or Hacienda San Agustin)",
      food: "$80–200 (tasting menus + private chef)",
      transport: "$80–150 (private vehicle + mountain guide)",
      activities: "$150–300 (private tours + glacier + stargazing)",
      total: "$610–1,150/day",
    },
  ],
  mistakes: [
    {
      icon: "🏔️",
      title: "Ignoring altitude sickness on arrival",
      desc: "Quito sits at 2,850m and Cotopaxi National Park reaches 4,800m. Many visitors arrive from sea level and immediately feel headaches, nausea, and fatigue. Spend your first 24 hours in Quito resting, drinking coca tea (freely available at hotels), avoiding alcohol, and eating lightly. Do not attempt the Cotopaxi hike on Day 1 or 2.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌤️",
      title: "Booking Cotopaxi on a cloudy day",
      desc: "Cotopaxi is frequently shrouded in cloud from afternoon onward. The clearest views are in the morning between 7am and 11am, particularly from June to September. Check the weather forecast for Cotopaxi specifically (not just Quito) the night before and depart by 6am to maximise clear-sky time at the volcano.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💳",
      title: "Expecting cards to be accepted everywhere",
      desc: "Ecuador uses US dollars but smaller restaurants, market vendors, street food stalls, and some museums only accept cash. The ATMs in Quito are reliable but charge $3–5 per transaction. Withdraw $100–200 on arrival at the airport ATM and keep small bills (the $1 coin is widely used).",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌃",
      title: "Walking alone in the historic centre after 10pm",
      desc: "Quito has improved safety significantly but the historic centre after 10pm has isolated streets and opportunistic theft happens. La Ronda is safe until about 11pm as it stays busy, but side streets should be avoided late at night. Use licensed radio taxis or the Cabify app for all late-night journeys.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Not visiting both the old and new city",
      desc: "Many visitors stay only in the Mariscal Sucre new city area or only the historic centre and miss the contrast. The Mariscal district (known as Gringolandia) has the best international restaurants and nightlife. The historic centre has the architecture and culture. They are 3km apart and connected by the Ecovia bus for $0.25.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🍋",
      title: "Order ceviche de camaron, not fish ceviche",
      desc: "Ecuadorian ceviche is different from Peruvian — the shrimp version (ceviche de camaron) is the national standard and served with toasted corn, popcorn, and plantain chips. It is a room-temperature dish, not cold, because the citrus marinade cooks the shrimp without refrigeration. Every coastal restaurant in Quito has it for $4–8. Book tours in advance at https://www.getyourguide.com/s/?q=Quito+Ecuador&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌋",
      title: "Take the TeleferiQo at 6am for zero crowds",
      desc: "The TeleferiQo cable car opens at 6am on weekdays and the first two hours have almost no tourists. At 4,100m at sunrise with clear skies, you can see the Andes chain from Cayambe in the north to Cotopaxi and Chimborazo in the south — a 200km panorama. By 10am queues form and cloud often covers the summit.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎭",
      title: "Walk La Ronda on a Friday or Saturday night",
      desc: "La Ronda (Calle Juan de Dios Morales) is at its best on Friday and Saturday evenings when musicians set up in doorways, artisan workshops open their doors, and locals crowd the bars. The street is only 200m long but every doorway has something different. Canelazo hot drinks ($1.50) and Pilsener beer ($1.50) are the standard orders.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎩",
      title: "Buy a Panama hat directly from a cooperative, not a tourist shop",
      desc: "Panama hats (sombrero de paja toquilla) originate in Ecuador, not Panama. A genuine hand-woven Montecristi hat takes 3–6 months to make and costs $30–100 from a cooperative versus $150+ in tourist shops. The Otavalo artisan market and the craft shops behind La Compania church are the best places to buy authentic pieces at fair prices.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Quito safe for tourists in 2026?",
      a: "Quito has undergone significant security improvements since 2023 under new government security measures. The historic centre, Mariscal district, and Cumbaya Valley are considered safe for tourists during daylight hours and evenings on busy streets. Standard urban precautions apply: use registered taxis or Cabify/InDriver apps, do not display expensive electronics, and avoid isolated streets after dark. The tourist police (policia turistica) have a visible presence in the historic centre.",
    },
    {
      q: "When is the best time to visit Quito?",
      a: "June to September is the dry season with clear Andean skies and the best visibility for Cotopaxi and volcano views. October to May brings more rain (Quito has two rainy seasons) but the city stays green and the historic centre is beautiful in mist. The TeleferiQo and Cotopaxi day trips are most reliable June to September. Quito is at the equator so temperatures are stable year-round: 12C to 22C in the city.",
    },
    {
      q: "How do I get from Quito airport to the city centre?",
      a: "Mariscal Sucre International Airport (UIO) is 45km east of the city. The Aeroservicios bus connects the airport to La Ofelia station in northern Quito ($8, 1 hour) then you take the Metrobus south. A licensed yellow airport taxi costs $25–30 to the historic centre or Mariscal district and takes 45–60 minutes depending on traffic. Uber and InDriver apps work at the airport and are often cheaper than taxis.",
    },
    {
      q: "What is locro and where can I eat it in Quito?",
      a: "Locro de papa is Ecuador's signature highland soup: a thick, creamy potato and fresh cheese soup served with avocado and tostado corn. It has been eaten in the Andes for centuries and is the ultimate comfort food at altitude. The best locro in Quito is at the Mercado Central in the historic centre ($2–3 per bowl at market stalls) and at traditional restaurants like La Choza and El Carache in the Mariscal district ($6–10 for a restaurant version with all the trimmings).",
    },
  ],
  combineWith: ["galapagos-5-days", "medellin-3-days", "lima-3-days"],
  relatedSlugs: ["galapagos-5-days", "bogota-3-days", "lima-3-days", "cartagena-4-days"],
  galleryQuery: "quito ecuador colonial historic center andes volcano",
};

export const metadata: Metadata = {
  title: "Quito Ecuador in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Quito itinerary — UNESCO Historic Centre, Middle of the World monument, Cotopaxi volcano, TeleferiQo cable car, La Ronda colonial street, and ceviche de camaron. Budget $30/day to luxury haciendas. All visa info included.",
  keywords: [
    "Quito Ecuador itinerary",
    "Quito 4 days",
    "Quito travel guide 2026",
    "Cotopaxi day trip Quito",
    "Middle of the World Ecuador",
    "Quito UNESCO historic centre",
    "Quito budget travel",
    "Ecuador visa Indian passport",
  ],
  openGraph: {
    title: "Quito Ecuador in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "UNESCO colonial centre, Cotopaxi volcano, TeleferiQo cable car, and La Ronda at night — Quito in 4 days from $30/day to luxury Inca haciendas.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/quito-ecuador-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quito Ecuador in 4 Days: Complete 2026 Itinerary",
    description:
      "UNESCO colonial churches, Cotopaxi volcano hike, equator monument, and the best ceviche in South America. Complete budget to luxury guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/quito-ecuador-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Quito Ecuador in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Quito Ecuador in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/quito-ecuador-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Quito",
      description:
        "Quito, Ecuador — the world's highest capital city at 2,850m, with a UNESCO-listed colonial historic centre, Cotopaxi volcano, the Middle of the World equator monument, and the TeleferiQo cable car.",
      geo: { "@type": "GeoCoordinates", latitude: -0.2295, longitude: -78.5243 },
    },
  ],
};

export default function QuitoPage() {
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
