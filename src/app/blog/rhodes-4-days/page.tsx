import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Rhodes",
  country: "Greece",
  countryFlag: "🇬🇷",
  slug: "rhodes-4-days",
  heroQuery: "rhodes medieval old town greece palace grand master",
  heroAlt: "Rhodes Medieval Old Town with the Palace of the Grand Master and ancient stone walls at sunset",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Rhodes is the crossroads of the ancient world — a UNESCO-listed medieval fortress city built by the Knights Hospitaller, an acropolis perched above a whitewashed village with a view that has not changed in 2,000 years, a butterfly-filled valley deep in the interior, and beaches so clear the sea floor is visible 10 metres down. Four days unlocks the full island: the labyrinthine Old Town, Lindos Acropolis, Anthony Quinn Bay, the Valley of the Butterflies, and evenings drinking Athiri white wine in a candlelit medieval alley.",
  stats: { duration: "4 Days", budgetFrom: "€60", bestMonths: "May–Jun or Sep–Oct", airport: "RHO" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Medieval Old Town" },
    { id: "day2", emoji: "📅", label: "Day 2 — Lindos Acropolis" },
    { id: "day3", emoji: "📅", label: "Day 3 — Valley of Butterflies" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C short stay)"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Greek Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance"],
        ["Notes", "Greece is popular — apply 6–8 weeks before travel. Biometric appointment required at VFS."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, online registration before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free post-Brexit but subject to the Schengen 90/180 day rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€60–80/day",
      days: [
        {
          day: "Day 1",
          title: "Rhodes Old Town — Medieval Walls & Knights Street",
          items: [
            "14:00 — Arrive Rhodes Airport (RHO); take bus to Rhodes Town centre for €3 — far cheaper than a taxi (€20–25); check in to a budget guesthouse or hostel inside or just outside the Old Town walls (€25–40/night)",
            "15:30 — Walk the Street of the Knights (Ippoton) — the best-preserved medieval street in Europe, lined with the inns of the Knights Hospitaller nationalities; completely free to walk and photograph",
            "16:30 — Palace of the Grand Master (€8) — the restored Byzantine-era palace at the highest point of the Old Town; the mosaic floors are stunning even if the exterior restoration is controversial",
            "18:30 — Walk the Old Town back streets toward Socratous Street — the main bazaar street; browse copper workshops, honey, local herbs, and rhodian wine shops",
            "20:00 — Dinner at a traditional taverna in the Old Town: moussaka, horiatiki salad (village salad), grilled lamb chops; budget meal with local draught wine is €14–18",
          ],
          cost: "€40–50 (transport, Palace entry, dinner)",
        },
        {
          day: "Day 2",
          title: "Lindos Acropolis & Anthony Quinn Bay",
          items: [
            "08:00 — Take the KTEL bus to Lindos (€4 each way, 1.5 hours) — buy tickets at the Rimini Square bus station; morning buses leave at 08:10 and 09:00 in summer",
            "09:45 — Arrive Lindos village; walk up to the Acropolis of Lindos (€12) — a 4th-century BC Greek sanctuary inside a medieval Knights castle; the Temple of Athena Lindia on the clifftop with a 200m sea drop below is one of Greece's most dramatic views",
            "12:00 — Lunch in Lindos village square: fresh grilled fish, dakos (barley rusk with tomatoes), and cold Mythos beer; budget meal €12–15 — avoid the first few tourist-facing restaurants",
            "14:30 — On the bus back to Rhodes Town, ask the driver to stop at Anthony Quinn Bay (Vagies Beach) — the actor loved the bay so much he tried to buy it; the turquoise cove is perfect for a swim (free entry)",
            "19:00 — Sunset walk on the Old Town walls (free to walk outside, paid to walk on top); dinner at a budget souvlaki shop outside the walls: gyros wrap €3.50, souvlaki €4",
          ],
          cost: "€40–50 (buses, Acropolis entry, meals)",
        },
        {
          day: "Day 3",
          title: "Valley of the Butterflies & West Coast",
          items: [
            "09:00 — Rent a scooter or moped (€18–25/day) for the west coast route — Rhodes is 80km long and two-wheelers are the best budget way to explore the interior",
            "10:00 — Valley of the Butterflies (Petaloudes, €5 in summer) — a 5km lush valley where thousands of Jersey Tiger moths (Callimorpha quadripunctaria) cluster on the trees July–September; outside that period, it is a beautiful forested gorge walk with waterfalls",
            "12:30 — Kameiros ancient city ruins (€6) — a 5th-century BC Doric Greek city overlooking the sea that was never built over in later centuries; walk the original streets past well-preserved house foundations",
            "14:30 — Swim stop at Kritinia beach — a small pebble cove below Kritinia Castle (free entry to castle); quiet and local compared to the east coast tourist beaches",
            "18:00 — Return to Rhodes Town; dinner at a neighbourhood taverna in the New Town near Mandraki Harbour: grilled octopus, taramasalata, and village bread with olive oil for €12–16",
          ],
          cost: "€40–55 (scooter, site entries, fuel, meals)",
        },
        {
          day: "Day 4",
          title: "Mandraki Harbour & Archaeological Museum",
          items: [
            "09:00 — Mandraki Harbour morning walk — the site of the legendary Colossus of Rhodes (one of the Seven Wonders); the deer statues that now stand at the harbour entrance mark the approximate location where the giant bronze statue once straddled",
            "10:00 — Archaeological Museum of Rhodes (€8) inside the Knights Hospital — a superb collection including the Aphrodite of Rhodes marble statue, ancient grave goods, and the Helios head from the Colossus era",
            "12:00 — Final lunch at a New Town kafeneion: spanakopita (spinach pie), tiropita (cheese pie), and Greek coffee; total under €8",
            "14:00 — Walk through the Turkish Quarter (Mustafa Mosque area) of the Old Town — a reminder of 400 years of Ottoman rule; the hammam (Turkish bath, €10 entry for basic session) offers a relaxing 90-minute pre-flight ritual",
          ],
          cost: "€30–40 (museum, hammam, meals)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€130–180/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town — Secret Alleys & Rooftop Dinner",
          items: [
            "13:00 — Arrive Rhodes; taxi to a boutique hotel inside the Old Town (€25 taxi, €90–140/night hotel) — staying inside the UNESCO walls gives you the Old Town at night after the day visitors leave, which is magical",
            "15:00 — Palace of the Grand Master with audio guide (€8 + €3 audio guide) — understand the complex history of the Knights of Saint John, the Byzantine period, and the Ottoman conquest of 1522",
            "17:30 — Guided walking tour of the Old Town (€20/person, 2 hours) — local guides reveal the 12th-century Jewish Quarter, the hidden Byzantine churches, and the medieval street drainage systems most visitors walk over without noticing",
            "20:00 — Dinner at a rooftop restaurant overlooking the medieval walls: Greek tasting menu (meze-style) with local Athiri white wine and Mandilaria red from Rhodes; €35–45/pp with wine",
          ],
          cost: "€155–175 (hotel, tour, museum, dinner with wine)",
        },
        {
          day: "Day 2",
          title: "Lindos — Private Acropolis & Village Exploration",
          items: [
            "08:30 — Hire a car (€45/day) and drive to Lindos along the scenic east coast road — passing Faliraki, Afantou, and Kolymbia before descending into the Lindos bay",
            "10:00 — Acropolis of Lindos (€12) in the morning before tour groups arrive by coach at 11am — the sunrise light on the Temple of Athena Lindia is exceptional; an on-site guide (€30, 1.5 hours) explains the Doric architecture and Crusader-period additions",
            "12:30 — Lunch at a taverna with a terrace over Lindos main beach: fresh grilled whole sea bream, Greek salad, and a carafe of local Lindos white wine (€25–30/pp)",
            "15:00 — Anthony Quinn Bay (20 minutes drive) for an afternoon swim — park above and walk the 200m path down to the sheltered cove",
            "18:00 — Drive back via Tsambika beach for sunset — one of Rhodes's finest beaches; golden sand, turquoise water, relatively quiet after 5pm",
          ],
          cost: "€145–165 (car, Acropolis, guide, meals)",
        },
        {
          day: "Day 3",
          title: "Valley of the Butterflies, Kameiros & Wine Tasting",
          items: [
            "09:00 — Drive to Valley of the Butterflies (€5) for the 8km roundtrip forested walk — plan for 1.5 hours; the cool canyon air and waterfalls make it the most refreshing hike on a hot Rhodes day",
            "11:30 — Continue to Kameiros ancient city (€6) and spend 90 minutes exploring the best-preserved Doric city on Rhodes — far fewer visitors than Lindos and equally impressive",
            "14:00 — Lunch at Kritinia village taverna (mountain village with views to Turkey) — grilled lamb, local cheeses, and a glass of Muscat of Rhodes (€20/pp)",
            "16:00 — Wine tasting at CAIR or Emery Winery near Embona village — the Athiri grape and indigenous Mandilaria red are must-tries (tasting €8–12, book ahead)",
            "19:00 — Return to Rhodes Town for dinner: seafood meze at a Mandraki Harbour restaurant — octopus, mussels, fried whitebait, and calamari (€30/pp with wine)",
          ],
          cost: "€140–160 (car, sites, wine tasting, meals)",
        },
        {
          day: "Day 4",
          title: "Old Town Morning & Museum Farewell",
          items: [
            "08:30 — Old Town at dawn — the hour between 7:00 and 9:00am when the medieval city belongs to residents, cats, and delivery scooters rather than tourists; walk the complete circuit of the inner walls",
            "10:00 — Archaeological Museum of Rhodes (€8) — the Aphrodite of Rhodes (a 1st-century BC marble kneeling figure found in the sea) is the finest piece; the carved grave stelai from the 5th century BC are extraordinary",
            "12:00 — Final lunch at an Old Town restaurant: lamb kleftiko, tzatziki, and a glass of house wine in a courtyard with bougainvillea (€25/pp)",
            "14:00 — Drive to Rhodes Airport (RHO) — 15 minutes from the Old Town; return hire car and check in",
          ],
          cost: "€120–140 (museum, farewell meals, car return)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Private Old Town Arrival & Exclusive Museum Access",
          items: [
            "13:00 — Private transfer from Rhodes Airport to a 5-star hotel (Melenos Lindos, Ixian Grand, or boutique palace hotel inside the Old Town; €250–600/night) — the best Old Town hotels have rooftop terraces overlooking the medieval skyline",
            "15:00 — Private exclusive Palace of the Grand Master tour arranged through hotel (€8 entry + €120 private guide) — an archaeologist guide explains the palace's layered history from Byzantine to Knights to Italian restoration",
            "19:00 — Rooftop pre-dinner drinks at hotel terrace with views of the medieval walls — sundowner with Septem craft beer or a glass of Estate Gaia Assyrtiko (€15–20/drink)",
            "20:30 — Dinner at a top Old Town restaurant: contemporary Greek tasting menu featuring Dodecanese seafood, handmade pasta with local sea urchin, and the full Rhodes wine list; €80–100/pp with pairing",
          ],
          cost: "€450–600 (hotel, private guide, fine dinner)",
        },
        {
          day: "Day 2",
          title: "Private Yacht to Lindos & Symi Island",
          items: [
            "09:00 — Private yacht charter from Mandraki Harbour (half-day, €500–800 for up to 6 people) — sail along the east coast to Lindos, stopping at secluded coves unreachable by land; snorkelling equipment and drinks on board",
            "11:30 — Arrive Lindos bay by sea — the view of the Acropolis from the water is the most dramatic on the island; swim from the yacht and take the water taxi to the village",
            "12:30 — Lunch at a Lindos clifftop restaurant with full bay view: fresh-caught fish of the day, Lindian salad with local capers, and a bottle of Gaia Wild Ferment Assyrtiko (€60–80/pp)",
            "15:00 — Private Acropolis of Lindos tour (€12 entry + €60 private guide, 90 minutes) — the guide reveals the Temple to Athena Lindia's oracle history and the medieval graffiti carved by crusader knights in the rock",
            "18:00 — Sail back to Rhodes watching the sun descend behind the Turkish coast; aperitifs on deck",
          ],
          cost: "€600–800 (yacht, guide, meals, drinks)",
        },
        {
          day: "Day 3",
          title: "Private Helicopter Tour & Valley of the Butterflies",
          items: [
            "09:00 — Private helicopter island tour (30 minutes, €400 for up to 3 passengers) — see the full outline of Rhodes, the acropolis at Lindos from the air, the butterfly valley, and the Turkish coast from 500m up",
            "11:00 — Valley of the Butterflies private nature walk with a biologist guide (€80, 2 hours) — the guide identifies the moths, explains the valley ecosystem, and takes you beyond the main tourist path to the upper waterfall",
            "13:30 — Lunch at Embona village (mountain village at 800m) at a family taverna reserved for the group: spit-roast lamb, goat cheese, and a tasting of Emery Winery wines; €45–60/pp",
            "16:00 — Private wine tour at CAIR winery (€80/person for private cellar tour and vertical tasting of Athiri and Mandilaria across 5 vintages, by arrangement)",
            "20:00 — Return to Rhodes Town for dinner at a michelin-recommended restaurant (€80–120/pp tasting menu with pairing)",
          ],
          cost: "€500–700 (helicopter, guide, wine tour, meals)",
        },
        {
          day: "Day 4",
          title: "Dawn Swim & Departure",
          items: [
            "07:00 — Private sunrise swim at a secluded beach (hotel-arranged transfer in a private car to a beach without sun loungers or tourists, €50) — the east coast before 8am is extraordinarily quiet",
            "09:00 — Breakfast at hotel or a waterfront cafe in Mandraki: Greek yoghurt with local thyme honey, fresh figs, and specialty coffee (€25 for two)",
            "11:00 — Final Old Town walk and artisan shopping — hand-painted ceramics, museum-quality jewellery reproductions of Hellenistic pieces, and Rhodian honey; best artisan shops are on Fanouriou Street",
            "13:30 — Private transfer to Rhodes Airport (€40); business lounge access; depart",
          ],
          cost: "€300–450 (hotel final night, shopping, airport)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€25–40 (hostel or budget guesthouse)",
      food: "€15–25 (tavernas + souvlaki + markets)",
      transport: "€5–15 (buses + scooter hire)",
      activities: "€15–25 (Palace + Acropolis + one site)",
      total: "€60–80/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€80–140 (boutique hotel Old Town or beach)",
      food: "€40–60 (restaurants + wine tastings)",
      transport: "€35–55 (hire car + fuel)",
      activities: "€25–40 (guided tours + sites)",
      total: "€130–180/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€250–600 (5-star or Old Town palace hotel)",
      food: "€100–200 (fine dining + wine pairings)",
      transport: "€80–200 (private car + yacht charter)",
      activities: "€100–250 (private tours + helicopter)",
      total: "€350–600+/day",
    },
    {
      tier: "🍺 Eating Only",
      accommodation: "N/A",
      food: "€4–8 (souvlaki + gyros + local bakery)",
      transport: "€1.50–4 (local bus fare)",
      activities: "€8–12 (single site entry)",
      total: "€15–25/half-day",
    },
    {
      tier: "🚗 Self-Drive Day",
      accommodation: "N/A",
      food: "€18–28 (taverna lunch + snacks)",
      transport: "€35–50 (car rental + fuel 150km)",
      activities: "€10–20 (two site entries)",
      total: "€65–100/self-drive day",
    },
  ],
  mistakes: [
    {
      icon: "🌞",
      title: "Visiting Lindos Acropolis at midday in July or August",
      desc: "The Acropolis of Lindos is fully exposed marble and limestone with zero shade. In peak summer it reaches 42 degrees C on the rock face. Arrive before 9:30am or after 4:30pm. Midday visits in July and August are genuinely dangerous for children and elderly travellers.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏨",
      title: "Staying only in the New Town resort strip",
      desc: "The beach resort strip north and west of Rhodes Town is generic Mediterranean hotel land. Staying inside the UNESCO Old Town walls (even in a mid-range guesthouse) means you experience medieval streets after the day-tripper buses leave at 6pm — and that version of Rhodes is extraordinary.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🦋",
      title: "Visiting the Valley of the Butterflies and making noise",
      desc: "The Jersey Tiger moths in the Butterfly Valley cluster on tree trunks to conserve energy. Clapping or shouting causes them to fly, which burns their energy reserves and shortens their lives. Wardens enforce quiet rules strictly. Visit for the forested walk and the atmosphere, not to disturb the moths.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Eating at the first restaurant you see in Lindos village",
      desc: "Lindos is heavily touristified and the first ring of restaurants around the village square charge double for mediocre food. Walk five minutes further into the village to find family-run tavernas where the menu is on a chalkboard. The best seafood is at spots near the St Pauls Bay side.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚌",
      title: "Skipping the west coast because it is less famous",
      desc: "The east coast (Lindos, Faliraki, Tsambika) gets 90% of visitors. The west coast has the Valley of the Butterflies, the ancient city of Kameiros, Kritinia Castle, and Embona wine village. Self-driving the west coast on day 3 is one of Rhodes's best experiences.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🍷",
      title: "Try Athiri and Mandilaria — Rhodes indigenous grapes",
      desc: "Athiri is the great white grape of Rhodes — crisp, mineral, with a hint of citrus peel. Mandilaria is the indigenous red — dark, structured, and deeply local. Both are produced at CAIR and Emery wineries near Embona. Order them at any good taverna and book wine experiences at https://www.getyourguide.com/s/?q=Rhodes+Greece&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Walk the Old Town at 7am before the tour groups arrive",
      desc: "The medieval Old Town of Rhodes gets busy with cruise ship day-trippers from 9:30am. At 7am the Knights Street, the Palace of the Grand Master, and the Jewish Quarter are empty except for local cats and bakers opening their shutters. The medieval city feels genuinely ancient at that hour.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "⚓",
      title: "Take a day trip to Symi island from Mandraki Harbour",
      desc: "Symi is 90 minutes by ferry from Rhodes (€15–20 return) and is one of the most beautiful Dodecanese islands — a natural harbour ringed by neoclassical ochre and terracotta houses. Ferries depart daily; you can see the whole island on foot in a day. Book ferries at the harbour kiosk.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏰",
      title: "The Old Town city walls walk is free and spectacular",
      desc: "Rhodes Old Town is encircled by 4km of medieval walls with 11 towers. You can walk the perimeter outside the walls for free at any time. The interior wall walkway (from Palace of the Grand Master) costs €6 and is open Tuesday to Sunday. Alternatively, the moat walk is free and equally impressive.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How long does it take to explore Rhodes Old Town?",
      a: "A thorough exploration of Rhodes Old Town (UNESCO World Heritage Site) takes a full day. The Palace of the Grand Master, Archaeological Museum, Street of the Knights, Jewish Quarter, Turkish Quarter, and Socratous bazaar street each deserve 30–90 minutes. The total walled area is 2.5 square kilometres and easy to get happily lost in. Plan at least one full day and one evening to experience it at different times.",
    },
    {
      q: "Is a hire car necessary for Rhodes?",
      a: "A hire car is strongly recommended for days 2–3 to visit Lindos, Anthony Quinn Bay, Valley of the Butterflies, and Kameiros. KTEL buses run to Lindos (€4 each way) and are a viable budget option. For the Valley of the Butterflies and west coast, a scooter (€18–25/day) or hire car is the only practical option. In Rhodes Town itself, everything is walkable.",
    },
    {
      q: "When is the best time to visit Rhodes?",
      a: "May to June and September to October are optimal — warm enough for swimming (22–28 degrees C sea temperature), no midsummer crowds, and lower prices. July and August bring the island to peak capacity with cruise ship day-trippers, 40+ degree heat, and prices 40–60% higher. Rhodes is one of Greece's sunniest islands with 300 days of sunshine per year, making April and November also viable shoulder-season options.",
    },
    {
      q: "Can I walk across to the Turkish coast from Rhodes?",
      a: "Yes — Marmaris, Turkey is only 18km from Rhodes and a regular hydrofoil ferry runs the crossing in 50 minutes (€30–40 return). Day trips to Marmaris are popular. You need your passport and Turkish entry is visa-free for most Western passports and requires an e-visa (€15) for Indian passport holders. Check the latest crossing schedules at the Mandraki Harbour ferry kiosks.",
    },
  ],
  combineWith: ["santorini-4-days", "athens-3-days", "crete-5-days"],
  relatedSlugs: ["santorini-4-days", "athens-3-days", "crete-5-days", "cyprus-5-days"],
  galleryQuery: "rhodes greece medieval old town lindos acropolis",
};

