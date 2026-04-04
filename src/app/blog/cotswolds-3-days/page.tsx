import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Cotswolds",
  country: "UK",
  countryFlag: "🇬🇧",
  slug: "cotswolds-3-days",
  heroQuery: "cotswolds village england uk stone cottage flowers",
  heroAlt: "Bourton-on-the-Water Cotswolds honey-stone village England UK",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro: "The Cotswolds at 6am in May — Arlington Row's honey-stone weavers' cottages reflected in the Coln, cow parsley overflowing the verges of a lane that has looked exactly this way for four hundred years, a church tower rising above a sea of beech trees — is the England of imagination made real. Three days gives you Chipping Campden's market town perfection, Bibury before the tour buses arrive, Broadway Tower on a clear day, the twin Slaughters at their quietest, and enough cream teas along the way to last a lifetime.",
  stats: { duration: "3 Days", budgetFrom: "£60", bestMonths: "Apr–Jun (flowers), Sep–Oct (harvest)", airport: "BHX (Birmingham, 45 min) or LHR (1.5h)" },
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
        ["UK Standard Visitor Visa", "Indian nationals require a UK Standard Visitor Visa to visit England, including the Cotswolds. Apply online at gov.uk/standard-visitor-visa. The application fee is £115, and processing time is typically 3–8 weeks (priority service is available for approximately £500 extra and takes around 5 business days). Apply at least 6 weeks before your planned travel date — VFS Global appointment slots in major Indian cities fill quickly."],
        ["Financial Requirements", "Your bank statements should demonstrate sufficient funds for your trip — typically a minimum of £100–200 per day of your stay, in an account held for at least 3 months. For a 5–7 day Cotswolds trip, showing a balance of £1,500–2,500 is advisable. Savings accounts, salary slips, and employer letters all help build a strong application."],
        ["eVisa & Documentation", "The UK now issues electronic visas (eVisas) rather than physical stickers in most cases. You will receive an email confirmation linked to your passport number. Carry a printed copy and keep your UKVI account login accessible. Required documents: valid passport, return flights, hotel bookings, travel insurance, employment letter, and bank statements."],
        ["Cotswolds Entry Notes", "The Cotswolds spans parts of Gloucestershire, Oxfordshire, Wiltshire, and Worcestershire — all in England. A standard UK Visitor Visa covers all four nations of the UK. No regional or county-specific permission is required. The nearest major airports are Birmingham (BHX, 45 minutes by car) and London Heathrow (LHR, 1.5 hours). Most visitors hire a car in Oxford, Cheltenham, or Birmingham."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "US, Canadian, Australian, New Zealand, and most EU passport holders can visit the UK visa-free for up to 6 months as Standard Visitors. There is no registration or arrival process beyond standard border control. Ensure your passport has at least 6 months of validity from your return date. Keep return flight confirmation and hotel bookings accessible."],
        ["UK ETA from 2025", "From early 2025, most visa-exempt visitors — including USA, Canada, Australia, New Zealand, and EU citizens — require a UK Electronic Travel Authorisation (ETA) before arriving. Cost: £10. Valid for 2 years or until your passport expires, for multiple trips of up to 6 months each. Apply at gov.uk/apply-uk-visa-and-immigration. Approval is typically immediate but can take up to 3 working days."],
        ["Driving in the UK", "The Cotswolds essentially requires a car (public transport is very limited between villages). In the UK, you drive on the left. An International Driving Permit is recommended for non-EU/non-UK licence holders, though in practice US, Australian, and Canadian licences are accepted for short-term rentals. Cotswolds lanes are narrow — book a small car. Some lanes are single-track with passing places."],
        ["Customs & Practical Notes", "The UK uses the pound sterling (GBP) — not the euro. ATMs are available in Cheltenham, Cirencester, and larger Cotswolds towns (Burford, Chipping Campden) but rare in smaller villages. Take cash. The Cotswolds is in England and is not part of the Schengen Zone — days spent here do not count toward your Schengen 90-day allowance."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "£60–95/day",
      days: [
        {
          day: "Day 1",
          title: "Chipping Campden, Broadway Tower & Broadway",
          items: [
            "9:00am — Chipping Campden — the argument for the most perfect Cotswolds market town. The High Street runs in a gentle curve of golden limestone buildings from the 14th to 17th centuries: the Market Hall (1627, free), St James' Church (one of the finest 'wool churches' in the Cotswolds, free), and the terrace of almshouses at the end of Church Street. Allow 1.5–2 hours to walk it properly and explore the side streets. No entry fees for anything except the Campden Wonder exhibition (£2).",
            "11:00am — Dover's Hill (1 mile walk from Chipping Campden town centre, or drive and park free). A natural escarpment with uninterrupted views over the Vale of Evesham. On a clear day you can see the hills of Wales. Site of the Cotswold Olimpick Games since 1612 (held annually in June). Free, open at all times. The hedgerow walk to the summit takes 20 minutes and is excellent in spring wildflowers.",
            "12:30pm — Lunch at the Eight Bells pub in Chipping Campden (Church Street, £10–14 for a pub lunch). 14th-century stone pub, low beamed ceilings, local ales, ploughman's lunches, and jacket potatoes. One of the most genuinely atmospheric pubs in the Cotswolds.",
            "2:00pm — Broadway Tower (£6.50 adult entry, Fish Hill, Broadway). A Georgian folly built in 1799 at 312 metres above sea level — on a clear day the views extend across 16 counties. The Middle Hill Press (William Morris's printing press) operated here; the Arts and Crafts movement connection makes it historically interesting. The walk up from Broadway village takes 45 minutes; drive to the tower car park to save time.",
            "4:00pm — Broadway village — wide green verge flanked by honey-stone cottages and the Lygon Arms hotel (a Grade I listed coaching inn since the 15th century). Browse the antiques shops on the High Street (Broadway is a serious antiques destination). Gordon Russell Museum (£5) covers the Cotswolds' most famous furniture designer.",
            "6:00pm — Drive to your accommodation (Bourton-on-the-Water or Burford, both central for Day 2). Budget B&Bs: £50–75/night. Dinner at a local pub: Ploughman's £10, fish and chips £13, Sunday roast (Sundays only) £16–22.",
          ],
          cost: "£50–70 total (excluding accommodation)",
        },
        {
          day: "Day 2",
          title: "Bourton, Burford, Bibury & Cirencester",
          items: [
            "9:00am — Bourton-on-the-Water — the most visited village in the Cotswolds, bisected by the River Windrush with a series of elegant low footbridges crossing it. Arrive before 10am on weekdays to see it before the tour buses. The village green beside the river is idyllic; the Model Village (a 1:9 scale replica of Bourton-on-the-Water built in 1937, £5) is charmingly eccentric. Also worth seeing: Cotswolds Motoring Museum (£8), Birdland Park (£13).",
            "11:00am — Burford — 'the gateway to the Cotswolds' on the River Windrush, with a dramatic main street descending steeply to a medieval bridge. Excellent for antiques (10+ specialist shops). St John the Baptist Church (free, 12th century, significant Civil War history — Levellers were imprisoned here in 1649). The Cotswold Wildlife Park is 2 miles south (£20, worth it if you have children or love animals).",
            "1:00pm — Lunch in Burford: The Highway Inn (High Street, pub lunch £11–15) or the Huffkins Bakery (cafe, homemade pies and soups, £8–12).",
            "2:30pm — Bibury — Arlington Row is described as 'the most photographed row of cottages in England.' Built in the 14th century as a monastic wool store and converted to weavers' cottages in the 17th century, it faces the water meadow (Rack Isle, free) across a mill stream. National Trust property: free to view the exterior (always). Arlington Mill Museum: £5. William Morris called Bibury 'the most beautiful village in England'. Arrive before the tour buses (10am onwards) or at day's end (after 5pm).",
            "4:30pm — Cirencester — the 'capital of the Cotswolds' and Roman Corinium (the second-largest Roman city in Britain after London). The Corinium Museum (free, excellent Roman collection including the finest collection of Roman mosaics in Britain outside London) takes 1.5 hours. St John Baptist Church (free, one of the largest parish churches in England) is worth 30 minutes. Cirencester market town centre has independent shops and a genuine un-touristy feel.",
            "7:00pm — Dinner in Cirencester or return to your B&B village. Jesse's Bistro (Cirencester, £14–22 mains, bistro cooking with local ingredients) or The Fleece at Witney if staying further north.",
          ],
          cost: "£45–65 total (excluding accommodation)",
        },
        {
          day: "Day 3",
          title: "The Slaughters, Stow-on-the-Wold & Moreton",
          items: [
            "8:00am — Lower Slaughter and Upper Slaughter — the 'twin Slaughters' are two of the smallest and most perfectly preserved villages in the Cotswolds. Both free. Lower Slaughter has the old mill (now a museum/café, £4.50 to enter) beside the Eye brook, with ducks, willows, and perfect stone cottages. Upper Slaughter (less visited, 15-minute walk via fields) is even quieter. The footpath between the two villages crosses the water meadow — bring walking shoes and watch for mud.",
            "10:00am — Stow-on-the-Wold — the highest town in the Cotswolds (244 metres above sea level) and the self-proclaimed antiques capital of England. The large market square has been used for sheep and horse fairs since the 13th century. St Edward's Church has a unique Norman doorway framed by two yew trees that are over 300 years old. The antiques shops (30+) are worth browsing even if you're not buying — specialist dealers in clocks, maps, silver, and Georgian furniture.",
            "12:00pm — Lunch at The Old Stocks Inn (Stow-on-the-Wold, pub restaurant, £12–18 mains) or a picnic from the Stow deli — local Cotswolds cheese, homemade pork pies, and sourdough for £10–14 from local shops.",
            "2:00pm — Batsford Arboretum (£10 adult, 3 miles from Moreton-in-Marsh). One of the UK's finest private arboreta — 56 acres planted with over 2,900 species of trees and shrubs from around the world. The Japanese garden section and the cherry trees in spring are exceptional. The Cotswold Falconry Centre is adjacent (£13, flying displays daily).",
            "4:00pm — Moreton-in-Marsh — a handsome market town on the Fosse Way (the Roman road running straight as an arrow across England). The Tuesday market (Tuesdays only, one of the largest in the Cotswolds) is worth timing your trip for. The Curfew Tower (the only remaining medieval building) dates from the 16th century.",
            "5:30pm — Drive back via Bourton-on-the-Hill for a final Cotswolds view — the village cascades down a steep hillside with Bourton House Garden (open select days, £8) at the top and St Lawrence's Church with its Norman tympanum at the bottom. Final cream tea at a village tearoom: scone, clotted cream, jam, pot of tea — £7–11.",
          ],
          cost: "£40–60 total (excluding accommodation)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "£130–220/day",
      days: [
        {
          day: "Day 1",
          title: "Chipping Campden & Broadway with Pub Dinner",
          items: [
            "10:00am — Check in to The Noel Arms Hotel in Chipping Campden (£130–200/night, a 14th-century coaching inn at the centre of the High Street) or The Lygon Arms in Broadway (£180–280/night, a Grade I listed inn used by King Charles I during the Civil War). Both are excellent mid-range Cotswolds bases.",
            "11:00am — Chipping Campden with a local guide (Cotswolds Walking Holidays offer guided village walks, approximately £15–25/person, or arrange privately through your hotel concierge). The history of the wool trade — which paid for every building you're looking at — is explained beautifully in context.",
            "1:00pm — Lunch at Huxley's Elements (Chipping Campden, £14–22 mains) — modern European cooking using local Cotswolds produce in a converted stone building. Better quality than a pub lunch at a similar price.",
            "3:00pm — Broadway Tower and the Cotswold Way walk back to Broadway village (6 miles, 2.5 hours, well-marked route through open escarpment — boots recommended). The walk is genuinely beautiful and gives a completely different perspective on the landscape than driving.",
            "6:30pm — Shower and change at the hotel. Dinner at The Lygon Arms (Broadway, £20–45 mains for the brasserie menu) or The Crown & Trumpet (Broadway, excellent gastropub, £15–25 mains). Both are central to Broadway village.",
          ],
          cost: "£150–200 total (excluding accommodation)",
        },
        {
          day: "Day 2",
          title: "Bibury, Cirencester & Burford at a Leisurely Pace",
          items: [
            "9:00am — Bibury at its most beautiful: arrive early, walk the full length of Arlington Row and along the river to the trout farm (Bibury Trout Farm, £3.50 to visit, you can fish here for £15/hour including rod hire — the catch-and-keep option is unique). The surrounding water meadow in spring has cowslips and fritillaries.",
            "11:00am — Cirencester with time to do it properly: Corinium Museum (free), St John Baptist Church, and the Bathurst Estate parkland (private land open to the public, one of the largest walled gardens in England — free to walk through the park). Coffee at Made By Bob (The Corn Hall, Cirencester — one of the best cafés in the Cotswolds, artisan baked goods and excellent coffee, £4–8).",
            "1:30pm — Lunch at Jesse's Bistro (Cirencester, £14–22 mains) or The Fleece (Witney Road — a traditional Cotswolds inn with seasonal British cooking, £15–20 mains, Sunday roast is exceptional).",
            "3:30pm — Burford in the afternoon light: the High Street is at its most golden in late afternoon. Antiques shopping along the main street. The Tolsey Museum (£3, in the old market house at the centre of town) covers Burford's history from the Civil War Levellers' uprising to the wool trade.",
            "6:00pm — Return to hotel. Evening drinks at your hotel bar or a traditional village pub (pub quiz nights in many Cotswolds pubs on Tuesday and Wednesday evenings — great local experience). Dinner at hotel restaurant or a booked gastropub.",
          ],
          cost: "£130–180 total (excluding accommodation)",
        },
        {
          day: "Day 3",
          title: "Slaughters, Snowshill & Batsford Arboretum",
          items: [
            "8:30am — Lower and Upper Slaughter in the early morning mist (if you're lucky — mist off the water meadow fields is the classic Cotswolds photograph). The walk between the two villages through the fields takes 20–25 minutes one way.",
            "10:30am — Snowshill Manor (National Trust, £10, near Broadway). One of the most eccentric houses in England — stuffed from floor to ceiling with Charles Paget Wade's extraordinary collection of samurai armour, toys, musical instruments, bicycles, clocks, and craftwork from around the world. The terraced Arts and Crafts garden is beautiful in spring and summer. Book National Trust timed entry slots online.",
            "1:00pm — Lunch at The Snowshill Arms pub (next to the village, £12–18 mains) — a genuine village local rather than a tourist pub, with local Donnington Brewery ales.",
            "2:30pm — Batsford Arboretum (£10) — the Japanese maples in autumn are extraordinary (September–October), the magnolias and cherry blossom in spring (March–April) equally so. The Silk Wood walk on the adjacent Westonbirt National Arboretum (£15, 30 minutes from Batsford) is the other world-class tree collection in the Cotswolds area.",
            "5:30pm — Final drive through the Cotswolds: the B4077 from Stow-on-the-Wold to Toddington gives broad escarpment views that reward a slow drive. Stop at a church in any unnamed village — the Cotswolds has 70+ medieval parish churches, all unlocked during daylight, all free, and often more beautiful than the famous ones.",
            "7:00pm — Final dinner at your hotel or a booked restaurant. The Noel Arms (Chipping Campden) for a traditional setting or Wild Garlic (Nailsworth, 30 minutes south) for exceptional modern cooking using foraged and local ingredients.",
          ],
          cost: "£100–150 total (excluding accommodation)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "£350–800/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Drive & Fine Dining",
          items: [
            "Check in to Lords of the Manor (Upper Slaughter, £350–600/night) — a 17th-century former rectory surrounded by 8 acres of gardens and a trout stream, with the twin Slaughters on your doorstep. Rooms are individually decorated with antiques; the restaurant holds 3 AA Rosettes. Or The Lygon Arms (Broadway, £300–550/night) for a Grade I listed coaching inn experience with spa access.",
            "Afternoon: Private Cotswolds driving tour with a specialist guide (Cotswolds Luxury Tours, £250–400 for a half-day tour in a classic vehicle — Land Rover Defender or vintage Daimler). The guide will take you off the standard tourist routes to estate farmyards, hidden valleys, and manor house views not accessible to the general public.",
            "5:00pm — Arrive at Chipping Campden for the golden hour: the High Street in late afternoon light is at its most spectacular between 4pm and 6pm in spring and summer. The guide can arrange private access to the restored 17th-century Market Hall.",
            "8:00pm — Dinner at Lords of the Manor restaurant (Upper Slaughter, 3 AA Rosettes, £55–75/person for 3 courses) — fine dining with estate-grown vegetables and local Cotswolds meat, in a candlelit dining room overlooking the garden.",
          ],
          cost: "£500–800 total (excluding accommodation)",
        },
        {
          day: "Day 2",
          title: "Snowshill, Private NT Access & Luxury Lunch",
          items: [
            "9:00am — National Trust members-only early access at Snowshill Manor (arrange through your hotel concierge and the NT regional office — possible for groups with advance notice). Snowshill at 9am, before the public entry at 11am, with the garden entirely to yourself and the curator available for questions.",
            "11:30am — Bibury and the Arlington Row estate in late morning: the National Trust warden can arrange a 30-minute private talk on the history of the weavers' cottages and the wool trade for small groups (request via hotel — cost varies, typically £50–80 donation to the NT).",
            "1:30pm — Lunch at The Swan Hotel (Bibury, £25–45 mains) — a 17th-century Cotswolds inn with riverside garden and a kitchen that has won multiple local food awards. The Bibury Trout Farm trout, reared in the same river that flows past the window, is a speciality.",
            "4:00pm — Westonbirt National Arboretum (£15, near Tetbury) — one of the world's great tree collections, with 16,000 labelled specimens across 600 acres. The Champion Trees section has specimens over 200 years old. Late afternoon in early autumn, when the Japanese maples turn, is the best time.",
            "7:30pm — Dinner at The Woolpack Inn (Slad, near Stroud — Laurie Lee's 'Cider with Rosie' pub, beautifully preserved, £15–25 mains) or return to Lords of the Manor for dinner.",
          ],
          cost: "£400–650 total (excluding accommodation)",
        },
        {
          day: "Day 3",
          title: "Private Estate Visit & Farewell Afternoon Tea",
          items: [
            "9:00am — Stanway House (near Winchcombe, open Tuesdays and Thursdays in summer, £7 standard entry or private group visits arranged directly). A private Jacobean manor house still lived in by the Earl of Wemyss, with the longest gravity-fed water cascade in England (185 metres, the tallest fountain in the UK). Extraordinary and virtually unknown.",
            "11:00am — Winchcombe — one of the Cotswolds' less-visited towns with a superb 15th-century church (St Peter's, free), the Sudeley Castle (£18, home of Catherine Parr — the only English queen buried in a private house), and Winchcombe Pottery (the oldest studio pottery in the UK, open to visitors, free to browse).",
            "1:00pm — Private picnic hamper from your hotel: smoked salmon, Cotswolds Legbar eggs, local cheese selection, artisan bread, and a bottle of English sparkling wine (many Cotswolds hotels offer hamper packages £45–75). Drive to the top of Bredon Hill or a quiet spot on the Cotswold escarpment for a view-with-lunch experience.",
            "3:30pm — Afternoon tea at Buckland Manor (near Broadway, £45–55/person for the full afternoon tea in the garden). Buckland Manor is a 13th-century country house hotel — the afternoon tea on the terrace overlooking the walled garden is as refined as it gets in the Cotswolds.",
            "Evening — Return journey or one final sunset drive on the B4632 (the Broadway to Cheltenham road) — the view from Fish Hill over the Vale of Evesham at sunset, with the hills of Wales visible on clear days, is the perfect Cotswolds goodbye.",
          ],
          cost: "£350–550 total (excluding accommodation)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "£50–75", food: "£20–35", transport: "£10–25 (car rental share)", activities: "£15–30", total: "£95–165/day" },
    { tier: "✨ Mid-Range", accommodation: "£130–200", food: "£35–65", transport: "£20–35", activities: "£25–50", total: "£210–350/day" },
    { tier: "💎 Luxury", accommodation: "£350–600", food: "£70–150", transport: "£30–80 (private driver)", activities: "£50–150", total: "£500–980/day" },
  ],
  mistakes: [
    { icon: "🚗", title: "Attempting the Cotswolds Without a Car", desc: "This is the single biggest mistake — and the most common. Public transport between Cotswolds villages is genuinely limited: one or two buses per day between some villages, none at all between others. Bibury, the Slaughters, Snowshill, Dover's Hill, and Bourton-on-the-Hill are all but inaccessible without a car. Rent from Oxford (2 hours from London Paddington), Cheltenham (1h45 from Paddington), or Birmingham. A small car costs £35–60/day. The freedom to stop at any lane, any view, any unnamed village is the entire experience of the Cotswolds.", color: "bg-red-50 border-red-200" },
    { icon: "📅", title: "Visiting in July–August Without Booking Accommodation Months Ahead", desc: "The Cotswolds has a very small total room inventory — thousands of tiny B&B rooms and boutique hotel suites spread across villages that collectively receive millions of visitors in summer. The good B&Bs (£70–120/night) in Bourton-on-the-Water, Burford, and Chipping Campden fill up 3–4 months in advance for July and August weekends. Book accommodation before you book anything else. Mid-week visits in June or September offer the best combination of weather, crowds, and availability.", color: "bg-orange-50 border-orange-200" },
    { icon: "📸", title: "Skipping Arlington Row Bibury (or Arriving After 10am)", desc: "Arlington Row in Bibury is on the visit list of virtually every Cotswolds visitor, and for good reason — it is genuinely one of the most beautiful streetscapes in England. The mistake is arriving after 10am when it is choked with tour buses, selfie sticks, and crowds that make it almost impossible to photograph. Go at 6am (never locked, always accessible) and you may be entirely alone. Leave before 9am. The same applies to Lower Slaughter — the early morning mist over the Eye brook is the most beautiful thing about it.", color: "bg-yellow-50 border-yellow-200" },
  ],
  tips: [
    { icon: "🌸", title: "Bibury at 6am — Leave Before the Tour Buses Arrive", desc: "The tour buses from Oxford and London begin arriving at Arlington Row from approximately 10am. By 10:30am the narrow lane is genuinely crowded. At 6am in June, the sun rises from the east, illuminating the east-facing cottage fronts in warm gold light, the river is perfectly still, and you may have it entirely to yourself for 30–45 minutes before the first early-bird photographers arrive at 7am. Set your alarm. This is the defining Cotswolds photograph and it requires an early start.", color: "bg-amber-50 border-amber-200" },
    { icon: "💜", title: "Lavender Fields Near Snowshill in July", desc: "Snowshill Lavender Farm (near Broadway Tower, open July–August, free or small donation) is one of the most underrated Cotswolds experiences. Six acres of English lavender in full bloom against the honey-stone field walls and the Cotswold escarpment is a genuinely arresting sight. The farm shop sells lavender products, essential oils, and bundles. Go on a sunny afternoon when the scent is at its peak. The lavender is typically at full bloom in the second and third weeks of July — check snowshilllavender.co.uk for current bloom status.", color: "bg-purple-50 border-purple-200" },
    { icon: "🥾", title: "Walk Between Villages on the Cotswold Way", desc: "The Cotswold Way is a 102-mile National Trail from Chipping Campden to Bath, but you can walk individual sections between villages for 2–6 mile day walks with absolutely no experience required. The best section: Chipping Campden to Broadway via Dover's Hill (6 miles, 2.5 hours, moderate, spectacular escarpment views). Download the OS Maps app (free basic version) or pick up a Cotswold Way trail map from any tourist information centre. Boots essential — the paths cross working farmland and can be muddy after rain.", color: "bg-green-50 border-green-200" },
  ],
  faqs: [
    { q: "Do I need a car to visit the Cotswolds?", a: "Yes — almost certainly. Organised tours from London (departing Victoria Coach Station or Paddington) and Oxford cover the main highlights (Bibury, Bourton-on-the-Water, Burford) in a day without a car, but give you perhaps 30 minutes in each village. To actually explore the Cotswolds — to stop at a random village church, drive a lane between two stone walls with wildflowers overhead, discover a farm shop or a hidden valley — you need a car. Rent from Oxford, Cheltenham, Cirencester, or Birmingham. Budget £35–60/day for a small car." },
    { q: "Which Cotswolds village should I base in?", a: "Bourton-on-the-Water is the most central and has the most accommodation and services, but is also the most visited — it can feel crowded in summer. Burford (slightly south) is quieter, more characterful, with better antiques shops and excellent pubs. Chipping Campden is the most beautiful and quietest of the three, ideal if you want the full honey-stone village experience, but is furthest north. For a luxury stay, Upper or Lower Slaughter (where Lords of the Manor is located) puts you in the most idyllic setting with the fewest crowds." },
    { q: "When is the best time to see the Cotswolds lavender?", a: "English lavender in the Cotswolds typically peaks in mid-to-late July, with the Snowshill Lavender Farm (near Broadway) and a handful of smaller lavender fields around the region at their best in the second and third week of July. The lavender season is short — 3–4 weeks — and varies year to year depending on spring temperatures. Check snowshilllavender.co.uk or local farm social media for the current season's bloom status before planning a lavender-specific visit." },
    { q: "How do I get to the Cotswolds from London?", a: "Train from London Paddington to Kingham station (the most central Cotswolds railway station, 1h15min, £25–50 advance) or to Moreton-in-Marsh (1h35min, direct, £20–45 advance). From Kingham or Moreton-in-Marsh you will need a taxi or pre-booked car rental. From Oxford (45 minutes from Paddington, £15–25) you can hire a car and drive into the Cotswolds in 30 minutes. Alternatively, take a day trip coach from London Victoria (National Express to Cheltenham, then local bus/taxi — total 3 hours). For most visitors, London Paddington to Oxford + car rental is the most practical and affordable combination." },
    { q: "Cotswolds vs Lake District — which should I choose?", a: "They offer fundamentally different experiences. The Cotswolds is quintessential English village culture — honey-stone architecture, cream teas, antiques, gentle hills, country lanes. The Lake District is dramatic mountain scenery, Wordsworth, hiking, and large lakes with fells above them. If you want English pastoral prettiness and the architecture of centuries of wool wealth, choose the Cotswolds. If you want wild landscapes, serious walking, and Romantic-era literary connections, choose the Lake District. Both are exceptional; both require more than 2 days to do justice. Weather-wise, the Cotswolds is drier — the Lake District earns its name." },
  ],
  combineWith: ["bath-2-days", "london-5-days", "edinburgh-4-days"],
  relatedSlugs: ["bath-2-days", "london-5-days", "edinburgh-4-days", "paris-5-days"],
  galleryQuery: "cotswolds england honey stone village bibury arlington row flowers",
};

export const metadata: Metadata = {
  title: "Cotswolds in 3 Days: The Best Villages, Drives & Walks (2026)",
  description: "The complete 3-day Cotswolds guide: best villages to visit, essential driving routes, Bibury at dawn, Snowshill lavender, Cotswold Way walks, and where to stay — budget to luxury.",
  keywords: ["cotswolds itinerary 3 days", "cotswolds travel guide 2026", "best cotswolds villages", "bibury arlington row", "cotswold way walk", "chipping campden broadway", "cotswolds without car", "uk countryside travel"],
  openGraph: {
    title: "Cotswolds in 3 Days: Best Villages, Drives & Walks (2026)",
    description: "Bibury at dawn, Chipping Campden's perfect High Street, Snowshill lavender, Cotswold Way walks — the complete 3-day guide to England's most beautiful countryside.",
    images: [{ url: "https://images.unsplash.com/photo-1509822929464-92b27e59a4e7?w=1200&q=80", width: 1200, height: 630, alt: "Cotswolds Village Honey Stone Cottages England UK" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Cotswolds in 3 Days (2026)", description: "Best villages, Bibury at dawn, Snowshill lavender — complete 3-day Cotswolds guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/cotswolds-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cotswolds in 3 Days: The Best Villages, Drives & Walks (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1509822929464-92b27e59a4e7?w=1200&q=80",
      description: "The complete 3-day guide to the Cotswolds covering the best villages, essential driving routes, Bibury early morning tips, Snowshill lavender, and Cotswold Way walks.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Cotswolds 3 Days", item: "https://www.incredibleitinerary.com/blog/cotswolds-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cotswolds, England, UK",
      description: "An Area of Outstanding Natural Beauty in the English Midlands, famous for its honey-coloured limestone villages, rolling hills, country house hotels, antiques trade, and the Cotswold Way walking trail.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.8330,
        longitude: -1.8433,
      },
      touristType: ["Nature lovers", "Architecture enthusiasts", "Walkers and hikers", "Antiques collectors", "Food and countryside tourists"],
    },
  ],
};

export default function CotswoldsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
