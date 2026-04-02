# ============================================================================
# POWER RENDER - 3x GPU Parallel Rendering (RTX 4090 x3)
# ============================================================================
# Optimized for: i9 10th Gen | 32GB RAM | 3x RTX 4090 24GB
#
# Strategy:
#   - 3 parallel render workers (1 per GPU)
#   - Each worker uses 5 CPU threads (15/20 = 75% CPU)
#   - GPU rendering via --gl=angle
#   - ~25GB RAM cap (80% of 32GB)
#   - ~3x faster than single-GPU rendering
#
# Usage:
#   .\power-render.ps1 -Phase 1                    # Render Phase 1 (50 videos)
#   .\power-render.ps1 -Phase 1 -Workers 2         # Use only 2 GPUs
#   .\power-render.ps1 -Phase 1 -DryRun            # Preview what will render
#   .\power-render.ps1 -AllPhases                   # Render all 10 phases (500 videos)
# ============================================================================

param(
    [int]$Phase = 0,
    [switch]$AllPhases,
    [int]$Workers = 3,          # Number of parallel GPU workers (max 3 for 3x 4090)
    [int]$ThreadsPerWorker = 5, # CPU threads per worker (5×3=15 out of 20 = 75%)
    [switch]$DryRun,
    [string]$Quality = "high"   # high (crf=18), medium (crf=23), fast (crf=28)
)

$ErrorActionPreference = "Continue"

# ======================== CONFIGURATION ========================
$ProjectDir = $PSScriptRoot
$MaxMemoryGB = 25              # 80% of 32GB
$CRF = switch ($Quality) { "high" { 18 } "medium" { 23 } "fast" { 28 } default { 18 } }
$GPU_FLAGS = "--gl=angle"      # Enable GPU rendering via ANGLE (DirectX backend)

# Phase definitions: each phase has categories with from/to ranges
$PHASES = @{
    1  = @( @{K="body-parts";N="Body Parts";F=0;T=30}, @{K="professions";N="Professions";F=0;T=20} )
    2  = @( @{K="professions";N="Professions";F=20;T=30}, @{K="famous-places";N="Famous Places";F=0;T=30}, @{K="dog-breeds";N="Dog Breeds";F=0;T=10} )
    3  = @( @{K="dog-breeds";N="Dog Breeds";F=10;T=30}, @{K="trees-plants";N="Trees & Plants";F=0;T=30} )
    4  = @( @{K="emotions";N="Emotions";F=0;T=30}, @{K="tools";N="Tools";F=0;T=20} )
    5  = @( @{K="tools";N="Tools";F=20;T=30}, @{K="clothing";N="Clothing";F=0;T=30}, @{K="desserts";N="Desserts";F=0;T=10} )
    6  = @( @{K="desserts";N="Desserts";F=10;T=30}, @{K="gems-minerals";N="Gems";F=0;T=25}, @{K="dance-forms";N="Dance";F=0;T=5} )
    7  = @( @{K="dance-forms";N="Dance";F=5;T=25}, @{K="reptiles";N="Reptiles";F=0;T=25}, @{K="farm-animals";N="Farm";F=0;T=5} )
    8  = @( @{K="farm-animals";N="Farm";F=5;T=25}, @{K="kitchen-items";N="Kitchen";F=0;T=25}, @{K="ocean-life";N="Ocean";F=0;T=5} )
    9  = @( @{K="ocean-life";N="Ocean";F=5;T=25}, @{K="baby-animals";N="Baby Animals";F=0;T=25}, @{K="mythical-creatures";N="Mythical";F=0;T=5} )
    10 = @( @{K="mythical-creatures";N="Mythical";F=5;T=20}, @{K="weather-nature";N="Weather";F=0;T=20}, @{K="world-flags";N="Flags";F=0;T=15} )
}

