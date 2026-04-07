import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Yokohama",
  country: "Japan",
  countryFlag: "🇯🇵",
  slug: "yokohama-2-days",
  heroQuery: "yokohama minato mirai waterfront japan skyline harbour",
  heroAlt: "Yokohama Minato Mirai waterfront skyline with Landmark Tower and harbour at dusk",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "10 min read",
  intro:
    "Yokohama is Tokyo's cooler, more relaxed neighbour — Japan's second-largest city and its most international port, sitting just 30 minutes from Shinjuku by express train. The Minato Mirai waterfront rivals any harbour in Asia, Japan's largest Chinatown fills six blocks with 600 restaurants and red-lantern-draped alleys, and the Cup Noodles Museum lets you invent your own instant ramen in the building where Momofuku Ando changed the world. Two well-planned days cover every highlight: Sankeien Garden's pagodas, the Red Brick Warehouse cocktail bars, beef shabu-shabu in Kannai, and the best harbour views in Japan from atop the Landmark Tower observation deck.",
  stats: {
    duration: "2 Days",
    budgetFrom: "JPY 5,000",
    bestMonths: "Mar–May or Oct–Nov",
    airport: "HND or NRT",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Chinatown & Minato Mirai" },
    { id: "day2", emoji: "📅", label: "Day 2 — Sankeien & Red Brick Warehouse" },
    { id: "combines", emoji: "🗺️", label: "Combine with Tokyo" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Tourist Visa (Single or Multiple Entry)"],
        ["Processing", "5–10 business days at Japanese Embassy/Consulate"],
        ["Fee", "JPY 3,000 (single entry) / JPY 6,000 (multiple entry)"],
        ["Validity", "90 days stay within validity period"],
        ["Apply at", "Embassy of Japan or VFS Global in India"],
        ["Documents", "Itinerary, hotel bookings, bank statements, employment proof"],
        ["Notes", "Japan has tightened visa processing since 2023. Apply 3–4 weeks ahead. Tourist e-visa now available from select Indian cities."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa Exemption (up to 90 days)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days per visit"],
        ["Visit Japan Web", "Register before arrival for faster immigration clearance"],
        ["Passport", "Must be valid throughout the stay"],
        ["Notes", "The Visit Japan Web app pre-registers customs and immigration — saves 30–60 minutes at the airport."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "JPY 5,000–7,500/day",
      days: [
        {
          day: "Day 1",
          title: "Chinatown, Minato Mirai & Harbour Walk",
          items: [
            "09:00 — Take the Tokyu Toyoko Line from Shibuya to Motomachi-Chukagai Station (JPY 280, 35 minutes) — this is the cheapest and most direct route from central Tokyo to Yokohama's best sights",
            "09:30 — Yokohama Chinatown: walk the main Chukagai-dori street lined with 600 restaurants and Chinese medicine shops; buy a nikuman steamed pork bun from a street stall (JPY 300) for breakfast",
            "11:00 — Yamashita Park (free): a long waterfront promenade along the harbour with views of the Hikawa Maru historic ocean liner (exterior free to view); perfect spot for coffee from a nearby convenience store and harbour watching",
            "12:30 — Lunch in Chinatown: set lunch menus at many restaurants run JPY 800–1,200 including soup, main, and rice; look for the set-lunch (teishoku) signs in windows",
            "14:30 — Walk or take the Sea Bass ferry (JPY 750 one-way) along the waterfront to Minato Mirai district; the 20-minute ferry gives the best view of the full Yokohama skyline",
            "15:00 — Cup Noodles Museum (JPY 500 entry): explore the history of instant ramen and design your own cup noodle at the My Cup Noodles Factory (JPY 300 extra) — the most entertaining museum in Yokohama",
            "17:30 — Minato Mirai harbour walk at golden hour: the area around Kishamichi Promenade and Queen's Square is completely free to explore; buy a beer from a convenience store and watch the city light up from the waterfront",
            "19:30 — Dinner: ramen from a Kannai district ramen shop (JPY 800–1,000) or buy prepared food from an Ito-Yokado supermarket for JPY 500",
          ],
          cost: "JPY 4,500–6,000 (transport, museum, meals)",
        },
        {
          day: "Day 2",
          title: "Sankeien Garden, Red Brick Warehouse & Harbour Views",
          items: [
            "09:00 — Bus or taxi to Sankeien Garden (JPY 700 entry) — a Meiji-era landscape garden with three historic pagodas and 17 traditional structures relocated from Kyoto and Kamakura; arrive early for the still-water reflections",
            "11:30 — Return to Kannai area; walk through Isezakicho shopping street (free) — a 500m covered arcade with independent shops, used bookstores, and cheap lunch spots; karaage chicken lunch set JPY 700",
            "14:00 — Yokohama Red Brick Warehouse (Aka Renga Soko): two converted 1911 warehouses turned into shops and event spaces, free to enter; browse artisan crafts and pick up Yokohama-branded goods",
            "15:30 — Cosmo World amusement park (free entry, pay per ride) — the iconic Cosmo Clock 21 ferris wheel ride is JPY 900 and gives a 360-degree harbour view from the top",
            "18:00 — Yokohama Landmark Tower Sky Garden (JPY 1,000) — Japan's highest observation deck outside of Tokyo Skytree; the view at dusk over Tokyo Bay and Mount Fuji on clear days is extraordinary",
            "20:00 — Final dinner: gyoza and beer at a Kannai izakaya (JPY 1,500–2,000) before catching the train back to Tokyo",
          ],
          cost: "JPY 5,000–7,000 (garden, rides, observation deck, dinner)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "JPY 15,000–25,000/day",
      days: [
        {
          day: "Day 1",
          title: "Chinatown Banquet, Cup Noodles & Waterfront",
          items: [
            "09:00 — Stay overnight in Yokohama at a mid-range hotel in Minato Mirai (JPY 8,000–15,000/night) — Yokohama Royal Park Hotel and Yokohama Bay Hotel Tokyu are both well-positioned for walking to all sights",
            "10:00 — Guided Chinatown food tour with a local guide (JPY 4,000–6,000, 2 hours) — try dim sum, Cantonese BBQ, Chinese sweets, and boba tea at spots tourists never find; book through Airbnb Experiences or Viator",
            "13:00 — Lunch at a proper Chinatown restaurant with a full dim sum spread (JPY 2,000–3,000/pp) — Heichinrou and Manchinro Honten are the two most respected restaurants with 100-year histories",
            "15:30 — Cup Noodles Museum premium visit: My Cup Noodles Factory (JPY 300) plus Chicken Ramen Factory where you hand-make ramen noodles from scratch (JPY 500, reservation required); allow 2.5 hours",
            "19:00 — Sunset cocktails at a Minato Mirai bar with harbour views: Yokohama Sky Bar on the 14th floor of Intercontinental (JPY 1,500–2,000 per cocktail) — the Grand Canal skyline view is worth every yen",
            "20:30 — Dinner: beef shabu-shabu at a Kannai restaurant (JPY 3,000–5,000/pp) — Yokohama is famous for beef from Kanto cattle farms; the broth is richer and sweeter than Tokyo versions",
          ],
          cost: "JPY 18,000–25,000 (hotel, food tour, dinner, cocktails)",
        },
        {
          day: "Day 2",
          title: "Sankeien Morning, Landmark Tower & Yokohama Cuisine",
          items: [
            "08:30 — Sankeien Garden before tour groups arrive (JPY 700); hire a Japanese garden guide at the entrance (JPY 2,000 for 1 hour) who explains the provenance of each relocated building and the symbolic planting",
            "11:00 — Yokohama Museum of Art (JPY 500) adjacent to Minato Mirai — a fine collection of 20th-century Japanese and Western art in a striking Tange Kenzo building; less crowded than Tokyo's major museums",
            "13:00 — Lunch at Motomachi Shopping Street: this upscale promenade near Chinatown has bakeries and delis with Yokohama-style Western-influenced dishes (yoshoku) — hayashi rice or cream croquette at a retro yoshoku diner (JPY 1,500)",
            "15:00 — Yokohama Landmark Tower Sky Garden (JPY 1,000) followed by afternoon tea at the Landmark Tower Yokohama Royal Park Hotel Sky Lounge (JPY 3,500–5,000) — the highest afternoon tea in the city",
            "19:30 — Dinner at Yokohama Red Brick Warehouse restaurant block: craft beer and Yokohama-style pasta or brick-oven pizza (JPY 2,000–3,000/pp)",
          ],
          cost: "JPY 15,000–22,000 (hotel, garden guide, museum, afternoon tea, dinner)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "JPY 50,000–100,000/day",
      days: [
        {
          day: "Day 1",
          title: "Harbour Suite, Private Chinatown & Tasting Menu",
          items: [
            "Check in at Yokohama Royal Park Hotel harbour suite on the 52nd floor of Landmark Tower (JPY 40,000–80,000/night) — the floor-to-ceiling windows frame the entire Yokohama harbour, Tokyo Bay, and Mount Fuji at sunrise",
            "11:00 — Private Chinatown culinary tour with a Cantonese chef guide (JPY 15,000 for 2 people, 3 hours) — visits wholesaler kitchens, a traditional bakery making mooncakes, and ends with a private dim sum lunch prepared by the guide",
            "16:00 — Yokohama Landmark Tower Sky Garden private visit followed by the Sky Lounge (JPY 1,000 entry + JPY 5,000 champagne service)",
            "20:00 — Dinner at Yokohama Royal Park Hotel Sky Restaurant on the 70th floor: kaiseki tasting menu (JPY 20,000–30,000/pp) — the seafood course featuring fresh Sagami Bay fish is exceptional; book 2–3 weeks in advance",
          ],
          cost: "JPY 80,000–120,000 (suite, private tour, kaiseki dinner)",
        },
        {
          day: "Day 2",
          title: "Private Sankeien, Harbour Cruise & Sake Tasting",
          items: [
            "08:00 — Private early-opening session at Sankeien Garden (JPY 20,000 arranged through hotel concierge) — the garden before public entry opens at 9am is completely silent; a garden curator explains the layout and history exclusively",
            "11:00 — Private harbour cruise on a chartered yacht from Minato Mirai pier (JPY 30,000–50,000 for 2 hours) — circumnavigate the Yokohama Bay Bridge, pass the container port, and see the city skyline from the water",
            "14:00 — Private sake tasting at Yoshida Sake Brewery (one of the few remaining breweries in Yokohama) with a master brewer (JPY 8,000 per person, 90 minutes) — four premium junmai daiginjo tastings with food pairings",
            "20:00 — Beef shabu-shabu omakase dinner at a private room in Kannai (JPY 15,000–25,000/pp) — the finest Kanto black wagyu cooked tableside in a kombu dashi broth; sesame ponzu and vegetables from the Kanagawa countryside",
          ],
          cost: "JPY 80,000–130,000 (private garden, yacht, sake tasting, wagyu dinner)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "JPY 2,500–4,500 (capsule hotel or budget business hotel)",
      food: "JPY 1,500–2,500 (convenience stores + ramen + izakaya)",
      transport: "JPY 500–800 (trains + bus)",
      activities: "JPY 1,500–2,500 (Cup Noodles, Cosmo Clock, Landmark)",
      total: "JPY 6,000–10,300/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "JPY 8,000–15,000 (mid-range hotel in Minato Mirai)",
      food: "JPY 4,000–8,000 (dim sum + shabu-shabu + cocktail bars)",
      transport: "JPY 1,000–2,000 (trains + Sea Bass ferry + taxi)",
      activities: "JPY 3,000–6,000 (guided tours + sky lounge + museums)",
      total: "JPY 16,000–31,000/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "JPY 40,000–80,000 (harbour suite at Royal Park Hotel)",
      food: "JPY 20,000–30,000 (kaiseki + wagyu shabu-shabu)",
      transport: "JPY 5,000–10,000 (private taxi + chartered ferry)",
      activities: "JPY 15,000–50,000 (private tours + yacht + sake tasting)",
      total: "JPY 80,000–170,000/day",
    },
  ],
  mistakes: [
    {
      icon: "🚆",
      title: "Not getting an IC card (Suica or Pasmo) before arriving",
      desc: "Yokohama's trains, buses, and the Sea Bass ferry all accept Suica or Pasmo IC cards. Buying individual tickets wastes 5–10 minutes at every station. Reload an IC card at any station convenience store machine. From 2024 the digital Suica on iPhone works in Japan.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍜",
      title: "Eating in the tourist restaurants at Yamashita Park",
      desc: "The restaurants immediately facing Yamashita Park charge 40% more than equivalent restaurants 100m away in Chinatown's side alleys. Walk two blocks off the main Chukagai-dori street and the same noodle dish is JPY 800 instead of JPY 1,400.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌦️",
      title: "Visiting on a cloudy day and missing Mount Fuji",
      desc: "The Landmark Tower observation deck and Sky Lounge offer views of Mount Fuji on clear days, which accounts for roughly 100 days per year. Check the weather and Fuji visibility forecast on the day before booking. Early mornings in winter (December to February) have the highest Fuji visibility rate.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "⏰",
      title: "Not reserving the Cup Noodles Chicken Ramen Factory",
      desc: "The Chicken Ramen Factory experience (hand-making noodles from scratch) sells out days in advance, especially on weekends. Book online at the Cup Noodles Museum website before arriving. The My Cup Noodles Factory (designing a cup) is walk-in only and worth 30 minutes of your time even without the factory booking.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Treating Yokohama as just a Tokyo day trip",
      desc: "Most Tokyo tourists spend 3 hours in Yokohama and miss 80% of it. Staying one night changes everything: you get Chinatown at dinner when the lanterns are lit, Minato Mirai at dusk when the skyscrapers reflect on the harbour, and Sankeien Garden in the morning mist before tour buses arrive.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🚢",
      title: "Take the Sea Bass ferry between Chinatown and Minato Mirai",
      desc: "The Sea Bass waterbus (JPY 750 one-way) connects Yamashita Park, Red Brick Warehouse, Minato Mirai, and Yokohama Station pier. It is slower than the train but gives you the full harbour skyline view that most visitors never see. Schedule one Sea Bass leg on each day of your visit. Book tours in advance at https://www.getyourguide.com/s/?q=Yokohama&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏮",
      title: "Visit Chinatown after dark for the best atmosphere",
      desc: "Yokohama Chinatown at night — with red and gold lanterns lit, steam rising from dumpling stalls, and the Kanteibyo temple gates glowing — is one of the most atmospheric scenes in Japan. Dinner in Chinatown beats lunch both for ambience and value (evening set menus are more elaborate).",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🥩",
      title: "Order beef shabu-shabu in Kannai, not near the tourist waterfront",
      desc: "Yokohama's Kannai district has excellent traditional shabu-shabu restaurants where locals eat. The thin-sliced beef is cooked in a kombu broth at your table and dipped in ponzu or sesame sauce. Expect to pay JPY 2,500–4,000 for a full set in Kannai versus JPY 5,000+ at Minato Mirai hotel restaurants for equivalent quality.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌸",
      title: "Visit Sankeien Garden on a weekday morning",
      desc: "Sankeien receives tour buses from 10am on weekends. A Tuesday or Wednesday arrival at 9am opening gives you an hour in an extraordinary Japanese garden with no crowds. The inner garden with the 3-story pagoda and iris pond is the highlight — allow 2 hours total to visit all sections properly.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How far is Yokohama from Tokyo and how do I get there?",
      a: "Yokohama is 28km south of central Tokyo. The Tokyu Toyoko Line from Shibuya to Motomachi-Chukagai takes 35 minutes (JPY 280) and is the most convenient route for Chinatown and the waterfront. The JR Shonan-Shinjuku Line from Shinjuku to Yokohama Station takes 32 minutes (JPY 570). From Tokyo Station, the JR Yokosuka Line takes 28 minutes (JPY 570). Yokohama is covered by the JR Pass.",
    },
    {
      q: "Is 2 days enough for Yokohama?",
      a: "Two full days covers all the major highlights comfortably: Chinatown, Yamashita Park, Cup Noodles Museum, Minato Mirai, Sankeien Garden, Red Brick Warehouse, and Landmark Tower. If you are combining with Tokyo (30 minutes away), some travellers do Yokohama as a day trip but staying one night dramatically improves the experience — Chinatown at night and the harbour at dawn are exceptional.",
    },
    {
      q: "What is Yokohama famous for food-wise?",
      a: "Yokohama is Japan's most internationally-influenced food city. It claims to have introduced beef shabu-shabu, ice cream, and beer to Japan through its 19th-century port. Today it is best known for its massive Chinatown (the largest in Japan), Yokohama-style ramen (a soy and seafood broth distinct from Tokyo ramen), and siu mai (steamed shrimp dumplings) which locals eat as street food from bamboo steamers.",
    },
    {
      q: "Can I see Mount Fuji from Yokohama?",
      a: "Yes, on clear days Mount Fuji is visible from Yokohama Landmark Tower Sky Garden (69th floor), the Minato Mirai waterfront, and Sankeien Garden. The best visibility is December to February when cold, dry air clears the atmosphere. Early morning (before 10am) and after rain are the most reliable times. Check the official Yokohama Fuji visibility forecast or the Windy app the night before.",
    },
  ],
  combineWith: ["tokyo-5-days", "kyoto-4-days", "hakone-2-days"],
  relatedSlugs: ["tokyo-5-days", "kyoto-4-days", "osaka-3-days", "hakone-2-days"],
  galleryQuery: "yokohama chinatown minato mirai harbour japan",
};

export const metadata: Metadata = {
  title: "Yokohama in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 2-day Yokohama itinerary — Chinatown, Minato Mirai, Cup Noodles Museum, Sankeien Garden, Red Brick Warehouse, and harbour views. Budget JPY 5,000/day to luxury harbour suites. All visa info included.",
  keywords: [
    "Yokohama itinerary",
    "Yokohama 2 days",
    "Yokohama travel guide 2026",
    "Yokohama Chinatown",
    "Minato Mirai",
    "Cup Noodles Museum",
    "Yokohama budget travel",
    "Yokohama visa Indian passport",
  ],
  openGraph: {
    title: "Yokohama in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Chinatown, Minato Mirai, Cup Noodles Museum, Sankeien Garden and beef shabu-shabu — Yokohama in 2 days from JPY 5,000/day to luxury harbour suites.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/yokohama-2-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yokohama in 2 Days: Complete 2026 Itinerary",
    description:
      "Chinatown lanterns, Minato Mirai skyline, Cup Noodles Museum and wagyu shabu-shabu. Complete budget to luxury guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/yokohama-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Yokohama in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Yokohama in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/yokohama-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Yokohama",
      description:
        "Yokohama, Japan — Japan's second-largest city with the country's biggest Chinatown, the Minato Mirai waterfront, Landmark Tower, Sankeien Garden, and Cup Noodles Museum.",
      geo: { "@type": "GeoCoordinates", latitude: 35.4437, longitude: 139.6380 },
    },
  ],
};

export default function YokohamaPage() {
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
