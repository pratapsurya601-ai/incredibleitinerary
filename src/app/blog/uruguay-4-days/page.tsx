import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Uruguay",
  country: "Uruguay",
  countryFlag: "🇺🇾",
  slug: "uruguay-4-days",
  heroQuery: "montevideo uruguay rambla waterfront colonia del sacramento",
  heroAlt: "Colonia del Sacramento Uruguay historic colonial street cobblestones lighthouse",
  category: "South America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "The smallest country in South America where the entire nation fits within a single day's drive — yet Uruguay packs more charm per kilometre than almost anywhere on the continent. Colonia del Sacramento's cobblestone streets and Portuguese lighthouse look lifted straight from an 18th-century painting. Montevideo's rambla — the world's longest urban promenade at 22 km — curves along a river so wide it looks like the sea. The beef is the best on Earth, grilled low and slow over a fragrant asado fire, and served with a gourd of mate shared between strangers like a handshake. Oh, and Uruguay was the first country in the world to fully legalise marijuana and same-sex marriage in the same year. The Switzerland of South America has nothing to prove — and it knows it.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$70",
    bestMonths: "Dec–Mar (summer)",
    airport: "MVD (Carrasco, Montevideo)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🚌", label: "Getting Around" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "No visa required for Uruguay"],
        ["Stay allowed", "90 days on arrival"],
        ["Entry type", "Tourist entry — stamp on arrival"],
        ["Extension", "Extendable at Dirección Nacional de Migración"],
        ["Pro tip", "Uruguay is one of the most Indian-passport-friendly countries in South America"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "No visa required"],
        ["Stay allowed", "90 days visa-free"],
        ["Entry type", "Stamp on arrival at any port"],
        ["Currency", "Uruguayan Peso (UYU). USD widely accepted in tourist areas."],
        ["Pro tip", "Uruguay and Argentina share a ferry — Colonia del Sacramento is just 1 hr from Buenos Aires"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "$70/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Montevideo — Ciudad Vieja & Mercado del Puerto",
          items: [
            "Fly into MVD Carrasco airport — bus 710 runs to Ciudad Vieja for ~$1.50 USD",
            "Check into a hostel in Ciudad Vieja — Old City Hostel or Che Lagarto are excellent ($18–22/night)",
            "Walk the Plaza Independencia and see the Salvo Palace — the most dramatic building in Uruguay",
            "Wander the pedestrian Calle Sarandí through the old town",
            "Have a massive asado plate at Mercado del Puerto for lunch (~$12) — beef choripán and morcilla at the shared grills",
            "Evening: walk the first stretch of La Rambla as the sun sets over the Río de la Plata",
            "Dinner at a budget parrilla near the market — half a pollo asado and chips ~$8",
          ],
          cost: "$40–50 including accommodation",
        },
        {
          day: "Day 2",
          title: "Colonia del Sacramento — UNESCO Day Trip",
          items: [
            "Early bus from Tres Cruces terminal to Colonia del Sacramento (3 hrs, $12 return) — or splurge on the Buquebus ferry ($30 return)",
            "Walk straight to the Barrio Histórico — the UNESCO colonial quarter that dates to 1680",
            "Climb the Portuguese Lighthouse for panoramic views over the river",
            "Rent a bicycle or golf cart from the port area ($10–15/hr) and loop the old town walls",
            "Lunch at a café in the old quarter — chivito sandwich (Uruguay's national sandwich) ~$7",
            "Watch the sunset from the Bastión del Carmen rocks on the river shore",
            "Return bus/ferry to Montevideo — evening arrival",
          ],
          cost: "$35–45 transport + food + activities",
        },
        {
          day: "Day 3",
          title: "Pocitos Beach & Rambla Walk",
          items: [
            "Morning: rent a bicycle from Ciudad Vieja (bike share BiciMAD, ~$3) and cycle the full 22km Rambla",
            "Stop at Playa Pocitos — the most popular city beach, wide white sand, perfect for swimming Dec–Feb",
            "Local market at Feria de Tristán Narvaja (Sundays only) — browse mate gourds, leather, antiques",
            "Afternoon: Museo del Carnaval — Uruguay has the longest carnival season in the world ($4 entry)",
            "Craft beer at Mastra Brewing near Pocitos (~$4/pint)",
            "Street food dinner near Pocitos — empanadas and a choripán ($6)",
          ],
          cost: "$30–40",
        },
        {
          day: "Day 4",
          title: "Punta del Este Highlights & Depart",
          items: [
            "Early bus to Punta del Este (2 hrs, $10 each way) — South America's most glamorous beach resort",
            "See La Mano — the iconic giant Hand sculpture emerging from Playa Brava ($0, photo stop)",
            "Walk the port area and the Rambla de Punta del Este",
            "Budget ceviche lunch at the Mercado del Puerto Punta del Este (~$10)",
            "Return bus to Montevideo for afternoon flight or overnight stay",
            "If night bus: save on last night's accommodation — Tres Cruces to Buenos Aires overnight bus $25",
          ],
          cost: "$35–45 including transport",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$150/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Montevideo — Hotel, Asado & Craft Cocktails",
          items: [
            "Taxi or Uber from MVD airport to boutique hotel in Ciudad Vieja (~$25) — try Alma Histórica Hotel ($80/night)",
            "Afternoon walking tour of Ciudad Vieja with a local guide ($30pp) — covers Palacio Legislativo, Plaza Independencia, Flea Market street",
            "Pre-lunch vermouth at a traditional bar — vermouth culture is huge in Montevideo",
            "Long asado lunch at Mercado del Puerto — full tabla de carnes with salads and wine ($35pp)",
            "Evening: craft cocktails at Maelström bar in Palermo neighbourhood",
            "Dinner at a proper restaurant — try La Fonda for traditional Uruguayan stew ($20pp)",
          ],
          cost: "$130–160 including accommodation",
        },
        {
          day: "Day 2",
          title: "Colonia del Sacramento — Buquebus Ferry & Wine",
          items: [
            "Buquebus fast ferry to Colonia del Sacramento ($45 return, 1 hr) — book online for best price",
            "Rent a classic Volkswagen Beetle or golf cart for touring the UNESCO town ($25/2hrs)",
            "Full guided tour of Barrio Histórico and the Portuguese Quarter ($20pp)",
            "Lunch at El Drugstore — Colonia's coolest restaurant in a restored colonial pharmacy ($25pp)",
            "Wine tasting at Bodega de los Vilos in the old quarter ($15pp — local tannat tastings)",
            "Watch the sunset from the Bastión del Carmen with a glass of tannat",
            "Evening ferry return — dinner at Montevideo wine bar ($30pp)",
          ],
          cost: "$140–170",
        },
        {
          day: "Day 3",
          title: "Punta del Este — Peninsula & Playa Brava",
          items: [
            "Private transfer to Punta del Este (2 hrs, $60 one-way) or bus ($10)",
            "Check into mid-range hotel in Punta del Este peninsula ($120/night)",
            "Morning at Playa Brava — see La Mano sculpture, swim if Dec–Feb",
            "Walk the Rambla around the peninsula — see Playa Mansa (calm) vs Playa Brava (waves)",
            "Lunch at Lo de Tere — legendary parrilla in Punta del Este ($35pp)",
            "Visit Casapueblo — Pablo Atchugarry's surreal white cliff-top art hotel, now a museum ($8)",
            "Sunset cocktails at the Casapueblo terrace bar — one of South America's best sunsets",
            "Dinner at Cantina del Puerto — fresh catch and seafood risotto ($30pp)",
          ],
          cost: "$150–180",
        },
        {
          day: "Day 4",
          title: "Bodega Garzón Wine Tour & José Ignacio",
          items: [
            "Morning: drive to Bodega Garzón — rated best winery in South America ($60pp for tasting + tour)",
            "Full wine tasting of tannat, albariño and riesling with vineyard panorama",
            "Paired lunch at the Bodega restaurant ($40pp — Michelin-quality cuisine in wine country)",
            "Afternoon: drive through José Ignacio village — the chicest beach hamlet in Uruguay",
            "Walk the José Ignacio lighthouse ($3) and watch the waves from the point",
            "Transfer back to Montevideo or Punta del Este airport (GYD) for departure",
          ],
          cost: "$150–180",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$350/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Montevideo — Private Transfer & Rooftop Asado",
          items: [
            "Private airport transfer to boutique 5-star in Ciudad Vieja — try Cottage Hotel or Hotel Sofitel Montevideo ($220+/night)",
            "Private walking tour of Ciudad Vieja with food and wine historian ($80pp)",
            "Long rooftop asado lunch with sommelier-guided tannat wine flight ($80pp)",
            "Afternoon spa treatment at hotel",
            "Evening: private cooking class — Uruguayan asado technique with a local grill master ($120pp)",
            "Wine dinner at Escaramuza bookstore-restaurant — Montevideo's most atmospheric dining room ($60pp)",
          ],
          cost: "$350–420 including accommodation",
        },
        {
          day: "Day 2",
          title: "Private Yacht to Colonia & Gourmet Lunch",
          items: [
            "Private yacht charter across the Río de la Plata to Colonia del Sacramento ($400–600 for the boat)",
            "Private guide through the UNESCO old town — all museums, lighthouse, Portuguese quarter",
            "Gourmet lunch at El Meson in Colonia's historic district ($50pp)",
            "Afternoon: private wine tour at a colonial estate near Colonia",
            "Return yacht at sunset — champagne on the water",
            "Montevideo dinner at Jacinto — Uruguay's finest farm-to-table restaurant ($80pp)",
          ],
          cost: "$400–500",
        },
        {
          day: "Day 3",
          title: "Punta del Este & Casapueblo — Glamour Mode",
          items: [
            "Helicopter transfer to Punta del Este (30 min, ~$600 for the charter — split between couples)",
            "Check into Enjoy Punta del Este or L'Auberge Hotel ($300+/night)",
            "Morning at private beach club — sunbeds, cocktails, fresh ceviche",
            "Private guided tour of Casapueblo art hotel and museum with curator ($100pp)",
            "Sunset cocktails at Casapueblo terrace — one of the most dramatic sunsets in South America",
            "Dinner at Cantina Portobello — seafood and fine wine, Punta del Este's best ($80pp)",
          ],
          cost: "$400–500",
        },
        {
          day: "Day 4",
          title: "Playa Vik José Ignacio & Bodega Garzón",
          items: [
            "Private transfer to José Ignacio (45 min) — check into Playa Vik José Ignacio ($800+/night, one of the most beautiful hotels in the world)",
            "Morning: horseback ride on the beach at sunrise with Playa Vik's guide",
            "Private tour and exclusive tasting at Bodega Garzón ($150pp — includes vertical tasting of reserve tannat)",
            "Multi-course paired lunch at Bodega Garzón restaurant ($100pp)",
            "Afternoon: José Ignacio lighthouse walk, village exploration",
            "Sundowner and seafood dinner at Mostrador Santa Teresita — José Ignacio's iconic beach bar-restaurant ($80pp)",
          ],
          cost: "$900–1,100 including Playa Vik accommodation",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget",
      accommodation: "$18–25 (hostel)",
      food: "$15–25",
      transport: "$8–15",
      activities: "$5–12",
      total: "$70/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "$80–120 (boutique hotel)",
      food: "$35–55",
      transport: "$20–40",
      activities: "$20–35",
      total: "$150/day",
    },
    {
      tier: "Luxury",
      accommodation: "$220–800 (5-star/Playa Vik)",
      food: "$70–120",
      transport: "$60–150",
      activities: "$50–100",
      total: "$350+/day",
    },
    {
      tier: "Ultra Budget",
      accommodation: "$12 (dorm)",
      food: "$8–12 (market food)",
      transport: "$3–6 (city bus)",
      activities: "$0–5 (free rambla, beaches)",
      total: "$45–50/day",
    },
    {
      tier: "Backpacker",
      accommodation: "$20 (private hostel room)",
      food: "$15–20",
      transport: "$10 (buses)",
      activities: "$8–15",
      total: "$60–70/day",
    },
  ],

  mistakes: [
    {
      icon: "🚢",
      title: "Not doing the Colonia del Sacramento day trip",
      desc: "Most people go to Montevideo and skip Colonia. Don't. It's 1 hour from Buenos Aires by Buquebus ferry and one of the most beautiful colonial towns in the world. It also makes an incredible stopover if you're flying Buenos Aires → Montevideo.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🥩",
      title: "Eating at tourist trap parrillas",
      desc: "The best asado is not in the restaurants — it's at Mercado del Puerto where the grills have been running since the 1860s. Go at lunch (not dinner), sit at the communal benches and order directly from the grill masters. Budget $12–18 for a full feast.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "💵",
      title: "Using USD or carrying only cards",
      desc: "While USD is accepted in tourist spots, you'll always get a better rate in Uruguayan pesos (UYU). ATMs give pesos. Avoid airport exchange counters. The blue dollar rate that exists in Argentina does NOT apply in Uruguay — rates are official and fair.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "☀️",
      title: "Visiting December–January without booking in advance",
      desc: "Punta del Este in January is the St Tropez of South America. Every Argentine millionaire, Brazilian celebrity and Chilean socialite descends simultaneously. Hotel prices triple. Book 3+ months ahead for Dec–Feb. Or come in March for shoulder season prices with beach weather.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🧉",
      title: "Refusing the mate when offered",
      desc: "When a Uruguayan offers you their mate gourd, say yes. It's one of the most personal expressions of friendship in the culture. You drink from the same metal straw (bombilla), refill with hot water and pass it back. Don't say no — it's like refusing a handshake.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🚌",
      title: "The 3-country combo: Uruguay + Argentina + Brazil",
      desc: "Uruguay sits perfectly between Buenos Aires and the Brazilian border. Fly into MVD, spend 4 days, take the Buquebus ferry to Buenos Aires (1 hr) for 3–4 days, then fly to Rio or Iguazú. This is the perfect South American itinerary and Uruguay is always the most underrated leg.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🍷",
      title: "Tannat is Uruguay's grape — and it's extraordinary",
      desc: "Uruguay's signature red is tannat — a thick-skinned grape from France's Basque country that produces a richer, softer wine in Uruguay's climate than anywhere else. Bodega Garzón near José Ignacio is the best winery in South America. Their Balasto tannat is a life-changing bottle at $30–40 in-country.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🏖️",
      title: "Punta del Este shoulder season is the secret",
      desc: "March and November give you beach weather (22–26°C), empty beaches, half the accommodation prices, and restaurants that are actually happy to see you. January is mobbed and expensive. April starts cooling. Hit Punta del Este in March for the sweet spot.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🎟️",
      title: "GetYourGuide has the best Uruguay tours",
      desc: "Book wine tours to Bodega Garzón, Colonia del Sacramento day trips from Montevideo, and asado cooking classes on GetYourGuide. Prices are fixed and reviews are verified — far better than haggling at the port.",
      color: "border-blue-200 bg-blue-50",
    },
  ],

  faqs: [
    {
      q: "Is Uruguay safe for tourists?",
      a: "Uruguay is consistently ranked as the safest country in South America. Montevideo has petty theft in bus terminals and late at night in Ciudad Vieja — take standard city precautions. Violent crime against tourists is extremely rare. You can walk the Rambla solo at night without real concern.",
    },
    {
      q: "What currency should I use in Uruguay?",
      a: "Uruguayan Peso (UYU). ATMs are everywhere in Montevideo and Punta del Este. USD is accepted in tourist restaurants and hotels but you'll get a worse effective rate than using pesos. Unlike Argentina, Uruguay has no currency distortions — the official rate IS the real rate.",
    },
    {
      q: "Can I visit Uruguay from Buenos Aires as a day trip?",
      a: "Yes — Colonia del Sacramento is the classic option. Buquebus fast ferry takes 1 hour from Buenos Aires port and costs ~$45–70 return. You need your passport and the Argentine exit stamp. Some travellers do Colonia in a day; others stay overnight. From Colonia you can bus to Montevideo in 3 hours.",
    },
    {
      q: "What is a chivito and should I eat one?",
      a: "A chivito is Uruguay's national sandwich and one of the greatest things you will ever eat. It is a steak sandwich topped with ham, mozzarella, egg, olives, bacon, lettuce, tomato and mayo, stuffed into a soft bun and served with chips. It is enormous. Order it at any café or parrilla for $6–12. Yes, you should absolutely eat one.",
    },
  ],

  combineWith: ["Argentina", "Brazil", "Chile"],
  relatedSlugs: ["buenos-aires-4-days", "rio-de-janeiro-4-days", "patagonia-7-days"],
  galleryQuery: "uruguay montevideo colonia del sacramento punta del este jose ignacio beach",
};

