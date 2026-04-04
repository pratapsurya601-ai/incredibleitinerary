import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Xi'an in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Complete Xi'an travel guide: Terracotta Army, City Walls, Muslim Quarter, biang biang noodles. Budget ¥280/day to luxury ¥1,800/day. Visa info, day-by-day itineraries, insider tips.",
  keywords: [
    "Xi'an travel guide",
    "Terracotta Army",
    "Xi'an itinerary 4 days",
    "Muslim Quarter Xi'an",
    "biang biang noodles",
    "Xi'an city walls",
    "China ancient capital",
    "Xi'an budget travel",
  ],
  openGraph: {
    title: "Xi'an in 4 Days: Terracotta Army, City Walls & Ancient Silk Road Capital",
    description:
      "8,000 life-sized warriors, a 14km Tang dynasty city wall you can cycle at sunset, and a Muslim Quarter that still echoes 1,400 years of Silk Road trade. The complete Xi'an guide.",
    url: "https://www.incredibleitinerary.com/blog/xian-4-days",
    siteName: "IncredibleItinerary",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Xi'an Terracotta Army warriors in excavation pit China Qin Dynasty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xi'an in 4 Days: The Complete Travel Guide 2026",
    description:
      "Terracotta Army, City Walls, Muslim Quarter & biang biang noodles. Budget to luxury day-by-day itineraries.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/xian-4-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Xi'an in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete Xi'an travel guide covering the Terracotta Army, Xi'an City Walls, Muslim Quarter, Shaanxi History Museum and day-by-day itineraries for budget, mid-range and luxury travellers.",
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80",
      datePublished: "2026-01-10",
      dateModified: "2026-04-01",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/xian-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Xi'an 4-Day Guide", item: "https://www.incredibleitinerary.com/blog/xian-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Xi'an",
      description:
        "Ancient Chinese capital city, home of the UNESCO-listed Terracotta Army, Tang dynasty city walls, the Muslim Quarter and Silk Road heritage.",
      touristType: ["History enthusiasts", "Culture travellers", "Food lovers", "UNESCO site visitors"],
      geo: { "@type": "GeoCoordinates", latitude: 34.3416, longitude: 108.9398 },
      containedInPlace: { "@type": "Country", name: "China" },
    },
  ],
};

