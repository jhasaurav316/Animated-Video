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
import { loadFont as loadFontLora } from "@remotion/google-fonts/Lora";
import React from "react";

const { fontFamily: funFont } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

const { fontFamily: cleanFont } = loadFontPoppins("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const { fontFamily: storyFont } = loadFontLora("normal", {
  weights: ["400", "600", "700"],
  subsets: ["latin"],
});

// ===================== TYPES =====================

export type StoryTheme =
  | "night"
  | "farm"
  | "ocean"
  | "garden"
  | "playground"
  | "space"
  | "forest"
  | "city";

export type EnglishStoryProps = {
  title: string;
  storyId: string;
  scenes: {
    line: string;
    emoji: string;
  }[];
  theme: StoryTheme;
  moral?: string;
  sceneDuration?: number;
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
}

const THEMES: Record<StoryTheme, ThemeConfig> = {
  night: {
    gradient: ["#0A0A2E", "#2D1B69"],
    accent: "#FFD700",
    subtitleColor: "#B8C6FF",
    decorativeEmojis: ["⭐", "🌟", "✨", "💫", "🌙"],
    introEmojis: "⭐🌙⭐",
    outroEmojis: "🌟⭐🌙⭐🌟",
  },
  farm: {
    gradient: ["#87CEEB", "#4CAF50"],
    accent: "#5D4037",
    subtitleColor: "#2E7D32",
    decorativeEmojis: ["🐔", "🐑", "🌻", "🐄", "🐷"],
    introEmojis: "🌾🐑🌾",
    outroEmojis: "🐔🌻🏡🌻🐔",
  },
  ocean: {
    gradient: ["#0077B6", "#00B4D8"],
    accent: "#CAF0F8",
    subtitleColor: "#90E0EF",
    decorativeEmojis: ["🐠", "🐟", "🐙", "🦀", "🐚"],
    introEmojis: "🌊🐠🌊",
    outroEmojis: "🐟🌊🐬🌊🐟",
  },
  garden: {
    gradient: ["#F8BBD0", "#A5D6A7"],
    accent: "#AD1457",
    subtitleColor: "#6A1B9A",
    decorativeEmojis: ["🦋", "🌸", "🌺", "🌷", "🌈"],
    introEmojis: "🌸🦋🌸",
    outroEmojis: "🌺🦋🌈🦋🌺",
  },
  playground: {
    gradient: ["#FFF176", "#FFB74D"],
    accent: "#E65100",
    subtitleColor: "#BF360C",
    decorativeEmojis: ["🎈", "🎉", "🎪", "🎠", "🎨"],
    introEmojis: "🎈🎉🎈",
    outroEmojis: "🎈🎪🎉🎪🎈",
  },
  space: {
    gradient: ["#000000", "#1A0533"],
    accent: "#00E5FF",
    subtitleColor: "#B388FF",
    decorativeEmojis: ["🚀", "🪐", "👾", "🛸", "☄️"],
    introEmojis: "🚀🪐🚀",
    outroEmojis: "🛸🪐🌌🪐🛸",
  },
  forest: {
    gradient: ["#1B5E20", "#388E3C"],
    accent: "#FFEB3B",
    subtitleColor: "#C8E6C9",
    decorativeEmojis: ["🌲", "🐦", "🍄", "🦌", "🌿"],
    introEmojis: "🌲🦌🌲",
    outroEmojis: "🐦🌲🏕️🌲🐦",
  },
  city: {
    gradient: ["#37474F", "#5C6BC0"],
    accent: "#FFD54F",
    subtitleColor: "#B0BEC5",
    decorativeEmojis: ["🏙️", "🚗", "🚌", "🏢", "🌃"],
    introEmojis: "🏙️🚗🏙️",
    outroEmojis: "🚗🏢🌃🏢🚗",
  },
};

const ACCENT_COLORS = [
  "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF",
  "#FF6BD6", "#845EC2", "#FF9671", "#00C9A7",
];

// ===================== HELPERS =====================

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function shiftColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, Math.max(0, ((num >> 16) & 0xff) + Math.round(255 * percent)));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + Math.round(255 * percent)));
  const b = Math.min(255, Math.max(0, (num & 0xff) + Math.round(255 * percent)));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

