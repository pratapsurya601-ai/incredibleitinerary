/**
 * create-razorpay-links.mjs
 *
 * Creates all 7 payment links via Razorpay API with callback_url set,
 * so users are redirected to /shop/success after payment.
 *
 * Usage:
 *   RAZORPAY_KEY_ID=rzp_live_xxx RAZORPAY_KEY_SECRET=yyy node scripts/create-razorpay-links.mjs
 *
 * Or set them in .env.local and run:
 *   node -e "require('dotenv').config({path:'.env.local'})" scripts/create-razorpay-links.mjs
 */

const KEY_ID     = process.env.RAZORPAY_KEY_ID;
const KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

if (!KEY_ID || !KEY_SECRET) {
  console.error("\n❌  Missing RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET environment variables.\n");
  console.error("Run as:");
  console.error("  RAZORPAY_KEY_ID=rzp_live_xxx RAZORPAY_KEY_SECRET=yyy node scripts/create-razorpay-links.mjs\n");
  process.exit(1);
}

const CALLBACK_URL = "https://www.incredibleitinerary.com/shop/success";

// All 7 payment tiers
const LINKS = [
  {
    amount: 9900,               // paise (₹99)
    reference_id: "II-PDF-99",
    description: "IncredibleItinerary — Goa + India Budget + Varanasi PDF Bundle",
    configKey: "razorpayUrl (₹99 products)",
  },
  {
    amount: 14900,              // ₹149
    reference_id: "II-PDF-149",
    description: "IncredibleItinerary — Rajasthan + Kerala + Kashmir + Manali + Andaman PDF Bundle",
    configKey: "razorpayUrl (₹149 products)",
  },
  {
    amount: 19900,              // ₹199
    reference_id: "II-PDF-199",
    description: "IncredibleItinerary — Leh Ladakh + Bangkok + Bali + Singapore + Sri Lanka PDF Bundle",
    configKey: "razorpayUrl (₹199 products)",
  },
  {
    amount: 24900,              // ₹249
    reference_id: "II-PDF-249",
    description: "IncredibleItinerary — International Destination PDF Guide",
    configKey: "razorpayUrl (₹249 products)",
  },
  {
    amount: 29900,              // ₹299
    reference_id: "II-PDF-299",
    description: "IncredibleItinerary — Japan + Greece Premium PDF Bundle",
    configKey: "razorpayUrl (₹299 products)",
  },
  {
    amount: 24900,              // ₹249 India Pack
    reference_id: "II-INDIAPACK-001",
    description: "IncredibleItinerary — India Pack: All India Guides (Lifetime Access)",
    configKey: "India Pack bundle button URL",
  },
  {
    amount: 49900,              // ₹499 All Guides
    reference_id: "II-ALLGUIDES-001",
    description: "IncredibleItinerary — All Guides: 20+ Destinations (Lifetime Access)",
    configKey: "All Guides bundle button URL",
  },
];

const auth = Buffer.from(`${KEY_ID}:${KEY_SECRET}`).toString("base64");

async function createLink(link) {
  const body = {
    amount: link.amount,
    currency: "INR",
    accept_partial: false,
    description: link.description,
    reference_id: link.reference_id,
    callback_url: CALLBACK_URL,
    callback_method: "get",
  };

  const res = await fetch("https://api.razorpay.com/v1/payment_links", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error?.description || JSON.stringify(data));
  }

  return data;
}

console.log("\n" + "=".repeat(60));
console.log("Creating Razorpay payment links with redirect URL...");
console.log("=".repeat(60) + "\n");

const results = [];

for (const link of LINKS) {
  try {
    const data = await createLink(link);
    const shortUrl = data.short_url || data.id;
    results.push({ ...link, url: shortUrl, id: data.id });
    console.log(`✅  ${link.reference_id}`);
    console.log(`    Amount:       ₹${link.amount / 100}`);
    console.log(`    URL:          ${shortUrl}`);
    console.log(`    Link ID:      ${data.id}`);
    console.log(`    Callback:     ${data.callback_url}`);
    console.log(`    Config key:   ${link.configKey}`);
    console.log();
  } catch (err) {
    console.error(`❌  ${link.reference_id}: ${err.message}`);
  }
}

console.log("=".repeat(60));
console.log("DONE. Copy these URLs into src/lib/config.ts:\n");

for (const r of results) {
  if (r.url) {
    console.log(`${r.reference_id.padEnd(22)} → ${r.url}`);
  }
}

console.log("\n" + "=".repeat(60));
console.log("Also update the bundle buttons in ShopClient.tsx:");
const indiaPackResult = results.find(r => r.reference_id === "II-INDIAPACK-001");
const allGuidesResult = results.find(r => r.reference_id === "II-ALLGUIDES-001");
if (indiaPackResult) console.log(`India Pack  → ${indiaPackResult.url}`);
if (allGuidesResult) console.log(`All Guides  → ${allGuidesResult.url}`);
console.log("=".repeat(60) + "\n");