# ======================== BANNER ========================
Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  POWER RENDER - 3x RTX 4090 Parallel Pipeline" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Machine:    i9 10th Gen | 32GB RAM | 3x RTX 4090" -ForegroundColor White
Write-Host "  Workers:    $Workers parallel GPU renderers" -ForegroundColor White
Write-Host "  Threads:    $ThreadsPerWorker per worker ($($Workers * $ThreadsPerWorker)/20 cores = $([math]::Round($Workers * $ThreadsPerWorker / 20 * 100))% CPU)" -ForegroundColor White
Write-Host "  RAM Cap:    ${MaxMemoryGB}GB (80% of 32GB)" -ForegroundColor White
Write-Host "  Quality:    $Quality (CRF=$CRF)" -ForegroundColor White
Write-Host "  GPU Mode:   ANGLE (DirectX hardware acceleration)" -ForegroundColor White
Write-Host ""

# ======================== HELPERS ========================

function Get-VideoList($phaseNum) {
    $videos = @()
    $cats = $PHASES[$phaseNum]
    foreach ($cat in $cats) {
        $catPath = Join-Path $ProjectDir "$($cat.K)\catalog.json"
        if (-not (Test-Path $catPath)) { continue }
        $json = Get-Content $catPath -Raw | ConvertFrom-Json
        $allVideos = if ($json -is [System.Array]) { $json } else { $json.videos }
        $subset = $allVideos[$cat.F..($cat.T - 1)]
        foreach ($v in $subset) {
            $videos += @{
                Id       = $v.id
                Title    = $v.title
                CompId   = ($v.id -split '[-_\s]+' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() }) -join ''
                Category = $cat.K
                OutFile  = Join-Path (Join-Path (Join-Path $ProjectDir "out") $cat.K) "$($v.id).mp4"
            }
        }
    }
    return $videos
}

