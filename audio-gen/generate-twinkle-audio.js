const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const DURATION = 40; // Total video duration in seconds
const DIR = __dirname;
const VOICE_DIR = path.join(DIR, "twinkle-voice-temp");
const MUSIC_DIR = path.join(DIR, "twinkle-music-temp");
const OUTPUT_DIR = path.join(DIR, "..", "public", "twinkle-audio");

const VERSE_LINES = [
  { index: 0, text: "Twinkle, twinkle, little star," },
  { index: 1, text: "How I wonder what you are!" },
  { index: 2, text: "Up above the world so high," },
  { index: 3, text: "Like a diamond in the sky." },
  { index: 4, text: "Twinkle, twinkle, little star," },
  { index: 5, text: "How I wonder what you are!" },
];

const run = (cmd) => execSync(cmd, { stdio: "pipe" });

async function generateVoiceLines() {
  console.log("🎙️  Generating English voice lines (edge-tts)...");

  if (fs.existsSync(VOICE_DIR)) fs.rmSync(VOICE_DIR, { recursive: true });
  fs.mkdirSync(VOICE_DIR);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (let i = 0; i < VERSE_LINES.length; i++) {
    const line = VERSE_LINES[i];
    const mp3File = path.join(OUTPUT_DIR, `verse_${line.index}.mp3`);

    // Use a friendly, child-like English voice with slow rate for kids
    const cmd = `python3 -m edge_tts --voice "en-US-AnaNeural" --rate="-25%" --pitch="+5Hz" --text "${line.text.replace(/"/g, '\\"')}" --write-media "${mp3File}"`;
    run(cmd);
    process.stdout.write(`\r   Line ${i + 1}/${VERSE_LINES.length}: "${line.text}"`);
  }
  console.log("\n   ✅ All voice lines generated");
}

