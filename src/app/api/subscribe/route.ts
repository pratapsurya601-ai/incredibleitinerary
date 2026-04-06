import { NextRequest, NextResponse } from "next/server";

const RESEND_KEY = process.env.RESEND_API_KEY || "";
const BASE = "https://www.incredibleitinerary.com";
const FROM = "IncredibleItinerary <hello@incredibleitinerary.com>";
const ADMIN_EMAIL = "hello@incredibleitinerary.com";

// ── Resend helper ────────────────────────────────────────────────────────────
async function sendViaResend(payload: object) {
  if (!RESEND_KEY) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("[subscribe] Resend error:", err);
  }
}

// ── Welcome email ────────────────────────────────────────────────────────────
function buildWelcomeEmail(email: string, firstName: string | undefined) {
  const name = firstName?.trim() || "";
  const greeting = name ? `Hi ${name.split(" ")[0]}` : "Hello";

  const guides = [
    { emoji: "🏔️", label: "Kashmir 6 Days",         sub: "Dal Lake · Gulmarg · Pahalgam",      href: `${BASE}/blog/kashmir-6-days` },
    { emoji: "🏰", label: "Rajasthan 7 Days",        sub: "Jaipur · Jodhpur · Udaipur",          href: `${BASE}/blog/rajasthan-7-days` },
    { emoji: "🌿", label: "Kerala 5 Days",            sub: "Backwaters · Munnar · Varkala",        href: `${BASE}/blog/kerala-5-days` },
    { emoji: "🏔️", label: "Leh Ladakh 7 Days",       sub: "Pangong · Nubra Valley · Khardung La", href: `${BASE}/blog/leh-ladakh-7-days` },
    { emoji: "🕌", label: "Golden Triangle 7 Days",  sub: "Delhi · Agra · Jaipur",                href: `${BASE}/blog/golden-triangle-7-days` },
    { emoji: "🏖️", label: "Goa 3 Days",              sub: "Beaches · Old Goa · Nightlife",        href: `${BASE}/blog/goa-3-days` },
    { emoji: "🌿", label: "Meghalaya 5 Days",        sub: "Living Root Bridges · Dawki · Cherrapunji", href: `${BASE}/blog/meghalaya-5-days` },
    { emoji: "🏔️", label: "Manali 5 Days",           sub: "Rohtang · Solang · Old Manali",        href: `${BASE}/blog/manali-5-days` },
    { emoji: "🤿", label: "Andaman 5 Days",          sub: "Radhanagar · Scuba · Neil Island",     href: `${BASE}/blog/andaman-5-days` },
    { emoji: "🕯️", label: "Varanasi 3 Days",        sub: "Ghats · Ganga Aarti · Street Food",    href: `${BASE}/blog/varanasi-3-days` },
  ];

  const guideRows = guides.map((g, i) => `
    <tr>
      <td style="padding:0 0 6px;">
        <a href="${g.href}" style="display:block;background:#fff;border:1.5px solid ${i === 0 ? "#C9A96E" : "#e8e0d4"};border-radius:10px;padding:12px 16px;text-decoration:none;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td width="26" style="font-size:17px;vertical-align:middle;">${g.emoji}</td>
            <td style="padding-left:10px;vertical-align:middle;">
              <p style="margin:0;font-size:13px;font-weight:600;color:#161008;">${g.label}</p>
              <p style="margin:2px 0 0;font-size:11px;color:#8a7a6a;">${g.sub}</p>
            </td>
            <td width="20" style="text-align:right;vertical-align:middle;color:#C9A96E;font-size:15px;">→</td>
          </tr></table>
        </a>
      </td>
    </tr>`).join("");

  return {
    from: FROM,
    to: [email],
    reply_to: ADMIN_EMAIL,
    headers: {
      "List-Unsubscribe": `<mailto:hello@incredibleitinerary.com?subject=Unsubscribe&body=Please%20unsubscribe%20${encodeURIComponent(email)}>, <${BASE}/privacy>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      "Precedence": "bulk",
    },
    subject: `Your free India travel guides are here 🧭`,
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

  <!-- GOLD BAND -->
  <tr><td style="background:#C9A96E;padding:14px 32px;text-align:center;">
    <p style="margin:0;font-size:12px;font-weight:700;color:#161008;letter-spacing:.5px;">
      313+ FREE GUIDES · REAL BUDGETS · ZERO TOURIST TRAPS
    </p>
  </td></tr>

  <!-- BODY -->
  <tr><td style="background:#fdf8f2;padding:32px;">

    <p style="margin:0 0 6px;font-size:22px;font-weight:300;color:#161008;font-family:Georgia,serif;">${greeting},</p>
    <p style="margin:0 0 22px;font-size:14px;color:#5a4a3a;line-height:1.7;">
      Welcome to IncredibleItinerary — free, handcrafted travel guides that tell you exactly where you're being overcharged and the better, cheaper alternatives locals actually use.
    </p>

    <!-- Savings badge -->
    <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:14px 18px;margin-bottom:26px;">
      <p style="margin:0;font-size:13px;font-weight:700;color:#166534;">💰 Our travellers save ₹3,000–₹5,000 per trip on average</p>
      <p style="margin:4px 0 0;font-size:11px;color:#166534;opacity:.8;">Real prices · Local tips · No sponsored content</p>
    </div>

    <!-- Guides list -->
    <p style="margin:0 0 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a7a6a;font-weight:600;">10 of our most popular free guides</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:26px;">
      ${guideRows}
    </table>

    <!-- View all -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:26px;">
      <tr><td style="text-align:center;">
        <a href="${BASE}/blog" style="display:inline-block;background:#161008;color:#C9A96E;text-decoration:none;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:13px 32px;border-radius:8px;">
          View All 313+ Free Guides →
        </a>
      </td></tr>
    </table>

    <!-- Quiz CTA -->
    <div style="background:#f8f2e8;border-radius:10px;padding:18px;margin-bottom:26px;text-align:center;border:1.5px solid #e8dfc8;">
      <p style="margin:0 0 6px;font-size:12px;color:#8a7a6a;">Not sure where to go next?</p>
      <a href="${BASE}/quiz" style="display:inline-block;background:#C9A96E;color:#161008;text-decoration:none;font-size:12px;font-weight:700;padding:11px 26px;border-radius:6px;">
        Take the 60-Second Destination Quiz →
      </a>
    </div>

    <!-- Custom itinerary -->
    <div style="border:1.5px solid #C9A96E;border-radius:10px;padding:16px 20px;margin-bottom:26px;text-align:center;">
      <p style="margin:0 0 5px;font-size:13px;font-weight:600;color:#161008;">Want a plan built just for your trip?</p>
      <p style="margin:0 0 12px;font-size:12px;color:#8a7a6a;line-height:1.5;">Tell us your dates, group size & budget — personalised day-by-day itinerary in 24 hours. Free.</p>
      <a href="${BASE}/contact" style="display:inline-block;background:#1E6B5E;color:#fff;text-decoration:none;font-size:12px;font-weight:600;padding:10px 22px;border-radius:6px;">
        Get My Free Custom Itinerary →
      </a>
    </div>

    <p style="margin:0 0 4px;font-size:13px;color:#5a4a3a;">Happy travelling,</p>
    <p style="margin:0;font-size:13px;font-weight:600;color:#161008;">Surya · IncredibleItinerary</p>

  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#f0ebe3;border-radius:0 0 14px 14px;padding:18px 32px;text-align:center;border-top:1px solid #e0d8cc;">
    <p style="margin:0 0 6px;">
      <a href="${BASE}" style="font-size:11px;color:#C9A96E;text-decoration:none;font-weight:600;">IncredibleItinerary.com</a>
      <span style="color:#c0b090;"> · </span>
      <a href="mailto:hello@incredibleitinerary.com" style="font-size:11px;color:#8a7a6a;text-decoration:none;">hello@incredibleitinerary.com</a>
    </p>
    <p style="margin:0;font-size:10px;color:#b0a090;line-height:1.6;">
      You received this because you signed up on IncredibleItinerary.com.<br>
      <a href="${BASE}/privacy" style="color:#b0a090;">Privacy Policy</a> ·
      <a href="mailto:hello@incredibleitinerary.com?subject=Unsubscribe&body=Please unsubscribe ${email}" style="color:#b0a090;">Unsubscribe</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  };
}

// ── Admin notification ───────────────────────────────────────────────────────
function buildAdminNotify(email: string, firstName: string | undefined, source: string | undefined) {
  return {
    from: FROM,
    to: [ADMIN_EMAIL],
    subject: `📧 New Subscriber${source ? ` · ${source}` : ""} — ${email}`,
    html: `<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:20px;background:#f8f2e8;border-radius:10px;">
      <p style="font-size:15px;font-weight:600;color:#161008;margin:0 0 12px;">New subscriber</p>
      <div style="background:#fff;border-radius:8px;padding:14px;font-size:13px;color:#161008;line-height:1.9;">
        ${firstName ? `<b>Name:</b> ${firstName}<br>` : ""}
        <b>Email:</b> ${email}<br>
        ${source ? `<b>Source:</b> ${source}<br>` : ""}
        <b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      </div>
    </div>`,
  };
}

// ── Mailchimp sync (optional) ─────────────────────────────────────────────────
async function syncMailchimp(email: string, firstName: string | undefined, source: string | undefined, slug: string | undefined) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  if (!API_KEY || !LIST_ID) return; // optional — skip silently

  const dc = API_KEY.split("-").pop();
  const crypto = await import("crypto");
  const hash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");

  try {
    await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${hash}`, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: { FNAME: firstName || "" },
        tags: [
          source === "pdf-download" ? "pdf-download" : "website-signup",
          slug ? `pdf-${slug}` : null,
        ].filter(Boolean),
      }),
    });
  } catch (err) {
    console.error("[subscribe] Mailchimp sync error:", err);
  }
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { email, firstName, source, slug } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Run all three in parallel — none block the response
    await Promise.all([
      sendViaResend(buildWelcomeEmail(email, firstName)),
      sendViaResend(buildAdminNotify(email, firstName, source)),
      syncMailchimp(email, firstName, source, slug),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe] Error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
