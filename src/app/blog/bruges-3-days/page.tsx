import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Bruges",
  country: "Belgium",
  countryFlag: "🇧🇪",
  slug: "bruges-3-days",
  heroQuery: "bruges belgium medieval canal houses belfry chocolate",
  heroAlt: "Bruges medieval canal with step-gabled guild houses reflected in still water, Belgium",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Bruges is the best-preserved medieval city in northern Europe — 900-year-old brick guild houses, canals that have barely changed since the 14th century, a belfry that has rung its carillon over the market square for six centuries, and a chocolate culture that predates the Belgian state itself. Three days lets you see everything without rushing: the towers, the museums, the brewery with its underground beer pipeline, and a day trip to Ghent or Brussels.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€55",
    bestMonths: "Apr-Jun, Sep-Oct",
    airport: "BRU (Brussels, 1.5h train)",
  },
  toc: [
    { id: "visa",        emoji: "🛂", label: "Visa & Entry" },
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "day1",        emoji: "📅", label: "Day 1 - Markt & Belfry" },
    { id: "day2",        emoji: "📅", label: "Day 2 - Flemish Masters & Brewery" },
    { id: "day3",        emoji: "📅", label: "Day 3 - Ghent or Brussels" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Short-Stay Visa (Type C)"],
        ["Fee", "€80 per person"],
        ["Processing", "15-30 business days; apply 6-8 weeks ahead"],
        ["Apply at", "Belgian Embassy or VFS Global"],
        ["Validity", "90 days within any 180-day Schengen period"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance min. €30,000"],
        ["Notes", "One Schengen visa covers Belgium, France, Netherlands, and 24 other countries on the same trip"],
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
        ["Duration", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, apply at etias.eu.int before departure)"],
        ["UK Passports", "Visa-free post-Brexit but subject to 90/180 rule and ETIAS"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "Days in Belgium count toward the overall 90-day Schengen allowance"],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€55-85/day",
      days: [
        {
          day: "Day 1",
          title: "Markt Square, Belfry & Canal Boat",
          items: [
            "09:00 — Markt Square (free). The central square is the heart of medieval Bruges — three sides lined with Flemish Gothic guild houses, the 13th-century Belfry rising 83 metres on the fourth. Horse-drawn carriages circle continuously and the Provincial Court at the west end is a genuine showstopper even if it is 19th-century neo-Gothic.",
            "09:30 — Belfry of Bruges (€14). Climb 366 steps to the top of the carillon tower for views over the rooflines of Bruges stretching in every direction. On clear days you can see the sea at Zeebrugge. The 47-bell carillon plays automatically on the quarter-hour; live carilloneur concerts run on Wednesday evenings in summer.",
            "11:30 — Burg Square (free, 5 minutes from Markt). The adjacent square holds the Basilica of the Holy Blood (free entry), the Gothic City Hall (€5 for the historic interior), and the Renaissance Palace of the Liberty of Bruges — more architectural drama per square metre than almost anywhere in Belgium.",
            "13:00 — Lunch at a local tearoom away from Markt: soup, bread, and local cheese for €8-12. Avoid restaurants directly on the square — the same lunch costs €22 there.",
            "14:30 — Canal boat tour (€10.50, 30 minutes). The five jetty points are near Rozenhoedkaai — the most photographed canal bend in Belgium. Water-level views of the step-gabled buildings and low medieval bridges are genuinely beautiful and impossible to replicate on foot.",
            "16:30 — Chocolate shop crawl (free to browse, tastings €2-6). Seek out Dumon Chocolatier on Sint-Katelijnestraat and The Old Chocolate House on Mariastraat. Real Belgian pralines from artisan chocolatiers bear no resemblance to the bulk-packaged Godiva sold near the square.",
            "19:00 — Dinner at Den Dyver on Dijver for Flemish beef stew (carbonnade flamande) cooked in Brugse Zot beer, €18-22. Alternatively In't Nieuwe Museum for traditional stew at €16-20.",
          ],
          cost: "€50-75 total",
        },
        {
          day: "Day 2",
          title: "Flemish Masters, Begijnhof & Halve Maan Brewery",
          items: [
            "09:30 — Groeningemuseum (€14). The finest collection of Flemish Primitive paintings in the world — Jan van Eyck's Madonna with Canon van der Paele (1436), Hans Memling's meticulous portraits, Gerard David's Judgement of Cambyses. These 14th-16th century paintings are the reason Belgium carries cultural weight far beyond beer and chocolate. Small enough to cover properly in 2 hours.",
            "12:00 — Begijnhof (free, 10-minute walk through Minnewater park). A 13th-century enclosed community of Beguines — religious laywomen who lived communally without taking convent vows. Now occupied by Benedictine sisters, the whitewashed buildings around the central green are extraordinarily peaceful. Quiet is expected.",
            "13:00 — Minnewater Lake (free). The small lake and park south of the city centre is Bruges at its most storybook. Swans glide on the water, willows trail their branches, and the 14th-century Powder Tower anchors the backdrop.",
            "14:30 — Windmills walk (free). The eastern perimeter of the city along Kruisvest has four restored windmills from the 18th-19th centuries. Two are open to climb in summer (€5). The moat path takes 45 minutes and gives a full sense of Bruges's medieval defensive ring.",
            "16:00 — Halve Maan Brewery tour (€16, includes one beer). Operating since 1564 in the same building, the tour covers the brewing process and Bruges's beer history. The highlight: in 2016, unable to drive beer trucks through the narrow medieval streets, the brewery crowdfunded €300,000 and drilled a 3.2km stainless steel pipeline under homes, gardens, and canals to their bottling plant on the ring road. It carries 6,000 litres per hour.",
            "19:00 — Dinner at In't Nieuwe Museum (Hooistraat) for carbonnade flamande at €16-20, or at a canal-side restaurant with Belgian stew and local Brugse Zot beer.",
          ],
          cost: "€55-80 total",
        },
        {
          day: "Day 3",
          title: "Ghent Day Trip — Canals, Castle & the Mystic Lamb",
          items: [
            "08:30 — Train to Ghent (30 minutes, €10 each way from Bruges station, trains every 30 minutes). Ghent has the same medieval canals and guild houses as Bruges with 90% fewer visitors on a summer afternoon.",
            "09:30 — Gravensteen Castle (€12). A 12th-century Flemish castle of the Counts of Ghent, still fully intact, rising straight out of the city centre. The rooftop gives views across the entire medieval skyline and costs nothing extra once you have paid entry.",
            "11:00 — Ghent Altarpiece at St Bavo's Cathedral (€12). Jan van Eyck's Adoration of the Mystic Lamb (1432) is considered the most important painting in the history of northern European art. Stolen by Napoleon, confiscated by Prussia, two panels stolen in 1934 and not fully recovered until 2010. Standing in front of it is genuinely affecting.",
            "13:00 — Graslei waterfront (free). The most beautiful stretch of medieval waterfront in Belgium — guild houses lining the Leie river with the Korenlei opposite. Find a bench and eat a picnic from the nearby market or have a canal-side lunch for €12-16.",
            "15:00 — Walk through Ghent's Patershol neighbourhood: cobblestoned streets where locals actually eat, small bars serving Gentse Stoverij (Ghent beef stew), and witloof (Belgian endive) dishes.",
            "17:00 — Train back to Bruges. Evening walk along the Rozenhoedkaai at sunset — this canal bend is at its most photographic in late afternoon golden light.",
            "19:30 — Final dinner in Bruges: moules frites at a brasserie near the canal for €18-24. Book a tour in advance at https://www.getyourguide.com/s/?q=Bruges+Belgium&partner_id=PSZA5UI",
          ],
          cost: "€45-70 total including transport",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€140-240/day",
      days: [
        {
          day: "Day 1",
          title: "Belfry, Guided Walk & Chocolate Masterclass",
          items: [
            "10:00 — Check into Hotel Navarra (Sint-Jakobsstraat) or Hotel Relais Bourgondisch Cruyce — a 15th-century building directly on the canal with rooms from €130-220/night. Canal-facing rooms are worth the premium.",
            "11:00 — Guided walking tour of the historic centre (€20/person, Context Travel or Visit Bruges official tours). A specialist guide covers the Hanseatic trading history, why Bruges was the richest city in northern Europe in the 14th century, and why it was effectively frozen in time when the harbour silted up in 1490.",
            "13:00 — Lunch at a proper Bruges brasserie on the Dijver canal (€20-30/person) — Belgian fish soup, waterzooi, and a Bruges Tripel.",
            "15:00 — Private chocolate masterclass (€70-90/person, 2 hours) at The Chocolate Line (Simon Stevinplein) or Choco-Story Museum. You make pralines with guidance from a chocolatier. The Belgian praline was invented in Brussels in 1912; Bruges chocolatiers have been refining the form for over a century.",
            "17:30 — Canal boat tour at golden hour (€10.50). The light on the water at 6pm in summer is exceptional.",
            "20:00 — Dinner at Zet'Joe (Langestraat) for modern Flemish cooking: wild boar with gin sauce, North Sea sole meuniere. €40-55/person.",
          ],
          cost: "€170-260 total",
        },
        {
          day: "Day 2",
          title: "Flemish Art, Brewery & Belgian Beer Deep Dive",
          items: [
            "09:30 — Groeningemuseum with audio guide (€14 + €4 audio). Take 3 hours — the Flemish Primitives deserve unhurried attention. Van Eyck's Madonna with Canon van der Paele rewards 30 minutes of close study alone.",
            "13:00 — Lunch at Den Gouden Harynck (Groeninge, 1 Michelin star) — the most refined Belgian cuisine in Bruges. Fish dishes using North Sea catch, flawless Belgian technique. Lunch €55-75/person. Book 1 week ahead.",
            "15:00 — Halve Maan Brewery premium tasting experience (€45, includes tour and 5-beer tasting). The Bruges Tripel, Quadrupel, and limited seasonal releases are not widely distributed outside Belgium.",
            "17:00 — Belgian beer cafe crawl: De Garre (off Breidelstraat) for the legendary house tripel served only here — 9% strength, €6 per glass, with a strict limit of 3 glasses per person per visit. One of the best single beers in Belgium.",
            "20:00 — Dinner at a canal-side restaurant: Chez Olivier (Meestraat) for French-Belgian fine dining with sole normande and Burgundy. €50-70/person. Book ahead.",
          ],
          cost: "€220-350 total",
        },
        {
          day: "Day 3",
          title: "Ghent with a Private Guide",
          items: [
            "08:30 — Train to Ghent (30 minutes, €10). Give Ghent a full day rather than a half-day — it rewards slower exploration.",
            "09:30 — Private guide in Ghent for the Ghent Altarpiece (€120-180 for 3 hours, Context Travel or similar). A specialist art historian explains the dense theological iconography — without commentary the Mystic Lamb remains opaque.",
            "13:00 — Lunch at Brasserie HA' (Korenmarkt) — modern Belgian cuisine. Flemish stew, Ghent waterzooi, local cheese board. €30-40/person.",
            "15:00 — Gravensteen castle (€12) and the Patershol neighbourhood walk: cobblestoned streets with restaurants where locals eat every day.",
            "17:30 — Train back to Bruges (30 minutes).",
            "20:00 — Farewell dinner at Chez Olivier (Meestraat) — the finest French-Belgian table in Bruges. Duck foie gras, sole normande, white Burgundy. €60-80/person. Book a canal-view table.",
          ],
          cost: "€200-320 total",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€400-900+/day",
      days: [
        {
          day: "Day 1",
          title: "Private Bruges, Michelin Dinner & Canal Boat",
          items: [
            "Check in to Hotel De Tuilerieen (Dijver) — a 15th-century mansion directly on the main canal. Premier canal-view rooms look directly onto the water from €250-550/night.",
            "Private chauffeur from Brussels Airport or Brussels Midi (€150-200, 90 minutes).",
            "15:00 — Private guided tour of Bruges with an art historian (€250-350, 3 hours). The Flemish trading empire of the 14th century, the guild system, van Eyck's workshop, and the specific geography of the medieval city — the best possible orientation.",
            "18:00 — Private canal boat at sunset (€120-200/hour, exclusive hire, champagne included). The Rozenhoedkaai bend, the bridges, and the Belfry reflected in the water at dusk.",
            "20:30 — Dinner at Hertog Jan (Torhout, 20 minutes by private car, 3 Michelin stars). Belgium's most decorated restaurant. The 10-course tasting menu (€320+/person with wine pairing) represents the pinnacle of Flemish gastronomy. Book 12 weeks ahead.",
          ],
          cost: "€700-1,100 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Flemish Primitives, Chocolate & Brewery",
          items: [
            "09:00 — Groeningemuseum private early-access session (arranged through hotel, €300-500). Jan van Eyck's masterwork without 200 tourists pressing against the barriers — a curator walks you through the collection before public opening.",
            "11:30 — Private chocolate creation session at The Chocolate Line with the master chocolatier Dominique Persoone (€150/person, 3 hours). Bruges's most inventive praline maker works with unusual flavour pairings.",
            "14:00 — Halve Maan Brewery private tour and vertical tasting with the head brewer (€200/person). Taste beers from different vintages including aged Quadrupel — not available to standard tour groups.",
            "17:00 — Spa at Hotel De Tuilerieen: hammam and 90-minute treatment, €180.",
            "20:00 — Dinner at Restaurant Sans Cravate (Langestraat, 1 Michelin star) for a 6-course menu, €95-120/person.",
          ],
          cost: "€800-1,300 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Ghent Altarpiece & Brussels Grand Place",
          items: [
            "09:00 — Private car to Ghent (30 minutes). Specialist art historian guide for a private viewing of the Ghent Altarpiece (€350-500 for private access and expert commentary through leading Belgian cultural tour operators).",
            "13:00 — Lunch at Vrijmoed (Ghent, 1 Michelin star) — plant-based fine dining drawing from Belgian kitchen garden produce. Tasting menu €90/person.",
            "16:00 — Car continues to Brussels (50 minutes). Grand Place at dusk — the gold leaf on the guild facades catches the last light in a way that photographs cannot fully capture.",
            "18:00 — Champagne at the Amigo Hotel bar (Brussels, 5-star, steps from the Grand Place).",
            "20:00 — Dinner at Comme Chez Soi (Brussels, 2 Michelin stars) — Belgium's most celebrated classical fine dining room. Art Nouveau interior, impeccable French-Belgian cooking, €150-220/person. Return by private car to Bruges or overnight in Brussels.",
          ],
          cost: "€900-1,500 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20-40 (hostel or guesthouse)",
      food: "€15-25 (brasseries + bakers)",
      transport: "€5-12 (train day trips)",
      activities: "€15-25 (Belfry + museum)",
      total: "€55-102/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90-170 (3-star canal-area hotel)",
      food: "€45-80 (brasseries + 1 Michelin lunch)",
      transport: "€10-25 (train + canal boat)",
      activities: "€30-60 (guided tours + brewery)",
      total: "€175-335/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250-550 (De Tuilerieen or equivalent)",
      food: "€120-350 (Hertog Jan + Michelin tables)",
      transport: "€40-150 (private car + boat)",
      activities: "€100-300 (private tours + early access)",
      total: "€510-1,350/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€15-22 (hostel dorm)",
      food: "€10-18 (bakeries + supermarket + one brasserie)",
      transport: "€5-10 (city walk + one train)",
      activities: "€10-14 (just the Belfry)",
      total: "€40-64/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€110-200 (family room, canal area)",
      food: "€50-90 (brasseries with kids menus)",
      transport: "€15-30 (train + canal boat + horse carriage)",
      activities: "€40-70 (Belfry + museum + chocolate class)",
      total: "€215-390/day",
    },
  ],
  mistakes: [
    {
      icon: "📅",
      title: "Visiting in July or August",
      desc: "Bruges receives 8 million visitors a year in a city of 20,000 people. In July and August, the Markt Square is impassable by 11am, canal boat queues stretch 45 minutes, and accommodation prices double. April-June and September-October give you the same city with 40% fewer people and golden light on the canals.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍽️",
      title: "Eating at Markt Square Restaurants",
      desc: "Restaurants with outdoor seating directly on Markt Square charge €22-28 for moules frites that cost €14 two streets away. Have a coffee on the square once for the view, but eat dinner at Den Dyver, In't Nieuwe Museum, or any restaurant on the Dijver canal instead.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍫",
      title: "Buying Godiva or Mass-Market Chocolate",
      desc: "Godiva is owned by a Turkish conglomerate and its chocolate is produced in the same factories as many supermarket brands. The real Belgian chocolate scene is the independent praline makers: Dumon, The Chocolate Line, Depla, Sweetness. A box of 10 pralines from a real chocolatier costs €8-12 and is incomparably better.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🗺️",
      title: "Skipping Ghent on a Day Trip",
      desc: "Most visitors who come to Belgium see only Bruges. Ghent has the same medieval canals and guild houses, the most important painting in northern European art history (the Ghent Altarpiece), and a living university city energy that Bruges lacks. It is 30 minutes by train and one of the best day trips in Europe.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🏨",
      title: "Booking Hotels Near the Train Station",
      desc: "Bruges train station is a 20-minute walk from the historic centre. Hotels near the station save €30-50/night but cost you that in taxi fares and lost time. Stay within the ring canal for the full medieval atmosphere — the city is only 2km across and completely walkable from a central hotel.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Markt Square at 6:30am Is Completely Empty",
      desc: "Bruges empties overnight. Tourist coaches start arriving at 10am. Between 6:30am and 8:30am, the Markt Square belongs to you — morning mist lifts off the cobblestones, the Belfry carillon rings the quarter-hour, and a bakery on the north side opens at 7am. This is the most beautiful 2 hours in Bruges and entirely free.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍺",
      title: "The Underground Beer Pipeline Is Extraordinary",
      desc: "Unable to transport beer by truck through Bruges's medieval streets, the Halve Maan brewery crowdfunded €300,000 in 2016 and drilled a 3.2km stainless steel beer pipeline under homes, gardens, and canals to their bottling plant on the ring road. The pipeline carries 6,000 litres of beer per hour. Tour the brewery and ask to see the pipeline entry point.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏙️",
      title: "Ghent Has Everything Bruges Has, With Real City Life",
      desc: "Ghent has the same medieval canals, the same guild houses, the same Flemish architecture — and 90% fewer visitors than Bruges on a July afternoon. It also has the most important painting in northern European art history and a castle that actually looks like a castle. If you have limited time in Belgium, Ghent offers the more authentic experience.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎫",
      title: "Book the Belfry and Canal Boat Online",
      desc: "The Belfry has a limited number of entry slots per hour — it sells out by midday in peak season (May-September). Book online at museabrugge.be at least 2 days ahead. Canal boat queues at the Rozenhoedkaai jetty peak at 30-45 minutes in summer — arrive before 10am or after 5pm for a short wait. Book guided tours in advance at https://www.getyourguide.com/s/?q=Bruges+Belgium&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Bruges or Ghent — which Belgian city should I visit?",
      a: "Bruges is more immediately beautiful and compact — the canal views are genuinely extraordinary. But it is overwhelmingly touristy from June through August. Ghent is larger, has more cultural weight (the Ghent Altarpiece, university city energy), and feels like a real Belgian city where people actually live. For a 3-day trip, Bruges is the more rewarding choice. For a week, split 2 nights in Bruges and 2 in Ghent.",
    },
    {
      q: "Do Indians need a Schengen visa for Belgium?",
      a: "Yes. Belgium is a Schengen member state and Indian passport holders need a short-stay Schengen C visa (€80, valid for up to 90 days in 180). Apply through VFS Global or the Belgian Embassy at least 6 weeks before your travel date. The visa covers all 27 Schengen countries, so if you are also visiting France or the Netherlands, one application covers the entire trip.",
    },
    {
      q: "What is the best way to get from Brussels Airport to Bruges?",
      a: "Direct train from Brussels Airport (Zaventem) to Bruges takes approximately 1 hour 40 minutes with one change at Brussels Midi or Brussels Central. Cost is €15-20 depending on the connection. Trains run every 30-60 minutes. Thalys high-speed trains do not serve Bruges — take the standard intercity service. Private transfer by car takes 90-120 minutes depending on traffic and costs €100-150.",
    },
    {
      q: "How many days is enough for Bruges?",
      a: "Two full days covers Bruges's historic centre thoroughly — the Belfry, canals, Groeningemuseum, Begijnhof, Halve Maan Brewery, and the main squares. Three days allows a day trip to Brussels or Ghent without rushing the city itself. One day from Brussels is possible as a day trip but you won't have time for the museums or the brewery.",
    },
  ],
  combineWith: ["paris-5-days", "amsterdam-4-days", "ghent-3-days"],
  relatedSlugs: ["paris-5-days", "amsterdam-4-days", "ghent-3-days", "dublin-4-days"],
  galleryQuery: "bruges belgium canal medieval belfry chocolate",
};

export const metadata: Metadata = {
  title: "Bruges in 3 Days: Medieval Canals, Belgian Chocolate, Brugse Zot & Flemish Art (2026)",
  description:
    "Complete 3-day Bruges guide with Belfry, canal boat tours, Groeningemuseum Flemish masters, Halve Maan underground beer pipeline, Begijnhof, Minnewater lake, and Ghent day trip — real euro costs for every budget.",
  keywords: [
    "bruges itinerary 3 days",
    "bruges travel guide 2026",
    "belgium travel guide",
    "bruges chocolate",
    "bruges beer brugse zot",
    "ghent day trip from bruges",
    "bruges budget travel",
    "bruges visa indian passport",
  ],
  openGraph: {
    title: "Bruges in 3 Days: Budget to Luxury 2026 Itinerary",
    description:
      "Medieval canals, Flemish Primitive paintings, underground beer pipeline, Belgian chocolate — real euro costs for every budget.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/bruges-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruges in 3 Days (2026)",
    description: "Canals, Belfry, Brugse Zot beer pipeline, chocolate, and Flemish art — real costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/bruges-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bruges in 3 Days: Medieval Canals, Belgian Chocolate, Brugse Zot & Flemish Art (2026)",
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
          name: "Bruges in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/bruges-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bruges",
      description:
        "The best-preserved medieval city in northern Europe — 14th-century canals, Flemish Primitive paintings, world-class chocolate, and Belgian beer culture including the Halve Maan underground beer pipeline.",
      geo: { "@type": "GeoCoordinates", latitude: 51.2093, longitude: 3.2247 },
    },
  ],
};

export default function BrugesPage() {
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
