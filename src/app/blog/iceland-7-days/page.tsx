import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Iceland",
  country: "Iceland",
  countryFlag: "🇮🇸",
  slug: "iceland-7-days",
  heroQuery: "iceland northern lights aurora borealis glacier waterfall",
  heroAlt: "Iceland aurora borealis northern lights over glacier and waterfall",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "18 min read",
  intro: "Iceland in seven days is a loop around one of the most otherworldly landscapes on earth — a country where waterfalls drop off clifftops into black sand beaches, geysers erupt every eight minutes on schedule, glaciers calve icebergs onto shores you can walk barefoot, and on clear winter nights the sky turns green and violet. This is the Ring Road route: every essential landscape, every unmissable stop, with real costs and the practical details that make the difference between a smooth trip and a very expensive mistake.",
  stats: {
    duration: "7 Days",
    budgetFrom: "€120",
    bestMonths: "Jun–Aug (midnight sun) or Sep–Mar (northern lights)",
    airport: "KEF (Keflavík International)",
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
        ["Schengen Visa", "Iceland is a member of the Schengen Area. Apply for a short-stay Schengen C visa through the Icelandic Directorate of Immigration or VFS Global. Fee: €80. Processing time: 15–45 days. Book your VFS appointment 4–6 weeks ahead — slots fill very quickly, especially in spring."],
        ["Key Documents", "Passport valid 3 months beyond return date, bank statements showing €120+/day, confirmed hotel/camper bookings, return flight tickets, employment letter or proof of self-employment, and travel insurance covering minimum €30,000 medical expenses."],
        ["90/180 Day Rule", "The Schengen visa permits a maximum stay of 90 days within any 180-day period across all Schengen countries combined. Iceland counts — so if you are visiting Germany, France, and Iceland on one trip, all days are pooled."],
        ["Travel Insurance", "Minimum €30,000 emergency medical cover is legally mandatory for the visa application. Iceland's remote terrain means helicopter rescues are real and extremely expensive — buy comprehensive adventure-travel insurance that covers hiking and glacier activities."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter Iceland visa-free for up to 90 days within any 180-day Schengen period. No advance approval needed — present your passport at KEF on arrival."],
        ["ETIAS from 2025", "A new ETIAS (European Travel Information and Authorisation System) pre-travel authorization is required from 2025 for all visa-exempt travelers including USA, Canada, and Australia. Cost: €7, valid 3 years. Apply at etias.eu.int — the process takes minutes online."],
        ["UK Post-Brexit", "UK passport holders enter visa-free under the 90/180-day Schengen rule and will need ETIAS. Passport must have at least 6 months validity remaining at date of travel. The UK–Iceland bilateral arrangement remains post-Brexit."],
        ["No Schengen Surprises", "Days spent in Norway, Sweden, Germany, France — any Schengen country — count against your 90-day allowance. Track carefully if Iceland is part of a longer European itinerary."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€120–180/day",
      days: [
        {
          day: "Day 1",
          title: "Reykjavík — Capital of Fire and Ice",
          items: [
            "Arrive at KEF and pick up your pre-booked rental car immediately — do not leave without one. Budget car rental: €40–65/day from Sadcars or Geysir (cheapest, no-frills). Driving to Reykjavík takes 45 minutes via the Reykjanes Peninsula.",
            "Hallgrímskirkja church — the 74-metre concrete rocket-ship tower is free to admire from outside. The tower observation deck costs 1,000 ISK (€7) and offers the best panorama of the city's colourful rooftops against Esja mountain.",
            "Harpa Concert Hall — the glass-facade building on the waterfront is free to enter and walk through. The honeycombed glass panels designed by Olafur Eliasson catch the northern light in extraordinary ways at any hour.",
            "Hot dog at Bæjarins Beztu Pylsur — the most famous hot dog stand in Iceland, open since 1937, a 3-minute walk from Harpa. One hot dog (€3.50) with the works: mustard, remoulade, raw onion, crispy onion, ketchup. Bill Clinton ordered 'one with everything' in 2004 — a framed photo is on the wall.",
            "Laugardalslaug geothermal pool (€12) — the largest public pool in Iceland, heated to 38–44°C by geothermal energy. Locals use this daily. The outdoor hot pots are where Reykjavík's social life actually happens.",
            "Evening: Bónus supermarket (yellow pig logo) for self-catering supplies. Skyr (Icelandic strained yogurt, €1.50), lamb soup ingredients, bread, cheese. The grocery budget strategy saves €20–35/day versus restaurants.",
          ],
          cost: "€60–80 (car, hot dog, pool, groceries)",
        },
        {
          day: "Day 2",
          title: "Golden Circle — The Classic Route",
          items: [
            "Þingvellir National Park — free entry, UNESCO World Heritage Site. This rift valley is where the North American and Eurasian tectonic plates are visibly pulling apart at 2cm/year. Walk the Almannagjá gorge at opening (9am) when the light is low and the canyon is empty. The site is also where the world's oldest parliament (Alþingi) was founded in 930 AD.",
            "Geysir geothermal area — free entry. The original Geysir rarely erupts now, but Strokkur erupts every 5–10 minutes to a height of 15–40 metres. Stand upwind. No barriers. Watch people ignore this advice and get soaked.",
            "Gullfoss waterfall — free entry. The 'Golden Falls' drops 32 metres in two tiers into a 70-metre deep canyon. The spray cloud is visible from the car park. Walk to the upper viewing platform for the full scale; the lower path brings you to the edge of the canyon.",
            "Secret Lagoon hot spring in Flúðir (€18) — a natural geothermal pool maintained at 38–40°C. Far cheaper and more atmospheric than the Blue Lagoon. A small geysir on the edge of the pool erupts every few minutes. The wooden changing rooms are from 1891.",
            "Evening: return Reykjavík or continue south and camp. Wild camping is legal in Iceland outside national parks. A basic campsite with facilities: €12–18/night.",
          ],
          cost: "€35–55 (Secret Lagoon, fuel, food)",
        },
        {
          day: "Day 3",
          title: "South Coast Waterfalls & Black Sand",
          items: [
            "Seljalandsfoss waterfall — free. The 60-metre curtain waterfall is famous because you can walk completely behind it through a cave in the cliff face. The path is wet; waterproof jacket essential. Best visited in morning light when the sun comes through the water sheet.",
            "Gljúfrabúi — 200 metres north of Seljalandsfoss, almost no one goes there. A hidden waterfall inside a slot canyon, reached by wading through a shallow stream. Free, extraordinary, 10 minutes from your car.",
            "Skógafoss waterfall — free. One of Iceland's most powerful waterfalls. Climb the 430 steps up the cliffside for the view south over the black sand plain to the sea. At the top begins the Fimmvörðuháls hiking trail to Þórsmörk.",
            "Sólheimasandur plane wreck — free. In 1973 a US Navy DC-3 crash-landed on the black sand beach. The fuselage remains. Drive to the marked car park (Rte 221), then walk 1 hour each way across flat volcanic plain. Bring a windproof layer — wind routinely hits 50–70km/h.",
            "Reynisfjara Black Sand Beach — free. The most dramatic beach in Iceland: jet-black basalt columns, sea stacks, pounding Atlantic surf. IMPORTANT: Sneaker waves hit without warning and have killed people. Stay beyond the marker line. Do not turn your back on the ocean.",
          ],
          cost: "€25–40 (fuel, food, campsite)",
        },
        {
          day: "Day 4",
          title: "Jökulsárlón Glacier Lagoon & Vatnajökull",
          items: [
            "Jökulsárlón Glacier Lagoon — free to visit the lagoon shore. The lagoon fills with icebergs calved directly from Breiðamerkurjökull glacier — some are 15 metres tall. Seals haul out on the bergs. The colour of the ice shifts from white to blue to turquoise depending on the light and the density of the ice.",
            "Diamond Beach — free. Cross the road bridge from the lagoon. Icebergs washed onto the black sand sparkle like cut glass in any light. The visual contrast of translucent blue ice on black volcanic sand is unlike anywhere else on earth.",
            "Vatnajökull National Park — Europe's largest national park covers 13% of Iceland. The glacier above it is the largest in Europe by volume.",
            "Glacier hike with a certified guide — €70–100 per person. MANDATORY for safety: the glaciers are crevassed and conditions change without warning. Companies: Extreme Iceland, Glacier Guides, Local Guide. The 3-hour standard glacier walk includes crampons and ice axe. One of the most physically memorable experiences in Iceland.",
            "Camp at Höfn or Jökulsárlón area. Höfn is the lobster capital of Iceland — even on a budget, the lobster soup (humarsúpa) at Pakkhús for €18 is worth it once.",
          ],
          cost: "€85–130 (glacier hike, fuel, food)",
        },
        {
          day: "Day 5",
          title: "East Fjords — Iceland Without the Tourists",
          items: [
            "Drive the East Fjords — Route 1 hugs the coastline through a series of dramatic fjords that most Ring Road travellers rush through. This is a mistake. The East Fjords are Iceland's quietest region: fishing villages of 200–400 people, reindeer on the hillsides (introduced from Norway in 1787), puffin colonies at Borgarfjörður eystri.",
            "Stöðvarfjörður — the tiny village contains one of Iceland's most eccentric attractions: Petra's Stone Collection, a private garden filled with 70 years of collected Icelandic minerals and crystals (€8, open May–October).",
            "Egilsstaðir — the largest town in East Iceland (population 2,400). Base for the night. The local swimming pool is €7 and invariably empty.",
            "Fáskrúðsfjörður — a fjord village where French fishermen worked seasonally in the 19th century. Street signs are still in French alongside Icelandic. The small French-Icelandic museum (€10) is unexpectedly moving.",
            "Wild reindeer — keep eyes left on hillsides between Breiðdalsvík and Egilsstaðir. Herds of 20–50 animals are routinely seen close to the road in the late afternoon.",
          ],
          cost: "€40–65 (fuel, campsite, local food)",
        },
        {
          day: "Day 6",
          title: "Lake Mývatn — Geothermal Wonderland",
          items: [
            "Dettifoss waterfall — free. The most powerful waterfall in Europe: 193m³ of water per second drops 44 metres. The noise is audible 1km away. The spray creates a permanent rainbow in the gorge on sunny days. Approach from the west bank (Rte 862) for the best viewpoint.",
            "Námaskarð mud pools — free. A boiling geothermal field of sulphur vents, bubbling mud cauldrons, and steam jets. The landscape is the closest thing to being on another planet. The sulphur smell is strong — the area was historically mined for the compound.",
            "Hverfjall crater — free. A 2,500-year-old tephra crater 1km in diameter. Climb the rim path (40 minutes) for views into the perfect circular bowl and over Lake Mývatn.",
            "Mývatn Nature Baths — €39. Iceland's northern alternative to the Blue Lagoon: geothermal mineral water at 36–40°C, far fewer visitors, smaller scale. The milky-blue silica water is the same mineral composition as the Blue Lagoon at roughly half the price.",
            "Grjótagjá cave — free. A lava cave with a geothermal hot spring inside, used for bathing until volcanic activity raised the water temperature to 50°C+ in the 1970s. Now a photo stop — the turquoise water in the cave ceiling light is beautiful. Used as a filming location for Game of Thrones Season 3.",
          ],
          cost: "€55–75 (Mývatn Baths, fuel, food)",
        },
        {
          day: "Day 7",
          title: "Snæfellsnes Peninsula & Return to Reykjavík",
          items: [
            "Snæfellsjökull glacier and volcano — free to view. Jules Verne placed the entrance to the centre of the earth here in his 1864 novel. The 1,446-metre glacier-capped stratovolcano dominates the entire peninsula. The Snæfellsjökull National Park is free to enter and offers several hiking trails around the glacier's base.",
            "Kirkjufell mountain — free. The 463-metre arrowhead mountain is the most photographed in Iceland. Best shot: from the Kirkjufellsfoss waterfall viewpoint across the road, mountain behind the falls. Arrive before 7am to photograph it alone.",
            "Arnarstapi — a tiny harbour village with some of the most dramatic basalt sea arch formations on the peninsula. 30-minute walk along the cliff path from the car park.",
            "Djúpalónssandur beach — free. A wild, pebble beach with four lifting stones: fishermen had to lift the 54kg 'full strength' stone to qualify for a crew position. The rusted debris of a 1948 British trawler wreck is still scattered on the shore.",
            "Return to Reykjavík (1.5 hours from Snæfellsnes). Evening: lamb soup (kjötsúpa) at a local restaurant, €15–18. Drop car at KEF the following morning or tonight if flying early.",
          ],
          cost: "€45–70 (fuel, food, souvenirs)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€280–500/day",
      days: [
        {
          day: "Day 1",
          title: "Reykjavík — Arrival & City Highlights",
          items: [
            "Arrive at KEF. Pick up a mid-range 4WD rental (€90–140/day, Hertz or Budget) — a proper 4WD matters once you reach F-roads and river crossings in the interior.",
            "Check in to a guesthouse or 3-star hotel in central Reykjavík. The 101 Hotel district has excellent mid-range options at €150–250/night.",
            "Whales of Iceland museum (€28) — life-size whale models in a darkened warehouse that is somehow genuinely affecting. The blue whale model at 23 metres is the world's largest museum whale exhibit.",
            "Hallgrímskirkja tower + Harpa walkthrough. Lunch at Matur og Drykkur (Grandagarður) — modern Icelandic food using traditional techniques. The dried fish with butter starter and lamb neck main are €20–28 each.",
            "Evening: Northern Lights if September–March. Drive 20 minutes from the city to Grótta lighthouse or Esja mountain base at 10pm–2am. Check the Veður.is aurora forecast app (Icelandic Met Office) for the KP index — anything above 3 with a clear sky is a productive night.",
            "Or in summer: midnight sun walk at 11pm. Light is full golden-hour quality. Locals are out walking; cafés are open.",
          ],
          cost: "€180–250 (hotel, car, museum, dinner)",
        },
        {
          day: "Day 2",
          title: "Golden Circle Enhanced",
          items: [
            "Þingvellir with a guided snorkelling tour in Silfra fissure (€130–160 with Dive.is or Arctic Adventures). The fissure runs between the North American and Eurasian tectonic plates, filled with glacial meltwater filtered through lava for 30–100 years. Visibility is 80+ metres. Water temperature is 2–4°C year-round; drysuits provided.",
            "Geysir and Gullfoss — same approach as budget but with more time for photography and fewer time pressures.",
            "Friðheimar greenhouse (Reykholt) — a family farm growing tomatoes year-round using geothermal energy and artificial light. The restaurant inside serves only tomato-based dishes: tomato soup with fresh bread (€18), the best tomato soup in Iceland. Reservations essential.",
            "Faxi waterfall detour — a smaller, quieter alternative to Gullfoss, with a salmon ladder. Almost never crowded. Free.",
            "Evening at a guesthouse in the south — Efstadalur II at Lake Laugarvatn has a geothermal hot pot overlooking the lake (€15 for guests) and serves ice cream made from the farm's own cows.",
          ],
          cost: "€220–320 (Silfra, hotel, restaurant)",
        },
        {
          day: "Day 3",
          title: "South Coast in Full",
          items: [
            "Seljalandsfoss and Gljúfrabúi with more time for photography. Sunrise at Seljalandsfoss: the backlit waterfall at 6–7am in summer is extraordinary.",
            "Skógafoss + Skógar Folk Museum (€17) — an excellent museum of traditional Icelandic turf houses, fishing boats, and farm tools beside the waterfall. Context for everything you've seen on the drive.",
            "Sólheimasandur plane wreck + Reynisfjara Black Sand Beach.",
            "Vík í Mýrdal village — the southernmost village in Iceland. The black church on the hill overlooks the village and the sea stacks. Good mid-range dining: Suður-Vík restaurant for Icelandic lamb, €28–35.",
            "Accommodation at a guesthouse near Vík: Hotel Katla or Puffin Hotel, €130–200/night. The Katla volcano beneath Mýrdalsjökull glacier is overdue for eruption — you're sleeping on a glacier flood plain, which is either thrilling or alarming depending on temperament.",
          ],
          cost: "€180–260 (hotel, meals, museum)",
        },
        {
          day: "Day 4",
          title: "Glacier Lagoon & Glacier Activities",
          items: [
            "Jökulsárlón Glacier Lagoon amphibious boat tour (€56, 45 minutes) — the duck boats drive down the shore and into the lagoon, weaving between icebergs. The captain explains how the glacier has retreated 1.5km since 1935.",
            "Diamond Beach photography with more time.",
            "Ice cave tour (seasonal, October–March): crystal ice caves inside Vatnajökull glacier. €120–180 with Glacier Guides. The glacier ice is 900 years old and glows electric blue from within — one of Iceland's most remarkable visual experiences.",
            "Glacier hiking (all year) with the 3-hour Skaftafell glacier walk — crampons, ice axes, the works. €90–100.",
            "Overnight at Fosshotel Glacier Lagoon (€200–280/night) — the only hotel within walking distance of Jökulsárlón. Fall asleep to the sound of icebergs cracking.",
          ],
          cost: "€320–480 (boat tour, ice cave, hotel)",
        },
        {
          day: "Day 5",
          title: "East Fjords — Scenic Drive & Seafood",
          items: [
            "Drive the full East Fjords route with time for stops: Djúpivogur village (the Eggs of Merry Bay sculpture installation — 34 granite eggs on the harbour, free and oddly beautiful), Breiðdalsvík fjord, Fáskrúðsfjörður.",
            "Lunch at a fjord-side fish restaurant — the langoustine (lobster) in East Iceland is local and extraordinary. Expect €25–35 for a main.",
            "Borgarfjörður eystri — Iceland's puffin capital. From mid-May to mid-August, thousands of Atlantic puffins nest within 2 metres of the boardwalk at Hafnarhólmi. Free. Remarkable.",
            "Egilsstaðir with overnight at Lake Lögurinn guesthouse. The lake is 112 metres deep and allegedly contains an Icelandic lake monster, Lagarfljótsormurinn, documented since 1345.",
            "Evening hike or swim at Egilsstaðir pool (€7). The town has Iceland's oldest forest (planted in the 1900s — Iceland was almost entirely deforested by 1100 AD).",
          ],
          cost: "€180–270 (guesthouse, seafood, activities)",
        },
        {
          day: "Day 6",
          title: "Lake Mývatn Circuit",
          items: [
            "Dettifoss — arrive before 9am before the tour buses. The full circuit of the Jökulsárgljúfur canyon section (Dettifoss, Selfoss, Hafragilsfoss) takes 2.5 hours on foot and involves three different waterfalls of increasing scale.",
            "Námaskarð mud pools and Hverfjall crater circuit.",
            "Krafla caldera — drive to the rim of the active Krafla volcano. The Viti explosion crater is filled with opaque turquoise geothermal water. The last eruption was in 1984; the ground is warm underfoot.",
            "Mývatn Nature Baths in the afternoon — the golden light on the blue-white silica water at 4pm is ideal for the experience.",
            "Dinner at Gamli Bærinn at Hotel Reykjahlíð — Icelandic comfort food with local ingredients: char from Lake Mývatn (€28), lamb from the region.",
          ],
          cost: "€180–260 (hotel, Mývatn Baths, meals)",
        },
        {
          day: "Day 7",
          title: "Snæfellsnes & Return",
          items: [
            "Snæfellsnes Peninsula full day. Kirkjufell at sunrise (drive from Akureyri the evening before or start very early from Mývatn — the peninsula is better approached from a Borgarnes base).",
            "Snæfellsjökull glacier snowmobile or super-jeep tour (€120–180) — driving on the glacier above the Atlantic is surreal.",
            "Lóndrangar volcanic plugs and Djúpalónssandur beach.",
            "Arnarstapi sea arch walk and Hellnar clifftop restaurant (Fjöruhúsið) for coffee and warm waffles (€8–12) with the Atlantic below.",
            "Return to Reykjavík. Final evening: Skál! craft beer bar or Mikkeller Reykjavík for local Icelandic beers. Dinner at Messinn restaurant — the cast-iron pan dishes with glacier-stream trout or cod are €28–35.",
          ],
          cost: "€200–300 (snowmobile, restaurant, hotel)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€700–2000+/day",
      days: [
        {
          day: "Day 1",
          title: "Private Arrival & Reykjavík's Best",
          items: [
            "Private transfer from KEF in a luxury 4WD (€120–180). Check in to Ion Adventure Hotel (south of Reykjavík, one of the world's most architecturally striking hotels — €400–700/night) or the Hotel Rangá (river-side observatory for northern lights viewing, €350–600/night).",
            "Private city tour of Reykjavík with a historian guide (€200–300 for 3 hours) — the sagas, the independence movement, the design culture, the food revolution.",
            "Dinner at Dill Restaurant (Hverfisgata, 1 Michelin star) — the restaurant that launched New Nordic cuisine in Iceland. The tasting menu (€130–170) uses foraged ingredients, fermented dairy, and Icelandic lamb in a 7-course seasonal menu.",
            "Northern lights private tour by super-jeep (€200–300/person) with an expert guide who monitors real-time aurora forecasts and drives to optimal viewing points away from light pollution.",
          ],
          cost: "€600–900 (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Golden Circle Private & Silfra Snorkelling",
          items: [
            "Private Golden Circle tour by super-jeep (€500–800) — the same sites with none of the coach-tour crowds, a dedicated guide, and access to F-road detours unavailable to standard vehicles.",
            "Private snorkelling session in Silfra fissure with a personal underwater photographer (€250–350 including photos). The images of two people floating between tectonic plates in 80m visibility water are genuinely extraordinary.",
            "Private greenhouse dinner at Friðheimar — reserved seating, €35–45/person for the tomato tasting menu.",
            "Overnight at Ion Adventure Hotel. The bar's floor-to-ceiling windows face south across the lava field — on a clear night you watch the aurora from an armchair with a local gin and tonic.",
          ],
          cost: "€800–1,200 (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "South Coast by Helicopter",
          items: [
            "Helicopter tour over the South Coast (€600–1,200/person, Norðurflug Helicopter Tours) — Eyjafjallajökull volcano, Skógafoss from above, the black sand coast, Mýrdalsjökull glacier. The 2-hour tour covers ground that takes 6 hours by car.",
            "Land at Reynisfjara by helicopter, walk the black sand beach privately, return by helicopter.",
            "Private photography session with an Icelandic nature photographer at the sea stacks — €250–400 for 2 hours.",
            "Overnight at Hotel Katla or the Icelandair Hotel Vík in the village below the church.",
          ],
          cost: "€1,000–1,600 (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Private Ice Cave & Glacier Lagoon",
          items: [
            "Private ice cave tour inside Vatnajökull — exclusive access with a glaciologist guide (€400–600 for a private group). The deep blue ice chambers lit by headlamps, 900-year-old air bubbles audible in the silence.",
            "Private Jökulsárlón boat tour at 5am — the lagoon at dawn with no other boats, icebergs turning pink in first light. Custom-arranged through luxury operators.",
            "Diamond Beach private session.",
            "Overnight at The Glacier Lodge Egilsstaðir or a luxury farm stay in the East Fjords — local family hospitality at its highest level.",
          ],
          cost: "€900–1,400 (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Fly Fishing, East Fjords & Whale Watching",
          items: [
            "Private fly-fishing excursion on an East Iceland salmon river (€400–800/day, licensed guide, full gear provided). Iceland's salmon rivers are among the most productive in the North Atlantic.",
            "Private coastal whale watching in Skjálfandi Bay or Faxaflói — humpback, minke, and occasionally blue whales. Private vessel: €600–900.",
            "Overnight at Fosshótel Eastfjords — design hotel in a converted fish factory overlooking a fjord.",
          ],
          cost: "€900–1,400 (excl. hotel)",
        },
        {
          day: "Day 6",
          title: "Lake Mývatn & Aurora Observatory",
          items: [
            "Private Dettifoss and Krafla tour by super-jeep.",
            "Mývatn Nature Baths reserved for a private evening session (negotiable for groups — contact the baths directly for exclusive hire: €500–800).",
            "Hotel Rangá Aurora Observatory — the hotel's private outdoor observatory is managed by a resident astronomer who gives structured northern lights presentations and telescope sessions when conditions allow.",
            "The hotel's 7 log cabins face south with full-wall windows specifically designed for aurora viewing from bed.",
          ],
          cost: "€700–1,000 (excl. hotel)",
        },
        {
          day: "Day 7",
          title: "Snæfellsnes by Private Plane",
          items: [
            "Charter a small aircraft from Reykjavík domestic airport to Snæfellsnes (€1,200–2,000 for the flight over lava fields, Þórsmörk, and the Snæfellsjökull glacier from above).",
            "Private super-jeep waiting on arrival. Kirkjufell at the perfect morning light.",
            "Snowmobile on Snæfellsjökull glacier.",
            "Return flight to Reykjavík. Final evening: private chef dinner at your hotel using Icelandic ingredients — langoustine, skyr parfait, char from a local river. Arranged through the hotel concierge.",
            "Transfer to KEF by private car for morning departure.",
          ],
          cost: "€1,400–2,400 (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–35", food: "€20–35", transport: "€40–65", activities: "€20–45", total: "€120–180/day" },
    { tier: "✨ Mid-Range", accommodation: "€130–220", food: "€45–80", transport: "€80–120", activities: "€60–120", total: "€280–500/day" },
    { tier: "💎 Luxury", accommodation: "€350–700", food: "€120–300", transport: "€120–300", activities: "€200–600", total: "€700–2,000+/day" },
  ],
  mistakes: [
    {
      icon: "🏊",
      title: "Visiting Blue Lagoon Without Booking Months Ahead",
      desc: "The Blue Lagoon sells out weeks or months in advance in peak season. If you show up without a reservation you will be turned away — guaranteed. Book at blulagoon.com the moment your flights are confirmed. Entry is €60–95 and it is arguably overrated compared to the Secret Lagoon (€18) or Mývatn Nature Baths (€39) — but if you want to tick it off, pre-book.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚗",
      title: "Driving F-Roads in a 2WD Rental Car",
      desc: "F-roads (marked with 'F' on Icelandic maps) require 4WD vehicles capable of river crossings. Driving an F-road in a 2WD is illegal, voids your rental insurance entirely, and can result in a rescue bill of €5,000–20,000 which you will pay personally. The rental company checks GPS logs and will identify violations. A 4WD upgrade costs €30–50/day extra — spend it.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌊",
      title: "Ignoring Sneaker Wave Warnings at Reynisfjara",
      desc: "Reynisfjara's sneaker waves have killed tourists — as recently as 2022. The waves hit without warning, travel 15–20 metres up the beach, and the undertow is strong enough to pull an adult off their feet instantly. Stay well beyond the marker stones. Do not turn your back on the water to take a selfie. This is the most important safety rule in Iceland.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📱",
      title: "Not Checking the Northern Lights Forecast App",
      desc: "The Vedur.is app (Icelandic Meteorological Office) shows real-time cloud cover maps and KP index forecasts. Without it, you'll drive out at 11pm into heavy cloud and see nothing. The app shows exactly which parts of Iceland have clear skies — sometimes you need to drive 40 minutes in a specific direction to find a gap. Check it from 8pm onward on every night you're in Iceland.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌌",
      title: "Northern Lights: 11pm–2am Away from City Lights",
      desc: "The aurora borealis is best from 11pm–2am in complete darkness. Drive at least 20km from Reykjavík to escape light pollution — the Grótta lighthouse peninsula, Þingvellir National Park, or any F-road turnoff. You need: KP index 2+, clear sky, and patience. Bring a tripod for photography. The colours your camera captures (greens and purples) are more vivid than what the naked eye sees — long-exposure photographs reveal the full spectacle.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "⛰️",
      title: "Kirkjufell at 6am for Empty Foreground and Waterfall Reflection",
      desc: "Kirkjufell mountain at 6am in summer gives you the mountain entirely to yourself — by 9am there are 50 photographers at the waterfall viewpoint. In the golden morning light, with Kirkjufellsfoss in the foreground, it is Iceland's definitive photograph. In autumn, the orange heather and the mountain turn together for ten minutes of extraordinary colour.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🧊",
      title: "Jökulsárlón at 5am for Private Icebergs",
      desc: "Jökulsárlón receives coach tours from 9am. At 5am in summer (the sun has been up since 3am), the lagoon is completely empty and the icebergs glow orange-pink in low light. Park at the car park, walk to the water's edge, and have 20,000-year-old ice entirely to yourself for an hour. This is non-negotiable if you're a photographer.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "⛽",
      title: "Use the Petrol Station App to Find Cheapest Fuel",
      desc: "Petrol in Iceland costs approximately €2.50/litre — the most expensive in Scandinavia. The app Gasvaktin (free) shows live prices at every station in Iceland. N1 is typically the most expensive; Orkan and Costco (near Reykjavík) are significantly cheaper. Always fill up when entering the Westfjords, East Fjords, or Highlands — stations can be 150km apart.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "When is the best time to see the northern lights in Iceland?",
      a: "September–March, with October and February/March being the most reliable. You need three things simultaneously: a high KP index (2.5+ on the Vedur.is scale), a clear sky, and darkness (meaning winter, when Iceland gets 18–20 hours of night). The weeks around the autumn and spring equinoxes often produce the strongest auroras. January is reliably dark but comes with extreme cold (-10 to -15°C at night) and potential F-road closures.",
    },
    {
      q: "What is the midnight sun experience like?",
      a: "From mid-May to late July, the sun doesn't set in Iceland — it dips toward the horizon around midnight and then rises again. The light at 11pm has the quality of a perpetual golden hour: warm, flat, and extraordinary for photography. The disorientation is real: your body clock loses reference points entirely. Bring a blackout eye mask for sleeping. The experience of hiking at midnight in broad daylight is genuinely surreal and worth organising a trip around.",
    },
    {
      q: "Do Indian passport holders need a Schengen visa for Iceland?",
      a: "Yes. Iceland is a member of the Schengen Area despite not being in the EU. Indian passport holders must apply for a Schengen short-stay visa at the Icelandic embassy or through VFS Global. The fee is €80 and processing takes 15–45 days. Apply at least 6 weeks before travel. You'll need bank statements showing €120+/day, hotel/camper bookings, return flights, and travel insurance covering €30,000 in medical expenses.",
    },
    {
      q: "Is the Ring Road feasible in 7 days?",
      a: "Yes, but only if you drive efficiently. The full Ring Road (Route 1) is 1,332km — perfectly doable in 7 days with 3–4 hours of driving per day. The key is not stopping at everything: choose one or two highlights per section and go deep rather than ticking off every pull-off. The East Fjords section adds 2–3 hours over the inland shortcut but is worth every minute. Do not rush Jökulsárlón — give it a full afternoon.",
    },
    {
      q: "Is the Blue Lagoon worth it compared to other geothermal pools?",
      a: "Honest answer: it depends on your priorities. The Blue Lagoon is undeniably striking — the electric-blue silica water in a black lava landscape — but at €60–95 it is the most expensive and crowded geothermal experience in Iceland. The Secret Lagoon near Flúðir (€18) is more natural and less crowded. Mývatn Nature Baths (€39) have better mineral content and almost no queues. If you're visiting on a budget, skip the Blue Lagoon. If you're making a special trip and booking months ahead, the premium Retreat experience at the Blue Lagoon (€350+) is genuinely exceptional.",
    },
    {
      q: "Renting a campervan versus staying in hotels — which is better?",
      a: "Campervans (€150–250/day for a 2-person van with a bed and cooking setup) offer total flexibility — you can chase the northern lights, stop wherever you want, and cut accommodation costs significantly. Hotels offer warmth, showers, and no setup time. The deciding factor: in summer, campervans are excellent. In winter, they are cold and require experience with cold-weather camping. First-time Iceland visitors with limited time are often better served by guesthouses — Iceland's network of farm guesthouses and hostels is excellent and connects you with local people in a way campervans don't.",
    },
  ],
  combineWith: ["norway-fjords-6-days", "copenhagen-3-days", "london-4-days"],
  relatedSlugs: ["norway-fjords-6-days", "copenhagen-3-days", "paris-5-days", "amsterdam-4-days"],
  galleryQuery: "iceland glacier waterfall northern lights ring road landscape",
};

export const metadata: Metadata = {
  title: "Iceland in 7 Days: Northern Lights, Ring Road, Glaciers & Waterfalls (2026)",
  description: "The complete Iceland Ring Road guide: 7-day itinerary from Reykjavík to Jökulsárlón, Mývatn, and Snæfellsnes with real costs, northern lights tips, and glacier hiking. Budget to luxury.",
  keywords: ["iceland itinerary 7 days", "iceland ring road guide", "northern lights iceland", "iceland travel guide 2026", "jokulsarlon glacier lagoon", "iceland budget travel", "snæfellsnes peninsula"],
  openGraph: {
    title: "Iceland in 7 Days: Ring Road, Northern Lights & Glaciers (2026)",
    description: "Ring Road route with real costs, northern lights secrets, glacier hike logistics, and sneaker wave warnings — everything for an unforgettable Iceland trip.",
    images: [{ url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80", width: 1200, height: 630, alt: "Iceland aurora borealis northern lights over glacier" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Iceland in 7 Days (2026)", description: "Ring Road route, northern lights secrets, glacier hike costs, real euro prices." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/iceland-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Iceland in 7 Days: Northern Lights, Ring Road, Glaciers & Waterfalls (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
      description: "The complete Iceland Ring Road itinerary — 7 days from Reykjavík to glaciers, waterfalls, and the northern lights.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Iceland 7 Days", item: "https://www.incredibleitinerary.com/blog/iceland-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Iceland",
      description: "A sub-Arctic island nation of volcanoes, geysers, glaciers, and northern lights — one of the most dramatic landscapes on earth.",
      touristType: ["Adventure travelers", "Nature photographers", "Northern lights seekers", "Hiking enthusiasts"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 64.9631,
        longitude: -19.0208,
      },
    },
  ],
};

export default function IcelandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
