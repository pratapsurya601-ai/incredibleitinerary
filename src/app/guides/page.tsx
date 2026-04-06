import type { Metadata } from "next";
import Link from "next/link";
import DownloadButton from "@/components/pdf/DownloadButton";
import ComingSoonSection from "@/components/pdf/ComingSoonSection";

export const metadata: Metadata = {
  title: "Free Travel Guide PDFs — IncredibleItinerary",
  description:
    "Download free print-ready PDF travel guides. Rajasthan, Kerala, Goa, Kashmir, Japan, Paris, Dubai and 50+ destinations. Day-by-day itineraries, real budgets, packing lists. 2 free per email.",
  alternates: {
    canonical: "https://www.incredibleitinerary.com/guides",
  },
  openGraph: {
    title: "Free PDF Travel Guides — IncredibleItinerary",
    description: "Download free print-ready itinerary PDFs. 50+ destinations. 2 free per email.",
    type: "website",
  },
};

const AVAILABLE = [
  // ── FREE ──────────────────────────────────────────────────────────────────
  {
    slug: "rajasthan-7-days",
    title: "Rajasthan 7 Days",
    sub: "Jaipur · Jodhpur · Jaisalmer · Udaipur",
    emoji: "🏰",
    pages: 11,
    includes: ["Day-by-day plan", "Budget table (₹20k–₹3L)", "Packing list", "Route maps"],
    href: "/blog/rajasthan-7-days",
    country: "India",
    price: "Free",
  },
  {
    slug: "kerala-5-days",
    title: "Kerala 5 Days",
    sub: "Kochi · Munnar · Alleppey · Varkala",
    emoji: "🌊",
    pages: 10,
    includes: ["Houseboat booking guide", "Budget table (₹15k–₹1L)", "Packing list", "Route maps"],
    href: "/blog/kerala-5-days",
    country: "India",
    price: "Free",
  },
  // ── ₹99 ───────────────────────────────────────────────────────────────────
  {
    slug: "goa-3-days",
    title: "Goa 3 Days",
    sub: "North · South · Hinterland · Dudhsagar",
    emoji: "🏖️",
    pages: 8,
    includes: ["4 itinerary types", "Budget table (₹3k–₹12k/day)", "Scooter & shack tips", "Packing list"],
    href: "/blog/goa-3-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "india-budget-guide",
    title: "India Budget Guide",
    sub: "Travel India for under ₹3,000/day",
    emoji: "🇮🇳",
    pages: 11,
    includes: ["₹3k/day formula", "8-city budget table", "Scam guide", "Best apps & transport tips"],
    href: "/blog",
    country: "India",
    price: "₹99",
  },
  {
    slug: "varanasi-3-days",
    title: "Varanasi 3 Days",
    sub: "Ghats · Ganga Aarti · Kashi Vishwanath · Sarnath",
    emoji: "🕌",
    pages: 6,
    includes: ["Ganga Aarti guide", "Sunrise boat ride", "Sarnath day trip", "Silk buying guide"],
    href: "/blog/varanasi-3-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "mumbai-3-days",
    title: "Mumbai 3 Days",
    sub: "Gateway · Marine Drive · Dharavi · Juhu",
    emoji: "🌆",
    pages: 7,
    includes: ["Local train survival guide", "Street food map", "Budget (₹2k–₹8k/day)", "Bollywood tour options"],
    href: "/blog/mumbai-3-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "delhi-3-days",
    title: "Delhi 3 Days",
    sub: "Old Delhi · Qutub Minar · Humayun's Tomb · Hauz Khas",
    emoji: "🕌",
    pages: 7,
    includes: ["Metro card guide", "Old Delhi food walk", "Budget (₹1.5k–₹6k/day)", "Free entry monuments list"],
    href: "/blog/delhi-3-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "agra-2-days",
    title: "Agra 2 Days",
    sub: "Taj Mahal · Agra Fort · Fatehpur Sikri · Mehtab Bagh",
    emoji: "🕌",
    pages: 5,
    includes: ["Best Taj timing (sunrise vs sunset)", "Ticket booking guide", "Budget (₹1k–₹4k/day)", "Day-trip from Delhi tips"],
    href: "/blog/agra-2-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "amritsar-2-days",
    title: "Amritsar 2 Days",
    sub: "Golden Temple · Wagah Border · Jallianwala Bagh · Durgiana",
    emoji: "✨",
    pages: 5,
    includes: ["Golden Temple langar guide", "Wagah Border ceremony timing", "Amritsari food trail", "Budget (₹1k–₹3k/day)"],
    href: "/blog/amritsar-2-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "hyderabad-2-days",
    title: "Hyderabad 2 Days",
    sub: "Charminar · Golconda · Ramoji · Hussain Sagar",
    emoji: "🍗",
    pages: 5,
    includes: ["Best biryani spots (ranked)", "Golconda light show timings", "Budget (₹1.5k–₹5k/day)", "Pearls buying guide"],
    href: "/blog/hyderabad-3-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "pune-2-days",
    title: "Pune 2 Days",
    sub: "Shaniwar Wada · Aga Khan Palace · Osho · Sinhagad",
    emoji: "🏯",
    pages: 5,
    includes: ["Sinhagad trek guide", "Pune café culture map", "Budget (₹1.5k–₹5k/day)", "Day trip options"],
    href: "/blog/pune-2-days",
    country: "India",
    price: "₹99",
  },
  {
    slug: "mysore-2-days",
    title: "Mysore 2 Days",
    sub: "Mysore Palace · Chamundi Hill · Brindavan Gardens · Coorg day trip",
    emoji: "👑",
    pages: 5,
    includes: ["Palace illumination timings", "Dasara festival guide", "Budget (₹1k–₹4k/day)", "Silk & sandalwood shopping"],
    href: "/blog/mysore-3-days",
    country: "India",
    price: "₹99",
  },
  // ── ₹149 ──────────────────────────────────────────────────────────────────
  {
    slug: "kashmir-6-days",
    title: "Kashmir 6 Days",
    sub: "Srinagar · Gulmarg · Pahalgam · Sonamarg",
    emoji: "❄️",
    pages: 8,
    includes: ["Dal Lake houseboat guide", "Gondola to 4200m", "Pashmina buying guide", "Safety tips"],
    href: "/blog/kashmir-6-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "manali-5-days",
    title: "Manali 5 Days",
    sub: "Solang Valley · Rohtang Pass · Old Manali",
    emoji: "⛰️",
    pages: 8,
    includes: ["Rohtang permit guide", "Solang activities & prices", "Kheerganga trek", "Bike rental tips"],
    href: "/blog/manali-5-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "andaman-5-days",
    title: "Andaman 5 Days",
    sub: "Port Blair · Havelock · Neil Island · Scuba",
    emoji: "🏝️",
    pages: 7,
    includes: ["Ferry booking guide", "Radhanagar + Elephant Beach", "Scuba diving guide", "Cash survival tips"],
    href: "/blog/andaman-5-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "jaipur-3-days",
    title: "Jaipur 3 Days",
    sub: "Amber Fort · City Palace · Hawa Mahal · Nahargarh",
    emoji: "🏰",
    pages: 7,
    includes: ["Composite ticket guide", "Best rooftop café spots", "Budget (₹2k–₹8k/day)", "Rajasthani shopping guide"],
    href: "/blog/jaipur-3-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "rishikesh-3-days",
    title: "Rishikesh 3 Days",
    sub: "Laxman Jhula · Rafting · Yoga · Beatles Ashram",
    emoji: "🌊",
    pages: 6,
    includes: ["White-water rafting booking guide", "Best yoga ashrams", "Budget (₹1k–₹4k/day)", "Camping options"],
    href: "/blog/rishikesh-haridwar-3-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "coorg-3-days",
    title: "Coorg 3 Days",
    sub: "Abbey Falls · Raja's Seat · Coffee Estates · Dubare",
    emoji: "🌿",
    pages: 6,
    includes: ["Best coffee plantation stays", "Elephant camp guide", "Budget (₹2k–₹7k/day)", "Rainfall season guide"],
    href: "/blog/coorg-3-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "darjeeling-3-days",
    title: "Darjeeling 3 Days",
    sub: "Tiger Hill · Toy Train · Tea Gardens · Sandakphu",
    emoji: "🍵",
    pages: 6,
    includes: ["Tiger Hill sunrise timing", "Toy Train booking guide", "Budget (₹1.5k–₹5k/day)", "Best tea estate tours"],
    href: "/blog/darjeeling-4-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "hampi-3-days",
    title: "Hampi 3 Days",
    sub: "Virupaksha Temple · Vittala · Matanga Hill · Coracle rides",
    emoji: "🏛️",
    pages: 6,
    includes: ["UNESCO ruins walking route", "Best boulder-hopping spots", "Budget (₹1k–₹3k/day)", "Sunrise at Matanga Hill"],
    href: "/blog/hampi-3-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "ooty-3-days",
    title: "Ooty 3 Days",
    sub: "Nilgiri Train · Botanical Gardens · Doddabetta · Kodanad",
    emoji: "🌸",
    pages: 6,
    includes: ["Nilgiri Mountain Railway guide", "Best viewpoints map", "Budget (₹1.5k–₹5k/day)", "Rose garden & lake guide"],
    href: "/blog/ooty-3-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "meghalaya-5-days",
    title: "Meghalaya 5 Days",
    sub: "Shillong · Cherrapunji · Dawki · Living Root Bridges",
    emoji: "🌿",
    pages: 7,
    includes: ["Living root bridge trek guide", "Dawki crystal-clear river", "Budget (₹2k–₹6k/day)", "Best waterfall season"],
    href: "/blog/meghalaya-5-days",
    country: "India",
    price: "₹149",
  },
  {
    slug: "north-east-india-10-days",
    title: "North East India 10 Days",
    sub: "Assam · Meghalaya · Nagaland · Arunachal · Manipur",
    emoji: "🌄",
    pages: 9,
    includes: ["ILP permit guide (Arunachal/Nagaland)", "Kaziranga rhino safari", "Budget (₹2k–₹5k/day)", "Festival calendar"],
    href: "/blog/north-east-india-10-days",
    country: "India",
    price: "₹149",
  },
  // ── ₹199 ──────────────────────────────────────────────────────────────────
  {
    slug: "leh-ladakh-7-days",
    title: "Leh Ladakh 7 Days",
    sub: "Pangong Lake · Nubra Valley · Khardung La",
    emoji: "🏔️",
    pages: 12,
    includes: ["AMS protocol", "Permit guide (ILP)", "Budget table", "High-altitude packing list"],
    href: "/blog/leh-ladakh-7-days",
    country: "India",
    price: "₹199",
  },
  {
    slug: "spiti-valley-7-days",
    title: "Spiti Valley 7 Days",
    sub: "Kaza · Key Monastery · Chandratal · Pin Valley",
    emoji: "🏔️",
    pages: 8,
    includes: ["Road conditions guide (Manali vs Shimla route)", "High-altitude AMS protocol", "Budget (₹2k–₹6k/day)", "Best months to visit"],
    href: "/blog/spiti-valley-7-days",
    country: "India",
    price: "₹199",
  },
  {
    slug: "char-dham-7-days",
    title: "Char Dham 7 Days",
    sub: "Yamunotri · Gangotri · Kedarnath · Badrinath",
    emoji: "🙏",
    pages: 9,
    includes: ["Opening dates every year", "Helicopter booking guide", "Budget (₹15k–₹60k total)", "Trek difficulty breakdown"],
    href: "/blog/char-dham-yatra-guide",
    country: "India",
    price: "₹199",
  },
  {
    slug: "kedarnath-trek-3-days",
    title: "Kedarnath Trek 3 Days",
    sub: "Gaurikund · Kedarnath Temple · Vasuki Tal",
    emoji: "🙏",
    pages: 6,
    includes: ["16km trek route breakdown", "Pony & helicopter options", "Budget (₹3k–₹15k)", "Packing list for cold"],
    href: "/blog/kedarnath-yatra-guide",
    country: "India",
    price: "₹199",
  },
  {
    slug: "gujarat-7-days",
    title: "Gujarat 7 Days",
    sub: "Rann of Kutch · Gir · Somnath · Dwarka · Ahmedabad",
    emoji: "🦁",
    pages: 8,
    includes: ["White Rann festival guide", "Gir lion safari booking", "Budget (₹2k–₹7k/day)", "Heritage walk map"],
    href: "/blog/gujarat-7-days",
    country: "India",
    price: "₹199",
  },
  {
    slug: "bangkok-4-days",
    title: "Bangkok 4 Days",
    sub: "Temples · Street Food · Ayutthaya · Nightlife",
    emoji: "🇹🇭",
    pages: 10,
    includes: ["Indian traveller essentials", "Street food map", "Budget in ₹ & THB", "Day trip guide"],
    href: "/blog/bangkok-4-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "bali-5-days",
    title: "Bali 5 Days",
    sub: "Ubud · Seminyak · Uluwatu · Nusa Penida",
    emoji: "🌴",
    pages: 9,
    includes: ["Visa on arrival guide for Indians", "Volcano trek + temples", "Beach clubs", "Budget in ₹ & USD"],
    href: "/blog/bali-5-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "singapore-4-days",
    title: "Singapore 4 Days",
    sub: "Marina Bay · Sentosa · Little India · Orchard",
    emoji: "🇸🇬",
    pages: 7,
    includes: ["eVisa guide for Indians", "MRT navigation guide", "Hawker centre map", "Budget in ₹ & SGD"],
    href: "/blog/singapore-3-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "sri-lanka-7-days",
    title: "Sri Lanka 7 Days",
    sub: "Colombo · Kandy · Ella · Yala · Galle",
    emoji: "🦁",
    pages: 8,
    includes: ["Ella train booking guide", "Yala leopard safari", "Free visa on arrival for Indians", "Budget in ₹ & LKR"],
    href: "/blog/sri-lanka-7-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "malaysia-7-days",
    title: "Malaysia 7 Days",
    sub: "Kuala Lumpur · Penang · Langkawi · Cameron Highlands",
    emoji: "🇲🇾",
    pages: 8,
    includes: ["Visa-free for Indians (30 days)", "Petronas Twin Towers guide", "Budget in ₹ & MYR", "Street food map"],
    href: "/blog/malaysia-7-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "nepal-7-days",
    title: "Nepal 7 Days",
    sub: "Kathmandu · Pokhara · Chitwan · Nagarkot",
    emoji: "🏔️",
    pages: 8,
    includes: ["Indians: no visa needed", "EBC trek overview", "Budget in ₹ & NPR", "Paragliding guide (Pokhara)"],
    href: "/blog/nepal-7-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "turkey-7-days",
    title: "Turkey 7 Days",
    sub: "Istanbul · Cappadocia · Pamukkale · Ephesus",
    emoji: "🇹🇷",
    pages: 8,
    includes: ["Turkey e-visa guide for Indians", "Hot air balloon booking", "Budget in ₹ & TRY", "Istanbul food trail"],
    href: "/blog/turkey-7-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "amsterdam-4-days",
    title: "Amsterdam 4 Days",
    sub: "Canal Ring · Anne Frank · Rijksmuseum · Keukenhof",
    emoji: "🌷",
    pages: 7,
    includes: ["Schengen visa guide for Indians", "Canal boat tips", "Budget in ₹ & EUR", "Day trips: Bruges & Keukenhof"],
    href: "/blog/amsterdam-4-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "vietnam-10-days",
    title: "Vietnam 10 Days",
    sub: "Hanoi · Ha Long Bay · Hội An · Đà Nẵng · Saigon",
    emoji: "🇻🇳",
    pages: 8,
    includes: ["E-visa guide for Indians", "Ha Long Bay cruise guide", "North↔South route options", "Budget in ₹ & VND"],
    href: "/blog/hanoi-3-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "thailand-10-days",
    title: "Thailand 10 Days",
    sub: "Bangkok · Chiang Mai · Phuket · Phi Phi · Krabi",
    emoji: "🌴",
    pages: 8,
    includes: ["Visa on arrival for Indians (free)", "Island hopping guide", "Ethical elephant sanctuary guide", "Budget in ₹ & THB"],
    href: "/blog/phuket-5-days",
    country: "International",
    price: "₹199",
  },
  {
    slug: "bhutan-5-days",
    title: "Bhutan 5 Days",
    sub: "Paro · Thimphu · Punakha · Tiger's Nest",
    emoji: "🏔️",
    pages: 6,
    includes: ["Indians: no visa needed", "Tiger's Nest full hike guide", "SDF fee breakdown (₹1,200/night)", "Best festival dates"],
    href: "/blog/bhutan-5-days",
    country: "International",
    price: "₹199",
  },
  // ── ₹249 ──────────────────────────────────────────────────────────────────
  {
    slug: "dubai-4-days",
    title: "Dubai 4 Days",
    sub: "Downtown · Marina · Desert Safari · Deira",
    emoji: "🏙️",
    pages: 9,
    includes: ["UAE visa guide for Indians", "Burj Khalifa booking tips", "Desert safari guide", "Budget in ₹ & AED"],
    href: "/blog/dubai-4-days",
    country: "International",
    price: "₹249",
  },
  {
    slug: "portugal-7-days",
    title: "Portugal 7 Days",
    sub: "Lisbon · Sintra · Porto · Douro Valley · Algarve",
    emoji: "🇵🇹",
    pages: 8,
    includes: ["Schengen visa guide for Indians", "Lisbon tram + miradouros route", "Porto wine cellar guide", "Budget in ₹ & EUR"],
    href: "/blog/lisbon-4-days",
    country: "International",
    price: "₹249",
  },
  {
    slug: "paris-5-days",
    title: "Paris 5 Days",
    sub: "Eiffel Tower · Louvre · Montmartre · Versailles",
    emoji: "🗼",
    pages: 8,
    includes: ["Schengen visa guide for Indians", "Eiffel Tower skip-the-line tips", "Budget in ₹ & EUR", "Day trip: Versailles"],
    href: "/blog/paris-5-days",
    country: "International",
    price: "₹249",
  },
  {
    slug: "barcelona-5-days",
    title: "Barcelona 5 Days",
    sub: "Sagrada Familia · Park Güell · Gothic Quarter · Sitges",
    emoji: "🇪🇸",
    pages: 8,
    includes: ["Schengen visa guide for Indians", "Gaudí architecture map", "Budget in ₹ & EUR", "Tapas & La Boqueria guide"],
    href: "/blog/barcelona-4-days",
    country: "International",
    price: "₹249",
  },
  {
    slug: "rome-5-days",
    title: "Rome 5 Days",
    sub: "Colosseum · Vatican · Trevi Fountain · Amalfi day trip",
    emoji: "🇮🇹",
    pages: 8,
    includes: ["Schengen visa guide for Indians", "Vatican booking guide (skip queues)", "Budget in ₹ & EUR", "Rome free attractions list"],
    href: "/blog/rome-4-days",
    country: "International",
    price: "₹249",
  },
  {
    slug: "london-5-days",
    title: "London 5 Days",
    sub: "Big Ben · British Museum · Camden · Stonehenge",
    emoji: "🇬🇧",
    pages: 8,
    includes: ["UK visa guide for Indians", "Oyster Card transport guide", "Budget in ₹ & GBP", "Day trip: Oxford & Stonehenge"],
    href: "/blog/london-5-days",
    country: "International",
    price: "₹249",
  },
  {
    slug: "maldives-5-days",
    title: "Maldives 5 Days",
    sub: "Malé · North Malé · Local Islands · Snorkelling",
    emoji: "🏝️",
    pages: 7,
    includes: ["Visa on arrival (free)", "Local island vs resort guide", "Budget in ₹ (₹20k–₹1.5L)", "Snorkel & dive spots map"],
    href: "/blog/maldives-5-days",
    country: "International",
    price: "₹249",
  },
  // ── ₹299 ──────────────────────────────────────────────────────────────────
  {
    slug: "japan-10-days",
    title: "Japan 10 Days",
    sub: "Tokyo · Kyoto · Osaka · Hiroshima · Nara",
    emoji: "🗼",
    pages: 10,
    includes: ["Japan visa guide", "JR Pass buying guide (saves ₹15k+)", "Cherry blossom timing", "Budget in ₹ & JPY"],
    href: "/blog/tokyo-5-days",
    country: "International",
    price: "₹299",
  },
  {
    slug: "greece-10-days",
    title: "Greece 10 Days",
    sub: "Athens · Mykonos · Santorini · Crete · Rhodes",
    emoji: "🇬🇷",
    pages: 10,
    includes: ["Schengen visa guide", "Island hopping ferry guide", "Santorini oia sunset secrets", "Budget in ₹ & EUR"],
    href: "/blog/athens-3-days",
    country: "International",
    price: "₹299",
  },
  {
    slug: "switzerland-7-days",
    title: "Switzerland 7 Days",
    sub: "Zurich · Lucerne · Jungfraujoch · Interlaken · Geneva",
    emoji: "🇨🇭",
    pages: 9,
    includes: ["Schengen visa guide for Indians", "Swiss Travel Pass guide", "Budget in ₹ & CHF", "Top of Europe (Jungfraujoch) tips"],
    href: "/blog/switzerland-5-days",
    country: "International",
    price: "₹299",
  },
  {
    slug: "new-york-5-days",
    title: "New York 5 Days",
    sub: "Manhattan · Brooklyn · Central Park · Statue of Liberty",
    emoji: "🗽",
    pages: 8,
    includes: ["US B1/B2 visa guide for Indians", "NYC subway guide", "Budget in ₹ & USD", "Free NYC experiences list"],
    href: "/blog/new-york-5-days",
    country: "International",
    price: "₹299",
  },
];

