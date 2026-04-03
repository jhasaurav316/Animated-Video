# ============================================================================
# RUN PHASES 11 to 30 SEQUENTIALLY (auto-skip rendered videos)
# ============================================================================

$startTime = Get-Date

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  RUNNING PHASES 11-30 (1020 Videos)" -ForegroundColor Cyan
Write-Host "  Started: $($startTime.ToString('yyyy-MM-dd HH:mm:ss'))" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan

for ($phase = 11; $phase -le 30; $phase++) {
    $script = Join-Path $PSScriptRoot "run-phase$phase.ps1"
    Write-Host ""
    Write-Host "****************************************************************" -ForegroundColor Magenta
    Write-Host "  STARTING PHASE $phase / 30  |  Elapsed: $((Get-Date) - $startTime)" -ForegroundColor Magenta
    Write-Host "****************************************************************" -ForegroundColor Magenta

    & $script

    Write-Host "  Phase $phase done at $((Get-Date).ToString('HH:mm:ss'))" -ForegroundColor Green
}

$totalTime = (Get-Date) - $startTime
Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  PHASES 11-30 COMPLETE!" -ForegroundColor Green
Write-Host "  Total Time: $($totalTime.ToString('dd\.hh\:mm\:ss'))" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Green
