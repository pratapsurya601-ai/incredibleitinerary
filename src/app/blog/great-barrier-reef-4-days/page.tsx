import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Great Barrier Reef",
  country: "Australia",
  countryFlag: "🇦🇺",
  slug: "great-barrier-reef-4-days",
  heroQuery: "great barrier reef coral snorkeling australia queensland",
  heroAlt: "Great Barrier Reef coral gardens with tropical fish snorkeling Queensland Australia",
  category: "Australia & Pacific",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "The Great Barrier Reef stretches 2,300 kilometres along Queensland's coast — the largest living structure on earth, visible from space, and home to 1,500 species of fish, 4,000 types of mollusc, and coral formations that have been growing for 20,000 years. Four days from Cairns gives you the outer reef at its most extraordinary, the ancient Daintree Rainforest where jungle meets coral sea, and enough time to decide whether you want to dive into it literally or simply float above it in awe.",
  stats: {
    duration: "4 Days",
    budgetFrom: "A$100",
    bestMonths: "Jun–Oct (dry season)",
    airport: "CNS (Cairns International)",
  },
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
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Visitor Visa", "Indian passport holders require an Australian Visitor Visa (subclass 600) to enter Australia. Fee: A$145. Apply online through the ImmiAccount portal at immi.homeaffairs.gov.au. Processing typically takes 20–40 days but can extend to 8 weeks — apply at least 6–8 weeks before travel."],
        ["Key Documents", "Valid passport (minimum 6 months beyond your return date), bank statements showing sufficient funds (generally A$5,000+ for a short trip), proof of accommodation bookings, return or onward flight tickets, employment letter confirming your position and approved leave, and travel insurance."],
        ["eVisitor / ETA", "India is not eligible for the Australian eVisitor (subclass 651) or Electronic Travel Authority (ETA, subclass 601), which are available to certain Western passport holders. You must apply for the full Visitor Visa (subclass 600) through ImmiAccount."],
        ["Travel Insurance", "While not a formal visa requirement, comprehensive travel insurance is strongly recommended. Australia's healthcare system does not cover foreign visitors without a reciprocal agreement — medical evacuation from the reef or Daintree region can cost A$50,000+."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["ETA (Electronic Travel Authority)", "USA, Canada, UK, and many European passport holders are eligible for the ETA (subclass 601) — apply online or via the Australian ETA app. Cost: A$20 service charge. Processing is usually instant to 24 hours. Valid for 12 months with multiple entries up to 3 months each stay."],
        ["eVisitor (Free)", "Citizens of EU countries and several others are eligible for the free eVisitor (subclass 651), applied online through the Department of Home Affairs website. Instant approval in most cases. Multiple entries, up to 3 months per visit, valid 12 months."],
        ["New Zealand Citizens", "NZ citizens can travel to Australia without any pre-arranged visa and are automatically granted a Special Category Visa (SCV) on arrival. No application needed."],
        ["Biometric Passport Required", "Your passport must be biometric (contains an electronic chip) to qualify for ETA or eVisitor. Non-biometric passports require a full Visitor Visa application. Check your passport's cover — biometric passports have a gold chip symbol."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "A$100–170/day",
      days: [
        {
          day: "Day 1",
          title: "Cairns Orientation & Esplanade",
          items: [
            "Morning — Check into Gilligan's Backpacker Hotel (A$30–55/night) or Nomads Cairns (A$28–50/night). Both are legendary on the backpacker circuit and have reef tour booking desks on-site.",
            "10:00am — Walk the Cairns Esplanade: the 4km boardwalk along Trinity Inlet with views of the Coral Sea. The Esplanade Lagoon is a free public swimming lagoon (the ocean here isn't swimmable due to marine stingers) — ideal for a refreshing dip on arrival.",
            "12:00pm — Cairns Night Market area for lunch during the day: food court stalls serve laksa, noodle boxes, grilled meats, and fresh juice for A$8–15. Far better value than restaurants on the Esplanade strip.",
            "2:00pm — Tjapukai Aboriginal Cultural Park (A$47) — the most substantial introduction to First Nations culture in northern Queensland. Live dance performances, boomerang and spear-throwing demonstrations, Dreamtime stories, and traditional bush tucker tasting.",
            "5:00pm — Return to your accommodation for the reef briefing — most hostels hold informal evening sessions where local dive operators explain the reef sites, weather conditions, and which tours are running the next day. Book your Day 2 outer reef tour now if you haven't already.",
            "7:00pm — Night Market (runs 5pm–11pm daily, free entry) for dinner: A$8–12 for a full plate of Thai, Chinese, Malaysian, or Australian food. The reef tanks near the entrance display live coral — your preview of tomorrow.",
          ],
          cost: "A$65–90 total (incl. hostel, Tjapukai, food)",
        },
        {
          day: "Day 2",
          title: "Outer Great Barrier Reef Full Day",
          items: [
            "7:00am — Early departure — most reef tour vessels leave Reef Fleet Terminal (Wharf Street, Cairns) between 7:30am and 8:30am. Check-in is 30 minutes before departure. Bring reef-safe sunscreen, a hat, and motion sickness tablets if you're prone (the outer reef is 1.5–2 hours offshore).",
            "Reef operator — Budget picks: Sunlover Reef Cruises (A$130–160, visits Moore Reef, glass-bottom boat and semi-submersible included) or Reef Magic Cruises (A$140–180, Marine World platform on Coral Sea with underwater observatory). Both include snorkeling gear, wetsuit/stinger suit, and a buffet lunch.",
            "10:00am — First snorkel at the outer reef. The outer reef is categorically different from the inner reef — visibility 15–30 metres, coral structures 2–8 metres high, and fish density that makes you feel like you've swum into an aquarium. Brain corals the size of small cars, Maori wrasse that approach for a look, turtles moving between coral heads.",
            "12:30pm — Buffet lunch on the pontoon or vessel. Rest, dry off, watch the glass-bottom boat tour (usually A$10–15 extra) that floats over the reef system without getting wet.",
            "2:00pm — Second snorkel at a different reef site — most operators move between 2–3 sites across the day. Afternoon light creates a different experience as the sun angle changes the colour of the coral.",
            "4:30pm — Return journey to Cairns. Most vessels arrive back at Reef Fleet Terminal by 5:30–6:00pm. The crew will sort your GoPro footage if you rented an underwater camera (A$35 rental, A$20 to keep the footage).",
            "7:30pm — Recovery dinner at an Esplanade café. Budget A$15–20 for a burger or pasta.",
          ],
          cost: "A$150–200 total (reef tour incl. lunch, gear, transfer)",
        },
        {
          day: "Day 3",
          title: "Daintree Rainforest & Cape Tribulation",
          items: [
            "6:30am — Early start. The Daintree is 1.5–2 hours north of Cairns. Join a budget day tour (A$95–130 from Cairns, fully guided, transport included) or hire a car (A$50–70/day) and self-drive — the route is well-signposted once you reach the Daintree River crossing.",
            "9:30am — Mossman Gorge: crystal-clear freshwater creek cutting through ancient rainforest boulders. The gorge is within Daintree National Park — take the A$10 shuttle from the Mossman Gorge Centre (no private vehicles to the gorge head). Swimming in the cold creek pools beneath waterfall sprays is one of Queensland's genuinely great free experiences.",
            "11:00am — Daintree River crocodile cruise (A$30, 1 hour). The Daintree River is one of the few accessible habitats for wild saltwater crocodiles in Australia. Early morning and late afternoon are peak sighting times — the 11am cruise still reliably spots 2–5 crocodiles resting on mud banks.",
            "12:30pm — Drive north across the Daintree River cable ferry (A$26 for a car, free for foot passengers) into the World Heritage rainforest. The Daintree is the world's oldest continuously surviving tropical rainforest — 135 million years old, older than the Amazon.",
            "1:30pm — Cape Tribulation: the only place on earth where two UNESCO World Heritage sites meet — the Great Barrier Reef Marine Park and the Daintree Rainforest. The beach here looks directly onto the Coral Sea. Eat lunch at the Cape Trib Beach House café (A$12–18 for a meal) with the jungle at your back and the reef in front.",
            "3:30pm — Afternoon rainforest walk — boardwalk trails through dense tropical canopy reveal massive fan palms, strangler figs, and the distinctive fan palm that grows only in this region. Watch for Boyd's forest dragons (bright green lizards) on tree trunks.",
            "Return to Cairns by 6:30–7:30pm. Fruit bat colony at dusk — the Cairns Esplanade has a permanent colony of spectacled flying foxes (thousands of them) that emerge at sunset. Free, spectacular.",
          ],
          cost: "A$100–150 total (tour or car hire, ferry, Mossman shuttle, Daintree cruise)",
        },
        {
          day: "Day 4",
          title: "Skydive, Atherton Tablelands, or Rafting",
          items: [
            "Option A — Skydiving over the Great Barrier Reef (A$299–399): Tandem skydive from 14,000 feet above Cairns with the reef, rainforest, and Coral Sea visible simultaneously in one of the most surreal backdrops on earth. Book 24 hours ahead — operators include Skydive Cairns and Raging Thunder. Transfer from Cairns included.",
            "Option B — White Water Rafting on the Barron River (A$149): Half-day rafting through the Barron Gorge — Grade 3–4 rapids through the rainforest. Raging Thunder Adventures is the main operator. Full safety briefing, wetsuit, helmet provided. Departs 8am, back by 1pm — leaves the afternoon free.",
            "Option C — Atherton Tablelands (Free–A$20): Self-drive into the cool highlands 1 hour south of Cairns. Millaa Millaa Falls (the most photographed waterfall in Queensland, free), Lake Eacham (ancient volcanic crater lake, swimming allowed, free), Josephine Falls (natural rock waterslide, free). At dusk, head to the Platypus viewing spot at Mt Hypipamee — the only accessible wild platypus habitat near Cairns. Best sighting time is 5:30–6:30pm.",
            "Afternoon — Pack and farewell Cairns. Stock up on Daintree Chocolate (local rainforest chocolate made from cacao grown in the Daintree — A$10–15 a bar, extraordinary) at the Rusty's Markets or specialty shops near the Esplanade.",
            "Evening departure or final night. Cairns Airport (CNS) is 10 minutes from the city centre — no need for an early hotel checkout.",
          ],
          cost: "A$0–400 depending on activity choice",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "A$280–500/day",
      days: [
        {
          day: "Day 1",
          title: "Cairns Arrival & Cultural Evening",
          items: [
            "Check into Pullman Reef Hotel Casino Cairns (A$200–350/night) or Riley, a Crystalbrook Collection Resort (A$250–400/night). The Riley has a rooftop infinity pool with views over Trinity Inlet — a powerful first impression of Far North Queensland.",
            "12:00pm — Lunch at Ochre Restaurant (Cairns Esplanade) — northern Queensland's most respected contemporary Australian restaurant. Bush tucker ingredients: wattle seed, lemon myrtle, kangaroo fillet, barramundi. A$40–60/person for two courses and a glass of Queensland wine.",
            "3:00pm — Cairns Botanic Gardens (free) and the Flecker Herbarium — 37 hectares of tropical plantings including the country's most significant collection of tropical rainforest palms. The Gondwana Heritage Garden tells the story of the Daintree's 135-million-year lineage.",
            "5:30pm — Esplanade sunset walk. The pier area is photogenic at golden hour — the mangrove boardwalk extending into Trinity Inlet gives the impression of walking above the ocean.",
            "8:00pm — Dinner at a mid-range Cairns restaurant: Dundee's on the Waterfront (A$35–55/person) for Queensland barramundi, mud crab, and Coral Sea prawns. The outdoor deck over the inlet is the best dining position in the city.",
          ],
          cost: "A$310–430 total (incl. accommodation, meals)",
        },
        {
          day: "Day 2",
          title: "Premium Outer Reef Experience",
          items: [
            "7:30am — Board a premium reef vessel. Silversea Expeditions, Reef Encounter, or Calypso Snorkel & Dive offer small-group departures (max 40 passengers) with marine biologist guides, unlimited snorkeling, intro scuba diving option (A$150–200 extra), and gourmet lunch.",
            "10:00am — Outer reef arrival. A marine biologist narrates a 20-minute briefing on the reef ecosystem before snorkeling — understanding what you're looking at transforms the experience. Learn to identify coral species, fish families, and the signs of coral bleaching versus healthy reef.",
            "11:30am — Optional intro scuba dive: a certified instructor accompanies you to 5–8 metres depth. No certification needed. The transition from snorkeling on the surface to breathing underwater and descending into the coral is one of the most genuinely profound experiences in travel.",
            "1:00pm — Gourmet reef lunch on the vessel or pontoon. Premium operators serve Queensland seafood, salads, and tropical fruit rather than the standard sausage buffet.",
            "2:30pm — Final afternoon snorkel at a different reef site — afternoon operators often access quieter, less-visited reef structures with larger fish aggregations.",
            "6:00pm — Return to Cairns. Hot shower at the hotel before dinner.",
            "8:00pm — Dinner at Tamarind Restaurant (Crystalbrook Riley) — contemporary Australian cuisine with an Asian influence. A$50–80/person for a full dinner.",
          ],
          cost: "A$350–500 total (premium tour, meals, accommodation)",
        },
        {
          day: "Day 3",
          title: "Private Daintree & Cape Trib Experience",
          items: [
            "7:30am — Small-group or private Daintree day tour (A$150–250 from Cairns). Private operators provide a naturalist guide who can identify birds by call, explain the medicinal plants used by the Kuku Yalanji people, and access private properties not open to budget tours.",
            "9:30am — Mossman Gorge with a Kuku Yalanji Cultural Advisor — guided walks run by the Traditional Owners of the Daintree (A$65/person, 1.5 hours) weave together the ecology and the 50,000-year human history of the gorge. The plant knowledge shared is astonishing.",
            "12:00pm — Lunch at Daintree Ecolodge restaurant (if staying in the area) or Cape Tribulation Beach House for a tropical seafood platter with a cold Queensland beer.",
            "2:00pm — Cape Tribulation afternoon: stand-up paddleboarding on the Coral Sea (A$45/hour hire), or guided rainforest walk with a naturalist who spots birds invisible to untrained eyes — double-eyed fig parrots, pied imperial pigeons, Buff-breasted paradise-kingfisher.",
            "4:30pm — Daintree River late afternoon crocodile cruise (A$35). The 4pm departure is the best for wildlife — crocodiles thermoregulate in the afternoon sun on the banks.",
            "Return to Cairns by 7:30pm for dinner. Night Market for a relaxed evening or a waterfront restaurant.",
          ],
          cost: "A$280–400 total (private tour, cultural walk, activities, meals)",
        },
        {
          day: "Day 4",
          title: "Great Barrier Reef Dive & Farewell",
          items: [
            "Morning — Certified diver? A morning two-tank dive on the outer reef with a mid-range operator runs A$180–250 including equipment hire. Dive sites include Milln Reef, Flynn Reef, and Norman Reef — each with distinct coral architecture and marine life profiles.",
            "If not diving — Atherton Tablelands scenic drive in a hired 4WD. The Curtain Fig Tree (a 500-year-old strangler fig that has created a 15-metre curtain of aerial roots, free), Mungalli Creek Dairy (organic farm, cheese tasting, A$10), and the crater lakes at Lake Barrine and Lake Eacham.",
            "12:30pm — Farewell Cairns lunch at a harbour restaurant. Queensland mud crab if in season (A$45–65 per half crab) is the definitive local luxury.",
            "Afternoon — Cairns Zoom and Wildlife Dome (A$30) on the roof of the Reef Hotel Casino: Australia's only inland dome zoo, with saltwater crocodile feedings, koala photo opportunities, and a wildlife presentation. Good for a final 2-hour Cairns activity before airport transfer.",
            "Evening departure from CNS. Cairns to Sydney: 3 hours. Cairns to Melbourne: 3.5 hours. To Singapore: 6.5 hours direct.",
          ],
          cost: "A$250–380 total (diving or activities, meals, transport)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "A$700–2,500+/day",
      days: [
        {
          day: "Day 1",
          title: "Silky Oaks Lodge & Daintree Arrival",
          items: [
            "Fly into Cairns and transfer directly to Silky Oaks Lodge in the Daintree Rainforest (A$800–1,500/night). Private transfers from CNS available. The lodge's treehouse rooms sit 8 metres above the Mossman River in the ancient rainforest — you hear the river through the floor.",
            "Afternoon — Private Mossman Gorge walk with a Silky Oaks naturalist guide. The lodge has exclusive access to forest paths not available on public trails — orchid meadows, ancient fern gullies, wildlife encounters with rare cassowaries.",
            "Sunset — Tree canopy sunset drinks at the Treehouse Bar: Queensland craft gin, rainforest bitters, tropical fruit. A$15–25/cocktail.",
            "Dinner — Heliconia Restaurant at Silky Oaks: degustation menu (A$150–200/person) built around ingredients foraged from the surrounding rainforest and sourced from Far North Queensland farms. The chef changes the menu seasonally based on what the rainforest provides.",
          ],
          cost: "A$1,000–1,700 total (lodge, meals, private guide)",
        },
        {
          day: "Day 2",
          title: "Private Outer Reef Charter",
          items: [
            "7:00am — Private reef charter from Cairns (A$1,500–3,000 for the vessel for a group, or A$500–800/person for shared luxury charter). Operators include Eye to Eye Marine Encounters or Spirit of Freedom (liveaboard day option). Your private vessel accesses reef sites the large pontoon operators cannot reach.",
            "9:30am — Exclusive reef snorkel and dive at Ribbon Reef — the remote northern section of the outer reef accessible only by longer-range vessels. Visibility consistently 30+ metres. Coral formations taller than a person, undisturbed by daily tour traffic.",
            "11:00am — Scuba diving with a personal Divemaster guide: your guide leads a 45-minute guided dive tailored to your certification level and interests. Macro photography of pygmy seahorses, nudibranchs, and cleaner shrimps — or wide-angle dives through coral canyons with large pelagics.",
            "1:00pm — Gourmet lunch prepared onboard: Queensland lobster, freshly caught coral trout, tropical fruit platters with Whitsunday mangoes.",
            "3:00pm — Third snorkel or dive, or simply drift in the Coral Sea watching the reef world from above.",
            "Evening return to Cairns or Daintree. Cocktails at the hotel bar.",
          ],
          cost: "A$600–1,200/person (private charter, all meals, equipment)",
        },
        {
          day: "Day 3",
          title: "Helicopter Reef Flight & Daintree Luxury",
          items: [
            "9:00am — Helicopter flight over the Great Barrier Reef (A$400–650 for a 30–45 minute flight). Departures from Cairns Airport or Helipad. The aerial perspective is transformative — the reef structure becomes legible from above: dark blue channels, turquoise lagoons, white sand cays, the distinct coral formations that are invisible from water level.",
            "Some operators offer fly-snorkel-fly combos (helicopter to a pontoon, snorkel, helicopter back, A$600+) — the most dramatic single-day reef experience available.",
            "Afternoon — Return to Daintree for a private guided cassowary search (A$250, 3 hours with a local specialist). Southern cassowaries are critically endangered — fewer than 4,000 remain — and the Daintree is their primary habitat. Spotting one is genuinely uncommon and a wildlife experience that overshadows most.",
            "Sunset — Private spa treatment at Silky Oaks: a 90-minute rainforest body treatment using native botanicals (A$250–350), followed by a rainforest sound bath as the jungle transitions from daytime to nocturnal activity.",
            "Dinner — Return to Heliconia Restaurant for a different tasting menu selection, with matched Queensland wines.",
          ],
          cost: "A$1,200–2,000 total (helicopter, guide, spa, meals)",
        },
        {
          day: "Day 4",
          title: "Qualia Great Barrier Reef & Departure",
          items: [
            "Morning transfer to Hamilton Island for one night at qualia (A$2,000–4,000/night all-inclusive) — if building a longer itinerary. qualia sits on the northern tip of Hamilton Island in the Whitsundays, with private pavilions facing the Coral Sea and the Whitsunday Passage.",
            "Alternatively — final morning at Silky Oaks: dawn birdwatching walk (the hour before sunrise is peak bird activity in the Daintree), breakfast on your treehouse deck, and a private yoga session in the forest clearing.",
            "Late morning — Drive or transfer back to Cairns (1.5 hours from the Daintree). Stop at Hartley's Crocodile Adventures on the highway (A$47) — a 4,000-year-old crocodile habitat with 250 estuarine crocodiles, wildlife presentations, and a boat cruise through the billabong.",
            "Cairns Airport — shop for Daintree Chocolate, Queensland macadamia products, and locally produced tea tree oil at the airport boutiques before departure.",
          ],
          cost: "A$2,500–5,000 (qualia night) or A$300–500 (Cairns final day activities)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "A$28–55",
      food: "A$25–40",
      transport: "A$10–20",
      activities: "A$40–80",
      total: "A$100–170/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "A$150–300",
      food: "A$50–80",
      transport: "A$20–40",
      activities: "A$70–120",
      total: "A$280–500/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "A$400–1,500",
      food: "A$100–250",
      transport: "A$50–150",
      activities: "A$150–600",
      total: "A$700–2,500+/day",
    },
  ],
  mistakes: [
    {
      icon: "🪸",
      title: "Not Booking Reef Tours in Advance",
      desc: "The outer reef tours from Cairns sell out 2–4 weeks ahead during peak season (July–September). The most reputable operators — Sunlover, Reef Magic, Calypso — have fixed daily departures with limited capacity. Showing up at Reef Fleet Terminal hoping for a same-day ticket is a gamble that often fails. Book online as soon as your Cairns dates are confirmed.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🪼",
      title: "Visiting Stinger Season Without Protection",
      desc: "Box jellyfish and Irukandji jellyfish are present in Cairns waters from October to May. Their stings range from extremely painful to potentially fatal. All reputable reef tour operators provide stinger suits as standard — wear one for every water activity, even if you feel slightly ridiculous. Do not swim in the open ocean from beaches in this period without a full stinger suit.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌿",
      title: "Skipping the Daintree Rainforest",
      desc: "Most first-time visitors to Cairns fill every day with reef activities and never see the Daintree. This is a significant miss. The Daintree is 135 million years old — more ancient than the Amazon — and contains 30% of Australia's frog species, 65% of its bat species, and 18% of its bird species in just 0.2% of Australia's land area. It's not a side trip; it's an equal billing with the reef.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "⛵",
      title: "Booking Reef Tours from Port Douglas to Save Money",
      desc: "Port Douglas is marketed as a more upmarket reef departure point. While true, it costs A$50–80 more per person for the same tours because operators factor in the extra 1-hour travel time north. Budget travellers based in Cairns access equivalent outer reef sites at better prices. Splurge on Port Douglas for the town experience, not as a money-saving reef strategy.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🤿",
      title: "Do the Intro Scuba Dive — Even if You're Nervous",
      desc: "Every major reef tour operator offers an introductory scuba dive for non-certified divers at A$150–200 extra. A certified instructor accompanies you throughout at 5–8 metres depth. Breathing underwater for the first time on the Great Barrier Reef is a genuinely life-altering experience that snorkeling cannot replicate — you descend into the reef rather than floating above it. The vast majority of first-time divers describe it as one of the best experiences of their lives.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🦆",
      title: "Platypus at Dusk in the Atherton Tablelands",
      desc: "The creek at the base of Mt Hypipamee National Park (Atherton Tablelands, 1 hour from Cairns) is one of the most reliable wild platypus viewing spots in Queensland. Arrive 30–45 minutes before sunset and sit quietly beside the creek. Platypuses emerge to feed at dusk. No guide needed — free to enter. This is one of Australia's genuinely underrated wildlife moments and costs nothing.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🧥",
      title: "Wear a Stinger Suit Regardless of Season",
      desc: "Outside the October–May stinger season, jellyfish populations drop significantly — but they don't disappear entirely. In cooler winter water, Irukandji jellyfish are less active but can still be present. All tours provide stinger suits at no extra charge. There is no downside to wearing one — they also provide UV protection and make you more hydrodynamic. Put it on every time.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🐠",
      title: "Outer Reef Is Categorically Better Than Inner Reef",
      desc: "Budget constraints sometimes push travellers toward 'reef snorkeling' tours that visit inner reef sites (Green Island, Fitzroy Island, Michaelmas Cay). These are beautiful but incomparable to the outer reef. The outer reef — Moore Reef, Flynn Reef, Norman Reef — has visibility three times greater, coral formations twenty times larger, and fish populations ten times denser. Spend the extra A$40–60 and go to the outer reef. It is the actual Great Barrier Reef experience.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "When is the best time to visit the Great Barrier Reef?",
      a: "June to October is the optimal window — dry season, water visibility at its best (15–30 metres), water temperature 22–26°C, and no stinger risk. July and August are peak season with the best conditions but highest prices. May and November are shoulder months with good conditions and fewer crowds. Avoid December to April: stinger season, high rainfall, and occasional cyclone risk.",
    },
    {
      q: "Do I need scuba certification to experience the reef?",
      a: "No. Snorkeling gives excellent reef access and all major tour operators include gear at no extra charge. Introductory scuba dives (A$150–200 extra) are available to anyone in reasonable health — a certified instructor accompanies you throughout. If you want to dive independently, Open Water certification courses run 3–4 days in Cairns for A$350–600 and can be combined with a reef dive upon completion.",
    },
    {
      q: "Has coral bleaching affected the reef — is it still worth visiting?",
      a: "The reef has experienced significant bleaching events in 2016, 2017, 2020, 2022, and 2024. However, approximately 70% of the outer reef remains in healthy condition, and the sites accessed by major Cairns tour operators are consistently among the best-preserved sections. The Great Barrier Reef Marine Park Authority actively monitors reef health and can direct you to the healthiest sites. It remains one of the most extraordinary natural environments on earth.",
    },
    {
      q: "Should I base myself in Cairns or Port Douglas?",
      a: "Cairns for budget and mid-range travel. Port Douglas for luxury. Cairns has dramatically better transport connections (international airport, more operators, lower prices), more hostel and mid-range hotel options, and the same outer reef access as Port Douglas. Port Douglas is quieter, more upscale, and marginally closer to the reef — but the A$50–80 per-person premium on tours makes it a poor-value base for budget travellers.",
    },
    {
      q: "How much should I budget per day in Cairns?",
      a: "Budget travellers can manage A$100–170/day (hostel bed A$30–55, meals A$25–40, reef day tour A$130–180 amortised across 4 days). Mid-range sits at A$280–500/day with a 3-star hotel and premium reef experiences. Luxury ranges from A$700/day to A$2,500+/day at Silky Oaks Lodge or qualia. The single biggest daily expense is always the reef tour — build that into your planning first.",
    },
    {
      q: "What is stinger season and how dangerous is it?",
      a: "Stinger season runs October through May, when box jellyfish and the near-invisible Irukandji jellyfish are present in Cairns coastal waters. Box jellyfish stings are excruciatingly painful and can cause cardiac arrest in severe cases; Irukandji stings cause delayed but severe systemic reactions requiring hospital treatment. All reputable tour operators provide full-length stinger suits — wearing one eliminates the risk. Never swim in open beach water in stinger season without one.",
    },
  ],
  combineWith: ["sydney-5-days", "melbourne-4-days", "uluru-3-days"],
  relatedSlugs: ["sydney-5-days", "melbourne-4-days", "uluru-3-days", "bali-5-days"],
  galleryQuery: "great barrier reef coral australia queensland cairns snorkeling fish",
};

export const metadata: Metadata = {
  title: "Great Barrier Reef in 4 Days: Snorkeling, Daintree & Cairns Complete Guide (2026)",
  description:
    "4-day Great Barrier Reef guide from Cairns — outer reef snorkeling, Daintree Rainforest, intro scuba diving, Atherton Tablelands platypus, and budget breakdowns for every travel style.",
  keywords: [
    "great barrier reef itinerary 4 days",
    "cairns travel guide 2026",
    "great barrier reef snorkeling",
    "daintree rainforest day trip",
    "cairns budget travel",
    "australia reef guide",
  ],
  openGraph: {
    title: "Great Barrier Reef in 4 Days: Snorkeling, Daintree & Cairns (2026)",
    description:
      "Outer reef snorkeling secrets, Daintree Rainforest guide, intro scuba diving tips, and real A$ costs for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Great Barrier Reef coral snorkeling Queensland Australia",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Barrier Reef in 4 Days (2026)",
    description: "Outer reef, Daintree Rainforest, intro dives, and real A$ costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/great-barrier-reef-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Great Barrier Reef in 4 Days: Snorkeling, Daintree & Cairns Complete Guide (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200&q=80",
      description:
        "4-day Great Barrier Reef itinerary with outer reef snorkeling, Daintree Rainforest, intro scuba diving, and A$ costs for budget to luxury travellers.",
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
          name: "Great Barrier Reef 4 Days",
          item: "https://www.incredibleitinerary.com/blog/great-barrier-reef-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Great Barrier Reef, Queensland, Australia",
      description:
        "The world's largest coral reef system, stretching 2,300km along the Queensland coast. A UNESCO World Heritage Site and one of the seven natural wonders of the world.",
      touristType: [
        "Snorkelers",
        "Scuba divers",
        "Nature lovers",
        "Wildlife enthusiasts",
        "Adventure travellers",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -16.9186,
        longitude: 145.7781,
      },
    },
  ],
};

export default function GreatBarrierReefPage() {
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
