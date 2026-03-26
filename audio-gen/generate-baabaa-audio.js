const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const DURATION = 74; // Total video duration
const DIR = __dirname;
const VOICE_DIR = path.join(DIR, "baabaa-voice-temp");
const MUSIC_DIR = path.join(DIR, "baabaa-music-temp");
const OUTPUT_DIR = path.join(DIR, "..", "public", "baabaa-audio");

// 8 lines × 2 cycles = 16 voice lines
const VERSE_LINES = [
  "Baa, baa, black sheep,",
  "Have you any wool?",
  "Yes sir, yes sir,",
  "Three bags full!",
  "One for the master,",
  "One for the dame,",
  "And one for the little boy,",
  "Who lives down the lane.",
];

const run = (cmd) => execSync(cmd, { stdio: "pipe" });

async function generateVoiceLines() {
  console.log("🎙️  Generating English voice lines (edge-tts)...");

  if (fs.existsSync(VOICE_DIR)) fs.rmSync(VOICE_DIR, { recursive: true });
  fs.mkdirSync(VOICE_DIR);
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Generate 16 lines (8 unique × 2 cycles)
  for (let i = 0; i < 16; i++) {
    const lineText = VERSE_LINES[i % 8];
    const mp3File = path.join(OUTPUT_DIR, `verse_${i}.mp3`);

    // Child-friendly English voice, slow for kids
    const cmd = `python3 -m edge_tts --voice "en-US-AnaNeural" --rate="-20%" --pitch="+3Hz" --text "${lineText.replace(/"/g, '\\"')}" --write-media "${mp3File}"`;
    run(cmd);
    process.stdout.write(`\r   Line ${i + 1}/16: "${lineText}"`);
  }
  console.log("\n   ✅ All 16 voice lines generated");
}

