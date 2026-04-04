import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Cyprus",
  country: "Cyprus",
  countryFlag: "🇨🇾",
  slug: "cyprus-5-days",
  heroQuery: "cyprus paphos archaeological park mediterranean sea",
  heroAlt: "Cyprus Paphos Archaeological Park with ancient mosaics and Mediterranean coastline",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Cyprus is the eastern Mediterranean distilled into one island — Aphrodite's birthplace, a UNESCO mosaic park, a divided capital, cedar-forested mountains, and wine villages that have been pressing grapes since the Bronze Age. Five days is the sweet spot: enough to explore the Paphos ruins, drive the Troodos mountain villages, sip commandaria in Limassol, stand in the last divided capital of Europe, and still catch a sunset at Aphrodite's Rock before heading home.",
  stats: { duration: "5 Days", budgetFrom: "€55", bestMonths: "Apr–Jun or Sep–Oct", airport: "PFO / LCA" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Paphos Arrival & Ruins" },
    { id: "day2", emoji: "📅", label: "Day 2 — Troodos Mountains" },
    { id: "day3", emoji: "📅", label: "Day 3 — Limassol & Wine Villages" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Cyprus National Visa (Type C or D)"],
        ["Processing", "10–15 business days"],
        ["Fee", "€30 per person (short stay)"],
        ["Validity", "Up to 90 days within 180-day period"],
        ["Apply at", "Cyprus High Commission or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance"],
        ["Notes", "Cyprus is NOT in the Schengen Area — a Cyprus visa does not allow travel to other EU states."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free for most Western passports"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "Up to 90 days per visit"],
        ["Note", "Cyprus is EU but NOT Schengen — separate 90-day allowance from Schengen countries"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Notes", "UK passport holders remain visa-free post-Brexit with no ETIAS requirement for Cyprus."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€55–75/day",
      days: [
        {
          day: "Day 1",
          title: "Paphos Arrival & Archaeological Park",
          items: [
            "14:00 — Arrive Paphos Airport (PFO); take the 612 bus to Paphos town centre for €1.50 — far cheaper than a taxi (€15–20); check in to a budget guesthouse or hostel in Kato Paphos (€20–35/night)",
            "16:00 — Walk to Paphos Archaeological Park (UNESCO World Heritage Site, €4.50) — the famous floor mosaics inside the House of Dionysus are 1,700 years old and among the finest Roman mosaics in the world",
            "18:00 — Stroll Paphos Harbour and the medieval Paphos Castle at sunset (€2.50 entry) — free to walk around outside; the harbour promenade is lined with tavernas competing for business",
            "19:30 — Dinner: grilled halloumi, kleftiko (slow-cooked lamb), and village salad at a taverna on Apostolou Pavlou Avenue; budget meal with local Keo beer is €12–15",
            "21:00 — Walk the coastal path toward the Tombs of the Kings for a free evening stroll; the sea cliffs are impressive even in the dark",
          ],
          cost: "€35–45 (transport, entry fees, dinner)",
        },
        {
          day: "Day 2",
          title: "Tombs of the Kings & Coral Bay",
          items: [
            "09:00 — Tombs of the Kings archaeological site (€2.50) opens at 8:30am — these 4th-century BC underground rock tombs were carved for Ptolemaic nobles; the site is vast, quiet, and genuinely impressive",
            "11:00 — Bus to Coral Bay (route 615, €1.50) — a beautiful sandy cove 10km north of Paphos; free beach with sunlounger hire at €3 each; swim in clear turquoise water",
            "13:00 — Lunch at a beach taverna: calamari, tzatziki and pita for €10–12; fresh fish plates around €14",
            "15:30 — Bus back to Paphos; visit the Byzantine Museum at the Bishop's Palace (€2) — excellent collection of icons spanning 800 years",
            "19:00 — Meze dinner at a local taverna — a traditional Cypriot meze is 20+ small dishes (dips, grilled meats, halloumi, seafood) for one fixed price around €18–22 per person; the best value meal in Cyprus",
          ],
          cost: "€30–40 (buses, entry, beach, meze dinner)",
        },
        {
          day: "Day 3",
          title: "Troodos Mountains — Cedar Valley & Kykkos",
          items: [
            "08:30 — Rent a car for €25–35/day (essential for Troodos) or join a shared day tour (€30); drive the B6 mountain road toward Troodos village — the landscape shifts from citrus groves to pine forest within 30km",
            "10:30 — Kykkos Monastery — the wealthiest and most important monastery in Cyprus (free entry); gold-mosaic interior, icon of the Virgin Mary attributed to Saint Luke, and a spectacular mountain setting at 1,318m elevation",
            "12:30 — Cedar Valley picnic — buy bread, halloumi, olives, and local sausage from a mountain village shop for €8 and eat surrounded by endemic Cyprus cedar trees; mouflon (wild mountain sheep) roam freely here",
            "14:00 — Drive through Omodos village — a UNESCO-listed wine village with a cobblestone square, a Byzantine monastery, and wine cellars charging €3 for tastings of local commandaria dessert wine",
            "17:00 — Return to Paphos; sunset from Aphrodite's Rock (Petra tou Romiou) — completely free and one of the most dramatic coastal formations in the Mediterranean; legend says Aphrodite rose from the sea here",
          ],
          cost: "€45–55 (car hire, fuel, monastery, wine tasting, picnic)",
        },
        {
          day: "Day 4",
          title: "Limassol Old Town & Wine Villages",
          items: [
            "09:00 — Drive or bus (€5, 1.5 hours) to Limassol — Cyprus's most cosmopolitan city with a rapidly developing marina and a well-preserved old town",
            "10:00 — Limassol Medieval Castle (€4.50) — Richard the Lionheart married Berengaria of Navarre here in 1191 on his way to the Crusades; good views from the battlements over the port",
            "12:00 — Lunch in the Limassol Old Market (Agora) — a restored covered market with stalls selling fresh produce, halloumi, loukoumades (honey doughnuts) and souvlaki; meal for €8–12",
            "14:00 — Drive the wine route through Koilani and Vouni villages in the Limassol wine region — these hillside villages produce some of Cyprus's best dry red wines from the indigenous Maratheftiko grape; tasting at a family winery is €5–8",
            "19:00 — Dinner in Limassol: sheftalies (Cypriot sausages), grilled octopus, and fresh-caught sea bass at a waterfront taverna (€15–20)",
          ],
          cost: "€50–65 (transport, castle, wine tasting, meals)",
        },
        {
          day: "Day 5",
          title: "Nicosia Divided Capital & Departure",
          items: [
            "08:00 — Drive or bus (€4.50, 1.5 hours) to Nicosia (Lefkosia) — the world's last divided capital, split between the Republic of Cyprus and Turkish-controlled north since 1974",
            "09:30 — Cross the Ledra Street crossing into North Nicosia (bring passport; crossing is free and takes 5 minutes) — the contrast between Greek Cypriot south and Turkish north is stark and historically fascinating",
            "11:00 — Cyprus Museum, Nicosia (€4.50) — the island's finest archaeological collection from Neolithic through Roman periods; the terracotta warrior figures from Marion are exceptional",
            "13:00 — Final meze lunch in Nicosia's old town at a shaded courtyard restaurant (€15); try flaounes (cheese-filled pastries) and loukoumades for dessert",
            "15:00 — Drive to Larnaca Airport (LCA) or Paphos Airport (PFO) for departure; allow 1 hour from Nicosia to LCA",
          ],
          cost: "€35–45 (transport, museum, lunch, airport)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Paphos & Archaeological Park with Private Guide",
          items: [
            "13:00 — Arrive Paphos Airport; private taxi to a 4-star boutique hotel in Kato Paphos (€20 taxi, €80–120/night hotel) — hotels near the harbour offer sea views and walkable access to the main sites",
            "15:00 — Paphos Archaeological Park with a licensed guide (€4.50 + €40 for a 2-hour guide) — a good guide explains the mythological scenes in the mosaics (Dionysus, Theseus, Orpheus) and puts the Roman colony in context",
            "18:00 — Paphos Harbour sunset walk and Paphos Castle — have an early evening coffee at a harbour cafe (€3–4) as fishing boats return",
            "20:00 — Dinner at a proper Cypriot taverna away from the tourist strip: order a full meze (€22–25/pp) featuring 20+ dishes; pair with a bottle of local SODAP Maratheftiko red (€18)",
          ],
          cost: "€140–160 (hotel, guide, dinner with wine)",
        },
        {
          day: "Day 2",
          title: "Akamas Peninsula & Blue Lagoon",
          items: [
            "09:00 — Hire a jeep or 4x4 (€55/day) and drive to the Akamas Peninsula — a protected national park with no development, spectacular sea stacks, and the Blue Lagoon at Lara Bay",
            "10:30 — Blue Lagoon (Lara Bay) — the turquoise water is best in the morning before the boat tours arrive; snorkel from the beach (bring your own or rent at Porto Latchi for €8)",
            "12:30 — Lunch at a seafood taverna in the fishing village of Latchi — fresh grilled fish plates €18–22, with local white wine from Kolios winery",
            "15:00 — Aphrodite's Baths (Baths of Aphrodite) — a lush freshwater spring grotto framed by fig trees; free to enter and a beautiful 15-minute stop on the road back to Paphos",
            "19:00 — Sunset at Aphrodite's Rock (Petra tou Romiou) — pull over at the lay-by for the best angle; then dinner in Paphos (€25–30/pp)",
          ],
          cost: "€130–150 (jeep hire, lunch, dinner)",
        },
        {
          day: "Day 3",
          title: "Troodos — Monastery Circuit & Mountain Village Lunch",
          items: [
            "08:30 — Drive the scenic E903 mountain road through Platres village — the traditional summer retreat of the British colonial administration; the mountain air at 1,100m is noticeably cooler than the coast",
            "10:00 — Kykkos Monastery full visit (free, 1.5 hours) and the adjacent Throni hilltop shrine for panoramic views over the Troodos range",
            "12:30 — Lunch at a traditional kafeneion in Omodos village: souvlaki, halloumi saganaki (fried), and village bread with olive oil; €15–18/pp with wine",
            "14:30 — Omodos wine tasting at a family cellar — commandaria dessert wine (€5 tasting) is a protected PDO wine that has been made in the Troodos foothills for 3,000 years",
            "16:30 — Cedar Valley drive and optional short hike (1 hour, easy trail) to the Cyprus cedar grove — one of only three places on earth where this endemic tree grows; return to Paphos by 19:00",
          ],
          cost: "€120–140 (fuel, lunch, wine tasting, tour)",
        },
        {
          day: "Day 4",
          title: "Limassol Marina & Kolossi Castle",
          items: [
            "09:30 — Drive to Limassol (1 hour); check in or store bags at a marina hotel — the new Limassol Marina development has transformed the waterfront into a modern destination",
            "11:00 — Kolossi Castle (€2.50, 10km west of Limassol) — the 15th-century crusader castle of the Knights of Saint John, surrounded by the vineyards that produce commandaria wine; beautifully preserved keep",
            "13:00 — Lunch at a Limassol seafood restaurant on the old port: sea bream with lemon caper sauce, grilled octopus, and a carafe of local white (€30–35/pp)",
            "15:00 — Limassol Municipal Art Gallery and local craft shops in the old town — leather sandals, silver jewellery, and woven baskets from local artisans",
            "20:00 — Dinner at a Limassol restaurant near the marina: Cypriot tasting menu (€35–40/pp) featuring updated takes on kleftiko, trahanas soup, and carob-glazed pork",
          ],
          cost: "€140–160 (castle, meals, shopping)",
        },
        {
          day: "Day 5",
          title: "Nicosia — Old City & Divided Capital",
          items: [
            "08:30 — Drive to Nicosia (1 hour); park outside the Venetian walls and enter the old city on foot — the 16th-century star-shaped walls built by Venice are one of the best-preserved Renaissance fortifications in the world",
            "09:30 — Ledra Street pedestrian zone and crossing into North Nicosia — visit the Selimiye Mosque (formerly Hagia Sophia Cathedral), the Great Bedesten, and the Buyuk Han caravanserai in the Turkish quarter",
            "11:30 — Cyprus Museum (€4.50) — the collection spans 10,000 years; the bronze statue of the god Ingot Bearer and the terracotta warrior army from Marion are highlights",
            "13:30 — Final lunch at a Nicosia old-town restaurant: traditional Cypriot soupa avgolemono, stuffed vine leaves, and grilled halloumi (€20–25/pp)",
            "15:30 — Drive to LCA or PFO for departure; Nicosia to Larnaca is 45 minutes",
          ],
          cost: "€120–140 (museum, meals, fuel, parking)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€300–500/day",
      days: [
        {
          day: "Day 1",
          title: "Paphos — Private Villa & Archaeological Sunset Tour",
          items: [
            "13:00 — Private transfer from Paphos Airport to a luxury clifftop villa or 5-star resort (Almyra, Anassa, or Elysium) — rates from €300–700/night with sea views, private pools, and spa access",
            "15:00 — Private exclusive-access sunset tour of Paphos Archaeological Park (after park closes to public, arranged through hotel; €150 for a private archaeologist guide) — the mosaics in low golden light are extraordinary",
            "18:00 — In-villa wine tasting curated by a sommelier — Cyprus has 20 indigenous grape varieties; tasting of 5 wines including commandaria, Maratheftiko, and Xynisteri (€60/person)",
            "20:30 — Dinner at Notios restaurant at Almyra Hotel (or equivalent) — contemporary Cypriot cuisine with panoramic sea views; tasting menu with wine pairing €90–120/pp",
          ],
          cost: "€400–550 (villa/hotel, private tour, tasting, dinner)",
        },
        {
          day: "Day 2",
          title: "Akamas by Private Boat & Sunset Yacht",
          items: [
            "09:00 — Private speedboat charter from Paphos Harbour (half day, €350 for up to 4 people) to the sea caves and Blue Lagoon — private boat access means no crowds; snorkelling gear and drinks included",
            "12:30 — Arrive Latchi fishing harbour for lunch at Latchi Waterfront Taverna reserved for the group — freshest-catch grilled fish, lobster pasta, and chilled local Kolios white; €50–70/pp",
            "15:00 — Aphrodite's Baths and Akamas Peninsula walking trail (private naturalist guide, 2 hours, €80) — spot endemic Cyprus orchids, mouflon tracks, and Eleonora's falcons nesting in the cliff faces",
            "19:00 — Sunset catamaran cruise from Paphos Harbour (private charter 2 hours, €400 for group) — champagne on deck as the sun drops over Aphrodite's Rock; return to hotel for a late dinner",
          ],
          cost: "€500–700 (boat charter, catamaran, meals, guide)",
        },
        {
          day: "Day 3",
          title: "Troodos — Private Monastery Tour & Mountain Spa",
          items: [
            "09:00 — Private chauffeured 4x4 tour of the Troodos painted churches (UNESCO World Heritage Sites) — 9 Byzantine churches decorated with extraordinary medieval frescoes; a knowledgeable guide brings 800 years of Orthodox art to life (€180 for full-day chauffeured guide)",
            "12:30 — Lunch at Platres mountain village at a family-run taverna reserved in advance — truffle-laced kleftiko, local mountain trout, and a bottle of KEO vintage Maratheftiko; €40–50/pp",
            "15:00 — Cedar Valley private nature walk with a botanist guide (€100, 90 minutes) — learn about the endemic flora, Cyprus cedar reproduction, and the mouflon conservation programme",
            "18:00 — Return via Omodos for a private commandaria tasting at a boutique winery — some estates offer barrel-room dinners by arrangement; €50–80/person for an extended private session",
          ],
          cost: "€400–550 (chauffeur, guide, lunch, tasting)",
        },
        {
          day: "Day 4",
          title: "Limassol — Marina, Spa & Michelin Dining",
          items: [
            "10:00 — Check in to Columbia Beach Resort or four-seasons-standard Limassol Marina hotel — many have beachfront infinity pools and direct sea access",
            "11:00 — Full-day spa treatment: Cypriot hammam scrub, carob-oil massage, and halotherapy salt room (€150–200 spa day package at a luxury hotel spa)",
            "14:00 — Late lunch at a Limassol fine-dining restaurant: contemporary Cypriot tasting menu featuring carob-smoked octopus, truffle-laced anari cheese, and Maratheftiko wine pairing; €70–90/pp",
            "17:00 — Private wine tour of the Limassol wine route with a master of wine — visit two family-owned estates producing boutique wines from indigenous varieties; €120/person including transportation",
            "20:30 — Dinner at a marina-front fine-dining restaurant: seasonal menu with local ingredients, impeccable service, harbour views; €80–100/pp with wine",
          ],
          cost: "€450–600 (hotel, spa, wine tour, meals)",
        },
        {
          day: "Day 5",
          title: "Nicosia Private History Tour & Departure",
          items: [
            "09:00 — Private chauffeured transfer to Nicosia (€80); meet a private historian guide for a 3-hour walking tour of the divided city including the buffer zone, restored Venetian palaces, and Byzantine churches (€200 for private guide)",
            "11:30 — Exclusive private visit to the Leventis Municipal Museum of Nicosia (normally free; arrange private curator tour through hotel, €50) — the finest collection of historical Nicosia artifacts in a beautifully restored old building",
            "13:30 — Farewell lunch at a Nicosia fine-dining restaurant in a restored old town mansion — traditional Cypriot cuisine elevated with locally foraged herbs and premium local produce; €45–60/pp",
            "16:00 — Private transfer to Larnaca International Airport (€80); lounge access and premium departure",
          ],
          cost: "€350–500 (chauffeur, private guide, museum, lunch, airport)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–35 (hostel or budget guesthouse)",
      food: "€15–25 (tavernas + meze + street food)",
      transport: "€5–15 (buses + shared rides)",
      activities: "€10–20 (archaeological sites)",
      total: "€55–75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€70–120 (3–4 star hotel)",
      food: "€35–55 (restaurants + wine tastings)",
      transport: "€25–40 (hire car + fuel)",
      activities: "€20–35 (guided tours + sites)",
      total: "€120–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–600 (luxury villa or 5-star resort)",
      food: "€100–200 (fine dining + wine pairing)",
      transport: "€80–180 (private car + boat charters)",
      activities: "€100–200 (private guides + exclusive access)",
      total: "€300–500+/day",
    },
    {
      tier: "🍺 Food & Drink Only",
      accommodation: "N/A",
      food: "€8–12 (souvlaki + meze lunch)",
      transport: "€3–5 (local bus fare)",
      activities: "€4–8 (museum entry)",
      total: "€18–30/half-day outing",
    },
    {
      tier: "🚗 Car Hire Day",
      accommodation: "N/A",
      food: "€15–25 (village kafeneion lunch)",
      transport: "€30–50 (car rental + fuel for 200km)",
      activities: "€10–20 (site entries + wine tasting)",
      total: "€55–95/self-drive day",
    },
  ],
  mistakes: [
    {
      icon: "🚌",
      title: "Relying on public transport for Troodos",
      desc: "Bus services to the Troodos Mountains are infrequent and stop running by mid-afternoon. Without a hire car, you cannot visit Kykkos Monastery, Cedar Valley, or the wine villages independently. Car hire from €25/day is essential for day 3 and 4.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏖️",
      title: "Skipping Nicosia because it is not on the coast",
      desc: "Nicosia is one of the most historically fascinating cities in Europe — the only divided capital in the world. The Ledra Street crossing into North Cyprus, the medieval old town, and the Cyprus Museum are unmissable experiences that most beach-holiday visitors skip entirely.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "☀️",
      title: "Visiting only in July or August",
      desc: "Cyprus in midsummer is brutally hot (38–42 degrees C) and prices spike 40–60%. April to June and September to October give perfect weather, lower prices, and far fewer crowds. The wildflower season in April makes the Akamas Peninsula particularly spectacular.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Ordering individual dishes instead of meze",
      desc: "A Cypriot meze (€18–25/person) delivers 20+ small dishes and is the definitive way to eat on the island. Ordering a la carte at tourist restaurants near the harbours costs more and gives you less variety. Always ask for the meze at a family-run taverna.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🧀",
      title: "Buying halloumi at the supermarket and ignoring village producers",
      desc: "Supermarket halloumi is pasteurised and tastes nothing like the fresh village cheese made from sheep and goat milk. Stop at a village kafeneion in the Troodos or the Limassol wine villages and buy halloumi directly from local producers for €3–5 per piece.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🍷",
      title: "Try commandaria wine at its source",
      desc: "Commandaria is one of the world's oldest named wines, produced in the villages around Limassol since 800 BC. A tasting in Omodos or Koilani village costs €3–5 and beats any wine shop. Book wine tours and activities at https://www.getyourguide.com/s/?q=Cyprus&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Time Aphrodite's Rock for the golden hour",
      desc: "Petra tou Romiou (Aphrodite's Rock) is 30km east of Paphos on the B6 coastal road. The lay-by viewing area is free and best visited 45 minutes before sunset when the rock face glows orange. Arrive early on weekends to secure the best angle.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🛂",
      title: "Cross into North Cyprus for a half-day",
      desc: "The Ledra Street pedestrian crossing in Nicosia is open daily and free with a passport. North Nicosia has a different atmosphere, Ottoman architecture, and significantly cheaper food. The Buyuk Han (Great Inn) caravanserai and the Selimiye Mosque are worth the 5-minute crossing process.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏺",
      title: "Book accommodation well ahead for Paphos",
      desc: "Paphos has limited quality accommodation in the town centre (as opposed to the resort strip). The best boutique hotels near the archaeological park and harbour fill quickly April–June and September–October. Book 6–8 weeks ahead for those months.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Cyprus safe for solo travellers and families?",
      a: "Cyprus is one of the safest countries in Europe with very low crime rates. Solo travel is comfortable across the island including Nicosia. The only area to be cautious about is the buffer zone in Nicosia (the UN-controlled strip between north and south) — stay on the marked crossing routes. Families will find Cyprus extremely welcoming, with calm shallow beaches and child-friendly tavernas everywhere.",
    },
    {
      q: "Do I need to hire a car in Cyprus?",
      a: "For Paphos city sights and beach days, you can manage without a car using local buses and taxis. However, the Troodos Mountains, Akamas Peninsula, Limassol wine villages, and most archaeological sites away from the main towns require a hire car or organised tour. A hire car is strongly recommended — rates start at €25/day and driving is on the left (British style).",
    },
    {
      q: "What is the best base for a 5-day Cyprus trip?",
      a: "Paphos is the best single base — it has the UNESCO archaeological park, harbour, beach, and is well-positioned for day trips to Troodos (45 minutes), Limassol (1 hour), Nicosia (1.5 hours), and the Akamas Peninsula (30 minutes). Limassol is better if you want nightlife and a more urban experience. Avoid basing yourself in Ayia Napa unless beach clubs are your main priority.",
    },
    {
      q: "What is halloumi and where should I eat it in Cyprus?",
      a: "Halloumi is Cyprus's national cheese — a semi-hard, high-melting-point cheese made from sheep and goat milk that can be grilled or fried without melting. The best halloumi is served hot off the grill (halloumi saganaki) at a traditional taverna. In villages, you can often buy it fresh from producers for €3–5. The halloumi sold in supermarkets abroad bears little resemblance to the real thing eaten at source.",
    },
  ],
  combineWith: ["greece-7-days", "santorini-4-days", "crete-5-days"],
  relatedSlugs: ["santorini-4-days", "crete-5-days", "malta-4-days", "rhodes-4-days"],
  galleryQuery: "cyprus paphos troodos mountains mediterranean",
};

export const metadata: Metadata = {
  title: "Cyprus in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 5-day Cyprus itinerary — Paphos Archaeological Park, Troodos Mountains, Limassol wine villages, Nicosia divided capital, and Aphrodite's Rock. Budget €55/day to luxury villas. Full visa info included.",
  keywords: [
    "Cyprus itinerary",
    "Cyprus 5 days",
    "Cyprus travel guide 2026",
    "Paphos archaeological park",
    "Troodos Mountains",
    "Limassol wine villages",
    "Nicosia divided capital",
    "Cyprus visa Indian passport",
    "halloumi meze Cyprus",
    "Aphrodite Rock Cyprus",
  ],
  openGraph: {
    title: "Cyprus in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Paphos ruins, Troodos Mountains, Limassol wine villages, Nicosia, and Aphrodite's Rock — Cyprus in 5 days from €55/day to luxury villas.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/cyprus-5-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyprus in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Paphos ruins, Troodos Mountains, Limassol wine villages, and the world's last divided capital — your complete Cyprus guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/cyprus-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cyprus in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Cyprus in 5 Days",
          item: "https://www.incredibleitinerary.com/blog/cyprus-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cyprus",
      description:
        "Cyprus — Paphos Archaeological Park UNESCO mosaics, Troodos Mountains, Limassol wine villages, Nicosia divided capital, and Aphrodite's Rock on the eastern Mediterranean.",
      geo: { "@type": "GeoCoordinates", latitude: 34.9229, longitude: 33.4299 },
    },
  ],
};

export default function CyprusPage() {
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
