import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Turkey",
  country: "Turkey",
  countryFlag: "🇹🇷",
  slug: "turkey-7-days",
  heroQuery: "istanbul turkey hagia sophia bosphorus cappadocia hot air balloon",
  heroAlt: "Hagia Sophia and Bosphorus in Istanbul with Cappadocia hot air balloons at sunrise",
  category: "Europe & Asia",
  date: "April 6, 2026",
  readTime: "15 min read",
  intro: "Turkey sits at the crossroads of civilisation — literally, straddling Europe and Asia — and it shows in every minaret, mosaic, and market. Istanbul is one of the great cities of the world: the Hagia Sophia has stood for 1,500 years, the Grand Bazaar has been trading for 600, and the Bosphorus remains the most dramatic urban waterway on earth. Cappadocia, three hours east by plane, is something else entirely — a landscape from another planet, where volcanic geology carved fairy chimneys and early Christians carved underground cities, and where hot air balloons float over it all at sunrise in one of the world's most iconic travel experiences. For Indian travellers, Turkey requires a simple e-Visa ($54/≈₹4,500), and the Turkish lira's weakness means ₹1 lakh buys a serious week here.",
  stats: { duration: "7 Days", budgetFrom: "₹5,000", bestMonths: "Apr–Jun, Sep–Oct", airport: "IST (Istanbul Airport)" },
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
      title: "Indian Passport Holders — e-Visa Required",
      bg: "bg-red-50", border: "border-red-200", titleColor: "text-red-800",
      items: [
        ["e-Visa Application", "Apply at evisa.gov.tr (the official Turkish government site). Fee: $54 USD (≈₹4,500). Grants 90 days multiple entry within 180 days. Most approvals are instant or within a few hours. Avoid third-party sites that charge more for the same service."],
        ["What You Need", "Valid passport (6 months validity beyond stay), a credit/debit card for the $54 fee, a working email address for the visa delivery. The e-Visa is emailed as a PDF — print it or save it on your phone. No biometrics or in-person interview required."],
        ["Validity & Use", "The Turkey e-Visa allows multiple entries, valid for 90 days within a 180-day period. You can enter, leave, and re-enter (e.g., to Greece or Georgia) within the validity window. Show the printed/digital e-Visa at immigration alongside your passport."],
        ["Istanbul Airport (IST)", "The new Istanbul Airport is one of the world's largest. Take the Havaist airport bus to Taksim Square: ₺100 (≈₹300), 45–60 minutes. Or take the metro (Istanbul Airport Metro Line) to the city: ₺100 + metro fare. Taxi to Sultanahmet: ₺700–900 (≈₹2,100–2,700) via official iTaksi. Avoid unlicensed taxis."],
      ],
    },
    {
      flag: "🌍",
      title: "Practical Turkey Entry Information",
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["Turkish Lira Exchange", "Turkish Lira (TRY/₺). ₺1 ≈ ₹3 (exchange rate fluctuates — check before travel). $1 ≈ ₺33 approximately. This means Turkey is exceptional value for Indian rupees. A full dinner costs ₺200–400 (≈₹600–1,200). A hotel room in Sultanahmet costs ₺1,200–2,500 (≈₹3,600–7,500)."],
        ["Istanbul Card", "Buy an Istanbul Card (Istanbulkart) at the airport vending machines or kiosks: ₺100 deposit + ₺100 credit = ₺200 (≈₹600). Use on metro, tram, bus, and ferry throughout Istanbul. Single trips cost ₺22–35 (≈₹66–105). Tram T1 connects the airport metro line to Sultanahmet (old city) directly."],
        ["Card vs Cash", "Major hotels, restaurants, and Grand Bazaar shops accept cards. However, carry ₺500–1,000 (≈₹1,500–3,000) cash for bazaar shopping (better bargaining leverage in cash), street food, and small teahouses. DövizDükkânı exchange bureaus in Sultanahmet give competitive rates. Avoid changing money at the airport."],
        ["Dress Code", "Turkey is secular but mosques require modest dress. Carry a scarf (women) or a wrap for visits to Hagia Sophia, Blue Mosque, and Süleymaniye. These are provided free at entrances but having your own is convenient."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₺1,200–2,000/day (~₹3,600–6,000)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Istanbul — Sultanahmet Old City",
          items: [
            "Arrive Istanbul Airport (IST). Take Havaist bus to Taksim Square (₺100/≈₹300), then metro to Sultanahmet. Or Havaray metro direct (opened 2023) from airport to city.",
            "Check in to hostel or budget hotel in Sultanahmet — Cheers Hostel (₺600–900/≈₹1,800–2,700 dorm), Sultan Hostel, or budget guesthouses in Cankurtaran neighbourhood starting at ₺1,200 (≈₹3,600) for a private room.",
            "3:00pm — Sultanahmet Square: Hagia Sophia exterior (free, mosque entry free since 2020 — modest dress required for interior). The 6th-century Byzantine cathedral converted to Ottoman mosque is unmissable.",
            "5:00pm — Blue Mosque (Sultan Ahmed Camii, free) — across the square, six minarets, stunning blue Iznik tile interior. Visit outside prayer times — check prayer schedule.",
            "6:30pm — Hippodrome of Constantinople (free) — ancient Roman chariot racing circuit, now a public square with Egyptian Obelisk and Serpent Column.",
            "8:00pm — Dinner at Tarihi Sultanahmet Köftecisi (the original meatball restaurant since 1920) — köfte plate with bread, salad, and ayran for ₺180 (≈₹540). Or any of the lokanta (local canteen) restaurants on Divan Yolu for ₺150–250 (≈₹450–750) for a full meal.",
          ],
          cost: "₺800–1,200 (≈₹2,400–3,600)",
        },
        {
          day: "Day 2",
          title: "Topkapi Palace, Grand Bazaar & Spice Bazaar",
          items: [
            "9:00am — Topkapi Palace: ₺700 (≈₹2,100) entry + ₺500 (≈₹1,500) for Harem section. The Ottoman sultans' 500-year seat of power — treasury with Spoonmaker's Diamond, Topkapi Dagger, holy relics. Allow 3–4 hours.",
            "Topkapi gardens (free to walk) offer the best view in Istanbul: the Golden Horn, Bosphorus, and Asian shore all visible from the palace walls.",
            "1:00pm — Lunch at Karakoy Gulle Balik (grilled fish sandwiches, ₺80–120/≈₹240–360) near Eminonu docks, OR Simit (sesame bread rings, ₺15/≈₹45) from a street cart.",
            "2:30pm — Grand Bazaar (Kapalıçarşı): free entry, 4,000 shops in 61 covered streets. Open Mon–Sat, closes around 7pm. Leather goods, ceramics, Turkish lamps, carpets, and gold. Bargain: start at 40–50% of the asking price.",
            "5:00pm — Spice Bazaar (Mısır Çarşısı): Egyptian Market near Eminonu, Turkish delight, saffron (verify quality), dried fruit, tea, and spices. More honest pricing than Grand Bazaar.",
            "6:00pm — Eminonu waterfront: watch the Galata Bridge fishermen, buy a balik ekmek (grilled mackerel sandwich, ₺60/≈₹180) from floating boat restaurants.",
            "8:00pm — Dinner in Beyoglu: Zubeyir Ocakbaşı for grilled meats (₺400–600/≈₹1,200–1,800 per person) or cheaper kebab shops on the side streets of Istiklal Avenue.",
          ],
          cost: "₺1,500–2,200 (≈₹4,500–6,600)",
        },
        {
          day: "Day 3",
          title: "Bosphorus Cruise, Galata Tower & Istiklal Avenue",
          items: [
            "9:00am — Istanbul Archaeology Museum (₺200/≈₹600) — some of the finest ancient Greek and Roman artifacts in the world, including the Alexander Sarcophagus.",
            "11:00am — Bosphorus Ferry Cruise: take the public ferry from Eminonu (Istanbul Card accepted, ₺35/≈₹105) across to Kadikoy on the Asian side. A cheap, spectacular crossing with views of palaces, mosques, and the two continents.",
            "12:30pm — Lunch in Kadikoy market: Ciya Sofrasi restaurant (₺300–500/≈₹900–1,500) — considered one of Istanbul's best traditional restaurants for Anatolian cuisine.",
            "2:30pm — Return ferry to European side. Walk to Galata Tower (₺400/≈₹1,200 entry) — 14th-century Genoese tower with 360° panoramic views.",
            "4:30pm — Istiklal Avenue: Istanbul's famous pedestrian boulevard, 1.5km of shops, street performers, old tram, and bookshops. At No. 5, Pera Museum has Ottoman art (₺200/≈₹600).",
            "6:00pm — Sunset Bosphorus cruise: private boat tours from Eminonu for ₺600–900/≈₹1,800–2,700 (1.5 hours) — worth it for sunset light on the mosques and palaces.",
            "8:00pm — Beyoglu meyhane (Turkish taverna): Asmalimescit neighbourhood, Refik or Yakup 2 for raki and mezze — ₺500–800/≈₹1,500–2,400 per person.",
          ],
          cost: "₺1,200–2,000 (≈₹3,600–6,000)",
        },
        {
          day: "Day 4",
          title: "Fly to Cappadocia — Arrive Göreme",
          items: [
            "Morning: Turkish breakfast (kahvaltı) at any neighbourhood bakery or cafe — ₺150–250/≈₹450–750 for cheese, olives, eggs, tomatoes, cucumbers, honey, and simit. Istanbul does breakfast exceptionally well.",
            "10:00am — Take Turkish Airlines or Pegasus flight from Istanbul (SAW or IST) to Kayseri (ASR) or Nevşehir (NAV) — 1 hour, booked in advance for ₺600–1,200 (≈₹1,800–3,600). Much better than the 12-hour overnight bus.",
            "Arrive Kayseri. Take Cappadocia airport shuttle to Göreme town: ₺200–300 (≈₹600–900). Book ahead at Helios Transfer or via your hotel.",
            "2:00pm — Explore Göreme town on foot: rock-cut churches, cave cafes, panoramic viewpoints.",
            "Göreme Open Air Museum (₺800/≈₹2,400) — Byzantine rock-cut churches with original 10th–12th century frescoes. The Dark Church frescoes are extraordinary (additional ₺200 entry).",
            "Sunset viewpoint at Sunset Point above Göreme — free, the valley glows orange at dusk.",
            "Dinner at Topdeck Cave Restaurant — cave dining with valley views, traditional Turkish testi kebab (clay pot kebab, ₺600/≈₹1,800), or cheaper options on Göreme main street for ₺200–350.",
            "Stay in a cave hotel — Kelebek Cave Hotel (₺2,500–4,000/≈₹7,500–12,000), or budget cave rooms from ₺1,200 (≈₹3,600).",
          ],
          cost: "₺2,500–4,000 including flight (≈₹7,500–12,000)",
        },
        {
          day: "Day 5",
          title: "Hot Air Balloon at Sunrise & Underground City",
          items: [
            "4:30am — Hot air balloon departure: book 2–3 days in advance as flights sell out. Kapadokya Balloons, Butterfly Balloons, or Royal Balloon are the recommended operators. Standard 1-hour flight: €180–220/≈₹16,000–19,500. Includes hotel pickup, champagne landing ceremony, and certificate. THIS is the non-negotiable Cappadocia experience.",
            "The balloon drifts over hundreds of other balloons, fairy chimneys, and the valleys at first light — nothing else in travel looks quite like it.",
            "9:00am — Breakfast and rest after the early start.",
            "11:00am — Derinkuyu Underground City (₺350/≈₹1,050) — an 8-level underground city carved 85m into the earth, used by early Christians to hide from invaders. Population of 20,000 people once lived underground. Claustrophobic but extraordinary.",
            "1:00pm — Lunch at Avanos: Kirkit Voyage restaurant (₺300–500/≈₹900–1,500) — Avanos is 30 min north of Göreme, famous for pottery (the town sits on red clay deposits).",
            "3:00pm — Pasabag (Monk's Valley, free) — a valley of mushroom-shaped fairy chimneys. Some have multiple caps. Walk among them freely.",
            "4:30pm — Devrent Valley (Imagination Valley, free) — a bizarre landscape where rock formations look like animals: camels, dolphins, Napoleon's profile. The most surreal 30-minute walk in Turkey.",
            "Sunset at Uçhisar Castle (₺200/≈₹600) — the highest point in Cappadocia, panoramic 360° views of the entire valley at dusk.",
          ],
          cost: "₺3,500–5,000 including balloon (≈₹10,500–15,000)",
        },
        {
          day: "Day 6",
          title: "Ihlara Valley, Rose Valley Hike & Turkish Bath",
          items: [
            "9:00am — Ihlara Valley (₺200/≈₹600) — a 16km canyon carved by a river, lined with Byzantine churches carved into the canyon walls. The 3km most-visited section takes 2 hours. Belisirma village restaurant inside the canyon serves grilled trout by the river (₺350/≈₹1,050).",
            "12:30pm — Selime Monastery (₺200/≈₹600) — a vast rock-cut monastery complex at the end of Ihlara Valley, used in Star Wars as a filming location reference.",
            "3:00pm — Rose Valley hike (free) — leave from Cavusin village, walk through valleys that glow pink and orange at sunset. Allow 2 hours for the main loop.",
            "5:30pm — Hamam (Turkish bath): Göreme Hamam (₺700–1,000/≈₹2,100–3,000 for full treatment including scrub and massage). A Turkish bath is a medically therapeutic experience — the kese scrub removes layers of dead skin. An hour of ritual bathing and massage for ₹2,000–3,000 is extraordinary value.",
            "8:00pm — Dinner at Pumpkin Göreme restaurant — rooftop terrace, Cappadocian wines (the region produces good red wine from volcanic soil), testi kebab.",
          ],
          cost: "₺2,000–3,500 (≈₹6,000–10,500)",
        },
        {
          day: "Day 7",
          title: "Return to Istanbul or Pamukkale Day Trip",
          items: [
            "Option A (Recommended): Return to Istanbul. Fly Kayseri→Istanbul (₺600–1,200/≈₹1,800–3,600). Spend the afternoon shopping: Grand Bazaar for last-minute ceramics and Turkish delight, Arasta Bazaar (less touristy, behind Blue Mosque) for quality carpets and jewellery.",
            "Evening farewell dinner: Sirkeci neighbourhood near Topkapi — Hamdi Restaurant (₺600–900/≈₹1,800–2,700) for the best kebab views overlooking the Golden Horn.",
            "Night flight home: Istanbul Airport has flights to all Indian cities — Air India, IndiGo, Turkish Airlines serve Mumbai, Delhi, Hyderabad, Chennai.",
            "Option B: Pamukkale day trip from Cappadocia (long, not recommended unless you have extra time). The white calcium travertine terraces and thermal pools of Pamukkale are stunning but require an overnight from either Istanbul or Izmir — not doable as a day trip from Cappadocia.",
            "Option C (if staying in Istanbul Day 7): Dolmabahce Palace (₺1,200/≈₹3,600) — the 19th-century Ottoman baroque palace on the Bosphorus. Süleymaniye Mosque (free) for the best interior of any Istanbul mosque. Final Turkish breakfast at Van Kahvalti Evi — the gold standard, ₺500/≈₹1,500.",
          ],
          cost: "₺1,500–2,500 (≈₹4,500–7,500)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₺4,000–7,000/day (~₹12,000–21,000)",
      days: [
        {
          day: "Days 1–3",
          title: "Istanbul — Boutique Hotels & Private Tours",
          items: [
            "Stay at Sura Hagia Sophia Hotel (₺4,500–6,000/≈₹13,500–18,000/night, Hagia Sophia views) or Ibrahim Pasha Hotel in Sultanahmet (₺3,500/≈₹10,500) — 4-star boutique with personal service.",
            "Private guided tour of Hagia Sophia, Topkapi Palace, and the Blue Mosque (₺2,500/≈₹7,500 per person, 6 hours) — expert historian guides explain the Byzantine and Ottoman layers most visitors miss.",
            "Private Bosphorus sunset cruise on a gulet (wooden boat, ₺3,000–5,000/≈₹9,000–15,000 for a private 2-hour charter).",
            "Dinner at Mikla restaurant (₺2,000–3,000/≈₹6,000–9,000 per person) — contemporary Turkish cuisine on the 18th-floor rooftop of Marmara Pera, voted one of the world's 100 best restaurants.",
            "Istanbul Modern Museum (₺400/≈₹1,200) — Turkish contemporary art in a stunning Renzo Piano-designed building on the Bosphorus.",
          ],
          cost: "₺7,000–12,000/day (≈₹21,000–36,000)",
        },
        {
          day: "Days 4–6",
          title: "Cappadocia — Cave Hotels & Exclusive Balloon",
          items: [
            "Stay at Sultan Cave Suites (₺6,000–9,000/≈₹18,000–27,000/night) or Museum Hotel Cappadocia (₺8,000+/≈₹24,000+) — the finest cave hotels with private terraces overlooking the Göreme valley.",
            "Exclusive hot air balloon: book a private basket (€600–800/≈₹54,000–72,000 for 2 passengers) with Royal Balloon — sunrise over Cappadocia with just your group and a pilot.",
            "Private guided Cappadocia tour including Derinkuyu, Ihlara, and Zelve — ₺4,000–6,000/≈₹12,000–18,000 per couple for a full day with a licensed guide and private vehicle.",
            "Horse riding through the valleys at sunset (₺1,500/≈₹4,500 per person, 1.5 hours) — the traditional way to explore Cappadocia before tourism.",
            "Dinner at Old Greek House in Mustafapasa village — Cappadocian mezze and local Urgup wine in a restored 18th-century Greek mansion.",
          ],
          cost: "₺8,000–15,000/day (≈₹24,000–45,000)",
        },
        {
          day: "Day 7",
          title: "Istanbul Return — Farewell Shopping & Dinner",
          items: [
            "Return to Istanbul. Check in to The Marmara Taksim or Vault Karakoy — design hotels in Beyoglu.",
            "Turkish bath at Cemberlitas Hamam (₺1,200–1,800/≈₹3,600–5,400 for full treatment) — a 450-year-old hamam designed by the great Ottoman architect Mimar Sinan.",
            "Shopping at Arasta Bazaar for authentic handmade ceramics (₺800–2,000/≈₹2,400–6,000) and Istanbul Modern Museum gift shop.",
            "Farewell dinner at Nicole Istanbul (₺2,500–4,000/≈₹7,500–12,000 per person) — creative Turkish tasting menu with Bosphorus views.",
          ],
          cost: "₺6,000–10,000 (≈₹18,000–30,000)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₺15,000+/day (~₹45,000+)",
      days: [
        {
          day: "Days 1–3",
          title: "Istanbul — Four Seasons & Helicopter Bosphorus",
          items: [
            "Stay at Four Seasons Istanbul at Sultanahmet (the former Ottoman prison turned 5-star hotel, ₺20,000–35,000/≈₹60,000–105,000/night) — arguably the finest hotel location in the world, inside the Sultanahmet archaeological zone.",
            "Private historian-guided tour of Hagia Sophia's underground cisterns and private areas not open to general public.",
            "Helicopter Bosphorus tour: 20-minute private helicopter from Istanbul over the Bosphorus, the bridges, and the Princes' Islands (₺15,000–25,000/≈₹45,000–75,000 for 2 passengers).",
            "Dinner at Feriye Palace Restaurant — a 19th-century Ottoman pavilion on the Bosphorus, ₺3,000–5,000/≈₹9,000–15,000 per person for Ottoman cuisine.",
            "Exclusive Grand Bazaar private shopping tour with a personal interpreter and quality guide — avoid tourist traps, access master craftsmen's workshops.",
          ],
          cost: "₺40,000–70,000/day (≈₹120,000–210,000)",
        },
        {
          day: "Days 4–6",
          title: "Cappadocia — Museum Hotel & Private Balloon",
          items: [
            "Stay at Argos in Cappadocia (₺15,000–25,000/≈₹45,000–75,000/night) — a village of cave rooms carved into the cliffs, private pool, wine cellar and vineyard. One of the world's great boutique hotels.",
            "Exclusive dawn hot air balloon: private basket for 2, followed by champagne breakfast in the Göreme valley with your pilot — Royal Balloon VIP service.",
            "Private underground city tour with an archaeological guide covering Derinkuyu, Kaymakli, and the tunnel systems.",
            "ATV quad bike tour through the valleys, private horse trek at sunset, and cooking class at the hotel.",
            "Argos wine cellar dinner — the hotel is built over a Byzantine wine cave, tasting 8 Cappadocian wines paired with Anatolian tasting menu.",
          ],
          cost: "₺35,000–60,000/day (≈₹105,000–180,000)",
        },
        {
          day: "Day 7",
          title: "Istanbul Farewell — Bosphorus Yacht & Cemberlitas Hamam",
          items: [
            "Return to Istanbul. Private Bosphorus yacht charter for half a day (₺25,000–40,000/≈₹75,000–120,000) — sail under the Bosphorus Bridge, past Dolmabahce Palace, to the Princes' Islands.",
            "Cemberlitas Hamam private session (₺5,000–8,000/≈₹15,000–24,000 for exclusive private hamam and extended massage).",
            "Final dinner at Nusr-Et (Salt Bae's original Istanbul restaurant, Etiler branch) or at the Four Seasons Bosphorus Aqua restaurant — ₺4,000–8,000/≈₹12,000–24,000 per person.",
          ],
          cost: "₺60,000–100,000 (≈₹180,000–300,000)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "₺800–1,500 (≈₹2,400–4,500) hostel/guesthouse", food: "₺300–600 (≈₹900–1,800) street food & lokanta", transport: "₺100–300 (≈₹300–900) Istanbulkart/bus", activities: "₺500–1,200 (≈₹1,500–3,600)", total: "₺1,700–3,600/day (≈₹5,100–10,800)" },
    { tier: "✨ Mid-Range", accommodation: "₺3,500–7,000 (≈₹10,500–21,000)", food: "₺1,000–2,500 (≈₹3,000–7,500)", transport: "₺400–800 (≈₹1,200–2,400) Uber/private", activities: "₺2,000–5,000 (≈₹6,000–15,000)", total: "₺6,900–15,300/day (≈₹20,700–45,900)" },
    { tier: "💎 Luxury", accommodation: "₺15,000–35,000 (≈₹45,000–105,000)", food: "₺5,000–12,000 (≈₹15,000–36,000)", transport: "₺2,000–5,000 (≈₹6,000–15,000) private car", activities: "₺8,000–20,000 (≈₹24,000–60,000)", total: "₺30,000–72,000/day (≈₹90,000–216,000)" },
  ],
  mistakes: [
    { icon: "🗺️", title: "Trying to Do Istanbul + Cappadocia + Pamukkale + Ephesus in 7 Days", desc: "This is the most common Turkey mistake. Istanbul alone deserves 3 full days — rushing through Hagia Sophia, Topkapi, and the Grand Bazaar in a day is a waste. Adding Pamukkale (8-hour bus from Istanbul) and Ephesus (Izmir, another day) means 4 of your 7 days are spent on buses. The perfect 7-day Turkey trip is Istanbul (3 days) + Cappadocia (3 days) + 1 day buffer. Pamukkale and Ephesus deserve a separate trip.", color: "bg-red-50 border-red-200" },
    { icon: "🎈", title: "Not Booking the Cappadocia Hot Air Balloon in Advance", desc: "Cappadocia balloon flights are limited by the Civil Aviation Authority — a fixed number of balloons can fly each morning. In peak season (April–June, September–October) they sell out 2–3 days ahead. In high season (July–August) sometimes a week ahead. Book immediately when you confirm your Cappadocia dates. Kapadokya Balloons, Butterfly Balloons, and Royal Balloon are the three safest and most reputable operators — don't book unnamed operators to save €20.", color: "bg-orange-50 border-orange-200" },
    { icon: "🌅", title: "Missing the Bosphorus at Sunset", desc: "The Bosphorus at sunset — when the mosques and palaces glow gold and the water turns copper — is one of the great travel sights. Taking the public ferry from Eminonu to Kadikoy (₺35/≈₹105) at 6pm, or booking an evening cruise from ₺600 (≈₹1,800), costs almost nothing. Too many visitors see the Bosphorus only from a bridge or from shore. The view from the water is transformative.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🏛️", title: "Visiting Hagia Sophia Without Understanding What You Are Looking At", desc: "Hagia Sophia is a 6th-century marvel — it was the world's largest cathedral for nearly 1,000 years, then the world's greatest mosque, then a secular museum, and now a mosque again. The gold Byzantine mosaics (visible on upper galleries, ₺200 extra entry) show Christ, the Virgin Mary, and emperors. The Islamic calligraphy medallions were hung over them. Both coexist — understanding this history before you enter transforms the experience.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "✈️", title: "Fly Istanbul to Cappadocia — 1 Hour vs 12-Hour Bus", desc: "The overnight bus from Istanbul to Cappadocia (to Göreme) takes 10–12 hours, costs ₺700–900 (≈₹2,100–2,700), and arrives at 6am in Nevsehir (still 1 hour from Göreme). Turkish Airlines and Pegasus fly Istanbul to Kayseri in 1 hour for ₺600–1,500 (≈₹1,800–4,500) booked in advance. The time saved is worth every rupee. Book the Kayseri–Göreme shuttle (₺200–300/≈₹600–900) in advance through your hotel.", color: "bg-amber-50 border-amber-200" },
    { icon: "🛁", title: "Turkish Bath (Hammam) Guide — What to Expect", desc: "A hammam visit has a fixed ritual: you enter a warm room (hararet), lie on a heated marble slab (göbek taşı), and a tellak (bath attendant) scrubs your body with a kese (rough mitt) removing dead skin, then soaps and massages you. The whole process takes 45–90 minutes. Cemberlitas Hamam (built 1584 by Mimar Sinan, ₺700–1,200/≈₹2,100–3,600) and Ayasofya Hurrem Sultan Hamam (₺1,200–1,800/≈₹3,600–5,400) are the finest historic choices in Istanbul.", color: "bg-teal-50 border-teal-200" },
    { icon: "☕", title: "Turkish Tea Culture — Çay Is the National Drink", desc: "Turks drink more tea per capita than any nation on earth. Turkish çay (black tea in a tulip-shaped glass, ₺10–20/≈₹30–60) is offered everywhere — rug shops, barber visits, even at the Grand Bazaar before negotiating. Refusing tea is considered rude. Turkish coffee (Türk kahvesi, ₺30–50/≈₹90–150) is thick, unfiltered, served with water and a sweet, and read for fortune-telling. Both are essential cultural experiences.", color: "bg-green-50 border-green-200" },
    { icon: "🛍️", title: "Grand Bazaar Haggling Guide — Prices Are Not Fixed", desc: "The Grand Bazaar operates on negotiation — the first price is always 2–3x what the seller will accept. For a handmade ceramic: start at 40% of asking. For leather: 50%. For carpets: never buy a carpet on day one. If you express interest, come back on day two — the price drops 20–30%. Paying cash (Turkish lira) gets a better price than card. Shop comparisons: Arasta Bazaar behind the Blue Mosque has better quality at slightly higher but more honest prices than the Grand Bazaar.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "How much does a Turkey e-Visa cost for Indians and how do I apply?", a: "The Turkey e-Visa costs $54 USD (approximately ₹4,500 at current rates). Apply only at the official government website: evisa.gov.tr. The process takes 5–10 minutes, requires a credit or debit card for payment, and approval usually comes within hours (sometimes instant). The e-Visa is emailed as a PDF — print it or save it on your phone. It allows 90 days of stay within a 180-day window and multiple entries. Avoid third-party sites that charge ₹6,000–8,000 for the same service." },
    { q: "Is Turkey good value for Indian tourists?", a: "Exceptionally so. The Turkish lira has weakened significantly — ₺1 is approximately ₹3, meaning a full Turkish meal at a good restaurant costs ₺300–600 (≈₹900–1,800). A comfortable 4-star hotel in Sultanahmet runs ₺3,000–5,000/night (≈₹9,000–15,000). The hot air balloon in Cappadocia (€180/≈₹16,000) is the most expensive single item in the trip. A complete 7-day Turkey trip from India including flights, accommodation, food, and activities can be done for ₹1,00,000–1,50,000 per person mid-range." },
    { q: "What is the best time to visit Turkey?", a: "April to June and September to October are ideal — moderate temperatures, clear skies, and the hot air balloons fly consistently. Istanbul winters (December–February) are cold and rainy but crowd-free. July and August are extremely hot in Istanbul (35–40°C), Cappadocia is pleasant. Balloon cancellations due to wind are more common in winter months. For the balloon experience, April–June is the most reliable." },
    { q: "Can I visit Istanbul and Cappadocia in 7 days?", a: "Yes — this is the ideal 7-day Turkey itinerary. 3 days in Istanbul (Sultanahmet, Beyoglu, Bosphorus) and 3 days in Cappadocia (balloon, underground city, valleys) with one travel day. Fly between them — 1 hour on Turkish Airlines or Pegasus. Do NOT try to add Pamukkale or Ephesus to this itinerary in 7 days — those deserve a separate trip or an extended 10–12 day itinerary." },
    { q: "Is Turkey safe for Indian tourists?", a: "Turkey is a popular and generally safe destination for tourists. Istanbul's tourist areas (Sultanahmet, Beyoglu, Karakoy) are busy and well-policed. Cappadocia is extremely safe. Standard travel precautions apply: watch for pickpockets in the Grand Bazaar, use official taxis (iTaksi app or hotel-called cabs — avoid unlicensed drivers at the airport), and keep copies of your passport and e-Visa. Turkey has a large Muslim population and conservative values outside tourist areas — dress modestly in mosques and smaller towns." },
  ],
  combineWith: ["greece-7-days", "egypt-7-days", "georgia-7-days"],
  relatedSlugs: ["istanbul-5-days", "cappadocia-3-days", "egypt-7-days", "jordan-5-days", "greece-7-days"],
  galleryQuery: "istanbul hagia sophia bosphorus cappadocia hot air balloon fairy chimneys turkey",
};

export const metadata: Metadata = {
  title: "Turkey in 7 Days: Istanbul & Cappadocia Itinerary for Indians (2026)",
  description: "7-day Turkey itinerary for Indian travellers — e-Visa guide ($54), Istanbul's Hagia Sophia and Grand Bazaar, Cappadocia hot air balloon. Budget ₹5,000–8,000/day with prices in TRY and ₹.",
  keywords: ["turkey itinerary 7 days", "turkey travel guide 2026", "istanbul cappadocia itinerary", "turkey e-visa indians", "cappadocia hot air balloon", "istanbul hagia sophia guide", "turkey budget travel india"],
  openGraph: {
    title: "Turkey in 7 Days: Istanbul & Cappadocia 2026",
    description: "e-Visa in hours ($54), Hagia Sophia, Grand Bazaar, and hot air balloons over Cappadocia at sunrise.",
    images: [{ url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=80", width: 1200, height: 630, alt: "Hot air balloons over Cappadocia fairy chimneys at sunrise Turkey" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Turkey in 7 Days: Istanbul & Cappadocia (2026)", description: "e-Visa $54, Hagia Sophia, hot air balloon sunrise in Cappadocia — perfect 7-day itinerary." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/turkey-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Turkey in 7 Days: Istanbul & Cappadocia Complete Itinerary for Indian Travellers 2026",
      datePublished: "2026-04-06T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      url: "https://www.incredibleitinerary.com/blog/turkey-7-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Turkey 7 Days", item: "https://www.incredibleitinerary.com/blog/turkey-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Turkey",
      description: "Transcontinental country straddling Europe and Asia, known for Istanbul's Hagia Sophia and Grand Bazaar, Cappadocia's fairy chimneys and hot air balloons, and rich Ottoman and Byzantine heritage.",
      touristType: "Cultural, Adventure, Historical",
    },
  ],
};

export default function Turkey7DaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