async function generateBGM() {
  console.log("🎵 Generating cheerful farm BGM...");

  if (fs.existsSync(MUSIC_DIR)) fs.rmSync(MUSIC_DIR, { recursive: true });
  fs.mkdirSync(MUSIC_DIR);

  const t = MUSIC_DIR;

  // === MELODY: Baa Baa Black Sheep tune ===
  // Notes: C C G G A A G - F F E E D D C (same as Twinkle Twinkle!)
  // But played with a more upbeat, bouncy feel - faster tempo

  const notes = [
    { f: 523.2, d: 0.45 },  // C - Baa
    { f: 523.2, d: 0.45 },  // C - baa
    { f: 784, d: 0.45 },    // G - black
    { f: 784, d: 0.45 },    // G - sheep
    { f: 880, d: 0.45 },    // A - have
    { f: 880, d: 0.45 },    // A - you
    { f: 784, d: 0.85 },    // G - wool (held)
    { f: 698.4, d: 0.45 },  // F - yes
    { f: 698.4, d: 0.45 },  // F - sir
    { f: 659.2, d: 0.45 },  // E - yes
    { f: 659.2, d: 0.45 },  // E - sir
    { f: 587.4, d: 0.45 },  // D - three
    { f: 587.4, d: 0.45 },  // D - bags
    { f: 523.2, d: 0.85 },  // C - full (held)
  ];

  for (let i = 0; i < notes.length; i++) {
    const n = notes[i];
    // Xylophone-like tone: fundamental + octave + slight detuned
    run(`ffmpeg -y -f lavfi -i "sine=f=${n.f}:d=${n.d},volume='0.18*exp(-3*t)':eval=frame" -f lavfi -i "sine=f=${n.f * 2}:d=${n.d},volume='0.08*exp(-4*t)':eval=frame" -f lavfi -i "sine=f=${n.f * 3}:d=${n.d},volume='0.03*exp(-5*t)':eval=frame" -filter_complex "[0][1][2]amix=3:duration=shortest" ${t}/n${String(i + 1).padStart(2, "0")}.wav`);
  }
  console.log("   melody notes generated...");

  const noteFiles = notes.map((_, i) => `file '${t}/n${String(i + 1).padStart(2, "0")}.wav'`).join("\n");
  fs.writeFileSync(`${t}/concat.txt`, noteFiles);
  run(`ffmpeg -y -f concat -safe 0 -i ${t}/concat.txt -c copy ${t}/melody_phrase.wav`);

  // Loop melody for full duration with a bright, airy reverb
  run(`ffmpeg -y -stream_loop 10 -i ${t}/melody_phrase.wav -t ${DURATION} -af "aecho=0.6:0.4:60:0.35,volume=0.8,afade=t=in:d=1,afade=t=out:st=${DURATION - 3}:d=3" -ar 44100 -ac 2 ${t}/melody.wav`);
  console.log("   melody looped...");

  // === CHEERFUL PAD (major chord) ===
  run(`ffmpeg -y -f lavfi -i "sine=f=261.6:d=${DURATION},volume=0.035" -f lavfi -i "sine=f=329.6:d=${DURATION},volume=0.03" -f lavfi -i "sine=f=392:d=${DURATION},volume=0.025" -filter_complex "[0][1][2]amix=3:duration=longest,tremolo=f=0.4:d=0.3,afade=t=in:d=2,afade=t=out:st=${DURATION - 3}:d=3" ${t}/pad.wav`);
  console.log("   cheerful pad...");

  // === GENTLE KICK (playful beat ~100bpm) ===
  run(`ffmpeg -y -f lavfi -i "sine=f=80:d=${DURATION},volume='0.15*exp(-12*mod(t,0.6))':eval=frame,lowpass=f=120,afade=t=in:d=1,afade=t=out:st=${DURATION - 3}:d=3" ${t}/kick.wav`);
  console.log("   kick...");

  // === SHAKER (light hi-hat) ===
  run(`ffmpeg -y -f lavfi -i "anoisesrc=d=${DURATION}:c=white:a=0.004,highpass=f=8000,volume='0.5*exp(-25*mod(t,0.3))':eval=frame,afade=t=in:d=2,afade=t=out:st=${DURATION - 3}:d=3" ${t}/shaker.wav`);
  console.log("   shaker...");

  // === BIRDS CHIRP (sine pulses at high freq) ===
  run(`ffmpeg -y -f lavfi -i "sine=f=2400:d=${DURATION},volume='0.02*abs(sin(2*PI*t*1.5))':eval=frame" -f lavfi -i "sine=f=3200:d=${DURATION},volume='0.012*abs(sin(2*PI*t*1.1+1.5))':eval=frame" -filter_complex "[0][1]amix=2:duration=longest,afade=t=in:d=3,afade=t=out:st=${DURATION - 3}:d=3" ${t}/birds.wav`);
  console.log("   birds...");

  // === ATMOSPHERE ===
  run(`ffmpeg -y -f lavfi -i "anoisesrc=d=${DURATION}:c=pink:a=0.002,afade=t=in:d=1,afade=t=out:st=${DURATION - 3}:d=3" ${t}/atmos.wav`);
  console.log("   atmosphere...");

  // === MIX ALL ===
  console.log("   🎛️  Mixing 6 layers...");
  run(`ffmpeg -y \
    -i ${t}/melody.wav -i ${t}/pad.wav -i ${t}/kick.wav \
    -i ${t}/shaker.wav -i ${t}/birds.wav -i ${t}/atmos.wav \
    -filter_complex " \
      [0]apad=whole_dur=${DURATION}[a0]; \
      [1]apad=whole_dur=${DURATION}[a1]; \
      [2]apad=whole_dur=${DURATION}[a2]; \
      [3]apad=whole_dur=${DURATION}[a3]; \
      [4]apad=whole_dur=${DURATION}[a4]; \
      [5]apad=whole_dur=${DURATION}[a5]; \
      [a0][a1][a2][a3][a4][a5]amix=inputs=6:duration=shortest:normalize=0, \
      volume=2.8,alimiter=limit=0.9, \
      equalizer=f=500:t=h:w=300:g=2, \
      equalizer=f=4000:t=h:w=2000:g=1.5 \
    " \
    -ar 44100 -ac 2 -t ${DURATION} "${path.join(OUTPUT_DIR, "bgm.wav")}"`);

  fs.rmSync(MUSIC_DIR, { recursive: true });
  console.log("   ✅ Farm BGM ready (6 layers)");
}

async function main() {
  console.log("═══════════════════════════════════════");
  console.log("  Baa Baa Black Sheep Audio Generator");
  console.log("  English Voice + Cheerful Farm BGM");
  console.log("═══════════════════════════════════════\n");

  await generateVoiceLines();
  await generateBGM();

  console.log("\n═══════════════════════════════════════");
  console.log("  ✅ Audio ready at: public/baabaa-audio/");
  console.log("═══════════════════════════════════════\n");
}

main().catch(console.error);
