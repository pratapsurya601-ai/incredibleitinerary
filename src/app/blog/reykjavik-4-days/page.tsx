import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";
const slug = "reykjavik-4-days";
const canonicalUrl = `${siteUrl}/blog/${slug}`;

const data: UniversalBlogData = {
  destination: "Reykjavik",
  country: "Iceland",
  countryFlag: "🇮🇸",
  slug,
  heroQuery: "Reykjavik Iceland northern lights aurora city harbour",
  heroAlt: "Hallgrimskirkja church towering over Reykjavik rooftops with northern lights in the sky",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Reykjavik is the world's northernmost capital and one of its most theatrical — a compact city of 130,000 people where geothermal steam rises from the pavements, Hallgrimskirkja's concrete spire dominates the skyline, and the northern lights sometimes blaze green and purple right above the city centre on a clear winter night. Within two hours of the city lies the Golden Circle: Geysir erupting every 6 minutes, Gullfoss thundering into a canyon, and Thingvellir where the tectonic plates of North America and Eurasia split apart before your eyes. In summer, the midnight sun makes time meaningless. Four days gives you the city, the Golden Circle, the Blue Lagoon, a whale watching trip and every hot dog, skyr and Brennivin the capital has to offer.",
  stats: {
    duration: "4 Days",
    budgetFrom: "ISK 15,000 (~USD $110)",
    bestMonths: "Jun–Aug (midnight sun) or Sep–Mar (northern lights)",
    airport: "KEF (Keflavik)",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Reykjavik City & Hallgrimskirkja" },
    { id: "day2", emoji: "📅", label: "Day 2 — Golden Circle" },
    { id: "day3", emoji: "📅", label: "Day 3 — Blue Lagoon & Whale Watching" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C) — Iceland is Schengen"],
        ["Fee", "EUR 80 per person"],
        ["Processing", "15–30 business days"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "French Embassy (handles Iceland visas in many countries) or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance"],
        ["Notes", "Apply 6–8 weeks before travel. Iceland has no embassy in India — apply through the French Embassy or designated Schengen consulate. Biometric appointment required."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area member)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (EUR 7, register online before departure)"],
        ["Passport validity", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free but subject to the 90/180-day Schengen rule. Iceland is Schengen though not EU."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "ISK 15,000–20,000 (~USD $110–150)/day",
      days: [
        {
          day: "Day 1",
          title: "Reykjavik City & Hallgrimskirkja",
          items: [
            "Flybus from Keflavik Airport to Reykjavik BSI bus terminal (ISK 3,500 / USD $26) — far cheaper than a taxi (USD $120–150); book in advance at re.is",
            "Check in to a hostel dorm in the 101 Reykjavik postcode (Kex Hostel or Loft Hostel, ISK 5,000–7,000 / USD $37–52/night) — both are social, central and well-reviewed",
            "Walk Laugavegur, the main shopping and cafe street: window shop, look for the Bonus supermarket (pink pig logo) for budget groceries",
            "Hallgrimskirkja church (exterior free, tower lift ISK 1,000 / USD $7.50) — the tower gives the best free-ish panoramic view of Reykjavik and the harbour",
            "Sunset hot dog at Baejarins Beztu Pylsur — the world-famous hot dog stand near the harbour open since 1937; an Icelandic lamb hot dog costs ISK 590 (~USD $4.30)",
            "If northern lights forecast is KP3 or above: walk to the Grotta Lighthouse at Seltjarnarnes (30 min bus or 1 hr walk) for dark skies above a glowing city",
          ],
          cost: "ISK 12,000–17,000 (transport, accommodation, food, tower)",
        },
        {
          day: "Day 2",
          title: "Golden Circle Self-Drive",
          items: [
            "Rent a small car for 1 day (ISK 8,000–12,000 / USD $58–88 including basic insurance); pick up from Reykjavik city rather than airport for lower rates",
            "Thingvellir National Park (free entry): walk the Almannagja fault rift — the literal crack between the North American and Eurasian tectonic plates; the Oxara River and historic Althing parliament site are extraordinary",
            "Geysir Geothermal Area (free to enter): the Strokkur geyser erupts every 5–10 minutes to 20–40 m height; the surrounding hot spring field has boiling mud pools; arrive before tour buses at 9am for photos without crowds",
            "Gullfoss Waterfall (free): the most powerful waterfall in Europe plunges 32 m into a canyon; in good light a rainbow forms in the spray; the viewing path is free and gets close",
            "Return via Selfoss town for a supermarket dinner — grocery store sushi or a soup pack (ISK 800–1,500) eaten back at the hostel saves USD $30 vs restaurant dinner",
          ],
          cost: "ISK 15,000–22,000 (car rental, fuel, site fees, food)",
        },
        {
          day: "Day 3",
          title: "Blue Lagoon & Whale Watching",
          items: [
            "Pre-book the Blue Lagoon Comfort Package (ISK 11,990 / USD $88) — this tier includes silica mud mask and a drink; budget visitors should book the Comfort tier not Retreat to save ISK 30,000",
            "The bus from Reykjavik to Blue Lagoon runs via Flybus (ISK 2,500 each way) or you drive the hire car if kept a second day",
            "Afternoon whale watching from Reykjavik Old Harbour (3-hour boat tour, ISK 11,990 / USD $88 — Elding or Whale Safari operators): humpback whales, minke whales and harbour porpoises all spotted year-round; summer months have highest sighting success",
            "Evening: free Harbour area walk past the Solfar Sun Voyager sculpture; excellent for photography at sunset in summer or with city lights in winter",
            "Dinner: skyr bowl or lamb soup from a supermarket or the local Hlollabatar hotdog bus",
          ],
          cost: "ISK 26,000–32,000 (Blue Lagoon, whale watching, food, transport)",
        },
        {
          day: "Day 4",
          title: "Perlan Museum & Northern Lights Hunt",
          items: [
            "Perlan Museum on the hill above Reykjavik (ISK 4,490 / USD $33) — inside a geothermal water tank: real ice cave, aurora exhibition and 360-degree panorama of the city and surrounding mountains",
            "National Museum of Iceland (ISK 2,500 / USD $18) — comprehensive Viking age and settlement history; the exhibit on the first settlers from Norway in 874 AD is fascinating",
            "Reykjavik Botanical Garden (free) and Laugardalur valley walk — the hot spring valley where Reykjavik's outdoor geothermal pools are the cheapest bathing option (Laugardalslaug, ISK 1,000)",
            "If this is a winter trip (Sep–Mar): join a free-cancel northern lights tour via minibus (ISK 6,000–9,000 / USD $44–65); guides chase clear skies across the peninsula; many tours offer a free rebooking if no lights appear",
          ],
          cost: "ISK 14,000–22,000 (museums, geothermal pool, lights tour, food)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "ISK 35,000–50,000 (~USD $260–370)/day",
      days: [
        {
          day: "Day 1",
          title: "Reykjavik Arrival & City Highlights",
          items: [
            "Private transfer from Keflavik to Reykjavik (ISK 15,000 / USD $110 for a shared private shuttle) or Flybus to a 3-star guesthouse in the 101 postcode (Centerhotel Skjaldbreid or similar, ISK 22,000–30,000/night)",
            "Hallgrimskirkja tower (ISK 1,000) for the panoramic view then walk Skolavordustigur — the colourful street below the church with galleries, wool shops and the famous Icelandic knitted lopapeysa sweaters",
            "Reykjavik Art Museum, Hafnarhus branch (ISK 1,900): Erró pop art and rotating exhibitions; the building on the old harbour is handsome",
            "Dinner at Messinn on Laugavegur — the best fish restaurant in the city; pan-fried catch of the day with Icelandic butter and rye bread (ISK 4,500–6,000 / USD $33–44)",
            "Evening walk to the Grotta Lighthouse for northern lights (Sep–Mar) or midnight sun photography (May–Aug)",
          ],
          cost: "ISK 32,000–42,000 (hotel, museum, dinner, transport)",
        },
        {
          day: "Day 2",
          title: "Golden Circle & Silfra Snorkelling",
          items: [
            "Rent a 4WD for the day (ISK 14,000–20,000 / USD $103–147) to handle Golden Circle roads in any weather; pick up at a city rental",
            "Thingvellir: Silfra fissure snorkelling with a dry suit tour (USD $120–150 per person, book at Dive.is or Arctic Adventures 2 weeks ahead) — snorkelling between tectonic plates in the clearest fresh water on earth is surreal",
            "Geysir: Strokkur eruption photos at 9am before coach tours arrive; the on-site hotel has a decent lunch buffet (ISK 3,500)",
            "Gullfoss: follow the path to the lower viewing platform to feel the waterfall spray",
            "Optional extension: Secret Lagoon geothermal pool in Fludir village (ISK 3,000 / USD $22) — smaller than Blue Lagoon but more authentic, hot spring water in a grass-surrounded pool open year-round",
          ],
          cost: "ISK 38,000–52,000 (4WD, Silfra, Secret Lagoon, food)",
        },
        {
          day: "Day 3",
          title: "Blue Lagoon Premium & Reykjanes Peninsula",
          items: [
            "Blue Lagoon Premium Package (ISK 19,990 / USD $147) — includes the floating breakfast tray, silica mask and mineral mask; arrive early for the quietest experience (7am opening)",
            "Drive the Reykjanes Peninsula lava fields afterward: the Bridge Between Continents (free), Gunnuhver hot springs geothermal area (free, steaming vents and mud pools) and the Reykjanesviti lighthouse",
            "Whale watching from Reykjavik Harbour (afternoon departure): classic 3-hour tour with Elding (ISK 11,990 / USD $88); request the upper observation deck spot for best photography",
            "Late dinner at Snaps Bistro in 101 Reykjavik — French-influenced Icelandic bistro; duck confit or lamb fillet with local herbs (ISK 6,000–8,000)",
          ],
          cost: "ISK 42,000–58,000 (Blue Lagoon, peninsula drive, whale watching, dinner)",
        },
        {
          day: "Day 4",
          title: "Waterfall Hike, Horseback & Northern Lights",
          items: [
            "Half-day Icelandic horse riding on a nearby farm (ISK 12,000–16,000 / USD $88–117 for a 2-hour ride) — the Icelandic horse has a unique 5th gait called the tolt; farms near Reykjavik offer morning rides followed by coffee in the farmhouse",
            "Lunch at Cafe Loki near Hallgrimskirkja — the most traditional Icelandic cafe: fermented shark (hakarl, ISK 1,600) if you are adventurous, lamb soup and rye bread with smoked trout",
            "Perlan Museum for the real ice cave and aurora exhibit (ISK 4,490)",
            "Private northern lights tour by minibus with a guide (ISK 9,000 / USD $65) — if no lights tonight, rebooking is typically offered; the aurora season runs mid-August to mid-April",
          ],
          cost: "ISK 36,000–48,000 (horse riding, museums, lights tour, meals)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "ISK 80,000–150,000 (~USD $590–1,100)/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Spa & Luxury Dining",
          items: [
            "Private limousine transfer from Keflavik Airport to a 5-star hotel (Ion Adventure Hotel, Hotel Borg, or the Retreat at Blue Lagoon): ISK 30,000–50,000 / USD $220–370 for the transfer alone",
            "Check in to the Hotel Borg on Austurvollur square (ISK 60,000–100,000 / USD $440–735/night) — a 1930s art deco landmark with the best service in the city",
            "Private guided Reykjavik city tour with a cultural historian (3 hours, ISK 40,000 / USD $294) — covering the settlement museum, hidden Viking ruins under the city and private access to Hallgrimskirkja",
            "Dinner at Dill Restaurant — Iceland's first Michelin-starred restaurant; Nordic tasting menu with local herbs, skyr emulsions and Icelandic lamb (ISK 25,000–35,000 / USD $184–257 per person with wine pairing)",
          ],
          cost: "ISK 120,000–180,000 (hotel, transfer, tour, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Golden Circle & Glacier Walk",
          items: [
            "Private driver-guide for the full Golden Circle (ISK 80,000–120,000 / USD $588–882 for a private full-day tour with a vehicle): stops timed to avoid crowds at Geysir, Gullfoss and Thingvellir",
            "Silfra fissure private dive (not snorkel) with certified dive guide (USD $300 for a private 2-tank dive)",
            "Langjokull glacier snowmobile tour from a meeting point near the Golden Circle (USD $150–200 per person): riding across Europe's second-largest glacier at 1,355m is extraordinary",
            "Return to Reykjavik for a private geothermal pool session — many luxury hotels offer private hot pot rental on rooftop terraces (ISK 15,000 / USD $110 per hour)",
          ],
          cost: "ISK 160,000–220,000 (private guide, glacier, dive, private pool)",
        },
        {
          day: "Day 3",
          title: "The Retreat at Blue Lagoon & Whale Safari",
          items: [
            "The Retreat at Blue Lagoon: day-use or overnight package (USD $250+ per person for the spa day, USD $700–1,200+ for an overnight room) — the most premium geothermal spa experience in the world; private lagoon areas, moss-cave bar, restaurant overlooking the lava",
            "Return to Reykjavik by private driver",
            "Private luxury whale watching with champagne on board: a yacht charter with Elding or Sea Trips Iceland (USD $300–500 for a private 3-hour charter) — humpback whale encounters with just your group on deck",
            "Dinner at Grillid Restaurant on the top floor of the Grand Hotel Reykjavik — panoramic city views, prime Icelandic lamb and seafood; ISK 15,000–22,000 / USD $110–162 per person",
          ],
          cost: "ISK 150,000–250,000 (Blue Lagoon Retreat, yacht charter, dinner, driver)",
        },
        {
          day: "Day 4",
          title: "Helicopter over Volcanoes & Northern Lights Hunt",
          items: [
            "Helicopter tour over the Fagradalsfjall volcanic landscape and Reykjanes Peninsula lava fields (USD $350–500 per person for a 45-minute private flight from Reykjavik) — the most dramatic aerial scenery in Europe since the 2021 eruption",
            "Private ice cave tour in Langjokull glacier (USD $200 per person with a private guide into a man-made ice tunnel illuminated by LED lights)",
            "Farewell lunch at Nostra on Laugavegur — intimate 20-seat fine dining room with Nordic tasting menus (ISK 14,000 / USD $103 for the 7-course lunch)",
            "Sunset private northern lights photography tour with a professional photographer (USD $200–300): guaranteed departure by car at optimal KP index, positioning at the best dark-sky locations",
          ],
          cost: "ISK 170,000–280,000 (helicopter, ice cave, fine dining, lights photographer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "ISK 5,000–7,000 (hostel dorm)",
      food: "ISK 3,000–5,000 (supermarket, hot dogs)",
      transport: "ISK 2,500–4,500 (Flybus, car share)",
      activities: "ISK 4,000–8,000 (Gullfoss, Geysir free, tower)",
      total: "ISK 15,000–25,000/day (~USD $110–185)",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "ISK 22,000–30,000 (3-star guesthouse)",
      food: "ISK 8,000–14,000 (restaurant meals)",
      transport: "ISK 6,000–10,000 (rental car, shuttle)",
      activities: "ISK 12,000–18,000 (Blue Lagoon, whale tour)",
      total: "ISK 35,000–55,000/day (~USD $260–405)",
    },
    {
      tier: "💎 Luxury",
      accommodation: "ISK 60,000–100,000 (5-star hotel)",
      food: "ISK 20,000–40,000 (Michelin, fine dining)",
      transport: "ISK 15,000–50,000 (private driver, helicopter)",
      activities: "ISK 40,000–80,000 (private tours, Retreat)",
      total: "ISK 80,000–150,000/day (~USD $590–1,100)",
    },
    {
      tier: "🌌 Northern Lights Season",
      accommodation: "ISK 20,000–40,000 (winter surge)",
      food: "ISK 5,000–15,000",
      transport: "ISK 6,000–12,000 (winter roads 4WD)",
      activities: "ISK 8,000–15,000 (lights tour, ice cave)",
      total: "ISK 35,000–75,000/day (~USD $260–550)",
    },
    {
      tier: "☀️ Midnight Sun Season",
      accommodation: "ISK 25,000–50,000 (peak summer)",
      food: "ISK 6,000–16,000",
      transport: "ISK 8,000–14,000 (car rental peak)",
      activities: "ISK 10,000–20,000 (puffin tours, kayaking)",
      total: "ISK 40,000–85,000/day (~USD $295–625)",
    },
  ],
  mistakes: [
    {
      icon: "🌌",
      title: "Expecting to see the northern lights every night",
      desc: "Aurora viewing requires clear skies and solar activity (KP index 3+). Iceland's weather is famously unpredictable. Book accommodation with a free-cancel northern lights tour that offers a rebooking if conditions fail. The aurora season runs mid-August to mid-April — you cannot see them in the summer midnight sun months.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚗",
      title: "Not renting a car for the Golden Circle",
      desc: "Bus tours to the Golden Circle run on schedules, stop for limited time and cannot deviate to the Secret Lagoon, Kerlingarfjoll or other lesser-visited spots. Renting a small car for the day (USD $58–88) gives total freedom and works out cheaper per person than a coach tour for groups of 2+.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏊",
      title: "Booking Blue Lagoon on the day — it sells out weeks ahead",
      desc: "The Blue Lagoon is one of the most visited attractions in Europe and sells out weeks to months in advance in peak summer and during Carnival/New Year. Book online before your flights. Entrance times are allocated slots — you cannot just show up. The Comfort package (ISK 11,990) is the best value tier.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💸",
      title: "Eating out for every meal without using supermarkets",
      desc: "Reykjavik restaurants charge ISK 3,500–6,000 for a main course. Bonus (yellow/pink pig logo) and Kronan supermarkets sell quality Icelandic produce for a fraction of the price. Skyr (thick yoghurt), smoked salmon, rye bread, and ready meals from the supermarket save USD $30–50 per day without any sacrifice in quality.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌬️",
      title: "Under-packing for Icelandic weather at any time of year",
      desc: "Iceland has a saying: if you do not like the weather, wait 5 minutes. Even in July the temperature hovers around 12°C and wind chill can make it feel like 4°C. Pack a windproof waterproof jacket, thermal base layers and sturdy waterproof walking shoes regardless of season. The wind at Gullfoss and Thingvellir is powerful and relentless.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌡️",
      title: "Visit the geothermal public pools every day",
      desc: "Reykjavik has multiple outdoor geothermal public pools (Laugardalslaug, Sundholl, Vesturbaejarlaug) that cost only ISK 1,000–1,100 (USD $7.50) and are where real Icelanders socialise. The hot pots (outside tubs) sit at 38–44°C year-round. Going at 7am before work with locals is a uniquely Icelandic experience. Book activities at https://www.getyourguide.com/s/?q=Reykjavik&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🐋",
      title: "Whale watching success is highest May to September",
      desc: "Reykjavik's whale watching tours run year-round but success rates for humpback whale sightings are highest in summer. Elding and Whale Safari Iceland both offer free rebooking if no cetaceans are sighted. Morning departures typically have calmer seas. The 3-hour tours on the Faxafloi Bay also spot harbour porpoises, white-beaked dolphins and seabirds.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌅",
      title: "Download the Aurora Forecast app before you arrive",
      desc: "The Icelandic Met Office app (vedur.is) and the Aurora Forecast app show real-time KP index, cloud cover maps and aurora visibility forecasts. A KP of 3 or above with less than 30% cloud cover over your location means you should head out. The Grotta Lighthouse (north tip of Seltjarnarnes peninsula) is 3 km from central Reykjavik and one of the best dark-sky spots near the city.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌭",
      title: "Eat the hot dog at Baejarins Beztu Pylsur standing up",
      desc: "Iceland's most famous food is a lamb-pork-beef hot dog from a small red kiosk near Reykjavik Harbour that has been operating since 1937. Order 'ein med ollu' (one with everything) for mustard, ketchup, remoulade, raw onion and crispy fried onion. It costs ISK 590 (USD $4.30) and is genuinely one of the best snacks in Europe. Bill Clinton famously ate one in 1994.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "When is the best time to see the northern lights in Reykjavik?",
      a: "The northern lights (aurora borealis) are visible from approximately mid-August to mid-April when nights are sufficiently dark. The peak season is September to March when nights are longest. You need clear skies and a KP index of at least 2–3 above Reykjavik. The best strategy is to stay 3–4 nights in winter, book a tour with a free-rebooking policy, and check the aurora forecast app daily. Strong auroras (KP 5+) are visible even from the city centre, but rural areas outside the city lights are better for photography.",
    },
    {
      q: "Is Iceland expensive and can budget travellers enjoy it?",
      a: "Iceland is one of Europe's most expensive destinations. A sit-down restaurant meal costs USD $25–40 for a main course. However, supermarkets (Bonus and Kronan) offer quality Icelandic food at reasonable prices. Public geothermal pools cost USD $7.50. Many of the best sights — Thingvellir, Geysir, Gullfoss, the Reykjanes Peninsula lava fields — are free. Budget travellers can enjoy Iceland well for USD $110–150 per day by staying in hostels, cooking some meals and renting a car to share between two or more people.",
    },
    {
      q: "How do I get from Keflavik Airport to Reykjavik city centre?",
      a: "Flybus (re.is) costs ISK 3,500 (USD $26) and runs from the airport to the BSI bus terminal in Reykjavik, with connections to hotels for an extra ISK 500. Journey time is 45–50 minutes. A private taxi or airport transfer costs USD $120–150 but serves groups well split across 4 people. There is no direct train or metro. Book Flybus in advance online for the best price and to guarantee a seat on busy arrivals.",
    },
    {
      q: "Can I do the Golden Circle without a car?",
      a: "Yes, but with limitations. Several tour operators run daily Golden Circle bus tours from Reykjavik's BSI terminal for ISK 7,000–12,000 (USD $51–88) per person. These include Reykjavik Excursions and Gray Line Iceland. The downside is fixed timing (you cannot linger at Gullfoss or arrive at Geysir before 9am crowds), and buses do not include stops at the Secret Lagoon or Kerlingarfjoll. For solo travellers, the bus tour is fine. For two or more people, renting a car is cheaper and far more flexible.",
    },
  ],
  combineWith: [
    "norway-fjords-6-days",
    "edinburgh-4-days",
    "dublin-4-days",
    "copenhagen-3-days",
  ],
  relatedSlugs: [
    "norway-fjords-6-days",
    "edinburgh-4-days",
    "stockholm-4-days",
    "helsinki-3-days",
  ],
  galleryQuery: "Reykjavik Iceland aurora northern lights Golden Circle waterfall",
};

export const metadata: Metadata = {
  title: "Reykjavik in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Reykjavik itinerary — northern lights hunting, the Golden Circle (Geysir, Gullfoss, Thingvellir), Blue Lagoon, Hallgrimskirkja, hot dogs, midnight sun and whale watching. Full visa info for Indian and Western passports.",
  keywords: [
    "Reykjavik itinerary",
    "Reykjavik 4 days",
    "Iceland travel guide 2026",
    "northern lights Iceland",
    "Golden Circle Iceland",
    "Blue Lagoon Iceland",
    "Iceland budget travel",
    "Reykjavik visa Indian passport",
    "midnight sun Iceland",
    "whale watching Reykjavik",
  ],
  openGraph: {
    title: "Reykjavik in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Northern lights, the Golden Circle, Blue Lagoon and midnight sun — Reykjavik in 4 days from USD $110/day to Michelin-starred luxury.",
    type: "article",
    url: canonicalUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Reykjavik in 4 Days: Complete 2026 Travel Guide",
    description:
      "Northern lights, Golden Circle, Blue Lagoon and whale watching — your complete 4-day guide to Reykjavik, Iceland.",
  },
  alternates: { canonical: canonicalUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Reykjavik in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
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
          name: "Reykjavik in 4 Days",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Reykjavik",
      description:
        "Reykjavik, Iceland — the world's northernmost capital, gateway to the northern lights, the Golden Circle, Blue Lagoon, midnight sun and some of the world's most dramatic volcanic landscapes.",
      geo: { "@type": "GeoCoordinates", latitude: 64.1466, longitude: -21.9426 },
    },
  ],
};

export default function ReykjavikPage() {
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
