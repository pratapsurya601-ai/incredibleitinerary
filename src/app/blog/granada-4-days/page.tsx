import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ──────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Granada 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Granada trip in 4 days. Plan the perfect 4-day Granada itinerary with our expert guide. Alhambra Palace, free tapas, Albaicín quarter,.",
  keywords: [
    "Granada travel guide",
    "Granada itinerary 4 days",
    "Alhambra Palace visit",
    "Granada Spain budget travel",
    "Albaicin quarter Granada",
    "Sacromonte flamenco",
    "free tapas Granada",
    "Generalife Gardens",
    "Granada visa requirements",
    "Schengen visa Spain",
    "Granada things to do",
    "Andalusia travel guide",
  ],
  openGraph: {
    title: "Granada 4-Day Itinerary 2026: Trip Planner",
    description:
      "Alhambra at golden hour, free tapas with every drink, flamenco in candlelit caves — Granada is Spain's most romantic city. Full itinerary from €45/day.",
    url: "https://incredibleitinerary.com/blog/granada-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://source.unsplash.com/1200x630/?granada,alhambra,spain",
        width: 1200,
        height: 630,
        alt: "Granada Alhambra Palace with Sierra Nevada mountains backdrop",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Granada 4-Day Itinerary 2026: Trip Planner",
    description:
      "Alhambra Palace, free tapas, Sacromonte flamenco caves — Granada's magic captured in a 4-day guide from €45/day.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/granada-4-days",
  },
};

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Granada in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "A comprehensive 4-day Granada itinerary covering the Alhambra, Albaicín, Sacromonte and Granada's legendary free tapas culture, with plans from €45 to €250 per day.",
      image: "https://source.unsplash.com/1200x630/?granada,alhambra,spain",
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/granada-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Granada 4-Day Guide",
          item: "https://incredibleitinerary.com/blog/granada-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Granada",
      description:
        "A historic Andalusian city in southern Spain, home to the UNESCO-listed Alhambra Palace, the Moorish Albaicín quarter, Sacromonte flamenco caves, and Spain's most celebrated free tapas culture.",
      url: "https://incredibleitinerary.com/blog/granada-4-days",
      touristType: ["Culture", "History", "Food & Wine", "Architecture", "Flamenco"],
      geo: { "@type": "GeoCoordinates", latitude: 37.1773, longitude: -3.5986 },
    },
  ],
};

