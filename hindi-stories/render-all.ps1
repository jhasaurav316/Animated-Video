# ============================================================================
# Bulk Hindi Story Video Renderer (PowerShell)
# ============================================================================
# Reads hindi-stories/catalog.json and renders every Hindi story as both
# landscape (YouTube 1920x1080) and shorts (1080x1920) using Remotion.
#
# Optimized for Windows 11 with RTX 4090.
# Skips already-rendered videos automatically.
#
# Usage:
#   .\hindi-stories\render-all.ps1              # Render all
#   .\hindi-stories\render-all.ps1 -Batch 1     # Day 1: stories 1-50
#   .\hindi-stories\render-all.ps1 -Batch 2     # Day 2: stories 51-100
#   .\hindi-stories\render-all.ps1 -Batch 3     # Day 3: stories 101-150
# ============================================================================

param(
    [int]$Batch = 0
)

$ErrorActionPreference = "Stop"

# ---------- Configuration ----------
$ProjectDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
if (-not $ProjectDir) { $ProjectDir = Split-Path -Parent $PSScriptRoot }
$Catalog     = Join-Path $ProjectDir "hindi-stories\catalog.json"
$OutYT       = Join-Path $ProjectDir "out\story-youtube"
$OutShorts   = Join-Path $ProjectDir "out\story-shorts"
$LogFile     = Join-Path $ProjectDir "hindi-stories\render-log.txt"
$Concurrency = "100%"
$BatchSize   = 50

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
    # Split on hyphens/underscores/spaces, capitalize each segment, join
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
Write-Host "  Bulk Hindi Story Video Renderer (PS1)"
Write-Host "  Windows 11 / RTX 4090"
Write-Host "============================================"
Write-Host ""

# Verify catalog exists
if (-not (Test-Path $Catalog)) {
    Write-Host "ERROR: catalog.json not found at $Catalog" -ForegroundColor Red
    exit 1
}

# Create output directories
New-Item -ItemType Directory -Path $OutYT -Force | Out-Null
New-Item -ItemType Directory -Path $OutShorts -Force | Out-Null

# Initialize log
Set-Content -Path $LogFile -Value "============================================"
Add-Content -Path $LogFile -Value "  Hindi Stories Render Log - Started at $(Get-Timestamp)"
Add-Content -Path $LogFile -Value "============================================"

# ---------- Parse Catalog ----------
$catalogData = Get-Content -Raw $Catalog | ConvertFrom-Json

# Handle both array and object-with-stories formats
if ($catalogData -is [System.Array]) {
    $stories = $catalogData
} elseif ($catalogData.stories) {
    $stories = $catalogData.stories
} else {
    Write-Host "ERROR: Cannot parse catalog format" -ForegroundColor Red
    exit 1
}

$Total = $stories.Count
Write-Log "Found $Total Hindi stories to render"
Write-Log "Output: YouTube -> $OutYT"
Write-Log "Output: Shorts  -> $OutShorts"
Write-Log "Concurrency: $Concurrency"

if ($Batch -gt 0) {
    $batchStart = ($Batch - 1) * $BatchSize + 1
    $batchEnd   = $Batch * $BatchSize
    Write-Host ""
    Write-Log "BATCH MODE: Batch $Batch (stories $batchStart - $batchEnd)"
}

Write-Host ""

# ---------- Render Loop ----------
$StartTime = Get-Date
$Rendered  = 0
$Skipped   = 0
$Failed    = 0
$Current   = 0

foreach ($story in $stories) {
    $Current++

    $storyId = if ($story.storyId) { $story.storyId } else { $story.id }

    # Batch filtering
    if ($Batch -gt 0) {
        $batchStart = ($Batch - 1) * $BatchSize + 1
        $batchEnd   = $Batch * $BatchSize
        if ($Current -lt $batchStart -or $Current -gt $batchEnd) {
            continue
        }
    }

    $pascalName = ConvertTo-PascalCase $storyId
    $compId     = "Story$pascalName"

    # Elapsed time
    $elapsed    = (Get-Date) - $StartTime
    $elapsedStr = "{0:hh\:mm\:ss}" -f $elapsed

    Write-Log "[$Current/$Total] [$elapsedStr] Processing: $storyId (composition: $compId)"

    $ytFile     = Join-Path $OutYT "$storyId.mp4"
    $shortsFile = Join-Path $OutShorts "$storyId-shorts.mp4"

    # Check if both already exist
    if ((Test-Path $ytFile) -and (Test-Path $shortsFile)) {
        Write-Log "  SKIP both formats (already rendered)"
        $Skipped += 2
        continue
    }

    # Render landscape (YouTube 1920x1080)
    $result = Render-Composition -CompId $compId -OutputFile $ytFile -Label "$storyId (landscape 1920x1080)"
    switch ($result) {
        "ok"      { $Rendered++ }
        "skipped" { $Skipped++ }
        "fail"    { $Failed++ }
    }

    # Render shorts (1080x1920)
    $result = Render-Composition -CompId "${compId}Shorts" -OutputFile $shortsFile -Label "$storyId (shorts 1080x1920)"
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

$ytCount     = (Get-ChildItem -Path $OutYT -Filter "*.mp4" -ErrorAction SilentlyContinue | Measure-Object).Count
$shortsCount = (Get-ChildItem -Path $OutShorts -Filter "*.mp4" -ErrorAction SilentlyContinue | Measure-Object).Count

Write-Host ""
Write-Host "============================================"
Write-Host "  HINDI STORIES RENDERING COMPLETE!"
Write-Host "============================================"
Write-Host ""
Write-Host "  Total time:      ${Hours}h ${Minutes}m ${Seconds}s"
Write-Host "  Rendered:        $Rendered"
Write-Host "  Skipped:         $Skipped"
Write-Host "  Failed:          $Failed"
Write-Host "  YouTube videos:  $ytCount"
Write-Host "  Shorts videos:   $shortsCount"
Write-Host "  Total videos:    $($ytCount + $shortsCount)"
Write-Host ""
Write-Host "  Output:"
Write-Host "    YouTube:  $OutYT\"
Write-Host "    Shorts:   $OutShorts\"
Write-Host "  Log:        $LogFile"
Write-Host ""
Write-Host "============================================"

Write-Log "COMPLETE: $ytCount YouTube + $shortsCount Shorts in ${Hours}h ${Minutes}m ${Seconds}s (Rendered: $Rendered, Skipped: $Skipped, Failed: $Failed)"
