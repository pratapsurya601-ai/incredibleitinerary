import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Madeira",
  country: "Portugal",
  countryFlag: "🇵🇹",
  slug: "madeira-5-days",
  heroQuery: "madeira island portugal levada walk tropical",
  heroAlt: "Madeira island levada walk through laurel forest with ocean views",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Madeira is the Atlantic island that rewrites your expectations of Europe — a volcanic peak draped in laurel forest, laced with 2,500 km of levada irrigation channels that double as hiking trails, and fringed by cliffs so vertical that the cable cars are not optional. Funchal's old town is a maze of hand-painted tile facades, the poncha cocktails are dangerously smooth, and the Monte toboggan ride is the most surreal transport experience on the continent. Five days unlocks the full range: sea-level seafood and summit snowfields, tropical gardens and black-sand beaches, all within an island you can drive end-to-end in two hours.",
  stats: {
    duration: "5 Days",
    budgetFrom: "€60",
    bestMonths: "Apr–Jun or Sep–Oct",
    airport: "FNC",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Funchal Old Town" },
    { id: "day2", emoji: "📅", label: "Day 2 — Levada & Pico do Arieiro" },
    { id: "day3", emoji: "📅", label: "Day 3 — Monte & Cabo Girao" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C) — Portugal as main destination"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Portuguese Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance"],
        ["Notes", "Madeira is a Portuguese territory; same Schengen visa applies. Apply 6–8 weeks ahead."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders visa-free post-Brexit but subject to the 90/180 Schengen rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€60–80/day",
      days: [
        {
          day: "Day 1",
          title: "Funchal Arrival & Old Town",
          items: [
            "14:00 — Arrive FNC airport; take the public Aerobus (€5) or city bus 20/53 (€2) into Funchal centre — taxis charge €20–25 for the same 20-minute ride.",
            "15:30 — Check in to a hostel or guesthouse in the Old Town zona velha (€25–35/night) — staying here puts the best tile facades, bars, and fish restaurants at your doorstep.",
            "17:00 — Walk the Old Town: the Rua de Santa Maria tile door art project has turned every doorway into a painted canvas — 200+ doors each with a different artist. Free.",
            "19:00 — Dinner at a local taberna: espetada (beef skewer on a bay laurel stick) with bolo do caco bread for €12–14; avoid the tourist restaurants on the waterfront promenade.",
            "21:00 — First poncha at a local bar — the Madeiran sugarcane spirit mixed with honey and lemon costs €2–3; try Taberna Ruel for the most traditional version.",
          ],
          cost: "€35–45 (bus, hostel, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Levada do Caldeiro Verde Hike",
          items: [
            "08:00 — Take bus 56 from Funchal to Queimadas park (€4.50 each way, 1.5 hours) — book the return journey time with the driver as buses are infrequent.",
            "10:00 — Levada do Caldeiro Verde: an 13 km round-trip walk through UNESCO laurel forest (Laurisilva) with four tunnels and a dramatic 100m waterfall at the end. Free entry.",
            "14:30 — Picnic lunch on the levada wall: pack food from Funchal's Mercado dos Lavradores (market) — local bread, sheep cheese, and passion fruit for €5–7.",
            "17:30 — Return bus to Funchal; dinner at Mercado do Peixe fish market restaurant (€10–14 for grilled black scabbardfish — Madeira's signature dish served with banana).",
            "20:00 — Evening walk along Funchal marina; enjoy a bica (espresso) at a pastelaria for €0.80.",
          ],
          cost: "€30–40 (bus, food, dinner)",
        },
        {
          day: "Day 3",
          title: "Pico do Arieiro & Mountain Views",
          items: [
            "07:00 — Rent a small car for the day (€25–35 from local agencies; avoid airport rentals which cost 40% more) — you need a car for Madeira's mountain roads.",
            "09:00 — Drive to Pico do Arieiro (1,818m) — Madeira's third-highest peak, a 45-minute drive from Funchal. The summit is often above the clouds; bring a jacket even in summer.",
            "10:30 — Hike the PR1 trail to Pico Ruivo (1,861m) — a 9 km one-way ridge trail with spectacular views, rock arches, and pico-to-pico bridges. Allow 3–4 hours one way. Free.",
            "14:00 — Drive down via Santana village: see the triangular A-frame thatched houses (palheiros), entirely traditional and unique to Madeira.",
            "17:00 — Stop at Ribeiro Frio trout farm and viewpoint: one of the best levada junction views on the island. Free.",
            "19:30 — Return to Funchal; budget dinner: francesinha (the island's take on the Porto sandwich) for €8.",
          ],
          cost: "€55–65 (car rental, petrol, food)",
        },
        {
          day: "Day 4",
          title: "Monte Toboggan & Tropical Gardens",
          items: [
            "09:00 — Cable car from Funchal seafront to Monte village (€15 one way, €22 return) — 15-minute ride with views across the bay and the old town rooftops.",
            "10:00 — Monte toboggan ride: two carreiros (sledge pilots in traditional white suits) steer a wicker basket sled 2 km down the cobblestone road to Livramento. €30 per sled (fits 2 people — €15 each). Book at the Monte Palace gardens entrance.",
            "11:30 — Monte Palace Tropical Garden (€12.50 entry): 70,000 sqm of exotic plants, azulejo tile panels from Portuguese history, and a lake with Japanese koi. Madeira's best garden by far.",
            "13:30 — Walk down from Monte to Funchal on foot (free) via the old pilgrims' staircase — 45 minutes downhill with great views.",
            "15:30 — Mercado dos Lavradores: buy passion fruit, custard apples, tabaibo, and exotic flowers — Madeira's market is the most colourful in Portugal. Free to browse.",
            "19:30 — Dinner: grilled espada (scabbardfish) at Restaurante do Forte for €13.",
          ],
          cost: "€50–65 (cable car, toboggan, garden, food)",
        },
        {
          day: "Day 5",
          title: "Cabo Girao & West Coast Departure",
          items: [
            "09:00 — Drive west to Cabo Girao: Europe's second-highest sea cliff at 580m — the glass-floor skywalk platform over the void is free and completely vertigo-inducing.",
            "11:00 — Continue west to Porto Moniz natural lava pools: natural seawater pools formed by volcanic rock on the northwest tip of the island. Entry €1.50. Great for a morning swim.",
            "13:00 — Lunch in Porto Moniz at any of the restaurants overlooking the pools: lapas (limpets grilled with lemon and butter) for €8–10 — Madeira's essential beach snack.",
            "15:00 — Drive the scenic ER101 north coast road back toward Funchal via Sao Vicente with its basalt sea caves.",
            "18:00 — Return rental car; final poncha at the Old Town bar. Flight departs or extend to another island.",
          ],
          cost: "€40–55 (car, pools, food)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Funchal Arrival & Zona Velha",
          items: [
            "13:00 — Arrive FNC; pre-booked private transfer to hotel (€30) — many 4-star hotels sit on the clifftop above Funchal with Atlantic views from €90–130/night.",
            "15:00 — Check in to a 4-star cliff hotel or boutique Old Town guesthouse; request a sea-view room.",
            "16:30 — Guided Old Town walking tour (€18, 2 hours) — a local guide explains the history of the painted tile doors, the levada system origins, and traditional wicker basket chairs.",
            "19:00 — Dinner at Armazem do Sal (salt warehouse restaurant, €35/pp): creative Madeiran cuisine in a converted 16th-century salt warehouse with original stone floors and ceiling beams.",
            "21:30 — Poncha tasting at a traditional adega with paired local honey cakes; drinks for two €12.",
          ],
          cost: "€130–160 (hotel, transfer, dinner, tour)",
        },
        {
          day: "Day 2",
          title: "Levada das 25 Fontes & Risco Falls",
          items: [
            "08:00 — Hire a car (€45–55/day from reputable agencies, with full insurance) — essential for 5 days in Madeira.",
            "09:30 — Drive to Rabacal: the trailhead for both the Levada do Risco (25-minute walk to a 100m waterfall, free) and Levada das 25 Fontes (4 km to a pool fed by 25 springs, free). Two of Madeira's most beautiful short hikes combined.",
            "13:00 — Picnic at the 25 Fontes pool: pack supplies from a local padaria (bakery) in Funchal the night before.",
            "15:30 — Drive via Paúl da Serra plateau — a vast moorland above 1,300m with windmills, wild horses, and horizontal cloud formations.",
            "18:30 — Return to Funchal; dinner at Il Gallo d'Oro (1 Michelin star, lunch menu €38) or Tasca restaurant for traditional espetada (€22/pp).",
          ],
          cost: "€130–150 (car, food, dinner)",
        },
        {
          day: "Day 3",
          title: "Pico do Arieiro & Santana Village",
          items: [
            "08:00 — Early drive to Pico do Arieiro (1,818m) — sunrise above the clouds is extraordinary. Bring layers.",
            "09:30 — Hike PR1 ridge trail to Pico Ruivo: 9 km of jaw-dropping ridge walking with tunnels, metal stairways, and Atlantic views on both sides. Allow 3–4 hours.",
            "13:30 — Lunch at the Pico Ruivo mountain refuge (Abrigo do Pico Ruivo, €12–15): traditional caldo verde soup and grilled chicken in one of Europe's most dramatically situated restaurants.",
            "16:00 — Drive to Santana: visit the traditional palheiro thatched houses and the Santana theme park for local craft context (€8 entry).",
            "19:30 — Return via the north coast road; dinner in Funchal at O Jango restaurant: Madeiran seafood tasting for €28/pp.",
          ],
          cost: "€140–160 (car, hike lunch, dinner, village)",
        },
        {
          day: "Day 4",
          title: "Monte Palace, Toboggan & Eastern Madeira",
          items: [
            "09:00 — Cable car up to Monte (€22 return) and Monte Palace Tropical Garden (€12.50).",
            "11:00 — Monte toboggan ride (€30 per sled, two people) — the most unique transport experience in Europe.",
            "13:00 — Drive east to Ponta de Sao Lourenco: Madeira's arid eastern peninsula, completely different in landscape from the green west. The PR8 trail (3 km each way) offers dramatic cliff-edge walking with sea stacks and eroded volcanic rock. Free.",
            "16:30 — Stop at Caniçal fishing village for afternoon limpets (lapas) and a beer at a quayside cafe.",
            "19:30 — Dinner at Wine & Beef restaurant Funchal: Madeiran beef espetada with local Verdelho wine (€30/pp).",
          ],
          cost: "€130–150 (cable car, toboggan, food, trail)",
        },
        {
          day: "Day 5",
          title: "Cabo Girao, Porto Moniz & Farewell",
          items: [
            "09:00 — Cabo Girao skywalk (free) — arrive before 10am to avoid tour groups; the glass floor over the 580m cliff is best in morning light.",
            "11:00 — Porto Moniz natural lava pools swim (€1.50 entry) — the Atlantic crashing into black volcanic pools is pure drama.",
            "13:30 — Lunch at Restaurante Orca in Porto Moniz (€22/pp): superior limpets, grilled fish, and local wine with ocean views.",
            "16:00 — Drive back via the north coast tunnels; stop at Seixal for a black-sand beach walk.",
            "18:30 — Return car; final Madeiran poncha at the Old Town; depart.",
          ],
          cost: "€120–140 (food, pools, scenic drive)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€300–500/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at a Cliff Palace",
          items: [
            "13:00 — Private airport transfer in a Mercedes V-Class (€60) to Reid's Palace (the iconic pink cliff hotel since 1891) or Belmond Reid's alternatives like The Vine or Choupana Hills.",
            "15:00 — Afternoon tea at Reid's Palace: the most famous tradition in Madeira — tiered cake stands, finger sandwiches, and Atlantic views from the clifftop terrace. €65/pp.",
            "18:00 — Private guided Old Town tour with an art historian focused on the tile door project — 2 hours, €120 per couple.",
            "20:30 — Dinner at William restaurant (1 Michelin star, €95/pp tasting menu): seasonal Madeiran produce with Atlantic-influenced techniques; the black scabbardfish with foam and seasonal greens is exceptional.",
          ],
          cost: "€400–550 (hotel, tea, private tour, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Levada Walk & Estate Wine",
          items: [
            "08:00 — Private guided Levada do Caldeiro Verde hike with a certified mountain guide (€120/couple, 5 hours) — private guides carry emergency kit, know the geology, and time the walk for the best waterfall light.",
            "14:00 — Lunch at the private quinta of a Madeiran wine family: Blandy's Wine Lodge, Henriques & Henriques, or Barbeito offer private cellar tours with tasting lunches (€80/pp, book ahead).",
            "17:00 — Return to hotel; sunset cocktails at Reid's lower terrace pool bar — Madeira Sour (local brandy, passion fruit, lime) for €20.",
            "20:30 — Dinner at Armazem do Sal: chef's table experience with wine pairing (€130/pp).",
          ],
          cost: "€450–600 (hotel, guide, wine estate, dinner)",
        },
        {
          day: "Day 3",
          title: "Helicopter to Pico Ruivo & Eastern Coast",
          items: [
            "08:00 — Private helicopter tour of Madeira (€300/pp, 45 minutes) — see Pico Ruivo, Cabo Girao, the Desertas islands, and the laurel forest canopy from altitude; several operators depart from Funchal marina.",
            "10:30 — Car-with-driver to Ponta de Sao Lourenco for the PR8 cliff trail with a private naturalist guide (€150).",
            "14:00 — Lunch at Quinta do Furão hotel restaurant in Santana (€45/pp): cliff-edge setting with panoramic north coast views; the tuna and local cheese platter is exceptional.",
            "17:00 — Spa session at hotel: volcanic stone massage using local basalt stones — €120/hour.",
            "20:30 — Private dinner at a quinta with traditional Madeiran musicians (arraial style) arranged by concierge; espetada over open laurel fire, Madeira wine, and live cavaquinho guitar.",
          ],
          cost: "€500–700 (helicopter, guide, lunch, spa, private dinner)",
        },
        {
          day: "Day 4",
          title: "Monte Toboggan & Quinta do Palheiro Gardens",
          items: [
            "09:00 — Private cable car reservation (hotel can arrange off-peak access) to Monte.",
            "09:30 — Private toboggan ride booked through hotel concierge: the carreiros give a longer route for VIP bookings — €80 for the extended private experience.",
            "11:00 — Quinta do Palheiro Ferreiro gardens (€12.50): 12 hectares of English landscape design planted since 1804 with rare camellias and subtropical species; far less crowded than Monte Palace.",
            "14:00 — Lunch at Estalagem Quinta do Palheiro (€50/pp): the estate's restaurant in a 19th-century manor house; local meats and Madeiran wine from the estate vineyard.",
            "17:00 — Private sunset sailing boat charter from Funchal marina (€200/couple, 2 hours): dolphins and fin whales are common year-round off Madeira's coast; champagne on deck at sunset.",
            "21:00 — Final Michelin dinner: Il Gallo d'Oro full tasting menu with Madeiran wine pairing (€150/pp).",
          ],
          cost: "€550–700 (hotel, toboggan, garden lunch, sailing, dinner)",
        },
        {
          day: "Day 5",
          title: "West Coast & Farewell",
          items: [
            "09:00 — Private driver to Cabo Girao skywalk and west coast at leisure — stop at Câmara de Lobos fishing village (Winston Churchill's favourite painting spot), Ribeira Brava seafront, and Seixal beach.",
            "12:30 — Farewell lunch at a clifftop quinta in the west with fresh Atlantic tuna and Madeiran wine.",
            "15:00 — Return to Funchal; shopping at premium Madeira embroidery boutiques (IBTAM-certified pieces) and Blandy's Madeira wine shop.",
            "18:00 — Private transfer to airport; depart.",
          ],
          cost: "€350–500 (private driver, lunch, shopping)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€25–35 (hostel or guesthouse)",
      food: "€18–25 (tabernas + market)",
      transport: "€8–15 (buses + cheap car share)",
      activities: "€10–20 (levadas free, gardens paid)",
      total: "€60–80/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90–130 (4-star cliff hotel)",
      food: "€40–60 (restaurants + wine)",
      transport: "€45–55 (hire car full day)",
      activities: "€25–40 (cable car, toboggan, garden)",
      total: "€120–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–600 (Reid's Palace or equivalent)",
      food: "€100–200 (Michelin + wine estate)",
      transport: "€60–300 (private driver or helicopter)",
      activities: "€80–200 (private guides + spa)",
      total: "€300–500+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€18–25 (dorm hostel)",
      food: "€10–18 (self-catering + taberna lunches)",
      transport: "€3–8 (public bus only)",
      activities: "€0–10 (all levadas free)",
      total: "€40–55/day",
    },
    {
      tier: "👪 Family",
      accommodation: "€100–160 (apartment or family room)",
      food: "€50–70 (self-catering + restaurants)",
      transport: "€40–55 (hire car, petrol)",
      activities: "€30–50 (gardens, pools, toboggan)",
      total: "€130–180/day",
    },
  ],
  mistakes: [
    {
      icon: "🚌",
      title: "Relying only on public buses",
      desc: "Madeira's public buses are cheap but infrequent and do not reach most levada trailheads, clifftop viewpoints, or the mountain summits. A hire car for at least 3 of 5 days costs €35–55 and unlocks 80% of the island's best experiences.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌧️",
      title: "Not checking the mountain weather forecast",
      desc: "Madeira's north side can be overcast when the south is sunny, and Pico do Arieiro can be in cloud cover by 11am even on a clear day. Check the IPMA forecast and aim for summit hikes before 10am. The island has a microclimate in every valley.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏨",
      title: "Booking a hotel in the wrong area",
      desc: "Funchal's tourist strip hotels on the Lido area are convenient but characterless. Stay in the Old Town (zona velha) for atmosphere and restaurants, or in the hills above Funchal for cliff views. Both are 15 minutes from the centre.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🥾",
      title: "Underestimating levada difficulty",
      desc: "The Caldeiro Verde and PR1 ridge trails involve steep terrain, long tunnels without lighting, and exposed cliff edges. Bring a head torch for tunnels, trekking poles, trail shoes (not trainers), and enough water for 6–7 hours. The tunnels can be knee-deep in water after rain.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🐳",
      title: "Missing the whale watching",
      desc: "Madeira has some of the best year-round cetacean watching in Europe — sperm whales, pilot whales, bottlenose dolphins, and occasional blue whales are all seen regularly. Book a 3-hour catamaran trip (€45) from Funchal marina — most visitors only discover this on their last day.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🍋",
      title: "Order poncha the traditional way",
      desc: "Poncha is Madeira's soul in a glass — aguardente (sugarcane spirit), honey, and lemon juice stirred with a caralhinho (wooden stirrer). Order it at a traditional adega in the Old Town, never at a tourist bar. The best costs €2–3 and comes with a side of local honey cake. Book activity tours on Madeira at https://www.getyourguide.com/s/?q=Madeira&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌊",
      title: "Swim at Porto Moniz, not Funchal beach",
      desc: "Funchal's pebble beach is crowded and unremarkable. Porto Moniz's natural lava pools on the northwest tip have natural seawater pools of extraordinary clarity, formed by volcanic basalt. Entry is €1.50 and the pools are spectacular at low tide.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌅",
      title: "Time Cabo Girao for a weekday morning",
      desc: "Europe's second-highest sea cliff at 580m gets busy with tour buses after 10am. Arrive before 9:30am on a weekday for the glass-floor skywalk with no queue. The cliff farmers' terraces below, tended by cable baskets, are visible on clear days.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏔️",
      title: "Pack for four seasons in one day",
      desc: "Funchal seafront can be 23C while Pico do Arieiro summit is 5C with wind. Always carry a waterproof jacket and a warm layer in your day pack, regardless of the morning weather in Funchal. The island's altitude range from sea level to 1,862m creates extraordinary climate variation.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is Madeira a good destination for non-hikers?",
      a: "Absolutely. While Madeira's levada walks are famous, the island has beaches (Prainha, Porto Santo island), botanical gardens, the Monte toboggan, whale watching, wine estates, a vibrant food and cocktail scene in Funchal, and dramatic scenic drives along the north coast. Non-hikers can fill five days without setting foot on a trail.",
    },
    {
      q: "Do I need a visa to visit Madeira if I have an Indian passport?",
      a: "Yes. Madeira is a Portuguese autonomous territory and part of the Schengen Area. Indian passport holders need a Schengen visa (Type C). Apply at the Portuguese Consulate or VFS Global, 6–8 weeks before travel. The fee is €80 and you will need hotel bookings, return flights, travel insurance, and 3 months of bank statements.",
    },
    {
      q: "What is the best month to visit Madeira?",
      a: "Madeira has a mild climate year-round, but April–June and September–October offer the best hiking conditions (clear summits, lower humidity, fewer crowds). August is peak European summer with higher prices and busier levada trails. December–January is the quietest with excellent hotel deals, though mountain weather is more unpredictable.",
    },
    {
      q: "How do I get from Madeira to Porto Santo island?",
      a: "Porto Santo is Madeira's sandy sister island with a 9 km golden beach. Ferry (Porto Santo Line) takes 2.5 hours each way and costs €55–70 round trip. The 30-minute flight on SATA Air Acores costs €70–120 each way. Porto Santo makes an excellent day trip or overnight extension for beach lovers, as Madeira itself has very few sandy beaches.",
    },
  ],
  combineWith: ["lisbon-4-days", "porto-3-days", "azores-5-days"],
  relatedSlugs: ["lisbon-4-days", "porto-3-days", "venice-4-days", "santorini-4-days"],
  galleryQuery: "madeira island funchal tropical garden levada",
};

