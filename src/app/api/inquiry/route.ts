import { NextRequest, NextResponse } from "next/server";

const YOUR_EMAIL = "hello@incredibleitinerary.com";
const RESEND_KEY = process.env.RESEND_API_KEY || "";
const BASE       = "https://www.incredibleitinerary.com";

// ── security helpers ────────────────────────────────────────────────────────
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limiter: max 5 submissions per IP per hour
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

const send = (payload: object) =>
  fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

function adminInquiry(data: Record<string, string>) {
  const { firstName, lastName, email, whatsapp, destination, duration, month, budget, message } = data;
  const rows = [
    ["👤 Name",        `${firstName} ${lastName || ""}`],
    ["📧 Email",       email],
    ["📱 WhatsApp",    whatsapp || "—"],
    ["🗺️ Destination", destination || "—"],
    ["🗓️ Duration",    duration || "—"],
    ["📅 Month",       month || "—"],
    ["💰 Budget",      budget || "—"],
  ];
  return {
    from: "IncredibleItinerary <hello@incredibleitinerary.com>",
    to: [YOUR_EMAIL],
    reply_to: email,
    subject: `🧭 New Trip Inquiry — ${firstName} ${lastName || ""} → ${destination || "India"}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#f8f2e8;border-radius:12px;">
        <div style="background:#161008;border-radius:8px;padding:16px 20px;margin-bottom:20px;">
          <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A96E;font-weight:600;">New Trip Inquiry</p>
          <p style="margin:4px 0 0;font-size:12px;color:#ffffff60;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${rows.map(([k, v]) => `
          <tr>
            <td style="padding:8px 12px;background:#fff;font-size:12px;color:#8a7a6a;width:120px;border-bottom:4px solid #f8f2e8;">${k}</td>
            <td style="padding:8px 12px;background:#fff;font-size:13px;color:#161008;font-weight:500;border-bottom:4px solid #f8f2e8;">${v}</td>
          </tr>`).join("")}
        </table>
        ${message ? `
        <div style="margin-top:16px;padding:14px;background:#fff;border-radius:8px;border-left:3px solid #C9A96E;">
          <p style="font-size:11px;color:#8a7a6a;margin:0 0 6px;text-transform:uppercase;letter-spacing:1px;">Message</p>
          <p style="font-size:13px;color:#161008;margin:0;line-height:1.6;">${message}</p>
        </div>` : ""}
        <div style="margin-top:20px;background:#1E6B5E;border-radius:8px;padding:14px;text-align:center;">
          <a href="mailto:${email}" style="color:#fff;font-size:13px;font-weight:700;text-decoration:none;">
            Reply to ${firstName} →
          </a>
        </div>
      </div>`,
  };
}

