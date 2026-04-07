import React from "react";
import Link from "next/link";
import type { GeneratedPost } from "@/data/generated-posts";

// ---------------------------------------------------------------------------
// Shared type — mirrors what GeneratedPostContent passes in
// ---------------------------------------------------------------------------
export interface ParentMeta {
  slug: string;
  destination: string;
  country: string;
  duration: string;
  category: string;
  image: string;
}

// ---------------------------------------------------------------------------
// BEST TIME DATA — keyed by destination name
// ---------------------------------------------------------------------------
const BEST_TIME_DATA: Record<string, string> = {
  Kashmir:
    "Oct–Nov and Mar–Jun. Oct-Nov for golden chinar forests and fewer crowds. Apr-Jun for blooming gardens and Dal Lake. Jul-Aug is monsoon — heavy rain, occasional flooding. Dec-Feb is frozen — suitable only for skiing at Gulmarg (expect -10°C to -15°C). Peak: May-Jun and Oct. Off-peak: Jan-Feb (cheapest, 40% lower). Festivals: Shikara Festival (Mar), Tulip Garden (Apr), Eid (varies).",
  Rajasthan:
    "Oct–Mar. Winter (Oct-Feb) is the sweet spot — 15–25°C days, comfortable nights. Apr-Jun sees 42–48°C heat, extremely harsh. Monsoon (Jul-Sep) is actually pleasant in some areas like Udaipur but Thar desert roads flood. Dec-Jan has cold nights (5°C) but beautiful days. Pushkar Camel Fair: Nov. Desert Festival (Jaisalmer): Jan-Feb.",
  Goa: "Nov–Feb. Perfect beach weather — 28–32°C, sunny, dry. Carnival in Feb is spectacular. Oct and Mar are shoulder months (10-15% cheaper, fewer crowds). Monsoon Jun-Sep makes beaches dangerous — rough seas, closed beach shacks, heavy daily rain but lush green hills. Summer Apr-May is hot and humid.",
  Kerala:
    "Sep–Mar. Backwaters are best Oct-Feb (pleasant 28°C, low humidity). Munnar tea estates peak Aug-Sep (misty, green) but roads can be tricky. Avoid Jun-Aug in coastal areas (heavy SW monsoon). Kerala is one of few Indian destinations that's beautiful in light monsoon (Sep-Oct, NE monsoon). Onam festival: Aug-Sep.",
  Manali:
    "May–Jun and Sep–Oct. Apr is shoulder (some snow on passes, Rohtang closed). Jul-Aug: Rohtang open but crowded and rainy. Oct has golden poplars but Rohtang closes by end of month. Dec-Mar: -20°C, only for winter sports enthusiasts. Solang Valley skiing: Jan-Mar.",
  "Leh Ladakh":
    "Jun–Sep ONLY for first-timers. Roads open mid-May (Manali-Leh Highway). Jul-Aug is peak — all passes open, manageable altitude. Jun and Sep are ideal — less crowded, clear skies, cooler. Oct: Zanskar frozen, cold, very few tourists (good for photography). Winter (Nov-Apr) is for experienced trekkers only.",
  Bali: "Apr–Oct (dry season). Jul-Aug is peak — most crowded and expensive. Apr-Jun and Sep-Oct are best — fewer crowds, 20% cheaper. Nov-Mar is wet season — afternoon rain showers, some flooding in low areas. Ubud is good year-round. Nyepi (Balinese New Year, Day of Silence): Mar, unusual but fascinating.",
  Bangkok:
    "Nov–Feb. Cool and dry — 25–32°C, low humidity. Mar-Apr is hot (38°C+) but Songkran Festival (Thai New Year, water festival) in Apr is worth it. May-Oct: monsoon season, heavy afternoon rains but still very travelable. High season Dec-Jan: 20-30% higher hotel prices.",
  Tokyo:
    "Mar-Apr (cherry blossom) and Oct-Nov (autumn leaves). These are peak — crowded and expensive. Jun-Jul is rainy season but budget-friendly, 30% cheaper. Aug is hot humid typhoon season (but festive with fireworks). Dec-Feb: cold (5°C), dry, clear skies, fewer crowds, cheapest flights.",
  Rome: "Apr-May and Sep-Oct. Spring and autumn — 18-26°C, manageable crowds. Jun-Aug: 35°C heat, very crowded, long queues at Vatican/Colosseum. Book skip-the-line tickets 2-3 months ahead. Dec-Jan: cold (8°C) but Christmas markets and no queues at museums.",
  Dubai:
    "Nov-Mar. Perfect desert winter — 20-28°C. Dubai Shopping Festival: Jan-Feb. Apr and Oct are shoulder months (warm but manageable). May-Sep: 40-48°C, extremely hot. Avoid unless you'll be in air conditioning 90% of the time.",
  // ── Additional Indian Destinations ──────────────────────────────────────
  Shimla:
    "Mar-Jun and Sep-Nov. Spring (Mar-May) is ideal — rhododendrons bloom, 15-25°C. Summer (Apr-Jun) is peak family season. Sep-Nov has cleaner air, Himalayan views, apple harvest. Dec-Jan: 0–5°C nights, possible snow at Kufri — Christmas and New Year hugely crowded and overpriced. Jul-Aug: heavy rain, occasional landslides on mountain roads.",
  Rishikesh:
    "Sep-Nov and Feb-Jun. Rafting season: Mar-Jun (good water level and weather) and Sep-Nov (post-monsoon best flow). Feb-Mar: yoga and festival season, comfortable 15-25°C. Avoid Jul-Aug — Ganga in flood, rafting suspended, roads slippery. Dec-Jan: cold (5-10°C nights) but peaceful and spiritual — good for ashram stays.",
  Varanasi:
    "Oct-Mar. Perfect winter — 12-22°C days, cool evenings ideal for ghat walks and aarti. Nov has Dev Deepawali (80,000 lamps on the ghats — spectacular). Feb-Mar has Holi preparations and the Mahasivaratri procession. Apr-May: building heat but manageable. Jun-Sep: 35°C+ heat and humidity, pre-monsoon oppressive. The ghats are always alive regardless of season.",
  Darjeeling:
    "Apr-May and Oct-Nov. Spring (Apr-May): rhododendrons in bloom, clear Kanchenjunga views. Autumn (Oct-Nov): crystal-clear skies, best mountain views, golden light. Dec-Jan: 0-5°C, possible frost — the toy train steams through misty hills beautifully. Monsoon Jun-Sep: very heavy fog — Kanchenjunga invisible for weeks. The tea estate flush happens Apr-May (first flush) and Oct-Nov (second flush).",
  Andaman:
    "Oct-May. The Andaman Sea is at its calmest and clearest Oct-Apr — perfect for snorkeling and diving. Dec-Jan is peak (most expensive, book 3 months ahead). Mar-May: hot (32-34°C) but still excellent for water activities. Jun-Sep: southwest monsoon — rough seas, ferries cancelled regularly, Havelock guesthouses half-closed. Radhanagar Beach's 2am phosphorescent plankton visible Oct-Feb.",
  Coorg:
    "Oct-Mar. Best weather and coffee harvest season. Oct-Jan: coffee berries ripen, estate walks through flowering plants, 15-25°C, dry trails. Feb-Mar: Coorg in bloom, warming up. Apr-Jun: pre-monsoon heat, pleasant for water activities at Dubare. Jun-Sep: very heavy monsoon (Coorg gets 2,500mm rain), lush but leeches everywhere on trails — forest walks inadvisable.",
  Dharamshala:
    "Mar-Jun and Sep-Nov. Spring (Mar-May): rhododendrons, moderate trekking weather, Tibetan New Year (Losar, Feb-Mar). Summer (Apr-Jun): popular but never overwhelmingly hot (25-30°C) — great for Triund trek. Oct-Nov: crystal-clear post-monsoon views of Dhauladhar range. Dec-Feb: snow at McLeod Ganj above 1,500m — cold (0-10°C) but beautiful. Monsoon Jul-Aug: heavy rain, fog, Triund trail slippery.",
  Udaipur:
    "Oct-Mar. Desert winters are ideal — 15-28°C days, clear skies over Lake Pichola. Diwali (Oct-Nov) lights up the city palace and ghats dramatically. Dec-Jan: very pleasant (12-22°C) but accommodations 30-40% pricier. Apr-Jun: summer heat 38-44°C; go early morning or evening. Monsoon Jul-Sep: Pichola and Fateh Sagar Lakes fill up — beautiful blue water framed by Aravalli hills, significantly fewer tourists.",
  Jaipur:
    "Oct-Feb. The Pink City is best in winter — 12-25°C, all forts comfortable. Pushkar Camel Fair nearby in Nov. January: hot air balloon festival, Jaipur Literature Festival (Jan-Feb). Mar: Holi celebrations are spectacular at heritage properties. Apr-Jun: 42-45°C heat — Amber Fort at 7am only, rest is indoor shopping. Monsoon: rain cools the city, fewer tourists, green Aravalli hills, some heritage property deals.",
  Hampi:
    "Oct-Feb. Cold stone requires cool weather to explore — 15-28°C ideal. Oct: post-monsoon Tungabhadra is full and scenic. Nov-Jan: perfect sightseeing, sunrise over the boulder landscape is extraordinary. Feb-Mar: shoulder season, slightly warmer. Apr-Jun: brutal (40-44°C) on bare granite boulders — avoid. Monsoon: roads to the island (Virupapura Gadde) may flood; the river crossing by coracle becomes dangerous.",
  Pondicherry:
    "Nov-Feb. Post-northeast-monsoon Pondicherry is perfect — 22-28°C, dry, French Quarter walking comfortable. Dec-Jan: peak season (30-40% premium), Christmas in the French Quarter is atmospheric. Mar-Apr: warming up but still pleasant. May-Sep: hot 32-36°C. Oct-Nov: northeast monsoon brings heavy rain specifically to Pondy (while Chennai doesn't flood as much) — a week or two of genuine downpours.",
  Ooty:
    "Apr-Jun and Sep-Dec. Summer (Apr-Jun) is prime — cool 15-22°C when South India bakes below. Ooty in May is packed with school holidays but the weather is excellent. Sep-Nov: post-monsoon clarity, tea estates look lush. Dec-Mar: 'winter' at 5-10°C nights — very cold, need warm clothes. The Nilgiri Mountain Railway is beautiful year-round; monsoon (Jul-Aug) adds mist to the train journey but the hills are gorgeous.",
  Mysore:
    "Oct-Jan. Peak season is Oct-Nov: Dasara (10-day festival, entire city illuminated, procession on Vijayadasami) is Mysore's signature — the palace glows with 97,000 light bulbs. Post-Dasara Nov-Jan: cool (15-28°C), comfortable exploring. Apr-Jun: pleasant hill station weather (Mysore sits at 770m). Monsoon Jul-Sep: light rain, beautiful green — not Goa-level monsoon. Very manageable year-round unlike coastal/mountain destinations.",
  Spiti:
    "Jun-Sep ONLY. Spiti is cut off by snow Oct-May. Rohtang Pass opens mid-May, Kunzum La by early June. July-Aug: peak season, all passes open, homestays busy. June and September: fewer tourists, same scenery. Chandratal Lake camping (3-4,500m) is only viable Jun-Sep. Winter (Oct-May): only accessible via Kinnaur (Shimla route stays open longer) — extreme cold (-20 to -30°C), minimal infrastructure, for experienced winter trekkers only.",
  Amritsar:
    "Oct-Mar. Golden Temple at dawn year-round is transcendent, but comfort matters. Oct-Feb: crisp 10-22°C days, comfortable for the temple complex and Wagah Border ceremony. Dec-Jan: foggy mornings (the fog is actually beautiful at Har Mandir Sahib). Apr-Jun: heat builds to 42°C but the Golden Temple is open 24 hours — early morning or late evening only. Monsoon Jul-Sep: manageable rain, few tourists, temple less crowded.",
  Nainital:
    "Mar-Jun and Sep-Nov. Spring (Mar-May): rhododendrons, pleasant 15-25°C, boating on Naini Lake. May-Jun: peak family season — crowded but all activities open. Sep-Oct: post-monsoon clarity, crystal lake, Himalayan views. Nov: quieter, slightly cold, great value. Dec-Feb: 0-8°C nights, frost possible — tourist facilities partially closed. Monsoon Jul-Aug: frequent landslides on access roads from Kathgodam, heavy rain — the lake fills but access can be dangerous.",
  Meghalaya:
    "Oct-May. Cherrapunji and Mawsynram (world's wettest places) are paradoxically best outside monsoon when you can actually see the living root bridges. Oct-Dec: post-monsoon waterfalls still full, lush green, roads clear — ideal. Jan-Feb: cool (10-18°C), misty mornings, great for Dawki river (crystal clear) and Shnongpdeng camping. Mar-May: warming, water activities excellent. Jun-Sep: extreme rain — Cherrapunji records 10m+ rainfall in months; floods, landslides, closed trekking routes.",
  // ── International additions ───────────────────────────────────────────
  Singapore:
    "Feb-Apr and Jun-Aug. Singapore has tropical weather year-round (28-33°C, humidity 70-90%), so season matters less than for other destinations. Feb-Apr: slightly less rain, Chinese New Year festivities (Jan-Feb). Jun-Aug: Great Singapore Sale, slightly drier. Nov-Jan: northeast monsoon — heaviest rainfall, but showers are short and intense (1-2hrs), rarely all-day. Singapore is excellent year-round — indoor attractions mean weather is rarely a trip-ruiner.",
  Vietnam:
    "Oct-Apr for most of Vietnam. North Vietnam (Hanoi, Sapa): Oct-Apr is best (18-25°C, some fog in Jan-Feb is atmospheric). South Vietnam (Ho Chi Minh City): Dec-Apr is dry season, 25-35°C. Central (Da Nang, Hoi An): Feb-Jul best (north's rain clears). Note: Vietnam's regions have opposite seasons — it's almost always good somewhere. Jun-Sep: monsoon in central/north but south is fine. Hoi An's river flooding (Oct-Nov) is famous — actually photogenic but affects access.",
  "Sri Lanka":
    "Dec-Mar for west/south coast (Colombo, Galle, Mirissa, Yala). East coast (Trincomalee, Arugam Bay): May-Sep. The southwest and northeast coasts have opposite monsoon seasons — Sri Lanka is always good somewhere. Colombo and the hill country: Dec-Apr. Sigiriya (Cultural Triangle): Dec-Apr. Tip: Dec-Jan is the best all-around time to cover the full island — both monsoons have ended.",
};

// ---------------------------------------------------------------------------
// COST DATA — keyed by destination
// ---------------------------------------------------------------------------
interface CostData {
  budget: { accommodation: string; meal: string; transport: string; total: string };
  midRange: { accommodation: string; meal: string; transport: string; total: string };
  luxury: { accommodation: string; meal: string; transport: string; total: string };
  highlights: string[];
  flightNote: string;
}

