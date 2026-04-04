import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Guilin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Complete Guilin travel guide: Li River cruise, Longji Rice Terraces, Yangshuo cycling, karst peaks. Budget ¥250/day to luxury ¥1,500/day. Visa info, day-by-day itineraries, insider tips.",
  keywords: [
    "Guilin travel guide",
    "Li River cruise",
    "Longji Rice Terraces",
    "Yangshuo",
    "karst mountains China",
    "Guilin itinerary 3 days",
    "Dragon's Backbone terraces",
    "Guilin budget travel",
  ],
  openGraph: {
    title: "Guilin in 3 Days: Li River, Karst Peaks & Longji Rice Terraces",
    description:
      "The landscape on every Chinese scroll painting and every 20-yuan banknote. Limestone peaks, cormorant fishermen, 2,300-year-old rice terraces and cycling through Yangshuo. The complete Guilin guide.",
    url: "https://www.incredibleitinerary.com/blog/guilin-3-days",
    siteName: "IncredibleItinerary",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Guilin China karst limestone peaks reflected in Li River morning mist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilin in 3 Days: The Complete Travel Guide 2026",
    description:
      "Li River cruise, Longji Rice Terraces and Yangshuo karst cycling. Budget to luxury day-by-day itineraries.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/guilin-3-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Guilin in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete Guilin travel guide covering the Li River cruise, Yangshuo karst cycling, Longji Rice Terraces and the most photographed landscape in China — with day-by-day itineraries for every budget.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
      datePublished: "2026-01-15",
      dateModified: "2026-04-01",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/guilin-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Guilin 3-Day Guide", item: "https://www.incredibleitinerary.com/blog/guilin-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Guilin",
      description:
        "Guilin is one of China's most iconic landscapes — limestone karst peaks rising from flat plains, the Li River winding between them, Longji Rice Terraces carved into mountainsides, and Yangshuo's cycling countryside.",
      touristType: ["Nature lovers", "Photographers", "Adventure travellers", "Culture enthusiasts"],
      geo: { "@type": "GeoCoordinates", latitude: 25.2736, longitude: 110.2907 },
      containedInPlace: { "@type": "Country", name: "China" },
    },
  ],
};

