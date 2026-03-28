# render-phase1.ps1
# Renders Phase 1: 30 animal videos + 20 bird videos = 50 total
# Run: .\render-phase1.ps1

$ProjectDir = $PSScriptRoot
$totalVideos = 50
$currentVideo = 0
$rendered = 0
$skipped = 0
$failed = 0
$startTime = Get-Date

# ---------- Helper Functions ----------

function Convert-ToPascalCase {
    param([string]$str)
    ($str -split '[-_\s]+' | ForEach-Object {
        $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
    }) -join ''
}

function Render-Catalog {
    param(
        [string]$CatalogPath,
        [string]$FolderName
    )

    if (-not (Test-Path $CatalogPath)) {
        Write-Host "ERROR: Catalog not found at $CatalogPath" -ForegroundColor Red
        return
    }

    $catalog = Get-Content $CatalogPath -Raw | ConvertFrom-Json
    $videos = if ($catalog -is [System.Array]) { $catalog } else { $catalog.videos }

    # Create output directory
    $outDir = Join-Path $ProjectDir "out" $FolderName
    if (-not (Test-Path $outDir)) {
        New-Item -ItemType Directory -Path $outDir -Force | Out-Null
        Write-Host "Created output directory: $outDir" -ForegroundColor Gray
    }

    foreach ($video in $videos) {
        $script:currentVideo++
        $videoId = $video.id
        $compId = Convert-ToPascalCase $videoId
        $outputFile = Join-Path $outDir "$videoId.mp4"

        # Skip already-rendered videos
        if (Test-Path $outputFile) {
            $script:skipped++
            Write-Host "[$script:currentVideo/$totalVideos] SKIP (exists): $videoId" -ForegroundColor Yellow
            continue
        }

        $elapsed = (Get-Date) - $startTime
        Write-Host "[$script:currentVideo/$totalVideos] Rendering $compId -> out/$FolderName/$videoId.mp4 (elapsed: $($elapsed.ToString('hh\:mm\:ss')))" -ForegroundColor Cyan

        & npx remotion render $compId "$outputFile" --concurrency=100%

        if ($LASTEXITCODE -eq 0) {
            $script:rendered++
            Write-Host "  Done!" -ForegroundColor Green
        } else {
            $script:failed++
            Write-Host "  FAILED to render $compId" -ForegroundColor Red
        }
    }
}

# ---------- Main ----------

Write-Host "============================================" -ForegroundColor White
Write-Host "  Phase 1 Render Pipeline" -ForegroundColor White
Write-Host "  30 Animal Videos + 20 Bird Videos = 50 Total" -ForegroundColor White
Write-Host "============================================" -ForegroundColor White
Write-Host ""

# Process animal-names catalog first
Write-Host "--- Rendering Animal Names ---" -ForegroundColor Magenta
$animalCatalog = Join-Path $ProjectDir "animal-names" "catalog.json"
Render-Catalog -CatalogPath $animalCatalog -FolderName "animal-names"

Write-Host ""

# Process bird-names catalog second
Write-Host "--- Rendering Bird Names ---" -ForegroundColor Magenta
$birdCatalog = Join-Path $ProjectDir "bird-names" "catalog.json"
Render-Catalog -CatalogPath $birdCatalog -FolderName "bird-names"

# ---------- Summary ----------
$endTime = Get-Date
$elapsed = $endTime - $startTime

Write-Host ""
Write-Host "============================================" -ForegroundColor White
Write-Host "  Phase 1 Render Complete!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor White
Write-Host "  Rendered:  $rendered" -ForegroundColor Green
Write-Host "  Skipped:   $skipped" -ForegroundColor Yellow
Write-Host "  Failed:    $failed" -ForegroundColor $(if ($failed -gt 0) { "Red" } else { "White" })
Write-Host "  Total:     $currentVideo / $totalVideos" -ForegroundColor White
Write-Host "  Elapsed:   $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "============================================" -ForegroundColor White
