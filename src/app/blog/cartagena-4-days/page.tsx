import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cartagena Colombia in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "A complete 4-day Cartagena Colombia travel guide covering the walled city, San Felipe fort, Getsemaní, Rosario Islands, and Caribbean food — from $55/day to $300/day.",
    "image": "https://incredibleitinerary.com/og/cartagena-4-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-02-01",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/cartagena-4-days"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Cartagena 4 Days", "item": "https://incredibleitinerary.com/blog/cartagena-4-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Cartagena",
    "description": "A UNESCO-listed walled colonial city on Colombia's Caribbean coast, famous for colourful architecture, the Castle of San Felipe, the Rosario Islands, and vibrant Getsemaní neighbourhood.",
    "geo": { "@type": "GeoCoordinates", "latitude": 10.3910, "longitude": -75.4794 },
    "touristType": ["Cultural Traveller", "Beach Lover", "History Enthusiast", "Foodie"],
    "url": "https://incredibleitinerary.com/blog/cartagena-4-days"
  }
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Cartagena Colombia in 4 Days: The Complete Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description: "4-day Cartagena Colombia itinerary covering the walled city, Castle of San Felipe, Getsemaní, Rosario Islands, and Caribbean food — from $55/day to $300/day luxury.",
  keywords: ["Cartagena Colombia itinerary", "Cartagena 4 days", "Ciudad Amurallada", "Rosario Islands", "Getsemaní", "Castle San Felipe", "Colombia travel guide", "Cartagena walled city"],
  openGraph: {
    title: "Cartagena Colombia in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
    description: "4-day Cartagena Colombia itinerary — walled city, San Felipe, Rosario Islands — from $55/day to $300/day.",
    url: "https://incredibleitinerary.com/blog/cartagena-4-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/cartagena-4-days.jpg", width: 1200, height: 630, alt: "Cartagena Colombia colorful colonial buildings walled city Old Town Caribbean" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cartagena Colombia in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
    description: "4-day Cartagena Colombia itinerary — walled city, San Felipe, Rosario Islands, $55–$300/day.",
    images: ["https://incredibleitinerary.com/og/cartagena-4-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/cartagena-4-days" },
};

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Cartagena",
  country: "Colombia",
  countryFlag: "🇨🇴",
  slug: "cartagena-4-days",
  heroQuery: "cartagena colombia old town walled city colorful buildings caribbean",
  heroAlt: "Cartagena Colombia colorful colonial buildings walled city Old Town Caribbean",
  category: "South America",
  date: "February 1, 2026",
  readTime: "11 min read",
  intro: "The most beautiful colonial city in the Americas, where Spanish conquistadors built the best-preserved fortifications in the New World around a city of bougainvillea-draped balconies and ceviche eaten at street carts. The Rosario Islands lie 45 minutes away by speedboat with the clearest Caribbean water outside the Maldives. A city that has transformed from a byword for danger into one of South America's great travel destinations in a single generation — driven by the warmth of its costeño people, the pastel colours of its restored colonial mansions, and a food scene that might be the best on Colombia's coast. Cartagena — Colombia's crown jewel.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$55",
    bestMonths: "Dec–Apr (dry season)",
    airport: "CTG (Rafael Núñez)",
  },

  toc: [
    { id: "visa",        emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights",  emoji: "🏰", label: "Top Highlights" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "gallery",     emoji: "📸", label: "Photo Gallery" },
    { id: "combine",     emoji: "🗺️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "No — visa-free (updated policy)"],
        ["Stay Allowed", "90 days on arrival"],
        ["Passport Validity", "6 months beyond intended stay"],
        ["Proof Required", "Return ticket + proof of accommodation"],
        ["Extension", "Apply at Migración Colombia before expiry"],
        ["Note", "Colombia updated its policy to allow Indian passport holders visa-free entry. Confirm current requirements at the Colombian embassy website before travel."],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passport",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required", "No — visa-free entry"],
        ["Stay Allowed", "90 days on arrival"],
        ["Extensions", "Up to 180 days total per year with Migración Colombia"],
        ["Passport Validity", "Valid for duration of stay"],
        ["Health Entry", "Yellow fever vaccination certificate may be required if arriving from endemic areas"],
        ["Note", "Colombia is part of no visa-free zone — the 90 days are Colombia-specific"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Backpacker",
      sub: "$55/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival + exploring the walled city on foot",
          items: [
            "Arrive at CTG Rafael Núñez airport (the runway literally ends at the Caribbean Sea) — take the metered taxi to the Old Town (~COP 25,000 / $6)",
            "Check in to a hostel in Getsemaní or just outside the walls (Media Luna Hostel, Mamallena, or similar — $12–$18/dorm)",
            "Walk the Ciudad Amurallada: the 13km of Spanish colonial walls, some up to 17 metres thick, built over 200 years from 1586",
            "Sunset on the city walls near Baluarte de San Francisco Javier — the best free viewpoint in the city",
            "Dinner in Getsemaní: arepa de huevo (fried egg arepa) and grilled fish at a plaza cart for $4–$6",
          ],
          cost: "$45 (taxi $6, hostel $15, food $12, drinks $8, misc $4)",
        },
        {
          day: "Day 2",
          title: "Castle of San Felipe + Getsemaní street art walk",
          items: [
            "Morning: Castle of San Felipe de Barajas ($7 entry) — the most impressive Spanish fortification in the Americas, built in 1657, with an ingenious tunnel system that amplified enemy footsteps",
            "Hire a guide at the castle entrance ($10) to understand the military engineering — without context it's just a big hill of stone",
            "Afternoon: Getsemaní neighbourhood walking tour — from Colombia's most dangerous barrio to its most colourful in 15 years; murals cover every wall in the Plaza de la Trinidad",
            "Join the locals at the Plaza de la Trinidad in the early evening — cold beer from the corner shop, salsa music, dominos",
            "Dinner at El Boliche Cevichería — the best ceviche in Cartagena at local prices ($5–$8 a plate)",
          ],
          cost: "$50 (castle $17, food $15, drinks $10, misc $8)",
        },
        {
          day: "Day 3",
          title: "Rosario Islands day trip",
          items: [
            "Take the shared speedboat from Muelle Turístico La Bodeguita at 8am to Playa Blanca, Isla Barú ($25–$35 return, 45 min)",
            "Playa Blanca: white sand beach, crystal Caribbean water — arrive early before the day-tripper crowds from the cruise ships",
            "Snorkelling in the Rosario Islands coral reef system ($10 equipment rental, guide included in some tours)",
            "Fresh grilled lobster on the beach for $12 — order directly from the fishing families",
            "Return boats leave by 4pm; watch for dolphins on the crossing",
          ],
          cost: "$65 (boat $30, food + lobster $20, snorkelling $10, misc $5)",
        },
        {
          day: "Day 4",
          title: "Convento de la Popa + Old Town farewell wander",
          items: [
            "Morning: Convento de la Popa ($4 entry) — the white convent on the highest hill in Cartagena, 150m above the city, panoramic view over the bay, Old Town, and Caribbean",
            "Take a taxi up ($3 one-way) — the road is too steep and unsafe to walk",
            "Walk back down through the Old Town: Plaza de Bolívar, the Cathedral of Cartagena (free entry), Las Bóvedas (colonial arched dungeons now converted to craft shops)",
            "Last meal: sancocho de pescado (fish stew) at La Cevichería or any plaza comedor",
            "Taxi to CTG airport (~$6) — check-in desk queues can be long, arrive 2 hours early",
          ],
          cost: "$40 (convent $4, taxis $9, food $15, shopping $12)",
        },
      ],
    },
    {
      label: "Mid-Range Explorer",
      sub: "$120/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival + boutique hotel check-in + Old Town tour",
          items: [
            "Taxi or Uber from CTG to your boutique hotel in the Old Town (~$8)",
            "Check in to a colonial casa hotel inside the walls ($70–$110/night) — Airbnb-style or boutique hotels with internal courtyards, hammocks, and rooftop terraces",
            "Guided 2-hour walking tour of Ciudad Amurallada ($25) with a licensed local guide",
            "Sunset cocktails at Café del Mar on the city walls — overpriced but essential, mojito in hand as the sun drops into the Caribbean ($15–$20 per drink)",
            "Dinner at La Vitrola — the most famous restaurant in Cartagena, live jazz and Cuban-Caribbean food in a restored colonial mansion, $25–$40 mains",
          ],
          cost: "$130 (taxi $8, hotel $90, tour $25, drinks $20, dinner $35)",
        },
        {
          day: "Day 2",
          title: "San Felipe fortress + private Old Town photography walk",
          items: [
            "Morning: Castle of San Felipe with a private guide ($50 including entry) — the tunnels, the false walls, the hidden cisterns — a 2-hour deep dive into Spanish military engineering",
            "Afternoon: Photography walk of Getsemaní with a local photographer ($60/2 hrs) — they know every unobstructed mural, every colourful doorway, every rooftop view point",
            "Visit Mercado de Bazurto — the real Cartagena away from the tourist circuit, enormous local food and goods market, staggeringly photogenic",
            "Evening: Sunset boat cruise from Las Bóvedas wharf ($25) — salsa music, rum, and the walled city lit gold as the sun sets behind it",
          ],
          cost: "$130 (castle tour $50, photo walk $60, market taxi $5, sunset cruise $25)",
        },
        {
          day: "Day 3",
          title: "Rosario Islands private speedboat",
          items: [
            "Private speedboat charter to the Rosario Islands ($120–$180 for the boat, 4–6 people, stop at multiple islands)",
            "Snorkelling at Isla del Rosario coral garden with full equipment and guide ($15)",
            "Private beach club on Isla Grande — loungers, hammocks, and a cook who prepares fresh fish caught that morning",
            "Stand-up paddleboarding in the turquoise lagoon ($20 rental)",
            "Return via Playa Blanca for a final swim before heading back to Cartagena",
          ],
          cost: "$140 (boat $120 split, snorkel $15, paddleboard $20, lunch $30, misc $15)",
        },
        {
          day: "Day 4",
          title: "Cooking class + Bocagrande beach + farewell",
          items: [
            "Morning: Colombian Caribbean cooking class ($65 at Marea Cocina or La Cocina de Pepina) — make patacones, arepas de choclo, arroz con coco, and the classic mojarra frita",
            "Afternoon: Bocagrande beach — the modern city's beachfront, complete with high-rises and beach vendors selling cold beer and fruit",
            "Swim, beach volleyball, and a final fresh coconut",
            "Departure: Uber or taxi to CTG airport ($8–$12)",
            "Final piña colada at the airport bar — this city earns a proper goodbye drink",
          ],
          cost: "$120 (class $65, beach $10, food $25, transport $10, drinks $10)",
        },
      ],
    },
    {
      label: "Luxury Caribbean",
      sub: "$300/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival + Casa San Agustín / Sofitel check-in",
          items: [
            "Private driver from CTG ($25) to Casa San Agustín, Hotel Sofitel Legend Santa Clara, or Bastión Luxury Hotel ($250–$450/night) — the latter is a restored 17th-century Spanish bastion with rooftop pool overlooking the walls",
            "Complimentary champagne check-in, room upgrade if available",
            "Private 2-hour guided architectural tour of the Old Town ($90 pp, custom itinerary)",
            "Dinner at El Cielo — Colombia's most famous tasting menu restaurant (Michelin-level, $80–$120 pp) with molecular gastronomy based on Colombian ingredients",
            "After-dinner walk on the illuminated city walls",
          ],
          cost: "$320 (hotel $300, tour $90, dinner $100, drinks $30)",
        },
        {
          day: "Day 2",
          title: "Castle of San Felipe private tour + sunset sailing",
          items: [
            "Private early-morning tour of Castillo San Felipe ($120 for exclusive 2-hour access before crowds, includes expert military historian guide)",
            "Mid-morning: Visit the Palacio de la Inquisición museum ($4) — the beautifully restored palace where the Spanish Inquisition operated in New Granada, sobering and fascinating",
            "Afternoon: Getsemaní private street art tour and local lunch at El Barrio ($35/person guided walk + lunch)",
            "Sunset: Private sailing catamaran from Club Náutico ($200 for 2-hr private charter) — champagne, snacks, and the Cartagena skyline at golden hour",
            "Dinner at Celele — contemporary Caribbean fine dining using exclusively Atlantic and Pacific Colombian ingredients, $60–$90 pp",
          ],
          cost: "$350 (castle $120, museum $4, street art $35, catamaran $100/pp, dinner $80)",
        },
        {
          day: "Day 3",
          title: "Private yacht to Rosario Islands",
          items: [
            "Private yacht charter to the Rosario Islands ($400–$600/day for 6–8 people) — multi-island itinerary, fully crewed, chef on board",
            "Snorkelling at three separate coral reef sites with professional dive guide ($50 pp)",
            "Freshly prepared ceviche, lobster, and tropical fruits for lunch on the yacht deck",
            "Private beach club access on Isla del Pirata ($30/pp) — open bar, loungers, kayaks",
            "Return via Playa Blanca — swim at the sandbar as the afternoon light turns golden",
          ],
          cost: "$300 (yacht $150/pp split, dive $50, beach club $30, incl. food and drinks)",
        },
        {
          day: "Day 4",
          title: "Spa morning + Convento de la Popa + private farewell dinner",
          items: [
            "Morning: Full spa morning at the hotel — Caribbean sea salt scrub, hot stone massage, hammam session ($200 package)",
            "Late morning: Private car to Convento de la Popa ($30 including car wait) — private guide for the convent and city panorama ($40)",
            "Farewell lunch at Alma Restaurant at Casa San Agustín — refined Caribbean cuisine in the most beautiful courtyard in Cartagena",
            "Afternoon walk through Las Bóvedas for final artisan gift purchases — Colombian emeralds, Wayuu mochilas, hand-rolled Montecristo cigars",
            "Private transfer to CTG airport ($25) — with extra baggage allowance no doubt needed",
          ],
          cost: "$330 (spa $200, guide $40, car $30, lunch $50, gifts $100, transport $25)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–20 (hostel dorm/Getsemaní)",
      food: "$10–15 (street food/comedores)",
      transport: "$5–10 (taxis/walking)",
      activities: "$10–20 (castle + boat)",
      total: "$55/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$70–110 (boutique casa hotel)",
      food: "$25–40 (restaurants)",
      transport: "$10–20 (taxis/Uber)",
      activities: "$30–60 (guided tours + islands)",
      total: "$120/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$250–450 (Santa Clara/Sofitel)",
      food: "$60–100 (fine dining incl. in some packages)",
      transport: "$20–40 (private car)",
      activities: "$80–150 (private experiences)",
      total: "$300/day",
    },
    {
      tier: "🎒 Flashpacker",
      accommodation: "$30–50 (private room, Getsemaní)",
      food: "$15–25 (mixed)",
      transport: "$8–15 (Uber/taxi)",
      activities: "$20–35 (select tours)",
      total: "$80/day",
    },
    {
      tier: "🌊 Islands Focus",
      accommodation: "$50–80 (Old Town guesthouse)",
      food: "$15–25 (beach + city mix)",
      transport: "$30–50 (boat charters)",
      activities: "$40–70 (snorkelling/sailing)",
      total: "$130/day",
    },
  ],

  mistakes: [
    {
      icon: "🌡️",
      title: "Underestimating the heat — it is genuinely brutal",
      desc: "Cartagena sits at sea level on the Caribbean coast and is hot and humid year-round. Daily highs of 32–35°C with high humidity. Walk the walls and explore the Old Town in the early morning (7–10am) and late afternoon (4–7pm). The midday hours are for beach, pool, or AC. Linen clothing and a fan room are non-negotiable.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚤",
      title: "Booking Rosario Islands through hotel or tour desk",
      desc: "Hotels add 30–50% markup on Rosario Islands tours. Book directly at the Muelle Turístico La Bodeguita wharf the morning before. Shared boats to Playa Blanca cost COP 80,000–120,000 return ($20–$30). The hotel 'package' for the same trip often costs $60–$80 pp.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏘️",
      title: "Staying in Bocagrande instead of the Old Town",
      desc: "Bocagrande (the modern high-rise beach strip) has cheaper chain hotels but you lose the entire point of Cartagena — the colonial atmosphere, the street food, the evening walks on the walls. Even a mid-range casa hotel inside the walls ($70–$100/night) puts you in the heart of it.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💵",
      title: "Using USD or exchanging at the airport",
      desc: "Airport exchange desks give terrible rates. Use ATMs in the Old Town (Bancolombia or Davivienda) for Colombian pesos. The mid-range restaurants inside the walls accept both cash and card — many small vendors are cash only. Withdraw pesos on arrival and keep small bills for street food and taxis.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌙",
      title: "Walking in Getsemaní alone late at night",
      desc: "Getsemaní has improved enormously but is still a neighbourhood in transition. The Plaza de la Trinidad is safe and vibrant until midnight. The streets behind it are less so after 11pm. Walk in pairs, avoid displaying phones or cameras, and take an Uber or taxi back to your hotel rather than walking through unfamiliar side streets after midnight.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🎵",
      title: "The real Cartagena is in Getsemaní, not the walled city",
      desc: "The walled city is beautiful but increasingly Disneyfied — $15 mojitos and restaurants aimed at cruise passengers. Getsemaní is where the city breathes: the Plaza de la Trinidad fills every evening with locals, dominos, cold Águila beer from the corner tienda, and free salsa. Eat here, drink here, and come back for the Sunday evening street food market.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🦞",
      title: "Eat the ceviche — especially the leche de tigre",
      desc: "Cartagena's ceviche is some of the best in South America. The 'leche de tigre' (tiger's milk — the citrus marinade drained from the ceviche) is served as a shot and said to cure hangovers. La Cevichería on Calle Stuart is the most famous; El Boliche in Getsemaní is equally good at half the price.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌅",
      title: "Do the sunset walk on the city walls every evening",
      desc: "The walls are free to walk and the sunset view from Baluarte de San Francisco Javier or the Café del Mar stretch is spectacular every evening. Locals bring their own beer and snacks. The pastel-coloured buildings turn gold, the bougainvillea glows, and the Caribbean shimmers below. Make this your daily ritual regardless of budget.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "📲",
      title: "Download the Uber and Cabify apps before you arrive",
      desc: "Uber operates legally in Cartagena. It is always cheaper than tourist taxis and you avoid price negotiation. The Old Town to the airport should cost COP 20,000–30,000 ($5–$7) by Uber vs the taxi drivers asking COP 50,000+. The app shows the fare upfront in pesos.",
      color: "bg-teal-50 border-teal-200",
    },
  ],

  faqs: [
    {
      q: "Do Indian passport holders need a visa for Colombia?",
      a: "No. Colombia updated its entry policy to allow Indian passport holders to enter visa-free for up to 90 days. This is a relatively recent change — always verify current requirements at the official Colombian Migración website (migracioncolombia.gov.co) before travel, as policies can change. Bring a return ticket and proof of accommodation when asked at immigration.",
    },
    {
      q: "Is Cartagena safe to visit in 2026?",
      a: "Cartagena is one of Colombia's most visited and tourist-friendly cities. The Old Town (Ciudad Amurallada) and Bocagrande are very safe. Getsemaní is safe during the day and early evening at the plaza. Exercise normal urban caution: don't display expensive equipment, avoid unfamiliar streets late at night, use Uber rather than hailing random taxis, and don't accept drinks from strangers in bars. Colombia has transformed dramatically from its 1990s reputation.",
    },
    {
      q: "When is the best time to visit Cartagena?",
      a: "December to April is the dry season with lower humidity, less rain, and calmer seas for the Rosario Islands. December and January are peak season — prices are higher and the city buzzes with Colombian holidaymakers. May–November is wetter but cheaper, and the islands are still accessible most days. Avoid late October and early November when wind and rain are heaviest.",
    },
    {
      q: "How do I get from Cartagena to the Rosario Islands?",
      a: "Shared speedboats depart from Muelle Turístico La Bodeguita (near the Old Town walls) daily from 8am–10am, returning by 4pm–5pm. Cost is COP 80,000–100,000 return ($20–$25) to Playa Blanca on Isla Barú. Book the day before at the pier or any hostel. For the full Rosario archipelago (coral reefs, multiple islands), book a day tour ($40–$60 pp) which includes a boat, guide, and snorkelling equipment.",
    },
  ],

  combineWith: ["bogota-colombia", "medellin-4-days", "san-andres-island"],
  relatedSlugs: ["costa-rica-7-days", "antigua-guatemala-4-days", "peru-machu-picchu"],
  galleryQuery: "cartagena colombia walled city caribbean beach colonial",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function CartagenaPage() {
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