const COST_DATA: Record<string, CostData> = {
  Goa: {
    budget: { accommodation: "₹1,500–2,500", meal: "₹200–400", transport: "Scooter ₹400/day", total: "₹2,500–4,000/day" },
    midRange: { accommodation: "₹3,500–6,000", meal: "₹500–900", transport: "Cab ₹800/day", total: "₹5,500–9,000/day" },
    luxury: { accommodation: "₹10,000–25,000", meal: "₹1,500–3,000", transport: "Private car ₹2,000/day", total: "₹15,000–32,000/day" },
    highlights: ["Beach shack stay: ₹2,500–4,000/night", "Scooter rental: ₹400/day", "Seafood thali: ₹350", "Feni (local drink): ₹80–150/glass", "Old Goa church tour: Free"],
    flightNote: "Flights from Delhi/Mumbai: ₹3,500–8,000 one-way. Book 4-6 weeks ahead for best fares.",
  },
  Kashmir: {
    budget: { accommodation: "₹1,200–2,500", meal: "₹200–400", transport: "Shared cab ₹300/day", total: "₹2,500–4,500/day" },
    midRange: { accommodation: "₹4,000–8,000", meal: "₹500–900", transport: "Private cab ₹1,500/day", total: "₹7,000–12,000/day" },
    luxury: { accommodation: "₹12,000–25,000", meal: "₹1,200–2,500", transport: "Private car ₹2,500/day", total: "₹18,000–32,000/day" },
    highlights: ["Houseboat on Dal Lake: ₹5,000–12,000/night", "Shikara ride (1 hr): ₹1,500", "Pheran shopping: ₹800+", "Gulmarg gondola (Phase 1+2): ₹1,300", "Pahalgam local guide: ₹600/half-day"],
    flightNote: "Flights to Srinagar: Delhi 1.5hr ₹4,000–10,000. Mumbai 2.5hr. Book early in spring/autumn peak.",
  },
  Rajasthan: {
    budget: { accommodation: "₹800–2,000", meal: "₹150–350", transport: "Auto ₹150–300/ride", total: "₹2,000–4,000/day" },
    midRange: { accommodation: "₹3,000–7,000", meal: "₹400–900", transport: "Cab ₹1,200/day", total: "₹5,500–10,000/day" },
    luxury: { accommodation: "₹8,000–20,000", meal: "₹1,000–2,500", transport: "AC car ₹2,000/day", total: "₹12,000–28,000/day" },
    highlights: ["Heritage haveli hotel: ₹4,000–15,000/night", "Camel ride (1 hr): ₹800", "Thali meal at local dhaba: ₹250", "Fort entry (Amber/Mehrangarh): ₹100–200", "Desert jeep safari: ₹800–1,200"],
    flightNote: "Train from Delhi to Jaipur: ₹500–1,200 (Shatabdi). Flight Delhi-Jaipur: ₹2,500–5,000.",
  },
  Bali: {
    budget: { accommodation: "₹1,500–3,500", meal: "₹200–400 (warung)", transport: "Scooter ₹400/day", total: "₹3,000–6,000/day" },
    midRange: { accommodation: "₹5,000–10,000", meal: "₹600–1,200", transport: "Grab/GoJek ₹800/day", total: "₹8,000–14,000/day" },
    luxury: { accommodation: "₹12,000–35,000", meal: "₹1,500–3,500", transport: "Private driver ₹2,500/day", total: "₹18,000–45,000/day" },
    highlights: ["Private villa: ₹4,500–12,000/night (USD 55–145)", "Scooter rental: ₹400/day", "Warung meal: ₹200–400", "Ubud cooking class: ₹3,500", "Mount Batur sunrise trek: ₹2,500 (with guide)"],
    flightNote: "Flights from Delhi/Mumbai via Singapore or KL: ₹28,000–45,000 round trip. Air Asia often cheapest.",
  },
  Bangkok: {
    budget: { accommodation: "₹1,200–3,000", meal: "₹150–350", transport: "BTS/MRT day pass ₹500", total: "₹2,500–5,000/day" },
    midRange: { accommodation: "₹4,000–8,000", meal: "₹500–1,000", transport: "Grab ₹800/day", total: "₹7,000–12,000/day" },
    luxury: { accommodation: "₹12,000–30,000", meal: "₹1,200–3,000", transport: "Private car ₹3,000/day", total: "₹18,000–40,000/day" },
    highlights: ["Guesthouse on Khao San: ₹2,000–4,000/night", "Tuk-tuk short ride: ₹300", "Pad Thai from street stall: ₹200", "Chao Phraya River cruise: ₹600", "Thai massage (1 hr): ₹800"],
    flightNote: "Direct flights from Delhi: ₹18,000–35,000 RT (IndiGo, Air Asia). e-Visa on arrival for Indians (free, 30 days).",
  },
  Tokyo: {
    budget: { accommodation: "₹3,000–5,000 (capsule)", meal: "₹600–900 (ramen/sushi set)", transport: "IC card subway ₹1,200/day", total: "₹6,000–10,000/day" },
    midRange: { accommodation: "₹8,000–15,000", meal: "₹1,000–2,000", transport: "Day pass ₹1,500", total: "₹12,000–22,000/day" },
    luxury: { accommodation: "₹20,000–60,000 (ryokan)", meal: "₹2,500–6,000", transport: "Taxi ₹5,000/day", total: "₹35,000–80,000/day" },
    highlights: ["Capsule hotel: ₹3,000–5,000/night", "Ryokan (traditional inn): ₹12,000–25,000", "Ramen at famous shop: ₹800", "Subway day pass: ₹1,200", "TeamLab Borderless: ₹3,000"],
    flightNote: "No direct flights — usually via Singapore, Hong Kong, or Seoul. Total 10–14hr. ₹40,000–70,000 RT. Japan visa required for Indian passport (allow 7–10 days).",
  },
  Rome: {
    budget: { accommodation: "₹3,000–5,500 (hostel)", meal: "₹800–1,500 (trattoria)", transport: "Metro day pass ₹500", total: "₹6,000–10,000/day" },
    midRange: { accommodation: "₹8,000–15,000", meal: "₹1,500–3,000", transport: "Bus+Metro ₹800/day", total: "₹13,000–22,000/day" },
    luxury: { accommodation: "₹20,000–55,000", meal: "₹3,000–7,000", transport: "Taxi/car ₹4,000/day", total: "₹30,000–70,000/day" },
    highlights: ["Colosseum + Forum ticket: ₹2,200 (book online)", "Vatican Museums + Sistine Chapel: ₹2,500", "Gelato from quality shop: ₹200–400", "Espresso at a bar: ₹100–150", "Hop-on hop-off bus: ₹1,800"],
    flightNote: "Non-stop from Delhi/Mumbai (Air India, Emirates via Dubai): ₹60,000–1,10,000 RT. Schengen visa required (allow 3–4 weeks).",
  },
  Dubai: {
    budget: { accommodation: "₹4,000–7,000", meal: "₹600–1,200", transport: "Metro day pass ₹400", total: "₹7,000–12,000/day" },
    midRange: { accommodation: "₹9,000–18,000", meal: "₹1,200–2,500", transport: "Uber ₹1,500/day", total: "₹14,000–26,000/day" },
    luxury: { accommodation: "₹25,000–80,000", meal: "₹3,000–8,000", transport: "Private car ₹5,000/day", total: "₹40,000–1,00,000/day" },
    highlights: ["Burj Khalifa (top 2 floors): ₹3,500", "Dubai Frame: ₹1,500", "Desert safari with BBQ dinner: ₹3,000", "Dubai Mall free entry (Aquarium extra ₹2,500)", "Abra (water taxi) across Dubai Creek: ₹25"],
    flightNote: "Very cheap flights — non-stop from Delhi/Mumbai/Bangalore: ₹18,000–35,000 RT. Many airlines. UAE visa required (apply online, ₹3,000–4,500).",
  },
  // ── Additional Indian Destinations ──────────────────────────────────────
  Rishikesh: {
    budget: { accommodation: "₹500–1,200", meal: "₹150–350", transport: "Auto ₹100–200/trip", total: "₹1,500–3,000/day" },
    midRange: { accommodation: "₹2,000–4,500", meal: "₹400–800", transport: "Cab ₹800/day", total: "₹4,000–7,500/day" },
    luxury: { accommodation: "₹7,000–18,000", meal: "₹1,000–2,000", transport: "Private cab ₹1,500/day", total: "₹11,000–24,000/day" },
    highlights: ["Rafting (16km Shivpuri): ₹600–800/person", "Bungee jumping (83m): ₹3,500", "Yoga drop-in class: ₹400–800", "Beatles Ashram entry: ₹600", "Ganga aarti at Triveni Ghat: Free"],
    flightNote: "No airport in Rishikesh. Nearest: Jolly Grant Airport, Dehradun (35km, ₹600–900 cab). Flights from Delhi: ₹3,000–6,000 one-way. Train to Haridwar + 20km cab is often best value.",
  },
  Varanasi: {
    budget: { accommodation: "₹500–1,500", meal: "₹150–350", transport: "Auto/rickshaw ₹200/day", total: "₹1,500–3,500/day" },
    midRange: { accommodation: "₹2,500–5,500", meal: "₹400–900", transport: "Cab ₹1,000/day", total: "₹5,000–9,000/day" },
    luxury: { accommodation: "₹8,000–20,000", meal: "₹1,200–3,000", transport: "AC cab ₹1,500/day", total: "₹12,000–28,000/day" },
    highlights: ["Morning boat ride on Ganga (1 hr): ₹400–800", "Ganga Aarti at Dashashwamedh (free, tip optional)", "Silk weaving workshop: ₹500–800", "Vegetarian thali at a dhaba: ₹150–300", "Sarnath (Buddha's first sermon site): ₹30 entry"],
    flightNote: "Lal Bahadur Shastri Airport (VNS), 26km from city. Flights from Delhi 1hr, Mumbai 1.5hr: ₹3,500–9,000 one-way. Train from Delhi is also excellent (Kashi Express overnight, 10–13hr).",
  },
  Andaman: {
    budget: { accommodation: "₹800–2,000", meal: "₹200–400", transport: "Scooter ₹500/day", total: "₹2,500–5,000/day" },
    midRange: { accommodation: "₹3,000–7,000", meal: "₹500–1,000", transport: "Cab ₹1,200/day", total: "₹6,000–12,000/day" },
    luxury: { accommodation: "₹10,000–35,000", meal: "₹1,500–3,500", transport: "Private cab ₹2,000/day", total: "₹16,000–45,000/day" },
    highlights: ["Cellular Jail light & sound show: ₹300", "Snorkeling at Elephant Beach: ₹600–900 (ferry included)", "Scuba diving (introductory): ₹3,500–5,500", "Radhanagar Beach entry: Free (one of Asia's best)", "Inter-island ferry (Port Blair–Havelock): ₹500–1,500"],
    flightNote: "Veer Savarkar International Airport, Port Blair. Direct flights from Chennai (2hr), Kolkata (2hr), Delhi (3hr): ₹8,000–22,000 RT. Book 4–8 weeks ahead — prices spike dramatically.",
  },
  Shimla: {
    budget: { accommodation: "₹700–1,800", meal: "₹150–400", transport: "Local bus ₹50–200", total: "₹2,000–4,500/day" },
    midRange: { accommodation: "₹2,500–6,000", meal: "₹400–900", transport: "Cab ₹1,000/day", total: "₹5,000–10,000/day" },
    luxury: { accommodation: "₹8,000–25,000", meal: "₹1,000–2,500", transport: "Private cab ₹1,500/day", total: "₹12,000–32,000/day" },
    highlights: ["Kalka-Shimla UNESCO toy train: ₹330 (2nd class), ₹850 (1st class Vista Dome)", "Jakhu Temple ropeway: ₹500 round trip", "Ice Skating Rink (Dec-Feb): ₹200/session", "The Mall Road walk: Free", "Kufri snow activities (Dec-Feb): ₹500–1,000"],
    flightNote: "No airport in Shimla (Jubbarhatti is 22km but very limited flights). Best options: Chandigarh airport + 90km cab (₹1,500), or Kalka-Shimla toy train from Delhi via Shatabdi (total 8hrs).",
  },
  Coorg: {
    budget: { accommodation: "₹1,000–2,500", meal: "₹200–400", transport: "Scooter ₹400/day", total: "₹2,500–5,000/day" },
    midRange: { accommodation: "₹3,000–8,000", meal: "₹500–1,000", transport: "Cab ₹1,200/day", total: "₹6,000–12,000/day" },
    luxury: { accommodation: "₹8,000–25,000", meal: "₹1,200–3,000", transport: "Private cab ₹2,000/day", total: "₹14,000–35,000/day" },
    highlights: ["Coffee estate stay with meals: ₹3,500–9,000/night", "Dubare Elephant Camp (bathing session, 7am): ₹250", "Abbey Falls entry: ₹25", "White-water rafting (Barapole river): ₹700–1,200", "Coffee beans (250g premium): ₹200–400"],
    flightNote: "Nearest airport: Mangaluru (120km, 2.5hr) or Mysuru (95km, 2hr). Flights from Bangalore: ₹3,000–7,000. Direct buses from Bengaluru's Majestic stand (KSRTC) to Madikeri: ₹350–700 (5–7hrs).",
  },
  Mysore: {
    budget: { accommodation: "₹700–1,800", meal: "₹150–350", transport: "Auto ₹150–300/trip", total: "₹2,000–4,500/day" },
    midRange: { accommodation: "₹2,500–6,000", meal: "₹400–900", transport: "City cab ₹800/day", total: "₹5,000–10,000/day" },
    luxury: { accommodation: "₹7,000–22,000", meal: "₹1,000–2,500", transport: "Private cab ₹1,500/day", total: "₹12,000–28,000/day" },
    highlights: ["Mysore Palace entry (Indians): ₹70 (₹200 for illumination on Sun/holidays)", "Chamundeshwari Temple ropeway: ₹70", "Devaraja Market spice shopping: Free to browse", "Mysore Pak sweet from Guru Sweet Mart: ₹250/250g", "Srirangapatna Fort day trip: ₹30 entry"],
    flightNote: "Mysuru Airport (MYQ) has limited scheduled flights. Best: Bangalore by road (140km, 3hrs via NH275 expressway) or Shatabdi train (2hrs, ₹200–350). From Chennai: 7hrs by road or train.",
  },
  Darjeeling: {
    budget: { accommodation: "₹600–1,800", meal: "₹150–400", transport: "Shared jeep ₹100–300/trip", total: "₹2,000–4,500/day" },
    midRange: { accommodation: "₹2,500–6,000", meal: "₹400–900", transport: "Cab ₹1,000/day", total: "₹5,000–10,000/day" },
    luxury: { accommodation: "₹7,000–20,000", meal: "₹1,000–2,500", transport: "Private cab ₹1,500/day", total: "₹12,000–28,000/day" },
    highlights: ["Darjeeling Himalayan Railway (toy train loop): ₹1,200–2,800", "Tiger Hill sunrise (4am taxi + entry): ₹400–600", "Tea estate tasting tour: ₹500–1,500", "Darjeeling tea (100g premium): ₹400–2,000", "HMI (Himalayan Mountaineering Institute) museum: ₹100"],
    flightNote: "Bagdogra Airport (IXB), 70km (2.5hrs by shared jeep ₹300 or private cab ₹1,800). Flights from Kolkata 40min, Delhi 1.5hr: ₹3,000–9,000. Train to NJP station then jeep is cheapest option.",
  },
  Udaipur: {
    budget: { accommodation: "₹800–2,000", meal: "₹200–450", transport: "Auto ₹150–300/trip", total: "₹2,500–5,000/day" },
    midRange: { accommodation: "₹3,000–7,000", meal: "₹500–1,200", transport: "Cab ₹1,000/day", total: "₹6,000–12,000/day" },
    luxury: { accommodation: "₹10,000–50,000", meal: "₹1,500–4,000", transport: "Private cab ₹2,000/day", total: "₹18,000–60,000/day" },
    highlights: ["Lake Pichola boat ride (sunset): ₹700–800", "City Palace entry: ₹300 (Indians)", "Fateh Sagar lake pedal boat: ₹200/30min", "Rooftop restaurant dinner with lake view: ₹1,500–3,000/person", "Udaipur sound & light show at City Palace: ₹500"],
    flightNote: "Maharana Pratap Airport (UDR), 22km from city. Flights from Delhi (1hr), Mumbai (1.5hr), Jaipur (45min): ₹3,500–9,000. Train from Delhi Hazrat Nizamuddin (Chetak Express overnight, 12hrs) is most scenic.",
  },
  Singapore: {
    budget: { accommodation: "₹4,000–7,000 (hostel)", meal: "₹400–700 (hawker centre)", transport: "EZ-Link card MRT ₹600/day", total: "₹7,000–12,000/day" },
    midRange: { accommodation: "₹9,000–18,000", meal: "₹800–1,800", transport: "Grab ₹1,200/day", total: "₹14,000–24,000/day" },
    luxury: { accommodation: "₹22,000–80,000", meal: "₹2,500–7,000", transport: "Taxi/Grab ₹3,000/day", total: "₹35,000–1,00,000/day" },
    highlights: ["Gardens by the Bay (Cloud Forest + Flower Dome): ₹2,800", "Marina Bay Sands SkyPark: ₹2,200", "Universal Studios: ₹6,500", "Hawker centre meal (chicken rice): ₹350–500", "Singapore Zoo: ₹3,200"],
    flightNote: "Non-stop from Delhi (5.5hr), Mumbai (5.5hr), Chennai (3.5hr), Bangalore (4hr): ₹20,000–45,000 RT. Singapore Airlines, IndiGo, Air India, Scoot. Visa required for Indians — apply at ivisa.ica.gov.sg (3–5 days, ₹3,500–4,500).",
  },
};

