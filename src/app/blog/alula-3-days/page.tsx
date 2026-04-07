import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "AlUla",
  country: "Saudi Arabia",
  countryFlag: "🇸🇦",
  slug: "alula-3-days",
  heroQuery: "alula hegra nabataean tombs saudi arabia desert rock formations",
  heroAlt: "AlUla Hegra Nabataean rock-cut tombs in desert Saudi Arabia ancient ruins",
  category: "Middle East",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "111 Nabataean rock-cut tombs carved into rose-red sandstone 2,000 years ago. A landscape of 200-million-year-old rock formations so alien they look like a Dalí painting had a fever dream. The Winter at Tantora festival where classical musicians perform at midnight concerts under a sky so full of stars it looks rendered. A tourist industry so new that some of the guides are learning the sites alongside you. This is AlUla — Saudi Arabia's Petra-equivalent that most of the world has never heard of, hiding in plain sight in the northwestern corner of the Kingdom, and finally open for the world to see.",

  stats: {
    duration: "3 Days",
    budgetFrom: "$120",
    bestMonths: "Oct–Apr (cool season)",
    airport: "ULH (Prince Abdul Majeed bin Abdulaziz, AlUla)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🚗", label: "Getting Around" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "Saudi e-Visa available for Indian passport holders"],
        ["Cost", "$130 USD (approx. ₹10,800)"],
        ["Apply at", "visitsaudi.com — straightforward online process"],
        ["Processing", "Usually approved within 24–72 hours"],
        ["Coverage", "Single or multiple entry; covers AlUla, Riyadh, Jeddah, NEOM"],
        ["Pro tip", "Apply at least 2 weeks before travel. Have hotel bookings ready to upload"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "Saudi e-Visa available online ($130) — or visa on arrival at major airports"],
        ["Saudi tourism opened", "2019 — tourism visas brand new compared to Gulf neighbours"],
        ["Visa on arrival", "Available at Riyadh (RUH) and Jeddah (JED) airports for eligible passports"],
        ["Coverage", "AlUla is covered under standard tourist visa"],
        ["Note", "Israeli passport holders cannot enter Saudi Arabia"],
        ["Pro tip", "Dress modestly. Women no longer need abaya but conservative dress is respectful"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "$120/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive AlUla — Old Town & Elephant Rock Sunset",
          items: [
            "Fly into ULH airport from Riyadh (RUH) or Jeddah (JED) — budget flights from $60 one way on flynas or flyadeal",
            "Check into AlUla budget accommodation — budget guesthouses start at $60–80/night (AlUla is still developing its budget scene)",
            "Afternoon: walk AlUla Old Town (Murabba) — the ancient mudbrick labyrinth abandoned in 1983, free to enter",
            "Wind through 900 mudbrick houses, a 13th-century mosque and alleyways carved into a single sandstone hill",
            "Late afternoon: taxi or shared ride to Elephant Rock (Jabal AlFil) — ~$15 return",
            "Watch sunset light the sandstone arch and the surrounding rock city — one of the most photographed landscapes in Arabia",
            "Evening: dinner at AlUla Night Market when it runs (Nov–Mar) or local restaurant ($10–15)",
          ],
          cost: "$80–100 including accommodation",
        },
        {
          day: "Day 2",
          title: "Hegra (Mada'in Salih) — Saudi Arabia's First UNESCO Site",
          items: [
            "Book the mandatory Hegra shuttle in advance at experiencealula.com ($25 entry + guide)",
            "Hegra (ancient Mada'in Salih) is Saudi Arabia's first UNESCO World Heritage Site — 111 Nabataean tombs carved into rock",
            "The Nabataeans built Petra (Jordan) first, then this — and it's less touristed, arguably more dramatic",
            "Walk through the Jabal Ithlib ceremonial area — a narrow siq canyon leading to a rock-cut diwan hall",
            "See the Qasr al-Farid — the 'Lonely Castle', a solitary tomb rising from the desert floor, carved but never finished",
            "Afternoon: Dadan archaeological site — pre-Nabataean capital from the 2nd millennium BC, lion tombs carved into cliff faces",
            "Evening: Jabal Ikmah — an open-air library of 2,000-year-old inscriptions in Dadanitic, Lihyanite, Aramaic, Minaic scripts ($10 guided)",
            "Night sky photography from your accommodation or a desert clearing",
          ],
          cost: "$45–60 activities + food",
        },
        {
          day: "Day 3",
          title: "Harrat Viewpoint, Mushroom Rock & Depart",
          items: [
            "Sunrise at the Harrat Viewpoint — sweeping panorama over the lava fields and rock formations ($0)",
            "Morning: Mushroom Rock (Jabal AlQurma) — perfectly balanced sandstone mushroom formation, free to visit",
            "Shared taxi or tour minibus to the AlUla viewpoint terraces ($10–15 total for group)",
            "Hot air balloon over the rock formations if budget allows ($180pp — splurge worth it for the view of Hegra from above)",
            "Alternatively: hike through the Ashar Valley — shaded rock passages between cliff faces",
            "Lunch: AlJadidah Art Village area — the revived heritage district with cafés ($10–15)",
            "Maraya Concert Hall exterior — the Guinness Record largest mirrored building, free to photograph from outside",
            "Transfer to ULH airport for evening departure",
          ],
          cost: "$30–50 (without balloon) or $210 (with balloon)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$250/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive AlUla — Heritage Hotel & Old Town Guided Tour",
          items: [
            "Fly into ULH and check into Shaden Resort or Dar Tantora Heritage Hotel ($150–200/night) — both in the heritage zone",
            "Private guide for AlUla Old Town walking tour ($50pp) — in-depth history of the 3,000-year-old settlement",
            "Visit the AlUla Museum for context on Lihyanite and Nabataean civilisations ($10)",
            "Sunset at Elephant Rock with a guide who explains the geological formations ($20pp in a group tour)",
            "Dinner at Maraya Social — the restaurant at the mirrored Maraya Concert Hall ($40–60pp)",
          ],
          cost: "$220–260 including accommodation",
        },
        {
          day: "Day 2",
          title: "Hegra Private Tour & Desert Star Dinner",
          items: [
            "Private guided tour of Hegra at sunrise — the tombs are most dramatic in early light ($80pp private vs $25 group)",
            "Full access to Qasr al-Farid, Jabal Ithlib siq, and the South and North tombs cluster",
            "Dadan site with a specialist archaeologist guide ($40pp with a small group)",
            "Afternoon: Jabal Ikmah inscription walk with an epigrapher guide ($30pp)",
            "Sunset: hot air balloon over the Hegra landscape ($180pp — book through experiencealula.com)",
            "Night: private desert dinner under the stars — set up by your resort ($80–120pp, usually arranged through hotel)",
          ],
          cost: "$250–300",
        },
        {
          day: "Day 3",
          title: "Rock Art, AlJadidah & Maraya Concert Hall",
          items: [
            "Morning: Siq Rashid Al-Zouk rock art trail — prehistoric carvings including camels, ibex and humans ($15 with guide)",
            "AlJadidah Art Village — craft workshops, local art, café with fresh juices and dates ($15–20)",
            "Maraya Concert Hall tour — the mirrored cube that reflects the desert and seats 500 for world-class concerts ($20)",
            "If visiting Nov–Mar: check the Winter at Tantora festival schedule — performances in the Hegra amphitheatre",
            "Farewell lunch at a heritage restaurant in the Old Town ($20–30pp)",
            "Transfer to ULH for departure — or connect to Riyadh for onward travel",
          ],
          cost: "$180–220",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$500/day",
      days: [
        {
          day: "Day 1",
          title: "Private Arrival & Banyan Tree AlUla Check-In",
          items: [
            "Private transfer from ULH in a luxury 4WD ($80)",
            "Check into Banyan Tree AlUla or Habitas AlUla ($400–600/night) — both set dramatically among rock formations",
            "Private evening tour of AlUla Old Town with a cultural historian ($100pp)",
            "Sunset cocktails at your resort terrace — watching the rock formations turn gold, then crimson, then purple",
            "Dinner at the resort restaurant with AlUla's finest local ingredients — dates, pomegranates, slow-cooked lamb ($100pp)",
          ],
          cost: "$600–700 including accommodation",
        },
        {
          day: "Day 2",
          title: "Exclusive Hegra Dawn Experience & Midnight Stars",
          items: [
            "Private pre-dawn access to Hegra — available through luxury resorts and the RCU (Royal Commission for AlUla) ($300+ exclusive experience)",
            "Watch the sun rise from behind the Qasr al-Farid tomb with no other visitors",
            "Private Dadan and Jabal Ikmah tour with a specialist archaeologist ($150pp)",
            "Spa treatment at resort mid-afternoon",
            "Sunset hot air balloon from the Hegra launch site with champagne landing ($250pp luxury balloon)",
            "Private desert dinner: fire-lit table among the rocks, traditional Hejazi cuisine, live oud music ($200pp)",
            "Midnight astronomy session with a telescope guide — AlUla is a Dark Sky Reserve ($80pp)",
          ],
          cost: "$700–900",
        },
        {
          day: "Day 3",
          title: "Maraya Concert, Rock Formations & Exclusive Departure",
          items: [
            "Sunrise hike to a private viewpoint with your resort guide — panorama over the entire AlUla valley",
            "Exclusive tour of the Maraya Concert Hall backstage areas ($150pp through cultural concierge)",
            "Camel ride through the sandstone corridors near the Old Town ($60pp private)",
            "Chef's lunch at resort — AlUla pomegranate and lamb slow-cooked in a traditional tannour oven",
            "If it's Winter at Tantora season: attend an evening concert at Hegra amphitheatre (tickets from $200pp)",
            "Private transfer to ULH — departure by private jet or first-class commercial to Riyadh/Jeddah",
          ],
          cost: "$500–700",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget",
      accommodation: "$60–80 (guesthouse)",
      food: "$15–25",
      transport: "$10–20",
      activities: "$25–50 (entry fees)",
      total: "$120/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "$150–200 (heritage hotel)",
      food: "$40–60",
      transport: "$25–40",
      activities: "$50–80",
      total: "$250/day",
    },
    {
      tier: "Luxury",
      accommodation: "$400–600 (Banyan Tree / Habitas)",
      food: "$80–150",
      transport: "$80–150",
      activities: "$100–300",
      total: "$500+/day",
    },
    {
      tier: "Festival Season",
      accommodation: "+30–50% premium (Nov–Mar)",
      food: "$30–80",
      transport: "$20–50",
      activities: "$100–250 (concerts)",
      total: "$180–500+/day",
    },
    {
      tier: "Day Tripper",
      accommodation: "N/A (based in Riyadh or Jeddah)",
      food: "$20–35",
      transport: "$150 (return flight)",
      activities: "$50–80",
      total: "$230–300 (day trip)",
    },
  ],

  mistakes: [
    {
      icon: "🎟️",
      title: "Not booking Hegra entry in advance",
      desc: "Hegra (Mada'in Salih) requires pre-booked timed entry through experiencealula.com. Walk-ins are not allowed. During the Winter at Tantora festival (Nov–Mar), slots sell out weeks in advance. Book your Hegra timeslot before you book your flight.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🌡️",
      title: "Visiting May–September",
      desc: "AlUla sits in the Arabian desert. May to September temperatures reach 45°C. The sites are mostly exposed sandstone with zero shade. The entire tourism infrastructure shuts down for summer. AlUla is strictly an October–April destination. The sweet spot is November–March for the festival season.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "📸",
      title: "Missing the best light at Hegra",
      desc: "The Nabataean tombs are carved into east-facing cliffs. Morning light (sunrise to 9am) hits the tomb facades directly and turns them golden-red. By 11am they're in shadow. The first morning slot at Hegra is the only slot that matters for photography.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "👗",
      title: "Packing wrong clothing",
      desc: "While Saudi dress codes have relaxed significantly for tourists since 2019, AlUla is a deeply conservative rural region outside of resort bubbles. Women should cover shoulders and knees when visiting sites. A light scarf is useful for both modesty and dust. Men should avoid sleeveless shirts at archaeological sites.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "📱",
      title: "Not downloading the Experience AlUla app",
      desc: "The official Experience AlUla app has GPS-guided tours, site maps, Hegra tomb information with 3D renders, and festival schedules. AlUla's site signage is still basic (a work in progress). The app is the difference between understanding what you're seeing and just staring at a rock.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🌟",
      title: "AlUla is the most under-visited UNESCO site in the world",
      desc: "Hegra (Mada'in Salih) has been a UNESCO World Heritage Site since 2008 but received almost no tourists until Saudi Arabia opened for tourism in 2019. While Petra (Jordan) gets 1.5 million visitors per year, Hegra — its archaeological equal — gets fewer than 100,000. You may have entire tomb clusters to yourself.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🎶",
      title: "Time your visit for Winter at Tantora (Nov–Mar)",
      desc: "The Winter at Tantora festival transforms AlUla into a cultural powerhouse: classical concerts at Hegra, jazz in the Old Town, traditional Hejazi food markets, camel races, and art installations. André Rieu, Lang Lang and Yanni have all performed here. Tickets from $50 to $500+. Worth timing your trip around.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🔭",
      title: "AlUla is a certified Dark Sky Reserve",
      desc: "The absence of industrial light pollution and AlUla's clear desert air makes its night sky extraordinary. On a new moon night you can see the Milky Way core clearly. Both Habitas AlUla and Banyan Tree offer astro-tourism experiences. Even without a guide, step outside your accommodation at midnight.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🎟️",
      title: "GetYourGuide has the best-rated AlUla tours",
      desc: "Book Hegra sunrise tours, hot air balloon experiences and Old Town walking tours through GetYourGuide for verified reviews and fixed pricing. AlUla's independent tour scene is still maturing — vetted operators make a big difference to experience quality.",
      color: "border-blue-200 bg-blue-50",
    },
  ],

  faqs: [
    {
      q: "Is AlUla worth visiting in 2026?",
      a: "Yes — AlUla in 2026 is at the ideal stage of development. Infrastructure is in place (good hotels, airport, paved roads to all sites) but crowds are still minimal. Hegra is accessible and well-managed but you're unlikely to queue. In 5 years it may be far more touristed. Visit now.",
    },
    {
      q: "How do I get to AlUla?",
      a: "AlUla has its own airport (ULH) with direct flights from Riyadh (1 hr), Jeddah (1.5 hrs) and Medina (1 hr) on Saudia, flynas and flyadeal. International visitors typically fly Riyadh or Jeddah first, then connect. There is no international flight into ULH yet, though this is expected to change. Driving from Medina takes about 4–5 hours through dramatic desert scenery.",
    },
    {
      q: "Is AlUla safe?",
      a: "AlUla is extremely safe for tourists. Saudi Arabia's tourist regions are heavily policed and crime against tourists is essentially unheard of. Solo female travellers are welcome — guardianship laws were abolished in 2019. The region is conservative; follow dress guidelines and you will have zero issues.",
    },
    {
      q: "Is AlUla similar to Petra in Jordan?",
      a: "Yes and no. Both were built by the Nabataean civilisation and both feature rock-cut tombs in rose-red sandstone. AlUla (Hegra) is actually thought to be the first Nabataean city; Petra came slightly later. Hegra feels more remote and raw than Petra — fewer tourists, less infrastructure, more of a frontier feeling. If you've done Petra, AlUla will still blow your mind. If you haven't done either, do both.",
    },
  ],

  combineWith: ["Jordan", "Dubai", "Oman"],
  relatedSlugs: ["petra-jordan-3-days", "dubai-4-days", "oman-5-days"],
  galleryQuery: "alula hegra nabataean tombs elephant rock saudi desert landscape",
};

