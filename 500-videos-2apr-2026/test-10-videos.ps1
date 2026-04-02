# ============================================================================
# TEST RUN - 10 Videos with GPU Acceleration
# ============================================================================
# Quick test: renders first 10 videos from body-parts category
# Uses GPU via --gl=angle for hardware acceleration
#
# Usage: cd C:\test\500-videos-2apr-2026\500-videos-2apr-2026
#        Set-ExecutionPolicy Bypass -Scope Process -Force
#        .\test-10-videos.ps1
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectDir

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  TEST RUN - 10 Videos | GPU Accelerated" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# ======================== STEP 1: NPM INSTALL ========================
Write-Host "  STEP 1: Checking dependencies..." -ForegroundColor Yellow
if (-not (Test-Path (Join-Path $ProjectDir "node_modules"))) {
    npm install
}
Write-Host "  Done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 2: GENERATE AUDIO ========================
Write-Host "  STEP 2: Generating Audio..." -ForegroundColor Yellow

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

$catPath = Join-Path $ProjectDir "body-parts\catalog.json"
$json = Get-Content $catPath -Raw | ConvertFrom-Json
$allVideos = if ($json -is [System.Array]) { $json } else { $json.videos }
$testVideos = $allVideos[0..9]

$audioDone = 0
foreach ($video in $testVideos) {
    $audioDone++
    $videoId = $video.id
    $audioDir = Join-Path (Join-Path $ProjectDir "public") "$videoId-audio"

    if (Test-Path $audioDir) {
        Write-Host "    [$audioDone/10] SKIP: $videoId (audio exists)" -ForegroundColor DarkYellow
        continue
    }

    Write-Host "    [$audioDone/10] Generating: $videoId" -ForegroundColor Cyan
    New-Item -ItemType Directory -Path $audioDir -Force | Out-Null

    $items = $video.items
    $ErrorActionPreference = "Continue"
    for ($i = 0; $i -lt $items.Count; $i++) {
        $item = $items[$i]
        $text = "$($item.letter) for $($item.word)"
        $outFile = Join-Path $audioDir "letter_$i.mp3"
        edge-tts --voice $Voice --rate="$Rate" --pitch="$Pitch" --text "$text" --write-media "$outFile" 2>&1 | Out-Null
    }

    $duration = 3 + $items.Count * 3 + 3
    $bgmFile = Join-Path $audioDir "bgm.mp3"
    $ffmpegCmd = "ffmpeg -y -f lavfi -i `"sine=frequency=523.25:duration=$duration`" -f lavfi -i `"sine=frequency=659.25:duration=$duration`" -f lavfi -i `"sine=frequency=783.99:duration=$duration`" -filter_complex `"[0]volume=0.08,aformat=channel_layouts=mono[c];[1]volume=0.06,aformat=channel_layouts=mono[e];[2]volume=0.04,aformat=channel_layouts=mono[g];[c][e][g]amix=inputs=3:duration=longest,lowpass=f=2000,volume=0.5[out]`" -map `"[out]`" `"$bgmFile`""
    cmd /c $ffmpegCmd 2>&1 | Out-Null
    $ErrorActionPreference = "Stop"

    Write-Host "      $($items.Count) audio files + BGM done" -ForegroundColor Gray
}

Write-Host "  Audio done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 3: REGISTER COMPOSITIONS ========================
Write-Host "  STEP 3: Registering Compositions..." -ForegroundColor Yellow
node (Join-Path $ProjectDir "body-parts\register-compositions.js")
Write-Host "  Done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 4: RENDER 10 VIDEOS ========================
Write-Host "  STEP 4: Rendering 10 Videos (GPU Accelerated)" -ForegroundColor Yellow
Write-Host ""

$outDir = Join-Path (Join-Path $ProjectDir "out") "body-parts"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$startTime = Get-Date
$rendered = 0
$skipped = 0
$failed = 0
$current = 0
$total = 10

foreach ($video in $testVideos) {
    $current++
    $videoId = $video.id
    $compId = ($videoId -split '[-_\s]+' | ForEach-Object {
        $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
    }) -join ''
    $outputFile = Join-Path $outDir "$videoId.mp4"

    if (Test-Path $outputFile) {
        $skipped++
        Write-Host "  [$current/$total] SKIP: $($video.title) (exists)" -ForegroundColor DarkYellow
        continue
    }

    $elapsed = (Get-Date) - $startTime
    Write-Host "  [$current/$total] $($video.title) [$($elapsed.ToString('hh\:mm\:ss'))]" -ForegroundColor Cyan

    $ErrorActionPreference = "Continue"
    npx remotion render $compId "$outputFile" --concurrency=100% --log=error --crf=18 --codec=h264 --gl=angle --enable-multiprocess-on-linux --gl=angle
    $ErrorActionPreference = "Stop"

    if ($LASTEXITCODE -eq 0) {
        $rendered++
        $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
        Write-Host "    Done! ($fileSize MB)" -ForegroundColor Green
    } else {
        $failed++
        Write-Host "    FAILED!" -ForegroundColor Red
    }
}

# ======================== SUMMARY ========================
$elapsed = (Get-Date) - $startTime

Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  TEST COMPLETE!" -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  Rendered:  $rendered videos" -ForegroundColor White
Write-Host "  Skipped:   $skipped videos" -ForegroundColor White
Write-Host "  Failed:    $failed videos" -ForegroundColor $(if ($failed -gt 0) { "Red" } else { "White" })
Write-Host "  Time:      $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "  Output:    $outDir" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Green
