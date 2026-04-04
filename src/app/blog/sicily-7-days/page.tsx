import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Sicily",
  country: "Italy",
  countryFlag: "🇮🇹",
  slug: "sicily-7-days",
  heroQuery: "sicily taormina greek theatre etna volcano italy",
  heroAlt: "Taormina Greek Theatre with Mount Etna volcano in the background, Sicily",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro:
    "Sicily is Italy cranked up to maximum — a sun-scorched Mediterranean island where Greek temples older than Rome stand in almond groves, a live volcano dusts the coastline with ash, and street food vendors have been selling arancini from the same corner for three generations. Seven days is just enough to move from Palermo's chaotic Arab-Norman markets through the baroque gold of Agrigento, along the flower-draped cliffs of Cefalù, and up to the ancient Greek theatre at Taormina where Etna smokes on the horizon. No other Italian region offers this density of history, nature, and flavour for €45 a day.",
  stats: { duration: "7 Days", budgetFrom: "€45", bestMonths: "Apr–Jun or Sep–Oct", airport: "CTA" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Palermo Arrival" },
    { id: "day3", emoji: "📅", label: "Day 3 — Valley of the Temples" },
    { id: "day6", emoji: "📅", label: "Day 6 — Etna & Taormina" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C)"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Italian Consulate or VFS Global"],
        ["Documents", "Hotel/accommodation bookings, return flight, 3-month bank statements, travel insurance"],
        ["Notes", "Sicily falls under Italy's Schengen zone. Apply 6–8 weeks before travel. Biometric appointment required at VFS Global."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register at travel-europe.eu before departure)"],
        ["Passport", "Must be valid 3+ months beyond your return date"],
        ["Notes", "UK passport holders are visa-free post-Brexit but subject to the 90/180 Schengen rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€45–65/day",
      days: [
        {
          day: "Day 1",
          title: "Palermo Arrival & Street Food",
          items: [
            "14:00 — Fly into Palermo (PMO) or take the direct train from Catania airport to Palermo Centrale (2.5 hours, €15) — budget hostels and guesthouses in Palermo centre cost €15–25/night",
            "16:00 — Ballarò Market in the Albergheria quarter — Sicily's oldest street market; buy a paper cone of fried chickpea fritters (panelle) for €1.50 and a fresh arancino (rice ball) for €2, the best €4 you'll spend in Italy",
            "18:00 — Walk the Arab-Norman Palermo UNESCO trail for free: Palazzo dei Normanni exterior, Piazza Pretoria's spectacular fountain, and La Martorana church (€2 entry); this architecture exists nowhere else on earth",
            "20:00 — Dinner at a local trattoria in the Kalsa district: pasta alla norma (eggplant, tomato, ricotta salata, €8) or grilled swordfish (€10); skip the restaurants on Piazza Bellini — go one street back",
            "21:30 — Evening gelato walk: Palermo's gelaterie serve traditional Sicilian flavours including almond granita, pistachio, and jasmine; €2.50 for a cone",
          ],
          cost: "€25–35 (food, street market, church entry, local transport)",
        },
        {
          day: "Day 2",
          title: "Cefalù Beach & Cathedral",
          items: [
            "08:30 — Train from Palermo to Cefalù (1 hour, €5) — one of Italy's most scenic coastal rail journeys, hugging cliffs above turquoise water",
            "10:00 — Cefalù Cathedral (€5) — a Norman masterpiece with golden Byzantine mosaics in the apse rivalling those in Monreale; the Christ Pantocrator mosaic is one of the finest in the Mediterranean world",
            "12:30 — Lunch at a bar near the beach: a generous plate of pasta with fresh tuna or a focaccia sandwich from a rosticceria for €7",
            "14:00 — Swim at Cefalù beach (Lido Ambra) — free public beach access; rent a sunbed for €5 or bring a towel and use the free sand; the water clarity rivals anything in Greece",
            "17:30 — Hike up to La Rocca fortress ruins above the town (45 min each way, free) — 270-degree views from the cliff top at golden hour; sunset over the Tyrrhenian Sea is memorable",
            "20:00 — Dinner in Cefalù before the evening train back to Palermo (last train around 22:00, €5)",
          ],
          cost: "€35–45 (trains, cathedral, beach, meals)",
        },
        {
          day: "Day 3",
          title: "Valley of the Temples, Agrigento",
          items: [
            "07:00 — Bus from Palermo to Agrigento (2.5 hours, €10 with FlixBus or Autolinee Siciliane) — book ahead online in summer",
            "10:00 — Valley of the Temples (€10, open daily 8:30am–7pm) — seven ancient Greek temples from the 5th century BC in a ridge-top valley; the Temple of Concordia is one of the world's best-preserved Greek temples and has stood for 2,500 years",
            "12:30 — Picnic lunch inside the archaeological park: buy supplies from a market stall near the entrance (bread, local cheese, olives, €6) and eat in the shade of the almond trees between the temples",
            "14:30 — Museo Regionale Archeologico di Agrigento (€8) — the finest collection of Greek vases, coins, and the extraordinary Telamon figure from the fallen Temple of Zeus",
            "18:00 — Bus back to Palermo or continue by bus to Siracusa (change at Catania, total 3.5 hours, €15) depending on your routing",
          ],
          cost: "€40–50 (bus, temples, museum, meals)",
        },
        {
          day: "Day 4",
          title: "Siracusa Old Town & Ortygia Island",
          items: [
            "09:00 — Siracusa Ortygia island is a 20-minute walk from the bus station; this 2,700-year-old island connected to the mainland by a bridge is entirely walkable and feels like a Greek-Baroque time capsule",
            "10:00 — Siracusa Cathedral (free entry) — built directly on top of a 5th-century BC Greek temple; the ancient Doric columns are visible inside the church walls — one of the most extraordinary historical overlaps in Europe",
            "12:00 — Lunch at the Ortygia market (open until 1pm, Mondays–Saturdays): fresh pasta, ricotta-filled arancini, and grilled vegetables from market stalls for under €10",
            "14:00 — Neapolis Archaeological Park (€16): Greek theatre (still hosting performances in June), Roman amphitheatre, and the Ear of Dionysius cave with extraordinary acoustics",
            "17:00 — Swim at Cala Rossa or Fontane Bianche beach (taxi €8 each way) or swim from the Ortygia waterfront rocks",
            "20:00 — Dinner in Ortygia: pasta with sea urchin (ricci) for €14 at any of the trattorie on Via Roma or Via Cavour",
          ],
          cost: "€40–55 (transport, archaeological park, meals)",
        },
        {
          day: "Day 5",
          title: "Mount Etna Crater Hike",
          items: [
            "07:30 — Bus or shared minivan from Catania to Rifugio Sapienza on Etna's south slope (€10 one-way, book through local agencies) — the Circumetnea railway from Catania offers an alternative scenic route around the volcano base",
            "10:00 — Etna cable car to 2,500m (€30 return) then guided group hike to the central crater area at 3,000m (€15 for guide, obligatory above 2,900m) — the lunar landscape of cooled lava fields and active fumaroles is unlike anything in Europe",
            "13:00 — Lunch at Rifugio Sapienza: simple mountain pasta and a glass of Etna DOC wine grown in volcanic soil (€15) — wine from Etna slopes is now one of Italy's most sought-after",
            "16:00 — Return bus to Catania; check in to budget hostel (€18–22/night)",
            "19:00 — Catania fish market area (Piazza del Duomo) for dinner: pasta alla norma at its home city for €8",
          ],
          cost: "€55–70 (cable car, guide, transport, meals)",
        },
        {
          day: "Day 6",
          title: "Taormina Greek Theatre",
          items: [
            "09:00 — Train from Catania to Taormina-Giardini station (45 min, €4), then bus up the cliff to Taormina centre (€2)",
            "10:00 — Teatro Greco di Taormina (€10) — a 3rd-century BC Greek theatre cut into the clifftop with Mount Etna framing the stage backdrop; one of the most photographed ancient sites in the world and still used for summer concerts",
            "12:00 — Lunch at a bar on Corso Umberto: granita di mandorle (almond granita) with brioche for breakfast-lunch is the Sicilian summer ritual; followed by arancino (€2.50)",
            "14:00 — Walk down to Isola Bella nature reserve (€5 entry) — a tiny island connected to the mainland by a pebble strip; snorkel the crystal-clear water or sunbathe on the rocks",
            "17:00 — Free viewpoint from Villa Comunale public gardens — one of the world's finest views: Etna, the Ionian Sea, and Taormina's rooftops",
            "20:00 — Dinner in Taormina: fresh pasta with pistachios and prawns (€13), then last bus down to station and train back to Catania",
          ],
          cost: "€35–45 (transport, theatre, beach entry, meals)",
        },
        {
          day: "Day 7",
          title: "Catania & Departure",
          items: [
            "07:30 — Catania fish market (La Pescheria) at dawn — one of the most theatrical scenes in Italy; swordfish heads, live sea urchins, and fishmongers shouting bids over the stalls behind the cathedral",
            "09:00 — Catania Cathedral and Fontana dell'Elefante (the elephant is Catania's symbol, free to visit) — the city's baroque centre survived the 1693 earthquake that flattened most of eastern Sicily",
            "10:30 — Shopping for Sicilian food souvenirs: pistachio cream from Bronte (€8/jar), dried oregano, tuna in olive oil, and almond granita mix — all available at La Pescheria market stalls",
            "12:00 — Final lunch: pizza al taglio (by the slice) at a Catania rosticceria for €5; Sicilian pizza is thicker and more focaccia-like than Neapolitan",
            "14:00 — Transfer to Catania Fontanarossa Airport (CTA) by taxi (€15) or Bus Alibus (€4, 15 minutes)",
          ],
          cost: "€25–35 (market, souvenirs, final meal, airport transfer)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€110–160/day",
      days: [
        {
          day: "Day 1",
          title: "Palermo Arrival & Arab-Norman Heritage",
          items: [
            "13:00 — Fly into Palermo (PMO) and taxi to a 3-star hotel in the historic centre (€70–100/night); the Albergheria or Kalsa districts put you within walking distance of everything",
            "15:00 — Palazzo dei Normanni and Cappella Palatina (€12) — Sicily's Arab-Norman palace houses the most exquisite private chapel in Europe; the gilded mosaics covering every surface were made by Byzantine craftsmen for Norman kings in the 12th century",
            "17:30 — Ballarò Market for late afternoon street food: sample arancini con ragù, panelle, and sfincione (Sicilian pizza) — budget €10 for a full street food tour",
            "20:00 — Dinner at Osteria dei Vespri in the Kalsa (€35/pp) — one of Palermo's best restaurants for contemporary Sicilian cuisine; the tuna with wild fennel and the cassata dessert are exceptional",
          ],
          cost: "€130–160 (hotel, Cappella, dinner, transport)",
        },
        {
          day: "Day 2",
          title: "Monreale Cathedral & Cefalù",
          items: [
            "09:00 — Bus from Palermo to Monreale (30 min, €1.40) — Monreale Cathedral (€4) contains the largest intact Byzantine mosaic cycle in the world; 130m of golden mosaics depicting the Old and New Testaments above a Norman cathedral; plan 2 hours minimum",
            "12:00 — Return to Palermo and take the train to Cefalù (1 hour, €5); check in to a B&B in the medieval centre (€80–100/night with sea view)",
            "14:00 — Lunch at a restaurant on the Cefalù lungomare (seafront) — fresh grilled tuna or swordfish with capers for €20/pp",
            "16:00 — Cathedral visit, then afternoon swimming at Cefalù beach (free public access); sunset hiking to La Rocca fortress (free, 45 min) for panoramic views",
            "20:30 — Dinner at La Brace in Cefalù: wood-fired fish and pasta with local seafood (€30/pp)",
          ],
          cost: "€140–160 (hotel, transport, cathedral, meals)",
        },
        {
          day: "Day 3",
          title: "Valley of the Temples by Night",
          items: [
            "08:00 — Drive or bus from Cefalù to Agrigento (2.5 hours, bus €12 or rental car); check in to an agriturismo near the temples (€70–90/night with breakfast)",
            "10:00 — Valley of the Temples morning visit (€10) — arrive early before tour groups; the golden limestone glows in the morning sun and the Temple of Concordia is virtually empty before 11am",
            "13:00 — Lunch at Ristorante Kokalos near the temples: Sicilian classics and local Grecanico white wine (€30/pp)",
            "15:00 — Museo Regionale Archeologico (€8) — the Telamon figure and the Ephebe of Agrigento are among the finest Greek sculptures outside Athens",
            "20:00 — Evening ticket to Valley of the Temples (€10 extra, Tue–Sun evenings July–August, check schedule) — the illuminated temples at night with the sound of crickets is one of Italy's most powerful experiences",
          ],
          cost: "€130–150 (transport, hotels, meals, museums)",
        },
        {
          day: "Day 4",
          title: "Siracusa & Ortygia Deep Dive",
          items: [
            "09:00 — Drive or bus to Siracusa (2 hours from Agrigento via Gela or 1.5 hours from Catania); check in to a boutique hotel in Ortygia (€90–120/night)",
            "11:00 — Private walking tour of Ortygia island (2 hours, €40/pp via local guides) — covers the Greek temple repurposed as a cathedral, the freshwater Arethusa spring on the seafront, and the Jewish quarter with its medieval mikve (ritual bath)",
            "13:30 — Lunch at Don Camillo (€35/pp) — Siracusa's most celebrated traditional restaurant; the pasta with sea urchin and the swordfish carpaccio are the dishes to order",
            "16:00 — Neapolis Archaeological Park: Greek theatre, Roman amphitheatre, and the Ear of Dionysius; spring performances of Greek tragedy in the ancient theatre are a special cultural experience (€16 park + performance tickets)",
            "20:00 — Sunset aperitivo on the Ortygia waterfront; dinner at Sicilia in Bocca (€30/pp) with views toward the Ionian Sea",
          ],
          cost: "€150–170 (hotel, tour, meals, park)",
        },
        {
          day: "Day 5",
          title: "Etna Private 4WD Tour",
          items: [
            "08:00 — Private Etna 4WD tour from Catania (half-day, €60–80/pp including guide and vehicle) — access the north slope craters at 3,000m that are only reachable by off-road vehicle; guides explain the 2001 and 2002 eruption lava fields",
            "12:00 — Wine tasting at an Etna DOC winery on the volcano's slopes (Cornelissen, Passopisciaro, or Benanti — €25 tasting with 4 wines) — volcanic soil wines from Nerello Mascalese grapes are now among Italy's most collectible",
            "14:30 — Lunch at the winery or a nearby agriturismo: Sicilian antipasti, pasta, and Etna wine (€25/pp included in some winery tours)",
            "17:00 — Return to Catania; check in to a 3-star hotel (€80–100/night)",
            "20:00 — Dinner in Catania's vibrant nightlife district around Via Etnea: fresh pasta for €14, local craft beer, and the city's excellent bar scene",
          ],
          cost: "€150–170 (private tour, winery, hotel, meals)",
        },
        {
          day: "Day 6",
          title: "Taormina Full Day",
          items: [
            "09:00 — Train from Catania to Taormina-Giardini (45 min, €4), then cable car up to town centre (€3 each way, much more fun than the bus)",
            "10:00 — Teatro Greco di Taormina (€10) at opening — the views toward Etna and the Ionian Sea from the upper tiers of the theatre are at their clearest in the morning",
            "12:00 — Lunch on Corso Umberto at Tischi Toschi: creative Sicilian dishes in an elegant setting (€30/pp)",
            "14:00 — Isola Bella nature reserve and snorkelling (€5 access, rent snorkel gear €5); the bay below Taormina has outstanding water clarity",
            "17:00 — Luxury shopping: handmade Sicilian ceramics, limoncello, and pistachio products along Corso Umberto (budget €50–100 for souvenirs)",
            "20:30 — Dinner in Taormina at Ristorante Al Duomo (€40/pp) with views of the cathedral square; fresh-caught fish from the day's market",
          ],
          cost: "€130–150 (transport, theatre, meals, beach)",
        },
        {
          day: "Day 7",
          title: "Catania Discovery & Departure",
          items: [
            "07:30 — Catania La Pescheria fish market at dawn (free) — the energy and colour of this baroque-square fish market is one of the great Italian travel experiences",
            "09:30 — Catania Cathedral, Ursino Castle museum (€8), and Benedictine Monastery of San Nicolò l'Arena (€6) — a UNESCO World Heritage ensemble of baroque architecture",
            "12:00 — Final Sicilian lunch at a trattoria on Via Etnea: pasta alla norma and cannolo for dessert (€18/pp)",
            "14:30 — Bus or taxi to Catania Airport CTA (€4–15) for departing flights",
          ],
          cost: "€100–130 (museums, meals, airport transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€280–450/day",
      days: [
        {
          day: "Day 1",
          title: "Palermo Palazzo Arrival",
          items: [
            "13:00 — Private transfer from Palermo Airport to Palazzo Branciforte or Grand Hotel Villa Igiea (€60 private transfer) — historic palazzo hotels in Palermo offer Arab-Norman decor and genuinely Sicilian grandeur",
            "15:00 — Private guide for Cappella Palatina and Palazzo dei Normanni (€100 for 2 hours) — private access allows extended time in the royal apartments normally closed to the public",
            "18:00 — Aperitivo at Villa Igiea terrace overlooking the Bay of Palermo: Marsala spritz and Sicilian antipasti (€20/person)",
            "20:30 — Dinner at Bye Bye Blues (1 Michelin star, Mondello, €120/pp) — 30-minute taxi from centre; Sicily's first female Michelin-starred chef serves hyperlocal seafood and vegetables in a converted villa garden",
          ],
          cost: "€350–500 (hotel, private guide, dinner, transfer)",
        },
        {
          day: "Day 2",
          title: "Monreale & Private Cefalù",
          items: [
            "09:00 — Private driver to Monreale Cathedral for a pre-opening access visit (arranged through hotel, €150 for driver + private entrance) — experience the 130m of golden mosaics without other tourists",
            "12:00 — Private driver to Cefalù; check in to Astro Hotel Cefalù or La Plumeria Hotel (€200–300/night with sea view terrace)",
            "14:00 — Lunch at La Brace restaurant, Cefalù (€50/pp) with a Sicilian white wine from Tasca d'Almerita estate",
            "16:00 — Private boat trip along the Cefalù coastline to sea caves and isolated coves (€150 for 2–3 hours) — access beaches with no road access",
            "20:30 — Dinner on the hotel terrace with private chef tasting menu of Sicilian seasonal ingredients (€90/pp at some boutique properties) or at Ostaria del Duomo (€50/pp)",
          ],
          cost: "€400–600 (hotel, private driver, boat, meals)",
        },
        {
          day: "Day 3",
          title: "Valley of the Temples — Private Dawn",
          items: [
            "06:00 — Private pre-dawn access to Valley of the Temples arranged through specialist tour operators (€200/pp) — sunrise over the Temple of Concordia with no other visitors; only available through advance specialist booking",
            "09:00 — Private archaeologist guide for the full valley and museum (€100 for 3 hours) — access to storage areas with artefacts not on public display",
            "13:00 — Lunch at Ristorante Kokalos (€40/pp) with aged Grecanico and Nero d'Avola wines",
            "15:00 — Private driver to Ragusa Ibla (2 hours) — one of Sicily's most beautiful baroque hill towns; stay at Eremo della Giubiliana (€250–350/night), a converted medieval hermitage",
            "20:00 — Dinner at Ristorante Duomo in Ragusa Ibla (2 Michelin stars, €180/pp) — Chef Ciccio Sultano's creative Sicilian cuisine is considered among the best in Italy; book 2–3 months ahead",
          ],
          cost: "€500–700 (private access, hotel, Michelin dinner)",
        },
        {
          day: "Day 4",
          title: "Siracusa Private Ortygia",
          items: [
            "09:00 — Private driver from Ragusa to Siracusa (45 min); check in to Henry's House hotel in Ortygia (€150–200/night with sea view balcony)",
            "11:00 — Private boat tour of the Porto Grande harbour and the ancient Latomie stone quarries accessible only from the sea (€150, 2 hours) — Siracusa from the water reveals the scale of the ancient city",
            "13:30 — Lunch at Ristorante Caseificio Borderi: fresh ricotta, local pasta, and Sicilian DOC wines in an ageing cheese cellar (€40/pp)",
            "16:00 — Private guided tour of Neapolis Archaeological Park including access to normally-restricted areas of the Greek theatre (€80 private guide)",
            "20:00 — Sunset aperitivo at the Fonte Aretusa fountain; dinner at Don Camillo (€60/pp), Siracusa's finest traditional restaurant",
          ],
          cost: "€400–550 (hotel, private tours, meals)",
        },
        {
          day: "Day 5",
          title: "Private Etna Summit Expedition",
          items: [
            "07:00 — Private Etna summit expedition with volcanologist guide (€150/pp, half-day) — ascend to 3,300m on the active summit craters via 4WD and on foot; the guide explains the current eruption cycle and geology",
            "12:00 — Wine lunch at Planeta or Benanti winery on the Etna DOC slopes (€50 private tasting and lunch) — these estates produce wines that now appear on Michelin-starred restaurant lists across Europe",
            "15:00 — Check in to Monaci delle Terre Nere agriturismo on the Etna slopes (€250–350/night) — a restored lava-stone monastery surrounded by organic vineyards with Etna visible from every window",
            "20:00 — Dinner at the hotel's own restaurant using farm-grown and foraged Etna ingredients (€70/pp included in some packages)",
          ],
          cost: "€450–600 (private Etna tour, winery, hotel, dinner)",
        },
        {
          day: "Day 6",
          title: "Taormina — Greek Theatre & Cliffside Villa",
          items: [
            "09:00 — Private driver from Monaci delle Terre Nere to Taormina (30 min); check in to Villa Ducale or San Domenico Palace (Four Seasons, €400–800/night) — the San Domenico was a 15th-century monastery with terraced gardens above the Ionian Sea",
            "10:30 — Private guided Teatro Greco tour (€80/pp) including the backstage areas and curator commentary on the Greek tragedy tradition still performed here; the theatre has hosted performances since 300 BC",
            "13:00 — Lunch at Otto Geleng at the San Domenico Palace: contemporary Sicilian cuisine on the cliff terrace with Etna filling the entire horizon (€80/pp)",
            "15:30 — Private boat from Mazzarò bay below Taormina to Isola Bella and the hidden sea caves of the Taormina coast (€200, 2 hours)",
            "20:30 — Dinner at Ristorante Vicolo Stretto (€60/pp) in the medieval centre; or a private sunset concert in the Greek theatre during festival season (June–July)",
          ],
          cost: "€600–900 (luxury hotel, private tours, boat, meals)",
        },
        {
          day: "Day 7",
          title: "Final Catania & Departure",
          items: [
            "08:00 — Private driver to Catania (45 min); private guide for a Catania baroque walking tour including the fish market, Cathedral, and Benedictine Monastery (€100, 2 hours)",
            "11:00 — Shopping at Catania's best artisan shops: handmade Sicilian ceramics, Bronte pistachio products, and aged Ragusano DOP cheese for gifts",
            "13:00 — Final lunch at Osteria Antica Marina (€40/pp) next to La Pescheria fish market — fresh catch of the day cooked simply with Sicilian olive oil and capers",
            "15:30 — Private transfer to Catania Fontanarossa Airport CTA (€30)",
          ],
          cost: "€300–450 (private guide, lunch, souvenirs, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€15–25 (hostels & guesthouses)",
      food: "€15–20 (markets, street food, trattorias)",
      transport: "€8–12 (buses & trains)",
      activities: "€10–15 (select sites)",
      total: "€45–65/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€70–100 (B&Bs, 3-star hotels)",
      food: "€35–50 (restaurants + wine)",
      transport: "€15–25 (trains + occasional taxi)",
      activities: "€25–40 (main sites + 1 tour)",
      total: "€110–160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200–500 (palazzo hotels, agriturismi)",
      food: "€100–200 (fine dining + Michelin)",
      transport: "€50–100 (private driver)",
      activities: "€80–200 (private guides + exclusive access)",
      total: "€280–450+/day",
    },
  ],
  mistakes: [
    {
      icon: "🌡️",
      title: "Visiting in July and August",
      desc: "Sicily in summer hits 38–42°C with intense sun and crowds at every major site. April–June and September–October offer perfect 20–28°C temperatures, fewer tourists at the Valley of the Temples, and the sea is still warm enough to swim.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚗",
      title: "Not renting a car",
      desc: "Sicily's bus network is slow and infrequent outside main cities. A rental car (€30–40/day) unlocks the Valley of the Temples, remote beaches, Etna's north slope, and the baroque triangle of Ragusa, Noto, and Modica that most visitors never reach.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏛️",
      title: "Skipping Agrigento and the Valley of the Temples",
      desc: "Most tourists stay in Palermo or Taormina and miss the Valley of the Temples entirely. It's 2.5 hours from Palermo and contains Greece's best-preserved ancient city outside Greece itself. It justifies an entire day minimum.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌋",
      title: "Only seeing Etna from below",
      desc: "Etna looks dramatic from Taormina but the real experience requires going up. The cable car to 2,500m followed by a guided hike to the summit craters at 3,300m puts you on the rim of an active volcano — one of Europe's most remarkable experiences.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍕",
      title: "Eating tourist-menu pizza when Sicily has extraordinary food",
      desc: "Sicilian cuisine is one of Italy's most sophisticated — Arab-influenced sweet-and-sour flavours, north African spices, the freshest Mediterranean seafood, and ingredients like Bronte pistachios, Pachino tomatoes, and Trapani salt. Order pasta alla norma, arancino, granita, and fresh-caught tuna rather than defaulting to pizza.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🚌",
      title: "Use FlixBus and Autolinee Siciliane for intercity routes",
      desc: "FlixBus connects Palermo, Catania, Agrigento, and Siracusa for €8–15 each way. Book at least 2 days ahead. Trenitalia trains are faster on the Palermo–Catania route but buses serve more destinations including Agrigento directly. Book guided Sicilian tours at https://www.getyourguide.com/s/?q=Sicily&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍋",
      title: "Eat granita for breakfast",
      desc: "Sicilian granita bears no resemblance to the watery ice you know elsewhere. It's a dense, frozen flavoured ice served with a fresh brioche for dipping. Almond, pistachio, lemon, and coffee are the classic flavours. Order it at any bar before 10am for €3 — this is how Sicilians start the day.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏛️",
      title: "Visit the Valley of the Temples at opening time (8:30am) or in the evening",
      desc: "The Valley of the Temples gets very crowded 10am–4pm. Arriving at opening (8:30am) or visiting on Tuesday–Sunday evenings in summer (when it stays open until midnight) means you have the 2,500-year-old temples nearly to yourself.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍷",
      title: "Drink Etna DOC wines and Nero d'Avola",
      desc: "Sicily produces some of Italy's most exciting wines and they're cheap locally. Nero d'Avola (a powerful red from the southeast) and Etna DOC (volcanic-mineral whites and reds from the volcano slopes) cost €8–12 in restaurants compared to €30+ for the same quality in Milan or Rome.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How many days do I need for Sicily?",
      a: "Seven days is the minimum to do Sicily justice — Palermo, Cefalù, Agrigento, Siracusa, Etna, and Taormina all deserve at least half a day each and they're spread across a large island. Ten days is ideal if you want to add the Baroque Triangle (Ragusa, Noto, Modica) or the Aeolian Islands by ferry.",
    },
    {
      q: "Is it safe to hike on Etna?",
      a: "Yes, with a licensed guide above 2,900m (obligatory by Italian law). The guide monitors wind direction, gas emissions, and proximity to active vents. Etna erupts frequently in small ways (1–2 times per year) but the eruptions are usually effusive rather than explosive and guides have decades of experience reading the mountain's behaviour.",
    },
    {
      q: "What is the best base for exploring Sicily?",
      a: "Catania is the most practical base — it has the international airport (CTA), fast trains to Taormina (45 min) and Siracusa (1 hour), and is the gateway to Etna. Palermo is best for the west of the island (Cefalù, Monreale, Agrigento). Many visitors fly in to one and out of the other for a natural one-way route.",
    },
    {
      q: "Do I need a rental car in Sicily?",
      a: "For the Valley of the Temples, the south coast, Ragusa, and Etna's north slope, a car is strongly recommended. Palermo, Catania, Siracusa, Cefalù, and Taormina can all be reached by train or bus. If your itinerary sticks to those cities, you can manage without a car, but you will miss the remote beaches and secondary baroque towns that are Sicily's hidden gems.",
    },
  ],
  combineWith: ["rome-5-days", "venice-4-days", "cinque-terre-3-days"],
  relatedSlugs: ["rome-5-days", "venice-4-days", "cinque-terre-3-days", "florence-4-days"],
  galleryQuery: "sicily landscape temples etna taormina italy",
};

export const metadata: Metadata = {
  title: "Sicily in 7 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 7-day Sicily itinerary — Etna volcano, Valley of the Temples, Taormina Greek theatre, Palermo street food, and Cefalù beaches. Budget €45/day to luxury palazzo hotels.",
  keywords: [
    "Sicily itinerary",
    "Sicily 7 days",
    "Sicily travel guide 2026",
    "Sicily budget travel",
    "Etna volcano hike",
    "Valley of the Temples Agrigento",
    "Taormina Greek theatre",
    "Palermo street food",
    "Sicily visa Indian passport",
  ],
  openGraph: {
    title: "Sicily in 7 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Etna volcano, Valley of the Temples, Taormina, Palermo street food, and Cefalù beaches — Sicily in 7 days from €45/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/sicily-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Sicily in 7 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Sicily in 7 Days",
          item: "https://www.incredibleitinerary.com/blog/sicily-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Sicily",
      description:
        "Sicily, Italy — Mount Etna, Valley of the Temples, Taormina Greek theatre, Palermo street food, and the Mediterranean's most dramatic island.",
      geo: { "@type": "GeoCoordinates", latitude: 37.6, longitude: 14.0 },
    },
  ],
};

export default function SicilyPage() {
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
