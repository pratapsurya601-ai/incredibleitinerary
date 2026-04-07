import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Seoul",
  country: "South Korea",
  countryFlag: "🇰🇷",
  slug: "seoul-5-days",
  heroQuery: "seoul gyeongbokgung palace korea city skyline night",
  heroAlt: "Seoul Gyeongbokgung Palace illuminated with city skyline at night South Korea",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro: "Seoul is one of the world's great overachievers — ancient palaces standing in the shadow of glass towers, alleyways lined with thousand-year-old temples beside K-pop fan cafés, street stalls selling ₩4,000 tteokbokki directly opposite Michelin-starred restaurants. Five days gives you hanbok at Gyeongbokgung Palace, the genuinely sobering DMZ, Han River picnic culture, the electric energy of Hongdae, and enough Korean BBQ and chimaek to understand why every traveller who visits insists Seoul is wildly underrated.",
  stats: {
    duration: "5 Days",
    budgetFrom: "₩50,000",
    bestMonths: "Apr–Jun (cherry blossom), Sep–Nov",
    airport: "ICN (Incheon International)",
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
        ["K-ETA Required", "Indian passport holders can apply for the K-ETA (Korea Electronic Travel Authorization) online before flying. Cost: ₩10,000 (~$7.50). Apply at k-eta.go.kr at least 72 hours before departure — allow more time as processing can vary. K-ETA permits stays of up to 90 days visa-free."],
        ["Apply Online", "Visit k-eta.go.kr or download the K-ETA app. You'll need your passport details, accommodation booking in Korea, travel history, and a recent photo. Approval usually comes within 24–72 hours. Keep your approval email accessible on your phone."],
        ["Key Documents", "Valid passport (6 months beyond travel dates), confirmed return ticket, accommodation booking confirmation, and sufficient funds for your stay. Immigration may ask to see these at Incheon airport."],
        ["Arrival at ICN", "Incheon International Airport is one of the world's best airports. Clear immigration with your K-ETA approval. Pick up a T-money card (₩3,000) from any convenience store (CU, GS25, 7-Eleven) in the arrivals hall and load ₩30,000–50,000 to cover your first day's transport."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["K-ETA Required", "USA, UK, Canada, Australia, New Zealand, and most EU passport holders must apply for K-ETA before travel. Cost: ₩10,000. Apply at k-eta.go.kr at least 72 hours ahead. Approval grants up to 90-day visa-free stays. This replaced the old visa-on-arrival for most Western passports."],
        ["Application Process", "Online at k-eta.go.kr — takes about 10–15 minutes. You'll need your passport info, travel itinerary, accommodation details, and purpose of visit. Carry your K-ETA approval email; immigration officers at ICN may request it."],
        ["90-Day Stay", "Most Western passport holders can stay up to 90 days per visit. South Korea does not operate a Schengen-style day-count across Asian borders — your 90 days in Korea is independent of stays in Japan or other countries."],
        ["Airport Transit", "Incheon has an excellent transit hotel and sleeping lounges if you have a long layover. The AREX Express Train runs from ICN to Seoul Station in 43 minutes (₩9,500) and is the fastest, most reliable airport link."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₩50,000–80,000/day",
      days: [
        {
          day: "Day 1",
          title: "Gyeongbokgung, Bukchon & Insadong",
          items: [
            "9:00am — Gyeongbokgung Palace (₩3,000 entry). Arrive early to beat tour groups. Rent a hanbok from one of the stalls on the surrounding streets (₩10,000–15,000/2h) — hanbok wearers get free palace entry, offsetting most of the rental cost, and the photos are extraordinary.",
            "10:30am — National Folk Museum of Korea (inside palace grounds, free) — excellent exhibits on traditional Korean daily life, farming culture, and seasonal rituals. Well-curated, English-labeled throughout.",
            "12:00pm — Walk north to Bukchon Hanok Village (free). This hillside neighborhood of 600+ traditional hanok houses is one of Seoul's most beautiful areas. The early-afternoon light through the tile-roofed alleys is perfect for photography. Be quiet — people live here.",
            "2:00pm — Lunch in Insadong: sundubu-jjigae (soft tofu stew, ₩9,000–12,000) at any of the traditional restaurants on the main alley. Insadong is Seoul's craft and tea-house district — browse handmade ceramics, calligraphy, and Korean paper goods.",
            "4:00pm — Gyeonghuigung Palace (free, nearby in Jongno-gu) — far fewer visitors than Gyeongbokgung, yet equally well-preserved. The adjacent Seoul Museum of History is free and excellent.",
            "7:00pm — Walk the Cheonggyecheon Stream (free) as the evening lights come on — this elevated highway was demolished in 2005 to restore the stream below. It runs for 10km through central Seoul, lined with lanterns. A perfect 45-minute evening stroll.",
          ],
          cost: "₩25,000–40,000 total",
        },
        {
          day: "Day 2",
          title: "N Seoul Tower, Itaewon & Hongdae",
          items: [
            "10:00am — N Seoul Tower: either hike up Namsan Mountain (free, 45–60 min through forested park) or take the cable car (₩8,500 return). Tower entry ₩16,000. The 360° view of Seoul stretching to the mountains is the best orientation you'll get of the city's scale.",
            "12:00pm — Descend and head to Itaewon for lunch. This internationally diverse district has been Seoul's melting pot for decades — excellent halal options, American brunch spots, Turkish kebab, Ethiopian injera. Budget ₩10,000–15,000. Itaewon is also notably LGBTQ-friendly by Korean standards.",
            "2:00pm — Browse Itaewon's antique furniture street (Antique Alley) — an unexpected highlight full of Korean pottery, colonial-era pieces, and vintage curiosities.",
            "4:00pm — Head to Hongdae (Hongik University area) via subway. Arrive when the street performers begin (typically 4–6pm on weekends). This is the heart of Seoul's indie music scene, youth culture, and night life.",
            "6:00pm — Ewha Womans University area (a 15-minute walk) for the distinctive shopping street carved into the hillside — Ewha Campus Complex is worth seeing architecturally even if you don't shop.",
            "8:00pm — Back to Hongdae for dinner and evening: Korean fried chicken (chimaek — chicken + beer), ₩18,000–25,000 for a half-chicken with a pitcher. The clubs open around 11pm; cover charge ₩10,000–15,000 at larger venues.",
          ],
          cost: "₩35,000–55,000 total",
        },
        {
          day: "Day 3",
          title: "DMZ & War Memorials",
          items: [
            "6:30am — Early start. The DMZ (Demilitarized Zone) tour requires advance booking — book at least 3–5 days ahead, earlier in peak season. The Joint Security Area (JSA) tour costs $40–60 USD (~₩53,000–80,000) through reputable operators like USO Seoul, Koridoor, or Panmunjom Travel. Bring your passport — it is checked at multiple military checkpoints.",
            "8:00am — Depart from Seoul. Most tours leave from Dongdaemun or Gwanghwamun area. The drive is about 1 hour to the DMZ.",
            "10:00am — Imjingak Peace Park (free public area near the border) — the Bridge of Freedom, propaganda village views, and rusting trains frozen since the Korean War. The emotional weight of this place is immediate.",
            "11:00am — The Third Infiltration Tunnel — discovered in 1978, this North Korean-dug tunnel was intended for a surprise invasion. You walk down into it (helmets provided). Narrow, cold, and genuinely eerie.",
            "1:00pm — Joint Security Area at Panmunjom — the only place on the Korean Peninsula where North and South Korean soldiers stand face-to-face across a 5cm raised concrete line. You can stand on the North Korean side of the conference room table. This is the most historically significant experience available to civilians in Asia.",
            "4:00pm — Return to Seoul. Visit the War Memorial of Korea (free entry) in Yongsan — the museum covers the Korean War and the modern Korean military in exhaustive detail. The outdoor aircraft and artillery display is vast.",
          ],
          cost: "₩55,000–85,000 total (incl. tour)",
        },
        {
          day: "Day 4",
          title: "Han River, COEX & Gangnam",
          items: [
            "10:00am — Han River (free). Join Seoul's most beloved weekend ritual: rent a bicycle (₩3,000/hour) from the Yeouido or Ttukseom Han River Park rental stations and cycle along the wide riverside paths. The Han is 1km wide in places — the scale of the river running through a megacity is unexpected.",
            "12:00pm — Han River picnic lunch: convenience store (CU, GS25) kimbap (₩1,500), ramyeon cup noodles (₩1,200), and banana milk (₩1,000) — this is exactly what Koreans eat here. Sit on the grass with thousands of others doing the same.",
            "2:00pm — COEX Mall underground (free to enter) — the COEX Starfield Library inside the mall is one of Seoul's most photographed interiors: a soaring atrium of floor-to-ceiling bookshelves. Free, beautiful, and open daily.",
            "4:00pm — Gangnam District: walk Apgujeong Rodeo Street — Seoul's Beverly Hills equivalent. The density of luxury boutiques, upscale Korean BBQ restaurants, and K-beauty clinics per block is extraordinary. Garosu-gil (Tree-lined Street) nearby is more walkable and has excellent coffee shops.",
            "6:00pm — K-beauty shopping in Gangnam's department stores: Shinsegae and Galleria have better prices than Myeongdong on some premium brands. IOPE, Sulwhasoo, and Amore Pacific flagship stores are nearby.",
            "8:00pm — Korean BBQ dinner in Gangnam: samgyeopsal (pork belly) at a proper grill-at-table restaurant, ₩12,000–18,000/person for meat plus banchan (side dishes). Order the doenjang-jjigae (fermented soybean soup) to accompany.",
          ],
          cost: "₩30,000–50,000 total",
        },
        {
          day: "Day 5",
          title: "Day Trip + Korean BBQ Farewell + Myeongdong",
          items: [
            "Option A — Suwon Hwaseong Fortress (45 min by subway from Seoul, ₩1,500 entry): a UNESCO World Heritage Site fortress from 1796 surrounding the entire old city of Suwon. The 5.7km wall walk takes 2 hours and offers sweeping views. Far fewer tourists than Seoul's palaces.",
            "Option B — Nami Island (2 hours from Seoul, ₩16,000 ferry + entry): the tree-lined paths famous from the Korean drama Winter Sonata. Best in autumn (October–November) for leaf colour; also beautiful in spring. Combine with a stop at Petite France nearby.",
            "1:00pm — Return to Seoul. Final Korean BBQ lunch or galbi (beef short ribs, ₩15,000–25,000) at a traditional restaurant in Jongno.",
            "3:00pm — Myeongdong shopping district for Korean beauty products (skincare, sheet masks, BB cream). Prices here are 20–30% lower than at Incheon airport. Stock up on COSRX, Some By Mi, and Innisfree at the street-level brand stores. Each sheet mask ₩1,000–3,000.",
            "5:00pm — Namsan tower view one last time, or Cheonggyecheon stream for a final walk. Seoul at dusk hits differently when you know you're leaving.",
            "7:00pm — Jimjilbang (Korean public sauna/bathhouse) option: Dragon Hill Spa in Yongsan (₩12,000) is a vast complex with hot/cold pools, sleeping rooms, and floor-heated rest areas. Book a locker, stay as long as you like — many travellers sleep here on their final night before an early departure.",
          ],
          cost: "₩30,000–55,000 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₩150,000–280,000/day",
      days: [
        {
          day: "Day 1",
          title: "Palaces with Guide & Fine Hanok Dining",
          items: [
            "9:00am — Gyeongbokgung Palace with a licensed English-speaking guide (₩30,000–50,000/person, 2 hours) — the architectural symbolism, the Joseon Dynasty's ritual life, and the colonial-era destruction of 80% of the original structures comes alive with proper context.",
            "11:30am — Premium hanbok rental from Hyewon Hanbok near the palace gate (₩30,000–50,000/day for a high-quality silk hanbok with accessories). Free palace re-entry and far better photo results than budget rentals.",
            "1:30pm — Lunch at a traditional Korean restaurant in Bukchon: hanjeongsik (full Korean set meal) for ₩35,000–55,000/person — 15–20 small dishes including doenjang-jjigae, namul vegetables, jeon pancakes, and rice. The full expression of Korean table culture.",
            "3:30pm — Changdeokgung Palace + Secret Garden guided tour (₩8,000 + ₩5,000 extra for garden; tours leave every hour in English). The Huwon (Secret Garden) behind the palace is arguably the most beautiful natural landscape in Seoul.",
            "7:00pm — Dinner at Tosokchon Samgyetang (Gyeongbok-gung area) — Seoul's most famous chicken ginseng soup restaurant. Queue is part of the experience. ₩18,000 per bowl. A complete, restorative meal.",
          ],
          cost: "₩130,000–170,000 total",
        },
        {
          day: "Day 2",
          title: "N Seoul Tower Sunrise & Yongsan",
          items: [
            "5:30am — N Seoul Tower sunrise (hike up Namsan; trail is lit and safe). Arrive at the observation deck before 6am. The city materialising from darkness below — with Han River catching the first light — is one of Seoul's genuinely spectacular moments.",
            "8:00am — Breakfast at a café on the descent path in Namsan Village. Third-wave coffee culture is deeply embedded in Seoul; a proper specialty latte is ₩5,000–7,000.",
            "10:00am — War Memorial of Korea (free) with 2 hours of exploration. The exhibition on the Korean War, the Japanese colonial period, and the extraordinary transformation from 1953 to today puts everything else you see in Seoul in context.",
            "1:00pm — Lunch in Itaewon at a mid-range restaurant: Linus' Bama BBQ or Casablanca Sandwicherie for ₩18,000–28,000.",
            "3:00pm — Leeum Samsung Museum of Art (₩20,000) — one of Asia's best private art collections, covering traditional Korean ceramics and contemporary international art in two buildings by Mario Botta and Jean Nouvel.",
            "8:00pm — Dinner in Mapo or Hongdae: Maple Tree House for premium Korean BBQ (wagyu-grade Korean beef), ₩45,000–70,000/person.",
          ],
          cost: "₩150,000–200,000 total",
        },
        {
          day: "Day 3",
          title: "DMZ Premium Tour & Han River Sunset Cruise",
          items: [
            "7:00am — Premium DMZ tour with a specialist guide and smaller group size (₩95,000–120,000 through operators like Koridoor Premium or private tour companies). Includes JSA, Third Tunnel, Dora Observatory, and Imjingak.",
            "1:00pm — Return to Seoul. Late lunch at a restaurant in Mapo or Hongdae.",
            "4:00pm — Han River sunset cruise: various operators run dinner/sunset cruises from Yeouido Pier (₩20,000–35,000 for a standard cruise). The Seoul skyline from the river at golden hour is a different experience from viewing it from land.",
            "7:00pm — Dinner in Yeouido or nearby: Noryangjin Fish Market is 10 minutes away by subway. Browse the live seafood tanks, select your fish, and have it prepared upstairs for ₩30,000–50,000. Sea cucumber, live octopus, raw crab (ganjang-gejang) if you're adventurous.",
          ],
          cost: "₩160,000–220,000 total",
        },
        {
          day: "Day 4",
          title: "Lotte World, COEX & Apgujeong",
          items: [
            "10:00am — Lotte World (₩62,000) — the world's largest indoor theme park (and outdoor Magic Island). A full day could be spent here; alternatively, 4 hours covers the main rides and the folk museum inside.",
            "3:00pm — COEX and Starfield Library (free browse) then move to Apgujeong Rodeo for K-beauty shopping: premium brands like Sulwhasoo and History of Whoo have proper flagship stores here with samples and in-store consultations.",
            "5:30pm — Garosu-gil: the prettiest street in Gangnam, tree-lined, boutique-heavy. Perfect for an hour's evening walk before dinner.",
            "7:30pm — Dinner in Cheongdam-dong: Mingles (book ahead, ₩150,000–200,000 tasting menu) for modern Korean cuisine at a globally recognised level, or Soigné for a more contemporary European-Korean fusion experience.",
          ],
          cost: "₩180,000–280,000 total",
        },
        {
          day: "Day 5",
          title: "Suwon Fortress & Farewell Dinner",
          items: [
            "9:00am — Train to Suwon (45 min, ₩2,800). Hwaseong Fortress (₩1,500) — walk the full 5.7km circuit of the fortress walls. Hire a local guide at the entrance for ₩20,000 for genuinely illuminating historical context on King Jeongjo's vision for the fortress city.",
            "12:00pm — Lunch in Suwon's traditional market (Paldalmun Gate area): galbi (grilled beef ribs) — Suwon is nationally famous for its galbi. A full galbi meal ₩25,000–35,000/person at a proper Suwon galbi restaurant.",
            "2:30pm — Return to Seoul. Afternoon at leisure: Gyeongchunson rail bike or afternoon shopping in Myeongdong.",
            "7:00pm — Farewell dinner: a full Korean BBQ sampler — samgyeopsal, galbi, bulgogi, with doenjang-jjigae and soju. Budget ₩40,000–60,000/person at a premium meat-focused restaurant in Jongno-gu or Mapo. Order the nokcha (green tea) soju for a gentler ending.",
          ],
          cost: "₩80,000–130,000 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₩500,000–1,500,000/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Hanok Stay & Michelin Dinner",
          items: [
            "Arrive at Incheon and transfer by private car to central Seoul (₩80,000–120,000). Check in to either the Shilla Seoul (Jung-gu, rates ₩400,000–900,000/night, the historic grande dame of Korean luxury hospitality) or the Four Seasons Seoul (Gwanghwamun, ₩500,000–1,200,000/night, adjacent to Gyeongbokgung).",
            "Afternoon: private hanbok experience — a high-end hanbok atelier (Hanboknam or Lee Young Hee) will prepare traditional silk hanbok for a private photoshoot inside Gyeongbokgung's grounds during the golden hour. ₩200,000–400,000 for the full experience.",
            "7:00pm — Dinner at Mingles (1 Michelin star, Cheongdam-dong): Chef Kang Min-goo's modern Korean cuisine blending French technique with Korean ingredients is among the most compelling dining experiences in Asia. Tasting menu ₩200,000+/person. Book 3–4 weeks ahead.",
          ],
          cost: "₩500,000–900,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Palace Tour & Leeum Museum",
          items: [
            "8:00am — Private access tour of Changdeokgung Palace before public opening through a specialist tour operator. The Secret Garden at dawn, with a historian guiding the Joseon Dynasty's political architecture, is an extraordinary privilege. ₩300,000–500,000 for the private arrangement.",
            "11:00am — Brunch at the Four Seasons' Charles H. bar or Shilla's La Yeon (3 Michelin stars) for a daytime omakase Korean menu at ₩150,000–200,000/person.",
            "2:00pm — Leeum Samsung Museum of Art with private curator-guided tour (arrange through the museum's VIP services, ₩100,000+). The Korean celadon collection, pre-modern paintings, and the Damien Hirst and Louise Bourgeois works in the contemporary wing.",
            "8:00pm — Dinner at La Yeon (The Shilla, 3 Michelin stars): the pinnacle of Korean haute cuisine — gujeolpan (nine-sectioned royal court dish), slow-braised abalone, seasonal namul. ₩280,000–380,000/person tasting menu.",
          ],
          cost: "₩700,000–1,200,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private DMZ + Noryangjin at 4am",
          items: [
            "4:00am — Noryangjin Fish Market live auction viewing (private guide, ₩80,000–120,000 for a pre-arranged early morning market experience). Watch fishermen, buyers, and chefs compete for the morning's catch in the fluorescent pre-dawn auction hall. This is one of Seoul's most viscerally alive experiences.",
            "6:30am — Return to hotel for rest and breakfast.",
            "10:00am — Private DMZ tour with a specialist military historian (₩400,000–600,000 for a private vehicle, English-speaking former military guide, and expedited security processing). JSA access + full Third Tunnel descent + Dora Observatory with unrestricted photography briefing.",
            "3:00pm — Return to Seoul. Afternoon spa treatment at Shilla Hotel's The Shilla Spa (₩200,000–350,000 for 90-minute traditional Korean jjimjil treatment).",
            "8:00pm — Dinner at Jungsik Seoul (2 Michelin stars, Mapo-gu): New Korean cuisine — the Seoul restaurant that inspired the New York location. ₩200,000+/person.",
          ],
          cost: "₩800,000–1,400,000 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Bespoke Shopping & Rooftop Dining",
          items: [
            "10:00am — Personal shopping day in Apgujeong with a private style consultant (Hannam-dong or Cheongdam-dong luxury concierge services, ₩150,000–250,000 for 3-hour session). Korean designer brands like Steve J & Yoni P, Blindness, and SJYP are internationally regarded but cost 40% less here.",
            "1:00pm — Lunch at Pierre Gagnaire à Séoul (Lotte Hotel, 2 Michelin stars, French with Korean ingredients): ₩180,000–220,000 lunch menu.",
            "4:00pm — K-pop cultural deep-dive: private K-pop industry insider tour (₩300,000–500,000) — visit the SM, YG, or HYBE neighbourhood, recording studio visits, and insight into the idol training system from a Korean entertainment industry contact.",
            "8:00pm — Dinner at Onji (Joseon Dynasty royal court cuisine, Jongno): a 12-course recreation of dishes once served only to Korean royalty, ₩250,000–400,000/person.",
          ],
          cost: "₩700,000–1,200,000 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Bukhansan Sunrise & Farewell",
          items: [
            "5:00am — Private sunrise hike in Bukhansan National Park with a guide — the granite summit of Baegundae (836m) above the Seoul cityscape as the sun rises is an experience no luxury hotel amenity can replicate. ₩100,000–200,000 for private guide.",
            "9:00am — Return to hotel. Final breakfast: hotel buffet or juk (Korean rice porridge with abalone, ₩25,000–45,000) at Juk Story in Insadong for a restorative final morning.",
            "11:00am — Bespoke ceramics or pojagi (traditional Korean patchwork textile) workshop as a final cultural experience. ₩80,000–150,000 for a 2-hour private session in a traditional workshop in Insadong.",
            "2:00pm — Private car to Incheon Airport. Check in to the Premier Lounge at ICN (complimentary with most luxury credit cards or ₩50,000). Korean Air's Celestial Bar in the First Class terminal is one of the better airport dining experiences in Asia if you're flying business or first.",
          ],
          cost: "₩400,000–800,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "₩20,000–50,000",
      food: "₩15,000–25,000",
      transport: "₩5,000–8,000",
      activities: "₩10,000–20,000",
      total: "₩50,000–103,000/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "₩80,000–180,000",
      food: "₩40,000–80,000",
      transport: "₩15,000–25,000",
      activities: "₩25,000–50,000",
      total: "₩160,000–335,000/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "₩400,000–900,000",
      food: "₩150,000–400,000",
      transport: "₩50,000–120,000",
      activities: "₩100,000–300,000",
      total: "₩700,000–1,720,000/day",
    },
  ],
  mistakes: [
    {
      icon: "📱",
      title: "Not Applying K-ETA Before Flying",
      desc: "K-ETA is mandatory for most nationalities including Indian passport holders. Apply at k-eta.go.kr at least 72 hours before departure — earlier is better. Airlines will deny boarding without an approved K-ETA. This is not something you can sort at the airport. The application takes 10 minutes and costs ₩10,000. Do it the moment you book your flights.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏳️",
      title: "Skipping the DMZ",
      desc: "The Korean Demilitarized Zone is consistently ranked the most powerful travel experience in East Asia by visitors who do it. The combination of Cold War history, active military presence, and the sheer reality of two countries still technically at war — separated by 4km of wilderness and thousands of landmines — is unlike anything else. Many travellers skip it because it requires advance booking and an early start. Every single one regrets it.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🛁",
      title: "Not Trying a Jimjilbang",
      desc: "Korean public saunas (jimjilbang) are one of the most distinctive cultural experiences in South Korea — unisex heated floor rooms, gender-separated hot and cold pools, sleeping areas, restaurants, and PC bangs all under one roof for ₩10,000–15,000. Dragon Hill Spa and Siloam Sauna are Seoul's most accessible for first-timers. Skipping this is like going to Japan without trying an onsen.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "✈️",
      title: "Buying K-Beauty Products at Incheon Airport",
      desc: "Incheon Airport duty-free is convenient but overpriced for Korean beauty brands. Myeongdong's street-level brand stores (Innisfree, COSRX, Some By Mi, Etude House) are 20–35% cheaper than airport retail. The same sheet mask that costs ₩3,500 at ICN costs ₩1,200 on Myeongdong's main shopping street. Stock up on your last afternoon before heading to the airport.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "👘",
      title: "Hanbok Rental at Gyeongbokgung for Free Entry",
      desc: "Renting a hanbok (traditional Korean dress) from the stalls near Gyeongbokgung's main gate gives you free palace entry — offsetting most of the ₩10,000–15,000 rental cost. More importantly, you'll get remarkable photographs inside the palace gates, and Korean visitors will ask to take photos with you. Arrive before 10am for the best light and before the palace gets crowded.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🐟",
      title: "Noryangjin Fish Market at 4am for the Live Auction",
      desc: "The wholesale seafood auction at Noryangjin starts around 3–4am and is one of Seoul's most raw, energetic experiences. Hundreds of crates of live fish, octopus, sea cucumber, and shellfish change hands in minutes. You can then take your purchases to the second-floor restaurant area to have them prepared as sashimi on the spot. Budget ₩40,000–70,000 for a full spread. This is not on any tourist itinerary — which is why it's worth doing.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌅",
      title: "Sunrise at Bukhansan National Park",
      desc: "Bukhansan sits directly on the northern edge of Seoul. The trail to Baegundae (the main summit at 836m) takes 2.5–3 hours each way from the nearest trailhead, passing through dramatic granite peaks. Departing at 3:30am allows you to summit at dawn and watch the Seoul megalopolis emerge from the morning haze below you. The park is free and trails are well-marked. Bring a headlamp and layers — the summit is 6–8°C cooler than the city.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎡",
      title: "Lotte World Magic Island at Night",
      desc: "Lotte World's outdoor Magic Island section on Seokchon Lake transforms completely at night when the castle is illuminated and the crowds thin. Night tickets (after 7pm) are often cheaper, and the combination of lit-up rides and the surrounding lake creates a genuinely magical atmosphere. If you have kids or just want something joyful, this is Seoul's most underrated evening activity.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Can Indian passport holders get K-ETA for South Korea?",
      a: "Yes. Indian passport holders can apply for K-ETA (Korea Electronic Travel Authorization) online at k-eta.go.kr. Cost: ₩10,000. Apply at least 72 hours before departure — ideally a week ahead to allow time if there are any issues with the application. K-ETA permits up to 90-day visa-free stays in South Korea. It replaced the previous tourist visa requirement for Indian nationals.",
    },
    {
      q: "When is the best time to see Seoul cherry blossoms?",
      a: "Cherry blossoms in Seoul typically peak between late March and early April — usually the last week of March through the first 10 days of April, though climate variation means this shifts year to year. The best viewing spots are Yeouido (Hangang Park, famous for its cherry blossom festival), Changdeokgung Palace grounds, Gyeongbokgung, and the tree-lined path along Seokchon Lake near Lotte World. Book accommodation 3–4 months ahead for cherry blossom season — it is Seoul's peak tourism period.",
    },
    {
      q: "Seoul vs Busan — which is better for a first visit?",
      a: "Seoul for a first visit, without question. Seoul has the palaces, the DMZ, the food scene, the K-culture districts, and the density of experiences that defines South Korea. Busan is Korea's second city — great beaches, Haeundae, the famous Gamcheon Culture Village, and Jagalchi Fish Market — but it's supplementary, not a replacement. If you have 10+ days, do 6 nights in Seoul and 3 in Busan via KTX (2h45min, ₩52,000). If you only have 5 days, stay in Seoul.",
    },
    {
      q: "Korean BBQ tips for first-timers — what to order and how?",
      a: "Start with samgyeopsal (pork belly, ₩12,000–18,000/portion) — the safest introduction. The grill is built into your table; a server will often start the coals and turn the meat for you. Wrap the cooked meat in perilla leaf or lettuce with a smear of ssamjang (fermented soybean paste), garlic, and kimchi. Eat it in one bite. Order doenjang-jjigae (fermented bean paste stew) as a soup accompaniment. Never fill your glass yourself — refill others' glasses and wait for someone to refill yours. Soju shots should be accepted; pour back and forth ritually.",
    },
    {
      q: "How do I book the DMZ Joint Security Area tour?",
      a: "The JSA tour requires advance booking through an authorized operator — you cannot visit independently. Reputable options: USO Seoul tours (book at uso.org/korea), Koridoor (koridoor.co.kr), and Panmunjom Travel Center. Book at least 3–5 days ahead in low season, 2–3 weeks ahead in spring and autumn peak season. Bring your original passport — photocopies are not accepted at the military checkpoints. Wear conservative clothing (no shorts, ripped jeans, or revealing tops — you may be refused entry). The full JSA tour costs $40–60 USD.",
    },
    {
      q: "Is Seoul expensive compared to other Asian cities?",
      a: "Seoul sits in the middle of the Asian travel cost spectrum. Budget travellers can manage on ₩50,000–80,000/day (~$38–60) using guesthouses, convenience store meals, and the T-money subway. Mid-range is ₩150,000–280,000/day (~$115–215). Food is the great bargain — ₩4,000 tteokbokki from a street stall, ₩8,000 bibimbap in a restaurant, ₩12,000 Korean BBQ per portion. Transport is excellent value at ₩1,350/subway ride. Seoul is significantly cheaper than Tokyo for equivalent quality and notably cheaper than Hong Kong for accommodation.",
    },
  ],
  combineWith: ["tokyo-5-days", "busan-3-days", "taipei-4-days"],
  relatedSlugs: ["tokyo-5-days", "taipei-4-days", "hong-kong-4-days", "kyoto-4-days"],
  galleryQuery: "seoul south korea gyeongbokgung palace han river hongdae night market",
};

export const metadata: Metadata = {
  title: "Seoul in 5 Days: Palaces, Korean BBQ, DMZ & K-Culture Complete Guide (2026)",
  description: "Complete Seoul 5-day itinerary with Gyeongbokgung Palace, DMZ tour booking guide, Korean BBQ tips, K-beauty shopping, real won costs, and insider tips for every budget.",
  keywords: [
    "seoul itinerary 5 days",
    "seoul travel guide 2026",
    "dmz tour seoul",
    "korean bbq guide",
    "seoul budget travel",
    "gyeongbokgung palace",
    "k-eta application",
    "seoul things to do",
  ],
  openGraph: {
    title: "Seoul in 5 Days: Palaces, DMZ & K-Culture (2026)",
    description: "Gyeongbokgung at sunrise in hanbok, the JSA at the DMZ, Korean BBQ galbi, and Hongdae street performers — Seoul in 5 complete itineraries.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Seoul Gyeongbokgung Palace South Korea",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seoul in 5 Days (2026)",
    description: "DMZ, Korean BBQ, palaces, K-culture — complete guide for every budget.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/seoul-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Seoul in 5 Days: Palaces, Korean BBQ, DMZ & K-Culture Complete Guide (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80",
      description:
        "Complete Seoul 5-day itinerary covering Gyeongbokgung Palace, DMZ tour, Korean BBQ, Hongdae nightlife, and K-beauty shopping for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Seoul 5 Days",
          item: "https://www.incredibleitinerary.com/blog/seoul-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Seoul, South Korea",
      description:
        "South Korea's capital — a city of ancient palaces, vibrant K-culture, world-class street food, and a history shaped by one of the most dramatic national transformations of the 20th century.",
      touristType: ["Cultural tourists", "Food lovers", "K-pop fans", "History buffs", "Adventure travellers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.5665,
        longitude: 126.978,
      },
    },
  ],
};

export default function SeoulPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
