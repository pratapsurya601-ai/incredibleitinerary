import { NextRequest, NextResponse } from "next/server";

const YOUR_EMAIL  = "hello@incredibleitinerary.com";
const RESEND_KEY  = process.env.RESEND_API_KEY || "";
const BASE        = "https://www.incredibleitinerary.com";

// ── security helpers ────────────────────────────────────────────────────────
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

// ── helpers ─────────────────────────────────────────────────────────────────
const send = (payload: object) =>
  fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

// ── email templates ──────────────────────────────────────────────────────────

function adminNotify(email: string, name: string | undefined, source: string | undefined) {
  return {
    from: "IncredibleItinerary <hello@incredibleitinerary.com>",
    to: [YOUR_EMAIL],
    subject: `📧 New Subscriber${source ? ` · ${source}` : ""} — ${email}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:20px;background:#f8f2e8;border-radius:10px;">
        <p style="font-size:16px;font-weight:600;color:#161008;margin:0 0 12px;">New subscriber</p>
        <div style="background:#fff;border-radius:8px;padding:14px;font-size:13px;color:#161008;line-height:1.8;">
          ${name ? `<b>Name:</b> ${name}<br>` : ""}
          <b>Email:</b> ${email}<br>
          ${source ? `<b>Source:</b> ${source}<br>` : ""}
          <b>Time:</b> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </div>
      </div>`,
  };
}

