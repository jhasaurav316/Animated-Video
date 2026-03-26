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
import { loadFont } from "@remotion/google-fonts/Baloo2";
import { loadFont as loadFontPoppins } from "@remotion/google-fonts/Poppins";
import React from "react";

const { fontFamily: funFont } = loadFont("normal", {
  weights: ["400"],
  subsets: ["devanagari"],
});

const { fontFamily: cleanFont } = loadFontPoppins("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["devanagari"],
});

// ===================== TYPES =====================

export type RhymeTheme =
  | "night"
  | "farm"
  | "ocean"
  | "garden"
  | "playground"
  | "space"
  | "forest"
  | "city";

export type HindiRhymeProps = {
  title: string;
  rhymeId: string;
  verses: {
    line: string;
    emoji: string;
  }[];
  theme: RhymeTheme;
  verseDuration?: number;
  introDuration?: number;
  outroDuration?: number;
};

// ===================== THEME DEFINITIONS =====================

interface ThemeConfig {
  gradient: [string, string];
  accent: string;
  subtitleColor: string;
  decorativeEmojis: string[];
  introEmojis: string;
  outroEmojis: string;
  outroText: string;
  outroSubtext: string;
}

const THEMES: Record<RhymeTheme, ThemeConfig> = {
  night: {
    gradient: ["#0A0A2E", "#2D1B69"],
    accent: "#FFD700",
    subtitleColor: "#B8C6FF",
    decorativeEmojis: ["⭐", "🌟", "✨", "💫", "🌙"],
    introEmojis: "⭐🌙⭐",
    outroEmojis: "🌟⭐🌙⭐🌟",
    outroText: "शुभ रात्रि!",
    outroSubtext: "मीठे सपने देखो",
  },
  farm: {
    gradient: ["#87CEEB", "#4CAF50"],
    accent: "#5D4037",
    subtitleColor: "#2E7D32",
    decorativeEmojis: ["🐔", "🐑", "🌻", "🐄", "🐷"],
    introEmojis: "🌾🐑🌾",
    outroEmojis: "🐔🌻🏡🌻🐔",
    outroText: "समाप्त!",
    outroSubtext: "खेत में फिर मिलेंगे!",
  },
  ocean: {
    gradient: ["#0077B6", "#00B4D8"],
    accent: "#CAF0F8",
    subtitleColor: "#90E0EF",
    decorativeEmojis: ["🐠", "🐟", "🐙", "🦀", "🐚"],
    introEmojis: "🌊🐠🌊",
    outroEmojis: "🐟🌊🐬🌊🐟",
    outroText: "समाप्त!",
    outroSubtext: "फिर तैरने आना!",
  },
  garden: {
    gradient: ["#F8BBD0", "#A5D6A7"],
    accent: "#AD1457",
    subtitleColor: "#6A1B9A",
    decorativeEmojis: ["🦋", "🌸", "🌺", "🌷", "🌈"],
    introEmojis: "🌸🦋🌸",
    outroEmojis: "🌺🦋🌈🦋🌺",
    outroText: "समाप्त!",
    outroSubtext: "फिर बगीचे में मिलेंगे!",
  },
  playground: {
    gradient: ["#FFF176", "#FFB74D"],
    accent: "#E65100",
    subtitleColor: "#BF360C",
    decorativeEmojis: ["🎈", "🎉", "🎪", "🎠", "🎨"],
    introEmojis: "🎈🎉🎈",
    outroEmojis: "🎈🎪🎉🎪🎈",
    outroText: "समाप्त!",
    outroSubtext: "फिर खेलेंगे!",
  },
  space: {
    gradient: ["#000000", "#1A0533"],
    accent: "#00E5FF",
    subtitleColor: "#B388FF",
    decorativeEmojis: ["🚀", "🪐", "👾", "🛸", "☄️"],
    introEmojis: "🚀🪐🚀",
    outroEmojis: "🛸🪐🌌🪐🛸",
    outroText: "समाप्त!",
    outroSubtext: "अंतरिक्ष में फिर मिलेंगे!",
  },
  forest: {
    gradient: ["#1B5E20", "#388E3C"],
    accent: "#FFEB3B",
    subtitleColor: "#C8E6C9",
    decorativeEmojis: ["🌲", "🐦", "🍄", "🦌", "🌿"],
    introEmojis: "🌲🦌🌲",
    outroEmojis: "🐦🌲🏕️🌲🐦",
    outroText: "समाप्त!",
    outroSubtext: "जंगल में फिर मिलेंगे!",
  },
  city: {
    gradient: ["#37474F", "#5C6BC0"],
    accent: "#FFD54F",
    subtitleColor: "#B0BEC5",
    decorativeEmojis: ["🏙️", "🚗", "🚌", "🏢", "🌃"],
    introEmojis: "🏙️🚗🏙️",
    outroEmojis: "🚗🏢🌃🏢🚗",
    outroText: "समाप्त!",
    outroSubtext: "फिर शहर में मिलेंगे!",
  },
};

