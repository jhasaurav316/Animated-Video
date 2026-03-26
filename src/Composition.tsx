import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  Img,
  staticFile,
  AbsoluteFill,
} from "remotion";
import { Audio } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const SAFFRON = "#F97316";
const SAFFRON_DARK = "#EA580C";
const SAFFRON_LIGHT = "#FFF7ED";
const GREEN = "#22C55E";
const DARK = "#1a1a2e";
const RED = "#EF4444";
const BLUE = "#3B82F6";
const PURPLE = "#8B5CF6";
const YELLOW = "#EAB308";

// ============ SCENE 1: THE HOOK (0s - 5s) ============
const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const line1Opacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line1Y = interpolate(frame, [15, 35], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const line2Opacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2Y = interpolate(frame, [55, 75], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const questionMark = interpolate(frame, [80, 100], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const flicker =
    frame > 10
      ? interpolate(
          Math.sin(frame * 0.8) + Math.sin(frame * 1.3),
          [-2, 2],
          [0.03, 0.08]
        )
      : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0a",
        fontFamily,
        opacity: bgOpacity,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 60%, rgba(249,115,22,${flicker}) 0%, transparent 70%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background:
            "linear-gradient(to top, rgba(249,115,22,0.05) 0%, transparent 100%)",
        }}
      />

      {/* Line 1 */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: line1Opacity,
          transform: `translateY(${line1Y}px)`,
        }}
      >
        <div
          style={{
            fontSize: 80,
            color: "#888",
            fontWeight: 400,
            letterSpacing: 4,
          }}
        >
          Aapke sheher mein...
        </div>
      </div>

      {/* Line 2 */}
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: line2Opacity,
          transform: `translateY(${line2Y}px)`,
        }}
      >
        <div
          style={{
            fontSize: 96,
            color: "#ccc",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          ...kitne potholes hain
          <span style={{ color: SAFFRON, opacity: questionMark }}>?</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 2: THE PROBLEM (5s - 15s) ============
const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const problems = [
    { text: "Tooti sadkein.", icon: "🚧", color: RED, start: 0 },
    { text: "Bujhi streetlights.", icon: "💡", color: YELLOW, start: 36 },
    {
      text: "Ubalte naaley, bikhra kachra.",
      icon: "🗑️",
      color: GREEN,
      start: 69,
    },
  ];

  const accuseStart = 126;
  const accuseOpacity = interpolate(
    frame,
    [accuseStart, accuseStart + 20],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const defeatStart = 186;
  const defeatOpacity = interpolate(
    frame,
    [defeatStart, defeatStart + 25],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const defeatScale = interpolate(
    frame,
    [defeatStart, defeatStart + 25],
    [1.1, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const vignetteIntensity = interpolate(frame, [0, 300], [0.3, 0.7], {
    extrapolateRight: "clamp",
  });

  const shakeX =
    frame > 60 && frame < 130
      ? Math.sin(frame * 2.5) * interpolate(frame, [60, 130], [0, 4], { extrapolateRight: "clamp" })
      : 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0a",
        fontFamily,
        transform: `translateX(${shakeX}px)`,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,${vignetteIntensity}) 100%)`,
        }}
      />

      {/* Problem lines */}
      {problems.map((p, i) => {
        const opacity = interpolate(
          frame,
          [p.start, p.start + 15],
          [0, 1],
          { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
        );
        const x = interpolate(frame, [p.start, p.start + 15], [-60, 0], {
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${18 + i * 14}%`,
              left: "5%",
              right: "5%",
              textAlign: "center",
              opacity,
              transform: `translateX(${x}px)`,
            }}
          >
            <span style={{ fontSize: 72, marginRight: 20 }}>{p.icon}</span>
            <span
              style={{ fontSize: 72, color: p.color, fontWeight: 700 }}
            >
              {p.text}
            </span>
          </div>
        );
      })}

      {/* "Sab dikhta hai. Sab jaante hain." */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: accuseOpacity,
        }}
      >
        <div style={{ fontSize: 68, color: "#fff", fontWeight: 600 }}>
          Sab dikhta hai.
        </div>
        <div style={{ fontSize: 72, color: SAFFRON, fontWeight: 700, marginTop: 10 }}>
          Sab jaante hain.
        </div>
      </div>

      {/* "Phir bhi... kuch nahi hota." */}
      <div
        style={{
          position: "absolute",
          top: "78%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: defeatOpacity,
          transform: `scale(${defeatScale})`,
        }}
      >
        <div style={{ fontSize: 80, color: "#666", fontWeight: 800 }}>
          Phir bhi...
        </div>
        <div
          style={{
            fontSize: 88,
            color: "#444",
            fontWeight: 900,
            marginTop: 12,
          }}
        >
          ...kuch nahi hota.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 3: THE TURN (15s - 20s) ============
