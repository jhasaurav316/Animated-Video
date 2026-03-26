import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  AbsoluteFill,
  staticFile,
} from "remotion";
import { Audio } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/BubblegumSans";
import { loadFont as loadFontInter } from "@remotion/google-fonts/Inter";
import React from "react";

const { fontFamily: funFont } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

const { fontFamily: cleanFont } = loadFontInter("normal", {
  weights: ["700", "900"],
  subsets: ["latin"],
});

// ===================== DATA =====================

interface LetterData {
  letter: string;
  word: string;
  emoji: string;
  color: string;
  bgGradient: [string, string];
}

const ALPHABET: LetterData[] = [
  { letter: "A", word: "Apple", emoji: "🍎", color: "#FF3B30", bgGradient: ["#FF6B6B", "#FFE66D"] },
  { letter: "B", word: "Ball", emoji: "⚽", color: "#FF9500", bgGradient: ["#F7971E", "#FFD200"] },
  { letter: "C", word: "Cat", emoji: "🐱", color: "#FFCC00", bgGradient: ["#56CCF2", "#2F80ED"] },
  { letter: "D", word: "Dog", emoji: "🐶", color: "#4CD964", bgGradient: ["#11998E", "#38EF7D"] },
  { letter: "E", word: "Elephant", emoji: "🐘", color: "#5AC8FA", bgGradient: ["#667EEA", "#764BA2"] },
  { letter: "F", word: "Fish", emoji: "🐟", color: "#007AFF", bgGradient: ["#00C6FB", "#005BEA"] },
  { letter: "G", word: "Grapes", emoji: "🍇", color: "#5856D6", bgGradient: ["#A18CD1", "#FBC2EB"] },
  { letter: "H", word: "Hat", emoji: "🎩", color: "#FF2D55", bgGradient: ["#F093FB", "#F5576C"] },
  { letter: "I", word: "Ice cream", emoji: "🍦", color: "#E91E63", bgGradient: ["#FDCBF1", "#E6DEE9"] },
  { letter: "J", word: "Jug", emoji: "🫗", color: "#9C27B0", bgGradient: ["#A1C4FD", "#C2E9FB"] },
  { letter: "K", word: "Kite", emoji: "🪁", color: "#2196F3", bgGradient: ["#FFECD2", "#FCB69F"] },
  { letter: "L", word: "Lion", emoji: "🦁", color: "#FF9800", bgGradient: ["#FAD961", "#F76B1C"] },
  { letter: "M", word: "Monkey", emoji: "🐵", color: "#795548", bgGradient: ["#F5AF19", "#F12711"] },
  { letter: "N", word: "Nest", emoji: "🪺", color: "#8BC34A", bgGradient: ["#C1DFC4", "#DEECDD"] },
  { letter: "O", word: "Orange", emoji: "🍊", color: "#FF5722", bgGradient: ["#F7971E", "#FFD200"] },
  { letter: "P", word: "Parrot", emoji: "🦜", color: "#4CAF50", bgGradient: ["#00B09B", "#96C93D"] },
  { letter: "Q", word: "Queen", emoji: "👑", color: "#FFC107", bgGradient: ["#F7971E", "#FFD200"] },
  { letter: "R", word: "Rabbit", emoji: "🐰", color: "#E91E63", bgGradient: ["#FBC2EB", "#A6C1EE"] },
  { letter: "S", word: "Sun", emoji: "☀️", color: "#FFEB3B", bgGradient: ["#F6D365", "#FDA085"] },
  { letter: "T", word: "Tiger", emoji: "🐯", color: "#FF9800", bgGradient: ["#FA709A", "#FEE140"] },
  { letter: "U", word: "Umbrella", emoji: "☂️", color: "#673AB7", bgGradient: ["#A18CD1", "#FBC2EB"] },
  { letter: "V", word: "Van", emoji: "🚐", color: "#3F51B5", bgGradient: ["#667EEA", "#764BA2"] },
  { letter: "W", word: "Watch", emoji: "⌚", color: "#607D8B", bgGradient: ["#89F7FE", "#66A6FF"] },
  { letter: "X", word: "Xylophone", emoji: "🎵", color: "#9C27B0", bgGradient: ["#A18CD1", "#FBC2EB"] },
  { letter: "Y", word: "Yak", emoji: "🐂", color: "#795548", bgGradient: ["#FFECD2", "#FCB69F"] },
  { letter: "Z", word: "Zebra", emoji: "🦓", color: "#212121", bgGradient: ["#E0EAFC", "#CFDEF3"] },
];

