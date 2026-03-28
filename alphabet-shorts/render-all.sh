#!/bin/bash
# ============================================================================
# Bulk Alphabet Shorts Video Renderer
# ============================================================================
# Reads alphabet-shorts/catalog.json and renders every alphabet video
# in portrait/shorts format (1080x1920) using Remotion.
#
# Skips already-rendered videos automatically.
#
# Usage:
#   bash alphabet-shorts/render-all.sh              # Render all
#   bash alphabet-shorts/render-all.sh --batch 1    # Batch 1: videos 1-5
#   bash alphabet-shorts/render-all.sh --batch 2    # Batch 2: videos 6-10
# ============================================================================

set -euo pipefail

# ---------- Configuration ----------
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CATALOG="$PROJECT_DIR/alphabet-shorts/catalog.json"
OUT_DIR="$PROJECT_DIR/out/alphabet-shorts"
LOG_FILE="$PROJECT_DIR/alphabet-shorts/render-log.txt"
CONCURRENCY="100%"
PARALLEL_RENDERS=1

cd "$PROJECT_DIR"

# ---------- Batch Mode ----------
BATCH=""
BATCH_SIZE=5
if [[ "${1:-}" == "--batch" ]] && [[ -n "${2:-}" ]]; then
  BATCH="$2"
  echo "Running BATCH $BATCH (videos $((( BATCH - 1 ) * BATCH_SIZE + 1))-$(( BATCH * BATCH_SIZE )))"
fi

# ---------- Helpers ----------
timestamp() {
  date "+%Y-%m-%d %H:%M:%S"
}

log() {
  echo "[$(timestamp)] $*" | tee -a "$LOG_FILE"
}

# Convert id to PascalCase composition ID (must match register-compositions.js)
to_pascal_case() {
  echo "$1" | sed -E 's/(^|[-_ ])([a-z])/\U\2/g'
}

# ---------- Setup ----------
echo "============================================"
echo "  Bulk Alphabet Shorts Video Renderer"
echo "============================================"
echo ""

# Verify catalog exists
if [ ! -f "$CATALOG" ]; then
  echo "ERROR: catalog.json not found at $CATALOG"
  exit 1
fi

# Verify jq is installed
if ! command -v jq &> /dev/null; then
  echo "ERROR: jq is required but not installed."
  echo "  Install it: sudo apt-get install jq (Linux) or brew install jq (Mac)"
  exit 1
fi

# Create output directory
mkdir -p "$OUT_DIR"

# Initialize log
echo "============================================" > "$LOG_FILE"
echo "  Alphabet Shorts Render Log - Started at $(timestamp)" >> "$LOG_FILE"
echo "============================================" >> "$LOG_FILE"

# ---------- Parse Catalog ----------
VIDEO_IDS=$(jq -r '
  if type == "array" then .[]
  elif .videos then .videos[]
  else empty
  end | .id
' "$CATALOG")

TOTAL=$(echo "$VIDEO_IDS" | wc -l | tr -d ' ')
log "Found $TOTAL alphabet videos to render"
log "Output: $OUT_DIR"
log "Parallel renders: $PARALLEL_RENDERS"
log "Concurrency per render: $CONCURRENCY"
echo ""

# ---------- Render Loop ----------
START_TIME=$(date +%s)
RENDERED=0
SKIPPED=0
FAILED=0
CURRENT=0
ACTIVE_PIDS=()

# Function to wait for a slot when we hit max parallel renders
wait_for_slot() {
  while [ ${#ACTIVE_PIDS[@]} -ge $PARALLEL_RENDERS ]; do
    local new_pids=()
    for pid in "${ACTIVE_PIDS[@]}"; do
      if kill -0 "$pid" 2>/dev/null; then
        new_pids+=("$pid")
      else
        wait "$pid" 2>/dev/null || true
      fi
    done
    ACTIVE_PIDS=("${new_pids[@]}")
    if [ ${#ACTIVE_PIDS[@]} -ge $PARALLEL_RENDERS ]; then
      sleep 1
    fi
  done
}

# Function to render a single composition
render_composition() {
  local comp_id="$1"
  local output_file="$2"
  local label="$3"

  if [ -f "$output_file" ]; then
    log "  SKIP $label (already exists)"
    return 0
  fi

  log "  RENDER $label -> $output_file"
  if npx remotion render "$comp_id" "$output_file" \
    --concurrency="$CONCURRENCY" \
    --log=error \
    2>&1 | tee -a "$LOG_FILE"; then
    log "  DONE $label"
    return 0
  else
    log "  FAILED $label"
    return 1
  fi
}

for VIDEO_ID in $VIDEO_IDS; do
  CURRENT=$((CURRENT + 1))

  # Batch filtering
  if [[ -n "$BATCH" ]]; then
    BATCH_START=$(( (BATCH - 1) * BATCH_SIZE + 1 ))
    BATCH_END=$(( BATCH * BATCH_SIZE ))
    if [[ $CURRENT -lt $BATCH_START ]] || [[ $CURRENT -gt $BATCH_END ]]; then
      continue
    fi
  fi

  COMP_ID="$(to_pascal_case "$VIDEO_ID")"

  log "[$CURRENT/$TOTAL] Processing: $VIDEO_ID (composition: $COMP_ID)"

  OUTPUT_FILE="$OUT_DIR/${VIDEO_ID}.mp4"

  # Check if already rendered
  if [ -f "$OUTPUT_FILE" ]; then
    log "  SKIP (already rendered)"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  # Wait for a parallel slot
  wait_for_slot

  # Launch render in a subshell
  (
    if render_composition "$COMP_ID" "$OUTPUT_FILE" "$VIDEO_ID (1080x1920)"; then
      echo "OK" >> "$LOG_FILE.success"
    else
      echo "FAIL" >> "$LOG_FILE.fail"
    fi
  ) &

  ACTIVE_PIDS+=($!)
done

# Wait for all remaining renders to finish
log ""
log "Waiting for remaining renders to complete..."
for pid in "${ACTIVE_PIDS[@]}"; do
  wait "$pid" 2>/dev/null || true
done

# ---------- Summary ----------
END_TIME=$(date +%s)
ELAPSED=$(( END_TIME - START_TIME ))
HOURS=$(( ELAPSED / 3600 ))
MINUTES=$(( (ELAPSED % 3600) / 60 ))
SECONDS=$(( ELAPSED % 60 ))

VIDEO_COUNT=$(ls -1 "$OUT_DIR"/*.mp4 2>/dev/null | wc -l | tr -d ' ')

# Count successes and failures from temp files
SUCCESS_COUNT=0
FAIL_COUNT=0
[ -f "$LOG_FILE.success" ] && SUCCESS_COUNT=$(wc -l < "$LOG_FILE.success" | tr -d ' ')
[ -f "$LOG_FILE.fail" ] && FAIL_COUNT=$(wc -l < "$LOG_FILE.fail" | tr -d ' ')

# Clean up temp files
rm -f "$LOG_FILE.success" "$LOG_FILE.fail"

echo ""
echo "============================================"
echo "  ALPHABET SHORTS RENDERING COMPLETE!"
echo "============================================"
echo ""
echo "  Total time:      ${HOURS}h ${MINUTES}m ${SECONDS}s"
echo "  Videos rendered:  $VIDEO_COUNT"
echo "  Total videos:    $VIDEO_COUNT"
echo ""
echo "  Output:  $OUT_DIR/"
echo "  Log:     $LOG_FILE"
echo ""
echo "============================================" | tee -a "$LOG_FILE"

log "COMPLETE: $VIDEO_COUNT videos in ${HOURS}h ${MINUTES}m ${SECONDS}s"
