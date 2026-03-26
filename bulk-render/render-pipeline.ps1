# ============================================================================
# Windows Render Pipeline - Full Bulk Render with Serial Numbering
# ============================================================================
# Renders all nursery rhyme videos with:
#   - Serial numbering: 001-Twinkle-Twinkle-Little-Star.mp4
#   - Folder organization: Batch-01 (videos 1-10), Batch-02 (11-20), etc.
#   - Both YouTube (landscape) and Shorts (portrait) formats
#
# Usage:
#   .\bulk-render\render-pipeline.ps1                    # Full pipeline
#   .\bulk-render\render-pipeline.ps1 -SkipAudio         # Skip audio gen
#   .\bulk-render\render-pipeline.ps1 -SkipRegister      # Skip composition registration
#   .\bulk-render\render-pipeline.ps1 -RenderOnly        # Only render (skip audio + register)
#   .\bulk-render\render-pipeline.ps1 -From 51 -To 100   # Render rhymes 51-100 only
# ============================================================================

param(
    [switch]$SkipAudio,
    [switch]$SkipRegister,
    [switch]$RenderOnly,
    [switch]$SkipRender,
    [int]$From = 1,
    [int]$To = 0,           # 0 = all
    [int]$FolderSize = 10   # Videos per folder
)

$ErrorActionPreference = "Continue"

# ---------- Configuration ----------
$PROJECT_DIR = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$CATALOG_PATH = Join-Path $PROJECT_DIR "bulk-render\rhymes-catalog.json"
$OUT_DIR = Join-Path $PROJECT_DIR "out\rendered"
$LOG_FILE = Join-Path $PROJECT_DIR "bulk-render\render-log.txt"

Set-Location $PROJECT_DIR

# ---------- Banner ----------
Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Nursery Rhyme Video - Bulk Render Pipeline (Windows)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Started:  $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
Write-Host "  Project:  $PROJECT_DIR"
Write-Host ""

if ($RenderOnly) { $SkipAudio = $true; $SkipRegister = $true }

$steps = @(
    @{ Name = "Generate Audio"; Enabled = !$SkipAudio },
    @{ Name = "Register Compositions"; Enabled = !$SkipRegister },
    @{ Name = "Render Videos"; Enabled = !$SkipRender },
    @{ Name = "Organize into Folders"; Enabled = !$SkipRender }
)

foreach ($step in $steps) {
    $status = if ($step.Enabled) { "[ENABLED]" } else { "[SKIPPED]" }
    $color = if ($step.Enabled) { "Green" } else { "DarkGray" }
    Write-Host "    $($step.Name) $status" -ForegroundColor $color
}
Write-Host ""

$pipelineStart = Get-Date

# ---------- Load Catalog ----------
if (!(Test-Path $CATALOG_PATH)) {
    Write-Host "ERROR: rhymes-catalog.json not found at $CATALOG_PATH" -ForegroundColor Red
    exit 1
}

$catalog = Get-Content $CATALOG_PATH -Raw | ConvertFrom-Json
$rhymes = if ($catalog -is [array]) { $catalog } else { $catalog.rhymes }
$totalRhymes = $rhymes.Count

Write-Host "  Found $totalRhymes rhymes in catalog." -ForegroundColor White

# Apply range filter
if ($To -eq 0) { $To = $totalRhymes }
$From = [Math]::Max(1, $From)
$To = [Math]::Min($totalRhymes, $To)

Write-Host "  Rendering range: $From to $To ($($To - $From + 1) rhymes)" -ForegroundColor White
Write-Host ""

# ---------- Helper: Convert to PascalCase ----------
function ConvertTo-PascalCase($str) {
    ($str -split '[-_\s]+' | ForEach-Object {
        $_.Substring(0, 1).ToUpper() + $_.Substring(1).ToLower()
    }) -join ''
}

