import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Hiroshima",
  country: "Japan",
  countryFlag: "🇯🇵",
  slug: "hiroshima-2-days",
  heroQuery: "hiroshima peace memorial japan atomic bomb dome",
  heroAlt: "Hiroshima Peace Memorial A-Bomb Dome reflected in the Motoyasu River Japan",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "10 min read",
  intro: "Hiroshima is two cities in one: the world's most moving memorial to the consequences of nuclear war, and a vibrant, forward-looking Japanese city famous for its oysters, a unique style of okonomiyaki pancake, and a short ferry ride to Miyajima Island — one of Japan's three officially designated 'views of great beauty'. Two days is enough to do both justice without rushing.",
  stats: {
    duration: "2 Days",
    budgetFrom: "¥6,000",
    bestMonths: "Mar–May (cherry blossom), Sep–Nov",
    airport: "HIJ or Shinkansen from Osaka (1h20)",
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
        ["Japan Visitor Visa", "India is not on Japan's visa-exemption list. Apply for a Japan Visitor Visa (single or multiple entry) through VFS Japan or directly at the Embassy of Japan. Fee: ¥3,000 (~$20 USD). Processing takes 5–7 working days."],
        ["Multiple Entry Option", "A 5-year multiple-entry tourist visa is available for Indian passport holders who have previously visited Japan, or who hold valid US/UK/Schengen visas. This makes repeat visits seamless and is well worth requesting."],
        ["Key Documents", "Passport valid 6+ months, bank statements (last 3 months), confirmed return flight and hotel bookings, employment letter with salary confirmation, and a completed Application for Visa form from the Embassy of Japan website."],
        ["Travel Insurance", "Not a mandatory visa requirement for Japan but strongly recommended — medical costs in Japan are high without insurance. Most comprehensive travel policies from India are accepted."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, New Zealand, and most European Union passport holders can enter Japan visa-free for up to 90 days. No prior registration required — simply present your passport at immigration."],
        ["Arrival Card", "Complete the arrival card distributed on the aircraft or available at the airport. You will be fingerprinted and photographed at immigration — this applies to all nationalities including visa-free countries."],
        ["Japan Rail Pass", "Not a visa requirement, but the JR Pass must be purchased before arriving in Japan. For Hiroshima visitors from Tokyo, the 7-day pass (¥50,000) pays for itself with a single Shinkansen round trip."],
        ["Cash Culture", "Japan remains significantly cash-based. Withdraw yen at 7-Eleven ATMs or Japan Post ATMs — they reliably accept foreign Visa and Mastercard. Many restaurants and shrines are cash only."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "¥6,000–10,000/day",
      days: [
        {
          day: "Day 1",
          title: "Peace Memorial Park & Hiroshima City",
          items: [
            "9:00am — Arrive at Peace Memorial Park at opening. Coming early — before the tour groups arrive around 10:30am — makes an enormous difference to the quality of the experience. The park is free to enter and covers the hypocenter area of the 1945 atomic bombing.",
            "9:15am — A-Bomb Dome (Genbaku Dome): the only structure left standing near the hypocenter, now a UNESCO World Heritage Site. Entry is free. The skeletal dome is most affecting viewed from across the Motoyasu River in morning light. Allow 20–30 minutes here.",
            "10:00am — Peace Memorial Museum (¥200): allow a full 2–3 hours. The exhibits are profoundly moving — personal belongings, photographs, survivor testimonies, and detailed historical documentation of August 6, 1945. This is one of the most important museums in the world. Do not rush it.",
            "12:30pm — Flame of Peace: burns in the park's central axis, lit in 1964 and intended to burn until all nuclear weapons are abolished. The Children's Peace Monument nearby is dedicated to Sadako Sasaki — her story of folding 1,000 paper cranes is one of Japan's most-told tales.",
            "1:30pm — Lunch: Hiroshima okonomiyaki. The city's version is a layered pancake (noodles + cabbage + egg + meat), completely different from the mixed Osaka style. Head to Okonomi-mura — a 3-floor building in central Hiroshima with over 20 okonomiyaki restaurants. Expect ¥800–1,200.",
            "3:00pm — Hondori covered shopping arcade: 600m of covered shopping through Hiroshima's main downtown street. Good for picking up Japanese stationery, snacks, and Hiroshima souvenirs at reasonable prices.",
            "5:00pm — Evening walk along the Motoyasu River: the A-Bomb Dome is beautifully lit at dusk and reflected in the river. This is the best photograph of the day.",
            "7:00pm — Dinner: Hiroshima oysters. The city is Japan's largest oyster producer (over 60% of national output). Try a local izakaya near the Peace Park or Nagarekawa entertainment district. Grilled or fried oysters ¥1,500–2,000. A cold Sapporo beer alongside: ¥500.",
          ],
          cost: "¥4,000–6,000 total",
        },
        {
          day: "Day 2",
          title: "Miyajima Island & the Floating Torii",
          items: [
            "8:00am — Check tide tables the evening before (available free online at tide-forecast.com or Japan Meteorological Agency). High tide gives you the 'floating' torii gate rising from the sea — one of Japan's most iconic images. Low tide lets you walk out to touch the gate. Plan your morning around the tide time.",
            "8:30am — Take the JR line to Miyajima-guchi station (included in JR Pass). From there, the Miyajima ferry runs every 15–20 minutes (¥190 one way — not covered by JR Pass on the JR Ferry, but covered if using the Matsudai Ferry with a JR Pass). Journey: 10 minutes across the Seto Inland Sea.",
            "9:00am — Itsukushima Shrine (¥300): the vermilion O-torii gate standing in the tidal flats is one of Japan's three 'views of great beauty'. At high tide the gate appears to float; at low tide you walk across the sand to touch the barnacle-covered base. The shrine itself is built over the water on stilts — walk the covered corridors above the sea.",
            "10:30am — Friendly deer: Miyajima's free-roaming deer (sika deer, like Nara) wander the shrine grounds and waterfront. They will attempt to eat your map, your bag straps, and anything paper. They will also pose patiently for photographs.",
            "11:00am — Mt Misen: either hike the forest trail (1.5–2 hours up, various routes, free) or take the ropeway (¥1,000 each way, two stages). Summit at 535m gives panoramic views over the Seto Inland Sea, the shrine below, and on clear days back to Hiroshima city. The Eternal Flame on the mountain has burned since 806 AD.",
            "1:30pm — Lunch on Miyajima: momiji manju cakes (maple-leaf-shaped pastries filled with red bean paste or custard, ¥100–150 each) are the island's signature food. Fresh-grilled oysters are also sold on the main shopping street for ¥400–600 each — some of the freshest you will eat anywhere.",
            "3:00pm — Explore the less-visited western end of the island: Daisho-in Temple (free) is a fascinating complex of sub-temples, spinning prayer wheels, and stone Buddhas in monk's robes wearing knitted hats.",
            "5:00pm — Return ferry to Miyajima-guchi, then JR back to Hiroshima. Last ferry is around 10pm but returning by 5–6pm is recommended to avoid crowds.",
          ],
          cost: "¥3,000–5,000 total (incl. ferry + shrine entry)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "¥15,000–28,000/day",
      days: [
        {
          day: "Day 1",
          title: "Peace Park, Museum & Hiroshima Oyster Dinner",
          items: [
            "9:00am — Peace Memorial Park with a licensed guide (arrange via Hiroshima Peace Culture Foundation, free volunteer guides available, or private guide ¥5,000–10,000 for 2–3 hours). A guide who can contextualise the history — and sometimes introduce you to a hibakusha (atomic bomb survivor) — transforms the experience.",
            "11:30am — Peace Memorial Museum full 2-hour visit. The west building opened in 2019 with new permanent exhibitions including rebuilt 3D models of pre-bombing Hiroshima. Allow time in the research room if history is important to you.",
            "1:30pm — Lunch at Kanawa: Hiroshima's most famous oyster restaurant, moored as a floating houseboat on the Motoyasu River. Oyster kaiseki course ¥5,000–8,000. Book ahead.",
            "3:30pm — Hiroshima Castle (¥370): a faithful 1958 reconstruction of the 1589 original. The five-story keep has a museum of feudal Hiroshima inside. The moat and parkland around the castle are pleasant for a 30-minute walk.",
            "5:00pm — Shukkeien Garden (¥260): a 1620 strolling garden modeled on West Lake, Hangzhou, with miniaturized landscapes of mountains, rivers, and islands. The garden survived the bombing relatively intact; the story of its survival and immediate post-war use as a relief center for survivors is documented on-site.",
            "7:30pm — Dinner at Nagarekawa district: Hiroshima's nightlife and restaurant quarter. Mid-range izakaya serve full oyster courses (grilled, raw, deep-fried, steamed), Hiroshima-style okonomiyaki, and local Saijo sake (Hiroshima is a major sake-producing region). Budget ¥4,000–8,000 with drinks.",
          ],
          cost: "¥12,000–20,000 total",
        },
        {
          day: "Day 2",
          title: "Miyajima Full Day with Guided Hike",
          items: [
            "7:30am — Early ferry to Miyajima before the tour groups arrive. Aim to reach the torii gate by 8:30am — morning light on the vermilion gate with no crowds is a transformative experience.",
            "9:00am — Itsukushima Shrine (¥300) with audio guide. The shrine's Noh stage, facing the sea, is one of Japan's oldest performance spaces — performances are held during autumn festivals.",
            "10:30am — Mt Misen guided hike via the Momijidani trail (1.5h up through maple forest). A local guide (¥6,000–12,000/group) can explain the Buddhist history of the mountain, the significance of the eternal flame, and point out endemic wildlife.",
            "1:00pm — Summit lunch: bring onigiri from the ferry terminal convenience store and eat overlooking the Seto Inland Sea. On extremely clear days you can see as far as Shikoku island.",
            "2:30pm — Descent via the Daisho-in trail, stopping at the temple complex. Take the ropeway down if legs are tired (¥1,000 one way).",
            "4:00pm — Miyajima craft shopping: the island is known for rice paddles (shamoji) — Miyajima rice paddles are considered lucky souvenirs. Also look for Miyajima lacquerware and locally made momiji manju as gifts.",
            "6:00pm — Return to Hiroshima. Farewell dinner at Hotel Granvia Hiroshima restaurant or a high-quality local kaiseki restaurant in Nagarekawa. Budget ¥6,000–12,000/person.",
          ],
          cost: "¥15,000–25,000 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "¥45,000–120,000/day",
      days: [
        {
          day: "Day 1",
          title: "Private Peace Park Tour & Oyster Kaiseki",
          items: [
            "Check in to Hotel Nikko Hiroshima (¥25,000–55,000/night) — the city's most prestigious hotel, directly across from Peace Memorial Park. Request a park-view room for immediate access and a striking view of the memorial.",
            "9:00am — Private guided Peace Memorial Park tour with a specialist historian or certified guide (¥15,000–30,000 for a half-day private tour). A private guide can arrange introductions to peace activists, access to normally closed archive sections, and a deeply personal interpretation of events.",
            "12:00pm — Lunch at Kanawa floating oyster restaurant: full kaiseki course featuring Hiroshima oysters prepared eight ways — raw, grilled with butter, steamed with sake, deep-fried in panko, baked in shell with miso, in chawanmushi (egg custard), oyster soup, and oyster rice. ¥8,000–15,000/person.",
            "3:00pm — Private visit to Hiroshima Castle and Shukkeien Garden with an art history guide contextualising Momoyama-period Japanese architecture and Edo-period garden design.",
            "7:00pm — Dinner at a private dining room in Nagarekawa: high-end kaiseki with Hiroshima ingredients — oysters, carp from local rivers, citrus from Setouchi, sake from Saijo. Reserve through hotel concierge. ¥20,000–35,000/person with sake pairing.",
          ],
          cost: "¥50,000–90,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Miyajima at Dawn & Helicopter Transfer",
          items: [
            "6:00am — Private charter boat to Miyajima (arrange through hotel concierge or specialist operator, ¥30,000–50,000): arrive at the torii gate at dawn before the first public ferry, with the gate entirely to yourselves in early morning mist. The Seto Inland Sea at dawn from a private boat is exceptional.",
            "7:30am — Private Itsukushima Shrine access (arrange through the island's religious authorities via a specialist travel agent — limited availability): before public opening, a guided walk through the shrine corridors above the water with a shrine priest explaining the Shinto rituals performed at the site for over 1,400 years.",
            "10:00am — Mt Misen summit via private helicopter (seasonal and weather-dependent, arrange through Hiroshima helicopter operators, ¥50,000–100,000 for the experience). Land at or near the summit for panoramic Seto Inland Sea views with no other visitors.",
            "1:00pm — Lunch at a private Miyajima ryokan or high-end restaurant on the island. The Miyajima Grand Hotel Arimoto serves a full multi-course lunch with seasonal ingredients from the Seto Inland Sea.",
            "4:00pm — Return to Hiroshima by private boat or JR ferry. Late afternoon: hotel spa treatments at Hotel Nikko. In-hotel dinner or concierge-arranged omakase at one of Hiroshima's finest Japanese restaurants. ¥25,000–50,000/person.",
          ],
          cost: "¥80,000–150,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "¥3,000–5,000",
      food: "¥1,500–3,000",
      transport: "¥500–1,000",
      activities: "¥500–1,500",
      total: "¥6,000–10,000/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "¥8,000–15,000",
      food: "¥4,000–8,000",
      transport: "¥1,500–3,000",
      activities: "¥2,000–5,000",
      total: "¥15,000–28,000/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "¥25,000–55,000",
      food: "¥15,000–35,000",
      transport: "¥3,000–10,000",
      activities: "¥5,000–30,000",
      total: "¥45,000–120,000/day",
    },
  ],
  mistakes: [
    {
      icon: "🏝️",
      title: "Skipping Miyajima Island",
      desc: "Some visitors treat Hiroshima purely as a solemn day trip from Osaka and miss Miyajima entirely. This is a mistake. Miyajima is one of Japan's most beautiful spots and is only 30 minutes from central Hiroshima by tram and ferry. The floating torii gate alone justifies the time. Two days with Miyajima on Day 2 is the correct way to structure this stop.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Not Checking the Tide Tables",
      desc: "The Itsukushima torii gate looks completely different at high tide (floating above the sea — the classic postcard image) versus low tide (accessible on foot across tidal flats). Both have merit, but neither is a surprise if you check the tide table in advance. Japan Meteorological Agency publishes free tide predictions. Low tide visit: walk to the gate. High tide visit: photograph from the shrine corridors. Check before you go.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "⏱️",
      title: "Rushing the Peace Memorial Museum",
      desc: "The Peace Memorial Museum is not a 30-minute experience. The exhibits — survivor testimonies, personal belongings of those killed, photographs, and the documented historical record — deserve at least 2 hours of genuine attention. Visitors who rush through to 'tick it off' consistently report regretting it later. Allow proper time, and visit in the morning when you have emotional energy.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Arrive at Peace Park Before 9am",
      desc: "The Peace Memorial Park opens to the public 24 hours a day and the museum opens at 8:30am (9am in winter). Tour groups from Osaka and Kyoto typically arrive between 10:30am and 11:30am. Being in the park before 9am — particularly at the A-Bomb Dome and Children's Peace Monument — makes an enormous qualitative difference to the experience. The park in early morning quiet is profoundly different from the mid-morning bustle.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚶",
      title: "Low Tide: Walk to the Torii Gate",
      desc: "If the tide is out when you visit Miyajima, walk across the sand to the base of the O-torii gate. You can touch the barnacle-covered wooden pillars, look straight up through the gate to the sky, and appreciate its true scale (16 metres tall). This is an experience that a photograph from the shrine cannot replicate — and it is free. The walk takes about 5 minutes from the shrine entrance.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🥞",
      title: "Hiroshima Okonomiyaki vs Osaka Style",
      desc: "Japan has two major okonomiyaki styles. The Osaka version mixes all ingredients together before grilling — it resembles a thick pancake. The Hiroshima version layers each ingredient separately: first a thin crepe base, then a mountain of raw cabbage, then bean sprouts, pork, and finally yakisoba noodles and a fried egg on top. The result is more complex and considerably more satisfying. Try Okonomi-mura in central Hiroshima — three floors of specialists who have been making it the same way for decades.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is 2 days enough for Hiroshima?",
      a: "Yes — 2 days is the ideal duration. Day 1 covers the Peace Memorial Park, A-Bomb Dome, Peace Memorial Museum, and Hiroshima city highlights with time for oysters in the evening. Day 2 is dedicated to Miyajima Island and the floating torii gate. You will not feel rushed. If you only have one day (arriving as a day trip from Osaka or Kyoto), it is possible but forces difficult choices — you can do Peace Park plus a quick Miyajima visit, but one or the other suffers.",
    },
    {
      q: "Is the Japan Rail Pass worth it for visiting Hiroshima from Tokyo?",
      a: "Yes, decisively. The Nozomi Shinkansen from Tokyo to Hiroshima costs ¥18,000 one way (¥36,000 return). A 7-day JR Pass costs ¥50,000 and covers the full Shinkansen network (note: the fastest Nozomi trains are not covered — use the Hikari, which is only 20 minutes slower). If you are spending a week in Japan visiting Tokyo, Kyoto, Osaka, and Hiroshima, the pass pays for itself comfortably and eliminates the need to book individual tickets.",
    },
    {
      q: "Is Hiroshima safe to visit?",
      a: "Completely. Hiroshima is a normal, modern, thriving Japanese city with a population of 1.2 million. Concerns about radiation are entirely unfounded — background radiation levels in Hiroshima are identical to any other Japanese city. The atomic bomb exploded at altitude and the site has been a functioning city since reconstruction began in 1949. Hiroshima is one of the most welcoming cities in Japan for international visitors.",
    },
    {
      q: "When is oyster season in Hiroshima?",
      a: "Hiroshima oysters are at their best from October through April, peaking in January and February when cold water produces plump, creamy oysters. The summer months (June–September) are the off-season — oysters are still available but smaller and less flavourful. If you are visiting specifically for the oysters, aim for autumn or winter. In summer, the focus shifts to other Hiroshima seafood — conger eel (anago) from Miyajima is excellent year-round.",
    },
    {
      q: "How does Hiroshima compare to Nagasaki?",
      a: "Both cities experienced atomic bombings in August 1945 and both have moved beyond that history while preserving it as a memorial. Nagasaki is approximately 6 hours from Hiroshima by Shinkansen (or 2.5 hours from Fukuoka/Hakata). Nagasaki's Peace Park and museum are powerful and worth visiting — the city has a distinct character shaped by centuries of being Japan's only international trading port. If you have time for both, they complement rather than duplicate each other. Most visitors to western Japan prioritise Hiroshima, which is more accessible.",
    },
  ],
  combineWith: ["kyoto-5-days", "osaka-4-days", "tokyo-7-days"],
  relatedSlugs: ["kyoto-5-days", "osaka-4-days", "tokyo-7-days", "hokkaido-5-days"],
  galleryQuery: "hiroshima peace memorial miyajima torii gate japan",
};

export const metadata: Metadata = {
  title: "Hiroshima in 2 Days: Peace Memorial, Miyajima Island & the Floating Torii (2026)",
  description: "Complete 2-day Hiroshima itinerary covering Peace Memorial Park, A-Bomb Dome, Miyajima Island's floating torii gate, Hiroshima oysters, and okonomiyaki — with real yen costs for every budget.",
  keywords: [
    "hiroshima itinerary 2 days",
    "hiroshima travel guide 2026",
    "miyajima island floating torii gate",
    "hiroshima peace memorial museum",
    "hiroshima okonomiyaki",
    "hiroshima oysters",
    "japan travel guide",
  ],
  openGraph: {
    title: "Hiroshima in 2 Days: Peace Memorial, Miyajima & the Floating Torii (2026)",
    description: "Peace Memorial Park, the floating torii gate at Miyajima, Hiroshima oysters, and okonomiyaki — with real yen costs for budget to luxury.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hiroshima Peace Memorial A-Bomb Dome Japan",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiroshima in 2 Days (2026)",
    description: "Peace Memorial, Miyajima Island, floating torii gate, oysters, and okonomiyaki — real yen costs.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/hiroshima-2-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Hiroshima in 2 Days: Peace Memorial, Miyajima Island & the Floating Torii (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
      description:
        "Complete 2-day Hiroshima itinerary covering Peace Memorial Park, Miyajima Island's floating torii gate, oysters, and okonomiyaki — with real yen costs.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hiroshima 2 Days",
          item: "https://www.incredibleitinerary.com/blog/hiroshima-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Hiroshima, Japan",
      description:
        "A modern Japanese city and the site of the world's first atomic bombing, now home to the Peace Memorial Park, A-Bomb Dome UNESCO site, and a short ferry ride to Miyajima Island with its iconic floating torii gate.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.3853,
        longitude: 132.4553,
      },
      touristType: ["History buffs", "Cultural tourists", "Peace travelers", "Food lovers", "Architecture enthusiasts"],
    },
  ],
};

export default function HiroshimaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
