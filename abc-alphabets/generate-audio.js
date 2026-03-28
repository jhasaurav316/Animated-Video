#!/usr/bin/env node
// ============================================================================
// Audio Generator for ABC Alphabet Videos
// ============================================================================
// Reads abc-alphabets/catalog.json and generates TTS voice + BGM for every video.
//
// For each video, generates:
//   - Voice lines: public/{videoId}-audio/letter_0.mp3, letter_1.mp3, ...
//     Each says "{Letter} for {Word}" (e.g., "A for Apple")
//   - Background music: public/{videoId}-audio/bgm.mp3
//
// Uses edge-tts for voice and ffmpeg for cheerful BGM synthesis.
//
// Usage:
//   node abc-alphabets/generate-audio.js                    # All videos
//   node abc-alphabets/generate-audio.js --id alphabet-rainbow  # Single video
//   node abc-alphabets/generate-audio.js --from 1 --to 5   # Videos 1-5
// ============================================================================

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// ---------- Configuration ----------
const SCRIPT_DIR = __dirname;
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const CATALOG_PATH = path.join(SCRIPT_DIR, "catalog.json");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");

// TTS settings - child-friendly voice, slow & clear
const VOICE = "en-US-AnaNeural";
const RATE = "-15%";
const PITCH = "+5Hz";

// Detect python command
const PYTHON = process.platform === "win32" ? "python" : "python3";

// ---------- Parse CLI args ----------
const args = process.argv.slice(2);
let filterById = null;
let fromIdx = 0;
let toIdx = Infinity;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--id" && args[i + 1]) filterById = args[++i];
  if (args[i] === "--from" && args[i + 1]) fromIdx = parseInt(args[++i], 10) - 1;
  if (args[i] === "--to" && args[i + 1]) toIdx = parseInt(args[++i], 10);
}