const ACCENT_COLORS = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#FF6BD6",
  "#845EC2",
  "#FF9671",
  "#00C9A7",
];

// ===================== SEEDED RANDOM =====================

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// ===================== NIGHT THEME DECORATIONS =====================

const NightStar: React.FC<{
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

const NIGHT_STARS = Array.from({ length: 80 }, (_, i) => ({
  x: (i * 37 + 13) % 100,
  y: (i * 23 + 7) % 100,
  size: 2 + (i % 5) * 1.5,
  delay: i * 12,
  brightness: 0.5 + (i % 3) * 0.25,
}));

const NightStarField: React.FC = () => (
  <>
    {NIGHT_STARS.map((star, i) => (
      <NightStar key={i} {...star} />
    ))}
  </>
);

const ShootingStar: React.FC<{
  startFrame: number;
  startX: number;
  startY: number;
}> = ({ startFrame, startX, startY }) => {
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
        boxShadow:
          "0 0 10px 5px rgba(255,255,255,0.8), 0 0 30px 10px rgba(255,255,200,0.4)",
        transform: "rotate(-30deg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 4,
          top: 0,
          width: interpolate(progress, [0, 0.5, 1], [0, 80, 40]),
          height: 2,
          background:
            "linear-gradient(to left, rgba(255,255,255,0.8), transparent)",
          transformOrigin: "right center",
        }}
      />
    </div>
  );
};

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
      <div
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,200,0.3) 0%, transparent 70%)",
          top: -45,
          left: -45,
          filter: `blur(${glow}px)`,
        }}
      />
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #FFF9C4 0%, #FFE082 50%, #FFD54F 100%)",
          boxShadow:
            "0 0 40px 15px rgba(255,255,200,0.3), 0 0 80px 30px rgba(255,255,200,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
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

const NightDecorations: React.FC = () => (
  <>
    <NightStarField />
    <ShootingStar startFrame={20} startX={100} startY={50} />
    <ShootingStar startFrame={80} startX={600} startY={100} />
    <Moon scale={0.7} />
  </>
);

// ===================== FARM THEME DECORATIONS =====================

const FarmCloud: React.FC<{ x: number; y: number; size: number; speed: number }> = ({
  x,
  y,
  size,
  speed,
}) => {
  const frame = useCurrentFrame();
  const drift = (frame * speed) % 1920;

  return (
    <div
      style={{
        position: "absolute",
        left: ((x + drift) % 1920) - 200,
        top: `${y}%`,
        transform: `scale(${size})`,
        opacity: 0.9,
      }}
    >
      <div
        style={{
          width: 180,
          height: 70,
          borderRadius: 40,
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 100%)",
            top: -40,
            left: 30,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 65,
            height: 65,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
            top: -25,
            left: 90,
          }}
        />
      </div>
    </div>
  );
};

const FarmSun: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = 20 + Math.sin(frame * 0.04) * 8;
  const rayRotation = frame * 0.5;

  return (
    <div
      style={{
        position: "absolute",
        right: "6%",
        top: "6%",
      }}
    >
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * 360 + rayRotation;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 8,
              height: 60,
              background:
                "linear-gradient(to bottom, rgba(255,200,0,0.6), transparent)",
              borderRadius: 4,
              left: 56,
              top: -30,
              transformOrigin: "center 90px",
              transform: `rotate(${angle}deg)`,
            }}
          />
        );
      })}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #FFE082 0%, #FFB300 60%, #FF8F00 100%)",
          boxShadow: `0 0 ${glow}px ${glow / 2}px rgba(255,200,0,0.4)`,
        }}
      />
    </div>
  );
};

const FarmGrass: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "18%",
        background:
          "linear-gradient(to top, #2E7D32 0%, #43A047 60%, #66BB6A 100%)",
        borderRadius: "50% 50% 0 0 / 20% 20% 0 0",
      }}
    >
      {Array.from({ length: 8 }, (_, i) => {
        const sway = Math.sin(frame * 0.05 + i * 1.5) * 5;
        const flowers = ["🌼", "🌻", "🌷", "🌸"];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: "60%",
              left: `${8 + i * 12}%`,
              fontSize: 40,
              transform: `rotate(${sway}deg)`,
            }}
          >
            {flowers[i % 4]}
          </div>
        );
      })}
    </div>
  );
};