const LETTER_DURATION_SECONDS = 3.5;
const INTRO_DURATION_SECONDS = 5;
const OUTRO_DURATION_SECONDS = 4;

// ===================== CSS 3D COMPONENTS =====================

// 3D rotating rings using CSS
const Rotating3DRings: React.FC<{ color: string }> = ({ color }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        perspective: 1500,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Ring 1 */}
      <div
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          borderRadius: "50%",
          border: `6px solid ${color}`,
          top: -325,
          left: -325,
          transform: `rotateX(${60 + Math.sin(frame * 0.03) * 10}deg) rotateY(${frame * 1.5}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: `0 0 30px ${color}44, inset 0 0 30px ${color}22`,
        }}
      />
      {/* Ring 2 */}
      <div
        style={{
          position: "absolute",
          width: 720,
          height: 720,
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.25)",
          top: -360,
          left: -360,
          transform: `rotateX(${45 + Math.cos(frame * 0.025) * 15}deg) rotateY(${-frame * 1.2}deg) rotateZ(${frame * 0.5}deg)`,
          transformStyle: "preserve-3d",
        }}
      />
      {/* Ring 3 — smaller, faster */}
      <div
        style={{
          position: "absolute",
          width: 550,
          height: 550,
          borderRadius: "50%",
          border: `4px solid ${color}88`,
          top: -275,
          left: -275,
          transform: `rotateX(${-30 + Math.sin(frame * 0.04) * 20}deg) rotateY(${frame * 2}deg) rotateZ(${-frame * 0.8}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: `0 0 20px ${color}33`,
        }}
      />
      {/* Center glow sphere */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          top: -150,
          left: -150,
          background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
          transform: `scale(${1 + Math.sin(frame * 0.08) * 0.15})`,
        }}
      />
      {/* Orbiting dots */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2 + frame * 0.05;
        const r = 300;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r * 0.5;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#fff",
              boxShadow: `0 0 12px #fff, 0 0 24px ${color}`,
              top: y - 6,
              left: x - 6,
              opacity: 0.8,
            }}
          />
        );
      })}
    </div>
  );
};

