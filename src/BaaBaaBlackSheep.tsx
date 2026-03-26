import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  AbsoluteFill,
  Easing,
  staticFile,
} from "remotion";
import { Audio } from "@remotion/media";
import { loadFont } from "@remotion/google-fonts/BubblegumSans";
import { loadFont as loadFontPoppins } from "@remotion/google-fonts/Poppins";
import React from "react";

const { fontFamily: funFont } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

const { fontFamily: cleanFont } = loadFontPoppins("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

// ===================== POEM DATA =====================

interface VerseLineData {
  line: string;
  emoji: string;
  bgGradient: [string, string];
  accentColor: string;
}

const VERSE_LINES: VerseLineData[] = [
  {
    line: "Baa, baa, black sheep",
    emoji: "🐑",
    bgGradient: ["#87CEEB", "#98FB98"],
    accentColor: "#333",
  },
  {
    line: "Have you any wool?",
    emoji: "🧶",
    bgGradient: ["#E8F5E9", "#C8E6C9"],
    accentColor: "#795548",
  },
  {
    line: "Yes sir, yes sir",
    emoji: "👋",
    bgGradient: ["#FFF9C4", "#FFECB3"],
    accentColor: "#F57F17",
  },
  {
    line: "Three bags full!",
    emoji: "👜",
    bgGradient: ["#FFCCBC", "#FFAB91"],
    accentColor: "#BF360C",
  },
  {
    line: "One for the master",
    emoji: "👨‍💼",
    bgGradient: ["#E1BEE7", "#CE93D8"],
    accentColor: "#6A1B9A",
  },
  {
    line: "One for the dame",
    emoji: "👩",
    bgGradient: ["#F8BBD0", "#F48FB1"],
    accentColor: "#AD1457",
  },
  {
    line: "And one for the little boy",
    emoji: "👦",
    bgGradient: ["#B3E5FC", "#81D4FA"],
    accentColor: "#01579B",
  },
  {
    line: "Who lives down the lane",
    emoji: "🏡",
    bgGradient: ["#C8E6C9", "#A5D6A7"],
    accentColor: "#2E7D32",
  },
];

// Second cycle with swapped/shifted gradients
const VERSE_LINES_CYCLE2: VerseLineData[] = [
  {
    line: "Baa, baa, black sheep",
    emoji: "🐑",
    bgGradient: ["#98FB98", "#87CEEB"],
    accentColor: "#444",
  },
  {
    line: "Have you any wool?",
    emoji: "🧶",
    bgGradient: ["#C8E6C9", "#E8F5E9"],
    accentColor: "#8D6E63",
  },
  {
    line: "Yes sir, yes sir",
    emoji: "👋",
    bgGradient: ["#FFECB3", "#FFF9C4"],
    accentColor: "#FF8F00",
  },
  {
    line: "Three bags full!",
    emoji: "👜",
    bgGradient: ["#FFAB91", "#FFCCBC"],
    accentColor: "#D84315",
  },
  {
    line: "One for the master",
    emoji: "👨‍💼",
    bgGradient: ["#CE93D8", "#E1BEE7"],
    accentColor: "#7B1FA2",
  },
  {
    line: "One for the dame",
    emoji: "👩",
    bgGradient: ["#F48FB1", "#F8BBD0"],
    accentColor: "#C2185B",
  },
  {
    line: "And one for the little boy",
    emoji: "👦",
    bgGradient: ["#81D4FA", "#B3E5FC"],
    accentColor: "#0277BD",
  },
  {
    line: "Who lives down the lane",
    emoji: "🏡",
    bgGradient: ["#A5D6A7", "#C8E6C9"],
    accentColor: "#388E3C",
  },
];

const ALL_VERSES: VerseLineData[] = [...VERSE_LINES, ...VERSE_LINES_CYCLE2];

const VERSE_DURATION_SECONDS = 4;
const INTRO_DURATION_SECONDS = 5;
const OUTRO_DURATION_SECONDS = 5;
const TOTAL_LINES = 16; // 8 lines x 2 cycles

// ===================== CLOUD =====================

const Cloud: React.FC<{
  x: number;
  y: number;
  scale: number;
  speed: number;
}> = ({ x, y, scale, speed }) => {
  const frame = useCurrentFrame();

  const drift = (frame * speed) % 1920;
  const posX = ((x + drift) % 2100) - 200;

  return (
    <div
      style={{
        position: "absolute",
        left: posX,
        top: `${y}%`,
        transform: `scale(${scale})`,
        opacity: 0.85,
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "relative",
          width: 180,
          height: 60,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#fff",
            top: -30,
            left: 25,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 100,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "#fff",
            top: -20,
            left: 60,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 180,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#fff",
            top: 10,
            left: 0,
          }}
        />
      </div>
    </div>
  );
};

// ===================== GRASS FIELD =====================

const GrassField: React.FC = () => {
  const frame = useCurrentFrame();
  const sway = Math.sin(frame * 0.04) * 3;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "18%",
        zIndex: 2,
      }}
    >
      {/* Wavy top edge using overlapping circles */}
      <svg
        viewBox="0 0 1920 80"
        style={{
          position: "absolute",
          top: -40,
          left: 0,
          width: "100%",
          height: 80,
        }}
        preserveAspectRatio="none"
      >
        <path
          d={`M0,60 C120,${20 + sway} 240,${50 - sway} 360,${30 + sway} C480,${10 - sway} 600,${50 + sway} 720,${25 - sway} C840,${5 + sway} 960,${45 - sway} 1080,${30 + sway} C1200,${15 - sway} 1320,${50 + sway} 1440,${20 - sway} C1560,${5 + sway} 1680,${40 - sway} 1920,${25 + sway} L1920,80 L0,80 Z`}
          fill="#4CAF50"
        />
      </svg>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #4CAF50 0%, #388E3C 60%, #2E7D32 100%)",
        }}
      />
      {/* Small flowers */}
      {[120, 350, 580, 900, 1200, 1500, 1750].map((fx, i) => {
        const flowerBounce = Math.sin(frame * 0.06 + i * 1.5) * 4;
        const flowerEmojis = ["🌸", "🌼", "🌺", "🌻", "🌷", "🌸", "🌼"];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: fx,
              top: -10 + flowerBounce,
              fontSize: 28 + (i % 3) * 6,
              zIndex: 3,
            }}
          >
            {flowerEmojis[i]}
          </div>
        );
      })}
    </div>
  );
};

