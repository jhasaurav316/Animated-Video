#!/usr/bin/env node
// ============================================================================
// Bulk Audio Generator for All Rhymes
// ============================================================================
// Reads rhymes-catalog.json and generates voice lines + BGM for every rhyme.
//
// For each rhyme, generates:
//   - Voice lines: public/{rhymeId}-audio/verse_0.mp3, verse_1.mp3, ...
//   - Background music: public/{rhymeId}-audio/bgm.wav
//
// Uses edge-tts for voice and ffmpeg for BGM synthesis.
// Processes rhymes in batches of 5 concurrently.
//
// Usage:
//   node bulk-render/generate-all-audio.js
// ============================================================================

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// ---------- Configuration ----------
const PROJECT_ROOT = path.resolve(__dirname, "..");
// Look for catalog in bulk-render/ first, then project root
const CATALOG_PATH = fs.existsSync(path.join(__dirname, "rhymes-catalog.json"))
  ? path.join(__dirname, "rhymes-catalog.json")
  : path.join(PROJECT_ROOT, "rhymes-catalog.json");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const BATCH_SIZE = 5;

// TTS settings - child-friendly voice
const VOICE = "en-US-AnaNeural";
const RATE = "-20%";
const PITCH = "+3Hz";

// Detect python command (python3 on Linux/Mac, python on Windows)
const PYTHON = process.platform === "win32" ? "python" : "python3";

// ---------- Helpers ----------
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
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// ---------- Voice Line Generation ----------
function generateVoiceLines(rhyme, audioDir) {
  const verses = rhyme.verses || [];

  for (let i = 0; i < verses.length; i++) {
    const outputFile = path.join(audioDir, `verse_${i}.mp3`);

    // Skip if this verse already exists
    if (fs.existsSync(outputFile)) continue;

    const text = verses[i].line.replace(/"/g, '\\"').replace(/'/g, "'");
    const cmd = `${PYTHON} -m edge_tts --voice "${VOICE}" --rate="${RATE}" --pitch="${PITCH}" --text "${text}" --write-media "${outputFile}"`;
    run(cmd);
  }
}

// ---------- BGM Generation ----------
// Generates a simple cheerful background music track using ffmpeg.
// Uses 3 layers: melody (music box), pad (warm chords), atmosphere (gentle shimmer).
function generateBGM(rhyme, audioDir) {
  const bgmFile = path.join(audioDir, "bgm.wav");

  // Skip if BGM already exists
  if (fs.existsSync(bgmFile)) return;

  const verseDuration = rhyme.verseDuration || 4;
  const introDuration = rhyme.introDuration || 5;
  const outroDuration = rhyme.outroDuration || 5;
  const verseCount = (rhyme.verses || []).length;
  const totalDuration = introDuration + verseCount * verseDuration + outroDuration;

  const tempDir = path.join(audioDir, "_bgm_temp");
  ensureDir(tempDir);

  try {
    // Layer 1: Simple melody loop using a pentatonic scale (C E G A C5)
    // Frequencies: C4=261.6, E4=329.6, G4=392, A4=440, C5=523.2
    const melodyNotes = [261.6, 329.6, 392, 440, 523.2, 440, 392, 329.6];
    const noteDur = 0.5;
    const melodyParts = [];

    for (let i = 0; i < melodyNotes.length; i++) {
      const freq = melodyNotes[i];
      const noteFile = path.join(tempDir, `note_${i}.wav`);
      // Music box tone: sine with fast decay
      run(`ffmpeg -y -f lavfi -i "sine=f=${freq}:d=${noteDur},volume='0.12*exp(-3*t)':eval=frame" "${noteFile}"`);
      melodyParts.push(noteFile);
    }

    // Concatenate melody notes into one phrase
    const melodyPhrase = path.join(tempDir, "melody_phrase.wav");
    const concatList = path.join(tempDir, "concat.txt");
    const concatContent = melodyParts.map((f) => `file '${f}'`).join("\n");
    fs.writeFileSync(concatList, concatContent);
    run(`ffmpeg -y -f concat -safe 0 -i "${concatList}" -c copy "${melodyPhrase}"`);

    // Loop the melody phrase to fill the total duration
    const melodyLoop = path.join(tempDir, "melody_loop.wav");
    run(`ffmpeg -y -stream_loop -1 -i "${melodyPhrase}" -t ${totalDuration} -af "volume=0.3" "${melodyLoop}"`);

    // Layer 2: Warm pad (low frequency sine blend for warmth)
    const padFile = path.join(tempDir, "pad.wav");
    run(
      `ffmpeg -y -f lavfi -i "sine=f=130.8:d=${totalDuration}" ` +
        `-f lavfi -i "sine=f=196:d=${totalDuration}" ` +
        `-filter_complex "[0]volume=0.04[a];[1]volume=0.03[b];[a][b]amix=2:duration=longest" ` +
        `"${padFile}"`
    );

    // Layer 3: Gentle atmosphere (high shimmer)
    const atmoFile = path.join(tempDir, "atmo.wav");
    run(
      `ffmpeg -y -f lavfi -i "anoisesrc=d=${totalDuration}:c=pink:a=0.003" ` +
        `-af "highpass=f=4000,lowpass=f=8000,volume=0.5" "${atmoFile}"`
    );

    // Mix all 3 layers together
    run(
      `ffmpeg -y -i "${melodyLoop}" -i "${padFile}" -i "${atmoFile}" ` +
        `-filter_complex "[0][1][2]amix=inputs=3:duration=longest:normalize=0,volume=1.5,afade=t=in:d=2,afade=t=out:st=${totalDuration - 3}:d=3" ` +
        `"${bgmFile}"`
    );
  } finally {
    // Clean up temp files
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }
}

