import { ImageResponse } from "next/og";

export const alt = "Luckora AI self discovery tests";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 78% 30%, rgba(244, 201, 107, 0.28), transparent 28%), radial-gradient(circle at 16% 82%, rgba(125, 232, 255, 0.26), transparent 30%), linear-gradient(135deg, #080B2A, #1B1038 58%, #090E24)",
          color: "#F6F2FF",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              color: "#B8F4FF",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            LUCKORA
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 900,
              letterSpacing: "-0.06em",
              lineHeight: 0.96,
              maxWidth: 720,
            }}
          >
            AI Self Discovery Tests
          </div>
          <div
            style={{
              color: "rgba(246,242,255,0.74)",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 720,
            }}
          >
            Discover your personality, strengths, career direction and hidden
            potential.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            border: "2px solid rgba(244,201,107,0.45)",
            borderRadius: "50%",
            boxShadow:
              "0 0 80px rgba(125,232,255,0.22), inset 0 0 80px rgba(244,201,107,0.12)",
            display: "flex",
            height: 270,
            justifyContent: "center",
            width: 270,
          }}
        >
          <div
            style={{
              background:
                "radial-gradient(circle, #fff 0 10%, #F4C96B 12% 28%, rgba(125,232,255,0.22) 30%, rgba(143,108,255,0.12) 64%, transparent 66%)",
              borderRadius: "50%",
              height: 156,
              width: 156,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
