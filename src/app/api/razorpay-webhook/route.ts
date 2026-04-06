import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "";
const RESEND_KEY      = process.env.RESEND_API_KEY || "";
const BASE            = "https://www.incredibleitinerary.com";
const YOUR_EMAIL      = "hello@incredibleitinerary.com";

// ── Tier → slugs map ──────────────────────────────────────────────────────────
const TIER_SLUGS: Record<string, string[]> = {
  "II-PDF-99":        ["goa-3-days", "india-budget-guide", "varanasi-3-days"],
  "II-PDF-149":       ["rajasthan-7-days", "kerala-5-days", "kashmir-6-days", "manali-5-days", "andaman-5-days"],
  "II-PDF-199":       ["leh-ladakh-7-days", "bangkok-4-days", "bali-5-days", "singapore-4-days", "sri-lanka-7-days"],
  "II-PDF-249":       ["dubai-4-days", "portugal-7-days"],
  "II-PDF-299":       ["japan-10-days", "greece-10-days"],
  "II-PDF-199-P3":    ["vietnam-10-days", "thailand-10-days", "bhutan-5-days"],
  "II-INDIAPACK-001": [
    "rajasthan-7-days", "kerala-5-days", "goa-3-days", "india-budget-guide",
    "leh-ladakh-7-days", "kashmir-6-days", "manali-5-days", "andaman-5-days", "varanasi-3-days",
    "bhutan-5-days",
  ],
  "II-ALLGUIDES-001": [],
};

const TIER_NAMES: Record<string, string> = {
  "II-PDF-99":        "₹99 Guide Pack",
  "II-PDF-149":       "₹149 Guide Pack",
  "II-PDF-199":       "₹199 Guide Pack",
  "II-PDF-249":       "₹249 Guide Pack",
  "II-PDF-299":       "₹299 Guide Pack",
  "II-PDF-199-P3":    "₹199 Southeast Asia Pack",
  "II-INDIAPACK-001": "India Pack (₹249)",
  "II-ALLGUIDES-001": "All Guides — Full Access (₹499)",
};

// slug → { title, emoji }
const SLUG_INFO: Record<string, { title: string; emoji: string }> = {
  "goa-3-days":           { title: "Goa 3-Day Guide",            emoji: "🏖️" },
  "india-budget-guide":   { title: "India Budget Guide",          emoji: "🇮🇳" },
  "varanasi-3-days":      { title: "Varanasi 3-Day Guide",        emoji: "🕯️" },
  "rajasthan-7-days":     { title: "Rajasthan 7-Day Guide",       emoji: "🏰" },
  "kerala-5-days":        { title: "Kerala 5-Day Guide",          emoji: "🌿" },
  "kashmir-6-days":       { title: "Kashmir 6-Day Guide",         emoji: "❄️" },
  "manali-5-days":        { title: "Manali 5-Day Guide",          emoji: "⛰️" },
  "andaman-5-days":       { title: "Andaman 5-Day Guide",         emoji: "🏝️" },
  "leh-ladakh-7-days":    { title: "Leh Ladakh 7-Day Guide",      emoji: "🏔️" },
  "bangkok-4-days":       { title: "Bangkok 4-Day Guide",         emoji: "🇹🇭" },
  "bali-5-days":          { title: "Bali 5-Day Guide",            emoji: "🌴" },
  "singapore-4-days":     { title: "Singapore 4-Day Guide",       emoji: "🇸🇬" },
  "sri-lanka-7-days":     { title: "Sri Lanka 7-Day Guide",       emoji: "🦁" },
  "dubai-4-days":         { title: "Dubai 4-Day Guide",           emoji: "🏙️" },
  "portugal-7-days":      { title: "Portugal 7-Day Guide",        emoji: "🇵🇹" },
  "japan-10-days":        { title: "Japan 10-Day Guide",          emoji: "🗼" },
  "greece-10-days":       { title: "Greece 10-Day Guide",         emoji: "🇬🇷" },
  "vietnam-10-days":      { title: "Vietnam 10-Day Guide",        emoji: "🇻🇳" },
  "thailand-10-days":     { title: "Thailand 10-Day Guide",       emoji: "🌴" },
  "bhutan-5-days":        { title: "Bhutan 5-Day Guide",          emoji: "🏯" },
};

// ── Redis helpers ─────────────────────────────────────────────────────────────
type DownloadData = { slugs: string[]; premium: boolean };

async function getRedis() {
  const url = process.env.REDIS_URL || process.env.KV_REST_API_URL;
  if (!url) return null;
  try {
    const { default: Redis } = await import("ioredis");
    return new Redis(url, { lazyConnect: true, connectTimeout: 3000, maxRetriesPerRequest: 1 });
  } catch { return null; }
}

