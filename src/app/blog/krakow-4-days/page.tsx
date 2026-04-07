import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Krakow",
  country: "Poland",
  countryFlag: "🇵🇱",
  slug: "krakow-4-days",
  heroQuery: "krakow poland old town wawel castle medieval square",
  heroAlt: "Krakow Old Town Market Square with St Mary's Basilica at dusk, Poland",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Krakow is one of the great cities of central Europe and one of the most sobering travel destinations on earth. It is the best-preserved medieval city in Poland — spared the bombing that destroyed Warsaw because Nazi Germany made it their administrative capital — and it sits within reach of two UNESCO World Heritage Sites that carry the full weight of human history: Auschwitz-Birkenau, and the Wieliczka Salt Mine. Four days is enough to hold all of this, and still eat pierogi in a milk bar and drink Żywiec under the Wawel Castle walls.",
  stats: {
    duration: "4 Days",
    budgetFrom: "€30",
    bestMonths: "May–Sep",
    airport: "KRK (John Paul II Kraków–Balice)",
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
        ["Schengen Visa Required", "Poland is a full Schengen member. Indian passport holders must apply for a short-stay Schengen C visa through the Polish embassy or VFS Global. Fee: €80. Processing time: 15–30 days. Apply at least 6 weeks before your travel date — the Polish consulate in Mumbai and Delhi processes applications; book your VFS appointment well in advance."],
        ["Key Documents", "Passport valid 3 months beyond your return date, 6 months of bank statements, confirmed accommodation bookings, return flight tickets, employment letter or business documents, and travel insurance with minimum €30,000 medical coverage. Polish authorities may request proof of hotel bookings and a detailed itinerary."],
        ["Currency Note", "Poland uses Polish Zloty (PLN), not the Euro. €1 = approximately PLN 4.30 (April 2026). Krakow is one of the cheapest major cities in Europe for visitors — your Schengen visa budget estimate should account for Poland's significantly lower cost of living compared to France or Germany."],
        ["90/180 Day Rule", "A Schengen visa allows up to 90 days within any 180-day period across all 27 Schengen countries. If combining Krakow with Prague, Vienna, or Budapest, all those days count toward one 90-day allowance."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter Poland (Schengen) visa-free for up to 90 days within any 180-day period. Poland joined the Schengen Zone in 2007; border checks with Germany and Czech Republic are generally none."],
        ["ETIAS from 2025", "From 2025, visa-exempt travellers including USA, Canada, and Australia need ETIAS — a €7 travel authorisation valid 3 years. Apply online at etias.eu.int before travel. The process takes minutes and must be completed before arrival."],
        ["UK Post-Brexit", "UK passport holders enter under the Schengen visa-free 90/180 rule and will need ETIAS from 2025. Ensure your passport has at least 6 months validity remaining."],
        ["Border Crossings", "If travelling overland from Prague (7.5 hours bus) or Vienna (7 hours train), there are no passport checks at the Schengen internal borders. The Krakow–Budapest overnight train is a scenic classic route (10 hours, book 4–6 weeks ahead)."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€30–50/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Market Square, Cloth Hall & Wawel Castle",
          items: [
            "9:00am — Old Town Market Square (Rynek Główny, free). At 200 by 200 metres, it is one of the largest medieval town squares in Europe — comparable to Venice's Piazza San Marco in scale. The entire square is pedestrianised and surrounded by Gothic, Renaissance, and Baroque townhouses. Sit on the steps of the Adam Mickiewicz monument and simply look.",
            "9:30am — Cloth Hall (Sukiennice, free to ground floor). The Renaissance arcade in the centre of the square dates to the 14th century — rebuilt after a fire in the 15th, remodelled in the 16th. The ground floor sells amber jewellery, linen, and Polish craft; the Gallery of 19th-century Polish Painting upstairs (€4) has works from the Romantic nationalist period that give essential context for Polish culture.",
            "10:30am — St Mary's Basilica (€10, timed entry). The Gothic brick church on the corner of the square opens hourly with a short trumpet call from the tallest tower — the Hejnał mariacki — played by a bugler at the open window, a tradition since the 14th century. The interior is extraordinary: the carved wooden altarpiece by Veit Stoss (1489) is the largest Gothic altarpiece in the world.",
            "1:00pm — Lunch at a bar mleczny (milk bar). These communist-era subsidised cafeterias survived as neighbourhood institutions and now serve the cheapest filling food in Krakow. Bar Mleczny Centralny or Pod Temidą: pierogi (PLN 15–25, potato/cheese filling or sauerkraut/mushroom), borscht (PLN 8), żurek (sour rye soup with egg and sausage, PLN 10). Lunch for PLN 25–35 (€6–8).",
            "2:30pm — Wawel Castle and Royal Cathedral (free for grounds, apartments €4–10, cathedral €10 separate). The hill above the Vistula river has been Poland's royal seat since the 11th century. The Sigismund Bell (1520) is one of the largest medieval bells in Europe; the interior of the cathedral holds the tombs of Polish kings and saints. The dragon legend of Smok Wawelski — whose flame-breathing statue at the foot of the hill shoots real fire every few minutes — is part of the city's foundation mythology.",
            "6:00pm — Walk the Planty park (free) — the ring of green parkland that follows the line of the demolished medieval city walls. The full circuit is 4km and links all the major Old Town entry points.",
            "7:30pm — Dinner: Staropolska (Old Polish cuisine) at Restauracja Wierzynek (a restaurant that has operated since 1364 — one of the oldest restaurants in Europe) or budget option at Chimera Bar for Polish salad and soup bar (PLN 25–40, €6–9).",
          ],
          cost: "€20–35 total",
        },
        {
          day: "Day 2",
          title: "Auschwitz-Birkenau Memorial",
          items: [
            "7:00am — Depart Krakow early. The Auschwitz-Birkenau Memorial is 70km west of Krakow (1.5 hours by dedicated shuttle bus from the main Krakow bus station, €5–8 each way, or join an organised guided day tour from Krakow, €25–40 including transport and guide).",
            "9:00am — Auschwitz I (the main camp). Self-guided entry is free but guided tours (€5–15) are strongly recommended — the context and the witness accounts provided by trained guides transform the experience from sightseeing into something more important. IN SUMMER (April–October), you must pre-book a guided tour weeks — sometimes 6–8 weeks — in advance at auschwitz.org. This is non-negotiable. The site is the most visited museum in Poland with 2.3 million visitors in 2024.",
            "The exhibits in the Auschwitz I blocks document the systematic murder of 1.1 million people, primarily Jewish, between 1940 and 1945. The hair of victims, the shoes, the suitcases, the personal belongings — these exhibits are unlike anything else in European travel. No photographs are appropriate in certain rooms.",
            "12:00pm — Walk between Auschwitz I and Auschwitz II-Birkenau (3km, or a shuttle bus is provided). Birkenau is the larger extermination site — 175 hectares, over 300 wooden and brick barracks, the ruins of four crematoria blown up by the SS in January 1945. The scale is impossible to comprehend without standing in it.",
            "2:30pm — Return bus to Krakow.",
            "5:00pm — Evening free. Most visitors need quiet time after Auschwitz. Walk the Planty, sit by the Vistula river, or visit the National Museum (€8) for 19th-century Polish art — a contrast that is strangely appropriate.",
            "8:00pm — Simple dinner: pierogi at any restaurant near the Old Town. Eating somewhere modest feels right. PLN 25–35 (€6–8).",
          ],
          cost: "€20–40 total (including transport and entry)",
        },
        {
          day: "Day 3",
          title: "Wieliczka Salt Mine",
          items: [
            "9:00am — Wieliczka Salt Mine (13km east of Krakow, €30–40 with guided tour — the Tourist Route requires a guide). Take the minibus from outside Krakow Główny station (PLN 5) or the Wieliczka train (PLN 6). The salt mine has been continuously operated since the 13th century — it produced table salt until 2007 and is now a UNESCO World Heritage Site and one of the most extraordinary underground spaces accessible to tourists anywhere in the world.",
            "10:00am — The Tourist Route (3.5 km, 327 metres deep, 3 hours with guide). The mine descends through 9 levels. The first experience is the brine smell and the humidity; then the chambers begin to open. Everything in the mine is salt — the walls, the floor, the ceilings. The miners over seven centuries decorated their salt chambers with carved reliefs: biblical scenes, Polish kings, miners at work.",
            "The Chapel of St Kinga (the largest underground chapel in the world) is 54 metres long, 18 metres wide, and 12 metres high — entirely carved from salt. The chandeliers are salt crystals. The bas-relief altarpiece, carved by three miners over 67 years, depicts the Last Supper in salt. Underground concerts and weddings are held here; the acoustics are extraordinary.",
            "The underground lake in Chamber 19 — Weimar Lake — reflects the salt crystal formations on the ceiling, creating the effect of another chamber below your feet. No photograph does it justice.",
            "1:30pm — Return to Krakow. Lunch in Wieliczka village (PLN 25–35) or wait for Krakow.",
            "3:00pm — Afternoon in Kazimierz (Jewish Quarter of Krakow) — a 15-minute tram ride from the Old Town. The synagogues (Old Synagogue Museum, €8), the Jewish cemetery (Remuh Cemetery, €5, 500-year-old tombstones), and the main square (Plac Nowy) with its circular market building. Schindler's Factory Museum (€19) is in the adjacent Podgórze district — the actual factory where Oskar Schindler employed 1,200 Jewish workers to protect them from deportation.",
            "8:00pm — Dinner in Kazimierz: Klezmer-Hois for traditional Jewish cuisine (cholent, gefilte fish, PLN 50–70 mains) or any of the Plac Nowy cafés for cheap zapiekanka (open-face toasted baguette, PLN 8–12 — Krakow's street food of choice).",
          ],
          cost: "€30–55 total",
        },
        {
          day: "Day 4",
          title: "Kazimierz Deep Dive, Schindler's Factory & Farewell",
          items: [
            "9:00am — Kazimierz Jewish Quarter walking tour (self-guided, free; or guided tour €15–20 per person). The neighbourhood where Krakow's Jewish community lived for 500 years before 1939 — and where Steven Spielberg filmed Schindler's List in 1993. The physical location of the ghetto wall (a fragment still stands on Lwowska Street) and the sites connected to the Schindler story give Kazimierz a weight that combines with Auschwitz to form the most complete portrait of the Holocaust available anywhere.",
            "11:30am — Schindler's Factory Museum (Lipowa 4, €19, book online). The EMAS — the Krakow Beneath Nazi Occupation exhibition — uses the factory's original rooms to tell the story of the Nazi occupation of Krakow from 1939 to 1945. One of the finest history museums in Europe in terms of exhibition design. Budget 2 hours.",
            "1:30pm — Final pierogi lunch: Milkbar Pod Temidą or Bar Mleczny u Stasi (PLN 20–35 for a full meal — potato and cheese pierogi, borscht, a kompot drink). These places have not changed since 1975 and are not trying to.",
            "3:00pm — Last walk through the Old Town: the Barbican (free exterior, €8 inside), the Florian Gate (free), and a final circuit of Rynek Główny. Buy amber jewellery at the Cloth Hall or a bottle of Żubrówka bison grass vodka (PLN 35–45 for 500ml) to take home.",
            "5:00pm — Żywiec beer on a terrace overlooking the Market Square. The local beer is served in every bar; a half-litre costs PLN 10–16. Say goodbye to what is, per square kilometre of Old Town, one of the most historically significant cities in Europe.",
          ],
          cost: "€25–45 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€100–180/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town with a Historian & Wawel at Dusk",
          items: [
            "10:00am — Check into Hotel Wentzl (Rynek Główny 19 — directly on the Market Square) or Hotel Copernicus (Kanonicza, a 16th-century townhouse below Wawel Castle). Rooms from €100–180/night.",
            "11:00am — Private or small-group guided walking tour of the Old Town (€35–60/person, 3 hours). The best Krakow guides combine Jewish history, Polish royal history, Nazi occupation, and communist-era urban planning into a coherent arc that makes the city's architectural layers readable.",
            "2:00pm — Lunch at Cyrano de Bergerac (Slawkowska) — French-Polish bistro in an underground vaulted cellar. Foie gras, duck confit, excellent Polish wine list. €35–50/person.",
            "4:00pm — Wawel Castle royal apartments with audio guide (€17, book online). The Crown Treasury (crown jewels, PLN 35) is a separate ticket worth adding.",
            "6:30pm — Sunset over the Vistula river from the Wawel terrace. The view downstream toward the Kazimierz district in evening light is one of the finest urban vistas in central Europe.",
            "8:00pm — Dinner at Szara (Rynek Główny) — Polish-European cuisine with Market Square views. Duck breast with Krakow plum sauce, carp in almond butter. €35–45/person.",
          ],
          cost: "€130–200 total",
        },
        {
          day: "Day 2",
          title: "Auschwitz-Birkenau with a Private Guide",
          items: [
            "7:30am — Private guided Auschwitz tour with a licensed educator-guide (€180–250 for a small group, including transport from Krakow hotel). The difference between a private guide and a group tour at Auschwitz is significant — a private guide can move at your pace, address your questions in real time, and access certain areas with less crowding.",
            "9:00am — Auschwitz I with private guide. The guide's ability to contextualise each block's purpose, the historical chronology of the camp's expansion, and the individual stories of victims transforms the experience into something more comprehensible than a self-guided walk.",
            "12:30pm — Birkenau with 2 hours minimum — the scale of Auschwitz II requires walking, not rushing. The international monument at the end of the rail line, the ruins of the crematoria, the wooden barracks.",
            "4:00pm — Return to Krakow. Quiet dinner in Kazimierz: Singer Restaurant (Estery Street) — a Jewish cultural café with candlelight and live klezmer music Thursday–Saturday evenings. Simple food (PLN 40–60 mains) in one of the most atmospheric rooms in the city.",
          ],
          cost: "€150–250 total",
        },
        {
          day: "Day 3",
          title: "Wieliczka Salt Mine Premium & Kazimierz Evening",
          items: [
            "9:00am — Wieliczka Salt Mine Miners Route (separate from the Tourist Route, €50–70, maximum 8 people, must book well ahead). The miners' route goes deeper (level III–IV), includes areas closed to tourist groups, and requires a miner's lamp and helmet. It is the more immersive and physically demanding version of the mine.",
            "1:30pm — Return to Krakow. Lunch at Manzana (Rynek Główny area) for modern Polish food.",
            "3:30pm — Schindler's Factory Museum. At mid-range, hire a private guide specifically for the museum (€30–50 for 90 minutes) — the exhibition is dense and the context provided by a guide dramatically increases its impact.",
            "6:00pm — Kazimierz evening. Plac Nowy for the zapiekanka evening snack culture — the circular market building sells open-face baguettes from PLN 8–15, and the square fills with students, musicians, and locals from 7pm.",
            "8:00pm — Dinner at Miod Malina (Grodzka) — excellent Polish modern cuisine. Wild boar pâté, Tatra mountain trout, potato dumplings with sour cream. €30–45/person.",
          ],
          cost: "€130–200 total",
        },
        {
          day: "Day 4",
          title: "Tatra Mountains Day Trip or Royal Route",
          items: [
            "Option A — Tatra Mountains day trip (2.5 hours south by bus from Krakow, €10–15 return). Zakopane, Poland's mountain capital, is a wooden-architecture highland town with access to the High Tatras: Morskie Oko lake (a 9km return walk at PLN 0 trail cost), cable car to Kasprowy Wierch (PLN 80 return), and Gubalówka funicular for panoramic views (PLN 25 return). The highlander food culture — oscypek smoked sheep's cheese grilled on a fire, PLN 8 — is worth the trip alone.",
            "Option B — Stay in Krakow for a deeper dive. National Museum (€8, the Crown of Polish Art wing), Jagiellonian University Museum (€10 — the first university in Poland, where Copernicus studied in 1491), and the Czartoryski Museum (€10) for da Vinci's Lady with an Ermine — one of only three portraits by Leonardo in the world.",
            "Evening: Farewell dinner at Wentzl restaurant (Rynek Główny, 1 Michelin Bib Gourmand) — the best traditional Polish cuisine in the Old Town. Goose confit, crayfish bisque, bigos hunter's stew. €40–55/person. End the evening at Piwnica pod Baranami (cultural cabaret café, Rynek Główny) with a Polish craft vodka tasting.",
          ],
          cost: "€100–180 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€280–700/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Old Town & Fine Dining",
          items: [
            "Check into Hotel Stary (Szczepańska) — the finest hotel in Krakow, in a 15th-century palace one block from the Market Square. Rooms from €200–400/night. The rooftop pool overlooks the Wawel Castle walls.",
            "Private car from Krakow Balice Airport (€30, 20 minutes).",
            "3:00pm — Private 3-hour Old Town and Kazimierz tour with a senior historian (€200–300). The full arc from the Piast dynasty foundation to the Nazi occupation in the space of three hours of walking.",
            "7:00pm — Drinks at the Stary Hotel rooftop bar with Wawel Castle views.",
            "8:30pm — Dinner at Szara Gęś (Rynek Główny 17, 1 Michelin Bib Gourmand) — refined Polish seasonal cooking. Duck confit with black cabbage, pike with dill, wild mushroom cream sauce. €50–70/person with wine pairing.",
          ],
          cost: "€400–700 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Auschwitz with Private Educator",
          items: [
            "7:30am — Private VIP Auschwitz-Birkenau tour (€400–600 for a small private group with a senior licensed educator, including luxury car transport). This experience gives unhurried access and the educator's full attention throughout the full 6-hour visit.",
            "The difference at this level is not access to different physical spaces — the memorial is a public site — but the quality of guidance, the pace, and the private transport that means no shuttle bus queues.",
            "4:00pm — Return to Krakow. Spa at Hotel Stary — €150–200 for a 90-minute treatment.",
            "7:30pm — Private in-room or terrace dinner arranged by the hotel kitchen, or the Stary restaurant with a curated Polish wine and vodka pairing menu.",
          ],
          cost: "€600–900 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Wieliczka Private & Kazimierz Heritage",
          items: [
            "9:00am — Wieliczka Salt Mine exclusive private tour (book through the mine's Events department — €500–800 for a private group of up to 6, includes off-limits access to the Weimar and Erazm Barącz chambers). The private guide is a mine historian, not a standard tour guide.",
            "2:00pm — Schindler's Factory private curatorial visit (arrange through Krakow's cultural office, €200–300 for private access outside regular hours).",
            "6:00pm — Kazimierz private Jewish heritage walk with a rabbi or Jewish cultural scholar (€200–300, 2 hours). The experience of the Jewish Quarter as a lived space, not a museum exhibit.",
            "8:30pm — Dinner at Amarone (Krupnicza) — the best Italian-influenced kitchen in Krakow. Black truffle pasta, wagyu beef, exceptional imported wine list. €80–120/person.",
          ],
          cost: "€800–1,200 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Tatra Mountains Helicopter & Polish Farewell",
          items: [
            "8:00am — Helicopter to the Tatra Mountains (€800–1,200 for the round trip, 4 passengers). The aerial approach to Morskie Oko lake — the Tatras' most spectacular body of water — is extraordinary.",
            "10:00am — Morskie Oko lake by foot from the landing area (flat 2km walk). The mountain cirque surrounding it holds permanent snow even in July.",
            "1:00pm — Lunch at Karczma Bacówka restaurant in Zakopane — highland lamb, oscypek cheese, bigos stew in a traditional wooden sheepherder's hut. PLN 60–90/person.",
            "4:00pm — Helicopter return to Krakow.",
            "8:00pm — Farewell dinner at the best available Krakow table. The Polish fine dining scene has risen sharply in the last decade — Szara Gęś, Nolio, and Bottiglieria 1881 are the current standard-bearers. Bottiglieria 1881 (Bocheńska) is the most technically ambitious: a 7-course tasting menu (€80–100/person) in a former wine cellar.",
          ],
          cost: "€900–1,600 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€10–25",
      food: "€8–18",
      transport: "€3–8",
      activities: "€10–20",
      total: "€31–71/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€60–130",
      food: "€30–55",
      transport: "€10–20",
      activities: "€25–50",
      total: "€125–255/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200–400",
      food: "€80–200",
      transport: "€30–100",
      activities: "€80–200",
      total: "€390–900/day",
    },
  ],
  mistakes: [
    {
      icon: "🎟️",
      title: "Visiting Auschwitz Without Pre-Booking",
      desc: "Between April and October, Auschwitz-Birkenau sells out weeks — and in July sometimes 6–8 weeks — in advance. There is no walk-up admission for guided tours during these months; you book at auschwitz.org or you do not go. This mistake strands hundreds of visitors every week who discovered the booking requirement at the gate. Book the moment you fix your Krakow dates.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⛏️",
      title: "Skipping Wieliczka Salt Mine",
      desc: "Many travellers, already committed to Auschwitz as the 'heavy' day, skip Wieliczka as optional. It is not optional — it is one of the most extraordinary man-made underground spaces accessible to tourists anywhere in the world. The Chapel of St Kinga alone, carved entirely from salt by three miners over 67 years, is worth the trip to Krakow by itself. Set aside a full day.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🕍",
      title: "Rushing Through Kazimierz",
      desc: "Kazimierz is frequently treated as an afternoon add-on — 90 minutes, Old Synagogue tick, back to the Old Town. It needs 3–4 hours minimum, ideally a full day combined with Schindler's Factory. The neighbourhood holds 500 years of Jewish life, the story of the Holocaust in Krakow, the Schindler rescue, and a living contemporary culture of cafés, bookshops, and street art. It requires time to settle into.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "⏰",
      title: "Visit Auschwitz on a Morning Guided Tour",
      desc: "Afternoon light at Auschwitz-Birkenau is harsh and the site is more crowded by midday. A 9am start means cooler temperatures (important in summer), better photographic light, and the emotional experience of the site in quiet morning stillness rather than midday crowd noise. The morning tours also tend to have more experienced guides, who book the first slots.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "⛪",
      title: "Wieliczka Chapel: The Most Impressive Underground Space in Europe",
      desc: "The Chapel of St Kinga in Wieliczka Salt Mine holds regular Catholic services. The space is 54m long, 18m wide, and carved in its entirety from salt — walls, floor, altar, chandeliers, bas-reliefs, even a replica of the Last Supper carved directly into the salt wall. If you can find out the service schedule (ask the mine booking office), attending a short service in the chapel is an extraordinary experience.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🥟",
      title: "Eat Pierogi at a Milk Bar, Not a Restaurant",
      desc: "The traditional Polish bar mleczny (milk bar) charges PLN 8–12 for a plate of pierogi — the same dish that costs PLN 28–38 at a restaurant in the Old Town. The milk bar is a communist-era institution that survived because it filled a need: fast, filling, cheap, traditional food. Krakow has over a dozen operating milk bars. Bar Mleczny u Stasi (Mikołajska) and Pod Temidą (Grodzka) are the most praised. Order the ruskie (potato and cheese) or kapusta i grzyby (sauerkraut and mushroom).",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Do Indians need a Schengen visa for Poland?",
      a: "Yes. Poland is a full Schengen member. Indian passport holders need a short-stay Schengen C visa (€80, valid up to 90 days in 180). Apply through VFS Global or the Polish embassy at least 6 weeks before your travel date. The visa covers all 27 Schengen countries — if you are also visiting Czech Republic, Austria, or Germany, one application covers the entire trip. Apply to the embassy of the country where you will spend the most days.",
    },
    {
      q: "How do I book Auschwitz tickets?",
      a: "Book at auschwitz.org — the official memorial website. Between April and October, all visitors during peak hours (10am–3pm) must join a guided tour; guided tour tickets include entry. Choose between individual guided tours (€5–15 per person in groups of up to 30) or a Study Visit (deeper educational format, €25–40, 6–7 hours). Book as soon as your dates are fixed — July and August slots sell out 6–8 weeks in advance. Free self-guided entry is available before 9am and after 3pm, but only with a pre-registered timed entry ticket.",
    },
    {
      q: "Is Poland cheap compared to Western Europe?",
      a: "Dramatically cheaper. The Polish Zloty (PLN) trades at approximately €1 = PLN 4.30. A full restaurant meal in the Krakow Old Town: PLN 40–70 (€9–16). A pint of local Żywiec beer: PLN 10–16 (€2.30–3.70). A hostel dorm bed: PLN 50–80 (€12–19). A double room in a good 3-star hotel: PLN 250–450 (€58–105). Krakow is consistently rated one of the most affordable European city-break destinations for Western European and American visitors.",
    },
    {
      q: "Warsaw or Krakow — which should I visit?",
      a: "Krakow for medieval history, Auschwitz, Wieliczka, and the best-preserved Old Town in Poland. Warsaw for the communist-era architecture, the Warsaw Rising Museum, the rebuilt Royal Castle, and a more contemporary urban energy. Krakow is the more rewarding short trip (4 days covers everything). Warsaw rewards a longer visit and is better understood as a city deliberately rebuilt from rubble after 85% destruction in WWII — which gives it a completely different architectural and emotional character to Krakow.",
    },
    {
      q: "Is Krakow safe for tourists?",
      a: "Krakow is consistently rated one of the safest cities in central Europe. Petty theft exists in the Old Town in peak summer but is much lower than in Prague, Barcelona, or Rome. The main practical issue for some visitors is the stag-party tourism (Krakow is a major European bachelor party destination because of cheap alcohol) — this concentrates in certain bars and streets in the Old Town on Friday and Saturday nights. Kazimierz and the residential neighbourhoods are calm at all hours.",
    },
  ],
  combineWith: ["vienna-3-days", "prague-3-days", "budapest-3-days"],
  relatedSlugs: ["prague-3-days", "budapest-3-days", "stockholm-4-days", "bruges-3-days"],
  galleryQuery: "krakow poland old town wawel castle auschwitz wieliczka salt mine",
};

