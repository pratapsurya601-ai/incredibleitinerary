import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Albania Riviera",
  country: "Albania",
  countryFlag: "🇦🇱",
  slug: "albania-riviera-5-days",
  heroQuery: "Albania Riviera Dhermi beach turquoise water Ionian Sea",
  heroAlt: "Dhermi beach on the Albanian Riviera with turquoise Ionian Sea water and mountain backdrop",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "The Albanian Riviera is Europe's last great undiscovered coastline — pristine Ionian beaches, crumbling Greek and Ottoman ruins, and prices that feel like the Mediterranean of 30 years ago. Five days takes you from the wild cliffs of Himara through powder-white Dhermi, south to Sarandë's buzzing promenade, the UNESCO ruins of Butrint, and up to Gjirokastra's stone-walled fortress city perched above a mountain valley.",
  stats: { duration: "5 Days", budgetFrom: "€20", bestMonths: "May–Jun or Sep–Oct", airport: "TIA (Tirana)" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Himara & Arrival" },
    { id: "day2", emoji: "📅", label: "Day 2 — Dhermi & Palasë" },
    { id: "day3", emoji: "📅", label: "Day 3 — Sarandë Beaches" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Albanian e-Visa or visa on arrival (seasonal)"],
        ["Processing", "3–10 business days for e-Visa"],
        ["Fee", "€30–50 depending on type"],
        ["Validity", "90 days stay within 180-day period"],
        ["Apply at", "ealbania.gov.al (official e-Visa portal)"],
        ["Documents", "Hotel bookings, bank statements, travel insurance"],
        ["Notes", "Albania is not Schengen — a separate visa is required. Very straightforward process; visas are generally issued promptly."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free for most Western passports"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days per visit"],
        ["Passport", "Valid passport required; no minimum validity stated but 6 months recommended"],
        ["Border", "Quick border crossing from Montenegro, Kosovo, North Macedonia, or Greece"],
        ["Notes", "Albania is not Schengen — visiting Albania does not use Schengen days. A popular strategy for Schengen 90-day limit resets."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€20–35/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival in Himara — Cliffs & Sunset",
          items: [
            "Fly into Tirana (TIA) and take the 4-hour bus (€6) south to Himara, or cross the border from Corfu/Saranda if coming via Greece — the ferry from Corfu to Sarandë costs €20 and takes 30 minutes",
            "Check in to a family-run guesthouse in Himara (€15–20/night): rooms are basic but clean, families are welcoming, and breakfast is often included with home-made feta and honey",
            "Afternoon swim at Himara beach: a long crescent of grey-and-white pebbles below dramatic limestone cliffs; the water is extraordinarily clear with visibility to 10 metres",
            "Hike up to the Himara Castle ruins above the village (free, 30-minute climb): a Byzantine and Ottoman fortification with sweeping views of the Ionian Sea stretching to Corfu",
            "Dinner at a family taverna: fresh grilled fish (€5–8), Albanian salad with white cheese (€2.50), and local Skënderbeu brandy (€1.50) — a three-course dinner for under €12",
          ],
          cost: "€25–35 (bus/ferry, guesthouse, food, local drinks)",
        },
        {
          day: "Day 2",
          title: "Dhermi & Palasë — Best Beaches on the Riviera",
          items: [
            "Morning furgon (shared minibus, €2–3) 20 km north to Dhermi — the most celebrated beach on the Albanian Riviera, with two kilometres of turquoise Ionian water backed by mountains and olive groves",
            "Rent a sunbed (€3–5/day, or simply bring a towel to the free sections) and spend the morning swimming; the water temperature in June–September is 24–27°C",
            "Walk 3 km to Palasë beach: smaller, quieter, and arguably more beautiful than Dhermi, with a freshwater stream meeting the sea and a taverna serving grilled sea bream (€7)",
            "Afternoon: hike the goat path between Dhermi village and the beach for views over the entire riviera coastline — one of the best free viewpoints on the Albanian coast",
            "Return to Himara by furgon in the evening; budget dinner at a local restaurant (€8–10)",
          ],
          cost: "€20–28 (furgons, sunbed, food, snacks)",
        },
        {
          day: "Day 3",
          title: "South to Sarandë — Promenade & Swimming",
          items: [
            "Morning furgon to Sarandë (1.5 hours, €3–4): Albania's main tourist hub on the southern coast, directly opposite Corfu; the harbour promenade has dozens of cafés and restaurants with sea views",
            "Ksamil beach: 10 km south of Sarandë by taxi (€5) — four small islets surrounded by Caribbean-clear shallow water; one of the Mediterranean's most photogenic beach settings",
            "Swim to the islets (10-minute easy swim) or rent a pedalo (€5/hour); buy fresh seafood from a beach taverna (grilled mussels €5, sea bass €8)",
            "Return to Sarandë promenade for sunset: the promenade fills with an evening paseo of locals and tourists; fresh gelato (€1.50) and people-watching are free",
            "Dinner on the promenade: a full grilled fish meal with wine costs €12–15; rooms in Sarandë hostel €10–15/night",
          ],
          cost: "€22–30 (transport, beach, food, accommodation)",
        },
        {
          day: "Day 4",
          title: "Butrint UNESCO Ruins",
          items: [
            "Take a morning taxi or local bus (€2) to Butrint National Park (18 km south of Sarandë): entry €10 — possibly the best-value UNESCO archaeological site in Europe",
            "Butrint contains Greek, Roman, Byzantine, Venetian, and Ottoman layers all in one compact site on a promontory between a lagoon and the Vivari Channel; allow 2–3 hours to walk the full circuit",
            "Highlights: the 3rd-century BC Greek theatre (better preserved than many in Greece itself), the Lion Gate, the Roman forum baths with mosaic floors, and the Venetian castle on the hilltop",
            "Picnic lunch in Butrint Park with supplies from Sarandë market (bread, local cheese, tomatoes, olives — €4 total)",
            "Afternoon back in Sarandë: walk to Mirror Beach (Plazhi i Pasqyrave) for a late-afternoon swim; sunset from the ruins of the Ali Pasha castle on the headland",
          ],
          cost: "€18–25 (Butrint entry, transport, food)",
        },
        {
          day: "Day 5",
          title: "Gjirokastra UNESCO Old Town & Departure",
          items: [
            "Morning furgon north to Gjirokastra (2 hours, €5): an extraordinary UNESCO city of Ottoman stone towers, bazaars, and a massive fortress on a hill above the Drino valley — unlike anywhere else in the Balkans",
            "Gjirokastra Castle (€3): a 12th-century fortress that dominates the entire city, housing a collection of captured US aircraft from the Cold War and offering panoramic views over the stone rooftops below",
            "Old Bazaar walk: browse hand-crafted silverware, embroidered textiles, and local produce in bazaar lanes that have barely changed in 200 years",
            "Lunch at a traditional Albanian restaurant in the bazaar: qofte (spiced meatballs, €3), fasule (bean stew, €2.50), and raki (€1) — a completely authentic Albanian meal for €7",
            "Late bus back to Sarandë or Tirana for departure; if flying from Tirana, allow 6 hours from Gjirokastra to airport",
          ],
          cost: "€20–28 (furgon, castle, food, final bus)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€70–120/day",
      days: [
        {
          day: "Day 1",
          title: "Himara — Boutique Hotel & Clifftop Dinner",
          items: [
            "Private transfer from Tirana Airport to Himara (€80–100 for the car, split between 2–3 travellers): 4 hours of dramatic mountain road through the Llogara Pass at 1,025 metres with panoramic riviera views — the drive itself is a highlight",
            "Check in to a mid-range hotel in Himara (€50–70/night) with sea-view balcony or pool; Rapo's Resort and Rapo's Beach are reliable with breakfast included",
            "Afternoon at the private section of Himara beach; afternoon boat rental (€40–60/hour for a small motorboat) to explore sea caves and hidden coves only accessible from the water",
            "Sunset drinks and dinner at a clifftop restaurant: fresh-caught sea bream, grilled octopus, and local Çobo Winery white wine (€25–35/pp); the view over the Ionian at dusk is unmissable",
          ],
          cost: "€90–120 (transfer share, hotel, boat, dinner)",
        },
        {
          day: "Day 2",
          title: "Dhermi & Himarë Coast by Boat",
          items: [
            "Hire a private speedboat for a half-day (€80–100, split 2–4 ways) to explore the Albanian Riviera coastline from the sea: Dhermi, Palasë, Gjipe Canyon beach, and the sea caves near Karaburun",
            "Gjipe Canyon: a narrow gorge walkable from the beach (30 minutes each way) leading to a secluded cove with turquoise rock pools; only accessible by boat or a 2-hour mountain hike",
            "Lunch aboard the boat or at a beach taverna (€15–20/pp): freshly grilled fish brought on board by passing fishing boats is a common custom in peak season",
            "Afternoon at Dhermi beach: hire a premium sunbed setup (€10/day) and enjoy the afternoon; optional water sports (paddleboarding €15/hour)",
            "Evening back in Himara: cocktails at a beach bar followed by dinner (€20–25/pp)",
          ],
          cost: "€100–130 (boat, food, activities, drinks)",
        },
        {
          day: "Day 3",
          title: "Ksamil & Sarandë — Riviera's Best Swimming",
          items: [
            "Private taxi to Ksamil (€30 from Himara, 1.5 hours): the four beach islands of Ksamil are Albania's most photographed spot; rent a sun lounger and umbrella on the finest section of beach (€10/day)",
            "Swim to the islands, snorkel in the clear water, and lunch at a beachside restaurant: seafood platter for two (€35–45) with local white wine",
            "Check in to a mid-range hotel in Sarandë (€50–70/night): many have roof terraces overlooking the bay with views of Corfu on the horizon",
            "Evening promenade walk followed by dinner at one of Sarandë's better seafood restaurants (€20–30/pp): try the Corfu-influenced dishes using fresh Ionian fish",
          ],
          cost: "€100–120 (taxi, sunbeds, meals, hotel)",
        },
        {
          day: "Day 4",
          title: "Butrint & Blue Eye Spring",
          items: [
            "Guided tour of Butrint UNESCO site (€15–20 including guide): a knowledgeable local guide transforms the ruins — explaining the Greek theatre acoustics, tracing the Roman road, and describing how the Venetians used the site as a trading post",
            "Blue Eye Spring (Syri i Kaltër): 30 km from Sarandë, a mysterious natural spring where water of 18°C emerges from an unknown depth creating a vivid blue-and-turquoise eye-shaped pool in a forest clearing; taxi €20 return",
            "Lunch at a riverside restaurant near Sarandë (€15–20/pp): the tave kosi (baked lamb with yoghurt) is a must-try Albanian speciality",
            "Afternoon Sarandë beach: rent a kayak (€10/hour) and paddle to the Ali Pasha fortress island for a unique view of the ruins from water level",
          ],
          cost: "€80–100 (Butrint, Blue Eye taxi, meals, kayak)",
        },
        {
          day: "Day 5",
          title: "Gjirokastra — UNESCO Stone City",
          items: [
            "Hire a private driver for the day to Gjirokastra (€60–80 return including waiting time): the mountain road through the Gjirokastra valley is spectacular; a driver allows freedom to stop at viewpoints",
            "Gjirokastra Castle guided tour (€20 with local guide): the guide brings the Cold War history, Ottoman siege warfare, and the city's role as Ali Pasha's power base to life in a way that audio guides cannot",
            "Traditional lunch at Gjirokastra old bazaar restaurant: qofte, byrek (savoury pastry), and local red wine (€15–20/pp)",
            "Zekate House (€3): the finest Ottoman mansion in Albania, a three-storey stone tower house from 1812 with original furnishings, weapons, and a rooftop view of the Drino valley",
            "Return to Sarandë or continue to Tirana for departure",
          ],
          cost: "€90–110 (driver, Gjirokastra, meals, museums)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€250–450/day",
      days: [
        {
          day: "Day 1",
          title: "Private Transfer & Clifftop Villa",
          items: [
            "Private luxury transfer from Tirana Airport or Corfu ferry: chauffeured vehicle with refreshments, stopping at Llogara Pass viewpoint for photography (€150 for the full transfer, arranged through accommodation)",
            "Check in to a luxury villa or boutique hotel on the Himara cliff (€150–300/night): look for properties with private pools, sea-view infinity terraces, and direct beach access or shuttle",
            "Private boat charter for the afternoon (€200–300 for half-day): explore the Albanian Riviera sea caves, swim in secluded coves, and anchor at Gjipe Canyon for cliff-jumping",
            "Sunset dinner at a premium clifftop restaurant: 5-course Albanian tasting menu with Çobo Winery wine pairing (€80–100/pp); fresh seafood sourced from the morning's catch",
          ],
          cost: "€380–500 (villa, private boat, dinner, transfer)",
        },
        {
          day: "Day 2",
          title: "Dhermi by Sea & Private Beach",
          items: [
            "Full-day private boat charter (€400–600) for the entire day: a skipper takes you along the coast from Himara to the Karaburun Peninsula, into the sea cave network only accessible by small boat, and to a private-feeling cove for lunch",
            "Freshly caught lobster and sea bream lunch cooked on the boat's deck: the skipper typically has contact with local fishing boats and arranges the catch of the day (€40–60 per person for seafood, included in some charters)",
            "Afternoon at a premium beach club at Dhermi: champagne, sunbeds, DJ, and infinity pool (€50–80 day pass covers most drinks at some clubs)",
            "Return to villa for sunset; private in-villa chef dinner (€100–150 per person, many villas offer this service): traditional Albanian recipes elevated with fresh produce",
          ],
          cost: "€420–600 (boat charter, beach club, in-villa dinner)",
        },
        {
          day: "Day 3",
          title: "Ksamil, Butrint & Luxury Sarandë",
          items: [
            "Private speedboat transfer from Himara to Ksamil (€80, 45 minutes): arrive directly by sea at the beach islands while other tourists queue for taxis",
            "Premium beach club at Ksamil (€60 day pass): infinity pool, full service, snorkelling equipment, and paddleboards; oysters and sparkling wine included in some packages",
            "Private guided Butrint tour (€60–80): archaeologist guide gives a 2-hour private walk through the UNESCO site with stories unavailable in guidebooks; access to usually-closed sections with advance booking",
            "Check in to Sarandë's finest boutique hotel (€120–200/night) with sea-view terrace; dinner at the best fish restaurant in town (€50–70/pp): live lobster tank, catch-of-day platters",
          ],
          cost: "€350–500 (speedboat, beach club, Butrint, hotel, dinner)",
        },
        {
          day: "Day 4",
          title: "Blue Eye, Gjirokastra & Mountain Feast",
          items: [
            "Private chauffeured day to Blue Eye Spring and Gjirokastra (€150–200 for the full day including guide): start with a peaceful morning at the Blue Eye spring before most visitors arrive",
            "Private guided Gjirokastra Castle tour (€80): access areas normally closed, with a historian who specialises in Ottoman Albania and can discuss the city's role in 20th-century Albanian history under Enver Hoxha",
            "Lunch at the finest traditional restaurant in Gjirokastra old town (€30–40/pp): 5-course Albanian menu — tave kosi, liver on skewer, honey-and-walnut dessert, local raki",
            "Zekate House private tour followed by return to Sarandë; sunset cocktails at the hotel rooftop",
          ],
          cost: "€320–450 (driver, guides, meals, cocktails)",
        },
        {
          day: "Day 5",
          title: "Final Morning Swim & Departure",
          items: [
            "Private beach club morning: last swim in the Ionian at Ksamil or Sarandë beach before departure",
            "Brunch at the finest café on the Sarandë promenade (€20–25): freshly squeezed orange juice, eggs, local cheese platters, and Albanian coffee",
            "Shopping: pick up a bottle of Çobo Winery reserve wine (€10–15) or Skënderbeu premium raki (€15–20) as a local souvenir; Albanian artisan ceramics in the market",
            "Private luxury transfer to Corfu (ferry, €20, 30 minutes) or private charter to Tirana Airport for departure",
          ],
          cost: "€250–350 (beach club, brunch, shopping, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€10–18 (guesthouse/hostel)",
      food: "€8–14 (family tavernas, markets)",
      transport: "€3–6 (furgons + shared taxis)",
      activities: "€5–12 (Butrint + Gjirokastra)",
      total: "€20–35/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€50–80 (boutique hotel with sea view)",
      food: "€25–45 (seafood restaurants + wine)",
      transport: "€20–40 (private taxis + day tours)",
      activities: "€25–50 (guided tours, boat trips)",
      total: "€70–120/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€150–300 (clifftop villa or boutique hotel)",
      food: "€80–150 (fine seafood + wine pairings)",
      transport: "€100–200 (private driver + boat charter)",
      activities: "€100–200 (private boats, beach clubs, guides)",
      total: "€250–450/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€8–12 (hostel dorm or camping)",
      food: "€5–10 (market, bread, cheese, taverna)",
      transport: "€2–4 (furgons only)",
      activities: "€3–8 (Butrint only key site)",
      total: "€15–25/day",
    },
    {
      tier: "🏝️ Beach Splurge",
      accommodation: "€80–150 (beachfront hotel)",
      food: "€30–60 (beach clubs + seafood)",
      transport: "€30–80 (private car + speedboat hire)",
      activities: "€40–80 (boat charter, beach clubs, guided UNESCO)",
      total: "€150–300/day",
    },
  ],
  mistakes: [
    {
      icon: "☀️",
      title: "Visiting in July and August at peak season prices",
      desc: "Albania's beaches are genuinely cheap in May–June and September–October — but July–August sees a tenfold increase in Albanian diaspora visitors from Italy, Germany, and Switzerland. Prices for accommodation triple, beaches are crowded, and the best guesthouses are full by March. Visit in June or September for the same weather at a fraction of the cost.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚌",
      title: "Not understanding the furgon system",
      desc: "Albania's coastal transport runs on furgons — shared minibuses that depart when full rather than on a fixed schedule. They leave from central squares, cost €2–5 per ride, and are perfectly safe. Travellers who don't know this end up paying €30 for private taxis on routes that cost €3 on a furgon.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏛️",
      title: "Skipping Butrint for an extra beach day",
      desc: "Butrint is one of the most atmospheric ancient ruins in the Mediterranean — Greek theatre, Roman baths, Byzantine mosaics, and Venetian castle, all in a lagoon setting with no crowds. At €10 entry it's extraordinarily underpriced. Travellers who skip it for Ksamil beach every day are missing the riviera's most compelling experience.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💳",
      title: "Relying on card payments outside major hotels",
      desc: "Most Albanian beach restaurants, furgon drivers, market vendors, and guesthouses are cash-only. ATMs exist in Sarandë and Himara town centres but not at beaches. Withdraw Albanian Lek (or use Euros, which are widely accepted) at the start of each day. The exchange rate for euros is generally fair at 1 EUR ≈ 108–110 ALL.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Not including Gjirokastra in the itinerary",
      desc: "Most riviera visitors stay on the coast the entire trip and miss Gjirokastra entirely. This UNESCO old city of Ottoman stone towers, a medieval fortress, and a bazaar that hasn't changed in centuries is 2 hours inland and completely unlike anywhere else in Europe. It's one of the most undervisited UNESCO sites on the continent.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🐟",
      title: "Always ask what the fresh catch of the day is",
      desc: "Albanian coastal restaurants receive fish directly from local fishing boats the same morning. The best fish isn't on the menu — ask the owner what came in today. Sea bream, dentex, and grouper are common; price by weight is standard (€8–12/kg). This practice saves money and guarantees the freshest meal on the riviera. Book boat tours at https://www.getyourguide.com/s/?q=Albania+Riviera&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🏔️",
      title: "Drive the Llogara Pass for the best view in Albania",
      desc: "The road between Vlorë and Himara crosses the Llogara Pass at 1,025 metres, then drops 1,000 metres to the riviera in a series of hairpin bends. The view from the top — with mountains behind and the Ionian coast stretching to Corfu ahead — is breathtaking. Stop at the mountain lodge for coffee and byrek (€2).",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏊",
      title: "Go to the beach before 10am or after 5pm",
      desc: "Even in summer, Dhermi and Ksamil beaches are almost empty before 10am. The water is calmer, the light is beautiful for photography, and you can choose any spot. The same beach at noon in July is packed. An early swim followed by breakfast at the village above is the optimal Albanian Riviera morning.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍷",
      title: "Try Çobo Winery — Albania makes genuinely great wine",
      desc: "Albanian wine is almost entirely unknown outside the country. Çobo Winery near Berat produces outstanding Shesh i Bardhë (white) and Kallmet (red) from indigenous Albanian grape varieties. A bottle costs €5–8 in local shops. Ask any good restaurant for Albanian wine specifically — do not default to the international options.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Albania safe for tourists in 2026?",
      a: "Albania is very safe for tourists. The country has transformed dramatically since the 1990s and the riviera and Gjirokastra areas see hundreds of thousands of European visitors annually. The main risks are the same as anywhere in southern Europe: petty theft in crowded areas, and road safety (Albanian mountain roads require careful driving). Locals are generally extremely hospitable — the concept of besa (hospitality as a sacred obligation) is deeply ingrained in Albanian culture.",
    },
    {
      q: "What currency is used in Albania and can I use euros?",
      a: "Albania's official currency is the Albanian Lek (ALL). However, euros are widely accepted in tourist areas, hotels, restaurants, and even by furgon drivers on the riviera — often at a fair rate of approximately 1 EUR = 108–110 ALL. Bring a mix of euros and local Lek. ATMs are available in Sarandë, Himara, and Gjirokastra but not at beaches.",
    },
    {
      q: "How do I get from Tirana to the Albanian Riviera?",
      a: "From Tirana, the fastest option is a private transfer or taxi to Sarandë or Himara (4–5 hours, €60–90 for a car). Public buses run from Tirana to Sarandë (5 hours, €10–12) and from Vlorë south along the coast. The Corfu–Sarandë ferry (30 minutes, €20) is excellent if you're combining with Greek islands. Furgons connect all riviera towns daily.",
    },
    {
      q: "When is the best time to visit the Albanian Riviera?",
      a: "May–June and September–October are ideal: the Ionian is already warm (22–25°C), beaches are uncrowded, prices are low, and the mountains are green. July–August is peak season with prices 2–3x higher and beaches packed. October still offers 22°C sea temperatures. Avoid November–March when many guesthouses and beach restaurants close entirely.",
    },
  ],
  combineWith: ["corfu-4-days", "ohrid-3-days", "plovdiv-3-days"],
  relatedSlugs: ["ohrid-3-days", "plovdiv-3-days", "athens-4-days", "istanbul-5-days"],
  galleryQuery: "Albania Riviera Dhermi Ksamil Butrint Gjirokastra beaches",
};

export const metadata: Metadata = {
  title: "Albania Riviera in 5 Days: Complete 2026 Guide (Budget to Luxury)",
  description:
    "The perfect 5-day Albania Riviera itinerary — Himara, Dhermi beach, Ksamil, Sarandë, Butrint UNESCO ruins, and Gjirokastra. Europe's best-value beach destination from €20/day. Full visa info.",
  keywords: [
    "Albania Riviera itinerary",
    "Albania Riviera 5 days",
    "Albania travel guide 2026",
    "Dhermi beach Albania",
    "Sarandë Albania",
    "Butrint UNESCO ruins",
    "Gjirokastra UNESCO",
    "Albania budget travel",
    "Albanian Riviera visa",
    "Ksamil beach Albania",
  ],
  openGraph: {
    title: "Albania Riviera in 5 Days: Complete 2026 Guide (Budget to Luxury)",
    description:
      "Himara cliffs, Dhermi beach, Ksamil islands, Butrint ruins, and Gjirokastra — Albania's Riviera in 5 days from €20/day.",
    type: "article",
    url: `${siteUrl}/blog/albania-riviera-5-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Albania Riviera in 5 Days: Complete 2026 Travel Guide",
    description:
      "Europe's most underrated coastline — Dhermi, Ksamil, Butrint ruins, and Gjirokastra from €20/day. Full itinerary.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/albania-riviera-5-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Albania Riviera in 5 Days: Complete 2026 Travel Guide (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
      description:
        "A complete 5-day Albania Riviera itinerary covering Himara, Dhermi, Palasë, Sarandë, Ksamil, Butrint UNESCO ruins, and the UNESCO old city of Gjirokastra.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/albania-riviera-5-days`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Albania Riviera in 5 Days",
          item: `${siteUrl}/blog/albania-riviera-5-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Albanian Riviera",
      description:
        "The Albanian Riviera — pristine Ionian beaches from Himara to Sarandë, with UNESCO sites at Butrint and Gjirokastra, and some of Europe's most affordable travel.",
      geo: { "@type": "GeoCoordinates", latitude: 40.0088, longitude: 19.9722 },
      touristType: ["Beach Travellers", "Budget Travellers", "History Enthusiasts", "Adventure Seekers"],
    },
  ],
};

export default function AlbaniaRivieraPage() {
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
