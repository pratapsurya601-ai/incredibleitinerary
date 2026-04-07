import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Madagascar 7-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Madagascar trip in 7 days. Plan the perfect 7-day Madagascar trip. Avenue of the Baobabs, Andasibe lemurs, Tsingy de Bemaraha, Nosy Be beaches —.",
  keywords: [
    "Madagascar travel guide",
    "Madagascar 7 days itinerary",
    "Avenue of the Baobabs",
    "ring-tailed lemurs Madagascar",
    "Andasibe-Mantadia National Park",
    "Tsingy de Bemaraha UNESCO",
    "Ranomafana National Park",
    "Madagascar budget travel",
    "Madagascar visa Indian passport",
    "Nosy Be Madagascar",
  ],
  openGraph: {
    title: "Madagascar 7-Day Itinerary 2026: Trip Planner",
    description:
      "90% of Madagascar's wildlife exists nowhere else on Earth. Our complete 7-day guide covers lemurs, baobabs, tsingy, and beaches — budget to luxury.",
    url: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Madagascar Avenue of the Baobabs ancient trees at sunset unique Africa",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madagascar 7-Day Itinerary 2026: Trip Planner",
    description:
      "Lemurs, baobabs, tsingy, and pristine beaches — your complete 7-day Madagascar itinerary from $80/day.",
    images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Madagascar in 7 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A complete 7-day Madagascar travel guide covering the Avenue of the Baobabs, lemur parks, Tsingy de Bemaraha, Nosy Be, and full itineraries for every budget.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Madagascar 7-Day Guide",
          item: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Madagascar",
      description:
        "The world's most biodiverse island per square kilometre, where 90% of wildlife exists nowhere else — ring-tailed lemurs, panther chameleons, baobab trees, and tsingy limestone karst.",
      url: "https://www.incredibleitinerary.com/blog/madagascar-7-days",
      touristType: ["Wildlife Traveller", "Adventure Traveller", "Nature Photographer"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -18.7669,
        longitude: 46.8691,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Madagascar",
      },
    },
  ],
};

