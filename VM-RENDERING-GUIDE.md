# VM Connection & Rendering Guide

Step-by-step guide for connecting to the Azure Windows VM and rendering nursery rhyme videos using Remotion.

---

## VM Details

| Property          | Value                                        |
|-------------------|----------------------------------------------|
| **Name**          | test-win-vm                                  |
| **OS**            | Windows 11 Pro                               |
| **Size**          | Standard D4s v3 (4 vCPUs, 16 GiB RAM)       |
| **Public IP**     | 52.224.242.39                                |
| **Private IP**    | 10.0.0.4                                     |
| **Location**      | East US (Zone 1)                             |
| **Resource Group**| test-win-vm                                  |
| **Status**        | Running                                      |

---

## Step 1: Connect to the VM via RDP

### On Mac (using Microsoft Remote Desktop)

1. Install **Microsoft Remote Desktop** from the Mac App Store.
2. Open the app and click **Add PC** (or the `+` button).
3. Enter the following:
   - **PC name**: `52.224.242.39`
   - **User account**: Add the account you set when creating the VM
4. Click **Add**, then double-click the connection to connect.
5. Accept the certificate warning when prompted.

### On Windows (using built-in RDP)

1. Press `Win + R`, type `mstsc`, and press Enter.
2. Enter `52.224.242.39` as the Computer name.
3. Click **Connect** and enter your VM credentials.
4. Accept the certificate warning.

### Via Azure Portal (Bastion — no public IP needed)

1. Go to the VM page in [Azure Portal](https://portal.azure.com).
2. Click **Connect** > **Bastion** in the toolbar.
3. Enter your username and password.
4. Click **Connect** — opens an RDP session in your browser.

---

## Step 2: Set Up the VM Environment

Once connected to the VM via RDP, open **PowerShell as Administrator** and run:

```powershell
# Allow script execution
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Option A: Run the automated setup script

Copy the project to the VM first (see Step 3), then run:

```powershell
cd C:\rhyme-render
.\bulk-render\windows-vm-setup.ps1
```

This installs all dependencies:
- Node.js 20 LTS
- Git
- Python 3.12 + edge-tts (for audio generation)
- ffmpeg
- Google Chrome (required by Remotion)

### Option B: Install manually

```powershell
# Node.js 20
winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements

# Git
winget install Git.Git --accept-package-agreements --accept-source-agreements

# Python 3
winget install Python.Python.3.12 --accept-package-agreements --accept-source-agreements
pip install edge-tts

# ffmpeg
winget install Gyan.FFmpeg --accept-package-agreements --accept-source-agreements

# Chrome
winget install Google.Chrome --accept-package-agreements --accept-source-agreements

# Refresh PATH after installations
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
```

---

## Step 3: Transfer the Project to the VM

### Option A: Git Clone (recommended)

```powershell
cd C:\
git clone <your-repo-url> rhyme-render
cd rhyme-render
npm install
```

### Option B: SCP from your Mac

From your local terminal (not the VM):

```bash
scp -r "/Users/sauravjha/Documents/vs-code/Animated Video/" user@52.224.242.39:C:/rhyme-render/
```

### Option C: Manual copy via RDP

1. In your RDP session, go to **Settings > Local Resources > More** and enable **Clipboard** and **Drives**.
2. Copy-paste the project folder from your Mac to `C:\rhyme-render\` on the VM.

After transferring, install dependencies:

```powershell
cd C:\rhyme-render
npm install
```

---

## Step 4: Generate Audio (TTS)

Generate voice narration for all rhymes using edge-tts:

```powershell
cd C:\rhyme-render
node bulk-render/generate-all-audio.js
```

This reads `bulk-render/rhymes-catalog.json` and generates audio files in `public/audio/`.

---

## Step 5: Render Videos

### Full pipeline (audio + register + render + upload)

```bash
bash bulk-render/run-pipeline.sh
```

### Render only (if audio is already generated)

```bash
bash bulk-render/run-pipeline.sh --skip-audio --skip-register
```

### Render in batches (recommended for 150+ rhymes)

The D4s v3 VM renders roughly 50 rhymes (100 videos) per day. Split into batches:

```bash
# Day 1: Rhymes 1-50
bash bulk-render/render-all.sh --batch 1

# Day 2: Rhymes 51-100
bash bulk-render/render-all.sh --batch 2

# Day 3: Rhymes 101-150
bash bulk-render/render-all.sh --batch 3
```

### Skip specific pipeline steps

```bash
bash bulk-render/run-pipeline.sh --skip-audio       # Skip audio generation
bash bulk-render/run-pipeline.sh --skip-register     # Skip composition registration
bash bulk-render/run-pipeline.sh --skip-render       # Skip video rendering
bash bulk-render/run-pipeline.sh --skip-upload       # Skip blob storage upload
```

### Output locations

| Format      | Directory           | Naming Convention       |
|-------------|---------------------|-------------------------|
| YouTube     | `out/youtube/`      | `{rhyme-id}.mp4`        |
| Shorts      | `out/shorts/`       | `{rhyme-id}-shorts.mp4` |

---

## Step 6: Upload Rendered Videos to Azure Blob Storage

After rendering is complete:

```bash
bash bulk-render/upload-to-blob.sh
```

This will:
1. Create a storage account in the `rhyme-render-rg` resource group
2. Create `youtube-videos` and `shorts-videos` blob containers
3. Upload all `.mp4` files
4. Generate SAS download URLs (valid for 7 days)
5. Save URLs to `bulk-render/download-urls.txt`

### Download videos from blob to your local machine

```bash
az storage blob download-batch \
  --source youtube-videos \
  --destination ./youtube/ \
  --account-name <storage-account-name> \
  --sas-token "<sas-token>"
```

---

## Step 7: Monitor & Troubleshoot

### Check render progress

Render logs are written to `bulk-render/render-log.txt`:

```powershell
Get-Content C:\rhyme-render\bulk-render\render-log.txt -Tail 20
```

### Common issues

| Issue | Solution |
|-------|----------|
| `Chrome not found` | Ensure Chrome is installed: `winget install Google.Chrome` |
| `ffmpeg not found` | Reinstall and refresh PATH (see Step 2) |
| `Out of memory` | Reduce concurrency: edit `CONCURRENCY` in `render-all.sh` |
| Render hangs | Check Task Manager for stuck Chrome processes; kill and retry |
| `edge-tts` fails | Check internet connectivity; edge-tts requires Azure TTS API access |

### Verify dependencies

```powershell
node --version       # Should be v20.x
npm --version        # Should be 10.x
git --version
python --version     # Should be 3.12.x
ffmpeg -version
edge-tts --version
```

---

## Step 8: Clean Up Azure Resources

**Important**: Delete resources when done to avoid charges.

### Stop the VM (keep resources, save costs)

```bash
az vm deallocate --resource-group test-win-vm --name test-win-vm
```

### Delete everything (irreversible)

```bash
az group delete --name test-win-vm --yes --no-wait
az group delete --name rhyme-render-rg --yes --no-wait
```

---

## Quick Reference

```
Connect:   RDP to 52.224.242.39
Setup:     .\bulk-render\windows-vm-setup.ps1
Render:    bash bulk-render/run-pipeline.sh
Batches:   bash bulk-render/render-all.sh --batch 1
Upload:    bash bulk-render/upload-to-blob.sh
Logs:      bulk-render/render-log.txt
Stop VM:   az vm deallocate --resource-group test-win-vm --name test-win-vm
```
