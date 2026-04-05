"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import { trackEvent } from "@/lib/analytics";

// ── QUIZ DATA ──────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: "region",
    emoji: "🌍",
    question: "Where are you dreaming of going?",
    subtitle: "Pick a region — this shapes your results",
    options: [
      { id: "india",       emoji: "🇮🇳", label: "India",                  sub: "Domestic trip" },
      { id: "se_asia",     emoji: "🌴", label: "Southeast Asia",           sub: "Thailand, Bali, Singapore, Vietnam" },
      { id: "middle_east", emoji: "🏙️", label: "Middle East & Islands",    sub: "Dubai, Maldives, Oman" },
      { id: "europe",      emoji: "🗺️", label: "Europe & East Asia",       sub: "Paris, Rome, Tokyo, Barcelona" },
    ],
  },
  {
    id: "vibe",
    emoji: "🌈",
    question: "What's your ideal trip vibe?",
    subtitle: "Pick the one that excites you most",
    options: [
      { id: "beach",   emoji: "🏖️", label: "Beach & Chill",     sub: "Sun, sand, seafood" },
      { id: "culture", emoji: "🏛️", label: "History & Culture",  sub: "Forts, temples, stories" },
      { id: "nature",  emoji: "🌿", label: "Nature & Mountains", sub: "Valleys, treks, views" },
      { id: "city",    emoji: "🏙️", label: "City & Food",        sub: "Streets, markets, nightlife" },
    ],
  },
  {
    id: "budget",
    emoji: "💰",
    question: "What's your trip budget per person?",
    subtitle: "Total including flights, stays and food",
    options: [
      { id: "budget",  emoji: "💸", label: "Budget",    sub: "Under ₹25k / $300" },
      { id: "mid",     emoji: "💳", label: "Mid-range", sub: "₹25k–₹75k / $300–$900" },
      { id: "premium", emoji: "💎", label: "Premium",   sub: "₹75k–₹2L / $900–$2,500" },
      { id: "luxury",  emoji: "👑", label: "Luxury",    sub: "₹2L+ / $2,500+" },
    ],
  },
  {
    id: "group",
    emoji: "👥",
    question: "Who are you travelling with?",
    subtitle: "Your group changes everything",
    options: [
      { id: "solo",    emoji: "🧳",    label: "Solo",    sub: "Just me" },
      { id: "couple",  emoji: "💑",    label: "Couple",  sub: "Partner trip" },
      { id: "friends", emoji: "🎉",    label: "Friends", sub: "Group of 3–6" },
      { id: "family",  emoji: "👨‍👩‍👧", label: "Family",  sub: "With kids or parents" },
    ],
  },
  {
    id: "duration",
    emoji: "🗓️",
    question: "How many days do you have?",
    subtitle: "Include travel days",
    options: [
      { id: "short", emoji: "⚡", label: "3–4 Days",  sub: "Quick getaway" },
      { id: "week",  emoji: "📅", label: "5–7 Days",  sub: "Full week" },
      { id: "long",  emoji: "🌍", label: "8–14 Days", sub: "Extended holiday" },
      { id: "open",  emoji: "♾️", label: "15+ Days",  sub: "Long trip" },
    ],
  },
  {
    id: "priority",
    emoji: "✨",
    question: "What matters most to you?",
    subtitle: "Choose your #1 priority",
    options: [
      { id: "food",      emoji: "🍛", label: "Amazing Food",        sub: "Local cuisine & hidden spots" },
      { id: "photo",     emoji: "📸", label: "Jaw-dropping Photos",  sub: "Instagram-worthy moments" },
      { id: "adventure", emoji: "🤿", label: "Adventure Activities", sub: "Diving, trekking, rafting" },
      { id: "relax",     emoji: "😌", label: "Total Relaxation",     sub: "Zero stress, slow pace" },
    ],
  },
];

// ── DESTINATION RESULTS ────────────────────────────────────────────────────────

type Answers = Record<string, string>;

const INDIA      = ["goa","rajasthan","kashmir","kerala","golden_triangle","varanasi","andaman","meghalaya","sikkim","pondicherry","gujarat","amritsar","leh_ladakh","manali","spiti_valley"];
const SE_ASIA    = ["bangkok","bali","singapore","phuket","hoi_an"];
const ME_ISLANDS = ["dubai","maldives"];
const EUROPE_EA  = ["paris","rome","barcelona","santorini","cappadocia","tokyo","kyoto","amsterdam"];

