import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Bagan",
  country: "Myanmar",
  countryFlag: "🇲🇲",
  slug: "bagan-4-days",
  heroQuery: "bagan myanmar temples pagodas sunrise hot air balloon",
  heroAlt: "Bagan Myanmar ancient temples pagodas emerging from mist at sunrise with hot air balloons",
  category: "Southeast Asia",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro: "Bagan at sunrise — 2,000 ancient temples and pagodas rising from the Ayeyarwady plains in the morning mist, a lone e-bike rider cutting a dust trail through the red earth between stupas, perhaps a hot air balloon drifting silently overhead — is one of the most breathtaking sights in Asia. Four days gives you the great temples (Ananda, Shwezigon, Dhammayangyi), a sunrise and sunset that will reset your understanding of scale, a day trip to volcanic Popa Mountain, and enough time to get genuinely lost between the 11th-century monuments.",
  stats: { duration: "4 Days", budgetFrom: "$40", bestMonths: "Nov–Feb", airport: "NYU (Nyaung-U/Bagan)" },
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
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["E-Visa Required", "India is eligible for Myanmar's e-visa. Apply at evisa.moip.gov.mm. Fee: $50 USD. Processing: 3 business days (apply at least a week ahead). Valid for 28 days tourist stay, single entry. The e-visa is the only reliable method — consular visa processing from India can take 3–4 weeks."],
        ["Travel Advisory — Read First", "Myanmar has been under military junta rule since the February 2021 coup. The political and security situation remains serious in many regions. However, the Bagan archaeological zone and major tourist areas (Inle Lake, Mandalay) have remained accessible to visitors. Check your government's current travel advisory before booking: MEA India advisories at mea.gov.in. Many travellers continue to visit safely while being aware of the situation."],
        ["Practical Entry", "Most commercial flights to Nyaung-U/Bagan (NYU) route through Yangon (RGN) on Myanmar National Airlines or Air KBZ. The international gateway is Yangon International Airport. Connections to Bagan by domestic flight (40 minutes, $50–80) or overnight bus (10 hours, $15–20). Confirm flight availability at the time of booking — domestic airline schedules are subject to change."],
        ["Currency & Payments", "Myanmar Kyat (MMK) is the official currency. USD is accepted at most tourist hotels and major restaurants ($1 ≈ 3,000–4,000 MMK at current parallel rates — check just before travel as rates fluctuate significantly). Bring USD cash in clean, unfolded bills (printed after 2006). International cards are largely non-functional in Myanmar — this is a cash economy for tourists. Bring more than you think you need."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["E-Visa Available", "US, UK, EU, Australian, Canadian, and most Western passport holders are eligible for Myanmar e-visa ($50, 28 days, single entry). Apply at evisa.moip.gov.mm. Processing: 3 business days. This is the standard entry method for tourists."],
        ["Travel Advisory — Essential Reading", "Most Western governments maintain 'reconsider your need to travel' or equivalent advisories for Myanmar following the 2021 military coup. Check: US State Department (travel.state.gov), UK FCDO (gov.uk/foreign-travel-advice), Australian DFAT (smartraveller.gov.au). The advisories distinguish between higher-risk areas (Shan State, Rakhine State, border regions) and relatively stable tourist zones (Bagan, Inle Lake, Mandalay). Read the current advisory in full."],
        ["Ethical Considerations", "Some travellers choose to avoid Myanmar due to concerns about tourism revenue potentially benefiting the military government. Others argue that visiting supports local communities (guesthouses, guides, restaurants, e-bike rental shops) directly. This is a personal decision. If you go, prioritise spending at locally-owned, independently-run businesses rather than military-affiliated hotels and operators."],
        ["Cash Only", "Myanmar operates as a cash economy for international visitors. ATMs that accept foreign cards are largely non-functional. Bring USD in clean, unfolded bills printed after 2006 (older bills or bills with any marks are refused). $500 per person for 4 days is a reasonable amount — you'll return with leftover kyat that cannot be exchanged outside Myanmar."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$40–70/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Bagan + Ananda Temple + Shwezigon + Sunset",
          items: [
            "Arrive Nyaung-U Airport (NYU) or by overnight bus from Mandalay/Yangon. Check in to a budget guesthouse in Nyaung-U ($15–25/night — the local town, cheaper and more authentic than the touristy Old Bagan or New Bagan areas).",
            "Rent an e-bike from your guesthouse or a nearby shop ($5–6/day, charged overnight at your accommodation — the single best transport decision you'll make in Bagan). The e-bike gives you complete freedom to stop at any of the 2,000+ temples scattered across the 40 square kilometer plain.",
            "Ananda Temple — the most beautiful active Buddhist temple in Bagan, built in 1105 CE. Four 9-meter standing Buddhas face each compass point from the central sanctuary, each with a subtly different expression (the southern Buddha appears to be smiling from below and serious from above). Still an active monastery — monks chant inside at 6am and 6pm.",
            "Shwezigon Pagoda (the 'Prototype Pagoda', built 1102 CE by King Anawrahta to enshrine relics of the Buddha) — the gold-leafed bell-shaped stupa that influenced all subsequent Burmese pagoda design. Leave your shoes at the gate and walk the outer terrace barefoot (all pagodas in Myanmar require bare feet inside).",
            "Thatbyinnyu Temple — the tallest in Bagan at 61 meters, built 1150 CE. The white-washed masonry rises above the entire plain; it's visible from the e-bike path 3km away.",
            "Shwesandaw Pagoda at sunset — the most popular sunset viewpoint in Bagan, five terraced tiers climbing to a cylindrical stupa with 360-degree views over the temple plain. Arrive 30 minutes before sunset (typically 5:45–6:30pm November–February) to secure a good position on the stairs. The view of 2,000 temples in the amber light of the late afternoon sun is the definitive Bagan experience.",
            "Dinner in Nyaung-U at a local Burmese restaurant ($2–5 for a full meal with tea leaf salad, mohinga, and a beer).",
          ],
          cost: "$35–50 total (guesthouse + e-bike + Bagan zone pass $25 + dinner)",
        },
        {
          day: "Day 2",
          title: "Sunrise E-Bike Ride + Dhammayangyi + Sulamani",
          items: [
            "4:45am — Leave guesthouse on e-bike in the dark. Ride into the temple plain. This is the magic hour of Bagan: zero tourists, owls calling from the pagodas, the temples appearing as black silhouettes against a deep blue sky slowly brightening. Find a remote temple (look for any small, unmarked stupa surrounded by open ground) and climb to the top platform to watch the sunrise.",
            "Option: Hot air balloon (book 3+ months ahead for November–February peak season, $350–450 per person, 45-minute flight, absolutely the most iconic view in Bagan — temples in morning mist viewed from 500 meters above, a truly once-in-a-lifetime aerial perspective). Balloons depart at sunrise from designated launch sites — your hotel confirms the location the night before.",
            "9:00am — Dhammayangyi Temple: the largest temple in Bagan, built by King Narathu (who also had his father and brother murdered to take the throne, then was assassinated himself in 1170 CE — the temple's inner sanctuary was deliberately bricked up after his death, according to legend by workers who feared the king's ghost). The massive scale and the sealed inner passages create a genuinely eerie atmosphere unlike any other temple.",
            "10:30am — Sulamani Temple: 'The Crowning Jewel', built 1183 CE. Well-preserved murals in the interior corridors and excellent carved stucco detailing on the exterior. One of the few temples with internal murals intact enough to identify the Jataka tales they depict.",
            "11:30am — Swim break at your guesthouse pool (most budget guesthouses do not have pools — the mid-range hotels in Nyaung-U generally do). Alternatively: breakfast and rest during the hottest hours (11am–3pm is brutal in Bagan — 35°C+ in the sun on open plain with no shade).",
            "4:00pm — Return to the temple plain on e-bike for afternoon exploration. Find the small, unvisited temples in the agricultural zone between Old Bagan and New Bagan — farmers tend crops literally in the shadow of 12th-century pagodas. E-bike paths wind through the red earth between temples in near-total silence.",
          ],
          cost: "$30–55 total (hot air balloon if taken $350 extra, e-bike + meals)",
        },
        {
          day: "Day 3",
          title: "Popa Mountain + Lacquerware Workshop",
          items: [
            "7:00am — Hire a shared taxi or mini-van to Popa Mountain ($5/person shared, $25 private vehicle, 50km south, 1 hour). The volcanic plug rises 737 meters from the plains — a striking landform crowned with a nat (spirit) shrine at the summit.",
            "Mount Popa Taungkalat Shrine: 777 steps up the volcanic plug, lined with shrines and watched over by Macaque monkeys who steal food, glasses, and hats with cheerful confidence. Bring nothing the monkeys could grab and nothing you cannot lose. The view from the summit over the Bagan plain to the distant temples is extraordinary.",
            "The shrine honours the 37 official nat (spirit) deities of Myanmar's pre-Buddhist animist tradition — Myanmar uniquely maintained a state-sanctioned nat pantheon even after the adoption of Theravada Buddhism. The imagery is vivid: carved figures in glass cases, offerings of toddy palm wine and meat, incense spiralling from clay pots.",
            "Return to Bagan by 1pm. Lunch at a local Burmese restaurant near Nyaung-U market (mohinga — Myanmar's national dish, a fish-based noodle soup, $1.50; or shan noodles — rice noodles in a light pork broth with pickled vegetables, $1).",
            "Yedanapyitsi Lacquerware Workshop: Bagan has been a centre of lacquerware production for a thousand years. A free workshop visit shows the 12-step production process (bamboo frame, horse-hair thread weaving, multiple lacquer coatings, polishing, engraving). The whole process takes 6 months for a single high-quality bowl. Pieces range from $10 (small box) to $80+ (large decorated vessel) — among the most beautiful and legitimate souvenirs in Southeast Asia.",
            "Evening: sunset from a different pagoda tonight — try Buledi or Pyathada for a less crowded alternative to Shwesandaw.",
          ],
          cost: "$25–40 total (Popa transport + lacquerware shopping + meals)",
        },
        {
          day: "Day 4",
          title: "Final Temple Exploration + Nyaung-U Market + Departure",
          items: [
            "6:00am — Final sunrise e-bike ride. By day 4 you've found your favourite temple — go back to it. There is something different about watching the sun rise over 2,000 monuments when you've learned their names, their kings, their centuries.",
            "8:00am — Nyaung-U Market: the local covered market where farmers sell produce, monks buy their daily provisions, and the morning is loud with bargaining. Breakfast at a market stall ($0.50–1.50): fresh coconut slices, toddy palm sugar sweets, samosas. Not a tourist site — a functioning 7am market.",
            "10:00am — Final temple: Gubyaukgyi temple in Myinkaba village has the oldest surviving mural paintings in Bagan (11th century, Mon script inscriptions) — often completely empty of tourists despite being one of the most historically significant painted interiors in Southeast Asia.",
            "Shopping: Nyaung-U lacquerware shops for final purchases. Also look for longyi (the traditional wrap-around garment worn by all Burmese, $3–8 in the market), Shan shoulder bags ($5–15), and pickled tea leaves (laphet) in sealed bags ($2–3) to bring home.",
            "Depart from Nyaung-U Airport (NYU) for Yangon or Mandalay, or take the overnight bus if continuing overland.",
          ],
          cost: "$15–30 total (market + final shopping + airport transfer $3)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$100–200/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive & Private Guide for the Great Temples",
          items: [
            "Fly into NYU (Nyaung-U) from Yangon or Mandalay (40 minutes, $50–80) and check in to Bagan Thande Hotel ($60–100/night, riverfront property established 1922, historically the most atmospheric hotel in Bagan) or Aureum Palace ($80–130, Old Bagan location with pool and temple views).",
            "Pre-booked licensed guide for the first two days ($25–40/day) transforms the temple experience — the history of the Pagan Kingdom (849–1297 CE), the religious and political competition between kings that produced 2,000 monuments in 250 years, and the identification of iconographic details invisible to the untrained eye.",
            "Ananda Temple with guide: the story of the temple's founding (a single monk explained the legendary Himalayan Nandamula Cave to King Kyanzittha who was so moved he built an exact replica in brick) gives the building an entirely different resonance.",
            "Shwezigon, Thatbyinnyu with extended explanation. Sunset from Shwesandaw with your guide identifying the temples visible on the horizon.",
            "Dinner at the Black Bamboo Restaurant (Old Bagan area, $10–18 per person for excellent Burmese-international menu with river views).",
          ],
          cost: "$120–200 total (hotel + guide + flights + dinner)",
        },
        {
          day: "Day 2",
          title: "Hot Air Balloon + Private Temple Circuit",
          items: [
            "Sunrise hot air balloon (book 3+ months ahead, $350–450/person, the most iconic experience in Myanmar). The briefing is at 5am, launch at 5:45am, 45-minute flight over the temple plain. The experience of floating silently above 2,000 monuments while the sun rises is genuinely transformative. Book through Balloons over Bagan or Oriental Ballooning — both reputable operators with good safety records.",
            "Post-balloon: breakfast at your hotel (most balloon operators include a champagne and pastry celebration after landing).",
            "10:00am — Dhammayangyi and Sulamani with guide. The guide's explanation of the bricked-up inner sanctum at Dhammayangyi and the political history behind it elevates it from 'large temple' to one of the most haunting archaeological sites in Asia.",
            "Afternoon: private e-bike tour with your guide through the agricultural areas east of Old Bagan — small villages, working pagodas, farmers and monks sharing the paths with tourists. This is Bagan as it has existed for centuries.",
          ],
          cost: "$400–500 total (balloon + guide + meals, balloon dominates cost)",
        },
        {
          day: "Day 3",
          title: "Popa Mountain + Lacquerware Deep Dive",
          items: [
            "Private vehicle to Mount Popa ($40–60 for a private car with driver, air-conditioned, 1 hour each way). The driver waits at the base while you climb the 777 steps.",
            "Extended time at Popa Taungkalat: your guide explains the 37 nat mythology in detail — the historical figures (generals, queens, craftsmen) who became nat after violent deaths and are now propitiated by Myanmar's Buddhist population for luck, protection, and fertility.",
            "Lunch at a proper restaurant in Kyaukpadaung town (the nearest town to Popa, $5–10 for a full Burmese meal with multiple curries, soup, and rice).",
            "Lacquerware factory tour in Bagan with a master craftsman demonstration ($10–20 for a private workshop tour). The 8-step Bagan lacquerware process (using horse-tail hair for flexibility in the bamboo frame — unique to Bagan) produces pieces of genuine artistic value. Invest $30–80 in a high-quality item that will last decades.",
            "Sunset from Buledi or Pyathada Paya — less crowded alternatives to Shwesandaw, both with excellent 360-degree views over the plain.",
          ],
          cost: "$80–130 total (private car + workshop + lacquerware + meals)",
        },
        {
          day: "Day 4",
          title: "Dawn Photography + Departure",
          items: [
            "5:00am — Private photography guide for the final dawn shoot ($40–60, 3-hour session). The guide knows which temples have east-facing terraces for the best light angles, and which mist pockets tend to form in the valleys between temple clusters after cold nights.",
            "Hotel breakfast and late checkout (confirm with property — most mid-range Bagan hotels accommodate late checkouts for departing guests).",
            "Final Nyaung-U market visit and shopping.",
            "Airport transfer with private vehicle ($10–15 from your hotel to NYU airport — 5 minutes) for the onward flight.",
          ],
          cost: "$70–120 total (photography guide + market + transfer + airport)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$300–800+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive at Bagan Lodge + Private Temple Introduction",
          items: [
            "Bagan Lodge ($150–280/night) or The Hotel at Tharabar Gate ($180–350, inside the walls of Old Bagan) — both have exceptional pool, spa, and temple-view facilities. Private taxi transfer from NYU airport ($15–20 for a hotel vehicle).",
            "Private expert archaeologist guide for the full stay ($60–100/day for a top-tier specialist guide). The density of knowledge available from a guide who has spent 20 years studying Pagan Kingdom art history transforms every temple visit.",
            "Ananda Temple at sunset with specialist: the guide reads the Mon-language inscriptions on the doorway lintels aloud (Mon was the court language of the Pagan Kingdom — the guide translates) and explains the Theravada iconographic programme across all four sanctuaries.",
            "Private Shan dinner at the hotel's courtyard restaurant with the guide ($25–40/person for a curated Burmese tasting menu).",
          ],
          cost: "$400–600 total (hotel + specialist guide + dinner)",
        },
        {
          day: "Day 2",
          title: "Private Hot Air Balloon + Full Grand Circuit",
          items: [
            "Exclusive 2-person balloon flight (charter option available through Balloons over Bagan for couples or small groups — $700–900 for a private basket). Just you and the pilot, complete silence over the temples.",
            "Post-balloon: champagne breakfast at Bagan Lodge's riverside terrace.",
            "Full day private temple circuit with specialist guide: Dhammayangyi's bricked-up mystery, Sulamani's intact murals, the outer circuit temples rarely visited by group tours.",
            "Late afternoon: private boat on the Ayeyarwady River for the sunset — watching the Bagan temple plain from the river at golden hour, with traditional Burmese musicians playing aboard, is a sight most visitors never access.",
            "Dinner at The Hotel at Tharabar Gate's restaurant: a 7-course Burmese royal cuisine tasting menu ($50–80/person).",
          ],
          cost: "$800–1,200 total (private balloon + river sunset + dinner)",
        },
        {
          day: "Day 3",
          title: "Popa Mountain Private Day + Lacquerware Collection",
          items: [
            "Private vehicle and specialist guide to Popa Mountain. The guide's knowledge of nat mythology turns the climb into a lecture in Myanmar's syncretic religious history — one of the most intellectually rich experiences in Southeast Asia.",
            "Private lunch at a vetted Kyaukpadaung restaurant with pre-ordered traditional Burmese spread.",
            "Afternoon: visit a master lacquerware artist's home studio in Myinkaba village by private arrangement ($50–100 for a personal session with a craftsman who produces museum-quality pieces). Commission a personalised item ($100–400 for high-quality commissioned pieces that take weeks to complete — shipped later).",
            "Private sunset from Shwesandaw with your guide and a pre-arranged sunset snack basket from the hotel.",
          ],
          cost: "$300–500 total (private vehicle + commissioned lacquerware + sunset basket)",
        },
        {
          day: "Day 4",
          title: "Dawn Light Final Shoot + Departure",
          items: [
            "Final dawn: private photography session with guide at the temple of your choice. By day 4 you know Bagan well enough to have a favourite — the guide lights the way in pre-dawn dark and positions you for the specific light you've discussed over the previous days.",
            "Hotel spa morning: 90-minute traditional Myanmar massage ($40–80) before checkout.",
            "Late breakfast, leisurely departure. Private vehicle to NYU airport.",
            "Return flight to Yangon for international connection or continue to Inle Lake (30-minute domestic flight, $40–70).",
          ],
          cost: "$200–400 total (spa + photography + departure)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$15–25", food: "$5–12", transport: "$5–10", activities: "$10–20", total: "$40–70/day" },
    { tier: "✨ Mid-Range", accommodation: "$60–120", food: "$15–30", transport: "$15–30", activities: "$25–50", total: "$100–200/day" },
    { tier: "💎 Luxury", accommodation: "$150–350", food: "$40–80", transport: "$40–80", activities: "$80–200", total: "$300–800+/day" },
  ],
  mistakes: [
    {
      icon: "🐴",
      title: "Renting a Horse Cart Instead of an E-Bike",
      desc: "Horse carts are marketed as the 'traditional' way to see Bagan and are genuinely photogenic. They are also slow (8–10km/h), hot (no airflow when moving slowly through direct sun), and unable to access the smaller paths between temples. The e-bike ($5–6/day, charged overnight at your guesthouse) covers 3x the ground in the same time, lets you stop anywhere spontaneously, and is actually more sustainable for the horses. Every experienced Bagan visitor chooses the e-bike.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☀️",
      title: "Visiting Temples During Midday Heat",
      desc: "The Bagan plain is flat, dry, and shadeless. Between 11am and 3pm from November through February, surface temperatures on temple stones reach 50°C and the sun is directly overhead. Heat exhaustion is a real risk — several tourists require medical attention each season from ignoring this. Structure your day: 5am–11am temples, 11am–3pm hotel rest or air-conditioned café, 3:30pm–sunset temples. You see more and suffer less.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🎈",
      title: "Booking the Hot Air Balloon Last Minute",
      desc: "The Bagan hot air balloon season runs November through February (not year-round — the monsoon prevents flying from June through October). Peak season flights sell out 3–4 months ahead. If a Bagan balloon flight is on your bucket list, book before your flights to Myanmar, not after. Operators: Balloons over Bagan and Oriental Ballooning. Prices are fixed ($350–450/person) — there are no discounts for last-minute booking because there are no last-minute seats.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🚲",
      title: "E-Bike Freedom: Find Your Own Remote Temple at Sunrise",
      desc: "The transformative Bagan experience isn't the famous viewpoints — it's finding your own temple. Take the e-bike at 5am, ride south along the river road or east into the agricultural zone, and stop at any unmarked stupa you find. Climb to the platform. Watch the sunrise over 2,000 monuments with nobody else there. The small, unrestored temples between the archaeological zone and the farming villages are where Bagan reveals itself most honestly.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "⏰",
      title: "Shwesandaw Sunset: Arrive 30 Minutes Before",
      desc: "Shwesandaw Pagoda is the most popular sunset spot in Bagan and the terraces fill up fast. The concrete steps narrow as you ascend — late arrivals end up on the lower terraces with obstructed views. The sunset itself is at 5:45–6:15pm (November–February). Arrive by 5:15pm to secure a spot on the upper terrace. Bring water and something to sit on. The 20-minute show of colour across 2,000 temple silhouettes is worth the crowd.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎈",
      title: "The Hot Air Balloon Is the Best Aerial View in Asia",
      desc: "The aerial perspective over Bagan at sunrise — 2,000 monuments spread across a golden plain in morning mist, the Ayeyarwady River curving to the west — is the single most beautiful aerial view in Asia. Angkor from the air is impressive; Bagan is overwhelming. The 45-minute flight at $350–450 is the most expensive thing you'll do in Myanmar and the experience that will still be vivid in 20 years. Book 3+ months ahead for November–February.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is Myanmar safe to visit in 2026?",
      a: "Myanmar's security situation varies significantly by region following the 2021 military coup. The Bagan archaeological zone, Inle Lake area, and Mandalay city have remained accessible to tourists and are considered relatively stable compared to the conflict zones in Shan State, Rakhine State, and border areas. However, the situation is dynamic and can change. Always check your government's current travel advisory (US: travel.state.gov, UK: gov.uk/foreign-travel-advice, India: mea.gov.in) immediately before booking and again before departure. Travel insurance with emergency evacuation cover is essential.",
    },
    {
      q: "How do I book a hot air balloon over Bagan?",
      a: "Book directly with Balloons over Bagan (balloonsoverbagan.com) or Oriental Ballooning (orientalballooning.com) — the two established operators with the best safety records. Book 3–4 months ahead for November–February peak season. Cost: $350–450/person for a shared basket (standard), with private charter options available at higher cost. Flights are subject to weather cancellation — operators typically offer a full refund or reschedule if weather prevents flying. The balloon season runs October through March only.",
    },
    {
      q: "Do Indian passport holders need a visa for Myanmar?",
      a: "Yes. Indian passport holders need a Myanmar e-visa ($50 USD, 28 days single entry). Apply at evisa.moip.gov.mm. Processing: 3 business days. Apply at least a week before travel. Also read the current MEA travel advisory for Myanmar before booking — the political situation has made some areas of Myanmar unsafe, and it is important to understand the current context before planning travel.",
    },
    {
      q: "What is the best time to visit Bagan?",
      a: "November to February is the best time: dry season, clear skies, temperatures of 20–32°C, and the hot air balloon season is in operation. December and January are peak months — most beautiful weather, busiest temples. March–April is hotter (35–40°C) but fewer tourists. Avoid May through October (monsoon — temples are accessible but the balloon flights are suspended, the heat is intense, and the dust roads become mud roads). November and February are the best balance of conditions and crowd levels.",
    },
  ],
  combineWith: ["inle-lake-3-days", "mandalay-2-days", "chiang-mai-4-days"],
  relatedSlugs: ["angkor-wat-4-days", "luang-prabang-4-days", "mekong-delta-3-days", "bhutan-5-days"],
  galleryQuery: "bagan myanmar temples pagodas sunrise hot air balloon ayeyarwady",
};

