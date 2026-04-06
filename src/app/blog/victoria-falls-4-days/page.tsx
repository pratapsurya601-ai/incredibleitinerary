import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Page metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Victoria Falls 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Victoria Falls trip in 4 days. Plan the perfect 4-day Victoria Falls itinerary — from Devil's Pool on the lip of the falls to Grade 5 Zambezi.",
  keywords: [
    "Victoria Falls travel guide",
    "Victoria Falls 4 days itinerary",
    "Devil's Pool Victoria Falls",
    "Zambezi white water rafting",
    "Victoria Falls bungee jump",
    "Chobe National Park day trip",
    "Zimbabwe travel guide",
    "Victoria Falls budget travel",
    "Africa travel guide",
    "smoke that thunders",
  ],
  openGraph: {
    title: "Victoria Falls 4-Day Itinerary 2026: Trip Planner",
    description:
      "The largest waterfall on Earth — 1.7km wide, 108m drop, its own permanent rainforest. Devil's Pool on the edge, Grade 5 rafting, and wild elephants an hour away. Your complete 2026 Victoria Falls guide.",
    url: "https://incredibleitinerary.com/blog/victoria-falls-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Victoria Falls Zimbabwe waterfall mist rainbow Zambezi River",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victoria Falls 4-Day Itinerary 2026: Trip Planner",
    description:
      "1.7km wide, 108m drop, Devil's Pool on the lip, Grade 5 rafting, wild elephants — your complete Victoria Falls itinerary from $100/day to Tongabezi luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/victoria-falls-4-days",
  },
};

