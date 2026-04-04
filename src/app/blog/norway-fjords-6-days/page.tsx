import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Norway",
  country: "Norway",
  countryFlag: "🇳🇴",
  slug: "norway-fjords-6-days",
  heroQuery: "norway fjords bergen geirangerfjord midnight sun scandinavia",
  heroAlt: "Norway Geirangerfjord with Seven Sisters waterfall and cruise ship at sunrise",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "17 min read",
  intro: "Norway's west coast is where the word 'fjord' comes from — and seeing the original is still one of the great experiences in European travel. Six days takes you from Bergen's wooden wharf through the UNESCO Nærøyfjord by boat, up the Flåm Railway through vertiginous mountain scenery, along the Geirangerfjord where the Seven Sisters waterfall drops 250 metres into salt water, and out to Ålesund's Art Nouveau streets above the open Atlantic. Norway is expensive — this guide tells you exactly how to manage it without missing anything.",
  stats: {
    duration: "6 Days",
    budgetFrom: "€100",
    bestMonths: "Jun–Aug (fjords open, long days), Sep–Mar (northern lights)",
    airport: "BGO (Bergen) or OSL (Oslo)",
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
        ["Schengen Visa", "Norway is a member of the Schengen Area. Indian passport holders must apply for a Schengen short-stay C visa. If Bergen is your primary destination, apply through the Norwegian embassy or VFS Global Norway. Fee: €80. Processing time: 15–45 days. Book appointments 5–6 weeks ahead in summer — July especially is extremely busy at VFS."],
        ["Key Documents", "Passport valid 3 months beyond return date, bank statements showing €100+/day, confirmed accommodation bookings for all nights, return flight tickets, employment letter or business registration documents, and travel insurance covering minimum €30,000."],
        ["90/180 Day Rule", "Schengen visa covers all 27 Schengen countries. If you visit Germany, France, or Iceland on the same trip, all days count together. Maximum 90 days in any 180-day period across the zone."],
        ["Norway Note", "Norway is Schengen but not EU — so UK passport holders and others with EU exemptions still need ETIAS, same as everywhere in the zone. Norwegian immigration applies the same rules as Germany or France."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter Norway visa-free for up to 90 days within any 180-day Schengen period. No advance paperwork beyond ETIAS (from 2025)."],
        ["ETIAS from 2025", "All visa-exempt travelers including Americans, Canadians, and Australians need ETIAS pre-travel authorisation from 2025. Cost €7, valid 3 years, takes minutes to apply online at etias.eu.int. Do this before booking flights."],
        ["UK Post-Brexit", "UK passport holders enter under the visa-free 90/180 Schengen rule. Need ETIAS from 2025. Passport needs at least 6 months validity. Note that UK is not EEA — different from pre-2021 rules."],
        ["Nordic Open Borders", "Norway, Sweden, Denmark, and Finland share open borders with each other independently of Schengen. If you cross into Sweden from Norway by land, your passport is not stamped — but the days still count for Schengen."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€100–160/day",
      days: [
        {
          day: "Day 1",
          title: "Bergen — Bryggen & Fløibanen",
          items: [
            "Arrive at BGO (Bergen Lufthavn). The airport bus Flybussen runs every 15 minutes to the city centre (NOK 139 / €12). Alternatively, the light rail (Bybanen) takes 45 minutes for NOK 39 (€3.50).",
            "Bryggen UNESCO Wharf — free to walk. The row of 14th-century wooden trading houses along the harbour is one of the most recognisable streetscapes in Scandinavia. The Hanseatic League controlled this wharf for 400 years. Walk behind the main facades into the narrow alleyways — the original workshop structure is intact.",
            "Fløibanen funicular (NOK 185 / €16 return) — a 6-minute ride to the top of Mount Fløyen at 320 metres. The panoramic view over Bergen's seven mountains and the fjord system is the essential Bergen photograph. At the top, walking trails through pine forest lead to viewpoints with even broader views. It's free to walk down in summer.",
            "Bergen Fish Market (Fisketorget) — free to browse, though eating here is expensive (€15–25 for a smoked salmon sandwich). Better strategy: buy a bag of fresh boiled shrimps (NOK 120 / €10) and eat them on the quayside.",
            "Budget dinner: buy ingredients at Rema 1000 supermarket (the cheapest in Norway) for self-catering at your hostel. Spaghetti, sauce, and bread will cost €5–8 per person. Norway's expensive reputation is almost entirely driven by restaurant prices — cook your own meals and the country becomes manageable.",
          ],
          cost: "€45–70 (transport, funicular, food)",
        },
        {
          day: "Day 2",
          title: "Bergen Neighbourhood & Night Bus North",
          items: [
            "Bergenhus Fortress (Haakon's Hall and Rosenkrantz Tower, free exterior, €10 to enter) — a 13th-century royal fortress at the mouth of the Byfjord. The medieval tower offers harbour views.",
            "KODE Art Museums — the complex of four buildings houses Norway's most significant art collection. KODE 3 has Munch's Madonna and a large Picasso collection. Single entry NOK 140 (€12). All four museums: NOK 240 (€21).",
            "Troldhaugen (Grieg Museum) — NOK 175 (€15), a 30-minute bus ride from the centre. Edvard Grieg's villa on a fjord lake, preserved exactly as he left it in 1907. The composer of Peer Gynt and the Piano Concerto lived and worked here. The small recital hall hosts concerts on summer afternoons (€30–40 extra).",
            "Budget hack: Bergen Card (NOK 399/24h, NOK 549/48h) covers all local buses, the funicular, Fløibanen, most museums, and the airport bus. If you're visiting 3+ sites in a day, it pays for itself.",
            "Evening: the Nøstet neighbourhood west of Bryggen has Bergen's most local restaurant scene. Pingvinen gastropub serves traditional Norwegian home cooking — meatballs, fish soup — at €15–20 mains.",
          ],
          cost: "€45–75 (museums, transport, food)",
        },
        {
          day: "Day 3",
          title: "Flåm Railway & Nærøyfjord Boat",
          items: [
            "Take the early train from Bergen to Myrdal (NOK 450 / €39, 2 hours). This journey crosses the Hardangervidda plateau at 1,237 metres elevation through snowfields that remain in June.",
            "Flåm Railway (NOK 530 / €45 each way, or NOK 910 / €79 return) — descends 864 metres in 20km through a series of tunnels, viaducts, and hairpin bends. The Kjosfossen waterfall stop in the middle of the descent is a 5-minute walk in the mist — bring waterproofs. Possibly the most scenic railway in Europe.",
            "Flåm village — small, heavily touristed, but beautifully placed at the end of the Aurlandsfjord. The Flåmsbrygga Hotel has a decent lunch even on a budget (soup and bread, €12).",
            "Nærøyfjord boat trip (NOK 290–520 / €25–45 for the Gudvangen service) — UNESCO World Heritage fjord. The narrowest point is 250 metres wide with walls rising 1,700 metres. The silence inside the fjord is total.",
            "Return to Bergen by bus from Gudvangen or continue to next overnight stop. Budget: stay at a youth hostel in Flåm or Aurland (NOK 350–450 / €30–39 for a dorm bed).",
          ],
          cost: "€85–140 (train, boat, accommodation)",
        },
        {
          day: "Day 4",
          title: "Geirangerfjord — Norway's Crown Jewel",
          items: [
            "Drive or take the Nor-Way Bussekspress from Aurland toward Lom and Geiranger (allow 5–6 hours by bus with connections). The road over Sognefjellet at 1,434 metres is Norway's highest mountain pass.",
            "Geirangerfjord by tourist boat (NOK 420 / €35 return, Fjord Sightseeing) — the most spectacular fjord in Norway, a UNESCO World Heritage site. The Seven Sisters waterfall drops 250 metres in seven separate cascades from the farm of Skageflå (abandoned in 1917, accessible only by boat or a 2-hour climb). The Suitor waterfall across the fjord is his 'reply' — the naming is Norse humour.",
            "Ørnesvingen Eagle Road viewpoint — free. The hairpin road out of Geiranger has a purpose-built viewing platform at the top bend. The view back down into the fjord where the Geiranger village sits, surrounded by mountains and waterfalls, is Norway's most reproduced landscape photograph.",
            "Budget accommodation in Geiranger: hostels and budget rooms run €40–70/night. This is one of Norway's most visited sites — book ahead in July.",
          ],
          cost: "€80–130 (transport, boat, accommodation)",
        },
        {
          day: "Day 5",
          title: "Ålesund — Art Nouveau City & Atlantic Road",
          items: [
            "Drive from Geiranger to Ålesund (1.5 hours). The road crosses mountain tunnels and a bridge over the Ørsta fjord.",
            "Ålesund Art Nouveau architecture — free to walk. The city burned in 1904 and was rebuilt entirely in the Art Nouveau style by German and Norwegian architects. The result is Europe's most intact Art Nouveau city. The tourist office has a free walking map of the 23 most significant buildings.",
            "Aksla viewpoint (418 steps up from the town park — free) — the view from the top over Ålesund's three islands and the fjord-sea complex is panoramic. Sunrise at Aksla is one of Norway's most spectacular moments.",
            "Atlanterhavsveien — Atlantic Ocean Road (free drive, approximately 1 hour from Ålesund). Eight bridges connecting small islands across the open Atlantic. Built 1983–1989. In storm conditions, waves break over the bridges. In calm conditions the long straight curves over the Møre coast feel like driving to the edge of the world.",
            "Overnight in Ålesund: hostels and budget guesthouses, NOK 450–650 (€39–56) for a private room.",
          ],
          cost: "€50–90 (transport, accommodation, food)",
        },
        {
          day: "Day 6",
          title: "Oslo — Capital Highlights & Departure",
          items: [
            "Take the morning flight or bus to Oslo (flight: NOK 500–900 / €43–78 with Norwegian Air; bus: 8 hours, NOK 299 / €26). Or rent a car for the scenic E6 drive.",
            "Vigeland Sculpture Park (free, always open) — 200 bronze and granite sculptures by Gustav Vigeland set in a formal park in the Frogner neighbourhood. The Monolith — a 14-metre column of 121 entwined human figures — is one of the stranger works of 20th-century art. Crowds are minimal before 10am.",
            "Oslo Opera House (walk on the sloped white marble roof — free) — designed by Snøhetta architects, opened 2008. The roof walk gives views over the Oslofjord. The interior is free to enter for 30 minutes before performances.",
            "Norwegian Folk Museum (Norsk Folkemuseum, NOK 230 / €20) — 160 historical buildings relocated to the Bygdøy peninsula including a 12th-century stave church. The open-air section is walkable in 2 hours.",
            "Akershus Fortress (free to walk the exterior) — a medieval castle at the harbour entrance with views over the Oslofjord.",
            "Farewell meal: rød pølse (Norwegian hot dog, NOK 35–50 / €3–4) from a kiosk — the classic Oslo street food — then airport.",
          ],
          cost: "€60–110 (transport, museums, food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€250–450/day",
      days: [
        {
          day: "Day 1",
          title: "Bergen — Arrival & Seafood Evening",
          items: [
            "Arrive BGO. Taxi to the hotel (NOK 250–300 / €22–26) or Flybussen (€12). Check in to a 3-star hotel in the Bryggen or Nordnes area — €120–180/night.",
            "Bryggen walkthrough and the Hanseatic Museum (NOK 160 / €14) — the interior of a restored 15th-century Hanseatic merchant's house, complete with sleeping bunks where apprentices were locked in during the winter.",
            "Fløibanen at dusk — the light at 8–9pm in summer over Bergen turns the rooftops gold. Stay on top for the sunset, then walk down through the forest path.",
            "Bergen Aquarium (NOK 310 / €26) — one of Northern Europe's largest marine collections, including a penguin pool and sea turtle tank.",
            "Dinner at Cornelius Seafood Restaurant (accessible by boat from the Fish Market, NOK 850+ / €75 per person) — Norway's most unique seafood restaurant, built on its own small island in Bergen harbour. The 5-course seafood menu changes daily based on what was caught that morning.",
          ],
          cost: "€180–260 (hotel, aquarium, dinner)",
        },
        {
          day: "Day 2",
          title: "Hardangerfjord — Norway's Garden Region",
          items: [
            "Rent a car for 2–3 days (NOK 900–1,400 / €78–122/day for a standard car). This unlocks the Hardangerfjord region, which is difficult by public transport.",
            "Hardangerfjord — the second-longest fjord in Norway, lined with apple and cherry orchards (spectacular in May blossom season). Drive Rte 7 east from Bergen along the fjord.",
            "Vøringsfossen waterfall — free. At 182 metres, it is one of the highest waterfalls in Norway. The standard viewpoint is from the Fossli Hotel terrace. Walk to the upper canyon rim for the full scale — the cliff edge is vertiginous.",
            "Eidfjord — a small village at the fjord head surrounded by 800-metre cliffs. The Hardanger Nature Centre (NOK 180 / €15) explains the geology of the fjord region.",
            "Return along the south bank of Hardangerfjord via the Trolltunga trailhead at Odda (the full Trolltunga hike is 10–12 hours — plan a separate day if attempting it). Overnight in Ulvik or Eidfjord.",
          ],
          cost: "€180–280 (car, hotel, activities)",
        },
        {
          day: "Day 3",
          title: "Flåm Railway & Nærøyfjord",
          items: [
            "Flamsbana Railway with advance reservation in a premium window seat (NOK 530 / €45 each way). The afternoon departure catches the best mountain light on the descent.",
            "Flåm: upgrade to the Fjord Cruise Norway premium boat on Nærøyfjord (NOK 680 / €59) — the electric-powered silent boat has panoramic glass decks and an audio guide explaining the abandoned farms visible on the cliff faces.",
            "Overnight in Flåm at Flåmsbrygga Hotel (€160–220/night) or the Fretheim Hotel (€150–200/night), a 19th-century timber hotel with fjord views.",
            "Evening: the Ægir Bryggeri microbrewery in Flåm serves locally brewed Viking-themed beers and a three-course dinner (NOK 650 / €56). The interior is designed as a Nordic longhouse — remarkable architecture for a craft brewery.",
          ],
          cost: "€220–320 (train, boat, hotel, dinner)",
        },
        {
          day: "Day 4",
          title: "Geirangerfjord & Dalsnibba",
          items: [
            "Drive the Gamle Strynefjellsvegen mountain road (Route 258) from Stryn — one of Norway's 18 designated Scenic Routes, built in 1894, closed by snow until June.",
            "Geirangerfjord car ferry Hellesylt–Geiranger (NOK 1,800 / €155 for car + 2 people, 1 hour crossing) — the classic way to arrive in Geiranger, sailing the full length of the fjord with the Seven Sisters to your right.",
            "Dalsnibba Skywalk (NOK 130 / €11 road toll, no charge for the viewpoint) — Europe's highest fjord viewpoint, at 1,500 metres elevation. The road is steep and dramatic. Geiranger is visible 1,400 metres below. Snow patches remain year-round at this altitude.",
            "Geiranger village for lunch: Brasserie Posten (NOK 280–380 / €24–33 for a main) or the grocery shop self-catering option.",
            "Overnight in Geiranger: Hotel Union Geiranger (€190–280/night) or Storfjord Hotel (rustic mountain hotel, €150–220/night).",
          ],
          cost: "€220–350 (ferry, toll, hotel, food)",
        },
        {
          day: "Day 5",
          title: "Ålesund & Atlantic Ocean Road",
          items: [
            "Drive Trollstigen Mountain Road (Rte 63 from Geiranger toward Åndalsnes — open June–October). Eleven hairpin bends descend 850 metres in 8km. The waterfall Stigfossen drops beside the road. There is a viewpoint at the top with a purpose-built visitor centre (free).",
            "Ålesund Art Nouveau walkthrough with the Jugendstilsenteret museum (Art Nouveau Centre, NOK 140 / €12) — the exhibits explain how the entire city was rebuilt after the 1904 fire in 10 months. The architecture is extraordinary and almost entirely unknown outside Norway.",
            "Aksla summit (walk or drive) for the panoramic view.",
            "Atlantic Ocean Road drive at sunset — arrive at the Storseisundet bridge for the golden light on the Atlantic.",
            "Overnight in Ålesund at Thon Hotel Ålesund or Scandic Parken (€120–180/night).",
          ],
          cost: "€160–270 (hotel, museum, food)",
        },
        {
          day: "Day 6",
          title: "Oslo — Museums & Modern Architecture",
          items: [
            "Morning flight BGO–OSL or continue by road.",
            "Vigeland Sculpture Park — take the time to walk the full axis from the main gate to the Monolith plateau. 2 hours.",
            "Munch Museum (MUNCH) — opened 2021 in a striking 13-floor tower on the waterfront. NOK 210 (€18). The world's largest collection of Edvard Munch's work including multiple versions of The Scream, Madonna, and The Dance of Life.",
            "Oslo Opera House roof walk and interior (free for the lobby; check performance schedule — a weekday lunchtime recital can be €20–30 and is exceptional).",
            "Aker Brygge waterfront district for a farewell dinner — Solsiden seafood restaurant is mid-range for Oslo: NOK 400–600 (€35–52) for a main. The langoustine with truffle butter is worth the price.",
          ],
          cost: "€160–260 (flight, museums, dinner)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€700–2000+/day",
      days: [
        {
          day: "Day 1",
          title: "Bergen — Private Arrival & Fjord Welcome",
          items: [
            "Private transfer from BGO to a luxury hotel — Hotel Norge by Scandic (Bergen's grand historic hotel, €300–500/night) or Zander K Hotel (design hotel, €250–400/night).",
            "Private walking tour of Bryggen and Bergen's history with a certified guide (€180–250 for 2.5 hours) — the medieval Hanseatic trade routes, the fires, the reconstruction, the local sagas.",
            "Fløibanen funicular reserved carriage in the morning mist.",
            "Dinner at Cornelius Seafood Restaurant by private boat (NOK 1,100+ / €95+ per person for the full tasting menu with wine pairing). The boat journey across Bergen harbour at dusk is included.",
          ],
          cost: "€500–800 (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Hardangerfjord by Private Speedboat",
          items: [
            "Private speedboat charter from Bergen into the Hardangerfjord (€600–1,200 for a half-day) — fjord views from the water that road travellers never access. Stop at abandoned farms visible from the cliff faces.",
            "Vøringsfossen waterfall from the canyon rim with a private guide.",
            "Lunch at a farm-to-table restaurant in Ulvik or Eidfjord — the Brakanes Hotel's terrace restaurant overlooks the fjord, main courses NOK 350–450 (€30–39).",
            "Overnight at Utne Hotel (Norway's oldest hotel, operating since 1722, on the fjord edge; €200–300/night) or Hardanger Hotel (modern luxury, €250–380/night).",
          ],
          cost: "€700–1,100 (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Flåm Railway in a Private Compartment & Nærøyfjord",
          items: [
            "Reserved private compartment on the Flåm Railway morning departure (contact Vy Group for group or private booking).",
            "Private kayak expedition on Nærøyfjord (half day, €250–350 per person with Njord Sea Kayak) — paddling at water level through the UNESCO fjord with waterfalls above. The cliffs are 1,700 metres high and the fjord is 250 metres wide at the narrowest point.",
            "Overnight at Stalheim Hotel (perched above the Nærøydalen valley with a 180-degree view — one of Norway's most spectacular hotel locations; €300–450/night).",
            "Evening: the hotel's terrace is used as a helicopter landing pad by some guests — arrange through the hotel concierge for a fjord helicopter tour at sunset.",
          ],
          cost: "€700–1,000 (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Geirangerfjord — Exclusive Access",
          items: [
            "Private helicopter from Stalheim or Flåm to Geirangerfjord (€1,200–2,000) — the flight over the Jostedalsbreen glacier and into the Geirangerfjord from above is the only way to truly grasp the scale.",
            "Private boat on Geirangerfjord with a historian-guide who explains the abandoned farms of Skageflå and Knivsflå — accessible only by this route.",
            "Lunch aboard the private boat.",
            "Overnight at The Hotel Union Geiranger (€280–450/night), the grand hotel above the village since 1891. Request a fjord-view suite.",
          ],
          cost: "€1,400–2,200 (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Trollstigen & Ålesund by Helicopter",
          items: [
            "Trollstigen Mountain Road private drive with a local guide — the hairpin road photographed from above, with stops at every viewpoint.",
            "Ålesund: private Art Nouveau architecture tour with an architectural historian (€200–300).",
            "Atlantic Ocean Road private sunset drive.",
            "Overnight at Brosundet Hotel (a converted warehouse on the Brosundet canal in the centre of Ålesund, €250–400/night) — probably Norway's most distinctive boutique hotel.",
          ],
          cost: "€600–900 (excl. hotel)",
        },
        {
          day: "Day 6",
          title: "Oslo — Munch, Opera & Farewell Dinner",
          items: [
            "Private flight BGO–OSL or morning train (NSB, 6.5 hours, comfortable with reserved seats).",
            "Munch Museum private morning visit — contact the museum's VIP services for pre-opening access or curator-led tour (€400–600 for a small group).",
            "Lunch at Maaemo (3 Michelin stars, Oslo — one of the Nordic region's greatest restaurants). Tasting menu approximately NOK 3,500 (€300) per person. Book 2–3 months ahead.",
            "Oslo Opera House private backstage tour arranged through the Norwegian National Opera.",
            "Transfer to OSL by private car for departure.",
          ],
          cost: "€800–1,200 (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€25–45", food: "€20–35", transport: "€25–50", activities: "€20–45", total: "€100–160/day" },
    { tier: "✨ Mid-Range", accommodation: "€120–200", food: "€50–90", transport: "€50–100", activities: "€40–80", total: "€250–450/day" },
    { tier: "💎 Luxury", accommodation: "€300–600", food: "€120–300", transport: "€100–400", activities: "€150–500", total: "€700–2,000+/day" },
  ],
  mistakes: [
    {
      icon: "☔",
      title: "Expecting Warm Summer Weather in the Fjords",
      desc: "Bergen has 232 days of rain per year — more than any other city in Western Europe. Summer is reliably warmer, but 'warm' means 16–20°C and a 40% chance of rain on any given day. Always bring a waterproof jacket and trousers, even in July. The fjord areas create their own weather: mist, sudden rain showers, and cold descend from the mountains within minutes. A cheap poncho is not enough.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏙️",
      title: "Using Oslo as Your Fjords Base",
      desc: "Oslo is 400km from Bergen and 500km from Geirangerfjord. If your goal is the fjords, fly into Bergen (BGO) and base there — it puts you 2 hours from Hardangerfjord, 3 hours from Nærøyfjord, and within range of Geiranger in a full day. Using Oslo as a base and doing day trips to the fjords wastes a full day each way and exhausts you. Visit Oslo on the final day before flying home from OSL.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍽️",
      title: "Eating at Restaurants Every Meal",
      desc: "Norway is consistently the most expensive country in Europe for food. A sit-down lunch in Bergen will cost €20–30. Dinner at a mid-range restaurant is €40–60 per person. The budget hack: buy groceries at Rema 1000, Kiwi, or Lidl (these are the cheapest chains) for breakfast and lunch — eat one full restaurant dinner per day. This single change can cut your food budget from €80/day to €30/day.",
      color: "bg-red-50 border-red-200",
    },
  ],
  tips: [
    {
      icon: "🚂",
      title: "Flåm Railway: Book 3+ Months Ahead in Summer",
      desc: "The Flåm Railway is one of the most popular tourist experiences in Norway and sells out weeks in advance in July and August. Book at vy.no the moment you know your dates. The afternoon departure (around 2–3pm from Myrdal, returning from Flåm) catches the best mountain light. On the descent, sit on the left side for the Kjosfossen waterfall view — the train stops here for 5 minutes.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚤",
      title: "Geirangerfjord Ferry at 6am — Empty Boat, Misty Fjord",
      desc: "The Hellesylt-Geiranger car ferry runs from early morning. The first departure (usually 6–7am) carries almost no passengers — mostly locals, no tour groups. The fjord at this hour is typically mist-filled, with waterfalls visible through the cloud and absolute silence. By 10am the same ferry is packed. This is Norway's best free upgrade: arrive at Hellesylt the evening before and camp or stay at the small guesthouse.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌅",
      title: "Ålesund Sunrise from Aksla — 25-Minute Walk Before Anyone Wakes",
      desc: "The 418 steps from the Byparken to the Aksla summit take 20–25 minutes at a walking pace. At sunrise in summer (3:45–4:30am depending on the month), you will be completely alone at the top with a 360-degree view over Ålesund's seven islands, the fjord complex, and on clear days Sunnmørsalpene mountains. This is Norway at its quietest and most beautiful.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  faqs: [
    {
      q: "Norway vs Iceland — which destination is better?",
      a: "Different experiences. Norway is about the fjords — vertical green walls, boat trips, mountain roads, charming fishing villages, and the best hiking trails in Europe. Iceland is about geological drama — volcanoes, glaciers, geysers, northern lights, and black sand beaches. Norway is greener and more culturally rich; Iceland is rawer and more otherworldly. Both are expensive, both require the same Schengen visa for Indian passport holders. If you can only choose one for a first trip: Norway is more accessible and has more cultural variety. Iceland wins for unique landscapes and northern lights.",
    },
    {
      q: "Is a €100/day budget realistic for Norway?",
      a: "Yes, but it requires discipline. The key variables: stay in hostels or budget guesthouses (€25–40/night), self-cater at least 2 meals/day using Rema 1000 or Kiwi supermarkets, take public buses and avoid taxis, and choose free activities (fjord walks, city strolling, viewpoints) over every paid attraction. The Bergen Card at €35–47 covers most museums and transport and is the best single spend. With these habits, €100/day is achievable — tight, but real.",
    },
    {
      q: "Can you see the northern lights from Bergen?",
      a: "Bergen is at latitude 60°N — on the lower edge of northern lights territory. The aurora borealis is visible from Bergen approximately 20–30 nights per year during winter (September–March), typically requiring a KP index of 4+ to be visible at this latitude. Tromsø (69°N, northern Norway) is the better base for guaranteed northern lights. From Bergen, drive an hour east away from city lights to the Voss area for darker skies. Check yr.no and Vedur.is for forecasts.",
    },
    {
      q: "What is the midnight sun like in Norway?",
      a: "In Bergen, the sun sets at 11:30pm in late June and rises again at 3:30am — 20 hours of daylight. In Tromsø (above the Arctic Circle), there is no sunset at all from May 20 to July 22. The light quality in the evening hours is extraordinary — a perpetual golden hour that lasts from 9pm to midnight. Your body clock loses its reference points within 2 days; a sleep mask is essential. In June and early July, hiking at midnight in full light is one of Norway's most exhilarating experiences.",
    },
    {
      q: "Do Indian passport holders need a Schengen visa for Norway?",
      a: "Yes. Despite not being in the EU, Norway is a full Schengen member. Indian passport holders must apply for a Schengen short-stay C visa — the same type used for France, Germany, or Spain. Apply through VFS Global Norway. The fee is €80. Apply at least 6 weeks before travel in summer as appointment slots fill quickly. You need confirmed bookings, bank statements showing €100+/day, and travel insurance covering €30,000.",
    },
  ],
  combineWith: ["iceland-7-days", "copenhagen-3-days", "amsterdam-4-days"],
  relatedSlugs: ["iceland-7-days", "copenhagen-3-days", "paris-5-days", "amsterdam-4-days"],
  galleryQuery: "norway fjords bergen geirangerfjord nærøyfjord waterfall mountains",
};

export const metadata: Metadata = {
  title: "Norway in 6 Days: Bergen, Geirangerfjord, Flåm Railway & Fjords (2026)",
  description: "The complete Norway fjords itinerary: Bergen, Nærøyfjord, Flåm Railway, Geirangerfjord, Ålesund, and Oslo in 6 days. Real costs, budget hacks, and the best fjord secrets.",
  keywords: ["norway fjords itinerary", "bergen travel guide 2026", "geirangerfjord guide", "flam railway booking", "norway budget travel", "nærøyfjord boat trip", "norway 6 days"],
  openGraph: {
    title: "Norway in 6 Days: Bergen, Geirangerfjord & Flåm Railway (2026)",
    description: "The complete Norway fjords guide with real costs, Flåm Railway booking secrets, Geirangerfjord ferry tips, and how to survive Norway's prices.",
    images: [{ url: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80", width: 1200, height: 630, alt: "Norway Geirangerfjord Seven Sisters waterfall" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Norway in 6 Days (2026)", description: "Fjords, Flåm Railway, Geirangerfjord — real costs and how to survive Norway's prices." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/norway-fjords-6-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Norway in 6 Days: Bergen, Geirangerfjord, Flåm Railway & Fjords (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80",
      description: "The complete Norway fjords itinerary covering Bergen, Nærøyfjord, Flåm Railway, Geirangerfjord, and Oslo in 6 days.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Norway Fjords 6 Days", item: "https://www.incredibleitinerary.com/blog/norway-fjords-6-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Norway",
      description: "The land of fjords — vertical mountain walls, UNESCO-listed waterways, the Flåm Railway, and the midnight sun above the Arctic Circle.",
      touristType: ["Nature lovers", "Hiking enthusiasts", "Fjord photographers", "Scandinavia travelers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 60.4720,
        longitude: 8.4689,
      },
    },
  ],
};

export default function NorwayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