const FarmDecorations: React.FC = () => (
  <>
    <FarmCloud x={100} y={8} size={1} speed={0.3} />
    <FarmCloud x={500} y={15} size={0.8} speed={0.2} />
    <FarmCloud x={900} y={5} size={1.1} speed={0.35} />
    <FarmSun />
    <FarmGrass />
  </>
);

// ===================== OCEAN THEME DECORATIONS =====================

const OceanWave: React.FC<{ offset: number; color: string; height: number }> = ({
  offset,
  color,
  height,
}) => {
  const frame = useCurrentFrame();
  const shift = frame * 1.5 + offset;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: -100,
        right: -100,
        height: `${height}%`,
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 2200 200"
        style={{
          position: "absolute",
          bottom: 0,
          width: "120%",
          height: "100%",
          transform: `translateX(${Math.sin(shift * 0.02) * 50}px)`,
        }}
        preserveAspectRatio="none"
      >
        <path
          d={`M0 100 Q 275 ${60 + Math.sin(shift * 0.03) * 40} 550 100 Q 825 ${140 - Math.sin(shift * 0.03) * 40} 1100 100 Q 1375 ${60 + Math.sin(shift * 0.03) * 40} 1650 100 Q 1925 ${140 - Math.sin(shift * 0.03) * 40} 2200 100 V 200 H 0 Z`}
          fill={color}
        />
      </svg>
    </div>
  );
};

