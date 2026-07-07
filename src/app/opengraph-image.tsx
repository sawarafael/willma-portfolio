import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFFFFF",
          border: "1px solid #E2E8F0",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#007BFF",
            fontWeight: 500,
            marginBottom: 16,
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#0F172A",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6B7280",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          Organizando processos, fortalecendo resultados.
        </div>
      </div>
    ),
    { ...size },
  );
}