export const metadata: Metadata = {
  title: "Bagan in 4 Days: 2,000 Temples, Hot Air Balloons & Myanmar's Ancient Capital (2026)",
  description: "4 complete Bagan itineraries with e-bike sunrise secrets, hot air balloon booking tips, Popa Mountain guide, and real USD costs from $40/day. Includes 2026 safety information.",
  keywords: ["bagan itinerary 4 days", "bagan myanmar travel guide", "bagan hot air balloon booking", "myanmar temples 2026", "popa mountain myanmar", "bagan sunrise tips", "myanmar travel advisory"],
  openGraph: {
    title: "Bagan in 4 Days: Temples, Balloons & Ancient Myanmar (2026)",
    description: "E-bike sunrise secrets, hot air balloon booking tips, Popa Mountain, and real budget costs for Bagan.",
    images: [{ url: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80", width: 1200, height: 630, alt: "Bagan Myanmar temples and pagodas at sunrise" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Bagan in 4 Days (2026)", description: "2,000 temples, hot air balloons, e-bike secrets, and $40/day budget breakdown." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/bagan-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bagan in 4 Days: 2,000 Temples, Hot Air Balloons & Myanmar's Ancient Capital (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80",
      description: "4 complete Bagan itineraries with e-bike sunrise secrets, hot air balloon booking tips, Popa Mountain guide, and real USD costs.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Bagan 4 Days", item: "https://www.incredibleitinerary.com/blog/bagan-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bagan, Myanmar",
      geo: { "@type": "GeoCoordinates", latitude: 21.1717, longitude: 94.8585 },
      description: "Bagan is an ancient city in Myanmar containing over 2,000 Buddhist temples and pagodas built between the 9th and 13th centuries, one of Asia's most remarkable archaeological sites.",
      touristType: ["Cultural tourists", "Photography enthusiasts", "History buffs", "Adventure tourists"],
    },
  ],
};

export default function BaganPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
