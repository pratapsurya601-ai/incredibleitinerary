import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Munich 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan the perfect 3 days in Munich with our complete 2026 guide — Oktoberfest, Marienplatz, Neuschwanstein day trip, beer gardens, and budgets from €65/day.",
  keywords: [
    "Munich 3 days itinerary",
    "Munich travel guide 2026",
    "Oktoberfest Munich",
    "Neuschwanstein day trip from Munich",
    "Munich beer garden",
    "Marienplatz Munich",
    "Bavaria Germany travel",
    "Munich budget guide",
  ],
  openGraph: {
    title: "Munich 3-Day Itinerary 2026: Trip Planner",
    description:
      "Beer halls, baroque palaces, and Bavarian Alps day trips — your ultimate 3-day Munich itinerary from €65/day to luxury.",
    url: "https://incredibleitinerary.com/blog/munich-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-01-10T08:00:00Z",
    modifiedTime: "2026-04-05T08:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Munich Marienplatz with Glockenspiel tower and New Town Hall Bavaria Germany",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munich 3-Day Itinerary 2026: Trip Planner",
    description:
      "Beer halls, baroque palaces, and Bavarian Alps day trips — your ultimate 3-day Munich itinerary from €65/day to luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/munich-3-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Munich in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Plan the perfect 3 days in Munich — Oktoberfest, Marienplatz, Neuschwanstein, beer gardens, and budgets from €65/day.",
    image: "https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=1200&q=80",
    datePublished: "2026-01-10T08:00:00Z",
    dateModified: "2026-04-05T08:00:00Z",
    author: { "@type": "Organization", name: "IncredibleItinerary" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/munich-3-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Munich 3-Day Guide", item: "https://incredibleitinerary.com/blog/munich-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Munich",
    description: "Bavaria's capital city, famous for Oktoberfest, Marienplatz, the English Garden, and proximity to Neuschwanstein Castle.",
    url: "https://incredibleitinerary.com/blog/munich-3-days",
    touristType: ["Cultural tourists", "Beer enthusiasts", "History lovers", "Architecture fans"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.1351,
      longitude: 11.582,
    },
    containedInPlace: {
      "@type": "Country",
      name: "Germany",
    },
  },
];

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Munich",
  country: "Germany",
  countryFlag: "🇩🇪",
  slug: "munich-3-days",
  heroQuery: "munich marienplatz glockenspiel beer garden bavaria germany",
  heroAlt: "Munich Marienplatz with Glockenspiel tower and New Town Hall Bavaria Germany",
  category: "Europe",
  date: "January 10, 2026",
  readTime: "14 min read",

  intro:
    "Munich hosts the world's greatest beer festival in a city that has been brewing since 1589 — pretzels the size of your head alongside weisswurst sausages and sweet mustard at 9am (that's breakfast here, and it's officially encouraged), Neuschwanstein Castle rising from the Bavarian Alps like a Disney fairytale just two hours away, and an English Garden larger than New York's Central Park where surfers ride a permanent standing wave in the middle of the city. Bavaria's remarkable capital rewards visitors who dig beyond the beer steins.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€65",
    bestMonths: "Sep–Oct (Oktoberfest) or Apr–Aug",
    airport: "MUC (Franz Josef Strauss)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
    { id: "tours", emoji: "🎟️", label: "Tours & Activities" },
    { id: "combine", emoji: "✈️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Schengen visa (Category C) via German consulate or VFS Global"],
        ["Fee", "€80 per adult (€40 under 12)"],
        ["Processing", "15–30 business days; apply 3 months before travel"],
        ["Duration", "Up to 90 days within any 180-day Schengen period"],
        ["Documents", "Bank statements, hotel bookings, return ticket, travel insurance"],
        ["Tip", "Munich consulate popular — book VFS appointment early, especially pre-Oktoberfest"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺",
      title: "US / UK / EU / AU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required", "No visa — Schengen zone free access"],
        ["ETIAS (mid-2025+)", "€7 travel authorisation required from 2025 onward"],
        ["Duration", "90 days in any 180-day period across Schengen zone"],
        ["Passport Validity", "Must be valid at least 3 months beyond your return date"],
        ["Entry", "EU/EEA citizens: EU lane. Others: present at border control"],
        ["Tip", "Register ETIAS at etias.com before departure once the system is live"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "€65/day",
      days: [
        {
          day: "Day 1",
          title: "Marienplatz, Viktualienmarkt & the Old Town Core",
          items: [
            "Start with the classic Bavarian breakfast — weisswurst, pretzel and sweet mustard at Marienplatz (under €8 at the market stalls)",
            "Watch the Glockenspiel carillon chime at 11am from the New Town Hall tower — arrive 15 min early for a good spot",
            "Explore the Viktualienmarkt outdoor food market: sample smoked cheeses, Obatzda (Bavarian cheese dip) and fresh radishes for lunch (€6–8)",
            "Walk to Peterskirche (St Peter's Church) — climb the tower for panoramic rooftop views of Munich (€5)",
            "Afternoon: wander the pedestrian Kaufingerstrasse and Neuhauser Strasse shopping streets, free to explore",
            "Evening: head to the Hofbräuhaus beer hall — get the half-litre Masskrug of lager (€5) and pork knuckle (€15)",
            "Night: walk along the Isar River banks or the illuminated Marienplatz",
          ],
          cost: "€45–55",
        },
        {
          day: "Day 2",
          title: "English Garden, Nymphenburg Palace & Beer Gardens",
          items: [
            "Morning: cycle or walk through the Englischer Garten (English Garden) — free entry, 3.7km²",
            "Watch the Eisbach river surfers at the Eisbach wave near the museum quarter — one of Europe's most surprising urban sights",
            "Chinese Tower (Chinesischer Turm) beer garden: order half a litre and a pretzel for under €8, sit on the communal benches",
            "Afternoon: take the U1 subway west to Nymphenburg Palace (€8 entry) — explore the baroque gardens for free",
            "Visit the Amalienburg hunting lodge inside the palace grounds — ornate rococo interiors",
            "Evening: supermarket dinner (Aldi or Rewe) or cheap döner kebab near the Hauptbahnhof (€5–7)",
          ],
          cost: "€35–45",
        },
        {
          day: "Day 3",
          title: "Dachau Memorial & Bavarian Day",
          items: [
            "Morning: take the S2 S-Bahn to Dachau Memorial (entry free, €7 combined transport ticket) — allow 3–4 hours for this profound historical site",
            "Return to Munich and visit the BMW Museum exterior and Olympic Park area (park free; museum €10)",
            "Afternoon: explore Schwabing neighbourhood — bohemian cafes, street art, independent bookshops",
            "Augustiner Keller beer garden in Schwabing for late afternoon — Munich's oldest beer garden brand",
            "Evening: farewell dinner at a traditional Bavarian restaurant in the old town — try Schweinshaxe (roast pork knuckle) with Knödel (dumplings)",
          ],
          cost: "€40–50",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€140/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Deep Dive + Hofbräuhaus Dinner",
          items: [
            "Breakfast at Café Luitpold — Munich's grand historic coffee house, coffee and Apfelstrudel (€12)",
            "New Town Hall tower elevator for aerial views over Marienplatz (€7.50)",
            "Glockenspiel private guided walking tour of the Altstadt — context turns architecture into stories (€25pp)",
            "Lunch at Viktualienmarkt's Augustiner stand — the real deal from a traditional brewer",
            "Afternoon: Residenz Museum — the former royal palace of the Wittelsbach dynasty with 130 rooms (€9)",
            "Residenz Treasury (Schatzkammer): Bavarian Crown Jewels and royal regalia (€9 combined)",
            "Hofbräuhaus dinner — sit in the main hall, litre stein, full Bavarian menu with live brass band music (€35)",
          ],
          cost: "€120–145",
        },
        {
          day: "Day 2",
          title: "Neuschwanstein Castle Day Trip",
          items: [
            "7am train from Munich Hauptbahnhof to Füssen (€27 return, Bavaria ticket covers it cheaply with group)",
            "Bus from Füssen station to Hohenschwangau village (€4 return)",
            "Neuschwanstein Castle timed-entry guided tour (€18) — interior rooms, Throne Room, and Singer's Hall",
            "Marienbrücke bridge walk: the famous Instagram view of the castle over the gorge",
            "Lunch in Hohenschwangau village — Bavarian sausages and local beer",
            "Option: also tour Hohenschwangau Castle (€18) — the yellow castle across the lake, childhood home of Ludwig II",
            "Evening: return to Munich, dinner at Paulaner Keller am Nockherberg — original Paulaner brewery restaurant",
          ],
          cost: "€100–130",
        },
        {
          day: "Day 3",
          title: "Museums, Olympia Park & Farewell",
          items: [
            "Morning: Deutsches Museum (world's largest science and technology museum, €15) — spend 3 hours",
            "Lunch at the museum restaurant or nearby Isartor area cafe",
            "BMW Museum visit (€10) followed by a walk through the striking four-cylinder BMW headquarters tower",
            "Olympia Park: climb the Olympic Tower for 360° views over Munich and the Alps on clear days (€13)",
            "Afternoon beer garden at Taxisgarten or Hirschgarten — Munich's largest beer garden (6,000 seats)",
            "Farewell dinner: Tantris restaurant in Schwabing or Mövenpick Restaurant for elevated Bavarian cuisine (€50–70pp)",
          ],
          cost: "€140–165",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€320/day",
      days: [
        {
          day: "Day 1",
          title: "Private Old Town, Residenz & Fine Bavarian Dining",
          items: [
            "Check in to Hotel Vier Jahreszeiten Kempinski Munich (from €350/night) — opposite the Maximilianstrasse boutiques",
            "Private guide for the Altstadt and Residenz (3hr, €150pp) — exclusive access to rooms not on the public route",
            "Residenz Treasury private viewing with expert art historian commentary",
            "Lunch at Boettner's — Munich's most historic gourmet restaurant (€60pp, open since 1901)",
            "Afternoon spa at the Kempinski — pool, sauna, treatments",
            "Glockenspiel evening: champagne at Dallmayr delicatessen rooftop terrace (by arrangement)",
            "Dinner at Atelier (2 Michelin stars, Hotel Bayerischer Hof) — contemporary Bavarian tasting menu (€180pp)",
          ],
          cost: "€380–450",
        },
        {
          day: "Day 2",
          title: "Private Neuschwanstein + Helicopter + Alpine Lunch",
          items: [
            "Private transfer by Mercedes to Neuschwanstein Castle (2 hours, driver waits)",
            "Priority-access guided castle tour with expert art historian — skip the queues entirely",
            "Helicopter scenic flight over the Bavarian Alps and surrounding lakes (from €250pp, 30 min)",
            "Lunch at Restaurant im Schlosskrug Alpsee, Hohenschwangau — lakeside dining with castle views",
            "Return transfer with stop at Linderhof Palace — the only castle Ludwig II actually completed",
            "Evening at Munich's English Garden: private picnic arranged by the concierge with Bavarian cheeses and premium wine",
            "Night: cocktails at the Mandarin Oriental Munich rooftop bar",
          ],
          cost: "€500–650",
        },
        {
          day: "Day 3",
          title: "Salzburg Private Day Trip, Spa & Gourmet Farewell",
          items: [
            "Private chauffeur to Salzburg, Austria (90 min) — birthplace of Mozart",
            "Private walking tour of Salzburg's UNESCO-listed Altstadt — Getreidegasse, Festung Hohensalzburg fortress",
            "Lunch at Stiftskeller St Peter — one of Europe's oldest restaurants, in Salzburg (€60pp)",
            "Afternoon: Hellbrunn Palace and its trick fountains — unique 17th-century baroque water garden",
            "Return to Munich late afternoon; hotel spa evening treatment",
            "Farewell tasting menu at Schwarzreiter (Hotel Vier Jahreszeiten) — Bavarian haute cuisine with Riesling pairings (€150pp)",
            "Post-dinner: private whisky tasting at the hotel's Rüdesheimer bar",
          ],
          cost: "€400–500",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget",
      accommodation: "€20–30 (hostel dorm, Wombats/Jaeger's)",
      food: "€15–20 (market, self-cater, cheap beer hall)",
      transport: "€9 (day MVV pass)",
      activities: "€10–15 (selective paid sights)",
      total: "€65/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "€70–100 (3-star hotel, Pension)",
      food: "€35–45 (restaurants + one beer hall dinner)",
      transport: "€15–20 (MVV + Neuschwanstein train)",
      activities: "€25–35 (museums + guided tour)",
      total: "€140/day",
    },
    {
      tier: "Luxury",
      accommodation: "€250–400 (Kempinski, Mandarin Oriental)",
      food: "€100–180 (Michelin + fine dining)",
      transport: "€80–150 (private transfers)",
      activities: "€80–120 (private guides, helicopter)",
      total: "€320+/day",
    },
    {
      tier: "Oktoberfest Season",
      accommodation: "€150–300 (prices triple in late Sep)",
      food: "€40–60 (tent food + steins expensive)",
      transport: "€15 (MVV day pass)",
      activities: "€30–50 (tent entry, optional)",
      total: "€200–400/day",
    },
    {
      tier: "Day Trip Only",
      accommodation: "—",
      food: "€20–30 (packed lunch + one meal)",
      transport: "€27 Bavaria Ticket (train to Neuschwanstein)",
      activities: "€18–36 (castle entry)",
      total: "€65–90 day",
    },
  ],

  mistakes: [
    {
      icon: "⏰",
      title: "Not Booking Neuschwanstein in Advance",
      desc: "Neuschwanstein Castle sells out weeks ahead in summer. Walk-ups frequently sell out by 10am. Book timed-entry tickets at hohenschwangau.de the moment your dates are confirmed — slots go fast from March onward.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🍺",
      title: "Confusing the Hofbräuhaus with Munich's Best Beer",
      desc: "The Hofbräuhaus is touristy and fine, but locals drink at Augustiner-Keller, Zum Franziskaner, or the English Garden beer gardens. For authentic Munich beer culture, go where the Münchner go — you'll pay less and enjoy it more.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "📅",
      title: "Visiting During Oktoberfest Without Booking a Year Ahead",
      desc: "Oktoberfest (last two weeks of September into early October) is one of the world's most popular events. Hotel prices triple or quadruple. Beer tent tables inside the main tents require reservations often made a year in advance through the brewery websites. Plan or avoid.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🚆",
      title: "Buying Single Metro Tickets Instead of Day Passes",
      desc: "Munich's MVV network sells single tickets (€3.90+) that add up quickly. An MVV day pass (Tageskarte) costs €9.60 for the inner zone and covers unlimited S-Bahn, U-Bahn, tram and bus travel. The Bayern Ticket (€29 for one person, €6 each extra) covers all of Bavaria by train.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🍽️",
      title: "Skipping the Weisswurst Breakfast",
      desc: "Weisswurst — white veal sausages in hot water — is served only until noon in Munich and eaten exclusively at breakfast. Missing this ritual is missing a piece of Bavaria's soul. Order with sweet mustard, a pretzel, and a Weissbier (yes, beer before noon — this is correct in Munich).",
      color: "border-blue-200 bg-blue-50",
    },
  ],

  tips: [
    {
      icon: "🎟️",
      title: "The Bayern Ticket Is a Secret Weapon",
      desc: "At €29 for one person (€6 per additional person up to 5), the Bayern Ticket covers all regional train travel across Bavaria for one day including to Neuschwanstein, Salzburg, Nuremberg, and Regensburg. Buy it at MVV ticket machines. Group travellers get extraordinary value.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🏔️",
      title: "Combine Neuschwanstein With Linderhof on One Day",
      desc: "With a private car or organised tour, you can visit both Neuschwanstein and Linderhof Palace on one long day trip — they're in the same area of the Allgäu. The Bavaria Royal Ticket covers both. Linderhof is the only castle Ludwig II completed and lived in personally.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🌅",
      title: "The English Garden Is Best at Dawn or Dusk",
      desc: "The Englischer Garten is Munich's green soul. At dawn, Japanese Garden visitors meditate by the pagoda; at dusk, dog-walkers and cyclists fill the paths. The Eisbach surfers perform year-round — even in December. The Chinese Tower beer garden opens from 11am daily (weather permitting).",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "💳",
      title: "Book GetYourGuide Tours to Skip Lines at Peak Season",
      desc: "In Oktoberfest season and summer, queues at Residenz, BMW Museum and the tower elevator are significant. Pre-booking through GetYourGuide locks in timed entry and often includes knowledgeable local guides who transform what you see.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  faqs: [
    {
      q: "Is Munich expensive compared to other German cities?",
      a: "Munich is Germany's most expensive city, with accommodation and restaurant prices higher than Berlin, Hamburg or Cologne. That said, the city offers genuine budget options — hostel dorms from €22, market lunches under €8, and many free attractions (English Garden, Marienplatz, Dachau memorial). Budget travellers can absolutely enjoy Munich on €65/day with smart choices.",
    },
    {
      q: "How far is Neuschwanstein Castle from Munich and how do I get there?",
      a: "Neuschwanstein is approximately 130km southwest of Munich — around 2 hours by regional train (change at Kaufbeuren or Buchloe to Füssen), then a short bus ride to Hohenschwangau. The Bavaria Ticket (€29 per person) covers the entire train journey. Day tours from Munich are also widely available and convenient for first-timers.",
    },
    {
      q: "When is Oktoberfest and do I need tickets?",
      a: "Oktoberfest runs from the third Saturday in September to the first Sunday in October (approximately September 20 – October 5, 2026). Entry to the festival grounds is free. However, sitting inside the main beer tents requires a reserved table — these are allocated by the brewery tent operators, often a full year in advance. Unreserved standing room at the tent entrances is possible but crowded. Book accommodation 6–12 months ahead.",
    },
    {
      q: "Is Munich safe for solo travellers?",
      a: "Munich is one of Europe's safest cities with very low violent crime rates. The main areas of caution are standard: watch for pickpockets near Marienplatz, on the U-Bahn, and especially at Oktoberfest when large crowds and heavy drinking create ideal conditions for theft. Use secure bag straps and keep cards in a money belt at the festival.",
    },
  ],

  combineWith: ["salzburg-2-days", "vienna-4-days", "prague-4-days", "berlin-4-days"],
  relatedSlugs: ["berlin-4-days", "vienna-4-days", "prague-4-days", "amsterdam-3-days"],
  galleryQuery: "munich bavaria marienplatz nymphenburg english garden beer hall",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function MunichPage() {
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
