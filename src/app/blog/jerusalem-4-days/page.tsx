import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

export const metadata: Metadata = {
  title: "Jerusalem in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
  description:
    "The ultimate Jerusalem travel guide — Western Wall, Dome of the Rock, Church of the Holy Sepulchre, Via Dolorosa, Yad Vashem, and a Dead Sea day trip. Budget ($60/day) to luxury ($320/day) itineraries for every traveller.",
  keywords: [
    "Jerusalem travel guide",
    "Jerusalem itinerary 4 days",
    "Old City Jerusalem",
    "Western Wall",
    "Dome of the Rock",
    "Church of the Holy Sepulchre",
    "Via Dolorosa",
    "Yad Vashem",
    "Dead Sea day trip",
    "Israel travel 2026",
    "Jerusalem budget travel",
    "Jerusalem things to do",
    "Mahane Yehuda market",
    "Ein Gedi",
    "Jewish Quarter",
    "Muslim Quarter",
    "Christian Quarter",
    "Armenian Quarter",
  ],
  openGraph: {
    title: "Jerusalem in 4 Days: The Complete Travel Guide (2026)",
    description:
      "Three Abrahamic faiths, four quarters, and 3,000 years of civilisation in one walled city. Your complete Jerusalem itinerary — budget to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/jerusalem-4-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jerusalem Old City with Western Wall and Dome of the Rock at golden hour",
      },
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jerusalem-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Jerusalem in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Three Abrahamic faiths, four quarters, and 3,000 years of civilisation. Complete Jerusalem itinerary from $60/day to $320/day.",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/jerusalem-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Jerusalem 4-Day Guide", item: "https://www.incredibleitinerary.com/blog/jerusalem-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Jerusalem",
      description:
        "One of the world's oldest and most sacred cities, home to the Western Wall, Dome of the Rock, Church of the Holy Sepulchre, and the ancient Old City — a UNESCO World Heritage Site.",
      url: "https://www.incredibleitinerary.com/blog/jerusalem-4-days",
      touristType: ["Religious tourists", "History enthusiasts", "Cultural travellers", "Backpackers", "Luxury travellers"],
    },
  ],
};

