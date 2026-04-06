import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Provence",
  country: "France",
  countryFlag: "🇫🇷",
  slug: "provence-4-days",
  heroQuery: "provence france lavender fields purple rows gordes village sunset",
  heroAlt: "Provence lavender fields in full bloom with Gordes village perched on hillside France",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Provence in lavender season (mid-June to mid-July) is one of the most visually striking landscapes in the world — purple rows running to the horizon, the scent overwhelming, the light impossibly golden. Outside lavender season, it's still exceptional: perched hilltop villages, Roman ruins, the Camargue flamingos, Aix-en-Provence markets, and rosé wine in the afternoon heat.",
  stats: {
    duration: "4 Days",
    budgetFrom: "€55",
    bestMonths: "Jun–Jul (lavender), Apr–May, Sep–Oct",
    airport: "MRS (Marseille Provence) or AVN (Avignon)",
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
        ["Schengen Visa", "France is in the Schengen Zone. Apply at the French embassy or VFS Global centre. Fee: €80. Processing time: 15–45 working days. Apply at least 6–8 weeks before travel."],
        ["Documents Required", "Valid passport (3+ months beyond stay), bank statements (€100/day minimum), confirmed hotel bookings, return flight tickets, travel insurance (minimum €30,000 medical coverage), employment letter or proof of ties to home country."],
        ["Duration", "Up to 90 days within any 180-day period across the entire Schengen area. Days spent in Spain, Italy, Germany, or any other Schengen country count toward the same 90-day quota."],
        ["Apply via VFS Global", "VFS Global manages French visa applications in India. Book an appointment at vfsglobal.com/France/India. Biometrics are required for first-time applicants."],
      ],
    },
    {
      flag: "🌍",
      title: "EU, USA, UK, Canada, Australia",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Entry", "EU/EEA citizens move freely. US, Canadian, Australian, and New Zealand passport holders get 90 days visa-free in the Schengen area within any 180-day period."],
        ["ETIAS from 2025", "Non-EU travellers (USA, UK, AU, CA) will need ETIAS travel authorisation — €7 fee, valid for 3 years or until passport expiry. Apply online at travel-europe.europa.eu before your trip."],
        ["UK Passports", "UK citizens no longer have EU freedom of movement. Your passport must be valid for the duration of stay and issued within the last 10 years. Border agents will stamp your passport on entry and exit."],
        ["Schengen Quota Note", "Days in France count toward the 90-day Schengen quota shared with all other Schengen countries. Keep track if you're combining with Spain or Italy."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€55–80/day",
      days: [
        {
          day: "Day 1",
          title: "Aix-en-Provence — Markets, Cézanne & Pastis",
          items: [
            "Morning — Cours Mirabeau boulevard, Aix's great tree-lined avenue flanked by mossy fountains, grand mansions, and café terraces. The ideal orientation walk for arriving in Provence",
            "8:30am — Place Richelme morning market — one of the most beautiful daily markets in France. Local farmers sell fresh produce, goat cheeses, olives, tapenade, Provençal herbs. Breakfast of cheese, bread and fruit costs €6",
            "10:30am — Atelier Cézanne (€7.50) — Paul Cézanne's studio, preserved exactly as he left it in 1906 the day he died. His coat hangs on the hook. His brushes are on the table. The view of Mont Sainte-Victoire through the studio window is unchanged",
            "12:30pm — Saint-Sauveur Cathedral (free) — a 5th–17th century palimpsest of Romanesque, Gothic and Baroque styles, with a remarkable baptistery from Roman times in the nave",
            "2:00pm — Explore the Mazarin Quarter south of Cours Mirabeau — 17th-century mansions, quiet squares, the Musée Granet (€5, excellent Cézanne permanent collection)",
            "5:30pm — Apéro hour at a Cours Mirabeau café — order pastis (anise spirit, diluted with cold water, it turns milky white). Standard Provence ritual. Add a bowl of tapenade and olives",
            "8:00pm — Dinner at a brasserie in the old town — daube Provençale (slow-braised beef with olives and wine) or a simple salade Niçoise",
          ],
          cost: "€55–70 total",
        },
        {
          day: "Day 2",
          title: "Luberon Villages & Rosé Wine",
          items: [
            "8:00am — Rent a car in Aix-en-Provence (€35–50/day essential — the Luberon is not accessible by public transport). Drive 45 minutes to Gordes",
            "9:30am — Gordes village — perched dramatically on a white limestone ridge, consistently voted one of France's most beautiful villages. Free to walk; the view from below looking up at the stacked stone houses is one of Europe's great photographs",
            "11:00am — Abbaye de Sénanque (10 minutes from Gordes) — 12th-century Cistercian abbey surrounded by lavender fields in summer. The monks still live here. Entry to the shop and grounds (€5); full abbey tour €8",
            "1:00pm — Drive to Les Baux-de-Provence (40 minutes south) — a ruined village on a white limestone ridge above the Val d'Enfer (Valley of Hell). Château des Baux ruins (€9 entry) offer extraordinary views of the Camargue and Alpilles",
            "3:30pm — Drive to the Luberon plateau — Ménerbes, Bonnieux, or Lourmarin (all less crowded than Gordes, equally beautiful). Browse the village market if timing aligns",
            "5:00pm — Rosé wine tasting at a Luberon domaine — most estates welcome walk-in visitors. A bottle of Côtes de Luberon rosé costs €8–15 at the cellar door. Domaine de la Citadelle near Ménerbes is a good option",
            "8:00pm — Dinner back in Aix or at a village restaurant in the Luberon",
          ],
          cost: "€65–90 including car hire",
        },
        {
          day: "Day 3",
          title: "Valensole Lavender (June–July) or Camargue (Other Months)",
          items: [
            "LAVENDER OPTION (mid-June to mid-July): Drive to Valensole plateau (1hr from Aix) — France's largest lavender growing area. Fields stretch from horizon to horizon. Free to walk on the paths between rows — do not walk through the plants or pick lavender",
            "9:00am — Arrive Valensole before tour groups (ideally 7–8am for early light and empty fields). The village of Valensole itself is charming — buy lavender soap and lavender honey at the markets",
            "11:00am — Musée de la Lavande near Coustellet (€8) — excellent context on lavender cultivation, distillation, and the economics of Provençal lavender farming",
            "CAMARGUE OPTION (April–June, August–October): Drive 1.5 hours southwest from Aix to the Camargue wetlands — a vast delta of the Rhône, home to wild flamingos, white Camargue horses, and black bulls",
            "Morning — Free scenic drive through the Camargue national reserve on the D570 road from Arles to Saintes-Maries-de-la-Mer. Flamingos are visible from the roadside",
            "Noon — Boat tour of the Camargue lagoons (€12–15, departs Saintes-Maries-de-la-Mer) — the best way to see flamingos close up and the Camargue's unique ecosystem",
            "3:00pm — Visit Arles (1hr from Camargue) — the city Van Gogh painted obsessively. Roman arena still in use (€9). Free to walk the old town. The café where Van Gogh painted 'Café Terrace at Night' still exists on Place du Forum",
          ],
          cost: "€50–75 total",
        },
        {
          day: "Day 4",
          title: "Avignon — Palais des Papes & Medieval City",
          items: [
            "9:00am — Arrive Avignon (1 hour from Aix by train, €10; or 45 minutes by car). Avignon was the seat of the Catholic papacy for 68 years in the 14th century — the result is the largest Gothic palace in the world",
            "9:30am — Palais des Papes (€14 with audioguide) — 14,000 square metres of Gothic architecture, banqueting halls, chapels, and papal apartments. The scale is astonishing. Allow 2 hours",
            "12:00pm — Lunch near Place de l'Horloge — socca (chickpea flour pancake, a Nice speciality spreading into Provence) or a salade du marché. Budget €10–15",
            "2:00pm — Pont d'Avignon (€5 entry) — the medieval bridge from the famous nursery rhyme 'Sur le Pont d'Avignon'. Only half the bridge remains after repeated flooding. Walk to the midpoint for the best views of the Palais des Papes",
            "3:30pm — Cross the Rhône to Villeneuve-lès-Avignon (free walk) — the village opposite Avignon offers the best panoramic views of the walled city and the Palais des Papes from across the river",
            "5:00pm — Walk Avignon's city ramparts — 4.3km of intact 14th-century medieval walls encircling the entire old city",
            "Evening — Return to Aix by train for final dinner, or continue south toward Marseille for your return flight",
          ],
          cost: "€45–60 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€130–200/day",
      days: [
        {
          day: "Day 1–2",
          title: "Car Hire, Village Hopping & Farmhouse Dining",
          items: [
            "Hire a car immediately on arrival at Marseille or Avignon (€45–65/day for a compact — essential for proper Provence)",
            "Check in to a mas (Provençal farmhouse converted to accommodation) in the Luberon or Alpilles — authentic setting, pool, garden. €90–160/night",
            "Day 1: Aix-en-Provence in the morning — Cours Mirabeau, Place Richelme market, Atelier Cézanne — then drive to the Luberon for sunset from Gordes",
            "Day 2: Village loop — Gordes, Sénanque Abbey, Roussillon (ochre cliffs), Ménerbes (Peter Mayle's village from A Year in Provence), Bonnieux, Lourmarin. Wine tasting at a Luberon domaine (€15–25 for a proper tasting)",
            "Dinner at a Michelin-recommended mas restaurant — traditional Provençal cuisine featuring lamb from the Alpilles, local vegetables, and exceptional regional wine list. Budget €55–80 per person",
            "Seek out a pétanque game in a village square — the evening sound of Provence",
          ],
          cost: "€150–200/day all-in",
        },
        {
          day: "Day 3",
          title: "Private Lavender Photography Tour",
          items: [
            "Book a private lavender photography tour for the Valensole or Luberon plateau — local guides know the exact fields, the optimal timing for light, and lesser-known locations away from tour groups (€80–120 for a half-day guide)",
            "7:00am — Sénanque Abbey at dawn — the monks begin prayers at 6:30am and the bell rings across the lavender. Arrive before 7:30am for an empty field. By 9am there are three tour buses in the car park",
            "Musée de la Lavande in Coustellet — the full distillation tour and premium lavender product purchases",
            "Afternoon: Les Baux-de-Provence for the Carrières de Lumières (€15) — an immersive digital art show projected inside a vast limestone quarry, dramatically atmospheric",
          ],
          cost: "€150–180 total",
        },
        {
          day: "Day 4",
          title: "Avignon with Private Guide & Gastronomic Dinner",
          items: [
            "9:00am — Avignon with a private guide (€60–80 for 2 hours) — deep history of the Avignon papacy, the schism of 1378, the political intrigue behind the Palais des Papes",
            "Palais des Papes with guide — the Great Chapel, the Study Tower, the Audience Hall. The audioguide covers the basics; a private guide covers the stories behind them",
            "Lunch at a contemporary Provençal restaurant on Place des Corps Saints",
            "3:00pm — Pont d'Avignon and Villeneuve-lès-Avignon panorama",
            "Evening — Dinner at Hiély-Lucullus or Christian Etienne — two of Avignon's finest restaurants. Christian Etienne is particularly spectacular, occupying a 14th-century building adjoining the Palais des Papes wall",
          ],
          cost: "€160–220 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€350+/day",
      days: [
        {
          day: "Day 1",
          title: "La Bastide de Gordes Arrival",
          items: [
            "Check in to La Bastide de Gordes (five-star hotel perched in Gordes village with pool and valley views, €350–600/night) or Crillon le Brave (vineyard estate in a hilltop village, €400–700/night)",
            "Private welcome wine tasting of Provence's finest rosés — Domaine de Trévallon, Château Simone, Bandol rouge",
            "Dinner at the hotel restaurant — modern Provençal cuisine from the hotel kitchen garden",
          ],
          cost: "€500–800 total",
        },
        {
          day: "Day 2",
          title: "Hot Air Balloon over Lavender Fields",
          items: [
            "5:30am — Pre-dawn transfer to the launch site",
            "6:00am — Hot air balloon flight over the Luberon lavender plateau — one of France's great experiences. Flights last approximately 1 hour, champagne on landing. Operators: France Montgolfières or Provence Montgolfière. Cost €200–280 per person, dependent on operator and departure point",
            "Post-balloon breakfast at a château with the pilot and other passengers",
            "Afternoon: Private Luberon wine tour visiting three premier estates — Domaine de la Citadelle, Château La Canorgue, Domaine Fontavin. Chauffeured Mercedes van",
            "Dinner at La Bastide de Gordes gourmet restaurant",
          ],
          cost: "€600–900 total",
        },
        {
          day: "Day 3",
          title: "Private Chef & Truffle Experience",
          items: [
            "Morning: Truffle hunting in the oak forests of the Vaucluse (November–February) — Provence is France's primary truffle-producing region. A private truffle hunter with trained dog, followed by a truffle breakfast. Cost €150–250 per person",
            "Afternoon: Private chef experience at your mas — market shopping in Aix-en-Provence at 9am, then cooking lesson followed by a 4-course Provençal lunch in the garden. €200–350 for the full experience",
            "Evening: Sunset from a private Luberon vineyard with champagne",
          ],
          cost: "€700–1,000 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–40", food: "€15–20", transport: "€10–15 (car share or bus)", activities: "€10–20", total: "€55–95/day" },
    { tier: "✨ Mid-Range", accommodation: "€90–160", food: "€35–55", transport: "€45–65 (rental car)", activities: "€30–60", total: "€200–340/day" },
    { tier: "💎 Luxury", accommodation: "€300–600", food: "€80–200", transport: "€50–100", activities: "€100–300", total: "€530–1,200/day" },
  ],
  mistakes: [
    {
      icon: "🌿",
      title: "Visiting Without Checking Lavender Bloom Dates",
      desc: "Lavender blooms mid-June to mid-July, peaking around July 1–10 on the Valensole plateau and July 10–20 in the Luberon. Arriving in August means seeing brown, harvested stubble. Arriving in May means green fields with no flowers. Check lavender.com for real-time bloom status — the site is updated weekly during the season. This one mistake ruins more Provence trips than anything else.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🚗",
      title: "Not Renting a Car",
      desc: "Provence's best experiences — the Luberon villages, lavender fields, wine estates, Les Baux-de-Provence, Valensole plateau — are completely inaccessible by public transport. The bus network is sparse and infrequent. A car is not an optional upgrade; it is the only way to experience what makes Provence, Provence. Rent from Marseille airport or Avignon TGV station. Budget €35–65/day for a small automatic.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📸",
      title: "Only Visiting Gordes",
      desc: "Gordes is the most famous Luberon village and is now extremely crowded — tour buses arrive from 10am. It's still beautiful, but equally spectacular villages with a fraction of the visitors include Ménerbes (Peter Mayle's village), Bonnieux (360-degree views), Lourmarin (vibrant, non-touristy market), and Oppède-le-Vieux (largely abandoned, genuinely haunting). Build a loop that includes all of them.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍷",
      title: "Drinking Anything but Provence Rosé",
      desc: "Provence produces the best rosé wine in the world — not a regional boast but a global consensus. Bandol, Côtes de Provence AOC, Luberon AOC. At a domaine, a bottle costs €8–15. Drink it cold. Drink it slowly. Côtes de Provence rosé is pale pink, dry, mineral — nothing like the sweet supermarket rosés elsewhere. Visit Domaine de la Citadelle or Château Romanin and buy a case to take home.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌸",
      title: "Lavender Fields Are Free — But Follow the Rules",
      desc: "Farmers don't charge entry to walk alongside their lavender fields. But stay strictly on the paths between rows — walking through the plants damages the crop. Don't pick lavender. Park considerately on the roadside. The Valensole plateau has enough space that even in peak season you can find a quiet section of road with an unphotographed field in front of you.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🏙️",
      title: "Aix-en-Provence Is the Ideal Base",
      desc: "Aix has excellent transport connections (TGV station, Marseille airport 30 minutes away), a great choice of accommodation at every price point, exceptional restaurants, and Provence's best weekly markets on Tuesday, Thursday, and Saturday mornings on Cours Mirabeau. It's more convenient and more affordable than staying in the tourist villages. Drive out daily, return each evening.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "⏰",
      title: "Sénanque Abbey — Arrive at 7am",
      desc: "Sénanque Abbey with its lavender field is the most photographed scene in Provence — and possibly France. The monks' bells ring at 6:30am. Arrive at 7:00am and you may have the entire scene to yourself. By 9am there are tour buses in the car park. The monks also grow their own lavender honey, which is sold in the abbey shop.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍂",
      title: "October Provence Is Underrated",
      desc: "No lavender — but the October harvest is extraordinary. Olive groves are being harvested. Wine grape vendange is happening. The Alpilles are golden. Crowds have gone. Accommodation prices drop 30–40%. The light is warm and amber in the afternoons. The village markets are full of seasonal mushrooms, truffles, squash, and late tomatoes. October may be the best time of year to visit Provence.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "When is lavender season in Provence?",
      a: "Peak lavender bloom is typically June 20 – July 15, varying slightly year to year depending on winter rainfall and spring temperatures. The Valensole plateau peaks slightly earlier (late June to July 5) than the Luberon (July 5–20). Check lavender.com for real-time weekly updates on bloom status. The bloom lasts only 3–4 weeks at its peak before harvesting begins.",
    },
    {
      q: "Do I need a car in Provence?",
      a: "Yes, for everything beyond the city centres of Avignon and Aix-en-Provence. The Luberon villages, lavender fields, Valensole plateau, Les Baux-de-Provence, and wine estates are only reachable by car. Public buses exist but run infrequently and don't serve the scenic routes. Rent from Avignon TGV station or Marseille Provence airport — both have all major rental companies. A small automatic costs €35–65/day.",
    },
    {
      q: "What is Provençal cuisine?",
      a: "Ratatouille (slow-cooked courgette, aubergine, tomato and peppers), bouillabaisse (Marseille's iconic fish stew with rouille), tapenade (black olive and caper paste), socca (crispy chickpea flour pancake from the Riviera), daube Provençale (beef slow-braised with olives, wine and herbs), pissaladière (onion and anchovy tart), and Banon cheese wrapped in chestnut leaves. And always, always: the rosé.",
    },
    {
      q: "How far is Provence from Paris?",
      a: "Avignon is 2 hours 40 minutes by TGV from Paris Gare de Lyon (€35–80 depending on booking date). Marseille is 3 hours 20 minutes. Aix-en-Provence TGV station is 3 hours from Paris. Flying is rarely better value once you factor in airport check-in time, transfers, and the lack of a scenic journey. The TGV is the correct answer.",
    },
    {
      q: "Which is the most beautiful Luberon village?",
      a: "Gordes is the most dramatically sited — perched on white rock with views of the Vaucluse plateau. Roussillon is the most colourful — ochre cliffs and red-orange buildings. Ménerbes is the most authentic and literary (Peter Mayle lived here). Bonnieux has the widest views from its hilltop church. If you can only visit one: Gordes plus Sénanque Abbey. If you have a full day: do the full Luberon loop — Gordes, Sénanque, Roussillon, Ménerbes, Bonnieux, Lourmarin.",
    },
  ],
  combineWith: ["nice-3-days", "barcelona-4-days", "lyon-3-days"],
  relatedSlugs: ["nice-3-days", "barcelona-4-days", "lyon-3-days", "paris-5-days"],
  galleryQuery: "provence france lavender gordes luberon village rosé",
};

export const metadata: Metadata = {
  title: "Provence in 4 Days: Lavender Fields & Hilltop Villages 2026 Guide",
  description:
    "Provence lavender season guide — when to go, Valensole vs Luberon, Gordes and Sénanque Abbey, Camargue flamingos, and Avignon. Real costs, car rental guide, honest advice.",
  keywords: [
    "provence itinerary 4 days",
    "provence lavender season guide",
    "gordes provence",
    "luberon village guide",
    "avignon itinerary",
    "south of france travel guide",
  ],
  openGraph: {
    title: "Provence in 4 Days: Lavender Fields & Hilltop Villages 2026 Guide",
    description:
      "When to go for lavender, Valensole vs Luberon, Gordes, Sénanque Abbey, Camargue flamingos, and Avignon. Real costs, car rental guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Provence lavender fields in full bloom with Gordes village perched on hillside France",
      },
    ],
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Provence", "France", "Lavender", "Travel", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Provence in 4 Days: Lavender & Hilltop Villages (2026 Guide)",
    description: "Lavender season timing, Gordes, Sénanque Abbey, Valensole plateau — real costs and car rental advice.",
    images: ["https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/provence-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/provence-4-days#article",
      headline: "Provence in 4 Days: Lavender Fields & Hilltop Villages 2026 Guide",
      description:
        "Provence lavender season guide — when to go, Valensole vs Luberon, Gordes and Sénanque Abbey, Camargue flamingos, and Avignon. Real costs, car rental guide, honest advice.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/provence-4-days" },
      keywords:
        "provence itinerary, provence lavender season, gordes, sénanque abbey, luberon villages, valensole plateau, avignon, côtes de provence rosé",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 5800,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Provence in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/provence-4-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Provence, France",
      description:
        "A region in southeastern France famous for lavender fields, hilltop villages, Roman ruins, rosé wine, and the Camargue wetlands.",
      url: "https://www.incredibleitinerary.com/blog/provence-4-days",
      touristType: ["Nature Tourism", "Cultural Tourism", "Culinary Tourism", "Wine Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
        {
          "@type": "Question",
          name: "When is lavender season in Provence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Peak lavender bloom is typically June 20 – July 15. Valensole plateau peaks late June to July 5; the Luberon peaks July 5–20. Check lavender.com for real-time weekly bloom updates each year.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a car in Provence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Luberon villages, lavender fields, Valensole plateau, and wine estates are only reachable by car. Public buses are too infrequent and don't serve scenic routes. Rent from Avignon TGV or Marseille airport at €35–65/day.",
          },
        },
        {
          "@type": "Question",
          name: "What is Provençal cuisine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ratatouille, bouillabaisse (Marseille fish stew), tapenade, socca (chickpea pancake), daube Provençale (braised beef with olives), pissaladière (onion tart), and Banon cheese. And always: Côtes de Provence rosé, the best in the world.",
          },
        },
        {
          "@type": "Question",
          name: "How far is Provence from Paris?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avignon is 2h40 by TGV from Paris Gare de Lyon (€35–80). Marseille is 3h20. Aix-en-Provence TGV is 3 hours. The TGV is faster and more scenic than flying once airport time is factored in.",
          },
        },
        {
          "@type": "Question",
          name: "Which is the most beautiful Luberon village?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gordes is the most dramatic (white rock perch). Roussillon the most colourful (ochre cliffs). Ménerbes the most authentic. Bonnieux has the widest views. Best single stop: Gordes + Sénanque Abbey. Best full day: the complete Luberon loop.",
          },
        },
      ],
};

export default function ProvencePage() {
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
