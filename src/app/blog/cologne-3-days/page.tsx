import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Cologne",
  country: "Germany",
  countryFlag: "🇩🇪",
  slug: "cologne-3-days",
  heroQuery: "cologne cathedral rhine river germany gothic towers",
  heroAlt: "Cologne Cathedral twin Gothic towers rising above the Rhine River at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Cologne is Germany's most approachable great city — ancient enough to have been a Roman provincial capital, compact enough to walk its highlights in a day, but deep enough to reward three. The Cathedral is Europe's most visited Gothic monument and the first thing you see from every approach; the Rhine promenade is the finest riverfront in western Germany; the Chocolate Museum is genuinely world-class; Kölsch beer arrives in slender 200ml glasses whether you want more or not; and during Carnival, Cologne becomes the most joyful city in Europe. Roman history runs 2,000 years deep beneath every street.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€50",
    bestMonths: "Apr–Oct",
    airport: "CGN",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Cathedral & Old Town" },
    { id: "day2", emoji: "📅", label: "Day 2 — Museums & Rhine Promenade" },
    { id: "day3", emoji: "📅", label: "Day 3 — Roman History & Belgian Quarter" },
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
        ["Apply at", "German Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Apply 6–8 weeks before travel. Germany is one of the faster Schengen processors via VFS."],
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
      sub: "€50–75/day",
      days: [
        {
          day: "Day 1",
          title: "Cologne Cathedral, Old Town & Kölsch Evening",
          items: [
            "10:00 — Arrive at Cologne Hauptbahnhof; the Cathedral (Dom) is literally attached to the station and visible the moment you exit — one of the great first impressions in European travel; the station exit opens directly onto the Cathedral forecourt",
            "10:30 — Cologne Cathedral interior (free entry) — the largest Gothic cathedral in northern Europe, with 7 centuries of construction; the Shrine of the Three Kings (the largest reliquary in the Western world), the medieval Gero Cross (970 AD), and the stained glass windows by Gerhard Richter are unmissable; allow 1 hour minimum",
            "12:00 — Cathedral tower climb (€6, 533 steps) — the South Tower viewpoint at 97m gives panoramic views over the Rhine and the old city; arrive before noon to avoid afternoon queues",
            "13:30 — Lunch in the Altstadt — Haxenhaus zum Rheingarten or Früh am Dom for classic Cologne cuisine; try Himmel un Ääd (black pudding with apple sauce and mashed potato) or Sauerbraten for €12–18; Früh am Dom has been serving Kölsch since 1904",
            "16:00 — Walk the Alter Markt and Heumarkt squares — the medieval heart of Cologne; the Gurzenich banquet hall (15th century) and the ornate town hall portal date from Roman times upward",
            "18:30 — Kölsch beer evening in a traditional Brauhaus — Gaffel am Dom, Sion, or Peters Brauhaus; Kölsch is served in 200ml cylindrical glasses by waiters (Köbes) who replace your glass without asking until you cover it with your coaster; a round costs €2–2.50 per glass",
          ],
          cost: "€45–65 (transport, tower, food, beer)",
        },
        {
          day: "Day 2",
          title: "Chocolate Museum, Rhine Promenade & Deutz",
          items: [
            "09:30 — Cologne Chocolate Museum (Schokoladenmuseum, €15.50) — 3,000 years of chocolate history from Aztec cacao to Belgian pralines; the famous 3-metre-tall chocolate fountain sprays liquid couverture that visitors can dip wafers into; allow 2 hours",
            "11:30 — Walk the Rhine promenade from the Chocolate Museum to the Hohenzollern Bridge — the most beautiful riverside walk in Cologne; the Hohenzollern Bridge is covered with over 500,000 love padlocks making it the world's most padlocked bridge",
            "13:00 — Lunch at a riverside café or beer garden along the Rheinufer promenade — Flammkuchen (Alsatian pizza) or a German schnitzel for €10–16",
            "14:30 — Cross the Hohenzollern Bridge on foot to the Deutz district on the east bank — the view back across the Rhine to the Cathedral from here is the definitive Cologne photograph; completely free",
            "16:00 — Cologne Triangle tower observation deck (€5, 29th floor) in Deutz — the best panoramic view of the Cathedral and the Rhine from the east bank; less known than the Cathedral tower but arguably better composition",
            "18:00 — Return across the bridge; explore the Belgisches Viertel (Belgian Quarter) neighbourhood for dinner — the trendiest district in Cologne with independent restaurants; PLN 20–35 for a full meal",
          ],
          cost: "€40–60 (Chocolate Museum, tower, food)",
        },
        {
          day: "Day 3",
          title: "Romano-Germanic Museum & Belgian Quarter",
          items: [
            "09:30 — Romano-Germanic Museum (currently in partial relocation to temporary spaces; check cologne-tourism.com for current access — the permanent collection includes the Dionysus Mosaic from 220 AD, one of the most extraordinary Roman floor mosaics in existence)",
            "11:00 — Walk through the old Roman city boundaries — Cologne (Colonia Claudia Ara Agrippinensium) was a major Roman city from 50 AD; plaques and remnants including the Roman city gate (Römischer Turm) survive throughout the Altstadt",
            "13:00 — Lunch at a Belgian Quarter café or restaurant on Brüsseler Platz — the tree-lined square is the social centre of Cologne's creative class; brunch plates and sandwiches from €10–18",
            "15:00 — Kolumba Art Museum (€8) — the Diocese of Cologne's exceptional contemporary art museum built over the ruins of a bombed-out Gothic church; the architecture by Peter Zumthor integrates Roman, medieval, and modern layers into a single, contemplative building",
            "17:00 — Stadtgarten beer garden or evening along the Aachener Straße for a final Kölsch — the Belgian Quarter's independent bar scene is the best in the city after 5pm",
            "19:30 — Final dinner at a Belgisches Viertel restaurant — Cologne's most vibrant dining neighbourhood; Greek, Lebanese, and modern German from €18–30/pp",
          ],
          cost: "€40–60 (museums, food, beer)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€110–160/day",
      days: [
        {
          day: "Day 1",
          title: "Cathedral VIP Access, Altstadt & Fine Kölsch Dinner",
          items: [
            "11:00 — Check in to a 4-star hotel near the Cathedral or Rhine (€90–140/night) — Dom Hotel Cologne directly opposite the Cathedral, or the Hyatt Regency Cologne on the Deutz riverbank with iconic Cathedral views",
            "13:00 — Cologne Cathedral guided tour (€10, 1.5 hours) — a professional guide explains the 600-year construction history, the treasury (separate €6 ticket, includes 12th-century goldsmiths' work), and the 2007 Gerhard Richter south transept window comprising 11,500 individually coloured glass squares",
            "15:00 — Cathedral Treasury (€6) — the oldest continuous ecclesiastical treasury in Germany with Carolingian reliquaries, medieval goldwork, and the staff of St Peter",
            "18:00 — Rhine sunset walk along the Rheingarten promenade — the light on the Cathedral from the river at dusk is extraordinary; wine kiosks along the promenade serve Rhine Riesling from €5/glass",
            "20:00 — Dinner at Hanse Stube at the Excelsior Hotel Ernst — classic Cologne haute cuisine; Rhine salmon with Rhine mustard, venison ragout; PLN 60–90/pp with Rhine Riesling",
          ],
          cost: "€150–180 (hotel, tours, dinner, wine)",
        },
        {
          day: "Day 2",
          title: "Museum Ludwig, Chocolate Museum & Rhine Cruise",
          items: [
            "10:00 — Museum Ludwig (€14) — one of Europe's finest collections of 20th-century art; the largest Picasso collection outside Spain and France, exceptional Pop Art (Warhol, Lichtenstein), and a significant German Expressionist section; allow 2 hours",
            "12:30 — Lunch at a Museum Ludwig café or a Domplatte restaurant — the museum's café has a Cathedral view terrace; lunch €20–30/pp",
            "14:00 — Chocolate Museum private guided tour (€30, includes tasting workshop) — the premium visit includes a guided tour with the chocolatier and a hands-on truffle-making workshop; 1.5 hours, book via chocolate museum website",
            "16:00 — Rhine river cruise (€15, 1 hour) from Cologne Landungsbrücken — the city's riverfront viewed from the water puts the Cathedral into the context of the Rhine's geographical sweep; cruise commentary in German and English",
            "19:30 — Dinner at the Fischers restaurant in the Belgian Quarter — excellent Rhine fish and seasonal German cuisine; €40–55/pp with a bottle of Moselle Riesling",
          ],
          cost: "€130–165 (museums, cruise, dinner, wine)",
        },
        {
          day: "Day 3",
          title: "Roman Cologne, Kolumba & Departure",
          items: [
            "09:30 — Guided Roman Cologne walking tour (€25, 2 hours) — a specialist guide traces the 2,000-year street layout, the preserved Roman sewer tunnels, the city gate, the Praetorium (Roman governor's palace ruins under the town hall), and the Roman glassware tradition that made Cologne famous across the Empire",
            "12:00 — Praetorium Museum in the town hall basement (€6) — the Roman governor's palace ruins are preserved 5 metres below street level; recently expanded with new interpretation of Cologne's Roman period",
            "13:30 — Farewell lunch at a Brauhaus — Gaffel Haus on Alter Markt for a final Sauerbraten and two Kölsch; €25–35/pp",
            "15:30 — Kolumba Art Museum (€8) for a contemplative final hour — the Zumthor building's silence and quality of light make it the perfect final Cologne experience before departure",
          ],
          cost: "€90–120 (tours, museums, farewell lunch)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€260–420/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Hotel Arrival & Private Cathedral Experience",
          items: [
            "12:00 — Private airport transfer to Excelsior Hotel Ernst Cologne (directly opposite the Cathedral since 1863, the oldest luxury hotel in Cologne) or the Marriott on the Rhine — both offer Cathedral-view suites from €350/night",
            "14:00 — Private Cathedral access with the Canon — the Cathedral Chapter occasionally arranges private evening visits to the Cathedral after closing hours (€400–600 through specialist concierge services) including access to the high Gothic choir and treasury under expert ecclesiastical guidance",
            "19:00 — Champagne on the hotel terrace overlooking the Cathedral — the illuminated Dom at night from the Excelsior terrace is one of Germany's finest hotel moments",
            "20:30 — Dinner at Hanse Stube (Excelsior Hotel Ernst) — the most historic fine dining room in Cologne; Rhine salmon en croute, rack of venison with black truffle; 5-course menu €120/pp with Rhineland wine pairing €70/pp additional; reserve 2–3 weeks ahead",
          ],
          cost: "€380–520 (hotel, private cathedral, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Museum Access, Rhine & Chocolate Workshop",
          items: [
            "09:30 — Museum Ludwig private curator tour (€200, 1.5 hours before public opening) — the curator leads a focused tour of the Picasso collection and German Expressionist highlights; access to the study collection and conservation department",
            "12:00 — Private Rhine sailing tour on a historic Rhineland sailing vessel (€300–500/group, 2 hours) — a captain with Rhine navigation history expertise sails from the Cologne waterfront downstream and back; catered lunch on board with Rhine Riesling",
            "15:00 — Master chocolatier private workshop at the Chocolate Museum (€120/person, 2 hours) — design and hand-craft your own chocolate bar with the museum's head chocolatier; take home a box of your creations",
            "20:00 — Dinner at La Société (one of Cologne's finest contemporary French restaurants) — seasonal tasting menu €90/pp with Burgundy wine pairing €75/pp; the intimate 30-seat room is one of the best dining experiences in the Rhine cities",
          ],
          cost: "€380–520 (private museum, Rhine boat, workshop, dinner)",
        },
        {
          day: "Day 3",
          title: "Roman Cologne Archaeology & Farewell",
          items: [
            "09:00 — Private archaeological tour of Roman Cologne with a university archaeologist (€300, 3 hours) — access to the Roman sewer system below the Old Town, the Praetorium excavation before opening hours, and the Roman glass collection at the museum; rare access to parts of the 2,000-year-old city not open to the public",
            "12:30 — Farewell lunch at Im Stapelhäuschen — one of Cologne's oldest restaurants in a 700-year-old building overlooking the Rhine; Rhine trout and a bottle of Mosel Riesling Spätlese; €80–110/pp",
            "15:00 — Afternoon at the Kolumba Art Museum (€8) and a final walk around the Cathedral — private transfer to Cologne Bonn Airport in the evening",
          ],
          cost: "€360–480 (private archaeology, farewell lunch, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18–28 (hostel dorm, Meininger or Wombats)",
      food: "€15–25 (Brauhaus Kölsch, kebab stalls)",
      transport: "€4–10 (KVB day pass €9)",
      activities: "€10–20 (Cathedral tower, Chocolate Museum)",
      total: "€50–75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90–140 (4-star hotel near Cathedral or Rhine)",
      food: "€35–55 (restaurants, Riesling wine)",
      transport: "€8–15 (taxi + KVB pass)",
      activities: "€30–50 (Museum Ludwig, Cathedral tour, Rhine cruise)",
      total: "€110–160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–500 (Excelsior Hotel Ernst, Marriott Rhine)",
      food: "€100–180 (fine dining, Michelin cuisine)",
      transport: "€50–100 (private transfers)",
      activities: "€100–200 (private tours, exclusive access)",
      total: "€260–420+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€12–18 (hostel dorm)",
      food: "€8–14 (döner, supermarket, Brauhaus happy hour)",
      transport: "€2–5 (walking + single KVB tickets)",
      activities: "€3–10 (Cathedral free, free promenades)",
      total: "€28–48/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€85–160 (apartment near Belgian Quarter)",
      food: "€40–70 (restaurants and supermarket mix)",
      transport: "€12–20 (KVB family day pass)",
      activities: "€40–80 (Chocolate Museum, Cathedral tower, Rhine cruise)",
      total: "€100–160/day",
    },
  ],
  mistakes: [
    {
      icon: "⛪",
      title: "Queueing for the Cathedral without a plan",
      desc: "The Cathedral interior is free and usually walkable without a queue — simply enter at opening (6am weekdays, 7am weekends). The tower climb (€6) has queues after 11am in summer. Go first thing in the morning for both. The treasury has almost no queue at any time and is underrated.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍫",
      title: "Visiting the Chocolate Museum without booking in summer",
      desc: "The Schokoladenmuseum sells out timed entry tickets on summer weekends and school holiday periods. Book at least 3 days ahead at schokoladenmuseum.de. Arriving without a booking means a 45-minute queue and possible sell-out. Also: the chocolate fountain closes if too busy.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍺",
      title: "Ordering anything other than Kölsch in a Brauhaus",
      desc: "In a traditional Cologne Brauhaus, ordering a non-Kölsch beer (especially Düsseldorf's Altbier) is considered a mild social transgression. Kölsch is the local religion and every glass is different — there are 12 official Kölsch breweries. The Köbes (waiter) will keep refilling until you cover your glass.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌉",
      title: "Not crossing the Hohenzollern Bridge on foot",
      desc: "The most famous Cologne photograph is shot from the east bank of the Rhine with the Cathedral behind the Hohenzollern Bridge. You must cross the bridge on foot (10 minutes) and walk 100m along the east bank to find the perfect vantage point. Many visitors only see the bridge from the west bank and miss the definitive image.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎭",
      title: "Visiting during Carnival without preparing",
      desc: "Cologne Carnival (Karneval) runs the week before Ash Wednesday (January–February) and transforms the city into Europe's largest street party with 1 million people in costume. Hotels book out months ahead at 3x normal prices. If you plan to attend, book accommodation 4–5 months in advance. If you do not want Carnival, avoid the city entirely in that week.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🏛️",
      title: "The Cathedral is best at 6am and illuminated at night",
      desc: "The Cathedral opens at 6am on weekdays (7am weekends) and is empty for the first hour — just you and 700 years of Gothic stonework. Come back after dark to see it illuminated from the Rhine promenade. The Cathedral closes for services several times daily so check the schedule at koelner-dom.de. Book Cathedral tours and Cologne experiences at https://www.getyourguide.com/s/?q=Cologne&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍷",
      title: "Rhine Riesling is the perfect Cologne wine",
      desc: "Cologne sits at the centre of the Rhine wine region. Kölsch is the beer of choice but at restaurants, order a Moselle or Rhine Riesling (Spätlese or Auslese) — the crisp, off-dry German whites pair perfectly with Cologne's pork-heavy cuisine and are far cheaper than in other European cities. A bottle starts at €18–25 in restaurants.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚇",
      title: "Buy the KVB day pass for all trams and U-Bahn",
      desc: "The KVB day pass (€9) covers all trams and underground lines within Cologne. Single tickets are €3.10 — if you make more than 3 trips, the day pass saves money. The tram network is excellent and most tourist sights are within a 15-minute walk of each other in the compact Altstadt, making walking more useful than transit for the centre.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎊",
      title: "Cologne Carnival is worth planning an entire trip around",
      desc: "The Cologne Karneval (the Rhineland version of Mardi Gras) is genuinely one of Europe's most spectacular events. The Women's Carnival on the Thursday before Ash Wednesday is unique — women rule the streets and cut off men's ties with scissors. The Rose Monday parade on Monday draws 1.5 million spectators. Book everything months ahead.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Cologne worth 3 days or is it better as a day trip from Amsterdam or Brussels?",
      a: "Cologne absolutely rewards 3 days. The Cathedral alone takes a full morning to explore properly (interior, tower, treasury). The Chocolate Museum, Museum Ludwig, Rhine promenade, and Brauhaus evenings fill two more days comfortably. As a day trip from Amsterdam (2.5 hours by ICE train) or Brussels (1.5 hours), you can only see the Cathedral and Rhine, which means missing the city's real character. For a first visit, 2 nights minimum is recommended.",
    },
    {
      q: "What is Kölsch beer and why is it served in small glasses?",
      a: "Kölsch is a light, clear, top-fermented beer unique to Cologne — European law (a geographical indication) means it can only be brewed within the Cologne city limits. It is served in 200ml cylindrical glasses called Stangen because it oxidises quickly and needs to be consumed fresh. The small glass keeps it cold and fizzy. The Köbes (waiter) replaces each empty glass automatically; place your beer mat on top when you want to stop. Prices are €2–2.50 per glass.",
    },
    {
      q: "How do I get from Cologne Bonn Airport (CGN) to the city centre?",
      a: "The S13 S-Bahn train runs from the airport to Cologne Hauptbahnhof every 20 minutes, takes 15 minutes, and costs €3.10 with a single ticket or is free with the KVB day pass. A taxi costs €25–35 and takes 20–30 minutes. Cologne is also served by Düsseldorf Airport (DUS, 45 minutes by train, €15) which has more international connections.",
    },
    {
      q: "When is Cologne Carnival and how do I attend?",
      a: "Cologne Carnival officially begins on 11 November at 11:11am but the main festivities are the week before Ash Wednesday (January or February depending on Easter). Key dates: Weiberfastnacht (Women's Thursday), Rosenmontag (Rose Monday parade, 8km route through the city), and Veilchendienstag (Shrove Tuesday). Costumes are expected — wearing street clothes in the Altstadt during Carnival marks you as a tourist. Book hotels 4–5 months in advance; prices triple during Carnival week.",
    },
  ],
  combineWith: ["amsterdam-4-days", "brussels-3-days", "berlin-4-days"],
  relatedSlugs: ["amsterdam-4-days", "berlin-4-days", "hamburg-3-days", "brussels-3-days"],
  galleryQuery: "cologne cathedral rhine germany gothic architecture",
};

export const metadata: Metadata = {
  title: "Cologne in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Cologne itinerary — Cologne Cathedral, Rhine promenade, Kölsch beer halls, Chocolate Museum, Carnival culture, and Roman history. Budget €50/day to luxury grand hotels. All visa info included.",
  keywords: [
    "Cologne itinerary",
    "Cologne 3 days",
    "Cologne travel guide 2026",
    "Cologne Cathedral",
    "Kölsch beer Cologne",
    "Cologne Chocolate Museum",
    "Cologne Carnival",
    "Cologne visa Indian passport",
  ],
  openGraph: {
    title: "Cologne in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Cologne Cathedral, Rhine promenade, Kölsch beer halls, Chocolate Museum, Carnival culture, and Roman history — Cologne in 3 days from €50/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/cologne-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cologne in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Cologne Cathedral, Rhine promenade, Kölsch beer halls, Chocolate Museum — Cologne in 3 days from €50/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/cologne-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cologne in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Cologne in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/cologne-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cologne",
      description:
        "Cologne, Germany — home to Europe's most visited Gothic cathedral, the UNESCO Rhine valley, Kölsch beer culture, the Chocolate Museum, and legendary Carnival celebrations.",
      geo: { "@type": "GeoCoordinates", latitude: 50.9333, longitude: 6.9500 },
    },
  ],
};

export default function ColognePage() {
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