// ===================== SUN =====================

const Sun: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = interpolate(Math.sin(frame * 0.05), [-1, 1], [0.95, 1.05]);
  const glowSize = interpolate(Math.sin(frame * 0.04), [-1, 1], [40, 60]);

  return (
    <div
      style={{
        position: "absolute",
        right: "6%",
        top: "5%",
        zIndex: 1,
        transform: `scale(${pulse})`,
      }}
    >
      {/* Sun glow */}
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,235,59,0.4) 0%, rgba(255,193,7,0.15) 50%, transparent 70%)",
          top: -40,
          left: -40,
          filter: `blur(${glowSize}px)`,
        }}
      />
      {/* Sun body */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FFF176 0%, #FFEE58 40%, #FDD835 100%)",
          boxShadow: "0 0 40px 15px rgba(255,235,59,0.4), 0 0 80px 30px rgba(255,235,59,0.15)",
        }}
      />
      {/* Sun rays */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * 360 + frame * 0.5;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 4,
              height: 25,
              backgroundColor: "#FDD835",
              borderRadius: 2,
              top: 60,
              left: 58,
              transformOrigin: "center -35px",
              transform: `rotate(${angle}deg)`,
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
};

// ===================== VERSE SCENE =====================

const VerseScene: React.FC<{
  data: VerseLineData;
  verseIndex: number;
  totalVerses: number;
}> = ({ data, verseIndex, totalVerses }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background transition
  const bgOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Emoji entrance with bouncy spring
  const emojiProgress = spring({
    frame: frame - 5,
    fps,
    config: { damping: 8, stiffness: 120, mass: 1 },
  });
  const emojiScale = interpolate(emojiProgress, [0, 1], [0, 1]);
  const emojiFloat = Math.sin(frame * 0.08) * 18;
  const emojiRotate = Math.sin(frame * 0.06) * 10;

  // Text entrance - word by word
  const words = data.line.split(" ");

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${data.bgGradient[0]} 0%, ${data.bgGradient[1]} 100%)`,
        opacity: bgOpacity,
        overflow: "hidden",
      }}
    >
      {/* Clouds */}
      <Cloud x={100} y={8} scale={1} speed={0.3} />
      <Cloud x={600} y={14} scale={0.7} speed={0.2} />
      <Cloud x={1100} y={5} scale={0.9} speed={0.35} />
      <Cloud x={1500} y={18} scale={0.6} speed={0.25} />

      {/* Sun */}
      <Sun />

      {/* Grass */}
      <GrassField />

      {/* Center content */}
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
          zIndex: 10,
        }}
      >
        {/* Big emoji */}
        <div
          style={{
            transform: `scale(${emojiScale}) translateY(${emojiFloat}px) rotate(${emojiRotate}deg)`,
            marginBottom: 30,
            filter: `drop-shadow(0 8px 20px rgba(0,0,0,0.15))`,
          }}
        >
          <div
            style={{
              fontSize: 180,
              lineHeight: 1,
            }}
          >
            {data.emoji}
          </div>
        </div>

        {/* Lyrics text - word by word */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 18,
            maxWidth: 1400,
            padding: "0 60px",
          }}
        >
          {words.map((word, wi) => {
            const wordDelay = 12 + wi * 7;
            const wordProgress = spring({
              frame: frame - wordDelay,
              fps,
              config: { damping: 8, stiffness: 150 },
            });
            const wordScale = interpolate(wordProgress, [0, 1], [0, 1]);
            const wordY = interpolate(wordProgress, [0, 1], [60, 0]);
            const wordOpacity = interpolate(frame, [wordDelay, wordDelay + 8], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });

            return (
              <div
                key={wi}
                style={{
                  fontSize: 85,
                  fontWeight: 900,
                  color: data.accentColor,
                  fontFamily: cleanFont,
                  textShadow: `0 4px 8px rgba(0,0,0,0.1),
                               2px 2px 0px rgba(255,255,255,0.6)`,
                  opacity: wordOpacity,
                  transform: `scale(${wordScale}) translateY(${wordY}px)`,
                }}
              >
                {word}
              </div>
            );
          })}
        </div>

        {/* Verse progress indicator dots */}
        <div
          style={{
            position: "absolute",
            bottom: 100,
            display: "flex",
            gap: 12,
            zIndex: 20,
          }}
        >
          {Array.from({ length: totalVerses }, (_, i) => (
            <div
              key={i}
              style={{
                width: i === verseIndex ? 36 : 12,
                height: 12,
                borderRadius: 6,
                backgroundColor:
                  i === verseIndex ? data.accentColor : "rgba(0,0,0,0.15)",
                boxShadow:
                  i === verseIndex
                    ? `0 0 10px ${data.accentColor}88`
                    : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative side emojis */}
      {["🌿", "🌾"].map((e, i) => {
        const sideFloat = Math.sin(frame * 0.05 + i * 3) * 10;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: "15%",
              left: i === 0 ? "3%" : undefined,
              right: i === 1 ? "3%" : undefined,
              fontSize: 60,
              transform: `translateY(${sideFloat}px) scaleX(${i === 1 ? -1 : 1})`,
              opacity: 0.6,
              zIndex: 3,
            }}
          >
            {e}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ===================== INTRO SCENE =====================

const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 80 },
  });
  const titleScale = interpolate(titleProgress, [0, 1], [0, 1]);
  const titleBounce = Math.sin(frame * 0.06) * 5;

  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subtitleY = interpolate(frame, [40, 60], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const bgOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #87CEEB 0%, #B2EBF2 40%, #C8E6C9 70%, #4CAF50 100%)",
        overflow: "hidden",
        opacity: bgOpacity,
      }}
    >
      {/* Clouds */}
      <Cloud x={80} y={6} scale={1.2} speed={0.2} />
      <Cloud x={500} y={12} scale={0.8} speed={0.3} />
      <Cloud x={1000} y={4} scale={1} speed={0.15} />
      <Cloud x={1400} y={16} scale={0.7} speed={0.25} />

      {/* Sun */}
      <Sun />

      {/* Grass */}
      <GrassField />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: 0,
          right: 0,
          textAlign: "center",
          transform: `scale(${titleScale}) translateY(${titleBounce}px)`,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: 140,
            lineHeight: 1.2,
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.1))",
            marginBottom: 10,
          }}
        >
          {"🐑🐑🐑"}
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: "#2E7D32",
            fontFamily: cleanFont,
            textShadow: `0 4px 12px rgba(0,0,0,0.15),
                         3px 3px 0px rgba(255,255,255,0.5)`,
            lineHeight: 1.2,
          }}
        >
          Baa Baa
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: "#333",
            fontFamily: cleanFont,
            textShadow: `0 4px 12px rgba(0,0,0,0.15),
                         3px 3px 0px rgba(255,255,255,0.5)`,
            lineHeight: 1.2,
          }}
        >
          Black Sheep
        </div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: "62%",
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
            fontSize: 65,
            color: "#5D4037",
            fontFamily: funFont,
            textShadow: "2px 2px 8px rgba(255,255,255,0.6)",
          }}
        >
          {"A Children's Nursery Rhyme"}
        </div>
      </div>

      {/* Floating decorative emojis */}
      {["🐑", "🧶", "👜", "🌸", "🐑"].map((emoji, i) => {
        const bounce = Math.abs(Math.sin((frame + i * 18) * 0.07)) * 25;
        const emojiEntryOpacity = interpolate(frame, [60 + i * 6, 75 + i * 6], [0, 1], {
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: `${22 + bounce}%`,
              left: `${6 + i * 20}%`,
              fontSize: 70,
              zIndex: 10,
              opacity: emojiEntryOpacity,
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
              transform: `rotate(${Math.sin((frame + i * 25) * 0.05) * 12}deg)`,
            }}
          >
            {emoji}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ===================== OUTRO SCENE =====================

const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 80 },
  });
  const scale = interpolate(progress, [0, 1], [0.5, 1]);

  const fadeOut = interpolate(frame, [110, 150], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const celebrationBounce = Math.sin(frame * 0.1) * 8;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #87CEEB 0%, #B2EBF2 40%, #C8E6C9 70%, #4CAF50 100%)",
        overflow: "hidden",
        opacity: fadeOut,
      }}
    >
      {/* Clouds */}
      <Cloud x={150} y={8} scale={1} speed={0.3} />
      <Cloud x={700} y={12} scale={0.8} speed={0.2} />
      <Cloud x={1200} y={5} scale={0.9} speed={0.35} />

      {/* Sun */}
      <Sun />

      {/* Grass */}
      <GrassField />

      {/* Confetti / celebration particles */}
      {Array.from({ length: 24 }, (_, i) => {
        const confettiColors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6BD6", "#845EC2"];
        const startY = -50;
        const fallSpeed = 1.5 + (i % 5) * 0.6;
        const yPos = startY + (frame * fallSpeed) % 1200;
        const xPos = (i * 137 + 50) % 1920;
        const wobble = Math.sin(frame * 0.08 + i * 2) * 30;
        const rot = frame * (2 + (i % 3));

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: xPos + wobble,
              top: yPos,
              width: 14,
              height: 14,
              borderRadius: i % 2 === 0 ? "50%" : 2,
              backgroundColor: confettiColors[i % confettiColors.length],
              transform: `rotate(${rot}deg)`,
              opacity: 0.8,
              zIndex: 5,
            }}
          />
        );
      })}

      {/* Center content */}
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
        }}
      >
        <div
          style={{
            fontSize: 140,
            lineHeight: 1.2,
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.1))",
            transform: `translateY(${celebrationBounce}px)`,
          }}
        >
          {"🎉🐑🎉"}
        </div>
        <div
          style={{
            fontSize: 130,
            fontWeight: 900,
            color: "#2E7D32",
            fontFamily: cleanFont,
            textShadow: `0 4px 12px rgba(0,0,0,0.15),
                         4px 4px 0px rgba(255,255,255,0.5)`,
            marginTop: 20,
            transform: `translateY(${celebrationBounce}px)`,
          }}
        >
          The End!
        </div>
        <div
          style={{
            fontSize: 70,
            color: "#5D4037",
            fontFamily: funFont,
            marginTop: 20,
            textShadow: "2px 2px 8px rgba(255,255,255,0.6)",
          }}
        >
          Thanks for watching!
        </div>
        <div
          style={{
            fontSize: 100,
            marginTop: 30,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
            transform: `translateY(${celebrationBounce * -1}px)`,
          }}
        >
          {"🌟🐑🧶👜🌟"}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===================== MAIN COMPOSITION =====================

export const BaaBaaBlackSheep: React.FC = () => {
  const { fps } = useVideoConfig();

  const introFrames = Math.round(INTRO_DURATION_SECONDS * fps);
  const verseFrames = Math.round(VERSE_DURATION_SECONDS * fps);
  const outroFrames = Math.round(OUTRO_DURATION_SECONDS * fps);

  return (
    <AbsoluteFill style={{ backgroundColor: "#87CEEB" }}>
      {/* ===== VISUAL LAYERS ===== */}

      {/* Intro */}
      <Sequence from={0} durationInFrames={introFrames} premountFor={fps}>
        <IntroScene />
      </Sequence>

      {/* Verse scenes - all 16 lines (2 cycles of 8) */}
      {ALL_VERSES.map((data, i) => {
        const startFrame = introFrames + i * verseFrames;
        return (
          <Sequence
            key={`verse-${i}`}
            from={startFrame}
            durationInFrames={verseFrames}
            premountFor={Math.round(fps * 0.5)}
          >
            <VerseScene data={data} verseIndex={i} totalVerses={TOTAL_LINES} />
          </Sequence>
        );
      })}

      {/* Outro */}
      <Sequence
        from={introFrames + TOTAL_LINES * verseFrames}
        durationInFrames={outroFrames}
        premountFor={fps}
      >
        <OutroScene />
      </Sequence>

      {/* ===== AUDIO LAYERS ===== */}

      {/* Voice narration for each verse */}
      {ALL_VERSES.map((_, i) => {
        const audioStart = introFrames + i * verseFrames + 3;
        return (
          <Sequence
            key={`audio-verse-${i}`}
            from={audioStart}
            durationInFrames={verseFrames}
            layout="none"
          >
            <Audio src={staticFile(`baabaa-audio/verse_${i}.mp3`)} />
          </Sequence>
        );
      })}

      {/* Background music */}
      <Sequence from={0} layout="none">
        <Audio src={staticFile("baabaa-audio/bgm.wav")} volume={0.3} />
      </Sequence>
    </AbsoluteFill>
  );
};
