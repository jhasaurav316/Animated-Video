# ============================================================================
# Windows VM Setup for Bulk Remotion Video Rendering
# ============================================================================
# Run this script on the Windows VM after connecting via RDP.
# It installs all dependencies needed for rendering nursery rhyme videos.
#
# Usage (Run as Administrator in PowerShell):
#   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
#   .\windows-vm-setup.ps1
# ============================================================================

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Rhyme Render - Windows VM Setup" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# ---------- Step 1: Install Node.js 20 via winget ----------
Write-Host "[1/5] Installing Node.js 20 LTS..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion -match "v2[0-9]") {
        Write-Host "  Node.js already installed: $nodeVersion" -ForegroundColor Green
    } else {
        throw "Need install"
    }
} catch {
    winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
    # Refresh PATH
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    Write-Host "  Node.js installed: $(node --version)" -ForegroundColor Green
}

# ---------- Step 2: Install Git ----------
Write-Host ""
Write-Host "[2/5] Installing Git..." -ForegroundColor Yellow
try {
    $gitVersion = git --version 2>$null
    if ($gitVersion) {
        Write-Host "  Git already installed: $gitVersion" -ForegroundColor Green
    } else {
        throw "Need install"
    }
} catch {
    winget install Git.Git --accept-package-agreements --accept-source-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    Write-Host "  Git installed: $(git --version)" -ForegroundColor Green
}

# ---------- Step 3: Install Python3 + edge-tts ----------
Write-Host ""
Write-Host "[3/5] Installing Python3 and edge-tts..." -ForegroundColor Yellow
try {
    $pyVersion = python --version 2>$null
    if ($pyVersion) {
        Write-Host "  Python already installed: $pyVersion" -ForegroundColor Green
    } else {
        throw "Need install"
    }
} catch {
    winget install Python.Python.3.12 --accept-package-agreements --accept-source-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    Write-Host "  Python installed: $(python --version)" -ForegroundColor Green
}
Write-Host "  Installing edge-tts..."
pip install edge-tts 2>$null
Write-Host "  edge-tts installed" -ForegroundColor Green

# ---------- Step 4: Install ffmpeg ----------
Write-Host ""
Write-Host "[4/5] Installing ffmpeg..." -ForegroundColor Yellow
try {
    $ffmpegVersion = ffmpeg -version 2>$null | Select-Object -First 1
    if ($ffmpegVersion) {
        Write-Host "  ffmpeg already installed" -ForegroundColor Green
    } else {
        throw "Need install"
    }
} catch {
    winget install Gyan.FFmpeg --accept-package-agreements --accept-source-agreements
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
    Write-Host "  ffmpeg installed" -ForegroundColor Green
}

# ---------- Step 5: Install Chrome (required by Remotion) ----------
Write-Host ""
Write-Host "[5/5] Installing Google Chrome (required by Remotion)..." -ForegroundColor Yellow
try {
    $chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
    if (Test-Path $chromePath) {
        Write-Host "  Chrome already installed" -ForegroundColor Green
    } else {
        throw "Need install"
    }
} catch {
    winget install Google.Chrome --accept-package-agreements --accept-source-agreements
    Write-Host "  Chrome installed" -ForegroundColor Green
}

# ---------- Summary ----------
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  VM SETUP COMPLETE!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Installed:" -ForegroundColor White
Write-Host "    - Node.js $(node --version 2>$null)"
Write-Host "    - Git $(git --version 2>$null)"
Write-Host "    - Python $(python --version 2>$null)"
Write-Host "    - edge-tts (Azure TTS)"
Write-Host "    - ffmpeg"
Write-Host "    - Google Chrome"
Write-Host ""
Write-Host "  Next Steps:" -ForegroundColor Yellow
Write-Host "    1. Clone or copy your project to C:\rhyme-render\"
Write-Host "    2. cd C:\rhyme-render"
Write-Host "    3. npm install"
Write-Host "    4. .\bulk-render\render-pipeline.ps1"
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
