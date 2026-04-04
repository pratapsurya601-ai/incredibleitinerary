import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Komodo",
  country: "Indonesia",
  countryFlag: "🇮🇩",
  slug: "komodo-4-days",
  heroQuery: "komodo dragon indonesia flores pink beach national park",
  heroAlt: "Komodo dragon on Komodo Island Indonesia with ranger and pink sand beach",
  category: "Southeast Asia",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "The world's largest lizard — up to 3 metres, 70kg, venomous saliva capable of killing a buffalo in days — wanders through dry scrub while you walk with a ranger carrying a forked stick as your only protection. Pink sand beaches get their colour from crushed red coral mixed with white. Castle Rock is rated among the best five dive sites on Earth, with manta rays, reef sharks, and mola mola (sunfish) the size of cars. A wooden phinisi schooner carries you between volcanic islands as the sun sets over Flores. This is Komodo — Indonesia's wildest corner.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$80",
    bestMonths: "Apr–Aug (calm seas, best diving)",
    airport: "LBJ (Labuan Bajo, Flores)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🦎", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-there", emoji: "✈️", label: "Getting There" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Visa on Arrival", "Available for Indian passport holders at Bali (DPS/Ngurah Rai Airport). Cost: IDR 500,000 (~$35 USD). Valid 30 days. Extendable once for 30 more days."],
        ["Important Note", "Visa on Arrival is NOT available at Labuan Bajo (LBJ) airport. You must enter through Bali first, then take a connecting domestic flight to Labuan Bajo."],
        ["e-Visa Option", "Apply online in advance at molina.imigrasi.go.id for a B211A tourist e-Visa (~$35, 60 days). Recommended to avoid the VoA queue at Bali, which can be 30–90 minutes on busy days."],
        ["Route", "Fly international to Bali (DPS), clear VoA, then connect to Labuan Bajo (LBJ) on Garuda Indonesia, Lion Air, or Batik Air. Flight time: ~1.5–2 hours. Multiple daily flights."],
        ["Documents", "Return ticket, proof of accommodation, bank statements, sufficient funds ($50+/day recommended to show at immigration)."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders (US/UK/EU/AU)",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa on Arrival", "US, UK, EU, Australian, Canadian, and most Western passport holders get a Visa on Arrival at Bali (DPS). Cost: IDR 500,000 (~$35 USD). Valid 30 days."],
        ["Visa-Free (Select Countries)", "Some nationalities receive 30-day visa-free entry. Check the current Indonesian immigration exemption list — it updates periodically."],
        ["e-Visa", "Online e-Visa available at molina.imigrasi.go.id. Costs ~$35, valid 60 days. Bypass the VoA queue entirely — useful during peak season at Bali."],
        ["Entry at LBJ", "You can also enter via the e-Visa directly at Labuan Bajo airport on domestic connections from Bali — confirm with the airline that your itinerary is valid. Most travellers transit through Bali."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$80–120/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Labuan Bajo — Town, Sunset Hill & Boat Arrangements",
          items: [
            "Arrive at Labuan Bajo (LBJ) airport. The town is a 5-minute drive from the terminal. Budget accommodation: guesthouses and losmen in the main town strip cost $12–25/night. Recommended areas: the waterfront road for sunset views, or the streets behind it for quieter budget options.",
            "Afternoon — Explore the waterfront. Labuan Bajo is a small fishing port rapidly transforming into Indonesia's premium eco-tourism base. The harbour is packed with wooden phinisi boats of all sizes waiting for charter. The contrast between the traditional blue-painted fishing boats and the modern dive liveaboards is striking.",
            "4:30pm — Walk to Bukit Cinta (Love Hill) or the Puncak Waringin viewpoint for sunset over the bay. Both are free, 10–15 minutes walk from the waterfront. The sunset here — over dozens of islands turning purple against orange sky with the phinisi boats at anchor below — is one of those views that feels genuinely unreal.",
            "Evening — Arrange your boat tour for Days 2–3 at one of the local tour operators along the waterfront. Budget option: join a shared open boat day tour to Komodo Island + Pink Beach + Padar Island ($25–40/person/day, includes national park fees, ranger, basic lunch, snorkeling). The shared boats depart around 7am.",
            "Dinner: fresh seafood at the night market or a local warung on the waterfront. Grilled snapper with sambal and rice: $4–7. Cold Bintang beer: $2–3.",
          ],
          cost: "$30–50 (day 1, arrival)",
        },
        {
          day: "Day 2",
          title: "Komodo Island Dragon Hike + Pink Beach + Padar Viewpoint",
          items: [
            "6:30am — Depart harbour on shared open boat. The boat ride to Komodo Island takes approximately 2–3 hours through the Flores Sea, passing between volcanic islands. Bring sunscreen and a light jacket — open boats can be cold at speed on the water in the early morning.",
            "9:00am — Komodo Island (national park fee IDR 150,000 on top of boat tour price). You are assigned a ranger with a forked wooden stick. Komodo dragons are not caged — they roam freely. The ranger keeps you at a safe distance and explains the dragon's behaviour. You may encounter 3–15 dragons on a standard short trek (1–2 hours). Dragons are deceptively fast over short distances: 20km/h in bursts. The largest specimens — old males — can exceed 3 metres and 90kg. Seeing one at 4 metres in scrubland is a primeval experience.",
            "11:30am — Pink Beach (Pantai Merah): the colour comes from microscopic foraminifera (red coral organisms) mixed into the white sand, producing a distinctly pink tint that is most vivid in low-angle morning or late afternoon light. The water is exceptionally clear. Snorkeling here reveals staghorn coral and reef fish at 2–5 metres depth. Budget tours include basic snorkel gear.",
            "1:30pm — Lunch on the boat: simple nasi campur or instant noodles with grilled fish. Not gourmet, but functional.",
            "2:30pm — Padar Island viewpoint hike (30–45 minutes each way up the ridge). The summit view is Indonesia's most Instagrammed image: three bays of different sand colours (white, black, and pink) in a volcanic crater landscape. The hike is steep but not technical. On a clear day, this view justifies the entire trip.",
            "5:00pm — Return to Labuan Bajo harbour. Sunset over the bay from the boat is a bonus.",
          ],
          cost: "$60–85 total",
        },
        {
          day: "Day 3",
          title: "Rinca Island Dragons + Manta Point Snorkeling",
          items: [
            "7:00am — Second boat day: Rinca Island (closer to Labuan Bajo, 1.5 hours) for a second Komodo dragon encounter. Rinca is considered better than Komodo for sightings — the ranger station has resident dragons that congregate near the kitchen. Seeing 5–10 dragons in the first 10 minutes of the trek is common. The landscape here — dry savannah, lontar palm groves, hill viewpoints — is different from Komodo's more forested terrain.",
            "9:30am — Manta Point snorkeling. Manta rays congregate at a cleaning station in the waters between Rinca and Komodo. Budget shared boats include a manta stop. The mantas here are reef mantas (2–4 metre wingspan) and are habituated to snorkelers. The cleaning station involves manta rays circling slowly above cleaner fish — often for 20–40 minutes at a time. Do not touch or chase: respectful distance viewing produces better encounters.",
            "12:00pm — Kanawa Island or a quiet reef for snorkeling: the water clarity around these smaller islands reaches 30 metres visibility in April–July. Even basic snorkeling gear reveals an intact reef with sea turtles, reef sharks, and dense schools of fish.",
            "2:30pm — Batu Bolong dive site (diving add-on for certified divers: $25–40 extra on a budget shared boat). This submerged rocky pinnacle is a current-swept reef covered in sea fans and black coral, with Napoleon wrasse, bumphead parrotfish, and reef sharks circling. Even from the surface, the fish density is visible.",
            "5:30pm — Return to Labuan Bajo. Final evening in town: explore the bar strip on the waterfront for sunset cocktails ($4–8). The best sunset viewpoints fill up around 5:30pm.",
          ],
          cost: "$55–80 total",
        },
        {
          day: "Day 4",
          title: "Morning Dive or Free Time & Departure",
          items: [
            "6:00am — Optional sunrise at Puncak Waringin viewpoint (free, 15 minutes walk from town). The sunrise over the bay is equal to the sunset — the islands glow orange and the harbour boats silhouette against the reflection.",
            "8:00am — Optional half-day dive or snorkel trip to Castle Rock or Crystal Rock (world-class dive sites, $35–50 additional for boat + divemaster if not included in your tour). Castle Rock is a current-swept seamount with grey reef sharks, barracuda, giant trevally, and manta rays in season — regularly ranked among the top 5 dive sites on Earth by PADI and international dive publications.",
            "10:00am — Explore Labuan Bajo town: the fish market at the harbour (most active 5am–7am, but still interesting at 9am), local coffee shops serving Flores drip coffee (one of Indonesia's underrated coffee regions), and small artisan shops selling ikat weaving from the surrounding Flores villages.",
            "12:00pm — Final lunch: fresh grilled barracuda with sambal matah and steamed rice at a waterfront warung ($5–8).",
            "2:00pm — Transfer to LBJ airport for departure. The airport is small but efficient; arrive 90 minutes before domestic flights to Bali.",
            "Evening — If connecting to Bali, you have a full evening in Seminyak, Canggu, or Ubud — the contrast between Bali's developed resort scene and Komodo's rawness is immediate and slightly disorienting.",
          ],
          cost: "$30–60 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$180–280/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Labuan Bajo — Private Boat & Sunset Phinisi",
          items: [
            "Arrive at Labuan Bajo. Check in to a mid-range hotel overlooking the bay: Golo Hilltop Hotel ($60–100/night) or El Nido-style cliff bungalows at Bintang Flores ($80–140/night). Both have pools and direct sunset views.",
            "Afternoon — Your boat tour operator (pre-booked) provides a private phinisi boat briefing. A private 2-day boat charter for a group of 2–6 costs $250–450 total, providing your own schedule, skipper, and crew, versus joining a shared tour.",
            "4:00pm — Pre-departure reconnaissance: walk the Labuan Bajo fish market (the freshest seafood in eastern Indonesia), then visit Komodo Travel Mart or similar for last-minute gear (rash guards, reef-safe sunscreen, waterproof bags).",
            "5:30pm — Sunset from a private-charter phinisi in the bay ($30–60/person for a 2-hour sunset boat cruise from the harbour, including drinks and snacks). The silhouette of volcanic islands against a Flores sunset from a traditional boat is the perfect orientation to what the next 3 days will be.",
            "8:00pm — Dinner at Bajo Café or Lounge 27, Labuan Bajo's best mid-range restaurants: grilled lobster ($20–35), Flores fish curry, and local wine from Bali's Hatten winery. The food scene in Labuan Bajo has improved significantly in recent years.",
          ],
          cost: "$100–160 (day 1)",
        },
        {
          day: "Day 2",
          title: "Private Phinisi Charter — Komodo + Pink Beach + Padar",
          items: [
            "6:30am — Private boat departs. Your own schedule means you hit Komodo Island before the shared tour boats, arriving as early as 8:30am when the dragons are most active (they bask in the morning sun and are more visible than in the midday heat).",
            "9:00am — Long trek option at Komodo (2–3 hours, deeper into the island, $10 extra ranger fee). Your private guide takes you to areas shared tours don't reach: the nesting areas in the dry season, the elevated ridge with panoramic views, and the beach on the far side of the island where dragons forage near the water at low tide.",
            "12:00pm — Lunch on deck: your crew prepares a fresh Indonesian lunch — grilled fish caught that morning, tempeh, urap (mixed vegetables with coconut), and fresh fruit. Eating on the water between volcanic islands is exceptional.",
            "1:30pm — Pink Beach: private schedule means you can stay 90 minutes rather than the shared tour's 30 minutes. Swim, snorkel, and explore the beach at your own pace.",
            "3:30pm — Padar Island at 3:30pm — the light on the volcanic crater bays in late afternoon is better than midday. Your guide carries a professional camera on a waterproof case for summit shots.",
            "5:30pm — Sunset at sea between islands. Anchor for the night in a sheltered bay (part of the 2-day charter — you sleep on the boat on overnight charters at $200–350/person/night for a proper phinisi with cabins, not deck sleeping).",
          ],
          cost: "$150–220 total",
        },
        {
          day: "Day 3",
          title: "Manta Point at Dawn + Castle Rock Diving",
          items: [
            "6:00am — Manta Point before any shared tours arrive. The morning light on the water is extraordinary and the mantas at 6am are often in larger groups than later in the day.",
            "8:30am — Castle Rock: your private boat can stay as long as the dive conditions allow. Two dives at Castle Rock for certified divers with a private divemaster ($80–120 for 2 dives with private guide). The current at Castle Rock is unpredictable and often strong — a divemaster who knows the site is essential. Non-divers snorkel the surface and often still see grey reef sharks and trevally from above.",
            "12:30pm — Rinca Island for a second dragon encounter with a different ranger and different terrain. The long-trek option at Rinca takes you to the island's interior hill with panoramic views of the surrounding Flores islands.",
            "3:00pm — Batu Bolong reef: two more dives or extended snorkeling. The sea fans here are some of the largest in eastern Indonesia — branching purple and orange fans up to 3 metres wide, draped in pygmy seahorses.",
            "5:30pm — Return to Labuan Bajo harbour. Sunset cocktails at La Cecile bar on the waterfront pier.",
            "8:00pm — Dinner at Mediterania Restaurant or Blueprint Resto: wood-fired pizza, grilled tuna tataki, and Flores coffee. Mid-range dinner $20–35/person.",
          ],
          cost: "$130–200 total",
        },
        {
          day: "Day 4",
          title: "Sunrise Dive + Flores Coffee & Departure",
          items: [
            "6:00am — Optional sunrise dive at the local Labuan Bajo house reef (arranged through your dive operator, $40–60 for one guided dive). The reef fish are most active in the first 2 hours after dawn — bumphead parrotfish schools, Napolean wrasse, and occasionally a passing sea turtle.",
            "8:30am — Breakfast at a hilltop café overlooking the harbour. Flores coffee (manual brew, single origin, $3–5) and banana pancakes while watching the morning boat traffic in the bay.",
            "10:00am — Rewilding Komodo community visit (optional, $15–25): a local NGO working on ranger employment and wildlife monitoring offers a 90-minute village and conservation program explaining the challenges of managing 5,700 Komodo dragons alongside growing tourism.",
            "12:00pm — Last lunch and souvenir shopping: hand-woven ikat fabric from Flores ($15–60 for authentic pieces), Komodo dragon wood carvings, and locally-produced pearl jewellery from the Flores pearl farms.",
            "2:30pm — Transfer to LBJ airport.",
          ],
          cost: "$80–130 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$450–900/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive — Ayana Komodo or Plataran & Private Welcome Cruise",
          items: [
            "Arrive Labuan Bajo. Private vehicle to Ayana Komodo Resort ($300–600/night, clifftop infinity pool and panoramic bay views) or Plataran Komodo ($250–500/night). These two properties represent the best resort accommodation in eastern Indonesia.",
            "Resort check-in: ocean-view villa or overwater bungalow, butler service, and a private harbour with dedicated boat access for your group.",
            "4:00pm — Private sunset cruise on a luxury phinisi ($300–600 for an exclusive 3-hour chartered cruise) with a Flores cocktail hour: coconut gin, local passion fruit, and fresh snacks from the resort kitchen, served as the boat threads between islands in the golden hour.",
            "7:30pm — Return to resort for a private dinner on the clifftop terrace: a 6-course tasting menu of eastern Indonesian cuisine ($80–150/person) featuring Flores sea bass, hand-rolled sumba pasta, and komodo-region vanilla crème brûlée.",
          ],
          cost: "$500–800 (day 1, incl. accommodation)",
        },
        {
          day: "Day 2",
          title: "Exclusive Komodo Dragon Trek + Private Island Lunch",
          items: [
            "6:30am — Private boat departs from resort harbour to Komodo Island before public boats. You are the only tourists on the island at 8am. Private ranger guide plus a naturalist from the resort ($80–150 extra) who provides in-depth commentary on the dragon's biology, the island's ecosystem, and the conservation issues facing the national park.",
            "Long trek (3–4 hours): into the island's interior, across the ridge, and to the secluded beach on the far side. Dragon sightings guaranteed and rarely interrupted by other visitors at this hour.",
            "12:00pm — Private island picnic lunch: your boat crew sets up a picnic on Pink Beach with a table, fresh linens, chilled wine, and a full spread of Indonesian dishes prepared by the resort kitchen. You eat at a table on the pink sand with no other visitors.",
            "2:30pm — Pink Beach private snorkeling session with a marine biologist guide ($100–150) who identifies species, points out seahorses and nudibranchs on the macro reef, and manages your buoyancy to protect the coral.",
            "5:30pm — Padar sunset: hike to the viewpoint. Your guide has confirmed the weather forecast and has the summit to yourselves by 5:45pm. Professional photography guide optional ($150/2 hours).",
            "8:00pm — Return to resort. Evening spa treatment ($80–150 for a Balinese-Indonesian fusion massage) followed by resort dinner.",
          ],
          cost: "$400–650 (excl. accommodation)",
        },
        {
          day: "Day 3",
          title: "Private Liveaboard Dive Day — Castle Rock & Manta Point",
          items: [
            "5:30am — Depart on a private luxury liveaboard dive vessel ($600–1,200/day for boat with full diving setup, private chef, dive guides, and unlimited diving). This gives access to dive sites that day boats cannot reach due to distance and current timing.",
            "7:00am — Castle Rock: two dives with private divemaster. Current timing is managed so you arrive during the optimum slack period. On a good day at Castle Rock, you will see grey reef sharks, whitetip reef sharks, barracuda schools, giant trevally, manta rays, and eagle rays within a single dive.",
            "10:00am — Crystal Rock: a harder dive site with more current and the highest fish density in the park. Napoleon wrasse and bumphead parrotfish schools are resident. A 3–5 metre visibility curtain of fish around the pinnacle is common.",
            "1:00pm — Manta Point: private boat means you control timing. Snorkeling and diving simultaneously, with a marine biologist in the water to document manta ID tags for the regional manta research programme.",
            "3:30pm — Batu Bolong (late afternoon dive): the cleaning station at Batu Bolong is most active in the late afternoon. Moray eels, giant morays, and full cleaning station behaviour (fish and turtles hovering while cleaner wrasse remove parasites) at 15 metres.",
            "6:00pm — Return to resort. Sundowner on the resort's private clifftop terrace.",
          ],
          cost: "$600–1,000 (excl. accommodation)",
        },
        {
          day: "Day 4",
          title: "Rinca Dawn Trek, Flores Village & Departure in Style",
          items: [
            "6:00am — Private boat to Rinca Island at dawn. The early morning at Rinca — the ranger station with dragon prints in the dust, the hill fog above the lontar palms, the silence — is the most atmospheric dragon encounter of the trip.",
            "Long trek: your naturalist guide takes you along the ridge trail to the highest point on Rinca with views across to Komodo, Flores, and Sumbawa. The walk through the savannah at dawn, with dragons tracking across the dry grass, is extraordinary.",
            "10:00am — Return to Labuan Bajo. Visit a Flores village with a cultural guide: see traditional ikat weaving in process, visit the local coffee drying terraces, and participate in a cooking demonstration of Flores cuisine ($80–150 for a private village experience).",
            "1:00pm — Final lunch at the resort: a curated farewell meal with Flores coffee and the resort pastry chef's signature dessert.",
            "3:30pm — Private vehicle to LBJ airport. Your hotel concierge handles baggage transfer, check-in arrangements, and any last-minute logistics.",
            "Departure: Labuan Bajo to Bali or Jakarta for onward connection. The 1.5-hour flight back to Bali is the gentlest possible re-entry into the modern world after 4 days in one of its last wild places.",
          ],
          cost: "$300–500 (excl. accommodation)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–25",
      food: "$10–20",
      transport: "$30–45",
      activities: "$25–40",
      total: "$77–130/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–120",
      food: "$25–50",
      transport: "$60–100",
      activities: "$50–80",
      total: "$195–350/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–600",
      food: "$80–150",
      transport: "$100–200",
      activities: "$150–400",
      total: "$630–1,350/day",
    },
  ],
  mistakes: [
    {
      icon: "🦎",
      title: "Going Without a Ranger or Leaving the Trail",
      desc: "Komodo dragons are ambush predators that can accelerate to 20km/h over short distances. Every year, visitors are injured by ignoring ranger instructions or drifting off the marked paths. The forked stick rangers carry is not theatrical — it is the standard tool for redirecting a charging dragon. Do not walk without your assigned ranger, do not approach dragons closer than the ranger directs, and do not make rapid movements near dragons. The national park rules exist because they are necessary.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Booking the Cheapest Boat Without Checking Safety Standards",
      desc: "The Flores Sea can be rough, particularly outside the April–August calm season. Cheap unofficial boats (men with motorized canoes offering cut-price tours on the waterfront) are often uninsured, unlicensed, and without lifejackets or radio communication. Several tourist boats have sunk in Komodo waters. Book through licensed tour operators with life jackets visible, a working radio, an EPIRB beacon, and a registered guide. Budget shared day tours from reputable operators cost $30–50/person — this is not a place to save $10 on boat safety.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "📅",
      title: "Visiting in October–March (Rough Sea Season)",
      desc: "The Flores Sea transitions to rough swell from October to March. The west monsoon brings large waves, strong currents, and poor visibility for diving and snorkeling. Many dive sites are inaccessible. Boat crossings to Komodo become uncomfortable and sometimes dangerous. The best season is April to August — calm seas, best diving visibility (30+ metres), and the optimal window for manta ray and Komodo dragon encounters. September is usually still acceptable.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💳",
      title: "Assuming You Can Pay the Park Fee by Card",
      desc: "The Komodo National Park entrance fee (IDR 150,000–400,000+ depending on the period and included sites) must be paid in cash IDR at the ranger station. Some operators include it in the tour price; confirm this before departure. Bring IDR cash from Labuan Bajo's ATMs — there are no ATMs on Komodo or Rinca islands. The ATMs in Labuan Bajo sometimes run low on busy weekends; withdraw cash the evening before your island departure.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🐠",
      title: "Using Regular Sunscreen in the National Park Water",
      desc: "Komodo National Park's reefs are some of the most biodiverse and least-damaged in the world. Regular sunscreen containing oxybenzone and octinoxate is highly toxic to coral and is banned in the national park. Rangers at the snorkeling sites will check — and some operators decline to take tourists who refuse to switch. Use reef-safe mineral sunscreen (zinc oxide or titanium dioxide based) purchased before travel or from shops in Labuan Bajo. Wearing a rash guard instead of sunscreen is the most effective and environmentally responsible solution.",
      color: "bg-green-50 border-green-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Arrive at Komodo Island Before 9am",
      desc: "The first shared day tours from Labuan Bajo arrive at Komodo Island around 9:30am. A private charter or overnight phinisi gets you there by 8am — and the dragon encounters at 8am, when the animals are basking in the morning sun along the ridge paths, are far more dramatic than midday encounters when dragons rest in shade. The early morning is also the best light for photography. Book a private boat or overnight phinisi for this access window.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🤿",
      title: "Do At Least One Dive at Castle Rock",
      desc: "Castle Rock is consistently rated among the best five dive sites in the world by professional divers. The seamount rises from 200 metres to just below the surface and the current concentrates an extraordinary density of pelagic and reef species. Even a single dive here — grey reef sharks circling, a manta ray appearing from the blue, barracuda schools overhead, and the sea fan garden below — justifies the cost of a diving certification. If you are not yet certified, this destination is worth getting certified for.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "📸",
      title: "Pink Beach Looks Best at Low Tide in the Morning",
      desc: "The pink colour of Pantai Merah (Pink Beach) is most vivid when wet sand reflects morning light at low tide. Check tide tables before booking your boat schedule. Most shared tours reach Pink Beach at midday when the pink pigment is least visible and the crowd is at its peak. Arranging to arrive at Pink Beach between 8am and 10am at low tide — possible on a private boat — produces the photographs you've seen online. The tide tables for Komodo are available on TideForecast.com.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🛥️",
      title: "Overnight Phinisi is Worth It for a Group of 3+",
      desc: "A 2-day, 1-night phinisi charter gives you dawn access to every island, the ability to stay at Manta Point long after shared boats have moved on, a sunset at sea between islands, and sleeping on the water under Flores stars. For a group of 4–6, the per-person cost of a private overnight phinisi ($150–250/person for 2 days) is comparable to or cheaper than 2 days of shared tours plus a mid-range hotel night in Labuan Bajo. It is also incomparably more atmospheric. Book through the Labuan Bajo Komodo Tour Association-registered operators.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is it safe to visit Komodo Island? Are the dragons dangerous?",
      a: "Komodo Island is safe when you follow the ranger's instructions. Komodo dragons are the world's largest living lizard — genuine apex predators with venomous saliva and powerful claws. They have killed humans, though rarely. The risk is entirely manageable: stay with your ranger at all times, do not approach dragons unprompted, do not run (it triggers a chase response), and be aware that the rangers' forked sticks are actual safety equipment. Children under 8 are not permitted on some ranger-led treks due to their unpredictable movements. Hundreds of thousands of tourists visit annually without incident.",
    },
    {
      q: "How do I get to Labuan Bajo?",
      a: "Labuan Bajo (LBJ airport) is served by direct flights from Bali (1.5–2 hours) on Garuda Indonesia, Lion Air, Batik Air, and TransNusa. From Jakarta, direct flights take approximately 3 hours. You cannot fly direct to Labuan Bajo from most international destinations — route through Bali. Garuda's early morning Bali–Labuan Bajo flight (around 6:30am) gets you to Labuan Bajo by 8am with time to board a boat by 9am. Book flights early — LBJ is a small airport and peak season seats sell out.",
    },
    {
      q: "Is Castle Rock really one of the best dive sites in the world?",
      a: "Castle Rock in the Komodo National Park is consistently listed among the top dive sites globally by PADI, Sport Diver magazine, and experienced divers. The combination of strong current concentrating enormous schools of fish, regular manta ray, reef shark, eagle ray, and occasionally whale shark sightings, the sea fan garden below 15 metres, and the dramatic seamount topography makes it extraordinary. The strong current means it is recommended for experienced divers (Open Water with logged experience or Advanced). Snorkelers on the surface during calm current periods also see sharks and mantas.",
    },
    {
      q: "How much does a Komodo trip cost in total?",
      a: "Budget: $300–450 for 4 days (flights Bali–LBJ not included), staying in guesthouses and doing shared boat day tours. Mid-range: $700–1,100 for 4 days with a private phinisi charter and mid-range accommodation. Luxury: $1,800–3,600 for 4 days with Ayana/Plataran resort and a private liveaboard dive boat. The national park fee is IDR 150,000–400,000 per person per visit (check current fees as they have been restructured). Note: the park briefly trialled a $1,000 exclusivity fee in 2023 that was reversed — verify current fees before you travel.",
    },
  ],
  combineWith: ["bali-5-days", "lombok-4-days", "flores-flores-5-days"],
  relatedSlugs: ["bali-5-days", "nusa-penida-3-days", "lombok-4-days", "raja-ampat-5-days"],
  galleryQuery: "komodo dragon indonesia labuan bajo flores pink beach padar island diving manta ray",
};