// ===================== NIGHT THEME DECORATIONS =====================

const NightStar: React.FC<{
  x: number; y: number; size: number; delay: number; brightness: number;
}> = ({ x, y, size, delay, brightness }) => {
  const frame = useCurrentFrame();
  const twinkle = interpolate(Math.sin((frame + delay) * 0.08), [-1, 1], [0.2, brightness]);
  const scale = interpolate(Math.sin((frame + delay * 2) * 0.06), [-1, 1], [0.7, 1.3]);
  return (
    <div style={{
      position: "absolute", left: `${x}%`, top: `${y}%`,
      width: size, height: size, borderRadius: "50%",
      backgroundColor: "#fff", opacity: twinkle,
      transform: `scale(${scale})`,
      boxShadow: `0 0 ${size * 2}px ${size}px rgba(255,255,255,${twinkle * 0.5}),
                   0 0 ${size * 4}px ${size * 2}px rgba(255,255,200,${twinkle * 0.2})`,
    }} />
  );
};

const NIGHT_STARS = Array.from({ length: 80 }, (_, i) => ({
  x: (i * 37 + 13) % 100, y: (i * 23 + 7) % 100,
  size: 2 + (i % 5) * 1.5, delay: i * 12, brightness: 0.5 + (i % 3) * 0.25,
}));

const Moon: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  const frame = useCurrentFrame();
  const float = Math.sin(frame * 0.03) * 10;
  const glow = 30 + Math.sin(frame * 0.05) * 10;
  return (
    <div style={{ position: "absolute", right: "8%", top: "8%", transform: `translateY(${float}px) scale(${scale})` }}>
      <div style={{
        position: "absolute", width: 250, height: 250, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,200,0.3) 0%, transparent 70%)",
        top: -45, left: -45, filter: `blur(${glow}px)`,
      }} />
      <div style={{
        width: 160, height: 160, borderRadius: "50%",
        background: "linear-gradient(135deg, #FFF9C4 0%, #FFE082 50%, #FFD54F 100%)",
        boxShadow: "0 0 40px 15px rgba(255,255,200,0.3)",
      }} />
    </div>
  );
};

const NightDecorations: React.FC = () => (
  <>{NIGHT_STARS.map((s, i) => <NightStar key={i} {...s} />)}<Moon scale={0.7} /></>
);

// ===================== SIMPLE THEME DECORATIONS =====================

const FarmDecorations: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "18%",
        background: "linear-gradient(to top, #2E7D32 0%, #43A047 60%, #66BB6A 100%)",
        borderRadius: "50% 50% 0 0 / 20% 20% 0 0" }}>
        {["🌼", "🌻", "🌷", "🌸", "🌼", "🌻", "🌷", "🌸"].map((f, i) => (
          <div key={i} style={{
            position: "absolute", bottom: "60%", left: `${8 + i * 12}%`,
            fontSize: 40, transform: `rotate(${Math.sin(frame * 0.05 + i * 1.5) * 5}deg)`,
          }}>{f}</div>
        ))}
      </div>
      <div style={{ position: "absolute", right: "6%", top: "6%" }}>
        <div style={{
          width: 120, height: 120, borderRadius: "50%",
          background: "radial-gradient(circle, #FFE082 0%, #FFB300 60%, #FF8F00 100%)",
          boxShadow: `0 0 ${20 + Math.sin(frame * 0.04) * 8}px rgba(255,200,0,0.4)`,
        }} />
      </div>
    </>
  );
};

