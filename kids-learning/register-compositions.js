#!/usr/bin/env node
// ============================================================================
// Register All Kids Learning Compositions
// ============================================================================
// Reads all phase catalogs and generates KidsLearningRoot.tsx
//
// Usage:
//   node kids-learning/register-compositions.js
// ============================================================================

const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SCRIPT_DIR = __dirname;
const ROOT_TSX_PATH = path.join(PROJECT_ROOT, "src", "KidsLearningRoot.tsx");
const BACKUP_PATH = ROOT_TSX_PATH + ".backup";
const FPS = 30;

function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

function calcDurationInFrames(video) {
  const letterDur = video.letterDuration || 3;
  const introDur = video.introDuration || 3;
  const outroDur = video.outroDuration || 3;
  const itemCount = (video.items || []).length;
  return Math.round((introDur + itemCount * letterDur + outroDur) * FPS);
}

function main() {
  console.log("============================================");
  console.log("  Register Kids Learning Compositions");
  console.log("============================================\n");

  // Find all catalog files
  const catalogFiles = fs.readdirSync(SCRIPT_DIR)
    .filter((f) => f.endsWith("-catalog.json"))
    .sort();

  if (catalogFiles.length === 0) {
    console.error("ERROR: No catalog files found in kids-learning/");
    process.exit(1);
  }

  console.log("Found catalog files:");
  catalogFiles.forEach((f) => console.log("  - " + f));

  // Merge all catalogs
  let allVideos = [];
  for (const file of catalogFiles) {
    const filePath = path.join(SCRIPT_DIR, file);
    const catalog = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const videos = Array.isArray(catalog) ? catalog : catalog.videos || [];
    allVideos = allVideos.concat(videos);
    console.log("  " + file + ": " + videos.length + " videos");
  }

  console.log("\nTotal videos: " + allVideos.length);

  // Backup existing
  if (fs.existsSync(ROOT_TSX_PATH)) {
    fs.copyFileSync(ROOT_TSX_PATH, BACKUP_PATH);
    console.log("Backed up existing KidsLearningRoot.tsx");
  }

  // Generate KidsLearningRoot.tsx
  let content = "";
  content += 'import { Composition } from "remotion";\n';
  content += 'import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";\n';
  content += 'import React from "react";\n\n';
  content += "export const KidsLearningRemotionRoot: React.FC = () => {\n";
  content += "  return (\n";
  content += "    <>\n";

  for (const video of allVideos) {
    const compId = "Kids" + toPascalCase(video.id);
    const dur = calcDurationInFrames(video);
    const lettersStr = JSON.stringify(video.items || [], null, 10)
      .split("\n")
      .map((line, i) => (i === 0 ? line : "          " + line.trim()))
      .join("\n");

    content += '      <Composition\n';
    content += '        id="' + compId + '"\n';
    content += "        component={AlphabetShortsTemplate}\n";
    content += "        durationInFrames={" + dur + "}\n";
    content += "        fps={" + FPS + "}\n";
    content += "        width={1080}\n";
    content += "        height={1920}\n";
    content += "        defaultProps={{\n";
    content += "          title: " + JSON.stringify(video.title) + ",\n";
    content += '          videoId: "' + video.id + '",\n';
    content += "          bgGradient: " + JSON.stringify(video.bgGradient) + " as [string, string],\n";
    content += "          accentColor: " + JSON.stringify(video.accentColor) + ",\n";
    content += "          letters: " + lettersStr + ",\n";
    content += "          letterDuration: " + (video.letterDuration || 3) + ",\n";
    content += "          introDuration: " + (video.introDuration || 3) + ",\n";
    content += "          outroDuration: " + (video.outroDuration || 3) + ",\n";
    content += "        }}\n";
    content += "      />\n";
  }

  content += "    </>\n";
  content += "  );\n";
  content += "};\n";

  fs.writeFileSync(ROOT_TSX_PATH, content, "utf-8");

  console.log("\nKidsLearningRoot.tsx generated!");
  console.log("  Compositions: " + allVideos.length);
  console.log("  File: " + ROOT_TSX_PATH);
  console.log("Done!");
}

main();