const data: UniversalBlogData = {
  destination: "Jerusalem",
  country: "Israel",
  countryFlag: "🇮🇱",
  slug: "jerusalem-4-days",
  heroQuery: "jerusalem old city western wall dome of the rock israel",
  heroAlt: "Jerusalem Old City with Western Wall and Dome of the Rock at golden hour",
  category: "Middle East",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro:
    "There is a moment, just after dawn, when the first light catches the gold of the Dome of the Rock and the entire Old City of Jerusalem seems to ignite. Millions of people have folded prayers into the crevices of the Western Wall, worn smooth by 2,000 years of reaching hands. The air inside the Church of the Holy Sepulchre smells of incense, beeswax, and something older — the accumulated weight of centuries of belief. Three Abrahamic faiths coexist within 0.9 square kilometres of limestone walls, separated by a few hundred metres, each claiming the same ground as the centre of the world. And then you turn a corner in the Muslim Quarter and someone presses a spit-roasted shwarma into your hands, and it somehow tastes better for having 3,000 years of civilisation as the backdrop.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$60",
    bestMonths: "Mar–May or Sep–Nov",
    airport: "TLV (Ben Gurion, 50 min)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
    { id: "related", emoji: "📖", label: "Related Guides" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Visa Requirement", "As of 2024, Indian passport holders do NOT require a pre-arranged visa for Israel. A visa on arrival is granted for up to 90 days at Ben Gurion International Airport (TLV). This is a significant policy change — no e-visa application or embassy visit required."],
        ["Immigration Questions", "Israeli border security is thorough. Expect 20–45 minutes of questioning at immigration, especially on your first visit. Questions focus on purpose of visit, who you know in Israel, and your travel history. Answer honestly and confidently. Having hotel bookings and a return ticket ready on your phone speeds this up considerably."],
        ["Israeli Stamp Note", "If you plan to visit Arab countries (Pakistan, Kuwait, Saudi Arabia, UAE at some entry points, Syria, Iraq, Lebanon) after Israel, request that immigration stamp a separate paper insert rather than your passport. Israeli border staff are accustomed to this request and will usually comply without issue."],
        ["Duration & Extension", "90-day visa on arrival, single entry. Extensions can be applied for at the Ministry of Interior in Israel but are rarely granted for tourism. Plan your trip within the 90-day window."],
        ["Currency", "Israeli Shekel (ILS/NIS). 1 USD ≈ 3.7 NIS. ATMs are widely available. Credit cards accepted almost everywhere. Avoid airport exchange desks — use ATMs in the city or exchange at licensed money changers in Mahane Yehuda market area."],
      ],
    },
    {
      flag: "🌍",
      title: "US / UK / EU / AU Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Entry", "Citizens of the US, UK, all EU member states, Australia, Canada, New Zealand, and most Western nations enter Israel visa-free for up to 90 days. No advance application required — present your passport at immigration."],
        ["Border Questioning", "Israeli immigration is known for thorough security questioning regardless of nationality. US and UK citizens may be asked about purpose of travel, connections to the region, and social media presence. First-time visitors are questioned more extensively. This is standard procedure, not cause for alarm."],
        ["Israeli Stamp Policy", "Same as above — if you need a passport free of Israeli stamps for future travel to certain Arab nations, ask for a separate stamp on a paper insert. This is a routine request that immigration handles daily."],
        ["Travel Insurance", "Strongly recommended. Israeli healthcare is world-class but expensive for uninsured foreigners. Ensure your policy covers the Middle East region. Emergency evacuation coverage is worth adding given geopolitical considerations."],
        ["Entry from Jordan", "The Allenby Bridge (King Hussein Bridge) crossing connects Jordan to the West Bank/Jerusalem. This is a common entry point for travellers combining Jordan and Israel. Note: you cannot re-enter Jordan through Allenby after using it once — use the Wadi Araba crossing near Eilat for re-entry."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$60–80/day",
      days: [
        {
          day: "Day 1",
          title: "The Old City — Four Quarters & the Western Wall",
          items: [
            "8:00am — Arrive in Jerusalem from Tel Aviv by train or Egged bus 480 (45 min, ~20 NIS/$5). Check into a hostel in the Jewish Quarter or near Jaffa Gate (budget dorms 80–120 NIS/$22–33/night).",
            "9:30am — Enter the Old City through Jaffa Gate. Walk through the Armenian Quarter — the smallest and quietest of the four quarters, where 15th-century ceramic tilework decorates doorways and the Cathedral of St James dates to the Crusader period.",
            "10:30am — Continue through the Jewish Quarter to the Western Wall (HaKotel). Entry is free. Dress modestly (head coverings available at the entrance). Spend time at the plaza, then walk the Western Wall Tunnels (book in advance, ~35 NIS/$9) to see the wall's full underground length along Herodian street level.",
            "12:30pm — Lunch in the Muslim Quarter: the market streets of Al-Wad and Suq Khan al-Zeit are packed with cheap, excellent food. Falafel sandwich 8 NIS ($2), fresh-squeezed pomegranate juice 10 NIS ($3), knafeh (hot cheese pastry with syrup) 20 NIS ($5). Budget 40 NIS ($11) for a full lunch.",
            "2:00pm — Walk the Via Dolorosa (the Way of the Cross) — 14 Stations of the Cross through the Muslim and Christian Quarters. The path is marked with Roman numerals. You can walk it independently (free) or join a guided Franciscan procession that departs from the 1st Station every Friday at 3pm.",
            "4:00pm — Church of the Holy Sepulchre. Free entry. Built over the site where Jesus was crucified, buried, and (according to Christian tradition) resurrected. The building is shared by six Christian denominations. Visit the Edicule (Jesus's tomb), Golgotha/Calvary (the crucifixion rock), and the Stone of Anointing. Go outside peak hours — early morning or late afternoon — to avoid the worst of the crowds.",
            "6:30pm — Walk through the souvenir-lined Christian Quarter Road back to Jaffa Gate. Dinner at a local hummus joint near Mahane Yehuda Market (outside the Old City, 20-min walk): hummus, pita, and salads for 35–50 NIS ($9–13).",
          ],
          cost: "$55–70 total",
        },
        {
          day: "Day 2",
          title: "Temple Mount, Dome of the Rock & Mount of Olives",
          items: [
            "7:30am — Temple Mount (Har HaBayit) — the most contested religious site on earth. Non-Muslim entry is through the Mughrabi Gate (south of the Western Wall plaza) and is only permitted during very specific hours: Sunday–Thursday 7:30–11:00am and 1:30–2:30pm. Free entry for non-Muslims. Dress very modestly; no religious items, Bibles, or Stars of David. Israeli police and Waqf guards monitor the compound closely.",
            "8:30am — The Dome of the Rock (exterior only for non-Muslims) — the octagonal Islamic shrine with its iconic 24-carat gold dome, built in 691 AD. Photograph it from every angle; this is one of the most-photographed buildings in the world for good reason. Al-Aqsa Mosque is nearby — also exterior viewing only for non-Muslims.",
            "10:00am — Descend through the Dung Gate and take a servis (shared taxi) or walk 20 minutes to the Mount of Olives. The panoramic view of the Old City — with the Dome of the Rock centred against the ancient limestone skyline — is the definitive Jerusalem photograph. Best light is morning.",
            "11:00am — Walk down the Palm Sunday Road from the Mount of Olives through the Jewish Cemetery (the world's oldest and most sacred Jewish burial site, 3,000 years of graves) to the Garden of Gethsemane. The ancient olive trees here are among the oldest living things in the Middle East — some carbon-dated to over 900 years old. Free entry.",
            "1:00pm — Lunch: shawarma and fresh juice from a stand near Lion's Gate (Stephen's Gate) — 45–60 NIS ($12–16) for a full meal.",
            "2:30pm — Tower of David Museum (near Jaffa Gate, ~45 NIS/$12). The museum uses the citadel's towers and moat to tell Jerusalem's 3,000-year history through archaeology and immersive displays. The night sound-and-light show is spectacular if you return in the evening (~80 NIS/$22, book ahead).",
            "7:00pm — Dinner at Mahane Yehuda Market ('the Shuk'). By night it transforms from a produce market into a buzzing restaurant and bar district. Mezze plates, grilled meats, and Israeli wine at informal tables set up between the stalls. Budget 80–120 NIS ($22–33) with drinks.",
          ],
          cost: "$60–75 total",
        },
        {
          day: "Day 3",
          title: "Yad Vashem & Dead Sea Day Trip",
          items: [
            "8:00am — Yad Vashem Holocaust Memorial & Museum. Take bus 17 or 27 from the city centre (20 NIS/$5). Free entry but book a timed slot online (yad-vashem.org) as it fills up. Allow 3–4 hours minimum. The main museum follows the chronological history of the Holocaust across 10 rooms. The Children's Memorial — a single room with 1.5 million candles reflected to infinity — is harrowing and transcendent.",
            "12:30pm — Light lunch near the memorial or back in the city centre (35–50 NIS/$9–13).",
            "2:00pm — Take a bus or shared taxi (servis) to the Dead Sea — the lowest point on earth at 430m below sea level. Buses depart from Jerusalem's Central Bus Station (route 444 or 486, ~30 NIS/$8, 1 hour). Ein Gedi public beach has free access to the sea. Float effortlessly on the mineral-saturated water (10x saltier than the ocean). Don't stay in the water more than 20 minutes, don't shave beforehand, and keep water out of your eyes — it burns severely. Rinse off in the freshwater showers on the beach.",
            "4:00pm — Ein Gedi Nature Reserve (if you have energy): a green oasis of waterfall-fed pools and endemic wildlife immediately adjacent to the Dead Sea. Ibex and hyrax wander the hiking trails. Entry ~30 NIS ($8). The Nahal David trail to Ein Gedi waterfall is 1.5 hours return.",
            "6:30pm — Return bus to Jerusalem. Dinner near Ben Yehuda Street pedestrian mall — pizza or Middle Eastern food, 50–80 NIS ($13–22).",
          ],
          cost: "$55–70 total",
        },
        {
          day: "Day 4",
          title: "East Jerusalem, Hezekiah's Tunnel & Departure",
          items: [
            "8:30am — City of David archaeological park (entry ~45 NIS/$12). The oldest part of Jerusalem, predating the Old City by 1,000 years. Walk through Hezekiah's Tunnel — a 533m underground water channel carved in 701 BC that is still filled with knee-deep water. Bring a waterproof torch and sandals you don't mind getting wet. The audio guide explains how King Hezekiah had this carved to secure Jerusalem's water supply before an Assyrian siege.",
            "11:00am — Ramble through East Jerusalem's Arab market near Damascus Gate — the busiest and most chaotic gate into the Old City. The market sells fruit, spices, household goods, and the best cheap falafel in the city.",
            "12:30pm — Final lunch: Israeli breakfast spread at a café near Mahane Yehuda Market — eggs, hummus, salads, fresh bread, and strong coffee for 50–80 NIS ($13–22). A ritual worth repeating daily.",
            "2:30pm — Wander the rooftops of the Old City. The St James Cathedral rooftop (Armenian Quarter) and the rooftops accessible from the Lutheran Church of the Redeemer (Christian Quarter, ~20 NIS) offer dramatic 360-degree views over the Old City's stone labyrinth.",
            "4:30pm — Last walk along the Old City walls (Ramparts Walk, ~18 NIS/$5). The walkway along the top of the 16th-century Ottoman walls connects Jaffa Gate to Lions Gate with panoramic views into both the Old City and the surrounding neighbourhoods.",
            "6:00pm — Head to Ben Gurion Airport. Train from Jerusalem (Yitzhak Navon station) to TLV airport: 45 minutes, 26 NIS ($7). Arrive 3 hours before international departure — Israeli security is thorough.",
          ],
          cost: "$50–65 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$140–180/day",
      days: [
        {
          day: "Day 1",
          title: "The Old City — Private Guide, Four Quarters & Night at the Wall",
          items: [
            "8:00am — Arrive by train from Tel Aviv and check into a 3-star boutique hotel inside or adjacent to the Old City — Harmony Hotel (near Jaffa Gate) or Legacy Hotel are excellent choices. Rooms $120–160/night.",
            "9:30am — Private walking tour of the Old City with a licensed guide (book via GetYourGuide: https://www.getyourguide.com/s/?q=Jerusalem+Old+City+walking+tour&partner_id=PSZA5UI). A half-day guide brings the four quarters alive with context no sign ever provides — the history of why each community settled where they did, the tensions simmering beneath the pilgrim surface, and the hidden courtyards only locals know.",
            "1:00pm — Lunch at Arabica (Christian Quarter) — sit-down lunch with mezze, grilled meats, and fresh juice. 80–130 NIS ($22–35) per person.",
            "3:00pm — Western Wall at golden hour — the late afternoon light on the ancient stones, when the day's heat softens and worshippers fill the plaza, is the most atmospheric time to visit.",
            "5:00pm — Tower of David Night Spectacular sound-and-light show projected onto the ancient citadel walls. Book tickets in advance (~80 NIS/$22). One of Jerusalem's best evening experiences.",
            "7:30pm — Dinner at Machneyuda restaurant (near Mahane Yehuda Market) — one of Jerusalem's most celebrated restaurants, known for contemporary Israeli cuisine. Tasting menu 250–350 NIS ($68–95) per person. Book weeks ahead for weekend tables.",
          ],
          cost: "$140–170 total",
        },
        {
          day: "Day 2",
          title: "Temple Mount, Mount of Olives & Fine Dining",
          items: [
            "7:30am — Temple Mount early entry (same hours as budget plan). Arrive exactly at 7:30am to beat the crowd — early entry is significantly more peaceful and allows better photography of the Dome of the Rock.",
            "9:30am — Church of the Holy Sepulchre with a private guide who can interpret the building's complex denominational politics, the Edicule restoration, and the significance of each chapel. Often more illuminating than the physical building itself.",
            "12:00pm — Israeli brunch at Cafe Mizrachi in the Jewish Quarter — shakshuka, labneh, roasted aubergine, and excellent coffee. 90–130 NIS ($24–35).",
            "2:00pm — Mount of Olives and Garden of Gethsemane with audio guide. Private taxi to and from (120 NIS/$32 round trip) rather than shared servis.",
            "4:30pm — Yad Vashem Holocaust Memorial. Even for mid-range travellers, allow 3–4 full hours. Reserve tickets online. Genuinely one of the most important museums in the world.",
            "8:00pm — Dinner at Yudale restaurant (French Hill) — contemporary Israeli fine dining. 200–300 NIS ($54–81) per person with wine. Or Rooftop of Notre Dame of Jerusalem Center for atmospheric dining with a view of the Old City walls.",
          ],
          cost: "$150–185 total",
        },
        {
          day: "Day 3",
          title: "Dead Sea, Ein Gedi & Masada",
          items: [
            "7:00am — Private car or organised tour to the Dead Sea and Masada. Book a combo tour via GetYourGuide (https://www.getyourguide.com/s/?q=Jerusalem+Dead+Sea+Masada&partner_id=PSZA5UI). Masada, Herod's desert fortress atop a 400m rock plateau, is one of Israel's most dramatic sites and easily combined with the Dead Sea.",
            "8:30am — Masada: take the cable car up (60 NIS/$16 return) or hike the Roman Ramp (30 minutes). The 73 AD Siege of Masada — where 960 Jewish rebels chose collective suicide over Roman capture — is one of history's most extraordinary last stands. The archaeological remains (Herod's palace, bathhouses, synagogue, Roman circumvallation wall) are excellently preserved.",
            "12:00pm — Drive to Ein Bokek Dead Sea resort area. Lunch at a hotel restaurant — salads, grilled fish, and hummus overlooking the mineral-white sea. 100–160 NIS ($27–43).",
            "1:30pm — Float in the Dead Sea from a proper beach resort (free mineral mud included). The experience is unlike anything else — the density of the salt water means you sit above the surface as if in an invisible armchair.",
            "4:00pm — Brief stop at Ein Gedi Nature Reserve or Qumran (where the Dead Sea Scrolls were discovered in 1947) on the drive back.",
            "7:00pm — Return to Jerusalem. Dinner near Ben Yehuda Street or back in the Mahane Yehuda restaurant strip.",
          ],
          cost: "$155–200 total",
        },
        {
          day: "Day 4",
          title: "City of David, Ramparts Walk & Farewell Brunch",
          items: [
            "9:00am — City of David with a proper guide — the excavations here change understanding of Biblical Jerusalem every year. New tunnels, Bronze Age gates, and First Temple period artefacts are continually being uncovered. Hezekiah's Tunnel (wet route) is essential.",
            "11:30am — Ramparts Walk along the Old City walls (18 NIS/$5) — the 4km walkway on top of the Ottoman walls gives a completely different perspective on how the city is organised.",
            "1:00pm — Farewell Israeli breakfast-lunch at Cafe Bastet or Mizrachi in the Jewish Quarter. Order everything. Israeli breakfasts are a meal category of their own.",
            "3:00pm — Browse the better souvenir and Judaica shops in the Jewish Quarter (Armenian ceramics, olive wood carvings, Yemenite silverwork) for genuine craftsmanship rather than mass-produced tourist items.",
            "4:30pm — Depart to Ben Gurion Airport via train from Jerusalem Yitzhak Navon station. Arrive 3 hours before departure.",
          ],
          cost: "$140–175 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$320–450/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Old City Tour & Rooftop Dinner",
          items: [
            "Arrival at Ben Gurion Airport — private airport transfer to Jerusalem in an air-conditioned car ($80–120). Check into the Waldorf Astoria Jerusalem or King David Hotel (the latter hosted Churchill, Kissinger, and every visiting head of state since 1931). Rooms from $400–600/night.",
            "3:00pm — Private half-day Old City tour with a senior licensed guide specialising in religious history. The guide coordinates pre-approved access and ensures you visit the Western Wall Tunnels, the Jewish Quarter Cardo excavations, and the Church of the Holy Sepulchre with depth impossible to achieve independently.",
            "6:00pm — Sundowner at the King David Hotel rooftop bar — possibly the most iconic view in Jerusalem, looking directly at the Old City walls as the Dome of the Rock catches the last light. Cocktails 80–120 NIS each.",
            "8:00pm — Dinner at the Eucalyptus Restaurant — Jerusalem's most celebrated restaurant, led by chef Moshe Basson, who recreates Biblical-era recipes using ancient grain varieties, pomegranates, herbs, and spices documented in the Torah. Tasting menu 400–550 NIS ($108–149) per person. Book at least 2 weeks ahead.",
          ],
          cost: "$380–480 total",
        },
        {
          day: "Day 2",
          title: "Temple Mount, Mount of Olives & Yad Vashem VIP",
          items: [
            "7:30am — Temple Mount with private guide — your guide explains the political and theological significance of every stone, the location of Solomon's Temple (debated), and the current tensions over excavation rights. Early morning access maximises time before the site closes to non-Muslims.",
            "10:00am — Church of the Holy Sepulchre — private guide with access arranged through one of the officiating denominations for a less crowded experience of the Edicule and Calvary.",
            "12:30pm — Lunch at Mamilla Mall Hotel rooftop restaurant — contemporary Israeli cuisine with views of the Jaffa Gate. 200–300 NIS ($54–81) per person.",
            "2:30pm — Private car to Mount of Olives and Garden of Gethsemane. The private driver waits while you spend as long as desired.",
            "4:30pm — Yad Vashem Holocaust Memorial with a private guide. Guides who lost family members, or who specialise in testimonial history, transform the museum experience into something deeply personal. Book VIP guided tours via the Yad Vashem website.",
            "8:00pm — Dinner at Machneyuda (Jerusalem's most acclaimed restaurant, book 3–4 weeks ahead) or private dining experience arranged through your hotel concierge.",
          ],
          cost: "$350–450 total",
        },
        {
          day: "Day 3",
          title: "Masada at Sunrise, Dead Sea Spa & Private Winery",
          items: [
            "4:30am — Private car departs Jerusalem for Masada before dawn. Hike the Snake Path by headlamp (45 minutes) to reach the summit before sunrise. Watching the sun rise over Jordan and the Dead Sea from Herod's palace, 400 metres above the desert, is one of the defining experiences of the Middle East.",
            "9:00am — Drive to the Dead Sea. Check into the Isrotel Dead Sea Hotel or Kempinski Ishtar Hotel ($400–600/night for a night here, or day-use spa access). The Kempinski Ishtar's infinity pool appears to flow into the Dead Sea itself. Spa treatments 400–800 NIS ($108–216). Float in the Dead Sea from the hotel's private beach.",
            "2:00pm — Drive to Judean Hills wine country. Israel's premium wine country lies 30 minutes from Jerusalem. Private tasting at Domaine du Castel or Clos de Gat wineries — two of Israel's most acclaimed producers. Guided tasting 200–400 NIS ($54–108) per person.",
            "7:30pm — Return to Jerusalem. Dinner at the hotel restaurant or a final visit to the restaurant strip near Mahane Yehuda.",
          ],
          cost: "$400–550 total",
        },
        {
          day: "Day 4",
          title: "City of David Exclusive, Rooftop Dawn & Departure",
          items: [
            "6:00am — Arrange through your hotel concierge for exclusive early access to the City of David archaeological site before it opens to the public. The stillness of the 3,500-year-old city at dawn — no crowds, just ancient stones and birdsong — is extraordinary.",
            "8:00am — Hotel rooftop breakfast with views of the Old City. Israeli breakfast at a 5-star hotel: smoked salmon, artisanal cheeses, tahini, fresh-baked challah, and eggs prepared to order. Allow an hour.",
            "10:00am — Final wander through the Jewish Quarter. Browse the Armenian Quarter's ceramics workshops — hand-painted Armenian tiles are the finest souvenir Jerusalem offers. Prices start around $40 for a small tile; custom pieces are available.",
            "12:30pm — Farewell lunch at Rooftop of Notre Dame of Jerusalem Center — grilled meats, Lebanese mezze, and one of the best views in the city at a surprisingly reasonable price for the quality.",
            "2:30pm — Private transfer to Ben Gurion Airport (TLV). Arrive 3 hours before departure. Use the Fast Track security service if available through your airline or hotel.",
          ],
          cost: "$320–420 total",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget",
      accommodation: "$22–33 (hostel dorm)",
      food: "$15–22",
      transport: "$5–10",
      activities: "$15–25",
      total: "$60–80",
    },
    {
      tier: "Mid-Range",
      accommodation: "$120–160 (3-star hotel)",
      food: "$35–55",
      transport: "$15–25",
      activities: "$40–60",
      total: "$140–180",
    },
    {
      tier: "Luxury",
      accommodation: "$400–600 (5-star)",
      food: "$100–180",
      transport: "$80–120",
      activities: "$80–150",
      total: "$320–450",
    },
    {
      tier: "Self-Catering",
      accommodation: "$60–90 (Airbnb)",
      food: "$10–18 (Mahane Yehuda market)",
      transport: "$5–8",
      activities: "$15–25",
      total: "$90–120",
    },
    {
      tier: "Family",
      accommodation: "$160–220 (family room)",
      food: "$60–90 (family meals)",
      transport: "$30–50 (rental car)",
      activities: "$60–100 (family tickets)",
      total: "$180–260",
    },
  ],
  mistakes: [
    {
      icon: "⏰",
      title: "Visiting Temple Mount Without Checking Hours",
      desc: "Temple Mount is only open to non-Muslims for a few hours each morning (approx 7:30–11:00am) and a brief afternoon window on weekdays. It is closed Fridays and Saturdays. Dozens of travellers every day show up outside these hours and are turned away. Check current times at the Israeli Tourism Ministry website before you go — they change seasonally and due to religious holidays.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "👗",
      title: "Underdressing for Religious Sites",
      desc: "The Western Wall, Temple Mount, Church of the Holy Sepulchre, and most mosques require modest dress — covered shoulders and knees for all genders. Keep a light shawl or scarf in your bag at all times. Some sites provide coverings at the entrance but the quality is poor and you may queue for them. Arriving appropriately dressed saves time and avoids embarrassment.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "📸",
      title: "Photographing Soldiers or Security Infrastructure",
      desc: "Israel has extensive visible security. Photographing military personnel, security checkpoints, or border infrastructure can result in confiscation of your memory card and lengthy questioning. Stick to photographing the ancient and the beautiful. The golden rule: if in doubt, ask.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏪",
      title: "Shopping Only Inside the Old City Souvenir Stalls",
      desc: "The souvenir shops inside the Old City's tourist corridors are overpriced and sell mostly mass-produced goods from China. For authentic Armenian ceramics, handmade olive wood items, and genuine Dead Sea products, go to the Armenian Quarter's workshops, the Jewish Quarter's Judaica shops, or the Israeli-run stores on Ben Yehuda Street. Price check everything and don't hesitate to walk away — persistence is part of the transaction.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚌",
      title: "Not Accounting for Shabbat",
      desc: "From Friday sunset to Saturday sunset, Israel's public transport (buses, trains) shuts down almost completely. Many Jewish-owned restaurants and shops close. If you're arriving or departing on a Saturday, organise private transport in advance — airport taxis run, but at premium prices. Plan your Shabbat day around sites that stay open: the Old City, Arab Quarter shops, and East Jerusalem continue normally.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🌊",
      title: "Staying in the Dead Sea Too Long",
      desc: "The hypersaline Dead Sea water is wonderful for 10–20 minutes. Beyond that, the salt draws moisture from your skin aggressively, and any cut, nick, or shaving irritation becomes intensely painful. Do not shave or wax within 24 hours of visiting. Do not put your face in the water. Rinse thoroughly in fresh water immediately after. The experience is remarkable — but it has a time limit.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  tips: [
    {
      icon: "🕐",
      title: "Arrive at Religious Sites at Opening Time",
      desc: "Jerusalem's iconic sites — the Church of the Holy Sepulchre, Western Wall, Temple Mount — are at their most peaceful and photogenic in the 30–60 minutes after they open. By 10am, tour groups arrive in waves. Early mornings in Jerusalem are also cooler and the golden light on the limestone walls is extraordinary.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🗺️",
      title: "Get a Good Map of the Old City",
      desc: "The Old City's alleyways are a genuine labyrinth — narrow lanes with no sight lines, streets that change names mid-block, and no reliable GPS signal in covered souqs. Download offline maps (Maps.me has the best Old City detail) and pick up a free physical map from the tourist office at Jaffa Gate. Getting intentionally lost is part of the experience, but knowing roughly where you are prevents genuine frustration.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎟️",
      title: "Book Yad Vashem and Tower of David Night Show in Advance",
      desc: "Yad Vashem requires timed entry reservations, especially in peak season — spots fill days in advance. The Tower of David Night Spectacular (sound and light show) is one of Jerusalem's best evening experiences but sells out on weekends. Book both at least 3–5 days ahead online. The night show runs March–October, check exact dates.",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      icon: "🍳",
      title: "Eat a Proper Israeli Breakfast Every Morning",
      desc: "Israeli breakfast culture is extraordinary — a spread of hummus, tahini, roasted aubergine, fresh cheeses, labneh, boiled eggs, Israeli salad (finely diced tomato and cucumber with olive oil), and freshly baked bread. Even budget cafés serve a version of this for 50–80 NIS ($13–22). It will keep you full until early afternoon and is, arguably, the world's best breakfast culture. Don't skip it for a quick coffee and pastry.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🎒",
      title: "Use GetYourGuide for Tours and Skip-the-Line Access",
      desc: "For guided tours of the Old City, Masada, Dead Sea combos, and the Tower of David Night Show, GetYourGuide offers vetted local guides with confirmed booking: https://www.getyourguide.com/s/?q=Jerusalem&partner_id=PSZA5UI. Particularly valuable for Temple Mount tours (where the political and historical context transforms the experience) and for Hezekiah's Tunnel guided visits.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Jerusalem safe to visit in 2026?",
      a: "Jerusalem is safe for tourists the vast majority of the time. The Old City receives millions of visitors annually. Standard urban precautions apply — be aware of your surroundings, avoid political demonstrations, and follow local news regarding any heightened security periods. The Israeli security presence is extensive and visible, which deters petty crime. The main practical concerns are aggressive hawking in tourist areas and bag-snatching around the Damascus Gate bus stop area. Travel advisories from your government should be checked before departure.",
    },
    {
      q: "Can I visit both Jerusalem and the Palestinian Territories (West Bank)?",
      a: "Yes. Many travellers visit Bethlehem (Church of the Nativity, Banksy's Walled Off Hotel) on a half-day trip from Jerusalem. Bethlehem is in Area A of the Palestinian Authority — Israeli citizens cannot enter, but all other nationalities can. Cross via Checkpoint 300 (Gilo), which is straightforward for tourists with non-Israeli passports. Hebron (Abraham's Tomb), Jericho (world's oldest city), and Ramallah are also accessible. Guide services for West Bank tours are strongly recommended.",
    },
    {
      q: "What currency should I carry and where should I exchange money?",
      a: "Israeli Shekels (NIS) are required for most purchases. US Dollars are accepted in tourist-facing businesses at approximately $1 = 3.5 NIS (unfavourable rate — exchange to NIS before spending). Best exchange rates are at ATMs (use your bank card at Israeli bank ATMs) or at licensed money changers near Mahane Yehuda Market. Avoid airport exchange desks. Credit cards (Visa, Mastercard) are widely accepted in hotels, restaurants, and larger shops. Carry some cash for Old City market shopping and small food stalls.",
    },
    {
      q: "How do I get from Tel Aviv (Ben Gurion Airport) to Jerusalem?",
      a: "The direct train from Ben Gurion Airport to Jerusalem Yitzhak Navon station runs every 30 minutes, takes 22–28 minutes, and costs approximately 26 NIS ($7). This is the fastest and cheapest option. Sherut (shared taxis) depart from outside arrivals and cost 80–120 NIS ($22–33), taking 50–70 minutes. Private taxis cost $60–90 and are useful if you have heavy luggage or are arriving late at night when trains run less frequently.",
    },
    {
      q: "What is the best base for a Jerusalem trip — inside the Old City or outside?",
      a: "Staying inside or immediately adjacent to the Old City (near Jaffa Gate or the Jewish Quarter) is the most atmospheric choice and allows early morning access to sites before day-trippers arrive. Outside the walls — in West Jerusalem near Ben Yehuda Street or Mahane Yehuda — offers better restaurant and nightlife access. Budget travellers should look at hostels inside the Old City (Israeli guesthouses in the Christian Quarter are excellent value). Luxury travellers should strongly consider the King David Hotel or Waldorf Astoria for their historic significance and iconic Old City views.",
    },
  ],
  combineWith: ["Jordan (Petra, Wadi Rum, Dead Sea)", "Egypt (Cairo, Pyramids, Nile cruise)", "Tel Aviv (beaches, nightlife, Bauhaus architecture)"],
  relatedSlugs: ["jordan-5-days", "egypt-7-days", "istanbul-5-days"],
  galleryQuery: "jerusalem old city dome western wall israel architecture",
};

export default function JerusalemPage() {
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
