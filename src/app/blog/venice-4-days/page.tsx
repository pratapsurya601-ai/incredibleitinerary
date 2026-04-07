import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Venice",
  country: "Italy",
  countryFlag: "🇮🇹",
  slug: "venice-4-days",
  heroQuery: "venice grand canal gondola italy",
  heroAlt: "Venice Grand Canal with gondolas and historic palaces at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Venice is unlike any city on earth — 118 islands, 400 bridges, and zero cars, all floating on a lagoon that has barely changed in 500 years. The Grand Canal is the world's most beautiful high street, Murano glassblowers have been perfecting their craft since 1291, and a cicchetti bar crawl through Cannaregio feels like the Italy tourists never find. Four days is the sweet spot: enough to explore all six sestieri, cross to the outer islands, and still sit with an Aperol Spritz watching the gondolas drift past at dusk.",
  stats: { duration: "4 Days", budgetFrom: "€65", bestMonths: "Oct–Nov or Feb", airport: "VCE" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Arrival & Grand Canal" },
    { id: "day2", emoji: "📅", label: "Day 2 — Islands & Murano" },
    { id: "day3", emoji: "📅", label: "Day 3 — Dorsoduro & Rialto" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C)"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Italian Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Italy is very popular — apply 6–8 weeks before travel. Biometric appointment required."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free post-Brexit but subject to 90/180 rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€65–85/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Grand Canal Walk",
          items: [
            "14:00 — Arrive Venice Santa Lucia station; store bags at station lockers (€6/bag) and walk to hostel in Mestre or budget guesthouse in Cannaregio — staying in Mestre saves €40+/night",
            "15:30 — Walk Ponte dell'Accademia for the best free Grand Canal panorama in Venice; the wooden bridge frames perfect photos toward Salute church",
            "17:30 — Cicchetti bar crawl along Calle dei Boteri near Rialto — bàcaro bars sell wine for €1 and small snacks for €1.50–3; try All'Arco for classic polenta topped with baccalà",
            "19:30 — Dinner: hearty spaghetti alle vongole at a trattoria in Cannaregio (€12–14); avoid any restaurant with photos on the menu or a tout outside",
            "21:00 — Evening walk across Ponte di Rialto — far fewer tourists than during the day; grab a gelato and watch reflections on the canal (€3)",
          ],
          cost: "€30–40 (food, snacks, vaporetto day pass €7.50)",
        },
        {
          day: "Day 2",
          title: "Murano & Burano Islands",
          items: [
            "09:00 — Buy a vaporetto day pass (€25) at Santa Lucia station and board Line 4.1 to Murano — the pass covers unlimited rides all day on all lines and islands",
            "09:45 — Murano island: watch a live glassblowing demonstration at any of the large furnaces along Fondamenta dei Vetrai — entry is free, they make their money on sales",
            "12:00 — Board ferry to Burano island (30 min ride) for lunch canalside — fish pasta or a plate of fritto misto for €12–15; the coloured houses make every photo look professional",
            "14:30 — Return to Venice main island; explore Rialto Market stalls — even if the fish market has closed by noon, the produce section runs until 1pm on weekdays",
            "18:30 — Aperol Spritz at Fondamenta delle Zattere facing the Giudecca Canal — best free sunset bench in Venice; drinks from a nearby bar €5",
          ],
          cost: "€45–55 (day pass, lunch, spritz, dinner)",
        },
        {
          day: "Day 3",
          title: "Doge's Palace & Hidden Sestieri",
          items: [
            "08:30 — Doge's Palace opens at 9am; queue before opening to avoid 90-minute lines or book online (€25) — the Golden Staircase and Council of Ten chambers alone justify the entrance fee",
            "10:30 — San Marco Basilica free entry with the general queue — arrive by 10am before groups; the golden Byzantine mosaics covering 8,000 sq m are extraordinary; pay €3 extra for the atrium museum",
            "13:00 — Lunch in Castello sestiere (east of San Marco) — the most authentic neighbourhood with real local restaurants; pasta e fagioli for under €10",
            "15:00 — Walk to the Arsenale and Giardini area — almost no tourists, beautiful waterfront, and free to explore; this is where Venetians actually live",
            "19:00 — Final dinner at a Cannaregio bàcaro: mixed cicchetti plate and carafe of local wine for €15 total",
          ],
          cost: "€45–55 (Doge's Palace, food, transport)",
        },
        {
          day: "Day 4",
          title: "Rialto Market Dawn & Departure",
          items: [
            "06:30 — Rialto fish market at dawn (closes 11am on weekdays) — the most atmospheric scene in Venice; watch fishmongers unload lagoon catches and locals pick up the day's groceries",
            "08:00 — Breakfast at a traditional café near Rialto: cornetto and espresso for €2; eat standing at the bar like a local — sit-down service costs 2–3x more",
            "09:30 — Gondola ride split with other travellers — official price is €80 per gondola for 30 minutes; split 4 ways it becomes €20 per person; book directly at any gondola station",
            "11:30 — Final cicchetti lunch, then walk to Santa Lucia station (allow 20 min from Rialto); vaporetto back to Mestre if staying there",
          ],
          cost: "€35–45 (gondola share, food, transport to airport)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€130–180/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Dorsoduro",
          items: [
            "13:00 — Check in to a 3-star hotel in Dorsoduro or Cannaregio (€90–130/night) — Dorsoduro is quieter, more residential, and better positioned for the Accademia museums",
            "15:00 — Gallerie dell'Accademia: Venetian masters from Bellini to Titian and Tintoretto; book online to skip queues (€15); allow 2 hours minimum for the collection",
            "18:00 — Spritz at a canalside bar in Dorsoduro — try the terrace at Palazzo Zenobio garden bar or Bar alla Toletta; Aperol Spritz €6",
            "20:00 — Dinner at Trattoria ai Cugnai in Dorsoduro (€30–35/pp) — a local favourite with no tourist pricing; try the sea bass with capers and Venetian-style risotto",
          ],
          cost: "€150–170 (hotel, museum, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Torcello, Murano & Burano",
          items: [
            "09:00 — Ferry to Torcello island (Line 12 from Fondamente Nove) — Venice's oldest and most peaceful island with fewer than 20 permanent residents; visit the 7th-century Santa Maria Assunta basilica (€5)",
            "12:00 — Lunch on Murano island at Busa alla Torre (€25–35/pp) — one of the best seafood restaurants in the lagoon, right on the main piazza; try spaghetti with lagoon shrimp",
            "14:30 — Burano lace museum (€5) and canal photo walk — visit on weekdays for 30% fewer tourists than weekends",
            "18:00 — Shared sunset Aperol Spritz canal cruise (90 minutes, €25) — many operators depart from near Piazzale Roma; see the Grand Canal from water level at golden hour",
            "20:30 — Dinner back in Venice at a Cannaregio trattoria (€30/pp)",
          ],
          cost: "€140–160 (transport, meals, cruise, museum)",
        },
        {
          day: "Day 3",
          title: "Doge's Palace Secret Itinerary & Guggenheim",
          items: [
            "09:00 — Doge's Palace Secret Itinerary tour (€30, book 2–3 weeks ahead, limited to 20 people) — access the torture chambers, the leads (where Casanova was imprisoned), and rooms closed to general visitors",
            "12:00 — Lunch at Osteria Alle Testiere in Castello (€45/pp, reservation essential) — tiny 24-seat restaurant considered the best seafood in Venice; raw scallops with lemon and the catch of the day are unmissable",
            "15:00 — Peggy Guggenheim Collection: modern art in a stunning Grand Canal palazzo (€18) — Picasso, Pollock, Dalí, and Bacon in a setting that rivals any museum in the world",
            "19:00 — Sunset from San Giorgio Maggiore bell tower — ferry €8, tower free; better view than the Campanile in San Marco with half the crowds",
            "21:00 — Dinner at a Rialto-area osteria: seasonal Venetian menu for €35/pp",
          ],
          cost: "€160–180 (tours, museum, meals, ferry)",
        },
        {
          day: "Day 4",
          title: "Market Breakfast & Departure",
          items: [
            "07:30 — Rialto Market breakfast and fish market (get there by 7:30am before tour groups arrive at 9am) — coffee and pastry at Bar Rialto Biasio, then browse the most beautiful market in Italy",
            "09:30 — Private gondola in the morning (€80 for 30 minutes) — morning gondoliers are quieter and sometimes 10% cheaper; glide through the narrow rio (small canals) away from the Grand Canal crowds",
            "12:00 — Final lunch at a Dorsoduro restaurant with canal terrace (€25); then vaporetto to Piazzale Roma for the bus or People Mover to Marco Polo Airport",
          ],
          cost: "€130–150 (gondola, meals, airport transport)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Palazzo Arrival & Private Tour",
          items: [
            "12:00 — Private water taxi from Marco Polo Airport directly to hotel dock (€120) — Aman Venice, Gritti Palace, or Bauer Palazzo all have Grand Canal boat entrances that make arriving feel cinematic",
            "15:00 — Private guided Secret Itinerary tour of Doge's Palace plus the state prison — private guides (€150/hour, 2 hours) can access areas still closed to public groups and provide context that tour groups never hear",
            "19:00 — Cocktails on the terrace at Gritti Palace overlooking the Grand Canal (€25/drink) — one of the most iconic aperitivo settings in the world; order a Bellini invented 200m away at Harry's Bar",
            "20:30 — Dinner at Club del Doge restaurant inside Gritti Palace (€120–150/pp) — Grand Canal terrace tables, Venetian tasting menu, impeccable service; book the window table months ahead",
          ],
          cost: "€450–600 (hotel, private taxi, tour, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Islands & Artisan Workshops",
          items: [
            "09:00 — Private water taxi to Murano for a master glassblower private session (€200) — Venini and Barovier & Toso offer 90-minute private masterclasses where you design and blow your own piece",
            "13:00 — Lunch on Torcello island at Locanda Cipriani (€90/pp) — Hemingway's favourite Venetian restaurant on the lagoon's oldest island; the risotto and the silence are legendary",
            "16:00 — Private lace-making workshop in Burano (€100) — the museum can arrange private sessions with master merlettaie (lacemakers) who teach techniques unchanged since the 16th century",
            "20:00 — Private sunset gondola serenata with live musicians (€300 per gondola) — book through hotel concierge; a gondolier with an accordion plays Venetian classics as you drift through the back canals at dusk",
          ],
          cost: "€550–700 (hotel, private transport, workshops, dinner)",
        },
        {
          day: "Day 3",
          title: "Art, Opera & Fine Dining",
          items: [
            "10:00 — Private pre-opening tour of Peggy Guggenheim Collection (€80 exclusive access before public entry, arranged through hotel) — the curators who open for private guests can show the collection's provenance stories",
            "13:00 — Lunch at Da Fiore (1 Michelin star, €130/pp) — book 2–3 months ahead; the finest interpretation of Venetian lagoon cuisine; the spider crab with polenta and black-ink risotto are exceptional",
            "16:00 — Shopping on Calle Larga XXII Marzo — Fortuny pleated fabric scarves (€300+) are the ultimate Venice souvenir; Murano glass jewellery from top artisan studios along the same street",
            "20:30 — La Fenice Opera House evening performance (€85–250 depending on seat) — book 2–3 months ahead for main-stage operas; the restored interior after the 1996 fire is breathtaking even without a performance",
          ],
          cost: "€500–700 (hotel, museum, Michelin lunch, opera)",
        },
        {
          day: "Day 4",
          title: "Dawn Rowing & Departure",
          items: [
            "07:00 — Private dawn rowing lesson on the lagoon with Row Venice (€150 for 1.5 hours) — learn to row Venetian-style standing up in a traditional sandolo; the lagoon at sunrise with mist on the water is surreal",
            "10:00 — Breakfast at Caffè Florian in Piazza San Marco (€30 for two coffees and pastries) — world's oldest coffee house continuously open since 1720; pay for the live quartet and the gilt-mirrored rooms",
            "12:00 — Private water taxi back to Marco Polo Airport (€120) — hotel concierge arranges timing and dock-to-check-in service; a final Grand Canal passage as departure",
          ],
          cost: "€400–600 (hotel, rowing, breakfast, airport taxi)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–35 (hostel dorm or Mestre guesthouse)",
      food: "€20–30 (cicchetti bars + pizza)",
      transport: "€7.50–25 (day pass)",
      activities: "€15–25 (select sights)",
      total: "€65–85/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90–130 (3-star hotel in Venice)",
      food: "€50–70 (trattorias + markets)",
      transport: "€15–25 (day passes + water taxis)",
      activities: "€40–60 (main attractions)",
      total: "€130–180/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€400–900 (palace hotel on Grand Canal)",
      food: "€150–250 (fine dining + Michelin)",
      transport: "€100–200 (private water taxi)",
      activities: "€200–400 (private tours + opera)",
      total: "€350–600+/day",
    },
  ],
  mistakes: [
    {
      icon: "🍕",
      title: "Eating within 200m of Piazza San Marco",
      desc: "Restaurants near the square charge €6 for a coffee and €22 for pasta. Walk 5 minutes into any side street toward Castello or Dorsoduro and the same dishes cost half as much at twice the quality.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏝️",
      title: "Skipping the outer islands",
      desc: "Murano, Burano, and Torcello are what make Venice a week-long destination rather than a day trip. A €25 vaporetto day pass covers all of them and 90% of visitors miss them entirely.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "☀️",
      title: "Visiting in July or August",
      desc: "Venice receives 80,000 tourists a day in summer in a city built for 50,000 residents. October–November offers empty canals, golden light, and acqua alta season begins — foggy Venice is extraordinarily beautiful.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🎭",
      title: "Not booking Doge's Palace in advance",
      desc: "The queue in peak season is 90 minutes to 2 hours. Book online at musei.visitmuve.it at least 3 days ahead. The Secret Itinerary tour (limited to 20 people) requires booking 2–3 weeks in advance.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Staying only in the San Marco area",
      desc: "Castello, Cannaregio, and Dorsoduro are the real Venice — local bakeries, residential canals, and restaurants where the menu is written on a chalkboard and changes daily. Most tourists never find them.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Buy a vaporetto day or weekly pass",
      desc: "Single vaporetto rides cost €9.50. A 24-hour pass is €25, a 48-hour pass is €35, and a 7-day pass is €65. With the day pass, take vaporetto #1 slowly down the entire Grand Canal — the best architectural tour in the world, free once you have the pass. Book tours in advance at https://www.getyourguide.com/s/?q=Venice&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Arrive at any major sight before 9am",
      desc: "Venice's famous narrow calli are shoulder-to-shoulder by 10am. The Rialto Bridge, San Marco, and the main Grand Canal walkways are completely different at dawn — just you, the delivery boats, and the city's own reflections.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🥂",
      title: "Eat cicchetti at bàcaro bars, not restaurants",
      desc: "Cicchetti (Venetian tapas) cost €1.50–3 each and are often made the same morning by the same cooks who work in the restaurant next door. A cicchetti crawl of 4–5 bàcaro bars through Cannaregio is the authentic local experience.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "⛵",
      title: "Split a gondola ride four ways",
      desc: "The official gondola tariff is €80 per boat for 30 minutes (€100 after 7pm). Split four ways, it becomes €20 per person — cheaper than most museum tickets. Book directly at any gondola station, never through hotel concierge unless on a luxury budget.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Venice Marco Polo Airport to the city?",
      a: "Water bus (Alilaguna Blue Line) costs €15 and takes 75 minutes to Piazza San Marco — scenic but slow. Private water taxi costs €120 and takes 30 minutes, dropping you at your hotel's dock. ATVO bus to Piazzale Roma costs €8 and takes 20 minutes, then you need a vaporetto. The People Mover monorail from Piazzale Roma to Tronchetto costs €1.50 and connects to vaporettos.",
    },
    {
      q: "Is Venice expensive and can budget travellers enjoy it?",
      a: "Venice is Italy's most expensive city but it has excellent budget hacks. Stay in Mestre (€25–40/night) instead of Venice proper (€120+/night). Eat cicchetti at bàcaro bars (€3–5 per visit). Use vaporetto day passes (€25 covers all islands). Budget travellers spend €65–80/day and have the same lagoon sunsets, the same Burano colours, and the same Rialto market as anyone paying €500/day.",
    },
    {
      q: "When is the worst time to visit Venice?",
      a: "July and August bring up to 80,000 daily tourists into a city of 50,000 residents and 118 islands. June is also extremely crowded. The best months are October–November (golden light, misty canals, fewer tourists, potential for dramatic acqua alta flooding) and February during Carnival. January outside Carnival is Venice's quietest month.",
    },
    {
      q: "What is acqua alta and should I be worried?",
      a: "Acqua alta (high water) is seasonal tidal flooding that affects Venice October–January, reaching its peak around November. The city installs raised walkways (passerelle) across flooded squares within hours. Rubber boots are sold at every corner shop for €8. Acqua alta rarely lasts more than a few hours and experiencing it is actually one of Venice's memorable phenomena rather than a disaster.",
    },
  ],
  combineWith: ["florence-4-days", "cinque-terre-3-days", "rome-5-days"],
  relatedSlugs: ["florence-4-days", "rome-5-days", "cinque-terre-3-days", "sicily-7-days"],
};

export const metadata: Metadata = {
  title: "Venice in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Venice itinerary — Grand Canal, Murano, Burano, Doge's Palace, cicchetti bars, and gondolas. Budget €65/day to luxury palace hotels. All visa info included.",
  keywords: [
    "Venice itinerary",
    "Venice 4 days",
    "Venice travel guide 2026",
    "Venice budget travel",
    "Grand Canal",
    "Murano Burano",
    "Doge's Palace",
    "Venice visa Indian passport",
  ],
  openGraph: {
    title: "Venice in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Grand Canal, Murano, Burano, Doge's Palace, and cicchetti bars — Venice in 4 days from €65/day to luxury palazzo hotels.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/venice-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Venice in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Venice in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/venice-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Venice",
      description:
        "Venice, Italy — 118 islands, 400 bridges, the Grand Canal, Murano glass, and the most beautiful city in the world.",
      geo: { "@type": "GeoCoordinates", latitude: 45.4408, longitude: 12.3155 },
    },
  ],
};

export default function VenicePage() {
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
