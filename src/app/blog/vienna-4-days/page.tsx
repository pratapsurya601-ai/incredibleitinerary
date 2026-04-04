import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Vienna",
  country: "Austria",
  countryFlag: "🇦🇹",
  slug: "vienna-4-days",
  heroQuery: "vienna schonbrunn palace austria coffee house opera",
  heroAlt: "Schönbrunn Palace facade with formal gardens and Gloriette hilltop Vienna Austria",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "15 min read",
  intro: "Vienna operates at a frequency all its own. The Hofburg Palace, the Vienna Philharmonic, Klimt's The Kiss, the coffee houses where Freud and Mahler debated the nature of the world over a Melange — this is a city that invented the idea of high European culture and has been refining it ever since. Four days gives you the imperial palaces, Schönbrunn, the Belvedere with The Kiss, standing-room at the State Opera for €3, and enough time for the day trip to Salzburg that unlocks Mozart, the Sound of Music, and a medieval fortress in the Alps.",
  stats: { duration: "4 Days", budgetFrom: "€55", bestMonths: "Apr–Jun, Sep–Nov", airport: "VIE (Vienna International)" },
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
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["Schengen Visa Required", "Austria is a full Schengen member. Indian passport holders must apply for a Schengen short-stay visa at the Austrian embassy or via VFS Global before traveling. Application fee: €80. Processing time: 15–45 days. Apply at least 6 weeks before departure — appointment slots at VFS fill 4–6 weeks out."],
        ["Key Documents", "Passport valid at least 3 months beyond your return date, bank statements demonstrating €100+/day, confirmed hotel bookings, return flights, employment letter or business registration, and travel insurance with minimum €30,000 medical coverage."],
        ["90/180 Day Rule", "A Schengen visa covers a maximum 90-day stay within any 180-day rolling period across all Schengen countries combined. Vienna + Prague + Salzburg all draw from the same 90-day allowance. Plan your Europe itinerary accordingly."],
        ["Travel Insurance", "Minimum €30,000 medical coverage is mandatory for the visa application. Verify the coverage amount explicitly in your policy document — the summary page alone is not sufficient evidence."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter Austria (Schengen) visa-free for up to 90 days in any 180-day period. No pre-registration currently required."],
        ["ETIAS from 2025", "ETIAS travel authorisation (€7, valid 3 years) is required from 2025 for visa-exempt non-EU travelers entering Schengen countries including Austria. Apply at etias.eu.int before travel — the online process takes under 10 minutes."],
        ["UK Post-Brexit", "UK passport holders enter under the visa-free 90/180-day Schengen rule and require ETIAS from 2025. Ensure at least 6 months passport validity remains. Days in Austria, Germany, and all Schengen countries count together toward your 90-day allowance."],
        ["Schengen Days Count", "If combining Vienna with other Schengen destinations — Germany, Italy, France, Switzerland — all days across all countries accumulate toward the single 90-day limit in any 180-day window. Track carefully on longer European trips."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€55–90/day",
      days: [
        {
          day: "Day 1",
          title: "Stephansdom, Hofburg & the Imperial Ring",
          items: [
            "9:00am — Stephansdom (St Stephen's Cathedral): Vienna's Gothic cathedral at the heart of the 1st district has been the city's symbolic centre since the 14th century. The exterior with its polychrome Zsolnay-tiled roof is free to view. Interior free; the North Tower (climb by lift, €5.90) or South Tower (365 steps, free for the hardiest) offer views over the city's low-rise Baroque skyline.",
            "10:30am — Graben and Kohlmarkt: Vienna's two finest pedestrian shopping streets radiating from Stephansplatz. The Graben's Baroque Plague Column (Pestsäule), erected 1693 to mark the end of the Black Death, is one of the most important Baroque monuments in Central Europe. Both streets are free to walk; window-shopping the luxury brands (Rolex, Louis Vuitton, Demel patisserie) costs nothing.",
            "11:30am — Hofburg Palace: the massive former winter residence of the Habsburg dynasty — 2,600 rooms, 54 doorways, 19 courtyards, spanning 7 centuries of construction. The palace courtyards and the Heldenplatz (Heroes' Square) are always free. For interiors: the Imperial Apartments, Sisi Museum (dedicated to Empress Elisabeth), and the Imperial Silver Collection are combined in a single ticket: €17.50 per person. Allows 1.5–2 hours.",
            "1:30pm — Lunch in the 1st district: Figlmüller on Wollzeile serves the definitive Vienna Schnitzel (breaded veal or pork, hammered thin and fried in clarified butter) for €16–22. The queue is usually 20–30 minutes but moves fast — worth it. Alternatively, Zum Wohl wine bar serves open-face sandwiches (Belegte Brote) with Austrian wine at much lower prices.",
            "3:30pm — Burgring and MuseumsQuartier: walk the Ringstraße — the grand boulevard Emperor Franz Joseph I ordered built around the old city walls in the 1860s, creating one of the finest sequences of 19th-century civic architecture in Europe. The State Opera, Kunsthistorisches Museum, Natural History Museum, Parliament, City Hall, Burgtheater — all visible from the Ring walk (free). Enter the MuseumsQuartier courtyard (always free) — one of the best public spaces in Vienna.",
            "6:00pm — Vienna State Opera standing tickets: the Wiener Staatsoper, one of the world's top opera houses, sells standing room tickets (Stehplatz) on the day of performance. Queue forms at 4pm at the Stehplatz entrance (Operngasse side). Tickets go on sale 80 minutes before curtain: €3 (parterre standing) to €12 (gallery standing). This is genuinely world-class opera — Vienna Philharmonic in the pit — at an extraordinary price.",
            "After the opera — coffee at Café Central (Herrengasse): one of Vienna's grandest coffee houses, in a vaulted Gothic arcade, open until 10pm. A Melange (Viennese coffee with steamed milk) costs €5–6. Trotzt Freud used to sit here.",
          ],
          cost: "€30–50 total",
        },
        {
          day: "Day 2",
          title: "Schönbrunn Palace, Naschmarkt & the Museums",
          items: [
            "9:00am — Schönbrunn Palace (UNESCO World Heritage): the Habsburg summer residence, 1,441 rooms, in Baroque yellow on the western outskirts of Vienna. The Grand Tour (40 rooms, audio guide included): €25.50. Arrive at 9am opening to beat the tour groups that begin arriving at 10:30am. The State Apartments — Maria Theresa's bedroom, the Great Gallery where Mozart performed aged 6, Napoleon's Room — are superbly preserved.",
            "10:30am — Gloriette: the imposing triumphal arch-colonnade on the hilltop above Schönbrunn, built 1775. Walk up through the formal gardens (free) for the finest panoramic view in Vienna — the palace in the foreground, the city stretching to the distant hills. The Gloriette interior (small coffee shop and viewing platform) costs €5; the walk up through the gardens is always free.",
            "12:30pm — Naschmarkt: Vienna's most famous market, running 1.5km along the Wienzeile, open Monday to Saturday. The food stalls (Turkish, Greek, Austrian, Middle Eastern) serve excellent cheap lunches — a proper lunch of pickled herring, bread, and an Austrian Sturm (young cloudy wine, seasonal) costs €6–10. The Saturday flea market attached to the western end of the Naschmarkt is excellent for vintage Vienna memorabilia.",
            "2:30pm — MuseumsQuartier: the Leopold Museum (€15) houses the world's largest Egon Schiele collection — the most important Austrian Expressionist after Klimt. Also major Klimt works, Oskar Kokoschka, and Richard Gerstl. The MUMOK — Museum of Modern Art (€14) — has one of Central Europe's finest contemporary art collections. Both museums are in the same complex; a combined ticket saves slightly.",
            "5:30pm — Mariahilfer Straße: Vienna's main shopping boulevard, a 20-minute walk from the MuseumsQuartier. Coffee at Café Hawelka (Dorotheergasse) — a legendary Viennese coffee house, opened 1939, the gathering point of Vienna's post-war artistic and literary scene. Dark, smoky, unchanged, a cup of Brauner (black coffee with a drop of cream) costs €4.",
            "8:00pm — Dinner in the Mariahilf or Neubau (7th) districts: both are local residential neighbourhoods away from tourist inflation. Fiaker (Gumpendorfer Straße) for classic Viennese cuisine at honest prices — Tafelspitz (boiled beef with chive sauce, €18), Apfelstrudel (€5.50). The 7th district around Burggasse has excellent independent restaurants at €12–20 for mains.",
          ],
          cost: "€45–65 total",
        },
        {
          day: "Day 3",
          title: "Day Trip to Salzburg — Mozart, the Fortress & the Alps",
          items: [
            "7:00am — OBB train from Wien Hauptbahnhof to Salzburg: 2h20min on the Railjet, tickets from €29 if booked online in advance (up to €59 at short notice). Trains run hourly. Book at oebb.at.",
            "9:30am — Arrive Salzburg Hauptbahnhof. Walk or take a local bus to the Altstadt (Old Town). Salzburg's compact historic centre on the Salzach River is entirely walkable.",
            "10:00am — Getreidegasse: the main shopping street of the Altstadt, lined with wrought-iron guild signs. Mozart's Birthplace (Mozarts Geburtshaus) at No. 9 is the yellow house where Wolfgang Amadeus Mozart was born in 1756. Entry ~€12; the apartment where he lived until age 17 is preserved with original instruments and scores.",
            "11:30am — Hohensalzburg Fortress (Festung Hohensalzburg): the largest fully preserved medieval castle in Central Europe, towering over the Old Town on a 120-metre cliff. Funicular or walk up (free, 15 minutes). Basic entry €13.50 (including funicular), full fortress tour with museums €18.50. The view from the ramparts over the alpine cityscape is magnificent.",
            "1:00pm — Lunch in the Altstadt: St Peter Stiftsrestaurant (allegedly Europe's oldest restaurant, operating since 803 AD) for traditional Austrian food ~€20–30, or cheaper: sausage at a Wurstlstand in the Universitätsplatz open-air market (€3–5).",
            "2:00pm — Mirabellgarten: the formal Baroque garden of Mirabell Palace, free to enter, and one of the filming locations for The Sound of Music (the 'Do Re Mi' scene was filmed here). The Pegasus Fountain and the Dwarf Garden are particular highlights.",
            "3:00pm — Salzburg Museum in the New Residence (€9) or the DomQuartier (€15, combines Cathedral, Residence, and panoramic walkway). The Salzburg Cathedral is free to enter.",
            "5:30pm — Train back to Vienna. Arrive ~7:50pm.",
            "8:30pm — Light dinner in Vienna — soup and bread at a coffee house or a Würstelstand sausage stand (Vienna's street food institution, €3–5 for a grilled sausage with mustard and a roll).",
          ],
          cost: "€55–80 total (including return train and Salzburg entry fees)",
        },
        {
          day: "Day 4",
          title: "Belvedere Palace, Kunsthistorisches & Vienna Farewell",
          items: [
            "9:30am — Upper Belvedere Palace (Oberes Belvedere): the summer palace of Prince Eugene of Savoy (1723) now houses Austria's finest art museum. The permanent collection contains Klimt's The Kiss (Der Kuss, 1907–08) — one of the most recognisable paintings in the world. Also major works by Egon Schiele and Oskar Kokoschka. Entry €20 (Upper Belvedere alone) or €29 combined with Lower Belvedere. Book online to skip the queue.",
            "11:30am — Belvedere Gardens (free): the formal Baroque gardens between the Upper and Lower Belvedere palaces, with tiered fountains and sphinx sculptures. In spring, the parterres of the Lower Belvedere garden bloom spectacularly.",
            "1:00pm — Kunsthistorisches Museum (KHM): one of the world's great art museums in a purpose-built 1891 imperial palace. The collections — Egyptian Antiquities, Greek and Roman Antiquities, the Kunstkammer, and an extraordinary picture gallery including Vermeer's The Art of Painting, Dürer's portraits, Bruegel's Hunters in the Snow, and Raphael's Madonna of the Meadow — require 2–3 hours minimum. Entry €21.",
            "3:30pm — Vienna State Opera exterior: admire the 1869 neo-Renaissance building on the Ring. If you attended a performance yesterday evening, revisit the opera quarter in daylight for the full architectural effect. The guided tour of the interior (€9, available in multiple languages, 40 minutes) covers the auditorium, foyer, Grand Staircase, and Tea Salon.",
            "5:00pm — Café Central or Café Landtmann farewell coffee: the Viennese coffee house (Wiener Kaffeehaus) is a UNESCO Intangible Cultural Heritage and a genuinely distinct institution — a place to read, write, meet, or do nothing for hours without being hurried. Order a Melange (coffee with steamed milk foam, €5–6), read the complimentary newspapers (all on wooden sticks at the counter), and understand why these places have operated continuously since the 17th century.",
            "6:30pm — Prater park and Riesenrad: the 1897 giant Ferris wheel in the Prater amusement park (€13, 15-minute rotation) offers a distinctive view over Vienna's flat eastern districts. The Prater itself (the large park surrounding the amusement area) is entirely free and beautiful for an evening walk.",
            "8:00pm — Final Vienna dinner: Hotel Sacher restaurant for Tafelspitz (the definitive Viennese boiled beef, €28–35), or Gasthaus Pöschl (Weihburggasse) for honest, excellent Austrian cooking without tourist markup — Wiener Schnitzel, Zwiebelrostbraten (roast beef with fried onions), Mohnstrudel (poppy seed strudel). Expect €20–30 for a full meal with a glass of Grüner Veltliner.",
          ],
          cost: "€50–80 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€160–280/day",
      days: [
        {
          day: "Day 1",
          title: "Imperial Vienna with Guided Tour & Opera",
          items: [
            "Check into a 4-star hotel in the 1st district (Innere Stadt) or just outside: Hotel Kaiserin Elisabeth (near Stephansdom, €150–250/night), Das Triest (Naschmarkt area, design hotel, €180–280/night), or Hotel Imperial Vienna (the former royal palace on the Ring, €350–500/night).",
            "10:00am — Private or small-group walking tour of the Innere Stadt (1st district) with Context Travel Vienna (~€70/person, 3 hours). The guide's navigation of Vienna's layered history — Habsburg court, the Vienna Secession art movement, Red Vienna social democracy, the Nazi Anschluss — transforms the Ring's buildings from impressive to meaningful.",
            "1:00pm — Lunch at Café Schwarzenberg on the Ring: one of Vienna's most elegantly traditional coffeehouses, established 1861, with excellent Austrian lunch dishes (Tafelspitz, Zwiebelrostbraten, Gulasch) at €18–28 for mains. The coffee house atmosphere on the Ringstraße is properly Viennese.",
            "3:00pm — Hofburg Imperial Apartments, Sisi Museum, and Silver Collection (€17.50 combined): the suite of state rooms, the obsessive Sisi Museum (Empress Elisabeth was Victorian Europe's most complex royal figure and a proto-modern celebrity long before her assassination in 1898), and the extraordinary 7,000-piece imperial silver service.",
            "5:30pm — Demel Patisserie (Kohlmarkt 14): Vienna's oldest and grandest cake shop, established 1786, former purveyor to the Imperial Court. Sachertorte slice (€6.50), Apfelstrudel (€5.80), Altwiener Zuckerbäckerei (traditional Viennese sugar pastry). The mirrored interior with white-coated staff is a piece of living Vienna history.",
            "7:30pm — State Opera: book orchestra or balcony seats in advance through the Staatsoper website (€25–120 for reserved seats, depending on production and position). Attending a Vienna State Opera performance with a proper seat — black tie optional but atmospheric — is one of the finest cultural evenings available to any traveler.",
          ],
          cost: "€180–250 total",
        },
        {
          day: "Day 2",
          title: "Schönbrunn Full Day & Naschmarkt Lunch",
          items: [
            "9:00am — Schönbrunn Palace Grand Tour at opening time with audio guide included. Follow all 40 state rooms at a measured pace — Maria Theresa's private apartment, the Hall of Mirrors, the Great Gallery, the Ceremonial Hall.",
            "11:00am — Gloriette hilltop café: after the palace tour, walk up through the formal gardens to the Gloriette. The café inside serves coffee and pastries with the finest view in Vienna. Worth the €5 entry to the viewing platform.",
            "12:30pm — Naschmarkt for lunch: have a proper sit-down lunch at a market stall — Stall 512 for excellent Austrian sausage and cheese plates, or the Turkish and Middle Eastern vendors for more substantial plates at €8–15.",
            "2:30pm — Secession Building (€9.50): the 1897 Art Nouveau exhibition building designed by Josef Maria Olbrich — the gilded sphere on top (referred to by Viennese as 'the golden cabbage') houses Klimt's Beethoven Frieze (1902) in the basement — 34 metres of gilded and painted wall representing a sequence from Beethoven's 9th Symphony. One of the most important Art Nouveau works in the world and surprisingly little-visited.",
            "5:00pm — Café Schwarzenberg or Landtmann for coffee and Kuchen (cake): the Café Landtmann (Dr Karl Lueger Ring) is Sigmund Freud's former regular table — he lived around the corner on Berggasse 19 (now the Freud Museum, €14).",
            "7:30pm — Dinner at Steirereck im Stadtpark: one of the world's 50 best restaurants — Austrian-alpine cooking at its highest level. The set dinner menus run €160–210/person with wine pairing. Reserve 4–6 weeks ahead. The restaurant's location in the Stadtpark (City Park) with views over the lake adds to the experience.",
          ],
          cost: "€200–280 total",
        },
        {
          day: "Day 3",
          title: "Salzburg Day Trip — First Class Train",
          items: [
            "6:45am — First Class OBB Railjet from Wien Hauptbahnhof to Salzburg (€49–89 first class, book in advance). First class includes complimentary breakfast service and significantly more comfortable seating for the 2h20min journey.",
            "9:10am — Arrive Salzburg. Private car or taxi from station to the Altstadt (~€10).",
            "9:30am — Mozart's Birthplace and Residence: both are worth visiting. The Birthplace (Getreidegasse 9) covers his early life; the Residence (Makartplatz 8) covers his return to Salzburg as a mature composer and his fraught relationship with Archbishop Colloredo. Combined ticket ~€20.",
            "12:00pm — Lunch at Carpe Diem (Getreidegasse 50): an excellent modern Austrian restaurant on the main pedestrian street, owned by Red Bull founder Dietrich Mateschitz. Signature 'Cones' (tiny savoury cones with innovative fillings) and excellent Austrian mains. Expect €40–55 for a full lunch.",
            "2:00pm — Hohensalzburg Fortress full tour with audio guide (~€18.50). The fortress's history as the seat of the Prince-Archbishops who ruled Salzburg as an independent ecclesiastical state until Napoleon is richly detailed.",
            "4:00pm — Hellbrunn Palace (7km from centre, 20-minute bus or taxi): the 17th-century pleasure palace of Archbishop Markus Sittikus, famous for its trick water fountains that the Archbishop used to drench his guests. Entry ~€15.50. One of the most original Baroque gardens in Europe.",
            "6:30pm — Return Railjet to Vienna. Arrive ~8:50pm.",
            "9:30pm — Late supper at a Viennese wine bar in the 6th or 7th district: Weingut Wieninger am Nussberg (in the wine-growing hills north of Vienna, day trip) or in the city — Vinothek W for Austrian wine by the glass with excellent Austrian cheese and cold-cut plates.",
          ],
          cost: "€180–250 total",
        },
        {
          day: "Day 4",
          title: "Kunsthistorisches, Belvedere & Farewell Dinner",
          items: [
            "9:30am — Kunsthistorisches Museum (€21): allow 2.5 hours for the picture gallery alone. The Brueghels, the Vermeer, the Raphael, the Titian — this is one of the world's top 10 collections of Old Master painting assembled in a single building.",
            "12:00pm — Lunch at the KHM café on the mezzanine level — lunching under the museum's spectacular painted ceiling dome (designed by Klimt in his early decorative period) is a distinctly Viennese pleasure.",
            "2:00pm — Upper Belvedere for Klimt's The Kiss and the Austrian Expressionist collection. Book online to guarantee entry time.",
            "4:00pm — Viennese coffee house finale: Café Central (Herrengasse 14) in the arched Gothic hall of the former Palais Ferstel. Order a Verlängerter (extended Melange), a slice of Dobostorte, and claim a marble table for the afternoon.",
            "6:00pm — Vienna Philharmonic: if your dates align with the Vienna Philharmonic concert season (September–June), single tickets for the Musikverein (the golden concert hall where all New Year's Day concerts are recorded) can occasionally be obtained same-day from returns at the box office, or in advance through the Philharmoniker website. Standing room: €6. Balcony: €15–50. Regular seats: €60–200+.",
            "8:30pm — Farewell dinner at Meixner's Gastwirtschaft (Buchengasse, 10th district) or Zum Wohl wine bar for unpretentious but excellent Austrian food at real local prices — not the tourist-oriented restaurants of the 1st district. Gulasch, Schnitzel, Viennese beef liver (Leber Berliner Art), and a Grüner Veltliner from the Wachau. Budget €35–55 for a full dinner with wine.",
          ],
          cost: "€160–230 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€450–1,200/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Vienna & State Opera Gala",
          items: [
            "Check in to Hotel Sacher Wien (directly behind the State Opera, the most famous hotel in Vienna, €450–1,100/night), Hotel Imperial Vienna (a Habsburg palace converted to a hotel in 1873, €500–1,200/night), or the Rosewood Vienna (newly opened in a restored 19th-century landmark, €600–1,400/night).",
            "Private transfer from VIE airport: Blacklane Vienna or hotel car service, €80–120.",
            "Afternoon: private art history tour of the Innere Stadt, Ring, and Secession with a specialist art historian from Context Travel or the Kunsthistorisches Museum (€200–300/person, 3 hours). This is the kind of guide who knows which of the Brueghels to stand in front of for 10 minutes and why.",
            "6:30pm — Pre-opera drinks at the Bar im Hotel Sacher or the Imperial Bar at Hotel Imperial: two of Europe's most storied hotel bars. Champagne coupe before the performance: €30–45.",
            "8:00pm — Vienna State Opera: premium orchestra seats (Parkett, Reihe 1–10) run €120–200+. The Vienna Philharmonic plays in the pit for most main productions. Experience the full Habsburg ceremonial of Vienna's opera culture — the Grand Staircase, the interval champagne in the marble foyer.",
          ],
          cost: "€500–700 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Schönbrunn & Kunsthistorisches",
          items: [
            "8:30am — Schönbrunn Palace private early morning access (through luxury tour operator, before general opening at 9am): the state rooms and Hall of Mirrors with no other visitors, with a specialist Habsburg historian. Available through Context Travel Vienna or premium concierge. €400–600 for a private small-group.",
            "Gloriette private breakfast: the café inside the Gloriette can arrange pre-opening private breakfasts with the city panorama — through the palace authority's event services.",
            "12:30pm — Lunch at Steirereck im Stadtpark (World's 50 Best): book the lunch service (slightly shorter than dinner but same kitchen). 5-course lunch with wine pairing ~€180–220/person.",
            "3:00pm — Kunsthistorisches Museum private tour with a museum curator or specialist guide: 2 hours through the picture gallery and Kunstkammer with scholarly commentary. Available through Context Travel or the KHM's own education department. €150–200/person.",
            "6:00pm — Vienna Philharmonic at the Musikverein: the Goldener Saal (Golden Hall) — arguably the finest concert hall acoustics in the world, where every New Year's Day concert is broadcast globally — hosts the main Philharmonic season. Premium orchestra tickets €80–200. Book through the Philharmoniker website 4–6 months ahead for popular programs.",
            "9:30pm — Late dinner at Konstantin Filippou (two Michelin stars, Austria's most acclaimed chef): modern Austrian-Mediterranean cooking of extraordinary precision. Tasting menu with Austrian wine pairing €250–350/person. Reserve 3–4 weeks ahead.",
          ],
          cost: "€700–1,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Salzburg Private Tour with Mozart & Sound of Music",
          items: [
            "7:00am — Private car to Salzburg: 3-hour road journey through Lower Austria and over the Salzkammergut region — the alpine landscape east of Salzburg that appears in The Sound of Music's opening. With a private driver, stops at scenic viewpoints are possible.",
            "10:00am — Private specialist guide in Salzburg for the full day (~€300–400): Mozart's Birthplace and Residence in full depth, with access to the private archive rooms not open to standard visitors.",
            "Hohensalzburg Fortress private tour: the fortress with a specialist medieval historian covers the Prince-Archbishop's private apartments and the chapter history that no standard tour touches.",
            "12:30pm — Lunch at Carpe Diem for a 5-course Austrian innovation menu with wine pairing from the Salzburg wine shop, ~€100–140/person.",
            "2:30pm — Sound of Music private filming location tour by private car: Hellbrunn Palace (opening credits), Leopoldskron Palace (exterior shots of the Von Trapp villa, private estate but visible from the road), the Nonnberg Abbey, and the Mondsee Church (the wedding scene). With a specialist guide, 3 hours, €200–300.",
            "6:00pm — Return to Vienna by private car or first-class train.",
            "9:00pm — Dinner at Silvio Nickol Gourmet Restaurant (Palais Coburg, one Michelin star, two forks): one of Vienna's most elegant dining rooms in the former Coburg Palace, with the finest Austrian wine list in the city. Tasting menu ~€200–280/person.",
          ],
          cost: "€700–1,000 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Belvedere, Bespoke & Vienna Farewell",
          items: [
            "10:00am — Upper Belvedere VIP opening (premium ticket, before standard public entry, through Belvedere museum events): Klimt's The Kiss with the gallery to yourself. The painting's gold leaf, the lovers' embrace, and the flower-meadow are one of the most intimate works in European painting and almost impossible to experience alone at normal opening hours.",
            "12:00pm — Farewell lunch at Restaurant Anna Sacher (Hotel Sacher basement): the most private and refined dining room in Vienna, serving traditional Viennese cuisine at its finest. Original Sachertorte served here since 1832. 3-course lunch ~€80–110/person.",
            "2:30pm — Specialist shopping: Lobmeyr Glashandlung (Kärntner Straße 26, Vienna crystal since 1823, chandeliers for the New York Met Opera), J & L Lobmeyr gift items from €30; Wein & Co or Vinothek W for Riesling and Grüner Veltliner from the Wachau to take home; Demel Patisserie for a box of Viennese confections (Mozartkugeln, Kandierte Veilchen, Mohnkipferl) beautifully boxed.",
            "5:00pm — Final coffee at Café Schwarzenberg on the Ring: claim a window table looking onto the Ringstraße, order a Kleiner Brauner, and watch Vienna's evening begin. Freud, Mahler, and Wittgenstein have all done exactly this.",
            "Private departure transfer to VIE — the airport is 25 minutes by CAT (City Airport Train, €14.90) or 15–20 minutes by private car. Both comfortable; the private car allows luggage directly from the hotel lobby.",
          ],
          cost: "€500–700 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–40", food: "€15–25", transport: "€5–12", activities: "€15–35", total: "€55–112/day" },
    { tier: "✨ Mid-Range", accommodation: "€120–200", food: "€40–70", transport: "€15–25", activities: "€35–60", total: "€210–355/day" },
    { tier: "💎 Luxury", accommodation: "€400–1,200", food: "€100–350", transport: "€40–120", activities: "€80–200", total: "€620–1,870/day" },
  ],
  mistakes: [
    { icon: "🚂", title: "Skipping the Salzburg Day Trip", desc: "Vienna and Salzburg are 2 hours 20 minutes apart by direct Railjet train and the combination is one of the great European travel pairings. Salzburg — Mozart's birthplace, the Hohensalzburg Fortress, the Sound of Music locations, and one of Europe's finest preserved Baroque city centres — deserves a full day. If you are in Vienna for 4 days and skip Salzburg, you will regret it.", color: "bg-red-50 border-red-200" },
    { icon: "🎭", title: "Missing the State Opera Standing Tickets", desc: "The Vienna State Opera — one of the world's three or four finest opera houses, with the Vienna Philharmonic in the pit — sells Stehplatz (standing room) tickets on the day of performance for €3–12. These are genuine tickets to the actual performance, not a viewing gallery. Queue at the Operngasse side door at 4pm; tickets go on sale 80 minutes before curtain. This is possibly the best value in European culture.", color: "bg-orange-50 border-orange-200" },
    { icon: "☕", title: "Rushing Through Coffee Houses to Eat", desc: "The Viennese coffee house (Kaffeehaus) is a UNESCO Intangible Cultural Heritage — recognised as a specific cultural practice, not just a café. The whole point of Café Central, Café Schwarzenberg, or Café Landtmann is to order a single Melange and stay for two hours reading the newspaper, writing letters, or simply watching Vienna. Ordering food and rushing out misses the entire institution.", color: "bg-yellow-50 border-yellow-200" },
  ],
  tips: [
    { icon: "🎼", title: "State Opera Standing Tickets Are the Most Affordable World-Class Opera Available Anywhere", desc: "€3 for a parterre standing position at the Vienna State Opera, with the Vienna Philharmonic — the orchestra that recorded most of the canonical opera repertoire on Deutsche Grammophon — in the pit. Queue forms at 4pm at the Stehplatz door (Operngasse side), tickets sold 80 minutes before curtain. Standing in the parterre gives you sight lines into the orchestra pit and a direct view of the stage. Bring comfortable shoes and arrive before 5:30pm in peak season.", color: "bg-amber-50 border-amber-200" },
    { icon: "🥦", title: "Naschmarkt Saturday Morning Is Vienna at Its Most Alive", desc: "The Naschmarkt on Saturday morning combines the regular food stalls (open Monday–Saturday) with the massive Saturday flea market that extends along the western section. Austrian farmers sell directly from their stalls; Viennese families do their weekly shopping; the Turkish and Greek stalls do their busiest business. Arrive by 9am. By 11am it becomes crowded; by 1pm it is full. This is the best free experience in Vienna.", color: "bg-teal-50 border-teal-200" },
    { icon: "🏰", title: "Schönbrunn at 9am — Beat the Tour Groups by 90 Minutes", desc: "Schönbrunn Palace opens at 9am. The tour buses from Vienna's main hotels begin arriving at 10:30–11am. If you arrive at 9am, you walk through Maria Theresa's bedroom and the Hall of Mirrors with 20 people. By 11am, the same rooms contain 200. The palace interior is dramatically better before 10:30am — this is not a minor difference.", color: "bg-green-50 border-green-200" },
  ],
  faqs: [
    { q: "Is Vienna or Salzburg better for a visit?", a: "They are complementary, not competing. Vienna is the imperial capital — Habsburg palaces, world-class museums, the Philharmonic, the opera, the coffee house culture — a full 4-day city experience. Salzburg is compact (you can walk the Old Town in 90 minutes) and best experienced as a day trip from Vienna or as one night. The ideal Central Europe trip combines 4 days Vienna + 1 overnight Salzburg." },
    { q: "Do Indian passport holders need a Schengen visa for Vienna?", a: "Yes. Austria is a full Schengen member and Indian passport holders must apply for a Schengen short-stay visa (€80 fee) before traveling. Apply at the Austrian embassy or VFS Global with at least 6 weeks lead time. Required documents: bank statements (€100+/day), confirmed hotel bookings, return flights, employment letter, and travel insurance with minimum €30,000 medical coverage." },
    { q: "Where exactly are the Sound of Music filming locations?", a: "Salzburg is the primary setting. Key locations: the Nonnberg Abbey (opening shot, exterior); the Mirabell Garden (Do Re Mi staircase and fountain); Hellbrunn Palace (used for the opening sequence); Leopoldskron Palace (exterior of the Von Trapp family home — a private estate, but photographable from the road); Mondsee Church (the wedding). The actual Von Trapp family estate is the Leopoldskron. Multiple Sound of Music bus tours run daily from Salzburg's Mirabellplatz." },
    { q: "How do I get tickets for the Vienna Philharmonic?", a: "The Vienna Philharmonic at the Musikverein (the Golden Hall) operates a subscription system that is heavily oversubscribed. Single-ticket sales for non-subscribers open online in October for the following season (September–June). Popular programs (New Year's Eve, New Year's Day, Brahms, Beethoven cycles) sell out within minutes of going on sale. Set an alarm for the exact on-sale time. Standing room (Stehplatz, €6) is sold at the box office on the day of performance from 10am. This is significantly easier to obtain and remains an extraordinary experience." },
    { q: "Which is the best Viennese coffee house?", a: "For pure historical atmosphere: Café Central (Herrengasse) — the vaulted Gothic arcades, marble pillars, and the waxwork of Peter Altenberg at his regular table are definitive. For unchanged authenticity: Café Hawelka (Dorotheergasse) — virtually nothing has changed since Friederike Hawelka opened it in 1939. For location and prestige: Café Landtmann (adjacent to the Burgtheater, Freud's regular table). All three serve the full Viennese coffee house menu: Melange, Kleiner Brauner, Verlängerter, Einspänner (black coffee in a glass with whipped cream), Wiener Eiskaffee." },
  ],
  combineWith: ["prague-4-days", "budapest-4-days", "salzburg-2-days"],
  relatedSlugs: ["prague-4-days", "budapest-4-days", "munich-3-days", "florence-3-days"],
  galleryQuery: "vienna schonbrunn palace hofburg belvedere state opera ringstrasse austria",
};

export const metadata: Metadata = {
  title: "Vienna in 4 Days: Palaces, Opera, Coffee Houses & a Salzburg Day Trip (2026)",
  description: "4 complete Vienna itineraries — Budget (€55/day) to Luxury — with State Opera standing ticket strategy, Schönbrunn Palace guide, Klimt's The Kiss at the Belvedere, and the full Salzburg day trip.",
  keywords: ["vienna itinerary 4 days", "vienna travel guide 2026", "state opera standing tickets", "schonbrunn palace guide", "salzburg day trip from vienna", "austria travel", "klimt kiss belvedere"],
  openGraph: {
    title: "Vienna in 4 Days: Palaces, Opera & Salzburg Day Trip (2026)",
    description: "State Opera €3 standing tickets, Schönbrunn at 9am, Klimt's The Kiss, and the Salzburg day trip — 4 plans from €55/day.",
    images: [{ url: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80", width: 1200, height: 630, alt: "Schönbrunn Palace with formal gardens Vienna Austria" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Vienna in 4 Days (2026)", description: "Opera, palaces, coffee houses, Salzburg day trip — full guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/vienna-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Vienna in 4 Days: Palaces, Opera, Coffee Houses & a Salzburg Day Trip (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80",
      description: "4 complete Vienna itineraries — budget to luxury — with State Opera standing tickets, Schönbrunn strategy, Klimt's The Kiss, and the Salzburg day trip.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Vienna 4 Days", item: "https://www.incredibleitinerary.com/blog/vienna-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Vienna, Austria",
      description: "The capital of Austria and former heart of the Habsburg Empire — home to Schönbrunn Palace, the Vienna State Opera, the Kunsthistorisches Museum, the Vienna Philharmonic, Klimt's The Kiss, and the world's finest coffee house culture.",
      touristType: ["Cultural tourists", "Music lovers", "Architecture enthusiasts", "Food lovers", "Art collectors"],
      geo: { "@type": "GeoCoordinates", latitude: 48.2082, longitude: 16.3738 },
    },
  ],
};

export default function ViennaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
