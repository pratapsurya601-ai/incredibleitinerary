import type { Metadata } from "next";
import BotswanaOkavangoClient from "./BotswanaOkavangoClient";

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/botswana-okavango-6-days#article",
      "headline": "Okavango Delta, Botswana in 6 Days: The Complete Safari Guide (Budget to Luxury, 2026)",
      "description":
        "Complete 6-day Botswana Okavango Delta itinerary covering mokoro canoe safaris, Chobe elephants, Moremi Game Reserve, Victoria Falls, visa info, and luxury camp vs. budget options.",
      "image": "https://incredibleitinerary.com/og/botswana-okavango-6-days.jpg",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
      },
      "datePublished": "2026-01-20",
      "dateModified": "2026-04-05",
      "url": "https://incredibleitinerary.com/blog/botswana-okavango-6-days",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Botswana Okavango 6-Day Guide", "item": "https://incredibleitinerary.com/blog/botswana-okavango-6-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Okavango Delta",
      "description":
        "The world's largest inland delta — a 15,000 sq km UNESCO World Heritage oasis in the Kalahari Desert, where the greatest concentration of African wildlife exists in genuinely wild conditions, reached by mokoro canoe or light aircraft.",
      "url": "https://incredibleitinerary.com/blog/botswana-okavango-6-days",
      "touristType": ["Wildlife Tourist", "Adventure Tourist", "Luxury Traveller", "Conservation Traveller"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -19.2833,
        "longitude": 22.9167,
      },
      "containedInPlace": { "@type": "Country", "name": "Botswana" },
    },
  ],
};

