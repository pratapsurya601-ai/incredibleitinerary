import type { BlogPost } from "./blog";

// ── Interfaces ────────────────────────────────────────────────────────────────

export interface SeasonInfo {
  name: string;
  months: string;
  emoji: string;
  description: string;
  type: "best" | "good" | "avoid";
}

export interface PackingList {
  essentials: string[];
  clothing: string[];
  toiletries: string[];
  electronics: string[];
  specific: string[];
}

export interface DestinationMeta {
  bestMonths: string[];
  avoidMonths: string[];
  seasons: SeasonInfo[];
  climate: string;
  packing: PackingList;
  romanticSpots: string[];
  couplesActivities: string[];
  couplesNote: string;
  budgetPerCouplePerDay: { budget: number; mid: number; luxury: number; currency: string };
}

// ── Destination-specific overrides (keyed on destination field, lowercase) ────

const OVERRIDES: Record<string, Partial<DestinationMeta>> = {
  kashmir: {
    bestMonths: ["April", "May", "June", "September", "October"],
    avoidMonths: ["January", "February"],
    seasons: [
      { name: "Spring / Early Summer", months: "Apr – Jun", emoji: "🌸", description: "Dal Lake blooms, Gulmarg meadows turn lush green. Perfect 15–28°C. Ideal for sightseeing and photography.", type: "best" },
      { name: "Autumn", months: "Sep – Oct", emoji: "🍂", description: "Arguably the best time. Chinar trees blaze gold and red. Crisp air, crowd-free. Dal Lake at its most beautiful.", type: "best" },
      { name: "Summer", months: "Jul – Aug", emoji: "🌤️", description: "Warm 25–35°C. Pahalgam and Sonamarg are gorgeous. Some rain in August. Good overall.", type: "good" },
      { name: "Winter", months: "Nov – Mar", emoji: "❄️", description: "Gulmarg gets 3 m+ snow — peak ski season. Srinagar near 0°C. Roads to Pahalgam may close.", type: "good" },
    ],
    climate: "Alpine continental. Valley summers are pleasant; higher altitudes get heavy winter snow.",
    romanticSpots: ["Shikara ride on Dal Lake at sunset", "Gulmarg meadow walks", "Nishat Bagh & Shalimar Bagh gardens", "Pahalgam riverside", "Betaab Valley", "Gondola ride to Kongdori"],
    couplesActivities: ["Stay in a heritage houseboat on Dal Lake", "Gondola ride at Gulmarg", "Shikara ride at dawn", "Horse trek to Betaab Valley", "Pony ride in Pahalgam", "Old City Srinagar stroll"],
    couplesNote: "Kashmir is one of India's most romantic destinations. A heritage houseboat on Dal Lake is the quintessential couples experience — book well in advance.",
    budgetPerCouplePerDay: { budget: 3000, mid: 7000, luxury: 20000, currency: "₹" },
  },
  goa: {
    bestMonths: ["November", "December", "January", "February", "March"],
    avoidMonths: ["June", "July", "August"],
    seasons: [
      { name: "Peak Season", months: "Nov – Feb", emoji: "☀️", description: "Perfect 25–32°C, clear skies, calm sea. Beach shacks open, water sports running. Christmas and NYE are spectacular but pricey.", type: "best" },
      { name: "Shoulder Season", months: "Mar – May", emoji: "🌤️", description: "Warming up to 35–38°C. Fewer crowds, 20–30% cheaper. May gets pre-monsoon humidity.", type: "good" },
      { name: "Monsoon", months: "Jun – Sep", emoji: "🌧️", description: "Heavy rain, dangerous sea. Most beach shacks close. Goa turns lush green — unique for nature lovers but not beach trips.", type: "avoid" },
      { name: "Post-Monsoon", months: "Oct", emoji: "🌤️", description: "Goa reawakens. Lush greenery, fewer crowds, great deals. Beaches reopen.", type: "good" },
    ],
    climate: "Tropical monsoon. Winters are dry and pleasant; summers hot and humid; June–September brings heavy monsoon.",
    romanticSpots: ["Palolem Beach sunset", "Fort Aguada at golden hour", "Chapora Fort viewpoint", "Dudhsagar Falls", "Fontainhas Latin Quarter", "Anjuna market at dusk"],
    couplesActivities: ["Beach shack dinner with live music", "Sunset cruise on the Mandovi River", "Spice plantation tour", "Scooter rides through Fontainhas", "Dudhsagar waterfall hike", "Night market at Arpora"],
    couplesNote: "Stay in South Goa (Palolem, Agonda) for quieter, more romantic vibes. North Goa suits party-seekers. A private beach villa is worth the splurge.",
    budgetPerCouplePerDay: { budget: 2500, mid: 6000, luxury: 18000, currency: "₹" },
  },
  rajasthan: {
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["May", "June", "July"],
    seasons: [
      { name: "Winter", months: "Oct – Feb", emoji: "☀️", description: "Ideal 15–25°C. All forts and palaces accessible. Jaisalmer desert camping is magical. Peak season with peak prices.", type: "best" },
      { name: "Spring (Holi)", months: "Mar – Apr", emoji: "🌸", description: "Warm 25–35°C. Holi in March is spectacular in Jaipur. Crowds thin out, prices drop.", type: "good" },
      { name: "Monsoon", months: "Jul – Sep", emoji: "🌧️", description: "30–35°C. Udaipur and Pushkar are beautiful post-rain. 30–40% cheaper. Not ideal for desert zones.", type: "good" },
      { name: "Summer", months: "May – Jun", emoji: "🔥", description: "Extremely hot 40–48°C. Not recommended. Jaisalmer can hit 50°C.", type: "avoid" },
    ],
    climate: "Arid and semi-arid. Extreme heat in summers, comfortable winters. The Thar Desert drives extreme temperatures.",
    romanticSpots: ["Lake Pichola boat ride (Udaipur)", "Jaisalmer sand dunes at sunset", "Mehrangarh Fort Jodhpur", "City Palace rooftop Udaipur", "Amber Fort light show Jaipur", "Pushkar lakeside ghats"],
    couplesActivities: ["Palace hotel stay in Udaipur", "Camel safari at Jaisalmer dunes overnight", "Lake Pichola sunset boat ride", "Hot air balloon over Jaipur", "Cooking class in a Jaipur haveli", "Candlelit dinner at a rooftop restaurant"],
    couplesNote: "Rajasthan is India's most romantic heritage destination. Udaipur's palaces and Jaisalmer's desert camps are bucket-list experiences for couples.",
    budgetPerCouplePerDay: { budget: 3000, mid: 8000, luxury: 25000, currency: "₹" },
  },
  kerala: {
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["June", "July"],
    seasons: [
      { name: "Winter", months: "Oct – Feb", emoji: "☀️", description: "Ideal 22–33°C. Backwaters, beaches, and hill stations all at their best. The golden window.", type: "best" },
      { name: "Summer", months: "Mar – May", emoji: "☀️", description: "Hot 30–38°C. Hill stations like Munnar are pleasant while beaches get hot.", type: "good" },
      { name: "Monsoon (Ayurveda Season)", months: "Jun – Sep", emoji: "🌧️", description: "Kerala's famous rains. Backwaters swell beautifully. Prime Ayurveda season with special resort packages.", type: "good" },
    ],
    climate: "Tropical monsoon with two monsoon seasons. Winters are ideal across the entire state.",
    romanticSpots: ["Alleppey houseboat at dawn", "Munnar tea gardens at sunrise", "Varkala cliff sunset", "Kumarakom backwater canals", "Periyar Lake boat ride", "Thekkady spice trail walks"],
    couplesActivities: ["Private houseboat stay on Alleppey backwaters", "Couple's Ayurveda massage at a resort", "Munnar tea estate sunrise walk", "Periyar tiger reserve boat safari", "Cliff-top dinner in Varkala", "Kathakali performance"],
    couplesNote: "A private houseboat on Alleppey backwaters is one of India's most intimate experiences for couples. Book a premium houseboat with a sun deck for the best experience.",
    budgetPerCouplePerDay: { budget: 2500, mid: 6000, luxury: 18000, currency: "₹" },
  },
  manali: {
    bestMonths: ["May", "June", "September", "October"],
    avoidMonths: ["January", "February"],
    seasons: [
      { name: "Summer", months: "May – Jun", emoji: "🌸", description: "Perfect 15–25°C. Rohtang Pass and Solang Valley accessible. Most popular season for road trips.", type: "best" },
      { name: "Autumn", months: "Sep – Oct", emoji: "🍂", description: "Crisp 10–20°C. Post-monsoon clear skies. Stunning Himalayan views, apple orchards in full harvest.", type: "best" },
      { name: "Monsoon", months: "Jul – Aug", emoji: "🌧️", description: "Heavy rain, landslide risk on Rohtang. Solang Valley and Naggar are safe and lush. Not ideal for Spiti/Leh side trips.", type: "good" },
      { name: "Winter", months: "Nov – Apr", emoji: "❄️", description: "Manali town accessible but cold 0–10°C. Rohtang and Rohtang Pass closed Dec–Apr. Ski at Solang Valley.", type: "good" },
    ],
    climate: "Alpine with dramatic seasonal shifts. Summers are cool and pleasant; winters bring heavy snowfall at higher altitudes.",
    romanticSpots: ["Hadimba Temple forest walk", "Solang Valley meadows", "Old Manali cafes by the river", "Rohtang Pass snow fields", "Naggar Castle viewpoint", "Jogini Waterfall hike"],
    couplesActivities: ["Snow play at Rohtang Pass or Solang", "Riverside café dinner in Old Manali", "Apple orchard walk in autumn", "River rafting on Beas River", "Stay at a wooden cottage with mountain views", "Bike ride to Naggar"],
    couplesNote: "Manali is perfect for adventure-loving couples. A wooden cottage with mountain views beats any hotel — book one in Old Manali or Jagatsukh village.",
    budgetPerCouplePerDay: { budget: 2500, mid: 5500, luxury: 15000, currency: "₹" },
  },
  "leh ladakh": {
    bestMonths: ["June", "July", "August", "September"],
    avoidMonths: ["January", "February", "March"],
    seasons: [
      { name: "Summer", months: "Jun – Sep", emoji: "☀️", description: "The only safe window. 15–30°C in Leh. All roads open including Nubra Valley and Pangong Lake. Book hotels months ahead.", type: "best" },
      { name: "Shoulder (Late Autumn)", months: "Oct", emoji: "🍂", description: "October is still doable but Nubra and some passes may close. Fewer crowds, cheaper. Cold 0–15°C.", type: "good" },
      { name: "Winter", months: "Nov – May", emoji: "❄️", description: "Most roads closed. Leh town reachable by air. Chadar Trek on frozen Zanskar River is unique but extreme.", type: "avoid" },
    ],
    climate: "Cold desert climate. Extremely dry with low oxygen at 3,500 m altitude. Huge temperature swings between day and night.",
    romanticSpots: ["Pangong Tso at sunrise", "Nubra Valley sand dunes at sunset", "Magnetic Hill viewpoint", "Thiksey Monastery at dawn", "Hemis Monastery courtyard", "Leh Palace with mountain backdrop"],
    couplesActivities: ["Sunrise at Pangong Tso lake", "Camel safari in Nubra Valley", "Monastery circuit by bike", "Camping under stars in Nubra", "River rafting on Zanskar", "Try momos and thukpa in Leh market"],
    couplesNote: "Leh Ladakh is a high-altitude adventure — acclimatise for 2 days before any excursion. Pangong Lake at sunrise is one of India's most spectacular couple moments.",
    budgetPerCouplePerDay: { budget: 3500, mid: 8000, luxury: 22000, currency: "₹" },
  },
  meghalaya: {
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["June", "July", "August"],
    seasons: [
      { name: "Winter", months: "Oct – Feb", emoji: "☀️", description: "Ideal 12–22°C. Waterfalls still flowing, living root bridges reachable, minimal rain. Best for photography.", type: "best" },
      { name: "Spring", months: "Mar – Apr", emoji: "🌸", description: "Warm 20–28°C. Pre-monsoon greenery. Some waterfalls begin picking up flow. Nongkrem dance festival in April.", type: "good" },
      { name: "Monsoon", months: "May – Sep", emoji: "🌧️", description: "World's highest rainfall. Waterfalls at maximum power but treacherous trails. Root bridges may be slippery. Only for adventurous.", type: "avoid" },
    ],
    climate: "Subtropical highland. Meghalaya means 'abode of clouds'. Cherrapunji–Mawsynram area receives the world's highest rainfall.",
    romanticSpots: ["Living root bridge at Nongriat", "Dawki river (clear turquoise water)", "Nohkalikai Falls viewpoint", "Shillong Peak sunrise", "Ward's Lake Shillong", "Mawlynnong village (Asia's cleanest)"],
    couplesActivities: ["Trek to the double-decker root bridge", "Boat ride on crystal-clear Dawki river", "Sunrise at Shillong Peak", "Village walk in Mawlynnong", "Waterfall hopping near Cherrapunji", "Local Khasi meal experience"],
    couplesNote: "Meghalaya is India's most underrated romantic escape. The trek to the double-decker root bridge is hard work but the reward is extraordinary.",
    budgetPerCouplePerDay: { budget: 2000, mid: 4500, luxury: 12000, currency: "₹" },
  },
  varanasi: {
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["June", "July"],
    seasons: [
      { name: "Winter", months: "Oct – Feb", emoji: "☀️", description: "Ideal 12–25°C. Ghat life, Ganga Aarti, and morning boat rides are most magical in cool weather.", type: "best" },
      { name: "Dev Deepawali (November)", months: "Nov Full Moon", emoji: "🪔", description: "Over a million diyas light the ghats on the full moon of Kartik. Once-in-a-lifetime experience.", type: "best" },
      { name: "Monsoon", months: "Jun – Sep", emoji: "🌧️", description: "Lower ghats flood. The river swells dramatically. Unique visuals but limited access to many ghats.", type: "avoid" },
    ],
    climate: "Humid subtropical. Winters are cool and pleasant; summers scorching at 40°C+.",
    romanticSpots: ["Ganga Aarti from a boat", "Manikarnika Ghat at dusk", "Assi Ghat sunrise boat ride", "Kashi Vishwanath temple lanes", "Sarnath ruins at dawn", "Rooftop café with Ganga view"],
    couplesActivities: ["Private boat ride at sunrise on the Ganga", "Ganga Aarti ceremony", "Narrow lane walk in old city", "Silk weaving workshop", "Dev Deepawali (November full moon) experience", "Sarnath day trip"],
    couplesNote: "Varanasi is profoundly spiritual, not conventionally romantic — but watching the Ganga Aarti from a private boat at dusk is a deeply moving shared experience.",
    budgetPerCouplePerDay: { budget: 1500, mid: 4000, luxury: 12000, currency: "₹" },
  },
  "golden triangle": {
    bestMonths: ["October", "November", "December", "January", "February"],
    avoidMonths: ["May", "June"],
    seasons: [
      { name: "Winter", months: "Oct – Feb", emoji: "☀️", description: "Ideal 10–25°C. Taj Mahal at its stunning best in crisp air. All forts and palaces accessible.", type: "best" },
      { name: "Monsoon", months: "Jul – Sep", emoji: "🌧️", description: "Green surroundings, dramatic clouds around Agra. 30–35°C. Some sites temporarily close but 30% cheaper.", type: "good" },
      { name: "Summer", months: "Mar – Jun", emoji: "🔥", description: "Gets very hot 35–45°C. April–June not recommended, especially Agra. Delhi's summer is brutal.", type: "avoid" },
    ],
    climate: "Semi-arid. Delhi and Agra have extreme seasons — harsh summers and mild winters. Jaipur is slightly drier.",
    romanticSpots: ["Taj Mahal at sunrise (couples bench)", "Amber Fort Jaipur by night", "Agra Fort sunset terrace", "Old Delhi Jama Masjid lanes", "Fatehpur Sikri at golden hour", "Jaipur Hawa Mahal rooftop café"],
    couplesActivities: ["Taj Mahal sunrise visit", "Camel ride near Jaipur", "Rooftop dinner with Taj Mahal view", "Old Delhi food trail", "Amber Fort sound & light show", "Shopping for gems in Jaipur"],
    couplesNote: "The Golden Triangle is India's most classic couple itinerary. Book a rooftop hotel with Taj Mahal view in Agra — the sunrise silhouette is unforgettable.",
    budgetPerCouplePerDay: { budget: 3000, mid: 7000, luxury: 20000, currency: "₹" },
  },
  andaman: {
    bestMonths: ["November", "December", "January", "February", "March", "April"],
    avoidMonths: ["June", "July", "August"],
    seasons: [
      { name: "Best Season", months: "Nov – Apr", emoji: "☀️", description: "Ideal 25–32°C. Crystal-clear waters, calm sea, perfect snorkelling and diving visibility. Peak season (Dec–Jan) is priciest.", type: "best" },
      { name: "Pre-Monsoon", months: "May", emoji: "🌤️", description: "Still mostly clear. Sea may get rough toward end of May. Last chance before closures.", type: "good" },
      { name: "Monsoon", months: "Jun – Sep", emoji: "🌧️", description: "Heavy rain, rough seas. Ferry services limited or cancelled. Many resorts close. Not recommended.", type: "avoid" },
    ],
    climate: "Tropical maritime. Consistently warm year-round at 23–32°C. The Andaman Sea brings distinct monsoon and dry seasons.",
    romanticSpots: ["Radhanagar Beach (Asia's best beach)", "Havelock Island snorkelling at Elephant Beach", "Neil Island Laxmanpur Beach sunset", "Cellular Jail light show", "Glass-bottom boat ride", "Barren Island volcano view"],
    couplesActivities: ["Snorkelling at Elephant Beach", "Sunset at Radhanagar Beach", "Glass-bottom boat tour", "Kayaking through mangroves", "Sea-walking experience", "Private beach picnic on Neil Island"],
    couplesNote: "The Andaman Islands are India's most secluded beach paradise. Radhanagar Beach on Havelock Island is Asia's finest — arrive early to claim a quiet spot.",
    budgetPerCouplePerDay: { budget: 3500, mid: 8000, luxury: 22000, currency: "₹" },
  },
};

