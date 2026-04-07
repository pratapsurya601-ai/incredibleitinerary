import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Busan 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Busan trip in 4 days. Plan the perfect 4-day Busan itinerary — Gamcheon Culture Village, Jagalchi Fish Market, Haedong Yonggungsa Temple,.",
  keywords: [
    "Busan itinerary",
    "Busan 4 days",
    "Busan travel guide",
    "Gamcheon Culture Village",
    "Jagalchi Fish Market",
    "Haedong Yonggungsa Temple",
    "Haeundae Beach",
    "Busan budget travel",
    "South Korea travel 2026",
    "Busan visa for Indians",
    "K-ETA",
    "Gwangalli Beach",
    "Busan food guide",
    "BIFF Square",
  ],
  openGraph: {
    title: "Busan 4-Day Itinerary 2026: Trip Planner",
    description:
      "Rainbow terraced villages, cliffside temples, and the world's largest fish market. Your complete 4-day Busan guide with day-by-day itineraries for every budget.",
    url: "https://incredibleitinerary.com/blog/busan-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?busan+south+korea+gamcheon+culture+village+colorful+houses+sea",
        width: 1200,
        height: 630,
        alt: "Busan Gamcheon Culture Village colorful terraced houses overlooking the sea",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Busan 4-Day Itinerary 2026: Trip Planner",
    description:
      "Rainbow villages, cliffside temples, and the best seafood in Korea. Your complete Busan guide.",
    images: [
      "https://source.unsplash.com/1200x630/?busan+south+korea+gamcheon+culture+village+colorful+houses+sea",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/busan-4-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Busan in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Busan itinerary covering Gamcheon Culture Village, Jagalchi Fish Market, Haedong Yonggungsa Temple, Haeundae Beach, and Gwangalli Beach for every budget.",
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/busan-4-days",
      image:
        "https://source.unsplash.com/1200x630/?busan+south+korea+gamcheon+culture+village+colorful+houses+sea",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Busan 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/busan-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Busan",
      description:
        "South Korea's second-largest city, famous for Gamcheon Culture Village, Jagalchi Fish Market, stunning beaches, and the cliffside Haedong Yonggungsa Temple.",
      url: "https://incredibleitinerary.com/blog/busan-4-days",
      touristType: ["Cultural tourist", "Beach tourist", "Food tourist", "City break"],
      containedInPlace: { "@type": "Country", name: "South Korea" },
    },
  ],
};

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Busan",
  country: "South Korea",
  countryFlag: "🇰🇷",
  slug: "busan-4-days",
  heroQuery: "busan south korea gamcheon culture village colorful houses sea",
  heroAlt: "Busan Gamcheon Culture Village colorful terraced houses overlooking the sea",
  category: "East Asia",
  date: "January 15, 2026",
  readTime: "14 min read",

  intro:
    "Watch the sun melt into the East Sea from Haeundae Beach while Busan's glittering skyline frames the moment — Korea's most cinematic city has a way of stopping you mid-step. Climb the rainbow-terraced lanes of Gamcheon Culture Village where every alley bend delivers a mural worth a thousand photos. Arrive at Jagalchi Fish Market before 7am to eat raw sea urchin sashimi so fresh the shell still twitches, surrounded by haenyeo diving women who pulled it from the sea an hour before. Then stand at Haedong Yonggungsa and watch Buddhist monks chant morning prayers on a cliff above crashing waves — a temple founded in 678 AD where the sea is the altar. Busan is Korea's coolest city, and these 4 days will prove it.",

  stats: {
    duration: "4 Days",
    budgetFrom: "₩60,000 (~$45)",
    bestMonths: "Apr–Jun or Sep–Nov",
    airport: "PUS (Gimhae)",
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
        ["Visa required?", "K-ETA or Tourist Visa required"],
        ["K-ETA", "Korea Electronic Travel Authorization — apply at k-eta.go.kr, USD $10, approved in minutes to 72 hrs"],
        ["Tourist Visa", "Apply at Korean consulate, fee ₩40,000 (~$30), takes 3–5 working days"],
        ["Stay limit", "Up to 30 days (tourist visa) or 90 days (K-ETA if approved)"],
        ["Documents", "Confirmed accommodation, return flight, bank statement, travel insurance"],
        ["Pro tip", "K-ETA is easier and faster — apply at least 72 hours before departure"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passport",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "K-ETA required (no traditional visa needed)"],
        ["K-ETA", "Apply online at k-eta.go.kr before travel — USD $10, instant to 72 hrs"],
        ["Stay limit", "Up to 90 days per entry"],
        ["Note", "K-ETA exemptions may apply at some periods — always check MOHFA website before travel"],
        ["Passport validity", "At least 6 months beyond travel dates recommended"],
        ["Entry", "Smooth process — have K-ETA approval number ready on your phone"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "₩60,000 (~$45)/day",
      days: [
        {
          day: "Day 1",
          title: "Gamcheon + Jagalchi + BIFF Square",
          items: [
            "Morning: Take subway Line 1 to Toseong station (₩1,500) and walk 20 min up to Gamcheon Culture Village — free entry, buy the ₩2,000 stamp map at the community center",
            "Spend 2 hours exploring the painted alleyways, finding Lego House, Little Prince figure, and rooftop viewpoints — one of Asia's most photogenic neighborhoods",
            "Descend by local bus (₩1,400) to Jagalchi Fish Market — walk the outdoor stalls watching haenyeo (female divers) unload their catch, buy raw sea urchin from a market vendor for ₩3,000–5,000",
            "Lunch at the 2F indoor market restaurants: grilled mackerel set (godeungeo gui) for ₩8,000 with rice, soup, and kimchi",
            "Walk 10 min to BIFF Square on Nampo-dong — browse the street food stalls, try hotteok (sweet pancake) for ₩1,500 and ssiat hotteok (seed pancake) for ₩2,000",
            "Evening: Nampo-dong shopping streets for cheap K-beauty, return by subway",
          ],
          cost: "₩30,000–40,000 all-in including food and transport",
        },
        {
          day: "Day 2",
          title: "Haedong Yonggungsa + Haeundae Beach",
          items: [
            "Early morning: Bus 181 from Haeundae to Haedong Yonggungsa Temple (₩1,400 each way) — arrive by 8am to beat the crowds and watch monks at morning prayer",
            "Temple was founded 678 AD and clings to seaside cliffs — the main hall with crashing waves behind it is one of Korea's most dramatic views, free entry",
            "Return to Haeundae by bus — Korea's most famous beach stretches 1.5km of white sand backed by a modern city skyline",
            "Lunch: Haeundae Market nearby has a famous dakgalbi (spicy stir-fried chicken) alley, full meal ₩10,000–12,000",
            "Afternoon: Walk the Dongbaekseom Island coastal trail (free, 30 min loop) with views of the APEC Naru House and Diamond Bridge",
            "Evening: Grab a beer from a convenience store (CU/GS25, ₩2,000) and sit on the beach watching the sunset behind the cityscape",
          ],
          cost: "₩25,000–35,000 including transport and meals",
        },
        {
          day: "Day 3",
          title: "Gwangalli Beach + Busan Tower + Seomyeon",
          items: [
            "Morning: Gwangalli Beach (subway to Gwangan station) — less crowded than Haeundae, best view of the Diamond Bridge, free beach access",
            "Snap photos of Gwangandaegyo Bridge from the shore — the bridge looks even better at night when fully lit up",
            "Lunch: Milmyeon (cold wheat noodles) at a local pojangmacha street tent near Gwangan for ₩8,000–10,000",
            "Afternoon: Yongdusan Park by subway — Busan Tower entry ₩12,000, panoramic 360° city views, watch the dragon-headed fountains below",
            "Evening: Seomyeon district by subway for street food, nightlife, and Bupyeong Kkangtong Night Market (opens 7pm, free entry, stalls from ₩2,000)",
            "Try sannakji (live octopus) at a Seomyeon pojangmacha for ₩12,000–15,000 if you're feeling adventurous",
          ],
          cost: "₩35,000–45,000 including tower entry, meals, evening food",
        },
        {
          day: "Day 4",
          title: "Shinsegae Centum City + Spa Land",
          items: [
            "Morning: Centum City subway station — Shinsegae Centum City is the world's largest department store (Guinness certified), worth walking through even if you don't shop",
            "Budget option: Spa Land in the basement of Shinsegae is a Korean jjimjilbang (bathhouse) — ₩16,000 weekday, ₩18,000 weekend, includes all bathing areas and sauna",
            "Spend 3–4 hours soaking in themed bath pools from Roman to Finnish, enjoy the hot rooms — a quintessential Korean experience",
            "Lunch: Food court inside Shinsegae — kimbap + ramen combo ₩8,000–10,000",
            "Afternoon free exploration: UN Memorial Cemetery (free, sobering Korean War memorial) or Busan Museum (free)",
            "Evening: Night bus or subway to Gimhae Airport, or final convenience store ramyeon ritual (₩1,200 cup ramen with hot water at the CU counter)",
          ],
          cost: "₩35,000–45,000 including Spa Land and meals",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₩140,000 (~$105)/day",
      days: [
        {
          day: "Day 1",
          title: "Gamcheon + Jagalchi + Nampo Night Scene",
          items: [
            "Morning: Take a taxi to Gamcheon Culture Village (₩15,000 from city center) — hire a local art guide from the community center for a 1.5hr tour (₩20,000) to understand the history of this wartime refugee village turned art space",
            "Explore the village's galleries, artist studios, and rooftop viewpoints — buy a piece of local art or handmade ceramic as a souvenir (₩15,000–50,000)",
            "Lunch at Gamcheon's Starry Night Café — panoramic sea views over painted rooftops, set menu with yukhoe (Korean beef tartare) ₩18,000",
            "Afternoon: Taxi to Jagalchi — take a cooking class at a nearby culinary studio learning to make haemul pajeon (seafood pancake) and doenjang jjigae (₩60,000)",
            "Evening: Dinner at a proper seafood restaurant in Nampo with a whole crab course — hanjeongsik seafood dinner ₩40,000–60,000 per person",
            "Night stroll along Nampo-dong's lit-up streets, rooftop bar drinks ₩12,000–18,000/cocktail",
          ],
          cost: "₩130,000–160,000 including taxi, class, and dinner",
        },
        {
          day: "Day 2",
          title: "Temple at Dawn + Haeundae Luxury Half-Day",
          items: [
            "Pre-dawn taxi to Haedong Yonggungsa (₩25,000) to arrive before sunrise — watch the sun rise directly over the East Sea from the temple cliffs, monks chanting, incense smoke curling over the waves",
            "Stay for morning prayer ceremony — free entry, small donation ₩1,000–5,000 appreciated",
            "Return by taxi to Haeundae (₩20,000) — check into Haeundae beachfront hotel for a 4-hour spa day use (many 5-star hotels offer day spa access ₩50,000–80,000)",
            "Lunch at La Yeon or Park Hyatt's Haedong restaurant — Korean contemporary fine dining, set lunch ₩45,000–80,000",
            "Afternoon: Private cycling tour along Haeundae's Marine City boardwalk (rental ₩10,000/hr) to Dongbaekseom",
            "Sunset dinner at an elevated seafood restaurant overlooking Diamond Bridge — lobster gratin, grilled jeoneogeo (dried corvina), soju pairing ₩80,000–120,000",
          ],
          cost: "₩140,000–200,000 for taxis, spa, and quality dining",
        },
        {
          day: "Day 3",
          title: "Gwangalli + City Culture + Seomyeon Food Crawl",
          items: [
            "Morning: Coffee and pastry at a specialty café in the Gwangalli beachfront strip — third-wave Korean coffee culture at its best, ₩8,000–12,000",
            "Walk or hire a guided walking tour of Gwangalli waterfront and residential back-streets where local fishermen still repair nets (₩30,000)",
            "Lunch: Upscale milmyeon (cold noodles) at a famous restaurant in the Millak Raw Fish Town area — sharing seafood platter + noodles ₩35,000",
            "Afternoon: Busan Museum of Art (₩1,000) in the Centum City cultural district — excellent contemporary Korean art, visiting international exhibitions",
            "Pre-dinner: Busan Tower at golden hour, sunset views over the harbor — ₩12,000 entry",
            "Evening: Seomyeon izakaya-style Korean dining — Korean BBQ (samgyeopsal/galbi) at a proper charcoal grill restaurant, ₩25,000–35,000 per person + makgeolli pairing",
          ],
          cost: "₩100,000–140,000 for tours, dining, and entertainment",
        },
        {
          day: "Day 4",
          title: "Spa Land + Shinsegae + Farewell Seafood",
          items: [
            "Morning: Spa Land at Shinsegae Centum City — weekday ₩16,000 entry, 3 hours in themed thermal pools, outdoor sky baths, and sauna rooms",
            "Post-spa brunch at Shinsegae's gourmet food hall — try a premium dosirak (bento box) with Korean side dishes, ₩20,000",
            "Light shopping: K-beauty at Aritaum/Innisfree, Korean snacks and cosmetics to bring home",
            "Afternoon: Visit the UN Memorial Cemetery (free) — the world's only UN-designated cemetery, incredibly moving and rarely crowded",
            "Final seafood farewell lunch: Busan's famous ganjang gejang (soy-marinated raw crab) at a specialty restaurant — considered Korea's 'rice thief' because the sauce is so good you keep eating, ₩35,000–50,000",
            "Airport taxi (₩25,000) or Gimhae Airport Express bus (₩3,000)",
          ],
          cost: "₩100,000–140,000 for spa, shopping, and meals",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₩350,000 (~$260)/day",
      days: [
        {
          day: "Day 1",
          title: "Private Gamcheon + Premium Seafood Arrival",
          items: [
            "Arrive at Gimhae Airport — private transfer to 5-star hotel (Park Hyatt Busan, Westin Chosun, or Signiel Busan), ₩80,000–120,000 for premium sedan",
            "Check in and freshen up — Signiel Busan in Haeundae offers floor-to-ceiling ocean views from upper floors",
            "Afternoon: Private guided tour of Gamcheon Culture Village with an art historian (3 hrs, ₩120,000) — access to artist studios not open to public, private makgeolli tasting with local artists",
            "Sunset cocktails at a rooftop bar overlooking the harbor — craft cocktails ₩20,000–30,000 each",
            "Dinner: Busan's finest raw fish experience at Millak Raw Fish Town — premium course meal with king crab, sea urchin, sashimi, and grilled shellfish ₩150,000–200,000 per person, private room available",
            "Nightcap at hotel bar with sea view — premium Korean whisky or craft soju selection",
          ],
          cost: "₩400,000–500,000 for transfer, guide, and premium dining",
        },
        {
          day: "Day 2",
          title: "Private Temple Tour + Spa + Fine Dining",
          items: [
            "Pre-dawn private car to Haedong Yonggungsa — arrive before gates open with pre-arranged temple access (₩50,000 donation suggested to temple), watch sunrise from the main hall with private guide explaining the temple's 1,400-year history",
            "Return to hotel for a Korean traditional breakfast — doenjang jjigae, grilled mackerel, 12 side dishes, freshly steamed rice",
            "Mid-morning: Full-day spa package at hotel — Park Hyatt or Westin Chosun full-body scrub, Korean jjimjilbang ritual, hot stone massage, ₩200,000–350,000",
            "Afternoon at leisure — private beach cabana rental at Haeundae (₩100,000/half-day at luxury hotels) with champagne service",
            "Dinner: La Yeon (Westin Chosun Busan) — Michelin-starred Korean contemporary cuisine, 8-course tasting menu ₩200,000–280,000 per person with wine pairing",
            "Late evening: Private Diamond Bridge night view cruise, champagne on board, 90 min ₩180,000 per couple",
          ],
          cost: "₩500,000–700,000 for spa, beach cabana, and fine dining",
        },
        {
          day: "Day 3",
          title: "Gwangalli + Private Cooking Class + Night Scene",
          items: [
            "Morning: Private chef-led market tour of Jagalchi Fish Market starting at 6:30am — learn to select the freshest fish, understand haenyeo diving culture (₩150,000 for 2-person tour)",
            "Return to private kitchen for a hands-on Korean cooking masterclass — make miyeokguk, haemul pajeon, ganjang gejang, and homemade doenjang (₩200,000 per person)",
            "Lunch: Your own creations from the cooking class, eaten in the class studio or taken as a gourmet picnic to Gwangalli Beach",
            "Afternoon: Private yacht charter along the Busan coastline — 3-hour cruise past Diamond Bridge, Oryukdo Islets, and the harbor mouth (₩400,000–600,000 for small group)",
            "Sunset photography on the yacht as the Diamond Bridge lights up — professional photographer can be arranged (₩150,000)",
            "Evening: Omakase-style modern Korean restaurant in Haeundae with natural wine pairing — progressive course menu ₩200,000–350,000 per person",
          ],
          cost: "₩600,000–900,000 for market tour, yacht, and omakase",
        },
        {
          day: "Day 4",
          title: "Spa Land VIP + Gourmet Farewell",
          items: [
            "Morning: Spa Land VIP lounge access (₩30,000 upgrade) — exclusive thermal areas, premium skincare treatments, private relaxation rooms",
            "Busan's best brunch: Hotel rooftop restaurant with panoramic harbor views — eggs benedict with smoked salmon, Korean small plates, premium tea ceremony ₩60,000–80,000",
            "Late morning: Shopping for premium Korean goods — premium ginseng at KT&G Sangsang Madang, high-end Korean ceramics, designer K-beauty brands",
            "Final Busan lunch: Private room at a top-tier hanjeongsik (Korean full-course) restaurant — 15-course royal court cuisine with seasonal ingredients, ₩150,000–200,000",
            "Relaxed checkout and private airport transfer in luxury sedan, ₩80,000–120,000",
            "Airport lounge access — KAL or Asiana lounge at PUS for final Korean moments before boarding",
          ],
          cost: "₩400,000–600,000 for spa VIP, shopping, fine dining, and transfer",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "₩25,000–35,000 (hostel dorm or goshiwon)",
      food: "₩15,000–20,000",
      transport: "₩5,000–8,000 (subway/bus)",
      activities: "₩5,000–12,000",
      total: "₩60,000–75,000/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "₩70,000–110,000 (3-star hotel)",
      food: "₩35,000–55,000",
      transport: "₩15,000–25,000 (taxi mix)",
      activities: "₩20,000–40,000",
      total: "₩140,000–230,000/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "₩200,000–500,000 (5-star)",
      food: "₩80,000–200,000",
      transport: "₩50,000–120,000 (private car)",
      activities: "₩100,000–300,000",
      total: "₩350,000–1,000,000+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "₩15,000–20,000 (hostel dorm)",
      food: "₩8,000–12,000 (kimbap, ramen, markets)",
      transport: "₩3,000–5,000 (T-Money card)",
      activities: "₩0–5,000 (mostly free sights)",
      total: "₩30,000–42,000/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "₩100,000–150,000 (family room)",
      food: "₩50,000–80,000",
      transport: "₩20,000–35,000",
      activities: "₩30,000–60,000",
      total: "₩200,000–325,000/day",
    },
  ],

  mistakes: [
    {
      icon: "🚇",
      title: "Not Getting a T-Money Card at the Airport",
      desc: "The T-Money transit card (available at every convenience store and GS25 for ₩2,500) saves you ₩100 per subway ride and works on all buses. Without it, you'll fumble with exact change and slow down boarding. Load it up immediately on arrival.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🌊",
      title: "Only Visiting Haeundae Beach",
      desc: "Every tourist goes to Haeundae — and it gets genuinely overcrowded in summer. Gwangalli Beach is 20 minutes away by subway, less crowded, has better views of the Diamond Bridge, and a better café scene along the waterfront. Make sure you visit both.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🕐",
      title: "Arriving at Jagalchi Market Too Late",
      desc: "The magic of Jagalchi is in the morning when haenyeo are unloading fresh catches and the outdoor market is in full swing. Arrive after 10am and you'll find a largely tourist-oriented experience. Get there by 8am for the real thing.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🗓️",
      title: "Skipping Busan During Busan Film Festival (BIFF) Season",
      desc: "Or worse, not booking accommodation months in advance if you DO visit during October's BIFF. The Busan International Film Festival turns the city into a global cinema celebration — hotels book out completely, prices triple. Check dates and plan accordingly.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "📱",
      title: "Not Installing KakaoMap / Naver Map Before Arrival",
      desc: "Google Maps works poorly in South Korea — Korean law restricts Google from using detailed map data. KakaoMap and Naver Map are what locals use. Download both before you leave home and they'll show you real-time subway times, bus routes, and walking directions.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🏖️",
      title: "Visiting Haedong Yonggungsa on a Weekend",
      desc: "This cliffside temple is one of Korea's most photographed spots and weekends turn it into a tourist traffic jam. Go on a Tuesday or Wednesday morning, arrive before 8:30am, and you'll have the dramatic coastal views almost to yourself.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  tips: [
    {
      icon: "🍜",
      title: "Eat Dwaeji Gukbap for Breakfast Like a Local",
      desc: "Busan's signature dish is dwaeji gukbap — pork and rice soup served in a rich milky broth 24 hours a day. Head to the Seomyeon restaurant strip at 8am for a ₩8,000 bowl that's been fueling Busan dockworkers since the Korean War. It's the city's soul in a bowl.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🌙",
      title: "See Gwangalli Beach at Night, Not Day",
      desc: "Gwangalli's Diamond Bridge lights up at dusk in a choreographed LED display. The beach transforms — couples line the shore, pojangmacha tents glow, and the bridge's reflection shimmers across the water. Come for sunset (around 7pm in summer) and stay for the full show.",
      color: "border-indigo-200 bg-indigo-50",
    },
    {
      icon: "🎫",
      title: "Book GetYourGuide Tours for Gamcheon and Haedong",
      desc: "Guided tours with local experts transform both Gamcheon and Haedong Yonggungsa from sightseeing to storytelling. Local guides share the wartime refugee history of Gamcheon and the temple's founding legends that no signage explains. Book at getyourguide.com/s/?q=Busan&partner_id=PSZA5UI",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "💳",
      title: "Carry Some Cash for Markets and Pojangmacha",
      desc: "Busan's street tents (pojangmacha), the Jagalchi outdoor market stalls, and small temple souvenir vendors are cash-only. Convenience stores and 7-Elevens have ATMs that accept foreign cards — withdraw ₩100,000–200,000 as walking-around money for markets and street food.",
      color: "border-pink-200 bg-pink-50",
    },
    {
      icon: "🌸",
      title: "Visit in Late April for Cherry Blossom Season",
      desc: "Busan's cherry blossom season (late March–mid April) is spectacular — Gyeongju nearby is world-famous for it, but Busan's Oncheonjang Park and the walk from Busan Station to Choryang also burst into pink. Time it right and every photo has a dreamy natural backdrop.",
      color: "border-pink-200 bg-pink-50",
    },
  ],

  faqs: [
    {
      q: "How do I get from Busan Gimhae Airport to the city center?",
      a: "The Gimhae Airport Light Rail (AREX) connects the airport to Sasang Station, where you transfer to Busan Metro Line 2 — total journey to Seomyeon or Haeundae takes about 45–60 minutes, costs ₩3,000–4,000. Taxis cost ₩15,000–30,000 depending on destination and take 20–40 minutes. Both are reliable.",
    },
    {
      q: "Is Busan expensive compared to Seoul?",
      a: "Busan is generally 10–20% cheaper than Seoul for accommodation and slightly cheaper for food. Budget travelers can live comfortably for ₩50,000–60,000/day in Busan. The notable exception is during the Busan International Film Festival (October) when hotel prices spike dramatically.",
    },
    {
      q: "What is the best neighborhood to stay in Busan?",
      a: "Haeundae is best for beach access, nightlife, and the best hotels. Seomyeon is the best for central location, nightlife, and budget accommodation. Nampo/Jung-gu puts you closest to Jagalchi Fish Market and Gamcheon Culture Village. First-timers should choose Seomyeon or Haeundae.",
    },
    {
      q: "Can I do a day trip from Busan to Gyeongju?",
      a: "Absolutely — Gyeongju (the ancient Silla Kingdom capital) is only 50–60 minutes from Busan by KTX bullet train or 1 hour 15 minutes by intercity bus. It's a perfect day trip pairing to see Buddhist temples, ancient tombs, and traditional Korean culture just outside Busan.",
    },
    {
      q: "Is Busan safe for solo female travelers?",
      a: "Busan is extremely safe for solo female travelers — South Korea consistently ranks as one of the world's safest countries. The subway runs until midnight, streets are well-lit, and convenience stores (open 24/7) serve as community anchors. The main thing to watch: subway handbag theft is rare but keep bags in front in crowded trains.",
    },
  ],

  combineWith: ["Seoul (KTX 2.5 hrs)", "Gyeongju (KTX 50 min)", "Jeju Island (flight 55 min)"],

  relatedSlugs: ["seoul-5-days", "tokyo-5-days", "bangkok-4-days", "taipei-4-days"],

  galleryQuery: "busan south korea haeundae beach gwangalli temple haedong",
};

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function BusanPage() {
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