/* ── JSON-LD structured data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Victoria Falls in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Victoria Falls itinerary covering the falls from both Zambia and Zimbabwe sides, Devil's Pool, Zambezi white water rafting, bungee jumping, helicopter flights, and Chobe National Park day trips.",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      datePublished: "2026-01-25",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/victoria-falls-4-days",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Victoria Falls 4 Days",
          item: "https://incredibleitinerary.com/blog/victoria-falls-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Victoria Falls",
      description:
        "The largest waterfall on Earth, stretching 1.7 kilometres wide on the Zambia-Zimbabwe border, creating its own permanent rainforest from the spray. Known locally as Mosi-oa-Tunya — The Smoke That Thunders.",
      url: "https://incredibleitinerary.com/blog/victoria-falls-4-days",
      touristType: ["Adventure travellers", "Wildlife enthusiasts", "Honeymooners", "Nature lovers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -17.9243,
        longitude: 25.8572,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Zimbabwe",
      },
    },
  ],
};

/* ── Blog data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Victoria Falls",
  country: "Zimbabwe",
  countryFlag: "🇿🇼",
  slug: "victoria-falls-4-days",
  heroQuery: "victoria falls zimbabwe zambia waterfall spray rainbow smoke",
  heroAlt: "Victoria Falls Zimbabwe waterfall mist rainbow Zambezi River",
  category: "Africa",
  date: "January 25, 2026",
  readTime: "12 min read",
  intro:
    "The largest waterfall on Earth, stretching 1.7 kilometres wide and plunging 108 metres into a gorge that creates its own permanent rainforest from the spray, the Devil's Pool on the Zambia side where you can sit literally on the edge of the falls with your feet dangling over (September–November), a white water rafting run through the Batoka Gorge rated Grade 5 churning water, and the last place on Earth where you can see wild elephants, lions, and hippos in an hour's drive — Victoria Falls, the Smoke that Thunders.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$100",
    bestMonths: "Feb–May (high water) or Aug–Jan (lower water for activities)",
    airport: "VFA (Victoria Falls, Zimbabwe) or LVI (Livingstone, Zambia)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🌊", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "📸", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "Yes — Zimbabwe e-Visa required"],
        ["Cost", "$30 single entry / $50 double entry"],
        ["Apply at", "evisa.gov.zw (official Zimbabwe e-Visa portal)"],
        ["Processing", "24–48 hours, sometimes faster"],
        ["KAZA Univisa", "$50 — covers both Zimbabwe AND Zambia (best value if crossing both sides)"],
        ["Note", "Apply before travel. Visa on arrival is possible but e-Visa is more reliable and faster"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "Western Passports (US / UK / EU / AU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "Yes — visa on arrival available at Victoria Falls airport"],
        ["Cost", "$30 single entry / $50 double entry at the border"],
        ["KAZA Univisa", "$50 — Zimbabwe + Zambia combined (strongly recommended)"],
        ["Processing", "Straightforward at VFA airport — takes 10–15 minutes"],
        ["Note", "KAZA Univisa also lets you make a day trip to Botswana (Chobe) without extra visa"],
        ["Validity", "30 days from date of entry"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$100/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive — Zimbabwe Side & The Falls",
          items: [
            "Arrive at VFA airport, get KAZA Univisa ($50) if not already obtained, taxi to Victoria Falls town ($10–15)",
            "Check in to a budget guesthouse or hostel in Victoria Falls town (from $25–40/night, e.g. Shoestrings Backpackers)",
            "Walk to the Falls viewpoints — Zimbabwe side entry fee ~$30 (worth every dollar, 16+ viewpoints)",
            "The spray at high water creates a permanent rainbow and soaks you within minutes — bring a rain poncho",
            "Sunset drinks at the Victoria Falls Hotel terrace (free to enter for drinks) — the terrace overlooks the gorge",
          ],
          cost: "$80–110 (accommodation + visa + falls entry + dinner)",
        },
        {
          day: "Day 2",
          title: "Zambezi White Water Rafting — Grade 5",
          items: [
            "Book Zambezi rafting through Safari Par Excellence or Shearwater Adventures (~$120–150/person, full day)",
            "Raft 23km through the Batoka Gorge on the Zambezi — 23 named rapids, Grade 4 and 5",
            "Highlights include Rapid 1 (The Boiling Pot), Rapid 9 (Commercial Suicide), and Rapid 18 (Oblivion)",
            "Lunch served on the riverside, cold beer and safety briefing included",
            "The climb out of the gorge at the end is steep (200m) but the adrenaline carries you — transfer back to town",
          ],
          cost: "$130–160 (rafting all-inclusive, lunch included)",
        },
        {
          day: "Day 3",
          title: "Zambia Side — Livingstone & Border Cross",
          items: [
            "Morning: Walk across the Victoria Falls Bridge to Zambia side (KAZA Univisa covers this — no extra cost)",
            "Zambia-side Falls viewpoints — different angle, often less crowded, great for photography",
            "Livingstone (Zambia): David Livingstone Museum — the explorer who 'discovered' the falls in 1855 ($5 entry)",
            "Livingstone market for local crafts, carvings, and street food — negotiate hard",
            "Evening: Sunset Zambezi cruise from Livingstone ($35–50) — hippos, crocodiles, elephants on the bank",
          ],
          cost: "$80–100 (cruise + museum + market + food)",
        },
        {
          day: "Day 4",
          title: "Chobe Day Trip (Botswana) & Depart",
          items: [
            "Day trip to Chobe National Park, Botswana ($100–130 all-inclusive from Victoria Falls) — 90-min drive each way",
            "Chobe has the highest elephant density in Africa — herds of 100+ elephants at the river at dawn",
            "Game drive: elephants, Cape buffalo, giraffe, hippo, crocodile, and lions if lucky",
            "Afternoon boat safari on the Chobe River — elephants swimming across, hippos yawning, fish eagles diving",
            "Return to Victoria Falls, farewell dinner and early departure flight home",
          ],
          cost: "$130–160 (Chobe all-inclusive day trip + dinner)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$220/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive — Zimbabwe Side, Falls & Gorge Walk",
          items: [
            "Private transfer from VFA airport to a mid-range lodge in Victoria Falls town (~$30)",
            "Check in to a lodge with pool (from $100–150/night, e.g. Ilala Lodge or Elephant Camp)",
            "Guided Falls tour with a Zimbabwe National Parks ranger ($50) — explains the geology, history, ecology",
            "Sundowner cruise on the Zambezi ($50) — G&Ts watching hippos while the sun turns the river gold",
            "Dinner at The Boma restaurant — traditional Zimbabwean dinner with drumming, dancing, local meats ($60)",
          ],
          cost: "$250–290 (lodge + guided tour + cruise + Boma dinner)",
        },
        {
          day: "Day 2",
          title: "White Water Rafting & Bungee Jump",
          items: [
            "Full-day white water rafting on the Zambezi ($150) with a premium operator including quality safety equipment",
            "Grade 5 rapids in the Batoka Gorge — 23 rapids including Rapid 7 (Gullivers Travels) and 9 (Commercial Suicide)",
            "Afternoon: Bungee jump from Victoria Falls Bridge (111 metres, $160) — highest commercial bungee in Zimbabwe",
            "The bridge spans the gorge between Zimbabwe and Zambia — you fall toward the Zambezi below",
            "Evening: Recovery sundowner at Livingstone Island viewpoint or hotel bar",
          ],
          cost: "$310–340 (rafting + bungee + drinks + meals)",
        },
        {
          day: "Day 3",
          title: "Flight of Angels & Zambia Side",
          items: [
            "Morning: Helicopter flight over the Falls — 'Flight of Angels' ($180–220 for 15 minutes)",
            "Aerial view of the full 1.7km width — the spray column rises 400m, visible from 50km away",
            "Cross to Zambia: Livingstone town, David Livingstone Museum, local craft market",
            "Afternoon: Sunset Zambezi cruise from Livingstone on a larger catamaran ($60) with sundowner drinks",
            "Dinner at a Livingstone restaurant — Zambian nshima with grilled tilapia (~$25)",
          ],
          cost: "$285–325 (helicopter + cruise + museum + dinner)",
        },
        {
          day: "Day 4",
          title: "Chobe National Park & Depart",
          items: [
            "Premium Chobe day trip with a specialist wildlife guide ($150–180, includes private 4WD game drive)",
            "Dawn game drive: Chobe River floodplains with elephants drinking, lions hunting in early light",
            "Chobe boat safari: hundreds of elephants swimming across the river, hippo pods, Nile crocodiles",
            "Picnic lunch in the park — game-watching while you eat",
            "Transfer back to Victoria Falls for evening departure",
          ],
          cost: "$180–220 (premium Chobe + picnic + transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$600/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive — The Victoria Falls Hotel & Private Falls Tour",
          items: [
            "Private transfer from VFA airport to The Victoria Falls Hotel — opened in 1904, the grande dame of African colonial hotels",
            "Check in to a Spray View Room (views of the mist column from your veranda)",
            "Private guided Falls tour with a senior Zimbabwe Parks ranger — exclusive access to restricted viewpoints",
            "Helicopter flight: The Flight of Angels, private flight ($350 for a private 30-minute circuit)",
            "Dinner on the hotel terrace: fine dining with Zambezi views, silver service, local nyama choma and wines",
          ],
          cost: "$700–900 (hotel + helicopter + private guide + dinner)",
        },
        {
          day: "Day 2",
          title: "Livingstone Island & Devil's Pool (Sept–Nov) or Rafting",
          items: [
            "September to November: Livingstone Island exclusive breakfast ($180/person) then Devil's Pool — swim literally on the edge of the falls",
            "Devil's Pool is a natural rock pool at the lip of Victoria Falls, Zambia side — a guide holds you while you look over",
            "Outside Devil's Pool season: private Zambezi rafting with a dedicated safety kayaker and chef-prepared riverside lunch",
            "Afternoon: private canoe safari on the Upper Zambezi — elephants and hippos at arm's length",
            "Sunset: private catamaran charter with sundowner cocktails and canapés",
          ],
          cost: "$600–800 (Livingstone Island + canoe + catamaran)",
        },
        {
          day: "Day 3",
          title: "Tongabezi Lodge & Zambia Experience",
          items: [
            "Private boat transfer to Tongabezi Lodge (Zambia) — stay in a treehouse or river cottage open to the Zambezi",
            "Tongabezi's Sampson's Pool: private plunge pool above the river",
            "Guided walk in the gorge with Tongabezi's expert wilderness guide",
            "Livingstone Island exclusive access (Tongabezi guests get priority booking for Devil's Pool)",
            "Dinner at Tongabezi: candlelit riverside dining, 5-course menu with local wines, under the stars",
          ],
          cost: "$800–1,000 (Tongabezi lodge + exclusive experiences + dinner)",
        },
        {
          day: "Day 4",
          title: "Private Chobe & Depart",
          items: [
            "Private vehicle and specialist guide for Chobe National Park ($400–600 private full-day safari)",
            "Dawn game drive targeting lions, wild dogs, and the massive elephant herds at the river",
            "Private Chobe boat: your own pontoon with guide, just you and the wildlife — elephants at 10 metres",
            "Bush lunch served in the shade by the river — silver service in the African wilderness",
            "Return to Victoria Falls, private airport transfer, and lounge access for departure",
          ],
          cost: "$700–900 (private Chobe + lunch + transfer + lounge)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$25–50/night guesthouse/hostel",
      food: "$15–25 (local restaurants, self-catering)",
      transport: "$15–30 (shared taxis, walking)",
      activities: "$40–60 (falls entry, shared rafting)",
      total: "$95–165/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$100–180/night lodge",
      food: "$40–60 (restaurant dining, Boma)",
      transport: "$30–60 (private taxis, shuttle)",
      activities: "$100–180 (rafting, helicopter, bungee)",
      total: "$270–480/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$400–700/night (Victoria Falls Hotel, Tongabezi)",
      food: "$80–130 (fine dining, private chef)",
      transport: "$80–150 (private transfers, private boat)",
      activities: "$200–400 (private helicopter, Devil's Pool, private Chobe)",
      total: "$760–1,380/day",
    },
    {
      tier: "🚀 Ultra-Luxury",
      accommodation: "$700+/night (exclusive lodges, private islands on Zambezi)",
      food: "$130–180 (Tongabezi tasting menu, private chef)",
      transport: "$200+ (private helicopter, charter)",
      activities: "$400+ (exclusive access, private game reserves)",
      total: "$1,430+/day",
    },
    {
      tier: "📊 Budget Notes",
      accommodation: "KAZA Univisa $50 covers Zimbabwe + Zambia",
      food: "USD widely accepted in Zimbabwe (local currency unstable)",
      transport: "Chobe day trips: $100–180 all-in from Vic Falls",
      activities: "Book rafting + helicopter in advance — sell out in peak season",
      total: "$400–800 typical for 4 nights/person",
    },
  ],

  mistakes: [
    {
      icon: "💳",
      title: "Not bringing US dollars in cash — Zimbabwe's currency situation",
      desc: "Zimbabwe's local currency (ZiG) is unstable. Virtually everything in Victoria Falls is priced and accepted in US dollars — activities, accommodation, restaurants, and transport. Bring clean, crisp USD bills (issued after 2006). Card machines exist but often fail. Cash is king in Vic Falls.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Going for Devil's Pool in the wrong months",
      desc: "Devil's Pool on Livingstone Island is only accessible from approximately late August to early January — when the water level is low enough to safely swim at the edge. At high water (February–July), the current is too strong and Devil's Pool is closed. If this is your priority, visit September–November for the best conditions.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "📷",
      title: "Only seeing the falls from the Zimbabwe side",
      desc: "The Zimbabwe side has more viewpoints and is generally considered better for seeing the full width of the falls. But the Zambia side gives a different perspective — often clearer views into the gorge and better for the Rainbow Falls section. Get the KAZA Univisa ($50) and see both sides. It's the same falls from two completely different angles.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🦟",
      title: "Not taking malaria prophylaxis",
      desc: "Victoria Falls town itself is low-risk for malaria, but the surrounding Zambezi Valley (especially Chobe, Livingstone, and any game areas) is a malaria zone. Consult a travel doctor before departure and take prophylaxis if you're going on game drives or spending time by the river at dawn or dusk. Use DEET repellent at all times outdoors.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🎒",
      title: "Underestimating how wet you get at the falls",
      desc: "At high water (February–June), the spray from Victoria Falls creates its own weather system — you get completely soaked within 30 seconds of entering the viewing area. Bring a proper rain poncho (buy one at the gate for $3–5) and put your camera in a waterproof bag. Phones and cameras will be drenched. Do not underestimate this.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "Visit the falls at sunrise — before the tour groups arrive",
      desc: "The Zimbabwe National Parks gate opens at sunrise. Arrive at opening time and you will often have the main viewpoints almost entirely to yourself for 30–45 minutes. The morning light on the spray creates the most spectacular rainbows. By 9am the tour groups from cruise ships and package tours arrive and it gets extremely crowded.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏨",
      title: "Victoria Falls 4-Day Itinerary 2026: Trip Planner",
      desc: "Victoria Falls town (Zimbabwe) is closer to the main falls entrance, has more accommodation options at every price point, better restaurants, and the bridge bungee jump is walkable. Livingstone (Zambia) is great for Devil's Pool access and a slightly more local feel — but crossing the border daily takes time. Pick your base wisely.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🐘",
      title: "Do Chobe as an early morning day trip, not afternoon",
      desc: "The Chobe game drive is most spectacular at dawn when the animals are active and drinking at the river. Book an early departure (5–6am) from Victoria Falls to arrive at Chobe for opening. The afternoon drive is less productive as animals retreat into the shade. A good operator will know the best spots for the elephant herds.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚣",
      title: "Book rafting 3–6 months ahead for peak season (July–October)",
      desc: "Zambezi white water rafting is one of the world's top rafting experiences and the main operators (Shearwater, Safari Par Excellence, Adrift) sell out months in advance for July–October peak season. Book directly with an operator online before you travel — walk-up bookings in peak season are almost impossible.",
      color: "bg-indigo-50 border-indigo-200",
    },
  ],

  faqs: [
    {
      q: "Which side is better for Victoria Falls — Zimbabwe or Zambia?",
      a: "Both sides are worth seeing — buy the KAZA Univisa ($50) which covers both Zimbabwe and Zambia. Zimbabwe has more viewpoints and a better overall perspective of the full 1.7km width. Zambia has Livingstone Island, Devil's Pool (season permitting), and a slightly more intimate approach to the eastern cataract. Two hours on each side is ideal.",
    },
    {
      q: "What is Devil's Pool and how do I book it?",
      a: "Devil's Pool is a natural rock pool at the very lip of Victoria Falls on the Zambia side — accessible from Livingstone Island. At low water (approximately late August to early January), a natural rock barrier creates a calm pool where you can swim with your head over the edge of the falls. Book through Tongabezi Lodge or the Livingstone Island operators. It's accessible September–November for the best conditions and must be booked weeks in advance.",
    },
    {
      q: "Is Victoria Falls safe for tourists?",
      a: "Victoria Falls town in Zimbabwe and Livingstone in Zambia are both considered very safe for tourists. The main dangers are wildlife-related (never walk alone at dawn or dusk outside town — elephants, hippos, and leopards pass through) and the usual caution with your belongings in markets. Do not walk alone on poorly lit streets at night. Most travellers have no safety issues whatsoever.",
    },
    {
      q: "When is the best time to visit Victoria Falls?",
      a: "It depends what you want. February to May: the falls are at maximum flow — wall of water, soaking spray, extraordinary power, but some viewpoints are obscured by mist and Devil's Pool is closed. August to January: the water level is lower, you see more of the falls structure, Devil's Pool is accessible (Sept–Nov), rafting is at its best, and game drives are excellent. Most visitors who want activities (rafting, Devil's Pool, Chobe) prefer September to November.",
    },
  ],

  combineWith: ["kenya-7-days", "botswana-safari", "south-africa-cape-town"],
  relatedSlugs: ["seychelles-5-days", "mauritius-5-days", "kenya-7-days"],
  galleryQuery: "victoria falls zimbabwe zambezi gorge rainbow spray mist waterfall",
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function VictoriaFallsPage() {
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
