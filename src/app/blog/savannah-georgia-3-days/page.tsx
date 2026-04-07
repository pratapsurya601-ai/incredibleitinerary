import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Savannah, Georgia",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "savannah-georgia-3-days",
  heroQuery: "savannah georgia forsyth park spanish moss squares",
  heroAlt: "Savannah Georgia Forsyth Park fountain with Spanish moss-draped live oaks",
  category: "North America",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Savannah, Georgia is America's most hauntingly beautiful city — a perfectly preserved 18th-century grid of 22 moss-draped public squares, each one a green cathedral of live oaks trailing Spanish moss over fountain pools and iron-railed townhouses. The city feels frozen in time in the best possible way: Paula Deen built a butter empire here, the ghost tours are among the most genuinely eerie in North America, and the Bonaventure Cemetery inspired a bestselling novel. Three days is the perfect window to walk every square, take the River Street riverboat, eat a Low Country boil, and still have time to debate whether Savannah or Charleston is the more beautiful city.",
  stats: {
    duration: "3 Days",
    budgetFrom: "$85",
    bestMonths: "Mar–May or Oct–Nov",
    airport: "SAV",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Historic Squares & River Street" },
    { id: "day2", emoji: "📅", label: "Day 2 — Bonaventure & Low Country Food" },
    { id: "day3", emoji: "📅", label: "Day 3 — Ghost Tour & Forsyth Park" },
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
        ["Processing", "2–8 weeks (interview at US Consulate required)"],
        ["Fee", "$185 application fee (non-refundable)"],
        ["Validity", "Up to 10 years; stays up to 6 months per visit"],
        ["Apply at", "US Embassy or Consulate in India (DS-160 online first)"],
        ["Documents", "DS-160, passport photos, bank statements, employment proof, return ticket"],
        ["Notes", "Savannah is a 4-hour drive or short flight from Atlanta (ATL) — consider combining both cities on one trip with a single US visa."],
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
        ["Processing", "Usually instant; allow 72 hours"],
        ["Fee", "$21 per person"],
        ["Validity", "2 years or until passport expiry; stays up to 90 days"],
        ["Apply at", "Official site: esta.cbp.dhs.gov — never use third-party sites"],
        ["Passport", "Must be an e-Passport (chip); valid for the entire stay"],
        ["Notes", "Canadian passport holders enter with eTA or by passport — no ESTA needed. Apply ESTA before booking flights."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$85–115/day",
      days: [
        {
          day: "Day 1",
          title: "Historic District Squares & River Street",
          items: [
            "13:00 — Arrive SAV; CATS bus from airport to downtown costs $1.50 (30 minutes) — rideshares cost $18–25 for the same ride.",
            "14:30 — Check in to a hostel or budget inn in the Victorian District ($50–70/night) — staying within walking distance of Forsyth Park keeps you central and saves on transport.",
            "15:30 — Walk the squares: Savannah has 22 public squares laid out by General James Oglethorpe in 1733 — the most intact 18th-century city plan in America. Start at Johnson Square (the oldest) and work south to Monterey Square. All free.",
            "18:00 — River Street at sunset: the nine-block cobblestone riverfront was once a cotton warehouse district and is now lined with restaurants, galleries, and souvenir shops. The Savannah River sunset from the bluff is extraordinary.",
            "19:30 — Dinner: a Low Country shrimp and grits at a River Street restaurant ($16–20); avoid the tourist-trap spots by looking for chalkboard menus.",
            "21:00 — Walk-in ghost tour: Savannah is consistently ranked one of the most haunted cities in America — budget walking ghost tours depart from City Market at 9pm ($18 per person).",
          ],
          cost: "$55–70 (bus, hostel, dinner, ghost tour)",
        },
        {
          day: "Day 2",
          title: "Bonaventure Cemetery & Low Country Boil",
          items: [
            "09:00 — Rideshare to Bonaventure Cemetery ($10 each way): the most hauntingly beautiful cemetery in the South — moss-draped oak avenues, Victorian statuary, and Confederate memorials. Made internationally famous by 'Midnight in the Garden of Good and Evil.' Free entry, open dawn to dusk.",
            "11:00 — Walk to Wormsloe Historic Site ($10 entry): the 1.5-mile oak-canopied avenue is the most photographed road in Georgia — 400 live oaks planted in the 1730s by Noble Jones form a tunnel of Spanish moss that stretches to the horizon.",
            "13:30 — Lunch at a neighbourhood spot: a Low Country boil (shrimp, sausage, corn, potatoes, Old Bay) at a casual Savannah restaurant costs $15–18.",
            "16:00 — Walk the Savannah College of Art and Design (SCAD) neighbourhood: SCAD occupies 70 historic buildings across the city, turning abandoned warehouses into world-class art galleries. The SCAD Museum of Art is free on certain days.",
            "19:30 — Dinner: Paula Deen's The Lady and Sons for the Southern buffet ($25/pp) — butter biscuits, fried chicken, and the full Low Country spread; arrive before 6pm to avoid the queue.",
          ],
          cost: "$60–75 (rideshares, cemetery, lunch, dinner)",
        },
        {
          day: "Day 3",
          title: "Forsyth Park, City Market & Departure",
          items: [
            "09:00 — Forsyth Park morning walk: the 30-acre Victorian park with the famous 1858 cast-iron fountain is best experienced at 9am with the light filtering through the Spanish moss. Free.",
            "10:30 — Cathedral of St John the Baptist (free): the most breathtaking interior in Savannah — French Gothic architecture from 1876 with hand-painted murals and rose windows that rival European cathedrals.",
            "12:00 — Brunch at a Broughton Street cafe: Savannah's main shopping street has excellent brunch spots serving shrimp Benedict, cheese grits, and biscuits with sausage gravy for $12–16.",
            "14:00 — City Market: the four-block open-air market in Franklin Square has local art, live music, and Savannah souvenirs; pick up a praline from River Street Sweets ($2.50 each) — the Southern candy tradition.",
            "16:00 — Final walk: the Iron Works district and Factor's Walk (the raised iron bridges that once connected cotton warehouses to the bluff) are the most architecturally interesting blocks in Savannah. Free.",
          ],
          cost: "$45–60 (food, market, transport to airport)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$160–220/day",
      days: [
        {
          day: "Day 1",
          title: "Squares, Broughton & River District",
          items: [
            "13:00 — Arrive SAV; rideshare ($22) to a boutique inn in the historic district ($130–175/night) — the best mid-range stays are in renovated cotton merchant townhouses on the squares.",
            "15:00 — Guided walking tour of the historic squares with a licensed guide ($28, 2 hours): the most efficient way to understand Savannah's unique grid plan, the individual history of each square, and the architectural evolution from colonial to antebellum to Victorian.",
            "18:00 — Cocktail at the Prohibition bar: a Savannah speakeasy in the basement of a 1920s building — the Georgia Peach bourbon cocktail ($14) in a candlelit vault is quintessential Savannah.",
            "20:00 — Dinner at The Olde Pink House ($45/pp): a 1771 mansion restaurant with live piano, Savannah Red Rice, and the best crab stew in the city; book a week ahead for weekend dining.",
          ],
          cost: "$185–220 (inn, tour, dinner, cocktails)",
        },
        {
          day: "Day 2",
          title: "Bonaventure, Wormsloe & Midnight Garden",
          items: [
            "09:00 — Private car tour to Bonaventure Cemetery and Wormsloe Historic Site with a guide ($95, 3 hours) — the guide explains the 'Midnight in the Garden of Good and Evil' locations, the history of the cemetery's notable residents, and the colonial plantation context of Wormsloe.",
            "13:00 — Lunch at Collins Quarter ($30/pp): Australian-influenced cafe in a Victorian building on Bull Street; the lavender latte and the short rib eggs Benedict are exceptional.",
            "15:00 — SCAD Museum of Art ($10): world-class rotating exhibitions in a dramatically converted railroad depot; Savannah is a serious art city and this is the best evidence.",
            "17:30 — Savannah Bee Company flagship store: honey tasting bar with local varietal honeys; a bottle of Savannah Tupelo honey ($18) is one of the city's finest edible souvenirs.",
            "20:00 — Dinner at Local 11ten ($50/pp): the most refined New South cooking in Savannah — local Georgia ingredients, seasonal menu, and an extraordinary wine list in an airy converted bank building.",
          ],
          cost: "$200–230 (guide, meals, museum)",
        },
        {
          day: "Day 3",
          title: "Forsyth Park, Ghost Tour & Farewell",
          items: [
            "09:00 — Forsyth Park: hire bikes from a local shop ($15/day) and ride the park circuit plus the Savannah waterfront trail to Wormsloe Road.",
            "11:00 — Cathedral of St John the Baptist and the Davenport House Museum ($8): one of Savannah's finest Federal-style houses with original period furnishings from 1820.",
            "13:00 — Farewell brunch at Alligator Soul ($35/pp): the most creative Southern cooking in Savannah — alligator sausage, smoked duck, and Georgia shrimp on stone-ground grits.",
            "16:00 — Premium evening ghost tour (departs 6pm, $35): the Savannah Ghost Tour uses original court documents and newspaper records from the 18th and 19th centuries; more historical than theatrical, with stops at the Sorrel-Weed House, Colonial Park Cemetery, and the Marshall House (reportedly Savannah's most haunted hotel).",
            "20:00 — Final dinner: oyster roast at a waterfront restaurant ($40/pp) — Georgia coast oysters roasted on an open fire are the traditional Lowcountry send-off.",
          ],
          cost: "$180–220 (bikes, museum, brunch, ghost tour, dinner)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at an Antebellum Mansion",
          items: [
            "13:00 — Private car from SAV ($55) to the Mansion on Forsyth Park, the Perry Lane Hotel, or The Kehoe House — Savannah's finest historic inns from $250–500/night.",
            "15:00 — Private architectural tour of the historic district with a preservation historian ($175, 2 hours): access to private interiors and garden tours of squares not open to the general public, arranged through the hotel.",
            "18:30 — Sunset cocktails at the Mansion on Forsyth Park rooftop bar: the view of Forsyth Park fountain with Spanish moss in evening light is Savannah's most cinematic scene. Cocktails $18–22.",
            "20:30 — Dinner at 700 Drayton inside the Mansion ($85/pp): French-influenced New South cooking with Georgia ingredients; the Low Country crab bisque and pan-seared Georgia grouper are the signatures.",
          ],
          cost: "$500–650 (hotel, private tour, cocktails, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Cemetery Tour & Coastal Georgia",
          items: [
            "08:30 — Private guided tour of Bonaventure Cemetery and Wormsloe with a Savannah historian and photographer ($200): sunrise at Bonaventure with a guide who can identify every notable grave and explain the horticultural history of the live oak plantings.",
            "12:00 — Private boat charter on the Savannah River or to Wassaw Island National Wildlife Refuge ($350 for 4 hours): the undeveloped barrier island has wild horses, loggerhead sea turtles, and pristine Georgia coast ecosystem accessed by private boat only.",
            "16:00 — Afternoon spa at the Mansion: a 90-minute Southern Comfort treatment using Georgia peach and sweet tea botanicals ($170).",
            "20:00 — Dinner at The Grey ($120/pp tasting menu): housed in a 1938 Greyhound bus terminal, The Grey is the most celebrated restaurant in Savannah — chef Mashama Bailey won a James Beard Award for Best Chef Southeast. Book 4–6 weeks ahead.",
          ],
          cost: "$600–800 (private tour, boat charter, spa, tasting menu)",
        },
        {
          day: "Day 3",
          title: "Private Ghost Tour & Farewell",
          items: [
            "10:00 — Private SCAD studio tour with an artist-in-residence ($150): SCAD's graduate students and faculty occasionally host private studio visits through the hotel concierge; access to working printmaking, glassblowing, or sequential art studios.",
            "13:00 — Farewell lunch at Husk Savannah ($75/pp): the Savannah outpost of the celebrated Lowcountry restaurant in a stunning 1897 Victorian residence; the corn porridge with local shrimp and the wood-smoked chicken are essential.",
            "16:00 — Private after-hours ghost tour of the Sorrel-Weed House ($150/group, maximum 6): the most haunted house in Savannah by documented reputation — a private paranormal investigation with EVP equipment and historical records, arranged through specialist tour companies.",
            "20:00 — Final dinner at The Olde Pink House ($90/pp with wine pairing): the candlelit 1771 mansion with live piano, white-gloved service, and the full Low Country tasting menu — the most quintessentially Savannah dining experience available.",
          ],
          cost: "$550–750 (studio tour, lunch, private ghost tour, dinner)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$50–70 (hostel or budget inn)",
      food: "$22–30 (casual restaurants + City Market)",
      transport: "$8–15 (CATS bus + rideshares)",
      activities: "$15–25 (ghost tour + Wormsloe)",
      total: "$85–115/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$130–175 (boutique historic inn)",
      food: "$55–80 (Southern restaurants + brunch spots)",
      transport: "$20–35 (rideshares + bike rental)",
      activities: "$35–55 (guided tours + museums)",
      total: "$160–220/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$250–500 (Mansion on Forsyth or Kehoe House)",
      food: "$120–200 (tasting menus + James Beard restaurants)",
      transport: "$55–350 (private car + boat charter)",
      activities: "$150–250 (private guides + spa + paranormal tour)",
      total: "$350–600+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "$35–55 (hostel dorm)",
      food: "$12–20 (City Market + pralines + cheap brunch)",
      transport: "$3–10 (CATS bus, walking the whole grid)",
      activities: "$0–18 (squares free, budget ghost tour)",
      total: "$55–80/day",
    },
    {
      tier: "👪 Family",
      accommodation: "$130–200 (vacation rental on a square)",
      food: "$60–90 (family restaurants + Paula Deen's)",
      transport: "$25–45 (rental car for Wormsloe)",
      activities: "$40–70 (ghost tour, Wormsloe, City Market)",
      total: "$180–250/day",
    },
  ],
  mistakes: [
    {
      icon: "👻",
      title: "Booking the cheapest ghost tour",
      desc: "Savannah has dozens of ghost tour operators, but quality varies enormously. The best tours use original historical documents, court records, and newspaper archives to tell documented stories. Avoid tours that lead you to the same 3 locations with theatrical costumes and no historical context. Expect to pay $25–35 for a quality walking ghost tour.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌿",
      title: "Missing Wormsloe Historic Site",
      desc: "Most visitors know Bonaventure Cemetery but skip Wormsloe, 10 minutes further south. The 1.5-mile avenue of 400 live oaks draped in Spanish moss and planted in the 1730s is the single most photogenic road in Georgia. Combined with Bonaventure in the same morning, you have two of the most atmospheric sites in the American South.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌡️",
      title: "Visiting in July or August",
      desc: "Savannah in summer is brutally hot and humid — regularly 95F with near-100% humidity. The Spanish moss traps heat and the brick streets radiate it. Spring (March–May) is magical with azaleas and wisteria blooming in every square; fall (October–November) is equally beautiful with lower humidity and golden afternoon light.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Only eating at Paula Deen's",
      desc: "The Lady and Sons buffet is a legitimate Savannah institution but it is one restaurant in a city with extraordinary dining. The Grey, Local 11ten, Alligator Soul, The Olde Pink House, and Collins Quarter represent one of the most impressive small-city restaurant scenes in America. Eat Paula Deen for lunch; explore the rest for dinner.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏛️",
      title: "Rushing through the squares",
      desc: "Savannah has 22 squares and the instinct is to tick them all off as quickly as possible. Instead, spend 20 minutes in 4–5 favourite squares: sit on a bench under the moss, read the historical markers, and let the city reveal itself slowly. Chippewa, Madison, Monterey, and Lafayette squares each have a distinct character that rewards slow travel.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "📚",
      title: "Read Midnight in the Garden of Good and Evil first",
      desc: "John Berendt's 1994 non-fiction novel about a Savannah murder trial spent 216 weeks on the New York Times bestseller list and put the city on the global tourism map. Reading it before your visit transforms every square, cemetery, and eccentric character you encounter. The book is available in every Savannah bookshop. Book Savannah tours at https://www.getyourguide.com/s/?q=Savannah+Georgia&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌳",
      title: "Visit Bonaventure Cemetery at sunrise",
      desc: "Bonaventure at 7am in spring or autumn is one of the most unearthly beautiful experiences in American travel — mist rising through the live oaks, birds in the canopy, and the Victorian monuments lit by low horizontal light. Rideshare there early, spend 90 minutes exploring, and leave before the tour groups arrive at 10am.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍑",
      title: "Buy Georgia peach products in season",
      desc: "Georgia peaches are in season May through August and Savannah's City Market and farmers markets sell fresh-picked peaches, peach preserves, peach bourbon sauce, and peach vinegar that are impossible to find outside the state. The Savannah Bee Company also stocks local Tupelo honey from the Okefenokee Swamp region — one of the world's rarest honeys.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎨",
      title: "Explore SCAD buildings like a gallery crawl",
      desc: "SCAD owns 70 historically significant buildings across Savannah and has restored them as studios, galleries, and academic spaces. Many are open to the public as free galleries. The SCAD Museum of Art, the Gutstein Gallery, and the Pei Ling Chan Gallery represent some of the most interesting contemporary art programming in the Southeast — all free or minimal admission.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is Savannah worth visiting for 3 days or should I go for longer?",
      a: "Three days is the ideal length for Savannah's historic core. The city is compact, walkable, and its main attractions are concentrated in the 2.5 square mile historic district. Unlike larger cities, three well-planned days cover all 22 squares, Bonaventure Cemetery, Wormsloe, River Street, the best restaurants, and at least one ghost tour. A fourth day works well if you add a day trip to Tybee Island beach or combine with a drive to Charleston (2 hours north).",
    },
    {
      q: "What is the best ghost tour in Savannah?",
      a: "Savannah's best-regarded ghost tours are those using documented historical sources rather than theatrical performance. The Haunted Savannah History Tour ($28) covers the most historically grounded material. For premium experiences, the Sorrel-Weed House offers private after-hours paranormal investigations with EVP equipment ($120–150/group). Avoid any tour that cannot cite specific documented sources for its ghost stories.",
    },
    {
      q: "How far is Savannah from Charleston and can I visit both?",
      a: "Savannah and Charleston are 100 miles apart, connected by I-26 and US-17 — approximately a 2-hour drive. Many visitors combine both cities on a single trip: fly into one, drive to the other, and fly out. Savannah tends to be slightly cheaper and has a more arts-focused scene; Charleston has more antebellum plantation estates and a slightly grander architectural scale. Together, they represent the definitive American South city pair.",
    },
    {
      q: "What is Gullah Geechee culture and where do I experience it in Savannah?",
      a: "Gullah Geechee is the culture of enslaved Africans and their descendants who maintained distinct West African traditions on the Sea Islands of South Carolina and Georgia. In Savannah, you can experience Gullah culture through the Beach Institute ($7), which houses the Jonathan Green collection of Gullah paintings; Gullah food at restaurants serving red rice, okra stew, and sweet potato pie; and through specific cultural tour operators who run Sea Island excursions with Gullah community guides.",
    },
  ],
  combineWith: ["charleston-sc-4-days", "asheville-nc-3-days", "jekyll-island-2-days"],
  relatedSlugs: ["charleston-sc-4-days", "new-orleans-4-days", "nashville-3-days"],
  galleryQuery: "savannah georgia squares spanish moss historic district",
};

export const metadata: Metadata = {
  title: "Savannah Georgia in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Savannah, Georgia itinerary — moss-draped squares, Bonaventure Cemetery, River Street, Low Country boil, ghost tours, Forsyth Park, and the best Southern restaurants. Budget $85/day to luxury historic mansions.",
  keywords: [
    "Savannah Georgia itinerary",
    "Savannah 3 days",
    "Savannah travel guide 2026",
    "Savannah ghost tour",
    "Bonaventure Cemetery",
    "Forsyth Park Savannah",
    "Low Country boil",
    "Savannah squares",
    "Savannah visa Indian passport",
    "Georgia travel",
  ],
  openGraph: {
    title: "Savannah Georgia in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Moss-draped squares, Bonaventure Cemetery, River Street, ghost tours, and the best Low Country cooking in the South — Savannah in 3 days from $85/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/savannah-georgia-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savannah Georgia in 3 Days: Complete 2026 Itinerary",
    description: "Spanish moss, ghost tours, Bonaventure Cemetery, and Low Country shrimp and grits — the complete Savannah guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/savannah-georgia-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Savannah Georgia in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Savannah Georgia in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/savannah-georgia-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Savannah, Georgia",
      description:
        "Savannah, Georgia — America's most hauntingly beautiful city, known for 22 moss-draped historic squares, Bonaventure Cemetery, Forsyth Park, River Street, and extraordinary Low Country cuisine.",
      geo: { "@type": "GeoCoordinates", latitude: 32.0835, longitude: -81.0998 },
    },
  ],
};

export default function SavannahPage() {
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
