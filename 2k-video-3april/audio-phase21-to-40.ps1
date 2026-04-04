# ============================================================================
# AUDIO ONLY - Phases 21-40 (pre-generate audio for faster video rendering)
# ============================================================================

$ErrorActionPreference = "Stop"
$ProjectDir = $PSScriptRoot

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "  AUDIO PRE-GENERATION: Phases 21-40 (1020 Videos)" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $ProjectDir

$Voice = "en-IN-NeerjaNeural"
$Rate = "-10%"
$Pitch = "+5Hz"

$allCatalogs = @(
    @{ Path = "baby-words\catalog.json"; Name = "Baby Words"; From = 0; To = 30 },
    @{ Path = "family-members\catalog.json"; Name = "Family Members"; From = 0; To = 30 },
    @{ Path = "weather\catalog.json"; Name = "Weather"; From = 0; To = 30 },
    @{ Path = "planets\catalog.json"; Name = "Planets"; From = 0; To = 30 },
    @{ Path = "oceans\catalog.json"; Name = "Oceans"; From = 0; To = 30 },
    @{ Path = "mountains\catalog.json"; Name = "Mountains"; From = 0; To = 30 },
    @{ Path = "rivers\catalog.json"; Name = "Rivers"; From = 0; To = 30 },
    @{ Path = "languages\catalog.json"; Name = "Languages"; From = 0; To = 30 },
    @{ Path = "continents\catalog.json"; Name = "Continents"; From = 0; To = 30 },
    @{ Path = "birds-of-prey\catalog.json"; Name = "Birds of Prey"; From = 0; To = 30 },
    @{ Path = "tropical-fish\catalog.json"; Name = "Tropical Fish"; From = 0; To = 30 },
    @{ Path = "farm-crops\catalog.json"; Name = "Farm Crops"; From = 0; To = 30 },
    @{ Path = "spices\catalog.json"; Name = "Spices"; From = 0; To = 30 },
    @{ Path = "breads\catalog.json"; Name = "Breads"; From = 0; To = 30 },
    @{ Path = "pasta\catalog.json"; Name = "Pasta"; From = 0; To = 30 },
    @{ Path = "cheese\catalog.json"; Name = "Cheese"; From = 0; To = 30 },
    @{ Path = "dessert-types\catalog.json"; Name = "Dessert Types"; From = 0; To = 30 },
    @{ Path = "dance-styles\catalog.json"; Name = "Dance Styles"; From = 0; To = 30 },
    @{ Path = "martial-arts\catalog.json"; Name = "Martial Arts"; From = 0; To = 30 },
    @{ Path = "board-games\catalog.json"; Name = "Board Games"; From = 0; To = 30 },
    @{ Path = "video-games\catalog.json"; Name = "Video Games"; From = 0; To = 30 },
    @{ Path = "fairy-creatures\catalog.json"; Name = "Fairy Creatures"; From = 0; To = 30 },
    @{ Path = "robots\catalog.json"; Name = "Robots"; From = 0; To = 30 },
    @{ Path = "dinosaur-types\catalog.json"; Name = "Dinosaur Types"; From = 0; To = 30 },
    @{ Path = "gemstones\catalog.json"; Name = "Gemstones"; From = 0; To = 30 },
    @{ Path = "metals\catalog.json"; Name = "Metals"; From = 0; To = 30 },
    @{ Path = "fabrics\catalog.json"; Name = "Fabrics"; From = 0; To = 30 },
    @{ Path = "tools-workshop\catalog.json"; Name = "Workshop Tools"; From = 0; To = 30 },
    @{ Path = "camping\catalog.json"; Name = "Camping"; From = 0; To = 30 },
    @{ Path = "beach\catalog.json"; Name = "Beach"; From = 0; To = 30 },
    @{ Path = "airport\catalog.json"; Name = "Airport"; From = 0; To = 30 },
    @{ Path = "hospital\catalog.json"; Name = "Hospital"; From = 0; To = 30 },
    @{ Path = "kitchen-appliances\catalog.json"; Name = "Kitchen Appliances"; From = 0; To = 30 },
    @{ Path = "cleaning-items\catalog.json"; Name = "Cleaning Items"; From = 0; To = 30 }
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
Write-Host "  AUDIO COMPLETE! Phases 21-40" -ForegroundColor Green
Write-Host "  Generated: $($audioDone - $skipped) | Skipped: $skipped" -ForegroundColor White
Write-Host "  Time: $($totalTime.ToString('hh\:mm\:ss'))" -ForegroundColor White
Write-Host "================================================================" -ForegroundColor Green