function getResult(answers: Answers) {
  const { region, vibe, budget, group, duration, priority } = answers;

  const scores: Record<string, number> = {};
  [...INDIA, ...SE_ASIA, ...ME_ISLANDS, ...EUROPE_EA].forEach(d => { scores[d] = 0; });

  // REGION boost — destinations in chosen region get a large base advantage
  const regionMap: Record<string, string[]> = {
    india: INDIA, se_asia: SE_ASIA, middle_east: ME_ISLANDS, europe: EUROPE_EA,
  };
  const chosenPool = regionMap[region] ?? [...INDIA, ...SE_ASIA, ...ME_ISLANDS, ...EUROPE_EA];
  chosenPool.forEach(d => { scores[d] += 8; });

  // VIBE scoring
  if (vibe === "beach") {
    scores.goa += 4; scores.andaman += 4; scores.kerala += 2; scores.pondicherry += 3;
    scores.phuket += 5; scores.bali += 4; scores.maldives += 5; scores.hoi_an += 3; scores.santorini += 3;
  }
  if (vibe === "culture") {
    scores.rajasthan += 4; scores.golden_triangle += 4; scores.varanasi += 3; scores.gujarat += 3; scores.amritsar += 3;
    scores.kyoto += 5; scores.tokyo += 3; scores.rome += 4; scores.barcelona += 3; scores.paris += 3;
    scores.amsterdam += 3; scores.cappadocia += 3; scores.bangkok += 3;
  }
  if (vibe === "nature") {
    scores.kashmir += 4; scores.kerala += 3; scores.meghalaya += 4; scores.sikkim += 4;
    scores.leh_ladakh += 5; scores.manali += 4; scores.spiti_valley += 5;
    scores.bali += 3; scores.cappadocia += 4;
  }
  if (vibe === "city") {
    scores.goa += 2; scores.golden_triangle += 2; scores.gujarat += 2;
    scores.bangkok += 5; scores.singapore += 5; scores.dubai += 5; scores.tokyo += 5;
    scores.paris += 4; scores.barcelona += 4; scores.amsterdam += 3;
  }

  // BUDGET scoring
  if (budget === "budget") {
    scores.goa += 3; scores.varanasi += 3; scores.amritsar += 3; scores.pondicherry += 2; scores.manali += 2;
    scores.bangkok += 4; scores.hoi_an += 5; scores.bali += 3;
  }
  if (budget === "mid") {
    scores.kerala += 2; scores.goa += 2; scores.golden_triangle += 2; scores.rajasthan += 2;
    scores.meghalaya += 2; scores.gujarat += 2; scores.leh_ladakh += 2;
    scores.phuket += 2; scores.bali += 2; scores.singapore += 2; scores.bangkok += 2;
    scores.cappadocia += 2; scores.kyoto += 2; scores.rome += 2;
  }
  if (budget === "premium") {
    scores.kashmir += 3; scores.andaman += 3; scores.kerala += 2; scores.sikkim += 2;
    scores.maldives += 3; scores.tokyo += 3; scores.paris += 3; scores.rome += 2;
    scores.barcelona += 2; scores.santorini += 3; scores.dubai += 2;
  }
  if (budget === "luxury") {
    scores.kashmir += 3; scores.rajasthan += 3; scores.andaman += 2;
    scores.maldives += 5; scores.dubai += 4; scores.paris += 3;
    scores.santorini += 4; scores.kyoto += 3; scores.tokyo += 2;
  }

  // GROUP scoring
  if (group === "solo") {
    scores.goa += 2; scores.varanasi += 2; scores.meghalaya += 2; scores.pondicherry += 2; scores.leh_ladakh += 3; scores.spiti_valley += 3;
    scores.bangkok += 4; scores.hoi_an += 4; scores.tokyo += 3; scores.amsterdam += 3;
  }
  if (group === "couple") {
    scores.kashmir += 3; scores.kerala += 3; scores.andaman += 3; scores.pondicherry += 3; scores.sikkim += 2;
    scores.bali += 5; scores.maldives += 5; scores.paris += 5; scores.santorini += 5; scores.kyoto += 3;
  }
  if (group === "friends") {
    scores.goa += 4; scores.andaman += 2; scores.rajasthan += 2; scores.meghalaya += 3; scores.manali += 3;
    scores.phuket += 5; scores.bangkok += 4; scores.bali += 3; scores.dubai += 3; scores.barcelona += 4;
  }
  if (group === "family") {
    scores.golden_triangle += 3; scores.rajasthan += 3; scores.kerala += 2; scores.gujarat += 3; scores.amritsar += 2;
    scores.singapore += 5; scores.dubai += 4; scores.tokyo += 2; scores.rome += 3;
  }

  // DURATION scoring
  if (duration === "short") {
    scores.goa += 3; scores.varanasi += 3; scores.amritsar += 4; scores.pondicherry += 3;
    scores.singapore += 3; scores.dubai += 3; scores.bangkok += 2;
  }
  if (duration === "week") {
    scores.kashmir += 2; scores.kerala += 2; scores.andaman += 2; scores.meghalaya += 3;
    scores.sikkim += 3; scores.gujarat += 2;
    scores.bali += 3; scores.phuket += 2; scores.tokyo += 2; scores.rome += 2;
    scores.barcelona += 2; scores.cappadocia += 3;
  }
  if (duration === "long") {
    scores.rajasthan += 3; scores.golden_triangle += 2; scores.kashmir += 2; scores.gujarat += 3; scores.leh_ladakh += 3;
    scores.tokyo += 3; scores.kyoto += 3; scores.hoi_an += 3; scores.amsterdam += 2; scores.santorini += 2;
  }
  if (duration === "open") {
    scores.rajasthan += 2; scores.golden_triangle += 2; scores.kashmir += 2; scores.meghalaya += 2; scores.leh_ladakh += 2;
    scores.hoi_an += 3; scores.bali += 3; scores.cappadocia += 2; scores.paris += 2;
  }

  // PRIORITY scoring
  if (priority === "food") {
    scores.varanasi += 3; scores.rajasthan += 2; scores.goa += 2; scores.amritsar += 4; scores.gujarat += 3;
    scores.bangkok += 5; scores.hoi_an += 5; scores.tokyo += 5; scores.singapore += 4; scores.rome += 3; scores.barcelona += 3;
  }
  if (priority === "photo") {
    scores.kashmir += 3; scores.rajasthan += 3; scores.meghalaya += 4; scores.sikkim += 3; scores.leh_ladakh += 4; scores.spiti_valley += 4;
    scores.bali += 3; scores.santorini += 5; scores.cappadocia += 5; scores.kyoto += 4; scores.paris += 3;
  }
  if (priority === "adventure") {
    scores.andaman += 4; scores.kashmir += 3; scores.meghalaya += 3; scores.sikkim += 2; scores.leh_ladakh += 4; scores.manali += 3; scores.spiti_valley += 3;
    scores.phuket += 3; scores.bali += 3; scores.cappadocia += 2;
  }
  if (priority === "relax") {
    scores.kerala += 4; scores.andaman += 3; scores.pondicherry += 3; scores.sikkim += 2;
    scores.bali += 5; scores.maldives += 5; scores.santorini += 3; scores.kyoto += 3;
  }

  // Only rank within the chosen region
  const filteredScores = Object.fromEntries(
    Object.entries(scores).filter(([k]) => chosenPool.includes(k))
  );

  const sorted = Object.entries(filteredScores).sort((a, b) => b[1] - a[1]);
  const [top, second, third] = sorted;

  return {
    primary:   DESTINATIONS[top[0]],
    secondary: DESTINATIONS[second[0]],
    tertiary:  DESTINATIONS[third[0]],
    scores:    filteredScores,
  };
}

