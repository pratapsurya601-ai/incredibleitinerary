import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Tbilisi 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Tbilisi trip in 4 days. Plan the perfect 4 days in Tbilisi, Georgia — Narikala Fortress, sulfur baths, Georgian wine, khinkali dumplings, and.",
  keywords: [
    "Tbilisi 4 days itinerary",
    "Tbilisi travel guide 2026",
    "Georgia travel",
    "Narikala Fortress",
    "Abanotubani sulfur baths",
    "Georgian wine",
    "khinkali Tbilisi",
    "Tbilisi budget travel",
    "Kazbegi day trip",
    "Georgia visa Indian passport",
  ],
  openGraph: {
    title: "Tbilisi 4-Day Itinerary 2026: Trip Planner",
    description:
      "Europe's best-kept secret — ancient sulfur baths, 8,000-year-old wine culture, carved wooden balconies, and Narikala Fortress watching over it all.",
    url: "https://incredibleitinerary.com/blog/tbilisi-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?tbilisi+georgia+old+town+narikala+fortress+sulfur+baths",
        width: 1200,
        height: 630,
        alt: "Tbilisi Georgia Old Town with Narikala Fortress and colorful balconied houses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tbilisi 4-Day Itinerary 2026: Trip Planner",
    description:
      "Narikala Fortress, sulfur baths, Georgian wine, and khinkali for $5 — Tbilisi is Europe's most underrated capital.",
    images: [
      "https://source.unsplash.com/1200x630/?tbilisi+georgia+old+town+narikala+fortress+sulfur+baths",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/tbilisi-4-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tbilisi in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Everything you need to plan 4 days in Tbilisi — Old Town, Narikala Fortress, sulfur baths, Georgian wine, and day trips to Kazbegi.",
    image:
      "https://source.unsplash.com/1200x630/?tbilisi+georgia+old+town+narikala+fortress+sulfur+baths",
    datePublished: "2026-04-05T00:00:00Z",
    dateModified: "2026-04-05T00:00:00Z",
    author: { "@type": "Organization", name: "IncredibleItinerary" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: {
        "@type": "ImageObject",
        url: "https://incredibleitinerary.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://incredibleitinerary.com/blog/tbilisi-4-days",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Tbilisi 4 Days", item: "https://incredibleitinerary.com/blog/tbilisi-4-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Tbilisi",
    description:
      "Georgia's ancient capital — Europe's most affordable city with 4th-century fortress ruins, 8,000-year-old wine culture, and neighbourhoods of carved wooden balconies.",
    geo: { "@type": "GeoCoordinates", latitude: 41.6938, longitude: 44.8015 },
    touristType: "Culture, Wine, History, Budget Travel, Architecture",
    url: "https://incredibleitinerary.com/blog/tbilisi-4-days",
  },
];

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Tbilisi",
  country: "Georgia",
  countryFlag: "🇬🇪",
  slug: "tbilisi-4-days",
  heroQuery: "tbilisi georgia old town narikala fortress sulfur baths",
  heroAlt: "Tbilisi Georgia Old Town with Narikala Fortress and colorful balconied houses",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "15 min read",

  intro:
    "Tbilisi is one of Europe's last truly affordable capitals — a city where $5 buys you khinkali (Georgian dumplings stuffed with meat broth) and a glass of natural wine from the world's oldest wine-producing country. Narikala Fortress watches over the Old Town's carved wooden balconies and sulfur bath houses from the 4th century, a wine culture older than France's (Georgia invented the qvevri clay vessel method 8,000 years ago), and a country so hospitable they have a toasting tradition — the Tamada-led supra feast — that can last 6 hours. Tbilisi is Europe's best-kept secret, and four days is exactly enough to fall completely in love with it.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$40",
    bestMonths: "Apr–Jun or Sep–Oct",
    airport: "TBS (Tbilisi International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Choose Your Plan" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "day-trips", emoji: "🚌", label: "Day Trips from Tbilisi" },
    { id: "affiliate", emoji: "🎟️", label: "Book Tours & Activities" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Type", "Visa on Arrival at Tbilisi airport"],
        ["Cost", "$20 (approximately)"],
        ["Duration", "30 days"],
        ["eVisa", "Available online — evisa.gov.ge ($20, fast processing)"],
        ["Processing", "On arrival — straightforward and quick"],
        ["Note", "One of the easiest visas in the region; Georgia welcomes Indian tourists warmly"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passports",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Type", "Visa-free entry"],
        ["Duration", "Up to 1 year (!) for US, UK, EU citizens"],
        ["Australia", "Typically 90 days"],
        ["Requirements", "Valid passport, return ticket recommended"],
        ["Note", "Georgia's 1-year visa-free policy is one of the most generous in the world"],
        ["Tip", "Many digital nomads use Georgia as a long-stay base for this reason"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$40/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town & Narikala Fortress",
          items: [
            "Check into a hostel in Abanotubani or Old Town (~$12–15/night in a great dorm)",
            "Morning: Walk the Old Town — Shardeni Street, Leghvtakhevi canyon, carved wooden balconies",
            "Free: Metekhi Church on the cliff above the Mtkvari River",
            "Abanotubani sulfur bath district — public bath experience from $5 per person",
            "Lunch: Khinkali at a local dumpling house (~$4–6 for 10 dumplings + beer)",
            "Afternoon: Cable car up to Narikala Fortress (return ~$1.50) — panoramic Old Town views",
            "Explore the ruined fortress and Kartlis Deda (Mother of Georgia statue) for free",
            "Evening: Wine and cheese at a wine bar on Shardeni Street (~$8–10)",
            "Night: Walk the lit-up Metekhi Bridge and Peace Bridge",
          ],
          cost: "~$40 total (hostel $13, meals $15, transport $4, bath $5, cable car $2, wine $8)",
        },
        {
          day: "Day 2",
          title: "Mtatsminda, Holy Trinity & Free Museum Day",
          items: [
            "Morning: Funicular up Mtatsminda Mountain — panoramic views of the whole city (return ~$2)",
            "Walk the park at the summit, grab coffee with a view",
            "Holy Trinity Cathedral (Tsminda Sameba) — Georgia's largest cathedral, free entry, stunning interior",
            "Lunch: Khachapuri adjaruli (boat-shaped cheese bread) at a local bakery (~$3–5)",
            "Afternoon: National Museum of Georgia — free on certain days, otherwise ~$5; ancient gold collection is extraordinary",
            "Flea market at Dry Bridge — browse Soviet antiques, vintage cameras, art",
            "Evening: Cook-your-own mtsvadi (shashlik) at Mzuri or a local restaurant (~$8–10)",
            "Cheap natural wine from a wine shop — Georgian wine is $4–8 a bottle",
          ],
          cost: "~$38 total (hostel $13, meals $18, museum $5, funicular $2, wine $6)",
        },
        {
          day: "Day 3",
          title: "Kazbegi Day Trip (Budget Version)",
          items: [
            "Early morning: Shared marshrutka (minibus) to Kazbegi/Stepantsminda from Didube Bus Terminal (~$3 each way)",
            "Arrive Stepantsminda village (2,100m altitude) with view of Gergeti Trinity Church",
            "Hike up to Gergeti Trinity Church (14th century) — 3 hours round trip, FREE, one of Georgia's iconic views",
            "Lunch: Local canteen in Stepantsminda — hearty Georgian meal for $5–8",
            "Afternoon: Explore the village, see Mt. Kazbek (5,047m) glacier",
            "Return marshrutka to Tbilisi in the late afternoon",
            "Evening: Rest and street food in Old Town",
          ],
          cost: "~$30 total (transport $6, meals $12, hostel $13 — best value day of the trip)",
        },
        {
          day: "Day 4",
          title: "Georgian Supra Feast & Farewell",
          items: [
            "Morning: Leisurely breakfast at a local bakery — puri bread, sulguni cheese, eggs ($3–4)",
            "Visit Anchiskhati Basilica — Tbilisi's oldest surviving church (5th century), free",
            "Browse Erekle II Street for souvenirs — churchkhela (walnut-grape candy), wine, pottery",
            "Lunch: Full Georgian supra-style meal at Barbarestan or similar (~$15–20 budget splurge)",
            "Afternoon: Final wander through Sololaki neighbourhood — Art Nouveau mansions, quiet cafés",
            "Visit the Bridge of Peace on foot — illuminated glass pedestrian bridge",
            "Evening: Farewell wine at a rooftop bar with Old Town views (~$8)",
            "Night: Walk Rustaveli Avenue, Georgia's main boulevard",
          ],
          cost: "~$45 total (hostel $13, meals $25, souvenirs $10, wine $8)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$90/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town, Sulfur Baths & Narikala",
          items: [
            "Check into a boutique hotel in Abanotubani or Old Town (~$50–70/night)",
            "Morning: Old Town walking tour — Shardeni, Leghvtakhevi, Meidan Square with local guide (~$25)",
            "Private sulfur bath in Abanotubani — domed bathhouse, private room ~$15–25/hour",
            "Lunch: Barbarestan restaurant — Georgian recipes from a 19th-century cookbook (~$20–30 pp)",
            "Afternoon: Cable car to Narikala + Kartlis Deda; guided fortress history (~$15)",
            "Evening: Wine tasting at G.Vino or Vino Underground — natural wine specialists (~$25–35)",
            "Dinner: Funicular Restaurant on Mtatsminda with city panorama (~$30–40)",
          ],
          cost: "~$195 total (hotel $60, meals $65, activities $45, transport $15)",
        },
        {
          day: "Day 2",
          title: "Mtatsminda, Cathedral & Wine Country",
          items: [
            "Morning: Funicular to Mtatsminda with breakfast at summit café (~$15 incl. funicular)",
            "Holy Trinity Cathedral — guided tour with history of Georgian Orthodoxy (~$20)",
            "Lunch: Luca Polare or a Rustaveli Avenue café — Georgian-European (~$20)",
            "Afternoon: Day trip to Mtskheta (UNESCO World Heritage — ancient capital, 30 min away) — private taxi (~$30 return)",
            "Visit Jvari Monastery and Svetitskhoveli Cathedral",
            "Evening: Wine bar evening on Shardeni Street — guided natural wine flight (~$35)",
            "Dinner: Keto & Kote — elegant Georgian cuisine (~$35)",
          ],
          cost: "~$200 total (hotel $60, meals $75, activities $50, transport $25)",
        },
        {
          day: "Day 3",
          title: "Kazbegi Private Day Trip",
          items: [
            "Private driver to Kazbegi — comfortable, stops at Georgian Military Highway viewpoints (~$80–100 round trip for car)",
            "Morning: Arrive Stepantsminda — village walk, Mt. Kazbek views",
            "Hike or 4WD up to Gergeti Trinity Church — the postcard image of Georgia",
            "Lunch: Rooms Hotel Kazbegi terrace — stunning mountain lunch (~$30)",
            "Afternoon: Explore Truso Valley or take a guided nature walk",
            "Stop at Ananuri Fortress and Zhinvali Reservoir on return drive",
            "Evening: Arrive Tbilisi for farewell dinner",
          ],
          cost: "~$210 total (hotel $60, private driver $90, meals $45, activities $15)",
        },
        {
          day: "Day 4",
          title: "David Gareja & Farewell Supra",
          items: [
            "Morning: Private driver to David Gareja monastery complex (~$80 return, 1.5 hrs each way)",
            "Unique cave monastery carved into semi-desert cliffs on Georgia-Azerbaijan border",
            "Hike the ridge for views into Azerbaijan",
            "Return to Tbilisi by afternoon",
            "Afternoon: Dry Bridge flea market for final shopping",
            "Evening: Full Georgian supra feast — Tamada (toastmaster), wine, 20+ dishes, folk music (~$40–60 pp at a supra restaurant)",
          ],
          cost: "~$215 total (hotel $60, driver $80, supra feast $55, transport $10, shopping $20)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$220/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival — Private Old Town & Sulfur Bath Experience",
          items: [
            "Check into Rooms Hotel Tbilisi or Stamba Hotel (~$150–250/night, design icons)",
            "Private art historian-guided Old Town tour — 3 hours, deep history and architecture (~$80)",
            "Exclusive private sulfur bath in Chreli-Abano domed bathhouse — 2-hour private suite with massage (~$60–80)",
            "Lunch: Azarpesha — Georgia's finest contemporary Georgian cuisine (~$50–70)",
            "Afternoon: Private wine cellar visit — Chateau Mukhrani or Teliani Valley winery near city (~$80)",
            "Evening: Cocktails at the Stamba Hotel's rooftop bar",
            "Dinner: Shavi Lomi — award-winning Georgian chef's tasting menu (~$60–90)",
          ],
          cost: "~$550 total (hotel $200, private tour $80, bath $70, winery $80, dining $120)",
        },
        {
          day: "Day 2",
          title: "Kakheti Wine Region (Full Day)",
          items: [
            "Private chauffeured day trip to Kakheti region — Georgia's Napa Valley (~$150 private car)",
            "Morning: Visit Bodbe Monastery (St. Nino's tomb) and Sighnaghi 'City of Love' walled town",
            "Private winery tour at Pheasant's Tears or Alaverdi Monastery winery — qvevri wine tasting (~$80–100)",
            "Lunch: Wine estate picnic — Georgian cheeses, fresh bread, churchkhela, natural wine",
            "Afternoon: Gremi Castle ruins and Alazani River valley views",
            "Another winery visit en route home",
            "Evening: Return to Tbilisi; hotel spa treatment",
            "Dinner: In-hotel fine dining or Funicular Restaurant",
          ],
          cost: "~$600 total (hotel $200, private car $150, wineries $120, meals $100, spa $80)",
        },
        {
          day: "Day 3",
          title: "Kazbegi Helicopter Day",
          items: [
            "Helicopter transfer to Kazbegi/Stepantsminda — 20 minutes vs 2 hours by road (~$400–600 for group, spectacular flight over Caucasus)",
            "Private guide at Gergeti Trinity Church and surrounds",
            "Horse riding through alpine meadows (~$50/hour)",
            "Luxury lunch at Rooms Hotel Kazbegi — best mountain restaurant in Georgia (~$50–80)",
            "Afternoon: Guided glacier walk on Mt. Kazbek lower slopes with local mountain guide",
            "Helicopter return to Tbilisi",
            "Evening: Rest at hotel; room service or concierge-arranged private chef dinner",
          ],
          cost: "~$900 total (hotel $200, helicopter $500 split, guide $80, meals $80, horse $50)",
        },
        {
          day: "Day 4",
          title: "Private Supra & Cultural Farewell",
          items: [
            "Morning: Private cooking class — Georgian supra dishes with a local family or chef (~$80–100)",
            "Learn to make khinkali, khachapuri, badrijani nigvzit (walnut-stuffed aubergine)",
            "Lunch: Eat what you cooked together",
            "Afternoon: Private National Museum tour with curator (~$60); VIP access to the gold collection",
            "Visit Anchiskhati Basilica privately with a priest guide",
            "Evening: Private supra feast arranged by your hotel — Tamada, traditional polyphonic singing, 20+ dishes, premium qvevri wine (~$120–150 pp)",
            "Night: Stamba Hotel bar farewell cocktail",
          ],
          cost: "~$700 total (hotel $200, cooking class $90, museum $60, private supra $160, transport $40)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–20 (hostel dorm)",
      food: "$12–18",
      transport: "$3–6 (metro/marshrutka)",
      activities: "$5–10",
      total: "~$40/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$50–80 (boutique hotel)",
      food: "$30–50",
      transport: "$15–25 (taxi/tours)",
      activities: "$30–50",
      total: "~$90/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$150–250 (Rooms Hotel / Stamba)",
      food: "$80–140",
      transport: "$50–150 (private car/helicopter)",
      activities: "$60–150",
      total: "~$220–500/day",
    },
    {
      tier: "🎯 Wine Focus",
      accommodation: "$50–100",
      food: "$40–70",
      transport: "$30–80 (Kakheti day trip)",
      activities: "$60–120 (winery tours)",
      total: "~$130/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "$60–100 (apartment rental)",
      food: "$30–50",
      transport: "$15–30",
      activities: "$20–40",
      total: "~$80/day",
    },
  ],

  mistakes: [
    {
      icon: "🍷",
      title: "Tbilisi 4-Day Itinerary 2026: Trip Planner",
      desc: "Saperavi is famous but Georgia's real treasure is its ancient qvevri natural wine — amber/orange wines made in clay vessels buried underground. Go to Vino Underground or G.Vino bar to experience 8,000 years of winemaking in a glass. Mind-altering.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚌",
      title: "Skipping Kazbegi because it 'looks far'",
      desc: "Kazbegi (Stepantsminda) is 2–2.5 hours by shared marshrutka from Tbilisi and costs $3 each way. It is one of the most spectacular mountain landscapes in the Caucasus — Gergeti Trinity Church above the clouds is the image of Georgia. Do not skip it.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🕐",
      title: "Planning too many restaurants and too little wandering",
      desc: "Tbilisi's magic is in its streets — the peeling plaster, the carved wooden balconies spilling with wisteria, the neighbourhood cats, the 4th-century churches between apartment blocks. Slow down, get lost, let the city reveal itself.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💱",
      title: "Using airport currency exchange",
      desc: "The airport exchange rate is terrible. Withdraw from ATMs in the city (Lari — GEL) or use exchange offices on Rustaveli Avenue. The rate difference can be 10–15% vs. the fair market rate.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "📆",
      title: "Visiting in July–August without checking the heat",
      desc: "July and August in Tbilisi can reach 38°C and the city gets crowded. Spring (April–June) and autumn (September–October) offer perfect weather, wine harvests in autumn, and far fewer tourists.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🛁",
      title: "Do the sulfur baths properly — go private",
      desc: "The public Abanotubani sulfur baths are fine and cheap ($5), but a private room (about $15/hour) is a completely different experience — your own domed bathhouse, hot sulfur pool, massage on request. Book Chreli-Abano or Royal Bath. You'll smell of eggs for an hour after, completely worth it.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍖",
      title: "Eat khinkali correctly — you're supposed to hold the knot",
      desc: "Georgian dumplings are held by the doughy knot at the top, bitten carefully to drink the broth inside first, then eaten — except the knot, which is left on the plate (count of knots = bragging rights). Order churchkhela for dessert: walnuts strung on grape must.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎵",
      title: "Find Georgian polyphonic singing — it's UNESCO Intangible Heritage",
      desc: "Georgia's ancient 3-voice polyphonic choral tradition is one of the most haunting sounds you'll ever hear. The Tbilisi Ensemble performs regularly, or ask at your hotel about local churches that sing on Sunday. The Anchiskhati Ensemble is world-famous.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🗺️",
      title: "Download the Yandex Maps app — Google Maps gaps in Georgia",
      desc: "Google Maps works for major streets but Yandex Maps is far more accurate for Tbilisi's Old Town alleyways, correct transit routes, and rural Georgia. Also use GetYourGuide for pre-booked Kazbegi day trips — they fill up quickly in peak season.",
      color: "bg-teal-50 border-teal-200",
    },
  ],

  faqs: [
    {
      q: "Is Georgia (the country) safe to travel in?",
      a: "Georgia consistently ranks as one of the safest countries in the Caucasus region. Tbilisi has very low rates of violent crime toward tourists. The main things to watch are standard urban pickpocketing in crowded areas and road safety (Georgian drivers are famously fast). Solo female travellers overwhelmingly report positive experiences.",
    },
    {
      q: "What is the Georgian currency and how much should I bring?",
      a: "Georgia uses the Lari (GEL). As of 2026, 1 USD ≈ 2.7 GEL. Tbilisi is genuinely cheap — a budget traveller can live well on $30–40/day including a good hostel, three meals, and a glass of wine. Withdraw GEL from ATMs in the city; avoid airport exchange booths.",
    },
    {
      q: "Can I visit Kazbegi without a car?",
      a: "Yes — marshrutka (minibus) to Kazbegi departs from Didube Bus Terminal in Tbilisi daily from about 8am and costs around $3 each way (3 GEL). Journey takes 2–2.5 hours. The return marshrutka leaves Stepantsminda at around 5–6pm. Alternatively, join a GetYourGuide day tour for about $25–35 that includes transport and a guide.",
    },
    {
      q: "What is a supra and should I go to one?",
      a: "A supra is the Georgian feast tradition — a long, abundant table of food presided over by a Tamada (toastmaster) who leads elaborate toasts to God, peace, ancestors, guests, and love. It is simultaneously the most hospitable and the most endurance-testing meal you will ever eat. Yes, you absolutely should go to one. Budget restaurants do supra-style meals; for an authentic private supra, ask your hotel or use GetYourGuide.",
    },
  ],

  combineWith: ["armenia-4-days", "azerbaijan-4-days", "istanbul-5-days", "doha-3-days"],
  relatedSlugs: ["doha-3-days", "bolivia-salar-5-days", "istanbul-5-days", "armenia-4-days"],
  galleryQuery: "tbilisi georgia old town wine narikala kazbegi mountains",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function TbilisiPage() {
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
