import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Kuala Lumpur",
  country: "Malaysia",
  countryFlag: "🇲🇾",
  slug: "kuala-lumpur-3-days",
  heroQuery: "kuala lumpur petronas twin towers malaysia night skyline",
  heroAlt: "Kuala Lumpur Petronas Twin Towers illuminated against night skyline Malaysia",
  category: "Asia",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "Kuala Lumpur is one of Southeast Asia's most underrated cities — the Petronas Towers are genuinely jaw-dropping at night, the food scene is among the best in Asia (Malaysian, Chinese, Indian, and Malay all competing side by side), Batu Caves is one of the most dramatic Hindu temples in the world, and almost everything costs a fraction of what you'd pay in Singapore. Three days barely scratches the surface.",
  stats: {
    duration: "3 Days",
    budgetFrom: "RM 80",
    bestMonths: "Apr–May, Jul–Aug",
    airport: "KUL (Kuala Lumpur International)",
  },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Visa-Free (2024)", "Under the India-Malaysia visa-free agreement announced in 2024, Indian passport holders get 30 days visa-free entry to Malaysia. No pre-approval required — stamp on arrival."],
        ["Requirements", "Valid passport with at least 6 months validity, confirmed return ticket, proof of accommodation, sufficient funds (RM 500 or equivalent per day is the guideline)."],
        ["Duration", "Up to 30 days per visit. Can re-enter after leaving the country."],
        ["Note", "Confirm current visa status before travel as visa policies can change — check the Malaysian Immigration Department website or the Indian High Commission in KL."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "USA, UK, EU countries, Canada, Australia, New Zealand get 90 days visa-free entry to Malaysia."],
        ["Requirements", "Valid passport, return ticket, accommodation details. No pre-arrival registration required."],
        ["Extensions", "Visa-free stay can sometimes be extended at the Immigration Department in KL — 30 days extension possible."],
        ["Tip", "Malaysia is one of the easiest countries in Southeast Asia for entry formalities. Immigration at KLIA is typically fast — have your entry card filled out on the plane."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "RM 80–150/day",
      days: [
        {
          day: "Day 1",
          title: "Petronas Twin Towers & KLCC",
          items: [
            "Morning — KLCC Park (free) — the city park at the base of the Petronas Twin Towers. The towers are free to photograph from outside — the iconic angle is from the park fountain",
            "9:00am — KLCC Aquaria (RM 55) — 5,000 aquatic animals including a 90-metre underwater walkway with sand tiger sharks overhead. Optional",
            "11:00am — Petronas Twin Towers Skybridge observation deck (RM 99.80 — book online in advance, tickets sell out). The bridge connects the two towers at Level 41–42. Add Level 86 observation deck for RM 170 total",
            "2:00pm — Lunch at a Jalan Imbi hawker centre — nasi lemak (coconut rice, sambal, egg, anchovies, peanuts) for RM 6–8. This is Malaysia's national dish and best eaten at a humble stall",
            "4:00pm — Bukit Bintang shopping area — malls and street food along Jalan Bukit Bintang",
            "7:30pm — Jalan Alor street food strip — Kuala Lumpur's most famous food street. Char kway teow, satay, rojak, cendol — eat until you can't move. Budget RM 25–40 for a full spread",
          ],
          cost: "RM 150–200 total",
        },
        {
          day: "Day 2",
          title: "Batu Caves, Chinatown & Jalan Alor",
          items: [
            "8:00am — KTM Komuter train from KL Sentral to Batu Caves (RM 2 each way, 30 min). The most accessible major Hindu temple in Malaysia",
            "8:45am — Arrive Batu Caves — the rainbow-painted 272 steps lead to the main temple cave. Free entry. The golden Lord Murugan statue at the base (42.7 metres) is the world's tallest Murugan statue. The cave temples inside are genuinely spectacular — high vaulted ceilings with shrines carved into the limestone",
            "10:30am — Return to KL Sentral by train",
            "12:00pm — Chinatown Petaling Street (Jalan Petaling) — covered market street selling everything from fake branded goods to fresh durian. Haggle. Lunch at Chinatown kopitiam — pork noodles or Hainanese chicken rice for RM 8–12",
            "3:00pm — Central Market (Pasar Seni) — arts and crafts, batik fabric, pewter, traditional Malaysian products",
            "5:30pm — Masjid Jamek — colonial-era mosque at the confluence of the two rivers. The original heart of Kuala Lumpur (free entry, modest dress required)",
            "8:00pm — Dinner at Imbi Market or a Malay warung — nasi campur (rice with multiple side dishes)",
          ],
          cost: "RM 80–120 total",
        },
        {
          day: "Day 3",
          title: "Merdeka Square, National Mosque & KL Tower",
          items: [
            "9:00am — Merdeka Square (Dataran Merdeka) — where independence was proclaimed in 1957. The colonial Royal Selangor Club and Sultan Abdul Samad building surround it",
            "10:00am — National Mosque (Masjid Negara) — free entry, guided tours available. One of the largest mosques in Southeast Asia",
            "11:30am — Islamic Arts Museum Malaysia (RM 20) — world-class collection of Islamic art and architecture. The building itself is spectacular",
            "1:30pm — Lunch at Brickfields (Little India) — 15 min by LRT from the city centre. Banana leaf rice, roti canai, masala tea at a South Indian restaurant for RM 10–15",
            "3:30pm — KL Tower (Menara KL) observation deck (RM 52) — technically a better view than Petronas because you can see the Petronas Towers from here. The open deck is particularly good",
            "6:00pm — Sunset from KL Tower open deck",
            "8:00pm — Farewell dinner at a rooftop restaurant in Bukit Bintang",
          ],
          cost: "RM 100–140 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "RM 350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Petronas Towers & Golden Triangle",
          items: [
            "Check in to a hotel in KLCC or Bukit Bintang",
            "10:00am — Petronas Twin Towers full experience (Level 41 Skybridge + Level 86 observation deck, RM 170)",
            "Lunch at Traders Hotel Sky Bar — pool terrace with Petronas Towers view, drinks and food for RM 60–80 per person",
            "Afternoon: Bukit Bintang malls — Pavilion KL, Starhill Gallery for premium shopping",
            "7:00pm — Sunset cocktails at Heli Lounge Bar (rooftop helicopter pad converted to bar — the Petronas view is spectacular)",
            "9:00pm — Dinner at Marini's on 57 — Italian restaurant on the 57th floor of a tower near Petronas",
          ],
          cost: "RM 400–550 total",
        },
        {
          day: "Day 2",
          title: "Batu Caves & Food Tour",
          items: [
            "8:30am — Grab (Malaysian Uber) to Batu Caves (RM 25 each way) — avoid the rush-hour train",
            "Batu Caves full visit including smaller cave temples",
            "1:00pm — KL food tour (RM 180 per person) — guided street food walk through Jalan Alor, Chinatown, and Chow Kit market",
            "Evening: Jalan Alor for dinner",
          ],
          cost: "RM 350–450 total",
        },
        {
          day: "Day 3",
          title: "Islamic Arts Museum & Rooftop Farewell",
          items: [
            "Morning: National Museum + Islamic Arts Museum",
            "Lunch at Entier at Nathalie's (contemporary European-Malaysian fusion)",
            "Afternoon: Petaling Jaya shopping or KLCC mall for last-minute purchases",
            "Farewell dinner at Cantaloupe (TTDI — upscale Malaysian cuisine) or a rooftop in Bangsar",
          ],
          cost: "RM 350–500 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "RM 1,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Mandarin Oriental or Four Seasons & Petronas",
          items: [
            "Check in to Mandarin Oriental KLCC (Petronas Towers views from the pool) or Four Seasons KL",
            "Private guided Petronas Towers experience including the gallery at the base",
            "Lunch at Thirty8 restaurant — Petronas Towers panorama from the 38th floor of Grand Hyatt",
            "Afternoon: personal shopping assistant at Pavilion KL or Starhill Gallery",
            "Dinner at DC Restaurant (Darren Chin) — one of KL's finest tasting menus",
          ],
          cost: "RM 1,500–2,500 total",
        },
        {
          day: "Day 2",
          title: "Private KL Food & Culture Tour",
          items: [
            "Private food tour with a culinary guide — hidden hawker stalls, spice market at Chow Kit, artisan coffee in Bangsar",
            "Batu Caves visit with private guide",
            "Afternoon: spa treatment at the hotel (Mandarin Oriental spa is exceptional)",
            "Dinner at Cilantro at MiCasa All Suite Hotel — European cuisine with Malaysian ingredients",
          ],
          cost: "RM 1,200–1,800 total",
        },
        {
          day: "Day 3",
          title: "Day Trip to Batu Ferringhi or Farewell",
          items: [
            "Private car day trip to Batu Ferringhi beach in Penang (fly — 1 hour) or Fraser's Hill (hill station, 2 hours drive)",
            "Or: leisurely morning at the hotel pool, private cooking class, afternoon at Islamic Arts Museum",
            "Farewell dinner at Nobu KL or Entier — KL's most acclaimed restaurants",
          ],
          cost: "RM 1,000–1,500 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "RM 30–80", food: "RM 25–45", transport: "RM 10–20", activities: "RM 20–50", total: "RM 85–195/day" },
    { tier: "✨ Mid-Range", accommodation: "RM 150–350", food: "RM 80–150", transport: "RM 30–60", activities: "RM 80–150", total: "RM 340–710/day" },
    { tier: "💎 Luxury", accommodation: "RM 500–2,000", food: "RM 200–500", transport: "RM 100–200", activities: "RM 200–500", total: "RM 1,000–3,200/day" },
  ],
  mistakes: [
    {
      icon: "🚕",
      title: "Taking Metered Taxis Instead of Grab",
      desc: "KL's metered taxis have a long history of overcharging tourists — refusing to use the meter, quoting flat rates, taking long routes. Download Grab before you land. Grab is the dominant ride-hailing app in Malaysia, always shows the price before you book, and is typically 40–60% cheaper than a metered taxi for the same journey.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚇",
      title: "Confusing KL Sentral with Other Stations",
      desc: "KL has multiple transit systems (LRT, MRT, KTM, Monorail, BRT) with different operators. KL Sentral is the main hub connecting them all. Batu Caves is on the KTM Komuter line from KL Sentral (not the LRT). The KLIA Ekspres also departs from KL Sentral. Buy a Touch 'n Go card (RM 10 deposit + load value) — works on all systems.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🙏",
      title: "Skipping Batu Caves Because It Seems Far",
      desc: "Batu Caves is only 30 minutes by train from KL Sentral and costs RM 2. Most first-time visitors skip it thinking it's a distant day trip. It's one of the most dramatic Hindu cave temples in the world — 272 stairs, a 42-metre gold Murugan statue, and a cathedral-like limestone cave interior. Do not skip this.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🎨",
      title: "Buying Machine-Printed Batik at Chinatown",
      desc: "The 'batik' sold at Chinatown Petaling Street is almost universally machine-printed on synthetic fabric — not genuine handmade batik. For real hand-drawn or hand-stamped batik, go to the Craft Cultural Complex (Kompleks Kraftangan) near the National Museum, or reputable shops in Bangsar. Real batik costs more but is a completely different product.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🍚",
      title: "Nasi Lemak from a Mamak Stall for Breakfast",
      desc: "Nasi lemak (coconut rice with sambal, dried anchovies, peanuts, boiled egg, and cucumber) at a mamak stall costs RM 5–8 and is one of the great breakfasts of the world. Mamak restaurants (Malaysian-Indian Muslim) are open 24 hours and serve everything from roti canai to mee goreng. Eat where locals eat — plastic chairs, fluorescent lights, and extraordinary food.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚂",
      title: "KLIA Ekspres — 28 Minutes from Airport, No Stress",
      desc: "The KLIA Ekspres train from Kuala Lumpur International Airport to KL Sentral takes 28 minutes and costs RM 55. It runs every 15–20 minutes from 5am to midnight. There is no traffic, no negotiation, and no surprises. It beats any taxi or bus for time and convenience. Buy at the automated kiosks in the arrivals hall.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🗼",
      title: "Book Petronas Towers Bridge Tickets 2 Days Ahead",
      desc: "Petronas Twin Towers Skybridge tickets (RM 99.80) are available online and at the counter. In peak season (June–August, December) they sell out 2–3 days in advance. Book at petronastwintowers.com.my immediately after confirming your travel dates. The 8:30am first slot has the best light and smallest crowds.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "💰",
      title: "KL Is Extremely Cheap by International Standards",
      desc: "A hawker meal at a proper kopitiam or mamak stall costs RM 8–15 — roughly €1.60–3. A Grab across the city costs RM 12–20. A proper sit-down restaurant meal with drinks is RM 40–80. For visitors from Europe, Australia, or North America, KL is exceptional value — you can eat extraordinarily well on a small daily food budget.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Kuala Lumpur visa-free for Indians?",
      a: "Yes — since 2024 under the India-Malaysia visa-free agreement, Indian passport holders get 30 days visa-free entry to Malaysia. No prior application required. Confirm current policy at the Malaysian Immigration Department website before travel, as terms can be updated.",
    },
    {
      q: "What is the best food to try in Kuala Lumpur?",
      a: "Start with nasi lemak (Malaysia's national dish — coconut rice with sambal). Then char kway teow (wok-fried flat rice noodles with egg, bean sprouts, and Chinese sausage), roti canai (flaky flatbread with dhal curry), laksa (spiced coconut noodle soup), cendol (shaved ice with pandan jelly and palm sugar), and satay. The best versions are at hawker stalls and kopitiams, not in hotel restaurants.",
    },
    {
      q: "What time do Batu Caves open and is it worth going early?",
      a: "Batu Caves is open from 6am and free to enter. By 10am it becomes crowded with tour groups. The 272 steps are also steep in full midday sun — going early (7–8am) means cooler temperatures, golden morning light on the gold Murugan statue, and smaller crowds. The KTM Komuter train from KL Sentral starts early and takes 30 minutes.",
    },
    {
      q: "KL vs Singapore — which should I visit?",
      a: "Both, ideally — they're 4 hours apart by train or 1 hour by plane. KL is cheaper, more chaotic, more culturally layered (Malay, Chinese, Indian, and colonial British all visible simultaneously), with the Petronas Towers as a centrepiece. Singapore is cleaner, more efficient, more expensive, and more international. KL wins on food, price, and raw atmosphere. Singapore wins on infrastructure and ease.",
    },
    {
      q: "What is the budget for 3 days in Kuala Lumpur?",
      a: "Budget traveller: RM 85–195/day (roughly €17–39 or $18–42 USD). This covers a budget hotel or guesthouse, hawker stall meals, public transport, and 2–3 paid attractions. Mid-range: RM 340–710/day. Luxury: RM 1,000+/day. Compared to Singapore, Bangkok, or even Bali, KL is excellent value at every tier.",
    },
  ],
  combineWith: ["penang-3-days", "langkawi-3-days", "singapore-3-days"],
  relatedSlugs: ["singapore-3-days", "bangkok-4-days", "penang-3-days", "langkawi-3-days"],
  galleryQuery: "kuala lumpur petronas towers batu caves chinatown malaysia skyline",
};

export const metadata: Metadata = {
  title: "Kuala Lumpur in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete KL plans — Budget, Mid-Range, Luxury — with Petronas Towers booking secrets, Batu Caves guide, best hawker food, and Grab vs taxi tips.",
  keywords: [
    "kuala lumpur itinerary 3 days",
    "kuala lumpur travel guide 2026",
    "petronas twin towers tickets",
    "batu caves kuala lumpur",
    "malaysia visa free india",
    "kl budget travel",
    "jalan alor food street",
    "malaysia travel guide",
  ],
  openGraph: {
    title: "Kuala Lumpur in 3 Days: Budget to Luxury Itinerary 2026",
    description: "Petronas Towers, Batu Caves, Jalan Alor — 3 complete KL plans with real costs in Malaysian Ringgit.",
    images: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80", width: 1200, height: 630, alt: "Kuala Lumpur Petronas Twin Towers night skyline Malaysia" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Kuala Lumpur", "Malaysia", "Travel", "Itinerary", "Asia"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuala Lumpur in 3 Days: The Only Guide You Need (2026)",
    description: "3 plans, Petronas booking tips, Batu Caves, hawker food guide — real RM costs.",
    images: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days#article",
      headline: "Kuala Lumpur in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete KL plans with Petronas Towers booking secrets, Batu Caves guide, best hawker food, and Grab vs taxi tips.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days" },
      keywords: "kuala lumpur itinerary, petronas towers, batu caves, jalan alor, nasi lemak, malaysia visa india, grab kl",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 4900,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Kuala Lumpur in 3 Days", item: "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Kuala Lumpur, Malaysia",
      description: "Malaysia's capital, home to the Petronas Twin Towers, Batu Caves Hindu temple, and one of the best hawker food scenes in Southeast Asia.",
      url: "https://www.incredibleitinerary.com/blog/kuala-lumpur-3-days",
      touristType: ["Urban Tourism", "Cultural Tourism", "Culinary Tourism", "Architecture Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is Kuala Lumpur visa-free for Indians?", acceptedAnswer: { "@type": "Answer", text: "Yes — since the 2024 India-Malaysia visa-free agreement, Indian passport holders get 30 days visa-free. No prior application required. Confirm current policy at the Malaysian Immigration Department website." } },
        { "@type": "Question", name: "What is the best food to try in Kuala Lumpur?", acceptedAnswer: { "@type": "Answer", text: "Nasi lemak, char kway teow, roti canai, laksa, cendol, and satay. Best eaten at hawker stalls and kopitiams, not hotel restaurants." } },
        { "@type": "Question", name: "What time do Batu Caves open and is it worth going early?", acceptedAnswer: { "@type": "Answer", text: "Open from 6am, free entry. Go at 7–8am for cooler temperatures, golden morning light, and smaller crowds. KTM Komuter from KL Sentral, 30 minutes, RM 2." } },
        { "@type": "Question", name: "KL vs Singapore — which should I visit?", acceptedAnswer: { "@type": "Answer", text: "Both if possible — 4 hours by train. KL is cheaper, more culturally layered (Malay, Chinese, Indian), with better food value. Singapore is cleaner and more efficient. KL wins on atmosphere and price." } },
        { "@type": "Question", name: "What is the budget for 3 days in Kuala Lumpur?", acceptedAnswer: { "@type": "Answer", text: "Budget: RM 85–195/day (€17–39). Mid-range: RM 340–710/day. Luxury: RM 1,000+/day. Excellent value compared to Singapore, Bangkok, or Bali." } },
      ],
};

export default function KualaLumpurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