const OceanBubble: React.FC<{
  x: number;
  size: number;
  speed: number;
  delay: number;
}> = ({ x, size, speed, delay }) => {
  const frame = useCurrentFrame();
  const cycleLength = 200;
  const adjustedFrame = (frame + delay) % cycleLength;
  const y = interpolate(adjustedFrame, [0, cycleLength], [110, -10]);
  const wobble = Math.sin(frame * 0.1 + delay) * 15;
  const opacity = interpolate(adjustedFrame, [0, 20, 160, 200], [0, 0.6, 0.6, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: `${x + wobble * 0.5}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.4)",
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)",
        opacity,
      }}
    />
  );
};

const OCEAN_BUBBLES = Array.from({ length: 15 }, (_, i) => ({
  x: (i * 7 + 3) % 95,
  size: 12 + (i % 4) * 8,
  speed: 0.3 + (i % 3) * 0.15,
  delay: i * 30,
}));

const OceanFish: React.FC<{
  y: number;
  size: number;
  speed: number;
  emoji: string;
  direction: number;
}> = ({ y, size, speed, emoji, direction }) => {
  const frame = useCurrentFrame();
  const x = ((frame * speed * direction + 200) % 2300) - 200;

  return (
    <div
      style={{
        position: "absolute",
        left: direction > 0 ? x : undefined,
        right: direction < 0 ? x : undefined,
        top: `${y}%`,
        fontSize: size,
        transform: direction < 0 ? "scaleX(-1)" : undefined,
      }}
    >
      {emoji}
    </div>
  );
};

const OceanDecorations: React.FC = () => (
  <>
    <OceanWave offset={0} color="rgba(0,150,200,0.3)" height={25} />
    <OceanWave offset={100} color="rgba(0,120,180,0.4)" height={20} />
    <OceanWave offset={200} color="rgba(0,90,160,0.5)" height={15} />
    {OCEAN_BUBBLES.map((b, i) => (
      <OceanBubble key={i} {...b} />
    ))}
    <OceanFish y={70} size={50} speed={1.2} emoji="🐠" direction={1} />
    <OceanFish y={80} size={40} speed={0.8} emoji="🐟" direction={-1} />
    <OceanFish y={60} size={35} speed={1.5} emoji="🐙" direction={1} />
  </>
);

// ===================== GARDEN THEME DECORATIONS =====================

const GardenButterfly: React.FC<{
  startX: number;
  startY: number;
  seed: number;
}> = ({ startX, startY, seed }) => {
  const frame = useCurrentFrame();
  const x = startX + Math.sin(frame * 0.03 + seed) * 120;
  const y = startY + Math.cos(frame * 0.025 + seed * 2) * 80;
  const wingFlap = Math.sin(frame * 0.4 + seed) * 30;
  const butterflies = ["🦋", "🦋", "🦋"];

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        fontSize: 40,
        transform: `rotateY(${wingFlap}deg)`,
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
      }}
    >
      {butterflies[Math.floor(seed) % 3]}
    </div>
  );
};

const GardenRainbow: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 0.4], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "-20%",
        left: "10%",
        width: "80%",
        height: "60%",
        borderRadius: "50% 50% 0 0",
        background:
          "conic-gradient(from 180deg, #FF0000, #FF7700, #FFFF00, #00FF00, #0000FF, #8B00FF, transparent 50%)",
        opacity,
        filter: "blur(8px)",
      }}
    />
  );
};

const GardenFlowers: React.FC = () => {
  const frame = useCurrentFrame();
  const flowers = ["🌸", "🌺", "🌷", "🌹", "🌻", "🌼", "💐", "🌸", "🌺", "🌷"];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "15%",
        background: "linear-gradient(to top, #4CAF50 0%, #66BB6A 60%, transparent 100%)",
      }}
    >
      {flowers.map((f, i) => {
        const sway = Math.sin(frame * 0.04 + i * 1.2) * 8;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: "50%",
              left: `${5 + i * 9.5}%`,
              fontSize: 44,
              transform: `rotate(${sway}deg)`,
            }}
          >
            {f}
          </div>
        );
      })}
    </div>
  );
};

const GardenDecorations: React.FC = () => (
  <>
    <GardenRainbow />
    <GardenButterfly startX={15} startY={20} seed={1} />
    <GardenButterfly startX={60} startY={15} seed={2.7} />
    <GardenButterfly startX={80} startY={30} seed={4.3} />
    <GardenButterfly startX={35} startY={25} seed={6.1} />
    <GardenFlowers />
  </>
);

// ===================== PLAYGROUND THEME DECORATIONS =====================

const PlaygroundBalloon: React.FC<{
  x: number;
  color: string;
  delay: number;
  speed: number;
}> = ({ x, color, delay, speed }) => {
  const frame = useCurrentFrame();
  const cycleLen = 300;
  const adjusted = (frame + delay) % cycleLen;
  const y = interpolate(adjusted, [0, cycleLen], [110, -20]);
  const sway = Math.sin(frame * 0.04 + delay) * 20;
  const opacity = interpolate(adjusted, [0, 30, 250, 300], [0, 0.9, 0.9, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: `${x + sway * 0.3}%`,
        top: `${y}%`,
        opacity,
      }}
    >
      <div
        style={{
          width: 50,
          height: 64,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          background: `radial-gradient(circle at 35% 30%, ${color}CC, ${color})`,
          boxShadow: `0 4px 15px ${color}44`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: "50%",
            width: 1,
            height: 40,
            background: "rgba(0,0,0,0.3)",
            transform: `translateX(-50%) rotate(${sway * 0.3}deg)`,
            transformOrigin: "top center",
          }}
        />
      </div>
    </div>
  );
};

const PlaygroundConfetti: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      {Array.from({ length: 30 }, (_, i) => {
        const x = seededRandom(i * 13) * 100;
        const fallSpeed = 0.5 + seededRandom(i * 7) * 1.5;
        const y = ((frame * fallSpeed + seededRandom(i * 17) * 300) % 1200) - 100;
        const rotation = frame * (2 + seededRandom(i * 11) * 4);
        const colors = [
          "#FF6B6B",
          "#FFD93D",
          "#6BCB77",
          "#4D96FF",
          "#FF6BD6",
          "#845EC2",
        ];
        const color = colors[i % colors.length];

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: y,
              width: 10,
              height: 10,
              backgroundColor: color,
              borderRadius: i % 2 === 0 ? "50%" : "2px",
              transform: `rotate(${rotation}deg)`,
              opacity: 0.7,
            }}
          />
        );
      })}
    </>
  );
};

const BALLOON_COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6BD6", "#845EC2"];

const PlaygroundDecorations: React.FC = () => (
  <>
    <PlaygroundConfetti />
    {Array.from({ length: 6 }, (_, i) => (
      <PlaygroundBalloon
        key={i}
        x={8 + i * 15}
        color={BALLOON_COLORS[i]}
        delay={i * 50}
        speed={0.4 + i * 0.1}
      />
    ))}
  </>
);

// ===================== SPACE THEME DECORATIONS =====================

const SpacePlanet: React.FC<{
  x: number;
  y: number;
  size: number;
  color1: string;
  color2: string;
  ringColor?: string;
}> = ({ x, y, size, color1, color2, ringColor }) => {
  const frame = useCurrentFrame();
  const float = Math.sin(frame * 0.02 + x) * 8;
  const rotation = frame * 0.2;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translateY(${float}px)`,
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 30%, ${color1}, ${color2})`,
          boxShadow: `0 0 ${size / 3}px ${size / 6}px ${color1}33`,
          position: "relative",
        }}
      >
        {ringColor && (
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "-30%",
              width: "160%",
              height: "20%",
              borderRadius: "50%",
              border: `3px solid ${ringColor}`,
              transform: `rotateX(70deg) rotate(${rotation}deg)`,
            }}
          />
        )}
      </div>
    </div>
  );
};

const SpaceRocket: React.FC = () => {
  const frame = useCurrentFrame();
  const y = 70 + Math.sin(frame * 0.03) * 15;
  const x = 10 + Math.sin(frame * 0.015) * 8;
  const tilt = Math.sin(frame * 0.04) * 5;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        fontSize: 70,
        transform: `rotate(${-45 + tilt}deg)`,
        filter: "drop-shadow(0 0 15px rgba(255,100,0,0.5))",
      }}
    >
      🚀
    </div>
  );
};

const SPACE_STARS = Array.from({ length: 100 }, (_, i) => ({
  x: seededRandom(i * 31) * 100,
  y: seededRandom(i * 47) * 100,
  size: 1 + seededRandom(i * 19) * 3,
  delay: i * 8,
  brightness: 0.3 + seededRandom(i * 53) * 0.7,
}));

const SpaceDecorations: React.FC = () => (
  <>
    {SPACE_STARS.map((s, i) => (
      <NightStar key={i} {...s} />
    ))}
    <SpacePlanet x={78} y={12} size={80} color1="#E57373" color2="#B71C1C" />
    <SpacePlanet
      x={15}
      y={65}
      size={60}
      color1="#CE93D8"
      color2="#6A1B9A"
      ringColor="#FFD54F"
    />
    <SpacePlanet x={85} y={70} size={45} color1="#81D4FA" color2="#01579B" />
    <SpaceRocket />
  </>
);

// ===================== FOREST THEME DECORATIONS =====================

const ForestTree: React.FC<{ x: number; height: number; shade: string }> = ({
  x,
  height,
  shade,
}) => {
  const frame = useCurrentFrame();
  const sway = Math.sin(frame * 0.02 + x * 0.1) * 3;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "12%",
        left: `${x}%`,
        transform: `rotate(${sway}deg)`,
        transformOrigin: "bottom center",
      }}
    >
      {/* Trunk */}
      <div
        style={{
          width: 20,
          height: height * 0.4,
          background: "linear-gradient(to right, #5D4037, #795548, #5D4037)",
          borderRadius: 4,
          margin: "0 auto",
        }}
      />
      {/* Canopy layers */}
      {[0, 1, 2].map((layer) => (
        <div
          key={layer}
          style={{
            width: 80 - layer * 20,
            height: 50 - layer * 10,
            background: shade,
            borderRadius: "50% 50% 5% 5%",
            position: "absolute",
            bottom: height * 0.4 + layer * 30 - 10,
            left: `calc(50% - ${(80 - layer * 20) / 2}px)`,
          }}
        />
      ))}
    </div>
  );
};

const ForestBird: React.FC<{ x: number; y: number; seed: number }> = ({
  x,
  y,
  seed,
}) => {
  const frame = useCurrentFrame();
  const bx = x + Math.sin(frame * 0.02 + seed) * 80;
  const by = y + Math.cos(frame * 0.03 + seed * 1.5) * 30;
  const wingFlap = Math.sin(frame * 0.3 + seed) > 0 ? 1 : 0.8;

  return (
    <div
      style={{
        position: "absolute",
        left: `${bx}%`,
        top: `${by}%`,
        fontSize: 30,
        transform: `scaleY(${wingFlap})`,
      }}
    >
      🐦
    </div>
  );
};

const ForestMushrooms: React.FC = () => {
  const mushrooms = [
    { x: 12, emoji: "🍄" },
    { x: 30, emoji: "🍄" },
    { x: 55, emoji: "🍄" },
    { x: 75, emoji: "🍄" },
    { x: 90, emoji: "🍄" },
  ];

  return (
    <>
      {mushrooms.map((m, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: "12%",
            left: `${m.x}%`,
            fontSize: 35,
          }}
        >
          {m.emoji}
        </div>
      ))}
    </>
  );
};

const ForestGround: React.FC = () => (
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "15%",
      background:
        "linear-gradient(to top, #33691E 0%, #558B2F 50%, #689F38 100%)",
    }}
  />
);

const ForestDecorations: React.FC = () => (
  <>
    <ForestGround />
    <ForestTree x={5} height={200} shade="#2E7D32" />
    <ForestTree x={20} height={240} shade="#388E3C" />
    <ForestTree x={40} height={180} shade="#1B5E20" />
    <ForestTree x={65} height={220} shade="#2E7D32" />
    <ForestTree x={82} height={200} shade="#388E3C" />
    <ForestTree x={95} height={160} shade="#1B5E20" />
    <ForestMushrooms />
    <ForestBird x={25} y={15} seed={1} />
    <ForestBird x={60} y={10} seed={3.5} />
    <ForestBird x={80} y={20} seed={5.8} />
  </>
);

// ===================== CITY THEME DECORATIONS =====================

const CityBuilding: React.FC<{
  x: number;
  width: number;
  height: number;
  color: string;
}> = ({ x, width, height, color }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        bottom: "8%",
        left: `${x}%`,
        width,
        height,
        background: color,
        borderRadius: "4px 4px 0 0",
      }}
    >
      {/* Windows */}
      {Array.from(
        { length: Math.floor(height / 40) * Math.floor(width / 25) },
        (_, i) => {
          const col = i % Math.floor(width / 25);
          const row = Math.floor(i / Math.floor(width / 25));
          const flicker =
            seededRandom(i * 7 + x) > 0.3
              ? Math.sin(frame * 0.05 + i * 2) > -0.3
                ? 1
                : 0.3
              : 0.1;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 8 + col * 25,
                top: 12 + row * 40,
                width: 14,
                height: 20,
                backgroundColor: `rgba(255,220,100,${flicker})`,
                borderRadius: 1,
              }}
            />
          );
        },
      )}
    </div>
  );
};

const CityCar: React.FC<{ y: number; speed: number; emoji: string; direction: number }> =
  ({ y, speed, emoji, direction }) => {
    const frame = useCurrentFrame();
    const x = ((frame * speed * direction + 200) % 2200) - 200;

    return (
      <div
        style={{
          position: "absolute",
          bottom: `${y}%`,
          left: direction > 0 ? x : undefined,
          right: direction < 0 ? x : undefined,
          fontSize: 40,
          transform: direction < 0 ? "scaleX(-1)" : undefined,
        }}
      >
        {emoji}
      </div>
    );
  };

const CityStreetLights: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = 0.5 + Math.sin(frame * 0.06) * 0.2;

  return (
    <>
      {[15, 40, 65, 90].map((x, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            bottom: "8%",
            left: `${x}%`,
          }}
        >
          <div
            style={{
              width: 4,
              height: 80,
              background: "#546E7A",
              margin: "0 auto",
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(255,220,100,${glow}), transparent)`,
              position: "absolute",
              top: -15,
              left: -13,
              filter: "blur(5px)",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#FFD54F",
              position: "absolute",
              top: -4,
              left: -2,
            }}
          />
        </div>
      ))}
    </>
  );
};

