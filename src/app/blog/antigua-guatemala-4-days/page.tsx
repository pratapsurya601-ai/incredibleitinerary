import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Antigua Guatemala in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description": "A complete 4-day Antigua Guatemala travel guide covering colonial ruins, volcanic hikes, Lake Atitlán day trips, language schools, and Semana Santa — from $40/day to $200/day.",
    "image": "https://incredibleitinerary.com/og/antigua-guatemala-4-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-20",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/antigua-guatemala-4-days"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Antigua Guatemala 4 Days", "item": "https://incredibleitinerary.com/blog/antigua-guatemala-4-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Antigua Guatemala",
    "description": "A UNESCO World Heritage colonial city at 1,500m altitude surrounded by three volcanoes, famous for preserved Spanish Baroque architecture, ruins, and Semana Santa processions.",
    "geo": { "@type": "GeoCoordinates", "latitude": 14.5586, "longitude": -90.7295 },
    "touristType": ["Cultural Traveller", "History Enthusiast", "Adventure Traveller", "Language Student"],
    "url": "https://incredibleitinerary.com/blog/antigua-guatemala-4-days"
  }
];

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Antigua Guatemala 4-Day Itinerary 2026: Trip Planner",
  description: "Plan your Antigua Guatemala trip in 4 days. 4-day Antigua Guatemala itinerary covering colonial ruins, Volcán Pacaya, Lake Atitlán, language schools, and.",
  keywords: ["Antigua Guatemala itinerary", "Antigua 4 days", "Volcán Pacaya hike", "Lake Atitlán day trip", "Semana Santa Antigua", "Guatemala travel guide", "colonial ruins Guatemala"],
  openGraph: {
    title: "Antigua Guatemala 4-Day Itinerary 2026: Trip Planner",
    description: "4-day Antigua Guatemala itinerary — colonial ruins, volcanoes, Lake Atitlán — from $40/day to $200/day.",
    url: "https://incredibleitinerary.com/blog/antigua-guatemala-4-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/antigua-guatemala-4-days.jpg", width: 1200, height: 630, alt: "Antigua Guatemala colonial yellow arch with Agua Volcano in background" }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antigua Guatemala 4-Day Itinerary 2026: Trip Planner",
    description: "4-day Antigua Guatemala itinerary — ruins, volcanoes, Lake Atitlán, $40–$200/day.",
    images: ["https://incredibleitinerary.com/og/antigua-guatemala-4-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/antigua-guatemala-4-days" },
};

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Antigua",
  country: "Guatemala",
  countryFlag: "🇬🇹",
  slug: "antigua-guatemala-4-days",
  heroQuery: "antigua guatemala colonial buildings volcanoes ruins arch",
  heroAlt: "Antigua Guatemala colonial yellow arch with Agua Volcano in background",
  category: "Central America",
  date: "January 20, 2026",
  readTime: "11 min read",
  intro: "A perfectly preserved Spanish colonial city at 1,500 metres altitude where every cobblestone street ends with a volcano backdrop. Ruins of churches destroyed by earthquakes in 1773 that were never rebuilt — they look like film sets. The best Spanish language schools in the world where you live with a family for $100 per week. Semana Santa processions where thousands of robed penitents carry ornate floats through streets carpeted in sawdust and flowers, a spectacle so extraordinary the Vatican has declared it among the most important Catholic ceremonies on Earth. Antigua — Guatemala's most beautiful city, and one of the most beautiful cities in the Americas.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$40",
    bestMonths: "Nov–Apr (dry season)",
    airport: "GUA (La Aurora, Guatemala City, 45 min)",
  },

  toc: [
    { id: "visa",        emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights",  emoji: "🏛️", label: "Top Highlights" },
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
        ["Visa Required", "Yes — apply before travel"],
        ["Where to Apply", "Guatemalan Embassy or Consulate"],
        ["Visa Fee", "~$30 USD"],
        ["Processing Time", "5–10 business days"],
        ["CA-4 Agreement", "One visa covers Guatemala, Honduras, El Salvador, Nicaragua"],
        ["Validity", "Single or multiple entry, up to 90 days in CA-4 region combined"],
        ["Note", "Apply well in advance — Guatemala has limited embassy presence in India"],
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
        ["Stay Allowed", "Up to 90 days (CA-4 region total)"],
        ["CA-4 Note", "90 days shared across Guatemala, Honduras, El Salvador, and Nicaragua combined"],
        ["Passport Validity", "6 months beyond intended stay recommended"],
        ["Extension", "Exit to Mexico or Belize, re-enter for a fresh 90 days"],
        ["Border Control", "May ask for return ticket and proof of funds"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Backpacker",
      sub: "$40/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival from Guatemala City + colonial walking tour",
          items: [
            "Take the Tica Bus or Pullmantur shuttle from GUA airport to Antigua (~$15, 45 min) — or share a taxi with fellow travellers (~$25 for the car)",
            "Check in to a hostel in the historic centre (Hostal Los Pasos, Jungle Party Hostel, or similar — $8–$14/dorm)",
            "Self-guided walking tour: Parque Central, Catedral de Santiago ruins, Palacio de los Capitanes Generales, Plaza Mayor fountain",
            "Watch the colourful tuk-tuks weave through cobblestone streets",
            "Dinner at a comedor (local canteen) — pepián de pollo (chicken in pumpkin-seed sauce) for $3–$4",
          ],
          cost: "$35 (transport $15, hostel $12, food $8)",
        },
        {
          day: "Day 2",
          title: "Arch of Santa Catalina + ruins of Antigua",
          items: [
            "Morning: Arch of Santa Catalina at sunrise — the golden hour light with Volcán Agua perfectly framed behind the arch is the most photographed image in Guatemala",
            "Walk the ruins circuit: La Merced Church ruins ($3), Compañía de Jesús ruins, and the hauntingly beautiful Convento Santa Clara ($3)",
            "Cerro de la Cruz viewpoint — 30-minute uphill walk from town, panoramic views over Antigua and three volcanoes",
            "Jade Museum on 4ta Calle — free to enter the showroom, fascinating pre-Columbian jade history",
            "Evening: Rooftop bar at Terraza de Las Flores — $2 beers, volcano views, string lights",
          ],
          cost: "$30 (entries $8, food $12, drinks $6, misc $4)",
        },
        {
          day: "Day 3",
          title: "Volcán Pacaya hike — lava at your feet",
          items: [
            "Join a group shuttle tour to Volcán Pacaya ($15 return transport from Antigua + $6 park entry)",
            "2-hour hike to the summit of the active volcano — guides roast marshmallows and corn on the active lava flows (not a tourist gimmick — the lava is genuinely accessible)",
            "Rent a horse for the ascent if needed ($8 with guide)",
            "Return to Antigua by early afternoon",
            "Afternoon: Mercado de Artesanías for jade, textiles, and Mayan crafts — budget $10–$20 for shopping",
          ],
          cost: "$40 (volcano tour $21, horse optional $8, food $8, shopping $15)",
        },
        {
          day: "Day 4",
          title: "Coffee farm visit + farewell Antigua",
          items: [
            "Morning: Finca Filadelfia coffee farm tour ($12) — see the full bean-to-cup process on a working plantation with Volcán Acatenango behind it",
            "Taste freshly roasted single-origin Antigua coffee — one of the best coffee regions in the world",
            "Browse 5ta Avenida Norte for last-minute souvenirs: handwoven huipiles, worry dolls, carved wood",
            "Lunch at Café Condesa in the portal of the Parque Central — mango smoothie and tamale for $5",
            "Bus back to GUA airport (~$15) or continue to Lake Atitlán (2-hr shuttle, $15)",
          ],
          cost: "$40 (farm $12, food $10, shopping $10, transport $15)",
        },
      ],
    },
    {
      label: "Mid-Range Explorer",
      sub: "$85/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival + private walking tour with local historian",
          items: [
            "Private transfer from GUA airport to Antigua ($35–$50 for car, comfortable and reliable)",
            "Check in to a colonial boutique hotel ($50–$80/night) — courtyard with fountain, tiled floors, bougainvillea walls",
            "Private 2-hour walking tour with a licensed local historian ($40) — the story of the 1773 Santa Marta earthquake that destroyed half the city is extraordinary",
            "Sunset cocktails at the rooftop of Hotel Casa Santo Domingo — 360° volcano view across the ruined convent",
            "Dinner at Hector's Bistro or La Cuevita de los Urquizú — modern Guatemalan fusion, $15–$25 mains",
          ],
          cost: "$90 (transfer $40, hotel $65, tour $40, dinner $30)",
        },
        {
          day: "Day 2",
          title: "Ruins circuit + Volcán Acatenango base camp (overnight)",
          items: [
            "Morning: Full ruins ticket package ($15) covering La Merced, Compañía de Jesús, and Convento Santa Clara at your own pace",
            "Afternoon: Transfer to Acatenango base camp (~$20 in shuttle)",
            "Begin 4–5 hour ascent of Volcán Acatenango (3,976m) with certified guide and full camping equipment rental ($50–$70 with OX Expeditions or Tropicana Hostel tours)",
            "Camp at the summit ridge as the sun sets over the Pacific — watch Volcán Fuego (the world's most active volcano) erupt every 15–20 minutes, the orange lava visible against the dark sky",
            "Hot tea and dinner cooked at camp by guide",
          ],
          cost: "$110 (ruins $15, Acatenango overnight tour $65, misc $30)",
        },
        {
          day: "Day 3",
          title: "Acatenango descent + Lake Atitlán day trip",
          items: [
            "Pre-dawn: Watch the sunrise from Acatenango summit above the clouds — one of the great experiences in Central America",
            "2-hour descent, transfer back to Antigua by midday",
            "After a shower and lunch, optional afternoon shuttle to Lake Atitlán (2 hrs, $15) — Panajachel, San Juan La Laguna, or San Pedro for a few hours",
            "OR rest in Antigua — spa treatment at Mayan Hands Fair Trade Spa ($40 for 60-min massage) and an evening of chocolate tasting at ChocoMuseo",
            "Dinner at Mesón Panza Verde — Antigua's most romantic restaurant, $25–$35 mains",
          ],
          cost: "$100 (descent incl. in Day 2 tour, Atitlán $15, spa $40, dinner $30, misc $15)",
        },
        {
          day: "Day 4",
          title: "Chichicastenango market (Thu/Sun) or cooking class",
          items: [
            "If it's Thursday or Sunday: Day trip to Chichicastenango market ($20 shuttle return) — the largest indigenous market in Central America, a riot of colour, incense, flowers, and Mayan ceremony",
            "Watch the K'iche' Maya ceremony at the Church of Santo Tomás — copal incense, rose petals, and ancient rituals on the church steps",
            "Alternatively (any day): Morning Guatemalan cooking class ($45) at Cocina Hermanos or El Frijol Feliz — make pepián, rellenitos, and tortillas from scratch with a local chef",
            "Afternoon: Final stroll along 5ta Avenida Norte for textiles and jade",
            "Transfer back to GUA ($35) or onward to next destination",
          ],
          cost: "$95 (day trip or class $45, food $20, shopping $15, transfer $35, misc $10)",
        },
      ],
    },
    {
      label: "Luxury Colonial",
      sub: "$200/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival + Casa Santo Domingo check-in",
          items: [
            "Private luxury transfer from GUA in an air-conditioned SUV with bilingual driver ($60)",
            "Check in to Casa Santo Domingo or Porta Hotel Antigua ($180–$280/night) — built within a restored 17th-century Dominican convent, colonial courtyards and museum included",
            "Complimentary museum tour of the property's colonial-era archaeological finds",
            "Private evening cocktails on the illuminated ruins terrace",
            "Dinner at Hector's Bistro or the hotel's in-house restaurant — contemporary Guatemalan cuisine with exceptional wine list",
          ],
          cost: "$220 (transfer $60, hotel $220, dinner $40, incl.)",
        },
        {
          day: "Day 2",
          title: "Private Antigua architecture tour + Volcán Pacaya at sunset",
          items: [
            "Private 3-hour architectural history tour with the city's leading historian ($90) — access to private courtyards and normally-closed ruins",
            "Champagne lunch at the rooftop of Hotel Palacio de Doña Leonor",
            "Private sunset tour of Volcán Pacaya ($80 pp with private guide and vehicle) — reach the lava field as the sky turns orange",
            "Private roast dinner on the volcano: guides bring full grilling equipment and local ingredients",
            "Return by starlight, volcanic glow behind you",
          ],
          cost: "$230 (tour $90, lunch $30, Pacaya private $80, dinner $30)",
        },
        {
          day: "Day 3",
          title: "Lake Atitlán private boat + Acatenango at dawn",
          items: [
            "Private driver to Lake Atitlán (2 hrs, $80 round trip) — stop at Sumpango for Mayan weaving cooperative",
            "Private boat across Lake Atitlán ($50/hr) visiting San Juan La Laguna (Tz'utujil Maya), San Marcos (yoga/spiritual retreat community), and Santiago Atitlán (traditional dress, textile market)",
            "Lunch at Lomas de Tzununá — spectacular lake-view terrace restaurant ($30–$40/person)",
            "Late afternoon return to Antigua — optional Volcán Fuego night viewpoint detour",
            "Spa evening at the hotel: volcanic stone massage ($120)",
          ],
          cost: "$250 (driver $80, boat $100, lunch $40, spa $120, misc $30)",
        },
        {
          day: "Day 4",
          title: "Chichicastenango private tour + farewell",
          items: [
            "Private early-morning transfer to Chichicastenango market ($60 return, private vehicle)",
            "Private guide through the market ($50) — access the inner vendors, meet the market organisers, understand the Mayan trading system that has operated here for 600 years",
            "Private jade workshop visit: see Mayan jade being cut and polished in the traditional manner, custom piece made to order",
            "Return to Antigua for farewell lunch at La Sin Ventura — open-air courtyard, Guatemalan cuisine",
            "Luxury transfer to GUA airport ($60)",
          ],
          cost: "$200 (transport $120, guide $50, jade $60, lunch $25, misc $20)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$8–15 (hostel dorm)",
      food: "$8–12 (comedores/markets)",
      transport: "$5–10 (chicken buses/shuttles)",
      activities: "$10–20 (ruins + volcano)",
      total: "$40/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$50–80 (boutique hotel)",
      food: "$20–35 (restaurants)",
      transport: "$15–25 (shared shuttles)",
      activities: "$25–50 (guided tours)",
      total: "$85/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$180–280 (colonial hotel)",
      food: "$40–60 (fine dining)",
      transport: "$40–80 (private transfers)",
      activities: "$60–100 (private guides)",
      total: "$200/day",
    },
    {
      tier: "🎒 Flashpacker",
      accommodation: "$25–45 (private room)",
      food: "$12–20 (mixed)",
      transport: "$10–15 (shared shuttles)",
      activities: "$15–30 (select tours)",
      total: "$60/day",
    },
    {
      tier: "📚 Language Student",
      accommodation: "$80–120 (homestay + meals)",
      food: "Incl. in homestay",
      transport: "$5 (walking city)",
      activities: "$20–40 (weekend trips)",
      total: "$55/day (homestay incl.)",
    },
  ],

  mistakes: [
    {
      icon: "📅",
      title: "Not booking Semana Santa accommodation 12 months ahead",
      desc: "Semana Santa (Holy Week, the week before Easter) is the most important event in Antigua. Hotels in the historic centre sell out 12 months in advance and prices triple. If you want to attend, book in October or November the previous year — there are no exceptions.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌋",
      title: "Booking Acatenango without proper preparation",
      desc: "Volcán Acatenango (3,976m) is genuinely cold at night — temperatures drop to -5°C on the summit. Tourists who book last-minute without renting proper gear (sleeping bag, thermal layers, waterproof jacket) have a miserable time. Use a reputable operator like OX Expeditions who includes gear rental.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💧",
      title: "Drinking tap water",
      desc: "Never drink tap water in Guatemala, including in Antigua. Bring a filtered water bottle (LifeStraw or Sawyer) or buy 5-litre garrafones from any tienda for Q5 (~$0.65). This eliminates one of the main causes of traveller illness.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚕",
      title: "Taking unofficial taxis from the bus terminal",
      desc: "The bus and shuttle drop-off in Antigua attracts unofficial taxis that charge 3–4x the going rate. The official tuk-tuk fare anywhere within the city is Q5–Q10 (~$0.65–$1.30). Agree the price before getting in. Use registered yellow tuk-tuks for city trips.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗓️",
      title: "Missing the Chichicastenango market days",
      desc: "Chichicastenango market only operates on Thursdays and Sundays. Plan your itinerary around one of those days if you want to visit — a 2-hour shuttle ride for a closed market is a very avoidable mistake.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🇪🇸",
      title: "Take Spanish classes — even for just 2 days",
      desc: "Antigua is the world capital of Spanish language learning. A 4-hour daily private class with a fully qualified teacher costs $6–$10/hour — the cheapest and best-quality Spanish tuition anywhere. Even 2 days of classes will transform your Guatemala experience. Schools: Proyecto Lingüístico Francisco Marroquín, Centro Lingüístico Maya.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "📸",
      title: "Antigua Guatemala 4-Day Itinerary 2026: Trip Planner",
      desc: "The Arch is on 5ta Avenida Norte (the main pedestrian street). Sunrise gives you warm light on the arch with almost no tourists. By 9am there are tour groups. Golden hour (5–6pm) gives magical soft light with Volcán Agua behind. Both shots are wall-worthy.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍫",
      title: "Guatemala produces some of the world's best chocolate and coffee",
      desc: "The volcanic soil around Antigua produces exceptional cacao. Visit ChocoMuseo (free entry) for the history, or take a chocolate-making class ($25). For coffee, visit Café de la Escalonia or the Finca Filadelfia estate — Antigua-grown beans are some of the most celebrated in specialty coffee circles.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🧵",
      title: "Buy textiles direct from cooperatives, not market stalls",
      desc: "The most beautiful traditional Mayan textiles come from cooperatives in San Juan La Laguna and Santiago Atitlán. Buying directly from the weaver pays full value to the maker and means you get authentic handwoven huipiles, not machine-made copies. Ask if the piece is hecho a mano (handmade) and by whom.",
      color: "bg-teal-50 border-teal-200",
    },
  ],

  faqs: [
    {
      q: "Do Indian passport holders need a visa for Guatemala?",
      a: "Yes, Indian passport holders need a visa for Guatemala. Apply at the nearest Guatemalan embassy or consulate — there are offices in New Delhi and Mumbai. The fee is approximately $30 and processing takes 5–10 business days. Guatemala is part of the CA-4 agreement, meaning one approved visa covers Guatemala, Honduras, El Salvador, and Nicaragua for a combined 90 days.",
    },
    {
      q: "Is Antigua safe to visit as a solo traveller?",
      a: "Antigua is one of the safer cities in Central America and is very popular with solo travellers. The centro histórico is tourist-friendly and well-patrolled. The main precautions: don't walk outside the city centre after dark (take a tuk-tuk), don't display expensive cameras or jewellery, and use established tour operators for volcano hikes rather than freelance guides on the street.",
    },
    {
      q: "How many days is enough for Antigua?",
      a: "Three to four days covers the essential Antigua experience: the colonial ruins, a volcano hike, the market, and a day trip to Lake Atitlán. If you're doing Spanish school, a week is the minimum. If you're attending Semana Santa, plan for a full week as the processions happen daily from Palm Sunday to Easter Sunday.",
    },
    {
      q: "What is the best way to get from Guatemala City airport to Antigua?",
      a: "The easiest option is a shared shuttle ($15–20/person, 45–60 min), bookable from any hostel or the airport. Private transfers cost $35–60 for the car. Avoid the chicken buses from Guatemala City bus terminal — the connection is confusing and not worth the $3 saving. The shuttle desk is in the airport arrivals hall.",
    },
  ],

  combineWith: ["mexico-city-4-days", "costa-rica-7-days", "belize-reef"],
  relatedSlugs: ["costa-rica-7-days", "cartagena-4-days", "havana-cuba-4-days"],
  galleryQuery: "antigua guatemala colonial ruins volcano market",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function AntiguaGuatemalaPage() {
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
