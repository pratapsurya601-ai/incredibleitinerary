// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION — edit this file to update your details everywhere
// ─────────────────────────────────────────────────────────────────────────────
import { blogPosts } from "@/data/blog";

export const SITE_CONFIG = {
  // ── Contact ────────────────────────────────────────────────────────────────
  email: "hello@incredibleitinerary.com",

  // ── Brand ──────────────────────────────────────────────────────────────────
  siteName: "IncredibleItinerary",
  tagline: "Curated Travel Guides Worldwide",
  siteUrl: "https://www.incredibleitinerary.com",

  // ── Social ─────────────────────────────────────────────────────────────────
  instagram: "https://instagram.com/incredibleitinerary",
  facebook:  "https://facebook.com/incredibleitinerary",
  youtube:   "https://youtube.com/@incredibleitinerary",

  // ── Business ───────────────────────────────────────────────────────────────
  foundedYear: "2024",
  guidesPublished: `${blogPosts.length}+`,
  responseTime: "24 hours",
};

// ── AFFILIATE LINKS ───────────────────────────────────────────────────────────
export const AFFILIATE = {
  // Booking.com affiliate — set NEXT_PUBLIC_BOOKING_AID in Vercel env vars
  bookingCom: (destination: string) => {
    const aid = process.env.NEXT_PUBLIC_BOOKING_AID;
    const base = `https://www.booking.com/search.html?ss=${encodeURIComponent(destination)}&lang=en-us`;
    return aid ? `${base}&aid=${aid}` : base;
  },

  // GetYourGuide — partner code: PSZA5UI ✅ LIVE
  getYourGuide: (destination: string) =>
    `https://www.getyourguide.com/s/?q=${encodeURIComponent(destination)}&partner_id=PSZA5UI`,

  // Viator — uses env var if set
  viator: (destination: string) => {
    const vid = process.env.NEXT_PUBLIC_VIATOR_ID;
    const base = `https://www.viator.com/search/${encodeURIComponent(destination)}`;
    return vid ? `${base}?mcid=${vid}` : base;
  },

  // Direct hotel links — set NEXT_PUBLIC_BOOKING_AID in Vercel env vars
  hotels: (() => {
    const aid = process.env.NEXT_PUBLIC_BOOKING_AID;
    const suffix = aid ? `?aid=${aid}` : "";
    return {
      zostelGoa:         `https://www.booking.com/hotel/in/zostel-goa.html${suffix}`,
      raasJodhpur:       `https://www.booking.com/hotel/in/raas-jodhpur.html${suffix}`,
      tajLakePalace:     `https://www.booking.com/hotel/in/taj-lake-palace-udaipur.html${suffix}`,
      rambaghPalace:     `https://www.booking.com/hotel/in/rambagh-palace-jaipur.html${suffix}`,
      ametHaveliUdaipur: `https://www.booking.com/hotel/in/amet-haveli-udaipur.html${suffix}`,
    };
  })(),

  // Activities — GetYourGuide with PSZA5UI ✅ LIVE
  activities: {
    goaHeritage:     "https://www.getyourguide.com/goa-l976/?partner_id=PSZA5UI",
    goaCruise:       "https://www.getyourguide.com/goa-l976/cruises/?partner_id=PSZA5UI",
    dudhsagarJeep:   "https://www.getyourguide.com/goa-l976/dudhsagar/?partner_id=PSZA5UI",
    amberFortTour:   "https://www.getyourguide.com/jaipur-l200/?partner_id=PSZA5UI",
    mehrangarhTour:  "https://www.getyourguide.com/jodhpur-l1435/?partner_id=PSZA5UI",
    jaisalmerDesert: "https://www.getyourguide.com/jaisalmer-l1436/?partner_id=PSZA5UI",
    udaipurBoat:     "https://www.getyourguide.com/udaipur-l1437/?partner_id=PSZA5UI",
    bishnoisafari:   "https://www.getyourguide.com/jodhpur-l1435/village-safari/?partner_id=PSZA5UI",
  },
};