const CityGround: React.FC = () => (
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "10%",
      background: "linear-gradient(to top, #37474F, #455A64)",
    }}
  />
);

const CityDecorations: React.FC = () => (
  <>
    <CityGround />
    <CityBuilding x={2} width={80} height={280} color="#263238" />
    <CityBuilding x={10} width={60} height={350} color="#37474F" />
    <CityBuilding x={20} width={100} height={200} color="#455A64" />
    <CityBuilding x={32} width={70} height={400} color="#263238" />
    <CityBuilding x={45} width={90} height={250} color="#37474F" />
    <CityBuilding x={58} width={60} height={320} color="#455A64" />
    <CityBuilding x={68} width={80} height={180} color="#263238" />
    <CityBuilding x={78} width={100} height={360} color="#37474F" />
    <CityBuilding x={90} width={70} height={280} color="#455A64" />
    <CityStreetLights />
    <CityCar y={2} speed={2} emoji="🚗" direction={1} />
    <CityCar y={3} speed={1.5} emoji="🚌" direction={-1} />
    <CityCar y={1} speed={2.5} emoji="🚕" direction={1} />
  </>
);

// ===================== THEME DECORATION SWITCHER =====================

const ThemeDecorations: React.FC<{ theme: RhymeTheme }> = ({ theme }) => {
  switch (theme) {
    case "night":
      return <NightDecorations />;
    case "farm":
      return <FarmDecorations />;
    case "ocean":
      return <OceanDecorations />;
    case "garden":
      return <GardenDecorations />;
    case "playground":
      return <PlaygroundDecorations />;
    case "space":
      return <SpaceDecorations />;
    case "forest":
      return <ForestDecorations />;
    case "city":
      return <CityDecorations />;
    default:
      return null;
  }
};

