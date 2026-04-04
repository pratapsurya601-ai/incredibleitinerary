import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Nepal",
  country: "Nepal",
  countryFlag: "🇳🇵",
  slug: "nepal-7-days",
  heroQuery: "nepal kathmandu everest base camp himalayas sunrise",
  heroAlt: "Nepal Himalayas sunrise with Annapurna peaks reflected in Phewa Lake Pokhara",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro: "Nepal is the only country on earth where you can eat a two-dollar meal at dawn with the world's tallest peaks filling the horizon behind you. Seven days gets you the ancient Hindu cremation ghats of Pashupatinath, the world's largest Buddhist stupa at Boudhanath, a life-changing Himalayan sunrise from Sarangkot over Annapurna, and rhinos in the wild at Chitwan — all for less per day than a coffee shop in London.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$25",
    bestMonths: "Oct–Nov, Mar–Apr",
    airport: "KTM (Tribhuvan International, Kathmandu)",
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
        ["Visa Required?", "NO — Indian citizens do not need a visa for Nepal. This is one of the few countries worldwide where Indians have unconditional visa-free entry. No prior application, no fee, no approval needed."],
        ["Entry Documents", "Carry your Indian passport or Aadhaar card. Both are accepted at the Nepal border and at Tribhuvan International Airport. No minimum validity requirement, but a valid document is required."],
        ["Stay Duration", "Unlimited stay for Indian nationals. There is no 30-day or 90-day cap — Indian passport holders can remain indefinitely, though most visits are 7–21 days."],
        ["Border Crossings", "Open land borders at Sunauli (UP), Raxaul–Birgunj (Bihar), Kakarbhitta (West Bengal), and Banbasa (Uttarakhand). All accessible without visa documentation. Fly or overland — both work seamlessly."],
      ],
    },
    {
      flag: "🌍",
      title: "Western & Other Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa on Arrival", "Available at Tribhuvan International Airport (KTM). 15 days: $30. 30 days: $50. 90 days: $125. Payment in USD cash, major credit cards, or SAARC country currencies."],
        ["Online Application", "Apply at online.nepalimmigration.gov.np before travel to save time at the airport. Fill the form, print confirmation, bring it to the visa desk — avoids the form-filling queue on arrival."],
        ["TIMS Card", "Trekkers Information Management System card required for trekking (NPR 2,000 / ~$15). Available at Nepal Tourism Board offices in Kathmandu and Pokhara. Carry two passport photos."],
        ["Key Permits", "Annapurna Conservation Area Permit (ACAP): NPR 3,000. Sagarmatha National Park (Everest region): NPR 3,000. Both required in addition to TIMS for trekking. Not required for the 7-day non-trekking route."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$25–45/day",
      days: [
        {
          day: "Days 1–3",
          title: "Kathmandu Valley",
          items: [
            "Day 1 morning — Pashupatinath Temple (NPR 1,000 / ~$7.50 for foreigners, free for Hindus). The main Hindu cremation ghats on the Bagmati River — one of the most visceral and profound places in Asia. Arrive at 6am for morning prayers and the first cremations of the day.",
            "Day 1 afternoon — Boudhanath Stupa (NPR 400 / ~$3). The largest stupa in the world — a vast white dome with the painted eyes of Buddha gazing in four directions. Walk the circumambulation path (kora) clockwise with monks and pilgrims. At dusk, butter lamps are lit and monks begin evening chanting.",
            "Day 1 evening — Thamel neighbourhood (free). Kathmandu's tourist district — labyrinthine alleys, gear shops, bookstores, thangka painting studios, rooftop restaurants. Eat momos (dumplings, ~$1.50) at a street stall for dinner.",
            "Day 2 — Swayambhunath (Monkey Temple, free, 365 steps). Climb before 7am for city views and fewer crowds. The hilltop stupa is surrounded by shrines, prayer flags, and genuinely bold monkeys. Outstanding panorama over the Kathmandu Valley.",
            "Day 2 afternoon — Kathmandu Durbar Square (UNESCO, NPR 1,000 / ~$7.50). Ancient royal palaces, living goddess Kumari's palace (can sometimes see the Kumari at her window), Taleju Temple, Kasthamandap. The square was damaged in the 2015 earthquake — ongoing restoration makes it a living document of heritage recovery.",
            "Day 3 — Bhaktapur day trip (12km east, NPR 1,800 / ~$13.50). The most intact medieval Newari city in Nepal — better preserved than Kathmandu's Durbar Square. Pottery Square, 55-Window Palace, Nyatapola Temple (5-tiered pagoda), Peacock Window. Allow 4–5 hours. Return to Kathmandu for the night.",
            "Eat dal bhat at every opportunity ($2–4, unlimited refills of lentil soup, rice, curries, greens, pickles). It is the best-value complete meal in Asia — high altitude trekkers eat it twice a day for weeks.",
          ],
          cost: "$30–55 total/day (accommodation $5–12, food $6–12, entry fees ~$10)",
        },
        {
          day: "Days 4–5",
          title: "Pokhara",
          items: [
            "Travel day — Kathmandu to Pokhara by tourist bus ($8–12, 6–7 hours through spectacular hill country) or domestic flight ($80–120, 25 minutes). Budget travelers take the bus — it's an experience in itself.",
            "Day 4 evening — Pokhara lakeside at Phewa Lake (free). Rent a rowboat at sunset ($5–8/hour) or sit at a lakeside restaurant watching the last light on Annapurna. The reflection of the Annapurna massif on the calm lake surface is one of Nepal's signature images.",
            "Day 5 — Sarangkot sunrise (leave Pokhara lakeside by 5am, taxi $5–6). The viewpoint at 1,592m gives an unobstructed panorama of Annapurna I (8,091m), Machapuchare (Fish Tail, 6,993m), Dhaulagiri, and Manaslu at sunrise. On a clear morning, this is one of the most extraordinary mountain views on earth — accessible to any level of fitness with a short 20-minute walk from the road.",
            "Day 5 morning return — Walk down to World Peace Pagoda (45-minute hike from lakeside, free). The white Buddhist stupa above Phewa Lake with Annapurna as backdrop. Views over the entire Pokhara valley.",
            "Day 5 afternoon — Davis Falls (NPR 50 / $0.40) + Gupteshwor Cave ($1.50, cave above Davis Falls with Shiva shrine). Or: Paragliding from Sarangkot landing zone ($80–100 for 30-minute tandem flight — Pokhara is consistently ranked among the world's top 5 paragliding destinations due to reliable thermals and the Himalayan backdrop).",
            "Evening — Pokhara lakeside restaurants: Dal Bhat Power at New Pokhara Lodge, or rooftop sunset views with momos and Everest beer ($1.50).",
          ],
          cost: "$40–70 total/day (travel day extra $8–12 bus)",
        },
        {
          day: "Days 6–7",
          title: "Chitwan National Park",
          items: [
            "Travel — Pokhara to Chitwan by tourist bus (4–5 hours, $8–10) or return via Kathmandu. Most budget itineraries go direct Pokhara–Chitwan via Prithvi Highway.",
            "Day 6 — Jeep safari ($15–25 for 3-hour game drive in Chitwan National Park buffer zone). One-horned rhinoceroses (most densely populated rhino habitat in Asia), spotted deer, wild boars, and with luck — Bengal tigers (rarer). Morning safaris 6–9am are best for wildlife activity.",
            "Day 6 afternoon — Elephant bathing experience (ethical — no riding, NPR 700 / ~$5). Watch park elephants being bathed in the river by their mahouts. Unlike elephant riding operations, bathing encounters don't stress the animals.",
            "Day 7 — Jungle walk with a naturalist guide ($10–15, 2–3 hours). Chitwan's 952km² of Terai forest is UNESCO-listed. The jungle walks take you past crocodile-filled rivers, gharial breeding centers (rare, critically endangered fish-eating crocodiles), and remarkable birdlife (over 540 species).",
            "Day 7 — Tharu cultural show (NPR 500 / ~$3.75). The Tharu people are indigenous to the Terai — their stick dance and cultural programs run nightly at local cultural centers. Authentic and unhurried.",
            "Return to Kathmandu for departure flight: night bus ($8–10, 5–6 hours) or return same day if flying early the next morning.",
          ],
          cost: "$35–60 total/day (park fees, guides, accommodation)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$80–160/day",
      days: [
        {
          day: "Days 1–3",
          title: "Kathmandu Valley — Temples & Culture",
          items: [
            "Stay at a 3-star boutique hotel in Thamel or Lazimpat ($40–70/night) — Kantipur Temple House or Hotel Yak & Yeti area. Mid-range Kathmandu hotels have excellent rooftop restaurants and often heritage architecture.",
            "Day 1 — Guided full-day Kathmandu valley tour ($50–80 with private car and English-speaking guide covering Pashupatinath, Boudhanath, Swayambhunath, and Patan Durbar Square — a fourth UNESCO site just 5km south of Kathmandu with outstanding bronze metalwork).",
            "Patan Museum ($5) — arguably the finest museum in Nepal, housed in a restored palace with a world-class collection of traditional religious art. A guide makes the iconography comprehensible.",
            "Day 2 — Bhaktapur full day with a specialist Newari architecture guide ($30–40). Lunch at Café Nyatapola (inside a 300-year-old pagoda building, rooftop views, $10–15). The medieval bakery on Pottery Square makes yomari (rice flour dumplings) fresh.",
            "Day 3 — Nagarkot sunrise day trip ($15–20 for taxi, or stay overnight at a mountain resort $50–80). The hilltop ridge at 2,175m gives a 360-degree Himalayan panorama from Everest to Dhaulagiri on clear mornings. The sunrise light on the white peaks is extraordinary.",
            "Cooking class in Kathmandu ($35–50) — learn to make dal bhat, momos, and gundruk (fermented vegetables). Several good schools in Thamel offer morning sessions with market shopping included.",
          ],
          cost: "$90–140/day",
        },
        {
          day: "Days 4–5",
          title: "Pokhara — Lakes & Adventure",
          items: [
            "Fly Kathmandu–Pokhara ($80–120, 25 min — skip the 7-hour bus). The mountain views from the aircraft window on the right side (northbound) are already spectacular.",
            "Stay at a mid-range lakeside hotel with mountain view ($45–80/night) — Hotel Temple Tree, Fishtail Lodge (on a tiny island in Phewa Lake, reached by rowboat), or Summit Hotel above the lake.",
            "Sarangkot sunrise private jeep ($15–20 round trip) + breakfast on the viewing platform at one of the cafés with panoramic mountain seating.",
            "Paragliding tandem flight ($80–100) + professional photography package ($20–30). Pokhara's consistent thermals mean flights can last 30–90 minutes. Landing on the lakeside strip with Annapurna behind you makes for extraordinary photographs.",
            "Half-day boat tour on Phewa Lake including Barahi Island Temple ($10–15 for private boat). The island temple is visited on foot by locals for daily puja — serene and architecturally lovely.",
            "Day 5 afternoon — International Mountain Museum ($5, in Pokhara city). Excellent exhibits on Himalayan geology, mountaineering history, and the ethnic peoples of Nepal's mountain regions. More interesting than it sounds.",
          ],
          cost: "$100–160/day",
        },
        {
          day: "Days 6–7",
          title: "Chitwan — Jungle Safari",
          items: [
            "Fly or drive to Chitwan. Mid-range jungle lodges inside or adjacent to the park ($60–120/night) include meals and often activities — Meghauli Serai (Taj), Temple Tiger, or Barahi Jungle Lodge.",
            "Full-day jeep safari with naturalist guide ($40–60, 6 hours) covering multiple zones of the national park. Afternoon drive has different wildlife than morning — deer, rhinos, and sometimes leopards are active in early evening.",
            "Canoe ride on the Rapti River at dusk ($15–20) — floating silently past mugger crocodiles sunning on sandbanks, gharials in the shallows, and remarkable birdlife at the water's edge as the sun drops behind the Himalayan foothills.",
            "Cultural immersion — evening Tharu village walk with a local guide ($15–20). The Tharu community has lived in harmony with the forest for centuries. Home visits, handicraft demonstrations, and local dinner arrangements.",
            "Return transfer to Kathmandu with mid-range tourism operator ($30–40 by tourist vehicle or $120 by domestic flight) for onward departure.",
          ],
          cost: "$110–160/day",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$300–1,000+/day",
      days: [
        {
          day: "Days 1–3",
          title: "Kathmandu — Heritage Hotels & Private Tours",
          items: [
            "Stay at Dwarika's Hotel ($250–400/night) — the finest heritage hotel in Nepal, built from salvaged medieval woodcarvings. Every room is a piece of Newari architectural history. Courtyard dining by candlelight, spa using Himalayan herbs.",
            "Private heritage tour of all four UNESCO Durbar Squares (Kathmandu, Patan, Bhaktapur, Changu Narayan) over two days with an art history specialist ($200–300 for guide + vehicle). The depth of knowledge transforms the experience.",
            "Private cooking experience at Krishnarpan Restaurant (Dwarika's — up to 22-course traditional Nepali set dinner, $80–120/person). The most celebrated traditional Nepali dining experience in the country — course after course of regional recipes rarely seen in restaurants.",
            "Sunrise flight over Everest — departs Kathmandu at dawn, 1-hour flight circling Everest, Lhotse, Makalu, and Kangchenjunga with Himalaya panorama from 30,000 feet ($170–210/person on Mountain Flight by Buddha Air or Yeti Airlines). The ultimate Nepal bucket-list activity for those not trekking.",
            "Private thangka painting workshop with a master artist ($100–150, half day). Traditional Tibetan Buddhist scroll painting — learn technique, take your work home.",
          ],
          cost: "$350–600/day (excl. hotel)",
        },
        {
          day: "Days 4–5",
          title: "Pokhara — Luxury Lakeside",
          items: [
            "Fly Kathmandu–Pokhara on a clear morning — book the right side window seat for Annapurna views during descent.",
            "Stay at Pavilions Himalayas ($200–350/night) — individual pool villas in a working organic farm with Annapurna panorama. Infinity pool with mountain backdrop, farm-to-table meals, yoga pavilion facing the peaks.",
            "Private sunrise helicopter to Sarangkot or Poon Hill ($400–600 for the helicopter, split 4–5 people) — the sunrise from altitude above the clouds with the Himalayan arc below you.",
            "Private guided kayaking on Phewa Lake at dawn ($60–80/person with guide) — paddle the glassy lake before the tour boats begin, with reflections of Annapurna and Machapuchare.",
            "Luxury paragliding with in-flight videography and drone photography package ($150–200). The photographs against the 8,000m peaks are extraordinary.",
            "Private chef dinner on the hotel terrace with Annapurna sunset views — Pavilions Himalayas and similar properties offer this as a standard evening option.",
          ],
          cost: "$400–700/day (excl. hotel)",
        },
        {
          day: "Days 6–7",
          title: "Chitwan — Luxury Jungle Lodge",
          items: [
            "Transfer by private vehicle or domestic flight to Chitwan. Stay at Meghauli Serai — A Taj Safari Lodge ($300–500/night, all inclusive) — the finest jungle lodge in Nepal, set on the banks of the Rapti River inside the park boundary.",
            "Private game drives with expert naturalist guides in dedicated jeeps ($80–120/day included in most luxury packages). Multiple daily game drives give far better wildlife sightings than shared safaris.",
            "Luxury elephant interaction experience — not riding, but close observation and interaction with the park's rescued elephants under conservancy supervision ($50–80, arranged by lodge).",
            "Private boat safari at dawn on the Narayani River ($60–80 in dedicated boat) — the river forms the park boundary and offers the most pristine wildlife corridor.",
            "Helicopter return to Kathmandu ($300–500 for the helicopter) over the Terai floodplains and Himalayan foothills — an aerial perspective on Nepal's extraordinary geography.",
          ],
          cost: "$500–1,000+/day (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$5–12",
      food: "$6–12",
      transport: "$3–8",
      activities: "$8–15",
      total: "$25–45/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$40–70",
      food: "$20–35",
      transport: "$15–25",
      activities: "$20–40",
      total: "$80–160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$200–500",
      food: "$60–150",
      transport: "$50–100",
      activities: "$80–200",
      total: "$300–1,000+/day",
    },
  ],
  mistakes: [
    {
      icon: "🏙️",
      title: "Skipping Bhaktapur",
      desc: "Most travelers spend all their Kathmandu time in Thamel and the main Durbar Square. Bhaktapur — 12km east — is the most authentic medieval Newari city in existence, better preserved than Kathmandu itself. Its pottery squares, 5-tiered pagodas, and 55-Window Palace are among the finest examples of traditional Himalayan urban architecture. The $13.50 entry fee keeps crowds lower. Allow a full day.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌄",
      title: "Missing Sarangkot Sunrise",
      desc: "Every traveler who goes to Pokhara and sleeps past 5am regrets it for years. The Sarangkot sunrise view of the Annapurna Himalayan arc — including the perfect pyramid of Machapuchare — is one of the truly life-changing travel experiences in Asia. It requires a 5am taxi ($5–6) and 20-minute walk. It is free. It is extraordinary. Clear mornings are most likely in Oct–Nov and Mar–Apr.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍛",
      title: "Not Eating Dal Bhat",
      desc: "Dal bhat is Nepal's national dish and the best travel meal value in the world — lentil soup, rice, seasonal vegetable curry, pickles, and unlimited refills for $2–4. It is complete nutrition, it is delicious, and it is what the entire country eats twice a day. Travelers who stick to Western tourist-menu food in Thamel spend 3x more, eat worse, and miss the most important cultural experience Nepal offers. Eat dal bhat daily.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "⛰️",
      title: "Trying Everest Base Camp in 7 Days",
      desc: "Everest Base Camp (EBC) trek takes 14–16 days minimum from Kathmandu, costs $550+ in permits alone, requires a guide ($30–50/day), and altitude acclimatization cannot be rushed. People who attempt to compress this to a week risk Acute Mountain Sickness, which can be fatal. A 7-day Nepal trip cannot include EBC — it can include a scenic mountain flight over Everest ($170) or the Sarangkot sunrise, which are both extraordinary alternatives.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Sarangkot at 5am — $5 That Changes Your Life",
      desc: "Hire a taxi from Pokhara lakeside at 4:45–5:00am ($5–6 one way). Walk 20 minutes up the trail to the viewpoint. The Annapurna massif at sunrise — Annapurna I, II, III, IV, Gangapurna, Machapuchare, Dhaulagiri — fills the entire northern horizon in amber and rose light. No tourist in Nepal who has done this has described it as anything less than extraordinary. Clear skies are almost guaranteed in Oct–Nov and Mar–Apr.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🕯️",
      title: "Pashupatinath Evening Aarti",
      desc: "The evening aarti (fire ceremony) at Pashupatinath — the most sacred Hindu site outside India — takes place daily at dusk on the eastern bank of the Bagmati River. Priests perform the ceremony while cremations continue on the ghats below. The combination of sacred fire, incense smoke, river chanting, and the ancient temple backdrop is an experience available nowhere else on earth. Arrive 30 minutes before sunset.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🔯",
      title: "Boudhanath Circuit at Dusk",
      desc: "The kora (circumambulation) around Boudhanath Stupa at dusk is one of the most peaceful spiritual experiences in Asia. As the sun sets, Tibetan monks begin spinning prayer wheels and counting malas, butter lamps are lit around the stupa base, incense rises from every shrine, and the chanting from the surrounding monasteries begins. Walk clockwise with the pilgrims. It costs $3 to enter and lasts as long as you want.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍺",
      title: "Pokhara Lakeside — Cheapest Food in Asia",
      desc: "Pokhara lakeside has among the lowest restaurant prices of any tourist destination in Asia. A full dal bhat costs $2–4. A large Everest beer costs $1.50. A momos plate is $1–2. A lakeside rooftop dinner with Annapurna sunset views and two dishes plus drinks is $8–12. Compare this to Bali ($15–20), Thailand ($8–15), or Vietnam ($6–10) — Pokhara is in a different category. The quality, the setting, and the value are unmatched.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Do Indians need a visa for Nepal?",
      a: "No. Indian citizens have unconditional visa-free access to Nepal with no prior application, no fee, and no time limit. Simply carry your Indian passport or Aadhaar card. This applies at all airports and land border crossings. No tourist in Nepal charges an Indian national more due to visa requirements — it is completely open travel.",
    },
    {
      q: "How long does the Everest Base Camp trek take and what does it cost?",
      a: "The classic EBC trek takes 12–16 days from Lukla (the mountain airstrip). Costs include: Kathmandu–Lukla flights ($180–220 return), Sagarmatha National Park permit (NPR 3,000), TIMS card (NPR 2,000), guide ($30–50/day, highly recommended for safety), teahouse accommodation ($5–15/night), and food ($15–25/day at altitude). Total cost: $800–1,500+ excluding international flights. It cannot be safely done in less than 12 days due to altitude acclimatization requirements.",
    },
    {
      q: "How do I prevent altitude sickness in Nepal?",
      a: "Kathmandu (1,400m) and Pokhara (800m) — the 7-day non-trekking route — are too low for altitude sickness to be a concern. Altitude sickness (AMS) becomes relevant above 2,800m. For trekking: ascend no more than 500m elevation gain per day above 3,000m, rest one day for every 3 days of climbing, stay hydrated, avoid alcohol, and consider acetazolamide (Diamox) as a prescription prophylactic. Descent is the only cure for severe AMS.",
    },
    {
      q: "Kathmandu or Pokhara — which is the better base for Nepal?",
      a: "They serve completely different purposes and your 7-day itinerary should include both. Kathmandu (3 nights) is for ancient temples, history, UNESCO heritage, and culture. Pokhara (2 nights) is for mountain views, lakes, adventure, and the famous Annapurna panorama. Chitwan (2 nights) adds wildlife. The three-destination route is the established 7-day Nepal circuit for good reason — each location offers something irreplaceable.",
    },
    {
      q: "Nepal vs Bhutan — what's the difference for travelers?",
      a: "The cost difference is enormous. Nepal has no tourist fee — you pay standard visa costs and your own expenses. Bhutan charges a mandatory Sustainable Development Fee of $250/person/day (reduced from $200 in 2023 but still very high), plus guide fees and accommodation. Bhutan is harder to visit independently and more expensive by an order of magnitude. Nepal offers more geographic variety, better trekking diversity, and is accessible on any budget.",
    },
    {
      q: "What is the best time of year for Himalaya views in Nepal?",
      a: "October–November is peak season: post-monsoon clear skies, excellent mountain visibility, lush green landscape from recent rains, and temperatures ideal for trekking (0–20°C at altitude). March–April is the second best window: spring wildflowers, rhododendron forests in bloom (rhododendron is Nepal's national flower), and solid mountain visibility before the pre-monsoon haze. June–September is monsoon season — Kathmandu and Pokhara are accessible but mountain views are often obscured by cloud.",
    },
  ],
  combineWith: ["bhutan-5-days", "india-golden-triangle", "tibet-tour"],
  relatedSlugs: ["sri-lanka-7-days", "bhutan-5-days", "india-rajasthan-7-days", "maldives-5-days"],
  galleryQuery: "nepal kathmandu boudhanath stupa pokhara annapurna himalayas",
};

export const metadata: Metadata = {
  title: "Nepal in 7 Days: Kathmandu, Pokhara, Chitwan & Himalayan Sunrise (2026)",
  description: "Complete 7-day Nepal itinerary covering Kathmandu temples, Pokhara Himalayan sunrise, Chitwan wildlife safaris, real dollar costs for every budget, and visa info for Indians.",
  keywords: [
    "nepal itinerary 7 days",
    "nepal travel guide 2026",
    "kathmandu pokhara chitwan itinerary",
    "sarangkot sunrise nepal",
    "nepal budget travel",
    "do indians need visa for nepal",
    "everest base camp trek",
  ],
  openGraph: {
    title: "Nepal in 7 Days: Kathmandu, Pokhara & Himalayan Sunrise (2026)",
    description: "Temples, Himalayan sunrises, jungle safaris, dal bhat for $2 — complete Nepal guide from $25/day.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nepal Annapurna Himalayas sunrise from Sarangkot Pokhara",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal in 7 Days (2026)",
    description: "Kathmandu, Pokhara, Chitwan — real costs, Himalayan sunrise tips, visa info for Indians.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/nepal-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nepal in 7 Days: Kathmandu, Pokhara, Chitwan & Himalayan Sunrise (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
      description:
        "Complete 7-day Nepal itinerary with Kathmandu temples, Pokhara Himalayan sunrise, Chitwan wildlife safaris, and real costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Nepal 7 Days",
          item: "https://www.incredibleitinerary.com/blog/nepal-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nepal",
      description:
        "The Himalayan kingdom home to eight of the world's ten highest peaks, ancient Hindu and Buddhist temple cities, and the world's finest trekking routes.",
      touristType: ["Trekkers", "Cultural tourists", "Wildlife enthusiasts", "Adventure travelers", "Spiritual seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.3949,
        longitude: 84.124,
      },
    },
  ],
};

export default function NepalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