const OceanDecorations: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      {[0, 100, 200].map((offset, i) => (
        <div key={i} style={{ position: "absolute", bottom: 0, left: -100, right: -100, height: `${25 - i * 5}%`, overflow: "hidden" }}>
          <svg viewBox="0 0 2200 200" style={{ position: "absolute", bottom: 0, width: "120%", height: "100%",
            transform: `translateX(${Math.sin((frame * 1.5 + offset) * 0.02) * 50}px)` }} preserveAspectRatio="none">
            <path d={`M0 100 Q 550 ${60 + Math.sin((frame * 1.5 + offset) * 0.03) * 40} 1100 100 Q 1650 ${140 - Math.sin((frame * 1.5 + offset) * 0.03) * 40} 2200 100 V 200 H 0 Z`}
              fill={`rgba(0,${120 + i * 30},${180 + i * 20},${0.3 + i * 0.1})`} />
          </svg>
        </div>
      ))}
      {Array.from({ length: 10 }, (_, i) => {
        const y = interpolate((frame + i * 30) % 200, [0, 200], [110, -10]);
        return (
          <div key={i} style={{
            position: "absolute", left: `${(i * 10 + 3) % 95}%`, top: `${y}%`,
            width: 12 + (i % 4) * 8, height: 12 + (i % 4) * 8, borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.4)",
            opacity: interpolate((frame + i * 30) % 200, [0, 20, 160, 200], [0, 0.6, 0.6, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
          }} />
        );
      })}
    </>
  );
};

const GardenDecorations: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      <div style={{
        position: "absolute", top: "-20%", left: "10%", width: "80%", height: "60%",
        borderRadius: "50% 50% 0 0",
        background: "conic-gradient(from 180deg, #FF0000, #FF7700, #FFFF00, #00FF00, #0000FF, #8B00FF, transparent 50%)",
        opacity: 0.3, filter: "blur(8px)",
      }} />
      {[{ x: 15, y: 20, s: 1 }, { x: 60, y: 15, s: 2.7 }, { x: 80, y: 30, s: 4.3 }].map((b, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${b.x + Math.sin(frame * 0.03 + b.s) * 12}%`,
          top: `${b.y + Math.cos(frame * 0.025 + b.s * 2) * 8}%`,
          fontSize: 40, transform: `rotateY(${Math.sin(frame * 0.4 + b.s) * 30}deg)`,
        }}>🦋</div>
      ))}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "15%",
        background: "linear-gradient(to top, #4CAF50 0%, #66BB6A 60%, transparent 100%)" }}>
        {["🌸", "🌺", "🌷", "🌹", "🌻", "🌼", "💐", "🌸", "🌺", "🌷"].map((f, i) => (
          <div key={i} style={{
            position: "absolute", bottom: "50%", left: `${5 + i * 9.5}%`,
            fontSize: 44, transform: `rotate(${Math.sin(frame * 0.04 + i * 1.2) * 8}deg)`,
          }}>{f}</div>
        ))}
      </div>
    </>
  );
};

const ForestDecorations: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "15%",
        background: "linear-gradient(to top, #33691E 0%, #558B2F 50%, #689F38 100%)" }} />
      {[{ x: 5, h: 200, c: "#2E7D32" }, { x: 20, h: 240, c: "#388E3C" }, { x: 40, h: 180, c: "#1B5E20" },
        { x: 65, h: 220, c: "#2E7D32" }, { x: 82, h: 200, c: "#388E3C" }, { x: 95, h: 160, c: "#1B5E20" }
      ].map((t, i) => (
        <div key={i} style={{
          position: "absolute", bottom: "12%", left: `${t.x}%`,
          transform: `rotate(${Math.sin(frame * 0.02 + t.x * 0.1) * 3}deg)`, transformOrigin: "bottom center",
        }}>
          <div style={{ width: 20, height: t.h * 0.4, background: "linear-gradient(to right, #5D4037, #795548, #5D4037)", borderRadius: 4, margin: "0 auto" }} />
          {[0, 1, 2].map(l => (
            <div key={l} style={{
              width: 80 - l * 20, height: 50 - l * 10, background: t.c,
              borderRadius: "50% 50% 5% 5%", position: "absolute",
              bottom: t.h * 0.4 + l * 30 - 10, left: `calc(50% - ${(80 - l * 20) / 2}px)`,
            }} />
          ))}
        </div>
      ))}
      {[{ x: 25, y: 15, s: 1 }, { x: 60, y: 10, s: 3.5 }, { x: 80, y: 20, s: 5.8 }].map((b, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${b.x + Math.sin(frame * 0.02 + b.s) * 8}%`,
          top: `${b.y + Math.cos(frame * 0.03 + b.s * 1.5) * 3}%`,
          fontSize: 30,
        }}>🐦</div>
      ))}
    </>
  );
};

