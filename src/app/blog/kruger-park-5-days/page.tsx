import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Kruger National Park 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Kruger National Park trip in 5 days. Plan the perfect 5-day Kruger National Park safari. Big Five game drives, best camps, self-drive tips, Sabi.",
  keywords: [
    "Kruger National Park guide",
    "Kruger 5 days itinerary",
    "Kruger self-drive safari",
    "Big Five safari South Africa",
    "Kruger Park camps Satara Lower Sabie",
    "Sabi Sands game reserve",
    "Panorama Route Blyde River Canyon",
    "South Africa safari budget",
    "South Africa visa Indian passport",
    "Kruger National Park tips",
  ],
  openGraph: {
    title: "Kruger National Park 5-Day Itinerary 2026: Trip Planner",
    description:
      "Africa's greatest self-drive safari — 20,000 sq km, the Big Five, and lions crossing the road at dawn. Our complete 5-day guide from $120/day.",
    url: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Kruger National Park South Africa lion pride sunset safari game drive",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kruger National Park 5-Day Itinerary 2026: Trip Planner",
    description:
      "Self-drive the Big Five in Africa's most iconic national park. Complete 5-day itinerary from $120/day.",
    images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Kruger National Park in 5 Days: The Complete Safari Guide (Budget to Luxury, 2026)",
      description:
        "A complete 5-day Kruger National Park safari guide covering self-drive game drives, the Big Five, best camps, Sabi Sands, and the Panorama Route — for every budget.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kruger Park 5-Day Guide",
          item: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Kruger National Park",
      description:
        "Africa's original and greatest safari park — 20,000 sq km of wilderness in South Africa hosting the Big Five and over 500 bird species, best experienced by self-drive or guided game drive.",
      url: "https://www.incredibleitinerary.com/blog/kruger-park-5-days",
      touristType: ["Safari Traveller", "Wildlife Photographer", "Adventure Traveller"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.9884,
        longitude: 31.5547,
      },
      containedInPlace: {
        "@type": "Country",
        name: "South Africa",
      },
    },
  ],
};

