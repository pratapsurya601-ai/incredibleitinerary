import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Helsinki in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description":
      "Plan the perfect 3 days in Helsinki, Finland — from the iconic white Cathedral to harbour saunas, Design District, Suomenlinna fortress, and the midnight sun. Budget from €65/day.",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": {
      "@type": "Organization",
      "name": "IncredibleItinerary",
      "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
    },
    "datePublished": "2026-01-10",
    "dateModified": "2026-04-05",
    "image": "https://incredibleitinerary.com/images/helsinki-cathedral-senate-square.jpg",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/helsinki-3-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Helsinki 3 Days", "item": "https://incredibleitinerary.com/blog/helsinki-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Helsinki",
    "description": "Finland's compact, elegant capital on the Baltic Sea — home to world-class design, coastal saunas, and the midnight sun.",
    "geo": { "@type": "GeoCoordinates", "latitude": 60.1699, "longitude": 24.9384 },
    "touristType": ["Cultural tourist", "Design enthusiast", "Budget traveller", "Nature lover"],
    "url": "https://incredibleitinerary.com/blog/helsinki-3-days",
  },
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Helsinki 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Helsinki trip in 3 days. The ultimate Helsinki 3-day itinerary — Senate Square, Design District, Temppeliaukio rock church, Suomenlinna.",
  keywords: [
    "Helsinki itinerary 3 days",
    "Helsinki travel guide 2026",
    "Helsinki budget travel",
    "Helsinki Design District",
    "Suomenlinna day trip",
    "Helsinki sauna guide",
    "Finland travel guide",
    "Helsinki midnight sun",
    "Helsinki northern lights",
    "Tallinn day trip from Helsinki",
  ],
  openGraph: {
    title: "Helsinki 3-Day Itinerary 2026: Trip Planner",
    description:
      "Senate Square, Temppeliaukio rock church, Suomenlinna fortress, harbour saunas, Design District, and a ferry to Tallinn — the world's happiest city packed into 3 perfect days.",
    url: "https://incredibleitinerary.com/blog/helsinki-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://incredibleitinerary.com/images/helsinki-cathedral-senate-square.jpg",
        width: 1200,
        height: 630,
        alt: "Helsinki Finland white Cathedral and Senate Square with harbour market",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki 3-Day Itinerary 2026: Trip Planner",
    description:
      "Senate Square, rock church, sea fortress, and the world's happiest city — 3-day Helsinki guide from €65/day.",
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/helsinki-3-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Helsinki",
  country: "Finland",
  countryFlag: "🇫🇮",
  slug: "helsinki-3-days",
  heroQuery: "helsinki finland cathedral senate square harbour market",
  heroAlt: "Helsinki Finland white Cathedral and Senate Square with harbour market",
  category: "Europe",
  date: "January 10, 2026",
  readTime: "14 min read",

  intro:
    "A city where the national pastime is sitting naked in a 90°C wooden room with strangers and then jumping into a frozen lake, where design is so embedded in daily life that a bus shelter was once shortlisted for the Pritzker Prize, where a ferry to Tallinn leaves every two hours making it the easiest two-capital combination in Europe, and where the world's happiest country has held that title for six consecutive years — Helsinki, Finland's compact, elegant capital, will confound every expectation and earn a permanent place in your memory.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€65",
    bestMonths: "Jun–Aug (midnight sun) or Dec–Jan (northern lights)",
    airport: "HEL (Helsinki-Vantaa)",
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
    { id: "sauna", emoji: "🧖", label: "Sauna Culture Guide" },
    { id: "daytrips", emoji: "⛴️", label: "Day Trips from Helsinki" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required", "Schengen visa (Finland as main destination)"],
        ["Fee", "€80 (adults)"],
        ["Processing", "15–30 days — apply at VFS Global"],
        ["Duration", "Up to 90 days within 180-day period"],
        ["Documents", "Hotel bookings, return flights, travel insurance (€30k+), bank statements"],
        ["Tip", "Apply 6–8 weeks before travel; summer slots fill fast"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "Schengen visa-free for up to 90 days"],
        ["ETIAS", "Required from mid-2025 (online pre-authorisation, €7)"],
        ["Passport", "Must be valid for 3 months beyond departure"],
        ["UK post-Brexit", "Visa-free up to 90 days; check individual ETIAS status"],
        ["Entry", "Show proof of accommodation and sufficient funds if asked"],
        ["Return", "Onward/return ticket recommended"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€65/day",
      days: [
        {
          day: "Day 1",
          title: "Senate Square, Market & Rock Church",
          items: [
            "Morning: walk Senate Square and Helsinki Cathedral (free, open daily) — the neoclassical white dome at sunrise is extraordinary",
            "Market Square at the harbour — fresh salmon soup in a bread bowl from a stall (€8–10), browse local crafts",
            "Afternoon: Temppeliaukio Church — the rock church carved into solid granite, admission €3",
            "Esplanadi Park stroll — free outdoor concerts in summer; grab a Fazer chocolate from the flagship store",
            "Evening: Budget dinner at Hakaniemi market hall — karelian pie with egg butter, a Finnish classic under €7",
            "Walk the Design District streets — Fredrikinkatu and Iso Roobertinkatu — window shopping is free and inspiring",
          ],
          cost: "€55–65 (meals €20, transport day pass €9, entry €3, snacks €10)",
        },
        {
          day: "Day 2",
          title: "Suomenlinna Sea Fortress",
          items: [
            "Morning: Ferry to Suomenlinna from Market Square quay — HSL day pass covers the ferry, 15 min ride",
            "Explore the UNESCO World Heritage sea fortress — 18th-century fortifications, tunnels, and seaside ruins",
            "Suomenlinna Museum (€7) explains 300 years of fortress history with scale models",
            "Picnic lunch on the fortress walls with harbour views — buy supplies at the island bakery (€5–8)",
            "Afternoon: Return to mainland; visit Kiasma Modern Art Museum (€15 but Fridays after 17:00 free)",
            "Evening: Ateneum Art Museum student/evening discount; pick up a budget pint at a Kallio neighbourhood bar (€5–7)",
          ],
          cost: "€60–70 (ferry included in day pass, museum €7–15, food €20, drinks €10)",
        },
        {
          day: "Day 3",
          title: "Tallinn Day Trip or City Wander",
          items: [
            "Option A (Tallinn): Tallink/Viking Line ferry — book early for €25–35 return; 2.5 hours each way",
            "In Tallinn: walk the medieval Old Town (free), see Alexander Nevsky Cathedral, Toompea Castle, Town Hall Square",
            "Budget lunch in Tallinn is even cheaper than Helsinki — set meal at an Old Town café under €8",
            "Return ferry in early evening; arrive Helsinki around 21:00",
            "Option B (Helsinki): Löyly public sauna at the harbour (€19 entry includes towel); swim in the Baltic",
            "Option B cont: Kallio neighbourhood for Helsinki's most affordable restaurants and local bar scene",
          ],
          cost: "€55–75 (Tallinn ferry €30, meals €20) or €45 (Löyly €19, local food €20)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€140/day",
      days: [
        {
          day: "Day 1",
          title: "Design Helsinki + Löyly Sauna",
          items: [
            "Morning: Coffee at a third-wave café in the Design District — Kaffa Roastery or Good Life Coffee (€4–6)",
            "Design Museum (€12) and Museum of Finnish Architecture (€12) — both in the Design District, walk between them",
            "Market Square lunch: Smoked salmon and Finnish buffet at a harbour restaurant (€20–25)",
            "Afternoon: Temppeliaukio Church and Senate Square; book a guided Design District walking tour (€20)",
            "Evening: Löyly public sauna on the harbour — the award-winning wooden architecture is a destination in itself (€19 + dinner at Löyly restaurant €35–45)",
            "After sauna: Baltic dip from the harbour platform — the contrast of heat and cold water is addictive",
          ],
          cost: "€130–155 (museums €24, sauna €19, meals €70, guided tour €20, transport €12)",
        },
        {
          day: "Day 2",
          title: "Suomenlinna + Kiasma + Kallio Evening",
          items: [
            "Morning: Suomenlinna by ferry — take 2–3 hours to properly explore all six islands and the underwater tunnel",
            "Guided tour of the fortress €8 — the guides are excellent and the history of the Swedish and Russian eras is fascinating",
            "Lunch at Suomenlinna Brewery Restaurant (€25–30) — craft beer and Finnish dishes with sea views",
            "Afternoon: Return to city; Kiasma Modern Art Museum (€15) — contemporary Finnish and Nordic art",
            "Ateneum Art Museum (€18) for Finnish national collection — Gallen-Kallela's Kalevala paintings are unmissable",
            "Evening: Dinner in Kallio neighbourhood — Nolla zero-waste restaurant or Putte's Bar (€35–45 per person)",
          ],
          cost: "€140–160 (ferry included, museums €41, meals €75, beer €20)",
        },
        {
          day: "Day 3",
          title: "Espoo & Aalto Studio Day Trip",
          items: [
            "Morning: Metro to Espoo — Alvar Aalto's Studio and Villa Mairea (advance booking essential, tour €15–20)",
            "Aalto's work is the foundation of Finnish design identity — the studio is preserved exactly as he left it",
            "Espoo Museum of Modern Art (EMMA) — ticket €15; one of the best modern art collections in Scandinavia",
            "Lunch in Espoo: Café at the WeeGee Exhibition Centre complex (€15–20)",
            "Afternoon: Return to Helsinki — sauna at Kulttuurisauna on the eastern harbour (€15, public sauna with modernist design)",
            "Evening: Farewell dinner at a restaurant in Kamppi — modern Finnish cuisine, reindeer or vendace dishes (€50–60)",
          ],
          cost: "€140–165 (transport €15, tours/museums €50, meals €75, sauna €15)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€320/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Design Immersion & Waterfront Dining",
          items: [
            "Check into Hotel St. George or Klaus K Design Hotel in the city centre (€200–350/night)",
            "Private guided Design District walk with a local design curator (€80–120 for 2 hours)",
            "Lunch at Restaurant Savoy — Alvar Aalto-designed interior, Finnish classics done exquisitely (€60–80)",
            "Afternoon: Visit Artek flagship store; personal shopping appointment at Finnish design houses",
            "Temppeliaukio Church private visit — arrive at opening for a crowd-free experience with your guide",
            "Evening: Dinner at Grön (Michelin Green Star) or Noma-alumni restaurant — modern Finnish tasting menu (€120–160 per person)",
          ],
          cost: "€300–380 (hotel €300, meals €200, tours €100, shopping variable)",
        },
        {
          day: "Day 2",
          title: "Suomenlinna by Private Boat + Spa",
          items: [
            "Private water taxi to Suomenlinna (€60–80) — arrive before the day-trip crowds from the ferry",
            "Private guided tour of the fortress with a military historian (€100–150 for 2 hours)",
            "Lunch at Suomenlinna Brewery with a private tasting menu arranged in advance (€60–80)",
            "Return by private taxi boat; spa afternoon at Allas Sea Pool (€25 entry + treatments from €80)",
            "Allas Sea Pool: three outdoor pools, one heated, with direct views to the harbour and Senate Square skyline",
            "Evening: Chef's table experience at Restaurant ORA or Palace Restaurant on the 10th floor (€150–200 per person)",
          ],
          cost: "€350–450 (boat taxis €140, private tour €125, meals €250, spa €105)",
        },
        {
          day: "Day 3",
          title: "Tallinn by Fast Ferry + Farewell Sauna Dinner",
          items: [
            "Tallink Silja Star Suite cabin on the morning ferry — private suite, 2.5 hours each way (€80–100)",
            "Tallinn private guide for the Old Town, including private access to Toompea Castle viewing terraces (€100–150)",
            "Michelin-starred lunch at Tchaikovsky or NOA in Tallinn — spectacular views of medieval Tallinn (€80–120)",
            "Return afternoon ferry; arrive Helsinki early evening",
            "Private sauna rental at Löyly (€250–350 for 2 hours, private wood-fired sauna + lounge area)",
            "Late dinner at the Löyly restaurant with a curated Finnish seafood menu (€80–100 per person)",
          ],
          cost: "€380–480 (ferry suite €90, Tallinn guide €150, meals €250, private sauna €300)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "Hostel dorm €25–35",
      food: "Markets + budget cafés €15–20",
      transport: "Day pass €9",
      activities: "Free sights + 1 museum €10",
      total: "~€65/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "3-star hotel €90–120",
      food: "Mix of cafés & restaurants €45–55",
      transport: "Day pass + taxis €20",
      activities: "2–3 museums + sauna €40",
      total: "~€140/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "Design hotel €250–350",
      food: "Fine dining €120–160",
      transport: "Taxis + private boats €60",
      activities: "Private tours + spa €120",
      total: "~€320/day",
    },
    {
      tier: "⛴️ Tallinn Add-on",
      accommodation: "No change",
      food: "Cheaper in Tallinn +€0",
      transport: "Ferry return €25–100",
      activities: "Old Town entry free",
      total: "+€30–100 total",
    },
    {
      tier: "🧖 Sauna Day",
      accommodation: "No change",
      food: "Sauna restaurant €35–45",
      transport: "Included",
      activities: "Löyly/Allas €19–25",
      total: "+€55–70 total",
    },
  ],

  mistakes: [
    {
      icon: "❄️",
      title: "Visiting in November without knowing what to expect",
      desc: "November is Helsinki's darkest month — barely 6 hours of daylight, cold, and grey. Go in June–August for midnight sun and festivals, or December–January specifically for northern lights and Christmas markets. October and April are shoulder seasons with reasonable deals.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "💳",
      title: "Carrying too much cash",
      desc: "Finland is one of the most cashless societies on Earth — even market stalls, public saunas, and ferry ticket machines take card. You will rarely need cash. Carry €20–30 for emergencies but don't stress about ATM queues.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "⛴️",
      title: "Booking the Tallinn ferry the day before",
      desc: "Tallink and Viking Line ferries to Tallinn book up fast in summer, especially on Friday evenings and weekend mornings. Book at least 2 weeks in advance online — early booking prices are often €15–20 each way versus €45+ last minute.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🗺️",
      title: "Staying only in the city centre",
      desc: "The Design District, Kallio, and the Töölö neighbourhood each have a completely different character. Kallio is Helsinki's creative and affordable heart — its cafés, second-hand shops, and bars are as authentically Helsinki as Senate Square. Take tram 6 east.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🎭",
      title: "Skipping the sauna because it seems weird",
      desc: "The public sauna is the single most culturally important thing you can do in Helsinki. Löyly (harbour-side, beautiful architecture, €19) and Allas Sea Pool (outdoor pools, central, €25) are both welcoming to international visitors. Go. It will change your life.",
      color: "border-green-200 bg-green-50",
    },
  ],

  tips: [
    {
      icon: "🚃",
      title: "The HSL day pass covers the Suomenlinna ferry",
      desc: "The public ferry to Suomenlinna Sea Fortress is operated by HSL (Helsinki's transport authority) — meaning your day pass (€9) covers the return ferry. This is not obvious and most tourists buy a separate tourist boat ticket at double the price. Buy your day pass at any R-Kiosk or the HSL app.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🌅",
      title: "Senate Square at 7am is otherworldly",
      desc: "Helsinki Cathedral and the Senate Square are among the most photographed spots in Scandinavia, but they're packed by 10am. Arrive at sunrise — in summer this means 04:30 (yes, really) or a more reasonable 07:00 — and you'll often have the entire neoclassical square to yourself.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🍓",
      title: "The strawberry season (late June–July) is extraordinary",
      desc: "Finnish summer strawberries are sold at every market stall and they are objectively the best strawberries on Earth — small, intensely sweet, grown in the long Arctic days. A punnet is €3–5. This alone is worth timing your trip to June–July.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🔭",
      title: "Northern lights from Helsinki are possible but drive north",
      desc: "The northern lights can be seen from dark Helsinki suburbs (Nuuksio National Park, 30 min drive) on strong solar activity nights. For guaranteed sightings, take a night train to Rovaniemi in Lapland (7 hours, from €30). Apps like SpaceWeatherLive track real-time solar activity.",
      color: "border-indigo-200 bg-indigo-50",
    },
  ],

  faqs: [
    {
      q: "Is Helsinki expensive compared to other European capitals?",
      a: "Helsinki is one of the more expensive European capitals — on par with Stockholm and slightly below Oslo and Zurich. Budget travellers can manage on €65/day with hostels, market food, and the free sights. Mid-range comfort costs €120–160/day. The key money-savers are the HSL day pass (covers ferries), eating at market halls rather than restaurants, and visiting museums on their free/discounted evenings.",
    },
    {
      q: "Do I need to speak Finnish or Swedish?",
      a: "Absolutely not — Helsinki has the highest English proficiency in Europe. Virtually every sign, menu, and person you encounter will communicate fluently in English. Finnish is notoriously difficult (it is unrelated to Indo-European languages) but learning 'kiitos' (thank you) and 'hei' (hello) will earn you enormous goodwill from locals.",
    },
    {
      q: "Can I see the midnight sun in Helsinki?",
      a: "Around the summer solstice (June 21), Helsinki experiences near-continuous daylight — the sun sets briefly around midnight and rises again at 03:00. It doesn't get properly dark. This is both magical and disorienting. Bring a good eye mask for sleeping. The best viewing point is at the waterfront or on a cruise.",
    },
    {
      q: "Is Helsinki safe?",
      a: "Helsinki is consistently ranked among the safest capitals in the world. Crime rates are extremely low, the transport system runs reliably at night, and the city is well-lit and walkable even at 2am. The main things to watch for are pickpockets in crowded Market Square (rare but possible) and very icy pavements in January–February.",
    },
  ],

  combineWith: ["tallinn-3-days", "stockholm-3-days", "riga-3-days", "rovaniemi-lapland"],
  relatedSlugs: ["stockholm-3-days", "copenhagen-3-days", "tallinn-3-days", "oslo-3-days"],

  galleryQuery: "helsinki finland design district suomenlinna sauna northern lights",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function HelsinkiPage() {
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