// ── Country-based season/budget templates ────────────────────────────────────

function getCountryTemplate(country: string): Partial<DestinationMeta> {
  const c = (country || "India").toLowerCase();

  if (c === "thailand") {
    return {
      bestMonths: ["November", "December", "January", "February", "March"],
      avoidMonths: ["September", "October"],
      seasons: [
        { name: "Cool & Dry Season", months: "Nov – Feb", emoji: "☀️", description: "Ideal 25–32°C. Low humidity, clear skies. Best all-round time to visit Thailand.", type: "best" },
        { name: "Hot Season", months: "Mar – May", emoji: "🔥", description: "Very hot 35–40°C. Songkran water festival in April. Fewer tourists and better prices.", type: "good" },
        { name: "Monsoon Season", months: "Jun – Oct", emoji: "🌧️", description: "Heavy rain, especially Sep–Oct. Gulf coast gets some rain; Andaman coast closes. Budget deals available.", type: "avoid" },
      ],
      climate: "Tropical with three seasons. Best from November to February.",
      budgetPerCouplePerDay: { budget: 3000, mid: 8000, luxury: 25000, currency: "₹" },
    };
  }
  if (c === "japan") {
    return {
      bestMonths: ["March", "April", "October", "November"],
      avoidMonths: ["July", "August"],
      seasons: [
        { name: "Cherry Blossom (Sakura)", months: "Late Mar – Apr", emoji: "🌸", description: "Most romantic and photogenic. Sakura in full bloom. Book accommodation 6+ months ahead.", type: "best" },
        { name: "Autumn Foliage", months: "Oct – Nov", emoji: "🍂", description: "Red and gold maple leaves. Crisp 15–25°C. Second most popular season.", type: "best" },
        { name: "Summer", months: "Jun – Aug", emoji: "☀️", description: "Hot 30–35°C and humid. Rainy season in June. Festivals in July–August.", type: "good" },
        { name: "Winter", months: "Dec – Feb", emoji: "❄️", description: "Cold 0–10°C. Snow in Hokkaido. Fewer crowds, excellent prices.", type: "good" },
      ],
      climate: "Temperate with four distinct seasons. Spring and autumn are the most popular.",
      budgetPerCouplePerDay: { budget: 8000, mid: 18000, luxury: 50000, currency: "₹" },
    };
  }
  if (c === "italy") {
    return {
      bestMonths: ["April", "May", "September", "October"],
      avoidMonths: ["July", "August"],
      seasons: [
        { name: "Spring", months: "Apr – May", emoji: "🌸", description: "Ideal 18–24°C. Wildflowers bloom. Fewer crowds than summer. Perfect for sightseeing.", type: "best" },
        { name: "Autumn", months: "Sep – Oct", emoji: "🍂", description: "Comfortable 20–26°C. Harvest season, wine festivals. Best balance of weather and crowds.", type: "best" },
        { name: "Summer", months: "Jun – Aug", emoji: "☀️", description: "Hot 28–35°C. Peak crowds and prices everywhere. Amalfi Coast and coastal towns are busiest.", type: "good" },
        { name: "Winter", months: "Nov – Mar", emoji: "❄️", description: "Cool 5–12°C. Quietest time, best prices. Great for museums and city art.", type: "good" },
      ],
      climate: "Mediterranean in the south; alpine in the north. Best in spring and early autumn.",
      budgetPerCouplePerDay: { budget: 7000, mid: 15000, luxury: 40000, currency: "₹" },
    };
  }
  if (c === "indonesia" || c === "bali") {
    return {
      bestMonths: ["April", "May", "June", "July", "August", "September"],
      avoidMonths: ["January", "February"],
      seasons: [
        { name: "Dry Season", months: "Apr – Oct", emoji: "☀️", description: "Ideal 26–32°C. Low humidity. Excellent for beaches, surfing, and temple visits.", type: "best" },
        { name: "Wet Season", months: "Nov – Mar", emoji: "🌧️", description: "Short afternoon showers. Still warm 27–30°C. 20–30% cheaper. Rice terraces are lush.", type: "good" },
      ],
      climate: "Tropical with distinct dry (Apr–Oct) and wet (Nov–Mar) seasons. Year-round warm at 27–32°C.",
      budgetPerCouplePerDay: { budget: 2500, mid: 7000, luxury: 22000, currency: "₹" },
    };
  }
  if (c === "uae" || c === "dubai") {
    return {
      bestMonths: ["November", "December", "January", "February", "March"],
      avoidMonths: ["June", "July", "August"],
      seasons: [
        { name: "Winter", months: "Nov – Mar", emoji: "☀️", description: "Ideal 18–28°C. Outdoor attractions, beaches, and desert safaris at their best.", type: "best" },
        { name: "Spring / Autumn", months: "Apr, Oct", emoji: "🌤️", description: "Warm 28–35°C. Fewer crowds, lower prices. Outdoor activities with some heat.", type: "good" },
        { name: "Summer", months: "May – Sep", emoji: "🔥", description: "Extremely hot 40–48°C, very humid. Outdoor activities not feasible. Indoor malls and indoor attractions only.", type: "avoid" },
      ],
      climate: "Arid desert. Very hot summers, mild winters. Almost no rain.",
      budgetPerCouplePerDay: { budget: 6000, mid: 18000, luxury: 60000, currency: "₹" },
    };
  }
  if (c === "maldives") {
    return {
      bestMonths: ["November", "December", "January", "February", "March", "April"],
      avoidMonths: ["June", "July"],
      seasons: [
        { name: "Dry Season", months: "Nov – Apr", emoji: "☀️", description: "Ideal 26–31°C. Calm turquoise sea, minimal wind. Best for snorkelling and diving visibility.", type: "best" },
        { name: "Monsoon Season", months: "May – Oct", emoji: "🌧️", description: "Rough seas and rain, especially Jun–Aug. Some resorts offer steep discounts.", type: "avoid" },
      ],
      climate: "Tropical maritime. Consistently warm 27–31°C with a clear dry season (Nov–Apr).",
      budgetPerCouplePerDay: { budget: 15000, mid: 40000, luxury: 120000, currency: "₹" },
    };
  }
  if (c === "greece") {
    return {
      bestMonths: ["May", "June", "September", "October"],
      avoidMonths: ["July", "August"],
      seasons: [
        { name: "Late Spring", months: "May – Jun", emoji: "🌸", description: "Warm 22–27°C. Fewer tourists than peak summer. Wildflowers, clear sea, best prices.", type: "best" },
        { name: "Early Autumn", months: "Sep – Oct", emoji: "🍂", description: "Still warm 24–28°C. Crowds drop significantly after late August. The sea is warmest.", type: "best" },
        { name: "Summer", months: "Jul – Aug", emoji: "☀️", description: "Peak season. Very hot 32–38°C on islands. Packed with tourists. Book everything months ahead.", type: "good" },
      ],
      climate: "Mediterranean. Hot dry summers and mild wet winters.",
      budgetPerCouplePerDay: { budget: 5000, mid: 12000, luxury: 35000, currency: "₹" },
    };
  }

  // ── Default: India ──
  return {
    bestMonths: ["October", "November", "December", "January", "February", "March"],
    avoidMonths: ["June", "July"],
    seasons: [
      { name: "Winter", months: "Oct – Mar", emoji: "☀️", description: "Ideal weather across most of India. Clear skies, pleasant temperatures. Best time for most destinations.", type: "best" },
      { name: "Monsoon", months: "Jun – Sep", emoji: "🌧️", description: "Green landscapes, fewer crowds and cheaper prices. Some areas (beaches, deserts) are less accessible.", type: "good" },
      { name: "Summer", months: "Apr – May", emoji: "🔥", description: "Hot 35–45°C in the plains. Hill stations become ideal. Coastal destinations are bearable.", type: "good" },
    ],
    climate: "Varies by region. Most of India follows a tropical pattern with hot summers, monsoon rains, and mild winters.",
    budgetPerCouplePerDay: { budget: 2000, mid: 5000, luxury: 15000, currency: "₹" },
  };
}

