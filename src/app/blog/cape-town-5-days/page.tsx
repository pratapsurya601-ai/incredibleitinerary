import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Cape Town",
  country: "South Africa",
  countryFlag: "🇿🇦",
  slug: "cape-town-5-days",
  heroQuery: "cape town table mountain south africa sunset ocean",
  heroAlt: "Cape Town Table Mountain with cable car overlooking Atlantic Ocean South Africa",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro: "Cape Town is the kind of city that makes you cancel your return flight. Table Mountain rises straight out of the downtown streets and you can hike it before breakfast. An hour south, African penguins waddle on a beach between crashing Atlantic waves. An hour east, the Winelands produce some of the southern hemisphere's finest Pinot Noir. In five days you get all of it — and enough time left to sit at a beach bar in Camps Bay watching the sun drop behind the Atlantic as the mountains go pink behind you.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$50",
    bestMonths: "Nov–Apr (summer)",
    airport: "CPT (Cape Town International)",
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
        ["E-Visa Required", "Indian passport holders must apply for a South African e-Visa online before travel. Fee: approximately R$600 (~$33 USD). Apply at the South African Department of Home Affairs e-Visa portal. Allow a minimum of 3 weeks for processing — approvals can take 10–25 working days. Peak travel seasons (December–January) may take longer."],
        ["Required Documents", "Completed online application, valid passport (minimum 30 days validity beyond your intended departure from South Africa, and at least 2 blank pages), recent passport-sized photograph meeting biometric specifications, confirmed return flight ticket, proof of accommodation (hotel bookings), sufficient funds evidence (bank statements), and travel insurance covering medical evacuation."],
        ["Yellow Fever", "Yellow Fever vaccination certificate is required if you are arriving from or transiting through a Yellow Fever endemic country. India is not on the South Africa risk list, so most Indian travelers are exempt. However, if you transit through Nairobi, Entebbe, Lagos, or other endemic airports, you may be required to show certification. Check the South Africa DHA portal for the current list."],
        ["Port of Entry", "Cape Town International Airport (CPT) is a designated e-Visa port of entry. Present your e-Visa approval email (digital or printed) with your passport at immigration. Biometrics (fingerprints and photo) are collected at the airport on first entry. Processing is usually 5–15 minutes."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Entry", "USA, UK, Canada, Australia, New Zealand, and most EU passport holders can enter South Africa visa-free for tourist stays up to 90 days. No pre-approval required — present your passport at immigration. Ensure your passport has at least 30 days validity beyond your intended departure date and at least 2 blank visa pages (South African immigration is strict about blank pages)."],
        ["30-Day Default Stamp", "Immigration officers will stamp your passport with 30 days as the default even if you're entitled to 90 days. If you need more than 30 days, verbally request 90 days when presenting your passport. Overstaying is taken seriously — it can result in deportation and a ban from re-entry."],
        ["UK Post-Brexit", "UK passport holders retain visa-free access to South Africa for up to 90 days. No ETIAS equivalent is in place. Standard requirements: blank pages and validity beyond departure. South Africa is not a Schengen country so European Schengen rules do not apply."],
        ["Children Traveling", "South Africa has strict documentation requirements for children (under 18) traveling internationally, including with both parents. Unabridged birth certificates are required for all minors. Failure to produce these documents has resulted in travelers being denied boarding or denied entry. This applies regardless of nationality."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$50–85/day",
      days: [
        {
          day: "Day 1",
          title: "Table Mountain, Bo-Kaap & Signal Hill",
          items: [
            "Arrive at Cape Town International Airport (CPT). Uber to the City Bowl or Green Point ($8–12, 25 minutes) — public transport from the airport is limited and not recommended with luggage. Check in to Once in Cape Town Hostel (R$350–600/night, $19–33, Green Point area, excellent reviews) or The Backpack Cape Town (R$280–500, De Waterkant).",
            "Morning: Table Mountain cable car (R$440 return, ~$24) — the iconic flat-topped mountain is viewable from almost everywhere in the city. Buy tickets online in advance (table-mountain.net) and arrive for the first cable car at 8am before the clouds build. The top is windy — bring a layer regardless of the forecast.",
            "Alternatively: hike Platteklip Gorge (free, 2 hours up via a well-marked path, same cable car ride down using your return ticket). The gorge is Cape Town's most popular hiking route — well-marked, steep but manageable, and the views from the summit plateau over the city and both oceans are extraordinary.",
            "Afternoon: Bo-Kaap neighbourhood (free to walk) — the pastel-painted houses of the former Cape Malay Quarter. This is one of Cape Town's most photographed streets and genuinely the most visually distinctive neighborhood in South Africa. Walk the main Wale Street and Rose Street. The Cape Malay community has been here since the 17th century — descendants of enslaved workers brought from Malaysia and Indonesia by the Dutch.",
            "V&A Waterfront: free to walk (Two Oceans Aquarium R$220 ~$12 if you want to go in). The waterfront precinct has excellent free street food, harbour seals on the docks, and views of Table Mountain from the water.",
            "Sunset: drive or Uber to Signal Hill (free, R$0) — the viewpoint at the top of the hill above Bo-Kaap faces directly west over the Atlantic Ocean and has the best free sunset view in Cape Town. The noon gun fires from the adjacent Lion's Head viewpoint daily at noon (automated, not a tourist event — but audible from anywhere in the City Bowl).",
          ],
          cost: "R$600–900 / $33–50 total",
        },
        {
          day: "Day 2",
          title: "Cape Peninsula: Penguins, Cape Point & Chapman's Peak",
          items: [
            "Rent a car for the day (R$350–600 / $19–33 for a small car) — a Cape Peninsula circuit is impossible without a vehicle. Alternatively, book a half-day group tour ($25–35/person) that covers the main stops.",
            "8:30am: Drive south via the M3 highway past Muizenberg to Simon's Town. Boulders Beach penguin colony (R$220, ~$12) — African penguins (formerly called Jackass penguins for their braying call) nesting on a sheltered beach between granite boulders. Arrive before 9am to have the beach relatively to yourself before the tour groups. 3,000+ penguins in the colony; they come to within 2 meters and are entirely unafraid.",
            "Continue south to Cape Point (Table Mountain National Park, R$404 / ~$22 entry). This is the most southwesterly tip of the African continent and the point where the Atlantic and Indian Ocean currents meet — visible as a turbulence line on clear days. The old lighthouse at the top (reachable by funicular R$92 extra, or a 20-minute walk) has 360-degree ocean views.",
            "Lunch at a fish restaurant in Simon's Town or Hout Bay — fresh snoek, hake, and calamari at R$80–150 / $4.50–8.50 per dish.",
            "Afternoon: Chapman's Peak Drive (R$50 / $2.75 toll, the most spectacular coastal road in South Africa, 9km of cliff-hugging highway above the Atlantic). Hout Bay fishing village. Noordhoek Beach (wild, long, largely empty beach — horses allowed).",
            "Return to Cape Town via the Atlantic Seaboard — drive past Camps Bay, Clifton (four small protected cove beaches, difficult parking but worth stopping), and Sea Point promenade for the final stretch.",
          ],
          cost: "R$900–1,400 / $50–77 total (incl. car, entries, fuel, lunch)",
        },
        {
          day: "Day 3",
          title: "Cape Winelands: Stellenbosch & Franschhoek",
          items: [
            "Drive 45 minutes east on the N2 to Stellenbosch (or take the City Sightseeing Wine Tram from Franschhoek, R$395–650 / $22–35). The Winelands are the most visually beautiful wine region in the southern hemisphere — Dutch Cape architecture, oak-lined streets, mountain backdrops.",
            "Stellenbosch: park the car in the town center and walk. The Stellenbosch Village Museum (R$80 / $4.40) covers 4 centuries of Cape domestic architecture in 4 period houses. The main oak-lined Dorp Street has 30+ wine estates within walking distance offering tastings R$80–250 ($4.50–14) per tasting session of 4–6 wines.",
            "Franschhoek (French Huguenot village, 30 minutes from Stellenbosch): even more beautiful than Stellenbosch with a single main street lined with world-class restaurants and wine estates. The Franschhoek Wine Tram (R$395–650 / $22–35) is a hop-on hop-off tram that stops at 8 wine estates on a circuit — the best value wine tour in the Cape.",
            "Lunch in Franschhoek: La Petite Ferme ($30–45, mountain views), The Tasting Room at Le Quartier Français (one of South Africa's finest restaurants, $80–120 tasting menu), or a picnic on a wine estate lawn with a bottle from the cellar door.",
            "Drive back to Cape Town via Stellenbosch and the R44 coastal route — beautiful mountain scenery. Back in Cape Town by 6:30pm.",
          ],
          cost: "R$600–1,200 / $33–66 total (self-drive, moderate tastings, budget lunch)",
        },
        {
          day: "Day 4",
          title: "Robben Island, Long Street & Company's Garden",
          items: [
            "8:30am: Depart for the V&A Waterfront ferry terminal. Robben Island tour (R$750 / ~$41, includes return ferry + guided tour, 3.5 hours total). The island is where Nelson Mandela was imprisoned for 18 of his 27 years — the cell is preserved exactly as it was. Tours are led by former political prisoners who were incarcerated there themselves. An extraordinary and sobering experience.",
            "CRITICAL BOOKING NOTE: Robben Island ferries sell out weeks and sometimes months in advance, especially December–April. Book online immediately at robben-island.org.za the moment your trip is confirmed. Walk-up tickets are almost never available in peak season.",
            "Afternoon: Long Street (Cape Town's main backpacker and bar strip) — Victorian buildings with cast iron balconies, bookshops (Clarke's Books is a Cape Town institution), the Long Street Baths (Victorian public bathhouse, R$60 for a swim), vintage clothing shops.",
            "Green Market Square (open-air craft market, free to browse) — African crafts, beadwork, drums, wire sculpture, carvings. Reasonable prices with some negotiation expected.",
            "Company's Garden (free): the original VOC vegetable garden established in 1652 by Jan van Riebeeck — now a public park with squirrels, a rose garden, and the South African Museum (R$60 / $3.30) on the southern edge. The museum has an excellent San Bushmen rock art collection and natural history exhibits.",
            "Evening: Dinner on Bree Street (Cape Town's best restaurant street) — Publik Wine Bar for natural wines and charcuterie ($15–25), or Bocca for wood-fired pizza with Cape wines ($12–20).",
          ],
          cost: "R$1,000–1,400 / $55–77 total",
        },
        {
          day: "Day 5",
          title: "Kalk Bay, Muizenberg Surf & Camps Bay Farewell",
          items: [
            "Morning: Drive south to Kalk Bay fishing village — the most charming village on the False Bay coast. The Kalk Bay harbour still has working fishing boats unloading fresh snoek every morning (best at 7–9am). Fresh grilled fish and oysters on the harbour wall, R$40–80.",
            "Muizenberg Beach (5 minutes from Kalk Bay): famous for its row of colourful Victorian bathing boxes (the most photographed beach image in Cape Town) and its gentle breaking waves — the best beginner surfing beach in South Africa. Rent a board and wetsuit for R$150 / $8.50 and get a 1-hour beginner surf lesson for R$350–500 / $19–27.",
            "Lunch at Olympia Café in Kalk Bay (Cape Town institution, fish-forward menu, R$120–180 / $6.50–10, expect a queue — worth it).",
            "Afternoon: Return to Cape Town via the coastal road — stop at St James for the tidal pool and colourful bathing boxes (free swimming, small sheltered cove, sheltered from the open sea swell).",
            "Sunset: Camps Bay beachfront (the most glamorous beach strip in Cape Town, facing due west over the Atlantic). Sundowners at The Bungalow or Chinchilla are pricier (R$80–120 / $4.50–6.50 per drink) but the combination of white sand, Twelve Apostles mountain range backdrop, and Atlantic sunset is worth one splurge evening.",
            "Farewell dinner: Seapoint Promenade restaurants or a final braai (South African barbecue) at a restaurant on the V&A Waterfront.",
          ],
          cost: "R$600–1,100 / $33–60 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$150–280/day",
      days: [
        {
          day: "Day 1",
          title: "Table Mountain & Atlantic Seaboard Arrival",
          items: [
            "Arrive CPT. Uber to a mid-range hotel in the V&A Waterfront or Green Point area ($10–15). Check in to The PortsWood Hotel (R$1,800–3,200/night, V&A Waterfront), Dock House Boutique Hotel (R$2,000–3,500), or The Gorgeous George in the City Bowl (R$1,400–2,500/night).",
            "Morning: Table Mountain cable car with priority access (book 8am slot online for R$440). Spend 1.5–2 hours on the top plateau — walks, the fynbos (unique Cape floral kingdom found nowhere else on Earth), and views across the Cape Peninsula.",
            "Afternoon: Clifton Beaches (numbers 1–4, connected cove beaches, reached by stairs). Clifton 4th Beach is the most popular and has the most sophisticated beach scene in South Africa — white sand, granite boulders, and consistent Atlantic swell.",
            "V&A Waterfront evening — the Clock Tower precinct has Cape Malay food stalls, craft beer at Mitchell's Brewery (R$65–90 per pint), and the Nobel Square sculpture garden commemorating South Africa's four Nobel Peace Prize winners.",
            "Dinner: The Test Kitchen (if booked months ahead, $80–120 tasting menu, consistently rated among the top 50 restaurants in the world) or Waterfront restaurant row at more accessible prices.",
          ],
          cost: "R$1,200–2,200 / $66–120 total",
        },
        {
          day: "Day 2",
          title: "Cape Peninsula Private Day Trip",
          items: [
            "Book a private Cape Peninsula tour with your own vehicle and driver-guide ($80–120/person for a full day including commentary). The difference from self-drive: a knowledgeable guide explaining the history and ecology at every stop, plus no navigation stress on unfamiliar roads.",
            "Boulders Beach penguins (arrive 9am), Cape Point with funicular, Hout Bay harbour seal island boat trip (R$100 / $5.50, the noisy Cape Fur seal colony at Duiker Island is 5 minutes by boat).",
            "Lunch at The Foodbarn in Noordhoek ($30–45, excellent contemporary South African cuisine, Franck Dangereux's legendary fish dishes).",
            "Chapman's Peak Drive at leisure — stop at the viewpoints, photograph the cliff road from above.",
            "Return via Kalk Bay: late afternoon oysters at Harbour House Kalk Bay (R$350–500 / $19–27 for a dozen fresh oysters with lemon and Tabasco).",
          ],
          cost: "R$1,500–2,500 / $83–138 total",
        },
        {
          day: "Day 3",
          title: "Winelands: Stellenbosch, Franschhoek & Wine Train",
          items: [
            "Hire a private driver for the day (R$800–1,200 / $44–66) so nobody has to be the designated driver — essential for a proper winelands experience.",
            "Stellenbosch: guided tasting at Rust en Vrede (iconic Cabernet Sauvignon estate, R$250 / $14 for a premium tasting) and Delheim (R$200 / $11 for 6 wines with estate views).",
            "Franschhoek Wine Tram (R$395–650 / $22–35, the hop-on hop-off tram connecting 8 estates) — spend 3 hours hopping at your chosen estates.",
            "Lunch at Grande Provence Estate ($40–60, one of Franschhoek's finest dining rooms with a sculpture garden).",
            "Return to Cape Town with a bottle of Cape Chenin Blanc or Pinotage from a cellar door purchase — better quality and lower price than any retail store.",
          ],
          cost: "R$1,800–3,000 / $100–165 total",
        },
        {
          day: "Day 4",
          title: "Robben Island & Cape Malay Cooking Class",
          items: [
            "8:30am Robben Island ferry (R$750 / $41, book months ahead). The tour led by a former political prisoner is one of the most moving travel experiences in Africa. Nelson Mandela's cell, the limestone quarry, the cold-water isolation in the island's surrounding waters.",
            "Early afternoon: Cape Malay cooking class in the Bo-Kaap (R$600–900 / $33–50, 2.5 hours, cook a full Cape Malay meal: bobotie — the national dish, spiced lamb mince baked with an egg custard topping — koeksisters, and masala chai). The Bo-Kaap community has preserved this cuisine through 300+ years of history.",
            "Late afternoon: Bree Street wine and art walk — Cape Town's gallery district. Everard Read gallery (free entry, exceptional South African contemporary art), followed by craft cocktails at The Test Kitchen bar or Proof cocktail bar.",
            "Evening: Dinner at Gold Restaurant (R$500–700 / $27–38, 14-course Cape African tasting menu with live drumming and music — the most theatrical dining experience in Cape Town).",
          ],
          cost: "R$1,600–2,800 / $88–154 total",
        },
        {
          day: "Day 5",
          title: "Camps Bay, Lion's Head & Farewell Sundowner",
          items: [
            "Morning: Lion's Head hike (free, 2.5 hours for the full circuit with chains and ladders sections near the summit). The peak (669m) has a 360-degree view of Table Mountain, the Atlantic, and the entire Cape Peninsula. Not as long as Table Mountain but the summit is more dramatic. Start before 8am to beat the crowds.",
            "Mid-morning: Camps Bay Beach — white sand, Twelve Apostles mountain backdrop, Atlantic Ocean clarity. Swim, walk the beachfront promenade.",
            "Lunch at Codfather Seafood & Sushi in Camps Bay (R$350–600 / $19–33, fresh fish displayed on ice — choose by the eye and it's cooked while you wait, consistently excellent).",
            "Afternoon: Hout Bay's World of Birds (R$195 / $10.75, Africa's largest bird park, 3,000 birds in walk-through aviaries) or Chapman's Peak for a final golden hour walk on the clifftop.",
            "Farewell sundowner: La Mouette Restaurant in Sea Point (excellent value tasting menu, R$650–900 / $35–50) or a classic Camps Bay sundowner at The Bungalow watching the sun drop into the Atlantic.",
          ],
          cost: "R$800–1,600 / $44–88 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$500–1,500+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Table Mountain Sunset",
          items: [
            "Private transfer from CPT Airport in a luxury vehicle ($40–60). Check in to Ellerman House (Bantry Bay, R$15,000–30,000/night, one of the finest boutique hotels in Africa — private art collection, clifftop pool, views of Robben Island) or Twelve Apostles Hotel (Camps Bay, R$8,000–18,000/night, mountain-meets-ocean setting).",
            "Afternoon: Private Table Mountain experience — contact the cable car for a private sunset slot ($200–300 arrangement through concierge) or hire a private mountain guide for the Platteklip Gorge hike with mountain botanist commentary ($150–250/person).",
            "Evening: Dinner at The Test Kitchen (Woodstock, consistently ranked in the World's 50 Best Restaurants — book 3–4 months ahead, R$1,800–2,500 / $100–138 tasting menu). Or La Colombe at Silvermist Wine Estate (mountain drive to reach it, R$1,500–2,200 / $83–121 tasting menu, equally legendary).",
          ],
          cost: "R$3,000–6,000 / $165–330 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Cape Peninsula Charter & Ocean Safari",
          items: [
            "Private Cape Peninsula charter with specialist marine guide and luxury picnic ($300–500 for vehicle, guide, and fully catered picnic at Cape Point).",
            "Boulders Beach private session with a marine biologist guide — penguin natural history explained in detail, early morning access before public opening.",
            "Afternoon: Private boat charter from Hout Bay for a great white shark cage diving trip (Gansbaai, 2.5 hours from Cape Town, $200–300/person including transfer — one of the world's premier marine wildlife experiences) or whale watching charter (July–November, southern right whales in False Bay, $80–150/person).",
            "Return to hotel for a spa treatment — Twelve Apostles spa offers signature Cape Fynbos treatments using indigenous botanical ingredients (R$1,500–2,500 / $83–138 for a 90-minute session).",
          ],
          cost: "R$4,000–8,000 / $220–440 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Winelands by Helicopter",
          items: [
            "Helicopter transfer from the V&A Waterfront helipad to Franschhoek ($250–350/person, 15-minute flight with Table Mountain and False Bay views from the air — incomparable).",
            "Private winery tour at Tokara ($60–80/person, estate with restaurant and sculpture park, exceptional olive oil and Bordeaux-style reds) and Boekenhoutskloof (R$450–600 / $25–33 premium tasting, home of Chocolate Block, one of South Africa's most exported wines).",
            "Lunch at The Tasting Room at Le Quartier Français (Franschhoek, $100–150 tasting menu, among South Africa's finest restaurants).",
            "Helicopter return to Cape Town or private car with en-route wine purchase from cellar doors.",
            "Evening: Cape Grace Hotel Bascule Whisky Bar (the most extensive Cape Malt collection in South Africa, whisky flights R$300–600 / $16–33) followed by dinner at the Silo Hotel rooftop restaurant.",
          ],
          cost: "R$5,000–10,000 / $275–550 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Robben Island VIP & City Art Tour",
          items: [
            "Private Robben Island experience ($250–400, arranged through concierge for a dedicated guide rather than a group tour — a former prisoner available for a private session, Q&A, and extended access).",
            "Afternoon: Private Cape Town art gallery tour with a curator ($150–250, covers Everard Read, SMAC Gallery, and the Zeitz MOCAA — the Zeitz Museum of Contemporary Art Africa at the V&A Waterfront is the largest museum of contemporary African art in the world, R$220 / $12 entry, extraordinary converted grain silo building by Thomas Heatherwick).",
            "Cocktails at The Gin Bar (Cape Town is South Africa's craft gin capital — 40+ local gins), followed by dinner at Pier ($80–120, V&A Waterfront, outstanding seafood and Cape wine list).",
          ],
          cost: "R$3,500–6,000 / $193–330 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Farewell: Lion's Head & Clifton Sundowner",
          items: [
            "Private sunrise hike on Lion's Head with a mountain guide ($100–150/person, guide provides coffee and pastries at the summit while you watch the sun rise over the city below and the Atlantic Ocean stretches south to Antarctica).",
            "Late breakfast at your hotel: full cooked breakfast on your room's private terrace with mountain or ocean views.",
            "Afternoon: Private chef experience — a Cape Town chef comes to your villa or suite and prepares a farewell lunch using ingredients from the Oranjezicht City Farm Market (R$2,500–5,000 / $138–275 for a private 4-course lunch for two).",
            "Sunset: Private cliffside drinks at Ellerman House or a chartered sunset boat leaving the V&A Waterfront — 90 minutes on the water watching the sun set behind Table Mountain from the sea.",
            "Private transfer to CPT Airport for your departure.",
          ],
          cost: "R$3,000–6,000 / $165–330 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "R$280–600 ($15–33)",
      food: "R$80–200 ($4.50–11)",
      transport: "R$100–350 ($5.50–19)",
      activities: "R$220–750 ($12–41)",
      total: "$50–85/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "R$1,400–3,500 ($77–193)",
      food: "R$300–700 ($16–38)",
      transport: "R$200–600 ($11–33)",
      activities: "R$400–1,200 ($22–66)",
      total: "$150–280/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "R$8,000–30,000 ($440–1,650)",
      food: "R$800–3,000 ($44–165)",
      transport: "R$500–2,000 ($27–110)",
      activities: "R$800–5,000 ($44–275)",
      total: "$500–1,500+/day",
    },
  ],
  mistakes: [
    {
      icon: "🎫",
      title: "Not Booking Robben Island Months in Advance",
      desc: "Robben Island ferries sell out weeks and often months ahead in peak season (October–April). Walk-up tickets are virtually impossible to get during summer. Book the moment your Cape Town dates are confirmed at robben-island.org.za. If you miss the booking window, there is no alternative — the ferry is the only access and it's a non-negotiable part of any Cape Town visit.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍷",
      title: "Skipping the Winelands",
      desc: "Many short-stay visitors skip Stellenbosch and Franschhoek because they assume it's a full-day commitment. It isn't — Franschhoek is 75 minutes from Cape Town, Stellenbosch is 45 minutes. A self-drive half-day through the Winelands with 2 estate tastings is completely achievable and the scenery (Dutch Cape architecture, mountain vineyards, oak-lined roads) is unlike anything else in Africa. Don't skip it.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚶",
      title: "Walking at Night Outside Safe Areas",
      desc: "Cape Town has a genuine crime problem in certain areas. After dark, stick to: V&A Waterfront, Green Point, Sea Point Promenade, Camps Bay, the City Bowl restaurant strips. Uber everywhere — don't walk between restaurants at night in areas you don't know. The Long Street area, while active until late, has active pickpocketing. Leave valuables at the hotel and use your phone minimally in public at night.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚗",
      title: "Visiting Without a Car",
      desc: "Cape Town's public transport (minibus taxis, MyCiti bus) is limited and doesn't reach Cape Point, Boulders Beach, the Winelands, or Chapman's Peak. Without a rental car, you are dependent on expensive private taxis or group tours for every activity outside the City Bowl. A hire car from R$350/day transforms the trip — and driving the Cape Peninsula road is itself one of the great drives on Earth.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌄",
      title: "Table Mountain at 8am — Clear Before the Clouds",
      desc: "Table Mountain famously generates its own weather — the 'tablecloth' cloud that rolls over the summit appears most days by mid-morning. The cable car opens at 8am (weather permitting). Arriving on the first or second cable car of the day almost always guarantees clear summit conditions. By 10:30am the clouds are frequently in. Book the earliest slot online and check the Table Mountain cable car Twitter/X for live updates on operating status.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🐧",
      title: "Boulders Beach Penguins — Arrive Before 9am",
      desc: "The African penguin colony at Boulders Beach is most active in the early morning when penguins are feeding and socialising on the beach before the heat of the day drives them into the shade. After 10am, many birds move into the fynbos behind the beach and are less visible. Arrive at 8am for the best penguin-to-tourist ratio and the most active colony behaviour.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏘️",
      title: "Franschhoek Over Stellenbosch for Charm",
      desc: "Both Winelands towns are beautiful, but Franschhoek wins for charm. A single main street lined with world-class restaurants and wine estates, a French Huguenot heritage that gives it a distinctly European character, and mountain-framing that makes it one of the most photogenic towns in South Africa. If you only have time for one Winelands stop, make it Franschhoek.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌅",
      title: "Camps Bay Sundowner — A Cape Town Tradition",
      desc: "Every evening, locals and visitors gather on the Camps Bay beachfront strip for sundowners as the sun drops into the Atlantic. The tradition is that you arrive around 6pm, order a drink at one of the beach bars (The Bungalow, Chinchilla, or simply sit on the beach with a bottle from a nearby bottle store), and watch the sun set behind the Twelve Apostles mountain range reflected in the Atlantic. It costs nothing from the beach, and it's one of the great free daily events in Cape Town.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Cape Town safe for tourists?",
      a: "Cape Town is safe for tourists who exercise standard urban precautions. The main tourist areas — V&A Waterfront, Green Point, Sea Point, Camps Bay, the City Bowl restaurant strips, and Clifton — are generally very safe during the day and evening. The risks are: pickpocketing on Long Street and in busy markets, phone snatching in areas with heavy foot traffic, and car break-ins in isolated parking areas. Don't walk between restaurants at night in unfamiliar areas — Uber is cheap (R$30–60 / $1.65–3.30 for most city-center trips) and eliminates 95% of risk. The townships (Khayelitsha, Mitchells Plain) are not on standard tourist itineraries and require a guided tour if you want to visit responsibly.",
    },
    {
      q: "When is the best time to visit Cape Town?",
      a: "November to April (southern hemisphere summer) is the best time — warm to hot (22–32°C), long days, minimal rain, and all outdoor activities fully operational. December–January is peak tourist season with higher prices and crowds. February–March is the sweet spot: warm, less crowded, lower prices. Avoid July–August if possible — Cape Town winter brings cold temperatures (8–15°C), persistent rain, and the southeaster wind known locally as the Cape Doctor. Many coastal activities close or are weather-dependent in winter.",
    },
    {
      q: "What is load shedding and will it affect my trip?",
      a: "Load shedding is South Africa's rolling electricity blackouts (scheduled power cuts by Eskom, the national utility, to manage grid capacity). In 2026, Stage 2–4 load shedding remains common in Cape Town (2–8 hours off per day in rotating scheduled blocks). For tourists: reputable hotels and guesthouses have generator backup and you're unlikely to notice. Restaurants, ATMs, and tourist attractions also mostly have backup power. Download the EskomSePush app to check load shedding schedules for your neighbourhood. The main impact: some traffic lights are out during shedding, causing slow traffic at intersections.",
    },
    {
      q: "Does Cape Town have two different oceans?",
      a: "Yes — Cape Town sits at the point where the Atlantic and Indian Oceans meet. The Atlantic side (Clifton, Camps Bay, Sea Point) has spectacular scenery but cold water (15–18°C even in summer) due to the cold Benguela Current. The Indian Ocean side (Muizenberg, Kalk Bay, False Bay) is significantly warmer (20–24°C in summer) and better for swimming and beginner surfing. The Cape of Good Hope (not Cape Point — they're different promontories 2km apart) is the official boundary, though oceanographers debate whether the true meeting point is slightly further east.",
    },
    {
      q: "How do I get a South African e-Visa as an Indian passport holder?",
      a: "Apply at www.evisa.dha.gov.za (the official South African Department of Home Affairs portal). The process is entirely online: create an account, complete the application form, upload your documents (passport scan, photo, travel itinerary, bank statements, accommodation proof), pay R$600 (~$33) by card. Apply at least 3 weeks before travel — 4–6 weeks is safer. You receive an approval email; print it or keep it on your phone. Present it with your passport at CPT Airport immigration. The e-Visa is a single-entry tourist visa valid for 90 days.",
    },
    {
      q: "Can I visit Kruger National Park from Cape Town?",
      a: "Kruger National Park is 1,400km from Cape Town — it requires either a 2-hour flight to Johannesburg or Nelspruit (KMIA) followed by a 1–2 hour drive to the park entrance. It cannot be combined with Cape Town as a day trip. If you want both Cape Town and Kruger, plan at least 10–12 days total: 5 days Cape Town, fly to Johannesburg, 4–5 days in Kruger with a self-drive or guided safari. The combination of Cape Town + Kruger is one of South Africa's great two-centre trips.",
    },
  ],
  combineWith: ["kenya-safari-7-days", "tanzania-zanzibar-7-days", "morocco-7-days"],
  relatedSlugs: ["kenya-safari-7-days", "tanzania-zanzibar-7-days", "morocco-7-days", "rio-de-janeiro-5-days"],
  galleryQuery: "cape town table mountain penguins winelands south africa",
};

export const metadata: Metadata = {
  title: "Cape Town in 5 Days: Table Mountain, Penguins, Winelands & Robben Island (2026)",
  description: "Complete 5-day Cape Town itinerary covering Table Mountain, Boulders Beach penguins, Cape Peninsula, Stellenbosch Winelands, and Robben Island. Budget hostels to Ellerman House luxury.",
  keywords: [
    "cape town itinerary 5 days",
    "cape town travel guide 2026",
    "table mountain guide",
    "robben island booking",
    "cape town winelands day trip",
    "cape peninsula self drive",
    "boulders beach penguins",
    "south africa travel guide",
  ],
  openGraph: {
    title: "Cape Town in 5 Days: Table Mountain, Penguins, Winelands & Robben Island (2026)",
    description: "Table Mountain cable car secrets, Robben Island booking tips, Franschhoek wine estates, and the best sundowner spots on the Atlantic. All budgets covered.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Cape Town Table Mountain with cable car overlooking Atlantic Ocean South Africa",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Town in 5 Days (2026)",
    description: "Table Mountain, penguins, Winelands, Robben Island — complete guide with real Rand costs.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/cape-town-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cape Town in 5 Days: Table Mountain, Penguins, Winelands & Robben Island (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
      description:
        "Complete 5-day Cape Town travel guide covering Table Mountain, Cape Peninsula, Winelands, and Robben Island with budget breakdowns and practical tips.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cape Town 5 Days",
          item: "https://www.incredibleitinerary.com/blog/cape-town-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cape Town, South Africa",
      description:
        "South Africa's Mother City — home to Table Mountain, Boulders Beach penguins, Robben Island, the Cape Winelands, and some of the most spectacular coastal scenery in the world.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.9249,
        longitude: 18.4241,
      },
      touristType: ["Adventure travelers", "Wine enthusiasts", "Wildlife lovers", "History buffs", "Beach travelers"],
    },
  ],
};

export default function CapeTownPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
