import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, source, slug } = await req.json();

    // Validate
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;

    if (!API_KEY || !LIST_ID) {
      console.error("Mailchimp env vars not set");
      // Still return success to user — don't break UX while env vars are being set
      return NextResponse.json({ success: true, message: "Subscribed (dev mode)" });
    }

    // Extract data center from API key (format: key-usX)
    const dc = API_KEY.split("-").pop();
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    // Use MD5 hash of lowercase email as subscriber hash for upsert (PUT)
    const crypto = await import("crypto");
    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    const upsertUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${subscriberHash}`;

    const response = await fetch(upsertUrl, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",  // immediately subscribed (no double opt-in)
        merge_fields: {
          FNAME: firstName || "",
        },
        tags: [
          source === "pdf-download" ? "pdf-download" : "website-popup",
          slug ? `pdf-${slug}` : null,
        ].filter(Boolean) as string[],
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Mailchimp error:", data);
      // If already subscribed, treat as success
      if (data.title === "Member Exists" || data.status === 400) {
        return NextResponse.json({ success: true });
      }
      return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 500 });
    }
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
