# ============================================================================
# TEST RUN - 10 Videos with 3x GPU
# ============================================================================
# Quick test: renders first 10 videos from body-parts category
# Uses all 3 GPUs in parallel (3-4 videos per GPU)
#
# Usage: cd C:\test\500-videos-2apr-2026 && .\test-10-videos.ps1
# ============================================================================

$ErrorActionPreference = "Continue"
$ProjectDir = $PSScriptRoot
Set-Location $ProjectDir

$Workers = 3
$ThreadsPerWorker = 5
$CRF = 18

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  TEST RUN - 10 Videos | 3x RTX 4090" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# ======================== STEP 1: GENERATE AUDIO ========================
Write-Host "  STEP 1: Generating Audio..." -ForegroundColor Yellow

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

$catPath = Join-Path $ProjectDir "body-parts\catalog.json"
$json = Get-Content $catPath -Raw | ConvertFrom-Json
$videos = if ($json -is [System.Array]) { $json } else { $json.videos }
$testVideos = $videos[0..9]  # First 10 videos

foreach ($video in $testVideos) {
    $videoId = $video.id
    $audioDir = Join-Path (Join-Path $ProjectDir "public") "$videoId-audio"

    if (Test-Path $audioDir) {
        Write-Host "    SKIP: $videoId (audio exists)" -ForegroundColor DarkYellow
        continue
    }

    Write-Host "    Generating: $videoId" -ForegroundColor Cyan
    New-Item -ItemType Directory -Path $audioDir -Force | Out-Null

    $items = $video.items
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
}

Write-Host "  Audio done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 2: REGISTER COMPOSITIONS ========================
Write-Host "  STEP 2: Registering Compositions..." -ForegroundColor Yellow
node (Join-Path $ProjectDir "body-parts\register-compositions.js")
Write-Host "  Done!" -ForegroundColor Green
Write-Host ""

# ======================== STEP 3: RENDER 10 VIDEOS (3 GPUs) ========================
Write-Host "  STEP 3: Rendering 10 Videos with 3 GPUs..." -ForegroundColor Yellow
Write-Host ""

$outDir = Join-Path (Join-Path $ProjectDir "out") "body-parts"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

# Build render queue
$renderQueue = @()
foreach ($video in $testVideos) {
    $videoId = $video.id
    $compId = ($videoId -split '[-_\s]+' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() }) -join ''
    $outputFile = Join-Path $outDir "$videoId.mp4"

    if (Test-Path $outputFile) {
        Write-Host "    SKIP: $($video.title) (exists)" -ForegroundColor DarkYellow
        continue
    }

    $renderQueue += @{ CompId = $compId; OutFile = $outputFile; Title = $video.title }
}

if ($renderQueue.Count -eq 0) {
    Write-Host "  All 10 videos already rendered!" -ForegroundColor Green
} else {
    Write-Host "  Distributing $($renderQueue.Count) videos across $Workers GPUs:" -ForegroundColor White

    # Split into 3 worker queues
    $queues = @( @(), @(), @() )
    for ($i = 0; $i -lt $renderQueue.Count; $i++) {
        $queues[$i % $Workers] += $renderQueue[$i]
    }

    for ($w = 0; $w -lt $Workers; $w++) {
        Write-Host "    GPU $w: $($queues[$w].Count) videos (Port $($3100 + $w))" -ForegroundColor Cyan
    }
    Write-Host ""

    $startTime = Get-Date

    # Launch 3 parallel jobs
    $jobs = @()
    for ($w = 0; $w -lt $Workers; $w++) {
        if ($queues[$w].Count -eq 0) { continue }

        $workerQueue = $queues[$w]
        $workerId = $w
        $threads = $ThreadsPerWorker
        $crf = $CRF
        $projDir = $ProjectDir

        $job = Start-Job -ScriptBlock {
            param($WorkerId, $Queue, $Threads, $Crf, $ProjDir)
            Set-Location $ProjDir
            $env:CUDA_VISIBLE_DEVICES = "$WorkerId"
            $rendered = 0; $failed = 0
            $port = 3100 + $WorkerId

            foreach ($item in $Queue) {
                $r = npx remotion render $item.CompId $item.OutFile --concurrency=$Threads --log=error --crf=$Crf --codec=h264 --gl=angle --port=$port 2>&1
                if ($LASTEXITCODE -eq 0) { $rendered++ } else { $failed++ }
            }
            return @{ W = $WorkerId; R = $rendered; F = $failed }
        } -ArgumentList $workerId, $workerQueue, $threads, $crf, $projDir

        $jobs += $job
        Write-Host "    Started GPU Worker $w" -ForegroundColor Green
    }

    # Monitor
    Write-Host ""
    Write-Host "  All workers running! Waiting..." -ForegroundColor Yellow
    Write-Host "  Open Task Manager -> Performance tab to see GPU usage" -ForegroundColor DarkGray
    Write-Host ""

    while (($jobs | Where-Object { $_.State -eq "Running" }).Count -gt 0) {
        Start-Sleep -Seconds 10
        $elapsed = (Get-Date) - $startTime
        $doneFiles = (Get-ChildItem -Path $outDir -Filter "*.mp4" -ErrorAction SilentlyContinue).Count
        $running = ($jobs | Where-Object { $_.State -eq "Running" }).Count
        Write-Host "  [$($elapsed.ToString('hh\:mm\:ss'))] $doneFiles/$($renderQueue.Count) done | $running GPUs active" -ForegroundColor White
    }

    # Results
    $totalR = 0; $totalF = 0
    foreach ($job in $jobs) {
        $result = Receive-Job -Job $job
        if ($result) { $totalR += $result.R; $totalF += $result.F }
        Remove-Job -Job $job -Force
    }

    $elapsed = (Get-Date) - $startTime
    Write-Host ""
    Write-Host "================================================================" -ForegroundColor Green
    Write-Host "  TEST COMPLETE!" -ForegroundColor Green
    Write-Host "================================================================" -ForegroundColor Green
    Write-Host "  Rendered:  $totalR videos" -ForegroundColor White
    Write-Host "  Failed:    $totalF videos" -ForegroundColor White
    Write-Host "  Time:      $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
    if ($totalR -gt 0) {
        Write-Host "  Avg:       $([math]::Round($elapsed.TotalMinutes / $totalR, 1)) min/video" -ForegroundColor White
    }
    Write-Host "  Output:    $outDir" -ForegroundColor White
    Write-Host "================================================================" -ForegroundColor Green
}

# ======================== SERVE FOR DOWNLOAD ========================
Write-Host ""
Write-Host "  To preview videos, run in another PowerShell:" -ForegroundColor Yellow
Write-Host "    cd $outDir && python -m http.server 8080" -ForegroundColor White
Write-Host "  Then open: http://YOUR_IP:8080" -ForegroundColor White
Write-Host ""
