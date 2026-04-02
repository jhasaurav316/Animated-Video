#!/usr/bin/env node
// ============================================================================
// Generate Phase-wise Render Scripts - BATCH 2 (phases 21-40 × ~51 videos = 1020)
// ============================================================================
// Each video: 2:45 (165 seconds) with looping letter content
// ============================================================================

const path = require("path");
const fs = require("fs");

const BASE_DIR = __dirname;

// 34 NEW categories × 30 videos = 1020 videos → 20 phases of 51 each
const PHASES = [
  { phase: 21, categories: [
    { key: "baby-words", name: "Baby Words", from: 0, to: 30 },
    { key: "family-members", name: "Family Members", from: 0, to: 21 },
  ]},
  { phase: 22, categories: [
    { key: "family-members", name: "Family Members", from: 21, to: 30 },
    { key: "weather", name: "Weather", from: 0, to: 30 },
    { key: "planets", name: "Planets", from: 0, to: 12 },
  ]},
  { phase: 23, categories: [
    { key: "planets", name: "Planets", from: 12, to: 30 },
    { key: "oceans", name: "Oceans", from: 0, to: 30 },
    { key: "mountains", name: "Mountains", from: 0, to: 3 },
  ]},
  { phase: 24, categories: [
    { key: "mountains", name: "Mountains", from: 3, to: 30 },
    { key: "rivers", name: "Rivers", from: 0, to: 24 },
  ]},
  { phase: 25, categories: [
    { key: "rivers", name: "Rivers", from: 24, to: 30 },
    { key: "languages", name: "Languages", from: 0, to: 30 },
    { key: "continents", name: "Continents", from: 0, to: 15 },
  ]},
  { phase: 26, categories: [
    { key: "continents", name: "Continents", from: 15, to: 30 },
    { key: "birds-of-prey", name: "Birds of Prey", from: 0, to: 30 },
    { key: "tropical-fish", name: "Tropical Fish", from: 0, to: 6 },
  ]},
  { phase: 27, categories: [
    { key: "tropical-fish", name: "Tropical Fish", from: 6, to: 30 },
    { key: "farm-crops", name: "Farm Crops", from: 0, to: 27 },
  ]},
  { phase: 28, categories: [
    { key: "farm-crops", name: "Farm Crops", from: 27, to: 30 },
    { key: "spices", name: "Spices", from: 0, to: 30 },
    { key: "breads", name: "Breads", from: 0, to: 18 },
  ]},
  { phase: 29, categories: [
    { key: "breads", name: "Breads", from: 18, to: 30 },
    { key: "pasta", name: "Pasta", from: 0, to: 30 },
    { key: "cheese", name: "Cheese", from: 0, to: 9 },
  ]},
  { phase: 30, categories: [
    { key: "cheese", name: "Cheese", from: 9, to: 30 },
    { key: "dessert-types", name: "Dessert Types", from: 0, to: 30 },
  ]},
  { phase: 31, categories: [
    { key: "dance-styles", name: "Dance Styles", from: 0, to: 30 },
    { key: "martial-arts", name: "Martial Arts", from: 0, to: 21 },
  ]},
  { phase: 32, categories: [
    { key: "martial-arts", name: "Martial Arts", from: 21, to: 30 },
    { key: "board-games", name: "Board Games", from: 0, to: 30 },
    { key: "video-games", name: "Video Games", from: 0, to: 12 },
  ]},
  { phase: 33, categories: [
    { key: "video-games", name: "Video Games", from: 12, to: 30 },
    { key: "fairy-creatures", name: "Fairy Creatures", from: 0, to: 30 },
    { key: "robots", name: "Robots", from: 0, to: 3 },
  ]},
  { phase: 34, categories: [
    { key: "robots", name: "Robots", from: 3, to: 30 },
    { key: "dinosaur-types", name: "Dinosaur Types", from: 0, to: 24 },
  ]},
  { phase: 35, categories: [
    { key: "dinosaur-types", name: "Dinosaur Types", from: 24, to: 30 },
    { key: "gemstones", name: "Gemstones", from: 0, to: 30 },
    { key: "metals", name: "Metals", from: 0, to: 15 },
  ]},
  { phase: 36, categories: [
    { key: "metals", name: "Metals", from: 15, to: 30 },
    { key: "fabrics", name: "Fabrics", from: 0, to: 30 },
    { key: "tools-workshop", name: "Workshop Tools", from: 0, to: 6 },
  ]},
  { phase: 37, categories: [
    { key: "tools-workshop", name: "Workshop Tools", from: 6, to: 30 },
    { key: "camping", name: "Camping", from: 0, to: 27 },
  ]},
  { phase: 38, categories: [
    { key: "camping", name: "Camping", from: 27, to: 30 },
    { key: "beach", name: "Beach", from: 0, to: 30 },
    { key: "airport", name: "Airport", from: 0, to: 18 },
  ]},
  { phase: 39, categories: [
    { key: "airport", name: "Airport", from: 18, to: 30 },
    { key: "hospital", name: "Hospital", from: 0, to: 30 },
    { key: "kitchen-appliances", name: "Kitchen Appliances", from: 0, to: 9 },
  ]},
  { phase: 40, categories: [
    { key: "kitchen-appliances", name: "Kitchen Appliances", from: 9, to: 30 },
    { key: "cleaning-items", name: "Cleaning Items", from: 0, to: 30 },
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
console.log(`Total (Batch 2): ${totalCheck} videos\n`);

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
# Batch: 1k-video-3april (Batch 2) | Each video: 2:45 (165 seconds)
# Usage: cd C:\\test\\1k-video-3april && .\\run-phase${phaseNum}.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = $PSScriptRoot

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE ${phaseNum}: ${catDescs}" -ForegroundColor Cyan
Write-Host "  ${phaseTotal} Videos | 2:45 each | Full HD (1080x1920)" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $ProjectDir

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

        # BGM duration = targetDuration (165 seconds)
        $duration = 165
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
Write-Host "  STEP 3: Rendering ${phaseTotal} Videos (2:45 each)" -ForegroundColor Yellow
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
        npx remotion render $compId "$outputFile" --concurrency=100% --log=error --crf=18 --codec=h264
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

console.log("\nAll 20 phase scripts (21-40) generated!");