async function getDownloads(email: string): Promise<DownloadData> {
  const redis = await getRedis();
  if (!redis) return { slugs: [], premium: false };
  try {
    const raw = await redis.get(`dl:${email}`);
    redis.disconnect();
    if (!raw) return { slugs: [], premium: false };
    return JSON.parse(raw) as DownloadData;
  } catch { return { slugs: [], premium: false }; }
}

async function saveDownloads(email: string, data: DownloadData) {
  const redis = await getRedis();
  if (!redis) return;
  try {
    await redis.set(`dl:${email}`, JSON.stringify(data), "EX", 60 * 60 * 24 * 365);
    redis.disconnect();
  } catch { /* ignore */ }
}

// ── Purchase confirmation email ───────────────────────────────────────────────
function buildPurchaseEmail(email: string, referenceId: string, slugs: string[], isAllAccess: boolean) {
  const tierName = TIER_NAMES[referenceId] ?? "Guide Pack";

  const guideRows = isAllAccess
    ? `<tr><td style="padding:14px 18px;text-align:center;">
        <p style="margin:0;font-size:13px;color:#161008;font-weight:600;">🎉 You have full access to all guides!</p>
        <p style="margin:6px 0 0;font-size:12px;color:#8a7a6a;">Visit any guide page on the site and enter your email in the popup to download.</p>
        <a href="${BASE}/blog" style="display:inline-block;margin-top:12px;background:#C9A96E;color:#161008;text-decoration:none;font-size:12px;font-weight:700;padding:10px 24px;border-radius:6px;">
          Browse All Guides →
        </a>
      </td></tr>`
    : slugs.map((slug, i) => {
        const info = SLUG_INFO[slug] ?? { title: slug, emoji: "📄" };
        const blogHref = `${BASE}/blog/${slug}`;
        return `<tr>
          <td style="padding:0 0 6px;">
            <a href="${blogHref}" style="display:block;background:#fff;border:1.5px solid #e8e0d4;border-radius:10px;padding:12px 16px;text-decoration:none;${i === 0 ? "border-color:#C9A96E;" : ""}">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="28" style="font-size:18px;vertical-align:middle;">${info.emoji}</td>
                  <td style="padding-left:10px;vertical-align:middle;">
                    <p style="margin:0;font-size:13px;font-weight:600;color:#161008;">${info.title}</p>
                    <p style="margin:2px 0 0;font-size:11px;color:#8a7a6a;">Click to open guide page</p>
                  </td>
                  <td width="24" style="text-align:right;vertical-align:middle;font-size:16px;color:#C9A96E;">→</td>
                </tr>
              </table>
            </a>
          </td>
        </tr>`;
      }).join("");

  return {
    from: "IncredibleItinerary <hello@incredibleitinerary.com>",
    to: [email],
    reply_to: YOUR_EMAIL,
    subject: `Your purchase is confirmed — guides are ready to download 📚`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ede8df;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ede8df;padding:32px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;" cellpadding="0" cellspacing="0">

  <!-- HEADER -->
  <tr><td style="background:#161008;border-radius:14px 14px 0 0;padding:28px 32px;text-align:center;">
    <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A96E;font-weight:600;">Incredible<span style="color:#fff;">Itinerary</span></p>
    <p style="margin:6px 0 0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#ffffff55;">Curated Travel Guides Worldwide</p>
  </td></tr>

  <!-- SUCCESS BAND -->
  <tr><td style="background:#1E6B5E;padding:20px 32px;text-align:center;">
    <p style="margin:0;font-size:22px;">✅</p>
    <p style="margin:6px 0 0;font-size:15px;font-weight:700;color:#fff;letter-spacing:.3px;">Purchase Confirmed!</p>
    <p style="margin:4px 0 0;font-size:12px;color:#ffffff80;">${tierName}</p>
  </td></tr>

  <!-- BODY -->
  <tr><td style="background:#fdf8f2;padding:32px;">

    <p style="margin:0 0 6px;font-size:20px;font-weight:300;color:#161008;font-family:Georgia,serif;">Thank you!</p>
    <p style="margin:0 0 24px;font-size:14px;color:#5a4a3a;line-height:1.7;">
      Your payment is confirmed. Your guide${slugs.length > 1 || isAllAccess ? "s are" : " is"} ready to download right now.
    </p>

    <!-- How to download -->
    <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;margin-bottom:24px;">
      <p style="margin:0 0 10px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#166534;font-weight:600;">How to download your PDF</p>
      ${[
        ["1", "Click any guide link below to open the guide page", "#C9A96E"],
        ["2", "A popup will appear — enter <strong>" + email + "</strong>", "#1E6B5E"],
        ["3", "Your PDF opens instantly in a new tab", "#161008"],
      ].map(([n, text, color]) => `
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;">
          <div style="background:${color};color:#fff;min-width:20px;height:20px;border-radius:50%;font-size:11px;font-weight:700;text-align:center;line-height:20px;">${n}</div>
          <p style="margin:0;font-size:13px;color:#166534;line-height:1.5;">${text}</p>
        </div>`).join("")}
    </div>

    <!-- Guide links heading -->
    <p style="margin:0 0 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a7a6a;font-weight:600;">
      Your ${isAllAccess ? "all-access" : `${slugs.length} unlocked`} guide${slugs.length > 1 || isAllAccess ? "s" : ""}
    </p>

    <!-- Guide rows -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${guideRows}
    </table>

    <!-- Support -->
    <div style="background:#fff;border-radius:10px;border:1.5px solid #e8e0d4;padding:16px 18px;margin-bottom:8px;">
      <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#161008;">Need help downloading?</p>
      <p style="margin:0;font-size:12px;color:#8a7a6a;line-height:1.5;">
        Just reply to this email — we'll sort it within a few hours.
      </p>
    </div>

    <p style="margin:20px 0 4px;font-size:13px;color:#5a4a3a;">Happy travelling,</p>
    <p style="margin:0;font-size:13px;font-weight:600;color:#161008;">Surya · IncredibleItinerary</p>

  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#f0ebe3;border-radius:0 0 14px 14px;padding:20px 32px;text-align:center;border-top:1px solid #e0d8cc;">
    <p style="margin:0 0 8px;">
      <a href="${BASE}" style="font-size:11px;color:#C9A96E;text-decoration:none;font-weight:600;">IncredibleItinerary.com</a>
      <span style="color:#c0b090;font-size:11px;"> · </span>
      <a href="mailto:${YOUR_EMAIL}" style="font-size:11px;color:#8a7a6a;text-decoration:none;">${YOUR_EMAIL}</a>
    </p>
    <p style="margin:0;font-size:10px;color:#b0a090;">
      This is a purchase confirmation — you will always receive order emails from us.
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  };
}

