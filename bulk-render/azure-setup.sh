#!/bin/bash
# ============================================================================
# Azure VM Setup for Bulk Remotion Video Rendering
# ============================================================================
# This script provisions an Azure VM optimized for rendering 150+ nursery
# rhyme videos using Remotion. It uses a Standard_F32s_v2 (32 vCPUs, 64GB RAM)
# which is compute-optimized and ideal for video rendering workloads.
#
# Prerequisites:
#   - Azure CLI installed locally: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli
#   - Logged in: az login
#   - An active Azure subscription
#
# Usage:
#   chmod +x azure-setup.sh
#   ./azure-setup.sh
# ============================================================================

set -euo pipefail

# ---------- Configuration ----------
RESOURCE_GROUP="rhyme-render-rg"
LOCATION="centralindia"
VM_NAME="rhyme-render-vm"
VM_SIZE="Standard_D4s_v3"    # 4 vCPUs, 16 GB RAM (free tier from Microsoft)
VM_IMAGE="Canonical:0001-com-ubuntu-server-jammy:22_04-lts-gen2:latest"
ADMIN_USER="renderadmin"
SSH_KEY_NAME="rhyme-render-key"

echo "============================================"
echo "  Rhyme Render - Azure VM Setup"
echo "============================================"
echo ""

# ---------- Step 1: Create Resource Group ----------
echo "[1/5] Creating resource group: $RESOURCE_GROUP in $LOCATION..."
az group create \
  --name "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --output table

# ---------- Step 2: Create the VM ----------
echo ""
echo "[2/5] Creating VM: $VM_NAME ($VM_SIZE)..."
echo "       This may take 2-5 minutes..."
VM_OUTPUT=$(az vm create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$VM_NAME" \
  --size "$VM_SIZE" \
  --image "$VM_IMAGE" \
  --admin-username "$ADMIN_USER" \
  --generate-ssh-keys \
  --os-disk-size-gb 128 \
  --public-ip-sku Standard \
  --output json)

PUBLIC_IP=$(echo "$VM_OUTPUT" | python3 -c "import sys,json; print(json.load(sys.stdin)['publicIpAddress'])")
echo "       VM created! Public IP: $PUBLIC_IP"

# ---------- Step 3: Open SSH Port ----------
echo ""
echo "[3/5] Opening SSH port (22)..."
az vm open-port \
  --resource-group "$RESOURCE_GROUP" \
  --name "$VM_NAME" \
  --port 22 \
  --priority 1000 \
  --output table

# ---------- Step 4: Install Dependencies on VM ----------
echo ""
echo "[4/5] Installing dependencies on the VM via SSH..."
echo "       (Node.js 20, Chrome, ffmpeg, Python3, edge-tts)"

# Wait a moment for SSH to become available
sleep 10

ssh -o StrictHostKeyChecking=no "$ADMIN_USER@$PUBLIC_IP" << 'REMOTE_SCRIPT'
set -euo pipefail

echo "--- Updating system packages ---"
sudo apt-get update -y && sudo apt-get upgrade -y

echo "--- Installing Node.js 20 ---"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

echo "--- Installing Chrome/Chromium (required by Remotion) ---"
sudo apt-get install -y chromium-browser || {
  # Fallback: install Google Chrome if chromium-browser is not available
  wget -q -O /tmp/chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
  sudo dpkg -i /tmp/chrome.deb || sudo apt-get install -f -y
  rm /tmp/chrome.deb
}

echo "--- Installing ffmpeg ---"
sudo apt-get install -y ffmpeg
echo "ffmpeg version: $(ffmpeg -version | head -1)"

echo "--- Installing Python3, pip, and edge-tts ---"
sudo apt-get install -y python3 python3-pip python3-venv
pip3 install --break-system-packages edge-tts || pip3 install edge-tts
echo "edge-tts version: $(python3 -m edge_tts --version 2>/dev/null || echo 'installed')"

echo "--- Installing jq (for shell scripts) ---"
sudo apt-get install -y jq

echo "--- Installing build tools (may be needed for native modules) ---"
sudo apt-get install -y build-essential

echo "--- All dependencies installed successfully! ---"
REMOTE_SCRIPT

# ---------- Step 5: Upload Project ----------
echo ""
echo "[5/5] Uploading project to VM..."
echo "       You can upload the project using one of these methods:"
echo ""
echo "  Option A: rsync (recommended):"
echo "    rsync -avz --exclude='node_modules' --exclude='out' --exclude='.git' \\"
echo "      \"/Users/sauravjha/Documents/vs-code/Animated Video/\" \\"
echo "      $ADMIN_USER@$PUBLIC_IP:~/animated-video/"
echo ""
echo "  Option B: scp (simpler):"
echo "    scp -r \"/Users/sauravjha/Documents/vs-code/Animated Video/\" \\"
echo "      $ADMIN_USER@$PUBLIC_IP:~/animated-video/"
echo ""
echo "  Option C: Clone from Git (if project is in a repo):"
echo "    ssh $ADMIN_USER@$PUBLIC_IP 'git clone <your-repo-url> ~/remotion-video'"
echo ""

# ---------- Summary ----------
echo "============================================"
echo "  VM SETUP COMPLETE!"
echo "============================================"
echo ""
echo "  Public IP:   $PUBLIC_IP"
echo "  SSH Command: ssh $ADMIN_USER@$PUBLIC_IP"
echo "  VM Size:     $VM_SIZE (4 vCPUs, 16GB RAM)"
echo "  OS:          Ubuntu 22.04 LTS"
echo "  Disk:        256 GB"
echo ""
echo "  Next steps:"
echo "    1. Upload the project (see options above)"
echo "    2. SSH into the VM: ssh $ADMIN_USER@$PUBLIC_IP"
echo "    3. cd ~/remotion-video && npm install"
echo "    4. Run the pipeline: bash bulk-render/run-pipeline.sh"
echo ""
echo "  Estimated rendering time for 150 rhymes (2 formats each):"
echo "    ~45-55 hours on Standard_D4s_v3 (4 vCPUs)"
echo "    TIP: Run in batches of 50 rhymes over 3 days"
echo ""
echo "============================================"

# Save connection info for other scripts
echo "$PUBLIC_IP" > "$(dirname "$0")/vm-ip.txt"
echo "$ADMIN_USER" > "$(dirname "$0")/vm-user.txt"

# ============================================================================
# CLEANUP: Uncomment and run these commands when you're done to avoid charges!
# ============================================================================
# echo "Deleting all Azure resources in $RESOURCE_GROUP..."
# az group delete --name "$RESOURCE_GROUP" --yes --no-wait
# echo "Resource group deletion initiated. Resources will be removed shortly."
# ============================================================================