const DESTINATIONS: Record<string, {
  name: string; emoji: string; tagline: string; why: string;
  duration: string; budget: string; href: string;
  color: string; image: string; tips: string[];
}> = {
  // ── INDIA ────────────────────────────────────────────────────────────────────
  goa: {
    name: "Goa",
    emoji: "🏖️",
    tagline: "India's beach paradise — your perfect match",
    why: "Your love of beach vibes, the budget and group size all point straight to Goa. You'll get the best of both worlds — empty northern beaches in the morning, great food and nightlife in the evening.",
    duration: "3–5 days ideal",
    budget: "₹8,000–₹25,000/person",
    href: "/blog/goa-3-days",
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=800&q=80",
    tips: ["Go to Palolem at 6am — beach is empty", "Eat at Café del Mar, not tourist shacks", "Avoid November–December (peak prices, crowds)"],
  },
  rajasthan: {
    name: "Rajasthan",
    emoji: "🏰",
    tagline: "India's royal heartland — made for you",
    why: "Your taste for culture and history, combined with your budget and timeframe, is a perfect match for Rajasthan. The Jaipur–Jodhpur–Udaipur circuit is India's most rewarding cultural journey.",
    duration: "7–10 days ideal",
    budget: "₹15,000–₹80,000/person",
    href: "/blog/rajasthan-7-days",
    color: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    tips: ["Amber Fort at 6am — no crowds, golden light", "Stay in a heritage haveli, not a chain hotel", "Jodhpur + Jaisalmer are underrated vs Jaipur"],
  },
  kashmir: {
    name: "Kashmir",
    emoji: "🏔️",
    tagline: "Heaven on earth — your dream destination",
    why: "Dal Lake houseboats, Gulmarg snow, Pahalgam pine forests — your answers show someone who wants natural beauty and romance above all. Kashmir delivers all three in six days.",
    duration: "5–7 days ideal",
    budget: "₹18,000–₹90,000/person",
    href: "/blog/kashmir-6-days",
    color: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80",
    tips: ["Dal Lake shikara at 5:30am — you'll have it to yourself", "Visit Oct–Nov for golden chinar trees", "Gondola Phase 2 at Gulmarg — worth every rupee"],
  },
  kerala: {
    name: "Kerala",
    emoji: "🌿",
    tagline: "God's own country — perfect for your style",
    why: "Your relaxation priority and love of nature point directly to Kerala. Houseboat stays on the backwaters, Munnar tea gardens, Varkala cliffs — it's the most varied destination in India for five days.",
    duration: "5–8 days ideal",
    budget: "₹15,000–₹60,000/person",
    href: "/blog/kerala-5-days",
    color: "from-green-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    tips: ["Book houseboat direct — saves ₹2,000–₹3,000 vs agents", "Munnar sunrise at Mattupetty — arrive by 5:45am", "Varkala is better than Kovalam for first-timers"],
  },
  golden_triangle: {
    name: "Golden Triangle",
    emoji: "🕌",
    tagline: "India's iconic circuit — your perfect first trip",
    why: "Delhi, Agra and Jaipur cover everything you said you want — history, culture, incredible food and iconic photographs. The Taj Mahal at sunrise is the single most breathtaking moment in Indian travel.",
    duration: "6–8 days ideal",
    budget: "₹18,000–₹85,000/person",
    href: "/blog/golden-triangle-7-days",
    color: "from-yellow-500 to-amber-600",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    tips: ["Taj Mahal at 6am — you'll have 20 minutes near-alone", "Take the Gatimaan Express to Agra — 1hr 40min", "Skip Jaipur taxis — walk or hire a cycle rickshaw"],
  },
  varanasi: {
    name: "Varanasi",
    emoji: "🕯️",
    tagline: "India's soul — unlike anything else on earth",
    why: "Your priorities point to Varanasi above everywhere else. It's the most intense, overwhelming and unforgettable city in India — and the street food is extraordinary. Every hour reveals something new.",
    duration: "3–4 days ideal",
    budget: "₹6,000–₹20,000/person",
    href: "/blog/varanasi-3-days",
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?w=800&q=80",
    tips: ["Morning Ganges boat at 5:30am — the best thing you'll do in India", "Ganga Aarti — arrive 45 minutes early for a spot", "Blue Lassi Shop — queue for it, worth every minute"],
  },
  andaman: {
    name: "Andaman Islands",
    emoji: "🤿",
    tagline: "India's tropical secret — your adventure paradise",
    why: "Your adventure priority and beach vibe match perfectly with Andaman. Radhanagar Beach (Asia's Best Beach), scuba diving, Neil Island — it's what Maldives wishes it was, at a fraction of the price.",
    duration: "5–7 days ideal",
    budget: "₹18,000–₹75,000/person",
    href: "/blog/andaman-5-days",
    color: "from-teal-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1586359716568-3e1907e4cf9f?w=800&q=80",
    tips: ["Book Makruzz ferry before you arrive — sells out in peak season", "Radhanagar Beach at 5:30am — 2km of empty Asia's Best Beach", "Fly via Chennai — saves ₹5,000–₹8,000 vs Delhi"],
  },
  meghalaya: {
    name: "Meghalaya",
    emoji: "🌿",
    tagline: "Northeast India's hidden paradise — waterfalls & root bridges",
    why: "Your love of nature and photography points to Meghalaya — living root bridges, the clearest river in India at Dawki, and Cherrapunji's dramatic waterfalls. This is what Kasol was 10 years ago.",
    duration: "5–6 days ideal",
    budget: "₹12,000–₹35,000/person",
    href: "/blog/meghalaya-5-days",
    color: "from-emerald-500 to-green-600",
    image: "https://images.unsplash.com/photo-1698429358246-807d8972da9a?w=800&q=80",
    tips: ["Dawki River clarity is real — not Photoshopped", "Skip Elephant Falls, go to Laitlum Canyons instead", "Oct-Nov is the sweet spot — post-monsoon, waterfalls still flowing"],
  },
  sikkim: {
    name: "Sikkim",
    emoji: "🏔️",
    tagline: "Tibetan monasteries and Kangchenjunga — India's favourite state",
    why: "Mountains, monasteries, and the best momos in India. Sikkim combines Himalayan drama with Tibetan culture in a way no other Indian state matches. Pelling with a clear Kangchenjunga view is a top-5 India moment.",
    duration: "5–7 days ideal",
    budget: "₹18,000–₹45,000/person",
    href: "/blog/sikkim-6-days",
    color: "from-blue-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    tips: ["Get the Inner Line Permit online before arrival", "The momos in Gangtok are genuinely life-changing", "Nathula Pass — walk slow, altitude sickness is real"],
  },
  pondicherry: {
    name: "Pondicherry",
    emoji: "🏖️",
    tagline: "India's French Riviera — croissants, beach cafes and Auroville",
    why: "Your couple/relaxation preferences are a perfect match for Pondicherry — French Quarter architecture, boulangeries at dawn, beach cafes, and Auroville. It's the most romantic weekend in South India.",
    duration: "2–4 days ideal",
    budget: "₹6,000–₹22,000/person",
    href: "/blog/pondicherry-3-days",
    color: "from-yellow-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    tips: ["Cycle the French Quarter at 6am before crowds", "Paradise Beach by boat — NOT by road", "Rue Suffren has better food than the Promenade at half the price"],
  },
  gujarat: {
    name: "Gujarat",
    emoji: "🦁",
    tagline: "India's most underrated state — salt deserts, wild lions and legendary food",
    why: "Gujarat is the answer nobody expects but everyone loves. Rann of Kutch under moonlight, the only wild Asiatic lions on Earth at Gir, and street food that makes Mumbai jealous. Pure culture, zero tourist crowds.",
    duration: "7–10 days ideal",
    budget: "₹15,000–₹50,000/person",
    href: "/blog/gujarat-7-days",
    color: "from-orange-400 to-red-500",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80",
    tips: ["Visit during Rann Utsav (Nov–Feb) for the full salt desert experience", "Gujarat is 100% vegetarian — and the food is extraordinary", "Book Gir safari permits 30 days ahead — they sell out"],
  },
  amritsar: {
    name: "Amritsar",
    emoji: "🕌",
    tagline: "Golden Temple, Wagah Border and India's best street food",
    why: "Two days that will change how you see India. The Golden Temple at dawn is the most powerful spiritual experience many travellers have. Add the best street food in the country and Wagah Border theatre.",
    duration: "2–3 days ideal",
    budget: "₹4,000–₹15,000/person",
    href: "/blog/amritsar-2-days",
    color: "from-amber-400 to-yellow-500",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    tips: ["Golden Temple at 4:30am — arrive before sunrise for the Palki Sahib", "Kulcha at Bharawan Da Dhaba is mandatory", "Add Amritsar to any Golden Triangle trip — 6hr train from Delhi"],
  },
  leh_ladakh: {
    name: "Leh Ladakh",
    emoji: "🏔️",
    tagline: "The roof of the world — India's most dramatic landscape",
    why: "Moonscapes at 4,500m, Buddhist monasteries older than nations, the clearest skies you'll ever photograph, and roads that push you to your edge. Your answers point to someone ready for Ladakh's pure, untouched world.",
    duration: "7–10 days ideal",
    budget: "₹20,000–₹65,000/person",
    href: "/blog/leh-ladakh-7-days",
    color: "from-sky-500 to-blue-700",
    image: "https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?w=800&q=80",
    tips: ["Spend 2 full days in Leh acclimatising before any high-altitude driving", "Pangong Lake — stay overnight, not just a day trip", "Permit for Nubra Valley takes 1 day to process — apply on arrival day"],
  },
  manali: {
    name: "Manali",
    emoji: "🌨️",
    tagline: "Snow peaks, adventure and Himachal's favourite escape",
    why: "Rohtang Pass snow, Old Manali's backpacker cafes, Solang Valley paragliding, and Kasol nearby — your adventure-nature combination points squarely at Manali, India's most popular hill escape.",
    duration: "4–6 days ideal",
    budget: "₹10,000–₹35,000/person",
    href: "/blog/manali-5-days",
    color: "from-slate-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1677821374212-8c3e88292b1b?w=800&q=80",
    tips: ["Rohtang Pass permit must be booked online 1 day in advance", "Old Manali vs Mall Road — stay in Old Manali, every time", "May and October are ideal — summer crowd is July–August"],
  },
  spiti_valley: {
    name: "Spiti Valley",
    emoji: "🏜️",
    tagline: "Cold desert monastery circuit — India's most offbeat journey",
    why: "Key Monastery at 4,166m, Chandratal Lake like a sapphire in the Himalayas, and a road trip so remote it rewires your brain. For solo travellers and serious photographers, Spiti is India's ultimate secret.",
    duration: "7–8 days ideal",
    budget: "₹15,000–₹40,000/person",
    href: "/blog/spiti-valley-7-days",
    color: "from-stone-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1673246239376-f3c01a13bab0?w=800&q=80",
    tips: ["June–September only — road is closed rest of year", "Chandratal camping — book a fixed tent camp, not open camping", "Kaza is base camp — acclimatise here before exploring higher villages"],
  },

  // ── SOUTHEAST ASIA ───────────────────────────────────────────────────────────
  bangkok: {
    name: "Bangkok",
    emoji: "🛕",
    tagline: "The world's greatest street food city — endlessly exciting",
    why: "Your city & food priorities make Bangkok the obvious answer. Grand Palace at dawn, then Chatuchak market, then 10 courses of street food for $15 — Bangkok packs more flavour per hour than anywhere else on earth.",
    duration: "3–5 days ideal",
    budget: "$25–$80/day per person",
    href: "/blog/bangkok-4-days",
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
    tips: ["Wat Pho at 8am, Wat Arun at sunset — two temples, one day, perfect", "Yaowarat (Chinatown) for dinner — best street food in the city", "BTS Skytrain covers most sights — avoid taxis in traffic"],
  },
  bali: {
    name: "Bali",
    emoji: "🌸",
    tagline: "The Island of Gods — beauty, temples and perfect surf",
    why: "Tegallalang rice terraces, Uluwatu cliff temple at sunset, Ubud's healing energy, and Seminyak's beach bars — Bali matches every answer you gave. It's the world's most complete travel destination.",
    duration: "5–8 days ideal",
    budget: "$35–$120/day per person",
    href: "/blog/bali-5-days",
    color: "from-green-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    tips: ["Hire a private driver — Wayan or Ketut will change your Bali experience", "Sunrise at Mount Batur is a 4am hike worth every step", "Stay in Ubud for culture, Seminyak for beach — split your trip"],
  },
  singapore: {
    name: "Singapore",
    emoji: "🦁",
    tagline: "Asia's most efficient city — world-class food and Gardens by the Bay",
    why: "Hawker centres with Michelin-starred food stalls, Marina Bay Sands, Gardens by the Bay, and Little India all in one spotless city-state. Your group and family preferences make Singapore the ideal Asia intro.",
    duration: "3–4 days ideal",
    budget: "$80–$200/day per person",
    href: "/blog/singapore-3-days",
    color: "from-red-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    tips: ["Maxwell Food Centre has the best Hainanese chicken rice on Earth", "Gardens by the Bay — go at 7:45pm for the free light show", "MRT goes everywhere — taxis are rarely needed"],
  },
  phuket: {
    name: "Phuket",
    emoji: "🏝️",
    tagline: "Thailand's island paradise — beach parties, diving and longtail boats",
    why: "Phi Phi Island day trips, the Similan Islands for world-class diving, Patong Beach energy, and some of the cheapest great seafood in Asia. Your beach + friends combination is peak Phuket.",
    duration: "5–7 days ideal",
    budget: "$30–$100/day per person",
    href: "/blog/phuket-5-days",
    color: "from-blue-400 to-cyan-500",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
    tips: ["Phi Phi Island by speedboat — book direct at the pier, saves 40%", "Kata Noi Beach is better than Patong for non-party travellers", "Diving season is November–April — visibility is stunning"],
  },
  hoi_an: {
    name: "Hoi An",
    emoji: "🏮",
    tagline: "Vietnam's lantern town — the most charming place in Southeast Asia",
    why: "Ancient town lanterns reflecting on the Thu Bon River at night, the best Cao Lau noodles in the world (only made here), bespoke tailors who can make a suit in 24 hours, and My Son Hindu ruins nearby.",
    duration: "3–5 days ideal",
    budget: "$25–$70/day per person",
    href: "/blog/hoi-an-4-days",
    color: "from-yellow-400 to-amber-500",
    image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800&q=80",
    tips: ["Old Town is car-free — rent a bicycle, it's the only way", "Full Moon Lantern Festival: 14th of every lunar month", "White Rose dumplings at White Rose Restaurant — the original"],
  },

  // ── MIDDLE EAST & ISLANDS ─────────────────────────────────────────────────────
  dubai: {
    name: "Dubai",
    emoji: "🏙️",
    tagline: "The city of superlatives — sky-high luxury and desert adventures",
    why: "Burj Khalifa at sunset, desert dune bashing with dinner under the stars, the world's largest mall with an indoor ski slope, and some of the best-value luxury hotels on earth. Your luxury city answers point here.",
    duration: "3–5 days ideal",
    budget: "$80–$250/day per person",
    href: "/blog/dubai-4-days",
    color: "from-amber-400 to-yellow-500",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    tips: ["Burj Khalifa Level 124 at sunset — book tickets a week ahead", "Old Dubai's Al Fahidi neighbourhood is the antidote to the skyscrapers", "Desert safari: book a private 4WD, not a shared bus tour"],
  },
  maldives: {
    name: "Maldives",
    emoji: "🏝️",
    tagline: "The world's most beautiful overwater bungalows — pure paradise",
    why: "Overwater bungalows with glass floors over a turquoise lagoon, snorkelling with manta rays and whale sharks, bioluminescent beaches at night — the Maldives is the world's ultimate relaxation and romance destination.",
    duration: "5–7 days ideal",
    budget: "$200–$600/day per person",
    href: "/blog/maldives-5-days",
    color: "from-cyan-400 to-teal-600",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    tips: ["Book a local island stay + resort split — cuts cost by 50%", "Whale shark snorkelling is year-round, peak season is Nov–April", "Speedboat transfers cost 3x more at the resort — pre-book externally"],
  },

  // ── EUROPE & EAST ASIA ────────────────────────────────────────────────────────
  paris: {
    name: "Paris",
    emoji: "🗼",
    tagline: "The most romantic city on earth — culture, cuisine and elegance",
    why: "Louvre at opening time when it's still quiet, croissants at a boulangerie with zero English, Montmartre artists' quarter, and Seine river walks that prove every cliché about Paris being beautiful is completely true.",
    duration: "4–6 days ideal",
    budget: "$95–$250/day per person",
    href: "/blog/paris-5-days",
    color: "from-rose-400 to-pink-600",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    tips: ["Louvre — enter through the Richelieu wing to avoid queues at the pyramid", "Marché des Enfants Rouges in Le Marais — best market lunch in the city", "Paris Museum Pass covers 60 museums — worth it if you plan to visit 3+"],
  },
  rome: {
    name: "Rome",
    emoji: "🏛️",
    tagline: "The Eternal City — 3,000 years of history on every street corner",
    why: "Colosseum, Vatican, Pantheon, and the world's best pasta — Rome rewards every type of traveller your answers suggest. Walk between the Forum and Trastevere for dinner and you'll understand why people never leave.",
    duration: "3–5 days ideal",
    budget: "$65–$180/day per person",
    href: "/blog/rome-4-days",
    color: "from-orange-400 to-amber-500",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    tips: ["Colosseum + Roman Forum — book skip-the-line 2 weeks ahead", "Trastevere for dinner, every night — avoid restaurants near tourist sights", "Vatican — book first entry of the day, arrive 30 min before opening"],
  },
  barcelona: {
    name: "Barcelona",
    emoji: "🌊",
    tagline: "Gaudí, tapas, beach and the best nightlife in Europe",
    why: "Sagrada Família's impossible spires, La Boqueria market at 8am, tapas bar-hopping in El Born, and the beach 10 minutes from the Gothic Quarter — Barcelona is architecture, food and energy in one perfect city.",
    duration: "4–5 days ideal",
    budget: "$70–$180/day per person",
    href: "/blog/barcelona-4-days",
    color: "from-yellow-500 to-red-500",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    tips: ["Sagrada Família — towers ticket costs more but gives the best views", "La Boqueria is for tourists; Mercat de Santa Caterina is for locals", "Park Güell free area is fine — paid section is not worth the queue"],
  },
  santorini: {
    name: "Santorini",
    emoji: "🌅",
    tagline: "Blue domes, volcanic sunsets and Aegean infinity pools",
    why: "The world's most photographed sunset in Oia, wine from grapes grown in volcanic ash, boat tours around the caldera — your photo and romance priorities lead directly to Santorini.",
    duration: "4–5 days ideal",
    budget: "$90–$300/day per person",
    href: "/blog/santorini-4-days",
    color: "from-blue-400 to-indigo-500",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    tips: ["Oia sunset — claim a spot on the castle walls 90 minutes early", "Stay in Imerovigli if you want sunset views without Oia crowds", "Rent an ATV — the island's roads are made for it"],
  },
  cappadocia: {
    name: "Cappadocia",
    emoji: "🎈",
    tagline: "Fairy chimneys and hot air balloons — Turkey's most magical landscape",
    why: "Watching 100 hot-air balloons rise over the fairy chimneys of Göreme at dawn is one of the single greatest travel moments on earth. Your photography and nature priorities lead here with no competition.",
    duration: "3–4 days ideal",
    budget: "$55–$150/day per person",
    href: "/blog/cappadocia-3-days",
    color: "from-orange-400 to-rose-500",
    image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&q=80",
    tips: ["Hot air balloon — book Royal Balloon or Butterfly Balloons, never the cheapest", "Rose Valley hike at sunset — no guide needed, 3km loop", "Cave hotel rooms add nothing in price but everything in experience"],
  },
  tokyo: {
    name: "Tokyo",
    emoji: "🗼",
    tagline: "The world's greatest city — neon, ramen, temples and Shibuya",
    why: "Shibuya crossing at rush hour, ramen at 2am in a 6-seat shop, Senso-ji at dawn, teamLab digital art — Tokyo is the most overwhelming and rewarding city on Earth. Your food and city priorities are a perfect match.",
    duration: "5–7 days ideal",
    budget: "$55–$180/day per person",
    href: "/blog/tokyo-5-days",
    color: "from-red-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    tips: ["IC card (Suica) for all transport — never buy individual tickets", "Tsukiji Outer Market at 7am for the best sushi breakfast of your life", "Shinjuku at night — Omoide Yokocho (Memory Lane) for yakitori under the train tracks"],
  },
  kyoto: {
    name: "Kyoto",
    emoji: "⛩️",
    tagline: "Ancient Japan's soul — temples, geishas and bamboo groves",
    why: "Fushimi Inari's 10,000 torii gates at 5:30am, Arashiyama bamboo grove before the crowds, kaiseki dinner in a machiya townhouse — Kyoto is what Japan looked like before modernity. Your culture and photo priorities match perfectly.",
    duration: "4–5 days ideal",
    budget: "$50–$180/day per person",
    href: "/blog/kyoto-4-days",
    color: "from-pink-500 to-rose-600",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    tips: ["Fushimi Inari — go at 5:30am, you'll have it near-alone for 45 minutes", "Gion at 6am — highest chance of seeing a geiko or maiko", "Arashiyama bamboo grove is 15 minutes at 6am, a nightmare at 11am"],
  },
  amsterdam: {
    name: "Amsterdam",
    emoji: "🚲",
    tagline: "Canals, Rembrandt and the most liveable city in Europe",
    why: "Golden Age canal houses, the Rijksmuseum's Rembrandt collection, cycling everywhere, and a solo traveller's dream of independent cafes and the world's most tolerant city. Your culture and city preferences lead here.",
    duration: "3–4 days ideal",
    budget: "$75–$200/day per person",
    href: "/blog/amsterdam-3-days",
    color: "from-orange-400 to-amber-500",
    image: "https://images.unsplash.com/photo-1584003564911-5f8e0c9e4b8b?w=800&q=80",
    tips: ["Rijksmuseum — book first slot of the day, arrive 10 minutes early", "Rent a bike on day 1 — it's the only way to see Amsterdam properly", "Jordaan neighbourhood for dinner — avoid Leidseplein tourist restaurants"],
  },
};

