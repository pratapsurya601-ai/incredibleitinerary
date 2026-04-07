import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Hakone",
  country: "Japan",
  countryFlag: "🇯🇵",
  slug: "hakone-2-days",
  heroQuery: "hakone mount fuji lake ashi japan",
  heroAlt: "Mount Fuji reflected in Lake Ashi with torii gate at Hakone, Japan",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "10 min read",
  intro:
    "Hakone is Japan distilled into two perfect days — a volcanic valley where Mount Fuji looms above steaming sulfur vents, ryokan inns serve kaiseki meals beside cedar-scented baths, and a pirate ship cruises a lake framed by ancient cedar forests. Just 90 minutes from Tokyo by Romancecar express, Hakone packs open-air sculpture parks, sizzling black eggs, and rope-way rides over Owakudani crater into a weekend that feels far longer than it is.",
  stats: {
    duration: "2 Days",
    budgetFrom: "¥8,000",
    bestMonths: "Oct–Nov or Mar–Apr",
    airport: "HND / NRT",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Ropeway, Owakudani & Onsen" },
    { id: "day2", emoji: "📅", label: "Day 2 — Lake Ashi & Open Air Museum" },
    { id: "getting-there", emoji: "🚆", label: "Getting There from Tokyo" },
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
        ["Processing", "5–10 business days"],
        ["Fee", "¥3,000 (approx. INR 1,600)"],
        ["Validity", "15 or 30 days per stay"],
        ["Apply at", "Embassy of Japan or VFS Global"],
        ["Documents", "Bank statements, hotel bookings, return flight, employment proof"],
        ["Notes", "Japan has tightened visa rules — apply at least 3 weeks before travel. Digital nomad stays require specific documentation."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (90-day waiver)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "Up to 90 days per visit"],
        ["Registration", "Visit Japan Web registration recommended for fast arrival"],
        ["Passport", "Must be valid for duration of stay"],
        ["Notes", "Japan is visa-free for 68 nationalities. No pre-registration required but Visit Japan Web speeds up customs."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "¥8,000–12,000/day",
      days: [
        {
          day: "Day 1",
          title: "Romancecar Arrival, Ropeway & Owakudani Black Eggs",
          items: [
            "07:30 — Depart Shinjuku Station on the Odakyu Romancecar express (¥2,470 reserved seat); arrive Hakone-Yumoto in 85 minutes — the panoramic front windows make the mountain views cinematic even on a budget",
            "09:30 — Hakone-Tozan switchback railway up to Gora (¥620); the zigzag climb through maple and hydrangea forests is the most charming mountain railway in Japan",
            "10:30 — Transfer to Hakone Ropeway at Sounzan for the ride over Owakudani volcanic valley (¥1,500 one way, included in Hakone Free Pass); on clear days Mount Fuji fills the entire horizon",
            "11:30 — Owakudani: walk the volcanic crater trail and buy 5 kuro-tamago black eggs boiled in sulfuric hot springs (¥600 for a bag of 5); legend says each egg adds 7 years to your life — try to believe it",
            "13:00 — Lunch at the Owakudani station restaurant: ramen with black-egg topping (¥950); basic cafeteria food but the steaming crater view from the window is free",
            "14:30 — Ropeway continues down to Togendai on Lake Ashi; board the pirate ship cruise across the lake (¥1,200 one way); watch for Mount Fuji reflections in calm weather",
            "18:00 — Check in to a budget guesthouse or capsule hotel in Hakone-Yumoto (¥4,000–6,000/night); many offer shared onsen baths at no extra cost — soak tired legs for at least 30 minutes",
          ],
          cost: "¥9,500–12,000 (transport, eggs, lunch, cruise, accommodation)",
        },
        {
          day: "Day 2",
          title: "Hakone Open Air Museum & Return to Tokyo",
          items: [
            "08:00 — Morning onsen soak at the guesthouse before checkout — the sulfur-mineral water is said to cure everything from stiff shoulders to overthinking",
            "09:30 — Hakone Open Air Museum (¥1,800): over 120 sculptures across 7 hectares including a Picasso pavilion; the barefoot path through the sensory garden and the Symphonic Sculpture tower with 70,000 glass pieces are unmissable",
            "12:00 — Lunch at the museum cafe or a nearby soba restaurant (¥800–1,200): try mori soba (cold buckwheat noodles) served with mountain wasabi",
            "14:00 — Visit Hakone Shrine at the shore of Lake Ashi (free entry): the red torii gate standing in the water is the most photographed landmark in Hakone; arrive via a 20-minute walk through cedar forest",
            "16:00 — Return Romancecar to Shinjuku (¥2,470); the evening light on the mountains makes the return journey worth the reserved window seat",
          ],
          cost: "¥6,000–8,000 (museum, lunch, transport back to Tokyo)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "¥20,000–30,000/day",
      days: [
        {
          day: "Day 1",
          title: "Ropeway, Owakudani & Ryokan Dinner",
          items: [
            "07:30 — Romancecar from Shinjuku to Hakone-Yumoto (¥2,470); buy a Hakone Free Pass at Odakyu counter (¥6,100 for 2 days) — covers the Romancecar, ropeway, switchback railway, bus network and lake cruise",
            "09:30 — Hakone-Tozan switchback railway to Gora; transfer to funicular to Sounzan and Hakone Ropeway over Owakudani — the Free Pass covers all three connections seamlessly",
            "11:00 — Owakudani volcanic valley walk with a certified guide (book via Hakone Tourism at ¥3,000/person, 90 minutes) — the geology briefing on Japan's tectonic activity makes the steaming vents far more dramatic",
            "13:30 — Pirate ship cruise across Lake Ashi to Hakone-machi (covered by Free Pass); stop at the Hakone Checkpoint Museum (¥500) — the Edo-period barrier gate controlled traffic on the Tokaido Road",
            "15:30 — Check in to a mid-range ryokan in Hakone-Yumoto or Miyanoshita (¥15,000–22,000/night for two including dinner and breakfast); afternoon free time to explore the ryokan's private onsen",
            "18:30 — Ryokan kaiseki dinner: 8-course seasonal menu using Hakone mountain vegetables, river fish, and wagyu shabu-shabu; meals are included in most mid-range ryokan rates",
          ],
          cost: "¥22,000–28,000 (pass, guide, ryokan with meals)",
        },
        {
          day: "Day 2",
          title: "Open Air Museum, Shrine & Departure",
          items: [
            "07:00 — Ryokan breakfast: traditional Japanese breakfast with rice, miso soup, grilled fish, pickles, and tamagoyaki; eat slowly and watch the garden",
            "09:00 — Hakone Open Air Museum (¥1,800, or Free Pass discount): explore the Picasso Pavilion with 300 works and the outdoor sculpture garden — Henry Moore, Niki de Saint Phalle, and Miro are highlights",
            "11:30 — Hakone Shrine cedar forest walk and red torii gate on Lake Ashi (30 minutes each way from Moto-Hakone bus stop, free entry)",
            "13:30 — Lunch at a lakeside restaurant in Moto-Hakone: seasonal yuba (tofu skin) set meal with mountain vegetables (¥1,800–2,500)",
            "15:30 — Romancecar back to Shinjuku; upgrade to a Super Hakone seat for the panoramic front carriage (¥3,000 total)",
          ],
          cost: "¥8,000–12,000 (museum, lunch, transport, extras)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "¥60,000–120,000/day",
      days: [
        {
          day: "Day 1",
          title: "Private Transfer, Exclusive Onsen Ryokan & Kaiseki",
          items: [
            "09:00 — Private car transfer from Tokyo hotel to Hakone (¥25,000–35,000 for a sedan) — your driver can stop at viewpoints on the way and the car waits for you throughout",
            "11:00 — Private Owakudani volcanic crater tour with an English-speaking volcanologist guide (¥15,000, 2 hours) — access areas beyond the standard tourist path with expert commentary on Japan's geological activity",
            "13:30 — Lake Ashi private boat charter (¥20,000 for 90 minutes) — a private wooden motor launch with a captain giving Mount Fuji commentary; far more intimate than the pirate ship",
            "15:30 — Check in to Gora Kadan, Fujiya Hotel, or Hakone Ginyu (¥60,000–120,000/night for two): top-tier ryokan with private rotenburo (outdoor onsen bath on your room's terrace), butler service, and the finest kaiseki meals in Kanagawa Prefecture",
            "19:00 — Multi-course kaiseki dinner at the ryokan (included): seasonal ingredients from Odawara fishermen and Hakone mountain farms; sake sommelier pairing available on request (¥8,000 extra)",
          ],
          cost: "¥90,000–130,000 (private car, guides, boat, top ryokan with meals)",
        },
        {
          day: "Day 2",
          title: "Private Gallery Tour, Shrine Ceremony & Departure",
          items: [
            "07:00 — Private dawn onsen on your room's rotenburo terrace as mist rises over the cedar forest — the most restorative 45 minutes in any itinerary",
            "09:00 — Ryokan breakfast: multi-course traditional meal with premium ingredients; the wagyu and seasonal fish grades are noticeably better at top-tier ryokan",
            "10:30 — Private guided tour of Hakone Open Air Museum (¥8,000 exclusive curator access before public opening) — the guide explains curatorial decisions behind the Picasso collection and the landscape integration of each major sculpture",
            "13:00 — Lunch at Fujiya Hotel (opened 1878, Japan's oldest Western-style resort hotel): the historic dining room with stained-glass windows and Victorian-era service; the beef fillet and smoked Hakone trout are excellent (¥8,000/pp)",
            "15:00 — Hakone Shrine private blessing ceremony (arrange through ryokan concierge, ¥10,000): a Shinto priest performs a formal misogi purification and travel-safety blessing at the lakeside shrine",
            "17:00 — Private car back to Tokyo hotel; the driver takes the scenic Hakone Skyline road for sunset mountain views at no extra charge",
          ],
          cost: "¥40,000–60,000 (museum, lunch, ceremony, return car)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "🎒 Ultra Budget",
      accommodation: "¥2,500–3,500 (dormitory capsule or Odawara hostel)",
      food: "¥800–1,200 (convenience store meals, instant ramen)",
      transport: "¥1,800–2,500 (Odakyu regular train + select passes)",
      activities: "¥1,000–2,000 (free viewpoints, skip Open Air Museum)",
      total: "¥5,000–8,000/day",
    },
    {
      tier: "💰 Budget",
      accommodation: "¥4,000–6,000 (guesthouse/capsule with shared onsen)",
      food: "¥1,500–2,500 (ramen, soba, convenience stores)",
      transport: "¥2,500–3,500 (Romancecar + Free Pass)",
      activities: "¥2,000–3,500 (ropeway, cruise, museum)",
      total: "¥8,000–12,000/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "¥15,000–22,000 (ryokan with dinner + breakfast)",
      food: "¥2,000–4,000 (set lunches, extras above ryokan meals)",
      transport: "¥3,000–5,000 (Free Pass + extras)",
      activities: "¥3,000–5,000 (guide, museum, shrine)",
      total: "¥20,000–30,000/day",
    },
    {
      tier: "🌟 Premium",
      accommodation: "¥30,000–55,000 (quality ryokan, private bath, good kaiseki)",
      food: "¥5,000–10,000 (full kaiseki dinner, premium lunch)",
      transport: "¥5,000–12,000 (private car one-way, Free Pass)",
      activities: "¥8,000–15,000 (private guide, museum, boat)",
      total: "¥40,000–60,000/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "¥60,000–120,000 (top-tier ryokan with private rotenburo)",
      food: "¥10,000–20,000 (kaiseki, Fujiya Hotel, sake pairing)",
      transport: "¥25,000–40,000 (private car round-trip)",
      activities: "¥20,000–40,000 (private guides, boat, ceremony)",
      total: "¥60,000–120,000/day",
    },
  ],
  mistakes: [
    {
      icon: "📅",
      title: "Going on a weekend without booking accommodation early",
      desc: "Hakone is Tokyo's weekend escape. Popular ryokan sell out 2–3 months ahead for Saturday nights. Book mid-range ryokan at least 6 weeks ahead and top-tier ryokan 3 months ahead, especially for October and cherry-blossom season.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☁️",
      title: "Not checking the Mount Fuji forecast before going",
      desc: "Mount Fuji is obscured by clouds roughly 60% of the time. Check the Hakone Tourism webcam the day before and if the forecast shows clouds, consider delaying or adjusting your ropeway timing to the early morning when visibility is clearest.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🎫",
      title: "Buying individual tickets instead of the Hakone Free Pass",
      desc: "The Hakone Free Pass (¥6,100 for 2 days from Shinjuku) covers the Romancecar, switchback railway, funicular, ropeway, pirate ship cruise, and bus network. Buying each ticket separately costs nearly double.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🧖",
      title: "Skipping the onsen because of tattoo rules",
      desc: "Many public onsen in Hakone prohibit tattoos, but most ryokan have private family baths (kashikiri onsen) you can reserve by the hour. Always ask the ryokan in advance — almost all offer a private bath option for guests with tattoos.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🥚",
      title: "Missing the ropeway when it is closed for maintenance",
      desc: "The Hakone Ropeway closes for annual maintenance (typically mid-January for 2–3 weeks) and occasionally for high winds. Check the Hakone Ropeway official website before your trip or you will arrive at Sounzan to a closed gate.",
      color: "bg-red-50 border-red-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Buy the Hakone Free Pass at Shinjuku Odakyu counter",
      desc: "The 2-day Free Pass (¥6,100 from Shinjuku) is the single most important purchase for any Hakone trip. It includes the Romancecar seat reservation and covers unlimited use of all Hakone transport including the ropeway, pirate ship, and local buses. Book tours in advance at https://www.getyourguide.com/s/?q=Hakone+Japan&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Time the ropeway for early morning on clear days",
      desc: "Mount Fuji is most visible before 10am before haze builds up. If your first morning in Hakone is clear, skip breakfast and head directly to the Sounzan ropeway station — the mountain views from Owakudani at dawn are spectacular and the queues are minimal.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "♨️",
      title: "Pack a small towel and ask your ryokan about onsen etiquette",
      desc: "Japanese onsen require showering before entering the communal bath, no swimwear, and silence. Most ryokan give you a small towel on arrival. Budget guesthouses sometimes loan towels for a small fee. The sulfur-rich Hakone water turns silver jewellery black temporarily — leave it in your room.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🗻",
      title: "Position yourself on the right side of the pirate ship for Fuji views",
      desc: "When boarding the Lake Ashi pirate ship from Togendai heading toward Hakone-machi, sit on the left (port) side for the best Mount Fuji views. The Hakone Shrine torii gate appears on the right approaching Moto-Hakone, so walk across the deck for that shot.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Tokyo to Hakone?",
      a: "The most comfortable option is the Odakyu Romancecar express from Shinjuku to Hakone-Yumoto (85 minutes, ¥2,470 reserved seat). Alternatively, the Tokaido Shinkansen to Odawara (35 minutes, ¥4,270 from Tokyo) then the Hakone-Tozan train (45 minutes) is faster overall but costs more. The Hakone Free Pass (¥6,100 from Shinjuku) includes the Romancecar and all internal Hakone transport for 2 days.",
    },
    {
      q: "What is the best time of year to visit Hakone?",
      a: "October and November offer the best combination: autumn foliage turns the valley vivid red and orange, Mount Fuji is freshly snow-capped, and the air is crisp and clear. Late March to early April brings cherry blossoms along the switchback railway. Summer (June–August) is popular but humid and Mount Fuji is often cloud-covered. January and February offer the clearest Fuji views but cold temperatures.",
    },
    {
      q: "Can I do Hakone as a day trip from Tokyo?",
      a: "Technically yes, but a day trip is rushed and misses the entire point of Hakone. The ryokan onsen experience requires an overnight stay. If you must do a day trip, focus on the ropeway and Owakudani in the morning, the pirate ship cruise, and Hakone Open Air Museum — skip the shrine. The 1-day Free Pass (¥5,000 from Shinjuku) covers a day trip itinerary.",
    },
    {
      q: "What are the black eggs of Owakudani and are they worth buying?",
      a: "Kuro-tamago are regular eggs hard-boiled in Owakudani's sulfuric hot springs, which turns the shells jet black while the inside remains a normal hard-boiled egg. They taste mildly of sulfur and are sold in bags of 5 for ¥600. Local legend says each egg extends your life by 7 years. They are a fun and unique snack but the real appeal is the volcanic setting and the ritual of eating them beside steaming vents.",
    },
  ],
  combineWith: ["tokyo-5-days", "kyoto-4-days", "nikko-2-days"],
  relatedSlugs: ["tokyo-5-days", "kyoto-4-days", "osaka-3-days", "nikko-2-days"],
};

export const metadata: Metadata = {
  title: "Hakone in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 2-day Hakone itinerary — Mount Fuji views, Hakone Ropeway over Owakudani, black eggs, Lake Ashi pirate ship cruise, and ryokan onsen. Budget ¥8,000/day to luxury ryokan. All visa info included.",
  keywords: [
    "Hakone itinerary",
    "Hakone 2 days",
    "Hakone travel guide 2026",
    "Mount Fuji Hakone",
    "Hakone ropeway",
    "Owakudani black eggs",
    "Lake Ashi pirate ship",
    "Hakone ryokan onsen",
    "Hakone visa Indian passport",
  ],
  openGraph: {
    title: "Hakone in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Mount Fuji views, Owakudani black eggs, Lake Ashi pirate ship, and ryokan onsen — Hakone in 2 days from ¥8,000/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/hakone-2-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakone in 2 Days: Complete 2026 Itinerary",
    description:
      "Mount Fuji views, Owakudani black eggs, Lake Ashi pirate ship, and ryokan onsen — Hakone in 2 days from ¥8,000/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/hakone-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Hakone in 2 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Hakone in 2 Days",
          item: "https://www.incredibleitinerary.com/blog/hakone-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Hakone",
      description:
        "Hakone, Japan — volcanic valleys, Mount Fuji views, ryokan onsen, the Hakone Ropeway over Owakudani, and Lake Ashi pirate ship cruises.",
      geo: { "@type": "GeoCoordinates", latitude: 35.2323, longitude: 139.1069 },
    },
  ],
};

export default function HakonePage() {
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
