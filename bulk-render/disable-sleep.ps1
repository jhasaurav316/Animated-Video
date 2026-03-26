# ============================================================================
# Disable Sleep & Hibernation on Windows VM
# ============================================================================
# Run this ONCE on the VM before starting a long render.
# Prevents Windows from sleeping during 8-9 hour render sessions.
#
# Usage (Run as Administrator in PowerShell):
#   .\bulk-render\disable-sleep.ps1
# ============================================================================

Write-Host ""
Write-Host "Disabling sleep & hibernation..." -ForegroundColor Yellow

# Disable hibernation
powercfg /hibernate off

# Set sleep timeout to NEVER (0 = never) for both AC and battery
powercfg /change standby-timeout-ac 0
powercfg /change standby-timeout-dc 0

# Set display timeout to NEVER
powercfg /change monitor-timeout-ac 0
powercfg /change monitor-timeout-dc 0

# Set hard disk timeout to NEVER
powercfg /change disk-timeout-ac 0
powercfg /change disk-timeout-dc 0

# Set high performance power plan
powercfg /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c

Write-Host ""
Write-Host "Done! VM will stay awake during renders." -ForegroundColor Green
Write-Host ""
Write-Host "Current power settings:" -ForegroundColor Cyan
powercfg /query SCHEME_CURRENT SUB_SLEEP
