# ============================================================================
# ONE-CLICK 4K Render Pipeline for ABC Alphabet Videos
# ============================================================================
# Run this single script on your RTX 4090 GPU machine.
# It will: Pull code -> Install deps -> Generate audio -> Render all in 4K
#
# Usage (Run in PowerShell as Administrator):
#   cd C:\test\abc-alphabets
#   powershell -ExecutionPolicy Bypass -File abc-alphabets\run-4k-pipeline.ps1
#
# Or if already in the project folder:
#   .\abc-alphabets\run-4k-pipeline.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

# ---------- Configuration ----------
$QUALITY_CRF = 16                # Lower = better quality (12-18 range)
$QUALITY_SCALE = 2               # 2x = 4K (2160x3840)
$QUALITY_CODEC = "h264"
$QUALITY_PIXEL_FORMAT = "yuv420p"
$QUALITY_BITRATE = "20M"         # 20 Mbps for crisp 4K
$FOLDER_SIZE = 10                # Videos per output folder
$CONCURRENCY = "100%"            # Use all CPU cores

$ScriptDir = Join-Path $ProjectRoot "abc-alphabets"
$Catalog = Join-Path $ScriptDir "catalog.json"
$OutputDir = Join-Path $ProjectRoot "out\abc-alphabets"
$LogFile = Join-Path $ProjectRoot "render-log-4k.txt"
$PYTHON = "python"

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║        ABC ALPHABETS — 4K RENDER PIPELINE               ║" -ForegroundColor Cyan
Write-Host "║        RTX 4090 • 4K UHD (2160x3840) • CRF $QUALITY_CRF            ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

$PipelineStart = Get-Date

# ╔═══════════════════════════════════════════════════════════════╗
# ║  STEP 0: SETUP — Pull latest code & install dependencies     ║
# ╚═══════════════════════════════════════════════════════════════╝

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "  STEP 0: Setup" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

# Pull latest code
Write-Host "  Pulling latest code..." -ForegroundColor White
git pull origin main 2>&1 | Out-Null
Write-Host "  ✅ Code updated" -ForegroundColor Green

# Install npm dependencies
Write-Host "  Installing npm dependencies..." -ForegroundColor White
npm install --silent 2>&1 | Out-Null
Write-Host "  ✅ Dependencies installed" -ForegroundColor Green

# Check edge-tts
Write-Host "  Checking edge-tts..." -ForegroundColor White
try {
    & $PYTHON -m edge_tts --version 2>&1 | Out-Null
    Write-Host "  ✅ edge-tts ready" -ForegroundColor Green
} catch {
    Write-Host "  Installing edge-tts..." -ForegroundColor Yellow
    & $PYTHON -m pip install edge-tts --quiet 2>&1 | Out-Null
    Write-Host "  ✅ edge-tts installed" -ForegroundColor Green
}

# Check ffmpeg
try {
    ffmpeg -version 2>&1 | Out-Null
    Write-Host "  ✅ ffmpeg ready" -ForegroundColor Green
} catch {
    Write-Host "  ❌ ffmpeg not found! Install it: https://ffmpeg.org/download.html" -ForegroundColor Red
    exit 1
}

# Disable sleep so the machine stays awake during long renders
Write-Host "  Disabling sleep mode..." -ForegroundColor White
powercfg /change standby-timeout-ac 0 2>$null
powercfg /change monitor-timeout-ac 0 2>$null
powercfg /change disk-timeout-ac 0 2>$null
Write-Host "  ✅ Sleep disabled" -ForegroundColor Green

Write-Host ""

# ╔═══════════════════════════════════════════════════════════════╗
# ║  STEP 1: REGISTER COMPOSITIONS                                ║
# ╚═══════════════════════════════════════════════════════════════╝

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "  STEP 1: Registering Compositions" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