function welcomeEmail(email: string, name: string | undefined) {
  const firstName = name ? name.split(" ")[0] : "";
  const greeting  = firstName ? `Hi ${firstName}` : "Hello";

  const blogs = [
    { emoji: "🏔️", label: "Leh Ladakh 7 Days",       sub: "Pangong Lake · Nubra Valley",       href: `${BASE}/blog/leh-ladakh-7-days` },
    { emoji: "🏰", label: "Rajasthan 7 Days",          sub: "Jaipur · Jodhpur · Udaipur",         href: `${BASE}/blog/rajasthan-7-days` },
    { emoji: "🕌", label: "Golden Triangle 7 Days",    sub: "Delhi · Agra · Jaipur",               href: `${BASE}/blog/golden-triangle-7-days` },
    { emoji: "🏔️", label: "Kashmir 6 Days",            sub: "Dal Lake · Gulmarg · Pahalgam",       href: `${BASE}/blog/kashmir-6-days` },
    { emoji: "🌿", label: "Kerala 5 Days",              sub: "Backwaters · Munnar · Varkala",       href: `${BASE}/blog/kerala-5-days` },
    { emoji: "🏖️", label: "Andaman 5 Days",             sub: "Radhanagar · Scuba · Neil Island",   href: `${BASE}/blog/andaman-5-days` },
    { emoji: "🏖️", label: "Goa 3 Days",                sub: "Beaches · Old Goa · Nightlife",       href: `${BASE}/blog/goa-3-days` },
    { emoji: "🕯️", label: "Varanasi 3 Days",           sub: "Ghats · Ganga Aarti · Street Food",  href: `${BASE}/blog/varanasi-3-days` },
    { emoji: "🏔️", label: "Manali 5 Days",              sub: "Rohtang · Solang · Old Manali",      href: `${BASE}/blog/manali-5-days` },
    { emoji: "☕", label: "Coorg 3 Days",               sub: "Coffee Estates · Abbey Falls",        href: `${BASE}/blog/coorg-3-days` },
  ];

  return {
    from: "IncredibleItinerary <hello@incredibleitinerary.com>",
    to: [email],
    reply_to: YOUR_EMAIL,
    subject: "Your free India travel guides — all 19 destinations 🧭",
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>IncredibleItinerary</title></head>
<body style="margin:0;padding:0;background:#ede8df;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ede8df;padding:32px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;" cellpadding="0" cellspacing="0">

  <!-- HEADER -->
  <tr><td style="background:#161008;border-radius:14px 14px 0 0;padding:28px 32px;text-align:center;">
    <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A96E;font-weight:600;">Incredible<span style="color:#fff;">Itinerary</span></p>
    <p style="margin:6px 0 0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#ffffff55;">Curated Travel Guides Worldwide</p>
  </td></tr>

  <!-- HERO BAND -->
  <tr><td style="background:#C9A96E;padding:18px 32px;text-align:center;">
    <p style="margin:0;font-size:13px;font-weight:700;color:#161008;letter-spacing:.5px;">
      FREE · 10 DESTINATION GUIDES · REAL BUDGETS · ZERO TOURIST TRAPS
    </p>
  </td></tr>

  <!-- BODY -->
  <tr><td style="background:#fdf8f2;padding:32px;">

    <!-- Greeting -->
    <p style="margin:0 0 8px;font-size:22px;font-weight:300;color:#161008;font-family:Georgia,serif;">${greeting},</p>
    <p style="margin:0 0 20px;font-size:14px;color:#5a4a3a;line-height:1.7;">
      Welcome to IncredibleItinerary — free, handcrafted India itineraries that tell you exactly where you're being overcharged, and the better cheaper alternatives locals actually use.
    </p>

    <!-- Savings badge -->
    <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:14px 18px;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
      <span style="font-size:22px;">💰</span>
      <div>
        <p style="margin:0;font-size:13px;font-weight:700;color:#166534;">Our travellers save ₹3,000–₹5,000 per trip on average</p>
        <p style="margin:4px 0 0;font-size:11px;color:#166534;opacity:.8;">Real prices · Local tips · No tourist traps</p>
      </div>
    </div>

    <!-- Guides heading -->
    <p style="margin:0 0 14px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a7a6a;font-weight:600;">Your free guides — all 19 destinations</p>

    <!-- Blog links -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${blogs.map((b, i) => `
      <tr>
        <td style="padding:0 0 6px;">
          <a href="${b.href}" style="display:block;background:#fff;border:1.5px solid #e8e0d4;border-radius:10px;padding:12px 16px;text-decoration:none;${i === 0 ? "border-color:#C9A96E;" : ""}">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="28" style="font-size:18px;vertical-align:middle;">${b.emoji}</td>
                <td style="padding-left:10px;vertical-align:middle;">
                  <p style="margin:0;font-size:13px;font-weight:600;color:#161008;">${b.label}</p>
                  <p style="margin:2px 0 0;font-size:11px;color:#8a7a6a;">${b.sub}</p>
                </td>
                <td width="24" style="text-align:right;vertical-align:middle;font-size:16px;color:#C9A96E;">→</td>
              </tr>
            </table>
          </a>
        </td>
      </tr>`).join("")}
    </table>

    <!-- Quiz CTA -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr><td style="background:#161008;border-radius:10px;padding:18px;text-align:center;">
        <p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#C9A96E;">Not sure where to go?</p>
        <a href="${BASE}/quiz" style="display:inline-block;margin-top:8px;background:#C9A96E;color:#161008;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:.5px;padding:12px 28px;border-radius:6px;">
          Take the 60-Second Destination Quiz →
        </a>
      </td></tr>
    </table>

    <!-- Plan my trip CTA -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr><td style="border:1.5px solid #C9A96E;border-radius:10px;padding:16px;text-align:center;">
        <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#161008;">Want a plan built for YOUR trip?</p>
        <p style="margin:0 0 12px;font-size:12px;color:#8a7a6a;line-height:1.5;">Tell us your dates, group size and budget — we'll send a personalised day-by-day itinerary within 24 hours. Free.</p>
        <a href="${BASE}/#packages" style="display:inline-block;background:#1E6B5E;color:#fff;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.5px;padding:10px 24px;border-radius:6px;">
          Get My Free Custom Itinerary →
        </a>
      </td></tr>
    </table>

    <!-- Sign-off -->
    <p style="margin:0 0 4px;font-size:13px;color:#5a4a3a;line-height:1.7;">
      Happy travelling,
    </p>
    <p style="margin:0 0 20px;font-size:13px;font-weight:600;color:#161008;">
      The IncredibleItinerary Team
    </p>

  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#f0ebe3;border-radius:0 0 14px 14px;padding:20px 32px;text-align:center;border-top:1px solid #e0d8cc;">
    <p style="margin:0 0 8px;">
      <a href="${BASE}" style="font-size:11px;color:#C9A96E;text-decoration:none;font-weight:600;">IncredibleItinerary.com</a>
      <span style="color:#c0b090;font-size:11px;"> · </span>
      <a href="mailto:hello@incredibleitinerary.com" style="font-size:11px;color:#8a7a6a;text-decoration:none;">hello@incredibleitinerary.com</a>
    </p>
    <p style="margin:0;font-size:10px;color:#b0a090;line-height:1.6;">
      You received this because you signed up on IncredibleItinerary.com.<br>
      <a href="${BASE}/privacy" style="color:#b0a090;">Privacy Policy</a> ·
      <a href="mailto:hello@incredibleitinerary.com?subject=Unsubscribe" style="color:#b0a090;">Unsubscribe</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  };
}

// ── handler ──────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const raw = await req.json();
    const email  = typeof raw.email  === "string" ? sanitize(raw.email)  : "";
    const name   = typeof raw.name   === "string" ? sanitize(raw.name)   : undefined;
    const source = typeof raw.source === "string" ? sanitize(raw.source) : undefined;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (RESEND_KEY) {
      await send(adminNotify(email, name, source));
      await send(welcomeEmail(email, name));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