// ---------- Helpers ----------
function run(cmd) {
  try {
    return execSync(cmd, { stdio: "pipe", maxBuffer: 10 * 1024 * 1024 });
  } catch (err) {
    console.error(`  Command failed: ${cmd}`);
    console.error(`  Error: ${err.stderr ? err.stderr.toString().slice(0, 200) : err.message}`);
    throw err;
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ---------- Voice Generation ----------
function generateLetterVoice(video, audioDir) {
  const items = video.items || [];

  for (let i = 0; i < items.length; i++) {
    const outputFile = path.join(audioDir, `letter_${i}.mp3`);

    // Skip if already exists
    if (fs.existsSync(outputFile)) continue;

    const item = items[i];
    const text = `${item.letter.toUpperCase()} for ${item.word}`;
    const safeText = text.replace(/"/g, '\\"').replace(/'/g, "'");

    const cmd = `${PYTHON} -m edge_tts --voice "${VOICE}" --rate="${RATE}" --pitch="${PITCH}" --text "${safeText}" --write-media "${outputFile}"`;
    run(cmd);
    process.stdout.write(`\r    Letter ${i + 1}/${items.length}: ${text}              `);
  }
  process.stdout.write("\n");
}

// ---------- BGM Generation ----------
// Cheerful, upbeat ABC melody using music-box tones
function generateBGM(video, audioDir) {
  const bgmFile = path.join(audioDir, "bgm.mp3");
  if (fs.existsSync(bgmFile)) return;

  const itemCount = (video.items || []).length;
  const letterDur = video.letterDuration || 3;
  const introDur = video.introDuration || 3;
  const outroDur = video.outroDuration || 3;
  const totalDuration = introDur + itemCount * letterDur + outroDur;

  const tempDir = path.join(audioDir, "_bgm_temp");
  ensureDir(tempDir);

  try {
    // Layer 1: ABC melody (C D E F G A B C5) - music box style
    const melodyNotes = [
      { f: 523.2, d: 0.45 },  // C5
      { f: 587.3, d: 0.45 },  // D5
      { f: 659.2, d: 0.45 },  // E5
      { f: 698.5, d: 0.45 },  // F5
      { f: 784.0, d: 0.45 },  // G5
      { f: 880.0, d: 0.45 },  // A5
      { f: 784.0, d: 0.45 },  // G5
      { f: 659.2, d: 0.9 },   // E5 (held)
    ];

    for (let i = 0; i < melodyNotes.length; i++) {
      const { f, d } = melodyNotes[i];
      run(`ffmpeg -y -f lavfi -i "sine=f=${f}:d=${d},volume='0.12*exp(-2.5*t)':eval=frame" -f lavfi -i "sine=f=${f * 2}:d=${d},volume='0.04*exp(-3.5*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" "${tempDir}/n${i}.wav"`);
    }

    // Concatenate into melody phrase
    const concatList = melodyNotes.map((_, i) => `file '${tempDir}/n${i}.wav'`).join("\n");
    fs.writeFileSync(`${tempDir}/concat.txt`, concatList);
    run(`ffmpeg -y -f concat -safe 0 -i "${tempDir}/concat.txt" -c copy "${tempDir}/melody_phrase.wav"`);

    // Loop melody with reverb
    run(`ffmpeg -y -stream_loop -1 -i "${tempDir}/melody_phrase.wav" -t ${totalDuration} -af "aecho=0.6:0.4:80:0.3,volume=0.5,afade=t=in:d=1.5,afade=t=out:st=${totalDuration - 3}:d=3" -ar 44100 -ac 2 "${tempDir}/melody.wav"`);

    // Layer 2: Warm major pad (C major chord)
    run(`ffmpeg -y -f lavfi -i "sine=f=261.6:d=${totalDuration},volume=0.035" -f lavfi -i "sine=f=329.6:d=${totalDuration},volume=0.025" -f lavfi -i "sine=f=392:d=${totalDuration},volume=0.025" -filter_complex "[0][1][2]amix=3:duration=longest,tremolo=f=0.4:d=0.3,afade=t=in:d=2,afade=t=out:st=${totalDuration - 3}:d=3" "${tempDir}/pad.wav"`);

    // Layer 3: Gentle xylophone sparkles
    run(`ffmpeg -y -f lavfi -i "sine=f=1046.4:d=${totalDuration},volume='0.025*abs(sin(2*PI*t*0.8))':eval=frame" -f lavfi -i "sine=f=1318.4:d=${totalDuration},volume='0.018*abs(sin(2*PI*t*0.6+1))':eval=frame" -filter_complex "[0][1]amix=2:duration=longest,aecho=0.4:0.3:60:0.25,afade=t=in:d=2,afade=t=out:st=${totalDuration - 3}:d=3" "${tempDir}/sparkle.wav"`);

    // Layer 4: Soft bass
    run(`ffmpeg -y -f lavfi -i "sine=f=130.8:d=${totalDuration},volume=0.05,tremolo=f=0.2:d=0.3,afade=t=in:d=1.5,afade=t=out:st=${totalDuration - 3}:d=3" "${tempDir}/bass.wav"`);

    // Layer 5: Pink noise atmosphere
    run(`ffmpeg -y -f lavfi -i "anoisesrc=d=${totalDuration}:c=pink:a=0.002,afade=t=in:d=1,afade=t=out:st=${totalDuration - 2}:d=2" "${tempDir}/atmos.wav"`);

    // Mix all 5 layers into final BGM (output as mp3 to match template expectation)
    run(`ffmpeg -y -i "${tempDir}/melody.wav" -i "${tempDir}/pad.wav" -i "${tempDir}/sparkle.wav" -i "${tempDir}/bass.wav" -i "${tempDir}/atmos.wav" -filter_complex "[0][1][2][3][4]amix=inputs=5:duration=longest:normalize=0,volume=2.0,alimiter=limit=0.9,equalizer=f=400:t=h:w=200:g=2,equalizer=f=5000:t=h:w=3000:g=1" -ar 44100 -ac 2 -b:a 192k -t ${totalDuration} "${bgmFile}"`);
  } finally {
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

// ---------- Process Single Video ----------
function processVideo(video, index, total) {
  const videoId = video.id;
  const title = video.title || videoId;
  const audioDir = path.join(PUBLIC_DIR, `${videoId}-audio`);

  // Skip check
  if (fs.existsSync(audioDir)) {
    const files = fs.readdirSync(audioDir);
    const expectedCount = (video.items || []).length + 1; // letters + bgm
    if (files.length >= expectedCount) {
      console.log(`  [${index + 1}/${total}] SKIP: ${title} (audio exists: ${files.length} files)`);
      return;
    }
  }

  console.log(`  [${index + 1}/${total}] Generating audio for: ${title}`);
  ensureDir(audioDir);

  // Voice lines
  process.stdout.write(`    Voice lines...\n`);
  generateLetterVoice(video, audioDir);
  console.log(`    ✅ Voice done`);

  // BGM
  process.stdout.write(`    BGM (5-layer)... `);
  generateBGM(video, audioDir);
  console.log("done");
  console.log(`    ✅ Audio complete for ${videoId}`);
}

// ---------- Main ----------
async function main() {
  console.log("════════════════════════════════════════════════");
  console.log("  ABC Alphabets Audio Generator");
  console.log("  Voice (edge-tts) + 5-Layer Cheerful BGM");
  console.log("════════════════════════════════════════════════\n");

  if (!fs.existsSync(CATALOG_PATH)) {
    console.error(`ERROR: catalog.json not found at ${CATALOG_PATH}`);
    process.exit(1);
  }

  let catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  let videos = Array.isArray(catalog) ? catalog : catalog.videos || [];

  // Apply filters
  if (filterById) {
    videos = videos.filter((v) => v.id === filterById);
    if (videos.length === 0) {
      console.error(`ERROR: No video found with id "${filterById}"`);
      process.exit(1);
    }
  } else {
    videos = videos.slice(fromIdx, toIdx);
  }

  console.log(`Videos to process: ${videos.length}`);
  console.log(`Audio output: public/{videoId}-audio/\n`);

  const startTime = Date.now();

  for (let i = 0; i < videos.length; i++) {
    try {
      processVideo(videos[i], i, videos.length);
    } catch (err) {
      console.error(`  ❌ ERROR on ${videos[i].id}: ${err.message}`);
    }
    console.log("");
  }

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log("════════════════════════════════════════════════");
  console.log(`  ✅ Audio generation complete!`);
  console.log(`  Videos processed: ${videos.length}`);
  console.log(`  Time: ${elapsed} minutes`);
  console.log("════════════════════════════════════════════════");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
