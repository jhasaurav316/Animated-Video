#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(__dirname, "catalog.json");
const ROOT_TSX_PATH = path.join(PROJECT_ROOT, "src", "HindiKidsRoot.tsx");
const FPS = 30;

function toPascalCase(str) {
  return str.split(/[-_\s]+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("");
}

function main() {
  console.log("  Register Hindi Kids Compositions\n");

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  const videos = Array.isArray(catalog) ? catalog : catalog.videos || [];

  let content = 'import { Composition } from "remotion";\n';
  content += 'import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";\n';
  content += 'import React from "react";\n\n';
  content += "export const HindiKidsRemotionRoot: React.FC = () => {\n";
  content += "  return (\n    <>\n";

  for (const video of videos) {
    const compId = "HindiKids" + toPascalCase(video.id);
    const itemCount = (video.items || []).length;
    const dur = Math.round(((video.introDuration || 4) + itemCount * (video.letterDuration || 4) + (video.outroDuration || 3)) * FPS);

    content += '      <Composition\n';
    content += '        id="' + compId + '"\n';
    content += '        component={AlphabetShortsTemplate}\n';
    content += '        durationInFrames={' + dur + '}\n';
    content += '        fps={' + FPS + '}\n';
    content += '        width={1080}\n';
    content += '        height={1920}\n';
    content += '        defaultProps={{\n';
    content += '          title: ' + JSON.stringify(video.title) + ',\n';
    content += '          videoId: "' + video.id + '",\n';
    content += '          bgGradient: ' + JSON.stringify(video.bgGradient) + ' as [string, string],\n';
    content += '          accentColor: ' + JSON.stringify(video.accentColor) + ',\n';
    content += '          connectorWord: ' + JSON.stringify(video.connectorWord || "\u0938\u0947") + ',\n';
    content += '          subtitleText: ' + JSON.stringify(video.subtitleText || "\u0906\u0913 \u0938\u0940\u0916\u0947\u0902!") + ',\n';
    content += '          letters: ' + JSON.stringify(video.items || []) + ',\n';
    content += '          letterDuration: ' + (video.letterDuration || 4) + ',\n';
    content += '          introDuration: ' + (video.introDuration || 4) + ',\n';
    content += '          outroDuration: ' + (video.outroDuration || 3) + ',\n';
    content += '        }}\n';
    content += '      />\n';
  }

  content += "    </>\n  );\n};\n";

  fs.writeFileSync(ROOT_TSX_PATH, content, "utf-8");
  console.log("  Generated HindiKidsRoot.tsx with " + videos.length + " compositions");
}

main();
