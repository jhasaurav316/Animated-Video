# ============================================================================
# English Stories - Render Pipeline
# ============================================================================
# Renders all English story videos with serial numbering and folder organization.
#
# Usage:
#   .\english-stories\render-all.ps1                  # Render all
#   .\english-stories\render-all.ps1 -From 1 -To 5   # Render stories 1-5
# ============================================================================

param(
    [int]$From = 1,
    [int]$To = 0,
    [int]$FolderSize = 5
)

$ErrorActionPreference = "Continue"

$PROJECT_DIR = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$CATALOG_PATH = Join-Path $PROJECT_DIR "english-stories\catalog.json"
$OUT_DIR = Join-Path $PROJECT_DIR "out\stories"
$LOG_FILE = Join-Path $PROJECT_DIR "english-stories\render-log.txt"

Set-Location $PROJECT_DIR

Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  English Stories - Video Render Pipeline" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Started: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
Write-Host ""

# Load catalog
$catalog = Get-Content $CATALOG_PATH -Raw | ConvertFrom-Json
$stories = if ($catalog -is [array]) { $catalog } else { $catalog.stories }
$totalStories = $stories.Count

if ($To -eq 0) { $To = $totalStories }
$From = [Math]::Max(1, $From)
$To = [Math]::Min($totalStories, $To)

Write-Host "  Found $totalStories stories. Rendering $From to $To." -ForegroundColor White
Write-Host ""

function ConvertTo-PascalCase($str) {
    ($str -split '[-_\s]+' | ForEach-Object { $_.Substring(0, 1).ToUpper() + $_.Substring(1).ToLower() }) -join ''
}

function ConvertTo-FilenameSafe($title) {
    $safe = $title -replace '[^\w\s-]', '' -replace '\s+', '-'
    return $safe
}

if (!(Test-Path $OUT_DIR)) { New-Item -ItemType Directory -Path $OUT_DIR -Force | Out-Null }

$rendered = 0
$failed = 0
$stepStart = Get-Date

for ($i = ($From - 1); $i -lt $To; $i++) {
    $story = $stories[$i]
    [int]$serialNum = $i + 1
    $serialStr = $serialNum.ToString("D2")

    $storyId = if ($story.storyId) { $story.storyId } else { $story.id }
    $title = $story.title
    $compId = "Story" + (ConvertTo-PascalCase $storyId)
    $filenameSafe = ConvertTo-FilenameSafe $title

    [int]$batchNum = [Math]::Ceiling($serialNum / $FolderSize)
    [int]$batchStart = (($batchNum - 1) * $FolderSize) + 1
    [int]$batchEnd = $batchNum * $FolderSize
    $batchFolder = "Batch-$($batchNum.ToString('D2'))_($batchStart-$batchEnd)"

    $outFolder = Join-Path $OUT_DIR $batchFolder
    $outFile = Join-Path $outFolder "$serialStr-$filenameSafe.mp4"

    if (!(Test-Path $outFolder)) { New-Item -ItemType Directory -Path $outFolder -Force | Out-Null }

    Write-Host ""
    Write-Host "  [$serialStr/$totalStories] $title" -ForegroundColor White
    Write-Host "    Composition: $compId" -ForegroundColor DarkGray
    Write-Host "    Folder: $batchFolder" -ForegroundColor DarkGray

    if (Test-Path $outFile) {
        Write-Host "    SKIP (exists)" -ForegroundColor DarkGray
        continue
    }

    Write-Host "    Rendering..." -ForegroundColor Cyan -NoNewline
    try {
        $output = npx remotion render $compId $outFile --concurrency=100% --log=error 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host " DONE" -ForegroundColor Green
            $rendered++
        } else {
            Write-Host " FAILED" -ForegroundColor Red
            $failed++
        }
    } catch {
        Write-Host " ERROR: $($_.Exception.Message)" -ForegroundColor Red
        $failed++
    }
}

$elapsed = (Get-Date) - $stepStart
Write-Host ""
Write-Host "========================================================" -ForegroundColor Green
Write-Host "  STORIES RENDER COMPLETE!" -ForegroundColor Green
Write-Host "  Time: $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "  Rendered: $rendered | Failed: $failed" -ForegroundColor White
Write-Host "  Output: $OUT_DIR" -ForegroundColor White
Write-Host "========================================================" -ForegroundColor Green
