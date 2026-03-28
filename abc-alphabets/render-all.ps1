# ============================================================================
# Render All ABC Alphabet Videos (PowerShell / Windows)
# ============================================================================
# Full pipeline: Generate Audio -> Register Compositions -> Render Videos
# Optimized for RTX 4090 GPU with maximum quality output.
#
# Usage:
#   .\abc-alphabets\render-all.ps1                        # Full pipeline (all videos)
#   .\abc-alphabets\render-all.ps1 -SkipAudio             # Skip audio generation
#   .\abc-alphabets\render-all.ps1 -RenderOnly            # Only render (skip audio + register)
#   .\abc-alphabets\render-all.ps1 -From 1 -To 5         # Render videos 1-5 only
#   .\abc-alphabets\render-all.ps1 -Quality 4k            # Render in 4K (default: hd)
#   .\abc-alphabets\render-all.ps1 -Quality max           # Max quality (4K + high bitrate)
# ============================================================================

param(
    [switch]$SkipAudio,
    [switch]$SkipRegister,
    [switch]$RenderOnly,
    [int]$From = 1,
    [int]$To = 0,           # 0 = all
    [int]$FolderSize = 10,  # Videos per output folder
    [ValidateSet("hd", "4k", "max")]
    [string]$Quality = "hd"
)

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$Catalog = Join-Path $ScriptDir "catalog.json"
$OutputDir = Join-Path $ProjectRoot "out\abc-alphabets"
$LogFile = Join-Path $ScriptDir "render-log.txt"

# ---------- Quality Profiles (optimized for RTX 4090 24GB VRAM) ----------
# These settings leverage NVENC hardware encoder for blazing fast renders

$QualityProfiles = @{
    "hd" = @{
        Width       = 1080
        Height      = 1920
        Scale       = 1
        CRF         = 18
        Codec       = "h264"
        PixelFormat = "yuv420p"
        Bitrate     = ""
        Label       = "Full HD (1080x1920) CRF 18"
    }
    "4k" = @{
        Width       = 2160
        Height      = 3840
        Scale       = 2
        CRF         = 16
        Codec       = "h264"
        PixelFormat = "yuv420p"
        Bitrate     = ""
        Label       = "4K UHD (2160x3840) CRF 16"
    }
    "max" = @{
        Width       = 2160
        Height      = 3840
        Scale       = 2
        CRF         = 12
        Codec       = "h264"
        PixelFormat = "yuv420p"
        Bitrate     = "25M"
        Label       = "4K MAX (2160x3840) CRF 12, 25Mbps"
    }
}

$QProfile = $QualityProfiles[$Quality]

# ---------- Helpers ----------

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

# ---------- Pre-flight checks ----------

if (-not (Test-Path $Catalog)) {
    Write-Error "ERROR: catalog.json not found at $Catalog"
    exit 1
}

if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

# Initialize log
@(
    "════════════════════════════════════════════════"
    "  ABC Alphabets Render Log"
    "  Started: $(Get-Date)"
    "  Quality: $($QProfile.Label)"
    "════════════════════════════════════════════════"
    ""
) | Set-Content $LogFile

$CatalogJson = Get-Content $Catalog -Raw | ConvertFrom-Json
$Videos = if ($CatalogJson -is [Array]) { $CatalogJson } else { $CatalogJson.videos }
$Total = $Videos.Count

if ($To -eq 0 -or $To -gt $Total) { $To = $Total }

Write-Host ""
Write-Host "════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  ABC Alphabets Render Pipeline" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Videos:  $Total total, rendering $From to $To" -ForegroundColor White
Write-Host "  Quality: $($QProfile.Label)" -ForegroundColor Yellow
Write-Host "  Output:  $OutputDir" -ForegroundColor White
Write-Host ""

$PipelineStart = Get-Date

