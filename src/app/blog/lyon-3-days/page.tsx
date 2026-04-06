import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Lyon",
  country: "France",
  countryFlag: "🇫🇷",
  slug: "lyon-3-days",
  heroQuery: "lyon france vieux lyon basilica fourviere hill city",
  heroAlt: "Lyon France Vieux Lyon district and Fourvière Basilica on hill at sunset",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Lyon is France's best-kept secret — the gastronomic capital where chefs train before Paris, with a Renaissance old town (UNESCO Heritage), Roman amphitheatres on the hill, and the world's most satisfying bouchon lunch for €18. Skip it and you've missed the real France.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€45",
    bestMonths: "Apr–Jun, Sep–Oct",
    airport: "LYS (Lyon Saint-Exupéry)",
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
        ["Duration", "Up to 90 days within 180 days across the entire Schengen area. Days in Spain, Italy, Germany, or other Schengen countries count toward the same allowance."],
        ["Apply Early", "Apply 6–8 weeks before travel. Appointment slots at French consulates fill quickly — book as early as possible, especially for summer travel."],
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
        ["Tip", "Days in France count toward the 90-day Schengen quota shared with Portugal, Spain, Italy, and all other Schengen countries. Plan accordingly."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€45–70/day",
      days: [
        {
          day: "Day 1",
          title: "Vieux-Lyon, Traboules & Fourvière Hill",
          items: [
            "Morning — Vieux-Lyon (UNESCO World Heritage Renaissance old town) — wander the medieval streets of Saint-Jean, Saint-Paul, and Saint-Georges districts. Free to explore at your own pace",
            "9:30am — Collect the free traboule map from the Lyon Tourist Office on Place Bellecour — these secret passageways cut through Renaissance apartment buildings and are entirely unique to Lyon. Many are only open during daylight hours",
            "11:00am — Fourvière Basilica (free entry, stunning 19th-century mosaics covering the interior ceiling and walls) — take the funicular from Vieux-Lyon station for €1.90 with a transit ticket",
            "12:00pm — Roman amphitheatres on Fourvière hill (€4) — two Roman theatres dating to 15 BC, with panoramic views over the city",
            "1:30pm — Lunch at a bouchon lyonnais in Vieux-Lyon — order quenelle de brochet (fish dumpling in cream sauce) and a small pot of Beaujolais. Budget €15–20 for a two-course set menu",
            "3:30pm — Presqu'île afternoon — Place des Terreaux and the Fontaine Bartholdi (the sculptor who made the Statue of Liberty made this first)",
            "6:30pm — Croix-Rousse hill (the old silk workers' neighbourhood) — evening walk through Montée de la Grande-Côte for great views and an authentic local atmosphere",
          ],
          cost: "€30–40 total",
        },
        {
          day: "Day 2",
          title: "Les Halles Paul Bocuse, Musée des Beaux-Arts & Confluence",
          items: [
            "9:00am — Les Halles de Lyon Paul Bocuse indoor food market — the finest covered market in France. Budget breakfast of Lyonnais sausage, Saint-Marcellin cheese, and a slice of tarte aux pralines (€10–15 total). Go on a weekday morning when it's less crowded",
            "11:00am — Musée des Beaux-Arts (€8) — one of France's best art museums after the Louvre. Egyptian antiquities, an exceptional Impressionist collection, and a peaceful sculpture garden in the cloister",
            "1:30pm — Lunch on Place des Terreaux or Rue Mercière — brasserie menus from €13",
            "3:00pm — Confluence district — the point where the Saône and Rhône rivers meet. The Musée des Confluences is free on Sunday evenings; the architecture alone (Coop Himmelblau design) is worth seeing from outside",
            "5:30pm — Guillotière neighbourhood — Lyon's most multicultural quarter, with excellent and affordable street food from North Africa, Vietnam, and the Middle East. Dinner budget: €8–12",
            "8:00pm — Evening drink at a wine bar on Rue Mercière or Rue de la Platière — a glass of Côtes du Rhône for €4–6",
          ],
          cost: "€35–50 total",
        },
        {
          day: "Day 3",
          title: "Beaujolais Vineyards or Pérouges Medieval Village",
          items: [
            "Option A: Beaujolais day trip — Regional train from Part-Dieu station to Belleville-sur-Saône (€10 return, 40 min). Walk to surrounding vineyards; most small producers offer informal tastings. The Beaujolais wine route is almost entirely untouched by tourism",
            "Option B: Pérouges medieval village — Bus 60 from Meximieux (€5 return from Lyon). A completely intact 13th-century walled village on a hilltop, unchanged since the Middle Ages and used as a film set for period dramas",
            "12:00pm — Galette de Pérouges if visiting the village — a warm flat cake of butter, sugar, and lemon, served as a dessert or snack (€4). The local specialty for centuries",
            "2:00pm — Return to Lyon by early afternoon, leaving time for any remaining Vieux-Lyon traboules or the Gadagne Museums (€8, local history and puppet theatre museum in a Renaissance mansion)",
            "4:00pm — Final shopping on Rue de la République — Lyon has excellent independent food shops for Beaujolais, saucisson sec, and praline tarts to take home",
            "7:00pm — Farewell dinner at a traditional bouchon — three courses for €22–28 including a pot of Beaujolais Nouveau or Mâcon blanc",
          ],
          cost: "€30–45 total including transport",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120–180/day",
      days: [
        {
          day: "Day 1",
          title: "Vieux-Lyon, Bouchon Lunch & Evening Wine Bar",
          items: [
            "9:00am — Guided walking tour of Vieux-Lyon traboules with a local guide (€18–25 per person, 90 minutes, includes access to private courtyard traboules not open to the public)",
            "11:30am — Fourvière Basilica and Roman theatres with the audio guide",
            "1:00pm — Bouchon lunch at Daniel et Denise (Saint-Jean) or Café Comptoir Abel — the city's most celebrated traditional bouchons. Chef's classics including tête de veau, saucisson chaud, and quenelles. Two courses with wine: €35–50 per person",
            "3:30pm — Musée des Confluences (€9) — Lyon's spectacular science and anthropology museum on the Confluence peninsula. The building is an architectural landmark",
            "6:00pm — Evening at a Vieux-Lyon wine bar — wine-focused bars on Rue du Bœuf and Rue Saint-Jean serve excellent Beaujolais and Burgundy by the glass (€6–10)",
          ],
          cost: "€120–155 total",
        },
        {
          day: "Day 2",
          title: "Les Halles Market Tour, Cooking Class & Michelin Dinner",
          items: [
            "9:00am — Les Halles Paul Bocuse guided market tour — a knowledgeable guide explains the stalls, producers, and Lyon's food culture. Tours run 2 hours from €35–45 per person",
            "11:00am — Cooking class at L'Atelier des Chefs on Rue du Président Édouard Herriot — classes from €45–70 per person. Learn to make quenelles de brochet or a classic Lyon dessert",
            "2:00pm — Musée des Beaux-Arts (€8) for the afternoon — the permanent collection includes works by Rubens, Monet, Picasso, and an important Egyptian antiquities department",
            "4:30pm — Croix-Rousse traboules — these were built wider than Vieux-Lyon's to allow silk bales to be carried without exposure to rain. The Sunday market on Boulevard de la Croix-Rousse is one of France's best",
            "8:00pm — Dinner at a Michelin-recommended bouchon such as Le Garet or Léon de Lyon — three courses €45–65 per person",
          ],
          cost: "€140–185 total",
        },
        {
          day: "Day 3",
          title: "Beaujolais Wine Tour with Driver",
          items: [
            "9:00am — Private driver departs Lyon for the Beaujolais wine region (driver hire: €120–180 for the day, shared across the group)",
            "10:30am — Visit 2–3 châteaux for guided tours and tastings — try Moulin-à-Vent, Fleurie, or Morgon appellations. Tasting fees: €8–15 per château",
            "12:30pm — Lunch at a domaine or a local auberge in a Beaujolais village — regional cuisine with the estate's own wine. Budget €25–40 per person for a full lunch",
            "3:00pm — Final château visit and purchases — excellent value for Beaujolais Villages or Crus direct from producers (€8–15 per bottle)",
            "5:00pm — Return to Lyon",
          ],
          cost: "€150–200 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€300+/day",
      days: [
        {
          day: "Day 1",
          title: "Cour des Loges, Private Tour & Bouchon Gastronomique",
          items: [
            "Check in to Cour des Loges (5-star, a UNESCO-listed Renaissance courtyard hotel in the heart of Vieux-Lyon, from €250/night) or Villa Florentine (5-star on Fourvière hill with panoramic city views, from €350/night)",
            "Private historical tour of Lyon's traboules and Renaissance architecture with a specialist guide (€80–120 per person, 2.5 hours including private courtyard access)",
            "Lunch at Les Loges restaurant inside Cour des Loges — creative French cuisine in a Renaissance vaulted dining room",
            "Afternoon: private visit to Fourvière Roman theatres with an archaeologist guide",
            "Evening aperitif at the hotel terrace overlooking the Saône valley at sunset",
          ],
          cost: "€450–650 total",
        },
        {
          day: "Day 2",
          title: "Paul Bocuse Restaurant & Private Food Tour",
          items: [
            "9:00am — Private chef-led food tour of Les Halles Paul Bocuse — a working chef guides you through the market, introduces you to producers, and explains the bouchon tradition in depth (€100–150 per person)",
            "1:00pm — Lunch at Paul Bocuse restaurant in Collonges-au-Mont-d'Or (15 min from Lyon) — one of the world's most legendary restaurants, €200+ per person including wine. Book at least 3 months ahead; this is not optional",
            "4:00pm — Musée des Beaux-Arts with a private guide",
            "8:00pm — Dinner at Takao Takano or Prairial — two Michelin-starred restaurants representing Lyon's new generation of cooking, €90–130 per person for tasting menus",
          ],
          cost: "€500–750 total",
        },
        {
          day: "Day 3",
          title: "Helicopter Over Beaujolais & Château Lunch",
          items: [
            "9:00am — Private helicopter tour over the Beaujolais and Burgundy vineyard landscape from Lyon Bron airport (seasonal availability, €400–600 per person for a 45-minute flight)",
            "11:30am — Land at or near Pommard or Beaune in Burgundy for a private grand cru tasting at a prestigious domaine (arrange in advance)",
            "1:00pm — Château lunch in the Beaujolais — private table at a domaine estate with their finest vintages paired to each course",
            "4:00pm — Return to Lyon by private car",
            "7:30pm — Farewell dinner at Christian Têtedoie restaurant — Michelin-starred, perched on the Fourvière hill with the most dramatic view over nighttime Lyon",
          ],
          cost: "€700–1,100 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–35", food: "€15–20", transport: "€5–8", activities: "€8–15", total: "€48–78/day" },
    { tier: "✨ Mid-Range", accommodation: "€80–150", food: "€35–55", transport: "€10–20", activities: "€20–40", total: "€145–265/day" },
    { tier: "💎 Luxury", accommodation: "€250–500", food: "€80–200", transport: "€20–50", activities: "€80–200", total: "€430–950/day" },
  ],
  mistakes: [
    {
      icon: "🚶",
      title: "Rushing Through the Traboules",
      desc: "These hidden passageways cut through Lyon's Renaissance apartment buildings — you walk into a courtyard, through a stairwell, and emerge on a completely different street. What makes Vieux-Lyon unique is that residents still live in these buildings. Get the free traboule map from the tourist office on Place Bellecour and explore slowly. Many are only open during daytime hours (roughly 8am–7pm); knock and push — they're meant to be used.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍽️",
      title: "Eating at the Wrong Restaurant",
      desc: "Lyon has the highest restaurant density in France and some of its worst tourist traps concentrated near tourist sites. A real bouchon lyonnais has checkered tablecloths (vichy pattern), serves Beaujolais in a small clay pot (a 'pot lyonnais' of 46cl), has a handwritten or chalkboard menu, and serves traditional dishes like quenelles, andouillette, and salade lyonnaise. If the menu has photographs, laminated covers, or is translated into five languages outside the door, walk out.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏘️",
      title: "Missing Croix-Rousse",
      desc: "The Croix-Rousse hill is the most authentic neighbourhood in Lyon and almost nobody visits it. This was the centre of the European silk industry — the traboules here were built wider than those in Vieux-Lyon specifically to carry silk bales without rain damage. The Sunday market on Boulevard de la Croix-Rousse is one of France's finest outdoor food markets. The neighbourhood feels entirely un-touristed even in peak season.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍷",
      title: "Skipping the Beaujolais Day Trip",
      desc: "The Beaujolais wine region is 30–40 minutes from Lyon by train and almost no tourist thinks to visit it as a day trip. The villages are medieval, the landscape is rolling green hills, the wines are excellent (especially the Beaujolais Crus — Moulin-à-Vent, Fleurie, Morgon — which are nothing like supermarket Beaujolais Nouveau), and you will almost certainly be the only non-French visitor at any winery you walk into. It costs €10 return by train.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "The Lyon City Card Is Excellent Value for 2+ Days",
      desc: "The Lyon City Card (€27/1 day, €38/2 days, €47/3 days) covers all public transport (metro, tram, bus, funicular) and free entry to 25+ museums including the Musée des Beaux-Arts, Musée Gadagne, Musée des Confluences, and the Roman theatres. If you're planning to visit two or more museums and use the funicular, buy the 2-day card on arrival at the tourist office or online at en.lyon-france.com.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🥘",
      title: "The Bouchon Lunch Set Menu Is the Best Value Meal in France",
      desc: "A traditional bouchon lyonnais serves a prix-fixe lunch (entrée, plat, dessert) for €18–25, often including a glass or pot of Beaujolais in the price. The food — quenelles de brochet, salade lyonnaise, andouillette, cervelle de canut — is better value and more interesting than anything in Paris at the same price. Go at 12:30pm on a weekday when locals fill the place. Daniel et Denise (Saint-Jean) and Café Comptoir Abel are considered the gold standard.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "💡",
      title: "Lyon Festival of Lights Requires Booking 6 Months Ahead",
      desc: "The Fête des Lumières (Festival of Lights) falls every December 8 and runs for 4 nights. The entire city becomes an open-air art installation — buildings, squares, and bridges are transformed by light projections from international artists. It is completely free and attracts 2–3 million visitors across the 4 nights. Accommodation in Lyon books out entirely by July for this weekend. If visiting in December, plan and book at least 6 months ahead.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚡",
      title: "The Funicular Is the Best Way Up Fourvière Hill",
      desc: "The funicular (ficelle) from Vieux-Lyon station to Fourvière runs every few minutes and costs €1.90 with a standard transit ticket (or free with the Lyon City Card). The walk up the hill is steep and takes 20–25 minutes in the heat — save your energy for exploring the hilltop. There are two funicular lines: one goes to Fourvière (Basilica), the other to Saint-Just (Roman theatres). Both depart from the same underground station beneath Vieux-Lyon metro.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Why is Lyon the gastronomic capital of France?",
      a: "Lyon produced more great chefs than any other French city. Paul Bocuse trained here and ran his flagship restaurant in Collonges-au-Mont-d'Or for over 50 years. The bouchon tradition dates to the 19th century when women called 'mères lyonnaises' cooked hearty workers' cuisine for the silk factory workers of Croix-Rousse. Les Halles Paul Bocuse is the finest covered food market in France. The city has more Michelin-starred restaurants per capita than Paris.",
    },
    {
      q: "What is a bouchon lyonnais?",
      a: "A bouchon is a traditional Lyonnais bistro serving hearty local cuisine in a convivial, informal setting. Classic dishes include quenelles de brochet (fish dumplings in cream sauce), saucisson chaud (warm sausage with potatoes), andouillette (tripe sausage, not for the faint-hearted), salade lyonnaise (frisée with lardons and a poached egg), and cervelle de canut (a fresh cheese dip with herbs). Wine is served in a small clay pot called a 'pot lyonnais'. Real bouchons are recognised by an official 'Les Bouchons Lyonnais' certification plaque.",
    },
    {
      q: "How many days do I need in Lyon?",
      a: "3 days is ideal — Day 1 covers Vieux-Lyon, traboules, and Fourvière; Day 2 covers Les Halles, a museum, and Croix-Rousse; Day 3 is a day trip to Beaujolais or Pérouges. Two days is possible but feels rushed if you want to eat well and explore both hills. Four days allows a day in Beaujolais and a day in Pérouges without compromising the city itself.",
    },
    {
      q: "Is Lyon safe for tourists?",
      a: "Lyon is very safe for tourists. The historic areas (Vieux-Lyon, Presqu'île, Fourvière) are among the most pleasant urban environments in France. Standard city precautions apply: watch your bag on the metro and be aware of your surroundings in Guillotière late at night. The Confluence and Croix-Rousse neighbourhoods are completely safe at all hours.",
    },
    {
      q: "What are the best day trips from Lyon?",
      a: "Pérouges medieval village (1 hour by bus and train from Lyon, €5–8 return) is the most atmospheric — a completely intact walled hilltop village unchanged since the 13th century. Beaujolais wine region (40 min by train, €10 return) is the most unique. Annecy (2 hours by train, €25–35 return) for lakes and alpine scenery. Vienne (30 min, €7 return) for Roman ruins and the Jazz à Vienne festival in summer. All are easily done on public transport.",
    },
  ],
  combineWith: ["paris-5-days", "nice-3-days", "bordeaux-3-days"],
  relatedSlugs: ["paris-5-days", "nice-3-days", "bordeaux-3-days", "barcelona-4-days"],
  galleryQuery: "lyon france vieux lyon fourviere basilica saone river",
};

export const metadata: Metadata = {
  title: "Lyon in 3 Days: Gastronomic Capital Itinerary 2026 (Budget to Luxury)",
  description:
    "Lyon in 3 days — bouchon lunches, UNESCO Vieux-Lyon traboules, Beaujolais day trip, and why France's food capital beats Paris for value. Real prices, honest guide.",
  keywords: [
    "lyon itinerary 3 days",
    "lyon france travel guide 2026",
    "lyon food travel",
    "bouchon lyonnais guide",
    "vieux lyon guide",
    "france gastronomic travel",
  ],
  openGraph: {
    title: "Lyon in 3 Days: Gastronomic Capital Itinerary 2026 (Budget to Luxury)",
    description:
      "Bouchon lunches, UNESCO Vieux-Lyon traboules, Beaujolais day trip, and why Lyon beats Paris for value. Real prices, honest guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603384699007-e2c1e43b4f53?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lyon France Vieux Lyon district and Fourvière Basilica at sunset",
      },
    ],
    type: "article",
    publishedTime: "2026-04-05T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Lyon", "France", "Travel", "Itinerary", "Europe", "Food Travel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyon in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, bouchon lunches, Vieux-Lyon traboules, Beaujolais day trip. Real euro costs.",
    images: ["https://images.unsplash.com/photo-1603384699007-e2c1e43b4f53?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/lyon-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/lyon-3-days#article",
      headline: "Lyon in 3 Days: Gastronomic Capital Itinerary 2026 (Budget to Luxury)",
      description:
        "3 complete Lyon plans — Budget, Mid-Range, Luxury — with bouchon restaurant guide, Vieux-Lyon traboules, Beaujolais day trip, and real euro costs.",
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1603384699007-e2c1e43b4f53?w=1200&q=80",
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
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/lyon-3-days" },
      keywords:
        "lyon itinerary, lyon 3 days, bouchon lyonnais, vieux lyon, traboules, fourviere, beaujolais day trip, paul bocuse, lyon food",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4900,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Lyon in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/lyon-3-days",
        },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Lyon, France",
      description:
        "France's gastronomic capital, known for the bouchon lyonnais dining tradition, the UNESCO-listed Vieux-Lyon Renaissance old town, the Fourvière Basilica, the Les Halles Paul Bocuse market, and the Beaujolais wine region on its doorstep.",
      url: "https://www.incredibleitinerary.com/blog/lyon-3-days",
      touristType: ["Culinary Tourism", "Cultural Tourism", "Heritage Tourism", "Wine Tourism"],
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
          name: "Why is Lyon the gastronomic capital of France?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lyon produced more great chefs than any other French city — Paul Bocuse trained here, the bouchon tradition dates to the 19th century mères lyonnaises who cooked for silk workers, and Les Halles Paul Bocuse is the finest indoor food market in France.",
          },
        },
        {
          "@type": "Question",
          name: "What is a bouchon lyonnais?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A traditional Lyonnais bistro serving hearty local cuisine: quenelles de brochet, saucisson chaud, andouillette, salade lyonnaise, and cervelle de canut. Wine is served in a pot lyonnais (46cl clay carafe). Informal, communal, and excellent value.",
          },
        },
        {
          "@type": "Question",
          name: "How many days do I need in Lyon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "3 days is ideal — Vieux-Lyon and Fourvière on Day 1, Les Halles and museums on Day 2, Beaujolais or Pérouges day trip on Day 3. Two days is possible but rushed if you want to eat well.",
          },
        },
        {
          "@type": "Question",
          name: "Is Lyon safe for tourists?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Very safe. The historic areas of Vieux-Lyon, Presqu'île, and Fourvière are among the most pleasant urban environments in France. Standard city precautions apply on the metro.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best day trips from Lyon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pérouges medieval village (1 hour, €5–8 return) for atmosphere; Beaujolais wine region (40 min, €10 return) for wine; Annecy (2 hours, €25–35 return) for lakes; Vienne (30 min, €7 return) for Roman ruins. All accessible by public transport.",
          },
        },
      ],
};

export default function LyonPage() {
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
