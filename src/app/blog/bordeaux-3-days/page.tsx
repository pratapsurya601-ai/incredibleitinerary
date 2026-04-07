import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Bordeaux",
  country: "France",
  countryFlag: "🇫🇷",
  slug: "bordeaux-3-days",
  heroQuery: "bordeaux france wine city place de la bourse miroir eau waterfront",
  heroAlt: "Bordeaux Place de la Bourse reflected in the Miroir d'Eau water mirror at sunset",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Bordeaux reinvented itself — from a sleepy port city into one of France's most beautiful urban transformations. The 18th-century golden limestone architecture, the world's largest wine region on its doorstep, La Cité du Vin museum, and a tram system that means you never need a car. Plus the Miroir d'Eau at golden hour is the most photographed reflection in France.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€50",
    bestMonths: "Apr–Jun, Sep–Oct",
    airport: "BOD (Bordeaux-Mérignac)",
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
        ["Schengen Visa", "France is in the Schengen Zone. Apply for a Schengen visa at the French embassy or VFS Global centre. Fee: €80. Processing: 15–45 working days."],
        ["Documents", "Valid passport (3 months beyond stay), bank statements (€100/day minimum), hotel bookings, return tickets, travel insurance (€30,000 minimum coverage), employment letter."],
        ["Duration", "Up to 90 days within 180 days across the entire Schengen area. Days in Spain, Portugal, Italy, or other Schengen countries count toward the same allowance."],
        ["Apply Early", "Apply 6–8 weeks before travel. French consulate appointment slots fill quickly, especially before summer. Book as early as possible."],
      ],
    },
    {
      flag: "🌍",
      title: "EU, USA, UK, Canada, Australia",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "EU citizens move freely. USA, Canada, Australia, and New Zealand get 90 days visa-free within the Schengen area."],
        ["ETIAS (2026)", "Non-EU travellers (USA, UK, AU, CA) will need ETIAS travel authorisation from 2026 — €7, valid 3 years. Apply at etias.eu.int before travel."],
        ["UK Passports", "UK passports are stamped on entry. Passport must be valid for the duration of stay and issued within the last 10 years."],
        ["Tip", "Days in France count toward the 90-day Schengen quota shared with Portugal, Spain, Italy, and all other Schengen countries. If combining with a Spain trip, plan accordingly."],
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
          title: "Place de la Bourse, Marché des Capucins & Old Town",
          items: [
            "7:30am — Place de la Bourse at sunrise — the 18th-century neoclassical façade and the Miroir d'Eau water mirror create the most photographed reflection in France. The water is thinnest and most still at dawn and on calm evenings. Free to visit at all hours",
            "9:00am — Marché des Capucins (the 'belly of Bordeaux') — oysters and a glass of Entre-Deux-Mers white wine at 10am is a genuine Bordeaux Saturday morning tradition. Oysters from €8 a dozen, wine €3–4 a glass. Budget €10–15 for a proper market breakfast",
            "11:00am — Rue Sainte-Catherine — the longest pedestrian shopping street in France (1.2km). Browse independent shops and look up at the golden limestone architecture",
            "12:30pm — Lunch in the Saint-Pierre quarter — the medieval old town is full of small wine bars (caves à manger) serving charcuterie boards and glasses of Bordeaux from €12–18",
            "2:30pm — Grosse Cloche bell tower (free exterior, €3 to climb) — one of the oldest belfries in France, 15th century",
            "5:30pm — Miroir d'Eau at golden hour (return to Place de la Bourse for the evening light — entirely different from the morning shot)",
            "8:00pm — Darwin Ecosystème — a converted military barracks with street art, organic food stalls, craft beer, and evening food trucks. Dinner budget €10–15",
          ],
          cost: "€35–50 total",
        },
        {
          day: "Day 2",
          title: "Saint-Émilion Day Trip",
          items: [
            "8:30am — Regional train from Bordeaux Saint-Jean station to Saint-Émilion (€11 return, 35 min). Trains run roughly every hour",
            "9:15am — Arrive Saint-Émilion — a medieval UNESCO World Heritage village built into limestone cliffs above the vineyards. The entire village is surrounded by grand cru wine estates",
            "9:30am — Wander the cobbled streets: Rue Guadet, Place du Marché, the Collegiate Church cloister. Quietest in the morning before 11am",
            "10:30am — Monolithic Church carved directly from the rock (€8 — the largest monolithic church in Europe, 12th century, carved entirely by hand into the limestone cliff face)",
            "12:00pm — Wine tasting at a château — most estates offer walk-in tasting for €8–15 for 3 wines plus a tour. Château Fonroque and Château Pavie Macquin are accessible; the tourist office has a full list",
            "1:30pm — Lunch in Saint-Émilion with a glass of grand cru — budget restaurants serve two-course menus for €18–22",
            "4:00pm — Last browse of the village wine shops — direct-from-producer pricing beats Bordeaux city by 20–30%",
            "5:00pm — Train back to Bordeaux Saint-Jean (35 min)",
            "7:30pm — Dinner in Bordeaux at a cave à manger (wine bar with small plates): sardines, duck rillettes, cheese, and a half-bottle of Médoc",
          ],
          cost: "€40–55 total including transport",
        },
        {
          day: "Day 3",
          title: "La Cité du Vin, Chartrons & Farewell Dinner",
          items: [
            "9:30am — La Cité du Vin (€22, open from 9:30am) — the world's best wine museum and an architectural landmark designed to resemble wine swirling in a glass. The permanent exhibition takes 2–3 hours; one glass of wine from the global selection is included in the ticket at the Belvédère panoramic tasting bar on the 8th floor",
            "1:00pm — Lunch in Chartrons quarter — Bordeaux's historic antiques district, now full of independent restaurants and wine bars. Budget lunch from €13",
            "2:30pm — Browse the antiques and vintage shops along Rue Notre-Dame and Cours Xavier-Arnozan",
            "4:00pm — Le Bois de Boulogne — Bordeaux's large riverside park, good for a walk along the Garonne",
            "5:30pm — Final Miroir d'Eau visit at golden hour if not done on Day 1",
            "7:30pm — Farewell dinner at a cave à manger (wine bar with food) on Rue du Parlement-Saint-Pierre or Rue des Faussets — the format is a shared table, rotating seasonal dishes, and a short wine list. Budget €25–35 per person with wine",
          ],
          cost: "€40–55 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€130–200/day",
      days: [
        {
          day: "Day 1",
          title: "Architecture Walk, Le Chapon Fin & Miroir d'Eau",
          items: [
            "9:00am — Guided city architecture walk with a licensed guide — the 18th-century urban planning of Bordeaux under the Intendant Tourny is extraordinary: Place de la Bourse, the Grand Théâtre, the Allées de Tourny. Walking tours from €18–25 per person (2 hours)",
            "11:30am — Marché des Capucins market — oysters and white wine with a knowledgeable guide who can introduce you to the producers",
            "1:00pm — Lunch at Le Chapon Fin (Bordeaux's most historic restaurant, open since 1825, €50–80 per person) — a grotto-like Belle Époque dining room serving classic Bordelaise cuisine with an exceptional wine list",
            "3:30pm — Musée des Beaux-Arts (free on the first Sunday of each month, otherwise €5) — housed in the wings of City Hall, with strong holdings in 17th-century Dutch masters and French painting",
            "5:30pm — Miroir d'Eau at golden hour — the best light is 45 minutes before sunset",
            "8:30pm — Aperitif dinner at a Chartrons wine bar with a sommelier-curated wine flight",
          ],
          cost: "€130–170 total",
        },
        {
          day: "Day 2",
          title: "Private Château Visit in Saint-Émilion or Médoc",
          items: [
            "8:30am — Train to Saint-Émilion (€11 return) or arrange a private car to the Médoc (Pauillac or Margaux appellation, €80–120 for car hire)",
            "10:00am — Private château visit — in Saint-Émilion, Château Angélus or Canon-La-Gaffelière welcome advance bookings for private tastings (€30–60 per person). In Médoc, châteaux like Lynch-Bages (Pauillac) or Cantenac Brown (Margaux) offer excellent visitor programmes",
            "12:30pm — Château lunch at the estate or at a nearby auberge — full three-course regional lunch with château wines paired to each course (€50–80 per person including wine)",
            "3:00pm — Second château visit or a tasting at the cooperative for a broader overview of the appellation",
            "5:30pm — Return to Bordeaux",
            "8:00pm — Dinner at Le Gabriel on Place de la Bourse (Michelin Bib Gourmand, panoramic position opposite the river, €45–65 per person) or at a recommended Chartrons restaurant",
          ],
          cost: "€160–220 total",
        },
        {
          day: "Day 3",
          title: "La Cité du Vin Connoisseur Session & Michelin Dinner",
          items: [
            "9:30am — La Cité du Vin connoisseur session — the museum offers dedicated wine tasting workshops (€40–60 per person on top of entry) covering Bordeaux's major appellations with a sommelier. Book in advance at laciteduvin.com",
            "1:00pm — Lunch in the Chartrons district — Bistrot du Sommelier or a similar wine-focused neighbourhood restaurant (€35–50 per person)",
            "3:00pm — Afternoon free for shopping — L'Intendant wine tower on Allées de Tourny stocks 15,000 bottles across 6 spiral floors; a remarkable shop for taking wine home",
            "5:00pm — Final Miroir d'Eau and Garonne riverside walk at golden hour",
            "8:00pm — Farewell dinner at La Grande Maison de Bernard Magrez (Michelin-starred, in a 19th-century mansion, €120–200 per person for a tasting menu with Bordeaux wine pairings) or at Sources de Caudalie if staying outside the city",
          ],
          cost: "€180–250 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€350+/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Hôtel, Private Tour & Place de la Bourse at Dusk",
          items: [
            "Check in to Grand Hôtel de Bordeaux & Spa (5-star on Place de la Comédie facing the Grand Théâtre, from €350/night) or Les Sources de Caudalie (5-star vineyard spa hotel in the Médoc, from €400/night — 35 min from Bordeaux city)",
            "Private architecture and history tour of Bordeaux's 18th-century UNESCO centre with a specialist art historian (€120–180 per person, 3 hours)",
            "Lunch at Le Pressoir d'Argent by Gordon Ramsay (2 Michelin stars, Grand Hôtel de Bordeaux, €200+ per person including wine) — press your own lobster jus at the table in a silver press",
            "Afternoon: Miroir d'Eau photography session at golden hour with a private guide",
            "Evening: sunset cocktail on the Grand Hôtel terrace overlooking the Grand Théâtre",
          ],
          cost: "€600–900 total",
        },
        {
          day: "Day 2",
          title: "Private Helicopter Over the Châteaux & Grand Cru Lunch",
          items: [
            "9:00am — Private helicopter tour over the Médoc and Sauternes wine châteaux from Bordeaux-Mérignac airport (€600–900 for a 60-minute flight over Margaux, Pauillac, Pomerol, and Saint-Émilion)",
            "11:00am — Land near Pomerol or Pauillac for a private winemaker tour at a premier château — Château Mouton Rothschild, Lynch-Bages, or Pichon Baron, arranged months in advance",
            "1:00pm — Grand cru lunch at the château — the finest Bordeaux wines matched to seasonal cuisine at the estate",
            "4:00pm — Return to Bordeaux by private car via the D2 wine road through the Médoc",
            "8:00pm — Dinner at La Grande Maison or Le Pressoir d'Argent — an occasion-worthy finale to a Bordeaux day",
          ],
          cost: "€1,000–1,500 total",
        },
        {
          day: "Day 3",
          title: "Sources de Caudalie Spa & Vinotherapy",
          items: [
            "Morning: Vinotherapy spa session at Les Sources de Caudalie — treatments using grape-seed extracts and red wine polyphenols (signature Merlot Wrap or Crushed Cabernet Scrub, €90–150 per treatment)",
            "Lunch at La Grand' Vigne (1 Michelin star at Sources de Caudalie) — seasonal French cuisine in a vineyard setting with their own Château Smith Haut Lafitte wines",
            "Afternoon: private wine blending session — create your own Bordeaux blend with a winemaker, take home your personalised bottle",
            "Evening: return to Bordeaux city, farewell dinner at Bordeaux's finest, or departure from BOD airport",
          ],
          cost: "€700–1,000 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–40", food: "€15–20", transport: "€5–8", activities: "€10–20", total: "€50–88/day" },
    { tier: "✨ Mid-Range", accommodation: "€80–150", food: "€35–60", transport: "€10–20", activities: "€30–60", total: "€155–290/day" },
    { tier: "💎 Luxury", accommodation: "€300–800", food: "€100–300", transport: "€30–80", activities: "€100–300", total: "€530–1,480/day" },
  ],
  mistakes: [
    {
      icon: "🍷",
      title: "Buying Wine at Tourist Shops Near Place de la Bourse",
      desc: "The wine shops clustered around Place de la Bourse and Quai des Chartrons that target tourists with grand cru labels sell bottles at inflated margins. Buy directly from a château in Saint-Émilion (20–30% cheaper than city retail), or visit L'Intendant on Allées de Tourny — a remarkable 6-floor spiral wine tower with 15,000 bottles and genuinely expert advice. For everyday drinking wine, the Maison du Vin de Bordeaux opposite the tourist office offers fair-priced introductions.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💧",
      title: "Mistiming the Miroir d'Eau",
      desc: "The Miroir d'Eau only creates the famous mirror-perfect reflection when the water layer is thin, undisturbed, and there is no wind. The best conditions are typically early morning (7–9am) and still summer evenings. A breeze of any strength breaks the reflection completely. Check the wind conditions before going — and go twice: once at sunrise for the golden Bourse façade, and once at sunset for the warm amber tones. It's free and 5 minutes from the city centre.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚂",
      title: "Not Doing the Saint-Émilion Day Trip",
      desc: "Saint-Émilion is 35 minutes and €11 by regional train from Bordeaux Saint-Jean station. It's a UNESCO World Heritage medieval village built from limestone, surrounded by some of the world's most famous vineyards, with a 12th-century monolithic church carved entirely from solid rock. Almost nobody skips it intentionally — they simply forget to plan. Buy your train ticket at the station on the morning; trains run roughly hourly and rarely sell out.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🗺️",
      title: "Trying to See Both Saint-Émilion AND Médoc in One Trip",
      desc: "The Bordeaux wine region is the largest in the world — bigger than all of Germany's wine regions combined. Saint-Émilion (Right Bank, Merlot-dominant, medieval village, accessible by train) and the Médoc châteaux (Left Bank, Cabernet-dominant, Pauillac, Margaux — require a car or tour) are completely different in character, distance, and style. Pick one based on your wine preference. Trying to do both in a 3-day trip means doing neither properly.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🚋",
      title: "The Bordeaux Tram Network Means You Never Need a Taxi",
      desc: "Bordeaux has one of the best urban tram systems in France — 4 lines (A, B, C, D) connecting the airport, the train station, Place de la Bourse, La Cité du Vin, Chartrons, and the Miroir d'Eau. A 10-trip carnet costs €14.50 (€1.45 per journey). The Bordeaux Métropole pass (€25/2 days) covers unlimited travel on all trams and buses. Download the TBM app for real-time schedules and ticket purchases.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🦪",
      title: "Oysters and White Wine at 10am at Marché des Capucins",
      desc: "Marché des Capucins is called 'the belly of Bordeaux' — the city's working food market since the 1800s. The tradition of eating oysters with a glass of dry white wine (Muscadet, Entre-Deux-Mers, or Graves blanc) at 10am on a Saturday morning is entirely genuine and practiced by locals. Oysters cost €8–10 a dozen; wine is €3–4 a glass. The best stalls are the third and fourth from the main entrance. This is one of the great unremarked food experiences in France.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏛️",
      title: "La Cité du Vin Is Worth the €22 Even If You Don't Drink Wine",
      desc: "La Cité du Vin (the Wine City museum) is a genuinely world-class cultural institution — interactive exhibitions on wine history, geography, mythology, and culture spanning 3,000 years across 20 rooms. The building itself (designed by XTU Architects) looks like wine swirling in a glass and is a Bordeaux landmark. The ticket includes one glass of wine from the world collection at the panoramic Belvédère bar on the 8th floor (the view over the Garonne is spectacular). Open from 9:30am.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍇",
      title: "Visit in September–October During the Harvest Season",
      desc: "The Bordeaux vendange (harvest) runs from mid-September to mid-October, varying by appellation and vintage conditions. During this period the châteaux are at their most active, the light is golden and the air smells of fermenting grapes, and smaller estates often welcome visitors to help pick. The city and the wine routes are less crowded than summer, prices drop, and the surrounding landscape turns amber and red. Book accommodation ahead — the harvest season is the most atmospheric time to visit Bordeaux.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Do I need to know about wine to enjoy Bordeaux?",
      a: "Absolutely not. The city of Bordeaux itself is stunning — a UNESCO World Heritage Site with extraordinary 18th-century limestone architecture, the Miroir d'Eau, excellent food markets, and a great restaurant scene. La Cité du Vin makes wine completely accessible to beginners with no prior knowledge required. That said, even a basic curiosity about wine will be richly rewarded here — you can taste wines at the source that would cost 5 times as much in a restaurant anywhere else.",
    },
    {
      q: "Can I visit Bordeaux châteaux without a pre-booked tour?",
      a: "Yes — many châteaux welcome walk-in visitors for tastings, particularly smaller estates in Saint-Émilion and the Côtes de Bordeaux appellations. The famous classified growths (Pétrus, Mouton Rothschild, Margaux, Latour) require appointments weeks or months ahead, and some require a letter of introduction from a wine merchant. For Saint-Émilion day trips, the tourist office maintains a list of châteaux accepting walk-ins; most charge €8–15 for a tasting of 3 wines.",
    },
    {
      q: "How do I get from Bordeaux to Paris?",
      a: "The TGV high-speed train from Bordeaux Saint-Jean to Paris Montparnasse takes 2 hours 4 minutes. Advance tickets from €25 (book on SNCF or Trainline). Full-fare tickets can reach €80–150 but advance booking almost always yields excellent prices. This is far better than flying when you factor in airport time — the train station is in the city centre. The service runs approximately every 30–45 minutes throughout the day.",
    },
    {
      q: "What is Bordeaux wine?",
      a: "Bordeaux produces mostly red wine from blends of Cabernet Sauvignon and Merlot. The Left Bank (Médoc appellations: Margaux, Saint-Julien, Pauillac, Saint-Estèphe) is Cabernet Sauvignon-dominant — tannic, structured, age-worthy. The Right Bank (Saint-Émilion, Pomerol) is Merlot-dominant — softer, rounder, more approachable young. Bordeaux also produces excellent dry white wine (Pessac-Léognan, Entre-Deux-Mers) and the world's finest sweet wine, Sauternes (Château d'Yquem).",
    },
    {
      q: "What is the best neighbourhood to stay in Bordeaux?",
      a: "Saint-Pierre (the medieval old town) is the most atmospheric — cobbled streets, wine bars, and restaurants on every corner, walking distance to Place de la Bourse. Chartrons (the antiques quarter north of the centre) has a more local feel with excellent independent restaurants and is slightly more affordable. Triangle d'Or (the golden triangle around Cours de l'Intendance) is central and upmarket. Avoid staying near the train station (Saint-Jean) unless on a very tight budget — it's not the most pleasant area.",
    },
  ],
  combineWith: ["paris-5-days", "nice-3-days", "lyon-3-days"],
  relatedSlugs: ["paris-5-days", "nice-3-days", "lyon-3-days", "seville-3-days"],
  galleryQuery: "bordeaux france wine city miroir eau place bourse",
};