export const metadata: Metadata = {
  title: "Madeira in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The ultimate 5-day Madeira travel guide — levada walks, Pico do Arieiro, Funchal old town, Monte toboggan, Cabo Girao skywalk, poncha cocktails, and tropical gardens. Budget €60/day to luxury Reid's Palace.",
  keywords: [
    "Madeira itinerary",
    "Madeira 5 days",
    "Madeira travel guide 2026",
    "levada walks Madeira",
    "Pico do Arieiro",
    "Funchal old town",
    "Monte toboggan",
    "Cabo Girao skywalk",
    "Madeira visa Indian passport",
    "Portugal islands",
  ],
  openGraph: {
    title: "Madeira in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Levada walks, Pico do Arieiro summits, Monte toboggan, Cabo Girao skywalk, and poncha cocktails — Madeira in 5 days from €60/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/madeira-5-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madeira in 5 Days: Complete 2026 Itinerary",
    description: "Levada walks, volcanic summits, tropical gardens, and the Monte toboggan — the complete Madeira guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/madeira-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Madeira in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Madeira in 5 Days",
          item: "https://www.incredibleitinerary.com/blog/madeira-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Madeira",
      description:
        "Madeira, Portugal — a volcanic Atlantic island with levada walking trails, tropical gardens, dramatic sea cliffs, and the famous Monte toboggan ride.",
      geo: { "@type": "GeoCoordinates", latitude: 32.7607, longitude: -16.9595 },
    },
  ],
};

export default function MadeiraPage() {
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
