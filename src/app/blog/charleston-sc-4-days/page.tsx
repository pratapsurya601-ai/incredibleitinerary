import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Charleston, SC",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "charleston-sc-4-days",
  heroQuery: "charleston south carolina rainbow row historic homes",
  heroAlt: "Charleston Rainbow Row colorful Georgian row houses on East Bay Street",
  category: "North America",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Charleston, South Carolina is America's most gracious city — a living museum of antebellum architecture, where horse-drawn carriages roll past pastel mansions on streets that have barely changed since the 1800s. Rainbow Row is the most photographed streetscape in the American South, Fort Sumter is where the Civil War began, and the Low Country shrimp and grits served in Charleston's historic restaurants is the dish that defines an entire regional cuisine. Four days is exactly enough to cover the Battery mansions, the plantation estates, King Street boutiques, the French Quarter, and still sit on a piazza at dusk with a glass of sweet tea watching the Cooper River turn gold.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$95",
    bestMonths: "Mar–May or Oct–Nov",
    airport: "CHS",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — French Quarter & Battery" },
    { id: "day2", emoji: "📅", label: "Day 2 — Fort Sumter & Rainbow Row" },
    { id: "day3", emoji: "📅", label: "Day 3 — Plantations & King Street" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — US Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "B-1/B-2 Tourist Visa or valid US visa"],
        ["Processing", "2–8 weeks (interview required at US Consulate)"],
        ["Fee", "$185 application fee (non-refundable)"],
        ["Validity", "Up to 10 years, stays up to 6 months"],
        ["Apply at", "US Consulate or US Embassy in India"],
        ["Documents", "DS-160 form, bank statements, employment proof, return ticket"],
        ["Notes", "Interview wait times vary by consulate — Mumbai and Delhi typically faster. Book appointment early."],
      ],
    },
    {
      flag: "🇬🇧",
      title: "UK / EU / AU / CA — Visa-Free (ESTA)",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "ESTA (Electronic System for Travel Authorization)"],
        ["Processing", "Usually approved within minutes; allow 72 hours"],
        ["Fee", "$21 per person"],
        ["Validity", "2 years or until passport expiry, stays up to 90 days"],
        ["Apply at", "Official ESTA site: esta.cbp.dhs.gov"],
        ["Passport", "Must be e-Passport with chip; valid for duration of stay"],
        ["Notes", "Apply before booking flights. Canadian passport holders do not need ESTA — entry by eTA or passport."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$95–125/day",
      days: [
        {
          day: "Day 1",
          title: "French Quarter & The Battery",
          items: [
            "14:00 — Arrive CHS airport; CARTA bus 11 to downtown Charleston costs $2 (30 minutes) — Uber/Lyft is $25–35 from the airport.",
            "15:30 — Check in to a hostel or budget guesthouse north of Calhoun Street ($50–75/night) — the historic downtown peninsula is walkable; staying north of Calhoun cuts costs in half.",
            "16:30 — Walk the French Quarter: Dock Street Theatre (built 1736, America's first theatre), the Circular Congregational Church graveyard, and the Old Exchange Building. All free to view from outside.",
            "18:30 — Sunset at The Battery: White Point Garden at the southern tip of the peninsula where the Ashley and Cooper rivers meet — the antebellum cannon-lined promenade with mansion views is Charleston's most iconic free experience.",
            "20:00 — Dinner: shrimp and grits at a neighbourhood restaurant north of Broad Street ($14–18); the tourist restaurants on East Bay Street charge double for the same dish.",
          ],
          cost: "$50–65 (bus, hostel, dinner)",
        },
        {
          day: "Day 2",
          title: "Rainbow Row, Fort Sumter & Market",
          items: [
            "09:00 — Walk Rainbow Row on East Bay Street before the tour groups arrive: 13 pastel-painted Georgian row houses built 1748–1758, now the most photographed block in the South. Free.",
            "10:30 — Fort Sumter National Monument ferry from Liberty Square: the round trip with National Park Service ferry costs $28; the fort itself (where the first Civil War shots were fired in 1861) is managed by the NPS and free once you land.",
            "13:30 — Lunch at the Charleston City Market: fresh boiled peanuts ($3/bag), Gullah-style she-crab soup ($8), and sweetgrass basket vendors who have been weaving here for 300 years.",
            "15:30 — Old Slave Mart Museum ($8): housed in the only surviving antebellum slave auction building in the country — a sobering and essential part of understanding Charleston's history.",
            "19:30 — Budget dinner: a bowl of Low Country boil (shrimp, sausage, corn, potatoes) at a casual neighbourhood spot for $16.",
          ],
          cost: "$60–75 (ferry, museum, food)",
        },
        {
          day: "Day 3",
          title: "Magnolia Plantation & King Street",
          items: [
            "09:00 — Drive or rideshare ($12 each way) to Magnolia Plantation and Gardens (founded 1676): America's oldest garden open to the public. Admission $20 — the Ashley River reflection of the plantation house and the azalea gardens in spring are iconic.",
            "12:30 — Drive 15 minutes to McLeod Plantation Historic Site (free, managed by Charleston County): a Freedmen's Bureau site focused on the African American experience of Reconstruction — the best-interpreted plantation in the region.",
            "15:00 — Return to downtown; browse King Street boutiques: the antique district (Lower King), the fashion district (Middle King), and the restaurant corridor (Upper King) are entirely distinct in character.",
            "18:30 — Happy hour oysters on the half shell at an Upper King Street raw bar: $1/oyster happy hour runs 5–7pm at several spots.",
            "20:00 — Dinner: shrimp po'boy and sweet potato fries at a casual King Street cafe ($15–18).",
          ],
          cost: "$65–80 (transport, admission, food)",
        },
        {
          day: "Day 4",
          title: "Boone Hall & Waterfront Farewell",
          items: [
            "09:30 — Boone Hall Plantation (Mt Pleasant, $28 entry): the oak avenue approach lined with 250-year-old trees is one of the most dramatic plantation entrances in America — the Avenue of Oaks has featured in multiple films.",
            "12:30 — Lunch in Mt Pleasant at a local oyster shack: a dozen local James Island oysters with cornbread for $18.",
            "14:30 — Return to Charleston; walk Waterfront Park: the pineapple fountain, the swing bench overlooking the Cooper River, and Adger's Wharf for final harbour views. All free.",
            "17:00 — Last stop: Husk restaurant bar for a final bourbon cocktail ($14) in a 19th-century mansion building — even on a budget, one drink at Husk is a must.",
          ],
          cost: "$70–85 (admission, lunch, transport, drinks)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$180–250/day",
      days: [
        {
          day: "Day 1",
          title: "French Quarter & Spoleto Culture",
          items: [
            "13:00 — Arrive CHS; Uber to boutique hotel in the French Quarter or lower King Street ($30) — 3-star boutique hotels in the historic district run $130–190/night.",
            "15:00 — Guided walking tour of the French Quarter with a licensed Charleston history guide ($25, 2 hours) — the best way to understand the architectural layers from colonial to Antebellum to Reconstruction.",
            "18:00 — Cocktails on the piazza of a Rainbow Row bar: a properly made Lowcountry Lemonade with Firefly Sweet Tea Vodka ($14) overlooking the harbour.",
            "20:00 — Dinner at Husk restaurant ($50/pp): the flagship farm-to-table Southern restaurant in a Victorian mansion; the cast-iron cornbread and smoked brisket are essential orders.",
          ],
          cost: "$200–230 (hotel, tour, cocktails, dinner)",
        },
        {
          day: "Day 2",
          title: "Fort Sumter, Gibbes Museum & Battery",
          items: [
            "09:00 — Fort Sumter ferry ($28) with the first departure at 9:30am — arrive 15 minutes early; the NPS rangers give exceptional context about the opening battle.",
            "12:00 — Gibbes Museum of American Art ($20): the finest collection of portraits and Lowcountry landscapes in the Southeast, housed in a Beaux-Arts building. The miniature portrait collection is world-class.",
            "14:00 — Lunch at 167 Raw: the best raw bar in Charleston ($30/pp) — the lobster roll is outstanding and the shrimp ceviche is served with plantain chips.",
            "16:00 — Private horse-drawn carriage tour of the South of Broad neighbourhood ($35/person): the guides are licensed and test on Charleston history; the mansion interiors glimpsed through iron gates are extraordinary.",
            "20:00 — Dinner at FIG restaurant ($55/pp): ingredient-driven Lowcountry menu with the freshest local fish and the most elegant shrimp and grits in the city.",
          ],
          cost: "$220–250 (ferry, museum, lunch, carriage, dinner)",
        },
        {
          day: "Day 3",
          title: "Middleton Place & Antebellum Plantations",
          items: [
            "08:30 — Drive to Middleton Place ($38 entry for house + gardens): the oldest landscaped gardens in America (1741), with terraced butterfly lakes, working blacksmith and potter craftspeople, and the most complete picture of plantation life. Allow 3 hours minimum.",
            "12:30 — Lunch at Middleton Place restaurant ($30/pp): Hoppin' John, okra gumbo, and sweet potato pudding using 18th-century Low Country recipes.",
            "15:00 — Drive to Drayton Hall ($30 entry): the only plantation house on the Ashley River to survive both the Civil War and the American Revolution intact — a profound and architecturally significant building.",
            "18:00 — King Street cocktail hour: the gin-focused bars on Upper King Street are among the best craft cocktail destinations in the Southeast.",
            "20:30 — Dinner at The Obstinate Daughter on Sullivan's Island ($45/pp): wood-fired pasta and locally caught fish on a barrier island 20 minutes from downtown.",
          ],
          cost: "$210–250 (admissions, meals, transport)",
        },
        {
          day: "Day 4",
          title: "Boone Hall, Sweetgrass & Farewell",
          items: [
            "09:30 — Boone Hall Plantation ($28): the Avenue of Oaks plus the Gullah Geechee cultural programme — interpreters demonstrate sweetgrass basket weaving, indigo dyeing, and Sea Island rice cultivation.",
            "12:00 — Lunch at The Glass Onion in West Ashley ($25/pp): the best neighbourhood restaurant in Charleston for deviled eggs, fried catfish, and scratch-made pimento cheese.",
            "14:30 — Charleston City Market: buy a handwoven sweetgrass basket directly from a Gullah artisan ($40–200 depending on size) — the finest authentic souvenir from Charleston.",
            "17:00 — Sunset cocktails at the Rooftop at the Vendue ($16/drink): the best rooftop view of the church steeples and the harbour.",
            "19:30 — Farewell dinner at 82 Queen ($50/pp): a Charleston institution in a courtyard garden setting; the award-winning she-crab soup and pecan-crusted flounder are the signatures.",
          ],
          cost: "$195–240 (admissions, meals, cocktails)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$400–700/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at a Historic Inn",
          items: [
            "13:00 — Private car from CHS airport ($75) to the Belmond Charleston Place, Wentworth Mansion, or Zero George Street — luxury boutique hotels in historic buildings from $350–700/night.",
            "15:00 — Private architectural tour of South of Broad with a preservation historian ($200, 2 hours): access to private garden tours and interior glimpses of the battery mansions arranged through the hotel concierge.",
            "18:30 — Cocktails at The Gin Joint: the most celebrated craft cocktail bar in the South — the bartenders research pre-Prohibition Charleston recipes; cocktails $18–22.",
            "20:30 — Dinner at McCrady's Tasting Room ($130/pp, reservation weeks ahead): the flagship of Sean Brock's restaurant empire; a 6-course tasting menu of the most rigorous Lowcountry cuisine in America.",
          ],
          cost: "$550–700 (hotel, private tour, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Fort Sumter Charter & Gibbes",
          items: [
            "08:30 — Private boat charter from Charleston City Marina ($400 for 3 hours): approach Fort Sumter by private vessel, circle the harbour, and visit the fort before public ferries arrive. Captain provides Civil War harbour context.",
            "12:30 — Lunch at Le Farfalle ($60/pp): Italian-Southern fusion in a stunning chandelier-draped dining room; the pasta is made daily and the cacio e pepe with local shrimp is exceptional.",
            "15:00 — Private Gibbes Museum after-hours curator tour (arranged through hotel, $150/person): access to the study collection and context on the portrait subjects who shaped Charleston.",
            "19:00 — Sunset champagne cruise on the harbour ($95/pp, private sailing charter available through hotel).",
            "21:00 — Dinner at Circa 1886 ($90/pp): inside the original carriage house of the Wentworth Mansion; Victorian-era Lowcountry cooking elevated to a fine dining tasting menu.",
          ],
          cost: "$600–750 (private charter, meals, museum tour)",
        },
        {
          day: "Day 3",
          title: "Plantations & Gullah Culture",
          items: [
            "08:30 — Private guide to Middleton Place, Drayton Hall, and Magnolia in sequence with a preservation architect ($350 for the day): a narrative of American history through three estates that could not be more different.",
            "13:00 — Picnic lunch arranged by hotel at the Middleton Place rice paddies: locally sourced charcuterie, biscuits, and Frogmore Stew prepared by the hotel kitchen.",
            "16:00 — Private Gullah Geechee cultural immersion with a Sea Island guide ($150): visit a Gullah community to learn basket weaving, taste authentic red rice and okra soup, and understand the African cultural retention that survived slavery.",
            "20:30 — Dinner at 167 Raw chef's table experience ($150/pp): the full provenance of every oyster, shrimp, and fish served; the owner sources personally from the same suppliers daily.",
          ],
          cost: "$600–800 (private guide, meals, cultural tour)",
        },
        {
          day: "Day 4",
          title: "King Street & Farewell Dinner",
          items: [
            "10:00 — Private shopping experience on King Street with a personal stylist ($150/hour): Charleston's boutique district has nationally recognized independent shops that require a local guide to navigate properly.",
            "13:00 — Lunch at Chez Nous ($70/pp): the most intimate restaurant in Charleston — 12 seats, two savoury courses and one dessert, everything from scratch. Reservations 2–3 weeks essential.",
            "16:00 — Spa afternoon at the Charleston Place spa: a 90-minute Lowcountry botanical treatment using local herbs ($180).",
            "19:30 — Farewell dinner at The Ordinary ($120/pp): a grand seafood hall in a restored 1927 bank building; the seafood tower with local oysters, stone crabs, and chilled shrimp is the definitive Charleston luxury experience.",
          ],
          cost: "$500–700 (shopping, meals, spa, final dinner)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$50–75 (hostel or guesthouse)",
      food: "$25–35 (casual restaurants + market)",
      transport: "$10–20 (CARTA bus + occasional rideshare)",
      activities: "$20–35 (Fort Sumter ferry + one museum)",
      total: "$95–125/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$130–190 (boutique historic hotel)",
      food: "$60–90 (farm-to-table + raw bars)",
      transport: "$25–40 (rideshares + plantation transport)",
      activities: "$40–60 (multiple plantations + carriage tour)",
      total: "$180–250/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–700 (historic inn or Belmond)",
      food: "$150–250 (tasting menus + Michelin-adjacent)",
      transport: "$75–400 (private car + boat charter)",
      activities: "$150–300 (private tours + curator access)",
      total: "$400–700+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "$35–55 (hostel dorm)",
      food: "$15–25 (City Market + taco spots)",
      transport: "$5–12 (CARTA bus, walking downtown)",
      activities: "$10–20 (free Battery, Rainbow Row, Waterfront Park)",
      total: "$65–90/day",
    },
    {
      tier: "👪 Family",
      accommodation: "$140–220 (vacation rental or family suite)",
      food: "$70–100 (mix of casual and mid-range)",
      transport: "$30–55 (rental car for plantation days)",
      activities: "$50–80 (carriage tour, Fort Sumter, plantations)",
      total: "$200–280/day",
    },
  ],
  mistakes: [
    {
      icon: "☀️",
      title: "Visiting in July or August",
      desc: "Charleston in summer is brutally hot and humid — regularly 95F (35C) with 90% humidity. Walking the Battery or any plantation in July is genuinely uncomfortable. March to May and October to November offer perfect temperatures for the outdoor walking that Charleston requires.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚗",
      title: "Renting a car for the downtown days",
      desc: "The historic peninsula is best explored entirely on foot — it is only 4 miles long and 1.5 miles wide. Downtown parking costs $3–5/hour and traffic is constant. Only rent a car for the plantation day (Day 3 or 4), when you genuinely need it for the Ashley River corridor.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍽️",
      title: "Eating on East Bay Street tourist row",
      desc: "The restaurants immediately adjacent to Rainbow Row and the waterfront market charge premium prices for average food. Walk two blocks inland to find the Charleston locals actually eat — Upper King Street and the Cannonborough-Elliotborough neighbourhood have the city's best independent restaurants.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏛️",
      title: "Visiting only one plantation",
      desc: "Each Ashley River plantation tells a completely different story — Middleton Place (formal gardens and Gullah culture), Drayton Hall (architectural preservation), Magnolia (informal gardens and atmosphere), Boone Hall (the Avenue of Oaks and film heritage). Each is 30 minutes from the others; combine two in a day.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍤",
      title: "Not trying Gullah Geechee food",
      desc: "Shrimp and grits is famous but the broader Gullah Geechee cuisine — red rice, she-crab soup, Hoppin' John, oyster roasts, and sweetgrass-steamed shellfish — is among America's most distinctive and important food traditions. Seek out restaurants and market vendors that specifically reference Gullah heritage.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🦪",
      title: "Hit the $1 oyster happy hour on Upper King",
      desc: "Several Upper King Street raw bars offer $1 oysters from 5pm to 7pm Monday through Friday. Local James Island Creek oysters are exceptional — briny, small, and perfectly chilled. Pair with a draft beer for $5 and you have the best happy hour in the South. Book Charleston tours at https://www.getyourguide.com/s/?q=Charleston+SC&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Walk the Battery at sunrise",
      desc: "White Point Garden and the Battery promenade at 6:30am offer the antebellum mansions in golden light with no tourists and the Cooper River turning orange. The wrought-iron fences, palmetto trees, and Civil War cannons are completely different from the midday crowds — the most beautiful 30 minutes in Charleston.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎭",
      title: "Book restaurants 2–3 weeks ahead",
      desc: "The top Charleston restaurants — Husk, FIG, McCrady's, The Ordinary, 167 Raw, Chez Nous — are booked weeks in advance, especially on weekends. Make reservations before you arrive. Walk-in bars at Husk and FIG accept customers on a first-come basis from 5:30pm if the main dining room is full.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🧺",
      title: "Buy sweetgrass baskets directly from the weavers",
      desc: "Gullah sweetgrass basket weaving is a West African tradition that survived in the Sea Islands for 400 years. Buy directly from weavers at the Charleston City Market (not from souvenir shops) to ensure your purchase supports the Gullah artisans. Prices range from $40 for a small piece to $400 for a large ceremonial basket.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do Indian passport holders get a visa for Charleston / the USA?",
      a: "Indian passport holders need a B-1/B-2 US tourist visa. Apply at the US Embassy or Consulate in India — the fee is $185 and an in-person interview is required. Processing takes 2–8 weeks depending on the consulate and current wait times. Apply well in advance; Mumbai and Delhi consulates tend to have shorter interview waits than other cities.",
    },
    {
      q: "Is Charleston walkable and do I need a car?",
      a: "The historic downtown peninsula is entirely walkable — all the major sites from Rainbow Row to the Battery to the City Market are within a 20-minute walk of each other. You only need a car for the plantation day trips along the Ashley River (30–45 minutes from downtown). CARTA buses cover the peninsula cheaply; rideshares work well for short hops.",
    },
    {
      q: "What is the best time to visit Charleston?",
      a: "March through May is ideal: azaleas and magnolias are blooming on the plantation grounds, temperatures are in the mid-70s (22–25C), and the humidity has not yet peaked. October and November are equally good with fall colour and cooler air. Avoid July and August — the heat and humidity make extensive walking genuinely unpleasant.",
    },
    {
      q: "What is Spoleto Festival USA and should I plan around it?",
      a: "Spoleto Festival USA is a 17-day performing arts festival held every May–June in Charleston's churches, theatres, and outdoor venues. It is America's premier arts festival, bringing world-class opera, dance, theatre, and chamber music to venues like the Dock Street Theatre and Cistern Yard. Tickets ($25–120) should be booked months ahead; hotel prices spike 40% during the festival period.",
    },
  ],
  combineWith: ["savannah-georgia-3-days", "asheville-nc-3-days", "outer-banks-4-days"],
  relatedSlugs: ["savannah-georgia-3-days", "new-orleans-4-days", "washington-dc-4-days"],
  galleryQuery: "charleston south carolina historic district antebellum mansions",
};

export const metadata: Metadata = {
  title: "Charleston SC in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Charleston, SC itinerary — Rainbow Row, Fort Sumter, antebellum plantations, shrimp and grits, King Street boutiques, and the Battery mansions. Budget $95/day to luxury historic inns.",
  keywords: [
    "Charleston SC itinerary",
    "Charleston 4 days",
    "Charleston travel guide 2026",
    "Rainbow Row Charleston",
    "Fort Sumter",
    "Charleston plantations",
    "shrimp and grits",
    "King Street Charleston",
    "Charleston visa Indian passport",
    "South Carolina travel",
  ],
  openGraph: {
    title: "Charleston SC in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Rainbow Row, Fort Sumter, antebellum plantations, and shrimp and grits — Charleston in 4 days from $95/day to luxury historic inns.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/charleston-sc-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charleston SC in 4 Days: Complete 2026 Itinerary",
    description: "Rainbow Row, Fort Sumter, Battery mansions, and the best shrimp and grits in the South — the complete Charleston guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/charleston-sc-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Charleston SC in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Charleston SC in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/charleston-sc-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Charleston, South Carolina",
      description:
        "Charleston, SC — a historic American city known for Rainbow Row, antebellum mansions, Fort Sumter, Gullah cuisine, and the most beautiful streetscapes in the American South.",
      geo: { "@type": "GeoCoordinates", latitude: 32.7765, longitude: -79.9311 },
    },
  ],
};

export default function CharlestonPage() {
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
