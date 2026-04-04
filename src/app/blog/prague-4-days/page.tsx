import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Prague",
  country: "Czech Republic",
  countryFlag: "🇨🇿",
  slug: "prague-4-days",
  heroQuery: "prague castle charles bridge czech republic old town",
  heroAlt: "Prague Castle and Charles Bridge reflected over the Vltava river at dawn Czech Republic",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Prague at 5:30am — Charles Bridge completely empty in the early mist, the castle glowing gold above the Vltava, not a selfie-stick in sight — is one of the most quietly stunning experiences in European travel. Four days gives you the medieval Old Town, the world's largest castle complex, a bone church made of 40,000 human skeletons, and enough time left over to drink a €2 Pilsner in Žižkov and understand why the Czechs lead the world in beer consumption per capita.",
  stats: { duration: "4 Days", budgetFrom: "€40", bestMonths: "Apr–Jun, Sep–Oct", airport: "PRG (Václav Havel)" },
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
        ["Schengen Visa Required", "The Czech Republic is a full Schengen member. Apply for a short-stay Schengen visa at the Czech embassy or via VFS Global. Fee: €80. Processing time: 15–45 days. Book your VFS appointment 4–6 weeks ahead — popular slots fill rapidly."],
        ["Key Documents", "Passport valid at least 3 months beyond your return date, bank statements showing a minimum €100/day, confirmed accommodation bookings, return flight tickets, employment letter or proof of business, and travel insurance with at least €30,000 medical coverage."],
        ["90/180 Day Rule", "A Schengen visa allows a maximum of 90 days within any 180-day rolling period across all Schengen countries combined. If you are combining Prague with Vienna, Budapest (not Schengen), or elsewhere in Europe, track your days carefully."],
        ["Travel Insurance", "Mandatory minimum €30,000 medical coverage for the visa application. Most Indian travel insurance policies meet this threshold — verify the exact coverage amount in the policy wording before applying."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter the Czech Republic (Schengen) visa-free for up to 90 days in any 180-day period. No pre-registration required."],
        ["ETIAS from 2025", "The EU ETIAS travel authorisation is required from 2025 for visa-exempt non-EU travelers (including USA, Canada, Australia). Cost: €7, valid 3 years. Apply at etias.eu.int before travel — takes under 10 minutes online."],
        ["UK Post-Brexit", "UK passport holders now enter under the visa-free 90/180-day Schengen rule and will require ETIAS. Ensure your passport has at least 6 months validity. Days in the Czech Republic count toward your total Schengen allowance."],
        ["Schengen Days", "All days spent across the entire Schengen Zone — Germany, Austria, France, etc. — count collectively toward your 90-day allowance. Track carefully if Prague is part of a larger European trip."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€40–65/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Square, Josefov & Charles Bridge",
          items: [
            "9:00am — Old Town Square (free): Prague's medieval centrepiece. Týn Church's twin Gothic towers dominate the skyline — free to enter the interior (open 10am–1pm, 3pm–5pm). The baroque St Nicholas Church on the square is equally beautiful and free.",
            "10:00am — Astronomical Clock (Orloj): The hourly procession of apostles is free to watch from below. For the best view of Old Town rooftops, climb the clock tower (250 CZK / ~€10). The clock itself dates to 1410 and is the third-oldest working astronomical clock in the world.",
            "11:30am — Josefov Jewish Quarter: The former Jewish ghetto contains six synagogues and the Old Jewish Cemetery — one of the oldest in Europe with tombs stacked 12 layers deep. The combo ticket covering all synagogues and cemetery costs approximately €20 and is worth every euro. The Old-New Synagogue (Europe's oldest active synagogue, 1270) is a separate ticket (€7).",
            "1:00pm — Lunch near Old Town: avoid the tourist traps on the square itself. Walk two streets east toward Dlouhá Street for svíčková (beef sirloin with cream sauce) at a local pub for 180–220 CZK (€7–9). Lokál on Dlouhá Street serves excellent svíčková and tank-fresh Pilsner Urquell.",
            "3:00pm — Walk through the Old Town lanes toward the river: discover Ungelt courtyard (behind Týn Church), the merchants' trading courtyard from the 11th century — architecturally pristine and largely unknown to quick-tour groups.",
            "5:30pm — Charles Bridge walk: Prague's most iconic structure (14th century, free always) is busiest at midday. Late afternoon in spring light is magical — the 30 Baroque statues cast long shadows and the castle above glows gold. If you can get here at 5:30am the next morning, that's even better.",
            "7:30pm — Evening beer in the Old Town area: walk one block off the square (literally one block) and prices drop from €8/pint to €2–3. Pub U Zlatého Tygra (Golden Tiger) on Husova Street — Bohumil Hrabal's famous pub — pours some of the best Pilsner Urquell in Prague.",
          ],
          cost: "€25–35 total (entry fees + food + beer)",
        },
        {
          day: "Day 2",
          title: "Prague Castle, Malá Strana & Petřín Hill",
          items: [
            "8:30am — Prague Castle (Pražský hrad): the largest ancient castle complex in the world by area (70,000 m²). The castle grounds and courtyards are free to enter at any time. For interiors — St Vitus Cathedral nave (free), Old Royal Palace, Basilica of St George, and Golden Lane — buy the Circuit B ticket: 350 CZK (~€14).",
            "9:00am — St Vitus Cathedral: the Gothic masterpiece began in 1344 and wasn't completed until 1929 — 585 years under construction. The nave and side aisles are freely accessible. The Art Nouveau stained glass windows by Alfons Mucha in the third chapel from the north are extraordinary. Climb the Great South Tower for views (150 CZK extra).",
            "11:00am — Golden Lane: a tiny street of colourful 16th-century cottages built into the castle fortifications. Franz Kafka lived at No. 22 in 1916–17. Now museum houses — included in the Circuit B ticket.",
            "12:30pm — Lunch in Malá Strana (Little Quarter): descend the castle steps into this beautifully preserved Baroque neighbourhood. U Malé Velryby (The Little Whale) on Maltézské náměstí serves honest Czech food at 150–250 CZK (€6–10). The Little Quarter is far less touristy than the Old Town and rewards wandering.",
            "2:30pm — Kampa Island: cross the Čertovka mill stream canal at Malá Strana to reach this quiet island below Charles Bridge. The John Lennon Wall (free) is nearby — less significant than the Charles Bridge but colourful and popular. Kampa Park has views up to the bridge and castle.",
            "4:00pm — Petřín Hill: a forested hill above Malá Strana with a miniature Eiffel Tower-style observation tower (150 CZK / ~€6 for the tower, free to walk up the hill itself). The funicular railway costs one standard Prague transport ticket (~30 CZK). The hilltop views over Prague's red-tiled rooftops are among the best in the city.",
            "7:00pm — Dinner back in Malá Strana or across the river in Smíchov — authentic neighbourhood restaurants at 200–300 CZK (€8–12) for a main course.",
          ],
          cost: "€20–30 total",
        },
        {
          day: "Day 3",
          title: "Day Trip — Kutná Hora or Český Krumlov",
          items: [
            "Option A — Kutná Hora (highly recommended, 1 hour by train, ~200 CZK / €8 return): A UNESCO World Heritage medieval silver-mining town 70km east of Prague. The Sedlec Ossuary (Bone Church) is genuinely unlike anything else in the world — a small 14th-century chapel where 40,000 human skeletons have been artistically arranged into chandeliers, coats of arms, and decorations (120 CZK / ~€5 entry). St Barbara's Cathedral is a masterpiece of late Gothic architecture and UNESCO-listed in its own right (free exterior, small interior fee). Allow the whole day.",
            "Option B — Český Krumlov (UNESCO, 3 hours by bus from Florenc bus terminal, ~300 CZK return): One of Europe's most beautifully preserved medieval towns in a meander of the Vltava river. The castle complex (second largest in Czech Republic) has free grounds and gardens — interior tours cost 300–450 CZK. The town itself is tiny enough to walk in 90 minutes, but the setting on the river bend is so photogenic you'll linger for hours. Better as an overnight if possible.",
            "Evening (if Kutná Hora): back in Prague by 5pm. Take the tram to Žižkov district — Prague's working-class neighbourhood and the undisputed home of the cheapest, best beer in Europe. Pivovary Lobkowicz and local pubs serve 0.5L Pilsner for 30–45 CZK (€1.20–1.80). The Žižkov Television Tower with its giant baby sculptures by David Černý (free to view, admission to the top 250 CZK) is nearby and surreal.",
            "Dinner in Žižkov: hospoda (pub) food at its best. Utopenci (pickled sausages in vinegar brine, 35 CZK), half-roasted duck with bread dumplings and red cabbage (280 CZK / ~€11). Total dinner including 3 beers: under €15.",
          ],
          cost: "€20–35 total (including day trip transport)",
        },
        {
          day: "Day 4",
          title: "Vinohrady, Wenceslas Square & National Museum",
          items: [
            "10:00am — Vinohrady district: Prague's most elegant residential neighbourhood, built in the late 19th century in Art Nouveau style. The neighbourhood radiates from náměstí Míru (Peace Square) and its neo-Gothic St Ludmila Church. Far fewer tourists than the historic centre — this is how actual Praguers live.",
            "11:00am — Vršovice: the adjacent hipster district with excellent independent coffee shops, vintage stores, and galleries. Café Sladkovský is a neighbourhood favourite for excellent espresso and homemade cakes.",
            "12:30pm — Walk up Wenceslas Square: technically a boulevard, not a square, stretching 750 metres from the National Museum to the Old Town. The site of the 1968 Prague Spring protests and the 1989 Velvet Revolution. The equestrian statue of St Wenceslas at the upper end is the traditional meeting point for all of Prague.",
            "2:00pm — National Museum (Národní muzeum): the neo-Renaissance building at the top of Wenceslas Square reopened after a major renovation. Natural history, Czech history, and mineralogy collections. Entry: 300 CZK (~€12). The building's interior staircase and Pantheon hall are worth seeing even if you rush the exhibits.",
            "4:00pm — Final Prague wander: the Nové Město (New Town) neighbourhood below Wenceslas Square contains the Art Nouveau Municipal House (Obecní dům) — free to enter the public areas, guided tours of the ceremonial halls available (290 CZK). The Powder Gate tower next door dates to 1475 and costs 150 CZK to climb.",
            "6:30pm — Farewell dinner: book a table at Lokál Hamburk in Vinohrady or Café Savoy in Malá Strana for a proper Czech meal — svíčková or roasted duck — with excellent Pilsner Urquell on draught. Budget 400–600 CZK (€16–24) for a meal with two beers.",
            "Note: Exchange Czech koruna (CZK) at a bank ATM upon arrival — airport kiosks and exchange booths on Old Town Square charge extortionate commission. The rate at airport ATMs using your bank card will be far better.",
          ],
          cost: "€25–40 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€130–220/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town with Prague Card & Fine Czech Dining",
          items: [
            "Check into a 3-star or boutique hotel in the Old Town or Malá Strana — aim for properties on quieter lanes away from the main square: Pension Unger (Celetná Street), Design Hotel Neruda, or Hotel Questenberk in Malá Strana. Budget €80–130/night for a comfortable room.",
            "Buy the Prague Card (€75): covers 50+ museums including Prague Castle (Circuit B), the National Museum, Municipal House, and unlimited public transport for 3 days. At the individual ticket prices, it pays for itself on Day 1.",
            "9:30am — Old Town Square and Astronomical Clock tower with the Prague Card skip-the-queue benefit. Spend the morning exploring the Jewish Quarter (all synagogues included in Prague Card).",
            "1:00pm — Lunch at Čestr restaurant on the Old Town side (whole roasted duck, svíčková, grilled Czech meats, 350–500 CZK / €14–20 for a main with a beer). One of Prague's best mid-range Czech restaurants.",
            "3:00pm — Afternoon guided walking tour of Old Town and Josefov with Context Travel or Prague Walks (€40–60/person, 2.5 hours). The best guides turn the medieval street plan into a layered historical narrative.",
            "7:30pm — Dinner at La Degustation Bohême Bourgeoise (one Michelin star) — the ultimate Czech fine-dining experience. Tasting menus built around traditional Bohemian recipes and seasonal Czech produce. 5-course menu ~3,500 CZK (€140). Book 2–3 weeks ahead.",
          ],
          cost: "€150–200 total",
        },
        {
          day: "Day 2",
          title: "Prague Castle & Malá Strana in Depth",
          items: [
            "8:30am — Prague Castle at opening (9am) with the Prague Card. Take the full Circuit B route at a measured pace — St Vitus Cathedral, Old Royal Palace, Golden Lane — with an audio guide or private guide.",
            "11:00am — Private 2-hour guide for Prague Castle (Context Travel or Rent-A-Guide, €80–120 for a private guide). The castle's history — from 9th-century Bohemian princes through Holy Roman Emperors to the Habsburgs and the Communist era — is far richer with expert commentary.",
            "1:00pm — Lunch at Café Savoy in Malá Strana: a beautifully restored neo-Renaissance café with an extraordinary painted ceiling, opened 1893. Neo-Renaissance interior, excellent Czech and Austrian cuisine. Svíčková, fish dishes, magnificent pastries. Expect 400–600 CZK (€16–24) for lunch.",
            "3:00pm — Petřín Hill and funicular. Optional: Strahov Monastery and its two magnificent baroque library halls (120 CZK) just above Malá Strana — the Library of Philosophy and Theology are among the most beautiful library interiors in Europe.",
            "5:30pm — Kampa Island and Charles Bridge at golden hour. This is the light photographers wait for.",
            "8:00pm — Dinner at Eska (Florenc area, 1 Michelin-recommended): modern Czech cooking using fermentation, local produce, and traditional techniques in an industrial-chic space. Excellent natural wine list. Mains 400–700 CZK (€16–28). Book ahead.",
          ],
          cost: "€170–220 total",
        },
        {
          day: "Day 3",
          title: "Kutná Hora Full Day + Žižkov Evening",
          items: [
            "7:30am — Train from Prague Hlavní nádraží (main station) to Kutná Hora (~200 CZK return). Trains run hourly, journey 55 minutes.",
            "9:00am — Sedlec Ossuary (Bone Church): arrive early to avoid school groups. The ossuary is genuinely extraordinary — give it 45 minutes, not the 15 that rushed tours allow. The adjacent Cathedral of the Assumption of Our Lady at Sedlec is free and worth 15 minutes.",
            "10:30am — Walk or take the local bus 1.5km to Kutná Hora's historic centre. The Italian Court (Vlašský dvůr) — the former royal mint where Prague Groschen coins were struck — tours available for 150 CZK.",
            "12:00pm — Lunch at the Harmonia restaurant in Kutná Hora town centre: excellent Czech pub food in a restored medieval building, ~250–350 CZK for a full meal.",
            "1:30pm — St Barbara's Cathedral (Gothic, UNESCO, 14th–15th century): the interior with its distinctive tent vaulting and Renaissance frescoes is one of the finest in Central Europe. Entry ~150 CZK.",
            "3:30pm — Return train to Prague. Arrive by 5pm.",
            "6:30pm — Žižkov evening: tram or metro to this authentic neighbourhood. Drinks at a pivnice (traditional pub) — try Blind Eye or Bukowski's Bar. Žižkov has more pubs per capita than anywhere in Prague. Dinner at a local hospoda for under 300 CZK including 3 beers.",
          ],
          cost: "€60–90 total",
        },
        {
          day: "Day 4",
          title: "Vinohrady, Shopping & Farewell Dinner",
          items: [
            "10:00am — Farmers' market at náměstí Míru in Vinohrady (Saturdays and Wednesdays): excellent local produce, Czech pastries, artisan cheeses. A proper Praguers' market.",
            "11:30am — Vinohrady and Žižkov neighbourhood walk: Art Nouveau apartment buildings, independent coffee shops (Kavárna co Hledá Jméno for outstanding espresso), vintage boutiques, the remarkable Church of the Most Sacred Heart of Our Lord (1932) — a cubist church with a giant transparent glass clock face.",
            "1:00pm — Lunch at Eska or at one of the excellent Vietnamese restaurants in the Žižkov area (Prague has a large Vietnamese community — the banh mi and pho are exceptional and very cheap, 120–180 CZK).",
            "3:00pm — Shopping in the Old Town: Manufaktura (Czech crystal, folk art, and natural cosmetics), the Cubist ceramics and furniture at the Museum of Czech Cubism shop, Rott House for quality Czech crystal.",
            "5:00pm — Final sunset walk: Letná Park above the Vltava bend (tram to Letenské náměstí) — the giant beer garden here has one of Prague's best city panoramas and serves tankové pivo for 45 CZK.",
            "8:00pm — Farewell dinner at Maso a Kobliha (Meat and Doughnut) in Holešovice or at Restaurant Lokál Hamburk in Vinohrady — acclaimed for the best svíčková in the city, immaculate tank Pilsner Urquell, and full Czech classics. Budget 600–900 CZK (€24–36) for a full dinner with wine.",
          ],
          cost: "€80–120 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€350–900/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Old Town & Michelin Dinner",
          items: [
            "Check in to the Four Seasons Prague (on the Vltava embankment with castle views, €500–1,200/night), the Mandarin Oriental Prague (a 14th-century monastery in Malá Strana, €450–900/night), or the Augustine by Marriott (another converted monastery in Malá Strana, €300–700/night).",
            "Private transfer from PRG airport: Limo Service Prague or Schwarzenberg Chauffeur, €60–90.",
            "Afternoon: private art history walk through the Old Town and Josefov with a specialist guide from Context Travel or a professor-guide from Charles University. 3 hours, €150–200/person.",
            "7:00pm — Pre-dinner drinks at the Hemingway Bar (Karoliny Světlé Street) — widely considered one of the best cocktail bars in Europe. Cocktails €15–25. The bar specialises in pre-Prohibition recipes; the Sidecar and the Aviation here are definitive.",
            "8:30pm — Dinner at La Degustation Bohême Bourgeoise (one Michelin star): 8-course Bohemian tasting menu with wine pairing, approximately 7,000 CZK (€280) per person. One of Central Europe's most thoughtful restaurants — Czech culinary heritage reimagined at the highest level.",
          ],
          cost: "€350–500 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Prague Castle & Malá Strana",
          items: [
            "8:00am — Private guide for Prague Castle before general opening (specialist access available through select luxury concierge services, €300–500 for a private morning). The castle with no visitors in the courtyards is a fundamentally different experience.",
            "St Vitus Cathedral interior with an art historian: the window by Alfons Mucha, the Royal Mausoleum of the Habsburgs, the Gothic choir — all explained in their historical depth.",
            "12:00pm — Lunch at Bellevue Restaurant on the Smetanovo Embankment: panoramic views of Charles Bridge and the castle from a beautifully restored 1920s Art Deco dining room. Modern Central European cuisine, excellent wine list, €60–90 per person for a 3-course lunch.",
            "3:00pm — Strahov Monastery library private visit (premium access bookable through the monastery): photography permitted in the extraordinary Baroque library halls (normally restricted). The 17th and 18th-century library interiors — globes, illuminated manuscripts, carved woodwork — are among the most beautiful in the world.",
            "7:00pm — Evening boat dinner cruise on the Vltava (Prague Boats luxury cruises, €120–180 per person with multi-course dinner and wine) — the castle and Charles Bridge illuminated from the water at night.",
          ],
          cost: "€500–800 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Kutná Hora Private Tour & Spa Evening",
          items: [
            "8:30am — Private car and specialist guide to Kutná Hora (€250–350 for private guide + car). Arrive at Sedlec Ossuary before it opens to the public at 9am — with private access via advance arrangement, you may view the chapel in silence.",
            "10:00am — St Barbara's Cathedral private visit: the cathedral guide provides scholarly context for the extraordinary Late Gothic vault paintings and Renaissance frescoes. The silver-mine history that funded this cathedral — Kutná Hora was once one of the richest cities in Europe — is a remarkable story.",
            "12:30pm — Lunch at a Kutná Hora restaurant followed by wine tasting at a Bohemian winery (Vinné sklepy Kutná Hora, near the cathedral).",
            "3:00pm — Private car back to Prague. Afternoon at leisure.",
            "5:30pm — Spa at the Four Seasons or Mandarin Oriental: the Mandarin's spa in a 14th-century Gothic cellar is one of Europe's most atmospheric hotel spas. 90-minute treatment from €180.",
            "8:00pm — Dinner at Field Restaurant (Michelin-starred): modern Czech cuisine using hyper-local ingredients from Czech farms and forests. Tasting menu ~5,000 CZK (€200) per person with wine pairing. The kitchen's approach to seasonal Czech ingredients is the most exciting in Prague.",
          ],
          cost: "€600–900 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Bohemian Classics & Farewell",
          items: [
            "10:00am — Morning at the Prague Museum of Decorative Arts (UPM) in Josefov: exquisite collections of Bohemian glass, Art Nouveau furniture, and applied arts. One of the most underrated museums in Central Europe. Entry 200 CZK.",
            "12:00pm — Farewell lunch at Alcron Restaurant (Radisson Blu Alcron Hotel): one of Prague's oldest grand restaurants in a stunning Art Deco room. The seafood and Czech game dishes are outstanding. €80–120 per person for a full lunch.",
            "2:00pm — Specialist shopping: Lobmeyr crystal (Czech glass at its finest), Preciosa crystal, Moser glass gallery on Na Příkopě. Czech crystal and Bohemian glass are among the finest in the world and excellent value even at the luxury end.",
            "4:30pm — Final walk: Josefov quarter as the afternoon light falls across the Old Jewish Cemetery. The quality of light here in the late afternoon — filtering through the elder trees and onto 12 layers of tilted gravestones — is unforgettable.",
            "Private evening departure transfer. Prague Airport, Terminal 2, is 30 minutes from the centre.",
          ],
          cost: "€400–600 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€15–28", food: "€10–18", transport: "€3–8", activities: "€10–20", total: "€40–75/day" },
    { tier: "✨ Mid-Range", accommodation: "€70–130", food: "€25–45", transport: "€10–15", activities: "€20–40", total: "€130–230/day" },
    { tier: "💎 Luxury", accommodation: "€300–1,200", food: "€80–250", transport: "€30–80", activities: "€60–150", total: "€470–1,680/day" },
  ],
  mistakes: [
    { icon: "🍺", title: "Drinking Beer on Old Town Square", desc: "Tourist bars and restaurants on Old Town Square charge €6–8 for a 0.5L Pilsner. Walk one block in any direction — literally one block — and the same beer costs €1.50–2. Prague's best pubs are all off the square: Lokál on Dlouhá, U Zlatého Tygra on Husova, and any hospoda in Žižkov or Vinohrady.", color: "bg-red-50 border-red-200" },
    { icon: "💀", title: "Skipping the Kutná Hora Bone Church", desc: "The Sedlec Ossuary is one of the most extraordinary places in Europe — 40,000 human skeletons arranged into art and architecture — and it is only 1 hour from Prague by train. The entry fee is €5. Countless Prague visitors skip it and regret it. Schedule it for Day 3 without hesitation.", color: "bg-orange-50 border-orange-200" },
    { icon: "📅", title: "Visiting in July and August", desc: "July and August bring the heaviest tourist volumes to Prague in the entire calendar year. Charles Bridge becomes impassable at midday. The castle queues stretch for an hour. Accommodation prices double. Prague in April, May, September, or October is dramatically more pleasant — the city is equally beautiful and functions as a city again rather than as a theme park.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "💱", title: "Exchanging Money at Airport Kiosks or Old Town Square Booths", desc: "The exchange booths at Václav Havel Airport and on Old Town Square charge commission rates of 10–20% — some advertise 'zero commission' but use a drastically worse exchange rate. Simply withdraw Czech koruna (CZK) from a standard bank ATM on arrival using your debit card. The rate will be close to the interbank rate. Never use exchange kiosks.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🌅", title: "Charles Bridge at 5:30am", desc: "The most photographed structure in Prague is also one of the most crowded — by 10am it is shoulder-to-shoulder with tour groups. At 5:30am in spring and summer, Charles Bridge is completely empty, enveloped in Vltava mist, with the castle catching the first light above. This is one of the genuinely great travel moments in Europe and costs nothing except an early alarm.", color: "bg-amber-50 border-amber-200" },
    { icon: "🎟️", title: "The Prague Card Covers the Castle", desc: "The Prague Card (€75 for 3 days) includes unlimited public transport plus Prague Castle Circuit B (~€14), the National Museum (~€12), Municipal House, Strahov Monastery gallery, and 50 other attractions. If you visit the castle, 3–4 museums, and use public transport, it pays for itself on Day 1. Buy it online before arrival for a small discount.", color: "bg-teal-50 border-teal-200" },
    { icon: "📡", title: "The Žižkov TV Tower Baby Sculptures at Night", desc: "The Žižkov Television Tower is Prague's most controversial monument — a 216-metre Brutalist tower completed in 1992. Artist David Černý later attached 10 giant metallic babies crawling up and down the exterior. At night, lit from below, the effect is genuinely surreal. The neighbourhood around the tower (Žižkov) is also Prague's most authentic and cheapest for beer and food.", color: "bg-green-50 border-green-200" },
    { icon: "🍖", title: "Order Svíčková at Lokál for the Real Experience", desc: "Svíčková na smetaně — beef sirloin braised in root vegetables, served with bread dumplings, cream sauce, cranberry jelly, and a wedge of lemon — is the definitive Czech dish. The best version in a tourist-accessible setting is at Lokál on Dlouhá Street in the Old Town. A full portion with a 0.5L Pilsner Urquell from the tank costs under €12. This is Czech cooking at its finest.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Is Prague still cheap in 2026?", a: "Prague remains significantly cheaper than Western European capitals — a beer costs €1.50–2 in a local pub, a full Czech lunch costs €6–10, and a hostel bed is €15–25/night. However, the tourist centre (Old Town Square, Charles Bridge area) has narrowed the price gap: restaurants directly on the tourist trail are now at Western European prices. The solution is simple: walk one block." },
    { q: "Do Indian passport holders need a Schengen visa for Prague?", a: "Yes. The Czech Republic is a full Schengen member and Indian passport holders must apply for a Schengen short-stay visa (€80 fee) before traveling. Processing takes 15–45 days at the Czech embassy or VFS Global. Prepare bank statements showing €100+/day, confirmed hotel bookings, return tickets, and travel insurance with minimum €30,000 coverage." },
    { q: "What is the best time to visit Prague?", a: "April–June and September–October. Spring brings warm days, outdoor café culture, and the city at its most photogenic. September is arguably the finest month — crowds drop significantly, accommodation is cheaper, and the autumn light on the Baroque rooftops is extraordinary. Avoid July and August if possible; the tourist density makes the historic centre genuinely unpleasant." },
    { q: "Prague vs Krakow vs Budapest — which should I choose?", a: "All three are excellent — Prague has the most spectacular medieval architecture and the richest beer culture; Krakow has the best Jewish Quarter and is the most walkable; Budapest has the most dramatic cityscape (Parliament on the Danube) and the unique thermal bath culture. Prague's Old Town is the most intact medieval city centre in Central Europe. For a first visit to the region, Prague edges ahead purely on visual drama." },
    { q: "Is Czech beer really the best in the world?", a: "The Czechs consume more beer per capita than any other nation on earth — 184 litres per person per year. Czech lager — specifically the Bohemian pilsner style originated in Plzeň (Pilsen) in 1842 — is the template from which all modern lager descended. Pilsner Urquell from the tank in a Prague pub is a genuinely superior product to the same brand exported in a bottle. If you drink beer at all, this is worth experiencing seriously." },
    { q: "Is Prague safe for solo travelers and women?", a: "Prague is one of the safest capitals in Europe for solo travelers. The main practical concerns are pickpockets in the Old Town area and Charles Bridge (standard big-city caution), and occasional aggressive touts outside the tourist strip. The city is very walkable late at night in most areas. Solo women travelers consistently rate Prague as very safe with standard urban precautions." },
  ],
  combineWith: ["vienna-4-days", "budapest-4-days", "krakow-3-days"],
  relatedSlugs: ["vienna-4-days", "budapest-4-days", "amsterdam-4-days", "berlin-4-days"],
  galleryQuery: "prague castle charles bridge old town vltava river czech republic",
};

