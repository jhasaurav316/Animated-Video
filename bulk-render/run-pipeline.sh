#!/bin/bash
# ============================================================================
# Master Pipeline - Orchestrates the Full Bulk Render Workflow
# ============================================================================
# Runs all steps in order:
#   1. Generate audio for all rhymes (voice + BGM)
#   2. Register all compositions in Root.tsx
#   3. Render all videos (landscape + shorts)
#   4. Upload to Azure Blob Storage
#
# Usage:
#   cd /path/to/remotion-video
#   bash bulk-render/run-pipeline.sh
#
# Options:
#   --skip-audio     Skip audio generation step
#   --skip-register  Skip composition registration step
#   --skip-render    Skip video rendering step
#   --skip-upload    Skip blob storage upload step
# ============================================================================

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
BULK_DIR="$PROJECT_DIR/bulk-render"

cd "$PROJECT_DIR"

# ---------- Parse Arguments ----------
SKIP_AUDIO=false
SKIP_REGISTER=false
SKIP_RENDER=false
SKIP_UPLOAD=false

for arg in "$@"; do
  case "$arg" in
    --skip-audio)    SKIP_AUDIO=true ;;
    --skip-register) SKIP_REGISTER=true ;;
    --skip-render)   SKIP_RENDER=true ;;
    --skip-upload)   SKIP_UPLOAD=true ;;
    *)               echo "Unknown option: $arg"; exit 1 ;;
  esac
done

# ---------- Helpers ----------
timestamp() {
  date "+%Y-%m-%d %H:%M:%S"
}

elapsed_since() {
  local start=$1
  local now=$(date +%s)
  local diff=$((now - start))
  local mins=$((diff / 60))
  local secs=$((diff % 60))
  echo "${mins}m ${secs}s"
}

# ---------- Banner ----------
echo ""
echo "========================================================"
echo "  SudharMap - Bulk Rhyme Video Pipeline"
echo "========================================================"
echo "  Started at: $(timestamp)"
echo "  Project:    $PROJECT_DIR"
echo ""
echo "  Steps:"
[ "$SKIP_AUDIO" = false ]    && echo "    1. Generate audio     [ENABLED]" || echo "    1. Generate audio     [SKIPPED]"
[ "$SKIP_REGISTER" = false ] && echo "    2. Register comps     [ENABLED]" || echo "    2. Register comps     [SKIPPED]"
[ "$SKIP_RENDER" = false ]   && echo "    3. Render videos      [ENABLED]" || echo "    3. Render videos      [SKIPPED]"
[ "$SKIP_UPLOAD" = false ]   && echo "    4. Upload to blob     [ENABLED]" || echo "    4. Upload to blob     [SKIPPED]"
echo ""
echo "========================================================"
echo ""

PIPELINE_START=$(date +%s)

# ---------- Step 1: Generate Audio ----------
if [ "$SKIP_AUDIO" = false ]; then
  echo "========================================================"
  echo "  STEP 1/4: Generating Audio for All Rhymes"
  echo "  Started: $(timestamp)"
  echo "========================================================"
  STEP_START=$(date +%s)

  node "$BULK_DIR/generate-all-audio.js"

  echo ""
  echo "  Step 1 completed in $(elapsed_since $STEP_START)"
  echo "========================================================"
  echo ""
else
  echo "[STEP 1/4] Audio generation SKIPPED"
  echo ""
fi

# ---------- Step 2: Register Compositions ----------
if [ "$SKIP_REGISTER" = false ]; then
  echo "========================================================"
  echo "  STEP 2/4: Registering All Compositions in Root.tsx"
  echo "  Started: $(timestamp)"
  echo "========================================================"
  STEP_START=$(date +%s)

  node "$BULK_DIR/register-compositions.js"

  echo ""
  echo "  Step 2 completed in $(elapsed_since $STEP_START)"
  echo "========================================================"
  echo ""
else
  echo "[STEP 2/4] Composition registration SKIPPED"
  echo ""
fi

# ---------- Step 3: Render All Videos ----------
if [ "$SKIP_RENDER" = false ]; then
  echo "========================================================"
  echo "  STEP 3/4: Rendering All Videos"
  echo "  Started: $(timestamp)"
  echo "========================================================"
  STEP_START=$(date +%s)

  bash "$BULK_DIR/render-all.sh"

  echo ""
  echo "  Step 3 completed in $(elapsed_since $STEP_START)"
  echo "========================================================"
  echo ""
else
  echo "[STEP 3/4] Video rendering SKIPPED"
  echo ""
fi

# ---------- Step 4: Upload to Blob Storage ----------
if [ "$SKIP_UPLOAD" = false ]; then
  echo "========================================================"
  echo "  STEP 4/4: Uploading Videos to Azure Blob Storage"
  echo "  Started: $(timestamp)"
  echo "========================================================"
  STEP_START=$(date +%s)

  bash "$BULK_DIR/upload-to-blob.sh"

  echo ""
  echo "  Step 4 completed in $(elapsed_since $STEP_START)"
  echo "========================================================"
  echo ""
else
  echo "[STEP 4/4] Blob upload SKIPPED"
  echo ""
fi

# ---------- Final Summary ----------
PIPELINE_END=$(date +%s)
TOTAL_ELAPSED=$((PIPELINE_END - PIPELINE_START))
TOTAL_HOURS=$((TOTAL_ELAPSED / 3600))
TOTAL_MINS=$(((TOTAL_ELAPSED % 3600) / 60))
TOTAL_SECS=$((TOTAL_ELAPSED % 60))

YT_COUNT=$(ls -1 "$PROJECT_DIR/out/youtube/"*.mp4 2>/dev/null | wc -l | tr -d ' ')
SHORTS_COUNT=$(ls -1 "$PROJECT_DIR/out/shorts/"*.mp4 2>/dev/null | wc -l | tr -d ' ')

echo ""
echo "========================================================"
echo "  PIPELINE COMPLETE!"
echo "========================================================"
echo ""
echo "  Total time:     ${TOTAL_HOURS}h ${TOTAL_MINS}m ${TOTAL_SECS}s"
echo "  YouTube videos: $YT_COUNT"
echo "  Shorts videos:  $SHORTS_COUNT"
echo "  Total videos:   $((YT_COUNT + SHORTS_COUNT))"
echo ""
echo "  Finished at:    $(timestamp)"
echo ""
echo "========================================================"
