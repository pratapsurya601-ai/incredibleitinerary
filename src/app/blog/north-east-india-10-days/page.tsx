import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "North East India",
  country: "India",
  countryFlag: "🇮🇳",
  slug: "north-east-india-10-days",
  heroQuery: "meghalaya living root bridge northeast india kaziranga rhino",
  heroAlt: "Living root bridges in Meghalaya rainforest with one-horned rhino in Kaziranga National Park",
  category: "India",
  date: "April 6, 2026",
  readTime: "18 min read",
  intro: "North East India is the country's most rewarding and least-visited frontier — eight states, dozens of indigenous cultures, the world's wettest place, the world's largest river island, one-horned rhinoceroses you can approach on elephant-back at dawn, and a Buddhist monastery perched above clouds at 10,000 feet in a restricted territory that even most Indians have never entered. Ten days gets you Guwahati's Kamakhya Temple, Kaziranga's rhino safaris, Meghalaya's living root bridges, Tawang's ancient gompa in Arunachal Pradesh (ILP required), and a final night on Majuli — the Brahmaputra's river island monastery world. Do this trip before overtourism finds it.",
  stats: {
    duration: "10 Days",
    budgetFrom: "₹3,000",
    bestMonths: "Oct–Apr",
    airport: "GAU (Lokpriya Gopinath Bordoloi, Guwahati)",
  },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Permits & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🪪",
      title: "Inner Line Permit (ILP) — Indians Must Carry This",
      bg: "bg-red-50",
      border: "border-red-200",
      titleColor: "text-red-800",
      items: [
        ["What Is ILP?", "The Inner Line Permit is a government travel document required for ALL Indian citizens (and foreign nationals) to enter Arunachal Pradesh, Nagaland, Manipur, and Mizoram. It is not a visa — it is a protected-area entry permit. You are not allowed to enter these states without it. Checkpoints on every road and at airports verify ILP. Getting caught without one results in being turned back."],
        ["Arunachal Pradesh ILP", "Apply online at arunachalilp.com. Cost: ₹100 for Indians. You can also apply in person at Arunachal Pradesh government offices in Guwahati (GS Road), New Delhi, Kolkata, or Shillong. Processing time: instant online for most cases. Valid for 15–30 days. Specify Tawang/West Kameng district when applying. Print the permit — digital copy may not be accepted at all checkpoints."],
        ["Nagaland ILP", "Required for Nagaland entry. Apply online at nagaland.gov.in/ilp or at Nagaland House offices. ₹100 for Indians. If visiting Hornbill Festival (December, near Kohima), apply 2 weeks ahead as the online system gets congested."],
        ["Foreign Nationals in Restricted Areas", "Foreign nationals additionally need a Protected Area Permit (PAP) for Arunachal Pradesh, obtainable through a government-registered tour operator or at state government offices. The PAP requirement for Arunachal was relaxed in 2010 for most nationalities. Pakistani, Chinese, and Bangladeshi nationals face additional restrictions. Always verify current requirements at incredibleindia.org before travel."],
      ],
    },
    {
      flag: "✈️",
      title: "Getting to & Around North East India",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Flying to Guwahati (GAU)", "Guwahati's Lokpriya Gopinath Bordoloi International Airport is the hub for North East travel. IndiGo, Air India, and SpiceJet connect Guwahati to Delhi (₹2,500–6,000, 2.5 hours), Kolkata (₹1,200–3,000, 1 hour), Mumbai (₹3,500–7,000, 3 hours), and Bengaluru (₹3,000–6,500). Pre-book at least 2 weeks ahead. Connecting flights within NE: Guwahati–Jorhat (₹2,000–3,500) for Kaziranga access; Guwahati–Tezpur for Arunachal gateway."],
        ["Guwahati to Kaziranga", "220km, 5–6 hours by road. ASTC buses (₹180–250) and private Sumo/Innova cabs (₹2,000–2,800) depart from Paltan Bazaar bus stand. NH 37 passes through tea gardens and river plains. Alternatively, take a train to Furkating Junction (3.5 hours from Guwahati, ₹80–200) and auto/cab to Kaziranga (30km, ₹400)."],
        ["Kaziranga to Meghalaya (Shillong)", "Shillong is 230km from Kaziranga via Guwahati. The Guwahati–Shillong route (100km) takes 3–3.5 hours by shared cab (₹300–400/seat) or private taxi (₹1,800–2,200). The Meghalaya state border is at Umiam Lake (17km from Shillong) — a stunning reservoir in the hills. Buses from Guwahati ISBT to Police Bazaar Shillong: ₹150–200, 3 hours."],
        ["Shillong to Tawang (Arunachal)", "Tawang is 540km from Shillong — 2 days by road. Route: Shillong → Guwahati (3 hours) → Tezpur (4 hours) → Bomdila (3 hours, overnight) → Sela Pass (14,000 ft) → Tawang (5 hours from Bomdila). Total drive time: 14–16 hours over 2 days. Alternatively, fly Guwahati to Tezpur (₹2,500–4,000) and drive 6–7 hours. No train access to Tawang — road only."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₹3,000–5,000/day",
      days: [
        {
          day: "Days 1–2",
          title: "Guwahati — Kamakhya Temple & Brahmaputra",
          items: [
            "Day 1 morning — Kamakhya Temple (Nilachal Hill, Free entry to temple complex, but inner sanctum puja darshan ₹500–2,000 for priority queue). Kamakhya is one of the 51 Shakti Peethas — among the most powerful tantric Devi shrines in India. The main temple houses no idol; it enshrines the goddess's yoni (fertility symbol) as a natural rock fissure. The Ambubachi Mela (June) draws tens of thousands of tantric sadhus — the most extraordinary festival gathering in NE India. Morning darshan line can be 2–3 hours; visit by 7am to reduce wait to 45 minutes.",
            "Day 1 afternoon — Umananda Island Temple (boat from Fancy Bazaar Ghat, ₹50–80 return). A Shiva temple on the smallest inhabited river island in the world — in the middle of the Brahmaputra. The island has resident golden langur monkeys. The 10-minute boat crossing and the views of Guwahati's skyline from the river are themselves worth the trip. Return by sunset — the Brahmaputra at dusk is one of NE India's great evening sights.",
            "Day 1 evening — Paltan Bazaar or Pan Bazaar for Guwahati street food: jhal muri (₹30), momos at Tibetan-run stalls (₹60–80 for 8 pieces), and Assamese fish tenga (sour fish curry) at local thali restaurants (₹120–180).",
            "Day 2 — Assam State Museum (GS Road, ₹10 Indians) for NE India prehistory, tribal artefacts, and Ahom-era sculpture. Then Srimanta Sankardev Kalakshetra (Panjabari, ₹30 entry) — a cultural complex dedicated to the 15th-century Assamese saint-reformer, with museums on Assam's eight major communities, traditional weaving, and performing arts. Allow 3 hours for both. Evening: Nehru Park in the evening for Brahmaputra views.",
            "Budget stay in Guwahati: Hotel Siroy (Paltan Bazaar, ₹700–1,200/night AC), Zostel Guwahati (₹450–650 dorm), or Assam Tourism lodges (₹800–1,500).",
          ],
          cost: "₹1,500–2,500/day in Guwahati (stay + food + sights)",
        },
        {
          day: "Days 3–4",
          title: "Kaziranga National Park — Rhino Safaris",
          items: [
            "Day 3 — Travel Guwahati to Kaziranga (5–6 hours, shared cab ₹300–400/seat or ASTC bus ₹180). Arrive by afternoon. Check in at a lodge on the park boundary — Wild Grass Resort (₹2,500–4,000/night) or Aranya Tourist Lodge (Assam Tourism, ₹1,200–2,000). Evening: watch for elephants at the forest edge at dusk from your lodge.",
            "Day 3 evening — Kaziranga National Orchid & Biodiversity Park (park road, ₹50 Indians). 500 species of orchids. If visiting October–November, some are in bloom.",
            "Day 4 dawn — Central Range jeep safari (6am departure, ₹2,500–3,500 for private jeep, or ₹1,200 per person shared, park entry ₹250 Indians). The Central Range is the best zone for one-horned rhinoceroses — Kaziranga has the world's highest density of greater one-horned rhinos (2,600+). Sightings are near-guaranteed. Also elephants, wild water buffalo (gaur), hog deer, grey pelicans, and adjutant storks. Golden hour light across the Brahmaputra floodplain.",
            "Day 4 morning — Western Range elephant safari (₹900–1,200/person, 6am and 9am slots, book via jhurjhuri.in or Assam Tourism in advance). Elephant-back allows approach within 20 metres of rhinos — this is Kaziranga's signature experience. Book at least 3 days ahead, especially November–March peak season.",
            "Day 4 afternoon — Mihimukh Range or Eastern Range jeep safari (₹2,500 private, 3pm departure). The Eastern Range has excellent tiger habitat and wild water buffalo herds. Kaziranga has the highest tiger density in the world per unit area (though tigers are far harder to spot than rhinos).",
            "Eat: Fish tenga, masor curry (Assamese mustard-fish), and pork with bamboo shoot at Kaziranga Forest Resort restaurant or village dhabas near the park gate (₹120–200/meal).",
          ],
          cost: "₹3,500–5,500/day in Kaziranga (stay + safaris + food)",
        },
        {
          day: "Days 5–6",
          title: "Meghalaya — Shillong, Cherrapunji & Dawki",
          items: [
            "Day 5 — Travel Kaziranga to Shillong via Guwahati (8–9 hours total). Arrive Shillong late afternoon. Check in to Shillong's Laitumkhrah area: La Maison (₹1,200–1,800) or Ri Kynmaw (₹800–1,200). Evening: Police Bazaar market for local street food — Jadoh (red rice with pork, ₹80–120), Pumaloi (rice pudding), and Lakadong turmeric tea (₹30).",
            "Day 5 evening — Ward's Lake (Police Bazaar, ₹10 entry) at sunset. The colonial-era lake in the centre of Shillong is a calming contrast to the market chaos. The Scots Kirk (Church of Scotland) nearby dates to 1924 and is architecturally striking.",
            "Day 6 dawn — Depart Shillong for Cherrapunji (Sohra, 54km, 1.5 hours, shared cab ₹100–150 or private ₹800–1,000). Cherrapunji was the world's wettest place for most of the 20th century (now second to Mawsynram, 15km away). October–April: clear waterfalls and dramatic valley views. Nohkalikai Falls (India's highest plunge waterfall at 340m, ₹50 entry) is most powerful after monsoon but still dramatic in winter.",
            "Day 6 — Living Root Bridges trek at Nongriat village. The Double Decker Living Root Bridge trek is one of India's most extraordinary natural experiences — 3,500 steps down and back up through jungle to a 400-year-old bridge woven from rubber tree roots by the Khasi people. Entry fee: ₹50. Guide recommended (₹300–500). Difficulty: moderate–hard, 4–5 hours. Carry 2 litres of water. Do not attempt in new footwear.",
            "Day 6 afternoon — Dawki (Umngot River, 80km from Cherrapunji, 2.5 hours, shared cab ₹200 or private ₹1,500). The Umngot at Dawki is India's clearest river — boats appear to float on glass. December–April water clarity is peak. Boat ride: ₹400–600 per boat. The India–Bangladesh border is 100 metres downstream. Return to Shillong for night.",
          ],
          cost: "₹2,500–4,000/day in Meghalaya",
        },
        {
          day: "Days 7–8",
          title: "Arunachal Pradesh — Tawang (ILP Required)",
          items: [
            "IMPORTANT: Have your Arunachal Pradesh ILP printed and in hand before departing Shillong. Apply online at arunachalilp.com — takes 24–48 hours. The first checkpoint at Bhalukpong (entering AP from Assam) will stop every vehicle.",
            "Day 7 — Long drive day: Shillong → Guwahati (3 hours) → Tezpur (4 hours) → Bomdila (3 hours). Total 10 hours of driving. Overnight at Bomdila (2,415m): Hotel Pema Katsel or ITBP-run Tourist Lodge (₹800–1,500). Bomdila has a Tibetan Buddhist monastery worth a 30-minute visit in the evening and excellent views of the Kameng Valley.",
            "Day 8 dawn — Bomdila to Sela Pass to Tawang (160km, 5–6 hours driving on mountain roads). Sela Pass at 13,700 feet (4,176m) is one of India's highest motorable passes — snow-covered October–March. The landscape above the treeline — prayer flags, frozen lakes, yak herders, and the Himalayan arc — is extraordinary. Carry warm layers even in October.",
            "Day 8 afternoon — Tawang (2,669m). Tawang Monastery (Galden Namgye Lhatse) is the largest Buddhist monastery in India and the second largest in the world after Potala Palace in Lhasa — founded in 1681. The main assembly hall has a 28-foot gilded Buddha and thousands of butter lamps. The valley views from the monastery courtyard — glaciers, snow peaks, and the Tawang River gorge — are among the most dramatic mountain panoramas in the entire Himalayan arc.",
            "Tawang stay: Hotel Tawang (₹800–1,500/night), Pemaling Guest House (₹600–1,000). Eat at monastery canteen (thukpa, momos, butter tea, ₹80–150).",
            "Day 8 evening — Urgelling Monastery (birthplace of the sixth Dalai Lama, 1683) and Ani Gompa (nunnery with young novice monks). Both are a 10-minute drive from Tawang town.",
          ],
          cost: "₹2,500–4,500/day in Arunachal (higher transport costs)",
        },
        {
          day: "Days 9–10",
          title: "Majuli River Island & Return to Guwahati",
          items: [
            "Day 9 — Reverse route Tawang to Jorhat (12 hours driving, or fly Tezpur to Guwahati and drive Guwahati to Jorhat — 4.5 hours). Jorhat is the gateway to Majuli. Overnight in Jorhat if arriving late: Hotel Paradise or Assam Tourism Circuit House (₹800–1,500).",
            "Day 9/10 — Ferry from Nimati Ghat (Jorhat) to Majuli (₹20 ferry, 1–2 hours depending on Brahmaputra water level). Majuli is the world's largest inhabited river island — 880 sq km of river delta, home to 22 Vaishnava monasteries (Satras) that have been the centre of Assamese neo-Vaishnavism since the 16th century. The island is flat, lush, and dramatically quiet after the Himalayan road sections.",
            "Majuli Satras: Kamalabari Satra (accessible, active — monks practice traditional raas leela dance, weaving, and manuscript writing), Auniati Satra (excellent museum of Ahom royal offerings), and Dakhinpat Satra (active monks, welcomes respectful visitors). All free. Dress modestly.",
            "Majuli stay: La Maison de Ananda (eco-lodge, ₹1,800–2,800/night including meals), or simple village guesthouses (₹400–700). Rent a bicycle on the island (₹100–150/day) — cycling through mustard fields and fishing villages to the Satras is the quintessential Majuli experience.",
            "Day 10 — Return ferry to Nimati Ghat. Drive/bus to Guwahati (4.5 hours, ₹200–350 shared cab or ₹300 ASTC bus). Catch evening or night flight home from GAU. If budget allows, fly Jorhat (JRH) to Guwahati (₹2,000–3,500, 45 minutes) to save time on the final day.",
          ],
          cost: "₹2,000–3,500/day on Majuli + transport",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₹6,000–12,000/day",
      days: [
        {
          day: "Days 1–2",
          title: "Guwahati — Culture & Brahmaputra Cruises",
          items: [
            "Stay at Vivanta by Taj — Guwahati (₹4,500–7,000/night) or Radisson Blu GuwahatiNovatel (₹3,500–5,500). Both have Brahmaputra-view rooms. The Taj Guwahati evening dinner with river views is exceptional.",
            "Private guided Kamakhya Temple visit with a temple historian (₹800–1,500 for guide, priority darshan queue ₹500–2,000). Understanding the Shakta tantric tradition and Ambubachi Mela history transforms this from a temple visit to a profound cultural encounter.",
            "Brahmaputra river cruise: book the MV Charaidew luxury cruise (Assam Bengal Navigation, ₹8,000–15,000/night all-inclusive, multi-day option) or a private sunset cruise from Fancy Bazaar Ghat (₹2,000–3,500 for 2 hours, private boat).",
            "Majuli on the mid-range plan: book La Maison de Ananda in advance (fills up Oct–Feb) — their guided Satra visits, traditional Assamese dinner, and evening mask-making demonstrations are worth the premium.",
          ],
          cost: "₹5,000–9,000/day",
        },
        {
          day: "Days 3–4",
          title: "Kaziranga — Premium Safari Experience",
          items: [
            "Stay at Diphlu River Lodge (₹6,000–10,000/night all-inclusive) or Iora — The Retreat (₹4,500–7,000). Both include guided safaris, naturalist talks, and meals. The Diphlu Lodge's riverside location means wildlife comes to the boundary at night.",
            "Dedicated full-day Central Range jeep safari with senior naturalist guide (₹4,000–6,000 for private jeep + guide). Multiple sighting zones, stops at waterholes, and Brahmaputra floodplain photography at golden hour.",
            "Elephant safari at dawn: pre-booked through resort (₹1,200–1,500/person). Approaching rhinos silently on elephant-back — with no engine noise — is fundamentally different from a jeep safari. One of the great wildlife experiences in India.",
            "Evening wildlife talk at lodge: Kaziranga's naturalists discuss conservation history — how the park went from 12 rhinos in 1905 to 2,600+ today is one of Asia's great conservation successes.",
          ],
          cost: "₹7,000–12,000/day",
        },
        {
          day: "Days 5–6",
          title: "Meghalaya — Cherrapunji, Living Root Bridges & Mawlynnong",
          items: [
            "Stay at Ri Kynjai Resort (Umiam Lake, 17km from Shillong, ₹6,000–10,000/night) — Meghalaya's most beautiful resort, set on a cliff above the lake with valley views. Or Polo Orchid Resort (Cherrapunji, ₹3,500–6,000) for direct Cherrapunji access.",
            "Private SUV with driver for Meghalaya circuit (₹3,500–5,000/day): Cherrapunji waterfalls, Living Root Bridges, Dawki, and Mawlynnong (Asia's Cleanest Village — an extraordinary Khasi village with treehouse lookouts and traditional bamboo waste management, ₹30 entry).",
            "Living Root Bridge trek with a certified Khasi guide (₹600–1,000) — the guide explains how the Jaintia and Khasi people engineer root bridges over decades by training rubber tree roots across river gorges. The knowledge is oral, community-held, and irreplaceable.",
            "Dawki: private boat on the Umngot River (₹800–1,200) at dawn before tourist boats arrive. Photograph the glass-floor effect from the boat prow facing upstream.",
          ],
          cost: "₹6,000–10,000/day",
        },
        {
          day: "Days 7–8",
          title: "Arunachal Pradesh — Tawang Monastery & Sela Pass",
          items: [
            "Hire a dedicated private car with experienced Arunachal driver from Guwahati (₹5,000–7,000 for Tawang circuit, 3-day hire). Mountain roads require a local driver who knows road conditions — this is not an area for self-drive or first-time drivers.",
            "Overnight at Bomdila in a comfortable guesthouse or Heritage Hotel (₹2,000–3,500) — Bomdila's apple orchards are in bloom March–April.",
            "Sela Pass: 30-minute stop at the pass for photography, prayer flags, and frozen Sela Lake. The sense of altitude (4,176m) and the complete silence of the pass at dawn is profound.",
            "Tawang Monastery: arrange a private guided tour through the monastery's cultural trust (₹500–1,000) — a monk guide explains the thangka paintings, the 400-year butter lamp tradition, and the monastery's role in the 1962 India-China war.",
            "Stay at Hotel Tashi Gang or Pemaling (Tawang, ₹2,000–3,500/night). Order Tibetan butter tea (po cha), thukpa, and Arunachali smoked pork.",
          ],
          cost: "₹5,000–9,000/day",
        },
        {
          day: "Days 9–10",
          title: "Majuli — Monastery Island & Return",
          items: [
            "Private car Tawang to Jorhat (or fly Tezpur/Guwahati, then drive Jorhat). Ferry to Majuli (₹20 public, or private boat ₹1,500–2,000).",
            "Stay at La Maison de Ananda (₹2,500–4,000/night, all meals, guided Satra visits, cultural evening with traditional mask-makers). Pre-book 4–6 weeks ahead for October–February.",
            "Private guided Satra circuit: all four major Satras with a Vaishnava monk who explains the 500-year-old theatrical and philosophical tradition of Sankardeva's neo-Vaishnavism. Photography of Satra evening prayers (with permission) — the brass lamps and chanting in the thatched assembly halls is unlike anything else in India.",
            "Sunset cycle to the Brahmaputra banks — rent quality bicycles through La Maison, cycle through village paths, and watch the sunset over the braided river channels with sandbars stretching to the horizon.",
            "Return to Guwahati via Jorhat — fly GAU home. Buy Assam tea (₹200–500 per 250g of single-estate Darjeeling/Assam Orthodox) at Guwahati airport before departure.",
          ],
          cost: "₹5,000–9,000/day",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "₹600–1,500",
      food: "₹300–600",
      transport: "₹500–1,200",
      activities: "₹500–1,500",
      total: "₹3,000–5,000/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "₹3,000–7,000",
      food: "₹800–2,000",
      transport: "₹1,500–3,000",
      activities: "₹1,000–3,000",
      total: "₹6,000–12,000/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "₹8,000–20,000",
      food: "₹2,000–5,000",
      transport: "₹3,000–6,000",
      activities: "₹2,000–5,000",
      total: "₹15,000–35,000/day",
    },
  ],
  mistakes: [
    {
      icon: "🪪",
      title: "Not Getting Your ILP Before Arriving at the AP Border",
      desc: "The Arunachal Pradesh Inner Line Permit checkpoint at Bhalukpong (on NH 13, between Assam and AP) stops every vehicle. If you do not have a printed ILP, you will be turned back — no exceptions, no on-the-spot issuance at this checkpoint. The online process at arunachalilp.com takes 24–72 hours and costs ₹100. Apply before you leave Guwahati or Shillong. Carry a printout plus the ID used for application. Digital copies are accepted at some but not all checkpoints — always have the printout.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌧️",
      title: "Visiting During Monsoon (June–September)",
      desc: "North East India receives the heaviest rainfall in the world during monsoon — Cherrapunji averages over 11,000mm annually, most of it June–September. During this period: NH 6 (Shillong–Guwahati) has frequent landslides, the Tawang road is regularly blocked for days at a time, Kaziranga National Park is closed (June 1–October 31 for park safaris), rivers rise dangerously, and the Living Root Bridge trek becomes hazardous. The only advantages are that Meghalaya's waterfalls are thundering and the landscapes are vibrantly green — but the logistical disruptions outweigh the scenery gains for most travellers. Stick to October–April.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🕐",
      title: "Underestimating Road Travel Times in the Hills",
      desc: "A 50km journey in Arunachal Pradesh or Meghalaya's hills can take 2.5–3.5 hours. The mountain roads are single-lane, hairpin-turn affairs that follow contours rather than straight lines. The Bomdila-to-Tawang stretch (160km) takes 5–7 hours on a good day; after snowfall or rain it can take 8–10 hours or become impassable. The Cherrapunji–Dawki road (80km) is 2.5–3 hours. Plan every NE India driving day around these realities — a day that looks like 3 sights on a map often allows only 2 comfortably. Build in one-hour buffers for every mountain leg.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📅",
      title: "Going Without Advance Bookings for Peak Months",
      desc: "October–December is peak NE India season — specifically for Kaziranga rhino safaris (elephant safari slots fill 10 days ahead), Majuli's La Maison de Ananda (books out 4–6 weeks ahead in November), and Tawang accommodation (limited quality rooms, fills quickly for long weekends). The Hornbill Festival in Nagaland (1–10 December) sees Kohima hotels fully booked 3 weeks ahead. For any October–February travel, book safaris, Majuli homestays, and Tawang lodges before leaving home.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🦏",
      title: "Kaziranga Safari Timing — Dawn Is Everything",
      desc: "Kaziranga's Central Range jeep safari starts at 6am. This golden hour — first light over the Brahmaputra floodplain, ground mist rising through tall elephant grass, rhinos grazing at the waterhole margins — is when the park is at its most atmospheric and most active. The 9am second shift is significantly less rewarding. Book the 6am jeep safari, pack warm layers (November–February mornings are 8–12°C), and bring a telephoto lens if you have one. The elephant safari (5:30–6:30am) is booked separately and gives closer rhino access than any jeep. Both on the same day is the full Kaziranga experience.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌉",
      title: "Living Root Bridge Trek — Preparation Is Not Optional",
      desc: "The Double Decker Living Root Bridge trek at Nongriat, Cherrapunji involves 3,500 steps down and back up through dense subtropical forest. Many travellers — particularly those not used to hill walking — significantly underestimate this. Wear proper grip shoes (not sandals, not new shoes). Carry 2 litres of water minimum. Start by 8am before heat builds. The descent takes 2–2.5 hours; the return climb takes 2.5–3.5 hours. Trekking poles are useful for the descent. The bridge itself is extraordinary — 400-year-old rubber tree roots trained and woven by Khasi communities, carrying full human weight. A guide (₹300–500) helps navigate the multiple trail junctions and explains the root-training process in fascinating detail.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏔️",
      title: "Tawang in November — One of India's Great Experiences",
      desc: "November hits the perfect window for Tawang: clear skies, snowcapped peaks in full visibility, Sela Pass snowfall beginning (dramatic but still passable), temperatures cold but manageable (0–10°C days, -5 to 0°C nights). Carry down jacket, thermals, and good boots. The monastery receives fewer than 50 foreign tourists per week even in peak season — you may have the great prayer hall nearly to yourself. The monks' morning prayers at 5am (visitors welcome respectfully with monastery permission) — with hundreds of butter lamps illuminating ancient thangkas and 40 monks chanting in the pre-dawn dark — is one of the most extraordinary experiences available to a traveller in India.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏡",
      title: "Stay in Homestays — North East's True Advantage",
      desc: "North East India's biggest travel asset is its network of community and family homestays that operate at the level of comfort Western boutique hotels charge a premium for — at ₹600–1,500/night with meals. Majuli island homestays include evening mask-making demonstrations, home-cooked Assamese food (smoked pork with bamboo shoot, masor tenga, pitha rice cakes), and morning boat-fishing trips with the host family. Meghalaya has an organised homestay circuit (meghalayatourism.gov.in) across Khasi and Jaintia villages. In Tawang, the Monpa tribal guesthouses provide home-cooked Arunachali food (buckwheat pancakes, khura, butter tea) at ₹600–1,200/night. Staying in these homes is the experience. The luxury resorts are comfortable but give you NE India from a distance.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Do Indian citizens need any special permit for North East India?",
      a: "Yes — for four states. Arunachal Pradesh, Nagaland, Manipur, and Mizoram all require an Inner Line Permit (ILP) for all Indian nationals (and a Protected Area Permit for foreigners). The ILP is easy and cheap (₹100) but must be obtained before you reach the border checkpoint. Apply online at arunachalilp.com for Arunachal, nagaland.gov.in for Nagaland. Meghalaya, Assam, Sikkim, Tripura, and Meghalaya do not require any special permit beyond a standard Indian citizen ID.",
    },
    {
      q: "What is the best time to visit North East India?",
      a: "October to April is the optimal window. November–February is peak for Kaziranga safaris (best rhino sightings), Tawang (clear skies, manageable snow), and Meghalaya (waterfalls visible but roads passable). March–April adds rhododendron blooms on all Himalayan routes and is excellent for Arunachal. Avoid June–September — Kaziranga closes for safaris, Tawang road is monsoon-disrupted, and North East India's extreme rainfall causes regular landslides. The Hornbill Festival in Nagaland (first week of December) is worth planning a Nagaland extension.",
    },
    {
      q: "How safe is North East India for travellers?",
      a: "Very safe for tourists in 2026. The insurgencies that affected parts of Manipur, Nagaland, and Assam in previous decades are either resolved or significantly reduced. Meghalaya, Arunachal Pradesh, and Assam are consistently safe. The primary hazards are road-related — mountain driving requires experience, and weather can close passes suddenly. Kaziranga has armed forest guards protecting rhinos from poachers, which has nothing to do with tourist safety. Standard precautions (don't trek alone at night, check road conditions before mountain drives) apply as in any remote area.",
    },
    {
      q: "Can I do this trip without a car — using only public transport?",
      a: "Partially, but not efficiently. Guwahati, Shillong, and Kaziranga are connected by ASTC buses and shared Sumo cabs (₹150–400 per leg). Majuli requires a public ferry (₹20). However, Tawang has no regular bus service — the state-run bus (ASTC, ₹600, runs 3x weekly) takes 15–18 hours versus 6–7 in a private car. Cherrapunji's waterfalls, Dawki, and Mawlynnong all require either shared cabs (available but infrequent) or a private vehicle. The trip is doable on public transport but adds 2–3 days of extra time for connections. A shared jeep hire split between 3–4 travellers costs the same as multiple bus journeys and saves 8–10 hours of travel time.",
    },
    {
      q: "Is the Kaziranga elephant safari worth booking in advance?",
      a: "Yes, strongly. The Kaziranga elephant safari is the single most sought-after activity in NE India tourism — only a limited number of elephants are available per morning slot, and slots fill 7–14 days ahead in peak season (November–February). Book through jhurjhuri.in (Assam tourism online portal) or call Kaziranga Tourism (03776-268243) at least a week ahead. If you cannot pre-book, arrive at the Kohora range counter at 5am on the day — no-shows sometimes free up spots. The jeep safari is easier to arrange on short notice but provides a fundamentally different (and more distant) experience.",
    },
    {
      q: "What should I eat in North East India?",
      a: "Assam: Fish tenga (sour mustard fish curry, ₹120–180), masor curry, pork with bamboo shoot (₹150–250), and smoked pork from market stalls. Meghalaya: Jadoh (red rice cooked with pork blood, ₹80–120), Tungrymbai (fermented soybean paste), and Nakham Bitchi (dried fish chutney). Arunachal/Tawang: Thukpa noodle soup (₹80–120), momos (₹60–80), butter tea (po cha, ₹30–50), and buckwheat pancakes. Majuli: Traditional Assamese pitha (rice cakes steamed in banana leaf, ₹40–60), home-cooked fish with black sesame paste. All of these are unique, largely unknown outside the region, and form the true food travel case for coming here.",
    },
  ],
  combineWith: ["bhutan-5-days", "sikkim-5-days", "darjeeling-3-days"],
  relatedSlugs: ["nepal-7-days", "bhutan-5-days", "sri-lanka-7-days"],
  galleryQuery: "kaziranga rhino assam meghalaya living root bridge tawang monastery majuli",
};

export const metadata: Metadata = {
  title: "North East India in 10 Days: Kaziranga, Meghalaya, Tawang & Majuli (2026)",
  description: "Complete 10-day North East India itinerary — Kaziranga rhino safaris, Meghalaya living root bridges, Tawang monastery in Arunachal Pradesh (ILP guide), Majuli river island. Real ₹ costs for Indian travellers.",
  keywords: [
    "north east india itinerary 10 days",
    "north east india travel guide 2026",
    "kaziranga national park rhino safari",
    "meghalaya living root bridge trek",
    "tawang monastery arunachal pradesh",
    "inner line permit arunachal pradesh",
    "majuli river island assam",
    "north east india budget travel",
  ],
  openGraph: {
    title: "North East India in 10 Days: Kaziranga, Meghalaya, Tawang & Majuli (2026)",
    description: "One-horned rhinos, living root bridges, a Himalayan monastery above the clouds, and India's most extraordinary river island — 10-day NE India guide from ₹3,000/day.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "One-horned rhinoceros in Kaziranga National Park Assam with Brahmaputra floodplain at dawn",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "North East India 10 Days (2026)",
    description: "Kaziranga rhinos, Meghalaya root bridges, Tawang monastery (ILP guide), Majuli island — real ₹ costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/north-east-india-10-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "North East India in 10 Days: Kaziranga, Meghalaya, Tawang & Majuli (2026)",
      datePublished: "2026-04-06T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=80",
      description:
        "Complete 10-day North East India travel guide covering Kaziranga rhino safaris, Meghalaya living root bridges, Tawang monastery, Inner Line Permit requirements, and Majuli river island.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "North East India 10 Days",
          item: "https://www.incredibleitinerary.com/blog/north-east-india-10-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "North East India",
      description:
        "Eight states of extraordinary geographic and cultural diversity — home to the world's largest river island (Majuli), the world's wettest place (Cherrapunji), the greatest one-horned rhino habitat (Kaziranga), and Himalayan Buddhist monasteries (Tawang) in India's most restricted and rewarding travel region.",
      touristType: ["Wildlife enthusiasts", "Trekkers", "Cultural tourists", "Photography travellers", "Adventure seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.1445,
        longitude: 91.7362,
      },
    },
  ],
};

export default function NorthEastIndia10DaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