export const metadata: Metadata = {
  title: "Prague in 4 Days: Castle, Charles Bridge, Old Town & the Best Beer in Europe (2026)",
  description: "4 complete Prague itineraries — Budget (€40/day) to Luxury — with Prague Castle strategy, the Kutná Hora Bone Church, Charles Bridge at dawn, and where to drink €2 Pilsner away from the tourist traps.",
  keywords: ["prague itinerary 4 days", "prague travel guide 2026", "prague budget travel", "charles bridge guide", "kutna hora bone church", "prague castle tickets", "czech republic travel"],
  openGraph: {
    title: "Prague in 4 Days: Castle, Charles Bridge & Czech Beer (2026)",
    description: "Prague Castle strategy, the Kutná Hora Bone Church, Charles Bridge at 5:30am, and where to drink €2 Pilsner away from the tourist traps.",
    images: [{ url: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80", width: 1200, height: 630, alt: "Prague Castle and Charles Bridge at dawn Czech Republic" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Prague in 4 Days (2026)", description: "Castle, Charles Bridge, Bone Church, €2 beer. Full itinerary." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/prague-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Prague in 4 Days: Castle, Charles Bridge, Old Town & the Best Beer in Europe (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80",
      description: "4 complete Prague itineraries — budget to luxury — with castle strategy, Bone Church, and real Czech beer culture.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Prague 4 Days", item: "https://www.incredibleitinerary.com/blog/prague-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Prague, Czech Republic",
      description: "The capital of the Czech Republic — home to the world's largest castle complex, medieval Charles Bridge, the Astronomical Clock, and Europe's greatest beer culture.",
      touristType: ["Cultural tourists", "Architecture enthusiasts", "Beer lovers", "History buffs"],
      geo: { "@type": "GeoCoordinates", latitude: 50.0755, longitude: 14.4378 },
    },
  ],
};

export default function PraguePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
