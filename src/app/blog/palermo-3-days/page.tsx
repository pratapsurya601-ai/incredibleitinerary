import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Palermo",
  country: "Sicily",
  countryFlag: "\uD83C\uDDEE\uD83C\uDDF9",
  slug: "palermo-3-days",
  heroQuery: "palermo sicily ballaró street market cathedral",
  heroAlt: "Palermo's Ballaro street market with colourful stalls and vendors beneath Baroque church spires",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Palermo is one of the most layered cities in the Mediterranean. Twelve centuries of Arab, Norman, Byzantine, Spanish, and Bourbon rule collided and fused here in a way that produced the Cappella Palatina — the most extraordinary example of Islamic-Christian art in the world — then left a street market that still operates as it did in the 9th century. The Ballaro market is more North Africa than Europe: swordfish heads, piles of couscous spices, and vendors calling out in a Sicilian dialect so thick it barely resembles Italian. Arancini bigger than a tennis ball, panelle chickpea fritters, and Marsala wine from vines 10 km west of the city complete a culinary portrait unlike anything else in Italy. Three days covers the city and a day trip to Cefalu and Mondello that makes the fourth day inevitable.",
  stats: {
    duration: "3 Days",
    budgetFrom: "EUR 55",
    bestMonths: "Apr-Jun or Sep-Oct",
    airport: "PMO",
  },
  toc: [
    { id: "visa", emoji: "\uD83D\uDEC2", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
    { id: "budget", emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "\uD83D\uDCA1", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "\uD83D\uDCC5", label: "Day 1 — Ballaro & Cappella Palatina" },
    { id: "day2", emoji: "\uD83D\uDCC5", label: "Day 2 — Catacombs & Mondello" },
    { id: "day3", emoji: "\uD83D\uDCC5", label: "Day 3 — Cefalu Day Trip" },
  ],
  visa: [
    {
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C) — Italy"],
        ["Processing", "15–30 business days"],
        ["Fee", "EUR 80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Italian Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Apply 6–8 weeks before travel. Biometric appointment required. Italy is a popular Schengen destination so appointments book up fast."],
      ],
    },
    {
      flag: "\uD83C\uDDFA\uD83C\uDDF8",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (EUR 7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free post-Brexit but subject to 90/180 rule. ETIAS online registration takes under 10 minutes."],
      ],
    },
  ],
  plans: [
    {
      label: "\uD83D\uDCB0 Budget",
      sub: "EUR 55–75/day",
      days: [
        {
          day: "Day 1",
          title: "Ballaro Market, Cappella Palatina & Street Food",
          items: [
            "08:30 — Ballaro market at opening: the oldest continuously operating street market in Palermo (9th century Arab origins) stretches across the Albergheria quarter; arrive early for the full theatre of vendors selling tuna, swordfish, sea urchins, blood oranges, and dried spices in mountains",
            "10:00 — Breakfast at a Ballaro bar: cannoli ricci (fresh-filled shell cannoli) for EUR 1.50 each and a macchiato for EUR 1; eat standing at the counter where a plate costs EUR 0.50 less than table service",
            "11:00 — Cappella Palatina inside the Palazzo dei Normanni (entry EUR 12): the most important Norman-Arab-Byzantine monument in the world; the ceiling is made of 9,000 honeycomb muqarnas carved by Muslim craftsmen, the walls are covered with Byzantine gold mosaics, and the floor is Arab inlaid marble — all commissioned by Roger II in 1130",
            "13:30 — Street food lunch in the Ballaro area: arancini (fried rice balls stuffed with ragu, peas, and mozzarella) for EUR 2–2.50 each from a rosticceria; panelle (chickpea fritter in a sesame roll) for EUR 1.50; a full street lunch for EUR 5–7",
            "16:00 — Palermo Cathedral (free exterior, EUR 3 for treasury and roof): the exterior is a palimpsest of Norman, Arab, and Baroque additions across 900 years; the treasury holds the imperial crown of Constance of Aragon",
            "19:30 — Aperitivo at a bar near Piazza Bellini: a glass of local Nero d'Avola red for EUR 4 with free antipasto snacks; Sicilian aperitivo culture provides enough food to skip a separate starter",
            "21:00 — Dinner at a Kalsa quarter trattoria: pasta con le sarde (pasta with sardines, wild fennel, pine nuts, raisins, and saffron, the defining Palermo pasta) for EUR 10–12",
          ],
          cost: "EUR 30–45 (entry fees, street food, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Catacombs, Monreale & Mondello Beach",
          items: [
            "09:00 — Catacombs of the Capuchins (entry EUR 3): 8,000 mummified bodies displayed in corridors by profession and gender, from the 17th to 20th century; the most bizarre and strangely peaceful visitor experience in Italy; the mummified child Rosalia Lombardo in a glass casket is the most photographed mummy in the world",
            "11:30 — Local bus to Monreale (Bus 389 from Piazza Independenza, EUR 1.40): the cathedral at Monreale contains 6,340 square metres of Byzantine gold mosaics covering the entire interior; larger than any single mosaic cycle in the world, and better preserved than Ravenna; free entry with a EUR 2 fee for the cloisters",
            "14:00 — Lunch in Monreale village: pasta al forno (baked pasta with meat ragu) at a no-frills trattoria for EUR 8–10 before returning to Palermo",
            "16:00 — Bus 806 from Piazza Politeama to Mondello beach (EUR 1.40, 20 min): Palermo's crescent-shaped bay with clear water, an art nouveau bathhouse (stabilimento), and an excellent lido culture; outside July-August the water is swimmable and the beach is half-empty",
            "19:00 — Return to Palermo and dinner at the Vucciria market area: the market is quiet by evening but the bars and restaurants around it serve excellent raw sea urchin (EUR 5 for a half-dozen), grilled swordfish, and cold Birra Messina",
          ],
          cost: "EUR 25–40 (entry fees, buses, lunch, beach)",
        },
        {
          day: "Day 3",
          title: "Cefalu Day Trip & Marsala Wine",
          items: [
            "08:30 — Train from Palermo Centrale to Cefalu (EUR 5.30, 1 hour): the medieval fishing town beneath La Rocca cliff is the most photogenic place in northern Sicily; buy return tickets at the station machine",
            "10:00 — Cefalu Cathedral (free): one of the finest Norman cathedrals in Sicily with extraordinary 12th-century mosaic of Christ Pantocrator in the apse; smaller than Monreale but more intimate and perfectly preserved",
            "11:30 — Climb La Rocca (EUR 2, 40 min up): the fortress above the town with 360-degree coastal views; the walk passes an ancient Greek Diana temple built into the Norman fortifications",
            "13:30 — Lunch in Cefalu port area: grilled fresh-caught orata (sea bream) with caponata (sweet-and-sour aubergine relish) for EUR 12–15 at a portside trattoria",
            "16:00 — Return train to Palermo and walk the Quattro Canti crossroads: the Baroque four-corners intersection built in 1620 as the symbolic heart of Spanish Palermo; each of the four curved facades has a fountain, a Viceroy, and a patron saint of the city's four quarters",
            "19:30 — Final dinner at a Palermo wine bar: a Marsala wine flight (EUR 8 for 3 glasses, dry to sweet) with arancini and local cheese and salumi board (EUR 12); close with a granita al limone and brioche for EUR 3",
          ],
          cost: "EUR 30–45 (train, entry, lunch, wine dinner)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "EUR 130–200/day",
      days: [
        {
          day: "Day 1",
          title: "Guided Ballaro, Cappella Palatina & Norman Palace",
          items: [
            "08:00 — Guided Ballaro market food tour (EUR 45, 2 hours): a local chef guide leads a morning through the market with tastings of arancini, stigghiola (grilled intestines, an acquired taste), pani ca meusa (spleen sandwich), panelle, and sfincione (Sicilian thick-crust pizza); includes stops at specific vendors with 9th-century family histories",
            "11:00 — Guided Cappella Palatina and Norman Palace tour (EUR 70 per person with private guide): a historian of Islamic-Christian art explains the theological programme of the mosaics — why the Pantocrator mosaic in the apse faces Christ in Glory above the throne, and how the Arab craftsmen encoded Islamic geometry in the Christian cathedral",
            "14:00 — Lunch at Trattoria Ai Cascinari in the Capo quarter (EUR 25–35/pp): a family-run institution famous for pasta alla norma (aubergine, tomato, ricotta salata) and caponata; no tourists, reservations recommended",
            "17:00 — Palermo Cathedral treasury and roof tour (EUR 3): the treasury holds the jewelled crowns and sarcophagi of the Hauteville dynasty, founders of the Kingdom of Sicily",
            "21:00 — Dinner at Osteria dei Vespri facing Piazza Croce dei Vespri (EUR 50–65/pp): Palermo's finest traditional Sicilian restaurant in a 17th-century palazzo; the risotto al nero di seppia and the grilled swordfish with salmoriglio herb dressing are exceptional",
          ],
          cost: "EUR 150–200 (guided tours, meals, hotel)",
        },
        {
          day: "Day 2",
          title: "Catacombs, Monreale Private Tour & Mondello",
          items: [
            "09:00 — Catacombs of the Capuchins with an art historian guide (EUR 60 for private 90-minute session): scholarly explanation of the embalming methods, the social hierarchy of display, and the fascinating backstory of Rosalia Lombardo, embalmed in 1920 by a method whose formula was only deciphered in 2009",
            "11:30 — Private taxi to Monreale and guided cathedral interior (EUR 100 combined transport and guide): a Byzantine art expert explains the iconographic programme across all 130 scenes from the Old and New Testament covering the walls",
            "14:00 — Lunch at Taverna del Pavone in Monreale village (EUR 30–40/pp): the terrace overlooks the Conca d'Oro valley; try the pasta al forno and cannoli dessert made to order with fresh ricotta",
            "16:30 — Mondello beach with a private lido day bed (EUR 15–20): the art nouveau stabilimento offers sunbeds, changing rooms, and a beach bar serving granita and fresh-squeezed arancini",
            "21:00 — Dinner at a Mondello seafood restaurant: grilled gamberi rossi (Sicilian red shrimp, some of the sweetest in the Mediterranean) with a carafe of Grillo white wine (EUR 40–50/pp)",
          ],
          cost: "EUR 160–210 (guides, transport, meals, lido)",
        },
        {
          day: "Day 3",
          title: "Cefalu & Marsala Wine Experience",
          items: [
            "08:30 — First-class train to Cefalu (EUR 8.60, reserved seat): comfortable and air-conditioned with sea views from the left window seat on the outward journey",
            "10:00 — Cefalu Cathedral and La Rocca with a local guide (EUR 50): a Cefalu-born historian explains how the Roger II built the cathedral as his mausoleum in 1131, the political message of the Pantocrator mosaic, and the pre-Greek megalithic walls still visible on La Rocca",
            "13:00 — Lunch at Osteria del Duomo in Cefalu (EUR 35–45/pp): the terrace directly faces the cathedral towers; try the rigatoni al ragù di cernia (pasta with grouper ragu) and finish with pistachio granita",
            "16:00 — Return to Palermo; private tasting at a Marsala wine producer with hotel transport (EUR 80 including guided cellar tour and 5-wine flight): the Marsala DOC zone is 60 km west of the city and several producers — Florio, Pellegrino, De Bartoli — offer afternoon tastings arranged through quality hotels",
            "21:00 — Final dinner at Ferro di Cavallo near the Teatro Massimo (EUR 30–40/pp): the most famous affordable restaurant in Palermo, open since 1944; the penne all'arrabbiata and grilled mixed fish are the signature dishes; book 24 hours ahead",
          ],
          cost: "EUR 180–240 (guide, Marsala tasting, meals, train)",
        },
      ],
    },
    {
      label: "\uD83D\uDC8E Luxury",
      sub: "EUR 350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Heritage Hotel Arrival & Private Norman Palermo",
          items: [
            "13:00 — Check in to Palazzo Planeta, Hotel Villa Igiea, or Grand Hotel Wagner (EUR 300–600/night): Palermo's grand belle-epoque hotels face the sea or the historic centre; Villa Igiea was designed by Ernesto Basile in 1900 for the Florio dynasty, the Rockefellers of Sicilian industry",
            "15:00 — Private scholarly tour of the Cappella Palatina and Royal Apartments with a professor from Palermo University (EUR 200 for 3 hours): exclusive access to the Roger Hall frescoes in the Royal Palace usually closed to general visitors, with expert explanation of the Norman-Arab synthesis",
            "18:30 — Aperitivo on the terrace of Villa Igiea overlooking the Tyrrhenian Sea (EUR 18 per drink): the Liberty-style terrace with bougainvillea and citrus trees is the most beautiful aperitivo setting in the city",
            "21:00 — Dinner at Bye Bye Blues (1 Michelin star, Mondello, EUR 100–130/pp): the finest restaurant in the Palermo area; Chef Patrizia di Benedetto sources exclusively from Sicilian fishermen and farmers; the tasting menu changes daily based on the morning catch",
          ],
          cost: "EUR 450–600 (luxury hotel, private tour, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Monreale, Catacombs & Cooking Class",
          items: [
            "09:00 — Private car and guide to Monreale for pre-opening exclusive access (EUR 250 via hotel): the cathedral canons arrange entry before the public doors open at 8am; the silence inside with 6,340 sq m of gold mosaics lit only by morning sun through the clerestory windows is extraordinary",
            "12:00 — Private Catacombs tour with an art-preservation expert (EUR 150): a scholarly explanation of the conservation challenges, the mummification techniques, and the social history of each corridor — military, priest, lawyer, noble, infant",
            "14:30 — Lunch at Osteria dei Vespri (EUR 60/pp): Palermo's finest tasting menu of Sicilian classics elevated to fine dining; the wine pairing adds EUR 35 per person with bottles from Planeta, Benanti, and COS wineries",
            "17:00 — Sicilian cooking class with a private chef at a palazzo kitchen (EUR 150/person): learn to make arancini from scratch, pasta con le sarde, caponata, cannoli with hand-filled shells, and cassata cake over a 3-hour session",
            "21:00 — Dinner at Osteria Mercede (EUR 70–90/pp): intimate 15-seat restaurant in a converted 18th-century palazzo with a modern-Sicilian tasting menu and exceptional natural wine list from small island producers",
          ],
          cost: "EUR 500–700 (private access, cooking class, fine dining)",
        },
        {
          day: "Day 3",
          title: "Private Marsala & Cefalu Helicopter Option",
          items: [
            "08:00 — Helicopter or private seaplane to Cefalu from Boccadifalco aerodrome (EUR 400–600 per aircraft, 4–6 people): 15-minute coastal flight over the Gulf of Palermo with La Rocca visible from the air; return by water taxi or private boat",
            "11:00 — Private yacht afternoon along the Palermo Riviera (EUR 400–600 half-day charter for 6): sail the coast between Mondello and Capo Zafferano with snorkelling in the marine reserve off Isola delle Femmine; lunch served on board with Sicilian charcuterie, fresh anchovies, and chilled Etna Bianco",
            "16:00 — Private Marsala estate tour at Tenuta Whitaker or Marco de Bartoli (EUR 200 including transport from Palermo and 7-wine vertical tasting): the de Bartoli family single-handedly revived dry Marsala after decades of industrial production; their Vecchio Samperi is among Italy's most distinctive wines",
            "21:00 — Final dinner at a private chef's table experience arranged through hotel concierge (EUR 200/pp): a Sicilian chef prepares a 9-course dinner in your suite or in a palazzo courtyard; menus built around that morning's Ballaro market purchase",
          ],
          cost: "EUR 700–1,000 (helicopter, yacht, Marsala, chef's table)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "\uD83D\uDCB0 Budget",
      accommodation: "EUR 20–35 (hostel or budget B&B in historic centre)",
      food: "EUR 15–25 (street food, milk bars, local trattoria)",
      transport: "EUR 3–8 (city bus and train to Cefalu)",
      activities: "EUR 15–20 (Cappella Palatina, catacombs, Monreale)",
      total: "EUR 55–75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "EUR 80–140 (boutique hotel or palazzo B&B)",
      food: "EUR 50–80 (trattorias, wine bars, guided food tour)",
      transport: "EUR 15–30 (private taxi and first-class train)",
      activities: "EUR 60–100 (private guides and Marsala tasting)",
      total: "EUR 130–200/day",
    },
    {
      tier: "\uD83D\uDC8E Luxury",
      accommodation: "EUR 300–600 (Villa Igiea or Palazzo Planeta)",
      food: "EUR 150–250 (Michelin dining and chef's table)",
      transport: "EUR 100–400 (private car, helicopter, yacht)",
      activities: "EUR 200–400 (private palace access, cooking class)",
      total: "EUR 350–600/day",
    },
    {
      tier: "\uD83C\uDF4A Street Food Traveller",
      accommodation: "EUR 25–45 (budget guesthouse)",
      food: "EUR 20–35 (pure street food and market eating)",
      transport: "EUR 3–10 (bus and walking)",
      activities: "EUR 12–18 (self-guided entry fees only)",
      total: "EUR 60–90/day",
    },
    {
      tier: "\uD83C\uDF77 Wine & Gourmet",
      accommodation: "EUR 100–200 (wine-country agriturismo option)",
      food: "EUR 80–120 (restaurants and wine tastings)",
      transport: "EUR 40–80 (car hire for winery visits)",
      activities: "EUR 50–100 (Marsala cellar tours, cooking class)",
      total: "EUR 250–450/day",
    },
  ],
  mistakes: [
    {
      icon: "\uD83C\uDF55",
      title: "Eating Near the Teatro Massimo Without Research",
      desc: "The streets immediately around the Teatro Massimo opera house are lined with tourist traps selling mediocre pasta at EUR 18 per plate. The real Palermo food is at Ballaro market (arancini EUR 2.50), at Vucciria in the evening, and at untouristy trattorias in the Kalsa and Capo quarters. Ask your guesthouse owner where they eat.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "\u2600\uFE0F",
      title: "Visiting in July and August",
      desc: "Palermo in high summer is ferociously hot — regularly 36–40 degrees Celsius on the streets. The historic centre is shoulder-to-shoulder, hotel prices triple, and Mondello beach has no space to set down a towel. May-June and September-October give you warm weather without the chaos.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "\uD83C\uDFDB\uFE0F",
      title: "Skipping Monreale to See More Palermo",
      desc: "Monreale is 8 km and a EUR 1.40 bus ride from the city centre. Its cathedral has 6,340 square metres of 12th-century Byzantine mosaics — the largest mosaic cycle in the world — and 90% of visitors to Palermo never go. This is the single biggest mistake made by travellers on tight schedules.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "\uD83D\uDE95",
      title: "Taking Unofficial Taxis from the Airport",
      desc: "Palermo Airport has a well-documented problem with unlicensed taxis charging EUR 60–100 for a EUR 30 official ride. Use only official white taxis from the designated rank outside arrivals, or book a transfer through your hotel. The Prestia e Comandé bus to the city centre costs EUR 7 and takes 50 minutes.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "\uD83E\uDD5B",
      title: "Buying Cannoli That Were Filled Hours Ago",
      desc: "Pre-filled cannoli go soggy within 2 hours as the ricotta softens the shell. The correct cannolo is filled to order (ripieno al momento) from a dry shell at the point of purchase. Ask for ripieno adesso (fill it now). Any pasticceria worth visiting will do this automatically — walk away from any pre-filled tray.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "\uD83C\uDF0A",
      title: "Go to Mondello on a Weekday Morning",
      desc: "Mondello beach is 11 km from the historic centre and takes 20 minutes by bus 806 from Piazza Politeama. Weekday mornings before 11am (and any visit outside July-August) give you the crescent bay almost to yourself. The water is clear enough to snorkel without a wetsuit from May through October. Book Palermo tours in advance at https://www.getyourguide.com/s/?q=Palermo&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "\uD83E\uDD42",
      title: "Order Marsala Dry, Not Sweet",
      desc: "Most exported Marsala is the sweet cream variety used in tiramisu and zabaglione. In Sicily, ask for Marsala Vergine or Marsala Secco — the dry, aged, oxidative wine that resembles fino sherry and is drunk as an aperitivo with almonds and olives. The best is Vecchio Samperi by Marco de Bartoli, available at any serious wine bar in Palermo.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "\uD83E\uDDC4",
      title: "Eat Your Arancini at the Source",
      desc: "The best arancini in Palermo are made fresh each morning at rosticcerie (Sicilian takeaway shops), not at tourist cafes. Look for a shop where a queue of office workers collects them before 10am. The classic version is ragu-and-peas; the Palermo street variant uses butter, bechamel, and mozzarella. Both should cost EUR 2–2.50 maximum.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "\uD83C\uDFAD",
      title: "Book Teatro Massimo for a Performance",
      desc: "Palermo's Teatro Massimo is the largest opera house in Italy and the third-largest in Europe. Performances range from EUR 15 (gallery) to EUR 150 (stalls) and the season runs September through June. Even a guided tour of the interior (EUR 9, daily 10am-5pm) conveys why Francis Ford Coppola chose it for the closing scene of The Godfather Part III.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Palermo safe for tourists?",
      a: "Palermo is safe for tourists with standard urban precautions. Petty theft (bag snatching on scooters, pickpocketing in the markets) exists but violent crime against visitors is rare. The historic centre including Ballaro, Vucciria, and Kalsa is active and generally safe during daytime. At night, stick to well-lit streets and restaurant-dense areas. The Albergheria quarter around Ballaro can be edgy late at night but is perfectly safe until midnight with groups.",
    },
    {
      q: "How do I get from Palermo Airport to the city centre?",
      a: "The Prestia e Comandé express bus runs from Palermo Falcone-Borsellino Airport (PMO) to Palermo Centrale station and the city centre hotels in 50 minutes for EUR 7 one-way. Buy tickets from the driver or from a booth at arrivals. Official white metered taxis cost EUR 28–35 for the same journey (the flat airport tariff is posted inside all taxis). The Trinacria Express train from the airport to Palermo Centrale takes 60 minutes and costs EUR 6.40.",
    },
    {
      q: "What is panelle and where should I eat it?",
      a: "Panelle are fried chickpea flour fritters, a Palermo street food with Arab origins dating to the 9th century. They are eaten in a sesame seed roll (mafalde) with lemon juice and often alongside crocche (potato croquettes). The best panelle in Palermo are at Friggitoria Chiluzzo near the Capo market, at any of the fryers around the Ballaro area, and at street carts throughout the historic centre. They cost EUR 1–1.50 and are eaten immediately from a paper cone.",
    },
    {
      q: "Is it worth taking a day trip to Cefalu from Palermo?",
      a: "Cefalu is absolutely worth the 1-hour train ride (EUR 5.30 each way from Palermo Centrale). The Norman cathedral has the finest Pantocrator mosaic in Sicily outside of Monreale, the medieval town is perfectly preserved, and La Rocca cliff offers one of the best coastal panoramas in the Mediterranean. Go on a weekday to avoid weekend crowds from Palermo. The morning train at 8:30am arrives before tour groups, giving you the cathedral and La Rocca in near-solitude.",
    },
  ],
  combineWith: ["naples-3-days", "taormina-3-days", "rome-5-days"],
  relatedSlugs: ["rome-5-days", "naples-3-days", "venice-4-days", "florence-4-days"],
  galleryQuery: "palermo sicily street market cathedral byzantine",
};

export const metadata: Metadata = {
  title: "Palermo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Palermo itinerary: Ballaro market, Cappella Palatina Byzantine mosaics, Mondello beach, arancini, panelle, Catacombs of the Capuchins, Cefalu day trip, and Marsala wine. Budget EUR 55/day to luxury. Full visa info for Indian and Western passports.",
  keywords: [
    "Palermo itinerary",
    "Palermo 3 days",
    "Palermo travel guide 2026",
    "Sicily budget travel",
    "Cappella Palatina",
    "Ballaró market",
    "Cefalu day trip",
    "Palermo visa Indian passport",
  ],
  openGraph: {
    title: "Palermo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Ballaro market, Cappella Palatina, Catacombs, Mondello beach, arancini, and Marsala wine — Palermo in 3 days from EUR 55/day to luxury.",
    type: "article",
    url: `${siteUrl}/blog/palermo-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Palermo in 3 Days: Complete 2026 Itinerary",
    description:
      "Budget to luxury guide for 3 days in Palermo, Sicily — Cappella Palatina, street food, Cefalu, Mondello, and Marsala wine.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/palermo-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Palermo in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Palermo in 3 Days",
          item: `${siteUrl}/blog/palermo-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Palermo",
      description:
        "Palermo, Sicily — Ballaro street market, Cappella Palatina Norman-Arab-Byzantine mosaics, Mondello beach, arancini, panelle, and Marsala wine.",
      geo: { "@type": "GeoCoordinates", latitude: 38.1157, longitude: 13.3615 },
    },
  ],
};

export default function PalermoPage() {
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
