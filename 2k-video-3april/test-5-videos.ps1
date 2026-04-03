# ============================================================================
# TEST: Render 5 Videos (quick test)
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = $PSScriptRoot

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  TEST: 5 Videos Quick Test" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $ProjectDir

# ======================== STEP 0: FIX ENTRY POINT ========================
Write-Host "  STEP 0: Verifying Entry Point" -ForegroundColor Yellow
node (Join-Path $ProjectDir "fix-entry-point.js")
Write-Host ""

# ======================== STEP 1: GENERATE AUDIO (5 videos) ========================
Write-Host "  STEP 1: Generating Audio for 5 test videos" -ForegroundColor Yellow
Write-Host ""

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

$catPath = Join-Path $ProjectDir "toys\catalog.json"
$json = Get-Content $catPath -Raw | ConvertFrom-Json
$videos = if ($json -is [System.Array]) { $json } else { $json.videos }
$testVideos = $videos[0..4]

foreach ($video in $testVideos) {
    $videoId = $video.id
    $audioDir = Join-Path (Join-Path $ProjectDir "public") "$videoId-audio"

    if (Test-Path $audioDir) {
        Write-Host "  SKIP audio: $videoId" -ForegroundColor DarkYellow
        continue
    }

    Write-Host "  Audio: $videoId" -ForegroundColor Cyan
    New-Item -ItemType Directory -Path $audioDir -Force | Out-Null

    $items = $video.items

    for ($i = 0; $i -lt $items.Count; $i++) {
        $item = $items[$i]
        $text = "$($item.letter) for $($item.word)"
        $outFile = Join-Path $audioDir "letter_$i.mp3"
        $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
        edge-tts --voice $Voice --rate="$Rate" --pitch="$Pitch" --text "$text" --write-media "$outFile" 2>&1 | Out-Null
        $ErrorActionPreference = $prevEAP
    }

    $duration = $video.targetDuration
    $bgmFile = Join-Path $audioDir "bgm.mp3"
    $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
    $ffmpegCmd = "ffmpeg -y -f lavfi -i `"sine=frequency=523.25:duration=$duration`" -f lavfi -i `"sine=frequency=659.25:duration=$duration`" -f lavfi -i `"sine=frequency=783.99:duration=$duration`" -filter_complex `"[0]volume=0.08,aformat=channel_layouts=mono[c];[1]volume=0.06,aformat=channel_layouts=mono[e];[2]volume=0.04,aformat=channel_layouts=mono[g];[c][e][g]amix=inputs=3:duration=longest,lowpass=f=2000,volume=0.5[out]`" -map `"[out]`" `"$bgmFile`""
    cmd /c $ffmpegCmd 2>&1 | Out-Null
    $ErrorActionPreference = $prevEAP
}

Write-Host "  Audio done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 2: REGISTER COMPOSITIONS ========================
Write-Host "  STEP 2: Registering Compositions" -ForegroundColor Yellow
node (Join-Path $ProjectDir "toys\register-compositions.js")
Write-Host "  Done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 3: RENDER 5 VIDEOS ========================
Write-Host "  STEP 3: Rendering 5 Test Videos" -ForegroundColor Yellow
Write-Host ""

$startTime = Get-Date
$rendered = 0
$failed = 0

$outDir = Join-Path (Join-Path $ProjectDir "out") "toys"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

foreach ($video in $testVideos) {
    $videoId = $video.id
    $compId = ($videoId -split '[-_\s]+' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() }) -join ''
    $outputFile = Join-Path $outDir "$videoId.mp4"

    $elapsed = (Get-Date) - $startTime
    $duration = $video.targetDuration
    $mins = [math]::Floor($duration / 60)
    $secs = $duration % 60
    Write-Host "  [$($rendered+$failed+1)/5] $($video.title) (${mins}:$($secs.ToString('00'))) [$($elapsed.ToString('hh\:mm\:ss'))]" -ForegroundColor Cyan

    $prevEAP = $ErrorActionPreference; $ErrorActionPreference = "Continue"
    npx remotion render $compId "$outputFile" --concurrency=100% --log=error --crf=18 --codec=h264 --gl=angle
    $ErrorActionPreference = $prevEAP

    if ($LASTEXITCODE -eq 0) {
        $rendered++
        $fileSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 1)
        Write-Host "    Done! (${fileSize} MB)" -ForegroundColor Green
    } else {
        $failed++
        Write-Host "    FAILED!" -ForegroundColor Red
    }
}

$elapsed = (Get-Date) - $startTime
Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  TEST COMPLETE!" -ForegroundColor Green
Write-Host "  Rendered: $rendered | Failed: $failed" -ForegroundColor White
Write-Host "  Time: $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "  Output: $outDir" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Green
