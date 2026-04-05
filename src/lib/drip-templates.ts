/**
 * Email drip sequence — 5 emails sent after a user downloads a free PDF.
 *
 * Sequence:
 *   Step 0 — Immediate  : Welcome + guide link
 *   Step 1 — Day 2      : "How is your planning going?" + tip
 *   Step 2 — Day 5      : Social proof + related guide
 *   Step 3 — Day 8      : Soft sell — ₹499 All Access bundle
 *   Step 4 — Day 15     : Hard sell — bundle deal ending soon
 */

export interface DripStep {
  step: number;
  delayDays: number;  // Days after enrolment to send
  subject: string;
  html: (ctx: DripContext) => string;
}

export interface DripContext {
  email: string;
  slug: string;           // The PDF slug they downloaded
  destination: string;   // Human-readable destination name
  pdfUrl: string;         // Direct link to access PDF
  allAccessUrl: string;
  guidesUrl: string;
}

/** Map slug → human-readable destination name */
const SLUG_NAMES: Record<string, string> = {
  "rajasthan-7-days":   "Rajasthan",
  "kerala-5-days":      "Kerala",
  "goa-3-days":         "Goa",
  "india-budget-guide": "India",
  "leh-ladakh-7-days":  "Leh Ladakh",
  "bangkok-4-days":     "Bangkok",
  "kashmir-6-days":     "Kashmir",
  "manali-5-days":      "Manali",
  "bali-5-days":        "Bali",
  "dubai-4-days":       "Dubai",
  // Phase 2
  "andaman-5-days":     "Andaman",
  "varanasi-3-days":    "Varanasi",
  "singapore-4-days":   "Singapore",
  "sri-lanka-7-days":   "Sri Lanka",
  "japan-10-days":      "Japan",
  // Phase 3
  "vietnam-10-days":    "Vietnam",
  "thailand-10-days":   "Thailand",
  "bhutan-5-days":      "Bhutan",
  "portugal-7-days":    "Portugal",
  "greece-10-days":     "Greece",
};

export function getDestinationName(slug: string): string {
  return SLUG_NAMES[slug] ?? slug;
}

