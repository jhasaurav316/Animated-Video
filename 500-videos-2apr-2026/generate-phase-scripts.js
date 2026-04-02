#!/usr/bin/env node
// ============================================================================
// Generate Phase-wise Render Scripts (10 phases × 50 videos = 500)
// ============================================================================

const path = require("path");
const fs = require("fs");

const BASE_DIR = __dirname;
const summary = JSON.parse(fs.readFileSync(path.join(BASE_DIR, "summary.json"), "utf-8"));

// Distribute 500 videos into 10 phases of 50 each
const PHASES = [
  { phase: 1, categories: [
    { key: "body-parts", name: "Body Parts", from: 0, to: 30 },
    { key: "professions", name: "Professions", from: 0, to: 20 },
  ]},
  { phase: 2, categories: [
    { key: "professions", name: "Professions", from: 20, to: 30 },
    { key: "famous-places", name: "Famous Places", from: 0, to: 30 },
    { key: "dog-breeds", name: "Dog Breeds", from: 0, to: 10 },
  ]},
  { phase: 3, categories: [
    { key: "dog-breeds", name: "Dog Breeds", from: 10, to: 30 },
    { key: "trees-plants", name: "Trees & Plants", from: 0, to: 30 },
  ]},
  { phase: 4, categories: [
    { key: "emotions", name: "Emotions", from: 0, to: 30 },
    { key: "tools", name: "Tools", from: 0, to: 20 },
  ]},
  { phase: 5, categories: [
    { key: "tools", name: "Tools", from: 20, to: 30 },
    { key: "clothing", name: "Clothing", from: 0, to: 30 },
    { key: "desserts", name: "Desserts", from: 0, to: 10 },
  ]},
  { phase: 6, categories: [
    { key: "desserts", name: "Desserts", from: 10, to: 30 },
    { key: "gems-minerals", name: "Gems & Minerals", from: 0, to: 25 },
    { key: "dance-forms", name: "Dance Forms", from: 0, to: 5 },
  ]},
  { phase: 7, categories: [
    { key: "dance-forms", name: "Dance Forms", from: 5, to: 25 },
    { key: "reptiles", name: "Reptiles", from: 0, to: 25 },
    { key: "farm-animals", name: "Farm Animals", from: 0, to: 5 },
  ]},
  { phase: 8, categories: [
    { key: "farm-animals", name: "Farm Animals", from: 5, to: 25 },
    { key: "kitchen-items", name: "Kitchen Items", from: 0, to: 25 },
    { key: "ocean-life", name: "Ocean Life", from: 0, to: 5 },
  ]},
  { phase: 9, categories: [
    { key: "ocean-life", name: "Ocean Life", from: 5, to: 25 },
    { key: "baby-animals", name: "Baby Animals", from: 0, to: 25 },
    { key: "mythical-creatures", name: "Mythical Creatures", from: 0, to: 5 },
  ]},
  { phase: 10, categories: [
    { key: "mythical-creatures", name: "Mythical Creatures", from: 5, to: 20 },
    { key: "weather-nature", name: "Weather & Nature", from: 0, to: 20 },
    { key: "world-flags", name: "World Flags", from: 0, to: 15 },
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

  // Build category descriptions for header
  const catDescs = phaseConfig.categories.map(c => {
    const count = c.to - c.from;
    return `${count} ${c.name}`;
  }).join(" + ");

  // Build catalog array entries
  const catalogEntries = phaseConfig.categories.map(c =>
    `    @{ Path = "${c.key}\\catalog.json"; Name = "${c.name}"; From = ${c.from}; To = ${c.to} }`
  ).join(",\n");

  // Build register entries
  const registerCategories = [...new Set(phaseConfig.categories.map(c => c.key))];
  const registerLines = registerCategories.map(k =>
    `node (Join-Path $ProjectDir "${k}\\register-compositions.js")`
  ).join("\n");

  const script = `# ============================================================================
# Phase ${phaseNum} - ${phaseTotal} Videos (${catDescs})
# ============================================================================
# Batch: 500-videos-2apr-2026
# Usage: cd C:\\test\\500-videos-2apr-2026 && .\\run-phase${phaseNum}.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = "C:\\test\\500-videos-2apr-2026"

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  PHASE ${phaseNum}: ${catDescs}" -ForegroundColor Cyan
Write-Host "  ${phaseTotal} Videos | Full HD (1080x1920)" -ForegroundColor Cyan
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

        $duration = 3 + $items.Count * 3 + 3
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

console.log("\nAll 10 phase scripts generated!");
