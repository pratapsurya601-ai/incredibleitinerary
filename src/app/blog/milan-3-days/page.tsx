import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Milan in 3 Days: The Complete Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Everything you need for 3 days in Milan — the Duomo, Leonardo's Last Supper, Galleria Vittorio Emanuele II, Navigli canals and day trips to Lake Como and Verona. Budget €65/day to luxury €350/day itineraries.",
  keywords: [
    "Milan 3 days itinerary",
    "Milan travel guide 2026",
    "Milan Duomo",
    "Last Supper Milan",
    "Galleria Vittorio Emanuele II",
    "Lake Como day trip",
    "Milan budget travel",
    "Milan luxury travel",
  ],
  openGraph: {
    title: "Milan in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    description:
      "Duomo rooftop walks, Leonardo's Last Supper, Navigli aperitivo hour, and a day trip to Lake Como — the definitive 3-day Milan itinerary.",
    url: "https://incredibleitinerary.com/blog/milan-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Milan Duomo Cathedral with Galleria Vittorio Emanuele II arcade Italy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    description:
      "Duomo rooftop walks, Leonardo's Last Supper, Navigli aperitivo hour, and a day trip to Lake Como.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/milan-3-days",
  },
};

/* ── JSON-LD ───────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/milan-3-days#article",
      headline: "Milan in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "Everything you need for 3 perfect days in Milan — the Duomo, Leonardo's Last Supper, Galleria Vittorio Emanuele II, Navigli canals, and day trips to Lake Como and Verona.",
      image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1200&q=80",
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/milan-3-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Milan 3 Days", item: "https://incredibleitinerary.com/blog/milan-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Milan",
      description:
        "Milan is Italy's capital of fashion, finance, and culture — home to the Duomo Cathedral, Leonardo da Vinci's Last Supper, and the world-famous Galleria Vittorio Emanuele II.",
      geo: { "@type": "GeoCoordinates", latitude: 45.4654219, longitude: 9.1859243 },
      touristType: ["Cultural tourists", "Fashion travelers", "Art lovers", "Foodies"],
      hasMap: "https://maps.google.com/?q=Milan,Italy",
    },
  ],
};

/* ── Page data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Milan",
  country: "Italy",
  countryFlag: "🇮🇹",
  slug: "milan-3-days",
  heroQuery: "milan duomo cathedral italy fashion galleria vittorio emanuele",
  heroAlt: "Milan Duomo Cathedral with Galleria Vittorio Emanuele II arcade Italy",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",

  intro:
    "The world's fashion capital where even the pigeons look well-dressed, the Duomo Cathedral so encrusted with 3,500 statues you could spend a week studying the facade, Leonardo da Vinci's Last Supper painted on a refectory wall that survived a WWII bomb that destroyed the building around it, and a Galleria shopping arcade so ornate it has its own good-luck ritual involving a mosaic bull's testicle — Milan is Italy's capital of everything modern, and there is nowhere else quite like it on Earth.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€65",
    bestMonths: "Apr–Jun or Sep–Oct",
    airport: "MXP (Malpensa) or LIN (Linate)",
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
    { id: "daytrips",    emoji: "🚂", label: "Day Trips" },
    { id: "food",        emoji: "🍽️", label: "Food & Drink" },
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
        ["Tip",         "Apply 6–8 weeks before travel; book non-refundable tickets only after visa approval"],
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
        ["ETIAS",       "ETIAS travel authorisation required from mid-2025 — €7, valid 3 years"],
        ["Passport",    "Must be valid for at least 3 months beyond your departure date"],
        ["Entry check", "Border officers may ask for proof of funds and return ticket"],
        ["UK post-Brexit", "Visa-free but ETIAS required; 90-day Schengen limit applies"],
        ["Tip",         "Register for ETIAS online before travel — takes 10 minutes"],
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
          title: "Duomo, Galleria & Castello",
          items: [
            "Morning: Arrive at Duomo piazza — the Gothic façade with 3,500 statues is free to admire from outside; pre-book rooftop tickets online for €14 (budget: skip rooftop, visit facade only)",
            "Walk through Galleria Vittorio Emanuele II — spin on the bull mosaic for good luck; window-shop the most ornate shopping arcade in the world",
            "Lunch: Panzerotto (fried dough pocket) from Luini bakery near Duomo — €3, the best street food in Milan",
            "Afternoon: Castello Sforzesco — free to enter the grounds and exterior; the courtyard alone is stunning",
            "Inside the Castello: Pinacoteca del Castello costs €5; Michelangelo's unfinished Pietà Rondanini is here",
            "Evening: Stroll Parco Sempione behind the castle — Milan's central park, free",
            "Dinner: €12 pizza near Brera — search for student-area trattorie for honest portions at low prices",
          ],
          cost: "€25–35",
        },
        {
          day: "Day 2",
          title: "Last Supper & Navigli",
          items: [
            "Morning: Leonardo's Last Supper at Santa Maria delle Grazie — must book 2 months ahead (€18 entry + €2 booking fee); visit is 15 minutes per slot — worth every minute",
            "If Last Supper is sold out: visit the Museo Nazionale della Scienza e della Tecnologia (€10) with Leonardo's engineering drawings",
            "Lunch: Packed lunch or mercato sandwich — keep costs under €7",
            "Afternoon: Pinacoteca di Brera (€15) — Milan's finest art museum, Raphael and Caravaggio among the highlights; free first Sunday of each month",
            "Late afternoon: Walk through Brera neighbourhood — cobblestone streets, independent bookshops, genuine neighbourhood feel",
            "Aperitivo hour at 6 pm in Navigli canal district — most bars charge €8–10 for a drink and include a generous free buffet (this is the Milan tradition)",
            "Stroll along Naviglio Grande and Naviglio Pavese — the only remaining canals from Leonardo's era",
          ],
          cost: "€35–45",
        },
        {
          day: "Day 3",
          title: "Fashion District + Lake Como Day Trip",
          items: [
            "Morning: Walk the Quadrilatero della Moda (Golden Rectangle) — Via Montenapoleone, Via della Spiga; window-shopping is free and the displays are performance art",
            "Optional: take train from Milano Centrale to Como (30 min, €5 each way) or Bellagio (1 hr by ferry from Como)",
            "At Lake Como: walk the waterfront promenade, take the funicular up for views, eat gelato by the water",
            "Or stay in Milan: visit Fondazione Prada (€15) for world-class contemporary art in a converted distillery",
            "Evening: Aperitivo in Porta Venezia neighbourhood — more local and less touristy than Navigli",
            "Return dinner: Risotto alla Milanese (bone marrow and saffron risotto) — the city's signature dish; look for a trattoria with a €12–15 set lunch menu",
          ],
          cost: "€30–45",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€140/day",
      days: [
        {
          day: "Day 1",
          title: "Duomo Rooftop, Galleria & Sforzesco",
          items: [
            "Morning: Pre-booked Duomo rooftop access (€14 lift or €7 stairs) — walk among the marble spires at eye-level with the Madonnina golden statue; staggering views over Milan",
            "Explore the Duomo interior — intricate stained glass, the largest Gothic interior in Italy",
            "Galleria Vittorio Emanuele II: morning coffee at Camparino (historic café on the piazza); do the bull mosaic spin",
            "Lunch: Ristorante Cracco or similar Galleria dining — €25–35 for pasta and wine in a spectacular setting",
            "Afternoon: Castello Sforzesco — pay to enter the Pinacoteca (€5) and see the Michelangelo Pietà Rondanini; also the Egyptian Museum section",
            "Evening: Aperitivo at a rooftop bar — Terrazza Aperol near the Duomo offers great views; drink €15 includes snacks",
            "Dinner: Osteria del Binari or similar trattoria in Navigli — €35–45 for cotoletta alla Milanese and carafe of wine",
          ],
          cost: "€80–100",
        },
        {
          day: "Day 2",
          title: "Last Supper, Brera & Navigli",
          items: [
            "Morning (8 am slot): Leonardo's Last Supper — the pre-booked morning slot has the best light; stand in silence and let the 8 metres of composition work on you",
            "Visit Santa Maria delle Grazie church exterior and cloisters — included with Last Supper ticket",
            "Late morning: Pinacoteca di Brera (€15) — Raphael's Sposalizio della Vergine, Caravaggio's Supper at Emmaus; take 2 hours minimum",
            "Lunch: Trattoria da Ilia or similar Brera restaurant — €20–25 for proper Milanese cuisine",
            "Afternoon: Explore Brera neighbourhood and browse the antique and art gallery streets",
            "Late afternoon: Fondazione Prada (€15) — Rem Koolhaas-designed contemporary art campus, bar designed by Wes Anderson",
            "Evening: Navigli canal aperitivo then dinner — budget €40–50 for a full meal with wine at a canal-side restaurant",
          ],
          cost: "€100–130",
        },
        {
          day: "Day 3",
          title: "Lake Como Full Day",
          items: [
            "Train from Milano Centrale to Varenna (1 hr, €8 each way) — the most beautiful village on Lake Como",
            "Walk the Passeggiata degli Innamorati (Lovers' Walk) — lakeside path cut into the cliff face",
            "Take the car ferry to Bellagio (15 min, €5) — the jewel of Lake Como; walk up to Villa Serbelloni gardens (€10)",
            "Lunch in Bellagio — lakeside restaurant, fresh lake perch or risotto, €25–30",
            "Afternoon: Ferries connect to Como town — walk the walled waterfront, catch the funicular up to Brunate for panoramic Alps views",
            "Return to Milan by 7 pm — freshen up and dinner near your hotel",
            "Last dinner: Risotto alla Milanese and panettone dessert at a proper Milanese ristorante — €45–55 with wine",
          ],
          cost: "€80–100",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€350/day",
      days: [
        {
          day: "Day 1",
          title: "Private Milan: Duomo, Fashion & Fine Dining",
          items: [
            "Private guide for Duomo rooftop and interior (3 hours, €150–200) — skip the queues, hear the full history of the 600-year construction",
            "Guided walk through Galleria Vittorio Emanuele II with stories behind each mosaic and the original 1867 architecture",
            "Lunch: Il Luogo di Aimo e Nadia or Seta (two Michelin stars) — expect €80–120 per person for tasting menu",
            "Afternoon: Personal shopping session in Quadrilatero della Moda — concierge-arranged appointments at Prada, Valentino, Versace",
            "Pre-dinner: Cocktails at Bulgari Hotel rooftop garden — the most elegant bar in Milan",
            "Dinner: Enrico Bartolini al Mudec (3 Michelin stars) — Italy's most decorated chef; 7-course tasting menu €180+ with wine pairing",
            "Stay: Mandarin Oriental Milan or Four Seasons — both in converted 15th-century convents",
          ],
          cost: "€300–450",
        },
        {
          day: "Day 2",
          title: "Last Supper Private + Castello + La Scala",
          items: [
            "VIP Last Supper access — exclusive early morning slot before public opening, private guide explaining every apostle's reaction and Leonardo's sfumato technique",
            "Private tour of Castello Sforzesco with curator access — includes the restoration lab where the Pietà Rondanini is being preserved",
            "Lunch: Trattoria Il Matarel in Brera — historic institution, excellent traditional Milanese food €35–50",
            "Afternoon: Pinacoteca di Brera private guided visit (€80 private guide) then Brera neighbourhood walk",
            "Evening: La Scala opera or ballet — box seats for a performance at the world's most famous opera house; dress code strictly formal",
            "Pre-opera aperitivo: Bar Basso (inventor of the Negroni Sbagliato) — a Milan institution",
            "Post-opera dinner: Cracco in Galleria — celebrity-chef restaurant inside the arcade, €100+ per person",
          ],
          cost: "€350–600",
        },
        {
          day: "Day 3",
          title: "Private Lake Como by Boat",
          items: [
            "Private car transfer to Lake Como (45 min) — skip all public transport",
            "Private boat hire on Lake Como (full day, €400–600) — your own skipper, sail between the villas at your own pace",
            "Villa del Balbianello private garden access (featured in Casino Royale and Star Wars) — €15 entry; spectacular",
            "Lunch on the boat or at a lake-side restaurant in Lenno — fresh lake fish, local Lugana wine",
            "Afternoon: Bellagio by private boat — Villa Serbelloni gardens, the promontory walks, gelato at a waterfront café",
            "Return to Milan by 6 pm",
            "Farewell dinner: Sadler (2 Michelin stars) in Milan — contemporary Italian cuisine in one of the city's most elegant dining rooms; €120+ tasting menu",
          ],
          cost: "€400–700",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–30 (hostel dorm or budget hotel)",
      food: "€15–20 (markets, bakeries, student trattorie)",
      transport: "€5–8 (metro day pass + train to Como)",
      activities: "€10–20 (Duomo exterior free, selective museums)",
      total: "€65/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€80–120 (3-star central hotel)",
      food: "€40–55 (sit-down lunches, canal aperitivo, trattoria dinners)",
      transport: "€10–15 (metro + regional trains)",
      activities: "€25–40 (Last Supper, Brera, Prada Foundation)",
      total: "€140/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–450 (5-star design hotel)",
      food: "€100–180 (Michelin-starred restaurants, wine pairing)",
      transport: "€40–80 (private transfers, boat hire on Lake Como)",
      activities: "€80–150 (private guides, La Scala box, VIP access)",
      total: "€350/day",
    },
    {
      tier: "🎓 Student",
      accommodation: "€18–25 (hostel)",
      food: "€10–15 (panzerotti, aperitivo buffet dinners, supermarket)",
      transport: "€4–6 (metro day pass)",
      activities: "€5–15 (free museums on Sundays, Castello grounds)",
      total: "€45/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€120–180 (apartment rental)",
      food: "€60–80 (mix of self-catering and restaurants)",
      transport: "€20–25 (metro + day trip train)",
      activities: "€40–60 (Duomo rooftop, Castello, science museum)",
      total: "€160/day",
    },
  ],

  mistakes: [
    {
      icon: "🕐",
      title: "Not booking the Last Supper months in advance",
      desc: "Leonardo's Last Supper books out 2–3 months ahead. If you haven't booked before you land in Milan, you will not see it. Check getyourguide.com or the official vivaticket.com website — set a reminder and book the day tickets open.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚌",
      title: "Taking a taxi from Malpensa instead of the Malpensa Express",
      desc: "Taxis from MXP airport cost €90–100. The Malpensa Express train takes 40 minutes and costs €13. Runs every 30 minutes from the terminal directly to Milano Centrale and Cadorna. It's faster and a tenth of the price.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "👗",
      title: "Wearing shorts to the Duomo or Last Supper",
      desc: "Both the Duomo and Santa Maria delle Grazie (Last Supper) enforce a dress code — shoulders and knees covered. Guards will turn you away at the door. Bring a light scarf or buy a €2 sarong from a street vendor near the piazza.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "☕",
      title: "Sitting down at the bar for espresso",
      desc: "In Milan (and all of Italy), espresso at the bar counter is €1.20–1.50. The moment you sit at a table, the price doubles or triples. Stand at the bar, say 'un caffè per favore', drink it in 30 seconds — that's the Milan way.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "📸",
      title: "Skipping Bergamo for a 'better-known' day trip",
      desc: "Lake Como and Verona get all the attention, but Bergamo's Città Alta (upper town) — 45 minutes from Milan — is more authentically medieval and far less crowded. Take the funicular up, walk the Venetian walls, eat polenta and casoncelli pasta.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "🎭",
      title: "Aperitivo = a free dinner",
      desc: "Milan invented the aperitivo hour. Pay €8–12 for a Campari Spritz or Negroni between 6–9 pm at a Navigli or Porta Venezia bar and the buffet included is often substantial enough to be dinner. This is not a tourist trick — it's how Milanese people actually eat on weeknights.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🗺️",
      title: "The metro is excellent and cheap",
      desc: "Milan's metro has 4 lines covering every major sight. A single ticket costs €2.20, a daily pass €7.60, a 48-hour pass €13.80. Buy a travel card on the ATM Milano app. Central Milan is also very walkable — the Duomo to Castello is a 20-minute walk.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🏛️",
      title: "Book the Duomo rooftop at sunrise or sunset",
      desc: "The first Duomo rooftop entry slot (9 am) and the last slot (before dusk) have the best light and the fewest people. In peak summer, the midday heat on the marble roof is intense. Morning slots also mean you can see the entire Lombard plain on a clear day.",
      color: "border-gold-200 bg-yellow-50",
    },
    {
      icon: "🚂",
      title: "Day trips are easy from Milan",
      desc: "Milan is the best-connected city in northern Italy. Lake Como (30–60 min), Verona (55 min, €14), Bergamo (45 min, €6), Lake Maggiore (1 hr) and even Venice (2.5 hrs, €30) are all achievable. Buy Trenitalia or Italo tickets online at least 2 days ahead for the best prices.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "How many days do you need in Milan?",
      a: "3 days is ideal for first-timers — enough for the Duomo, Last Supper, Navigli, Brera, and one day trip. If you want to add Lake Como properly (staying overnight), 4–5 days works better. Milan rewards longer stays but doesn't demand them.",
    },
    {
      q: "Is Milan expensive?",
      a: "Milan is Italy's most expensive city, on par with Paris and London for certain things. However, budget travel is very possible — aperitivo buffet dinners, mercato lunches, and free museum days keep costs down. Budget travellers can manage on €60–70/day; mid-range travellers spend €130–150/day.",
    },
    {
      q: "What is the best area to stay in Milan?",
      a: "Brera and Porta Nuova are best for mid-range and luxury — elegant, central, very walkable. Navigli is best for younger travellers and nightlife. Near Stazione Centrale is convenient but less charming. Avoid anything east of the ring road unless you're on a very tight budget.",
    },
    {
      q: "Do I need to tip in Milan restaurants?",
      a: "Tipping is not mandatory in Italy and Milanese people rarely tip. Most bills include 'coperto' (cover charge, €1.50–3) and sometimes 'servizio'. If service was excellent, rounding up or leaving €2–5 on the table is appreciated but never expected.",
    },
  ],

  combineWith: ["lake-como-2-days", "verona-1-day", "venice-3-days", "bergamo-1-day"],
  relatedSlugs: ["rome-4-days", "florence-3-days", "venice-3-days", "amalfi-coast-5-days"],

  galleryQuery: "milan duomo rooftop navigli canal brera fashion district",
};

/* ── Page component ───────────────────────────────────────────────────────── */
export default function MilanPage() {
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
