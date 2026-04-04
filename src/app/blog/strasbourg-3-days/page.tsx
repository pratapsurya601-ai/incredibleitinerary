import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Strasbourg",
  country: "France",
  countryFlag: "🇫🇷",
  slug: "strasbourg-3-days",
  heroQuery: "strasbourg cathedral alsace france half timber",
  heroAlt: "Strasbourg Cathedral and half-timbered houses in La Petite France Alsace",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Strasbourg is where France and Germany blur into something better than either — a medieval city of canal-laced alleys, half-timbered houses that glow amber at dusk, a Gothic cathedral that held the title of world's tallest building for two centuries, and a table so good the Alsatian kitchen has its own distinct identity. Three days is exactly enough to eat tarte flambée at a winstub, cycle the Rhine path into Germany, walk La Petite France before the tour buses arrive, and still sit down to a proper Riesling by the fire.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€55",
    bestMonths: "Dec (Christmas markets), Jun–Sep",
    airport: "SXB (Strasbourg Airport) or Basel-Mulhouse EuroAirport (BSL)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
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
        [
          "Schengen Visa Required",
          "France is part of the Schengen Zone. Apply for a short-stay Schengen visa through the French embassy, VFS Global, or TLScontact. Visa fee: €80. Processing time: 15–45 days. Book your appointment 4–6 weeks before travel — popular slots fill quickly.",
        ],
        [
          "Key Documents",
          "Passport valid 3+ months beyond your return date, last 6 months' bank statements showing at least €100/day coverage, confirmed hotel or accommodation bookings, return flight tickets, employment letter or business registration proof, and travel insurance covering a minimum of €30,000.",
        ],
        [
          "90/180 Day Rule",
          "A Schengen visa permits a maximum stay of 90 days within any 180-day rolling period across all Schengen states. If you're combining Strasbourg with Germany, Switzerland, or other European countries, all those days count. Plan carefully.",
        ],
        [
          "Alsace Border Note",
          "Strasbourg sits right on the French-German border — you can walk or tram across the Rhine to Kehl (Germany) freely within the Schengen area. No passport checks, no separate permits needed. Your French Schengen visa covers the Germany crossing.",
        ],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        [
          "Visa-Free Access",
          "USA, UK, Canada, Australia, and New Zealand passport holders enter France and the entire Schengen area visa-free for up to 90 days within any 180-day period. No pre-approval needed — just a valid passport.",
        ],
        [
          "ETIAS from 2025",
          "Visa-exempt travelers (USA, Canada, Australia, NZ, and others) now need ETIAS travel authorization before entry. Cost: €7, valid 3 years, multiple entries. Apply at etias.eu.int — the process takes minutes online and approval is typically near-instant.",
        ],
        [
          "UK Post-Brexit Note",
          "UK passport holders are no longer EU members and enter under the 90/180 visa-free rule with ETIAS required. Ensure your passport has at least 6 months validity. The Rhine crossing into Germany (Kehl) is equally unrestricted — same Schengen rules apply.",
        ],
        [
          "TGV from Paris",
          "The fastest way to reach Strasbourg from other European cities is by rail. From Paris Gare de l'Est: 1h50 by TGV, from €25 on Ouigo or €39–90 on standard TGV. Frankfurt (Germany) to Strasbourg: 2 hours by regional train. No border formalities on any of these routes.",
        ],
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
          title: "La Petite France, Cathedral & Barrage Vauban",
          items: [
            "8:00am — Arrive early in La Petite France district before tour groups. Walk the Rue des Moulins and Rue du Bain-aux-Plantes to see the 16th-century half-timbered tanners' houses and the locks on the Ill river. The covered Ponts Couverts (roofed bridge towers) frame one of the most photographed views in Alsace — at this hour you'll have it to yourself.",
            "9:30am — Cross north to the Barrage Vauban, Vauban's 17th-century defensive dam. Entry to the rooftop terrace is free. The panoramic view of La Petite France, the cathedral spire, and the four towers of the Ponts Couverts from the top is arguably the best viewpoint in the city.",
            "11:00am — Walk 15 minutes east to Strasbourg Cathedral (Notre-Dame de Strasbourg). Entry to the nave is free. Climb the tower platform for €6 — the view from 66m reveals the entire old city, the Rhine valley, and on clear days the Black Forest in Germany. The Gothic facade, started in 1015 and completed in 1439, is a lesson in eight centuries of stone carving.",
            "12:30pm — Astronomical clock viewing inside the cathedral: the mechanism dates to 1842 and stages a daily procession of figures including the Apostles and Father Time at 12:30pm (nominal church donation). Arrive 10 minutes early.",
            "1:00pm — Lunch at a winstub on Rue du Maroquin or Rue des Frères (the streets directly south of the cathedral). A tarte flambée (flammekueche) — a paper-thin Alsatian pizza with crème fraîche, lardons, and onions — costs €8–12 and is the definitive Strasbourg lunch. Order one per person minimum.",
            "3:00pm — Musée de l'Œuvre Notre-Dame (just behind the cathedral, €7.50 with Strasbourg Card included). The museum holds the original medieval sculptures removed from the cathedral facade for preservation — the quality of the 12th-century stonework up close is startling.",
            "5:00pm — Evening walk through the Grande Île (the UNESCO-listed island city center). The Rue du Vieux-Marché-aux-Poissons and Place Gutenberg area is lively at this hour with local life.",
            "7:30pm — Dinner: a second tarte flambée or choucroute garnie (Alsatian fermented cabbage with pork sausages and smoked meats, €14–18) at Winstub Zum Strissel (Place de la Grande Boucherie) — one of the oldest winstubs in the city, €15–22 for a main course.",
          ],
          cost: "€40–60 total",
        },
        {
          day: "Day 2",
          title: "European Parliament, Palais des Rohan & Alsatian Wine Tasting",
          items: [
            "9:00am — Take the free tram (Line D or E from Homme de Fer) to the European Parliament quarter (Quartier Européen). Register online at europarl.europa.eu for a free guided visit — sessions run Mon–Thu when Parliament is in plenary, otherwise self-guided. The hemicycle chamber is genuinely impressive, and the free visit lasts 45 minutes.",
            "10:30am — Walk through the Parc de l'Orangerie — Strasbourg's grandest park, free entry, with a small zoo (free), rose gardens, and a café terrace. The park borders the Council of Europe, the European Court of Human Rights (striking modern architecture), and the Palais de l'Europe.",
            "12:00pm — Budget lunch: a bretzel (Alsatian pretzel, €1.50–2.50) and a Munster cheese sandwich from a boulangerie, eaten in the park. Or a schnitzel at a café near the Parliament for €10–13.",
            "2:00pm — Return to the Grande Île and visit the Palais des Rohan (€7.50 each, or covered by Strasbourg Card). The 18th-century episcopal palace houses three museums: the Musée des Arts Décoratifs (royal apartments, Sèvres porcelain), the Musée des Beaux-Arts (El Greco, Rubens, Monet), and the Musée Archéologique (Roman Alsace). Budget 1.5–2 hours for all three.",
            "4:30pm — Alsatian wine tasting at one of the cave à vins on Rue du Maroquin or Rue des Orfèvres. Most wine shops offer a tasting of 3–5 Alsatian varieties — Riesling, Pinot Gris, Gewurztraminer, Muscat, and the sparkling Crémant d'Alsace — for €8–15. The key insight: Alsatian Riesling is dry (unlike German), and Gewurztraminer is the most distinctive white wine in France.",
            "6:30pm — Cross the Rhine by tram (Line D to Kehl, Germany, €1.80 — or free with Strasbourg Card tram pass). The Kehl city center is unremarkable, but the crossing itself — over the modern Passerelle des Deux Rives and past the Vauban Quarter — is a genuine border experience without a border. Have a German beer on German soil and return.",
            "8:00pm — Dinner: baeckeoffe (slow-cooked Alsatian meat and potato casserole, traditionally prepared in sealed pottery, €16–20) at Au Crocodile or Maison des Tanneurs (La Petite France). Or an excellent budget option: the weekly Tarte Flambée evening at one of the winstubs where unlimited rounds come to the table for a fixed €17–20 per person.",
          ],
          cost: "€45–65 total",
        },
        {
          day: "Day 3",
          title: "Day Trip to Colmar — The Little Venice of Alsace",
          items: [
            "8:30am — Take the TER regional train from Strasbourg Gare Centrale to Colmar (30–35 minutes, €12.60 return). Trains run approximately every 30 minutes. No reservation needed — buy at the station machine.",
            "9:15am — Colmar's old city on foot: the Pfister House (1537, the most photographed facade in Alsace), Rue des Marchands, and the Dominican church housing the Isenheim Altarpiece (€9 at the Unterlinden Museum — one of the great masterworks of Western art, genuinely worth it).",
            "11:00am — La Petite Venise (Little Venice) district of Colmar — canals, flower-decked half-timbered houses, and the Lauch riverside walk. Less crowded than Strasbourg, arguably more picturesque. The morning light on the water here is exceptional.",
            "12:30pm — Lunch in Colmar: tarte flambée at Winstub Schwendi (Grande Rue, €10) or a charcuterie plate at the covered market. A glass of local Gewurztraminer: €4–6.",
            "2:30pm — Explore the Quartier des Tanneurs in Colmar and the Bartholdi Museum (€5, Frédéric Auguste Bartholdi was born in Colmar and designed the Statue of Liberty — the museum has the original scale models).",
            "4:00pm — Optional: buy Alsatian wine and macarons at the local shops for the journey home. Colmar has excellent independent wine merchants with better prices than Strasbourg.",
            "4:30pm — Return train to Strasbourg (arrive 5:05pm). Evening free for a final walk through La Petite France at dusk — the amber glow of the half-timbered houses reflected in the still canals is the defining image of Alsace.",
            "7:30pm — Farewell dinner: a proper Alsatian feast at Chez Yvonne (Rue du Sanglier) — the most celebrated traditional Alsatian restaurant in the city. Politicians, musicians, and presidents have eaten here. Foie gras d'Alsace, choucroute royale, and a half-bottle of Riesling: budget €30–40 per person. Book 2–3 days ahead.",
          ],
          cost: "€45–65 total (including Colmar train and lunch)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120–200/day",
      days: [
        {
          day: "Day 1",
          title: "La Petite France, Cathedral Tower & Guided City Walk",
          items: [
            "9:00am — Check in at Hotel Hannong (Rue du 22 Novembre) — an Art Deco 3-star hotel in the heart of the Grande Île, ten minutes' walk from the cathedral. Rooms from €110–160/night with stylish interiors and an excellent breakfast.",
            "10:00am — Guided walking tour of La Petite France with a local guide from Strasbourg Guided Tours (€20–30/person, 2 hours). The depth of history in the tanneries, mills, and locks — the way the district evolved from working-class industry to UNESCO heritage — is much richer with a guide's narration.",
            "12:30pm — Lunch at Restaurant Maison des Tanneurs (La Petite France, directly on the canal) — the most atmospheric dining room in Strasbourg, a genuine 17th-century tannery. Choucroute garnie: €22, Alsatian wine pairings from €6/glass. Book ahead.",
            "2:30pm — Strasbourg Cathedral: climb the tower (€6) and visit the full interior including the Astronomical Clock show at 12:30pm if you haven't yet. The afternoon light through the Gothic stained glass windows between 3–5pm is spectacular.",
            "4:00pm — Musée de l'Œuvre Notre-Dame (included in Strasbourg Card, or €7.50 standalone) — original cathedral sculptures, medieval stained glass panels, and the oldest figurative stained glass in France (c. 1070).",
            "6:30pm — Pre-dinner drinks at a wine bar: Alsatian Crémant d'Alsace by the glass (€4–7) at a cave à vins near the cathedral. The sparkling wine of Alsace is made by the traditional method and rivals Champagne at a third of the price.",
            "8:00pm — Dinner at Chez Yvonne (Rue du Sanglier) — the city's most celebrated winstub. Foie gras d'Alsace to start (€18), followed by baeckeoffe or a tournedos of Alsatian pork (€22–28). Full dinner with wine: €45–60/person. Reserve in advance.",
          ],
          cost: "€130–180 total",
        },
        {
          day: "Day 2",
          title: "European Parliament, Palais des Rohan & Rhine Crossing",
          items: [
            "9:00am — European Parliament visit (free, pre-register online). The plenary chamber and rotating exhibitions on European governance are genuinely fascinating — the building's architecture alone is worth the trip to the Quartier Européen.",
            "10:30am — Parc de l'Orangerie for coffee on the terrace. Walk the perimeter of the European Court of Human Rights building (Norman Foster design, 1995) — one of the most important pieces of civic architecture in Europe.",
            "12:00pm — Lunch at a restaurant in the Broglie Square area or a gastronomic lunch at Le Buerehiesel (inside the Parc de l'Orangerie itself — 1 Michelin star, €35–55 lunch menu, spectacular garden terrace). Book in advance.",
            "2:30pm — Palais des Rohan — all three museums (Strasbourg Card covers entry, otherwise €7.50 each). The royal apartments in the Musée des Arts Décoratifs are furnished exactly as they were when Louis XV and Marie Antoinette stayed here.",
            "5:00pm — Rent a city bike (Vélhop stations throughout the city, €5/half day, or included with some hotel packages) and cycle across the Passerelle des Deux Rives (footbridge) to the Vauban Quarter in Kehl, Germany. The district on the German side was deliberately designed as a mirror of Strasbourg's urbanism — a fascinating exercise in cross-border planning.",
            "7:00pm — Return by tram. Aperitif hour: Kir Alsacien (Crémant d'Alsace with crème de cassis) at a bar on Place Kléber.",
            "8:30pm — Dinner at Au Crocodile (Rue de l'Outre) — a Strasbourg institution since 1801 and holder of a Michelin star. The tasting menu runs €75–110/person and showcases contemporary Alsatian cuisine: pretzel-crusted foie gras, Riesling-braised veal, and Alsatian cheese. Book 1 week ahead.",
          ],
          cost: "€150–210 total",
        },
        {
          day: "Day 3",
          title: "Alsace Wine Route Villages Day Trip",
          items: [
            "8:30am — Rent a car for the day from Europcar or Hertz at Strasbourg Gare (from €45/day) or join a guided Alsace Wine Route tour (Context Travel or local operator, €70–95/person including transport and tastings). Self-driving gives maximum flexibility.",
            "10:00am — Ribeauvillé (45 minutes from Strasbourg): a medieval wine village crowned by three ruined châteaux. Walk the Grand Rue, visit the Domaine Trimbach winery (estate wines since 1626, tasting €5–10), and climb to Château Saint-Ulrich for views over the vine-covered plain.",
            "12:00pm — Riquewihr (15 minutes from Ribeauvillé): the most perfectly preserved medieval town in Alsace, often called the Pearl of Alsace. The entire old town is enclosed within 16th-century walls. Every building is a half-timbered original — no modern intrusions. Lunch at a winstub in the village: tarte flambée and a glass of Pinot Gris (€15–20 total).",
            "2:30pm — Eguisheim: a concentric village of extraordinary beauty — circular streets of Renaissance houses radiating from a central castle. The Alsatian wine growers here produce some of the finest Riesling and Gewurztraminer on the route. Buy direct from the winery — €8–15 per bottle for Grand Cru.",
            "4:30pm — Kaysersberg: Alsace's most complete medieval fortified village, birthplace of Albert Schweitzer. The Renaissance fountain, fortified bridge, and castle ruins make for a 45-minute wander. Stop at a chocolatier for Alsatian chocolate truffles (€8–15/box).",
            "6:00pm — Return to Strasbourg along the D83 wine road as the vineyards catch the late afternoon sun.",
            "8:00pm — Farewell dinner at Maison Kammerzell (Place de la Cathédrale) — the most spectacular Gothic-Renaissance building in Strasbourg, housing a restaurant since 1589. The dining rooms have painted wooden ceilings and carved window frames. Alsatian specialties from €22; set menus €38–55. A fitting final dinner in this extraordinary city.",
          ],
          cost: "€120–180 total (including car rental and wine purchases)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€280–500/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Cathedral Tour & Gastronomic Winstub",
          items: [
            "Check in at Régent Petite France & Spa (Rue des Moulins, La Petite France district) — the most celebrated hotel in Strasbourg, occupying a converted 16th-century ice house directly on the canal in La Petite France. Rooms and suites from €250–550/night; canal-facing rooms are worth the premium.",
            "Private transfer from Strasbourg Gare or SXB Airport by luxury car: €40–80.",
            "2:00pm — Private guided tour of Strasbourg Cathedral with an architectural historian (through the city's cultural tour operators, €80–120 for 2 hours). Access to areas closed to the public, in-depth exploration of the astronomical clock mechanism, and a rooftop tower visit with expert commentary on the Gothic construction techniques.",
            "5:00pm — Spa treatment at Régent Petite France's canal-side spa. The hotel's treatment suites overlook the covered bridge towers and the water. A 90-minute Alsatian lavender and wine-extract treatment: €140–190.",
            "7:30pm — Pre-dinner aperitif in the hotel bar overlooking the canal.",
            "9:00pm — Dinner at Au Crocodile (Rue de l'Outre, 1 Michelin star) — the gastronomic pinnacle of Strasbourg. Chef Philipp Vogel's contemporary Alsatian menu builds on 200 years of kitchen tradition. Tasting menu with wine pairings from Alsatian Grand Cru estates: €130–180/person. Reserve one week ahead minimum.",
          ],
          cost: "€350–550 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "European Parliament VIP Visit, Private Wine Lunch & Rhine Cycling",
          items: [
            "9:30am — Late hotel breakfast overlooking the canal. The Régent's breakfast buffet (€28) features Alsatian charcuterie, local cheeses, and house-baked kugelhopf (the region's traditional yeast cake).",
            "11:00am — European Parliament visit. Contact the Parliament's VIP visitors' service (europarl.europa.eu) for priority access and a dedicated guide for your group — available at no charge if arranged in advance through your MEP's office or via the official visitor program.",
            "1:00pm — Lunch at Le Buerehiesel (Parc de l'Orangerie, 1 Michelin star). Chef Eric Westermann serves seasonal Alsatian ingredients in a beautifully restored half-timbered auberge inside the park. Three-course lunch menu: €55–75/person with wine pairings from the exceptional Alsatian cellar.",
            "3:30pm — Private cycling tour along the Rhine path with a local guide (Strasbourg cycling tours, €80–120/person, 3 hours). Cross the Passerelle des Deux Rives into Germany, cycle the Vauban Quarter in Kehl, and return along the French bank through nature reserves. E-bikes available for comfort.",
            "7:00pm — Wine tasting at a private cave à vins — several wine merchants in Strasbourg offer evening tastings by appointment. A curated vertical tasting of Grand Cru Riesling (5–7 wines from legendary estates like Zind-Humbrecht, Trimbach, and Hugel): €40–60/person.",
            "9:00pm — Dinner at Restaurant Gastronomique Umami (Rue des Dentelles) — the city's most innovative kitchen, blending Japanese technique with Alsatian produce. Eight-course tasting menu: €95–120/person; sake and Alsatian wine pairings extra.",
          ],
          cost: "€280–420 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Alsace Wine Route, Château Lunch & Departure",
          items: [
            "8:30am — Private chauffeured car for the day (through the hotel concierge, €350–500/day for a luxury Mercedes with driver-guide) along the full Alsace Wine Route.",
            "10:00am — Exclusive domaine visit at a Grand Cru estate in Ribeauvillé or Riquewihr. Several top producers (Domaine Trimbach, Domaine Weinbach, Domaine Zind-Humbrecht) offer private cellar tours and barrel tastings by appointment: €30–60/person, bookable through your hotel concierge.",
            "12:30pm — Lunch at Château d'Isenbourg (Rouffach) or Restaurant La Fourchette des Ducs (Obernai, 2 Michelin stars). Seasonal Alsatian haute cuisine in a restored château, €80–120/person for a full lunch with wine.",
            "3:00pm — Afternoon through the most scenic stretch of the wine route: Turckheim, Kaysersberg, and Ammerschwihr. Private wine purchases shipped to your home address through the winery's export service.",
            "5:30pm — Return to Strasbourg. Farewell aperitif on the hotel terrace as the lights come on across La Petite France.",
            "7:30pm — Departure dinner at Maison Kammerzell (Place de la Cathédrale) — the city's most spectacular Gothic interior, serving since 1589. The Alsatian cheese selection (€18) and the regional specialties platters at this address are the definitive Strasbourg meal. Full dinner with Grand Cru Riesling: €65–90/person.",
          ],
          cost: "€500–800 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€25–40 (hostel/budget hotel)",
      food: "€15–22 (winstubs, bretzel, market)",
      transport: "€5–10 (tram day pass €4.20)",
      activities: "€10–13 (tower + 1 museum)",
      total: "€55–85/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90–160 (3-star hotel)",
      food: "€35–60 (restaurants, wine tastings)",
      transport: "€10–20 (tram + bike hire)",
      activities: "€25–40 (Strasbourg Card €19.50)",
      total: "€120–200/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–550 (Régent Petite France)",
      food: "€80–180 (Michelin dining)",
      transport: "€40–120 (private car/transfers)",
      activities: "€80–200 (private tours, spa)",
      total: "€280–500/day",
    },
  ],
  mistakes: [
    {
      icon: "🗓️",
      title: "Coming in Summer Without Booking Chez Yvonne Well Ahead",
      desc: "Chez Yvonne is Strasbourg's most famous traditional restaurant and seats only 70 people. In peak summer (July–August) and December market season, it books out 2–3 weeks in advance. Call or email directly — they accept reservations by phone and take English-speaking bookings. Showing up without a reservation will almost always mean a turn-away.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎄",
      title: "Visiting the Christmas Market Without Planning Accommodation",
      desc: "Strasbourg's Christmas market (Christkindelsmarik) runs from late November to December 31 and is the oldest in France, dating to 1570. It draws over 2 million visitors across the season. Hotels within the city fill completely and prices triple — some nights hit €350+ for basic 3-stars. Book 3–4 months ahead for December travel. The market itself is genuinely magnificent: 300 wooden chalets, mulled Alsatian wine (vin chaud), and the cathedral illuminated at night.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🕐",
      title: "Missing the Astronomical Clock Display",
      desc: "The cathedral's famous astronomical clock stages its daily procession of automata — the Apostles, the crowing cock, Death striking the hour — at precisely 12:30pm. The doors to the viewing area open at 11:30am and close promptly at 12:00pm; you cannot enter after noon. The cathedral is always open and free, but the clock show requires arriving before midday. It costs only a small church donation and is worth every euro.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚗",
      title: "Driving Into the Grande Île Old City",
      desc: "The Grande Île — the entire UNESCO-listed island that makes up the old city center — has no useful car access and almost no public parking. The tram system is excellent (Line A/B/C/D/E, day pass €4.20, 3-day Strasbourg Card includes tram). If you drive to Strasbourg, park at a park-and-ride on the periphery (Poteries, Rotonde, or Elsau; free with tram ticket) and take the tram in. The city is compact and entirely walkable once you're in the center.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🍷",
      title: "Overlooking Alsatian Wine in Favour of French Standards",
      desc: "Most visitors to France default to Bordeaux or Burgundy. Alsace produces the best dry Riesling in the world (officially — it wins more comparative tastings than any other region), and the Gewurztraminer at its best (spice, lychee, rose) is utterly unlike anything else in wine. A Grand Cru from Zind-Humbrecht or Trimbach costs €15–35 in a wine shop — the same quality would be €80–150 in a Burgundy wine merchant. Buy direct at the source.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "The Strasbourg Card Pays for Itself on Day One",
      desc: "The Strasbourg Pass (€19.50 for 3 consecutive days) covers unlimited tram travel, free entry to all city museums (Musée de l'Œuvre Notre-Dame, Palais des Rohan, Musée d'Art Moderne, and others), 50% off the cathedral tower climb, a free boat cruise on the Ill, and discounts at 20+ partner sites. If you visit two museums and use the tram twice a day, you've already broken even. Buy it at the Tourist Office on Place de la Cathédrale or at the train station.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🥨",
      title: "The Tarte Flambée Evening Ritual Is the Best Value in Alsace",
      desc: "Many traditional winstubs (Alsatian wine taverns) serve unlimited rounds of tarte flambée (flammekueche) on weekday evenings for a fixed price of €17–22 per person. The rounds keep coming as long as you're seated. Classics (crème fraîche, lardons, onion) are followed by variations — Munster cheese, forest mushroom, sweet apple and cinnamon for dessert. It's the Alsatian equivalent of a tapas evening. Ask specifically for the 'soirée flammekueche' format when booking.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🚲",
      title: "Rent a Vélhop Bike to Reach the European Quarter and Rhine",
      desc: "The Vélhop public bike scheme (€5 half-day, €8 full day at self-service stations or €10/day at staffed outlets with helmets) makes the European Parliament quarter, the Rhine riverside path, and the Kehl crossing genuinely convenient. The city has 600km of marked cycle paths — the Rhine path from the city center to the Passerelle des Deux Rives is completely flat and takes 20 minutes. E-bikes also available at staffed Vélhop stations.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚂",
      title: "Colmar Is 30 Minutes Away and Deserves a Full Half-Day",
      desc: "The TER regional train from Strasbourg to Colmar runs every 30 minutes, costs €6.30 each way (€12.60 return), and takes 33 minutes. No reservation required — buy at the station machine. Colmar's Unterlinden Museum holds the Isenheim Altarpiece, arguably the most moving German-language altarpiece in existence. The Little Venice canal district and the Pfister House make Colmar more photogenic than Strasbourg in some lights. A day that combines Strasbourg in the morning and Colmar in the afternoon is entirely achievable.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "La Petite France at Dawn Is a Different City",
      desc: "The half-timbered houses of La Petite France and the view from the Barrage Vauban rooftop are two of the most photographed scenes in France — which means by 10am in summer there are tour groups, selfie sticks, and queues for photo spots. At 7:30–8:30am, before the first river cruise boats pass, the canals are absolutely still, the reflections are perfect, and you have the covered bridge towers entirely to yourself. The cathedral bells mark the quarter-hours. This is the real Strasbourg.",
      color: "bg-rose-50 border-rose-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Paris to Strasbourg?",
      a: "The TGV from Paris Gare de l'Est to Strasbourg takes 1 hour 50 minutes. Ouigo (the low-cost TGV operator) offers fares from €25–39 if you book 3–8 weeks ahead. Standard TGV tickets on iDTGV run €39–90 depending on booking window. Trains depart Paris hourly throughout the day. The journey is through the Champagne countryside and the Vosges foothills — it's a genuinely pleasant train ride.",
    },
    {
      q: "Is Strasbourg worth visiting outside of Christmas market season?",
      a: "Absolutely — and arguably more so. June–September offers warm weather, open-air dining along the canals, and the ability to actually walk through La Petite France without being shoulder-to-shoulder with crowds. Spring (April–May) brings the Alsatian wine country into bloom and the city returns to its locals. The Christmas market is spectacular but the city is also excellent in every other season. Summer is the peak, but September–October has ideal weather and fewer tourists.",
    },
    {
      q: "Can I easily visit both France and Germany from Strasbourg?",
      a: "Yes — this is one of Strasbourg's unique qualities. The tram Line D runs from the city center directly across the Rhine to Kehl, Germany, in about 15 minutes (€1.80, or covered by the Strasbourg Card tram pass). No passport checks, no customs — you cross the river on a modern bridge past a small border marker. Kehl itself is a quiet German market town; the experience is about the crossing rather than the destination. For more interesting German territory, the Baden-Baden thermal spa town is 40 minutes by train.",
    },
    {
      q: "What is the Strasbourg Card and is it worth it?",
      a: "The Strasbourg Pass costs €19.50 for 3 consecutive days and includes: unlimited tram travel (the tram alone is €1.90/ride or €4.20 for a day pass), free entry to all the major city museums (Musée de l'Œuvre Notre-Dame €7.50, Palais des Rohan €7.50 each, Musée d'Art Moderne), 50% off the cathedral tower (saving €3), a free 1-hour boat tour on the Ill river (normally €12.50), and discounts at partner restaurants and shops. If you visit two museums and use the tram three days running, you're ahead by €15+. For a 3-day stay it's a near-automatic buy.",
    },
    {
      q: "What should I eat in Strasbourg?",
      a: "In order of priority: tarte flambée (flammekueche — thin-crust Alsatian pizza with crème fraîche, lardons, and onion, €8–12), choucroute garnie (sauerkraut braised in Riesling with pork sausages and smoked meats, €14–19), baeckeoffe (sealed pottery casserole of marinated meats and potatoes, €16–20), foie gras d'Alsace (the Alsatian version uses goose liver and is France's finest), Munster cheese with cumin (the pungent washed-rind cheese from the Vosges mountains), and kugelhopf (the ribbed brioche-like cake dusted with icing sugar that appears in every boulangerie window).",
    },
    {
      q: "Is Strasbourg walkable or do I need transport?",
      a: "The Grande Île (the old city island) is entirely walkable — the entire historic center is about 2km across and UNESCO-listed as a single monument. You can walk from La Petite France to the Cathedral to the Palais des Rohan in 20 minutes. For the European Parliament quarter (2.5km northeast) the tram is convenient; for the Rhine crossing the tram is the easiest option. The Vélhop bike scheme is excellent for reaching the outer neighborhoods and making day rides along the Rhine path.",
    },
    {
      q: "What's the best base for visiting the Alsace Wine Route?",
      a: "Strasbourg is an excellent base for day trips, but for wine route immersion, many travelers split their time: 2 nights in Strasbourg and 1–2 nights in Colmar (which sits in the heart of the most scenic wine villages). From Colmar, the top villages — Riquewihr, Eguisheim, Ribeauvillé, Kaysersberg — are all within 15km. If you have a car, the wine route from Thann in the south to Marlenheim in the north covers 170km and can be done in a leisurely 2-day drive with overnight stops at village auberges.",
    },
  ],
  combineWith: ["paris-5-days", "lyon-3-days", "colmar-2-days"],
  relatedSlugs: ["paris-5-days", "lyon-3-days", "bordeaux-3-days", "nice-3-days"],
  galleryQuery: "strasbourg alsace france petite france canal cathedral",
};