$registerScript = Join-Path $ScriptDir "register-compositions.js"
if (Test-Path $registerScript) {
    node $registerScript
    Write-Host "  ✅ Compositions registered" -ForegroundColor Green
}
Write-Host ""

# ╔═══════════════════════════════════════════════════════════════╗
# ║  STEP 2: GENERATE AUDIO (edge-tts voice + BGM)               ║
# ╚═══════════════════════════════════════════════════════════════╝

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "  STEP 2: Generating Audio (voice + BGM for each video)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

$audioScript = Join-Path $ScriptDir "generate-audio.js"
if (Test-Path $audioScript) {
    node $audioScript
    Write-Host "  ✅ All audio generated" -ForegroundColor Green
} else {
    Write-Host "  ⚠ generate-audio.js not found!" -ForegroundColor Red
    exit 1
}
Write-Host ""

# ╔═══════════════════════════════════════════════════════════════╗
# ║  STEP 3: RENDER ALL VIDEOS IN 4K                             ║
# ╚═══════════════════════════════════════════════════════════════╝

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host "  STEP 3: Rendering Videos in 4K" -ForegroundColor Yellow
Write-Host "  Resolution: 2160x3840 | CRF: $QUALITY_CRF | Bitrate: $QUALITY_BITRATE" -ForegroundColor DarkGray
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host ""

# Helpers
function ConvertTo-PascalCase {
    param([string]$str)
    ($str -split '[-_\s]+' | ForEach-Object {
        $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
    }) -join ''
}

function ConvertTo-FilenameSafe {
    param([string]$str)
    $str -replace '[^a-zA-Z0-9\-_ ]', '' -replace '\s+', '-'
}

# Load catalog
$CatalogJson = Get-Content $Catalog -Raw | ConvertFrom-Json
$Videos = if ($CatalogJson -is [Array]) { $CatalogJson } else { $CatalogJson.videos }
$Total = $Videos.Count

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

# Init log
@(
    "════════════════════════════════════════════════"
    "  4K Render Log — $(Get-Date)"
    "  Videos: $Total"
    "  Quality: 4K (2160x3840) CRF $QUALITY_CRF Bitrate $QUALITY_BITRATE"
    "════════════════════════════════════════════════"
    ""
) | Set-Content $LogFile

$Rendered = 0
$Skipped = 0
$Failed = 0
$RenderStart = Get-Date

