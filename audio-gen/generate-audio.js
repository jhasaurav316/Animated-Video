const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const DURATION = 46;
const DIR = __dirname;
const VOICE_DIR = path.join(DIR, "voice-temp");
const MUSIC_DIR = path.join(DIR, "music-temp");

const VOICE_LINES = [
  { start: 0.5, text: "Aapke sheher mein... kitne potholes hain?", rate: "-15%", pitch: "-3Hz" },
  { start: 5.8, text: "Tooti sadkein.", rate: "-5%", pitch: "-2Hz" },
  { start: 7.0, text: "Bujhi streetlights.", rate: "-5%", pitch: "-2Hz" },
  { start: 8.3, text: "Ubalte naaley, bikhra kachra.", rate: "-5%", pitch: "-2Hz" },
  { start: 10.0, text: "Sab dikhta hai. Sab jaante hain.", rate: "-10%", pitch: "-4Hz" },
  { start: 12.0, text: "Phir bhi... kuch nahi hota.", rate: "-20%", pitch: "-6Hz" },
  { start: 15.5, text: "Lekin... ab badlega!", rate: "-10%", pitch: "+2Hz" },
  { start: 17.8, text: "Jamshedpur se shuruat hogi.", rate: "-5%", pitch: "+3Hz" },
  { start: 20.8, text: "Pesh hai, SudharMap!", rate: "+0%", pitch: "+4Hz" },
  { start: 22.5, text: "Photo lo, AI apne aap issue detect karega.", rate: "+5%", pitch: "+2Hz" },
  { start: 25.0, text: "Map pe pin daalo, poore sheher ko dikhao.", rate: "+5%", pitch: "+2Hz" },
  { start: 27.5, text: "Real time mein status track karo.", rate: "+5%", pitch: "+2Hz" },
  { start: 29.8, text: "Aur RTI? Wo automatic ban jaayegi!", rate: "+0%", pitch: "+3Hz" },
  { start: 33.0, text: "SudharMap!", rate: "-20%", pitch: "+5Hz" },
  { start: 35.0, text: "Apne sheher ki samasya report karo. Apna sheher sudharo!", rate: "-5%", pitch: "+3Hz" },
  { start: 37.5, text: "Sabse pehle... Jamshedpur mein launch ho raha hai!", rate: "+0%", pitch: "+4Hz" },
  { start: 40.0, text: "Apna sheher, apni zimmedaari.", rate: "-15%", pitch: "+0Hz" },
  { start: 43.0, text: "Follow karo SudharMap. Sabse pehle jaano.", rate: "-10%", pitch: "+0Hz" },
];

const run = (cmd) => execSync(cmd, { stdio: "pipe" });

async function generateVoice() {
  console.log("🎙️  Generating Hindi voiceover (edge-tts)...");

  if (fs.existsSync(VOICE_DIR)) fs.rmSync(VOICE_DIR, { recursive: true });
  fs.mkdirSync(VOICE_DIR);

  for (let i = 0; i < VOICE_LINES.length; i++) {
    const line = VOICE_LINES[i];
    const mp3File = path.join(VOICE_DIR, `line_${i}.mp3`);
    const wavFile = path.join(VOICE_DIR, `line_${i}.wav`);

    const cmd = `python3 -m edge_tts --voice "hi-IN-MadhurNeural" --rate="${line.rate}" --pitch="${line.pitch}" --text "${line.text.replace(/"/g, '\\"')}" --write-media "${mp3File}"`;
    run(cmd);
    run(`ffmpeg -y -i "${mp3File}" -ar 44100 -ac 1 "${wavFile}"`);
    process.stdout.write(`\r   Line ${i + 1}/${VOICE_LINES.length}: "${line.text.substring(0, 45)}..."`);
  }
  console.log("\n   ✅ All voice lines generated");

  // Mix voice lines at correct timestamps
  let inputs = "";
  let filterParts = [];

  for (let i = 0; i < VOICE_LINES.length; i++) {
    const wavFile = path.join(VOICE_DIR, `line_${i}.wav`);
    const delayMs = Math.round(VOICE_LINES[i].start * 1000);
    inputs += ` -i "${wavFile}"`;
    filterParts.push(`[${i}]adelay=${delayMs}|${delayMs},apad=whole_dur=${DURATION}[v${i}]`);
  }

  const mixInputs = VOICE_LINES.map((_, i) => `[v${i}]`).join("");
  const filter =
    filterParts.join("; ") +
    `; ${mixInputs}amix=inputs=${VOICE_LINES.length}:duration=shortest:normalize=0,volume=${VOICE_LINES.length * 0.85},alimiter=limit=0.95,equalizer=f=2500:t=h:w=2000:g=4,equalizer=f=150:t=h:w=100:g=-3`;

  const voiceOut = path.join(DIR, "voice.wav");
  run(`ffmpeg -y ${inputs} -filter_complex "${filter}" -ar 44100 -ac 2 -t ${DURATION} "${voiceOut}"`);

  fs.rmSync(VOICE_DIR, { recursive: true });
  console.log("   ✅ Voice narration mixed");
  return voiceOut;
}

