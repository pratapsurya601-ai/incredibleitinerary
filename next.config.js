/** @type {import('next').NextConfig} */
const nextConfig = {
  // Include private-pdfs in the Vercel serverless function bundle
  // so /api/serve-pdf can read them with fs.readFileSync
  experimental: {
    outputFileTracingIncludes: {
      "/api/serve-pdf": ["./private-pdfs/**/*"],
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "incredibleitinerary.com",
      },
    ],
    // Serve WebP/AVIF, reduce default quality to cut image transfer sizes
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 130, 256, 384],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "incredibleitinerary.com" }],
        destination: "https://www.incredibleitinerary.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Aggressive caching for Next.js static assets
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache optimised images for 7 days
      {
        source: "/_next/image(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
