import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Amsterdam",
  country: "Netherlands",
  countryFlag: "🇳🇱",
  slug: "amsterdam-4-days",
  heroQuery: "amsterdam canal houses netherlands tulips bikes",
  heroAlt: "Amsterdam canal with historic gabled houses bicycles Netherlands",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Amsterdam at dawn — a lone cyclist gliding over a humpback bridge, the canal water still and mirror-flat, seventeenth-century gabled houses leaning forward over their own reflections — is one of the most quietly beautiful city scenes in Europe. Four days gives you the Anne Frank House (if you booked months ahead), Rembrandt's Night Watch, the Van Gogh Museum, the Jordaan's cobbled lanes, a windmill brewery, and enough time left over to simply rent a bicycle and become, for a few hours, a Amsterdammer.",
  stats: { duration: "4 Days", budgetFrom: "€60", bestMonths: "Apr–May (tulips), Jun–Aug", airport: "AMS (Schiphol)" },
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
        ["Schengen Visa Required", "The Netherlands is a Schengen Zone member. Apply for a short-stay Schengen visa at the Dutch embassy or through VFS Global. Fee: €80. Processing time: 15–45 days. Book your VFS appointment 4–6 weeks in advance as slots are limited."],
        ["Key Documents", "Passport valid 3 months beyond your return date, bank statements showing at least €100/day of travel, confirmed hotel bookings, return flight tickets, employment letter or business registration, and travel insurance covering a minimum of €30,000."],
        ["90/180 Day Rule", "Your Schengen visa allows a maximum stay of 90 days within any 180-day period across all Schengen countries combined. If you plan to visit Germany, France, or other Schengen countries, all those days count toward the same allowance."],
        ["Travel Insurance", "Mandatory minimum €30,000 medical coverage is required for the visa application. Most Indian travel insurance policies meet this — verify the exact wording before applying. Apply at VFS Global offices in major Indian cities."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders can enter the Netherlands (and the Schengen area) visa-free for up to 90 days within any 180-day period. No pre-approval currently required."],
        ["ETIAS from 2025", "A new ETIAS travel authorization is required from 2025 for visa-exempt travelers including USA, Canada, and Australia. Cost: €7, valid 3 years. Apply at etias.eu.int before travel — the online process takes minutes."],
        ["UK Post-Brexit Note", "UK passport holders are no longer EU citizens and enter under the visa-free 90/180 rule. They will also need ETIAS authorization. Ensure your passport has at least 6 months validity remaining from your travel date."],
        ["Schengen Days Count", "Days spent anywhere in the Schengen Zone — Germany, France, Belgium, Spain, etc. — all count toward your 90-day allowance. Track carefully if combining Amsterdam with a wider European trip."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€60–95/day",
      days: [
        {
          day: "Day 1",
          title: "Jordaan, Anne Frank House & Canal Tour",
          items: [
            "9:00am — Anne Frank House (€16, absolutely must book months ahead at annefrank.org — it sells out completely, especially April to October). The diary comes alive standing in the concealed annexe where eight people hid for 761 days.",
            "11:30am — Westerkerk church immediately next door — exterior is free to admire. The tower climb (€10) gives a canal-level panorama. Rembrandt is buried in the church and a plaque marks the spot.",
            "12:30pm — Jordaan neighbourhood lunch: the area around Lindengracht has affordable brown cafés (bruine kroegen) serving Dutch bitterballen (fried snack balls, €5–8) and broodjes (sandwiches, €4–6). Try Café 't Smalle on Egelantiersgracht for canal-side atmosphere.",
            "2:00pm — Nine Streets (Negen Straatjes): the grid of nine small streets connecting the main canals, filled with vintage shops, independent cheese sellers, and specialist bookshops. Budget €0 to browse or €5–20 for stroopwafels, cheese, and gifts.",
            "4:30pm — Canal boat tour (€15–22, multiple operators on Prinsengracht and Damrak) — the best way to understand Amsterdam's architecture. The city has 165 canals and 1,500 bridges; seeing them from water level reveals how the gabled houses lean deliberately forward (built with exterior hoisting hooks to pull goods up to upper floors without hitting the facade).",
            "7:00pm — Leidseplein square for evening: outdoor cafés, street performers, and the Heineken Experience nearby (€23, pre-book). Dinner at one of the surrounding brown cafés — order jenever (Dutch gin) and a portion of poffertjes (mini pancakes, €6–8) at a street stall.",
          ],
          cost: "€45–65 total",
        },
        {
          day: "Day 2",
          title: "Rijksmuseum, Van Gogh & Albert Cuyp Market",
          items: [
            "8:00am — Rijksmuseum doors open at 9am — book the 9am first slot online (€22.50) to reach Rembrandt's Night Watch before the tour groups arrive. The painting is enormous (363 x 437 cm) and impossible to appreciate when crowded. Also: Vermeer's The Milkmaid, Jan Steen's chaotic domestic scenes, and 400 years of Dutch Golden Age art.",
            "11:00am — Van Gogh Museum, a five-minute walk from the Rijksmuseum (€22, book a time slot online — essential). 200+ original Van Gogh paintings in chronological order — from the dark earth tones of his Dutch period to the blazing yellows and blues of Arles. The Sunflowers, Bedroom in Arles, and Starry Night studies are all here.",
            "1:00pm — Vondelpark lunch: Amsterdam's main park (free, 47 hectares) with the park's open-air theatre (free performances in summer). Buy lunch from the Albert Heijn supermarket on PC Hooftstraat and eat on the grass.",
            "3:00pm — Albert Cuyp Market (free entry, Monday–Saturday, busiest on Saturday): Amsterdam's largest street market, 260 stalls in De Pijp neighbourhood. Herring (haring) with raw onion at a street stall (€3–4 — the authentic Dutch experience), stroopwafel fresh off the waffle iron (€2–3), raw-milk Gouda (€3–5 for a wedge).",
            "5:00pm — De Pijp neighbourhood walk — Amsterdam's most multicultural area, lined with independent restaurants, Indonesian rijsttafel restaurants, and Surinamese food stalls. The Gerard Doustraat has excellent café options.",
            "7:30pm — Dinner in De Pijp: Indonesian rijsttafel (a selection of 12–20 small Dutch-Indonesian dishes) at Sama Sebo or a similar Indonesian restaurant, €18–25 per person — one of the great Dutch culinary traditions from colonial history.",
          ],
          cost: "€60–80 total",
        },
        {
          day: "Day 3",
          title: "Keukenhof Day Trip (Apr–May) or Haarlem",
          items: [
            "OPTION A (April–May only): Keukenhof Tulip Gardens (€22 entry, open late March to mid-May only). Take the bus from Schiphol or the direct coach from Amsterdam Centraal (€19 return including entry available). 32 hectares, 7 million flower bulbs, 800 varieties of tulip — the most spectacular flower garden in the world by any measure. Go on a weekday morning to avoid the peak crowds. Spend 3–4 hours.",
            "OPTION B (year-round): Haarlem (20 minutes by train, €5 each way, trains every 15 minutes). Holland's most charming city — a smaller, calmer Amsterdam with the same canal architecture. Grote Markt square is one of the most beautiful in the Netherlands. The Frans Hals Museum (€17.50) houses the greatest collection of Haarlem School paintings. The Teylers Museum (€17.50, Netherlands' oldest museum) has extraordinary scientific instruments and art.",
            "OPTION C: Delft (1.5 hours, €16 return via Den Haag) — the city of Delft blue pottery and Vermeer's birthplace. The Delft Blue factory tour at Royal Delft (€16) shows hand-painted production. The Markt and Nieuwe Kerk are beautiful.",
            "Afternoon back in Amsterdam: Micropia microbe museum next to Artis Zoo (€17, the world's first microbe museum — genuinely unique and surprisingly fascinating for adults). Or explore the Plantage neighbourhood with its 19th-century Jewish history.",
            "Evening: Eat Indonesian or Surinamese in the Pijp, or try Dutch stamppot (mashed potato with kale and smoked sausage) at a traditional Dutch restaurant — Haesje Claes on Spuistraat does it properly (€15–20).",
          ],
          cost: "€45–75 total incl. day trip",
        },
        {
          day: "Day 4",
          title: "Noord, Windmill Brewery & Final Canal Ride",
          items: [
            "10:00am — Stedelijk Museum of modern and contemporary art (€22.50) — excellent Bauhaus, De Stijl, and post-war collection including Karel Appel and American abstract expressionism. The bathtub building extension is a Dutch architectural landmark.",
            "12:30pm — Take the free NDSM ferry from behind Amsterdam Centraal station (runs every 15–30 minutes, free) to Amsterdam Noord across the IJ river. Five minutes on water, completely free.",
            "1:00pm — NDSM Wharf: Amsterdam's creative district in a former shipyard. Street art murals covering entire warehouses, pop-up restaurants, the IJver beach bar in summer. Lunch at one of the food trucks or at Pllek (shipping container restaurant with waterfront terrace).",
            "2:30pm — EYE Film Museum (free permanent collection, temporary exhibitions €12) — the angular white building on the Noord waterfront is one of Amsterdam's most striking pieces of contemporary architecture. The river views back toward Centraal are exceptional.",
            "4:00pm — Brouwerij 't IJ windmill brewery (free entry, guided tours €12, individual tastings €2.80 each): a functioning microbrewery inside Amsterdam's last remaining windmill. Try the Zatte (triple) or Columbus (IPA). The tasting room inside the mill is one of Amsterdam's best atmospheric bars.",
            "6:30pm — Return to Centraal by ferry. Golden hour canal bike ride: rent a bike (€15/day, multiple shops near Centraal) and cycle the Magere Brug (Skinny Bridge, best photographed from the canal at golden hour) and Prinsengracht. Dinner at a canal-side brown café for Dutch bitterballen and a final Heineken or Grolsch (€4–6 for a large draft).",
          ],
          cost: "€50–75 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€180–320/day",
      days: [
        {
          day: "Day 1",
          title: "Jordaan Food Walk & Private Canal Cruise",
          items: [
            "9:00am — Anne Frank House with skip-the-line tickets (book months ahead online, no same-day availability). The hidden annexe and personal diary exhibits are profound — plan 1.5 hours.",
            "11:30am — Jordaan neighbourhood walking food tour (Airbnb Experience or Context Travel, €65–85 per person): fresh stroopwafels from the Lanskroon bakery, aged Gouda from a specialist kaaswinkel, raw herring at a street stand, jenever tasting at a distillery — the best single introduction to Dutch food culture.",
            "2:00pm — Nine Streets shopping: mid-range boutiques, the Frozen Fountain design store, vintage Scandinavian furniture, and independent perfumers. Budget €30–60 for quality Dutch design items.",
            "5:00pm — Private canal boat charter (€150–200 for 2 hours, fits 6–8 people, hire from Marco's Tours or similar) with a bottle of Dutch wine and cheese. Seeing the gabled houses from a private boat at golden hour beats any group tour.",
            "8:00pm — Dinner reservation at Restaurant Breda (Singel 210, modern Dutch tasting menu, €65–85/person) or Bord'eau at Hotel de L'Europe for refined Dutch-French cuisine with canal views (€70–90/person).",
          ],
          cost: "€200–280 total",
        },
        {
          day: "Day 2",
          title: "Rijksmuseum, Van Gogh & De Pijp Dinner",
          items: [
            "9:00am — Rijksmuseum (€22.50, first entry slot booked online) with the museum's own multimedia audio guide (€5 extra) — outstanding contextual commentary on the Night Watch and the other masterworks. Give it 2.5 hours unhurried.",
            "12:00pm — Lunch at Rijksmuseum's own café — higher quality than most museum restaurants (€18–28 for a proper Dutch lunch with herring, soup, and aged cheese).",
            "2:00pm — Van Gogh Museum (€22, timed entry pre-booked). Consider the Museum's own audio guide or the enhanced multimedia iPad guide for deeper context on Van Gogh's technique and psychological state while painting.",
            "5:00pm — Hotel check-in if not done. Hotel V Frederiksplein or The Dylan Amsterdam for mid-range comfort — both within walking distance of major museums.",
            "7:30pm — De Pijp neighbourhood dinner: Restaurant De Waaghals for innovative vegetarian Dutch cuisine (€25–35 mains), or Beter & Leuk for farm-to-table Dutch ingredients (€30–45/person).",
          ],
          cost: "€180–240 total",
        },
        {
          day: "Day 3",
          title: "Keukenhof + Haarlem Combination Day",
          items: [
            "7:30am — Early departure by direct coach to Keukenhof (book combined coach + entry ticket, €19). Arrive at 9am opening — the first hour is dramatically less crowded than 11am onwards.",
            "9:00am–12:00pm — Keukenhof: 32 hectares of 7 million flowering bulbs from late March to mid-May. The themed pavilions show rare varieties impossible to see elsewhere. Hire a bicycle at the entrance (€10) to cover more ground and reach the outer gardens.",
            "1:00pm — Return to Haarlem by local bus (30 minutes) rather than going straight back to Amsterdam. Lunch at Jopenkerk — a microbrewery in a converted 1910 church, serving Haarlem-brewed beers (€3–4) and Dutch bitterballen (€8). The interior architecture alone is worth the stop.",
            "3:00pm — Frans Hals Museum (€17.50): the greatest collection of Haarlem School 17th-century painting outside Amsterdam. Frans Hals' group portraits of the civic guard are among the most technically accomplished paintings of the Dutch Golden Age.",
            "5:30pm — Train back to Amsterdam Centraal (20 minutes, €5). Evening walk through the Jordaan at dusk.",
            "8:00pm — Dinner at Rijsel (Marcusstraat 52, De Pijp) — a converted school building now serving outstanding Flemish-French rotisserie chicken and seasonal vegetables at €25–35/person. Book ahead — it's popular with locals.",
          ],
          cost: "€160–220 total",
        },
        {
          day: "Day 4",
          title: "Noord, Design District & Farewell Dinner",
          items: [
            "10:00am — Stedelijk Museum (€22.50) with the free audio guide: spend 2 hours with the permanent collection's Bauhaus and De Stijl holdings — Mondrian's grid paintings and Rietveld furniture designs are the highlights.",
            "1:00pm — NDSM Wharf by free ferry: lunch at Pllek restaurant (terrace facing the IJ river, seasonal Dutch-Nordic menu, €20–30 mains) with views of the Amsterdam skyline from the Noord bank.",
            "3:00pm — EYE Film Museum: the temporary exhibitions change frequently and are always thoughtfully curated. The film archive screenings (€10–12) are excellent.",
            "5:00pm — Brouwerij 't IJ guided tour (€12 includes three tastings): the 1.5-hour tour explains the windmill's brewing history and the craft beer movement in Amsterdam.",
            "7:30pm — Farewell dinner: Restaurant Vinkeles inside the Dylan Hotel (Keizersgracht 384) — a Michelin-starred kitchen in a restored 18th-century bakery. Dutch seasonal tasting menu, €95–120/person. Reserve at least 2 weeks ahead.",
          ],
          cost: "€200–280 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€500–1,500+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Jordaan & Private Canal Dinner",
          items: [
            "Private transfer from Schiphol by luxury car (Blacklane or similar, €80–120) to Pulitzer Amsterdam (Prinsengracht 315–331, a row of 25 17th-century canal houses converted into a single hotel, €400–900/night) or Waldorf Astoria Amsterdam (Herengracht, five Golden Age canal houses, €500–1,200/night).",
            "Afternoon: personal shopping experience in the Nine Streets with a private stylist guide (organized through the hotel concierge) — Dutch design brands, vintage couture, artisan cheese and gin selections.",
            "Anne Frank House at 9am first slot (concierge pre-books tickets months ahead). The experience is more contemplative with fewer people at opening.",
            "7:00pm — Private canal boat dinner charter: a restored 1930s Salonboot with a private chef serving a 4-course Dutch-French menu on the Prinsengracht as Amsterdam's facades are illuminated. €300–500/person for 3 hours. Available through Flagship Amsterdam or Rederij Lovers premium services.",
          ],
          cost: "€600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Rijksmuseum VIP & Michelin Dinner",
          items: [
            "9:00am — Rijksmuseum private guided tour (hotel concierge arranges specialist art historian guide, €200–350 for 2-hour private session). The Night Watch and Dutch Masters with undivided expert attention.",
            "11:30am — Van Gogh Museum VIP visit (timed entry + private guide): a specialist explains Van Gogh's technique, psychology, and the Arles period in context of the paintings you're standing in front of.",
            "1:30pm — Lunch at Ciel Bleu, the two-Michelin-star restaurant on the 23rd floor of Hotel Okura Amsterdam (Ferdinand Bolstraat 333) — panoramic city views and Dutch-French cuisine, €85–120/person lunch menu.",
            "4:00pm — Afternoon at leisure: spa treatment at hotel, or private photography session along the Keizersgracht canals with a professional photographer (€150–250 for 2 hours with edited images delivered digitally).",
            "8:00pm — Dinner at Restaurant Spectrum (Hotel de L'Europe, 1 Michelin star) — Dutch produce elevated to fine-dining precision, overlooking the Amstel river. Tasting menu €130–160/person.",
          ],
          cost: "€800–1,400 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Keukenhof & Haarlem Day",
          items: [
            "8:00am — Private car to Keukenhof Gardens (1 hour from central Amsterdam) — arrive at 9am opening well ahead of coach tour groups. The driver waits and takes you onward to Haarlem afterward.",
            "9:00am–12:00pm — Keukenhof with private specialist horticultural guide (€150–200 for 2 hours): the story of tulip mania, the 17th-century Dutch craze that made tulip bulbs worth more than houses, told beside 7 million flowers in full bloom.",
            "1:30pm — Lunch at restaurant Ratatouille in Haarlem — a refined seasonal kitchen in the historic city centre, €35–50/person.",
            "3:00pm — Private Frans Hals Museum tour (contact museum for group arrangements, €200–400): curator-level access to the 17th-century masterworks of the Haarlem School.",
            "7:00pm — Return to Amsterdam. Drinks at the Pulitzer Bar (Pulitzer Amsterdam) — a legendary literary bar with original bookshelves, fireplace, and a bar programme centred on Dutch jenever and aged spirits.",
            "9:00pm — Dinner at Ron Blaauw (Sophialaan 55, 1 Michelin star) — innovative Dutch cuisine in a converted villa. Tasting menu €115–140/person.",
          ],
          cost: "€700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Noord, EYE Museum & Farewell Cruise",
          items: [
            "10:00am — Stedelijk Museum private opening (contact museum VIP services for after-hours or pre-opening access, €400–700 for a group). The permanent collection of Mondrian, Rietveld, and Karel Appel with museum staff explaining the Dutch art movement context.",
            "1:00pm — Private helicopter flight over Amsterdam and the tulip fields (seasonal, April–May; Heli Holland or similar, €350–500/person for 30 minutes). The canal ring, the Keukenhof patchwork, and the North Sea coast from the air.",
            "3:00pm — NDSM Noord by private water taxi (rather than ferry). EYE Film Museum private cinema screening of a Dutch classic film (contact EYE for private hire, €300–500 for the screening room).",
            "6:00pm — Brouwerij 't IJ windmill: private tasting event with the head brewer (€150–200/person for 1.5 hours, contact brewery directly for private sessions).",
            "8:30pm — Farewell dinner at Vinkeles (The Dylan Hotel, 1 Michelin star): the restored 18th-century bakery with exposed brick, candlelight, and a chef's tasting menu celebrating Dutch seasonal ingredients at their finest. €120–150/person. A genuine contender for the best dinner in Amsterdam.",
          ],
          cost: "€900–1,600 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€20–40", food: "€15–25", transport: "€5–10", activities: "€20–40", total: "€60–115/day" },
    { tier: "✨ Mid-Range", accommodation: "€110–200", food: "€45–80", transport: "€15–25", activities: "€30–60", total: "€200–365/day" },
    { tier: "💎 Luxury", accommodation: "€400–1,200", food: "€100–350", transport: "€50–120", activities: "€100–400", total: "€650–2,070/day" },
  ],
  mistakes: [
    {
      icon: "🎟️",
      title: "Not Booking Anne Frank House Months in Advance",
      desc: "The Anne Frank House releases tickets on a rolling basis approximately 2 months ahead and sells out completely — especially April through September. There is no queue at the door and no same-day availability. Visit annefrank.org the day your booking window opens. If you miss it, a small allocation of same-day tickets is released at 9am on the day but is gone within seconds. This is the single most common Amsterdam disappointment for travellers.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚲",
      title: "Cycling on Tram Tracks",
      desc: "Amsterdam has an extensive tram network and the rails are a serious hazard for cyclists — your front wheel can slot into the groove and throw you instantly. Always cross tram tracks at a perpendicular angle, never ride parallel along them. Watch for trams approaching silently from behind. The city has dedicated red-painted cycle lanes; use them and you will be fine. Cycling accidents on tram tracks send several tourists to hospital every week.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌷",
      title: "Visiting April–May Without Planning for Keukenhof",
      desc: "If you're arriving in Amsterdam in late March, April, or early May, not visiting Keukenhof is a significant missed opportunity. The gardens are only open for roughly 8 weeks per year (late March to mid-May) and seeing 7 million tulips in bloom is a genuinely once-in-a-decade type experience. Tickets must be bought in advance (not available at the gate) and the direct buses book up. Plan this before you book your flights.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍃",
      title: "Going to Coffee Shops as Your First Stop",
      desc: "Amsterdam's coffee shops serve cannabis legally but this does not mean they are without risk for inexperienced users. Edibles (space cakes) in particular have an unpredictable and delayed onset that catches tourists badly — the standard beginner mistake is eating a second one after 40 minutes because 'nothing happened'. Consumption on the streets and in public spaces is illegal. If you go, go after you've settled in, eat a full meal first, and be conservative with quantities. Many visitors report their first Amsterdam experience being ruined by this.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "The I Amsterdam Card Pays for Itself at 3+ Museums",
      desc: "The I Amsterdam City Card (€75 for 24h, €95 for 48h, €115 for 72h, €130 for 96h) includes free entry to 70+ museums including the Rijksmuseum (€22.50), Van Gogh Museum (€22), Stedelijk (€22.50), Amsterdam Museum, and EYE Film Museum. It also includes unlimited GVB public transport. If you plan to visit three or more of the major museums, the 48h or 72h card pays for itself and the transport is a bonus.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Visit Rijksmuseum and Van Gogh at 9am Opening",
      desc: "Both the Rijksmuseum and Van Gogh Museum open at 9am and the first 45 minutes are dramatically quieter than 10am onwards when the tour groups arrive. Book the 9am timed entry slot online for both. At the Rijksmuseum, the Night Watch (Room 2.12) is accessible and unobstructed at 9am — by 10:30am there can be 50 people in front of it. This single tip transforms the experience.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏙️",
      title: "Golden Hour from Magere Brug (Skinny Bridge)",
      desc: "The Magere Brug on the Amstel river is Amsterdam's most photogenic bridge, especially at golden hour when the canal's surface turns orange-pink and the drawbridge mechanism is silhouetted. It's also a 10-minute walk from Rembrandtplein and completely free. Arrive 30 minutes before sunset. The Keizersgracht-Reguliersgracht intersection (where you can see seven bridges in one line) is another golden-hour spot known only to photographers who've done their research.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚴",
      title: "Rent a Bike: It's the Only Way to Truly See Amsterdam",
      desc: "Amsterdam has 800,000+ bicycles and 400km of dedicated cycle lanes — more bikes than people. Renting a bike (€12–18/day from MacBike or Starfish Bike Rental near Centraal) is not a tourist activity, it's how the city actually functions. The entire city centre is navigable in 20 minutes by bike. The Vondelpark, Keukenhof (if staying nearby), the Amstelpark, and Noord are all significantly better explored by bicycle than by foot or tram.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Amsterdam expensive to visit?",
      a: "Amsterdam is moderately expensive by European standards — more than Prague or Lisbon, less than Oslo or Zurich. Budget travellers can manage €60–80/day staying in hostels and cooking some meals. Mid-range travellers should budget €180–280/day for a comfortable hotel, museum entries, and restaurant dinners. The biggest costs are accommodation (hostels €20–40/night, 3-star hotels €110–180) and museum tickets (Rijksmuseum €22.50, Van Gogh €22). The I Amsterdam Card at €95 for 48h covers most museum entries and all public transport.",
    },
    {
      q: "How do I book Anne Frank House tickets?",
      a: "Go directly to annefrank.org. Tickets are released approximately 2 months in advance on a rolling basis. Set a calendar reminder and book the day your window opens — peak season (April–September) tickets disappear within hours. There is no queue at the door and no last-minute availability. If you miss the booking, a small daily allocation of tickets is released at exactly 9am Amsterdam time on the day of visit (sold online only, not at the door). For the most important Amsterdam museum experience, this advance booking is non-negotiable.",
    },
    {
      q: "When exactly is tulip season in the Netherlands?",
      a: "Dutch tulip season runs broadly from late March to mid-May, with peak bloom typically in mid-April — though this shifts by 1–2 weeks depending on the winter temperature. Keukenhof Gardens is open from late March to mid-May only (exact dates change slightly each year — check keukenhof.nl). The tulip fields in the Bollenstreek region (between Haarlem and Leiden) are spectacular from late March onwards and are free to walk alongside (though not to pick from). April 10–25 is the historically most reliable peak window.",
    },
    {
      q: "Is cycling in Amsterdam safe for tourists?",
      a: "Cycling in Amsterdam is safe if you follow two rules: stay in the red cycle lanes (they're everywhere and well-marked) and never ride parallel to or over tram tracks (cross them at a right angle). The traffic culture is highly predictable because everyone cycles — drivers are accustomed to cyclists, there are cycling traffic lights, and right-of-way rules are well established. The genuine danger is tram tracks (your wheel slots in and you fall instantly) and other cyclists moving faster than you expect. Wear a helmet — few locals do but it's sensible for visitors.",
    },
    {
      q: "What are the cannabis coffee shop rules for tourists?",
      a: "Cannabis coffee shops in Amsterdam are legal for adults (18+) and you must show ID. Purchase limit is 5 grams per person per visit. Alcohol is not sold in coffee shops (and vice versa — you cannot smoke cannabis in bars). Smoking in public spaces and streets is technically illegal though enforcement is inconsistent. Space cakes (edibles) have a delayed 45–90 minute onset and are much stronger than smoked cannabis — they catch out tourists regularly. Do not combine with alcohol. If this is your first experience, a small amount goes a long way.",
    },
    {
      q: "Do Indian passport holders need a Schengen visa for Amsterdam?",
      a: "Yes. Indian passport holders require a Schengen short-stay visa (Type C) to enter the Netherlands. The visa allows up to 90 days within any 180-day period across all 27 Schengen countries. Apply through VFS Global India (the Netherlands' authorized visa application centre) at least 6–8 weeks before travel. Required documents include bank statements (€100+/day), confirmed hotel bookings, return flights, employment letter, and travel insurance with minimum €30,000 medical coverage. Fee: €80 plus VFS service charge (approximately €22).",
    },
  ],
  combineWith: ["paris-5-days", "bruges-2-days", "cologne-2-days"],
  relatedSlugs: ["paris-5-days", "barcelona-4-days", "rome-4-days", "lisbon-4-days"],
  galleryQuery: "amsterdam canal tulips netherlands bikes golden age",
};

export const metadata: Metadata = {
  title: "Amsterdam in 4 Days: Anne Frank, Rijksmuseum, Tulips & Canal Life (2026)",
  description: "4 complete Amsterdam itineraries from budget to luxury: Anne Frank House booking secrets, Rijksmuseum Night Watch strategy, Keukenhof tulips, canal boat tours, and cycling tips with real euro costs.",
  keywords: ["amsterdam itinerary 4 days", "amsterdam travel guide 2026", "anne frank house tickets", "keukenhof tulips", "amsterdam things to do", "netherlands travel guide", "rijksmuseum night watch"],
  openGraph: {
    title: "Amsterdam in 4 Days: Budget to Luxury 2026 Itinerary",
    description: "Anne Frank House booking secrets, Rijksmuseum strategy, Keukenhof tulips, and real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80", width: 1200, height: 630, alt: "Amsterdam canal houses bicycles Netherlands" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Amsterdam in 4 Days (2026)", description: "4 plans, Anne Frank secrets, Keukenhof tulips, canal tours, and real euro costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/amsterdam-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Amsterdam in 4 Days: Anne Frank, Rijksmuseum, Tulips & Canal Life (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80",
      description: "4 complete Amsterdam itineraries with Anne Frank booking secrets, Rijksmuseum strategy, Keukenhof tulip gardens, and real euro costs.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Amsterdam 4 Days", item: "https://www.incredibleitinerary.com/blog/amsterdam-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Amsterdam, Netherlands",
      description: "The capital of the Netherlands — a city of 165 canals, Golden Age gabled houses, world-class museums, and 800,000 bicycles.",
      geo: { "@type": "GeoCoordinates", latitude: 52.3676, longitude: 4.9041 },
      touristType: ["Cultural tourists", "History buffs", "Art lovers", "Architecture enthusiasts"],
    },
  ],
};

export default function AmsterdamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