// =================== LETTER SCENE ===================
const LetterScene: React.FC<{ data: LetterData }> = ({ data }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // === LEFT SIDE ===
  const letterProgress = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 200, mass: 0.8 },
  });
  const letterScale = interpolate(letterProgress, [0, 1], [0, 1]);
  const letterRotZ = interpolate(letterProgress, [0, 1], [-20, 0]);

  const forOpacity = interpolate(frame, [10, 18], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const forY = interpolate(frame, [10, 18], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const wordProgress = spring({
    frame: frame - 14,
    fps,
    config: { damping: 10, stiffness: 140 },
  });
  const wordY = interpolate(wordProgress, [0, 1], [80, 0]);
  const wordOpacity = interpolate(frame, [14, 22], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // === RIGHT SIDE — 3D EMOJI ===
  const emojiProgress = spring({
    frame: frame - 6,
    fps,
    config: { damping: 6, stiffness: 120, mass: 1.2 },
  });
  const emojiScale = interpolate(emojiProgress, [0, 1], [0, 1]);
  const emojiFloat = Math.sin(frame * 0.05) * 18;

  // 3D rotation
  const rotY = Math.sin(frame * 0.04) * 15;
  const rotX = Math.cos(frame * 0.03) * 8;

  // Glow pulse
  const glowSize = 35 + Math.sin(frame * 0.1) * 15;

  // 3D letter tilt on left
  const letterRotY = Math.sin(frame * 0.035) * 8;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${data.bgGradient[0]}, ${data.bgGradient[1]})`,
        overflow: "hidden",
      }}
    >
      {/* ====== LEFT HALF — TEXT (42%) ====== */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "42%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          perspective: 1000,
        }}
      >
        {/* Giant 3D letter */}
        <div
          style={{
            transform: `scale(${letterScale}) rotate(${letterRotZ}deg) rotateY(${letterRotY}deg)`,
            transformOrigin: "center",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            style={{
              fontSize: 500,
              fontWeight: 900,
              color: "#fff",
              textShadow: `
                8px 8px 0px ${data.color},
                16px 16px 0px rgba(0,0,0,0.12),
                24px 24px 0px rgba(0,0,0,0.06),
                0 0 80px rgba(255,255,255,0.3)
              `,
              fontFamily: cleanFont,
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            {data.letter}
          </div>
        </div>

        {/* "for" */}
        <div
          style={{
            opacity: forOpacity,
            transform: `translateY(${forY}px)`,
            marginTop: -20,
          }}
        >
          <div
            style={{
              fontSize: 100,
              color: "rgba(255,255,255,0.95)",
              fontFamily: funFont,
              textAlign: "center",
              textShadow: "3px 3px 15px rgba(0,0,0,0.3)",
            }}
          >
            for
          </div>
        </div>

        {/* Word */}
        <div
          style={{
            opacity: wordOpacity,
            transform: `translateY(${wordY}px)`,
            marginTop: 0,
            perspective: 800,
          }}
        >
          <div
            style={{
              fontSize: 150,
              fontWeight: 900,
              color: "#fff",
              textShadow: `
                6px 6px 0px ${data.color},
                12px 12px 0px rgba(0,0,0,0.1),
                0 0 60px rgba(255,255,255,0.3)
              `,
              fontFamily: cleanFont,
              textAlign: "center",
              whiteSpace: "nowrap",
              transform: `rotateY(${letterRotY * 0.5}deg)`,
            }}
          >
            {data.word}
          </div>
        </div>
      </div>

      {/* ====== RIGHT HALF — 3D RINGS + HUGE EMOJI (58%) ====== */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "58%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* 3D rotating rings */}
        <Rotating3DRings color={data.color} />

        {/* MASSIVE 3D EMOJI */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {/* Big glow */}
          <div
            style={{
              position: "absolute",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${data.color}44 0%, ${data.color}11 40%, transparent 70%)`,
              filter: `blur(${glowSize}px)`,
              transform: `scale(${emojiScale})`,
            }}
          />

          {/* Emoji with full 3D perspective */}
          <div
            style={{
              perspective: 1500,
              transform: `scale(${emojiScale}) translateY(${emojiFloat}px)`,
              transformOrigin: "center",
            }}
          >
            <div
              style={{
                fontSize: 700,
                lineHeight: 1,
                transform: `rotateY(${rotY}deg) rotateX(${rotX}deg)`,
                transformStyle: "preserve-3d",
                filter: `drop-shadow(20px 25px 50px rgba(0,0,0,0.4))`,
              }}
            >
              {data.emoji}
            </div>
          </div>
        </div>

        {/* Sparkle stars */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          const angle = (i / 10) * Math.PI * 2 + frame * 0.03;
          const r = 320 + Math.sin(frame * 0.06 + i) * 40;
          const x = Math.cos(angle) * r + 528;
          const y = Math.sin(angle) * r + 540;
          const sparkOpacity = interpolate(
            frame,
            [18, 28, 85, 100],
            [0, 0.9, 0.9, 0],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                fontSize: 36,
                opacity: sparkOpacity,
                transform: `rotate(${frame * 2 + i * 45}deg)`,
              }}
            >
              ✨
            </div>
          );
        })}
      </div>

      {/* Gradient bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 16,
          background: `linear-gradient(90deg, ${data.color}, #fff, ${data.bgGradient[1]})`,
          opacity: 0.7,
          zIndex: 20,
        }}
      />
    </AbsoluteFill>
  );
};

// =================== INTRO SCENE ===================
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 100 },
  });
  const titleScale = interpolate(titleProgress, [0, 1], [0, 1]);

  const subtitleOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subtitleY = interpolate(frame, [35, 55], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const bgLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #667EEA, #764BA2, #F093FB)",
        fontFamily: funFont,
        overflow: "hidden",
      }}
    >
      {/* 3D rotating rings in background */}
      <div style={{ opacity: 0.25 }}>
        <Rotating3DRings color="#FFE66D" />
      </div>

      {/* Floating letters */}
      {bgLetters.map((l, i) => {
        const x = (i * 41 + 7) % 95;
        const baseY = (i * 37 + 13) % 90;
        const y = baseY + Math.sin((frame + i * 15) * 0.04) * 6;
        const rot = Math.sin((frame + i * 10) * 0.03) * 15;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              fontSize: 90,
              color: "rgba(255,255,255,0.08)",
              fontWeight: 900,
              fontFamily: cleanFont,
              transform: `rotate(${rot}deg)`,
            }}
          >
            {l}
          </div>
        );
      })}

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: 0,
          right: 0,
          textAlign: "center",
          transform: `scale(${titleScale})`,
          zIndex: 10,
          perspective: 1000,
        }}
      >
        <div
          style={{
            fontSize: 240,
            fontWeight: 900,
            color: "#fff",
            fontFamily: cleanFont,
            textShadow: "10px 10px 40px rgba(0,0,0,0.4), 0 0 80px rgba(255,255,255,0.2)",
            lineHeight: 1.1,
            transform: `rotateY(${Math.sin(frame * 0.03) * 5}deg)`,
          }}
        >
          🎵 A B C 🎵
        </div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 130,
            color: "#FFE66D",
            textShadow: "5px 5px 20px rgba(0,0,0,0.4)",
          }}
        >
          Let's Learn
        </div>
        <div
          style={{
            fontSize: 200,
            color: "#fff",
            fontWeight: 900,
            fontFamily: cleanFont,
            marginTop: 10,
            textShadow: "8px 8px 30px rgba(0,0,0,0.4), 0 0 60px rgba(255,255,255,0.2)",
          }}
        >
          A to Z!
        </div>
      </div>

      {/* Bouncing emojis at bottom */}
      {["🍎", "⚽", "🐱", "🐶", "🐘"].map((emoji, i) => {
        const bounce = Math.abs(Math.sin((frame + i * 20) * 0.08)) * 25;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: `${4 + bounce}%`,
              left: `${6 + i * 18}%`,
              fontSize: 160,
              zIndex: 10,
              opacity: interpolate(frame, [55 + i * 6, 70 + i * 6], [0, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              }),
              filter: "drop-shadow(8px 8px 15px rgba(0,0,0,0.3))",
              perspective: 800,
              transform: `rotateY(${Math.sin((frame + i * 30) * 0.05) * 15}deg)`,
            }}
          >
            {emoji}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// =================== OUTRO SCENE ===================
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const scale = interpolate(progress, [0, 1], [0.5, 1]);

  const fadeOut = interpolate(frame, [90, 120], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #11998E, #38EF7D)",
        fontFamily: funFont,
        opacity: fadeOut,
        overflow: "hidden",
      }}
    >
      {/* 3D rings */}
      <div style={{ opacity: 0.2 }}>
        <Rotating3DRings color="#FFE66D" />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transform: `scale(${scale})`,
          zIndex: 10,
          perspective: 1000,
        }}
      >
        <div
          style={{
            fontSize: 200,
            lineHeight: 1.2,
            filter: "drop-shadow(5px 5px 15px rgba(0,0,0,0.3))",
          }}
        >
          🎉🌟🎉
        </div>
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            color: "#fff",
            fontFamily: cleanFont,
            textShadow: "10px 10px 30px rgba(0,0,0,0.4), 0 0 80px rgba(255,255,255,0.2)",
            marginTop: 10,
            transform: `rotateY(${Math.sin(frame * 0.04) * 8}deg)`,
          }}
        >
          Great Job!
        </div>
        <div
          style={{
            fontSize: 110,
            color: "#FFE66D",
            marginTop: 20,
            textShadow: "4px 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          You learned A to Z!
        </div>
        <div
          style={{
            fontSize: 220,
            marginTop: 20,
            filter: "drop-shadow(5px 5px 15px rgba(0,0,0,0.3))",
          }}
        >
          👏👏👏
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===================== MAIN COMPOSITION =====================

export const ABCRhyme: React.FC = () => {
  const { fps } = useVideoConfig();

  const introFrames = Math.round(INTRO_DURATION_SECONDS * fps);
  const letterFrames = Math.round(LETTER_DURATION_SECONDS * fps);
  const outroFrames = Math.round(OUTRO_DURATION_SECONDS * fps);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* ===== VISUAL LAYERS ===== */}

      <Sequence from={0} durationInFrames={introFrames} premountFor={fps}>
        <IntroScene />
      </Sequence>

      {ALPHABET.map((data, i) => {
        const startFrame = introFrames + i * letterFrames;
        return (
          <Sequence
            key={`visual-${data.letter}`}
            from={startFrame}
            durationInFrames={letterFrames}
            premountFor={Math.round(fps * 0.5)}
          >
            <LetterScene data={data} />
          </Sequence>
        );
      })}

      <Sequence
        from={introFrames + 26 * letterFrames}
        durationInFrames={outroFrames}
        premountFor={fps}
      >
        <OutroScene />
      </Sequence>

      {/* ===== AUDIO LAYERS ===== */}

      <Sequence from={5} durationInFrames={introFrames} layout="none">
        <Audio src={staticFile("abc-audio/intro.mp3")} />
      </Sequence>

      {ALPHABET.map((data, i) => {
        const audioStart = introFrames + i * letterFrames + 5;
        return (
          <Sequence
            key={`audio-${data.letter}`}
            from={audioStart}
            durationInFrames={letterFrames}
            layout="none"
          >
            <Audio src={staticFile(`abc-audio/${data.letter}.mp3`)} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
