import type { Metadata } from "next";
import UniversalBlogClient from "@/components/blog/UniversalBlogClient";
import type { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Uzbekistan 7-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Uzbekistan trip in 7 days. Plan the perfect 7-day Uzbekistan itinerary — Samarkand's Registan, Bukhara's madrasas, Khiva's walled city, and.",
  keywords: [
    "Uzbekistan travel guide",
    "Uzbekistan 7 days itinerary",
    "Samarkand Registan travel",
    "Bukhara travel guide",
    "Khiva Ichan Qala",
    "Silk Road Uzbekistan 2026",
    "Uzbekistan budget travel",
    "Tashkent travel guide",
  ],
  openGraph: {
    title: "Uzbekistan 7-Day Itinerary 2026: Trip Planner",
    description:
      "Three cities straight from One Thousand and One Nights: Samarkand's Registan, Bukhara's living madrasas, and Khiva's perfectly preserved walled city on the ancient Silk Road.",
    url: "https://incredibleitinerary.com/blog/uzbekistan-7-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1547489432-cf93fa6c71a2?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Samarkand Uzbekistan Registan square blue tiled domes Silk Road ancient",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzbekistan 7-Day Itinerary 2026: Trip Planner",
    description:
      "Day-by-day Uzbekistan itinerary — Samarkand, Bukhara, Khiva, Tashkent. Budget from $50/day.",
    images: ["https://images.unsplash.com/photo-1547489432-cf93fa6c71a2?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/uzbekistan-7-days",
  },
};

/* ── JSON-LD Structured Data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Uzbekistan in 7 Days: The Complete Silk Road Travel Guide (Budget to Luxury, 2026)",
      description:
        "Complete 7-day Uzbekistan travel guide covering Samarkand, Bukhara, Khiva, and Tashkent on the ancient Silk Road across all budgets.",
      image: "https://images.unsplash.com/photo-1547489432-cf93fa6c71a2?w=1200&q=80",
      datePublished: "2026-01-25",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/uzbekistan-7-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Uzbekistan 7 Days",
          item: "https://incredibleitinerary.com/blog/uzbekistan-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Uzbekistan",
      description:
        "Home to three of the Silk Road's greatest cities — Samarkand, Bukhara, and Khiva — with the Registan, Bibi-Khanym Mosque, and the world's most intact medieval walled city at Khiva's Ichan Qala.",
      url: "https://incredibleitinerary.com/blog/uzbekistan-7-days",
      touristType: [
        "History Enthusiasts",
        "Architecture Lovers",
        "Silk Road Travellers",
        "Adventure Seekers",
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.2995,
        longitude: 69.2401,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Uzbekistan",
      },
    },
  ],
};

/* ── Page Data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Uzbekistan",
  country: "Uzbekistan",
  countryFlag: "🇺🇿",
  slug: "uzbekistan-7-days",
  heroQuery: "uzbekistan samarkand registan blue domes silk road ancient",
  heroAlt: "Samarkand Uzbekistan Registan square blue tiled domes Silk Road ancient",
  category: "Central Asia",
  date: "January 25, 2026",
  readTime: "16 min read",

  intro:
    "Three cities straight from One Thousand and One Nights: Samarkand, where Timur (Tamerlane) built the most beautiful mosque in the world using architects enslaved from Delhi — Bukhara, where the medieval madrasas and caravanserais are still functioning — and Khiva's walled inner city (Ichan Qala) so perfectly preserved it has been called an open-air museum. This is Uzbekistan: the Silk Road in the flesh.",

  stats: {
    duration: "7 Days",
    budgetFrom: "$50",
    bestMonths: "Apr–May or Sep–Oct",
    airport: "TAS (Tashkent International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "7-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🕌", label: "Top Highlights" },
    { id: "getting-there", emoji: "✈️", label: "Getting There" },
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
        ["Visa Type", "e-Visa available for Indian passport holders"],
        ["Fee", "$20 USD"],
        ["Validity", "30 days single entry"],
        ["Apply At", "e-visa.uz (official government portal)"],
        ["Processing", "3–5 business days"],
        ["Documents", "Passport scan, photo, hotel booking — very straightforward"],
        ["Note", "One of the easiest e-Visas in Central Asia; no embassy visit required"],
      ],
    },
    {
      flag: "🇺🇸",
      title: "Western Passport Holders (US/UK/EU/AU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["US Citizens", "Visa-free entry up to 30 days"],
        ["EU Citizens", "Visa-free entry up to 30 days"],
        ["UK Citizens", "Visa-free entry up to 30 days"],
        ["AU/CA", "e-Visa available at e-visa.uz — $20, very easy"],
        ["Registration", "Hotels register you automatically — keep your hotel receipts"],
        ["Currency", "Uzbekistani Som (UZS) — US dollars widely accepted"],
        ["Note", "Uzbekistan has dramatically liberalised visa policy since 2017"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "$50/day",
      days: [
        {
          day: "Day 1",
          title: "Tashkent Arrival & Soviet Monuments",
          items: [
            "Arrive TAS — metro from airport to city centre: ~$0.20 (the cheapest metro in the world)",
            "Check into a guesthouse or budget hotel in Tashkent old city (~$15–20/night)",
            "Tashkent Metro Art Tour — the Soviet-era underground stations are extraordinary mosaic artworks, free with metro pass",
            "Chorsu Bazaar — the great covered Central Asian bazaar, blue-tiled dome exterior, labyrinthine interior of spices, dried fruits, fabrics, and fresh plov — free to wander",
            "Hazrat Imam (Khast Imam) Mosque complex — free entry, see the world's oldest Quran (one of the oldest surviving complete Qurans, attributed to Caliph Uthman)",
            "Dinner: plov (the national dish — rice with lamb, carrots, onions, spices) at a local teahouse — $3–4",
          ],
          cost: "$40–50 including accommodation, food, metro",
        },
        {
          day: "Day 2",
          title: "Tashkent to Samarkand on the Afrosiyob Train",
          items: [
            "Afrosiyob high-speed train Tashkent → Samarkand — 2 hours, $10–20 economy class (book at uzrailpass.uz)",
            "Check into a guesthouse near Registan square ($15–20/night)",
            "Afternoon: Registan Square — three madrasas around a central square, the greatest architectural ensemble on the Silk Road — $5 entry",
            "Bibi-Khanym Mosque — Timur's great Friday mosque, built 1399–1404, once the largest mosque in the world — $2 entry",
            "Shah-i-Zinda necropolis — the 'Avenue of the Dead', 11th–15th century mausoleums in vivid blue tile — $3 entry",
            "Dinner: lagman noodles (hand-pulled noodles with lamb and vegetables) at a chaikhana (teahouse) — $3",
          ],
          cost: "$45–55 including train, accommodation, 3 main sights, meals",
        },
        {
          day: "Day 3",
          title: "Samarkand Deep Dive — Timur's Legacy",
          items: [
            "Gur-e-Amir mausoleum — Tamerlane's tomb, brilliant azure-ribbed dome, where the conqueror of half the known world rests — $3 entry",
            "Afrasiab Museum — the archaeological museum of ancient Samarkand (pre-Islamic), extraordinary 7th-century Sogdian frescoes — $3",
            "Ulugh Beg Observatory ruins — Timur's grandson Ulugh Beg was a medieval astronomer who calculated the solar year to 365.25 days in the 15th century — $3",
            "Siab Bazaar (Central Market) — the real local market where residents shop, taste local fruits (Samarkand melons are legendary) — free",
            "Registan at sunset and evening — the square is lit at night, magical atmosphere — included in daytime ticket",
            "Dinner: shashlik (kebabs) and non (bread) at a Registan-area restaurant — $5",
          ],
          cost: "$30–40 including all sights, meals",
        },
        {
          day: "Day 4",
          title: "Samarkand to Bukhara by Train",
          items: [
            "Morning train Samarkand → Bukhara — 1.5 hours, $8–12",
            "Check into a guesthouse in Bukhara old city ($15–20/night)",
            "Lyab-i-Hauz square — the medieval pool (hauz) surrounded by mulberry trees and madrasas, the social heart of old Bukhara — free",
            "Kalon Minaret — the 47m minaret that Genghis Khan reportedly ordered spared after he was struck by its beauty (the only structure in Bukhara he did not destroy) — free to admire, Kalon Mosque €2 entry",
            "Ark Fortress — the ancient citadel of Bukhara's emirs — $3 entry",
            "Bukhara old city evening walk — the most intact medieval Central Asian city, extraordinarily atmospheric after sunset",
            "Dinner: samsa pastries (baked meat-filled pastry) from a tandoor bakery — $1 each",
          ],
          cost: "$40–50 including train, accommodation, sights, meals",
        },
        {
          day: "Day 5",
          title: "Bukhara — Madrasas, Bazaars & Silk",
          items: [
            "Chor Minor ('Four Minarets') — the quirky 1807 madrasah with four distinct corner minarets, photogenic and uncrowded — $2",
            "Trading domes (Tim Abdullah Khan, Toki-Sarrafon) — medieval merchant domes still functioning as craft bazaars, silk fabrics, ceramics and ikat tapestries — free to wander",
            "Bolo-Hauz Mosque — the Friday mosque with 20 ornately carved wooden pillars reflected in the pool — free",
            "Sitorai Mokhi-Khosa (Summer Palace of the Last Emir) — 20km outside Bukhara, extraordinary fusion of Russian and Uzbek architecture — $3 entry",
            "Afternoon: silk weaving workshop visit — watch the traditional ikat (resist-dyed silk) process — free with purchase optional",
            "Dinner: manti dumplings (Central Asian steamed dumplings) and green tea — $4",
          ],
          cost: "$30–40 including all sights, transport to Summer Palace, meals",
        },
        {
          day: "Day 6",
          title: "Bukhara to Khiva by Night Train or Bus",
          items: [
            "Overnight train Bukhara → Khiva (Urgench station) — depart around 10pm, arrive 6am — $8–15 kupé (second class compartment)",
            "Alternative: morning bus ~5 hours — $5–8",
            "Arrive Khiva — take a taxi from Urgench to Khiva's Ichan Qala (old city) — $3",
            "Check into a guesthouse inside the walled city ($15–25/night) — staying inside the walls is the experience",
            "Afternoon rest and acclimatise — wander the inner city's earthen lanes freely",
            "Sunset from the Islam Khoja Minaret (the tallest in Khiva, built 1910) — $3, climb for rooftop views",
            "Dinner inside the old city: plov and non bread at a local restaurant — $4",
          ],
          cost: "$35–45 including overnight train/bus, accommodation, evening sights",
        },
        {
          day: "Day 7",
          title: "Khiva — The Most Intact Silk Road City",
          items: [
            "Full day in Ichan Qala (Khiva's walled inner city) — buy a combined ticket ($5) for multiple monuments",
            "Kalta Minor — the unfinished 'short minaret', begun 1852, massive blue-tiled stump that was meant to be visible from Bukhara — included in combined ticket",
            "Juma Mosque — 213 intricately carved wooden columns inside a forest of ancient timber — included in ticket",
            "Tash-Hauli Palace (harem palace) — the elaborate reception and harem quarters of Khiva's last khan — included",
            "Muhamad Amin Khan Madrasah — now a hotel, the grandest in Khiva's skyline",
            "Camel ride or horse cart inside the walled city — $3–5",
            "Bus or shared taxi to Urgench for flight/train to Tashkent for departure",
          ],
          cost: "$40–50 including combined monument ticket, camel ride, transport to Urgench",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$100/day",
      days: [
        {
          day: "Day 1",
          title: "Tashkent: Art, Metro & Evening Food Tour",
          items: [
            "Private airport transfer to boutique hotel ($40–60/night) in Tashkent old city",
            "Guided Tashkent Metro tour — €25pp with an architecture guide, learn the Cold War history of each station",
            "Chorsu Bazaar with guide — $20pp, understand the spices and dried fruits of the Silk Road trade",
            "State Museum of History of Uzbekistan — $5, Central Asia's best museum of pre-Islamic and Islamic artefacts",
            "Evening Tashkent food tour — $40pp, guide you through plov, shashlik, samsa, and local pomegranate wine",
            "Dinner at a traditional Uzbek restaurant — full set meal with live folk music — $20pp",
          ],
          cost: "$95–115 including hotel, guided tours, food tour, dinner",
        },
        {
          day: "Day 2",
          title: "Tashkent to Samarkand — Afrosiyob Business Class",
          items: [
            "Afrosiyob business class train Tashkent → Samarkand — $30–40, faster and more comfortable with meal included",
            "Check into a boutique hotel near Registan ($50–70/night)",
            "Guided afternoon tour of Registan — $40pp with specialist guide, understanding the three madrasas' architectural differences",
            "Bibi-Khanym Mosque private guided tour — $25pp",
            "Dinner at a Samarkand restaurant specialising in traditional Uzbek cuisine — full Uzbek feast with local Khorazm wine — $25pp",
          ],
          cost: "$100–120 including hotel, business class train, guided tours, dinner",
        },
        {
          day: "Day 3",
          title: "Samarkand — Full Archaeological Day",
          items: [
            "Private car and guide for the day — $60–80",
            "Gur-e-Amir mausoleum with specialist guide — $20pp, learn the story of Tamerlane's conquests from Anatolia to India",
            "Afrasiab Museum with archaeologist guide — $25pp, the 7th-century Sogdian frescoes are astounding",
            "Ulugh Beg Observatory with astronomer context — $15pp",
            "Shah-i-Zinda — the avenue of royal mausoleums, guide explains each tile panel's symbolism — included in private guide package",
            "Sunset Registan photography session",
            "Dinner: tasting menu at a Samarkand boutique restaurant — $35pp",
          ],
          cost: "$100–120 including private car, specialist guide, meals",
        },
        {
          day: "Day 4",
          title: "Samarkand to Bukhara — with a Village Detour",
          items: [
            "Private transfer Samarkand to Bukhara — $70, stopping en route at a traditional pottery village (Gijduvan, famous for blue ceramics)",
            "Gijduvan ceramics workshop visit with master craftsman — $20pp, try throwing clay on a wheel",
            "Arrive Bukhara, check into boutique guesthouse inside old city ($50–65/night)",
            "Guided evening walk of old Bukhara — Lyab-i-Hauz, Kalon Minaret, and the trading domes lit at night — $30pp",
            "Dinner at Lyab-i-Hauz terrace restaurant — plov, stuffed peppers, fresh salads — $20pp",
          ],
          cost: "$100–120 including private transfer, pottery village, hotel, guided walk, dinner",
        },
        {
          day: "Day 5",
          title: "Bukhara Deep Dive — Madrasas & Silk Workshop",
          items: [
            "Full-day private tour of Bukhara's monuments — $60pp with specialist guide",
            "Ark Fortress with guide — the emir's citadel, history of Bukhara from ancient times to the Soviet conquest of 1920",
            "Sitorai Mokhi-Khosa Summer Palace with guide — the extraordinary fusion of Islamic and Russian Imperial architecture",
            "Traditional ikat silk weaving atelier — $25pp demonstration, buy direct from the artisans",
            "Chor Minor for photography",
            "Afternoon: Bukhara carpet workshop — $20pp, learn the difference between hand-knotted and machine-made, the Bukhara knot",
            "Farewell Bukhara dinner: traditional Uzbek banquet at a caravanserai-restaurant — $30pp",
          ],
          cost: "$100–120 including private guide, silk and carpet workshops, banquet",
        },
        {
          day: "Day 6",
          title: "Bukhara to Khiva — Scenic Desert Road",
          items: [
            "Private transfer Bukhara to Khiva — 5–6 hours through the Kyzylkum Desert — $80–100 (the experience of driving through the desert is itself an attraction)",
            "Possible stop at a desert yurt camp for tea — arranged by driver",
            "Check into Khiva boutique hotel inside Ichan Qala ($50–70/night)",
            "Guided introduction to Khiva's walled city in the late afternoon — $30pp",
            "Sunset from Islam Khoja Minaret with guide",
            "Dinner inside the old city — traditional Khorezm plov (slightly different to Samarkand plov, with more spices) — $15pp",
          ],
          cost: "$100–120 including private transfer, hotel, guided intro, dinner",
        },
        {
          day: "Day 7",
          title: "Khiva Full Day & Departure",
          items: [
            "Full-day private guided tour of Ichan Qala — $60pp with specialist in Khorezm history",
            "Kalta Minor, Juma Mosque, Tash-Hauli Palace, Pahlavon Mahmud mausoleum (the saint's tomb, deeply revered)",
            "Mohammad Rahim Khan II Museum — the Khan's palace now a superb museum of court life",
            "Lunch at a rooftop restaurant with old city views — $12pp",
            "Optional: horse or camel excursion to the desert edge outside the walls — $20pp",
            "Private transfer to Urgench airport (30 mins) for Tashkent connecting flight — $25",
            "Tashkent night and final departure or transfer",
          ],
          cost: "$100–120 including specialist guide, meals, desert excursion, transfer",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$240/day",
      days: [
        {
          day: "Day 1",
          title: "Tashkent: Private Art & Architecture Immersion",
          items: [
            "Business class arrival, private VIP transfer to a luxury hotel — Hyatt Regency Tashkent ($150–200/night)",
            "Private Tashkent city tour with art historian — $120pp, metro architecture, Soviet public art, and the transformation of the city post-independence",
            "Private Chorsu Bazaar culinary tour with chef — $80pp, learning Central Asian spice blending and sampling",
            "Hazrat Imam complex with Islamic scholar guide — $60pp, see the Uthman Quran",
            "Fine dining at a Tashkent upscale restaurant — Uzbek-fusion tasting menu with pomegranate and apricot wines — $50pp",
            "Evening: Alisher Navoi Opera Theatre performance (if in season) — $20–50 tickets",
          ],
          cost: "$250–300 including luxury hotel, private guides, fine dining",
        },
        {
          day: "Day 2",
          title: "Afrosiyob First Class to Samarkand",
          items: [
            "Afrosiyob first class or private charter train Tashkent → Samarkand",
            "Check into Grand Samarkand Superior hotel or Silk Road Samarkand complex ($120–180/night)",
            "Private afternoon tour of Registan with leading Central Asian architecture scholar — $150pp",
            "Bibi-Khanym Mosque private after-hours access if arrangeable via luxury tour operator",
            "Samarkand gold-embroidery workshop — $60pp private session with master craftsman, try the traditional suzani needlework",
            "Fine dining: rooftop dinner with Registan floodlit view — $60pp, Uzbek tasting menu with wine pairing",
          ],
          cost: "$240–280 including luxury hotel, private scholar, embroidery, dinner",
        },
        {
          day: "Day 3",
          title: "Samarkand Archaeological VIP Day",
          items: [
            "Private early-access to Shah-i-Zinda before opening — $120 arrangement via luxury operator",
            "Afrasiab Museum private tour with the museum's chief archaeologist — $100pp",
            "Gur-e-Amir private guide — specialist in Timurid history — $80pp",
            "Ulugh Beg Observatory with astronomer — $60pp",
            "Gourmet Uzbek lunch in a private garden villa — $50pp, chef-prepared traditional recipes",
            "Afternoon: blue-tile ceramics masterclass at Samarkand's leading ceramicist studio — $80pp",
            "Sunset photography on Registan with professional photographer — $100pp",
          ],
          cost: "$250–300 including private early access, scholars, ceramics, photography",
        },
        {
          day: "Day 4",
          title: "Samarkand to Bukhara: Silk Road Caravan Route",
          items: [
            "Private 4WD transfer Samarkand to Bukhara via ancient caravanserai ruins — $150",
            "Gijduvan master potter private workshop — 2-hour session, take home a piece — $80pp",
            "Arrive Bukhara, check into Amelia Old City boutique hotel ($100–140/night)",
            "Private Lyab-i-Hauz evening tour with historian — $60pp",
            "Private Bukhara cooking class — learn to cook authentic Bukhara-style plov in a traditional courtyard kitchen — $90pp",
            "Dinner at a beautifully restored caravanserai: multi-course Uzbek feast with live doira drumming — $60pp",
          ],
          cost: "$250–300 including private 4WD, pottery, hotel, cooking class, dinner",
        },
        {
          day: "Day 5",
          title: "Bukhara: Private Monument Access & Sufi Experience",
          items: [
            "Private dawn access to Ark Fortress before crowds with military historian — $100pp",
            "Sitorai Mokhi-Khosa Summer Palace exclusive guided tour — $80pp",
            "Afternoon: Sufi whirling ceremony attendance at a private Sufi lodge — arranged by specialist operator — $120pp (a genuinely moving spiritual experience)",
            "Traditional ikat silk workshop with master weaver — commission a custom ikat piece — $100+",
            "Spa treatment at hotel hammam — $60",
            "Fine dining: Bukhara's finest restaurant — full traditional dinner with Bukharan wine — $70pp",
          ],
          cost: "$250–300 including private monument access, Sufi ceremony, ikat commission, spa, dinner",
        },
        {
          day: "Day 6",
          title: "Desert to Khiva: Private Journey Through the Kyzylkum",
          items: [
            "Private 4WD convoy across the Kyzylkum Desert — $200 for vehicle",
            "Stop at Ayaz-Kala fortress ruins — ancient Chorasmian fortress on a desert mesa, completely deserted — extraordinary",
            "Traditional yurt camp lunch in the desert — full Uzbek spread in a decorated yurt — $40pp arranged by operator",
            "Arrive Khiva, check into Malika Khiva hotel or Orient Star Khiva (converted madrasah, $100–140/night)",
            "Private guided introduction to Ichan Qala — $60pp",
            "Sunset from Islam Khoja Minaret, private access arranged",
            "Dinner inside old city caravanserai restaurant — $40pp",
          ],
          cost: "$250–300 including 4WD, desert fortress, yurt lunch, hotel, guide",
        },
        {
          day: "Day 7",
          title: "Khiva: Masterclass & Farewell",
          items: [
            "Full-day private tour of all Ichan Qala monuments with Khorezm specialist — $120pp",
            "Juma Mosque private access — 213 carved columns from different centuries, extraordinary forest of timber",
            "Traditional woodcarving masterclass with a Khiva master craftsman — $80pp (woodcarving is Khiva's living craft)",
            "Lunch on a rooftop with panoramic old-city views — $20pp",
            "Optional: hot air balloon flight over Khiva's walled city — $150–200pp (seasonal, advance booking required)",
            "Private luxury transfer to Urgench airport — $40",
            "Business class return to Tashkent and onward departure",
          ],
          cost: "$250–300 including private scholar, woodcarving, balloon flight, transfer",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–20 (guesthouse)",
      food: "$8–12 (teahouses + local restaurants)",
      transport: "$8–12 (trains + metro + shared taxis)",
      activities: "$8–12 (entry tickets)",
      total: "$50/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$50–70 (boutique hotel)",
      food: "$20–30 (restaurant meals)",
      transport: "$15–25 (private transfers + business class train)",
      activities: "$25–40 (guided tours)",
      total: "$100/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$120–200 (luxury hotel/converted madrasah)",
      food: "$50–70 (fine dining)",
      transport: "$50–80 (private 4WD + first class train)",
      activities: "$80–120 (private scholars, exclusive access)",
      total: "$240+/day",
    },
    {
      tier: "🎯 Backpacker",
      accommodation: "$10–15 (hostel/cheap guesthouse)",
      food: "$5–8 (plov from bazaar, teahouse staples)",
      transport: "$5–8 (shared marshrutka + metro)",
      activities: "$5 (selective sights only)",
      total: "$30/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "$40–60 (family guesthouse/apartment)",
      food: "$20–30 (restaurants + bazaar)",
      transport: "$15–25 (private car hire shared)",
      activities: "$20–30 (family entry tickets)",
      total: "$85/day",
    },
  ],

  mistakes: [
    {
      icon: "🌡️",
      title: "Visiting in July–August heat",
      desc: "Uzbekistan in midsummer is brutally hot — Bukhara and Khiva regularly hit 42–45°C (108–113°F) in July and August. The Kyzylkum Desert is unforgiving. April–May and September–October give comfortable 20–28°C with blue skies. Winter (December–February) is cold but very uncrowded and atmospheric.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "📸",
      title: "Only photographing the Registan and missing the details",
      desc: "The Registan's three madrasas are extraordinary in the aggregate, but the real magic is in the details — the tile inscription calligraphy, the muqarnas (honeycomb vaulting) inside the iwans, and the individual tilework panels. Spend two hours minimum, not thirty minutes for a photo.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🏨",
      title: "Not staying inside Khiva's walled city",
      desc: "Many tour packages put visitors in hotels outside Khiva's Ichan Qala and shuttle them in for the day. Stay inside the walls — the experience of waking at dawn before the day-trippers arrive, with the earthen streets entirely to yourself, is the essence of Khiva. Multiple good guesthouses operate inside the old city.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "💵",
      title: "Not carrying US dollars as backup",
      desc: "While Uzbekistan has ATMs in major cities (and card payments are increasingly accepted), smaller guesthouses, bazaars, and transport outside Tashkent are still largely cash-only. US dollars are the most readily exchanged foreign currency. Bring some crisp, undamaged dollar bills — torn or marked notes may be refused.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🚂",
      title: "Not booking Afrosiyob train tickets in advance",
      desc: "The Afrosiyob high-speed train (Tashkent–Samarkand) is the best way to travel between cities, but tickets sell out, especially on weekends and in peak season. Book at uzrailpass.uz or through your hotel at least 3–7 days ahead. The Sharq train to Bukhara is also bookable online.",
      color: "border-blue-200 bg-blue-50",
    },
  ],

  tips: [
    {
      icon: "🍚",
      title: "Order plov at a plov centre, not a tourist restaurant",
      desc: "Plov (the national dish — spiced rice with lamb, carrots, garlic, and sometimes chickpeas or raisins) is cooked and served fresh at dedicated plov centres that open from 9am until it sells out (usually by noon). In Tashkent, the Central Asian Plov Centre is a legendary institution — massive portions for $2–3. Tourist restaurants serve a pale imitation.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🕌",
      title: "Visit the Registan at night",
      desc: "Samarkand's Registan is floodlit after dark and the reduced crowds make it completely different to the daytime experience. The blue tiles glow against the black sky. Entry is included in your daytime ticket (retained). The sound-and-light show (seasonal) is also worth the extra $5.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🏺",
      title: "Buy crafts direct from artisan workshops, not tourist shops",
      desc: "Uzbekistan has extraordinary living craft traditions — Bukhara ikat silk, Khiva woodcarving, Rishtan blue ceramics, Samarkand paper (non) making. Buying direct from the artisan families rather than tourist shops means lower prices, authentic items, and money going directly to the craftspeople. Ask your guide to take you to the workshops.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🚉",
      title: "Uzbekistan 7-Day Itinerary 2026: Trip Planner",
      desc: "Uzbekistan's Chinese-built high-speed rail network (Afrosiyob reaches 250km/h) connects Tashkent–Samarkand in 2 hrs and Tashkent–Bukhara in 3.5 hrs. It's comfortable, fast, cheap, and scenic. For Khiva, take the Sharq train to Urgench then a 30-minute taxi. The train is always preferable to the bus for the main Silk Road circuit.",
      color: "border-indigo-200 bg-indigo-50",
    },
  ],

  faqs: [
    {
      q: "Is Uzbekistan safe for tourists?",
      a: "Yes — Uzbekistan is one of the safest countries for tourists in Central Asia. Street crime targeting tourists is extremely rare. The government takes tourism safety seriously and has significantly liberalised since 2016. Solo female travellers report feeling very safe throughout the country. Standard precautions apply at busy bazaars (watch your valuables). Political unrest is not a concern for tourists.",
    },
    {
      q: "How do I get between Samarkand, Bukhara, and Khiva?",
      a: "Tashkent to Samarkand: Afrosiyob high-speed train, 2 hours, $10–30. Samarkand to Bukhara: Sharq train or Afrosiyob, 1.5–2 hours, $8–15. Bukhara to Khiva (Urgench): no good train — best option is a shared taxi (7–8 hours) or private transfer (5–6 hours) through the Kyzylkum Desert, or a domestic flight via Tashkent. Allow a full day for the Bukhara–Khiva leg.",
    },
    {
      q: "What is the best time of year to visit Uzbekistan?",
      a: "April–May: wildflowers in bloom, temperatures 20–28°C, the apricot and almond trees flowering — the most beautiful season. September–October: harvest season, grapes, melons, and pomegranates in the bazaars, warm days and cool evenings. Avoid July–August (extreme heat, 40°C+) unless you have serious heat tolerance. December–February is cold but very uncrowded.",
    },
    {
      q: "Do I need a guide in Uzbekistan or can I go independently?",
      a: "Uzbekistan is very manageable independently — English signage is improving, hotels and guesthouses are helpful with directions, and most monuments have English-language information. That said, a specialist guide at the Registan, Afrasiab Museum, and Khiva's old city adds enormous depth — these are places where the history is rich but not obvious from walking around without context. Consider hiring a local guide for specific sites ($20–40pp) rather than using an all-inclusive tour.",
    },
  ],

  combineWith: ["Georgia (Tbilisi)", "Azerbaijan (Baku)", "Kazakhstan (Almaty)", "Tajikistan", "Kyrgyzstan"],
  relatedSlugs: [
    "tbilisi-4-days",
    "istanbul-5-days",
    "jordan-5-days",
    "egypt-7-days",
    "morocco-7-days",
  ],

  galleryQuery: "uzbekistan silk road samarkand bukhara khiva architecture",
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function UzbekistanPage() {
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
