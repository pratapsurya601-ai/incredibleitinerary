import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const SECRET = process.env.DOWNLOAD_SECRET || "dev-secret-please-change";

// ── Token validation (current + previous 15-min window = 30 min validity) ────
function validateToken(slug: string, token: string): boolean {
  const now = Math.floor(Date.now() / 1000 / 900);
  for (const w of [now, now - 1]) {
    const expected = crypto
      .createHmac("sha256", SECRET)
      .update(`${slug}:${w}`)
      .digest("hex")
      .slice(0, 40);
    if (crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(token))) {
      return true;
    }
  }
  return false;
}

// ── GET /api/serve-pdf?slug=xxx&token=xxx ─────────────────────────────────────
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") ?? "";
  const token = searchParams.get("token") ?? "";

  // Sanitize slug — only allow lowercase alphanumeric and hyphens
  if (!slug || !/^[a-z0-9-]{1,60}$/.test(slug)) {
    return new NextResponse("Invalid request", { status: 400 });
  }

  // Token length check (40 hex chars)
  if (!token || token.length !== 40) {
    return new NextResponse("Invalid or missing token", { status: 403 });
  }

  if (!validateToken(slug, token)) {
    return new NextResponse(
      `<!DOCTYPE html><html><body style="font-family:sans-serif;text-align:center;padding:4rem">
        <h2>Link Expired</h2>
        <p>Your download link has expired (valid for 30 minutes).</p>
        <p>Please go back and click the download button again.</p>
        <a href="javascript:history.back()" style="color:#b5860d">← Go Back</a>
      </body></html>`,
      {
        status: 403,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }

  const filePath = path.join(process.cwd(), "private-pdfs", `${slug}.html`);

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Guide not found", { status: 404 });
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // Prevent caching and indexing of the private guide
      "Cache-Control": "private, no-store, no-cache",
      "X-Robots-Tag": "noindex, nofollow",
      "X-Frame-Options": "DENY",
    },
  });
}
