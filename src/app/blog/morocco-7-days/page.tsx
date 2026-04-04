import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Morocco",
  country: "Morocco",
  countryFlag: "🇲🇦",
  slug: "morocco-7-days",
  heroQuery: "morocco marrakech medina sahara desert camel dunes",
  heroAlt: "Camel caravan crossing golden Sahara Desert dunes at sunset in Merzouga Morocco",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "17 min read",
  intro:
    "Morocco does not ease you in gently. From the moment you step into the Djemaa el-Fna square at dusk — smoke from a hundred food stalls, a snake charmer's flute, storytellers in the crowd, the call to prayer rolling over the rooftops — it is unlike anywhere else on earth. Seven days lets you move from Marrakech's medieval medina through the world's oldest university city in Fes, sleep under a canopy of Sahara stars in Merzouga, and wander the blue-washed alleyways of Chefchaouen before the tour groups arrive.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$35",
    bestMonths: "Mar–May, Sep–Nov",
    airport: "CMN (Casablanca) or RAK (Marrakech)",
  },
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
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        [
          "e-Visa Required",
          "Indian passport holders must apply for a Morocco tourist e-Visa online before departure. The process is fully digital — apply at the official Morocco visa portal. Fee is approximately $30 USD. Processing time is typically 72 hours but allow 5–7 business days to be safe.",
        ],
        [
          "Key Documents",
          "Valid passport with at least 6 months validity, confirmed hotel or riad bookings, return flight tickets, bank statements showing sufficient funds ($50+/day), travel insurance, and your employment or business documentation. Complete the online form carefully — errors cause delays.",
        ],
        [
          "Validity & Stay",
          "The tourist visa typically permits a single-entry stay of up to 30 days. Morocco does not offer a visa on arrival for Indian passport holders, so the e-Visa must be obtained before travel. Carry a printed copy of your approval along with the digital version.",
        ],
        [
          "Travel Insurance",
          "While not legally mandated for visa purposes, comprehensive travel insurance is strongly recommended covering medical emergencies, trip cancellation, and baggage. Morocco's private clinics are good but expensive without cover — budget $2–5/day for adequate insurance.",
        ],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        [
          "Visa-Free 90 Days",
          "Citizens of the EU, USA, UK, Canada, Australia, and most Western nations enter Morocco completely visa-free for up to 90 days. Simply present your passport at immigration — no pre-approval, no fees, no forms to complete online.",
        ],
        [
          "Passport Validity",
          "Your passport must be valid for at least 3 months beyond your intended departure date from Morocco. Some airlines check this at check-in. Ensure your passport is undamaged — Moroccan immigration officers can deny entry for heavily worn documents.",
        ],
        [
          "Customs on Arrival",
          "Morocco prohibits importing more than 1,000 MAD in local currency. You can bring unlimited foreign currency but amounts over €10,000 must be declared. Drones require an import permit — check with your airline and the Moroccan authorities before travelling with drone equipment.",
        ],
        [
          "Exit Requirements",
          "Keep your entry stamp card — you receive a paper slip on arrival that you must surrender when departing. Losing it creates delays at exit immigration. Photograph it on your phone as a backup.",
        ],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$35–60/day",
      days: [
        {
          day: "Days 1–2",
          title: "Marrakech — Medina, Palaces & Djemaa el-Fna",
          items: [
            "Arrive Marrakech Menara Airport (RAK). Take a petit taxi to your riad in the medina — negotiate the fare before getting in (around 70–100 MAD, roughly $7–10). Budget riads in the medina start at $25–40/night and the experience is far superior to any modern hotel at the same price.",
            "Evening Day 1 — Head straight to Djemaa el-Fna square at dusk. This is Morocco's greatest free spectacle: snake charmers, Gnawa musicians, acrobats, henna artists, and storytellers in Darija (Moroccan Arabic). As darkness falls, 100+ food stalls set up — grilled merguez sausage ($1), harira soup ($1.50), pastilla (pigeon pie, $3). Eat here for dinner, it costs almost nothing.",
            "Day 2 Morning — Bahia Palace (70 MAD / ~$7). The 19th-century vizier's palace is all hand-painted cedarwood ceilings, zellige tile courtyards, and carved stucco. Hire no guide here — the self-guided walk takes 45 minutes and the rooms speak for themselves.",
            "Saadian Tombs (70 MAD). Sealed by the Alaouite dynasty for 200 years and only rediscovered in 1917, the marble mausoleum holds 66 royal dead under intricate Moorish carving. Compact, uncrowded, extraordinary.",
            "Koutoubia Mosque — the 12th-century minaret is visible from across Marrakech and is the city's skyline anchor. Non-Muslims cannot enter the mosque, but the exterior and surrounding rose gardens are free to walk around. The evening call to prayer from this tower is haunting.",
            "Majorelle Garden (150 MAD / ~$15). The cobalt-blue villa and cactus garden created by French painter Jacques Majorelle, later saved and restored by Yves Saint Laurent. The YSL Museum is an additional 100 MAD — skip if budget is tight, but the garden alone is worth it for the photography.",
            "Medina Souks — the covered market streets near Djemaa el-Fna sell leather, spices, argan oil, lanterns, rugs, and ceramics. Bargain always: start at 25–30% of the opening asking price and work up. Never accept 'free' gifts — they come with aggressive pressure to buy. A hammam experience (public bath, massage, scrub) costs 100–200 MAD at a local hammam. Tourist hammams charge 300–500 MAD but the local ones are more authentic.",
          ],
          cost: "$45–65 total (both days)",
        },
        {
          day: "Days 3–4",
          title: "Fes — The World's Greatest Medieval City",
          items: [
            "Morning CTM bus Marrakech → Fes (8–9 hours, $12–15). Book at the CTM station or online at ctm.ma. Supratours is the other reliable operator on this route. Seat reservation is essential — the buses fill up.",
            "Fes el-Bali is the UNESCO-listed old medina, the largest car-free urban zone in the world and the best-preserved medieval city anywhere. It has over 9,000 streets, some only 50cm wide. You will get lost. Embrace it — that is the point. Getting genuinely lost for an hour in Fes is one of the best things you can do in Morocco.",
            "Chouara Tannery — the leather dyeing pits in use since the 11th century. The coloured vats of natural dyes (poppy for red, indigo for blue, henna for orange, saffron for yellow) surrounded by pigeons and workers treading hides is Morocco's most photographed image. Access via the leather shops on the surrounding streets — they offer free balcony access in exchange for browsing their goods. Pick up a sprig of mint from the entrance (they hand them out) to mask the ammonia smell.",
            "Al-Attarine Madrasa (40 MAD) — the 14th-century Quranic school attached to Al-Qarawiyyin mosque. Three floors of carved stucco, zellige tile, and cedar woodwork around a central fountain courtyard. One of Morocco's architectural masterpieces. Calm, rarely crowded.",
            "Al-Qarawiyyin University — founded in 859 AD by Fatima al-Fihri, this is recognised as the world's oldest continuously operating university. Non-Muslims can view from certain external points; the mosque interior is restricted. The fact that this institution predates Oxford by 300 years and Harvard by 700 gives the medina a different weight.",
            "Bou Inania Madrasa (20 MAD) — another 14th-century madrasa with particularly fine carved wood and a working clock tower. Worth 30 minutes of your time.",
            "Hire a certified guide for half a day ($20–25 / 200–300 MAD) if you want to understand the city's layout. Unofficial touts outside the medina gates offer 'free guidance' that leads to carpet shops — decline politely. Ask your riad to recommend a certified guide instead.",
          ],
          cost: "$35–55 total (both days, including bus)",
        },
        {
          day: "Day 5",
          title: "Sahara Desert Merzouga — Dunes, Camels & Stars",
          items: [
            "Fes to Merzouga: the most practical budget option is a shared grand taxi or organised day-trip van ($25–40 per seat in a shared vehicle). The drive is approximately 7–8 hours through the Middle Atlas mountains and cedar forests (where Barbary macaques roam freely by the road at Azrou — stop for them). Alternatively, overnight CTM bus.",
            "Merzouga village sits at the edge of Erg Chebbi — the largest sand dune field in Morocco, reaching 150m in height. These are classic Sahara dunes: wind-sculpted orange ridges, silence, and a horizon without a building or road in it.",
            "4WD sand dune crossing in the afternoon — organised through your desert camp ($15–25/person). The vehicles go deep into the dunes to positions inaccessible on foot.",
            "Camel sunset ride (200–400 MAD). A 45-minute ride to the camp on camelback at the hour when the dunes turn deep red-orange. The experience is worth every dirham. Wrap a scarf around your face — the sand blows even in still air.",
            "Desert camp overnight — budget camps run $30–50/person including dinner and breakfast. Avoid the cheapest $15–20 camps (thin blankets, poor food, no private tent). Spend $50–70 for a proper camp with private Berber tent, a shared fire, and drumming into the night. The Milky Way from the Sahara with zero light pollution is genuinely one of the great sights of travel.",
            "Wake at 5am for sunrise on the dunes. The light at dawn is softer and the dunes cast longer shadows than at sunset. Most camel rides back happen at this hour.",
          ],
          cost: "$50–75 total (transport + camp + camel)",
        },
        {
          day: "Day 6",
          title: "Chefchaouen — The Blue City",
          items: [
            "Merzouga to Chefchaouen: a long transfer day (9–10 hours by shared van or multiple buses). The routing goes via Fes. Book a private transfer through your accommodation or ask fellow travellers to share costs — splitting a private car ($120–150 total) among 3–4 people is competitive with the bus on this route.",
            "Chefchaouen's entire medina is painted in shades of blue — pale cornflower, deep cobalt, dusty indigo — a tradition begun in the 1930s and sustained ever since. The effect in morning light, when narrow alleyways turn into glowing blue channels, is genuinely magical. This is one of Morocco's most-photographed cities.",
            "Uta el-Hammam square — the main square at the heart of the medina. The kasbah (museum, 10 MAD) overlooks it. Sit at a café here with mint tea (10–15 MAD) and watch the medina operate.",
            "Bab Souk and the medina walk — the streets between Bab Souk and the cascade viewpoint are the most photogenic. Early morning (7–8am) before tour groups arrive is the time to walk freely and photograph without crowds.",
            "Ras El Ma waterfall — free. A 15-minute walk from the medina centre, the waterfall feeds a stream where local women wash wool. The surrounding hillside is green against the blue city below — an arresting colour combination.",
            "Afternoon light on the blue walls — the best photography is actually between 3–5pm when the sun is lower and the shadows create depth in the alleyways. Climb the hillside behind the medina for a full panoramic view over the blue rooftops toward the Rif mountains.",
          ],
          cost: "$40–60 total (including transport)",
        },
        {
          day: "Day 7",
          title: "Return Marrakech or Fly from Fes / Tangier",
          items: [
            "Chefchaouen to Tangier (3 hours by bus, $8–12) for flights from Tangier Ibn Battouta Airport (TNG), or Chefchaouen to Fes (4 hours, $10–14) for flights from Fes-Saïss Airport (FEZ). CTM buses serve both routes.",
            "If returning to Marrakech for your outbound flight: Chefchaouen → Fes (4h) → Marrakech by overnight CTM bus (8–9h, $15–18). This combination saves a night's accommodation cost.",
            "Allow 2–3 hours final buffer time in Marrakech before a late-afternoon or evening flight for last souk shopping. The spice souk near Djemaa el-Fna sells ras el hanout (the Moroccan spice blend, $3–5 for a good-sized bag), argan oil (culinary grade, $8–15), and dried rosebuds — all legitimate gifts.",
            "Currency note: spend remaining dirhams before departure — MAD is a closed currency and is difficult to exchange outside Morocco. Airport exchange rates on the way out are worse than in-city rates. Keep just enough for a petit taxi to departures.",
            "Tipping summary for the trip: 10–20 MAD for riad staff who carry bags, 20–30 MAD for hammam attendants, 50–100 MAD per day for tour guides, 5–10 MAD for parking attendants at sites. Tipping is expected and appreciated — budget approximately $3–5/day for incidentals.",
          ],
          cost: "$25–45 total (transport + airport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$100–180/day",
      days: [
        {
          day: "Days 1–2",
          title: "Marrakech — Riads, Hammam & Rooftop Dining",
          items: [
            "Check into a mid-range riad in the medina ($60–100/night). A riad is a traditional Moroccan townhouse with an internal courtyard open to the sky — the urban fabric of the medina means you enter through an anonymous door on a narrow street and step into an oasis of tiles, fountains, and orange trees. This is the single best accommodation decision you can make in Morocco.",
            "Arrive at Djemaa el-Fna in the evening and take a rooftop café table overlooking the square (Café de France, Café Glacier — 20–30 MAD for mint tea, the view is free). Watching the square fill with performers, smoke, and the evening crowd from above gives a different perspective before you descend into it.",
            "Day 2: Private guide for the Marrakech medina ($40–60 for a half day, via your riad). A knowledgeable guide unlocks the hidden corners — the foundouks (old caravanserais), the artisan workshops where leather is still hand-stitched, the private neighbourhoods tourists never find.",
            "Majorelle Garden and the YSL Museum (250 MAD combined / ~$25). The Berber Museum inside the Majorelle complex (included) is exceptional — textiles, jewellery, and objects from across Morocco's Berber communities displayed in the former studio of Jacques Majorelle.",
            "Hammam experience at a mid-range tourist hammam ($30–50 including massage and scrub). Les Bains de Marrakech or Hammam de la Rose offer proper facilities, skilled attendants, and argan oil treatments. Book in advance.",
            "Dinner at a rooftop restaurant on the medina — Nomad (contemporary Moroccan, $25–35/person), Dar Yacout (traditional palace dining with musicians, $50–70/person), or Le Foundouk in a restored 18th-century caravanserai ($30–45/person). Book ahead for all three.",
          ],
          cost: "$150–220 total (both days, excl. riad)",
        },
        {
          day: "Days 3–4",
          title: "Fes — Private Guide, Tanneries & Medina Depths",
          items: [
            "Train Marrakech → Fes via Casablanca (approximately 8 hours, $25–35 in 2nd class). The ONCF train network is comfortable and punctual — reserve seats online at oncf.ma. The journey through the agricultural plains of the Chaouia region and the cedar-studded Middle Atlas is scenic.",
            "Private guide for Fes el-Bali ($50–80 for a full day with a licensed, English-speaking guide recommended by your riad). The certified guides carry official ID cards. A full day with an expert transforms Fes from overwhelming labyrinth to navigable masterpiece.",
            "Chouara Tannery at morning light (8–10am) when the dye workers are most active and the colours are brightest. Your guide will take you to a specific leather shop with a prime balcony view. You are not obligated to buy — a polite 'shukran, la' (thank you, no) is understood and respected.",
            "Lunch at a medina restaurant away from tourist drag — Café Clock (Talaa Kebira) for the famous camel burger ($8) and Moroccan food in a converted house with live music on certain evenings. Book ahead for the music nights.",
            "Al-Qarawiyyin Library tour — the world's oldest library (founded 1359) has been painstakingly restored and is occasionally open for viewing visits. Check with your guide or accommodation — access is restricted and varies by season.",
            "Jardin Jnan Sbil — the public garden adjacent to the medina, free and beautiful, offers a place to decompress from the medina intensity. The fountain gardens and eucalyptus paths are used by Fassi locals for evening walks.",
            "Dinner in the Ville Nouvelle (new city) — the French-built quarter 3km from the medina has proper restaurants at honest prices. Zagora Restaurant or Maison Bleue for a complete Moroccan dinner ($20–35/person including pastilla, tagine, and couscous).",
          ],
          cost: "$140–200 total (both days, including train)",
        },
        {
          day: "Day 5",
          title: "Sahara Desert — Private 4WD & Luxury Camp",
          items: [
            "Private 4WD transfer Fes → Merzouga ($80–120 per vehicle, split with fellow travellers). The overland route through Midelt, the Ziz Gorge, and Erfoud takes 7–8 hours and is scenically spectacular — stop at the fossil markets in Erfoud (ammonite fossils embedded in black marble).",
            "Check into a mid-range desert camp ($70–120/person all-inclusive). The best camps have private Berber-style tents with proper beds, solar power, en-suite facilities, and a communal dining tent. Dinner is a full Moroccan spread — harira, tagine, couscous — with live Gnawa drumming around the campfire.",
            "Private camel sunset ride (guide included, $30–40/person) with a knowledgeable Tuareg or Amazigh guide who explains the navigation techniques used to cross the desert before GPS.",
            "The campfire session after dinner — the drumming, the tea, the silence beyond the firelight, and the stars above the dunes. This is what the 10-hour bus ride is for. Do not look at your phone.",
            "Sunrise 4WD excursion across the dunes at 5am with your driver ($20–30 extra) to positions only reachable by vehicle for the dawn light on the great dune fields.",
          ],
          cost: "$130–200 total (transport + camp all-inclusive)",
        },
        {
          day: "Day 6",
          title: "Chefchaouen — Blue Medina & Mountain Walks",
          items: [
            "Private transfer Merzouga → Chefchaouen ($130–160 for a private car via Fes, 10–11 hours). This is a long day of travel — arrange a car with a driver who will stop at viewpoints and accommodate rest breaks.",
            "Check into a boutique riad in Chefchaouen's medina ($50–90/night). Several charming properties have rooftop terraces with views across the blue city and toward the Rif mountains.",
            "Explore the medina at dusk — the blue walls deepen in colour as the light fades. Walk from your riad outward in expanding circles. The streets are genuinely free of hard selling here compared to Marrakech and Fes — Chefchaouen is more relaxed.",
            "Uta el-Hammam square for dinner — local restaurants serve Moroccan standards at honest prices ($10–18/person for a full meal with mint tea). Try the local Rif mountain honey sold in the souk ($8–12 for a jar) — it is one of Morocco's best artisanal products.",
            "Spanish Mosque hike — 20 minutes up the hillside behind the medina. The ruined Spanish mosque offers the best panoramic view of the blue city in the valley below. Go at sunset or golden hour for the light. Free, and the path is clearly marked.",
          ],
          cost: "$100–160 total (including private transport)",
        },
        {
          day: "Day 7",
          title: "Return — Tangier, Casablanca or Marrakech",
          items: [
            "Chefchaouen → Tangier by private taxi or CTM bus (3 hours, $8–15). Tangier is worth a few hours: the Kasbah and the medina have a different character from inland Morocco — more Mediterranean, more cosmopolitan, with a history of international intrigue (Matisse, Rolling Stones, Paul Bowles all spent extended time here).",
            "Café Hafa in Tangier — an outdoor clifftop café overlooking the Strait of Gibraltar where you can see Spain clearly on a clear day. The Rolling Stones used to come here. Mint tea, €3, and the view of two continents.",
            "Fly from Tangier (TNG) to your destination, or continue by train/bus to Casablanca (CMN) for international connections. The Marrakech–Casablanca train takes 3 hours ($25 2nd class) if your outbound flight is from CMN.",
            "Final shopping in the Tangier medina: leather goods are excellent quality here at lower prices than Marrakech because tourist footfall is lower. Bargain as always — start at 30% of opening price.",
          ],
          cost: "$60–100 total (transport + departures)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$300–800+/day",
      days: [
        {
          day: "Days 1–2",
          title: "Marrakech — La Mamounia & Private Palace Access",
          items: [
            "Check into La Mamounia ($600–2,500/night) — the legendary palace hotel where Churchill painted and Roosevelt stayed. The gardens, pool, and Moroccan Art Deco interiors are part of the experience. Alternatively, Royal Mansour Marrakech ($800–3,000/night) — a private riad city built by King Mohammed VI, where each guest has their own multi-level riad with private courtyard and butler.",
            "Private half-day Marrakech tour with an art historian guide ($150–250) covering the 12th-century Almohad monuments, the Saadian dynasty tombs, and the private foundouks of the medina that the standard tours don't access.",
            "Majorelle Garden private early-morning access — arrange through your hotel concierge. Before public opening, the garden with its cobalt architecture and desert plants offers a completely different experience.",
            "Hammam and spa at La Mamounia or Royal Mansour (full-day treatment package, $200–400). Traditional hammam, argan oil massage, rose petal bath, followed by a private dinner in your riad courtyard.",
            "Dinner at the restaurant inside La Mamounia or at Dar Yacout (reserve the private room, $100–200/person) with live Andalusian musicians, a full traditional Moroccan feast, and the candlelit riad courtyard entirely to your group.",
          ],
          cost: "$500–900 total (both days, excl. hotel)",
        },
        {
          day: "Days 3–4",
          title: "Fes — Private Medina Access & Dinner in a Palace",
          items: [
            "Private train or charter flight Marrakech → Fes (charter ~$400–600 for 4 people, 45 minutes versus 8 hours by train). Your hotel concierge can arrange this through Royal Air Maroc charter services.",
            "Check into Palais Amani or Riad Fes ($200–400/night) — two of the finest riads in Fes, both converted 18th-century palaces. Breakfast on the rooftop terrace overlooking the medina rooftops is an exceptional start to the day.",
            "Private guide and interpreter for Fes el-Bali — a specialist in Islamic art and architecture ($100–150 for a full day). This level of guide can access the courtyards of active mosques during off-peak hours, and knows the families of traditional craftsmen who will demonstrate their work privately.",
            "Chouara Tannery with private workshop visit — arrange through your hotel to visit one of the tannery master craftsmen in his workshop. See the full leather-making process from raw hide to finished product. Commission a custom leather piece ($100–400 for bespoke handbag or belt).",
            "Dinner at the private dining room of Riad Fes ($80–120/person) or Palais Amani — both serve exceptional Fassi cuisine: bastilla au pigeon, lamb mechoui, honey-and-almond desserts. Some evenings include private Andalusian music performances.",
          ],
          cost: "$600–1,000 total (both days, excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Merzouga Sahara — Luxury Desert Camp",
          items: [
            "Private 4WD convoy Fes → Merzouga with an experienced driver-guide ($300–400 for a private vehicle with stops). The route through the Middle Atlas cedar forests and the Ziz Valley palmeries includes a private fossil workshop visit in Erfoud.",
            "Check into a luxury desert camp ($200–500/person all-inclusive): Erg Chebbi Luxury Camp, Caravanserai Luxury Camp, or similar. Private tented suites with proper beds, en-suite wet rooms, solar-powered lighting, and a dedicated butler. Some camps have plunge pools.",
            "Private sunset camel ride with a Tuareg guide, followed by pre-dinner drinks watching the last light drain from the dune crests.",
            "Private Gnawa drumming performance around the campfire — not the communal group drumming of budget camps but an arranged performance by professional musicians. The hypnotic seven-tone scale of traditional Gnawa music takes on extraordinary depth in the desert silence.",
            "Pre-dawn 4WD excursion to the top of the highest dune for sunrise ($50–80 extra, private vehicle). Watch the orange light creep across an ocean of sand with no other humans visible in any direction.",
          ],
          cost: "$500–800 total (transport + luxury camp)",
        },
        {
          day: "Day 6",
          title: "Chefchaouen — Boutique Stay & Rif Mountain Hike",
          items: [
            "Private vehicle Merzouga → Chefchaouen with driver ($200–300, 10–11 hours). Stop for lunch in a restaurant in Midelt or Ifrane — Ifrane is sometimes called 'Little Switzerland' for its Alpine-style architecture built during the French protectorate. Incongruous and charming.",
            "Check into Casa Perleta or another boutique luxury riad in Chefchaouen's medina ($120–250/night). Some properties have private roof terraces with plunge pools and panoramic mountain views.",
            "Private guided hiking in the Rif mountains above Chefchaouen with a local Amazigh guide ($60–80/person for 4 hours). The trails through cedar and pine above the city offer views of the blue medina from above that most visitors never see.",
            "Private cooking class in your riad ($70–100/person) — learn to make bastilla, tagine, and Moroccan bread with a local chef using ingredients from the morning market. This is the best food souvenir you can take home from Morocco.",
            "Sunset from the Spanish mosque terrace with private aperitif arranged by your hotel — cold orange juice, Moroccan pastries, and the blue city fading to twilight below.",
          ],
          cost: "$400–700 total (transport + activities)",
        },
        {
          day: "Day 7",
          title: "Departure — Casablanca or Tangier in Style",
          items: [
            "Private transfer Chefchaouen → Tangier Airport (3 hours, $80–100). Alternatively, continue to Casablanca by private car (5 hours, $150–200) for international connections through Mohammed V International Airport — a larger hub with more direct routes.",
            "If time allows before your flight: Tangier's Villa Harris or the Kasbah Museum give a quick, high-quality introduction to the city's Mediterranean and colonial heritage. A private guide in Tangier for 2 hours costs $60–80.",
            "The Grand Socco and the medina of Tangier for final shopping — the Tangier medina is far less tourist-pressured than Marrakech or Fes and the leather and textile shops offer genuinely good value. Your guide will take you directly to quality makers.",
            "Business class flights home from Casablanca CMN are served by Royal Air Maroc, Air France, British Airways, and Emirates. The Royal Air Maroc lounge at CMN is underrated — good food, quiet, and efficient service.",
          ],
          cost: "$200–400 total (transport + departures)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$8–25",
      food: "$8–15",
      transport: "$5–12",
      activities: "$5–15",
      total: "$35–60/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–120",
      food: "$20–40",
      transport: "$15–30",
      activities: "$20–40",
      total: "$100–180/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$200–800",
      food: "$60–150",
      transport: "$50–150",
      activities: "$50–150",
      total: "$300–800+/day",
    },
  ],
  mistakes: [
    {
      icon: "🎁",
      title: "Accepting 'Free' Gifts in the Souks",
      desc: "A vendor hands you a sprig of herbs, a bracelet, or a small trinket and says 'for you, free, welcome to Morocco.' Once it is in your hand, he will demand money — and become aggressive if you refuse. The technique is as old as the souks themselves. Never take anything offered unprompted. A firm smile and 'la shukran' (no thank you) before it reaches your hand is the correct response.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💬",
      title: "Not Bargaining in the Souks",
      desc: "Fixed prices exist in government-run craft cooperatives and some shops with price tags. Everywhere else, the first price quoted is a negotiating opening, not a final offer. Start at 25–30% of the asking price, be prepared to walk away, and expect to settle at 40–60%. Not bargaining is considered rude — it implies you don't respect the exchange. Enjoy it as a social ritual rather than a confrontation.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🗺️",
      title: "Skipping Fes to Spend More Time in Marrakech",
      desc: "Marrakech is Morocco's most visited city but not its most extraordinary one. Fes is. The Fes el-Bali medina is larger, older, less touristified, and architecturally more significant than anything in Marrakech. First-time visitors who spend 4 nights in Marrakech and skip Fes consistently say afterward that Fes was the highlight. Budget at least 2 nights there.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "❄️",
      title: "Visiting in December or January",
      desc: "Morocco's summer (June–August) is hot but manageable. The overlooked problem is winter: December–January nights in the desert drop to 0–5°C and the high medinas of Fes and Chefchaouen are genuinely cold. Many budget riads have no central heating — only single-room heaters. If you visit in winter, pack accordingly and ask explicitly about heating before booking. March–May and September–November are the ideal windows.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🧭",
      title: "Entering Fes Medina Without a Certified Guide on Day 1",
      desc: "The Fes medina has no grid, no landmarks visible from within the alleys, and no reliable mobile signal in many sections. Even experienced travellers get comprehensively lost in the first hour. On your first day, hire a certified guide (your riad can recommend one with official ID). On subsequent days, once you have your bearings around the key anchors — Bou Inania, the tanneries, R'cif Bridge — you can navigate solo with confidence.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Djemaa el-Fna at Dusk — Morocco's Most Magical Hour",
      desc: "The square transforms completely between 6pm and 8pm. The food stalls appear, the performers set up, the call to prayer echoes from the Koutoubia minaret, and the light turns golden then violet over the Atlas mountains to the south. This is the hour to be here — not midday when it is a fraction of the spectacle. Eat dinner at the stalls (grilled merguez and harira soup, $3 total) rather than at a tourist restaurant. The atmosphere alone is worth it.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏺",
      title: "Tannery at Morning Light — Best Photography in Morocco",
      desc: "The Chouara Tannery in Fes is at its most photogenic between 8–11am when the dye workers are active and the early light illuminates the colour vats without the harsh midday shadows. Go on a sunny day. The surrounding leather shops will offer balcony access — go to the highest floor for the widest angle. Bring your widest lens (or use your phone's panorama mode). The smell is indeed strong — the mint sprig they hand you at the entrance is functional, not decorative.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌙",
      title: "Chefchaouen Early Morning Before the Tour Groups",
      desc: "Day-tripper buses from Fes and Tangier arrive in Chefchaouen around 10am. By 11am the narrow blue streets are congested with photography tours. The blue city at 7–8am belongs to you: local women sweeping blue steps, cats on blue walls, bakers pulling bread from wood-fired ovens on blue alleyways. Stay at least one night so you own the morning. Budget travellers can stay at a medina hostel for $12–18/night — worth every dollar for the early access.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "⭐",
      title: "Desert Camp Under Stars — No Light Pollution in the Sahara",
      desc: "The Erg Chebbi dunes are sufficiently remote that light pollution is negligible on a clear night. The Milky Way is visible as a dense band across the sky — not the faint smear you see from cities but the full galactic arm, thousands of individual stars resolvable by the naked eye. Bring a warm layer (temperatures drop sharply after midnight even in spring and autumn) and lie on the dunes for 20 minutes away from the campfire. It is one of the genuine natural highlights of travelling in Morocco.",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      icon: "🫖",
      title: "Mint Tea Ritual — Three Rounds, Pouring From Height",
      desc: "Moroccan mint tea (atay) is served in three small glasses and poured from a significant height to create froth. The three rounds represent Moroccan hospitality proverb: 'The first glass is as gentle as life, the second is as strong as love, the third is as bitter as death.' Declining the second or third glass is not offensive, but finishing all three signals appreciation. You will be offered tea constantly — in shops, at riads, by strangers. Accept it. It is how conversations begin.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is Morocco safe for tourists in 2026?",
      a: "Morocco is generally safe for tourists with standard street awareness. The primary concerns are petty theft in crowded souks (keep bags in front, avoid displaying expensive cameras or jewellery in medinas), and unofficial 'guides' who attempt to lead you to shops. Solo female travellers should be prepared for verbal attention in medinas — it is rarely threatening but can be persistent. Dress modestly outside tourist areas (shoulders and knees covered). The crime rate against tourists involving violence is very low. Morocco's tourist industry is vital to the economy and the government invests significantly in tourist safety.",
    },
    {
      q: "What is the best 7-day route for first-time visitors?",
      a: "The classic route covered in this guide — Marrakech (2 nights) → Fes (2 nights) → Merzouga Sahara (1 night) → Chefchaouen (1 night) → departure — gives you the medinas, the desert, and the blue city in one logical loop. The alternative is to do it in reverse (fly into Tangier, Chefchaouen first, then Fes, then Sahara, then Marrakech for departure). Both work. The Marrakech-first version is more common because RAK has better flight connections from most international hubs.",
    },
    {
      q: "Is the Sahara desert worth the long journey from Marrakech or Fes?",
      a: "The journey from Fes is 7–8 hours; from Marrakech 9–10 hours by road. Yes — it is worth it. The Erg Chebbi dunes at Merzouga are the real Sahara: 150m-tall wind-formed dune fields stretching to the Algerian border, with nothing but sand visible in every direction. The overnight desert camp under the stars is consistently rated by travellers as the single most memorable night of a Morocco trip. Do not skip it to save 2 hours of driving.",
    },
    {
      q: "Can women travel solo in Morocco?",
      a: "Yes, and many thousands do. The practical reality: women travelling alone in Moroccan medinas will receive more verbal attention than men — comments, greetings, persistent guides. This is particularly pronounced in Fes and Marrakech medinas. Dressing conservatively (covered shoulders and knees, loose clothing) substantially reduces this. A firm, direct 'la shukran' without making eye contact is the standard response. Solo female travellers consistently report that Morocco is a destination worth visiting — the cultural richness outweighs the hassle, especially with advance knowledge of what to expect.",
    },
    {
      q: "What is the tipping culture in Morocco?",
      a: "Tipping is expected and important in Morocco. Standard amounts: restaurant bill add 10–15% (if not included), riad staff $2–3/day, hammam attendant 30–50 MAD, official tour guide 100–150 MAD for a half day, camel guide 50–100 MAD, taxi driver round up the fare. The dirham amounts are small but mean a great deal to recipients. Carry small notes (10 and 20 MAD) specifically for tipping — it is considered impolite to tip and then wait for change.",
    },
    {
      q: "Is halal food easy to find in Morocco?",
      a: "Morocco is a Muslim-majority country — virtually all meat sold and served everywhere is halal by default. Pork is not served in traditional Moroccan restaurants or medina food stalls. Some upscale international hotels and tourist-facing restaurants may offer non-halal options or alcohol. Morocco does permit alcohol sale in licensed establishments (large hotels, some restaurants, supermarkets in tourist areas) but many local restaurants are alcohol-free. If you require a fully alcohol-free environment, this is easy to find. Vegetarian food is also readily available: harira soup, bissara (fava bean soup), zaalouk (aubergine salad), and couscous with vegetables are common Moroccan dishes.",
    },
  ],
  combineWith: ["spain-5-days", "portugal-5-days", "canary-islands-5-days"],
  relatedSlugs: ["istanbul-5-days", "dubai-4-days", "egypt-7-days", "cape-town-5-days"],
  galleryQuery: "morocco marrakech medina fes blue city chefchaouen sahara desert",
};

export const metadata: Metadata = {
  title: "Morocco in 7 Days: Marrakech, Fes, Sahara Desert & Chefchaouen (2026)",
  description:
    "Complete Morocco 7-day itinerary covering Djemaa el-Fna, Fes medina, Sahara camel rides, and the blue city of Chefchaouen — with real costs from $35/day to luxury.",
  keywords: [
    "morocco itinerary 7 days",
    "morocco travel guide 2026",
    "marrakech guide",
    "fes medina travel",
    "sahara desert merzouga",
    "chefchaouen blue city",
    "morocco budget travel",
  ],
  openGraph: {
    title: "Morocco in 7 Days: Marrakech, Fes, Sahara & Chefchaouen (2026)",
    description:
      "Djemaa el-Fna at dusk, Fes medina tanneries, Sahara stars, and the blue city — all covered with real costs for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Camel caravan crossing Sahara Desert dunes at sunset in Merzouga Morocco",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morocco in 7 Days (2026)",
    description:
      "Marrakech, Fes, Sahara Desert, Chefchaouen — complete itinerary from $35/day to luxury riads.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/morocco-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Morocco in 7 Days: Marrakech, Fes, Sahara Desert & Chefchaouen (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
      description:
        "Complete 7-day Morocco itinerary: Djemaa el-Fna, Fes medina, Sahara Desert, Chefchaouen blue city — with real costs from $35/day.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Morocco 7 Days",
          item: "https://www.incredibleitinerary.com/blog/morocco-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Morocco",
      description:
        "A North African kingdom of ancient medinas, Sahara dunes, and painted blue cities — one of the world's great travel destinations.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.7917,
        longitude: -7.0926,
      },
      touristType: [
        "Culture travellers",
        "Adventure seekers",
        "Photography enthusiasts",
        "Budget backpackers",
        "Luxury travellers",
      ],
    },
  ],
};

export default function MoroccoPage() {
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