// ---------------------------------------------------------------------------
// INFLATION UTILITIES — adjusts 2026 base prices to the post's publish year
// ---------------------------------------------------------------------------
const COST_BASE_YEAR = 2026;

function getPublishYear(publishDate: string): number {
  try { return new Date(publishDate).getFullYear(); } catch { return COST_BASE_YEAR; }
}

/** Apply compound inflation to all ₹ amounts in a price string like "₹1,500–2,500" */
function inflatePrice(priceStr: string, multiplier: number): string {
  if (multiplier === 1) return priceStr;
  return priceStr.replace(/₹([\d,]+)/g, (_, num) => {
    const val = parseInt(num.replace(/,/g, ""));
    if (!val) return `₹${num}`;
    // Round to nearest ₹100 for readability
    const inflated = Math.round((val * multiplier) / 100) * 100;
    return `₹${inflated.toLocaleString("en-IN")}`;
  });
}

/** India ~5%/yr, international ~4%/yr from base year 2026 */
function getInflationMultiplier(publishDate: string, isIndia: boolean): number {
  const years = getPublishYear(publishDate) - COST_BASE_YEAR;
  if (years <= 0) return 1;
  const rate = isIndia ? 0.05 : 0.04;
  return Math.pow(1 + rate, years);
}

function inflateCostRow(
  row: { accommodation: string; meal: string; transport: string; total: string },
  m: number
) {
  return {
    accommodation: inflatePrice(row.accommodation, m),
    meal: inflatePrice(row.meal, m),
    transport: inflatePrice(row.transport, m),
    total: inflatePrice(row.total, m),
  };
}

// ---------------------------------------------------------------------------
// TRANSPORT DATA — keyed by destination
// ---------------------------------------------------------------------------
const TRANSPORT_DATA: Record<string, { options: Array<{ mode: string; details: string; duration: string; cost: string }>; tips: string[] }> = {
  Goa: {
    options: [
      { mode: "Flight", details: "Dabolim (GOI) or Mopa (GOX) airport. IndiGo, Air India from Mumbai, Delhi", duration: "1hr (Mumbai) / 2.5hr (Delhi)", cost: "₹3,500–8,000 one-way" },
      { mode: "Train", details: "Konkan Railway from Mumbai to Margao/Madgaon. Rajdhani/Mandovi Express", duration: "10hr from Mumbai", cost: "₹600–1,800 (sleeper to AC)" },
      { mode: "Bus", details: "KSRTC/private Volvo buses from Mumbai, Pune, Bengaluru", duration: "10–12hr", cost: "₹600–1,200" },
      { mode: "Road", details: "NH66 from Mumbai (600km). NH48 + NH66 from Bengaluru (560km)", duration: "10–12hr drive", cost: "Fuel + tolls ₹1,500–2,500" },
    ],
    tips: ["Book Konkan Railway 60 days ahead — berths fill fast", "Mopa airport serves North Goa; Dabolim serves South Goa better", "Rent a scooter at the airport or your guesthouse on arrival (₹400/day)", "Pre-book return transport especially during Dec-Jan peak"],
  },
  Kashmir: {
    options: [
      { mode: "Flight", details: "Srinagar International Airport (SXR). IndiGo, Air India, Vistara from Delhi/Mumbai", duration: "1.5hr (Delhi) / 2.5hr (Mumbai)", cost: "₹4,000–10,000 one-way" },
      { mode: "Train + Road", details: "Train to Jammu Tawi, then shared cab or bus via NH44 to Srinagar", duration: "Train 10hr Delhi-Jammu + 8hr road", cost: "₹800–1,600 (train) + ₹400 (shared cab)" },
      { mode: "Road from Jammu", details: "Banihal Tunnel (Qazigund-Banihal) via Jawahar Tunnel or new Z-Morh tunnel", duration: "7–9hr Jammu to Srinagar", cost: "Shared cab ₹500 / Private cab ₹4,000" },
    ],
    tips: ["Flights get cancelled or delayed in bad weather — build buffer days", "Keep Jammu as backup accommodation option", "Mobile connectivity: BSNL works best in remote areas", "Inner Line Permits required for Gurez, Doodhpathri, Bangus Valley"],
  },
  Manali: {
    options: [
      { mode: "Volvo Bus from Delhi", details: "HRTC/private Volvos from ISBT Kashmiri Gate, Delhi. Very comfortable", duration: "14hr overnight", cost: "₹900–1,500" },
      { mode: "Flight to Kullu-Bhuntar", details: "Bhuntar Airport (KUU), 50km from Manali. Air India/Alliance Air", duration: "1.5hr + 1hr taxi", cost: "₹4,000–8,000 + ₹800–1,200 taxi" },
      { mode: "Drive from Delhi", details: "NH44 to Ambala, then NH21 via Chandigarh, Bilaspur, Mandi", duration: "14–16hr self-drive", cost: "Fuel + tolls ₹1,800–2,500" },
    ],
    tips: ["Rohtang Pass requires permit (₹500, book online at hptdc.in)", "Manali-Leh Highway open only Jun–Oct", "Book Volvo buses 2-3 weeks ahead during May-Jun and Oct", "Local tempos (shared autos) connect Old Manali to Mall Road cheaply"],
  },
  "Leh Ladakh": {
    options: [
      { mode: "Flight", details: "Kushok Bakula Rimpochhe Airport (IXL), Leh. Air India, IndiGo, Vistara from Delhi", duration: "1.5hr from Delhi", cost: "₹6,000–15,000 one-way" },
      { mode: "Manali-Leh Highway", details: "Via Rohtang Pass, Baralacha La, Tanglang La. The legendary ride. Jun–Oct only", duration: "2 days (1 night at Sarchu/Jispa)", cost: "Bus ₹700 / Private cab ₹12,000–18,000" },
      { mode: "Srinagar-Leh Highway", details: "NH1 via Zoji La, Kargil. More cultural experience. Jun–Nov", duration: "2 days (1 night Kargil)", cost: "Shared cab ₹1,500 / Private cab ₹14,000" },
    ],
    tips: ["Fly in and drive out (or vice versa) to acclimatize properly", "Arrive by flight, rest 2 days before any high-altitude excursion", "Rent Royal Enfield only after 2–3 days acclimatization", "Pangong Tso, Nubra Valley require Inner Line Permits (₹400, from DC Office Leh or online)"],
  },
  Rajasthan: {
    options: [
      { mode: "Flight to Jaipur", details: "Jaipur International Airport (JAI). Multiple airlines from Delhi, Mumbai", duration: "1hr from Delhi / 1.5hr from Mumbai", cost: "₹2,500–6,000 one-way" },
      { mode: "Train (Delhi-Jaipur)", details: "Shatabdi Express (5hr), Intercity, Ajmer Shatabdi. Very reliable", duration: "5hr from Delhi", cost: "₹500–1,200" },
      { mode: "Delhi-Jaipur Expressway", details: "NH48 via Gurugram. 270km. Very smooth highway", duration: "4.5–5hr drive", cost: "Fuel + tolls ₹700–900" },
    ],
    tips: ["Rajasthan has its own tourist taxi scheme — meters rarely used, negotiate beforehand", "Jodhpur-Jaisalmer: night bus is best (sleeper, ₹400)", "Book train tickets for Udaipur–Mumbai/Delhi well in advance", "Hire a heritage walk guide in Jaipur walled city for ₹500 — worth it"],
  },
  Bali: {
    options: [
      { mode: "Flight via Singapore", details: "Delhi/Mumbai → Singapore (Changi) → Denpasar (DPS). SIA, Vistara, Scoot", duration: "8–10hr total", cost: "₹28,000–45,000 RT" },
      { mode: "Flight via Kuala Lumpur", details: "Delhi/Mumbai → KLIA → Denpasar. Air Asia, Malaysia Airlines", duration: "9–11hr total", cost: "₹25,000–40,000 RT" },
      { mode: "Flight via Colombo", details: "Less common but sometimes cheaper via SriLankan Airlines", duration: "10–12hr total", cost: "₹30,000–50,000 RT" },
    ],
    tips: ["Get Indonesia Visa on Arrival (30 days, ₹1,500) at Ngurah Rai Airport", "Book airport transfer in advance — taxis at airport overcharge", "Grab app works throughout Bali — far cheaper than regular taxis", "International driving license required to legally ride a scooter"],
  },
  Bangkok: {
    options: [
      { mode: "Direct Flight from Delhi", details: "Air Asia, IndiGo, Thai Airways, Vistara from Delhi IGI (T3)", duration: "4hr direct", cost: "₹18,000–35,000 RT" },
      { mode: "Direct Flight from Mumbai", details: "Thai Airways, Air Asia, Go First from Mumbai BOM", duration: "5hr direct", cost: "₹20,000–38,000 RT" },
      { mode: "Via Colombo/Singapore", details: "Sometimes cheaper routing via SriLankan Airlines or Scoot", duration: "6–9hr total", cost: "₹16,000–28,000 RT" },
    ],
    tips: ["Thai e-Visa on Arrival for Indians — 30 days, free, fill online at stickervisafree.com", "BTS Skytrain + MRT covers most tourist areas efficiently (₹50–200/trip)", "Grab app is essential — avoids tuk-tuk price scams for longer rides", "Suvarnabhumi (BKK) and Don Mueang (DMK) are two separate airports — check which"],
  },
  Tokyo: {
    options: [
      { mode: "Via Singapore", details: "Delhi/Mumbai → Changi → Narita/Haneda (NRT/HND). SIA, Vistara, Scoot", duration: "10–12hr total", cost: "₹40,000–65,000 RT" },
      { mode: "Via Hong Kong", details: "Delhi/Mumbai → HKG → Tokyo. Cathay Pacific, Hong Kong Airlines", duration: "11–13hr total", cost: "₹42,000–70,000 RT" },
      { mode: "Via Seoul (ICN)", details: "Delhi → Incheon → Tokyo. Korean Air, Asiana, Air India codeshare", duration: "11–14hr total", cost: "₹38,000–65,000 RT" },
    ],
    tips: ["Japan Visa required for Indian passport — apply at Embassy in Delhi/Mumbai (allow 7–10 days)", "Get IC Suica/Pasmo card at airport for all transport in Tokyo", "Shinkansen (bullet train) from Tokyo to Kyoto: ₹4,000 — buy JR Pass in India before going", "Google Maps works perfectly for Tokyo transit navigation"],
  },
  Rome: {
    options: [
      { mode: "Non-stop from Delhi (Air India)", details: "Air India operates non-stop Delhi (DEL) → Rome Fiumicino (FCO)", duration: "10hr direct", cost: "₹60,000–1,00,000 RT" },
      { mode: "Via Dubai (Emirates)", details: "Delhi/Mumbai → Dubai (DXB) → Rome FCO. Very smooth connection", duration: "11–12hr total", cost: "₹65,000–1,10,000 RT" },
      { mode: "Via Frankfurt (Lufthansa)", details: "Delhi/Mumbai → Frankfurt (FRA) → Rome. Often good fares in shoulder season", duration: "12–14hr total", cost: "₹60,000–1,10,000 RT" },
    ],
    tips: ["Schengen Visa required for Indian passport — apply 6-8 weeks ahead; submit at VFS Global", "Rome Fiumicino (FCO) to city centre: Trenitalia Leonardo Express ₹1,400 (32 min)", "Validate metro/bus tickets before boarding — inspectors fine ₹5,000+ no mercy", "Book Colosseum and Vatican tickets 6–8 weeks ahead in peak season (May-Aug)"],
  },
  Dubai: {
    options: [
      { mode: "Non-stop from Delhi (multiple)", details: "Air India, IndiGo, Emirates, flydubai from Delhi (DEL) → Dubai (DXB)", duration: "3.5hr direct", cost: "₹18,000–35,000 RT" },
      { mode: "Non-stop from Mumbai", details: "Air India, IndiGo, Emirates from Mumbai (BOM) → Dubai (DXB)", duration: "3hr direct", cost: "₹16,000–30,000 RT" },
      { mode: "From Bangalore/Chennai/Hyderabad", details: "IndiGo, Air Arabia, flydubai frequent direct flights", duration: "3.5–4hr direct", cost: "₹18,000–38,000 RT" },
    ],
    tips: ["UAE Visa required for Indian passport — apply online at icp.gov.ae or via airlines (₹3,000–4,500, 3–5 days)", "Dubai Metro Gold Line covers all key attractions efficiently", "Download Careem/Uber for taxis — metered, reliable", "Dress modestly at mosques and malls; public displays of affection discouraged"],
  },
  // ── Additional Indian Destinations ──────────────────────────────────────
  Rishikesh: {
    options: [
      { mode: "By Road from Delhi", details: "NH58 via Meerut, Muzaffarnagar, Haridwar. Well-maintained highway, 240km", duration: "5–6hrs", cost: "Fuel + tolls ₹600–900" },
      { mode: "Train to Haridwar", details: "Shatabdi from Delhi to Haridwar (4.5hrs), then 20km cab to Rishikesh", duration: "5.5hrs total", cost: "Train ₹600–1,200 + cab ₹400" },
      { mode: "Volvo Bus from Delhi", details: "GMOU/HRTC/private Volvos from ISBT Kashmiri Gate, Delhi to Rishikesh", duration: "5–7hrs", cost: "₹500–900" },
    ],
    tips: ["Auto-rickshaws don't cross Laxman Jhula suspension bridges — walk across or hire a Vikram tempo", "Ram Jhula area is the backpacker hub; Tapovan is quieter and hipper", "Rafting operators cluster along the Haridwar-Rishikesh road — book with operators having safety equipment visible", "Early morning Triveni Ghat aarti (5:30am) is significantly more spiritual than the evening one"],
  },
  Varanasi: {
    options: [
      { mode: "Flight", details: "Lal Bahadur Shastri Airport (VNS), 26km from ghats. Air India, IndiGo, Vistara from Delhi/Mumbai", duration: "1.5–2hrs from Delhi", cost: "₹3,500–9,000 one-way" },
      { mode: "Train from Delhi", details: "Kashi Express (overnight, 12–14hrs) or Shiv Ganga Express. Varanasi Junction (BSB) or Manduadih station", duration: "12–14hrs overnight", cost: "₹400–1,500 (sleeper to 3AC)" },
      { mode: "Train from Mumbai", details: "Mahanagari Express or Kamayani Express. Long journey, consider flying", duration: "22–26hrs", cost: "₹600–2,000" },
    ],
    tips: ["Navigate the old city on foot — auto-rickshaws can't enter the narrow ghat lanes", "Dashashwamedh Ghat aarti at 7pm: arrive by 6:30 for a boat view", "Cycle rickshaws between ghats cost ₹50–150 and are far more atmospheric than cabs", "Sarnath is 13km from Varanasi Junction — auto-rickshaw ₹200 one-way; include in your last day itinerary"],
  },
  Andaman: {
    options: [
      { mode: "Flight from Chennai", details: "Air India, IndiGo from Chennai to Port Blair (IXZ). Most direct and cheapest", duration: "2hrs", cost: "₹5,000–15,000 RT" },
      { mode: "Flight from Kolkata", details: "IndiGo, Air India from Kolkata to Port Blair. Also direct", duration: "2hrs", cost: "₹5,500–16,000 RT" },
      { mode: "Flight from Delhi/Mumbai", details: "Usually via Chennai or Kolkata. Direct flights exist on some days", duration: "3.5–4hrs", cost: "₹8,000–22,000 RT" },
      { mode: "Ship from Chennai (budget option)", details: "Andaman Shipping Corporation, Chennai to Port Blair. Scenic but very slow", duration: "60–65hrs (3 nights)", cost: "₹4,000–7,000 one-way (bunk/cabin)" },
    ],
    tips: ["Book flights 6–8 weeks ahead — Andaman flights get expensive fast during Dec-Jan and summer holidays", "Inter-island ferries (Port Blair–Havelock–Neil–Baratang) have fixed government schedules — plan your itinerary around ferry times, not vice versa", "Havelock Island (Swaraj Dweep): book accommodation well in advance during peak season", "Scooter/bike rental at Havelock is the best way to explore (₹400–600/day)"],
  },
  Shimla: {
    options: [
      { mode: "Kalka–Shimla Toy Train (UNESCO)", details: "Take Shatabdi from Delhi to Kalka, then UNESCO World Heritage narrow-gauge train to Shimla. Book at irctc.co.in", duration: "Delhi to Shimla: 7–8hrs total", cost: "Shatabdi ₹700 + Toy train ₹350–1,000" },
      { mode: "Volvo Bus from Delhi", details: "HRTC/private Volvos from ISBT Kashmiri Gate overnight", duration: "9–11hrs", cost: "₹700–1,200" },
      { mode: "Road from Delhi via Chandigarh", details: "NH44 to Ambala, then NH5 to Shimla via Kalka and Solan", duration: "7–9hrs self-drive", cost: "Fuel + tolls ₹1,200–1,800" },
    ],
    tips: ["The Mall Road is pedestrian-only — drop bags at your hotel, then explore on foot", "Book the Kalka-Shimla Vista Dome train coach 60 days ahead — sells out immediately at 8am IST", "Jakhu Hill (2,455m) is a 45-min hike from Hotel Combermere — skip the ropeway and walk", "Kufri is 16km from Shimla and best as a morning excursion; tourist season makes it very crowded by 10am"],
  },
  Coorg: {
    options: [
      { mode: "Road from Bangalore", details: "NH275 to Mysuru, then Hunsur–Madikeri road. Well-maintained via Kushalnagar", duration: "5.5–6hrs, 265km", cost: "Fuel + tolls ₹600–800" },
      { mode: "KSRTC Bus from Bangalore", details: "Direct KSRTC and private buses from Bangalore's Majestic/Satellite Bus Stand to Madikeri", duration: "6–7hrs", cost: "₹350–700" },
      { mode: "Road via Mysuru (scenic)", details: "NH275 to Mysuru (3hrs), then Madikeri road via Kushalnagar — coffee plantation landscape", duration: "5.5hrs total", cost: "Fuel ₹700–900" },
    ],
    tips: ["Madikeri is the administrative capital — most coffee estates are 10–30km outside town, not in the town itself", "Rent a scooter or bike from your estate/guesthouse to explore independently (₹400–600/day)", "Estate stays include all meals — factor this into budget comparison vs. standalone hotels", "The Cauvery River rafting at Dubare is a different operator from the elephant camp — book both ahead on weekends"],
  },
  Darjeeling: {
    options: [
      { mode: "Flight to Bagdogra + Shared Jeep", details: "Bagdogra Airport (IXB), 70km. Shared jeep stand at New Jalpaiguri (NJP) station — 3hrs to Darjeeling", duration: "Flight 40min from Kolkata + 2.5hrs jeep", cost: "Flight ₹3,000–9,000 + jeep ₹200–300" },
      { mode: "Train to NJP + Shared Jeep", details: "Darjeeling Mail or Shatabdi to New Jalpaiguri (NJP), then shared jeep. Very reliable", duration: "Train varies (Delhi: 12hrs, Kolkata: 8hrs) + 2.5hrs jeep", cost: "Train ₹600–2,000 + jeep ₹200–300" },
      { mode: "Darjeeling Himalayan Railway (UNESCO)", details: "Toy train from NJP station to Darjeeling. Scenic, slow, and iconic", duration: "7–8hrs (slow train) or 4hrs (faster diesel service)", cost: "₹500–1,200 one-way" },
    ],
    tips: ["Shared jeeps are the backbone of hill transport — faster than the toy train and how locals actually travel", "Tiger Hill sunrise requires booking through jeep operators — leave Darjeeling at 3:30–4am (Nov–Mar only for clear sky)", "First flush tea (Apr-May): buy directly from estate shops or Nathmulls Tea Room on Laden La Road", "Gangtok (Sikkim) is 3hrs from Darjeeling by shared jeep — easy extension for longer trips"],
  },
  Mysore: {
    options: [
      { mode: "Road from Bangalore", details: "NH275 Bangalore–Mysuru Expressway (140km). India's most reliable highway", duration: "2.5–3hrs", cost: "Fuel + toll ₹400–600" },
      { mode: "KSRTC Bus from Bangalore", details: "Frequent every 30 min from Bangalore Majestic. Shatabdi-like comfort on some routes", duration: "3–3.5hrs", cost: "₹180–350" },
      { mode: "Shatabdi Express Train", details: "Bangalore to Mysuru station — fast and comfortable", duration: "2hrs", cost: "₹200–350" },
    ],
    tips: ["Palace illumination (Sunday evenings and public holidays, 7–8pm, 97,000 bulbs) requires planning — check the calendar", "Devaraja Market opposite the palace is the best spice/flower/silk shopping — bargain hard", "Autorickshaws don't use meters — negotiate ₹150 for short trips in advance", "Chamundeshwari Temple is 13km (30min) from city — combined with the palace as an evening trip"],
  },
  Udaipur: {
    options: [
      { mode: "Flight", details: "Maharana Pratap Airport (UDR), 22km from city. IndiGo, Air India, Vistara from Delhi/Mumbai", duration: "1hr from Delhi / 1.5hr from Mumbai", cost: "₹3,500–9,000 one-way" },
      { mode: "Train from Delhi", details: "Chetak Express (overnight, 12hrs) or Mewar Express from Hazrat Nizamuddin", duration: "12–14hrs overnight", cost: "₹500–1,800" },
      { mode: "Road from Jaipur", details: "261km via NH8. Add Udaipur to a Rajasthan circuit (Jaipur–Jodhpur–Udaipur)", duration: "4–5hrs from Jaipur", cost: "Cab ₹2,500–4,000 for full route" },
    ],
    tips: ["City Palace and Lake Pichola boat rides are on opposite sides of the same waterfront — plan them together", "Evening boat ride on Lake Pichola (6–7pm) gives the best light on the Lake Palace Hotel", "Ghats near Gangaur Ghat are less crowded than the main touristy stretch — better photography", "Jaisamand Lake (50km): if you have an extra half-day, this 17th-century lake is spectacular and tourist-free"],
  },
  Singapore: {
    options: [
      { mode: "Flight from Delhi/Mumbai", details: "SIA, IndiGo, Air India, Vistara non-stop to Changi Airport (SIN)", duration: "5.5hrs from Delhi / 5.5hrs from Mumbai", cost: "₹20,000–45,000 RT" },
      { mode: "Flight from Chennai/Bangalore", details: "SIA, IndiGo, Scoot direct to Changi. Shorter flight time", duration: "3.5–4hrs", cost: "₹18,000–40,000 RT" },
      { mode: "Via Kuala Lumpur (AirAsia)", details: "Fly to KL Sepang (KLIA2), then budget flight to Singapore Changi. Good for price + Malaysia stopover", duration: "Total 7–9hrs", cost: "₹15,000–30,000 RT" },
    ],
    tips: ["Singapore requires a visa for Indian citizens — apply online at ivisa.ica.gov.sg (₹3,500–4,500, 3–5 days)", "Changi MRT (Airport) to city centre takes 30 min (₹250) — don't take taxis from airport", "EZ-Link card for all MRT + bus travel — buy at Changi airport and return for refund at departure", "Singapore is one of the safest cities in the world — no need to worry about safety at night"],
  },
};

