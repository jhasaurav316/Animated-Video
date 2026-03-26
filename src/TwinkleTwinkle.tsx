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

const VERSES: VerseLineData[] = [
  {
    line: "Twinkle, twinkle, little star",
    emoji: "⭐",
    bgGradient: ["#0F0C29", "#302B63"],
    accentColor: "#FFD700",
  },
  {
    line: "How I wonder what you are!",
    emoji: "🤔",
    bgGradient: ["#1A1A4E", "#2D2B70"],
    accentColor: "#87CEEB",
  },
  {
    line: "Up above the world so high",
    emoji: "🌍",
    bgGradient: ["#0B0B3B", "#1B1464"],
    accentColor: "#9B59B6",
  },
  {
    line: "Like a diamond in the sky",
    emoji: "💎",
    bgGradient: ["#16163A", "#3D2C8D"],
    accentColor: "#E0E7FF",
  },
  {
    line: "Twinkle, twinkle, little star",
    emoji: "⭐",
    bgGradient: ["#0F0C29", "#302B63"],
    accentColor: "#FFD700",
  },
  {
    line: "How I wonder what you are!",
    emoji: "🌟",
    bgGradient: ["#1A0533", "#3A1078"],
    accentColor: "#F39C12",
  },
];

const VERSE_DURATION_SECONDS = 5;
const INTRO_DURATION_SECONDS = 5;
const OUTRO_DURATION_SECONDS = 5;

// ===================== STAR FIELD =====================

const Star: React.FC<{
  x: number;
  y: number;
  size: number;
  delay: number;
  brightness: number;
}> = ({ x, y, size, delay, brightness }) => {
  const frame = useCurrentFrame();

  const twinkle = interpolate(
    Math.sin((frame + delay) * 0.08),
    [-1, 1],
    [0.2, brightness],
  );

  const scale = interpolate(
    Math.sin((frame + delay * 2) * 0.06),
    [-1, 1],
    [0.7, 1.3],
  );

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "#fff",
        opacity: twinkle,
        transform: `scale(${scale})`,
        boxShadow: `0 0 ${size * 2}px ${size}px rgba(255,255,255,${twinkle * 0.5}),
                     0 0 ${size * 4}px ${size * 2}px rgba(255,255,200,${twinkle * 0.2})`,
      }}
    />
  );
};

// Generate fixed star positions
const STARS = Array.from({ length: 80 }, (_, i) => ({
  x: ((i * 37 + 13) % 100),
  y: ((i * 23 + 7) % 100),
  size: 2 + (i % 5) * 1.5,
  delay: i * 12,
  brightness: 0.5 + (i % 3) * 0.25,
}));

const StarField: React.FC = () => {
  return (
    <>
      {STARS.map((star, i) => (
        <Star key={i} {...star} />
      ))}
    </>
  );
};

// ===================== SHOOTING STAR =====================

const ShootingStar: React.FC<{ startFrame: number; startX: number; startY: number }> = ({
  startFrame,
  startX,
  startY,
}) => {
  const frame = useCurrentFrame();
  const relFrame = frame - startFrame;

  if (relFrame < 0 || relFrame > 25) return null;

  const progress = interpolate(relFrame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(relFrame, [0, 5, 20, 25], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const x = startX + progress * 400;
  const y = startY + progress * 200;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: "#fff",
        opacity,
        boxShadow: "0 0 10px 5px rgba(255,255,255,0.8), 0 0 30px 10px rgba(255,255,200,0.4)",
        transform: `rotate(-30deg)`,
      }}
    >
      {/* Trail */}
      <div
        style={{
          position: "absolute",
          right: 4,
          top: 0,
          width: interpolate(progress, [0, 0.5, 1], [0, 80, 40]),
          height: 2,
          background: "linear-gradient(to left, rgba(255,255,255,0.8), transparent)",
          transformOrigin: "right center",
        }}
      />
    </div>
  );
};

// ===================== MOON =====================