async function generateBGMusic() {
  console.log("🎵 Generating cinematic BGM...");

  if (fs.existsSync(MUSIC_DIR)) fs.rmSync(MUSIC_DIR, { recursive: true });
  fs.mkdirSync(MUSIC_DIR);

  const t = MUSIC_DIR;

  // Deep sub bass
  run(`ffmpeg -y -f lavfi -i "sine=f=55:d=${DURATION},volume='if(lt(t,5),0.08,if(lt(t,15),0.18,if(lt(t,15.15),0.45,if(lt(t,20),0.22,if(lt(t,32),0.2,if(lt(t,40),0.28,0.1))))))':eval=frame,afade=t=in:d=1,afade=t=out:st=43:d=3" ${t}/bass.wav`);
  console.log("   bass...");

  // Minor chord sad pad (0-15s)
  run(`ffmpeg -y -f lavfi -i "sine=f=110:d=15,volume=0.055" -f lavfi -i "sine=f=130.8:d=15,volume=0.045" -f lavfi -i "sine=f=164.8:d=15,volume=0.04" -filter_complex "[0][1][2]amix=3:duration=longest,tremolo=f=0.25:d=0.6,afade=t=in:d=2.5,afade=t=out:st=12.5:d=2.5" ${t}/sad.wav`);
  console.log("   sad pad...");

  // Heartbeat (5-15s)
  run(`ffmpeg -y -f lavfi -i "sine=f=42:d=10,volume='0.35*exp(-7*mod(t,1))':eval=frame,lowpass=f=80,afade=t=in:d=0.5,afade=t=out:st=8:d=2" ${t}/heart.wav`);
  console.log("   heartbeat...");

  // Eerie high (0-15s)
  run(`ffmpeg -y -f lavfi -i "sine=f=880:d=15,volume=0.012,tremolo=f=0.5:d=0.8,afade=t=in:d=3,afade=t=out:st=12:d=3" ${t}/eerie.wav`);
  console.log("   eerie...");

  // Impact hit at 15s
  run(`ffmpeg -y -f lavfi -i "sine=f=35:d=2.5,volume='0.8*exp(-2.5*t)':eval=frame" -f lavfi -i "anoisesrc=d=2.5:c=white:a=0.02,highpass=f=1500,volume='0.7*exp(-3.5*t)':eval=frame" -f lavfi -i "sine=f=70:d=2.5,volume='0.5*exp(-3*t)':eval=frame" -filter_complex "[0][1][2]amix=3:duration=longest" ${t}/impact.wav`);
  console.log("   impact...");

  // Happy major pad (20-40s)
  run(`ffmpeg -y -f lavfi -i "sine=f=261.6:d=20,volume=0.045" -f lavfi -i "sine=f=329.6:d=20,volume=0.035" -f lavfi -i "sine=f=392:d=20,volume=0.035" -f lavfi -i "sine=f=523.2:d=20,volume=0.025" -filter_complex "[0][1][2][3]amix=4:duration=longest,tremolo=f=1.5:d=0.2,afade=t=in:d=2,afade=t=out:st=17:d=3" ${t}/happy.wav`);
  console.log("   happy pad...");

  // Kick (120bpm, 20-40s)
  run(`ffmpeg -y -f lavfi -i "sine=f=55:d=20,volume='0.3*exp(-14*mod(t,0.5))':eval=frame,lowpass=f=100,afade=t=in:d=1,afade=t=out:st=17:d=3" ${t}/kick.wav`);
  console.log("   kick...");

  // Snare (20-40s)
  run(`ffmpeg -y -f lavfi -i "anoisesrc=d=20:c=white:a=0.01,bandpass=f=3000:w=2000,volume='0.45*exp(-20*mod(t+0.25,0.5))':eval=frame,afade=t=in:d=1.5,afade=t=out:st=17:d=3" ${t}/snare.wav`);
  console.log("   snare...");

  // Hi-hat (20-40s)
  run(`ffmpeg -y -f lavfi -i "anoisesrc=d=20:c=white:a=0.005,highpass=f=9000,volume='0.4*exp(-35*mod(t,0.25))':eval=frame,afade=t=in:d=1,afade=t=out:st=17:d=3" ${t}/hihat.wav`);
  console.log("   hi-hat...");

  // Sparkle (32-40s)
  run(`ffmpeg -y -f lavfi -i "sine=f=784:d=8,volume='0.035*abs(sin(2*PI*t*4))':eval=frame" -f lavfi -i "sine=f=988:d=8,volume='0.025*abs(sin(2*PI*t*3.5+0.7))':eval=frame" -f lavfi -i "sine=f=1175:d=8,volume='0.02*abs(sin(2*PI*t*3+1.4))':eval=frame" -filter_complex "[0][1][2]amix=3:duration=longest,afade=t=in:d=1,afade=t=out:st=6:d=2" ${t}/spark.wav`);
  console.log("   sparkle...");

  // Triumph chord (32-40s)
  run(`ffmpeg -y -f lavfi -i "sine=f=196:d=8,volume=0.04" -f lavfi -i "sine=f=247:d=8,volume=0.03" -f lavfi -i "sine=f=294:d=8,volume=0.03" -f lavfi -i "sine=f=392:d=8,volume=0.025" -filter_complex "[0][1][2][3]amix=4:duration=longest,afade=t=in:d=0.5,afade=t=out:st=6:d=2" ${t}/triumph.wav`);
  console.log("   triumph...");

  // Outro pad (39-46s)
  run(`ffmpeg -y -f lavfi -i "sine=f=220:d=7,volume=0.035" -f lavfi -i "sine=f=261.6:d=7,volume=0.025" -f lavfi -i "sine=f=329.6:d=7,volume=0.02" -filter_complex "[0][1][2]amix=3:duration=longest,afade=t=in:d=1.5,afade=t=out:st=4:d=3" ${t}/outro.wav`);
  console.log("   outro pad...");

  // Atmosphere
  run(`ffmpeg -y -f lavfi -i "anoisesrc=d=${DURATION}:c=pink:a=0.0025,afade=t=in:d=1,afade=t=out:st=43:d=3" ${t}/atmos.wav`);
  console.log("   atmosphere...");

  // Mix all layers
  console.log("   🎛️  Mixing 13 layers...");
  run(`ffmpeg -y \
    -i ${t}/bass.wav -i ${t}/atmos.wav -i ${t}/sad.wav -i ${t}/heart.wav \
    -i ${t}/eerie.wav -i ${t}/impact.wav -i ${t}/happy.wav -i ${t}/kick.wav \
    -i ${t}/snare.wav -i ${t}/hihat.wav -i ${t}/spark.wav \
    -i ${t}/triumph.wav -i ${t}/outro.wav \
    -filter_complex " \
      [0]apad=whole_dur=${DURATION}[a0]; \
      [1]apad=whole_dur=${DURATION}[a1]; \
      [2]adelay=0|0,apad=whole_dur=${DURATION}[a2]; \
      [3]adelay=5000|5000,apad=whole_dur=${DURATION}[a3]; \
      [4]adelay=0|0,apad=whole_dur=${DURATION}[a4]; \
      [5]adelay=14800|14800,apad=whole_dur=${DURATION}[a5]; \
      [6]adelay=20000|20000,apad=whole_dur=${DURATION}[a6]; \
      [7]adelay=20000|20000,apad=whole_dur=${DURATION}[a7]; \
      [8]adelay=20000|20000,apad=whole_dur=${DURATION}[a8]; \
      [9]adelay=20000|20000,apad=whole_dur=${DURATION}[a9]; \
      [10]adelay=32000|32000,apad=whole_dur=${DURATION}[a10]; \
      [11]adelay=32000|32000,apad=whole_dur=${DURATION}[a11]; \
      [12]adelay=39000|39000,apad=whole_dur=${DURATION}[a12]; \
      [a0][a1][a2][a3][a4][a5][a6][a7][a8][a9][a10][a11][a12]amix=inputs=13:duration=shortest:normalize=0, \
      volume=2.5,alimiter=limit=0.9, \
      equalizer=f=60:t=h:w=40:g=3, \
      equalizer=f=200:t=h:w=100:g=-2, \
      equalizer=f=4000:t=h:w=2000:g=2 \
    " \
    -ar 44100 -ac 2 -t ${DURATION} "${path.join(DIR, "bgm.wav")}"`);

  fs.rmSync(MUSIC_DIR, { recursive: true });
  console.log("   ✅ BGM ready (13 layers)");
  return path.join(DIR, "bgm.wav");
}

