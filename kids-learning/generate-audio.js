#!/usr/bin/env node
// ============================================================================
// Audio Generator for Kids Learning Videos
// ============================================================================
// Reads all phase catalogs and generates TTS voice + BGM for every video.
//
// Usage:
//   node kids-learning/generate-audio.js                          # All
//   node kids-learning/generate-audio.js --id animals-safari-1    # Single
//   node kids-learning/generate-audio.js --from 1 --to 5          # Range
// ============================================================================

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const SCRIPT_DIR = __dirname;
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");

const VOICE = "en-US-AnaNeural";
const RATE = "-15%";
const PITCH = "+5Hz";
const PYTHON = process.platform === "win32" ? "python" : "python3";

// Parse args
const args = process.argv.slice(2);
let filterById = null;
let fromIdx = 0;
let toIdx = Infinity;

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--id" && args[i + 1]) filterById = args[++i];
  if (args[i] === "--from" && args[i + 1]) fromIdx = parseInt(args[++i], 10) - 1;
  if (args[i] === "--to" && args[i + 1]) toIdx = parseInt(args[++i], 10);
}

function run(cmd) {
  try {
    return execSync(cmd, { stdio: "pipe", maxBuffer: 10 * 1024 * 1024 });
  } catch (err) {
    console.error("  Command failed: " + cmd.substring(0, 100));
    throw err;
  }
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateLetterVoice(video, audioDir) {
  const items = video.items || [];
  for (let i = 0; i < items.length; i++) {
    const outputFile = path.join(audioDir, "letter_" + i + ".mp3");
    if (fs.existsSync(outputFile)) continue;

    const item = items[i];
    const text = item.letter.toUpperCase() + " for " + item.word;
    const safeText = text.replace(/"/g, '\\"').replace(/'/g, "'");
    const cmd = PYTHON + ' -m edge_tts --voice "' + VOICE + '" --rate="' + RATE + '" --pitch="' + PITCH + '" --text "' + safeText + '" --write-media "' + outputFile + '"';
    run(cmd);
    process.stdout.write("\r    Letter " + (i + 1) + "/" + items.length + ": " + text + "              ");
  }
  process.stdout.write("\n");
}

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
    const melodyNotes = [
      { f: 523.2, d: 0.45 }, { f: 587.3, d: 0.45 }, { f: 659.2, d: 0.45 },
      { f: 698.5, d: 0.45 }, { f: 784.0, d: 0.45 }, { f: 880.0, d: 0.45 },
      { f: 784.0, d: 0.45 }, { f: 659.2, d: 0.9 },
    ];

    for (let i = 0; i < melodyNotes.length; i++) {
      const { f, d } = melodyNotes[i];
      run('ffmpeg -y -f lavfi -i "sine=f=' + f + ':d=' + d + ',volume=\'0.12*exp(-2.5*t)\':eval=frame" -f lavfi -i "sine=f=' + (f * 2) + ':d=' + d + ',volume=\'0.04*exp(-3.5*t)\':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" "' + tempDir + '/n' + i + '.wav"');
    }

    const concatList = melodyNotes.map((_, i) => "file '" + tempDir + "/n" + i + ".wav'").join("\n");
    fs.writeFileSync(tempDir + "/concat.txt", concatList);
    run('ffmpeg -y -f concat -safe 0 -i "' + tempDir + '/concat.txt" -c copy "' + tempDir + '/melody_phrase.wav"');
    run('ffmpeg -y -stream_loop -1 -i "' + tempDir + '/melody_phrase.wav" -t ' + totalDuration + ' -af "aecho=0.6:0.4:80:0.3,volume=0.5,afade=t=in:d=1.5,afade=t=out:st=' + (totalDuration - 3) + ':d=3" -ar 44100 -ac 2 "' + tempDir + '/melody.wav"');

    run('ffmpeg -y -f lavfi -i "sine=f=261.6:d=' + totalDuration + ',volume=0.035" -f lavfi -i "sine=f=329.6:d=' + totalDuration + ',volume=0.025" -f lavfi -i "sine=f=392:d=' + totalDuration + ',volume=0.025" -filter_complex "[0][1][2]amix=3:duration=longest,tremolo=f=0.4:d=0.3,afade=t=in:d=2,afade=t=out:st=' + (totalDuration - 3) + ':d=3" "' + tempDir + '/pad.wav"');
    run('ffmpeg -y -f lavfi -i "sine=f=1046.4:d=' + totalDuration + ',volume=\'0.025*abs(sin(2*PI*t*0.8))\':eval=frame" -f lavfi -i "sine=f=1318.4:d=' + totalDuration + ',volume=\'0.018*abs(sin(2*PI*t*0.6+1))\':eval=frame" -filter_complex "[0][1]amix=2:duration=longest,aecho=0.4:0.3:60:0.25,afade=t=in:d=2,afade=t=out:st=' + (totalDuration - 3) + ':d=3" "' + tempDir + '/sparkle.wav"');
    run('ffmpeg -y -f lavfi -i "sine=f=130.8:d=' + totalDuration + ',volume=0.05,tremolo=f=0.2:d=0.3,afade=t=in:d=1.5,afade=t=out:st=' + (totalDuration - 3) + ':d=3" "' + tempDir + '/bass.wav"');
    run('ffmpeg -y -f lavfi -i "anoisesrc=d=' + totalDuration + ':c=pink:a=0.002,afade=t=in:d=1,afade=t=out:st=' + (totalDuration - 2) + ':d=2" "' + tempDir + '/atmos.wav"');

    run('ffmpeg -y -i "' + tempDir + '/melody.wav" -i "' + tempDir + '/pad.wav" -i "' + tempDir + '/sparkle.wav" -i "' + tempDir + '/bass.wav" -i "' + tempDir + '/atmos.wav" -filter_complex "[0][1][2][3][4]amix=inputs=5:duration=longest:normalize=0,volume=2.0,alimiter=limit=0.9,equalizer=f=400:t=h:w=200:g=2,equalizer=f=5000:t=h:w=3000:g=1" -ar 44100 -ac 2 -b:a 192k -t ' + totalDuration + ' "' + bgmFile + '"');
  } finally {
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function processVideo(video, index, total) {
  const videoId = video.id;
  const title = video.title || videoId;
  const audioDir = path.join(PUBLIC_DIR, videoId + "-audio");

  if (fs.existsSync(audioDir)) {
    const files = fs.readdirSync(audioDir);
    const expected = (video.items || []).length + 1;
    if (files.length >= expected) {
      console.log("  [" + (index + 1) + "/" + total + "] SKIP: " + title + " (audio exists)");
      return;
    }
  }

  console.log("  [" + (index + 1) + "/" + total + "] Generating audio for: " + title);
  ensureDir(audioDir);

  process.stdout.write("    Voice lines...\n");
  generateLetterVoice(video, audioDir);
  console.log("    OK: Voice done");

  process.stdout.write("    BGM (5-layer)... ");
  generateBGM(video, audioDir);
  console.log("done");
}

async function main() {
  console.log("============================================");
  console.log("  Kids Learning Audio Generator");
  console.log("============================================\n");

  // Load all catalogs
  const catalogFiles = fs.readdirSync(SCRIPT_DIR)
    .filter((f) => f.endsWith("-catalog.json"))
    .sort();

  let allVideos = [];
  for (const file of catalogFiles) {
    const catalog = JSON.parse(fs.readFileSync(path.join(SCRIPT_DIR, file), "utf-8"));
    const videos = Array.isArray(catalog) ? catalog : catalog.videos || [];
    allVideos = allVideos.concat(videos);
  }

  // Filter
  if (filterById) {
    allVideos = allVideos.filter((v) => v.id === filterById);
  } else {
    allVideos = allVideos.slice(fromIdx, toIdx);
  }

  console.log("Videos to process: " + allVideos.length + "\n");
  const startTime = Date.now();

  for (let i = 0; i < allVideos.length; i++) {
    try {
      processVideo(allVideos[i], i, allVideos.length);
    } catch (err) {
      console.error("  ERROR on " + allVideos[i].id + ": " + err.message);
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log("\n============================================");
  console.log("  Audio generation complete!");
  console.log("  Videos: " + allVideos.length + " | Time: " + elapsed + " min");
  console.log("============================================");
}

main().catch(console.error);