// ---------------------------------------------------------------------------
// TRAVEL TIPS DATA — keyed by destination or category
// ---------------------------------------------------------------------------
const TRAVEL_TIPS_DATA: Record<string, Array<{ category: string; tips: string[] }>> = {
  Kashmir: [
    { category: "Safety & Permits", tips: ["Register at the Tourist Reception Centre on arrival", "Always carry ID — army checkpoints are common", "Inner Line Permit required for Gurez, Doodhpathri (free, from DC office)", "Avoid restricted zones; stick to tourist circuits"] },
    { category: "Health & Altitude", tips: ["Gulmarg sits at 2,650m — mild altitude; Sonamarg higher", "Carry altitude sickness pills (Diamox) as precaution", "Stay hydrated; avoid heavy activity on day 1", "BSNL SIM works best in remote areas — download offline maps"] },
    { category: "Money & Connectivity", tips: ["Carry sufficient cash — ATMs sparse outside Srinagar", "Most houseboats accept UPI in 2025+", "Negotiate shikara rides before boarding (fixed rate: ₹1,500/hr)", "Houseboat owners add hidden charges — clarify all inclusions upfront"] },
    { category: "Cultural Tips", tips: ["Remove shoes at dargahs (shrines) and mosques", "Dress modestly, especially women in old Srinagar", "Local wazwan (feast) is a must-try — ask your houseboat host", "Kashmiri time runs 30–45 min behind schedule — plan loosely"] },
  ],
  Rajasthan: [
    { category: "Getting Around", tips: ["Hire a guide at major forts — context transforms the experience", "Negotiate taxi/auto fares upfront — meters rarely used", "Jodhpur-Jaisalmer: night sleeper bus is best value (₹400)", "Rajasthan Tourism buses are reliable for inter-city travel"] },
    { category: "Health & Water", tips: ["Drink only bottled or filtered water — always", "Avoid raw salads at roadside stalls in summer", "Carry ORS sachets — heat dehydrates quickly", "Apr-Jun: extreme heat (45°C) — schedule sightseeing before 10am and after 4pm"] },
    { category: "Shopping & Bargaining", tips: ["Start at 40% of the asking price at bazaars", "Government emporiums (Rajasthali) have fixed fair prices", "Best buys: block-print fabric, blue pottery, mojari shoes, silver jewelry", "Avoid buying antiques (export restrictions) and camel bone artifacts"] },
    { category: "For Women Travellers", tips: ["Carry a dupatta (scarf) for temple visits", "Dress modestly in smaller towns like Pushkar and Ajmer", "Heritage hotels are the safest accommodation choice", "Book heritage walks with female guides for Jaipur's old city"] },
  ],
  Goa: [
    { category: "Beach Safety", tips: ["Respect red/yellow flags — red means do not enter water", "Rip currents are common on North Goa beaches (Calangute, Baga)", "Avoid swimming at night or while intoxicated", "Licensed lifeguards on duty Oct–May only"] },
    { category: "Getting Around", tips: ["Scooter rental is the best way to explore (₹400/day)", "Always negotiate taxi fares before getting in", "Rapido/Uber work in Goa now — use for fixed fares", "North Goa and South Goa are distinct — choose your base carefully"] },
    { category: "Stay Safe", tips: ["Drug scams target tourists in Anjuna and Vagator — say no firmly", "Only use licensed beach shack restaurants", "Don't leave valuables on the beach — thefts are common", "Keep a photocopy of your passport and carry it separately"] },
    { category: "Money & Eating", tips: ["Seafood is freshest at fishermen's wharf in the mornings", "Grand Island snorkeling: book through licensed operators (₹1,200–1,800)", "Water sports: only use operators with visible safety equipment", "Sunday markets (Arpora) are worth the evening visit"] },
  ],
  Kerala: [
    { category: "Houseboat Tips", tips: ["Book KTDC-certified houseboats — avoid private unlicensed ones", "1-night/1-day houseboat in Alleppey is the standard package (₹7,000–15,000)", "Negotiate price directly with operator, not via touts", "Best experience: overnight houseboat with sunset over the backwaters"] },
    { category: "Health", tips: ["Carry mosquito repellent — backwaters have mosquitoes especially at dusk", "Use sunscreen — tropical sun is intense even on cloudy days", "Monsoon travel: carry good waterproof gear", "Ayurveda treatments: book only at certified Ayurvedic centers"] },
    { category: "Getting Around", tips: ["Kerala has great State Road Transport (KSRTC) buses", "Kochi: water ferries and Metro are excellent + cheap", "Hire a driver for flexibility in Munnar and Thekkady", "Tea estate roads in Munnar are narrow — avoid driving at night"] },
    { category: "Culture & Etiquette", tips: ["Temples: strict dress code, non-Hindus barred from many sanctums", "Kathakali performances: arrive 1 hour early for make-up viewing", "Kerala is liberal but dress modestly in rural areas", "Onam (Aug-Sep) is the best time for authentic culture — try sadya feast"] },
  ],
  Manali: [
    { category: "Altitude & Health", tips: ["Manali is at 2,050m — most people adjust fine", "Rohtang Pass (3,978m): headaches common — take it slow", "Spiti via Kunzum La (4,550m): acclimatize for 2 days in Manali first", "Carry Diamox for high altitude crossings; consult doctor before use"] },
    { category: "Permits & Regulations", tips: ["Rohtang Pass: online permit required at hptdc.in (₹500, limited vehicles/day)", "Inner Line Permit for Lahaul-Spiti: available at SDM office Manali", "Solang Valley has fixed activity rates — don't overpay", "Carry 5 passport photos and copies of ID for permits"] },
    { category: "Gear & Packing", tips: ["Even in June: carry warm jacket, thermal base layer for evenings", "Good walking shoes essential for uneven mountain terrain", "Rent gear in Old Manali (cheaper) rather than Mall Road", "Download offline maps — cellular signal disappears beyond Rohtang"] },
    { category: "Getting Around Locally", tips: ["Old Manali to Mall Road: local bus ₹15 or shared tempo ₹30", "Solang Valley: shared cab ₹150/person from Mall Road", "Naggar Castle: worth a half-day detour (10km from Manali)", "Kullu Valley: famous for apple orchards (Sept–Nov harvest)"] },
  ],
  "Leh Ladakh": [
    { category: "Altitude Acclimatization (Critical)", tips: ["Spend first 2 nights at rest in Leh (3,500m) — no treks or strenuous activity", "Headache, nausea, insomnia are normal — monitor closely", "Descend immediately if you experience confusion or difficulty breathing", "Drink 3–4 litres of water daily; avoid alcohol for first 48hrs"] },
    { category: "Permits", tips: ["Inner Line Permits required for: Pangong Tso, Nubra Valley, Tso Moriri, Dah-Hanu", "Get permits from DC Office Leh or online at lahauldcp.nic.in (₹400/person)", "Carry 5 passport photos and ID photocopies", "Foreign nationals need PAP (Protected Area Permit) — different process"] },
    { category: "Practical Essentials", tips: ["BSNL/BSNL 4G is the only reliable network — buy SIM at Leh market", "Carry sufficient cash — ATMs in Leh only (none in Nubra, Pangong)", "Solar charging banks are useful — frequent power cuts", "Petrol stations: Leh, Kargil, Padum — fill up fully before remote routes"] },
    { category: "Royal Enfield Rental", tips: ["Minimum 2–3 days acclimatization before riding at altitude", "Rent from established shops on Fort Road (₹1,500–2,000/day)", "Check bike thoroughly: brakes, chain, tire tread, toolkit", "Always ride in pairs on remote routes; carry satellite phone or PLB if solo"] },
  ],
  Bali: [
    { category: "Visa & Entry", tips: ["Visa on Arrival (VoA): 30 days, extendable 30 more, USD 35 (₹2,900 approx)", "Pay at the VoA counter before immigration — have exact change", "Passport valid for 6 months beyond travel dates", "Return/onward ticket required at immigration"] },
    { category: "Cultural Respect", tips: ["Cover shoulders and knees at temples — sarongs available at entrance", "Don't point feet at religious offerings or people", "Offerings (canang sari) on sidewalks — step around, never over them", "Ask permission before photographing ceremonies or locals"] },
    { category: "Transport & Safety", tips: ["International driving license required for scooter rental", "Grab and GoJek for safe, fixed-price rides", "Don't drink tap water — ever", "Watch out for monkey theft at Uluwatu and Ubud monkey forest — keep valuables close"] },
    { category: "Health & Practicalities", tips: ["Travel insurance mandatory — medical evacuation is expensive", "Kuta/Seminyak beach: currents can be dangerous — swim between flags", "Dengue present — use repellent especially at dawn/dusk", "Currency exchange: use authorized money changers — beware of counting tricks"] },
  ],
  Bangkok: [
    { category: "Scams to Avoid", tips: ["Tuk-tuk 'grand tour' scam — be suspicious of overly helpful strangers", "Gem scam: avoid any invitation to a 'government gem sale'", "Closed today scam at Grand Palace — it's almost never closed", "Taxi: always insist on meter; airport taxis add ₹400 expressway toll"] },
    { category: "Getting Around", tips: ["BTS Skytrain + MRT Metro is fast and cheap (₹50–200/trip)", "Grab app is the safest, most transparent taxi option", "Chao Phraya Express Boat: scenic and affordable (₹50/hop)", "Tuk-tuks: good for short tourist hops, negotiate strictly"] },
    { category: "Temple Etiquette", tips: ["Dress code: cover shoulders and knees at all wats", "Remove shoes before entering temple buildings", "Wat Phra Kaew (Grand Palace): no shorts/sleeveless — wraps available at entrance", "Photography allowed outside but restricted inside some prayer halls"] },
    { category: "Food & Health", tips: ["Street food is safe if it's cooked hot in front of you", "No tap water — bottled everywhere ₹20–40", "Stomach issues common in first 2 days — pack Imodium and ORS", "Chatuchak Weekend Market: stay hydrated and wear comfortable shoes"] },
  ],
  Tokyo: [
    { category: "Navigation & Transport", tips: ["IC Card (Suica/Pasmo): buy at airport vending machine, reload as needed", "Google Maps transit directions are extremely accurate in Tokyo", "Japan Rail Pass (buy in India before travel): worth it for Kyoto/Osaka trips", "Night buses between cities are very cheap alternative to Shinkansen"] },
    { category: "Money & Tech", tips: ["Japan is still largely cash-based — carry yen", "7-Eleven and Post Office ATMs accept foreign cards", "Pocket WiFi rental or local SIM at airport recommended", "IC card works as payment at convenience stores and vending machines"] },
    { category: "Cultural Etiquette", tips: ["Don't talk on phone in trains/buses — text only", "Queue properly — Japanese queuing culture is strict", "Tipping is not done and considered rude in Japan", "Trash cans are very rare — carry a small bag for your rubbish"] },
    { category: "Practical Tips", tips: ["Convenience stores (7-Eleven, Lawson, FamilyMart) are excellent for cheap meals", "Capsule hotels are perfectly safe and clean — great budget option", "Department store basements (depachika) have amazing food at reasonable prices", "Book popular restaurants in advance — some require reservations months ahead"] },
  ],
  Rome: [
    { category: "Tickets & Queues", tips: ["Book Colosseum + Forum tickets online weeks ahead (colosseo.it) — no queues", "Vatican Museums: book at museivaticani.va — 2–3 months ahead in summer", "Borghese Gallery: strictly timed tickets, advance booking mandatory", "Trastevere neighborhood: free to explore, no booking needed — very photogenic"] },
    { category: "Transport", tips: ["Validate metro/bus tickets before boarding — fines are harsh (€50+)", "Roma Pass (48hr/72hr): covers transport + 1-2 museum entries", "Walking is the best way to explore the historic centre", "Airport to centre: Leonardo Express from Terminal 3 (32 min, ₹1,400) — avoid overpriced taxis"] },
    { category: "Safety", tips: ["Pickpocket hotspots: Colosseum area, Roman Forum, Termini Station, buses 40/64", "Use money belt or anti-theft crossbody bag in tourist areas", "Fake gladiators at Colosseum: if you take a photo, they charge €20+", "Keep camera away when not using — bag snatching from scooters occurs"] },
    { category: "Food & Culture", tips: ["Eating near major attractions: overpriced — walk 2 streets away for authentic trattorias", "Coffee culture: stand at the bar (half price of seated)", "Tap water (acqua del rubinetto) is safe and delicious in Rome", "Sunday: many shops closed; major sites open but more crowded"] },
  ],
  Dubai: [
    { category: "Culture & Dress", tips: ["Dress modestly: cover shoulders and knees in malls, souks, and public spaces", "Swimwear only at beaches/pools — not on streets or in malls", "Ramadan: no eating/drinking/smoking in public during daylight hours", "Public displays of affection can result in fines — be discreet"] },
    { category: "Practical Essentials", tips: ["Download Careem/Uber — metered, transparent pricing (cheaper than regular taxis)", "Dubai Metro covers most major attractions efficiently — buy NOL card", "Friday is weekend — many government services closed; brunch culture on Fri", "Most places accept cards but carry some cash for souks and smaller shops"] },
    { category: "Value for Money", tips: ["Burj Khalifa: book online (₹2,500 off-peak vs ₹5,500 At the Top tickets)", "Free: Dubai Creek, Al Seef Heritage area, Jumeirah Beach, Dubai Frame exterior area", "Dubai Mall food court: ₹300–600/meal vs ₹800–1,500 at restaurants inside", "Dubai Outlet Mall: genuine branded items at 40-70% discount"] },
    { category: "Health & Safety", tips: ["Extreme heat May-Sep: stay hydrated, avoid outdoor activity 12pm-4pm", "Alcohol only in licensed venues (hotels, certain restaurants, bars) — not off-license in dry areas", "Dubai is very safe — petty crime is extremely rare", "Emergency number: 999 (Police), 998 (Ambulance)"] },
  ],
  // ── Additional Indian Destinations ──────────────────────────────────────
  Rishikesh: [
    { category: "Adventure & Safety", tips: ["Book rafting with operators who provide helmets, life jackets, and a rescue kayak — non-negotiable", "Grade IV rapids (Return to Sender, Golf Course, Three Blind Mice) are for experienced swimmers only", "Avoid solo camping on Ganga river banks — flash floods without warning during monsoon", "Bungee jump at Jumpin Heights (83m) has strict weight limits (45–120kg) — carry ID"] },
    { category: "Spiritual Etiquette", tips: ["Meat and alcohol are banned in Rishikesh town — don't ask restaurant owners", "Triveni Ghat dawn aarti (5:30am) requires modest dress — dupatta or stole for women", "Photography inside ashrams requires permission — ask before shooting", "The Beatles Ashram (Chaurasi Kutia) is open 9am–5pm; entry ₹600; respects photography"] },
    { category: "Getting Around", tips: ["Tapovan, Laxman Jhula, Ram Jhula are connected by a 4km walk along the Ganga — do it barefoot at dawn", "Shared autos run between Ram Jhula and Laxman Jhula for ₹20–30", "Haridwar is 20km and easily done as a half-day from Rishikesh (evening aarti + 5am Ganga bath combo)", "Download WhatsApp Mountain Cab contact for reliable cabs to Haridwar/Dehradun"] },
    { category: "Practical Essentials", tips: ["Cash is king in ghat-side guesthouses — carry ₹2,000–3,000", "Many ayurvedic centres are tourist traps — use certified practitioners for genuine treatment", "Pack warm clothes for evenings (Dec-Mar), even if days are warm", "Mosquitoes at dawn/dusk — carry repellent for riverside walks"] },
  ],
  Varanasi: [
    { category: "Navigating the Old City", tips: ["The old city (ghats area) is a maze — download offline maps or hire a local guide for ₹500/half-day", "Rickshaws and autos can't enter most ghat lanes — 15-min walk from the last auto point is typical", "Color-code your directions: Dashashwamedh is the main/central ghat; Assi Ghat is the southern anchor", "Get deliberately lost in the lanes near Vishwanath Gali — the real Varanasi is in these alleys, not the ghats alone"] },
    { category: "Religious Respect", tips: ["Vishwanath (Golden) Temple: strict photography ban, bag storage outside, modest dress essential", "Non-Hindus are not permitted inside the inner sanctum of Kashi Vishwanath — the outer courtyard is open", "Don't photograph cremation ceremonies at Manikarnika Ghat — it's a real funeral, not a spectacle", "Touching the bier (funeral pyre) or ashes is deeply offensive — maintain a respectful distance"] },
    { category: "Health", tips: ["Don't drink or touch Ganga water — despite its spiritual significance, bacterial contamination is high", "Stomach bugs are common — stick to cooked food served hot, avoid raw chutneys at street stalls", "The heat in April-June is intense; schedule all outdoor activity before 10am", "Mosquito net essential in budget guesthouses near the ghats (standing water in old city lanes)"] },
    { category: "Photography & Ethics", tips: ["Ask before photographing sadhus — 'photo lena hai?' is polite; small tips are appreciated", "The aerial drone above Dashashwamedh aarti needs prior permission from Varanasi police", "Best boat photography: hire a boat at 4:30am (₹800–1,200/hr for private), back to shore by 7am", "Silk-weaving workshops in Adampura welcome visitors — ask for a demonstration, buy directly from weaver"] },
  ],
  Andaman: [
    { category: "Island Logistics", tips: ["All inter-island transport runs on government ferry schedules — plan your itinerary around ferry times", "Havelock to Neil ferry is 1hr; Neil to Port Blair is 1.5hrs — allow 30min buffer for boarding", "Private speedboats (Makruzz, Green Ocean) are more expensive but faster and more reliable", "Book return flights from Port Blair as soon as you book onward — capacity is limited"] },
    { category: "Water Safety", tips: ["Only swim at beaches with yellow-green flags — red means dangerous currents", "Radhanagar Beach (Beach No. 7) has rip tides — stay between the marked swimming zones", "Scuba certification (PADI Open Water): book with licensed operators only — verify their equipment safety", "Jellyfish are common Oct-Feb at some beaches — water shoes are useful"] },
    { category: "Restricted Areas & Permits", tips: ["Baratang Island (limestone caves, mangroves) requires Tribal Area Permit from Port Blair (free, same day)", "North Andaman: Diglipur and Ross & Smith Island require prior notice — arrange through Port Blair operators", "Photography near tribal areas (Jarawas) is strictly prohibited — serious legal consequences", "Cellular Jail: book sound & light show tickets in advance during peak season (₹300, book at 6pm)"] },
    { category: "Practical Essentials", tips: ["Cash is essential — very few ATMs on Havelock and Neil; carry ₹5,000–8,000 in notes", "Mobile data: only BSNL works on outer islands — buy a BSNL SIM or activate BSNL roaming", "Sunscreen and reef-safe versions recommended — standard chemical sunscreens bleach coral", "Bring all medications from mainland — pharmacies on outer islands have limited stock"] },
  ],
  Spiti: [
    { category: "Altitude Acclimatization (Critical)", tips: ["If flying to Manali then driving to Spiti: spend 1 night at Manali (2,050m), then 1 night at Chattru/Batal (4,350m) before Kaza", "If entering via Shimla-Kinnaur route: gradual gain from 1,500m to 3,650m (Kaza) over 2 days — easier on the body", "Headache and slight nausea at Kaza (3,650m) is normal — rest for 24hrs, no strenuous activity", "Descend 300–500m immediately if you experience confusion, difficulty breathing, or inability to walk straight"] },
    { category: "Permits & Regulations", tips: ["Inner Line Permit required for Kaza subdivision (free, from SDM office Kaza or online at himachal.nic.in)", "Foreign nationals need a separate ILP — carry extra passport photos and copies", "Chandratal Lake camping requires Forest Department permit (obtain in Kaza)", "Photography near military installations (Rohtang, near Kunzum) can attract attention — use judgment"] },
    { category: "Practical Essentials", tips: ["Petrol stations: Manali, Kaza, Losar — fill up completely before any remote route", "BSNL is the only network that works reliably — no Airtel/Jio beyond Kaza in most areas", "ATMs: one in Kaza (often empty/offline) — carry minimum ₹10,000 cash from Manali/Shimla", "Homestays in Kibber, Langza, Hikkim include all meals — negotiate per-day rates (₹700–1,500/person)"] },
    { category: "Road & Weather", tips: ["Rohtang Pass opens mid-May, Kunzum La by early June — call district authorities to confirm before travel", "Spiti roads are high-altitude gravel/dirt in sections — 4WD is not necessary but higher ground clearance helps", "Weather changes rapidly at 4,000m+ — warm layers essential even in July", "Night driving is dangerous on mountain switchbacks — always reach accommodation before dark"] },
  ],
  Meghalaya: [
    { category: "Living Root Bridges", tips: ["Double Decker Root Bridge at Nongriat requires 3,500+ steps down and back up — allow 5–6hrs round trip, hire a guide", "Carry trekking shoes (not sandals) for root bridge trails — surfaces are wet and uneven year-round", "Start root bridge treks by 6am to beat the heat and avoid guided group rushes", "Rainbow Falls (2km beyond Nongriat) is worth the extra effort if you have the stamina"] },
    { category: "Cherrapunji & Mawsynram", tips: ["Even in 'dry' months (Oct-Apr), carry a good raincoat — surprise showers are normal", "Nohkalikai Falls is best Nov-Jan when waterfall is full but roads are safe", "Mawsynram village (wettest place on Earth) is 56km from Shillong — road conditions vary, check ahead", "Stay in eco-homestays for authentic Khasi meals (jadoh, tungrymbai) and cultural experience"] },
    { category: "Dawki & Northeast Circuit", tips: ["Dawki River (Umngot) crystal-clear water is best Oct-Apr before monsoon silting", "The Bangladesh border at Dawki is open to Indian nationals — interesting but check permits for crossing", "Mawlynnong (Asia's cleanest village): genuine community effort, worth the drive from Shillong", "Shnongpdeng village near Dawki offers kayaking, cliff jumping, and riverside camping (₹500–800/night)"] },
    { category: "Cultural Sensitivity", tips: ["Meghalaya is a matrilineal society — women own property and family names pass through mothers; interesting to discuss with locals", "Church attendance is very high (Christian-majority state) — Sunday mornings are quiet; respect worship times", "Alcohol is widely available and socially accepted here (unlike some other Northeast states)", "Rice beer (Kyiad) is the traditional drink — try it at a homestay, not from street vendors"] },
  ],
  Shimla: [
    { category: "Getting Around", tips: ["The Mall Road is pedestrian-only from 9am onwards — leave your vehicle at the parking below, walk up", "Lift (elevator) from Cart Road to The Ridge/Mall Road costs ₹20 — use it to save the 300-step climb", "Jakhu Hill temple requires 45min hike up — beware of monkeys, keep snacks hidden", "Local HRTC buses connect Shimla to Kufri (16km), Mashobra, and Chail for ₹40–80"] },
    { category: "Winter Visits", tips: ["Dec-Feb snowfall possible — check road conditions before traveling (HRTC helpline)", "Kufri and Narkanda (65km) are better for snow activities than Shimla town", "Carry all warm clothing from home — rental quality in Shimla shops is inconsistent", "The Mall Road in snow at night is genuinely magical — plan an evening walk if you're there in January"] },
    { category: "Dining & Shopping", tips: ["Café Sol (The Mall) has the best views; Ashiana (HPTDC) is reliable for Indian food", "Himachali dham (festive thali) at local restaurants is the must-try — ask specifically", "Best buys: Himachali caps (topi), hand-knit woollens, local apple products (jam, juice, cider)", "Avoid vendors near the main tourist sites — better prices and quality in the lanes behind Mall Road"] },
    { category: "Practical Tips", tips: ["Weekend crowds (Fri night–Sunday) are intense in summer — visit mid-week if possible", "Viceregal Lodge (now IIAS) requires advance booking for tours — worth doing for colonial history", "Carry cash — small cafes and local shops don't accept cards", "Altitude is 2,200m — first-time visitors from plains may feel slightly breathless; allow 2–3 hours to adjust"] },
  ],
};