/* ── Page Data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Madagascar",
  country: "Madagascar",
  countryFlag: "🇲🇬",
  slug: "madagascar-7-days",
  heroQuery: "madagascar baobab avenue lemur national park africa unique",
  heroAlt: "Madagascar Avenue of the Baobabs ancient trees at sunset unique Africa",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro:
    "The most biodiverse island per square kilometre on Earth, where 90% of wildlife exists nowhere else: ring-tailed lemurs dancing in the spiny forest, panther chameleons the size of a forearm changing colour from brown to neon green in seconds, the Avenue of the Baobabs where 800-year-old trees stand like something from a children's illustration against a sunset sky, and fossils of the elephant bird — the largest bird that ever lived, three metres tall — in a museum in Tana. Madagascar is evolution's experiment on its own.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$80",
    bestMonths: "Apr–Nov (dry season)",
    airport: "TNR (Ivato, Antananarivo)",
  },

  toc: [
    { id: "visa",        emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "highlights",  emoji: "🗺️", label: "Top Highlights" },
    { id: "getting-around", emoji: "🚌", label: "Getting Around" },
    { id: "book",        emoji: "🎟️", label: "Book Tours & Activities" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Type", "e-Visa (online) or Visa on Arrival"],
        ["Fee", "$35 USD"],
        ["Duration", "30 days (extendable)"],
        ["Apply", "madagascar-evisa.com or on arrival at TNR"],
        ["Processing", "3–5 days online; immediate on arrival"],
        ["Note", "Straightforward process; no sponsor letter needed"],
      ],
    },
    {
      flag: "🌍",
      title: "US / UK / EU / AU Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Type", "Visa on Arrival or e-Visa"],
        ["Fee", "$35 USD"],
        ["Duration", "30 days (extendable to 90 days)"],
        ["Apply", "On arrival at TNR, NOB, MJN airports or online"],
        ["Processing", "Immediate on arrival"],
        ["Note", "Bring USD cash for on-arrival payment; USD preferred"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$80/day",
      days: [
        {
          day: "Day 1",
          title: "Antananarivo Arrival & Orientation",
          items: [
            "Fly into TNR Ivato airport; take a shared taxi-brousse to city centre (~$2)",
            "Check into a budget guesthouse in Haute-Ville (from $15/night)",
            "Walk the steep streets of Haute-Ville; visit the colourful Zoma Friday market stalls",
            "Street food dinner: romazava stew and rice at a hotelys (local canteen) for $3",
            "Visit Queen's Palace (Rova) ruins on the hilltop — free from outside at sunset",
          ],
          cost: "$40 (accommodation $15, food $10, transport $5, entrance $10)",
        },
        {
          day: "Day 2",
          title: "Antananarivo → Andasibe (3 hrs) — Indri Lemurs",
          items: [
            "Early morning taxi-brousse east to Andasibe ($4); arrive by 9am",
            "Enter Andasibe-Mantadia National Park with a local guide ($20 guide fee + $10 entry)",
            "Hear and find the indri lemur — largest living lemur, call sounds like a whale song, carries through the forest for 3km",
            "Spot brown lemurs, chameleons, and leaf-tail geckos on a 3-hour guided walk",
            "Budget guesthouse in Andasibe village from $18/night",
          ],
          cost: "$60 (transport $4, guide+park $30, accommodation $18, food $8)",
        },
        {
          day: "Day 3",
          title: "Andasibe Full Day — Night Walk & Orchid Reserve",
          items: [
            "Morning walk in Mitsinjo Community Reserve (cheaper than the national park, $8 entry, great chameleons)",
            "Visit the private IUCN orchid reserve — over 50 species of endemic orchid",
            "Afternoon rest; buy street snacks from roadside stalls",
            "Evening guided night walk in Andasibe ($10) — find mouse lemurs, woolly lemurs, and tenrecs by torch",
            "Dinner: rice, zebu meat, and greens for $5 at guesthouse kitchen",
          ],
          cost: "$50 (reserves $18, night walk $10, food $10, accommodation $18 shared)",
        },
        {
          day: "Day 4",
          title: "Fly/Drive to Morondava — Baobab Alley",
          items: [
            "Morning taxi-brousse or shared ride back to Tana ($4); catch afternoon domestic flight to Morondava with Air Madagascar (~$60 one-way budget fare)",
            "Check into budget auberge in Morondava ($20/night)",
            "Afternoon: rent a bicycle or shared taxi ($5) to the Avenue of the Baobabs — 25 giant Adansonia grandidieri trees",
            "Stay for golden-hour sunset — the most photographed sight in Madagascar",
            "Dinner at Chez Maggie beach shack: grilled fish and coconut rice ($7)",
          ],
          cost: "$100 (flight $60, accommodation $20, bike $5, food $15)",
        },
        {
          day: "Day 5",
          title: "Morondava — Kirindy Forest Reserve (Fossa!)",
          items: [
            "Dawn drive 60km north to Kirindy Forest Reserve (entry $10, guide $15)",
            "Track the fossa — Madagascar's apex predator, looks like a cat-mongoose hybrid, found nowhere else on Earth",
            "See giant jumping rats, banded mongooses, and 7 species of lemur in a single morning",
            "Return to Morondava; afternoon at Avenue des Baobabs for different light",
            "Watch local pirogue fishermen on the Mozambique Channel beach at sunset",
          ],
          cost: "$65 (transport $15, Kirindy $25, food $10, accommodation $15)",
        },
        {
          day: "Day 6",
          title: "Fly to Nosy Be — Tropical Island Day",
          items: [
            "Domestic flight Morondava→Nosy Be via Tana (~$80 budget fare); check into budget bungalow in Ambatoloaka ($25/night)",
            "Afternoon snorkelling off Nosy Tanikely marine reserve ($15 boat + entry) — sea turtles guaranteed",
            "Ylang-ylang and vanilla plantation walk — Nosy Be is called the 'perfume island'",
            "Sunset at La Terrasse bar with Trois Chevaux (local beer, $1.50) watching the harbour",
            "Dinner: fresh prawns and zebu brochettes at beachside grill ($12)",
          ],
          cost: "$85 (flight $80, bungalow $25, boat $15, food $20) — adjust if sharing costs",
        },
        {
          day: "Day 7",
          title: "Nosy Be & Departure",
          items: [
            "Morning boat trip to Nosy Komba — 'lemur island' where black lemurs eat from your hand ($20 day trip)",
            "Snorkel Nosy Sakatia for whale sharks (seasonal, Jul–Sep) or coral gardens",
            "Afternoon: souvenir shopping for vanilla pods, ylang-ylang oil, and handwoven raffia baskets",
            "Evening flight back to Tana for international connection, or overnight in Nosy Be",
            "Pack genuine vanilla: Madagascar produces 80% of world supply — cheapest here",
          ],
          cost: "$70 (boat trip $20, food $15, souvenirs $20, transfer $15)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$160/day",
      days: [
        {
          day: "Day 1",
          title: "Antananarivo — Rova, Museums & Arrival",
          items: [
            "Private airport transfer to a 3-star hotel in Tana centre ($55–70/night)",
            "Visit the Queen's Palace (Rova d'Ambohimanga) UNESCO World Heritage hilltop palace ($8 entry)",
            "Explore the Musée de la Paléontologie — elephant bird fossils, giant lemur skulls from the Pleistocene",
            "Lunch at Chez Mariette: authentic Malagasy cuisine in a colonial villa setting (~$18)",
            "Evening at La Varangue restaurant, Tana's best — zebu tenderloin and local rum sours ($35 dinner)",
          ],
          cost: "$130 (hotel $65, meals $55, transport $10)",
        },
        {
          day: "Day 2",
          title: "Andasibe-Mantadia National Park",
          items: [
            "Private car hire to Andasibe (3 hrs, $45); comfortable mid-range lodge from $55/night",
            "Full-day guided walk in Mantadia (larger, quieter section of the park — $25 entry + $30 guide)",
            "Indri, diademed sifaka, and black-and-white ruffed lemur all in one day if lucky",
            "Afternoon: Vakôna Forest Lodge private lemur island — walk-in lemur encounter included",
            "Night walk with specialist guide: mouse lemurs, chameleons sleeping on leaves ($20)",
          ],
          cost: "$185 (transport $45, lodge $55, park fees $55, meals $30)",
        },
        {
          day: "Day 3",
          title: "Ranomafana National Park (5 hrs south of Tana)",
          items: [
            "Private car south to Ranomafana ($60 car hire, 5 hrs from Andasibe via Fianarantsoa direction)",
            "Enter Ranomafana ($12 entry + $35 specialist guide) — golden bamboo lemur discovered here in 1986",
            "Trek the eastern rainforest: red-fronted brown lemur, greater bamboo lemur (critically endangered)",
            "Hot spring thermal pools just outside the park — soak your legs after the trek ($3)",
            "Comfortable guesthouse in Ranomafana village ($45/night)",
          ],
          cost: "$175 (transport $60, park $47, guesthouse $45, meals $23)",
        },
        {
          day: "Day 4",
          title: "Isalo National Park — Sandstone Canyons",
          items: [
            "Drive west to Isalo (3 hrs from Ranomafana) through the Hauts Plateaux",
            "Full-day Isalo trek: natural swimming pools (Piscine Naturelle Bleue and Noire), waterfall, canyon slot",
            "Ring-tailed lemurs sunbathing on sandstone rocks at the trailhead",
            "Sunset from the rock arch at Isalo Massif — vertiginous sandstone landscape at golden hour",
            "Mid-range lodge in Ranohira from $60/night; lodge pool for cooling off",
          ],
          cost: "$165 (transport $40, park $30 + guide $40, lodge $60, meals $25) — transport varies",
        },
        {
          day: "Day 5",
          title: "Fly Tana → Nosy Be — Island Luxury",
          items: [
            "Drive back to Tana or Toliara for domestic flight to Nosy Be ($90–110)",
            "Mid-range bungalow resort in Hell-Ville or Madirokely ($80/night, pool, breakfast)",
            "Afternoon at Ambatoloaka beach — the island's most social beach, good snorkelling off the rocks",
            "Ylang-ylang distillery tour ($10) — see how the perfume extract is made in copper pot stills",
            "Seafood dinner at La Plantation: octopus salad, grilled lobster, homemade rum ($40)",
          ],
          cost: "$260 (flight $100, resort $80, activities $30, meals $50)",
        },
        {
          day: "Day 6",
          title: "Nosy Be — Nosy Komba, Snorkelling & Marine Park",
          items: [
            "Catamaran day trip to Nosy Tanikely marine reserve and Nosy Komba ($45 all-in): snorkel with sea turtles, swim in turquoise water",
            "Black lemurs on Nosy Komba — semifree-ranging, sit on your shoulder for photos",
            "Afternoon: stand-up paddleboarding or kayaking from the resort ($15 hire)",
            "Sundowner cruise back watching the sunset over Nosy Sakatia",
            "Night: local Afrobeats music at a beach bar; fresh tuna ceviche ($8)",
          ],
          cost: "$145 (day trip $45, watersports $15, resort $80, food + evening $30) — multi-use day",
        },
        {
          day: "Day 7",
          title: "Nosy Be Finale & Departure",
          items: [
            "Final morning snorkel or paddleboard; fresh tropical fruit breakfast at the resort",
            "Souvenir market: buy genuine bourbon vanilla pods (1kg for $25 at source vs $80+ abroad)",
            "Purchase ylang-ylang and patchouli essential oils directly from producers",
            "Afternoon flight to Tana; connect to international flight",
            "Airport: pick up Malagasy silk and hand-painted zebu leather goods in the departure hall",
          ],
          cost: "$130 (resort $80, souvenirs $30, transport $20)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$380/day",
      days: [
        {
          day: "Day 1",
          title: "Antananarivo — Private City Experience",
          items: [
            "Private luxury airport transfer to Palissandre Côte Ouest or Hôtel Colbert (5-star, from $180/night)",
            "Private guided Tana tour: Queen's Palace, Musée de la Paléontologie, Zoma artisan market",
            "Curated Malagasy fine dining lunch at Chez Billy — foie gras, zebu fillet, and homemade rum infusions",
            "Sunset cocktails at the Colbert rooftop bar overlooking Tana's 1,000-staircase cityscape",
            "Private cooking class: learn to make ravitoto (cassava leaf stew) and mofo baolina (fritters)",
          ],
          cost: "$380 (hotel $180, private guide $80, meals $80, transport $40)",
        },
        {
          day: "Day 2",
          title: "Andasibe — Private Luxury Lemur Lodge",
          items: [
            "Private vehicle to Andasibe (3 hrs) with expert naturalist guide",
            "Stay at Vakôna Forest Lodge or Andasibe Hotel ($150/night, pool, rainforest setting)",
            "Exclusive private guided walk in Mantadia — maximum 4 guests with specialist lemur researcher",
            "Dedicated indri tracking: spend 2–3 hours observing an indri family from close range",
            "Private night walk with thermal imaging scope — find aye-aye if in season (Oct–Dec)",
          ],
          cost: "$480 (vehicle $80, lodge $150, private guide $120, meals $80, activities $50)",
        },
        {
          day: "Day 3",
          title: "Ranomafana — Research Station Access",
          items: [
            "Private car south to Ranomafana; stay at Centre ValBio guesthouse ($100) near the research station",
            "Join a researcher-led trek ($80 premium guide) to find the golden bamboo lemur — the rarest large lemur",
            "Exclusive access to the conservation research station — learn about camera trap data and lemur population monitoring",
            "Soak in the natural hot springs at sunset; private dinner at the lodge with local wine",
            "Stargazing from the plateau: Madagascar has almost no light pollution in the south",
          ],
          cost: "$420 (vehicle $70, lodge $100, research guide $80, meals $70, hot springs $10, other $90)",
        },
        {
          day: "Day 4",
          title: "Isalo — Luxury Canyon Lodge",
          items: [
            "Private transfer to Isalo; stay at Isalo Rock Lodge (infinity pool carved into sandstone, from $250/night)",
            "Sunrise helicopter flight over the Isalo massif — book in advance, $200/person for 30 min",
            "Private canyon walk to the sacred Bara tomb carvings and rock paintings",
            "Afternoon: lounge at the lodge's natural rock infinity pool; spa treatment with local baobab oil",
            "Sundowner on the massif with private picnic setup by the lodge",
          ],
          cost: "$600 (lodge $250, helicopter $200, private guide $60, meals $90)",
        },
        {
          day: "Day 5",
          title: "Private Charter to Nosy Be",
          items: [
            "Private charter flight or first-class Air Madagascar to Nosy Be",
            "Transfer to Constance Tsarabanjina or Miavana by Time + Tide (ultra-luxury private island, $1,000+/night) or Anjajavy Private Reserve ($300/night)",
            "Private snorkelling guide to the house reef — whale sharks, manta rays, hawksbill turtles",
            "Champagne sunset on the private beach; fresh-caught Malagasy lobster dinner",
            "Marine biologist evening briefing on Indian Ocean conservation",
          ],
          cost: "$700 (flight $150, lodge $350–1000, activities $100, meals $100) — varies by lodge",
        },
        {
          day: "Day 6",
          title: "Private Islands & Catamaran Day",
          items: [
            "Private catamaran charter (full day, $300–450) to Nosy Iranja — twin islands joined by a sandbar at low tide",
            "Private guide to Nosy Komba for exclusive lemur encounter away from tour groups",
            "Underwater photography session with resort dive master: coral restoration project",
            "Luxury beach picnic on a deserted sand spit with freshly grilled crayfish and tropical fruits",
            "Return at sunset with sundowner cocktails and live traditional guitar music on deck",
          ],
          cost: "$550 (catamaran $350, guide $50, lodge $350 included in stay, extras $80)",
        },
        {
          day: "Day 7",
          title: "Farewell & Vanilla Estate",
          items: [
            "Chartered boat to SAVA vanilla region day trip or private tour of a premium vanilla estate near Nosy Be",
            "Hand-pollinate vanilla orchids with the estate owner — each flower is open for 12 hours only",
            "Custom vanilla paste and pure extract blending: take home 1kg of premium grade-A vanilla pods",
            "Private farewell spa lunch at the resort; signature massage with local frangipani oil",
            "VIP lounge at Nosy Be airport; private transfer to international connection in Tana",
          ],
          cost: "$500 (vanilla estate $100, lodge $350, spa $80, transport $70) — excluding flight",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–25 (guesthouse/auberge)",
      food: "$8–15 (hotelys & street food)",
      transport: "$10–20 (taxi-brousse/shared)",
      activities: "$20–35 (park fees + guide)",
      total: "$80–95/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$50–80 (3-star lodge/bungalow)",
      food: "$25–40 (restaurant meals)",
      transport: "$30–60 (private car hire)",
      activities: "$40–60 (guided tours)",
      total: "$145–240/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$150–400 (5-star lodge/private island)",
      food: "$70–120 (fine dining)",
      transport: "$60–200 (private vehicle + charter)",
      activities: "$80–200 (private guides + experiences)",
      total: "$360–920/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "$8–12 (dorm)",
      food: "$5–8 (market food only)",
      transport: "$5–10 (taxi-brousse only)",
      activities: "$10–20 (community reserves)",
      total: "$50–65/day",
    },
    {
      tier: "🏝️ Island Focus",
      accommodation: "$25–80 (Nosy Be bungalow)",
      food: "$15–35 (beach restaurants)",
      transport: "$15–40 (boat trips)",
      activities: "$20–50 (snorkelling/diving)",
      total: "$75–205/day",
    },
  ],

  mistakes: [
    {
      icon: "🚌",
      title: "Underestimating Travel Times",
      desc: "Madagascar's roads are some of the world's worst. The 600km from Tana to Morondava takes 14–18 hours by road. Always fly domestically where possible ($60–120 one-way). Budget taxi-brousse for short legs only.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "💊",
      title: "Skipping Malaria Prophylaxis",
      desc: "Malaria is present year-round, especially on the coast and in Nosy Be. Start your prophylaxis (doxycycline or Malarone) before departure. Also get hepatitis A+B and typhoid vaccinations. Bring DEET spray.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "📅",
      title: "Visiting During Cyclone Season (Dec–Mar)",
      desc: "The wet season brings tropical cyclones, flooded roads, and closed parks. April–November is the dry season and ideal. If you must go Dec–Mar, stick to Tana and the central plateau and avoid the coast.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "💵",
      title: "Not Bringing Enough US Dollar Cash",
      desc: "ATMs in Madagascar are unreliable and often out of cash outside Tana. Bring USD cash (small denominations) and exchange at banks in Tana on arrival. Cards are only accepted in a few upscale hotels.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🗺️",
      title: "Madagascar 7-Day Itinerary 2026: Trip Planner",
      desc: "Madagascar is the size of France. You cannot see baobabs (west), tsingy (northwest), tsingy (far northwest), rainforest (east), and Nosy Be (northwest) in 7 days overland. Pick 2–3 regions and fly between them.",
      color: "border-yellow-200 bg-yellow-50",
    },
  ],

  tips: [
    {
      icon: "🌿",
      title: "Hire a Local Guide — Always",
      desc: "Park guides are mandatory but the best guides go far beyond the minimum. Tip generously ($10–20 extra). A good guide finds species in 30 minutes that you'd spend all day missing. Ask for a specialist naturalist, not a general guide.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🍦",
      title: "Vanilla: Buy at Source",
      desc: "Madagascar produces 80% of the world's vanilla. At Nosy Be or in the SAVA region, Grade A vanilla pods cost $20–30/kg. The same quantity sells for $150+ in Western supermarkets. Bring a vacuum-seal bag.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "📸",
      title: "Avenue of the Baobabs: Go at Sunset AND Sunrise",
      desc: "Sunset is crowded but spectacular. Sunrise has fewer people and the trees glow gold from the east. Stay overnight in Morondava and catch both. The full moon rising behind the baobabs is extraordinary.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🦎",
      title: "Learn a Few Words of Malagasy",
      desc: "Malagasy people are extraordinarily warm. 'Misaotra' (thank you), 'Salama' (hello), and 'Tsara be' (very good) will get you smiles everywhere. Outside Tana, English is rare — French is the second language.",
      color: "border-amber-200 bg-amber-50",
    },
  ],

  faqs: [
    {
      q: "Is Madagascar safe for tourists?",
      a: "Madagascar is generally safe for tourists in the main national parks and tourist areas. Petty theft exists in Tana (especially around the market). Avoid walking alone at night in the capital, and use hotel transfers from the airport. The national parks and coastal resorts are very safe. Political instability is occasional but rarely affects tourists.",
    },
    {
      q: "Do I need a guide in Madagascar's national parks?",
      a: "Yes — local guides are mandatory in all Madagascar national parks and are included in the entrance fee arrangement. ANGAP-certified guides must accompany all visitors. This is not just a formality: wildlife spotting without a local expert is nearly impossible. Guides know individual indri families and their territories.",
    },
    {
      q: "What is the best time to see lemurs in Madagascar?",
      a: "Lemurs are visible year-round, but activity varies. April–October (dry season) is best for most parks — trails are passable and animals are active. Indri in Andasibe are active year-round. Mouse lemurs are easier to spot during the wet season (Nov–Mar) when they're not in torpor. The ring-tailed lemur mating season (April–June) is spectacular.",
    },
    {
      q: "Can I visit Madagascar on a budget of $80/day?",
      a: "Yes, $80/day is achievable if you use taxi-brousse transport, stay in local guesthouses, eat at hotelys (local canteens serving rice + one dish for $2–3), and book guides through the parks rather than through agencies. The biggest costs are domestic flights (worth it to save days of road travel) and park fees ($10–25 each). A 7-day trip including flights from Tana can be done for $500–600 total land costs.",
    },
  ],

  combineWith: [
    "Zanzibar (5 days — Indian Ocean island, 2-hr flight from Nosy Be)",
    "Mozambique (Bazaruto Archipelago — 3-hr flight, pristine diving)",
    "Réunion (volcano trekking, 1.5-hr flight from Tana)",
    "Mauritius (5-day beach extension, 2-hr flight)",
  ],

  relatedSlugs: [
    "zanzibar-7-days",
    "kenya-safari-7-days",
    "south-africa-10-days",
    "mozambique-5-days",
    "ethiopia-7-days",
  ],

  galleryQuery: "madagascar lemur baobab tsingy wildlife national park",
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function MadagascarPage() {
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
