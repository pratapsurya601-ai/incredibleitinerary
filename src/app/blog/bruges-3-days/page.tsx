import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Bruges",
  country: "Belgium",
  countryFlag: "🇧🇪",
  slug: "bruges-3-days",
  heroQuery: "bruges belgium medieval canal houses chocolate beer",
  heroAlt: "Bruges medieval canal with step-gabled houses reflected in still water, Belgium",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro: "Bruges is the best-preserved medieval city in northern Europe — 900-year-old brick guild houses, canals that have barely changed since the 14th century, a belfry that has rung its carillon over the market square for six centuries, and a chocolate culture that predates the Belgian state itself. Three days lets you see everything without rushing: the towers, the museums, the brewery with its underground beer pipeline, and a day trip to either Brussels or Ghent.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€55",
    bestMonths: "Apr–Jun, Sep–Oct",
    airport: "BRU (Brussels, 1.5h train) or CRL (Charleroi)",
  },
  toc: [
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa",        emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Schengen Visa Required", "Belgium is a full Schengen member. Indian passport holders must apply for a short-stay Schengen C visa through the Belgian embassy or VFS Global. Fee: €80. Processing time: 15–30 days. Apply at least 6 weeks before your travel date — VFS appointment slots in major Indian cities fill up 3–4 weeks out during peak season (April–October)."],
        ["Key Documents", "Passport valid 3 months beyond your return date, 6 months of bank statements (minimum €100/day of stay), confirmed accommodation bookings, return flight tickets, employment letter or business documents, and travel insurance with minimum €30,000 medical coverage."],
        ["90/180 Day Rule", "A Schengen visa allows up to 90 days within any 180-day period across all 27 Schengen countries combined. If you are combining Belgium with France, Germany, or the Netherlands, all those days count toward your single 90-day allowance."],
        ["Note on Brussels", "Brussels is the de facto capital of the EU and a major international hub. The Belgian embassy process is generally efficient. The VFS centre in Delhi and Mumbai handles Belgian applications — check vfsglobal.com/belgium for the current appointment system."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter Belgium (Schengen) visa-free for up to 90 days within any 180-day period. No pre-approval required — simply present your passport at border control."],
        ["ETIAS from 2025", "From 2025, visa-exempt travellers (including USA, Canada, Australia) need ETIAS — a €7 travel authorisation valid 3 years. Apply online at etias.eu.int before your trip. The process takes minutes but must be done before arriving at the border."],
        ["UK Post-Brexit", "UK passport holders are no longer EU citizens. They enter under the Schengen visa-free 90/180 rule and will need ETIAS. Ensure passport validity is at least 6 months remaining. Days in Belgium count toward the overall Schengen 90-day limit if you visit other Schengen countries."],
        ["Schengen Day Tracking", "If you are combining Belgium with France, Germany, or the Netherlands on one trip, days spent in all Schengen countries count toward your single 90-day allowance. Keep a simple day count if you are close to the limit."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€55–85/day",
      days: [
        {
          day: "Day 1",
          title: "Markt Square, Belfry, Canals & Chocolate",
          items: [
            "9:00am — Markt Square (free). The central market square is the heart of medieval Bruges — three sides lined with Flemish Gothic guild houses, the 13th-century Belfry on the fourth side, and horse-drawn carriage tours circling continuously. The Provincial Court building at the west end is a 19th-century neo-Gothic recreation, but the overall effect is genuinely spectacular.",
            "9:30am — Belfry of Bruges (€14). The 83-metre bell tower has 366 steps and a 47-bell carillon. The climb rewards with views over the rooflines of Bruges stretching in every direction — on clear days you can see the sea at Zeebrugge. The carillon plays automatically on the quarter-hour; the city carilloneur plays live concerts on Wednesday evenings.",
            "11:30am — Burg Square (free, 5 minutes' walk from Markt). The adjacent square is architecturally denser: the Basilica of the Holy Blood (free entry, closed Sundays), the Gothic City Hall (€5 for the Gothic Hall interior), and the Renaissance Palace of the Liberty of Bruges.",
            "1:00pm — Lunch at De Halve Maan brewery's brasserie (Walplein, a 10-minute walk). The brewer's platter — cheese, ham, local sausage, and a Brugse Zot beer — costs €14–18.",
            "2:30pm — Canal boat tour (€10.50, 30 minutes). The five jetty points are near the Rozenhoedkaai (most photographed canal bend in Belgium) and near the Dijver. The low bridges and water-level views of the step-gabled buildings are genuinely beautiful.",
            "4:30pm — Chocolate shop crawl (free to browse, tasting €2–6). Seek out Dumon Chocolatier (Sint-Katelijnestraat) and The Old Chocolate House (Mariastraat). Avoid the souvenir shops in Markt — the quality of bulk-packaged chocolate there is identical to supermarket product. The real chocolatiers are off the main square.",
            "7:00pm — Dinner at Den Dyver (Dijver) for Flemish stew cooked in beer (carbonnade flamande, €18–22). Alternatively the Markt Square restaurants are expensive but the setting is undeniable — sit outside for one evening and pay the tourist premium once.",
          ],
          cost: "€50–75 total",
        },
        {
          day: "Day 2",
          title: "Flemish Masters, Begijnhof & Halve Maan Brewery",
          items: [
            "9:30am — Groeningemuseum (€14). The finest collection of Flemish Primitive paintings outside the Louvre — Jan van Eyck's Madonna with Canon van der Paele (1436), Hans Memling's portraits, Gerard David's Judgement of Cambyses. These paintings from the 14th–16th centuries are the reason Belgium has cultural weight beyond beer and chocolate. The museum is small enough to do properly in 2 hours.",
            "12:00pm — Begijnhof (free, 10-minute walk through Minnewater park). A 13th-century enclosed community of Beguines — religious laywomen who lived communally without taking convent vows. Now occupied by Benedictine sisters, the white-washed buildings around the central green are extraordinarily peaceful. Remove hats; quiet is expected.",
            "1:00pm — Minnewater Lake (Lake of Love, free). The small lake and park at the south of the city centre is Bruges at its most storybook. Swans glide on the water, willows trail their branches, and the backdrop is the 14th-century Powder Tower.",
            "2:30pm — Windmills walk (free). The eastern perimeter of the city along Kruisvest has four restored windmills from the 18th–19th centuries. Two are open to climb in summer (€5). The walk along the moat that surrounds the old city takes 45 minutes and gives a sense of Bruges's medieval ring-road.",
            "4:00pm — Halve Maan Brewery tour (€16, includes one beer). The brewery has been operating since 1564 in the same building. The tour covers the brewing process and Bruges's beer history — but the highlight is the story of the underground pipeline. In 2016 the brewery, unable to drive beer trucks through the narrow medieval streets, built a 3.2km underground stainless steel pipeline directly from the brewery to their bottling plant on the ring road. Funded partly by crowdfunding. The pipeline runs beneath homes, gardens, and the city centre. It is one of the more absurd and brilliant pieces of Belgian engineering.",
            "7:30pm — Dinner: Flemish beef stew at a canal-side restaurant. Chez Olivier (Meestraat) for French-Belgian cuisine at €30–40/person, or In't Nieuwe Museum for traditional stew at €16–20.",
          ],
          cost: "€55–80 total",
        },
        {
          day: "Day 3",
          title: "Day Trip: Brussels or Ghent",
          items: [
            "Option A — BRUSSELS (1 hour by train, €15 each way, trains every 30 minutes from Bruges station).",
            "Brussels Option: Grand Place (free) — Victor Hugo called it the most beautiful square in the world. The guild houses are covered in gold leaf that catches the morning sun. The flower carpet event in August is extraordinary but even in other months the square is exceptional.",
            "Brussels Option: Atomium (€18, Atomium Square, Laeken) — a 102-metre atom structure built for the 1958 World's Fair. The nine spheres contain permanent exhibitions; the panoramic top sphere has views across Brussels.",
            "Brussels Option: Manneken Pis (free) — the famous 61cm bronze statue of a boy urinating. He is invariably dressed in costume — the City of Brussels keeps a wardrobe of 1,000 outfits. The real point is the comic gap between the statue's fame and its actual size.",
            "Brussels Option: Belgian waffle (€3–4 from a street stand, Liège style — the dense, pearl-sugar caramelised version — is superior to the lighter Brussels style available everywhere).",
            "Brussels Option: Moules frites at a brasserie near Grand Place (€18–25). Belgium's national dish done properly: Prince de Liège mussels, steamed in white wine and shallots, with a cone of twice-fried frites.",
            "Option B — GHENT (30 minutes by train, €10 each way, less tourist-heavy than Bruges but equally medieval).",
            "Ghent Option: Graslei and Korenlei (free) — the most beautiful waterfront in Belgium, lined with medieval guild houses. The view across the Leie river is arguably more dramatic than anything in Bruges.",
            "Ghent Option: Gravensteen castle (€12) — a 12th-century Flemish castle of the Counts of Ghent, still fully intact, in the middle of the city. The rooftop gives views across the entire medieval skyline.",
            "Ghent Option: Ghent Altarpiece at St Bavo's Cathedral (€12) — Jan van Eyck's Adoration of the Mystic Lamb (1432) is considered the most important painting in the history of northern European art. It was stolen by Napoleon, confiscated by Prussia, and two panels were stolen in 1934 and never fully recovered until 2010.",
          ],
          cost: "€40–70 total including transport",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€140–240/day",
      days: [
        {
          day: "Day 1",
          title: "Belfry, Canal Cruise & Chocolate Masterclass",
          items: [
            "10:00am — Check into Hotel Navarra (Sint-Jakobsstraat) or Hotel Relais Bourgondisch Cruyce — a 15th-century building directly on the canal. Rooms from €130–220/night. The canal-facing rooms are worth the premium.",
            "11:00am — Guided walking tour of the historic centre (€20/person, Context Travel or Visit Bruges official tours). A good guide in Bruges covers the Hanseatic trading history, the reason the city was so wealthy in the 14th century (it was the trading hub of northern Europe before Antwerp took over), and why it was effectively frozen in time after the harbour silted up in 1490.",
            "1:00pm — Lunch at De Karmeliet (Langestraat, 1 Michelin star) — refined Belgian cuisine with contemporary technique. Lunch menu €55–75/person. Book 2 weeks ahead.",
            "3:00pm — Private chocolate masterclass (€70–90/person, 2 hours) at The Chocolate Line (Simon Stevinplein) or Choco-Story Museum. You make your own pralines with guidance from a chocolatier. The Belgian praline was invented in Brussels in 1912 — Bruges's chocolatiers have been refining the form for over a century.",
            "5:30pm — Canal boat tour at golden hour (€10.50). The light on the water at 6pm in summer is exceptional.",
            "8:00pm — Dinner at Zet'Joe (Langestraat) for modern Flemish cooking. Wild boar with gin sauce, North Sea sole meunière. €40–55/person.",
          ],
          cost: "€170–260 total",
        },
        {
          day: "Day 2",
          title: "Flemish Art, Brewery & Belgian Beer Deep Dive",
          items: [
            "9:30am — Groeningemuseum with an audio guide (€14 + €4 audio). Take 3 hours — the Flemish Primitives deserve unhurried attention.",
            "1:00pm — Lunch at Den Gouden Harynck (Groeninge, 1 Michelin star) — the most refined Belgian cuisine in Bruges. Fish dishes using North Sea catch. Lunch €55–75/person.",
            "3:00pm — Halve Maan Brewery premium tasting experience (€45, includes tour + 5 beer tasting). The Bruges Tripel, Quadrupel, and the limited seasonal releases are not widely available outside Belgium.",
            "5:00pm — Belgian beer café crawl: De Garre (off Breidelstraat) for the legendary house tripel served only here (9% strength, €6/glass) — one of the best single beers in Belgium. Limit of 3 glasses per person is strictly enforced.",
            "7:30pm — Dinner at Hertog Jan (Torhout — 10km from Bruges, worth the taxi, 3 Michelin stars). Belgium's most decorated restaurant. The tasting menu (€275–350/person) represents the pinnacle of Flemish fine dining. Book 8–12 weeks ahead.",
          ],
          cost: "€280–420 total",
        },
        {
          day: "Day 3",
          title: "Ghent with a Guide & Canal-Side Farewell",
          items: [
            "8:30am — Train to Ghent (30 minutes, €10). Ghent is larger than Bruges — give it a full day rather than a half-day.",
            "9:30am — Private guide in Ghent (€120–180 for 3 hours, Context Travel). The Ghent Altarpiece at St Bavo's with a specialist art historian who can explain the iconography — the painting is so dense with theological meaning that without context it remains opaque.",
            "1:00pm — Lunch at Brasserie HA' (Korenmarkt) — modern Belgian cuisine. Flemish stew, Ghent 'nose' (a waterzooi of vegetables), local cheese board. €30–40/person.",
            "3:30pm — Gravensteen castle (€12) and the walk through Ghent's Patershol neighbourhood — cobblestoned streets with restaurants where locals actually eat.",
            "6:30pm — Train back to Bruges.",
            "8:00pm — Farewell dinner at Chez Olivier (Meestraat) — the finest French-Belgian table in Bruges. Duck foie gras, sole normande, white Burgundy. €60–80/person. Book a canal-view table.",
          ],
          cost: "€200–320 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€400–900+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Bruges & Michelin Dinner",
          items: [
            "Check in to Hotel De Tuilerieen (Dijver) — a 15th-century mansion directly on the main canal. The premier canal-view rooms look directly onto the water. Rooms from €250–550/night.",
            "Private chauffeur from Brussels Airport or Brussels Midi (€150–200 one way, 90 minutes).",
            "3:00pm — Private guided tour of Bruges with an art historian (€250–350, 3 hours). The Flemish trading empire of the 14th century, the guild system, van Eyck's workshop, and the specific geography of the medieval city — the best possible orientation.",
            "6:00pm — Private canal boat (€120–200/hour, exclusive hire, champagne included) at sunset. The Rozenhoedkaai bend, the bridges, and the mill reflected in the water at dusk.",
            "8:30pm — Dinner at Hertog Jan (3 Michelin stars, Torhout, private car €30 each way). The 10-course tasting menu (€320+/person with wine pairing) is the summit of Flemish gastronomy. Book 12 weeks ahead.",
          ],
          cost: "€700–1,100 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Flemish Primitives, Chocolate & Brewery",
          items: [
            "9:00am — Groeningemuseum private opening (arrange through hotel, €300–500 for an early access session with a curator). Jan van Eyck's masterwork without 200 tourists pressing against the barrier.",
            "11:30am — Private chocolate creation session at The Chocolate Line with the master chocolatier (€150/person, 3 hours). Bruges's most inventive praline maker — he has created flavours with wasabi, curry, and tobacco.",
            "2:00pm — Halve Maan Brewery private tour and vertical tasting with the head brewer (€200/person). Taste beers from different vintages including the aged Quadrupel.",
            "5:00pm — Spa at Hotel De Tuilerieen — hammam and 90-minute treatment, €180.",
            "8:00pm — In-room private dinner or a second Michelin table: Restaurant Sans Cravate (Langestraat, 1 star) for a more intimate 6-course menu, €95–120/person.",
          ],
          cost: "€800–1,300 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Ghent by Private Car & Brussels Grand Place",
          items: [
            "9:00am — Private car to Ghent (30 minutes). Art historian guide for the Ghent Altarpiece (book through leading Belgian cultural tour operators, €350–500 for private access and specialist commentary).",
            "1:00pm — Lunch at Vrijmoed (Ghent, 1 Michelin star) — plant-based fine dining at its most sophisticated. The tasting menu (€90/person) draws from Belgian kitchen garden produce.",
            "4:00pm — Car continues to Brussels (50 minutes). Grand Place at dusk — the gold leaf on the guild facades catches the last light extraordinarily well.",
            "6:00pm — Champagne at the Amigo Hotel rooftop (Brussels, 5-star, €30/glass).",
            "8:00pm — Dinner at Comme Chez Soi (Brussels, 2 Michelin stars) — Belgium's most celebrated traditional fine dining room. Art Nouveau interior, impeccable classical French-Belgian cooking. €150–220/person. Return by private car to Bruges or spend the night in Brussels.",
          ],
          cost: "€900–1,500 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–40",
      food: "€15–25",
      transport: "€5–10",
      activities: "€15–25",
      total: "€55–100/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90–170",
      food: "€45–80",
      transport: "€15–25",
      activities: "€30–60",
      total: "€180–335/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–550",
      food: "€120–350",
      transport: "€40–100",
      activities: "€100–300",
      total: "€510–1,300/day",
    },
  ],
  mistakes: [
    {
      icon: "📅",
      title: "Visiting in July or August",
      desc: "Bruges receives 8 million visitors a year in a city of 20,000 people. In July and August, the Markt Square is impassable by 11am, canal boat queues stretch 45 minutes, and accommodation prices double. April–June and September–October give you the same city with 40% fewer people, flowers in the Begijnhof, and golden light on the canals. Christmas market season (late November–December) is also magical and manageable.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍽️",
      title: "Eating at the Markt Square Restaurants",
      desc: "The restaurants with outdoor seating directly on Markt Square charge €22–28 for a bowl of moules frites that costs €14 two streets away. The setting is magnificent — have a coffee or a beer there once for the view, but eat dinner at De Karmeliet, Den Dyver, or any restaurant on the Dijver canal instead. You will eat better food for half the price.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍫",
      title: "Buying Godiva or Mass-Market Belgian Chocolate",
      desc: "Godiva is owned by a Turkish conglomerate and its chocolate is produced in the same factories as many supermarket brands. The real Belgian chocolate scene is the independent praline makers: Dumon, The Chocolate Line, Depla, Sweetness. These shops use single-origin couverture and make their ganaches in small batches. A box of 10 pralines from a real chocolatier costs €8–12 and is incomparably better than any airport Godiva purchase.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Markt Square at 6:30am Is Completely Empty",
      desc: "Bruges empties overnight. The tourist coaches start arriving at 10am. Between 6:30am and 8:30am, the Markt Square belongs to you — morning mist lifts off the cobblestones, the Belfry carillon rings the quarter-hour, and a bakery on the north side opens at 7am. This is the most beautiful 2 hours in Bruges and entirely free. Bring your camera.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍺",
      title: "The Underground Beer Pipeline Story Is Extraordinary",
      desc: "The Halve Maan brewery couldn't transport beer by truck through Bruges's medieval streets without causing damage and blocking traffic. In 2016 they crowdfunded €300,000 and drilled a 3.2km stainless steel beer pipeline directly under the city — under houses, gardens, and the canal system — to their bottling plant on the ring road. The pipeline carries 6,000 litres of beer per hour. It is simultaneously the most Belgian and most absurd solution imaginable, and it works perfectly.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏙️",
      title: "Ghent Is What Bruges Would Be Without the Tourists",
      desc: "Ghent has the same medieval canals, the same guild houses, the same Flemish architecture — and 90% fewer visitors than Bruges on a July afternoon. It also has the most important painting in the history of northern European art (the Ghent Altarpiece) and a castle that actually looks like a castle (Gravensteen). If you only have time for one Belgian city and don't need to say you saw Bruges, Ghent is the better choice for an authentic Belgian experience.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Bruges or Ghent — which is better?",
      a: "Bruges is more immediately beautiful and compact — the canal views are genuinely extraordinary. But it is also overwhelmingly touristy from June through August. Ghent is larger, has more cultural weight (the Ghent Altarpiece, the university city energy), and feels like a real Belgian city where people actually live. If you have to choose one for 3 days, Bruges is the more rewarding short-trip destination. If you are in Belgium for a week, spend 2 nights in Bruges and 2 in Ghent.",
    },
    {
      q: "What is the difference between a Belgian waffle and a Brussels waffle?",
      a: "The 'Belgian waffle' sold in every souvenir shop worldwide is actually the Brussels waffle — light, rectangular, deep-pocketed, and usually served cold with toppings. The Liège waffle is denser, round, chewy, and studded with pearl sugar that caramelises on the iron — giving it a toffee-like crust. The Liège waffle is eaten plain from a street stand while warm. It is unambiguously the better of the two and is what Belgians eat. Cost: €2–4 from any proper waffle stand.",
    },
    {
      q: "Do Indians need a Schengen visa for Belgium?",
      a: "Yes. Belgium is a Schengen member state and Indian passport holders need a short-stay Schengen C visa (€80, valid for up to 90 days in 180). Apply through VFS Global or the Belgian embassy at least 6 weeks before your travel date. The visa covers all 27 Schengen countries, so if you are also visiting France or the Netherlands, one application covers the entire trip. Apply to the embassy of the country where you will spend the most days.",
    },
    {
      q: "How many days is enough for Bruges?",
      a: "Two full days covers Bruges's historic centre thoroughly — the Belfry, canals, Groeningemuseum, Begijnhof, Halve Maan Brewery, and the main squares. Three days allows a day trip to Brussels or Ghent without rushing the city itself. One day from Brussels is possible as a day trip and will show you the Markt and the canal — but you won't have time for the museums or the brewery. Four or more days is only for those who want to slow down completely and explore the countryside (Damme, the North Sea coast at De Haan).",
    },
  ],
  combineWith: ["paris-5-days", "amsterdam-4-days", "brussels-2-days"],
  relatedSlugs: ["paris-5-days", "amsterdam-4-days", "krakow-4-days", "dublin-4-days"],
  galleryQuery: "bruges belgium canal medieval belfry chocolate beer",
};

export const metadata: Metadata = {
  title: "Bruges in 3 Days: Medieval Canals, Belgian Chocolate, Beer & Ghent (2026)",
  description: "3 complete Bruges plans: Belfry, Groeningemuseum, Halve Maan underground beer pipeline, Begijnhof, and day trips to Brussels or Ghent — with real euro costs, Belgian chocolate advice, and Schengen visa info for Indians.",
  keywords: ["bruges itinerary 3 days", "bruges travel guide 2026", "belgium travel guide", "bruges chocolate", "bruges beer", "ghent day trip", "bruges budget travel"],
  openGraph: {
    title: "Bruges in 3 Days: Budget to Luxury 2026 Itinerary",
    description: "Medieval canals, Flemish Primitives, underground beer pipeline, Belgian chocolate — real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1200&q=80", width: 1200, height: 630, alt: "Bruges Belgium medieval canal houses" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Bruges in 3 Days (2026)", description: "Canals, chocolate, underground beer pipeline, real euro costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/bruges-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bruges in 3 Days: Medieval Canals, Belgian Chocolate, Beer & Ghent (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1200&q=80",
      description: "3 complete Bruges plans: Belfry, canals, Flemish Primitive paintings, Halve Maan Brewery underground pipeline, and day trips to Brussels and Ghent.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Bruges 3 Days", item: "https://www.incredibleitinerary.com/blog/bruges-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bruges, Belgium",
      description: "The best-preserved medieval city in northern Europe — 14th-century canals, Flemish Primitive paintings, world-class chocolate, and Belgian beer culture.",
      geo: { "@type": "GeoCoordinates", latitude: 51.2093, longitude: 3.2247 },
      touristType: ["Cultural tourists", "History buffs", "Food and drink lovers", "Architecture enthusiasts"],
    },
  ],
};

export default function BrugesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
