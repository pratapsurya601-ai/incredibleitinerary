import type { Metadata } from "next";
import UniversalBlogClient, {
  type UniversalBlogData,
} from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Tulum in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
  description:
    "Plan the perfect 4-day Tulum trip — Mayan ruins on the cliff, cenote swimming, Sian Ka'an, Cobá, and the best beach clubs. Budget from $70/day. Updated for 2026.",
  keywords: [
    "Tulum itinerary",
    "Tulum 4 days",
    "Tulum travel guide 2026",
    "Tulum ruins",
    "cenote Tulum",
    "Sian Ka'an biosphere",
    "Cobá pyramid",
    "Tulum beach hotels",
    "Mexico Caribbean travel",
    "North America travel guide",
  ],
  openGraph: {
    title: "Tulum in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
    description:
      "Mayan ruins on a cliff above a Caribbean beach, cenotes so clear you can see 30 metres, and a town that went from backpacker hideout to celebrity wellness retreat while keeping both identities. Your complete 4-day Tulum guide.",
    url: "https://incredibleitinerary.com/blog/tulum-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?tulum+ruins+caribbean+mayan",
        width: 1200,
        height: 630,
        alt: "Tulum Mayan ruins on cliff overlooking turquoise Caribbean sea Mexico",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulum in 4 Days: The Complete Guide (2026)",
    description:
      "Budget to luxury itineraries, cenote guide, visa info, and insider tips for Tulum. From $70/day.",
    images: [
      "https://source.unsplash.com/1200x630/?tulum+ruins+caribbean+mayan",
    ],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/tulum-4-days",
  },
};

