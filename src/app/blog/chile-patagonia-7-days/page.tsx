import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Patagonia",
  country: "Chile",
  countryFlag: "🇨🇱",
  slug: "chile-patagonia-7-days",
  heroQuery: "patagonia torres del paine chile mountains glacier lake",
  heroAlt: "Torres del Paine granite towers reflected in Lago Nordenskjöld, Chilean Patagonia",
  category: "South America",
  date: "April 5, 2026",
  readTime: "18 min read",
  intro: "Patagonia is one of the last genuinely wild places on earth — a vast, windswept region at the bottom of South America where granite towers pierce the sky, blue-ice glaciers calve into turquoise lakes, and the weather changes every twenty minutes as a local saying warns. Seven days gives you Santiago's energy, Punta Arenas's penguin colony, Puerto Natales's frontier charm, and four days on the W Trek through Torres del Paine — the most iconic multi-day hike in the Americas.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$70",
    bestMonths: "Nov–Mar (Southern Hemisphere summer)",
    airport: "PUQ (Punta Arenas) or SCL (Santiago)",
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
        ["Visa on Arrival", "Indian passport holders can enter Chile visa-free for up to 30 days as tourists. No prior application required — simply show your passport, return ticket, and proof of funds at the border or on arrival at SCL or PUQ airports. Always verify the current policy before travel as regulations can change."],
        ["What to Carry", "Valid passport (minimum 6 months validity beyond your stay), return or onward ticket, proof of accommodation (hotel bookings or trekking reservations), and sufficient funds — roughly $50–100/day is generally expected. A credit card satisfies this requirement."],
        ["Park Entry Documents", "Torres del Paine National Park requires your passport and a signed declaration form at entry. CONAF (Chile's national park authority) charges $18 USD/day for non-residents. Keep your park ticket throughout the trek as rangers check it at refugios and trail junctions."],
        ["Currency & Health", "No yellow fever vaccination required for Chile. Bring Chilean pesos (CLP) for small vendors; $1 ≈ 920 CLP in 2026. Most Punta Arenas and Puerto Natales businesses accept Visa/Mastercard."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Entry", "USA, UK, Canada, Australia, EU, and most Western passport holders enter Chile visa-free for up to 90 days. No ESTA equivalent required. Arrivals at SCL or PUQ simply show their passport — the process is fast and straightforward."],
        ["Reciprocity Fee Abolished", "Chile abolished its controversial reciprocity fees for US, Canadian, and Australian citizens in 2014. There is no fee to pay on arrival regardless of your passport nationality."],
        ["Argentina & Bolivia Crossings", "The O Circuit (the longer 9-day Patagonia loop) crosses briefly into Argentina. Ensure your passport is valid for Argentine entry as well if you plan to do the full circuit. Most nationalities have visa-free access to Argentina too."],
        ["Travel Insurance", "Chile has excellent private hospitals in Santiago and Punta Arenas, but public health care is not available to tourists. Comprehensive travel insurance with emergency evacuation coverage is strongly recommended — helicopter rescues from Torres del Paine cost $5,000–15,000 without insurance."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$70–120/day",
      days: [
        {
          day: "Day 1",
          title: "Santiago — Cerro San Cristóbal & Barrio Italia",
          items: [
            "Arrive Santiago. Check into a hostel in Barrio Italia or Providencia ($15–25/night in a dorm, $40–60 private). The city is expensive by South American standards but hostels are good value.",
            "Afternoon — Take the funicular up Cerro San Cristóbal (CLP 3,500, ~$3.80 return). The panoramic view over Santiago with the Andes behind is one of the great city vistas in South America. On a clear winter day you can see 6,000m peaks from the top.",
            "Evening — Walk Barrio Italia's streets: independent boutiques, tile-fronted cafés, street art murals. Buy empanadas de pino (beef, olive, egg, CLP 1,200–2,000 each) from a corner bakery — this is Chile's foundational street food.",
            "Dinner — Try a local picada (small family restaurant) for pastel de choclo (corn pie with beef and chicken, CLP 4,500) or cazuela (hearty broth, CLP 3,500). Skip the tourist-facing restaurants near the Plaza de Armas.",
            "Budget note — If time allows, consider an afternoon taxi or bus west to the Casablanca Valley for wine tasting (1h drive, CLP 8,000–15,000 per tasting). Chile's best whites — Sauvignon Blanc and Chardonnay — come from this cool coastal valley.",
          ],
          cost: "$35–55 total",
        },
        {
          day: "Day 2–3",
          title: "Punta Arenas — Penguin Colony & Transfer to Puerto Natales",
          items: [
            "Day 2 morning — Fly from Santiago (SCL) to Punta Arenas (PUQ). Flight is 2.5 hours; budget airlines LATAM and Sky Airline charge $60–120 depending on booking lead time. Book at least 3 weeks ahead for the best prices.",
            "Punta Arenas afternoon — Explore the Plaza Muñoz Gamero with its famous lion fountain and the Cemetery of Punta Arenas (genuinely one of the most beautiful cemeteries in the world — cypress-lined avenues and elaborate mausoleums from the wool-baron era). Free entry.",
            "Penguin colony day trip — Take the 1-hour boat trip to Isla Magdalena ($25 including boat). Between October and March, roughly 120,000 Magellanic penguins nest here. You walk among them on marked paths; they're completely unafraid of humans. This is one of the most underrated wildlife experiences in South America.",
            "Day 3 morning — Board the bus to Puerto Natales (3 hours, $12 with Buses Fernandez or Bus Sur). The Patagonian steppe unrolls beside the road — enormous sky, pampas grass, guanacos grazing. Stop at the Milodon Cave site ($10) if the schedule allows — the giant ground sloth that gave it its name went extinct 10,000 years ago.",
            "Puerto Natales afternoon — Small frontier town that serves as the gateway to Torres del Paine. Rent any missing trekking gear here (poles, gaiters, sleeping bag liners — all available). Buy 4 days of trail food at the supermarket (oats, pasta, nuts, chocolate, freeze-dried meals, CLP 15,000–25,000 total). Confirm your refugio or camping reservations.",
          ],
          cost: "$80–120 total (both days, incl. flight)",
        },
        {
          day: "Day 4",
          title: "W Trek — Base Torres (The Iconic Start)",
          items: [
            "Board the morning bus from Puerto Natales to Torres del Paine National Park (2.5 hours, $20 with Bus Gomez or Crux del Sur). Pay park entry: $18/day (approximately CLP 16,500).",
            "Start hiking from Laguna Amarga ranger station or Administración depending on your W Trek direction. Most trekkers do the W west-to-east, starting at Refugio Paine Grande and finishing at Base Torres. We recommend east-to-west: start at Base Torres so the hardest, most dramatic day is first when legs are fresh.",
            "The Base Torres hike is 18km round-trip with 800m elevation gain. The final 45 minutes climb a steep boulder field to the mirador. At the top: three 2,800m granite towers framing a turquoise glacial lake. One of the genuinely great views on earth.",
            "Camp at Camping Torres ($10/night) or stay at Refugio Las Torres ($50–80 for a dormitory bunk). Book both at fantasticosur.com — they open for the following December season in August. By October, December slots are sold out.",
            "Weather warning: the Patagonian wind can reach 100+ km/h at the mirador. The granite towers are often cloud-covered by afternoon. For the classic orange-light photograph, start hiking at 4am with a headtorch to reach the top at sunrise.",
          ],
          cost: "$45–75 total",
        },
        {
          day: "Day 5",
          title: "W Trek — Los Cuernos & Valle del Francés",
          items: [
            "Hike from Refugio Las Torres west along Lago Nordenskjöld to Refugio Los Cuernos (11km, 3–4 hours). The trail follows the lake shore with constant views of Los Cuernos (The Horns) — the jagged twin peaks that define Patagonia's skyline.",
            "Drop your pack at Refugio Los Cuernos and do the Valle del Francés side trip (14km round-trip, 4–5 hours). This is the most dramatic valley in the park: glaciers hang off the walls, ice chunks randomly calve and thunder into the valley below, condors circle overhead.",
            "The optional add-on to Mirador Británico adds 2 hours each way and 300m more elevation — but the panoramic view from the top takes in all of Torres del Paine simultaneously. Many trekkers skip it. Do not skip it.",
            "Return to Refugio Los Cuernos for the night. The refugio serves dinner (set menu, CLP 18,000) or cook your own trail food at the camp kitchen. The wind at this section of the W is notorious — gusts routinely knock trekkers sideways on open sections.",
          ],
          cost: "$40–70 total",
        },
        {
          day: "Day 6",
          title: "W Trek — Paine Grande & Glaciar Grey",
          items: [
            "Long hike day: Los Cuernos to Refugio Paine Grande (12km, 4 hours) through open steppe and around Lago Skottsberg. Weather here is the most exposed on the W — wind tunnel conditions are common. Trekking poles are essential.",
            "Drop packs at Paine Grande and hike the Glaciar Grey trail (8km one-way, 3 hours). The trail climbs through lenga beech forest then suddenly the glacier appears: 6km wide, 30m-high blue ice walls calving into the grey lake. Icebergs drift in the turquoise water. The colour of glacial ice — deep sapphire blue — is something no photograph fully captures.",
            "Grey early morning offers the best lighting and most stable weather. If you started the day section by 6am, you can reach the glacier viewpoint before 10am when the wind typically picks up.",
            "Return to Refugio Paine Grande for the night. Boat transfer option from Grey glacier back to Paine Grande (Grey II catamaran, $50) saves 3 hours of hiking. Worth it on tired legs, but book in advance through Lago Grey tourism.",
          ],
          cost: "$45–80 total",
        },
        {
          day: "Day 7",
          title: "Return to Puerto Natales & Santiago",
          items: [
            "Morning — Catamaran from Refugio Paine Grande across Lago Pehoé to the park bus stop ($30, 30 minutes, stunning scenery — the alternative is 3 hours hiking). Catch the connecting bus back to Puerto Natales.",
            "Puerto Natales afternoon — Shower, eat a proper hot meal, celebrate with a pisco sour (Chile's national cocktail: pisco brandy, lemon, sugar, egg white, bitters). A good pisco sour in Puerto Natales costs CLP 4,000–6,000.",
            "Evening bus or next-morning flight options back to Santiago. The overnight bus from Puerto Natales to Santiago is 24+ hours ($30–45 with Cruz del Sur) — only viable if you have an extra day. Otherwise fly PUQ-SCL ($60–100, 2.5 hours).",
            "Santiago farewell dinner — Mercado Central seafood market for caldillo de congrio (eel soup, Pablo Neruda wrote an ode to it), machas a la parmesana (razor clams, CLP 8,000), or a fresh centolla (king crab from Punta Arenas waters, CLP 15,000–25,000 a whole crab).",
          ],
          cost: "$60–90 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$200–400/day",
      days: [
        {
          day: "Day 1",
          title: "Santiago — Wine Country & City Food Tour",
          items: [
            "Check into a boutique hotel in Lastarria or Barrio Italia ($80–150/night). Santiago's boutique scene is excellent — many converted mansions with patios and good breakfast included.",
            "Morning — Casablanca Valley wine tour with a driver ($80–120/person). Visit 2–3 wineries (Viña Emiliana for organic/biodynamic, Viña Casas del Bosque for excellent Sauvignon Blanc). Tastings, barrel room tours, vineyard walks.",
            "Afternoon — Return to Santiago. Cerro San Cristóbal by funicular (CLP 3,500), then walk down through the Barrio Bellavista bohemian neighbourhood. La Chascona — Pablo Neruda's whimsical house-museum ($7, essential) is here.",
            "Evening — Dinner in Barrio Italia at Ambrosia Bistro or Liguria ($25–40/person) for elevated Chilean cuisine — pastel de choclo, centolla salad, pisco cocktails.",
          ],
          cost: "$150–220 total",
        },
        {
          day: "Day 2–3",
          title: "Punta Arenas Wildlife & Puerto Natales",
          items: [
            "Fly SCL-PUQ in comfort (book LATAM business class for the short flight, $80–140 in premium economy). Hotel in Punta Arenas: Hotel Dreams del Estrecho or Hotel José Nogueira ($100–180/night, the Nogueira is a beautifully restored 1890s mansion).",
            "Penguin colony boat trip ($25) — same experience as budget but arrive at the dock early and book a guide-led boat for more natural history context.",
            "Afternoon — Regional Museum of Magallanes (free) in a stunning century-old colonial building. Dinner at Sotito's Bar (Calle O'Higgins) for king crab, centolla crab, and local lamb — CLP 25,000–35,000/person.",
            "Day 3: Bus to Puerto Natales in comfort with Buses Fernandez or transfer by private van ($40, door-to-door). Hotel Last Hope or Indigo Patagonia in Puerto Natales ($100–180/night). Gear briefing and final pre-trek preparation. Dinner at Afrigonia restaurant (fusion cuisine, notable for a tiny town, $25–35/person).",
          ],
          cost: "$200–300 total (both days)",
        },
        {
          day: "Day 4–6",
          title: "W Trek with Refugio Comfort",
          items: [
            "All three trekking days at full-service refugios (Fantastico Sur and Vertice Patagonia networks). Dormitory bunks $50–80/night including dinner and breakfast — the hot meals after a day of trekking are worth every peso.",
            "Day 4: Base Torres sunrise attempt (4am start with headtorch). Full-service refugio Torres for the night. Hot shower, three-course dinner, wine.",
            "Day 5: Valle del Francés with Mirador Británico. Refugio Los Cuernos with lake views. The refugio's common room overlooks Lago Nordenskjöld.",
            "Day 6: Paine Grande to Glaciar Grey. Grey II catamaran back to Paine Grande ($50). Refugio Paine Grande for the final night on the trail.",
            "Booking: fantasticosur.com (Torres, Chileno, Los Cuernos) and vertice.cl (Paine Grande, Grey) — book separately from each operator. Reservations open in August for the following December–March season.",
          ],
          cost: "$150–250 total (per trekking day, all-in)",
        },
        {
          day: "Day 7",
          title: "Return & Santiago Farewell",
          items: [
            "Catamaran across Lago Pehoé ($30) + comfortable bus transfer back to Puerto Natales. Check into Indigo Patagonia for a recovery night before flying home.",
            "Spa and massage at Hotel Indigo ($60–80 for 60 minutes) — the combination of a massage after 4 days of trekking is exceptional.",
            "Return flight PUQ-SCL. Santiago dinner at Bocanáriz (Barrio Italia) — the best natural wine bar in Chile, 300+ labels, $30–50/person for wine and tapas.",
            "Mercado Central for the full centolla crab experience if you haven't had it — best king crab in Chile comes from the Magallanes waters around Punta Arenas.",
          ],
          cost: "$180–280 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$700–2000+/day",
      days: [
        {
          day: "Day 1",
          title: "Santiago — Private Wine Country & Fine Dining",
          items: [
            "Mandarin Oriental Santiago or The Singular Santiago ($350–600/night). Private transfer from airport in luxury SUV.",
            "Private half-day Casablanca Valley wine tour with sommelier guide ($200–300/person). Exclusive winery access at Viña Quintay or Viña Mar, private cellar tastings unavailable on standard tours.",
            "Lunch at Boragó ($100–150/person tasting menu) — one of Latin America's 50 best restaurants, showcasing endemic Chilean ingredients foraged from Patagonia and the Atacama.",
            "Afternoon: Cerro San Cristóbal private walking tour with historian guide ($80–120). Evening: Dinner at Ambrosía or Europeo for modern Chilean fine dining ($60–100/person).",
          ],
          cost: "$500–900 total (excl. hotel)",
        },
        {
          day: "Day 2–3",
          title: "Luxury Punta Arenas & Private Wildlife",
          items: [
            "Private charter or business class to Punta Arenas. Hotel Cape Horn or Hotel Dreams del Estrecho ($200–350/night).",
            "Private penguin colony excursion with naturalist guide — smaller boat, more access, detailed natural history narration ($80–150/person vs. $25 for group trip). Helicopter scenic flight over the Strait of Magellan available ($300–500/person, 45 minutes).",
            "Dinner: El Mercado restaurant in Punta Arenas for king crab millefeuille and Patagonian lamb — $60–90/person.",
            "Private van transfer to Puerto Natales. Awasi Patagonia or Tierra Patagonia hotel ($800–1,500/night all-inclusive) — some of the most architecturally impressive eco-lodges on earth, positioned for perfect Torres del Paine views.",
          ],
          cost: "$600–1,200 total (both days, excl. hotel)",
        },
        {
          day: "Day 4–6",
          title: "Guided W Trek with Porters & Exclusive Access",
          items: [
            "Private guide + porter service through the W Trek ($300–500/day extra). Your guide carries emergency equipment, navigates in whiteout conditions, and provides expert natural history commentary on the flora, geology, and glaciology.",
            "Exclusive refugio meals — private dining arrangements at Fantastico Sur refugios, or glamping options at Eco Camp Patagonia ($500–900/night all-in, geodesic dome accommodation inside the park).",
            "Helicopter access option: fly from Puerto Natales to Glaciar Grey landing zone ($600–1,000/person one-way) — arrive directly at the glacier rather than trekking in. Spectacular experience.",
            "Private catamaran charter on Lago Grey for close-up glacier iceberg viewing ($400–700 exclusive charter vs. $50 shared boat).",
          ],
          cost: "$700–1,500 total (per trekking day, all-in)",
        },
        {
          day: "Day 7",
          title: "Scenic Helicopter Return & Santiago Dinner",
          items: [
            "Helicopter transfer from inside Torres del Paine to Punta Arenas airport ($800–1,200/person, 45 minutes of pure aerial Patagonia — the definitive farewell to the park).",
            "Business class flight PUQ-SCL. Return to The Singular Santiago or Mandarin Oriental.",
            "Farewell dinner at Boragó (book 4–6 weeks ahead, tasting menu $120–160/person) or Ox restaurant for Patagonian lamb aged 60 days ($80–120/person).",
            "Late checkout and private transfer to the airport. The hot shower at the luxury hotel after 4 days of Patagonian trails is one of the great contrasts in travel.",
          ],
          cost: "$1,000–2,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–50",
      food: "$15–25",
      transport: "$10–20",
      activities: "$20–35",
      total: "$70–130/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–180",
      food: "$35–60",
      transport: "$20–40",
      activities: "$50–100",
      total: "$200–380/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$400–1,500",
      food: "$80–200",
      transport: "$100–300",
      activities: "$150–500",
      total: "$730–2,500/day",
    },
  ],
  mistakes: [
    {
      icon: "🏕️",
      title: "Not Booking W Trek Refugios 6+ Months Ahead",
      desc: "The Torres del Paine W Trek refugios operated by Fantastico Sur and Vertice Patagonia open reservations in August for the following December–March season. By October, December slots are completely sold out. January and February sell out by November. If you're planning a December or January trek and haven't booked by September, you will be camping only — or not trekking at all. Set a calendar reminder for August 1st.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🧥",
      title: "Not Layering for All Four Seasons in One Day",
      desc: "Patagonian weather changes every 20 minutes — this is literally the local saying and it is accurate. A sunny 20°C morning can become a horizontal-rain, 5°C windstorm by afternoon. Temperatures on the same W Trek day range from -5°C to 25°C. Bring a waterproof shell (not water-resistant), a mid-layer fleece, thermal base layers, and sun protection. Visitors arriving with a single jacket or rain poncho suffer enormously.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏔️",
      title: "Skipping Mirador Británico",
      desc: "Most guided itineraries skip Mirador Británico because it adds 4 hours and significant elevation to the Valle del Francés day. This is a mistake. The mirador offers the only 360° panoramic view of the entire Torres del Paine massif — all the towers, glaciers, and lakes visible simultaneously. It is the hardest section of the W Trek. It is also the most dramatic. Start the day early, carry extra snacks, and push through.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💸",
      title: "Expecting Patagonia to Be Cheap",
      desc: "Patagonia is the most expensive region in South America — more expensive than Buenos Aires or Lima, comparable to parts of Europe. The remoteness drives up every cost: park entry $18/day, refugio bunks $50–80/night, a basic beer in Puerto Natales costs $4. Budget travelers doing the full W Trek should expect to spend $600–800 total for the 4-day trek section alone including transport, park fees, food, and accommodation. Budget accordingly.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Torres Viewpoint at Sunrise — The 4am Hike Is Worth It",
      desc: "The standard advice is to hike to Mirador Base Torres in daylight. The better advice is to leave at 4am with a headtorch and arrive at the top for sunrise. The orange light hitting the granite towers over the turquoise glacial lake lasts 15–20 minutes and is one of the most photographed moments in South America for a reason. By 9am, clouds frequently cover the towers. By 11am, tour groups arrive. The 4am hike is cold, dark, and steep. It is worth every step.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🧊",
      title: "Glaciar Grey — Go Early for Calm Weather and Best Light",
      desc: "The Patagonian wind picks up significantly after 10am on most days. The Glaciar Grey trail from Refugio Paine Grande to the glacier viewpoint (8km, 3 hours) is best started before 7am. Early morning light turns the blue ice golden, the lake surface is calmer (better iceberg reflections), and wind hasn't yet started knocking people sideways on the exposed sections. The afternoon Grey II catamaran return saves 3 hours of tired-leg hiking.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🐧",
      title: "Punta Arenas Penguin Colony — South America's Most Underrated Wildlife",
      desc: "Most visitors rush through Punta Arenas on the way to the park. The Isla Magdalena penguin colony boat trip ($25, 1 hour) is genuinely remarkable — you walk unmarked paths among 120,000 nesting Magellanic penguins who have zero fear of humans. A penguin will walk up and inspect your shoes. The colony operates from October to March. Book at least a day ahead in peak season as boats sell out.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🦙",
      title: "Santiago's Mercado Central for Your Last Meal",
      desc: "Before flying home, Mercado Central in Santiago is the best seafood market in Chile. Built in 1872 with a cast-iron Victorian roof imported from England, it sells the freshest caldillo de congrio (eel soup, Neruda's obsession), machas a la parmesana (razor clams gratin), reineta fish ceviche, and whole centolla king crab at prices lower than any restaurant. Go at lunch (noon–2pm) when it's busiest and the fish is freshest.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "W Trek vs O Circuit — which should I do?",
      a: "The W Trek is 5 days (or 4 if you're fast) and covers the most scenic highlights: Torres, Valle del Francés, and Glaciar Grey. The O Circuit is 9 days and adds the remote, less-visited back side of the massif including the John Gardner Pass with views over the immense Southern Ice Field. The W is the right choice for most visitors. The O Circuit requires strong fitness, full camping capability, and is only feasible December–February when the Gardner Pass is reliably snow-free.",
    },
    {
      q: "Do Indians need a visa for Chile?",
      a: "As of 2026, Indian passport holders can enter Chile visa-free for up to 30 days as tourists. No prior application is required — you receive a tourist stamp on arrival. Always verify the current policy at the Chilean consulate website before booking, as regulations can change. Chile has historically been one of the most welcoming South American countries for Indian passport holders.",
    },
    {
      q: "Can I rent gear in Puerto Natales?",
      a: "Yes — Puerto Natales has multiple gear rental shops (Erratic Rock is the best known). You can rent trekking poles ($5–8/day), gaiters ($3–5/day), sleeping bag liners ($3/day), and waterproof gaiters. You cannot rent quality rain jackets or boots — bring your own. The gear rental quality is reasonable but not excellent. Bring your critical items from home: boots, rain shell, and warm layers.",
    },
    {
      q: "What is the best time to visit Torres del Paine?",
      a: "December and January offer the best weather and longest daylight hours (20 hours of usable light in December). Crowds are highest in January–February. November and March have fewer tourists and similar landscapes — November risks more snow on high passes, March sees autumn colours in the lenga beech forests that are genuinely stunning. April is shoulder season: cold, potentially snowy, but refugios are cheaper and near-empty. Never visit June–August — the park is partially closed and conditions are genuinely dangerous.",
    },
    {
      q: "How fit do I need to be for the W Trek?",
      a: "The W Trek requires solid walking fitness — you'll cover 60–80km over 4–5 days with 800m elevation gain on the hardest day (Base Torres). You don't need to be a runner or mountaineer, but you should be comfortable walking 6–8 hours daily with a 10–15kg pack. Hiking experience on uneven terrain helps. The biggest challenge is the wind — physically resisting 80–100 km/h gusts is more exhausting than the elevation. Train by walking with a loaded pack for at least 4 weeks before the trip.",
    },
  ],
  combineWith: ["buenos-aires-4-days", "santiago-3-days", "peru-machu-picchu-5-days"],
  relatedSlugs: ["peru-machu-picchu-5-days", "colombia-cartagena-4-days", "buenos-aires-4-days"],
  galleryQuery: "torres del paine patagonia chile glacier mountains trek",
};

export const metadata: Metadata = {
  title: "Patagonia in 7 Days: Torres del Paine, W Trek, Glaciers & Penguins (2026)",
  description: "Complete 7-day Patagonia itinerary: W Trek booking secrets, Glaciar Grey, penguin colonies, real USD costs from $70/day, and everything Indians need to know about Chile visas.",
  keywords: [
    "patagonia itinerary 7 days",
    "torres del paine w trek",
    "chile travel guide 2026",
    "patagonia trekking guide",
    "glaciar grey chile",
    "torres del paine budget",
  ],
  openGraph: {
    title: "Patagonia in 7 Days: W Trek, Torres del Paine & Glaciers (2026)",
    description: "W Trek booking secrets, refugio reservations, Glaciar Grey, and real costs — complete 7-day Patagonia travel guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Torres del Paine granite towers Patagonia Chile",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patagonia 7 Days (2026)",
    description: "W Trek booking secrets, Glaciar Grey, penguins — complete Chile Patagonia guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/chile-patagonia-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Patagonia in 7 Days: Torres del Paine, W Trek, Glaciers & Penguins (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=1200&q=80",
      description:
        "Complete 7-day Patagonia itinerary covering W Trek, Glaciar Grey, Torres del Paine, and the Punta Arenas penguin colony.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Patagonia 7 Days",
          item: "https://www.incredibleitinerary.com/blog/chile-patagonia-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Torres del Paine, Patagonia, Chile",
      description:
        "One of the last genuinely wild places on earth — granite towers, blue glaciers, and the W Trek, the most iconic multi-day hike in the Americas.",
      geo: { "@type": "GeoCoordinates", latitude: -51.2538, longitude: -72.9249 },
      touristType: ["Adventure travelers", "Trekkers", "Wildlife enthusiasts", "Photographers"],
    },
  ],
};

export default function ChilePatagoniaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
