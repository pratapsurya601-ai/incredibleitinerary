import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Shanghai in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Plan the perfect 4-day Shanghai itinerary — The Bund at night, Pudong skyline, French Concession, Yu Garden, Tianzifang, and the world's best xiaolongbao. Budget ¥300/day to luxury ¥2,000/day with visa info for Indian, US, UK, EU & Australian passports.",
  keywords: [
    "Shanghai itinerary",
    "Shanghai 4 days",
    "Shanghai travel guide",
    "The Bund Shanghai",
    "French Concession Shanghai",
    "Yu Garden Shanghai",
    "Pudong skyline",
    "xiaolongbao Din Tai Fung",
    "Shanghai budget travel",
    "China travel 2026",
    "Shanghai visa for Indians",
    "144-hour transit visa China",
    "Tianzifang",
    "M50 Art District",
    "Shanghai Tower",
  ],
  openGraph: {
    title: "Shanghai in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "The Bund blazing at night, art deco streets, soup dumplings that burn your chin — your complete 4-day Shanghai guide for every budget.",
    url: "https://incredibleitinerary.com/blog/shanghai-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?shanghai+bund+skyline+pudong+lujiazui+towers+night+china",
        width: 1200,
        height: 630,
        alt: "Shanghai Bund skyline with Pudong skyscrapers and Oriental Pearl Tower at night",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanghai in 4 Days: The Complete Travel Guide (2026)",
    description:
      "The Bund, French Concession, xiaolongbao, and the world's tallest skyline. Your complete Shanghai guide.",
    images: [
      "https://source.unsplash.com/1200x630/?shanghai+bund+skyline+pudong+lujiazui+towers+night+china",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/shanghai-4-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Shanghai in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Shanghai itinerary covering The Bund, Pudong skyline, French Concession, Yu Garden, Tianzifang, M50 Art District, and the best xiaolongbao in the world.",
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/shanghai-4-days",
      image:
        "https://source.unsplash.com/1200x630/?shanghai+bund+skyline+pudong+lujiazui+towers+night+china",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Shanghai 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/shanghai-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Shanghai",
      description:
        "China's most cosmopolitan city, famous for The Bund's art deco skyline, Pudong's futuristic towers, the French Concession's leafy boulevards, and the world's finest xiaolongbao soup dumplings.",
      url: "https://incredibleitinerary.com/blog/shanghai-4-days",
      touristType: ["Cultural tourist", "Food tourist", "City break", "Architecture tourist"],
      containedInPlace: { "@type": "Country", name: "China" },
    },
  ],
};

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Shanghai",
  country: "China",
  countryFlag: "🇨🇳",
  slug: "shanghai-4-days",
  heroQuery: "shanghai bund skyline pudong lujiazui towers night china",
  heroAlt: "Shanghai Bund skyline with Pudong skyscrapers and Oriental Pearl Tower at night",
  category: "East Asia",
  date: "January 20, 2026",
  readTime: "15 min read",

  intro:
    "Stand on the Bund at 9pm and let the full Pudong skyline — Shanghai Tower, Jin Mao, the Oriental Pearl's glowing orbs — blaze across the Huangpu River in a panorama that no photograph does justice. Wander the French Concession's plane-tree canopy where crumbling art deco villas house coffee shops, boutiques, and the lingering ghost of a cosmopolitan 1930s utopia. Order xiaolongbao at Din Tai Fung and burn your chin because the broth inside is 80°C and no one warned you. Then lose a morning in the Dongtai Road antique market where a vendor sells you what he claims is a Ming dynasty teacup for ¥20 — and maybe it is. Shanghai is the world's most dynamic city, and it moves fast enough to make every other metropolis feel like it's standing still.",

  stats: {
    duration: "4 Days",
    budgetFrom: "¥300 (~$42)",
    bestMonths: "Apr–May or Sep–Nov",
    airport: "PVG (Pudong) or SHA (Hongqiao)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
    { id: "related", emoji: "📖", label: "Related Guides" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "Yes — Chinese Tourist Visa (L Visa) required for Indians"],
        ["Apply via", "Chinese Consulate / COVA (Chinese Online Visa Application)"],
        ["Fee", "¥800 (~$110 USD) — fees may vary by consulate"],
        ["Processing", "4–7 business days standard; expedited (2 days) costs more"],
        ["Documents", "Passport, photos, itinerary, hotel bookings, bank statement, return flights"],
        ["144-hr Transit", "If transiting through Shanghai with onward flight to a 3rd country — free, 144-hour visa-free stay. Check eligibility at your consulate."],
        ["Pro tip", "Book hotels and flights before applying — the visa application requires proof of your complete itinerary"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passport",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "Most Western passports now get 15-day visa-free entry to China (2024–2026 policy)"],
        ["Countries included", "US, UK, EU member states, Australia, Canada — check MOFCOM for full list"],
        ["Stay limit", "15 days visa-free (single entry) — verify current policy before travel as rules update"],
        ["144-hr Transit", "Also available if you have a confirmed onward flight to a 3rd country"],
        ["Longer stays", "L Visa required for stays over 15 days — apply at Chinese embassy in your country"],
        ["Important", "Visa-free policy may change — always verify at your country's Chinese embassy website 2 weeks before travel"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "¥300 (~$42)/day",
      days: [
        {
          day: "Day 1",
          title: "The Bund + Yu Garden + Old City Bazaar",
          items: [
            "Morning: Arrive by Metro Line 2 from Pudong Airport (¥40–50) or Line 10 from Hongqiao — both terminate near People's Square, the city's central hub",
            "Walk east to The Bund — Shanghai's 1.5km promenade of art deco colonial buildings facing the Pudong skyline. Best at night but worth seeing by day for the architecture details",
            "Cross under the river via Renmin Road Tunnel (¥5 pedestrian) or take Metro Line 2 one stop to Lujiazui — view the skyline from the Lujiazui green circle, free",
            "Lunch: Return to Nanshi Old City for xiaolongbao at Nanxiang Mantou Dian on Yu Garden's edge — ¥28 for 12 dumplings, queue outside but moves quickly",
            "Afternoon: Yu Garden (¥40 entry) — a 450-year-old classical Chinese garden with pagodas, koi ponds, and rockeries in the middle of a megacity",
            "Old City Bazaar surrounding the garden — browse handicrafts, silk goods, jade pieces (bargain hard: offer 30% of asking price)",
            "Evening: Return to The Bund after sunset (8–9pm in summer) for the full Pudong light show — completely free, bring a thermos of tea from a convenience store (¥5)",
          ],
          cost: "¥100–140 for entry, meals, and metro",
        },
        {
          day: "Day 2",
          title: "French Concession + Tianzifang + Xintiandi",
          items: [
            "Morning: Metro to Shaanxi South Road (Line 1) — enter the French Concession on foot, one of Asia's most beautiful urban neighborhoods",
            "Walk Wukang Road's tree-canopied boulevard — the Wukang Mansion at the head of the road is Shanghai's most photographed building (free to photograph from outside)",
            "Coffee at a specialty café on Anfu Road or Yongkang Road — third-wave coffee culture here is exceptional, ¥30–45",
            "Browse the boutique shops on Fuxing West Road — vintage clothing, design furniture, local ceramics (window shopping is free)",
            "Lunch: Hole-in-the-wall sheng jian bao (pan-fried pork buns) at Yang's Fry Dumpling on Huanghe Road — ¥10 for 4 buns, crispy bottom, juicy inside, a Shanghai institution",
            "Afternoon: Tianzifang (Metro to Dapuqiao) — a warren of art galleries, craft shops, and cafés in a preserved lilong (lane house) complex, free entry",
            "Evening: Xintiandi nearby — upscale plaza in restored shikumen houses, pricier but atmospheric; have one drink at a rooftop bar overlooking the lanes, ¥35–55/drink",
          ],
          cost: "¥100–160 for food, coffee, and metro",
        },
        {
          day: "Day 3",
          title: "Shanghai Museum + M50 + People's Park",
          items: [
            "Morning: People's Square (Metro Lines 1/2/8) — the plaza is free, the surrounding museums are excellent",
            "Shanghai Museum (free entry, requires advance online booking) — world-class collection of Chinese bronzes, ceramics, calligraphy, and jade spanning 5,000 years",
            "Spend 2–3 hours in the Bronze and Ceramics galleries — the museum's Ming-era blue-and-white porcelain collection alone is worth the visit",
            "Lunch: Food court in the Raffles City mall above People's Square — mixed Chinese dishes, ¥25–40",
            "Afternoon: M50 Creative Park (Metro to Changping Road, walk 10 min) — free art district in a converted textile factory along Suzhou Creek, home to 100+ galleries",
            "Suzhou Creek riverside walk — see the industrial heritage waterfront that's being transformed by creative studios and pop-up art, completely free",
            "Evening: Night cruise on the Huangpu River — budget boat tour from the Bund ferry docks, 50-min cruise ¥60–80, night views of both the Bund and Pudong from the water",
          ],
          cost: "¥100–130 for museum, boat, meals, and metro",
        },
        {
          day: "Day 4",
          title: "Pudong Tower Views + Dongtai Antique Market",
          items: [
            "Morning: Dongtai Road Antique Market (Metro to Laoximen, walk 15 min) — open from 9am, dozens of vendors selling Mao-era memorabilia, jade pieces, propaganda art, ceramics. Budget ¥50–100 for browsing and small purchases",
            "Browse carefully and bargain enthusiastically — prices are negotiable to 40–50% of the asking price on most items",
            "Lunch: Jiaodong Road or Xiaonanmen area has cheap local eateries — hong shao rou (red-braised pork) over rice for ¥15–22",
            "Afternoon: Cross to Pudong by Metro Line 2 — look up at Shanghai Tower (632m, tallest in China), Jin Mao Tower, and the distinctive Oriental Pearl from the Lujiazui riverfront",
            "Shanghai Tower observation deck (¥130) — the views from 546m are staggering, the glass floor section tests nerves",
            "Budget alternative: SWFC Sky Walk at Jin Mao is ¥120, or simply photograph from ground level for free",
            "Final evening: Convenience store dinner (Lawson or Family Mart — excellent ready meals ¥10–15) on The Bund, last look at the skyline",
          ],
          cost: "¥150–200 including observation deck, antique market, and meals",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "¥700 (~$98)/day",
      days: [
        {
          day: "Day 1",
          title: "The Bund + Pudong Sky + Fine River Dining",
          items: [
            "Arrive by Maglev from Pudong Airport — the world's fastest commercial train at 431 km/h covers 30km in 8 minutes (¥55), an unmissable experience in itself",
            "Check into a boutique hotel in the French Concession or a business hotel near People's Square (¥400–600/night)",
            "Morning: The Bund walking tour — hire an audio guide (¥25) or join a small-group walking tour of the colonial-era facades, understanding which country built which building",
            "Cross the river to Pudong — take the scenic Bund Sightseeing Tunnel (¥55, kitsch laser light show), then walk the Lujiazui riverfront",
            "Lunch: Noodle shop in Lujiazui's basement food courts — premium xiao mian (spicy Chongqing noodles) or dan dan noodles ¥35–55",
            "Afternoon: Shanghai Tower Sky Walk (¥130) — the view from 546m reveals Shanghai's full scale",
            "Dinner: M on the Bund or Hakkasan Shanghai — international fine dining with Bund views, ¥200–350 per person for a quality dinner with drinks",
          ],
          cost: "¥500–700 including hotel, Maglev, tower, and dinner",
        },
        {
          day: "Day 2",
          title: "French Concession Immersion + Cooking Class",
          items: [
            "Morning: Guided bicycle tour of the French Concession (¥200–280 with guide, bikes included) — expert commentary on the architecture, history, and the writers/artists who lived here",
            "Stop at the former residences of Lu Xun, Zhou Enlai, and the site where the Chinese Communist Party held its first congress (CCP First Congress site, ¥free)",
            "Mid-morning: Yuyuan Road for the most beautiful tree canopy walk in Shanghai — café au lait at a café where the plane trees press against the windows",
            "Lunch: Din Tai Fung at Xin Tian Di — the Taiwanese xiaolongbao institution, queue 20–45 min or book ahead via their app. 12 dumplings ¥68, signature pork + crab roe ¥138",
            "Afternoon: Xintiandi neighborhood walk, then Tianzifang craft gallery shopping — allow ¥100–200 for art prints, ceramics, and design objects",
            "Evening: Shanghai-style cooking class with a local chef (¥280–400, includes market visit and 4-course dinner) — learn hong shao rou, mapo tofu, scallion oil noodles",
          ],
          cost: "¥600–800 for bike tour, Din Tai Fung, and cooking class",
        },
        {
          day: "Day 3",
          title: "Shanghai Museum + Suzhou Day Trip",
          items: [
            "Morning: High-speed train to Suzhou (25 min, ¥30–50) — the 'Venice of China' with classical gardens is a perfect day trip from Shanghai",
            "Humble Administrator's Garden (¥90) — the finest classical Chinese garden in China, UNESCO Heritage, 52,000 sqm of pavilions, ponds, and rockeries",
            "Pingjiang Road historic street for lunch — canal-side walk, local suzhou mian (noodles in rich pork broth) ¥18–30",
            "Return to Shanghai by 4pm — freshen up in hotel before evening plans",
            "Pre-dinner cocktails: Vue Bar at the Hyatt on the Bund — arguably the best Bund panorama from any bar in Shanghai, cocktails ¥75–120",
            "Dinner: Ultraviolet-style experience or a Shanghainese haipai (sea school) cuisine restaurant in Jing'an — progressive 8-course modern Shanghainese ¥250–400 with wine pairing",
          ],
          cost: "¥500–700 for Suzhou train, gardens, bar, and dinner",
        },
        {
          day: "Day 4",
          title: "Jing'an + West Nanjing Road + Jazz Night",
          items: [
            "Morning: Jing'an Temple (¥50) — ancient Buddhist temple surrounded by luxury skyscrapers, one of Shanghai's most surreal juxtapositions, monks chanting amid Louis Vuitton billboards",
            "West Nanjing Road walk — Shanghai's luxury retail spine, window shop at the Peninsula Arcade, pop into the IAPM mall for design and food",
            "Brunch: Egg Benedict at a French bakery on Changde Road or Cantonese dim sum at a quality tea house — ¥80–120",
            "Afternoon: Shanghai Urban Planning Exhibition Center (¥30) — extraordinary scale model of all of Shanghai in 2020, includes future development plans, great for understanding the city's scale",
            "Pre-dinner art: Power Station of Art (¥free on weekdays) — China's largest contemporary art museum in a converted power plant on the Huangpu riverfront",
            "Final evening: Dinner at a Shanghainese restaurant in the Former French Concession followed by live jazz at the Peace Hotel Jazz Bar (open since the 1920s, ¥80–120 cover) — the perfect Shanghai farewell",
          ],
          cost: "¥400–600 for temple, brunch, art, dinner, and jazz",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "¥2,000 (~$280)/day",
      days: [
        {
          day: "Day 1",
          title: "Peninsula Arrival + Bund Private Experience",
          items: [
            "Arrive by Maglev (¥55) or private airport transfer (¥500–800) — check into The Peninsula Shanghai, Waldorf Astoria on The Bund, or Fairmont Peace Hotel directly facing the river",
            "Waldorf Astoria's Long Bar is the original 1930s Shanghai Club bar — have a champagne welcome while looking out at the Bund's colonial facades",
            "Afternoon: Private guided tour of The Bund's architectural history with a historian-guide (3 hrs, ¥800–1,500) — access to building lobbies and interiors not normally open to visitors",
            "Sundowners at Sir Elly's Terrace (The Peninsula, 13F) — outdoor terrace cocktails with the full Pudong skyline as a backdrop, cocktails ¥100–180",
            "Dinner: Ultraviolet by Paul Pairet — Shanghai's most exclusive dining experience, 10 seats, 20-course meal with full multisensory production. Requires months-in-advance reservation, ¥6,000+ per person",
            "Alternative: Jean-Georges Shanghai at Three on the Bund — ¥800–1,200 per person for a 7-course menu with Bund views and impeccable service",
          ],
          cost: "¥2,500–8,000 depending on dining choice and hotel tier",
        },
        {
          day: "Day 2",
          title: "Private French Concession + Art Collection + Michelin Dinner",
          items: [
            "Morning: Private art collector tour of the French Concession with a gallery director — visit 3–5 private galleries and studios, with acquisition opportunities if desired (¥1,500–3,000 for guide)",
            "Coffee at the Drake Hotel's rooftop terrace — a designers' favorite, panoramic views over the leafy concession rooftops",
            "Lunch: Din Tai Fung VIP room reservation or L'Atelier de Joël Robuchon Shanghai — French-Asian fusion in a stunning space, set lunch ¥400–600 per person",
            "Afternoon: Private shopping stylist experience in the French Concession boutiques — Shang Xia (luxury Chinese design brand), NE·TIGER (haute couture Chinese fashion), and bespoke qipao made in 24 hours (from ¥2,000)",
            "Pre-dinner: Hotel spa treatment — Peninsula's award-winning spa offers traditional Chinese tuina massage, ¥600–1,200",
            "Dinner: Yong Yi Ting at the Mandarin Oriental Pudong — authentic Shanghainese cuisine in an art-filled setting, 10-course tasting menu ¥800–1,200 with Shaoxing wine pairing",
          ],
          cost: "¥3,000–6,000 for private guide, lunch, spa, and dinner",
        },
        {
          day: "Day 3",
          title: "Suzhou Private Day Trip + River Cruise",
          items: [
            "Private high-speed train to Suzhou (¥280 for private compartment or first class) — met at Suzhou station by a private guide and driver",
            "Private entry to Humble Administrator's Garden before public opening (pre-arranged through hotel concierge, ¥500 supplement) — 45 minutes of the UNESCO garden to yourself",
            "Traditional silk weaving workshop visit — watch artisans hand-weave Suzhou silk on ancient looms, commission a custom silk artwork (¥500–5,000)",
            "Lunch: Songhelou Restaurant — Suzhou's most famous historic restaurant (opened 1757), imperial-era recipes, private room with courtyard view, ¥400–600",
            "Return to Shanghai by private car or train — freshen up at hotel before evening",
            "Private sunset cruise on the Huangpu River — chartered yacht for 2–4 people, 2-hour cruise with champagne service, ¥3,000–5,000",
            "Final night dinner: The Chairman (Book the restaurant in Hong Kong, Shanghai branch) or private chef dinner in hotel suite — ¥1,200–2,000+ per person",
          ],
          cost: "¥4,000–8,000 for private day trip, yacht, and dinner",
        },
        {
          day: "Day 4",
          title: "Luxury Shopping + Jade Market + Farewell",
          items: [
            "Morning: Hotel's breakfast Champagne service — in-room or at a private dining table with river views",
            "Jing'an District luxury shopping — Plaza 66 houses Hermes, Chanel, Cartier; HKRI Taikoo Hui has Dior, Prada; the mix of international and premium Chinese brands is extraordinary",
            "Mid-morning: City God Temple Jade Market — even luxury travelers should browse, as exceptional antique jade pieces surface here. Budget ¥2,000–50,000 for serious jade",
            "Lunch: T'ang Court at the Langham Shanghai — Cantonese fine dining, dim sum of extraordinary quality, private dining room available, ¥600–800 per person",
            "Afternoon: Last look at the Pudong skyline from a glass-walled suite or hotel rooftop, afternoon tea service (Peninsula's afternoon tea is legendary, ¥380–480 per person)",
            "Private airport transfer in luxury sedan with luggage valet service — driver meets you in hotel lobby, ¥800–1,200 to Pudong",
            "Airport: Priority check-in, First/Business lounge at PVG — final dumplings at the airport Din Tai Fung (concourse B) before boarding",
          ],
          cost: "¥3,000–6,000 for shopping, jade, meals, and transfer",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "¥100–150 (hostel or capsule hotel)",
      food: "¥60–100 (street food + local restaurants)",
      transport: "¥20–35 (Metro + walking)",
      activities: "¥30–80 (1–2 paid attractions)",
      total: "¥210–365/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "¥350–600 (3-4 star boutique hotel)",
      food: "¥150–250 (quality restaurants + one fine meal)",
      transport: "¥50–100 (Metro + taxi mix)",
      activities: "¥100–200 (towers, day trips, classes)",
      total: "¥650–1,150/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "¥1,200–4,000 (5-star Bund/Concession hotel)",
      food: "¥500–2,000 (Michelin and fine dining)",
      transport: "¥200–800 (private car + Maglev)",
      activities: "¥300–2,000 (private guides, exclusive access)",
      total: "¥2,200–8,800+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "¥60–100 (hostel dorm)",
      food: "¥30–60 (street food, dumplings, markets)",
      transport: "¥15–20 (Metro day pass)",
      activities: "¥0–30 (free museums + parks)",
      total: "¥105–210/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "¥500–800 (family room, central location)",
      food: "¥200–350 (family-friendly restaurants)",
      transport: "¥80–150 (Metro + taxis)",
      activities: "¥150–300 (kid-friendly attractions)",
      total: "¥930–1,600/day",
    },
  ],

  mistakes: [
    {
      icon: "📱",
      title: "Not Installing a VPN Before Arriving in China",
      desc: "Google Maps, Gmail, WhatsApp, Instagram, Facebook, and most Western apps are blocked in China. Download a reliable VPN (ExpressVPN, Astrill, or NordVPN) and test it BEFORE you land — once you're on Chinese networks, you can't access the VPN provider's website to download it. Also install WeChat, Baidu Maps, and Alipay.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "💳",
      title: "Assuming Cash or Foreign Cards Work Everywhere",
      desc: "China has largely gone cashless via WeChat Pay and Alipay. Many street vendors, small restaurants, and even some museums only accept mobile payment. As of 2024, both apps accept foreign Visa/Mastercard cards — link yours before arriving. Also carry ¥300–500 in physical RMB for situations where mobile pay fails.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🌞",
      title: "Visiting The Bund at Noon Instead of Night",
      desc: "The Bund is fine by day for architecture appreciation — but the real magic happens at night when the Pudong towers are fully illuminated and the water shimmers with color. Go between 8pm and 10pm. The pedestrian promenade is busy but walkable, and the views from the north end (near Suzhou Creek) are slightly less crowded.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🗺️",
      title: "Trying to Use Google Maps in Shanghai",
      desc: "Google Maps is blocked AND even if you bypass via VPN, it shows incorrect Chinese street data due to the GCJ-02 coordinate offset system. Use Baidu Maps (Chinese-language but visual) or Apple Maps (surprisingly good in China). For English users, Amap (Gaode) now has an English mode and is what local expats use.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🍜",
      title: "Eating at Tourist-Trap Restaurants Near Yu Garden",
      desc: "The restaurants immediately surrounding Yu Garden are overpriced tourist traps with mediocre food and pushy touts. Walk two blocks in any direction and food quality improves dramatically while prices halve. The best xiaolongbao in the area is at Nanxiang Mantou Dian (the original, not the copycats), with a queue that tells you everything.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🚄",
      title: "Not Taking the Maglev from Pudong Airport",
      desc: "The Maglev magnetic levitation train covers the 30km from Pudong Airport to Longyang Road (Metro connection) in exactly 8 minutes at 431 km/h. It costs ¥55 (¥40 with a same-day boarding pass). This is the world's fastest commercial train and a landmark Shanghai experience — don't take a taxi from PVG and miss it.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  tips: [
    {
      icon: "🥟",
      title: "Eat Xiaolongbao Correctly (Don't Burn Yourself)",
      desc: "The right way: place a dumpling in a spoon, bite a tiny hole at the top, let it cool for 10 seconds, drink the broth first, then dip in ginger-vinegar sauce and eat whole. Biting straight through releases scalding broth at 80°C. Din Tai Fung at Xintiandi is consistent and excellent (¥68/basket); the original Nanxiang at Yu Garden is worth the queue.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🚇",
      title: "Buy a Shanghai Metro Day Pass for Unlimited Travel",
      desc: "A 1-day Metro pass is ¥18, 3-day ¥45 — the Metro covers every major Shanghai attraction and runs until midnight. The alternative (Didi, China's Uber) is cheap too at ¥15–30 for most city rides, and the app accepts foreign credit cards if you set it up before arriving in China.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🎫",
      title: "Book Guided Tours for the French Concession and Bund",
      desc: "The history of Shanghai's foreign concessions — why the British got the north, the French got the south, what happened to the Jewish refugee community in Hongkou — is extraordinary storytelling that you'll miss entirely walking alone. Book at getyourguide.com/s/?q=Shanghai&partner_id=PSZA5UI for excellent small-group and private options.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌆",
      title: "Photograph Pudong from the Bund's North End",
      desc: "The most photographed angle of Pudong (Oriental Pearl + Jin Mao + Shanghai Tower) is from the central Bund promenade — but it's also the most crowded. Walk north to where the Bund meets Suzhou Creek (near the Waibaidu Bridge) and you get the identical skyline view with 80% fewer people and the historic bridge in the foreground.",
      color: "border-indigo-200 bg-indigo-50",
    },
    {
      icon: "🍷",
      title: "Experience Shanghai's Hidden Bar Scene",
      desc: "Shanghai has Asia's most creative cocktail scene — hidden behind fake phone booths, inside refrigerators, through bookcase doors. Speak Low (ranked top 50 world's best bars, enter through a barber shop) and The Cannery in the French Concession are two of Asia's best. Expect to spend ¥75–130 per cocktail but you're paying for craft and atmosphere.",
      color: "border-pink-200 bg-pink-50",
    },
  ],

  faqs: [
    {
      q: "Is Shanghai safe for tourists in 2026?",
      a: "Shanghai is one of Asia's safest cities for tourists. Violent crime against foreigners is extremely rare. The main concerns are petty theft in crowded areas (Nanjing Road, Yu Garden), and the notorious 'tea ceremony scam' where attractive locals invite you for tea and present an enormous bill. Never accept spontaneous invitations to tea from strangers near tourist areas.",
    },
    {
      q: "How many days do I actually need for Shanghai?",
      a: "4 days covers the main highlights well. 3 days is tight but doable if you focus (Bund, French Concession, Yu Garden). 5-6 days lets you add Suzhou or Hangzhou day trips. A week gives you time to explore neighborhoods like Jing'an, Hongkou, and the creative Yangpu district at a leisurely pace.",
    },
    {
      q: "What is the best area to stay in Shanghai?",
      a: "The French Concession is the most atmospheric and popular for boutique hotels — beautiful streets, great restaurant scene. The Bund area puts you by the river with iconic views but is more touristy. Jing'an is central, well-served by Metro, and has excellent food. Avoid Pudong for accommodation unless you want a business hotel — it's soulless for leisure travelers.",
    },
    {
      q: "Do I need to book Shanghai Tower in advance?",
      a: "Yes — book the Shanghai Tower (JING) observation deck online at shanghaitower.com.cn at least 2–3 days in advance, especially for weekends. The ¥130 tickets sell out, particularly on weekends and public holidays. Timed entry slots means you can plan your visit precisely. Arrive 15 minutes early with your booking confirmation.",
    },
    {
      q: "Can I use my foreign phone SIM card in China?",
      a: "International roaming works but is expensive and still subject to the Great Firewall — your VPN works on your home SIM but data charges can be ¥500+/day roaming. Better options: buy a China Unicom tourist SIM at the airport (¥100–150 for 7 days, includes VPN-accessible data in some packages), or a Hong Kong SIM card with China data if transiting through HK. Check with your carrier for current roaming options.",
    },
  ],

  combineWith: [
    "Beijing (flight 2.5 hrs or high-speed train 4.5 hrs)",
    "Suzhou (HSR 25 min)",
    "Hangzhou (HSR 45 min)",
  ],

  relatedSlugs: ["beijing-5-days", "tokyo-5-days", "hong-kong-4-days", "singapore-4-days"],

  galleryQuery: "shanghai bund french concession pudong tower tianzifang",
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function ShanghaiPage() {
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
