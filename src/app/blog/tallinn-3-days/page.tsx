import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";
const slug = "tallinn-3-days";
const canonicalUrl = `${siteUrl}/blog/${slug}`;

const data: UniversalBlogData = {
  destination: "Tallinn",
  country: "Estonia",
  countryFlag: "🇪🇪",
  slug,
  heroQuery: "Tallinn Estonia Old Town medieval towers Toompea Baltic",
  heroAlt: "Tallinn Estonia medieval Old Town limestone towers and Gothic spires from Toompea Hill",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Step through Tallinn's stone archways and you walk into the best-preserved medieval old town in Northern Europe — limestone towers and Gothic spires unchanged since the Hanseatic League ruled Baltic trade in the 14th century. This is the nation that declared WiFi a human right, yet you can sit down to elk stew and black rye bread in a restaurant that has been serving customers since the 1400s. Telliskivi Creative City buzzes with craft beer, street art and independent coffee roasters. Kadriorg Palace sits in baroque gardens Peter the Great built for his wife on the edge of the Baltic Sea. And the Christmas market on Town Hall Square is one of the most photographed in the world. Tallinn is the fairytale capital of the Baltics and it costs a fraction of Lisbon or Prague.",
  stats: {
    duration: "3 Days",
    budgetFrom: "EUR 45",
    bestMonths: "May–Sep or Dec (Christmas Market)",
    airport: "TLL (Lennart Meri)",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Medieval Old Town" },
    { id: "day2", emoji: "📅", label: "Day 2 — Telliskivi & Kadriorg" },
    { id: "day3", emoji: "📅", label: "Day 3 — Open Air Museum & Pirita" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C) — Estonia is Schengen"],
        ["Fee", "EUR 80 per person"],
        ["Processing", "15–30 business days"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Estonian Embassy or VFS Global (Schengen)"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements, travel insurance (EUR 30,000 minimum cover)"],
        ["Notes", "Apply 6–8 weeks before travel. Estonia is efficient and rejection rate for well-prepared applications is low. Biometric appointment required at VFS Global."],
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
        ["ETIAS", "Required from mid-2026 (EUR 7, register online before departure)"],
        ["Passport validity", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free post-Brexit but subject to the 90/180-day Schengen rule. Estonia adopted the Euro in 2011."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "EUR 45–60/day",
      days: [
        {
          day: "Day 1",
          title: "Medieval Old Town on Foot",
          items: [
            "Arrive at TLL Airport; take bus #2 or tram #4 to the city centre (EUR 2 with card tap) rather than a taxi (EUR 8–12)",
            "Check into a hostel dorm inside Old Town walls (Old Town Alur Hostel or similar, EUR 18–22/night) — Old Town location saves transport costs throughout the trip",
            "Toompea Hill walk: Alexander Nevsky Cathedral (free entry, awe-inspiring Russian Orthodox interior), Toompea Castle (exterior only), three panoramic viewpoints over the lower town roofscape",
            "Lower Town exploration: Town Hall Square (Raekoja Plats), Raeapteek medieval pharmacy (claimed to be Europe's oldest continuously operating pharmacy since 1422), Gothic Town Hall exterior",
            "Climb St Olaf's Church tower (EUR 3) for a 360-degree panorama across the Baltic skyline",
            "Dinner at Olde Hansa medieval restaurant — elk stew, black rye bread and a mead (EUR 12–15 for a full meal); live medieval music included",
          ],
          cost: "EUR 38–48 (accommodation, food, tower, transport)",
        },
        {
          day: "Day 2",
          title: "Telliskivi, Kalamaja & Kadriorg",
          items: [
            "Breakfast at F-Hoone in Telliskivi Creative City — avocado toast or local pastry (EUR 5–7); Telliskivi is free to enter and full of street art murals and independent makers",
            "Kalamaja wooden house district walk (free) — colourful 19th-century timber architecture and the most characterful neighbourhood in the city",
            "Kadriorg Park (free entry): baroque gardens designed for Peter the Great, Japanese garden, and the KUMU Art Museum exterior for photos",
            "Lunch at Tallinn Central Market — fresh produce stalls, cheap hot meals and smoked fish plates (EUR 4–7)",
            "Estonian History Museum at Toompea (EUR 7) — essential for understanding the Soviet occupation and the 1991 Singing Revolution",
            "Evening craft beer at Pudel Bar in Telliskivi — local Estonian craft ales on tap from EUR 3.50",
          ],
          cost: "EUR 30–40 (food, museum, beer, transport)",
        },
        {
          day: "Day 3",
          title: "Open Air Museum & Pirita Coast",
          items: [
            "Estonian Open Air Museum at Rocca al Mare (EUR 10) — 18th to 20th century farmsteads, windmills, a functioning village inn, and over 70 historic buildings in a forest park",
            "Bus #21 from Old Town takes 20 minutes and drops you at the gate",
            "Pirita Convent ruins (free entry) — a 15th-century Brigittine convent destroyed by Ivan the Terrible in 1577; the roofless nave and standing walls are atmospheric",
            "Pirita beach walk along the Baltic Sea (free) — if visiting May to August, the beach is swimmable",
            "Lunch at a Pirita cafe: fish soup with rye bread (EUR 6–9)",
            "Return to Old Town for final souvenir shopping: handmade linen, juniper wood items, Estonian craft gin; then bus to airport (EUR 2)",
          ],
          cost: "EUR 28–38 (museum, food, transport, souvenirs)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "EUR 100–130/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Deep Dive & Medieval Feast",
          items: [
            "Check into a 3-star boutique hotel inside Old Town walls (Hotel Uniquestay or Von Stackelberg, EUR 55–80/night) — the walk to all Old Town sights is under 10 minutes",
            "Guided 2-hour Old Town walking tour (EUR 18) — certified local guides bring medieval trade routes, plague stories and the Hanseatic past to life",
            "Alexander Nevsky Cathedral interior visit and Toompea Castle state rooms when open, Tall Hermann Tower",
            "Lunch at Restoran Ribe — modern Estonian cuisine; elk carpaccio with lingonberry and local herbs (EUR 15–22)",
            "KUMU Art Museum — Estonia's premier contemporary and classic art collection in a prize-winning building (EUR 14); the permanent collection on Estonian art 1700–present is excellent",
            "Dinner at Olde Hansa — full medieval feast with roasted boar, barley soup and mead served by costumed staff (EUR 30–38)",
          ],
          cost: "EUR 90–115 (hotel, tour, museums, restaurant dinners)",
        },
        {
          day: "Day 2",
          title: "Telliskivi, Seaplane Harbour & NOA",
          items: [
            "Slow breakfast at Kohvik Klaus in Telliskivi — specialty coffee and Estonian pastries, consistently one of the best cafes in the city (EUR 10–13)",
            "Telliskivi Creative City market and gallery walk — street art, artisan studios and weekend flea market if visiting Saturday or Sunday",
            "Seaplane Harbour (Lennusadam) maritime and aviation museum (EUR 16) — extraordinary collection inside a historic Art Nouveau seaplane hangar; the submarine Lembit and WWI flying boats are unmissable",
            "Afternoon Kadriorg Palace museum (EUR 8) — Peter the Great's baroque summer palace with Dutch-style painted ceilings and period furniture",
            "Dinner at NOA Restaurant on the Baltic shore — contemporary Nordic cuisine with sea views; two courses EUR 40–55 per person",
          ],
          cost: "EUR 95–120 (hotel, museums, restaurant dinner)",
        },
        {
          day: "Day 3",
          title: "Helsinki Ferry or Lahemaa Day Trip",
          items: [
            "Option A: Helsinki day trip by Tallink Silja high-speed ferry (EUR 25–40 return, 2.5 hours each way) — Helsinki Cathedral, Market Square, Esplanade Park; return by 9pm",
            "Option B: Lahemaa National Park guided day trip (EUR 40) — coastal boulders, manor houses, bog trails and the most untouched stretch of Estonian coastline",
            "Packed lunch on the ferry or a forest picnic in Lahemaa",
            "Return to Tallinn for final evening in Old Town",
            "Farewell dinner at Rataskaevu 16 — a beloved Tallinn favourite; duck confit, Estonian mushroom risotto and a glass of local wine (EUR 25–35)",
          ],
          cost: "EUR 85–110 (ferry/day trip, meals, transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "EUR 240–350/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town Suite & Private History Tour",
          items: [
            "Check into Hotel Telegraaf or Schlossle Hotel — 5-star boutique in restored medieval townhouse walls (EUR 150–250/night); both have medieval vault restaurants and spa facilities",
            "Private 3-hour Old Town history tour with a certified cultural historian (EUR 120 for two) — access to private courtyards, medieval vaults, and stories not found in any guidebook",
            "Champagne lunch at the hotel terrace or in the Schlossle garden overlooking Toompea",
            "Private KUMU Art Museum curator-led tour (book 2 weeks ahead, EUR 80) — the curator explains the Soviet-era collection and hidden symbolism in dissident paintings",
            "Hotel spa session in the medieval vaulted wellness centre",
            "Dinner at Tchaikovsky restaurant inside Hotel Telegraaf — Russian Imperial-influenced cuisine with an exceptional wine list; EUR 80–110 per person with wine pairing",
          ],
          cost: "EUR 250–320 (5-star hotel, private tour, curator visit, spa, dinner)",
        },
        {
          day: "Day 2",
          title: "Helicopter, Baltic Boat & Nordic Spa",
          items: [
            "Sunrise helicopter flight over Tallinn Old Town and the Baltic coastline (EUR 150–200 per person, 20–30 minutes; book through Estonian Aviation Academy or private charter operators)",
            "Brunch at Frenchy in Kalamaja — French-Estonian fusion; smoked salmon eggs Benedict with local herbs (EUR 20–26)",
            "Private boat tour of Tallinn Bay (EUR 80 for two hours for a private small vessel) — views of the medieval skyline from the sea are extraordinary and entirely different from Toompea",
            "Laulasmaa Spa Resort (30 minutes from Tallinn by private car) — premium outdoor Nordic pools and sauna complex in a forest setting (EUR 60–80 per person)",
            "Return to Tallinn for cocktails at Lounge 24 inside the Radisson Blue Hotel — panoramic 24th-floor views of the entire city",
            "Dinner at Bordoo in Hotel Three Sisters — 5-course modern European tasting menu with Baltic influences (EUR 90–110 per person with wine pairing)",
          ],
          cost: "EUR 280–380 (helicopter, private boat, Nordic spa, hotel, tasting menu)",
        },
        {
          day: "Day 3",
          title: "Private Lahemaa & Farewell Dinner",
          items: [
            "Private chauffeured full-day excursion to Lahemaa National Park (EUR 180–220 including a private guide) — Palmse Manor estate with restored baroque gardens, guided bog walk on wooden boardwalks, and the fishermen's village of Altja",
            "Gourmet picnic prepared by the hotel kitchen: charcuterie, local cheeses, smoked trout and Estonian rye crisp served at a lakeside clearing in the national park",
            "Stop at Vihula Manor for a private craft gin and whiskey tasting — Estonia's leading estate spirits producer (EUR 30 per person)",
            "Return to Tallinn in the late afternoon for a final spa session",
            "Farewell dinner at the hotel restaurant with an Estonian wine and spirits pairing curated by the sommelier (EUR 70–90 per person)",
          ],
          cost: "EUR 260–340 (private excursion, hotel, picnic, tasting, farewell dinner)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "EUR 18–22 (hostel dorm)",
      food: "EUR 12–16 (cookshops, market, Olde Hansa)",
      transport: "EUR 3–5 (tram, city bus)",
      activities: "EUR 7–15 (tower, museum)",
      total: "EUR 40–58/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "EUR 55–80 (3-star boutique)",
      food: "EUR 30–45 (restaurants + cafes)",
      transport: "EUR 8–12 (taxis, bus to ferry)",
      activities: "EUR 18–30 (museums, guided tour)",
      total: "EUR 95–130/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "EUR 150–250 (5-star)",
      food: "EUR 60–110 (fine dining, tasting menus)",
      transport: "EUR 25–50 (private driver, helicopter)",
      activities: "EUR 50–120 (private tours, spa, boat)",
      total: "EUR 240–350/day",
    },
    {
      tier: "🎄 Christmas Market",
      accommodation: "EUR 35–120 (peak Dec rates)",
      food: "EUR 15–50 (festival food + restaurants)",
      transport: "EUR 5–15",
      activities: "EUR 10–30 (market, ice skating)",
      total: "EUR 65–215/day",
    },
    {
      tier: "🚢 Helsinki Day-Tripper",
      accommodation: "N/A (day trip only)",
      food: "EUR 15–40 (both cities)",
      transport: "EUR 25–45 (Tallink return ferry)",
      activities: "EUR 10–20 (Helsinki sights)",
      total: "EUR 50–105/day",
    },
  ],
  mistakes: [
    {
      icon: "🏨",
      title: "Staying outside Old Town",
      desc: "Old Town is compact and fully walkable — staying outside it means relying on taxis or buses for every outing. The extra EUR 10–20 for an Old Town guesthouse pays for itself in saved transport and in the experience of walking out your door into a medieval street at 6am before the crowds arrive.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💶",
      title: "Over-budgeting because you assume Nordic prices",
      desc: "Tallinn is not Helsinki or Stockholm. Estonia uses the Euro but costs are 40–50% lower than Nordic capitals. A full restaurant meal with a beer runs EUR 10–18. Many first-timers budget EUR 150/day and are pleasantly shocked to spend EUR 50–60. Budget EUR 45/day and you will live extremely well.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🎄",
      title: "Trying to book December at short notice",
      desc: "Tallinn's Christmas Market (late November to early January) is repeatedly voted Europe's best and accommodation fills by October for peak December weekends. Book at least 3–4 months ahead for any December trip or expect double to triple the usual accommodation prices and very limited availability.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚢",
      title: "Not doing the Helsinki day trip",
      desc: "Helsinki is 2.5 hours away by Tallink high-speed ferry for EUR 25–40 return. No extra visa is needed for Schengen travellers. Take an 8am boat, spend 6 hours in Helsinki and return by 9pm. It is the easiest international day trip in Europe and most Tallinn visitors skip it without realising how accessible it is.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Spending all 3 days only inside Old Town walls",
      desc: "Old Town is extraordinary but Telliskivi, Kalamaja, Kadriorg and the Open Air Museum are essential Tallinn. All are within 15–25 minutes by foot or a EUR 2 bus ride. First-timers who do not venture outside the walls miss the living city — the street art, the craft beer, the modern design scene and the Baltic shore.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎟️",
      title: "Buy the Tallinn Card for museums and transport",
      desc: "The Tallinn Card (EUR 26–48 for 24–72 hours) gives free entry to over 40 museums and unlimited public transport. It pays for itself on day one if you visit KUMU, the Seaplane Harbour and the Open Air Museum. Buy online before you arrive for a 10% discount. Book guided experiences at https://www.getyourguide.com/s/?q=Tallinn&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍺",
      title: "Try mulgipuder, kama dessert and Vana Tallinn",
      desc: "Mulgipuder is a traditional Estonian porridge of mashed potato and pearl barley with butter and bacon — a hearty, warming dish found on almost every Old Town menu. Kama is a dessert of roasted grain flour mixed with buttermilk or yoghurt, served with jam. Vana Tallinn is a sweet herbal rum liqueur best sipped straight over ice cream or poured into coffee.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "📱",
      title: "Use the Bolt app for all rides",
      desc: "Bolt was founded in Tallinn and works better here than anywhere else. Airport to Old Town costs EUR 8–12 via Bolt versus EUR 15–25 for a street taxi. The app also runs Bolt Food for delivery and Bolt Scooter for electric scooter rentals. Download it before landing and set up payment in advance.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌐",
      title: "Book the e-Estonia Showroom visit in advance",
      desc: "Estonia invented digital government — e-Residency, digital voting, medical records and company registration all online. The free e-Estonia Showroom in central Tallinn runs 45-minute guided tours explaining how a country of 1.3 million people became the most digitally advanced nation on Earth. Tours fill up — book your free slot at e-estonia.com before you arrive.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Tallinn safe for solo travellers including women travelling alone?",
      a: "Yes. Tallinn consistently ranks among Europe's safer capitals with low rates of violent crime and petty theft. Old Town is busy with tourists and well-lit at night. Normal city precautions apply in less-trafficked areas after midnight. The local police are visible and responsive. The Kalamaja and Telliskivi neighbourhoods feel equally safe and are popular with locals at all hours.",
    },
    {
      q: "How many days do you actually need in Tallinn?",
      a: "Three days is the ideal first visit — enough to cover Old Town thoroughly (two half-days), take a day trip to Helsinki or Lahemaa, and explore Telliskivi, Kalamaja and Kadriorg. Two days works if you focus only on Old Town and one neighbourhood. Five days allows you to add Lahemaa, the Parnu beach resort and a proper Helsinki excursion. Tallinn rarely overstays its welcome — most visitors wish they had booked longer.",
    },
    {
      q: "What is the best time to visit Tallinn?",
      a: "May to September offers mild weather (15–22 degrees C), long daylight hours and outdoor cafe culture with beer gardens in full swing. July and August are warmest but also busiest. December is magical for the Christmas market — one of Europe's most atmospheric, with mulled wine, gingerbread and candlelight on cobblestones. January and February are cold (-5 to -10 degrees C) but beautiful in snow with almost no crowds. Avoid late March and early April for the best value rates.",
    },
    {
      q: "Can Indian passport holders get a Schengen visa for Estonia easily?",
      a: "Yes, with preparation. Apply at the Estonian Embassy or through VFS Global at least 30 days before travel. Required documents include confirmed hotel bookings, return flights, travel insurance with a minimum EUR 30,000 cover, three months of bank statements showing sufficient funds, and an employment or business letter. Estonia is efficient and the rejection rate for well-prepared applications is low. It is one of the more straightforward Schengen visa processes.",
    },
  ],
  combineWith: [
    "riga-3-days",
    "vilnius-3-days",
    "helsinki-3-days",
    "stockholm-4-days",
  ],
  relatedSlugs: [
    "riga-3-days",
    "vilnius-3-days",
    "helsinki-3-days",
    "stockholm-4-days",
  ],
  galleryQuery: "Tallinn Estonia Old Town medieval architecture Toompea",
};

export const metadata: Metadata = {
  title: "Tallinn in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Tallinn itinerary — medieval Old Town UNESCO, Toompea Castle, Alexander Nevsky Cathedral, Kadriorg Palace, craft beer at Telliskivi and Estonian food (mulgipuder, kama). Full visa info for Indian and Western passports.",
  keywords: [
    "Tallinn itinerary",
    "Tallinn 3 days",
    "Tallinn travel guide 2026",
    "Tallinn Old Town",
    "Estonia travel",
    "Toompea Castle",
    "Kadriorg Palace",
    "Tallinn visa Indian passport",
    "Tallinn Christmas market",
    "Telliskivi craft beer",
  ],
  openGraph: {
    title: "Tallinn in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Medieval Old Town, Toompea Castle, craft beer at Telliskivi and Estonian mulgipuder — Tallinn in 3 days from EUR 45/day to luxury 5-star.",
    type: "article",
    url: canonicalUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tallinn in 3 Days: Complete 2026 Travel Guide",
    description:
      "Medieval towers, craft beer and the world's most digital nation — your complete 3-day guide to Tallinn, Estonia.",
  },
  alternates: { canonical: canonicalUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Tallinn in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
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
          name: "Tallinn in 3 Days",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Tallinn",
      description:
        "Tallinn, Estonia — the best-preserved medieval Old Town in Northern Europe, a UNESCO World Heritage Site where Hanseatic limestone towers, Gothic spires, Toompea Castle and Alexander Nevsky Cathedral stand alongside the world's most digitally advanced government.",
      geo: { "@type": "GeoCoordinates", latitude: 59.437, longitude: 24.7536 },
    },
  ],
};

export default function TallinnPage() {
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
