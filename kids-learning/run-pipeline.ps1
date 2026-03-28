# ============================================================================
# Kids Learning - One-Click Render Pipeline (PowerShell 5.1 Compatible)
# ============================================================================
# Generates audio + registers compositions + renders all videos
# Output organized by category folders: out/kids-learning/animals/, birds/, etc.
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File .\kids-learning\run-pipeline.ps1
# ============================================================================

$ErrorActionPreference = "Continue"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

$ScriptDir = Join-Path $ProjectRoot "kids-learning"
$OutputDir = Join-Path $ProjectRoot "out\kids-learning"
$LogFile = Join-Path $ProjectRoot "kids-learning-render-log.txt"
$PYTHON = "python"
$CONCURRENCY = "100%"
$QUALITY_CRF = 16
$QUALITY_CODEC = "h264"

Write-Host ""
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "  KIDS LEARNING - RENDER PIPELINE" -ForegroundColor Cyan
Write-Host "  Full HD (1080x1920) | CRF $QUALITY_CRF" -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host ""

$PipelineStart = Get-Date

# ======================== STEP 0: SETUP ========================
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  STEP 0: Setup" -ForegroundColor Yellow
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray

Write-Host "  Pulling latest code..." -ForegroundColor White
git pull origin main 2>&1 | Out-Host
Write-Host "  OK: Code updated" -ForegroundColor Green

Write-Host "  Installing dependencies..." -ForegroundColor White
npm install --silent 2>&1 | Out-Host
Write-Host "  OK: Dependencies installed" -ForegroundColor Green

# Check edge-tts
$edgeCheck = & $PYTHON -m edge_tts --version 2>&1
if ($LASTEXITCODE -ne 0) {
    & $PYTHON -m pip install edge-tts --quiet 2>&1 | Out-Host
}
Write-Host "  OK: edge-tts ready" -ForegroundColor Green

# Disable sleep
powercfg /change standby-timeout-ac 0 2>$null
powercfg /change monitor-timeout-ac 0 2>$null
Write-Host "  OK: Sleep disabled" -ForegroundColor Green
Write-Host ""

# ======================== STEP 1: REGISTER ========================
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  STEP 1: Registering Compositions" -ForegroundColor Yellow
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray

$registerScript = Join-Path $ScriptDir "register-compositions.js"
if (Test-Path $registerScript) {
    node $registerScript
    Write-Host "  OK: Compositions registered" -ForegroundColor Green
}
Write-Host ""

# ======================== STEP 2: AUDIO ========================
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  STEP 2: Generating Audio" -ForegroundColor Yellow
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray

$audioScript = Join-Path $ScriptDir "generate-audio.js"
if (Test-Path $audioScript) {
    node $audioScript
    Write-Host "  OK: Audio generated" -ForegroundColor Green
}
Write-Host ""

# ======================== STEP 3: RENDER ========================
Write-Host "------------------------------------------------------------" -ForegroundColor DarkGray
Write-Host "  STEP 3: Rendering Videos" -ForegroundColor Yellow
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

# Load all catalogs
$catalogFiles = Get-ChildItem -Path $ScriptDir -Filter "*-catalog.json" | Sort-Object Name
$AllVideos = @()

foreach ($cf in $catalogFiles) {
    $json = Get-Content $cf.FullName -Raw | ConvertFrom-Json
    if ($json -is [Array]) {
        $AllVideos += $json
    }
}

$Total = $AllVideos.Count
Write-Host "  Total videos to render: $Total" -ForegroundColor White

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

# Init log
$logDate = Get-Date
@(
    "============================================"
    "  Kids Learning Render Log - $logDate"
    "  Videos: $Total"
    "============================================"
    ""
) | Set-Content $LogFile

$Rendered = 0
$Skipped = 0
$Failed = 0
$RenderStart = Get-Date

