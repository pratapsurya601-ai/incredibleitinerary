import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Queenstown",
  country: "New Zealand",
  countryFlag: "🇳🇿",
  slug: "queenstown-4-days",
  heroQuery: "queenstown new zealand remarkables mountains lake wakatipu adventure",
  heroAlt: "Queenstown New Zealand with Remarkables mountains and Lake Wakatipu",
  category: "Pacific",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "The world's first commercial bungee jump still launches people off the Kawarau Bridge, 43 metres above a glacial turquoise river, while a jet boat threads through narrow rock canyons at 85 km/h with just 5 cm of clearance. You can paraglide above a lake framed by the jagged Remarkables range and then eat the best lamb rack of your life in a restaurant carved into a cliff face. This is Queenstown — the adventure capital of the world — where the scenery is absurd and the adrenaline never stops.",
  stats: {
    duration: "4 Days",
    budgetFrom: "NZD $120 (~$73)",
    bestMonths: "Dec–Feb (summer) or Jun–Aug (skiing)",
    airport: "ZQN (Queenstown)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🏔️", label: "Top Highlights" },
    { id: "daytrips", emoji: "🚗", label: "Day Trips" },
    { id: "getaround", emoji: "🚌", label: "Getting Around" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Type", "NZeTA (New Zealand Electronic Travel Authority)"],
        ["Fee", "NZD $23 for NZeTA + NZD $35 IVL (International Visitor Conservation and Tourism Levy)"],
        ["How to Apply", "Online via Immigration New Zealand website or official NZeTA app"],
        ["Processing", "Apply at least 72 hours before departure"],
        ["Validity", "Up to 2 years or until passport expires (multiple trips, 90 days each)"],
        ["Note", "IVL is mandatory for all visitors and contributes to conservation and tourism infrastructure"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Australians", "Visa-free — no NZeTA required, enter freely"],
        ["US / UK / EU", "NZeTA required — NZD $23 online, apply 72 hrs before travel"],
        ["IVL", "NZD $35 International Visitor Levy applies to all non-Australians"],
        ["Duration", "Up to 90 days per visit"],
        ["Processing", "Usually approved within minutes, occasionally 72 hours"],
        ["Tip", "Apply before you book flights — rejection is rare but possible"],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "NZD $120/day (~$73)",
      days: [
        {
          day: "Day 1",
          title: "Arrive & Explore the Town Centre",
          items: [
            "Arrive at ZQN, take the Connectabus into town (NZD $10) or share a shuttle",
            "Check into a hostel dorm — Base Hostel, Nomads, or YHA Queenstown are all central (NZD $35–50/night)",
            "Walk the Queenstown Gardens loop — free, 45 min, great lake views",
            "Grab a Fergburger for lunch — the classic NZD $13 Ferg burger; join the queue (it moves fast)",
            "Stroll the Queenstown waterfront, watch the TSS Earnslaw steamship depart from the pier",
            "Head to Skyline lookout via the free walking track (1 hr) for panoramic lake views at sunset",
            "Dinner at Vudu Café or the lakefront food trucks — budget NZD $15–20",
          ],
          cost: "NZD $80–100 (accommodation + food + transport)",
        },
        {
          day: "Day 2",
          title: "Arrowtown + Central Otago Wine Tasting",
          items: [
            "Take the Ritchies bus to Arrowtown (NZD $10 return) — 20 min through stunning river gorge",
            "Walk the Chinese Settlement historic site and browse the gold-rush era main street — free",
            "Coffee at The Fork and Tap — excellent local café, NZD $7",
            "Visit Millbrook Resort grounds and walk the Arrow River trail (free)",
            "On the return, stop at Gibbston Valley — one winery offers tasting flights for NZD $15–20",
            "Back in Queenstown: Minus 5° Ice Bar for one cocktail (NZD $35 entry) — worth it once",
            "Evening: cheap eats at Ivy & Lola's or the Lakeview food court",
          ],
          cost: "NZD $80–110 (bus + tasting + food)",
        },
        {
          day: "Day 3",
          title: "AJ Hackett Kawarau Bridge Bungee",
          items: [
            "Book AJ Hackett Kawarau Bridge Bungee (43m — the original, NZD $195) — book in advance online",
            "Take the shuttle from town (NZD $5 each way via AJ Hackett) to the Kawarau Bridge site",
            "Watch other jumpers while you gear up — the atmosphere is electric",
            "Post-jump: free video preview, purchase jump video for NZD $49 if you want the evidence",
            "Afternoon: rent a bike from Outside Sports (NZD $45 half day) and ride the Queenstown Trail along the Kawarau River",
            "Queenstown Hill walk (2 hrs return) for the best free view of the basin — bring a snack",
            "Evening at World Bar for their famous teapot cocktails — NZD $25 per teapot (2 drinks)",
          ],
          cost: "NZD $250–290 (bungee + bike + food + drinks)",
        },
        {
          day: "Day 4",
          title: "Lake Wakatipu & Departure",
          items: [
            "Morning swim or kayak at Frankton Beach — crystal clear glacial water, free",
            "Walk the Kelvin Heights Peninsula for unobstructed views of The Remarkables — 1.5 hrs, free",
            "Brunch at Vudu Larder — NZD $20–25, excellent eggs and cabinet food",
            "If time allows: Shotover Canyon Swing (budget version of extreme — NZD $169) for last-minute thrills",
            "Final Fergburger if you haven't had enough — try the Little Lamby this time",
            "Head to ZQN airport — Connectabus or airport shuttle (NZD $15–20)",
          ],
          cost: "NZD $80–220 (depending on optional activities)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "NZD $250/day (~$152)",
      days: [
        {
          day: "Day 1",
          title: "Arrive in Style — Gondola & Fine Dining",
          items: [
            "Arrive ZQN, private taxi to hotel (NZD $35) — check into a 4-star hotel (Mercure, Novotel Queenstown, or Queenstown Park — NZD $150–200/night)",
            "Afternoon: Skyline Gondola (NZD $36) to the summit — the view of Lake Wakatipu and The Remarkables is one of the great views of the world",
            "Try the luge at the top (NZD $15 per ride, get 3 rides) — genuinely fun for all ages",
            "Dinner at The Boat Shed or Finz Seafood & Grill on the waterfront — NZD $60–80/person",
            "Evening drinks on the Steamer Wharf — beautiful lit-up waterfront at night",
          ],
          cost: "NZD $350–400 (accommodation + gondola + dinner)",
        },
        {
          day: "Day 2",
          title: "Shotover Jet + Arrowtown Wine Trail",
          items: [
            "Morning: Shotover Jet (NZD $169) — 25 minutes of 85 km/h through 360-degree spins in a canyon with 5 cm clearance — the most insane legal thing you can do before noon",
            "Combo booking with Kawarau Bungee saves NZD $30 — consider for Day 3",
            "Afternoon: private hire car to Arrowtown and the Gibbston Valley wine region (NZD $60 hire)",
            "Wine tasting at Amisfield Winery — NZD $20 tasting flight, stunning vineyard setting with mountain backdrop",
            "Lunch at Amisfield Bistro — NZD $35–50/person, wood-fired dishes with Central Otago produce",
            "Walk the Arrowtown main street, browse the Lakes District Museum (NZD $10)",
            "Back to Queenstown: dinner at Rata (Josh Emett's restaurant) — NZD $80–100/person",
          ],
          cost: "NZD $350–450 (Shotover + wine + dining)",
        },
        {
          day: "Day 3",
          title: "Kawarau Bungee + Paragliding",
          items: [
            "Morning: AJ Hackett Kawarau Bridge Bungee (NZD $195) — the original, the legendary",
            "Optional upgrade: Nevis Bungee (134m — the biggest in NZ, NZD $275) if you want the ultimate",
            "Afternoon: Paraglide with G Force Paragliding (NZD $199) — tandem flight from Coronet Peak with views across Lake Wakatipu and the Remarkables",
            "Afternoon coffee at Patagonia Chocolates on the beach — hot chocolate + churros NZD $20",
            "Evening: dinner at Fishbone Bar & Grill — known for their salmon and lamb, NZD $70/person",
            "After dinner: wander the Queenstown night market (Thursday–Sunday) for dessert crepes",
          ],
          cost: "NZD $550–620 (bungee + paraglide + dining)",
        },
        {
          day: "Day 4",
          title: "Wanaka Day Trip & Departure",
          items: [
            "Morning drive to Wanaka (45 min via Crown Range — NZ's highest sealed road) — rent a car NZD $80/day",
            "Walk to the famous Wanaka Tree (lone willow in the lake) — 10 min from town centre",
            "Visit Puzzling World (NZD $24) — bizarre optical illusion attraction, genuinely fascinating",
            "Walk the Roys Peak track start or just the lakeshore — Mirror Lake reflection views",
            "Lunch at Kai Whakapai Café on the Wanaka waterfront — NZD $25",
            "Drive back via the Cardrona Valley — stop at the historic Cardrona Hotel (1863) for an afternoon pint",
            "Final dinner at Botswana Butchery Queenstown — NZD $85/person, the lamb rack is extraordinary",
          ],
          cost: "NZD $250–350 (car hire + activities + dining)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "NZD $600/day (~$365)",
      days: [
        {
          day: "Day 1",
          title: "Private Arrival & Millbrook Resort",
          items: [
            "Private transfer from ZQN in a luxury vehicle (NZD $80)",
            "Check in to Millbrook Resort (Arrowtown, NZD $450–700/night) — a 5-star resort in a valley surrounded by mountains with its own golf course",
            "Afternoon spa treatment at Millbrook's day spa — signature massage NZD $180",
            "Sunset champagne on your private terrace overlooking the Arrow Range",
            "Dinner at Millbrook's Hole in One restaurant or The Arrow room — degustation NZD $150/person with Central Otago wine pairing",
            "In-resort evening: stargazing from the golf course (minimal light pollution is extraordinary)",
          ],
          cost: "NZD $900–1,100 (resort + spa + dining)",
        },
        {
          day: "Day 2",
          title: "Private Helicopter & Milford Sound Scenic Flight",
          items: [
            "Private helicopter scenic flight over The Remarkables, Fiordland, and Milford Sound — Over The Top Helicopters (NZD $700–1,200/person for 60 min alpine flight)",
            "Option: helicopter to a remote alpine restaurant for breakfast — Grand Mercure Hermitage-style experience",
            "Afternoon: private Shotover Jet charter with VIP access (NZD $300)",
            "Wine tasting at Amisfield with private guide and reserved seating in the barrel room (NZD $150)",
            "Return to Millbrook, private in-room dining option or dinner at Rata in Queenstown (Josh Emett) — NZD $120/person",
          ],
          cost: "NZD $1,500–2,200 (helicopter + Shotover + wine + dining)",
        },
        {
          day: "Day 3",
          title: "Nevis Bungee, Paragliding & The Bathhouse",
          items: [
            "Morning: Nevis Bungee — 134m, NZ's highest (NZD $275) with private gondola transfer",
            "Recovery brunch at The Grille at QT Hotel — NZD $60/person with lake views",
            "Afternoon: tandem paraglide from Coronet Peak (NZD $250, private tandem) over Lake Wakatipu",
            "TSS Earnslaw luncheon cruise — the restored 1912 steam-powered twin-screw vessel (NZD $95/person) with Walter Peak High Country Farm visit",
            "Afternoon: private chef's table booking at Bazaar Interactive Marketplace — 6-course with wine NZD $180",
            "Evening: whisky tasting at Boardwalk bar — premium NZ and Scottish whiskies",
          ],
          cost: "NZD $900–1,200 (Nevis + paraglide + Earnslaw + dining)",
        },
        {
          day: "Day 4",
          title: "Milford Sound Day Trip & Departure",
          items: [
            "Pre-booked fly-drive Milford Sound experience — fly one way (30 min), drive the other (4 hrs scenic) with private guide (NZD $650/person)",
            "Milford Sound overnight cruise option: Fiordland Discovery cruise (NZD $450) if extending to 5 days",
            "Milford Sound kayak at sunrise with Real Journeys (NZD $195) — paddling among 1,200m vertical cliffs",
            "Return to Queenstown — farewell lunch at Botswana Butchery (NZD $100/person)",
            "Private luxury transfer to ZQN — private check-in lounge if flying business class",
            "Depart with the memory of New Zealand's most spectacular landscape etched permanently",
          ],
          cost: "NZD $900–1,400 (Milford fly + cruise + dining + transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "NZD $35–50 (hostel dorm)",
      food: "NZD $25–35 (cafes + takeaway)",
      transport: "NZD $10–20 (bus + walking)",
      activities: "NZD $30–50 (free trails + 1 paid)",
      total: "NZD $100–155/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "NZD $150–200 (4-star hotel)",
      food: "NZD $60–90 (restaurants)",
      transport: "NZD $30–60 (car hire/taxi)",
      activities: "NZD $100–200 (bungee/jet)",
      total: "NZD $340–550/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "NZD $450–700 (Millbrook/5-star)",
      food: "NZD $150–200 (degustation)",
      transport: "NZD $80–150 (private/helicopter)",
      activities: "NZD $300–700 (heli/Nevis/private)",
      total: "NZD $980–1,750/day",
    },
    {
      tier: "🎿 Ski Season Add-on",
      accommodation: "As above",
      food: "As above",
      transport: "NZD $35 ski bus return",
      activities: "NZD $135–175 (lift pass/day)",
      total: "Add NZD $170–210/day",
    },
    {
      tier: "🚁 Milford Sound Day",
      accommodation: "Not applicable",
      food: "NZD $20–40 (packed lunch)",
      transport: "NZD $80–650 (drive/fly/cruise)",
      activities: "NZD $75–195 (cruise/kayak)",
      total: "NZD $175–885 (one-off day)",
    },
  ],
  mistakes: [
    {
      icon: "⛰️",
      title: "Booking Milford Sound too late",
      desc: "Milford Sound cruises and the fly-drive combo sell out weeks in advance, especially in summer. Book before you fly to New Zealand. The road is 4 hours each way — many people fly one direction. Don't leave this to arrival day.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🌧️",
      title: "Ignoring the weather forecast",
      desc: "Queenstown weather can change dramatically in hours. The Remarkables can be sunny while the Nevis Plateau is in cloud. Check MetService NZ (not international weather apps) and have a backup activity for rain days — Lake Wakatipu is still stunning in the rain.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🍔",
      title: "Dismissing Fergburger as a tourist trap",
      desc: "It's not. The queue exists because locals eat here too. Go at 10am when it opens or after 9pm for shorter waits. The 'Fergburger' classic is all you need — massive, juicy, and genuinely one of the best burgers in the Southern Hemisphere.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🎿",
      title: "Underestimating skiing costs in winter",
      desc: "Lift passes at The Remarkables and Coronet Peak cost NZD $135–175/day. Gear rental adds another NZD $60–80. A 4-day ski trip with accommodation can easily hit NZD $2,500+ per person. Budget specifically for this or you'll be shocked.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🚗",
      title: "Driving without an international licence",
      desc: "You can drive on your home country licence for up to 12 months in NZ, but it must be in English or accompanied by an official translation. Roads are well-maintained but the Crown Range and Milford Highway are mountain roads requiring confident driving skills.",
      color: "border-purple-200 bg-purple-50",
    },
  ],
  tips: [
    {
      icon: "🏷️",
      title: "Combo deals save 20–30% on adventures",
      desc: "AJ Hackett offers combo packages (bungee + swing + catapult) that save significantly over booking individually. Same with activity operators in town — the i-SITE visitor centre has deals and can bundle bookings. Always ask about combos.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌄",
      title: "Visit the Skyline via the walking track first",
      desc: "The Ben Lomond Track starts behind the gondola base. Walk up (1.5 hrs, steep but well-marked) for free, enjoy the view, then take the gondola down for NZD $18. Saves NZD $18 and you earn the view. Worth every steep step.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🍷",
      title: "Central Otago wine is world-class — and local",
      desc: "Pinot Noir from the Gibbston Valley is some of the best in the Southern Hemisphere. Rippon, Amisfield, Mt Difficulty, and Peregrine are all within 45 minutes. Buy a bottle at the cellar door — it's cheaper than any bottle shop and you can't get it at home.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "⏰",
      title: "Book adrenaline activities for mornings",
      desc: "Wind picks up in Queenstown afternoons, which can delay or cancel paragliding and some outdoor activities. Book adventure activities for 9–11am. Afternoons are better for winery visits, scenic walks, and lake activities which are less weather-sensitive.",
      color: "border-amber-200 bg-amber-50",
    },
  ],
  faqs: [
    {
      q: "How many days do you really need in Queenstown?",
      a: "Four days is the sweet spot for first-timers who want to experience the adventure highlights (bungee, jet boat, gondola) plus a day trip to either Arrowtown/wine country or Wanaka. Add 2 more days for Milford Sound (it's 4 hours away) or if visiting in ski season. Seven days lets you do everything without rushing.",
    },
    {
      q: "Is Queenstown worth it if you don't do adventure sports?",
      a: "Absolutely. The scenery alone is extraordinary — Lake Wakatipu, The Remarkables, the Skyline views, the TSS Earnslaw steamship, wine country, Arrowtown's gold-rush history, and Milford Sound are all world-class experiences that have nothing to do with bungee jumping. Queenstown is also one of the best restaurant cities in New Zealand.",
    },
    {
      q: "What is the NZeTA and do Indian passport holders need it?",
      a: "Yes. The NZeTA (New Zealand Electronic Travel Authority) is required for Indian passport holders visiting NZ. It costs NZD $23 and must be applied for online at least 72 hours before travel. Additionally, all non-Australian visitors must pay the International Visitor Conservation and Tourism Levy (IVL) of NZD $35. Both are applied for at the same time online.",
    },
    {
      q: "When is the best time to visit Queenstown?",
      a: "December to February (NZ summer) for hiking, water activities, paragliding, and long days with 16+ hours of daylight. June to August (NZ winter) for skiing at The Remarkables and Coronet Peak — Queenstown transforms into one of the Southern Hemisphere's premier ski towns. Shoulder months (March–May, September–November) are quieter and cheaper.",
    },
  ],
  combineWith: ["milford-sound-day-trip", "christchurch-3-days", "rotorua-2-days", "auckland-4-days"],
  relatedSlugs: ["sydney-4-days", "melbourne-4-days", "fiji-5-days", "bali-7-days"],
  galleryQuery: "queenstown new zealand lake wakatipu remarkables alpine adventure bungee",
};

export const metadata: Metadata = {
  title: "Queenstown Itinerary 4 Days: Complete Travel Guide 2026",
  description:
    "Queenstown itinerary 4 days — bungee jumping, Shotover Jet, Milford Sound, Central Otago wine, and the best lamb rack of your life. Budget to luxury, all covered.",
  keywords: [
    "Queenstown travel guide",
    "Queenstown 4 days itinerary",
    "Queenstown New Zealand",
    "AJ Hackett bungee",
    "Shotover Jet",
    "Milford Sound day trip",
    "Queenstown budget travel",
    "NZeTA Indian passport",
    "The Remarkables skiing",
    "Queenstown things to do",
    "queenstown itinerary 4 days",
  ],
  openGraph: {
    title: "Queenstown Itinerary 4 Days: Complete Travel Guide 2026",
    description:
      "Queenstown itinerary 4 days — bungee jumping, jet boating, paragliding, Milford Sound, Central Otago wine. The adventure capital of the world.",
    type: "article",
    url: "https://incredibleitinerary.com/blog/queenstown-4-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Queenstown New Zealand with Lake Wakatipu and The Remarkables",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queenstown in 4 Days: The Complete Travel Guide 2026",
    description: "Bungee, jet boats, paragliding, wine — your complete Queenstown itinerary for every budget.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/queenstown-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Queenstown in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Plan your perfect 4-day Queenstown itinerary. Bungee jumping, Shotover Jet, Milford Sound, wine country, and the best scenery in the Southern Hemisphere — all budgets covered.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/queenstown-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Queenstown 4 Days",
          item: "https://incredibleitinerary.com/blog/queenstown-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Queenstown",
      description:
        "The adventure capital of the world, set on the shores of Lake Wakatipu beneath The Remarkables mountain range in New Zealand's South Island.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -45.0312,
        longitude: 168.6626,
      },
      touristType: ["Adventure traveller", "Skier", "Wine tourist", "Scenic traveller"],
      includesAttraction: [
        { "@type": "TouristAttraction", name: "AJ Hackett Kawarau Bridge Bungee" },
        { "@type": "TouristAttraction", name: "Shotover Jet" },
        { "@type": "TouristAttraction", name: "Skyline Queenstown Gondola" },
        { "@type": "TouristAttraction", name: "TSS Earnslaw Steamship" },
        { "@type": "TouristAttraction", name: "The Remarkables Ski Area" },
        { "@type": "TouristAttraction", name: "Milford Sound" },
      ],
    },
  ],
};

export default function QueenstownPage() {
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