export const metadata: Metadata = {
  title: "Uruguay in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
  description:
    "The complete Uruguay 4-day itinerary — Montevideo's 22km rambla, Colonia del Sacramento UNESCO colonial town, Punta del Este beaches, José Ignacio luxury, Bodega Garzón wine. Budget $70 to luxury $350/day.",
  keywords: [
    "Uruguay travel guide",
    "Montevideo itinerary",
    "Colonia del Sacramento",
    "Punta del Este",
    "José Ignacio",
    "Uruguay budget travel",
    "asado Uruguay",
    "Uruguay visa Indian passport",
    "Uruguay 4 days",
    "South America travel",
  ],
  openGraph: {
    title: "Uruguay in 4 Days: The Complete Travel Guide 2026",
    description:
      "Cobblestone streets, the world's longest urban promenade, the best beef on Earth — Uruguay in 4 days from $70/day.",
    url: "https://incredibleitinerary.com/blog/uruguay-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/uruguay-4-days.jpg",
        width: 1200,
        height: 630,
        alt: "Colonia del Sacramento Uruguay historic colonial street cobblestones lighthouse",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uruguay in 4 Days — Complete Itinerary 2026",
    description: "The Switzerland of South America: cobblestones, asado, beaches and the world's best beef.",
    images: ["https://incredibleitinerary.com/og/uruguay-4-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/uruguay-4-days",
  },
};

export default function UruguayPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Uruguay in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Complete 4-day Uruguay itinerary covering Montevideo, Colonia del Sacramento, Punta del Este and José Ignacio for every budget.",
      image: "https://incredibleitinerary.com/og/uruguay-4-days.jpg",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/uruguay-4-days",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Uruguay 4 Days",
          item: "https://incredibleitinerary.com/blog/uruguay-4-days",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: "Uruguay",
      description:
        "South American country famed for its colonial cities, Atlantic beaches, world-class wine and the best beef on Earth.",
      url: "https://incredibleitinerary.com/blog/uruguay-4-days",
      touristType: ["Budget travellers", "Luxury travellers", "Food & wine lovers", "Beach seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -32.5228,
        longitude: -55.7658,
      },
      hasMap: "https://maps.google.com/?q=Uruguay",
      containedInPlace: {
        "@type": "Place",
        name: "South America",
      },
    },
  ];

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