for ($i = 0; $i -lt $Total; $i++) {
    $Video = $AllVideos[$i]
    [int]$serialNum = $i + 1
    $serialStr = $serialNum.ToString("D3")
    $VideoId = $Video.id
    $Title = $Video.title
    $Category = $Video.category
    $CompId = "Kids" + (ConvertTo-PascalCase $VideoId)
    $filenameSafe = ConvertTo-FilenameSafe $Title

    # Category-based output folder
    $categoryDir = Join-Path $OutputDir $Category
    if (-not (Test-Path $categoryDir)) {
        New-Item -ItemType Directory -Path $categoryDir -Force | Out-Null
    }

    $outFileName = $serialStr + "-" + $filenameSafe + ".mp4"
    $OutputFile = Join-Path $categoryDir $outFileName

    # Skip existing
    if (Test-Path $OutputFile) {
        Write-Host ("  [" + $serialNum + "/" + $Total + "] SKIP " + $Title) -ForegroundColor DarkGray
        $Skipped++
        continue
    }

    Write-Host ("  [" + $serialNum + "/" + $Total + "] " + $Title + " (" + $CompId + ") rendering...") -NoNewline -ForegroundColor Cyan

    $videoStart = Get-Date

    $cmd = "npx remotion render src/index.ts " + $CompId + " `"" + $OutputFile + "`" --concurrency=" + $CONCURRENCY + " --log=error --crf=" + $QUALITY_CRF + " --codec=" + $QUALITY_CODEC + " --pixel-format=yuv420p"

    $output = Invoke-Expression $cmd 2>&1
    $exitCode = $LASTEXITCODE

    $elapsed = (Get-Date) - $videoStart
    $secs = [Math]::Round($elapsed.TotalSeconds)

    if ($exitCode -eq 0 -and (Test-Path $OutputFile)) {
        $fileSizeBytes = (Get-Item $OutputFile).Length
        $fileSizeMB = [Math]::Round($fileSizeBytes / 1048576, 1)
        Write-Host (" DONE (" + $secs + "s, " + $fileSizeMB + "MB)") -ForegroundColor Green
        $Rendered++
    } else {
        Write-Host " FAILED" -ForegroundColor Red
        $outputStr = $output | Out-String
        if ($outputStr.Length -gt 0) {
            Write-Host ("    " + $outputStr.Substring(0, [Math]::Min(300, $outputStr.Length))) -ForegroundColor DarkRed
        }
        $Failed++
    }

    $timeStamp = Get-Date -Format "HH:mm:ss"
    $logLine = "[" + $timeStamp + "] " + $serialStr + " " + $Title + " -> " + $(if ($exitCode -eq 0) { "OK" } else { "FAILED" })
    $logLine | Out-File $LogFile -Append
}

# ======================== SUMMARY ========================
$PipelineEnd = Get-Date
$TotalElapsed = $PipelineEnd - $PipelineStart

$totalTimeStr = $TotalElapsed.Hours.ToString() + "h " + $TotalElapsed.Minutes.ToString() + "m " + $TotalElapsed.Seconds.ToString() + "s"

Write-Host ""
Write-Host "===========================================================" -ForegroundColor Green
Write-Host "  PIPELINE COMPLETE!" -ForegroundColor Green
Write-Host "===========================================================" -ForegroundColor Green
Write-Host ""
Write-Host ("  Rendered:  " + $Rendered) -ForegroundColor Green
Write-Host ("  Skipped:   " + $Skipped) -ForegroundColor DarkGray
Write-Host ("  Failed:    " + $Failed) -ForegroundColor White
Write-Host ("  Time:      " + $totalTimeStr) -ForegroundColor Yellow
Write-Host ("  Output:    " + $OutputDir) -ForegroundColor White
Write-Host ""
Write-Host "  Output folders:" -ForegroundColor White
Get-ChildItem -Path $OutputDir -Directory | ForEach-Object {
    $count = (Get-ChildItem $_.FullName -Filter "*.mp4").Count
    Write-Host ("    " + $_.Name + "/ -> " + $count + " videos") -ForegroundColor Cyan
}
Write-Host ""
