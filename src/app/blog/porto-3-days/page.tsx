import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Porto",
  country: "Portugal",
  countryFlag: "🇵🇹",
  slug: "porto-3-days",
  heroQuery: "porto ribeira colorful houses douro river dom luis bridge portugal",
  heroAlt: "Porto Ribeira colorful waterfront houses and Dom Luís I Bridge over the Douro River Portugal",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "Porto is the kind of city that catches you off guard — you come for the port wine and leave in love with the crumbling azulejo facades, the thundering Douro River gorge, the world's most beautiful train station, and a sandwich so grotesque it's magnificent. Portugal's second city is smaller than Lisbon but packs more personality per square kilometre.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€35",
    bestMonths: "Apr–Jun, Sep–Oct",
    airport: "OPO (Francisco Sá Carneiro)",
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
        ["Schengen Visa", "Portugal is in the Schengen Zone. Apply for a Schengen visa at the Portuguese embassy or VFS Global centre. Fee: €80. Processing: 15–45 working days."],
        ["Documents", "Valid passport (3 months beyond stay), bank statements (€100/day minimum), hotel bookings, return tickets, travel insurance (€30,000 minimum coverage), employment letter."],
        ["Duration", "Up to 90 days within 180 days across the entire Schengen area. Days in Spain, France, or other Schengen countries count toward the same allowance."],
        ["Apply Early", "Apply 6–8 weeks before travel. Appointment slots at Portuguese consulates can be limited — book as early as possible."],
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
        ["ETIAS (2026)", "Non-EU travellers (USA, UK, AU, CA) will need ETIAS travel authorisation from 2026 — €7, valid 3 years. Apply at etias.eu.int before travel."],
        ["UK Passports", "UK passports are stamped on entry. Passport must be valid for the duration of stay and issued within the last 10 years."],
        ["Tip", "Days in Portugal count toward the 90-day Schengen quota shared with France, Spain, Italy, and all other Schengen countries."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€35–60/day",
      days: [
        {
          day: "Day 1",
          title: "Ribeira Waterfront & Dom Luís I Bridge",
          items: [
            "Morning — Ribeira waterfront (UNESCO World Heritage) — colourful medieval houses stacked above the Douro River quayside. One of the most photographed waterfronts in Europe",
            "10:00am — Dom Luís I Bridge walk — lower level for pedestrians (free). The double-decker iron bridge connects Porto to Vila Nova de Gaia. Walk across slowly and look back for the Ribeira shot",
            "11:00am — Jardim do Morro viewpoint (Gaia side of the bridge) — the classic Porto panorama. Free and less crowded than the Clérigos Tower view",
            "1:00pm — Lunch on the Ribeira — francesinha (Porto's legendary sandwich — thick bread, sausage, ham, steak, egg, drenched in beer-tomato sauce). It's enormous and costs €12–16 at a proper café",
            "3:30pm — Explore the Ribeira alleyways, tiled buildings, small wine shops",
            "6:00pm — Sunset from the Dom Luís Bridge upper level (tram crosses it — €2.50 one way)",
            "8:00pm — Dinner in Vila Nova de Gaia — taverna by the river with fresh fish",
          ],
          cost: "€35–50 total",
        },
        {
          day: "Day 2",
          title: "Livraria Lello, Azulejos & Port Wine Cellars",
          items: [
            "9:00am — São Bento train station (free to enter) — interior covered in 20,000 blue azulejo tiles depicting scenes of Portuguese history. Called the most beautiful train station in the world by multiple publications",
            "10:30am — Igreja de Santo Ildefonso — the church exterior is covered in 11,000 azulejo tiles on a baroque façade",
            "11:30am — Livraria Lello bookshop (€8 entrance, deductible from purchase) — the neo-gothic staircase claimed as the inspiration for Hogwarts. Regardless of the Harry Potter connection debate, it's genuinely spectacular. Book your slot online",
            "1:00pm — Lunch near Clérigos Tower — bifanas (pork sandwiches) or a soup for €5–8",
            "2:30pm — Port wine cellars in Vila Nova de Gaia — Graham's, Sandeman, or Quinta do Crasto all offer tours plus tasting for €15–20. The cellars are cool, dark, and fascinating",
            "5:00pm — Walk back across Dom Luís Bridge upper level for photos",
            "8:00pm — Dinner at a bacalhau restaurant in Foz do Douro",
          ],
          cost: "€40–55 total",
        },
        {
          day: "Day 3",
          title: "Douro Valley Day Trip",
          items: [
            "8:00am — Regional train from Porto São Bento or Campanhã to Pinhão (€15 each way, 2 hrs). One of the most scenic rail journeys in Europe — the line follows the Douro River gorge through terraced vineyards",
            "10:00am — Arrive Pinhão village — the heart of the Douro wine region. Covered in azulejo murals at the train station",
            "10:30am — Wander the village, visit a quinta (wine estate) — most offer walk-in tastings for €10–15",
            "12:30pm — Lunch at a riverside restaurant — fresh river lamprey in season (November–March) or posta mirandesa (thick beef steak)",
            "2:30pm — River boat cruise through the vineyards (€15 per person, 45 min)",
            "4:30pm — Train back to Porto",
            "7:00pm — Final dinner in Porto — a proper bacalhau com broa (cod with cornbread) at a neighbourhood restaurant",
          ],
          cost: "€45–65 total including transport",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120–190/day",
      days: [
        {
          day: "Day 1",
          title: "Private Walking Tour & Ribeira Evening",
          items: [
            "9:00am — Private guided walking tour of Ribeira and historic centre (€50–70 per person, 2.5 hours)",
            "12:00pm — Lunch at DOP by Rui Paula — Michelin Bib Gourmand, modern Portuguese cuisine in a beautiful converted palace",
            "3:00pm — Upper Dom Luís Bridge by tram — photoshoot at Jardim do Morro",
            "5:30pm — Port wine tasting with a sommelier at a premium cellar (Taylor's or Ramos Pinto, €25–35 per person)",
            "8:30pm — Dinner at Casa de Chá da Boa Nova (Alvaro Siza architecture, seafood, on the ocean — 30 min from Porto)",
          ],
          cost: "€130–180 total",
        },
        {
          day: "Day 2",
          title: "Azulejos, Art & Port Wine Deep Dive",
          items: [
            "9:30am — Museu do Azulejo — Porto's tile museum in a former convent with garden views",
            "11:30am — Livraria Lello (pre-booked ticket) plus the Clerigos Tower (€3) for panoramic views",
            "1:30pm — Lunch at Cantina 32 — modern cuisine in a vaulted medieval space",
            "3:30pm — Serralves Contemporary Art Museum and gardens (€12) — one of Portugal's finest modern art museums, beautiful estate grounds",
            "7:00pm — Cocktails at Prova wine bar in Gaia",
            "9:00pm — Dinner at The Yeatman hotel restaurant (Michelin star, Douro views from across the river)",
          ],
          cost: "€140–190 total",
        },
        {
          day: "Day 3",
          title: "Douro Valley with Wine Estate Lunch",
          items: [
            "8:30am — Private driver to Douro Valley (€120–150 for the day)",
            "10:30am — Quinta de la Rosa wine estate tour — family-run, exceptional terraced vineyard views",
            "1:00pm — Lunch at a quinta with views over the river gorge — river trout with Douro white wine",
            "3:00pm — Boat cruise on the Douro through the valley",
            "5:30pm — Return to Porto via scenic N222 road (voted Europe's best driving road)",
          ],
          cost: "€150–200 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€350+/day",
      days: [
        {
          day: "Day 1",
          title: "The Yeatman & Private Porto",
          items: [
            "Check in to The Yeatman (wine hotel in Gaia with pool and Douro views) or Torel Palace in central Porto",
            "Private expert tour of Porto's UNESCO historic centre with a local historian",
            "Lunch at Antiqvvm — Michelin-starred restaurant with terrace garden views over the Douro",
            "Afternoon: private port wine experience with a master blender at a top cellar (Symington Family Estates)",
            "Evening: private fado concert followed by dinner at DOP",
          ],
          cost: "€500–700 total",
        },
        {
          day: "Day 2",
          title: "Serralves & Coastal Dining",
          items: [
            "Private guided Serralves Museum visit with curator access",
            "Lunch at Casa de Chá da Boa Nova by Rui Paula — Michelin-starred restaurant in Alvaro Siza's celebrated ocean-side building",
            "Afternoon: Foz do Douro and the ocean-facing Matosinhos fish market",
            "Wine tasting session at a premier Douro quinta with winemaker",
            "Dinner at The Yeatman Michelin-starred restaurant",
          ],
          cost: "€450–600 total",
        },
        {
          day: "Day 3",
          title: "Private Douro Valley Yacht Day",
          items: [
            "Private car to Pinhão, Douro Valley",
            "Morning boat cruise on the Douro with a private guide and wine tasting on board",
            "Lunch at DOC Douro (Rui Paula's flagship Douro restaurant on the river)",
            "Afternoon: private helicopter return to Porto (seasonal availability — €400–600 for the helicopter)",
            "Farewell dinner at Antiqvvm or Largo do Paço (another Michelin-starred property in the Douro)",
          ],
          cost: "€600–900 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€15–35", food: "€12–22", transport: "€5–10", activities: "€10–20", total: "€42–87/day" },
    { tier: "✨ Mid-Range", accommodation: "€80–150", food: "€40–70", transport: "€15–30", activities: "€20–40", total: "€155–290/day" },
    { tier: "💎 Luxury", accommodation: "€200–500", food: "€100–250", transport: "€50–150", activities: "€80–200", total: "€430–1,100/day" },
  ],
  mistakes: [
    {
      icon: "🚕",
      title: "Paying Airport Taxi Rates",
      desc: "Official taxis from Porto airport to the city charge flat rates of €20–25. Uber and Bolt cost €8–12 for the same journey. Download Bolt before you land — it's more widely used than Uber in Porto and significantly cheaper. Ignore taxi touts inside the terminal.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📚",
      title: "Queuing for Livraria Lello Without Booking",
      desc: "Livraria Lello now requires timed entry tickets (€8, redeemable against purchases). Without a booking you'll queue for 30–45 minutes and might not get in at all in peak season. Book online at livrarialello.pt — tickets often sell out a day or two in advance.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🔵",
      title: "Missing the Azulejo Tiles Everywhere",
      desc: "Porto's azulejo tiles aren't just in the tourist spots — they're on ordinary church façades, old pharmacy fronts, random house walls. São Bento station, Igreja do Carmo, Almas Chapel (24,000 tiles on the exterior) — walk slowly and look up. Most visitors walk past without looking.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌊",
      title: "Only Visiting One Side of the Douro River",
      desc: "Most visitors stay on the Porto side. Cross to Vila Nova de Gaia — the port wine cellars are all here, the Jardim do Morro viewpoint is on this side, and the views back to Ribeira are the best photos you'll take. The upper bridge level has the city panorama; the lower level has the waterfront energy.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🥪",
      title: "Order a Francesinha — Nobody Outside Portugal Knows This Dish",
      desc: "The francesinha is Porto's signature sandwich: thick slices of bread, layered with smoked sausage, linguiça, and steak, covered in melted cheese, topped with a fried egg, and drowned in a spiced beer-tomato sauce. It's grotesque, magnificent, and entirely unique to Porto. Cafe Santiago and Majestic are famous; any neighbourhood café does a good one.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍷",
      title: "Port Wine at 10am Is Actually Traditional",
      desc: "The port wine cellars in Vila Nova de Gaia open at 10am and offer tastings from the first hour. This is the traditional working schedule — winemakers start early. A tawny port in the morning cool of a cellar is genuinely one of Porto's great experiences. Graham's and Quinta do Crasto both run excellent guided tours.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🚂",
      title: "The Douro Valley Train Is One of Europe's Most Scenic Rail Journeys",
      desc: "The regional train from Porto to Pinhão follows the Douro River gorge for two hours through terraced port wine vineyards. It costs €15 each way and competes with train journeys that cost ten times as much. Sit on the right side (river side) heading east, left side coming back.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "📸",
      title: "Dom Luís Bridge Upper Level for the Best Ribeira Photo",
      desc: "The tram runs across the upper deck of Dom Luís Bridge — take it one way for €2.50 and walk across the other level. The view from the upper deck back toward Ribeira, with the colourful stacked houses rising from the river, is the defining Porto photograph. Best light is morning or late afternoon.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Porto vs Lisbon — which should I visit?",
      a: "Visit both if you can — they're only 3 hours apart by train. Lisbon is larger, more diverse, with more museums and nightlife. Porto is compact, walkable, with better port wine access and arguably more character per square metre. First-timers to Portugal often prefer Porto; those who've been to Lisbon say Porto surprised them more.",
    },
    {
      q: "Is the Douro Valley day trip worth it?",
      a: "Absolutely — it's one of Europe's great day trips and very few visitors take it. The train from Porto to Pinhão costs €15 and runs twice daily. The valley itself is a UNESCO World Heritage site — 2,000-year-old terraced vineyards dropping into a dramatic river gorge. Add a wine tasting at a quinta and a boat ride for a complete day.",
    },
    {
      q: "Which port wine cellar is best?",
      a: "Graham's is arguably the most beautiful, with terraced gardens overlooking the Douro. Sandeman is most famous (the caped figure logo). Quinta do Crasto has the best views. Taylor's has the longest guided tour. Most cost €15–20 including tasting. The experience is similar across all — visit whichever has availability on your day.",
    },
    {
      q: "How many days do I need in Porto?",
      a: "3 days is the sweet spot — Day 1 Ribeira and the bridge, Day 2 the bookshop, azulejo churches, São Bento station and port wine cellars, Day 3 Douro Valley. 2 days is possible if you skip the day trip. 4 days lets you add the beach at Foz do Douro and the Serralves museum without rushing.",
    },
    {
      q: "What is the best neighborhood to stay in Porto?",
      a: "Ribeira is the most atmospheric — staying on the waterfront is genuinely special but noisy and expensive. Bonfim is the emerging local neighbourhood with good restaurants and cheaper accommodation. Aliados/Bolhão is central and convenient. Cedofeita is bohemian with independent restaurants and bars. Avoid generic hotels near the airport if possible.",
    },
  ],
  combineWith: ["lisbon-4-days", "algarve-4-days", "madrid-3-days"],
  relatedSlugs: ["lisbon-4-days", "algarve-4-days", "barcelona-4-days", "madrid-3-days"],
  galleryQuery: "porto ribeira douro river azulejo tiles wine cellars dom luis bridge portugal",
};

export const metadata: Metadata = {
  title: "Porto in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Porto plans — Budget, Mid-Range, Luxury — with Douro Valley day trip, port wine cellar guide, Livraria Lello tips, and the francesinha sandwich you must try.",
  keywords: [
    "porto itinerary 3 days",
    "porto travel guide 2026",
    "douro valley day trip",
    "port wine cellars porto",
    "livraria lello porto",
    "porto budget travel",
    "sao bento station",
    "portugal travel guide",
  ],
  openGraph: {
    title: "Porto in 3 Days: Budget to Luxury Itinerary 2026",
    description: "Douro Valley day trip, port wine cellars, Livraria Lello — 3 complete Porto plans with real euro costs.",
    images: [{ url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80", width: 1200, height: 630, alt: "Porto Ribeira colorful houses Douro River Dom Luis Bridge Portugal" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Porto", "Portugal", "Travel", "Itinerary", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porto in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, Douro Valley day trip, port wine cellars, real euro costs.",
    images: ["https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/porto-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/porto-3-days#article",
      headline: "Porto in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete Porto plans with Douro Valley day trip, port wine cellars, Livraria Lello tips, and real euro costs.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/porto-3-days" },
      keywords: "porto itinerary, porto 3 days, douro valley, port wine cellars, livraria lello, ribeira, azulejo, francesinha",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4800,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Porto in 3 Days", item: "https://www.incredibleitinerary.com/blog/porto-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Porto, Portugal",
      description: "Portugal's second city and the birthplace of port wine, known for the UNESCO Ribeira waterfront, azulejo tiles, Livraria Lello bookshop, and the Douro Valley wine country.",
      url: "https://www.incredibleitinerary.com/blog/porto-3-days",
      touristType: ["Cultural Tourism", "Wine Tourism", "Heritage Tourism", "Culinary Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Porto vs Lisbon — which should I visit?", acceptedAnswer: { "@type": "Answer", text: "Visit both if you can — 3 hours apart by train. Lisbon is larger and more cosmopolitan. Porto is compact with more character and better port wine. Most travellers who visit both say Porto surprised them more." } },
        { "@type": "Question", name: "Is the Douro Valley day trip worth it?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. The €15 train from Porto follows the Douro River gorge through 2,000-year-old UNESCO terraced vineyards. Add a wine tasting and boat ride for a complete day." } },
        { "@type": "Question", name: "Which port wine cellar is best?", acceptedAnswer: { "@type": "Answer", text: "Graham's for beautiful gardens. Sandeman for history and the famous logo. Taylor's for the longest tour. Quinta do Crasto for views. All cost €15–20 including tasting." } },
        { "@type": "Question", name: "How many days do I need in Porto?", acceptedAnswer: { "@type": "Answer", text: "3 days covers Ribeira, the azulejo churches, São Bento station, Livraria Lello, port wine cellars, and a Douro Valley day trip. 4 days adds the Serralves museum and Foz beach." } },
        { "@type": "Question", name: "What is the best neighborhood to stay in Porto?", acceptedAnswer: { "@type": "Answer", text: "Ribeira for atmosphere (noisy and expensive). Bonfim for local neighbourhood feel and good value. Aliados/Bolhão for central convenience. Cedofeita for bohemian restaurants and bars." } },
      ],
};

export default function PortoPage() {
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