/* ── Page Data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Kruger National Park",
  country: "South Africa",
  countryFlag: "🇿🇦",
  slug: "kruger-park-5-days",
  heroQuery: "kruger national park south africa big five lion elephant safari",
  heroAlt: "Kruger National Park South Africa lion pride sunset safari game drive",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "The best self-drive safari in Africa, where you drive yourself through 20,000 sq km of wilderness and a leopard walks across your bonnet like you're not there — the Big Five all in 5 days if you're lucky, a lioness carrying a cub across the road at dawn, hippos so close you can hear them grumble. Kruger: Africa's original safari park and still its greatest.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$120",
    bestMonths: "May–Sep (dry season, animals gather at waterholes)",
    airport: "JNB (O.R. Tambo) then drive 5hrs or fly to MQP/HDS",
  },

  toc: [
    { id: "visa",           emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans",          emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries",    emoji: "📅", label: "The Itineraries" },
    { id: "budget",         emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",       emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",           emoji: "💡", label: "Pro Tips" },
    { id: "faq",            emoji: "❓", label: "FAQ" },
    { id: "highlights",     emoji: "🐆", label: "Top Highlights" },
    { id: "self-drive",     emoji: "🚗", label: "Self-Drive Guide" },
    { id: "book",           emoji: "🎟️", label: "Book Tours & Activities" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Type", "Tourist Visa required"],
        ["Apply at", "South African High Commission or VFS Global"],
        ["Fee", "~R1,500 (~$80 USD)"],
        ["Processing", "2–4 weeks (apply well in advance)"],
        ["Biometrics", "Required at VFS centre"],
        ["Duration", "30 days single entry (multi-entry available)"],
        ["Docs needed", "Bank statements (3 months), hotel bookings, return flights, travel insurance"],
      ],
    },
    {
      flag: "🌍",
      title: "US / UK / EU / AU Passports",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Type", "Visa-free entry"],
        ["Duration", "Up to 90 days"],
        ["Requirements", "Return ticket + proof of accommodation"],
        ["Passport validity", "30 days beyond intended stay"],
        ["Children", "Unabridged birth certificate required for children under 18"],
        ["Note", "Border Health Declaration form at entry point"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$120/day",
      days: [
        {
          day: "Day 1",
          title: "Kruger National Park 5-Day Itinerary 2026: Trip Planner",
          items: [
            "Rent a budget car in Johannesburg from $35/day (Toyota Corolla — no 4WD needed for tar roads in Kruger)",
            "Drive 5 hrs to Kruger; enter via Numbi Gate (southwest) or Phabeni Gate near Skukuza",
            "Self-drive afternoon game drive on H1-1 south — elephants, impala, wildebeest common on first hour",
            "Check into Skukuza Rest Camp (from $35/night for a hut; booking essential, months in advance via SANParks)",
            "Sundowner at the camp's restaurant overlooking the Sabie River — hippos visible from the terrace",
          ],
          cost: "$115 (car rental $35 + fuel $20, park entry R372/$20, hut $35, food $25) — book SANParks early",
        },
        {
          day: "Day 2",
          title: "Skukuza → Lower Sabie — Leopard & Elephant Country",
          items: [
            "Open gate at 5:30am (dawn); drive H4-1 towards Lower Sabie — best leopard road in the park",
            "Cheetah are often spotted near Nkhulu picnic site (H4-1); arrive early before other cars arrive",
            "Lower Sabie waterhole: elephant herds crossing the Sabie River in single file — an extraordinary sight",
            "Pick up a SANParks picnic lunch (R60/$3) at Lower Sabie camp — eat on deck above the hippo pools",
            "Afternoon: drive S28 loop — slow, quiet dirt track, great for lions in the long grass",
          ],
          cost: "$110 (fuel $15, camp $35, park entry already paid per day R372, food $20, rest camp $35) — adjust per night",
        },
        {
          day: "Day 3",
          title: "Lower Sabie → Satara — Lion Capital of Kruger",
          items: [
            "Dawn drive from Lower Sabie north on H1-2 towards Satara — this stretch is famous for lion sightings",
            "Stop at Tshokwane picnic site for coffee and boerewors rolls ($4) midway",
            "Satara Rest Camp sits in open thornveld — highest lion density in the park, prides of 10+ visible at waterholes",
            "Afternoon drive on S100 and S41 loops — reported sightings board at Satara camp is your best intel",
            "Night drive from Satara camp ($28): spotlight reveals genets, civets, lions hunting",
          ],
          cost: "$120 (fuel $15, hut $40, night drive $28, meals $22, park day $15) — night drives book fast",
        },
        {
          day: "Day 4",
          title: "Satara → Olifants Camp — River Panoramas & Buffalo",
          items: [
            "Drive north on H1-4; Olifants Rest Camp sits on a 100m cliff above the Olifants River — the most scenic camp in Kruger",
            "Morning: elephants, buffalo, and crocodiles in the river below from the camp terrace",
            "Self-drive loop: S90, S91 along the river — hippo pods, giant crocodiles, and white rhino",
            "Kruger's best birdwatching from the Olifants terrace — Pel's fishing owl, African fish eagle",
            "Sunset from the terrace: Africa's most cinematic camp sunset over the river bend",
          ],
          cost: "$110 (fuel $20, hut $40, meals $25, other $25)",
        },
        {
          day: "Day 5",
          title: "Final Dawn Drive → Exit & Panorama Route",
          items: [
            "Final 2-hour dawn game drive; exit through Phalaborwa Gate or Orpen Gate by 10am",
            "Drive the Panorama Route (2 hrs from Orpen Gate): Blyde River Canyon — third largest canyon on Earth",
            "God's Window viewpoint: stand at 1,800m looking down through clouds to the Lowveld 1km below",
            "Bourke's Luck Potholes: cylindrical rock potholes carved by swirling water, striking geology",
            "Overnight in Graskop or Hazyview; dinner at Harrie's Pancakes (Graskop institution — legendary sweet and savoury pancakes, $5)",
          ],
          cost: "$100 (fuel $30, panorama viewpoints $5, accommodation $35, meals $30)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$250/day",
      days: [
        {
          day: "Day 1",
          title: "Fly to KMIA / Drive to Hazyview — Comfort Entry",
          items: [
            "Fly Johannesburg → Kruger Mpumalanga International Airport (KMIA) — 1-hr flight; hire car from airport ($45/day)",
            "Check into a comfortable Hazyview guesthouse or the Perry's Bridge Boutique ($80–100/night)",
            "Visit Shangana Cultural Village near Hazyview — evening performance of Shangaan music, fire ceremony, and traditional dinner ($35)",
            "Enter Kruger via Paul Kruger Gate; evening game drive before the camp gate closes at sunset",
            "Dinner at camp restaurant or at your guesthouse; zebra steak and biltong are regional specialties",
          ],
          cost: "$230 (flight $80, car $45, lodge $90, dinner $30, Shangana $35) — first day heavier on transport",
        },
        {
          day: "Day 2",
          title: "Full Day Self-Drive — Southern Kruger",
          items: [
            "Enter at 5:30am; drive H4-1 Lower Sabie road — pack a cooler from Spar in Hazyview the night before",
            "Stop at each waterhole for 20 minutes minimum: animals follow a routine, patience wins",
            "Midday at Lower Sabie camp restaurant ($15 meal) overlooking the river — stunning leopard sighting probability",
            "Afternoon loop on S28 back to Skukuza region; book a sunset guided drive in an open vehicle ($40)",
            "Return to Hazyview guesthouse by 7pm via Paul Kruger Gate; hot shower and wine on the deck",
          ],
          cost: "$230 (car $45, park entry $20/day, guided drive $40, meals $35, lodge $90)",
        },
        {
          day: "Day 3",
          title: "Satara Region — Lion Pride Tracking",
          items: [
            "Drive north: check into Satara Rest Camp for 1 night ($55/night with aircon chalet) or Hoedspruit guesthouse",
            "Full-day self-drive around Satara's famous lion triangle — H6, S41, S100 loops",
            "Morning predator patrol: lions often hunt at dawn and can be found in the open eating a kill at 6–7am",
            "Afternoon: rhino sighting probability is highest in the central zone — white rhino at waterholes",
            "Satara night drive in an open vehicle ($28) with a ranger who has radio contact with colleagues",
          ],
          cost: "$250 (fuel $30, chalet $55, night drive $28, meals $40, entry $20, incidentals $77)",
        },
        {
          day: "Day 4",
          title: "Sabi Sands Game Reserve — Exclusive Big Cat Encounters",
          items: [
            "Book a day visit or overnight to Sabi Sands (adjacent private reserve, from $180/night, adjoins Kruger with no fence)",
            "Morning and afternoon guided game drives in open Land Rover vehicles — off-road tracking allowed (unlike Kruger)",
            "Leopard sightings virtually guaranteed in Sabi Sands — the reserve has the highest leopard density in Africa",
            "Lion pride at a waterhole, cheetah on the open plains, elephant feeding at eye level from the vehicle",
            "Bush walk with an armed ranger at dawn — experiencing the bush on foot changes your perspective completely",
          ],
          cost: "$280 (Sabi Sands day or overnight $180, meals included, transport $30, tips $30, extras $40)",
        },
        {
          day: "Day 5",
          title: "Panorama Route & Departure",
          items: [
            "Morning Blyde River Canyon drive: Bourke's Luck Potholes, Three Rondavels viewpoint, God's Window",
            "Heritage tour of the old gold rush town of Pilgrim's Rest — entire town is a national monument",
            "Graskop Gorge Lift: glass-sided gondola descending 50m into a lush gorge ($12)",
            "Lunch in Sabie: trout-farmed town, local trout restaurant with mountain views ($18)",
            "Afternoon flight from KMIA back to Johannesburg or Cape Town",
          ],
          cost: "$220 (panorama + gorge $20, lunch $18, car drop-off $45, flight $100, hotel if needed $50) — adjust for timing",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$700/day",
      days: [
        {
          day: "Day 1",
          title: "Fly to Hoedspruit — Private Reserve Arrival",
          items: [
            "Fly Johannesburg → Hoedspruit (HDS) airport — direct 1-hr flight; lodge transfer awaits",
            "Check into Lion Sands, Singita Sabi Sand, or Londolozi — from $700/night fully inclusive (accommodation, all meals, twice-daily game drives, conservation fee)",
            "Afternoon game drive in an open Land Rover with a dedicated ranger and tracker team",
            "Sundowner in the bush: champagne poured as a herd of elephants passes 50m away",
            "Private dining under the stars: boma fire dinner with a sommelier pairing South African Stellenbosch wines",
          ],
          cost: "$800 (flight $100, lodge from $700 fully inclusive — meals, drives, tracker, all included)",
        },
        {
          day: "Day 2",
          title: "Sabi Sands — Full Big Five Tracking Day",
          items: [
            "Pre-dawn wake-up at 5am; morning game drive with specialist tracker reading spoor in the dust",
            "Leopard tracking: a resident leopard family is followed daily — guaranteed sighting standard at Singita and Londolozi",
            "Midday: spa treatment at the lodge ($150 — hot stone massage with African marula oil) while rangers track lion movements",
            "Afternoon game drive: rhino territory, wild dog (endangered) pack if present, buffalo herds",
            "Bush walk at golden hour with two armed rangers — follow a lion trail on foot",
          ],
          cost: "$800 (fully inclusive lodge — day activities, gourmet meals, premium drinks, all included)",
        },
        {
          day: "Day 3",
          title: "Helicopter & Private Sightings",
          items: [
            "Private helicopter flight over the Kruger wilderness at sunrise ($350 for 45 min) — elephants, rivers, and vastness",
            "Full morning game drive: lion cubs at 3 months old if the resident pride is denning nearby",
            "Exclusive cheetah conservation centre tour in Hoedspruit ($40 add-on for non-resident guests) — hold a cheetah cub",
            "Afternoon: private boma campfire lunch 2km from camp, served by the lodge chef in the wilderness",
            "Sundowner drive: park on a termite mound and watch the sunset with G&Ts and canapes",
          ],
          cost: "$1,100 (helicopter $350 extra, lodge $700 all-inclusive, conservation centre $40, sundowner tips $10)",
        },
        {
          day: "Day 4",
          title: "Kruger Self-Drive Day (Optional) + Panorama Route",
          items: [
            "Optional: day trip into Kruger proper for the self-drive experience (your lodge can arrange a day vehicle)",
            "Drive the iconic H4-1 and compare self-drive vs guided — most luxury guests find guided far superior for sightings",
            "Afternoon: private Panorama Route tour with a guide — Blyde River Canyon, God's Window, Three Rondavels",
            "Sundowner at God's Window edge: the view from 1,800m over the lowveld with a private guide and drinks setup",
            "Return to lodge for private chef dinner: seven-course tasting menu with wine pairing ($120 supplement)",
          ],
          cost: "$950 (lodge $700, panorama guide $100, vehicle $60, tasting menu $120 supplement — optional)",
        },
        {
          day: "Day 5",
          title: "Final Dawn Drive & Departure",
          items: [
            "Final dawn game drive: last chance for the elusive leopard kill or lion pride on the move",
            "Farewell bush breakfast served by the river — poached eggs, fresh baked bread, and camp coffee at a fold-out table in the bush",
            "Lodge checkout; transfer to Hoedspruit airport in the lodge vehicle",
            "Fly to Johannesburg; connect to Cape Town or international departure",
            "At O.R. Tambo Airport: pick up Amarula cream liqueur, biltong, and rooibos tea as gifts",
          ],
          cost: "$850 (lodge $700, flight $100, transfers $50 — covered in package at most lodges)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget (Self-Drive)",
      accommodation: "$35–55 (SANParks rest camps)",
      food: "$15–25 (self-catering + camp restaurant)",
      transport: "$35–50 (rental car + fuel)",
      activities: "$20–40 (park entry + night drive)",
      total: "$120–170/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–120 (Hazyview guesthouse/lodge)",
      food: "$35–50 (restaurant meals)",
      transport: "$45–60 (hire car + fuel)",
      activities: "$40–80 (guided drives + Sabi Sands day)",
      total: "$200–310/day",
    },
    {
      tier: "💎 Luxury (Private Reserve)",
      accommodation: "$500–1,200 (Singita/Lion Sands/Londolozi fully inclusive)",
      food: "Included in lodge rate",
      transport: "$60–150 (charter flights + transfers)",
      activities: "Included (drives, tracker, walks)",
      total: "$600–1,500/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "$15–25 (SANParks dorm or Hazyview hostel)",
      food: "$10–18 (self-catering)",
      transport: "$30–40 (budget rental + shared fuel)",
      activities: "$20 (park entry)",
      total: "$95–120/day",
    },
    {
      tier: "🌿 Mid-Luxury (Tented Camp)",
      accommodation: "$200–350 (andBeyond, Imbali, Hoyo Hoyo)",
      food: "Mostly included",
      transport: "$80–120 (charter)",
      activities: "Included",
      total: "$320–550/day",
    },
  ],

  mistakes: [
    {
      icon: "⏰",
      title: "Arriving at the Gates After Opening",
      desc: "Kruger gates open at 5:30am (winter) and 4:30am (summer). The golden hour dawn drive is the single best time for predator activity. Arriving at 8am when the sun is high means you'll see sleeping lions hidden in shade — not the drama you came for.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚗",
      title: "Speeding Through the Park",
      desc: "The speed limit is 50km/h on tar, 40km/h on dirt. Every experienced self-driver slows to 20km/h and scans the bush. Animals are perfectly camouflaged — a lioness 3 metres off the road is invisible at 50km/h. Slow down, or you'll drive past everything.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "📅",
      title: "Not Booking SANParks Camps Months in Advance",
      desc: "SANParks camps are bookable 11 months in advance and Lower Sabie, Satara, and Skukuza sell out that early for peak season (June–September). Book at sanparks.org the moment your dates are confirmed. Last-minute availability is rare.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🌧️",
      title: "Visiting in Summer (Dec–Feb) Expecting Easy Sightings",
      desc: "The wet season (Nov–Mar) is lush and green — which sounds lovely but means animals spread out across huge areas and visibility through dense vegetation is terrible. The dry season (May–Sep) concentrates animals at waterholes and strips the bush bare for clear sightings.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🦟",
      title: "Ignoring Malaria Risk",
      desc: "Kruger is a malaria area. Take Malarone or doxycycline — start before you arrive. Use DEET repellent at dawn and dusk. Most visitors are fine, but the consequences of untreated malaria are severe. This is not optional.",
      color: "border-yellow-200 bg-yellow-50",
    },
  ],

  tips: [
    {
      icon: "🔭",
      title: "Check the Sightings Board at Every Camp",
      desc: "Each SANParks camp has a sightings board updated by rangers and visitors. It shows exactly where lions, leopards, cheetah, and wild dogs were spotted that morning with road names and grid references. This is the single most valuable navigation tool in Kruger.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "💧",
      title: "Park at Waterholes and Wait",
      desc: "In the dry season, animals MUST drink. Park at a waterhole at 7am or 4pm and just wait. You'll see lions, leopards, elephants, rhinos, and buffalo all come to drink. The best wildlife photography in Kruger is done from a stationary car at a waterhole, not driving around.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "📻",
      title: "Follow the Traffic Jam — It Always Means Big Cats",
      desc: "If you see 10 cars stationary on a Kruger road, do not drive past. Stop. A traffic jam in Kruger means a predator sighting. Rangers share locations on radio, and other self-drivers follow. Join the cluster, switch off your engine, and enjoy.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🌅",
      title: "Book a Night Drive for the Complete Experience",
      desc: "Night drives ($28 from Satara, book at camp reception) reveal a parallel world: civets, genets, spotted hyenas, honey badgers, and often leopards hunting. The ranger uses a red spotlight so animals aren't disturbed. This is one of the best experiences in Africa.",
      color: "border-amber-200 bg-amber-50",
    },
  ],

  faqs: [
    {
      q: "Do I need a guide or can I self-drive Kruger?",
      a: "You absolutely can self-drive Kruger — in fact, it's one of the world's best self-drive safari destinations. The roads are well-maintained tar and gravel, GPS works, and there's no dangerous terrain. You keep your windows closed and stay in the car. The advantage of a guide is that they know the animals' routines and have radio contact — but the self-drive experience of finding your own lion is incomparable.",
    },
    {
      q: "What is the difference between Kruger and Sabi Sands?",
      a: "Kruger National Park is a public park — self-drive accessible from ~$120/day. Sabi Sands is an adjacent private game reserve where off-road tracking is allowed, guides are expert naturalists, and guest ratios are low (max 8 per vehicle). Sabi Sands lodges cost $300–1,200/night all-inclusive. Leopard sightings are near-guaranteed in Sabi Sands; in Kruger they require luck and timing. Many visitors do both.",
    },
    {
      q: "What is the Big Five and will I see them all in 5 days?",
      a: "The Big Five are lion, leopard, elephant, rhinoceros (white), and Cape buffalo. In 5 days during the dry season (May–Sep), most visitors see all five. Elephant and buffalo are almost certain. Lions are very likely near Satara. Rhino requires the central zone and some luck. Leopard is the hardest — Lower Sabie is your best bet, and Sabi Sands makes it nearly guaranteed. Wild dog and cheetah are bonus sightings.",
    },
    {
      q: "Is Kruger safe for tourists?",
      a: "Inside the park, Kruger is extremely safe — you stay in your vehicle on game drives and rest camps are well-fenced and guarded. The roads between Johannesburg and Kruger (N4 and N12) are safe to drive in daylight. Do not stop on the highway at night. Rest camps have restaurants, shops, and 24-hour security. Solo travellers, couples, and families all visit safely.",
    },
  ],

  combineWith: [
    "Cape Town (3-4 days — fly from KMIA to CPT, wine routes and Table Mountain)",
    "Victoria Falls (4 days — fly Joburg to Vic Falls, Zimbabwe or Zambia)",
    "Mozambique Bazaruto (4 days — beach extension from Maputo, 3 hrs from Kruger)",
    "Chobe National Park Botswana (3 days — 8-hr drive or fly, world's highest elephant density)",
  ],

  relatedSlugs: [
    "cape-town-7-days",
    "kenya-safari-7-days",
    "serengeti-5-days",
    "victoria-falls-3-days",
    "botswana-safari-5-days",
  ],

  galleryQuery: "kruger national park safari big five lion leopard elephant south africa",
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function KrugerParkPage() {
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
