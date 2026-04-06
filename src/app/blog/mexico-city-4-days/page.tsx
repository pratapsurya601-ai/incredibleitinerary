import type { Metadata } from "next";
import UniversalBlogClient, {
  type UniversalBlogData,
} from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mexico City 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Mexico City trip in 4 days. Plan the perfect 4-day Mexico City trip — Zócalo, Teotihuacan pyramids, Frida Kahlo Museum, tacos al pastor, and.",
  keywords: [
    "Mexico City itinerary",
    "Mexico City 4 days",
    "Mexico City travel guide",
    "CDMX budget travel",
    "Teotihuacan day trip",
    "Frida Kahlo Museum",
    "Mexico City 2026",
    "North America travel",
  ],
  openGraph: {
    title: "Mexico City 4-Day Itinerary 2026: Trip Planner",
    description:
      "22 million people, Diego Rivera murals, the world's best tacos al pastor, and a neighbourhood that out-Brooklyns Brooklyn. Your complete 4-day Mexico City guide.",
    url: "https://incredibleitinerary.com/blog/mexico-city-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?mexico+city+zocalo+cathedral",
        width: 1200,
        height: 630,
        alt: "Mexico City Zócalo with Metropolitan Cathedral and National Palace",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexico City 4-Day Itinerary 2026: Trip Planner",
    description:
      "Budget to luxury itineraries, visa info, budget breakdown, and insider tips for Mexico City. From $50/day.",
    images: [
      "https://source.unsplash.com/1200x630/?mexico+city+zocalo+cathedral",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/mexico-city-4-days",
  },
};