const SceneTurn: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lekinOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const badlegaStart = 45;
  const badlegaProgress = spring({
    frame: frame - badlegaStart,
    fps,
    config: { damping: 8, stiffness: 200 },
  });
  const badlegaScale = interpolate(badlegaProgress, [0, 1], [0.3, 1]);
  const badlegaOpacity = interpolate(
    frame,
    [badlegaStart, badlegaStart + 5],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const flashOpacity =
    frame >= badlegaStart && frame <= badlegaStart + 8
      ? interpolate(frame, [badlegaStart, badlegaStart + 8], [0.8, 0], {
          extrapolateRight: "clamp",
        })
      : 0;

  const jamshedpurStart = 69;
  const jamshedpurOpacity = interpolate(
    frame,
    [jamshedpurStart, jamshedpurStart + 20],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const jamshedpurY = interpolate(
    frame,
    [jamshedpurStart, jamshedpurStart + 20],
    [30, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const bgBrightness = interpolate(frame, [0, 60], [0, 0.15], {
    extrapolateRight: "clamp",
  });

  const ringScale = interpolate(frame, [badlegaStart, badlegaStart + 60], [0, 4], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const ringOpacity = interpolate(frame, [badlegaStart, badlegaStart + 60], [0.6, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a", fontFamily }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(249,115,22,${bgBrightness}) 0%, transparent 70%)`,
        }}
      />

      {frame >= badlegaStart && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: `4px solid ${SAFFRON}`,
            transform: `translate(-50%, -50%) scale(${ringScale})`,
            opacity: ringOpacity,
          }}
        />
      )}

      <AbsoluteFill
        style={{
          backgroundColor: SAFFRON,
          opacity: flashOpacity,
        }}
      />

      {/* "Lekin..." */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: lekinOpacity,
        }}
      >
        <div style={{ fontSize: 80, color: "#888", fontWeight: 500 }}>
          Lekin...
        </div>
      </div>

      {/* "...AB BADLEGA!" */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: badlegaOpacity,
          transform: `scale(${badlegaScale})`,
        }}
      >
        <div style={{ fontSize: 130, color: SAFFRON, fontWeight: 900 }}>
          ...AB BADLEGA!
        </div>
      </div>

      {/* "Jamshedpur se shuruat hogi" */}
      <div
        style={{
          position: "absolute",
          top: "62%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: jamshedpurOpacity,
          transform: `translateY(${jamshedpurY}px)`,
        }}
      >
        <div style={{ fontSize: 64, color: "#fff", fontWeight: 600 }}>
          <span style={{ color: SAFFRON }}>Jamshedpur</span> se
        </div>
        <div style={{ fontSize: 64, color: "#fff", fontWeight: 600, marginTop: 8 }}>
          shuruat hogi.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 4: THE SOLUTION (20s - 32s) ============
