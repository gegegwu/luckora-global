import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = {
  width: 64,
  height: 64,
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #080B2A, #1B1038)",
          borderRadius: "50%",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #F4C96B",
            borderRadius: "50%",
            display: "flex",
            height: 38,
            position: "relative",
            width: 38,
          }}
        >
          <div
            style={{
              background: "#F6F2FF",
              borderRadius: "50%",
              height: 10,
              left: 22,
              position: "absolute",
              top: 4,
              width: 10,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
