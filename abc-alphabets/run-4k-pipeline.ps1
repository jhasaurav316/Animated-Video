# ============================================================================
# ONE-CLICK Render Pipeline for ABC Alphabet Videos
# ============================================================================
# Run this single script on your RTX 4090 GPU machine.
# It will: Pull code -> Install deps -> Generate audio -> Render all videos
#
# Usage (Run in PowerShell as Administrator):
#   cd C:\test\abc-alphabets
#   powershell -ExecutionPolicy Bypass -File .\abc-alphabets\run-4k-pipeline.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

# ---------- Configuration ----------
# Change to "4k" for 2160x3840 output, "hd" for 1080x1920
$MODE = "hd"

if ($MODE -eq "4k") {
    $QUALITY_CRF = 16
    $QUALITY_SCALE = 2
    $QUALITY_BITRATE = "20M"
    $resLabel = "4K UHD (2160x3840)"
} else {
    $QUALITY_CRF = 16
    $QUALITY_SCALE = 1
    $QUALITY_BITRATE = "10M"
    $resLabel = "Full HD (1080x1920)"
}
$QUALITY_CODEC = "h264"
$FOLDER_SIZE = 10
$CONCURRENCY = "100%"

$ScriptDir = Join-Path $ProjectRoot "abc-alphabets"
$Catalog = Join-Path $ScriptDir "catalog.json"
$OutputDir = Join-Path $ProjectRoot "out\abc-alphabets"
$LogFile = Join-Path $ProjectRoot "render-log.txt"
$PYTHON = "python"

Write-Host ""
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "  ABC ALPHABETS RENDER PIPELINE" -ForegroundColor Cyan
Write-Host "  $resLabel | CRF $QUALITY_CRF | Bitrate $QUALITY_BITRATE" -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host ""

$PipelineStart = Get-Date

# ==========================================================================
#  STEP 0: SETUP
# ==========================================================================

Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  STEP 0: Setup" -ForegroundColor Yellow
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray

Write-Host "  Pulling latest code..." -ForegroundColor White
$ErrorActionPreference = "Continue"
git pull origin main 2>&1 | Out-Host
$ErrorActionPreference = "Stop"
Write-Host "  OK: Code updated" -ForegroundColor Green

Write-Host "  Installing npm dependencies..." -ForegroundColor White
$ErrorActionPreference = "Continue"
npm install --silent 2>&1 | Out-Host
$ErrorActionPreference = "Stop"
Write-Host "  OK: Dependencies installed" -ForegroundColor Green

Write-Host "  Checking edge-tts..." -ForegroundColor White
$ErrorActionPreference = "Continue"
$edgeCheck = & $PYTHON -m edge_tts --version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "  Installing edge-tts..." -ForegroundColor Yellow
    & $PYTHON -m pip install edge-tts --quiet 2>&1 | Out-Host
    Write-Host "  OK: edge-tts installed" -ForegroundColor Green
} else {
    Write-Host "  OK: edge-tts ready" -ForegroundColor Green
}

$ffmpegCheck = ffmpeg -version 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ERROR: ffmpeg not found! Install from https://ffmpeg.org/download.html" -ForegroundColor Red
    exit 1
} else {
    Write-Host "  OK: ffmpeg ready" -ForegroundColor Green
}
$ErrorActionPreference = "Stop"

# Disable sleep
powercfg /change standby-timeout-ac 0 2>$null
powercfg /change monitor-timeout-ac 0 2>$null
powercfg /change disk-timeout-ac 0 2>$null
Write-Host "  OK: Sleep disabled" -ForegroundColor Green
Write-Host ""

# ==========================================================================
#  STEP 1: REGISTER COMPOSITIONS
# ==========================================================================

Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  STEP 1: Registering Compositions" -ForegroundColor Yellow
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray

$registerScript = Join-Path $ScriptDir "register-compositions.js"
if (Test-Path $registerScript) {
    node $registerScript
    Write-Host "  OK: Compositions registered" -ForegroundColor Green
}
Write-Host ""

# ==========================================================================
#  STEP 2: GENERATE AUDIO
# ==========================================================================

Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  STEP 2: Generating Audio (voice + BGM)" -ForegroundColor Yellow
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray

$audioScript = Join-Path $ScriptDir "generate-audio.js"
if (Test-Path $audioScript) {
    node $audioScript
    Write-Host "  OK: All audio generated" -ForegroundColor Green
} else {
    Write-Host "  ERROR: generate-audio.js not found!" -ForegroundColor Red
    exit 1
}
Write-Host ""

# ==========================================================================
#  STEP 3: RENDER VIDEOS
# ==========================================================================

Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  STEP 3: Rendering Videos" -ForegroundColor Yellow
Write-Host "  $resLabel | CRF $QUALITY_CRF | Bitrate $QUALITY_BITRATE" -ForegroundColor DarkGray
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
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
if ($CatalogJson -is [Array]) {
    $Videos = $CatalogJson
} else {
    $Videos = $CatalogJson.videos
}
$Total = $Videos.Count

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

