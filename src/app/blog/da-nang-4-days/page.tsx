import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Da Nang",
  country: "Vietnam",
  countryFlag: "🇻🇳",
  slug: "da-nang-4-days",
  heroQuery: "da nang golden bridge ba na hills vietnam",
  heroAlt: "Golden Bridge held by giant stone hands at Ba Na Hills, Da Nang, Vietnam",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Da Nang is Vietnam's most underrated city — a perfect beach base with a Dragon Bridge that breathes fire on weekends, marble mountains rising from the sand, and the Golden Bridge held aloft by giant stone hands above the clouds. Add a 45-minute drive to Hoi An's lantern-lit ancient town and an hour south to My Son Sanctuary's Cham towers, and four days barely scratches the surface of a city that delivers world-class experiences without Hanoi's chaos or Ho Chi Minh City's traffic.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$35",
    bestMonths: "Feb–May",
    airport: "DAD",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Marble Mountains & My Khe Beach" },
    { id: "day2", emoji: "📅", label: "Day 2 — Ba Na Hills Golden Bridge" },
    { id: "day3", emoji: "📅", label: "Day 3 — Hoi An Ancient Town" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — E-Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Vietnam E-Visa (single or multiple entry)"],
        ["Processing", "3 business days (standard)"],
        ["Fee", "$25 USD (single entry), $50 USD (multiple entry)"],
        ["Validity", "Up to 90 days per entry"],
        ["Apply at", "evisa.xuatnhapcanh.gov.vn (official government portal)"],
        ["Documents", "Passport scan, digital photo, credit card for online payment"],
        ["Notes", "Vietnam e-visa is simple and reliable. Apply 1 week before departure. The official portal is the only safe option — avoid third-party visa services."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — E-Visa Required",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Requirement", "Vietnam E-Visa (same process for all nationalities)"],
        ["Processing", "3 business days"],
        ["Fee", "$25 USD (single), $50 USD (multiple entry)"],
        ["Validity", "Up to 90 days"],
        ["Apply at", "evisa.xuatnhapcanh.gov.vn"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Notes", "Vietnam now issues 90-day e-visas to most nationalities. UK, EU, and AU citizens previously had short visa-free periods but the e-visa system is now the standard route."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$35–50/day",
      days: [
        {
          day: "Day 1",
          title: "Marble Mountains, My Khe Beach & Dragon Bridge Fire Show",
          items: [
            "08:00 — Rent a motorbike in Da Nang city centre ($5–7/day) — the most efficient way to explore the city and surrounding area; traffic is manageable and roads are well-marked compared to Hanoi or HCMC",
            "09:00 — Marble Mountains (Ngu Hanh Son): five limestone and marble hills 9km south of Da Nang (entrance ¥40,000 VND); climb Thuy Son hill via stone stairs for panoramic views over My Khe Beach and the South China Sea — the cave pagodas and Huyen Khong grotto are extraordinary",
            "11:30 — My Khe Beach: 30km of uninterrupted white sand consistently ranked among Asia's best beaches; swim in the calm morning surf before midday heat, then rent a sunbed (20,000 VND) and eat grilled corn from a beach vendor (10,000 VND)",
            "13:00 — Lunch at a seafood shack along My Khe: grilled snapper and morning-glory stir-fry for $5–7; the restaurant strip north of the Furama Resort has the best value seafood in Da Nang",
            "15:00 — Da Nang city exploration: Han Market for fresh fruit and Vietnamese street snacks (try banh mi from the market stalls for 20,000 VND), then walk the Han River bank and Dragon Bridge",
            "21:00 — Dragon Bridge fire and water show (Saturday and Sunday nights only, free to watch from the riverbank): the 666m bridge breathes fire and sprays water from the dragon's mouth at 9pm — arrive early for a front-row spot on the pedestrian walkway",
          ],
          cost: "$25–35 (motorbike, entrance, food, beach)",
        },
        {
          day: "Day 2",
          title: "Ba Na Hills & Golden Bridge",
          items: [
            "07:30 — Catch the earliest Ba Na Hills shuttle bus from Da Nang city centre ($3 shared van) or take the motorbike to the cable car base station (25km west of Da Nang)",
            "09:00 — Ba Na Hills cable car (280,000 VND round trip, included in resort combo ticket at 850,000 VND): the world's longest non-stop cable car ride (5.8km) rises 1,487m through cloud forest — the temperature drops 10 degrees at the summit",
            "10:00 — Golden Bridge: the 150m pedestrian bridge held by two giant stone hands is immediately recognizable from social media; arrive early before tour groups from Hoi An arrive at 10:30am",
            "11:30 — Ba Na Hills French Village: the mock-alpine resort town at the summit is kitsch but entertaining; try the gardens, the wax museum (included in combo ticket), and the Fantasy Park amusement rides",
            "13:00 — Lunch at the Ba Na Hills summit buffet restaurant (included in combo ticket for the higher-tier passes) or a la carte Vietnamese noodle soup at the food court (120,000 VND)",
            "16:00 — Cable car descent and return to Da Nang; dinner at a local pho shop near the city centre (pho bo with all trimmings for 50,000 VND)",
          ],
          cost: "$30–40 (transport, cable car + Golden Bridge combo, meals)",
        },
        {
          day: "Day 3",
          title: "Hoi An Ancient Town Day Trip",
          items: [
            "07:00 — Depart Da Nang for Hoi An by motorbike (30km, 45 minutes along the coast road via Marble Mountains and Non Nuoc Beach) or shared minivan ($3 per person)",
            "08:00 — Hoi An Ancient Town: buy a 5-ticket combo (120,000 VND) for access to 5 of the 22 heritage buildings including the Japanese Covered Bridge, one Chinese Assembly Hall, and three historic houses",
            "10:00 — Old town walking tour: Tan Ky Ancient House (dating to 1741), Phuc Kien Assembly Hall with its red lanterns and incense smoke, and the Japanese Covered Bridge that has connected the Japanese and Chinese merchant quarters since 1593",
            "12:30 — Lunch: cao lau noodles at Phuoc Hien restaurant on Tran Phu street (60,000 VND) — cao lau can only be made authentically in Hoi An because the water from the Cham Island wells is essential to the recipe",
            "14:30 — Cycling through rice fields to Tra Que Vegetable Village (rent bikes at $2/day near old town): taste the herbs growing in organic garden plots and watch farmers work — the most photogenic 2-hour detour from the tourist centre",
            "17:00 — Return to old town for lantern-lit evening: the streets are traffic-free from 7pm and every building glows with handmade silk lanterns; buy a floating lotus lantern (15,000 VND) and release it on the Thu Bon River",
            "20:00 — Return to Da Nang by motorbike or minivan",
          ],
          cost: "$20–30 (transport, heritage tickets, food, lantern)",
        },
        {
          day: "Day 4",
          title: "My Son Sanctuary & Departure",
          items: [
            "07:00 — My Son Sanctuary day trip (70km southwest of Da Nang): hire a motorbike or join a group tour ($12–15 including transport and guide); the 4th–14th century Cham Hindu temple complex is a UNESCO World Heritage Site and the largest in Southeast Asia after Angkor",
            "09:30 — My Son site exploration (150,000 VND entrance): Groups A through H of the surviving towers; the Ba Co group has the best-preserved sculpture work; hire a local guide at the gate ($5) for context on the Cham Kingdom's influence across maritime Southeast Asia",
            "12:30 — Lunch at a restaurant near My Son village: bun bo Hue (spicy Hue-style beef noodle soup) for 50,000 VND, then return toward Da Nang",
            "15:00 — Final afternoon at My Khe Beach or shopping for lacquerware and silk at Con Market in Da Nang before evening departure",
          ],
          cost: "$20–30 (transport, entrance, guide, food)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$80–130/day",
      days: [
        {
          day: "Day 1",
          title: "Marble Mountains, Beach Club & Dragon Bridge",
          items: [
            "09:00 — Private guided Marble Mountains tour with an English-speaking guide (book via GetYourGuide at $25/person, 3 hours): the guide explains the caves used as Viet Cong field hospitals during the war and the Buddhist iconography of the temple grottos",
            "12:00 — Lunch at a beach restaurant on My Khe: fresh crab stir-fried with salt and chili, morning-glory, and Vietnamese beer (Bia Hoi) for $15–20/person at a local seafood restaurant",
            "14:00 — Afternoon at a beach club on My Khe (Non Nuoc Beach Club or Furama Pool Day Pass at $15–25): swim in the sea, relax by the pool, and order cocktails from a sunbed",
            "18:00 — Sunset walk along the Han River promenade; dinner at a riverside restaurant: grilled Da Nang spring rolls, banh xeo (crispy pancake), and fresh Vietnamese coffee ($15–20/person)",
            "21:00 — Dragon Bridge fire show (Saturday/Sunday): watch from a riverside bar with cocktail in hand",
          ],
          cost: "$70–100 (guide, beach club, meals, drinks)",
        },
        {
          day: "Day 2",
          title: "Ba Na Hills Full Experience",
          items: [
            "07:30 — Private car to Ba Na Hills base station ($25 round trip); buy the all-inclusive combo ticket (1,200,000 VND covers cable car, Golden Bridge, Fantasy Park rides, and summit entertainment)",
            "09:00 — Cable car and Golden Bridge: spend at least 90 minutes at the bridge — in morning light the hands appear sculpted from real stone and mist rolls through the valley below",
            "11:00 — Ba Na Hills exploration: Debay Wine Cellar (included in ticket) has an impressive underground tunnel stocked with French wines; the Flower Garden has over 1,000 species of alpine flowers",
            "13:00 — Lunch at Le Jardin restaurant at the summit (included in premium combo): French-inspired Vietnamese fusion with mountain views",
            "15:30 — Fantasy Park: the indoor amusement complex has a 4D cinema, a wax museum, and games included in the combo ticket",
            "17:00 — Return cable car and dinner in Da Nang at a mid-range Vietnamese restaurant: full seafood meal for $20–30/person",
          ],
          cost: "$60–90 (car, premium combo, meals)",
        },
        {
          day: "Day 3",
          title: "Hoi An Ancient Town & Cooking Class",
          items: [
            "08:00 — Private car from Da Nang to Hoi An ($20 each way)",
            "09:00 — Guided heritage walk of Hoi An Ancient Town with a licensed guide ($20, 2.5 hours): Tan Ky House, Assembly Halls, Japanese Covered Bridge, and the story of Hoi An's golden age as Southeast Asia's premier trading port",
            "11:30 — Hoi An cooking class at Morning Glory Cooking School ($35/person, 3 hours): shop for ingredients at the central market with a chef, then cook cao lau, white rose dumplings, and banh mi from scratch",
            "15:00 — Afternoon cycling through Ha My Beach and Cam Kim Island (rent bikes from cooking class, $2): quieter than the old town and excellent for photography",
            "18:00 — Hoi An lantern-lit evening walk; dinner at Morning Glory Restaurant (sister restaurant to the cooking school): full menu of heritage Hoi An dishes for $15/person",
            "21:00 — Return to Da Nang by private car",
          ],
          cost: "$90–120 (car both ways, guide, cooking class, meals)",
        },
        {
          day: "Day 4",
          title: "My Son Sanctuary Guided Tour & Departure",
          items: [
            "07:30 — Private guided My Son Sanctuary tour ($45/person, including transport, licensed guide, and entrance): the guide provides detailed context on Cham Kingdom history and the significance of each temple group",
            "10:00 — Guided walk through My Son Sanctuary: the best guides can identify each ruler's expansion from architectural style; Groups B and C have the finest surviving bas-relief carvings",
            "13:00 — Traditional Cham lunch at a restaurant near My Son: banh trang (rice paper rolls) and grilled meats",
            "15:30 — Return to Da Nang; afternoon shopping at Vincom Plaza or Han Market for Vietnamese silk, lacquerware, and Hoi An lanterns as gifts",
          ],
          cost: "$60–80 (private tour, meals, shopping)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$200–400/day",
      days: [
        {
          day: "Day 1",
          title: "Sunrise Marble Mountains & Luxury Beach Resort",
          items: [
            "07:00 — Private sunrise guided tour of Marble Mountains (arrange through hotel concierge, $80 for a private guide): the site opens at 7am and in early morning light the cave pagodas are bathed in golden shafts through the ceiling openings",
            "10:00 — Check in to Four Seasons Da Nang Resort, Intercontinental Sun Peninsula, or Hyatt Regency Da Nang (from $350/night): these beachfront resorts sit on Bai Bac (Non Nuoc Beach) between the Marble Mountains and the Monkey Mountain headland",
            "13:00 — Lunch at the resort beach restaurant: fresh Da Nang seafood prepared by a Michelin-trained chef with views over the South China Sea ($40–60/person)",
            "15:00 — Afternoon on the resort beach or infinity pool; private surfing or stand-up paddleboard lesson arranged by the resort ($60)",
            "21:00 — Dragon Bridge fire show: resort driver takes you to the viewing point and back (15 minutes each way, the show lasts 15 minutes)",
          ],
          cost: "$350–500 (resort, private guide, meals, activities)",
        },
        {
          day: "Day 2",
          title: "Private Ba Na Hills & Helicopter Mount Fuji Parallel",
          items: [
            "07:30 — Private car to Ba Na Hills ($40 for a dedicated resort driver); VIP cable car cabin (skip the queue, private gondola available for groups, arrange through resort)",
            "09:30 — Golden Bridge exclusive morning photography session: the resort concierge can arrange a professional photographer ($100 for 90 minutes) to capture you at the bridge before tour groups arrive",
            "12:00 — Lunch at Morin Restaurant at Ba Na Hills (premium dining, $50/person): French-Vietnamese fusion with panoramic mountain views",
            "15:00 — Return to Da Nang; spa treatment at the resort (75-minute Vietnamese herbal massage, $80–120)",
            "20:00 — Private dinner at the resort on a beach terrace: 6-course tasting menu with Vietnamese wine pairing ($120/person)",
          ],
          cost: "$400–600 (private car, photography, spa, premium dining)",
        },
        {
          day: "Day 3",
          title: "Private Hoi An Lantern Cruise & Bespoke Heritage Tour",
          items: [
            "08:30 — Private car to Hoi An ($50 for resort car); private licensed heritage guide for the full day ($100)",
            "09:30 — Private heritage tour of Hoi An: the guide arranges after-hours access to Tan Ky House with the owning family for a private tea ceremony ($80) — a deeply personal experience connecting you to 8 generations of Chinese-Vietnamese merchants",
            "12:00 — Lunch at The Field Restaurant ($40/person): one of Vietnam's best farm-to-table experiences with ingredients grown 50 metres from the table",
            "14:30 — Private tailoring consultation on Tran Phu Street: a bespoke ao dai (Vietnamese traditional dress) or suit can be measured, cut, and completed in 24 hours ($80–300 depending on fabric)",
            "19:00 — Private lantern boat cruise on the Thu Bon River at sunset ($60 per boat): your own boat with a guide, floating lanterns, and wine as the old town lights up along the riverbank",
            "21:30 — Return to Da Nang resort by private car",
          ],
          cost: "$400–600 (private guide, car, tea ceremony, tailoring, boat)",
        },
        {
          day: "Day 4",
          title: "My Son Helicopter Tour & Departure",
          items: [
            "07:00 — Private My Son Sanctuary helicopter tour (charter from Da Nang airport, $800 for a 4-person helicopter, 2-hour excursion): aerial views of the Cham towers surrounded by jungle are extraordinary and impossible to appreciate at ground level",
            "10:00 — Guided ground-level tour of My Son after landing: private archaeologist guide ($150) explains the ongoing excavation work and UNESCO restoration programme",
            "13:00 — Farewell lunch at the resort: fresh Da Nang seafood with a curated Vietnamese wine selection",
            "15:30 — Resort driver to Da Nang Airport (DAD) or private transfer for Hoi An departure",
          ],
          cost: "$600–900 (helicopter, private guide, farewell lunch, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "🎒 Ultra Budget",
      accommodation: "$4–8 (dormitory hostel or basic guesthouse)",
      food: "$3–5 (market stalls, street pho, banh mi at 20,000 VND)",
      transport: "$2–4 (shared buses, walking, bicycle rental)",
      activities: "$5–10 (Marble Mountains only, free beach, Dragon Bridge)",
      total: "$15–25/day",
    },
    {
      tier: "💰 Budget",
      accommodation: "$8–15 (hostel dorm or budget guesthouse)",
      food: "$8–12 (street food, pho, banh mi, seafood shacks)",
      transport: "$5–10 (motorbike rental or shared vans)",
      activities: "$15–20 (Marble Mountains, Ba Na Hills, Hoi An tickets)",
      total: "$35–50/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$40–80 (3-star hotel or serviced apartment near the beach)",
      food: "$20–35 (sit-down restaurants, cooking class)",
      transport: "$15–25 (private cars, guided day trips)",
      activities: "$25–45 (guides, premium Ba Na Hills combo)",
      total: "$80–130/day",
    },
    {
      tier: "🌟 Premium",
      accommodation: "$100–180 (4-star beachfront hotel)",
      food: "$35–60 (fine Vietnamese dining, wine, cooking class)",
      transport: "$25–50 (private car transfers, chartered minivan)",
      activities: "$50–80 (private guide, photography session)",
      total: "$130–200/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$200–500 (Four Seasons, Intercontinental, Hyatt Regency)",
      food: "$60–120 (resort dining, Michelin-trained chefs)",
      transport: "$50–200 (resort private cars, helicopter)",
      activities: "$100–300 (private guides, photography, helicopter tours)",
      total: "$200–400/day",
    },
  ],
  mistakes: [
    {
      icon: "🌧️",
      title: "Visiting Da Nang during the typhoon and heavy rain season",
      desc: "Da Nang receives intense rainfall from October to December with occasional typhoons. The best dry season is February through May. Hoi An Ancient Town floods severely in November — check forecasts if planning an October-December visit.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌉",
      title: "Going to the Dragon Bridge on a weeknight",
      desc: "The Dragon Bridge fire and water show only runs on Saturday and Sunday nights at 9pm. Arrive at least 30 minutes early for a good viewing spot along the river. On weeknights the bridge is still beautiful lit up, but there is no fire show.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌤️",
      title: "Booking Ba Na Hills on a cloudy day without checking forecasts",
      desc: "Ba Na Hills at 1,487m elevation is frequently enveloped in cloud. The Golden Bridge loses its drama when visibility drops to 20 metres. Check the Ba Na Hills weather forecast the evening before and reschedule if cloud cover is heavy.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Eating at tourist-facing restaurants in Hoi An Ancient Town",
      desc: "Restaurants directly on Nguyen Thai Hoc and Bach Dang streets charge 3–4x the local price for the same dishes. Walk one block back from the river into the residential streets for authentic cao lau and white rose dumplings at a fraction of the price.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🏍️",
      title: "Not renting a motorbike or arranging transport in advance",
      desc: "Da Nang's key attractions are spread across 70km of coast and inland. Taxis and ride-share apps work well in the city centre but a motorbike ($5/day) unlocks the Marble Mountains, My Khe Beach, and the coastal road to Hoi An freely and inexpensively.",
      color: "bg-red-50 border-red-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Book Ba Na Hills in advance and go on a weekday",
      desc: "Ba Na Hills receives 20,000+ visitors on weekends. A Tuesday or Wednesday visit means the Golden Bridge is nearly empty at 9am. Book cable car tickets online to skip the queue. Find guided tours at https://www.getyourguide.com/s/?q=Da+Nang+Ba+Na+Hills&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🛵",
      title: "Rent a motorbike for the coastal road between Da Nang and Hoi An",
      desc: "The 30km coastal road from Da Nang to Hoi An via Non Nuoc Beach and Marble Mountains is one of the most scenic rides in Vietnam. Leave early morning, stop at the Marble Mountains for sunrise, and continue south along the sea to arrive in Hoi An before tour groups.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍜",
      title: "Try every Hoi An specialty at least once",
      desc: "Cao lau (thick pork noodles with lye-water noodles), white rose dumplings (banh bao vac), crispy pancakes (banh xeo), and the Hoi An-style chicken rice are all unique to this town and unavailable anywhere else in Vietnam. The central market has the most authentic versions at the lowest prices.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "💳",
      title: "Carry cash in Vietnamese dong for street food and markets",
      desc: "Cards are accepted at hotels and larger restaurants but street vendors, market stalls, motorbike rentals, and local pho shops are cash only. Withdraw dong at ATMs in Da Nang city centre and keep small bills for market purchases. The current rate is approximately 25,000 VND per USD.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Da Nang Airport to the city and beaches?",
      a: "Da Nang Airport (DAD) is 2km from the city centre. A Grab (Vietnamese ride-share) costs $2–4 to the city or $5–8 to My Khe Beach. Metered taxis are available but confirm the meter is running. Many beach hotels offer airport pickup for $10–15. The airport is one of the most convenient in Vietnam with no need for public transport.",
    },
    {
      q: "Can I visit both Da Nang and Hoi An in 4 days?",
      a: "Yes, 4 days is the ideal length for combining both destinations. Use Da Nang as your accommodation base and do Hoi An as a day trip on day 3 (45 minutes by motorbike or shared van). Alternatively, spend nights 3 and 4 in Hoi An for the lantern-lit evening atmosphere. The coastal road between the two cities passes the Marble Mountains and is one of Vietnam's best drives.",
    },
    {
      q: "Is the Golden Bridge at Ba Na Hills worth the price?",
      a: "The Ba Na Hills combo ticket (850,000–1,200,000 VND depending on inclusions) is expensive by Vietnamese standards but the Golden Bridge is genuinely stunning and unlike anything else in Asia. Go on a clear weekday morning before 10am when the mist is still in the valley and tour groups have not yet arrived. The cable car ride itself is also spectacular.",
    },
    {
      q: "What is the best beach near Da Nang?",
      a: "My Khe Beach (5km from city centre) is the main beach with the widest range of facilities and consistent surf. Non Nuoc Beach (10km south, adjacent to Marble Mountains) is quieter and flanked by luxury resorts. An Bang Beach (near Hoi An, 30km south) is the most laid-back with local fishing boats and excellent cheap seafood restaurants. All three are easily accessible by motorbike.",
    },
  ],
  combineWith: ["hoi-an-3-days", "hue-2-days", "hanoi-4-days"],
  relatedSlugs: ["hoi-an-3-days", "hue-2-days", "hanoi-4-days", "ho-chi-minh-city-4-days"],
};

export const metadata: Metadata = {
  title: "Da Nang in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Da Nang itinerary — Golden Bridge Ba Na Hills, Marble Mountains, My Khe Beach, Hoi An day trip, Dragon Bridge fire show, and My Son Sanctuary. Budget $35/day to luxury beach resorts. All visa info included.",
  keywords: [
    "Da Nang itinerary",
    "Da Nang 4 days",
    "Da Nang travel guide 2026",
    "Golden Bridge Ba Na Hills",
    "Marble Mountains Da Nang",
    "Hoi An day trip",
    "Dragon Bridge fire show",
    "My Son Sanctuary",
    "Da Nang visa Indian passport",
  ],
  openGraph: {
    title: "Da Nang in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Golden Bridge, Marble Mountains, My Khe Beach, Hoi An lanterns, Dragon Bridge fire — Da Nang in 4 days from $35/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/da-nang-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Da Nang in 4 Days: Complete 2026 Itinerary",
    description:
      "Golden Bridge, Marble Mountains, My Khe Beach, Hoi An lanterns — Da Nang in 4 days from $35/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/da-nang-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Da Nang in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
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
          name: "Da Nang in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/da-nang-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Da Nang",
      description:
        "Da Nang, Vietnam — the Golden Bridge at Ba Na Hills, Marble Mountains, My Khe Beach, Dragon Bridge fire show, and a gateway to Hoi An and My Son Sanctuary.",
      geo: { "@type": "GeoCoordinates", latitude: 16.0544, longitude: 108.2022 },
    },
  ],
};

export default function DaNangPage() {
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