const CityDecorations: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "10%",
        background: "linear-gradient(to top, #37474F, #455A64)" }} />
      {[
        { x: 2, w: 80, h: 280, c: "#263238" }, { x: 10, w: 60, h: 350, c: "#37474F" },
        { x: 20, w: 100, h: 200, c: "#455A64" }, { x: 32, w: 70, h: 400, c: "#263238" },
        { x: 58, w: 60, h: 320, c: "#455A64" }, { x: 78, w: 100, h: 360, c: "#37474F" },
        { x: 90, w: 70, h: 280, c: "#455A64" },
      ].map((b, i) => (
        <div key={i} style={{ position: "absolute", bottom: "8%", left: `${b.x}%`,
          width: b.w, height: b.h, background: b.c, borderRadius: "4px 4px 0 0" }}>
          {Array.from({ length: Math.floor(b.h / 40) * Math.floor(b.w / 25) }, (_, j) => {
            const col = j % Math.floor(b.w / 25);
            const row = Math.floor(j / Math.floor(b.w / 25));
            const flicker = seededRandom(j * 7 + b.x) > 0.3 ? (Math.sin(frame * 0.05 + j * 2) > -0.3 ? 1 : 0.3) : 0.1;
            return (
              <div key={j} style={{
                position: "absolute", left: 8 + col * 25, top: 12 + row * 40,
                width: 14, height: 20, backgroundColor: `rgba(255,220,100,${flicker})`, borderRadius: 1,
              }} />
            );
          })}
        </div>
      ))}
    </>
  );
};

const SpaceDecorations: React.FC = () => {
  const frame = useCurrentFrame();
  const SPACE_STARS = Array.from({ length: 100 }, (_, i) => ({
    x: seededRandom(i * 31) * 100, y: seededRandom(i * 47) * 100,
    size: 1 + seededRandom(i * 19) * 3, delay: i * 8, brightness: 0.3 + seededRandom(i * 53) * 0.7,
  }));
  return (
    <>
      {SPACE_STARS.map((s, i) => <NightStar key={i} {...s} />)}
      <div style={{
        position: "absolute", left: "78%", top: "12%",
        transform: `translateY(${Math.sin(frame * 0.02 + 78) * 8}px)`,
      }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #E57373, #B71C1C)",
          boxShadow: "0 0 26px 13px #E5737333" }} />
      </div>
      <div style={{
        position: "absolute", left: "10%", top: "70%",
        fontSize: 70, transform: `rotate(${-45 + Math.sin(frame * 0.04) * 5}deg)`,
        filter: "drop-shadow(0 0 15px rgba(255,100,0,0.5))",
      }}>🚀</div>
    </>
  );
};

