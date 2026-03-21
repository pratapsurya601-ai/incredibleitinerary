export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  destination: string;
  duration: string;
  pexelsQuery: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kashmir-6-days",
    title: "Kashmir in 6 Days: Srinagar, Gulmarg & Pahalgam (2026)",
    excerpt: "Dal Lake houseboats, Gulmarg snow, Pahalgam pine forests — 4 complete plans with real budgets, houseboat guide and season tips.",
    date: "March 21, 2026", readTime: "14 min", category: "Heaven on Earth",
    tags: ["Kashmir", "6 Days", "Srinagar", "Gulmarg", "Pahalgam", "Houseboat"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    imageAlt: "Dal Lake Kashmir houseboat", featured: true,
    destination: "Kashmir", duration: "6 Days",
    pexelsQuery: "dal lake kashmir houseboat srinagar india",
  },
  {
    slug: "golden-triangle-7-days",
    title: "Golden Triangle in 7 Days: Delhi, Agra & Jaipur (2026)",
    excerpt: "The Taj Mahal, Red Fort, Amber Fort — India's most iconic circuit. 4 complete plans, real budgets, Google Maps routes and the Taj Mahal timing secret most visitors never know.",
    date: "March 21, 2026", readTime: "15 min", category: "Heritage & Mughal",
    tags: ["Golden Triangle", "7 Days", "Taj Mahal", "Delhi", "Jaipur", "Agra", "Itinerary"],
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    imageAlt: "Taj Mahal at sunrise Agra India", featured: false,
    destination: "Golden Triangle", duration: "7 Days",
    pexelsQuery: "taj mahal agra india sunrise marble",
  },
  {
    slug: "rajasthan-7-days",
    title: "Rajasthan in 7 Days: The Royal Circuit That Actually Works (2026)",
    excerpt: "Jaipur · Jodhpur · Jaisalmer · Udaipur — 4 complete plans with real budgets, Google Maps routes, and the routing mistake that ruins most Rajasthan trips.",
    date: "March 20, 2026", readTime: "15 min", category: "Heritage & Culture",
    tags: ["Rajasthan", "7 Days", "Jaipur", "Udaipur", "Heritage", "Itinerary"],
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    imageAlt: "Amber Fort Jaipur Rajasthan at sunrise", featured: false,
    destination: "Rajasthan", duration: "7 Days",
    pexelsQuery: "amber fort jaipur rajasthan india architecture",
  },
  {
    slug: "kerala-5-days",
    title: "Kerala in 5 Days: Backwaters, Hills & Beach (2026)",
    excerpt: "Kochi · Munnar · Alleppey · Varkala — 4 complete plans with real budgets, houseboat guide, Google Maps routes and the mistake that ruins most Kerala trips.",
    date: "March 21, 2026", readTime: "14 min", category: "Backwaters & Hills",
    tags: ["Kerala", "5 Days", "Houseboat", "Alleppey", "Munnar", "Itinerary"],
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    imageAlt: "Kerala backwaters houseboat at sunset", featured: false,
    destination: "Kerala", duration: "5 Days",
    pexelsQuery: "kerala backwaters houseboat india alleppey",
  },
  {
    slug: "goa-3-days",
    title: "Goa in 3 Days: The Only Itinerary Guide You Need (Budget to Luxury, 2026)",
    excerpt: "4 complete plans — Budget, Couple, Party, Relaxed — with real timings, actual costs, Google Maps routes, and the one thing every first-timer gets wrong.",
    date: "March 19, 2026", readTime: "14 min", category: "Beach & Coast",
    tags: ["Goa", "3 Days", "Budget Travel", "Couples", "Itinerary"],
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=800&q=80",
    imageAlt: "Palolem Beach Goa turquoise water", featured: false,
    destination: "Goa", duration: "3 Days",
    pexelsQuery: "goa beach india palm trees turquoise water",
  },
  {
    slug: "varanasi-3-days",
    title: "Varanasi in 3 Days: Ghats, Ganga Aarti & the Ganges (2026)",
    excerpt: "The most intense city in India — Ganga Aarti, morning boat on the Ganges, Kashi Vishwanath Temple, Sarnath. What to expect and what stays with you.",
    date: "March 21, 2026", readTime: "12 min", category: "Oldest Living City",
    tags: ["Varanasi", "3 Days", "Ganga Aarti", "Ganges", "Sarnath", "Ghats"],
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    imageAlt: "Varanasi ghats Ganges river sunset", featured: false,
    destination: "Varanasi", duration: "3 Days",
    pexelsQuery: "varanasi ghats ganges river india sunrise",
  },
  {
    slug: "andaman-5-days",
    title: "Andaman Islands in 5 Days: Havelock, Neil & Port Blair (2026)",
    excerpt: "Radhanagar Beach, scuba diving, Neil Island, Cellular Jail — 4 complete plans with real budgets, ferry guide and the island mistake most tourists make.",
    date: "March 21, 2026", readTime: "13 min", category: "Asia's Best Beach",
    tags: ["Andaman", "5 Days", "Havelock", "Radhanagar Beach", "Scuba Diving", "Neil Island"],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    imageAlt: "Radhanagar Beach Havelock Island Andaman", featured: false,
    destination: "Andaman Islands", duration: "5 Days",
    pexelsQuery: "andaman islands beach turquoise water india havelock",
  },
  {
    slug: "leh-ladakh-7-days",
    title: "Leh Ladakh in 7 Days: The Complete Road Trip Guide (2026)",
    excerpt: "Pangong Lake, Nubra Valley, Khardung La — 4 plans with acclimatisation guide, fly vs drive, permits and real budgets. India's #1 bucket list trip.",
    date: "March 21, 2026", readTime: "16 min", category: "Bucket List Trip",
    tags: ["Ladakh", "7 Days", "Pangong Lake", "Nubra Valley", "Bike Trip", "Road Trip"],
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
    imageAlt: "Pangong Lake Ladakh blue water mountains", featured: false,
    destination: "Leh Ladakh", duration: "7 Days",
    pexelsQuery: "pangong lake ladakh india blue mountains",
  },
  {
    slug: "manali-5-days",
    title: "Manali in 5 Days: Solang Valley, Rohtang Pass & Old Manali (2026)",
    excerpt: "Snow sports, mountain cafes, Rohtang Pass and the Old Manali secret most tourists miss — 4 plans for budget, couples, groups and adventure.",
    date: "March 21, 2026", readTime: "13 min", category: "Hill Station",
    tags: ["Manali", "5 Days", "Solang Valley", "Rohtang Pass", "Old Manali", "Snow"],
    image: "https://images.unsplash.com/photo-1580289143286-f80b2fd4ac08?w=800&q=80",
    imageAlt: "Manali mountains snow Himachal Pradesh", featured: false,
    destination: "Manali", duration: "5 Days",
    pexelsQuery: "manali himachal pradesh snow mountains india",
  },
  {
    slug: "coorg-3-days",
    title: "Coorg in 3 Days: Coffee Estates, Abbey Falls & Raja's Seat (2026)",
    excerpt: "The most popular weekend trip from Bangalore — misty hills, coffee estates, Dubare Elephant Camp and Abbey Falls. 4 plans with real costs and estate stay guide.",
    date: "March 21, 2026", readTime: "12 min", category: "Weekend Trip",
    tags: ["Coorg", "3 Days", "Abbey Falls", "Coffee Estate", "Bangalore Weekend", "Karnataka"],
    image: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=800&q=80",
    imageAlt: "Coorg coffee plantation Karnataka misty hills", featured: false,
    destination: "Coorg", duration: "3 Days",
    pexelsQuery: "coorg coffee plantation karnataka india green hills",
  },
  {
    slug: "rishikesh-haridwar-3-days",
    title: "Rishikesh & Haridwar in 3 Days: Rafting, Ganga Aarti & Beatles Ashram (2026)",
    excerpt: "White water rafting, Ganga Aarti at Har Ki Pauri, Beatles Ashram and Kunjapuri sunrise — the most accessible spiritual + adventure destination from Delhi.",
    date: "March 21, 2026", readTime: "13 min", category: "Spiritual + Adventure",
    tags: ["Rishikesh", "Haridwar", "3 Days", "Rafting", "Ganga Aarti", "Beatles Ashram"],
    image: "https://images.unsplash.com/photo-1609766934887-3b4e0a8a62a0?w=800&q=80",
    imageAlt: "Rishikesh Ganga river ghats Haridwar", featured: false,
    destination: "Rishikesh & Haridwar", duration: "3 Days",
    pexelsQuery: "rishikesh ganges river india ghats bridge",
  },
  {
    slug: "jibhi-tirthan-valley-3-days",
    title: "Jibhi & Tirthan Valley in 3 Days: Himachal's Hidden Gem (2026)",
    excerpt: "Hidden waterfalls, trout fishing, wooden villages and Great Himalayan National Park — the Himachal secret most tourists never find. Trending heavily in 2026.",
    date: "March 21, 2026", readTime: "11 min", category: "Hidden Gem",
    tags: ["Jibhi", "Tirthan Valley", "3 Days", "Himachal", "GHNP", "Offbeat"],
    image: "https://images.unsplash.com/photo-1585087905632-6e3af9e60baf?w=800&q=80",
    imageAlt: "Jibhi Tirthan Valley Himachal Pradesh hidden village", featured: false,
    destination: "Jibhi & Tirthan Valley", duration: "3 Days",
    pexelsQuery: "himachal pradesh village mountains forest river india",
  },
  {
    slug: "hampi-3-days",
    title: "Hampi in 3 Days: Vijayanagara Ruins, Boulders & Hippie Island (2026)",
    excerpt: "India's most dramatic ruin landscape — 1,600 monuments, world-class bouldering, and the most laid-back island café scene in South India.",
    date: "March 21, 2026", readTime: "13 min", category: "Heritage",
    tags: ["Hampi", "3 Days", "Karnataka", "Ruins", "Bouldering", "Hippie Island"],
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    imageAlt: "Hampi Vijayanagara ruins boulders Karnataka", featured: false,
    destination: "Hampi", duration: "3 Days",
    pexelsQuery: "hampi ruins karnataka india ancient temple boulders",
  },
  {
    slug: "spiti-valley-7-days",
    title: "Spiti Valley in 7 Days: Key Monastery, Chandratal Lake & Pin Valley (2026)",
    excerpt: "The cold desert valley connecting Manali to Shimla. Ancient Buddhist monasteries, lunar landscapes, Chandratal Moon Lake and the most remote road in Himachal.",
    date: "March 21, 2026", readTime: "15 min", category: "Mountain Circuit",
    tags: ["Spiti Valley", "7 Days", "Key Monastery", "Chandratal", "Pin Valley", "Himachal"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Spiti Valley Key Monastery mountain Himachal Pradesh", featured: false,
    destination: "Spiti Valley", duration: "7 Days",
    pexelsQuery: "spiti valley monastery himachal pradesh india mountains",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