function confirmationEmail(data: Record<string, string>) {
  const { firstName, email, destination, budget, month } = data;
  const name = firstName || "there";

  const destBlogs: Record<string, { href: string; emoji: string }> = {
    "Goa":              { href: `${BASE}/blog/goa-3-days`,             emoji: "🏖️" },
    "Rajasthan":        { href: `${BASE}/blog/rajasthan-7-days`,       emoji: "🏰" },
    "Kerala":           { href: `${BASE}/blog/kerala-5-days`,           emoji: "🌿" },
    "Kashmir":          { href: `${BASE}/blog/kashmir-6-days`,          emoji: "🏔️" },
    "Golden Triangle":  { href: `${BASE}/blog/golden-triangle-7-days`,  emoji: "🕌" },
    "Leh Ladakh":       { href: `${BASE}/blog/leh-ladakh-7-days`,       emoji: "🏔️" },
    "Manali":           { href: `${BASE}/blog/manali-5-days`,           emoji: "🏔️" },
    "Andaman":          { href: `${BASE}/blog/andaman-5-days`,          emoji: "🤿" },
    "Varanasi":         { href: `${BASE}/blog/varanasi-3-days`,         emoji: "🕯️" },
    "Coorg":            { href: `${BASE}/blog/coorg-3-days`,            emoji: "☕" },
  };

  const matched = destination ? Object.entries(destBlogs).find(([k]) => destination.toLowerCase().includes(k.toLowerCase())) : null;
  const blogLink = matched
    ? `<div style="margin-bottom:24px;">
        <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a7a6a;margin:0 0 10px;font-weight:600;">While you wait — your destination guide</p>
        <a href="${matched[1].href}" style="display:block;background:#fff;border:2px solid #C9A96E;border-radius:10px;padding:14px 18px;text-decoration:none;">
          <span style="font-size:20px;">${matched[1].emoji}</span>
          <span style="font-size:13px;font-weight:600;color:#161008;margin-left:10px;">${destination} Free Guide →</span>
        </a>
      </div>`
    : "";

  return {
    from: "IncredibleItinerary <hello@incredibleitinerary.com>",
    to: [email],
    reply_to: YOUR_EMAIL,
    subject: `Your ${destination || "India"} itinerary request received ✅`,
    html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ede8df;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#ede8df;padding:32px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:540px;" cellpadding="0" cellspacing="0">

  <!-- HEADER -->
  <tr><td style="background:#161008;border-radius:14px 14px 0 0;padding:24px 32px;text-align:center;">
    <p style="margin:0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#C9A96E;font-weight:600;">Incredible<span style="color:#fff;">Itinerary</span></p>
    <p style="margin:6px 0 0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#ffffff55;">Curated Journeys Across India</p>
  </td></tr>

  <!-- SUCCESS BAND -->
  <tr><td style="background:#1E6B5E;padding:18px 32px;text-align:center;">
    <p style="margin:0;font-size:20px;">✅</p>
    <p style="margin:6px 0 0;font-size:14px;font-weight:700;color:#fff;">Your inquiry is received!</p>
  </td></tr>

  <!-- BODY -->
  <tr><td style="background:#fdf8f2;padding:32px;">

    <p style="margin:0 0 6px;font-size:20px;font-weight:300;color:#161008;font-family:Georgia,serif;">Hi ${name},</p>
    <p style="margin:0 0 20px;font-size:14px;color:#5a4a3a;line-height:1.7;">
      We've received your trip request and will send your personalised itinerary within <strong style="color:#161008;">24 hours</strong>. Keep an eye on your inbox.
    </p>

    <!-- Summary card -->
    <div style="background:#fff;border-radius:10px;border:1.5px solid #e8e0d4;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0 0 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a7a6a;font-weight:600;">Your request summary</p>
      ${destination ? `<p style="margin:0 0 6px;font-size:13px;color:#161008;">🗺️ <strong>Destination:</strong> ${destination}</p>` : ""}
      ${budget      ? `<p style="margin:0 0 6px;font-size:13px;color:#161008;">💰 <strong>Budget:</strong> ${budget}</p>` : ""}
      ${month       ? `<p style="margin:0;font-size:13px;color:#161008;">📅 <strong>Travel Month:</strong> ${month}</p>` : ""}
    </div>

    <!-- What happens next -->
    <div style="background:#fff;border-radius:10px;border:1.5px solid #e8e0d4;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0 0 12px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a7a6a;font-weight:600;">What happens next</p>
      ${[
        ["1", "We review your request and start building your plan", "#C9A96E"],
        ["2", "You receive a day-by-day personalised itinerary by email", "#1E6B5E"],
        ["3", "Ask questions, adjust anything — all free, no obligation", "#161008"],
      ].map(([n, text, color]) => `
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
          <div style="background:${color};color:#fff;width:20px;height:20px;border-radius:50%;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;text-align:center;line-height:20px;">${n}</div>
          <p style="margin:0;font-size:13px;color:#5a4a3a;line-height:1.5;">${text}</p>
        </div>`).join("")}
    </div>

    ${blogLink}

    <!-- Quiz CTA -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr><td style="background:#161008;border-radius:10px;padding:16px;text-align:center;">
        <p style="margin:0 0 8px;font-size:12px;color:#ffffff80;">Not sure which plan is right for you?</p>
        <a href="${BASE}/quiz" style="display:inline-block;background:#C9A96E;color:#161008;text-decoration:none;font-size:12px;font-weight:700;padding:10px 24px;border-radius:6px;">
          Take the Destination Quiz →
        </a>
      </td></tr>
    </table>

    <p style="margin:0 0 4px;font-size:13px;color:#5a4a3a;">Any questions before then? Reply to this email — we respond fast.</p>
    <p style="margin:16px 0 0;font-size:13px;font-weight:600;color:#161008;">The IncredibleItinerary Team</p>

  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#f0ebe3;border-radius:0 0 14px 14px;padding:18px 32px;text-align:center;border-top:1px solid #e0d8cc;">
    <p style="margin:0 0 6px;">
      <a href="${BASE}" style="font-size:11px;color:#C9A96E;text-decoration:none;font-weight:600;">IncredibleItinerary.com</a>
      <span style="color:#c0b090;font-size:11px;"> · </span>
      <a href="mailto:hello@incredibleitinerary.com" style="font-size:11px;color:#8a7a6a;text-decoration:none;">hello@incredibleitinerary.com</a>
    </p>
    <p style="margin:0;font-size:10px;color:#b0a090;line-height:1.6;">
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
    // Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);
    if (recent.length >= RATE_LIMIT_MAX) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
    recent.push(now);
    rateLimitMap.set(ip, recent);

    const raw = await req.json();

    // Sanitize all string fields
    const body: Record<string, string> = {};
    for (const [key, value] of Object.entries(raw)) {
      body[key] = typeof value === "string" ? sanitize(value) : String(value ?? "");
    }

    const { firstName, email } = body;

    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (RESEND_KEY) {
      await send(adminInquiry(body));
      await send(confirmationEmail(body));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Inquiry error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