export const metadata: Metadata = {
  title: "Komodo in 4 Days: Dragons, Pink Beach & World-Class Diving (2026 Guide)",
  description:
    "Complete Komodo 4-day itinerary: trek with Komodo dragons, dive Castle Rock, snorkel Manta Point, hike Padar Island, and sail a phinisi between volcanic islands. Budget to luxury.",
  keywords: [
    "komodo itinerary 4 days",
    "komodo travel guide 2026",
    "komodo dragon trek",
    "komodo national park diving",
    "castle rock komodo diving",
    "pink beach komodo",
    "padar island viewpoint",
    "labuan bajo flores guide",
    "manta ray snorkeling komodo",
    "phinisi boat komodo",
  ],
  openGraph: {
    title: "Komodo in 4 Days: Dragons, Pink Beach & World-Class Diving (2026)",
    description:
      "Walk with the world's largest lizard, dive Castle Rock with manta rays and reef sharks, swim at a pink sand beach, and sleep on a wooden phinisi under Flores stars.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Komodo dragon on Komodo Island Indonesia with pink sand beach",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Komodo in 4 Days — Dragons, Diving & Pink Beach (2026)",
    description: "The world's largest lizard, Castle Rock's reef sharks, and Indonesia's wildest corner. Complete guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/komodo-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Komodo in 4 Days: Dragons, Pink Beach & World-Class Diving (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=80",
      description:
        "A complete 4-day Komodo itinerary covering Komodo Island dragon treks, Rinca Island, Pink Beach, Padar Island viewpoint, Castle Rock diving, Manta Point snorkeling, Batu Bolong reef, and Labuan Bajo town.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Komodo 4 Days",
          item: "https://www.incredibleitinerary.com/blog/komodo-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Komodo National Park, Indonesia",
      description:
        "A UNESCO World Heritage Site in eastern Indonesia encompassing Komodo, Rinca, and Padar islands — home to the world's largest lizard, one of the world's best dive destinations, pink sand beaches, and volcanic island scenery.",
      touristType: ["Wildlife enthusiasts", "Scuba divers", "Adventure travellers", "Nature photographers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.5425,
        longitude: 119.4833,
      },
    },
  ],
};

export default function KomodoPage() {
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
