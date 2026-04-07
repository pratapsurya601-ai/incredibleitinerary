import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Ohrid",
  country: "North Macedonia",
  countryFlag: "🇲🇰",
  slug: "ohrid-3-days",
  heroQuery: "Ohrid Lake North Macedonia church St John Kaneo cliff",
  heroAlt: "St John at Kaneo church perched on a cliff above the blue waters of Lake Ohrid at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Ohrid is the Balkans' most beautiful lakeside city — a UNESCO World Heritage site where medieval churches cling to cliffs above crystalline water, a Macedonian fortress watches over a warren of Ottoman-era bazaar streets, and restaurants serve ohridska pastrmka (Ohrid trout) that you can't eat anywhere else on earth. Three days is enough to explore the old town, cruise the lake, hike the fortress, and still sit on a sunset terrace with a glass of Tikveš wine.",
  stats: { duration: "3 Days", budgetFrom: "€22", bestMonths: "May–Jun or Sep–Oct", airport: "OHD / SKP (Skopje)" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Old Town & St Kaneo" },
    { id: "day2", emoji: "📅", label: "Day 2 — Fortress & Bazaar" },
    { id: "day3", emoji: "📅", label: "Day 3 — Lake Boat Tour" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "North Macedonia Visa (Type C short stay)"],
        ["Processing", "5–15 business days"],
        ["Fee", "€35–60 depending on consulate"],
        ["Validity", "90 days within 6 months"],
        ["Apply at", "North Macedonian Embassy or VFS Global"],
        ["Documents", "Return flight, hotel bookings, 3-month bank statements, travel insurance"],
        ["Notes", "North Macedonia is not Schengen — a separate visa is needed. Process is straightforward; same embassy often handles multiple Balkans visas. If you hold a valid Schengen visa, you may be able to enter visa-free — check current rules before travel."],
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
        ["Passport", "Valid passport required; 6-month validity recommended"],
        ["Border", "Easy crossings from Albania, Kosovo, Bulgaria, Greece, and Serbia"],
        ["Notes", "North Macedonia is not Schengen — stays do not count against the 90/180 Schengen rule. An excellent buffer destination for Schengen day management."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€22–38/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Walk & St John at Kaneo",
          items: [
            "Arrive in Ohrid by bus from Skopje (3 hours, €7) or from Tirana via the Albanian border (4–5 hours, €10); check in to a hostel or budget guesthouse in the Old Town (€12–18/night)",
            "Walk the Old Town: the compact lanes below Samuel's Fortress contain Byzantine churches at every corner — many are free to enter; the Church of St Sophia (€1.50) has the best-preserved medieval frescoes in the Balkans",
            "St John at Kaneo: Ohrid's most iconic view — the 13th-century church on a clifftop above the lake, reachable by a 10-minute footpath from the old town; free to photograph from outside, €1.50 to enter; sit on the rocky platform below and watch the lake change colour in the afternoon light",
            "Sunset from the Upper Gate of Samuel's Fortress (climb up via the old town steps, free route): the view of the lake, the bay of Ohrid, and the Albanian mountains beyond is extraordinary",
            "Dinner at a lakeside restaurant: ohridska pastrmka (grilled Ohrid trout, €8–10) with a shopska salad (€2.50) and a glass of Tikveš Temjanika white wine (€2); total meal €14–16",
          ],
          cost: "€25–35 (bus, hostel, food, church entries)",
        },
        {
          day: "Day 2",
          title: "Samuel's Fortress & Old Bazaar",
          items: [
            "Morning: Samuel's Fortress (€3): the 10th-century fortress walls that encircle the entire hilltop; Tsar Samuel made Ohrid the capital of the First Bulgarian Empire; the walls and towers offer the best 360-degree panorama of lake, city, and mountains",
            "Ancient Theatre of Ohrid (€2): a Hellenistic theatre from 200 BC hidden within the fortress walls, later used for gladiatorial combat under Roman occupation and now used for summer music festivals",
            "Old Bazaar (Stara Čaršija): browse handmade Ohrid pearl jewellery (the lake's endemic mussels are used to make pearls unique to this location), wood-carved icons, and embroidered textiles; a pair of Ohrid pearl earrings costs €8–15",
            "Afternoon: walk to Church of Saints Clement and Panteleimon (Plaošnik, €2): the site where Saint Clement founded Europe's oldest university in 886 AD; remarkable reconstructed basilica with lakeside garden",
            "Evening: bar crawl along the Ohrid waterfront promenade: craft beer from a local bar (€2–2.50), sunset over the lake from the pedestrian quay, dinner at a mehana (€10–12 total)",
          ],
          cost: "€22–30 (fortress, churches, food, beer)",
        },
        {
          day: "Day 3",
          title: "Lake Boat Tour & Departure",
          items: [
            "Morning group boat tour of Lake Ohrid (€10–15, 2–3 hours): tours depart from the main harbour and circle the lake stopping at St John at Kaneo from the water, the Bay of Bones prehistoric stilt settlement (€3 extra), and the spring at Sv Naum monastery near the Albanian border",
            "Sv Naum Monastery (included in most boat tours, or bus for €2 each way): an 11th-century monastery on a wooded promontory where cold springs bubble up from underground; peacocks wander the courtyard freely; the setting rivals any monastery in the region",
            "Swim at a bay near Sv Naum or at the Ohrid town beach (free): the lake's water is up to 30 metres clear — one of Europe's cleanest lakes by water quality",
            "Final lunch in Ohrid: filled burek (savoury pastry, €1.50) and fresh yoghurt at a bakery near the bus station; afternoon bus back to Skopje (€7) or onward to Albania (€10)",
          ],
          cost: "€18–26 (boat, monastery, food, departure bus)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€65–105/day",
      days: [
        {
          day: "Day 1",
          title: "Boutique Hotel & Byzantine Churches",
          items: [
            "Check in to a boutique guesthouse or hotel in Ohrid's Old Town with lake view (€45–70/night): Vila Germanoff and Hotel Tino are excellent options with terraces overlooking the bay",
            "Guided Old Town walking tour (€15, 2 hours): a local guide explains the extraordinary concentration of Byzantine churches — Ohrid reportedly had 365 churches, one for each day of the year; the frescoes inside St Sophia alone justify the tour",
            "Church of St Sophia (€2.50 with guide commentary): 11th-century basilica with the finest medieval fresco programme in the Western Balkans; scenes from the Life of Christ in extraordinary preservation",
            "Afternoon wine tasting at a local wine bar: North Macedonia's Tikveš region produces outstanding Vranec (red) and Temjanika (aromatic white) wines; tasting flight of 4 wines €10–12",
            "Dinner at a lakeside restaurant with views: ohridska pastrmka prepared in 3 ways (grilled, baked with walnuts, smoked and served cold) for the full trout experience (€20–28/pp); local wine pairing",
          ],
          cost: "€85–105 (hotel, guided tour, dinner, wine tasting)",
        },
        {
          day: "Day 2",
          title: "Fortress, Bay of Bones & Kayaking",
          items: [
            "Morning Samuel's Fortress with local guide (€20 including entry and 90-minute guided walk): the guide's knowledge of Tsar Samuel's empire, the Ottoman conquest, and the fortress's role in 20th-century Yugoslav history transforms the ruins",
            "Bay of Bones Museum on Water (€5): a full-scale reconstruction of a 3,200-year-old Bronze Age stilt settlement built over the lake; remarkable archaeology presented in a beautiful lakeside setting",
            "Afternoon kayak rental (€8–10/hour): paddle along the cliff face below St John at Kaneo to see the church from water level — the same view that paintings from the 13th century show; reach hidden sea caves accessible only by kayak",
            "Old Bazaar shopping and café stop: genuine Ohrid pearl necklace (€25–40) — only authentic Ohrid pearls use the endemic Ohridska biserka (pearl mussel) coating technique; look for quality certificates",
            "Dinner at a traditional Macedonian restaurant: tavče gravče (baked beans — North Macedonia's national dish), ajvar (roasted pepper spread), and grilled meats (€18–25/pp)",
          ],
          cost: "€80–100 (guided fortress, kayak, museum, dinner)",
        },
        {
          day: "Day 3",
          title: "Sv Naum & Private Boat Tour",
          items: [
            "Private boat tour of the lake (€50–70 for a 3-hour private charter for 2–4 people): a local boatman takes you to swimming spots, past St John at Kaneo from the water, and to the Sv Naum springs at the southern end of the lake",
            "Sv Naum Monastery with extended time: after the tour groups leave at noon, the monastery and its riverside garden become genuinely peaceful; the sound of the springs and resident peacocks is meditative",
            "Lunch at the Sv Naum restaurant (€15–20/pp): fresh trout pulled directly from the monastery's spring-fed fishing pools; try the trout in walnut sauce",
            "Return to Ohrid by road (taxi €20) and afternoon at leisure; farewell coffee at a lakeside café before departure",
          ],
          cost: "€90–110 (private boat, monastery lunch, taxi)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€200–350/day",
      days: [
        {
          day: "Day 1",
          title: "Lake View Villa & Private Guided Tour",
          items: [
            "Check in to a premium lake-view villa or boutique hotel in the Old Town (€120–200/night): seek properties with private terraces directly overlooking the lake; the view at night with the lit-up church facades reflected in the water is extraordinary",
            "Private art historian guided tour of Ohrid's Byzantine heritage (€80–100 for 3 hours): an art historian specialising in Orthodox iconography brings the frescoes of St Sophia and the mosaics of Plaošnik to life in a way that guidebooks cannot; private access to normally-locked chapels can sometimes be arranged through advance notice",
            "Pre-dinner wine tasting: a premium selection of North Macedonian wines at a lakeside wine bar, including reserve Tikveš wines not found in standard restaurants (€25–40/person)",
            "Dinner at the finest restaurant in Ohrid (€45–60/pp): a contemporary Macedonian tasting menu with ohridska pastrmka prepared multiple ways, paired with Stobi and Tikveš wines; reserve the outdoor terrace table with lake views",
          ],
          cost: "€280–360 (villa, private tour, wine, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Fortress, Kayak Expedition & Spa",
          items: [
            "Private guided morning at Samuel's Fortress (€80 including guide and entry): the fortress walls offer a 360-degree panorama; the guide's narrative connects Tsar Samuel's 10th-century empire to modern Macedonian identity in compelling ways",
            "Private kayak guide for 2 hours (€40–60): a certified guide leads you to spots only accessible by small craft — sea caves, a hidden beach below the cliffs, and a perspective of the St John at Kaneo church that no photographer on land ever gets",
            "Afternoon spa at a boutique wellness centre: lake-water hydrotherapy and a traditional Macedonian hammam treatment (€60–80); the spa at some Old Town hotels draws on natural spring water",
            "Sunset cocktails on the hotel terrace; private chef dinner in the villa garden (€100–150/person) if your accommodation offers the service: traditional recipes made with market-fresh ingredients",
          ],
          cost: "€300–420 (fortress guide, kayak, spa, in-villa dinner)",
        },
        {
          day: "Day 3",
          title: "Sv Naum by Private Boat & Cultural Farewell",
          items: [
            "Full-day private boat charter on Lake Ohrid (€200–300): a polished wooden speedboat with skipper departs at sunrise for the southern lake, stopping at multiple swimming spots in clear 30-metre-visibility water",
            "Sv Naum Monastery private guided visit (€50 extra with archaeologist): see the 9th-century underground church foundations, the spring complex, and the peacock-filled monastery garden at the quietest hour of the morning",
            "Picnic lunch aboard the boat: a hamper prepared by your hotel with local specialities — smoked trout, ajvar, Macedonian white cheese, and a bottle of Tikveš reserve wine",
            "Return to Ohrid mid-afternoon; final visit to the best icon workshop in the bazaar for a hand-painted souvenir icon (€50–150 depending on size and detail); private transfer to Skopje airport (€90–120)",
          ],
          cost: "€350–480 (private boat, monastery, picnic, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€12–18 (hostel or guesthouse)",
      food: "€8–12 (bakeries, mehana, trout restaurants)",
      transport: "€3–5 (buses + occasional taxi)",
      activities: "€5–10 (fortress, churches, boat tour)",
      total: "€22–38/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€45–70 (boutique hotel, lake view)",
      food: "€25–40 (restaurants + wine tastings)",
      transport: "€10–20 (taxis + private boat share)",
      activities: "€25–45 (guided tours, kayak, museum)",
      total: "€65–105/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€120–200 (lake-view villa or boutique hotel)",
      food: "€80–130 (fine dining + wine pairings)",
      transport: "€60–150 (private boat + driver to airport)",
      activities: "€100–180 (private guides, spa, kayak guide)",
      total: "€200–350/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€8–12 (hostel dorm)",
      food: "€5–8 (burek, beans, market produce)",
      transport: "€2–4 (walking + occasional shared taxi)",
      activities: "€3–7 (self-guided, free lake swimming)",
      total: "€15–25/day",
    },
    {
      tier: "🎶 Festival Season",
      accommodation: "€50–100 (book 3+ months ahead for Ohrid Summer Festival)",
      food: "€20–35 (festival food + restaurants)",
      transport: "€10–25 (festival transport + boat tours)",
      activities: "€30–60 (festival tickets, ancient theatre concerts)",
      total: "€90–180/day",
    },
  ],
  mistakes: [
    {
      icon: "🎫",
      title: "Visiting the churches without a guide or any context",
      desc: "Ohrid's Byzantine churches look similar to untrained eyes — small stone buildings with faded paintings. A guide or even a downloaded audio tour transforms them into one of the most concentrated collections of medieval fresco art in Europe. St Sophia's naos and narthex contain programmes that influenced Byzantine art across the entire Orthodox world.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🐟",
      title: "Ordering salmon instead of Ohrid trout",
      desc: "Ohridska pastrmka — the Ohrid trout — is an endemic species found only in this lake, listed as endangered. Restaurants serve a related farmed trout that is still unique to the region, as well as the occasional legally farmed endemic fish. Order the local trout by name and ask the waiter if it is from the Ohrid area. This is the single dish you cannot eat anywhere else in the world.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "⛵",
      title: "Only looking at the lake from the shore",
      desc: "Lake Ohrid looks beautiful from the promenade but looks extraordinary from the water — the clifftop churches, the fortress walls, and the dramatic Albanian mountains behind make sense as one integrated landscape only from a boat. A group tour costs €10–15 and a private boat is €50–70 for a half-day. It's the best €10 you'll spend in North Macedonia.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌞",
      title: "Visiting in July–August and paying peak prices",
      desc: "Ohrid's Ohrid Summer Festival (July–August) brings classical concerts to the ancient theatre, which is wonderful, but accommodation prices triple and the Old Town is crowded. May–June and September–October offer the same water temperature (22–24°C by August baseline), zero crowds, and guesthouse prices at €15–20/night instead of €50–70.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏔️",
      title: "Not crossing to Sv Naum on the Albanian border",
      desc: "Most visitors spend all 3 days in Ohrid town and miss the southern lake entirely. Sv Naum monastery is 29 km south and is one of the most beautiful Orthodox sites in the Balkans — a spring-fed riverside garden, a 9th-century church foundation, and a peacock population that wanders freely. The boat tour there and back is the highlight of many trips.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "📸",
      title: "Photograph St John at Kaneo at sunrise and sunset",
      desc: "The cliff church looks good at any time but extraordinary at golden hour. Sunrise (walk up the coastal path at 6am — zero other tourists) and sunset (the western light turns the stone gold and reflects on the lake) are the two unmissable photography moments. The path takes 10 minutes from the old town waterfront. Book guided tours at https://www.getyourguide.com/s/?q=Ohrid+North+Macedonia&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "💎",
      title: "Buy authentic Ohrid pearls — but check the quality",
      desc: "Ohrid pearl jewellery is made using scales from the endemic Ohridska biserka fish — a 2,000-year-old technique. Genuine pieces have a certification card. Cheap imitations made from plastic or glass are widely sold. Buy from established shops in the bazaar, ask for the certificate, and expect to pay €15–50 for quality pieces. They make exceptional gifts.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚣",
      title: "Hire a rowing boat for a private lake experience",
      desc: "Small wooden rowing boats can be rented on the Ohrid waterfront for €5–8/hour. Row around the cliff below St John at Kaneo and you get a perspective that professional photographers queue for on guided kayak tours. The lake is calm in the morning and the water clarity shows the bottom at 5 metres depth near the cliffs.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍷",
      title: "Drink Macedonian wine — Tikveš is extraordinary value",
      desc: "North Macedonia's Tikveš wine region produces Vranec — a full-bodied red from the endemic Vranec grape — and Temjanika, an aromatic white similar to Muscat. A quality bottle costs €5–8 in local shops and €10–15 in restaurants. This is some of the best-value premium wine in Europe and almost entirely unknown outside the Balkans.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Skopje to Ohrid?",
      a: "Buses run from Skopje to Ohrid 6–8 times daily, take 3 hours, and cost €7–9. There is no direct train. Ohrid Airport (OHD) has seasonal charter flights from Western Europe in summer (June–September), primarily UK, Germany, and Switzerland. Outside of charter season, Skopje Airport (SKP) is the gateway — rent a car (2.5 hours) or take the bus. Some travellers arrive from Albania via the Struga border crossing or from Kosovo.",
    },
    {
      q: "Is Lake Ohrid safe for swimming?",
      a: "Lake Ohrid is one of the cleanest lakes in Europe — a UNESCO-protected tectonic lake over 3 million years old with no industrial pollution. The water is safe to swim in and visibility reaches 20–30 metres in the clear sections near the cliffs. The town beach and the beaches near Sv Naum are the best designated swimming spots. Water temperature reaches 24–26°C by late July.",
    },
    {
      q: "What is the Ohrid Summer Festival and when is it?",
      a: "The Ohrid Summer Festival runs July–August and is one of the oldest cultural festivals in the Balkans, featuring classical music, opera, and theatre performances in the ancient theatre, St Sophia church, and on the open-air stage by the lake. Tickets cost €15–50. The festival brings a wonderful atmosphere but also triples accommodation prices — book 3+ months ahead if visiting during this period.",
    },
    {
      q: "Can I combine Ohrid with Albania in one trip?",
      a: "Ohrid and Albania combine perfectly and the border crossing is easy. Sv Naum monastery is just 5 km from the Albanian border. From Ohrid, furgons and shared taxis run to Pogradec in Albania (1 hour, €5), from where you can continue to the Albanian Riviera. The route Ohrid → Pogradec → Gjirokastra → Sarandë → Dhermi is one of the best value road trips in the Balkans.",
    },
  ],
  combineWith: ["albania-riviera-5-days", "plovdiv-3-days", "sofia-weekend"],
  relatedSlugs: ["albania-riviera-5-days", "plovdiv-3-days", "athens-4-days", "istanbul-5-days"],
  galleryQuery: "Ohrid Lake North Macedonia St John Kaneo church fortress old town",
};

export const metadata: Metadata = {
  title: "Ohrid in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
  description:
    "The perfect 3-day Ohrid itinerary — Lake Ohrid UNESCO, St John at Kaneo church, Samuel's Fortress, Ohrid trout restaurants, old bazaar, and boat tours to Sv Naum. From €22/day. Full visa info.",
  keywords: [
    "Ohrid itinerary",
    "Ohrid 3 days",
    "Ohrid travel guide 2026",
    "Lake Ohrid UNESCO",
    "North Macedonia travel",
    "St John at Kaneo",
    "Samuel's Fortress Ohrid",
    "Ohrid trout restaurants",
    "Ohrid visa Indian passport",
    "Sv Naum monastery",
  ],
  openGraph: {
    title: "Ohrid in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
    description:
      "Lake Ohrid UNESCO, St John at Kaneo, Samuel's Fortress, Ohrid trout, and boat tours to Sv Naum — 3 days from €22/day.",
    type: "article",
    url: `${siteUrl}/blog/ohrid-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ohrid in 3 Days: Complete 2026 Travel Guide",
    description:
      "North Macedonia's UNESCO lake city — St John at Kaneo, medieval fortress, Ohrid trout, and lake boat tours from €22/day.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/ohrid-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Ohrid in 3 Days: Complete 2026 Travel Guide (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
      description:
        "A complete 3-day Ohrid itinerary covering Lake Ohrid UNESCO site, St John at Kaneo church, Samuel's Fortress, the old bazaar, Ohrid trout restaurants, boat tours, and the Sv Naum monastery.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/blog/ohrid-3-days`,
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
          name: "Ohrid in 3 Days",
          item: `${siteUrl}/blog/ohrid-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Ohrid",
      description:
        "Ohrid, North Macedonia — a UNESCO World Heritage city on the shores of ancient Lake Ohrid, with Byzantine churches, a medieval fortress, endemic trout, and pearl jewellery.",
      geo: { "@type": "GeoCoordinates", latitude: 41.1172, longitude: 20.8016 },
      touristType: ["History Enthusiasts", "Nature Lovers", "Cultural Tourists", "Budget Travellers"],
    },
  ],
};

export default function OhridPage() {
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