// ---------------------------------------------------------------------------
// Helper: get tips for destination with fallback by country/category
// ---------------------------------------------------------------------------
function getTipsData(destination: string, country: string, category: string): Array<{ category: string; tips: string[] }> {
  if (TRAVEL_TIPS_DATA[destination]) return TRAVEL_TIPS_DATA[destination];

  // Fallback by category/country
  const cat = category.toLowerCase();
  const cntry = country.toLowerCase();

  if (cntry === "india") {
    if (cat.includes("beach") || cat.includes("coast")) return TRAVEL_TIPS_DATA["Goa"];
    if (cat.includes("mountain") || cat.includes("hill") || cat.includes("trek")) return TRAVEL_TIPS_DATA["Manali"];
    return TRAVEL_TIPS_DATA["Rajasthan"];
  }
  if (cntry === "thailand") return TRAVEL_TIPS_DATA["Bangkok"];
  if (cntry === "indonesia") return TRAVEL_TIPS_DATA["Bali"];
  if (cntry === "japan") return TRAVEL_TIPS_DATA["Tokyo"];
  if (cntry === "italy") return TRAVEL_TIPS_DATA["Rome"];
  if (cntry === "uae" || cntry === "united arab emirates") return TRAVEL_TIPS_DATA["Dubai"];

  // Generic international
  return [
    {
      category: "Travel Essentials",
      tips: [
        "Travel insurance is mandatory — include medical evacuation coverage",
        "Photocopy your passport and store copies separately (physical + cloud)",
        "Download Google Translate offline before departure",
        "Get a local SIM at the airport for data access",
      ],
    },
    {
      category: "Health & Safety",
      tips: [
        "Check travel advisories at mea.gov.in before visiting",
        "Tap water: check local advice — bottled water is safest default",
        "Carry basic first aid: ORS, Imodium, painkillers, antiseptic",
        "Know the local emergency number; save your embassy contact",
      ],
    },
    {
      category: "Money & Tech",
      tips: [
        "Notify your bank before traveling to avoid card blocks",
        "USD in small denominations ($1, $5) useful for tips and markets",
        "Check exchange rates at xe.com before exchanging at airport",
        "International driving permit required for vehicle rental in most countries",
      ],
    },
  ];
}

