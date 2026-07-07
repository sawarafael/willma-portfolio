import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dictionary = getDictionary("pt");
export const alt = dictionary.site.title;

export default function OgImage() {
  const { site, hero } = dictionary;

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
          {site.role}
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
          {site.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6B7280",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          {hero.headline}
        </div>
      </div>
    ),
    { ...size },
  );
}