// ── Shared email wrapper ────────────────────────────────────────────────────
function wrap(content: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>IncredibleItinerary</title>
</head>
<body style="margin:0;padding:0;background:#f9f5ee;font-family:'Georgia',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f5ee;padding:32px 16px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;">

      <!-- Header -->
      <tr><td style="background:#0d0a04;padding:28px 40px;text-align:center;">
        <p style="margin:0;font-family:'Georgia',serif;font-size:20px;font-weight:300;color:#c9a96e;letter-spacing:2px;">
          INCREDIBLE ITINERARY
        </p>
        <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:1.5px;font-family:Arial,sans-serif;text-transform:uppercase;">
          Free Travel Guides
        </p>
      </td></tr>

      <!-- Body -->
      <tr><td style="padding:40px 40px 32px;">
        ${content}
      </td></tr>

      <!-- Footer -->
      <tr><td style="background:#f9f5ee;padding:24px 40px;text-align:center;border-top:1px solid #e8dcc8;">
        <p style="margin:0 0 8px;font-size:11px;color:#9a8878;font-family:Arial,sans-serif;">
          © 2026 IncredibleItinerary · Free travel guides since 2024
        </p>
        <p style="margin:0;font-size:11px;color:#9a8878;font-family:Arial,sans-serif;">
          You're receiving this because you downloaded a free guide.
          <a href="https://www.incredibleitinerary.com/unsubscribe" style="color:#9a8878;">Unsubscribe</a>
        </p>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

// ── Step helpers ────────────────────────────────────────────────────────────
const btnGold = (url: string, text: string) =>
  `<a href="${url}" style="display:inline-block;background:#c9a96e;color:#0d0a04;font-family:Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;padding:14px 32px;border-radius:4px;text-decoration:none;margin-top:8px;">${text}</a>`;

const h2 = (text: string) =>
  `<h2 style="margin:0 0 16px;font-family:'Georgia',serif;font-size:24px;font-weight:300;color:#0d0a04;line-height:1.3;">${text}</h2>`;

const p = (text: string) =>
  `<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#4a3728;line-height:1.7;">${text}</p>`;

const divider =
  `<hr style="border:none;border-top:1px solid #e8dcc8;margin:28px 0;" />`;

// ── The 5-step drip sequence ────────────────────────────────────────────────
export const DRIP_STEPS: DripStep[] = [
  // ─── Step 0: Welcome (immediate) ─────────────────────────────────────────
  {
    step: 0,
    delayDays: 0,
    subject: "Your {{destination}} guide is ready 🗺️",
    html: (ctx) => wrap(`
      ${h2(`Your ${ctx.destination} guide is waiting.`)}
      ${p(`Thanks for downloading — here's your link to access it anytime:`)}
      <div style="text-align:center;margin:28px 0;">
        ${btnGold(ctx.pdfUrl, `Open ${ctx.destination} Guide →`)}
      </div>
      ${p(`The guide covers everything: day-by-day itinerary, real prices, local food spots, transport options, and the stuff guidebooks leave out.`)}
      ${divider}
      ${p(`While you're planning — you can download <strong>1 more guide free</strong>. Browse all 10:`)}
      <div style="text-align:center;margin:20px 0;">
        ${btnGold(ctx.guidesUrl, "Browse All PDF Guides")}
      </div>
      ${p(`Happy planning,<br/><em>— The IncredibleItinerary Team</em>`)}
    `),
  },

  // ─── Step 1: Day 2 — Planning tip ────────────────────────────────────────
  {
    step: 1,
    delayDays: 2,
    subject: "One mistake most travellers make in {{destination}} 🚨",
    html: (ctx) => wrap(`
      ${h2(`Planning your ${ctx.destination} trip?`)}
      ${p(`Quick tip from our editorial team:`)}
      <div style="background:#f9f5ee;border-left:3px solid #c9a96e;padding:16px 20px;margin:20px 0;border-radius:0 8px 8px 0;">
        <p style="margin:0;font-family:'Georgia',serif;font-size:16px;font-style:italic;color:#0d0a04;line-height:1.6;">
          "Book accommodation 2–3 weeks in advance for peak season (Oct–Mar for North India, Dec–Jan for South India). Last-minute bookings in popular spots can cost 2× more."
        </p>
      </div>
      ${p(`Your guide has a full month-by-month breakdown of <strong>when to book what</strong> — and where you can safely skip ahead.`)}
      <div style="text-align:center;margin:24px 0;">
        ${btnGold(ctx.pdfUrl, `Re-open ${ctx.destination} Guide`)}
      </div>
      ${divider}
      ${p(`Any questions about your trip? Just reply to this email — we read every message. 📩`)}
    `),
  },

  // ─── Step 2: Day 5 — Social proof + related guide ─────────────────────────
  {
    step: 2,
    delayDays: 5,
    subject: "What 12,000+ travellers say about {{destination}} ⭐",
    html: (ctx) => wrap(`
      ${h2(`Travellers who visited ${ctx.destination} say...`)}
      <table cellpadding="0" cellspacing="0" style="width:100%;margin:20px 0;">
        ${[
          { quote: `"The itinerary was spot-on. We didn't waste a single day."`, name: "Priya, Mumbai" },
          { quote: `"Real prices — no tourist inflation. Saved us ₹8,000 on accommodation alone."`, name: "Rahul, Bangalore" },
          { quote: `"The local food spots section was the best part of the trip."`, name: "Ananya, Delhi" },
        ].map(r => `
        <tr><td style="padding:12px;background:#f9f5ee;border-radius:8px;margin-bottom:12px;display:block;">
          <p style="margin:0 0 6px;font-family:'Georgia',serif;font-style:italic;font-size:14px;color:#0d0a04;">${r.quote}</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#9a8878;">— ${r.name}</p>
        </td></tr>
        <tr><td style="padding:4px 0;"></td></tr>
        `).join("")}
      </table>
      ${divider}
      ${p(`You've got <strong>1 more free guide</strong> waiting. Popular picks for ${ctx.destination} travellers:`)}
      <div style="text-align:center;margin:20px 0;">
        ${btnGold(ctx.guidesUrl, "Claim Your Second Free Guide")}
      </div>
    `),
  },

  // ─── Step 3: Day 8 — Soft sell ₹499 ──────────────────────────────────────
  {
    step: 3,
    delayDays: 8,
    subject: "Get all 10 guides for less than a coffee ☕",
    html: (ctx) => wrap(`
      ${h2(`All 10 PDF guides. One price.`)}
      ${p(`You've already seen what our guides are like. Here's the deal:`)}
      <div style="background:#0d0a04;border-radius:12px;padding:28px;text-align:center;margin:24px 0;">
        <p style="margin:0 0 8px;font-family:'Georgia',serif;font-size:28px;font-weight:300;color:#c9a96e;">₹499</p>
        <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;">All 10 PDF Guides · One-time Payment</p>
        <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.7);line-height:1.6;">
          Rajasthan · Kerala · Goa · India Budget Guide<br/>
          Leh Ladakh · Bangkok · Kashmir · Manali · Bali · Dubai
        </p>
        <a href="https://rzp.io/rzp/qhP2iBq" style="display:inline-block;background:#c9a96e;color:#0d0a04;font-family:Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;padding:14px 32px;border-radius:4px;text-decoration:none;">
          Get All 10 Guides for ₹499 →
        </a>
      </div>
      ${p(`That's ₹50 per destination. Less than a coffee. And these guides will save you far more than that on your actual trip.`)}
      ${p(`Just reply if you have any questions before buying.`)}
    `),
  },

  // ─── Step 4: Day 15 — Hard sell / urgency ────────────────────────────────
  {
    step: 4,
    delayDays: 15,
    subject: "Last reminder — ₹499 bundle (no tricks, just reminding you)",
    html: (ctx) => wrap(`
      ${h2(`Still planning that trip to ${ctx.destination}?`)}
      ${p(`Just a quick nudge — the All Access bundle at ₹499 is still available.`)}
      ${p(`If you're planning multiple trips, or just want offline guides for whenever you travel next, this is the easiest way to get everything in one go:`)}
      <div style="text-align:center;margin:28px 0;">
        <a href="https://rzp.io/rzp/qhP2iBq" style="display:inline-block;background:#c9a96e;color:#0d0a04;font-family:Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;padding:14px 32px;border-radius:4px;text-decoration:none;">
          Get All 10 Guides — ₹499 →
        </a>
      </div>
      ${divider}
      ${p(`If you'd rather stick with the free guides, that's completely fine — they're not going anywhere. Browse what else we have:`)}
      <div style="text-align:center;margin:20px 0;">
        ${btnGold(ctx.guidesUrl, "Browse Free Guides")}
      </div>
      ${p(`Thanks for reading our guides — hope the trip is everything you imagined. 🌏<br/><em>— IncredibleItinerary</em>`)}
    `),
  },
];
