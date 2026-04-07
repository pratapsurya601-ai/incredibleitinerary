import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Beijing",
  country: "China",
  countryFlag: "🇨🇳",
  slug: "beijing-5-days",
  heroQuery: "beijing great wall of china forbidden city tiananmen",
  heroAlt: "Beijing Great Wall of China stretching across misty mountains at sunrise",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro: "Beijing at 7am — the Forbidden City glowing amber in the first light before the crowds, a bowl of jianbing (egg crepe) from the street cart on the corner for ¥8, the hutong alleyways still misty and quiet before the rickshaws start — is one of the genuinely great travel experiences in Asia. Five days gives you the Great Wall without the tourist madness, the Forbidden City's hidden courtyards, Peking duck at the institution that invented it, and enough time to wander the ancient hutongs and feel the old city breathe.",
  stats: { duration: "5 Days", budgetFrom: "¥200", bestMonths: "Sep–Oct, Apr–May", airport: "PEK (Capital) or PKX (Daxing)" },
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
        ["Visa Required", "Indian passport holders require a Chinese tourist visa (L visa). Apply at the Chinese Embassy in New Delhi, Mumbai, Kolkata, or Chennai, or through an authorised visa agent. Fee: ¥400–600 (varies by processing speed). Standard processing: 2–4 business days; apply 2–4 weeks before travel."],
        ["Key Documents", "Passport valid 6+ months beyond return date, completed visa application form, recent passport photo, confirmed round-trip flight itinerary, hotel booking confirmation for every night, bank statements showing sufficient funds (approx. ¥500/day minimum), and travel insurance."],
        ["72-Hour Transit Visa", "Some nationalities qualify for a free 72-hour (or 144-hour in select cities) transit without visa if transiting through Beijing PEK. Indian passport holders must check current eligibility — as of 2026 this may apply. Confirm on the Chinese Embassy website before relying on it."],
        ["VPN Before Entry", "This is effectively a visa concern for digital travellers: Google, WhatsApp, Instagram, and most Western apps are blocked in China. Download a reputable VPN app before boarding your flight — VPN apps are blocked within China and cannot be downloaded after landing."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free Trial (2024–2025)", "As of late 2024, China introduced unilateral 15-day visa-free access for citizens of France, Germany, Italy, Netherlands, Spain, Switzerland, Ireland, Hungary, Austria, Belgium, Luxembourg, and several other European nations. Check whether this policy has been extended to 2026 and whether your passport is included — it changes."],
        ["USA / Canada / UK", "US, Canadian, and UK passport holders still require a Chinese visa as of 2026. Apply at the Chinese Consulate or through a visa agency. Fee: approx. USD 140 for US citizens (reciprocal fee). Processing: 4 business days standard."],
        ["72/144-Hour Transit", "The 144-hour transit visa-free policy applies at Beijing PEK for passengers transiting to a third country. You can leave the airport and explore Beijing without a full visa — a genuine option for stopovers. Confirm eligibility for your passport on the official China government portal."],
        ["ETIAS Note", "China is not part of ETIAS. The EU ETIAS system covers Schengen-area travel and has no bearing on China visas. Arrange your China visa independently of any European travel authorisation you hold."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "¥200–350/day",
      days: [
        {
          day: "Day 1",
          title: "Tiananmen Square, Forbidden City & Wangfujing",
          items: [
            "8:00am — Tiananmen Square (free entry) at opening — the world's largest public square at 440,000m². Arrive early for the flag-raising ceremony at sunrise (exact time varies by season — Google it the night before, it's worth the early start). The scale only makes sense when you're standing in it.",
            "9:00am — Forbidden City (Palace Museum, ¥60, book online at dpm.org.cn — daily visitor cap is 80,000, sold out same-day in peak season). Enter through the Meridian Gate (Wumen). Give yourself a minimum of 4 hours — most visitors underestimate the scale and rush out having seen only 20% of it.",
            "11:00am — The Hall of Supreme Harmony, Hall of Central Harmony, Hall of Preserving Harmony — the ceremonial core of the palace. Then the Inner Court: Palace of Heavenly Purity, Hall of Union, Palace of Earthly Tranquillity. The eastern palaces are quieter and architecturally extraordinary.",
            "1:30pm — Exit the Forbidden City through the Gate of Divine Might (north gate) and walk immediately up Jingshan Park (¥2, coal hill). The panoramic view of the Forbidden City from the hilltop pavilion — the entire palace complex laid out below you — is the best single photograph in Beijing. Crowds peak at noon; aim for 2pm.",
            "3:30pm — Wangfujing Street (10-minute walk east) — Beijing's famous pedestrian food street. Scorpions on sticks (¥20–40), silkworm larvae (¥15), stinky tofu (¥5), seahorses, starfish. The snacks are partly theatrical but the Wangfujing Snack Street (the smaller hutong off the main drag) has genuine Beijing street food at ¥5–20 per item.",
            "7:00pm — Dinner: Beijing-style zhajiangmian (noodles with fermented soybean paste, ¥20–35) at a local restaurant on Wangfujing or in the hutong streets east of the palace.",
          ],
          cost: "¥150–250 total (Forbidden City ¥60 + Jingshan ¥2 + food + metro)",
        },
        {
          day: "Day 2",
          title: "Great Wall — Mutianyu Section",
          items: [
            "6:30am — Leave early. Bus 916 from Dongzhimen station to Huairou (¥16, 1.5h), then shuttle bus to Mutianyu (¥25). Or book a shared minibus tour from a hostel (¥120–150 all-in including transport and entry — often better value solo). The wall is one of the Seven Wonders of the World. This day is non-negotiable.",
            "9:00am — Mutianyu entry: ¥65 + cable car up ¥130 (return) or ¥80 one-way. The toboggan down (¥75) is entirely worth it — a metal sled on a track built into the mountain face. It's not a tourist gimmick; it's genuinely fun and saves a long walk down. Buy the toboggan ticket before going up.",
            "9:30am — The wall at Mutianyu stretches 2.2km with 22 watchtowers. Walk west from the cable car station — this section is restored but not over-restored. The views east toward unrestored crumbling wall are dramatic. Take the full walk; the crowds thin 15 minutes from the cable car in either direction.",
            "12:30pm — Lunch at the Mutianyu village restaurants at the base (¥40–80 for a full meal with beer). Avoid the overpriced restaurants directly at the ticket gate; walk 200m down the road for local pricing.",
            "3:00pm — Return journey. Back in Beijing by 5:30–6pm.",
            "7:00pm — Dinner at Sanlitun Bar Street (Beijing's nightlife district, 15-minute metro from Dongzhimen) — rooftop bars, international food, street food. Or rest early — the wall is physically demanding.",
          ],
          cost: "¥300–420 total (¥65 entry + ¥130 cable car + ¥75 toboggan + transport + food)",
        },
        {
          day: "Day 3",
          title: "Temple of Heaven, Summer Palace & 798 Art District",
          items: [
            "8:00am — Temple of Heaven Park (¥15–35 depending on combined ticket). Arrive at 8am to see the park locals — hundreds of Beijingers practising tai chi, ballroom dancing, badminton, calligraphy with water on the pavement, and group singing. This daily ritual is more extraordinary than the architecture.",
            "9:30am — The Hall of Prayer for Good Harvests (圜丘坛) — the iconic triple-roofed circular hall where emperors prayed for harvest. The acoustic phenomenon at the Echo Wall: whisper against the circular wall and someone at the far end hears you clearly. The Circular Mound Altar is where the emperor stood to commune with heaven at the winter solstice.",
            "12:00pm — Summer Palace (颐和园, ¥30–60). Take metro Line 4 (35 minutes). The imperial garden complex covers 2.9km² with Kunming Lake as its centrepiece. Rent a rowboat on the lake (¥80/hour) or take the ferry from the East Gate to the Marble Boat. The Long Corridor (728m painted gallery) is architecturally unlike anything else in Beijing.",
            "3:30pm — 798 Art District (free entry, Dashanzi). Former munitions factory complex converted into Beijing's contemporary art centre — galleries, sculpture parks, cafes, and design boutiques. Pace de la Bellone gallery and Ullens Center for Contemporary Art (UCCA, ¥50–80 for major exhibitions) are the anchors.",
            "7:00pm — Dinner in Sanlitun or back near 798 — the surrounding Chaoyang district has excellent Sichuan restaurants at ¥50–100/person.",
          ],
          cost: "¥200–320 total (temples + Summer Palace + food + metro)",
        },
        {
          day: "Day 4",
          title: "Lama Temple, Hutongs, Drum Tower & Nanluoguxiang",
          items: [
            "9:00am — Yonghe Temple (Lama Temple, ¥25) — the most impressive Tibetan Buddhist temple in China outside Tibet. Five halls of increasing grandeur, ending at the Wanfu Pavilion containing a 26-metre sandalwood Buddha carved from a single tree. The incense smoke, chanting monks, and gilded statues create an atmosphere entirely different from the Confucian and imperial sites.",
            "10:30am — Confucius Temple (¥30, literally next door) — 198 stone steles recording the names of scholars who passed the imperial examinations over 700 years. The ancient cypress trees are gnarled and extraordinary. The intellectual counterpoint to the Lama Temple's devotional energy.",
            "12:00pm — Walk 10 minutes south into the hutongs. Nanluoguxiang (free to walk) is the most famous hutong alley — 786 metres of converted courtyard houses now containing cafes, craft beer bars, and independent shops. It's touristy but the lanes branching off it (Mao'er Hutong, Ju'er Hutong) are quiet and residential.",
            "2:00pm — Traditional siheyuan courtyard house visit at the Courtyard 7 or a neighbourhood heritage museum (¥35). Understanding the courtyard house layout — rooms arranged around a central garden by family hierarchy — explains the entire social structure of old Beijing.",
            "4:00pm — Drum Tower (¥30, combined with Bell Tower) — the time-keeping centre of Yuan and Ming dynasty Beijing. Drum performance every 30 minutes. The view over the grey-tiled hutong rooftops north from the tower is the best overview of old Beijing.",
            "7:00pm — Dinner in the hutongs: Yaoji Chaogan (¥40–60, famous for stewed offal noodles — a Beijing institution) or roast lamb skewers from the Xinjiang Muslim restaurants on Ghost Street (Gui Jie, ¥60–100 for a full spread).",
          ],
          cost: "¥200–300 total (temples + Drum Tower + food + metro)",
        },
        {
          day: "Day 5",
          title: "Olympic Park, Old Summer Palace & Farewell Peking Duck",
          items: [
            "9:00am — Olympic Park (Bird's Nest ¥50 + Water Cube ¥30, or exterior free). The 2008 Olympic Stadium (Bird's Nest) and National Aquatics Centre are extraordinary pieces of architecture. The exterior viewing is free and genuinely impressive; the interior adds context but isn't essential if budget is tight.",
            "11:00am — Yuan Ming Yuan — Old Summer Palace (¥25). This is the most emotionally charged site in Beijing for many visitors: a 350-hectare imperial garden complex burned and looted by British and French troops in 1860 during the Second Opium War. The ruins of the European-style palaces remain exactly as the soldiers left them — twisted marble columns, shattered fountains, toppled archways. The contrast with the intact Forbidden City is deliberate.",
            "1:30pm — Farewell lunch of Peking duck at lunch (not dinner — same restaurant, approximately 30% cheaper for the same dish). Quanjude (the 1864 original, ¥198–268 for a half duck) or Dadong (more theatrical, better duck, ¥168–288) — book in advance. The ceremony: thin pancake, hoisin sauce, cucumber batons, spring onion, one precise slice of duck with crackling skin. Nothing in Chinese cuisine is more carefully constructed.",
            "4:00pm — Last metro ride back to hotel. Collect luggage, WeChat Pay QR codes as souvenirs.",
            "Departure: PEK is 35km from central Beijing — allow 75–90 minutes by metro (Line 10 + Airport Express, ¥35). PKX Daxing is connected to central Beijing by Line 20 (¥35, 40 minutes).",
          ],
          cost: "¥280–450 total (sights + Peking duck lunch + transport to airport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "¥600–1,200/day",
      days: [
        {
          day: "Day 1",
          title: "Forbidden City Deep Dive & Wangfujing Evening",
          items: [
            "8:30am — Check into a boutique courtyard hotel in the hutongs near the palace (¥400–800/night — the Orchid Hotel or The Opposite House are excellent). Drop bags and walk to Tiananmen Square.",
            "9:00am — Forbidden City with a licensed English-speaking guide (¥300–500 for a half-day private tour, entry extra). A specialist guide opens the palace's layered history — the architecture as power symbolism, the concubine system, the daily life of imperial servants. The difference between guided and unguided here is substantial.",
            "1:30pm — Lunch at TRB Forbidden City (restaurant inside a temple immediately east of the palace, ¥200–350/person for European-Chinese fusion in an extraordinary setting) or Jingshan Park teahouse (¥80–120).",
            "3:30pm — Jingshan Park overlook at the optimal time (mid-afternoon light hits the palace rooftops from the west). Then a 2-hour hutong rickshaw tour departing from nearby (¥150–200/person, includes a courtyard house visit).",
            "7:30pm — Peking duck dinner at Dadong Dongzhimen branch (¥200–350/person). The oven-roasted duck here is widely considered the finest version in China — the skin is rendered to a lacquer-thin crispness.",
          ],
          cost: "¥900–1,400 total",
        },
        {
          day: "Day 2",
          title: "Mutianyu Great Wall Private Transfer",
          items: [
            "7:00am — Private car to Mutianyu (¥300–450 return, 1.5h each way, driver waits). Dramatically more comfortable than the bus, and you can set your own schedule.",
            "9:00am — Cable car up (¥130), walk the wall east and west from Tower 14. Hire a local wall guide at the top (¥100–150) for historical context on the garrison system — Ming dynasty soldiers stationed here for months at a time, their rations arriving by donkey.",
            "12:30pm — Picnic lunch on the wall arranged by your hotel (or the Schoolhouse at Mutianyu restaurant, ¥150–250, 5-minute walk from the ticket gate — excellent food, terrace view of the wall).",
            "2:00pm — Toboggan down (¥75). Return by private car.",
            "6:00pm — Back in Beijing. Foot massage in Sanlitun (¥150–200 for 90 minutes — you will need this after the wall).",
            "8:00pm — Dinner at Capital M on the Bund equivalent — Capital M Beijing (Qianmen pedestrian street, ¥300–400/person, rooftop terrace overlooking Tiananmen Gate).",
          ],
          cost: "¥1,200–1,800 total",
        },
        {
          day: "Day 3",
          title: "Temple of Heaven, Summer Palace & 798",
          items: [
            "8:30am — Temple of Heaven park entry at dawn with hotel breakfast packed (¥15 entry). Watch the morning exercise groups then visit the Hall of Prayer with a professional audio guide.",
            "11:00am — Hired car to Summer Palace (¥80–120). Lunch at Tingli Guan (Listening to the Orioles Pavilion Restaurant inside the Summer Palace grounds, ¥300–500/person for imperial-style cuisine in a pavilion over the lake).",
            "2:30pm — Boat across Kunming Lake to the West Causeway — the less-visited side of the palace with marble bridges and weeping willows.",
            "5:00pm — 798 Art District with gallery curator-led tour (book through UCCA or a Beijing art tour operator, ¥200–300/person). The district's history — from Cold War munitions factory to China's most important contemporary art space — is compelling with context.",
            "8:00pm — Dinner in Chaoyang: Da Dong roast duck or Jing Yaa Tang (Opposite House Hotel restaurant, ¥400–600/person for refined Beijing cuisine).",
          ],
          cost: "¥1,100–1,700 total",
        },
        {
          day: "Day 4",
          title: "Hutong Cultural Immersion Day",
          items: [
            "9:00am — Lama Temple and Confucius Temple (¥55 combined) with an English-speaking specialist guide (¥300–400 for a half-day).",
            "12:00pm — Hutong cooking class (3 hours, ¥400–600/person): market visit in the hutongs, then learn to make dumplings (jiaozi), dan dan noodles, and mapo tofu in a traditional courtyard kitchen.",
            "4:00pm — Hutong walking tour (Shichahai area around Houhai lake — the most picturesque hutong neighbourhood). The lake is ringed with willow trees and bars; an evening here in spring is classically Beijing.",
            "6:30pm — Drum Tower performance and Bell Tower visit (¥30 combined) before sunset.",
            "8:30pm — Dinner at a hidden hutong restaurant — Siji Minfu Roast Duck (¥200–300/person) or Za Zhi Ju (courtyard dining, traditional Beijing home cooking, ¥250–400/person).",
          ],
          cost: "¥1,000–1,500 total",
        },
        {
          day: "Day 5",
          title: "Olympic Park, Old Summer Palace & Farewell Feast",
          items: [
            "9:00am — Olympic Park and National Museum of China (free, on Tiananmen Square — extraordinary permanent collection of Chinese history). The museum alone warrants a half-day.",
            "12:00pm — Yuan Ming Yuan ruins (¥25). Walk the entire western zone of the ruins — the scale of what was destroyed is only apparent on foot.",
            "2:30pm — Afternoon at leisure: last-minute shopping at the Silk Market (Xiushui, 5 floors of negotiated prices) or Panjiayuan Antique Market (weekend mornings are best but open all week).",
            "6:30pm — Farewell dinner at Quanjude Qianmen (the original 1864 branch, ¥300–500/person). Order the duck banquet: full duck ceremony, duck soup, duck liver, the whole ritual.",
            "9:00pm — Late drinks at Apothecary bar (Sanlitun, ¥80–150 per cocktail) or rooftop bar at the Opposite House hotel.",
          ],
          cost: "¥1,000–1,600 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "¥2,000–6,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Imperial Dinner",
          items: [
            "Private airport transfer from PEK to The Peninsula Beijing or Aman at Summer Palace (rates ¥3,000–8,000/night). The Aman is built inside the actual Summer Palace grounds — you can walk to the palace before it opens to the public.",
            "Private car to Tiananmen Square and Forbidden City with a specialist art historian guide (¥2,000–4,000 for a full-day exclusive tour). Enter the Forbidden City at 8:30am with reserved priority access.",
            "Lunch in the palace's inner gardens — your concierge can arrange a private imperial-style lunch in a restored courtyard pavilion through select operators.",
            "Afternoon: Jingshan Park at golden hour, private photography session with a professional photographer capturing the palace panorama.",
            "8:00pm — Dinner at TRB Forbidden City (¥800–1,200/person tasting menu) or a private banquet at a restored hutong siheyuan arranged through your hotel concierge.",
          ],
          cost: "¥3,000–6,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Great Wall Sunrise Experience",
          items: [
            "5:00am — Private car (¥1,500–2,500 round trip with wait) departs for Mutianyu. Arrive before the cable car opens, ascend via cable car first run at 7:30am.",
            "8:00am — The wall at sunrise with no other tourists — mist filling the valleys below, the unrestored eastern section glowing in the first light. This is one of the genuinely life-changing travel experiences on earth. A specialist guide explains the Ming dynasty garrison system and points out military engineering details invisible to the untrained eye.",
            "11:00am — Private car directly to Jinshanling section (2.5h drive) — the dramatic unrestored wall for afternoon photography. The contrast with Mutianyu's restored sections is visually extraordinary.",
            "4:00pm — Return to Beijing. Spa treatment at the Peninsula spa (¥1,500–2,500 for a traditional Chinese medicine massage).",
            "8:30pm — Dinner at Da Dong Nanxincang (¥600–900/person). The private dining rooms here are reserved months ahead.",
          ],
          cost: "¥4,000–7,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Summer Palace Private Opening & Hutong Night",
          items: [
            "6:00am — Aman at Summer Palace guests can access the palace before public opening. Walk the Long Corridor and Kunming Lake in complete silence — a privilege available to approximately 40 hotel guests worldwide.",
            "10:00am — Lama Temple with a Tibetan Buddhist scholar guide (arranged through the hotel, ¥1,500–2,500). The esoteric iconography of the mandalas and protective deities requires specialist explanation.",
            "1:00pm — Private hutong lunch: a Beijing family (vetted through a cultural tourism operator) hosts a home-cooked lunch in their siheyuan. The dishes — zhajiangmian, braised eggplant, steamed fish — and the conversation are entirely genuine.",
            "4:00pm — Drum Tower private drum performance arranged for small groups (contact Beijing Culture Heritage Bureau, ¥3,000–5,000 for exclusive access).",
            "8:00pm — Chef's table at Ultraviolet Beijing equivalent or Bei at the China World Summit Wing (¥1,200–2,000/person).",
          ],
          cost: "¥5,000–9,000 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "798 Art & Contemporary Beijing",
          items: [
            "10:00am — Private curator-led tour of the UCCA collection and three curated 798 galleries (¥2,000–3,500 for 3-hour private access with a specialist curator who can discuss works in depth and introduce you to artists).",
            "1:00pm — Lunch at Migas Mercado (rooftop restaurant in Chaoyang, ¥400–700/person).",
            "3:00pm — Bespoke silk or embroidery workshop at a traditional craft house in the hutongs (¥800–1,500 for a 2-hour private session making a personalised piece).",
            "6:00pm — Cocktails at the Opposite House Jing Bar or The Lobby Bar at the Peninsula.",
            "8:30pm — Peking duck ceremony dinner at Quanjude Qianmen private dining room (¥800–1,200 for a group, all-in duck banquet including shark fin soup, duck blood tofu, crispy skin — the full 12-course traditional menu).",
          ],
          cost: "¥4,000–6,000 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Old Summer Palace & Farewell",
          items: [
            "9:00am — Yuan Ming Yuan ruins with a historian specialising in the Anglo-French expedition of 1860 (¥2,000–3,000 for a private scholarly tour). The ruins are discussed in the context of the letters and accounts of the officers who burned the palace.",
            "12:30pm — Final Beijing lunch: Sichuan cuisine at Shang Palace (Shangri-La Beijing, ¥500–900/person) or a private chef experience at your hotel.",
            "3:00pm — Olympic Park by private car for architecture photography. The Bird's Nest engineering tour (¥300 extra with a guide) explains Herzog & de Meuron's structural logic.",
            "Private car to PEK Airport. Peninsula Beijing's chauffeur service ensures your luggage is checked while you have a final tea in the lobby.",
          ],
          cost: "¥3,000–5,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "¥80–180", food: "¥60–100", transport: "¥20–40", activities: "¥60–100", total: "¥220–420/day" },
    { tier: "✨ Mid-Range", accommodation: "¥400–800", food: "¥150–300", transport: "¥80–150", activities: "¥100–200", total: "¥730–1,450/day" },
    { tier: "💎 Luxury", accommodation: "¥2,000–8,000", food: "¥500–2,000", transport: "¥300–1,500", activities: "¥500–2,000", total: "¥3,300–13,500/day" },
  ],
  mistakes: [
    { icon: "🎟️", title: "Visiting the Forbidden City Without Booking Online", desc: "The Forbidden City has a strict daily visitor cap of 80,000 people — and in peak season (May, October, Chinese New Year) tickets sell out online days or weeks in advance. Walk-up tickets are often unavailable. Book at dpm.org.cn as soon as your dates are fixed. The booking system requires a passport number.", color: "bg-red-50 border-red-200" },
    { icon: "📵", title: "Not Downloading a VPN Before Landing in China", desc: "Google Maps, WhatsApp, Instagram, Gmail, and most Western apps are blocked by the Great Firewall. VPN apps are themselves blocked in China and cannot be downloaded once you land. Install a reputable VPN (ExpressVPN, Astrill, or NordVPN — check current reviews) before boarding your flight. Test it works before departure.", color: "bg-orange-50 border-orange-200" },
    { icon: "🛷", title: "Skipping the Mutianyu Toboggan", desc: "Most first-timers skip the toboggan down because it sounds gimmicky. It isn't. The metal sled track follows the mountain contour for 1,580 metres — genuinely fast, visually spectacular, and it eliminates a 45-minute walk down steep stone steps on tired legs. Buy the ticket before going up (¥75). It always sells out by midday.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🚫", title: "Visiting Badaling Great Wall Section", desc: "Badaling is the closest Great Wall section to Beijing (75km, 1.5h) and consequently the most overcrowded — 10 million visitors per year. On a weekend in October the wall is shoulder-to-shoulder tourists and the experience is genuinely terrible. Go to Mutianyu (photogenic, restored, toboggan) or Jinshanling (dramatic, unrestored, serious hiking). Add 30–60 minutes transit time and gain everything.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🌅", title: "Forbidden City: Arrive at 8:30am Exactly", desc: "The Forbidden City opens at 8:30am and receives thousands of visitors. Most people arrive at 10am–11am. At 8:30am the first courtyard is empty and the Hall of Supreme Harmony is accessible without crowds. Plan to spend 4 hours minimum — the palace is vast. Exit via the north gate (Gate of Divine Might) and climb Jingshan immediately, before the tour buses arrive there at noon.", color: "bg-amber-50 border-amber-200" },
    { icon: "🧗", title: "Mutianyu at Sunrise: First Cable Car is 7:30am", desc: "The first cable car at Mutianyu runs at 7:30am. On weekdays from April to October, taking this first car means you have the wall to yourself for 90 minutes — mist filling the valleys, no voices, just the wind. By 9am the first tour buses arrive and the wall becomes crowded. The sunrise itself (arrive by 7am) from the hilltop before the cable car opens is extraordinary.", color: "bg-teal-50 border-teal-200" },
    { icon: "🛺", title: "Hutong Rickshaw Tour at 6am", desc: "Rickshaw tours of the hutongs run from 6am in the Shichahai and Nanluoguxiang areas. At 6am the hutongs are the real Beijing: elderly men doing morning exercises in doorways, the smell of breakfast cooking through open windows, women carrying vegetables from the street market. By 9am the tourist rickshaws have turned the same streets into a theme park. Ask your hostel or hotel to book the first departure.", color: "bg-green-50 border-green-200" },
    { icon: "🍖", title: "Peking Duck at Lunch Costs 30% Less", desc: "The major Peking duck restaurants (Quanjude, Dadong) charge peak dinner prices in the evening. The lunch menu at the same restaurants, using the same ducks from the same ovens, costs approximately 30% less. Book a lunch reservation. Arrive by noon, order the half-duck (¥128–198), and you have the experience without the dinner-crowd premium. This is the most elegant meal in Beijing.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Do I need a Chinese visa as an Indian passport holder?", a: "Yes. Indian passport holders require a Chinese tourist (L) visa applied for at the Chinese Embassy or an authorised agent before travel. Fee is approximately ¥400–600 depending on processing speed. Required documents include confirmed hotel bookings, return flight itinerary, bank statements, and travel insurance. Processing typically takes 2–4 business days; apply 2–4 weeks before travel to allow for any complications." },
    { q: "How does a VPN work in China and which one should I use?", a: "China's Great Firewall blocks Google, WhatsApp, Instagram, Facebook, YouTube, Gmail, and most Western news sites. A VPN (Virtual Private Network) routes your internet traffic through servers outside China, bypassing the blocks. The critical rule: download and test your VPN before entering China — VPN apps are blocked in the App Store and Google Play Store within China. Astrill VPN and ExpressVPN are consistently rated most reliable in China. Check current reviews before purchasing as performance changes." },
    { q: "Can foreigners use WeChat Pay and Alipay in China?", a: "Yes — since a 2023 update, foreigners can link an international Visa or Mastercard to both WeChat Pay and Alipay without requiring a Chinese bank account. Cash is increasingly difficult to use in Beijing (many restaurants and shops are cashless), so setting up at least one mobile payment app before arrival is essential. Download the apps and complete the foreign card registration process before landing." },
    { q: "Which Great Wall section is best?", a: "Mutianyu is the best choice for most visitors: restored walls, dramatic watchtowers, toboggan descent, and manageable crowds (still busy but not impossible). Jinshanling is better for photographers and serious hikers — 10km of unrestored wall between crumbling towers — but requires 2.5 hours transit each way. Simatai is another option (night tours available). Avoid Badaling entirely — 10 million visitors per year makes it a genuinely unpleasant experience regardless of the photography potential." },
    { q: "Can I drink tap water in Beijing?", a: "No. Beijing tap water is not safe to drink. Bottled water is available everywhere for ¥2–5 per 500ml. Carry a reusable bottle and refill it at your hotel (most hotels provide large water dispensers). The tap water is safe for brushing teeth. This applies across all of mainland China, not just Beijing." },
    { q: "What are the Golden Week holiday blackout dates?", a: "Two periods make Beijing impossible: Golden Week (October 1–7, Chinese National Day) when domestic tourist volumes increase by 30–40% and the Forbidden City caps fill instantly — book months ahead or avoid entirely. Chinese New Year (late January/February, date varies by lunar calendar) when much of Beijing closes as workers return home, but the city is beautifully decorated with lanterns. Check the exact lunar new year date for your travel year — in 2026 it falls on February 17." },
  ],
  combineWith: ["shanghai-4-days", "xian-3-days", "chengdu-3-days"],
  relatedSlugs: ["tokyo-5-days", "seoul-4-days", "hong-kong-3-days", "shanghai-4-days"],
  galleryQuery: "beijing china forbidden city great wall hutong tiananmen",
};

export const metadata: Metadata = {
  title: "Beijing in 5 Days: Great Wall, Forbidden City, Hutongs & Peking Duck (2026)",
  description: "Complete Beijing 5-day itinerary from budget to luxury — Great Wall Mutianyu, Forbidden City booking secrets, hutong rickshaw tours, WeChat Pay for foreigners, and where to eat Peking duck.",
  keywords: ["beijing itinerary 5 days", "beijing travel guide 2026", "great wall of china mutianyu", "forbidden city booking", "beijing budget travel", "china travel guide"],
  openGraph: {
    title: "Beijing in 5 Days: Great Wall, Forbidden City & Peking Duck (2026)",
    description: "Great Wall sunrise, Forbidden City booking secrets, hutong dawn tours, and real yuan costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80", width: 1200, height: 630, alt: "Beijing Great Wall of China at sunrise misty mountains" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Beijing in 5 Days (2026)", description: "Great Wall, Forbidden City, hutongs — 5 plans with real yuan costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/beijing-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Beijing in 5 Days: Great Wall, Forbidden City, Hutongs & Peking Duck (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80",
      description: "Complete Beijing 5-day itinerary with Great Wall, Forbidden City, hutong tours, and Peking duck guide for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Beijing 5 Days", item: "https://www.incredibleitinerary.com/blog/beijing-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Beijing, China",
      description: "The capital of China — home to the Great Wall, Forbidden City, Temple of Heaven, Summer Palace, and a living hutong culture stretching back 700 years.",
      touristType: ["Cultural tourists", "History enthusiasts", "Architecture lovers", "Food travelers"],
      geo: { "@type": "GeoCoordinates", latitude: 39.9042, longitude: 116.4074 },
    },
  ],
};

export default function BeijingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