// ── Category-based packing lists ──────────────────────────────────────────────

const BASE_PACKING = {
  essentials: [
    "Valid ID / Passport (and photocopies)",
    "Travel insurance documents",
    "Hotel confirmations (offline copy)",
    "Cash + 2 bank cards",
    "Power bank (20,000 mAh+)",
    "Universal travel adapter",
    "Phone charger + cables",
  ],
  toiletries: [
    "Sunscreen SPF 50+",
    "Lip balm with SPF",
    "Insect repellent",
    "Hand sanitiser",
    "Basic first-aid kit (paracetamol, bandages, antiseptic)",
    "Prescription medicines + extra supply",
    "Rehydration sachets (ORS)",
  ],
  electronics: [
    "Smartphone (offline maps downloaded)",
    "Camera or action cam",
    "Power bank",
    "Universal adapter",
    "Noise-cancelling earphones",
  ],
};

function getCategoryPacking(category: string, country: string): PackingList {
  const lower = (category || "").toLowerCase();
  const isIndia = !country || country === "India";

  if (lower.includes("beach") || lower.includes("island")) {
    return {
      ...BASE_PACKING,
      clothing: ["Swimwear (2–3 sets)", "Beach cover-ups / sarong", "Light linen trousers", "Flip-flops", "Comfortable walking sandals", "Sun hat / wide-brimmed cap", "Light cardigan for evenings / AC"],
      specific: ["Reef-safe sunscreen SPF 50+", "Waterproof dry bag", "Snorkel set (optional, cheaper to rent)", "Rash guard for water sports", "Compact microfibre beach towel"],
    };
  }
  if (lower.includes("mountain") || lower.includes("trek") || lower.includes("hill") || lower.includes("alpine") || lower.includes("snow")) {
    return {
      ...BASE_PACKING,
      clothing: ["Thermal inner layers (2 sets)", "Fleece mid-layer", "Waterproof windproof outer jacket", "Trekking trousers (2 pairs)", "Warm beanie hat + gloves", "Thick hiking socks (3+ pairs)", "Moisture-wicking base t-shirts"],
      specific: ["Trekking boots (well broken-in)", "Trekking poles", "High-altitude sunscreen SPF 70+", "Altitude sickness medicine (Diamox — consult doctor)", "Hydration bladder / water purifier tabs", "Sleeping bag liner"],
    };
  }
  if (lower.includes("heritage") || lower.includes("spiritual") || lower.includes("pilgrim") || lower.includes("temple")) {
    return {
      ...BASE_PACKING,
      clothing: ["Modest full-length trousers (2–3 pairs)", "Long-sleeved shirts or kurtas", "Dupatta or scarf (required at many sites)", "Comfortable walking shoes", "Slip-on sandals for temple entry", "Breathable cotton clothes"],
      specific: ["Small day backpack", "Reusable water bottle", "Temple scarf / stole (women)", "Compact umbrella", "Offline map with heritage sites", "Guidebook or audio guide app"],
    };
  }
  if (lower.includes("wildlife") || lower.includes("safari") || lower.includes("jungle") || lower.includes("forest")) {
    return {
      ...BASE_PACKING,
      clothing: ["Khaki / olive / muted-colour shirts (no bright colours)", "Full-length trousers", "Lightweight fleece for early mornings", "Warm layer for dawn safaris", "Sturdy hiking shoes or boots"],
      specific: ["Binoculars (8×42 recommended)", "Camera with telephoto lens", "Head torch / headlamp", "Strong DEET insect repellent", "Dull-coloured sun hat"],
    };
  }
  if (lower.includes("city") || lower.includes("urban")) {
    return {
      ...BASE_PACKING,
      clothing: ["Mix of casual and smart-casual outfits", "Comfortable walking shoes", "Light jacket for evenings / AC", "1–2 smart outfits for restaurants", "Packable rain jacket"],
      specific: ["Crossbody anti-theft bag", "Local SIM card or eSIM", "Metro / transit card holder", "Compact umbrella", "Portable WiFi (international)"],
    };
  }
  if (lower.includes("desert")) {
    return {
      ...BASE_PACKING,
      clothing: ["Loose light-coloured long-sleeve shirts (sun protection)", "Full-length breathable trousers", "Warm layer for cold desert nights", "Closed-toe shoes (for dunes)", "Light scarf for dust / sand"],
      specific: ["Sunglasses (UV400 polarised)", "Lip balm (extreme SPF)", "Dust mask or buff", "Camelback / hydration pack (3L+)", "Headlamp for night camps"],
    };
  }

  // Default
  return {
    ...BASE_PACKING,
    clothing: ["Comfortable t-shirts (4–5)", "Trousers / jeans (2–3 pairs)", "Light jacket or cardigan", "Walking shoes + sandals", "Packable rain jacket"],
    specific: ["Reusable water bottle", "Day backpack (20–25 L)", "Compact umbrella", isIndia ? "Local SIM card (Airtel/Jio)" : "International eSIM or roaming plan", "Offline maps downloaded"],
  };
}