# Init log
$logDate = Get-Date
$logHeader = @(
    "============================================"
    "  Render Log - $logDate"
    "  Videos: $Total"
    "  Quality: $resLabel CRF $QUALITY_CRF"
    "============================================"
    ""
)
$logHeader | Set-Content $LogFile

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
    $batchFolderName = "Batch-" + $batchNum.ToString("D2") + "_(" + $batchStart + "-" + $batchEnd + ")"

    $batchDir = Join-Path $OutputDir $batchFolderName
    if (-not (Test-Path $batchDir)) {
        New-Item -ItemType Directory -Path $batchDir -Force | Out-Null
    }

    $outFileName = $serialStr + "-" + $filenameSafe + ".mp4"
    $OutputFile = Join-Path $batchDir $outFileName

    # Skip if already rendered
    if (Test-Path $OutputFile) {
        Write-Host ("  [" + $serialNum + "/" + $Total + "] SKIP " + $Title) -ForegroundColor DarkGray
        $Skipped++
        continue
    }

    Write-Host ("  [" + $serialNum + "/" + $Total + "] " + $Title + " (" + $CompId + ") rendering...") -NoNewline -ForegroundColor Cyan

    $timeStamp = Get-Date -Format "HH:mm:ss"
    $logLine = "[" + $timeStamp + "] START " + $serialStr + " " + $Title
    $logLine | Out-File $LogFile -Append

    $videoStart = Get-Date

    try {
        # Build render command string
        $cmd = "npx remotion render src/index.ts " + $CompId + " `"" + $OutputFile + "`" --concurrency=" + $CONCURRENCY + " --log=error --crf=" + $QUALITY_CRF + " --codec=" + $QUALITY_CODEC + " --pixel-format=yuv420p --video-bitrate=" + $QUALITY_BITRATE

        if ($QUALITY_SCALE -gt 1) {
            $cmd = $cmd + " --scale=" + $QUALITY_SCALE
        }

        $ErrorActionPreference = "Continue"
        $output = Invoke-Expression $cmd 2>&1
        $exitCode = $LASTEXITCODE
        $ErrorActionPreference = "Stop"

        $elapsed = (Get-Date) - $videoStart
        $secs = [Math]::Round($elapsed.TotalSeconds)

        if ($exitCode -eq 0 -and (Test-Path $OutputFile)) {
            $fileSizeBytes = (Get-Item $OutputFile).Length
            $fileSizeMB = [Math]::Round($fileSizeBytes / 1048576, 1)
            Write-Host (" DONE (" + $secs + "s, " + $fileSizeMB + "MB)") -ForegroundColor Green
            $Rendered++
            $doneTime = Get-Date -Format "HH:mm:ss"
            $doneLine = "[" + $doneTime + "] DONE " + $serialStr + " (" + $secs + "s, " + $fileSizeMB + "MB)"
            $doneLine | Out-File $LogFile -Append
        } else {
            # Show the actual error so we can debug
            Write-Host " FAILED" -ForegroundColor Red
            $outputStr = $output | Out-String
            if ($outputStr.Length -gt 0) {
                Write-Host ("    ERROR: " + $outputStr.Substring(0, [Math]::Min(500, $outputStr.Length))) -ForegroundColor DarkRed
            }
            $Failed++
            $failTime = Get-Date -Format "HH:mm:ss"
            $failLine = "[" + $failTime + "] FAILED " + $serialStr + " : " + $outputStr
            $failLine | Out-File $LogFile -Append
        }
    } catch {
        $errMsg = $_.Exception.Message
        Write-Host (" ERROR: " + $errMsg) -ForegroundColor Red
        $Failed++
        $errTime = Get-Date -Format "HH:mm:ss"
        $errLine = "[" + $errTime + "] ERROR " + $serialStr + " : " + $errMsg
        $errLine | Out-File $LogFile -Append
    }
}

# ==========================================================================
#  SUMMARY
# ==========================================================================

$PipelineEnd = Get-Date
$TotalElapsed = $PipelineEnd - $PipelineStart
$RenderElapsed = $PipelineEnd - $RenderStart

$totalTimeStr = $TotalElapsed.Hours.ToString() + "h " + $TotalElapsed.Minutes.ToString() + "m " + $TotalElapsed.Seconds.ToString() + "s"
$renderTimeStr = $RenderElapsed.Hours.ToString() + "h " + $RenderElapsed.Minutes.ToString() + "m " + $RenderElapsed.Seconds.ToString() + "s"

Write-Host ""
Write-Host "===========================================================" -ForegroundColor Green
Write-Host "  PIPELINE COMPLETE!" -ForegroundColor Green
Write-Host "===========================================================" -ForegroundColor Green
Write-Host ""
Write-Host ("  Resolution:  " + $resLabel) -ForegroundColor White
Write-Host ("  CRF:         " + $QUALITY_CRF) -ForegroundColor White
Write-Host ("  Bitrate:     " + $QUALITY_BITRATE) -ForegroundColor White
Write-Host ("  Rendered:    " + $Rendered) -ForegroundColor Green
Write-Host ("  Skipped:     " + $Skipped) -ForegroundColor DarkGray
Write-Host ("  Failed:      " + $Failed) -ForegroundColor White
Write-Host ("  Render time: " + $renderTimeStr) -ForegroundColor Yellow
Write-Host ("  Total time:  " + $totalTimeStr) -ForegroundColor Yellow
Write-Host ("  Output:      " + $OutputDir) -ForegroundColor White
Write-Host ("  Log:         " + $LogFile) -ForegroundColor White
Write-Host ""

$finishDate = Get-Date
$summaryLines = @(
    ""
    "============================================"
    "  PIPELINE COMPLETE"
    ("  " + $resLabel + " CRF " + $QUALITY_CRF)
    ("  Rendered: " + $Rendered + " | Skipped: " + $Skipped + " | Failed: " + $Failed)
    ("  Render: " + $renderTimeStr)
    ("  Total:  " + $totalTimeStr)
    ("  Finished: " + $finishDate)
    "============================================"
)
$summaryLines | Add-Content $LogFile
