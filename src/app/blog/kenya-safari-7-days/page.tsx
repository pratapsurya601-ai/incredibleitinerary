import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Kenya",
  country: "Kenya",
  countryFlag: "🇰🇪",
  slug: "kenya-safari-7-days",
  heroQuery: "kenya masai mara safari lion elephants africa savanna",
  heroAlt: "Lion pride resting on the golden Masai Mara savanna during Kenya safari at sunrise",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "18 min read",
  intro:
    "There is a moment on the Masai Mara — when the dawn light turns the savanna gold, a pride of lions watches the wildebeest crossing the Mara River, and a hot-air balloon drifts silently overhead — that reminds you why Kenya has been the world's definitive safari destination for a century. Seven days lets you do it properly: Nairobi's elephant orphanage and giraffe centre, Amboseli's elephants against Kilimanjaro at dawn, three full nights in the Mara for the Great Migration, and enough game drives to stop counting the big cats.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$150",
    bestMonths: "Jul–Oct (Great Migration)",
    airport: "NBO (Nairobi Jomo Kenyatta)",
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
        [
          "e-Visa Required",
          "Indian passport holders must apply for an e-Visa at evisa.go.ke before travel. The fee is $51 USD for a single-entry tourist visa valid for 90 days. Apply at least 3–5 business days before departure — processing is usually 48–72 hours but can take longer during busy periods.",
        ],
        [
          "Application Process",
          "Complete the online form at evisa.go.ke, upload a passport-size photo and the bio-data page of your passport, pay by credit/debit card. You will receive an approval letter by email — print this and present it at Nairobi Jomo Kenyatta International Airport immigration alongside your passport.",
        ],
        [
          "Key Documents",
          "Valid passport with at least 6 months validity beyond your return date, confirmed accommodation bookings, return flight tickets, proof of sufficient funds (bank statements showing $100+/day), and yellow fever vaccination certificate if arriving from a yellow fever endemic country.",
        ],
        [
          "Yellow Fever Certificate",
          "If you are travelling from a country on the WHO's yellow fever endemic list (which includes parts of South and Central America and Central Africa), a valid yellow fever vaccination certificate is mandatory for entry into Kenya. Vaccination must be administered at least 10 days before entry. India is not on the endemic list — Indian travellers do not currently require this certificate, but confirm the current list before travel.",
        ],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        [
          "e-Visa for All Nationalities",
          "As of 2024, Kenya requires all foreign nationals to obtain an e-Visa in advance — including USA, UK, EU, and Australian passport holders. Visa on arrival was discontinued. Apply at evisa.go.ke. Fee: $51 USD, single entry, valid 90 days. Processing: 48–72 hours typically.",
        ],
        [
          "East Africa Tourist Visa",
          "If you plan to combine Kenya with Uganda and/or Rwanda, consider the East Africa Tourist Visa ($100) — it allows multiple entries across all three countries within 90 days. Apply through the same evisa.go.ke portal. Excellent value if combining a Kenya safari with gorilla trekking in Rwanda.",
        ],
        [
          "Power & Connectivity",
          "Kenya uses Type G sockets (UK-style, three rectangular pins), 240V. Bring a universal adapter or UK adapter. Mobile data is excellent across major national park areas — Safaricom's tourist SIM card ($5, plus data bundles) works well in Nairobi, Amboseli, and the Masai Mara. Deep within game reserves you may lose signal.",
        ],
        [
          "Health Precautions",
          "Malaria prophylaxis is strongly recommended for all areas of Kenya including Nairobi (low risk in city, higher in parks). Consult a travel doctor 4–6 weeks before departure. Doxycycline (cheapest, $0.50/day) or Malarone (most effective, $5/day) are the standard options. Also ensure routine vaccinations are up to date: Hepatitis A, Typhoid, and Tetanus.",
        ],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$150–250/day",
      days: [
        {
          day: "Day 1",
          title: "Nairobi — Elephants, Giraffes & the Carnivore",
          items: [
            "Arrive Nairobi Jomo Kenyatta International Airport (NBO). Take the Nairobi Express Rail Link to Nairobi West ($2, 15 minutes) or a metered taxi ($15–20 to Westlands or Kilimani area). Pre-arrange airport pickup with your hostel — most Nairobi budget hostels offer this for $10–15.",
            "Check into a budget guesthouse in Westlands, Kilimani, or Karen ($20–35/night). Nairobi has excellent budget accommodation — Wildebeest Eco Camp in Karen ($25–35/night) is particularly good, close to the attractions and genuinely eco-conscious.",
            "David Sheldrick Wildlife Trust Elephant Orphanage in Karen ($30 entry, book online at sheldrickwildlifetrust.org). Visiting hours are 11am only, 1 hour duration — you must book the specific day in advance. Baby elephants orphaned by poaching or drought are raised by keepers until they can be reintegrated into the wild. Watching a 3-month-old elephant being bottle-fed while making small happy sounds is one of the most charming wildlife experiences in Africa.",
            "Giraffe Centre ($15, entry fee) — the African Fund for Wildlife Conservation breeding centre for the endangered Rothschild giraffe. You stand at head height on the feeding platform and feed pellets directly to giraffes who take them from your hand or lips. Photographs are exceptional here. Open 9am–5pm.",
            "Karen Blixen Museum ($10, Karen suburb) — the Danish author's farmhouse from 'Out of Africa' (1937), preserved exactly as it was. The Ngong Hills form the backdrop. If you have seen the Sydney Pollack film, standing on this veranda with the same view is quietly moving.",
            "Dinner at Carnivore Restaurant ($35–45/person) — Nairobi's most famous restaurant since 1980. A rotating spit of game meats (crocodile, ostrich, hartebeest, camel) plus conventional cuts, served by carvers at your table until you raise the flag to stop. One of Africa's great dining experiences and a genuine Nairobi institution. Book ahead.",
          ],
          cost: "$80–110 total (excl. accommodation)",
        },
        {
          day: "Days 2–3",
          title: "Amboseli National Park — Elephants & Kilimanjaro",
          items: [
            "Shared shuttle Nairobi → Amboseli (approximately 4 hours, $20–25 per person via operators like Safari Link or organised through a budget safari operator). The road passes through the Kajiado area and Maasai grazing land — you will see Maasai herdsmen with their cattle long before you enter the park.",
            "Amboseli National Park entrance fee: $90/person/day (conservancy fee included). This is non-negotiable and paid at the gate — budget for it carefully. Many first-time safari visitors underestimate park fees as a major cost component.",
            "Amboseli's defining image: elephant families walking beneath the snow-capped peak of Mount Kilimanjaro (5,895m, Tanzania) across the marshes. The mountain is best visible at dawn and late afternoon — cloud typically builds around the summit by midday. Wake at 5:30am on both mornings for the Kilimanjaro light.",
            "Game drives Day 2 and Day 3: Amboseli has Kenya's highest density of elephants — herds of 50–100 animals are common. The park also supports lions, cheetah, buffalo, zebra, wildebeest, and over 370 bird species including flamingos in the swamp areas. Your safari driver knows where the big cat sightings have been logged.",
            "Maasai village visit — arrange through your safari operator or lodge ($20–30/person). The village demonstration includes warrior jumping dances, bead jewellery-making, and the traditional homestead structure. The money goes directly to the community. Photography is permitted with permission and a small fee to individual subjects.",
            "Observation Hill at sunset — a short walk from most lodges, the hill gives a panoramic view of the swamps, elephant herds, and Kilimanjaro in the last light. Free and one of the best photographic positions in Amboseli.",
            "Budget accommodation: Amboseli Sopa Lodge ($80–130/person including meals) or camping at KWS campsites ($30–50/person). The KWS campsite at Ol Tukai is functional — bring all your own food from Nairobi, as the camp has no shop.",
          ],
          cost: "$200–280 total (both days, including park fees and lodge)",
        },
        {
          day: "Days 4–6",
          title: "Masai Mara National Reserve — The Great Migration",
          items: [
            "Transfer Amboseli → Masai Mara (approximately 5–6 hours by road, $25–35 in a shared safari vehicle with your operator). The route passes through Narok town — last chance for a proper lunch and supplies ($5–8 at a local restaurant).",
            "Masai Mara park fee: $100/person/day. Three days = $300 in park fees alone. This is Kenya's most expensive park and worth every dollar. The Mara ecosystem supports the world's highest density of large carnivores outside Ngorongoro Crater.",
            "The Great Migration (July–October): between 1.5 and 2 million wildebeest, plus 200,000 zebra and gazelle, cross from Tanzania's Serengeti into Kenya's Masai Mara following the rains. The Mara River crossings — where thousands of animals plunge into crocodile-filled water in mass stampedes — are the most dramatic wildlife event on earth. Crossing points are unpredictable; your driver will position at the most likely crossing point and wait. A crossing can happen in minutes or you may wait 4 hours. Bring water, snacks, sunscreen, and patience.",
            "Big Five game drives Day 4, 5, and 6: the Mara has all of the Big Five except rhino (which are at Ol Pejeta Conservancy, 5 hours north of Nairobi). Lions are abundant — it is unusual to not see at least one pride per day. Leopards are spotted most reliably in the Leopard Gorge area (your driver knows). Cheetahs hunt in the open grass — mornings between 7–10am are the best window.",
            "Full day game drive format: depart camp 6am for dawn light, return for breakfast at 9am, rest midday (animals rest too — this is not dead time), afternoon drive 3pm–7pm. Six hours of driving per day is the standard — your driver will push longer if there is a significant sighting.",
            "Sundowner drinks on the plain (arranged by your lodge or camp): a table is set up in the bush at sunset with cold Tusker beer ($3 at the lodge, budget operators may include this), G&Ts, and the savanna horizon. This is the single most scenically pleasant way to drink anything in the world.",
            "Budget camp options: Ngare Ndare Bush Camp ($60–90/person including meals, basic but clean tents), Fig Tree Camp ($80–110/person, well-established camp with en-suite tents, pool, and strong game-drive guides). Both include all meals — pack light on personal snacks.",
          ],
          cost: "$400–550 total (3 days, park fees + camp all-inclusive)",
        },
        {
          day: "Day 7",
          title: "Return Nairobi — City Drive & Departure",
          items: [
            "Depart Masai Mara camp at 7am for the 5-hour drive back to Nairobi. Arrive by midday for afternoon flights, or push through for an evening departure.",
            "Nairobi National Park game drive en route to the airport — the only national park in the world immediately adjacent to a capital city skyline. From inside the park you can photograph buffalo and giraffe with the Nairobi CBD tower blocks behind them. Entry: $60/person, 2-hour drive sufficient. A worthwhile stop if your flight departs after 6pm.",
            "The drive through the park requires a vehicle already heading to the airport — your safari operator can arrange this as a half-day excursion with vehicle drop-off at JKIA for an additional $30–50.",
            "Duty free shopping at JKIA departures: Kenyan coffee is exceptional and makes an excellent gift ($8–12 for a 250g bag of single-origin highland roast). Maasai shukas (blankets), beaded jewellery, and carved soapstone items are available at the airport at reasonable prices without bargaining pressure.",
            "Nairobi transit note: if you have a 12+ hour layover, JKIA has a Transit Hotel (airside) for $70–100/night. The Sarova Stanley in central Nairobi ($80–130/night) is the budget splurge option for a final night — one of East Africa's grand colonial hotels, in continuous operation since 1902.",
          ],
          cost: "$80–130 total (transport + airport activities)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Nairobi — Private Wildlife Experiences & Greca Dinner",
          items: [
            "Private airport transfer to a mid-range hotel in Karen or Nairobi's upmarket suburbs ($30–50). Best mid-range Nairobi options: Hemingways Karen ($180–250/night, colonial-style boutique hotel near all Karen attractions) or House of Waine ($150–200/night, intimate garden property).",
            "David Sheldrick Elephant Orphanage with the optional Keeper for a Day programme ($250, book months in advance) — spend the full day with the elephant keepers, help with feeding and mud bath, accompany the elephants as they are walked to the bush for afternoon browsing. Transformative wildlife experience.",
            "Giraffe Centre with VIP feeding platform access — book the private feeding slot at opening time (9am) before the day-tripper groups arrive. The head keeper gives a 30-minute briefing on the Rothschild breeding programme.",
            "Afternoon: Nairobi National Museum ($10) for context on Kenya's natural history, pre-colonial cultures, and the Joy Adamson collection (Born Free). The museum's stone-age hominid fossils from the Rift Valley are among the most significant in the world.",
            "Dinner at Carnivore or the Tamarind Nairobi ($40–60/person) — the Tamarind is Nairobi's finest seafood restaurant, Kenyan coastline produce flown daily from Mombasa: lobster, crab, and fresh tilapia at genuinely impressive quality given the landlocked location.",
          ],
          cost: "$200–350 total (excl. hotel)",
        },
        {
          day: "Days 2–3",
          title: "Amboseli — Kilimanjaro Elephant Photography",
          items: [
            "Fly Nairobi Wilson Airport → Amboseli with SafariLink or Airkenya (45 minutes, $120–180 per person one-way). The flight over the Rift Valley escarpment and the Amboseli basin is spectacular — request a window seat on the right side for the first Kilimanjaro view from the air.",
            "Check into Amboseli Serena Safari Lodge or Tortilis Camp ($200–350/person/night full board). Tortilis is particularly well-positioned for Kilimanjaro views from the swimming pool and the main dining room — the mountain appears above the acacia tree line at dawn.",
            "Private vehicle for game drives — a dedicated Land Cruiser with your driver-guide for the full day ($100–150 extra on top of lodge full-board rates, but gives you flexibility to stop, wait, and detour without a fixed schedule). Shared vehicles at mid-range lodges seat 6 and depart on fixed schedules.",
            "Sunrise elephant photography session — your guide will position the vehicle in the Amboseli swamp area facing Kilimanjaro at 6am when the light is soft gold. Elephant herds typically drink at the marsh at this hour. With a 200mm+ lens, you can fill the frame with an elephant and have Kilimanjaro perfectly framed behind.",
            "Big picture ecology briefing from your guide over dinner — the relationship between the Maasai community, the elephants, and the National Park is a complex conservation story worth understanding. Ask your guide about the ongoing water conflict between the elephants and the Maasai cattle.",
          ],
          cost: "$500–700 total (both days, full board lodge + flight)",
        },
        {
          day: "Days 4–6",
          title: "Masai Mara — Migration Crossings & Sundowners",
          items: [
            "Fly Amboseli → Masai Mara via SafariLink or AirKenya ($180–240/person one-way). The Mara airstrip lands you directly in the reserve — no road travel through Narok and the surrounding farms. The time saved is 4–5 hours each way and the flights are efficient and punctual.",
            "Check into Sarova Mara Game Camp ($220–350/person/night full board) or Mara Serena Safari Lodge ($200–320/person/night). Both include all meals, morning and afternoon game drives, park fees (confirm this — some lodges charge separately), and the sundowner experience.",
            "Morning Great Migration game drive — your guide will radio-network with other drivers to locate that morning's wildebeest concentration. Between July and October the herds shift position daily. The river crossing locations (Crossing Points 4, 7, and 9 are historically the most active) are monitored by radio and WhatsApp groups among the guides.",
            "Balloon safari (optional extra, $450–550/person, book at lodge). Dawn departure from the camp at 5:30am. The balloon drifts silently 30–100 metres above the savanna for approximately 1 hour. Lion pride waking up below you. A giraffe at full gallop. The entire Mara horizon at sunrise with no roads or buildings visible. Ends with champagne breakfast in the bush served from linen-covered tables. It is extraordinary and worth the cost if your budget allows.",
            "Leopard tracking — your guide will use information from the lodge radio network to find the current position of resident leopards. The Leopard Gorge area (also called Fig Tree area) reliably has at least one habituated individual. Spend the afternoon positioned in the vehicle watching a leopard in a sausage tree. This is what big-cat enthusiasts come to the Mara for.",
            "Community Conservancy visit — many mid-range itineraries include a morning visit to the Maasai community conservancies bordering the reserve ($30–50/person). Local Maasai guides walk you through the village, explain the conservation partnership model where grazing rights are exchanged for wildlife revenue, and demonstrate traditional crafts. The beadwork jewellery sold directly from the women's cooperative is genuinely beautiful and the income goes directly to families.",
          ],
          cost: "$1,000–1,400 total (3 days, flight + full board lodge + balloon)",
        },
        {
          day: "Day 7",
          title: "Fly Back Nairobi — Final Evening in the City",
          items: [
            "Morning game drive 6–9am before breakfast and checkout — check-out is typically 10am at Mara lodges. Never waste a morning in the Mara.",
            "Charter flight Masai Mara → Nairobi Wilson Airport (45 minutes, $180–230/person). Nairobi by noon.",
            "Afternoon: The Village Market or Westgate Mall for gifts — both have reputable Maasai craft shops with fixed prices (no bargaining required, and the quality is verified). A proper Maasai shuka (plaid wool blanket) costs $25–40 and is an excellent practical souvenir.",
            "Dinner at Talisman Restaurant in Karen ($40–60/person) — one of Nairobi's best restaurants, in a garden setting. Pan-African cuisine with Kenyan ingredients: Mombasa coconut prawn curry, Nyama Choma grilled lamb, and ugali for the authentic Kenya experience.",
            "Overnight at Hemingways Karen ($180–250) if your departure flight is the next morning, or transit directly to JKIA for a late-night departure. Most European flights depart Nairobi between 11pm and 2am.",
          ],
          cost: "$250–400 total (flight + hotel + dinner)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$800–3000+/day",
      days: [
        {
          day: "Day 1",
          title: "Nairobi — Giraffe Manor & Private Conservation",
          items: [
            "Private transfer from JKIA in a chauffeured 4WD ($60–80). Check into The Giraffe Manor ($700–1,200/person/night) — arguably Africa's most famous boutique hotel, where Rothschild giraffes literally put their long necks through the dining room windows at breakfast. Rooms book out 12–18 months in advance. The entire property holds only 12 guests. If The Giraffe Manor is unavailable: Hemingways Nairobi ($400–600/night) is the finest standard luxury hotel in the city.",
            "Private early-morning David Sheldrick experience (Keeper for a Day, $250, book 6+ months ahead) — feed, walk, and observe the elephant orphans in the bush with their keepers. Possibly the most emotionally rewarding wildlife experience in Kenya.",
            "Private Giraffe Centre experience before public opening ($100 arranged through Giraffe Manor) — feed the Rothschild giraffes in complete solitude. The giraffes are habituated and will eat from your hand or face, which means yes, you can be kissed by a giraffe.",
            "Private helicopter transfer over Nairobi National Park ($300–500, 30-minute scenic flight) — watching the city skyline transition to game-filled savanna within a 15-minute drive is one of Nairobi's defining juxtapositions, and from above it is extraordinary.",
            "Private dinner at The Giraffe Manor with a resident wildlife expert ($200–300/person all-inclusive) — the manor's chef prepares a 4-course menu using Kenyan produce, served in the dining room where a giraffe head may appear in the window at dessert.",
          ],
          cost: "$800–1,500 total (excl. hotel)",
        },
        {
          day: "Days 2–3",
          title: "Amboseli — Private Concession & Kilimanjaro Sunrise",
          items: [
            "Private charter Nairobi → Amboseli (45 minutes, $600–900 for a 4-seat Cessna Caravan). Fly directly to Amboseli and be met by your lodge's dedicated vehicle.",
            "Check into Ol Donyo Lodge ($1,000–2,000/person/night all-inclusive) — located on the Maasai-owned Group Ranch bordering the park. This is a conservancy lodge: your stay directly funds Maasai conservation payments. The lodge's infinity pool faces Kilimanjaro. Each room has a rooftop sleeping platform for star-gazing from bed. The Grewia tree in the dining area is a real tree growing through the thatched roof.",
            "Private vehicle with specialist guide for all game drives — your personal Land Cruiser with a guide who has 10+ years of knowledge of individual elephant families by name. Amboseli's elephant research database (maintained since 1972 by Cynthia Moss's Amboseli Elephant Research Project) means guides can identify individual elephants and explain family histories and social dynamics.",
            "Walking safari at dawn with a Maasai warrior guide — on the conservancy land outside the park boundary, walking safaris are permitted. Tracking elephant spoor on foot, learning to identify animal sign, and covering terrain inaccessible by vehicle is a completely different mode of safari. Absolutely thrilling and private.",
            "Private sundowner set-up on the salt pans facing Kilimanjaro — your guide arranges a table, chairs, blanket, and chilled champagne ($50–80 extra) in the open scrub. The mountain at sunset. Silence except for birds. No other humans visible.",
          ],
          cost: "$2,000–3,500 total (both days, all-inclusive with charter)",
        },
        {
          day: "Days 4–6",
          title: "Masai Mara — Angama Mara & Migration River Crossings",
          items: [
            "Private charter Amboseli → Masai Mara (50 minutes, $800–1,200 for private aircraft). Land at the Angama airstrip on the escarpment edge overlooking the entire Mara valley.",
            "Check into Angama Mara ($1,200–2,500/person/night all-inclusive) — built on the cliff of the Great Rift Valley escarpment used as a filming location in 'Out of Africa.' From your tent's private deck you look 300 metres down over the Mara below. Elephants visible from breakfast. The design, food, and guiding are consistently rated among East Africa's finest.",
            "Private Great Migration game driving with Angama's specialist guides — the lodge operates a radio network for crossing intelligence. Your dedicated guide will wake you with a crossing alert at any hour if one is imminent. Crossings are unpredictable. Your guide will position the vehicle at the most active point and brief you on what to watch for — the panic wave that starts the crossing, the crocodiles waiting in the water, the chaos of thousands of animals.",
            "Hot air balloon sunrise ($500/person, arranged through Angama) — Angama's balloon lands in the Mara for a champagne breakfast served on linen-covered tables in the golden grass. The same spectacular experience as mid-range balloons but with significantly better food and a private table for your party.",
            "Night game drive (permitted in the Mara conservancies, not in the national reserve) — the conservancy land bordering Angama allows night-time drives. Leopards, lions, civets, aardvark, serval, and the full nocturnal cast emerge after dark. Thermal spotting equipment is available at the lodge.",
            "Bush dinner — your guide and a small team set up a table and candlelit dinner in the bush as the sun sets. A private chef brings 4 courses to the table while the Mara night starts around you. Cost included in Angama's all-inclusive rate. Reserve on your first evening — it books out among in-house guests.",
          ],
          cost: "$4,500–7,000 total (3 days all-inclusive + charter + balloon)",
        },
        {
          day: "Day 7",
          title: "Return Nairobi — Museum, Shopping & Departure",
          items: [
            "Final morning game drive 6–8:30am before breakfast and checkout. Use this drive specifically to find anything on your checklist you have not yet photographed — your guide will focus the drive on your specific priorities.",
            "Private charter Masai Mara → Nairobi Wilson Airport (45 minutes, $600–900). Private transfer from Wilson to your final Nairobi stop.",
            "Private shopping experience at One Fine Art Gallery (Karen) or Maasai Mbili — curated Kenyan contemporary art, high-quality Maasai beadwork direct from cooperatives, and wildlife photography prints. A genuine collector-quality piece starts at $200 and carries far more cultural weight than airport souvenirs.",
            "Nairobi National Museum VIP access — the museum's education team can arrange a private curator-guided tour of the hominid fossil collection, including original specimens from the Rift Valley excavations that fundamentally changed the understanding of human evolution. Book through your hotel concierge.",
            "Dinner at Carnivore (for the institution) or Talisman (for the best food in Nairobi) before a late-night departure. Business class on Kenya Airways direct to London Heathrow is 8 hours — the airline's business class is considerably better than most passengers expect.",
          ],
          cost: "$800–1,500 total (charter + private experiences + departures)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$20–50",
      food: "$20–35",
      transport: "$25–40",
      activities: "$80–120",
      total: "$150–250/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–300",
      food: "$40–80",
      transport: "$50–100",
      activities: "$100–200",
      total: "$350–600/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$500–2,000",
      food: "$100–200",
      transport: "$100–300",
      activities: "$150–400",
      total: "$800–3,000+/day",
    },
  ],
  mistakes: [
    {
      icon: "📅",
      title: "Visiting Outside Migration Season Without Knowing What to Expect",
      desc: "Kenya is excellent year-round for wildlife — but the Great Migration (wildebeest river crossings) happens July–October only. If you visit in March or May, you will have superb game viewing with far fewer tourists and lower prices, but you will not see wildebeest crossings. This is not a problem if you know it. It is deeply disappointing if you arrive expecting crossings in the off-season. Research your visit month against what will be happening in the specific parks.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💊",
      title: "Not Taking Malaria Prophylaxis",
      desc: "Kenya has malaria across all its national parks — including Masai Mara, Amboseli, and areas around Nairobi. The risk is higher in the rainy season (April–June and November) but present year-round. Buy prophylaxis from your home country (Malarone or Doxycycline — your travel doctor will advise). Starting tablets 1–2 days before arrival is the standard protocol. This is not optional precautionary advice — malaria is a potentially fatal illness and prophylaxis is highly effective.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🧮",
      title: "Underestimating Park Fees in Your Budget",
      desc: "Masai Mara: $100/person/day. Amboseli: $90/person/day. Three days in the Mara plus two days in Amboseli = $480 per person just in park fees. This shocks travellers who budgeted only for accommodation and flights. Build park fees into your spreadsheet before anything else. Budget safari operators typically include park fees in their quoted prices — always confirm this explicitly in writing. If you are self-driving, you pay at each gate.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🦁",
      title: "Booking the Cheapest 'Budget Safari' Without Research",
      desc: "A 7-day Masai Mara and Amboseli safari that costs $300 all-in is almost certainly a scam or an experience you will regret. Legitimate budget safaris with park fees, decent accommodation, meals, and a knowledgeable guide cost $150–250/day at absolute minimum. Below that: shared pop-up roof vehicles (fine), no game drive vehicles dedicated to you (problem), guides with no radio network for migration intelligence (big problem). Do your research on operators before paying any deposit — TripAdvisor and SafariBookings.com are reliable sources.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🐘",
      title: "Skipping the David Sheldrick Elephant Orphanage",
      desc: "Many travellers treat Nairobi as a transit city and head straight to the parks. The David Sheldrick Wildlife Trust Elephant Orphanage — operating since 1977, rescuing calves orphaned by poaching and drought — is one of the finest wildlife experiences in Kenya and costs only $30. You must book in advance for the specific day. The 11am feeding session lasts one hour. More first-time Kenya visitors regret missing this than almost any other activity.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  tips: [
    {
      icon: "🌊",
      title: "Book the September Migration River Crossing Drive Specifically",
      desc: "August and September are the peak crossing months at the Mara River — when the largest concentrations of wildebeest attempt to cross into Kenya from Tanzania. Ask your safari operator or lodge guide to position your vehicle at the most active crossing point (Crossing Point 4 or 7 are historically most reliable). Arrive by 7am and be prepared to wait up to 4 hours. Bring food, water, and a full camera battery. When a crossing starts — thousands of animals in the water at once, crocodiles rolling, the sound of hooves and bellowing — nothing prepares you for the scale of it.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎈",
      title: "The Hot Air Balloon Sunrise Is a Life Experience",
      desc: "At $450–550 per person, the Masai Mara balloon safari is expensive. It is also one of the genuinely transformative travel experiences available on earth. You drift silently 30–100 metres above the savanna as the sun rises, watching lions, elephants, and giraffe below with nothing between you and the horizon. The champagne breakfast served on linen tables in the bush afterward is the finest post-flight meal available anywhere. Budget for it or regret it — almost no one who does the balloon says it was not worth the money.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "📸",
      title: "Camera Lens Length Matters More Than Camera Body",
      desc: "Wildlife photography is primarily limited by lens focal length. A 200mm lens on a smartphone is not sufficient for close big-cat shots when the vehicle must maintain a 30-metre buffer from predators. Bring or rent a 300mm–500mm telephoto lens (Canon or Nikon L-series, Sony GM-series). A monopod stabilises shots taken from a vehicle window. Bring twice as many memory cards and batteries as you think you need — you will shoot 500+ images on a good crossing day. Dust is a significant problem in the Mara — a sealed camera bag is essential.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🥩",
      title: "Carnivore Restaurant for Game Meat — A Nairobi Institution",
      desc: "Carnivore Restaurant in Langata has been serving rotating game meats since 1980 and remains one of the most fun restaurant experiences in East Africa. The concept: unlimited rounds of grilled meats brought on swords by carvers, from conventional (lamb, chicken, beef) to game (crocodile, ostrich, hartebeest, camel) until you raise the white paper flag on your table to stop. It costs $35–45/person including the game meats. Book the outdoor terrace seating for the best atmosphere. Go hungry.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌆",
      title: "Nairobi Is a Proper City — Spend a Real Evening There",
      desc: "Most safari travellers treat Nairobi as a transit node. It is actually a dynamic, genuinely interesting East African capital with a sophisticated restaurant scene, excellent cocktail bars, and a contemporary art gallery circuit. Westlands and Kilimani have the best dining. The Railway Museum gives 2 hours of excellent colonial history context. The Nairobi National Museum has one of Africa's best paleoanthropology collections. An evening at Talisman in Karen or dinner at Carnivore with cold Tusker beer is a perfect first or last night in Kenya.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "What exactly is the Great Migration?",
      a: "The Great Migration is the annual movement of approximately 1.5–2 million wildebeest (plus 200,000 zebra and gazelle) in a clockwise circuit between Tanzania's Serengeti and Kenya's Masai Mara, following the seasonal rains that drive grass growth. The animals cross the Mara River from Tanzania into Kenya between July and October — these river crossings, where thousands of wildebeest plunge into crocodile-filled water simultaneously in mass panics, are the most dramatic wildlife event on earth. The animals return south to Tanzania between November and January.",
    },
    {
      q: "What is the best month to visit Kenya?",
      a: "July–October for the Great Migration river crossings in the Masai Mara — this is Kenya's peak wildlife season. January–February for the calving season in Tanzania's Serengeti (if you are crossing the border). March–June is the long rainy season (lower prices, fewer tourists, green landscapes, but some roads become difficult). November–December is the short rains — brief afternoon showers, the Mara is lush and uncrowded, and prices drop 20–40%. There is no truly bad month for wildlife in Kenya — animals are present year-round.",
    },
    {
      q: "What is the malaria risk in Kenya?",
      a: "Malaria is present in all of Kenya's national parks and coastal areas. The risk is low in Nairobi city (above 1,500m altitude) but significant in the Mara (1,500m, higher risk), Amboseli (1,000m), and the coast. The risk increases in the rainy seasons (April–June, November). Prophylaxis with Malarone or Doxycycline reduces risk by approximately 95% when taken correctly. Buy prophylaxis from your home country before travel — it is significantly cheaper in the UK, US, India, or Australia than in Kenya. Additionally: sleep under mosquito nets (all safari camps provide them), apply DEET repellent at dusk, and cover exposed skin in the evenings.",
    },
    {
      q: "Is Kenya safe for tourists?",
      a: "Kenya's national parks and safari circuits are generally very safe for tourists. Nairobi requires standard urban precautions: avoid walking in unfamiliar areas at night, use reputable taxis (Uber operates well in Nairobi), keep valuables secure. The coastline (Mombasa, Diani) is safe for tourists. The areas near the Somali border (northeastern Kenya) are not recommended for tourist travel and are not part of a standard safari itinerary. The Foreign Office travel advisories of your home country will have the most current assessment — check them 2 weeks before travel.",
    },
    {
      q: "What is the likelihood of seeing the Big Five?",
      a: "In the Masai Mara during the July–October season: lion (very high — almost certain over 3 days), leopard (high — Leopard Gorge area is reliable), elephant (very high), buffalo (high — large herds in the Mara), rhino (not present in the Mara itself — Ol Pejeta Conservancy near Nanyuki is the best option for rhino, 5 hours north of Nairobi). In Amboseli: elephant (exceptional — largest densities in Kenya), lion (moderate), leopard (low), buffalo (moderate), cheetah (high — Amboseli is one of East Africa's best parks for cheetah). Booking 3 nights in the Mara plus 2 in Amboseli gives you the best overall Big Five probability on a 7-day Kenya trip.",
    },
    {
      q: "What photography equipment should I bring?",
      a: "A camera with a 300–500mm telephoto lens is the single most important piece of equipment. Wildlife is often 30–80 metres from the vehicle and a longer lens is the difference between a record shot and a publishable image. A second camera body with a wide-angle lens (24–70mm) for landscape and camp shots means you are not changing lenses in the field. A beanbag camera rest for vehicle window shooting replaces a tripod on safari. Bring 10+ memory cards (you will shoot thousands of images on a migration crossing day), 4+ batteries, and a portable charger. A protective dust-proof camera bag is essential — the Mara's dry-season dust is destructive to camera equipment.",
    },
    {
      q: "Can I climb Kilimanjaro from Kenya?",
      a: "Kilimanjaro is in Tanzania, not Kenya, though it is visible from Amboseli on the Kenyan side of the border. To climb Kilimanjaro, you cross the border at Namanga (the Amboseli-adjacent crossing) into Tanzania and make your way to Moshi or Arusha. The standard 7-day Machame Route or 6-day Marangu Route ('Coca-Cola route') are the most popular. A Kenya safari combined with a Kilimanjaro climb makes a logical 14-day East Africa itinerary — safari first, then cross to Tanzania for the mountain. Many operators specialise in this combination.",
    },
  ],
  combineWith: ["tanzania-safari-7-days", "rwanda-gorilla-5-days", "zanzibar-5-days"],
  relatedSlugs: ["morocco-7-days", "egypt-7-days", "cape-town-5-days", "south-africa-safari-7-days"],
  galleryQuery: "kenya masai mara safari lion elephant kilimanjaro amboseli wildlife africa",
};

export const metadata: Metadata = {
  title: "Kenya Safari in 7 Days: Masai Mara, Amboseli & the Great Migration (2026)",
  description:
    "Complete Kenya safari itinerary: David Sheldrick Elephant Orphanage, Amboseli elephants against Kilimanjaro, Masai Mara wildebeest river crossings, and hot air balloon sunrise — with real costs from $150/day.",
  keywords: [
    "kenya safari itinerary 7 days",
    "masai mara safari guide 2026",
    "great migration kenya",
    "amboseli national park",
    "kenya travel guide",
    "big five safari kenya",
    "kenya budget safari",
  ],
  openGraph: {
    title: "Kenya Safari in 7 Days: Masai Mara, Amboseli & Great Migration (2026)",
    description:
      "Wildebeest river crossings, elephant herds against Kilimanjaro, hot air balloon sunrise — complete Kenya safari guide with real costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lion pride resting on the Masai Mara savanna during Kenya safari at sunrise",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Safari in 7 Days (2026)",
    description:
      "Masai Mara, Amboseli, Great Migration — complete safari itinerary from $150/day to luxury lodges.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kenya-safari-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Kenya Safari in 7 Days: Masai Mara, Amboseli & the Great Migration (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
      description:
        "Complete 7-day Kenya safari guide: Nairobi wildlife experiences, Amboseli elephants, Masai Mara migration, and hot air balloon sunrise — with real costs from $150/day.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kenya Safari 7 Days",
          item: "https://www.incredibleitinerary.com/blog/kenya-safari-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kenya",
      description:
        "East Africa's premier safari destination — home to the Great Migration, the Masai Mara, Mount Kilimanjaro views from Amboseli, and some of the world's finest wildlife lodges.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -0.0236,
        longitude: 37.9062,
      },
      touristType: [
        "Safari travellers",
        "Wildlife photographers",
        "Adventure seekers",
        "Conservation tourists",
        "Luxury lodge guests",
      ],
    },
  ],
};

export default function KenyaSafariPage() {
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