async function mixFinal(voiceFile, musicFile) {
  console.log("🔊 Final mix: voice + BGM...");
  const outputFile = path.join(DIR, "..", "public", "audio.wav");

  run(`ffmpeg -y -i "${voiceFile}" -i "${musicFile}" -filter_complex \
    "[0]equalizer=f=2800:t=h:w=2000:g=3,equalizer=f=100:t=h:w=80:g=-4[voice]; \
     [1]volume=0.4[bg]; \
     [voice][bg]amix=inputs=2:duration=longest:weights=1.8 0.5, \
     alimiter=limit=0.95, \
     equalizer=f=3000:t=h:w=2000:g=2, \
     equalizer=f=100:t=h:w=80:g=1" \
    -ar 44100 -ac 2 "${outputFile}"`);

  // Cleanup temp files
  fs.unlinkSync(voiceFile);
  fs.unlinkSync(musicFile);

  console.log("✅ Final audio saved to: " + outputFile);
  return outputFile;
}

async function main() {
  console.log("═══════════════════════════════════════");
  console.log("  SudharMap Audio Generator");
  console.log("  Hindi Voice + 13-layer Cinematic BGM");
  console.log("═══════════════════════════════════════\n");

  const voiceFile = await generateVoice();
  const musicFile = await generateBGMusic();
  const finalAudio = await mixFinal(voiceFile, musicFile);

  console.log("\n═══════════════════════════════════════");
  console.log("  ✅ Audio ready at: public/audio.wav");
  console.log("═══════════════════════════════════════\n");
}

main().catch(console.error);
