import type { Metadata } from "next";
import UniversalBlogClient, {
  type UniversalBlogData,
} from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Oaxaca 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Oaxaca trip in 4 days. Plan the perfect 4-day Oaxaca trip — Monte Albán ruins, mole negro, mezcal tastings, Día de los Muertos, and Hierve el.",
  keywords: [
    "Oaxaca itinerary",
    "Oaxaca 4 days",
    "Oaxaca travel guide",
    "Monte Albán day trip",
    "Oaxaca mole food guide",
    "Día de los Muertos Oaxaca",
    "Oaxaca mezcal",
    "Oaxaca 2026",
    "Mexico travel guide",
    "North America travel",
  ],
  openGraph: {
    title: "Oaxaca 4-Day Itinerary 2026: Trip Planner",
    description:
      "30-ingredient mole negro, Zapotec pyramids on a mountaintop, mezcal that shames tequila, and a Día de los Muertos that will change you. Your complete 4-day Oaxaca guide.",
    url: "https://incredibleitinerary.com/blog/oaxaca-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?oaxaca+mexico+colonial+streets",
        width: 1200,
        height: 630,
        alt: "Oaxaca Mexico colonial streets with colorful buildings and Monte Albán ruins",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oaxaca 4-Day Itinerary 2026: Trip Planner",
    description:
      "Budget to luxury itineraries, visa info, food guide, and insider tips for Oaxaca, Mexico. From $45/day.",
    images: [
      "https://source.unsplash.com/1200x630/?oaxaca+mexico+colonial+streets",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/oaxaca-4-days",
  },
};