export const metadata: Metadata = {
  title: "Strasbourg in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
  description:
    "3 detailed Strasbourg itineraries with La Petite France canals, cathedral secrets, Alsatian food guide, Christmas market tips, day trips to Colmar, and real euro costs for every budget.",
  keywords: [
    "strasbourg itinerary 3 days",
    "strasbourg travel guide 2026",
    "strasbourg christmas market",
    "la petite france strasbourg",
    "alsace travel guide",
    "strasbourg budget travel",
    "colmar day trip from strasbourg",
    "alsatian food guide",
    "strasbourg cathedral",
    "european parliament strasbourg",
  ],
  openGraph: {
    title: "Strasbourg in 3 Days: Budget to Luxury 2026 Itinerary",
    description:
      "La Petite France canals, cathedral astronomical clock, Christmas market secrets, Colmar day trips, and real Alsatian food costs.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Strasbourg La Petite France half-timbered houses canals Alsace France",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strasbourg in 3 Days (2026)",
    description:
      "La Petite France, cathedral clock secrets, Alsatian food guide, and the Christmas market — 3 budget plans with real euro costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/strasbourg-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Strasbourg in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.incredibleitinerary.com/logo.png",
        },
      },
      image:
        "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&q=80",
      description:
        "3 detailed Strasbourg itineraries with La Petite France canals, cathedral secrets, Alsatian food guide, Christmas market tips, day trips to Colmar, and real euro costs for every budget.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.incredibleitinerary.com/blog/strasbourg-3-days",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Strasbourg 3 Days",
          item: "https://www.incredibleitinerary.com/blog/strasbourg-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Strasbourg, France",
      description:
        "The capital of the Alsace region and seat of the European Parliament — a UNESCO-listed medieval city of half-timbered houses, Gothic cathedral, canal-laced La Petite France district, and the oldest Christmas market in France.",
      touristType: [
        "History enthusiasts",
        "Architecture lovers",
        "Food and wine travelers",
        "Christmas market visitors",
        "Cultural tourists",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.5734,
        longitude: 7.7521,
      },
      containedInPlace: {
        "@type": "Country",
        name: "France",
      },
    },
  ],
};

export default function StrasbourgPage() {
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
