import type { Metadata } from "next";
import PeruClient from "./PeruClient";

const _legacyData = {
  destination: "Peru",
  country: "Peru",
  countryFlag: "🇵🇪",
  slug: "peru-machu-picchu-7-days",
  heroQuery: "machu picchu peru inca ruins mountains llama",
  heroAlt: "Machu Picchu ancient Inca citadel with llama Andes mountains Peru",
  category: "South America",
  date: "April 5, 2026",
  readTime: "18 min read",
  intro: "Machu Picchu at dawn — the Inca citadel materialising from the mountain mist, stone terraces cascading into cloud forest, a llama grazing on a five-hundred-year-old plaza — is the kind of sight that makes you understand why people fly twelve hours and climb 3,400 metres above sea level. Seven days gives you Lima's world-class ceviche scene, Cusco's cobblestone colonial grandeur, the Sacred Valley's living Inca markets, and the full citadel experience — from the first bus at 5:30am to the Sun Gate at golden hour.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$45",
    bestMonths: "May–Sep (dry season)",
    airport: "LIM (Lima Jorge Chávez)",
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
        ["Visa-Free Entry", "Indian passport holders can enter Peru visa-free for up to 90 days as of 2024. No visa application, no embassy visit, no fee. Present your passport at Lima Jorge Chávez International Airport, state your purpose (tourism), and receive your entry stamp on arrival."],
        ["Onward Ticket", "Immigration officers typically ask for a return or onward flight ticket as proof you intend to leave. Have your booking confirmation accessible on your phone. A hotel booking for your first night also helps."],
        ["Currency Declared", "If carrying more than $10,000 USD in cash, declare it on the customs form. Normal tourist amounts require no declaration — bring a debit card and withdraw Soles from Lima ATMs at the airport (Global Net ATMs give good rates)."],
        ["Travel Insurance", "Not legally required but strongly recommended given altitude sickness risks at 3,400m in Cusco and 2,430m at Machu Picchu. Ensure your policy covers medical evacuation — a helicopter evacuation from a remote Inca Trail point can cost $10,000+."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, EU, and New Zealand citizens enter Peru visa-free for 90 days. Stamp on arrival at Lima airport. No pre-registration required."],
        ["Extension Option", "If you want to stay longer than 90 days, extensions can be applied for at the Migraciones office in Lima or Cusco. Cost: around $50. Peru is a popular base for South America travel — many visitors use it as a hub."],
        ["US Citizens Note", "The USA and Peru have maintained a strong bilateral tourism agreement. No reciprocity fee is charged (unlike some other South American countries). Entry is genuinely frictionless for US passport holders."],
        ["Dual Entry", "Peru does not stamp your passport on exit to Bolivia or Chile for common tourist routes (Lake Titicaca crossing, Atacama). Your 90 days is measured from first entry to Peru, not reset per crossing."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$45–75/day",
      days: [
        {
          day: "Day 1",
          title: "Lima — Miraflores & Barranco",
          items: [
            "Arrive Lima Jorge Chávez Airport. Take a pre-paid taxi from the official taxi desk inside the terminal ($15–20 to Miraflores) — never accept offers from touts outside the terminal doors.",
            "Check into a hostel in Miraflores (Pirwa Hostel Lima: $15–20/night dorm, central location, good lockers). Drop your bags and walk to the Malecón cliff-top boardwalk — free, 8km of ocean views over the Pacific.",
            "Larcomar cliff mall — architecturally built into the cliffs above the ocean, free to enter, great for sunset views. Budget food court options inside: $3–6 for a meal.",
            "Afternoon: Huaca Pucllana — a pre-Inca adobe pyramid sitting in the middle of the Miraflores suburb. Entry $4.50, guided tours only, runs 9am–5pm. Genuinely surreal to find a 1,500-year-old ruin surrounded by apartment blocks.",
            "Evening: Walk to Barranco, Lima's bohemian art district (30-min walk south from Miraflores or $3 Uber). The Bridge of Sighs (Puente de los Suspiros), colonial mansions, street art on every wall, dozens of bars and ceviche restaurants.",
            "Dinner: La Canta Rana in Barranco — the best budget ceviche in Lima. A plate of classic ceviche with leche de tigre (tiger's milk marinade), choclo, and sweet potato: $8–12. Pair with a Cristal beer ($2). Lima is the world's gastronomic capital — don't skip this meal.",
          ],
          cost: "$30–45 total",
        },
        {
          day: "Day 2",
          title: "Fly to Cusco — Acclimatise, Don't Rush",
          items: [
            "Morning flight Lima to Cusco (1.5 hours, $50–90 one-way on LATAM, Sky, or JetSmart — book in advance). Cusco sits at 3,400m above sea level. The altitude hits immediately upon landing: mild headache, slight breathlessness, fatigue. This is normal soroche (altitude sickness).",
            "Critical Day 2 Rule: Do NOT try to do everything today. Your single job is to acclimatise. Drink coca tea (provided free at every hotel and hostel — it genuinely helps), avoid alcohol, eat lightly, drink 2–3 litres of water, and move slowly.",
            "Check into Loki Hostel Cusco ($12–22/night) in the San Blas neighbourhood — the best-located budget hostel in the city, 5 minutes from Plaza de Armas.",
            "Afternoon slow walk only: Plaza de Armas (free) — Cusco's magnificent main square, flanked by Spanish colonial arcades built directly on top of Inca foundations. The stonework visible at the base of the cathedral walls is original Inca masonry. Sit on a bench and observe.",
            "San Blas neighbourhood: the narrow cobblestone lanes behind the cathedral, whitewashed walls, artisan workshops, and the famous San Blas woodcarvers. Completely free to wander, genuinely beautiful.",
            "Early dinner at Pachapapa restaurant in San Blas — a colonial courtyard, traditional Peruvian food, alpaca steak with quinoa risotto: $12–18. Back to the hostel by 9pm. Sleep is the best altitude medicine.",
          ],
          cost: "$60–90 total (incl. flight)",
        },
        {
          day: "Day 3",
          title: "Cusco — Inca Sites & San Pedro Market",
          items: [
            "By Day 3 you should feel considerably better. Morning: Cusco Cathedral on Plaza de Armas — $15 entry, 2 hours inside. Houses one of South America's finest collections of colonial religious art, including the famous painting of the Last Supper with guinea pig (cuy) on the table. The Cusco school of painting is a remarkable cultural hybrid.",
            "Qorikancha (Coricancha) sun temple — the holiest Inca site in Cusco, entirely plated in gold sheets before the Spanish melted them down. The Spanish built the Santo Domingo convent directly on top of the Inca walls — the contrast between the perfectly fitted Inca stonework and the cruder Spanish construction is striking. Entry $5.",
            "San Pedro Market (Mercado Central San Pedro) — one block from Plaza de Armas. Free to enter. Buy: fresh fruit juices (chicha morada, $0.50), alpaca wool goods (hats $5–10, jumpers $20–30), quinoa, coca leaves, and local snacks. The market feeds Cusco locals — prices are real, not tourist rates.",
            "Afternoon: Saqsayhuamán fortress — 15-minute walk uphill from Plaza de Armas (or $2 taxi). The massive Inca military fortress above the city, built from stones weighing up to 300 tonnes. How the Inca moved and fitted these blocks without wheels or iron tools remains partially unexplained. Entry requires Boleto Turístico ($30, covers 10+ sites — buy it here if you haven't already).",
            "Sunset from Saqsayhuamán with the entire city of Cusco spread below — one of the great travel views in South America. Free llamas wander the ruins as the light fades.",
          ],
          cost: "$35–50 total",
        },
        {
          day: "Day 4",
          title: "Sacred Valley — Pisac, Ollantaytambo & Chinchero",
          items: [
            "Take a colectivo (shared minibus) from Cusco to Pisac ($1.50, 1.5h) — they depart from Avenida Tullumayo when full, typically every 30 minutes from 6am. The Sacred Valley route is spectacular: descent from 3,400m to 2,800m, green valley floor, snow-capped peaks on both sides.",
            "Pisac ruins — Inca terraces cascading up the mountain above the village. Most visitors skip the ruins and only do the market — the ruins are better. Entry with Boleto Turístico. The agricultural terraces were engineered to create microclimates for growing different crops at different altitudes.",
            "Pisac market (best on Tuesday, Thursday, Sunday) — 200 stalls of weavings, ceramics, silver jewellery, and carved wood. Prices start 50% higher than they should — bargain patiently. Budget $10–20 for gifts and souvenirs.",
            "Lunch in Pisac village: $3–5 for a set menu (soup + main) at a local restaurant on the plaza. Try quinoa soup and trucha (river trout from the Sacred Valley).",
            "Ollantaytambo — catch a colectivo from Pisac ($2, 1.5h). The most dramatic Inca fortress in the Sacred Valley: enormous pink granite terraces rising vertically up the cliff face, with the unfinished Temple of the Sun at the summit. Entry with Boleto Turístico. The modern village of Ollantaytambo is itself built on an original Inca street grid — one of the oldest continuously inhabited Inca settlements.",
            "Overnight in Ollantaytambo or nearby Sacred Valley ($15–25 budget hostel). You are now 1.5h from Aguas Calientes by PeruRail — tomorrow's departure point for Machu Picchu.",
          ],
          cost: "$30–45 total",
        },
        {
          day: "Day 5",
          title: "Machu Picchu — The Citadel",
          items: [
            "The most important logistical day of the trip. Train from Ollantaytambo to Aguas Calientes (PeruRail Expedition, $45–65 one-way, book months in advance at perurail.com). The 1.5-hour train through cloud forest to Aguas Calientes is beautiful — waterfalls, orchids, the Urubamba River below.",
            "Bus from Aguas Calientes up to Machu Picchu ($24 return — buy the combo ticket at the bus station the night before or online). First bus departs 5:30am. Take the first bus to catch sunrise and the citadel before the day-tour crowd arrives at 10am. The difference in experience between 6am and 11am is enormous.",
            "Machu Picchu entry ticket ($50–60 per person in 2026 — MUST be booked in advance at machupicchu.gob.pe, ideally 3–4 months ahead for peak season May–August). Tickets are time-slotted with entry circuits — circuit 1 or 2 gives the best overview.",
            "Key viewpoints inside the citadel: the classic postcard photograph is taken from the Guardian's Hut (15-minute uphill climb from the main gate, absolutely worth it), the Intihuatana stone (the Inca solar calendar, perfectly aligned to the equinoxes), the Temple of the Sun, and the agricultural terraces.",
            "Sun Gate hike (Inti Punku): 3-hour return from the main citadel, free with your entry ticket. Moderate climb, rewarded with the same view that Inca Trail trekkers see after 4 days. If you have the energy, do it — the perspective of the citadel from above is completely different.",
            "Huayna Picchu mountain ($30 extra, only 400 tickets/day, book separately months in advance): 2-hour vertical climb on ancient Inca stone steps, genuinely vertiginous, views straight down onto the citadel. Not for those with fear of heights — the steps are steep and narrow.",
            "Afternoon: descend to Aguas Calientes for lunch and a soak in the thermal baths ($5 — a welcome recovery for legs after the Sun Gate). Evening train back to Cusco or overnight in Aguas Calientes.",
          ],
          cost: "$90–130 total (incl. train + entry + bus)",
        },
        {
          day: "Day 6",
          title: "Aguas Calientes & Return to Cusco",
          items: [
            "Morning at leisure in Aguas Calientes. The town has no road access — arrivals only by train or on foot. This enforced slowness is part of its charm. Cafés along the river, restaurants, souvenir markets.",
            "If you didn't hike the Sun Gate yesterday, the Machu Picchu Mountain trail (3h return, separate ticket $25) offers the highest viewpoint over the entire citadel. Entry time slots available for morning.",
            "Lunch at a riverside restaurant in Aguas Calientes — trout from the Sacred Valley, chicharrón de trucha (fried trout), or a simple menú del día (soup + main + drink) for $5–8.",
            "Afternoon train back to Cusco (PeruRail, 3.5h total journey Aguas Calientes → Ollantaytambo → Cusco transfer). Arrive Cusco evening.",
            "Final evening in Cusco: Chicha por Quesada (Calle Carmen Alto, San Blas) for modern Novo-Andean cooking using traditional Inca ingredients — purple corn, kiwicha grain, rocoto peppers. Mains $10–16. Or a simple final dinner at the San Pedro Market food stalls.",
            "Buy last-minute gifts: alpaca products from San Blas workshops (knitwear woven to order by indigenous artisans, the real deal vs. the market), pisco (Peruvian grape brandy) from the La Viña del Pisco shop on Plaza de Armas, and a small bag of coffee from the Cusco Coffee Company (Peruvian highland coffee is exceptional and underrated).",
          ],
          cost: "$40–60 total",
        },
        {
          day: "Day 7",
          title: "Return Lima — Final Ceviche & Departure",
          items: [
            "Morning flight Cusco → Lima (1.5h, $50–120 — check-in 2h before departure, flights can be full). Lima Jorge Chávez airport connects to almost all South American capitals and has multiple daily departures to Europe and North America.",
            "If your flight departs in the evening, you have Lima afternoon time. Go straight to El Mercado restaurant in Miraflores (reservations essential, lunch only, $25–40/person) for what many food critics call the best ceviche in the world. Chef Gastón Acurio's casual offshoot of La Mar — classic Peruvian ceviche with superb leche de tigre.",
            "Walk the Miraflores Malecón one final time — the Pacific, the paragliders launching from the cliff edge, the city grid spreading inland. Lima is dramatically underrated as a city.",
            "Airport: take a pre-paid taxi from Miraflores ($15–20, fixed rates available at hotel reception or taxi app InDriver). Jorge Chávez airport has a good food court for the wait — try one last anticucho (grilled beef heart skewer, $3) at a market stand inside.",
            "Departure. You have eaten the world's best ceviche, walked on five-century-old stones, climbed to 3,400 metres, and stood on a citadel that the Spanish searched for but never found. Buen viaje.",
          ],
          cost: "$40–70 total (incl. flight Lima departure)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$120–220/day",
      days: [
        {
          day: "Day 1",
          title: "Lima — Gourmet Arrival",
          items: [
            "Private transfer from Lima airport to Miraflores hotel ($25–30 via Taxi Green or pre-booked service). Check into a 3–4 star Miraflores hotel ($80–140/night: JW Marriott Lima, or Hotel B in Barranco for boutique style).",
            "Afternoon: Huaca Pucllana ($4.50) followed by the Barranco neighbourhood — the coastal path connecting Miraflores to Barranco is the city's best free walk.",
            "Lima ceviche lunch: La Mar (Calle La Mar, Miraflores) — Gastón Acurio's flagship cevichería, beloved by Lima's food community. Ceviche clásico, leche de tigre shots, tiradito, causa: $20–35/person. Book ahead.",
            "Evening at Lima's Larco Museum ($15) — one of South America's finest pre-Columbian collections, housed in a colonial mansion with a garden café for a pisco sour sunset ($8–12). The erotic ceramics gallery is memorable.",
            "Dinner: Central restaurant (Lima's most celebrated, #1 in Latin America multiple years — book 2+ months ahead, tasting menu $120–150/person) or Maido (Nikkei-Peruvian fusion, $80–110) if Central is full.",
          ],
          cost: "$150–250 total",
        },
        {
          day: "Day 2",
          title: "Fly Cusco — Acclimatise in Comfort",
          items: [
            "Morning LATAM flight Lima → Cusco. Check into Palacio del Inka, a Luxury Collection Hotel ($180–350/night) — a 16th-century colonial palace directly facing Qorikancha, impeccably restored, with altitude acclimatisation packs in every room (coca tea, oxygen pillows, soroche pills).",
            "Do not push on arrival day. Lunch at the hotel restaurant or a short walk to Plaza de Armas — the altitude demands respect regardless of fitness level.",
            "Afternoon: Private guide for a 2-hour orientation walk covering Plaza de Armas, Cusco Cathedral exterior and history, and the San Blas neighbourhood ($60–80 for a qualified English-speaking guide).",
            "Qorikancha ($5) — the spiritual heart of the Inca Empire, worth a full hour with the private guide's context about the gold that was ripped from these walls to fill Atahualpa's ransom room.",
            "Early dinner and early sleep. Altitude acclimatisation is the priority — a mid-range hotel with good heating and altitude amenities makes Day 2 genuinely more comfortable.",
          ],
          cost: "$280–400 total (incl. flight + hotel)",
        },
        {
          day: "Day 3",
          title: "Cusco Inca Sites with Private Guide",
          items: [
            "Full-day private guided tour of Cusco's major Inca sites ($100–150 for guide, Boleto Turístico $30 extra). A qualified guide transforms the experience — the engineering facts, the historical context, the stories of the conquest are captivating.",
            "Saqsayhuamán fortress with the guide explaining the military architecture and the Siege of Cusco (1536) when Manco Inca retook the fortress from the Spanish and held it for months.",
            "Q'enqo (small Inca ceremonial site, 10 minutes from Saqsayhuamán, included in Boleto Turístico) — underground carved limestone chambers used for mummification rituals.",
            "Cusco Cathedral interior with the guide: the syncretism of Inca and Catholic iconography, the hidden Inca faces in the colonial paintings, the extraordinary gold altarpiece.",
            "Lunch at Cicciolina (Calle Triunfo, Cusco) — a long-running favourite among travellers with discerning tastes, sharing plates and tapas format, Peruvian-Mediterranean: $15–25/person.",
            "San Pedro Market afternoon for shopping, then evening Pisco Sour tasting session at a Cusco bar — a Peruvian cocktail experience at the source, with a bartender explaining the three pisco grape varieties and the difference between Peruvian and Chilean pisco. $20–30 for a tasting flight.",
          ],
          cost: "$180–260 total",
        },
        {
          day: "Day 4",
          title: "Sacred Valley Full-Day Private Tour",
          items: [
            "Private vehicle and guide for the Sacred Valley ($120–160 for car + guide, full day). Departure Cusco 7am.",
            "Chinchero weaving village (not on the standard tourist trail): visit a working weaving cooperative where indigenous women demonstrate the entire process from raw alpaca to finished textile using natural plant dyes unchanged since Inca times. Buy directly from the weavers at fair trade prices ($30–80 for a genuine hand-woven piece).",
            "Moray — three concentric circular Inca terraces forming natural amphitheatres in the earth. Current archaeological theory: a crop experimentation centre, using the circular form to create precise temperature gradients. Unlike anything else in the world. Included in Boleto Turístico.",
            "Maras salt pans — 3,000 individual salt pools cascading down a hillside, still worked by the same families who worked them in Inca times. Stunning photography. Free to visit from the road.",
            "Pisac ruins with the guide — the terracing engineering explained in full.",
            "Overnight: Tambo del Inka Sacred Valley ($250–400/night) — a luxury lodge directly on the PeruRail line in Urubamba, with an infinity pool overlooking the valley. The most convenient luxury base for Machu Picchu day 5.",
          ],
          cost: "$380–550 total (incl. guide + luxury hotel)",
        },
        {
          day: "Day 5",
          title: "Machu Picchu — VIP Experience",
          items: [
            "PeruRail Vistadome train from Urubamba station ($85–120 return) — panoramic roof windows for the entire cloud forest journey. The 4am departure from the luxury lodge gets you to Aguas Calientes by 6:30am.",
            "First bus up (5:30am, $24 return). Entry at 6am opening with pre-booked ticket ($50–60). The citadel in the 6–8am window before the mass tour groups is incomparable — mist, near-silence, llamas grazing.",
            "2-hour private guide inside Machu Picchu ($80–120 for a specialist archaeologist guide certified by Peru's Ministry of Culture). The Guide explains the alignment of the Intihuatana stone, the hydraulic system, and the ongoing debate about the citadel's primary purpose.",
            "Huayna Picchu mountain with pre-booked ticket ($30, 400/day): the 45-minute vertical ascent on ancient stone steps, the view straight down onto the citadel. The guide accompanies you and knows the best photography spots and historical context for the Temple of the Moon on the back side of the mountain.",
            "Late lunch at Tinkuy Buffet restaurant at the Belmond Sanctuary Lodge (located at the Machu Picchu entrance gates, the only hotel at the site) — $55–75/person. The location is unique: you are literally at the Machu Picchu entrance gate.",
            "Afternoon train back to Cusco. The PeruRail Belmond Hiram Bingham service ($500 return including lunch and dinner on board) is the ultimate option if budget allows.",
          ],
          cost: "$350–550 total",
        },
        {
          day: "Day 6",
          title: "Cusco Leisure & Final Andean Dinner",
          items: [
            "Morning at leisure. Optional: Pisac market (if Tuesday, Thursday, or Sunday) with a driver ($30 return).",
            "Wellness: many Cusco mid-range hotels have spa services — an Andean herbal massage with muña and eucalyptus is a genuine luxury after 5 days of high-altitude walking ($60–90).",
            "Afternoon: Museo Larco satellite collection in Cusco (small but excellent pre-Columbian textiles and ceramics) or the Museo Inca (Palace of the Admiral, $10, one of Cusco's best museums for Inca artefacts).",
            "Shopping on Calle Hatunrumiyoc — the famous 12-Angle Stone, a masterpiece of Inca masonry, is embedded in a standing wall at street level. Free. The nearby craft galleries sell museum-quality reproductions and original contemporary Andean art ($50–300).",
            "Farewell Cusco dinner: MAP Café inside the Museo de Arte Precolombino (the only restaurant in a pre-Columbian museum in Peru) — modern Andean cuisine in a glass-roofed colonial courtyard, $30–50/person. Book ahead.",
          ],
          cost: "$150–220 total",
        },
        {
          day: "Day 7",
          title: "Return Lima — World's Best Ceviche Farewell",
          items: [
            "Morning flight Cusco → Lima. Check into airport-adjacent hotel if departing same day (Costa del Sol Wyndham Lima Airport, $120–160) or back to your Miraflores hotel if time allows.",
            "Lima final lunch: El Mercado by Gastón Acurio (reservations essential, Calle Hipolito Unanue, Miraflores) — the finest cevichería in the world's top food city. Ceviche mixto (mixed seafood), jalea (fried seafood platter), tiradito de lenguado (flounder in yellow chilli): $30–50/person.",
            "Walk the Larcomar mall for last-minute gifts: Kuna alpaca brand ($80–200 for genuine premium alpaca clothing), Cacao Botanica artisan chocolate ($15–25), and pisco miniatures for gifts.",
            "Evening departure. Lima airport has solid food options landside — Embarcadero 41 restaurant for one final anticucho and a Peruvian craft beer if time allows.",
            "A week in Peru: you have navigated altitude, Inca archaeology, and a city that just happens to be the world's culinary capital. The photographs of the citadel in morning mist will be on your wall.",
          ],
          cost: "$130–200 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$400–1,500+/day",
      days: [
        {
          day: "Day 1",
          title: "Lima — Arrival & Central Restaurant",
          items: [
            "Private meet-and-greet at Lima Jorge Chávez International Airport. Luxury transfer (Blacklane, $60–80) to Miraflores Park Hotel by Belmond ($250–450/night) — the finest hotel in Miraflores, with Pacific Ocean views, rooftop pool, and the legendary El Restaurante on the ground floor.",
            "Afternoon at leisure: the Miraflores Malecón boardwalk, Huaca Pucllana at dusk from outside (the illuminated pyramid visible from the street at night is atmospheric).",
            "Evening at Larco Museum ($15) before your dinner reservation — the pre-Columbian collection provides essential context for the Inca sites ahead.",
            "Dinner at Central (Av. Pedro de Osma, Barranco) — ranked #1 restaurant in Latin America multiple years, one of the top 5 in the world. Chef Virgilio Martínez's menu is organised by altitude: dishes from -10m (Pacific ocean floor) to 4,200m (high Andean plateau), each using ingredients from that specific elevation. 17-course tasting menu: $150–200/person excluding drinks. Book 2–3 months ahead minimum.",
          ],
          cost: "$400–600 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Fly Cusco — Inkaterra Arrival",
          items: [
            "Private flight charter Lima → Cusco ($800–1,500 for the aircraft, 8-seater) or LATAM first class. Arrival by private vehicle to Inkaterra La Casona Cusco ($500–1,500/night) — a 16th-century colonial mansion of 11 suites in the San Blas neighbourhood, the most intimate luxury property in Cusco.",
            "Altitude acclimatisation protocol: the hotel's in-house physician assesses your acclimatisation, provides a personalised oxygen and coca therapy session, and advises on activity pace for the next 48 hours.",
            "Private afternoon walking tour of Cusco's hidden spaces: the secret courtyards of the Spanish colonial manors, the Inca stones integrated into cathedral walls, and the view of the city from the private terrace of a San Blas art gallery.",
            "Dinner at Cicciolina (in-room dining alternatively) — the hotel chef prepares an Andean ingredient-focused menu for the evening.",
          ],
          cost: "$1,200–2,500 total (incl. flight + hotel)",
        },
        {
          day: "Day 3",
          title: "Exclusive Cusco Archaeological Access",
          items: [
            "Private archaeologist guide for Cusco — a PhD-level specialist from the Universidad San Antonio Abad del Cusco ($200–350 for full day). This is not a tourist guide reciting facts — this is a researcher who has published papers on the sites you are walking through.",
            "Dawn at Saqsayhuamán before the site opens (special early access available through premium tour operators — contact Llama Path or Apus Peru). The fortress at 6am with the Andes brightening around you and no other visitors.",
            "Private Qorikancha tour: the guide explains the astronomical alignments of the temple, the specific positions of the golden plates that would have caught the equinox sunrise, and the looting timeline from 1532 to 1650.",
            "Exclusive access to the Inca Roca Palace storerooms (not open to public): a collection of unpublished Inca ceramics visible only through specialist academic connections.",
            "Lunch at MAP Café with the archaeologist — the conversation over Peruvian wine about the Inca civil war that made Pizarro's conquest possible is worth the meal alone.",
            "Afternoon spa at Inkaterra La Casona — Andean herbal treatments using plants from the hotel's medicinal garden.",
          ],
          cost: "$600–900 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Sacred Valley — Belmond Hotel Rio Sagrado",
          items: [
            "Private vehicle (luxury 4WD) with driver and archaeologist to the Sacred Valley ($200–300 for the day). Departure 8am from Cusco.",
            "Chinchero weaving cooperative: private demonstration arranged directly with a master weaver ($100 donation to the cooperative). The chance to try weaving on a traditional backstrap loom yourself, guided by a woman whose family has woven on this hillside for 12 generations.",
            "Moray and Maras without crowds — depart by 9am before tour buses arrive. The salt pans in morning light are extraordinary.",
            "Afternoon check-in: Belmond Hotel Rio Sagrado ($600–1,200/night) — a luxury lodge of private casitas in the Urubamba Valley, set beside the sacred river that the Inca called Vilcanota. Hammocks over the river, an organic garden feeding the kitchen, and absolute mountain silence.",
            "Private cooking class at the hotel ($150/person): the head chef teaches you to make classic Peruvian ceviche, aji de gallina, and pisco sour using Sacred Valley ingredients. Dinner is the meal you just cooked, served in the garden.",
          ],
          cost: "$900–1,400 total (incl. hotel + experiences)",
        },
        {
          day: "Day 5",
          title: "Machu Picchu — Belmond Hiram Bingham",
          items: [
            "The Belmond Hiram Bingham train from Poroy station (private transfer from hotel, $500 return per person including all meals and drinks on board). A restored 1920s Pullman carriage with observation car, white-tablecloth breakfast, and cocktails as the cloud forest rises outside.",
            "Arrive Aguas Calientes and transfer directly to the Belmond Sanctuary Lodge ($1,200–3,000/night) — the only hotel located at the entrance to Machu Picchu itself. Check in, leave bags, and walk through the gate immediately — no bus required.",
            "Private archaeologist guide inside Machu Picchu ($200–300 for a day's expert access). Sunrise Circuit 1, the Guardian's Hut, Huayna Picchu summit (pre-booked ticket $30), and the afternoon Sun Gate hike.",
            "Afternoon return to Sanctuary Lodge: the hotel offers a private terrace with a direct sightline to the citadel. A pisco sour at sunset, watching the last light on Huayna Picchu from a hotel deck that essentially nobody in the world has access to.",
            "Dinner at the Sanctuary Lodge restaurant — the only fine dining establishment within sight of Machu Picchu. Peruvian tasting menu, $80–120/person. An evening at the entrance of one of the world's greatest archaeological wonders.",
          ],
          cost: "$1,800–3,500 total (incl. train + hotel + guide)",
        },
        {
          day: "Day 6",
          title: "Inca Trail Reflection & Return",
          items: [
            "Optional morning: return visit to Machu Picchu at dawn from the Sanctuary Lodge — the 2-minute walk to the gate means you are always first inside. Dawn mist over the citadel seen from the Guardian's Hut is what every photographer is trying to capture.",
            "Hiram Bingham return train to Cusco: lunch served on board, pisco cocktails, observation car. The return is as beautiful as the departure.",
            "Final Cusco night at Inkaterra La Casona. Late afternoon: a private tour of San Blas master craftsmen workshops, arranging bespoke commissions if desired (hand-carved wooden retablos, custom knitwear, silver jewellery made to specification).",
            "Farewell dinner at MAP Café (Pre-Columbian Museum courtyard): modern Andean tasting menu with Peruvian wine pairings ($50–80/person). The sommelier specialises in little-known Peruvian wines from the Ica Valley — ask for the private tasting.",
          ],
          cost: "$800–1,200 total (excl. hotel)",
        },
        {
          day: "Day 7",
          title: "Lima — Final Feast & Departure",
          items: [
            "Private charter or first-class flight Cusco → Lima. Met at Lima airport by private transfer to the Miraflores Park Hotel or directly to a preferred fine dining reservation.",
            "Farewell Lima lunch: Maido (Calle San Martin, Miraflores) — chef Mitsuharu Tsumura's Nikkei cuisine, the marriage of Japanese technique and Peruvian ingredients that no other food culture on earth has. Omakase tasting menu $100–140/person. Ranked in the world's top 10 restaurants.",
            "Lima afternoon: the Miraflores Malecón, Larcomar's luxury boutiques (Kuna flagship for premium vicuña and alpaca), and a final pisco tasting at Barra Chalaca ($30–50 for a proper three-variety tasting with Peruvian food pairings).",
            "Private transfer to Jorge Chávez for departure. The concierge packs your luggage and handles check-in details. You leave with the world's finest ceviche in your memory, hand-woven alpaca in your bag, and Machu Picchu photographs that will require an A2 frame.",
          ],
          cost: "$600–1,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$10–25",
      food: "$8–15",
      transport: "$5–10",
      activities: "$15–25",
      total: "$45–75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–130",
      food: "$25–50",
      transport: "$15–25",
      activities: "$30–60",
      total: "$120–220/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$250–1,500",
      food: "$80–200",
      transport: "$40–100",
      activities: "$80–200",
      total: "$400–1,500+/day",
    },
  ],
  mistakes: [
    {
      icon: "🎟️",
      title: "Not Booking Machu Picchu Tickets Months in Advance",
      desc: "This is the single most common catastrophic mistake. Machu Picchu entry tickets sell out 3–6 months in advance for peak season (June–August). Tickets must be purchased at machupicchu.gob.pe and are date-and-time specific. You cannot buy them at the gate, you cannot buy them in Cusco, and they do not reappear last-minute. People fly to Peru, take the PeruRail to Aguas Calientes, and cannot enter because they assumed they could sort it out on arrival. Book the day you start planning this trip.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏔️",
      title: "Ignoring Altitude Sickness",
      desc: "Cusco at 3,400m is not optional altitude — it is where your itinerary lives. Every year tourists are hospitalised with acute mountain sickness because they ignored symptoms (severe headache, vomiting, confusion) and pushed on anyway. The protocol: arrive in Lima first (sea level), fly to Cusco, rest for 24–48h, no alcohol, no exercise, drink coca tea constantly, and take Diamox (acetazolamide) prescribed by your doctor at home starting 2 days before arrival. If symptoms worsen over 12h, descend immediately to Sacred Valley (2,800m) — improvement is rapid.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏞️",
      title: "Skipping the Sacred Valley to Save Time",
      desc: "The Sacred Valley (Pisac, Ollantaytambo, Chinchero, Moray) is not a lesser version of Machu Picchu — it is a completely different experience: living markets, working Inca terraces, and villages where Quechua is still the primary language. Skipping it to spend an extra day in Cusco is a significant loss. It also has the practical benefit of sleeping at 2,800m rather than 3,400m, which makes altitude acclimatisation significantly easier for the following days.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Eating at Tourist Restaurants on Plaza de Armas Cusco",
      desc: "The restaurants directly on Cusco's Plaza de Armas charge 3–5x what you pay two streets away for measurably worse food. The waiters outside will grab your arm. The menus have photographs. The ceviche is not fresh. Walk to San Blas, Calle Triunfo, or the area around San Pedro Market. The best Cusco restaurants — Cicciolina, MAP Café, Pachapapa — are none of them on the Plaza.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🧳",
      title: "Visiting June–August Without Accommodation Booked 3+ Months Ahead",
      desc: "Peru's dry season (June–August) is peak travel season globally. Aguas Calientes has very limited accommodation and it sells out completely. Cusco 3-star hotels are fully booked in July by March. Sacred Valley lodges are reserved by February for August stays. If you want to go in peak season, treat accommodation booking with the same urgency as Machu Picchu tickets — do it the moment you have your dates.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Buy the Boleto Turístico — It Pays for Itself Twice Over",
      desc: "The Boleto Turístico ($30 for 10 sites, $45 for all sites including outlying valleys) covers Saqsayhuamán, Q'enqo, Puca Pucara, Tambomachay, Pisac ruins, Ollantaytambo, Moray, and more. Individual site tickets are $15–30 each. If you visit 4+ sites (easy on this 7-day itinerary), the pass pays for itself at the first site and covers everything else free. Buy it at any covered site or at the official office on Calle Garcilazo in Cusco.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Take the First Bus to Machu Picchu at 5:30am",
      desc: "The first bus from Aguas Calientes to Machu Picchu departs at 5:30am (buy return bus tickets the evening before at the bus station — $24, available until 8pm). Being at the citadel gate at 6am for opening means roughly 2 hours before the mass tour groups begin arriving at 10am. The mist, the silence, the llamas moving through the terraces undisturbed — this is the experience. By 11am, 2,500 visitors share the same space. The alarm at 5am is worth setting.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍃",
      title: "Start Coca Tea Immediately Upon Landing in Cusco",
      desc: "Every hotel and hostel in Cusco provides complimentary coca tea. Drink it constantly from the moment you arrive. Coca leaves (and their tea) contain alkaloids that assist with altitude acclimatisation — coca tea is entirely legal in Peru, contains trivial amounts of cocaine alkaloid (not enough to affect a drug test), and has been used by Andean communities at altitude for millennia. It genuinely reduces headache severity and breathlessness. Chew actual dried coca leaves (sold at any Cusco market for $1) if you want a stronger effect — perfectly legal throughout Peru.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎨",
      title: "San Blas Neighbourhood Artisan Workshops",
      desc: "San Blas is the historic artisan quarter of Cusco — the woodcarvers, silversmiths, weavers, and ceramicists whose families have worked these lanes for generations. The workshops open to the street during working hours (9am–7pm typically). You can watch a master woodcarver work on a retablo altarpiece, commission a custom piece to be shipped home, or simply browse the studios that line the cobblestone calles. The quality of work here is significantly higher and prices are lower than the market stalls on Plaza de Armas.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌎",
      title: "Lima Ceviche Is World-Class — Don't Skip the First Night",
      desc: "Lima is consistently ranked alongside Tokyo, Copenhagen, and New York as one of the world's great food cities. The ceviche is genuinely different from every other country's version — the Peruvian leche de tigre (tiger's milk marinade of fresh lime, ají amarillo, ginger, and the juices from the marinating fish) is one of the world's great flavour combinations. Even on a 7-day trip focused on Machu Picchu, the Lima food experience justifies the overnight — La Canta Rana for budget, La Mar for mid-range, Central for the full Virgilio Martínez experience.",
      color: "bg-rose-50 border-rose-200",
    },
  ],
  faqs: [
    {
      q: "Do Indian passport holders need a visa for Peru?",
      a: "No. As of 2024, Indian passport holders can enter Peru visa-free for up to 90 days for tourism. Present your passport at Lima airport, show a return or onward ticket, and receive your entry stamp. No pre-approval, no embassy visit, no fee. This is a significant change from previous years — verify the current rules on the Peruvian Embassy website or IATA Travel Centre before travel, as visa policies can change.",
    },
    {
      q: "How do I prevent and treat altitude sickness in Cusco?",
      a: "Prevention: (1) Fly Lima → Cusco rather than overland from the coast — the gradual ascent is no safer than the sudden one and takes far longer. (2) Take Diamox (acetazolamide, 125–250mg twice daily) starting 2 days before arrival — requires a doctor's prescription. (3) Rest Day 1–2 in Cusco, no exercise, no alcohol. (4) Drink 2–3 litres of water daily. (5) Drink coca tea constantly. Treatment if symptoms worsen: the Sacred Valley at 2,800m provides immediate relief from descent. Clinica SANNA in Cusco provides excellent altitude treatment including supplemental oxygen. A prescription for dexamethasone (anti-inflammatory) carried from home is a useful emergency measure — consult your travel medicine doctor.",
    },
    {
      q: "How do I book Machu Picchu tickets, and when should I do it?",
      a: "Book at machupicchu.gob.pe (the official government booking portal). Tickets are allocated by date and entry circuit (Circuit 1, 2, or 3 — Circuit 1 or 2 provides the classic overview including the Guardian's Hut viewpoint). Daily capacity is capped at approximately 2,500 visitors. For June, July, and August, book 3–4 months ahead. For shoulder season (May, September, October), 4–6 weeks is usually sufficient but earlier is safer. Huayna Picchu mountain (400 tickets/day) and Machu Picchu Mountain (800 tickets/day) are booked on the same portal as separate add-ons. The site accepts Visa/Mastercard. Confirmation is emailed as a PDF — print it or save it offline before losing mobile data in Aguas Calientes.",
    },
    {
      q: "What is the best time to visit Peru and Machu Picchu?",
      a: "Dry season: May to September — the definitive best window. Clear skies, no rain, Machu Picchu views unobscured. June, July, August are peak season (most expensive, most crowded, most advance booking required). May and September offer dry weather with 20–30% fewer tourists and lower prices — the optimal balance. Wet season: November to March — heavy daily rain in Cusco and Sacred Valley, Machu Picchu frequently shrouded in cloud and sometimes closed by landslides. The Inca Trail closes entirely in February for maintenance. April is transitional — mostly dry with occasional afternoon showers, very good value.",
    },
    {
      q: "Inca Trail vs. Salkantay Trek — which should I choose?",
      a: "Inca Trail (4 days, $800–1,500 all-inclusive): the iconic route arriving through the Sun Gate into Machu Picchu. Limited to 500 people per day (including guides and porters), must be booked 6+ months ahead with a licensed operator, almost universally described as the most rewarding trek on earth. The arrival moment through Inti Punku at dawn is unforgettable. Salkantay Trek (5 days, $400–600): a more remote, harder route passing beneath the Salkantay glacier (5,000m+) before descending to Aguas Calientes. More dramatic mountain scenery, no permit required, can often be booked 2–4 weeks ahead. Technically more demanding than the Inca Trail. Both end at Machu Picchu. Budget and time are the usual deciding factors.",
    },
    {
      q: "Is Peru safe for tourists?",
      a: "Peru is generally safe for tourists who exercise normal precautions. The main risks are petty theft (bag snatching, pickpocketing) in Lima's historic centre, around Plaza de Armas Cusco, and on buses. Miraflores and Barranco in Lima are very safe, as is the Cusco historic centre in daylight. Avoid walking alone at night outside tourist areas. Use registered taxis or ride apps (InDriver works well in Lima and Cusco). The tourist police (Policía de Turismo) are present in Cusco and Aguas Calientes and are generally helpful. Political demonstrations (paros) occasionally disrupt transport in Cusco and Lima — check local news. The Machu Picchu trail and Sacred Valley are very safe.",
    },
    {
      q: "How do I get from Lima to Cusco?",
      a: "Fly. The overland route (25+ hours by bus) is uncomfortable, time-consuming, and crosses areas with occasional safety concerns — recommended only for very budget-conscious travellers with abundant time. LATAM, Sky Airlines, and JetSmart operate multiple daily flights Lima → Cusco in 1.5 hours. Prices range from $50 on advance booking to $200 day-of. Book in advance (LATAM has the most reliable departure record). Fly in the morning if possible — afternoon flights from Lima frequently face delays due to weather in the Andes.",
    },
  ],
  combineWith: ["bali-5-days", "tokyo-5-days", "morocco-7-days"],
  relatedSlugs: ["kenya-safari-7-days", "morocco-7-days", "istanbul-5-days", "bali-5-days"],
  galleryQuery: "machu picchu cusco sacred valley peru inca andes",
};

export const metadata: Metadata = {
  title: "Peru in 7 Days: Machu Picchu, Cusco, Sacred Valley & Lima's World-Class Food (2026)",
  description:
    "Complete 7-day Peru itinerary with Machu Picchu booking secrets, altitude sickness prevention, Cusco Inca sites, Sacred Valley markets, and Lima's legendary ceviche scene — from budget $45/day to luxury $1,500/day.",
  keywords: [
    "peru itinerary 7 days",
    "machu picchu travel guide 2026",
    "cusco altitude sickness",
    "sacred valley inca trail",
    "lima ceviche guide",
    "peru budget travel",
    "machu picchu tickets booking",
  ],
  openGraph: {
    title: "Peru in 7 Days: Machu Picchu, Cusco & Lima (2026)",
    description:
      "Machu Picchu ticket booking secrets, altitude sickness protocol, Cusco Inca sites, and Lima's world-class food — every budget covered.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Machu Picchu ancient Inca citadel with llama Andes mountains Peru",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peru in 7 Days (2026)",
    description: "Machu Picchu booking secrets, altitude tips, real dollar costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/peru-machu-picchu-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Peru in 7 Days: Machu Picchu, Cusco, Sacred Valley & Lima's World-Class Food (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80",
      description:
        "Complete 7-day Peru itinerary: Machu Picchu ticket booking, altitude sickness prevention, Sacred Valley markets, and Lima ceviche.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Peru Machu Picchu 7 Days",
          item: "https://www.incredibleitinerary.com/blog/peru-machu-picchu-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Machu Picchu, Peru",
      description:
        "The 15th-century Inca citadel set high in the Andes of Peru — a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
      touristType: ["Adventure travellers", "History and archaeology enthusiasts", "Hikers", "Photographers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -13.1631,
        longitude: -72.545,
      },
    },
  ],
};

export default function PeruMachuPicchuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PeruClient />
    </>
  );
}
