import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Amman",
  country: "Jordan",
  countryFlag: "🇯🇴",
  slug: "amman-4-days",
  heroQuery: "amman jordan citadel city skyline",
  heroAlt: "Amman city panorama from the Citadel hill with the Roman Temple of Hercules in the foreground",
  category: "Middle East",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Amman is the Middle East's most underestimated capital — a city of hills where a Roman temple sits above a living souk, where the best mansaf lamb you will ever eat is served on newspaper on a plastic table, and where day trips reach two UNESCO World Heritage sites in opposite directions. Four days unlocks Petra's rose-red tombs, Wadi Rum's Martian desert, a salt-slicked float on the Dead Sea, and Rainbow Street cafe culture in the cool evenings. Jordan is one of the safest and most welcoming countries in the region.",
  stats: {
    duration: "4 Days",
    budgetFrom: "JOD 30",
    bestMonths: "Mar–May or Sep–Nov",
    airport: "AMM",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Citadel & Downtown" },
    { id: "day2", emoji: "📅", label: "Day 2 — Petra Day Trip" },
    { id: "day3", emoji: "📅", label: "Day 3 — Wadi Rum Desert" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa on Arrival",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Visa on Arrival at Queen Alia International Airport"],
        ["Processing", "15–30 minutes on arrival"],
        ["Fee", "JOD 40 single-entry (approx. USD 56)"],
        ["Validity", "30 days single-entry"],
        ["Jordan Pass", "Highly recommended — covers visa fee + 40 sites including Petra (save JOD 85+)"],
        ["Documents", "Return ticket, hotel confirmation, sufficient funds"],
        ["Notes", "Jordan Pass must be purchased BEFORE arrival to waive the visa fee. Buy online at jordanpass.jo"],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa on Arrival",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa on Arrival"],
        ["Processing", "15–30 minutes on arrival"],
        ["Fee", "JOD 40 (waived with Jordan Pass purchased before arrival)"],
        ["Validity", "30 days single-entry, extendable"],
        ["Jordan Pass", "Covers visa + entry to Petra and 40+ other sites — buy at jordanpass.jo"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Notes", "Jordan is one of the most welcoming countries for tourism. Border crossing from Israel also possible."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "JOD 30–45/day",
      days: [
        {
          day: "Day 1",
          title: "Citadel, Roman Theatre & Downtown Souks",
          items: [
            "09:00 — Amman Citadel (Jabal al-Qala'a) — entry JOD 3; the hilltop holds the Roman Temple of Hercules, an Umayyad Palace, and the Archaeological Museum; views over Amman's white-stone hills are free from the terrace",
            "11:00 — Walk down the 1,000 steps to the Roman Theatre in Downtown — entry JOD 3; the 2nd-century theatre seats 6,000 and is one of the best-preserved Roman structures in the Middle East",
            "12:30 — Lunch in downtown souks at Hashem Restaurant (open since 1952) — foul (fava beans), hummus, and falafel with warm flatbread for under JOD 3/person; no reservations, always crowded with locals",
            "14:30 — Walk the Gold Souk and Souk Jara area — browse spice shops, dried fruit vendors, and silver jewellery stalls; the souk labyrinth between the 1st and 3rd circles is the most atmospheric",
            "19:00 — Rainbow Street in the evening for coffee culture; a slice of knafeh (cheese pastry soaked in syrup) from a street vendor for JOD 1 and a cafe seat with city views",
          ],
          cost: "JOD 12–18 (museums, food, coffee, transport)",
        },
        {
          day: "Day 2",
          title: "Petra Day Trip (UNESCO Wonder)",
          items: [
            "05:30 — Depart Amman by JETT bus to Petra (JOD 12 return, departs 06:30 from Abdali station) — the 3-hour journey through the King's Highway landscape is worth doing in daylight",
            "09:30 — Enter Petra through the Siq gorge — the 1.2km canyon narrows to 3 metres wide before revealing the Treasury (Al-Khazneh); arrive early to see it without crowds; entry included with Jordan Pass or JOD 50 day ticket",
            "11:00 — Walk the Colonnaded Street to the Great Temple, the Qasr al-Bint Nabataean temple, and the Royal Tombs carved into the pink sandstone cliffs",
            "13:00 — Lunch at a cave restaurant inside Petra (JOD 6–8 for a vegetable dish and bread) — several basic restaurants operate inside the site near the Basin area",
            "15:00 — Hike to the Monastery (Ad Deir) — 800 steps up, 45-minute climb, the structure is even larger than the Treasury and has far fewer visitors",
            "17:00 — Return to Petra Visitor Centre and board JETT bus back to Amman (arrives 20:00)",
          ],
          cost: "JOD 65–75 (bus, entry if no Jordan Pass, lunch)",
        },
        {
          day: "Day 3",
          title: "Wadi Rum Desert Camp",
          items: [
            "07:00 — Shared minivan from Amman to Wadi Rum village (JOD 15–18, departs Wehdat bus station) — 4-hour journey through the south of Jordan",
            "11:30 — Arrive Wadi Rum: entry fee JOD 5; arrange a 4x4 jeep tour with a Bedouin driver (JOD 25–35 for 3 hours) to reach Lawrence Spring, Mushroom Rock, and the vast red sand dunes",
            "17:00 — Check in to a budget Bedouin camp (JOD 25–35/night all-inclusive) — basic but authentic; dinner is mansaf lamb or zarb (underground barbecue), tea around the fire, and extraordinary star-gazing",
            "20:00 — Bedouin camp dinner and stargazing; the absence of light pollution in Wadi Rum makes the Milky Way visible with the naked eye",
          ],
          cost: "JOD 70–90 (transport, entry, jeep tour, camp)",
        },
        {
          day: "Day 4",
          title: "Dead Sea Float & Amman Departure",
          items: [
            "07:00 — Return bus from Wadi Rum to Aqaba (JOD 5), then north to Dead Sea (shared taxi JOD 8–10)",
            "11:00 — Dead Sea public beach (Amman Beach, JOD 20 day entry including sunbeds and shower) — float effortlessly in the 33% salinity water; smear the black therapeutic mud and rinse; the lowest point on Earth at 430m below sea level",
            "14:00 — Shared taxi north to Amman (JOD 10) — 1-hour journey on the Dead Sea Highway",
            "16:30 — Mansaf lunch in Amman at Sufra Restaurant (JOD 8–12) — Jordan's national dish of lamb slow-cooked in fermented dried yoghurt sauce (jameed) served over rice with flatbread; traditionally eaten communally with the right hand",
            "19:00 — Return to Amman for airport transfer (JOD 20 by Uber to Queen Alia International Airport)",
          ],
          cost: "JOD 55–75 (transport, Dead Sea, mansaf, airport transfer)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "JOD 90–140/day",
      days: [
        {
          day: "Day 1",
          title: "Citadel, Roman Theatre & Rainbow Street",
          items: [
            "09:00 — Check in to a 3-star hotel in Jabal Amman or Shmeisani (JOD 50–80/night) — the 1st and 2nd circle neighbourhoods put you walking distance from Rainbow Street and the downtown sights",
            "10:00 — Amman Citadel with Jordan Pass or JOD 3 entry — spend 1.5 hours exploring the Roman Temple and Umayyad Palace; the panoramic views require no ticket",
            "12:00 — Roman Theatre and Nymphaeum (JOD 3 combined) — the Forum site map from the visitor centre points to lesser-known Roman remains in the surrounding streets",
            "13:30 — Lunch at Sufra Restaurant on Rainbow Street (JOD 12–18) — the best upscale traditional Jordanian menu in Amman; order the mixed mezze, mansaf for two, and kunafa for dessert",
            "16:00 — Rainbow Street afternoon: art galleries, the Wild Jordan nature-themed cafe (excellent juices), and independent boutiques selling Bedouin jewellery and ceramics",
            "20:00 — Dinner at Fakhreldin restaurant (JOD 20–30/pp) — Amman's most refined Lebanese-Jordanian menu in a 1950s villa garden setting",
          ],
          cost: "JOD 100–130 (hotel, sites, meals)",
        },
        {
          day: "Day 2",
          title: "Petra Full Day — Treasury to Monastery",
          items: [
            "05:00 — Private car to Petra (JOD 45–60 one-way, shared service JOD 15 from Abdali) — private car allows a 05:30 departure to reach the Siq before the first tour buses",
            "08:30 — Petra by Dawn: the Siq and Treasury before 09:00 when large groups arrive; the light in the Treasury alcove is perfect from 09:00–10:30",
            "11:00 — Petra Kitchen cooking experience (book in advance, JOD 35/pp) — learn to prepare 7 Jordanian dishes with a local family inside a camp near the Visitor Centre; includes lunch",
            "14:00 — Monastery hike with local guide (JOD 15 for 2 hours) — the guide reveals carved tombs, Nabataean inscriptions, and a panoramic viewpoint beyond the Monastery that 95% of visitors miss",
            "17:30 — Return to Visitor Centre; JETT bus or private car back to Amman",
          ],
          cost: "JOD 110–140 (transport, entry, cooking class, guide)",
        },
        {
          day: "Day 3",
          title: "Wadi Rum Luxury Camp & Sunset",
          items: [
            "07:00 — Private car Amman to Wadi Rum (JOD 70 one-way) — 3.5-hour journey; arrange for driver to return the following morning",
            "11:30 — Arrive Wadi Rum; check in to a mid-range Martian Tent camp (JOD 80–120/night all-inclusive) — transparent dome or geodesic tent with proper bed and en-suite bathroom",
            "12:30 — 4x4 half-day tour (JOD 55–75, private 3-hour jeep with English-speaking guide) — Khazali Canyon inscriptions, Um Fruth rock bridge, and Lawrence of Arabia filming locations",
            "17:00 — Sunset from a high sand dune summit; Bedouin tea ceremony at camp",
            "20:00 — Zarb underground barbecue dinner with Bedouin music; the wood-fired underground oven slow-cooks lamb, chicken, and vegetables for 3 hours",
          ],
          cost: "JOD 200–250 (car, camp, jeep tour, food)",
        },
        {
          day: "Day 4",
          title: "Dead Sea Float & Departure",
          items: [
            "08:00 — Private car Wadi Rum to Dead Sea (JOD 80) — 2.5-hour journey along the desert highway",
            "11:00 — Movenpick Resort Dead Sea day-use pass (JOD 35–50 includes beach, pool, shower) — the resort has the best-maintained beach access and poolside service on the Jordanian Dead Sea shore",
            "13:00 — Lunch at the resort poolside restaurant (JOD 18–25) — cold mezze, grilled fish, and freshly squeezed pomegranate juice",
            "15:30 — Private car to Amman (JOD 50) for airport or city hotel overnight",
            "18:00 — Final dinner on Rainbow Street before late flight departure",
          ],
          cost: "JOD 180–220 (car, Dead Sea resort, meals)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "JOD 350–700/day",
      days: [
        {
          day: "Day 1",
          title: "Citadel Private Tour & Rooftop Amman",
          items: [
            "12:00 — Check in to the Amman Rotana or The House Boutique Hotel (JOD 200–400/night) — rooftop pool views over Amman's white limestone hills toward the Citadel",
            "14:00 — Private archaeologist-guided tour of the Citadel and downtown Roman remains (2.5 hours, JOD 120) — a Jordanian archaeologist walks you through the Umayyad Palace excavation and explains the archaeological layers from Bronze Age to Ottoman",
            "17:00 — Traditional hammam at a restored Ottoman bathhouse (JOD 45–60 for full treatment) — Amman's historic hammam culture includes steam, scrub, and mint tea",
            "20:30 — Dinner at Fakhreldin or Sufra (JOD 50–70/pp) — the finest traditional Jordanian-Lebanese menus in a heritage villa setting; the lamb ouzi and mixed hot mezze are essential",
          ],
          cost: "JOD 400–600 (hotel, private guide, hammam, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Petra by Night + Monastery",
          items: [
            "04:00 — Private luxury car to Petra, arriving before opening (JOD 90 one-way) — sunrise arrival means 90 minutes of the Siq and Treasury in near-solitude before tour groups arrive",
            "07:00 — Petra Treasury at sunrise with a private licensed guide (JOD 150 for full-day private guide) — the guide provides historical context, takes you to the High Place of Sacrifice, and knows every trail shortcut",
            "13:00 — Lunch at Basin Restaurant inside Petra (JOD 20–25/pp) with reserved seating",
            "15:00 — Monastery hike and sunset from the high viewpoint with guide; the light on the Wadi Araba valley at sunset is extraordinary",
            "19:30 — Petra by Night experience (Monday, Wednesday, Thursday; JOD 17) — 2,000 candles light the Siq and Treasury for a 45-minute candlelit walk with Bedouin music",
            "22:00 — Private car back to Amman or to luxury Wadi Rum camp",
          ],
          cost: "JOD 300–420 (car, entry, private guide, Petra by Night)",
        },
        {
          day: "Day 3",
          title: "Wadi Rum Luxury Desert Experience",
          items: [
            "08:00 — Private helicopter transfer from Amman or Aqaba to Wadi Rum (JOD 800–1,200 for up to 4 people) — 40-minute flight over the desert landscape is the most dramatic arrival possible",
            "10:00 — Arrive at a luxury Wadi Rum camp such as Sun City Camp or Memories Aicha (JOD 200–350/night all-inclusive) — private bubble tent or luxury Martian dome with private bathroom, heated floors, and stargazing skylight",
            "12:00 — Private 4x4 guided tour (JOD 150 full day, private jeep and English guide) — includes canyons, Nabataean inscriptions, rock bridges, and dune surfing",
            "19:00 — Gourmet zarb dinner prepared by the camp chef with Jordanian wine and Bedouin music around the fire",
          ],
          cost: "JOD 500–800 (helicopter, luxury camp, jeep, dinner)",
        },
        {
          day: "Day 4",
          title: "Dead Sea Luxury Spa & Departure",
          items: [
            "09:00 — Private transfer Wadi Rum to Kempinski Hotel Ishtar Dead Sea (JOD 90 car transfer)",
            "11:00 — Kempinski Dead Sea spa day pass (JOD 80–120 including beach, pool, and spa facilities) — the most luxurious Dead Sea resort in Jordan with terraced pools, private beach, and mineralogy spa",
            "12:30 — Lunch at the Kempinski pool restaurant (JOD 30–45/pp) — Dead Sea fish, Lebanese mezze, and champagne",
            "15:00 — Dead Sea mud treatment and 45-minute floatation session; rinse in the mineral spring shower pools",
            "17:00 — Private luxury car to Amman Airport for departure (JOD 100)",
          ],
          cost: "JOD 400–600 (spa resort, transfer, meals, airport car)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "🎒 Backpacker",
      accommodation: "JOD 8–15 (hostel dorm)",
      food: "JOD 3–6 (falafel, hummus, street food)",
      transport: "JOD 2–5 (service taxis, local buses)",
      activities: "JOD 3–10 (downtown sights, free citadel terrace)",
      total: "JOD 16–30/day",
    },
    {
      tier: "💰 Budget",
      accommodation: "JOD 15–25 (hostel private room or budget guesthouse)",
      food: "JOD 5–10 (street food, hummus restaurants)",
      transport: "JOD 5–10 (shared taxis, local buses)",
      activities: "JOD 5–15 (select sites, Jordan Pass pays off)",
      total: "JOD 30–45/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "JOD 50–80 (3-star hotel)",
      food: "JOD 20–35 (restaurants + cafes)",
      transport: "JOD 15–30 (taxis + JETT bus)",
      activities: "JOD 20–40 (Jordan Pass + guided tours)",
      total: "JOD 90–140/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "JOD 200–400 (5-star hotel or luxury desert camp)",
      food: "JOD 80–150 (fine dining + resort restaurants)",
      transport: "JOD 80–200 (private car + helicopter)",
      activities: "JOD 100–250 (private guides + helicopter)",
      total: "JOD 350–700+/day",
    },
    {
      tier: "👑 Ultra-Luxury",
      accommodation: "JOD 500–1,000 (Amman Rotana penthouse)",
      food: "JOD 200–400 (private chef, Wadi Rum sous vide)",
      transport: "JOD 200–500 (private helicopter Amman–Petra)",
      activities: "JOD 300–600 (exclusive Petra sunrise + private Wadi Rum)",
      total: "JOD 1,000–2,000+/day",
    },
  ],
  mistakes: [
    {
      icon: "🎫",
      title: "Not buying the Jordan Pass before arrival",
      desc: "The Jordan Pass (from JOD 70) covers the JOD 40 visa fee plus entry to 40+ sites including Petra. If you plan to visit Petra, the Jordan Pass saves JOD 15+ and must be purchased online BEFORE you land. Never buy it on arrival — the visa exemption only works if you have it pre-departure.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⏰",
      title: "Spending only one day in Petra",
      desc: "Petra's main trail — the Siq, Treasury, and Colonnaded Street — takes 4 hours. Add the Monastery hike (2 hours), High Place of Sacrifice (1.5 hours), and Royal Tombs (1 hour) and you need two full days. A 2-day Petra entry ticket costs JOD 75 versus JOD 50 for one day — extraordinary value.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌡️",
      title: "Visiting in July or August",
      desc: "Wadi Rum reaches 45C and Petra's sandstone reflects intense heat in July and August. March to May and September to November are ideal: warm days, cool evenings, and Petra crowds are 30–40% lower. Wadi Rum winter nights (Dec–Feb) drop to 0C — bring a sleeping bag even for Bedouin camps.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚌",
      title: "Relying on public transport for Wadi Rum",
      desc: "JETT buses only run Amman-Aqaba, not directly to Wadi Rum village. You need to arrange a local driver from the highway turn-off (15km) or book through your camp. Plan transport in advance or hire a private car for the full southern circuit (Petra + Wadi Rum + Dead Sea in one efficient loop).",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🥘",
      title: "Missing mansaf at a traditional restaurant",
      desc: "Mansaf — Jordan's national dish of lamb in fermented yoghurt sauce over rice — is only properly made in specialist restaurants. Tourist hotels serve a pale version. Ask for Al Sufra, Tawaheen al-Hawa, or any restaurant in a non-tourist neighbourhood where Jordanians actually eat for the authentic experience.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌄",
      title: "Arrive at the Petra Treasury before 8am",
      desc: "The Treasury is most photographed between 08:00 and 10:00 when sunlight catches the carved facade. The Siq corridor at 07:00 is often empty. Tour buses from Aqaba arrive from 09:30 and group tours from Amman from 10:00. Book guided Petra tours at https://www.getyourguide.com/s/?q=Petra+Jordan&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏨",
      title: "Stay in Wadi Rum for at least one night",
      desc: "A day trip to Wadi Rum misses the desert's essential quality: silence, darkness, and the billion-star sky. Budget camps (JOD 25–35 all-inclusive) deliver the same stars as luxury camps. Book accommodation at https://www.booking.com/region/jo/wadi-rum.html?aid=" + process.env.NEXT_PUBLIC_BOOKING_AID,
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "💰",
      title: "Haggle at the souk but not at restaurants",
      desc: "Bargaining is expected at souvenir stalls, souk jewellery vendors, and informal Bedouin craft sellers — offer 50–60% of the first price and settle around 70%. Restaurants, official sites, and transport (Uber or metered taxis) have fixed prices. Attempting to haggle at a restaurant is considered rude.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "📱",
      title: "Download Google Maps offline for Amman",
      desc: "Amman's addressing system uses circle numbers (1st Circle, 2nd Circle) and neighbourhood names rather than street names. Google Maps works excellently but download offline maps before leaving your hotel. Uber is widely available and far more reliable than hailing taxis for foreigners.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Jordan safe for tourists in 2026?",
      a: "Jordan is consistently rated one of the safest countries in the Middle East for tourism. The main tourist areas — Amman, Petra, Wadi Rum, and the Dead Sea — have an excellent safety record. Jordan has a large, professional tourism police force and locals are genuinely welcoming to foreign visitors. Standard urban precautions apply in Amman at night, but solo travel including solo female travel is widely reported as comfortable.",
    },
    {
      q: "How much does Petra cost to enter?",
      a: "Petra entry costs JOD 50 for one day, JOD 55 for two days, and JOD 60 for three days. With the Jordan Pass (from JOD 70, purchased online before arrival), entry to Petra and 40+ other sites is included, plus the JOD 40 visa fee is waived. For any stay of 2+ days visiting Petra, the Jordan Pass saves at least JOD 20 over paying separately.",
    },
    {
      q: "What is the best way to combine Petra and Wadi Rum?",
      a: "The classic southern Jordan loop takes 2 nights: night 1 in Petra village (Wadi Musa), full day in Petra, morning in Petra on day 2, afternoon transfer to Wadi Rum (1.5 hours), night 2 in a Bedouin desert camp, morning in Wadi Rum on day 3, then either back to Amman via the Dead Sea or south to Aqaba for the Red Sea. A private car for the full circuit costs JOD 120–160 and gives maximum flexibility.",
    },
    {
      q: "What should I eat in Amman beyond hummus?",
      a: "Amman has one of the Arab world's best food scenes. Must-eat dishes: mansaf (lamb in jameed yoghurt sauce, the national dish), makloubeh (upside-down rice and vegetable pot), zarb (underground Bedouin barbecue in Wadi Rum), knafeh (hot cheese pastry soaked in orange-blossom syrup from Na'eem Sweets), and musakhan (roasted chicken on flatbread with sumac and onions). Rainbow Street's cafes serve excellent Turkish coffee and the fresh juice stands downtown make pomegranate and carrot blends for JOD 1.",
    },
  ],
  combineWith: ["jordan-5-days", "jerusalem-4-days", "egypt-7-days"],
  relatedSlugs: ["jordan-5-days", "jerusalem-4-days", "egypt-7-days", "doha-3-days"],
};

export const metadata: Metadata = {
  title: "Amman in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Amman itinerary — Citadel, downtown souks, Petra day trip, Wadi Rum desert camp, Dead Sea float, mansaf lamb, and Rainbow Street cafes. Budget JOD 30/day to luxury. All visa info included.",
  keywords: [
    "Amman itinerary",
    "Amman 4 days",
    "Jordan travel guide 2026",
    "Petra day trip from Amman",
    "Wadi Rum desert camp",
    "Dead Sea Jordan",
    "mansaf Jordan",
    "Amman visa Indian passport",
  ],
  openGraph: {
    title: "Amman in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Citadel, Petra, Wadi Rum, Dead Sea, mansaf, and Rainbow Street — Amman and Jordan in 4 days from JOD 30/day to luxury camps.",
    type: "article",
    url: `${siteUrl}/blog/amman-4-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Amman in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Citadel, Petra, Wadi Rum, Dead Sea, mansaf, and Rainbow Street — Amman and Jordan in 4 days from JOD 30/day to luxury camps.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/amman-4-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Amman in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Amman in 4 Days",
          item: `${siteUrl}/blog/amman-4-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Amman",
      description:
        "Amman, Jordan — Roman Citadel, downtown souks, gateway to Petra and Wadi Rum, mansaf cuisine, Dead Sea, and Rainbow Street cafe culture.",
      geo: { "@type": "GeoCoordinates", latitude: 31.9539, longitude: 35.9106 },
    },
  ],
};

export default function AmmanPage() {
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