export const metadata: Metadata = {
  title: "Rhodes in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Rhodes itinerary — Medieval Old Town UNESCO, Lindos Acropolis, Anthony Quinn Bay, Valley of the Butterflies, Palace of the Grand Master, and Greek wine. Budget €60/day to luxury. Full visa info included.",
  keywords: [
    "Rhodes itinerary",
    "Rhodes 4 days",
    "Rhodes travel guide 2026",
    "Rhodes Medieval Old Town",
    "Lindos Acropolis",
    "Anthony Quinn Bay",
    "Valley of the Butterflies Rhodes",
    "Palace of the Grand Master",
    "Rhodes visa Indian passport",
    "Greek island guide",
  ],
  openGraph: {
    title: "Rhodes in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Medieval Old Town UNESCO, Lindos Acropolis, Anthony Quinn Bay, and Valley of the Butterflies — Rhodes in 4 days from €60/day to luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/rhodes-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhodes in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Medieval Old Town, Lindos Acropolis, Anthony Quinn Bay, and Valley of the Butterflies — your complete Rhodes guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/rhodes-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Rhodes in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Rhodes in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/rhodes-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Rhodes",
      description:
        "Rhodes, Greece — UNESCO Medieval Old Town, Palace of the Grand Master, Lindos Acropolis, Valley of the Butterflies, and Anthony Quinn Bay in the Dodecanese.",
      geo: { "@type": "GeoCoordinates", latitude: 36.4341, longitude: 28.2176 },
    },
  ],
};

export default function RhodesPage() {
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