// ── PROGRESS BAR ─────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full h-1 bg-parchment-2 rounded-full overflow-hidden">
      <div
        className="h-full bg-gold transition-all duration-500 ease-out rounded-full"
        style={{ width: `${((current) / total) * 100}%` }}
      />
    </div>
  );
}

// ── RESULT CARD ──────────────────────────────────────────────────────────────

function ResultCard({
  dest, rank, onPlanTrip
}: {
  dest: typeof DESTINATIONS[string]; rank: "primary"|"secondary"|"tertiary"; onPlanTrip: () => void;
}) {
  const isPrimary = rank === "primary";
  return (
    <div className={`rounded-2xl overflow-hidden border-2 ${isPrimary ? "border-gold shadow-xl" : "border-parchment-2"}`}>
      {isPrimary && (
        <div className="bg-gold text-ink text-center text-[0.65rem] tracking-[0.15em] uppercase font-semibold py-2">
          ✦ Your Perfect Match
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[0.62rem] tracking-[0.15em] uppercase text-gold-light mb-1">
            {isPrimary ? "Best match" : rank === "secondary" ? "2nd choice" : "Also great"}
          </p>
          <h3 className="font-serif text-2xl font-light text-white">{dest.emoji} {dest.name}</h3>
        </div>
      </div>
      <div className="p-5 bg-white">
        {isPrimary && (
          <p className="text-sm text-muted font-light leading-relaxed mb-4">{dest.why}</p>
        )}
        <div className="flex gap-3 mb-4 flex-wrap">
          <span className="text-[0.65rem] bg-parchment text-muted px-3 py-1.5 rounded-full">🗓 {dest.duration}</span>
          <span className="text-[0.65rem] bg-parchment text-muted px-3 py-1.5 rounded-full">💰 {dest.budget}</span>
        </div>
        {isPrimary && (
          <div className="mb-4 space-y-1.5">
            {dest.tips.map((tip) => (
              <div key={tip} className="flex items-start gap-2 text-xs text-muted font-light">
                <span className="text-gold mt-0.5 flex-shrink-0">✦</span>{tip}
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-2 flex-wrap">
          <Link href={dest.href}
            className={`flex-1 text-center py-2.5 text-xs font-medium tracking-wide uppercase rounded-[1px] transition-colors ${isPrimary ? "bg-gold text-ink hover:bg-gold-dark hover:text-white" : "bg-parchment text-ink hover:bg-gold/20"}`}>
            Read Full Guide →
          </Link>
          {isPrimary && (
            <button onClick={onPlanTrip}
              className="flex-1 text-center py-2.5 text-xs font-medium tracking-wide uppercase rounded-[1px] border border-teal text-teal hover:bg-teal hover:text-white transition-colors">
              Plan This Trip Free →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── EMAIL CAPTURE ─────────────────────────────────────────────────────────────

function EmailCapture({ destination, onSkip }: { destination: string; onSkip: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { onSkip(); return; }
    setLoading(true);
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: `Quiz - ${destination}` }),
      });
    } catch {}
    setLoading(false);
    setSubmitted(true);
    setTimeout(onSkip, 1800);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">🎉</div>
        <p className="font-serif text-xl text-ink mb-1">You&apos;re on the list!</p>
        <p className="text-sm text-muted font-light">Loading your personalised results...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-gold p-8 text-center max-w-[460px] mx-auto">
      <div className="text-3xl mb-3">📬</div>
      <h3 className="font-serif text-2xl font-light text-ink mb-2">Get your free itinerary</h3>
      <p className="text-sm text-muted font-light mb-6 leading-relaxed">
        Enter your email and we&apos;ll send you a personalised <strong className="text-ink">{destination}</strong> itinerary — real budgets, insider tips, zero tourist traps.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text" placeholder="Your name (optional)" value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-parchment-2 text-sm font-light text-ink focus:outline-none focus:border-gold transition-colors bg-parchment"
        />
        <input
          type="email" placeholder="Your email address" value={email}
          onChange={(e) => setEmail(e.target.value)} required
          className="w-full px-4 py-3 rounded-lg border border-parchment-2 text-sm font-light text-ink focus:outline-none focus:border-gold transition-colors bg-parchment"
        />
        <button type="submit" disabled={loading}
          className="w-full bg-gold text-ink py-3.5 text-sm font-medium tracking-[0.08em] uppercase rounded-[1px] hover:bg-gold-dark hover:text-white transition-colors disabled:opacity-60">
          {loading ? "Sending..." : "Send My Free Itinerary →"}
        </button>
      </form>
      <button onClick={onSkip} className="mt-3 text-xs text-muted hover:text-ink transition-colors underline-offset-2 hover:underline">
        Skip — just show my results
      </button>
      <p className="text-[0.62rem] text-muted/60 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}

// ── MAIN QUIZ COMPONENT ───────────────────────────────────────────────────────

export default function QuizClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(0); // 0 = intro, 1–6 = questions, 7 = email, 8 = results
  const [answers, setAnswers] = useState<Answers>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<ReturnType<typeof getResult> | null>(null);

  const totalQuestions = QUESTIONS.length;
  const currentQ = QUESTIONS[step - 1];
  const isQuestion = step >= 1 && step <= totalQuestions;

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    // Auto-advance after 400ms
    setTimeout(() => {
      const newAnswers = { ...answers, [currentQ.id]: optionId };
      setAnswers(newAnswers);
      setSelected(null);
      if (step === 1) trackEvent("quiz_started");
      if (step === totalQuestions) {
        const r = getResult(newAnswers);
        setResult(r);
        trackEvent("quiz_completed", { destination: r.primary.name });
        setStep(totalQuestions + 1); // email capture
      } else {
        setStep(step + 1);
      }
    }, 380);
  };

  const handleEmailDone = () => setStep(totalQuestions + 2); // results
  const restart = () => { setStep(0); setAnswers({}); setSelected(null); setResult(null); };

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <main className="min-h-screen bg-cream pt-[72px]">

        {/* INTRO */}
        {step === 0 && (
          <div className="max-w-[680px] mx-auto px-6 py-16 text-center">
            <span className="inline-block bg-gold/15 border border-gold/30 text-gold-dark text-[0.65rem] tracking-[0.18em] uppercase font-medium px-4 py-1.5 rounded-full mb-6">
              Takes 60 seconds
            </span>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-light text-ink leading-[1.08] mb-5">
              Where in the world<br />
              <em className="italic text-teal">should you go?</em>
            </h1>
            <p className="text-base text-muted font-light max-w-[440px] mx-auto mb-8 leading-relaxed">
              Answer 6 quick questions and get your perfect destination — India, Southeast Asia, Middle East, Europe or East Asia — with a free personalised itinerary and real insider tips.
            </p>

            {/* What you'll get */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {[
                { icon: "🎯", label: "Destination match", desc: "Scored to your exact preferences" },
                { icon: "📋", label: "Free itinerary", desc: "Day-by-day plan via email" },
                { icon: "💰", label: "Real budget", desc: "Actual costs, no surprises" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-medium text-sm text-ink mb-0.5">{item.label}</p>
                  <p className="text-[0.68rem] text-muted font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <button onClick={() => setStep(1)}
              className="btn-gold text-base px-10 py-4 inline-block">
              Start the Quiz →
            </button>
            <p className="text-xs text-muted mt-4 font-light">30 destinations worldwide · No signup required · Free forever</p>
          </div>
        )}

        {/* QUESTIONS */}
        {isQuestion && currentQ && (
          <div className="max-w-[680px] mx-auto px-6 py-12">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted font-light">Question {step} of {totalQuestions}</span>
                <span className="text-xs text-muted font-light">{Math.round((step / totalQuestions) * 100)}% done</span>
              </div>
              <ProgressBar current={step} total={totalQuestions} />
            </div>

            {/* Question */}
            <div className="text-center mb-10">
              <div className="text-5xl mb-4">{currentQ.emoji}</div>
              <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.4rem)] font-light text-ink mb-2">
                {currentQ.question}
              </h2>
              <p className="text-sm text-muted font-light">{currentQ.subtitle}</p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-3">
              {currentQ.options.map((opt) => (
                <button key={opt.id} onClick={() => handleSelect(opt.id)}
                  className={`group flex flex-col items-center gap-2 p-5 rounded-2xl border-2 text-center transition-all duration-200 ${
                    selected === opt.id
                      ? "border-gold bg-gold/10 scale-[1.02] shadow-md"
                      : "border-parchment-2 bg-white hover:border-gold hover:shadow-md hover:-translate-y-0.5"
                  }`}>
                  <span className="text-3xl">{opt.emoji}</span>
                  <span className="font-medium text-sm text-ink">{opt.label}</span>
                  <span className="text-[0.68rem] text-muted font-light">{opt.sub}</span>
                </button>
              ))}
            </div>

            {/* Back */}
            {step > 1 && (
              <div className="text-center mt-6">
                <button onClick={() => setStep(step - 1)}
                  className="text-xs text-muted hover:text-ink transition-colors">
                  ← Back
                </button>
              </div>
            )}
          </div>
        )}

        {/* EMAIL CAPTURE */}
        {step === totalQuestions + 1 && result && (
          <div className="max-w-[680px] mx-auto px-6 py-16">
            <div className="text-center mb-8">
              <div className="text-5xl mb-3">{result.primary.emoji}</div>
              <h2 className="font-serif text-[1.8rem] font-light text-ink mb-2">
                Your match is <em className="italic text-teal">{result.primary.name}!</em>
              </h2>
              <p className="text-sm text-muted font-light">{result.primary.tagline}</p>
            </div>
            <EmailCapture destination={result.primary.name} onSkip={handleEmailDone} />
          </div>
        )}

        {/* RESULTS */}
        {step === totalQuestions + 2 && result && (
          <div className="max-w-[900px] mx-auto px-6 py-12">

            {/* Result header */}
            <div className="text-center mb-10">
              <span className="inline-block bg-gold/15 border border-gold/30 text-gold-dark text-[0.65rem] tracking-[0.18em] uppercase font-medium px-4 py-1.5 rounded-full mb-4">
                Your Results
              </span>
              <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-ink mb-3">
                You should go to <em className="italic text-teal">{result.primary.name}</em>
              </h1>
              <p className="text-base text-muted font-light max-w-[480px] mx-auto">{result.primary.tagline}</p>
            </div>

            {/* Match score bar */}
            <div className="bg-white rounded-2xl border border-parchment-2 p-6 mb-8">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-4">Your destination compatibility scores</p>
              <div className="space-y-3">
                {Object.entries(result.scores)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([key, score]) => {
                    const dest = DESTINATIONS[key];
                    const max = Math.max(...Object.values(result.scores));
                    const pct = Math.round((score / max) * 100);
                    return (
                      <div key={key} className="flex items-center gap-3">
                        <span className="text-lg flex-shrink-0">{dest.emoji}</span>
                        <span className="text-xs font-medium text-ink w-28 flex-shrink-0">{dest.name}</span>
                        <div className="flex-1 h-2 bg-parchment-2 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gold rounded-full transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted w-10 text-right">{pct}%</span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Top 3 destination cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <ResultCard dest={result.primary}   rank="primary"   onPlanTrip={() => setModalOpen(true)} />
              <ResultCard dest={result.secondary} rank="secondary" onPlanTrip={() => setModalOpen(true)} />
              <ResultCard dest={result.tertiary}  rank="tertiary"  onPlanTrip={() => setModalOpen(true)} />
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <button onClick={() => setModalOpen(true)}
                className="flex flex-col items-center gap-2 p-5 bg-ink rounded-xl text-center hover:bg-ink/90 transition-colors">
                <span className="text-2xl">✦</span>
                <span className="font-medium text-sm text-white">Get Free Custom Itinerary</span>
                <span className="text-[0.65rem] text-white/50 font-light">We plan it for you in 24hrs</span>
              </button>
              <Link href={result.primary.href}
                className="flex flex-col items-center gap-2 p-5 bg-gold rounded-xl text-center hover:bg-gold-dark transition-colors">
                <span className="text-2xl">📖</span>
                <span className="font-medium text-sm text-ink">Read Full {result.primary.name} Guide</span>
                <span className="text-[0.65rem] text-ink/60 font-light">Free blog post</span>
              </Link>
              <Link href="/shop"
                className="flex flex-col items-center gap-2 p-5 bg-parchment rounded-xl border-2 border-parchment-2 text-center hover:border-gold transition-colors">
                <span className="text-2xl">📄</span>
                <span className="font-medium text-sm text-ink">Download PDF Itinerary</span>
                <span className="text-[0.65rem] text-muted font-light">From ₹149 · Instant download</span>
              </Link>
            </div>

            {/* Restart */}
            <div className="text-center">
              <button onClick={restart} className="text-xs text-muted hover:text-ink transition-colors underline-offset-2 hover:underline">
                ↺ Take the quiz again
              </button>
            </div>

          </div>
        )}

      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
