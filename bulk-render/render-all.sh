#!/bin/bash
# ============================================================================
# Bulk Video Renderer
# ============================================================================
# Reads rhymes-catalog.json and renders every rhyme as both landscape
# (YouTube) and shorts format using Remotion.
#
# Optimized for Standard_D4s_v3 (4 vCPUs, 16GB RAM).
# Skips already-rendered videos automatically.
#
# Usage:
#   bash bulk-render/render-all.sh              # Render all
#   bash bulk-render/render-all.sh --batch 1    # Day 1: rhymes 1-50
#   bash bulk-render/render-all.sh --batch 2    # Day 2: rhymes 51-100
#   bash bulk-render/render-all.sh --batch 3    # Day 3: rhymes 101-150
# ============================================================================

set -euo pipefail

# ---------- Configuration ----------
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CATALOG="$PROJECT_DIR/rhymes-catalog.json"
OUT_YT="$PROJECT_DIR/out/youtube"
OUT_SHORTS="$PROJECT_DIR/out/shorts"
LOG_FILE="$PROJECT_DIR/bulk-render/render-log.txt"
CONCURRENCY="100%"       # Use all 4 vCPUs for each render (D4s_v3)
PARALLEL_RENDERS=1        # Sequential renders on 4 vCPU VM

cd "$PROJECT_DIR"

# ---------- Batch Mode ----------
BATCH=""
BATCH_SIZE=50
if [[ "${1:-}" == "--batch" ]] && [[ -n "${2:-}" ]]; then
  BATCH="$2"
  echo "Running BATCH $BATCH (rhymes $((( BATCH - 1 ) * BATCH_SIZE + 1))-$(( BATCH * BATCH_SIZE )))"
fi

# ---------- Helpers ----------
timestamp() {
  date "+%Y-%m-%d %H:%M:%S"
}

log() {
  echo "[$(timestamp)] $*" | tee -a "$LOG_FILE"
}

# ---------- Setup ----------
echo "============================================"
echo "  Bulk Video Renderer"
echo "============================================"
echo ""

# Verify catalog exists
if [ ! -f "$CATALOG" ]; then
  echo "ERROR: rhymes-catalog.json not found at $CATALOG"
  exit 1
fi

# Verify jq is installed
if ! command -v jq &> /dev/null; then
  echo "ERROR: jq is required but not installed."
  echo "  Install it: sudo apt-get install jq (Linux) or brew install jq (Mac)"
  exit 1
fi

# Create output directories
mkdir -p "$OUT_YT" "$OUT_SHORTS"

# Initialize log
echo "============================================" > "$LOG_FILE"
echo "  Render Log - Started at $(timestamp)" >> "$LOG_FILE"
echo "============================================" >> "$LOG_FILE"

# ---------- Parse Catalog ----------
# Extract rhyme IDs from catalog (handles both array and object formats)
RHYME_IDS=$(jq -r '
  if type == "array" then .[]
  elif .rhymes then .rhymes[]
  else empty
  end | .rhymeId // .id
' "$CATALOG")

TOTAL=$(echo "$RHYME_IDS" | wc -l | tr -d ' ')
log "Found $TOTAL rhymes to render"
log "Output: YouTube -> $OUT_YT"
log "Output: Shorts  -> $OUT_SHORTS"
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
        # Process finished, check exit status
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

# Convert rhymeId to PascalCase composition ID (must match register-compositions.js)
to_pascal_case() {
  echo "$1" | sed -E 's/(^|[-_ ])([a-z])/\U\2/g'
}

for RHYME_ID in $RHYME_IDS; do
  CURRENT=$((CURRENT + 1))

  # Batch filtering: skip rhymes outside the batch range
  if [[ -n "$BATCH" ]]; then
    BATCH_START=$(( (BATCH - 1) * BATCH_SIZE + 1 ))
    BATCH_END=$(( BATCH * BATCH_SIZE ))
    if [[ $CURRENT -lt $BATCH_START ]] || [[ $CURRENT -gt $BATCH_END ]]; then
      continue
    fi
  fi

  COMP_ID=$(to_pascal_case "$RHYME_ID")

  log "[$CURRENT/$TOTAL] Processing: $RHYME_ID (composition: $COMP_ID)"

  YT_FILE="$OUT_YT/${RHYME_ID}.mp4"
  SHORTS_FILE="$OUT_SHORTS/${RHYME_ID}-shorts.mp4"

  # Check if both already exist
  if [ -f "$YT_FILE" ] && [ -f "$SHORTS_FILE" ]; then
    log "  SKIP both formats (already rendered)"
    SKIPPED=$((SKIPPED + 2))
    continue
  fi

  # Wait for a parallel slot
  wait_for_slot

  # Launch landscape + shorts renders in a subshell
  (
    # Render landscape (YouTube) version
    if [ ! -f "$YT_FILE" ]; then
      if render_composition "$COMP_ID" "$YT_FILE" "$RHYME_ID (landscape)"; then
        echo "OK" >> "$LOG_FILE.yt_success"
      else
        echo "FAIL" >> "$LOG_FILE.yt_fail"
      fi
    fi

    # Render shorts version
    if [ ! -f "$SHORTS_FILE" ]; then
      if render_composition "${COMP_ID}Shorts" "$SHORTS_FILE" "$RHYME_ID (shorts)"; then
        echo "OK" >> "$LOG_FILE.shorts_success"
      else
        echo "FAIL" >> "$LOG_FILE.shorts_fail"
      fi
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

YT_COUNT=$(ls -1 "$OUT_YT"/*.mp4 2>/dev/null | wc -l | tr -d ' ')
SHORTS_COUNT=$(ls -1 "$OUT_SHORTS"/*.mp4 2>/dev/null | wc -l | tr -d ' ')

# Count successes and failures from temp files
SUCCESS_COUNT=0
FAIL_COUNT=0
[ -f "$LOG_FILE.yt_success" ] && SUCCESS_COUNT=$(wc -l < "$LOG_FILE.yt_success" | tr -d ' ')
[ -f "$LOG_FILE.shorts_success" ] && SUCCESS_COUNT=$((SUCCESS_COUNT + $(wc -l < "$LOG_FILE.shorts_success" | tr -d ' ')))
[ -f "$LOG_FILE.yt_fail" ] && FAIL_COUNT=$(wc -l < "$LOG_FILE.yt_fail" | tr -d ' ')
[ -f "$LOG_FILE.shorts_fail" ] && FAIL_COUNT=$((FAIL_COUNT + $(wc -l < "$LOG_FILE.shorts_fail" | tr -d ' ')))

# Clean up temp files
rm -f "$LOG_FILE.yt_success" "$LOG_FILE.shorts_success" "$LOG_FILE.yt_fail" "$LOG_FILE.shorts_fail"

echo ""
echo "============================================"
echo "  RENDERING COMPLETE!"
echo "============================================"
echo ""
echo "  Total time:      ${HOURS}h ${MINUTES}m ${SECONDS}s"
echo "  YouTube videos:  $YT_COUNT"
echo "  Shorts videos:   $SHORTS_COUNT"
echo "  Total videos:    $((YT_COUNT + SHORTS_COUNT))"
echo ""
echo "  Output:"
echo "    YouTube:  $OUT_YT/"
echo "    Shorts:   $OUT_SHORTS/"
echo "  Log:        $LOG_FILE"
echo ""
echo "============================================" | tee -a "$LOG_FILE"

log "COMPLETE: ${YT_COUNT} YouTube + ${SHORTS_COUNT} Shorts in ${HOURS}h ${MINUTES}m ${SECONDS}s"
