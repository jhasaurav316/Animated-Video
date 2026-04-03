#!/usr/bin/env node
// ============================================================================
// Generate Phase-wise Render Scripts (20 phases × ~51 videos = 1020)
// ============================================================================
// Each video: 2:45 (165 seconds) with looping letter content
// ============================================================================

const path = require("path");
const fs = require("fs");

const BASE_DIR = __dirname;

// 34 categories × 30 videos = 1020 videos → 20 phases of 51 each
const PHASES = [
  { phase: 1, categories: [
    { key: "toys", name: "Toys", from: 0, to: 30 },
    { key: "superheroes", name: "Superheroes", from: 0, to: 21 },
  ]},
  { phase: 2, categories: [
    { key: "superheroes", name: "Superheroes", from: 21, to: 30 },
    { key: "cartoon-characters", name: "Cartoon Characters", from: 0, to: 30 },
    { key: "wild-cats", name: "Wild Cats", from: 0, to: 12 },
  ]},
  { phase: 3, categories: [
    { key: "wild-cats", name: "Wild Cats", from: 12, to: 30 },
    { key: "pet-animals", name: "Pet Animals", from: 0, to: 30 },
    { key: "jungle-animals", name: "Jungle Animals", from: 0, to: 3 },
  ]},
  { phase: 4, categories: [
    { key: "jungle-animals", name: "Jungle Animals", from: 3, to: 30 },
    { key: "arctic-animals", name: "Arctic Animals", from: 0, to: 24 },
  ]},
  { phase: 5, categories: [
    { key: "arctic-animals", name: "Arctic Animals", from: 24, to: 30 },
    { key: "shapes", name: "Shapes", from: 0, to: 30 },
    { key: "numbers", name: "Numbers", from: 0, to: 15 },
  ]},
  { phase: 6, categories: [
    { key: "numbers", name: "Numbers", from: 15, to: 30 },
    { key: "colors", name: "Colors", from: 0, to: 30 },
    { key: "vehicles", name: "Vehicles", from: 0, to: 6 },
  ]},
  { phase: 7, categories: [
    { key: "vehicles", name: "Vehicles", from: 6, to: 30 },
    { key: "buildings", name: "Buildings", from: 0, to: 27 },
  ]},
  { phase: 8, categories: [
    { key: "buildings", name: "Buildings", from: 27, to: 30 },
    { key: "furniture", name: "Furniture", from: 0, to: 30 },
    { key: "school-items", name: "School Items", from: 0, to: 18 },
  ]},
  { phase: 9, categories: [
    { key: "school-items", name: "School Items", from: 18, to: 30 },
    { key: "playground", name: "Playground", from: 0, to: 30 },
    { key: "musical-sounds", name: "Musical Sounds", from: 0, to: 9 },
  ]},
  { phase: 10, categories: [
    { key: "musical-sounds", name: "Musical Sounds", from: 9, to: 30 },
    { key: "fairy-tales", name: "Fairy Tales", from: 0, to: 30 },
  ]},
  { phase: 11, categories: [
    { key: "science-words", name: "Science Words", from: 0, to: 30 },
    { key: "winter-words", name: "Winter Words", from: 0, to: 21 },
  ]},
  { phase: 12, categories: [
    { key: "winter-words", name: "Winter Words", from: 21, to: 30 },
    { key: "summer-words", name: "Summer Words", from: 0, to: 30 },
    { key: "halloween", name: "Halloween", from: 0, to: 12 },
  ]},
  { phase: 13, categories: [
    { key: "halloween", name: "Halloween", from: 12, to: 30 },
    { key: "christmas", name: "Christmas", from: 0, to: 30 },
    { key: "garden-items", name: "Garden Items", from: 0, to: 3 },
  ]},
  { phase: 14, categories: [
    { key: "garden-items", name: "Garden Items", from: 3, to: 30 },
    { key: "bath-time", name: "Bath Time", from: 0, to: 24 },
  ]},
  { phase: 15, categories: [
    { key: "bath-time", name: "Bath Time", from: 24, to: 30 },
    { key: "breakfast-foods", name: "Breakfast Foods", from: 0, to: 30 },
    { key: "snacks", name: "Snacks", from: 0, to: 15 },
  ]},
  { phase: 16, categories: [
    { key: "snacks", name: "Snacks", from: 15, to: 30 },
    { key: "drinks", name: "Drinks", from: 0, to: 30 },
    { key: "candy", name: "Candy", from: 0, to: 6 },
  ]},
  { phase: 17, categories: [
    { key: "candy", name: "Candy", from: 6, to: 30 },
    { key: "zoo-animals", name: "Zoo Animals", from: 0, to: 27 },
  ]},
  { phase: 18, categories: [
    { key: "zoo-animals", name: "Zoo Animals", from: 27, to: 30 },
    { key: "underwater", name: "Underwater", from: 0, to: 30 },
    { key: "rainforest", name: "Rainforest", from: 0, to: 18 },
  ]},
  { phase: 19, categories: [
    { key: "rainforest", name: "Rainforest", from: 18, to: 30 },
    { key: "transportation", name: "Transportation", from: 0, to: 30 },
    { key: "festivals", name: "Festivals", from: 0, to: 9 },
  ]},
  { phase: 20, categories: [
    { key: "festivals", name: "Festivals", from: 9, to: 30 },
    { key: "sports-equipment", name: "Sports Equipment", from: 0, to: 30 },
  ]},
];