const SceneSolution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const revealProgress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const logoScale = interpolate(revealProgress, [0, 1], [0.5, 1]);
  const logoOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const features = [
    {
      text: "Photo lo, AI apne aap\nissue detect karega",
      icon: "📸",
      start: 51,
    },
    {
      text: "Map pe pin daalo,\npoore sheher ko dikhao",
      icon: "📍",
      start: 126,
    },
    { text: "Real time mein\nstatus track karo", icon: "⚡", start: 195 },
    {
      text: "RTI? Wo automatic\nban jaayegi!",
      icon: "📋",
      start: 264,
    },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: DARK, fontFamily }}>
      <AbsoluteFill
        style={{
          background: `linear-gradient(135deg, ${DARK} 0%, #1e1e3a 50%, ${DARK} 100%)`,
        }}
      />

      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* "Pesh hai, SudharMap!" */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <div style={{ fontSize: 52, color: "#aaa", fontWeight: 400 }}>
          Pesh hai,
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            marginTop: 8,
          }}
        >
          <span style={{ color: "#fff" }}>SUDHAR</span>
          <span style={{ color: SAFFRON }}>MAP</span>
        </div>
        <div
          style={{
            width: 160,
            height: 6,
            backgroundColor: SAFFRON,
            margin: "20px auto",
            borderRadius: 3,
          }}
        />
      </div>

      {/* Feature cards */}
      {features.map((f, i) => {
        const progress = spring({
          frame: frame - f.start,
          fps,
          config: { damping: 15, stiffness: 120 },
        });
        const cardOpacity = interpolate(
          frame,
          [f.start, f.start + 10],
          [0, 1],
          { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
        );
        const cardX = interpolate(progress, [0, 1], [80, 0]);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${32 + i * 16}%`,
              left: "6%",
              right: "6%",
              opacity: cardOpacity,
              transform: `translateX(${cardX}px)`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                backgroundColor: "rgba(249,115,22,0.08)",
                border: "2px solid rgba(249,115,22,0.25)",
                borderRadius: 24,
                padding: "28px 36px",
              }}
            >
              <span style={{ fontSize: 64, flexShrink: 0 }}>{f.icon}</span>
              <span
                style={{
                  fontSize: 48,
                  color: "#fff",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  whiteSpace: "pre-line",
                }}
              >
                {f.text}
              </span>
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ============ SCENE 5: THE REVEAL (32s - 40s) ============
const SceneReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoProgress = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const logoScale = interpolate(logoProgress, [0, 1], [0, 1]);

  const titleProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12 },
  });
  const titleScale = interpolate(titleProgress, [0, 1], [0.8, 1]);

  const taglineStart = 60;
  const taglineProgress = spring({
    frame: frame - taglineStart,
    fps,
    config: { damping: 15 },
  });
  const taglineOpacity = interpolate(
    frame,
    [taglineStart, taglineStart + 15],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const launchStart = 135;
  const launchOpacity = interpolate(
    frame,
    [launchStart, launchStart + 20],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const launchY = interpolate(
    frame,
    [launchStart, launchStart + 20],
    [30, 0],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const particles = Array.from({ length: 25 }, (_, i) => {
    const startFrame = 10 + i * 3;
    const x = 5 + (i * 47) % 90;
    const speed = 1 + (i % 3);
    const particleY = interpolate(
      frame,
      [startFrame, startFrame + 80],
      [-5, 110],
      { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
    );
    const particleOpacity = interpolate(
      frame,
      [startFrame, startFrame + 10, startFrame + 70, startFrame + 80],
      [0, 0.8, 0.8, 0],
      { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
    );
    const colors = [SAFFRON, GREEN, "#fff", YELLOW, SAFFRON_DARK];
    const rotation = frame * speed * 3;
    return { x, y: particleY, opacity: particleOpacity, color: colors[i % 5], rotation };
  });

  const ringPulse = Math.sin(frame * 0.1) * 0.15 + 0.85;

  return (
    <AbsoluteFill style={{ backgroundColor: DARK, fontFamily }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 30%, rgba(249,115,22,0.2) 0%, transparent 60%)`,
        }}
      />

      {/* Confetti */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 14,
            height: 14,
            backgroundColor: p.color,
            opacity: p.opacity,
            borderRadius: i % 2 === 0 ? "50%" : 3,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}

      {/* Glow ring */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: `4px solid rgba(249,115,22,${0.3 * ringPulse})`,
          transform: `translate(-50%, 0) scale(${ringPulse})`,
          boxShadow: `0 0 60px rgba(249,115,22,${0.2 * ringPulse})`,
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: "13%",
          left: "50%",
          transform: `translate(-50%, 0) scale(${logoScale})`,
        }}
      >
        <Img
          src={staticFile("logo.jpeg")}
          style={{
            width: 280,
            height: 280,
            borderRadius: 140,
            border: `6px solid ${SAFFRON}`,
            boxShadow: "0 0 50px rgba(249,115,22,0.4)",
          }}
        />
      </div>

      {/* "SudharMap!" */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          transform: `scale(${titleScale})`,
        }}
      >
        <div style={{ fontSize: 140, fontWeight: 900 }}>
          <span style={{ color: "#fff" }}>SUDHAR</span>
          <span style={{ color: SAFFRON }}>MAP</span>
        </div>
      </div>

      {/* Taglines */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: taglineOpacity,
        }}
      >
        <div style={{ fontSize: 56, color: "#ccc", fontWeight: 600 }}>
          Apne sheher ki samasya
        </div>
        <div style={{ fontSize: 56, color: "#ccc", fontWeight: 600, marginTop: 4 }}>
          report karo.
        </div>
        <div
          style={{
            fontSize: 80,
            color: SAFFRON,
            fontWeight: 900,
            marginTop: 24,
            transform: `scale(${interpolate(taglineProgress, [0, 1], [0.9, 1])})`,
          }}
        >
          Apna sheher sudharo!
        </div>
      </div>

      {/* "Jamshedpur mein launch!" */}
      <div
        style={{
          position: "absolute",
          top: "82%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: launchOpacity,
          transform: `translateY(${launchY}px)`,
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: `linear-gradient(135deg, ${SAFFRON}, ${SAFFRON_DARK})`,
            borderRadius: 20,
            padding: "20px 48px",
          }}
        >
          <span style={{ fontSize: 48, color: "#fff", fontWeight: 700 }}>
            🚀 Sabse pehle — Jamshedpur mein launch!
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ SCENE 6: THE CTA (40s - 46s) ============
const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const taglineOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame, [0, 20], [20, 0], {
    extrapolateRight: "clamp",
  });

  const followStart = 90;
  const followOpacity = interpolate(
    frame,
    [followStart, followStart + 20],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  const pulse = Math.sin(frame * 0.08) * 0.05 + 1;

  const fadeOut = interpolate(frame, [150, 180], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ backgroundColor: DARK, fontFamily, opacity: fadeOut }}
    >
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(249,115,22,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: `translate(-50%, 0) scale(${pulse})`,
        }}
      >
        <Img
          src={staticFile("logo.jpeg")}
          style={{
            width: 220,
            height: 220,
            borderRadius: 110,
            border: `5px solid ${SAFFRON}`,
          }}
        />
      </div>

      {/* Brand name */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "5%",
          right: "5%",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 100, fontWeight: 900 }}>
          <span style={{ color: "#fff" }}>SUDHAR</span>
          <span style={{ color: SAFFRON }}>MAP</span>
        </div>
      </div>

      {/* "Apna sheher, apni zimmedaari" */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
        }}
      >
        <div
          style={{
            fontSize: 64,
            color: SAFFRON_LIGHT,
            fontWeight: 600,
            fontStyle: "italic",
          }}
        >
          Apna sheher...
        </div>
        <div
          style={{
            fontSize: 72,
            color: SAFFRON,
            fontWeight: 800,
            fontStyle: "italic",
            marginTop: 12,
          }}
        >
          apni zimmedaari.
        </div>
      </div>

      {/* Follow CTA */}
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: followOpacity,
        }}
      >
        <div style={{ fontSize: 52, color: "#aaa", fontWeight: 500 }}>
          Follow karo{" "}
          <span style={{ color: SAFFRON, fontWeight: 700 }}>SudharMap</span>
        </div>
        <div
          style={{
            fontSize: 44,
            color: "#777",
            fontWeight: 400,
            marginTop: 16,
          }}
        >
          Sabse pehle jaano.
        </div>
      </div>

      {/* Website */}
      <div
        style={{
          position: "absolute",
          bottom: "8%",
          left: "5%",
          right: "5%",
          textAlign: "center",
          opacity: followOpacity,
        }}
      >
        <div
          style={{
            display: "inline-block",
            border: `2px solid rgba(249,115,22,0.4)`,
            borderRadius: 16,
            padding: "16px 48px",
          }}
        >
          <span style={{ fontSize: 40, color: SAFFRON, fontWeight: 600 }}>
            sudharmap.com
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============ MAIN COMPOSITION ============
export const MyComposition = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      {/* Audio track - voiceover + cinematic BGM */}
      <Audio src={staticFile("audio.wav")} />

      <Sequence from={0} durationInFrames={5 * fps} premountFor={fps}>
        <SceneHook />
      </Sequence>

      <Sequence from={5 * fps} durationInFrames={10 * fps} premountFor={fps}>
        <SceneProblem />
      </Sequence>

      <Sequence from={15 * fps} durationInFrames={5 * fps} premountFor={fps}>
        <SceneTurn />
      </Sequence>

      <Sequence from={20 * fps} durationInFrames={12 * fps} premountFor={fps}>
        <SceneSolution />
      </Sequence>

      <Sequence from={32 * fps} durationInFrames={8 * fps} premountFor={fps}>
        <SceneReveal />
      </Sequence>

      <Sequence from={40 * fps} durationInFrames={6 * fps} premountFor={fps}>
        <SceneCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