/* ── Page data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Xi'an",
  country: "China",
  countryFlag: "🇨🇳",
  slug: "xian-4-days",
  heroQuery: "xian terracotta army warriors china qin dynasty ancient",
  heroAlt: "Xi'an Terracotta Army warriors in excavation pit China Qin Dynasty",
  category: "East Asia",
  date: "January 10, 2026",
  readTime: "14 min read",
  intro:
    "Imagine standing above a pit of 8,000 life-sized clay warriors frozen in perfect formation for 2,200 years — each face uniquely carved, each soldier positioned as if awaiting orders from an emperor who believed they'd accompany him into the afterlife. Then cycling the complete 14km circuit of the Tang dynasty city walls at sunset as the ancient capital glows amber below you. Then sitting down to a bowl of biang biang noodles so thick and hand-pulled that the Chinese character required to write their name takes 15 separate strokes to draw. Then wandering a Muslim Quarter night market where 1,400 years of Arab trade history still shows up in every pomegranate juice stand and roujiamo lamb-filled flatbread. Xi'an, China's ancient capital and the original eastern terminus of the Silk Road, rewards every hour you give it.",

  stats: {
    duration: "4 Days",
    budgetFrom: "¥280 (~$39)",
    bestMonths: "Mar–May or Sep–Nov",
    airport: "XIY (Xianyang International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🚇", label: "Getting Around" },
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
        ["Transit note", "144-hour transit visa available at select airports (Beijing, Shanghai, Guangzhou, Chengdu — verify Xi'an/XIY eligibility)"],
        ["VPN", "Install before arrival — many Western apps blocked in China"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "Western Passports (US / UK / EU / AU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa-free", "15-day visa-free entry now available for most Western passports (2024 policy update)"],
        ["Verify", "Confirm current status at your embassy — policy changes frequently"],
        ["Transit visa", "144-hour transit visa available for connections requiring a longer layover"],
        ["Longer stays", "Apply for L visa at Chinese consulate if stay exceeds 15 days"],
        ["Payment", "WeChat Pay & Alipay now link to foreign Visa/Mastercard — set up before arrival"],
        ["VPN", "Install a VPN before entering China — not downloadable from within the country"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "¥280/day (~$39)",
      days: [
        {
          day: "Day 1",
          title: "Arrive + Muslim Quarter Night Market",
          items: [
            "Arrive XIY airport — take Airport Bus Line 3 to city centre (¥30, ~70 min)",
            "Check in to hostel dorm in Muslim Quarter area (¥60–80/night)",
            "Walk to Muslim Quarter (Huimin Jie) — free to enter and explore",
            "Street food dinner: roujiamo lamb flatbread (¥10), biang biang noodles (¥15), pomegranate juice (¥10)",
            "Evening stroll to the illuminated Drum Tower and Bell Tower (view from outside free)",
          ],
          cost: "¥120–140 (transport + food + hostel)",
        },
        {
          day: "Day 2",
          title: "Terracotta Army Full Day",
          items: [
            "Take public bus 306/914 from East Bus Station to Terracotta Army (¥7 each way)",
            "Terracotta Army entry: ¥120. Arrive early (8am) to beat crowds",
            "Spend 3–4 hours exploring Pits 1, 2, 3 and the museum — Pit 1 is unmissable",
            "Budget tip: skip the overpriced guided tours at the gate — rent an audio guide (¥30) instead",
            "Return to city, dinner at a local noodle shop near South Gate (¥20–30)",
          ],
          cost: "¥200–220 (entry + transport + food)",
        },
        {
          day: "Day 3",
          title: "City Walls + Shaanxi History Museum",
          items: [
            "Morning: rent a bicycle at South Gate and cycle the full 14km city wall circuit (wall entry ¥54, bike rental ¥45/2hrs)",
            "Sunset timing: check today's sunset — the wall glows spectacular gold in the last hour of light",
            "Afternoon: Shaanxi History Museum — free entry (book online slot in advance, limited free tickets)",
            "Highlights: Tang dynasty gold artefacts, bronze ware, 3,000 years of Silk Road history",
            "Evening: bowl of paomo bread-crumble lamb soup (¥30) at a local restaurant",
          ],
          cost: "¥150–170 (wall + bike + food)",
        },
        {
          day: "Day 4",
          title: "Big Wild Goose Pagoda + Depart",
          items: [
            "Morning: Big Wild Goose Pagoda (entry ¥50, pagoda climb ¥30) — Tang dynasty Buddhist tower",
            "Browse the surrounding Buddhist temple complex and garden",
            "Optional: Tang Paradise theme park nearby for Tang dynasty cultural shows",
            "Afternoon: last Muslim Quarter food run — grab supplies for journey",
            "Airport Bus Line 3 back to XIY (¥30, depart 2.5hrs before flight)",
          ],
          cost: "¥130–150 (entry + transport + food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "¥650/day (~$91)",
      days: [
        {
          day: "Day 1",
          title: "Arrive + Muslim Quarter & Great Mosque",
          items: [
            "Arrive XIY — take Airport Metro Express or taxi to hotel (¥80–120)",
            "Check in to 3-star hotel near Bell Tower or Muslim Quarter (¥200–280/night)",
            "Visit the Great Mosque of Xi'an — a Tang dynasty mosque in Chinese architectural style, one of China's oldest (entry ¥25)",
            "Guided Muslim Quarter food walk: roujiamo, biang biang noodles, persimmon cake, steamed cold noodles",
            "Dinner at a proper local restaurant — try paomo (lamb bread soup, ¥60–80)",
            "Evening: Bell Tower illuminated views from nearby café",
          ],
          cost: "¥380–420 (hotel + transport + food + entry)",
        },
        {
          day: "Day 2",
          title: "Terracotta Army with Private Guide",
          items: [
            "Hire a private English-speaking guide for Terracotta Army (¥300–400 for half day, includes transport)",
            "Context matters enormously here — a good guide transforms rows of clay figures into a living story of empire",
            "Visit all three excavation pits plus the on-site museum with bronze chariots",
            "Afternoon option: Huaqing Hot Springs (40km, Emperor Xuanzong's Tang dynasty resort) — entry ¥120",
            "Evening: Dumpling Banquet at Tang Dynasty Restaurant (¥180–220/person, includes cultural show)",
          ],
          cost: "¥650–720 (guide + Terracotta + Huaqing + dinner)",
        },
        {
          day: "Day 3",
          title: "City Walls + Shaanxi Museum + Local Neighbourhood",
          items: [
            "Morning: City Wall sunrise cycle — rent a tandem or quality bicycle (¥60/2hrs)",
            "Full 14km circuit with stops at the watchtowers overlooking the city",
            "Shaanxi History Museum — arrive for 9am opening, spend 2–3 hours",
            "Lunch: Yongxingfang food street inside the old city (authentic local stalls, ¥60–80)",
            "Afternoon: explore Shuyuanmen cultural street — calligraphy shops, antique stalls, old bookshops",
            "Evening: rooftop bar near South Gate for city wall views with drinks",
          ],
          cost: "¥450–500 (hotel + activities + food)",
        },
        {
          day: "Day 4",
          title: "Big Wild Goose Pagoda + Tang Paradise + Depart",
          items: [
            "Morning: Big Wild Goose Pagoda complex — full temple grounds, meditation garden (¥50 + ¥30 climb)",
            "Tang Paradise cultural park — water shows, Tang dynasty costumes for photos (¥160)",
            "Afternoon shopping: Muslim Quarter souvenir run — terra cotta replica warriors, silk scarves, local snacks",
            "Transfer to XIY by taxi or Didi (~¥80–120)",
          ],
          cost: "¥500–580 (activities + food + transport)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "¥1,800/day (~$252)",
      days: [
        {
          day: "Day 1",
          title: "Arrival + Private City Introduction",
          items: [
            "Private airport transfer in luxury vehicle (¥300–400)",
            "Check in to 5-star hotel: Sofitel Legends People's Grand Xi'an, Hyatt Regency or Westin (¥800–1,200/night)",
            "Private half-day city orientation with expert historian guide",
            "Visit Great Mosque of Xi'an with exclusive early access (arrange through hotel concierge)",
            "Private Muslim Quarter food tour: curated stalls, rooftop dinner overlooking the Drum Tower (¥400–600/person)",
          ],
          cost: "¥1,600–1,800 (hotel + guide + food + transport)",
        },
        {
          day: "Day 2",
          title: "Exclusive Terracotta Army Experience",
          items: [
            "Private car to Terracotta Army (1hr, ¥300–400 return)",
            "Licensed expert archaeologist guide — maximum 4-person private tour (¥800–1,000)",
            "Extended time in Pit 1 after general crowds thin (arrange hotel concierge for early-access option)",
            "Lunch at Lintong local restaurant with your guide — order local specialties",
            "Afternoon: Huaqing Hot Springs — private pavilion access, Qin dynasty palace ruins",
            "Evening: Tang Dynasty Cultural Show dinner (reserved premium seats, ¥380–480/person)",
          ],
          cost: "¥1,800–2,200 (guide + transport + activities + dinner)",
        },
        {
          day: "Day 3",
          title: "Huashan Sacred Mountain Day Trip",
          items: [
            "Private high-speed train to Huashan (2hrs each way, first class ¥180 round trip)",
            "Or: private car to Huashan (1.5hrs, ¥500–700 return)",
            "Huashan — one of China's 5 sacred Taoist mountains with sheer cliff plank walks",
            "Cable car up (¥140), hike the ridge trails, optional North Peak or South Peak summit",
            "Return to Xi'an by afternoon, spa treatment at hotel (¥400–600)",
            "Dinner: hotel fine-dining — Cantonese or local Shaanxi cuisine tasting menu",
          ],
          cost: "¥1,500–2,000 (Huashan + transport + spa + dinner)",
        },
        {
          day: "Day 4",
          title: "City Walls at Sunrise + Museum + Depart in Style",
          items: [
            "Private City Wall sunrise experience — hotel arranges bicycle and photography guide",
            "Breakfast at Sofitel or hotel rooftop with city views",
            "Private Shaanxi History Museum tour with expert commentary (book through hotel)",
            "Farewell Muslim Quarter lunch — lamb paomo and hand-pulled noodles",
            "Private transfer to XIY airport, business class or first class departure",
          ],
          cost: "¥1,400–1,800 (activities + hotel + transport)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "¥60–80 (hostel dorm)",
      food: "¥60–80 (street food)",
      transport: "¥30–50 (bus/metro)",
      activities: "¥120–150",
      total: "¥270–360/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "¥200–280 (3-star)",
      food: "¥150–200 (restaurants)",
      transport: "¥80–120 (taxi/Didi)",
      activities: "¥200–300",
      total: "¥630–900/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "¥800–1,200 (5-star)",
      food: "¥400–600 (fine dining)",
      transport: "¥300–500 (private car)",
      activities: "¥400–600",
      total: "¥1,900–2,900/day",
    },
  ],

  mistakes: [
    {
      icon: "📱",
      title: "Not Installing a VPN Before Arrival",
      desc: "Google, Gmail, WhatsApp, Instagram and most Western apps are blocked in China. You cannot download VPN apps from within China — install one (ExpressVPN, NordVPN or Astrill) on your phone before you board the plane. This is the single most common oversight for first-timers.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚌",
      title: "Taking a Taxi Instead of Public Bus to Terracotta Army",
      desc: "Unofficial taxi touts outside the station will quote you ¥150–200 for a round trip. The public bus (306 or 914) from East Bus Station costs ¥7 each way and takes the same time. Save the money for a proper audio guide instead.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "📅",
      title: "Going to Terracotta Army Without Booking Ahead on Chinese Holidays",
      desc: "During Golden Week (October 1–7) and Chinese New Year, the Terracotta Army site can hit 65,000 daily visitors — it becomes nearly impossible to see the pits. Time your visit to avoid national holidays, or book timed-entry tickets online weeks in advance.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "💳",
      title: "Assuming You Can Pay by Card Everywhere",
      desc: "Xi'an, like all of China, has largely moved to mobile payments (WeChat Pay and Alipay). Most street vendors and smaller restaurants won't accept foreign credit cards. Set up WeChat Pay or Alipay linked to your foreign Visa/Mastercard before arrival — now possible as of 2023.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🎧",
      title: "Skipping a Guide at Terracotta Army",
      desc: "Without context, Pit 1 looks like a very large room full of identical clay soldiers. A good guide reveals which warriors are generals versus infantrymen (by hairstyle and shoe sole), points out the empty spaces where wooden weapons once stood, and explains why no two faces are alike. Budget at least ¥30 for an audio guide.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "Cycle the City Wall at Sunset, Not Morning",
      desc: "The morning light on Xi'an's city wall is pleasant, but the golden-hour sunset transforms it into something otherworldly — the ancient brick glows warm amber and the modern city lights begin to flicker below. Budget about 2 hours for the full 14km circuit. Rent from the South Gate rental station.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🍜",
      title: "Learn to Order Biang Biang Noodles by Pointing",
      desc: "The character for 'biang' is the most complex in the Chinese writing system — 57 strokes. You cannot type it on a standard keyboard. Just point at the menu or say 'biang biang mian' — you want the wide, hand-pulled, belt-shaped noodles topped with chilli oil, vinegar and garlic. Life-changing at ¥15.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🏛️",
      title: "Book Shaanxi History Museum Tickets Online",
      desc: "The museum is free but tickets must be reserved in advance on the official website (陕西历史博物馆). Without a prior booking, you'll join a standby queue that regularly runs 2–3 hours. Book the day before or even a week in advance to walk straight in.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🚄",
      title: "Day-Trip Huashan by High-Speed Train",
      desc: "Huashan — one of China's five sacred Taoist mountains with terrifyingly narrow cliff plank walks — is only 2 hours from Xi'an on the high-speed train (¥45–90 each way). Leave at 7am, take the cable car up, hike the ridge, and return by evening. It's one of the most dramatic landscapes in all of China and completely overlooked by short-stay visitors.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "How many days do you really need in Xi'an?",
      a: "Four days is ideal for covering the Terracotta Army properly, cycling the city walls, spending time in the Muslim Quarter, and visiting the Shaanxi History Museum. Two days is the absolute minimum and will feel rushed. If you add a Huashan day trip, allow 5 days total.",
    },
    {
      q: "Is Xi'an safe for solo female travellers?",
      a: "Yes — Xi'an is one of China's safest cities for solo travel. The Muslim Quarter is busy and well-lit at night. Standard urban awareness applies (watch your belongings in crowds), but violent crime is extremely rare. Local people are generally helpful even with language barriers.",
    },
    {
      q: "What is the best way to get from Xi'an to Beijing or Shanghai?",
      a: "High-speed train (G-train) is the best option. Xi'an to Beijing takes 4.5–5 hours (¥515 second class). Xi'an to Shanghai takes 5.5–6 hours (¥560 second class). Book on the official 12306.cn app or website, or use Trip.com for English-language booking. Book at least 1–2 weeks ahead for popular routes.",
    },
    {
      q: "Does Xi'an have good vegetarian food options?",
      a: "Yes, more than you'd expect. The Buddhist tradition means there are dedicated vegetarian restaurants near temples (look near Da Ci'en Temple / Big Wild Goose Pagoda). The Muslim Quarter is heavy on meat, but cold noodles (liangpi), steamed rice cakes (zeng gao) and sesame flatbreads can be vegetarian. Ask: 'wǒ chī sù' (我吃素) — I am vegetarian.",
    },
  ],

  combineWith: ["beijing-5-days", "chengdu-4-days", "shanghai-4-days", "guilin-3-days"],
  relatedSlugs: ["guilin-3-days", "hong-kong-4-days", "beijing-5-days", "chengdu-4-days"],

  galleryQuery: "xian china terracotta warriors silk road ancient city walls",
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function XianPage() {
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
