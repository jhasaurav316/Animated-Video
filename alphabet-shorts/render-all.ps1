# ============================================================================
# Bulk Alphabet Shorts Video Renderer (PowerShell)
# ============================================================================
# Reads alphabet-shorts/catalog.json and renders every alphabet video
# in portrait/shorts format (1080x1920) using Remotion.
#
# Skips already-rendered videos automatically.
#
# Usage:
#   .\alphabet-shorts\render-all.ps1              # Render all
#   .\alphabet-shorts\render-all.ps1 -Batch 1     # Batch 1: videos 1-5
#   .\alphabet-shorts\render-all.ps1 -Batch 2     # Batch 2: videos 6-10
# ============================================================================

param(
    [int]$Batch = 0
)

$ErrorActionPreference = "Stop"

# ---------- Configuration ----------
$ProjectDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
if (-not $ProjectDir) { $ProjectDir = Split-Path -Parent $PSScriptRoot }
$Catalog     = Join-Path $ProjectDir "alphabet-shorts\catalog.json"
$OutDir      = Join-Path $ProjectDir "out\alphabet-shorts"
$LogFile     = Join-Path $ProjectDir "alphabet-shorts\render-log.txt"
$Concurrency = "100%"
$BatchSize   = 5

Set-Location $ProjectDir

# ---------- Helpers ----------
function Get-Timestamp {
    return (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
}

function Write-Log {
    param([string]$Message)
    $entry = "[$(Get-Timestamp)] $Message"
    Write-Host $entry
    Add-Content -Path $LogFile -Value $entry
}

function ConvertTo-PascalCase {
    param([string]$Text)
    $parts = $Text -split '[-_ ]'
    $pascal = ($parts | ForEach-Object {
        if ($_.Length -gt 0) {
            $_.Substring(0,1).ToUpper() + $_.Substring(1)
        }
    }) -join ''
    return $pascal
}

function Render-Composition {
    param(
        [string]$CompId,
        [string]$OutputFile,
        [string]$Label
    )

    if (Test-Path $OutputFile) {
        Write-Log "  SKIP $Label (already exists)"
        return "skipped"
    }

    Write-Log "  RENDER $Label -> $OutputFile"
    try {
        $output = & npx remotion render $CompId $OutputFile --concurrency="$Concurrency" --log=error 2>&1
        $output | Out-String | Add-Content -Path $LogFile
        if ($LASTEXITCODE -eq 0) {
            Write-Log "  DONE $Label"
            return "ok"
        } else {
            Write-Log "  FAILED $Label (exit code $LASTEXITCODE)"
            return "fail"
        }
    } catch {
        Write-Log "  FAILED $Label ($_)"
        return "fail"
    }
}

# ---------- Setup ----------
Write-Host ""
Write-Host "============================================"
Write-Host "  Bulk Alphabet Shorts Video Renderer (PS1)"
Write-Host "============================================"
Write-Host ""

# Verify catalog exists
if (-not (Test-Path $Catalog)) {
    Write-Host "ERROR: catalog.json not found at $Catalog" -ForegroundColor Red
    exit 1
}

# Create output directory
New-Item -ItemType Directory -Path $OutDir -Force | Out-Null

# Initialize log
Set-Content -Path $LogFile -Value "============================================"
Add-Content -Path $LogFile -Value "  Alphabet Shorts Render Log - Started at $(Get-Timestamp)"
Add-Content -Path $LogFile -Value "============================================"

# ---------- Parse Catalog ----------
$catalogData = Get-Content -Raw $Catalog | ConvertFrom-Json

# Handle both array and object-with-videos formats
if ($catalogData -is [System.Array]) {
    $videos = $catalogData
} elseif ($catalogData.videos) {
    $videos = $catalogData.videos
} else {
    Write-Host "ERROR: Cannot parse catalog format" -ForegroundColor Red
    exit 1
}

$Total = $videos.Count
Write-Log "Found $Total alphabet videos to render"
Write-Log "Output: $OutDir"
Write-Log "Concurrency: $Concurrency"

if ($Batch -gt 0) {
    $batchStart = ($Batch - 1) * $BatchSize + 1
    $batchEnd   = $Batch * $BatchSize
    Write-Host ""
    Write-Log "BATCH MODE: Batch $Batch (videos $batchStart - $batchEnd)"
}

Write-Host ""

# ---------- Render Loop ----------
$StartTime = Get-Date
$Rendered  = 0
$Skipped   = 0
$Failed    = 0
$Current   = 0

foreach ($video in $videos) {
    $Current++

    $videoId = $video.id

    # Batch filtering
    if ($Batch -gt 0) {
        $batchStart = ($Batch - 1) * $BatchSize + 1
        $batchEnd   = $Batch * $BatchSize
        if ($Current -lt $batchStart -or $Current -gt $batchEnd) {
            continue
        }
    }

    $pascalName = ConvertTo-PascalCase $videoId
    $compId     = $pascalName

    # Elapsed time
    $elapsed    = (Get-Date) - $StartTime
    $elapsedStr = "{0:hh\:mm\:ss}" -f $elapsed

    Write-Log "[$Current/$Total] [$elapsedStr] Processing: $videoId (composition: $compId)"

    $outputFile = Join-Path $OutDir "$videoId.mp4"

    # Check if already rendered
    if (Test-Path $outputFile) {
        Write-Log "  SKIP (already rendered)"
        $Skipped++
        continue
    }

    # Render (1080x1920 portrait)
    $result = Render-Composition -CompId $compId -OutputFile $outputFile -Label "$videoId (1080x1920)"
    switch ($result) {
        "ok"      { $Rendered++ }
        "skipped" { $Skipped++ }
        "fail"    { $Failed++ }
    }
}

# ---------- Summary ----------
$EndTime  = Get-Date
$Duration = $EndTime - $StartTime
$Hours    = [math]::Floor($Duration.TotalHours)
$Minutes  = $Duration.Minutes
$Seconds  = $Duration.Seconds

$videoCount = (Get-ChildItem -Path $OutDir -Filter "*.mp4" -ErrorAction SilentlyContinue | Measure-Object).Count

Write-Host ""
Write-Host "============================================"
Write-Host "  ALPHABET SHORTS RENDERING COMPLETE!"
Write-Host "============================================"
Write-Host ""
Write-Host "  Total time:      ${Hours}h ${Minutes}m ${Seconds}s"
Write-Host "  Rendered:        $Rendered"
Write-Host "  Skipped:         $Skipped"
Write-Host "  Failed:          $Failed"
Write-Host "  Total videos:    $videoCount"
Write-Host ""
Write-Host "  Output:  $OutDir\"
Write-Host "  Log:     $LogFile"
Write-Host ""
Write-Host "============================================"

Write-Log "COMPLETE: $videoCount videos in ${Hours}h ${Minutes}m ${Seconds}s (Rendered: $Rendered, Skipped: $Skipped, Failed: $Failed)"
