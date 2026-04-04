# ============================================================================
# Setup Batch 2 Folder (Phases 11-40) - Clean public dir for faster renders
# ============================================================================
# Creates a new folder with only the necessary project files (no old audio/videos)
# Usage: cd C:\test\Animated-Video\2k-video-3april && .\setup-batch2.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$SourceDir = $PSScriptRoot
$TargetDir = Join-Path (Split-Path $SourceDir) "2k-video-3april-batch2"

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  SETUP BATCH 2 - Phases 11-40 (1530 Videos)" -ForegroundColor Cyan
Write-Host "  From: $SourceDir" -ForegroundColor White
Write-Host "  To:   $TargetDir" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# Create target directory
if (Test-Path $TargetDir) {
    Write-Host "  Target folder already exists! Delete it first or rename." -ForegroundColor Red
    exit 1
}
New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null

# Copy project files (exclude public, out, build, node_modules)
Write-Host "  Copying project files..." -ForegroundColor Yellow
robocopy "$SourceDir" "$TargetDir" /E /XD public out build node_modules .git /NFL /NDL /NJH /NJS /NC /NS /NP | Out-Null
Write-Host "  Files copied!" -ForegroundColor Green

# Create empty public directory
New-Item -ItemType Directory -Path (Join-Path $TargetDir "public") -Force | Out-Null

# Install dependencies
Write-Host "  Installing node_modules..." -ForegroundColor Yellow
Set-Location $TargetDir
npm install --silent 2>&1 | Out-Null
Write-Host "  Dependencies installed!" -ForegroundColor Green

Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  BATCH 2 READY!" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Location: $TargetDir" -ForegroundColor White
Write-Host ""
Write-Host "  Run phases:" -ForegroundColor Yellow
Write-Host "    cd `"$TargetDir`"" -ForegroundColor White
Write-Host "    .\run-phase11.ps1" -ForegroundColor White
Write-Host "    # or run all at once:" -ForegroundColor DarkGray
Write-Host "    .\run-phase11-to-30.ps1" -ForegroundColor White
Write-Host ""
