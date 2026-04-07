import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Stockholm",
  country: "Sweden",
  countryFlag: "🇸🇪",
  slug: "stockholm-4-days",
  heroQuery: "stockholm gamla stan sweden lake archipelago old town",
  heroAlt: "Stockholm Gamla Stan reflected in Lake Mälaren at golden hour, Sweden",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Stockholm is built on fourteen islands where Lake Mälaren meets the Baltic Sea, and the city's relationship with water — the light bouncing off it at all hours, the archipelago stretching 80km to the east, the kayaks threading between the Old Town's copper-roofed warehouses — is fundamental to everything. Four days gives you Gamla Stan at dawn, the Vasa Museum (the most visited museum in Scandinavia), the ABBA Museum, Södermalm's panoramic cliff walk, and a day trip to either Uppsala or the archipelago islands.",
  stats: {
    duration: "4 Days",
    budgetFrom: "SEK 600",
    bestMonths: "Jun–Aug",
    airport: "ARN (Arlanda) or BMA (Bromma)",
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
        ["Schengen Visa Required", "Sweden is a full Schengen member. Indian passport holders must apply for a short-stay Schengen C visa through the Swedish embassy or VFS Global. Fee: €80. Processing time: 15–30 days. Apply at least 6–8 weeks before your travel date — VFS appointment slots in Delhi, Mumbai, and Chennai fill up well in advance during peak season."],
        ["Key Documents", "Passport valid 3 months beyond your return date, 6 months of bank statements showing adequate funds (Sweden's cost of living is high — demonstrate at least €150/day of stay), confirmed hotel bookings, return flight tickets, employment documents, and travel insurance with minimum €30,000 medical coverage."],
        ["Currency Note", "Sweden uses the Swedish Krona (SEK). €1 = approximately SEK 11.30 (April 2026). Sweden is expensive — budget carefully using SEK amounts rather than converting to euros, as the numbers can be misleading. A coffee costs SEK 40–55; a restaurant main dish SEK 150–280."],
        ["90/180 Day Rule", "A Schengen visa allows up to 90 days within any 180-day period across all 27 Schengen countries. If combining Stockholm with Copenhagen, Oslo (note: Norway is Schengen but not EU), or Helsinki (note: Finland is Schengen), all days count toward the same 90-day limit."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders enter Sweden (Schengen) visa-free for up to 90 days within any 180-day period. No pre-approval required at present."],
        ["ETIAS from 2025", "From 2025, visa-exempt travellers including USA, Canada, and Australia need ETIAS — a €7 travel authorisation valid 3 years. Apply online at etias.eu.int before travel. Required for entry to Sweden and all other Schengen countries."],
        ["UK Post-Brexit", "UK passport holders enter under the Schengen visa-free 90/180 rule and will need ETIAS from 2025. Ensure your passport has at least 6 months validity remaining."],
        ["Nordic Passports", "Danish, Norwegian, Finnish, and Icelandic citizens have full freedom of movement in Sweden under the Nordic Passport Union — an arrangement predating the EU's Schengen Zone. No checks or requirements."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "SEK 600–900/day",
      days: [
        {
          day: "Day 1",
          title: "Gamla Stan, Royal Palace & Fotografiska",
          items: [
            "8:00am — Gamla Stan (Old Town, free to walk). Stockholm's medieval island, founded in the 13th century, is a warren of amber, ochre, and sienna-coloured buildings on a grid of cobblestoned alleys. The Stortorget (Great Square) — with its uniform stepped-gable facades reflected in the damp morning cobblestones — is the most photographed spot in Scandinavia.",
            "8:30am — Stortorget (free). The square is at its finest before 9am. The Blood Bath of 1520 (when the Danish king had 80–90 Swedish nobles executed here) gives it a history worth knowing before you photograph it.",
            "9:30am — Nobel Museum (Stortorget, SEK 130). The story of the Nobel Prize, the laureates, their work, and Alfred Nobel himself — in a beautiful 18th-century building on the main square. The café serves Nobel ice cream (chocolate and caramel, a tradition since 2001).",
            "11:30am — Royal Palace (exterior always free, royal apartments SEK 180). The palace is one of the largest in Europe still used as an official royal residence — 608 rooms. The Changing of the Guard (free) happens daily in summer (12:15pm) in the outer courtyard.",
            "1:00pm — Lunch: Södermalm for cheaper options (15-minute walk or T-bana). Gröna Linjen (Folkungagatan) for Swedish meatballs (köttbullar) with lingonberry and cream sauce (SEK 95–115). Or Hötorgshallen market hall for a smörgåsbord-style lunch.",
            "3:30pm — Walk back through Gamla Stan to Skeppsholmen island (free, 10 minutes). The island has the Moderna Museet (modern art, free on some days, SEK 130 standard) and extraordinary views of the Royal Palace and Old Town from the water side.",
            "6:00pm — Ferry to Djurgården (SEK 65 one way by Djurgårdslinjen ferry) for the Fotografiska museum (SEK 195, open until 11pm daily). The photography museum in a converted 1906 customs house holds major international exhibitions — Robert Mapplethorpe, Annie Leibovitz, Nick Brandt — with views over the Stockholm harbour from the rooftop terrace.",
            "9:30pm — Night walk back through Gamla Stan. The alleyways lit by iron lanterns at 10pm are among the finest urban walking experiences in northern Europe.",
          ],
          cost: "SEK 500–750 total",
        },
        {
          day: "Day 2",
          title: "Djurgården: Vasa Museum, ABBA & Skansen",
          items: [
            "9:00am — Vasa Museum (SEK 190, book online — the most visited museum in Scandinavia). The warship Vasa sank on its maiden voyage in 1628, 1.3km from where it was built, in full view of the Stockholm court. It was raised intact in 1961 after 333 years on the seabed. 95% of the original wood survives. The ship stands in its own purpose-built museum, fully rigged, with its original painted carvings of lions, Roman emperors, and biblical scenes — in vivid polychrome, the colours of the 17th century — still intact on the bow.",
            "12:00pm — Lunch at the Vasa Museum café (SEK 120–160 for a set meal with soup, main, and coffee) or picnic on the Djurgården lawns — the largest green space in central Stockholm.",
            "1:30pm — ABBA The Museum (SEK 295, advance booking recommended). The interactive museum dedicated to ABBA is better than it has any right to be — the costumes, the recording sessions, the global phenomenon of the music. You can sing Waterloo with the band via hologram. Genuinely fun even for those who came ironically.",
            "3:30pm — Skansen open-air museum (SEK 200 in summer). The world's oldest open-air museum, founded in 1891 — 150 historical buildings from across Sweden assembled on the Djurgården hill, with farm animals, craftspeople in period costume, and the single best panoramic view of the Stockholm archipelago from the hilltop. The Nordic Zoo section has elk, wolverines, and brown bears.",
            "7:00pm — Dinner at Rosendals Trädgård (SEK 150–200 for a meal) — a biodynamic garden café on Djurgården. Everything grown on-site. Swedish open sandwiches, root vegetable soups, excellent cinnamon buns. Book ahead.",
          ],
          cost: "SEK 700–1,000 total",
        },
        {
          day: "Day 3",
          title: "Södermalm Cliff Walk, SkyView & Fika Culture",
          items: [
            "9:00am — T-bana to Slussen (free walk to Monteliusvägen from Slussen station). The Monteliusvägen clifftop path runs 500m along the edge of the Södermalm ridge, 30–40m above the water, with a panoramic view of Gamla Stan, the Royal Palace, City Hall (where the Nobel Prize banquet is held), and the entire western archipelago. Free, open 24 hours, at its best in the first 90 minutes of morning sun.",
            "10:30am — Södermalm neighbourhood walk. Stockholm's most creatively energetic area: vintage shops (Hornstull flea market on weekends), independent galleries, and the concentration of independent coffee roasters that take fika culture most seriously.",
            "11:30am — Fika stop (SEK 40–65). Fika is the Swedish institution of a coffee break with something sweet — a cinnamon bun (kanelbulle), a cardamom bun (kardemummabulle), or a mazarin almond tart. Drop Coffee (Wollmar Yxkullsgatan) is Stockholm's most serious specialty coffee roaster. The ritual of fika — taking 20–30 minutes to sit, drink slowly, and not work — is the most underrated thing about Swedish culture.",
            "1:30pm — SkyView (SEK 165, advance booking). A gondola ride on the outside of the Ericsson Globe — the world's largest spherical building (diameter 110m). The two gondolas travel up the outside of the sphere on a track from the equator to the top — the view over Stockholm from the summit is exceptional, and the experience of being on the outside of a sphere is unique.",
            "3:30pm — IKEA meatballs. The IKEA store in Kungens Kurva, 20 minutes south by bus, is one of the largest IKEA stores in the world. The canteen in any IKEA in Stockholm sells Swedish meatballs (köttbullar) with cream sauce and lingonberry for SEK 59–79 — the cheapest and most authentically Swedish meal available in the city.",
            "7:30pm — Dinner at Pelikan (Blekingegatan, Södermalm) — a classic Swedish beer hall open since 1904. Wood panelling, white tablecloths, surströmming on the menu (you don't have to order it), and an excellent pyttipanna (Swedish hash with fried egg). SEK 150–220/person.",
          ],
          cost: "SEK 550–800 total",
        },
        {
          day: "Day 4",
          title: "Day Trip: Uppsala Cathedral or Stockholm Archipelago",
          items: [
            "Option A — UPPSALA (40 minutes by SJ Regional train, SEK 130 return from Stockholm Central).",
            "Uppsala Option: Uppsala Cathedral (free). The largest church in Scandinavia — 118.7m tall, built 1272–1435 — holds the tombs of King Gustav Vasa, Archbishop Nathan Söderblom (Nobel Peace Prize 1930), and the botanist Carl Linnaeus. The silver shrine of Erik the Holy dates to 1257.",
            "Uppsala Option: Uppsala Castle (SEK 120 with museum). The Renaissance castle on the hill above the cathedral was where Queen Christina abdicated in 1654 — a dramatic moment in Swedish history. The castle museum covers Swedish royal history from the 16th century.",
            "Uppsala Option: Gustavianum Museum (SEK 80) — Uppsala University's museum, which includes the Anatomical Theatre (1663, Europe's best preserved), where public dissections were performed to students seated in tiered rings above the dissection table.",
            "Uppsala Option: Lunch at the university's Flustret café by the river — student-priced meals, SEK 90–130.",
            "Option B — STOCKHOLM ARCHIPELAGO (30,000 islands between Stockholm and the open Baltic, accessible by Waxholmsbolaget and Strömma ferries from Strömkajen, departures every 30–60 minutes in summer).",
            "Archipelago Option: Fjäderholmarna (the closest island group, SEK 170 return, 25 minutes). The four islands have craft workshops, a smokehouse serving smoked salmon and herring, a microbrewery, and the quietest picnic spots 3km from the city centre.",
            "Archipelago Option: Sandhamn or Vaxholm (SEK 200–300 return, 2–3 hours). Wooden fishermen's cottages painted Falun red, sailing harbours, seafood restaurants. The archipelago is Sweden's best-kept summer secret — bring a book and stay until the last ferry.",
            "Evening (both options): Return to Stockholm for farewell smörgåsbord (Swedish buffet) at Operakällaren's Matbar (SEK 350–450/person for the full spread) or a simpler dinner at any Södermalm restaurant.",
          ],
          cost: "SEK 500–800 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "SEK 1,500–2,800/day",
      days: [
        {
          day: "Day 1",
          title: "Gamla Stan with a Guide & Fotografiska Dinner",
          items: [
            "10:00am — Check into At Six (Brunkebergstorg) or Hotel Skeppsholmen (Skeppsholmen island — a former navy barracks with harbour views). Rooms from SEK 1,500–2,800/night.",
            "11:00am — Private guided tour of Gamla Stan and the Royal Palace (SEK 800–1,200 for 3 hours, licensed Stockholm guide). The guide covers 800 years of Stockholm history: the Viking trading post, the Hanseatic League influence, the Vasa dynasty, and the modern constitutional monarchy.",
            "2:00pm — Lunch at Mathias Dahlgren's Matbaren (Grand Hôtel, Blasieholmen) — a 1 Michelin Bib Gourmand bar with Nordic small plates. Sea buckthorn cured salmon, fermented barley bread, cloudberry dessert. SEK 300–450/person.",
            "4:30pm — Stockholm Card purchase (SEK 695/24h from tomorrow) — covers all museums plus transport. Start using it the next morning.",
            "7:00pm — Dinner at Fotografiska's restaurant (the top floor, harbour view) — SEK 400–600/person for a set meal with wine. The restaurant ranks consistently in Sweden's top 10 for seasonal Nordic cuisine.",
          ],
          cost: "SEK 1,500–2,500 total",
        },
        {
          day: "Day 2",
          title: "Vasa, ABBA & Nordic Gastronomy",
          items: [
            "9:00am — Vasa Museum with Stockholm Card (included, skip the queue). Take 2 hours and use the audio guide (SEK 60 extra) — the ship's story in full detail from launch to sinking to 333 years of seabed preservation.",
            "11:30am — ABBA The Museum with Stockholm Card (included). The curator's tour version available at weekends gives a deeper exhibition experience.",
            "2:00pm — Lunch at Oaxen Krog (Djurgården, 1 Michelin star) — the most acclaimed Nordic fine dining restaurant on the island. Seasonal tasting menu SEK 1,200–1,600/person with wine pairing.",
            "5:00pm — Skansen at golden hour (SEK 200, or included with Stockholm Card). The hilltop panorama over the archipelago at 6pm in summer is extraordinary.",
            "8:00pm — Dinner at Frantzén (Klara Norra Kyrkogata, 3 Michelin stars) — if budget extends. Sweden's highest-rated restaurant. Tasting menu SEK 4,500–5,500/person with pairings. Book 3 months ahead. Alternatively, Ekstedt (Humlegårdsgatan, 1 star) — all food cooked over open fire (SEK 1,600/person for tasting menu).",
          ],
          cost: "SEK 2,000–3,500 total",
        },
        {
          day: "Day 3",
          title: "Södermalm, Archipelago Ferry & Sunset Dinner",
          items: [
            "9:30am — Monteliusvägen cliff walk with a flask of specialty coffee from Drop Coffee. 45 minutes.",
            "11:00am — Ferry from Slussen to Fjäderholmarna (SEK 170 return, Strömma Kanalbolaget) — charter a private kayak guide for the afternoon islands tour (SEK 800–1,200/person, 3 hours, covers Fjäderholmarna and the surrounding small islands by kayak).",
            "1:30pm — Lunch at Fjäderholmarnas Krog (the island restaurant) — smoked Baltic herring, grilled perch, archipelago bread. SEK 280–380/person.",
            "4:00pm — Return ferry to Stockholm.",
            "6:30pm — Systembolaget stop for a bottle of Swedish aquavit (SEK 200–350) — the state alcohol monopoly closes at 7pm on weekdays, 3pm on Saturdays, and doesn't open on Sundays. This is not optional information.",
            "8:00pm — Dinner at Mathias Dahlgren's Matsalen (Grand Hôtel, 1 Michelin star) — the full fine dining experience. Wild Swedish reindeer, Arctic char, sea buckthorn sorbet. SEK 800–1,200/person with wine.",
          ],
          cost: "SEK 2,000–3,000 total",
        },
        {
          day: "Day 4",
          title: "Uppsala & Swedish Farewell Smörgåsbord",
          items: [
            "8:30am — First train to Uppsala (SJ Regional, SEK 130 return). On arrival, hire a local guide (SEK 800–1,000 for 3 hours) — the combination of Uppsala Cathedral, the university, and the Viking burial mounds at nearby Gamla Uppsala (the pre-Christian royal burial site, SEK 80 museum) tells the full arc of Swedish civilisation.",
            "12:30pm — Lunch at Domtrappkällaren (Uppsala, 1 Michelin Bib Gourmand) — medieval vaulted cellar restaurant steps from the cathedral. Husmanskost (traditional Swedish home cooking) executed with precision. SEK 250–350/person.",
            "3:00pm — Train back to Stockholm.",
            "5:00pm — Spa at your hotel — or a Swedish massage (SEK 800–1,200 for 90 minutes) at Centralbadet on Drottninggatan, a 1904 Jugendstil bathhouse still operating.",
            "7:30pm — Farewell smörgåsbord at Operakällaren (Opera House, Kungliga Operan). The full Swedish buffet: gravad lax, pickled herring, Janssons frestelse, Swedish meatballs, knäckebröd, and a selection of aquavit. SEK 550–750/person.",
          ],
          cost: "SEK 2,000–3,200 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "SEK 5,000–12,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Stockholm & Nobel Dinner",
          items: [
            "Check in to Grand Hôtel Stockholm (Södra Blasieholmshamnen) — the most prestigious address in the city, facing the Royal Palace across the water. Rooms from SEK 3,500–8,000/night. The Nobel Prize banquet is held nearby; laureates have been guests since 1874.",
            "Private Arlanda Express transfer (SEK 350) or helicopter from ARN to the city (SEK 6,000–8,000 one way, if arriving by private jet).",
            "3:00pm — Private art historian tour of Gamla Stan and the Royal Palace (SEK 3,000–4,500 for 3 hours) — access to the Treasury and the Bernadotte apartments with the museum's own expert.",
            "7:00pm — Pre-dinner cocktails at the Cadier Bar (Grand Hôtel) — Stockholm's most storied bar, open since 1874, where ABBA celebrated their Eurovision win. Aquavit Martini: SEK 165.",
            "8:30pm — Dinner at Mathias Dahlgren's Matsalen (Grand Hôtel, 1 Michelin star) with a wine pairing orchestrated by the hotel sommelier. SEK 1,800–2,500/person.",
          ],
          cost: "SEK 6,000–10,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Vasa Private Access & Nordic Haute Cuisine",
          items: [
            "9:00am — Private pre-opening Vasa Museum session (arrange through hotel concierge, SEK 5,000–8,000 for a private group with the museum director or senior curator). The ship before the public arrives — in near-silence, with expert commentary on the 17th-century woodcarving and the conservation challenges — is a genuinely extraordinary experience.",
            "12:30pm — Lunch at Oaxen Krog (1 Michelin star, Djurgården) — the full tasting menu with the sommelier's Scandinavian wine and aquavit pairing. SEK 2,500–3,500/person.",
            "4:00pm — Private ABBA The Museum session (the 'Gold' VIP experience, SEK 1,500/person) with exclusive access to the original ABBA studio instruments and the full costume archive.",
            "8:00pm — Dinner at Frantzén (3 Michelin stars). Sweden's finest restaurant, a 20-course experience across 3 hours in a townhouse setting. SEK 5,000–6,000/person with pairings. Book 3 months ahead on the day reservations open.",
          ],
          cost: "SEK 10,000–16,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Archipelago by Private Boat",
          items: [
            "9:00am — Private boat charter from the Grand Hôtel quay (SEK 8,000–12,000 for a full day, 8-passenger motor yacht with captain and chef). Course: Fjäderholmarna, Vaxholm, Sandhamn — the full outer archipelago in a day.",
            "11:00am — Swimming stop in the outer islands where the Baltic is cleanest. Freshwater warm enough to swim from June–August.",
            "1:00pm — Lunch on board: the charter chef prepares smoked archipelago fish, fresh shrimp, and knäckebröd with butter as you anchor in a sheltered bay.",
            "4:00pm — Sandhamn village. The wooden sailing harbour where Stieg Larsson set his thrillers. Walk the 400m of the village, have a coffee at the Sandhamns Värdshus (the island's only hotel, established 1672).",
            "7:00pm — Return to Stockholm by boat.",
            "9:00pm — Light farewell dinner at the Grand Hôtel's Veranda restaurant — open-face smörgås, fresh crayfish in season (August–September), a bottle of Swedish sparkling wine.",
          ],
          cost: "SEK 12,000–18,000 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Helicopter to Uppsala & Farewell Tasting",
          items: [
            "9:00am — Helicopter to Uppsala (SEK 8,000–12,000 for the round trip, 4 passengers). Land at Uppsala Airport and transfer by car to the cathedral.",
            "10:00am — Uppsala Cathedral with a private ecclesiastical historian (SEK 2,000–3,000 for 2 hours). The Viking-age silver shrine of Erik the Holy, the tomb of Gustav Vasa, and the story of Sweden's conversion from Norse religion to Christianity.",
            "12:00pm — Lunch at Domtrappkällaren (SEK 500–700/person with wine) in the medieval vaulted cellar.",
            "2:30pm — Gamla Uppsala burial mounds (the 6th-century royal burial mounds of the Yngling dynasty, where Norse kings were cremated and buried with their ships). A private guide with expertise in Norse religion makes the site meaningful.",
            "4:30pm — Helicopter return.",
            "8:00pm — Farewell dinner at Gastrologik (Artillerigatan, 2 Michelin stars) — the most technically rigorous Nordic fine dining in Stockholm. A 20-course menu of Swedish foraged and farmed ingredients. SEK 3,500–4,500/person with the beverage menu.",
          ],
          cost: "SEK 14,000–20,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "SEK 200–400",
      food: "SEK 100–180",
      transport: "SEK 40–80",
      activities: "SEK 150–300",
      total: "SEK 490–960/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "SEK 900–2,000",
      food: "SEK 350–700",
      transport: "SEK 80–150",
      activities: "SEK 300–600",
      total: "SEK 1,630–3,450/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "SEK 3,500–8,000",
      food: "SEK 1,000–3,500",
      transport: "SEK 200–800",
      activities: "SEK 500–2,000",
      total: "SEK 5,200–14,300/day",
    },
  ],
  mistakes: [
    {
      icon: "❄️",
      title: "Visiting Stockholm in Winter",
      desc: "Stockholm in December–January means darkness by 3pm, temperatures of -5°C to -15°C, and some attractions on reduced hours. The city is genuinely magical in midsummer (June–August) — 18+ hours of daylight, outdoor terraces, archipelago ferries running at full frequency, and a completely different city energy. If you must visit in winter, the Christmas markets and ice bars are excellent — but adjust expectations significantly.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎟️",
      title: "Paying Full Price Transport Without the Stockholm Card",
      desc: "A single T-bana metro journey costs SEK 42. The Stockholm Card at SEK 695/24h or SEK 895/48h covers unlimited public transport plus entry to 60+ museums including the Vasa Museum (SEK 190), ABBA Museum (SEK 295), Skansen (SEK 200), and Fotografiska (SEK 195). On a museum-heavy day, the card pays for itself by the second attraction. Do the arithmetic before you buy individual tickets.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚢",
      title: "Skipping the Vasa Museum",
      desc: "The Vasa is the best-preserved 17th-century ship in the world — 95% original wood, original rigging, original polychrome carved decorations, and a story (commissioned by a king, sank in front of the royal court, salvaged 333 years later) that is genuinely extraordinary. Some visitors skip it because they assume it is a dry maritime museum. It is not. It is one of the most remarkable objects in any museum anywhere in Europe.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Gamla Stan at 7am: Empty Alleyways & Best Light",
      desc: "By 10am, Gamla Stan's narrow alleyways are full of tourist groups. At 7am in summer, you have the cobblestones entirely to yourself — the morning light on the ochre and sienna facades is warm, the Stortorget is empty and misty, and the pastry shops start opening at 7:30am. This is the version of Stockholm that photographs impossibly well. Set your alarm.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌄",
      title: "Monteliusvägen Cliff Walk at Sunset Is Free and Spectacular",
      desc: "The Monteliusvägen path along the Södermalm cliff edge runs 500m at 30–40m elevation above the water, looking north over Gamla Stan, City Hall, and Lake Mälaren. At sunset in summer (9–10pm), the light turns the copper rooftops gold and the water rose-pink. It is among the finest free urban views in northern Europe, takes 45 minutes from the T-bana, and requires no ticket.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "⛵",
      title: "Take the Fjäderholmarna Ferry — Walk-On, No Booking",
      desc: "The Waxholmsbolaget ferry to Fjäderholmarna (the closest archipelago island cluster) runs every 30 minutes from Strömkajen in summer and costs SEK 170 return. No booking required — walk on. The journey is 25 minutes through Stockholm's inner harbour. The island has a microbrewery, a smokehouse, craft workshops, and the cleanest swimming water you will find within 3km of a European capital. It is the single best-value afternoon in Stockholm.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Stockholm vs Copenhagen vs Oslo — which is best?",
      a: "All three are exceptional and different in character. Stockholm is the most architecturally varied — islands, Old Town, modernist suburbs, and 30,000 archipelago islands. Copenhagen is Denmark's design capital, flat and extremely bikeable, with Noma's legacy saturating the food scene. Oslo is smaller, less immediately beautiful, but has the world's best Viking Ship Museum and fjords accessible by ferry. Stockholm is the best for a first Scandinavia trip because its museums (Vasa, ABBA, Skansen) have no equivalent. Budget-wise: Copenhagen is slightly cheaper than Stockholm; Oslo is significantly more expensive than both.",
    },
    {
      q: "Do Indians need a Schengen visa for Sweden?",
      a: "Yes. Sweden is a full Schengen member. Indian passport holders need a short-stay Schengen C visa (€80, valid up to 90 days in 180). Apply through VFS Global or the Swedish embassy at least 6–8 weeks before your travel date. The visa covers all 27 Schengen countries — if you are also visiting Denmark, Finland, or Germany, one application covers the trip. Apply to the embassy of the country where you will spend the most days. Note that Norway, while Schengen, is not EU — the same Schengen visa covers Norway but check the official requirements.",
    },
    {
      q: "When does the midnight sun happen in Stockholm?",
      a: "Stockholm's latitude (59°N) means the sun does not fully set around midsummer (June 20–24) — it dips just below the horizon around midnight but never fully darkens. The sky remains light from approximately 3am to 11pm throughout June and July. The practical effect is that you can read comfortably outdoors at 11pm. Midsommar (the Friday between June 19–25) is Sweden's most important cultural festival — dancing, flower crowns, schnapps, herring — and Skansen's midsummer celebrations are exceptional.",
    },
    {
      q: "How do I explore the Stockholm Archipelago?",
      a: "The Waxholmsbolaget ferry company operates the archipelago service from Strömkajen, with schedules to all 30,000 islands (those with inhabitants, anyway — approximately 1,000 have ferry service). Day trips: Fjäderholmarna (SEK 170 return, 25 min, closest), Vaxholm (SEK 220 return, 1h, classic wooden fortress town), Sandhamn (SEK 300+ return, 3h, outer archipelago sailing hub). For a proper archipelago experience, take the overnight boat to Grisslehamn and cycle back. Full archipelago pass (SEK 400) covers unlimited ferry travel for 24 hours.",
    },
    {
      q: "Is the ABBA Museum worth visiting?",
      a: "Yes, even if you are not a fan. The museum is well designed — it covers the ABBA phenomenon in a way that is culturally coherent, not merely nostalgic. The costumes are extraordinary (the band's designer Owe Sandström created some of the most distinctive stage wear in pop music history), the recording process is documented in detail, and the interactive sections — where you can sing with the band holographically — are genuinely fun. Budget 90 minutes. The ticket at SEK 295 is one of Stockholm's more expensive museum entries but most visitors consider it worthwhile.",
    },
  ],
  combineWith: ["copenhagen-3-days", "oslo-3-days", "helsinki-3-days"],
  relatedSlugs: ["copenhagen-3-days", "oslo-3-days", "dublin-4-days", "krakow-4-days"],
  galleryQuery: "stockholm gamla stan sweden vasa museum archipelago abba",
};

export const metadata: Metadata = {
  title: "Stockholm in 4 Days: Gamla Stan, Vasa Museum, ABBA & the Archipelago (2026)",
  description: "4 complete Stockholm plans: Gamla Stan at dawn, Vasa Museum, ABBA Museum, Södermalm cliff walk, Uppsala day trip, and archipelago ferries — with real SEK costs, Schengen visa info for Indians, and Stockholm Card advice.",
  keywords: ["stockholm itinerary 4 days", "stockholm travel guide 2026", "vasa museum stockholm", "gamla stan stockholm", "stockholm archipelago", "sweden travel guide", "stockholm budget travel"],
  openGraph: {
    title: "Stockholm in 4 Days: Budget to Luxury 2026 Itinerary",
    description: "Gamla Stan, Vasa Museum, ABBA Museum, archipelago ferries — real SEK costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=80", width: 1200, height: 630, alt: "Stockholm Gamla Stan Sweden" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Stockholm in 4 Days (2026)", description: "Vasa Museum, Gamla Stan, ABBA, archipelago, real SEK costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/stockholm-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Stockholm in 4 Days: Gamla Stan, Vasa Museum, ABBA & the Archipelago (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=80",
      description: "4 complete Stockholm plans with Vasa Museum tips, Gamla Stan morning walk advice, archipelago ferry guide, and Swedish visa information for every passport.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Stockholm 4 Days", item: "https://www.incredibleitinerary.com/blog/stockholm-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Stockholm, Sweden",
      description: "The capital of Sweden — built on 14 islands at the meeting of Lake Mälaren and the Baltic Sea. Home to the Vasa Museum, Gamla Stan, the ABBA Museum, and a 30,000-island archipelago.",
      geo: { "@type": "GeoCoordinates", latitude: 59.3293, longitude: 18.0686 },
      touristType: ["Cultural tourists", "History buffs", "Design enthusiasts", "Nature and outdoor travellers"],
    },
  ],
};

export default function StockholmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
