import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, instagram, destination, photoCount, photoLinks, story } = body;

    if (!name || !email || !destination || !photoLinks) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Notify site owner
    await sendEmail({
      to: "hello@incredibleitinerary.com",
      subject: `📸 New Photo Submission: ${destination} by ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1209;">
          <h2 style="margin: 0 0 20px; font-weight: normal; font-size: 22px;">
            New Photo Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 13px; color: #6b5c3e; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 13px; color: #6b5c3e;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 14px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${instagram ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 13px; color: #6b5c3e;">Instagram</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 14px;">${instagram}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 13px; color: #6b5c3e;">Destination</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 14px; font-weight: 600;">${destination}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 13px; color: #6b5c3e;">Photo Count</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e8dfc8; font-size: 14px;">${photoCount}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-size: 13px; color: #6b5c3e; margin-bottom: 8px;">Photo Links</p>
            <div style="background: #f8f2e8; border-radius: 8px; padding: 12px; font-size: 13px; word-break: break-all;">
              ${photoLinks.replace(/\n/g, "<br>")}
            </div>
          </div>

          ${story ? `
          <div style="margin-top: 20px;">
            <p style="font-size: 13px; color: #6b5c3e; margin-bottom: 8px;">Their Story</p>
            <div style="background: #f8f2e8; border-radius: 8px; padding: 12px; font-size: 13px; line-height: 1.6;">
              ${story.replace(/\n/g, "<br>")}
            </div>
          </div>
          ` : ""}

          <div style="margin-top: 28px; padding: 16px; background: #faf6ee; border-radius: 8px; border: 1px solid #e8dfc8;">
            <p style="font-size: 12px; color: #6b5c3e; margin: 0 0 8px; font-weight: 600;">Next steps:</p>
            <ol style="font-size: 12px; color: #6b5c3e; margin: 0; padding-left: 16px; line-height: 1.8;">
              <li>Open the photo link and download the best shot</li>
              <li>Save to <code>/public/images/contributors/</code> or upload to Cloudinary</li>
              <li>Add an entry to <code>src/data/contributor-photos.ts</code> with <code>approved: true</code></li>
              <li>Reply to ${email} to confirm they're featured</li>
            </ol>
          </div>

          <p style="font-size: 11px; color: #a0916e; margin-top: 20px;">
            Submitted via IncredibleItinerary.com/contribute
          </p>
        </div>
      `,
    });

    // Send confirmation email to contributor
    await sendEmail({
      to: email,
      replyTo: "hello@incredibleitinerary.com",
      subject: `📸 We received your ${destination} photos, ${name}!`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 540px; margin: 0 auto; padding: 24px; color: #1a1209;">
          <p style="font-size: 22px; font-weight: normal; margin: 0 0 16px;">
            Thanks for sharing, ${name}! 🙏
          </p>
          <p style="font-size: 14px; color: #6b5c3e; line-height: 1.7; margin-bottom: 16px;">
            We've received your ${photoCount} photo${Number(photoCount) > 1 ? "s" : ""} of
            <strong style="color: #1a1209;">${destination}</strong>.
            We'll review them and email you within 48 hours if they're featured.
          </p>
          <p style="font-size: 14px; color: #6b5c3e; line-height: 1.7; margin-bottom: 24px;">
            While you wait, check out our free ${destination} travel guide:
          </p>
          <a href="https://www.incredibleitinerary.com/blog/${destination.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}"
             style="display: inline-block; background: #c9a84c; color: #1a1209; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 13px; font-weight: 600;">
            View ${destination} Guide →
          </a>
          <p style="font-size: 12px; color: #a0916e; margin-top: 28px; line-height: 1.6;">
            IncredibleItinerary.com — Free travel guides for 302+ destinations.<br>
            Questions? Just reply to this email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contribute] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
