import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "InsurUp",
    short_name: "InsurUp",
    description: "Sigorta acenteleri için dijital operasyon platformu",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#0A0F2C",
    icons: [
      { src: "/InsurUp Icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
