import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Edinburgh",
  country: "UK",
  countryFlag: "🇬🇧",
  slug: "edinburgh-4-days",
  heroQuery: "edinburgh castle scotland uk skyline old town",
  heroAlt: "Edinburgh Castle on volcanic rock with Old Town skyline Scotland UK",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Edinburgh at 6am in summer — the Royal Mile utterly empty, Arthur's Seat glowing orange above the Old Town, mist still wrapped around the castle on its volcanic plug — is one of those moments that makes you understand why Scotland has produced so many poets. Four days gives you the Castle, a sunrise hike up Arthur's Seat, the Old Town medieval closes, a day trip to either Loch Ness or Stirling, and enough time in the whisky bars of Grassmarket to conclude that Scotch deserves its global reputation.",
  stats: { duration: "4 Days", budgetFrom: "£45", bestMonths: "May–Sep (Edinburgh Festival Aug)", airport: "EDI (Edinburgh Airport)" },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["UK Standard Visitor Visa", "Scotland is part of the United Kingdom, so the same Standard Visitor Visa covers Edinburgh, Loch Ness, the Highlands, and all of Scotland. Apply via vfsglobal.com or the official UKVI portal. Fee: £115. Processing: typically 3 weeks; apply 8+ weeks ahead in summer. Visa validity: up to 6 months."],
        ["Key Documents", "Passport valid 6+ months beyond travel, last 6 months' bank statements, confirmed accommodation (hostels or hotels both accepted), return flight itinerary, employment letter or payslips, and proof of strong ties to India. Scotland is an increasingly popular destination — applications are routinely approved for genuine tourism purposes."],
        ["London + Edinburgh Combo", "The same UK Standard Visitor Visa covers the entire UK including England, Scotland, Wales, and Northern Ireland. If combining London and Edinburgh (a very popular itinerary), one visa application covers the whole trip. Train from London to Edinburgh Waverley is 4.5 hours — book via Trainline for advance fares from £25."],
        ["Travel Insurance", "Not mandatory for UK visa applications but strongly recommended. NHS services are not available to non-residents; private medical treatment in Scotland is expensive. Comprehensive travel insurance including emergency repatriation is standard advice."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports & ETA",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["UK Electronic Travel Authorisation (ETA)", "From January 2025, visitors from the USA, Canada, Australia, New Zealand, EU member states, and most other visa-exempt countries need a UK ETA before travel. Cost: £10. Apply via the UK ETA app or at gov.uk. Processing: typically same-day, sometimes a few hours. Valid for 2 years or until passport expiry. Covers the whole UK including Scotland."],
        ["No Schengen Required", "Scotland is not part of the Schengen Zone. Days in Scotland do not count toward the EU's 90/180-day Schengen limit. If combining Edinburgh with European travel (Paris, Amsterdam, etc.), track your UK and Schengen days separately."],
        ["Irish Citizens", "Ireland and the UK form the Common Travel Area — Irish citizens have complete freedom of movement throughout the UK including Scotland with no visa, ETA, or border checks required."],
        ["Scottish Independence Note", "Scotland remains part of the UK as of 2026. An independence referendum may occur in coming years but has no current impact on travel, visa requirements, or currency. Scottish pounds (issued by Scottish banks) and English pounds are interchangeable throughout the UK."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "£45–75/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town: Castle, Royal Mile & Grassmarket",
          items: [
            "9:00am — Edinburgh Castle (£18). Book online to avoid queues. The Crown Jewels of Scotland (the Honours of the Three Kingdoms), Mons Meg medieval cannon, the Stone of Destiny, and sweeping views over the city from the esplanade. Allow 2.5 hours.",
            "11:30am — Royal Mile walk downhill from the Castle Esplanade. The most historic street in Scotland — 1,600 feet from the Castle to the Palace of Holyroodhouse. The medieval closes (narrow alleyways) off both sides: Mary King's Close (paid tour £19.50, recommended), Advocates Close, Lady Stair's Close.",
            "1:00pm — Lunch on the Royal Mile or Cockburn Street: a bowl of Scotch broth and a cheese toastie at The Jolly Judge (Victoria Street area, £8–12), or a portion of haggis, neeps and tatties at any of the traditional Scottish pubs on the Mile (£10–14). This is the moment to try haggis — it tastes like spiced mince and offal with turnip and potato. It is good.",
            "2:30pm — St Giles' Cathedral (free, suggested donation). The High Kirk of Edinburgh — John Knox preached here, the Thistle Chapel inside is one of the most exquisite small interiors in Scotland. Free entry with no time pressure.",
            "4:00pm — Greyfriars Kirkyard (free). The 17th-century cemetery with the statue of Greyfriars Bobby (the loyal Skye Terrier). Atmospheric, eerie, historically significant. The surrounding area inspired J.K. Rowling's naming of characters.",
            "5:30pm — Victoria Street: the curved, coloured shopfront street that inspired Diagon Alley. Best at dusk when the lamps come on. The independent shops here are worth browsing.",
            "7:30pm — Grassmarket for the evening: one of Edinburgh's oldest market spaces, now lined with pubs and restaurants. Budget dinner: fish supper (fish and chips) from the Grassmarket chippy (£8–10), or a pub pie at The Last Drop (£12–14). Pint of Scottish ale: £4.50–6.",
          ],
          cost: "£35–55 total (castle + food + drinks)",
        },
        {
          day: "Day 2",
          title: "Holyrood, Arthur's Seat & Dynamic Earth",
          items: [
            "7:00am — Arthur's Seat sunrise hike. From Holyrood Park entrance (free, 24 hours), the main route up the Radical Road and Lion's Head path to the summit takes 45–60 minutes. The view from the 251-metre volcanic peak covers Edinburgh, the Firth of Forth, Fife, and on clear days the Highlands. This is the single best free experience in Edinburgh — do not skip it.",
            "9:00am — Descend and have breakfast in the Holyrood area: a café on the Canongate (£5–8 for a full Scottish breakfast — square sausage, black pudding, tattie scone, eggs).",
            "10:30am — Palace of Holyroodhouse (£18.50). The official Scottish residence of the King — Mary Queen of Scots lived here, and the royal family uses it every summer. The State Apartments and the ruins of Holyrood Abbey alongside are genuinely moving.",
            "12:30pm — Scottish Parliament visitor centre (free tours when parliament is not in session — check the website). Enric Miralles's controversial 2004 building is architecturally extraordinary; the debating chamber is visitable on free tours.",
            "2:00pm — Dynamic Earth (£18.50, optional). Interactive exhibition covering the history of the planet — designed for all ages, genuinely impressive audiovisual presentation. Budget travellers can skip and return to the Old Town instead.",
            "4:00pm — Walk back up the Canongate. The Museum of Edinburgh at Huntly House (free) covers the city's history from its origins. The People's Story Museum (free, Canongate Tolbooth) covers working-class Edinburgh life.",
            "7:30pm — Evening in the Old Town: The Bow Bar (Victoria Street, excellent cask ales, no food, pure pub atmosphere). Then dinner nearby: Mums (Forrest Road, classic Scottish comfort food, £10–15, legendary mac and cheese and pie).",
          ],
          cost: "£40–60 total (Holyrood + optional Dynamic Earth + food)",
        },
        {
          day: "Day 3",
          title: "Day Trip: Loch Ness, Stirling, or Rosslyn",
          items: [
            "OPTION A — Loch Ness (full day, best by car or tour bus): 3-hour drive or coach tour from Edinburgh (organised day tours from £40–65 including transport). Urquhart Castle (£12, beautifully ruined on the loch shore). Boat tour on Loch Ness (£20, from Drumnadrochit). The loch is 37km long, 230 metres deep, and holds more fresh water than all lakes in England and Wales combined. Nessie sightings remain unconfirmed.",
            "OPTION B — Stirling Castle + William Wallace Monument (45 min drive or direct bus, £12–15 return): Stirling Castle (£14, arguably more historically significant than Edinburgh Castle — the Stuarts, Mary Queen of Scots, James VI). William Wallace Monument (£11, outside Stirling, the 67-metre Victorian tower with views over the battlefield of Bannockburn). The Braveheart landscape.",
            "OPTION C — Rosslyn Chapel (45 min bus from Edinburgh centre, bus £3.50 return, chapel entry £9): The 15th-century chapel made famous by The Da Vinci Code. The stone carvings (the Apprentice Pillar, the Green Man, the Masonic symbols) are extraordinary regardless of conspiracy theories. The surrounding valley (Roslin Glen) is a beautiful woodland walk.",
            "Evening: Return to Edinburgh. Dinner in the Grassmarket or Old Town. If visiting in August during Fringe Festival — choose a free outdoor show at the Mound or catch a £5–12 venue show.",
          ],
          cost: "£40–75 total depending on option chosen",
        },
        {
          day: "Day 4",
          title: "New Town, Whisky & Farewell",
          items: [
            "9:30am — National Museum of Scotland (free, on Chambers Street, a 5-minute walk from the Royal Mile). One of the genuinely excellent national museums in Europe — Dolly the sheep (the world's first cloned mammal), Pictish stones, Scottish design galleries, natural history, world cultures. Allow 2–3 hours.",
            "11:30am — Scottish National Gallery (free, The Mound). Scotland's national art collection: Rembrandt, Raphael, El Greco, Titian, and a superb collection of Scottish paintings. The garden between the two wings (Royal Scottish Academy building alongside) is pleasant for a break.",
            "1:00pm — Princes Street Gardens (free, below the castle on the south side of Princes Street). The view of Edinburgh Castle rising 130 feet above the gardens is the definitive Edinburgh image. In summer the gardens are full of picnickers; in December the Christmas market and fairground wheel make this magical.",
            "2:00pm — Dean Village walk (free). 10-minute walk from Princes Street — a former milling village on the Water of Leith that feels like a Cotswolds village transported to a Scottish city. The bridge, the old granaries, the mill-race are completely photogenic and almost tourist-free.",
            "3:30pm — Scotch Whisky Experience on the Royal Mile (£19, just below the Castle). A 70-minute immersive tour through the production of Scotch whisky with a tasting of all four regional styles. The best introduction to Scotch for non-whisky drinkers.",
            "5:00pm — Royal Botanic Garden Edinburgh (free, 1.5km from the city centre — bus or 25-min walk). 70 acres of glasshouses, rock garden, Chinese hillside garden. The view of the castle from the garden's south lawn is superb and much less crowded than the standard shots.",
            "7:30pm — Farewell dinner and a proper Scotch nightcap: Whiski Bar & Restaurant (Royal Mile, whisky-focused menu, haggis bon bons, £15–22 mains, single malts from £6 per dram).",
          ],
          cost: "£35–55 total (free museums + Whisky Experience + food)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "£130–230/day",
      days: [
        {
          day: "Day 1",
          title: "Castle, Old Town & Dinner on the Mile",
          items: [
            "Check into The Inn on the Mile (High Street, Royal Mile, £85–160/night) or the Grassmarket Hotel (£100–180/night) — Old Town location makes the whole trip walkable.",
            "9:00am — Edinburgh Castle with audio guide (entry £18, audio guide £4 extra). The audio guide covers the castle's 3,000-year history including the Wars of Independence, Mary Queen of Scots' imprisonment, and the Great Hall built by James IV.",
            "11:30am — Mary King's Close guided tour (£19.50, book online). The underground medieval street preserved beneath the Royal Mile — genuinely atmospheric, historically fascinating, and not overly gimmicky. The guides are uniformly excellent.",
            "1:00pm — Lunch at The Witchery by the Castle (castle gate entrance, famous restaurant in a 16th-century merchant's house, £25–40 for a two-course lunch in extraordinary surroundings).",
            "3:00pm — Greyfriars, Victoria Street, and Grassmarket in the afternoon — the lesser-known closes off the Grassmarket (the Cowgate, the Vennel stairs) give the best castle-wall views.",
            "7:30pm — Dinner at The Kitchin (Leith, 1 Michelin star, £75–100/person tasting menu, book 3–4 weeks ahead). Tom Kitchin's 'From Nature to Plate' philosophy with outstanding Scottish produce.",
          ],
          cost: "£150–220 total",
        },
        {
          day: "Day 2",
          title: "Holyrood & Arthur's Seat at Dawn",
          items: [
            "6:00am — Arthur's Seat sunrise (free). Arrange an early alarm — this is non-negotiable for the mid-range plan too. At this budget level, bring a thermos of coffee from the hotel.",
            "9:00am — Palace of Holyroodhouse (£18.50) with a private or small-group guided tour (Context Travel runs Edinburgh tours, £45–60/person). The context of Mary Queen of Scots' actual rooms where Lord Darnley murdered David Rizzio is significantly enriched by a knowledgeable guide.",
            "12:00pm — Lunch in Leith: the port neighbourhood 2 miles from the Old Town has transformed into Edinburgh's most interesting dining area. The Kitchin, Restaurants Martin Wishart, and numerous excellent cafés. Try a Leith café for fish and chips at an actual fishing port (£14–18).",
            "3:00pm — Royal Botanic Garden (free, 70 acres) — mid-range visitors can take the paid Glasshouses tour (£8.50 extra) to see the Victorian Temperate Palm House and tropical collections.",
            "5:00pm — Scotch Whisky Experience (£19) or a private tasting at Cadenhead's Whisky Shop (Canongate, independent bottlers, free to browse, tasting pours from £5). The staff are extraordinarily knowledgeable.",
            "8:00pm — Dinner at The Stockbridge Restaurant (£45–60/person, intimate neighbourhood bistro in the New Town, seasonal Scottish menu, book ahead).",
          ],
          cost: "£150–210 total",
        },
        {
          day: "Day 3",
          title: "Day Trip: Stirling Castle & Loch Lomond",
          items: [
            "8:00am — Hire a car or join a guided day tour from Edinburgh (Timberbush Tours or Rabbies Trail Burners, £65–95/person all-inclusive). This unlocks the full Stirling + Loch Lomond circuit.",
            "9:30am — Stirling Castle (£14 entry). The most complete Renaissance royal palace in Scotland — the Great Hall, the Royal Chapel, the King's Presence Chamber with its extraordinary oak roundels (the Stirling Heads). The views from the ramparts over the Forth Valley and the Highland line are exceptional.",
            "11:30am — Battle of Bannockburn visitor centre (5 min from castle, £12). The 1314 battlefield where Robert the Bruce defeated Edward II's English army. The immersive 3D battle experience is intelligently designed.",
            "1:00pm — Drive to Loch Lomond via the A811. Lunch at a lochside café — smoked salmon sandwich and a bowl of cullen skink (smoked haddock soup, a Scottish staple) for £14–18.",
            "3:00pm — Loch Lomond shores walk: the village of Luss (free, beautifully preserved, film location for many Scottish productions) or a boat trip from Balloch (£12–18, 1 hour).",
            "7:00pm — Return to Edinburgh. Evening at The Voodoo Rooms (West Register Street) for cocktails in a spectacular Victorian ballroom.",
          ],
          cost: "£130–190 total including tour transport",
        },
        {
          day: "Day 4",
          title: "New Town, Galleries & Final Scotch",
          items: [
            "9:30am — Scottish National Gallery with a gallery talk or highlights tour (free entry, tours £10–15). The Impressionist room and the Scottish masters — Raeburn, Ramsay, Wilkie.",
            "11:00am — New Town Georgian architecture walk: Charlotte Square, Moray Place (the finest Georgian crescent in Edinburgh), the Dean Bridge. The Georgian House at Charlotte Square (National Trust for Scotland, £9) reconstructs a 1796 New Town interior.",
            "1:00pm — Lunch at Contini (George Street, Edinburgh's finest Italian-Scottish restaurant, £20–30/person, exceptional Scottish seafood with Italian technique).",
            "3:00pm — Dean Village and Water of Leith Walkway (free) — the gorge walkway runs from Stockbridge to Leith (5km, 90 minutes) through some of Edinburgh's most beautiful hidden terrain.",
            "5:30pm — Scotch tasting at The Scotch Malt Whisky Society (1 The Vaults, Leith, or 28 Queen Street, New Town — members' club but visitors welcome, tasting flights £20–35). The Society bottles single cask whiskies unavailable anywhere else.",
            "8:00pm — Farewell dinner at Timberyard (Grassmarket area, multi-award-winning, hyper-local Scottish ingredients, £65–90/person tasting menu). The restored Victorian warehouse setting is as compelling as the food.",
          ],
          cost: "£140–210 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "£350–900/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Old Town in Style",
          items: [
            "Arrive at Edinburgh Airport (EDI). Private transfer by Range Rover or Mercedes to your hotel — Blacklane or a local chauffeur service, £80–120 for the 25-minute journey.",
            "Check into The Balmoral Hotel (Princes Street, £350–800/night — the landmark clock tower deliberately kept 3 minutes fast so guests don't miss their train; J.K. Rowling finished Harry Potter and the Deathly Hallows in Room 552) or Prestonfield House (5 minutes from Holyrood Park, £400–900/night, Jacobean country house, peacocks on the lawn, the most atmospheric hotel in Scotland).",
            "Afternoon: Private Old Town walking tour with a specialist guide (Context Travel or local historian guide, £150–200 for 3 hours). The medieval closes, the plague history, the Covenanters, the Enlightenment — Edinburgh's history told by someone who has spent years researching it.",
            "7:30pm — Dinner at Restaurant Martin Wishart (Leith, 1 Michelin star, £110–150/person tasting menu, book 4–6 weeks ahead). The longest-held Michelin star in Scotland — classical French technique applied to Scottish produce.",
            "Post-dinner: The Caledonian Bar (The Caledonian hotel, Rutland Street) for a 25-year Glenfarclas and a look at the Victorian railway hotel's extraordinary bar room.",
          ],
          cost: "£500–900 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Castle Access & Holyrood Experience",
          items: [
            "8:30am — Arrange early private access to Edinburgh Castle through Historic Environment Scotland's group booking service (available for pre-booked groups, enquire 3+ months ahead). The Crown Jewels room and the Great Hall before the public enter is a qualitatively different experience.",
            "11:00am — The Witchery by the Castle for a late breakfast or champagne brunch (£40–60/person, the most theatrical restaurant setting in Scotland — candles, tapestries, antler chandeliers).",
            "1:30pm — Palace of Holyroodhouse private guided access (Royal Collection Trust VIP enquiries available for group bookings) including the Queen's Gallery special exhibitions.",
            "4:00pm — Arthur's Seat in the afternoon light — hire a local mountain guide (£80–150 for a private guided ascent with historical and geological commentary).",
            "7:00pm — Dinner at The Kitchin (Leith, 1 Michelin star, £110–150/person tasting menu). Tom Kitchin's restaurant is one of Scotland's finest dining experiences — foraged ingredients, Scottish game, Orkney seafood.",
          ],
          cost: "£600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Highlands Experience: Gleneagles & Distillery",
          items: [
            "8:00am — Private chauffeur to Gleneagles (1 hour from Edinburgh). Gleneagles Hotel is Scotland's most famous resort — three championship golf courses, the ESPA spa, and the finest afternoon tea in Scotland.",
            "Golf: book a round on the King's Course (green fee £295/person for non-residents). Or morning spa treatment (£150–200 for a 90-minute Scottish-inspired treatment using local botanicals).",
            "12:30pm — Lunch at Andrew Fairlie at Gleneagles (2 Michelin stars, the most acclaimed restaurant in Scotland, £120–160/person lunch menu). Reserve months ahead — this is one of Scotland's culinary landmarks.",
            "3:00pm — Drive to a Perthshire Scotch whisky distillery: Glenturret (Scotland's oldest working distillery, private tour and cask selection £150–250/person) or Edradour (smallest traditional distillery in Scotland, private tasting £80–120/person).",
            "Return to Edinburgh by 7pm. Evening nightcap at The Balmoral's Number One bar — the whisky collection is exceptional.",
          ],
          cost: "£700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Loch Ness by Seaplane & Farewell",
          items: [
            "7:00am — Private seaplane or helicopter from Edinburgh to Loch Ness (charter companies including Loch Lomond Seaplanes operate routes — enquire 2+ months ahead, £800–1,500 for the charter). Flying over the Highland glens is a genuinely transformative experience.",
            "Loch Ness: private boat charter (Jacobite Cruises offer group charters, £400–600) on the loch itself. Urquhart Castle from the water, the Great Glen, the Caledonian Canal.",
            "Lunch at a lochside Highland inn — venison burger and a pint of local ale with the loch at the window.",
            "Return flight or helicopter to Edinburgh by 4pm.",
            "Final afternoon: New Town stroll on George Street, champagne at The Dome (30 George Street, spectacular Victorian banking hall, champagne cocktails £16–22).",
            "Farewell dinner at Timberyard (Grassmarket, tasting menu £90–120/person) — the definitive modern Scottish restaurant, with a wine list focused on natural producers and a commitment to hyper-local ingredients that extends to foraging from the Scottish hills.",
          ],
          cost: "£1,200–2,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "£20–35", food: "£12–20", transport: "£5–10", activities: "£10–20", total: "£47–85/day" },
    { tier: "✨ Mid-Range", accommodation: "£85–180", food: "£30–55", transport: "£10–20", activities: "£20–45", total: "£145–300/day" },
    { tier: "💎 Luxury", accommodation: "£350–900", food: "£100–250", transport: "£50–150", activities: "£80–300", total: "£580–1,600+/day" },
  ],
  mistakes: [
    {
      icon: "🏕️",
      title: "Visiting in August Without Booking 6 Months Ahead",
      desc: "Edinburgh in August during the Fringe Festival is the most densely booked city in Europe. Hostel beds that cost £22 in May are £60–90 in August. Hotels that are £100 in June are £350+ during Festival. If you want August (and the atmosphere is genuinely extraordinary — the entire city becomes a performance venue), book accommodation in February or March. If you arrive without a booking in August, you will either sleep in a nearby town or pay emergency rates.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🥾",
      title: "Skipping the Arthur's Seat Hike",
      desc: "Arthur's Seat is the most underrated free experience in any UK city — a 251-metre volcanic peak inside the city boundaries, 45–60 minutes' walk from the Old Town, with panoramic views over Edinburgh, the Firth of Forth, and the Highlands. Many visitors see it from below and never go up. The path is rocky but not technical — any reasonable walking shoe is fine. Go at sunrise in summer (4:30–5:30am) for the most extraordinary experience, or at any time for the best free view in Scotland.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍽️",
      title: "Not Trying Haggis",
      desc: "Haggis is made from sheep offal (heart, liver, lungs), oatmeal, onion, and spices — traditionally cooked in the sheep's stomach. It sounds alarming. It tastes like deeply flavoured, slightly spiced mince, served with 'neeps and tatties' (turnip mash and potato mash). At any traditional Edinburgh pub, a serving of haggis, neeps and tatties costs £10–14 and is one of the most satisfying cold-weather dishes in British cuisine. The haggis bon bons (deep-fried, pub version) at £7–8 are an excellent gateway.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚗",
      title: "Renting a Car in the City Centre",
      desc: "Edinburgh's Old Town is medieval — the streets are narrow, steep, cobbled, and not designed for modern cars. Parking in the city centre is extremely limited and expensive (£3–5/hour). The city is entirely walkable: Old Town, New Town, Leith, and Stockbridge are all connected by flat or manageable walking routes. For day trips (Loch Ness, Stirling, the Highlands), collect a car from the airport or a peripheral location. Within the city, use your feet or the excellent Lothian Buses (£2/journey, all-day ticket £4.50).",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "6am Royal Mile: The Best Empty City Photo",
      desc: "The Royal Mile at 6am in summer is completely empty — the same street that has 50,000 people walking through it on an August afternoon is utterly silent before 7am. The Castle looms at the top, the medieval buildings glow in early light, and there is no one between your lens and history. The closes (alleyways) like Advocates Close and Writers' Court are best seen in this window. Bring a coffee from the night-before in a thermos. Edinburgh rewards early risers more than almost any city in Europe.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌆",
      title: "Victoria Street at Dusk: Diagon Alley in Real Life",
      desc: "Victoria Street curves down from George IV Bridge to the Grassmarket in a half-moon of coloured shopfronts — blue, red, yellow, green. At dusk when the shopfronts are lit and the cobbles glisten, it's one of the most photographed streets in Scotland. J.K. Rowling lived nearby and the street's form clearly influenced Diagon Alley. The best light is 30–60 minutes after sunset in spring and summer. The shops on the street (independent bookshops, whisky specialists, a specialist cheese shop) make it worth visiting in daylight too.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎪",
      title: "Edinburgh Fringe Free Shows: World Class for Nothing",
      desc: "The Edinburgh Festival Fringe in August is the world's largest arts festival — 3,000+ shows across 300 venues in a city of 500,000. Thousands of performers bring ticketed shows (£8–22), but the street performances on the Royal Mile and the Mound are completely free and consistently extraordinary: acrobats, comedians, opera singers, theatre companies. Some of the world's best emerging comedy comes through the Fringe. If visiting in August, allocate at least two afternoons to simply walking the Mile and watching what appears.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🥃",
      title: "Arthur's Seat Sunrise: 4:30am in Summer",
      desc: "In June and July, Edinburgh sunrise is at 4:26–4:30am. Starting the Arthur's Seat hike at 3:45am (the path is safe, the route is simple, take a head torch) puts you at the summit for one of the most extraordinary natural light shows in the UK: the Forth bridges lit silver, the city slowly emerging from darkness below, the Highlands appearing through mist to the north. It sounds extreme. Visitors who do it universally describe it as the highlight of their Scotland trip. No alarm is set that doesn't feel worth it from the top.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Should I do London first or Edinburgh first?",
      a: "Most visitors flying into the UK do London first (Heathrow is the main international hub) and add Edinburgh at the end, taking the train from London King's Cross to Edinburgh Waverley (4.5 hours, £25–80 on Trainline with advance booking). This works well logistically. If flying into Edinburgh directly (many European and some transatlantic routes), starting in Scotland and ending in London with a flight out of Heathrow is equally viable. A combined London (5 days) + Edinburgh (4 days) trip is one of the best 9-day UK itineraries.",
    },
    {
      q: "How far is Loch Ness from Edinburgh?",
      a: "Loch Ness is approximately 3 hours' drive from Edinburgh (170 miles via the A9). It's a long day trip by car — doable but tiring. Better: take the overnight sleeper train from Edinburgh to Inverness (book via ScotRail, £30–60, arrives early morning), spend the day at Loch Ness and Urquhart Castle, and return by afternoon train. Alternatively, organised day trips from Edinburgh (Rabbies Trail Burners, Timberbush) run coach tours to Loch Ness for £45–70 all-inclusive.",
    },
    {
      q: "Where's the best place to do a whisky tasting in Edinburgh?",
      a: "For a structured introduction: the Scotch Whisky Experience on the Royal Mile (£19, 70 minutes, covers all four Scottish whisky regions with tastings). For enthusiasts: Cadenhead's Whisky Shop (Canongate, independent bottlers, free to browse, affordable tasting pours). For the deepest experience: The Scotch Malt Whisky Society (Queen Street or The Vaults, Leith — the Society bottles rare single cask expressions unavailable elsewhere, tasting flights from £20). Most of the Old Town bars also have curated malt lists — The Bow Bar has 300+ whiskies by the dram from £4.50.",
    },
    {
      q: "When is the best time to visit Edinburgh?",
      a: "May–September for the best weather (though 'best' in Scotland means rarely above 20°C — always bring layers). August is the Festival month — extraordinary atmosphere but the city is packed and expensive. September is arguably optimal: summer warmth, dramatically fewer crowds, the Festival just ended but the energy lingers. December brings a famous Christmas market in Princes Street Gardens and Hogmanay (New Year celebrations) on December 31st — Edinburgh's Hogmanay is one of the world's great New Year parties. January–March is quiet and cold but very affordable.",
    },
    {
      q: "Is Edinburgh very hilly? Will it be hard to walk around?",
      a: "Yes — Edinburgh is built on a series of volcanic hills, and the Old Town in particular involves significant elevation changes. The Royal Mile runs downhill from Castle Rock (130m above sea level) to the Palace of Holyroodhouse, with steep closes off both sides. Expect constant up-and-down. Cobbled streets add to the challenge. Comfortable, grippy walking shoes (not sandals or flat-soled shoes) are essential. The New Town is flatter. Lothian Buses connect most points if the hills become tiring — a single journey costs £2.",
    },
    {
      q: "Does Scottish independence affect travel plans?",
      a: "As of 2026, Scotland is part of the United Kingdom. There is no border between Scotland and England, no separate currency, no separate visa requirement, and no restriction on movement. The same UK Standard Visitor Visa (or ETA) covers the whole trip. Prices in Scotland are generally slightly lower than London, especially for accommodation and pub food. The pound sterling is the currency — Scottish banks issue their own pound notes (Clydesdale Bank, Bank of Scotland, Royal Bank of Scotland) which are legal tender throughout the UK, though some English vendors occasionally decline them out of unfamiliarity.",
    },
  ],
  combineWith: ["london-5-days", "glasgow-3-days", "highlands-3-days"],
  relatedSlugs: ["london-5-days", "paris-5-days", "amsterdam-4-days", "dublin-4-days"],
  galleryQuery: "edinburgh castle royal mile arthur's seat old town scotland whisky",
};

export const metadata: Metadata = {
  title: "Edinburgh in 4 Days: Castle, Arthur's Seat, Loch Ness Day Trip & Whisky (2026)",
  description: "Complete Edinburgh 4-day guide — Edinburgh Castle, the Arthur's Seat sunrise hike, a Loch Ness day trip, whisky tastings, and what the city actually costs in 2026.",
  keywords: ["edinburgh itinerary 4 days", "edinburgh travel guide 2026", "edinburgh castle", "arthur's seat hike", "loch ness day trip", "edinburgh fringe festival", "scotland travel guide"],
  openGraph: {
    title: "Edinburgh in 4 Days: Castle, Arthur's Seat & Whisky (2026)",
    description: "Edinburgh Castle, Arthur's Seat sunrise, Loch Ness day trip, and Scotch whisky tastings — complete Edinburgh guide for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1562767166-63a5e3a63a1d?w=1200&q=80", width: 1200, height: 630, alt: "Edinburgh Castle on volcanic rock Scotland UK Old Town skyline" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Edinburgh in 4 Days (2026)", description: "Castle, Arthur's Seat sunrise hike, Loch Ness day trip, and whisky — complete Edinburgh guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/edinburgh-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Edinburgh in 4 Days: Castle, Arthur's Seat, Loch Ness Day Trip & Whisky (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1562767166-63a5e3a63a1d?w=1200&q=80",
      description: "4-day Edinburgh itinerary covering Edinburgh Castle, Arthur's Seat hike, Loch Ness day trip, Royal Mile Old Town, Palace of Holyroodhouse, whisky tastings, and the Edinburgh Fringe Festival — all three budget tiers.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Edinburgh 4 Days", item: "https://www.incredibleitinerary.com/blog/edinburgh-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Edinburgh, Scotland, United Kingdom",
      description: "The capital of Scotland — home to Edinburgh Castle, the Royal Mile, Arthur's Seat, Holyrood Palace, and the world-famous Edinburgh Festival Fringe, the largest arts festival on earth.",
      touristType: ["Cultural tourists", "History enthusiasts", "Festival visitors", "Whisky lovers", "Outdoor hikers", "Architecture admirers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 55.9533,
        longitude: -3.1883,
      },
    },
  ],
};

export default function EdinburghPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
