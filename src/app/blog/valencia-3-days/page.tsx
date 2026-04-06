import type { Metadata } from "next";
import UniversalBlogClient from "@/components/blog/UniversalBlogClient";
import type { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Valencia 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Valencia trip in 3 days. Plan 3 days in Valencia: City of Arts and Sciences, paella origins, Las Fallas festival, Malvarrosa beach, Central.",
  keywords: [
    "Valencia travel guide",
    "Valencia 3 days itinerary",
    "City of Arts and Sciences",
    "Valencia paella origins",
    "Las Fallas festival Valencia",
    "Barrio del Carmen Valencia",
    "Valencia Central Market",
    "Albufera lagoon Valencia",
    "La Lonja de la Seda UNESCO",
    "Valencia budget travel",
  ],
  openGraph: {
    title: "Valencia 3-Day Itinerary 2026: Trip Planner",
    description:
      "Birthplace of paella, home of Calatrava's futuristic city, and host to Spain's most spectacular fire festival — your complete 3-day Valencia guide.",
    url: "https://www.incredibleitinerary.com/blog/valencia-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Valencia Spain City of Arts and Sciences futuristic architecture Calatrava",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valencia 3-Day Itinerary 2026: Trip Planner",
    description:
      "Paella birthplace, Calatrava architecture, Las Fallas fire festival — complete 3-day Valencia itinerary.",
    images: ["https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/valencia-3-days",
  },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Valencia in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Plan 3 days in Valencia with itineraries for every budget. Covers City of Arts and Sciences, paella, Las Fallas, Barrio del Carmen, Albufera lagoon, and the best markets.",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/valencia-3-days",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Valencia 3 Days", item: "https://www.incredibleitinerary.com/blog/valencia-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Valencia",
      description:
        "Valencia is the third-largest city in Spain, birthplace of paella, home to Santiago Calatrava's futuristic City of Arts and Sciences complex, and host of Las Fallas — Spain's most spectacular fire festival each March.",
      url: "https://www.incredibleitinerary.com/blog/valencia-3-days",
      touristType: ["Food lover", "Architecture enthusiast", "Beach traveller", "Festival goer", "Budget traveller"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.4699,
        longitude: -0.3763,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Spain",
      },
    },
  ],
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Valencia",
  country: "Spain",
  countryFlag: "🇪🇸",
  slug: "valencia-3-days",
  heroQuery: "valencia spain city of arts sciences paella old town",
  heroAlt: "Valencia Spain City of Arts and Sciences futuristic architecture Calatrava",
  category: "Europe",
  date: "20 Jan 2026",
  readTime: "12 min read",
  intro:
    "Valencia invented paella — the real one, made with rabbit and snails in a wide flat pan over orange wood, not the tourist version with seafood — and Valencians still make it in giant outdoor pans on Sunday mornings in family backyards. The City of Arts and Sciences complex sits in a dried riverbed where a flood-prone river once flowed, and Santiago Calatrava's futuristic white structures look like they arrived from a different planet rather than 1998. Las Fallas in March is when the Spanish spend a year building million-euro papier-mâché sculptures and then burn every single one of them in a single night of fire and firecrackers. And the Cathedral claims to hold the Holy Grail — the actual one. Valencia, Spain's finest best-kept secret.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€50",
    bestMonths: "Mar (Las Fallas) or Sep–Jun",
    airport: "VLC (Valencia)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "📸", label: "Photo Gallery" },
    { id: "combine", emoji: "✈️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Schengen visa (Spain)"],
        ["Fee", "€80 (adults)"],
        ["Processing", "15–30 working days"],
        ["Apply At", "Spanish Consulate / VFS Global"],
        ["Duration", "Up to 90 days in any 180"],
        ["Tip", "Apply early — March visits (Las Fallas) require booking months ahead"],
      ],
    },
    {
      flag: "🌍",
      title: "UK / US / EU / AUS Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "Visa-free (Schengen area)"],
        ["ETIAS", "Required from mid-2025 (€7, pre-travel online)"],
        ["Duration", "Up to 90 days in any 180"],
        ["UK Note", "ETIAS applies to UK passports post-Brexit"],
        ["Passport", "Valid 3+ months beyond your stay"],
        ["Note", "No border control within Schengen for EU passports"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€50/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town, Central Market & Barrio del Carmen",
          items: [
            "Arrive at VLC airport — take the metro L3/L5 to the city centre (€4.90, 20 mins) — never a taxi for the first trip",
            "Check into a hostel in Barrio del Carmen or Ruzafa (dorms €18–24/night in shoulder season)",
            "Central Market (Mercado Central) — free to enter and browse, one of Europe's most beautiful market buildings (Art Nouveau, 1928)",
            "Buy fresh fruit, olives, and a bocadillo for lunch inside the market (€4–6 total)",
            "Walk to La Lonja de la Seda — UNESCO silk exchange from 1499, stunning Gothic hall (€2 entry)",
            "Explore Barrio del Carmen in the afternoon — street art, medieval towers, indie shops",
            "Dinner: tapas crawl in El Carmen — order pimientos de padrón, croquetas, patatas bravas (€12–18 total)",
          ],
          cost: "€38–48 (hostel + metro + food + La Lonja)",
        },
        {
          day: "Day 2",
          title: "City of Arts and Sciences & Malvarrosa Beach",
          items: [
            "Walk or hire a city bike (€1/hr, Valenbisi app) through the Turia Gardens — the dried riverbed is now a 9km park cutting through the city",
            "City of Arts and Sciences — the exterior is free to photograph and walk around (truly extraordinary architecture)",
            "Hemisfèric IMAX cinema entry (€9) or Museu de les Ciències Príncep Felip (€8) — pick one on a budget",
            "L'Oceanogràfic aquarium is the big ticket (€32) — skip on a tight budget, see it free from outside",
            "Metro or bike to Malvarrosa Beach (Metro L3 to Neptú, €1.50) — the city's main beach, 4km of sandy coastline",
            "Swim and sunbathe — the beach has free showers",
            "Dinner at a beachside restaurant: try a half-portion paella for €9–14 (avoid the obvious tourist trap restaurants — walk one block inland)",
          ],
          cost: "€35–48 (transport + museum + food)",
        },
        {
          day: "Day 3",
          title: "Cathedral, Albufera & Departure",
          items: [
            "Valencia Cathedral — entrance €8, includes the Micalet tower climb (spectacular city views) and the Holy Grail Chapel",
            "The Valencia Holy Grail is genuinely the most credible candidate — a 1st-century AD stone cup with gold medieval additions",
            "Walk to Plaza de la Virgen and Plaza de la Reina for coffee and people-watching",
            "Bus 25 or tour bus to Albufera Natural Park (30 mins, €1.50) — the lagoon where paella was invented",
            "Boat trip on Albufera lagoon (€8 per person, flat-bottomed boats through reed channels)",
            "Lunch at El Palmar village: traditional paella valenciana (rabbit + snails + flat green beans) at a lakeside restaurant (€12–16/person)",
            "Return to Valencia by bus and onward to airport via metro",
          ],
          cost: "€35–50 (cathedral + boat + paella lunch + transport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€110/day",
      days: [
        {
          day: "Day 1",
          title: "Historic Centre Deep Dive",
          items: [
            "Taxi or Uber from VLC airport (€20–25) to a 3-star hotel or boutique guesthouse in the historic centre",
            "Morning: Central Market — buy breakfast inside (fresh orange juice, pan con tomate, €5) then tour the extraordinary iron and glass architecture",
            "La Lonja de la Seda guided tour (€2, or €6 with audio guide) — the twisted gothic columns are extraordinary",
            "Cathedral of Valencia: full ticket including Micalet tower, Holy Grail Chapel, and the museum (€8)",
            "Lunch: mid-range restaurant in the cathedral quarter — fideuà noodle paella or arroz al horno (€18–25)",
            "Afternoon: Barrio del Carmen gallery hopping and the IVAM contemporary art museum (€6)",
            "Dinner at a Ruzafa neighbourhood restaurant — Valencia's trendiest barrio for food (€30–40/person)",
          ],
          cost: "€95–120 (hotel + dining + museums)",
        },
        {
          day: "Day 2",
          title: "City of Arts & Sciences in Full",
          items: [
            "Hire a bike from Valenbisi for the day (€13.30 tourist day pass) — the Turia Garden path to the City of Arts and Sciences is 3km of pure pleasure",
            "L'Oceanogràfic: Europe's largest aquarium (€32) — genuinely world-class, allow 3 hours",
            "Museu de les Ciències: interactive science museum in the iconic Calatrava eye-shaped building (€8)",
            "Lunch at the City of Arts complex café (€15–20)",
            "Afternoon: cycle to Malvarrosa Beach, swim, and relax in the Las Arenas promenade area",
            "Evening: Las Arenas beach restaurant row — La Pepica (where Hemingway ate) for authentic Valencian paella (€22–30/person)",
          ],
          cost: "€100–125 (bike + aquarium + dining)",
        },
        {
          day: "Day 3",
          title: "Albufera Lagoon & Paella Origins",
          items: [
            "Pre-booked half-day Albufera tour with a local guide (€35–50/person) — includes transport, boat trip, and rice field walk",
            "El Palmar village: sit-down lunch at Arrocería la Pechina or a traditional family restaurant — authentic paella valenciana (€18–25)",
            "Afternoon: return to Valencia for a final wander through the Torres de Serranos (€2) — the medieval city gate",
            "Optional: Bioparc Valencia (remarkable African savannah-themed zoo, €24) for families",
            "Farewell dinner in the historic centre before airport transfer",
          ],
          cost: "€90–115 (tour + dining + activities)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€260/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Historic Centre in Style",
          items: [
            "Private transfer from VLC to a 5-star hotel (€35–50) — the Westin Valencia, Palau de la Mar, or Las Arenas Beach Hotel",
            "Private guided tour of the historic centre (3 hrs, €80–100/person) — covers the Cathedral, La Lonja, Central Market with a local historian",
            "Exclusive access option: Mercado Central private morning tour before opening (€120/group, arrange via concierge)",
            "Lunch at the Ricard Camarena restaurant — Valencia's only two-Michelin-star chef, tasting menu €130–160",
            "Afternoon spa at your hotel (most luxury properties have full spa facilities)",
            "Evening: flamenco show dinner or a private rooftop dinner arranged by your hotel concierge",
          ],
          cost: "€350–500 (hotel + private tour + Michelin lunch + spa)",
        },
        {
          day: "Day 2",
          title: "City of Arts & Private Aquarium Night Tour",
          items: [
            "Private architecture tour of the City of Arts and Sciences with a Calatrava expert guide (€120/person)",
            "L'Oceanogràfic private evening tour (available by arrangement, €100+/person) — the aquarium at night with no crowds",
            "Hire a premium electric bike for the Turia Garden — or arrange a private e-bike guide tour (€60–80)",
            "Lunch at the Veles e Vents building in the marina area (spectacular harbour views, €40–60/person)",
            "Sunset at Malvarrosa Beach — cocktail at one of the beachfront chiringuito beach bars",
            "Dinner at La Pepica's private terrace: the most historic paella restaurant in Valencia (book weeks in advance, €50–70/person)",
          ],
          cost: "€380–520 (private tours + dining)",
        },
        {
          day: "Day 3",
          title: "Albufera Private Experience & Departure",
          items: [
            "Private chauffeured tour of Albufera Natural Park (€150–200 for half day)",
            "Private punt boat through the reed channels with a local guide who explains the ecology and rice farming history",
            "Private paella cooking class at a traditional barraca farmhouse on the lagoon shore (€80–120/person)",
            "Eat your own creation for lunch with local wine",
            "Return to Valencia: visit the Torres de Quart medieval tower and final stroll through the Botanic Garden (€2.50)",
            "Private transfer to VLC airport for departure",
          ],
          cost: "€280–400 (private tour + cooking class + transfer)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18–24 (hostel dorm)",
      food: "€12–18 (markets, tapas)",
      transport: "€4–6 (metro + bike)",
      activities: "€8–14 (La Lonja + Cathedral)",
      total: "€50–65/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€70–100 (3-star hotel)",
      food: "€35–50 (restaurants)",
      transport: "€15–20 (metro + bike + taxi)",
      activities: "€30–50 (aquarium, tour, boat)",
      total: "€110–145/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200–400 (5-star)",
      food: "€80–160 (Michelin, private)",
      transport: "€40–70 (private transfers)",
      activities: "€80–150 (private guides, cooking class)",
      total: "€260–400/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€15–18 (dorm)",
      food: "€8–12 (self-catering + market)",
      transport: "€3–5 (metro day pass)",
      activities: "€5–10 (mostly free architecture)",
      total: "€38–48/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€90–130 (apartment)",
      food: "€45–70 (self-catering + dining)",
      transport: "€15–25 (metro + taxi)",
      activities: "€60–90 (Bioparc + aquarium + boat)",
      total: "€130–180/day",
    },
  ],

  mistakes: [
    {
      icon: "🍚",
      title: "Ordering paella at the wrong place or wrong time",
      desc: "In Valencia, paella is a lunchtime dish — Valencians never eat it at dinner, and any restaurant serving paella at 9pm is making it for tourists from a pre-cooked base. Real paella takes 25 minutes to cook fresh. Go at lunch (1–3pm), order at a restaurant that has a rice-field view or is away from the main tourist areas, and ask if it's made to order.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📅",
      title: "Visiting during Las Fallas without booking 6 months ahead",
      desc: "Las Fallas (March 15–19) is Valencia's biggest festival and one of Spain's greatest spectacles. It also means every hotel in the city is booked solid at triple the normal price. If you want to see Las Fallas — and you should — book accommodation and flights at least 6 months ahead. Walking in on March 17 without a hotel is genuinely a crisis.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚶",
      title: "Taking a taxi from the airport instead of the metro",
      desc: "The Valencia metro (Line 3 or Line 5, Aeroport station) runs directly from VLC airport to the city centre in 20 minutes for €4.90 including the airport supplement. Taxis cost €20–25 for the same journey. The metro runs until midnight. The only reason to take a taxi is if you have extreme luggage or arrive very late at night.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏛️",
      title: "Skipping the interior of the Central Market",
      desc: "Many visitors photograph the outside of the Mercado Central and walk away. Go inside — it is one of the most beautiful market interiors in Europe and it's completely free to enter. The stalls sell fresh produce, cheese, charcuterie, and fresh-squeezed orange juice. Buy your breakfast or picnic lunch here every morning.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Missing Albufera because it seems like a day trip",
      desc: "Albufera Natural Park is 30 minutes south of Valencia by bus and is where paella was literally invented — rice has been grown in these lagoon paddies for a thousand years. Many visitors skip it because it requires leaving the city. Don't. The combination of a flat-bottomed boat trip through the reeds and an authentic paella lunch in El Palmar is one of the finest experiences in Spain.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🟠",
      title: "Valencia 3-Day Itinerary 2026: Trip Planner",
      desc: "Valencia is the heartland of Spanish orange production. Fresh-squeezed zumo de naranja natural is sold at almost every café and market stall for €1.50–2.50 a glass. It is genuinely extraordinary — nothing like supermarket juice. The Central Market has the best value. Drink it every morning.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚲",
      title: "The Turia Garden cycle route is the best way to see the city",
      desc: "The old Turia riverbed was converted into a 9km garden park after the 1957 floods. It runs through the heart of the city from the historic centre all the way to the City of Arts and Sciences. Hire a Valenbisi city bike (€1.30/hr or €13.30 tourist day pass) and cycle the entire route — it passes playgrounds, fountains, rose gardens, and football pitches.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🔥",
      title: "Even outside Las Fallas season, visit the Museo Fallero",
      desc: "Every year, the best small 'ninot' figure from each falla is saved from the fire by public vote — the Museu Faller holds all the saved figures dating back to 1934. Entry is €2 and it gives you a genuine sense of the extraordinary craft that goes into each festival. Located in Plaza Monteolivete.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🎟️",
      title: "Valencia 3-Day Itinerary 2026: Trip Planner",
      desc: "Some Valencia experiences are genuinely best with a guide — Albufera boat trips with a local ecologist, hands-on paella cooking classes, and Las Fallas guided walking tours that explain the cultural context of the ninot sculptures. Browse options and filter by top-rated for the best value.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  faqs: [
    {
      q: "What is authentic Valencian paella and how is it different from other paellas?",
      a: "Traditional paella valenciana contains chicken, rabbit, bajoqueta (flat green beans), garrofó (large white beans), tomato, saffron, and rice — cooked in a flat wide pan over a wood fire, ideally of orange wood. There are no prawns, no mussels, no chorizo. Seafood paella (paella de marisco) is a different dish, also from Valencia. Mixed paella with everything in it is considered a tourist invention by Valencians. At an authentic restaurant, ask for 'paella valenciana' and expect to wait 25 minutes — it's made fresh.",
    },
    {
      q: "Is Las Fallas worth visiting and what exactly happens?",
      a: "Las Fallas (March 15–19) is one of the world's great festivals and genuinely worth planning a trip around. Over the preceding year, neighbourhood groups (fallas) build enormous satirical sculptures (fallas) from papier-mâché, wood, and polystyrene — many reaching 5–10 metres tall and costing €100,000–500,000 to make. On the night of March 19 (La Cremà), all but one falla is burned in coordinated bonfires across the city simultaneously. The noise, fire, and emotion are extraordinary. The streets are also filled with daily fireworks displays (mascletà) at 2pm throughout the festival.",
    },
    {
      q: "How many days do you need in Valencia?",
      a: "Three full days is ideal for first-time visitors — enough for the historic centre, City of Arts and Sciences, Albufera, and a beach day. Two days is possible if you're efficient. Four or five days allows you to slow down, take a paella cooking class, explore the Ruzafa neighbourhood thoroughly, and take a day trip to the Albufera or the nearby town of Xàtiva. Valencia rewards a slower pace.",
    },
    {
      q: "What is the best area to stay in Valencia?",
      a: "Barrio del Carmen (the old town) is the most atmospheric area — medieval streets, great bar scene, close to Central Market and Cathedral, but can be noisy at weekends. Ruzafa is the most fashionable neighbourhood — great cafés, restaurants, and independent shops, 15 minutes walk from the centre. The City of Arts area is quieter and modern. For the beach, the Malvarrosa or Las Arenas area is excellent if you prioritise sea access. Most visitors do best in El Carmen or Ruzafa.",
    },
  ],

  combineWith: ["barcelona-4-days", "ibiza-4-days", "madrid-4-days", "seville-3-days"],
  relatedSlugs: ["ibiza-4-days", "tenerife-4-days", "barcelona-4-days", "madrid-4-days"],
  galleryQuery: "valencia spain city arts sciences paella cathedral old town",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function ValenciaPage() {
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
