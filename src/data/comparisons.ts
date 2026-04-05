export interface ComparisonDest {
  name: string;
  emoji: string;
  href: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  budget: string;
  duration: string;
}

export interface ComparisonCategory {
  name: string;
  dest1: string;
  dest2: string;
  winner: 1 | 2 | 0;
}

export interface Comparison {
  slug: string;
  title: string;
  description: string;
  dest1: ComparisonDest;
  dest2: ComparisonDest;
  verdict: string;
  categories: ComparisonCategory[];
}

export const comparisons: Comparison[] = [
  {
    slug: "goa-vs-pondicherry",
    title: "Goa vs Pondicherry: Which Beach Town Is Right for You?",
    description:
      "Comparing Goa and Pondicherry side-by-side on beaches, food, nightlife, budget, culture and vibe to help you pick the perfect Indian beach getaway.",
    dest1: {
      name: "Goa",
      emoji: "\u{1F3D6}",
      href: "/blog/goa-3-days",
      pros: [
        "Incredible nightlife and party scene",
        "Wide variety of beaches from busy to secluded",
        "Great water-sports infrastructure",
        "Abundant budget accommodation options",
      ],
      cons: [
        "Can feel overcrowded in peak season",
        "Tourist-trap restaurants near popular beaches",
        "Traffic congestion in North Goa",
      ],
      bestFor: "Party lovers, backpackers & water-sport enthusiasts",
      budget: "1,500 - 8,000/day",
      duration: "3 - 5 days",
    },
    dest2: {
      name: "Pondicherry",
      emoji: "\u{1F3D8}",
      href: "/blog/pondicherry-3-days",
      pros: [
        "Charming French Quarter with colonial architecture",
        "Peaceful, laid-back atmosphere year-round",
        "Outstanding Franco-Tamil cuisine",
        "Auroville spiritual community nearby",
      ],
      cons: [
        "Beaches are not as wide or sandy as Goa",
        "Limited nightlife options",
        "Smaller destination, can be covered quickly",
      ],
      bestFor: "Couples, culture seekers & food lovers",
      budget: "1,200 - 5,000/day",
      duration: "2 - 3 days",
    },
    verdict:
      "Pick Goa if you want beaches that go on forever, water sports at dawn and music that carries past midnight. Pick Pondicherry if you would rather sip filter coffee on a bougainvillea-draped street, explore a spiritual commune and eat some of the finest fusion food in India. Goa gives you range and energy; Pondy gives you charm and calm. Honestly, the best move is to do both on the same trip if you have the time.",
    categories: [
      {
        name: "Budget",
        dest1: "Huge range from 500-rupee hostels to luxury villas. Street shacks keep food costs low.",
        dest2: "Slightly cheaper overall. Boutique stays in the French Quarter offer great value.",
        winner: 2,
      },
      {
        name: "Beaches",
        dest1: "Dozens of beaches to choose from. Palolem, Arambol, Anjuna, Baga each have a distinct character.",
        dest2: "Promenade Beach and Paradise Beach are pleasant but smaller and rockier.",
        winner: 1,
      },
      {
        name: "Food",
        dest1: "Goan fish curry, pork vindaloo, bebinca. Seafood shacks everywhere.",
        dest2: "Franco-Tamil fusion, fresh croissants, filter coffee, Creole cuisine. A foodie paradise.",
        winner: 2,
      },
      {
        name: "Nightlife",
        dest1: "Legendary clubs, beach shacks with live music, trance parties in season.",
        dest2: "Quiet after dark. A few cosy cafes and bars, but nothing wild.",
        winner: 1,
      },
      {
        name: "Culture",
        dest1: "Portuguese churches, spice plantations, Konkani heritage, old Latin Quarter in Fontainhas.",
        dest2: "French colonial grid, Tamil temples, Auroville, Aurobindo Ashram. Deep spiritual layer.",
        winner: 2,
      },
      {
        name: "Best Time",
        dest1: "October to March. Monsoon shuts most shacks but is beautiful for solitude.",
        dest2: "October to March. Summers are hot but the town stays open year-round.",
        winner: 0,
      },
      {
        name: "Getting There",
        dest1: "Dabolim/Mopa airports with direct flights from most cities. Well-connected by rail.",
        dest2: "Nearest airport is Chennai (150 km). Overnight trains from Chennai and Bangalore.",
        winner: 1,
      },
      {
        name: "Crowds",
        dest1: "Very crowded in Dec-Jan peak. South Goa stays calmer.",
        dest2: "Rarely overcrowded, even on weekends. Peaceful vibe throughout.",
        winner: 2,
      },
    ],
  },
  {
    slug: "shimla-vs-manali",
    title: "Shimla vs Manali: Which Hill Station Should You Pick?",
    description:
      "A detailed comparison of Shimla and Manali covering adventure, scenery, weather, budget, accessibility and vibe to help you choose the right Himachal hill station.",
    dest1: {
      name: "Shimla",
      emoji: "\u{1F3D4}",
      href: "/blog/shimla-3-days",
      pros: [
        "Colonial-era charm with Mall Road and Christ Church",
        "Well-connected by road, rail, and the iconic toy train",
        "Pleasant weather almost year-round",
        "Great base for Kufri, Narkanda, Chail day trips",
      ],
      cons: [
        "Can feel very touristy and crowded on Mall Road",
        "Limited adventure-sport options",
        "Traffic congestion during peak season",
      ],
      bestFor: "Families, heritage lovers & first-time hill station visitors",
      budget: "1,500 - 6,000/day",
      duration: "2 - 3 days",
    },
    dest2: {
      name: "Manali",
      emoji: "\u26F7",
      href: "/blog/manali-5-days",
      pros: [
        "Gateway to Rohtang, Solang and adventure sports",
        "Stunning Beas River valley and snow-capped peaks",
        "Excellent trekking and paragliding scene",
        "Old Manali has a vibrant backpacker culture",
      ],
      cons: [
        "Very crowded in summer, especially Mall Road",
        "Long drive from Chandigarh or Delhi",
        "Tourist-trap pricing at Rohtang and Solang",
      ],
      bestFor: "Adventure seekers, honeymooners & backpackers",
      budget: "1,800 - 7,000/day",
      duration: "3 - 5 days",
    },
    verdict:
      "Shimla is the classic hill station: think heritage walks, toy-train selfies and evenings on Mall Road with ice cream. Manali is where the mountains get serious, with snow peaks, rafting, paragliding and trails that lead to Solang, Hampta and beyond. If your group has kids or older family members, Shimla is the gentler, easier choice. If you want adrenaline, backpacker cafes and that raw Himalayan edge, go Manali. And if you have a week, do both because they are barely ten hours apart.",
    categories: [
      {
        name: "Budget",
        dest1: "Moderate. Mall Road hotels are pricier, but plenty of mid-range options on the outskirts.",
        dest2: "Similar range, but Old Manali offers excellent budget hostels and cafes.",
        winner: 0,
      },
      {
        name: "Adventure",
        dest1: "Limited to ice-skating in winter and short hikes. More of a leisure destination.",
        dest2: "Paragliding, rafting, skiing, trekking to Hampta Pass and Beas Kund. Adventure capital of Himachal.",
        winner: 2,
      },
      {
        name: "Nature",
        dest1: "Pine-covered hills, Jakhoo temple views, and peaceful forest walks.",
        dest2: "Dramatic snow peaks, the Beas river, Solang Valley, and Rohtang Pass landscapes.",
        winner: 2,
      },
      {
        name: "Culture",
        dest1: "British-era architecture, Christ Church, Viceregal Lodge, Gaiety Theatre. Rich colonial heritage.",
        dest2: "Hadimba Temple, Tibetan monasteries, Old Manali village. Mix of Kullu and Tibetan culture.",
        winner: 1,
      },
      {
        name: "Food",
        dest1: "Himachali dham, Lakkar Bazaar street food, good multi-cuisine restaurants.",
        dest2: "Old Manali cafes serve global cuisine. Great momos, trout, and Israeli-backpacker food.",
        winner: 0,
      },
      {
        name: "Best Time",
        dest1: "March to June for pleasant weather. December to February for snow.",
        dest2: "October to June. Winters are harsh but magical. Monsoon brings landslide risk.",
        winner: 0,
      },
      {
        name: "Getting There",
        dest1: "5-6 hours from Chandigarh by road. Kalka-Shimla toy train is a UNESCO experience.",
        dest2: "10-12 hours from Delhi, 8 hours from Chandigarh. Nearest airport is Bhuntar (50 km).",
        winner: 1,
      },
      {
        name: "Crowds",
        dest1: "Crowded on Mall Road year-round. Weekends can be overwhelming.",
        dest2: "Very crowded in May-June. Old Manali and Vashisht stay calmer than Mall Road.",
        winner: 0,
      },
    ],
  },
  {
    slug: "kashmir-vs-ladakh",
    title: "Kashmir vs Ladakh: Romance or Adventure?",
    description:
      "Kashmir and Ladakh compared on scenery, adventure, budget, accessibility, best season and travel style so you can choose the right Himalayan escape.",
    dest1: {
      name: "Kashmir",
      emoji: "\u{1F338}",
      href: "/blog/kashmir-6-days",
      pros: [
        "Lush green valleys, Dal Lake houseboats, Mughal gardens",
        "Accessible year-round with Srinagar airport",
        "Romantic setting perfect for honeymooners",
        "Rich Kashmiri cuisine and handicraft shopping",
      ],
      cons: [
        "Can be crowded at Gulmarg and Dal Lake in peak season",
        "Some areas have travel advisories",
        "Houseboat touts can be persistent",
      ],
      bestFor: "Couples, families & anyone seeking lush green beauty",
      budget: "2,000 - 8,000/day",
      duration: "5 - 7 days",
    },
    dest2: {
      name: "Ladakh",
      emoji: "\u{1F3D4}",
      href: "/blog/leh-ladakh-7-days",
      pros: [
        "Otherworldly landscapes: Pangong, Nubra, Khardung La",
        "Incredible motorcycle and road-trip culture",
        "Pristine Buddhist monasteries and culture",
        "Uncrowded and raw, far fewer tourists than Kashmir",
      ],
      cons: [
        "Altitude sickness is a real concern, acclimatisation is essential",
        "Short season from June to September",
        "Rough roads and long driving hours between destinations",
        "Limited medical infrastructure",
      ],
      bestFor: "Adventure riders, photographers & solitude seekers",
      budget: "2,500 - 10,000/day",
      duration: "7 - 10 days",
    },
    verdict:
      "Kashmir is the valley of postcards: green meadows, shikara rides, saffron fields and wazwan feasts by a houseboat window. Ladakh is the land of silence: moonscapes, prayer flags, freezing lakes and passes above 18,000 feet. Choose Kashmir when you want beauty that feels gentle and romantic. Choose Ladakh when you want landscapes that punch you in the chest and stories you will retell for decades. They share a border but live in completely different emotional registers.",
    categories: [
      {
        name: "Budget",
        dest1: "Mid-range. Houseboats and hotels offer good value. Food is affordable.",
        dest2: "Higher due to permits, fuel costs, and remote guesthouses. Budget trips still possible.",
        winner: 1,
      },
      {
        name: "Adventure",
        dest1: "Skiing at Gulmarg, trekking at Pahalgam, gondola rides. Moderate adventure level.",
        dest2: "High-altitude passes, motorcycle expeditions, river rafting at Zanskar. Extreme adventure.",
        winner: 2,
      },
      {
        name: "Nature",
        dest1: "Green valleys, flower meadows, pine forests, the iconic Dal Lake.",
        dest2: "Stark desert mountains, blue lakes, sand dunes at Nubra, dramatic barren beauty.",
        winner: 0,
      },
      {
        name: "Culture",
        dest1: "Kashmiri Muslim culture, Mughal architecture, papier-mache, pashmina weaving.",
        dest2: "Tibetan Buddhist monasteries, prayer wheels, Hemis festival, Ladakhi traditions.",
        winner: 0,
      },
      {
        name: "Food",
        dest1: "Wazwan multi-course feasts, rogan josh, kahwa tea, lotus stem dishes. Outstanding.",
        dest2: "Thukpa, momos, butter tea. Simpler fare but unique to the region.",
        winner: 1,
      },
      {
        name: "Best Time",
        dest1: "March to October for the valley. December to February for snow sports at Gulmarg.",
        dest2: "June to September only. Roads close in winter. July-August is peak.",
        winner: 1,
      },
      {
        name: "Getting There",
        dest1: "Direct flights to Srinagar from Delhi, Mumbai, Bangalore. Easy access.",
        dest2: "Flights to Leh (limited, weather-dependent) or a 2-day road trip from Manali or Srinagar.",
        winner: 1,
      },
      {
        name: "Crowds",
        dest1: "Popular tourist circuit. Gulmarg and Dal Lake get busy in April-June.",
        dest2: "Relatively uncrowded. Pangong gets busy but most of Ladakh feels remote.",
        winner: 2,
      },
    ],
  },
  {
    slug: "jaipur-vs-udaipur",
    title: "Jaipur vs Udaipur: Pink City or Lake City?",
    description:
      "Jaipur and Udaipur compared on forts, food, romance, shopping, nightlife and budget to help you choose the best Rajasthan city for your trip.",
    dest1: {
      name: "Jaipur",
      emoji: "\u{1F3F0}",
      href: "/blog/jaipur-3-days",
      pros: [
        "Grand forts and palaces: Amber Fort, Hawa Mahal, City Palace",
        "Best shopping in Rajasthan for gems, textiles, and handicrafts",
        "Excellent street food scene",
        "Well-connected as part of the Golden Triangle circuit",
      ],
      cons: [
        "City traffic and auto-rickshaw haggling can be exhausting",
        "Very hot in summer months",
        "Aggressive touts at major tourist sites",
      ],
      bestFor: "History buffs, shoppers & Golden Triangle travellers",
      budget: "1,500 - 7,000/day",
      duration: "2 - 3 days",
    },
    dest2: {
      name: "Udaipur",
      emoji: "\u{1F30A}",
      href: "/blog/udaipur-3-days",
      pros: [
        "Stunning lake setting with Pichola and Fateh Sagar",
        "Most romantic city in India, perfect for couples",
        "Beautiful sunset views from rooftop restaurants",
        "Art, miniature painting galleries and cultural performances",
      ],
      cons: [
        "Smaller city with fewer grand forts compared to Jaipur",
        "Lake water levels depend heavily on monsoon",
        "Pricier heritage hotels than Jaipur",
      ],
      bestFor: "Couples, romantics & art lovers",
      budget: "1,800 - 9,000/day",
      duration: "2 - 3 days",
    },
    verdict:
      "Jaipur hits you with scale and swagger: massive forts on hilltops, bazaars overflowing with colour, and a city that wears its history on every pink-painted wall. Udaipur seduces you quietly: lakes that mirror white palaces, rooftop dinners under the stars, and a pace that invites you to stay an extra night. If you want that classic Rajasthan photo album full of forts and markets, Jaipur delivers. If you want the city that makes you fall in love with India a little deeper, head to Udaipur. Most smart travellers do both.",
    categories: [
      {
        name: "Budget",
        dest1: "Slightly cheaper across the board. Street food is exceptional value.",
        dest2: "Heritage lakeside hotels push the average up, but mid-range options exist.",
        winner: 1,
      },
      {
        name: "Culture",
        dest1: "Amber Fort, City Palace, Jantar Mantar, block-printing workshops. Deep heritage layer.",
        dest2: "City Palace, Jagdish Temple, miniature painting tradition, folk dance performances.",
        winner: 0,
      },
      {
        name: "Food",
        dest1: "Dal baati churma, pyaaz kachori, laal maas. Johari Bazaar street food is legendary.",
        dest2: "Lakeside dining, Rajasthani thalis, rooftop cafes with views. More about ambience.",
        winner: 1,
      },
      {
        name: "Nature",
        dest1: "Arid terrain with Nahargarh hills for sunset views. City is mostly urban.",
        dest2: "Lakes, Aravalli hills, Sajjangarh monsoon palace. Water and greenery set it apart.",
        winner: 2,
      },
      {
        name: "Shopping",
        dest1: "Johari Bazaar gems, Bapu Bazaar textiles, blue pottery, leatherwork. Shopping paradise.",
        dest2: "Hathi Pol for art, Bada Bazaar for silver, miniature paintings. Smaller but curated.",
        winner: 1,
      },
      {
        name: "Best Time",
        dest1: "October to March. Summers exceed 45 degrees and should be avoided.",
        dest2: "September to March. Post-monsoon when the lakes are full is the most magical time.",
        winner: 0,
      },
      {
        name: "Getting There",
        dest1: "Major airport with flights from all cities. On the Delhi-Mumbai rail corridor.",
        dest2: "Maharana Pratap airport with fewer direct flights. 6 hours by road from Jaipur.",
        winner: 1,
      },
      {
        name: "Activities",
        dest1: "Elephant rides (ethical sanctuaries), hot-air balloon, cooking classes, night bazaar walks.",
        dest2: "Boat rides on Pichola, vintage car museum, cooking classes, sunset at Sajjangarh.",
        winner: 0,
      },
    ],
  },
  {
    slug: "ooty-vs-kodaikanal",
    title: "Ooty vs Kodaikanal: Which Tamil Nadu Hill Station?",
    description:
      "Ooty and Kodaikanal compared on scenery, trekking, weather, food, crowds and budget to help you choose the best South Indian hill station getaway.",
    dest1: {
      name: "Ooty",
      emoji: "\u{1F33F}",
      href: "/blog/ooty-3-days",
      pros: [
        "Iconic Nilgiri Mountain Railway (toy train) is a UNESCO experience",
        "Vast tea estates and botanical gardens",
        "Better road connectivity from Bangalore, Mysore, Coimbatore",
        "More accommodation options across all budgets",
      ],
      cons: [
        "Ooty town itself is congested and commercialised",
        "Main lake area feels touristy with paddle boats and stalls",
        "Traffic jams on the ghat road during weekends",
      ],
      bestFor: "Families, tea lovers & toy-train enthusiasts",
      budget: "1,200 - 5,000/day",
      duration: "2 - 3 days",
    },
    dest2: {
      name: "Kodaikanal",
      emoji: "\u2B50",
      href: "/blog/kodaikanal-3-days",
      pros: [
        "Star-shaped Kodai Lake surrounded by dense forest",
        "Misty, mystical atmosphere with shola grasslands",
        "Excellent short treks: Dolphin's Nose, Pillar Rocks, Coaker's Walk",
        "Less commercialised than Ooty with a more natural feel",
      ],
      cons: [
        "Fewer accommodation choices, especially luxury options",
        "Harder to reach with no direct rail connection",
        "Smaller town with limited dining variety",
      ],
      bestFor: "Trekkers, nature lovers & couples seeking quiet",
      budget: "1,000 - 4,500/day",
      duration: "2 - 3 days",
    },
    verdict:
      "Ooty gives you the full hill-station package: toy train winding through eucalyptus forests, tea estates rolling to the horizon, and enough infrastructure to keep every family member happy. Kodaikanal gives you the misty, slightly wild side of the Western Ghats: pine forests, shola grasslands, and viewpoints where clouds literally walk past your feet. If you want convenience and variety, Ooty wins. If you want that magical feeling of being inside a cloud with nobody else around, Kodaikanal is calling. Both are under three days of content, so combining them is a beautiful South India loop.",
    categories: [
      {
        name: "Budget",
        dest1: "Wide range of stays. Street food and local meals are very affordable.",
        dest2: "Slightly cheaper overall. Fewer luxury options but great homestays.",
        winner: 2,
      },
      {
        name: "Nature",
        dest1: "Tea gardens, botanical gardens, Doddabetta Peak. Manicured and accessible.",
        dest2: "Dense forests, shola grasslands, waterfalls, misty valleys. Raw and atmospheric.",
        winner: 2,
      },
      {
        name: "Activities",
        dest1: "Toy train, boating, tea-factory visits, Doddabetta, rose garden, deer park.",
        dest2: "Trekking to viewpoints, cycling around the lake, boating, pine forest walks.",
        winner: 0,
      },
      {
        name: "Food",
        dest1: "Varkey (local biscuit), homemade chocolates, Nilgiri tea, South Indian meals.",
        dest2: "Homemade chocolates, fresh mushroom dishes, cafe culture near the lake.",
        winner: 0,
      },
      {
        name: "Crowds",
        dest1: "Gets very crowded on long weekends and summer holidays.",
        dest2: "Calmer overall. Lake area gets busy but the rest of town stays peaceful.",
        winner: 2,
      },
      {
        name: "Best Time",
        dest1: "October to June. Monsoon is wet but lush. Winter mornings are freezing and beautiful.",
        dest2: "October to June. Monsoon mists are magical if you do not mind the rain.",
        winner: 0,
      },
      {
        name: "Getting There",
        dest1: "Coimbatore airport (90 km), then ghat road. Toy train from Mettupalayam.",
        dest2: "Madurai airport (120 km) or Kodai Road railway station (80 km). Longer, windier drive.",
        winner: 1,
      },
      {
        name: "Culture",
        dest1: "Toda tribal heritage, colonial churches, Raj-era bungalows.",
        dest2: "Palani Murugan temple nearby, Kurinji flowers (once in 12 years), local Kodava touches.",
        winner: 0,
      },
    ],
  },
  {
    slug: "thailand-vs-bali",
    title: "Thailand vs Bali: Which Southeast Asian Paradise Is Right for You?",
    description:
      "Thailand and Bali compared side-by-side on budget, beaches, culture, food, nightlife and vibe to help you pick the perfect Southeast Asian getaway.",
    dest1: {
      name: "Thailand",
      emoji: "\u{1F1F9}\u{1F1ED}",
      href: "/blog/bangkok-4-days",
      pros: [
        "Significantly cheaper across food, transport and accommodation",
        "Incredible variety: cities, islands, mountains and ancient ruins",
        "One of the best street-food scenes on the planet",
        "Easy and safe for solo travellers and first-timers",
      ],
      cons: [
        "Tourist areas can feel over-commercialised",
        "Language barrier outside Bangkok and resort zones",
        "Rainy season can disrupt island plans",
      ],
      bestFor: "Solo travellers, foodies & budget backpackers",
      budget: "$30 - $120/day",
      duration: "7 - 14 days",
    },
    dest2: {
      name: "Bali",
      emoji: "\u{1F1EE}\u{1F1E9}",
      href: "/blog/bali-5-days",
      pros: [
        "Deeply spiritual atmosphere with temples everywhere",
        "World-class yoga, wellness and spa culture",
        "Incredibly photogenic rice terraces, cliffs and sunsets",
        "Romantic setting perfect for couples and honeymooners",
      ],
      cons: [
        "Traffic in Kuta, Seminyak and Ubud can be terrible",
        "Overtourism at popular Instagram spots",
        "Fewer budget options compared to Thailand",
      ],
      bestFor: "Couples, yoga lovers & wellness seekers",
      budget: "$40 - $150/day",
      duration: "5 - 10 days",
    },
    verdict:
      "Thailand wins on variety and value. Bali wins on aesthetics and vibes. First-timers to Southeast Asia should start with Thailand for its sheer range of experiences. Couples and yoga lovers should go Bali for that spiritual, photogenic magic. If you have three weeks, do both because they complement each other perfectly.",
    categories: [
      {
        name: "Budget",
        dest1: "One of the cheapest countries in Asia. Street meals under $2, hostels under $10.",
        dest2: "Affordable but pricier than Thailand. Expect to spend 30-50% more on average.",
        winner: 1,
      },
      {
        name: "Beaches",
        dest1: "Dozens of world-class islands: Phi Phi, Koh Lipe, Koh Tao, Railay. Huge variety.",
        dest2: "Beautiful cliff beaches and surf breaks. Nusa Penida is stunning but fewer options overall.",
        winner: 1,
      },
      {
        name: "Culture",
        dest1: "Grand temples, night markets, Muay Thai, hill tribes. Deep and diverse cultural layers.",
        dest2: "Hindu temples, daily offerings, rice terrace culture, traditional dance. Deeply spiritual.",
        winner: 0,
      },
      {
        name: "Food",
        dest1: "Legendary street food: pad thai, som tum, mango sticky rice, night markets everywhere.",
        dest2: "Good local food like babi guling and nasi goreng, but less variety than Thailand.",
        winner: 1,
      },
      {
        name: "Nightlife",
        dest1: "Bangkok rooftop bars, Full Moon Party, Khao San Road. Nightlife for every taste.",
        dest2: "Beach clubs in Seminyak, sunset bars in Canggu. Trendy but more limited.",
        winner: 1,
      },
      {
        name: "Getting Around",
        dest1: "Excellent domestic flights, sleeper trains, ferries and tuk-tuks. Easy to hop around.",
        dest2: "Motorbike culture dominates. No trains, limited public transport. Scooter or driver needed.",
        winner: 1,
      },
      {
        name: "Best For",
        dest1: "Solo travellers, backpackers, foodies, anyone wanting variety on a budget.",
        dest2: "Couples, yoga retreats, digital nomads, Instagram content creators.",
        winner: 0,
      },
    ],
  },
  {
    slug: "goa-vs-phuket",
    title: "Goa vs Phuket: Which Beach Destination Should You Pick?",
    description:
      "Goa and Phuket compared on beaches, food, nightlife, budget, diving and culture to help you choose the right beach holiday.",
    dest1: {
      name: "Goa",
      emoji: "\u{1F3D6}",
      href: "/blog/goa-3-days",
      pros: [
        "Significantly cheaper for Indians and budget travellers",
        "Unique Portuguese-Konkani character and architecture",
        "Dudhsagar Falls and spice plantations add inland variety",
        "Laid-back shack culture with live music and bonfires",
      ],
      cons: [
        "Beaches can be dirty and overcrowded in peak season",
        "Infrastructure is less polished than Phuket",
        "Monsoon shuts down most beach shacks from June to September",
      ],
      bestFor: "Budget travellers, culture seekers & Indian domestic tourists",
      budget: "1,500 - 8,000/day",
      duration: "3 - 5 days",
    },
    dest2: {
      name: "Phuket",
      emoji: "\u{1F30A}",
      href: "/blog/phuket-5-days",
      pros: [
        "Cleaner, better-maintained beaches with turquoise water",
        "World-class diving and snorkelling at Phi Phi and Similan Islands",
        "More polished tourist infrastructure and luxury resorts",
        "Easy island-hopping to Krabi, Phi Phi and James Bond Island",
      ],
      cons: [
        "Significantly more expensive than Goa",
        "Patong Beach area can feel trashy and over-touristy",
        "Less cultural character than Goa",
      ],
      bestFor: "Beach purists, divers & luxury resort seekers",
      budget: "$50 - $200/day",
      duration: "4 - 7 days",
    },
    verdict:
      "Goa is your backyard beach escape with character, Portuguese churches, and shack dinners at sunset. Phuket is the international beach experience with cleaner water, better diving, and polished resorts. Budget? Goa. Pure beach quality? Phuket. Both deliver a great time but for very different wallets.",
    categories: [
      {
        name: "Budget",
        dest1: "Extremely affordable. Beach shack meals under 300 rupees, hostels from 500 rupees.",
        dest2: "Mid to high range. Even budget stays cost 2-3x more than equivalent in Goa.",
        winner: 1,
      },
      {
        name: "Beaches",
        dest1: "Wide variety from Palolem to Arambol. Sand quality varies, some littering issues.",
        dest2: "Pristine turquoise water, white sand. Kata, Karon, Freedom Beach are world-class.",
        winner: 2,
      },
      {
        name: "Culture",
        dest1: "Portuguese churches, Latin Quarter, Konkani cuisine, spice plantations. Rich heritage.",
        dest2: "Big Buddha, Wat Chalong, Old Phuket Town. Interesting but thinner cultural layer.",
        winner: 1,
      },
      {
        name: "Food",
        dest1: "Fish curry rice, pork vindaloo, bebinca, feni cocktails. Unique Goan-Portuguese fusion.",
        dest2: "Thai curries, seafood BBQ, night markets. Excellent but less unique to the island.",
        winner: 0,
      },
      {
        name: "Nightlife",
        dest1: "Trance parties, beach shacks with live music, Saturday Night Market in Arpora.",
        dest2: "Bangla Road in Patong is intense. Beach clubs, cabaret shows. More polished nightlife.",
        winner: 0,
      },
      {
        name: "Activities",
        dest1: "Dudhsagar Falls, dolphin spotting, spice tours, kayaking, parasailing.",
        dest2: "Scuba diving, Phi Phi day trip, Similan Islands, Thai boxing, zip-lining.",
        winner: 2,
      },
      {
        name: "Getting There",
        dest1: "Direct flights from most Indian cities. Dabolim and Mopa airports.",
        dest2: "International airport with connections from Asia, Middle East and Europe.",
        winner: 0,
      },
    ],
  },
  {
    slug: "tokyo-vs-kyoto",
    title: "Tokyo vs Kyoto: Modern Metropolis or Ancient Capital?",
    description:
      "Tokyo and Kyoto compared on culture, food, nightlife, temples, shopping and budget to help you choose the right Japanese city.",
    dest1: {
      name: "Tokyo",
      emoji: "\u{1F5FC}",
      href: "/blog/tokyo-5-days",
      pros: [
        "Electric neon energy: Shibuya, Shinjuku, Akihabara",
        "Unmatched food variety from Michelin ramen to conveyor-belt sushi",
        "Anime, gaming, and pop-culture capital of the world",
        "Incredible nightlife from golden gai bars to Roppongi clubs",
      ],
      cons: [
        "Can feel overwhelming and exhausting for first-timers",
        "Expensive accommodation especially in central wards",
        "Crowds everywhere, especially on weekends",
      ],
      bestFor: "City lovers, foodies, anime fans & nightlife seekers",
      budget: "$80 - $250/day",
      duration: "4 - 6 days",
    },
    dest2: {
      name: "Kyoto",
      emoji: "\u26E9",
      href: "/blog/kyoto-4-days",
      pros: [
        "Over 2,000 temples and shrines including Fushimi Inari and Kinkaku-ji",
        "Arashiyama bamboo grove and traditional Japanese gardens",
        "Authentic tea ceremony and geisha district (Gion)",
        "Preserved machiya townhouses and traditional architecture",
      ],
      cons: [
        "Major temples get very crowded, especially during cherry blossom season",
        "Limited nightlife compared to Tokyo",
        "Smaller city with fewer dining options",
      ],
      bestFor: "Culture lovers, photographers & tradition seekers",
      budget: "$70 - $200/day",
      duration: "3 - 5 days",
    },
    verdict:
      "Do not choose. Do both, they are only two hours apart by bullet train. But if forced: first-timers and culture lovers should start with Kyoto for that quintessential Japan experience. City lovers and foodies should head to Tokyo for the sensory overload. Together they give you the full spectrum of Japan.",
    categories: [
      {
        name: "Budget",
        dest1: "Pricier hotels and dining, but incredible value at konbini and ramen shops.",
        dest2: "Slightly cheaper stays. Ryokan experiences cost more but are worth every yen.",
        winner: 2,
      },
      {
        name: "Culture",
        dest1: "Meiji Shrine, Senso-ji, teamLab, Imperial Palace. Modern-meets-traditional.",
        dest2: "Fushimi Inari, Kinkaku-ji, Gion district, tea ceremonies. Japan at its most traditional.",
        winner: 2,
      },
      {
        name: "Food",
        dest1: "Tsukiji outer market, ramen alleys, Michelin-starred everything, izakaya culture.",
        dest2: "Kaiseki multi-course dining, matcha everything, tofu cuisine. Refined and seasonal.",
        winner: 1,
      },
      {
        name: "Nightlife",
        dest1: "Golden Gai, Roppongi, Shibuya clubs, robot restaurant. Nightlife for every mood.",
        dest2: "Quiet bars in Pontocho alley, sake tastings. Atmospheric but low-key.",
        winner: 1,
      },
      {
        name: "Shopping",
        dest1: "Harajuku, Ginza, Akihabara, Shibuya 109. Shopping paradise for every style.",
        dest2: "Nishiki Market, antique shops, craft stores. More curated and traditional.",
        winner: 1,
      },
      {
        name: "Nature",
        dest1: "Shinjuku Gyoen, Ueno Park, day trips to Hakone and Mount Fuji.",
        dest2: "Arashiyama bamboo, Philosopher's Path, cherry blossoms along the Kamo River.",
        winner: 2,
      },
      {
        name: "Getting Around",
        dest1: "World-class metro system. Suica card makes everything seamless.",
        dest2: "Compact enough for cycling. Buses cover temples. Less intuitive than Tokyo metro.",
        winner: 1,
      },
    ],
  },
  {
    slug: "dubai-vs-singapore",
    title: "Dubai vs Singapore: Which Futuristic City Should You Visit?",
    description:
      "Dubai and Singapore compared on food, shopping, attractions, budget, weather and culture to help you choose the right modern city break.",
    dest1: {
      name: "Dubai",
      emoji: "\u{1F3D9}",
      href: "/blog/dubai-4-days",
      pros: [
        "Record-breaking architecture: Burj Khalifa, Palm Jumeirah, Museum of the Future",
        "Unique desert safari and dune bashing experiences",
        "Tax-free shopping with massive malls and gold souks",
        "Year-round sunshine and beach access",
      ],
      cons: [
        "Extreme summer heat makes outdoor activities impossible",
        "City feels spread out and car-dependent",
        "Can feel artificial and lacking in organic culture",
      ],
      bestFor: "Luxury lovers, shoppers & desert adventure seekers",
      budget: "$100 - $350/day",
      duration: "3 - 5 days",
    },
    dest2: {
      name: "Singapore",
      emoji: "\u{1F1F8}\u{1F1EC}",
      href: "/blog/bangkok-4-days",
      pros: [
        "Best street food in Asia: hawker centres are legendary and cheap",
        "Gardens by the Bay and Supertree Grove are genuinely magical",
        "Incredibly clean, safe and efficient public transport",
        "Authentic multicultural mix of Chinese, Malay, Indian and Peranakan cultures",
      ],
      cons: [
        "One of the most expensive cities in Asia for accommodation",
        "Small city that can be covered in 3-4 days",
        "Humid tropical weather year-round",
      ],
      bestFor: "Foodies, families & culture lovers who value efficiency",
      budget: "$80 - $300/day",
      duration: "3 - 4 days",
    },
    verdict:
      "Dubai for the spectacle and the desert. Singapore for the food and the gardens. Dubai feels like the future built on ambition. Singapore feels like the future built on thoughtful planning. Both are stopover-friendly, so many travellers hit them en route to somewhere else.",
    categories: [
      {
        name: "Budget",
        dest1: "Tax-free shopping is cheaper. Hotels range widely. Food in malls is pricey.",
        dest2: "Hawker food is incredibly cheap. Hotels are expensive. Overall slightly better food value.",
        winner: 0,
      },
      {
        name: "Food",
        dest1: "Good Middle Eastern, Indian, and international dining. Lavish brunches are famous.",
        dest2: "Hawker centres are world-class. Chilli crab, laksa, chicken rice, roti prata. Food heaven.",
        winner: 2,
      },
      {
        name: "Shopping",
        dest1: "Dubai Mall, Mall of the Emirates, Gold Souk. Tax-free everything. Shoppers paradise.",
        dest2: "Orchard Road, Bugis Street, Mustafa Centre. Great but with standard taxes.",
        winner: 1,
      },
      {
        name: "Attractions",
        dest1: "Burj Khalifa, desert safari, Atlantis, Museum of the Future, Palm Jumeirah.",
        dest2: "Gardens by the Bay, Marina Bay Sands, Sentosa, Chinatown, Little India.",
        winner: 0,
      },
      {
        name: "Culture",
        dest1: "Al Fahidi historic district, souks, mosque visits. Growing arts scene but thin cultural layer.",
        dest2: "Chinatown, Little India, Kampong Glam, Peranakan heritage. Genuinely multicultural.",
        winner: 2,
      },
      {
        name: "Getting Around",
        dest1: "Metro covers key areas but the city is spread out. Taxis and ride-hailing essential.",
        dest2: "MRT is world-class, clean and covers the entire island. Easy to go carless.",
        winner: 2,
      },
      {
        name: "Best For",
        dest1: "Luxury travellers, Instagram lovers, desert experience seekers.",
        dest2: "Foodies, families with kids, culture explorers, transit stopover travellers.",
        winner: 0,
      },
    ],
  },
  {
    slug: "barcelona-vs-rome",
    title: "Barcelona vs Rome: Which Mediterranean City Wins?",
    description:
      "Barcelona and Rome compared on history, food, beaches, nightlife, architecture and budget to help you choose the perfect European city break.",
    dest1: {
      name: "Barcelona",
      emoji: "\u{1F1EA}\u{1F1F8}",
      href: "/blog/barcelona-4-days",
      pros: [
        "Gaudi masterpieces: Sagrada Familia, Park Guell, Casa Batllo",
        "City beaches right in the centre with Mediterranean vibes",
        "One of the best nightlife scenes in Europe",
        "Tapas culture and La Boqueria market are food highlights",
      ],
      cons: [
        "Pickpocketing is a serious problem in tourist areas",
        "Overtourism has pushed prices up in Gothic Quarter",
        "Beaches can be crowded and not the cleanest",
      ],
      bestFor: "Architecture fans, nightlife lovers & beach city seekers",
      budget: "$80 - $250/day",
      duration: "3 - 5 days",
    },
    dest2: {
      name: "Rome",
      emoji: "\u{1F1EE}\u{1F1F9}",
      href: "/blog/rome-4-days",
      pros: [
        "Unmatched ancient history: Colosseum, Forum, Pantheon",
        "The Vatican and Sistine Chapel are bucket-list experiences",
        "Pasta, pizza and gelato at their absolute finest",
        "Deeply romantic city with monumental beauty around every corner",
      ],
      cons: [
        "Summer heat and tourist crowds make major sites exhausting",
        "Taxi scams and tourist-trap restaurants near landmarks",
        "No beaches in the city itself",
      ],
      bestFor: "History buffs, romantics & food lovers",
      budget: "$80 - $280/day",
      duration: "3 - 5 days",
    },
    verdict:
      "Barcelona is the city you want to live in. Rome is the city that lives in you. Beach lovers and nightlife seekers should head to Barcelona. History lovers and romantics should choose Rome. Both are perfect for a long weekend and pair beautifully with nearby day trips.",
    categories: [
      {
        name: "Budget",
        dest1: "Tapas and wine are affordable. Accommodation is pricey in summer.",
        dest2: "Similar price range. Pizza al taglio is cheap. Vatican tickets add up.",
        winner: 0,
      },
      {
        name: "Beaches",
        dest1: "Barceloneta and surrounding beaches right in the city. Mediterranean swimming.",
        dest2: "No city beaches. Ostia is an hour away by train. Not a beach destination.",
        winner: 1,
      },
      {
        name: "Culture",
        dest1: "Gaudi, Picasso Museum, Gothic Quarter, Catalan identity, FC Barcelona.",
        dest2: "Colosseum, Vatican, Pantheon, Trevi Fountain. 2,500 years of history on every street.",
        winner: 2,
      },
      {
        name: "Food",
        dest1: "Tapas, paella, jamon iberico, La Boqueria market. Vibrant and social dining.",
        dest2: "Cacio e pepe, carbonara, margherita pizza, supplì, gelato. Possibly the world's best food city.",
        winner: 2,
      },
      {
        name: "Nightlife",
        dest1: "Clubs open till 6am, rooftop bars, beach bars, Gothic Quarter pubs. World-class nightlife.",
        dest2: "Trastevere aperitivo scene, wine bars, Testaccio clubs. Good but not Barcelona level.",
        winner: 1,
      },
      {
        name: "Architecture",
        dest1: "Gaudi is unlike anything else. Sagrada Familia alone is worth the trip.",
        dest2: "Ancient Roman, Renaissance, Baroque. The Pantheon and St Peter's are jaw-dropping.",
        winner: 0,
      },
      {
        name: "Getting Around",
        dest1: "Excellent metro, walkable centre, bike-friendly. Easy to navigate.",
        dest2: "Walkable historic centre. Metro is decent. Cobblestones make cycling harder.",
        winner: 1,
      },
    ],
  },
  // ── New comparisons for PDF-backed destinations ──────────────────────────
  {
    slug: "goa-vs-kerala",
    title: "Goa vs Kerala: Which Indian Paradise Should You Visit?",
    description: "Goa and Kerala compared on beaches, food, budget, nightlife, nature and culture to help you pick the perfect Indian getaway.",
    dest1: {
      name: "Goa",
      emoji: "🏖️",
      href: "/blog/goa-3-days",
      pros: [
        "World-class beaches from busy to secluded",
        "Best nightlife in India — beach parties & clubs",
        "Easy to get around on a rented scooter (₹300/day)",
        "Affordable seafood shacks right on the beach",
        "Great for 3-day weekend trip from any major city",
      ],
      cons: [
        "Crowded and expensive Dec 20 – Jan 5",
        "Not much to do beyond beach & parties",
        "Can feel touristy in North Goa",
      ],
      bestFor: "Party lovers, backpackers, beach bums, weekend trippers",
      budget: "₹1,500 – ₹8,000/day",
      duration: "3 – 5 days",
    },
    dest2: {
      name: "Kerala",
      emoji: "🌊",
      href: "/blog/kerala-5-days",
      pros: [
        "Backwater houseboat experience — unique to Kerala",
        "Munnar tea estates & hill station beauty",
        "Ayurveda, yoga, wellness — best in India",
        "Safer, calmer, more authentic than Goa",
        "Great for couples and families",
      ],
      cons: [
        "More expensive than Goa overall",
        "Longer trip — needs minimum 5 days to do justice",
        "Monsoon (Jun-Aug) limits beach activities",
      ],
      bestFor: "Couples, families, wellness seekers, nature lovers",
      budget: "₹2,500 – ₹12,000/day",
      duration: "5 – 7 days",
    },
    verdict: "Choose Goa for a quick, fun beach break with nightlife energy. Choose Kerala if you want a richer, more immersive experience — houseboats, hill stations, spice gardens and Ayurveda. Both are brilliant; it just depends on your pace.",
    categories: [
      { name: "Beaches", dest1: "North Goa's Vagator & Anjuna are stunning. Palolem in South Goa is one of India's most beautiful.", dest2: "Varkala cliffs are dramatic. Kovalam is calm. Beaches are quieter and less developed than Goa.", winner: 1 },
      { name: "Food", dest1: "Fresh seafood, beach shack culture, Goan fish curry & prawn balchão. Very affordable.", dest2: "Appam & stew, Kerala sadya on banana leaf, Karimeen fish, coconut-based curries. More complex flavours.", winner: 2 },
      { name: "Budget", dest1: "Can do it for ₹1,500-₹2,000/day staying in a hostel. Scooter rental keeps costs down.", dest2: "Houseboat adds ₹4,000-₹15,000/night. Hill station stays cheaper. Average ₹3,000/day minimum.", winner: 1 },
      { name: "Nature & Scenery", dest1: "Beaches, cliffs, some inland waterfalls. Primarily coastal.", dest2: "Munnar tea gardens, backwaters, coconut groves, Western Ghats wildlife. Much more diverse.", winner: 2 },
      { name: "Nightlife", dest1: "India's best nightlife. Silent discos, beach parties, clubs in Anjuna & Baga.", dest2: "Very limited nightlife. Not a party destination at all.", winner: 1 },
      { name: "Ease of Travel", dest1: "Very easy. Rent a scooter and go anywhere. 3 days is enough.", dest2: "Requires more planning. Multiple destinations across a large state. Best with a driver.", winner: 1 },
    ],
  },
  {
    slug: "manali-vs-kashmir",
    title: "Manali vs Kashmir: Which Himalayan Escape Is Better?",
    description: "Manali and Kashmir compared on scenery, adventure, budget, safety, best time to visit and overall experience for Indian travellers.",
    dest1: {
      name: "Manali",
      emoji: "⛰️",
      href: "/blog/manali-5-days",
      pros: [
        "Easier to reach — bus from Delhi overnight (₹1,200)",
        "Rohtang Pass for snow without high altitude drama",
        "Old Manali café culture — budget-friendly & chilled",
        "Kheerganga trek & natural hot spring",
        "Great bike trips to Spiti & Leh from here",
      ],
      cons: [
        "Can feel touristy and crowded in peak summer",
        "Rohtang Pass requires permit & often jammed",
        "Heavy traffic on the main road",
      ],
      bestFor: "Budget travellers, bikers, first-time Himalayan visitors, trekkers",
      budget: "₹1,500 – ₹6,000/day",
      duration: "4 – 6 days",
    },
    dest2: {
      name: "Kashmir",
      emoji: "❄️",
      href: "/blog/kashmir-6-days",
      pros: [
        "Dal Lake houseboat — most iconic India experience",
        "Gulmarg Gondola — highest in India, 4,200m",
        "Pahalgam & Sonamarg — jaw-dropping alpine beauty",
        "Wazwan cuisine is unlike anything else in India",
        "Feels like a foreign country within India",
      ],
      cons: [
        "Fly in — flights from Delhi ₹4,000-₹8,000",
        "Occasional political unrest — check advisories",
        "ATMs unreliable in remote areas — carry cash",
      ],
      bestFor: "Couples, luxury travellers, photographers, culture seekers",
      budget: "₹3,000 – ₹15,000/day",
      duration: "5 – 7 days",
    },
    verdict: "Manali wins on accessibility and budget. Kashmir wins on sheer beauty and experience. If it's your first Himalayan trip and you're budget-conscious, start with Manali. If you want the most memorable trip of your life and have ₹30,000+ to spend, go to Kashmir — it delivers every time.",
    categories: [
      { name: "Scenery", dest1: "Rohtang, Solang Valley and Beas River are gorgeous. Gets very crowded in summer.", dest2: "Dal Lake at sunrise, Pahalgam alpine meadows, Sonamarg glacier. Consistently stunning and less crowded.", winner: 2 },
      { name: "Budget", dest1: "Bus from Delhi ₹1,200. Hostels from ₹400. Total trip ₹8,000-₹15,000 for 5 days.", dest2: "Flights ₹6,000-₹12,000 return. Houseboat ₹2,000-₹8,000/night. Total ₹20,000-₹50,000 for 6 days.", winner: 1 },
      { name: "Adventure", dest1: "Paragliding, zorbing, Kheerganga trek, river rafting, biking to Spiti.", dest2: "Skiing at Gulmarg, trekking Pahalgam, pony rides, gondola to 4,200m.", winner: 0 },
      { name: "Food", dest1: "Himachali dham, momos, Tibetan food, sidu bread. Good but not unique.", dest2: "Wazwan (multi-course meat feast), Kashmiri pulao, Kahwa tea, nadru yakhni. Extraordinary.", winner: 2 },
      { name: "Ease of Travel", dest1: "Bus or fly. Roads manageable. Scooter/bike rentals everywhere.", dest2: "Fly preferred. Shared cabs between destinations. More complex logistics.", winner: 1 },
      { name: "Safety", dest1: "Very safe. Standard Himachal Pradesh caution applies.", dest2: "Generally safe for tourists. Check current advisories — situation varies by season.", winner: 1 },
    ],
  },
  {
    slug: "bali-vs-kerala",
    title: "Bali vs Kerala: Tropical Paradise — Which Wins?",
    description: "Bali and Kerala compared on beaches, temples, wellness, food, budget and overall vibe to help Indian travellers pick their perfect tropical escape.",
    dest1: {
      name: "Bali",
      emoji: "🌴",
      href: "/blog/bali-5-days",
      pros: [
        "Stunning temples, rice terraces and volcano treks",
        "Beach clubs, nightlife and surf culture",
        "Visa on arrival — free for Indians since 2024",
        "Direct flights from Mumbai/Delhi (~5 hrs)",
        "World-class spa treatments at half European prices",
      ],
      cons: [
        "International flights ₹15,000-₹25,000 return",
        "Currency conversion adds complexity",
        "Some areas are very touristy (Kuta, Legian)",
      ],
      bestFor: "Couples, digital nomads, surfers, yoga lovers, party seekers",
      budget: "₹4,000 – ₹20,000/day",
      duration: "5 – 8 days",
    },
    dest2: {
      name: "Kerala",
      emoji: "🌊",
      href: "/blog/kerala-5-days",
      pros: [
        "Unique backwaters houseboat experience",
        "Authentic Ayurveda — the real deal, not tourist version",
        "No visa required, no currency exchange hassle",
        "Munnar tea gardens equal to anything in Southeast Asia",
        "Much cheaper than Bali overall",
      ],
      cons: [
        "Less international — feels like India",
        "Houseboat can be expensive",
        "Limited beach club / party scene",
      ],
      bestFor: "Wellness seekers, nature lovers, families, budget conscious couples",
      budget: "₹2,500 – ₹12,000/day",
      duration: "5 – 7 days",
    },
    verdict: "For the full exotic, international experience with temples, rice terraces and beach clubs — Bali. For authentic wellness, backwaters and tropical beauty without the international flight cost — Kerala. Both are incredible. Bali feels like an adventure abroad; Kerala feels like discovering your own country anew.",
    categories: [
      { name: "Beaches", dest1: "Seminyak, Uluwatu, Padang Padang — world-class. Great surf. Beach clubs with infinity pools.", dest2: "Varkala, Kovalam, Marari — quieter, less developed. No beach clubs but more peaceful.", winner: 1 },
      { name: "Culture & Temples", dest1: "Hindu temples at every corner — Tanah Lot, Uluwatu, Tirta Empul. Incense and offerings all day.", dest2: "Fort Kochi heritage, Chinese fishing nets, Kathakali dance, spice markets. Different but equally rich.", winner: 0 },
      { name: "Budget", dest1: "Flight adds ₹15k-₹25k return. But daily costs similar to Kerala. Total trip ₹30k-₹60k+.", dest2: "No flight cost if flying domestic. Total trip ₹15k-₹35k for 5 days including houseboat.", winner: 2 },
      { name: "Wellness & Spa", dest1: "World-class spas in Ubud. 2hr massage ₹600-₹1,200. Yoga retreats everywhere.", dest2: "Authentic Keralan Ayurveda — panchakarma treatments are the real version. Not tourist spa.", winner: 0 },
      { name: "Food", dest1: "Nasi goreng, babi guling, satay, fresh seafood. Lots of international options too.", dest2: "Appam, fish molee, prawn curry, sadya on banana leaf. Unique and delicious.", winner: 0 },
      { name: "Ease of Access", dest1: "International flight required. Visa on arrival (free). Grab app works great.", dest2: "Domestic flight or train. No visa. Familiar environment for Indians.", winner: 2 },
    ],
  },
  {
    slug: "rajasthan-vs-kerala",
    title: "Rajasthan vs Kerala: India's Two Greatest Destinations",
    description: "Rajasthan and Kerala compared on history, nature, food, budget and experience — helping you decide which Indian state deserves your next trip.",
    dest1: {
      name: "Rajasthan",
      emoji: "🏰",
      href: "/blog/rajasthan-7-days",
      pros: [
        "Forts, palaces, desert dunes — unlike anywhere on earth",
        "Jaipur, Jodhpur, Jaisalmer, Udaipur — 4 world-class cities",
        "Camel safari & desert camp overnight experience",
        "Best heritage hotel experiences in India",
        "Great for photography — colours and architecture",
      ],
      cons: [
        "Very hot April-September (40°C+)",
        "Long distances between cities",
        "Heavily touristed in peak season",
      ],
      bestFor: "History lovers, photographers, luxury travellers, first-time India visitors",
      budget: "₹2,000 – ₹15,000/day",
      duration: "7 – 10 days",
    },
    dest2: {
      name: "Kerala",
      emoji: "🌊",
      href: "/blog/kerala-5-days",
      pros: [
        "Backwaters houseboat — one of India's most unique experiences",
        "Best Ayurveda destination in the world",
        "Cooler, greener, more comfortable climate year-round",
        "Less overtly touristy than Rajasthan",
        "Great for couples, wellness and nature",
      ],
      cons: [
        "Less dramatic 'wow' factor than Rajasthan's forts",
        "Requires minimum 5 days for meaningful experience",
        "Monsoon (Jun-Aug) limits some activities",
      ],
      bestFor: "Couples, wellness seekers, nature lovers, food enthusiasts",
      budget: "₹2,500 – ₹12,000/day",
      duration: "5 – 7 days",
    },
    verdict: "Both are extraordinary but completely different. Rajasthan is India at its most dramatic — forts, palaces, camels and desert. Kerala is India at its most lush — backwaters, spice gardens, tea estates and beaches. If it's your first big India trip, Rajasthan. If you've done the north, do Kerala. Ideally — do both.",
    categories: [
      { name: "WOW Factor", dest1: "Jaisalmer fort at sunrise, camel safari at dusk, Udaipur Lake Palace reflection. Jaw-dropping.", dest2: "Houseboat gliding through backwaters at sunrise. Munnar tea estates in mist. Quietly stunning.", winner: 0 },
      { name: "Weather", dest1: "Great Oct-Mar. Brutally hot Apr-Sep. Desert nights can be cold in winter.", dest2: "Pleasant Oct-Feb. Monsoon Jun-Aug (actually beautiful in hills). No extreme heat.", winner: 2 },
      { name: "Food", dest1: "Dal baati churma, laal maas, ker sangri. Rajasthani thali is hearty and unique.", dest2: "Appam, fish curry, sadya, Karimeen. Kerala cuisine is arguably India's most sophisticated.", winner: 2 },
      { name: "Budget", dest1: "Huge range — ₹500 dorms to ₹50,000 palace hotels. Budget trips very doable.", dest2: "Houseboat is expensive. Otherwise reasonable. Mid-range ₹3,000-₹5,000/day.", winner: 1 },
      { name: "Duration Needed", dest1: "7 days minimum to see the Royal Circuit. 10 days to slow down.", dest2: "5 days covers Kochi, Munnar, Alleppey, Varkala. Easier to manage.", winner: 2 },
      { name: "Uniqueness", dest1: "Nothing like Rajasthan anywhere in the world. India at its most iconic.", dest2: "Backwaters are unique to Kerala. Ayurveda tradition found nowhere else in this form.", winner: 0 },
    ],
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
