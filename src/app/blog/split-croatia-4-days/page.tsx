import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Split, Croatia",
  country: "Croatia",
  countryFlag: "🇭🇷",
  slug: "split-croatia-4-days",
  heroQuery: "split croatia diocletian palace dalmatian coast",
  heroAlt: "Split Croatia waterfront promenade with Diocletian's Palace walls and Adriatic Sea",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Split is the city where people literally live inside a Roman emperor's retirement palace — restaurants, bars, and homes occupy the same walls Diocletian built in 305 AD. The Dalmatian Coast stretches beyond in both directions: Hvar's lavender fields and electric nightlife lie 50 minutes by catamaran, Krka's thundering waterfalls are an hour inland, and Brac's Zlatni Rat beach changes shape with every tide. Four days is the sweet spot — enough time to explore every tower of the old town, take a day trip to Hvar, swim under Krka's waterfalls, and eat slow-cooked lamb peka the way Dalmatians have eaten it for centuries.",
  stats: { duration: "4 Days", budgetFrom: "€50", bestMonths: "May–Jun or Sep", airport: "SPU" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Diocletian's Palace" },
    { id: "day2", emoji: "📅", label: "Day 2 — Hvar Island" },
    { id: "day3", emoji: "📅", label: "Day 3 — Krka Waterfalls" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C) — Croatia is in the Schengen Area since January 2023"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Croatian Embassy or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Apply 6–8 weeks before travel. Croatia's inclusion in Schengen means one visa covers the entire zone."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area since Jan 2023)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders visa-free but subject to 90/180 Schengen rule since Croatia joined in 2023."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€50–75/day",
      days: [
        {
          day: "Day 1",
          title: "Diocletian's Palace & Bacvice Beach",
          items: [
            "14:00 — Arrive Split Airport (bus to city centre costs €5, takes 30 min); check into a hostel inside or near the old town (€18–28/night in a dorm) — staying inside the palace walls is the same price as outside",
            "15:30 — Free self-guided walk through Diocletian's Palace — enter through the Golden Gate (north) and walk the Decumanus to the Peristyle; the palace is still a living neighbourhood with residents drying laundry above Roman columns",
            "17:00 — Climb the Cathedral of Saint Domnius bell tower (€5) for the best panorama over the Adriatic and old town rooftops; the cathedral itself is a converted Roman mausoleum",
            "19:00 — Dinner at Fife restaurant on the Riva promenade (€10–14) — a beloved local institution serving massive plates of grilled fish, prsut cured ham, and brudet fish stew; the terrace fills with locals at sunset",
            "21:00 — Bacvice beach for picigin — the traditional Split beach game played in ankle-deep water by local teams; watch or join in, the crowd is always welcoming (free)",
          ],
          cost: "€35–45 (hostel, food, bell tower, bus from airport)",
        },
        {
          day: "Day 2",
          title: "Hvar Island Day Trip",
          items: [
            "07:30 — Catamaran from Split harbour to Hvar Town (€12 each way, journey 50 min); book tickets the evening before from Jadrolinija or Kapetan Luka; the morning departure arrives before the crowds",
            "09:30 — Hike up to Hvar Fortress (Fortica) for the view over Hvar Town, the Pakleni Islands, and the Adriatic (€3 entry) — go early before it gets hot; the view is the best in central Dalmatia",
            "12:00 — Lunch on Hvar waterfront (budget fish or pizza €10–14) — Hvar restaurants are pricey so walk one block back from the harbour for local konoba prices",
            "14:00 — Rent a kayak (€15/hour) or water taxi (€5 each way) to the Pakleni Islands for swimming in turquoise coves — Palmizana island has the best snorkelling",
            "18:30 — Catamaran back to Split; dinner at a local grill near Bacvice (€12); pick up local Grk or Posip white wine from a small shop (€8/bottle)",
          ],
          cost: "€55–70 (ferry, fortress, kayak, meals)",
        },
        {
          day: "Day 3",
          title: "Krka Waterfalls Day Trip",
          items: [
            "08:00 — Shared minibus or public bus from Split to Skradin (€8–12 return, 1 hour) — Krka National Park entry is €20; buy tickets online to skip the queue at peak season",
            "10:00 — Walk the 2km wooden boardwalk trail through Krka canyon to Skradinski Buk waterfall — the largest accessible waterfall in Croatia with 17 cascading falls; swimming was banned in 2021 to protect ecosystems",
            "12:30 — Picnic lunch at the park benches (bring food from Split to save money) or eat at the park restaurant (€10–15); local lamb and fresh river trout on the menu",
            "14:00 — Boat excursion to Visovac island monastery (€10 add-on from park ticket office) — a Franciscan monastery on a tiny island in the middle of the river canyon, continuously inhabited since 1445",
            "17:00 — Return bus to Split; evening drinks on the Riva promenade watching the sunset over the Adriatic (local Karlovacko beer €3 at any bar)",
          ],
          cost: "€50–65 (bus, park entry, boat, food)",
        },
        {
          day: "Day 4",
          title: "Marjan Hill, Market & Departure",
          items: [
            "07:30 — Hike Marjan Hill park (free) starting from Mestrovic Gallery trailhead — the forested peninsula above Split has 360-degree views, a 13th-century Jewish cemetery, and almost no tourists; allow 90 minutes for the full loop",
            "10:00 — Green Market (Pazar) outside the Golden Gate — Split's central market selling Dalmatian cheese, olives, lavender sachets, and seasonal produce; buy local cherry jam or fig rakija as gifts (€3–6)",
            "12:00 — Final lunch: Peka slow-cooked lamb at a traditional konoba (book ahead by one day, €15–18/pp) — the iron bell dish takes 3–4 hours to cook and is the authentic taste of Dalmatia",
            "15:00 — Bus to Split Airport (€5); allow 90 minutes before flight for check-in",
          ],
          cost: "€30–45 (market, lunch, airport bus)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Palazzo Arrival & Old Town Evening",
          items: [
            "13:00 — Check in to a 3-star hotel or boutique apartment inside Diocletian's Palace (€80–130/night) — rooms converted from Roman cellars with original stone walls and barrel-vaulted ceilings are unforgettable",
            "15:00 — Guided walking tour of the palace with a local archaeologist (€25, 90 min) — the context transforms what looks like a tourist maze into a coherent Roman emperor's fortress-retirement villa",
            "17:30 — Split City Museum in the Papalic Palace (€5) and Cathedral Treasury (€3) — the Mestrovic Pieta in the Cathedral is one of Croatia's finest sculptures",
            "20:00 — Dinner at Konoba Matejuska in the fishermen's quarter (€30–40/pp) — fresh catch of the day grilled over charcoal, local Dalmatian wine, and a harbourside terrace; the waterfront tables book up fast in summer",
          ],
          cost: "€140–165 (hotel, tour, museum, dinner)",
        },
        {
          day: "Day 2",
          title: "Hvar & Pakleni Islands",
          items: [
            "07:30 — Fast catamaran to Hvar Town (€12 one way); check in day bags at a luggage storage on the harbour (€5)",
            "09:00 — Guided lavender and olive oil tasting tour on Hvar island (€40) — includes transport to inland villages, local producer visits, and 6 olive oil and lavender honey samples",
            "13:00 — Lunch at Gariful restaurant on the marina (€40/pp) — famous seafood restaurant in Hvar with the freshest lobster and sea bass in a setting favoured by visiting yachts",
            "16:00 — Private speedboat to Pakleni Islands (€60/hour for the boat, split 4 ways) to a secluded beach on Jerolim or Marinkovac — clear water, pine shade, total quiet",
            "20:30 — Evening catamaran back to Split; drinks on the Riva promenade",
          ],
          cost: "€150–175 (catamaran, tour, lunch, boat)",
        },
        {
          day: "Day 3",
          title: "Krka National Park & Skradin",
          items: [
            "08:30 — Organised day trip with air-conditioned bus from Split (€35 including park entry, 1 hour drive) — private companies offer better scheduling than public buses and include a guide for the first hour",
            "10:30 — Full Krka canyon walk including Skradinski Buk, Roški Slap waterfall (accessible only by boat, €8 extra), and the Roman military sites in the upper canyon",
            "14:00 — Lunch at Skradin town restaurant (€20/pp) — Skradin risotto (crni rizot with cuttlefish ink) is the town's signature dish and impossible to find outside Dalmatia",
            "17:00 — Return to Split; evening at leisure; optional wine tasting at a Dalmatian wine bar on the Riva (Dingac and Plancic local reds are exceptional, €8/glass)",
          ],
          cost: "€130–155 (day trip, park, lunch, wine)",
        },
        {
          day: "Day 4",
          title: "Marjan, Mestrovic & Departure",
          items: [
            "09:00 — Mestrovic Gallery in the sculptor's own villa on Marjan Hill (€10) — Ivan Mestrovic is Croatia's greatest 20th-century sculptor; the gallery and chapel in the grounds house 200 of his works overlooking the Adriatic",
            "11:00 — Marjan Hill forest walk to the viewpoints above the city; the trail is free and the views across to Brac island and back over Split's campaniles are exceptional",
            "13:00 — Farewell lunch: peka slow-roasted lamb or octopus at Konoba Nevera (€30–40/pp, book day before) — the iron peka dish needs hours of preparation and is the definitive Dalmatian experience",
            "16:00 — Transfer to airport by taxi (€30) or express bus (€5)",
          ],
          cost: "€120–145 (gallery, lunch, airport transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€300–500/day",
      days: [
        {
          day: "Day 1",
          title: "Waterfront Arrival & Private Palace Tour",
          items: [
            "12:00 — Private transfer from Split Airport to a 5-star hotel on the Riva or inside the palace walls (€60) — the Vestibul Palace Hotel rooms are carved from Diocletian's own ceremonial vestibule",
            "15:00 — Private archaeologist-guided palace tour with after-hours access to the Cathedral Treasury and Roman cellars (€120/hour, 2 hours) — only available to hotel guests and private groups",
            "19:00 — Aperitivo on the Riva at a premium bar with Dalmacija gin spritz and Dalmatian charcuterie board (€25/pp)",
            "21:00 — Dinner at restaurant Dvor on the Marjan cliff (€80–100/pp) — Split's finest restaurant with an open terrace suspended above the Adriatic, tasting menu of Dalmatian seafood, and a 200-label Croatian wine list",
          ],
          cost: "€350–450 (hotel, private tour, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Yacht to Hvar & Pakleni",
          items: [
            "09:00 — Private yacht charter from Split marina to Hvar and the Pakleni Islands (€500–800/day for a 10m yacht with skipper, split among 6 people) — stops at secluded bays inaccessible by public ferry",
            "11:00 — Hvar Fortress private guided visit with a curator who explains the Venetian fortification history (€100 for the private access)",
            "13:00 — Lunch on the yacht at anchor in a Pakleni island bay — private chef on board prepares fresh Dalmatian seafood purchased that morning at Hvar market (€80/pp catered)",
            "17:00 — Sunset sailing back to Split marina; champagne on deck as the Diocletian palace walls come into view",
            "21:00 — Late dinner at Konoba Fetivi in the old town (€60/pp) — a converted Roman vault restaurant with a curated tasting menu and the best Dingac wine cellar in Split",
          ],
          cost: "€450–600 (yacht, private tour, catered lunch, dinner)",
        },
        {
          day: "Day 3",
          title: "Krka & Inland Dalmatia by Private Car",
          items: [
            "08:30 — Private driver and guide for Krka, Sibenik, and a private estate visit in inland Dalmatia (€250/day for driver and guide, full day)",
            "10:00 — VIP Krka National Park visit including the private Visovac monastery boat tour and the lesser-visited Roski Slap waterfall trail away from the crowds",
            "13:00 — Private lunch at an agrotourism estate outside Drnis (€60/pp) — owner-cooked peka lamb, homemade prosciutto, local cheese, and estate olive oil and wine poured without limit",
            "16:00 — Visit to Sibenik's Cathedral of St James — a UNESCO World Heritage 15th-century cathedral built entirely without mortar, with 74 stone portrait heads carved around the cornice",
            "20:00 — Return to Split; private rooftop dinner at the hotel or concierge reservation at one of Split's two Michelin-rated restaurants",
          ],
          cost: "€400–550 (private driver, estate lunch, park, dinner)",
        },
        {
          day: "Day 4",
          title: "Marjan Dawn Walk & Departure",
          items: [
            "07:00 — Dawn walk on Marjan Hill with a private guide (€80) — the forested hill at sunrise with mist over the Adriatic and the city silent below is a Split experience unavailable any other way",
            "09:30 — Breakfast at the hotel rooftop with Adriatic views (included in luxury rate) followed by a final walk through the Peristyle to watch the palace wake up",
            "11:00 — Shopping: custom-fitted Dalmatian lace item or handmade olive wood bowl from palace artisan workshops (€50–200)",
            "13:00 — Private transfer to Split Airport (€60); concierge arranges fast-track check-in if available",
          ],
          cost: "€300–400 (hotel, guide, shopping, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18–28 (hostel dorm in old town)",
      food: "€15–25 (konoba meals + market)",
      transport: "€8–15 (buses + ferry)",
      activities: "€10–20 (palace, waterfalls)",
      total: "€50–75/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€80–130 (boutique hotel or palace apartment)",
      food: "€40–60 (konobas + wine bars)",
      transport: "€20–35 (organised tours + catamaran)",
      activities: "€30–50 (guided tours, park, museum)",
      total: "€120–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200–400 (5-star or palace conversion hotel)",
      food: "€100–180 (fine dining + Michelin)",
      transport: "€80–200 (private yacht, car, transfers)",
      activities: "€100–200 (private tours, exclusive access)",
      total: "€300–500/day",
    },
    {
      tier: "🎟 Day Trip Only",
      accommodation: "N/A (based in Split)",
      food: "€10–15 (packed lunch + snacks)",
      transport: "€12–20 (ferry to Hvar or bus to Krka)",
      activities: "€3–20 (park or fortress entry)",
      total: "€25–55/day trip",
    },
    {
      tier: "🍽 Food Budget",
      accommodation: "N/A",
      food: "€8–12 (peka lunch + burek)",
      transport: "€0 (walking old town)",
      activities: "€5 (bell tower)",
      total: "€13–17/food day",
    },
  ],
  mistakes: [
    {
      icon: "🌞",
      title: "Visiting in July or August without booking far ahead",
      desc: "Split's old town receives 15,000+ daily visitors in peak summer. The Diocletian Palace alleys become impassable by 11am. Hvar island has zero budget beds available after March. Visit in May, June, or September for 30% lower prices and walkable streets.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍽️",
      title: "Ordering peka without advance notice",
      desc: "Peka slow-cooked lamb or octopus under an iron bell takes 3–4 hours of preparation and must be ordered the evening or morning before. Showing up at lunch and asking for peka will get you a polite refusal from every honest konoba in Dalmatia.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "⛴️",
      title: "Buying ferry tickets to Hvar at the harbour on the morning",
      desc: "In June–September, catamarans to Hvar sell out the night before. Buy tickets online at Jadrolinija.hr or Kapetan Luka the moment you know your dates. The 7:30am catamaran is the most important to pre-book as it determines your whole day.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏊",
      title: "Expecting to swim at Krka Waterfalls",
      desc: "Swimming at Skradinski Buk was permanently banned in 2021 to protect the travertine ecosystem. Anyone who suggests you can sneak in is wrong. Brac island's Zlatni Rat beach (1 hour by ferry) or Split's Bacvice city beach are the swimming alternatives.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Staying only inside the palace and missing Marjan Hill",
      desc: "The Marjan forested peninsula above Split is free, crowd-free, and has the best views in the city. The Mestrovic Gallery there is world-class. Most tourists spend all 4 days inside the palace walls and never discover the green city above them.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Book activities with GetYourGuide for flexibility",
      desc: "Krka day trips, Hvar guided tours, and palace walking tours all have free cancellation on GetYourGuide — essential in Croatia where afternoon thunderstorms can cancel ferry crossings. Book at https://www.getyourguide.com/s/?q=Split+Croatia&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏖️",
      title: "Play picigin on Bacvice beach like a local",
      desc: "Picigin is Split's unique beach sport: a ball game played standing in ankle-deep water, diving dramatically to keep the ball from touching the sea. It is free to watch and locals will happily teach you the rules. The games happen every morning and late afternoon.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍷",
      title: "Buy Dalmatian wine directly from producers",
      desc: "Dingac and Postup from the Peljesac peninsula are Croatia's finest reds and cost €8–12 in a local shop vs. €40+ in a restaurant. Posip and Grk are the local whites from Korcula island. Pick up bottles at the Green Market or from shops along the palace walls.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌅",
      title: "Watch sunset from the Mestrovic Gallery terrace or Marjan viewpoint",
      desc: "The Riva promenade is beautiful but faces west with the sun disappearing behind Ciovo island. The Marjan Hill viewpoints and the Mestrovic Gallery terrace face out over open Adriatic — the light on the water at dusk from this angle is breathtaking and has no crowds.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Split in the Schengen Area?",
      a: "Yes — Croatia joined the Schengen Area on 1 January 2023. This means Indian passport holders need a standard Schengen Type C visa that covers all 27 Schengen countries. US, UK, EU, and Australian passport holders enter visa-free for up to 90 days in any 180-day period. The ETIAS electronic travel authorisation will be required for visa-exempt travellers from mid-2026 and costs €7.",
    },
    {
      q: "How do I get from Split to Hvar?",
      a: "The fast catamaran from Split harbour directly to Hvar Town takes 50 minutes and costs €12 each way. Jadrolinija and Kapetan Luka both operate this route. There is also a car ferry from Split to Stari Grad on Hvar (2 hours, €50 for a car, €5 for foot passengers) but the catamaran is better for a day trip. Book tickets online at least the night before in summer.",
    },
    {
      q: "What is the best time to visit Split?",
      a: "May and June offer warm weather (25-28C), calm seas for island hopping, and 50% fewer tourists than July–August. September is equally good with warm sea temperatures from summer. July and August are peak season with 80% of the annual tourists and prices 30–50% higher. Winter (November–March) is quiet and mild but many island services stop.",
    },
    {
      q: "Can I do Hvar and Krka on the same trip?",
      a: "Yes — both are easy day trips from Split and work perfectly as Day 2 and Day 3 of a 4-day itinerary. Do Hvar first (catamaran departs early morning), then Krka the following day (bus from Split bus station). Between these two day trips and two days exploring Split and Brac, four days in the region feels complete without feeling rushed.",
    },
  ],
  combineWith: ["kotor-montenegro-3-days", "dubrovnik-3-days", "tirana-albania-3-days"],
  relatedSlugs: ["kotor-montenegro-3-days", "tirana-albania-3-days", "venice-4-days", "florence-4-days"],
  galleryQuery: "split croatia dalmatian coast diocletian palace adriatic",
};

export const metadata: Metadata = {
  title: "Split Croatia in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Split Croatia itinerary — Diocletian's Palace, Hvar island, Krka Waterfalls, peka lamb, Marjan Hill, and Bacvice beach picigin. Budget €50/day to luxury yacht charters. Visa info for Indian and Western passports.",
  keywords: [
    "Split Croatia itinerary",
    "Split Croatia 4 days",
    "Split travel guide 2026",
    "Diocletian Palace Split",
    "Hvar island day trip from Split",
    "Krka Waterfalls day trip",
    "Split Croatia budget travel",
    "Split visa Indian passport",
    "Dalmatian Coast guide",
    "peka lamb Croatia",
  ],
  openGraph: {
    title: "Split Croatia in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Diocletian's Palace, Hvar island, Krka Waterfalls, and peka slow-cooked lamb — Split Croatia in 4 days from €50/day to private yacht charters.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/split-croatia-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Split Croatia in 4 Days: Complete 2026 Itinerary",
    description:
      "Living inside Roman ruins, Hvar island day trips, Krka Waterfalls, and peka lamb. The complete Split Croatia guide for every budget.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/split-croatia-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Split Croatia in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Split Croatia in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/split-croatia-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Split, Croatia",
      description:
        "Split, Croatia — a living Roman palace city on the Dalmatian Coast, gateway to Hvar island and Krka Waterfalls.",
      geo: { "@type": "GeoCoordinates", latitude: 43.5081, longitude: 16.4402 },
    },
  ],
};

export default function SplitCroatiaPage() {
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
