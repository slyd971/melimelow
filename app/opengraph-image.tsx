import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MélyMelOw — Artiste contemporaine résine & acrylique — Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default async function OgImage() {
  const heroImageUrl = new URL("/og-image.jpeg", "https://presskit.melymelow.art").toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          background: "#080607",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImageUrl}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