// ---------------------------------------------------------------------------
// Shared utility components (styled consistently with site)
// ---------------------------------------------------------------------------
function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8">
      <p className="text-xs tracking-[0.18em] uppercase text-gold-dark font-medium mb-2">Quick Answer</p>
      <p className="text-sm text-ink font-light leading-relaxed">{children}</p>
    </div>
  );
}

function InfoBox({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-parchment rounded-xl p-6 my-6">
      {title && <p className="text-xs font-medium text-gold-dark tracking-wide uppercase mb-3">{title}</p>}
      <div className="text-sm text-muted font-light leading-relaxed">{children}</div>
    </div>
  );
}

function SectionH2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-xl font-light text-ink mt-10 mb-4">{children}</h2>;
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted font-light leading-relaxed mb-4">{children}</p>;
}

function CTALink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <a href={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-teal transition-colors underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-teal transition-colors underline-offset-2 hover:underline">
      {children}
    </Link>
  );
}

function PriceDisclaimer({ publishYear }: { publishYear: number }) {
  if (publishYear <= COST_BASE_YEAR) return null;
  return (
    <div className="border border-gold/30 bg-gold/5 rounded-xl p-4 my-6 flex items-start gap-3">
      <span className="text-gold-dark text-sm mt-0.5 flex-shrink-0">ⓘ</span>
      <div>
        <p className="text-xs font-medium text-gold-dark mb-0.5">
          Prices estimated for {publishYear}
        </p>
        <p className="text-xs text-muted font-light leading-relaxed">
          Figures are projected from {COST_BASE_YEAR} data with ~{publishYear <= COST_BASE_YEAR + 3 ? "5" : "5"}% annual inflation.
          Verify current rates on{" "}
          <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gold-dark">Booking.com</a>
          {" "}or{" "}
          <a href="https://www.google.com/travel/hotels" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gold-dark">Google Hotels</a>
          {" "}before booking.
        </p>
      </div>
    </div>
  );
}

