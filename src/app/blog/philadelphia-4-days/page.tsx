import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Philadelphia",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "philadelphia-4-days",
  heroQuery: "Philadelphia skyline Liberty Bell Independence Hall historic",
  heroAlt: "Philadelphia skyline with the Liberty Bell and Independence Hall in the foreground",
  category: "North America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Philadelphia is America's most underrated major city — the place where a nation was born, where Rocky Balboa ran those steps, and where a cheesesteak debate can last longer than a city council meeting. The Liberty Bell and Independence Hall sit in the same walkable square mile as Reading Terminal Market's Amish pretzels. Eastern State Penitentiary is the most atmospheric Gothic ruin in North America. And the Philadelphia Museum of Art's steps remain the most cinematic staircase on the continent. Four days uncovers all of it — from the cradle of democracy to the murals of North Philadelphia.",
  stats: { duration: "4 Days", budgetFrom: "$70", bestMonths: "Apr–Jun or Sep–Nov", airport: "PHL" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Liberty Bell & Old City" },
    { id: "day2", emoji: "📅", label: "Day 2 — Eastern State & Art Museum" },
    { id: "day3", emoji: "📅", label: "Day 3 — Reading Terminal & Murals" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — B-2 Tourist Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "B-1/B-2 Tourist Visa"],
        ["Processing", "2–8 weeks (consular interview required)"],
        ["Fee", "$185 USD (non-refundable MRV fee)"],
        ["Validity", "Up to 10 years, 6 months max per entry"],
        ["Apply at", "US Embassy New Delhi, Mumbai, Chennai, Hyderabad, or Kolkata"],
        ["Documents", "DS-160, bank statements, employer letter, ITR, property/family ties proof"],
        ["Notes", "Philadelphia is in the New York consular district — Indian applicants may interview at the Mumbai or Delhi consulate. Apply 3–5 months ahead."],
      ],
    },
    {
      flag: "🇬🇧",
      title: "UK / EU / AU / CA — ESTA Visa Waiver",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "ESTA (Electronic System for Travel Authorization)"],
        ["Processing", "Instant to 72 hours online"],
        ["Fee", "$21 USD per person"],
        ["Validity", "2 years or until passport expiry, 90 days per visit"],
        ["Apply at", "esta.cbp.dhs.gov — only the official US government site"],
        ["Passport", "Must be an e-Passport (biometric chip required)"],
        ["Notes", "Philadelphia is 95 minutes from NYC by Amtrak — easy to combine as a multi-city itinerary with one ESTA."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$70–100/day",
      days: [
        {
          day: "Day 1",
          title: "Liberty Bell, Independence Hall & Old City",
          items: [
            "09:00 — Liberty Bell Center (free, no ticket required) — the 2,080-pound bell cast in 1752 is housed in a glass pavilion at 526 Market St; arrive before 10am to avoid the queue; the crack is genuine and has been documented since 1846",
            "10:00 — Independence Hall (free, timed entry tickets from recreation.gov — $1 reservation fee) — the Georgian building where the Declaration of Independence was signed in 1776 and the Constitution debated in 1787; ranger-led tours run every 30 minutes",
            "11:30 — Philadelphia's Old City neighborhood: Elfreth's Alley (free), America's oldest continuously inhabited residential street since 1702 — 32 Colonial-era brick homes on a cobblestoned lane; the museum at #126 opens for tours on weekends ($5)",
            "13:00 — Lunch: a proper Philadelphia cheesesteak from Geno's Steaks or Pat's King of Steaks on South 9th St ($12–14 for a 9-inch whiz wit — with Cheez Whiz and fried onions); the two rivals face each other across the intersection and the debate is entirely real",
            "15:00 — Philadelphia Museum of Art exterior: run the Rocky steps (the 72-step staircase to the Doric portico is the most famous set of movie stairs in America); free to run; the view from the top looking down the Benjamin Franklin Parkway is magnificent",
            "16:30 — Explore Rittenhouse Square ($0) — the most beautiful of Philadelphia's five original William Penn squares; lined with brownstones, outdoor cafés, and dog walkers; the farmers market runs Tuesday and Saturday mornings",
            "19:00 — Dinner on South Street: Jim's Steaks (another legendary cheesesteak option, $12–15) or a pizza by the slice from Lorenzo's Pizza ($3.50/slice) — South Street is Philadelphia's bohemian commercial strip with vintage shops and bars",
          ],
          cost: "$40–55 (food, transit, free attractions)",
        },
        {
          day: "Day 2",
          title: "Eastern State Penitentiary & Philadelphia Museum of Art",
          items: [
            "09:30 — Eastern State Penitentiary ($20 general admission, 2027 Fairmount Ave) — the world's most famous prison, open 1829–1971; Al Capone's luxuriously furnished cell is on display; the crumbling Gothic fortress is hauntingly atmospheric; the audio tour narrated by Steve Buscemi is excellent",
            "11:30 — Walk down Fairmount Ave to the Philadelphia Museum of Art ($25 general admission) — the museum at the top of the Parkway holds over 240,000 objects; the Arms and Armor hall, the complete Japanese tea house, and the Impressionist galleries are highlights; the Rocky statue by A. Thomas Schomburg stands at the bottom of the steps",
            "13:30 — Brown bag lunch on the museum steps or at Fairmount Park (bring food from nearby Whole Foods on South Street) — the park along the Schuylkill River has benches and views of the river and the Boathouse Row Victorian boathouses",
            "15:00 — Barnes Foundation ($25, 2025 Benjamin Franklin Pkwy) — 181 Renoirs, 69 Cézannes, and 59 Matisses in a deliberately non-chronological hanging arrangement created by Albert Barnes himself; one of the world's most important private art collections",
            "18:00 — BYOB dinner in Fairmount: Zorba's Tavern ($15–22 for Greek mains, bring your own wine — Philadelphia's BYOB restaurant scene is unique in America; many excellent restaurants have no liquor license and charge no corkage fee)",
            "20:30 — Evening walk along the Schuylkill River Trail or a beer at Prohibition Taproom (Old City, $6–7/pint)",
          ],
          cost: "$55–75 (prison, museums, dinner, beer)",
        },
        {
          day: "Day 3",
          title: "Reading Terminal Market & Mural Arts",
          items: [
            "09:00 — Reading Terminal Market (12th & Arch Streets, free entry) — America's oldest continuously operating farmers market, operating since 1892; the Amish vendors from Lancaster County set up Tuesday–Saturday with hand-rolled pretzels ($1.50), shoofly pie ($4), and scrapple; DiNic's roast pork sandwich ($13) is one of the great American sandwiches",
            "10:30 — Finish browsing Reading Terminal; the Pennsylvania Dutch vendors sell Lancaster County jams, cheeses, and baked goods at prices far below specialty grocery stores",
            "12:00 — Mural Arts Philadelphia self-guided walking tour (free map at muralarts.org) — Philadelphia has over 4,000 murals making it the largest mural program in the country; the North Philadelphia murals on Broad Street and the Magic Gardens on South Street are the most concentrated areas",
            "14:00 — Philadelphia's Magic Gardens (1020 South Street, $15) — mosaic sculpture garden by Isaiah Zagar covering indoor and outdoor spaces with tile, glass, and found objects; one of Philadelphia's most photographed places and a genuine outsider art masterpiece",
            "16:00 — South Philadelphia's Italian Market (9th Street between Wharton and Fitzwater) — the oldest open-air market in the US, continuously operating since 1884; butchers, fishmongers, cheese shops, and produce stalls under awnings along 7 blocks",
            "18:30 — Evening cheesesteak or hoagie from a South Philly corner shop ($10–14); walk along the Delaware Waterfront for sunset views of the Benjamin Franklin Bridge lit at night",
          ],
          cost: "$45–65 (market food, Magic Gardens, transit)",
        },
        {
          day: "Day 4",
          title: "Penn's Landing, National Constitution Center & Departure",
          items: [
            "09:00 — National Constitution Center (525 Arch St, $16) — the only museum in America dedicated solely to the US Constitution; the Signers' Hall bronze statues of all 39 signatories and the Freedom Rising theatrical presentation are the highlights",
            "11:00 — Christ Church Burial Ground (2nd & Market, $5) — Benjamin Franklin's grave is here; tourists leave pennies on the grave per a local tradition based on the Poor Richard's Almanack aphorism 'A penny saved is a penny earned'",
            "12:30 — Final lunch: a proper Philadelphia hoagie from Sarcone's Bakery (9th & Fitzwater) — an Italian hoagie on fresh-baked Sarcone's bread with sharp provolone and hot peppers is a Philadelphia exit ritual for locals; $9–12",
            "14:00 — Penn's Landing and the Delaware Waterfront: the Independence Seaport Museum ($20) has the USS Olympia (1892 cruiser) and USS Becuna (WWII submarine) moored alongside; alternatively, walk the waterfront free and see the Benjamin Franklin Bridge from below",
            "16:30 — Final stop: the Reading Terminal Market for one last soft pretzel and a piece of whoopie pie for the road; then SEPTA Regional Rail to 30th Street Station or PHL airport (downtown to airport: $6.75, 25 minutes on SEPTA Airport Line)",
          ],
          cost: "$40–55 (museum, lunch, airport transit)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$155–230/day",
      days: [
        {
          day: "Day 1",
          title: "Historic District Private Tour & Rittenhouse Dinner",
          items: [
            "11:00 — Check in to a boutique hotel near Rittenhouse Square or Old City ($140–200/night) — The Rittenhouse Hotel or AKA Rittenhouse Square are the mid-range sweet spots; Hotel Monaco in Old City has excellent design credentials at similar prices",
            "13:00 — Guided walking tour of the Independence National Historical Park ($30–45, 2 hours) — local certified guides cover the Liberty Bell, Independence Hall, Carpenters' Hall, and City Tavern with historical detail unavailable on self-guided tours",
            "15:30 — Philadelphia's Old City gallery walk: 3rd Friday gallery openings on the first Friday of the month are free; the neighborhood's 50+ galleries span printmaking, photography, and contemporary painting",
            "18:30 — Dinner at Vernick Food & Drink (Rittenhouse, $40–55/pp) — Greg Vernick's acclaimed American restaurant; the wood-roasted vegetables, whole fish, and raw bar are consistently outstanding; make reservations 2 weeks ahead",
            "21:00 — After-dinner cocktail at Franklin Bar (Old City) — hidden basement cocktail bar named for Benjamin Franklin; the pre-Prohibition cocktail menu and the wood-panelled aesthetic are Philadelphia bar culture at its finest",
          ],
          cost: "$195–260 (hotel, guided tour, dinner, cocktails)",
        },
        {
          day: "Day 2",
          title: "Eastern State, Art Museum & Barnes Foundation",
          items: [
            "09:30 — Eastern State Penitentiary with premium audio tour ($20) — spend a full 2 hours; the night programs (Halloween season) sell out months in advance but the standard daytime visit is equally atmospheric; the deteriorating cellblocks photographed through iron doors are extraordinary",
            "12:00 — Lunch at a Fairmount neighborhood BYOB: La Colombe Coffee Roasters (2nd & Market) is the city's finest café chain — cold brew and pastries; or Sabrina's Café (Fairmount Ave, $15–22) for their over-the-top stuffed French toast",
            "13:30 — Philadelphia Museum of Art (2 hours, $25) — the Impressionist collection (Renoir, Monet, Degas), the Arms and Armor hall, and the Thomas Eakins Portrait Gallery are the signature experiences; the museum shop has excellent Philadelphia prints and design books",
            "16:00 — Barnes Foundation ($25, combined ticket with PMA available) — the 1926 collection hanging system (works arranged by aesthetic principle rather than period) makes every gallery visit different from a conventional museum; the post-Impressionist collection is staggering",
            "19:30 — Dinner at Zahav (Old City, $55–75/pp) — Michael Solomonov's James Beard Award–winning Israeli restaurant; the hummus, salatim, and the whole-roasted lamb shoulder are seminal dishes; reservations essential 3–4 weeks ahead",
          ],
          cost: "$200–270 (museums, BYOB lunch, dinner at Zahav)",
        },
        {
          day: "Day 3",
          title: "Reading Terminal Deep Dive & Mural Arts Tour",
          items: [
            "09:00 — Reading Terminal Market vendor tour ($45, run by the Market itself on select Saturdays) — guides introduce the Amish vendors, the city's oldest butcher (Martin's Quality Meats, est. 1922), and the backstory of the market's 1892 founding above the Reading Railroad terminal below",
            "11:30 — Mural Arts Philadelphia guided trolley or walking tour ($30–50) — the organization that manages Philly's 4,000+ murals offers guided tours of the North Philadelphia corridor, explaining the community commissioning process and the artists' stories behind the most significant works",
            "14:00 — Philadelphia's Italian Market lunch: Di Bruno Bros. (930 S 9th St) for an artisan cheese and charcuterie tasting ($20–30 for assembled board); the 1939 shop has the finest Italian cheese and cured meat selection in the city",
            "16:30 — Rittenhouse Square afternoon: the square is surrounded by architectural masterpieces including the Curtis Institute of Music (free concerts sometimes open to public) and the Rosenbach Museum ($15, rare books including Maurice Sendak originals)",
            "19:30 — Dinner at CookNSolo restaurant group (Goldie or Federal Donuts, both on Sansom St) — the $15 Federal Donuts fried chicken sandwich is a Philadelphia institution; Goldie's falafel is James Beard–nominated street food elevated to a sit-down experience",
          ],
          cost: "$180–250 (tours, market tasting, dinner)",
        },
        {
          day: "Day 4",
          title: "Constitution Center & South Street Departure",
          items: [
            "09:00 — National Constitution Center ($16, early admission beat the school groups) — the Annenberg Center for Education and Culture's theatrical presentation 'Freedom Rising' is a 17-minute multi-media overview of the Constitution's history that's genuinely moving",
            "11:00 — Christ Church (20 N American St, suggested donation $5) — Benjamin Franklin's personal pew and the oldest Anglican church in Pennsylvania; the steeple was the tallest structure in North America for decades after its 1754 completion",
            "12:30 — Farewell lunch at City Tavern (138 S 2nd St, $20–30 for lunch) — an 18th-century tavern that was the social center of the Continental Congress; the recreation of Colonial recipes including Martha Washington's Chocolate Mousse and Thomas Jefferson's sweet potato biscuits is both educational and delicious",
            "15:00 — Final walk through Society Hill — Philadelphia's most intact Colonial residential neighborhood with 18th-century brick townhouses; the Head House Square is the oldest surviving market shed in America (1745); the neighborhood is free to explore",
            "17:00 — SEPTA Regional Rail from Jefferson or Market East Station to PHL airport (30 minutes, $6.75) — vastly faster than traffic on I-76; runs every 30 minutes",
          ],
          cost: "$120–160 (museum, historic sites, farewell lunch)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$400–700/day",
      days: [
        {
          day: "Day 1",
          title: "Private Historic District Tour & Fine Dining",
          items: [
            "13:00 — Check in to The Rittenhouse Hotel ($450–650/night) or Four Seasons Philadelphia at Comcast Center ($500–750/night) — the Rittenhouse overlooks the most beautiful square in the city; the Four Seasons occupies floors 57–59 of the Comcast Center with panoramic city views",
            "15:00 — Private historian-led Independence Hall tour ($200/group) — licensed historians with access to rarely-visited secondary rooms of Independence Hall and Congress Hall; the perspective on the founding era is entirely different from a standard ranger tour",
            "17:30 — Cocktails at the Four Seasons' Jean-Georges Philadelphia Sky High Bar (57th floor) — the city and Delaware River views at golden hour are among the best rooftop views on the East Coast; cocktails $20–28",
            "20:00 — Dinner at Lacroix at the Rittenhouse ($90–130/pp, seasonal tasting menu available) — Jason Cichonski's technically refined Contemporary American cooking; the chef's table in the kitchen is available by advance request for groups of 2–4; view of Rittenhouse Square from the dining room",
          ],
          cost: "$600–800 (hotel, private tour, cocktails, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Museum Access & Eastern State After-Dark",
          items: [
            "09:00 — Philadelphia Museum of Art private curator tour ($300, arranged through PMA's group services) — behind-the-scenes access to the conservation department and the architectural drawings collection; the curator explains how the Fairmount site was chosen and the Beaux-Arts building constructed over 46 years",
            "12:00 — Lunch at Vet 2 Table in the Barnes Foundation restaurant ($35–55 for mains) — the Barnes's in-house restaurant uses the institution's own garden; the warm atmosphere and art views make it one of Philadelphia's finest lunch rooms",
            "14:00 — Barnes Foundation private collections tour ($200, by arrangement with the Director of Education) — the unconventional 1926 hanging system and Barnes's philosophy of art education explained by a Barnes Fellow; the provenance stories behind the 181 Renoirs are extraordinary",
            "17:00 — Eastern State Penitentiary private twilight tour ($80/person, by appointment) — the standard tour finishes at 5pm; private twilight tours in the off-season allow you to experience the crumbling blocks at last light when the atmosphere intensifies dramatically",
            "20:30 — Dinner at Zahav ($85–120/pp with the full mezze experience) — book the family-style dinner for the complete Zahav experience including the hummus, whole-roasted lamb, and the malabi ice cream; the best restaurant in Philadelphia by most local accounts",
          ],
          cost: "$650–850 (private tours, Barnes lunch, Zahav dinner)",
        },
        {
          day: "Day 3",
          title: "Mural Arts Private Tour & Reading Terminal Chef's Table",
          items: [
            "09:00 — Mural Arts Philadelphia private VIP tour ($200, custom 3-hour walking tour with lead curator) — the organization's own curators design routes based on your interests; access to artists' studios in some cases; the North Philadelphia corridor murals have stories requiring expert interpretation",
            "12:30 — Reading Terminal Market private chef's tour and tasting ($120/person, arranged through Frog Commissary catering) — a chef guide visits 8–10 market vendors, explains the Lancaster County Amish food culture, and assembles a curated tasting spanning the market's history",
            "15:30 — Spa afternoon at The Rittenhouse Hotel spa or Rescue Rittenhouse Spa ($180–280 for signature treatments) — the Rittenhouse's spa uses locally sourced Pennsylvania botanicals",
            "19:00 — Pre-dinner drinks at Stir (4th & Walnut) — Philadelphia's finest cocktail bar with seasonal spirits from local distilleries including Bluebird Distilling and Manatawny Still Works",
            "20:30 — Dinner at Vetri Cucina (1312 Spruce St, $130–180/pp, tasting menu) — Marc Vetri's flagship Italian restaurant is the standard against which all Philadelphia tasting menus are measured; the hand-rolled pasta and truffle dishes are Italian cooking at its most refined in America; reserve 4–6 weeks ahead",
          ],
          cost: "$700–950 (private tours, spa, Vetri dinner)",
        },
        {
          day: "Day 4",
          title: "Private Constitution Center & Farewell Brunch",
          items: [
            "09:00 — National Constitution Center private opening tour ($150, arranged through NCG group services) — the center's senior historian leads a pre-opening tour of Signers' Hall and the collection of original Constitutional documents including the Bill of Rights broadside; extraordinary access to 1780s primary sources",
            "11:00 — Christ Church private historical society tour ($100, by appointment with the parish historian) — the parish historian discusses the founding-era congregation including Washington's pew, Franklin's grave, and the correspondence between Jefferson and the Christ Church rector",
            "13:00 — Farewell lunch at Lacroix at the Rittenhouse (à la carte, $45–70/pp) — order the cheese plate sourced from Pennsylvania artisan producers and the seasonal risotto; the view of Rittenhouse Square in late afternoon is the perfect Philadelphia farewell scene",
            "15:30 — Final luxury shopping: Di Bruno Bros. flagship (1730 Chestnut St) for Pennsylvania cheeses, truffle products, and imported Italian pantry items — their gift boxes make excellent Philadelphia souvenirs; the Rittenhouse location opened in 1939",
            "17:30 — Private car service to PHL airport ($80–100) — the hotel concierge arranges black car service timed to your departure; the Rittenhouse and Four Seasons both offer direct airport transfers with luggage handling",
          ],
          cost: "$500–700 (private tours, farewell lunch, airport car)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$40–65 (hostel or budget hotel, Old City)",
      food: "$20–35 (cheesesteaks, Reading Terminal, BYOB)",
      transport: "$5–10 (SEPTA subway + walk)",
      activities: "$15–25 (select paid attractions + free historic sites)",
      total: "$70–135/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$140–200 (boutique hotel, Rittenhouse or Old City)",
      food: "$55–85 (Zahav, Vernick, BYOB dinners)",
      transport: "$15–30 (SEPTA + occasional Uber)",
      activities: "$45–70 (museums, guided tours)",
      total: "$155–230/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$450–750 (Rittenhouse Hotel, Four Seasons)",
      food: "$150–250 (Vetri Cucina, Lacroix, tasting menus)",
      transport: "$50–100 (private car, black car airport transfer)",
      activities: "$200–400 (private museum tours, exclusive access)",
      total: "$400–700+/day",
    },
    {
      tier: "🥩 Food Focus",
      accommodation: "$70–110 (South Philly Airbnb near Italian Market)",
      food: "$40–70 (cheesesteaks, Reading Terminal, Di Bruno Bros, BYOB)",
      transport: "$8–15 (SEPTA + walking South Philly)",
      activities: "$20–40 (Magic Gardens, Mural Arts, food tours)",
      total: "$138–235/day",
    },
    {
      tier: "🏛️ History Focus",
      accommodation: "$80–140 (Old City hotel, walk to historic sites)",
      food: "$25–45 (City Tavern, Reading Terminal, hoagies)",
      transport: "$5–15 (walking + SEPTA, most sites are adjacent)",
      activities: "$40–75 (NCC, Independence Hall, Eastern State, Barnes)",
      total: "$150–275/day",
    },
  ],
  mistakes: [
    {
      icon: "🧀",
      title: "Ordering a cheesesteak wrong at Pat's or Geno's",
      desc: "At Pat's and Geno's, you must order in the correct Philly style: say 'whiz wit' for Cheez Whiz and fried onions, or 'whiz witout' for no onions. Say your order while moving — there is a visible sign at Pat's explaining the etiquette. Hesitating in the line at peak hours causes genuine social friction.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎟️",
      title: "Not reserving Independence Hall timed entry in advance",
      desc: "Timed entry tickets for Independence Hall at recreation.gov fill up weeks in advance in peak season (April–October). The $1 reservation fee is the best dollar you'll spend. Walk-up standby tickets are sometimes available at 8:30am, but the queue forms 45 minutes before the visitor center opens.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏥",
      title: "Skipping Eastern State Penitentiary",
      desc: "Most visitors to Philadelphia skip Eastern State in favor of the historic district. This is a genuine mistake. Eastern State Penitentiary is one of the most atmospheric historical sites in America — the crumbling Gothic cellblocks, Al Capone's furnished cell, and the Steve Buscemi audio tour are compelling in ways that no other site in Philadelphia approaches.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🚗",
      title: "Driving and parking in Center City",
      desc: "Philadelphia's Center City parking costs $20–40/day in garages, and street parking is metered and aggressively enforced. SEPTA subway and bus cover all major tourist attractions efficiently. The Market-Frankford Line (the El) runs along Market Street and connects Old City to West Philadelphia in minutes. Save driving for day trips only.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌧️",
      title: "Visiting Reading Terminal Market at lunchtime on a weekend",
      desc: "Reading Terminal Market is Philadelphia's premier food destination — and at 12:30pm on a Saturday, it is a shoulder-to-shoulder crush with 20-minute queues at DiNic's and the Amish counters. Visit Tuesday through Thursday morning (9–11am) for the full Amish vendor lineup, no queues, and a calm experience.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  tips: [
    {
      icon: "🥨",
      title: "Embrace Philadelphia's BYOB restaurant culture",
      desc: "Philadelphia has hundreds of excellent restaurants with no liquor license that allow you to bring your own wine or beer with zero corkage fee. A BYOB dinner at a first-rate Italian or Middle Eastern restaurant in Center City costs $25–35/pp for food while you drink $15 wine from a corner bottle shop. This is one of America's great dining hacks and it's entirely unique to Philadelphia. Book activities and tours at https://www.getyourguide.com/s/?q=Philadelphia&partner_id=PSZA5UI",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚇",
      title: "Use SEPTA for all Center City travel",
      desc: "SEPTA's subway and bus network covers all tourist areas efficiently. A single ride is $2.50 with the Key card ($4.95 to purchase, reloadable). The Market-Frankford Line connects Old City to Rittenhouse Square in 10 minutes. The Airport Line runs to PHL from Center City for $6.75. Day passes ($13) cover unlimited rides.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🎨",
      title: "Download the Mural Arts Philadelphia map before your visit",
      desc: "Philadelphia's 4,000+ murals represent the largest public art program in the United States. The free Mural Arts app and PDF map (muralarts.org) identifies every major work by location, artist, and commission date. The North Broad Street corridor, South Street, and the Italian Market area have the densest concentrations. No tour required — it's a free afternoon of world-class public art.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏃",
      title: "Run the Rocky steps at sunrise for the full cinematic experience",
      desc: "The 72 steps of the Philadelphia Museum of Art are one of America's most iconic movie locations — Rocky ran them in 1976 and the image became synonymous with perseverance. At sunrise, you often have them to yourself. The Rocky bronze statue by A. Thomas Schomburg stands at the base of the steps to the right. The museum itself opens at 10am.",
      color: "bg-amber-50 border-amber-200",
    },
  ],
  faqs: [
    {
      q: "What are the must-eat foods in Philadelphia beyond the cheesesteak?",
      a: "Philadelphia's food culture extends well beyond the cheesesteak. The roast pork sandwich from DiNic's at Reading Terminal Market (topped with sharp provolone and broccoli rabe) is arguably better than the cheesesteak. Soft pretzels from the Amish vendors at Reading Terminal ($1.50) are the city's true street snack. A tomato pie (a rectangular room-temperature pizza dressed with oil and crushed tomatoes) from Sarcone's Bakery in South Philly is Philadelphia's original fast food. And the hoagie — long roll, Italian cold cuts, sharp provolone, hot peppers, olive oil — from any South 9th Street deli is the proper Philadelphia sandwich experience.",
    },
    {
      q: "How do I get from Philadelphia International Airport (PHL) to Center City?",
      a: "SEPTA's Airport Line runs from PHL directly to Jefferson, Suburban, and 30th Street Stations in Center City for $6.75, taking about 25 minutes. Trains run every 30 minutes from 5am to midnight. Uber/Lyft from PHL to Center City costs $25–40 depending on traffic. The SEPTA option is almost always faster in rush hour and significantly cheaper. Buy the Key card ($4.95) at the airport and load the fare.",
    },
    {
      q: "Is Philadelphia safe for tourists?",
      a: "Philadelphia's primary tourist areas — Old City, Center City, Rittenhouse Square, Fairmount, South Street, and the Italian Market — are safe and popular with visitors year-round. Like all major US cities, certain North and West Philadelphia neighborhoods require standard urban awareness. Stick to the tourist corridor during your first visit. The Old City neighborhood at night, Rittenhouse Square, and the waterfront are active and well-lit after dark.",
    },
    {
      q: "Can I visit Philadelphia as a day trip from New York City?",
      a: "Absolutely — Philadelphia is 95 miles from New York Penn Station and Amtrak's Northeast Regional makes the journey in 1 hour 20 minutes ($30–80 depending on when you book). Amtrak's Acela does it in 1 hour for $80–150. But a day trip rushes Independence Hall, the Liberty Bell, and Reading Terminal into a compressed schedule. Two nights is the minimum to do Philadelphia properly. A 4-day itinerary covering all neighborhoods requires staying overnight.",
    },
  ],
  combineWith: ["new-york-5-days", "washington-dc-4-days", "boston-3-days"],
  relatedSlugs: ["new-york-5-days", "washington-dc-4-days", "boston-3-days", "chicago-3-days"],
  galleryQuery: "Philadelphia Liberty Bell Independence Hall Reading Terminal Market Eastern State Penitentiary",
};

export const metadata: Metadata = {
  title: "Philadelphia in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Philadelphia itinerary — Liberty Bell, Independence Hall, Reading Terminal Market, cheesesteaks, Eastern State Penitentiary, Mural Arts, and the Rocky steps at the Philadelphia Museum of Art. Budget $70/day to luxury hotels.",
  keywords: [
    "Philadelphia itinerary",
    "Philadelphia 4 days",
    "Philadelphia travel guide 2026",
    "Liberty Bell",
    "Independence Hall",
    "Reading Terminal Market",
    "Eastern State Penitentiary",
    "Philadelphia cheesesteak",
    "Rocky steps Philadelphia Museum of Art",
    "Philadelphia visa Indian passport",
  ],
  openGraph: {
    title: "Philadelphia in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Liberty Bell, Independence Hall, cheesesteaks, Eastern State Penitentiary, Mural Arts, and the Rocky steps — Philadelphia in 4 days from $70/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/philadelphia-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philadelphia in 4 Days: Complete 2026 Itinerary",
    description:
      "Liberty Bell, cheesesteaks, Eastern State Penitentiary, Zahav, the Rocky steps, and Reading Terminal Market — Philly in 4 days from $70/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/philadelphia-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Philadelphia in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Philadelphia in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/philadelphia-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Philadelphia, Pennsylvania",
      description:
        "Philadelphia, Pennsylvania — the Liberty Bell, Independence Hall, Reading Terminal Market, cheesesteaks, Eastern State Penitentiary, the Philadelphia Museum of Art Rocky steps, and 4,000 Mural Arts murals.",
      geo: { "@type": "GeoCoordinates", latitude: 39.9526, longitude: -75.1652 },
    },
  ],
};

export default function PhiladelphiaPage() {
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
