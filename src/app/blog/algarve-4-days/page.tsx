import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Algarve",
  country: "Portugal",
  countryFlag: "🇵🇹",
  slug: "algarve-4-days",
  heroQuery: "algarve golden cliffs rock arches ponta da piedade portugal coast",
  heroAlt: "Algarve golden limestone cliffs and rock arches at Ponta da Piedade Portugal coast",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "13 min read",
  intro: "The Algarve's 150 kilometres of Atlantic coastline contains some of the most extraordinary coastal geology in Europe — golden limestone arches rising from turquoise water, grottos accessible only by kayak, cliff-top fortresses at Europe's southwestern tip, and a cave with a hole in its ceiling that floods with golden light at midday. This is the right way to spend four days here.",
  stats: {
    duration: "4 Days",
    budgetFrom: "€50",
    bestMonths: "May–Jun, Sep–Oct",
    airport: "FAO (Faro)",
  },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Schengen Visa", "Portugal is in the Schengen Zone. Apply for a Schengen visa at the Portuguese embassy or VFS Global. Fee: €80. Processing: 15–45 working days."],
        ["Documents", "Valid passport (3 months beyond stay), bank statements (€100/day minimum), hotel bookings, return tickets, travel insurance (€30,000 minimum), employment or income proof."],
        ["Duration", "Up to 90 days within 180 days across the entire Schengen area."],
        ["Note", "Faro Airport serves the Algarve directly. Many UK low-cost carriers (Ryanair, easyJet) fly direct from major UK airports to FAO."],
      ],
    },
    {
      flag: "🌍",
      title: "EU, USA, UK, Canada, Australia",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "EU citizens move freely. USA, Canada, Australia, New Zealand get 90 days visa-free in the Schengen area."],
        ["ETIAS (2026)", "Non-EU travellers will need ETIAS travel authorisation from 2026 — €7, valid 3 years. Apply at etias.eu.int before travel."],
        ["UK Direct Flights", "UK has dozens of direct Algarve routes — Faro Airport is one of the UK's most popular sunshine destinations."],
        ["Tip", "Rent a car at Faro Airport for maximum flexibility. The Algarve's best beaches require driving — public transport covers towns but not coastline."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€50–75/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Lagos & Ponta da Piedade",
          items: [
            "Arrive Faro Airport, pick up rental car (essential for the Algarve — €20–35/day)",
            "Drive 1 hour to Lagos — base yourself here for Days 1–3",
            "Afternoon — Walk to Ponta da Piedade (20 min walk from Lagos town centre, free) — the most spectacular stretch of coastline in the Algarve. Golden limestone arches, stacks, and sea caves set in turquoise water",
            "Descend the wooden stairs to the water level — look back at the cliffs from below",
            "Sunset from the clifftop above Ponta da Piedade",
            "Dinner in Lagos town — fresh grilled fish at a local restaurant for €12–18. Avoid the main tourist square (Praça Gil Eanes) — walk one street back for better prices",
          ],
          cost: "€55–70 total including car hire",
        },
        {
          day: "Day 2",
          title: "Kayak Ponta da Piedade & Meia Praia Beach",
          items: [
            "9:00am — Kayak through Ponta da Piedade sea caves (€30 guided tour with a local guide, 2.5 hours) — access grottos and arches you can't reach on foot. Guides explain the geology and squeeze into hidden chambers. Alternatively rent a kayak independently from the beach for €25 and explore at your own pace",
            "12:00pm — Return to Lagos, dry off, lunch at Mercado de Lagos (food hall) — generous portions for €8–12",
            "2:30pm — Meia Praia beach — the long flat beach just east of Lagos. Good for swimming, less dramatic than the cliff beaches but more practical",
            "6:00pm — Walk the historic walls of Lagos old town — the walls date to the 16th century",
            "8:00pm — Dinner at a Lagos tascas — cataplana (a seafood and vegetable stew in a copper pot) for €15–22",
          ],
          cost: "€50–70 total",
        },
        {
          day: "Day 3",
          title: "Sagres — Europe's Southwestern Tip",
          items: [
            "Alternatively take the bus from Lagos to Sagres (€6, 1 hour) and skip the car for the day",
            "9:30am — Drive or bus 30km west to Sagres — the least touristy major town in the Algarve",
            "10:00am — Fortaleza de Sagres (€3) — the cape fortress from which Henry the Navigator launched the Age of Exploration. Circular wind compass (Rosa dos Ventos) carved into the ground",
            "11:30am — Walk to Cabo de São Vicente — the southwesternmost point of continental Europe. The lighthouse sits on 75-metre cliffs above the Atlantic. On a clear day there is nothing between you and South America",
            "1:30pm — Lunch in Sagres harbor — the freshest fish in the Algarve. Sagres is a fishing town; the seafood hasn't travelled far. Grilled dourada (sea bream) for €10–15",
            "4:00pm — Praia do Beliche — the dramatic beach below Cabo de São Vicente, reached by stairs cut into the cliff",
            "6:00pm — Stay for sunset at Cabo de São Vicente — one of the most dramatic sunsets in Europe, the cliffs turn amber and the lighthouse beam starts",
          ],
          cost: "€30–45 total",
        },
        {
          day: "Day 4",
          title: "Benagil Cave — The Most Photographed Cave in Portugal",
          items: [
            "Drive east to Carvoeiro (1.5 hours from Lagos)",
            "9:00am — Arrive Carvoeiro early — boat tours fill up fast. Book a Benagil Cave boat tour (€20–35 per person, 1 hour) from the beach. The cave has a circular hole in its vaulted ceiling that floods the interior with golden light. It's one of the great natural wonders of the European coast",
            "11:00am — Praia de Benagil beach — small and dramatic, backed by the same golden cliffs",
            "1:00pm — Drive to Ferragudo village — charming fishing village across the estuary from Portimão. Fresh fish lunch at a harbor restaurant",
            "3:30pm — Optional: Praia da Rocha or Meia Praia for a final beach afternoon",
            "5:30pm — Drive to Faro for the flight home, or one more night in Lagos",
          ],
          cost: "€45–65 total including transport",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€130–200/day",
      days: [
        {
          day: "Day 1",
          title: "Private Arrive Lagos & Clifftop Dinner",
          items: [
            "Collect hire car at Faro Airport — upgrade to a convertible for the coastal drives (€45–60/day)",
            "Check in to boutique hotel in Lagos old town",
            "Afternoon private boat tour of Ponta da Piedade sea caves (€60–80 per person, 2 hours)",
            "Sunset cocktails at a Lagos clifftop bar",
            "Dinner at No Pátio or Casinha do Petisco — proper Portuguese seafood restaurants, €25–40 per person",
          ],
          cost: "€140–180 total",
        },
        {
          day: "Day 2",
          title: "Kayak, Beach & Sunset Cataplana",
          items: [
            "Guided kayak tour at 9am through Ponta da Piedade grottos",
            "Late morning: Praia Dona Ana — the most photographed beach in Lagos, small and intimate, golden cliffs on both sides",
            "Afternoon: Praia da Luz — wider beach, good for swimming, quaint village",
            "Evening: Cooking class — learn to make cataplana (the iconic copper-pot seafood stew) with a local chef (€70–90 per person)",
          ],
          cost: "€130–170 total",
        },
        {
          day: "Day 3",
          title: "Sagres & Coastal Drive",
          items: [
            "Morning Fortaleza de Sagres and Cabo de São Vicente",
            "Scenic coastal drive back via Aljezur — the wild west Algarve coast that most visitors miss",
            "Lunch at Restaurante Pont'a Pé in Sagres — catch of the day on a terrace",
            "Afternoon: Swim at Praia da Arrifana — remote beach below a fishing village, dramatic cliffs",
            "Dinner back in Lagos at a wine-focused restaurant",
          ],
          cost: "€130–160 total",
        },
        {
          day: "Day 4",
          title: "Benagil & Algarve Farewell",
          items: [
            "Pre-booked private boat tour to Benagil Cave (€60 per person, smaller group, more time inside)",
            "Lunch at Rei das Praias in Carvoeiro — fresh fish with Atlantic views",
            "Afternoon: Silves — the Algarve's ancient Moorish capital, red sandstone castle (€3) and medieval streets, 30 min inland",
            "Farewell dinner in Almancil or Quinta do Lago — the Algarve's luxury food belt",
          ],
          cost: "€150–200 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€400+/day",
      days: [
        {
          day: "Day 1",
          title: "Vale do Lobo or Quinta do Lago Resort",
          items: [
            "Check in to Vila Vita Parc, Conrad Algarve, or Bela Vista Hotel & Spa",
            "Private boat tour of Ponta da Piedade sea caves",
            "Afternoon: resort beach club with sun loungers and Atlantic views",
            "Dinner at Ocean Restaurant at Vila Vita Parc (2 Michelin stars) — book months in advance",
          ],
          cost: "€600–900 total",
        },
        {
          day: "Day 2",
          title: "Golf, Spa & Sea Caves",
          items: [
            "Morning: golf at Quinta do Lago or Vale do Lobo (€150–250 green fees for world-class courses)",
            "Afternoon: resort spa treatment",
            "Private kayak tour through Ponta da Piedade caves with photography guide",
            "Dinner at Henrique Leis (Michelin star, creative European cuisine)",
          ],
          cost: "€500–800 total",
        },
        {
          day: "Day 3",
          title: "Private Sagres & Sunset Cruise",
          items: [
            "Private driver to Sagres and Cabo de São Vicente",
            "Lunch at a private dining experience at a clifftop quinta",
            "Afternoon: private sunset sailing cruise along the coast (€300–400 for the boat)",
            "Dinner at São Gabriel, Almancil (acclaimed fine dining)",
          ],
          cost: "€500–700 total",
        },
        {
          day: "Day 4",
          title: "Benagil Private Charter & Farewell",
          items: [
            "Private boat charter to Benagil Cave and surrounding grottos (€200–300 for the morning)",
            "Beach lunch on board",
            "Afternoon: resort farewell treatment",
            "Dinner at Willie's Restaurant (Vilamoura) — one of the Algarve's finest",
          ],
          cost: "€400–600 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–40", food: "€15–25", transport: "€15–25", activities: "€15–30", total: "€65–120/day" },
    { tier: "✨ Mid-Range", accommodation: "€80–160", food: "€40–70", transport: "€20–40", activities: "€30–60", total: "€170–330/day" },
    { tier: "💎 Luxury", accommodation: "€250–600", food: "€100–300", transport: "€50–150", activities: "€100–300", total: "€500–1,350/day" },
  ],
  mistakes: [
    {
      icon: "🌊",
      title: "Trying to Swim into Benagil Cave",
      desc: "Many travellers try to swim into Benagil Cave from the beach — it's a 200-metre open-sea swim around a headland in Atlantic swell. People get into trouble doing this every season. Take a boat tour (€20–35) or a guided kayak (€30). The cave is inaccessible on foot and dangerous to swim independently in anything other than calm conditions.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Missing Sagres",
      desc: "Most Algarve visitors cluster around Lagos, Albufeira, and the central coast. Sagres, 30km further west, is where the Atlantic truly takes over — wilder, less touristy, with the most dramatic sunsets on the peninsula. The Fortaleza de Sagres and Cabo de São Vicente are non-negotiable stops.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚌",
      title: "Driving Everywhere Without Checking Bus Routes",
      desc: "The Algarve has a surprisingly good regional bus network (Eva Transportes) connecting all main towns. Lagos to Sagres is €6 by bus (1 hour). Lagos to Faro is €5 (1.5 hours). If you're based in one town and taking day trips, the bus is cheaper and you don't need to worry about parking.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "☀️",
      title: "Visiting July–August",
      desc: "The Algarve in July and August means traffic jams on every road, queues at every beach entrance, hotel prices doubled or tripled, and Benagil Cave with 50 boats circling it at once. May–June and September–October have 90% of the beauty and 40% of the crowds. Water is warm, weather is perfect.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🚗",
      title: "Rent a Car — The Algarve Doesn't Work Without One",
      desc: "Public transport connects towns but not beaches. Half the best beaches in the Algarve require a short drive and a walk down a cliff path. Rent at Faro Airport on arrival — €20–35/day in shoulder season. A convertible on the Sagres coastal road is one of the great drives of Southern Europe.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏖️",
      title: "150km of Coastline — Every Beach Is Different",
      desc: "The Algarve isn't one beach — it's dozens. West coast beaches (Praia do Amado, Praia da Arrifana) face the open Atlantic with bigger swell. South coast beaches (Ponta da Piedade, Praia Dona Ana) are sheltered in golden cliff coves. East coast (Tavira, Meia Praia) are flat sandy islands. Pick your type and explore.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "⏰",
      title: "Book Benagil Boat Tour for Early Morning",
      desc: "Benagil Cave gets extremely busy by 11am in any season. The first boats leave at 9–9:30am and have the cave largely to themselves. By 11am there can be 20–30 boats anchored inside. Book the first tour available and arrive at the dock 15 minutes early.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🐟",
      title: "Sagres Is the Least Touristy Town — Eat Fish at the Harbor",
      desc: "Sagres is a working fishing port. The restaurants around the harbor serve fish caught that morning at prices that have nothing to do with the tourist Algarve. Grilled sea bream, monkfish cataplana, fresh tuna steak — all at €10–15 for a main course. This is what the Algarve actually tastes like.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "What is the best base for an Algarve trip?",
      a: "Lagos for the western cliff beaches (Ponta da Piedade, Praia Dona Ana) and easy access to Sagres. Carvoeiro or Portimão for central coast access including Benagil Cave. Tavira for the east — quieter, more authentic, beautiful Roman bridge. Lagos is the most popular choice for 4-day trips because it has the most character and best access to both the cliffs and Sagres.",
    },
    {
      q: "Do I need a car in the Algarve?",
      a: "For a 4-day trip covering multiple beaches and Sagres, yes. Public buses connect towns but the most dramatic coastline is only reachable by car and short hikes. Renting at Faro Airport is straightforward — international chains plus local companies. €20–35/day in shoulder season. Parking at beaches can be tight in July–August.",
    },
    {
      q: "Is Benagil Cave accessible without a tour?",
      a: "No safe independent access exists for most people. You cannot walk to it along the cliffs. Swimming from Benagil beach requires a 200m open sea swim around a headland — dangerous in Atlantic swell. Boat tours (€20–35) and guided kayak tours (€30) are the right options. Book online the day before or earlier in peak season.",
    },
    {
      q: "What is the best time to visit the Algarve?",
      a: "May–June is ideal — warm weather (24–28°C), sea temperature increasing, spring wildflowers still on the cliffs, and dramatically fewer crowds than summer. September–October is equally good — warm sea after a full summer of heating, smaller crowds, lower prices. Avoid July–August unless you enjoy queues. November–March is quiet but some beach facilities close.",
    },
    {
      q: "How does the Algarve compare to other European beach destinations?",
      a: "The Algarve's distinctive element is its geology — the golden limestone cliffs, arches, and sea caves are uniquely dramatic compared to the Mediterranean. The water is cooler than Greece or Turkey (Atlantic versus Mediterranean) but the coastal landscape is more theatrical. It's also significantly cheaper than the Amalfi Coast or Santorini. Best for active travellers who want kayaking and cliff walks alongside beach time.",
    },
  ],
  combineWith: ["lisbon-4-days", "porto-3-days", "madrid-3-days"],
  relatedSlugs: ["lisbon-4-days", "porto-3-days", "barcelona-4-days", "madrid-3-days"],
  galleryQuery: "algarve benagil cave ponta da piedade cliffs sagres coast portugal",
};

export const metadata: Metadata = {
  title: "Algarve in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Algarve plans — Budget, Mid-Range, Luxury — covering Ponta da Piedade sea caves, Benagil Cave, Sagres, and the golden cliff beaches. Real costs in euros.",
  keywords: [
    "algarve itinerary 4 days",
    "algarve travel guide 2026",
    "benagil cave tour",
    "ponta da piedade lagos",
    "sagres portugal",
    "algarve beaches",
    "portugal coast guide",
    "algarve budget travel",
  ],
  openGraph: {
    title: "Algarve in 4 Days: Budget to Luxury Itinerary 2026",
    description: "Ponta da Piedade caves, Benagil Cave, Sagres sunset — 3 complete Algarve plans with real euro costs.",
    images: [{ url: "https://images.unsplash.com/photo-1548625361-58a9d86b2c46?w=1200&q=80", width: 1200, height: 630, alt: "Algarve golden cliffs rock arches Ponta da Piedade Portugal coast" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Algarve", "Portugal", "Travel", "Itinerary", "Europe", "Beaches"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algarve in 4 Days: The Only Guide You Need (2026)",
    description: "3 plans, Benagil Cave tips, Ponta da Piedade kayaking, Sagres sunset — real euro costs.",
    images: ["https://images.unsplash.com/photo-1548625361-58a9d86b2c46?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/algarve-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/algarve-4-days#article",
      headline: "Algarve in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete Algarve plans covering Ponta da Piedade sea caves, Benagil Cave boat tours, Sagres, and golden cliff beaches.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1548625361-58a9d86b2c46?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/algarve-4-days" },
      keywords: "algarve itinerary, benagil cave, ponta da piedade, sagres, lagos portugal, algarve beaches, portugal coast",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 5000,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Algarve in 4 Days", item: "https://www.incredibleitinerary.com/blog/algarve-4-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Algarve, Portugal",
      description: "Southern Portugal's Atlantic coast, famous for golden limestone cliff arches, Benagil Cave, Ponta da Piedade sea grottos, and Sagres at Europe's southwestern tip.",
      url: "https://www.incredibleitinerary.com/blog/algarve-4-days",
      touristType: ["Beach Tourism", "Adventure Tourism", "Nature Tourism", "Coastal Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the best base for an Algarve trip?", acceptedAnswer: { "@type": "Answer", text: "Lagos for western cliff beaches and Sagres access. Carvoeiro for central coast and Benagil Cave. Tavira for the quieter, more authentic east. Lagos is most popular for 4-day trips." } },
        { "@type": "Question", name: "Do I need a car in the Algarve?", acceptedAnswer: { "@type": "Answer", text: "Yes for a 4-day trip. Buses connect towns but the best coastline requires a car and cliff-path walks. Rent at Faro Airport — €20–35/day in shoulder season." } },
        { "@type": "Question", name: "Is Benagil Cave accessible without a tour?", acceptedAnswer: { "@type": "Answer", text: "No safe independent access. Swimming from the beach requires a dangerous 200m open-sea swim in Atlantic swell. Boat tours (€20–35) and guided kayaks (€30) are the correct options." } },
        { "@type": "Question", name: "What is the best time to visit the Algarve?", acceptedAnswer: { "@type": "Answer", text: "May–June for warm weather, fewer crowds, and wildflowers. September–October for warm sea and lower prices. Avoid July–August — overcrowded and prices double." } },
        { "@type": "Question", name: "How does the Algarve compare to other European beach destinations?", acceptedAnswer: { "@type": "Answer", text: "The golden limestone cliffs and sea caves are uniquely dramatic — unlike anything in the Mediterranean. Cheaper than Amalfi or Santorini. Water is Atlantic (cooler) but the coastal landscape is more theatrical. Best for active travellers wanting kayaking and cliff walks alongside beaches." } },
      ],
};

export default function AlgarvePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
