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
};

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
      <p className="text-[0.6rem] tracking-[0.18em] uppercase text-gold-dark font-medium mb-2">Quick Answer</p>
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

function InternalToolsCTA({ destination }: { destination: string }) {
  return (
    <div className="bg-parchment rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div>
        <p className="text-sm font-medium text-ink mb-1">Plan smarter with our free tools</p>
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
        The table below breaks down every month so you can match your travel dates to your priorities — whether that's weather, crowds, or cost.
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
            <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
            <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink mb-1">Read the full {destination} itinerary guide</p>
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

  const genericBudget = isIndia
    ? { accommodation: "₹800–2,500", meal: "₹150–400", transport: "₹200–500/day", total: "₹2,000–5,000/day" }
    : { accommodation: "₹3,000–6,000", meal: "₹400–1,000", transport: "₹500–1,000/day", total: "₹5,000–10,000/day" };
  const genericMid = isIndia
    ? { accommodation: "₹2,500–6,000", meal: "₹500–1,200", transport: "₹800–1,500/day", total: "₹5,000–12,000/day" }
    : { accommodation: "₹7,000–14,000", meal: "₹1,000–2,500", transport: "₹1,000–2,500/day", total: "₹12,000–25,000/day" };
  const genericLuxury = isIndia
    ? { accommodation: "₹8,000–25,000", meal: "₹1,500–4,000", transport: "₹2,000–4,000/day", total: "₹15,000–40,000/day" }
    : { accommodation: "₹18,000–50,000", meal: "₹2,500–7,000", transport: "₹3,000–8,000/day", total: "₹30,000–80,000/day" };

  const budget = data?.budget ?? genericBudget;
  const midRange = data?.midRange ?? genericMid;
  const luxury = data?.luxury ?? genericLuxury;
  const highlights = data?.highlights ?? [
    `${destination} accommodation starts at ${budget.accommodation}/night`,
    "Local meals at recommended restaurants",
    "Day passes for public transport where available",
    "Entry fees for major attractions",
  ];
  const flightNote = data?.flightNote ?? (isIndia ? `Domestic flights from major cities: ₹3,000–8,000 one-way.` : `International flights from India: ₹30,000–80,000 round trip depending on routing.`);

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
      <QuickAnswer>
        A {numDays}-day trip to {destination} costs approximately{" "}
        <strong className="text-ink">{calcTotal(budget.total, numDays)}</strong> on a budget,{" "}
        <strong className="text-ink">{calcTotal(midRange.total, numDays)}</strong> mid-range, or{" "}
        <strong className="text-ink">{calcTotal(luxury.total, numDays)}</strong> for a luxury experience — per person, excluding international flights.
      </QuickAnswer>

      <SectionH2>Daily Cost Breakdown by Travel Style</SectionH2>
      <BodyText>
        All figures are per person in Indian Rupees (₹), based on double occupancy for accommodation and shared transport where applicable. Solo travellers should add 20–30% for accommodation.
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
            <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
            <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink mb-1">See the full {destination} itinerary</p>
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
                <p className="text-sm font-medium text-ink mb-1.5 flex items-center gap-2">
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
            <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
            <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink mb-1">See the full {destination} {duration} itinerary</p>
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
            <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
            <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium text-ink mb-1">Read the complete {destination} {duration} itinerary</p>
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