// ── SHOP / PDF PRODUCTS ───────────────────────────────────────────────────────
// Replace gumroadUrl with your real Gumroad product URL after uploading the PDF
export const SHOP_PRODUCTS = [
  {
    id: "goa-3-days-pdf",
    title: "Goa in 3 Days — Complete Itinerary PDF",
    subtitle: "4 plans · Day-by-day schedule · Budget tables · Google Maps routes · Pro tips",
    price: 199,
    originalPrice: 399,
    currency: "₹",
    pages: "28 pages",
    destination: "Goa",
    emoji: "🏖️",
    color: "border-teal-200 bg-teal-50",
    accent: "text-teal-700",
    includes: [
      "4 complete itineraries (Budget, Couple, Party, Relaxed)",
      "Day-by-day schedule with exact timings",
      "Budget breakdown tables — all plans",
      "Google Maps route links for every day",
      "17 restaurant recommendations with prices",
      "Mistakes to avoid + pro tips",
      "Packing list for Goa",
      "Best time to visit guide",
    ],
    gumroadUrl: "https://surya601.gumroad.com/l/goa-3-days",
    razorpayUrl: "",
    badge: "Bestseller",
  },
  {
    id: "rajasthan-7-days-pdf",
    title: "Rajasthan in 7 Days — Royal Circuit PDF",
    subtitle: "4 plans · Jaipur · Jodhpur · Jaisalmer · Udaipur · Full route guide",
    price: 299,
    originalPrice: 599,
    currency: "₹",
    pages: "42 pages",
    destination: "Rajasthan",
    emoji: "🏰",
    color: "border-amber-200 bg-amber-50",
    accent: "text-amber-700",
    includes: [
      "4 complete itineraries (Budget, Couple, Family, Luxury)",
      "Full circuit route: Jaipur → Jodhpur → Jaisalmer → Udaipur",
      "Entry fees, timings, and booking tips for every fort",
      "Best desert camp recommendations by budget",
      "Transport guide — train numbers, booking tips",
      "Palace hotel recommendations with real prices",
      "Shopping guide — what to buy and where",
      "Packing list for Rajasthan",
    ],
    gumroadUrl: "https://surya601.gumroad.com/l/rajasthan-7-days",
    razorpayUrl: "",
    badge: "Most Detailed",
  },
  {
    id: "india-budget-guide-pdf",
    title: "India on a Budget — Complete Traveller's Guide",
    subtitle: "How to travel India for under ₹3,000/day · All regions covered",
    price: 149,
    originalPrice: 299,
    currency: "₹",
    pages: "18 pages",
    destination: "All India",
    emoji: "🇮🇳",
    color: "border-purple-200 bg-purple-50",
    accent: "text-purple-700",
    includes: [
      "Budget breakdown for 8 major destinations",
      "Best budget accommodation by city",
      "How to eat well for ₹150–₹300/day",
      "Train booking guide — apps, classes, tips",
      "Apps every India traveller needs",
      "Common scams and how to avoid them",
    ],
    gumroadUrl: "https://surya601.gumroad.com/l/india-budget-guide",
    razorpayUrl: "",
    badge: "New",
  },
  {
    id: "kerala-5-days-pdf",
    title: "Kerala in 5 Days — Backwaters to Hills PDF",
    subtitle: "4 plans · Alleppey · Munnar · Kochi · Thekkady · Varkala",
    price: 249,
    originalPrice: 499,
    currency: "₹",
    pages: "36 pages",
    destination: "Kerala",
    emoji: "🌿",
    color: "border-green-200 bg-green-50",
    accent: "text-green-700",
    includes: [
      "4 complete itineraries (Budget, Couple, Family, Luxury)",
      "Backwaters houseboat booking guide with real prices",
      "Munnar tea estate trails and viewpoints",
      "Best Ayurveda resorts by budget",
      "Kochi heritage walk map + Fort Kochi guide",
      "Train & bus connections across Kerala",
      "Monsoon travel tips — what to expect",
      "Packing list for Kerala",
    ],
    gumroadUrl: "https://surya601.gumroad.com/l/kerala-5-days",
    razorpayUrl: "",
    badge: "New",
  },
  {
    id: "leh-ladakh-7-days-pdf",
    title: "Leh Ladakh in 7 Days — Complete High Altitude Guide PDF",
    subtitle: "4 plans · Pangong Lake · Nubra Valley · Khardung La · Full circuit",
    price: 349,
    originalPrice: 699,
    currency: "₹",
    pages: "48 pages",
    destination: "Leh Ladakh",
    emoji: "🏔️",
    color: "border-blue-200 bg-blue-50",
    accent: "text-blue-700",
    includes: [
      "4 complete itineraries (Budget Biker, Couple, Solo, Family)",
      "Day-by-day acclimatisation schedule — avoid AMS",
      "Full permit guide — ILP, photography permits",
      "Pangong Lake — best camps by budget",
      "Nubra Valley — Bactrian camel dunes guide",
      "Bike rental guide — which bikes, what to check",
      "Emergency contacts + altitude sickness protocol",
      "Packing list for high altitude Ladakh",
    ],
    gumroadUrl: "https://surya601.gumroad.com/l/leh-ladakh-7-days",
    razorpayUrl: "",
    badge: "Premium",
  },
  {
    id: "bangkok-4-days-pdf",
    title: "Bangkok in 4 Days — Complete Thailand Capital PDF",
    subtitle: "4 plans · Temples · Street food · Nightlife · Day trips",
    price: 199,
    originalPrice: 399,
    currency: "₹",
    pages: "32 pages",
    destination: "Bangkok",
    emoji: "🇹🇭",
    color: "border-yellow-200 bg-yellow-50",
    accent: "text-yellow-700",
    includes: [
      "4 complete itineraries (Budget, Couple, Party, Culture)",
      "Temple circuit with exact entry fees & opening times",
      "Street food map — 23 must-eat stalls with prices",
      "Chatuchak Weekend Market full guide",
      "Day trip options: Ayutthaya, Kanchanaburi, Pattaya",
      "BTS/MRT navigation guide + taxi tips",
      "SIM card + currency exchange guide for Indians",
      "Packing list for Bangkok heat",
    ],
    gumroadUrl: "https://surya601.gumroad.com/l/bangkok-4-days",
    razorpayUrl: "",
    badge: "International",
  },
];