const PlaygroundDecorations: React.FC = () => {
  const frame = useCurrentFrame();
  const BALLOON_COLORS = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6BD6", "#845EC2"];
  return (
    <>
      {Array.from({ length: 30 }, (_, i) => {
        const x = seededRandom(i * 13) * 100;
        const y = ((frame * (0.5 + seededRandom(i * 7) * 1.5) + seededRandom(i * 17) * 300) % 1200) - 100;
        const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6BD6", "#845EC2"];
        return (
          <div key={i} style={{
            position: "absolute", left: `${x}%`, top: y,
            width: 10, height: 10, backgroundColor: colors[i % colors.length],
            borderRadius: i % 2 === 0 ? "50%" : "2px",
            transform: `rotate(${frame * (2 + seededRandom(i * 11) * 4)}deg)`, opacity: 0.7,
          }} />
        );
      })}
      {Array.from({ length: 6 }, (_, i) => {
        const adjusted = (frame + i * 50) % 300;
        const y = interpolate(adjusted, [0, 300], [110, -20]);
        const sway = Math.sin(frame * 0.04 + i * 50) * 20;
        return (
          <div key={i} style={{
            position: "absolute", left: `${8 + i * 15 + sway * 0.3}%`, top: `${y}%`,
            opacity: interpolate(adjusted, [0, 30, 250, 300], [0, 0.9, 0.9, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
          }}>
            <div style={{
              width: 50, height: 64, borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              background: `radial-gradient(circle at 35% 30%, ${BALLOON_COLORS[i]}CC, ${BALLOON_COLORS[i]})`,
            }} />
          </div>
        );
      })}
    </>
  );
};

const ThemeDecorations: React.FC<{ theme: StoryTheme }> = ({ theme }) => {
  switch (theme) {
    case "night": return <NightDecorations />;
    case "farm": return <FarmDecorations />;
    case "ocean": return <OceanDecorations />;
    case "garden": return <GardenDecorations />;
    case "playground": return <PlaygroundDecorations />;
    case "space": return <SpaceDecorations />;
    case "forest": return <ForestDecorations />;
    case "city": return <CityDecorations />;
    default: return null;
  }
};

// ===================== STORY INTRO SCENE =====================

const StoryIntro: React.FC<{
  title: string;
  theme: StoryTheme;
  themeConfig: ThemeConfig;
}> = ({ title, theme, themeConfig }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 8, stiffness: 80 } });
  const titleScale = interpolate(titleProgress, [0, 1], [0, 1]);

  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const bookOpen = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  const titleWords = title.split(" ");
  const midpoint = Math.ceil(titleWords.length / 2);
  const line1 = titleWords.slice(0, midpoint).join(" ");
  const line2 = titleWords.slice(midpoint).join(" ");

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, ${themeConfig.gradient[0]} 0%, ${themeConfig.gradient[1]} 100%)`,
      overflow: "hidden",
    }}>
      <ThemeDecorations theme={theme} />

      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        zIndex: 10,
      }}>
        {/* Open book emoji */}
        <div style={{
          fontSize: 150, transform: `scale(${bookOpen}) rotateY(${Math.sin(frame * 0.03) * 10}deg)`,
          filter: `drop-shadow(0 0 30px ${themeConfig.accent}80)`, marginBottom: 20,
        }}>📖</div>

        {/* Story title */}
        <div style={{ transform: `scale(${titleScale})`, textAlign: "center", perspective: 1000 }}>
          <div style={{
            fontSize: 110, fontWeight: 900, color: themeConfig.accent, fontFamily: cleanFont,
            textShadow: `0 0 30px ${themeConfig.accent}80, 6px 6px 0px rgba(0,0,0,0.3)`,
            lineHeight: 1.2, transform: `rotateY(${Math.sin(frame * 0.03) * 5}deg)`,
          }}>{line1}</div>
          {line2 && (
            <div style={{
              fontSize: 110, fontWeight: 900, color: "#fff", fontFamily: cleanFont,
              textShadow: "0 0 20px rgba(255,255,255,0.4), 6px 6px 0px rgba(0,0,0,0.3)",
              lineHeight: 1.2,
            }}>{line2}</div>
          )}
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 50, color: themeConfig.subtitleColor, fontFamily: storyFont,
          opacity: subtitleOpacity, marginTop: 30,
          textShadow: "3px 3px 15px rgba(0,0,0,0.5)",
        }}>A Story for Children</div>

        {/* Decorative emojis */}
        <div style={{ display: "flex", gap: 30, marginTop: 40, opacity: subtitleOpacity }}>
          {themeConfig.decorativeEmojis.map((e, i) => (
            <div key={i} style={{
              fontSize: 60,
              transform: `translateY(${Math.abs(Math.sin((frame + i * 18) * 0.07)) * 20}px)`,
              filter: `drop-shadow(0 0 15px ${themeConfig.accent}80)`,
            }}>{e}</div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===================== SCENE (VERSE) COMPONENT =====================

const StoryScene: React.FC<{
  line: string;
  emoji: string;
  accentColor: string;
  theme: StoryTheme;
  sceneIndex: number;
  totalScenes: number;
  themeConfig: ThemeConfig;
}> = ({ line, emoji, accentColor, theme, sceneIndex, totalScenes, themeConfig }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Emoji entrance
  const emojiProgress = spring({ frame: frame - 5, fps, config: { damping: 8, stiffness: 120, mass: 1 } });
  const emojiScale = interpolate(emojiProgress, [0, 1], [0, 1]);
  const emojiFloat = Math.sin(frame * 0.06) * 12;
  const emojiRotY = Math.sin(frame * 0.04) * 10;

  // Per-scene gradient variation
  const shift = ((sceneIndex / Math.max(totalScenes - 1, 1)) - 0.5) * 0.12;
  const grad0 = shiftColor(themeConfig.gradient[0], shift);
  const grad1 = shiftColor(themeConfig.gradient[1], -shift);
  const gradAngle = 180 + (sceneIndex * 15) % 60 - 30;

  // Scene number for progress
  const progressWidth = interpolate(sceneIndex, [0, totalScenes - 1], [5, 100]);

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(${gradAngle}deg, ${grad0} 0%, ${grad1} 100%)`,
      opacity: bgOpacity, overflow: "hidden",
    }}>
      <ThemeDecorations theme={theme} />

      {/* Scene number badge */}
      <div style={{
        position: "absolute", top: 30, left: 40, zIndex: 20,
        display: "flex", alignItems: "center", gap: 15,
      }}>
        <div style={{
          width: 60, height: 60, borderRadius: "50%",
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}CC)`,
          display: "flex", justifyContent: "center", alignItems: "center",
          fontSize: 28, fontWeight: 900, color: "#fff", fontFamily: cleanFont,
          boxShadow: `0 4px 20px ${accentColor}66`,
        }}>{sceneIndex + 1}</div>
        {/* Progress bar */}
        <div style={{ width: 200, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.2)" }}>
          <div style={{
            width: `${progressWidth}%`, height: "100%", borderRadius: 4,
            background: `linear-gradient(90deg, ${accentColor}, #fff)`,
            transition: "width 0.3s",
          }} />
        </div>
      </div>

      {/* Center content */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        zIndex: 10,
      }}>
        {/* Big emoji */}
        <div style={{
          perspective: 1000,
          transform: `scale(${emojiScale}) translateY(${emojiFloat}px)`,
          marginBottom: 50,
        }}>
          <div style={{
            fontSize: 180, lineHeight: 1,
            transform: `rotateY(${emojiRotY}deg)`,
            filter: `drop-shadow(0 0 40px ${accentColor}88) drop-shadow(0 20px 60px rgba(0,0,0,0.3))`,
          }}>{emoji}</div>
        </div>

        {/* Story text - full sentence with typewriter effect */}
        <div style={{
          maxWidth: 1400, padding: "0 80px", textAlign: "center",
        }}>
          <div style={{
            fontSize: 72, fontWeight: 600, color: "#fff", fontFamily: storyFont,
            lineHeight: 1.4,
            textShadow: `0 0 20px ${accentColor}66, 4px 4px 0px rgba(0,0,0,0.3)`,
          }}>
            {line.split(" ").map((word, wi) => {
              const wordDelay = 10 + wi * 5;
              const wordOpacity = interpolate(frame, [wordDelay, wordDelay + 8], [0, 1], {
                extrapolateRight: "clamp", extrapolateLeft: "clamp",
              });
              const wordY = interpolate(frame, [wordDelay, wordDelay + 12], [20, 0], {
                extrapolateRight: "clamp", extrapolateLeft: "clamp",
                easing: Easing.out(Easing.quad),
              });
              const isHighlighted = frame >= wordDelay + 3 && frame < wordDelay + 18;
              return (
                <span key={wi} style={{
                  display: "inline-block",
                  opacity: wordOpacity,
                  transform: `translateY(${wordY}px)`,
                  color: isHighlighted ? accentColor : "#fff",
                  marginRight: 16,
                }}>{word}</span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 5,
        background: `linear-gradient(90deg, transparent, ${accentColor}, #fff, ${accentColor}, transparent)`,
        opacity: 0.6, zIndex: 20,
      }} />
    </AbsoluteFill>
  );
};

