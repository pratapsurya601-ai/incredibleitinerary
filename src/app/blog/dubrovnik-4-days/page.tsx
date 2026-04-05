import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Dubrovnik",
  country: "Croatia",
  countryFlag: "🇭🇷",
  slug: "dubrovnik-4-days",
  heroQuery: "dubrovnik croatia old city walls adriatic sea mediterranean sunset",
  heroAlt: "Dubrovnik Old Town city walls and terracotta rooftops overlooking the Adriatic Sea, Croatia",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Dubrovnik punches you in the chest the moment you first see it — the limestone walls rising straight from the Adriatic, the terracotta rooftops glowing orange in the afternoon sun, the sea so blue it looks colour-corrected. Four days is the sweet spot: enough to walk every inch of the Old Town at sunrise, kayak around the base of the walls, catch a ferry to Lokrum island, spend a day on the Elaphiti Islands by boat, eat the best seafood of your life at Nishta, ride the cable car to Srd Hill at sunset, and stroll the Stradun by night without once feeling rushed.",
  stats: {
    duration: "4 Days",
    budgetFrom: "€55",
    bestMonths: "May-Jun, Sep-Oct",
    airport: "DBV (Dubrovnik Airport, 20 min to Old Town)",
  },
  toc: [
    { id: "visa",        emoji: "🛂", label: "Visa & Entry" },
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "day1",        emoji: "📅", label: "Day 1 - City Walls & Stradun" },
    { id: "day2",        emoji: "📅", label: "Day 2 - Lokrum & Cable Car" },
    { id: "day3",        emoji: "📅", label: "Day 3 - Elaphiti Islands" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Short-Stay Visa (Type C) — Croatia joined Schengen on Jan 1, 2023"],
        ["Fee", "€80 per person"],
        ["Processing", "15-30 business days; apply 6-8 weeks ahead"],
        ["Apply at", "Croatian Embassy or VFS Global"],
        ["Validity", "90 days within any 180-day Schengen period"],
        ["Documents", "Hotel bookings, return flights, 3-month bank statements, travel insurance min. €30,000"],
        ["Notes", "A valid Schengen visa issued for another country (e.g. Italy, France) also covers Croatia"],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area since Jan 2023)"],
        ["Duration", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, apply at etias.eu.int before departure)"],
        ["UK Passports", "Visa-free post-Brexit but subject to 90/180 rule and ETIAS"],
        ["Montenegro Note", "Kotor day trip crosses into Montenegro — not Schengen. Most Western passports enter visa-free. Have passport accessible at the border."],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€55-90/day",
      days: [
        {
          day: "Day 1",
          title: "City Walls at Sunrise & Stradun by Night",
          items: [
            "07:45 — Arrive at the Pile Gate (main western entrance to the Old Town, free to enter). The limestone Stradun promenade stretches 300 metres ahead — the most photographed pedestrian street in the Balkans. Walk it before the cruise ship tourists arrive; at this hour it belongs to you.",
            "08:00 — City Walls walk at opening (€35 entry, 2km circuit). Start immediately at opening — by 11am the walls are shoulder-to-shoulder with groups. The full circuit takes 90 minutes. Every corner reveals a different angle of the Old Town rooftops and the Adriatic below. The western section above Fort Bokar has the best sea views.",
            "09:45 — Fort Lovrijenac ('Dubrovnik's Acropolis', included with walls ticket same day). The fortress on the cliff outside the western walls — used as the Red Keep in Game of Thrones. Views over the harbour and Old Town are superb from the ramparts.",
            "12:00 — Lunch: Nishta restaurant (Prijeko Street) for creative vegetarian Croatian cuisine — falafel, hummus, and seasonal plates (€8-14). One of the best-value meals in the Old Town. Alternatively Buffet Skola in a medieval alley for grilled fish and peka dishes (€10-15).",
            "14:00 — Game of Thrones filming locations self-guided walk (free). Download the free GoT map from the Dubrovnik tourist office: Fort Lovrijenac (Red Keep), Jesuit Staircase (Walk of Shame), St Dominika Street (King's Landing scenes), and the harbour area. No tour needed — the locations are all within the Old Town walls.",
            "19:00 — Dinner outside the walls: walk 5 minutes through Pile Gate to the Ploce area and prices drop 40%. Grilled Adriatic fish €15-22, local Posip white wine €4-6 per glass.",
            "21:00 — Evening stroll on the Stradun. The white limestone glows under the floodlights and the crowds have thinned considerably. Rakija (Croatian brandy) at a bar for €3-4.",
          ],
          cost: "€60-85 total",
        },
        {
          day: "Day 2",
          title: "Lokrum Island & Cable Car to Srd Hill",
          items: [
            "09:30 — Ferry to Lokrum Island from the Old Town harbour (€20 return, ferries run every 30-60 minutes May-October). The island is a 10-minute crossing; peacocks roam freely among the trees and monastery ruins.",
            "10:00 — Lokrum monastery ruins and the Game of Thrones Iron Throne replica (free with island entry). Located in the medieval monastery, it is one of the few permanent GoT museum pieces in Dubrovnik. The botanical garden founded by Archduke Maximilian in 1859 adds a surreal formal garden element to the wild island.",
            "11:30 — Dead Sea Lake (Mrtvo More) on Lokrum — a saltwater lake connected to the sea, perfectly calm and warm. Free swimming once you are on the island. The rock platforms around it are ideal for sunbathing.",
            "13:00 — Lunch on Lokrum at the island's small cafe (€8-12 for sandwiches and cold drinks). Bring extra food from the Old Town's Konzum supermarket if on a tight budget.",
            "15:00 — Ferry back to Dubrovnik. Walk to Banje Beach (5 minutes from the Ploce Gate): the main Old Town beach faces directly at the city walls — excellent photography opportunity in late afternoon light.",
            "17:00 — Cable car up Mount Srd (€25 return, summit at 412m). Dubrovnik's finest panorama — the Old Town, the islands, and the Adriatic spread below in every direction. One of the genuinely best views in Europe. Time it 30 minutes before sunset if possible.",
            "20:00 — Dinner at a konoba outside the walls with cold house rakija — ask for domaca rakija, house-made and often free with a meal. Grilled squid and local wine, €15-20.",
          ],
          cost: "€55-80 total",
        },
        {
          day: "Day 3",
          title: "Elaphiti Islands Boat Day",
          items: [
            "08:30 — Join a group boat day trip to the Elaphiti Islands (Kolocep, Lopud, Sipan) — departs from Gruz harbour, €35-50/person for a full-day trip including lunch stop. These three small islands northwest of Dubrovnik are car-free, pine-forested, and entirely different from the Old Town's tourist intensity.",
            "10:00 — Kolocep Island: the smallest and least visited of the three. Pine forest walks, a small village, and clear water coves for swimming. The boat anchors and you swim from the ladder.",
            "12:00 — Sipan Island: the largest, with a medieval fortress and two small villages connected by a coastal path. Lunch at a konoba overlooking the harbour (€12-18) — fresh grilled fish caught that morning.",
            "14:30 — Lopud Island: Sunjf Beach is Croatia's finest sand beach (most Croatian beaches are pebble). The boat anchors and passengers walk 15 minutes through the village to the beach. Free swimming.",
            "17:00 — Return to Dubrovnik's Gruz harbour. Bus #1A back to the Old Town (€2) or a 20-minute walk.",
            "20:00 — Final Stradun evening: sit at a cafe terrace with an Aperol Spritz and watch the evening promenade. Every resident of Dubrovnik seems to walk the Stradun in the hour after dinner. A genuinely memorable urban ritual. Book excursions ahead at https://www.getyourguide.com/s/?q=Dubrovnik+Croatia&partner_id=PSZA5UI",
          ],
          cost: "€55-75 total",
        },
        {
          day: "Day 4",
          title: "Old Town Deep Dive & Departure",
          items: [
            "08:00 — Rector's Palace (€15) and the Dominican Monastery (€6) — the two most important buildings inside the Old Town walls that most visitors walk past. The Rector's Palace is the former seat of the Republic of Ragusa, with original Gothic-Renaissance architecture and a remarkable atrium. The Dominican Monastery has 14th-century paintings including a Titian altarpiece.",
            "10:30 — Cathedral of the Assumption (€4) at the centre of the Old Town — the treasury holds a reliquary of the skull of Saint Blaise (Dubrovnik's patron saint) in a gold Venetian crown. The cathedral itself was rebuilt after the 1667 earthquake that destroyed much of medieval Dubrovnik.",
            "12:00 — Final lunch inside the Old Town: treat yourself to a proper seafood meal once. Restaurant Kamenice (Gunduliceva Poljana) for fresh oysters and grilled fish at relatively fair prices for the location (€20-35/person).",
            "14:00 — Walk through all four neighbourhoods of the Old Town at leisure: the Pile area, the Stradun axis, the Pustijerna quarter (oldest medieval housing), and the area around the harbour and Fish Market.",
            "16:00 — Airport bus or taxi. Bus #27 from Pile Gate to Dubrovnik Airport takes 30-40 minutes (€2).",
          ],
          cost: "€45-65 total",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€150-280/day",
      days: [
        {
          day: "Day 1",
          title: "City Walls, Private GoT Tour & Sunset Dining",
          items: [
            "Check in to a boutique guesthouse inside or near the Old Town (€90-150/night). Ploce Gate area gives walking access to both the walls and the Lokrum ferry.",
            "09:00 — City Walls walk with audio guide (€35 entry, audio guide €5). The narrated history of the Republic of Ragusa — Dubrovnik's remarkable centuries of independence from Venice, Hungary, and the Ottomans — transforms the circuit.",
            "12:00 — Lunch at Restaurant Nautika (just outside Pile Gate, seafood, terrace overlooking the Adriatic, €35-55/person) — the most scenic mid-range dining in Dubrovnik.",
            "14:30 — Private Game of Thrones walking tour (€25-40/person, small group, 2 hours). Guides bring production photos and behind-the-scenes stories for each filming location — the difference between the TV context and the reality of each medieval location is often fascinating.",
            "17:30 — Cable car to Mount Srd at sunset (€25 return). Dinner at the summit restaurant (€30-50/person) with the Old Town spread below and the islands fading into the evening haze.",
            "21:00 — Evening Stradun stroll. Aperol Spritz at a terrace cafe, €7-9.",
          ],
          cost: "€160-240 total",
        },
        {
          day: "Day 2",
          title: "Sea Kayaking & Lokrum Private Ferry",
          items: [
            "08:30 — Sea kayaking around the Old Town walls (€30-45/person, 3-hour guided tour). Paddle at sea level along the base of the city walls, through sea caves, and around Fort Lovrijenac. The walls rise 25 metres directly from the Adriatic at water level — a completely different experience from walking the top. Game of Thrones filming locations look entirely different from the sea.",
            "12:30 — Oyster Bar Bota Sare (near Ploce Gate) for fresh Adriatic oysters (€12-18 per half dozen) and local Peljesac white wine.",
            "14:30 — Private water taxi to Lokrum (€30-50 return, private departure on demand). Explore the monastery ruins, botanical garden, and peacock colonies at your own pace without queuing for the public ferry.",
            "17:00 — Banje Beach with sunbed service (€15-25). The beach bar serves cocktails with the Old Town as backdrop.",
            "20:00 — Dinner at Restaurant Dubrovnik (Old Town, modern Croatian cuisine, €40-60/person, book 2 days ahead in season).",
          ],
          cost: "€180-280 total",
        },
        {
          day: "Day 3",
          title: "Elaphiti Islands Private Boat Charter",
          items: [
            "08:00 — Semi-private boat tour to the Elaphiti Islands (€60-90/person, small group of 8-12). The islands are car-free and the water colour in the sheltered bays is extraordinary — turquoise over white sand, deep blue over rock.",
            "10:30 — Swimming stop at Kolocep cove — the boat anchors in a sheltered bay and everyone swims from the ladder. The water clarity in the Elaphiti Islands is among the best in the Adriatic.",
            "12:30 — Lunch at a Lopud konoba arranged by the boat operator (€15-25/person included in some tour packages, or pay at the restaurant). Fresh fish, local wine, bread from the island's one bakery.",
            "15:00 — Sunj Beach on Lopud for the afternoon swim — Croatia's finest sand beach. Sunbeds available €8-12.",
            "18:00 — Return to Dubrovnik harbour. Cable car to Srd Hill for the evening panorama if you missed it on Day 1.",
            "20:30 — Dinner at Konoba Ekvinocijo (Iza Roka, Old Town) for genuine local cooking — black risotto, grilled seabream, Dingac red wine from the Peljesac peninsula. €30-45/person.",
          ],
          cost: "€180-270 total",
        },
        {
          day: "Day 4",
          title: "Kotor, Montenegro & Farewell Dinner",
          items: [
            "07:30 — Private transfer to Kotor, Montenegro (€80-120 for a car, 2 hours). The driver can stop at the best bay viewpoints — the road clings to the fjord edge and the morning light on the bay is extraordinary.",
            "09:30 — Kotor Old Town (UNESCO World Heritage Site, free entry). Cathedral of Saint Tryphon (€3), Maritime Museum (€5), and the Kotor City Walls hike (€8, 1,355 steps to San Giovanni fortress at 260m).",
            "13:00 — Long lunch at a Kotor konoba with views over the bay. Lamb peka (pre-order 24 hours ahead, €20-30/person) with local wine.",
            "16:00 — Return to Dubrovnik via Perast village (stop for 20 minutes at Our Lady of the Rocks island church, boat €5 return).",
            "20:30 — Farewell dinner at Restaurant 360 (Old Town walls terrace, modern Croatian tasting menu, €55-85/person, book 3-5 days ahead in season).",
          ],
          cost: "€210-320 total",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€450-1,200+/day",
      days: [
        {
          day: "Day 1",
          title: "Private Old Town Historian & Walls at Dawn",
          items: [
            "Check in to Villa Dubrovnik (Vlaha Bukovca, cliff-side property with private beach, sea-view rooms €350-700/night) or Excelsior Hotel and Spa (direct Old Town views, €400-900/night).",
            "Private transfer from Dubrovnik Airport in a luxury vehicle (€80-120).",
            "08:00 — Pre-opening City Walls private walk (arrange through hotel concierge, €150-200 for exclusive access at 7:30am before public opening). The Old Town walls circuit at dawn with a private historian — the Republic of Ragusa's extraordinary story of independence told at the exact battlements from which it was defended.",
            "13:00 — Lunch at Restaurant Nautika (private terrace reservation, tasting menu €80-120/person).",
            "16:00 — Private cable car cabin reservation at sunset (€200-300 for exclusive summit access, booked through hotel).",
            "20:00 — Dinner at Restaurant 360 (Old Town walls terrace, 8-course tasting menu €120-160/person with wine pairing). Book 1 week ahead in peak season.",
          ],
          cost: "€550-950 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Yacht & Elaphiti Islands",
          items: [
            "09:00 — Private yacht charter to the Elaphiti Islands (Kolocep, Lopud, Sipan) — full day, €700-1,400 for the boat all-inclusive with crew. The islands are car-free and a private charter means you anchor in the quietest bays, not the tourist jetties.",
            "11:00 — Swimming stop at Sunj Beach on Lopud — Croatia's finest sand beach. Swim from the yacht ladder in perfectly clear Adriatic water.",
            "13:00 — Onboard lunch prepared by the charter crew: fresh grilled fish, Dalmatian charcuterie, Peljesac white wine.",
            "15:30 — Kolocep Island: oldest continuously inhabited island in Dalmatia. Pine forest walk to the small village with almost no visitors.",
            "18:00 — Return to Dubrovnik harbour. Sunset aperitivo at the hotel terrace.",
            "20:30 — Dinner at Restaurant Proto (Fish Square, Old Town, Dubrovnik's most historic seafood restaurant, €60-95/person).",
          ],
          cost: "€900-1,500 total (yacht + dining, excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Sea Kayak at Dawn & Kotor by Helicopter",
          items: [
            "07:00 — Private dawn sea kayak around the Old Town walls (€150-200 for a private 2-hour session, arranged through the hotel). The walls at dawn, the sea completely calm, and no other boats in the water.",
            "10:00 — Helicopter transfer to Kotor, Montenegro (€300-500/person, 20-minute flight over the Adriatic into the bay). The aerial view of the Bay of Kotor is extraordinary — fjord-like limestone mountains plunging into an inland sea.",
            "11:30 — Private guide in Kotor (€120-180 for 3 hours): full city walls hike, cathedral treasury, and medieval history at your pace.",
            "14:00 — Lunch at Galion restaurant, Kotor (waterfront terrace, seafood, €50-80/person).",
            "16:30 — Helicopter or private speedboat back to Dubrovnik. Afternoon spa treatment at your hotel (€150-200).",
            "20:30 — Farewell dinner at Villa Dubrovnik's restaurant: private terrace over the sea, chef's tasting menu (€130-180/person, paired Dalmatian wines).",
          ],
          cost: "€800-1,400 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Private Archaeological Tour & Departure",
          items: [
            "08:00 — Private archaeological walking tour of the Old Town (€150-200 for 2 hours). A specialist guide unlocks the layers of Dubrovnik's history: the pre-earthquake medieval city, the 1667 reconstruction, the Ragusan Republican architecture, and the Ottoman-era trade buildings.",
            "11:00 — Breakfast at Cafe Festival (Stradun) with a Stradun view — coffee and pastry among residents before the tourist day fully begins.",
            "13:00 — Final lunch at Restaurant Dubrovnik with a private dining room reservation (€70-100/person, prearranged through hotel).",
            "15:30 — Private speedboat transfer to the airport or helicopter transfer (€350-600). A final Adriatic crossing as departure.",
            "Note: Private boat transfers to the airport are available year-round through hotel concierge and take 25 minutes. The approach to the airport across the bay is a spectacular final view of the Dubrovnik coastline.",
          ],
          cost: "€600-1,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20-45 (hostel or Gruz guesthouse)",
      food: "€15-25 (Nishta + konobas outside walls)",
      transport: "€5-15 (city bus + public ferry)",
      activities: "€25-45 (walls + Lokrum + cable car)",
      total: "€65-130/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90-160 (boutique guesthouse near Old Town)",
      food: "€40-70 (seafood restaurant + Nautika once)",
      transport: "€15-40 (private ferry + bus)",
      activities: "€40-70 (kayak tour + GoT tour)",
      total: "€185-340/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€350-700 (Villa Dubrovnik or Excelsior)",
      food: "€100-250 (Restaurant 360 + Nautika + Proto)",
      transport: "€80-500 (private transfers + helicopter)",
      activities: "€150-400 (private yacht + private tours)",
      total: "€680-1,850/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€15-22 (hostel dorm in Gruz or Lapad)",
      food: "€10-18 (Nishta + bakery + supermarket)",
      transport: "€3-10 (city bus + public ferry)",
      activities: "€20-35 (walls ticket only or walls + Lokrum)",
      total: "€48-85/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€110-200 (family apartment near Pile Gate)",
      food: "€50-90 (konobas outside walls + one harbour restaurant)",
      transport: "€20-40 (taxi + public ferry + bus)",
      activities: "€60-100 (walls + Lokrum + cable car + GoT tour)",
      total: "€240-430/day",
    },
  ],
  mistakes: [
    {
      icon: "🌞",
      title: "Visiting in July or August",
      desc: "Dubrovnik in peak summer receives 6,000+ cruise ship day-trippers daily on top of hotel guests. The City Walls queue can hit 2 hours. The Stradun is shoulder-to-shoulder by 10am. Accommodation prices are 3x those of May or September. Visit in May-June or September-October for the same city at a fraction of the cost and crowd level.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎟️",
      title: "Queuing to Buy City Walls Tickets on the Day",
      desc: "The City Walls ticket (€35) can be bought online in advance at the Dubrovnik tourist office website. In peak season the queue at the gate is 30-60 minutes. Buy online, print or save the QR code, and walk straight to the entrance. Also walk the walls at 8am opening — by 11am it is unpleasantly crowded on some sections.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "⛵",
      title: "Skipping the Island Day Trips",
      desc: "Most visitors spend all four days in the Old Town, which you can cover thoroughly in one day. The real Dalmatia is out on the water — Lokrum with its peacocks and Game of Thrones throne, and the Elaphiti Islands with their pine forests and sand beaches. At least one full island day is essential to understanding the region.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Eating Every Meal Inside the Old Town Walls",
      desc: "Restaurants on the Stradun and within the Old Town walls charge 2-3x the price of identical food just outside the Pile or Ploce Gates. Nishta is the main exception inside. The Lapad peninsula and Gruz harbour have excellent konobas with local cooking at local prices. Walk out of the tourist zone and your meal budget roughly halves.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "📸",
      title: "Ignoring Game of Thrones Locations Without Context",
      desc: "Walking past Fort Lovrijenac without knowing it was the Red Keep, or climbing the Jesuit Staircase without knowing it was Cersei's Walk of Shame, means missing half of what makes Dubrovnik special to modern visitors. Download the free GoT location map from the tourist office or take a 2-hour guided tour (€25-40) — it completely changes how you see the Old Town.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "City Walls at 8am Opening — Empty Battlements",
      desc: "The walls open at 8am. Arrive at 8:00am sharp and you will have the full 2km circuit almost entirely to yourself. The morning light on the terracotta rooftops and the Adriatic is extraordinary, temperatures are 10-15 degrees cooler than midday, and you finish before the cruise ship tourists even dock. By 11am, some sections are nearly impassable.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚣",
      title: "Sea Kayaking Around the Old Town Walls",
      desc: "Sea kayaking around the base of Dubrovnik's walls (€30-45 for a 3-hour guided tour) gives a completely different perspective — the walls rise 25 metres directly from the Adriatic and the Game of Thrones filming locations look entirely different at water level. One of the best physical experiences in all of Croatia and significantly cheaper than most activities.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏝️",
      title: "The Elaphiti Islands Are Better Than Lokrum for a Full Day",
      desc: "Lokrum is the easy half-day trip (20 minutes by ferry, peacocks, GoT throne, swimming lake). The Elaphiti Islands (Kolocep, Lopud, Sipan) are the proper island day — car-free villages, sand beaches (rare on Croatia's coast), genuine fish konobas, and the kind of silence that Dubrovnik's Old Town has lost. A group boat tour to Elaphiti costs €35-50 and is one of the best days in Dalmatia.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍽️",
      title: "Nishta Is the Best Value Meal in the Old Town",
      desc: "Nishta restaurant on Prijeko Street serves creative vegetarian and vegan Croatian cuisine (falafel, hummus platters, seasonal vegetable dishes) for €8-14 a plate inside the Old Town walls. In a city where most restaurants charge €25 for a modest fish plate, Nishta is genuinely exceptional value with good food. Book ahead in season. Book tours and excursions ahead at https://www.getyourguide.com/s/?q=Dubrovnik+Croatia&partner_id=PSZA5UI",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Where are the Game of Thrones filming locations in Dubrovnik?",
      a: "Dubrovnik served as King's Landing in Game of Thrones for Seasons 2-8. Key locations: Fort Lovrijenac (Red Keep exterior), the Jesuit Staircase (Cersei's Walk of Shame), St Dominika Street (King's Landing street scenes), the Old Town harbour (King's Landing harbour), Pile Gate area (Blackwater battle scenes), and Lokrum Island (the Qarth scenes in Season 2). The Dubrovnik tourist office has a free GoT locations map. A guided 2-hour tour costs €25-40.",
    },
    {
      q: "Do Indian nationals need a visa for Croatia?",
      a: "Yes. Croatia joined the Schengen Area on January 1, 2023. Indian passport holders now need a Schengen C visa (€80) to enter Croatia. Apply at the Croatian Embassy or VFS Global at least 6 weeks before travel. A valid Schengen visa issued for another Schengen country (such as Italy or France) also gives you entry to Croatia on the same trip. Always verify current requirements 2-3 months before booking.",
    },
    {
      q: "When is the best time to visit Dubrovnik to avoid the crowds?",
      a: "May and early June, or September and October. These months have warm weather (22-28°C), calm Adriatic water perfect for swimming and kayaking, and a fraction of the summer crowds. July and August bring extreme heat (35°C+), 6,000+ daily cruise ship visitors, significantly higher prices, and queues everywhere. If you must visit in summer, the city empties noticeably after 6pm when day-trippers leave.",
    },
    {
      q: "What is the best way to get from Dubrovnik Airport to the Old Town?",
      a: "Airport bus #27 runs from the airport to the Pile Gate (main Old Town entrance) in 30-40 minutes and costs €2. Runs every 30-60 minutes in season. Taxis cost €25-35 and take 20-25 minutes. Private transfers booked in advance cost €30-50. For luxury travellers, private speedboat transfers from the airport coast road to the Old Town harbour are available through hotel concierges (€150-200, 25 minutes by sea).",
    },
  ],
  combineWith: ["athens-3-days", "rome-4-days", "kotor-3-days"],
  relatedSlugs: ["athens-3-days", "rome-4-days", "santorini-4-days", "istanbul-5-days"],
  galleryQuery: "dubrovnik croatia old town adriatic sea walls stradun",
};

export const metadata: Metadata = {
  title: "Dubrovnik in 4 Days: City Walls, Game of Thrones, Elaphiti Islands & Nishta (2026)",
  description:
    "Complete 4-day Dubrovnik guide covering City Walls at sunrise, Game of Thrones filming locations, Lokrum island, Elaphiti Islands boat day, Nishta restaurant, cable car to Srd Hill, and the Stradun by night — real euro costs for every budget.",
  keywords: [
    "dubrovnik itinerary 4 days",
    "dubrovnik travel guide 2026",
    "game of thrones dubrovnik locations",
    "dubrovnik city walls",
    "elaphiti islands dubrovnik",
    "nishta restaurant dubrovnik",
    "lokrum island dubrovnik",
    "dubrovnik visa indian passport",
  ],
  openGraph: {
    title: "Dubrovnik in 4 Days: City Walls, Game of Thrones & Islands (2026)",
    description:
      "City Walls at dawn, GoT filming locations, Lokrum, Elaphiti Islands by boat, Nishta, and Srd Hill cable car — real euro costs for every budget.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/dubrovnik-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubrovnik in 4 Days (2026)",
    description: "City Walls at sunrise, GoT locations, Elaphiti Islands, Nishta, and Srd Hill.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/dubrovnik-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Dubrovnik in 4 Days: City Walls, Game of Thrones, Elaphiti Islands & Nishta (2026)",
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
          name: "Dubrovnik in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/dubrovnik-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Dubrovnik",
      description:
        "UNESCO World Heritage medieval city on the Adriatic coast, famed for its intact limestone city walls, Game of Thrones filming locations, ferry connections to Lokrum and the Elaphiti Islands, and the Stradun promenade.",
      geo: { "@type": "GeoCoordinates", latitude: 42.6507, longitude: 18.0944 },
    },
  ],
};

export default function DubrovnikPage() {
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
