import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old production URLs → new structure (301 for SEO preservation)
      { source: "/urunler/crm", destination: "/crm", permanent: true },
      { source: "/urunler/web-satis-platformu", destination: "/web-satis", permanent: true },
      { source: "/urunler/insurchat", destination: "/insurchat", permanent: true },
      // Keep any old locales or legacy slugs pointing at canonical anchors
      { source: "/urunler", destination: "/#urunler", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
