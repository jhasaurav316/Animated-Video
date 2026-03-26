#!/bin/bash
# ============================================================================
# Upload Rendered Videos to Azure Blob Storage
# ============================================================================
# Creates an Azure Storage account, uploads all rendered videos, and
# generates SAS URLs for downloading.
#
# Prerequisites:
#   - Azure CLI installed and logged in (az login)
#   - Videos already rendered in out/youtube/ and out/shorts/
#
# Usage:
#   bash bulk-render/upload-to-blob.sh
# ============================================================================

set -euo pipefail

# ---------- Configuration ----------
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
RESOURCE_GROUP="rhyme-render-rg"
LOCATION="centralindia"
# Storage account names must be 3-24 chars, lowercase alphanumeric only
STORAGE_ACCOUNT="rhymerenderstore$(date +%m%d)"
CONTAINER_YT="youtube-videos"
CONTAINER_SHORTS="shorts-videos"
OUT_YT="$PROJECT_DIR/out/youtube"
OUT_SHORTS="$PROJECT_DIR/out/shorts"
# SAS token validity: 7 days from now
SAS_EXPIRY=$(date -u -d "+7 days" '+%Y-%m-%dT%H:%MZ' 2>/dev/null || date -u -v+7d '+%Y-%m-%dT%H:%MZ')

echo "============================================"
echo "  Upload to Azure Blob Storage"
echo "============================================"
echo ""

