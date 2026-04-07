import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Lalibela, Ethiopia 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Lalibela, Ethiopia trip in 5 days. Complete Lalibela 5-day itinerary covering the 11 UNESCO rock-hewn churches, Bet Giyorgis, Timkat Festival,.",
  keywords: [
    "Lalibela Ethiopia travel guide",
    "Lalibela rock churches",
    "Ethiopia 5 day itinerary",
    "Bet Giyorgis church",
    "Timkat festival Ethiopia",
    "Ethiopia travel guide 2026",
    "Lalibela budget itinerary",
    "Ethiopia e-visa",
    "Addis Ababa travel",
    "Ethiopia UNESCO churches",
  ],
  openGraph: {
    title: "Lalibela, Ethiopia 5-Day Itinerary 2026: Trip Planner",
    description:
      "Eleven medieval churches carved from solid volcanic rock 800 years ago by a king who wanted to build a New Jerusalem in Africa. Complete 5-day Ethiopia itinerary from $80/day.",
    url: "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/ethiopia-lalibela-5-days.jpg",
        width: 1200,
        height: 630,
        alt: "Lalibela rock-hewn church Bet Giyorgis carved from solid rock Ethiopia",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalibela, Ethiopia 5-Day Itinerary 2026: Trip Planner",
    description:
      "Complete Lalibela itinerary from $80/day. 11 rock-hewn churches, Timkat Festival, Addis Ababa — day-by-day plans for every budget.",
    images: ["https://incredibleitinerary.com/og/ethiopia-lalibela-5-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lalibela, Ethiopia in 5 Days: The Complete Rock Church Guide (Budget to Luxury, 2026)",
    description:
      "Complete Lalibela 5-day itinerary covering the 11 UNESCO rock-hewn churches, Addis Ababa, and Ethiopian culture with budget to luxury plans.",
    image: "https://incredibleitinerary.com/og/ethiopia-lalibela-5-days.jpg",
    datePublished: "2026-01-10",
    dateModified: "2026-04-01",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Ethiopia Lalibela 5 Days", item: "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Lalibela — Rock-Hewn Churches, Ethiopia",
    description:
      "Home to eleven medieval churches carved from solid volcanic rock in the 12th century, Lalibela is one of Africa's greatest UNESCO World Heritage Sites and the holiest city in Ethiopian Orthodox Christianity.",
    url: "https://incredibleitinerary.com/blog/ethiopia-lalibela-5-days",
    touristType: ["Cultural Traveller", "Religious Pilgrim", "History Enthusiast"],
    geo: { "@type": "GeoCoordinates", latitude: 12.0317, longitude: 39.0472 },
    includesAttraction: [
      { "@type": "TouristAttraction", name: "Bet Giyorgis (Church of St George)" },
      { "@type": "TouristAttraction", name: "Bet Medhane Alem" },
      { "@type": "TouristAttraction", name: "Lalibela Rock-Hewn Churches (UNESCO)" },
      { "@type": "TouristAttraction", name: "Timkat Festival" },
    ],
  },
];

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Lalibela",
  country: "Ethiopia",
  countryFlag: "🇪🇹",
  slug: "ethiopia-lalibela-5-days",
  heroQuery: "lalibela rock churches ethiopia africa carved stone",
  heroAlt: "Lalibela rock-hewn church Bet Giyorgis carved from solid rock Ethiopia",
  category: "Africa",
  date: "January 10, 2026",
  readTime: "15 min read",

  intro:
    "Eleven medieval churches carved entirely from solid volcanic rock 800 years ago by a king who wanted to build a New Jerusalem in Africa — this is Lalibela. You descend into a courtyard cut 15 metres into the earth and find a church that has been in continuous use since the 12th century, monks chanting in Ge'ez (the oldest Christian liturgical language still used in the world) in the flickering light of beeswax candles. During Timkat — Ethiopian Epiphany in January — thousands of white-robed pilgrims process by torchlight through trenches and tunnels that connect the churches, filling the mountain air with incense and ancient song. Lalibela is not a museum. It is a living city of faith, and standing in it feels less like tourism and more like witnessing a civilisation that never stopped.",

  stats: {
    duration: "5 Days",
    budgetFrom: "$80",
    bestMonths: "Oct–Feb (dry season, Timkat festival Jan)",
    airport: "LLI (Lalibela) via ADD (Addis Ababa)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "church-guide", emoji: "⛪", label: "Church-by-Church Guide" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🚐", label: "Getting Around" },
    { id: "combine", emoji: "🌍", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["e-Visa", "Ethiopian e-Visa available online — very straightforward"],
        ["Apply At", "ethiopiaevisa.gov.et (official government portal)"],
        ["Fee", "$52 USD for a 30-day single-entry tourist visa"],
        ["Processing", "3–5 business days for online approval"],
        ["Validity", "30 days from date of entry"],
        ["Tip", "Apply at least 2 weeks before travel. Print the approval letter."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / Australian Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["e-Visa", "e-Visa required for most Western passport holders"],
        ["Apply At", "ethiopiaevisa.gov.et"],
        ["Fee", "$52 USD for 30-day single-entry tourist visa"],
        ["Processing", "3–5 business days online"],
        ["Visa on Arrival", "Available at Addis Ababa airport for some nationalities"],
        ["Ease Rating", "Straightforward — the e-Visa system works reliably"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Plan",
      sub: "~$80/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Addis Ababa — Explore the Capital",
          items: [
            "Arrive at Addis Ababa Bole International Airport (ADD). Collect e-Visa stamp, exchange some dollars to Ethiopian Birr at the airport (better rates inside the city but the airport desk works for immediate needs).",
            "Take a Ride (the local Uber equivalent) or metered taxi to your guesthouse in Bole or Kazanchis ($5–10). Addis is sprawling — Bole is the expat/tourist hub.",
            "Check in to a budget guesthouse: Wim's Holland House, Ethiopia Hotel ($15–30/night). Clean, locally run, good value.",
            "Afternoon: National Museum of Ethiopia. Home of 'Lucy' — the 3.2 million-year-old Australopithecus skeleton that is one of the most important archaeological finds in human history. $5 entry. Do not miss.",
            "Walk the Piazza area — Addis's historic Italian-built city centre with Fascist-era architecture, old bookshops, and the remarkable Holy Trinity Cathedral.",
            "Dinner: injera with tibs (sautéed meat) and shiro (spiced chickpea stew) at a local bunna (coffee) house — $3–8 for a full meal. Ethiopian coffee ceremony included.",
          ],
          cost: "$30–50 (guesthouse, museum, food, transport)",
        },
        {
          day: "Day 2",
          title: "Addis Markets & Fly to Lalibela",
          items: [
            "Morning: Merkato Market — the largest open-air market in Africa. Covering several square kilometres, it sells everything from spices to electronics to livestock. Go with local awareness: keep your bag in front, don't flash phones.",
            "Coffee at Tomoca Coffee in the Piazza — Addis's oldest and most beloved coffee shop since 1953. The macchiato is legendary and costs 25 cents.",
            "Afternoon: fly from ADD to LLI (Lalibela airport). Ethiopian Airlines operates 2–3 daily flights, 1 hour, from $60–120 return. Book in advance.",
            "Lalibela airport is 22km from town — shared minibus ($2) or private taxi ($8–12).",
            "Check in to a budget guesthouse: Ben Abeba Guesthouse, Lalibela Lodge budget rooms, or Sora Lodge ($15–30/night). Lalibela town is compact and walkable.",
            "Evening: walk the main street, eat injera at a local tej (honey wine) house. Tej is the traditional Ethiopian mead — served in flask-shaped bottles, slightly sweet, about 8% ABV.",
          ],
          cost: "$70–110 (flight, guesthouse, Merkato, meals)",
        },
        {
          day: "Day 3",
          title: "The Northern Churches — Bet Medhane Alem & More",
          items: [
            "Buy your 3-day church pass ($50/person) at the ticket office near Bet Medhane Alem. This covers all 11 churches for 3 days and is the only way to visit.",
            "Start at Bet Medhane Alem — the largest rock-hewn church in the world. 33.5m long, 23.5m wide, and 11.5m tall, carved from a single block of rock. The forest of columns inside is extraordinary.",
            "Bet Maryam — the most ornate church, filled with colourful Ethiopic murals depicting Biblical scenes in brilliant reds and blues. Monks chant morning prayers here.",
            "Bet Meskel, Bet Danaghel, and Bet Golgotha (contains replica of Christ's tomb and some of Lalibela's oldest treasures). Bet Golgotha is sometimes restricted to men only.",
            "Between the churches, walk the rock-cut trenches and tunnels that connect them — some passages are only shoulder-width and pitch dark. Bring a small torch.",
            "Lunch at a local guesthouse restaurant — injera with misir wot (red lentil stew) costs $2–4.",
            "Afternoon rest. The altitude in Lalibela is 2,630m — rest is not optional on day 1.",
          ],
          cost: "$55–75 ($50 church pass + food + tips for church wardens)",
        },
        {
          day: "Day 4",
          title: "Bet Giyorgis + The Southern Churches",
          items: [
            "Morning: the southern cluster of churches — Bet Gabriel-Rufael, Bet Merkorios, Bet Abba Libanos. Each is distinct in scale and atmosphere. Bet Gabriel-Rufael sits on the edge of a cliff and is reached via a narrow, vertiginous walkway.",
            "MIDDAY: Bet Giyorgis — the Church of St George. Ethiopia's most iconic building. Carved in the shape of a perfect Greek cross from a single rock, it descends 12 metres into the earth. Standing at the rim looking down, it is one of the most extraordinary sights in Africa. UNESCO called it 'the eighth wonder of the world.'",
            "The wardens at Bet Giyorgis are particularly welcoming — sit with them for tea and listen to their stories of maintaining a church that has functioned for 800 years.",
            "Afternoon: hike to the summit of the hill behind town for views over the Lasta mountains and the churches from above ($5 local guide recommended).",
            "Evening: injera with kitfo (Ethiopian steak tartare — the local pride dish) and a flask of tej honey wine in town. Ethiopian food at this price point ($5–10) is genuinely outstanding.",
          ],
          cost: "$20–40 (churches covered by pass, food, hill hike guide)",
        },
        {
          day: "Day 5",
          title: "Return to Addis — Farewell Ethiopia",
          items: [
            "Morning: return visit to Bet Giyorgis at dawn if possible — no tourists, monks praying in the pit below, incense and morning mist. The most atmospheric version of Lalibela.",
            "Optional: local market day in Lalibela (Saturday is biggest) — fresh injera flatbreads, berbere spice, teff grain, and handwoven cotton scarves.",
            "Fly back to Addis (LLI to ADD, 1 hour). Ethiopian Airlines is reliable and domestic flights run on time.",
            "If time permits: Entoto Hill above Addis for panoramic city views, or the Ethiopian Jewish community's Beit Haim Synagogue (a little-known gem).",
            "Farewell Ethiopian coffee ceremony at a local bunna house near the airport before departure. The ceremony — washing the green beans, roasting over charcoal, grinding by hand — takes 30 minutes and is a ritual of extraordinary beauty.",
            "Depart from ADD. Ethiopian Airlines has excellent connections to the rest of Africa, Middle East, Europe, and increasingly Asia.",
          ],
          cost: "$30–60 (flight, market, food, transport)",
        },
      ],
    },
    {
      label: "Mid-Range Plan",
      sub: "~$160/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Addis — Boutique Hotel & Cultural Deep Dive",
          items: [
            "Arrive ADD. Private hotel transfer ($15–25). Check in to Hyatt Regency Addis Ababa, Radisson Blu, or a boutique option like Harmony Hotel ($80–150/night).",
            "Private half-day Addis city tour with a licensed guide ($50–70): National Museum (Lucy), Merkato with a guide who keeps the pickpockets away, Holy Trinity Cathedral, and the Ethnological Museum at Haile Selassie's former palace.",
            "Lunch at Yod Abyssinia — Addis's most celebrated cultural restaurant, with traditional Ethiopian food, live music, and traditional dance performances ($15–25).",
            "Afternoon: Addis Ababa Bole area — the UN African headquarters (external view), the Africa Square, and the extraordinary Bole Medhane Alem Cathedral (the largest cathedral in sub-Saharan Africa).",
            "Dinner at Kategna or Habesha 2000 — upmarket Ethiopian restaurants where you eat on a mesob (woven table) with cultural performances. Try the full category: injera, various wots, kitfo, and tibs ($20–35).",
          ],
          cost: "$100–170 (hotel, guided tour, cultural dinner)",
        },
        {
          day: "Day 2",
          title: "Addis Coffee Culture & Fly to Lalibela",
          items: [
            "Morning coffee experience: private specialty coffee tour with a local coffee expert ($40–60). Ethiopia is the birthplace of coffee — tour the Bole Bulto market where green coffee is traded, then participate in a traditional ceremony.",
            "Visit the Ethiopian Coffee Museum and the Tomoca roastery — understand how single-origin Ethiopian Yirgacheffe, Sidamo, and Harrar coffees differ.",
            "Afternoon: fly ADD to LLI (Ethiopian Airlines, 1 hour, book flexible fare ~$80–100). Private airport transfer in Lalibela ($15).",
            "Check in to Ben Abeba Hotel (the famous Scottish-Ethiopian designed building perched on a cliff) or Roha Hotel ($60–100/night). Ask for a mountain view room.",
            "Evening: sunset from Ben Abeba's terrace — the cliff-edge restaurant overlooks the entire Lasta mountain range. Order the tej and watch the light change on the ancient plateau.",
          ],
          cost: "$120–180 (hotel, coffee tour, flight, transfer)",
        },
        {
          day: "Day 3",
          title: "Northern Church Complex — With Expert Guide",
          items: [
            "Hire a licensed Lalibela guide for the day ($30–50) — the church history, theology, and hidden details are almost entirely inaccessible without an expert interpreter.",
            "Buy 3-day church pass ($50). Your guide will negotiate with wardens for access to Bet Golgotha's inner sanctuary (sometimes granted with advance permission and a donation).",
            "Guided tour of the northern complex: Bet Medhane Alem, Bet Maryam (murals explained in detail), Bet Golgotha, Bet Mikael, and Bet Maskal.",
            "The guide will explain King Lalibela's vision: he wanted to create a New Jerusalem so Ethiopian Christians could make their pilgrimage without crossing Muslim territories. Every church represents a site in the Holy Land.",
            "Lunch at the Mountain View Hotel restaurant — local food with valley views ($10–18).",
            "Afternoon: sunset visit to Bet Amanuel (the 'Imperial Church' — the most sophisticated rock carving technique in Lalibela, with elaborate window and column designs).",
            "Evening: private Ethiopian meal at your hotel with your guide sharing more stories over tej.",
          ],
          cost: "$80–120 (church pass, guide, meals)",
        },
        {
          day: "Day 4",
          title: "Bet Giyorgis at Dawn + Southern Complex + Village Walk",
          items: [
            "Sunrise at Bet Giyorgis (6am) — the golden light falls perfectly into the cross-shaped pit in the first 30 minutes after dawn. The church wardens will be praying. It is extraordinary.",
            "Complete the southern cluster with your guide: Bet Gabriel-Rufael (the precipice church), Bet Merkorios, and Bet Abba Libanos (built according to tradition by Queen Maskal Kibra in a single night).",
            "Hike to Yemrehanna Kristos church (30km from Lalibela, accessible by 4x4, $30 return with driver) — a pre-Lalibela church built from alternating layers of wood and stone inside a cave, around 1,000 years old. Few tourists make the effort. Worth every bit of it.",
            "Return to town for a traditional lunch with injera making demonstration — watch the fermented teff batter poured onto a mitad (clay griddle) and the injera pulled in a single sheet.",
            "Evening: live traditional Ethiopian music at a local azmari bet (traditional music house) — $5 cover, plus food and tej. This is the real Lalibela cultural experience.",
          ],
          cost: "$80–130 (church visits, 4x4 to Yemrehanna, guide, evening)",
        },
        {
          day: "Day 5",
          title: "Lalibela Morning Rituals + Return Addis",
          items: [
            "Early morning: watch the daily dawn procession at the churches — priests in elaborate vestments carrying tabots (Ark of the Covenant replicas). This happens every single morning and is not a tourist performance.",
            "Final coffee ceremony at the hotel or a local house — the full three-round ceremony (abol, tona, baraka), roasted, ground and brewed in front of you.",
            "Local market visit with your guide: berbere spice mixes, handwoven shammas (white cotton shawls), and Lalibela cross jewellery (replicas of the famous Lalibela cross).",
            "Fly back to ADD. If time permits, visit the National Museum again for Lucy's full context, or the Addis Ababa Merkato for last-minute Ethiopian crafts.",
            "Farewell dinner at Yod Abyssinia or Taitu Hotel (Ethiopia's oldest hotel, opened 1907) — a full Ethiopian spread to close an extraordinary journey.",
          ],
          cost: "$80–130 (flight, market, guide, farewell dinner)",
        },
      ],
    },
    {
      label: "Luxury Plan",
      sub: "~$350/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Addis — The Sheraton & Private City Exploration",
          items: [
            "Arrive ADD. VIP airport meet-and-greet service ($30–50). Check in to Sheraton Addis ($250–400/night) — Africa's most luxurious hotel in a genuinely extraordinary building with palace-like architecture and 12 acres of gardens.",
            "Private half-day Addis cultural tour with an expert historian guide: National Museum with full Lucy briefing, Holy Trinity Cathedral (burial site of Emperor Haile Selassie), Ethnological Museum.",
            "Private Ethiopian cooking class at the Sheraton or a local culinary expert's kitchen ($80–120): learn to make injera from teff, berbere spice blend, doro wot (chicken stew), and kitfo.",
            "Dinner at the Sheraton's Mediterraneo Restaurant or the Marcus Hotel's fine dining room — Addis has a surprisingly sophisticated restaurant scene driven by the large diplomatic community.",
            "Evening: private Ethiopian coffee ceremony performed by a specialist in your suite, with explanation of the ceremony's cultural and religious significance.",
          ],
          cost: "$300–500 (hotel, private guide, cooking class, fine dining)",
        },
        {
          day: "Day 2",
          title: "Private Addis Art & Coffee + Charter to Lalibela",
          items: [
            "Private morning: Addis Ababa contemporary art scene with a local art curator — the city has a remarkable number of artist studios and galleries. Visit the Lela Arts Gallery and the Circle Art Gallery.",
            "Private specialty coffee experience: visit a small cooperative washing station outside Addis where coffee is processed. Taste three single-origin Ethiopians in sequence with a barista guide.",
            "Private charter flight ADD to LLI (1 hour, available from Ethiopian Wings or private charter operators, $600–900 one-way for a small group). The aerial view of the Ethiopian Highlands is extraordinary.",
            "Check in to Lalibela Lodge ($150–250/night) or the Seven Olives Hotel ($100–180/night) — the best available luxury options in Lalibela. Request a valley-view room.",
            "Private sunset dinner on the hotel terrace with the Lasta mountains turning purple. Personal chef prepares an Ethiopian tasting menu with Guder wine (Ethiopia's best winery).",
          ],
          cost: "$400–700 (hotel, charter flight, private coffee, art tour)",
        },
        {
          day: "Day 3",
          title: "Private Church Access — Dawn to Dusk",
          items: [
            "Pre-dawn access to Bet Giyorgis (6am, arranged through your hotel) — the entire church complex before public opening. Sit in silence at the rim of the pit with the morning mist rising from the canyon below.",
            "Private licensed guide ($80–100/day) with deep theological and historical expertise — a guide who has studied at Addis Ababa University and specialises in Ethiopian Orthodox history.",
            "Private access to Bet Golgotha's innermost sanctuary — rarely open to tourists, requires advance coordination and a donation. The carvings inside are the finest in Lalibela.",
            "Private lunch at the Seven Olives Hotel rooftop — Ethiopian-European fusion with the mountain panorama.",
            "Afternoon: complete northern complex at a leisurely pace. Your guide arranges tea with the head priest of Bet Maryam — a conversation about 800 years of living church history.",
            "Sundowner at Ben Abeba's cliff terrace — private table with advance reservation, Ethiopian cocktails and cheese board, watching the sun set over the plateau.",
          ],
          cost: "$200–350 (private guide, church donations, meals, sundowner)",
        },
        {
          day: "Day 4",
          title: "Yemrehanna Kristos + Timkat or Asheton Maryam Monastery",
          items: [
            "Private 4x4 to Yemrehanna Kristos church (30km, 1 hour each way). This pre-Lalibela cave church is older than the rock-hewn churches and even more mysterious — built inside a volcanic cave using alternating cedar and stone construction.",
            "Inside Yemrehanna Kristos: ancient mummies of pilgrims who came to die at the holy site. The cave walls are encrusted with ancient bones. Profoundly otherworldly.",
            "Return for lunch. Afternoon: hike to Asheton Maryam monastery perched at 3,150m above Lalibela — a 2-hour uphill hike with a mule option available for the ascent ($15). Panoramic views of the Lasta plateau.",
            "At Asheton Maryam: the monks wear yellow turbans and maintain a church that predates the Crusades. The views from the monastery down to Lalibela are breathtaking.",
            "Evening: private Ethiopian cultural evening at the hotel — traditional instruments (masenqo, krar), white-robed choir performance, and a multi-course Ethiopian dinner.",
          ],
          cost: "$200–350 (private 4x4, monastery, cultural evening)",
        },
        {
          day: "Day 5",
          title: "Final Morning Rituals + Charter Return + Addis Farewell",
          items: [
            "Dawn: private access to morning mass at Bet Maryam (with prior arrangement and cultural sensitivity — dress in white if possible, bring a white shamma from the market).",
            "Farwell gifts from the hotel: Lalibela cross replica, Ethiopian coffee, and berbere spice kit prepared by the hotel chef.",
            "Private charter back to ADD. Aerial view of the Blue Nile Gorge (the Ethiopian Grand Canyon, visible from the air — extraordinary).",
            "Addis: afternoon at the Sheraton spa for recovery and final polish after 4 days at altitude.",
            "Final dinner: Habesha 2000 private room reserved — 12-course Ethiopian tasting menu with Guder, Axumit, and Acacia wines paired to each course. The sommelier is one of only three certified in Ethiopia.",
            "Depart Ethiopia. Ethiopian Airlines flies to virtually every major city — the hub of Africa's best airline.",
          ],
          cost: "$400–600 (charter, spa, private tasting dinner, gifts)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–30 (guesthouse)",
      food: "$5–15 (local restaurants)",
      transport: "$10–20 (shared minibus/Ride)",
      activities: "$20–50 (church pass + guides)",
      total: "~$80/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–150 (boutique hotel)",
      food: "$15–35 (restaurant meals)",
      transport: "$30–60 (private transfers)",
      activities: "$50–100 (licensed guides, day trips)",
      total: "~$160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$150–400 (Sheraton/best lodges)",
      food: "$50–100 (fine dining, included meals)",
      transport: "$200–600 (private charter flights)",
      activities: "$100–200 (private guides, access)",
      total: "~$350/day",
    },
    {
      tier: "⛪ Church Pass",
      accommodation: "N/A",
      food: "N/A",
      transport: "N/A",
      activities: "$50 — 3-day access to all 11 churches",
      total: "$50/person",
    },
    {
      tier: "✈️ Internal Flights",
      accommodation: "N/A",
      food: "N/A",
      transport: "ADD–LLI return: $80–150 economy",
      activities: "Book via Ethiopian Airlines website",
      total: "$80–150/person",
    },
  ],

  mistakes: [
    {
      icon: "⛪",
      title: "Skipping the 3-Day Church Pass and Rushing in One Day",
      desc: "Some travellers try to see all 11 churches in a single day. This is a waste — you will be exhausted and see nothing properly. The $50 pass covers 3 days. Spread the churches across 2 full days, go at dawn and at dusk, and return to your favourites. The atmosphere changes completely between 6am, midday, and sunset.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "👗",
      title: "Wearing Inappropriate Clothing Inside the Churches",
      desc: "The Lalibela churches are active places of Orthodox Christian worship, not tourist attractions. Women must cover their heads and shoulders (bring a scarf). Men must remove shoes before entering (socks are fine — the floors are cold). Shorts are not acceptable for either gender. The wardens will refuse entry — dress respectfully and you will be welcomed warmly.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "📸",
      title: "Photographing Priests and Rituals Without Permission",
      desc: "Photography inside the churches requires discretion. Never photograph the tabots (sacred Ark replicas) — this is absolutely forbidden and deeply offensive. Always ask before photographing priests or monks. Sunrise services at Bet Maryam are the most photographically tempting and the most sensitive — read the room before raising your camera.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🌡️",
      title: "Underestimating the Altitude",
      desc: "Lalibela sits at 2,630 metres above sea level — higher than the highest point in the Alps. If you come from sea level you will feel breathless, tired, and potentially headachy for the first 24 hours. Plan a gentle first day, drink twice the water you think you need, and avoid alcohol until you have acclimatised. The altitude affects budget and luxury travellers equally.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🗓️",
      title: "Visiting During Timkat Without Advance Hotel Booking",
      desc: "Timkat (Ethiopian Epiphany, typically January 19–20) transforms Lalibela from a quiet mountain town into a sea of 50,000 white-robed pilgrims. It is the most extraordinary cultural event in Ethiopia — but hotels book out 6–12 months in advance. If you want to attend Timkat, book accommodation the moment you decide to go. Arriving without a booking means sleeping very far from the churches.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "Arrive at Bet Giyorgis at Sunrise — No Exceptions",
      desc: "Bet Giyorgis at sunrise, when the morning mist fills the pit and the golden light falls perfectly into the cross-shaped roof, is one of the great travel experiences in the world. By 9am the tour groups arrive and the magic evaporates. This is a 6am wake-up moment — every single day.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎵",
      title: "Find an Azmari Bet for Real Ethiopian Culture",
      desc: "Azmari bets are traditional Ethiopian music houses where wandering minstrels (azmaris) perform satirical, improvisational songs. The azmari will make up verses about the foreigners in the room — in Amharic — to cheers and laughter from locals. Ask your hotel to recommend a good one. Cost: $5 cover + food. This is the Ethiopia that most tourists never reach.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "☕",
      title: "Participate in a Full Ethiopian Coffee Ceremony",
      desc: "Ethiopia invented coffee — the word itself comes from the Kaffa region. The traditional ceremony (roasting green beans, grinding by hand, brewing in a jebena clay pot, serving three rounds) is an act of hospitality that takes 45 minutes. Never rush it or decline a round. The third cup (baraka) is considered a blessing.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🧭",
      title: "Lalibela, Ethiopia 5-Day Itinerary 2026: Trip Planner",
      desc: "Without a guide, the rock-hewn churches are impressive stonework. With a licensed guide, they become a 12th-century theological programme carved in rock — every architectural detail, every symbol, every window orientation is intentional. Licensed guides charge $30–50/day and the difference they make to understanding Lalibela is immeasurable.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  faqs: [
    {
      q: "How do I get to Lalibela from Addis Ababa?",
      a: "Ethiopian Airlines operates 2–3 daily flights from Addis Ababa (ADD) to Lalibela (LLI), taking approximately 1 hour. Book in advance through the Ethiopian Airlines website — fares range from $60 to $150 return depending on how early you book. There is no reliable overland route (it is a very long drive on difficult mountain roads). From the Lalibela airport, a shared minibus to town costs $2; a private taxi costs $8–12.",
    },
    {
      q: "When is the best time to visit Lalibela?",
      a: "October to February is the dry season and the best general time to visit. January is exceptional if you can attend Timkat (Ethiopian Epiphany, usually January 19–20) — one of the most extraordinary religious festivals in Africa, with 50,000 pilgrims filling the churches and streets. Book accommodation 6+ months in advance for Timkat. The rainy season (June–September) brings green landscapes but muddy walking conditions around the churches.",
    },
    {
      q: "How much does the Lalibela church entry cost and how many churches are there?",
      a: "There are 11 rock-hewn churches in Lalibela, all part of the UNESCO World Heritage Site. The entry pass costs $50 per person and is valid for 3 days, covering all 11 churches. This is by far the best value — do not attempt to see all 11 in one day. The churches are divided into a northern cluster (7 churches around a central courtyard) and a south-eastern cluster (4 churches connected by tunnels), plus the standalone Bet Giyorgis which is the most famous.",
    },
    {
      q: "Can I combine Lalibela with other Ethiopian destinations?",
      a: "Absolutely — Ethiopia has one of Africa's richest travel circuits. Common additions: Addis Ababa (National Museum, Merkato, Bole area — 2 days), Gondar (medieval castles, 'Camelot of Africa' — 1 hour flight from Lalibela), Axum (ancient obelisks, Ark of the Covenant, 1 hour from Lalibela), and the Simien Mountains (trekking with gelada baboons and Ethiopian wolves). Ethiopian Airlines connects all these cities efficiently and affordably.",
    },
  ],

  combineWith: ["Gondar Ethiopia", "Axum Ethiopia", "Simien Mountains", "Kenya Nairobi"],
  relatedSlugs: ["rwanda-gorillas-5-days", "namibia-7-days", "kenya-masai-mara-7-days"],

  galleryQuery: "lalibela ethiopia rock churches bet giyorgis orthodox christian africa",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function EthiopiaLalibelaPage() {
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
