import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tallinn in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "The definitive 3-day Tallinn itinerary covering budget, mid-range and luxury plans, visa info, costs, tips and mistakes to avoid.",
    "image": "https://incredibleitinerary.com/og/tallinn-3-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-10",
    "dateModified": "2026-04-05",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/tallinn-3-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Tallinn 3 Days", "item": "https://incredibleitinerary.com/blog/tallinn-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Tallinn",
    "description": "The best-preserved medieval old town in Northern Europe, capital of Estonia, a UNESCO World Heritage Site where Hanseatic-era limestone towers and Gothic spires stand unchanged since the 14th century.",
    "touristType": ["Culture", "History", "Architecture", "Christmas Markets"],
    "geo": { "@type": "GeoCoordinates", "latitude": 59.437, "longitude": 24.7536 },
    "containedInPlace": { "@type": "Country", "name": "Estonia" },
  },
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Tallinn in 3 Days: Complete 2026 Travel Guide (Budget to Luxury) | IncredibleItinerary",
  description: "Plan the perfect 3 days in Tallinn, Estonia. Detailed itineraries for every budget, visa info for Indian & Western passports, costs, top mistakes to avoid and insider tips for 2026.",
  keywords: ["Tallinn travel guide", "Tallinn 3 days", "Tallinn itinerary 2026", "Tallinn budget", "Estonia travel", "Tallinn Old Town", "Tallinn Christmas market"],
  openGraph: {
    title: "Tallinn in 3 Days: The Complete 2026 Travel Guide",
    description: "Medieval towers, Viking-age feasts and the world's most digital nation — your definitive 3-day Tallinn guide covering every budget.",
    url: "https://incredibleitinerary.com/blog/tallinn-3-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/tallinn-3-days.jpg", width: 1200, height: 630, alt: "Tallinn Estonia medieval Old Town towers and spires from Toompea Hill" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tallinn in 3 Days: Complete 2026 Travel Guide",
    description: "Medieval towers, Viking-age feasts and the world's most digital nation — your definitive 3-day Tallinn guide.",
    images: ["https://incredibleitinerary.com/og/tallinn-3-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/tallinn-3-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Tallinn",
  country: "Estonia",
  countryFlag: "🇪🇪",
  slug: "tallinn-3-days",
  heroQuery: "tallinn estonia old town medieval towers Baltic",
  heroAlt: "Tallinn Estonia medieval Old Town towers and spires from Toompea Hill",
  category: "Europe",
  date: "January 10, 2026",
  readTime: "14 min read",
  intro:
    "Step through Tallinn's stone archways and you walk into the best-preserved medieval old town in Northern Europe — limestone towers and Gothic spires that have stood unchanged since the Hanseatic League ruled Baltic trade in the 14th century. This is the nation that declared WiFi a human right, yet you can sit down to elk stew and black rye bread in a restaurant that has been serving customers since the 1400s. And every December, the Town Hall Square transforms into a Christmas market so breathtakingly atmospheric — mulled wine, gingerbread, candlelight on cobblestones — that it inspired German-style markets across Europe. Tallinn is the fairytale capital of the Baltic, and it costs a fraction of what you'd spend in Lisbon or Prague.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€45",
    bestMonths: "May–Sep or Dec (Christmas Market)",
    airport: "TLL (Lennart Meri)",
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
        ["Visa required", "Schengen short-stay visa (Estonia)"],
        ["Fee", "€80 (adult)"],
        ["Validity", "Up to 90 days in 180-day period"],
        ["Processing", "15–30 business days"],
        ["Apply at", "Estonian (or Schengen) embassy / VFS Global"],
        ["Documents", "Hotel booking, return ticket, bank statements, travel insurance"],
        ["ETIAS", "Not applicable — full visa required"],
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
        ["ETIAS", "Required from mid-2025 (~€7, online pre-travel authorisation)"],
        ["Passport validity", "Must be valid for 3 months beyond departure"],
        ["UK passports", "Visa-free but ETIAS required from 2025"],
        ["Currency", "Euro (€) — Estonia adopted EUR in 2011"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€45/day",
      days: [
        {
          day: "Day 1",
          title: "Medieval Old Town on Foot",
          items: [
            "Arrive, check into a hostel dorm in Old Town (Old Town Hostel Alur or similar, ~€18/night)",
            "Walk Toompea Hill: Alexander Nevsky Cathedral (free), Toompea Castle, three iconic viewpoints over the lower town",
            "Explore Lower Town: Town Hall Square (Raekoja Plats), medieval pharmacy (Raeapteek, open since 1422), Gothic Town Hall",
            "Climb St Olaf's Church tower (€3) for panoramic views across the Baltic skyline",
            "Lunch at a market stall near the central market — black rye bread sandwich with smoked fish (€3–5)",
            "Viru Gate evening stroll: the two medieval towers illuminated after dark",
            "Dinner at Olde Hansa (medieval restaurant est. 1400s) — elk stew + black bread (€12–15 for a full meal)",
          ],
          cost: "€38–45",
        },
        {
          day: "Day 2",
          title: "Telliskivi, Kadriorg & Digital Estonia",
          items: [
            "Morning at Telliskivi Creative City: street art murals, independent coffee shops, weekend flea market (free entry)",
            "F-Hoone cafe for breakfast — avocado toast or local pastry (€5–7)",
            "Walk through Kalamaja wooden house district — colourful 19th-century timber architecture",
            "Kadriorg Park (free): Peter the Great's baroque palace gardens, KUMU Art Museum exterior",
            "Lunch at Tallinn Central Market — fresh produce, cheap hot meals, smoked fish (€4–6)",
            "Estonian History Museum (Toompea branch) — €7, essential for understanding the Soviet occupation",
            "Evening: e-Estonia Digital Government showroom (free, book online) — how Estonia built the world's most digital government",
          ],
          cost: "€30–38",
        },
        {
          day: "Day 3",
          title: "Open Air Museum & Pirita Coast",
          items: [
            "Estonian Open Air Museum (Rocca al Mare) — 18th–20th century farmsteads, windmills, a village inn (€10)",
            "Bus #21 from Old Town — scenic ride through leafy suburbs",
            "Pirita Convent ruins (15th century, destroyed by Tsar Ivan the Terrible in 1577) — free, atmospheric",
            "Pirita beach walk along the Baltic Sea — free",
            "Lunch at a Pirita cafe — fish soup and rye bread (€6–8)",
            "Return to Old Town for last souvenir shopping: handmade linen, juniper wood items, Estonian craft gin",
            "Departure from TLL — pre-book the Tallinn Airport bus (€2)",
          ],
          cost: "€28–36",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€100/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Deep Dive & Medieval Dining",
          items: [
            "Check into a 3-star boutique hotel inside Old Town walls (Hotel Uniquestay or similar, €55–75/night)",
            "Guided 2-hour Old Town walking tour (€18) — knowledgeable local guides bring medieval history to life",
            "Alexander Nevsky Cathedral interior visit, Toompea Castle grounds, Tall Hermann Tower",
            "Lunch at Restoran Ribe — Estonian modern cuisine, elk carpaccio (€15–20)",
            "KUMU Art Museum — Estonia's premier art museum in a prize-winning building (€14)",
            "Kadriorg Palace museum — Peter the Great's baroque folly (€8)",
            "Dinner at Olde Hansa — full medieval feast with roasted boar and mead (€30–35)",
          ],
          cost: "€85–105",
        },
        {
          day: "Day 2",
          title: "Telliskivi Culture & Kadriorg Gardens",
          items: [
            "Slow breakfast at Telliskivi's Kohvik Klaus (top-rated cafe) — pastries and specialty coffee (€10–12)",
            "Telliskivi Creative City market and gallery hop — street art and artisan studios",
            "Kalamaja neighbourhood architecture walk with neighbourhood guide app",
            "Lunch at Peeter restaurant — Estonian bistro, pickled herring and local cheeses (€18–22)",
            "Afternoon at Seaplane Harbour (Lennusadam) — extraordinary aviation and maritime museum housed in a historic hangar (€16)",
            "Explore the submarine Lembit and historic flying boats",
            "Dinner at NOA Restaurant — contemporary Nordic cuisine overlooking the Baltic Sea (€40–55 for two courses)",
          ],
          cost: "€95–115",
        },
        {
          day: "Day 3",
          title: "Lahemaa Day Trip or Helsinki Ferry",
          items: [
            "Option A — Lahemaa National Park day trip (€40 guided): coastal boulders, manor houses, hiking trails",
            "Option B — Helsinki day trip by Tallink Silja ferry (€25–40 return, 2.5 hrs each way): Helsinki Cathedral, Market Square, Esplanade Park",
            "Packed lunch on the ferry or National Park picnic",
            "Return to Tallinn by early evening",
            "Final dinner in Old Town at Rataskaevu 16 — beloved local favourite, duck confit and Estonian mushroom risotto (€25–35)",
            "Evening stroll through illuminated medieval walls and towers",
          ],
          cost: "€85–100",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€240/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Suite & Private History Tour",
          items: [
            "Check into Hotel Telegraaf or Schlössle Hotel — 5-star boutique inside medieval townhouse walls (€150–220/night)",
            "Private 3-hour Old Town history tour with a certified guide (€120 for two) — access to private courtyards and medieval vaults",
            "Champagne lunch at the hotel rooftop overlooking Toompea",
            "Private KUMU Art Museum curator-guided tour (book in advance, €80)",
            "Spa session at the hotel's medieval vault wellness centre",
            "Dinner at restaurant Tchaikovsky in the Telegraaf Hotel — Russian Imperial cuisine, sommelier wine pairing (€80–100 per person)",
          ],
          cost: "€220–260",
        },
        {
          day: "Day 2",
          title: "Helicopter Sightseeing & Nordic Spa",
          items: [
            "Sunrise helicopter flight over Tallinn Old Town and the Baltic coast (book via Estonia Aviation Museum, €150–200/person)",
            "Brunch at Frenchy — French-Estonian fusion, smoked salmon eggs Benedict (€20–25)",
            "Private boat tour of Tallinn Bay — views of the medieval skyline from the sea (€80 for two hours)",
            "Afternoon: Laulasmaa Spa Resort (30 min from Tallinn) — premium Nordic spa with outdoor pools (€60–80/person)",
            "Return to Tallinn for cocktails at the Lounge 24 bar atop the Radisson Blue — panoramic views",
            "Dinner at Bordoo (Hotel Three Sisters) — award-winning modern European cuisine, 5-course tasting menu (€90–110 per person with wine pairing)",
          ],
          cost: "€230–280",
        },
        {
          day: "Day 3",
          title: "Private Lahemaa Excursion & Farewell",
          items: [
            "Private chauffeured car to Lahemaa National Park (€180 for full-day private tour)",
            "Palmse Manor estate visit — restored Baltic-German manor with manicured gardens",
            "Guided bog walk on wooden boardwalks — primeval Estonian landscape",
            "Gourmet picnic prepared by the hotel kitchen, served at a lakeside clearing",
            "Stop at Vihula Manor for a craft gin tasting — estate-produced spirits",
            "Return to Tallinn — spa wind-down and early packing",
            "Farewell dinner at the hotel restaurant with Estonian wine selection (€70–90)",
          ],
          cost: "€230–260",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18–22 (hostel dorm)",
      food: "€12–16",
      transport: "€3–5",
      activities: "€7–12",
      total: "€40–55",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€55–75 (3-star boutique)",
      food: "€30–45",
      transport: "€10–15",
      activities: "€20–30",
      total: "€90–120",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€150–220 (5-star)",
      food: "€60–100",
      transport: "€30–50",
      activities: "€50–100",
      total: "€200–280",
    },
    {
      tier: "🎄 Dec (Christmas)",
      accommodation: "€30–90 (premium season)",
      food: "€15–50",
      transport: "€5–15",
      activities: "€10–30",
      total: "€60–185",
    },
    {
      tier: "🚢 Day-Tripper (Helsinki)",
      accommodation: "N/A (day trip)",
      food: "€15–40",
      transport: "€25–45 (ferry)",
      activities: "€10–20",
      total: "€50–105",
    },
  ],

  mistakes: [
    {
      icon: "🏨",
      title: "Booking accommodation outside Old Town",
      desc: "Old Town is compact and highly walkable — staying outside means taxis or buses for every outing. The extra €10–20 for an Old Town hotel pays for itself immediately in convenience and atmosphere. Hostels inside the walls start from €18.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "💶",
      title: "Assuming it will be as expensive as Scandinavia",
      desc: "Tallinn is not Helsinki. Estonia uses the Euro but costs are 40–50% lower than Nordic countries. A full restaurant meal with a beer costs €10–18. Many first-timers over-budget and under-spend — plan for €45/day on a budget and you'll live well.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🎄",
      title: "Visiting in December without booking months ahead",
      desc: "Tallinn's Christmas Market (late November–January) is one of Europe's finest and widely recognised as such. Accommodation fills up in October for peak December weekends. Book at least 3 months in advance or expect triple the normal prices.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚢",
      title: "Skipping the Helsinki day trip",
      desc: "Helsinki is only 2.5 hours away by high-speed Tallink ferry, and the crossing is cheaper than a train in Western Europe. Many travellers skip it thinking they don't have time — but leaving on an 8am ferry and returning by 9pm is a full and easy day out.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🗺️",
      title: "Spending all 3 days only inside Old Town walls",
      desc: "Old Town is extraordinary but Telliskivi, Kalamaja, Kadriorg and the Open Air Museum are essential Tallinn. They're 10–25 minutes by foot or cheap bus. First-timers who skip them miss the living, modern and natural sides of the city entirely.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🎟️",
      title: "Buy the Tallinn Card for museums",
      desc: "The Tallinn Card (€26–48 for 24–72 hrs) gives free entry to over 40 museums and attractions plus unlimited public transport. It pays for itself in a single day if you plan to visit KUMU, the Seaplane Harbour and the Open Air Museum.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🍺",
      title: "Try Vana Tallinn liqueur and kama dessert",
      desc: "Vana Tallinn is a sweet rum-based herbal liqueur that locals drink straight or poured over ice cream. Kama is a traditional Estonian dessert — a blend of roasted grain flour mixed with buttermilk or yoghurt. Both are authentic, cheap and delicious.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "📱",
      title: "Use the Bolt ride-hailing app",
      desc: "Bolt (founded in Tallinn) is cheaper than taxis across Estonia and the app works perfectly. Taxis from the airport to Old Town cost €8–12 via Bolt vs €15–25 for a regular taxi. Download it before you land.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌐",
      title: "Visit the e-Estonia Showroom",
      desc: "Estonia pioneered digital governance — e-Residency, online voting, digital health records. The free showroom in central Tallinn explains how a country of 1.3 million became the most digitally advanced nation on Earth. Book a free tour online in advance.",
      color: "border-green-200 bg-green-50",
    },
  ],

  faqs: [
    {
      q: "Is Tallinn safe for solo travellers and women travelling alone?",
      a: "Yes, Tallinn consistently ranks among Europe's safer capitals. Petty theft is low by European standards. Old Town at night is busy with tourists and well-lit. Normal city precautions apply — be aware of your surroundings in less-lit side streets after midnight. The local police presence is visible and responsive.",
    },
    {
      q: "How many days do you actually need in Tallinn?",
      a: "Three days is ideal for a first visit — enough to cover Old Town thoroughly, take a day trip (Helsinki or Lahemaa), and explore neighbourhoods like Telliskivi and Kalamaja. Two days works if you focus only on Old Town and one neighbourhood. Five days lets you add Lahemaa, Pärnu and a proper Helsinki excursion.",
    },
    {
      q: "What is the best time of year to visit Tallinn?",
      a: "May–September for mild weather (15–22°C), long daylight hours and outdoor cafe culture. July–August is warmest but busiest. December for the Christmas market (arguably Europe's most atmospheric). January–February is beautiful in snow but cold (-5 to -10°C) — very few crowds. Avoid late March/April for the best rates.",
    },
    {
      q: "Can Indian passport holders get a Schengen visa easily for Estonia?",
      a: "Yes, though it requires planning. Apply at the Estonian Embassy or through VFS Global at least 30 days before travel. You'll need confirmed accommodation, return flights, travel insurance (minimum €30,000 cover), bank statements showing sufficient funds, and an employment letter. Estonian visa officers are generally efficient and the rejection rate for well-prepared applications is low.",
    },
  ],

  combineWith: [
    "Combine with Riga (4.5 hrs by bus) for a Baltic capitals double-header",
    "Add Vilnius (9 hrs by bus or 1 hr by flight) to complete all three Baltic states",
    "Helsinki day trip by Tallink ferry (2.5 hrs each way) — no extra visa needed for Schengen travellers",
    "Lahemaa National Park full-day excursion (1 hr from Tallinn) for Estonian wilderness",
    "Stockholm by overnight ferry (Tallink, 16 hrs) — a classic Baltic adventure route",
  ],

  relatedSlugs: [
    "riga-3-days",
    "vilnius-3-days",
    "helsinki-3-days",
    "stockholm-3-days",
    "warsaw-3-days",
  ],

  galleryQuery: "tallinn estonia old town medieval architecture",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function TallinnPage() {
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
