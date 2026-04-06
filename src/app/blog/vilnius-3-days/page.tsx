import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vilnius in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "The definitive 3-day Vilnius itinerary covering budget, mid-range and luxury plans, the Republic of Užupis, Jewish heritage, Trakai Castle, visa info and costs for 2026.",
    "image": "https://incredibleitinerary.com/og/vilnius-3-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-10",
    "dateModified": "2026-04-05",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/vilnius-3-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Vilnius 3 Days", "item": "https://incredibleitinerary.com/blog/vilnius-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Vilnius",
    "description": "Capital of Lithuania with the largest Baroque old town in Northern Europe, home to the self-declared Republic of Užupis, rich Jewish heritage as the former Jerusalem of Lithuania, and the island castle of Trakai just 30 minutes away.",
    "touristType": ["History", "Architecture", "Culture", "Jewish Heritage", "Art"],
    "geo": { "@type": "GeoCoordinates", "latitude": 54.6872, "longitude": 25.2797 },
    "containedInPlace": { "@type": "Country", "name": "Lithuania" },
  },
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Vilnius 3-Day Itinerary 2026: Trip Planner",
  description: "Plan your Vilnius trip in 3 days. Plan the perfect 3 days in Vilnius, Lithuania. Detailed itineraries for every budget, the Republic of Užupis, Trakai.",
  keywords: ["Vilnius travel guide", "Vilnius 3 days", "Vilnius itinerary 2026", "Vilnius budget", "Lithuania travel", "Trakai Castle", "Užupis Republic", "Vilnius Old Town"],
  openGraph: {
    title: "Vilnius 3-Day Itinerary 2026: Trip Planner",
    description: "The largest Baroque old town in Northern Europe, an artists' republic, and a medieval island castle — your definitive 3-day Vilnius guide.",
    url: "https://incredibleitinerary.com/blog/vilnius-3-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/vilnius-3-days.jpg", width: 1200, height: 630, alt: "Vilnius Lithuania baroque Old Town with Gediminas Tower and Cathedral Square" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilnius 3-Day Itinerary 2026: Trip Planner",
    description: "A Baroque old town, an artists' republic with its own constitution and a medieval island castle — your definitive 3-day Vilnius guide.",
    images: ["https://incredibleitinerary.com/og/vilnius-3-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/vilnius-3-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Vilnius",
  country: "Lithuania",
  countryFlag: "🇱🇹",
  slug: "vilnius-3-days",
  heroQuery: "vilnius lithuania old town baroque cathedral hill gediminas",
  heroAlt: "Vilnius Lithuania baroque Old Town with Gediminas Tower and Cathedral Square",
  category: "Europe",
  date: "January 10, 2026",
  readTime: "14 min read",
  intro:
    "Vilnius holds the largest Baroque old town in Northern Europe — a UNESCO-listed cityscape of church towers, cobbled lanes and amber-coloured facades so perfectly preserved that Napoleon reportedly paused his eastward march to admire it. Across the Vilnia River, the self-declared Republic of Užupis (population: artists) declared independence from Lithuania in 1997, complete with its own president, currency, constitution ('Every person has the right to be happy') and a tiny police force that once detained tourists playfully at the border. This was also the Jerusalem of Lithuania — a city where Jewish culture and scholarship thrived for five centuries before the Holocaust extinguished it almost entirely. And above it all, Gediminas Tower stands on its hill over Cathedral Square, watching over the most underrated capital in Europe.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€40",
    bestMonths: "May–Sep",
    airport: "VNO (Vilnius International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "food", emoji: "🍽️", label: "Food & Drink" },
    { id: "daytrips", emoji: "🚌", label: "Day Trips" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required", "Schengen short-stay visa (Lithuania)"],
        ["Fee", "€80 (adult)"],
        ["Validity", "Up to 90 days in 180-day period"],
        ["Processing", "15–30 business days"],
        ["Apply at", "Lithuanian (or Schengen) embassy / VFS Global"],
        ["Documents", "Hotel booking, return flights, bank statements, travel insurance"],
        ["ETIAS", "Not applicable — full Schengen visa required"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇦🇺",
      title: "Western Passports (US / UK / AU / EU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required", "No — visa-free for Schengen area"],
        ["Stay limit", "90 days in any 180-day period"],
        ["ETIAS", "Required from mid-2025 (~€7, online pre-travel)"],
        ["Passport validity", "Must be valid 3 months beyond departure date"],
        ["UK passports", "Visa-free but ETIAS required from 2025"],
        ["Currency", "Euro (€) — Lithuania adopted EUR in 2015"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€40/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town, Cathedral Square & Gediminas Tower",
          items: [
            "Check into a central hostel (Jimmy Jumps House or Old Town Hostel, €15–18/night)",
            "Cathedral Square — Lithuania's spiritual and civic heart; Cathedral Basilica (free), Royal Palace of Lithuania exterior",
            "Gediminas Tower (Upper Castle Museum) — funicular up the hill for panoramic views (€5 including funicular)",
            "Gate of Dawn (Aušros Vartai) — the only surviving medieval city gate, housing the miraculous Black Madonna icon; free",
            "Lunch at a traditional lietuviška kafeteria — cepelinai (potato dumplings stuffed with meat, €3–5) and dark bread",
            "Explore Old Town's Baroque church trail: St Anne's Church (Napoleon's favourite), St Casimir's Church (first Baroque church in Lithuania)",
            "Dinner at Čili Kaimas or a local bistro — šaltibarščiai (cold beet soup) and potato pancakes (€7–11)",
          ],
          cost: "€32–40",
        },
        {
          day: "Day 2",
          title: "Užupis Republic & Jewish Vilnius",
          items: [
            "Morning: cross into the Republic of Užupis — read the constitution on the wall (each panel in a different language), find the angel statue",
            "Explore Užupis galleries, studios and the bohemian streetscape — free",
            "Walk to the Choral Synagogue (the only surviving synagogue of the hundreds that existed pre-WWII) — exterior and quiet reflection",
            "Old Jewish Quarter walk: Gaon of Vilna statue, Vilna Gaon Jewish State Museum (€3)",
            "Lunch at a Jewish-Lithuanian themed restaurant: matzo ball soup, rye bread (€6–9)",
            "KGB Museum / Museum of Occupations and Freedom Fights — one of the most sobering museums in Europe (€8)",
            "Evening stroll along the Neris River banks — sunset views of the city skyline",
          ],
          cost: "€28–36",
        },
        {
          day: "Day 3",
          title: "Trakai Island Castle Day Trip",
          items: [
            "Morning bus to Trakai (30 min, €1.50 each way) — one of Lithuania's most iconic sights",
            "Trakai Island Castle (€10 entry) — a 14th-century red-brick fortress rising from the middle of Lake Galvė",
            "Kayak or rowboat rental on Lake Galvė (€8–12/hour) — extraordinary views of the castle from the water",
            "Lunch at a local Karaim restaurant in Trakai: kibinai (Karaim pastries stuffed with lamb or beef, a dish unique to this community, €2–3 each)",
            "Return to Vilnius by mid-afternoon",
            "Final afternoon: Bernardine Gardens and Hill of Three Crosses walk (free)",
            "Farewell dinner in Old Town — local dark beer and smoked pork ribs (€9–13)",
          ],
          cost: "€26–34",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€90/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town History & Baroque Architecture",
          items: [
            "Check into a boutique 3-star hotel in Old Town (Artagonist Hotel or Domus Maria, €55–75/night)",
            "Guided Old Town walking tour (€18–22/person, 2.5 hours) — knowledgeable local guide essential for context",
            "Royal Palace of Lithuania interior — rebuilt on the original foundation, extraordinary Lithuanian archaeological finds (€10)",
            "Gediminas Tower and Upper Castle Museum (€5 by funicular)",
            "Lunch at Lokys (Bear) Restaurant — est. 1972 in medieval cellars, wild boar, smoked elk, hunting cuisine (€18–24)",
            "Vilnius Cathedral crypt and treasury tour (€6)",
            "Dinner at Sweet Root — one of Vilnius's most creative restaurants, foraged ingredients, chef's tasting menu (€45–60)",
          ],
          cost: "€85–105",
        },
        {
          day: "Day 2",
          title: "Užupis & Holocaust Heritage",
          items: [
            "Private Užupis art district tour with a local artist guide (€40–50, 2 hours)",
            "Gallery visits and studio open hours in Užupis — purchase local artwork",
            "Paneriai Memorial (20 min by suburban train, €2) — where 100,000 people, mostly Jewish, were killed by Nazis and their Lithuanian collaborators; deeply important site",
            "Lunch at Meat Lovers Pub — upscale Lithuanian meat dishes, craft beer (€18–24)",
            "KGB Museum guided tour with English-speaking guide (€12–16)",
            "Vilna Gaon Jewish Museum main exhibition (€5)",
            "Dinner at Ertlio Namas — farm-to-table Lithuanian cuisine, seasonal vegetables, excellent wine list (€30–40)",
          ],
          cost: "€85–105",
        },
        {
          day: "Day 3",
          title: "Trakai Castle & Karaim Culture",
          items: [
            "Private half-day tour to Trakai with guide (€60–80 including car, guide, castle entry)",
            "Trakai Island Castle interior — detailed medieval history of the Grand Duchy of Lithuania",
            "Private boat tour of Lake Galvė — early morning before crowds arrive",
            "Karaim cultural lunch at Kybynlar — the most authentic kibinai experience in Lithuania (€12–18)",
            "Return to Vilnius: afternoon at leisure — Gediminas Avenue shopping, amber boutiques",
            "Cocktails at Prohibition Bar — 1920s-themed speakeasy in Old Town",
            "Farewell dinner at 14 Horses — contemporary Lithuanian fine dining, farm heritage ingredient sourcing (€35–50)",
          ],
          cost: "€85–100",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€220/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Suite & Private History Tour",
          items: [
            "Check into Stikliai Hotel or Shakespeare Boutique Hotel — 5-star, €130–190/night",
            "Private 3.5-hour Old Town and Baroque church tour with a certified art historian (€150 for two)",
            "Exclusive access to Royal Palace treasury with a curator (book via tourism board, €100)",
            "Champagne lunch on a private terrace overlooking Cathedral Square",
            "Spa treatment at the hotel wellness centre (€80–100)",
            "Sundowner cocktails at the Skybar — panoramic Old Town views",
            "Dinner at Sweet Root chef's table — extended 8-course tasting menu with Lithuanian natural wine pairing (€120–150/person)",
          ],
          cost: "€210–260",
        },
        {
          day: "Day 2",
          title: "Užupis Private Art & Paneriai Memorial",
          items: [
            "Private breakfast prepared by in-hotel chef — served in the suite with seasonal Lithuanian produce",
            "Exclusive morning in Užupis: private studio tour arranged with the Republic's Arts Council (€80)",
            "Commission a bespoke artwork or amber piece from a Užupis atelier (€100–300)",
            "Guided private visit to Paneriai Memorial with a historian specialising in Holocaust history (€80 for two)",
            "Lunch at Amandus — elegant fine dining in a restored Old Town building (€40–55/person)",
            "Afternoon: private amber jewellery design session at a Vilnius amber atelier",
            "Dinner at 14 Horses with full sommelier service and cheese trolley (€70–90/person)",
          ],
          cost: "€210–250",
        },
        {
          day: "Day 3",
          title: "Hill of Crosses or Trakai Private Excursion",
          items: [
            "Option A — Hill of Crosses, Šiauliai (3 hrs by private car): the extraordinary site of 100,000+ crosses, deeply moving pilgrim destination",
            "Option B — Private Trakai day: exclusive early-morning castle access before public opening (€200 private tour), private lake cruise on a traditional boat",
            "Gourmet Karaim lunch prepared exclusively by the best kibinai chef in Trakai",
            "Return to Vilnius: leisure afternoon in the Botanical Gardens",
            "Private rooftop cocktails — sommelier-curated Lithuanian spirits tasting",
            "Grand farewell dinner at Stikliai Restaurant — the most refined Lithuanian table in the country, 7-course menu (€100–130/person with pairing)",
          ],
          cost: "€210–260",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€15–18 (hostel dorm)",
      food: "€10–14",
      transport: "€2–4",
      activities: "€8–12",
      total: "€35–48",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€55–75 (3-star boutique)",
      food: "€28–42",
      transport: "€8–14",
      activities: "€18–28",
      total: "€80–105",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€130–190 (5-star)",
      food: "€60–100",
      transport: "€30–60",
      activities: "€50–90",
      total: "€200–260",
    },
    {
      tier: "🏰 Trakai Day Trip",
      accommodation: "N/A",
      food: "€10–25",
      transport: "€3–80 (bus/private)",
      activities: "€10–18",
      total: "€23–123",
    },
    {
      tier: "✝️ Hill of Crosses",
      accommodation: "N/A",
      food: "€10–20",
      transport: "€30–120 (bus/car)",
      activities: "€0",
      total: "€40–140",
    },
  ],

  mistakes: [
    {
      icon: "⛪",
      title: "Treating the churches as just architecture",
      desc: "Vilnius has over 40 churches for a city of 500,000 — the highest density in Europe. Each has a story: St Anne's was so beautiful Napoleon wanted to carry it to Paris. St Casimir's was converted to a mosque and then to a Museum of Atheism under the Soviets. Skipping the history of each church means missing why Vilnius is extraordinary.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🗺️",
      title: "Not crossing into Užupis",
      desc: "Užupis is 10 minutes' walk from Old Town across a small bridge — but many tourists never go. The self-declared 'Republic' is not a gimmick: it's a genuine bohemian artists' community with a remarkable constitution ('Every person has the right to be unhappy'). The angel statue, the galleries and the atmosphere are unique in Europe.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🏰",
      title: "Skipping Trakai — 'it's only 30 minutes away'",
      desc: "The most common Vilnius regret is not making the Trakai trip. Trakai Island Castle rising from Lake Galvė is one of the most photogenic medieval sites in Northern Europe and it takes 30 minutes by bus for €1.50. There is no excuse not to go on at least one of your three days.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🕍",
      title: "Ignoring Jewish Vilnius entirely",
      desc: "Vilnius was called the 'Jerusalem of Lithuania' — a centre of Jewish learning and culture for 500 years before the Holocaust. The Vilna Gaon Jewish Museum, the Choral Synagogue, the Paneriai Memorial and the old ghetto streets are essential to understanding this city. Skipping this history leaves Vilnius half-understood.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🍽️",
      title: "Never trying cepelinai",
      desc: "Cepelinai (zeppelin-shaped potato dumplings stuffed with minced meat, served with sour cream and bacon bits) is Lithuania's national dish and one of the most satisfying comfort foods in Europe. Every tourist restaurant serves it for €3–6. Not trying it is an unforgivable miss. Order it on Day 1.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🗓️",
      title: "Visit on April 1st — Užupis Independence Day",
      desc: "The Republic of Užupis officially celebrates its independence on April 1st every year (deliberately chosen). The neighbourhood throws a festival with music, art, free beer and theatrical border ceremonies. It's the most fun you can have in Vilnius and it's completely free — just show up.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🚌",
      title: "Take the bus to Trakai, not a taxi",
      desc: "Bus 901 from Vilnius bus station to Trakai runs every 30–60 minutes and costs €1.50 each way — the journey takes 30 minutes and is scenic. Taxis and tour agencies charge €15–40 each way for the same trip. Save the money for the boat rental on the lake.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🍺",
      title: "Drink Lithuanian dark beer (tamsusis alus)",
      desc: "Lithuania has a centuries-old brewing tradition. Tamsusis (dark) lager is malty, rich and completely different from German or Irish dark beers. Svyturys, Utenos and Volfas Engelman are the main brands. Order tamsusis at any bar — it costs €2–3 and is one of the great unsung beers of Europe.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "📜",
      title: "Read the Užupis Constitution in full",
      desc: "The Užupis Constitution is printed on mirrors along the main street, with each panel in a different language. It includes articles like 'Every person has the right to be idle', 'A dog has the right to be a dog' and 'Every person has the right to die, but this is not an obligation.' It is simultaneously absurdist and deeply humane — read every word.",
      color: "border-green-200 bg-green-50",
    },
  ],

  faqs: [
    {
      q: "How do I get from Riga to Vilnius?",
      a: "The most comfortable option is Lux Express or Ecolines bus (4–5 hours, €12–22 booked in advance). Buses are modern with WiFi, power points and reclining seats. There's no direct train between Riga and Vilnius. Driving takes about the same time via the Via Baltica highway. Flying is available but rarely cost-effective for the short distance.",
    },
    {
      q: "Is Vilnius cheaper than Tallinn and Riga?",
      a: "Yes — Vilnius is marginally the cheapest of the three Baltic capitals. Budget travellers can live comfortably on €35–45/day. Restaurant meals are slightly cheaper, hostel beds slightly lower, and local transport (bus to Trakai, €1.50 return) is excellent value. The gap is not large, but Vilnius gives the most for the least across all budget tiers.",
    },
    {
      q: "What is the Republic of Užupis?",
      a: "Užupis is a neighbourhood across the Vilnia River from Old Town that declared itself an independent republic on April 1, 1997. It has a president (artist Romas Lileikis), its own currency, a 12-person army, and a 41-article constitution. It's not legally recognised but is very much alive culturally — the bohemian community of artists and creatives who live there take it seriously. It's entirely free to visit and walk through.",
    },
    {
      q: "Is the Hill of Crosses worth the day trip from Vilnius?",
      a: "For travellers with a particular interest in religion, pilgrimage sites or unusual travel experiences, yes — absolutely. The Hill of Crosses near Šiauliai (3 hours each way by bus or 1.5 hours by car) has over 100,000 crosses of every size, style and origin, left by pilgrims over centuries and through Soviet occupation when the government repeatedly bulldozed the hill and the crosses kept reappearing. It is one of the most astonishing and affecting places in the Baltic states. If you have a car or join a tour, go.",
    },
  ],

  combineWith: [
    "Combine with Riga (4–5 hrs by bus north) for two Baltic capitals in one trip",
    "Add Tallinn (9 hrs by bus or 1 hr by flight) to complete the full Baltic trio",
    "Trakai Island Castle (30 min by bus) — unmissable medieval water castle",
    "Kaunas (1.5 hrs by bus) — Lithuania's 2nd city, art deco architecture and Ninth Fort",
    "Hill of Crosses, Šiauliai (3 hrs by bus) — one of Europe's most extraordinary pilgrimage sites",
  ],

  relatedSlugs: [
    "tallinn-3-days",
    "riga-3-days",
    "warsaw-3-days",
    "krakow-3-days",
    "gdansk-3-days",
  ],

  galleryQuery: "vilnius lithuania baroque old town cathedral gediminas",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function VilniusPage() {
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