# ---------- Helper: Convert title to filename-safe format ----------
function ConvertTo-FilenameSafe($title) {
    # "Twinkle Twinkle Little Star" -> "Twinkle-Twinkle-Little-Star"
    $safe = $title -replace '[^\w\s-]', '' -replace '\s+', '-'
    return $safe
}

# ---------- Step 1: Generate Audio ----------
if (!$SkipAudio) {
    Write-Host "========================================================" -ForegroundColor Yellow
    Write-Host "  STEP 1/4: Generating Audio for All Rhymes" -ForegroundColor Yellow
    Write-Host "  Started: $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Yellow
    Write-Host "========================================================" -ForegroundColor Yellow
    $stepStart = Get-Date

    # Use python3 or python depending on what's available
    $pythonCmd = if (Get-Command python3 -ErrorAction SilentlyContinue) { "python3" } else { "python" }

    node (Join-Path $PROJECT_DIR "bulk-render\generate-all-audio.js")

    $elapsed = (Get-Date) - $stepStart
    Write-Host "  Step 1 completed in $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "[STEP 1/4] Audio generation SKIPPED" -ForegroundColor DarkGray
    Write-Host ""
}

# ---------- Step 2: Register Compositions ----------
if (!$SkipRegister) {
    Write-Host "========================================================" -ForegroundColor Yellow
    Write-Host "  STEP 2/4: Registering All Compositions in Root.tsx" -ForegroundColor Yellow
    Write-Host "  Started: $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Yellow
    Write-Host "========================================================" -ForegroundColor Yellow
    $stepStart = Get-Date

    node (Join-Path $PROJECT_DIR "bulk-render\register-compositions.js")

    $elapsed = (Get-Date) - $stepStart
    Write-Host "  Step 2 completed in $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "[STEP 2/4] Composition registration SKIPPED" -ForegroundColor DarkGray
    Write-Host ""
}