/* ── Page data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Guilin",
  country: "China",
  countryFlag: "🇨🇳",
  slug: "guilin-3-days",
  heroQuery: "guilin karst mountains li river china rice terraces",
  heroAlt: "Guilin China karst limestone peaks reflected in Li River morning mist",
  category: "East Asia",
  date: "January 15, 2026",
  readTime: "12 min read",
  intro:
    "This is the landscape that appears on every Chinese scroll painting, every classical ink drawing, and — most famously — the back of every 20-yuan banknote: limestone karst peaks rising sheer and sudden from a flat green plain, the Li River winding between them in slow curves as cormorant fishermen pole bamboo rafts through morning mist. Ninety kilometres north, the Longji Rice Terraces spiral up a mountainside in concentric curves carved over 2,300 years by the Zhuang and Yao minorities — a feat of agricultural engineering so beautiful it looks designed for photographs. And base yourself in Yangshuo, where renting a bicycle for a day and pedalling between soaring karst peaks through countryside so impossibly picturesque it makes Tuscany look understated. Guilin is the landscape China showed the world, and it still delivers.",

  stats: {
    duration: "3 Days",
    budgetFrom: "¥250 (~$35)",
    bestMonths: "Apr–Jun or Sep–Nov",
    airport: "KWL (Guilin Liangjiang International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "⛰️", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🚲", label: "Getting Around" },
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
        ["Visa required", "Chinese L (tourist) visa"],
        ["Apply at", "Chinese consulate or COVA online portal"],
        ["Fee", "¥800 (~$110 USD)"],
        ["Processing", "4–7 business days standard"],
        ["Validity", "Single or double entry, 30 days stay"],
        ["Transit note", "144-hour transit visa available at select gateway airports — check if Guilin (KWL) qualifies"],
        ["VPN", "Install before arrival — Google, WhatsApp, Instagram blocked in China"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "Western Passports (US / UK / EU / AU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa-free", "15-day visa-free entry for most Western passports (2024 policy update)"],
        ["Verify", "Confirm current status — China's visa policy updates regularly"],
        ["Transit visa", "144-hour transit visa available for connections at major gateway airports"],
        ["Longer stays", "Apply for L tourist visa for stays exceeding 15 days"],
        ["Payment", "WeChat Pay & Alipay accept foreign Visa/Mastercard — set up before arrival"],
        ["VPN", "Must install VPN before entering China — not available for download inside the country"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "¥250/day (~$35)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Guilin + City Sights + Lijiang River Evening",
          items: [
            "Arrive KWL airport — take Airport Shuttle Bus Line 3 to Guilin city centre (¥20, ~40 min)",
            "Check in to hostel in central Guilin (¥60–90/night dorm)",
            "Walk to Elephant Trunk Hill — the symbol of Guilin where the Li River meets Peach Blossom River (entry ¥95, or view free from the bridge)",
            "Afternoon: Reed Flute Cave — illuminated stalactite cave, nicknamed the 'Palace of Natural Arts' (entry ¥100)",
            "Evening: walk along Two Rivers Four Lakes scenic area — free lakeside strolling, illuminated bridges",
            "Dinner: local rice noodle soup (桂林米粉, ¥10–15) at a street stall — this is Guilin's most beloved dish",
          ],
          cost: "¥200–230 (transport + entry fees + food + hostel share)",
        },
        {
          day: "Day 2",
          title: "Li River Cruise to Yangshuo",
          items: [
            "Book the Li River cruise Guilin → Yangshuo in advance (official boat ¥210–238 peak / ¥190 off-peak)",
            "Departs Zhujiang Pier ~9am, arrives Yangshuo ~1:30pm — 83km, 4–5 hours",
            "Bring snacks — the on-board food is overpriced. The scenery is the point: Nine Horse Fresco Hill, Xingping village views, cormorant fishermen",
            "Arrive Yangshuo: check in to hostel (¥60–80/dorm)",
            "Afternoon: rent a bicycle in Yangshuo (¥20–30/day) and cycle the karst countryside — cycle to Moon Hill viewpoint (15 min, entry ¥15)",
            "Evening: West Street in Yangshuo for dinner (local beer fish, ¥40–60)",
          ],
          cost: "¥320–370 (cruise + bike + entry + food + hostel)",
        },
        {
          day: "Day 3",
          title: "Longji Rice Terraces Day Trip + Return",
          items: [
            "Early morning: take shared minivan or public bus from Guilin to Longji (¥25–30 each way, ~90 min)",
            "Longji Rice Terraces (Dragon's Backbone): entry ¥80, shuttle bus within terraces ¥20",
            "Hike the Ping'an or Dazhai viewpoint trails — allow 3–4 hours for a meaningful visit",
            "Best light: morning mist fills the valleys between 7–9am in spring and autumn",
            "Lunch at a Yao/Zhuang minority guesthouse on the terrace (¥40–60, try glutinous rice cooked in bamboo)",
            "Return to Guilin or Yangshuo by shared minivan, depart for next destination",
          ],
          cost: "¥200–250 (transport + entry + food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "¥600/day (~$84)",
      days: [
        {
          day: "Day 1",
          title: "Arrive + City Highlights + Riverside Dinner",
          items: [
            "Arrive KWL — taxi to 3-star hotel (¥80–100)",
            "Check in to Guilin city hotel with Li River view (¥200–300/night)",
            "Guided city afternoon: Elephant Trunk Hill (¥95), Reed Flute Cave (¥100), Fubo Hill for panoramic city view (¥35)",
            "Two Rivers Four Lakes scenic cruise at sunset (¥150) — floating past illuminated pagodas",
            "Dinner at a proper restaurant: local Guilin cuisine — stuffed li fish, pork rib with taro, osmanthus wine (¥80–120)",
          ],
          cost: "¥550–620 (hotel + taxi + entries + cruise + dinner)",
        },
        {
          day: "Day 2",
          title: "Li River Cruise + Yangshuo Countryside Cycling",
          items: [
            "Official Li River cruise with good-tier seating (¥238, book ahead online)",
            "Photography stops at Xingping Ancient Town — the exact view on the 20 RMB note",
            "Arrive Yangshuo: check in to boutique guesthouse with karst view (¥300–400/night)",
            "Rent quality bicycle or e-bike (¥50–80) for afternoon countryside loop",
            "Cycle to Impression Sanjie Liu open-air show viewpoint at sunset",
            "Evening: enjoy 'Impression Liu Sanjie' night show by Zhang Yimou (¥238–380) — Li River as stage, karst peaks as backdrop, 600 local performers",
          ],
          cost: "¥650–750 (cruise + hotel + bike + show + dinner)",
        },
        {
          day: "Day 3",
          title: "Longji Rice Terraces Full Day",
          items: [
            "Hire a private car from Yangshuo/Guilin to Longji Rice Terraces (¥350–450 return)",
            "Longji entry ¥80 — take shuttle to upper viewpoint, then hike down through Dazhai village",
            "Visit both Yao and Zhuang minority villages — very different architecture and culture",
            "Lunch in a Yao guesthouse with terrace views (¥60–100)",
            "On the return, stop at a Zhuang embroidery workshop",
            "Return to Guilin city, farewell dinner at a riverside restaurant",
          ],
          cost: "¥600–700 (car + entries + meals)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "¥1,500/day (~$210)",
      days: [
        {
          day: "Day 1",
          title: "Arrival + Private City Experience",
          items: [
            "Private airport transfer (¥200–300)",
            "Check in to Shangri-La Guilin or Banyan Tree Yangshuo (¥800–1,500/night) — both have jaw-dropping karst views",
            "Private half-day guide: Elephant Trunk Hill, Reed Flute Cave, Fubo Hill with photo opportunities",
            "Private sunset Two Rivers Four Lakes boat cruise (arrange through hotel, ¥300–500)",
            "Dinner at Shangri-La's Chinese restaurant — Guilin cuisine refined and elevated (¥300–500/person)",
          ],
          cost: "¥1,400–1,800 (hotel + guide + boat + dinner)",
        },
        {
          day: "Day 2",
          title: "Exclusive Li River Morning + Yangshuo Luxury",
          items: [
            "Private boat charter on the Li River (¥1,500–2,500 for half day) — your own vessel, no crowds",
            "Stop at Xingping for the 20 RMB viewpoint — completely different experience on a private boat",
            "Lunch at a riverside pavilion in Yangshuo arranged by your concierge",
            "Check in to Banyan Tree Yangshuo — villas built into karst cliffs with infinity pools",
            "Afternoon: hot-air balloon over Yangshuo karst at sunset (¥2,000–2,500 per person)",
            "Evening: private chef dinner at resort pavilion, or reserved front-row seats at Impression Liu Sanjie (¥480 VIP)",
          ],
          cost: "¥2,000–3,000 (private boat + resort + balloon + dinner)",
        },
        {
          day: "Day 3",
          title: "Longji VIP Experience + Departure",
          items: [
            "Private car to Longji Rice Terraces (¥500–700)",
            "Private guide at Longji — historian who knows the Zhuang and Yao minority oral histories",
            "Stay at a premium minority guesthouse on the terraces (or day visit with private pavilion lunch)",
            "Early afternoon return — spa treatment at resort (¥600–800)",
            "Private transfer to KWL airport or high-speed train station",
          ],
          cost: "¥1,500–2,000 (car + guide + spa + meals)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "¥60–90 (hostel dorm)",
      food: "¥50–80 (street food)",
      transport: "¥30–50 (bus/shared van)",
      activities: "¥100–150",
      total: "¥240–370/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "¥200–300 (3-star)",
      food: "¥120–180 (restaurants)",
      transport: "¥80–120 (taxi/car)",
      activities: "¥200–300",
      total: "¥600–900/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "¥800–1,500 (5-star/resort)",
      food: "¥300–500 (fine dining)",
      transport: "¥300–600 (private car/boat)",
      activities: "¥400–800",
      total: "¥1,800–3,400/day",
    },
  ],

  mistakes: [
    {
      icon: "🚢",
      title: "Booking the Wrong Li River Cruise",
      desc: "There are two types of Li River cruise: the official government-operated large boats (Guilin to Yangshuo, the full scenic route, ¥210–238) and much shorter bamboo raft rides. Tourists often book the cheaper bamboo raft thinking it's the same journey — it's not. The full 83km cruise from Guilin is the iconic one. Book on the official Guilin Tourism website or through your hotel.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🌦️",
      title: "Visiting During Peak Rainy Season Without Checking Forecasts",
      desc: "June and July bring heavy rain to Guilin — while misty karst peaks are photogenic, serious flooding can cancel cruises and close Longji trails entirely. Check weather forecasts for your specific dates and have a backup plan. April–May and September–October offer the best balance of green scenery and manageable weather.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "📍",
      title: "Not Basing Yourself in Yangshuo",
      desc: "Many visitors stay in Guilin city and day-trip to Yangshuo. This is backwards. Yangshuo is surrounded by the best karst scenery and has far more to do — cycling, rock climbing, kayaking. Stay at least 1–2 nights in Yangshuo and make a single return trip to Guilin if needed.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🏔️",
      title: "Skipping Longji Because It Seems 'Too Far'",
      desc: "Longji Rice Terraces are 90km from Guilin (1.5–2hrs) and most travellers skip them citing distance. This is a mistake. The terraces — carved by the Zhuang people over 2,300 years — are arguably as impressive as anything in the city. Go early morning for mist; go in May–June for green terraces or September–October for golden harvest colour.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "💱",
      title: "Not Setting Up Mobile Payment Before Arrival",
      desc: "WeChat Pay and Alipay dominate transactions in Guilin and Yangshuo, including street food, bike rentals and small guesthouses. Foreign credit cards are often refused. Since 2023, both apps accept foreign Visa/Mastercard — set up one of these before you land. Carry some cash (¥500–1,000) as a backup.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "Take the Cruise Upstream to Downstream (Guilin→Yangshuo)",
      desc: "The Li River cruise runs one-way from Guilin to Yangshuo — the scenery builds continuously. Don't try to do it as a return trip or reverse direction. Take the cruise down, then get a bus back to Guilin or continue south. The section between Xingping and Yangshuo in the final hour is the most dramatic.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🚲",
      title: "Rent an E-Bike in Yangshuo for the Countryside",
      desc: "Regular bicycles work in Yangshuo town but e-bikes (¥50–80/day) make the 20–30km countryside loop comfortable even in heat and humidity. The classic loop: Yangshuo → Moon Hill → Big Banyan Tree → Liangjiang village → back via the river road. Allow a full afternoon. You'll pass between karst peaks with almost no other tourists.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "📸",
      title: "The 20 RMB Note View is at Xingping, Not in Guilin City",
      desc: "The iconic karst-peak-and-river view on China's 20-yuan banknote is taken from a hillside above Xingping Ancient Town, about 25km north of Yangshuo. The Li River cruise passes right through this stretch — watch for it around hour 3. Or take a short bus from Yangshuo to Xingping and hike up the hill yourself.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🍜",
      title: "Eat Guilin Rice Noodles Every Morning",
      desc: "Guilin mifen (桂林米粉) — silky rice noodles in pork bone broth with pickled vegetables, crispy soybeans and chilli — is one of China's great breakfast dishes and costs ¥8–15 at any street stall. Locals eat it standing. Order it with extra broth ('duo tang') and chilli oil on the side. Don't leave Guilin without having it at least three times.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "What is the best time of year to visit Guilin?",
      a: "April–June and September–November are ideal. Spring (April–May) brings lush green terraces and misty mornings. Autumn (September–October) turns Longji terraces golden for harvest season — the most photographed time. July–August is hot, humid and prone to heavy rain. December–February is cool and quiet with fewer crowds but terraces are bare.",
    },
    {
      q: "Is the Li River cruise worth the money?",
      a: "Yes — at ¥210–238, the 4.5-hour Li River cruise from Guilin to Yangshuo is one of the world's great river journeys and relatively excellent value. Book the official government cruise rather than private boats or 'budget' alternatives that take shorter routes. The section through Xingping is unmissable. On rainy days the mist on the peaks is equally beautiful.",
    },
    {
      q: "How do I get from Guilin to Hong Kong or Xi'an?",
      a: "Guilin to Hong Kong: no direct high-speed train (yet) — fly (1.5hrs) or take the train to Shenzhen and cross the border by foot. Guilin to Xi'an: high-speed train via Guiyang and Chongqing takes 6–8 hours (¥300–450 second class) — a scenic journey through Guizhou karst country. Book on Trip.com or the 12306 app.",
    },
    {
      q: "Can I see Guilin on a tight 2-day schedule?",
      a: "You can, but you'll need to prioritise. Day 1: Li River cruise + Yangshuo evening. Day 2: Yangshuo karst cycling + return. This means skipping Longji Rice Terraces entirely, which is a real loss. If you have any flexibility, add a third day for Longji — it's the most unique landscape in the region and completely different from the river scenery.",
    },
  ],

  combineWith: ["hong-kong-4-days", "xian-4-days", "chengdu-4-days", "shanghai-4-days"],
  relatedSlugs: ["xian-4-days", "hong-kong-4-days", "chengdu-4-days", "beijing-5-days"],

  galleryQuery: "guilin china karst mountains yangshuo li river rice terraces",
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function GuilinPage() {
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
