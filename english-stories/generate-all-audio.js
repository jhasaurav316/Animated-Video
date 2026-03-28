#!/usr/bin/env node
// ============================================================================
// Audio Generator for English Stories
// ============================================================================
// Generates voice narration + BGM for each story.
//
// Usage:
//   node english-stories/generate-all-audio.js
// ============================================================================

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const CATALOG_PATH = path.join(__dirname, "catalog.json");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");

// Story narration voice - clear, engaging, slightly slower for kids
const VOICE = "en-US-AnaNeural";
const RATE = "-15%";
const PITCH = "+2Hz";

const PYTHON = process.platform === "win32" ? "python" : "python3";

function run(cmd, options = {}) {
  try {
    return execSync(cmd, { stdio: "pipe", maxBuffer: 10 * 1024 * 1024, ...options });
  } catch (err) {
    console.error(`  Command failed: ${cmd}`);
    console.error(`  Error: ${err.message}`);
    throw err;
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateVoiceLines(story, audioDir) {
  const scenes = story.scenes || [];
  for (let i = 0; i < scenes.length; i++) {
    const outputFile = path.join(audioDir, `verse_${i}.mp3`);
    if (fs.existsSync(outputFile)) continue;

    const text = scenes[i].line.replace(/"/g, '\\"').replace(/'/g, "'");
    const cmd = `${PYTHON} -m edge_tts --voice "${VOICE}" --rate="${RATE}" --pitch="${PITCH}" --text "${text}" --write-media "${outputFile}"`;
    run(cmd);
  }
}

function generateBGM(story, audioDir) {
  const bgmFile = path.join(audioDir, "bgm.wav");
  if (fs.existsSync(bgmFile)) return;

  const sceneDuration = story.sceneDuration || 6;
  const introDuration = story.introDuration || 6;
  const outroDuration = story.outroDuration || 8;
  const sceneCount = (story.scenes || []).length;
  const totalDuration = introDuration + sceneCount * sceneDuration + outroDuration;

  const tempDir = path.join(audioDir, "_bgm_temp");
  ensureDir(tempDir);

  try {
    // Melody notes (pentatonic)
    const melodyNotes = [261.6, 329.6, 392, 440, 523.2, 440, 392, 329.6];
    const noteDur = 0.5;
    const melodyParts = [];

    for (let i = 0; i < melodyNotes.length; i++) {
      const freq = melodyNotes[i];
      const noteFile = path.join(tempDir, `note_${i}.wav`);
      run(`ffmpeg -y -f lavfi -i "sine=f=${freq}:d=${noteDur},volume='0.12*exp(-3*t)':eval=frame" "${noteFile}"`);
      melodyParts.push(noteFile);
    }

    const melodyPhrase = path.join(tempDir, "melody_phrase.wav");
    const concatList = path.join(tempDir, "concat.txt");
    fs.writeFileSync(concatList, melodyParts.map((f) => `file '${f}'`).join("\n"));
    run(`ffmpeg -y -f concat -safe 0 -i "${concatList}" -c copy "${melodyPhrase}"`);

    const melodyLoop = path.join(tempDir, "melody_loop.wav");
    run(`ffmpeg -y -stream_loop -1 -i "${melodyPhrase}" -t ${totalDuration} -af "volume=0.25" "${melodyLoop}"`);

    const padFile = path.join(tempDir, "pad.wav");
    run(
      `ffmpeg -y -f lavfi -i "sine=f=130.8:d=${totalDuration}" ` +
        `-f lavfi -i "sine=f=196:d=${totalDuration}" ` +
        `-filter_complex "[0]volume=0.03[a];[1]volume=0.02[b];[a][b]amix=2:duration=longest" ` +
        `"${padFile}"`
    );

    const atmoFile = path.join(tempDir, "atmo.wav");
    run(
      `ffmpeg -y -f lavfi -i "anoisesrc=d=${totalDuration}:c=pink:a=0.002" ` +
        `-af "highpass=f=4000,lowpass=f=8000,volume=0.4" "${atmoFile}"`
    );

    run(
      `ffmpeg -y -i "${melodyLoop}" -i "${padFile}" -i "${atmoFile}" ` +
        `-filter_complex "[0][1][2]amix=inputs=3:duration=longest:normalize=0,volume=1.2,afade=t=in:d=2,afade=t=out:st=${totalDuration - 3}:d=3" ` +
        `"${bgmFile}"`
    );
  } finally {
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function processStory(story, index, total) {
  const storyId = story.storyId || story.id;
  const title = story.title || storyId;
  const audioDir = path.join(PUBLIC_DIR, `${storyId}-audio`);

  if (fs.existsSync(audioDir)) {
    const files = fs.readdirSync(audioDir);
    const expected = (story.scenes || []).length + 1;
    if (files.length >= expected) {
      console.log(`  [${index + 1}/${total}] SKIP: ${title} (audio exists)`);
      return;
    }
  }

  console.log(`  [${index + 1}/${total}] Generating audio for: ${title}`);
  ensureDir(audioDir);

  process.stdout.write(`    Voice lines... `);
  generateVoiceLines(story, audioDir);
  process.stdout.write("done\n");

  process.stdout.write(`    BGM... `);
  generateBGM(story, audioDir);
  process.stdout.write("done\n");
}

async function main() {
  console.log("============================================");
  console.log("  English Stories - Audio Generator");
  console.log("============================================\n");

  if (!fs.existsSync(CATALOG_PATH)) {
    console.error(`ERROR: catalog.json not found at ${CATALOG_PATH}`);
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  const stories = Array.isArray(catalog) ? catalog : catalog.stories || [];

  console.log(`Found ${stories.length} stories in catalog.\n`);

  const startTime = Date.now();

  for (let i = 0; i < stories.length; i++) {
    try {
      processStory(stories[i], i, stories.length);
    } catch (err) {
      console.error(`    ERROR: ${stories[i].id}: ${err.message}`);
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log("\n============================================");
  console.log(`  Audio generation complete!`);
  console.log(`  Total time: ${elapsed} minutes`);
  console.log(`  Stories processed: ${stories.length}`);
  console.log("============================================");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
