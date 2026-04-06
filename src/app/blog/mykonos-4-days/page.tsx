import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mykonos in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    "description": "Your complete Mykonos 4-day itinerary covering Mykonos Town, Little Venice, the famous windmills, Paradise beach, the Delos day trip, and the Armenistis Lighthouse — across budget, mid-range, and luxury plans.",
    "image": "https://incredibleitinerary.com/og/mykonos-4-days.jpg",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": { "@type": "Organization", "name": "IncredibleItinerary", "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" } },
    "datePublished": "2026-01-20",
    "dateModified": "2026-04-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/mykonos-4-days" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Mykonos 4 Days", "item": "https://incredibleitinerary.com/blog/mykonos-4-days" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Mykonos",
    "description": "The Cyclades island where glamour meets Cycladic magic — famous for its windmills, whitewashed maze streets, Little Venice waterfront, party beaches, and the UNESCO Delos ruins nearby.",
    "url": "https://incredibleitinerary.com/blog/mykonos-4-days",
    "touristType": ["Beach Tourism", "Cultural Tourism", "Luxury Tourism", "Nightlife Tourism"],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.4467,
      "longitude": 25.3289
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "Greece"
    }
  }
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Mykonos 4-Day Itinerary 2026: Trip Planner",
  description: "Plan your Mykonos trip in 4 days. Plan the perfect 4-day Mykonos trip: windmills, Little Venice, Delos ruins, Paradise beach & Armenistis Lighthouse..",
  keywords: ["Mykonos travel guide", "Mykonos 4 days itinerary", "Mykonos windmills", "Little Venice Mykonos", "Delos day trip", "Paradise beach Mykonos", "Mykonos budget travel", "Cyclades Greece", "Mykonos luxury hotels"],
  openGraph: {
    title: "Mykonos 4-Day Itinerary 2026: Trip Planner",
    description: "Windmills above a maze designed to confuse pirates, Little Venice waves lapping at sunset café tables, party beaches with DJs, and a pelican strutting through the square — 4 days in Mykonos.",
    url: "https://incredibleitinerary.com/blog/mykonos-4-days",
    siteName: "IncredibleItinerary",
    images: [{ url: "https://incredibleitinerary.com/og/mykonos-4-days.jpg", width: 1200, height: 630, alt: "Mykonos windmills and whitewashed houses with blue doors Cyclades Greece" }],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mykonos 4-Day Itinerary 2026: Trip Planner",
    description: "Budget €80/day to luxury €500/day — complete Mykonos 4-day itinerary with windmills, Delos, party beaches, and the best sunsets in the Cyclades.",
    images: ["https://incredibleitinerary.com/og/mykonos-4-days.jpg"],
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/mykonos-4-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Mykonos",
  country: "Greece",
  countryFlag: "🇬🇷",
  slug: "mykonos-4-days",
  heroQuery: "mykonos windmills white houses blue doors greece aegean sea",
  heroAlt: "Mykonos windmills and whitewashed houses with blue doors Cyclades Greece",
  category: "Europe",
  date: "January 20, 2026",
  readTime: "14 min read",
  intro:
    "Windmills turning above a maze of whitewashed alleys so deliberately confusing they were designed to disorient pirates, Little Venice's waterfront cafes where waves lap at the tables at golden hour, party beaches with world-class DJs playing from noon to midnight, and pelicans strutting through the town square as if they personally own it — Mykonos is the Cyclades island where unapologetic glamour meets genuine Cycladic magic.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€80",
    bestMonths: "May–Jun or Sep–Oct (avoid July–Aug peak)",
    airport: "JMK (Mykonos)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "beaches", emoji: "🏖️", label: "Beach Guide" },
    { id: "delos", emoji: "🏛️", label: "Delos Day Trip" },
    { id: "affiliate", emoji: "🎟️", label: "Book Tours & Activities" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required", "Schengen Short-Stay Visa (Greece)"],
        ["Fee", "€80"],
        ["Processing", "15–30 business days"],
        ["Apply via", "VFS Global (Greece) or Greek Consulate"],
        ["Duration", "Up to 90 days in any 180-day period"],
        ["Tip", "Apply 6–8 weeks early in peak season; show hotel bookings for Mykonos"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇦🇺",
      title: "US / UK / EU / Western Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["EU Citizens", "Free movement — no formalities"],
        ["US / UK / AU / CA", "Visa-free up to 90 days"],
        ["ETIAS", "Required from mid-2025 (€7, online pre-registration)"],
        ["Currency", "Euro (€) — card accepted everywhere, but carry cash for small tavernas"],
        ["Ferry tip", "High-speed ferries from Athens Piraeus take 2–2.5hrs; book ahead in summer"],
        ["Island-hop", "Easy connections to Santorini, Paros, Naxos by ferry"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€80/day",
      days: [
        {
          day: "Day 1",
          title: "Mykonos Town (Chora) — Windmills & Little Venice",
          items: [
            "Arrive at JMK airport or by ferry from Athens Piraeus — take the public bus from the port (€1.80) to Mykonos Town",
            "Check into a budget guesthouse or small hotel in Mykonos Town (€40–70/night in shoulder season — prices double in July–August)",
            "Get gloriously lost in Chora's maze of whitewashed alleys — that's the point; they were built to confuse pirates",
            "Walk to the five famous windmills (Kato Mili) above the town — they are free, photogenic, and the best Instagram shot on the island at golden hour",
            "Little Venice: the row of colourful balconied houses built over the water — waves crash beneath café tables at high wind",
            "Look for Petros or one of the other resident pelicans in Manto Square — they wander freely and are entirely unimpressed by tourists",
            "Dinner at a taverna in the backstreets — avoid the waterfront tourist traps; look for handwritten menus. Budget €14–20 for a full meal with house wine",
          ],
          cost: "€60–80 including accommodation",
        },
        {
          day: "Day 2",
          title: "Delos UNESCO Island Day Trip",
          items: [
            "Ferry to Delos from Mykonos Town (€20 return, 30 min) — boats depart 9am and 10am, check current schedule",
            "Delos is one of the most important archaeological sites in Greece — birthplace of Apollo and Artemis, uninhabited, UNESCO World Heritage",
            "The archaeological site: Lion Terrace, House of Dionysus mosaics, the Agora, ancient theatre — allow 3 hours",
            "Entry fee: €12; guided audio tour recommended (€5 rental)",
            "Bring water and sunscreen — there is no shade on Delos and almost no facilities",
            "Return ferry by 3pm; afternoon swim at Ornos beach (free, calm, family-friendly, accessible by bus)",
            "Evening: explore Matogianni Street boutiques and watch the sunset from Little Venice with a €6 Aperol Spritz",
          ],
          cost: "€50–65",
        },
        {
          day: "Day 3",
          title: "Paradise Beach & Super Paradise",
          items: [
            "Bus or cheap taxi to Paradise Beach (€1.80 by bus from Fabrika square — ask for 'Παραδεισος')",
            "Paradise Beach: the original Mykonos party beach — sun loungers (€15–20/pair), DJs start at noon, peak scene 3–6pm",
            "Swim, sunbathe, or just observe the extraordinary scene — this beach has been going since the 1970s and the energy is unique",
            "Walk around the headland to Super Paradise Beach — smaller, more sheltered, even more party-oriented but with better water",
            "Late afternoon: back to Mykonos Town for the sunset ritual at the windmills (arrive 30 min before sunset for the best position)",
            "Dinner at a gyros place in the back streets (€4–6) or a sit-down mezze meal (€15–20)",
            "Evening: the nightlife in Mykonos Town starts late — bars from 10pm, clubs from midnight",
          ],
          cost: "€55–75",
        },
        {
          day: "Day 4",
          title: "Ano Mera Village & Armenistis Lighthouse",
          items: [
            "Morning bus to Ano Mera (€1.80) — the only proper village on the island away from the tourist circuit; genuinely authentic",
            "Visit the Monastery of Panagia Tourliani in the main square — beautiful baroque belltower, active monastery, free entry",
            "Coffee and bougatsa (custard pastry) at a local café — real Greek prices, not Mykonos Town prices",
            "Take a taxi to Armenistis Lighthouse on the northwest tip (€8) — the most remote and dramatic point of the island",
            "Sit on the rocks as the Aegean stretches to the horizon; very few tourists make it here",
            "Return to town; pack, swim at Agios Ioannis beach (where Shirley Valentine was filmed) — quieter, more scenic than the party beaches",
            "Farewell dinner: find a rooftop restaurant above Little Venice and watch the windmills darken against the sunset",
          ],
          cost: "€50–70",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€180/day",
      days: [
        {
          day: "Day 1",
          title: "Chora Arrival, Windmills & Sunset Cocktails",
          items: [
            "Fly direct to JMK or take a high-speed ferry from Athens (2–2.5hrs, €45–65)",
            "Check into a 3–4 star hotel or boutique property in Mykonos Town or Ornos (€130–200/night)",
            "Guided walking tour of Chora — local guide reveals the deliberate labyrinth logic, the history of the windmills, and the best alleys to find (€30–40pp, 2 hours)",
            "Lunch at Kounelas fish taverna — fresh catch grilled simply, the way locals eat it (€30–40 including wine)",
            "Afternoon: rent an ATV or scooter (€25–35/day) for exploring the island's coastal road independently",
            "Windmills at golden hour — stake out your spot 30 minutes before sunset",
            "Dinner at M-eating or Interni restaurant — excellent modern Greek cuisine, €45–60 with wine; book ahead",
          ],
          cost: "€160–200 including accommodation",
        },
        {
          day: "Day 2",
          title: "Delos & Rhenia Island Boat Trip",
          items: [
            "Organised boat trip that combines Delos UNESCO site + Rhenia island snorkelling (€45–60pp, departs 10am, returns 4pm)",
            "Delos: 2-hour guided tour with an archaeologist (included in organised trips) — brings the ancient city to life",
            "Rhenia: uninhabited island next to Delos, crystal-clear water, zero tourists — swim, snorkel, have lunch on the boat",
            "Return to Mykonos by 4pm; afternoon at the hotel pool or a beach club at Psarou Beach",
            "Psarou: Mykonos's most glamorous beach — quieter than Paradise, VIP sun lounger service, celebrity spotting (€30–40 for a lounger pair)",
            "Evening: cocktails at 180° Sunset Bar near the windmills; dinner at a rooftop restaurant overlooking the harbour (€50–65)",
          ],
          cost: "€150–180",
        },
        {
          day: "Day 3",
          title: "Beach Hopping by ATV & Kalafatis Dive",
          items: [
            "ATV or scooter rental for the day (€25–35) — essential for reaching the south and east coast beaches",
            "Agios Ioannis: calm, beautiful, less crowded — morning swim before the day-trippers arrive",
            "Elia Beach: longest beach on the island, crystal clear water, good taverna for lunch (€22–30)",
            "Kalafatis Beach: diving excursion with a local dive school — underwater visibility in the Aegean is exceptional, €50–70 for a guided dive",
            "Drive the coastal road east to Panormos Bay — undeveloped north coast, dramatic and wild",
            "Back to Mykonos Town for sunset; dinner at a mezze restaurant in the kastro area (€40–55)",
            "Late night: explore the bar scene in Matogianni — sophisticated cocktail bars rather than clubs",
          ],
          cost: "€130–160",
        },
        {
          day: "Day 4",
          title: "Ano Mera, Lighthouse & Farewell",
          items: [
            "Morning taxi to Ano Mera — explore the village market and the Monastery of Panagia Tourliani",
            "Drive the ATV to Armenistis Lighthouse for the panoramic Aegean view; pack a picnic from a local bakery",
            "Stop at Fokos Beach on the north coast — a wild, windy, remote beach beloved by locals and completely uncommercialized",
            "Return to Mykonos Town; browse Matogianni Street for ceramics, jewellery, and Cycladic art",
            "Farewell lunch at a fish taverna on the old port — fresh octopus and sea bass with Assyrtiko white wine (€35–45)",
            "Airport or ferry transfer; high-speed ferry to Athens or Santorini if continuing the island hop",
          ],
          cost: "€120–150",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€500/day",
      days: [
        {
          day: "Day 1",
          title: "Private Arrival & Chora at Night",
          items: [
            "Private transfer from airport to hotel (€40–60)",
            "Check into Grace Mykonos, Bill & Coo Mykonos, or Cavo Tagoo — the island's top luxury hotels (€400–800/night); infinity pools overlooking the Aegean",
            "Private guided walking tour of Chora with a local art historian — the mythology, Cycladic architecture, and hidden chapels (€120–150 for 2h private)",
            "Champagne lunch on your hotel terrace with views of the windmills",
            "Afternoon: private pool and spa session at the hotel; in-room massage (€120–150)",
            "Dinner at Nobu Mykonos — the Japanese-Peruvian restaurant in an Aegean whitewashed setting, €100–150pp; book in advance",
            "After dinner: cocktails at the hotel bar watching the lights of Chora; the island after midnight is cinematically beautiful from a hilltop terrace",
          ],
          cost: "€600–800 including accommodation",
        },
        {
          day: "Day 2",
          title: "Private Sailing, Delos & Superyacht Sunset",
          items: [
            "Private yacht charter for the day — 40ft sailing yacht with captain and crew (€600–900/day for the boat, up to 8 guests)",
            "Sail to Delos: private landing, hire the island's archaeologist guide for a 2-hour exclusive tour (€200 private)",
            "Continue to Rhenia island: anchor in a turquoise bay, swim off the yacht, snorkel over ancient ruins visible underwater",
            "Gourmet lunch prepared by the crew on board — mezze, fresh fish, chilled Assyrtiko wine",
            "Sail back around the north coast, stopping at the wild Fokos beach",
            "Return to Mykonos at sunset — the Aegean at golden hour from a yacht deck is the defining Mykonos experience",
            "Dinner at Roca Restaurant — cliff-edge dining above the sea at Cavo Tagoo, €80–120pp",
          ],
          cost: "€700–1000",
        },
        {
          day: "Day 3",
          title: "Psarou Beach Club & Helicopter to Santorini",
          items: [
            "Morning beach club at Nammos, Psarou Beach — Mykonos's most famous luxury beach club, VIP table service (€200–400 minimum spend, includes food and drink)",
            "The Nammos experience: fresh sashimi delivered by speedboat, rosé by the magnum, DJ sets from 2pm",
            "Afternoon helicopter excursion to Santorini (40 min) — helicopter charter for the day (€800–1200 return for 4 passengers) for the caldera views",
            "Sunset from Oia, Santorini — the most famous sunset in Greece — before returning to Mykonos",
            "Alternatively: private boat to Delos for a second visit at sunset when the day-trippers have left — the ruins in late light are extraordinary",
            "Dinner at a private dining experience in a Chora rooftop garden — several restaurants offer private hire for groups (€200–300pp)",
          ],
          cost: "€800–1200",
        },
        {
          day: "Day 4",
          title: "Armenistis, Ano Mera & Departure in Style",
          items: [
            "Private sunrise drive to Armenistis Lighthouse — arrive before the sun rises over the Aegean, completely alone on the headland",
            "Private yoga or meditation session on your hotel terrace at dawn (many luxury hotels offer this, €60–80)",
            "Gourmet breakfast at the hotel — local honey, Cycladic cheeses, fresh fruit from the island market",
            "Drive to Ano Mera village with a private guide for cultural context — monastery, village history, and local life away from the tourist bubble",
            "Private jewellery shopping experience on Matogianni Street — local artisan gold and silver work, some shops offer private viewing by appointment",
            "Farewell lunch at Kounelas or Spilia restaurant in the sea caves at Panormos (reachable only by boat)",
            "Private transfer to airport; or if departing by ferry, reserve a cabin on the overnight Piraeus ferry for a scenic departure",
          ],
          cost: "€500–700",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€40–70 (guesthouse / small hotel)",
      food: "€18–28 (tavernas, gyros, bakeries)",
      transport: "€5–12 (bus, shared taxi)",
      activities: "€20–30 (Delos ferry, site entry)",
      total: "€80–120/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€130–200 (3–4 star boutique)",
      food: "€45–65 (restaurants + wine)",
      transport: "€25–40 (ATV rental, taxis)",
      activities: "€45–80 (guided Delos, boat trip, diving)",
      total: "€180–250/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€400–800 (Grace Mykonos, Bill & Coo)",
      food: "€100–200 (Nobu, Roca, private dining)",
      transport: "€60–200 (private transfers, helicopter)",
      activities: "€200–600 (private yacht, private guides)",
      total: "€500–1000+/day",
    },
    {
      tier: "🏖️ Beach Focus",
      accommodation: "€50–90 (near Ornos or Paradise)",
      food: "€20–35 (beach bars, tavernas)",
      transport: "€8–15 (bus to beaches)",
      activities: "€20–40 (lounger hire, water sports)",
      total: "€100–150/day",
    },
    {
      tier: "🏛️ Culture Focus",
      accommodation: "€60–100 (Mykonos Town guesthouse)",
      food: "€20–30 (local tavernas, markets)",
      transport: "€15–25 (taxis, ATV)",
      activities: "€30–50 (Delos, Ano Mera, lighthouse)",
      total: "€110–160/day",
    },
  ],

  mistakes: [
    {
      icon: "☀️",
      title: "Visiting in July or August",
      desc: "Mykonos in peak summer is genuinely overwhelming: accommodation costs triple, Paradise Beach becomes so crowded you can barely see the sand, restaurants are rammed, and the ferry queues are chaotic. May, June, September, and October offer the same beauty and beaches at dramatically lower prices — and with temperatures still perfect for swimming.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🏨",
      title: "Booking accommodation too late",
      desc: "Mykonos has limited accommodation and explosive demand. The best budget guesthouses in Mykonos Town sell out months in advance. Luxury hotels like Grace Mykonos and Bill & Coo sell out in July–August by January. Whatever your budget, book as soon as you know your dates — especially for peak season travel.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🍽️",
      title: "Eating on the waterfront promenade",
      desc: "The restaurants immediately on the Mykonos Town waterfront — with the photogenic painted boats in front — are tourist traps without exception. Walk one block inland and the quality doubles while the price halves. Kounelas fish taverna and the backstreet mezze restaurants are where locals and savvy visitors eat.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "⛴️",
      title: "Missing the Delos ferry times",
      desc: "The last ferry back from Delos leaves at approximately 3pm (check the current season schedule). Miss it and you are stranded on an uninhabited archaeological site with no facilities and nowhere to stay. Arrive at the dock in Mykonos Town before 9am to secure a ticket — they can sell out on busy days in summer.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "💸",
      title: "Not budgeting for how expensive Mykonos is",
      desc: "Mykonos is the most expensive Greek island and one of the most expensive destinations in the Mediterranean. A cocktail at a beach club is €18–25. A sun lounger pair at Psarou costs €60–80. Even a basic hotel costs €100/night in shoulder season. Budget accordingly — many visitors are shocked. It's worth it, but go in with eyes open.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "Arrive at the windmills 45 minutes before sunset",
      desc: "The windmills at Kato Mili are Mykonos's most photographed spot — and for excellent reason. But in summer, the viewing area fills up 30–40 minutes before the sun touches the horizon. Arrive early, find your spot on the wall, and watch the sky turn orange over Little Venice. It is genuinely spectacular and it's free.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🚌",
      title: "Use the public bus — it reaches most beaches",
      desc: "Mykonos Town's KTEL bus station at Fabrika Square has routes to Ornos, Agios Ioannis, Paradise, Platis Gialos, Kalafatis, and Ano Mera. Tickets cost €1.80–2.50. For 4 days of beach-hopping, the public bus will save you €50–100 compared to daily taxis, and it's surprisingly reliable.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🏛️",
      title: "Go to Delos on a weekday morning",
      desc: "Delos receives thousands of visitors a day in summer — almost all on weekend afternoon ferries. A Tuesday or Wednesday morning trip means you'll have the ancient streets almost to yourself. The difference between the site at 9am and 1pm on a Saturday is extraordinary. It's also cooler and the light for photography is better.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🎟️",
      title: "Book beach clubs and boat trips in advance",
      desc: "The popular beach clubs (Nammos, Scorpios, Principote) have waiting lists in July–August. The Delos-Rhenia boat trips sell out. Snorkelling tours, sailing charters, and guided Delos tours all book up. Lock in your key activities on GetYourGuide before you arrive — it's cheaper and guarantees access.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "Is Mykonos worth visiting for non-party travellers?",
      a: "Absolutely yes — especially in May, June, or September. The architecture of Chora is genuinely extraordinary; Cycladic whitewash and blue doors at their most perfect. The Delos day trip is one of the great archaeological experiences in Europe. The northern and eastern beaches (Fokos, Panormos, Agios Sostis) are wild and uncommercialized. And the island's visual beauty — the light, the windmills, Little Venice at sunset — is not diminished by the party scene at all.",
    },
    {
      q: "How do I get to Mykonos from Athens?",
      a: "Two options. Flying: Athens International (ATH) to Mykonos (JMK) takes 45 minutes; flights from €40–80 each way, multiple airlines. Ferry: from Piraeus Port in Athens to Mykonos, the high-speed SeaJets or Golden Star Ferries take 2–2.5 hours (€45–65 one way) and are actually a lovely journey — the island views on approach are beautiful. The overnight conventional ferry (8 hours) is slower but cheaper and arrives at dawn.",
    },
    {
      q: "What is Delos and should I go?",
      a: "Delos is a small uninhabited island 30 minutes by ferry from Mykonos. In ancient Greece it was considered the birthplace of Apollo and Artemis — one of the most sacred places in the entire ancient world. The archaeological site (€12 entry) is remarkable: Lion Terrace, magnificent floor mosaics, a theatre, ancient houses, and the sense of being in a place that was abandoned 2,000 years ago. It is unmissably good and not to be skipped, particularly because the access is so easy from Mykonos.",
    },
    {
      q: "What is the best beach on Mykonos?",
      a: "It depends what you want. For parties: Paradise and Super Paradise (south coast). For beauty and calm: Agios Sostis (north, no sun loungers, no development — just a taverna and the sea). For glamour: Psarou (VIP loungers, celebrity spotting). For families: Ornos and Platis Gialos (protected bays, calm water, good facilities). For pure remoteness: Fokos (north coast, requires a car or ATV to reach, almost always empty).",
    },
  ],

  combineWith: ["santorini-4-days", "athens-3-days", "paros-3-days"],
  relatedSlugs: ["santorini-4-days", "athens-3-days", "mallorca-4-days", "amalfi-coast-4-days"],

  galleryQuery: "mykonos windmills chora little venice cyclades greece aegean",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function MykonosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
