// Pexels API client
// Docs: https://www.pexels.com/api/documentation/

const PEXELS_API_KEY = process.env.PEXELS_API_KEY || "";
const BASE_URL = "https://api.pexels.com/v1";

export interface PexelsPhoto {
  id: number;
  url: string;
  alt: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  photographer: string;
  photographer_url: string;
  avg_color: string;
}

// Search for a photo by keyword — returns the best result
export async function getPexelsPhoto(
  query: string,
  orientation: "landscape" | "portrait" | "square" = "landscape"
): Promise<PexelsPhoto | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=5&orientation=${orientation}`,
      {
        headers: { Authorization: PEXELS_API_KEY },
        next: { revalidate: 86400 }, // cache for 24 hours
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    // Return first result — Pexels ranks by relevance
    return data.photos?.[0] ?? null;
  } catch {
    return null;
  }
}

// Fetch multiple photos for a section (e.g. destination grid)
export async function getPexelsPhotos(
  query: string,
  count: number = 4,
  orientation: "landscape" | "portrait" | "square" = "landscape"
): Promise<PexelsPhoto[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=${count}&orientation=${orientation}`,
      {
        headers: { Authorization: PEXELS_API_KEY },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.photos ?? [];
  } catch {
    return [];
  }
}

// ── SITE IMAGE KEYWORDS ─────────────────────────────────────────────────────
// Every image on the site has a keyword that guarantees the right photo.
// Change a keyword here = image updates everywhere automatically.

export const IMAGE_QUERIES = {
  // Homepage — architecture and landscape only
  hero:               "india rajasthan palace architecture golden hour",
  ctaBanner:          "india himalayas mountain landscape aerial",
  whyUs:              "india kerala backwaters water reflection nature",

  // Destinations — architecture/landscape, no people
  rajasthan:          "amber fort jaipur architecture sunrise",
  goldenTriangle:     "taj mahal marble architecture agra",
  kerala:             "kerala backwaters houseboat water reflection",
  himalaya:           "himalaya mountains snow peaks landscape",

  // Packages — architecture/landscape, no people
  pkgRajasthan:       "mehrangarh fort jodhpur blue city architecture",
  pkgGoldenTriangle:  "taj mahal sunrise reflection pool",
  pkgHimalaya:        "leh ladakh monastery mountain landscape",
  pkgKerala:          "kerala backwaters misty water palm",
  pkgVaranasi:        "varanasi ghats river ganga architecture",
  pkgLuxury:          "india palace heritage hotel architecture courtyard",

  // Goa blog — beach landscape, architecture, no people
  goaHero:            "palolem beach goa crescent cove empty dawn",
  goaChurch:          "basilica bom jesus old goa white church colonial",
  goaFood:            "goa seafood fish curry coconut thali plate",
  goaBeach:           "goa beach palm trees turquoise water no people",
  goaMarket:          "goa spice market colourful pottery crafts",
  goaChapora:         "chapora fort goa clifftop river aerial",
  goaDudhsagar:       "dudhsagar waterfall goa jungle green",
  goaPalolem:         "palolem beach sunrise empty sand reflection",
  goaAnjuna:          "anjuna beach goa rocky coast sunset",
  goaFontainhas:      "fontainhas latin quarter goa colourful portuguese buildings",

  // Rajasthan blog — fort/palace architecture, desert landscape, no people
  rajasthanHero:      "amber fort jaipur sunrise reflection moat water",
  rajasthanFort:      "mehrangarh fort jodhpur blue city aerial architecture",
  rajasthanFood:      "rajasthani thali traditional food dal baati plate",
  rajasthanDesert:    "thar desert jaisalmer sand dunes golden sunset",
  rajasthanLake:      "udaipur lake pichola city palace reflection water",
  rajasthanHawaMahal: "hawa mahal jaipur pink facade windows architecture",
  rajasthanJaisalmer: "jaisalmer fort golden sandstone architecture rajasthan",
  rajasthanUdaipur:   "udaipur lake palace white marble water reflection",
  rajasthanPushkar:   "pushkar lake ghats temple rajasthan architecture",
  rajasthanStepwell:  "panna meena kund stepwell jaipur geometric architecture",
  // Golden Triangle blog
  gtHero:         "taj mahal agra sunrise india marble",
  gtDelhi:        "red fort delhi india mughal architecture",
  gtJaipur:       "hawa mahal jaipur pink city india",
  gtHumayun:      "humayun tomb delhi india garden mughal",

  // Kerala blog
  keralaHero:     "kerala backwaters houseboat canals india",
  keralaMunnar:   "munnar tea gardens kerala hills mist",
  keralaBeach:    "varkala cliff beach kerala india sunset",
  keralaKochi:    "fort cochin chinese fishing nets kerala",

  // Kashmir blog
  kashmir:        "dal lake srinagar kashmir houseboat shikara morning",
  kashmirGulmarg: "gulmarg kashmir snow mountains gondola winter",
  kashmirPahal:   "pahalgam valley kashmir betaab valley river pine",

  // Varanasi blog
  varanasi:       "varanasi ghats ganges river sunrise boat india",
  varanasiAarti:  "ganga aarti varanasi dashashwamedh ghat fire ceremony",
  // Andaman blog
  andaman:        "radhanagar beach havelock andaman turquoise water",
  andamanDiving:  "andaman islands scuba diving coral reef underwater",
  andamanNeil:    "neil island andaman natural bridge beach sunset",
  // Ladakh blog
  ladakh:         "pangong lake ladakh blue water mountains india",
  ladakhNubra:    "nubra valley sand dunes camels ladakh himalaya",
  ladakhPass:     "khardung la pass ladakh highest motorable road snow",
  // Manali blog
  manali:         "manali mountains snow himachal pradesh valley",
  manaliSolang:   "solang valley manali snow skiing mountains",
  manaliOld:      "old manali cafe apple orchard himachal mountains",
  // Coorg blog
  coorg:          "coorg coffee plantation karnataka misty hills estate",
  coorgFalls:     "abbey falls coorg karnataka waterfall coffee green",
  coorgElephant:  "dubare elephant camp coorg cauvery river karnataka",

  // Leh Ladakh blog
  ladakhHero:       "pangong lake ladakh blue water mountains india",
  ladakhMonastery:  "thiksey monastery ladakh himalayas architecture",

  // Manali blog
  manaliHero:       "manali himachal pradesh snow mountains valley rohtang",
  manaliSolangHero: "solang valley manali snow adventure skiing",

  // Coorg blog
  coorgHero:        "coorg coffee plantation karnataka green misty hills",
  coorgAbbey:       "abbey falls coorg karnataka waterfall lush green",

  // Rishikesh blog
  rishikeshHero:    "rishikesh ganges river laxman jhula haridwar ghats",
  rishikeshRafting: "rishikesh river rafting ganges white water adventure",

  // Hampi blog
  hampiHero:        "hampi vijayanagara ruins karnataka boulders ancient temple",
  hampiVittala:     "vittala temple hampi stone chariot karnataka ruins",

  // Spiti blog
  spitiHero:        "spiti valley key monastery himachal pradesh mountain lunar",
  spitiChandratal:  "chandratal lake spiti himachal blue mountain reflection",

  // Jibhi blog
  jibhiHero:        "jibhi tirthan valley himachal pradesh wooden village mountains",
  jibhiJalori:      "jalori pass himachal pradesh himalaya snow mountain trek",
} as const;

export type ImageQueryKey = keyof typeof IMAGE_QUERIES;
// (appended) New blog image keys will use inline img tags with direct Unsplash URLs