// ---------- Process a Single Rhyme ----------
function processRhyme(rhyme, index, total) {
  const rhymeId = rhyme.rhymeId || rhyme.id;
  const title = rhyme.title || rhymeId;
  const audioDir = path.join(PUBLIC_DIR, `${rhymeId}-audio`);

  // Skip if this rhyme's audio directory already exists and has content
  if (fs.existsSync(audioDir)) {
    const files = fs.readdirSync(audioDir);
    const expectedFiles = (rhyme.verses || []).length + 1; // verses + bgm
    if (files.length >= expectedFiles) {
      console.log(`  [${index + 1}/${total}] SKIP: ${title} (audio already exists)`);
      return;
    }
  }

  console.log(`  [${index + 1}/${total}] Generating audio for: ${title}`);
  ensureDir(audioDir);

  // Generate voice lines
  process.stdout.write(`    Voice lines... `);
  generateVoiceLines(rhyme, audioDir);
  process.stdout.write("done\n");

  // Generate BGM
  process.stdout.write(`    BGM... `);
  generateBGM(rhyme, audioDir);
  process.stdout.write("done\n");
}

// ---------- Batch Processing ----------
async function processBatch(rhymes, startIdx, total) {
  // Process each rhyme in the batch sequentially
  // (edge-tts and ffmpeg are CPU-intensive, true parallelism is managed at batch level)
  const promises = rhymes.map((rhyme, i) => {
    return new Promise((resolve, reject) => {
      try {
        processRhyme(rhyme, startIdx + i, total);
        resolve();
      } catch (err) {
        console.error(`    ERROR processing ${rhyme.rhymeId || rhyme.id}: ${err.message}`);
        resolve(); // Continue even if one fails
      }
    });
  });

  await Promise.all(promises);
}

// ---------- Main ----------
async function main() {
  console.log("============================================");
  console.log("  Bulk Audio Generator");
  console.log("============================================\n");

  // Load catalog
  if (!fs.existsSync(CATALOG_PATH)) {
    console.error(`ERROR: rhymes-catalog.json not found at ${CATALOG_PATH}`);
    console.error("Make sure the catalog file exists in the project root.");
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  const rhymes = Array.isArray(catalog) ? catalog : catalog.rhymes || [];

  if (rhymes.length === 0) {
    console.error("ERROR: No rhymes found in catalog.");
    process.exit(1);
  }

  console.log(`Found ${rhymes.length} rhymes in catalog.`);
  console.log(`Processing in batches of ${BATCH_SIZE}...\n`);

  const startTime = Date.now();

  // Process in batches
  for (let i = 0; i < rhymes.length; i += BATCH_SIZE) {
    const batch = rhymes.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(rhymes.length / BATCH_SIZE);

    console.log(`--- Batch ${batchNum}/${totalBatches} ---`);
    await processBatch(batch, i, rhymes.length);
    console.log("");
  }

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log("============================================");
  console.log(`  Audio generation complete!`);
  console.log(`  Total time: ${elapsed} minutes`);
  console.log(`  Rhymes processed: ${rhymes.length}`);
  console.log("============================================");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
