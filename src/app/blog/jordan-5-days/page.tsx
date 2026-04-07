import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Jordan",
  country: "Jordan",
  countryFlag: "🇯🇴",
  slug: "jordan-5-days",
  heroQuery: "petra jordan rose city treasury ancient ruins",
  heroAlt: "Petra Jordan Al-Khazneh Treasury rose-red rock facade ancient Nabataean city",
  category: "Middle East",
  date: "April 5, 2026",
  readTime: "15 min read",
  intro: "Walking through the Siq — the 1.2km sandstone canyon that guards the entrance to Petra — at 7am, with the rock walls narrowing overhead and the first glimpse of the Treasury's rose-red facade appearing around the final bend, is one of the most extraordinary moments in all of travel. Five days in Jordan gives you Petra in full (including the Monastery that most people miss), a night under the Wadi Rum stars, floating in the Dead Sea, and enough time in Amman to fall in love with the city's chaotic warmth.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$55",
    bestMonths: "Mar–May, Sep–Nov",
    airport: "AMM (Queen Alia International)",
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
        ["Visa on Arrival", "Indian passport holders can obtain a Jordan visa on arrival at Queen Alia International Airport in Amman. Cost: JD 40 (~$56 USD). Single-entry, valid 30 days. Pay at the visa counter before reaching immigration. Keep exact change in US dollars or Jordanian dinars."],
        ["Jordan Pass — Best Option", "The Jordan Pass (JD 70 for 1-day Petra, JD 75 for 2-day Petra, JD 80 for 3-day Petra) includes the visa fee AND entry to Petra AND over 40 other sites. If you buy the Jordan Pass online before travel, the visa is waived at the airport. This saves money and eliminates the visa queue. Buy at jordanpass.jo before your flight."],
        ["Key Conditions", "You must stay a minimum of 3 nights in Jordan to use the Jordan Pass visa waiver (to prevent day-trippers from Israel using it). Book your hotels before purchasing. The Pass is non-refundable."],
        ["Travel Insurance", "Jordan has good private hospitals in Amman but medical costs for foreigners without insurance are high. Carry travel insurance with medical coverage. Jordan is not on the Schengen area — standard travel insurance from India covering the Middle East region works."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa on Arrival", "US, UK, Canadian, Australian, and most EU passport holders receive a visa on arrival at Amman airport. Cost: JD 40 (~$56 USD). Single-entry, 30 days. Or use the Jordan Pass (which waives the visa fee) if visiting Petra."],
        ["Jordan Pass", "Highly recommended for all nationalities visiting Petra. The Jordan Pass (JD 70–80) includes visa + Petra + 40+ sites. Buy at jordanpass.jo before departure. Present at the airport immigration — visa fee is waived."],
        ["Israel Border Crossing", "Jordan and Israel have open borders. The Allenby Bridge crossing (King Hussein Bridge) connects Amman to the West Bank and Jerusalem. The Yitzhak Rabin/Wadi Araba crossing connects Eilat (Israel) to Aqaba (Jordan, near Petra). Both crossings are open and frequently used. Some Arab countries may have restrictions on Israeli-stamped passports — ask for a separate stamp if concerned."],
        ["Currency", "Jordanian Dinar (JD). 1 JD = approximately $1.41 USD. The dinar is pegged to the dollar. ATMs in Amman and Petra dispense JD. US dollars are widely accepted in tourist areas at approximately $1 = JD 0.71."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$55–90/day",
      days: [
        {
          day: "Day 1",
          title: "Amman — Citadel, Roman Theatre & Downtown",
          items: [
            "9:00am — Arrive in Amman and take a taxi or Uber to your hostel or budget hotel near Rainbow Street or Downtown (JD 10–15 from the airport, about $14–21).",
            "10:30am — Rainbow Street (Amman's most atmospheric neighbourhood): independent cafés, bookshops, street art, and views over the city's 19 hills. The street food is excellent — falafel sandwich JD 0.75 ($1), ka'ak (sesame bread) with za'atar JD 0.50.",
            "12:00pm — Lunch: falafel, hummus, and fuul (fava bean stew) at any Downtown restaurant. A full meal with bread and drinks: JD 2–4 ($3–6). Jordanian hummus is among the best in the world — it bears little resemblance to the supermarket version.",
            "1:30pm — Amman Citadel (Jabal al-Qala'a, JD 3.5 entry): the Roman Temple of Hercules (enormous column drums remain, 2nd century AD), the Umayyad Palace (8th-century Islamic palace complex, remarkably preserved), and the Archaeological Museum (small but excellent, Roman statues and Bronze Age artefacts). 1.5–2 hours.",
            "3:30pm — Roman Theatre (JD 3.5 or combined ticket from Citadel): the 2nd-century AD amphitheatre seats 6,000. Walk up to the top tier for views over the city. The Folklore Museum and Popular Life Museum inside are free with the theatre ticket.",
            "5:00pm — Downtown Amman souq: the Gold Souk, spice market, and fabric merchants in the alleyways around King Hussein Street. Free to browse.",
            "7:30pm — Dinner: mansaf (Jordan's national dish — lamb cooked in fermented yogurt sauce with rice and pine nuts, JD 4–8) at Hashem Restaurant (Downtown, cash only, beloved by Jordanians and the king himself).",
          ],
          cost: "$35–55 total",
        },
        {
          day: "Day 2",
          title: "Petra — The Siq & Treasury",
          items: [
            "5:30am — Public bus from Amman's Wihdat bus station to Petra/Wadi Musa (3 hours, JD 5 = $7). Buy Jordan Pass online before this day if you haven't already (or pay JD 50 at the gate for a 1-day ticket — significantly more expensive).",
            "8:30am — Enter Petra through the main gate. Walk the Bab as-Siq passage (1km, rock formations, djinn blocks, obelisk tomb) before the Siq itself begins.",
            "9:00am — The Siq (1.2km canyon, free with ticket): the narrow gorge reaches 80m height with 2m width at the tightest point. The channel cut by the Nabataeans 2,000 years ago to divert floodwater is still visible. Walk slowly. The light changes every 10 minutes.",
            "9:30am — Al-Khazneh (The Treasury): the iconic 40m facade carved from rose-red sandstone. The morning light from 9:30–11am hits the facade at the best angle. The interior is a single undecorated chamber — the facade is entirely the point.",
            "11:00am — The Street of Facades (40 Nabataean rock tombs), the Colonnaded Street (Roman-era city plan), the Nymphaeum (ornamental fountain, 2nd century AD), and the Temenos Gateway leading to the Great Temple complex.",
            "1:00pm — Lunch in Petra: the Basin Restaurant inside the site (JD 10–15 buffet) or bring food from Wadi Musa village.",
            "3:00pm — Royal Tombs (Urn Tomb, Silk Tomb, Corinthian Tomb, Palace Tomb): the cliff face carved with four grand tomb facades, each with its own architectural personality. The Urn Tomb interior was converted to a Byzantine church in 446 AD.",
            "5:00pm — Exit via the Siq in reverse — the Treasury in evening light looks completely different from the morning. Return to Wadi Musa for dinner and overnight.",
          ],
          cost: "$25–45 (transport + food, Jordan Pass covers entry)",
        },
        {
          day: "Day 3",
          title: "Petra — The Monastery & High Place",
          items: [
            "6:00am — Reenter Petra at opening. Walk the Siq quickly to the Treasury, then immediately start the Monastery route (Ad Deir) — turn left at the Basin and follow the signs. The path climbs 800 steps carved into the rock.",
            "7:30am — Ad Deir (The Monastery): Petra's largest monument (50m wide, 45m tall) and most impressive facade. It is a 45-minute climb from the Treasury area. At 6–7am you will be almost entirely alone. By 11am it is crowded. The view from the ridge behind the Monastery extends to Wadi Araba and, on clear days, to Israel.",
            "10:00am — High Place of Sacrifice: the 2,000-year-old ritual altar on Petra's highest accessible point. The path up passes the Obelisks (two freestanding 7m carved rock needles). The circular altar with its drainage channels for ritual sacrifice is preserved almost perfectly.",
            "12:00pm — Descend via the Wadi Farasa route (past the Garden Triclinium, Soldier's Tomb, and the Renaissance Tomb) — different rock colours from the main route, far fewer people.",
            "2:00pm — Petra Night Show (Tuesday, Wednesday, Thursday evenings, JD 14 if not included in Jordan Pass): 800 candles light the Siq and the Treasury as a Bedouin storyteller recounts Nabataean history. Genuinely atmospheric.",
            "3:00pm — Return to Wadi Musa. Afternoon: cooking class or Bedouin tea ceremony at a local guesthouse (JD 10–20, optional). Pack and check out for Wadi Rum tomorrow.",
          ],
          cost: "$15–35 (food + optional Night Show)",
        },
        {
          day: "Day 4",
          title: "Wadi Rum — Jeep Tour & Bedouin Camp",
          items: [
            "8:00am — Minibus or shared taxi from Wadi Musa to Wadi Rum village (1.5 hours, JD 5–8 per person). Or arrange a private transfer through your guesthouse.",
            "10:00am — Wadi Rum protected area entry (JD 5, waived with Jordan Pass). Wadi Rum is 74,000 hectares of desert, sandstone mountains, and Martian-red dunes. Lawrence of Arabia camped here in 1917. The Martian (2015), Rogue One, and Dune were filmed here.",
            "10:30am — 4WD jeep tour (JD 35–60/person for a 4-hour tour, or JD 50–80 for a full-day): Lawrence's Spring (a rock-carved Nabataean water system), the Khazali Canyon inscriptions (ancient Thamudic rock art, 2,000+ years old), the Red Sand Dunes, the Mushroom Rock, and Um Fruth Rock Bridge.",
            "2:00pm — Lunch at your Bedouin camp (traditional zarb — meat and vegetables cooked underground with coals). Most camps include lunch in the overnight price.",
            "5:00pm — Sunset from the dunes: the light turns Wadi Rum from red to deep purple to black over 45 minutes. One of the great natural light shows in the world.",
            "8:00pm — Bedouin overnight camp (JD 40–70/person including dinner and breakfast, in traditional Bedouin tents or open-air sleeping under the stars). The stargazing at Wadi Rum — zero light pollution, 300+ clear nights per year — is extraordinary. The Milky Way is visible to the naked eye.",
          ],
          cost: "$60–100 total (transport + jeep + camp)",
        },
        {
          day: "Day 5",
          title: "Dead Sea & Amman Departure",
          items: [
            "7:00am — Breakfast at the Bedouin camp. Minibus or private transfer from Wadi Rum to the Dead Sea (3 hours via Aqaba-Amman highway, shared minibus JD 10–15).",
            "11:00am — Dead Sea (lowest point on Earth at -430m below sea level, salt concentration 33%). The buoyancy is genuinely disorienting — you cannot sink even if you try. Float on your back and hold up a newspaper for the obligatory photo. Cover any cuts or shaving nicks with petroleum jelly before entering — salt in a wound is intensely painful.",
            "12:00pm — Amman Beach (public Dead Sea resort, JD 20 entry including sunbed and shower) or Suweimeh resorts (more developed, JD 25–35). The Dead Sea mud is free at the shore — coat yourself and let it dry.",
            "2:00pm — Lunch at a Dead Sea resort restaurant (JD 8–15) or bring food. The drive along the Dead Sea shore to Amman takes 1 hour.",
            "4:00pm — Return to Amman. Final afternoon: Darat al Funun contemporary art gallery in a terraced garden above the Citadel (free), or a final round of Amman hummus and knafeh (sweet cheese pastry, JD 1–2) at Jabri or Hababah.",
            "7:00pm — Farewell dinner: Fakhr El-Din restaurant (Rainbow Street, JD 15–25/person, Jordan's most celebrated traditional restaurant) for musakhan (sumac roast chicken), maklouba (upside-down rice), and the best mezze spread in Amman.",
          ],
          cost: "$45–75 total (Dead Sea + dinner)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$130–220/day",
      days: [
        {
          day: "Day 1",
          title: "Amman — Culture, Food & Views",
          items: [
            "Check in to a 3-4 star hotel near Rainbow Street or the First Circle (JD 50–90/night, ~$70–130). The Amman Rotana or The House Boutique Suites offer excellent value at this level.",
            "10:00am — Jordan Museum (JD 5, Ras Al Ein Street) — the Dead Sea Scrolls fragments on display, Bronze Age artefacts, and the history of Jordan from prehistory to the present. Exceptionally well-curated, 2 hours.",
            "1:00pm — Lunch at Sufra Restaurant (Rainbow Street, JD 15–25/person): traditional Jordanian cooking in a restored 1950s villa — the best sit-down traditional food in Amman.",
            "3:00pm — Amman Citadel and Roman Theatre (see Budget Day 1 for details). At mid-range, hire an official guide at the Citadel entrance (JD 20–30 for 1.5 hours) — the Umayyad Palace history and the Temple of Hercules architectural details are transformed with good commentary.",
            "6:00pm — Sunset from the Citadel hilltop (free after entry) — 360° views over Amman as the call to prayer echoes across the hills from 19 mosques simultaneously.",
            "8:00pm — Dinner at Tawaheen Al Hawa (Abu Alanda area, JD 20–35/person) — contemporary Jordanian cuisine in a romantic setting.",
          ],
          cost: "$120–180 total",
        },
        {
          day: "Day 2",
          title: "Petra in Depth with Guide",
          items: [
            "6:30am — Hire a private taxi from Amman to Petra (JD 50–70 one way, 2.5 hours, negotiated the night before through your hotel).",
            "9:00am — Petra with a licensed guide (JD 50–80 for a half-day, hired at the visitors' centre). A trained guide makes the Nabataean water engineering, the astronomical alignments of the Treasury, and the trade route history come alive.",
            "1:00pm — Lunch at the Basin Restaurant inside Petra (JD 12–18 buffet, decent quality, good location deep in the site).",
            "2:00pm — Afternoon at the Royal Tombs and Colonnaded Street at your own pace. The afternoon light on the tombs from 3–5pm is excellent for photography.",
            "6:00pm — Check in to a Wadi Musa hotel (JD 50–90/night). Sunset from Jabal Harun viewpoint above the site (15-minute drive, free, the pink and gold light over the rock city is exceptional).",
            "8:00pm — Dinner at Cave Bar (JD 15–25/person, a 2,000-year-old Nabataean rock tomb converted into a bar and restaurant — genuinely atmospheric).",
          ],
          cost: "$130–200 total",
        },
        {
          day: "Day 3",
          title: "Petra Night & The Monastery at Dawn",
          items: [
            "5:30am — Enter Petra at opening (6am in summer). Walk directly to the Monastery (Ad Deir) route — arrive at the summit by 7am for the extraordinary early light on the facade.",
            "9:00am — High Place of Sacrifice. Hire a donkey for the descent (JD 10–15) or walk the Wadi Farasa route.",
            "12:00pm — Little Petra (Siq al-Barid, 7km from Petra, free): a smaller Nabataean settlement with painted biclinium ceilings, narrow siq, and almost no tourists. Essential and missed by 90% of visitors.",
            "3:00pm — Petra Night Show (evenings: JD 14). For mid-range travellers, this is included in the Jordan Pass and is a lovely way to end the Petra experience.",
            "Pack and prepare for Wadi Rum tomorrow. Most Wadi Musa guesthouses offer a packed breakfast for early departures.",
          ],
          cost: "$80–130 total",
        },
        {
          day: "Day 4",
          title: "Wadi Rum — Upgraded Camp & Stargazing",
          items: [
            "8:00am — Private transfer from Wadi Musa to Wadi Rum (JD 30–45 for a private car, 1.5 hours).",
            "10:00am — Full-day private jeep tour of Wadi Rum (JD 70–100/person). A private jeep means you set the pace, stop when you want to photograph, and access the less-visited parts of the protected area — Lawrence's actual camp site, the remote Al-Qattar spring, and the Um Ishrin red dune far from the tour group trails.",
            "1:00pm — Traditional zarb lunch at your camp, prepared underground over coals by the Bedouin team.",
            "5:00pm — Camel sunset ride (JD 15–25 for 1 hour) from the dunes.",
            "8:00pm — Luxury Bedouin camp: Memories Aicha or Wadi Rum Night Luxury Camp (JD 80–150/person including dinner and breakfast, in 'bubble tents' with transparent dome ceilings for stargazing from bed, or traditional Bedouin tents elevated on platforms). The star landscape with the Milky Way at this level of darkness is extraordinary.",
          ],
          cost: "$150–220 total",
        },
        {
          day: "Day 5",
          title: "Dead Sea & Farewell Amman",
          items: [
            "Private transfer from Wadi Rum to the Dead Sea (JD 60–90, 3 hours).",
            "11:00am — Dead Sea at a mid-range resort (Dead Sea Marriott or Mövenpick Dead Sea, JD 30–50 day-use fee including beach access, towels, and facilities). The resort beaches are better maintained, less crowded than public beaches, and the poolside service is welcome after days in the desert.",
            "1:00pm — Lunch at the resort (JD 15–25). The Dead Sea views from the resort terraces are excellent.",
            "3:00pm — Drive to Amman (1 hour). Check back in to your hotel for a final night.",
            "7:00pm — Farewell dinner at Romero (Amman, JD 25–40/person, international-Jordanian fusion in an elegant setting, consistently excellent).",
          ],
          cost: "$150–220 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$400–900+/day",
      days: [
        {
          day: "Day 1",
          title: "Amman — Six Senses & Private City",
          items: [
            "Check in to Amman Rotana or Four Seasons Amman (JD 200–400/night = $280–560, city and citadel views, exceptional service).",
            "Private transfer from the airport by luxury vehicle (JD 30–50).",
            "11:00am — Private cultural tour of Amman with a historian guide (JD 100–150 for 3 hours) — the Roman, Umayyad, and modern Hashemite layers of the city in context.",
            "1:30pm — Lunch at Fakhreldin (Amman's finest traditional restaurant, JD 30–50/person, Lebanese-Jordanian mezze and mains in a beautiful heritage villa).",
            "4:00pm — Jordan Museum private afternoon visit (JD 200–300 for after-hours access arranged through a tour operator). The Dead Sea Scrolls fragments with a curator-level guide.",
            "8:00pm — Dinner at the hotel's signature restaurant or Beit Sitti (a cooking class and dinner in a traditional Jordanian house, JD 50–70/person, exceptional food and genuine hospitality).",
          ],
          cost: "$400–600 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Petra — Private Dawn Access",
          items: [
            "Private car from Amman to Wadi Musa (2.5 hours, JD 80–120 for a private driver). Check in to Mövenpick Resort Petra (adjacent to the Petra gate, JD 200–350/night = $280–490, the best located luxury property).",
            "Arrange private early access to Petra through the Mövenpick concierge (sites open at 6am but private tours with site access before 9am crowds are possible). A private licenced guide: JD 80–120 for a full day.",
            "9:00am — Private guided Petra: Treasury to Monastery in the correct sequence with a specialist. The guide's knowledge of Nabataean caravan trade, hydraulic engineering, and astronomical symbolism transforms the experience.",
            "1:00pm — Lunch at the Mövenpick resort (JD 20–35) or a private picnic arranged inside the site near the High Place.",
            "4:00pm — Petra at golden hour. The cliffs turn deep rose to crimson as the sun descends. The Urn Tomb and the Royal Tombs look best from 4–5:30pm.",
            "8:00pm — Petra Night Show with private seating (JD 14 entry, arrange front row through your hotel concierge).",
          ],
          cost: "$350–550 total",
        },
        {
          day: "Day 3",
          title: "Petra Deep Dive & Little Petra",
          items: [
            "6:00am — Monastery (Ad Deir) at dawn with private guide. The 850-step climb at sunrise with an expert — discussing the Nabataean sacred landscape — is a genuinely moving experience.",
            "10:00am — Private horse ride through the Siq and colonnaded street (arranged through the Petra authority, JD 50–80 for 1 hour on horseback).",
            "12:30pm — Little Petra (Siq al-Barid) with private driver. The painted dining room ceilings are the only Nabataean frescoes that survive — remarkable colour after 2,000 years.",
            "3:00pm — Wadi Rum transfer by private car (JD 60–80). Check in to Bubble Luxe camp or Hasan Zawaideh Luxury camp (JD 150–250/person all-inclusive).",
            "6:00pm — Private sunset camel ride and Bedouin tea ceremony.",
            "9:00pm — Dinner under the stars: zarb meal with Bedouin hosts. Oudh music played from a camp fire. The silence of Wadi Rum after midnight is profound.",
          ],
          cost: "$300–500 total",
        },
        {
          day: "Day 4",
          title: "Wadi Rum by Hot Air Balloon & Helicopter",
          items: [
            "6:00am — Hot air balloon over Wadi Rum at sunrise (JD 150–200/person, 1 hour flight). The Martian landscape viewed from above is genuinely unlike anything else on earth. Book through Royal Aero Sports Club Jordan well in advance.",
            "10:00am — Private helicopter scenic flight over Wadi Rum, Aqaba, and the Gulf of Aqaba (JD 300–500 for the helicopter, up to 4 passengers). The aerial view of the sandstone mountains and the red desert extending to the horizon is extraordinary.",
            "1:00pm — Lunch at camp. Afternoon: private rock climbing or canyon walk with a Bedouin guide (JD 50–80 for 3 hours).",
            "5:00pm — Private jeep transfer to Aqaba (1 hour). Check in to Kempinski Hotel Aqaba (JD 150–280/night, Red Sea views, excellent diving access).",
            "8:00pm — Dinner at the Kempinski's restaurant (JD 40–60/person, fresh Red Sea fish, mezze). The lights of Israel, Egypt, and Saudi Arabia are visible across the Gulf of Aqaba from the terrace.",
          ],
          cost: "$500–900 total",
        },
        {
          day: "Day 5",
          title: "Dead Sea Luxury & Farewell",
          items: [
            "Private car from Aqaba to Dead Sea (2.5 hours, JD 80–100 with driver).",
            "11:00am — Dead Sea at the Kempinski Hotel Ishtar Dead Sea or Mövenpick Dead Sea (day use JD 50–80, includes private beach, facilities, and service). The infinity pool overlooking the Dead Sea at these properties is spectacular.",
            "1:00pm — Private Dead Sea body treatment: mud wrap, salt scrub, and floating session with a spa therapist (JD 80–120, arranged through the hotel spa).",
            "3:00pm — Lunch at the hotel restaurant (JD 30–50/person) with Dead Sea views.",
            "5:00pm — Transfer to Amman airport (1 hour, JD 30–50 private car) for departure.",
            "Note: If departing the next day, overnight at Four Seasons Amman and have a final dinner at Cantaloupe (Weibdeh, JD 40–70/person, Amman's most celebrated rooftop restaurant).",
          ],
          cost: "$350–600 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$15–30", food: "$10–20", transport: "$5–15", activities: "$10–25", total: "$40–90/day" },
    { tier: "✨ Mid-Range", accommodation: "$70–130", food: "$25–50", transport: "$15–30", activities: "$20–45", total: "$130–255/day" },
    { tier: "💎 Luxury", accommodation: "$280–560", food: "$60–150", transport: "$40–120", activities: "$80–200", total: "$460–1,030/day" },
  ],
  mistakes: [
    {
      icon: "🎫",
      title: "Buying Petra Tickets Separately Instead of Jordan Pass",
      desc: "A 2-day Petra ticket costs JD 55 ($77). The Jordan Pass (JD 75 for 2-day Petra) costs JD 75 but includes the visa on arrival (JD 40 value) and 40+ additional sites including Jerash, Amman Citadel, Wadi Rum entry, and the Petra Night Show. If you're visiting Petra for 2 days and staying 3+ nights, the Jordan Pass saves you JD 20 and includes everything. Buy at jordanpass.jo before you fly.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⛰️",
      title: "Skipping the Monastery Because of the Steps",
      desc: "The Monastery (Ad Deir) is 850 steps from the main Petra route. Most tourists turn back at the sign and see only the Treasury and the main colonnaded street. The Monastery is larger, more impressive, and less crowded than the Treasury. The climb takes 45 minutes at a normal pace. Go early morning (before 9am) when it is empty and cool. The view from the ridge behind the Monastery extends to Israel — one of the great views in the Middle East.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌞",
      title: "Visiting Petra at Midday in Summer",
      desc: "Petra in summer midday (July–August, 11am–3pm) reaches 43°C. The rock walls absorb heat and there is minimal shade on the main routes. Heat exhaustion cases are evacuated from the site daily in peak summer. Enter at 6am opening, cover the main sites by noon, and return in late afternoon (4–6pm) when temperatures drop and the light is spectacular. Bring 2 litres of water per person minimum.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌌",
      title: "Skipping the Wadi Rum Overnight",
      desc: "Many travellers visit Wadi Rum as a half-day trip and return to Aqaba or Petra. This misses the entire point. The reason to go to Wadi Rum is the night sky — zero light pollution, 300+ clear nights per year, the Milky Way visible and bright to the naked eye. You need to be there after 10pm for the full experience. Budget camps (JD 40–50 all-inclusive) are simple but comfortable. Sleeping under the stars in the desert is one of the genuinely transformative travel experiences.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Petra at 7am: Treasury with Nobody in It",
      desc: "Petra opens at 6am. Walk through the Siq at 6:30–7am and you will arrive at the Treasury with a handful of other early risers. The morning light hits the facade beautifully from 8–10am. By 10am the first tour groups arrive. By 11am it is crowded. By noon the heat is intense. The difference between 7am Petra and 11am Petra is the difference between a pilgrimage and a queue. Set your alarm.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏛️",
      title: "The Monastery at 6am: The Best Dawn in Jordan",
      desc: "If you're staying in Wadi Musa, enter Petra at 6am and walk directly to the Monastery route (left past the Treasury, follow the signs to Ad Deir). Climb the 850 steps as the sun rises. The Monastery at 7am, lit in pink-gold dawn light with no other visitors, is one of the most extraordinary sights in the entire Middle East. Bring water, wear proper shoes, and go early.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏜️",
      title: "Wadi Rum Sunset from the Dunes",
      desc: "Ask your Bedouin guide to position the jeep on the highest accessible dune for sunset (usually around 5:30–6pm depending on season). The light in Wadi Rum transitions from red to orange to purple to deep violet in the 45 minutes after sunset — the 'Martian light' that made the desert a filming location for multiple space-set films. The silence combined with this light is something that is difficult to describe and impossible to replicate anywhere else.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌊",
      title: "Dead Sea Early Morning: Before the Buses",
      desc: "The public Dead Sea beaches and resort day beaches fill up with tour buses from 11am onward. Arrive before 9am for a peaceful float. The water temperature is warm year-round (28–32°C) and the buoyancy — completely unable to sink — is genuinely remarkable. Do not shave the day before. Do not splash water in your eyes under any circumstances. The salt concentration (33%) makes eye contact intensely painful and requires immediate fresh water flushing.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is the Jordan Pass worth it for Indian travellers?",
      a: "Yes, emphatically. The Jordan Pass (JD 70 for 1-day Petra, JD 75 for 2-day) includes the Jordanian visa (which costs JD 40 on its own), Petra entry (JD 50 for 2 days separately), the Wadi Rum entry fee, and 40+ other sites. For any traveller staying 3+ nights in Jordan and visiting Petra, the Jordan Pass saves a minimum of JD 15–20 and eliminates the visa queue at the airport. Buy at jordanpass.jo before your flight — it must be purchased before arrival.",
    },
    {
      q: "Is Jordan safe to visit?",
      a: "Jordan is one of the safest countries in the Middle East for tourists. It has maintained political stability and has a strong tradition of hospitality toward visitors. Crime against tourists is rare. The main practical concerns are heat (dress modestly, carry water), aggressive vendor solicitation in Petra (firm but polite refusal works), and driving at night on desert roads (avoid if possible). The State Department and UK Foreign Office generally rate Jordan as safe for standard tourist activities. Register with your country's embassy if you are concerned.",
    },
    {
      q: "How many days do you need in Petra?",
      a: "Two days minimum. Day 1: the Siq, Treasury, Colonnaded Street, Great Temple, and Royal Tombs — this is the main circuit and takes a full day. Day 2: the Monastery (Ad Deir) early morning, the High Place of Sacrifice, Little Petra (separate site, 7km away, free). Three days allows you to slow down, revisit the Treasury at different times of day, and explore the less-visited valleys without rushing. The Jordan Pass offers 1-day, 2-day, and 3-day Petra options — choose based on your schedule.",
    },
    {
      q: "How do I visit the Dead Sea from Amman?",
      a: "The Dead Sea is 1 hour from Amman by road (60km). Options: (1) Private taxi or Uber from Amman (JD 25–35 one way, negotiate the return journey before you leave). (2) JETT public bus from Amman's 7th Circle station (JD 10 return, runs daily). (3) A day tour from Amman (JD 30–50 per person including transport, entry, and sometimes lunch). The Dead Sea Highway is straightforward and most Amman hotels can arrange transport. Visit on a weekday — the beaches are significantly less crowded than weekends.",
    },
    {
      q: "Can I cross from Jordan to Israel?",
      a: "Yes. Jordan and Israel have formal peace since 1994 and open border crossings. The main crossings: (1) Allenby Bridge / King Hussein Bridge (near Amman) — connects to the West Bank and Jerusalem, busiest crossing, open Sunday–Thursday and some weekend hours. (2) Yitzhak Rabin / Wadi Araba Crossing (near Aqaba/Eilat) — the most convenient crossing when visiting Petra, connects to Eilat in Israel, open 7 days. Note: if you have an Israeli stamp in your passport, you may face difficulties entering some Arab countries (Lebanon, Syria, Libya). Ask Israeli border staff to stamp a separate paper instead of your passport.",
    },
  ],
  combineWith: ["dubai-4-days", "egypt-5-days", "istanbul-4-days"],
  relatedSlugs: ["dubrovnik-4-days", "switzerland-5-days", "paris-5-days"],
  galleryQuery: "petra jordan wadi rum dead sea treasury nabataean",
};

export const metadata: Metadata = {
  title: "Jordan in 5 Days: Petra, Wadi Rum, Dead Sea & Amman (2026)",
  description: "Complete 5-day Jordan guide with Petra timing secrets, Jordan Pass strategy, Wadi Rum overnight, Dead Sea tips, and real dollar costs for every budget.",
  keywords: ["jordan itinerary 5 days", "jordan travel guide 2026", "petra travel guide", "wadi rum overnight", "dead sea jordan", "jordan pass worth it", "amman travel guide"],
  openGraph: {
    title: "Jordan in 5 Days: Petra, Wadi Rum & Dead Sea Guide",
    description: "Petra at 7am, the Monastery most people miss, Wadi Rum stargazing, and real dollar costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?w=1200&q=80", width: 1200, height: 630, alt: "Petra Jordan Al-Khazneh Treasury rose-red rock facade" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Jordan in 5 Days (2026)", description: "Petra, Wadi Rum, Dead Sea — complete guide with real costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/jordan-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Jordan in 5 Days: Petra, Wadi Rum, Dead Sea & Amman (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?w=1200&q=80",
      description: "Complete 5-day Jordan travel guide covering Petra timing, Jordan Pass strategy, Wadi Rum overnight, Dead Sea, and Amman — real dollar costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Jordan 5 Days", item: "https://www.incredibleitinerary.com/blog/jordan-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Jordan",
      description: "Middle Eastern kingdom home to the ancient Nabataean city of Petra, the Martian desert of Wadi Rum, the Dead Sea, and the chaotic warmth of Amman.",
      touristType: ["History enthusiasts", "Adventure travelers", "Desert lovers", "Archaeological tourists"],
      geo: { "@type": "GeoCoordinates", latitude: 30.3285, longitude: 35.4444 },
    },
  ],
};

export default function JordanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