/* ── JSON-LD Structured Data ──────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/oaxaca-4-days#article",
      headline:
        "Oaxaca in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Oaxaca itinerary covering Monte Albán, mole negro, mezcal culture, Hierve el Agua, and the most atmospheric Día de los Muertos celebrations in Mexico.",
      image:
        "https://source.unsplash.com/1200x630/?oaxaca+mexico+colonial+streets",
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: {
          "@type": "ImageObject",
          url: "https://incredibleitinerary.com/logo.png",
        },
      },
      mainEntityOfPage:
        "https://incredibleitinerary.com/blog/oaxaca-4-days",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://incredibleitinerary.com/blog/oaxaca-4-days#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Oaxaca 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/oaxaca-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "@id": "https://incredibleitinerary.com/blog/oaxaca-4-days#destination",
      name: "Oaxaca",
      description:
        "Mexico's most culturally rich city — Zapotec heritage, the world's most complex cuisine, mezcal culture, and the planet's most atmospheric Día de los Muertos celebrations.",
      url: "https://incredibleitinerary.com/blog/oaxaca-4-days",
      touristType: [
        "Cultural tourists",
        "Food and drink enthusiasts",
        "Festival travelers",
        "Archaeology lovers",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.0669,
        longitude: -96.7203,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Mexico",
      },
    },
  ],
};

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Oaxaca",
  country: "Mexico",
  countryFlag: "🇲🇽",
  slug: "oaxaca-4-days",
  heroQuery: "oaxaca mexico monte alban ruins colonial streets mole food",
  heroAlt:
    "Oaxaca Mexico colonial streets with colorful buildings and Monte Albán ruins",
  category: "North America",
  date: "January 20, 2026",
  readTime: "17 min read",
  intro:
    "The most complex cuisine in Mexico, in a city where every meal takes four hours and the mole negro has 30 ingredients; Día de los Muertos celebrations that make Halloween look timid — marigold-carpeted altars, candlelit cemetery processions, mezcal poured for the dead; Monte Albán's Zapotec pyramids on a mountaintop with the entire valley spread 400 metres below you; and a mezcal culture so sophisticated it makes tequila feel like a tourist drink. Oaxaca is Mexico's most culturally rich city, and four days is barely enough.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$45",
    bestMonths: "Oct–Apr or Nov (Día de los Muertos)",
    airport: "OAX (Xoxocotlán)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "food", emoji: "🫕", label: "Oaxacan Food Guide" },
    { id: "mezcal", emoji: "🥃", label: "Mezcal Culture" },
    { id: "day-trips", emoji: "🏔️", label: "Day Trips from Oaxaca" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required?", "No — visa-free entry for Indian passport holders (updated 2024 policy)"],
        ["Max Stay", "Up to 180 days per visit"],
        ["Entry Form", "Tourist card (FMM) completed on arrival — free, no advance application"],
        ["Nearest Airport", "OAX (Xoxocotlán) — direct flights from CDMX (1 hr); or overnight bus from Mexico City (7–8 hrs, $25–40)"],
        ["Currency", "Mexican Peso (MXN); few ATMs in Oaxaca accept international cards — bring cash from CDMX"],
        ["Altitude", "Oaxaca city is at 1,550m — mild altitude, rarely causes issues"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required?", "No — visa-free for all Western passport holders"],
        ["Max Stay", "Up to 180 days; FMM tourist card on arrival (free)"],
        ["Direct Flights", "OAX airport serves flights from Mexico City, Monterrey, Guadalajara, Houston, and LA"],
        ["Getting There", "Aeromexico and Volaris fly Mexico City → Oaxaca from ~$60 one-way, 1 hour"],
        ["Safety", "Oaxaca city is considered very safe for tourists; one of Mexico's most visited colonial cities"],
        ["Best Season", "October–April dry season; November for Día de los Muertos (book 6 months ahead)"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Plan",
      sub: "~$45/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Zócalo & First Mole",
          items: [
            "Arrive at OAX or by overnight bus from Mexico City — colectivo taxi to city centre ~$3",
            "Check into a hostel on Calle García Vigil or near Santo Domingo ($12–18/night dorm) — the colonial neighbourhood is extremely walkable",
            "Walk the Zócalo (main plaza) and portico arches — free; sit and observe the morning life over a $2 tejate (pre-Hispanic cold chocolate-corn drink)",
            "Visit Santo Domingo Church and attached Museo de las Culturas (free entry Sunday, $5 other days) — the gold-encrusted baroque interior is one of Mexico's finest",
            "Lunch at Mercado 20 de Noviembre — the city's best food market; get a tasajo or cecina (smoked/salted Oaxacan meats grilled to order) with black beans and tortillas, $5–7",
            "Afternoon: wander the Andador Macedonio Alcalá, the pedestrian art street linking the Zócalo to Santo Domingo",
            "Dinner: black mole (mole negro) at a comedor on or near Mercado Benito Juárez — the real, 30-ingredient version, ~$6–8",
          ],
          cost: "$22–28 (hostel, meals $15, entrance fees $5)",
        },
        {
          day: "Day 2",
          title: "Monte Albán Ruins & Mezcal Tasting",
          items: [
            "Colectivo to Monte Albán leaves from 2nd Norte near Mercado Sánchez Pascual (~$4 return + $5 entry) — buses at 8:30am, 9:30am, 10:30am",
            "Monte Albán UNESCO site — Zapotec capital dating from 500 BC; the Main Plaza, observatory, ball court, and carved stone Danzantes (dancers)",
            "Climb the North Platform for the best valley panorama — all of Oaxaca visible 400m below",
            "Return by midday — eat lunch at a market before afternoon activities",
            "Free mezcal tasting: walk south of the Zócalo along García Vigil and Murguía — multiple small mezcalerías offer free introductory pours as standard; spend $5–8 buying a copa you like",
            "Sunset from the hill at Monte Albán viewpoint (can return via colectivo at 5pm) or from the Café Brújula rooftop in the centro ($2 coffee, free view)",
            "Evening: tlayuda at a street stall — the giant Oaxacan pizza-style flatbread with black beans, quesillo cheese, and meat, $4–6",
          ],
          cost: "$22–26 (transport $4, Monte Albán $5, meals $13)",
        },
        {
          day: "Day 3",
          title: "Hierve el Agua & Teotitlán del Valle",
          items: [
            "Join a shared colectivo day tour to Hierve el Agua (~$15–20 including transport and entry) — or rent colectivos individually ($5 each way + $3 entry)",
            "Hierve el Agua: petrified waterfall mineral formations and natural infinity pools on the cliff edge — swim in warm mineral water with valley views",
            "En route: stop at Teotitlán del Valle weaving village — family-run workshops where Zapotec women weave traditional tapetes (rugs) using natural dyes; buying direct from the weavers at $20–40 supports livelihoods and beats any city souvenir shop",
            "Also stop at El Tule to see the Tule Tree — 2,000 years old, the world's widest tree trunk (14m diameter), free entry",
            "Return to Oaxaca by 5pm",
            "Final evening: mezcal cocktail at a rooftop bar near Santo Domingo — Los Amantes or similar, $5–7/drink",
          ],
          cost: "$25–32 (tour $20, meals $12)",
        },
        {
          day: "Day 4",
          title: "Mitla Ruins, Markets & Farewell Chocolate",
          items: [
            "Morning colectivo to Mitla ruins ($4 return + $4 entry) — intricate stone mosaic architecture, completely different from Monte Albán",
            "Browse Benito Juárez Market for edible souvenirs: mole paste in vacuum bags ($5–8), chapulines (grasshoppers, roasted with chili and lime — try them!), mezcal minis, Oaxacan chocolate",
            "Visit Chocolate Mayordomo factory and shop on Mina Street — watch chocolate ground on stone, buy a tablet for $3",
            "Lunch: enfrijoladas (tortillas drowned in black bean sauce) at a comedor, $4",
            "Afternoon departure or final wander through the colonial centre",
          ],
          cost: "$20–25 (transport $4, Mitla $4, souvenirs $12, meals $6)",
        },
      ],
    },
    {
      label: "Mid-Range Plan",
      sub: "~$95/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Santo Domingo & Proper Mole Dinner",
          items: [
            "Arrive by flight from Mexico City or Guadalajara — taxi from OAX airport to centre ($10)",
            "Check in to a boutique guesthouse in the historic centre — converted colonial mansion, $55–75/night: Casa Oaxaca, Hotel Azul, or Misión de los Ángeles",
            "Guided walking tour of Centro Histórico ($20–25, recommended: Oaxaca Walks) — context transforms everything",
            "Lunch at La Biznaga or Los Pacos — modern Oaxacan cuisine, $15–20; try the coloradito and verde moles alongside negro",
            "Afternoon: Museo de las Culturas de Oaxaca inside the former convent of Santo Domingo ($5) — spectacular gold Mixtec jewellery from Monte Albán Tomb 7",
            "Sunset mezcal tasting at In Situ or El Destilado — curated, single-village, small-batch producers, knowledgeable staff, $8–15/pour",
            "Dinner: Casa Oaxaca restaurant ($35–45) — Alejandro Ruiz's famous version of mole negro, one of the best in Mexico",
          ],
          cost: "$80–100 (hotel share, meals $55, tour $25, drinks $20)",
        },
        {
          day: "Day 2",
          title: "Monte Albán Private Tour + Weaving Villages",
          items: [
            "Private morning tour of Monte Albán with archaeologist guide ($40/person for small group) — the Zapotec urban planning and astronomical alignment become clear with expert explanation",
            "Teotitlán del Valle: guided workshop visit with a Zapotec weaving family — watch the dyeing process using cochineal (dried beetles from cacti), indigo, and marigold; $35–50 for a hand-woven tapete as an heirloom souvenir",
            "Lunch in Teotitlán at a family restaurant — Tlamanalli serves regional Zapotec food, $15–20",
            "El Tule Tree stop",
            "Return late afternoon — freshen up at hotel",
            "Evening: cooking class at Seasons of My Heart or Alma de Mi Tierra ($65–80) — 3-hour class includes grinding mole paste by hand, making tortillas, and eating everything you cook",
          ],
          cost: "$95–115 (tour $40, weaving $40, cooking class $70, meals $25)",
        },
        {
          day: "Day 3",
          title: "Hierve el Agua, Mitla & Market Deep Dive",
          items: [
            "Hire a private driver for the day ($60–80) for the most efficient day trip: Monte Albán → Mitla → Hierve el Agua → Teotitlán del Valle all in one loop",
            "Mitla: Zapotec palace with the most intricate stone mosaic decoration in Mesoamerica — far less visited than Monte Albán",
            "Hierve el Agua: private time without large tour groups — swim, photograph the petrified waterfall, eat the market lunch you packed",
            "Return via mezcal palenque in Santiago Matatlán (mezcal capital of the world) — free distillery tour and tasting, buy direct from producer at wholesale prices ($15–25/bottle for excellent mezcal)",
            "Evening: dinner at Pitiona ($40–55) — modern Oaxacan fine dining using hyper-regional ingredients, CDMX-level quality at half the price",
          ],
          cost: "$90–110 (driver $70, Hierve el Agua $3, mezcal $20, dinner $50)",
        },
        {
          day: "Day 4",
          title: "Food Market Tour, Chocolate & Farewell Mole",
          items: [
            "Guided Oaxaca food market tour ($30–40, 3 hours) — expert guide through Benito Juárez and 20 de Noviembre markets, tasting everything from chapulines to memelas to quesillo",
            "Chocolate Mayordomo: buy tablets, mole paste, and drinking chocolate for gifts",
            "Explore the Andador Macedonio Alcalá gallery-hopping — dozens of free artist studios and galleries in 400m",
            "Farewell lunch at Mercado 20 de Noviembre ($10–12) — grill your own meats at the carbon section with tortillas and all 7 Oaxacan salsas",
            "Taxi to OAX airport or overnight bus back to Mexico City",
          ],
          cost: "$75–90 (market tour $35, shopping $25, meals $20, transport $10)",
        },
      ],
    },
    {
      label: "Luxury Plan",
      sub: "~$230/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at Casa Oaxaca & Chef's Mole Experience",
          items: [
            "Private transfer from OAX airport ($25–35)",
            "Check in to Casa Oaxaca (the original boutique hotel, ~$150–200/night) or Quinta Real Oaxaca ($180–250) — both are converted colonial mansions with rooftop pools and the city's best locations",
            "Private Centro Histórico art and history tour with professional guide ($80–100) — colonial architecture, street art murals, Santo Domingo interior, and the political history of the zócalo",
            "Aperitivo: mezcal sommelier session at El Destilado or Creyente — blind tasting of 6 expressions across different agave varieties ($40–60/person)",
            "Dinner: Criollo restaurant ($70–90, book weeks ahead) — Enrique Olvera's Oaxacan outpost, celebrating indigenous ingredients with the precision of a world-class kitchen",
          ],
          cost: "$280–340 (hotel, transfer, guide $90, mezcal $50, dinner $80)",
        },
        {
          day: "Day 2",
          title: "Private Monte Albán Sunrise + Mezcal Palenque",
          items: [
            "Arrange private early access to Monte Albán before public opening (via hotel concierge, ~$120 including licensed archaeologist guide and transport) — watching the sun rise over the Zapotec valley from the North Platform is a transformative experience",
            "Private mezcal tour to three palenques (distilleries) in the Valley of Oaxaca — Mezcaloteca or Alvin Starkman tours ($120–150/person) — see agave harvesting, underground cooking pits (hornos), and fermentation; taste expressions you cannot buy anywhere else",
            "Lunch at a family in Santiago Matatlán — home-cooked food in the mezcal capital, $15–20",
            "Afternoon spa at hotel: temazcal ceremony (traditional Zapotec sweat lodge with herbal steam) and massage, $80–120",
            "Dinner: Pitiona ($60–80 tasting menu) or Origen ($70–90) — Rodolfo Castellanos uses only Oaxacan ingredients to create dishes that feel both ancient and modern",
          ],
          cost: "$320–380 (early access $120, mezcal tour $140, spa $100, dinner $80)",
        },
        {
          day: "Day 3",
          title: "Villages, Weavers & Private Market Experience",
          items: [
            "Private vehicle and guide for the craft village circuit ($120–150 for the day) — Teotitlán del Valle for weaving, San Bartolo Coyotepec for black pottery, Ocotlán for textiles and the Friday market",
            "Hierve el Agua private session — arrive at 8am before tour groups, swim in the mineral pools, have the cliffs to yourself for photography",
            "Alfresco lunch prepared by a local cook in Teotitlán — Zapotec home cooking, $25",
            "Return via a mezcal producer for a final bottle ($30–50 for a genuinely exceptional single-village expression)",
            "Evening: private cooking class with Chef Pilar Cabrera at La Olla cooking school ($120–150, 4 hours) — recognised as one of the finest traditional Oaxacan cooking teachers in Mexico; make all 7 moles from scratch",
          ],
          cost: "$350–420 (guide $140, cooking class $140, meals $60, mezcal $50)",
        },
        {
          day: "Day 4",
          title: "Market Morning, Gallery Walk & Fine Farewell",
          items: [
            "Private guided morning market tour with a food anthropologist ($60–80) — understand the history and archaeology behind each Oaxacan ingredient",
            "Gallery visits: MACO (Oaxacan Contemporary Art Museum) and private studios of Oaxacan masters along Macedonio Alcalá ($10–20)",
            "Order bespoke mezcal engraved bottles at a mezcalería for gifts ($35–50 per bottle, 24hrs notice often needed)",
            "Farewell lunch at Restaurante Los Danzantes ($45–60) — celebrating traditional Oaxacan cuisine in a beautiful colonial courtyard",
            "Private transfer to OAX airport or Oaxaca railway/bus station for onward journey",
          ],
          cost: "$250–320 (guide $70, meals $80, gifts $60, transport $30)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–18 (hostel dorm)",
      food: "$15–20 (market meals + comedores)",
      transport: "$5–8 (colectivos + bus)",
      activities: "$8–15 (Monte Albán, museums)",
      total: "$45/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$55–75 (boutique guesthouse)",
      food: "$30–45 (mix casual + quality restaurants)",
      transport: "$10–18 (private driver days, taxis)",
      activities: "$25–40 (guided tours, cooking class)",
      total: "$95/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$150–250 (Casa Oaxaca / Quinta Real)",
      food: "$80–120 (Criollo, Pitiona, Origen)",
      transport: "$30–50 (private transfers, driver)",
      activities: "$80–120 (private guides, early access, spa)",
      total: "$230/day",
    },
  ],

  mistakes: [
    {
      icon: "🗓️",
      title: "Not booking Día de los Muertos accommodation 6 months ahead",
      desc: "Oaxaca's Día de los Muertos (November 1–2) is the most atmospheric in Mexico. Every hotel in the city is sold out by June for those dates. If this is your main reason for visiting, book accommodation and flights the moment you decide — there is no such thing as booking too early.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🥃",
      title: "Only drinking mezcal in tourist bars",
      desc: "The mezcal sold in airport-facing bars is often industrial or overpriced. The real experience is at a palenque (distillery) in Santiago Matatlán or with a guide like Alvin Starkman who introduces you to producers making 50–200 litre batches. A $25 bottle bought direct from a producer beats a $80 bar pour.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍫",
      title: "Buying mole paste or chocolate at the airport",
      desc: "Mercado Benito Juárez sells vacuum-packed mole paste (negro, rojo, coloradito, amarillo) at $5–8 each. The same products cost $18–25 at airport gift shops. Buy your edible souvenirs at the market — they survive international travel in checked luggage.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚌",
      title: "Skipping the colectivo system",
      desc: "Shared colectivos (minivans) connect Oaxaca city to every village and ruin site for $2–5 each way. Tourists default to expensive tours or private taxis. Taking a colectivo to Monte Albán costs $4 return; a private taxi costs $25–30. The colectivo is often faster and puts you alongside locals.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🦗",
      title: "Refusing to try chapulines (grasshoppers)",
      desc: "Chapulines — roasted grasshoppers seasoned with chili, lime, and garlic — are a Oaxacan staple eaten at markets, on tlayudas, and with mezcal. They taste nutty and crispy. Refusing them is refusing the culture. Order a small bag at Mercado Benito Juárez for $1–2 and try them with lime.",
      color: "bg-green-50 border-green-200",
    },
  ],

  tips: [
    {
      icon: "🫕",
      title: "Eat all 7 moles before you leave",
      desc: "Oaxaca is called 'the land of seven moles' — negro, rojo, coloradito, amarillo, verde, chichilo, and manchamanteles. Each one is distinct and requires a different meat pairing. The best way to try them all is a mole platter (combinado) at Mercado 20 de Noviembre for ~$8.",
      color: "bg-gold/10 border-gold/30",
    },
    {
      icon: "🌺",
      title: "Visit during Guelaguetza (late July) for free",
      desc: "The Guelaguetza festival in late July is Oaxaca's biggest annual event — indigenous communities from all 8 regions dance and perform in traditional dress. The main stadium show costs $30–80, but free viewings happen in the Cerro del Fortín amphitheatre on the same days.",
      color: "bg-teal/10 border-teal/30",
    },
    {
      icon: "📱",
      title: "Download WhatsApp numbers for colectivos before arrival",
      desc: "Many shared colectivo operators in Oaxaca now coordinate via WhatsApp groups. Ask at your hostel or hotel for the current numbers for Monte Albán and Hierve el Agua colectivos. This gives you real-time departure times and avoids waiting at stand.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏺",
      title: "Buy crafts direct from artisans in the villages",
      desc: "Oaxaca state has the highest concentration of indigenous artisan villages in Mexico. Buying a hand-woven rug in Teotitlán del Valle costs the same as in the Oaxaca city shops but the money goes directly to the weaving family. Most workshops welcome visitors without appointment.",
      color: "bg-green-50 border-green-200",
    },
  ],

  faqs: [
    {
      q: "When is the best time to visit Oaxaca?",
      a: "October to April is the dry season and best for general travel. November (especially November 1–2 for Día de los Muertos) is the most magical time to visit but requires advance booking. July brings the Guelaguetza festival. The rainy season (May–September) has daily afternoon rain but mornings are clear and prices drop 30–40%.",
    },
    {
      q: "How do I get from Mexico City to Oaxaca?",
      a: "The easiest way is a 1-hour flight from MEX to OAX — Aeromexico and Volaris both fly this route from ~$40–80 one-way. Alternatively, an overnight ADO bus from TAPO terminal in Mexico City takes 7–8 hours and costs $25–40 — surprisingly comfortable with reclining seats. The train (El Tren Turístico) is a scenic option on certain days.",
    },
    {
      q: "Is it safe to drink mezcal from a palenque?",
      a: "Yes — artisan mezcal from legitimate producers is completely safe. The methanol scare is associated with fake or illegal alcohol, not with licensed mezcal producers. Stick to distilleries recommended by guides or your hotel, buy bottles with official hologram seals, and never buy from unlabelled street sellers. The mezcal sold in Santiago Matatlán is some of the safest and best in the world.",
    },
    {
      q: "Can I visit Monte Albán without a guide?",
      a: "Yes — you can enter independently for $5 and walk the site with the included map. However, the Zapotec astronomical alignments, the significance of the Danzante carvings, and the political history of the Zapotec empire make much more sense with a guide ($20–40 for a licensed archaeologist). The INAH site has official guides at the entrance; book in advance or arrive early as they fill up.",
    },
  ],

  combineWith: ["mexico-city-4-days", "tulum-4-days", "san-cristobal-4-days"],
  relatedSlugs: [
    "mexico-city-4-days",
    "tulum-4-days",
    "merida-4-days",
    "san-cristobal-4-days",
  ],
  galleryQuery: "oaxaca mexico mole monte alban mezcal markets colonial",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function OaxacaPage() {
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
