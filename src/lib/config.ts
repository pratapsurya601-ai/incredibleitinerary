// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION — edit this file to update your details everywhere
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  // ── Contact ────────────────────────────────────────────────────────────────
  email: "hello@incredibleitinerary.com",

  // ── Brand ──────────────────────────────────────────────────────────────────
  siteName: "IncredibleItinerary",
  tagline: "Curated Journeys Across India",
  siteUrl: "https://incredibleitinerary.com",

  // ── Social ─────────────────────────────────────────────────────────────────
  instagram: "https://instagram.com/incredibleitinerary",
  facebook:  "https://facebook.com/incredibleitinerary",
  youtube:   "https://youtube.com/@incredibleitinerary",

  // ── Business ───────────────────────────────────────────────────────────────
  foundedYear: "2024",
  tripsPlanned: "500+",
  responseTime: "24 hours",
};

// ── AFFILIATE LINKS ───────────────────────────────────────────────────────────
export const AFFILIATE = {
  // Booking.com affiliate — uses env var if set, otherwise clean URL
  bookingCom: (destination: string) => {
    const aid = process.env.NEXT_PUBLIC_BOOKING_AID;
    const base = `https://www.booking.com/search.html?ss=${encodeURIComponent(destination)}&lang=en-us`;
    return aid ? `${base}&aid=${aid}` : base;
  },

  // GetYourGuide — partner code: PSZA5UI ✅ LIVE
  getYourGuide: (destination: string) =>
    `https://www.getyourguide.com/s/?q=${encodeURIComponent(destination)}&partner_id=PSZA5UI`,

  // Viator — uses env var if set, otherwise clean URL
  viator: (destination: string) => {
    const vid = process.env.NEXT_PUBLIC_VIATOR_ID;
    const base = `https://www.viator.com/search/${encodeURIComponent(destination)}`;
    return vid ? `${base}?mcid=${vid}` : base;
  },

  // Direct hotel links — uses env var if set
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
];