/* ── JSON-LD Structured Data ──────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/mexico-city-4-days#article",
      headline:
        "Mexico City in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Mexico City itinerary covering the Zócalo, Teotihuacan, Frida Kahlo Museum, Xochimilco, and the best tacos al pastor on earth — for every budget.",
      image:
        "https://source.unsplash.com/1200x630/?mexico+city+zocalo+cathedral",
      datePublished: "2026-01-15",
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
        "https://incredibleitinerary.com/blog/mexico-city-4-days",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://incredibleitinerary.com/blog/mexico-city-4-days#breadcrumb",
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
          name: "Mexico City 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/mexico-city-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "@id":
        "https://incredibleitinerary.com/blog/mexico-city-4-days#destination",
      name: "Mexico City",
      description:
        "A megalopolis of 22 million built on a drained Aztec lake, home to world-class museums, Diego Rivera murals, and some of the planet's finest street food.",
      url: "https://incredibleitinerary.com/blog/mexico-city-4-days",
      touristType: ["Cultural tourists", "Food lovers", "History enthusiasts"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.4326,
        longitude: -99.1332,
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
  destination: "Mexico City",
  country: "Mexico",
  countryFlag: "🇲🇽",
  slug: "mexico-city-4-days",
  heroQuery: "mexico city zocalo cathedral palace fine arts aztec",
  heroAlt: "Mexico City Zócalo with Metropolitan Cathedral and National Palace",
  category: "North America",
  date: "January 15, 2026",
  readTime: "18 min read",
  intro:
    "A metropolis of 22 million built on a drained Aztec lake that still sinks 10 cm per year, the world's greatest collection of murals by Diego Rivera inside the National Palace, tacos al pastor that make every other taco seem like a pale imitation, and a neighbourhood — Condesa/Roma — so full of independent bookshops and coffee roasters it feels like Brooklyn but with better weather and a fraction of the rent. Mexico City is, without argument, one of the world's truly great cities.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$50",
    bestMonths: "Oct–Apr (dry season)",
    airport: "MEX (Benito Juárez)",
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
    { id: "food", emoji: "🌮", label: "Food & Drink" },
    { id: "getting-around", emoji: "🚇", label: "Getting Around" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required?", "No — visa-free entry for Indian passport holders (updated policy, 2024)"],
        ["Max Stay", "Up to 180 days per visit"],
        ["Entry Form", "Tourist card (FMM) filled on arrival or online — no embassy visit needed"],
        ["Cost", "FMM is free; sometimes included in flight ticket"],
        ["Passport Validity", "Must be valid for duration of stay"],
        ["Proof Required", "Return ticket + proof of accommodation recommended"],
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
        ["Max Stay", "Up to 180 days"],
        ["Entry Form", "FMM tourist card on arrival (free)"],
        ["Currency", "Mexican Peso (MXN). USD widely accepted in tourist areas"],
        ["Vaccinations", "No mandatory vaccinations; Hepatitis A recommended"],
        ["Emergency", "911 (universal); Tourist hotline: 078"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Plan",
      sub: "~$50/day",
      days: [
        {
          day: "Day 1",
          title: "Centro Histórico & Zócalo on Foot",
          items: [
            "Arrive at MEX airport — take the official Metro Line 5 to the city centre ($0.70, 45 min) — best value in the world",
            "Check into a hostel in Centro Histórico (dorm $12–18/night) — location beats luxury",
            "Walk the Zócalo, the second-largest plaza on earth — Metropolitan Cathedral (free entry), National Palace (free — Diego Rivera murals on the main staircase)",
            "Lunch at a comedor in Mercado San Juan or any market stall — comida corrida (set lunch) $3–5, unbeatable",
            "Afternoon: Templo Mayor ruins ($5) — the Aztec heart under the colonial city",
            "Evening tacos al pastor from a street taquería in Centro — $1–1.50 per taco. Order 4–6 with cilantro, onion, and salsa verde",
            "Night walk along Avenida Madero (pedestrianised) — free street performances, organ grinders",
          ],
          cost: "$20–25 (transport, entry, meals, taco dinner)",
        },
        {
          day: "Day 2",
          title: "Teotihuacan Pyramids Day Trip",
          items: [
            "Early start: bus from Terminal Central del Norte to Teotihuacan ($3 each way, 1 hour) — leave by 8am to beat tour groups",
            "Teotihuacan archaeological site ($5 entry) — climb Pyramid of the Sun (65m, 248 steps), walk the Avenue of the Dead to Pyramid of the Moon",
            "Pack your own snacks and water — vendors inside are expensive; or buy breakfast tacos at the bus terminal before departure",
            "Return by 1–2pm, afternoon rest at hostel or explore Coyoacán neighbourhood",
            "Coyoacán: Frida Kahlo's neighbourhood (walk past Casa Azul exterior for free — interior tickets sell out weeks ahead, book online in advance), Plaza Hidalgo, Sunday artisan market",
            "Dinner at Mercado de Coyoacán food stalls — tostadas, quesadillas, aguas frescas ~$6",
          ],
          cost: "$22–28 (transport $6, Teotihuacan entry $5, meals $11)",
        },
        {
          day: "Day 3",
          title: "Chapultepec, Anthropology Museum & Condesa",
          items: [
            "Chapultepec Park (free) — the world's largest urban park, bigger than Central Park",
            "National Museum of Anthropology ($5, closed Mondays) — the world's finest pre-Columbian collection; the Aztec Sun Stone alone justifies the trip",
            "Lunch in Condesa: taquerías and torterías on Amsterdam Avenue ~$5–8",
            "Afternoon wander through Roma Norte: street art, independent coffee shops, bookshops",
            "El Pendulo bookshop-café on Álvaro Obregón — order a coffee and browse for hours",
            "Evening: free mezcal tasting at a mezcalería (most offer free first pour as introduction)",
          ],
          cost: "$18–22 (museum $5, meals $10, metro/bus $3)",
        },
        {
          day: "Day 4",
          title: "Xochimilco Floating Gardens & Farewell Tacos",
          items: [
            "Metro + bus to Xochimilco (1.5 hrs total, ~$2) — the Aztec floating gardens and canal system",
            "Share a trajinera (flower-painted boat) with other travellers at the embarcadero — rent by the hour; $15/hr for the whole boat, split 6+ ways = $2–3 each",
            "Floating food vendors and mariachi boats come to you on the canals — order tacos and micheladas from boats",
            "Afternoon: return to Centro, visit Mercado de Jamaica flower market (free) — the most photogenic market in the city",
            "Final dinner: stand-up tacos at El Califa de León (Michelin-starred, still cheap — $2.50/taco, cash only, 2-item menu)",
            "Late night departure or overnight stay for next morning flight",
          ],
          cost: "$18–24 (transport $4, boat share $3, meals $11)",
        },
      ],
    },
    {
      label: "Mid-Range Plan",
      sub: "~$110/day",
      days: [
        {
          day: "Day 1",
          title: "Centro Histórico Deep Dive + Rooftop Dinner",
          items: [
            "Arrival: Uber from MEX airport to hotel in Roma or Condesa ($12–18, 30–45 min depending on traffic)",
            "Check in to boutique hotel in Roma Norte (~$60–80/night) — converted 1920s Art Deco building",
            "Gran Hotel Ciudad de México lobby (free to enter) — the most spectacular Tiffany stained-glass ceiling you will ever see",
            "Guided walking tour of Centro Histórico ($25 — recommended: Estacion Mexico tours) — National Palace murals with context change everything",
            "Lunch at El Cardenal on Palma street — the best traditional Mexican breakfast/lunch in the city, $15–20",
            "Templo Mayor museum ($5) with audio guide",
            "Evening: rooftop cocktails at Hotel Downtown Mexico overlooking the Zócalo — sunset over the cathedral, $12–15/drink",
            "Dinner at Contramar in Colonia Roma — the city's most beloved seafood restaurant, tuna tostadas and red/green grilled fish, $35–45",
          ],
          cost: "$95–115 (hotel split, meals $60, activities $30, transport $15)",
        },
        {
          day: "Day 2",
          title: "Teotihuacan Private Tour + Mezcal Evening",
          items: [
            "Private Teotihuacan tour with archaeologist guide ($45–60/person for group tour departing from Roma/Condesa) — includes transport and expert commentary",
            "Hot air balloon flight over Teotihuacan at sunrise ($120–150 with Globos Fly) — the most spectacular thing you can do within 50km of Mexico City",
            "Or skip balloon: tour includes Pyramid of the Moon, Temple of the Feathered Serpent, on-site museum",
            "Lunch at La Gruta restaurant inside a cave near the pyramids — $20–25",
            "Return afternoon — freshen up at hotel",
            "Evening: mezcal bar tour in Roma Norte — Bósforo or In Situ mezcalería, curated single-village pours $8–12 each",
            "Late dinner: tacos de canasta at a late-night stand, or Tacos Hola in Condesa",
          ],
          cost: "$110–130 (tour $60, balloon optional $130, meals $50, drinks $30)",
        },
        {
          day: "Day 3",
          title: "Frida Kahlo, Coyoacán & Fine Dining",
          items: [
            "Frida Kahlo Museum / Casa Azul in Coyoacán ($15 — book tickets 2–3 weeks in advance on museofridakahlo.org) — her actual home, her actual studio",
            "Coyoacán market: tostadas at Tostadas Coyoacán food stalls — the neighbourhood's most famous $3 treat",
            "Lunch: El Jarocho coffee and pan dulce in Plaza Hidalgo, or a proper sit-down lunch at Los Danzantes ($25–30)",
            "Afternoon: Lucha Libre wrestling at Arena México (Tuesdays/Fridays/Sundays, $10–25 ringside) — the most entertainingly chaotic 2 hours you will spend anywhere",
            "Return to hotel, change for dinner",
            "Dinner at Pujol ($120–150 tasting menu, book 3–4 weeks ahead) — ranked top 20 in the world, mole madre aged 2,500+ days, an unmissable experience",
          ],
          cost: "$115–140 (museum $15, Lucha $20, dinner $130, transport $15)",
        },
        {
          day: "Day 4",
          title: "Xochimilco, Markets & Farewell Feast",
          items: [
            "Xochimilco by Uber ($15) — private trajinera hire for 2 hours ($40 for whole boat, reasonable for small group)",
            "Order from floating food and drink vendors — chicharrón, esquites, micheladas — $15 from the boat sellers",
            "Mercado de Jamaica flower market (free) — mountains of cempasúchil (marigold), gladiolus, rose towers",
            "Afternoon: Palacio de Bellas Artes exterior and interior lobby (free or $5 for exhibitions) — the finest Art Nouveau building in the Americas",
            "Farewell lunch at Quintonil ($80–100, book ahead) — elevated seasonal Mexican using ingredients sourced from the owners' family orchard",
            "Souvenir shopping at Fonart (government artisan store) — quality textiles, Talavera pottery, no haggling needed",
          ],
          cost: "$100–120 (transport $20, boat $40, meals $100)",
        },
      ],
    },
    {
      label: "Luxury Plan",
      sub: "~$280/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Suite Life & Contramar",
          items: [
            "Private airport transfer from MEX to Polanco or Juárez ($35–50 via black car service)",
            "Check in to Four Seasons Mexico City, Las Alcobas, or Hotel Carlota — $220–400/night, all in Polanco or Roma",
            "Personal guide for 4-hour Centro Histórico orientation — National Palace, Templo Mayor, Metropolitan Cathedral with expert art historian ($80–100/person)",
            "Gran Hotel lobby cocktail hour — bellini in the Tiffany-glass atrium",
            "Evening: chef's table dinner at Pujol (call for special seating; $180–220/person with wine pairing) — the mole madre counter seats only 8",
          ],
          cost: "$300–380 (hotel, transfer, guide, dinner with wine)",
        },
        {
          day: "Day 2",
          title: "Private Teotihuacan Sunrise + Hot Air Balloon",
          items: [
            "Pre-dawn departure for Teotihuacan hot air balloon (4am pickup) — Globos Fly luxury flight $150/person, champagne landing included",
            "Private post-flight guided tour of the complex with archaeologist — no crowds, golden morning light on the pyramids",
            "Private breakfast at a hacienda near the site",
            "Return afternoon; spa treatment at hotel ($80–120 — thermal ritual, temazcal, massage)",
            "Evening: cocktails at Terraza Cha Cha Chá rooftop — panoramic CDMX skyline views",
            "Dinner at Quintonil ($150 tasting menu + $80 wine pairing) — Jorge Vallejo's modern Mexican is a revelation",
          ],
          cost: "$350–420 (balloon $150, spa $100, dinner $230)",
        },
        {
          day: "Day 3",
          title: "Art, Frida & Museum Hopping with Private Guide",
          items: [
            "Private morning at Frida Kahlo Museum with art historian guide (arrange through hotel concierge for priority-time entry, ~$120 including guide)",
            "Coyoacán lunch at Corazón de Maguey — $40–60, excellent tlayudas and artisan mezcal selection",
            "Afternoon: private Lucha Libre ringside experience at Arena México — VIP seats $50, post-match access optional",
            "Visit Museo Jumex and Soumaya (free) in Polanco — Rodin sculptures, Warhol, pre-Columbian gold",
            "Evening: Rosetta restaurant in Roma ($80–100, book weeks ahead) — Elena Reygadas, one of the world's best female chefs, Italian-Mexican fusion in a 1900s mansion",
            "Nightcap at Bar Lengua in Colonia Juárez — natural wine and mezcal, the coolest bar in a city full of cool bars",
          ],
          cost: "$280–340 (guide $120, meals $150, museums $0–30, drinks $50)",
        },
        {
          day: "Day 4",
          title: "Private Xochimilco, Palacio de Bellas Artes & Departure",
          items: [
            "Private trajinera for 3 hours in Xochimilco ($120 for the whole boat with personal guide) — includes curated food and drink service on the water",
            "Helicopter or scenic flight over the Valley of Mexico and Popocatépetl ($200–300, bookable via concierge) — extraordinary finale",
            "Leisurely lunch at Nicos restaurant in Azcapotzalco ($50–70) — the best traditional Mexican cooking in the city, been open since 1957",
            "Palacio de Bellas Artes private tour — Diego Rivera, Siqueiros, and Orozco murals with guide ($60)",
            "Last-minute shopping: Fonart or Mercado de Artesanías (quality crafts, fixed prices)",
            "Private transfer to MEX airport",
          ],
          cost: "$350–500 (private boat+guide, helicopter, lunch, tour, transfer)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–18 (hostel dorm)",
      food: "$15–20 (market meals + tacos)",
      transport: "$3–5 (metro + bus)",
      activities: "$10–15 (1–2 paid sites)",
      total: "$50/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–80 (boutique hotel)",
      food: "$35–50 (mix of casual + quality)",
      transport: "$12–18 (Uber + occasional metro)",
      activities: "$20–30 (guided tours, museums)",
      total: "$110/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$220–400 (Four Seasons / Las Alcobas)",
      food: "$100–150 (Pujol, Quintonil, Rosetta)",
      transport: "$40–60 (private transfers)",
      activities: "$60–120 (private guides, balloon)",
      total: "$280/day",
    },
  ],

  mistakes: [
    {
      icon: "🚕",
      title: "Taking an unregistered taxi from the airport",
      desc: "Street taxis from MEX airport are a scam risk — always use the official TAPO taxi booth inside arrivals (fixed price by zone), or book Uber/DiDi from the app before you leave the terminal. Never get in a cab that approaches you.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗓️",
      title: "Not booking Frida Kahlo Museum in advance",
      desc: "Casa Azul tickets sell out 3–4 weeks ahead, especially on weekends. Book on museofridakahlo.org the moment you know your travel dates. Showing up without a ticket means standing outside the blue wall for a photo — that's it.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌮",
      title: "Eating only in tourist-facing restaurants",
      desc: "The best food in Mexico City costs $1–5 and is served from market stalls, street carts, and family-run comedores. If the restaurant has an English menu on the door, the prices have tripled and the quality has halved. Follow locals at lunchtime.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💊",
      title: "Ignoring altitude sickness",
      desc: "Mexico City sits at 2,240m above sea level. Headaches, breathlessness, and fatigue are common in the first 24 hours. Drink twice as much water as usual, avoid alcohol on day one, and move slowly. Most symptoms pass by day two.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "📱",
      title: "Not downloading offline Google Maps before arrival",
      desc: "Mexico City's streets are a grid in theory and a labyrinth in practice. Download the offline map for CDMX before you leave home. Also download DiDi (often cheaper than Uber) and the Metro map app.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  tips: [
    {
      icon: "🎨",
      title: "Diego Rivera murals are free and unmissable",
      desc: "The National Palace is free to enter and contains Rivera's epic mural cycle depicting the entire history of Mexico — arguably the greatest artwork on the continent. Go early (9am) before tour groups arrive and spend at least 45 minutes with it.",
      color: "bg-gold/10 border-gold/30",
    },
    {
      icon: "🌮",
      title: "El Califa de León: the world's only Michelin-starred taco stand",
      desc: "This tiny 4-seat counter in Colonia Juárez won a Michelin star in 2024. The menu has two items: bistec and gaonera. Each taco costs ~$2.50. Queue forms at 1pm and 8pm. Cash only. It will change your understanding of what a taco can be.",
      color: "bg-teal/10 border-teal/30",
    },
    {
      icon: "🚇",
      title: "The Metro is the fastest and cheapest way around the city",
      desc: "The CDMX Metro costs ~$0.70 per journey and covers the city comprehensively. Avoid rush hours (7–9am, 6–8pm) when it is extremely crowded. Lines A and B go to Xochimilco and the east. Line 2 crosses Centro. Download the Metro map offline.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "📅",
      title: "Visit Teotihuacan on a weekday and leave before 11am",
      desc: "Teotihuacan receives 2–4 million visitors annually. On weekends, the Avenue of the Dead is shoulder-to-shoulder by 10am. Take the first bus (7am from Terminal Norte) and you will have the pyramids nearly to yourself in golden morning light.",
      color: "bg-green-50 border-green-200",
    },
  ],

  faqs: [
    {
      q: "Is Mexico City safe for tourists in 2026?",
      a: "Yes — for the areas tourists visit. Roma, Condesa, Polanco, Coyoacán, and Centro Histórico are all very safe during the day and evenings. Use Uber or DiDi rather than street taxis at night, keep your phone in your pocket in crowded markets, and avoid the eastern and northern colonias that tourism guides don't cover. Mexico City has transformed significantly in the last decade and is now considered safer than many major Latin American cities.",
    },
    {
      q: "Do I need a visa to visit Mexico as an Indian citizen?",
      a: "No — Mexico removed visa requirements for Indian passport holders in 2024. You can stay up to 180 days. You will fill in a tourist card (FMM) on arrival or online before you fly. No embassy visit or prior approval needed. Simply show a valid passport and return ticket.",
    },
    {
      q: "What is the best time of year to visit Mexico City?",
      a: "October to April is the dry season and considered the best time to visit. November to February is coolest (15–22°C) and most comfortable for walking. March–April is warm and sunny. Avoid May–September if possible — the rainy season brings daily afternoon downpours, though mornings are usually clear. Día de los Muertos (November 1–2) is a spectacular time to be in Mexico City if you can secure accommodation early.",
    },
    {
      q: "How do I get to Teotihuacan from Mexico City?",
      a: "Take the Metro to Autobuses del Norte station (Line 5, yellow line) then buy a ticket ($3) to 'San Juan Teotihuacan' — buses run every 15 minutes from 7am. Journey is about 1 hour. This is far cheaper than tours and gives you flexibility. Return the same way. Alternatively, tours from Roma/Condesa run $35–60 and include transport plus a guide.",
    },
  ],

  combineWith: ["oaxaca-4-days", "tulum-4-days", "cancun-4-days"],
  relatedSlugs: [
    "oaxaca-4-days",
    "tulum-4-days",
    "san-cristobal-4-days",
    "guadalajara-4-days",
  ],
  galleryQuery: "mexico city cdmx teotihuacan frida kahlo condesa roma",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function MexicoCityPage() {
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