/* ── Page data (retained for reference — rendered by BotswanaOkavangoClient) ── */
const _data = {
  destination: "Okavango Delta",
  country: "Botswana",
  countryFlag: "🇧🇼",
  slug: "botswana-okavango-6-days",
  heroQuery: "botswana okavango delta elephant safari water channel africa",
  heroAlt: "Botswana Okavango Delta elephant herd crossing water channel at sunset Africa",
  category: "Africa",
  date: "January 20, 2026",
  readTime: "16 min read",

  intro:
    "The Okavango River performs one of nature's strangest miracles: it flows inland from Angola, travels 1,000 kilometres southeast, and then disappears into the sand of the Kalahari Desert — not into a sea, not into a lake, but into the desert itself, creating a 15,000 square kilometre labyrinth of channels, islands, and lagoons that becomes the greatest concentration of wildlife in Africa. A Batswana guide poles your mokoro (a dugout canoe carved from a sausage tree) in silence through carpets of water lilies while an elephant drinks 5 metres from your bow. A lion pride circles your game-drive vehicle at dusk while your guide says simply, 'they're just curious.' Botswana has made a conscious choice to be the world's most expensive safari destination: low-volume, high-cost, conservation-first. That policy has worked. The wilderness here is genuinely wild in a way that's harder to find anywhere else in Africa. This is Botswana — Africa's conservation success story, and arguably the finest wildlife experience on Earth.",

  stats: {
    duration: "6 Days",
    budgetFrom: "$300",
    bestMonths: "Jun–Oct (dry season, wildlife concentrated around water)",
    airport: "GBE (Gaborone) or MUB (Maun, delta gateway)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "affiliate", emoji: "🎟️", label: "Book Safari Activities" },
    { id: "related", emoji: "🗺️", label: "Related Guides" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "No — Indian passport holders enjoy visa-free entry into Botswana"],
        ["Stay allowed", "Up to 90 days; one of Africa's easiest entries for Indian travellers"],
        ["Entry point", "Maun Airport (MUB) is the gateway to the Okavango Delta — fly via Johannesburg"],
        ["Proof needed", "Return/onward ticket, proof of accommodation/safari booking, sufficient funds"],
        ["Yellow fever", "Required if arriving from a yellow fever-endemic country (e.g. Kenya, Uganda)"],
        ["Currency", "Botswana Pula (BWP); lodge packages typically priced in USD"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passport",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "No — visa-free for US, UK, EU, Australian and most Western passports"],
        ["Stay allowed", "90 days on arrival; extendable at Department of Immigration"],
        ["Entry hub", "Fly to Maun (MUB) via Johannesburg (OR Tambo) — most efficient route"],
        ["Internal flights", "Light aircraft (Cessna 206 etc.) between camps — included in most luxury packages"],
        ["Health", "Anti-malaria medication strongly recommended; consult your doctor 6 weeks before"],
        ["Travel insurance", "Specialist safari/medical evacuation insurance essential — remote wilderness"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$300/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Maun + Mokoro Day Trip",
          items: [
            "Fly into Maun (MUB) via Johannesburg; budget guesthouse or Audi Camp ($30–50/night)",
            "Afternoon: self-arrange a 2-hour mokoro trip from the edge of the delta near Maun ($20–30pp)",
            "Even the delta periphery holds herons, hippos, and impala herds — wildlife starts immediately",
            "Evening: dinner at Bon Arrivée restaurant in Maun (~$15); plan your itinerary with local operators",
            "Note: budget in Botswana still means guided experiences — this is not a backpacker destination",
          ],
          cost: "$90–120 (guesthouse + mokoro day trip + meals)",
        },
        {
          day: "Day 2",
          title: "Overnight Delta Mokoro Safari (Khwai/Moremi Periphery)",
          items: [
            "Book a 2-day/1-night budget mokoro safari through a community operator from Maun ($120–160pp)",
            "Pole deep into the channels — your poler-guide reads the water, identifies animals, and sets up camp",
            "Lunch cooked at a temporary island camp; afternoon game walk on a delta island",
            "Sunset on the water watching elephants cross the channel — the definitive Okavango experience",
            "Night in a tent on a delta island; sounds of hippos and frogs all night",
          ],
          cost: "$130–170 (overnight safari package, all inclusive)",
        },
        {
          day: "Day 3",
          title: "Return from Delta + Maun Rest Day",
          items: [
            "Morning mokoro back to shore; wildlife is often most active in the first 2 hours after sunrise",
            "Return to Maun by midday; shower at your guesthouse",
            "Afternoon: visit the Nhabe Museum (free, covers Okavango ecology and Batswana culture)",
            "Browse Maun's craft market for Botswana basketry — among the finest weaving in Africa",
            "Evening: sundowner by the Thamalakane River; plan Chobe day trip",
          ],
          cost: "$50–70 (guesthouse + meals + museum)",
        },
        {
          day: "Day 4",
          title: "Chobe National Park Budget Day Trip",
          items: [
            "Shared shuttle/bus from Maun to Kasane, gateway to Chobe (~$30 shared, 4 hours)",
            "Afternoon: shared boat safari on the Chobe River ($25pp, 2 hrs) — world's highest elephant concentration",
            "Elephants drink, cross and swim in front of the boat; hippos, crocodiles, and hundreds of birds visible",
            "Budget lodge in Kasane (~$40/night — try Chobe Backpackers)",
            "Evening: sundowner watching elephants on the floodplain from the lodge veranda",
          ],
          cost: "$100–130 (transport + boat safari + lodge)",
        },
        {
          day: "Day 5",
          title: "Chobe Morning Game Drive + Return",
          items: [
            "6am shared game drive in Chobe National Park ($35pp, 3 hrs) — lion, leopard, wild dog possible",
            "Chobe in the dry season (Jun–Oct) has staggering wildlife density; one of Africa's most reliable game-drive areas",
            "Optional: 1-hour add-on visit to Kasane's craft shops for mopane baskets",
            "Afternoon: shared vehicle back toward Maun or bus to Victoria Falls if extending trip",
            "The 'Big 5' (lion, leopard, elephant, buffalo, rhino) are all present in Chobe",
          ],
          cost: "$80–100 (game drive + transport + meals)",
        },
        {
          day: "Day 6",
          title: "Makgadikgadi Pans or Victoria Falls Detour",
          items: [
            "Option A: Makgadikgadi Pans day trip from Maun ($60 guided; Oct–Nov sees massive zebra migration)",
            "Meerkat encounters at Makgadikgadi — habituated groups sit on your head; ancient salt flats stretch to the horizon",
            "Option B: bus or flight to Victoria Falls, Zimbabwe/Zambia (4 hrs drive or 30 min flight, $80–120)",
            "Victoria Falls is the world's largest waterfall by volume; June–August is peak flow",
            "Departure from Maun or Kasane to Johannesburg and onward flights",
          ],
          cost: "$80–150 (depending on option chosen + transport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$600/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Maun + Moremi Game Reserve",
          items: [
            "Fly into Maun (MUB) via Johannesburg; mid-range lodge (~$150–200/night, all-inclusive)",
            "Afternoon: light aircraft to Moremi Game Reserve camp (30 min, $80–120 each way)",
            "Moremi is the protected heart of the Okavango Delta — best combination of water and wildlife",
            "Evening game drive with a professional guide from camp ($30–50pp, included in many packages)",
            "Sundowner in the bush; camp dinner under the stars",
          ],
          cost: "$280–350 (lodge + flights + game drive, all-inclusive)",
        },
        {
          day: "Day 2",
          title: "Full Delta Mokoro + Game Drive Day",
          items: [
            "Dawn game drive (5:30am) before the heat — lion, leopard, wild dog most active at sunrise",
            "Breakfast back at camp; mid-morning mokoro safari (3 hrs) through the water channels",
            "Your guide pole-stands and reads the delta: leopard tracks on an island, elephant crossing 40 metres ahead",
            "Afternoon siesta (the African way); late afternoon game drive as light turns golden",
            "Camp dinner with your guide sharing Batswana stories and bush lore",
          ],
          cost: "$200–280 (all-inclusive lodge day: two game drives + mokoro)",
        },
        {
          day: "Day 3",
          title: "Khwai Community Area + Night Drive",
          items: [
            "Move by light aircraft to Khwai Community Area (~$100 flight, 20 min)",
            "Khwai is community-run — fees go directly to villages that border the wildlife corridor",
            "Afternoon game drive through Khwai's forest/floodplain junction — wild dog packs are regularly seen here",
            "Sundowner stop in the wilderness; evening night drive with spotlight ($40pp at most camps)",
            "Night drives reveal owls, genets, civets, porcupines, and occasionally leopard or lion on a kill",
          ],
          cost: "$250–320 (lodge + flight + activities)",
        },
        {
          day: "Day 4",
          title: "Chobe River Boat Safari",
          items: [
            "Vehicle transfer or light aircraft to Chobe ($100–150); lodge on the Chobe River (~$200/night)",
            "Afternoon boat safari on the Chobe River (2 hrs) — elephants swimming, crocodiles, and tens of thousands of birds",
            "Chobe has the highest elephant concentration on Earth — herds of 200+ wade into the river daily",
            "Sundowner on the boat; dinner at lodge overlooking the floodplain",
            "Book via GetYourGuide: https://www.getyourguide.com/s/?q=Chobe+National+Park+safari&partner_id=PSZA5UI",
          ],
          cost: "$300–380 (lodge + boat + activities, all-inclusive)",
        },
        {
          day: "Day 5",
          title: "Chobe Morning Drive + Victoria Falls",
          items: [
            "Dawn game drive in Chobe (6am, 3 hrs) — lion, sable antelope, wild dog are possible",
            "Brunch at lodge; private vehicle to Livingstone or Victoria Falls ($60–80, 1 hour)",
            "Victoria Falls entry $30 (Zimbabwe side) or $20 (Zambia side) — both give different perspectives",
            "Devil's Pool swim (seasonal, Sept–Dec): swim right to the edge of the falls in a natural rock pool",
            "Lodge in Livingstone ($80–120/night) with views of the spray column at sunset",
          ],
          cost: "$280–340 (game drive + Vic Falls entry + lodge)",
        },
        {
          day: "Day 6",
          title: "Victoria Falls Adventure + Departure",
          items: [
            "Morning: helicopter over Victoria Falls ($150–180, 15 min) — the only way to understand its full scale",
            "Optional: white-water rafting on the Zambezi below the falls (Grade V rapids, $120pp, half day)",
            "Lunch in Livingstone; transfer to Livingstone Airport (LVI) for flight to Johannesburg",
            "Onward international connections from OR Tambo, Johannesburg",
            "Depart with your once-in-a-lifetime Africa story intact",
          ],
          cost: "$280–380 (helicopter + activities + airport transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$1,500/day",
      days: [
        {
          day: "Day 1",
          title: "Private Fly-in to Mombo Camp",
          items: [
            "Business class to Johannesburg; private charter to Maun ($800–1,200 private charter, or scheduled connection)",
            "Wilderness Safaris Mombo Camp or &Beyond Xaranna — the finest camps in the Okavango ($1,200–2,000pp/night all-inclusive)",
            "Private light aircraft transfer to your camp (30–45 min, stunning aerial view of the delta)",
            "Afternoon game drive with your dedicated private guide and tracker — Mombo is renowned for big cat sightings",
            "Sundowner in the wilderness; gourmet dinner under the stars at your camp's outdoor dining area",
          ],
          cost: "$1,400–2,000 (private charter + ultra-luxury camp, all-inclusive)",
        },
        {
          day: "Day 2",
          title: "Private Mokoro + Walking Safari + Big Cats",
          items: [
            "Pre-dawn tea and biscuits; 5am game drive with private guide and tracker — lion, leopard, cheetah possible at Mombo",
            "Return for hot breakfast at camp; mid-morning private mokoro with your personal poler",
            "Walking safari with an armed guide on a delta island — tracks, termite mounds, and bush lore",
            "Afternoon siesta in your luxury tent (private plunge pool, outdoor shower, 1000-thread-count linen)",
            "Sunset game drive — golden hour photography of elephants, giraffes, and water birds",
          ],
          cost: "$1,200–1,800 (all-inclusive luxury camp day)",
        },
        {
          day: "Day 3",
          title: "Helicopter Safari Over the Delta",
          items: [
            "Private helicopter over the Okavango: 1 hour of aerial views of channels, elephant herds from above ($1,000+ private)",
            "Land at a remote island for a bush breakfast prepared by your camp's chef",
            "Return by mokoro through a different channel system",
            "Afternoon: fishing for tigerfish in the delta (Botswana catch-and-release fishing, $80pp with guide)",
            "Camp dinner: multi-course menu with South African wines under a sky with zero light pollution",
          ],
          cost: "$1,500–2,200 (helicopter + all-inclusive ultra-camp)",
        },
        {
          day: "Day 4",
          title: "Move to Chobe: Wilderness Safaris Chobe Under Canvas",
          items: [
            "Private charter flight from Moremi to Kasane/Chobe ($400–600 private 4-seater)",
            "Check into Chobe Under Canvas or &Beyond Chobe Chilwero (from $900pp/night all-inclusive)",
            "Afternoon private boat safari on the Chobe River — your own boat, guide, and sundowner setup on the water",
            "Watch the elephant herds crossing the river in their hundreds as the sun drops behind the treeline",
            "Private dinner on the river deck with the sounds of the African night",
          ],
          cost: "$1,300–1,800 (private charter + ultra-luxury Chobe camp)",
        },
        {
          day: "Day 5",
          title: "Victoria Falls: Helicopter + Devil's Pool",
          items: [
            "Private vehicle to Victoria Falls, Zimbabwe (1 hour from Kasane) — private guide explains the Falls' history",
            "Private helicopter flight over the falls ($250 private 30-min, 2-seater)",
            "Devil's Pool swim (Sept–Dec seasonally available) — private guide and safety briefing included",
            "Lunch at The Victoria Falls Hotel (colonial-era grand hotel, built 1904, still magnificent, ~$50pp)",
            "Afternoon guided rainforest walk through the spray forest on the Zimbabwe side",
          ],
          cost: "$1,000–1,400 (private car + helicopter + lodge)",
        },
        {
          day: "Day 6",
          title: "Makgadikgadi Pans or Departure in Style",
          items: [
            "Option A: private charter to Makgadikgadi ($500 private, Wilderness Safaris Jack's Camp is extraordinary)",
            "Ancient salt pans stretching to the horizon; habituated meerkat colony wakes you at sunrise",
            "Full-moon quad bike ride across the pans — a once-in-a-lifetime African experience",
            "Option B: direct departure from Kasane Airport (BBK) — private transfer, lounge access",
            "Connection to Johannesburg for international onward flights; depart with Botswana's silence still in your ears",
          ],
          cost: "$800–1,500 (Makgadikgadi option + private transfers)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$30–50 (Maun guesthouse)",
      food: "$15–25 (restaurants in Maun)",
      transport: "$30–50 (shared shuttles)",
      activities: "$120–180 (mokoro + shared game drives)",
      total: "~$300/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–250 (Moremi/Khwai lodge, all-inc.)",
      food: "$0 (all-inclusive)",
      transport: "$80–150 (light aircraft, shared)",
      activities: "$60–120 (boat safaris, Vic Falls)",
      total: "~$600/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$1,200–2,000 (Mombo, Xaranna, Chilwero)",
      food: "$0 (all-inclusive with wine)",
      transport: "$400–1,200 (private charters)",
      activities: "$200–1,000 (helicopter, private guides)",
      total: "~$1,500/day",
    },
    {
      tier: "✈️ Getting There",
      accommodation: "N/A",
      food: "N/A",
      transport: "$400–2,500 (to Johannesburg + Maun)",
      activities: "N/A",
      total: "One-time cost",
    },
    {
      tier: "🗓️ Avg Trip (6d)",
      accommodation: "$180–12,000 total",
      food: "$90–included",
      transport: "$180–3,600 total",
      activities: "$300–3,600 total",
      total: "$1,800–9,000 total",
    },
  ],

  mistakes: [
    {
      icon: "🌞",
      title: "Going in the wet season (Nov–May) expecting the dry-season safari",
      desc: "The Okavango floods between February and July, peaking in July–August. The 'best' time for wildlife is June–October when animals concentrate around shrinking water sources. The wet season (Nov–Jan) has lush greenery and baby animals, but thick vegetation means sightings are harder. If wildlife density is your priority, plan for June–October without compromise.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🔋",
      title: "Not budgeting for the light aircraft transfers",
      desc: "Remote Okavango camps are only accessible by light aircraft. Budget travellers often miss this cost. A shared flight from Maun to a Moremi camp runs $120–180 each way per person. Luxury camps include flights in their rates. Factor in $300–600 for internal flying when calculating your total trip cost, or you'll be stranded in Maun.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💊",
      title: "Skipping malaria prevention",
      desc: "The Okavango Delta is a malaria zone year-round, with higher risk from November to April (wet season). Consult your doctor 6 weeks before travel. Doxycycline or Malarone are commonly prescribed. Wear long sleeves at dusk, use DEET, and sleep under a mosquito net. Good camps provide all of these — but the medication must start before you arrive.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📷",
      title: "Bringing only a phone camera",
      desc: "The Okavango has extraordinary wildlife but the light conditions — harsh midday sun, low dusk, moving vehicles — demand more than a phone. A camera with at least 300mm zoom (Sony RX10 IV, Canon SX70, or a DSLR with a telephoto lens) transforms your experience. Phone cameras struggle at distance and in low light. Rent a wildlife camera in Johannesburg if you don't own one.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🎒",
      title: "Overpacking — weight limits on light aircraft are strict",
      desc: "Luxury camps are accessed by Cessna 206 or similar — baggage limits are 15–20kg total, in a soft-sided bag only (no rigid suitcases). Hard-shell luggage will be left at your Maun lodge. Pack a soft duffel: neutral-coloured clothes, long sleeves for evenings, binoculars, sunscreen, a hat, and camera gear. Everything else is provided at your camp.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  tips: [
    {
      icon: "🐘",
      title: "Book 12+ months ahead for peak camps in peak season",
      desc: "Mombo Camp, &Beyond Xaranna, and Wilderness Safaris' top properties in Botswana have 12 to 18-month waitlists for July and August. These are the world's most coveted safari beds. Even mid-range Moremi lodges book out by February for the June–October season. Botswana's low-volume tourism policy means there are genuinely only a few hundred beds in the entire delta. Book through a specialist Africa safari operator.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🛶",
      title: "A mokoro sunrise is the Okavango's defining moment — don't skip it",
      desc: "A motorboat game drive is spectacular. A mokoro canoe at 6am in silence, with your poler reading the channels and an elephant drinking 20 metres away, is transcendent. Even budget travellers who do nothing else in the delta should spend a morning in a mokoro. Book via GetYourGuide for vetted community operators: https://www.getyourguide.com/s/?q=Okavango+Delta+mokoro+safari&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🦁",
      title: "Combine Okavango with Chobe for the most complete Africa experience",
      desc: "Botswana is small enough to combine the Okavango Delta's water wilderness (channels, mokoro, birds) with Chobe National Park's terrestrial spectacle (world's highest elephant concentration, 4WD game drives) in a single 6–8 day trip. Kasane, the Chobe gateway, is 4 hours by road or 45 minutes by chartered plane from Maun. Covering both transforms a good safari into an exceptional one.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "⭐",
      title: "Khwai Community Area rivals private reserves at lower cost",
      desc: "The Khwai Community Area on the northern edge of Moremi Game Reserve is community-run and open-access — no private concession fees. Wildlife regularly moves freely between Moremi and Khwai, meaning you get equivalent game (wild dog, lion, leopard, elephant) for 30–40% less than private concession camps. Several lodges operate here; Old Bridge Backpackers Campsite has a stunning floodplain location for ~$20/night.",
      color: "bg-pink-50 border-pink-200",
    },
  ],

  faqs: [
    {
      q: "Is Botswana really the most expensive safari destination in Africa?",
      a: "Deliberately, yes. Botswana's government set a high-cost, low-volume tourism policy in the 1990s, restricting safari beds across the delta to protect the ecosystem. The cheapest way to experience the Okavango costs around $200–300 per day (Maun-based mokoro trip plus basic accommodation). Private lodge all-inclusive rates run $800–2,000 per person per night. Compared to Kenya or Tanzania, where budget safaris are possible for $100/day, Botswana is significantly more expensive — but the wildlife density and genuine wilderness justify every cent.",
    },
    {
      q: "What is the best camp in the Okavango Delta?",
      a: "Mombo Camp (Wilderness Safaris) on Chief's Island is widely regarded as Africa's finest safari camp — extraordinary big cat activity, impeccable guiding, and exceptional food. &Beyond Xaranna offers comparable luxury in the western delta. For mid-range, Moremi Crossing, Sanctuary Chief's Camp, and Khwai River Lodge consistently win awards. For budget, Old Bridge Backpackers in Khwai and Audi Camp in Maun are the most respected base camps.",
    },
    {
      q: "Do I need a visa for Botswana?",
      a: "Most Western passports (US, UK, EU, Australia, Canada) and Indian passports are visa-free for up to 90 days. South African, Zimbabwean, and Zambian citizens are also visa-free. A small number of nationalities do require visas — check the Botswana Department of Immigration website or your nearest Botswana High Commission. The vast majority of visitors arrive without any pre-arranged visa.",
    },
    {
      q: "Can I self-drive in the Okavango Delta?",
      a: "Not in the inner delta — the channels, islands, and floodplains are accessible only by mokoro or light aircraft. However, you can self-drive to the eastern delta periphery and Moremi's Third Bridge area in a 4WD vehicle, which dramatically reduces costs. Self-drive Moremi from Maun is possible with a capable 4WD (Hilux or Land Cruiser class), camping equipment, and experience — but the tracks are notoriously rough and flood seasonally. This is not recommended for first-time Africa visitors.",
    },
  ],

  combineWith: ["victoria-falls", "chobe-national-park", "south-africa-cape-town", "kenya-masai-mara"],
  relatedSlugs: ["medellin-4-days", "panama-city-3-days", "kenya-safari-7-days"],

  galleryQuery: "botswana okavango delta mokoro elephant safari lion chobe sunset africa wildlife",
};

/* ── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Okavango Delta, Botswana in 6 Days: Complete Safari Guide 2026 | IncredibleItinerary",
  description:
    "Complete 6-day Botswana Okavango Delta safari guide: mokoro canoe trips, Chobe elephant safaris, Moremi Game Reserve, Victoria Falls, luxury camp options, visa info and 2026 booking tips.",
  keywords: [
    "Okavango Delta safari",
    "Botswana travel guide 2026",
    "Okavango Delta itinerary",
    "mokoro canoe safari",
    "Chobe National Park elephants",
    "Moremi Game Reserve",
    "Botswana luxury safari",
    "Mombo Camp Botswana",
    "Victoria Falls Botswana",
    "Botswana visa Indian passport",
  ],
  openGraph: {
    title: "Okavango Delta, Botswana in 6 Days: Complete Safari Guide 2026 | IncredibleItinerary",
    description:
      "Mokoro canoes through water lily channels, world's highest elephant concentration, and the most genuinely wild wilderness in Africa — the complete 6-day Botswana guide.",
    url: "https://incredibleitinerary.com/blog/botswana-okavango-6-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/botswana-okavango-6-days.jpg",
        width: 1200,
        height: 630,
        alt: "Botswana Okavango Delta elephant herd crossing water channel at sunset Africa",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Okavango Delta, Botswana in 6 Days: Complete Safari Guide 2026",
    description:
      "Africa's conservation success story — complete 6-day Botswana safari guide from budget mokoro to Mombo Camp luxury.",
    images: ["https://incredibleitinerary.com/og/botswana-okavango-6-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/botswana-okavango-6-days",
  },
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function BotswanaOkavangoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BotswanaOkavangoClient />
    </>
  );
}
