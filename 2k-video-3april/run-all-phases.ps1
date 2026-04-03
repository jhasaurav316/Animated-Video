# ============================================================================
# RUN ALL 40 PHASES SEQUENTIALLY (one at a time, auto-skip rendered videos)
# ============================================================================
# Usage: cd C:\test\Animated-Video\2k-video-3april && .\run-all-phases.ps1
# ============================================================================

$startTime = Get-Date

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  RUNNING ALL 40 PHASES - 2040 Videos" -ForegroundColor Cyan
Write-Host "  Started: $($startTime.ToString('yyyy-MM-dd HH:mm:ss'))" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

for ($phase = 1; $phase -le 40; $phase++) {
    $script = Join-Path $PSScriptRoot "run-phase$phase.ps1"
    if (Test-Path $script) {
        Write-Host ""
        Write-Host "****************************************************************" -ForegroundColor Magenta
        Write-Host "  STARTING PHASE $phase / 40" -ForegroundColor Magenta
        Write-Host "  Elapsed: $((Get-Date) - $startTime)" -ForegroundColor Magenta
        Write-Host "****************************************************************" -ForegroundColor Magenta
        Write-Host ""

        & $script

        Write-Host ""
        Write-Host "  Phase $phase finished at $((Get-Date).ToString('HH:mm:ss'))" -ForegroundColor Green
    }
}

$totalTime = (Get-Date) - $startTime
Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  ALL 40 PHASES COMPLETE!" -ForegroundColor Green
Write-Host "  Total Time: $($totalTime.ToString('dd\.hh\:mm\:ss'))" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Green
