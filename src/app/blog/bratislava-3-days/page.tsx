import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Bratislava",
  country: "Slovakia",
  countryFlag: "🇸🇰",
  slug: "bratislava-3-days",
  heroQuery: "bratislava old town slovakia blue church",
  heroAlt: "Bratislava Old Town skyline with Michael's Gate tower and Danube River at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Bratislava punches far above its size — a compact Old Town of medieval alleyways, Habsburg palaces, and charming pastel squares sits shoulder-to-shoulder with a futuristic UFO Bridge viewpoint, a hilltop Devin Castle ruin overlooking the Danube, and one of Central Europe's most underrated craft beer and Slovak wine scenes. Three days is perfect: enough time to walk every cobblestone lane, take a morning at Devin, and still make the 70-minute train day trip to Vienna.",
  stats: { duration: "3 Days", budgetFrom: "€40", bestMonths: "Apr–Jun or Sep–Oct", airport: "BTS" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Old Town & Michael's Gate" },
    { id: "day2", emoji: "📅", label: "Day 2 — UFO Bridge & Devin Castle" },
    { id: "day3", emoji: "📅", label: "Day 3 — Vienna Day Trip" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C)"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Slovak Embassy or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Slovakia is Schengen — a single visa covers the Vienna day trip too. Apply 6–8 weeks early."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free but subject to the 90/180 Schengen rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€40–55/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Orientation & Michael's Gate",
          items: [
            "13:00 — Check in to a hostel dorm on or just outside the Old Town (€15–22/night); Bratislava's Old Town is tiny — everything is walkable within 20 minutes",
            "14:30 — Walk the entire Old Town loop starting at Michael's Gate (Michalska brana) — the only surviving medieval city gate, free from outside, €5 to climb the tower for a rooftop view across the red-tiled rooftops",
            "16:00 — Main Square (Hlavne namestie) and Roland's Fountain — street performers, outdoor cafes, and the 18th-century Old Town Hall; pop into the courtyard (free) for a peaceful break away from the square bustle",
            "18:00 — Dinner at a traditional Slovak restaurant in the Old Town: boar goulash (divina gulas) with bread dumplings costs €8–11; try Presto or Modra Hviezda for authentic Slovak cuisine without tourist-trap pricing",
            "20:00 — Craft beer bar crawl along Obchodna Street — Bratislava has 10+ craft breweries; a pint of Slovak craft beer costs €2.50–3.50; try Cierny Pes or Falkon Craft Beer Bar for the widest selection",
          ],
          cost: "€30–38 (accommodation, food, gate tower, beers)",
        },
        {
          day: "Day 2",
          title: "UFO Bridge & Devin Castle Ruins",
          items: [
            "09:00 — Walk across the Most SNP (New Bridge) to the UFO observation platform (€9) — 95 metres above the Danube with 360-degree views; the inverted UFO-shaped restaurant at the top is a communist-era engineering marvel",
            "11:00 — Bus 29 from Novy Most bus stop to Devin Castle ruins (€0.90, 20 min ride) — the fortress at the confluence of the Danube and Morava rivers dates to the 9th century; entry €5, views over Austria are extraordinary",
            "13:30 — Picnic lunch at Devin using bread, cured meats, and Bryndza sheep cheese from the Albert supermarket near your hostel — eating at the castle walls with a Danube view costs under €5",
            "15:30 — Return bus to Old Town; walk up to Bratislava Castle (Bratislavsky hrad) — free to walk the castle grounds; the all-white castle rebuilt in 1968 has four corner towers and views across Slovakia, Austria, and Hungary",
            "19:00 — Slovak wine tasting evening at a wine bar in the Old Town — Slovakia produces excellent Riesling and Welschriesling; a flight of 4 Slovak wines costs €8–12 at Vinoteka Mrva & Stanko on Obchodna",
          ],
          cost: "€35–45 (UFO entry, castle, transport, wine tasting)",
        },
        {
          day: "Day 3",
          title: "Vienna Day Trip & Departure",
          items: [
            "07:30 — REGIOjet or FlixBus to Vienna from Bratislava Main Station (€8–12 return, 70 minutes) — book online the night before; trains also run frequently and take 65 minutes for a similar price",
            "09:30 — Vienna: walk the Ringstrasse boulevard passing the Opera, Parliament, and Kunsthistorisches Museum (exterior free); Schonbrunn Palace grounds are also free to walk",
            "12:30 — Lunch in Vienna's Naschmarkt: open-air market with Turkish, Austrian, and international food stalls; a full lunch costs €8–12; try the Leberkase (meatloaf) at a traditional stand",
            "15:00 — Return bus or train to Bratislava; afternoon walk through Bratislava's Stare Mesto (Old City) neighbourhood for last photos of Michael's Gate at golden hour",
            "19:00 — Farewell dinner: half-roasted duck with red cabbage and potato dumplings at a Slovak pub (€10–13); wash down with Zlaty Bazant Slovak lager (€2)",
          ],
          cost: "€40–50 (transport to Vienna, lunch, dinner)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€95–135/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Deep Dive & Slovak Wine Dinner",
          items: [
            "13:00 — Check in to a 3-star boutique hotel in the Old Town (€65–95/night); the best mid-range hotels sit on or just off Hlavne namestie with castle views from upper floors",
            "14:30 — Slovak National Museum (€8) — covers Bratislava's history from Celtic settlements to Habsburg rule and the Velvet Revolution; housed in a riverside neo-Renaissance building next to the Danube",
            "16:30 — Michael's Gate tower climb (€5) then guided walking tour of the Old Town (€15, 90 minutes) — local guides reveal the stories behind the plague column, French Napoleonic occupation plaques, and the famous 'paparazzi' bronze statue peering from a manhole",
            "19:30 — Slovak wine and food pairing dinner at Modra Hviezda (€35–45/pp) — one of Bratislava's most respected restaurants using seasonal Slovak produce; try Bryndza halusky (sheep cheese dumplings) with bacon and a glass of Nitra Riesling",
          ],
          cost: "€120–140 (hotel, museums, tour, dinner)",
        },
        {
          day: "Day 2",
          title: "UFO Bridge, Devin Castle & Danube Cruise",
          items: [
            "09:30 — UFO Bridge observation deck (€9) with breakfast coffee at the UFO café — the view at mid-morning before midday haze is the clearest",
            "11:00 — Taxi or Bolt to Devin Castle ruins (€8 each way) — 35 minutes of exploring the 9th-century fortress; the cliff face dropping to the Danube below is dramatic; audio guide available for €3",
            "13:30 — Lunch at the Devin Castle terrace restaurant (€18–22/pp) — Slovak pork tenderloin or wild boar goulash with a local Tokaj wine; the terrace overlooks the Danube and Austrian bank",
            "16:00 — Return to Bratislava; 75-minute Danube cruise from the Old Town pier (€18) — comfortable catamaran along the Bratislava stretch of the Danube with audio commentary",
            "20:00 — Craft beer dinner at Bratislava's best brewery restaurant — Pivovar Sestak serves house-brewed ales alongside hearty Slovak dishes; 3-course meal with two craft beers costs €28–35",
          ],
          cost: "€120–145 (hotel, castle, cruise, meals)",
        },
        {
          day: "Day 3",
          title: "Vienna Day Trip & Castle Farewell",
          items: [
            "07:45 — REGIOjet express to Vienna Hauptbahnhof (€15 return, reserved seat) — comfortable direct service with WiFi; Austrian capital in 65 minutes",
            "09:30 — Vienna: Belvedere Palace gardens (free to walk), Naschmarkt late breakfast, and a museum of your choice — the Kunsthistorisches Museum costs €21 and houses the world's finest collection of Pieter Bruegel works",
            "14:00 — Return train to Bratislava; afternoon at Bratislava Castle (€10 museum entry for the interior Slovak history exhibition)",
            "18:30 — Farewell aperitivo at a rooftop bar in the Old Town — Skybar on the Carlton Hotel has Danube and castle views; glass of Slovak sparkling wine (Sekt) €8",
            "20:00 — Final dinner: grilled trout with potato rostis and horseradish cream at a riverside restaurant on the Danube embankment (€22–28/pp)",
          ],
          cost: "€130–155 (hotel, Vienna trip, castle, meals)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€250–400/day",
      days: [
        {
          day: "Day 1",
          title: "Private Old Town Tour & Michelin-Level Dinner",
          items: [
            "13:00 — Check in to the Grand Hotel River Park or Falkensteiner Hotel Bratislava (€150–250/night) — both have spa facilities and views over the Danube and castle from upper floors",
            "15:00 — Private guided Old Town tour with a licensed historian (€80 for 2 hours) — access behind-the-scenes stories of the Habsburg coronation route through Bratislava, where 11 Hungarian kings were crowned",
            "17:30 — Michael's Gate tower at golden hour plus private photography session from the castle terrace (€30 for sunset access via concierge)",
            "20:00 — Dinner at Zylinder restaurant (€55–75/pp) — Bratislava's finest modern European restaurant on Hlavne namestie; tasting menu uses local Carpathian game, Danube fish, and Slovak truffles with an extensive Central European wine list",
          ],
          cost: "€350–450 (hotel, private tour, fine dining)",
        },
        {
          day: "Day 2",
          title: "Devin by Private Car & Winemaker Experience",
          items: [
            "09:00 — Private car to Devin Castle (€30 return) with a private guide (€60) — skip the bus entirely and have the ruins largely to yourself at 9am before day-trippers arrive",
            "12:00 — Private Slovak winemaker lunch experience in the Small Carpathian wine region (€90/pp, booked via concierge) — the Pezinok or Modra wine villages are 30 minutes from Bratislava; tour the cellars and taste 6 wines with Slovak food pairings",
            "16:00 — Return to hotel; spa session (€40–60) before evening",
            "19:00 — UFO Restaurant dinner (€65–85/pp) — the revolving restaurant at the top of the UFO Bridge is Bratislava's most theatrical dining experience; reserve the table nearest the panoramic window for Danube views; book 1 week ahead",
          ],
          cost: "€380–480 (hotel, private car, winemaker tour, spa, UFO dinner)",
        },
        {
          day: "Day 3",
          title: "Private Vienna Transfer & Departure",
          items: [
            "08:00 — Private transfer to Vienna by luxury car (€120 one-way) — door-to-door from Bratislava hotel to Vienna hotel or airport; 55 minutes with a professional driver",
            "10:00 — Vienna: private art tour of the Kunsthistorisches Museum (€150 for a 2-hour private guide) — access the Habsburg imperial collections with an art historian explaining the Vermeer, Raphael, and Velazquez masterpieces",
            "13:30 — Lunch at Steirereck im Stadtpark (2 Michelin stars, €120/pp) — Vienna's finest seasonal Austrian cuisine in a setting overlooking the park; book 2–3 months ahead",
            "17:00 — Private transfer back to Bratislava Airport (€90) for departure, or onward to a European connection via Vienna International Airport (€120)",
          ],
          cost: "€400–600 (hotel, private transfers, private Vienna tour, Michelin lunch)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€15–22 (hostel dorm)",
      food: "€15–22 (Slovak pubs + supermarket)",
      transport: "€3–8 (bus + walking)",
      activities: "€10–15 (gate tower + castle grounds)",
      total: "€40–55/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€65–95 (boutique Old Town hotel)",
      food: "€35–55 (restaurants + wine bar)",
      transport: "€10–20 (Bolt + Danube cruise)",
      activities: "€20–35 (museums + guided tours)",
      total: "€95–135/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€150–250 (5-star riverside hotel)",
      food: "€80–130 (fine dining + winemaker experience)",
      transport: "€50–120 (private car + transfers)",
      activities: "€60–100 (private tours + spa)",
      total: "€250–400/day",
    },
    {
      tier: "Vienna Day Trip (add-on)",
      accommodation: "—",
      food: "€12–25 (Naschmarkt + cafe)",
      transport: "€8–20 (bus or train return)",
      activities: "€0–21 (free walks or museum)",
      total: "€20–66 extra",
    },
    {
      tier: "Devin Castle Day (add-on)",
      accommodation: "—",
      food: "€8–22 (picnic or castle cafe)",
      transport: "€2–16 (bus or Bolt return)",
      activities: "€5 (castle entry)",
      total: "€15–43 extra",
    },
  ],
  mistakes: [
    {
      icon: "🚂",
      title: "Skipping the Vienna day trip",
      desc: "Vienna is 70 minutes and €8–12 away. Bratislava travellers who skip Vienna miss one of the greatest city pairings in Europe — two Habsburg capitals in a single day for the price of a budget bus ticket.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏰",
      title: "Assuming the UFO Bridge is just a photo stop",
      desc: "The UFO observation deck (€9) is legitimately one of the best panoramas in Central Europe — Slovakia, Austria, and Hungary are simultaneously visible on a clear day. Many travellers just photograph it from below and miss the view entirely.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍷",
      title: "Not trying Slovak wine",
      desc: "Slovakia produces outstanding white wines in the Small Carpathian wine region, less than 30 minutes from the city. Welschriesling, Gruner Veltliner, and Furmint from Slovakia cost half the price of Austrian equivalents and are frequently better.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "📍",
      title: "Treating Bratislava as just an overnight stop",
      desc: "Many visitors stay one night between Vienna and Budapest, miss Devin Castle entirely, never try boar goulash, and conclude Bratislava is boring. Three days reveals a city with genuine depth — medieval history, communist-era architecture, and a thriving food and drink scene.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🗓️",
      title: "Visiting only in July and August",
      desc: "Summer is humid and crowded on the Old Town square. April–June and September–October bring mild weather, fewer tourists, and the outdoor wine bar season at its best. Christmas markets in December are also excellent.",
      color: "bg-red-50 border-red-200",
    },
  ],
  tips: [
    {
      icon: "🍺",
      title: "Drink Slovak craft beer, not international brands",
      desc: "Bratislava has a thriving craft beer movement — Sestak, Falkon, and Cierny Pes all brew on-site. A pint of craft Slovak beer costs €2.50–3.50. Stick to Slovak lager (Zlaty Bazant, Topvar) at restaurants for €1.50–2 per glass. Explore tours at https://www.getyourguide.com/s/?q=Bratislava&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚌",
      title: "Use Bus 29 for Devin Castle — it costs under €1",
      desc: "Devin Castle is one of Slovakia's most atmospheric ruins and almost no one visits it. Bus 29 from Novy Most (New Bridge) bus stop costs €0.90 and takes 20 minutes. Most tourists assume it requires a tour or private car — it does not.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🥘",
      title: "Order boar goulash and Bryndza halusky",
      desc: "These are Slovakia's signature dishes. Divina gulas (wild boar goulash) with bread dumplings costs €8–11 at a local pub. Bryndza halusky (potato dumplings with sheep cheese and fried bacon) is the national dish and costs €6–9. Both are extraordinarily good and unavailable outside Central Europe.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌅",
      title: "Walk the Old Town at dawn before the tour groups arrive",
      desc: "Bratislava's Old Town is tiny and fills up quickly on summer mornings. By 9am, Michael's Gate and Hlavne namestie are crowded. An early walk at 7–8am sees the same streets empty, freshly washed, with cafe owners setting out their chairs — the authentic daily rhythm of the city.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Bratislava worth visiting or is it just a day trip from Vienna?",
      a: "Bratislava absolutely rewards 2–3 full days. Yes, it is smaller than Vienna or Prague — but Devin Castle, the UFO Bridge viewpoint, the Small Carpathian wine region, and the genuine local pub and craft beer scene require at least 2 nights to appreciate. Most visitors who stay only one night deeply regret not extending.",
    },
    {
      q: "What currency does Slovakia use and are cards accepted?",
      a: "Slovakia uses the Euro (it joined the Eurozone in 2009). Cards are accepted almost everywhere in Bratislava including small cafes and pubs. ATMs are plentiful in the Old Town. You rarely need cash, but carrying €20–30 for smaller market stalls and bus tickets is sensible.",
    },
    {
      q: "How do I get from Vienna to Bratislava?",
      a: "REGIOjet buses run every 30–60 minutes between Vienna Hauptbahnhof and Bratislava Main Station, costing €8–12 return and taking 70 minutes. Direct trains also run and take 65 minutes for a similar price. Book online at regiojet.com or flixbus.com 1–2 days before. No border stop — both countries are in the Schengen area.",
    },
    {
      q: "Is Bratislava safe for solo travellers?",
      a: "Bratislava is one of Central Europe's safest capitals. Violent crime against tourists is extremely rare. Standard precautions apply: be aware of pickpockets in the crowded Old Town square in summer, and avoid excessive intoxication in the bar district late at night. The city is very walkable and well-lit throughout the Old Town.",
    },
  ],
  combineWith: ["vienna-4-days", "budapest-4-days", "prague-4-days"],
  relatedSlugs: ["vienna-4-days", "budapest-4-days", "prague-4-days", "krakow-4-days"],
};

