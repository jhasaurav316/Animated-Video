# ============================================================================
# Setup Phase 11-20 Folder (clean project + move pre-generated audio)
# ============================================================================
# Creates 2k-video-3april-p11to20 with only the audio needed for phases 11-20
# Usage: cd C:\test\Animated-Video\2k-video-3april && .\setup-p11to20.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$SourceDir = $PSScriptRoot
$TargetDir = Join-Path (Split-Path $SourceDir) "2k-video-3april-p11to20"

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  SETUP PHASES 11-20 FOLDER (510 Videos)" -ForegroundColor Cyan
Write-Host "  From: $SourceDir" -ForegroundColor White
Write-Host "  To:   $TargetDir" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# ---------- Step 1: Create target & copy project files ----------
if (Test-Path $TargetDir) {
    Write-Host "  Target folder already exists! Delete it first or rename." -ForegroundColor Red
    exit 1
}

Write-Host "  [1/4] Copying project files (excluding public/out/build/node_modules)..." -ForegroundColor Yellow
New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
robocopy "$SourceDir" "$TargetDir" /E /XD public out build node_modules .git /NFL /NDL /NJH /NJS /NC /NS /NP | Out-Null
Write-Host "  Done!" -ForegroundColor Green

# ---------- Step 2: Move pre-generated audio for phases 11-20 ----------
Write-Host "  [2/4] Moving pre-generated audio to new folder..." -ForegroundColor Yellow

$SourcePublic = Join-Path $SourceDir "public"
$TargetPublic = Join-Path $TargetDir "public"
New-Item -ItemType Directory -Path $TargetPublic -Force | Out-Null

# Categories used in phases 11-20
$categories = @(
    "science-words", "winter-words", "summer-words", "halloween",
    "christmas", "garden-items", "bath-time", "breakfast-foods",
    "snacks", "drinks", "candy", "zoo-animals", "underwater",
    "rainforest", "transportation", "festivals", "sports-equipment"
)

$movedCount = 0
foreach ($catKey in $categories) {
    $catPath = Join-Path $SourceDir "$catKey\catalog.json"
    if (-not (Test-Path $catPath)) {
        Write-Host "    WARN: $catKey\catalog.json not found, skipping" -ForegroundColor Red
        continue
    }

    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }

    foreach ($video in $videos) {
        $videoId = $video.id
        $audioDir = Join-Path $SourcePublic "$videoId-audio"
        $targetAudioDir = Join-Path $TargetPublic "$videoId-audio"

        if (Test-Path $audioDir) {
            Move-Item -Path $audioDir -Destination $targetAudioDir -Force
            $movedCount++
        }
    }
    Write-Host "    $catKey - done" -ForegroundColor DarkGray
}

Write-Host "  Moved $movedCount audio folders!" -ForegroundColor Green

# ---------- Step 3: Install dependencies ----------
Write-Host "  [3/4] Installing node_modules..." -ForegroundColor Yellow
$prevLoc = Get-Location
Set-Location $TargetDir
npm install --silent 2>&1 | Out-Null
Set-Location $prevLoc
Write-Host "  Done!" -ForegroundColor Green

# ---------- Step 4: Summary ----------
Write-Host "  [4/4] Verifying..." -ForegroundColor Yellow
$audioCount = (Get-ChildItem -Path $TargetPublic -Directory -Filter "*-audio" | Measure-Object).Count
Write-Host "  $audioCount audio folders in new public/" -ForegroundColor Green

Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  READY! Phases 11-20 folder created" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Location: $TargetDir" -ForegroundColor White
Write-Host "  Audio:    $audioCount pre-generated (will not regenerate)" -ForegroundColor White
Write-Host ""
Write-Host "  Run:" -ForegroundColor Yellow
Write-Host "    cd `"$TargetDir`"" -ForegroundColor White
Write-Host "    .\run-phase11.ps1" -ForegroundColor White
Write-Host "    # or all at once:" -ForegroundColor DarkGray
Write-Host "    for (`$p = 11; `$p -le 20; `$p++) { .\run-phase`$p.ps1 }" -ForegroundColor White
Write-Host ""
