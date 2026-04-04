import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Dublin",
  country: "Ireland",
  countryFlag: "🇮🇪",
  slug: "dublin-4-days",
  heroQuery: "dublin temple bar ireland cliffs of moher pub",
  heroAlt: "Dublin Temple Bar at twilight with colourful pubs reflected in the Liffey, Ireland",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro: "Dublin rewards slow wandering — a city where a 10-minute walk separates a 9th-century Viking settlement from a world-class art museum, and where the person beside you at the bar will have been there for three hours already and knows every story worth telling. Four days is enough to cover Trinity College, the Guinness Storehouse, Kilmainham Gaol, the cliff walk at Howth, and the Wicklow Mountains — and still leave room for a proper pint pulled correctly.",
  stats: {
    duration: "4 Days",
    budgetFrom: "€55",
    bestMonths: "May–Sep",
    airport: "DUB (Dublin Airport)",
  },
  toc: [
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa",        emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Irish Visa Required", "Ireland is NOT part of the Schengen Zone and is NOT in the UK. A UK visa does NOT cover entry to Ireland. Indian passport holders must apply separately for an Irish Short Stay 'C' visa. Fee: ~€60. Processing time: 4–8 weeks. Apply at the Irish Naturalisation and Immigration Service (INIS) website or through the Irish embassy in New Delhi/Mumbai."],
        ["Key Documents", "Passport valid for the full duration of your stay, bank statements for the last 6 months, proof of employment or business, confirmed hotel bookings, return flight tickets, travel insurance, and a covering letter explaining your purpose of visit."],
        ["UK Visa Holders", "If you hold a valid UK visa or are a UK resident, you may be eligible for the British-Irish Visa Scheme (BIVS) to visit both countries on one visa — but this applies only to specific nationalities. Check inis.gov.ie to confirm eligibility. Most Indian passport holders need a separate Irish visa regardless of UK visa status."],
        ["Travel Insurance", "Not a mandatory visa requirement for Ireland, but strongly recommended — €30,000 minimum medical cover is best practice, especially given Ireland's healthcare costs for visitors."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["EU/EEA Citizens", "No visa, no passport control formality — Ireland is in the Common Travel Area (CTA) with the UK. EU citizens can enter and stay indefinitely. Bring your national ID card or passport."],
        ["UK Citizens", "Full free movement under the Common Travel Area. No immigration checks, no time limits. The UK and Ireland are effectively a single travel zone for citizens of both."],
        ["USA / Canada / Australia", "Visa-free entry for up to 90 days. Ireland is NOT in Schengen, so your Schengen 90-day count does not apply — Ireland's 90-day allowance is entirely separate."],
        ["ETIAS Note", "Ireland has opted out of ETIAS, the EU travel authorisation system. American, Canadian, and Australian visitors do not need ETIAS to enter Ireland — only to enter mainland EU Schengen countries."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€55–90/day",
      days: [
        {
          day: "Day 1",
          title: "Trinity College, Grafton Street & Temple Bar",
          items: [
            "9:00am — Trinity College campus (free to enter grounds). One of the most beautiful university campuses in Europe — 400-year-old cobblestone squares, Georgian buildings, and the Long Room library visible through the archway.",
            "9:30am — Book of Kells (€16, book online). The 9th-century illuminated Gospel manuscript is one of the great medieval treasures of the world. The Long Room library above it — 65m of barrel-vaulted oak shelving holding 200,000 books — is equally extraordinary and included in the ticket.",
            "11:30am — Grafton Street (free). Dublin's pedestrian shopping street has some of the best buskers in Europe — many are genuinely world-class musicians. Walk it slowly.",
            "12:30pm — St Stephen's Green (free). Dublin's central park: 22 acres, a lake with ducks, Victorian bandstand, and the best free lunch spot in the city. Pick up a €6 sandwich from Dunnes Stores on the corner.",
            "3:00pm — Walk the south quays along the Liffey toward Temple Bar. The Ha'penny Bridge (free) is the most photographed spot in Dublin — cast iron pedestrian bridge built in 1816.",
            "6:00pm — Temple Bar area. It is undeniably touristy and pints cost €7-8 here — but it's viscerally alive on an evening. The Temple Bar pub itself has live traditional music from 5pm daily.",
            "8:00pm — For a better pint at better prices: walk 10 minutes to Mulligan's (Poolbeg Street) — one of the oldest pubs in Dublin, dating to 1782. No music, no tourists, just excellent Guinness poured properly (€6) and locals who know what they're talking about.",
          ],
          cost: "€40–60 total",
        },
        {
          day: "Day 2",
          title: "Guinness Storehouse, Kilmainham Gaol & Phoenix Park",
          items: [
            "9:30am — Guinness Storehouse (€28–35, book online — sells out in summer). The most visited paid attraction in all of Ireland. Seven floors of history, brewing process, advertising archives, and tasting. The Gravity Bar at the top gives a 360-degree panorama of Dublin that rivals any observation deck. Your ticket includes one pint — time it for the Gravity Bar.",
            "12:00pm — Kilmainham Gaol (€8, must book weeks ahead in peak season). One of the most emotionally powerful sites in Ireland. The prison where the leaders of the 1916 Easter Rising were executed — their stories are told in a 90-minute guided tour that covers 140 years of Irish political history. The Victorian wing with its iron cell doors and glass ceiling is architecturally haunting.",
            "2:30pm — Phoenix Park (free). At 1,750 acres, it's the 7th largest urban park in the world — larger than Central Park and Hyde Park combined. The herd of wild fallow deer (around 600 animals) roams freely. The Áras an Uachtaráin (Irish President's residence) is visible from the main road.",
            "5:00pm — Walk or bus back to city centre via Stoneybatter — one of Dublin's most authentic neighbourhoods, full of local cafés and pubs untouched by tourism.",
            "7:00pm — Dinner: full Irish stew (lamb, potato, carrots, barley) at any traditional Dublin pub. Expect €14–18. The Stag's Head (Dame Court) does an excellent version and has one of the finest Victorian pub interiors in the city.",
          ],
          cost: "€55–80 total",
        },
        {
          day: "Day 3",
          title: "Day Trip: Howth Cliff Walk & Seafood",
          items: [
            "9:00am — Take the DART train from Connolly or Pearse Station to Howth (30 minutes, €4.80 return). The DART runs along Dublin Bay — the sea views are exceptional even on the train.",
            "9:30am — Howth cliff walk (free, 10km, approximately 3 hours). The loop trail circles the headland above the Irish Sea with views of Lambay Island, Ireland's Eye, and on clear days, the Mourne Mountains in Northern Ireland. The path is well-marked but bring waterproof layers — Howth is reliably windier than Dublin.",
            "12:30pm — Seals at Howth Harbour. The colony of grey seals that live around the working fishing harbour is one of Ireland's most accessible wildlife experiences. They bask on the rocks and beg near the fish counters.",
            "1:00pm — Fresh fish and chips at Beshoff Bros on the West Pier (€12–15 — the best chips in the Dublin area, cooked in beef dripping, served in paper). Or sit-down seafood at The Brass Lantern for prawns and brown bread (€18–22).",
            "3:00pm — Walk through Howth village and up to Howth Castle grounds (free, rhododendron garden spectacular in May–June). The ruined castle dates to the 12th century.",
            "4:30pm — DART back to Dublin. Evening free — the Pearse Street and South Great George's Street pub trail has some of Dublin's best traditional music sessions from 9pm.",
          ],
          cost: "€30–50 total",
        },
        {
          day: "Day 4",
          title: "Wicklow Mountains & Farewell Dublin",
          items: [
            "8:30am — Bus or car to Wicklow Mountains (1–1.5 hours south of Dublin). Alternatively take the Dublin Bus 65 or join an organised day tour from Dublin (€25–35 including guide).",
            "10:00am — Sugar Loaf Mountain (free, 501m). The conical granite peak is unmistakable from the N11 road. The trail from Kilmacanogue takes 1.5 hours return and rewards with views across Dublin Bay and the Wicklow hills.",
            "12:00pm — Powerscourt Waterfall (€7.50 entry). Ireland's highest waterfall at 121m, set in a wooded valley. The waterfall is at its most dramatic after rain — which in Ireland is nearly always. The estate gardens (separate ticket, €10) are among the finest Palladian gardens in Europe.",
            "2:00pm — Glendalough Monastic Site (free). A 6th-century monastic settlement in a glacial valley with two lakes, a round tower (30m tall, still intact), and stone churches predating the Norman invasion. The Upper Lake trail (45 minutes) is the finest short walk in County Wicklow.",
            "5:00pm — Return to Dublin for a farewell dinner. Irish stew or lamb shank at a Grafton Street side-street restaurant. Budget €16–22 for mains.",
            "7:30pm — Final pint at Kehoe's (South Anne Street) — perfectly preserved Victorian pub, wooden snugs, knowledgeable staff. The Guinness is among the best in Dublin city centre.",
          ],
          cost: "€40–65 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€150–260/day",
      days: [
        {
          day: "Day 1",
          title: "Trinity, Georgian Dublin & Temple Bar with a Local",
          items: [
            "10:00am — Check into a 3-star hotel on the south side — The Wilder (Exchequer Street) or The Dean (Harcourt Street) for design-forward rooms at €120–180/night.",
            "11:00am — Book of Kells with a small-group guided tour (€35–50 including entry) — the extra context on the manuscript's history and the monks who made it transforms the experience.",
            "1:00pm — Lunch at Fade Street Social (Fade Street) — one of Dublin's most consistently excellent restaurants. The gastro bar downstairs: Irish charcuterie, oysters, craft beer. Budget €30–40/person.",
            "3:00pm — National Museum of Ireland — Archaeology (free). The Viking gold gallery and the bog bodies (Iron Age sacrificial remains, uncannily preserved) are genuinely unmissable.",
            "5:30pm — Georgian Dublin walking tour (€20/person, Context Travel or Pat Liddy's Walking Tours). The Georgian squares — Merrion, Fitzwilliam — are among the finest examples of 18th-century urban planning in Europe.",
            "8:00pm — Dinner at The Winding Stair (Ormond Quay) — Irish produce, traditional recipes, contemporary execution. Duck breast with Clonakility black pudding, Wicklow lamb. €30–45/person. Book ahead.",
          ],
          cost: "€130–200 total",
        },
        {
          day: "Day 2",
          title: "Guinness, Kilmainham & Irish Whiskey Trail",
          items: [
            "9:30am — Guinness Storehouse Connoisseur Experience (€45) — the premium tier includes a tutored Guinness tasting flight and a private Gravity Bar reservation at 10am before the crowds arrive.",
            "12:00pm — Kilmainham Gaol guided tour (€8 — still must book ahead regardless of budget). The history of the 1916 Rising and Irish independence is essential context for understanding the country.",
            "2:00pm — Irish Whiskey Museum (€18–28 with tasting) on Grafton Street. Ireland has the fastest-growing whiskey industry in the world — the tasting flight covers Jameson, Teeling, Writers' Tears, and Green Spot. Four fundamentally different expressions.",
            "5:00pm — Teeling Whiskey Distillery (Newmarket, €18 with tour and tasting) — Dublin's first new distillery in 125 years, in the Liberties neighbourhood. The tour is excellent and includes three pours.",
            "7:30pm — Dinner at Dax (Pembroke Street) — classic French-Irish cooking in a basement room. Duck confit, beef fillet, excellent wine list. €40–55/person. Book ahead.",
          ],
          cost: "€160–240 total",
        },
        {
          day: "Day 3",
          title: "Howth by DART & Seafood Lunch",
          items: [
            "9:00am — DART to Howth. At mid-range you skip the cliff walk huffing in the rain — take it at a leisure pace and stop at every viewpoint. Bring binoculars for seabirds.",
            "11:00am — Howth Castle and the National Transport Museum on the estate grounds (€4). A collection of vintage Dublin trams and buses — surprisingly interesting.",
            "1:00pm — Lunch at Aqua (West Pier) — the best seafood restaurant in Howth. Lobster bisque, grilled plaice with brown butter, Irish crab claws. €45–65/person. Book ahead especially on weekends.",
            "3:30pm — DART back through Sutton, Raheny, Clontarf — the northern suburbs of Dublin, all facing the bay. Get off at Clontarf Road and walk the seafront promenade (free, 3km) toward the city.",
            "7:00pm — Dinner at Chapter One (Parnell Square, 1 Michelin star) — Ireland's most-celebrated tasting menu restaurant. 5-course menu €95–115/person. The most accomplished Irish fine dining experience in the capital. Book 3–4 weeks ahead.",
          ],
          cost: "€180–270 total",
        },
        {
          day: "Day 4",
          title: "Wicklow Mountains & Farewell Fine Dining",
          items: [
            "8:30am — Private car hire to Wicklow (€80–120 for a half-day with driver). The comfort difference on mountain roads is significant.",
            "10:00am — Powerscourt Estate: gardens (€10) + waterfall (€7.50) + the garden centre tearoom for morning coffee. The Italianate terraces with Sugarloaf Mountain behind them are one of the great Irish landscape views.",
            "1:00pm — Lunch at Avoca Handweavers in Kilmacanogue — the original Irish mill and food hall. The café serves excellent Irish soups, wheaten bread, and smoked salmon. €15–22.",
            "3:00pm — Glendalough. Hire a local guide (€25–35/person) for the monastic site — the context on St Kevin's founding of the community in 498 AD and the Norse raids makes the ruins speak.",
            "7:30pm — Farewell dinner at Greenhouse (Dawson Street, 1 Michelin star) — €75–95 tasting menu. Modern European cooking with exceptional Irish ingredients — Dingle Bay crab, Connemara lamb, Kilmore Quay lobster.",
          ],
          cost: "€200–320 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€450–1,200+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Georgian Grandeur & Dinner",
          items: [
            "Check in to The Merrion Hotel (Merrion Street) — Dublin's finest hotel, five Georgian townhouses combined, a world-class art collection in the corridors, and a garden that was the private lawn of a Duke. Rooms from €350–900/night.",
            "Private chauffeur from Dublin Airport — standard with The Merrion concierge or bookable separately at €60–80 one way.",
            "Afternoon: private Book of Kells viewing with a Trinity College academic guide (arrange through hotel concierge, €200–300 for a 90-minute private session outside public hours).",
            "7:00pm — Drinks in The Merrion's Cellar Bar. The wine list covers 600 labels; the bar snacks include Carlingford oysters and house-cured salmon.",
            "8:30pm — Dinner at Restaurant Patrick Guilbaud (2 Michelin stars, Merrion Street — next door to your hotel). Ireland's only two-Michelin-star restaurant. Tasting menu €175–220/person. The Irish art collection on the walls is museum-quality. Book 6–8 weeks ahead.",
          ],
          cost: "€500–900 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Dublin, Kilmainham & Whiskey",
          items: [
            "9:00am — Private historian-led Dublin walking tour (3 hours, €200–300 for a small group). The Viking settlement of Dubh Linn, the Norman arrival, the Georgian expansion, the Easter Rising — the whole arc of Irish history told on the streets where it happened.",
            "12:30pm — Kilmainham Gaol (€8 — money is irrelevant but the advance booking requirement is not; even with a butler's assistance, book 3–4 weeks ahead in summer). The experience does not change with budget.",
            "2:30pm — Private tasting at Teeling Distillery with the master distiller or a senior blender (arrange through hotel concierge, €150–200/person for 90-minute private session).",
            "5:00pm — Spa at The Merrion's No.1 Pery Square — 90-minute Irish seaweed bath treatment, €180.",
            "8:00pm — Dinner at Thornton's at The Fitzwilliam — classic French-Irish fine dining. €80–120/person. Follow with a nightcap of rare Midleton Very Rare whiskey in the hotel bar.",
          ],
          cost: "€700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Howth by Private Boat & Coastal Cliffs",
          items: [
            "9:00am — Private sailing charter from Dún Laoghaire Marina to Howth (€500–800 for half day, up to 6 people). Approach Howth Head from the sea — the cliff face is entirely different from the land walk and the seal colony at the base is accessible by boat.",
            "12:30pm — Lunch at King Sitric (Howth Harbour) — the finest fish restaurant on the Dublin coast. Turbot, sole on the bone, Howth lobster thermidor. €70–100/person. Book weeks ahead.",
            "3:00pm — Afternoon drive along the Wicklow coast road (N11 and coast roads) with private driver — Bray Head, Greystones, the cliff railway. The Irish Sea in afternoon light.",
            "6:00pm — Return to Dublin. Champagne in the Merrion garden if weather permits.",
            "8:30pm — Dinner at Chapter One — Ireland's most beloved fine dining institution. The 7-course tasting menu (€135/person) with a wine pairing (€95/person) is the complete Irish fine dining experience.",
          ],
          cost: "€900–1,500 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Wicklow Mountains Helicopter & Farewell",
          items: [
            "9:00am — Helicopter transfer to Wicklow Mountains (€600–900 for the round trip, 4 passengers). The aerial view of the Dublin Bay, the Sugar Loaf, and the Wicklow valleys is extraordinary.",
            "10:00am — Glendalough with a private archaeologist guide (€200–300, arrange through hotel). The monastic site from 498 AD and its place in Irish Christian history.",
            "12:30pm — Lunch at Rathsallagh House (Dunlavin, Wicklow) — a converted Queen Anne house with estate gardens. Sunday roast or seasonal tasting menu, €55–75/person.",
            "3:30pm — Return helicopter to Dublin or private driver (€120).",
            "7:30pm — Farewell dinner anywhere you choose — in Dublin, with a two-Michelin-star track record, you are spoiled for choice. Private transfer to the airport at whatever hour suits.",
          ],
          cost: "€1,000–2,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€25–45",
      food: "€15–25",
      transport: "€5–10",
      activities: "€10–20",
      total: "€55–100/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90–160",
      food: "€40–70",
      transport: "€15–25",
      activities: "€30–60",
      total: "€175–315/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€300–800",
      food: "€100–250",
      transport: "€40–120",
      activities: "€80–200",
      total: "€520–1,370/day",
    },
  ],
  mistakes: [
    {
      icon: "🛂",
      title: "Assuming a UK Visa Covers Ireland",
      desc: "Ireland is not in the Schengen Zone and is a completely separate country from the UK. A UK tourist visa does NOT give you entry to Ireland. Indian and many other passport holders need a separate Irish Short Stay C visa (~€60, apply 4–8 weeks ahead). This mistake strands people at Dublin Airport every single week.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍺",
      title: "Drinking Exclusively in Temple Bar",
      desc: "Temple Bar is great for one evening — the energy is real, the music is live, and it's genuinely fun. But Guinness costs €7–8 here versus €5.50–6.50 fifteen minutes' walk away. Mulligan's (Poolbeg Street), Kehoe's (South Anne Street), and The Stag's Head (Dame Court) pour better pints in better rooms at honest prices.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🥾",
      title: "Skipping the Howth Cliff Walk",
      desc: "Most Dublin itineraries are city-only. The Howth Peninsula is 30 minutes by DART and offers a 10km cliff walk above the Irish Sea with seals, seabird colonies, and views that are genuinely extraordinary. It costs €4.80 return on the train. The fresh fish and chips at the harbour afterward is one of the great simple pleasures of the Dublin trip.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🍺",
      title: "Guinness Storehouse: Go Straight to the Gravity Bar",
      desc: "Your entry ticket includes one pint in the Gravity Bar at the top of the Storehouse — a circular glass room with 360-degree views over Dublin. Do the exhibits on the way up, but save your pint for the Gravity Bar at sunset (5–6pm). The view over the city in evening light with a perfect Guinness in hand is the quintessential Dublin moment.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Howth Cliff Path at 7am Is a Different World",
      desc: "The Howth cliff walk gets busy by 10am on weekends and is genuinely crowded by noon in summer. The 7am walk — catching the DART's first service from Connolly at 6:35am — puts you on the headland as the sun rises over the Irish Sea with nothing but gannets for company. Pack a flask of coffee and watch the light hit Bull Island from above.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏛️",
      title: "Book Kilmainham Gaol Weeks in Advance",
      desc: "Kilmainham Gaol has a fixed-capacity guided tour model — every visitor goes with a guide, which means the daily capacity is small. In July and August, tickets sell out 3–4 weeks ahead. The online booking system opens 90 days in advance. This is not a place you can walk up to — book the moment you know your travel dates.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Do I need a separate visa for Ireland if I have a UK visa?",
      a: "Almost certainly yes. Ireland is not part of the UK and not part of the Schengen Zone — it runs its own independent immigration system. A UK visa does not grant entry to Ireland for most nationalities. The exception is the British-Irish Visa Scheme (BIVS), which allows certain nationalities who hold a valid UK visa to also enter Ireland — but this applies to a limited list of countries. Indian passport holders are included in BIVS, but you must hold a valid UK visa already and enter Ireland as part of a trip that also includes the UK. Check inis.gov.ie for the current BIVS country list and conditions.",
    },
    {
      q: "Can I visit the Cliffs of Moher from Dublin in a day?",
      a: "Yes — it is a long day but entirely doable. Several operators run daily coach tours from Dublin: the journey is approximately 4 hours each way via Ennis or the Burren, with 2–3 hours at the cliffs included. Total cost: €45–60 per person including the Cliffs of Moher visitor levy (€10). The Cliffs — at 214 metres and stretching for 8km — are Ireland's most spectacular natural attraction. If you only have one day for a day trip from Dublin, this is the one to do.",
    },
    {
      q: "Where should I drink Guinness in Dublin?",
      a: "The Guinness Storehouse Gravity Bar is the experience, but for the best daily pint: Mulligan's (Poolbeg Street, established 1782) is consistently cited by those who take it seriously. The Stag's Head (Dame Court), Kehoe's (South Anne Street), and Toner's (Baggot Street) are all excellent. Avoid anywhere that lists Guinness as a menu item with a photo — any pub that has to market the Guinness separately from the pub itself probably isn't the place.",
    },
    {
      q: "Is a Ring of Kerry day trip possible from Dublin?",
      a: "Technically yes, but it makes for an exhausting day — Kerry is 3.5–4 hours from Dublin by car. The Ring of Kerry is a 179km scenic driving circuit around the Iveragh Peninsula: MacGillycuddy's Reeks, Killarney National Park, Ladies View, Staigue Fort. Coach tours from Dublin exist (€45–70, 14+ hours round trip) but if you have only 4 days, the Wicklow Mountains and Howth are better bang for your time. Kerry rewards 2–3 days on its own.",
    },
    {
      q: "Dublin or Edinburgh — which is better?",
      a: "They are genuinely different cities. Edinburgh has the castle, Arthur's Seat, and the most dramatic urban landscape in northern Europe. Dublin has a looser, warmer energy — the pub culture is more naturally social, the food scene has improved dramatically in the past decade, and the day trips (Howth, Wicklow, Cliffs of Moher) are exceptional. Both cities are very walkable. Edinburgh wins on architecture; Dublin wins on craic. If you are building a UK-Ireland trip, visit both — they are only 1 hour apart by plane.",
    },
  ],
  combineWith: ["london-4-days", "edinburgh-3-days", "galway-3-days"],
  relatedSlugs: ["london-4-days", "edinburgh-3-days", "bruges-3-days", "stockholm-4-days"],
  galleryQuery: "dublin ireland temple bar guinness storehouse howth cliffs",
};

export const metadata: Metadata = {
  title: "Dublin in 4 Days: Guinness, Temple Bar, Cliffs of Moher & Irish Culture (2026)",
  description: "4 complete Dublin plans: Book of Kells, Guinness Storehouse, Kilmainham Gaol, Howth cliff walk, Wicklow Mountains — with real euro costs, Irish visa advice for Indians, and pub tips only locals know.",
  keywords: ["dublin itinerary 4 days", "dublin travel guide 2026", "guinness storehouse", "temple bar dublin", "howth cliff walk", "ireland travel guide", "dublin budget travel"],
  openGraph: {
    title: "Dublin in 4 Days: Budget to Luxury 2026 Itinerary",
    description: "Book of Kells, Guinness Storehouse, Howth cliff walk, Wicklow Mountains — real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1548533893-59c99f22c3b2?w=1200&q=80", width: 1200, height: 630, alt: "Dublin Temple Bar Ireland" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Dublin in 4 Days (2026)", description: "Guinness Storehouse, Howth, Wicklow, real euro costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/dublin-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Dublin in 4 Days: Guinness, Temple Bar, Cliffs of Moher & Irish Culture (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1548533893-59c99f22c3b2?w=1200&q=80",
      description: "4 complete Dublin plans with Guinness Storehouse tips, Kilmainham Gaol booking secrets, Howth cliff walk details, and Irish visa advice for every passport.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Dublin 4 Days", item: "https://www.incredibleitinerary.com/blog/dublin-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Dublin, Ireland",
      description: "The capital of Ireland — home to Trinity College, the Guinness Storehouse, Kilmainham Gaol, and one of the great pub cultures in the world.",
      geo: { "@type": "GeoCoordinates", latitude: 53.3498, longitude: -6.2603 },
      touristType: ["Cultural tourists", "History buffs", "Food and drink lovers", "Nature walkers"],
    },
  ],
};

export default function DublinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
