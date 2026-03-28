# Hindi Kids Learning - Render Pipeline
# Usage: powershell -ExecutionPolicy Bypass -File .\hindi-kids\run-pipeline.ps1

$ErrorActionPreference = "Continue"
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

$ScriptDir = Join-Path $ProjectRoot "hindi-kids"
$OutputDir = Join-Path $ProjectRoot "out\hindi-kids"
$LogFile = Join-Path $ProjectRoot "hindi-kids-render-log.txt"
$PYTHON = "python"
$CRF = 16

Write-Host ""
Write-Host "===========================================================" -ForegroundColor Cyan
Write-Host "  HINDI KIDS LEARNING - RENDER PIPELINE" -ForegroundColor Cyan
Write-Host "===========================================================" -ForegroundColor Cyan

$PipelineStart = Get-Date

# Step 1: Register
Write-Host "  Registering compositions..." -ForegroundColor Yellow
node (Join-Path $ScriptDir "register-compositions.js")

# Step 2: Audio
Write-Host "  Generating Hindi audio..." -ForegroundColor Yellow
node (Join-Path $ScriptDir "generate-audio.js")

# Step 3: Render
Write-Host "  Rendering videos..." -ForegroundColor Yellow

function ConvertTo-PascalCase {
    param([string]$str)
    ($str -split '[-_\s]+' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() }) -join ''
}

$CatalogJson = Get-Content (Join-Path $ScriptDir "catalog.json") -Raw | ConvertFrom-Json
if ($CatalogJson -is [Array]) { $Videos = $CatalogJson } else { $Videos = $CatalogJson.videos }
$Total = $Videos.Count

if (-not (Test-Path $OutputDir)) { New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null }

$Rendered = 0; $Skipped = 0; $Failed = 0

for ($i = 0; $i -lt $Total; $i++) {
    $Video = $Videos[$i]
    [int]$num = $i + 1
    $VideoId = $Video.id
    $Title = $Video.title
    $Category = $Video.category
    $CompId = "HindiKids" + (ConvertTo-PascalCase $VideoId)

    $catDir = Join-Path $OutputDir $Category
    if (-not (Test-Path $catDir)) { New-Item -ItemType Directory -Path $catDir -Force | Out-Null }

    $outFile = Join-Path $catDir ($num.ToString("D3") + "-" + $VideoId + ".mp4")

    if (Test-Path $outFile) {
        Write-Host ("  [" + $num + "/" + $Total + "] SKIP " + $Title) -ForegroundColor DarkGray
        $Skipped++
        continue
    }

    Write-Host ("  [" + $num + "/" + $Total + "] " + $Title + " rendering...") -NoNewline -ForegroundColor Cyan

    $cmd = "npx remotion render src/index.ts " + $CompId + " `"" + $outFile + "`" --concurrency=100% --log=error --crf=" + $CRF + " --codec=h264 --pixel-format=yuv420p"
    $output = Invoke-Expression $cmd 2>&1
    $exitCode = $LASTEXITCODE

    if ($exitCode -eq 0 -and (Test-Path $outFile)) {
        $mb = [Math]::Round((Get-Item $outFile).Length / 1048576, 1)
        Write-Host (" DONE (" + $mb + "MB)") -ForegroundColor Green
        $Rendered++
    } else {
        Write-Host " FAILED" -ForegroundColor Red
        $Failed++
    }
}

$elapsed = (Get-Date) - $PipelineStart
Write-Host ""
Write-Host "===========================================================" -ForegroundColor Green
Write-Host ("  Done! Rendered: " + $Rendered + " | Skipped: " + $Skipped + " | Failed: " + $Failed) -ForegroundColor Green
Write-Host ("  Time: " + $elapsed.Hours + "h " + $elapsed.Minutes + "m " + $elapsed.Seconds + "s") -ForegroundColor Yellow
Write-Host ("  Output: " + $OutputDir) -ForegroundColor White
Write-Host ""
