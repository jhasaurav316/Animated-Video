#!/usr/bin/env node
// ============================================================================
// Auto-Register All Hindi Story Compositions in HindiStoryRoot.tsx
// ============================================================================
// Reads hindi-stories/catalog.json and generates a new HindiStoryRoot.tsx that
// registers every Hindi story as both a landscape (1920x1080) and shorts
// (1080x1920) Remotion composition, organized by theme in Folders.
//
// Usage:
//   node hindi-stories/register-compositions.js
// ============================================================================

const path = require("path");
const fs = require("fs");

// ---------- Configuration ----------
const PROJECT_ROOT = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(PROJECT_ROOT, "hindi-stories", "catalog.json");
const ROOT_TSX_PATH = path.join(PROJECT_ROOT, "src", "HindiStoryRoot.tsx");
const BACKUP_PATH = path.join(PROJECT_ROOT, "src", "HindiStoryRoot.tsx.backup");

const FPS = 30;

// ---------- Helpers ----------

// Convert a storyId like "chanda-mama" to PascalCase "ChandaMama"
function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Convert theme name to a display-friendly folder name with Story- prefix
function themeToFolder(theme) {
  const map = {
    night: "Story-Night-Sky",
    farm: "Story-Farm-Animals",
    ocean: "Story-Ocean-Adventures",
    garden: "Story-Garden-Nature",
    playground: "Story-Playground-Fun",
    space: "Story-Outer-Space",
    forest: "Story-Forest-Friends",
    city: "Story-City-Life",
  };
  return map[theme] || "Story-" + toPascalCase(theme);
}

// Calculate duration in frames for a story
function calcDurationInFrames(story) {
  const verseDuration = story.sceneDuration || story.verseDuration || 6; // seconds per scene
  const introDuration = story.introDuration || 5; // intro seconds
  const outroDuration = story.outroDuration || 6; // outro seconds
  const verseCount = (story.scenes || story.verses || []).length;

  const totalSeconds = introDuration + verseCount * verseDuration + outroDuration;
  return Math.round(totalSeconds * FPS);
}

