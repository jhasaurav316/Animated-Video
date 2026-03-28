#!/usr/bin/env node
// ============================================================================
// Auto-Register English Story Compositions
// ============================================================================
// Reads catalog.json and generates EnglishStoryRoot.tsx
//
// Usage:
//   node english-stories/register-compositions.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(__dirname, "catalog.json");
const ROOT_TSX_PATH = path.join(PROJECT_ROOT, "src", "EnglishStoryRoot.tsx");
const BACKUP_PATH = ROOT_TSX_PATH + ".backup";
const FPS = 30;

function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

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

function calcDurationInFrames(story) {
  const sceneDuration = story.sceneDuration || 6;
  const introDuration = story.introDuration || 6;
  const outroDuration = story.outroDuration || 8;
  const sceneCount = (story.scenes || []).length;
  const totalSeconds = introDuration + sceneCount * sceneDuration + outroDuration;
  return Math.round(totalSeconds * FPS);
}

function main() {
  console.log("============================================");
  console.log("  Register English Story Compositions");
  console.log("============================================\n");

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

  if (fs.existsSync(ROOT_TSX_PATH)) {
    fs.copyFileSync(ROOT_TSX_PATH, BACKUP_PATH);
    console.log(`Backed up existing file to ${path.basename(BACKUP_PATH)}`);
  }

  // Group by theme
  const themeGroups = {};
  for (const story of stories) {
    const theme = story.theme || "forest";
    if (!themeGroups[theme]) themeGroups[theme] = [];
    themeGroups[theme].push(story);
  }

  const themeNames = Object.keys(themeGroups).sort();
  console.log(`Themes: ${themeNames.join(", ")}`);

  let content = "";
  content += `import "./index.css";\n`;
  content += `import { Composition, Folder } from "remotion";\n`;
  content += `import { EnglishStoryTemplate } from "./EnglishStoryTemplate";\n`;
  content += `import type { EnglishStoryProps, StoryTheme } from "./EnglishStoryTemplate";\n`;
  content += `import React from "react";\n\n`;

  content += `export const EnglishStoryRoot: React.FC = () => {\n`;
  content += `  return (\n`;
  content += `    <>\n`;

  for (const theme of themeNames) {
    const storiesInTheme = themeGroups[theme];
    const folderName = themeToFolder(theme);

    content += `      <Folder name="${folderName}">\n`;

    for (const story of storiesInTheme) {
      const storyId = story.storyId || story.id;
      const compId = "Story" + toPascalCase(storyId);
      const durationInFrames = calcDurationInFrames(story);

      const scenesStr = JSON.stringify(story.scenes || [], null, 10)
        .split("\n")
        .map((line, i) => (i === 0 ? line : "          " + line.trim()))
        .join("\n");

      content += `        <Composition\n`;
      content += `          id="${compId}"\n`;
      content += `          component={EnglishStoryTemplate}\n`;
      content += `          durationInFrames={${durationInFrames}}\n`;
      content += `          fps={${FPS}}\n`;
      content += `          width={1920}\n`;
      content += `          height={1080}\n`;
      content += `          defaultProps={{\n`;
      content += `            title: ${JSON.stringify(story.title)},\n`;
      content += `            storyId: ${JSON.stringify(storyId)},\n`;
      content += `            theme: ${JSON.stringify(story.theme || "forest")} as StoryTheme,\n`;
      content += `            scenes: ${scenesStr},\n`;
      if (story.moral) content += `            moral: ${JSON.stringify(story.moral)},\n`;
      if (story.sceneDuration) content += `            sceneDuration: ${story.sceneDuration},\n`;
      if (story.introDuration) content += `            introDuration: ${story.introDuration},\n`;
      if (story.outroDuration) content += `            outroDuration: ${story.outroDuration},\n`;
      content += `          }}\n`;
      content += `        />\n`;
    }

    content += `      </Folder>\n`;
  }

  content += `    </>\n`;
  content += `  );\n`;
  content += `};\n`;

  fs.writeFileSync(ROOT_TSX_PATH, content, "utf-8");

  console.log(`\nEnglishStoryRoot.tsx generated successfully!`);
  console.log(`  Compositions: ${stories.length}`);
  console.log(`  Themes: ${themeNames.length}`);
  console.log(`  File: ${ROOT_TSX_PATH}`);
  console.log("\nDone!");
}

main();