// Verify total
let totalCheck = 0;
for (const p of PHASES) {
  let phaseTotal = 0;
  for (const c of p.categories) {
    phaseTotal += c.to - c.from;
  }
  totalCheck += phaseTotal;
  console.log(`Phase ${p.phase}: ${phaseTotal} videos`);
}
console.log(`Total: ${totalCheck} videos\n`);

// Generate each phase script
for (const phaseConfig of PHASES) {
  const phaseNum = phaseConfig.phase;
  const phaseTotal = phaseConfig.categories.reduce((sum, c) => sum + (c.to - c.from), 0);

  const catDescs = phaseConfig.categories.map(c => {
    const count = c.to - c.from;
    return `${count} ${c.name}`;
  }).join(" + ");

  const catalogEntries = phaseConfig.categories.map(c =>
    `    @{ Path = "${c.key}\\catalog.json"; Name = "${c.name}"; From = ${c.from}; To = ${c.to} }`
  ).join(",\n");

  const registerCategories = [...new Set(phaseConfig.categories.map(c => c.key))];
  const registerLines = registerCategories.map(k =>
    `node (Join-Path $ProjectDir "${k}\\register-compositions.js")`
  ).join("\n");

  const script = `# ============================================================================
# Phase ${phaseNum} - ${phaseTotal} Videos (${catDescs})
# ============================================================================
# Batch: 1k-video-3april | Each video: 2:45 (165 seconds)
# Usage: cd C:\\test\\1k-video-3april && .\\run-phase${phaseNum}.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = $PSScriptRoot
$cpuCores = (Get-CimInstance Win32_Processor).NumberOfLogicalProcessors

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE ${phaseNum}: ${catDescs}" -ForegroundColor Cyan
Write-Host "  ${phaseTotal} Videos | Using $cpuCores CPU cores | Full HD (1080x1920)" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $ProjectDir

# ======================== STEP 0: FIX ENTRY POINT ========================
Write-Host "  STEP 0: Verifying Entry Point" -ForegroundColor Yellow
node (Join-Path $ProjectDir "fix-entry-point.js")
Write-Host ""

# ======================== STEP 1: GENERATE AUDIO ========================
Write-Host "  STEP 1: Generating Audio" -ForegroundColor Yellow
Write-Host ""

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

$catalogs = @(
${catalogEntries}
)

$audioTotal = 0
$audioDone = 0

foreach ($cat in $catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
    $subset = $videos[$cat.From..($cat.To - 1)]
    $audioTotal += $subset.Count
}

foreach ($cat in $catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
    $subset = $videos[$cat.From..($cat.To - 1)]

    Write-Host "  --- $($cat.Name) ($($subset.Count) videos) ---" -ForegroundColor Magenta

    foreach ($video in $subset) {
        $audioDone++
        $videoId = $video.id
        $audioDir = Join-Path (Join-Path $ProjectDir "public") "$videoId-audio"

        if (Test-Path $audioDir) {
            Write-Host "  [$audioDone/$audioTotal] SKIP: $videoId" -ForegroundColor DarkYellow
            continue
        }

        Write-Host "  [$audioDone/$audioTotal] Audio: $videoId" -ForegroundColor Cyan
        New-Item -ItemType Directory -Path $audioDir -Force | Out-Null

        $items = $video.items
        if (-not $items) { $items = $video.letters }

        for ($i = 0; $i -lt $items.Count; $i++) {
            $item = $items[$i]
            $text = "$($item.letter) for $($item.word)"
            $outFile = Join-Path $audioDir "letter_$i.mp3"
            $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
            edge-tts --voice $Voice --rate="$Rate" --pitch="$Pitch" --text "$text" --write-media "$outFile" 2>&1 | Out-Null
            $ErrorActionPreference = $prevEAP
        }

        # BGM duration = per-video targetDuration (90-175 seconds)
        $duration = $video.targetDuration
        $bgmFile = Join-Path $audioDir "bgm.mp3"
        $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
        $ffmpegCmd = "ffmpeg -y -f lavfi -i \`"sine=frequency=523.25:duration=$duration\`" -f lavfi -i \`"sine=frequency=659.25:duration=$duration\`" -f lavfi -i \`"sine=frequency=783.99:duration=$duration\`" -filter_complex \`"[0]volume=0.08,aformat=channel_layouts=mono[c];[1]volume=0.06,aformat=channel_layouts=mono[e];[2]volume=0.04,aformat=channel_layouts=mono[g];[c][e][g]amix=inputs=3:duration=longest,lowpass=f=2000,volume=0.5[out]\`" -map \`"[out]\`" \`"$bgmFile\`""
        cmd /c $ffmpegCmd 2>&1 | Out-Null
        $ErrorActionPreference = $prevEAP
    }
}

Write-Host "  Audio done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 2: REGISTER COMPOSITIONS ========================
Write-Host "  STEP 2: Registering Compositions" -ForegroundColor Yellow
${registerLines}
Write-Host "  Done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 3: RENDER VIDEOS ========================
Write-Host "  STEP 3: Rendering ${phaseTotal} Videos" -ForegroundColor Yellow
Write-Host ""

$startTime = Get-Date
$rendered = 0
$skipped = 0
$failed = 0
$current = 0
$total = ${phaseTotal}

foreach ($cat in $catalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $folder = $cat.Path.Split('\\\\')[0]
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
    $subset = $videos[$cat.From..($cat.To - 1)]

    $outDir = Join-Path (Join-Path $ProjectDir "out") $folder
    if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

    Write-Host "  --- $($cat.Name) ---" -ForegroundColor Magenta

    foreach ($video in $subset) {
        $current++
        $videoId = $video.id
        $compId = ($videoId -split '[-_\\s]+' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() }) -join ''
        $outputFile = Join-Path $outDir "$videoId.mp4"

        if (Test-Path $outputFile) {
            $skipped++
            Write-Host "  [$current/$total] SKIP: $($video.title)" -ForegroundColor DarkYellow
            continue
        }

        $elapsed = (Get-Date) - $startTime
        Write-Host "  [$current/$total] $($video.title) [$($elapsed.ToString('hh\\:mm\\:ss'))]" -ForegroundColor Cyan

        $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
        npx remotion render $compId "$outputFile" --concurrency=$cpuCores --log=error --crf=18 --codec=h264 --gl=angle --enable-multiprocess-on-linux --port=${3000 + phaseNum * 100}
        $ErrorActionPreference = $prevEAP

        if ($LASTEXITCODE -eq 0) {
            $rendered++
            $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
            Write-Host "    Done! (\${fileSize} MB)" -ForegroundColor Green
        } else {
            $failed++
            Write-Host "    FAILED!" -ForegroundColor Red
        }
    }
}

$elapsed = (Get-Date) - $startTime
Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  PHASE ${phaseNum} COMPLETE!" -ForegroundColor Green
Write-Host "  Rendered: $rendered | Skipped: $skipped | Failed: $failed" -ForegroundColor White
Write-Host "  Time: $($elapsed.ToString('hh\\:mm\\:ss'))" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Green
`;

  const scriptPath = path.join(BASE_DIR, `run-phase${phaseNum}.ps1`);
  fs.writeFileSync(scriptPath, script);
  console.log(`Generated run-phase${phaseNum}.ps1 (${phaseTotal} videos)`);
}

console.log("\nAll 20 phase scripts generated!");
