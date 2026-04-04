import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "London",
  country: "UK",
  countryFlag: "🇬🇧",
  slug: "london-5-days",
  heroQuery: "london tower bridge thames england uk skyline",
  heroAlt: "London Tower Bridge over River Thames England UK at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "17 min read",
  intro: "London at 6am — an empty Westminster Bridge with Big Ben glowing amber across the Thames, the South Bank utterly silent, a flat white from a Borough Market stall warming your hands — is one of those travel experiences that makes a city feel genuinely yours. Five days lets you do the Tower of London without the scrum, Notting Hill before the Instagram crowds, a day trip to Windsor or Greenwich, and still have time to nurse a pint in a proper pub and understand why Londoners never quite want to leave.",
  stats: { duration: "5 Days", budgetFrom: "£55", bestMonths: "May–Sep", airport: "LHR / LGW / STN" },
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
        ["UK Standard Visitor Visa", "India is not part of the UK's visa-free list. Apply for a Standard Visitor Visa at vfsglobal.com or the UK Visas & Immigration portal. Fee: £115. Processing time: typically 3 weeks, can be 8+ weeks in peak season — apply early. The visa allows up to 6 months per visit."],
        ["Key Documents", "Current passport (valid 6+ months beyond travel), last 6 months' bank statements showing sufficient funds (minimum £55–90/day), confirmed accommodation bookings, return flight itinerary, employment letter or payslips, travel insurance, and proof of ties to India (property, family, job)."],
        ["Visa Duration & Renewals", "A Standard Visitor Visa is typically granted for 6 months (single or multiple entry). If you hold a valid US visa or a Schengen visa issued in the past 10 years, you may be eligible for the UK Electronic Travel Authorisation instead — check the official UKVI eligibility tool."],
        ["Travel Insurance", "Not technically mandatory for UK visa applications but strongly recommended. Ensure cover includes medical evacuation — the NHS does not cover non-residents and private care costs are significant."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports & ETA",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Electronic Travel Authorisation (ETA)", "From January 2025, USA, Canada, Australia, New Zealand, EU, and most other visa-exempt passport holders need a UK ETA before boarding. Cost: £10. Apply via the official UK ETA app or at gov.uk/apply-uk-visit-visa. Processing: usually same-day, valid for 2 years or until passport expires."],
        ["Irish Citizens", "No ETA or visa required. Ireland and the UK form the Common Travel Area — Irish passport holders have full freedom of movement. No border checks between Ireland and mainland UK."],
        ["Length of Stay", "ETA holders can stay up to 6 months per visit. The ETA is not a guaranteed entry — a Border Force officer retains final discretion. Have proof of accommodation and return ticket accessible."],
        ["Post-Brexit UK Note", "UK is no longer in the EU or Schengen Zone. Days in the UK do not count toward Schengen 90/180-day limits and vice versa. If combining UK with Europe, track both separately."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "£55–90/day",
      days: [
        {
          day: "Day 1",
          title: "Westminster & The South Bank",
          items: [
            "6:00am — Westminster Bridge at sunrise. This is the shot — Big Ben, the Houses of Parliament reflected in the Thames, zero tourists, golden light. Set an alarm. It is absolutely worth it.",
            "7:30am — Flat white from a café on Victoria Street (£3.50). Walk through St James's Park (completely free) — pelicans on the lake, Horse Guards Parade, Buckingham Palace as a backdrop.",
            "10:45am — Changing of the Guard at Buckingham Palace. Free, but arrives outside. Gather at the Palace railings by 10:30am for a decent view. Ceremony lasts 45 minutes, happens daily in summer.",
            "12:00pm — Westminster Abbey exterior and the surrounding streets. Entry is £27 — budget travellers can save this for a future trip, but do walk the full perimeter and look up at the Gothic towers.",
            "1:00pm — Picnic in St James's Park: Marks & Spencer Simply Food on Victoria Street for a sandwich meal deal (£4.50) and a drink. Eat watching the ducks.",
            "3:00pm — Walk across Westminster Bridge to the South Bank. Tate Modern (free, permanent collection). Turbine Hall alone is worth the trip — the scale is extraordinary.",
            "5:00pm — Millennium Bridge to St Paul's Cathedral exterior, then back across. The view from the bridge in both directions — Tate behind, dome ahead — is one of London's great photographs.",
            "7:00pm — Evening walk along the South Bank: Southwark, Borough, past the Globe Theatre exterior (free), under Blackfriars Bridge. Dinner at a Borough Market stall — street food £6–12.",
          ],
          cost: "£20–35 total (free museums + park + cheap food)",
        },
        {
          day: "Day 2",
          title: "The City & Tower of London",
          items: [
            "9:00am — Tower of London opens (£33, book online). Arrive at 9am sharp — the Beefeater tours start early, the Crown Jewels queue is manageable before 10:30am. Allow 2.5 hours.",
            "11:30am — Tower Bridge (walking across: free, bridge tour with glass floor walkway: £12.30). Do the tour — the Victorian engine rooms and the high-level walkway with glass panels over the Thames are genuinely impressive.",
            "1:00pm — Borough Market for lunch. Free to walk around, and the eating options are exceptional: Monmouth Coffee (£3.50), a salt beef bagel from Roast (£8), or a Portuguese custard tart from the bakery stall (£2.50). Budget £8–14 total.",
            "3:00pm — Walk along the South Bank past Bankside to Tate Modern (if not visited Day 1). Then up through the Millennium Bridge area.",
            "4:30pm — Shakespeare's Globe: exterior is free and impressive. The guided tour is £21, the evening plays in summer are the best value theatre experience in London (£5 standing tickets as a 'groundling').",
            "6:00pm — St Paul's Cathedral exterior walk. The dome from below street level on Ludgate Hill is magnificent. Entry £22 if you want inside — budget travellers can appreciate the exterior thoroughly.",
          ],
          cost: "£50–70 total (Tower of London + Tower Bridge tour + food)",
        },
        {
          day: "Day 3",
          title: "West London: Kensington & Notting Hill",
          items: [
            "9:30am — Victoria & Albert Museum (free, one of the world's greatest decorative arts museums). Fashion galleries, Islamic art, cast courts, Raphael Cartoons. Allow 2–3 hours and don't try to do everything.",
            "11:00am — Natural History Museum (free, next door). The blue whale skeleton in Hintze Hall alone justifies the visit. The Darwin Centre for live science, the Vault for minerals and gems. Kids love it; adults who expect to skim it find they're still there 2 hours later.",
            "1:30pm — Hyde Park: free and enormous. Walk from Exhibition Road entrance past the Serpentine lake, the Princess Diana Memorial Fountain, the Rose Garden, Speaker's Corner. London's greatest park.",
            "3:00pm — Portobello Road Market (Fridays and Saturdays only for the full antiques market — otherwise it's a nice street any day). Notting Hill neighbourhood: the coloured houses on Westbourne Grove and Lancaster Road, the Electric Cinema, the bookshops on Portobello.",
            "5:00pm — Kensington Palace (£22, Queen Victoria's birthplace, royal dress collection). Budget travellers: the Kensington Gardens surrounding it are free and beautiful.",
            "7:30pm — Dinner in Notting Hill or Bayswater: Thai or Middle Eastern food on Queensway (£10–16 a main), or a pub dinner on Pembridge Road.",
          ],
          cost: "£25–45 total (free museums + optional paid entries)",
        },
        {
          day: "Day 4",
          title: "Bloomsbury, Covent Garden & Soho",
          items: [
            "9:00am — British Museum (free). The Rosetta Stone, the Elgin Marbles, Egyptian mummies, the Sutton Hoo helmet, the Lewis Chessmen. Plan your visit around 3–4 rooms you genuinely want to see — the Great Court alone (free to enter at any time) is world-class architecture.",
            "11:30am — Walk from Bloomsbury through the Inns of Court (Lincoln's Inn, Gray's Inn — free to walk through on weekdays). These quiet legal gardens are unknown to most tourists and completely extraordinary.",
            "1:00pm — National Gallery on Trafalgar Square (free, permanent collection). Van Gogh's Sunflowers, Monet's Water Lilies, Velázquez's Rokeby Venus, Turner's Fighting Temeraire. One of the world's top five collections, no booking required.",
            "2:30pm — Trafalgar Square and Leicester Square (both free). The Square is London's living room — always something happening.",
            "3:30pm — Covent Garden: the street performers in the piazza are free and often genuinely excellent — living statues, opera singers, acrobats. The market building is free to walk through. Avoid the restaurants (tourist-priced); get a coffee from a side street.",
            "6:00pm — Soho for the evening: Carnaby Street, Berwick Street Market area, the independent record shops. Dinner in Chinatown (just off Leicester Square) — dim sum for £14–20 per person, some of London's best value eating.",
            "9:00pm — Shoreditch (30 min east on the tube): Brick Lane street art, the Old Truman Brewery bars, Boxpark. London's most interesting evening neighbourhood.",
          ],
          cost: "£25–40 total (free museums + food + tube)",
        },
        {
          day: "Day 5",
          title: "Day Trip: Windsor or Greenwich",
          items: [
            "OPTION A — Windsor Castle: Train from London Paddington or Waterloo to Windsor (45 min, £15–22 return). Windsor Castle entry £30 — the largest occupied castle in the world, St George's Chapel (where Harry and Meghan married), the State Apartments. The town of Windsor itself is pleasant for lunch (£12–18 for a pub lunch).",
            "OPTION B — Greenwich: DLR from Bank or Cutty Sark station (30 min, free with Oyster/contactless). Cutty Sark clipper ship £18. Royal Observatory & Planetarium £16. Stand on the Prime Meridian Line (0° longitude). The view back over Canary Wharf from Greenwich Park is one of London's finest urban panoramas — and the park is free.",
            "Afternoon (whichever option): Return to London by 4pm. Final afternoon in your favourite neighbourhood.",
            "5:00pm — Farewell drink: a proper British pub. The George Inn (Southwark, London's last surviving galleried coaching inn, National Trust), the Lamb & Flag (Covent Garden, 17th century), or the Churchill Arms (Kensington, flower-covered exterior, Thai food inside).",
            "7:00pm — Last supper: go Indian. Brick Lane for Bangladeshi curry (£12–18 a main), Southall for North Indian (best outside India, £10–14), or any of the excellent curry houses in Tooting. London's South Asian food is genuinely world-class.",
          ],
          cost: "£45–70 total (day trip + final evening)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "£180–320/day",
      days: [
        {
          day: "Day 1",
          title: "Westminster & Thames at Dusk",
          items: [
            "Check into a 3-star hotel in Westminster, Southwark, or Kings Cross — central enough to walk to most sites. The Hub by Premier Inn range and Point A Hotels offer clean, modern rooms at £70–130.",
            "10:00am — Westminster Abbey interior (£27). The nave, Poet's Corner, the Coronation Chair, Henry VII's Lady Chapel — 1,000 years of English history in one building. Audio guide included.",
            "12:30pm — Lunch at a Dishoom restaurant (Indian breakfast cafe, must-book ahead, £15–20 per person). The Kings Cross branch is convenient and consistently excellent.",
            "2:30pm — Buckingham Palace State Rooms (open July–September, £30–35). The throne room, the picture gallery with Van Dycks and Canalettos, the gilded state rooms. Seasonally limited.",
            "5:00pm — St James's Park and Green Park walk. Evening gin and tonic at the terrace bar of a South Bank hotel.",
            "8:00pm — Dinner at Aqua Shard (Level 31, The Shard) — not the full tasting menu, but the à la carte is reasonable at £35–55/person for extraordinary views over the entire city at night.",
          ],
          cost: "£150–230 total",
        },
        {
          day: "Day 2",
          title: "The City Highlights & Borough Market",
          items: [
            "9:00am — Tower of London with a Yeoman Warder (Beefeater) guided tour included in entry (£33). The Tower's history of treason, imprisonment, and execution is told by guides who actually live on the grounds.",
            "11:30am — Tower Bridge Exhibition (£12.30, glass floor walkway + Victorian engine rooms). Book online to guarantee entry.",
            "1:00pm — Borough Market lunch: treat yourself to a sit-down lunch at Roast (Borough Market, above the market, seasonal British produce, £35–45/person) or a multi-stall feast through the market itself.",
            "3:00pm — Tate Modern: beyond the permanent collection, the Special Exhibitions are £22–25 and consistently world-class.",
            "6:00pm — Shakespeare's Globe evening performance (book weeks ahead in summer — groundling standing tickets £5, seated from £25). The most atmospheric theatre experience in London.",
            "9:00pm — Post-theatre dinner on Bankside: Bala Baya (Israeli, South Bank, £30–40/person) or the Cut Bar & Restaurant.",
          ],
          cost: "£200–280 total",
        },
        {
          day: "Day 3",
          title: "West London Food & Culture",
          items: [
            "9:30am — V&A Museum with a focus on the Fashion galleries and the new Photography Centre. The V&A café (Grade I listed room) is worth having coffee in at £4–5.",
            "12:00pm — Lunch at a Kensington restaurant: Ottolenghi Spitalfields (branch near Notting Hill, modern Mediterranean, £25–35/person) or a proper Sunday roast if visiting on Sunday (best in Notting Hill at The Cow: £18–25).",
            "2:30pm — Kensington Palace state rooms and gardens (£22). The Queen's State Apartments and the exhibition spaces are thoroughly well-curated.",
            "4:30pm — Portobello Road Market: browse the antique stalls, the vintage clothing, the bric-a-brac. The Golborne Road extension at the north end has the best prices and least tourist density.",
            "7:00pm — Dinner reservation at The Ledbury (Notting Hill, 2 Michelin stars — book 4–6 weeks ahead, £95–130/person tasting menu) or The Shed (Notting Hill, seasonal British, more accessible at £35–50/person).",
          ],
          cost: "£180–260 total",
        },
        {
          day: "Day 4",
          title: "Art Galleries & East London",
          items: [
            "9:30am — National Gallery with a 90-minute highlights tour (£15–20/person, context guide). The permanent collection is free; guided access unlocks an entirely different experience.",
            "11:30am — National Portrait Gallery (free, just off Trafalgar Square, recently reopened after renovation) — Tudor monarchs to contemporary portraits, the best single collection of British historical faces.",
            "1:00pm — Lunch at Covent Garden: L'Atelier de Joël Robuchon (£35–55/person for a Michelin-quality lunch at approachable prices in an accessible setting).",
            "3:30pm — Afternoon tea at Fortnum & Mason (St James's, £65–75/person) — the most iconic afternoon tea in London in the most appropriate setting. Book 2–3 weeks ahead.",
            "7:00pm — Shoreditch evening: dinner at Brat (Redchurch Street, Basque-influenced wood-fire cooking, £45–65/person, book weeks ahead) or Smoking Goat (Thai barbecue, equally excellent, £30–40).",
          ],
          cost: "£200–300 total",
        },
        {
          day: "Day 5",
          title: "Windsor Castle Day Trip & Farewell",
          items: [
            "8:30am — Train from London Paddington or Waterloo to Windsor (45 min, £15–22 return). Windsor Castle opens at 10am.",
            "10:00am — Windsor Castle full access (£30). State Apartments, Queen Mary's Dolls' House (astonishing miniature detail), St George's Chapel. Allocate 3 hours.",
            "1:00pm — Lunch in Windsor town: The House on the Bridge restaurant (Thames views, £35–50/person) or a relaxed pub lunch.",
            "4:00pm — Return to London. Optional: Afternoon tea at The Ritz or Claridge's (£75–95/person, book 6–8 weeks ahead) for the definitive luxury afternoon in London.",
            "7:00pm — Farewell dinner: Rules (Maiden Lane, Covent Garden, London's oldest restaurant, est. 1798, traditional British game and roasts, £50–70/person) — the most historically satisfying final meal in the city.",
          ],
          cost: "£150–250 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "£500–2000+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Iconic First Evening",
          items: [
            "Arrive at Heathrow. Private transfer by Mercedes S-Class or Range Rover to your hotel (Blacklane or Carey International, £120–180). Do not take the Heathrow Express — your driver meets you airside.",
            "Check in to The Savoy (Strand, £500–1,000/night), Claridge's (Mayfair, £600–1,200/night), or The Ned (City of London, £350–700/night — the former Midland Bank, seven restaurants in the building). All three are institutions, not merely hotels.",
            "Afternoon: Personal shopping appointment on Bond Street or Mount Street — most luxury houses offer private shopping experiences by appointment. Hermès, Alexander McQueen, and Dover Street Market all have flagship stores within walking distance.",
            "7:30pm — Dinner at The Ritz (£120–180/person, jacket required) or Alain Ducasse at The Dorchester (3 Michelin stars, £180–250/person tasting menu). London's highest tier of dining in the most storied rooms.",
            "10:00pm — Nightcap at Dukes Bar (St James's, the bar where Ian Fleming invented the martini — stirred, never shaken). Martinis are £28 each and are the finest in London.",
          ],
          cost: "£600–1,200 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Tower & Shard Experiences",
          items: [
            "9:00am — Private early-morning access to the Tower of London arranged through the Historic Royal Palaces VIP programme. The Crown Jewels before the public enters is a genuinely different experience.",
            "Midday — Lunch at Oblix (Level 32, The Shard, panoramic restaurant, £60–90/person) — the view over London at midday on a clear day extends to the North Downs.",
            "3:00pm — Private guide for the City of London: the medieval street pattern beneath the modern towers, the livery company halls, the hidden Wren churches. Most visitors never see the Square Mile beyond the Gherkin.",
            "7:00pm — Dinner at Kiln (Soho, no reservations — queue in person from 6:30pm, £35–50/person) for arguably the best Thai food in Europe, or book ahead at Brat (Shoreditch, Michelin-starred Basque cooking over wood fire, £70–90/person).",
          ],
          cost: "£500–900 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Hampton Court & Thames by Boat",
          items: [
            "9:30am — Private launch from Westminster Pier to Hampton Court Palace (2.5h by historic river route, charter £800–1,200 for the day). The Thames from the water — Richmond, Kew, Twickenham — is a completely different country from the city.",
            "12:00pm — Hampton Court Palace (£33 entry or included in Historic Royal Palaces membership). Henry VIII's Great Hall, the Tudor kitchens, the maze, the baroque additions by Wren. Allow 3 hours.",
            "Return by water to Westminster by 5:30pm.",
            "7:00pm — Dinner at Gordon Ramsay (Royal Hospital Road, 3 Michelin stars since 2001, £200–280/person tasting menu). Book 8–12 weeks ahead. The longest-held three-star restaurant in London.",
          ],
          cost: "£800–1,400 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Afternoon Tea, West End & Bespoke Tailoring",
          items: [
            "10:00am — Savile Row fitting appointment. A bespoke suit takes months; however, Norton & Sons, Henry Poole, and others offer made-to-measure services with rapid delivery, and the experience of being fitted in the world's greatest tailoring street is extraordinary even without buying.",
            "1:00pm — Lunch at Scott's (Mount Street, Mayfair, £80–120/person) — London's most glamorous seafood restaurant. The dressed Cornish crab and dover sole are definitive.",
            "3:30pm — Afternoon tea at Sketch (Mayfair, £95–120/person, the most visually spectacular tea in London — the pink room and the egg-shaped pods). Or the Ritz (£75–95/person for the Gold Standard afternoon tea).",
            "7:00pm — West End theatre: the Lyceum (Lion King), the Savoy Theatre, or the Royal Opera House (Covent Garden — a full evening at the opera or ballet, stalls seats £80–200). Pre-book months in advance for premium performances.",
            "Post-theatre: Annabel's (Berkeley Square, London's most famous private members' club — guest entry possible through hotel concierge) or a cocktail at Bar Hemingway, The Connaught Bar (consistently voted world's best bar), or the American Bar at The Savoy.",
          ],
          cost: "£700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Windsor by Helicopter & Farewell",
          items: [
            "9:00am — Private helicopter transfer from London Battersea Heliport to Windsor (15 minutes, £800–1,500 for the charter). Arrive at Windsor before the public.",
            "Windsor Castle private tour arranged through the Royal Collection Trust (available for group bookings — enquire via the official website). Access beyond the standard visitor route.",
            "Lunch: Coworth Park (near Windsor, Dorchester Collection property, 2 AA rosettes, £50–80/person for a countryside lunch).",
            "Return to London by helicopter or chauffeured car (45 min).",
            "Final afternoon: The Churchill Bar & Terrace at The Hyatt Regency Churchill, or the rooftop of Booking.com's new Treehouse Hotel — London spread below.",
            "Farewell dinner: Core by Clare Smyth (Notting Hill, 3 Michelin stars, £250–320/person tasting menu — the first British female chef to hold three stars). The most celebrated kitchen in London right now.",
          ],
          cost: "£1,500–3,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "£20–40", food: "£15–25", transport: "£5–10", activities: "£10–20", total: "£50–95/day" },
    { tier: "✨ Mid-Range", accommodation: "£80–150", food: "£35–65", transport: "£10–20", activities: "£30–60", total: "£155–295/day" },
    { tier: "💎 Luxury", accommodation: "£500–1,200", food: "£120–350", transport: "£50–150", activities: "£100–400", total: "£770–2,100+/day" },
  ],
  mistakes: [
    {
      icon: "🎫",
      title: "Buying Tube Tickets Instead of Using Contactless",
      desc: "Single paper tube tickets cost £2.80–5.60 each and are a complete waste of money. Your contactless bank card (Visa or Mastercard) or Apple/Google Pay works on every bus, tube, Overground, and Elizabeth line. Daily cap: £7.70 (Zone 1–2). Weekly cap: £40.70. You pay the cheapest fare automatically. There is genuinely no reason for a visitor with a contactless card to ever queue at a ticket machine.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏛️",
      title: "Paying for Museums That Are Free",
      desc: "London's world-class museums are free: British Museum, Natural History Museum, V&A, Science Museum, National Gallery, Tate Modern, Tate Britain, National Portrait Gallery, the Wallace Collection, the Horniman, the Sir John Soane's Museum, the Museum of London. The combined value of these collections is incalculable. Visitors who pay for Madame Tussauds (£30+) while missing the British Museum (free) are making the worst trade in travel.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "✈️",
      title: "Taking the Heathrow Express When the Tube Exists",
      desc: "The Heathrow Express is £25 each way to Paddington (£37 if you buy on the day). The Piccadilly line runs from Heathrow directly to central London for £5.50 (or cheaper with a contactless daily cap). Journey time: 50 minutes vs. 15 minutes on the Express. For the 35-minute saving, most travellers are losing £19–32 per person each way — that's a very expensive restaurant meal per trip.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Eating at Restaurants Adjacent to Tourist Sites",
      desc: "Any restaurant within 100 metres of the Tower of London, Westminster, the British Museum, or Covent Garden's piazza is charging a tourist premium. A bowl of pasta near the Tower is £18; the identical dish 3 streets away is £12. Walk 5–8 minutes from any major landmark and prices drop significantly. Borough Market (1 minute from Southwark Cathedral) is the exception: intentionally great food at fair prices.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🪄",
      title: "Madame Tussauds & Overpriced Attractions",
      desc: "Madame Tussauds London charges £33–38 per adult for wax figures and 90 minutes of moderately interesting queuing. The same day spent at the British Museum (free), the Natural History Museum (free), and St Paul's Cathedral (£22) gives you more cultural and visual richness for one-third of the price. London's paid attractions worth doing: Tower of London (£33), Tower Bridge (£12.30), Kensington Palace (£22), the View from The Shard (£32).",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Westminster at 6am: London's Best Free Photo",
      desc: "Westminster Bridge at 6am is completely empty and the light on Big Ben from the east is extraordinary in spring and summer. By 9am there are hundreds of people; by 11am you can barely move. The same applies to Tower Bridge (best from the north bank, 7am), the South Bank (6:30am — the city skyline across an empty riverside walk), and Notting Hill's coloured houses (8am before the weekend crowds). London's most iconic photographs are taken by people who got up early.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🛒",
      title: "Sunday at Borough Market",
      desc: "Borough Market on a Sunday morning (10am–5pm) is the definitive London food experience. Less crowded than Saturday, the full-time traders are all open, and the quality is exceptional: Monmouth Coffee (the best in London), St John Bread (sourdough that people travel specifically for), Brindisa Spanish charcuterie, Neal's Yard Dairy aged cheddars. A Borough Market browse and a coffee costs £5; a full lunch built from stalls costs £15–20 and beats any restaurant nearby.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🖼️",
      title: "National Gallery Portraits: Free & World-Class",
      desc: "The National Gallery's permanent collection on Trafalgar Square is free, with no booking required, and contains the Sunflowers (Van Gogh), The Fighting Temeraire (Turner), Rokeby Venus (Velázquez), The Ambassadors (Holbein), and Water Lilies (Monet). This is one of the five greatest art museum collections in the world. Most visitors spend more time queuing for Madame Tussauds than they spend in this building. The Friday late openings (until 9pm) are quieter than daytime.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "💳",
      title: "Contactless Works on Everything — Even Black Cabs",
      desc: "London's entire transport network accepts contactless Visa/Mastercard and Apple/Google Pay. The daily and weekly fare caps automatically apply. Black cabs (hackney carriages) now accept contactless in the back seat. Buses are cashless — card or contactless only. If you arrive from Heathrow with only cash, there's a cash machine in arrivals, but you'll barely need to use it for transport for your entire stay.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍺",
      title: "Find a Real Pub, Not a Tourist Pub",
      desc: "A traditional London pub lunch (pie and mash, ploughman's, fish and chips) is £10–16 and one of the best-value meals in the city. A pint of ale or bitter is £5–7 in Zone 1–2. The pubs to seek: The George Inn (Southwark, National Trust, 1677), The Lamb & Flag (Covent Garden, 1772), The Harp (Covent Garden, Campaign for Real Ale Pub of the Year), The Churchill Arms (Kensington, flowers everywhere, Thai food inside). Avoid any pub with laminated picture menus near Trafalgar Square.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  faqs: [
    {
      q: "Is London safe for tourists?",
      a: "London is generally very safe for tourists. The practical risks are pickpockets in crowded areas (Oxford Street, Covent Garden, tube carriages), and occasional phone snatching in tourist areas. Use a cross-body bag, keep phones in pockets while walking, and be aware at tube doors. The underground network is safe even late at night, and most neighbourhoods tourists visit are well-policed. Shoreditch and Brixton, often perceived as edgy, are perfectly safe and interesting areas to eat and drink.",
    },
    {
      q: "What's the best area to stay in London?",
      a: "For first-timers: Southwark (South Bank) puts you 10 minutes' walk from the Tate Modern, Borough Market, and Tower Bridge with good tube connections. Kings Cross/St Pancras is excellent for transport links and has dramatically improved as a neighbourhood. Covent Garden is central but expensive. Notting Hill/Kensington is beautiful and walkable to the V&A and Hyde Park. Avoid hotels solely because they're on a famous street — location relative to tube stations matters more.",
    },
    {
      q: "How expensive is London really?",
      a: "London is expensive, but less so if you use the free museums aggressively. A realistic budget traveller spending: £25–40/night hostel, £15–20/day on food (market lunches, supermarket dinners), £5–7 tube/daily cap, and doing primarily free museums and parks can genuinely get by on £55–75/day. Mid-range with a hotel and restaurant dinners is £180–300/day. The cost spike comes from accommodation — even 3-star hotels in Zone 1 average £100–200/night.",
    },
    {
      q: "How do I get from Heathrow Airport to central London?",
      a: "Best value: Piccadilly line (Zone 6 to Zone 1) — £5.50 with contactless, runs every 5–10 minutes, takes 50–60 minutes to central London. Stops at all major stations including King's Cross, Russell Square, and Earls Court. The Elizabeth line (opened 2022) runs from Heathrow to Paddington in 30 minutes for the same price. Black taxi: fixed rate £52–87 depending on your destination zone, takes 45–90 minutes depending on traffic. Heathrow Express: £25, Paddington in 15 minutes — significantly overpriced unless speed is essential.",
    },
    {
      q: "Do I need a UK visa as an Indian citizen?",
      a: "Yes. Indian passport holders require a Standard Visitor Visa for the UK. Apply at least 3 weeks before travel (8+ weeks in summer to be safe) via vfsglobal.com or the UKVI official portal. Fee: £115. You'll need 6 months of bank statements, accommodation confirmation, a return ticket, and proof of employment or business. The visa grants up to 6 months' stay. Unlike Schengen, the UK is a separate visa jurisdiction — a valid Schengen visa does not allow UK entry.",
    },
    {
      q: "What is the tipping culture in London?",
      a: "Tipping is expected but not mandatory. In restaurants: 10–15% is standard if service charge isn't already added (many London restaurants now add 12.5% automatically — check the bill). In pubs: tipping is not customary for drinks at the bar; you can offer 'and one for yourself' to the bartender. Taxis: round up or add 10%. No tip required at fast food, takeaways, or market stalls. If service charge is included on the bill, you are not obligated to add more.",
    },
    {
      q: "When is the best time to visit London?",
      a: "May to September is the classic window — long days, warm weather (18–25°C), outdoor markets in full swing, all attractions open. June and July are the most reliably warm. August brings school holidays and more crowds at top sites. September is excellent — summer warmth lingers, tourist numbers drop, the new theatre and exhibition season begins. December is magical: Christmas lights on Oxford Street and Regent Street, ice rinks at Somerset House and the Natural History Museum, mulled wine at outdoor markets. January is the cheapest month with fewer crowds but cold and short days.",
    },
  ],
  combineWith: ["edinburgh-4-days", "paris-5-days", "amsterdam-4-days"],
  relatedSlugs: ["edinburgh-4-days", "paris-5-days", "amsterdam-4-days", "rome-4-days"],
  galleryQuery: "london tower bridge big ben thames southbank buckingham palace",
};

export const metadata: Metadata = {
  title: "London in 5 Days: Free Museums, The Tube & What to Actually Spend (2026)",
  description: "Complete London 5-day itinerary for every budget — which free museums to visit, how to use contactless instead of tube tickets, and what the city actually costs in 2026.",
  keywords: ["london itinerary 5 days", "london travel guide 2026", "london budget travel", "london free museums", "london things to do", "uk travel guide", "london tube tips"],
  openGraph: {
    title: "London in 5 Days: Free Museums, Tube Tips & Real Costs (2026)",
    description: "Tower of London, Borough Market, free world-class museums, and contactless transport — the complete London guide for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80", width: 1200, height: 630, alt: "London Tower Bridge over River Thames England UK" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "London in 5 Days (2026)", description: "Free museums, contactless tube tips, real pound costs — complete London itinerary." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/london-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "London in 5 Days: Free Museums, The Tube & What to Actually Spend (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
      description: "5-day London itinerary covering free world-class museums, contactless Oyster card tips, Tower of London, Borough Market, and day trips to Windsor or Greenwich — all three budget tiers.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "London 5 Days", item: "https://www.incredibleitinerary.com/blog/london-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "London, United Kingdom",
      description: "The capital of the United Kingdom — home to the Tower of London, Westminster Abbey, Buckingham Palace, and the world's greatest concentration of free world-class museums.",
      touristType: ["Cultural tourists", "History enthusiasts", "Architecture lovers", "Museum visitors", "Food travellers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
  ],
};

export default function LondonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