# ---------- Verify rendered videos exist ----------
YT_COUNT=$(ls -1 "$OUT_YT"/*.mp4 2>/dev/null | wc -l | tr -d ' ')
SHORTS_COUNT=$(ls -1 "$OUT_SHORTS"/*.mp4 2>/dev/null | wc -l | tr -d ' ')

if [ "$YT_COUNT" -eq 0 ] && [ "$SHORTS_COUNT" -eq 0 ]; then
  echo "ERROR: No rendered videos found in out/youtube/ or out/shorts/"
  echo "  Run the renderer first: bash bulk-render/render-all.sh"
  exit 1
fi

echo "Found $YT_COUNT YouTube videos and $SHORTS_COUNT Shorts videos."
echo ""

# ---------- Step 1: Create Storage Account ----------
echo "[1/4] Creating storage account: $STORAGE_ACCOUNT..."

# Ensure resource group exists
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" --output none 2>/dev/null || true

az storage account create \
  --name "$STORAGE_ACCOUNT" \
  --resource-group "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --sku Standard_LRS \
  --kind StorageV2 \
  --access-tier Hot \
  --output table

# Get storage account key
STORAGE_KEY=$(az storage account keys list \
  --resource-group "$RESOURCE_GROUP" \
  --account-name "$STORAGE_ACCOUNT" \
  --query "[0].value" -o tsv)

echo "  Storage account created."

# ---------- Step 2: Create Blob Containers ----------
echo ""
echo "[2/4] Creating blob containers..."

az storage container create \
  --name "$CONTAINER_YT" \
  --account-name "$STORAGE_ACCOUNT" \
  --account-key "$STORAGE_KEY" \
  --output none

az storage container create \
  --name "$CONTAINER_SHORTS" \
  --account-name "$STORAGE_ACCOUNT" \
  --account-key "$STORAGE_KEY" \
  --output none

echo "  Containers created: $CONTAINER_YT, $CONTAINER_SHORTS"

# ---------- Step 3: Upload Videos ----------
echo ""
echo "[3/4] Uploading videos to blob storage..."

# Upload YouTube videos
if [ "$YT_COUNT" -gt 0 ]; then
  echo "  Uploading $YT_COUNT YouTube videos..."
  az storage blob upload-batch \
    --destination "$CONTAINER_YT" \
    --source "$OUT_YT" \
    --account-name "$STORAGE_ACCOUNT" \
    --account-key "$STORAGE_KEY" \
    --pattern "*.mp4" \
    --content-type "video/mp4" \
    --output table
  echo "  YouTube videos uploaded."
fi

# Upload Shorts videos
if [ "$SHORTS_COUNT" -gt 0 ]; then
  echo "  Uploading $SHORTS_COUNT Shorts videos..."
  az storage blob upload-batch \
    --destination "$CONTAINER_SHORTS" \
    --source "$OUT_SHORTS" \
    --account-name "$STORAGE_ACCOUNT" \
    --account-key "$STORAGE_KEY" \
    --pattern "*.mp4" \
    --content-type "video/mp4" \
    --output table
  echo "  Shorts videos uploaded."
fi

# ---------- Step 4: Generate SAS URLs ----------
echo ""
echo "[4/4] Generating download links (SAS URLs, valid 7 days)..."
echo ""

# Generate container-level SAS tokens
YT_SAS=$(az storage container generate-sas \
  --name "$CONTAINER_YT" \
  --account-name "$STORAGE_ACCOUNT" \
  --account-key "$STORAGE_KEY" \
  --permissions rl \
  --expiry "$SAS_EXPIRY" \
  -o tsv)

SHORTS_SAS=$(az storage container generate-sas \
  --name "$CONTAINER_SHORTS" \
  --account-name "$STORAGE_ACCOUNT" \
  --account-key "$STORAGE_KEY" \
  --permissions rl \
  --expiry "$SAS_EXPIRY" \
  -o tsv)

BASE_URL="https://${STORAGE_ACCOUNT}.blob.core.windows.net"

echo "============================================"
echo "  UPLOAD COMPLETE!"
echo "============================================"
echo ""
echo "  Storage Account: $STORAGE_ACCOUNT"
echo "  Resource Group:  $RESOURCE_GROUP"
echo ""
echo "  --- YouTube Videos ---"
echo "  Container URL: ${BASE_URL}/${CONTAINER_YT}?${YT_SAS}"
echo ""

# List individual YouTube video URLs
if [ "$YT_COUNT" -gt 0 ]; then
  echo "  Individual download links:"
  az storage blob list \
    --container-name "$CONTAINER_YT" \
    --account-name "$STORAGE_ACCOUNT" \
    --account-key "$STORAGE_KEY" \
    --query "[].name" -o tsv | while read -r blob; do
    echo "    ${BASE_URL}/${CONTAINER_YT}/${blob}?${YT_SAS}"
  done
  echo ""
fi

echo "  --- Shorts Videos ---"
echo "  Container URL: ${BASE_URL}/${CONTAINER_SHORTS}?${SHORTS_SAS}"
echo ""

if [ "$SHORTS_COUNT" -gt 0 ]; then
  echo "  Individual download links:"
  az storage blob list \
    --container-name "$CONTAINER_SHORTS" \
    --account-name "$STORAGE_ACCOUNT" \
    --account-key "$STORAGE_KEY" \
    --query "[].name" -o tsv | while read -r blob; do
    echo "    ${BASE_URL}/${CONTAINER_SHORTS}/${blob}?${SHORTS_SAS}"
  done
  echo ""
fi

# Save URLs to a file for reference
URLS_FILE="$PROJECT_DIR/bulk-render/download-urls.txt"
{
  echo "Download URLs - Generated $(date)"
  echo "Valid until: $SAS_EXPIRY"
  echo ""
  echo "YouTube Videos: ${BASE_URL}/${CONTAINER_YT}?${YT_SAS}"
  echo "Shorts Videos:  ${BASE_URL}/${CONTAINER_SHORTS}?${SHORTS_SAS}"
} > "$URLS_FILE"

echo "  Download URLs saved to: $URLS_FILE"
echo ""
echo "  To download all videos from another machine:"
echo "    az storage blob download-batch --source $CONTAINER_YT --destination ./youtube/ \\"
echo "      --account-name $STORAGE_ACCOUNT --sas-token \"$YT_SAS\""
echo ""
echo "============================================"