// ===================== SPARKLE BURST =====================

const SparkleBurst: React.FC<{ color: string; emojis: string[] }> = ({
  color,
  emojis,
}) => {
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
            {emojis[i % emojis.length]}
          </div>
        );
      })}
    </>
  );
};

// ===================== VERSE SCENE =====================

const VerseScene: React.FC<{
  line: string;
  emoji: string;
  accentColor: string;
  theme: RhymeTheme;
  verseIndex: number;
  totalVerses: number;
  themeConfig: ThemeConfig;
}> = ({ line, emoji, accentColor, theme, verseIndex, totalVerses, themeConfig }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background transition
  const bgOpacity = interpolate(frame, [0, 15], [0, 1], {
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
  const emojiFloat = Math.sin(frame * 0.06) * 15;
  const emojiRotY = Math.sin(frame * 0.04) * 12;

  // Word-by-word text reveal
  const words = line.split(" ");

  // Glow pulse
  const glowPulse = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [0.3, 0.7],
  );

  // Per-verse background gradient using accent color mixed with theme
  const verseGrad0 = themeConfig.gradient[0];
  const verseGrad1 = themeConfig.gradient[1];

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${verseGrad0} 0%, ${verseGrad1} 100%)`,
        opacity: bgOpacity,
        overflow: "hidden",
      }}
    >
      {/* Theme-specific decorations */}
      <ThemeDecorations theme={theme} />

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
              filter: `drop-shadow(0 0 30px ${accentColor}66)`,
            }}
          >
            {emoji}
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
              config: { damping: 8, stiffness: 150 },
            });
            const wordScale = interpolate(wordProgress, [0, 1], [0, 1]);
            const wordY = interpolate(wordProgress, [0, 1], [50, 0]);
            const wordOpacity = interpolate(
              frame,
              [wordDelay, wordDelay + 10],
              [0, 1],
              {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              },
            );

            return (
              <div
                key={wi}
                style={{
                  fontSize: 90,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: cleanFont,
                  textShadow: `0 0 20px ${accentColor}88,
                               0 0 40px ${accentColor}44,
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

        {/* Verse number indicator dots */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            display: "flex",
            gap: 16,
          }}
        >
          {Array.from({ length: totalVerses }, (_, i) => {
            const dotAccent = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <div
                key={i}
                style={{
                  width: i === verseIndex ? 40 : 14,
                  height: 14,
                  borderRadius: 7,
                  backgroundColor:
                    i === verseIndex ? dotAccent : "rgba(255,255,255,0.3)",
                  boxShadow:
                    i === verseIndex ? `0 0 12px ${dotAccent}` : "none",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Sparkle burst around edges */}
      <div style={{ opacity: glowPulse }}>
        <SparkleBurst
          color={accentColor}
          emojis={themeConfig.decorativeEmojis}
        />
      </div>

      {/* Bottom accent strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: `linear-gradient(90deg, ${accentColor}, #fff, ${accentColor})`,
          opacity: 0.5,
          zIndex: 20,
        }}
      />
    </AbsoluteFill>
  );
};

// ===================== INTRO SCENE =====================

const IntroScene: React.FC<{
  title: string;
  theme: RhymeTheme;
  themeConfig: ThemeConfig;
}> = ({ title, theme, themeConfig }) => {
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

  const decoOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Split title into two lines if more than 3 words
  const titleWords = title.split(" ");
  const midpoint = Math.ceil(titleWords.length / 2);
  const line1 = titleWords.slice(0, midpoint).join(" ");
  const line2 = titleWords.slice(midpoint).join(" ");
  const isTwoLines = titleWords.length > 3;

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${themeConfig.gradient[0]} 0%, ${themeConfig.gradient[1]} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Theme decorations */}
      <div style={{ opacity: decoOpacity }}>
        <ThemeDecorations theme={theme} />
      </div>

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
        {/* Decorative emoji header */}
        <div
          style={{
            fontSize: 120,
            lineHeight: 1.2,
            filter: `drop-shadow(0 0 30px ${themeConfig.accent}80)`,
            marginBottom: 20,
          }}
        >
          {themeConfig.introEmojis}
        </div>

        {/* Title text */}
        {isTwoLines ? (
          <>
            <div
              style={{
                fontSize: 120,
                fontWeight: 900,
                color: themeConfig.accent,
                fontFamily: cleanFont,
                textShadow: `0 0 30px ${themeConfig.accent}80,
                             0 0 60px ${themeConfig.accent}40,
                             6px 6px 0px rgba(0,0,0,0.3)`,
                lineHeight: 1.2,
                transform: `rotateY(${titleRotY}deg)`,
              }}
            >
              {line1}
            </div>
            <div
              style={{
                fontSize: 120,
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
              {line2}
            </div>
          </>
        ) : (
          <div
            style={{
              fontSize: 130,
              fontWeight: 900,
              color: themeConfig.accent,
              fontFamily: cleanFont,
              textShadow: `0 0 30px ${themeConfig.accent}80,
                           0 0 60px ${themeConfig.accent}40,
                           6px 6px 0px rgba(0,0,0,0.3)`,
              lineHeight: 1.2,
              transform: `rotateY(${titleRotY}deg)`,
            }}
          >
            {title}
          </div>
        )}
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
            color: themeConfig.subtitleColor,
            fontFamily: funFont,
            textShadow: "3px 3px 15px rgba(0,0,0,0.5)",
          }}
        >
          {"A Children's Nursery Rhyme"}
        </div>
      </div>

      {/* Floating decorative emojis at bottom */}
      {themeConfig.decorativeEmojis.map((decoEmoji, i) => {
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
              filter: `drop-shadow(0 0 15px ${themeConfig.accent}80)`,
              transform: `rotateY(${Math.sin((frame + i * 25) * 0.05) * 15}deg)`,
            }}
          >
            {decoEmoji}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ===================== OUTRO SCENE =====================

const OutroScene: React.FC<{
  theme: RhymeTheme;
  themeConfig: ThemeConfig;
}> = ({ theme, themeConfig }) => {
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

  const gatherProgress = interpolate(frame, [0, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${themeConfig.gradient[0]} 0%, ${themeConfig.gradient[1]} 100%)`,
        overflow: "hidden",
        opacity: fadeOut,
      }}
    >
      {/* Theme decorations */}
      <ThemeDecorations theme={theme} />

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
            filter: `drop-shadow(0 0 20px ${themeConfig.accent}80)`,
          }}
        >
          {themeConfig.outroEmojis}
        </div>
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: themeConfig.accent,
            fontFamily: cleanFont,
            textShadow: `0 0 30px ${themeConfig.accent}80,
                         0 0 60px ${themeConfig.accent}40,
                         8px 8px 0px rgba(0,0,0,0.3)`,
            marginTop: 20,
            transform: `rotateY(${Math.sin(frame * 0.04) * 8}deg)`,
          }}
        >
          {themeConfig.outroText}
        </div>
        <div
          style={{
            fontSize: 80,
            color: themeConfig.subtitleColor,
            fontFamily: funFont,
            marginTop: 20,
            textShadow: "3px 3px 15px rgba(0,0,0,0.5)",
          }}
        >
          {themeConfig.outroSubtext}
        </div>
        <div
          style={{
            fontSize: 120,
            marginTop: 30,
            filter: `drop-shadow(0 0 15px ${themeConfig.accent}40)`,
          }}
        >
          {"🎵🎶🎵"}
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
              backgroundColor: themeConfig.accent,
              boxShadow: `0 0 10px 5px ${themeConfig.accent}66`,
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

export const HindiRhymeTemplate: React.FC<HindiRhymeProps> = ({
  title,
  rhymeId,
  verses,
  theme,
  verseDuration = 4,
  introDuration = 5,
  outroDuration = 5,
}) => {
  const { fps } = useVideoConfig();

  const themeConfig = THEMES[theme];
  const introFrames = Math.round(introDuration * fps);
  const verseFrames = Math.round(verseDuration * fps);
  const outroFrames = Math.round(outroDuration * fps);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* ===== VISUAL LAYERS ===== */}

      {/* Intro */}
      <Sequence from={0} durationInFrames={introFrames} premountFor={fps}>
        <IntroScene title={title} theme={theme} themeConfig={themeConfig} />
      </Sequence>

      {/* Verse scenes */}
      {verses.map((verse, i) => {
        const startFrame = introFrames + i * verseFrames;
        const accentColor = ACCENT_COLORS[i % ACCENT_COLORS.length];
        return (
          <Sequence
            key={`verse-${i}`}
            from={startFrame}
            durationInFrames={verseFrames}
            premountFor={Math.round(fps * 0.5)}
          >
            <VerseScene
              line={verse.line}
              emoji={verse.emoji}
              accentColor={accentColor}
              theme={theme}
              verseIndex={i}
              totalVerses={verses.length}
              themeConfig={themeConfig}
            />
          </Sequence>
        );
      })}

      {/* Outro */}
      <Sequence
        from={introFrames + verses.length * verseFrames}
        durationInFrames={outroFrames}
        premountFor={fps}
      >
        <OutroScene theme={theme} themeConfig={themeConfig} />
      </Sequence>

      {/* ===== AUDIO LAYERS ===== */}

      {/* Voice narration for each verse */}
      {verses.map((_, i) => {
        const audioStart = introFrames + i * verseFrames + 3;
        return (
          <Sequence
            key={`audio-verse-${i}`}
            from={audioStart}
            durationInFrames={verseFrames}
            layout="none"
          >
            <Audio src={staticFile(`${rhymeId}-audio/verse_${i}.mp3`)} />
          </Sequence>
        );
      })}

      {/* Background music */}
      <Sequence from={0} layout="none">
        <Audio src={staticFile(`${rhymeId}-audio/bgm.wav`)} volume={0.3} />
      </Sequence>
    </AbsoluteFill>
  );
};
