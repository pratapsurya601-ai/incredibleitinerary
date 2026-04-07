import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Vientiane, Laos",
  country: "Laos",
  countryFlag: "🇱🇦",
  slug: "vientiane-3-days",
  heroQuery: "vientiane laos pha that luang golden stupa sunset mekong",
  heroAlt: "Pha That Luang golden stupa in Vientiane glowing at sunset with a clear blue sky",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Vientiane is Southeast Asia's most laid-back capital — a city of golden stupas, colonial French boulevards, and Mekong sunsets so slow and warm they feel like they belong in a different century. The Pha That Luang stupa, covered in 500 kilograms of gold leaf, is Laos's most sacred national symbol. The COPE Centre tells the sobering story of the most heavily bombed country per capita in history and the prosthetics programme helping survivors today. Three days is enough to see the stupas, drink Beer Lao watching the river turn orange, eat sticky rice and laap with your hands, and understand why travellers who 'just pass through' often stay for weeks.",
  stats: { duration: "3 Days", budgetFrom: "$25", bestMonths: "Nov-Feb", airport: "VTE" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Patuxai & Night Market" },
    { id: "day2", emoji: "📅", label: "Day 2 — Pha That Luang & COPE" },
    { id: "day3", emoji: "📅", label: "Day 3 — Buddha Park & Mekong" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa on Arrival Available",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Requirement", "Visa on Arrival (VOA) available"],
        ["Processing", "30 minutes on arrival at Wattay Airport"],
        ["Fee", "$30-35 USD (pay in USD or Thai Baht)"],
        ["Validity", "30 days single entry"],
        ["Documents", "Passport photo, onward ticket, hotel booking, $30-35 cash"],
        ["Notes", "E-Visa also available online at laoevisa.gov.la before travel ($35, faster processing)"],
        ["Extension", "Can extend 30 days at immigration in Vientiane for $2/day"],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa on Arrival",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa on Arrival ($30-35)"],
        ["Processing", "30 minutes on arrival"],
        ["Fee", "$30-35 USD cash"],
        ["Validity", "30 days"],
        ["E-Visa", "Available online at laoevisa.gov.la ($35, recommended)"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Notes", "Bring passport photos and exact USD cash to speed up VOA processing."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$25-45/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Patuxai & Night Market",
          items: [
            "14:00 — Arrive at Wattay International Airport (VTE); a metered taxi or tuk-tuk to the city centre costs 60,000-80,000 kip ($3-4); book a guesthouse or budget hostel near the Mekong river or Nam Phu fountain area for 80,000-150,000 kip ($4-8)/night",
            "16:00 — Patuxai victory monument (the Vientiane Arc de Triomphe, built with US concrete donated for an airport): entry 3,000 kip ($0.15) to climb; the rooftop view over the lane xang boulevard and surrounding temple rooftops is excellent for photography",
            "17:30 — Walk down Lane Xang Avenue toward the Presidential Palace and the central fountain area; the wide French-colonial boulevard lined with frangipanis is at its best in the evening light",
            "19:00 — Vientiane night market along the Mekong riverfront near Fa Ngum Road: street food stalls sell grilled meat skewers, papaya salad, and fresh spring rolls for 10,000-20,000 kip ($0.50-1) each; cold Beer Lao large bottles cost 15,000 kip ($0.75)",
            "21:00 — Sit on the riverfront with a Beer Lao watching the lights of Nong Khai, Thailand, reflecting on the water just 2km away; this is the defining Vientiane activity and it is completely free",
          ],
          cost: "$15-25 (taxi, food, beer, entry fee)",
        },
        {
          day: "Day 2",
          title: "Pha That Luang, Wat Sisaket & COPE Centre",
          items: [
            "08:00 — Pha That Luang (Great Sacred Stupa) opens at 8am; arrive early before tour buses; entry 5,000 kip ($0.25); the central golden spire is covered in 500 kg of gold leaf and is Laos's most sacred national monument; the surrounding cloister contains hundreds of Buddha images",
            "09:30 — Wat Sisaket (built 1818, the oldest surviving temple in Vientiane): entry 5,000 kip; the cloister walls contain 6,840 tiny Buddha niches each holding a miniature figure; the main hall has a mother-of-pearl throne and beautifully decaying frescoes",
            "11:00 — Haw Phra Kaew (former royal temple, now a museum): entry 5,000 kip; originally built to house the Emerald Buddha (now in Bangkok); the collection of Lao religious art and gilded artifacts is the best in the country",
            "13:00 — Lunch at a local Lao restaurant near the centre: khao niew (sticky rice) with laap (minced meat salad with lime, fish sauce, and toasted rice powder) and a papaya salad for 30,000-50,000 kip ($1.50-2.50) per dish",
            "15:00 — COPE Visitor Centre (free entry): a powerful and moving exhibition on the UXO (unexploded ordnance) crisis left by US bombing during the Vietnam War era (Laos was the most bombed country per capita in history); the prosthetics and rehabilitation programme for victims is explained with sensitivity; allow 1.5 hours",
            "17:30 — That Dam (the Black Stupa) in the city centre: a 16th-century stupa that was stripped of its gold by invading Siamese armies in 1828; it sits unrestored in the middle of a traffic roundabout and has an eerie, powerful presence compared to the gilded stupas elsewhere",
          ],
          cost: "$10-20 (entries, lunch, tuk-tuk)",
        },
        {
          day: "Day 3",
          title: "Buddha Park & Mekong Sunset",
          items: [
            "08:30 — Tuk-tuk or songthaew to Buddha Park (Xieng Khuan) 25km south of the city: 40,000-60,000 kip ($2-3) each way by shared songthaew from the Khua Din bus station; entry 5,000 kip",
            "09:30 — Explore Buddha Park: a surreal collection of over 200 concrete Buddhist and Hindu sculptures created in the 1950s by a self-styled shaman-priest named Bunleua Sulilat; the giant pumpkin-shaped structure with hell, earth, and heaven floors is unmissable; climb the roof for panoramic views over the Mekong to Thailand",
            "12:00 — Lunch at a restaurant near Khua Din market on return: or pick up grilled corn and papaya salad from market stalls for 10,000-15,000 kip ($0.50-0.75)",
            "15:00 — Final afternoon in the city: rent a bicycle (20,000-30,000 kip/$1-1.50 per day) and cycle along the Mekong promenade; stop at the morning market (Talat Sao) for last-minute souvenir shopping — handwoven silk textiles, silver jewellery, and coffee from the Bolaven Plateau",
            "18:00 — Final Mekong sunset at a riverside bar or simply on the bank itself; Beer Lao, sticky rice, and the Thai shore turning pink is the perfect Vientiane farewell",
          ],
          cost: "$15-25 (tuk-tuk, entry, bicycle, food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$75-130/day",
      days: [
        {
          day: "Day 1",
          title: "Colonial Quarter & Riverfront Evening",
          items: [
            "13:00 — Arrive VTE and take a metered taxi ($8-10) to a mid-range boutique hotel near the Nam Phu fountain or Mekong riverfront ($50-80/night); Vientiane has several excellent small boutique properties that combine Lao architecture with modern comfort",
            "15:00 — Guided walking tour of the French colonial quarter with a local guide ($25-35/person): the presidential palace, colonial post office, national assembly building, and Lao-French fusion architecture along Setthathirath Road tell the story of French Indochina in Vientiane better than any museum",
            "17:30 — Patuxai rooftop and the sunset promenade along Lane Xang Avenue: the central fountain area is a pleasant gathering point at dusk with vendors selling fresh sugarcane juice ($0.50)",
            "19:30 — Dinner at Kua Lao or a quality Lao restaurant on Samsenthai Road ($15-25/person): a full Lao set menu with laap, mok pa (steamed fish in banana leaf), or or lam (Luang Prabang stew with vegetables and lemongrass); finish with Lao coffee dessert",
          ],
          cost: "$90-120 (hotel, guide, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Temple Circuit, COPE & Night Market Dinner",
          items: [
            "08:00 — Pha That Luang at opening with fewer crowds; hire a tuk-tuk for the day ($20-25) to cover the temple circuit efficiently: Pha That Luang, Wat Sisaket, Haw Phra Kaew, and Wat Ong Teu Mahawihan",
            "10:30 — Wat Ong Teu Mahawihan: a venerated temple that is home to one of Laos's largest bronze Buddha images; the surrounding monastery complex is an active centre of Buddhist learning",
            "12:00 — Lunch at a French-Lao fusion restaurant like PVO or Khop Chai Deu ($12-20/person): try baguettes with Lao-style fillings (a French colonial legacy) or a full Lao lunch set with soup, main, and dessert",
            "14:00 — COPE Visitor Centre with audio guide ($2 optional donation): the detailed UXO exhibition and the workshop viewing area where prosthetics are being made is one of the most important experiences in Laos; buy a small gift at the COPE shop to directly support the programme",
            "17:00 — That Dam and a relaxed tuk-tuk ride through the quieter residential streets north of the city; stop at any neighbourhood temple you pass for impromptu conversations with monks",
            "19:30 — Night market and riverfront dinner: choose a riverfront restaurant with Mekong views and order grilled Mekong fish ($8-12), sticky rice, and two rounds of Beer Lao",
          ],
          cost: "$100-130 (tuk-tuk, meals, entries)",
        },
        {
          day: "Day 3",
          title: "Buddha Park, Silk Shopping & Sunset Cruise",
          items: [
            "08:30 — Private tuk-tuk to Buddha Park ($20-25 return, negotiate the day before): more comfortable and flexible than shared songthaew; the driver will wait while you explore",
            "11:00 — Return and visit the Talat Sao (Morning Market) and Carol Cassidy Lao Textiles: a studio producing handwoven silk using traditional patterns; the showroom displays extraordinary quality work; prices reflect genuine artisanship",
            "13:00 — Lunch at a riverside restaurant ($12-18/person) with views toward the Thai shore",
            "15:30 — Afternoon: rent a bicycle or hire a tuk-tuk to Cope and the National Museum of Laos (entry 10,000 kip); the museum covers Lao history from prehistoric times through the Pathet Lao revolution",
            "18:00 — Mekong sunset cruise (book through hotel, $15-25/person for 90 minutes): cold beer, snacks, and the best possible view of the Vientiane riverfront at sunset from the water",
          ],
          cost: "$90-120 (tuk-tuk, cruise, meals, shopping)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$200-400/day",
      days: [
        {
          day: "Day 1",
          title: "Boutique Arrival & Private City Tour",
          items: [
            "12:00 — Private airport transfer ($20-30) to a luxury boutique property such as Settha Palace Hotel (a restored French colonial mansion, $150-250/night) or The Lao Orchid Hotel; both have pools and full concierge service",
            "14:00 — Private guided city orientation with a specialist guide ($60-80 for half-day): the French colonial architecture, Lao Buddhist sites, and post-1975 Pathet Lao political history explained in depth; the guide adjusts the tour to your specific interests",
            "17:00 — Sunset cocktails at Settha Palace pool terrace or the Bor Pen Nyang rooftop bar: gin and tonics with a Lao twist, overlooking the colonial quarter at the golden hour",
            "19:30 — Private dinner at Makphet restaurant ($30-50/person): a social enterprise training former street children in hospitality and cuisine; the Lao tasting menu is superb and the setting in a traditional Lao house is beautiful",
          ],
          cost: "$280-380 (hotel, guide, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Private Temple Circuit & Lao Cooking Class",
          items: [
            "07:30 — Private dawn alms-giving experience: hire a guide to join the morning tak bat ceremony where monks walk through residential streets collecting offerings; this requires respectful participation and prior briefing ($50 including offerings and guide)",
            "09:00 — Private expert-guided temple circuit with an art historian or archaeologist guide ($80-100): deeper understanding of Pha That Luang's architectural evolution over 2,000 years, the Khmer origins of Wat Sisaket, and the bronze-casting techniques visible in Haw Phra Kaew",
            "12:00 — Lao cooking class ($50-70/person): learn to make laap, green papaya salad, steamed fish in banana leaf, and sticky rice over 3 hours with a professional Lao chef; lunch is the food you cooked",
            "15:30 — Private COPE Centre tour with a programme coordinator ($30 donation): a more personal insight into the UXO clearance work and the lives of survivors; optional workshop observation",
            "19:30 — Private dinner at a luxury restaurant ($40-60/person) or in-room dining at your hotel: many Vientiane boutique hotels can arrange private chef dinners by the pool or in the garden",
          ],
          cost: "$350-500 (hotel, guide, class, dinner)",
        },
        {
          day: "Day 3",
          title: "Buddha Park, Silk Weaving & Sunset Cruise",
          items: [
            "08:30 — Private car and driver to Buddha Park ($40-50 return): stop at the Mekong riverside on the way back for fresh river fish at a local restaurant ($15-20/person)",
            "11:30 — Private visit and demo at a silk weaving workshop or Carol Cassidy Lao Textiles ($30-50 for a personal tour and demonstration): understand the natural dyeing and pattern-preservation work; commission a bespoke piece to be shipped home",
            "14:00 — Spa treatment at your hotel or at Papaya Spa ($40-70 for 90 minutes): traditional Lao herbal compress massage using aromatherapy ingredients native to Laos",
            "17:30 — Private sunset river cruise on a chartered longtail boat ($80-120 for 2 hours): just you, a local captain, cold Beer Lao, and the Vientiane skyline in the last light; stop at a sandbank if the season allows",
            "20:00 — Farewell dinner at a rooftop or riverside fine dining restaurant ($40-60/person); the drive to VTE Airport takes only 15 minutes from the city centre",
          ],
          cost: "$300-450 (driver, silk, spa, cruise, dinner)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget",
      accommodation: "$4-8 (guesthouse/hostel dorm)",
      food: "$5-10 (street food + local restaurants)",
      transport: "$3-8 (tuk-tuk + songthaew)",
      activities: "$2-5 (temple entries + COPE)",
      total: "$25-45/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "$50-80 (boutique guesthouse)",
      food: "$20-35 (Lao restaurants + cafes)",
      transport: "$15-25 (tuk-tuk hire + cruise)",
      activities: "$15-30 (guided tours + entries)",
      total: "$75-130/day",
    },
    {
      tier: "Luxury",
      accommodation: "$150-250 (colonial boutique hotel)",
      food: "$50-80 (fine dining + cooking class)",
      transport: "$40-80 (private car + river cruise)",
      activities: "$80-150 (private guides + spa)",
      total: "$200-400/day",
    },
    {
      tier: "Ultra-Budget",
      accommodation: "$3-5 (hostel dorm or camping)",
      food: "$3-6 (market stalls + night market)",
      transport: "$2-4 (shared songthaew)",
      activities: "$1-3 (temple entries only)",
      total: "$15-25/day",
    },
    {
      tier: "Family of 4",
      accommodation: "$20-30 pp (family guesthouse room)",
      food: "$8-15 pp (shared dishes)",
      transport: "$5-10 pp (shared tuk-tuk)",
      activities: "$5-10 pp (entries + cruise share)",
      total: "$40-70/day pp",
    },
  ],
  mistakes: [
    {
      icon: "☀️",
      title: "Visiting in April or May (peak hot season)",
      desc: "Vientiane reaches 38-40 degrees Celsius from April to May with brutal humidity before the rains arrive. November to February offers perfect 25-30 degree days, clear skies, and the best river conditions. March is warm but manageable. April is genuinely exhausting for outdoor exploration.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🕌",
      title: "Skipping the COPE Centre",
      desc: "Many visitors focus only on temples and skip COPE. This is a mistake. The COPE Visitor Centre is free, profoundly affecting, and essential context for understanding modern Laos. The UXO story — 270 million cluster bombs dropped, 30% unexploded — is told with humanity and without guilt, and the prosthetics work is genuinely inspiring.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚕",
      title: "Not negotiating tuk-tuk prices before getting in",
      desc: "Tuk-tuk drivers in Vientiane do not use meters. Always agree on a price before the journey. A reasonable fare from the centre to Pha That Luang is 30,000-50,000 kip ($1.50-2.50). Tourist prices asked initially can be 3-5x the normal rate. Smile, negotiate politely, and use the Lao word khob chai (thank you) frequently.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏧",
      title: "Running out of Lao kip",
      desc: "Many guesthouses, street food vendors, and tuk-tuks do not accept cards or USD. While USD is widely accepted at major sites and restaurants, having kip for small purchases avoids bad exchange rates given informally. ATMs near Nam Phu fountain charge 20,000-30,000 kip ($1-1.50) commission per withdrawal — draw enough for the day.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🦶",
      title: "Wearing shoes inside temples without checking",
      desc: "Every Lao temple requires removing shoes before entering any building. Some temple complexes also require removing shoes before entering the main courtyard. Slip-on shoes or sandals make the constant on-and-off far more convenient. Socks are not required but are appreciated in some of the larger ornate temples.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🍺",
      title: "Embrace the Beer Lao ritual",
      desc: "Beer Lao is one of Southeast Asia's genuinely great beers and costs 10,000-15,000 kip ($0.50-0.75) for a large bottle at any roadside restaurant. The local drinking custom is to never pour your own glass — someone at the table always pours for others. Say Nyo (cheers) and kep beer (the Lao term for the act of drinking) freely. Book experiences at https://www.getyourguide.com/s/?q=Vientiane+Laos&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍚",
      title: "Eat sticky rice with your hands the Lao way",
      desc: "Lao people eat khao niew (glutinous sticky rice) with their hands — pinch off a small ball, use it to scoop laap or dip into a sauce. It is the staple food of Laos, eaten three times a day, and sharing a basket of sticky rice at a restaurant is an act of community. Ask for a khao niew basket at any Lao restaurant.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🛺",
      title: "Rent a bicycle for the temple circuit",
      desc: "Vientiane is flat, manageable, and has relatively light traffic compared to other Southeast Asian capitals. A bicycle rented for 20,000-30,000 kip ($1-1.50) per day lets you cover Patuxai, the main temples, That Dam, and the riverside at your own pace without negotiating tuk-tuk fares at every stop.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Wake up for the morning alms giving",
      desc: "The tak bat (morning alms giving) happens around 6am in residential streets throughout Vientiane. Monks walk in single file collecting rice and food from kneeling devotees. Observe respectfully from a distance — do not photograph without discretion and do not participate unless properly briefed. It is a genuine daily religious practice, not a tourist show.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How long do I need in Vientiane?",
      a: "Three days is ideal for a thorough Vientiane experience. Day 1 covers the city centre temples and night market. Day 2 focuses on Pha That Luang, COPE, and the full temple circuit. Day 3 allows Buddha Park and a Mekong sunset cruise. Two days is sufficient if you are combining Vientiane with Luang Prabang (highly recommended — the boat journey between them is one of Southeast Asia's great travel experiences). One day is only enough for a highlight overview.",
    },
    {
      q: "Is Vientiane worth visiting or should I go straight to Luang Prabang?",
      a: "Visit both. Vientiane and Luang Prabang are completely different in character and both deserve time. Vientiane is a functioning capital with COPE, Buddha Park, and a Mekong riverfront that is more accessible and less touristic than Luang Prabang. Luang Prabang is stunning but has become heavily developed for tourism. Many travellers find Vientiane's slower pace and authenticity more memorable. The 2-day slow boat between them on the Mekong is a highlight of any Laos trip.",
    },
    {
      q: "What currency should I use in Vientiane?",
      a: "Lao kip (LAK) is the official currency. USD is widely accepted at larger restaurants, hotels, and attractions. Thai baht is also commonly accepted near the river. The best exchange rates are at banks (BCEL or LDB) rather than hotels or airport counters. Draw kip from ATMs for street food, tuk-tuks, and market purchases. ATMs typically dispense in 50,000 or 100,000 kip notes.",
    },
    {
      q: "What is the easiest way to get from Vientiane to Luang Prabang?",
      a: "The Laos-China high-speed train now connects Vientiane to Luang Prabang in approximately 2 hours for about $20-30 USD — the most comfortable and fastest option. The 2-day slow boat via Pakbeng departs from Huay Xai (near the Thai border) and takes 2 days on the Mekong River but is one of Southeast Asia's most celebrated travel experiences. Budget flights on Lao Airlines take 40 minutes but cost $60-100 and are sometimes unreliable.",
    },
  ],
  combineWith: ["luang-prabang-4-days", "chiang-mai-4-days", "bangkok-5-days"],
  relatedSlugs: ["luang-prabang-4-days", "bangkok-5-days", "hanoi-4-days", "chiang-mai-4-days"],
  galleryQuery: "vientiane laos pha that luang buddha park mekong",
};

export const metadata: Metadata = {
  title: "Vientiane in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The ultimate 3-day Vientiane itinerary — Pha That Luang golden stupa, Buddha Park, COPE Centre, Mekong sunsets, sticky rice, and Beer Lao. Indian and Western passport visa info included.",
  keywords: [
    "Vientiane itinerary",
    "Vientiane 3 days",
    "Vientiane travel guide 2026",
    "Laos capital guide",
    "Pha That Luang",
    "Buddha Park Vientiane",
    "COPE Centre Laos",
    "Patuxai monument",
    "Vientiane visa Indian passport",
    "Mekong sunset Vientiane",
  ],
  openGraph: {
    title: "Vientiane in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Golden stupas, Buddha Park, COPE Centre, and Mekong sunsets — Vientiane in 3 days from $25/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/vientiane-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vientiane in 3 Days: Complete 2026 Itinerary",
    description:
      "Pha That Luang, Buddha Park, Mekong sunsets, and sticky rice — the definitive Vientiane guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/vientiane-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Vientiane in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Vientiane in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/vientiane-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Vientiane, Laos",
      description:
        "Vientiane, the capital of Laos — Pha That Luang golden stupa, Buddha Park, French colonial boulevards, and the world's most laid-back Mekong riverfront.",
      geo: { "@type": "GeoCoordinates", latitude: 17.9757, longitude: 102.6331 },
    },
  ],
};

export default function VientianePage() {
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
