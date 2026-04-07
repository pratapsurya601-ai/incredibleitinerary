import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Budapest",
  country: "Hungary",
  countryFlag: "🇭🇺",
  slug: "budapest-4-days",
  heroQuery: "budapest parliament hungary danube night lights",
  heroAlt: "Budapest Parliament Building illuminated at night reflected in the Danube river Hungary",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Budapest at night from the Buda Castle Hill — the Parliament Building blazing white gold across the Danube, the Chain Bridge strung with lights between two hills, the river running black below — is one of the great urban views on earth. Four days gives you soaking in Széchenyi Baths with a chess game on the side, ruin bars in crumbling Austro-Hungarian palaces, the most decorative Parliament in Europe, and enough time left over to take the train to Eger and drink wine straight from a barrel in a hillside cellar.",
  stats: { duration: "4 Days", budgetFrom: "€38", bestMonths: "Apr–Jun, Sep–Oct", airport: "BUD (Budapest Ferenc Liszt)" },
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
        ["Schengen Visa Required", "Hungary is a full Schengen member. Indian passport holders must apply for a Schengen short-stay visa at the Hungarian embassy or via VFS Global before traveling. Application fee: €80. Processing: 15–45 days. Apply at least 6 weeks ahead in peak season (May–September)."],
        ["Key Documents", "Passport valid at least 3 months beyond your return date, bank statements showing €100+/day, confirmed hotel bookings, return flight tickets, employment letter or business proof, and travel insurance with minimum €30,000 medical coverage."],
        ["90/180 Day Rule", "A Schengen visa covers a maximum 90-day stay in any 180-day period across all Schengen countries combined. If combining Budapest with Prague (Schengen) or Vienna (Schengen), all days count toward the same allowance. Note: Hungary will join the Schengen border-free zone fully — verify current status before travel."],
        ["Travel Insurance", "Minimum €30,000 medical coverage is a mandatory visa requirement. Ensure your policy explicitly states the €30,000 minimum — check the policy wording, not just the summary."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter Hungary visa-free for up to 90 days in any 180-day Schengen period. No pre-registration required currently."],
        ["ETIAS from 2025", "ETIAS travel authorisation is required from 2025 for visa-exempt non-EU travelers entering Schengen countries including Hungary. Cost: €7, valid 3 years. Apply at etias.eu.int — the process takes minutes."],
        ["UK Post-Brexit", "UK passport holders enter under the visa-free 90/180-day rule and will need ETIAS from 2025. Ensure passport validity of at least 6 months. Days in Hungary count toward total Schengen days."],
        ["Currency Note", "Hungary uses the Hungarian Forint (HUF), not the Euro. Budapest is very affordable — budget travelers can live excellently on €38–50/day. Use bank ATMs for forints; avoid exchange booths at the airport or tourist areas."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€38–60/day",
      days: [
        {
          day: "Day 1",
          title: "Buda Castle Hill, Fisherman's Bastion & Danube",
          items: [
            "9:00am — Castle Hill (free to walk up via the stairways from Clark Ádám tér or the funicular, ~800 HUF / €2). The hilltop promenade overlooking Pest and the Danube is one of Europe's great free viewpoints. The Buda Castle complex (Royal Palace) houses the Hungarian National Gallery and the Budapest History Museum — entry to each ~3,000 HUF (€8).",
            "9:30am — Matthias Church (Mátyás-templom): the 13th-century Gothic church with its famous multicolored Zsolnay tile roof, completely rebuilt in the late 19th century. Entry: ~1,800 HUF (€5). The interior with its neo-Gothic frescoes covering every surface is genuinely extraordinary.",
            "11:00am — Fisherman's Bastion (Halászbástya): the fairy-tale neo-Romanesque terrace built in 1895–1902 has seven towers representing the seven Magyar chieftains who led the Hungarian tribes into the Carpathian Basin. Lower terrace access is free; the upper walkway costs ~1,500 HUF (€4.50). The view across the Danube to the Parliament Building is one of the most photographed in Europe.",
            "1:00pm — Lunch in the Castle District: the restaurants immediately around Fisherman's Bastion are significantly overpriced. Descend the hill to Buda's Víziváros (Watertown) neighbourhood or cross to Pest for better value. A bowl of gulyás (goulash) at a local étkezde (canteen) costs 800–1,200 HUF (€2–3.50).",
            "3:00pm — Chain Bridge walk (Széchenyi Lánchíd): the first permanent bridge across the Danube in Budapest, completed 1849, and one of the most beautiful bridge designs in Europe. The walk takes 10 minutes and is free.",
            "5:30pm — Parliament Building exterior: the Hungarian Parliament on the Pest embankment — completed in 1902, designed by Imre Steindl, 268 metres long — is the third-largest parliament building in the world. The exterior is most spectacular at dusk when the white limestone catches the last light, and after dark when it is fully illuminated. Exterior viewing is always free.",
            "8:00pm — Dinner in the Jewish Quarter (7th district): one of Budapest's most vibrant neighbourhoods. A full Hungarian meal — goulash, pörkölt (meat stew), stuffed cabbage — at a local vendéglő costs 2,000–3,500 HUF (€5–10).",
          ],
          cost: "€20–30 total",
        },
        {
          day: "Day 2",
          title: "Széchenyi Baths, Heroes' Square & Great Market Hall",
          items: [
            "9:00am — Széchenyi Thermal Baths (Széchenyi gyógyfürdő): Budapest's largest and most famous public bath complex, opened 1913, in a neo-Baroque building in City Park. Entry including use of all 18 pools (indoor and outdoor): 8,200–9,800 HUF (€22–27) depending on day and services. Bring your own swimsuit — locker rental included in the base ticket. Arrive when it opens at 9am to avoid the worst crowds.",
            "11:30am — Széchenyi outdoor pools: the famous chess players on floating boards are a fixture on sunny days. The outdoor thermal pool at 38°C surrounded by the neo-Baroque building is the quintessential Budapest experience. Give yourself a full 2–3 hours.",
            "1:30pm — Heroes' Square (Hősök tere): just outside the baths, this UNESCO-listed millennium monument was built in 1896 to celebrate 1,000 years of Hungarian statehood. The 36-metre central column topped by the Archangel Gabriel, flanked by the seven chieftains on horseback, is imposing and completely free.",
            "2:00pm — Vajdahunyad Castle (free): the extraordinary architectural folly on the lake in City Park — a single building designed to display every major Hungarian architectural style from Romanesque to Baroque — built for the 1896 millennium exhibition. It became so popular they built a permanent version. Completely free to walk around and through.",
            "3:30pm — Great Market Hall (Központi Vásárcsarnok): Budapest's largest and most beautiful covered market, built in 1897, on the Pest embankment at the end of Váci Street. Entry is free. Ground floor: Hungarian salami, paprika, pickles, fresh produce. First floor: tourist stalls and a row of food counters serving lángos (deep-fried dough with sour cream and cheese, 800–1,200 HUF / €2–3.50) — the essential Budapest street food.",
            "5:00pm — Váci Street and inner Pest: one of Budapest's main pedestrian streets, connecting the market to the centre. Touristy but architecturally rich.",
            "8:00pm — Dinner at a neighbourhood étkezde in the 7th or 8th district for authentic Hungarian food at local prices — pörkölt, töltött káposzta (stuffed cabbage), halászlé (fisherman's soup) for 1,500–2,500 HUF (€4–7).",
          ],
          cost: "€30–45 total",
        },
        {
          day: "Day 3",
          title: "Jewish Quarter, Ruin Bars & the Opera",
          items: [
            "10:00am — Great Synagogue (Dohány Street Synagogue): the largest synagogue in Europe and the second-largest in the world — seating 3,000, built 1854–59 in a Moorish-Byzantine style. Entry: ~6,500 HUF (€18). The attached Hungarian Jewish Museum and the Memorial Garden (with a weeping willow memorial by Imre Varga commemorating the victims of the Budapest ghetto) make for an emotionally significant visit.",
            "12:30pm — Jewish Quarter lunch: the 7th district (Erzsébetváros) has some of Budapest's best cheap eating. Kazinczy Street has several excellent vendors. Carmel Restaurant serves Israeli-Hungarian fusion in the heart of the quarter. Budget 2,500–4,000 HUF (€7–11) for a proper meal.",
            "2:00pm — Ruin bars daytime exploration: the ruin bars of Budapest — built in abandoned buildings and courtyards that were left to decay after WW2 and the Communist era — are one of the most culturally distinctive experiences in Europe. In the afternoon before they open as bars, you can walk through the courtyards and appreciate the installations. Szimpla Kert on Kazinczy Street is the original and still the most interesting architecturally.",
            "3:30pm — Hungarian State Opera House (Magyar Állami Operaház): the ornate 1884 neo-Renaissance building on Andrássy Avenue is one of the finest opera houses in the world by acoustic and architectural standards. The exterior is always free to admire. Guided tours of the interior: ~4,500 HUF (€13). For evening performances, tickets range from €8 standing to €60+ for premium seats — one of the best-value world-class opera houses in Europe.",
            "5:00pm — Andrássy Avenue: Budapest's grand boulevard, UNESCO-listed, lined with neo-Renaissance palaces, embassies, and the Opera House. The House of Terror (Terror Háza) at No. 60 — the former headquarters of both the Arrow Cross fascist regime and the Communist secret police — is the most sobering museum in Budapest. Entry ~4,000 HUF (€11).",
            "8:00pm — Evening in the ruin bars: Szimpla Kert opens around 6pm and is at its best 8–10pm before it becomes a club. Fogas Ház and Instant/Fogas are nearby and larger. Craft beers from Hungarian microbreweries cost 1,200–1,800 HUF (€3.50–5). The ruin bar scene is genuinely unique to Budapest.",
          ],
          cost: "€25–40 total",
        },
        {
          day: "Day 4",
          title: "Margaret Island, Gellért & Farewell Goulash",
          items: [
            "9:00am — Margaret Island (Margit-sziget): a 2.5km island in the middle of the Danube, connected by bridges to both Buda and Pest. Completely free. The island is a park with ruins of a 13th-century Dominican convent, a Franciscan church, a musical fountain, a small open-air theatre, thermal spring (warm water flows from the ground freely), and a Japanese garden. Rent a bicycle (800 HUF/hour) to explore the full length.",
            "11:00am — Gellért Hill and Citadella: the steep hill rising 235 metres above the Danube on the Buda side is topped by the Soviet-era Liberty Statue (a woman holding a palm leaf, visible from everywhere in the city) and the 19th-century Citadella fortress. The climb takes 20–30 minutes and is free. The panoramic view over the full Budapest cityscape — both banks of the Danube, every bridge, Parliament, and the Castle Hill — is the best in the city.",
            "1:00pm — Gellért Thermal Baths (optional): the magnificent Art Nouveau thermal bath attached to the Gellért Hotel on the Buda embankment. Entry ~8,500–10,000 HUF (€24–28). The indoor main pool with its ornate mosaic, vaulted glass ceiling, and lion-head fountains is the most architecturally beautiful bath in Budapest. Alternatively: Rudas Baths (Turkish, 16th century, rooftop jacuzzi with Danube views, open late for night bathing, €20–24).",
            "3:00pm — Liberty Bridge (Szabadság híd): the beautifully ornate 1896 Art Nouveau bridge — turquoise-painted iron with gilded mythological birds at each tower — is the most aesthetically pleasing of Budapest's bridges. Walking across it and back takes 15 minutes and is free.",
            "5:00pm — Bálna Budapest (the Whale): a striking modern glass building on the Pest embankment housing a cultural centre, design shops, and a café — good for a final coffee with Danube and Buda views.",
            "7:30pm — Farewell dinner: order goulash (gulyás) the right way — it should be a rich, paprika-red beef and vegetable soup, not the thick stew many tourist restaurants serve. Excellent traditional Hungarian restaurants: Borkonyhá (Wine Kitchen, one Michelin star, ~€60–80/person), or for budget: Kispipa on Akácfa Street (local favourite, ~€15–20/person).",
          ],
          cost: "€20–40 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120–200/day",
      days: [
        {
          day: "Day 1",
          title: "Castle Hill, Parliament Tour & Danube by Night",
          items: [
            "Check into a 3-star hotel or boutique guesthouse in the 5th or 7th district: Hotel Rum Budapest, Brody House, or Párisi Udvar Hotel (in the extraordinary Parisian Court arcade). Budget €80–150/night.",
            "10:00am — Buda Castle Hill with a walking guide: Context Travel Budapest offers excellent 3-hour walking tours of the Castle District and Matthias Church (~€50/person). The guide's explanation of the eight sieges of Buda Castle and the Ottoman occupation transforms the architecture into narrative.",
            "1:00pm — Lunch at 21 Magyar Vendéglő in the Castle District: modern takes on traditional Hungarian dishes using quality ingredients. Goose liver with apple, duck with plum sauce, excellent Hungarian wines. Expect 5,000–8,000 HUF (€14–22) for a full meal.",
            "3:00pm — Parliament Building interior tour (Parlament): entry and guided tour ~9,000 HUF (€25). The tour includes the main staircase, the Dome Hall housing the Holy Crown of Hungary (the medieval crown of St Stephen, a national relic of extraordinary significance), and several ornate committee rooms. One of the most lavishly decorated interiors in Europe.",
            "7:00pm — Sunset drinks at a rooftop bar: 360 Bar (rooftop of the Corvin Department Store, Heroes' Square view), or High Note Skybar at the aria Hotel (castle and city panorama). Cocktails 3,000–5,000 HUF (€8–14).",
            "9:00pm — Danube riverboat dinner cruise (Silver Line or Legenda, €50–80/person including dinner): Budapest from the water at night — every illuminated bridge and the blazing Parliament reflected in the river — is the most spectacular way to end Day 1.",
          ],
          cost: "€150–200 total",
        },
        {
          day: "Day 2",
          title: "Széchenyi Baths, Museum of Fine Arts & Ruin Bars",
          items: [
            "9:00am — Széchenyi Baths with the cabin option (~11,500 HUF / €32): a private changing cabin rather than a shared locker makes the experience significantly more comfortable. Spend 3 hours in the thermal pools.",
            "12:30pm — Lunch at the Bock Bistró near Andrássy Avenue: one of Budapest's most acclaimed mid-range restaurants, attached to the Bock Winery. Modern Hungarian cuisine with exceptional Hungarian wines by the glass. 4,000–7,000 HUF (€11–19) for a main course.",
            "2:30pm — Museum of Fine Arts (Szépművészeti Múzeum) on Heroes' Square: one of Europe's great art collections — El Greco, Raphael, Bruegel, Goya — housed in an imposing neoclassical building. Entry ~3,200 HUF (€9). The Spanish collection (the best El Greco collection outside Spain) alone justifies the visit.",
            "5:00pm — House of Terror (Terror Háza) on Andrássy Avenue: an essential but emotionally heavy experience — the history of fascist and Communist occupation of Hungary from 1944 to 1989. The basement 'cellar' where prisoners were held is among the most affecting museum installations in Europe. Entry ~4,000 HUF (€11).",
            "7:30pm — Jewish Quarter for dinner and ruin bars: book a table at Borkonyha Wine Kitchen (Michelin-starred, modern Hungarian, excellent wine list, ~€50–80/person). Then on to Szimpla Kert for post-dinner drinks in Budapest's most extraordinary ruin bar.",
          ],
          cost: "€130–180 total",
        },
        {
          day: "Day 3",
          title: "Eger Day Trip — Wine & the Valley of Beautiful Women",
          items: [
            "7:30am — Train from Budapest Keleti station to Eger: 2 hours, ~3,500 HUF (€10) return. The Intercity train is fastest and most comfortable.",
            "9:30am — Eger Castle (Egri vár): the fortress where István Dobó and 2,000 Hungarian soldiers held off 80,000 Ottoman troops in 1552 — one of the defining moments in Hungarian history. Entry ~1,500 HUF (€4). The castle museum chronicles the siege in detail.",
            "11:00am — Eger Basilica (the second-largest church in Hungary, neoclassical, free) and the 16th-century Minaret — the northernmost standing Ottoman minaret in Europe (500 HUF, narrow spiral staircase to the top for views).",
            "12:30pm — The Valley of Beautiful Women (Szépasszonyvölgy): a small valley 15 minutes' walk from the town centre lined with wine cellars carved into volcanic tuff, mostly operated by families. The local speciality is Egri Bikavér (Bull's Blood red wine) and Egri Leányka (white). Most cellars serve 100 HUF tasting pours; a proper tasting of 5–6 wines with bread and cheese costs under 2,000 HUF (€5.50). This is one of the most enjoyable wine experiences in Central Europe.",
            "3:00pm — Eger town centre: walk the compact Baroque town centre, the beautiful Dobó Square, and the Serbian Orthodox church. Lunch at one of the market square restaurants — excellent fish soup (halászlé) and game dishes in this region.",
            "5:30pm — Return train to Budapest. Arrive ~7:30pm.",
            "8:30pm — Light dinner at a Pest brasserie — lángos or a bowl of soup after the day's wine. Budget 2,000–3,500 HUF (€5–10).",
          ],
          cost: "€60–80 total",
        },
        {
          day: "Day 4",
          title: "Gellért, Andrássy Avenue & Hungarian Fine Dining",
          items: [
            "9:30am — Gellért Thermal Baths: the Art Nouveau baths at their most beautiful on a weekday morning before crowds arrive. Take the dedicated Gellért Hotel entrance for the full architectural experience.",
            "12:00pm — Lunch at Gerbeaud Café on Vörösmarty Square: Budapest's most famous coffeehouse since 1858. The historical interior is extraordinary — marble, dark wood, ceiling frescoes. A coffee and slice of Gerbeaud cake costs ~3,500 HUF (€10). Have lunch here rather than just coffee — the Hungarian cold cuts platter and soups are excellent.",
            "2:00pm — Andrássy Avenue full walk: Budapest's UNESCO grand boulevard from the Opera House to Heroes' Square. Stop at the Hungarian State Opera House for a guided tour (4,500 HUF / €13) to see the neo-Renaissance interior — the auditorium itself seats 1,261 and is extraordinarily ornate.",
            "5:00pm — Final views: take the M1 (Europe's oldest metro, 1896) to Vörösmarty tér and walk the Váci shopping street to the Danube embankment. The Chain Bridge from the Pest embankment at dusk is the classic Budapest photograph.",
            "8:00pm — Farewell dinner at Costes Downtown (Michelin-starred): modern European cuisine with Hungarian ingredients and excellent Hungarian wine selection. Tasting menu ~30,000 HUF (€85) per person. One of Budapest's finest tables, in a beautiful restored Pest building.",
          ],
          cost: "€130–180 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€300–800/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Castle Tour & Michelin Dinner",
          items: [
            "Check in to the New York Palace Budapest (a completely restored 1894 Eclectic palace, Marriott Autograph Collection, €350–800/night) or the Four Seasons Gresham Palace (a magnificent 1906 Art Nouveau building directly on the Chain Bridge, €500–1,200/night).",
            "Private transfer from BUD airport: Budapest Limo or Blacklane, €60–80.",
            "Afternoon: private guided tour of the Castle Hill, Matthias Church, and Fisherman's Bastion with a specialist guide (Context Travel Budapest premium guide, €150–200/person, 3 hours). The depth of the medieval-Ottoman-Habsburg history with an expert is transformative.",
            "7:00pm — Pre-dinner cocktails at the New York Bar (New York Palace) — the most famous and most lavish café interior in Budapest, opened 1894. Hungarian legend holds that the owner threw the keys into the Danube so it could never close. Cocktails €18–28.",
            "9:00pm — Dinner at Gerbeaud Exclusive (the basement dining room below the famous café) or at Onyx Restaurant (Michelin-starred, Hungarian-French haute cuisine, tasting menu €150–200/person). Budapest's highest level of fine dining has reached genuine world-class status.",
          ],
          cost: "€400–600 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Baths, Heroes' Square & Parliament",
          items: [
            "9:00am — Széchenyi Baths private cabin, premium cabin option, or the VIP cabin option (~18,000 HUF / €50 for a fully private changing suite with bath service). Spend the morning in the thermal pools at leisure.",
            "12:00pm — Lunch at Kistücsök on the Buda embankment or Halászbástya Restaurant (Fisherman's Bastion) with panoramic Danube views. 3-course lunch ~15,000–20,000 HUF (€42–55) per person.",
            "2:30pm — Parliament Building private priority tour (~15,000 HUF premium ticket): the Dome Hall with the Holy Crown of Hungary, the monumental staircase with its 27.5-metre ceiling, and the main session chamber. One of the most extraordinary neo-Gothic interiors ever built.",
            "5:00pm — Private sunset boat: charter a private Danube boat (Legenda or Silver Line private hire, €200–400/hour) for sunset drinks on the river with the Parliament illumination beginning.",
            "8:30pm — Dinner at Borkonyha Wine Kitchen (Michelin star): the most celebrated Hungarian wine-focused restaurant in Budapest, pairing modern Hungarian dishes with an exceptional cellar of Hungarian wines. Tasting menu with wine pairing ~40,000 HUF (€110) per person.",
          ],
          cost: "€500–800 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Eger Wine Tour & Spa Evening",
          items: [
            "8:00am — Private car and specialist wine guide to Eger (~€300–400 for guide and driver). The Valley of Beautiful Women with a wine expert rather than independently — tasting the different vineyard interpretations of Egri Bikavér, Egri Csillag, and Leányka with context.",
            "Eger Castle private guide: the 1552 siege and the history of Turkish Hungary explained in depth by an expert in situ.",
            "12:30pm — Lunch at St Andrea Wine & Gourmet House in Eger: the region's finest restaurant, attached to one of the best wineries. Modern Hungarian cuisine matching local wines. Expect ~20,000–30,000 HUF (€55–85) per person.",
            "3:30pm — Wine cellar tour at Gál Tibor winery — one of Eger's most respected producers. Private cellar tasting of 8–10 wines.",
            "6:00pm — Private car back to Budapest.",
            "8:00pm — Rudas Baths night bathing (open Friday and Saturday nights until 4am, Sunday until 2am): the 16th-century Turkish bath with its original Ottoman dome and a spectacular modern rooftop pool with Danube views. A genuinely magical experience. Entry ~6,000 HUF (€17).",
          ],
          cost: "€500–700 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Museums, Opera & Grand Farewell",
          items: [
            "10:00am — Museum of Fine Arts premium visit: the Spanish collection (El Greco, Velázquez, Goya) and the Dutch Masters with a specialist art guide. 2 hours, €100–150/person for a private museum guide.",
            "12:30pm — Farewell lunch at the Gresham Palace (if not staying there) or at Nobu Budapest: the Japanese-Peruvian restaurant in Budapest serves some of the finest Nobu cooking in Central Europe. Expect €80–120/person.",
            "3:00pm — Hungarian State Opera: afternoon private backstage tour with Opera House historian. Access to stage, costume workshops, and rehearsal spaces normally closed to visitors.",
            "6:00pm — Vörösmarty Square and the historic Váci Street for final souvenir shopping: Herend porcelain (Hungary's royal porcelain factory, established 1826, gift sets from €50), Tokaji wine from a specialist shop, hand-embroidered Matyó textiles from Kalocsa.",
            "8:00pm — Final dinner at Costes (first Michelin-starred restaurant in Hungary): modern Mediterranean-Hungarian cuisine in a contemporary Pest interior. Tasting menu with Hungarian wine pairing ~50,000 HUF (€140) per person.",
            "Private car to BUD airport after dinner.",
          ],
          cost: "€500–800 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€12–25", food: "€10–16", transport: "€3–7", activities: "€12–22", total: "€38–70/day" },
    { tier: "✨ Mid-Range", accommodation: "€65–130", food: "€22–40", transport: "€8–15", activities: "€20–40", total: "€120–225/day" },
    { tier: "💎 Luxury", accommodation: "€250–1,200", food: "€70–200", transport: "€25–80", activities: "€50–150", total: "€395–1,630/day" },
  ],
  mistakes: [
    { icon: "🏊", title: "Skipping the Thermal Baths", desc: "Budapest sits atop more than 120 natural thermal springs — it has been a spa city since the Romans built baths here 2,000 years ago. The thermal bath culture is the single most distinctive thing about Budapest that no other European capital can replicate. Skipping the baths to save €25 is the most common and most regrettable mistake first-time visitors make.", color: "bg-red-50 border-red-200" },
    { icon: "🏚️", title: "Not Going to the Ruin Bars", desc: "Budapest's ruin bars — built in abandoned Austro-Hungarian palaces and factory buildings in the Jewish Quarter — are unlike anything else in European nightlife. They exist because post-WW2 and Communist-era neglect left entire city blocks derelict, and entrepreneurs filled them with art, mismatched furniture, and bars. The original ruin bar scene is specifically a Budapest phenomenon; don't leave without experiencing it.", color: "bg-orange-50 border-orange-200" },
    { icon: "❄️", title: "Visiting December Through February", desc: "Budapest in winter (December–February) is cold, grey, and many outdoor attractions are significantly less appealing. The thermal baths are functional year-round, but Széchenyi's outdoor pools in cold grey weather lose much of their charm. The Christmas market (mid-November to December) is an exception — one of Central Europe's best. For the full Budapest experience, April–October is strongly preferred.", color: "bg-yellow-50 border-yellow-200" },
  ],
  tips: [
    { icon: "🏛️", title: "Parliament Building at Night is Europe's Most Beautiful Lit Building", desc: "The Hungarian Parliament is illuminated every night of the year. Seen from Fisherman's Bastion on the Buda side across the Danube, or from the Chain Bridge at water level, the white neo-Gothic building blazing against a dark sky and reflected in the river is one of the finest urban views anywhere in the world. Time your Fisherman's Bastion visit for 9–10pm.", color: "bg-amber-50 border-amber-200" },
    { icon: "🌙", title: "Széchenyi Baths at Night — A Different Experience", desc: "Széchenyi is open until 10pm daily. In the evening, particularly in cooler months, the outdoor thermal pool steams dramatically, the lights of the neo-Baroque building reflect in the water, and the crowd shifts from family tourists to locals who use it as an after-work ritual. A night visit is distinctly more atmospheric than the daytime crowd.", color: "bg-teal-50 border-teal-200" },
    { icon: "🛒", title: "Great Market Hall Basement for Paprika and Salami", desc: "The ground floor of the Great Market Hall is excellent; most tourists miss the basement, which has the best selection of Hungarian pantry items — Kalocsa paprika (sweet, hot, smoked), Pick winter salami, Pálinka (Hungarian fruit brandy), and Tokaji wine. These make the best Budapest souvenirs and cost a fraction of what you'd pay in a tourist shop.", color: "bg-green-50 border-green-200" },
  ],
  faqs: [
    { q: "Budapest vs Prague: which is better for a first visit?", a: "Both are outstanding — the choice comes down to what you prioritise. Prague has the most intact medieval city centre in Europe, the world's largest castle complex, and superior beer culture. Budapest has a more dramatic cityscape (Parliament on the Danube is extraordinary), the unique thermal bath culture, the ruin bar scene, and is slightly cheaper. If you can, visit both — they are 2h30min apart by train." },
    { q: "Do Indian passport holders need a Schengen visa for Budapest?", a: "Yes. Hungary is a Schengen member and Indian passport holders must obtain a Schengen short-stay visa (€80 fee) before traveling. Apply at the Hungarian embassy or VFS Global at least 6 weeks before departure. Required documents include bank statements (€100+/day), confirmed hotel bookings, return flights, and travel insurance with minimum €30,000 coverage." },
    { q: "Which thermal bath should I choose — Széchenyi, Gellért, or Rudas?", a: "Széchenyi is the best all-round choice for first-timers — it is the largest, has both indoor and outdoor pools, is open late (10pm), is very accessible, and the neo-Baroque building is impressive. Gellért Baths are the most architecturally beautiful (Art Nouveau, extraordinary main pool) and worth a visit if you can only do two. Rudas is the most atmospheric — a 16th-century Turkish bath with an original Ottoman dome, best experienced at night (Friday/Saturday open until 4am with a rooftop pool with Danube views)." },
    { q: "Is Budapest cheap to travel?", a: "Budapest is one of Western and Central Europe's most affordable capitals. Budget travelers can eat a full Hungarian meal for €5–10, a hostel bed costs €12–20, and local transport is excellent and cheap. Even mid-range travelers will find Budapest significantly more affordable than Vienna, Prague, or any Western European capital. The one area where costs have risen: tourist-facing restaurants near the main sights — always walk one or two streets back." },
    { q: "What is the ruin bar scene and how do I experience it?", a: "Ruin bars (romkocsmák) began in Budapest's 7th district (Erzsébetváros) in the early 2000s, when entrepreneurs converted abandoned, partially derelict Austro-Hungarian buildings into eclectic bars using salvaged furniture, local art, and mismatched decor. Szimpla Kert (Kazinczy Street 14) is the original — open from 6pm daily, free entry, serves craft beers and Hungarian wine. Arrive at 8–9pm before it becomes a club. Instant/Fogas, Anker't, and Csendes are nearby alternatives." },
  ],
  combineWith: ["vienna-4-days", "prague-4-days", "krakow-3-days"],
  relatedSlugs: ["vienna-4-days", "prague-4-days", "amsterdam-4-days", "istanbul-5-days"],
  galleryQuery: "budapest parliament danube chain bridge fishermans bastion thermal baths hungary",
};

export const metadata: Metadata = {
  title: "Budapest in 4 Days: Thermal Baths, Ruin Bars, Parliament & the Danube (2026)",
  description: "4 complete Budapest itineraries — Budget (€38/day) to Luxury — with thermal bath guide (Széchenyi vs Gellért vs Rudas), ruin bar advice, Parliament interior tickets, and the Eger wine day trip.",
  keywords: ["budapest itinerary 4 days", "budapest travel guide 2026", "szechenyi baths guide", "budapest ruin bars", "budapest parliament tour", "hungary travel", "eger wine tour"],
  openGraph: {
    title: "Budapest in 4 Days: Thermal Baths, Ruin Bars & the Danube (2026)",
    description: "Thermal bath guide, ruin bars, Parliament tour, and Eger wine day trip — 4 complete plans from €38/day.",
    images: [{ url: "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80", width: 1200, height: 630, alt: "Budapest Parliament Building at night reflecting in the Danube" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Budapest in 4 Days (2026)", description: "Thermal baths, ruin bars, Parliament, Danube — full itinerary." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/budapest-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Budapest in 4 Days: Thermal Baths, Ruin Bars, Parliament & the Danube (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=1200&q=80",
      description: "4 complete Budapest itineraries — budget to luxury — with thermal bath guide, ruin bars, Parliament tour, and Eger day trip.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Budapest 4 Days", item: "https://www.incredibleitinerary.com/blog/budapest-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Budapest, Hungary",
      description: "The capital of Hungary — a city of thermal baths, ruin bars, a magnificent Parliament on the Danube, Buda Castle, and one of Europe's most dramatic urban skylines.",
      touristType: ["Cultural tourists", "Spa enthusiasts", "Nightlife travelers", "Architecture enthusiasts", "Food lovers"],
      geo: { "@type": "GeoCoordinates", latitude: 47.4979, longitude: 19.0402 },
    },
  ],
};

export default function BudapestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
