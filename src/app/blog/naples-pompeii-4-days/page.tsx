import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Naples & Pompeii 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Naples & Pompeii trip in 4 days. The definitive 4-day Naples and Pompeii guide — Pompeii ruins, Mount Vesuvius hike, Amalfi Coast day trip,.",
  keywords: [
    "Naples Pompeii 4 days itinerary",
    "Naples travel guide 2026",
    "Pompeii day trip",
    "Mount Vesuvius hike",
    "Amalfi Coast day trip from Naples",
    "Capri day trip",
    "best pizza Naples",
    "Naples budget travel",
  ],
  openGraph: {
    title: "Naples & Pompeii 4-Day Itinerary 2026: Trip Planner",
    description:
      "Pompeii frozen in time, Vesuvius crater hike, the best pizza on Earth, and the Amalfi Coast — the definitive 4-day Naples guide.",
    url: "https://incredibleitinerary.com/blog/naples-pompeii-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pompeii ruins with Mount Vesuvius volcano backdrop Naples Italy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naples & Pompeii 4-Day Itinerary 2026: Trip Planner",
    description:
      "Pompeii frozen in time, Vesuvius crater hike, the best pizza on Earth, and the Amalfi Coast.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/naples-pompeii-4-days",
  },
};

/* ── JSON-LD ───────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/naples-pompeii-4-days#article",
      headline: "Naples & Pompeii in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "Pompeii's 2,000-year-old streets, an active volcano hike, the world's best pizza, and the Amalfi Coast — 4 unforgettable days in southern Italy's most raw and beautiful city.",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
      datePublished: "2026-01-20",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/naples-pompeii-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Naples & Pompeii 4 Days", item: "https://incredibleitinerary.com/blog/naples-pompeii-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Naples",
      description:
        "Naples is the chaotic, magnificent capital of southern Italy — birthplace of pizza, gateway to Pompeii and Vesuvius, and home to one of the world's greatest archaeological museums.",
      geo: { "@type": "GeoCoordinates", latitude: 40.8517793, longitude: 14.2681244 },
      touristType: ["History enthusiasts", "Foodies", "Adventure travelers", "Cultural tourists"],
      hasMap: "https://maps.google.com/?q=Naples,Italy",
    },
  ],
};

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Naples & Pompeii",
  country: "Italy",
  countryFlag: "🇮🇹",
  slug: "naples-pompeii-4-days",
  heroQuery: "naples pompeii vesuvius ruins italy volcano",
  heroAlt: "Pompeii ruins with Mount Vesuvius volcano backdrop Naples Italy",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "16 min read",

  intro:
    "A city so chaotic and alive it makes Rome seem orderly, Pompeii's 2,000-year-old streets frozen in the exact moment Vesuvius buried them under 6 metres of ash, pizza invented here and still made better here than anywhere on Earth with D.O.P. certification protecting the recipe, and the Amalfi Coast an hour away with cliff roads that turn your knuckles white — Naples is the most raw and the most beautiful city in Italy, and four days is barely enough to scratch the surface.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€50",
    bestMonths: "Apr–Jun or Sep–Oct",
    airport: "NAP (Capodichino)",
  },

  toc: [
    { id: "visa",        emoji: "📋", label: "Visa & Entry" },
    { id: "plans",       emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "highlights",  emoji: "🏛️", label: "Top Highlights" },
    { id: "daytrips",    emoji: "🌊", label: "Day Trips" },
    { id: "food",        emoji: "🍕", label: "Pizza & Food Guide" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa",        "Schengen visa required (apply via Italian consulate)"],
        ["Fee",         "€80 visa application fee"],
        ["Validity",    "Up to 90 days within any 180-day period"],
        ["Processing",  "15–30 business days — apply well in advance"],
        ["Documents",   "Bank statements, hotel bookings, travel insurance, itinerary"],
        ["Tip",         "Apply 6–8 weeks before departure; Schengen allows multiple EU countries in one trip"],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders (US/UK/EU/AUS)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa",        "Visa-free for Schengen zone (90 days in any 180-day period)"],
        ["ETIAS",       "ETIAS travel authorisation required from mid-2025 — €7, apply online before travel"],
        ["Passport",    "Must be valid 3 months beyond your planned departure from Schengen area"],
        ["Entry check", "Border officers may ask for proof of sufficient funds and return ticket"],
        ["UK holders",  "Visa-free but ETIAS required; 90-day Schengen limit applies since Brexit"],
        ["Tip",         "ETIAS takes minutes to complete and is valid for 3 years — do it at home"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "€50/day",
      days: [
        {
          day: "Day 1",
          title: "Naples Centro Storico & Archaeological Museum",
          items: [
            "Morning: Arrive in Naples — drop luggage at your hostel in the Spanish Quarter or Centro Storico",
            "Walk Spaccanapoli — the 'split Naples' street that cuts the old city in two; lined with churches, bookshops, and street food vendors",
            "Pizza: L'Antica Pizzeria da Michele or Sorbillo on Via dei Tribunali — queue is part of the experience; Margherita or Marinara, €5–7. This is the original Naples pizza, certified DOC",
            "Afternoon: National Archaeological Museum (MANN) — €22 entry, arguably the world's finest collection of Roman art; Pompeii's best finds are here including the Secret Room",
            "Walk through the Spanish Quarter (Quartieri Spagnoli) — labyrinthine alleys, Maradona shrines on every street, hanging laundry above your head",
            "Evening: Street food on Via dei Tribunali — friarielli, cuoppo (fried seafood cone, €5), sfogliatella pastry (€2–3)",
            "Night: Castel dell'Ovo at sunset — free to walk to, great bay views",
          ],
          cost: "€30–40",
        },
        {
          day: "Day 2",
          title: "Pompeii + Vesuvius Hike",
          items: [
            "Morning (depart 8 am): Circumvesuviana train from Naples Porta Nolana to Pompeii Scavi (40 min, €3.20 each way) — buy a 24-hour ticket if combining with Vesuvius",
            "Pompeii archaeological site (€18 entry) — arrive early before the tour groups; the Forum, Via dell'Abbondanza, the brothel, the theatres, and the plaster cast bodies in the Garden of the Fugitives",
            "Spend minimum 3 hours — bring water, hat, and good shoes; the site is enormous (66 hectares)",
            "Lunch: Snack bar inside the Pompeii site or picnic packed from Naples supermarket",
            "Afternoon: Bus from Pompeii to Vesuvius crater parking (€13 return including entrance) — 40-minute hike up from the crater rim car park to the actual crater; look down into an active volcano",
            "Back to Naples by 6–7 pm — total transport budget: €20–25",
            "Evening: Spaccanapoli for dinner — trattoria with €10–12 pasta and local wine",
          ],
          cost: "€40–55",
        },
        {
          day: "Day 3",
          title: "Amalfi Coast Day Trip",
          items: [
            "Early morning: SITA bus from Naples Piazza Garibaldi to Sorrento (1 hr, €3), then connect to the Amalfi Coast road",
            "Or: Ferry from Molo Beverello, Naples to Positano/Amalfi (faster but more expensive — €25–35 one way)",
            "Positano: coloured houses on the cliff, beach swimming, granita and sfogliatella at a seafront bar",
            "Walk or take the bus between Positano and Amalfi town (30 min, €1.30)",
            "Amalfi: Cathedral Sant'Andrea with its Arab-Norman architecture, the Paper Museum (€4), walk up the ravine",
            "Optional: Continue to Ravello (bus, 30 min) — cliffside village with the best views on the coast; Villa Rufolo gardens (€7)",
            "Return to Naples by 7–8 pm — total day trip cost: €25–40",
          ],
          cost: "€35–50",
        },
        {
          day: "Day 4",
          title: "Herculaneum + Capri Option",
          items: [
            "Morning: Herculaneum (Ercolano) — Circumvesuviana train from Naples (20 min, €2), then 10-minute walk down; €15 entry",
            "Herculaneum was buried in volcanic mud, not ash, so preservation is extraordinary — wooden furniture, mosaics, and organic matter survived 2,000 years",
            "Much smaller than Pompeii but far better preserved and less crowded — 2–3 hours is sufficient",
            "OR: Full-day Capri option instead (if budget allows) — ferry from Molo Beverello (€30–50 return) to Italy's most glamorous island",
            "Capri highlights: Blue Grotto boat tour (€15 + boat €18), Anacapri cable car, Villa Jovis (Tiberius' cliff palace, €8), swimming at Marina Piccola",
            "Back in Naples afternoon: Lungomare seafront walk, gelato at Mennella, Castel Nuovo exterior",
            "Farewell dinner: Spaghetti alle vongole (clams) at a seafront restaurant in the Borgo Marinari quarter — €15–20",
          ],
          cost: "€30–50",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€110/day",
      days: [
        {
          day: "Day 1",
          title: "Naples Deep Dive: Old City & Museum",
          items: [
            "Morning: Check into your 3-star hotel in Chiaia or Vomero neighbourhood — both safe and central",
            "Guided walking tour of Naples UNESCO Centro Storico (€25–35 pp) — covers the underground Greek-Roman street grid, Duomo di Napoli, and the catacombs",
            "Lunch: Ristorante pizzeria in the historic centre — proper sit-down Neapolitan pizza with glass of local Lacryma Christi wine (€18–25 total)",
            "Afternoon: National Archaeological Museum with audio guide (€22 + €6 audio) — 3 hours minimum; the Farnese Hercules alone is worth the trip",
            "Late afternoon: Castel Sant'Elmo via funicular (€1.30 funicular) — panoramic views over the entire bay, Vesuvius, and the islands",
            "Aperitivo: Piazza Bellini or Via dei Tribunali bar — €8–12 for wine and nibbles",
            "Dinner: Trattoria da Nennella in the Spanish Quarter (local institution, €20–30) — book in advance or queue",
          ],
          cost: "€70–90",
        },
        {
          day: "Day 2",
          title: "Pompeii + Vesuvius Full Day",
          items: [
            "Circumvesuviana to Pompeii Scavi — arrive at 9 am opening to beat tour groups",
            "Hire a local guide at the entrance (€80–120 for 2 hours, up to 10 people) — the difference in understanding is enormous; they know which houses are open on which days",
            "Pompeii highlights with guide: the Forum, Lupanare (brothel with menu art), Villa of the Mysteries (extraordinary Dionysian frescoes), the bakery with bread still in the oven",
            "Lunch: Ristorante Pompeii next to the site entrance — proper sit-down meal, €20–25",
            "Afternoon: Transfer to Vesuvius — private shuttle or bus tour (€20–25 return) + €10 national park entry",
            "Crater rim walk and views — on a clear day you can see the Bay of Naples, Capri, and the Amalfi Coast",
            "Evening return to Naples — dinner at a Chiaia restaurant, €30–40",
          ],
          cost: "€90–120",
        },
        {
          day: "Day 3",
          title: "Amalfi Coast Day Trip by Boat",
          items: [
            "Ferry from Molo Beverello to Positano (1.5 hr, €30–35 one way) — the best way to arrive, seeing the coast from the sea",
            "Positano: walk the stairs up to the Chiesa di Santa Maria Assunta (free), swim at Fornillo beach (less crowded than Spiaggia Grande)",
            "Lunch at a Positano restaurant with sea view — fresh pasta with sea urchin or seafood antipasto, €30–40",
            "Ferry onwards to Amalfi (30 min, €8–12) — Cathedral, the medieval arsenal, gelato from Il Saraceno d'Oro",
            "Bus to Ravello (€2) — cliffside village; Villa Rufolo gardens (€7) used as inspiration for Wagner's Parsifal",
            "Return ferry or bus to Naples by 8 pm",
            "Dinner: Spaghetti alle vongole at a Lungomare seafront restaurant — €30–35",
          ],
          cost: "€80–110",
        },
        {
          day: "Day 4",
          title: "Capri Day Trip",
          items: [
            "Fast ferry from Molo Beverello to Capri (50 min, €35–45 return) — book in advance in high season",
            "Blue Grotto: take the rowboat tour into the sea cave (€18 rowboat + €15 entry fee) — morning light is essential; the electric blue glow only works when the sun is at the right angle",
            "Chairlift from Anacapri to Monte Solaro (€14 return) — highest point on the island, 360° views",
            "Lunch in Anacapri — less expensive than Capri town; fresh caprese salad, €20–25",
            "Afternoon: Villa Jovis (Emperor Tiberius' cliff palace, €8) — hike up through lemon groves",
            "Swim at Marina Piccola or Faraglioni sea stacks — the classic Capri image",
            "Return to Naples by 6 pm — final dinner in the Chiaia neighbourhood, €30–40",
          ],
          cost: "€80–100",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€270/day",
      days: [
        {
          day: "Day 1",
          title: "Naples: Private Tour, MANN & Fine Dining",
          items: [
            "Stay: Grand Hotel Vesuvio (Lungomare) or Hotel Santa Lucia — both facing the bay, rooms from €250/night",
            "Private guide for Naples UNESCO Centro Storico (4 hours, €200–280) — includes underground tunnels, the Duomo treasury, and private access to noble palazzo courtyards not open to the public",
            "Lunch: Ristorante Il Comandante (1 Michelin star, inside Hotel Romeo) — tasting menu €90–120, views over the bay",
            "Afternoon: National Archaeological Museum private visit with Egyptologist/Roman historian guide — €200 for private 2-hour tour including the Secret Room",
            "Evening: Pre-dinner drinks at the Grand Hotel Vesuvio terrace bar — Campania wines, sunset over Vesuvius",
            "Dinner: Palazzo Petrucci (1 Michelin star, Posillipo) — creative Neapolitan cuisine; tasting menu €90 with wine pairing €50",
          ],
          cost: "€250–400",
        },
        {
          day: "Day 2",
          title: "Pompeii Private Tour + Herculaneum",
          items: [
            "Private car transfer to Pompeii (45 min, €60)",
            "Private archaeologist guide for Pompeii (full day, €300–400) — exclusive early access before crowds, VIP entry, houses not open to standard visitors",
            "The House of the Faun, the House of the Vettii (renowned erotic frescoes), the Villa of the Mysteries — seeing these with an expert changes everything",
            "Lunch: Luncheon in the countryside near Pompeii at a local estate — wine, cheese, antipasto",
            "Afternoon: Herculaneum with the same guide — the wooden furniture, the papyrus scrolls context, the incredible organic preservation",
            "Return to Naples by private car",
            "Evening: Castel dell'Ovo sunset, then dinner at a Posillipo cliffside restaurant — fresh seafood, €80–100",
          ],
          cost: "€300–500",
        },
        {
          day: "Day 3",
          title: "Private Amalfi Coast Boat Day",
          items: [
            "Private boat hire from Naples marina (full day, €600–900 for a 8–12 person boat with skipper) — the most spectacular way to see the Amalfi Coast",
            "Stop at Positano sea caves for swimming, anchor off Praiano for snorkelling in crystal clear water",
            "Private skipper navigates to Amalfi — lunch at a waterfront restaurant, fish caught that morning",
            "Afternoon: Ravello from the sea, swim off the rocks below Villa Rufolo",
            "Optional detour: Li Galli islands (private island group formerly owned by Rudolf Nureyev)",
            "Return to Naples by 7 pm",
            "Dinner: Don Alfonso 1890 in Sant'Agata sui Due Golfi (2 Michelin stars, 1 hour from Naples) — one of Italy's finest restaurants; tasting menu €130 + wine pairing",
          ],
          cost: "€400–700",
        },
        {
          day: "Day 4",
          title: "Capri Private Yacht Day",
          items: [
            "Private yacht transfer from Naples to Capri (1 hour, €400–600 for half day) — champagne breakfast on the water",
            "Blue Grotto early morning private rowboat access (before the crowds, golden water reflection)",
            "Swimming off the Faraglioni sea stacks in emerald water — one of the Mediterranean's most beautiful spots",
            "Lunch at Da Paolino in Capri town — romantic lemon grove setting, celebrity-favourite, €60–80 per person",
            "Villa Jovis private guide — explore Tiberius' imperial palace perched 350 metres above the sea",
            "Chairlift to Monte Solaro, then Anacapri exploration",
            "Return to Naples by private yacht — farewell Campania dinner in Chiaia, €80–100",
          ],
          cost: "€400–700",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€15–25 (hostel or cheap guesthouse)",
      food: "€12–18 (street food, pizza, mercato)",
      transport: "€8–12 (Circumvesuviana, buses, ferry)",
      activities: "€15–25 (Pompeii, Vesuvius, MANN)",
      total: "€50/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€55–80 (3-star hotel Chiaia/Vomero)",
      food: "€30–45 (sit-down restaurants, wine)",
      transport: "€15–20 (ferries, private shuttles)",
      activities: "€25–40 (guided Pompeii, Capri ferry)",
      total: "€110/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€180–350 (5-star bay view hotel)",
      food: "€80–140 (Michelin dining, wine pairings)",
      transport: "€60–120 (private cars, yacht transfers)",
      activities: "€80–200 (private guides, VIP access)",
      total: "€270/day",
    },
    {
      tier: "🎓 Student",
      accommodation: "€12–20 (hostel dorm)",
      food: "€8–12 (pizza, street food, sfogliatella)",
      transport: "€5–8 (Circumvesuviana day pass)",
      activities: "€10–18 (Pompeii only, free churches)",
      total: "€40/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€90–140 (apartment rental)",
      food: "€50–70 (mix self-catering + restaurants)",
      transport: "€20–30 (day passes, one ferry)",
      activities: "€40–60 (Pompeii, Herculaneum, beach)",
      total: "€120/day",
    },
  ],

  mistakes: [
    {
      icon: "🕐",
      title: "Arriving at Pompeii without a guide or plan",
      desc: "Pompeii is 66 hectares — the size of a small town. Without a map or guide you will wander randomly, miss the best houses (many are locked and only open on rotation), and leave disappointed. Hire a guide at the entrance (€80–120 for 2 hours) or buy the official audio guide (€8). The difference is enormous.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚨",
      title: "Being careless with your belongings on the Circumvesuviana",
      desc: "The Circumvesuviana train to Pompeii and Herculaneum is known for pickpockets, particularly on the Naples–Pompeii run. Keep your bag in front of you, don't put your phone in your back pocket, and be alert when the train is crowded. This should not stop you using the train — just be sensible.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🌊",
      title: "Going to the Amalfi Coast in July or August",
      desc: "July–August on the Amalfi Coast is genuinely horrible — the SS163 coast road becomes a car park, the beaches are packed wall-to-wall, prices double, and the heat is extreme. April, May, June and September–October are when the coast is actually beautiful. If you must go in summer, arrive by boat and depart before noon.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🍕",
      title: "Naples & Pompeii 4-Day Itinerary 2026: Trip Planner",
      desc: "Naples pizza is a DOC (Denominazione di Origine Controllata) product. The real thing has a soft, slightly charred crust, San Marzano tomatoes, and fior di latte or buffalo mozzarella — it's cooked in a wood-fired oven at 485°C for 60–90 seconds. Tourist traps serve inferior versions. Stick to L'Antica Pizzeria da Michele, Sorbillo, or Pizzeria Starita.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "⛵",
      title: "Missing Herculaneum in favour of a second Pompeii visit",
      desc: "Most visitors do Pompeii and skip Herculaneum (20 minutes closer to Naples on the same train line). This is a mistake. Herculaneum was buried in superheated volcanic mud rather than ash, preserving wood, textiles, food, and even papyrus scrolls. It is smaller, less crowded, and in many ways more extraordinary. Do both.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "🍕",
      title: "Queue at L'Antica Pizzeria da Michele — it moves fast",
      desc: "Da Michele only makes two pizzas: Margherita and Marinara. The queue outside at lunch can look daunting but it moves in 10–15 minutes. They don't take reservations, they don't have a website, and they've been doing this since 1870. Your €5.50 Margherita here will ruin every other pizza for life.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌋",
      title: "Hike Vesuvius in the morning for the best visibility",
      desc: "The best views from Vesuvius crater happen in the morning before haze builds up over the bay. The 40-minute hike from the upper car park is easy to moderate — bring water and layers as it can be windy at the top even on a warm day. The last eruption was 1944; it is overdue, according to volcanologists.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🏛️",
      title: "The National Archaeological Museum deserves a full morning",
      desc: "MANN contains everything removed from Pompeii and Herculaneum over 300 years of excavation — the Secret Room with erotic art (request access at the ticket desk), the Alexander Mosaic (the largest surviving ancient mosaic), and the Farnese Bull sculpture. Visit this before Pompeii and the ruins make 10 times more sense.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🚢",
      title: "Use Naples as a hub for southern Italy",
      desc: "Naples is brilliantly located. From here you can reach the Amalfi Coast (1 hr), Capri (50 min ferry), Pompeii (40 min train), the Cilento coast (1.5 hr), Caserta Royal Palace (40 min), and even Matera (3 hrs by train). 4 days here can unlock an entire region — book accommodation centrally and day-trip outwards.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "Is Naples safe for tourists?",
      a: "Naples has a reputation that is considerably worse than reality. The tourist areas — Centro Storico, Chiaia, Vomero, and the Lungomare — are perfectly safe during the day and evening. Be sensible at night in the Spanish Quarter and near the train station, keep your phone out of sight, and use a crossbody bag. Millions of tourists visit without incident every year.",
    },
    {
      q: "How far is Pompeii from Naples?",
      a: "Pompeii Scavi station is 40 minutes from Naples Porta Nolana on the Circumvesuviana train, running every 30 minutes. The ticket costs €3.20 each way. You can also combine with the Circumvesuviana to Herculaneum (20 min, €1.50 from Naples) on the same day trip.",
    },
    {
      q: "What is the best pizza in Naples?",
      a: "L'Antica Pizzeria da Michele (Via Cesare Sersale 1) is the most famous — cash only, two pizzas on the menu, no frills, transcendent. Sorbillo on Via dei Tribunali is excellent and slightly less chaotic. Pizzeria Starita in the Materdei neighbourhood is a third legendary option. All three cost €5–8 per pizza.",
    },
    {
      q: "When is the best time to visit Naples?",
      a: "April–June and September–October are ideal — warm enough for beach and boat trips, not overwhelmingly hot, and crowds are manageable. July and August are extremely hot (35°C+), the Amalfi Coast road is gridlocked, and prices peak. November–March is mild and uncrowded but some Amalfi Coast restaurants close.",
    },
  ],

  combineWith: ["amalfi-coast-5-days", "capri-2-days", "rome-4-days", "sicily-7-days"],
  relatedSlugs: ["rome-4-days", "amalfi-coast-5-days", "sicily-7-days", "milan-3-days"],

  galleryQuery: "naples pompeii ruins vesuvius amalfi coast pizza",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function NaplesPompeiiPage() {
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
