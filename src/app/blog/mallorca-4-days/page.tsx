import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mallorca in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    "description": "Your complete Mallorca 4-day itinerary covering Palma Cathedral, Serra de Tramuntana, Cap de Formentor, Es Trenc beach, and the Caves of Drach — across budget, mid-range, and luxury plans.",
    "image": "https://incredibleitinerary.com/og/mallorca-4-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-10",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/mallorca-4-days" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Mallorca 4 Days", "item": "https://incredibleitinerary.com/blog/mallorca-4-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Mallorca",
    "description": "Spain's largest Balearic island, home to Palma Cathedral, the UNESCO Serra de Tramuntana, Cap de Formentor, Es Trenc beach, and the Caves of Drach.",
    "url": "https://incredibleitinerary.com/blog/mallorca-4-days",
    "touristType": ["Beach Tourism", "Cultural Tourism", "Adventure Tourism", "Gastronomic Tourism"],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.5696,
      "longitude": 2.6502
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "Spain"
    }
  }
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mallorca in 4 Days: Complete Travel Guide 2026 (Budget to Luxury) | IncredibleItinerary",
  description: "Plan the perfect 4-day Mallorca trip: Palma Cathedral, Serra de Tramuntana, Cap de Formentor, Es Trenc beach & Caves of Drach. Budget €55/day to luxury €300/day itineraries.",
  keywords: ["Mallorca travel guide", "Mallorca 4 days itinerary", "Palma Cathedral", "Serra de Tramuntana", "Cap de Formentor", "Es Trenc beach", "Caves of Drach", "Mallorca budget travel", "Balearic Islands Spain"],
  openGraph: {
    title: "Mallorca in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
    description: "A Gothic cathedral rising from the seafront, limestone cliffs of Tramuntana at dawn, sea caves only accessible by kayak — complete 4-day Mallorca itinerary for every budget.",
    url: "https://incredibleitinerary.com/blog/mallorca-4-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/mallorca-4-days.jpg", width: 1200, height: 630, alt: "Mallorca Palma Cathedral La Seu overlooking Mediterranean sea Spain" }],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mallorca in 4 Days: Complete Travel Guide 2026",
    description: "Budget €55/day to luxury €300/day — complete Mallorca 4-day itinerary with Palma, Tramuntana, Formentor & more.",
    images: ["https://incredibleitinerary.com/og/mallorca-4-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/mallorca-4-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Mallorca",
  country: "Spain",
  countryFlag: "🇪🇸",
  slug: "mallorca-4-days",
  heroQuery: "mallorca palma cathedral sea spain balearic islands",
  heroAlt: "Mallorca Palma Cathedral La Seu overlooking Mediterranean sea Spain",
  category: "Europe",
  date: "January 10, 2026",
  readTime: "14 min read",
  intro:
    "A Gothic cathedral rising from the seafront like an orange sandcastle, hiking the limestone cliffs of Tramuntana at dawn with the Mediterranean 400 metres below, sea caves only accessible by kayak near Cap de Formentor, and a capital city sophisticated enough to have a Michelin-starred tapas scene — Mallorca is Spain's most beautiful island, and it rewards those who push beyond the resort belt.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€55",
    bestMonths: "May–Jun or Sep–Oct",
    airport: "PMI (Son Sant Joan)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "getting-around", emoji: "🚌", label: "Getting Around" },
    { id: "affiliate", emoji: "🎟️", label: "Book Tours & Activities" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required", "Schengen Short-Stay Visa (Spain)"],
        ["Fee", "€80"],
        ["Processing", "15–30 business days"],
        ["Apply via", "VFS Global or Spanish Consulate"],
        ["Duration", "Up to 90 days in any 180-day period"],
        ["Tip", "Apply at least 6 weeks before travel; show hotel bookings and return flight"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇦🇺",
      title: "US / UK / EU / Western Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["EU Citizens", "Free movement — no formalities"],
        ["US / UK / AU / CA", "Visa-free up to 90 days"],
        ["ETIAS", "Required from mid-2025 (€7, online pre-registration)"],
        ["Passport validity", "Must be valid 3 months beyond stay"],
        ["Currency", "Euro (€) — card accepted almost everywhere"],
        ["Health card", "EHIC/GHIC recommended for EU/UK visitors"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€55/day",
      days: [
        {
          day: "Day 1",
          title: "Palma Old Town on Foot",
          items: [
            "Arrive at PMI, take Bus 1 into Palma city centre (€1.55) — skip the taxi",
            "Check into a hostel in Sant Pere neighbourhood (dorm €20–25/night)",
            "Walk to La Seu Cathedral — exterior is free and jaw-dropping; interior costs €9",
            "Explore the Arab Baths (Banys Àrabs) — one of the few Moorish remains, €2.50",
            "Stroll Passeig des Born and window-shop the boutiques at zero cost",
            "Dinner at Mercat de l'Olivar food hall — fresh seafood tapas from €1.50 each",
            "Evening walk along the seafront promenade — the cathedral lit up at night is spectacular",
          ],
          cost: "€40–50 including accommodation",
        },
        {
          day: "Day 2",
          title: "Tramuntana Mountains & Sóller Valley",
          items: [
            "Take the Sóller vintage wooden train from Palma (€22 return) — a heritage railway through the mountains, pre-book online",
            "Walk around Sóller village, try an ensaïmada pastry at a local café (€1.50)",
            "Take the tram down to Port de Sóller (€2) for a swim at the harbour beach",
            "Hike the Barranc de Biniaraix gorge from Sóller village — free, 2 hours, spectacular limestone scenery",
            "Return train to Palma, or take Bus L210 for €3 if you prefer to save",
            "Evening pintxos crawl in Palma's La Lonja neighbourhood — budget €12–15",
          ],
          cost: "€35–45",
        },
        {
          day: "Day 3",
          title: "Caves of Drach & Es Trenc Beach",
          items: [
            "Rent a bicycle from a Palma bike-share scheme or a cheap hire shop (€10–15/day)",
            "Or take the train to Manacor then bus to Porto Cristo for the Caves of Drach (€14 entry) — underground lake concert included",
            "Pack a picnic lunch from Mercat de l'Olivar — olives, bread, manchego, €6",
            "Bus or bike to Es Trenc beach — the most beautiful natural beach on the island, no entry fee, bring water",
            "Swim in the turquoise Caribbean-like water, spot flamingos in the adjacent salt flats",
            "Return to Palma by bus (€3); dinner at a neighbourhood restaurant, menú del día (€10–12)",
          ],
          cost: "€40–50",
        },
        {
          day: "Day 4",
          title: "Valldemossa & Deià Village",
          items: [
            "Bus 210 from Palma to Valldemossa (€3.35) — the mountain village where Chopin wintered with George Sand",
            "Visit the Royal Carthusian Monastery — €9.50, includes the piano where Chopin composed",
            "Walk or hitch the 9km road to Deià — a village of stone houses clung to a hillside, beloved by artists and writers",
            "Swim at Cala Deià, a tiny rocky cove reached by a steep footpath (free)",
            "Bus back to Palma; final seafront dinner — grilled fish with alioli at a local restaurant, €14–18",
            "Evening stroll through La Calatrava neighbourhood — Palma's oldest Arab quarter",
          ],
          cost: "€35–45",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€120/day",
      days: [
        {
          day: "Day 1",
          title: "Palma — Cathedral, Bellver & Born",
          items: [
            "Fly in, taxi or Uber to central Palma hotel (€20–25 from airport)",
            "Check into a 3-star hotel in the Old Town or Sant Pere (€80–110/night)",
            "Morning visit La Seu Cathedral interior (€9) — book fast-track entry online",
            "Bellver Castle — circular Gothic fortress with panoramic bay views, €4, take a taxi up",
            "Lunch at a pavement café on Passeig des Born — pa amb oli (bread with olive oil and toppings) €8–12",
            "Palma Aquarium in the afternoon, or the Es Baluard modern art museum (€6)",
            "Dinner at a mid-range restaurant in La Lonja — fresh Mallorcan cuisine, €28–35 with wine",
          ],
          cost: "€110–130 including accommodation",
        },
        {
          day: "Day 2",
          title: "Serra de Tramuntana UNESCO Drive",
          items: [
            "Hire a car for the day (€35–45 with insurance) — essential for the mountain road",
            "Drive the MA-10 mountain road: Valldemossa → Deià → Sóller — the most spectacular drive in Spain",
            "Coffee stop in Deià at Ca n'Alluny (Robert Graves's house museum, €7)",
            "Sóller village for lunch — authentic Mallorcan restaurant, €20–25",
            "Drive north to the Mirador de Ses Barques viewpoint — sweeping valley views",
            "Continue to Fornalutx, Spain's prettiest village — explore the stone alleys",
            "Return via the Sóller tunnel to Palma (€6 toll); sunset cocktail on a rooftop bar",
          ],
          cost: "€90–110",
        },
        {
          day: "Day 3",
          title: "Cap de Formentor & Northern Coast",
          items: [
            "Drive north to Cap de Formentor (in your hire car, or take a boat from Port de Pollença €25 return)",
            "The cliff road to the lighthouse is one of Europe's most dramatic drives — 400m drops to the sea",
            "Swim at Platja de Formentor — exclusive hotel beach open to all, crystalline water",
            "Lunch in Puerto Pollença port — fresh catch of the day, €22–28",
            "Visit Alcúdia's Roman ruins and medieval walled town (free to wander)",
            "Drive back via the inland road through Inca — Mallorca's leather goods capital, browse the market",
            "Dinner at Es Baluard waterfront in Palma — modern Mallorcan cuisine, €35–40",
          ],
          cost: "€95–115",
        },
        {
          day: "Day 4",
          title: "Cala Mondragó & Caves of Drach",
          items: [
            "Drive to Cala Mondragó Natural Park (45 min) — protected natural bay, free entry, zero development",
            "Kayak rental at the beach (€15/hour) — paddle into hidden sea caves in the limestone cliffs",
            "Continue to Porto Cristo for the Caves of Drach — underground lake, stalactites, live classical music concert (€14)",
            "Late lunch at a Porto Cristo restaurant overlooking the port — €18–22",
            "Drive to Es Trenc beach for a final swim in turquoise water",
            "Return hire car at airport; farewell dinner at Palma's Mercat 1930 — upscale market hall, €30–40",
          ],
          cost: "€90–110",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€300/day",
      days: [
        {
          day: "Day 1",
          title: "Palma Luxury Arrival & Old Town",
          items: [
            "Private transfer from PMI airport to Palma Old Town (€50–65)",
            "Check into Cap Rocat, Hotel Can Mostatxins, or Portixol Hotel (€200–350/night) — boutique properties in renovated historic buildings",
            "Private guided tour of La Seu Cathedral and the Royal Palace of La Almudaina (€150 for 2h private guide)",
            "Champagne lunch at Adrián Quetglas restaurant — Michelin-starred, creative Mediterranean cuisine, €80–100pp",
            "Afternoon at leisure: spa session at the hotel or private boat on Palma Bay",
            "Dinner at Marc Fosh — Mallorca's first and only Michelin-starred chef, tasting menu €85–120, book 2 months ahead",
            "Evening cocktails at the Chapeau Rooftop Bar overlooking the cathedral",
          ],
          cost: "€350–450 including accommodation",
        },
        {
          day: "Day 2",
          title: "Private Tramuntana Mountain Experience",
          items: [
            "Private chauffeured car for the day — full Serra de Tramuntana circuit (€250–300)",
            "Private hiking guide for the GR221 Dry Stone Route above Deià — 3-hour curated walk with geology and ecology commentary (€150)",
            "Lunch at La Residencia, Belmond hotel, Deià — terrace restaurant with mountain views, €60–80",
            "Visit Sóller on the vintage train (book the premium wood-panelled carriage)",
            "Private boat trip from Port de Sóller — snorkelling in sea caves, €120 for 2 hours",
            "Return via Valldemossa: private evening concert in the monastery (seasonal, €35–50)",
            "Dinner at a Deià restaurant — Can Lluc or El Olivo, €50–70",
          ],
          cost: "€400–550",
        },
        {
          day: "Day 3",
          title: "Formentor Peninsula & Finca Estate",
          items: [
            "Helicopter transfer to Cap de Formentor (€200–300 one way) — jaw-dropping aerial views of the cliffs",
            "Private sailing yacht from Port de Pollença — full-day charter along the northern coast, €400–600 for the boat",
            "Captain stops at sea caves, snorkelling spots, and secluded coves inaccessible by land",
            "Champagne lunch on deck prepared by the yacht crew",
            "Return by road to Palma; stop at a wine estate in Binissalem for a private tasting (€40–60)",
            "Spa treatment at your hotel (€80–120)",
            "Dinner at Zaranda restaurant (Michelin star) at Es Recó de Randa — mountain village setting, tasting menu €120",
          ],
          cost: "€500–700",
        },
        {
          day: "Day 4",
          title: "Es Trenc, Mondragó & Farewell",
          items: [
            "Morning yacht excursion to Cala Mondragó from Porto Colom — private speedboat (€150–200)",
            "Kayak and snorkel in the natural park's hidden sea caves with a private guide",
            "Lunch at a beachside restaurant in Portopetro — fresh lobster and local wine, €50–70pp",
            "Drive to Es Trenc beach: rent a premium sun lounger with waitress service (€25–30)",
            "Late afternoon return to Palma — shopping for ceramics, olive oil, and sobrasada in the Old Town",
            "Farewell tasting menu dinner at Bens d'Avall restaurant (Sóller) or Adrián Quetglas (Palma) — €100–140pp",
            "Private transfer to PMI for departure",
          ],
          cost: "€350–500",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–30 (hostel dorm)",
      food: "€12–18 (markets, menú del día)",
      transport: "€5–10 (buses, train)",
      activities: "€10–15",
      total: "€55–75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€80–110 (3-star hotel)",
      food: "€30–45 (restaurants + wine)",
      transport: "€15–25 (hire car)",
      activities: "€20–30",
      total: "€120–160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200–350 (boutique hotel)",
      food: "€80–120 (Michelin dining)",
      transport: "€50–80 (private transfers)",
      activities: "€80–150 (private guides, yacht)",
      total: "€300–500/day",
    },
    {
      tier: "🏖️ Beach Only",
      accommodation: "€35–60 (guesthouse near Es Trenc)",
      food: "€15–25 (casual)",
      transport: "€8–12 (bus/bike)",
      activities: "€5–15 (kayak rental)",
      total: "€65–100/day",
    },
    {
      tier: "🏔️ Mountain",
      accommodation: "€60–100 (Tramuntana village inn)",
      food: "€20–35 (local restaurants)",
      transport: "€30–45 (hire car essential)",
      activities: "€10–20 (trails free, guides optional)",
      total: "€95–145/day",
    },
  ],

  mistakes: [
    {
      icon: "🌞",
      title: "Visiting in July–August",
      desc: "Mallorca's peak season is relentlessly crowded and expensive. Es Trenc beach becomes a sardine tin, accommodation doubles in price, and Cap de Formentor's cliff road is closed to private cars in summer (you must take a shuttle). May, June, September, and October are dramatically better — warm enough to swim, quiet enough to explore.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚌",
      title: "Relying only on public transport",
      desc: "Palma's buses are excellent, but the mountain villages, Cala Mondragó, and Cap de Formentor are almost impossible to reach without a hire car. Renting a small car for at least 2 days of your 4 is essential unless you're happy joining expensive organised day trips.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🍽️",
      title: "Eating in tourist-trap restaurants near the Cathedral",
      desc: "The blocks immediately around La Seu are filled with overpriced, poor-quality restaurants targeting cruise ship day-trippers. Walk 5 minutes inland to Santa Catalina, La Lonja, or Sant Pere neighbourhoods for authentic Mallorcan food at honest prices.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🏖️",
      title: "Only going to Palma and nearby resort beaches",
      desc: "Mallorca's north and east coasts are where the real magic lives — Cap de Formentor, Cala Mondragó, Coves del Drac, and the Tramuntana mountains. Spending all 4 days in the Bay of Palma resort zone is the most common and regrettable mistake.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚗",
      title: "Not pre-booking the Sóller train or Caves of Drach",
      desc: "Both are legitimately popular and sell out in high season. The vintage wooden train from Palma to Sóller runs a fixed schedule and fills up fast — book at least 48 hours ahead online. The Caves of Drach includes a timed underground concert; arrive without a ticket and you may wait hours.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "Watch sunrise from the Tramuntana",
      desc: "Drive or hike to the Mirador de Ses Barques or the Puig Major road before 7am. The mountains glow amber, the sea turns silver, and you'll have the roads entirely to yourself. It's free, otherworldly, and the single best photograph you'll take on the island.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🚲",
      title: "Rent a bike for Es Trenc beach",
      desc: "The area around Es Trenc and the Salines natural reserve is perfectly flat and wonderful by bicycle. Hire from Campos or Colònia de Sant Jordi (€10–15/day) and combine the beach with the pink salt flats and flamingo spotting — a perfect half-day loop.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🍷",
      title: "Try Mallorcan wine in Binissalem",
      desc: "The Binissalem DO wine region produces excellent reds from the indigenous Mantonegro grape that you can't find elsewhere. Stop at José L. Ferrer or Bodega Binigrau for a €10–15 tasting. The wine is genuinely excellent and makes a distinctive souvenir.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🎟️",
      title: "Book tours in advance via GetYourGuide",
      desc: "Snorkelling tours, Tramuntana hiking guides, and Caves of Drach combo trips sell out in peak season. Locking in your activities before you arrive saves disappointment and is often cheaper than booking at the dock or hotel desk.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "Is Mallorca expensive compared to mainland Spain?",
      a: "Moderately so. Accommodation and restaurants in Palma Old Town are on a par with Barcelona; the resort areas can be pricier but also have more budget options. The biggest cost spike is July–August when everything doubles. Come in May or September and Mallorca is very affordable — a hostel dorm is €20–25, the menú del día lunch deal is €10–12, and buses cost under €4.",
    },
    {
      q: "Do I need to hire a car in Mallorca?",
      a: "For 4 days, yes — at least for 2 of those days. Palma itself is walkable and well-served by buses. But Cap de Formentor, Cala Mondragó, the Tramuntana mountain villages, and the Caves of Drach all require a car or an expensive organised tour. Hire cars start from €25/day in shoulder season; insurance is essential on mountain roads.",
    },
    {
      q: "What is the best beach in Mallorca?",
      a: "Es Trenc is widely considered the best: 3km of fine white sand, turquoise water, and zero development (it's a protected natural park). Platja de Formentor (exclusive, stunning, limited access) and Cala Mondragó (natural park, hidden coves) are close runners-up. Avoid the resort beaches of Magaluf and Alcúdia in high summer — they're massively overcrowded.",
    },
    {
      q: "How do I get from Palma Airport to the city centre?",
      a: "Bus 1 runs every 15 minutes and costs €1.55 — it's fast, air-conditioned, and takes about 20 minutes to the central Plaça d'Espanya. A taxi costs €20–25 and takes the same time in normal traffic. An Uber is usually €15–20. Do not pay the unofficial touts at the arrivals hall.",
    },
  ],

  combineWith: ["barcelona-4-days", "ibiza-3-days", "menorca-3-days"],
  relatedSlugs: ["barcelona-4-days", "lisbon-4-days", "mykonos-4-days", "amalfi-coast-4-days"],

  galleryQuery: "mallorca tramuntana mountains palma cathedral es trenc beach formentor",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function MallorcaPage() {
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
