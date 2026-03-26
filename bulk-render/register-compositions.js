#!/usr/bin/env node
// ============================================================================
// Auto-Register All Rhyme Compositions in Root.tsx
// ============================================================================
// Reads rhymes-catalog.json and generates a new Root.tsx that registers
// every rhyme as both a landscape (1920x1080) and shorts (1080x1920)
// Remotion composition, organized by theme in Folders.
//
// Usage:
//   node bulk-render/register-compositions.js
// ============================================================================

const path = require("path");
const fs = require("fs");

// ---------- Configuration ----------
const PROJECT_ROOT = path.resolve(__dirname, "..");
// Look for catalog in bulk-render/ first, then project root
const CATALOG_PATH = fs.existsSync(path.join(__dirname, "rhymes-catalog.json"))
  ? path.join(__dirname, "rhymes-catalog.json")
  : path.join(PROJECT_ROOT, "rhymes-catalog.json");
const ROOT_TSX_PATH = path.join(PROJECT_ROOT, "src", "Root.tsx");
const BACKUP_PATH = path.join(PROJECT_ROOT, "src", "Root.tsx.backup");

const FPS = 30;

// ---------- Helpers ----------

// Convert a rhymeId like "twinkle-twinkle" to PascalCase "TwinkleTwinkle"
function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Convert theme name to a display-friendly folder name
function themeToFolder(theme) {
  const map = {
    night: "Night-Sky",
    farm: "Farm-Animals",
    ocean: "Ocean-Adventures",
    garden: "Garden-Nature",
    playground: "Playground-Fun",
    space: "Outer-Space",
    forest: "Forest-Friends",
    city: "City-Life",
  };
  return map[theme] || toPascalCase(theme);
}

// Calculate duration in frames for a rhyme
function calcDurationInFrames(rhyme) {
  const verseDuration = rhyme.verseDuration || 4; // seconds per verse
  const introDuration = rhyme.introDuration || 5; // intro seconds
  const outroDuration = rhyme.outroDuration || 5; // outro seconds
  const verseCount = (rhyme.verses || []).length;

  const totalSeconds = introDuration + verseCount * verseDuration + outroDuration;
  return Math.round(totalSeconds * FPS);
}