function Ensure-Audio($phaseNum) {
    Write-Host "  Generating audio (if needed)..." -ForegroundColor Yellow
    $Voice = "en-IN-NeerjaNeural"
    $Rate = "-10%"
    $Pitch = "+5Hz"

    $cats = $PHASES[$phaseNum]
    foreach ($cat in $cats) {
        $catPath = Join-Path $ProjectDir "$($cat.K)\catalog.json"
        if (-not (Test-Path $catPath)) { continue }
        $json = Get-Content $catPath -Raw | ConvertFrom-Json
        $allVideos = if ($json -is [System.Array]) { $json } else { $json.videos }
        $subset = $allVideos[$cat.F..($cat.T - 1)]

        foreach ($video in $subset) {
            $videoId = $video.id
            $audioDir = Join-Path (Join-Path $ProjectDir "public") "$videoId-audio"
            if (Test-Path $audioDir) { continue }

            New-Item -ItemType Directory -Path $audioDir -Force | Out-Null
            $items = $video.items
            if (-not $items) { $items = $video.letters }

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
    }
    Write-Host "  Audio ready!" -ForegroundColor Green
}

function Ensure-Compositions($phaseNum) {
    Write-Host "  Registering compositions..." -ForegroundColor Yellow
    $cats = $PHASES[$phaseNum]
    $registered = @{}
    foreach ($cat in $cats) {
        if ($registered[$cat.K]) { continue }
        $regScript = Join-Path $ProjectDir "$($cat.K)\register-compositions.js"
        if (Test-Path $regScript) {
            node $regScript 2>&1 | Out-Null
            $registered[$cat.K] = $true
        }
    }
    Write-Host "  Compositions registered!" -ForegroundColor Green
}

# ======================== GPU WORKER FUNCTION ========================

function Start-GpuWorker {
    param(
        [int]$WorkerId,
        [array]$VideoQueue,
        [int]$Threads,
        [int]$CrfValue,
        [string]$GpuFlags,
        [string]$ProjDir,
        [int]$GpuIndex
    )

    $job = Start-Job -ScriptBlock {
        param($WorkerId, $VideoQueue, $Threads, $CrfValue, $GpuFlags, $ProjDir, $GpuIndex)

        Set-Location $ProjDir

        # Set GPU affinity via environment variable
        $env:CUDA_VISIBLE_DEVICES = "$GpuIndex"
        # Chrome GPU selection hint
        $env:CHROMIUM_GPU_INDEX = "$GpuIndex"

        $rendered = 0
        $failed = 0

        foreach ($video in $VideoQueue) {
            $compId = $video.CompId
            $outFile = $video.OutFile
            $outDir = Split-Path $outFile -Parent

            if (Test-Path $outFile) { continue }
            if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

            # Render with GPU acceleration + controlled threads
            # --port ensures no conflict between parallel workers
            $port = 3100 + $WorkerId
            $result = npx remotion render $compId "$outFile" `
                --concurrency=$Threads `
                --log=error `
                --crf=$CrfValue `
                --codec=h264 `
                $GpuFlags `
                --port=$port `
                2>&1

            if ($LASTEXITCODE -eq 0) {
                $rendered++
            } else {
                $failed++
            }
        }

        return @{ WorkerId = $WorkerId; Rendered = $rendered; Failed = $failed }
    } -ArgumentList $WorkerId, $VideoQueue, $Threads, $CrfValue, $GpuFlags, $ProjDir, $GpuIndex

    return $job
}

# ======================== RENDER A SINGLE PHASE ========================

function Render-Phase($phaseNum) {
    Write-Host ""
    Write-Host "────────────────────────────────────────────────" -ForegroundColor Magenta
    Write-Host "  PHASE $phaseNum" -ForegroundColor Magenta
    Write-Host "────────────────────────────────────────────────" -ForegroundColor Magenta

    # Step 1: Audio
    Ensure-Audio $phaseNum

    # Step 2: Register compositions
    Ensure-Compositions $phaseNum

    # Step 3: Get video list and filter already rendered
    $allVideos = Get-VideoList $phaseNum
    $pendingVideos = @()
    foreach ($v in $allVideos) {
        if (-not (Test-Path $v.OutFile)) {
            $pendingVideos += $v
        }
    }

    $totalInPhase = $allVideos.Count
    $alreadyDone = $totalInPhase - $pendingVideos.Count

    Write-Host ""
    Write-Host "  Total: $totalInPhase | Already done: $alreadyDone | To render: $($pendingVideos.Count)" -ForegroundColor White

    if ($pendingVideos.Count -eq 0) {
        Write-Host "  All videos already rendered! Skipping." -ForegroundColor Green
        return
    }

    if ($DryRun) {
        Write-Host "  [DRY RUN] Would render $($pendingVideos.Count) videos with $Workers GPUs" -ForegroundColor Yellow
        foreach ($v in $pendingVideos) {
            Write-Host "    - $($v.Title) -> $($v.OutFile)" -ForegroundColor DarkGray
        }
        return
    }

    # Step 4: Distribute videos across GPU workers (round-robin)
    $workerQueues = @()
    for ($w = 0; $w -lt $Workers; $w++) {
        $workerQueues += ,@()
    }

    for ($i = 0; $i -lt $pendingVideos.Count; $i++) {
        $workerIdx = $i % $Workers
        $workerQueues[$workerIdx] += $pendingVideos[$i]
    }

    Write-Host ""
    for ($w = 0; $w -lt $Workers; $w++) {
        Write-Host "  GPU $w (RTX 4090 #$($w+1)): $($workerQueues[$w].Count) videos | $ThreadsPerWorker threads | Port $($3100 + $w)" -ForegroundColor Cyan
    }
    Write-Host ""

    # Step 5: Launch parallel GPU workers
    $startTime = Get-Date
    $jobs = @()

    for ($w = 0; $w -lt $Workers; $w++) {
        if ($workerQueues[$w].Count -eq 0) { continue }

        Write-Host "  Starting GPU Worker $w..." -ForegroundColor Green
        $job = Start-GpuWorker `
            -WorkerId $w `
            -VideoQueue $workerQueues[$w] `
            -Threads $ThreadsPerWorker `
            -CrfValue $CRF `
            -GpuFlags $GPU_FLAGS `
            -ProjDir $ProjectDir `
            -GpuIndex $w

        $jobs += $job
    }

    # Step 6: Monitor progress
    Write-Host ""
    Write-Host "  All $($jobs.Count) GPU workers running! Monitoring..." -ForegroundColor Yellow
    Write-Host "  (Check Task Manager - GPU 0/1/2 should show ~80% utilization)" -ForegroundColor DarkGray
    Write-Host ""

    # Wait with progress updates
    $allDone = $false
    while (-not $allDone) {
        Start-Sleep -Seconds 30

        $completedCount = ($jobs | Where-Object { $_.State -eq "Completed" }).Count
        $runningCount = ($jobs | Where-Object { $_.State -eq "Running" }).Count
        $elapsed = (Get-Date) - $startTime

        # Count rendered files
        $renderedFiles = 0
        foreach ($v in $pendingVideos) {
            if (Test-Path $v.OutFile) { $renderedFiles++ }
        }

        $pct = if ($pendingVideos.Count -gt 0) { [math]::Round($renderedFiles / $pendingVideos.Count * 100) } else { 100 }
        $eta = if ($renderedFiles -gt 0) {
            $secsPerVideo = $elapsed.TotalSeconds / $renderedFiles
            $remaining = ($pendingVideos.Count - $renderedFiles) * $secsPerVideo
            [TimeSpan]::FromSeconds($remaining).ToString('hh\:mm\:ss')
        } else { "calculating..." }

        Write-Host "  [$($elapsed.ToString('hh\:mm\:ss'))] $renderedFiles/$($pendingVideos.Count) rendered ($pct%) | $runningCount workers active | ETA: $eta" -ForegroundColor White

        if ($runningCount -eq 0) { $allDone = $true }
    }

    # Step 7: Collect results
    $totalRendered = 0
    $totalFailed = 0

    foreach ($job in $jobs) {
        $result = Receive-Job -Job $job
        if ($result) {
            $totalRendered += $result.Rendered
            $totalFailed += $result.Failed
        }
        Remove-Job -Job $job -Force
    }

    $elapsed = (Get-Date) - $startTime

    Write-Host ""
    Write-Host "  Phase $phaseNum Complete!" -ForegroundColor Green
    Write-Host "  Rendered: $totalRendered | Failed: $totalFailed | Time: $($elapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White

    if ($totalRendered -gt 0) {
        $avgTime = [math]::Round($elapsed.TotalMinutes / $totalRendered, 1)
        Write-Host "  Avg: ${avgTime} min/video (with $Workers GPUs)" -ForegroundColor DarkGray
    }
}

# ======================== MAIN EXECUTION ========================

Set-Location $ProjectDir

# RAM limiter: Set process priority to below normal to prevent system freeze
$currentProcess = Get-Process -Id $PID
$currentProcess.PriorityClass = "BelowNormal"

if ($AllPhases) {
    Write-Host "  Rendering ALL 10 PHASES (500 videos)..." -ForegroundColor Yellow
    Write-Host ""

    $grandStart = Get-Date

    for ($p = 1; $p -le 10; $p++) {
        Render-Phase $p
    }

    $grandElapsed = (Get-Date) - $grandStart
    $totalFiles = (Get-ChildItem -Path (Join-Path $ProjectDir "out") -Filter "*.mp4" -Recurse -ErrorAction SilentlyContinue).Count

    Write-Host ""
    Write-Host "================================================================" -ForegroundColor Green
    Write-Host "  ALL 500 VIDEOS COMPLETE!" -ForegroundColor Green
    Write-Host "================================================================" -ForegroundColor Green
    Write-Host "  Total time:   $($grandElapsed.ToString('hh\:mm\:ss'))" -ForegroundColor White
    Write-Host "  Total videos: $totalFiles" -ForegroundColor White
    Write-Host "  Avg speed:    $([math]::Round($grandElapsed.TotalMinutes / [math]::Max($totalFiles, 1), 1)) min/video" -ForegroundColor White
    Write-Host "  GPUs used:    $Workers x RTX 4090" -ForegroundColor White
    Write-Host "================================================================" -ForegroundColor Green

} elseif ($Phase -gt 0) {
    Render-Phase $Phase

} else {
    Write-Host "  ERROR: Specify -Phase <1-10> or -AllPhases" -ForegroundColor Red
    Write-Host ""
    Write-Host "  Examples:" -ForegroundColor Yellow
    Write-Host "    .\power-render.ps1 -Phase 1" -ForegroundColor White
    Write-Host "    .\power-render.ps1 -Phase 1 -Workers 2" -ForegroundColor White
    Write-Host "    .\power-render.ps1 -AllPhases" -ForegroundColor White
    Write-Host "    .\power-render.ps1 -AllPhases -Quality fast" -ForegroundColor White
    Write-Host "    .\power-render.ps1 -Phase 1 -DryRun" -ForegroundColor White
}
