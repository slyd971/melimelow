import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MélyMelOw — Artiste contemporaine résine & acrylique — Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default async function OgImage() {
  const bioPhotoUrl = new URL("/photo-bio.jpeg", "https://www.melymelow.art").toString();

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
        {/* halo cyan haut gauche */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(24,200,210,0.22) 0%, transparent 70%)",
          }}
        />
        {/* halo rose bas droite */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: 200,
            width: 500,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(240,74,166,0.18) 0%, transparent 70%)",
          }}
        />

        {/* photo bio */}
        <div
          style={{
            width: 420,
            height: 630,
            flexShrink: 0,
            position: "relative",
            display: "flex",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bioPhotoUrl}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          {/* fondu vers la droite */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, transparent 55%, #080607 100%)",
            }}
          />
        </div>

        {/* contenu texte */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px 0 48px",
          }}
        >
          {/* kicker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 34,
                height: 1,
                background: "linear-gradient(90deg, #18c8d2, #f04aa6)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#bfb6bc",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Presskit artiste
            </span>
          </div>

          {/* nom */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#ffffff",
              lineHeight: 0.88,
              fontFamily: "Impact, Arial Narrow, Arial, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            Mély
            <br />
            MelOw
          </div>

          {/* ligne accent */}
          <div
            style={{
              width: 56,
              height: 2,
              background: "#f04aa6",
              margin: "28px 0",
            }}
          />

          {/* sous-titre */}
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#cfc3bb",
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.7,
            }}
          >
            Résine époxy & Acrylique
            <br />
            <span style={{ color: "#18c8d2" }}>Paris</span>
          </div>

          {/* url */}
          <div
            style={{
              marginTop: 40,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a6e75",
              fontFamily: "Arial, sans-serif",
            }}
          >
            melymelow.art
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
