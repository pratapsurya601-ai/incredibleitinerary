import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Belgrade in 3 Days: The Complete Guide (Budget to Luxury, 2026)",
    "description":
      "Plan the perfect 3 days in Belgrade, Serbia — from Kalemegdan Fortress and Skadarlija to the legendary splavovi river-boat nightlife and a day trip to Novi Sad. Budget from €35/day.",
    "author": { "@type": "Organization", "name": "IncredibleItinerary" },
    "publisher": {
      "@type": "Organization",
      "name": "IncredibleItinerary",
      "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
    },
    "datePublished": "2026-01-20",
    "dateModified": "2026-04-05",
    "image": "https://incredibleitinerary.com/images/belgrade-kalemegdan-fortress-danube.jpg",
    "mainEntityOfPage": "https://incredibleitinerary.com/blog/belgrade-3-days",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Belgrade 3 Days", "item": "https://incredibleitinerary.com/blog/belgrade-3-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Belgrade",
    "description": "Europe's most underrated capital — 7,000 years of history, a fortress rebuilt 38 times, legendary river-boat nightlife, and extraordinary warmth of hospitality.",
    "geo": { "@type": "GeoCoordinates", "latitude": 44.8176, "longitude": 20.4569 },
    "touristType": ["Party traveller", "History enthusiast", "Budget traveller", "Food lover"],
    "url": "https://incredibleitinerary.com/blog/belgrade-3-days",
  },
];

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Belgrade 3-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Belgrade trip in 3 days. The ultimate Belgrade 3-day itinerary — Kalemegdan Fortress, Skadarlija bohemian quarter, St Sava Temple, splavovi.",
  keywords: [
    "Belgrade itinerary 3 days",
    "Belgrade travel guide 2026",
    "Belgrade budget travel",
    "Kalemegdan Fortress",
    "Belgrade nightlife splavovi",
    "Novi Sad day trip",
    "Serbia travel guide",
    "Belgrade things to do",
    "Skadarlija bohemian quarter",
    "Balkans travel",
  ],
  openGraph: {
    title: "Belgrade 3-Day Itinerary 2026: Trip Planner",
    description:
      "A fortress rebuilt 38 times, river-boat clubs that don't open until 1am, and rakija before hello — Belgrade is Europe's most underrated and most alive capital.",
    url: "https://incredibleitinerary.com/blog/belgrade-3-days",
    siteName: "IncredibleItinerary",
    type: "article",
    images: [
      {
        url: "https://incredibleitinerary.com/images/belgrade-kalemegdan-fortress-danube.jpg",
        width: 1200,
        height: 630,
        alt: "Belgrade Serbia Kalemegdan Fortress overlooking confluence of Danube and Sava rivers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belgrade 3-Day Itinerary 2026: Trip Planner",
    description:
      "Kalemegdan, splavovi nightlife, Tesla Museum, bohemian Skadarlija, and a day trip to Novi Sad — Europe's most underrated capital from €35/day.",
  },
  alternates: { canonical: "https://incredibleitinerary.com/blog/belgrade-3-days" },
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Belgrade",
  country: "Serbia",
  countryFlag: "🇷🇸",
  slug: "belgrade-3-days",
  heroQuery: "belgrade serbia kalemegdan fortress danube sava nightlife",
  heroAlt: "Belgrade Serbia Kalemegdan Fortress overlooking confluence of Danube and Sava rivers",
  category: "Europe",
  date: "January 20, 2026",
  readTime: "13 min read",

  intro:
    "A city built on the confluence of two great rivers with a fortress that has been destroyed and rebuilt 38 times across 7,000 years of continuous human settlement, a nightlife scene so legendary that European clubbers fly in specifically for it — the splavovi, river-boat clubs that don't open until 1am and keep going through sunrise — rakija (fruit brandy) that Serbs pour for guests before saying hello, and a warmth of hospitality that has survived every empire, occupation, and historical trauma imaginable. This is Belgrade, Europe's most underrated capital, and once you visit, you will understand why people keep coming back.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€35",
    bestMonths: "May–Sep",
    airport: "BEG (Nikola Tesla)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "nightlife", emoji: "🎶", label: "Nightlife & Splavovi Guide" },
    { id: "food", emoji: "🍖", label: "Serbian Food Guide" },
    { id: "daytrips", emoji: "🚂", label: "Day Trips from Belgrade" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required", "Yes — apply at Serbian Embassy or consulate"],
        ["Fee", "~€35 (approx. — check current embassy rates)"],
        ["Processing", "10–15 working days — apply well in advance"],
        ["Documents", "Application form, passport photos, hotel bookings, return flights, bank statements"],
        ["Duration", "Usually single-entry, up to 30 days (can vary)"],
        ["Note", "Serbia is NOT in Schengen — Serbian visa is separate from any EU/Schengen visa"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "Visa-free for most major Western passports"],
        ["Stay", "Up to 90 days within 180-day period"],
        ["No ETIAS", "Serbia is not in Schengen — ETIAS does not apply here"],
        ["Passport", "Valid for duration of stay"],
        ["Registration", "Hotels register you automatically; if staying with locals, they must register you at the police station within 24 hours"],
        ["Tip", "Days in Serbia do NOT count against Schengen 90/180 allowance — great for longer Balkans trips"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€35/day",
      days: [
        {
          day: "Day 1",
          title: "Kalemegdan, Knez Mihailova & Skadarlija",
          items: [
            "Morning: Kalemegdan Fortress — free entry to the park and outer fortifications; the Belgrade Victor statue at the confluence of Sava and Danube is the city's most iconic image",
            "Military Museum inside the fortress (€2) — 2,000 years of Belgrade's military history, excellent",
            "Walk Knez Mihailova Street — Belgrade's pedestrian boulevard; free, lined with cafés and street musicians",
            "Budget lunch: pljeskavica (Serbian mega-burger) at Pljeskavičarnica Dorćol or Rakia Bar side menu — full meal under €5",
            "Afternoon: Skadarlija bohemian quarter — cobblestone street lined with old kafanas (traditional tavernas) where Serbian poets and artists drank for 200 years",
            "Evening: Karaburma or Dorćol neighbourhood for cheapest local bars — craft beer or rakija for €1.50–2.50",
          ],
          cost: "€25–35 (hostel €12, meals €10, museum €2, drinks €5)",
        },
        {
          day: "Day 2",
          title: "St Sava Temple + Ada Ciganlija + Tesla Museum",
          items: [
            "Morning: St Sava Temple — the largest Orthodox church in the Balkans, under construction for 100+ years, and finally completing its mosaic interior; free entry, stunning golden domes",
            "Walk through Vračar neighbourhood — tree-lined residential streets, great for people-watching and a morning coffee (€1.50)",
            "Budget lunch: sarma (stuffed cabbage), gibanica (cheese pie), or grilled meats at a kafana in Vračar — full lunch €5–7",
            "Afternoon: Ada Ciganlija river island — take tram or bus, free beach on the Sava river loop; locals swim here May–September",
            "Tesla Museum (€5) — small but excellent; Tesla's actual urn is here, alongside working demonstrations of his inventions",
            "Evening: Street food in Savamala arts district — burgers, ćevapi, and craft beer stalls; the area comes alive at night",
          ],
          cost: "€30–40 (transport €3, meals €12, museums €5, drinks €8)",
        },
        {
          day: "Day 3",
          title: "Zemun Village + Splavovi Nightlife",
          items: [
            "Morning: Zemun — the former Austro-Hungarian town within Belgrade, different architectural character, Gardoš Tower for river views (free)",
            "Zemun fish market and walk along the Danube embankment — the Venetian-influenced clock tower and narrow lanes are charming",
            "Budget lunch: fresh Danube fish at a riverside konoba in Zemun — carp or pike-perch, full meal €8–10",
            "Afternoon rest — essential if you plan splavovi; nightlife doesn't start until midnight",
            "Evening: National Museum on Republic Square (€4) for the national art and archaeology collection",
            "Late night: Splavovi (river-boat clubs) along the Sava — Freestyler, Lasta, Club 20/44 (cover €5–10); music from turbo-folk to techno; don't arrive before 01:00",
          ],
          cost: "€35–45 (transport €5, meals €15, museum €4, nightlife cover + drinks €20)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€75/day",
      days: [
        {
          day: "Day 1",
          title: "Fortress, Bohemian Quarter & Kafana Dinner",
          items: [
            "Morning: Guided walking tour of Kalemegdan Fortress with a local historian (€15–20) — 2,500 years of history from Celtic, Roman, Byzantine, Ottoman, and Habsburg eras",
            "Belgrade City Museum (€2) and Gallery of Frescoes (€2) near the fortress — excellent and uncrowded",
            "Lunch: Restaurant Question Mark (? Kafana) — the oldest kafana in Belgrade (1823), traditional Serbian food, iconic atmosphere, mains €10–15",
            "Afternoon: Knez Mihailova to Republic Square; National Museum (€4) — recently renovated, world-class collection",
            "Skadarlija in the golden afternoon light — book ahead at Tri Šešira (Three Hats) or Dva Jelena (Two Deer) for dinner with live Serbian music (€25–35)",
            "After dinner: Savamala arts district for cocktails — Club Ben Akiba or 20/44 for late drinks (€8–12 per drink)",
          ],
          cost: "€70–85 (accommodation €35, meals €45, tour €18, museums €8)",
        },
        {
          day: "Day 2",
          title: "St Sava, Tesla & Ada Ciganlija",
          items: [
            "Morning: St Sava Temple early — arrive at 09:00 before tour groups; the scale is overwhelming, the interior almost complete",
            "Coffee in Vračar at Kafeterija or a local specialty café (€2–3)",
            "Tesla Museum (€5) with the English-language guided tour option — demonstrations of the Tesla coil are theatrical and worth paying for",
            "Lunch: Modern Serbian restaurant in Vračar — Langoš or an upscale kafana for slow-cooked lamb and traditional spreads (€20–25)",
            "Afternoon: Ada Ciganlija by taxi or tram — rent a bicycle on the island (€5/hour) and cycle the river perimeter",
            "Evening: Savamala district — Mikser House or Dvorište (courtyard bars); Belgrade's creative scene for cocktails before dinner (€8–12)",
          ],
          cost: "€75–90 (accommodation €35, meals €45, Tesla €5, transport €15)",
        },
        {
          day: "Day 3",
          title: "Zemun + Splavovi Experience",
          items: [
            "Morning: Zemun — private walking tour or self-guided; climb Gardoš Tower for panoramic views, the Danube embankment for photos",
            "Zemun market for fresh produce, cheese, and the famous ajvar (roasted pepper spread) to take home",
            "Lunch at a riverside fish restaurant in Zemun — fresh Danube river fish, Zemun is famous for this (€20–25)",
            "Afternoon: Nikola Tesla Museum deeper visit; Ethnographic Museum (€2) for Serbian folk culture and traditional crafts",
            "Pre-midnight: Drinks at a rooftop bar in the city centre — Mezé, Brankow Rooftop, or Sky Bar for Kalemegdan views (€8–12)",
            "Midnight+: Splavovi — go in a group; the doormen at the best boats (Freestyler, Club 20/44) are selective; dress well and avoid large male-only groups",
          ],
          cost: "€75–95 (transport €15, meals €45, museums €7, nightlife €30)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€180/day",
      days: [
        {
          day: "Day 1",
          title: "Private History Tour & Fine Dining Kafana",
          items: [
            "Check into Square Nine Hotel or Mama Shelter Belgrade (€120–200/night) — both in the centre, excellent design",
            "Private archaeologist-led tour of Kalemegdan Fortress — including access to normally closed Roman and Byzantine sections (€80–120 for 3 hours)",
            "Lunch at Salon 1905 in the National Bank building — Belgrade's most elegant restaurant in a preserved 1905 Beaux-Arts interior (€50–70)",
            "Afternoon: Private guide for Knez Mihailova, the bohemian history of Skadarlija, and the story of Belgrade under Ottoman and Austro-Hungarian rule",
            "Evening: Dinner at Salon restaurant or Ambar — modern Serbian cuisine, curated rakija flights, mains €30–50 per person",
            "After dinner: Private reservation at a Savamala rooftop bar for sunset and cocktails (€15–20 per cocktail)",
          ],
          cost: "€180–240 (hotel €160, private tour €100, meals €110)",
        },
        {
          day: "Day 2",
          title: "St Sava, Tesla & River Spa",
          items: [
            "Morning: Private access tour of St Sava Temple with the architect or project manager — the ongoing gold mosaic installation is one of the great ongoing art projects in Europe",
            "Private Tesla Museum tour (€20 arranged with museum) with exclusive access to the archive and Tesla's personal urn",
            "Lunch: Chef's table at Salon 1905 or a private dining room at a top-rated Serbian restaurant (€60–80)",
            "Afternoon: Luxury spa at the Metropol Palace Hotel or Radisson Collection (€80–120 for half-day); pool and treatments",
            "River cruise on the Danube/Sava confluence at sunset — private boat charter (€80–150 for 2 hours)",
            "Late dinner: ? Kafana (Question Mark) private table in the historic dining room — traditional Serbian feast with live accordion (€40–60 per person)",
          ],
          cost: "€185–250 (hotel €160, private tours €120, meals €100, river cruise €100, spa €80)",
        },
        {
          day: "Day 3",
          title: "Novi Sad Day Trip & VIP Nightlife",
          items: [
            "Private car to Novi Sad (€60–80 round trip) — 90 minutes, capital of Vojvodina, home of the EXIT music festival",
            "Novi Sad Petrovaradin Fortress — larger than Kalemegdan, built by the Habsburgs over 88 years, views over the Danube are extraordinary",
            "Novi Sad old town: Bishop's Palace, Name of Mary Church, pedestrian zone; lunch at a riverside restaurant in Novi Sad (€25–35)",
            "Return Belgrade late afternoon; early evening rest at hotel",
            "Sunset rakija tasting experience — private sommelier-guided tour of Serbian fruit brandies at a specialist bar (€40–60 per person)",
            "Late night: VIP table at Freestyler or Arsenal splavova — reserved table, bottle service, the best river-boat nightlife experience in Europe (€150–300 for table, widely split)",
          ],
          cost: "€185–260 (car €70, Novi Sad meals €35, rakija tasting €50, VIP table €150)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "Hostel dorm €10–15",
      food: "Pljeskavica, kafana dishes €8–12",
      transport: "Tram + walking €3–5",
      activities: "Free sights + Tesla €5",
      total: "~€35/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "3-star hotel €40–60",
      food: "Local restaurants + kafanas €25–35",
      transport: "Taxis + tram €15",
      activities: "Museums + guided tour €20",
      total: "~€75/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "Square Nine / Metropol €150–200",
      food: "Fine dining €70–90",
      transport: "Private car €40",
      activities: "Private tours + spa €100",
      total: "~€180/day",
    },
    {
      tier: "🎶 Nightlife Night",
      accommodation: "No change",
      food: "Late dinner beforehand €20",
      transport: "Taxi to/from splavovi €10",
      activities: "Cover + 3 drinks €25–50",
      total: "+€55–80 total",
    },
    {
      tier: "🚂 Novi Sad Day Trip",
      accommodation: "No change",
      food: "Lunch in Novi Sad €15–25",
      transport: "Bus €6 or car €70",
      activities: "Petrovaradin Fortress free",
      total: "+€25–100 total",
    },
  ],

  mistakes: [
    {
      icon: "🌙",
      title: "Expecting Belgrade nightlife to start before midnight",
      desc: "Belgrade nightlife operates on its own timezone. Restaurants fill from 21:00, bars from 22:00, but the splavovi (river-boat clubs) and the legendary clubs (Drugstore, 20/44) don't really start until 01:00–02:00 and go until 08:00–10:00 the next morning. If you arrive at a splav at 23:00, you will be alone. Nap first, go late.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "💱",
      title: "Not having Serbian Dinars (RSD)",
      desc: "Serbia uses the Serbian Dinar (RSD) — not euros, not Croatian Kuna, not anything else. Many restaurants and bars accept card, but markets, local kafanas, taxis, tram tickets, and small stalls are cash-only. Withdraw dinars from ATMs (use bank-branded ATMs to avoid high exchange fees). €1 ≈ 117 RSD approximately.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🍻",
      title: "Underestimating Serbian hospitality",
      desc: "If a Serbian invites you for rakija, you do not decline. This is not a courtesy offer — it is a genuine expression of welcome. The same applies to food: refusing food in someone's home is considered insulting. If you're a guest at any event or private home, eat and drink what you're offered with enthusiasm and gratitude. Reciprocate with 'živeli!' (cheers).",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🗺️",
      title: "Skipping Zemun because it's 'not the centre'",
      desc: "Zemun, the former Austro-Hungarian town now absorbed into greater Belgrade, is architecturally and atmospherically completely different from Belgrade's centre. The Gardoš Tower, the Danube embankment, the fish restaurants, and the quieter streets offer a completely different perspective on the city. It is 20 minutes from Republic Square by tram.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🏛️",
      title: "Confusing St Sava Temple with a finished building",
      desc: "The Temple of Saint Sava has been under construction since 1935 — its exterior is complete but its vast interior mosaic programme is still being installed. It is fully open to visitors and the partially complete mosaics (the largest in the world when finished) are spectacular. Don't skip it thinking it's a building site. It is one of the most extraordinary religious interiors in Europe.",
      color: "border-green-200 bg-green-50",
    },
  ],

  tips: [
    {
      icon: "🥂",
      title: "The best rakija is home-made — ask your host",
      desc: "Supermarket rakija (šljivovica — plum brandy) is fine, but the best rakija in Serbia is home-distilled by families from their own orchards — smoother, more complex, and 40–60% ABV. Many Airbnb hosts, hostel owners, and restaurant owners will have a bottle of their family's rakija. Ask. They will be delighted. This is a genuine cultural connection, not a tourist experience.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🏰",
      title: "Kalemegdan at sunrise is completely different from afternoon",
      desc: "Kalemegdan Fortress park is free and open 24 hours. At sunrise on a clear morning, the mist rises off the Danube-Sava confluence and the light on the Victor statue is extraordinary. You will have it almost entirely to yourself. By 11:00 it's busy with joggers, tourists, and chess players (the outdoor chess tables are a Belgrade institution).",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🎵",
      title: "Understand turbo-folk before dismissing it",
      desc: "Turbo-folk — a blend of Serbian folk music with electronic beats — is the soundtrack of Belgrade nightlife and is genuinely controversial in intellectual circles. But experiencing it on a splav at 03:00 with 500 Belgradians is a cultural immersion unlike anything else in Europe. Don't decide you hate it until you've heard it at full volume on a river boat.",
      color: "border-pink-200 bg-pink-50",
    },
    {
      icon: "🌭",
      title: "The pljeskavica is not just a burger",
      desc: "The pljeskavica (roughly plee-YES-ka-veet-za) is a Serbian grilled meat patty — often 300–400g of mixed pork, beef, and lamb, served in a thick lepinja flatbread with kajmak (clotted cream cheese), ajvar (roasted pepper spread), and onion. It is cheap (€3–5), extraordinary, and available at dedicated pljeskavičarnica shops from 11:00 until 02:00. It is the most important food in Serbia.",
      color: "border-red-200 bg-red-50",
    },
  ],

  faqs: [
    {
      q: "Is Belgrade safe for tourists in 2026?",
      a: "Belgrade is generally safe for tourists. The city centre, Kalemegdan, and tourist areas are well-patrolled and incidents targeting visitors are rare. The main risks are pickpocketing in crowded areas (Republic Square, Skadarlija) and the usual urban caution at night near clubs. Belgrade nightlife can be rowdy but violence toward tourists is very rare. Women travelling solo report feeling safe in the city, though standard precautions apply late at night.",
    },
    {
      q: "Is Belgrade a good destination for nightlife?",
      a: "Belgrade is regularly cited as one of the top five nightlife cities in the world. The splavovi (river-boat clubs moored on the Sava and Danube) are unique to Belgrade — floating venues with multiple floors, open from midnight to 10am, with music ranging from turbo-folk to techno. Freestyler, Lasta, and Club 20/44 are the most famous. The Savamala arts district offers a hipper, more international scene. The nightlife is genuinely legendary and worth experiencing even if clubbing is not usually your thing.",
    },
    {
      q: "What is the best time to visit Belgrade?",
      a: "May–September is the prime season — warm to hot weather, outdoor kafana terraces in full swing, splavovi at peak operation, and Ada Ciganlija beach busy. July–August are the hottest months (30–38°C) and the city is at maximum energy. Spring (April–May) and autumn (September–October) offer pleasant temperatures and fewer crowds. Belgrade in winter (November–February) is cold and grey but has a cosy kafana culture that compensates.",
    },
    {
      q: "How do I get from Belgrade to Novi Sad?",
      a: "Novi Sad is 90 minutes from Belgrade by bus (from BAS Bus Station, departures every 30 minutes, €4–6 each way) or train (€3–5, similar duration). A private taxi costs €40–60 each way. Novi Sad's highlights are Petrovaradin Fortress, the old town, and the EXIT music festival (held in July). It is easily done as a half-day from Belgrade — leave at 09:00, return by 17:00.",
    },
  ],

  combineWith: ["sarajevo-3-days", "novi-sad-day-trip", "sofia-3-days", "budapest-3-days"],
  relatedSlugs: ["sarajevo-3-days", "budapest-3-days", "zagreb-3-days", "sofia-3-days"],

  galleryQuery: "belgrade serbia kalemegdan fortress sava danube skadarlija nightlife splavovi",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function BelgradePage() {
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