// ── Category-based romantic spots / couples activities ──────────────────────

function getCategoryRomance(
  destination: string,
  category: string,
  country: string
): Pick<DestinationMeta, "romanticSpots" | "couplesActivities" | "couplesNote"> {
  const lower = (category || "").toLowerCase();
  const dest = destination || "this destination";

  if (lower.includes("beach") || lower.includes("island")) {
    return {
      romanticSpots: [`${dest} main beach at sunset`, "Clifftop viewpoints", "Secluded cove beaches", "Beach bar at golden hour", "Seafront promenade"],
      couplesActivities: ["Sunset beach walk", "Beachside seafood dinner", "Snorkelling together", "Sunset boat cruise", "Morning swim at a quiet cove"],
      couplesNote: `${dest} is ideal for a beach escape. Arrive early to claim a quiet spot before the crowds arrive — mornings are magical.`,
    };
  }
  if (lower.includes("mountain") || lower.includes("hill") || lower.includes("alpine")) {
    return {
      romanticSpots: [`${dest} valley viewpoint at dawn`, "Meadow trails above the treeline", "Mountain café with fireplace", "Riverside camping spot", "Sunset from the highest accessible point"],
      couplesActivities: ["Sunrise hike to a viewpoint", "Cosy café day with mountain views", "Riverside picnic", "Stargazing at night (no light pollution)", "Local village walk"],
      couplesNote: `Mountain destinations like ${dest} are romantic for their quiet beauty. Book a cosy wooden cottage or homestay for the most intimate experience.`,
    };
  }
  if (lower.includes("heritage") || lower.includes("mughal") || lower.includes("palace")) {
    return {
      romanticSpots: [`${dest} main monument at sunrise`, "Palace gardens in the late afternoon", "Heritage bazaar alleyways at dusk", "Rooftop restaurant with fort views", "Hidden courtyard of the old city"],
      couplesActivities: ["Heritage walk through the old city", "Rooftop dinner with monument views", "Local craft workshop", "Horse-drawn carriage ride", "Sunset visit to the main fort or palace"],
      couplesNote: `${dest}'s heritage sites are stunning at sunrise when you have them almost to yourself. Book a boutique heritage hotel inside the old city for authenticity.`,
    };
  }
  if (lower.includes("wildlife") || lower.includes("safari")) {
    return {
      romanticSpots: ["Safari viewpoint at dawn", "Jungle lodge porch at sunset", "Riverbed with wildlife", "Fire-lit outdoor dinner", "Night sky above the reserve"],
      couplesActivities: ["Shared safari jeep at dawn", "Outdoor candlelit dinner at the lodge", "Guided nature walk", "Bird-watching at sunrise", "Sunset drive through the reserve"],
      couplesNote: `Wildlife destinations have an extraordinary shared experience to offer couples. The intimacy of spotting wildlife together — especially the big cats — is unforgettable.`,
    };
  }
  if (lower.includes("spiritual") || lower.includes("temple") || lower.includes("pilgrim")) {
    return {
      romanticSpots: ["Main temple at sunrise before crowds", "River ghat at dawn", "Ancient alleyways of the old city", "Rooftop with skyline views", "Garden near the main shrine"],
      couplesActivities: ["Sunrise temple visit", "Riverside ghat walk at dusk", "Local food trail in old bazaar", "Boat ride on the river", "Evening aarti ceremony"],
      couplesNote: `${dest} is profoundly spiritual. Experiencing the evening aarti ceremony together is a deeply moving shared moment that stays with you.`,
    };
  }

  // Default
  return {
    romanticSpots: [`${dest} viewpoint at sunset`, "Old city lanes in the evening", "Local café or rooftop restaurant", "Main landmark at golden hour", "Waterfront area"],
    couplesActivities: ["Sunset viewpoint visit", "Local food trail", "Day trip to nearby nature spot", "Evening out at a rooftop restaurant", "Explore the old city on foot"],
    couplesNote: `${dest} offers a wonderful mix of experiences for couples. Mix sightseeing with slow mornings at a café and evening strolls through the old city.`,
  };
}