/* ── JSON-LD Structured Data ──────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/tulum-4-days#article",
      headline:
        "Tulum in 4 Days: The Complete Guide (Budget to Luxury, 2026)",
      description:
        "A complete 4-day Tulum itinerary covering the Mayan cliff ruins, Gran Cenote, Dos Ojos, Sian Ka'an UNESCO reserve, Cobá pyramid, and the best beach clubs — for every budget from $70/day.",
      image:
        "https://source.unsplash.com/1200x630/?tulum+ruins+caribbean+mayan",
      datePublished: "2026-01-25",
      dateModified: "2026-04-05",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://incredibleitinerary.com",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: {
          "@type": "ImageObject",
          url: "https://incredibleitinerary.com/logo.png",
        },
      },
      mainEntityOfPage:
        "https://incredibleitinerary.com/blog/tulum-4-days",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://incredibleitinerary.com/blog/tulum-4-days#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tulum 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/tulum-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      "@id": "https://incredibleitinerary.com/blog/tulum-4-days#destination",
      name: "Tulum",
      description:
        "Mexico's most photogenic destination — the only Mayan ruins perched on a cliff above a Caribbean beach, an underground cenote system of crystalline water, and a UNESCO biosphere reserve of extraordinary biodiversity.",
      url: "https://incredibleitinerary.com/blog/tulum-4-days",
      touristType: [
        "Beach travelers",
        "Archaeology enthusiasts",
        "Adventure seekers",
        "Wellness travelers",
        "Divers and snorkelers",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.2114,
        longitude: -87.4654,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Mexico",
      },
    },
  ],
};

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Tulum",
  country: "Mexico",
  countryFlag: "🇲🇽",
  slug: "tulum-4-days",
  heroQuery: "tulum mexico ruins caribbean sea mayan ruins cenote",
  heroAlt:
    "Tulum Mayan ruins on cliff overlooking turquoise Caribbean sea Mexico",
  category: "North America",
  date: "January 25, 2026",
  readTime: "16 min read",
  intro:
    "The only Mayan ruins in the world perched on a cliff above a Caribbean beach; swimming in a cenote — a sacred limestone sinkhole — so clear you can see 30 metres in every direction; a beachfront restaurant where sand gets in your food in the best possible way; and a town that went from backpacker hideout to celebrity wellness retreat in a decade while somehow retaining both identities. Tulum is Mexico's most photogenic destination, and it earns every frame.",

  stats: {
    duration: "4 Days",
    budgetFrom: "$70",
    bestMonths: "Nov–Apr (dry season)",
    airport: "CUN (Cancún, 130km) or TQO (Tulum, small)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "cenotes", emoji: "💧", label: "Cenote Guide" },
    { id: "beach", emoji: "🏖️", label: "Beach & Hotel Zone" },
    { id: "day-trips", emoji: "🏛️", label: "Day Trips from Tulum" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required?", "No — visa-free for Indian passport holders (updated 2024 policy)"],
        ["Max Stay", "Up to 180 days per visit"],
        ["Entry Form", "FMM tourist card filled on arrival or online (free)"],
        ["Airport", "Fly into CUN (Cancún) — 130km from Tulum, 1.5–2 hrs by ADO bus ($12) or private transfer ($55–80)"],
        ["Alternative Airport", "TQO (Tulum Airport) opened 2024 — limited international flights; check direct routes from your origin city"],
        ["Currency", "Mexican Peso; USD widely accepted on the Hotel Zone beachfront"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required?", "No — visa-free for all Western passport holders"],
        ["Max Stay", "Up to 180 days; FMM on arrival (free)"],
        ["From Cancún", "ADO bus from CUN airport to Tulum Bus Station $12, 1.5–2 hrs; or shared shuttle $20–25; or private transfer $55–80"],
        ["Tulum Airport", "American, United, and Delta now fly direct to TQO from select US cities — check availability as routes expand"],
        ["Getting Around", "Tulum has 3 zones: Tulum Pueblo (town), Tulum Ruins, and Zona Hotelera (beach). Rent a bicycle ($8/day) or moped ($25/day) to link all three"],
        ["Best Season", "November–April; December–February is peak season (book 4–6 weeks ahead)"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget Plan",
      sub: "~$70/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Tulum Ruins at Dawn & Pueblo Tacos",
          items: [
            "Arrive from CUN airport by ADO bus ($12) to Tulum Pueblo (town centre) — ADO buses run every 30–60 minutes",
            "Check into a hostel in Tulum Pueblo ($15–22/dorm) — the Pueblo is 3km from the beach but far cheaper; most hostels have free or cheap bike rentals",
            "Set alarm: arrive at Tulum Ruins archaeological site at opening (8am) to beat the crowds and the heat — entry $5",
            "El Castillo (the main pyramid on the cliff), the Temple of the Descending God, and the Temple of the Frescoes — all within a 20-minute walk of each other above turquoise water",
            "You CAN swim at the Tulum ruins beach (Playa Ruinas) — descend the stairs after seeing the main structures",
            "Return to Pueblo by colectivo ($2) — lunch of tacos de cochinita pibil (Yucatecan slow-roasted pork) from a street stand, $1.50–2 each",
            "Afternoon: rent a bicycle and explore — cycle the Corridor road or head to Gran Cenote",
            "Evening: tacos and beers in the Pueblo ($8–12 total dinner)",
          ],
          cost: "$35–45 (bus from CUN $12, ruins $5, bicycle $8, meals $15)",
        },
        {
          day: "Day 2",
          title: "Gran Cenote + Dos Ojos Cenote System",
          items: [
            "Gran Cenote (3km from Pueblo on bicycle or $2 colectivo) — $15 entry; open-air cenote with stalactites, turtles, and extraordinary visibility. Arrive before 10am for the best light and fewest people",
            "Snorkel gear available to rent on site ($5) — mandatory to wear; the underwater stalactite formations are otherworldly",
            "Cenote Calavera (1km from Gran Cenote, $10) — the 'skull cenote' with three holes in the roof; you jump in through the eye sockets; more local crowd, very fun",
            "Or: Dos Ojos ('Two Eyes') cenote system ($18, 4km further) — two connected cenotes with cavern snorkeling; the bat cave passage is stunning",
            "Pack lunch from Pueblo before departure — cenote areas have expensive food stalls",
            "Afternoon beach visit on the Zona Hotelera — most beach clubs charge $15–25 minimum spend (which covers a drink and chair); or walk to the public beach access points which are free",
            "Sunset on the beach, dinner back in Pueblo ($8–12)",
          ],
          cost: "$40–55 (cenotes $25–33, beach club $15–20, meals $12, transport $5)",
        },
        {
          day: "Day 3",
          title: "Cobá Ruins — Climb the Pyramid",
          items: [
            "Colectivo from Tulum to Cobá ($4, 45 min) — or join a shared tour ($20–25 with transport)",
            "Cobá archaeological site ($5 entry) — a Classic Maya city hidden deep in the jungle; unlike Chichen Itza, you can still climb the 42m Nohoch Mul pyramid (bring shoes with grip — NOT flip flops)",
            "The view from the top: jungle canopy as far as you can see in every direction, with no other pyramid visible — the most dramatic Maya experience in the Yucatán",
            "Cobá is spread across 2km of jungle paths — rent a bicycle inside the site ($3) or hire a bicitaxi ($5 return) to cover all the structures",
            "Return to Tulum by early afternoon",
            "Afternoon: Akumal (45km north, colectivo $4) — snorkel with sea turtles in the bay; Akumal Bay has one of the most reliable sea turtle sightings in Mexico; snorkel gear rental $10",
            "Or rest day: hammock in your hostel, beach afternoon, early dinner",
          ],
          cost: "$30–42 (Cobá $9, transport $10, Akumal $14, meals $10)",
        },
        {
          day: "Day 4",
          title: "Sian Ka'an Biosphere or Playa del Carmen",
          items: [
            "Option A (nature): Shared boat tour into Sian Ka'an Biosphere Reserve ($35–45, departs from Tulum Hotel Zone) — UNESCO-listed reserve with mangrove channels, manatees, dolphins, crocodiles, and Mayan canals; extraordinary biodiversity in 2 hours on the water",
            "Option B (town): Colectivo to Playa del Carmen ($6, 1 hr) — the Quinta Avenida pedestrian strip, swimming at Mamita's beach (free beach, pay for chair $8), and the town's excellent taco scene",
            "Lunch: best fish tacos on the Yucatán Peninsula are at El Camello Jr. in Playa del Carmen, $3–4 each",
            "Return to Tulum by late afternoon",
            "Sunset ceremony: watch sunset from Tulum beach with a mezcal from a beach bar ($8–12)",
            "Pack, dinner in Pueblo, arrange transport to CUN airport for departure",
          ],
          cost: "$45–60 (Sian Ka'an or Playa transport+entry $45, meals $15)",
        },
      ],
    },
    {
      label: "Mid-Range Plan",
      sub: "~$160/day",
      days: [
        {
          day: "Day 1",
          title: "Sunrise Ruins + Boutique Hotel & Beach Afternoon",
          items: [
            "Private transfer from CUN airport to Tulum Zona Hotelera ($55–70) — arrive directly at your beach hotel",
            "Check in to a mid-range beach hotel or eco-lodge in the Zona Hotelera ($80–130/night) — options like Be Tulum, Mezzanine, or Papaya Playa Project have direct beach access and great design",
            "First afternoon: beach at your hotel — most mid-range hotels include beach chairs and loungers; order fresh ceviche and a michelada from the beach bar",
            "Early evening: walk or moped to Tulum Ruins (open until 5pm) or explore from outside the fence at sunset — the cliff-top silhouette at dusk is extraordinary",
            "Dinner at Hartwood ($40–60, open-air wood-fire kitchen, book ahead) — the restaurant that put Tulum on the world culinary map; all ingredients from local farms and fishermen",
          ],
          cost: "$130–160 (hotel, transfer $65, dinner $50, beach bar $25)",
        },
        {
          day: "Day 2",
          title: "Private Cenote Tour + Yoga & Beach Club",
          items: [
            "Book a private cenote tour ($60–80 for 2–3 cenotes with transport and guide) — includes Gran Cenote, Dos Ojos cavern system, and a smaller secret cenote not on the tourist trail",
            "Cavern snorkeling in Dos Ojos with guide: the bat cave passage and the Barbie Line (crystal-clear halocline where salt water and fresh water meet) are unmissable",
            "Back in hotel by early afternoon — beach club time or in-hotel spa treatment ($40–70 for massage)",
            "Afternoon yoga session on the beach: many Zona Hotelera hotels offer evening yoga classes or can connect you with a certified Tulum yoga guide ($15–25)",
            "Dinner at Gitano jungle restaurant ($35–50) — wood-fire mezcal cocktails and elevated Mexican in an open-air jungle space with mezcal ceremony at sunset",
          ],
          cost: "$150–180 (cenote tour $70, spa $55, dinner $45, drinks $30)",
        },
        {
          day: "Day 3",
          title: "Cobá & Akumal Sea Turtles",
          items: [
            "Private driver to Cobá ($50–60 for the vehicle, much more comfortable than colectivos) — depart 8am to beat tour groups",
            "Cobá ruins with licensed guide ($25–35 supplement) — pyramid climb + jungle stelae + the sacbé (ancient Mayan road) network",
            "Swimming stop at a private cenote en route (your driver can arrange) — $10–15 entry",
            "Akumal Bay in the afternoon — private snorkeling guide for sea turtle interaction ($25–35, highly recommended for ethical approach; avoids the crowds that harass turtles)",
            "Lunch at La Buena Vida in Akumal ($20–30) — beach bar with fresh fish and best views on the journey",
            "Return by late afternoon, sunset drinks at your hotel",
          ],
          cost: "$140–170 (driver $60, guide $30, Cobá $5, Akumal $30, lunch $25)",
        },
        {
          day: "Day 4",
          title: "Sian Ka'an Boat Tour, Temazcal & Farewell Dinner",
          items: [
            "Sian Ka'an morning boat tour ($50–70, small group) — UNESCO biosphere, Mayan canal system, lagoon snorkeling for tropical fish, watch for manatees and dolphins",
            "Afternoon: temazcal ceremony ($40–60/person at most Zona Hotelera wellness hotels) — a traditional Mayan sweat lodge ritual with a shaman; herbs, steam, chanting; surprisingly moving",
            "Post-temazcal swim in the Caribbean — the ritual ends with an ocean plunge",
            "Farewell dinner at Posada Margherita ($35–50) — Italian-owned beachfront restaurant, handmade pasta and fresh catch; the most romantic dinner setting in Tulum",
            "Night transfer to CUN for early morning departure (shared shuttle $25, or private $70)",
          ],
          cost: "$150–180 (Sian Ka'an $60, temazcal $55, dinner $45, transfer $40)",
        },
      ],
    },
    {
      label: "Luxury Plan",
      sub: "~$450/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at Azulik, Ruins at Dawn & Fire Dinner",
          items: [
            "Private luxury transfer from CUN airport in an SUV ($80–120) — concierge meets you at baggage claim",
            "Check in to Azulik Resort or Papaya Playa Project ($350–600/night) — Azulik's treehouse-style cabañas sit 10m above the beach; no electricity, no Wi-Fi, no mirrors — extraordinarily intentional design",
            "Tulum Ruins private early-morning access (arrange through hotel concierge, ~$150 for group with archaeologist guide) — 7am entry before public opening, sunrise over the Caribbean from El Castillo is one of Mexico's great travel moments",
            "Post-ruins breakfast served in your cabaña by the sea",
            "Afternoon wellness: Azulik's spa integrates Mayan healing rituals, crystal therapy, and cenote bathing within the resort ($120–180/session)",
            "Dinner at Arca ($80–120, book 2–3 weeks ahead) — open-fire, wood-coals cooking in an open-air jungle space; the best restaurant in Tulum and among the top in Mexico",
          ],
          cost: "$550–700 (resort, transfer $100, private ruins $150, spa $150, dinner $100)",
        },
        {
          day: "Day 2",
          title: "Private Cenote Expedition + Helicopter Day Trip",
          items: [
            "Private cenote expedition with a certified cave diver guide ($120–150/person) — access off-limits sections of the Dos Ojos system; open-water snorkelers can also do this route with guide supervision",
            "Secret jungle cenote accessible only by private vehicle + 20-min walk — no other tourists, swim in emerald water surrounded by tree roots and tropical birds",
            "Helicopter scenic flight over the Yucatán ($350–500 for 30–45 min) — see Tulum Ruins from the air, the blue Sian Ka'an lagoons, and the jungle canopy stretching to the horizon",
            "Afternoon: private yoga session on your beach or in a jungle pavilion ($60–80 for private instruction)",
            "Sunset: mezcal ceremony at Gitano or a private beach fire arranged by your hotel ($50–100 setup)",
            "Dinner at Nomade ($90–130, book ahead) — tasting menu with bio-dynamic wines, candle-lit, the hotel's beachfront restaurant; the Tulum experience perfected",
          ],
          cost: "$700–900 (guide $140, helicopter $400, yoga $70, dinner $120)",
        },
        {
          day: "Day 3",
          title: "Sian Ka'an Private Expedition & Cobá at Sunset",
          items: [
            "Private boat charter into Sian Ka'an Biosphere ($200–280 for the day, 4–6 pax) — your own guide and boat, access deeper into the reserve than shared tours, fishing optional, manatee and dolphin encounters more likely",
            "Lunch prepared on the boat by your guide — fresh fish and ceviche from the morning's catch",
            "Private vehicle to Cobá for late afternoon ($80 round-trip) — arrive at 3pm when most tour groups have left; climb Nohoch Mul pyramid in the golden hour light",
            "Private Cobá guide ($40) — explains the Classic Maya astronomy, trade routes, and history of this once-city of 50,000 people",
            "Return to hotel by 7pm",
            "Temazcal ceremony at your resort ($80–120) — Azulik's version uses ancestral Mayan ritual with local shaman; couples or private group settings available",
          ],
          cost: "$500–620 (boat $240, vehicle+Cobá $120, temazcal $100, lunch $60)",
        },
        {
          day: "Day 4",
          title: "Bacalar Day Trip & Farewell Feast",
          items: [
            "Private driver to Bacalar (2 hrs south, $180–220 round-trip) — the 'Lake of Seven Colours'; impossible turquoise gradients in a freshwater lagoon that appears to glow",
            "Private sailboat or kayak on Bacalar Lake ($80–100, arranged by driver) — sail into the cenote within the lake, swim at the 'Pirate Channel' and the stromatolite formations",
            "Lunch at Mango y Chile in Bacalar town ($25–35) — seafood by the lake",
            "Return to Tulum by late afternoon",
            "Final beach afternoon at resort — last swim, last stretch of Caribbean sand",
            "Farewell dinner: chef's table experience at your hotel ($150–200/person, pre-arrange) — private seating, curated menu, wine pairing; many Tulum luxury hotels offer this experience with 48hrs notice",
            "Private transfer to CUN for international departure",
          ],
          cost: "$600–750 (Bacalar driver $200, boat $90, farewell dinner $200, transfer $120)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–22 (hostel dorm in Pueblo)",
      food: "$18–25 (tacos, comedores, market meals)",
      transport: "$10–15 (colectivos, bike rental)",
      activities: "$20–30 (ruins, cenotes, colectivo tours)",
      total: "$70/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–130 (eco-lodge / beach hotel)",
      food: "$45–65 (mix of beach clubs and restaurants)",
      transport: "$20–35 (private driver days, transfers)",
      activities: "$30–50 (private cenote, Sian Ka'an tour)",
      total: "$160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–600 (Azulik, Papaya Playa)",
      food: "$100–180 (Arca, Nomade, Hartwood)",
      transport: "$80–140 (private SUV transfers)",
      activities: "$120–200 (private guides, helicopter, temazcal)",
      total: "$450/day",
    },
  ],

  mistakes: [
    {
      icon: "☀️",
      title: "Visiting Tulum Ruins at midday",
      desc: "The ruins are entirely exposed to the Caribbean sun and get extremely hot after 10am. Go at opening (8am) — you beat the heat, the tour groups, and you get the magical morning light on El Castillo over the water. Midday visits in high season involve 40°C heat and hundred-person queues for the cliff viewpoint.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🧴",
      title: "Wearing sunscreen in cenotes",
      desc: "Chemical sunscreen is prohibited in cenotes and all protected water bodies in the Yucatán — it kills the delicate ecosystem. Buy reef-safe (mineral/zinc) sunscreen before arriving, or simply don't apply sunscreen for 2 hours before swimming in a cenote. Cenote wardens check and will turn you away.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏨",
      title: "Booking a beach hotel without reading the small print",
      desc: "Some Tulum Zona Hotelera hotels have mandatory minimum stays (5–7 nights), mandatory meal plans, or 'wellness retreat' packages at checkout. Read the full booking terms. Also: the road to the Zona Hotelera floods in rainy season — confirm your hotel's storm policy if visiting June–October.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💵",
      title: "Not bringing enough cash",
      desc: "The Tulum Zona Hotelera and many cenotes are cash-only or have unreliable card machines. Withdraw pesos in Cancún or Playa del Carmen where ATMs have better rates and reliability. Tulum Pueblo ATMs often run out of cash on weekends in high season. Bring $100–150 in pesos per person per day.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🐢",
      title: "Snorkeling with sea turtles without a guide at Akumal",
      desc: "Akumal Bay has been severely impacted by tourists who chase, touch, and block the path of sea turtles. Since 2019, a warden controls entry to the bay and requires snorkelers to use a licensed guide ($25–35) who enforces ethical distance rules. Going without a guide means you damage the ecosystem and get escorted out.",
      color: "bg-green-50 border-green-200",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "Cobá's pyramid is still climbable — go before it isn't",
      desc: "Chichen Itza and Teotihuacan both banned pyramid climbing years ago. Cobá's Nohoch Mul pyramid (42m) is still open to climbers as of 2026. This may change — it is one of the genuinely unique physical experiences left in Mayan archaeology. Wear trainers with grip. It is steep. It is worth every step.",
      color: "bg-gold/10 border-gold/30",
    },
    {
      icon: "🚲",
      title: "Rent a bicycle or moped — Tulum is built for it",
      desc: "The 3 zones of Tulum (Pueblo, Ruins, Zona Hotelera) sit along a 12km corridor. A bicycle ($8/day) or moped ($25/day) unlocks the whole thing without Uber surcharges or colectivo schedules. Rent from Pueblo hostels or Zona Hotelera shops; always secure the moped with the provided chain.",
      color: "bg-teal/10 border-teal/30",
    },
    {
      icon: "💧",
      title: "Visit Gran Cenote at 8am on a weekday",
      desc: "Gran Cenote receives 500+ visitors on busy days. The first hour after opening (8–9am on weekdays) has under 30 people. The light shafts through the open dome section are most dramatic in morning sun. The stalactites, turtles, and crystal-clear water feel private — by 11am it feels like a public pool.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🛥️",
      title: "Bacalar is worth the 2-hour detour south",
      desc: "The 'Lake of Seven Colours' near the Belize border is one of Mexico's most underrated destinations. A full-day trip from Tulum ($180–220 private driver return) lets you sail on a boat through surreal turquoise gradients. Fewer tourists than Tulum and genuinely otherworldly. Book a return journey.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  faqs: [
    {
      q: "What is the best way to get from Cancún airport to Tulum?",
      a: "The cheapest option is the ADO bus from CUN airport directly to Tulum Bus Station — $12, 1.5–2 hours, very comfortable, runs every 30–60 minutes. A private transfer costs $55–80 and is worth it if you have heavy luggage or arrive late at night. Shared shuttles ($20–25) are a middle option. Uber does not reliably serve the Cancún–Tulum route; stick to ADO or private transfers.",
    },
    {
      q: "Are the Tulum Ruins worth visiting?",
      a: "Yes — absolutely. They are not the largest or most impressive Maya ruins architecturally, but they have a setting that no other archaeological site in the world can match: El Castillo pyramid on a cliff 12 metres above a turquoise Caribbean bay. Go at 8am opening, walk to the cliff viewpoint first, then explore the temples, and finish with a swim at the Playa Ruinas beach below. Two hours is enough; don't rush. Entry is $5.",
    },
    {
      q: "Which cenote is the best in Tulum?",
      a: "For first-timers: Gran Cenote — the most accessible, most scenic, and open-air sections make it the easiest for non-divers and non-swimmers. For adventure: Dos Ojos — the cavern snorkeling through the stalactite passages is extraordinary. For something different: Cenote Calavera (the 'skull cenote') — you jump in through holes in the roof, local favourite, very fun. For serious divers: the entire Dos Ojos–Sac Actun system is the world's longest underwater cave — book a certified cave dive.",
    },
    {
      q: "Is Tulum safe for tourists in 2026?",
      a: "The tourist areas of Tulum — the ruins, the Zona Hotelera beach road, the Pueblo town centre, and all the cenotes — are safe. Exercise normal precautions: don't flash expensive items, use hotel safes, avoid walking the Zona Hotelera road alone late at night (it is unlit and has no footpath), and use Uber or your hotel's taxi contact rather than unmarked cabs. The cartels that affect other parts of the Yucatán do not target tourist zones in Tulum.",
    },
  ],

  combineWith: ["mexico-city-4-days", "oaxaca-4-days", "merida-4-days"],
  relatedSlugs: [
    "oaxaca-4-days",
    "mexico-city-4-days",
    "cancun-4-days",
    "merida-4-days",
  ],
  galleryQuery: "tulum ruins caribbean cenote beach mexico turquoise",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function TulumPage() {
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