for ($i = 0; $i -lt $Total; $i++) {
    $Video = $Videos[$i]
    [int]$serialNum = $i + 1
    $serialStr = $serialNum.ToString("D3")
    $VideoId = $Video.id
    $Title = $Video.title
    $CompId = "Abc" + (ConvertTo-PascalCase $VideoId)
    $filenameSafe = ConvertTo-FilenameSafe $Title

    # Batch folder
    [int]$batchNum = [Math]::Ceiling($serialNum / $FOLDER_SIZE)
    [int]$batchStart = (($batchNum - 1) * $FOLDER_SIZE) + 1
    [int]$batchEnd = [Math]::Min($batchNum * $FOLDER_SIZE, $Total)
    $batchFolder = "Batch-$($batchNum.ToString('D2'))_($batchStart-$batchEnd)"

    $batchDir = Join-Path $OutputDir $batchFolder
    if (-not (Test-Path $batchDir)) {
        New-Item -ItemType Directory -Path $batchDir -Force | Out-Null
    }

    $OutputFile = Join-Path $batchDir "$serialStr-$filenameSafe.mp4"

    # Skip if already rendered
    if (Test-Path $OutputFile) {
        Write-Host "  [$serialNum/$Total] SKIP $Title" -ForegroundColor DarkGray
        $Skipped++
        continue
    }

    Write-Host "  [$serialNum/$Total] " -NoNewline -ForegroundColor White
    Write-Host "$Title " -NoNewline -ForegroundColor Cyan
    Write-Host "($CompId) " -NoNewline -ForegroundColor DarkGray
    Write-Host "rendering..." -NoNewline -ForegroundColor Yellow

    $logEntry = "[$(Get-Date -Format 'HH:mm:ss')] START $serialStr $Title"
    $logEntry | Out-File $LogFile -Append

    $videoStart = Get-Date

    try {
        $output = npx remotion render src/index.ts $CompId $OutputFile `
            --concurrency=$CONCURRENCY `
            --log=error `
            --scale=$QUALITY_SCALE `
            --crf=$QUALITY_CRF `
            --codec=$QUALITY_CODEC `
            --pixel-format=$QUALITY_PIXEL_FORMAT `
            --video-bitrate=$QUALITY_BITRATE 2>&1

        $videoDuration = [Math]::Round(((Get-Date) - $videoStart).TotalSeconds)

        if ($LASTEXITCODE -eq 0) {
            $fileSize = [Math]::Round((Get-Item $OutputFile).Length / 1MB, 1)
            Write-Host " DONE (${videoDuration}s, ${fileSize}MB)" -ForegroundColor Green
            $Rendered++
            "[$(Get-Date -Format 'HH:mm:ss')] DONE $serialStr (${videoDuration}s, ${fileSize}MB)" | Out-File $LogFile -Append
        } else {
            Write-Host " FAILED" -ForegroundColor Red
            $Failed++
            "[$(Get-Date -Format 'HH:mm:ss')] FAILED $serialStr : $output" | Out-File $LogFile -Append
        }
    } catch {
        Write-Host " ERROR: $($_.Exception.Message)" -ForegroundColor Red
        $Failed++
        "[$(Get-Date -Format 'HH:mm:ss')] ERROR $serialStr : $($_.Exception.Message)" | Out-File $LogFile -Append
    }
}

# ╔═══════════════════════════════════════════════════════════════╗
# ║  DONE — Summary                                               ║
# ╚═══════════════════════════════════════════════════════════════╝

$PipelineEnd = Get-Date
$TotalElapsed = $PipelineEnd - $PipelineStart
$RenderElapsed = $PipelineEnd - $RenderStart

Write-Host ""
Write-Host "╔══════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                    PIPELINE COMPLETE!                    ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "  Resolution:    2160 x 3840 (4K UHD)" -ForegroundColor White
Write-Host "  CRF:           $QUALITY_CRF" -ForegroundColor White
Write-Host "  Bitrate:       $QUALITY_BITRATE" -ForegroundColor White
Write-Host "  Rendered:      $Rendered" -ForegroundColor Green
Write-Host "  Skipped:       $Skipped" -ForegroundColor DarkGray
Write-Host "  Failed:        $Failed" -ForegroundColor $(if ($Failed -gt 0) { "Red" } else { "Green" })
Write-Host "  Render time:   $($RenderElapsed.Hours)h $($RenderElapsed.Minutes)m $($RenderElapsed.Seconds)s" -ForegroundColor Yellow
Write-Host "  Total time:    $($TotalElapsed.Hours)h $($TotalElapsed.Minutes)m $($TotalElapsed.Seconds)s" -ForegroundColor Yellow
Write-Host "  Output:        $OutputDir" -ForegroundColor White
Write-Host "  Log:           $LogFile" -ForegroundColor White
Write-Host ""

@(
    ""
    "════════════════════════════════════════════════"
    "  PIPELINE COMPLETE"
    "  4K (2160x3840) CRF $QUALITY_CRF Bitrate $QUALITY_BITRATE"
    "  Rendered: $Rendered | Skipped: $Skipped | Failed: $Failed"
    "  Render: $($RenderElapsed.Hours)h $($RenderElapsed.Minutes)m $($RenderElapsed.Seconds)s"
    "  Total:  $($TotalElapsed.Hours)h $($TotalElapsed.Minutes)m $($TotalElapsed.Seconds)s"
    "  Finished: $(Get-Date)"
    "════════════════════════════════════════════════"
) | Add-Content $LogFile
