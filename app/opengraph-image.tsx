import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rajesh Khadka — Pay-on-Success Engineering Mentor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Emerald accent bar */}
        <div
          style={{
            width: "56px",
            height: "4px",
            background: "#10b981",
            marginBottom: "36px",
            display: "flex",
          }}
        />

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "#ffffff",
              lineHeight: "1.1",
            }}
          >
            100 rejections. No Ivy League.
          </span>
          <span
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "#10b981",
              lineHeight: "1.1",
            }}
          >
            Now at Synopsys.
          </span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "26px",
            color: "#9ca3af",
            marginBottom: "44px",
            display: "flex",
          }}
        >
          Pay-on-Success Engineering Mentorship
        </div>

        {/* CTA pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "#0d0d0d",
              background: "#10b981",
              padding: "14px 32px",
              borderRadius: "8px",
              fontWeight: "700",
              display: "flex",
            }}
          >
            First session free →
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#4b5563",
              display: "flex",
            }}
          >
            no credit card · pay only after results
          </div>
        </div>

        {/* Bottom right — domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{ fontSize: "18px", color: "#ffffff", fontWeight: "600", display: "flex" }}
          >
            Rajesh Khadka
          </div>
          <div style={{ fontSize: "13px", color: "#10b981", display: "flex" }}>
            mentorship.reflectivedev.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
