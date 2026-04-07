import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

export const metadata: Metadata = {
  title: "Galápagos Islands 7-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Galápagos Islands trip in 7 days. The ultimate Galápagos Islands travel guide — giant tortoises, marine iguanas, blue-footed boobies, sea lions,.",
  keywords: [
    "Galapagos Islands travel guide",
    "Galapagos itinerary 7 days",
    "Galapagos cruise budget",
    "giant tortoises Santa Cruz",
    "blue footed booby North Seymour",
    "marine iguana Fernandina",
    "snorkelling Galapagos",
    "Charles Darwin Research Station",
    "Bartolome island",
    "Espanola albatross",
    "Ecuador travel 2026",
    "Galapagos live aboard",
    "Galapagos entrance fee",
    "sea lion Galapagos",
    "Galapagos National Park",
  ],
  openGraph: {
    title: "Galápagos Islands 7-Day Itinerary 2026: Trip Planner",
    description:
      "Where animals never learned to fear humans. Sea lions, giant tortoises, marine iguanas, and blue-footed boobies — your complete Galápagos itinerary from budget to luxury live-aboard.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/galapagos-7-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Galápagos Islands giant tortoise on Santa Cruz with volcanic landscape",
      },
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/galapagos-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Galápagos Islands in 7 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Swimming with sea lions, giant tortoises, marine iguanas, and blue-footed boobies — complete Galápagos itinerary from $180/day to $600/day.",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/galapagos-7-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Galápagos 7-Day Guide", item: "https://www.incredibleitinerary.com/blog/galapagos-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Galápagos Islands",
      description:
        "The volcanic archipelago 1,000km off Ecuador's coast that inspired Darwin's theory of evolution — a UNESCO World Heritage Site where animals have never learned to fear humans.",
      url: "https://www.incredibleitinerary.com/blog/galapagos-7-days",
      touristType: ["Wildlife enthusiasts", "Divers", "Snorkellers", "Eco-tourists", "Photographers", "Luxury travellers"],
    },
  ],
};

