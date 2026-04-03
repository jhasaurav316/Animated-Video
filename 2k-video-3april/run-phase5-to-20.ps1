# ============================================================================
# RUN PHASES 5 to 20 SEQUENTIALLY (overnight batch)
# ============================================================================

$startTime = Get-Date

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  RUNNING PHASES 5-20 (816 Videos)" -ForegroundColor Cyan
Write-Host "  Started: $($startTime.ToString('yyyy-MM-dd HH:mm:ss'))" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan

for ($phase = 5; $phase -le 20; $phase++) {
    $script = Join-Path $PSScriptRoot "run-phase$phase.ps1"
    Write-Host ""
    Write-Host "****************************************************************" -ForegroundColor Magenta
    Write-Host "  STARTING PHASE $phase / 20  |  Elapsed: $((Get-Date) - $startTime)" -ForegroundColor Magenta
    Write-Host "****************************************************************" -ForegroundColor Magenta

    & $script

    Write-Host "  Phase $phase done at $((Get-Date).ToString('HH:mm:ss'))" -ForegroundColor Green
}

$totalTime = (Get-Date) - $startTime
Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  PHASES 5-20 COMPLETE!" -ForegroundColor Green
Write-Host "  Total Time: $($totalTime.ToString('dd\.hh\:mm\:ss'))" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Green
