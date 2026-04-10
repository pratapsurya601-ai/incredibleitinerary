import type { Metadata } from "next";
import BhutanClient from "./BhutanClient";

const data = {
  destination: "Bhutan",
  country: "Bhutan",
  countryFlag: "🇧🇹",
  slug: "bhutan-5-days",
  heroQuery: "bhutan tiger nest monastery paro cliffside himalayas",
  heroAlt: "Tiger's Nest Monastery Bhutan perched on a sheer cliff above Paro valley with prayer flags",
  category: "South Asia",
  date: "April 5, 2026",
  readTime: "15 min read",
  intro: "The Tiger's Nest Monastery clings to a sheer 900-meter cliff above the Paro Valley — prayer flags snapping in the mountain wind, the sound of bells from inside the temple carried down through pine forests, the entire structure appearing physically impossible against the Himalayan sky. Five days in Bhutan gives you the Tiger's Nest at golden hour, the river-wrapped majesty of Punakha Dzong, Thimphu's street archery and giant Buddhas, Dochula Pass with 108 chortens and Himalayan peaks — and the chance to understand a kingdom that measures progress in Gross National Happiness rather than GDP.",
  stats: { duration: "5 Days", budgetFrom: "$250", bestMonths: "Mar–May, Sep–Nov", airport: "PBH (Paro International)" },
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
      title: "Indian Passport Holders — Special Access",
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["No Visa Required", "Indian citizens do not need a visa for Bhutan. Entry is on a valid Indian passport or Voter ID card. This is one of only three nationalities with visa-free access (the others being Bangladesh and Maldives). No advance approval is required from the Bhutanese government."],
        ["SDF Fee: Rs 1,200/day", "Indian visitors pay a Sustainable Development Fee (SDF) of Rs 1,200 per person per day (approximately $14–15/day depending on exchange rate). This is a fraction of the $100/day that other international visitors pay. The SDF is paid to your Bhutanese registered tour operator or hotel at check-in."],
        ["Tour Operator Requirement", "Indian visitors must book through a Bhutan Tourism Council (BTC) registered Indian travel agent or a licensed Bhutanese tour operator. This is not optional — you cannot travel independently as an Indian citizen to Bhutan (unlike most other countries where Indian travel is self-directed). The operator handles your SDF payment, accommodation, and itinerary."],
        ["Entry Points", "Indian visitors can enter Bhutan overland via Phuentsholing (West Bengal border, connected to Siliguri), Gelephu (Assam border), or Samdrup Jongkhar (Assam border). Paro Airport (PBH) is also accessible for those flying — Druk Air and Bhutan Airlines operate flights from Delhi, Kolkata, Mumbai, Bangalore, and Guwahati ($150–400 return)."],
        ["Recommended Route", "Fly from Delhi/Kolkata to Paro (PBH) — 90-minute flight, most dramatic approach of any airport in the world (the pilot navigates a valley between peaks in visual flight conditions). Return via the same route or exit overland through Phuentsholing."],
      ],
    },
    {
      flag: "🌍",
      title: "International Passport Holders",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa + SDF Required", "All international visitors (except Indian, Bangladeshi, Maldivian citizens) need a Bhutanese visa ($40 processing fee) plus the Sustainable Development Fee. The visa is arranged through your licensed Bhutanese tour operator — you cannot apply independently. Apply at least 2–4 weeks before travel."],
        ["SDF: $100/day (Updated 2024)", "The SDF was reduced from $250/day to $100/day in September 2024. Always check the current rate at the Tourism Council of Bhutan (bhutan.travel) as this is subject to policy review. The SDF applies on top of your actual tour costs (accommodation, food, guide, transport)."],
        ["Licensed Tour Operator Mandatory", "All international visitors must book through a licensed Bhutanese tour operator. This is non-negotiable — no independent travel permits are issued. Your operator handles the visa application, arranges your permit, and provides a guide and driver as required by tourism regulations. Find registered operators at bhutan.travel/tourism-council-of-bhutan."],
        ["Flights to Paro", "Druk Air and Bhutan Airlines are the only airlines permitted to land at Paro (PBH). Connections from Bangkok, Singapore, Delhi, Kathmandu, Dhaka, and a growing number of regional hubs. The Paro approach is genuinely one of aviation's most scenic — pilots require special certification to land at PBH due to the valley terrain."],
        ["What SDF Covers", "The SDF funds Bhutan's free education system, universal healthcare, and environmental conservation. Carbon-negative since the 1990s, Bhutan constitutionally mandates 60% forest coverage (currently 71%). Your SDF literally pays for this system. The fee model is Bhutan's intentional strategy of high-value, low-impact tourism rather than mass visitor numbers."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$250/day (SDF + basics)",
      days: [
        {
          day: "Day 1",
          title: "Paro Arrival + Kyichu Lhakhang + Paro Dzong",
          items: [
            "Arrive at Paro Airport — the world's most dramatic commercial airport approach. The pilot follows the Paro Valley between 5,000-meter peaks, banking hard left at the last moment. Even experienced travellers find it thrilling. Your guide and driver meet you at arrivals.",
            "Check into your accommodation in Paro (budget guesthouses: $30–50/night, your tour operator includes this). Freshen up and orient yourself: Paro sits at 2,200m elevation — take it easy for the first few hours if coming from sea level, mild altitude effects are common.",
            "Kyichu Lhakhang (2km from Paro town): one of Bhutan's two oldest temples, built in the 7th century CE by the Tibetan emperor Songtsen Gampo to pin down a demoness (108 such temples were built simultaneously across Tibet and Bhutan, one for each joint of the demon's body). The main Jowo statue is believed to be from the 7th century. Still an active monastery — enter with reverence, walk clockwise around the shrine.",
            "Paro Rinpung Dzong (Fortress of the Heap of Jewels): the most visually striking dzong in Bhutan, a massive whitewashed fortress-monastery above the Paro River, reached via a covered wooden cantilever bridge (one of the last traditional bridges of its type). The dzong serves as the administrative headquarters of Paro district and an active monastery simultaneously. The courtyard hosts the annual Paro Tsechu festival (spring — spectacular masked dances).",
            "Evening in Paro town: traditional Bhutanese dinner at a local restaurant ($5–10 per person). Ema datshi — chilli and cheese stew (the national dish, made with fresh green chillis and soft Bhutanese cheese, intensely spicy and addictive), red rice (Bhutan's staple, slightly nutty in flavour, grown only at this altitude), and puta (buckwheat noodles). Butter tea (suja, salted yak butter tea) is an acquired taste but the experience is essential.",
          ],
          cost: "$80–120 total (guide + guesthouse + meals, SDF separate)",
        },
        {
          day: "Day 2",
          title: "Tiger's Nest Monastery — The Essential Hike",
          items: [
            "6:45am — Early breakfast at your accommodation. Start the Tiger's Nest hike by 7:00am — the most important time management decision of the trip. The trail faces east and morning light hits the monastery's white walls beautifully. By 9am the light has changed and by 10am the viewpoint is crowded.",
            "The hike: 5.5km round trip, approximately 800m elevation gain, takes 2.5–3 hours to ascend. The path is well-maintained and switchbacks through blue pine and cypress forest draped in Spanish moss and prayer flags. Your guide sets the pace — altitude (2,200m at the base, 3,120m at the monastery) means taking it slowly is better than arriving exhausted.",
            "Tiger's Nest Viewpoint (2 hours into the hike): the first full view of Paro Taktsang Monastery across the gorge is genuinely one of the great visual moments in travel. The monastery perches on a sheer granite cliff at 900 meters above the valley floor, appearing to defy gravity. Built in 1692 around a cave where Guru Rinpoche is said to have meditated for 3 years, 3 months, and 3 days.",
            "Monastery Entry ($15–20 fee, paid at the entrance): cross the bridge over the gorge and climb the final stone steps to the monastery complex. Four temples cluster around the cliff face, connected by stairways cut directly into the rock. Inside: ancient thangka paintings, butter lamps, the cave of Guru Rinpoche himself. Photography prohibited inside (strictly enforced — leave camera in the bag at the door).",
            "Descent: 1.5 hours down, easier on lungs but harder on knees. Most guides stop for tea at the halfway cafeteria on the descent (free with tour, fresh yak butter tea and biscuits).",
            "Afternoon: rest at accommodation. A 90-minute rest after the Tiger's Nest hike is not laziness — it is physiological common sense at altitude. Drink 3 litres of water.",
            "Evening: archery demonstration if your guesthouse or tour operator can arrange one ($5–10, sometimes free at local grounds). Bhutanese archery uses traditional bamboo bows with targets 145 meters apart — 10x the Olympic standard distance. The entire team dances and chants mockery when opponents miss.",
          ],
          cost: "$30–50 total (Tiger's Nest entry + meals + archery, guide included in SDF)",
        },
        {
          day: "Day 3",
          title: "Thimphu — Capital City + Buddha Dordenma",
          items: [
            "Drive from Paro to Thimphu (1 hour, 60km, along the Paro River valley — beautiful road through traditional Bhutanese villages with farmhouses painted with protective phallus symbols).",
            "Buddha Dordenma: a 51-meter bronze and gold Buddha statue seated on a hillside above Thimphu, visible from the entire capital. The base contains 125,000 smaller Buddha statues. The 2015 consecration was one of the largest Buddhist gatherings in Bhutan's history. Entry is free; the view of Thimphu valley from the statue's terrace is excellent.",
            "National Memorial Chorten (free): a large stupa built in 1974 in memory of the third king, now a daily gathering point for elderly Thimphu residents who circumambulate it continuously through the day, spinning prayer wheels, telling beads. One of the most peaceful spots in the capital.",
            "Thimphu Dzong (Tashichho Dzong): the seat of the Bhutanese government and the summer residence of Je Khenpo (the head of Bhutanese Buddhism). The whitewashed fortress above the Wang Chhu river is the most photographed building in Thimphu — the manicured grounds and golden roof contrast spectacularly with the surrounding mountains.",
            "Thimphu weekend market (Friday–Sunday): the largest market in Bhutan, selling hand-woven textiles, dried mushrooms, yak cheese, medicinal herbs, and the entire range of Bhutanese agricultural produce. The vegetable and grain sections are entirely unwashed from the farm — the smell of fresh Bhutanese soil in the market is specific and unforgettable.",
            "Handicraft Bazaar on Norzin Lam: the main shopping street for authentic Bhutanese textiles (woven kira and gho fabric, $50–300 depending on quality and pattern), handmade paper (lokta), traditional masks, and thangka paintings. Everything sold here is made in Bhutan — the government strictly limits import of tourist goods.",
            "Dinner in Thimphu: Folk Heritage Restaurant for traditional Bhutanese cooking in a converted farmhouse setting ($8–15 per person). Try hoentoe (buckwheat dumplings with turnip and cheese filling, specific to western Bhutan) and phaksha paa (pork cooked with dried red chillies).",
          ],
          cost: "$20–40 total (market + shopping + dinner)",
        },
        {
          day: "Day 4",
          title: "Punakha — Most Beautiful Dzong in Bhutan",
          items: [
            "7:00am — Drive Thimphu to Punakha via Dochula Pass (3,150m, 1 hour from Thimphu). On clear mornings the 108 Druk Wangyal Chortens (small white stupas built by the Queen Mother in 2004) are arranged across the pass ridge with the Himalayan mountain range behind — peaks of 6,000–7,000m including Masang Gang, Tsenda Gang, and on exceptional days, the sacred unclimbed peak of Gangkhar Puensum (7,570m, the highest unclimbed mountain in the world).",
            "Punakha Dzong (the Palace of Great Happiness, 1637 CE): built at the confluence of the Pho Chhu (Father River) and Mo Chhu (Mother River), surrounded on three sides by water. The white fortress with gold rooftops and the river background is the most photographed image in Bhutan and among the most beautiful buildings in Asia. The dzong houses the National Museum's textile collection and the embalmed body of Bhutan's unification leader Zhabdrung Ngawang Namgyal.",
            "Walk the 180-meter suspension bridge over the Mo Chhu — the longest pedestrian suspension bridge in Bhutan, strung with prayer flags, swaying above the turquoise river. The view of the dzong from the bridge midpoint is the best perspective in Punakha.",
            "Chimi Lhakhang (Temple of the Divine Madman): a 30-minute walk through rice paddies from Punakha town to this 1499 CE temple dedicated to Drukpa Kunley, the 'Divine Madman' — a Buddhist saint who used humour and transgression to convey dharma. The temple is covered with phallus paintings and carvings (a Bhutanese fertility and protective symbol associated with this particular saint). The monk inside blesses visitors with a wooden phallus relic. Absolutely genuinely Bhutanese.",
            "Lunch in Punakha: local restaurant near the dzong ($4–7 per person for a full Bhutanese meal).",
            "Return to Thimphu or Paro (1.5 hours) for the final night.",
          ],
          cost: "$15–30 total (meals + small temple donations)",
        },
        {
          day: "Day 5",
          title: "Dochula Pass at Dawn + Return Paro + Departure",
          items: [
            "If departing from Paro, drive from Thimphu via Dochula Pass in the early morning (leave by 6am from Thimphu). Dawn at Dochula Pass with mist in the valleys below and the first Himalayan peaks catching light above is a view that closes Bhutan appropriately.",
            "Final stop in Paro: the Paro weekend market (Saturday–Sunday) for last-minute shopping. Handmade lokta paper cards ($1–2), saffron (Bhutanese saffron from Bumthang, $5–10/gram — genuine, expensive, worth buying), dried cordyceps (a prized Himalayan fungal parasite used in traditional medicine, very expensive — verify authenticity with your guide before purchasing).",
            "Pre-departure: leave at least 3 hours before your Paro departure time. The airport check-in process is thorough, the terminal is small, and flights occasionally depart ahead of schedule when weather windows open.",
            "The Paro departure: the plane turns immediately after takeoff, banking sharply between mountain faces. Your final view of Bhutan is the snow-capped peaks receding behind the wing as the aircraft climbs out of the valley — the image that makes the entire trip feel real.",
          ],
          cost: "$10–25 total (market + airport transfers)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Paro Arrival + Cultural Introduction + Farm Dinner",
          items: [
            "Fly into Paro on Druk Air. Mid-range accommodation: Zhiwa Ling Hotel ($100–180/night, traditional Bhutanese architecture with mountain views and a wellness centre) or Naksel Boutique Hotel ($80–140/night, garden property in Paro valley).",
            "Private licensed guide (included in mid-range tour packages) for the full 5 days — a guide who speaks excellent English, has deep knowledge of Bhutanese history and Buddhism, and can arrange special access to active monastery ceremonies when schedules align.",
            "Kyichu Lhakhang with extended guide time: your guide reads the Dzongkha inscriptions above the doorway and explains the tantric iconography of the protective deities on the outer walls.",
            "Paro Dzong late afternoon: the light hits the white walls golden at 4pm. Walk the cantilever bridge and watch the monks begin their evening prayers inside the courtyard.",
            "Farm dinner at a local Bhutanese family home: your tour operator pre-arranges a dinner with a farming family in the Paro valley ($25–35/person, includes cooking demonstration). Ema datshi prepared in front of you, red rice from their own fields, local ara (fermented grain spirit, 30–40% alcohol) in a ceramic cup.",
          ],
          cost: "$200–300 total (hotel + guide + farm dinner)",
        },
        {
          day: "Day 2",
          title: "Tiger's Nest with Expert Guide + Hot Stone Bath",
          items: [
            "7:00am start for Tiger's Nest with your specialist guide. The difference a knowledgeable guide makes at Tiger's Nest is substantial — the guide explains the Eight Manifestations of Guru Rinpoche (each depicted in one of the monastery's eight cave temples), the significance of the tiger (Guru Rinpoche flew to this spot on the back of a tigress who was a transformed consort), and the history of the 1998 fire that destroyed much of the monastery and its subsequent restoration.",
            "Inside the monastery: your guide identifies the 300-year-old thangka paintings that survived the fire (stored in the caves below) and the new murals painted in traditional mineral pigment style since 1998.",
            "Descent and late lunch at the mid-mountain cafeteria (proper lunch arranged, $8–12, better than the standard tea and biscuits).",
            "Late afternoon: Bhutanese hot stone bath (dotsho, $15–25 arranged through your hotel or a nearby farmhouse). River stones heated in a wood fire are placed in a wooden tub filled with cold stream water — the water heats as the stones sizzle. Artemisia herbs are added. One of the most genuinely restorative experiences in travel after a high-altitude hike.",
            "Dinner at your hotel restaurant or a recommended Paro restaurant ($12–20/person).",
          ],
          cost: "$80–130 total (hot stone bath + guide time + meals)",
        },
        {
          day: "Day 3",
          title: "Thimphu Deep Dive + Textile Museum",
          items: [
            "National Textile Museum (free, Thimphu): Bhutan's weaving tradition is among the most complex in the world — the finest kira (women's dress) patterns take 6 months to weave a single panel, with up to 30 weft threads interlocked simultaneously. The museum shows regional weaving traditions from all 20 districts, each with distinctive patterns identifying the weaver's community.",
            "Afternoon archery tournament (free to watch, ask your guide to find where a local match is playing — Thimphu has several archery grounds): Bhutanese traditional archery with bamboo bows at 145-meter range is the national sport and also a social institution. Teams of friends play against each other, dance when they score, chant mock-insults when opponents miss. The tournament is accompanied by ara drinking and snacks.",
            "Trashi Chhoe Dzong guided tour (when government session not in progress): a licensed guide can arrange entry to the dzong grounds for a more detailed architectural tour than the standard public access.",
            "Dinner at The Zone (Thimphu's best mid-range restaurant, $12–20/person): a range of Bhutanese, Indian, and continental dishes in a comfortable setting popular with both expats and locals.",
          ],
          cost: "$50–90 total (museum + dinner + guide day 3)",
        },
        {
          day: "Day 4",
          title: "Punakha + River Rafting on Mo Chhu",
          items: [
            "Dochula Pass sunrise drive (leave Thimphu 6am for the best mountain views before clouds build after 9am).",
            "Punakha Dzong: mid-range visitors can arrange a monk-guided interior tour through their operator ($20–30 extra) — access to the dzong's main assembly hall during morning prayers, the dzong's archives and ceremonial rooms not open to standard visitors.",
            "White water rafting on the Mo Chhu River ($30–50/person, Grade II–III rapids, 1.5 hours, arranged through your tour operator) — the river beside Punakha Dzong, downstream through forested gorge. The final rapid deposits you in a pool directly below the dzong's foundation wall — the view looking up at the fortress from the water is extraordinary.",
            "Chimi Lhakhang (Temple of the Divine Madman) and rice paddy walk.",
            "Return Thimphu for final night dinner: Babesa Village Restaurant (an 18th-century farmhouse, 8km south of Thimphu, $15–25/person for a traditional feast in a historically preserved setting).",
          ],
          cost: "$80–130 total (rafting + monk tour + dinner)",
        },
        {
          day: "Day 5",
          title: "Dochula Dawn + Departure",
          items: [
            "Dochula Pass at dawn for the final Himalayan panorama — this time with full knowledge of the mountains. Your guide names each peak: Masang Gang (7,165m), Tsenda Gang (6,960m), Table Mountain (6,831m), and on a perfect morning, Gangkhar Puensum (7,570m), the world's highest unclimbed mountain, sacred and protected by Bhutanese law from climbing.",
            "108 Druk Wangyal Chortens with morning light and almost no other tourists at 6:30am — the prayer flags snap in the wind and the mountains are crisp. This is one of the great sunrise viewpoints in the Himalayas.",
            "Return Paro: final shopping, farewell tea with your guide.",
            "Private transfer to PBH airport in the hotel vehicle. Check in with time to spare.",
          ],
          cost: "$40–80 total (Dochula + shopping + departure transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$800–2000+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive at Amankora Paro + Private Temple Tour",
          items: [
            "Amankora Paro ($700–1,200/night) — the definitive luxury property in Bhutan, a cluster of traditional stone lodges in a blue pine forest above Paro with mountain views. Or Six Senses Paro ($600–1,100/night), designed as a traditional village inside a working farm. Both are among the finest resort experiences in Asia.",
            "Private archaeological specialist guide for the full stay (arranged through Amankora or Six Senses, $80–150/day for an English-speaking scholar-guide with academic credentials in Bhutanese art history).",
            "Kyichu Lhakhang with private scholar guide: the guide reads the 7th-century terma (hidden scripture) revealed in this temple in the 12th century and explains how this specific monastery connects the Tibetan and Bhutanese religious traditions.",
            "Paro Dzong at sunset with the dzong lit golden — your guide has arranged a brief meeting with the Dzongkhag administration officer who can explain the current administrative functions of the dzong (this kind of access is available through luxury operators in Bhutan in ways it is not elsewhere).",
            "Welcome dinner at Amankora: 4-course Bhutanese tasting menu prepared by the resort chef with ingredients from their farm ($60–90/person, included in package at most luxury properties).",
          ],
          cost: "$900–1,400 total (hotel + specialist guide + dinner)",
        },
        {
          day: "Day 2",
          title: "Private Tiger's Nest Dawn + Six Senses Wellness",
          items: [
            "6:00am — Private Tiger's Nest with specialist guide and just your group. The trail at 6am is in pine-scented darkness, lantern-lit by the guide, arriving at the monastery when the monks begin their morning prayers — chanting audible across the gorge. The monastery is effectively private for your group at this hour.",
            "Inside the monastery: your guide can arrange a brief audience with one of the monks in residence who will explain the Guru Rinpoche meditation practice associated with this specific cave temple.",
            "Return by 11am. Full afternoon at Six Senses spa: Bhutanese dotsho hot stone bath, a 90-minute Bhutanese healing massage using local medicinal herbs, and a guided meditation session in the spa's dedicated meditation room ($200–350 for a full spa afternoon).",
            "Evening: private farm dinner at a historic Bhutanese farmhouse arranged by your hotel ($100–150 for a private family dinner with cultural performance — atsara clown ceremony, folk songs).",
          ],
          cost: "$500–900 total (spa + private monastery experience + farm dinner)",
        },
        {
          day: "Day 3",
          title: "Private Thimphu + Royal Textile Academy",
          items: [
            "Royal Textile Academy (Thimphu): entry arranged through your luxury operator for a curator-led tour of the collection ($50–80 for a private curator tour). The finest surviving examples of Bhutanese weaving tradition, including royal kira patterns woven for the current queen.",
            "Private meeting with a master weaver at their home studio: watching a master weavers' hands moving at impossible speed through the warp threads of a backstrap loom, producing intricate geometric patterns from memory, is one of the most remarkable craft demonstrations in Asia.",
            "Lunch at the Taj Tashi (Thimphu's only 5-star hotel) restaurant ($25–40/person for an excellent international menu).",
            "Private archery demonstration with a national team coach ($80–120 for a private session — you try traditional Bhutanese archery at the 145-meter distance, with coaching).",
            "Evening: exclusive dinner at the Royal Guest House (by special arrangement through luxury operators — this is one of Bhutan's most celebrated exclusive experiences, a private dinner in one of the historical reception rooms of the royal estate).",
          ],
          cost: "$400–700 total (museum + private weaver + archery + exclusive dinner)",
        },
        {
          day: "Day 4",
          title: "Punakha by Private Helicopter + Dzong Interior",
          items: [
            "Private helicopter from Paro to Punakha ($1,200–1,800 for the aircraft, split multiple ways) — 15 minutes over mountain ridges versus 2.5 hours by road. The helicopter landing zone is arranged by your operator.",
            "Punakha Dzong: luxury operators can arrange access to the dzong's restricted interior sections including the Machen Lhakhang (the oldest part of the dzong, 1637 CE) and the archive room with centuries-old manuscripts. This access is genuinely exclusive — it requires advance arrangement through the Dzongkhag administration.",
            "Luxury picnic at Chimi Lhakhang (your hotel prepares a hamper with champagne, Bhutanese cheeses, organic produce from their farm): eat in the rice paddies below the temple with mountain views.",
            "Return by road to Paro (the scenic drive through the Punakha valley and over Dochula Pass is worth experiencing at least once on the ground).",
            "Final dinner: Amankora or Six Senses chef's table experience.",
          ],
          cost: "$1,000–1,800 total (helicopter + dzong private access + picnic + dinner)",
        },
        {
          day: "Day 5",
          title: "Dochula at Dawn + Private Farewell",
          items: [
            "Private car to Dochula Pass before sunrise. The luxury version: your hotel prepares a dawn picnic basket (thermos of butter tea, fresh pastries, yak cheese) for the pass. You and your guide alone at the 108 chortens as the Himalayas light up, with no other visitors.",
            "Return Paro for late breakfast. Final morning in the hotel spa or garden.",
            "Private airport transfer, premium check-in assistance arranged by your hotel. Amankora and Six Senses both have hotel representatives at PBH who guide you through check-in.",
            "Farewell gift: both Amankora and Six Senses provide bespoke departure gifts — typically lokta paper items, organic Bhutanese tea, or small ritual objects blessed by a local lama.",
          ],
          cost: "$300–600 total (Dochula picnic + spa + departure gifts + transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget (Indian)", accommodation: "$30–50", food: "$8–15", transport: "$10–20", activities: "$5–15", total: "$250+/day (incl. Rs 1,200 SDF)" },
    { tier: "✨ Mid-Range", accommodation: "$100–200", food: "$25–50", transport: "$30–60", activities: "$30–60", total: "$350–600/day (incl. SDF)" },
    { tier: "💎 Luxury", accommodation: "$500–1,200", food: "$80–200", transport: "$100–400", activities: "$150–400", total: "$800–2,000+/day (incl. SDF)" },
  ],
  mistakes: [
    {
      icon: "🥾",
      title: "Attempting Tiger's Nest Without Fitness Preparation",
      desc: "The Tiger's Nest hike is 5.5km round trip with 800 metres of elevation gain at altitude (starting at 2,200m). This is a genuine mountain hike — not a stroll. Visitors who are unfit or unaccustomed to altitude find the ascent difficult to dangerous. Prepare: spend 2–3 weeks walking uphill for 30–45 minutes daily before your trip. Acclimatise in Paro for a half-day before attempting the hike. Start at 7am before the heat builds. Hire a horse for the steepest section ($5–10 one way) if knees are an issue. The hike is completely worth the effort — prepare properly.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌧️",
      title: "Visiting in June–July Monsoon Season",
      desc: "The June–August monsoon brings daily heavy rain to Bhutan. Tiger's Nest monastery sits in clouds for 8–10 hours a day during monsoon — you may hike 2 hours to find a grey wall of mist where the monastery should be. The trails become muddy and slippery, leeches are active, and mountain views at Dochula Pass are typically blocked. The best months are March–May (spring, rhododendrons in bloom, clear mountain views) and September–November (post-monsoon clarity, harvest season). December–February works too but is cold at altitude.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "📅",
      title: "Booking Too Late — Bhutan Requires Advance Planning",
      desc: "Unlike most tourist destinations where you can book a week ahead, Bhutan requires advance coordination. Your licensed tour operator needs to file your visa application (international visitors) or register your SDF payment (Indian visitors) with the Tourism Council. Indian visitors: book at least 2–3 weeks ahead. International visitors: book at least 4–6 weeks ahead for visa processing. Peak seasons (October festival period, spring bloom) require 3+ months advance booking. Spontaneous Bhutan trips are not possible.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "⏰",
      title: "Tiger's Nest at 7am — Reach the Viewpoint Before the Mist",
      desc: "The mid-mountain viewpoint (where the full Tiger's Nest photograph is taken across the gorge) is at its best from 8:00–9:30am, when the morning sun catches the white monastery walls and the valley below is still in shadow. By 10am clouds begin building from the valley floor and often obscure the monastery by noon. Start hiking at 7am, reach the viewpoint by 8:30–9am, continue to the monastery (add 30 more minutes), exit by 11am. This schedule captures the best light and avoids both pre-dawn cold and midday heat.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Punakha Dzong at Sunrise — River Mist and Monks",
      desc: "Punakha Dzong is most beautiful in the first hour of light: the river mist rises from the confluence of the Pho Chhu and Mo Chhu, the golden rooftops catch the early sun, and the monks walk across the courtyard for morning prayers. Arrive by 7am (a 6am departure from Thimphu gets you there in time). The 180-meter suspension bridge at dawn, with the dzong framed upstream and prayer flags strung bank-to-bank, is one of the great photographs in the Himalayas.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "📸",
      title: "Prayer Flags Are Photography Gold — Buy from Source",
      desc: "Bhutan is the most prayer-flag-dense country in the world — every mountain pass, bridge, dzong, and cremation site is layered with lungta (horizontal flags) and darchog (vertical poles). The flags are printed with Buddhist prayers; the wind carries the prayers to all sentient beings. If you want to hang flags (a common traveller practice), buy them from a monastery shop or local market rather than a tourist stall — the monastery-produced flags are printed on proper cotton with correct prayers, cost $1–3 per set, and the money goes directly to the monastery.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "How much cheaper is Bhutan for Indian passport holders vs. international visitors?",
      a: "Significantly. Indian citizens pay Rs 1,200/person/day SDF (approximately $14–15/day at current exchange rates) and do not need a visa. International visitors pay $100/day SDF (as of September 2024, reduced from $250) plus a $40 visa processing fee. For a 5-day trip: an Indian visitor pays approximately Rs 6,000 (~$72) in SDF; an international visitor pays $540 in SDF alone. Accommodation and tour costs are the same for everyone, but the SDF difference makes Bhutan significantly more accessible for Indian travellers.",
    },
    {
      q: "How fit do you need to be for the Tiger's Nest hike?",
      a: "The Tiger's Nest hike requires moderate fitness — comparable to a 3-hour uphill walk on a maintained trail. The 800m elevation gain at altitude (starting at 2,200m) makes it harder than equivalent hikes at sea level. Most visitors in reasonable walking fitness complete it without major difficulty if they go slowly and take breaks. Those with cardiovascular conditions, severe arthritis, or who are very unfit should consult a doctor before attempting. Horses are available for the steepest section ($5–10 one way). The hike is absolutely worth it.",
    },
    {
      q: "What is the best time to visit Bhutan?",
      a: "March–May (spring) and September–November (autumn) are the two best seasons. Spring brings rhododendron forests in bloom (Bhutan has 46 species, including the national flower Meconopsis horridula), warm days, and excellent visibility. October is peak season — crystal-clear mountain views, harvest festivals, and Thimphu's Tshechu festival. November–February is cold but beautiful with snow on the high passes. Avoid June–August (monsoon — Tiger's Nest frequently obscured, trails muddy, leeches active).",
    },
    {
      q: "Is Bhutan actually carbon neutral?",
      a: "Bhutan is the world's only carbon-negative country — meaning it absorbs more carbon than it produces. The country absorbs approximately 9.4 million tonnes of CO2 annually (mainly through its 71% forest coverage, constitutionally mandated at 60% minimum) while producing only 1.5 million tonnes. Hydropower generates 99.9% of Bhutan's electricity, with surplus exported to India. The constitution also mandates that at least 60% of Bhutan's land remains forested in perpetuity. These commitments are legally binding — not aspirational targets.",
    },
    {
      q: "Is Bhutan worth the cost?",
      a: "For international visitors paying $100/day SDF plus tour costs ($200–400/day all-inclusive), Bhutan is genuinely expensive. The question is whether the experience justifies it. Bhutan offers something that no other destination provides: a functioning Buddhist kingdom where traditional culture is not performed for tourists but lived by the population, Himalayan landscapes of extraordinary beauty, monuments (dzongs, lhakhangs) built to last millennia, and the Tiger's Nest — one of the world's great hikes to one of the world's great buildings. For Indian visitors at Rs 1,200/day SDF, the calculus is entirely different — Bhutan is exceptional value for one of the world's most remarkable travel experiences.",
    },
  ],
  combineWith: ["darjeeling-3-days", "sikkim-4-days", "nepal-kathmandu-4-days"],
  relatedSlugs: ["bagan-4-days", "angkor-wat-4-days", "ladakh-5-days", "spiti-valley-5-days"],
  galleryQuery: "bhutan tiger nest paro dzong punakha prayer flags himalaya",
};

export const metadata: Metadata = {
  title: "Bhutan in 5 Days: Tiger's Nest, Punakha Dzong & Himalayan Kingdom (2026)",
  description: "5 complete Bhutan itineraries with Tiger's Nest hike secrets, Indian vs international SDF costs, Punakha sunrise tips, and everything you need to plan the Himalayan Kingdom.",
  keywords: ["bhutan itinerary 5 days", "tiger's nest bhutan hike", "bhutan travel guide 2026", "bhutan sdf cost indian passport", "punakha dzong", "paro taktsang", "bhutan travel tips"],
  openGraph: {
    title: "Bhutan in 5 Days: Tiger's Nest, Punakha & Himalayan Kingdom (2026)",
    description: "Tiger's Nest sunrise secrets, Punakha Dzong at dawn, Indian SDF costs, and complete planning guide for the Himalayan Kingdom.",
    images: [{ url: "https://images.unsplash.com/photo-1559564927-f35eae3e4a23?w=1200&q=80", width: 1200, height: 630, alt: "Tiger's Nest Monastery Bhutan cliffside Himalayas" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Bhutan in 5 Days (2026)", description: "Tiger's Nest, Punakha Dzong, Indian vs international costs — complete Bhutan guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/bhutan-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bhutan in 5 Days: Tiger's Nest, Punakha Dzong & Himalayan Kingdom (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1559564927-f35eae3e4a23?w=1200&q=80",
      description: "5 complete Bhutan itineraries with Tiger's Nest hike secrets, Indian vs international SDF costs, Punakha sunrise tips, and complete planning guide.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Bhutan 5 Days", item: "https://www.incredibleitinerary.com/blog/bhutan-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bhutan",
      geo: { "@type": "GeoCoordinates", latitude: 27.5142, longitude: 90.4336 },
      description: "Bhutan is a landlocked Buddhist kingdom in the Himalayas known for Tiger's Nest Monastery, ancient dzong fortresses, and its Gross National Happiness philosophy of development.",
      touristType: ["Cultural tourists", "Adventure tourists", "Photography enthusiasts", "Spiritual seekers", "Himalayan trekkers"],
    },
  ],
};

export default function BhutanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BhutanClient />
    </>
  );
}