# ======================== STEP 1: AUDIO GENERATION ========================
if (-not $RenderOnly -and -not $SkipAudio) {
    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host "  STEP 1: Generating Audio (edge-tts + ffmpeg)" -ForegroundColor Yellow
    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host ""

    $audioArgs = ""
    if ($From -gt 1 -or $To -lt $Total) {
        $audioArgs = "--from $From --to $To"
    }

    $audioScript = Join-Path $ScriptDir "generate-audio.js"
    if (Test-Path $audioScript) {
        $audioCmd = "node `"$audioScript`" $audioArgs"
        Write-Host "  Running: $audioCmd" -ForegroundColor DarkGray
        Invoke-Expression $audioCmd
        if ($LASTEXITCODE -ne 0) {
            Write-Host "  ⚠ Audio generation had errors, continuing..." -ForegroundColor Yellow
        } else {
            Write-Host "  ✅ Audio generation complete!" -ForegroundColor Green
        }
    } else {
        Write-Host "  ⚠ generate-audio.js not found, skipping audio step" -ForegroundColor Yellow
    }
    Write-Host ""
} else {
    Write-Host "  STEP 1: Audio generation SKIPPED" -ForegroundColor DarkGray
    Write-Host ""
}

# ======================== STEP 2: REGISTER COMPOSITIONS ========================
if (-not $RenderOnly -and -not $SkipRegister) {
    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host "  STEP 2: Registering Compositions" -ForegroundColor Yellow
    Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
    Write-Host ""

    $registerScript = Join-Path $ScriptDir "register-compositions.js"
    if (Test-Path $registerScript) {
        node $registerScript
        Write-Host "  ✅ Compositions registered!" -ForegroundColor Green
    } else {
        Write-Host "  ⚠ register-compositions.js not found" -ForegroundColor Yellow
    }
    Write-Host ""
} else {
    Write-Host "  STEP 2: Registration SKIPPED" -ForegroundColor DarkGray
    Write-Host ""
}

# ======================== STEP 3: RENDER VIDEOS ========================
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host "  STEP 3: Rendering Videos" -ForegroundColor Yellow
Write-Host "────────────────────────────────────────────────" -ForegroundColor DarkGray
Write-Host ""

$Rendered = 0
$Skipped = 0
$Failed = 0

for ($i = ($From - 1); $i -lt $To; $i++) {
    $Video = $Videos[$i]
    [int]$serialNum = $i + 1
    $serialStr = $serialNum.ToString("D3")
    $VideoId = $Video.id
    $Title = $Video.title
    $CompId = "Abc" + (ConvertTo-PascalCase $VideoId)
    $filenameSafe = ConvertTo-FilenameSafe $Title

    # Calculate batch folder
    [int]$batchNum = [Math]::Ceiling($serialNum / $FolderSize)
    [int]$batchStart = (($batchNum - 1) * $FolderSize) + 1
    [int]$batchEnd = [Math]::Min($batchNum * $FolderSize, $Total)
    $batchFolder = "Batch-$($batchNum.ToString('D2'))_($batchStart-$batchEnd)"

    $OutputFile = Join-Path $OutputDir "$batchFolder\$serialStr-$filenameSafe.mp4"

    # Create batch folder
    $batchDir = Join-Path $OutputDir $batchFolder
    if (-not (Test-Path $batchDir)) {
        New-Item -ItemType Directory -Path $batchDir -Force | Out-Null
    }

    # Skip if already rendered
    if (Test-Path $OutputFile) {
        Write-Host "  [$serialNum/$Total] SKIP: $Title (exists)" -ForegroundColor DarkGray
        $Skipped++
        continue
    }

    Write-Host "  [$serialNum/$Total] " -NoNewline -ForegroundColor White
    Write-Host "$Title" -NoNewline -ForegroundColor Cyan
    Write-Host " ($CompId)..." -ForegroundColor DarkGray -NoNewline

    $logEntry = "[$(Get-Date -Format 'HH:mm:ss')] RENDER $serialStr-$filenameSafe"
    $logEntry | Out-File $LogFile -Append

    # Build render command with quality settings
    $renderCmd = "npx remotion render src/index.ts $CompId `"$OutputFile`" --concurrency=100% --log=error"

    # Add scale for 4K
    if ($QProfile.Scale -gt 1) {
        $renderCmd += " --scale=$($QProfile.Scale)"
    }

    # Add CRF
    $renderCmd += " --crf=$($QProfile.CRF)"

    # Add codec
    $renderCmd += " --codec=$($QProfile.Codec)"

    # Add pixel format
    $renderCmd += " --pixel-format=$($QProfile.PixelFormat)"

    # Add bitrate for max quality
    if ($QProfile.Bitrate) {
        $renderCmd += " --video-bitrate=$($QProfile.Bitrate)"
    }

    try {
        $output = Invoke-Expression $renderCmd 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host " DONE" -ForegroundColor Green
            $Rendered++
            "[$(Get-Date -Format 'HH:mm:ss')] DONE $serialStr" | Out-File $LogFile -Append
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

# ======================== SUMMARY ========================
$PipelineEnd = Get-Date
$Elapsed = ($PipelineEnd - $PipelineStart)

Write-Host ""
Write-Host "════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  Pipeline Complete!" -ForegroundColor Green
Write-Host "════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Quality:  $($QProfile.Label)" -ForegroundColor Yellow
Write-Host "  Rendered: $Rendered" -ForegroundColor Green
Write-Host "  Skipped:  $Skipped" -ForegroundColor DarkGray
Write-Host "  Failed:   $Failed" -ForegroundColor $(if ($Failed -gt 0) { "Red" } else { "Green" })
Write-Host "  Time:     $($Elapsed.Hours)h $($Elapsed.Minutes)m $($Elapsed.Seconds)s" -ForegroundColor White
Write-Host "  Output:   $OutputDir" -ForegroundColor White
Write-Host "  Log:      $LogFile" -ForegroundColor White
Write-Host ""

@(
    ""
    "════════════════════════════════════════════════"
    "  Pipeline Complete!"
    "  Quality: $($QProfile.Label)"
    "  Rendered: $Rendered | Skipped: $Skipped | Failed: $Failed"
    "  Time: $($Elapsed.Hours)h $($Elapsed.Minutes)m $($Elapsed.Seconds)s"
    "  Finished: $(Get-Date)"
    "════════════════════════════════════════════════"
) | Add-Content $LogFile