// ── Send via Resend ───────────────────────────────────────────────────────────
async function sendEmail(payload: object) {
  if (!RESEND_KEY) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[webhook] Failed to send email:", err);
  }
}

// ── POST /api/razorpay-webhook ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const rawBody = await req.text();

  // Verify webhook signature
  if (WEBHOOK_SECRET) {
    const signature = req.headers.get("x-razorpay-signature") || "";
    const expectedSig = crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex");

    if (expectedSig !== signature) {
      console.warn("[webhook] Invalid Razorpay signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }
  } else {
    console.warn("[webhook] RAZORPAY_WEBHOOK_SECRET not set — skipping signature check");
  }

  let event: Record<string, unknown>;
  try { event = JSON.parse(rawBody); }
  catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const eventType = event.event as string;

  // ── Handle payment_link.paid ──────────────────────────────────────────────
  if (eventType === "payment_link.paid") {
    try {
      const payload     = event.payload as Record<string, unknown>;
      const paymentLink = (payload.payment_link as Record<string, unknown>)?.entity as Record<string, unknown>;
      const payment     = (payload.payment as Record<string, unknown>)?.entity as Record<string, unknown>;

      const email       = (payment?.email as string || "").toLowerCase().trim();
      const referenceId = paymentLink?.reference_id as string || "";

      if (!email) {
        console.warn("[webhook] No email in payment payload");
        return NextResponse.json({ received: true });
      }

      const isAllAccess   = referenceId === "II-ALLGUIDES-001";
      const slugsToUnlock = TIER_SLUGS[referenceId] ?? [];

      // Update Redis access
      const data = await getDownloads(email);
      if (isAllAccess) {
        data.premium = true;
      } else {
        for (const slug of slugsToUnlock) {
          if (!data.slugs.includes(slug)) data.slugs.push(slug);
        }
      }
      await saveDownloads(email, data);

      // Send purchase confirmation email + add to newsletter (parallel)
      await Promise.all([
        sendEmail(buildPurchaseEmail(email, referenceId, slugsToUnlock, isAllAccess)),
        fetch(`${req.nextUrl.origin}/api/subscribe`, {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify({ email, source: "pdf-purchase" }),
        }).catch(() => {}),
      ]);

      console.log(`[webhook] Confirmed purchase for ${email} — ref: ${referenceId}, premium: ${data.premium}`);
    } catch (err) {
      console.error("[webhook] Error processing payment_link.paid:", err);
    }
  }

  // Always return 200 so Razorpay doesn't retry
  return NextResponse.json({ received: true });
}
