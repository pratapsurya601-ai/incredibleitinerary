import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Dubrovnik",
  country: "Croatia",
  countryFlag: "🇭🇷",
  slug: "dubrovnik-4-days",
  heroQuery: "dubrovnik croatia old city walls adriatic sea mediterranean",
  heroAlt: "Dubrovnik Old Town city walls overlooking the Adriatic Sea Croatia",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Dubrovnik is one of those places that punches you in the chest the moment you first see it — the limestone walls rising straight from the Adriatic, the terracotta rooftops glowing orange in the afternoon sun, the sea so blue it looks colour-corrected. Four days is enough to walk every inch of the Old Town, catch a ferry to the islands, take the cable car at sunset, and do a day trip to Kotor Bay without once feeling rushed.",
  stats: {
    duration: "4 Days",
    budgetFrom: "€55",
    bestMonths: "May–Jun, Sep–Oct",
    airport: "DBV (Dubrovnik Airport)",
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
        ["Visa for Croatia", "Croatia is NOT part of the Schengen Zone (though it joined the Schengen Area on January 1 2023 — verify current status before travel). As of 2026, Indian passport holders should check the Croatian embassy website or VFS Global for the latest entry requirements, as policy may have changed post-Schengen accession."],
        ["Schengen Link", "Since Croatia joined Schengen in 2023, a valid Schengen visa may allow entry to Croatia. Cross-check with the Croatian Embassy in New Delhi or the VFS Global Croatia helpline before booking. Processing time is typically 15–30 days."],
        ["Key Documents", "Confirmed hotel bookings, return flights, travel insurance with minimum €30,000 coverage, bank statements showing sufficient funds, and a valid passport with at least 6 months validity beyond your return date."],
        ["Travel Insurance", "Mandatory for visa application — minimum €30,000 medical coverage. Most Indian travel insurance policies cover this; check the policy wording for medical evacuation and repatriation clauses."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Schengen Access", "Croatia joined the Schengen Area on January 1, 2023. US, UK, Canadian, Australian, and NZ passport holders enter visa-free for up to 90 days within any 180-day period."],
        ["ETIAS from 2025", "Visa-exempt travelers (USA, Canada, Australia, NZ) require ETIAS travel authorization from 2025. Cost €7, valid 3 years. Apply at etias.eu.int. Takes minutes; process before travel."],
        ["UK Travelers", "Post-Brexit, UK passport holders enter under the 90/180 visa-free rule. ETIAS applies. Check passport validity — must have at least 6 months remaining."],
        ["Montenegro Note", "If doing the Kotor day trip (strongly recommended), Montenegro is NOT in Schengen or the EU. You will cross an international border. Most Western passports enter Montenegro visa-free. Have your passport accessible at the border."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€55–90/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Walk & City Walls",
          items: [
            "8:00am — Enter the Old Town through the Pile Gate (main western entrance, free). The limestone Stradun street stretches ahead — 300 metres of the most photographed pedestrian street in the Balkans. Walk it before the cruise ship tourists arrive.",
            "8:30am — City Walls walk at opening (€35 entry, 2km circuit, best done early morning for empty battlements and cool temperatures). The full circuit takes 1.5–2 hours. Every corner reveals a different angle of the Old Town rooftops and the Adriatic below.",
            "10:30am — Fort Lovrijenac ('Dubrovnik's Acropolis', €35, included if you bought the walls ticket on the same day) — the fortress on the rock outside the western walls. Used as the Red Keep in Game of Thrones. Views over the harbour and Old Town are superb.",
            "12:00pm — Stradun for lunch: Nishta restaurant for vegetarian Croatian (€8–12) or Buffet Škola in a medieval alley for grilled fish and peka dishes (€10–15). Avoid the seafront restaurants on the Stradun itself — tourist pricing.",
            "2:00pm — Game of Thrones filming locations walking tour (self-guided, free): Fort Lovrijenac = Red Keep, Jesuit Staircase = Walk of Shame stairs, St. Dominika Street = various King's Landing scenes. Download the free GoT map from the Dubrovnik tourist office.",
            "5:00pm — Cable car up Mount Srđ (€25 return, summit at 412m). The panorama over the Old Town, the islands, and the Adriatic is genuinely one of the best views in all of Europe. Sunset from the top if timing works.",
            "8:00pm — Dinner outside the Old Town walls — walk 5 minutes through the Pile Gate to Lapad or Gruz neighbourhoods and prices drop by 40%. Grilled fish €15–25, local wine €4–8 per glass.",
          ],
          cost: "€65–85 total",
        },
        {
          day: "Day 2",
          title: "Lokrum Island & Banje Beach",
          items: [
            "9:30am — Ferry to Lokrum Island from the Old Town harbour (€20 return, ferries run every 30–60 minutes). The island is a short nature reserve — peacocks roam freely among the trees and ruins.",
            "10:00am — Lokrum's Game of Thrones Iron Throne replica (free with island entry). Located in the medieval monastery — one of the few permanent GoT museum pieces in Dubrovnik. The botanical garden founded by Archduke Maximilian in 1859 is also worth 30 minutes.",
            "11:30am — Dead Sea Lake (Mrtvo More) on Lokrum — a saltwater lake connected to the sea, warm and calm. Free swimming once you're on the island.",
            "1:00pm — Picnic on Lokrum: bring food from the Old Town's Konzum supermarket or eat at the island's small café (€8–12 meals). The island has limited dining so self-catering is budget-smart.",
            "3:00pm — Ferry back to Dubrovnik. Banje Beach (the main Old Town beach, 5 minutes' walk from the Ploče Gate) — sunbeds €5–10 to hire, or find a free rock. The beach faces directly at the Old Town walls — excellent photography.",
            "6:30pm — Cable car again at sunset if you missed it yesterday, or walk up the hillside path behind the Old Town (free, 45 minutes, equally spectacular and completely free).",
            "8:00pm — Cold homemade rakija (brandy) at any konoba (tavern) outside the walls. Ask for domaća rakija — house-made, often free with a meal.",
          ],
          cost: "€40–65 total",
        },
        {
          day: "Day 3",
          title: "Kotor, Montenegro Day Trip",
          items: [
            "7:30am — Early bus from Dubrovnik's main bus station (Autobusni Kolodvor) to Kotor, Montenegro. Journey: approximately 2 hours, €15 return. Buy tickets the day before if possible. Bring your passport — you cross an international border.",
            "8:00am — Watch the Bay of Kotor unfold from the bus window: the bus winds along the fjord's edge, the water reflecting the limestone mountains above. Widely considered the most beautiful bay in Europe.",
            "9:30am — Arrive Kotor Old Town (UNESCO World Heritage Site, free to enter). The medieval walled city is compact, cat-friendly (Kotor is famous for its cats), and far less crowded than Dubrovnik. The Venetian architecture is pristine.",
            "10:00am — Cathedral of Saint Tryphon (€3, Kotor's finest interior, 12th century Romanesque). The treasury holds Byzantine jewellery and medieval relics.",
            "11:00am — Kotor City Walls hike (€8). The walls climb steeply up the mountain behind the town to the fortress of San Giovanni (260m). It's steep (1,355 steps) but the views over the bay at the top are extraordinary. Take water.",
            "1:00pm — Lunch in Kotor Old Town: grilled squid and local wine at a waterfront restaurant. Kotor is notably cheaper than Dubrovnik — a full lunch €12–18.",
            "3:30pm — Bus back to Dubrovnik, arriving early evening. Dinner in Dubrovnik's Gruz harbour area.",
          ],
          cost: "€35–60 total (transport + Kotor entry)",
        },
        {
          day: "Day 4",
          title: "Split Day Trip & Diocletian's Palace",
          items: [
            "6:30am — Early ferry or bus to Split. Ferry: 3–4 hours, scenic, Jadrolinija ferry company (€15–25 one way). Bus: 4 hours, cheaper (€12–18). Book the day before — summer sailings sell out.",
            "10:00am — Arrive Split. Diocletian's Palace is not a ruin — it is a living city. Forty percent of Split's Old Town is built inside a 1,700-year-old Roman imperial palace. People live in apartments inside ancient Roman walls, cafés occupy Roman cellars, and the cathedral is a converted Roman mausoleum. The UNESCO site is entirely free to walk.",
            "10:30am — Peristyle (the palace's central courtyard, free) — coffees at the café on the ancient stone pavement. Diocletian's Cathedral and Baptistry (€10 combined entry, the most intact Roman mausoleum on earth).",
            "12:00pm — Lunch in the palace's vaulted cellars (Vestibule area, €12–18) or climb the bell tower for views over the red-tiled rooftops (€5).",
            "1:30pm — Explore the Golden Gate, Silver Gate, Iron Gate, and Bronze Gate — the four original Roman entrance arches. Gregory of Nin statue (rub his toe for good luck) at the Golden Gate.",
            "3:30pm — Ferry or bus back to Dubrovnik. Evening arrival. Final dinner in the Old Town — splurge on one proper seafood meal at Restaurant 360 or similar with Adriatic view (€40–60/person).",
            "Note: If you have only 4 days and want to do both Kotor AND Split, pick one for Day 3 and one for Day 4 — both itineraries work as written.",
          ],
          cost: "€35–60 total (transport + entry fees)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€150–280/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town, Walls & Sunset Dining",
          items: [
            "Check in to a 3-star hotel or boutique guesthouse inside or near the Old Town. Properties on Stradun itself: €120–200/night but unbeatable location. Ploče or Pile Gate areas: €90–140/night.",
            "9:00am — City Walls walk with audio guide (€35 entry, audio guides available at the gate). The narrated history of the Republic of Ragusa — Dubrovnik's remarkable centuries of independence — transforms the circuit.",
            "12:00pm — Lunch at Restaurant Nautika (just outside Pile Gate, seafood, terrace overlooking the Adriatic, €35–50/person) — Dubrovnik's most scenic mid-range dining.",
            "3:00pm — Private Game of Thrones walking tour (€25–35/person, small group, 2 hours) — guides take you to every filming location with production photos and behind-the-scenes stories.",
            "6:00pm — Cable car to Mount Srđ at sunset. Dinner at the summit restaurant (€30–45/person) with the Old Town spread below.",
            "9:00pm — Evening stroll on the Stradun — the limestone glows white under the floodlights. Aperol Spritz at a Stradun terrace café, €7–9.",
          ],
          cost: "€150–220 total",
        },
        {
          day: "Day 2",
          title: "Sea Kayaking & Lokrum",
          items: [
            "8:30am — Sea kayaking around the Old Town walls (€25–35/person, 3 hours). Paddle at sea level along the base of the city walls, through sea caves, and around Fort Lovrijenac. The Game of Thrones perspective from the water is unlike anything from land.",
            "12:00pm — Lunch back in the Old Town. Oyster Bar Bota Šare (near Ploče Gate) for fresh Adriatic oysters (€12–18 per half dozen) and local Pelješac white wine.",
            "2:00pm — Private ferry or water taxi to Lokrum (€25–35 return, private departure). Explore the monastery ruins, botanical gardens, and the peacock colonies at leisure.",
            "5:00pm — Banje Beach with sunbeds and service (€15–25 for full sunbed service). The beach bar serves cocktails with an Old Town backdrop.",
            "8:00pm — Dinner reservation at Restaurant Dubrovnik (Old Town, modern Croatian cuisine, €35–55/person, book 2 days ahead in season).",
          ],
          cost: "€170–240 total",
        },
        {
          day: "Day 3",
          title: "Hvar Island — Croatia's Most Beautiful",
          items: [
            "7:00am — Catamaran to Hvar Island (Krilo or Jadrolinija, €25–35 one way, 2 hours). Hvar is Croatia's most famous island — lavender fields, Renaissance architecture, and the clearest water in the Adriatic.",
            "9:30am — Hvar Town: the main square (Trg Svetog Stjepana, the largest piazza in Dalmatia), the Cathedral of Saint Stephen (free), and the fortress above (Fortica, €10, views to the Pakleni Islands).",
            "11:00am — Rent a small boat or join an island-hopping tour to the Pakleni Islands (€15–25/person). The crystal-clear bays are accessible only by water — some of the best swimming in the Mediterranean.",
            "1:00pm — Lunch in Hvar Town: grilled lobster at a harbour restaurant (€45–65/person) or wood-fired pizza at Dalmatino (€12–18). Pag cheese and prosciutto as starters.",
            "4:00pm — Catamaran back to Dubrovnik. Evening arrival.",
            "8:00pm — Dinner in Dubrovnik: grilled Adriatic sea bass with local Plavac Mali red wine. Konoba Ekvinocijo for genuine local cooking at €25–40/person.",
          ],
          cost: "€160–250 total",
        },
        {
          day: "Day 4",
          title: "Kotor & Split in Comfort",
          items: [
            "7:30am — Private transfer to Kotor, Montenegro (€80–120 for a private car, 2 hours). Far more comfortable than the bus and the driver can stop at the best bay viewpoints.",
            "9:30am — Kotor Old Town: Cathedral of Saint Tryphon, the Maritime Museum (€5), and the full city walls hike (€8). Kotor at mid-morning before the cruise ships is a different experience from the afternoon crowds.",
            "1:00pm — Long lunch at a konoba in Kotor overlooking the bay. Lamb peka (cooked under a bell with coals, pre-order 24 hours ahead) €20–30/person, local wine.",
            "4:00pm — Return private transfer to Dubrovnik via the coast road. Stop at Perast village (20 minutes from Kotor) and take a boat to Our Lady of the Rocks island church (€5) — the most photographed spot in Montenegro.",
            "8:00pm — Final dinner in Dubrovnik. Restaurant 360 for modern Croatian cuisine with a terrace on the city walls (€50–80/person, book 3–5 days in advance in season).",
          ],
          cost: "€200–300 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€450–1200+/day",
      days: [
        {
          day: "Day 1",
          title: "Private Old Town & Hilltop Dinner",
          items: [
            "Check in to Villa Dubrovnik (Vlaha Bukovca, cliff-side property with private beach, sea-view rooms €350–700/night) or Excelsior Hotel & Spa (rooms with direct Old Town views, €400–900/night).",
            "Private transfer from Dubrovnik Airport in a luxury vehicle (€80–100).",
            "10:00am — Private walking tour of the Old Town with a licensed local historian (€150–200 for 3 hours). The story of the Republic of Ragusa — the independent merchant republic that out-negotiated Venice, the Ottomans, and the Habsburgs for centuries — is extraordinary.",
            "1:00pm — Lunch at Nautika restaurant (private terrace reservation, seafood tasting menu €80–120/person, Adriatic views).",
            "4:00pm — Private cable car reservation at sunset — the cable car company offers private cabin bookings for groups (€200–300, exclusive summit access).",
            "8:00pm — Dinner at Restaurant 360 (Old Town walls terrace, 8-course tasting menu €120–160/person, paired wines extra). Book 1 week ahead in peak season.",
          ],
          cost: "€500–900 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Yacht & Elafiti Islands",
          items: [
            "9:00am — Private yacht charter to the Elafiti Islands (Koločep, Lopud, Šipan) — full day, €600–1,200 for the boat, all-inclusive. The islands are car-free, the water is crystal clear, and the experience is completely private.",
            "11:00am — Swimming stop at Šunj Beach on Lopud — Croatia's finest sand beach (most Croatian beaches are pebble). The yacht anchors, you swim off the side.",
            "1:00pm — Onboard lunch prepared by the charter crew: fresh grilled fish, Dalmatian charcuterie, local wines.",
            "3:00pm — Koločep Island: the oldest continuously inhabited island in Dalmatia, with almost no visitors. Walk through the pine forest to the small village.",
            "6:00pm — Return to Dubrovnik harbour. Sunset aperitivo at the hotel terrace.",
            "8:30pm — Dinner at Restaurant Proto (Fish Square, Old Town, Dubrovnik's most historic seafood restaurant, €60–90/person).",
          ],
          cost: "€800–1,400 total (yacht + dining)",
        },
        {
          day: "Day 3",
          title: "Helicopter to Kotor & Montenegro",
          items: [
            "9:00am — Helicopter transfer to Kotor, Montenegro (€300–500/person, 20-minute flight over the Adriatic and into the bay). The aerial view of the Bay of Kotor is extraordinary.",
            "10:00am — Private guide in Kotor (€120–180 for 3 hours) — the full historical circuit with the city walls hike, cathedral treasury access, and Medieval walls at your pace.",
            "1:00pm — Lunch at Galion restaurant, Kotor (waterfront, seafood, €50–80/person).",
            "3:00pm — Helicopter or private boat back to Dubrovnik. Afternoon spa treatment at your hotel.",
            "8:00pm — Farewell dinner at Villa Dubrovnik's restaurant: private terrace over the sea, chef's tasting menu (€120–180/person), paired with Dalmatian wines.",
          ],
          cost: "€700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Split & Diocletian's Palace by Speedboat",
          items: [
            "8:00am — Private speedboat to Split (2 hours, €400–600 for the boat, up to 8 passengers). Arrive directly at the Split harbour, steps from Diocletian's Palace.",
            "10:00am — Private archaeological guide through Diocletian's Palace (€150–200 for 2 hours). Access the substructures (cellars) before opening hours with a specialist who explains how a living city grew organically inside a Roman palace.",
            "12:30pm — Lunch at Zinfandel Food & Wine Bar, Split (€40–60/person), or a private lunch arranged by your guide at a local konoba.",
            "3:00pm — Return speedboat to Dubrovnik. Afternoon at leisure.",
            "6:00pm — Farewell cocktails at the Hotel Excelsior Promenade. Limoncello spritz watching the walls turn gold in the last light.",
            "Note: The transfer costs make most sense split across a group. Solo or couple travellers may prefer the ferry which is scenic in its own right.",
          ],
          cost: "€600–1,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€25–50", food: "€15–25", transport: "€5–15", activities: "€15–30", total: "€60–120/day" },
    { tier: "✨ Mid-Range", accommodation: "€80–160", food: "€35–60", transport: "€15–35", activities: "€25–50", total: "€155–305/day" },
    { tier: "💎 Luxury", accommodation: "€300–700", food: "€80–200", transport: "€50–200", activities: "€80–200", total: "€510–1,300/day" },
  ],
  mistakes: [
    {
      icon: "🌞",
      title: "Visiting in July–August",
      desc: "Dubrovnik in peak summer (July–August) receives upward of 6,000 cruise ship tourists daily on top of hotel guests. The city walls queue can be 2 hours. The Stradun is shoulder-to-shoulder. Prices for accommodation are 3x those of May or September. Visit May–June or September–October and you'll have the same city at a third of the cost with a fraction of the crowd.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎟️",
      title: "Queuing to Buy City Walls Tickets on the Day",
      desc: "The City Walls ticket (€35) can be bought online in advance at the Dubrovnik tourist website. In peak season the queue to buy at the gate is 30–60 minutes. Buy online, print or download the QR code, and walk straight to the entrance. Also: walk the walls at 8am opening — by 11am it's unpleasantly crowded.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "⛵",
      title: "Skipping the Island Day Trips",
      desc: "Most visitors spend all four days in the Old Town, which you can cover thoroughly in one day. The real Dalmatia is out on the water — Lokrum with its peacocks, the Elafiti Islands with their pine forests, and the ferry up the coast to Hvar or Split. At least one full island day is essential to understanding the region.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Eating Inside the Old Town Walls",
      desc: "Restaurants on the Stradun and within the Old Town walls charge 2–3x the price of identical food just outside the walls. The Pile Gate area (west of the walls) and Gruz harbour (15 minutes on the bus) have excellent konobas with local cooking at local prices. Walk out of the tourist zone and your meal budget roughly halves.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "City Walls at 8am Opening",
      desc: "The walls open at 8am. Arrive at 8:00am sharp and you will have the full 2km circuit almost entirely to yourself. The morning light on the terracotta rooftops and the Adriatic is extraordinary, temperatures are 10–15°C cooler than midday, and you finish before the cruise ship tourists even dock. By 11am, the walls are so crowded you can barely move on some sections.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚣",
      title: "Sea Kayaking Around the Old Town",
      desc: "Sea kayaking around the base of Dubrovnik's walls (€25–35 for a 3-hour guided tour) gives you a completely different perspective — the walls rise 25 metres directly from the sea, and the Game of Thrones filming locations look completely different at water level. One of the best physical experiences in all of Croatia, and significantly cheaper than most activities.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏰",
      title: "Kotor Bay at Dawn from the Bus Window",
      desc: "If you take the early 7:30am bus to Kotor, you arrive in Montenegro as the morning light hits the bay. The road clings to the fjord edge and the water is mirror-calm at that hour. Bring a window seat and a camera. This is genuinely one of the most beautiful coastal drives in Europe and it costs €15 return.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏛️",
      title: "Split's Diocletian's Palace at 6am",
      desc: "People live, work, and do their morning shopping inside a 1,700-year-old Roman palace. At 6am you can walk the Peristyle courtyard with just the residents heading to work, watch the morning market set up between Roman columns, and drink coffee in a medieval cellar before the tour groups arrive. Nothing quite like it anywhere in Europe.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Where are the Game of Thrones filming locations in Dubrovnik?",
      a: "Dubrovnik served as King's Landing in Game of Thrones for Seasons 2–8. Key locations: Fort Lovrijenac (the Red Keep exterior), the Jesuit Staircase (Cersei's Walk of Shame), St. Dominika Street (various King's Landing street scenes), the Old Town harbour (the harbour of King's Landing), Pile Gate area (Blackwater Bay battle scenes), and Lokrum Island (the Qarth scenes in Season 2). The Dubrovnik tourist office has a free GoT locations map.",
    },
    {
      q: "Do Indian nationals need a visa for Croatia?",
      a: "Croatia joined the Schengen Area on January 1, 2023. As of 2026, Indian passport holders should check the current policy with the Croatian Embassy or VFS Global, as Schengen accession may have changed entry requirements. A valid Schengen visa from another EU country may allow entry to Croatia. Always verify current requirements 2–3 months before travel as policy can change.",
    },
    {
      q: "When is the best time to visit Dubrovnik to avoid crowds?",
      a: "May and early June, or September and October. These months have warm weather (22–28°C), calm Adriatic water, and a fraction of the summer crowds. July and August bring extreme heat (35°C+), 6,000+ daily cruise ship visitors, significantly higher prices, and queues everywhere. If you must visit in summer, stay at least a week — the city empties slightly after 6pm when day trippers leave.",
    },
    {
      q: "Should I choose Split or Dubrovnik as a base?",
      a: "They are different experiences. Dubrovnik is a perfectly preserved, UNESCO-listed medieval city primarily oriented toward tourism — stunning but increasingly crowded and expensive. Split is a living, working Croatian city where Diocletian's Palace has been organically inhabited for 1,700 years — grittier, more authentic, considerably cheaper, and with better ferry connections to the islands. If you have 7+ days, base in Split (2–3 nights) and day-trip or overnight in Dubrovnik.",
    },
    {
      q: "How do I plan a ferry island-hopping route from Dubrovnik?",
      a: "The classic route: Dubrovnik → Korčula (3 hours by catamaran, €15–20) → Hvar (1 hour by catamaran, €10–15) → Split (1 hour by catamaran, €10–15). All routes operated by Jadrolinija and Krilo. Book 1–2 days ahead in summer, same-day in shoulder season. A 7-day island-hopping trip from Dubrovnik to Split costs approximately €80–120 in ferry tickets alone. The scenery on every crossing is spectacular.",
    },
  ],
  combineWith: ["rome-4-days", "athens-4-days", "paris-5-days"],
  relatedSlugs: ["paris-5-days", "switzerland-5-days", "jordan-5-days"],
  galleryQuery: "dubrovnik croatia old town adriatic sea walls",
};

export const metadata: Metadata = {
  title: "Dubrovnik in 4 Days: City Walls, Game of Thrones, Kotor & Island Hopping (2026)",
  description: "Complete 4-day Dubrovnik guide with City Walls strategy, Game of Thrones locations, Kotor Bay day trip, island hopping route, and real euro costs for every budget.",
  keywords: ["dubrovnik itinerary 4 days", "dubrovnik travel guide 2026", "game of thrones dubrovnik", "croatia travel guide", "kotor day trip dubrovnik", "dubrovnik city walls"],
  openGraph: {
    title: "Dubrovnik in 4 Days: City Walls, Game of Thrones & Island Hopping",
    description: "City Walls at dawn, GoT filming locations, Kotor Bay, and island hopping — real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1555990793-da11153b6745?w=1200&q=80", width: 1200, height: 630, alt: "Dubrovnik Old Town City Walls Adriatic Sea Croatia" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Dubrovnik in 4 Days (2026)", description: "City Walls, GoT locations, Kotor Bay, and island hopping guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/dubrovnik-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Dubrovnik in 4 Days: City Walls, Game of Thrones, Kotor & Island Hopping (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1555990793-da11153b6745?w=1200&q=80",
      description: "Complete 4-day Dubrovnik guide covering City Walls, Game of Thrones locations, Kotor Bay day trip, island hopping, and real euro costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Dubrovnik 4 Days", item: "https://www.incredibleitinerary.com/blog/dubrovnik-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Dubrovnik, Croatia",
      description: "UNESCO World Heritage city on the Adriatic coast, famed for its medieval Old Town, city walls, Game of Thrones filming locations, and ferry connections to Croatia's islands.",
      touristType: ["Cultural tourists", "History enthusiasts", "Film location fans", "Island hoppers"],
      geo: { "@type": "GeoCoordinates", latitude: 42.6507, longitude: 18.0944 },
    },
  ],
};

export default function DubrovnikPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
