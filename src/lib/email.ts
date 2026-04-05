/**
 * Email sending utility — uses Resend (free tier: 3000 emails/month)
 * Set RESEND_API_KEY in Vercel env vars to enable.
 * Get your free key at: https://resend.com
 */

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

const FROM = "IncredibleItinerary <hello@incredibleitinerary.com>";
const REPLY_TO = "hello@incredibleitinerary.com";

export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set — skipping email send");
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: payload.to,
        reply_to: payload.replyTo ?? REPLY_TO,
        subject: payload.subject,
        html: payload.html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[email] Resend error:", err);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[email] Send failed:", err);
    return false;
  }
}