const COMING_SOON = [
  { emoji: "🇮🇹", title: "Italy 10 Days",         sub: "Rome · Florence · Amalfi · Venice",             country: "International" },
  { emoji: "🇪🇸", title: "Spain 10 Days",         sub: "Madrid · Barcelona · Seville · Granada",        country: "International" },
  { emoji: "🌊", title: "Andhra Pradesh 5 Days",  sub: "Vizag · Araku · Tirupati · Hampi",              country: "India" },
  { emoji: "🏯", title: "Madhya Pradesh 7 Days",  sub: "Khajuraho · Orchha · Pench · Bandhavgarh",      country: "India" },
  { emoji: "🏔️", title: "Himachal 7 Days",       sub: "Shimla · Dharamshala · Dalhousie · Kasauli",    country: "India" },
  { emoji: "🌴", title: "Andaman 7 Days",          sub: "Baratang · Long Island · Havelock · Neil",      country: "India" },
  { emoji: "🌏", title: "South Korea 7 Days",     sub: "Seoul · Busan · Gyeongju · Jeju",               country: "International" },
  { emoji: "🇦🇺", title: "Australia 10 Days",    sub: "Sydney · Melbourne · Great Barrier Reef · Uluru", country: "International" },
  { emoji: "🇨🇦", title: "Canada 10 Days",       sub: "Toronto · Vancouver · Banff · Niagara Falls",   country: "International" },
  { emoji: "🌍", title: "Morocco 7 Days",          sub: "Marrakech · Fes · Sahara · Chefchaouen",        country: "International" },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-parchment">

      {/* ── HERO ── */}
      <section className="bg-ink text-white text-center px-6 py-16">
        <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
          Print-Ready · Offline-Friendly · Always Free to Start
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight mb-3">
          Free PDF Travel Guides
        </h1>
        <p className="text-white/60 text-base max-w-md mx-auto font-light leading-relaxed mb-6">
          Every itinerary as a downloadable PDF — day plans, budgets, packing lists,
          route maps. Download 2 guides free, unlock all 50+ for ₹499.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {["📄 Print-ready A4", "✈️ Works offline", "🎁 2 free per email", "♾️ Unlock all 50+ for ₹499"].map((t) => (
            <span key={t} className="bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-white/70 text-xs">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── AVAILABLE NOW ── */}
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-6">
        <h2 className="font-serif text-2xl text-ink font-light mb-6">
          Available Now
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AVAILABLE.map((g) => (
            <div key={g.slug} className="bg-white rounded-2xl border border-gold/30 overflow-hidden hover:border-gold hover:shadow-md transition-all duration-200">
              {/* Tag bar */}
              <div className={`px-4 py-1.5 flex items-center justify-between ${g.price === "Free" ? "bg-gold" : "bg-ink"}`}>
                <span className={`text-[0.6rem] font-bold tracking-widest uppercase ${g.price === "Free" ? "text-ink" : "text-gold"}`}>
                  {g.price === "Free" ? "Free Download" : `${g.price} — Instant Download`}
                </span>
                <span className={`text-[0.6rem] ${g.price === "Free" ? "text-ink/60" : "text-white/50"}`}>{g.country}</span>
              </div>

              <div className="p-6">
                <span className="text-4xl block mb-3">{g.emoji}</span>
                <h3 className="font-serif text-ink text-xl font-light mb-0.5">{g.title}</h3>
                <p className="text-muted text-xs mb-4">{g.sub}</p>

                <ul className="space-y-1.5 mb-5">
                  {g.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted">
                      <span className="text-gold font-bold">✓</span>{item}
                    </li>
                  ))}
                </ul>

                <p className="text-muted/50 text-[0.65rem] mb-4">📄 {g.pages} pages · A4 · Print-ready</p>

                <div className="flex flex-col gap-2">
                  <DownloadButton slug={g.slug} title={g.title} variant="primary" className="w-full justify-center" />
                  {g.href !== "/blog" && (
                    <Link
                      href={g.href}
                      className="block text-center text-xs text-muted hover:text-ink underline underline-offset-2 transition-colors"
                    >
                      Read the full guide online →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <ComingSoonSection items={COMING_SOON} />

      {/* ── UNLOCK CTA ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-ink rounded-2xl px-8 py-10 text-center">
          <p className="text-gold text-xs tracking-[0.18em] uppercase font-medium mb-3">
            One-Time · No Subscription · Lifetime Access
          </p>
          <h2 className="font-serif text-white text-[clamp(1.6rem,4vw,2.4rem)] font-light leading-tight mb-3">
            Unlock All 50+ Guides — ₹499
          </h2>
          <p className="text-white/50 text-sm font-light max-w-sm mx-auto mb-7 leading-relaxed">
            Every guide we&apos;ve made and every guide we ever will make.
            Pay once. Download forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://rzp.io/rzp/oUANvqjl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-200"
            >
              Get Lifetime Access — ₹499 →
            </a>
            <a
              href="https://rzp.io/rzp/aRVZcSi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-medium text-sm px-6 py-3.5 rounded-full transition-all duration-200"
            >
              India Pack only — ₹249
            </a>
          </div>
          <p className="text-white/25 text-xs mt-4">
            UPI · Cards · Net Banking · Wallets via Razorpay
          </p>
        </div>
      </section>

    </main>
  );
}