const Moon: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  const frame = useCurrentFrame();
  const float = Math.sin(frame * 0.03) * 10;
  const glow = 30 + Math.sin(frame * 0.05) * 10;

  return (
    <div
      style={{
        position: "absolute",
        right: "8%",
        top: "8%",
        transform: `translateY(${float}px) scale(${scale})`,
      }}
    >
      {/* Moon glow */}
      <div
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,200,0.3) 0%, transparent 70%)",
          top: -45,
          left: -45,
          filter: `blur(${glow}px)`,
        }}
      />
      {/* Moon body */}
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FFF9C4 0%, #FFE082 50%, #FFD54F 100%)",
          boxShadow: `0 0 40px 15px rgba(255,255,200,0.3),
                       0 0 80px 30px rgba(255,255,200,0.15)`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Craters */}
        <div
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "rgba(200,180,100,0.3)",
            top: 35,
            left: 40,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "rgba(200,180,100,0.25)",
            top: 75,
            left: 85,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 15,
            height: 15,
            borderRadius: "50%",
            background: "rgba(200,180,100,0.2)",
            top: 100,
            left: 45,
          }}
        />
      </div>
    </div>
  );
};

// ===================== SPARKLE BURST =====================

const SparkleBurst: React.FC<{ color: string }> = ({ color }) => {
  const frame = useCurrentFrame();

  return (
    <>
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2 + frame * 0.02;
        const r = 280 + Math.sin(frame * 0.05 + i * 2) * 60;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        const sparkleOpacity = interpolate(
          Math.sin((frame + i * 20) * 0.1),
          [-1, 1],
          [0.1, 0.8],
        );

        const emojis = ["✨", "⭐", "✴️"];

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              fontSize: 24 + (i % 3) * 8,
              opacity: sparkleOpacity,
              transform: `rotate(${frame * 2 + i * 30}deg)`,
              filter: `drop-shadow(0 0 8px ${color})`,
            }}
          >
            {emojis[i % 3]}
          </div>
        );
      })}
    </>
  );
};

// ===================== VERSE SCENE =====================