async function generateLullabyBGM() {
  console.log("🎵 Generating lullaby background music...");

  if (fs.existsSync(MUSIC_DIR)) fs.rmSync(MUSIC_DIR, { recursive: true });
  fs.mkdirSync(MUSIC_DIR);

  const t = MUSIC_DIR;

  // === LULLABY MELODY ===
  // Twinkle Twinkle melody notes (C major): C C G G A A G - F F E E D D C
  // Frequencies: C4=261.6, D4=293.7, E4=329.6, F4=349.2, G4=392, A4=440

  // Music box / celesta-like tones using sine harmonics
  // Each note ~0.7s, total melody ~10s, looped across 40s

  // Note 1: C C (Twinkle twinkle)
  run(`ffmpeg -y -f lavfi -i "sine=f=523.2:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1046.4:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n01.wav`);
  // Note 2: C
  run(`ffmpeg -y -f lavfi -i "sine=f=523.2:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1046.4:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n02.wav`);
  // Note 3: G G (little)
  run(`ffmpeg -y -f lavfi -i "sine=f=784:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1568:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n03.wav`);
  // Note 4: G
  run(`ffmpeg -y -f lavfi -i "sine=f=784:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1568:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n04.wav`);
  // Note 5: A A (star)
  run(`ffmpeg -y -f lavfi -i "sine=f=880:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1760:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n05.wav`);
  // Note 6: A
  run(`ffmpeg -y -f lavfi -i "sine=f=880:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1760:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n06.wav`);
  // Note 7: G (held longer)
  run(`ffmpeg -y -f lavfi -i "sine=f=784:d=1.1,volume='0.15*exp(-1.5*t)':eval=frame" -f lavfi -i "sine=f=1568:d=1.1,volume='0.06*exp(-2*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n07.wav`);
  // Note 8: F F (How I)
  run(`ffmpeg -y -f lavfi -i "sine=f=698.4:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1396.8:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n08.wav`);
  // Note 9: F
  run(`ffmpeg -y -f lavfi -i "sine=f=698.4:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1396.8:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n09.wav`);
  // Note 10: E E (wonder)
  run(`ffmpeg -y -f lavfi -i "sine=f=659.2:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1318.4:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n10.wav`);
  // Note 11: E
  run(`ffmpeg -y -f lavfi -i "sine=f=659.2:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1318.4:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n11.wav`);
  // Note 12: D D (what you)
  run(`ffmpeg -y -f lavfi -i "sine=f=587.4:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1174.8:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n12.wav`);
  // Note 13: D
  run(`ffmpeg -y -f lavfi -i "sine=f=587.4:d=0.6,volume='0.15*exp(-2*t)':eval=frame" -f lavfi -i "sine=f=1174.8:d=0.6,volume='0.06*exp(-3*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n13.wav`);
  // Note 14: C (are - held)
  run(`ffmpeg -y -f lavfi -i "sine=f=523.2:d=1.1,volume='0.15*exp(-1.5*t)':eval=frame" -f lavfi -i "sine=f=1046.4:d=1.1,volume='0.06*exp(-2*t)':eval=frame" -filter_complex "[0][1]amix=2:duration=shortest" ${t}/n14.wav`);

  console.log("   melody notes generated...");

  // Concatenate all notes into one melody phrase (~9.4s)
  const noteFiles = [];
  for (let i = 1; i <= 14; i++) {
    noteFiles.push(`${t}/n${String(i).padStart(2, "0")}.wav`);
  }

  // Create a concat file
  const concatList = noteFiles.map((f) => `file '${f}'`).join("\n");
  fs.writeFileSync(`${t}/concat.txt`, concatList);
  run(`ffmpeg -y -f concat -safe 0 -i ${t}/concat.txt -c copy ${t}/melody_phrase.wav`);
  console.log("   melody phrase assembled...");

  // Loop melody to fill 40s and add reverb-like effect
  run(`ffmpeg -y -stream_loop 4 -i ${t}/melody_phrase.wav -t ${DURATION} -af "aecho=0.7:0.5:80:0.4,aecho=0.6:0.4:120:0.25,volume=0.7,afade=t=in:d=1,afade=t=out:st=${DURATION - 3}:d=3" -ar 44100 -ac 2 ${t}/melody.wav`);
  console.log("   melody looped with reverb...");

  // === WARM PAD (dreamy background) ===
  run(`ffmpeg -y -f lavfi -i "sine=f=261.6:d=${DURATION},volume=0.04" -f lavfi -i "sine=f=329.6:d=${DURATION},volume=0.03" -f lavfi -i "sine=f=392:d=${DURATION},volume=0.025" -filter_complex "[0][1][2]amix=3:duration=longest,tremolo=f=0.3:d=0.4,afade=t=in:d=3,afade=t=out:st=${DURATION - 4}:d=4" ${t}/pad.wav`);
  console.log("   warm pad...");

  // === SOFT SUB BASS ===
  run(`ffmpeg -y -f lavfi -i "sine=f=65:d=${DURATION},volume=0.06,tremolo=f=0.15:d=0.3,afade=t=in:d=2,afade=t=out:st=${DURATION - 3}:d=3" ${t}/bass.wav`);
  console.log("   soft bass...");

  // === GENTLE ATMOSPHERE (pink noise) ===
  run(`ffmpeg -y -f lavfi -i "anoisesrc=d=${DURATION}:c=pink:a=0.003,afade=t=in:d=2,afade=t=out:st=${DURATION - 3}:d=3" ${t}/atmos.wav`);
  console.log("   atmosphere...");

  // === WIND CHIMES (sparkly high tones) ===
  run(`ffmpeg -y -f lavfi -i "sine=f=1046.4:d=${DURATION},volume='0.02*abs(sin(2*PI*t*0.5))':eval=frame" -f lavfi -i "sine=f=1318.4:d=${DURATION},volume='0.015*abs(sin(2*PI*t*0.35+1))':eval=frame" -f lavfi -i "sine=f=1568:d=${DURATION},volume='0.01*abs(sin(2*PI*t*0.7+2))':eval=frame" -filter_complex "[0][1][2]amix=3:duration=longest,aecho=0.5:0.3:100:0.3,afade=t=in:d=3,afade=t=out:st=${DURATION - 3}:d=3" ${t}/chimes.wav`);
  console.log("   wind chimes...");

  // === MIX ALL BGM LAYERS ===
  console.log("   🎛️  Mixing 5 layers...");
  run(`ffmpeg -y \
    -i ${t}/melody.wav -i ${t}/pad.wav -i ${t}/bass.wav \
    -i ${t}/atmos.wav -i ${t}/chimes.wav \
    -filter_complex " \
      [0]apad=whole_dur=${DURATION}[a0]; \
      [1]apad=whole_dur=${DURATION}[a1]; \
      [2]apad=whole_dur=${DURATION}[a2]; \
      [3]apad=whole_dur=${DURATION}[a3]; \
      [4]apad=whole_dur=${DURATION}[a4]; \
      [a0][a1][a2][a3][a4]amix=inputs=5:duration=shortest:normalize=0, \
      volume=2.5,alimiter=limit=0.9, \
      equalizer=f=400:t=h:w=200:g=2, \
      equalizer=f=5000:t=h:w=3000:g=1 \
    " \
    -ar 44100 -ac 2 -t ${DURATION} "${path.join(OUTPUT_DIR, "bgm.wav")}"`);

  fs.rmSync(MUSIC_DIR, { recursive: true });
  console.log("   ✅ Lullaby BGM ready (5 layers)");
}

async function main() {
  console.log("═══════════════════════════════════════");
  console.log("  Twinkle Twinkle Audio Generator");
  console.log("  English Voice + Lullaby BGM");
  console.log("═══════════════════════════════════════\n");

  await generateVoiceLines();
  await generateLullabyBGM();

  console.log("\n═══════════════════════════════════════");
  console.log("  ✅ Audio ready at: public/twinkle-audio/");
  console.log("═══════════════════════════════════════\n");
}

main().catch(console.error);
