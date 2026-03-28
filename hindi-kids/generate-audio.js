#!/usr/bin/env node
// Hindi Kids Audio Generator - uses Hindi TTS voice
// Generates "अ से अनार" style voice lines + BGM

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const SCRIPT_DIR = __dirname;
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const CATALOG_PATH = path.join(SCRIPT_DIR, "catalog.json");

// Hindi child-friendly voice
const VOICE = "hi-IN-SwaraNeural";
const RATE = "-10%";
const PITCH = "+5Hz";
const PYTHON = process.platform === "win32" ? "python" : "python3";

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

function generateVoice(video, audioDir) {
  const items = video.items || [];
  const connector = video.connectorWord || "\u0938\u0947";

  for (let i = 0; i < items.length; i++) {
    const outputFile = path.join(audioDir, "letter_" + i + ".mp3");
    if (fs.existsSync(outputFile)) continue;

    const item = items[i];
    const text = item.letter + " " + connector + " " + item.word;
    const safeText = text.replace(/"/g, '\\"');
    const cmd = PYTHON + ' -m edge_tts --voice "' + VOICE + '" --rate="' + RATE + '" --pitch="' + PITCH + '" --text "' + safeText + '" --write-media "' + outputFile + '"';
    run(cmd);
    process.stdout.write("\r    " + (i + 1) + "/" + items.length + ": " + text + "              ");
  }
  process.stdout.write("\n");
}

function generateBGM(video, audioDir) {
  const bgmFile = path.join(audioDir, "bgm.mp3");
  if (fs.existsSync(bgmFile)) return;

  const itemCount = (video.items || []).length;
  const letterDur = video.letterDuration || 4;
  const introDur = video.introDuration || 4;
  const outroDur = video.outroDuration || 3;
  const totalDuration = introDur + itemCount * letterDur + outroDur;
  const tempDir = path.join(audioDir, "_bgm_temp");
  ensureDir(tempDir);

  try {
    // Indian-style melody using Sa Re Ga Ma Pa notes
    const melodyNotes = [
      { f: 261.6, d: 0.5 }, { f: 293.7, d: 0.5 }, { f: 329.6, d: 0.5 },
      { f: 349.2, d: 0.5 }, { f: 392.0, d: 0.5 }, { f: 440.0, d: 0.5 },
      { f: 392.0, d: 0.5 }, { f: 329.6, d: 1.0 },
    ];

    for (let i = 0; i < melodyNotes.length; i++) {
      const { f, d } = melodyNotes[i];
      run('ffmpeg -y -f lavfi -i "sine=f=' + f + ':d=' + d + ',volume=\'0.1*exp(-2*t)\':eval=frame" -f lavfi -i "sine=f=' + (f * 2) + ':d=' + d + ',volume=\'0.04*exp(-3*t)\':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" "' + tempDir + '/n' + i + '.wav"');
    }

    const concatList = melodyNotes.map((_, i) => "file '" + tempDir + "/n" + i + ".wav'").join("\n");
    fs.writeFileSync(tempDir + "/concat.txt", concatList);
    run('ffmpeg -y -f concat -safe 0 -i "' + tempDir + '/concat.txt" -c copy "' + tempDir + '/melody.wav"');
    run('ffmpeg -y -stream_loop -1 -i "' + tempDir + '/melody.wav" -t ' + totalDuration + ' -af "aecho=0.5:0.4:80:0.3,volume=0.4,afade=t=in:d=1.5,afade=t=out:st=' + (totalDuration - 3) + ':d=3" -ar 44100 -ac 2 "' + tempDir + '/mel.wav"');

    // Tabla-like rhythm
    run('ffmpeg -y -f lavfi -i "sine=f=120:d=' + totalDuration + ',volume=\'0.15*exp(-12*mod(t,0.5))\':eval=frame,lowpass=f=200" "' + tempDir + '/tabla.wav"');

    // Warm pad
    run('ffmpeg -y -f lavfi -i "sine=f=130.8:d=' + totalDuration + ',volume=0.03" -f lavfi -i "sine=f=196:d=' + totalDuration + ',volume=0.02" -filter_complex "[0][1]amix=2:duration=longest,tremolo=f=0.3:d=0.3,afade=t=in:d=2,afade=t=out:st=' + (totalDuration - 3) + ':d=3" "' + tempDir + '/pad.wav"');

    // Pink noise
    run('ffmpeg -y -f lavfi -i "anoisesrc=d=' + totalDuration + ':c=pink:a=0.002,afade=t=in:d=1,afade=t=out:st=' + (totalDuration - 2) + ':d=2" "' + tempDir + '/atmos.wav"');

    run('ffmpeg -y -i "' + tempDir + '/mel.wav" -i "' + tempDir + '/tabla.wav" -i "' + tempDir + '/pad.wav" -i "' + tempDir + '/atmos.wav" -filter_complex "[0][1][2][3]amix=inputs=4:duration=longest:normalize=0,volume=2.0,alimiter=limit=0.9" -ar 44100 -ac 2 -b:a 192k -t ' + totalDuration + ' "' + bgmFile + '"');
  } finally {
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

async function main() {
  console.log("============================================");
  console.log("  Hindi Kids Audio Generator");
  console.log("  Voice: " + VOICE + " | Style: \u0905 \u0938\u0947 \u0905\u0928\u093e\u0930");
  console.log("============================================\n");

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
  const videos = Array.isArray(catalog) ? catalog : catalog.videos || [];

  console.log("Videos: " + videos.length + "\n");
  const start = Date.now();

  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    const audioDir = path.join(PUBLIC_DIR, video.id + "-audio");

    if (fs.existsSync(audioDir) && fs.readdirSync(audioDir).length >= (video.items || []).length + 1) {
      console.log("  [" + (i + 1) + "/" + videos.length + "] SKIP: " + video.title);
      continue;
    }

    console.log("  [" + (i + 1) + "/" + videos.length + "] " + video.title);
    ensureDir(audioDir);
    generateVoice(video, audioDir);
    console.log("    OK: Voice");
    process.stdout.write("    BGM... ");
    generateBGM(video, audioDir);
    console.log("done");
  }

  const elapsed = ((Date.now() - start) / 1000 / 60).toFixed(1);
  console.log("\n  Done! Time: " + elapsed + " min");
}

main().catch(console.error);
