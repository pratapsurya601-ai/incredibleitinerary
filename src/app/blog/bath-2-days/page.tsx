import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Bath",
  country: "UK",
  countryFlag: "🇬🇧",
  slug: "bath-2-days",
  heroQuery: "bath roman baths england uk georgian architecture",
  heroAlt: "Roman Baths with Bath Abbey reflection in the sacred spring water England UK",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "10 min read",
  intro: "Bath at 7am — the Georgian terraces glowing honey-gold in early light, steam rising from the thermal springs that have drawn visitors since the Romans arrived in 43 AD, the Abbey tower catching the sun above a still-quiet Stall Street — is one of England's most quietly spectacular sights. Two days gives you the Roman Baths without the midday rush, the rooftop infinity pool at Thermae Spa, Pulteney Bridge at sunset, and enough time for a Stonehenge day trip or a cream tea in the oldest house in Bath.",
  stats: { duration: "2 Days", budgetFrom: "£50", bestMonths: "Apr–Oct", airport: "BRS (Bristol, 30 min) or LHR (2h)" },
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
        ["UK Visa Required", "India is not part of the UK's visa-free list. You must apply for a Standard Visitor Visa before travel. Apply online at gov.uk/standard-visitor-visa. Fee: £115. Processing time: 3–8 weeks standard. Priority processing (£500 extra) typically takes 5 business days. Apply at least 6 weeks before your travel date."],
        ["Key Documents", "Passport valid for your entire stay, bank statements (minimum £2,000 equivalent for a 2-week trip), proof of accommodation (hotel bookings), return flight tickets, employment letter with salary details and leave approval, and travel/medical insurance. UK visa does not require a specific minimum coverage amount but comprehensive medical insurance is strongly recommended."],
        ["eVisa System", "As of 2024, the UK moved to a digital visa (eVisa) system. Your biometric residence permit or visa is now digital — linked to your passport. You will receive an eVisa online letter as confirmation. No physical stamp or sticker is issued in most cases. Ensure you keep your UKVI account accessible."],
        ["UK vs Schengen", "The UK is not part of the Schengen Zone. A UK Standard Visitor Visa and a Schengen visa are entirely separate documents — you need both if combining a Bath trip with continental Europe. Days spent in the UK do not count toward your Schengen 90/180-day allowance, and vice versa. Bath is in England; the same UK visa covers England, Scotland, Wales, and Northern Ireland."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free for Most", "USA, Canada, Australia, New Zealand, and most EU passport holders can enter the UK visa-free for up to 6 months as Standard Visitors. No pre-approval required for stays under 6 months. Ensure your passport has at least 6 months validity remaining from your return date."],
        ["UK ETA from 2025", "A new UK Electronic Travel Authorisation (ETA) is required from January 2025 for most visa-exempt visitors, including USA, Canada, Australia, New Zealand, and EU citizens. Cost: £10, valid 2 years for multiple trips. Apply online at gov.uk/apply-uk-visa-and-immigration before travel — takes minutes. The ETA is linked electronically to your passport; no physical document is issued."],
        ["EU Citizens Post-Brexit", "EU citizens are no longer automatically entitled to live and work in the UK. For short tourist visits, EU nationals can enter visa-free but will need the UK ETA from 2025. Ensure you have proof of onward travel and sufficient funds — immigration officers can ask for evidence of your travel purpose and financial means."],
        ["Driving & Currency", "The UK drives on the left, uses the pound sterling (GBP — not the euro), and Bath is located in Somerset, southwest England. Bath Spa train station is a 5-minute walk from the Roman Baths. For a Stonehenge day trip from Bath, the dedicated bus service (no car required) departs from Bath Bus Station — easiest option for non-drivers."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "£50–85/day",
      days: [
        {
          day: "Day 1",
          title: "Roman Baths, Abbey, Thermae Spa & Pulteney Bridge",
          items: [
            "9:00am — Roman Baths (£18–22 adult entry, MUST pre-book at romanbaths.co.uk — sells out weeks in advance in summer, often months ahead in July/August). Arrive at opening for the smallest crowds. The audio guide narrated by Bill Bryson is included and genuinely excellent — follow it properly rather than rushing through. The Great Bath itself (the open-air pool fed by the sacred spring), the excavated Roman temple precinct, the museum of Roman finds including the gilded bronze head of Minerva, and the hypocaust underfloor heating system all take 2–2.5 hours to see properly.",
            "11:30am — Bath Abbey (free entry, £8 for the tower tour). The fan vaulting in the interior — completed in 1611 — is considered the finest example in England. The west front with its carved angels ascending and descending Jacob's Ladder is one of the most distinctive church facades in the country. The tower tour takes you through the bell chamber (10 bells, regularly rung) and up to roof-level views across the Georgian city.",
            "1:00pm — Lunch: Pick up food from the covered market on Grand Parade or the Guildhall Market (indoor, cold cuts, local cheese, bread, £5–8 per person) and eat at Parade Gardens on the River Avon (free in winter, £1–2 seasonal charge in summer). Or try a Cornish pasty from one of the bakeries on Stall Street (£4–5).",
            "2:30pm — Pulteney Bridge: one of only four bridges in the world with shops built across its full span on both sides (alongside Florence's Ponte Vecchio, Venice's Rialto, and Erfurt's Krämerbrücke). Free to walk across. The weir immediately below the bridge creates a perfect reflection in the still pool above. Walk Great Pulteney Street behind the bridge — 1,100 feet long, 100 feet wide, the grandest Georgian street in Bath.",
            "3:30pm — Holburne Museum (free permanent collection, at the far end of Great Pulteney Street). Thomas William Holburne's collection includes works by Gainsborough, Guardi, Ramsay, and Turner. The building — an 18th-century villa extended by Eric Parry architects in 2011 — is in a lovely garden setting beside the canal.",
            "4:30pm — Thermae Bath Spa (£45 for a standard 2-hour session, BOOK WEEKS OR MONTHS AHEAD at thermaebathspa.com — this is the only place in the UK to bathe in natural thermal waters). The open-air rooftop infinity pool at 33.5°C with a 360-degree view over Bath's UNESCO World Heritage skyline is the defining Bath experience. Book a late afternoon session and stay for dusk — the sky turns orange over the Georgian rooftops and the water steams more visibly in cooler air.",
            "7:30pm — Dinner: Milsom Street or Kingsmead Square restaurant quarter. The Scallop Shell (Monmouth Place, fish and chips £14–16, frequently ranked among the best in south-west England) or The Pig & Fiddle (Saracen Street, a large local pub with real ales and pub food £10–14). Budget £15–20 total for dinner.",
          ],
          cost: "£65–85 total (Roman Baths £20, Thermae £45, food £15–20)",
        },
        {
          day: "Day 2",
          title: "Royal Crescent, Jane Austen & Stonehenge Day Trip",
          items: [
            "7:00am — Royal Crescent before the tourists arrive: 30 Georgian townhouses arranged in a sweeping elliptical arc, the most celebrated example of Georgian architecture in England and possibly the world. The exterior is completely free to view. At 7am on a weekday you may have the entire Crescent to yourself — the morning light hits the honey-Bath-stone from the east, illuminating the curved facade in warm gold. The view looking up from the ha-ha lawn (the sunken barrier that keeps the Crescent's grass separate from the adjacent park) is the iconic Bath photograph.",
            "8:00am — The Circus (5 minutes' walk from Royal Crescent): a complete circle of 33 Georgian townhouses with three symmetrical entrance streets, designed by John Wood the Elder and completed by his son John Wood the Younger in 1768. The mature plane trees in the central garden were planted in the 19th century and now tower above the rooflines — the combination of Georgian limestone and cathedral-scale tree canopy is unlike anywhere else in England. Notable former residents: William Pitt the Elder, David Livingstone, and Thomas Gainsborough all lived here.",
            "9:30am — No. 1 Royal Crescent Museum (£12.50 adult, booking advisable in peak season at no1royalcrescent.org.uk). A Georgian townhouse restored exactly as it would have appeared in the 1770s: original plaster, period wallpapers, correct furniture, silverware, and kitchenware. The contrast between the grand public rooms (designed for entertaining and displaying status) and the servants' quarters below stairs (cramped, dark, functional) is the most telling thing about Georgian social life.",
            "11:00am — Jane Austen Centre (£14 adult, Gay Street, near The Circus). Jane Austen lived in Bath from 1801 to 1806 — the years she found most creatively difficult, largely because Bath's social scene exhausted her. The centre covers her relationship with Bath through original letters, Regency-era costume (you can try a bonnet), and well-curated exhibits connecting specific Bath locations to scenes in Northanger Abbey and Persuasion. The Regency Tea Room upstairs serves cream teas for £12.",
            "12:30pm — Stonehenge Day Trip: the Stonehenge Tour bus departs Bath Bus Station approximately twice daily (check current timetable at bath-minibus-hire.co.uk or visit the Bath i-Centre). The journey takes approximately 1 hour 20 minutes via Lacock village (a beautifully preserved medieval village used in Pride and Prejudice and Downton Abbey — brief stop on some tours). English Heritage entry: £38 adult. Total cost including bus transport: approximately £52–58. BOOK MONTHS IN ADVANCE in summer. The stones in person — 5 metres tall, up to 25 tonnes each, transported from Wales 4,500 years ago using technology nobody fully understands — are both more overwhelming and more mysterious than photographs suggest.",
            "OR 12:30pm — Wells & Cheddar Gorge alternative (1 hour from Bath by bus/car): Wells Cathedral is the smallest city in England and has one of the finest medieval cathedrals, including the extraordinary scissor arches in the nave. The Cathedral Close is among the most peaceful spots in England. Cheddar Gorge (20 minutes from Wells) — the deepest gorge in the UK, and the village where Cheddar cheese was invented — has show caves (£18) and a walk along the top of the gorge (free, spectacular views).",
            "Evening — Return to Bath. Sally Lunn's bun (4 North Parade Passage, oldest house in Bath built 1482): order the famous Sally Lunn Bun sweet (clotted cream and strawberry jam) or savoury (smoked salmon and cream cheese), £8–12. The original kitchen museum in the cellar is free to visit. This is the one Bath food experience that is genuinely irreplaceable.",
          ],
          cost: "£60–80 total (Stonehenge bus + entry ~£55, museum £12.50, food £15)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "£120–200/day",
      days: [
        {
          day: "Day 1",
          title: "Roman Baths, Pump Room, Cross Bath & Fine Dinner",
          items: [
            "9:00am — Roman Baths with the expanded Pump Room ticket (£22, book in advance). The Pump Room is the original Georgian assembly room — the central social hub for Regency-era Bath, where Austen's characters came to take the waters and be observed. Try a glass of thermal water at the pump (warm, sulphurous, ancient — free to taste, not to the taste of most). The Pump Room Restaurant inside offers a proper sit-down lunch.",
            "12:00pm — Lunch at The Pump Room Restaurant (overlooking the Great Bath, £18–25 for a two-course lunch, traditional British: smoked salmon, dressed crab, potted shrimps, Bath Oliver biscuits). The setting — Georgian chandeliers, a string trio playing background classical music, the Roman spring visible through the windows — is worth the price.",
            "2:00pm — Cross Bath private thermal pool (on Hot Bath Street, operated by Thermae Bath Spa). The Cross Bath is an intimate open-air Georgian pool — octagonal, stone-walled, surrounded by 18th-century architecture — bookable by the 55-minute session for up to 8 people at once. Cost: £45 per person. More exclusive and atmospheric than the main Thermae Bath Spa building, and in a genuinely historic setting (the original Roman cross spring). Book at thermaebathspa.com.",
            "4:30pm — Holburne Museum gallery then walk the full length of Great Pulteney Street and across Pulteney Bridge at golden hour. The Pulteney Bridge weir is at its most photogenic in late afternoon with the low sun on the water.",
            "7:30pm — Dinner reservation: The Olive Tree (Russell Street, 1 AA Rosette, £25–45 mains, modern British with local South West produce) or Acorn Restaurant (Moorfields, Bath's leading plant-based restaurant, £18–28 mains, Michelin Plate recommended). Both require advance booking — at least 1–2 weeks ahead.",
          ],
          cost: "£130–180 total",
        },
        {
          day: "Day 2",
          title: "Georgian Quarter, Stonehenge Private Tour & Afternoon Tea",
          items: [
            "8:00am — Full Georgian quarter walking circuit: Royal Crescent (exterior, ha-ha lawn) → The Circus → Assembly Rooms (free exterior; the Fashion Museum inside holds the largest collection of historic clothing in the world, £12 adult) → Milsom Street → Broad Street → The Bridge → Walcot Street (Bath's independent shops quarter, vintage, antiques, local art). Allow 2 hours at a relaxed pace.",
            "10:00am — No. 1 Royal Crescent Museum (£12.50, book ahead for timed entry). One of the best house museums in England for understanding what Georgian life actually looked, smelled, and felt like.",
            "12:30pm — Stonehenge private tour with a specialist guide (£65–90/person all-inclusive including guide, transport, and English Heritage entry). Private guide tours from Bath typically travel by comfortable minivan and stop at Lacock village (Pride and Prejudice filming location) on the return. The guide provides context on Neolithic astronomy, Bronze Age burial mounds, and the ongoing scientific debates about how and why Stonehenge was built.",
            "4:00pm — Return to Bath. Afternoon cream tea at the Francis Hotel (Queen Square, £18–22 for full afternoon tea: scones, clotted cream, jam, finger sandwiches, cakes, and a pot of Bath-blend tea) — proper English afternoon tea in a Grade I listed Georgian building overlooking the square.",
            "7:00pm — Evening stroll to Pulteney Bridge at dusk (approximately 20:00–20:30 in British Summer Time, April–September). The bridge and weir lit softly at dusk is the most romantic sight in Bath. Dinner at Sotto Sotto (North Parade, Italian in vaulted stone cellars beneath a Georgian building, £15–25 mains, booking essential).",
          ],
          cost: "£150–220 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "£300–700/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Private Baths Tour & Menu Gordon Jones",
          items: [
            "Check in to The Royal Crescent Hotel & Spa (16 Royal Crescent) — two Grade I listed Georgian townhouses occupying the centre of the Royal Crescent. The garden rooms overlook the private walled garden and croquet lawn. The hotel's spa (residents: £35 day-use supplement) uses thermal waters. Rooms: £400–900/night depending on season and room type. The 1 Crescent restaurant is excellent for breakfast.",
            "Or Gainsborough Bath Spa (Beau Street, 5-star) — the only hotel in Bath built directly over the thermal springs. Guests access a private thermal spa (included in the room rate: £350–800/night) with three thermal pools of natural spring water entirely reserved for residents. The SPA Village is the most refined way to experience Bath's thermal heritage.",
            "Afternoon — Private guided Roman Baths tour: the hotel concierge can arrange a specialist guide (£80–120/person, 2 hours). Some evening dates offer the Twilight Tour (check romanbaths.co.uk — select evenings, £33–38, torchlit, small group) where the Roman Baths are lit by candles and torches rather than strip lights, and the crowds are gone — a completely different and profoundly atmospheric experience.",
            "6:30pm — Pre-dinner drinks at The Crystal Palace pub (Abbey Green, one of Bath's most historic pub interiors) or at the hotel bar with a glass of local English sparkling wine.",
            "8:00pm — Dinner at Menu Gordon Jones (Alcombe Road, Bath's most acclaimed and theatrical dining experience — 6 surprise courses, no menu, the chef decides, £60–85/person food only, wine pairing £35 extra). Book 4–6 weeks in advance — tables are extremely limited. One of the most original and personal fine dining experiences in south-west England.",
          ],
          cost: "£450–750 total (excluding hotel room)",
        },
        {
          day: "Day 2",
          title: "Stonehenge Special Access & Buckland Manor Afternoon Tea",
          items: [
            "7:30am — Royal Crescent sunrise: step outside the hotel at 7:30am and the Crescent is typically empty. The hotel concierge at Royal Crescent Hotel can sometimes arrange a private historical interpretation walk of the Georgian quarter with a specialist guide.",
            "9:00am — English Heritage Stonehenge Special Access visit (stonehenge.co.uk/visit/special-access-events, £55–75/person, limited availability booked direct). This special access experience allows entry inside the stone circle itself — standing among the Sarsen stones rather than viewing from the perimeter path — in a small group before the site opens to the general public. An archaeologist or English Heritage specialist accompanies the group. Profoundly different from the standard visit. Book months ahead.",
            "12:30pm — Return via Lacock: lunch at the Red Lion Inn in Lacock village (a National Trust village of extraordinary preserved medieval buildings used in Pride and Prejudice 1995, Downton Abbey, and Harry Potter). Pub lunch with a local ale: £15–20.",
            "3:00pm — Return to Bath for the Gainsborough Spa if not already used (residents only, natural thermal pools) or the Thermae Bath Spa rooftop pool for a final soak before departure.",
            "4:30pm — Afternoon tea at Buckland Manor near Broadway (30 minutes drive from Bath, £45–55/person for the full formal afternoon tea in the garden of a 13th-century country house hotel). The Cotswolds countryside setting makes this the most beautiful afternoon tea in the region. Or afternoon tea at the Royal Crescent Hotel itself (£38–45/person, in the garden or drawing room).",
            "7:00pm — Final Bath dinner: The Dower House Restaurant at the Royal Crescent Hotel (2 AA Rosettes, £35–60 mains, classical French-influenced cooking) or return to Acorn Restaurant or The Olive Tree.",
          ],
          cost: "£400–650 total (excluding hotel room)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "£35–70 (YMCA Bath £35–55, Toad Hall Guest House £65–90)",
      food: "£15–25 (market food, pub meals, pasties)",
      transport: "£5–10 (bus to Stonehenge separate)",
      activities: "£25–40 (Roman Baths £20, Abbey Tower £8)",
      total: "£80–145/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "£100–180 (The Queensberry Hotel £130–220, Brooks Guesthouse £100–180)",
      food: "£30–55 (restaurant meals, cream teas)",
      transport: "£10–20 (private Stonehenge tour share)",
      activities: "£30–50 (Thermae Spa £45, museums)",
      total: "£170–305/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "£350–900 (Royal Crescent Hotel £400–900, Gainsborough Bath Spa £350–800)",
      food: "£60–150 (fine dining, afternoon tea)",
      transport: "£20–60 (private transfers, early-access tours)",
      activities: "£50–100 (private guides, special access events)",
      total: "£480–1,210/day",
    },
  ],
  mistakes: [
    {
      icon: "🎟️",
      title: "Not Pre-Booking Roman Baths and Thermae Spa",
      desc: "Both the Roman Baths (romanbaths.co.uk) and Thermae Bath Spa (thermaebathspa.com) sell out weeks — sometimes months — in advance in summer. Walk-in tickets are occasionally available at the door but cannot be relied on, especially for the Thermae Spa rooftop pool which has limited capacity by design. In July and August, same-day Thermae Spa availability is essentially non-existent. Book both before you book your train, hotel, or anything else for your Bath trip. This single mistake ruins more Bath trips than any other.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Skipping the Stonehenge Day Trip",
      desc: "Many visitors dismiss Stonehenge as 'touristy' or 'overrated' — usually people who have only seen photographs. Standing 5 metres from stones that weigh up to 25 tonnes, were moved 200 miles from Pembrokeshire in Wales approximately 4,500 years ago, and have stood in precise astronomical alignment ever since — is an experience of genuinely different scale to any photograph. The Stonehenge Tour bus from Bath (about £52 all-inclusive) means no car is required. Book at least 2 weeks ahead in summer.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "⏰",
      title: "Visiting Bath as a Day Trip from London",
      desc: "Bath is 1 hour 25 minutes from London Paddington by GWR train (£15–45 advance booking). Many visitors attempt Bath as a long day trip — arriving at 10am, leaving at 7pm. This gives you barely enough time for the Roman Baths and a walk around the city centre. You will miss the Royal Crescent at dawn, the Thermae Spa at sunset, dinner in a vaulted cellar, and the city when the day-trippers have gone. Bath genuinely deserves two nights minimum.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "📸",
      title: "Royal Crescent at 7am for Empty-Street Photos",
      desc: "By 10am the Royal Crescent has parked cars, tour groups, and steady streams of visitors. At 7am on a weekday — especially in spring — it is often completely empty and the morning light from the east hits the Georgian stone perfectly. The view from the ha-ha lawn looking up at the sweep of all 30 houses in one arc is the defining Bath photograph. Walk up from the city centre (15 minutes uphill) or take a taxi. Set your alarm.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Pulteney Bridge at Sunset for the Perfect Reflection",
      desc: "The Pulteney Bridge weir is Bath's great romantic sight. Position yourself on the north bank of the Avon (the Parade Gardens side, facing west) approximately 45 minutes before sunset. The weir creates a continuous sheet of water that catches the last light of the day in long gold reflections. The bridge's arch and the weir's curve make a natural frame. Late April through September gives the longest golden evenings — the best are in May and early June when the light is at its warmest.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍞",
      title: "Sally Lunn's Bun: The Bath Food Experience You Cannot Skip",
      desc: "Sally Lunn's (4 North Parade Passage, open daily) occupies the oldest house in Bath, built in 1482, and has been baking its distinctive large, soft, slightly enriched bun since at least the 1680s. The bun is unlike anything else in English baking — part brioche, part milk roll — and is served sweet (clotted cream and preserves, £8) or savoury (smoked salmon and cream cheese, £11). The medieval kitchen in the basement is free to visit even if you don't eat. Skip any chain café and come here.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    { q: "Can I swim in the Roman Baths?", a: "No. The Roman Baths are a heritage museum and archaeological site — the water in the Great Bath and other pools is not treated for swimming. Bathing was stopped in the 1970s after a meningitis outbreak. If you want to bathe in Bath's natural thermal waters (which flow at 46°C from the spring before being cooled), visit Thermae Bath Spa on nearby Beau Street — the only place in the UK where bathing in natural thermal spring water is possible. Book weeks or months in advance." },
    { q: "Is Stonehenge worth visiting from Bath?", a: "Yes — emphatically, if you have not been before. Stonehenge is 24 miles from Bath (about 1 hour by the tour bus, which also stops at Lacock village). English Heritage entry is £38, total cost with transport approximately £52–58. The stones in person — larger and more mysterious than photographs suggest — are worth the trip. Go in the morning or early afternoon for the best light. The English Heritage visitor centre is well-designed with an excellent exhibition on Neolithic Britain. Book months ahead in July and August." },
    { q: "How do I get from London to Bath?", a: "The GWR (Great Western Railway) train from London Paddington to Bath Spa station is the standard route — fast, frequent, and direct. Journey time: approximately 1 hour 25 minutes. Advance tickets: £15–25. Walk-up fares: £45–75. Trains run every 30 minutes throughout the day. Bath Spa station is a 5-minute walk from the Roman Baths and 10 minutes from the city centre. Alternatively: National Express coach from London Victoria (2.5–3 hours, £10–20 advance) or driving via M4 motorway (approximately 2 hours from central London). The train is by far the most convenient." },
    { q: "What is the Jane Austen connection to Bath?", a: "Jane Austen lived in Bath from 1801 to 1806, after her father unexpectedly moved the family there. She was not happy — the city's relentless social round and the absence of quiet country life made her unproductive for much of this period. Despite this, Bath permeates two of her six completed novels: Northanger Abbey (set almost entirely in Bath, following naive Catherine Morland through the Pump Room, Assembly Rooms, and country houses) and Persuasion (where the elegant Captain Wentworth courts Anne Elliot against the backdrop of Bath's social hierarchies). The Jane Austen Centre on Gay Street covers both her biography and her literary Bath in well-curated detail." },
    { q: "How many days do I need in Bath?", a: "Two nights (two full days) is the ideal minimum for a first visit. One day is enough to see the Roman Baths and the city centre highlights but leaves no time for Thermae Spa, the Stonehenge day trip, the Royal Crescent at dawn, or any sense of the evening city. Three days allows a leisurely pace with both Stonehenge and a Wells/Cheddar Gorge excursion, plus time to explore Bristol (15 minutes by train — Banksy's hometown, with exceptional street art and the Clifton Suspension Bridge). If you have only one day from London, it is worth going — but know that you are getting a fraction of what Bath offers." },
  ],
  combineWith: ["london-5-days", "cotswolds-3-days", "edinburgh-4-days"],
  relatedSlugs: ["london-5-days", "cotswolds-3-days", "edinburgh-4-days", "paris-5-days"],
  galleryQuery: "bath england roman baths georgian architecture abbey thermae spa",
};

export const metadata: Metadata = {
  title: "Bath in 2 Days: Roman Baths, Thermae Spa & Stonehenge Day Trip (2026)",
  description: "The complete 2-day Bath guide: pre-booking the Roman Baths, Thermae Spa rooftop pool secrets, Stonehenge day trip logistics, Georgian architecture walks, and where to eat — budget to luxury.",
  keywords: ["bath itinerary 2 days", "bath england travel guide 2026", "roman baths tickets", "thermae bath spa", "stonehenge day trip from bath", "bath uk things to do", "georgian architecture bath"],
  openGraph: {
    title: "Bath in 2 Days: Roman Baths, Thermae Spa & Stonehenge (2026)",
    description: "Pre-booking secrets for Roman Baths and Thermae Spa, Stonehenge day trip logistics, and the best of Bath's Georgian architecture — from budget to luxury.",
    images: [{ url: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80", width: 1200, height: 630, alt: "Roman Baths Bath England Georgian Architecture" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Bath in 2 Days (2026)", description: "Roman Baths booking secrets, Thermae Spa tips, Stonehenge day trip — complete guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/bath-2-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Bath in 2 Days: Roman Baths, Thermae Spa & Stonehenge Day Trip (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&q=80",
      description: "The complete 2-day Bath guide covering Roman Baths, Thermae Bath Spa, Stonehenge day trips, Georgian architecture, Jane Austen connections, and where to stay and eat at every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Bath 2 Days", item: "https://www.incredibleitinerary.com/blog/bath-2-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Bath, England, UK",
      description: "A UNESCO World Heritage city in Somerset, England, famous for its Roman-built baths, Georgian architecture, Jane Austen connections, and the only natural thermal spa in the UK.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.3811,
        longitude: -2.3590,
      },
      touristType: ["History enthusiasts", "Architecture lovers", "Wellness travelers", "Literary tourists", "Day-trippers from London"],
    },
  ],
};

export default function BathPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