// ===================== MORAL SCENE =====================

const MoralScene: React.FC<{
  moral: string;
  theme: StoryTheme;
  themeConfig: ThemeConfig;
}> = ({ moral, theme, themeConfig }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame, fps, config: { damping: 8, stiffness: 80 } });
  const scale = interpolate(progress, [0, 1], [0.5, 1]);

  const moralOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const moralY = interpolate(frame, [30, 50], [40, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  const fadeOut = interpolate(frame, [180, 240], [1, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, ${themeConfig.gradient[0]} 0%, ${themeConfig.gradient[1]} 100%)`,
      overflow: "hidden", opacity: fadeOut,
    }}>
      <ThemeDecorations theme={theme} />

      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        transform: `scale(${scale})`, zIndex: 10,
      }}>
        {/* The End */}
        <div style={{
          fontSize: 160, lineHeight: 1.2,
          filter: `drop-shadow(0 0 20px ${themeConfig.accent}80)`,
        }}>{themeConfig.outroEmojis}</div>

        <div style={{
          fontSize: 120, fontWeight: 900, color: themeConfig.accent, fontFamily: cleanFont,
          textShadow: `0 0 30px ${themeConfig.accent}80, 8px 8px 0px rgba(0,0,0,0.3)`,
          marginTop: 20,
          transform: `rotateY(${Math.sin(frame * 0.04) * 8}deg)`,
        }}>The End!</div>

        {/* Moral */}
        {moral && (
          <div style={{
            opacity: moralOpacity, transform: `translateY(${moralY}px)`,
            maxWidth: 1200, textAlign: "center", marginTop: 40, padding: "0 60px",
          }}>
            <div style={{
              fontSize: 44, color: "#fff", fontFamily: storyFont, fontWeight: 600,
              background: "rgba(0,0,0,0.3)", padding: "25px 50px", borderRadius: 20,
              border: `3px solid ${themeConfig.accent}66`,
              textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
              lineHeight: 1.5,
            }}>
              <span style={{ fontSize: 36, opacity: 0.8 }}>Moral: </span>
              {moral}
            </div>
          </div>
        )}

        <div style={{
          fontSize: 100, marginTop: 30,
          filter: `drop-shadow(0 0 15px ${themeConfig.accent}40)`,
        }}>🎵🎶🎵</div>
      </div>
    </AbsoluteFill>
  );
};

// ===================== MAIN COMPOSITION =====================

export const EnglishStoryTemplate: React.FC<EnglishStoryProps> = ({
  title,
  storyId,
  scenes,
  theme,
  moral,
  sceneDuration = 6,
  introDuration = 6,
  outroDuration = 8,
}) => {
  const { fps } = useVideoConfig();

  const themeConfig = THEMES[theme];
  const introFrames = Math.round(introDuration * fps);
  const sceneFrames = Math.round(sceneDuration * fps);
  const outroFrames = Math.round(outroDuration * fps);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Intro */}
      <Sequence from={0} durationInFrames={introFrames} premountFor={fps}>
        <StoryIntro title={title} theme={theme} themeConfig={themeConfig} />
      </Sequence>

      {/* Story scenes */}
      {scenes.map((scene, i) => {
        const startFrame = introFrames + i * sceneFrames;
        const accentColor = ACCENT_COLORS[i % ACCENT_COLORS.length];
        return (
          <Sequence key={`scene-${i}`} from={startFrame} durationInFrames={sceneFrames} premountFor={Math.round(fps * 0.5)}>
            <StoryScene
              line={scene.line}
              emoji={scene.emoji}
              accentColor={accentColor}
              theme={theme}
              sceneIndex={i}
              totalScenes={scenes.length}
              themeConfig={themeConfig}
            />
          </Sequence>
        );
      })}

      {/* Moral / Outro */}
      <Sequence from={introFrames + scenes.length * sceneFrames} durationInFrames={outroFrames} premountFor={fps}>
        <MoralScene moral={moral || ""} theme={theme} themeConfig={themeConfig} />
      </Sequence>

      {/* Audio layers */}
      {scenes.map((_, i) => {
        const audioStart = introFrames + i * sceneFrames + 3;
        return (
          <Sequence key={`audio-${i}`} from={audioStart} durationInFrames={sceneFrames} layout="none">
            <Audio src={staticFile(`${storyId}-audio/verse_${i}.mp3`)} />
          </Sequence>
        );
      })}

      {/* BGM */}
      <Sequence from={0} layout="none">
        <Audio src={staticFile(`${storyId}-audio/bgm.wav`)} volume={0.25} />
      </Sequence>
    </AbsoluteFill>
  );
};
