import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const destination = searchParams.get("destination") || "Travel Guide";
  const days = searchParams.get("days") || "";
  const tag = searchParams.get("tag") || "FREE GUIDE";

  const subtitle = days ? `${days} Days · Real Budgets · Zero Tourist Traps` : "Real Budgets · Real Routes · Zero Tourist Traps";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          background: "linear-gradient(145deg, #161008 0%, #2a1f10 50%, #161008 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "18px", color: "#C9A96E", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" as const }}>
            Incredible
          </span>
          <span style={{ fontSize: "18px", color: "#ffffff", fontWeight: 300, letterSpacing: "3px", textTransform: "uppercase" as const }}>
            Itinerary
          </span>
        </div>

        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#C9A96E",
              letterSpacing: "4px",
              textTransform: "uppercase" as const,
              fontWeight: 600,
            }}
          >
            {tag}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: destination.length > 20 ? "64px" : "76px",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
          }}
        >
          {destination}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "22px",
            color: "#C9A96E",
            fontWeight: 300,
            margin: 0,
            opacity: 0.85,
          }}
        >
          {subtitle}
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background: "linear-gradient(90deg, #C9A96E 0%, #8B6835 100%)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