export const metadata: Metadata = {
  title: "AlUla in 3 Days: Complete Travel Guide to Hegra & Beyond (2026)",
  description:
    "The complete AlUla 3-day itinerary — Hegra Nabataean tombs, Elephant Rock, Old Town AlUla, Maraya Concert Hall, Winter at Tantora festival. Budget $120 to luxury $500/day. Saudi e-Visa guide included.",
  keywords: [
    "AlUla travel guide",
    "Hegra Mada'in Salih",
    "AlUla itinerary",
    "Saudi Arabia tourism",
    "Nabataean tombs",
    "Elephant Rock AlUla",
    "Winter at Tantora festival",
    "AlUla visa Indian passport",
    "Saudi Arabia 3 days",
    "Middle East travel 2026",
  ],
  openGraph: {
    title: "AlUla in 3 Days: Saudi Arabia's Secret Ancient Wonder (2026)",
    description:
      "111 Nabataean rock-cut tombs, rose-red sandstone formations and a night sky so dense with stars it looks rendered. AlUla from $120/day.",
    url: "https://incredibleitinerary.com/blog/alula-3-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/alula-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "AlUla Hegra Nabataean rock-cut tombs in desert Saudi Arabia ancient ruins",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlUla in 3 Days — Saudi Arabia's Hidden UNESCO Wonder",
    description: "Petra's lesser-known sibling, carved by the same civilisation, visited by a fraction of the crowd.",
    images: ["https://incredibleitinerary.com/og/alula-3-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/alula-3-days",
  },
};

export default function AlulaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AlUla in 3 Days: Complete Travel Guide to Hegra & Beyond (2026)",
      description:
        "Complete 3-day AlUla itinerary: Hegra UNESCO tombs, Elephant Rock, Dadan, Jabal Ikmah and Maraya Concert Hall for every budget.",
      image: "https://incredibleitinerary.com/og/alula-3-days.jpg",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/alula-3-days",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "AlUla 3 Days",
          item: "https://incredibleitinerary.com/blog/alula-3-days",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: "AlUla",
      description:
        "Ancient oasis city in northwestern Saudi Arabia featuring Hegra — the Nabataean UNESCO World Heritage Site with 111 rock-cut tombs.",
      url: "https://incredibleitinerary.com/blog/alula-3-days",
      touristType: ["History lovers", "Archaeology enthusiasts", "Luxury travellers", "Adventure seekers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.6143,
        longitude: 37.9222,
      },
      hasMap: "https://maps.google.com/?q=AlUla,Saudi+Arabia",
      containedInPlace: {
        "@type": "Place",
        name: "Saudi Arabia",
      },
    },
  ];

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