export const metadata: Metadata = {
  title: "Krakow in 4 Days: Old Town, Auschwitz, Salt Mine & Kazimierz (2026)",
  description: "4 complete Krakow plans: Wawel Castle, Auschwitz-Birkenau booking guide, Wieliczka Salt Mine, Kazimierz Jewish Quarter, Schindler's Factory — with real PLN costs, Schengen visa info for Indians, and pierogi milk bar tips.",
  keywords: ["krakow itinerary 4 days", "krakow travel guide 2026", "auschwitz booking guide", "wieliczka salt mine", "kazimierz krakow", "poland travel guide", "krakow budget travel"],
  openGraph: {
    title: "Krakow in 4 Days: Budget to Luxury 2026 Itinerary",
    description: "Old Town, Auschwitz, Wieliczka Salt Mine, Kazimierz — real PLN costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1562619425-c307bb637f05?w=1200&q=80", width: 1200, height: 630, alt: "Krakow Old Town Market Square Poland" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Krakow in 4 Days (2026)", description: "Auschwitz, Wieliczka, Kazimierz, real PLN costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/krakow-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Krakow in 4 Days: Old Town, Auschwitz, Salt Mine & Kazimierz (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1562619425-c307bb637f05?w=1200&q=80",
      description: "4 complete Krakow plans with Auschwitz booking guide, Wieliczka Salt Mine details, Kazimierz Jewish Quarter depth, and Polish visa information for every passport.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Krakow 4 Days", item: "https://www.incredibleitinerary.com/blog/krakow-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Krakow, Poland",
      description: "The best-preserved medieval city in Poland and gateway to Auschwitz-Birkenau and the Wieliczka Salt Mine — two UNESCO World Heritage Sites that between them tell the most important chapters of 20th-century human history.",
      geo: { "@type": "GeoCoordinates", latitude: 50.0647, longitude: 19.9450 },
      touristType: ["Cultural tourists", "History buffs", "Heritage travellers", "Budget travellers"],
    },
  ],
};

export default function KrakowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
