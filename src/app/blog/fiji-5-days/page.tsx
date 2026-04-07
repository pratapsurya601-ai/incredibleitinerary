import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Fiji 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Fiji trip in 5 days. Plan the perfect 5 days in Fiji — Yasawa island hopping, Mamanuca resorts, kava ceremonies, coral reef diving, and budgets.",
  keywords: [
    "Fiji 5 days itinerary",
    "Fiji travel guide 2026",
    "Mamanuca Islands Fiji",
    "Yasawa Islands backpacking Fiji",
    "Fiji overwater bungalow",
    "Fiji kava ceremony",
    "Great Astrolabe Reef Fiji",
    "Fiji budget guide",
  ],
  openGraph: {
    title: "Fiji 5-Day Itinerary 2026: Trip Planner",
    description:
      "Coral reefs, kava ceremonies, island hopping and the warmest people on earth — your ultimate 5-day Fiji itinerary from $100/day to overwater luxury.",
    url: "https://incredibleitinerary.com/blog/fiji-5-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-01-20T08:00:00Z",
    modifiedTime: "2026-04-05T08:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Fiji overwater bungalows with crystal clear turquoise lagoon and coral reefs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiji 5-Day Itinerary 2026: Trip Planner",
    description:
      "Coral reefs, kava ceremonies, island hopping and the warmest people on earth — your ultimate 5-day Fiji itinerary from $100/day to overwater luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/fiji-5-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Fiji in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Plan the perfect 5 days in Fiji — Yasawa island hopping, Mamanuca resorts, kava ceremonies, coral reef diving, and budgets from $100/day to overwater bungalows.",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80",
    datePublished: "2026-01-20T08:00:00Z",
    dateModified: "2026-04-05T08:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/fiji-5-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Fiji 5-Day Guide", item: "https://incredibleitinerary.com/blog/fiji-5-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Fiji",
    description:
      "An archipelago of over 300 islands in the South Pacific, famous for world-class coral reefs, warm Melanesian hospitality, overwater bungalows, and pristine beaches.",
    url: "https://incredibleitinerary.com/blog/fiji-5-days",
    touristType: ["Beach lovers", "Snorkellers and divers", "Honeymooners", "Island hoppers", "Backpackers"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.7134,
      longitude: 178.065,
    },
    containedInPlace: {
      "@type": "Country",
      name: "Fiji",
    },
  },
];

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Fiji",
  country: "Fiji",
  countryFlag: "🇫🇯",
  slug: "fiji-5-days",
  heroQuery: "fiji overwater bungalow coral reef tropical islands pacific",
  heroAlt: "Fiji overwater bungalows with crystal clear turquoise lagoon and coral reefs",
  category: "Pacific",
  date: "January 20, 2026",
  readTime: "15 min read",

  intro:
    "Imagine snorkelling over soft coral gardens that harbour more fish species than the entire Great Barrier Reef, being welcomed to a highland village by a traditional kava ceremony where the whole community gathers around a carved wooden bowl, watching the sun turn 300 islands pink and gold from the summit of a dormant volcano, and experiencing a warmth of local hospitality captured entirely in a single word — Bula — that Fijians say twenty times a day and mean every single time. Fiji is not just beautiful islands; it is a lesson in how a people can be.",

  stats: {
    duration: "5 Days",
    budgetFrom: "$100",
    bestMonths: "May–Oct (dry season)",
    airport: "NAN (Nadi)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
    { id: "tours", emoji: "🎟️", label: "Tours & Activities" },
    { id: "combine", emoji: "✈️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Visa Required", "No visa required for Indian passport holders"],
        ["Entry", "4-month visa granted on arrival at Nadi (NAN) airport"],
        ["Cost", "Free — no visa fees"],
        ["Passport Validity", "Must be valid for at least 6 months beyond your departure date"],
        ["Proof Required", "Onward/return ticket and sufficient funds (approx $100 FJD per day)"],
        ["Tip", "Fijian immigration officers are famously friendly — relax and greet them with Bula!"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇦🇺",
      title: "US / UK / EU / AU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required", "No visa required"],
        ["Duration", "4 months on arrival — one of the most generous in the Pacific"],
        ["Cost", "Free entry"],
        ["Passport Validity", "6 months validity beyond arrival date required"],
        ["Proof Required", "Return/onward flight ticket, accommodation confirmation"],
        ["Tip", "No ETIAS or pre-registration required — simply arrive and say Bula!"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "$100/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Nadi & Board the Yasawa Flyer Ferry",
          items: [
            "Land at Nadi (NAN) International Airport — take a local bus or shared taxi to Port Denarau ($5–10 FJD)",
            "Board the Yasawa Flyer — the iconic blue catamaran ferry that is the lifeline of the Yasawa Islands. Budget pass: Wayasewa or Nacula Island (3–5 hrs, $80–130 FJD one way)",
            "Arrive at your chosen Yasawa island — the Yasawas are the most authentically Fijian islands, less commercialised than the Mamanucas",
            "Check in to a budget bure (traditional thatched bungalow) at Coral View Resort or Octopus Resort (from $50–80 USD/night including meals on some packages)",
            "Evening kava ceremony with the host village — this is complimentary at most Yasawa Island budgets and is the single most culturally enriching experience in Fiji",
            "Fresh fish dinner at the resort communal table — meet fellow travellers from around the world",
          ],
          cost: "$80–100",
        },
        {
          day: "Day 2",
          title: "Snorkelling the Yasawa Reef & Village Visit",
          items: [
            "Morning snorkel directly off the beach — Yasawa reefs are pristine and begin right at the shore. Bring your own mask and fins or rent from the resort ($5/day)",
            "The soft corals of the Yasawas are UNESCO-praised — look for Napoleon wrasse, sea turtles and lionfish in the shallows",
            "Guided village walk to a traditional Fijian highland village ($5–10 donation) — meke dance performance, traditional cooking demonstration",
            "Lunch: fresh coconut from the village + resort lunch included in most Yasawa packages",
            "Afternoon: kayak or paddleboard on the lagoon (free at most budget resorts)",
            "Sunset from the hill above the resort — the 300-island Fijian panorama turns gold and pink",
            "Evening: informal beach bonfire at the resort, fresh fruit platter",
          ],
          cost: "$60–80",
        },
        {
          day: "Day 3",
          title: "Island Hop to Nacula or Tavewa & Blue Lagoon",
          items: [
            "Morning Yasawa Flyer hop to the next island — the Blue Lagoon area around Nacula and Sawa-i-Lau is where the 1980 film was made",
            "Sawa-i-Lau limestone cave — swim through a hidden underwater passage into an illuminated cave chamber ($10 FJD guide fee)",
            "Snorkel the Blue Lagoon — gin-clear water, visible coral at 10m depth, exceptional visibility",
            "Lunch at the island guesthouse — cassava, roti, fresh tuna",
            "Afternoon swim and reading on a white sand beach that you may well have entirely to yourself",
            "Back to base resort by evening ferry, fresh fish curry dinner",
          ],
          cost: "$70–90",
        },
        {
          day: "Day 4",
          title: "Sabeto Hot Springs, Mud Pools & Garden of the Sleeping Giant",
          items: [
            "Morning: Yasawa Flyer back to Lautoka/Port Denarau — arriving mid-morning",
            "Sabeto Hot Springs and Mud Pools near Nadi (local taxi share $15 FJD round trip) — bathe in natural thermal pools and coat yourself in volcanic mud for a natural facial (entry $30 FJD)",
            "Shower in the cool pools and feel genuinely refreshed",
            "Lunch at a local warung (canteen) in Nadi town — roti and curry for $5 FJD",
            "Afternoon: Garden of the Sleeping Giant (established by Raymond Burr, star of Perry Mason) — Fiji's finest orchid garden with 2,000 orchid varieties ($18 FJD entry)",
            "Evening: Nadi town for local shopping — kava roots, tapa cloth, hand-carved tanoa bowls to take home",
            "Budget dinner: Mama's Pizza in Nadi — a local institution, wood-fired pizza for $15 FJD",
          ],
          cost: "$70–90",
        },
        {
          day: "Day 5",
          title: "Mamanuca Day Trip & Departure",
          items: [
            "South Sea Island or Bounty Island day trip from Port Denarau (from $100 FJD return, ferry + snorkel gear included) — the classic postcard Fiji experience, tiny reef islands 45 min offshore",
            "Morning snorkel over the house reef — the Mamanuca fringing reefs have more colour per square metre than almost anywhere in the Pacific",
            "Beach volleyball, paddleboard, hammock time — Mamanuca island day tripping is unashamedly simple and correct",
            "Lunch included on most day trip packages — grilled fish and tropical fruit",
            "Return to Nadi early afternoon — transfer to airport",
            "Departure from NAN: carry a coconut in your carry-on (customs-approved if dried) and say a genuine Moce (goodbye) to Fiji",
          ],
          cost: "$80–110",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$250/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive & Check Into Mamanuca Resort",
          items: [
            "Land at Nadi — pre-arranged resort transfer by boat or seaplane to your Mamanuca Island resort",
            "Check in to Malolo Island Resort, Beachcomber Island, or Mana Island Resort (from $200–300 USD/night, semi-inclusive)",
            "Welcome kava ceremony on arrival — then straight to the beach",
            "Afternoon: snorkel the house reef with provided equipment, or stand-up paddleboard on the lagoon",
            "Pre-dinner cocktail at the beach bar watching the sunset across the Mamanuca group",
            "Dinner at the resort restaurant — fresh Fijian seafood, local produce, choose from the à la carte menu ($40–60pp)",
          ],
          cost: "Covered in resort package",
        },
        {
          day: "Day 2",
          title: "Great Astrolabe Reef Diving & Guided Snorkel",
          items: [
            "Morning: PADI dive (or guided snorkel) on the resort house reef or a day trip to the outer reef system",
            "The Mamanuca reefs are part of the world's 4th largest reef system — soft coral forests, shark nurseries, manta cleaning stations",
            "Guided snorkel to the coral garden with a Fijian guide who narrates every species ($30pp)",
            "Lunch: tropical seafood buffet or poolside lunch at the resort",
            "Afternoon: kayak around the island perimeter — spot reef sharks in the shallows near the channel",
            "Sunset cocktails at the overwater bar",
            "Village cultural night — meke dance performance by the local village troupe, Lovo feast (food cooked in earth oven), ($60pp, bookable through resort)",
          ],
          cost: "$200–280 (resort day)",
        },
        {
          day: "Day 3",
          title: "Navala Highland Village & Fijian Cultural Immersion",
          items: [
            "Full-day excursion by 4WD to Navala — Fiji's most authentic traditional village in the Ba Highlands (book through resort, $80–120pp)",
            "Navala has 200+ traditional bure (thatched houses) — no modern buildings, no concrete. One of the last genuinely traditional Fijian settlements.",
            "Formal kava ceremony welcome — presented with a sevusevu offering of kava root and seated by the chief",
            "Village lunch: dalo (taro), fish in coconut cream, breadfruit — eaten cross-legged on woven mats",
            "Walk through rice paddies and the valley — the Fijian highlands are surprisingly lush and cool",
            "Return to resort mid-afternoon; sunset swim",
            "Dinner: fresh lobster at the resort beachside restaurant ($40–70pp)",
          ],
          cost: "$200–250 (resort day + excursion)",
        },
        {
          day: "Day 4",
          title: "Beqa Lagoon Shark Dive or Taveuni Rainbow Reef",
          items: [
            "Option A: Beqa Lagoon shark dive (day trip from Pacific Harbour, $200pp all inclusive) — swim with 8 species of shark including bull sharks and tiger sharks, the most spectacular shark experience in the Pacific",
            "Option B: Seaplane to Taveuni — 'Fiji's Garden Island' where the Rainbow Reef offers arguably the world's finest soft coral diving in the Great White Wall and Rainbow Passage",
            "Afternoon return; resort spa treatment — Fijian bobo massage with monoi oil ($80–120 for 90 min)",
            "Final sunset cocktails at the beach",
            "Farewell dinner at the resort's signature restaurant — tasting menu featuring Fijian vanilla, fresh reef fish, tropical fruits",
          ],
          cost: "$250–350",
        },
        {
          day: "Day 5",
          title: "Seaplane Scenic Farewell & Departure",
          items: [
            "Optional: morning seaplane joy ride over the Mamanuca and Yasawa archipelago ($200pp, 30 min) — the view of 300 islands from above is unlike anything else in the Pacific",
            "Final resort breakfast on the beach — fresh papaya, Fijian coconut pancakes",
            "Resort boat transfer to Nadi or seaplane direct to NAN",
            "Last-minute shopping at the airport: Fiji Bitter beer packs, Fijian vanilla pods, local handcraft",
            "Departure from NAN — already planning the return trip",
          ],
          cost: "$200–350",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$600/day",
      days: [
        {
          day: "Day 1",
          title: "Private Seaplane Arrival & Overwater Bungalow Check-In",
          items: [
            "Arrive Nadi — met by resort representative, whisked through a private terminal to a waiting seaplane",
            "Scenic 15-minute seaplane over the Mamanuca Islands to Likuliku Lagoon Resort — Fiji's only authentic overwater bungalow resort, built above a pristine lagoon (from $1,200 USD/night)",
            "Alternatively: Six Senses Fiji (Malolo Island) — the ultimate eco-luxury resort with all-villa accommodation",
            "Check-in over kava and chilled towels on the overwater deck — your bure floats above a coral garden you can observe through the glass floor panel",
            "Afternoon: snorkel directly from your overwater deck — hawksbill turtles and white-tip reef sharks pass beneath regularly",
            "Champagne sunset from the private deck of your overwater bungalow",
            "Private candlelit dinner on your overwater terrace — chef prepares a Fijian-inspired 5-course menu with Pacific lobster and local vanilla desserts",
          ],
          cost: "$1,000–1,500",
        },
        {
          day: "Day 2",
          title: "Private Marine Biologist Reef Dive & Spa",
          items: [
            "Sunrise yoga on the overwater deck with the resort's resident yoga teacher",
            "Breakfast delivered to your bungalow — fresh juices, tropical fruits, eggs cooked to order",
            "Private marine biologist-guided scuba dive or freedive ($200pp private guide) — understand what you're seeing at a scientific level",
            "Soft coral survey of the resort's private reef — the marine biologist tracks coral health and you assist with data collection",
            "Lunch at the resort's overwater restaurant — Fiji's freshest sashimi and ceviche",
            "Three-hour Fijian wellness journey at the spa — bobo massage, coconut body scrub, volcanic hot stone treatment ($300)",
            "Sunset cocktails at the resort's bar and private chef multi-course dinner at the main pavilion",
          ],
          cost: "$800–1,200",
        },
        {
          day: "Day 3",
          title: "Private Island Picnic & Navala Village",
          items: [
            "Resort arranges private boat to an uninhabited sand cay — just you, a packed gourmet picnic, snorkel gear and the Pacific Ocean",
            "Spend the morning on a sand island that exists nowhere on a public map",
            "Return to resort for afternoon 4WD to Navala Village — private cultural tour with dedicated Fijian cultural ambassador",
            "Formal kava ceremony with the chief — given a Fijian name and clan (tabu) designation in a private ceremony",
            "Traditional Lovo feast prepared specifically for your group",
            "Return to resort; overwater sundowner, star-gazing on the deck — Fiji's remoteness gives extraordinarily clear night skies",
          ],
          cost: "$700–1,000",
        },
        {
          day: "Day 4",
          title: "Taveuni Rainbow Reef Private Charter + Beqa Sharks",
          items: [
            "Private seaplane charter to Taveuni — 'Fiji's Garden Island' and home of the Rainbow Reef",
            "Private dive charter with two expert dive guides — Great White Wall (a wall covered entirely in white soft coral at 18m) and Rainbow Passage",
            "Picnic lunch on the beach at Taveuni's Garden of Eden",
            "Return seaplane to Mamanuca; afternoon spa",
            "Option: Beqa Lagoon shark dive by private charter — the world's finest shark feeding experience in controlled conditions with conservation fees supporting local communities",
            "Private farewell dinner with resort's chef — 7-course Fijian degustation with paired Pacific wines",
          ],
          cost: "$900–1,300",
        },
        {
          day: "Day 5",
          title: "Final Overwater Morning & Departure",
          items: [
            "Final dawn swim from the overwater bungalow deck — first light over the Fijian lagoon is sublime",
            "Extended checkout — resort packs a gourmet picnic for your journey",
            "Seaplane back to Nadi NAN — window seat for one last aerial view of the islands",
            "Nadi airport private lounge (arranged by resort) — shower, champagne, comfortable seating before departure",
            "Depart Fiji with the memory of Bula still ringing and already planning the return",
          ],
          cost: "$600–900",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget (Yasawa Backpacker)",
      accommodation: "$40–70 (budget bure, meals semi-included)",
      food: "$15–25 (resort meals + village food)",
      transport: "$15–20 (Yasawa Flyer day costs)",
      activities: "$10–20 (village visits, kayak, snorkel gear)",
      total: "$100/day",
    },
    {
      tier: "Mid-Range (Mamanuca Resort)",
      accommodation: "$150–200 (3–4 star resort, some meals)",
      food: "$40–60 (resort à la carte + one special dinner)",
      transport: "$20–30 (resort transfers + day trips)",
      activities: "$30–60 (diving, cultural tour)",
      total: "$250/day",
    },
    {
      tier: "Luxury (Overwater Bungalow)",
      accommodation: "$400–800 (Likuliku, Six Senses)",
      food: "$100–200 (all-inclusive fine dining)",
      transport: "$80–200 (seaplane transfers, private boat)",
      activities: "$100–200 (private guides, spa, charter)",
      total: "$600+/day",
    },
    {
      tier: "Dive Focus",
      accommodation: "$80–150 (dive resort, Taveuni or Beqa)",
      food: "$30–50 (included or resort dining)",
      transport: "$20–40 (dive boat daily)",
      activities: "$80–150 (2-tank dives daily + PADI fees)",
      total: "$220–380/day",
    },
    {
      tier: "Honeymoon Package",
      accommodation: "$600–1,200 (overwater bungalow, all-inclusive)",
      food: "Included",
      transport: "$200 (seaplane from Nadi)",
      activities: "$200 (private excursions, spa)",
      total: "$800–1,500/day (2 people)",
    },
  ],

  mistakes: [
    {
      icon: "🌧️",
      title: "Visiting During Cyclone Season Without Travel Insurance",
      desc: "Fiji's wet season runs November to April, with cyclone risk peaking January–March. Cyclone Winston (2016) was the most powerful ever recorded in the Southern Hemisphere. If you visit in the wet season, comprehensive travel insurance covering weather disruption is non-negotiable. The dry season (May–October) offers settled weather and the best visibility for diving.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🚢",
      title: "Not Pre-Booking the Yasawa Flyer During Peak Season",
      desc: "The Yasawa Flyer is the only public ferry linking the Yasawa Islands — it operates once daily in each direction. During July–August and Christmas, the ferry is fully booked days or weeks in advance. Book your Yasawa Flyer pass at ssc.com.fj before leaving home. Missing your boat means being stranded on the wrong island with no alternative.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🌿",
      title: "Skipping the Kava Ceremony When Visiting a Village",
      desc: "In Fijian culture, arriving at a village without performing the sevusevu (kava offering ceremony) is genuinely offensive — equivalent to barging into someone's home uninvited. Always bring a bundle of dried kava root (available at Nadi market for $10–20 FJD) when visiting any traditional village. The ceremony itself is one of Fiji's most memorable experiences — embrace it fully.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🐠",
      title: "Only Staying in Nadi Without Going to the Islands",
      desc: "Nadi is a service town — it has the airport, hotels, and transport links, but it is not the real Fiji. The coral reefs, the traditional villages, the island pace and the jaw-dropping scenery are 30 minutes to 4 hours away by boat. Even if you only have one extra day, get on a boat to the Mamanucas — the difference between Nadi and the islands is the difference between the airport and the destination.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🤿",
      title: "Fiji 5-Day Itinerary 2026: Trip Planner",
      desc: "Many of Fiji's premier dive sites — including Beqa Lagoon shark dive and the Great White Wall at Taveuni — require an Open Water PADI certification minimum, with some shark dives requiring Advanced certification. The Beqa shark dive requires Advanced OW. Get certified before arrival. Fiji also offers excellent PADI courses if you want to qualify on location (allow 3–4 days).",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  tips: [
    {
      icon: "🏝️",
      title: "Fiji 5-Day Itinerary 2026: Trip Planner",
      desc: "The Yasawa Flyer offers multi-stop passes — the 8-day Bula Pass ($399 FJD) lets you hop between islands at will, spending as much time as you want on each. Combined with the budget resort network (which the Flyer connects directly), this is genuinely one of the world's great backpacker experiences. Plan loosely — the best islands are the ones you stay on longest.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌊",
      title: "Fiji 5-Day Itinerary 2026: Trip Planner",
      desc: "Reef snorkelling is significantly better at high tide when the water is deeper and clearer over the coral heads. Ask your resort staff for the day's tidal schedule (they know it by heart). Dawn snorkels (first 90 minutes of light) offer the most marine activity as nocturnal fish are still feeding and the water is at its calmest before any boat traffic begins.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "💊",
      title: "Bring All Your Medications and Reef-Safe Sunscreen",
      desc: "Island pharmacies have limited stock. Bring sufficient prescription medication, seasickness tablets (the Yasawa Flyer can be rough in the wet season), and reef-safe sunscreen (chemical sunscreens bleach coral — many Fijian resorts prohibit them and supply mineral alternatives). A first aid kit including antiseptic for reef cuts is strongly advised.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "📱",
      title: "Vodafone Fiji SIM Is $15 FJD and Works on Most Islands",
      desc: "A Vodafone Fiji prepaid SIM card with 5GB data costs $15 FJD from the airport. Coverage extends to most populated Yasawa and Mamanuca islands — though some remote Yasawas have no signal. Download maps.me offline maps for Fiji before you leave. WhatsApp is the communication standard between resorts and ferry operators — a working number is genuinely useful.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  faqs: [
    {
      q: "Do I need a visa to visit Fiji?",
      a: "Most passport holders including Indian, US, UK, Australian, Canadian, and EU citizens do not need a visa for Fiji. Entry is granted on arrival for up to 4 months — one of the most generous policies in the Pacific. You need a valid passport (6 months validity beyond arrival), a return or onward ticket, and evidence of sufficient funds. No pre-registration, no fees, just Bula at the airport.",
    },
    {
      q: "What is the best time of year to visit Fiji?",
      a: "The dry season (May to October) is universally recommended — lower humidity, minimal rain, water temperatures of 24–26°C, and excellent diving visibility (30m+). July and August are peak season with the highest prices and most visitors but also the best weather. The wet season (November to April) is cheaper, warmer (28°C+), but comes with risk of cyclones and reduced visibility for diving.",
    },
    {
      q: "What is the difference between the Yasawa Islands and the Mamanuca Islands?",
      a: "The Mamanuca Islands are closer to Nadi (30–90 minutes by boat), more developed, and home to the majority of mid-range and luxury resorts. They offer excellent beaches and reefs but a more resort-driven experience. The Yasawa Islands extend further north (2–5 hours by Yasawa Flyer), are far less developed, more authentically Fijian, and cater predominantly to budget travellers in traditional bure bungalows. Both offer world-class snorkelling — the choice is about atmosphere and budget.",
    },
    {
      q: "Is Fiji safe for solo travellers?",
      a: "Fiji is one of the safest countries in the Pacific for solo travellers. Fijians are genuinely, warmly hospitable — solo travellers frequently comment it's the friendliest country they've visited. The backpacker trail through the Yasawas is well-established with a strong community of fellow travellers. Standard precautions apply: don't leave valuables on beaches, be respectful of village customs and dress codes (cover shoulders and knees when visiting villages), and always anchor your bag on Nadi market days.",
    },
  ],

  combineWith: ["new-zealand-7-days", "australia-7-days", "samoa-4-days", "vanuatu-4-days"],
  relatedSlugs: ["new-zealand-7-days", "australia-7-days", "bali-7-days", "maldives-5-days"],
  galleryQuery: "fiji islands coral reef beach overwater bungalow village kava ceremony",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function FijiPage() {
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