# ---------- Step 3: Render All Videos ----------
if (!$SkipRender) {
    Write-Host "========================================================" -ForegroundColor Yellow
    Write-Host "  STEP 3/4: Rendering Videos ($From to $To)" -ForegroundColor Yellow
    Write-Host "  Started: $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Yellow
    Write-Host "========================================================" -ForegroundColor Yellow
    $stepStart = Get-Date

    # Create output directory
    if (!(Test-Path $OUT_DIR)) {
        New-Item -ItemType Directory -Path $OUT_DIR -Force | Out-Null
    }

    # Initialize log
    "============================================" | Out-File $LOG_FILE
    "  Render Log - Started at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" | Out-File $LOG_FILE -Append
    "============================================" | Out-File $LOG_FILE -Append

    $rendered = 0
    $skipped = 0
    $failed = 0

    for ($i = ($From - 1); $i -lt $To; $i++) {
        $rhyme = $rhymes[$i]
        $serialNum = $i + 1
        $serialStr = $serialNum.ToString("D3")  # 001, 002, ... 150

        $rhymeId = if ($rhyme.rhymeId) { $rhyme.rhymeId } else { $rhyme.id }
        $title = $rhyme.title
        $compId = ConvertTo-PascalCase $rhymeId
        $filenameSafe = ConvertTo-FilenameSafe $title

        # Calculate which batch folder this goes into
        $batchNum = [Math]::Ceiling($serialNum / $FolderSize)
        $batchStart = (($batchNum - 1) * $FolderSize) + 1
        $batchEnd = $batchNum * $FolderSize
        $batchFolder = "Batch-$($batchNum.ToString('D2'))_($batchStart-$batchEnd)"

        # YouTube (landscape) output
        $ytFolder = Join-Path $OUT_DIR "youtube\$batchFolder"
        $ytFile = Join-Path $ytFolder "$serialStr-$filenameSafe.mp4"

        # Shorts (portrait) output
        $shortsFolder = Join-Path $OUT_DIR "shorts\$batchFolder"
        $shortsFile = Join-Path $shortsFolder "$serialStr-$filenameSafe-Shorts.mp4"

        Write-Host ""
        Write-Host "  [$serialStr/$totalRhymes] $title" -ForegroundColor White
        Write-Host "    Composition: $compId" -ForegroundColor DarkGray
        Write-Host "    Folder: $batchFolder" -ForegroundColor DarkGray

        # Create batch folders
        if (!(Test-Path $ytFolder)) { New-Item -ItemType Directory -Path $ytFolder -Force | Out-Null }
        if (!(Test-Path $shortsFolder)) { New-Item -ItemType Directory -Path $shortsFolder -Force | Out-Null }

        # --- Render Landscape ---
        if (Test-Path $ytFile) {
            Write-Host "    YouTube:  SKIP (exists)" -ForegroundColor DarkGray
            $skipped++
        } else {
            Write-Host "    YouTube:  Rendering..." -ForegroundColor Cyan -NoNewline
            $logMsg = "[$(Get-Date -Format 'HH:mm:ss')] RENDER $serialStr-$filenameSafe (landscape)"
            $logMsg | Out-File $LOG_FILE -Append

            try {
                $output = npx remotion render $compId $ytFile --concurrency=100% --log=error 2>&1
                if ($LASTEXITCODE -eq 0) {
                    Write-Host " DONE" -ForegroundColor Green
                    $rendered++
                    "[$(Get-Date -Format 'HH:mm:ss')] DONE $serialStr-$filenameSafe (landscape)" | Out-File $LOG_FILE -Append
                } else {
                    Write-Host " FAILED" -ForegroundColor Red
                    $failed++
                    "[$(Get-Date -Format 'HH:mm:ss')] FAILED $serialStr-$filenameSafe (landscape): $output" | Out-File $LOG_FILE -Append
                }
            } catch {
                Write-Host " ERROR: $($_.Exception.Message)" -ForegroundColor Red
                $failed++
            }
        }

        # --- Render Shorts ---
        if (Test-Path $shortsFile) {
            Write-Host "    Shorts:   SKIP (exists)" -ForegroundColor DarkGray
            $skipped++
        } else {
            Write-Host "    Shorts:   Rendering..." -ForegroundColor Cyan -NoNewline
            $logMsg = "[$(Get-Date -Format 'HH:mm:ss')] RENDER $serialStr-$filenameSafe (shorts)"
            $logMsg | Out-File $LOG_FILE -Append

            try {
                $output = npx remotion render "${compId}Shorts" $shortsFile --concurrency=100% --log=error 2>&1
                if ($LASTEXITCODE -eq 0) {
                    Write-Host " DONE" -ForegroundColor Green
                    $rendered++
                    "[$(Get-Date -Format 'HH:mm:ss')] DONE $serialStr-$filenameSafe (shorts)" | Out-File $LOG_FILE -Append
                } else {
                    Write-Host " FAILED" -ForegroundColor Red
                    $failed++
                    "[$(Get-Date -Format 'HH:mm:ss')] FAILED $serialStr-$filenameSafe (shorts): $output" | Out-File $LOG_FILE -Append
                }
            } catch {
                Write-Host " ERROR: $($_.Exception.Message)" -ForegroundColor Red
                $failed++
            }
        }
    }

    $elapsed = (Get-Date) - $stepStart
    Write-Host ""
    Write-Host "  Step 3 completed in $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor Green
    Write-Host "    Rendered: $rendered | Skipped: $skipped | Failed: $failed" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "[STEP 3/4] Video rendering SKIPPED" -ForegroundColor DarkGray
    Write-Host ""
}

