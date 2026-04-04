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
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