// ── Main export function ──────────────────────────────────────────────────────

export function getDestinationMeta(post: BlogPost): DestinationMeta {
  const destKey = post.destination.toLowerCase();
  const country = post.country || "India";

  // 1. Check specific overrides
  const override = OVERRIDES[destKey];

  // 2. Get country template for gaps
  const countryTemplate = getCountryTemplate(country);

  // 3. Get category-based packing
  const packing = getCategoryPacking(post.category, country);

  // 4. Get category-based romance data
  const romance = getCategoryRomance(post.destination, post.category, country);

  // 5. Merge (override > countryTemplate > generated defaults)
  return {
    bestMonths: override?.bestMonths ?? countryTemplate.bestMonths ?? ["October", "November", "December", "January", "February", "March"],
    avoidMonths: override?.avoidMonths ?? countryTemplate.avoidMonths ?? ["June", "July"],
    seasons: override?.seasons ?? countryTemplate.seasons ?? [
      { name: "Best Season", months: "Oct – Mar", emoji: "☀️", description: "Most pleasant weather. Ideal for sightseeing and outdoor activities.", type: "best" },
      { name: "Monsoon", months: "Jun – Sep", emoji: "🌧️", description: "Rain and humidity. Some attractions may be less accessible.", type: "good" },
    ],
    climate: override?.climate ?? countryTemplate.climate ?? `${post.destination} has a varied climate. The best time to visit is typically October through March.`,
    packing,
    romanticSpots: override?.romanticSpots ?? romance.romanticSpots,
    couplesActivities: override?.couplesActivities ?? romance.couplesActivities,
    couplesNote: override?.couplesNote ?? romance.couplesNote,
    budgetPerCouplePerDay: override?.budgetPerCouplePerDay ?? countryTemplate.budgetPerCouplePerDay ?? { budget: 2000, mid: 5000, luxury: 15000, currency: "₹" },
  };
}