/* ── Page data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Granada",
  country: "Spain",
  countryFlag: "🇪🇸",
  slug: "granada-4-days",
  heroQuery: "granada alhambra palace spain andalusia",
  heroAlt: "Granada Alhambra Palace with Sierra Nevada mountains backdrop",
  category: "Europe",
  date: "January 15, 2026",
  readTime: "14 min read",

  intro:
    "As the sun drops behind the Sierra Nevada, the Alhambra turns a burnished copper-gold — and from a terrace in the Albaicín with a cold Alhambra beer in hand (tapas included, always free), the view stops your breath entirely. Granada is Spain's greatest open secret: a city where Moorish palaces crown the hilltops, where every bar serves you food with your drink at no extra charge, where cave-dwelling artists have performed flamenco for centuries, and where you can ski in the morning and swim on the coast by afternoon. It is the most romantic, most layered, most unforgettable city in Andalusia — and it rewards every euro you spend with triple the experience.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€45",
    bestMonths: "Mar–May or Sep–Nov",
    airport: "GRX",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🏛️", label: "Top Highlights" },
    { id: "food", emoji: "🍽️", label: "Food & Drink" },
    { id: "getting-around", emoji: "🚌", label: "Getting Around" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Type", "Schengen Short-Stay Visa (Type C)"],
        ["Fee", "€80 (adults), €40 (children 6–12)"],
        ["Processing", "15–30 business days recommended"],
        ["Validity", "Up to 90 days within any 180-day period"],
        ["Apply At", "Spanish Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flights, bank statements (€100/day)"],
        ["ETIAS", "Not applicable — full visa required"],
        ["Tip", "Apply at least 6 weeks before travel; summer queues are long"],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "Visa-Free for Schengen Area"],
        ["US / AU / CA", "Visa-free up to 90 days"],
        ["UK post-Brexit", "Visa-free up to 90 days in any 180-day period"],
        ["EU Citizens", "Freedom of movement — no limit"],
        ["ETIAS", "Required from mid-2025 (~€7, online pre-registration)"],
        ["Passport", "Must be valid 3 months beyond your stay"],
        ["Tip", "ETIAS is quick (usually minutes) but register before you fly"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€45/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Albaicín Orientation",
          items: [
            "Arrive at Granada Airport (GRX) or bus from Málaga/Seville — the Alsa bus from Málaga takes 1h 45min for €12",
            "Check into a hostel in the Albaicín or near Plaza Nueva — dorms from €16/night at Makuto Guesthouse",
            "Walk through the Albaicín quarter: narrow Moorish streets, white walls, and carmenes (private garden homes) — free",
            "Reach Mirador de San Nicolás before sunset for the iconic Alhambra view — arrive 30 min early for a spot",
            "Dinner on a budget: grab a free tapa with your drink at Bar Poë or Bodegas Castañeda (€2–3 per drink, tapa included)",
            "Evening stroll along Carrera del Darro — the most romantic street in Spain, lit by lanterns, the Alhambra above",
          ],
          cost: "~€25 (transport + 1 night hostel + drinks)",
        },
        {
          day: "Day 2",
          title: "Alhambra Palace — Book in Advance",
          items: [
            "CRITICAL: Book Alhambra tickets at www.alhambra-patronato.es weeks in advance — only ~6,500 tickets/day, sell out fast",
            "Morning slot: Nasrid Palaces (your timed entry is strict — do not be late, no exceptions)",
            "Explore the Alcazaba fortress for panoramic views over Granada — included in standard ticket (€19 adult)",
            "Generalife Gardens: Moorish water gardens designed for the sultans — beautiful in spring with roses in bloom",
            "Budget lunch: bocadillo (sandwich) from a bakery near the Alhambra entrance, ~€3",
            "Afternoon: walk down through the Bosque de la Alhambra (forest) back to the city — shaded and free",
            "Free tapas evening: try Calle Elvira bar-hop — each drink comes with a free tapa, escalating in quality",
          ],
          cost: "~€30 (Alhambra ticket + food + drinks)",
        },
        {
          day: "Day 3",
          title: "Sacromonte Caves & Cathedral Quarter",
          items: [
            "Morning: visit the Cathedral of Granada (€5) and adjacent Royal Chapel (€5) — burial site of Ferdinand and Isabella",
            "Walk through the Alcaicería, Granada's old Moorish silk market — now a bazaar selling ceramics and textiles",
            "Lunch: Mercado San Agustín near the cathedral — fresh produce and cheap local tapas from €2",
            "Afternoon: hike up to Sacromonte — the cave district where Roma families have lived for centuries",
            "Visit the Museo Cuevas del Sacromonte (€5) to understand the zambra flamenco tradition",
            "Budget evening option: watch free street flamenco performances near the cave entrances around dusk",
            "Dinner: Bar Los Diamantes on Plaza Nueva — legendary fried fish tapas (free with your €2.50 beer)",
          ],
          cost: "~€25 (entry fees + food + drinks)",
        },
        {
          day: "Day 4",
          title: "Day Trip Options & Departure",
          items: [
            "Option A (nature lovers): take a day hike in Sierra Nevada National Park — buses from Granada leave at 9am in summer",
            "Option B (coast): Alsa bus to Nerja (2h, €8) — whitewashed cliffside village on the Mediterranean coast",
            "Option C (history): visit Guadix (40 min by bus, €4) — a town of 2,000 cave homes still inhabited today",
            "Final tapas lunch before departure: Restaurante Chikito on Plaza del Campillo — reasonably priced classics",
            "Souvenir shopping: handmade Nasrid-pattern ceramics at workshops near the Albaicín — from €8",
            "Head to GRX airport or bus station — allow 30 min to airport, 15 min to bus station from city center",
          ],
          cost: "~€20 (day trip transport + lunch + souvenirs)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€100/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Albaicín in Style",
          items: [
            "Fly into GRX or take the comfortable Alsa luxury bus from Seville (3h) or Málaga (1h45) — book seats in advance",
            "Check into a boutique hotel in the Albaicín or Carmen de la Alcubilla del Caracol — doubles from €80/night",
            "Guided walking tour of the Albaicín with a local historian (€25pp via GetYourGuide) — context makes it 10x richer",
            "Pre-sunset drinks at a rooftop bar: El Huerto de Juan Ranas has the best Alhambra view from a terrace (€6–8/drink)",
            "Dinner at Restaurante Arrayanes — authentic Moroccan-Andalusian cuisine in a beautifully tiled space, ~€30pp",
            "Evening: stroll Carrera del Darro and across the Paseo de los Tristes lit by lanterns",
          ],
          cost: "~€95 (hotel + tour + dinner + drinks)",
        },
        {
          day: "Day 2",
          title: "Alhambra Deep Dive",
          items: [
            "Pre-booked Alhambra ticket with audio guide (€19 + €7 audio guide) — first entry slot, 8:30am, fewer crowds",
            "Nasrid Palaces: spend at least 90 minutes here — the stucco work, geometric tiles, and light through pierced screens is extraordinary",
            "Generalife Gardens: linger in the upper gardens beyond the main terraces, which most visitors skip",
            "Lunch inside the Alhambra precinct: Parador de Granada restaurant has an elegant courtyard and reasonable set lunch (€22)",
            "Afternoon: return to the city and visit the Fundación Rodríguez-Acosta (€8) — an artist's garden-villa, often overlooked",
            "Evening tapas crawl: hire a food tour guide for the bar-hop (€45pp, GetYourGuide) — they know the best free tapas sequence",
          ],
          cost: "~€100 (Alhambra + lunch + food tour + dinner)",
        },
        {
          day: "Day 3",
          title: "Sacromonte, Flamenco & Granada After Dark",
          items: [
            "Morning: Cathedral (€5) + Royal Chapel (€5) + guided context from your hotel concierge",
            "Craft coffee and pastries at Café Fútbol on Plaza Mariana Pineda — the oldest café in Granada",
            "Afternoon: private guided tour of Sacromonte caves and the zambra flamenco tradition (€35pp, GetYourGuide)",
            "Early evening: visit the Bañuelo Arab Baths (€2.50) — 11th-century hammam, one of Spain's oldest standing buildings",
            "Flamenco show at Cueva de la Rocío or Venta El Gallo in Sacromonte — intimate cave shows, €25–35pp including one drink",
            "Late dinner: Spanish meal times are late — dine at 9:30pm at Restaurante La Fábula in Hotel Villa Oniria (~€40pp)",
          ],
          cost: "~€105 (tours + flamenco + dinner + entries)",
        },
        {
          day: "Day 4",
          title: "Sierra Nevada or Coast & Departure",
          items: [
            "Morning: rent a car or join a day tour to Sierra Nevada ski resort (Dec–Apr) or hiking trails (May–Nov) — €40 car hire",
            "Alternative: guided day trip to the Alpujarras villages — white mountain villages south of Granada, medieval Moorish feel",
            "Picnic lunch with local jamón serrano, manchego, olives, and a baguette — buy from a delicatessen on Calle Reyes Católicos",
            "Return to Granada for a final coffee and souvenir shopping — quality hand-painted ceramics from €20 at reputable shops",
            "Farewell dinner: try rabo de toro (braised oxtail) or pluma ibérica at Bodegas Castañeda, ~€30pp",
            "Transfer to GRX airport or bus station by taxi (€15–20 from city center)",
          ],
          cost: "~€105 (day trip + lunch + farewell dinner + taxi)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€250/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Arrival & Carmen Experience",
          items: [
            "Private airport transfer from GRX in an executive vehicle (~€45) — or arrive by high-speed train to Granada station",
            "Check into the Alhambra Palace Hotel (5-star, built 1910, Moorish architecture, views of the vega) — from €280/night",
            "Alternatively: stay inside the Alhambra complex itself at the Parador de Granada — Spain's most coveted parador (€350+)",
            "Afternoon private guided tour of the Albaicín by a licensed art historian (€120 private, 2 hours)",
            "Sunset cava at Mirador de San Nicolás with a bottle of Cava from a local off-licence — intimate and free of crowds",
            "Dinner at Restaurante Damasqueros — Michelin-recommended Andalusian cuisine using local Vega produce, ~€70pp",
          ],
          cost: "~€270 (luxury hotel + private tour + fine dining)",
        },
        {
          day: "Day 2",
          title: "Alhambra Private Access & Generalife",
          items: [
            "Private guided Alhambra tour with licensed Patronato guide (€180 for 2 people, includes tickets) — deeper access, fewer crowds",
            "Night visit option (book separately, Tuesday/Thursday/Saturday): the Nasrid Palaces by candlelight — €18, ethereal experience",
            "Exclusive: book the Parador de Granada's courtyard for a private lunch inside the former Franciscan convent (€60pp)",
            "Afternoon: private hammam experience at Hammam Al Ándalus — 90-minute circuit with argan oil massage (€75pp)",
            "Evening: private flamenco lesson with a Sacromonte-born dancer (€80/hour) — before attending a professional show",
            "Late dinner at hotel restaurant or a private chef experience in a rented carmen garden (~€90pp)",
          ],
          cost: "~€280 (private guide + hammam + flamenco lesson + dining)",
        },
        {
          day: "Day 3",
          title: "Sacromonte, Art & Culinary Excellence",
          items: [
            "Private sunrise photography session at the Mirador de San Nicolás with a professional photographer (€150, 2h)",
            "Exclusive cave flamenco performance: book a private zambra show in Sacromonte for just your group (from €200 for 2)",
            "Lunch at El Claustro restaurant inside the luxury AC Palacio de Santa Paula hotel — stunning cloister setting, €50pp",
            "Curated afternoon: private visit to a local artist's studio in the Albaicín — pottery or ceramics workshop (€100pp)",
            "Guided tapas experience with a sommelier pairing local Montefrío wines with each free tapa (€80pp private tour)",
            "Farewell dinner at Carmen de Aben Humeya — terrace restaurant overlooking the Alhambra, Andalusian tasting menu €90pp",
          ],
          cost: "~€240 (photography + private flamenco + fine dining + workshop)",
        },
        {
          day: "Day 4",
          title: "Sierra Nevada Luxury & Departure",
          items: [
            "Private helicopter transfer from Granada to Sierra Nevada ski slopes (seasonal, Dec–Apr) for a morning of skiing",
            "Off-season alternative: private guided hike in the Sierra Nevada with a mountain guide (€150 for 2 people)",
            "Lunch at the Sierra Nevada resort's best restaurant with panoramic mountain views — ~€45pp",
            "Afternoon: return to Granada for a final massage at the hotel spa before packing",
            "Last-minute shopping: bespoke Nasrid-motif leather goods or hand-painted azulejo tiles from master artisans",
            "Private executive transfer to GRX or executive class train to Madrid/Barcelona for onward connections",
          ],
          cost: "~€250 (helicopter/guide + spa + fine dining + private transfer)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€16–22 (dorm hostel)",
      food: "€10–15 (free tapas + bocadillos)",
      transport: "€3–5 (city bus + walking)",
      activities: "€10–19 (Alhambra only)",
      total: "~€45/day",
    },
    {
      tier: "🏨 Economy",
      accommodation: "€50–70 (guesthouse)",
      food: "€20–30 (restaurants + tapas)",
      transport: "€5–10 (bus + occasional taxi)",
      activities: "€25–35 (Alhambra + 1 extra)",
      total: "~€80/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€80–120 (boutique hotel)",
      food: "€35–50 (good restaurants)",
      transport: "€10–20 (taxi + day trips)",
      activities: "€40–60 (tours + flamenco)",
      total: "~€100/day",
    },
    {
      tier: "🌟 Upper-Mid",
      accommodation: "€150–200 (4-star hotel)",
      food: "€60–80 (fine dining)",
      transport: "€20–40 (private transfers)",
      activities: "€80–120 (private guides)",
      total: "~€180/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€280–400 (Parador/5-star)",
      food: "€100–150 (Michelin-level)",
      transport: "€50–100 (private car)",
      activities: "€150–200 (exclusive access)",
      total: "~€250/day",
    },
  ],

  mistakes: [
    {
      icon: "🎟️",
      title: "Not Booking the Alhambra Weeks in Advance",
      desc: "The Alhambra sells out. Not sometimes — almost always, especially April through October. The 6,500 daily tickets go on sale 90 days in advance and vanish within hours. Book at www.alhambra-patronato.es the moment your dates are confirmed. Third-party resellers charge €10–30 extra. If you're already in Granada without a ticket, check the official site at midnight for day-of releases.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🌡️",
      title: "Visiting in July or August",
      desc: "Granada in summer is brutal — temperatures regularly hit 38–42°C (100–108°F), the Alhambra queues are longest, and prices peak. Spring (March–May) and autumn (September–November) offer 20–25°C days, lower prices, and a much more pleasant experience. Winter (December–February) is quiet, cold but beautiful, with snowy Sierra Nevada views.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🍺",
      title: "Not Understanding the Free Tapas Culture",
      desc: "Granada is one of the last cities in Spain where every drink comes with a free tapa — and unlike Seville where it's a chip or olive, Granada's tapas escalate: your second drink gets a bigger tapa, your third gets a half-plate. The trick: don't order food at the same bar — drink instead, and eat for free. Bars near the Cathedral and Elvira street have the best free tapas.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🕐",
      title: "Arriving Late for the Mirador de San Nicolás Sunset",
      desc: "Granada's most iconic viewpoint fills up fast before sunset. Arrive 30–45 minutes early, especially on weekends and in summer. In winter, sunset can be as early as 6pm — check the time before you head up. Walking up through the Albaicín adds 20–30 minutes if you're not used to the steep lanes. Take a taxi up and walk down.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "💳",
      title: "Relying on Cards Everywhere",
      desc: "Many smaller tapas bars, cave flamenco shows, and Albaicín restaurants are cash-only or prefer cash. Carry €50–100 in cash at all times. ATMs are plentiful on Gran Vía de Colón — use your bank's own network ATMs to avoid fees. The free tapas economy is essentially cash-based.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🧭",
      title: "Skipping Sacromonte Because It Looks 'Touristy'",
      desc: "Yes, Sacromonte has tourist flamenco shows — but it's also a genuinely inhabited cave community with a 600-year history of Roma culture in Granada. The Museo Cuevas (€5) is excellent. And the authentic zambra flamenco here — particularly in smaller, older caves — is nothing like the polished tablao shows elsewhere. Go up in the early evening and walk among the caves before settling into a show.",
      color: "border-green-200 bg-green-50",
    },
  ],

  tips: [
    {
      icon: "🍷",
      title: "Master the Free Tapas Bar Crawl",
      desc: "Start at Bodegas Castañeda (order vermut), move to Bar Poe (craft beer, enormous tapa), then Bar Los Diamantes (fried fish with wine). Each drink costs €2–3 and comes with increasing food. Three stops, three drinks, three tapas — you'll be full for under €10. This is the definitive Granada travel hack.",
      color: "border-gold-200 bg-amber-50",
    },
    {
      icon: "🌅",
      title: "Catch the Alhambra at Night Too",
      desc: "Night visits to the Nasrid Palaces (Tuesday, Thursday, Saturday — check current schedule) run for 2 hours after dark. The illuminated stucco, reflected pools, and near-silence transform the experience. Tickets are €18 and sell out — book them the same day you book your day ticket. Some travellers say the night visit is actually superior.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🎸",
      title: "Find the Free Live Music",
      desc: "Granada has a live music culture that extends beyond flamenco. On weekends, bars in the Realejo neighbourhood (Calle Molinos and surroundings) often have impromptu guitar sessions. The Palacio de los Olvidados near Plaza Nueva sometimes hosts free concerts. Ask your hostel or hotel what's on locally that week — much of it won't be on TripAdvisor.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🎫",
      title: "Book Tours via GetYourGuide for Verified Guides",
      desc: "For Alhambra tours, Sacromonte flamenco shows, and food tours, GetYourGuide offers verified local guides with real reviews and free cancellation on most bookings. Search 'Granada Alhambra tour' at getyourguide.com/s/?q=Granada&partner_id=PSZA5UI — skip the touts outside the gate who sometimes have fake or overpriced tickets.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "⛷️",
      title: "Ski in the Morning, Beach in the Afternoon",
      desc: "This is real: in winter (December–March), you can ski on the Sierra Nevada slopes (30 minutes from Granada by bus or car) and be on the beaches of Motril on the Mediterranean coast by 2pm (45 minutes south). It's one of Europe's great geographic anomalies. Ski day passes cost around €38; combine with a rental car from Granada for an unforgettable day.",
      color: "border-teal-200 bg-teal-50",
    },
  ],

  faqs: [
    {
      q: "How far in advance should I book Alhambra tickets?",
      a: "As soon as your dates are confirmed — ideally 60–90 days in advance for peak season (April–October). Tickets release on a rolling 90-day window on the official site (www.alhambra-patronato.es). For January–March, 2–3 weeks may suffice, but there's no risk in booking early. If you arrive without a ticket, check the site at midnight (00:00 Granada time) for any released day-of tickets — this is your only realistic last-minute option.",
    },
    {
      q: "Is Granada expensive compared to other Spanish cities?",
      a: "Granada is actually one of Spain's most affordable cities for visitors, precisely because of the free tapas culture. You can eat very well for almost nothing if you drink beer or wine at local bars. Accommodation is 20–30% cheaper than Seville or Madrid. The Alhambra (€19) is the main paid attraction — everything else (Albaicín, Carrera del Darro, Mirador views, street flamenco) is free.",
    },
    {
      q: "Do I need a car to see Granada?",
      a: "No — Granada's historic centre, Albaicín, Sacromonte, and all the main sights are walkable (if hilly). City buses cover the Alhambra hill. You only need a car for day trips to the Sierra Nevada, the Alpujarras, or the coast. Parking in the old city is a nightmare — if you hire a car, use the car park on Calle San Agustín and walk.",
    },
    {
      q: "What is the best neighbourhood to stay in Granada?",
      a: "For atmosphere: the Albaicín (Moorish quarter) — authentic but steep, with narrow lanes. For convenience: near Plaza Nueva or the Cathedral, central and flat. For budget: El Realejo (the old Jewish quarter, now a bohemian neighbourhood south of the cathedral). Avoid staying on Gran Vía de Colón — it's noisy and charmless despite being central.",
    },
    {
      q: "Is Granada safe for solo female travellers?",
      a: "Granada is generally very safe. The Albaicín and Sacromonte feel lively and well-populated until late at night. Standard precautions apply: keep bags close in crowded bars, be aware on the quiet upper Albaicín lanes after midnight, and don't accept drinks from strangers. The city has a large student population (University of Granada) which keeps it young, vibrant, and relatively safe year-round.",
    },
  ],

  combineWith: ["seville-4-days", "costa-del-sol-5-days", "madrid-4-days"],
  relatedSlugs: ["seville-4-days", "madrid-4-days", "lisbon-4-days", "barcelona-4-days"],

  galleryQuery: "granada spain alhambra albaicin flamenco",
};

/* ── Page component ────────────────────────────────────────────────────── */
export default function GranadaPage() {
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