# ---------- Step 4: Generate Index / Summary ----------
if (!$SkipRender) {
    Write-Host "========================================================" -ForegroundColor Yellow
    Write-Host "  STEP 4/4: Generating Video Index" -ForegroundColor Yellow
    Write-Host "========================================================" -ForegroundColor Yellow

    # Generate a CSV index of all rendered videos
    $indexFile = Join-Path $OUT_DIR "video-index.csv"
    $indexLines = @("Serial,Title,RhymeId,Theme,BatchFolder,YouTubeFile,ShortsFile")

    for ($i = ($From - 1); $i -lt $To; $i++) {
        $rhyme = $rhymes[$i]
        $serialNum = $i + 1
        $serialStr = $serialNum.ToString("D3")
        $rhymeId = if ($rhyme.rhymeId) { $rhyme.rhymeId } else { $rhyme.id }
        $title = $rhyme.title
        $theme = if ($rhyme.theme) { $rhyme.theme } else { "playground" }
        $filenameSafe = ConvertTo-FilenameSafe $title

        $batchNum = [Math]::Ceiling($serialNum / $FolderSize)
        $batchStart = (($batchNum - 1) * $FolderSize) + 1
        $batchEnd = $batchNum * $FolderSize
        $batchFolder = "Batch-$($batchNum.ToString('D2'))_($batchStart-$batchEnd)"

        $ytFile = "youtube\$batchFolder\$serialStr-$filenameSafe.mp4"
        $shortsFile = "shorts\$batchFolder\$serialStr-$filenameSafe-Shorts.mp4"

        $indexLines += "$serialNum,`"$title`",$rhymeId,$theme,$batchFolder,$ytFile,$shortsFile"
    }

    $indexLines | Out-File $indexFile -Encoding UTF8
    Write-Host "  Index saved: $indexFile" -ForegroundColor Green
    Write-Host ""
}

# ---------- Final Summary ----------
$pipelineEnd = Get-Date
$totalElapsed = $pipelineEnd - $pipelineStart

# Count rendered videos
$ytCount = 0
$shortsCount = 0
if (Test-Path $OUT_DIR) {
    $ytCount = (Get-ChildItem -Path (Join-Path $OUT_DIR "youtube") -Filter "*.mp4" -Recurse -ErrorAction SilentlyContinue).Count
    $shortsCount = (Get-ChildItem -Path (Join-Path $OUT_DIR "shorts") -Filter "*.mp4" -Recurse -ErrorAction SilentlyContinue).Count
}

$batchFolderCount = 0
if (Test-Path (Join-Path $OUT_DIR "youtube")) {
    $batchFolderCount = (Get-ChildItem -Path (Join-Path $OUT_DIR "youtube") -Directory -ErrorAction SilentlyContinue).Count
}

Write-Host ""
Write-Host "========================================================" -ForegroundColor Green
Write-Host "  PIPELINE COMPLETE!" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Total time:       $($totalElapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "  YouTube videos:   $ytCount" -ForegroundColor White
Write-Host "  Shorts videos:    $shortsCount" -ForegroundColor White
Write-Host "  Total videos:     $($ytCount + $shortsCount)" -ForegroundColor White
Write-Host "  Batch folders:    $batchFolderCount" -ForegroundColor White
Write-Host ""
Write-Host "  Output Structure:" -ForegroundColor Yellow
Write-Host "    out\rendered\" -ForegroundColor White
Write-Host "      youtube\" -ForegroundColor White
Write-Host "        Batch-01_(1-10)\" -ForegroundColor DarkGray
Write-Host "          001-Twinkle-Twinkle-Little-Star.mp4" -ForegroundColor DarkGray
Write-Host "          002-Baa-Baa-Black-Sheep.mp4" -ForegroundColor DarkGray
Write-Host "          ..." -ForegroundColor DarkGray
Write-Host "        Batch-02_(11-20)\" -ForegroundColor DarkGray
Write-Host "          011-Old-Macdonald-Had-A-Farm.mp4" -ForegroundColor DarkGray
Write-Host "          ..." -ForegroundColor DarkGray
Write-Host "      shorts\" -ForegroundColor White
Write-Host "        (same structure)" -ForegroundColor DarkGray
Write-Host "      video-index.csv" -ForegroundColor White
Write-Host ""
Write-Host "  Log: $LOG_FILE" -ForegroundColor White
Write-Host ""
Write-Host "========================================================" -ForegroundColor Green
