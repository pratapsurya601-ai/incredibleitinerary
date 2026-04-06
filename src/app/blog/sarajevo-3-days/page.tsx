import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sarajevo in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description":
      "Plan the perfect 3 days in Sarajevo, Bosnia & Herzegovina — from the Ottoman Baščaršija bazaar and Latin Bridge to the Tunnel of Hope and a day trip to Mostar. Budget from €35/day.",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": {
      "@type": "Organization",
      "name": "IncredibleItinerary",
      "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-04-05",
    "image": "https://incredibleitinerary.com/images/sarajevo-bascarsija-mosque.jpg",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/sarajevo-3-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Sarajevo 3 Days", "item": "https://incredibleitinerary.com/blog/sarajevo-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Sarajevo",
    "description": "The Jerusalem of Europe — a city where four faiths coexist within 500 metres, survivor of the longest modern siege, and gateway to the Balkans.",
    "geo": { "@type": "GeoCoordinates", "latitude": 43.8563, "longitude": 18.4131 },
    "touristType": ["History enthusiast", "Cultural tourist", "Budget traveller", "Balkans explorer"],
    "url": "https://incredibleitinerary.com/blog/sarajevo-3-days",
  },
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Sarajevo 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Sarajevo trip in 3 days. The ultimate Sarajevo 3-day itinerary — Baščaršija bazaar, Latin Bridge, Tunnel of Hope, War Childhood Museum, and a.",
  keywords: [
    "Sarajevo itinerary 3 days",
    "Sarajevo travel guide 2026",
    "Sarajevo budget travel",
    "Baščaršija old bazaar",
    "Sarajevo Tunnel of Hope",
    "Mostar day trip",
    "Bosnia travel guide",
    "Sarajevo siege history",
    "Jerusalem of Europe",
    "Balkans travel",
  ],
  openGraph: {
    title: "Sarajevo 3-Day Itinerary 2026: Trip Planner",
    description:
      "Ottoman bazaars, four faiths in 500 metres, the siege tunnel, and Europe's most beautiful bridge one hour away — Sarajevo is the Balkans' most underrated city.",
    url: "https://incredibleitinerary.com/blog/sarajevo-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://incredibleitinerary.com/images/sarajevo-bascarsija-mosque.jpg",
        width: 1200,
        height: 630,
        alt: "Sarajevo Bosnia Baščaršija old bazaar with Ottoman mosque and minaret",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarajevo 3-Day Itinerary 2026: Trip Planner",
    description:
      "Ottoman bazaars, siege history, Bosnian coffee, and a day trip to Mostar — the most resilient city in Europe from €35/day.",
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/sarajevo-3-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Sarajevo",
  country: "Bosnia & Herzegovina",
  countryFlag: "🇧🇦",
  slug: "sarajevo-3-days",
  heroQuery: "sarajevo bosnia old bazaar baščaršija ottoman architecture mosque",
  heroAlt: "Sarajevo Bosnia Baščaršija old bazaar with Ottoman mosque and minaret",
  category: "Europe",
  date: "January 15, 2026",
  readTime: "13 min read",

  intro:
    "The city where the East truly meets the West: a Catholic cathedral, Orthodox church, mosque, and synagogue all within 500 metres of each other in a city called the Jerusalem of Europe, a Baščaršija bazaar that feels like Istanbul arrived in the Alps, the site where the assassination of Archduke Franz Ferdinand ignited the First World War, and a city that survived the longest siege in the history of modern warfare — 1,425 days from 1992 to 1996 — and emerged rebuilt, defiant, and warmer to visitors than almost anywhere on Earth. This is Sarajevo, the most resilient city in Europe.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€35",
    bestMonths: "Apr–Jun or Sep–Oct",
    airport: "SJJ (Sarajevo International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "history", emoji: "🏛️", label: "History You Need to Know" },
    { id: "food", emoji: "🥘", label: "Bosnian Food Guide" },
    { id: "daytrips", emoji: "🌉", label: "Day Trips: Mostar & Beyond" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "No — India is on Bosnia's visa-free list"],
        ["Stay", "Up to 30 days visa-free per entry"],
        ["Passport", "Must be valid for duration of stay"],
        ["Evidence", "Hotel booking and return/onward ticket recommended"],
        ["Note", "Bosnia is NOT in the EU or Schengen — separate entry from Croatia/Serbia"],
        ["Currency", "Bosnian Convertible Mark (BAM); 1 EUR ≈ 1.96 BAM"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "Visa-free for all major Western passports"],
        ["Stay", "Up to 90 days within 180-day period"],
        ["No ETIAS", "Bosnia is not in Schengen — no ETIAS required"],
        ["Passport", "Valid for duration of stay (3 months extra recommended)"],
        ["Entry stamp", "You will receive a border stamp — keep your passport safe"],
        ["Tip", "Bosnia is outside the Schengen zone — days here do not count against your 90/180 Schengen allowance"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€35/day",
      days: [
        {
          day: "Day 1",
          title: "Baščaršija & the Multi-Faith Mile",
          items: [
            "Morning: Baščaršija Ottoman bazaar — copper craftsmen still working as they have for 500 years; the Pigeon Square fountain (Sebilj) is the symbolic heart of the city",
            "Gazi Husrev-beg Mosque (€1 entry, remove shoes) — the most important Ottoman mosque in the Balkans, built 1531",
            "Walk 500 metres and visit Sacred Heart Cathedral (Catholic, free), Old Orthodox Church (€1), and the 16th-century Sephardic Synagogue — four faiths in a five-minute walk",
            "Budget lunch: ćevapi at Ćevabdžinica Željo — the most famous ćevapi restaurant in Bosnia, full meal under €5",
            "Afternoon: Latin Bridge — stand on the exact spot where Gavrilo Princip shot Archduke Franz Ferdinand on June 28, 1914, starting WWI",
            "Evening: Bosnian coffee ritual at a traditional kafana — coffee with a cube of lokum (Turkish delight) and water; cost €1.50",
          ],
          cost: "€25–35 (hostel €12, meals €10, coffee €2, small donations €2)",
        },
        {
          day: "Day 2",
          title: "War Childhood Museum + Tunnel of Hope",
          items: [
            "Morning: War Childhood Museum (€5) — one of the most moving museums in Europe; 50 objects from people who were children during the 1992–96 siege",
            "Yellow Fortress (Žuta Tabija) for panoramic views over the red-roofed city in its valley — completely free, 10 min walk uphill",
            "Budget lunch: burek (meat-filled pastry) at a pekara (bakery) — a whole burek for €2–3",
            "Afternoon: Tunnel of Hope museum (€5 + taxi ~€8 each way) — the 800-metre tunnel under the airport runway that kept Sarajevo alive during the siege; essential visit",
            "Return to centre; Vrelo Bosne park (€1 tram + walk) — emerald springs at the source of the Bosna river, rowboat hire €3",
            "Evening: Cheap local dinner at a meyhane (taverna) in Baščaršija — lamb stew or dolma for €6–8",
          ],
          cost: "€30–38 (museums €10, taxi €16, meals €12, tram €2)",
        },
        {
          day: "Day 3",
          title: "Mostar Day Trip (or Srebrenica)",
          items: [
            "Morning: Bus to Mostar — Autoprevoz or Student bus from Sarajevo bus station, €10–12 each way, ~90 minutes",
            "Stari Most bridge in Mostar — the rebuilt 16th-century Ottoman bridge over the Neretva river, a UNESCO World Heritage Site and the most beautiful bridge in Europe",
            "Old town Mostar: Koski Mehmed Pasha Mosque with minaret climb views (€3), old bazaar, craft shops",
            "Budget lunch in Mostar: grilled river trout at a restaurant above the river — €8–10",
            "Afternoon: Return bus to Sarajevo (departs ~16:00–17:00); arrive Sarajevo evening",
            "Optional: instead of Mostar, take a guided day trip to Srebrenica Memorial (€25–35 with tour operator) — the most important memorial in Europe, sobering and essential",
          ],
          cost: "€30–40 (bus €22, meals €15, Mostar entries €5)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€75/day",
      days: [
        {
          day: "Day 1",
          title: "Deep Dive into the Old City",
          items: [
            "Morning: Guided walking tour of the old city with a local historian (€15–20 for 2 hours) — essential context for the Ottoman, Austro-Hungarian, and Yugoslav layers of the city",
            "Gazi Husrev-beg Mosque, Bezistan (covered bazaar), and the Brusa Bezistan Museum (€2) in the original 16th-century trading hall",
            "Lunch at Inat Kuća (Spite House) restaurant — a famous Austro-Hungarian-era restaurant, traditional Bosnian dishes, mains €10–15",
            "Afternoon: Museum of Sarajevo 1878–1918 at the Latin Bridge building (€3) — focused on the assassination that changed the world",
            "History Museum of Bosnia and Herzegovina (€3) — extraordinarily moving siege-era displays",
            "Evening: Dinner at Dveri restaurant — popular with locals, excellent ćevapi and lamb dishes, budget-friendly for mid-range at €20–25",
          ],
          cost: "€70–85 (accommodation €35, meals €40, tours/museums €25)",
        },
        {
          day: "Day 2",
          title: "War Childhood Museum + Tunnel + Yellow Fortress",
          items: [
            "Morning: War Childhood Museum — take your time; it's small but extraordinarily powerful",
            "Coffee and reflection at a terrace café in the Baščaršija square — watch the city wake up (€2–3)",
            "Taxi to Tunnel of Hope (€8 each way) — the tunnel itself is only 20 metres accessible now, but the museum and film are unmissable",
            "Lunch at Sarajevo Brewery restaurant — the oldest brewery in Bosnia (1864), excellent food and local Sarajevsko beer (€20–25)",
            "Afternoon: Yellow Fortress sunset — best viewpoint in the city at golden hour, stunning panorama of the minaret-spiked skyline",
            "Evening: Vrelo Bosne tram trip (30 min) for a sunset walk at the emerald springs — locals' favourite picnic spot",
          ],
          cost: "€75–90 (accommodation €35, taxis €20, meals €30, museums €10)",
        },
        {
          day: "Day 3",
          title: "Mostar by Private Car or Guided Tour",
          items: [
            "Book a day tour to Mostar with a local guide (€35–50 per person including transport) — far better than the bus; guide explains the 1990s war context",
            "Stari Most with time to watch the traditional bridge divers — local young men who dive 21 metres into the Neretva for tips (tips expected, €5)",
            "Koski Mehmed Pasha Mosque climb — best views of the bridge and river gorge",
            "Lunch at a riverside restaurant with Stari Most views — grilled lamb and river trout (€20–25)",
            "Visit Blagaj Tekke on the return — a 16th-century Dervish monastery built into a cliff at the source of the Buna river, 12km from Mostar",
            "Return Sarajevo late afternoon; evening stroll through Baščaršija for final Bosnian coffee and lokum",
          ],
          cost: "€75–90 (tour €45, meals €35, tips €10)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€180/day",
      days: [
        {
          day: "Day 1",
          title: "Private History Immersion & Rooftop Dining",
          items: [
            "Check into Hotel Europe (grand Austro-Hungarian building, €120–180/night) or Pansion Lion boutique hotel in Baščaršija",
            "Private historian-guided tour of the full old city — 4 hours, deep dive into Ottoman, Austro-Hungarian, Yugoslav, and post-siege Sarajevo (€80–120)",
            "Lunch at Inat Kuća with a curated menu of traditional Bosnian dishes — Sarajevo-style lamb under a sac, Bosnian pie, homemade desserts (€35–45)",
            "Private access to the Gazi Husrev-beg Library (one of the oldest Islamic manuscript collections in Europe) with a curator — arrange in advance",
            "Afternoon at leisure: bespoke copper-craft workshop in Baščaršija, make your own džezva (coffee pot) with an artisan (€40–60)",
            "Evening: Dinner at Barhana restaurant or a rooftop terrace restaurant with city view — grilled meats and Bosnian wine (€50–70)",
          ],
          cost: "€180–240 (hotel €150, private tour €100, meals €100, workshop €50)",
        },
        {
          day: "Day 2",
          title: "Tunnel, War Museums & Culinary Tour",
          items: [
            "Private car to Tunnel of Hope with a guide who lived through the siege (€60–80 for car + guide) — personal testimony transforms the experience",
            "War Childhood Museum — take the audio guide (€2 extra) and spend 90 minutes",
            "Private food tour of Sarajevo's markets and producers (€60–80 per person) — includes market tastings, traditional bakeries, cheese shops",
            "Lunch: a full Bosnian tasting spread arranged for you at a traditional home kitchen (€40–50 per person) — the most authentic food experience in the city",
            "Afternoon: Yellow Fortress with a sunset cocktail at the fortress-top terrace bar",
            "Evening: Bosnia wine tasting dinner — Herzegovinian wines paired with traditional dishes at a wine bar (€60–80)",
          ],
          cost: "€185–230 (car €70, food tour €70, meals €80, museums €15)",
        },
        {
          day: "Day 3",
          title: "Private Mostar, Blagaj & Kravice Waterfalls",
          items: [
            "Private car with driver-guide for full-day Herzegovina tour (€80–120 for vehicle)",
            "Mostar: private early-morning arrival before tourist crowds — Stari Most bridge feels like a different place at 08:00",
            "Blagaj Tekke — private Dervish monastery tour with the resident keeper if arranged in advance",
            "Kravice Waterfalls — Bosnia's most spectacular waterfall, an emerald horseshoe cascade, swim in summer (€3 entry)",
            "Lunch at a konoba in Mostar — private table with curated Herzegovinian menu, local wine, grilled lamb (€40–55)",
            "Return Sarajevo; farewell dinner at Restoran Park Princeva — outdoor terrace with the most panoramic city view, traditional Bosnian feast (€50–70)",
          ],
          cost: "€180–220 (private car €100, meals €100, entries €25)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "Hostel dorm €10–15",
      food: "Burek, ćevapi, local cafés €8–12",
      transport: "Tram + walking €3–5",
      activities: "Museums + mosques €5–10",
      total: "~€35/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "Boutique guesthouse €35–55",
      food: "Local restaurants €25–35",
      transport: "Taxis + tram €15",
      activities: "Tours + museums €20",
      total: "~€75/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "Hotel Europe €120–180",
      food: "Fine dining + wine €70–90",
      transport: "Private car €40",
      activities: "Private tours €80",
      total: "~€180/day",
    },
    {
      tier: "🌉 Mostar Day Trip",
      accommodation: "No change",
      food: "Lunch in Mostar €12–20",
      transport: "Bus €22 or car €45",
      activities: "Mosque + bridge €5",
      total: "+€40–70 total",
    },
    {
      tier: "🕯️ Srebrenica Tour",
      accommodation: "No change",
      food: "Packed lunch recommended",
      transport: "Included in tour",
      activities: "Guided tour €25–35",
      total: "+€30–40 total",
    },
  ],

  mistakes: [
    {
      icon: "💱",
      title: "Not carrying Bosnian convertible marks (BAM)",
      desc: "Bosnia is NOT in the EU — the currency is the Bosnian Convertible Mark (BAM), fixed at 1 EUR = 1.9558 BAM. Many small stalls, trams, mosques, and local cafés are cash-only. ATMs are widely available in the centre, but carry €30–50 worth of BAM at all times. Euros are accepted some places but you'll get poor rates.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🕌",
      title: "Being disrespectful at religious sites",
      desc: "Sarajevo is a living, active multi-faith city — not a museum. The Gazi Husrev-beg Mosque holds real prayers five times a day. Remove shoes before entering mosques, cover shoulders and knees (scarves available at entrances), and be quiet during prayer times. The same respect applies in the Orthodox church and synagogue.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚌",
      title: "Assuming Bosnia uses Schengen entry rules",
      desc: "Bosnia and Herzegovina is NOT in the EU and NOT in Schengen. If you're entering from Croatia (EU/Schengen), you will go through a full border crossing with passport stamping. Days in Bosnia do NOT count against your 90-day Schengen allowance — this is actually good news for those on tight Schengen schedules.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "📸",
      title: "Treating war sites as photo opportunities",
      desc: "The Tunnel of Hope, War Childhood Museum, and any Sarajevo Rose (red-filled shell crater in the pavement) are sites of genuine trauma. Many residents you pass lived through the siege. Photograph thoughtfully, speak quietly in museums, and remember that for many locals this history is personal, not distant.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🍽️",
      title: "Eating only in the Baščaršija tourist strip",
      desc: "The most famous ćevapi restaurants in Baščaršija (Žjeljo, Hodžić) are excellent and not overpriced — but the best burek is at local pekara (bakeries) away from the tourist strip, open from 06:00. Ask your hostel to point you to the nearest pekara for a €2 breakfast that locals eat every day.",
      color: "border-green-200 bg-green-50",
    },
  ],

  tips: [
    {
      icon: "☕",
      title: "The Bosnian coffee ritual is not optional",
      desc: "Bosnian coffee (Bosanska kafa) is served differently from Turkish coffee — the grounds are poured directly into a small džezva and brewed separately, then poured into your cup by you, slowly, to avoid disturbing the grounds. It comes with a sugar cube, lokum (Turkish delight), and a glass of water. Drinking it fast is considered rude. Budget: €1.50–2.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🌇",
      title: "The Yellow Fortress at sunset is the city's best free view",
      desc: "Žuta Tabija (Yellow Fortress) sits above Baščaršija and offers the most iconic panoramic view of Sarajevo — minarets, red rooftops, and the valley all below you. It's completely free, accessible by a 10-minute uphill walk from the old bazaar, and particularly magical at sunset when the call to prayer echoes from all directions.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🗺️",
      title: "Walk the Austro-Hungarian transition in five minutes",
      desc: "Walking west from Baščaršija, you will pass the exact point where the Ottoman bazaar ends and the Austro-Hungarian city begins — the architecture transforms from carved wooden balconies and minaret curves to Viennese neoclassical in one step. This east-meets-west boundary is called the 'Meeting of Cultures' and is one of the most striking urban moments in Europe.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🎫",
      title: "Book the Mostar bus — don't rely on day-of availability",
      desc: "The Sarajevo–Mostar bus runs several times daily but fills up quickly in summer (April–October). Book at the Sarajevo East Bus Station (Autobus terminal) the day before, or use a local agent. If you can afford it, a private car tour to Mostar, Blagaj, and Kravice waterfalls for €80–100 splits well between 2–3 people and is dramatically better than the bus.",
      color: "border-indigo-200 bg-indigo-50",
    },
  ],

  faqs: [
    {
      q: "Is Sarajevo safe for tourists in 2026?",
      a: "Sarajevo is very safe for tourists. The city is welcoming, crime rates are low, and the local population is extraordinarily warm toward visitors. The occasional landmine risk exists in rural mountain areas outside the city — never hike off marked trails in the surrounding hills. In the city itself, normal urban caution applies, but incidents targeting tourists are virtually unheard of.",
    },
    {
      q: "Can I visit Srebrenica as a day trip from Sarajevo?",
      a: "Yes — Srebrenica is approximately 2.5 hours from Sarajevo and many local agencies run guided day trips (€25–50 per person, transport included). The Srebrenica-Potočari Memorial and Cemetery is one of the most important genocide memorials in the world. It is a solemn, deeply moving experience. Go with a guide who can provide historical context. The Srebrenica Memorial Center has an excellent permanent exhibition.",
    },
    {
      q: "What language do people speak in Sarajevo?",
      a: "Bosnian (closely related to Serbian and Croatian) is the official language. English is widely spoken in hotels, restaurants, and tourist areas — most people under 40 in the centre speak functional English. A few words of Bosnian go a very long way: 'hvala' (thank you), 'molim' (please), 'dobar dan' (good day). German is also useful as many Sarajevo residents worked in Germany and Austria during the 1990s.",
    },
    {
      q: "How does Sarajevo compare to other Balkans cities for budget travel?",
      a: "Sarajevo is one of the cheapest capital cities in Europe — easily comparable with Tirana and Skopje, and significantly cheaper than Belgrade, Sofia, or Bucharest. A full day of excellent food, coffee, museums, and transport can genuinely be done for €25–35. Accommodation in a quality hostel is €10–15/night. This makes it exceptional value, especially given the depth of history and culture on offer.",
    },
  ],

  combineWith: ["mostar-2-days", "belgrade-3-days", "dubrovnik-3-days", "kotor-2-days"],
  relatedSlugs: ["belgrade-3-days", "zagreb-3-days", "split-3-days", "dubrovnik-3-days"],

  galleryQuery: "sarajevo bosnia mostar stari most yellow fortress baščaršija",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function SarajevoPage() {
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
