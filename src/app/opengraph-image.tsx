import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "InsurUp — Sigortacılık CRM Sistemi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 30%, rgba(124,58,237,.55), transparent 60%), radial-gradient(circle at 80% 70%, rgba(20,184,166,.45), transparent 60%), #0A0F2C",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg,#6E8BFF,#9B6BF0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 14 L10 8 L14 12 L20 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 6 H20 V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em" }}>InsurUp</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              opacity: 0.6,
              fontFamily: "monospace",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Sigorta Acenteleri için Dijital Platform
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              maxWidth: 1040,
            }}
          >
            Sigortacılık CRM, Web Satış ve{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg,#7C9BFF,#B794F6 60%,#4FD1C5)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI Asistan.
            </span>
          </div>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 28,
              fontSize: 22,
              fontFamily: "monospace",
              opacity: 0.7,
            }}
          >
            <span>● 30+ sigorta şirketi</span>
            <span>● 1.200+ acente</span>
            <span>● insurup.com</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