function InternalToolsCTA({ destination }: { destination: string }) {
  return (
    <div className="bg-parchment rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div>
        <p className="text-sm font-medium text-stone-900 mb-1">Plan smarter with our free tools</p>
        <p className="text-xs text-muted font-light">Estimate your exact {destination} budget and check visa requirements before you book.</p>
      </div>
      <div className="flex gap-3 flex-shrink-0">
        <Link href="/tools/trip-calculator" className="text-xs px-4 py-2 bg-white border border-parchment-2 rounded-[2px] text-gold-dark font-medium hover:border-gold transition-colors whitespace-nowrap">
          Cost Calculator →
        </Link>
        <Link href="/tools/visa-checker" className="text-xs px-4 py-2 bg-white border border-parchment-2 rounded-[2px] text-gold-dark font-medium hover:border-gold transition-colors whitespace-nowrap">
          Visa Checker →
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// GENERATOR 1 — Best Time to Visit
// ---------------------------------------------------------------------------
export function generateBestTimeContent(post: GeneratedPost, parent: ParentMeta): JSX.Element {
  const { destination, country, duration } = parent;
  const rawData = BEST_TIME_DATA[destination];

  // Build month-by-month table data with smart defaults
  const isIndia = country === "India";
  const isSEAsia = ["Thailand", "Indonesia", "Vietnam", "Cambodia", "Malaysia"].includes(country);
  const isEurope = ["Italy", "France", "Spain", "Germany", "Greece", "Portugal", "UK", "Netherlands"].includes(country);
  const isMiddleEast = ["UAE", "Oman", "Qatar", "Jordan", "Israel"].includes(country);
  const isJapan = country === "Japan";

  const months = [
    { month: "Jan", label: "January" },
    { month: "Feb", label: "February" },
    { month: "Mar", label: "March" },
    { month: "Apr", label: "April" },
    { month: "May", label: "May" },
    { month: "Jun", label: "June" },
    { month: "Jul", label: "July" },
    { month: "Aug", label: "August" },
    { month: "Sep", label: "September" },
    { month: "Oct", label: "October" },
    { month: "Nov", label: "November" },
    { month: "Dec", label: "December" },
  ];

  // Smart rating logic based on destination or region defaults
  type MonthRating = { rating: "Best" | "Good" | "OK" | "Avoid"; crowd: "Low" | "Medium" | "High"; note: string };
  const monthRatings: Record<string, MonthRating> = {};

  const destRatings: Record<string, Record<string, MonthRating>> = {
    Kashmir: {
      Jan: { rating: "OK", crowd: "Low", note: "Snow-covered, very cold (-10°C)" },
      Feb: { rating: "OK", crowd: "Low", note: "Skiing at Gulmarg, cheapest" },
      Mar: { rating: "Good", crowd: "Medium", note: "Shikara Festival, spring starts" },
      Apr: { rating: "Best", crowd: "Medium", note: "Tulip Garden in bloom" },
      May: { rating: "Best", crowd: "High", note: "Peak spring, gardens open" },
      Jun: { rating: "Best", crowd: "High", note: "Warm, Dal Lake beautiful" },
      Jul: { rating: "OK", crowd: "Medium", note: "Monsoon rains, some flooding" },
      Aug: { rating: "OK", crowd: "Medium", note: "Monsoon continues" },
      Sep: { rating: "Good", crowd: "Medium", note: "Post-monsoon, pleasant" },
      Oct: { rating: "Best", crowd: "High", note: "Golden chinar forests peak" },
      Nov: { rating: "Good", crowd: "Low", note: "Cool, beautiful, quieter" },
      Dec: { rating: "OK", crowd: "Low", note: "Cold, some roads close" },
    },
    Rajasthan: {
      Jan: { rating: "Best", crowd: "High", note: "Cool 15–20°C, peak season" },
      Feb: { rating: "Best", crowd: "High", note: "Desert Festival Jaisalmer" },
      Mar: { rating: "Good", crowd: "Medium", note: "Warming up, manageable" },
      Apr: { rating: "OK", crowd: "Low", note: "Getting hot (35°C+)" },
      May: { rating: "Avoid", crowd: "Low", note: "Extreme heat 42–48°C" },
      Jun: { rating: "Avoid", crowd: "Low", note: "Pre-monsoon heat" },
      Jul: { rating: "OK", crowd: "Low", note: "Monsoon, Udaipur pleasant" },
      Aug: { rating: "OK", crowd: "Low", note: "Monsoon, cheapest prices" },
      Sep: { rating: "Good", crowd: "Low", note: "Post-monsoon, fresher" },
      Oct: { rating: "Best", crowd: "Medium", note: "Cooling down, great light" },
      Nov: { rating: "Best", crowd: "High", note: "Pushkar Camel Fair" },
      Dec: { rating: "Best", crowd: "High", note: "Cool, beautiful, peak season" },
    },
    Goa: {
      Jan: { rating: "Best", crowd: "High", note: "Perfect weather, peak prices" },
      Feb: { rating: "Best", crowd: "High", note: "Carnival! Spectacular" },
      Mar: { rating: "Good", crowd: "Medium", note: "Shoulder, some deals" },
      Apr: { rating: "OK", crowd: "Low", note: "Hot and humid starts" },
      May: { rating: "Avoid", crowd: "Low", note: "Very hot, pre-monsoon" },
      Jun: { rating: "Avoid", crowd: "Low", note: "Monsoon, beaches closed" },
      Jul: { rating: "Avoid", crowd: "Low", note: "Heavy rain, rough seas" },
      Aug: { rating: "Avoid", crowd: "Low", note: "Monsoon continues" },
      Sep: { rating: "OK", crowd: "Low", note: "Monsoon easing, lush green" },
      Oct: { rating: "Good", crowd: "Low", note: "Shoulder, 20% cheaper" },
      Nov: { rating: "Best", crowd: "Medium", note: "Season opens, great weather" },
      Dec: { rating: "Best", crowd: "High", note: "Christmas, NYE, peak prices" },
    },
    Bali: {
      Jan: { rating: "OK", crowd: "Medium", note: "Wet season, Nyepi prep" },
      Feb: { rating: "OK", crowd: "Low", note: "Wet season, budget prices" },
      Mar: { rating: "Good", crowd: "Medium", note: "Nyepi (Day of Silence)" },
      Apr: { rating: "Best", crowd: "Medium", note: "Dry season starts, ideal" },
      May: { rating: "Best", crowd: "Medium", note: "Beautiful, not yet peak" },
      Jun: { rating: "Best", crowd: "Medium", note: "Great weather, moderate crowd" },
      Jul: { rating: "Good", crowd: "High", note: "Peak — busiest and priciest" },
      Aug: { rating: "Good", crowd: "High", note: "Very busy, book ahead" },
      Sep: { rating: "Best", crowd: "Medium", note: "Dry, less crowd, ideal" },
      Oct: { rating: "Best", crowd: "Medium", note: "Shoulder, 20% cheaper" },
      Nov: { rating: "OK", crowd: "Low", note: "Wet season returns" },
      Dec: { rating: "OK", crowd: "Medium", note: "Wet, but Christmas festive" },
    },
    Bangkok: {
      Jan: { rating: "Best", crowd: "High", note: "Cool, dry, peak season" },
      Feb: { rating: "Best", crowd: "High", note: "Best weather, comfortable" },
      Mar: { rating: "Good", crowd: "Medium", note: "Warming but pleasant" },
      Apr: { rating: "Good", crowd: "High", note: "Songkran Festival, very hot" },
      May: { rating: "OK", crowd: "Low", note: "Monsoon starts" },
      Jun: { rating: "OK", crowd: "Low", note: "Rainy season" },
      Jul: { rating: "OK", crowd: "Low", note: "Budget-friendly" },
      Aug: { rating: "OK", crowd: "Low", note: "Rainy but travelable" },
      Sep: { rating: "OK", crowd: "Low", note: "Peak monsoon" },
      Oct: { rating: "Good", crowd: "Low", note: "Monsoon easing, deals" },
      Nov: { rating: "Best", crowd: "Medium", note: "Cool, dry starts" },
      Dec: { rating: "Best", crowd: "High", note: "Peak season, festive" },
    },
    Tokyo: {
      Jan: { rating: "Good", crowd: "Low", note: "Cold but clear, cheap" },
      Feb: { rating: "Good", crowd: "Low", note: "Cold, plum blossoms" },
      Mar: { rating: "Best", crowd: "High", note: "Cherry blossom starts" },
      Apr: { rating: "Best", crowd: "High", note: "Peak cherry blossom" },
      May: { rating: "Best", crowd: "Medium", note: "Golden Week, crowded" },
      Jun: { rating: "Good", crowd: "Low", note: "Rainy season, 30% cheaper" },
      Jul: { rating: "OK", crowd: "Medium", note: "Hot, humid, fireworks" },
      Aug: { rating: "OK", crowd: "Medium", note: "Obon festival, very hot" },
      Sep: { rating: "Good", crowd: "Low", note: "Post-typhoon, quieter" },
      Oct: { rating: "Best", crowd: "Medium", note: "Autumn leaves, ideal weather" },
      Nov: { rating: "Best", crowd: "High", note: "Peak autumn foliage" },
      Dec: { rating: "Good", crowd: "Low", note: "Cold, Christmas lights, cheap" },
    },
    Rome: {
      Jan: { rating: "Good", crowd: "Low", note: "Cold 8°C, no queues" },
      Feb: { rating: "Good", crowd: "Low", note: "Valentine's in Rome!" },
      Mar: { rating: "Good", crowd: "Medium", note: "Spring starts, warming" },
      Apr: { rating: "Best", crowd: "Medium", note: "Easter, spring perfection" },
      May: { rating: "Best", crowd: "High", note: "Ideal 20–24°C, book early" },
      Jun: { rating: "OK", crowd: "High", note: "Hot starts, very crowded" },
      Jul: { rating: "Avoid", crowd: "High", note: "35°C, max crowds, expensive" },
      Aug: { rating: "Avoid", crowd: "High", note: "Locals leave, tourists arrive" },
      Sep: { rating: "Best", crowd: "Medium", note: "Ideal: warm, less crowded" },
      Oct: { rating: "Best", crowd: "Medium", note: "Perfect weather, great value" },
      Nov: { rating: "Good", crowd: "Low", note: "Quiet, mild, cheaper" },
      Dec: { rating: "Good", crowd: "Medium", note: "Christmas markets, festive" },
    },
    Dubai: {
      Jan: { rating: "Best", crowd: "High", note: "DSF, 22–26°C, peak" },
      Feb: { rating: "Best", crowd: "High", note: "Perfect weather" },
      Mar: { rating: "Best", crowd: "High", note: "Still great, 28°C" },
      Apr: { rating: "Good", crowd: "Medium", note: "Warming up, shoulder" },
      May: { rating: "OK", crowd: "Low", note: "Getting hot (38°C+)" },
      Jun: { rating: "Avoid", crowd: "Low", note: "40–45°C, not recommended" },
      Jul: { rating: "Avoid", crowd: "Low", note: "Extreme heat 45°C+" },
      Aug: { rating: "Avoid", crowd: "Low", note: "Hottest month" },
      Sep: { rating: "OK", crowd: "Low", note: "Cooling, 38°C, cheapest" },
      Oct: { rating: "Good", crowd: "Medium", note: "Shoulder, 32°C" },
      Nov: { rating: "Best", crowd: "High", note: "Season starts, 28°C" },
      Dec: { rating: "Best", crowd: "High", note: "Festive, New Year, peak" },
    },
  };

  const ratings = destRatings[destination];
  if (ratings) {
    Object.assign(monthRatings, ratings);
  } else {
    // Generate intelligent defaults
    months.forEach(({ month }) => {
      if (isIndia) {
        const hotMonths = ["Apr", "May", "Jun"];
        const monsoonMonths = ["Jul", "Aug", "Sep"];
        const goodMonths = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
        if (hotMonths.includes(month)) monthRatings[month] = { rating: "Avoid", crowd: "Low", note: "Extreme heat" };
        else if (monsoonMonths.includes(month)) monthRatings[month] = { rating: "OK", crowd: "Low", note: "Monsoon season" };
        else monthRatings[month] = { rating: goodMonths.indexOf(month) < 3 ? "Best" : "Good", crowd: month === "Jan" || month === "Feb" ? "High" : "Medium", note: "Pleasant weather" };
      } else if (isSEAsia) {
        const wetMonths = ["Jun", "Jul", "Aug", "Sep", "Oct"];
        if (wetMonths.includes(month)) monthRatings[month] = { rating: "OK", crowd: "Low", note: "Wet season" };
        else monthRatings[month] = { rating: "Best", crowd: "Medium", note: "Dry season" };
      } else if (isEurope) {
        if (["Jul", "Aug"].includes(month)) monthRatings[month] = { rating: "OK", crowd: "High", note: "Hot and crowded" };
        else if (["Dec", "Jan", "Feb"].includes(month)) monthRatings[month] = { rating: "Good", crowd: "Low", note: "Cold, fewer crowds" };
        else monthRatings[month] = { rating: "Best", crowd: "Medium", note: "Ideal spring/autumn" };
      } else if (isMiddleEast) {
        if (["Jun", "Jul", "Aug", "Sep"].includes(month)) monthRatings[month] = { rating: "Avoid", crowd: "Low", note: "Extreme heat" };
        else monthRatings[month] = { rating: "Best", crowd: "High", note: "Perfect winter weather" };
      } else if (isJapan) {
        if (["Mar", "Apr", "Oct", "Nov"].includes(month)) monthRatings[month] = { rating: "Best", crowd: "High", note: "Cherry blossom / autumn" };
        else if (["Jul", "Aug"].includes(month)) monthRatings[month] = { rating: "OK", crowd: "Medium", note: "Hot and humid" };
        else monthRatings[month] = { rating: "Good", crowd: "Low", note: "Pleasant" };
      } else {
        monthRatings[month] = { rating: "Good", crowd: "Medium", note: "Check local season" };
      }
    });
  }

  const ratingColor: Record<string, string> = {
    Best: "bg-teal/10 text-teal font-medium",
    Good: "bg-gold/10 text-gold-dark",
    OK: "bg-parchment text-muted",
    Avoid: "bg-rust/10 text-rust",
  };

  const crowdColor: Record<string, string> = {
    Low: "text-teal",
    Medium: "text-gold-dark",
    High: "text-rust",
  };

  const defaultNote = rawData
    ? `The best time to visit ${destination} is ${rawData.split(".")[0].toLowerCase()}.`
    : `${destination} is best visited during the shoulder seasons to balance weather, crowds, and prices.`;

  const faqs = [
    {
      q: `What is the absolute best month to visit ${destination}?`,
      a: Object.entries(monthRatings).find(([, v]) => v.rating === "Best")?.[0]
        ? `${Object.entries(monthRatings).filter(([, v]) => v.rating === "Best").map(([k]) => k).join(", ")} are generally considered the best months — ${monthRatings[Object.keys(monthRatings).find((k) => monthRatings[k].rating === "Best") ?? "Oct"]?.note ?? "ideal weather conditions"}.`
        : `The peak season for ${destination} offers the best weather, though prices are higher.`,
    },
    {
      q: `Is ${destination} good to visit in monsoon?`,
      a: isIndia && ["Goa", "Rajasthan"].includes(destination)
        ? `Monsoon (Jun–Sep) is generally not recommended for ${destination} — beaches become dangerous and desert roads flood. Prices drop significantly though.`
        : isIndia
        ? `${destination} during monsoon has mixed conditions. Some areas become lush and beautiful; roads can be challenging. Budget travellers find 40–60% cheaper stays.`
        : `It depends on the specific region of ${destination}. Research microclimates — some areas are largely unaffected by regional weather patterns.`,
    },
    {
      q: `When is ${destination} cheapest to visit?`,
      a: `Off-peak season (typically ${isIndia ? "Apr–Jun or Jul–Sep" : isMiddleEast ? "Jun–Sep" : "Jan–Feb"}) offers the lowest prices — accommodation can be 30–50% cheaper and flights significantly less expensive. You trade peak-season crowds and ideal weather for savings.`,
    },
    {
      q: `How many days do I need for ${destination}?`,
      a: `The ${duration} itinerary on our parent guide covers the highlights efficiently. For a more relaxed pace, add 1–2 extra days. Budget travellers often do it in fewer days by prioritising key attractions.`,
    },
  ];

  return (
    <article>
      <QuickAnswer>
        {rawData
          ? rawData.split(".")[0] + "."
          : `The best time to visit ${destination} is during the dry season when weather is most predictable and outdoor activities are fully accessible.`}{" "}
        The table below breaks down every month so you can match your travel dates to your priorities — whether that&apos;s weather, crowds, or cost.
      </QuickAnswer>

      <SectionH2>Month-by-Month Guide to {destination}</SectionH2>
      <BodyText>
        Use this at-a-glance table to compare every month across weather, crowd level, and our recommendation. &quot;Best&quot; = ideal conditions; &quot;Avoid&quot; = not recommended for most travellers.
      </BodyText>

      <div className="overflow-x-auto my-6 rounded-xl border border-parchment-2">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-parchment border-b border-parchment-2">
              <th className="text-left p-3 font-medium text-ink text-xs">Month</th>
              <th className="text-left p-3 font-medium text-ink text-xs">Rating</th>
              <th className="text-left p-3 font-medium text-ink text-xs">Crowds</th>
              <th className="text-left p-3 font-medium text-ink text-xs hidden sm:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody>
            {months.map(({ month, label }, i) => {
              const r = monthRatings[month] ?? { rating: "Good", crowd: "Medium", note: "Pleasant conditions" };
              return (
                <tr key={month} className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}>
                  <td className="p-3 font-medium text-ink text-xs">{label}</td>
                  <td className="p-3">
                    <span className={`text-[0.68rem] px-2 py-0.5 rounded-full ${ratingColor[r.rating]}`}>{r.rating}</span>
                  </td>
                  <td className={`p-3 text-xs ${crowdColor[r.crowd]}`}>{r.crowd}</td>
                  <td className="p-3 text-xs text-muted font-light hidden sm:table-cell">{r.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {rawData && (
        <>
          <SectionH2>Detailed Season Breakdown</SectionH2>
          {rawData.split(". ").map((sentence, i) =>
            sentence.trim() ? (
              <BodyText key={i}>{sentence.trim()}{sentence.endsWith(".") ? "" : "."}</BodyText>
            ) : null
          )}
        </>
      )}

      <SectionH2>Peak Season vs Off-Season: What Changes?</SectionH2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <InfoBox title="Peak Season">
          <ul className="space-y-1.5">
            <li>• Best possible weather conditions</li>
            <li>• All attractions and activities open</li>
            <li>• Accommodation prices 30–50% higher</li>
            <li>• Flights costlier — book 2–3 months ahead</li>
            <li>• Requires more advance planning</li>
          </ul>
        </InfoBox>
        <InfoBox title="Off-Season">
          <ul className="space-y-1.5">
            <li>• Accommodation 30–50% cheaper</li>
            <li>• Fewer crowds at major attractions</li>
            <li>• Some activities/routes may be closed</li>
            <li>• Weather is the tradeoff — check specifics</li>
            <li>• Best for budget travellers who plan ahead</li>
          </ul>
        </InfoBox>
      </div>

      <InternalToolsCTA destination={destination} />

      <SectionH2>Special Events &amp; Festivals Worth Planning Around</SectionH2>
      <BodyText>
        Timing your trip around a major festival transforms a good holiday into an unforgettable one — but it also means higher prices and sold-out accommodation. Book at least 2–3 months ahead if a festival is your reason to visit.
      </BodyText>
      {rawData && rawData.toLowerCase().includes("festival") && (
        <InfoBox title="Key Festivals">
          {rawData
            .split(". ")
            .filter((s) => s.toLowerCase().includes("festival") || s.toLowerCase().includes("eid") || s.toLowerCase().includes("fair") || s.toLowerCase().includes("carnival"))
            .map((s, i) => (
              <p key={i} className="mb-1">{s.trim()}{s.endsWith(".") ? "" : "."}</p>
            ))}
        </InfoBox>
      )}

      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4 my-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
            <p className="text-sm font-medium text-stone-900 mb-2">{faq.q}</p>
            <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium text-stone-900 mb-1">Read the full {destination} itinerary guide</p>
          <p className="text-xs text-muted font-light">Our {duration} guide covers routes, budgets, and day-by-day plans.</p>
        </div>
        <CTALink href={`/blog/${parent.slug}`}>View {duration} Guide →</CTALink>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// GENERATOR 2 — Cost Breakdown
// ---------------------------------------------------------------------------
export function generateCostContent(post: GeneratedPost, parent: ParentMeta): JSX.Element {
  const { destination, country, duration } = parent;
  const data = COST_DATA[destination];

  const isIndia = country === "India";

  // Inflation adjustment based on publish year
  const inflationMultiplier = getInflationMultiplier(post.publishDate, isIndia);
  const publishYear = getPublishYear(post.publishDate);

  const genericBudget = isIndia
    ? { accommodation: "₹800–2,500", meal: "₹150–400", transport: "₹200–500/day", total: "₹2,000–5,000/day" }
    : { accommodation: "₹3,000–6,000", meal: "₹400–1,000", transport: "₹500–1,000/day", total: "₹5,000–10,000/day" };
  const genericMid = isIndia
    ? { accommodation: "₹2,500–6,000", meal: "₹500–1,200", transport: "₹800–1,500/day", total: "₹5,000–12,000/day" }
    : { accommodation: "₹7,000–14,000", meal: "₹1,000–2,500", transport: "₹1,000–2,500/day", total: "₹12,000–25,000/day" };
  const genericLuxury = isIndia
    ? { accommodation: "₹8,000–25,000", meal: "₹1,500–4,000", transport: "₹2,000–4,000/day", total: "₹15,000–40,000/day" }
    : { accommodation: "₹18,000–50,000", meal: "₹2,500–7,000", transport: "₹3,000–8,000/day", total: "₹30,000–80,000/day" };

  const budget = inflateCostRow(data?.budget ?? genericBudget, inflationMultiplier);
  const midRange = inflateCostRow(data?.midRange ?? genericMid, inflationMultiplier);
  const luxury = inflateCostRow(data?.luxury ?? genericLuxury, inflationMultiplier);
  const highlights = (data?.highlights ?? [
    `${destination} accommodation starts at ${budget.accommodation}/night`,
    "Local meals at recommended restaurants",
    "Day passes for public transport where available",
    "Entry fees for major attractions",
  ]).map((h) => inflatePrice(h, inflationMultiplier));
  const flightNote = inflatePrice(
    data?.flightNote ?? (isIndia ? `Domestic flights from major cities: ₹3,000–8,000 one-way.` : `International flights from India: ₹30,000–80,000 round trip depending on routing.`),
    inflationMultiplier
  );

  // Duration to days
  const numDays = parseInt(duration) || 5;

  const calcTotal = (daily: string, days: number) => {
    const [low, high] = daily.replace(/[₹,]/g, "").split("–").map((s) => parseInt(s.replace(/\D/g, "")) || 0);
    if (!low || !high) return daily;
    return `₹${(low * days).toLocaleString("en-IN")}–${(high * days).toLocaleString("en-IN")}`;
  };

  const faqs = [
    {
      q: `What is the minimum budget for ${duration} in ${destination}?`,
      a: `On a tight budget, expect to spend around ${budget.total}/day on accommodation, food, and local transport. For ${numDays} days, that's roughly ${calcTotal(budget.total, numDays)} excluding flights.`,
    },
    {
      q: `Is ${destination} expensive for Indian travellers?`,
      a: isIndia
        ? `${destination} is very accessible for Indian travellers. Budget options are widely available; even mid-range travel offers excellent value. The main variable is accommodation — choose wisely.`
        : `${destination} is ${["Bali", "Bangkok"].includes(destination) ? "very affordable" : "moderately priced"} for Indians. The rupee exchange rate works in your favour for ${["Bali", "Bangkok"].includes(destination) ? "Southeast Asian" : "international"} destinations — daily expenses in INR terms are often comparable to Indian metro cities.`,
    },
    {
      q: `Should I carry cash or use cards in ${destination}?`,
      a: isIndia
        ? `UPI and cards work well in cities. Carry cash (₹3,000–5,000/day) for rural areas, markets, and small eateries where cards are not accepted.`
        : `${["Tokyo", "Dubai"].includes(destination) ? "Cards are widely accepted though cash is still used at markets and smaller shops." : ["Bali", "Bangkok"].includes(destination) ? "Cash (local currency) is king especially at markets, temples, and smaller restaurants. Use ATMs for the best rates." : "A mix of cash and cards works best. Notify your bank before traveling to avoid blocks."}`,
    },
    {
      q: `What are the biggest unexpected expenses in ${destination}?`,
      a: `Common surprises: ${isIndia ? "guide fees at forts (₹300–600), camera fees at heritage sites (₹25–100), porter tips, and taxi negotiation gaps" : destination === "Bali" ? "mandatory travel insurance, Bali tourism tax (~₹500), scooter damage deposits, and guided trek fees" : destination === "Tokyo" ? "restaurant service charges, high transit costs to day-trip destinations, and popular restaurant reservations requiring advance booking" : "tourist area restaurant markups (3–5x), attraction fast-track ticket premiums, and luggage storage fees"}.`,
    },
  ];

  return (
    <article>
      <PriceDisclaimer publishYear={publishYear} />

      <QuickAnswer>
        A {numDays}-day trip to {destination} costs approximately{" "}
        <strong className="text-ink">{calcTotal(budget.total, numDays)}</strong> on a budget,{" "}
        <strong className="text-ink">{calcTotal(midRange.total, numDays)}</strong> mid-range, or{" "}
        <strong className="text-ink">{calcTotal(luxury.total, numDays)}</strong> for a luxury experience — per person, excluding international flights.
      </QuickAnswer>

      <SectionH2>Daily Cost Breakdown by Travel Style</SectionH2>
      <BodyText>
        All figures are per person in Indian Rupees (₹), estimated for {publishYear}, based on double occupancy for accommodation and shared transport where applicable. Solo travellers should add 20–30% for accommodation.
      </BodyText>

      <div className="overflow-x-auto my-6 rounded-xl border border-parchment-2">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-parchment border-b border-parchment-2">
              <th className="text-left p-3 font-medium text-ink text-xs">Category</th>
              <th className="text-left p-3 font-medium text-xs text-teal">Budget</th>
              <th className="text-left p-3 font-medium text-xs text-gold-dark">Mid-Range</th>
              <th className="text-left p-3 font-medium text-xs text-rust">Luxury</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Accommodation/night", b: budget.accommodation, m: midRange.accommodation, l: luxury.accommodation },
              { label: "Meals/day", b: budget.meal, m: midRange.meal, l: luxury.meal },
              { label: "Local Transport", b: budget.transport, m: midRange.transport, l: luxury.transport },
              { label: "Daily Total (est.)", b: budget.total, m: midRange.total, l: luxury.total },
              { label: `${numDays}-Day Trip Total`, b: calcTotal(budget.total, numDays), m: calcTotal(midRange.total, numDays), l: calcTotal(luxury.total, numDays) },
            ].map((row, i) => (
              <tr key={i} className={i === 4 ? "bg-parchment border-t border-parchment-2 font-medium" : i % 2 === 0 ? "bg-white" : "bg-cream/30"}>
                <td className="p-3 text-xs text-ink">{row.label}</td>
                <td className="p-3 text-xs text-teal">{row.b}</td>
                <td className="p-3 text-xs text-gold-dark">{row.m}</td>
                <td className="p-3 text-xs text-rust">{row.l}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionH2>Destination-Specific Cost Highlights</SectionH2>
      <BodyText>Real prices for the things you&apos;ll actually spend money on in {destination}:</BodyText>
      <ul className="space-y-2 my-4">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted font-light">
            <span className="text-gold mt-0.5">•</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <SectionH2>Getting There: Flight Costs</SectionH2>
      <InfoBox title="Flight Budget">
        <p>{flightNote}</p>
        <p className="mt-2">Pro tip: Use Google Flights&apos; &quot;Explore&quot; map to find the cheapest departure windows. Flexibility of ±3 days can save ₹5,000–15,000 on return flights.</p>
      </InfoBox>

      <SectionH2>Money-Saving Tips for {destination}</SectionH2>
      <div className="space-y-3 my-4">
        {[
          isIndia ? "Book trains on IRCTC at least 30–60 days ahead — Tatkal adds 20–30% to base fare" : "Book international flights 6–10 weeks ahead for best fares; use Incognito mode when searching",
          `Travel in ${isIndia ? "shoulder season (Sep-Oct or Feb-Mar)" : "Apr-Jun or Sep-Oct"} — accommodation is 20–40% cheaper than peak season`,
          isIndia ? "Government-run restaurants (Rajasthan Tourism, MTDC etc) offer reliable, hygienic food at budget prices" : "Cook or buy from supermarkets/convenience stores for some meals — saves significantly",
          "Book attractions online in advance — skip-the-line tickets often cost the same as door prices but save hours",
          isIndia ? "Hire an auto/tempo rather than taxi for short distances — 3–4x cheaper" : "Use public transport (metro, bus) over taxis — often 5–10x cheaper in major cities",
        ].map((tip, i) => (
          <div key={i} className="flex items-start gap-3 bg-white border border-parchment-2 rounded-lg p-4">
            <span className="text-gold text-lg leading-none mt-0.5">✦</span>
            <p className="text-sm text-muted font-light leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>

      <InternalToolsCTA destination={destination} />

      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4 my-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
            <p className="text-sm font-medium text-stone-900 mb-2">{faq.q}</p>
            <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium text-stone-900 mb-1">See the full {destination} itinerary</p>
          <p className="text-xs text-muted font-light">Our {duration} guide includes day-by-day plans with real costs built in.</p>
        </div>
        <CTALink href={`/blog/${parent.slug}`}>View {duration} Guide →</CTALink>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// GENERATOR 3 — How to Reach
// ---------------------------------------------------------------------------
export function generateHowToReachContent(post: GeneratedPost, parent: ParentMeta): JSX.Element {
  const { destination, country, duration } = parent;
  const data = TRANSPORT_DATA[destination];

  const isIndia = country === "India";

  const fallbackOptions = isIndia
    ? [
        { mode: "Flight", details: `Check IndiGo, Air India, Vistara, SpiceJet for direct flights to ${destination}`, duration: "1–3hr depending on origin", cost: "₹3,000–10,000 one-way" },
        { mode: "Train", details: `Indian Railways connects most cities — check IRCTC for schedules to nearest railhead`, duration: "Varies by route", cost: "₹300–2,000 depending on class" },
        { mode: "Road/Bus", details: `State and private buses operate to most destinations. Volvo buses for long routes`, duration: "Varies", cost: "₹400–1,500" },
      ]
    : [
        { mode: "Flight (International)", details: `Multiple Indian carriers and foreign airlines operate to ${destination}. Check via Skyscanner`, duration: "Varies", cost: "₹20,000–80,000 RT from India" },
        { mode: "Connecting via Hub", details: "Consider routing via Singapore, Dubai, or Bangkok for better fare options", duration: "8–16hr total", cost: "Check Skyscanner/Google Flights" },
      ];

  const fallbackTips = isIndia
    ? ["Book IRCTC trains 60 days in advance for confirmed seats", "Tatkal quota opens 1 day before — 20–30% premium but immediate confirmation", "Private Volvo buses often match train comfort for long overnight routes"]
    : ["Book international flights 6–8 weeks ahead for best prices", "Google Flights 'price calendar' shows cheapest days to fly", "Consider flying into alternate airports (e.g. secondary city airports) for savings"];

  const options = data?.options ?? fallbackOptions;
  const tips = data?.tips ?? fallbackTips;

  const faqs = [
    {
      q: `What is the cheapest way to reach ${destination} from Delhi?`,
      a: isIndia
        ? `Budget flights (IndiGo, SpiceJet) are often cheapest if booked 3–6 weeks ahead. For nearby destinations, overnight Volvo bus or sleeper train beats flights on total cost (no transfer time to/from airport). Check prices for your specific dates on Google Flights and IRCTC.`
        : `For international destinations, budget airlines like Air Asia and IndiGo often offer the cheapest fares. Be flexible on dates — departing Tuesday or Wednesday often saves ₹5,000–10,000. Compare total costs including baggage fees.`,
    },
    {
      q: `Do I need a visa to visit ${destination}?`,
      a: isIndia
        ? `No visa required for travel within India. However, some restricted areas (Lakshadweep, restricted zones in J&K, Arunachal Pradesh border areas) require permits. Check specific requirements at the destination.`
        : `Indian passport holders need to check visa requirements at ${destination}. Use our Visa Checker tool for current requirements and processing times.`,
    },
    {
      q: `How do I get around ${destination} locally?`,
      a: isIndia
        ? `Local transport options vary widely. Cities have autos and app-based cabs (Ola/Uber). Hill stations often rely on local taxis or jeeps. Always negotiate non-metered fares in advance. For hill treks, local guides know conditions best.`
        : `${["Bali", "Tokyo", "Bangkok"].includes(destination) ? `${destination === "Bali" ? "Rent a scooter (with IDP) or use Grab for day-to-day travel. A private driver for full-day excursions (~₹2,500) offers the best value for groups." : destination === "Tokyo" ? "The IC Card (Suica/Pasmo) on Tokyo Metro and JR Lines covers almost everywhere. For day trips, JR Pass shinkansen is unbeatable." : "BTS Skytrain + MRT + Grab app covers all of Bangkok efficiently. Tuk-tuks for short tourist hops only."}` : "Use a combination of public transport, app-based rideshare, and taxis. Ask your accommodation for recommended local options."}`,
    },
    {
      q: `Is it safe to drive to ${destination}?`,
      a: isIndia
        ? destination === "Leh Ladakh" || destination === "Manali"
          ? `The mountain highways to ${destination} are legendary but require experience — steep gradients, narrow roads, unpredictable weather, altitude effects on your vehicle. If you're not an experienced hill driver, hiring a local driver is strongly recommended.`
          : `Road conditions in India vary widely. National highways are generally good; state roads can be rough. Self-drive is fine for most Indian destinations if you're comfortable driving on Indian roads. Book a GPS-enabled rental car for navigating unfamiliar territory.`
        : `International road trips from India are generally not feasible given visa restrictions at borders. For within-country driving (e.g. renting a car in Bali, Europe), an International Driving Permit (IDP) is required — get one from your regional RTO before departure.`,
    },
  ];

  return (
    <article>
      <QuickAnswer>
        {isIndia
          ? `${destination} is accessible by air, train, and road. ${options[0]?.details ?? "Multiple transport options are available."} Flying is fastest; trains offer the best value for most travellers.`
          : `Reaching ${destination} from India requires ${options.length === 1 ? "a direct flight" : "an international flight, sometimes with a connection"}. ${flightNote(data, destination)} Check visa requirements before booking.`}
      </QuickAnswer>

      <SectionH2>How to Reach {destination}: All Options Compared</SectionH2>
      <BodyText>
        Here are all the practical ways to reach {destination}, with real costs and durations. Pick what matches your priorities — speed, budget, or experience.
      </BodyText>

      <div className="space-y-4 my-6">
        {options.map((opt, i) => (
          <div key={i} className="bg-white border border-parchment-2 rounded-xl p-5 hover:border-gold/40 transition-colors">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1">
                <p className="text-sm font-medium text-stone-900 mb-1.5 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold/10 text-gold-dark text-xs flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                  {opt.mode}
                </p>
                <p className="text-sm text-muted font-light leading-relaxed">{opt.details}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-gold-dark font-medium">{opt.cost}</p>
                <p className="text-xs text-muted font-light mt-0.5">{opt.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SectionH2>Insider Tips for Getting to {destination}</SectionH2>
      <ul className="space-y-3 my-4">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
            <p className="text-sm text-muted font-light leading-relaxed">{tip}</p>
          </li>
        ))}
      </ul>

      <SectionH2>Getting Around {destination} Once You Arrive</SectionH2>
      <BodyText>
        Getting to {destination} is half the battle — here&apos;s how to navigate once you land.
      </BodyText>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <InfoBox title="Budget Option">
          {isIndia ? (
            <p>Local autos, shared cabs, and KSRTC/state buses are your cheapest options. Negotiate fares before boarding for non-metered vehicles. Ola/Uber available in most cities.</p>
          ) : (
            <p>Public transport (metro, buses, local trains) gives the best value. Buy a transit card on arrival for seamless travel. Grab/GoJek or equivalent rideshare apps work in most Asian cities.</p>
          )}
        </InfoBox>
        <InfoBox title="Comfort Option">
          {isIndia ? (
            <p>Hire a car + driver for ₹1,500–2,500/day — best for hill stations and multi-stop itineraries. Your hotel or guesthouse usually has trusted driver contacts.</p>
          ) : (
            <p>Private driver or rental car (with IDP) gives maximum flexibility. Day-long driver hire (₹2,000–4,000) is best for remote sights outside the city.</p>
          )}
        </InfoBox>
      </div>

      <InternalToolsCTA destination={destination} />

      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4 my-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
            <p className="text-sm font-medium text-stone-900 mb-2">{faq.q}</p>
            <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium text-stone-900 mb-1">See the full {destination} {duration} itinerary</p>
          <p className="text-xs text-muted font-light">Includes accommodation recommendations near transport hubs.</p>
        </div>
        <CTALink href={`/blog/${parent.slug}`}>View {duration} Guide →</CTALink>
      </div>
    </article>
  );
}

function flightNote(data: typeof TRANSPORT_DATA[string] | undefined, destination: string): string {
  if (!data) return `Most travellers fly to ${destination}.`;
  return data.options[0]?.cost ? `Flights cost approximately ${data.options[0].cost} round trip.` : `Multiple flight options are available.`;
}

// ---------------------------------------------------------------------------
// GENERATOR 4 — Travel Tips
// ---------------------------------------------------------------------------
export function generateTravelTipsContent(post: GeneratedPost, parent: ParentMeta): JSX.Element {
  const { destination, country, duration } = parent;
  const tipsData = getTipsData(destination, country, parent.category);
  const isIndia = country === "India";

  const faqs = [
    {
      q: `Is ${destination} safe for solo female travellers?`,
      a: isIndia
        ? `${destination} is generally safe for solo female travellers with standard precautions: dress modestly in conservative areas, avoid poorly lit streets at night, share your itinerary with someone trusted, and stay in reputable guesthouses. Heritage cities like Jaipur and Udaipur have a solid infrastructure for solo women travellers. Mountain destinations (Kashmir, Ladakh, Manali) are known for being very safe with local communities that are accustomed to tourists.`
        : `${destination} is ${["Tokyo", "Dubai", "Bali"].includes(destination) ? "very safe" : "generally safe"} for solo female travellers. ${destination === "Tokyo" ? "Japan has extremely low crime rates." : destination === "Dubai" ? "Dubai is very safe but dress modestly and be aware of cultural norms." : destination === "Bali" ? "Bali is traveller-friendly though standard precautions apply — particularly watch your belongings at crowded temples." : "Exercise standard precautions, stay aware of your surroundings, and register with the Indian Embassy if staying long-term."}`,
    },
    {
      q: `What should I pack for ${destination}?`,
      a: isIndia
        ? `Essentials: comfortable walking shoes, breathable clothing (layers for mountains/evenings), a dupatta or scarf (temple visits), sunscreen, insect repellent, a basic first aid kit with ORS and Imodium, copies of ID, power bank. ${destination === "Leh Ladakh" || destination === "Manali" ? "Add: heavy jacket, thermal base layers, gloves, altitude medication (Diamox after doctor consultation), and trekking poles for high-altitude passes." : destination === "Goa" || destination === "Andaman" ? "Add: swimwear, reef-safe sunscreen, rash guard, waterproof bag for beach activities." : ""}`
        : `International essentials: valid passport (6 months beyond travel), visas arranged, travel insurance, universal power adapter, local currency (cash), unlocked mobile for local SIM. Destination-specific: ${destination === "Tokyo" ? "IC Card for transport, cash (Japan is still cash-heavy)." : destination === "Bali" ? "Sarong for temple visits, lightweight breathable clothing, insect repellent." : destination === "Dubai" ? "Modest clothing for public spaces, formal wear for upscale venues." : "Check your destination's weather and cultural norms for specific packing needs."}`,
    },
    {
      q: `What are the most common tourist mistakes in ${destination}?`,
      a: isIndia
        ? `Top mistakes: 1) Not booking trains/accommodation far enough ahead during peak season. 2) Not negotiating taxi/auto fares before getting in. 3) Trusting touts outside major attractions. 4) Underestimating travel time between cities. 5) Not carrying cash in rural areas where digital payments don't work.`
        : `Common mistakes: 1) Not checking visa requirements until too late. 2) Not having travel insurance (medical emergency costs can be devastating). 3) Overlooking local transport options — many cities have cheap, efficient public transport. 4) Over-scheduling — budget buffer time for delays and spontaneous discoveries. 5) ${destination === "Bali" ? "Ignoring motorbike risks — more tourists are injured on Bali roads than anywhere else." : destination === "Tokyo" ? "Not validating rail tickets before travel or underestimating the IC Card top-up needed." : "Eating only at tourist-facing restaurants — the real food culture is a few streets away."}`,
    },
    {
      q: `How much cash should I carry in ${destination}?`,
      a: isIndia
        ? `Carry ₹3,000–5,000 per day in cash as a baseline. ATMs are widely available in cities but sparse in hill stations and rural areas. In very remote areas (Ladakh beyond Leh, Spiti Valley), carry 3–4 days of cash reserves. UPI works at most urban businesses now.`
        : `${destination === "Tokyo" ? "Japan is still very cash-dependent — carry ¥50,000–¥100,000 (₹30,000–60,000) for a week. Use Post Office or 7-Eleven ATMs for the best rates." : destination === "Bali" ? "Carry IDR (Indonesian Rupiah). Exchange ₹5,000–10,000 equivalent at a time. Use money changers (not banks) for best rates — verify count carefully." : destination === "Bangkok" ? "Thai Baht (THB). ATMs widely available but charge ~₹250/withdrawal. Carry ₹2,000–3,000 equivalent for markets and smaller eateries." : "Check local advice on cash vs card acceptance. Always have some local currency for emergencies, street food, and smaller vendors."}`,
    },
  ];

  return (
    <article>
      <QuickAnswer>
        {destination} is {isIndia ? "a popular and well-served destination for Indian travellers" : `an international destination that Indian travellers visit on ${country === "Thailand" || country === "Indonesia" ? "e-Visa or Visa on Arrival" : "a pre-arranged visa"}`}. These tips are drawn from real traveller experiences and updated for 2026 — read them before you go and save yourself the lessons others learned the hard way.
      </QuickAnswer>

      {tipsData.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          <SectionH2>{section.category}</SectionH2>
          <ul className="space-y-3 my-4">
            {section.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border border-parchment-2 rounded-lg p-4">
                <span className="text-gold text-base leading-none mt-0.5 flex-shrink-0">✦</span>
                <p className="text-sm text-muted font-light leading-relaxed">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <InternalToolsCTA destination={destination} />

      <SectionH2>Before You Go: Checklist</SectionH2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {[
          isIndia ? "✓ Train/bus tickets booked on IRCTC" : "✓ Visa applied and approved",
          "✓ Travel insurance purchased",
          "✓ Accommodation booked (at least first night)",
          isIndia ? "✓ Cash withdrawn for remote areas" : "✓ Notify bank of international travel",
          "✓ Offline maps downloaded (Maps.me or Google Maps)",
          isIndia ? "✓ Local SIM or roaming enabled" : "✓ Local SIM arranged or pocket WiFi booked",
          "✓ Emergency contacts saved (local + embassy)",
          "✓ Key documents photocopied (passport, tickets, insurance)",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-parchment rounded-lg px-4 py-3 text-sm text-muted font-light">
            {item}
          </div>
        ))}
      </div>

      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4 my-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
            <p className="text-sm font-medium text-stone-900 mb-2">{faq.q}</p>
            <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium text-stone-900 mb-1">Read the complete {destination} {duration} itinerary</p>
          <p className="text-xs text-muted font-light">Day-by-day plans with accommodation, transport, and real budgets.</p>
        </div>
        <CTALink href={`/blog/${parent.slug}`}>View {duration} Guide →</CTALink>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// DISPATCH — generateContent
// ---------------------------------------------------------------------------
export function generateContent(post: GeneratedPost, parent: ParentMeta): JSX.Element {
  switch (post.type) {
    case "best-time":
      return generateBestTimeContent(post, parent);
    case "cost-breakdown":
      return generateCostContent(post, parent);
    case "how-to-reach":
      return generateHowToReachContent(post, parent);
    case "travel-tips":
      return generateTravelTipsContent(post, parent);
    default:
      return (
        <div className="bg-parchment rounded-xl p-8 text-center">
          <p className="text-muted font-light text-sm">Content coming soon.</p>
        </div>
      );
  }
}