const data: UniversalBlogData = {
  destination: "Galápagos Islands",
  country: "Ecuador",
  countryFlag: "🇪🇨",
  slug: "galapagos-7-days",
  heroQuery: "galapagos islands giant tortoise sea lion iguana ecuador",
  heroAlt: "Galápagos Islands giant tortoise on Santa Cruz with volcanic landscape",
  category: "South America",
  date: "April 5, 2026",
  readTime: "18 min read",
  intro:
    "A sea lion pup nibbles your fins while you try to photograph a sea turtle, and a marine iguana surfaces beside you and sneezes a jet of salt straight into your mask. On the beach, a blue-footed booby is performing its mating dance — lifting each absurd azure foot in slow, solemn alternation — for an audience of absolutely nobody. A giant tortoise, 150 years old and entirely indifferent to your existence, plods across the path it has been plodding across since before your great-grandparents were born. This is the Galápagos, where Darwin saw the machinery of evolution at work and where you will see it too — because the animals here never learned to fear humans, and a thousand years from now, if we do this right, they still won't have.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$180",
    bestMonths: "Jun–Nov (diving) or Dec–May (baby animals)",
    airport: "GYE (Guayaquil) or UIO (Quito) → GPS (Baltra)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
    { id: "related", emoji: "📖", label: "Related Guides" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Visa for Ecuador", "Indian passport holders do NOT require a tourist visa for Ecuador for stays up to 90 days. Ecuador operates a visa-free policy for Indian passport holders — simply present your passport at Quito (UIO) or Guayaquil (GYE) airport on arrival."],
        ["Galápagos National Park Fee", "ALL visitors to the Galápagos must pay a $100 USD Galápagos National Park entrance fee on arrival at Baltra (GPS) or San Cristóbal airport. Pay in cash (USD) or by card. This fee funds conservation — it is compulsory and non-negotiable. Keep your receipt for the entire trip as inspectors check it."],
        ["Transit Control Card (TCT)", "A Transit Control Card costing $20 USD is also required and is typically purchased at the mainland airport (Guayaquil or Quito) before boarding your Galápagos flight. Airlines usually collect this before you board. Keep this card for the duration of your stay."],
        ["Flight Requirements", "You must fly to the Galápagos from either Guayaquil (GYE, 1 hour 45 min) or Quito (UIO, 3 hours). Two main airlines: LATAM and Avianca. Flights cost $300–600 return. Book at least 6–8 weeks ahead, especially for December–April. No direct international flights to the Galápagos — must transit through mainland Ecuador."],
        ["Permitted Items", "Strict biosecurity applies. Fresh fruit, vegetables, animals, and plant material are prohibited from being brought into the Galápagos. Bags are checked on arrival. Declare everything. Violations can result in fines and confiscation."],
      ],
    },
    {
      flag: "🌍",
      title: "US / UK / EU / AU Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa for Ecuador", "US, UK, EU, and Australian citizens do not require a visa for Ecuador. Tourist entry is visa-free for up to 90 days. Present your passport on arrival in Guayaquil or Quito."],
        ["Galápagos National Park Fee", "Same as above — $100 USD Galápagos National Park entrance fee required for all visitors on arrival at Baltra or San Cristóbal. USD cash or card accepted."],
        ["Transit Control Card (TCT)", "$20 USD, purchased at the mainland airport before your flight to the Galápagos. Keep it for the duration of your stay — it is checked by authorities on inter-island vessels and on departure."],
        ["Travel Insurance Note", "Travel insurance with medical evacuation coverage is strongly recommended for the Galápagos. Medical facilities on the islands are limited to basic care. Serious medical emergencies require evacuation to mainland Ecuador. Water activities (diving, snorkelling, kayaking) should be specifically covered."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$180–220/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at Baltra — Puerto Ayora, Santa Cruz",
          items: [
            "Fly from Guayaquil or Quito to Baltra (GPS). Pay the $100 Galápagos National Park fee on arrival (cash or card). Take the free Galápagos National Park bus to the ferry crossing (1 min boat ride, $1), then public bus to Puerto Ayora, the main town on Santa Cruz ($3, 45 minutes).",
            "Check into a budget guesthouse or hostel in Puerto Ayora — La Peregrina, Hostal Los Amigos, or similar. Rooms $25–50/night. Puerto Ayora is a genuine small town: cheap restaurants, dive shops, fish market, and sea lions sleeping on benches.",
            "Afternoon: Walk to Tortuga Bay — a stunning white-sand beach 2.5km from Puerto Ayora (free, 45-minute walk through the national park). Marine iguanas bask on the rocks. Further along Tortuga Bay is a protected cove where calm water is ideal for swimming with sea turtles.",
            "Dinner at the waterfront restaurants near the fish market — fresh grilled fish, rice, and salad (the ceviche here is superb). $8–15 per person. After dinner: watch sea lions hauled out on the town dock.",
          ],
          cost: "$80–120 total (excluding $100 park fee on Day 1)",
        },
        {
          day: "Day 2",
          title: "Charles Darwin Research Station & Giant Tortoise Reserve",
          items: [
            "Morning: Charles Darwin Research Station (free entry, open daily). The station conducts the Galápagos giant tortoise breeding programme — you can observe juvenile tortoises at various stages of growth, from hatchlings the size of your fist to 50-year-olds with shells half a metre wide. The story of Lonesome George (the last Pinta Island tortoise, died 2012) is displayed here.",
            "10:30am: Take a taxi or rent a bicycle to El Chato Tortoise Reserve (10km from Puerto Ayora, $20–25 by taxi return). This private ranch allows free-roaming giant tortoises in a highland forest setting. Tortoises wander across the road, graze beside muddy wallows, and occasionally block your path. The most authentic giant tortoise experience in the Galápagos — no fences, just tortoises going about their ancient business.",
            "12:30pm: Lunch at one of the highland finch restaurants near the tortoise reserve. A full meal with fresh juice: $8–12.",
            "3:00pm: Lava tunnels near Santa Cruz highlands — volcanic tubes up to 100m long, some large enough to walk through upright. Entry $5. Remarkably well-preserved geological formations from shield volcano eruptions.",
            "Evening: Back in Puerto Ayora. Dive shop browsing for tomorrow's activities. Budget snorkelling tours depart daily from the waterfront at 8am ($40–60/person).",
          ],
          cost: "$60–90 total",
        },
        {
          day: "Day 3",
          title: "North Seymour — Frigatebirds & Blue-Footed Boobies",
          items: [
            "8:00am: Day trip to North Seymour Island by panga (small motorboat, $100–120 including guide, snorkelling, and lunch). All visitor sites in the Galápagos require a licensed naturalist guide — this is non-negotiable and is enforced. Book through your guesthouse or a local agency the evening before.",
            "North Seymour is one of the best wildlife sites in the entire archipelago. Magnificent frigatebirds inflate their red gular pouches to the size of red balloons during mating season (Dec–Jan primarily but visible year-round). Blue-footed boobies nest on the ground beside the path — eggs, chicks, and adults at close range. The chicks are improbably fluffy white and entirely unbothered by your camera.",
            "Snorkelling at North Seymour: sea lions swim through the snorkellers deliberately, cormorants dive alongside, and Galápagos penguins (the world's second-smallest penguin, living on the equator due to the cold Humboldt Current) may appear. Water temperature 20–24°C.",
            "Return to Puerto Ayora by 4pm. Afternoon free for kayak hire ($15/hour) in Academy Bay.",
            "Dinner: ask locally for the day's catch at the fish market restaurants.",
          ],
          cost: "$130–160 total",
        },
        {
          day: "Day 4",
          title: "Bartolomé — Pinnacle Rock & Snorkelling with Penguins",
          items: [
            "7:00am: Day trip to Bartolomé Island — the most photographed spot in the Galápagos. The view from the summit (372 steps, 30 minutes) looks over Pinnacle Rock and the twin bays of Bartolomé, with Santiago's lava fields stretching to the horizon. The landscape is entirely volcanic — red, black, and ochre cinder fields with almost no vegetation. The geology lesson is immediate and visceral.",
            "Snorkelling at Bartolomé: the site is famous for Galápagos penguins (which nest in the rocks near Pinnacle Rock) darting through the water at extraordinary speed, white-tipped reef sharks resting on the sandy bottom, and sea turtles. Visibility is typically excellent at 10–15m.",
            "Lunch on the boat between sites.",
            "Afternoon: snorkelling at Sullivan Bay — a young (1897) lava field where pahoehoe lava created frozen ripples, ropy swirls, and gas bubble formations across a vast black plain. Almost nothing grows here. Marine iguanas work the tide pools. This is the Galápagos at its most other-worldly.",
            "Return to Puerto Ayora: $120–150/person for this full day, booked through a local agency.",
          ],
          cost: "$140–175 total",
        },
        {
          day: "Day 5",
          title: "Ferry to San Cristóbal — Kicker Rock & Snorkelling",
          items: [
            "7:30am: Speed ferry from Puerto Ayora to Puerto Baquerizo Moreno, San Cristóbal ($35, 2.5 hours). Sea conditions can be rough — seasickness medication recommended. Sea lions occupy the harbour benches and dock edges of Puerto Baquerizo Moreno as if they own the place, which they do.",
            "Check into hostel in Puerto Baquerizo Moreno ($25–45/night). Book a Kicker Rock half-day snorkelling tour for the afternoon ($60–80).",
            "1:30pm: Kicker Rock (León Dormido) — two sheer volcanic columns rising 148m from the ocean, separated by a narrow channel you snorkel through. Hammerhead sharks are a regular presence in the channel (especially June–November). Galápagos sharks, eagle rays, sea turtles, and enormous schools of fish. One of the top snorkelling and diving sites in the entire Pacific.",
            "5:00pm: Interpretive Centre, San Cristóbal — excellent free museum explaining the human history of the Galápagos, from the first pirates who used the islands to store water, through the convict colony era, to modern conservation.",
            "Evening: seafront restaurants in Puerto Baquerizo Moreno. Lobster season runs June–January — the freshest lobster you'll eat in your life, $25–40.",
          ],
          cost: "$150–190 total",
        },
        {
          day: "Day 6",
          title: "San Cristóbal — Frigate Bird Hill & La Galapaguera",
          items: [
            "9:00am: La Galapaguera de Cerro Colorado — giant tortoise breeding centre and natural reserve on San Cristóbal ($5 entry). Different sub-species from the Santa Cruz population. The hike through the arid zone scrub is excellent for Darwin's finches and Galápagos mockingbirds.",
            "11:00am: Laguna El Junco — freshwater crater lake 700m above sea level in San Cristóbal's highlands (take a taxi $30 return). Frigatebirds bathe here — remarkable as they are pelagic birds that never normally encounter fresh water. They use the lake to clean the salt from their feathers.",
            "1:00pm: Lunch at a local restaurant in the highlands.",
            "3:00pm: Frigate Bird Hill (Cerro Tijeretas) — easy 2km hike from town with a colony of magnificent frigatebirds nesting and displaying. One of the only places in the Galápagos where you can hike without a guide. Snorkelling at the adjacent beach below the hill — green sea turtles and sea lions.",
            "Evening: last night on San Cristóbal. Local rum, ceviche, and conversation with the island's population of ~6,000 people, many of whom are marine biologists, dive instructors, and naturalist guides.",
          ],
          cost: "$100–140 total",
        },
        {
          day: "Day 7",
          title: "Española or Fernandina Day Trip & Departure",
          items: [
            "Optional: if time and budget allow, a day trip to Española Island ($150–180) is extraordinary from March–April for albatross (the colony of 25,000 waved albatrosses takes off from a cliff runway — witnessing this is wildlife photography's equivalent of a hole in one). The blowhole at Punta Suárez, blue-footed boobies with chicks, and marine iguanas with unique red-and-green colouring.",
            "Alternatively: use the morning for a final snorkel at Kicker Rock channel or Tijeretas on San Cristóbal.",
            "11:00am: Depart San Cristóbal airport (SCY) to Guayaquil or Quito. Check-in 2 hours before domestic flight. Biosecurity check of all luggage on departure — nothing from the islands may be taken out (no shells, no lava rocks, no plants).",
            "Afternoon: if transiting through Guayaquil, visit the Malecón 2000 waterfront district or Las Peñas neighbourhood. If transiting through Quito, the historic Old Town (a UNESCO World Heritage Site) is easily reached from the airport.",
          ],
          cost: "$120–180 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$300–380/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & First Evening in Puerto Ayora",
          items: [
            "Fly to Baltra (GPS), pay park fee and TCT. Private transfer from Baltra ferry to Puerto Ayora ($20 vs $3 public). Check into a mid-range hotel with air conditioning and private bathroom — Angermeyer Waterfront Inn, Semilla Verde, or Silberstein Hotel. Rooms $100–160/night.",
            "Afternoon guided walk to Tortuga Bay with a certified naturalist guide booked through your hotel ($40–60 private). The guide identifies each species — marine iguana sub-species, Sally Lightfoot crabs in blazing red, and the Galápagos lava lizards — adding biological context to each encounter.",
            "Sundowner on the waterfront at a decent bar or restaurant overlooking Academy Bay. The sea lion pups that use the dock as their personal slide are particularly active at dusk.",
            "Dinner at Finch Bay Hotel restaurant (the best on Santa Cruz, open to non-guests) — fresh tuna, local lobster in season, and good Ecuadorian wine. $50–80 per person.",
          ],
          cost: "$280–360 total (excluding park fees)",
        },
        {
          day: "Day 2",
          title: "Charles Darwin Research Station & Highland Tortoises",
          items: [
            "Morning: Charles Darwin Research Station with a private guide explaining the ongoing conservation biology work — the satellite tracking, the incubation programmes, and the remarkable story of Diego the tortoise (a Española sub-species male who fathered an estimated 800 offspring and saved his species).",
            "10:30am: Private car and guide to El Chato Tortoise Reserve and lava tunnels (full morning $80–100 including transport and guide). Mid-range travellers get a personalised natural history lecture rather than the generic group commentary.",
            "Lunch at Angermeyer Waterfront Inn restaurant or similar — fresh catch of the day, $20–35 per person.",
            "Afternoon: guided kayak tour of Academy Bay ($50/person, 2 hours). Sea turtles surface beside the kayaks. The water is extraordinarily clear.",
            "Evening: cooking class using local ingredients at a community kitchen — $60–80 per person. Learn to make ceviche, tiradito, and encebollado.",
          ],
          cost: "$300–380 total",
        },
        {
          day: "Day 3",
          title: "North Seymour & Mosquera — Small Group Tour",
          items: [
            "Full-day guided tour to North Seymour and Mosquera Islet ($150–180 per person, small group of 8–16 max, certified naturalist guide). Book via GetYourGuide: https://www.getyourguide.com/s/?q=Galapagos+North+Seymour&partner_id=PSZA5UI",
            "North Seymour: frigatebirds, blue-footed boobies, sea lions, land iguanas, and swallow-tailed gulls. Small group tours allow more time at each site and better guide-to-visitor ratio than budget tours.",
            "Mosquera Islet: a tiny sand bank between North Seymour and Baltra with one of the largest sea lion colonies in the Galápagos. Pups play in shallow water, bulls maintain territories, and females nurse newborns. The snorkelling is excellent.",
            "Good packed lunch provided on the boat.",
            "Return to Puerto Ayora by 4pm. Afternoon at leisure or spa treatment at Finch Bay Hotel ($80–120).",
          ],
          cost: "$310–390 total",
        },
        {
          day: "Day 4",
          title: "Bartolomé & Santiago — Full Day",
          items: [
            "Full-day tour to Bartolomé and Sullivan Bay ($160–200 per person, naturalist guide). Same sites as budget plan but with a better guide who explains the lava formations' geological history and identifies every species of fish while snorkelling.",
            "Pinnacle Rock summit at Bartolomé: the view over the volcanic landscape is genuinely one of the most spectacular in South America. The guide explains how the Galápagos islands formed sequentially as the Pacific plate moved over a hot spot — the oldest islands to the east, the youngest to the west.",
            "Snorkelling with penguins at Pinnacle Rock: Galápagos penguins are highly active mid-morning. Having an underwater guide who points out the penguins' underwater torpedo speed transforms the experience.",
            "Lunch on the boat: mid-range tours typically offer better food — fresh fruit, grilled fish, and local cheese.",
            "Sullivan Bay lava field: walk across the 1897 pahoehoe lava. The guide's geological narrative makes the otherwise barren landscape come alive.",
          ],
          cost: "$320–400 total",
        },
        {
          day: "Day 5",
          title: "Ferry to Isabela — Largest Island in the Galápagos",
          items: [
            "8:00am: Speed ferry from Puerto Ayora to Puerto Villamil on Isabela Island ($35, 2 hours). Isabela is the largest island and the one that most feels like an undiscovered secret — far fewer tourists, giant tortoises roaming freely on the road, flamingos in the lagoons behind town.",
            "Check into a mid-range eco-lodge in Puerto Villamil ($80–130/night). Isabela is smaller and quieter than Santa Cruz — this is where you come when you want the Galápagos experience without the tourist infrastructure.",
            "Afternoon: Las Tintoreras — a small islet near Puerto Villamil accessible by short panga ride ($20). Galápagos penguins, blue-footed boobies, marine iguanas, and white-tipped reef sharks resting in the crystal-clear shallow channels. One of the best snorkelling sites in the Galápagos at a fraction of the price of the major day trips.",
            "Evening walk along Puerto Villamil's beach: flamingos in the lagoon at dusk, sea turtles nesting on the beach (October–February).",
          ],
          cost: "$280–360 total",
        },
        {
          day: "Day 6",
          title: "Sierra Negra Volcano & Isabela Highlights",
          items: [
            "7:00am: Sierra Negra volcano hike ($50–60 guided, compulsory). The caldera is 10km wide — the second largest volcanic caldera in the world. From the rim, look into a vast lava landscape of alien scale. The adjacent Volcán Chico walk skirts active fumaroles with sulphurous steam venting from the ground. The hike is 16km return, 5–6 hours.",
            "Return to Puerto Villamil by 1:30pm. Lunch at a local restaurant on the beach ($15–25).",
            "3:00pm: Wall of Tears (Muro de las Lágrimas) — built by prisoners of the Isabela penal colony (1944–1959). The 100m volcanic rock wall, built as punishment with no purpose, remains as a monument to cruelty and resilience. Cycling to the Wall of Tears is $10–15 bike hire.",
            "5:00pm: final snorkel at Las Tintoreras or the beach in front of town.",
            "Dinner: lobster at a beachfront restaurant in Puerto Villamil ($30–45 for lobster meal). Isabela's lobster is the finest in the Galápagos.",
          ],
          cost: "$290–370 total",
        },
        {
          day: "Day 7",
          title: "Return to Mainland & Departure",
          items: [
            "Morning: final panga snorkel or visit to the giant tortoise breeding centre on Isabela — the Arnaldo Tupiza Breeding Centre houses five different sub-species of giant tortoise in open-air enclosures within a few minutes' walk of town. Free entry.",
            "10:00am: Ferry back to Santa Cruz ($35, 2 hours). Transfer to Baltra airport (free GNP bus or $20 taxi).",
            "Afternoon flight to Guayaquil (GYE) or Quito (UIO). Biosecurity check of all bags on departure from Baltra — all Galápagos organic material must be declared and left behind.",
            "Evening: if transiting through Guayaquil, dinner at one of the fine restaurants in the Urdesa district. Guayaquil has excellent ceviche and fresh seafood thanks to its Pacific coast location.",
          ],
          cost: "$220–300 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$600–900/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Embarkation on Luxury Live-Aboard",
          items: [
            "Fly to Baltra on a dedicated charter or scheduled first-class flight from Quito. Private transfer from Baltra to the port. Embark on a luxury live-aboard yacht — options include the National Geographic Endeavour II (Lindblad Expeditions), Ecoventura's MV Origin, or the Silver Origin (Silversea). These yachts carry 16–48 passengers with multiple expedition leaders, naturalists, and undersea specialists.",
            "Cabin quality on top live-aboards is genuinely exceptional — en-suite bathrooms, ocean views, fine dining, and bars stocked with premium Ecuadorian spirits and wine. Rates $600–1,200 per person per night all-inclusive (excluding international flights).",
            "Afternoon: welcome briefing and first panga excursion from the yacht to a nearby visitor site — often North Seymour or Mosquera for an introduction to the ecosystem.",
            "First dinner on board: fresh Galápagos seafood, Andean ingredients, and a wine pairing briefing from the expedition naturalist.",
          ],
          cost: "$650–1,200 total (live-aboard rate, all-inclusive)",
        },
        {
          day: "Day 2",
          title: "Española Island — Albatross Colony & Blowhole",
          items: [
            "Remote outer island access is the primary advantage of live-aboard cruises — day-trip boats from Puerto Ayora cannot reach Española (waved albatross, 12,000 nesting pairs, the world's largest colony outside of a remote Pacific island). Your yacht anchors overnight, allowing early morning landing before any day boats arrive.",
            "Punta Suárez: albatrosses launch from a cliff runway to catch the updraught — witnessing the world's largest flying bird take off at close range is pure spectacle. Blue-footed boobies dance. Nazca boobies display chicks. Marine iguanas are uniquely red-and-green on Española. The naturalist's running commentary transforms observation into education.",
            "Gardner Bay: one of the most beautiful beaches in the Galápagos — white sand, turquoise water, and sea lions so habituated to humans that they sleep between snorkellers. Snorkelling with eagle rays, sea turtles, and reef fish in water of extraordinary clarity.",
            "Expedition evening briefing: the naturalist team presents a documentary, species identification session, and preview of tomorrow's sites over fine dining.",
          ],
          cost: "Included in live-aboard rate",
        },
        {
          day: "Day 3",
          title: "Fernandina Island — Marine Iguanas & Flightless Cormorants",
          items: [
            "Fernandina is the youngest and most volcanically active island in the Galápagos — it last erupted in 2024. Only live-aboard cruises access it regularly. Punta Espinosa has the largest concentration of marine iguanas in the archipelago — thousands of them, piled on black lava, sneezing salt, basking in communal heaps.",
            "Flightless cormorants (found nowhere else on earth): having evolved in the absence of predators, they lost the ability to fly but became exceptional swimmers. Watch them dry their vestigial wings in the sun after fishing — a comic, oddly poignant sight.",
            "Snorkelling at Fernandina: possible sightings of whale sharks, mola mola (ocean sunfish), and Galápagos sea lions hunting cooperatively. Water temperature colder here due to the upwelling — 18–22°C, wetsuits provided on board.",
            "Late afternoon panga ride along Fernandina's lava coastline with the ship's undersea specialist narrating the geological history of the island's formation.",
          ],
          cost: "Included in live-aboard rate",
        },
        {
          day: "Day 4",
          title: "Isabela Island — Tagus Cove & Urbina Bay",
          items: [
            "Tagus Cove, Isabela: a protected bay where Darwin anchored the Beagle. The walls of the cove are covered with boat names carved by visiting vessels dating to the 1800s. Kayaking in the turquoise cove. Hike above the cove to a viewpoint over Isabela's volcanic landscape — Lake Darwin (a saltwater crater lake) glimmers below.",
            "Urbina Bay: an uplifted marine terrace created when the seafloor rose 5 metres above sea level during a 1954 volcanic event. Giant tortoises and land iguanas roam freely at the shoreline. Coral heads, dried and bleached, lie hundreds of metres from the current sea — a geological time capsule.",
            "Afternoon: snorkelling at a site chosen by the naturalist team based on current conditions — possibly Punta Vicente Roca (extraordinary cold water diving with marine iguanas, sea horses, and wolf eels). Advanced snorkellers and divers access sites that day-trippers never see.",
          ],
          cost: "Included in live-aboard rate",
        },
        {
          day: "Day 5",
          title: "Genovesa Island — Prince Philip's Steps & Bird Paradise",
          items: [
            "Genovesa (Tower Island) is only accessible by live-aboard — a full day's sailing from the central islands. This is the bird island: 140,000 great frigatebirds, 50,000+ red-footed boobies (the only red-footed booby colony in the Galápagos accessible to visitors), Nazca boobies, and short-eared owls that hunt storm petrels in daylight.",
            "Prince Philip's Steps: a steep, dramatic landing on a lava cliff with rope assistance. From the top, a trail through the nesting colonies of frigatebirds and boobies at close range. The red-footed boobies, unlike the blue-footed variety, nest in trees — a sea bird sitting in a tree is somehow unsettling and delightful simultaneously.",
            "Darwin Bay beach landing: waved albatross, lava gulls (the world's rarest gull, with fewer than 800 pairs), and yellow-crowned night herons fishing in tidal pools.",
            "Snorkelling at Darwin Bay: hammerhead sharks, marble rays, and the peculiar experience of snorkelling beside a beach full of sitting birds.",
          ],
          cost: "Included in live-aboard rate",
        },
        {
          day: "Day 6",
          title: "Bartolomé, Santiago & Underwater Photography",
          items: [
            "Bartolomé summit at sunrise: the live-aboard drops anchor at Bartolomé before dawn. Walking the 372 steps in the first light, with no other tourists, and watching the sun rise over Pinnacle Rock is one of the great travel experiences in the Americas.",
            "Snorkelling and diving at Bartolomé: the live-aboard's dive team leads small-group dives (certified divers only) in the channel below Pinnacle Rock — Galápagos penguins at close range underwater, white-tipped reef sharks, and eagle rays. Non-divers snorkel with the naturalist.",
            "Sullivan Bay lava field in the afternoon: the expedition team's geologist leads an interpretation of the 1897 lava flow in detail impossible in a group tour.",
            "Final evening on board: expedition highlights dinner, slideshow of photographs from the week, and species list (top live-aboards log every species observed for scientific data contribution). Cocktails with the naturalist team.",
          ],
          cost: "Included in live-aboard rate",
        },
        {
          day: "Day 7",
          title: "Disembarkation & Departure",
          items: [
            "Final morning excursion before disembarkation — often a snorkel at a site near Baltra or a final North Seymour landing. Disembark at Baltra by 9am.",
            "Private transfer to Baltra airport. Some live-aboard operators provide a post-cruise package including a night at a luxury hotel in Quito before your international flight.",
            "Optional: Quito extension — the colonial Old Town of Quito, a UNESCO World Heritage Site, is 30 minutes from the airport. Midrange Hotel Casa Gangotena or the luxury Hotel Palacio Arzobispal are within walking distance of the main sights. Quito is at 2,850m — allow a day to acclimatise before any significant activity.",
            "International departure from Quito (UIO) or Guayaquil (GYE).",
          ],
          cost: "$400–600 (post-cruise hotel and transfers)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget (Island-Hop)",
      accommodation: "$25–50 (hostel/guesthouse)",
      food: "$20–35",
      transport: "$40–60 (day trips, ferries)",
      activities: "$60–90",
      total: "$180–220",
    },
    {
      tier: "Mid-Range",
      accommodation: "$100–160 (eco-lodge/hotel)",
      food: "$40–70",
      transport: "$60–80",
      activities: "$80–120",
      total: "$300–380",
    },
    {
      tier: "Luxury Live-Aboard",
      accommodation: "$600–1,200 (all-inclusive on yacht)",
      food: "Included",
      transport: "Included",
      activities: "Included",
      total: "$600–1,200",
    },
    {
      tier: "Park & Transit Fees",
      accommodation: "N/A",
      food: "N/A",
      transport: "$20 TCT",
      activities: "$100 park fee",
      total: "$120 (one-time, all tiers)",
    },
    {
      tier: "Flights to Galápagos",
      accommodation: "N/A",
      food: "N/A",
      transport: "$300–600 return from mainland",
      activities: "N/A",
      total: "$300–600 (per trip)",
    },
  ],
  mistakes: [
    {
      icon: "💸",
      title: "Forgetting the $100 Park Fee and $20 TCT — Bring USD Cash",
      desc: "Every visitor to the Galápagos must pay a $100 Galápagos National Park entrance fee on arrival at Baltra or San Cristóbal airport, plus a $20 Transit Control Card (TCT) purchased at the mainland airport before boarding. While cards are sometimes accepted, cash in USD is the most reliable. Arriving without USD cash has caused travellers to be temporarily held at the airport. ATMs in Guayaquil and Quito — not in the Galápagos. Withdraw enough before you fly.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📅",
      title: "Not Booking Flights to the Galápagos Far Enough in Advance",
      desc: "Flights from Guayaquil or Quito to Baltra or San Cristóbal book up 6–10 weeks ahead, especially for December–April (peak season with baby animals) and July–August. Last-minute flights, when available, cost 50–100% more. Book flights as soon as you have your travel dates confirmed. The same applies to live-aboard cruise cabins — top boats book 12+ months ahead.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌊",
      title: "Choosing the Budget Ferry Crossing When Prone to Seasickness",
      desc: "The inter-island ferries (Puerto Ayora to Puerto Baquerizo Moreno or Puerto Villamil) cross open ocean and can be genuinely rough — 2–2.5 hours of significant swell. If you are susceptible to seasickness, take medication (Dramamine or Stugeron) 2 hours before departure. Sit in the middle of the boat at water level, not at the bow or on the upper deck. Some routes have calmer days than others but there are no guarantees. Consider sea legs (anti-nausea wristbands) as a backup.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🤿",
      title: "Skipping Snorkelling Because You're Not Confident",
      desc: "Snorkelling in the Galápagos is beginner-accessible at most sites. You don't need to be a strong swimmer — basic floating while looking down is enough. The encounters (sea lions swimming beside you, turtles grazing on underwater algae, penguins zooming past at close range) are so frequent and close that even hesitant snorkellers have transformative experiences. All day tour boats carry snorkel equipment and life jackets. Mention if you're a beginner — guides are trained to support nervous snorkellers.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🦭",
      title: "Trying to Touch the Animals",
      desc: "Galápagos National Park regulations prohibit touching any animal. Beyond the ethical issue, sea lions can bite (and the bites are not minor), marine iguanas carry salmonella, and disturbing nesting birds can cause egg abandonment. The 2-metre rule applies at all sites — maintain 2 metres from all wildlife. The remarkable thing is that you don't need to get closer than 2 metres; the animals approach you voluntarily because they have no fear of humans. Harassing animals in the Galápagos risks a $500+ fine.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🧴",
      title: "Using Non-Reef-Safe Sunscreen",
      desc: "Standard sunscreen containing oxybenzone and octinoxate is harmful to coral reefs and is effectively banned for responsible use in the Galápagos (and formally banned in many sites). Bring reef-safe mineral sunscreen (zinc oxide or titanium dioxide based) from home — it's expensive and hard to find in the Galápagos. The marine ecosystems here are extraordinary and under significant climate pressure; every individual choice matters.",
      color: "bg-green-50 border-green-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Go Early to Every Visitor Site",
      desc: "Galápagos day-trip boats leave Puerto Ayora at 8am and return at 5pm — meaning all visitor sites are busy between 10am–3pm. If you're island-hopping independently, arrange tours that depart first, and use the late afternoon for swimming and independent beach time. Live-aboard cruises have the enormous advantage of landing at sites at dawn before day boats arrive, and in the late afternoon after they leave.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "📷",
      title: "Use a GoPro or Underwater Camera — It's Worth the Investment",
      desc: "The most extraordinary Galápagos encounters happen underwater — a sea lion spiralling around you, a turtle lifting its head from feeding, a penguin shooting past your mask. A GoPro ($350–450 new, $150–200 secondhand) on a wrist mount captures what your eyes see. Camera rental is available in Puerto Ayora ($40–60/day) if you don't own one. An above-water zoom lens (200mm+) is worth bringing for the bird colonies on Española and North Seymour.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎒",
      title: "Book Galápagos Tours via GetYourGuide for Vetted Operators",
      desc: "Not all Galápagos day-tour operators are equal — certified naturalist guides (Level 1 or 2) make an enormous difference to the experience. Book through GetYourGuide for verified operators: https://www.getyourguide.com/s/?q=Galapagos+Islands&partner_id=PSZA5UI. Particularly useful for North Seymour, Bartolomé, Española, and Kicker Rock tours where the naturalist's commentary is the difference between watching birds and understanding them.",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      icon: "🌡️",
      title: "Understand the Two Seasons and What They Mean for Wildlife",
      desc: "The cool/dry season (June–November) brings clearer water, better diving visibility, and rough seas. The warm/wet season (December–May) brings calmer seas, baby animals (sea lion pups born November–January, giant tortoise hatchlings November–April, blue-footed booby chicks January–June), and lush green vegetation. Neither season is better — they're different experiences. June–August is the busiest month for visitors; December–January for baby animals.",
      color: "bg-amber-50 border-amber-200",
    },
  ],
  faqs: [
    {
      q: "Is it worth going to the Galápagos on a budget or should I book a cruise?",
      a: "Both approaches work — but they deliver different experiences. Island-hopping independently from Puerto Ayora gives you great encounters at major sites (North Seymour, Bartolomé, Kicker Rock) at $180–220/day. A mid-range cruise ($300–380/day all-in) adds access to Isabela, Española, and Fernandina — the outer islands with the most extraordinary wildlife. A luxury live-aboard ($600–1,200/day) adds Genovesa, remote diving sites, exclusive dawn access, and the best naturalist guides. Budget island-hopping is genuinely good; a cruise is genuinely extraordinary. If you can afford the cruise, book it.",
    },
    {
      q: "How many days do I really need in the Galápagos?",
      a: "Five days is the minimum to see the highlights from Santa Cruz and San Cristóbal. Seven days allows addition of Isabela or a 5-day cruise with outer island access. Ten days is the sweet spot for a comprehensive live-aboard combining all major island groups. If you're flying from Europe or Asia, the expense and time of reaching Ecuador makes 5 days feel short — plan for at least 7 if your budget allows.",
    },
    {
      q: "What is the best island to base yourself on?",
      a: "Santa Cruz (Puerto Ayora) is the best base for independent island-hopping — the most tour operators, the largest selection of restaurants and accommodation, and the most day-trip boats. San Cristóbal (Puerto Baquerizo Moreno) is quieter and has Kicker Rock (world-class snorkelling) on its doorstep. Isabela (Puerto Villamil) is the most unspoiled and least visited — recommended for travellers who want to escape the (relative) crowds. Floreana is the smallest inhabited island, with extraordinary wildlife and just 150 residents.",
    },
    {
      q: "Can I see giant tortoises in the wild (not in captivity)?",
      a: "Yes. El Chato Reserve on Santa Cruz has fully wild, free-roaming giant tortoises in a highland forest setting with no fences. You will walk among them. On Isabela, giant tortoises cross the road outside Puerto Villamil. On Española, the nesting beaches are visited by wild tortoises. The Charles Darwin Research Station and breeding centres show captive tortoises, but these are primarily a conservation facility rather than an exhibition. For the most authentic wild encounter, El Chato on Santa Cruz or the roads of Isabela.",
    },
    {
      q: "Is the Galápagos suitable for non-swimmers or people who don't snorkel?",
      a: "Absolutely. The land wildlife encounters — giant tortoises, blue-footed boobies, frigatebirds, marine iguanas, sea lions on beaches — are as extraordinary as anything in the water. Every visitor site includes land walks with naturalist guides. Non-swimmers are fully catered for. That said, snorkelling opens up a completely different dimension — the underwater Galápagos (penguins, sea lions, sea turtles, sharks) is half the experience. Most budget snorkel tours provide life jackets and guides who will support nervous snorkellers.",
    },
  ],
  combineWith: [
    "Ecuador mainland (Quito, Cotopaxi volcano, Amazon jungle)",
    "Peru (Machu Picchu, Sacred Valley, Lima food scene)",
    "Colombia (Cartagena, Medellín, coffee region)",
  ],
  relatedSlugs: ["peru-machu-picchu-7-days", "colombia-7-days", "chile-patagonia-7-days"],
  galleryQuery: "galapagos islands tortoise iguana sea lion booby ecuador wildlife",
};

export default function GalapagosPage() {
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
