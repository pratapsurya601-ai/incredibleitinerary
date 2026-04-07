import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Beirut",
  country: "Lebanon",
  countryFlag: "🇱🇧",
  slug: "beirut-4-days",
  heroQuery: "beirut corniche lebanon mediterranean sea city skyline",
  heroAlt: "Beirut Corniche waterfront promenade at sunset with the Mediterranean Sea and city skyline",
  category: "Middle East",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Beirut is the most contradictory city in the Middle East — a place where French pastry shops sit next to Ottoman mosques, where bullet-riddled buildings stand next to glass towers, and where the Mediterranean party culture is as fierce and resilient as the city itself. Beirut has been rebuilt seven times in its history, earning it the nickname 'The Phoenix.' The mezze culture alone — 30 small dishes arriving in waves, each more complex than the last — justifies the trip. The Jeita Grotto is one of the most spectacular cave systems on earth. Byblos, a 30-minute drive north, is one of the world's continuously inhabited cities. Four days gives you the city's duality, its history, and its extraordinary food.",
  stats: { duration: "4 Days", budgetFrom: "$60", bestMonths: "Apr–Jun or Sep–Oct", airport: "BEY" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Gemmayzeh & Pigeon Rocks" },
    { id: "day2", emoji: "📅", label: "Day 2 — National Museum & Corniche" },
    { id: "day3", emoji: "📅", label: "Day 3 — Jeita Grotto & Byblos" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa on Arrival or e-Visa",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Visa on Arrival (1 month, renewable) or e-Visa"],
        ["Processing", "e-Visa: 3–5 business days online; VoA: at BEY airport"],
        ["Fee", "$17 (e-Visa) or $17 (Visa on Arrival)"],
        ["Validity", "1 month, single entry"],
        ["Apply at", "evisa.gov.lb or on arrival at Beirut Rafic Hariri Airport"],
        ["Documents", "Return ticket, hotel booking, sufficient funds proof"],
        ["Notes", "Israeli passport stamps cause entry denial. If you have an Israeli stamp, apply for a new passport before travelling. E-visa is faster and recommended."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa on Arrival",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa on Arrival at Beirut airport"],
        ["Processing", "10–20 minutes at the airport desk"],
        ["Fee", "$17–34 depending on nationality"],
        ["Validity", "1 month, extendable at General Security office"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Israeli Stamps", "Entry denied if Israeli stamps present in passport"],
        ["Notes", "The VoA process at BEY is quick and straightforward. Have $20 cash ready. Some EU nationals receive free entry — check with Lebanese embassy."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$60–90/day",
      days: [
        {
          day: "Day 1",
          title: "Gemmayzeh, Mar Mikhael & Pigeon Rocks",
          items: [
            "10:00 — Start in Gemmayzeh: the most photogenic neighbourhood in Beirut — Ottoman-era buildings with triple-arched windows, French balconies, and street art that documents Lebanon's cyclical history; free to walk, best with a coffee from one of the Lebanese-style cafés at $1.50–2",
            "11:30 — Walk through Mar Mikhael: the artists' and musicians' district adjacent to Gemmayzeh has gallery spaces (most free) and the famous Armenia Street street art corridor; this is where Beirut's creative class rebuilt after 2006 and again after the 2020 port explosion",
            "13:00 — Lunch at a mezze restaurant in Gemmayzeh ($12–18 per person): order the classic fattoush, hummus, labneh (strained yoghurt with olive oil), mutabbel, and kibbeh nayeh (raw spiced lamb — a Lebanese signature dish); Lebanese bread is always free",
            "15:00 — Walk the Hamra neighbourhood: Beirut's intellectual and student quarter has independent bookshops, cheap shawarma ($2–3), and the legendary Bliss Street café culture dating to the American University of Beirut era in the 1960s",
            "17:30 — Raouche Pigeon Rocks: the dramatic sea stacks rising from the Mediterranean are free to view from the Corniche cliff; take the elevator down to sea level for $1 for a closer perspective at sunset",
            "19:30 — Dinner in Gemmayze: a full mezze spread with drinks at a local restaurant costs $15–22 per person; the Almaza beer (Lebanon's national lager since 1933) is $2.50 a bottle",
          ],
          cost: "$35–50 (meals, transport, elevator, coffee)",
        },
        {
          day: "Day 2",
          title: "National Museum, Downtown & Corniche",
          items: [
            "09:30 — National Museum of Beirut ($5 entry): one of the finest archaeological museums in the Middle East — Phoenician artifacts, Bronze Age sarcophagi, and Roman mosaics; the museum was positioned exactly on the 1975–1990 Green Line dividing East and West Beirut and was restored after the Civil War ended",
            "12:00 — Downtown Beirut reconstruction walk: the post-war rebuilding of central Beirut by Solidere is controversial but spectacular — Roman baths, a Phoenician harbour, Ottoman mosques, and 21st-century glass towers coexist in the same 2km radius; all free to walk",
            "13:30 — Lunch at a downtown cafeteria-style Lebanese grill ($8–12): choose by weight — grilled chicken shish taouk, kafta, and tabbouleh by the 100g; the Arabic bread and garlic sauce (toum) are complimentary",
            "15:30 — Mohammad Al-Amin Mosque and Saint George Maronite Cathedral stand literally 50 metres apart at Martyrs' Square — the coexistence is architectural Lebanon in miniature; both are free to enter with appropriate dress",
            "17:00 — Corniche evening walk: Beirut's seafront promenade is 4.8km and completely free; the tradition of fishermen casting lines from the railing while families take evening strolls is unchanged for generations",
            "20:00 — Drinks in Hamra: a full night out in Beirut's affordable bars starts at $15–20 including 2–3 cocktails; the bar scene rebuilt dramatically post-2020 with intense creative energy",
          ],
          cost: "$30–45 (museum, meals, transport, drinks)",
        },
        {
          day: "Day 3",
          title: "Jeita Grotto Day Trip",
          items: [
            "09:00 — Hire a service taxi (shared taxi, $4–6 to Jeita from Dora) or join a day tour ($25 including transport and entry) to Jeita Grotto, 18km north of Beirut",
            "10:00 — Jeita Grotto ($17 entry): the 9km cave system was a 2011 New Seven Wonders of Nature finalist; the upper gallery is explored on foot through dramatic stalactite chambers, while the lower gallery is accessed by boat on an underground lake — the only underground boat ride in the Middle East",
            "12:30 — Return to Jounieh for lunch: the coastal town 20 minutes from Jeita has fresh mezze restaurants on the water for $12–16/pp; the grilled fish with garlic lemon sauce and tabbouleh is the essential seaside lunch",
            "15:00 — Optional Jounieh cable car up the mountain to Our Lady of Lebanon ($7 each way) — the 1950s aerial tramway climbs 650 vertical metres to the famous white Virgin Mary statue with panoramic views of the Mediterranean coast",
            "19:00 — Return to Beirut; dinner in Hamra at a traditional home-cooking restaurant ($10–14/pp) — the daily specials boards in Hamra change each morning based on what was at the souq",
          ],
          cost: "$50–65 (Jeita, transport, lunch, cable car, dinner)",
        },
        {
          day: "Day 4",
          title: "Byblos Day Trip & Farewell Mezze",
          items: [
            "08:30 — Service taxi to Byblos (Jbeil), 37km north of Beirut ($4–6, 45 minutes): one of the oldest continuously inhabited cities on earth — occupied for 7,000 years; the Phoenicians are credited with creating the first alphabetic writing system here around 1050 BCE",
            "09:30 — Byblos archaeological site ($8 entry): Phoenician temples, a Persian fortress, a Crusader castle, and Roman colonnades all occupy the same hillside overlooking the Mediterranean — the most concentrated archaeological site in Lebanon",
            "12:00 — Lunch in Byblos old port: the restored Ottoman-era fishing harbour has seafood restaurants with tables literally on the water ($15–22/pp); the whole grilled sea bass with garlic and the mezze sampler are the local specialities",
            "15:00 — Byblos old souk: the covered market sells cedar wood products (Lebanon's national symbol), local pottery, and hand-pressed olive oils from the surrounding groves; cedar honey and thyme-infused olive oil make excellent gifts at $5–12",
            "18:00 — Return to Beirut for the farewell mezze dinner: a full Lebanese mezze is 20–35 small dishes arriving over 2 hours; the best value is at local neighbourhood restaurants in Mar Mikhael or Bourj Hammoud for $15–22 per person with unlimited bread and olives",
          ],
          cost: "$40–60 (transport, Byblos entry, meals, souvenirs)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$150–250/day",
      days: [
        {
          day: "Day 1",
          title: "Boutique Beirut & Gemmayze Evening",
          items: [
            "11:00 — Check into a boutique hotel in Gemmayze or Achrafieh ($120–180/night) — Albergo Hotel, Port View Hotel, or the newly renovated Mayflower Hotel in Hamra offer character and location at mid-range prices",
            "12:30 — Lunch at Em Sherif ($35–50/pp) — widely considered the finest traditional Lebanese restaurant in Beirut; the kitchen produces 50-dish spreads that represent the breadth of Lebanese cuisine from the mountains to the coast",
            "15:00 — Sursock Museum ($5 entry): Beirut's contemporary art museum in a 1912 Ottoman villa — the collection documents Lebanese and Arab contemporary art and the museum's own story of being damaged in the 2020 Beirut port explosion and rebuilt",
            "18:30 — Cocktails at Ferdinand or Internazionale bar in Mar Mikhael ($10–15/cocktail) — these are the neighbourhood bars that came to define Beirut's nightlife revival after successive crises",
            "21:00 — Late dinner at Liza Beirut ($40–55/pp): French-Lebanese fusion in a beautifully restored Ottoman house in Achrafieh; the menu blends French technique with Lebanese ingredients — the kibbeh with truffle oil and the fresh herb-crusted lamb are signatures",
          ],
          cost: "$200–260 (hotel, meals, cocktails, museum)",
        },
        {
          day: "Day 2",
          title: "National Museum, Ruins & Corniche Dining",
          items: [
            "09:30 — National Museum of Beirut guided tour ($5 + $15 guide) — a knowledgeable guide transforms the collection; the story of the museum staff who bricked up the artifacts when the Civil War began in 1975 and reopened them in 1997 is remarkable",
            "12:00 — Roman Baths of Berytus (Downtown, free) and Imam Ali Mosque interior visit (modest dress required) — the city-within-a-city rebuilt by Solidere post-war includes genuinely ancient ruins beneath glass floors",
            "14:00 — Lunch at Mayrig ($30–40/pp) in Bourj Hammoud — Armenian-Lebanese restaurant in Beirut's Armenian quarter; the manti (tiny meat dumplings) and the mujaddara hamra (red lentil bulgur) reflect Beirut's multicultural culinary identity",
            "17:30 — Corniche sunset walk followed by dinner at Babel Bar-Restaurant ($40–55/pp) overlooking the Mediterranean — fresh mezze and grilled seafood with the sea breeze is the classic Beirut evening experience",
          ],
          cost: "$180–240 (hotel, guided tour, meals, transport)",
        },
        {
          day: "Day 3",
          title: "Jeita Grotto & Byblos in One Day",
          items: [
            "08:00 — Private car hire for the day ($80–100, arrange through hotel): drive north to Jeita Grotto first (arrives before tour buses) then continue to Byblos for the afternoon",
            "09:00 — Jeita Grotto ($17): private access feels more atmospheric than the tour bus crowds; the lower grotto boat ride is most magical in the morning when the light from the upper cave entrance creates blue-green reflections",
            "12:30 — Byblos old port lunch at Bab el Mina restaurant ($30–40/pp): tableside mezze preparation and the afternoon catch grilled over charcoal; the seafood soup (shorbet samak) with saffron and coriander is their signature",
            "15:00 — Byblos archaeological site ($8) with more time than a budget day allows; the Crusader castle is worth climbing for the coastal panorama north to the mountains",
            "20:00 — Dinner back in Beirut at Tawlet ($35–45/pp): Souk el Tayeb's restaurant where Lebanese village women cook their regional specialities in a collective kitchen — the menu changes daily based on who is cooking and which village they represent",
          ],
          cost: "$200–270 (private car, Jeita, Byblos, meals)",
        },
        {
          day: "Day 4",
          title: "Chouf Cedar Reserve & Deir el Qamar",
          items: [
            "08:00 — Day trip to the Chouf Mountains (1.5 hours south by private car or hired taxi): the Chouf Cedar Reserve is the largest protected area in Lebanon and contains some of the last original cedars — the same trees that built Solomon's Temple in Jerusalem",
            "10:30 — Deir el Qamar village: the 17th-century Druze capital of Mount Lebanon has a perfectly preserved Silk Road-era town with the Fakhreddine Palace, a 1483 mosque-turned-church, and a spring-fed communal fountain still in use",
            "13:30 — Lunch in Beiteddine village near the Beiteddine Palace ($20–28/pp): the mountain cuisine features dishes not found in Beirut — kishk soup (fermented wheat and yoghurt), kibbeh arnabiyeh (lamb in tamarind sauce), and mountain honey desserts",
            "17:00 — Return to Beirut for a final dinner and goodbye drinks in the Gemmayzeh bar district",
          ],
          cost: "$180–240 (transport, reserve entry, palace, meals)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$400–750/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Rooftop Beirut & Private Dinner",
          items: [
            "12:00 — Check into Four Seasons Beirut ($400–700/night) or Kempinski Summerland Beirut ($350–550/night) — both offer seafront locations with pools, spas, and the highest service standards in Lebanon",
            "15:00 — Private walking tour of Gemmayzeh and Downtown Beirut with a certified historian and architect ($150–200, 3 hours): the architectural narrative of Beirut's layers — Phoenician, Roman, Ottoman, French Mandate, modernist, and post-war — told by someone who lived through the reconstruction",
            "19:00 — Aperitifs on the rooftop terrace of the hotel or at Iris Beirut rooftop bar (Four Seasons, cocktails $18–25) — the views over the Mediterranean and the mountains simultaneously visible from Beirut's hilltop position are unique in the Middle East",
            "21:00 — Private dinner at Em Sherif Chef's Table ($120–160/pp including wine): the most theatrical dining experience in Beirut; the kitchen produces a full mezze sequence transitioning into hot mains and ending with Lebanese pastries and two rounds of coffee with cardamom",
          ],
          cost: "$700–950 (hotel, private tour, dinner, cocktails)",
        },
        {
          day: "Day 2",
          title: "National Museum Private Tour & Sursock Palace",
          items: [
            "09:00 — Private National Museum tour with the museum curator ($200 for the group, arranged through hotel concierge) — exclusive access before public opening including the storage rooms, restoration workshop, and the curator's personal account of hiding the collection during the Civil War",
            "12:00 — Private Sursock Palace visit ($100 arrangement fee through hotel): the 19th-century palace of the Sursock family — one of Beirut's great Greek Orthodox dynasties — is open to private cultural visits by arrangement; the reception rooms are extraordinary",
            "14:00 — Lunch at Babel Bar-Restaurant private terrace ($80–100/pp with curated Lebanese wine pairing): the sommelier presents Lebanon's extraordinary wine region — the Bekaa Valley produces Château Musar, one of the world's most celebrated wines",
            "18:00 — Helicopter scenic tour over Beirut coastline, the Jeita valley, and the Cedars of Lebanon mountains ($400–600, 45 minutes, arranged through hotel): the Lebanese coast from the air reveals the Phoenician harbour foundations still visible underwater at Byblos",
            "21:00 — Late dinner at Eau de Vie at Phoenicia Hotel ($100–130/pp): the most elegant formal dining in Beirut with an extensive Bekaa Valley wine list",
          ],
          cost: "$900–1,200 (hotel, private tours, helicopter, dining)",
        },
        {
          day: "Day 3",
          title: "Jeita Grotto VIP & Byblos by Private Yacht",
          items: [
            "08:00 — Private car with guide to Jeita Grotto (VIP opening access before public hours, arranged through hotel, $50 premium): the caves are most atmospheric in early morning silence before tour groups arrive",
            "11:00 — Continue north to Byblos and board a private yacht for a 3-hour Mediterranean charter ($600–800, up to 8 guests): swim off the ancient Phoenician harbour, snorkel the clear north Lebanon waters, and have lunch served on deck by the crew",
            "16:00 — Walk the Byblos archaeological site and old souk for private shopping with a cultural guide ($80/2 hours) — the guide can facilitate access to private collectors selling Phoenician glass and Byzantine mosaics",
            "20:00 — Farewell dinner at Le Gray Hotel rooftop in Downtown Beirut ($80–110/pp): the 12th-floor restaurant overlooks the Mohammad Al-Amin Mosque and offers the most dramatic night view of Beirut's architectural contradictions",
          ],
          cost: "$800–1,100 (hotel, private car, yacht, dinners)",
        },
        {
          day: "Day 4",
          title: "Bekaa Valley Wine & Cedars of Lebanon",
          items: [
            "07:30 — Private car to the Bekaa Valley (1.5 hours) for a morning at Château Ksara — Lebanon's oldest winery (founded 1857 by Jesuits): private cellar tour through the 2km of Roman-era caves, breakfast with wine tasting of current and library vintages ($100/person including breakfast)",
            "11:30 — Drive north to the Cedars of Lebanon at Bsharri (2 hours): the grove of 375 ancient cedars — some over 1,000 years old — is Lebanon's most sacred natural site and national symbol; the drive through Qadisha Valley is one of the most dramatic in the Middle East",
            "14:00 — Lunch at Bsharri village ($25–35/pp) in a mountain restaurant: the high-altitude cuisine features game birds, mountain honey, truffles from the Cedars plateau, and fresh mountain spring water",
            "18:00 — Return to Beirut for spa evening at Four Seasons ($200 signature treatment) and a quiet final dinner at the hotel restaurant",
          ],
          cost: "$700–900 (private car, winery, cedar grove, spa, dinner)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$25–45 (guesthouse in Hamra or Gemmayzeh)",
      food: "$15–25 (mezze spots, shawarma, falafel)",
      transport: "$5–10 (service taxis, walking)",
      activities: "$10–20 (museums, Jeita, Byblos)",
      total: "$60–100/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$120–180 (boutique hotel in Achrafieh)",
      food: "$50–80 (restaurants + Lebanese wine)",
      transport: "$20–40 (Uber, private car for day trips)",
      activities: "$40–70 (guided tours, cable car, reserve)",
      total: "$150–250/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–700 (Four Seasons or Phoenicia)",
      food: "$150–250 (fine dining + Bekaa wines)",
      transport: "$100–300 (private car, helicopter, yacht)",
      activities: "$200–400 (private tours, VIP access)",
      total: "$400–750+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "$15–25 (hostel dorm, Hamra area)",
      food: "$8–15 (falafel, hummus plates, street food)",
      transport: "$3–6 (service taxis, walking Old Beirut)",
      activities: "$5–10 (free mosques, walking tours, walls)",
      total: "$35–55/day",
    },
    {
      tier: "🍷 Foodie & Culture",
      accommodation: "$150–250 (Albergo or similar)",
      food: "$80–130 (Em Sherif, Tawlet, wine dinners)",
      transport: "$30–60 (private car for Bekaa Valley)",
      activities: "$50–100 (Sursock Museum, archaeological sites)",
      total: "$200–380/day",
    },
  ],
  mistakes: [
    {
      icon: "✈️",
      title: "Travelling with Israeli passport stamps",
      desc: "Lebanon and Israel are technically still at war. Any Israeli entry or exit stamp in your passport will result in denial of entry to Lebanon. If your passport has visited Israel, you must obtain a new blank passport before applying for a Lebanese visa. This applies to all nationalities without exception.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💵",
      title: "Not carrying enough US dollars in cash",
      desc: "Lebanon's banking crisis since 2019 means ATMs are unreliable and credit cards are not universally accepted. The Lebanese lira exists but prices are quoted and preferred in USD. Always carry $100–200 cash in small denomination USD bills. Change at money exchange offices (sarrafeen) on the street get better rates than banks.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🕌",
      title: "Missing the mezze ritual by eating fast food",
      desc: "A Lebanese mezze is not a starter — it is the entire meal, a 90-minute social ritual of 20–40 small dishes arriving continuously. Ordering a single main course is missing the entire point of Lebanese cuisine. Order mezze for lunch or dinner at least twice, ask for the full spread, and insist on the slow meal pace that defines Lebanese hospitality.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📅",
      title: "Only visiting Beirut without day trips",
      desc: "Jeita Grotto, Byblos, the Chouf Cedars, the Bekaa Valley wineries, and the Qadisha Valley are all within 2 hours of Beirut and represent very different aspects of Lebanon. A trip that spends all 4 days in the capital misses the extraordinary Lebanese landscape and the cultural diversity of the mountain villages.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌃",
      title: "Underestimating Beirut's nightlife stamina",
      desc: "Beirut is one of the world's great night cities — restaurants don't fill until 10pm, bars peak at midnight, and clubs run until dawn. If you go out at 8pm expecting activity, most places will be quiet. The Lebanese night schedule runs 2–3 hours later than Europe. Adjust your morning start times accordingly — Gemmayzeh at 11am is far more interesting than at 8am.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Jeita Grotto requires advance booking in peak season",
      desc: "Jeita Grotto receives up to 3,000 visitors a day in summer and can sell out. Book tickets online at jeitagrotto.com at least 3 days ahead during July and August. The caves maintain a constant 16°C temperature — bring a light jacket regardless of outside temperature. Book day trips and tours at https://www.getyourguide.com/s/?q=Beirut+Lebanon&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍋",
      title: "Lebanon produces extraordinary wine — drink it",
      desc: "The Bekaa Valley has been producing wine since the Phoenicians. Château Musar, Château Ksara, and Massaya produce internationally celebrated bottles that cost $10–20 at restaurants — far less than the same wine costs abroad. Order a Lebanese red with your mezze rather than imported wine. The Cinsault and Cabernet Sauvignon blends from high altitude Bekaa vineyards are exceptional.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏙️",
      title: "The bullet holes are part of the story — engage with it",
      desc: "Beirut's bullet-scarred buildings and half-demolished towers are not blight — they are living architecture that tells the Civil War story more powerfully than any museum. Ask your guesthouse host about their neighbourhood's history. The people who rebuilt Beirut after 2020's port explosion with spontaneous volunteer work are the same spirit that rebuilt it after every previous crisis.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌅",
      title: "Sunrise from the Corniche beats every viewpoint",
      desc: "Beirut's Corniche promenade faces west over the Mediterranean and north toward the Lebanon Mountains. At dawn, the light hits both the sea and the snow-capped mountains simultaneously — a combination virtually unique among Mediterranean cities. Bring a coffee from a 24-hour café (Beirut runs all night) and walk the 4.8km promenade as the fishermen set up for the morning.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Beirut safe to visit in 2026?",
      a: "Beirut's tourist areas — Gemmayzeh, Mar Mikhael, Hamra, Achrafieh, and Downtown — are generally safe for tourists. The 2020 port explosion damaged parts of the city centre but reconstruction is ongoing. Check your government's travel advisory before booking as the security situation in Lebanon can shift. The Lebanese hospitality culture means visitors are typically treated exceptionally well and locals are helpful and welcoming.",
    },
    {
      q: "What currency does Lebanon use and how do I get cash?",
      a: "Lebanon uses both the Lebanese Lira (LBP) and the US Dollar (USD). Since the 2019 banking crisis, USD is the practical currency for tourism. ATMs are unreliable — some work, many dispense LBP at poor exchange rates. Bring $200–400 USD cash in small bills ($10s and $20s) and exchange additional at street money changers (sarrafeen) who offer better rates than banks. Credit cards work in upscale hotels and some restaurants but always carry cash.",
    },
    {
      q: "What is Lebanese mezze and how do I order it properly?",
      a: "A Lebanese mezze is a feast of 20–40 small dishes served simultaneously and continuously over 1.5–2 hours. It typically begins with cold dishes (hummus, labneh, tabbouleh, fattoush, moutabal), then hot dishes (falafel, kibbeh, sambousek pastries), then grilled meats (kafta, shish taouk, mixed grill). Tell the waiter you want the full mezze experience and let them guide the ordering. One mezze shared between two people costs $25–35 at a mid-range restaurant. Never rush a mezze.",
    },
    {
      q: "How do I get around Beirut without a car?",
      a: "Service taxis (shared taxis that follow fixed routes) cost $1–3 per trip and are how most Beirutis travel locally — wave your hand at any passing car and state your destination; if it matches the driver's route, they'll take you. Uber operates in Beirut and is reliable at $3–8 for most city trips. Rental cars are available at BEY airport from $40/day and are recommended for day trips to Jeita, Byblos, and the Bekaa Valley.",
    },
  ],
  combineWith: ["istanbul-5-days", "jordan-5-days", "egypt-7-days"],
  relatedSlugs: ["istanbul-5-days", "jordan-5-days", "jerusalem-4-days", "doha-3-days"],
  galleryQuery: "beirut lebanon old city corniche pigeon rocks gemmayzeh",
};

export const metadata: Metadata = {
  title: "Beirut in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The complete 4-day Beirut itinerary — Gemmayzeh nightlife, Pigeon Rocks, National Museum, Corniche, Jeita Grotto, Byblos day trip, mezze culture, and Lebanon's resilient city story. Budget $60/day to luxury hotels.",
  keywords: [
    "Beirut itinerary",
    "Beirut 4 days",
    "Beirut travel guide 2026",
    "Lebanon travel",
    "Jeita Grotto",
    "Byblos Lebanon",
    "Lebanese mezze",
    "Gemmayzeh",
    "Pigeon Rocks Beirut",
    "Beirut visa Indian passport",
  ],
  openGraph: {
    title: "Beirut in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Gemmayzeh art streets, El Morro-level fortress walls, glowing Jeita Grotto, ancient Byblos, and the world's greatest mezze feast — Beirut in 4 days from $60/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/beirut-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beirut in 4 Days: Complete 2026 Itinerary",
    description:
      "The complete Beirut 4-day guide — Gemmayzeh, Corniche, Jeita Grotto, Byblos, mezze, Lebanese wine. Budget to luxury.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/beirut-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Beirut in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
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
          name: "Beirut in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/beirut-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Beirut",
      description:
        "Beirut, Lebanon — the resilient Phoenix city of the Mediterranean; Ottoman architecture, Roman ruins, French balconies, Jeita Grotto, Byblos, and the world's greatest mezze culture.",
      geo: { "@type": "GeoCoordinates", latitude: 33.8886, longitude: 35.4955 },
    },
  ],
};

export default function BeirutPage() {
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