// ---------- Main ----------
function main() {
  console.log("============================================");
  console.log("  Register All Hindi Story Compositions in HindiStoryRoot.tsx");
  console.log("============================================\n");

  // Load catalog
  if (!fs.existsSync(CATALOG_PATH)) {
    console.error(`ERROR: catalog.json not found at ${CATALOG_PATH}`);
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  const stories = Array.isArray(catalog) ? catalog : catalog.stories || [];

  if (stories.length === 0) {
    console.error("ERROR: No stories found in catalog.");
    process.exit(1);
  }

  console.log(`Found ${stories.length} stories in catalog.`);

  // Back up existing HindiStoryRoot.tsx
  if (fs.existsSync(ROOT_TSX_PATH)) {
    fs.copyFileSync(ROOT_TSX_PATH, BACKUP_PATH);
    console.log(`Backed up existing HindiStoryRoot.tsx to HindiStoryRoot.tsx.backup`);
  }

  // Group stories by theme
  const themeGroups = {};
  for (const story of stories) {
    const theme = story.theme || "playground";
    if (!themeGroups[theme]) themeGroups[theme] = [];
    themeGroups[theme].push(story);
  }

  const themeNames = Object.keys(themeGroups).sort();
  console.log(`Themes: ${themeNames.join(", ")}`);

  // ---------- Generate HindiStoryRoot.tsx content ----------
  let content = "";

  // Imports
  content += `import "./index.css";\n`;
  content += `import { Composition, Folder } from "remotion";\n`;
  content += `import { HindiStoryTemplate } from "./HindiStoryTemplate";\n`;
  content += `import type { HindiStoryProps, RhymeTheme } from "./HindiStoryTemplate";\n`;
  content += `import { ShortsWrapper } from "./ShortsWrapper";\n`;
  content += `import React from "react";\n`;
  content += `\n`;

  // ShortsStory wrapper component
  content += `// Wrapper that renders a Hindi story inside the ShortsWrapper for portrait format\n`;
  content += `const ShortsStory: React.FC<HindiStoryProps & { topColor: string; bottomColor: string; accentEmoji?: string }> = (props) => {\n`;
  content += `  const { topColor, bottomColor, accentEmoji, ...storyProps } = props;\n`;
  content += `  return (\n`;
  content += `    <ShortsWrapper title={storyProps.title} topColor={topColor} bottomColor={bottomColor} accentEmoji={accentEmoji}>\n`;
  content += `      <HindiStoryTemplate {...storyProps} />\n`;
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
  content += `export const HindiStoryRemotionRoot: React.FC = () => {\n`;
  content += `  return (\n`;
  content += `    <>\n`;

  // Generate compositions grouped by theme
  for (const theme of themeNames) {
    const storiesInTheme = themeGroups[theme];
    const folderName = themeToFolder(theme);

    content += `      <Folder name="${folderName}">\n`;

    for (const story of storiesInTheme) {
      const storyId = story.storyId || story.id;
      const compId = "Story" + toPascalCase(storyId);
      const durationInFrames = calcDurationInFrames(story);

      // Build defaultProps for this story (catalog uses "scenes", template uses "verses")
      const scenes = story.scenes || story.verses || [];
      const verseDur = story.sceneDuration || story.verseDuration || 6;
      const versesStr = JSON.stringify(scenes, null, 10)
        .split("\n")
        .map((line, i) => (i === 0 ? line : "          " + line.trim()))
        .join("\n");

      // Landscape composition
      content += `        <Composition\n`;
      content += `          id="${compId}"\n`;
      content += `          component={HindiStoryTemplate}\n`;
      content += `          durationInFrames={${durationInFrames}}\n`;
      content += `          fps={${FPS}}\n`;
      content += `          width={1920}\n`;
      content += `          height={1080}\n`;
      content += `          defaultProps={{\n`;
      content += `            title: ${JSON.stringify(story.title)},\n`;
      content += `            rhymeId: ${JSON.stringify(storyId)},\n`;
      content += `            theme: ${JSON.stringify(story.theme || "playground")} as RhymeTheme,\n`;
      content += `            verses: ${versesStr},\n`;
      if (story.moral) content += `            moral: ${JSON.stringify(story.moral)},\n`;
      content += `            verseDuration: ${verseDur},\n`;
      if (story.introDuration) content += `            introDuration: ${story.introDuration},\n`;
      if (story.outroDuration) content += `            outroDuration: ${story.outroDuration},\n`;
      content += `          }}\n`;
      content += `        />\n`;

      // Shorts composition
      content += `        <Composition\n`;
      content += `          id="${compId}Shorts"\n`;
      content += `          component={ShortsStory}\n`;
      content += `          durationInFrames={${durationInFrames}}\n`;
      content += `          fps={${FPS}}\n`;
      content += `          width={1080}\n`;
      content += `          height={1920}\n`;
      content += `          defaultProps={{\n`;
      content += `            title: ${JSON.stringify(story.title)},\n`;
      content += `            rhymeId: ${JSON.stringify(storyId)},\n`;
      content += `            theme: ${JSON.stringify(story.theme || "playground")} as RhymeTheme,\n`;
      content += `            verses: ${versesStr},\n`;
      if (story.moral) content += `            moral: ${JSON.stringify(story.moral)},\n`;
      content += `            verseDuration: ${verseDur},\n`;
      if (story.introDuration) content += `            introDuration: ${story.introDuration},\n`;
      if (story.outroDuration) content += `            outroDuration: ${story.outroDuration},\n`;
      content += `            topColor: THEME_COLORS["${story.theme || "playground"}"].top,\n`;
      content += `            bottomColor: THEME_COLORS["${story.theme || "playground"}"].bottom,\n`;
      content += `            accentEmoji: THEME_COLORS["${story.theme || "playground"}"].emoji,\n`;
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

  const totalCompositions = stories.length * 2;
  console.log(`\nHindiStoryRoot.tsx generated successfully!`);
  console.log(`  Compositions: ${totalCompositions} (${stories.length} landscape + ${stories.length} shorts)`);
  console.log(`  Themes: ${themeNames.length}`);
  console.log(`  File: ${ROOT_TSX_PATH}`);
  console.log(`  Backup: ${BACKUP_PATH}`);
  console.log("\nDone!");
}

main();
