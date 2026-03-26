import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  AbsoluteFill,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Poppins";
import React from "react";

const { fontFamily: cleanFont } = loadFont("normal", {
  weights: ["700", "900"],
  subsets: ["latin"],
});

// ===================== SHORTS WRAPPER =====================
// Wraps a landscape composition into a portrait (1080x1920) format
// with branded top/bottom bars and a "Subscribe" CTA

export const ShortsWrapper: React.FC<{
  children: React.ReactNode;
  title: string;
  topColor: string;
  bottomColor: string;
  titleColor?: string;
  accentEmoji?: string;
}> = ({ children, title, topColor, bottomColor, titleColor = "#fff", accentEmoji = "🎵" }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Subscribe CTA pulse
  const pulse = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [0.95, 1.05],
  );

  // Title bounce
  const titleBounce = Math.sin(frame * 0.05) * 3;

  // Fade out at end
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 30, durationInFrames],
    [1, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000",
        opacity: fadeOut < 1 ? fadeOut : 1,
      }}
    >
      {/* Top branded bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 280,
          background: `linear-gradient(180deg, ${topColor} 0%, ${topColor}CC 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontSize: 48,
            marginBottom: 8,
          }}
        >
          {accentEmoji}
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: titleColor,
            fontFamily: cleanFont,
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            textAlign: "center",
            transform: `translateY(${titleBounce}px)`,
            padding: "0 30px",
          }}
        >
          {title}
        </div>
      </div>

      {/* Video content area (landscape video scaled to fit) */}
      <div
        style={{
          position: "absolute",
          top: 280,
          left: 0,
          right: 0,
          bottom: 280,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* Scale 1920x1080 landscape into ~1080x608 area */}
        <div
          style={{
            width: 1920,
            height: 1080,
            transform: "scale(0.5625)",
            transformOrigin: "center center",
            position: "relative",
          }}
        >
          {children}
        </div>
      </div>

      {/* Bottom branded bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 280,
          background: `linear-gradient(0deg, ${bottomColor} 0%, ${bottomColor}CC 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        {/* Subscribe button */}
        <div
          style={{
            transform: `scale(${pulse})`,
            backgroundColor: "#FF0000",
            borderRadius: 50,
            padding: "18px 60px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 4px 20px rgba(255,0,0,0.4)",
            marginBottom: 12,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: "#fff",
              fontFamily: cleanFont,
              letterSpacing: 2,
            }}
          >
            SUBSCRIBE
          </div>
          <div style={{ fontSize: 32 }}>{"🔔"}</div>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.8)",
            fontFamily: cleanFont,
            fontWeight: 700,
          }}
        >
          Like & Share for more rhymes!
        </div>
      </div>
    </AbsoluteFill>
  );
};
