#!/usr/bin/env node
// ============================================================================
// Generate Audio Scripts Document
// ============================================================================
// Creates a formatted text document with all rhyme audio scripts,
// numbered 1-150, with emotion/tone cues for voice recording.
//
// Usage:
//   node bulk-render/generate-audio-scripts.js
//
// Output:
//   bulk-render/audio-scripts.txt
// ============================================================================

const fs = require("fs");
const path = require("path");

const catalog = require("./rhymes-catalog.json");
const outFile = path.join(__dirname, "audio-scripts.txt");

// Emotion mapping based on themes and keywords
const themeEmotions = {
  night: "Soft, dreamy, gentle wonder",
  farm: "Cheerful, playful, energetic",
  garden: "Bright, curious, storytelling",
  rain: "Cozy, rhythmic, soothing",
  weather: "Expressive, dramatic, fun",
  lullaby: "Very soft, slow, tender",
  sleep: "Very soft, slow, tender",
  action: "High energy, loud, enthusiastic",
  counting: "Clear, rhythmic, educational",
  learning: "Clear, encouraging, patient",
  food: "Yummy, excited, playful",
  classic: "Traditional, warm, sing-song",
  fun: "Bouncy, silly, joyful",
  animals: "Animated, with animal sounds, playful",
  body: "Energetic, instructional, fun",
  manners: "Warm, gentle, encouraging",
  nature: "Calm, observing, appreciative",
  seasons: "Descriptive, mood matching the season",
};

// Keyword-based emotion hints for individual lines
function getLineEmotion(line) {
  const lower = line.toLowerCase();
  if (lower.includes("fall") || lower.includes("broke") || lower.includes("cry") || lower.includes("couldn't"))
    return "(dramatic, surprised)";
  if (lower.includes("hush") || lower.includes("sleep") || lower.includes("dream") || lower.includes("lullaby"))
    return "(whisper, very soft)";
  if (lower.includes("happy") || lower.includes("joy") || lower.includes("laugh") || lower.includes("fun"))
    return "(big smile, excited)";
  if (lower.includes("rain") || lower.includes("thunder") || lower.includes("storm"))
    return "(dramatic, building)";
  if (lower.includes("sun") || lower.includes("shine") || lower.includes("bright") || lower.includes("light"))
    return "(warm, glowing)";
  if (lower.includes("baa") || lower.includes("moo") || lower.includes("quack") || lower.includes("oink") || lower.includes("woof") || lower.includes("meow"))
    return "(animal voice, playful)";
  if (lower.includes("run") || lower.includes("jump") || lower.includes("hop") || lower.includes("skip") || lower.includes("clap"))
    return "(energetic, fast)";
  if (lower.includes("twinkle") || lower.includes("star") || lower.includes("diamond"))
    return "(wonder, sparkly)";
  if (lower.includes("goodbye") || lower.includes("gone") || lower.includes("away"))
    return "(wistful, gentle)";
  if (lower.includes("one") || lower.includes("two") || lower.includes("three") || lower.includes("four") || lower.includes("five"))
    return "(counting rhythm, clear)";
  if (lower.includes("?"))
    return "(questioning, curious)";
  if (lower.includes("!"))
    return "(excited, emphasis)";
  return "";
}

// Build the document
let doc = "";

doc += "=".repeat(70) + "\n";
doc += "  AUDIO SCRIPTS FOR NURSERY RHYME VIDEOS\n";
doc += "=".repeat(70) + "\n";
doc += `  Total Rhymes: ${catalog.length}\n`;
doc += `  Generated: ${new Date().toLocaleDateString()}\n`;
doc += "\n";
doc += "  HOW TO USE THIS DOCUMENT:\n";
doc += "  - Each rhyme is numbered (1-150) matching the video order\n";
doc += "  - Overall tone/emotion is listed under the title\n";
doc += "  - Individual line emotions are in (parentheses) where needed\n";
doc += "  - Record each rhyme as ONE continuous audio file\n";
doc += "  - Pause briefly (~0.5s) between lines\n";
doc += "  - Pause longer (~1.5s) between verses/stanzas\n";
doc += "  - Target pace: slow and clear, suitable for children ages 2-6\n";
doc += "\n";
doc += "  AUDIO FILES NEEDED PER RHYME:\n";
doc += "  1. Voice narration/singing (this script)\n";
doc += "  2. Emotional/expressive version (use emotion cues below)\n";
doc += "\n";
doc += "=".repeat(70) + "\n\n\n";

catalog.forEach((rhyme, index) => {
  const num = index + 1;
  const themeEmotion = themeEmotions[rhyme.theme] || "Cheerful, engaging, child-friendly";

  doc += "-".repeat(70) + "\n";
  doc += `  #${num}. ${rhyme.title}\n`;
  doc += "-".repeat(70) + "\n";
  doc += `  ID:      ${rhyme.id}\n`;
  doc += `  Theme:   ${rhyme.theme}\n`;
  doc += `  Tone:    ${themeEmotion}\n`;
  doc += `  Lines:   ${rhyme.verses.length}\n`;
  doc += "\n";

  // Script with emotions
  doc += "  SCRIPT (with emotion cues):\n";
  doc += "\n";

  rhyme.verses.forEach((verse, vIndex) => {
    const lineNum = (vIndex + 1).toString().padStart(2, " ");
    const emotion = getLineEmotion(verse.line);
    const emotionSuffix = emotion ? `  ${emotion}` : "";
    doc += `    ${lineNum}. ${verse.line}${emotionSuffix}\n`;
  });

  doc += "\n";

  // Plain script (no emotions, for quick reference)
  doc += "  PLAIN SCRIPT (for recording):\n";
  doc += "\n";
  doc += "    " + rhyme.verses.map((v) => v.line).join("\n    ") + "\n";

  doc += "\n\n";
});

// Summary table at the end
doc += "=".repeat(70) + "\n";
doc += "  SUMMARY - ALL RHYMES\n";
doc += "=".repeat(70) + "\n\n";
doc += "  #    | Title                                    | Theme\n";
doc += "  " + "-".repeat(66) + "\n";

catalog.forEach((rhyme, index) => {
  const num = (index + 1).toString().padStart(3, " ");
  const title = rhyme.title.padEnd(40, " ");
  doc += `  ${num}  | ${title} | ${rhyme.theme}\n`;
});

doc += "\n" + "=".repeat(70) + "\n";
doc += "  END OF DOCUMENT\n";
doc += "=".repeat(70) + "\n";

fs.writeFileSync(outFile, doc, "utf-8");
console.log(`Audio scripts written to: ${outFile}`);
console.log(`Total rhymes: ${catalog.length}`);
console.log(`File size: ${(fs.statSync(outFile).size / 1024).toFixed(1)} KB`);
