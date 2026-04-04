# ============================================================================
# AUDIO ONLY - Phases 12-20 (pre-generate audio while phase 11 renders)
# ============================================================================
# Run this in parallel with phase 11 rendering to save time
# Skips any audio already generated
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = $PSScriptRoot

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  AUDIO PRE-GENERATION: Phases 12-20" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $ProjectDir

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

$allCatalogs = @(
    @{ Path = "winter-words\catalog.json"; Name = "Winter Words"; From = 0; To = 30 },
    @{ Path = "summer-words\catalog.json"; Name = "Summer Words"; From = 0; To = 30 },
    @{ Path = "halloween\catalog.json"; Name = "Halloween"; From = 0; To = 30 },
    @{ Path = "christmas\catalog.json"; Name = "Christmas"; From = 0; To = 30 },
    @{ Path = "garden-items\catalog.json"; Name = "Garden Items"; From = 0; To = 30 },
    @{ Path = "bath-time\catalog.json"; Name = "Bath Time"; From = 0; To = 30 },
    @{ Path = "breakfast-foods\catalog.json"; Name = "Breakfast Foods"; From = 0; To = 30 },
    @{ Path = "snacks\catalog.json"; Name = "Snacks"; From = 0; To = 30 },
    @{ Path = "drinks\catalog.json"; Name = "Drinks"; From = 0; To = 30 },
    @{ Path = "candy\catalog.json"; Name = "Candy"; From = 0; To = 30 },
    @{ Path = "zoo-animals\catalog.json"; Name = "Zoo Animals"; From = 0; To = 30 },
    @{ Path = "underwater\catalog.json"; Name = "Underwater"; From = 0; To = 30 },
    @{ Path = "rainforest\catalog.json"; Name = "Rainforest"; From = 0; To = 30 },
    @{ Path = "transportation\catalog.json"; Name = "Transportation"; From = 0; To = 30 },
    @{ Path = "festivals\catalog.json"; Name = "Festivals"; From = 0; To = 30 },
    @{ Path = "sports-equipment\catalog.json"; Name = "Sports Equipment"; From = 0; To = 30 }
)

$startTime = Get-Date
$audioTotal = 0
$audioDone = 0
$skipped = 0

foreach ($cat in $allCatalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
    $subset = $videos[$cat.From..($cat.To - 1)]
    $audioTotal += $subset.Count
}

Write-Host "  Total: $audioTotal videos to process" -ForegroundColor White
Write-Host ""

foreach ($cat in $allCatalogs) {
    $catPath = Join-Path $ProjectDir $cat.Path
    $json = Get-Content $catPath -Raw | ConvertFrom-Json
    $videos = if ($json -is [System.Array]) { $json } else { $json.videos }
    $subset = $videos[$cat.From..($cat.To - 1)]

    Write-Host "  --- $($cat.Name) ($($subset.Count) videos) ---" -ForegroundColor Magenta

    foreach ($video in $subset) {
        $audioDone++
        $videoId = $video.id
        $audioDir = Join-Path (Join-Path $ProjectDir "public") "$videoId-audio"

        if (Test-Path $audioDir) {
            $skipped++
            Write-Host "  [$audioDone/$audioTotal] SKIP: $videoId" -ForegroundColor DarkYellow
            continue
        }

        $elapsed = (Get-Date) - $startTime
        Write-Host "  [$audioDone/$audioTotal] Audio: $videoId [$($elapsed.ToString('hh\:mm\:ss'))]" -ForegroundColor Cyan
        New-Item -ItemType Directory -Path $audioDir -Force | Out-Null

        $items = $video.items
        if (-not $items) { $items = $video.letters }

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
}

$totalTime = (Get-Date) - $startTime
Write-Host ""
Write-Host "================================================================" -ForegroundColor Green
Write-Host "  AUDIO COMPLETE! Phases 12-20" -ForegroundColor Green
Write-Host "  Generated: $($audioDone - $skipped) | Skipped: $skipped" -ForegroundColor White
Write-Host "  Time: $($totalTime.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Green