// ---------- Main ----------
function main() {
  console.log("============================================");
  console.log("  Register All Compositions in Root.tsx");
  console.log("============================================\n");

  // Load catalog
  if (!fs.existsSync(CATALOG_PATH)) {
    console.error(`ERROR: rhymes-catalog.json not found at ${CATALOG_PATH}`);
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  const rhymes = Array.isArray(catalog) ? catalog : catalog.rhymes || [];

  if (rhymes.length === 0) {
    console.error("ERROR: No rhymes found in catalog.");
    process.exit(1);
  }

  console.log(`Found ${rhymes.length} rhymes in catalog.`);

  // Back up existing Root.tsx
  if (fs.existsSync(ROOT_TSX_PATH)) {
    fs.copyFileSync(ROOT_TSX_PATH, BACKUP_PATH);
    console.log(`Backed up existing Root.tsx to Root.tsx.backup`);
  }

  // Group rhymes by theme
  const themeGroups = {};
  for (const rhyme of rhymes) {
    const theme = rhyme.theme || "playground";
    if (!themeGroups[theme]) themeGroups[theme] = [];
    themeGroups[theme].push(rhyme);
  }

  const themeNames = Object.keys(themeGroups).sort();
  console.log(`Themes: ${themeNames.join(", ")}`);

  // ---------- Generate Root.tsx content ----------
  let content = "";

  // Imports
  content += `import "./index.css";\n`;
  content += `import { Composition, Folder } from "remotion";\n`;
  content += `import { RhymeTemplate } from "./RhymeTemplate";\n`;
  content += `import type { RhymeProps, RhymeTheme } from "./RhymeTemplate";\n`;
  content += `import { ShortsWrapper } from "./ShortsWrapper";\n`;
  content += `import React from "react";\n`;
  content += `\n`;

  // ShortsRhyme wrapper component
  content += `// Wrapper that renders a rhyme inside the ShortsWrapper for portrait format\n`;
  content += `const ShortsRhyme: React.FC<RhymeProps & { topColor: string; bottomColor: string; accentEmoji?: string }> = (props) => {\n`;
  content += `  const { topColor, bottomColor, accentEmoji, ...rhymeProps } = props;\n`;
  content += `  return (\n`;
  content += `    <ShortsWrapper title={rhymeProps.title} topColor={topColor} bottomColor={bottomColor} accentEmoji={accentEmoji}>\n`;
  content += `      <RhymeTemplate {...rhymeProps} />\n`;
  content += `    </ShortsWrapper>\n`;
  content += `  );\n`;
  content += `};\n\n`;

  // Theme color mapping for ShortsWrapper
  content += `// Theme colors for shorts wrapper\n`;
  content += `const THEME_COLORS: Record<RhymeTheme, { top: string; bottom: string; emoji: string }> = {\n`;
  content += `  night: { top: "#0A0A2E", bottom: "#2D1B69", emoji: "🌙" },\n`;
  content += `  farm: { top: "#87CEEB", bottom: "#4CAF50", emoji: "🐑" },\n`;
  content += `  ocean: { top: "#0077B6", bottom: "#00B4D8", emoji: "🐠" },\n`;
  content += `  garden: { top: "#F8BBD0", bottom: "#A5D6A7", emoji: "🦋" },\n`;
  content += `  playground: { top: "#FFF176", bottom: "#FFB74D", emoji: "🎈" },\n`;
  content += `  space: { top: "#000000", bottom: "#1A0533", emoji: "🚀" },\n`;
  content += `  forest: { top: "#1B5E20", bottom: "#388E3C", emoji: "🌲" },\n`;
  content += `  city: { top: "#37474F", bottom: "#5C6BC0", emoji: "🏙️" },\n`;
  content += `};\n\n`;

  // RemotionRoot component
  content += `export const RemotionRoot: React.FC = () => {\n`;
  content += `  return (\n`;
  content += `    <>\n`;

  // Generate compositions grouped by theme
  for (const theme of themeNames) {
    const rhymesInTheme = themeGroups[theme];
    const folderName = themeToFolder(theme);

    content += `      <Folder name="${folderName}">\n`;

    for (const rhyme of rhymesInTheme) {
      const rhymeId = rhyme.rhymeId || rhyme.id;
      const compId = toPascalCase(rhymeId);
      const durationInFrames = calcDurationInFrames(rhyme);

      // Build defaultProps for this rhyme
      const versesStr = JSON.stringify(rhyme.verses || [], null, 10)
        .split("\n")
        .map((line, i) => (i === 0 ? line : "          " + line.trim()))
        .join("\n");

      // Landscape composition
      content += `        <Composition\n`;
      content += `          id="${compId}"\n`;
      content += `          component={RhymeTemplate}\n`;
      content += `          durationInFrames={${durationInFrames}}\n`;
      content += `          fps={${FPS}}\n`;
      content += `          width={1920}\n`;
      content += `          height={1080}\n`;
      content += `          defaultProps={{\n`;
      content += `            title: ${JSON.stringify(rhyme.title)},\n`;
      content += `            rhymeId: ${JSON.stringify(rhymeId)},\n`;
      content += `            theme: ${JSON.stringify(rhyme.theme || "playground")} as RhymeTheme,\n`;
      content += `            verses: ${versesStr},\n`;
      if (rhyme.verseDuration) content += `            verseDuration: ${rhyme.verseDuration},\n`;
      if (rhyme.introDuration) content += `            introDuration: ${rhyme.introDuration},\n`;
      if (rhyme.outroDuration) content += `            outroDuration: ${rhyme.outroDuration},\n`;
      content += `          }}\n`;
      content += `        />\n`;

      // Shorts composition
      content += `        <Composition\n`;
      content += `          id="${compId}Shorts"\n`;
      content += `          component={ShortsRhyme}\n`;
      content += `          durationInFrames={${durationInFrames}}\n`;
      content += `          fps={${FPS}}\n`;
      content += `          width={1080}\n`;
      content += `          height={1920}\n`;
      content += `          defaultProps={{\n`;
      content += `            title: ${JSON.stringify(rhyme.title)},\n`;
      content += `            rhymeId: ${JSON.stringify(rhymeId)},\n`;
      content += `            theme: ${JSON.stringify(rhyme.theme || "playground")} as RhymeTheme,\n`;
      content += `            verses: ${versesStr},\n`;
      if (rhyme.verseDuration) content += `            verseDuration: ${rhyme.verseDuration},\n`;
      if (rhyme.introDuration) content += `            introDuration: ${rhyme.introDuration},\n`;
      if (rhyme.outroDuration) content += `            outroDuration: ${rhyme.outroDuration},\n`;
      content += `            topColor: THEME_COLORS["${rhyme.theme || "playground"}"].top,\n`;
      content += `            bottomColor: THEME_COLORS["${rhyme.theme || "playground"}"].bottom,\n`;
      content += `            accentEmoji: THEME_COLORS["${rhyme.theme || "playground"}"].emoji,\n`;
      content += `          }}\n`;
      content += `        />\n`;
    }

    content += `      </Folder>\n`;
  }

  content += `    </>\n`;
  content += `  );\n`;
  content += `};\n`;

  // Write the file
  fs.writeFileSync(ROOT_TSX_PATH, content, "utf-8");

  const totalCompositions = rhymes.length * 2;
  console.log(`\nRoot.tsx generated successfully!`);
  console.log(`  Compositions: ${totalCompositions} (${rhymes.length} landscape + ${rhymes.length} shorts)`);
  console.log(`  Themes: ${themeNames.length}`);
  console.log(`  File: ${ROOT_TSX_PATH}`);
  console.log(`  Backup: ${BACKUP_PATH}`);
  console.log("\nDone!");
}

main();