const VerseScene: React.FC<{ data: VerseLineData; verseIndex: number }> = ({
  data,
  verseIndex,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background transition
  const bgOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Emoji entrance
  const emojiProgress = spring({
    frame: frame - 5,
    fps,
    config: { damping: 8, stiffness: 120, mass: 1 },
  });
  const emojiScale = interpolate(emojiProgress, [0, 1], [0, 1]);
  const emojiFloat = Math.sin(frame * 0.06) * 15;
  const emojiRotY = Math.sin(frame * 0.04) * 12;

  // Text entrance - word by word
  const words = data.line.split(" ");

  // Glow pulse
  const glowPulse = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [0.3, 0.7],
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${data.bgGradient[0]} 0%, ${data.bgGradient[1]} 100%)`,
        opacity: bgOpacity,
        overflow: "hidden",
      }}
    >
      {/* Star field */}
      <StarField />

      {/* Shooting stars at certain intervals */}
      <ShootingStar startFrame={20} startX={100} startY={50} />
      <ShootingStar startFrame={80} startX={600} startY={100} />

      {/* Moon */}
      <Moon scale={0.7} />

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
            perspective: 1000,
            transform: `scale(${emojiScale}) translateY(${emojiFloat}px)`,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 200,
              lineHeight: 1,
              transform: `rotateY(${emojiRotY}deg)`,
              filter: `drop-shadow(0 0 30px ${data.accentColor}66)`,
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
            gap: 20,
            maxWidth: 1400,
            padding: "0 60px",
          }}
        >
          {words.map((word, wi) => {
            const wordDelay = 15 + wi * 8;
            const wordProgress = spring({
              frame: frame - wordDelay,
              fps,
              config: { damping: 12, stiffness: 150 },
            });
            const wordScale = interpolate(wordProgress, [0, 1], [0, 1]);
            const wordY = interpolate(wordProgress, [0, 1], [50, 0]);
            const wordOpacity = interpolate(frame, [wordDelay, wordDelay + 10], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });

            return (
              <div
                key={wi}
                style={{
                  fontSize: 90,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: cleanFont,
                  textShadow: `0 0 20px ${data.accentColor}88,
                               0 0 40px ${data.accentColor}44,
                               4px 4px 0px rgba(0,0,0,0.3)`,
                  opacity: wordOpacity,
                  transform: `scale(${wordScale}) translateY(${wordY}px)`,
                }}
              >
                {word}
              </div>
            );
          })}
        </div>

        {/* Verse number indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            display: "flex",
            gap: 16,
          }}
        >
          {VERSES.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === verseIndex ? 40 : 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: i === verseIndex ? data.accentColor : "rgba(255,255,255,0.3)",
                transition: "none",
                boxShadow: i === verseIndex ? `0 0 12px ${data.accentColor}` : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Sparkle burst around edges */}
      <div style={{ opacity: glowPulse }}>
        <SparkleBurst color={data.accentColor} />
      </div>

      {/* Bottom gradient strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: `linear-gradient(90deg, ${data.accentColor}, #fff, ${data.accentColor})`,
          opacity: 0.5,
        }}
      />
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
  const titleRotY = Math.sin(frame * 0.03) * 5;

  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subtitleY = interpolate(frame, [40, 60], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Stars fade in
  const starsOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0A0A2E 0%, #1A1A4E 40%, #2D1B69 100%)",
        overflow: "hidden",
      }}
    >
      {/* Stars */}
      <div style={{ opacity: starsOpacity }}>
        <StarField />
      </div>

      {/* Moon */}
      <Moon />

      {/* Shooting star */}
      <ShootingStar startFrame={30} startX={200} startY={80} />
      <ShootingStar startFrame={70} startX={800} startY={120} />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "15%",
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
            fontSize: 120,
            lineHeight: 1.2,
            filter: "drop-shadow(0 0 30px rgba(255,215,0,0.5))",
            marginBottom: 20,
          }}
        >
          {"⭐🌙⭐"}
        </div>
        <div
          style={{
            fontSize: 130,
            fontWeight: 900,
            color: "#FFD700",
            fontFamily: cleanFont,
            textShadow: `0 0 30px rgba(255,215,0,0.5),
                         0 0 60px rgba(255,215,0,0.3),
                         6px 6px 0px rgba(0,0,0,0.3)`,
            lineHeight: 1.2,
            transform: `rotateY(${titleRotY}deg)`,
          }}
        >
          Twinkle Twinkle
        </div>
        <div
          style={{
            fontSize: 130,
            fontWeight: 900,
            color: "#fff",
            fontFamily: cleanFont,
            textShadow: `0 0 20px rgba(255,255,255,0.4),
                         0 0 50px rgba(200,200,255,0.2),
                         6px 6px 0px rgba(0,0,0,0.3)`,
            lineHeight: 1.2,
            transform: `rotateY(${titleRotY}deg)`,
          }}
        >
          Little Star
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
            fontSize: 70,
            color: "#B8C6FF",
            fontFamily: funFont,
            textShadow: "3px 3px 15px rgba(0,0,0,0.5)",
          }}
        >
          {"A Children's Nursery Rhyme"}
        </div>
      </div>

      {/* Floating stars at bottom */}
      {["⭐", "🌟", "✨", "💫", "⭐"].map((emoji, i) => {
        const bounce = Math.abs(Math.sin((frame + i * 18) * 0.07)) * 20;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: `${8 + bounce}%`,
              left: `${8 + i * 18}%`,
              fontSize: 80,
              zIndex: 10,
              opacity: interpolate(frame, [60 + i * 6, 75 + i * 6], [0, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              }),
              filter: "drop-shadow(0 0 15px rgba(255,215,0,0.5))",
              transform: `rotateY(${Math.sin((frame + i * 25) * 0.05) * 15}deg)`,
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
    config: { damping: 10, stiffness: 80 },
  });
  const scale = interpolate(progress, [0, 1], [0.5, 1]);

  const fadeOut = interpolate(frame, [110, 150], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Stars gathering into center
  const gatherProgress = interpolate(frame, [0, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0A0A2E 0%, #1B1464 50%, #2D1B69 100%)",
        overflow: "hidden",
        opacity: fadeOut,
      }}
    >
      {/* Stars */}
      <StarField />

      {/* Moon */}
      <Moon />

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
          perspective: 1000,
        }}
      >
        <div
          style={{
            fontSize: 160,
            lineHeight: 1.2,
            filter: "drop-shadow(0 0 20px rgba(255,215,0,0.5))",
          }}
        >
          {"🌟⭐🌙⭐🌟"}
        </div>
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: "#FFD700",
            fontFamily: cleanFont,
            textShadow: `0 0 30px rgba(255,215,0,0.5),
                         0 0 60px rgba(255,215,0,0.3),
                         8px 8px 0px rgba(0,0,0,0.3)`,
            marginTop: 20,
            transform: `rotateY(${Math.sin(frame * 0.04) * 8}deg)`,
          }}
        >
          Good Night!
        </div>
        <div
          style={{
            fontSize: 80,
            color: "#B8C6FF",
            fontFamily: funFont,
            marginTop: 20,
            textShadow: "3px 3px 15px rgba(0,0,0,0.5)",
          }}
        >
          Sweet Dreams Little One
        </div>
        <div
          style={{
            fontSize: 120,
            marginTop: 30,
            filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3))",
          }}
        >
          {"😴💤🌙"}
        </div>
      </div>

      {/* Gathering sparkles */}
      {Array.from({ length: 20 }, (_, i) => {
        const startAngle = (i / 20) * Math.PI * 2;
        const startR = 500;
        const endR = 50 + (i % 5) * 30;
        const r = interpolate(gatherProgress, [0, 1], [startR, endR]);
        const angle = startAngle + frame * 0.01;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#FFD700",
              boxShadow: "0 0 10px 5px rgba(255,215,0,0.4)",
              opacity: interpolate(frame, [0, 20], [0, 0.8], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              }),
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ===================== MAIN COMPOSITION =====================

export const TwinkleTwinkle: React.FC = () => {
  const { fps } = useVideoConfig();

  const introFrames = Math.round(INTRO_DURATION_SECONDS * fps);
  const verseFrames = Math.round(VERSE_DURATION_SECONDS * fps);
  const outroFrames = Math.round(OUTRO_DURATION_SECONDS * fps);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* ===== VISUAL LAYERS ===== */}

      {/* Intro */}
      <Sequence from={0} durationInFrames={introFrames} premountFor={fps}>
        <IntroScene />
      </Sequence>

      {/* Verse scenes */}
      {VERSES.map((data, i) => {
        const startFrame = introFrames + i * verseFrames;
        return (
          <Sequence
            key={`verse-${i}`}
            from={startFrame}
            durationInFrames={verseFrames}
            premountFor={Math.round(fps * 0.5)}
          >
            <VerseScene data={data} verseIndex={i} />
          </Sequence>
        );
      })}

      {/* Outro */}
      <Sequence
        from={introFrames + VERSES.length * verseFrames}
        durationInFrames={outroFrames}
        premountFor={fps}
      >
        <OutroScene />
      </Sequence>

      {/* ===== AUDIO LAYERS ===== */}

      {/* Voice narration for each verse */}
      {VERSES.map((_, i) => {
        const audioStart = introFrames + i * verseFrames + 3;
        return (
          <Sequence
            key={`audio-verse-${i}`}
            from={audioStart}
            durationInFrames={verseFrames}
            layout="none"
          >
            <Audio src={staticFile(`twinkle-audio/verse_${i}.mp3`)} />
          </Sequence>
        );
      })}

      {/* Background lullaby music */}
      <Sequence from={0} layout="none">
        <Audio src={staticFile("twinkle-audio/bgm.wav")} volume={0.35} />
      </Sequence>
    </AbsoluteFill>
  );
};
