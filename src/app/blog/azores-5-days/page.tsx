import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Azores",
  country: "Portugal",
  countryFlag: "🇵🇹",
  slug: "azores-5-days",
  heroQuery: "azores sete cidades twin lakes sao miguel portugal",
  heroAlt: "Azores Sete Cidades twin lakes in volcanic caldera on Sao Miguel island, Portugal",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "The Azores are Europe's best-kept secret — nine volcanic islands in the middle of the Atlantic where calderas hold twin lakes of different colours, geysers bubble in a village square, blue hydrangeas line every road, and sperm whales surface 3km offshore. Sao Miguel, the largest island, rewards five full days: the Sete Cidades twin lakes at dawn, thermal pools at Furnas, whale watching from Pico lighthouse, hydrangea-bordered backroads, and seafood caldeirada that tastes of nothing but the ocean it just left.",
  stats: { duration: "5 Days", budgetFrom: "€50", bestMonths: "May–Sep", airport: "PDL" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Arrival & Ponta Delgada" },
    { id: "day2", emoji: "📅", label: "Day 2 — Sete Cidades & West" },
    { id: "day3", emoji: "📅", label: "Day 3 — Furnas Thermal Valley" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C short stay)"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Portuguese Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flights, 3-month bank statements, travel insurance"],
        ["Notes", "Portugal and the Azores use the same Schengen visa. Apply 6–8 weeks ahead. Biometric appointment required."],
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
        ["Notes", "UK passport holders visa-free post-Brexit but subject to the 90/180 Schengen day rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€50–70/day",
      days: [
        {
          day: "Day 1",
          title: "Ponta Delgada Arrival & Waterfront",
          items: [
            "14:00 — Arrive Ponta Delgada Airport (PDL); take a taxi to city centre (€8–10) or walk 20 minutes; check in to a budget hostel or guesthouse in the old town (€20–35/night)",
            "15:30 — Walk the Ponta Delgada waterfront and the iconic black and white basalt fortress gates (Portas da Cidade) — the symbol of Sao Miguel and completely free to photograph",
            "17:00 — Jardim Jose do Canto botanical garden (€1.50) — lush with azaleas, hydrangeas, and Japanese cedars; a calm introduction to the Azorean landscape",
            "19:00 — Dinner at a tasca (small local restaurant) in the old town: caldeirada de peixe (Atlantic fish stew), local bread, and a glass of Verdelho wine from the Azores (€12–16)",
            "21:00 — Evening stroll along the marina — the Azores are extremely safe; the waterfront at night with the castle silhouette is beautiful",
          ],
          cost: "€30–40 (taxi, garden, dinner)",
        },
        {
          day: "Day 2",
          title: "Sete Cidades Twin Lakes & Caldeira",
          items: [
            "07:00 — Rent a car (€30–40/day, essential for the Azores) and drive west to Sete Cidades — 45 minutes from Ponta Delgada on the EN5-1A mountain road; arrive early to see the caldera before clouds fill in",
            "08:30 — Vista do Rei viewpoint above Sete Cidades caldera — the twin lakes (Lagoa Azul and Lagoa Verde) glow blue and green in different light conditions due to different algae and depth; completely free viewpoint",
            "10:00 — Drive down into the caldera village of Sete Cidades — a community of 800 people living inside a dormant volcano; rent a kayak on Lagoa Azul (€10/hour) for the most surreal paddling experience in Europe",
            "12:30 — Picnic lunch with supplies from Ponta Delgada market (buy the morning before): queijadas (sweet pastry) €0.80 each, local cheese, fresh bread; eat at the caldera lake shore",
            "14:30 — Sete Cidades village church and black basalt streets; then drive to Mosteiros village on the north coast — black volcanic rock pools for swimming in the Atlantic swell (free, naturally formed)",
          ],
          cost: "€40–50 (car hire, kayak, picnic, fuel)",
        },
        {
          day: "Day 3",
          title: "Furnas Thermal Valley & Lagoa das Furnas",
          items: [
            "09:00 — Drive east to Furnas village (45 minutes) — the most geothermally active village in Europe; park near the main square",
            "09:30 — Furnas calderas (fumaroles in the village square) — free to see; dozens of geothermal pools bubble and hiss at 100 degrees C; stalls sell eggs cooked in the volcanic steam",
            "11:00 — Terra Nostra Park (€5.50) — a stunning 19th-century botanical garden around a thermal pool; the iron-rich thermal pool (33 degrees C) is open for swimming as part of the entry fee; the orange water stains swimsuits but is perfectly safe",
            "13:00 — Cozido das Furnas lunch — a local stew slow-cooked underground in volcanic soil for 8 hours; available at Restaurante Tony (reservation needed for groups); €14–18/pp including bread and wine",
            "16:00 — Walk or drive to Lagoa das Furnas (lake inside the Furnas caldera) — steaming vents on the lake shore, forested volcanic cone, and complete silence; the footpath around part of the lake takes 45 minutes",
          ],
          cost: "€35–45 (car, park, cozido lunch)",
        },
        {
          day: "Day 4",
          title: "Whale Watching & Nordeste Coast",
          items: [
            "08:00 — Whale watching boat trip from Ponta Delgada (€55/person, book 1–2 days ahead) — the Azores sees 20+ whale species including sperm whales, blue whales, and sei whales; May to October is peak season with 95%+ sighting rates on sperm whales",
            "11:30 — Return from whale watching; drive the scenic EN1-1A along the northeast coast through Nordeste — the greenest, least-visited part of Sao Miguel with hydrangea-lined roads, cedar forests, and clifftop viewpoints",
            "13:00 — Lunch in Nordeste village: grilled limpets (lapas grelhadas) with butter and garlic (the signature Azorean appetiser, €6–8), fish of the day, and local beer",
            "15:30 — Miradouro da Madrugada viewpoint (free) — a dramatic cliff viewpoint on the northeast tip of Sao Miguel with 270-degree Atlantic views; often in the clouds but stunning when clear",
            "18:00 — Return to Ponta Delgada via the south coast; final market visit",
          ],
          cost: "€60–70 (whale watching, fuel, lunch)",
        },
        {
          day: "Day 5",
          title: "Lagoa do Fogo & Departure",
          items: [
            "08:00 — Drive to Lagoa do Fogo (Lake of Fire) — the most pristine caldera lake on Sao Miguel, inside a nature reserve with no development; the 6km roundtrip hike descends 300m to the lake shore; arrive early before afternoon fog",
            "10:30 — Return drive via Ribeira Grande on the north coast — a beautiful town with traditional Azorean architecture, the old black and white church facade, and a good bakery for pasteis de nata",
            "12:30 — Final lunch in Ponta Delgada old town: alheira (smoked sausage from the mainland), local potatoes, and queijadas for dessert (€10–14)",
            "15:00 — Return hire car; airport check-in for PDL; most flights to Lisbon (1h45m) and onward connections",
          ],
          cost: "€30–40 (hike supplies, fuel, lunch, airport)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€110–160/day",
      days: [
        {
          day: "Day 1",
          title: "Ponta Delgada — Historic Centre & Seafood Dinner",
          items: [
            "13:00 — Arrive PDL; transfer to a 3–4 star hotel in Ponta Delgada old town (€70–120/night) — boutique hotels in converted Azorean manor houses (solares) offer excellent value and charming basalt architecture",
            "15:00 — Museu Carlos Machado (€3) — Azores natural history and Azorean art in a former convent; understand the volcanic geology and endemic species before exploring the island",
            "17:00 — Guided Ponta Delgada walking tour (€15/person, 1.5 hours) — a local guide explains the baroque churches, the 16th-century city walls, and the whale-hunting history that shaped Azorean culture until the 1980s",
            "20:00 — Dinner at a mid-range seafood restaurant: Atlantic tuna steak (atum), lapas grelhadas, grilled octopus, and a bottle of Azores Verdelho or Basalto white wine (€30–40/pp with wine)",
          ],
          cost: "€130–150 (hotel, museum, tour, seafood dinner)",
        },
        {
          day: "Day 2",
          title: "Sete Cidades — Sunrise Hike & Lagoa Azul Kayaking",
          items: [
            "06:30 — Drive to Vista do Rei (45 minutes) for sunrise above the Sete Cidades caldera — the light through morning mist over the twin lakes is the most photographed image in the Azores",
            "08:30 — Descend into the caldera; hire a guide for the Sete Cidades caldera rim trail (€35/person, 4 hours, 12km loop) — the trail offers aerial views of both lakes and passes through laurisilva cloud forest",
            "13:00 — Kayak on Lagoa Azul (€12/hour, guided option €25 for 2 hours) — paddle to the far shore where spiders' webs of moss drape over the water surface and herons fish in the reeds",
            "15:30 — Drive the panoramic EN1-1A west coast to Mosteiros black rock pools; afternoon swim in natural Atlantic pools with volcanic backdrop",
            "19:30 — Dinner back in Ponta Delgada: grilled cimpexes (barnacles) as a starter, alcatra (beef stewed in wine and spices from Terceira island), and local sweet wines (€25–35/pp)",
          ],
          cost: "€130–150 (car, guide, kayak, meals)",
        },
        {
          day: "Day 3",
          title: "Furnas — Thermal Soak, Botanical Garden & Cozido",
          items: [
            "09:00 — Drive to Furnas (45 minutes); start at Lagoa das Furnas for the early morning mist on the volcanic lake — the steam vents are most dramatic in cool morning air",
            "10:30 — Terra Nostra Park (€5.50) — 2 hours in the thermal pool and botanical garden; the collection of cycads, ginkgos, and tree ferns is one of the finest outside the tropics",
            "13:00 — Cozido das Furnas at Restaurante Tony or Caldeiras & Vulcoes (reservation required; €18–22/pp) — the volcanic-cooked stew is genuinely different from any other slow-cooked dish; the flavours absorbed from the mineral water are extraordinary",
            "15:30 — Furnas village calderas walk and free steam-cooked egg tasting (vendors sell them for €1.50 — the yolk has a slightly sulphuric mineral richness that is surprisingly good)",
            "18:00 — Return to Ponta Delgada; check in and relax; dinner at hotel or a local tasca",
          ],
          cost: "€120–140 (car, park, cozido, meals)",
        },
        {
          day: "Day 4",
          title: "Whale Watching & Tea Plantation",
          items: [
            "07:30 — Whale watching boat trip from Ponta Delgada (€55/person; choose a company with a marine biologist on board) — the Azores is the best whale watching destination in Europe; after the tour, request to see the vigia (lookout tower) where watchmen once spotted sperm whales for hunters",
            "12:00 — Drive north to Gorreana tea plantation (free entry, free tasting) — the only tea plantation in Europe, producing organic green and black teas since 1883; walk between the rows of waist-high tea bushes on a misty hillside",
            "13:30 — Lunch at a local restaurant in Ribeira Grande: bifanas (pork in bread rolls), caldo verde (kale soup), and a pastel de nata; €10–15",
            "15:30 — Caldeira Velha natural thermal waterfall (€5) — a warm waterfall (35 degrees C) inside a mossy fern gorge; visitors swim in the pools under the falls; genuinely magical and less visited than Furnas",
            "18:30 — Return to Ponta Delgada; final dinner: grilled Atlantic swordfish, roasted potatoes with bay leaf, and Azorean cheese board (€25–30/pp)",
          ],
          cost: "€120–145 (whale watching, car, thermal park, meals)",
        },
        {
          day: "Day 5",
          title: "Lagoa do Fogo Hike & Departure",
          items: [
            "07:30 — Drive to Lagoa do Fogo trailhead (30 minutes from Ponta Delgada); hike down to the crater lake (3km, 300m descent, 1.5 hours each way) — the lake is inside a protected reserve and can only be reached on foot; the turquoise-green water surrounded by pristine caldera walls is unlike anything else in Europe",
            "10:30 — Return hike and drive back; stop at a miradouro above the south coast for a final view of the island",
            "12:30 — Farewell lunch in Ponta Delgada: alcatra or atum com maracuja (tuna with passion fruit sauce), a classic Azorean combination (€18–22/pp)",
            "15:00 — Return hire car; explore the covered market (Mercado da Graca) for local produce gifts: tea, passion fruit liqueur, azorean cheese; PDL check-in for onward flights",
          ],
          cost: "€110–135 (hike, market, farewell lunch, airport)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€280–450/day",
      days: [
        {
          day: "Day 1",
          title: "Azorean Solar & Private Island Welcome",
          items: [
            "13:00 — Private transfer from PDL to a luxury quinta (estate hotel) or the Azor Hotel — rates from €200–400/night; the Azor Hotel has an infinity pool over the marina and exceptional Atlantic views",
            "15:30 — Private island orientation by a naturalist guide (€120, 2 hours) — understand the volcanic geology, endemic species, and cultural history before your days exploring; the guide customises the rest of your itinerary",
            "19:00 — Pre-dinner Verdelho white wine tasting on the hotel terrace — a sommelier-curated selection of the best Azorean wines including rare volcanic soil Verdelho and Biscoitos DOC whites (€60/person)",
            "20:30 — Dinner at a Ponta Delgada fine dining restaurant: tasting menu of Azorean Atlantic fish, Azorean beef (among Europe's best grass-fed beef), and local cheeses; €70–90/pp with wine pairing",
          ],
          cost: "€380–500 (hotel, guide, wine tasting, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Helicopter Caldera Tour & Sete Cidades",
          items: [
            "08:00 — Private helicopter tour of Sao Miguel (45 minutes, €650 for up to 3 passengers) — see all three calderas, the northeast coast cliffs, and the Furnas valley from the air; the twin lakes of Sete Cidades from 300m altitude are breathtaking",
            "10:30 — Descend to Sete Cidades caldera by car; private guided caldera rim hike (€80/person, 3 hours) with a volcanologist — understand the eruptive history and current geothermal monitoring of the active system",
            "13:30 — Picnic lunch at the lake prepared by hotel chef: smoked Azorean tuna on rye, locally produced cheeses, queijadas, and a bottle of chilled Basalto white wine (€45/person hotel picnic package)",
            "16:00 — Private kayak tour of Lagoa Azul with a guide (€60/person, 2 hours) — reach the far shore where the caldera walls drop directly to the water; complete silence except for birdsong",
          ],
          cost: "€600–800 (helicopter, guide, picnic, kayak)",
        },
        {
          day: "Day 3",
          title: "Furnas — Private Spa & Volcanic Cooking",
          items: [
            "09:00 — Private chauffeured transfer to Furnas (€60 return); exclusive early morning access to Terra Nostra botanical garden before public opening (arranged through hotel, €80 for group)",
            "10:30 — Extended thermal pool soak with a private spa therapist: Azorean mineral massage using local volcanic clay and sea salt (€120, 90 minutes, arranged at Terra Nostra Boutique Hotel spa)",
            "13:00 — Private cozido das Furnas experience — a local family cooks a private underground volcanic stew for your group with explanation of the technique; wines and desserts included (€80/person, book well ahead)",
            "16:00 — Private volcanic geology walk with a university volcanologist (€150, 2 hours) — the fumarole field, mineral water springs, and crater lake all explained by someone who monitors the volcano professionally",
            "20:00 — Return to Ponta Delgada; dinner at hotel",
          ],
          cost: "€450–600 (private spa, volcanic dinner, guide, transfer)",
        },
        {
          day: "Day 4",
          title: "Private Whale Watching & Gorreana Tea",
          items: [
            "07:30 — Private boat whale watching charter (half day, €400–600 for up to 4 people) — a private boat with a marine biologist means longer time with whale pods and access to areas the larger boats cannot reach; sperm whales, common dolphins, and occasionally blue whales in the deep Atlantic channel",
            "11:30 — Return to port; private transfer to Gorreana tea plantation for a private tea master session (€80/person) — taste all six teas with the plantation director, understand the unique terroir of Atlantic volcanic soil on tea flavour",
            "13:30 — Lunch at a clifftop restaurant above the north coast: Atlantic tuna tataki (Azorean tuna is world-class), local cheese fondue, and passion fruit sorbet (€45–55/pp)",
            "16:00 — Caldeira Velha private afternoon — thermal waterfall visit arranged exclusively before public opening (via hotel, €60 for the group); the fern-draped warm waterfall in complete privacy",
          ],
          cost: "€500–700 (private boat, tea session, lunch, waterfall)",
        },
        {
          day: "Day 5",
          title: "Lagoa do Fogo Private Trek & Departure",
          items: [
            "07:00 — Private guided trek to Lagoa do Fogo (€100/person, expert volcanologist-botanist guide) — early start ensures the caldera lake is clear of mist; the guide identifies endemic plants and explains why the lake is the most protected ecosystem on the island",
            "10:00 — Return and private transfer to Quinta da Abobora or equivalent rural estate for farewell brunch: organic Azorean eggs, homemade jams, fresh local cheeses, and Azorean smoked sausages on a farm terrace (€35/person)",
            "13:00 — Hotel checkout; hotel-arranged souvenir curation (premium Azorean tea, volcanic soil wines, artisanal queijadas) at a curated local shop; €80–150 budget for gifts",
            "15:30 — Private transfer to PDL Airport; departure lounge and onward flights",
          ],
          cost: "€300–450 (guide, brunch, gifts, airport transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–35 (hostel or budget guesthouse)",
      food: "€12–22 (tascas + market + picnic)",
      transport: "€30–40 (hire car + fuel per day)",
      activities: "€5–20 (parks + whale watching share)",
      total: "€50–70/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€70–120 (3–4 star boutique hotel)",
      food: "€30–50 (restaurants + wine)",
      transport: "€35–45 (hire car + fuel)",
      activities: "€25–50 (whale watching + guided hikes)",
      total: "€110–160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200–400 (quinta or luxury hotel)",
      food: "€80–160 (fine dining + wine tasting)",
      transport: "€80–250 (private car + helicopter)",
      activities: "€100–250 (private guides + exclusive access)",
      total: "€280–450+/day",
    },
    {
      tier: "🚗 Car + Sites Day",
      accommodation: "N/A",
      food: "€12–18 (local restaurant lunch)",
      transport: "€30–40 (hire car + fuel 150km)",
      activities: "€6–12 (caldera parks + trails)",
      total: "€50–75/self-drive day",
    },
    {
      tier: "🐋 Whale Watching Day",
      accommodation: "N/A",
      food: "€10–16 (taverna lunch + snacks)",
      transport: "€10–15 (taxi to port + harbour bus)",
      activities: "€55 (whale watching standard tour)",
      total: "€75–90/whale day",
    },
  ],
  mistakes: [
    {
      icon: "🚗",
      title: "Not booking a hire car before arriving",
      desc: "The Azores has almost no useful public transport outside Ponta Delgada city. Sete Cidades, Furnas, Lagoa do Fogo, the tea plantation, and Nordeste are all inaccessible without a car. Hire car supply is limited in peak season — book at least 4 weeks ahead. Without a car you will spend most of your trip on expensive taxis.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☁️",
      title: "Giving up after one cloudy viewpoint attempt",
      desc: "The Azores has highly variable weather — viewpoints like Vista do Rei can be completely obscured by cloud in the morning and spectacularly clear by afternoon. Always attempt viewpoints at different times of day. Many travellers see Sete Cidades twice (morning and evening) and get different experiences each time.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🐋",
      title: "Booking whale watching for the first day",
      desc: "Book whale watching for day 3 or 4, not day 1. If weather cancels the trip (it does happen), you need flexibility to reschedule. Most operators offer free rescheduling for weather cancellations. May–October gives the best sighting rates — the resident sperm whale population is present year-round but dolphin and other whale variety peaks in summer.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍲",
      title: "Missing cozido das Furnas without a reservation",
      desc: "The signature volcanic-cooked stew at Furnas is served at a handful of restaurants and requires a reservation, especially for lunch (when the pots come out of the ground around 12:30pm). Restaurante Tony and Caldeiras & Vulcoes are the two best options. Walk-ins are often turned away, especially on weekends.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "👙",
      title: "Wearing a good swimsuit to Terra Nostra thermal pool",
      desc: "The iron-rich thermal pool at Terra Nostra Park permanently stains light-coloured swimwear orange. Wear an old dark swimsuit or accept the staining. The orange water itself is perfectly safe and the park provides showers. Every year tourists ruin their favourite swimsuit by ignoring this warning.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌺",
      title: "Drive the hydrangea roads in June and July",
      desc: "The Azores hydrangea season peaks June to August when electric-blue hydrangeas line every road on Sao Miguel. The most spectacular drives are the EN1-1A mountain road through the centre and any road in the northeast Nordeste area. Book island experiences in advance at https://www.getyourguide.com/s/?q=Azores&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌋",
      title: "Attempt Lagoa do Fogo before 9am for clear views",
      desc: "Lagoa do Fogo sits inside a nature reserve at 600m elevation and clouds roll in from the Atlantic by mid-morning. The trail descends 300m and takes 1.5 hours each way — start no later than 7:30am for the best chance of a clear lake. The hike is well-marked and moderate difficulty.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🫖",
      title: "Visit Gorreana tea plantation early morning",
      desc: "Gorreana is the only working tea plantation in Europe and entry is free. The shop sells fresh-picked organic green and black teas at €4–8 per box — far cheaper and fresher than airport shops. Arrive before 10am to see the morning mist over the tea rows before tour groups arrive.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🐟",
      title: "Order lapas grelhadas as a starter everywhere",
      desc: "Grilled limpets (lapas grelhadas) — a plate of small shellfish grilled with butter, garlic, and lemon — are the definitive Azorean appetiser. They cost €6–8 and are available at virtually every seafood restaurant. The Azores limpets are larger and sweeter than anywhere else in Portugal. Always order them as a starter.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Which Azores island should I visit first?",
      a: "Sao Miguel is the best first Azores island — it is the largest, has the main international airport (PDL), and concentrates the most famous experiences: Sete Cidades, Furnas, Lagoa do Fogo, whale watching, and the tea plantation. Faial and Pico are spectacular for the Pico volcano hike and wine culture. For a multi-island trip of 10+ days, combine Sao Miguel with Faial and Pico, which are served by inter-island SATA flights.",
    },
    {
      q: "Is whale watching in the Azores worth it?",
      a: "Yes — the Azores is the best whale watching destination in Europe and among the top 5 in the world. Sperm whales (the largest toothed predators on earth) are resident year-round in the deep Atlantic channel between islands. The 95%+ sighting rate from May to October is exceptional. Trips last 3–4 hours, cost €50–60, and usually encounter multiple species including common dolphins, bottlenose dolphins, and occasional blue or fin whales.",
    },
    {
      q: "Do I need a hire car in the Azores?",
      a: "Yes, a hire car is essential for exploring Sao Miguel. Ponta Delgada city is walkable but Sete Cidades, Furnas, Lagoa do Fogo, the Nordeste coast, Gorreana tea plantation, and Caldeira Velha are all only accessible by car. Hire car rates start at €30–40/day and roads are excellent and well-signed. Book in advance during summer (June–September) as supply tightens significantly.",
    },
    {
      q: "What is the Azores like in terms of weather?",
      a: "The Azores has a mild, oceanic climate with average temperatures of 16–25 degrees C year-round, making any month viable. The weather changes rapidly — sunshine, rain, cloud, and mist can all occur within the same hour on the same hillside. This is part of the charm. May through September are the driest months. October through March has more rainfall but fewer tourists and lower prices. Always carry a light waterproof and check viewpoint conditions before driving up in the morning.",
    },
  ],
  combineWith: ["lisbon-4-days", "porto-3-days", "madeira-5-days"],
  relatedSlugs: ["lisbon-4-days", "porto-3-days", "iceland-7-days", "cyprus-5-days"],
  galleryQuery: "azores sao miguel sete cidades furnas thermal pools portugal",
};

export const metadata: Metadata = {
  title: "Azores in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 5-day Azores itinerary — Sao Miguel calderas, Sete Cidades twin lakes, Furnas thermal pools, whale watching, hydrangea roads, and seafood caldeirada. Budget €50/day to luxury quintas. Full visa info included.",
  keywords: [
    "Azores itinerary",
    "Azores 5 days",
    "Azores travel guide 2026",
    "Sao Miguel Azores",
    "Sete Cidades twin lakes",
    "Furnas thermal pools",
    "whale watching Azores",
    "Azores visa Indian passport",
    "blue hydrangea roads Azores",
    "seafood caldeirada Azores",
  ],
  openGraph: {
    title: "Azores in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Sete Cidades twin lakes, Furnas thermal pools, whale watching, and hydrangea roads — Azores in 5 days from €50/day to luxury quintas.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/azores-5-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azores in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Sete Cidades, Furnas, whale watching, and hydrangea roads — your complete Azores Sao Miguel guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/azores-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Azores in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Azores in 5 Days",
          item: "https://www.incredibleitinerary.com/blog/azores-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Azores",
      description:
        "Azores, Portugal — volcanic Sao Miguel island with Sete Cidades twin lakes, Furnas thermal pools, whale watching, hydrangea roads, and Atlantic seafood.",
      geo: { "@type": "GeoCoordinates", latitude: 37.7412, longitude: -25.6756 },
    },
  ],
};

export default function AzoresPage() {
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