export const metadata: Metadata = {
  title: "Bratislava in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Bratislava itinerary — Michael's Gate, UFO Bridge viewpoint, Devin Castle ruins, Slovak wine, craft beer, boar goulash, and a Vienna day trip. Budget €40/day to luxury riverside hotels.",
  keywords: [
    "Bratislava itinerary",
    "Bratislava 3 days",
    "Bratislava travel guide 2026",
    "Bratislava budget travel",
    "Devin Castle",
    "UFO Bridge Bratislava",
    "Slovak wine",
    "Bratislava visa Indian passport",
  ],
  openGraph: {
    title: "Bratislava in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Michael's Gate, UFO Bridge, Devin Castle ruins, Slovak wine, and a Vienna day trip — Bratislava in 3 days from €40/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/bratislava-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bratislava in 3 Days: Complete 2026 Itinerary",
    description: "Michael's Gate, UFO Bridge, Devin Castle, Slovak wine, and Vienna day trip — all in 3 days from €40/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bratislava-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bratislava in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
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
          name: "Bratislava in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/bratislava-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bratislava",
      description:
        "Bratislava, Slovakia — medieval Old Town, Michael's Gate, UFO Bridge, Devin Castle ruins, Slovak wine, and the gateway to Vienna.",
      geo: { "@type": "GeoCoordinates", latitude: 48.1486, longitude: 17.1077 },
    },
  ],
};

export default function BratislavaPage() {
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