export const metadata: Metadata = {
  title: "Bordeaux in 3 Days: Wine Country Itinerary 2026 (Budget to Luxury)",
  description:
    "Bordeaux in 3 days — Miroir d'Eau, Saint-Émilion day trip, La Cité du Vin, and oysters with white wine at 10am. The complete honest guide with real prices.",
  keywords: [
    "bordeaux itinerary 3 days",
    "bordeaux france travel guide 2026",
    "saint emilion day trip",
    "bordeaux wine travel",
    "miroir eau bordeaux",
  ],
  openGraph: {
    title: "Bordeaux in 3 Days: Wine Country Itinerary 2026 (Budget to Luxury)",
    description:
      "Miroir d'Eau, Saint-Émilion day trip, La Cité du Vin, and oysters with white wine at 10am. Real prices, honest guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589483232748-515c025575bc?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bordeaux Place de la Bourse reflected in the Miroir d'Eau water mirror at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Bordeaux", "France", "Travel", "Itinerary", "Europe", "Wine Travel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bordeaux in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, Miroir d'Eau, Saint-Émilion, La Cité du Vin. Real euro costs.",
    images: ["https://images.unsplash.com/photo-1589483232748-515c025575bc?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/bordeaux-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/bordeaux-3-days#article",
      headline: "Bordeaux in 3 Days: Wine Country Itinerary 2026 (Budget to Luxury)",
      description:
        "3 complete Bordeaux plans — Budget, Mid-Range, Luxury — with Miroir d'Eau, Saint-Émilion day trip, La Cité du Vin, and real euro costs.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1589483232748-515c025575bc?w=1200&q=80",
        width: 1200,
        height: 630,
      },
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/bordeaux-3-days" },
      keywords:
        "bordeaux itinerary, bordeaux 3 days, miroir eau, saint emilion day trip, la cite du vin, medoc wine, bordeaux wine region, marche des capucins",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 5100,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bordeaux in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/bordeaux-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Bordeaux, France",
      description:
        "A UNESCO World Heritage city renowned for the world's largest fine wine region, the Miroir d'Eau water mirror, La Cité du Vin museum, the medieval village of Saint-Émilion, and 18th-century golden limestone architecture.",
      url: "https://www.incredibleitinerary.com/blog/bordeaux-3-days",
      touristType: ["Wine Tourism", "Cultural Tourism", "Heritage Tourism", "Culinary Tourism"],
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
          name: "Do I need to know about wine to enjoy Bordeaux?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not at all. Bordeaux is a stunning UNESCO city with extraordinary architecture, the Miroir d'Eau, and excellent food. La Cité du Vin makes wine accessible to beginners. But even basic curiosity will be richly rewarded.",
          },
        },
        {
          "@type": "Question",
          name: "Can I visit Bordeaux châteaux without a pre-booked tour?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — many châteaux welcome walk-in visitors, especially in Saint-Émilion. Famous grands crus (Pétrus, Mouton Rothschild) require appointments months ahead. Most walk-in tastings cost €8–15 for 3 wines.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get from Bordeaux to Paris?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The TGV high-speed train from Bordeaux Saint-Jean to Paris Montparnasse takes 2 hours 4 minutes. Advance tickets from €25. Far better than flying when you factor in airport time.",
          },
        },
        {
          "@type": "Question",
          name: "What is Bordeaux wine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bordeaux makes red blends from Cabernet Sauvignon and Merlot. Left Bank (Médoc) is Cabernet-dominant, tannic, age-worthy. Right Bank (Saint-Émilion, Pomerol) is Merlot-dominant, softer. Also produces excellent dry whites (Entre-Deux-Mers) and the world's finest sweet wine (Sauternes).",
          },
        },
        {
          "@type": "Question",
          name: "What is the best neighbourhood to stay in Bordeaux?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Saint-Pierre (medieval old town) for atmosphere — cobbled streets, wine bars, minutes from Place de la Bourse. Chartrons (antiques quarter) for a local feel. Triangle d'Or for upmarket convenience.",
          },
        },
      ],
};

export default function BordeauxPage() {
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
