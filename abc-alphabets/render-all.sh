#!/usr/bin/env bash
# ============================================================================
# Render All ABC Alphabet Videos (Bash / Linux / Mac)
# ============================================================================
# Full pipeline: Generate Audio -> Register Compositions -> Render Videos
#
# Usage:
#   bash abc-alphabets/render-all.sh                         # Full pipeline
#   bash abc-alphabets/render-all.sh --skip-audio            # Skip audio gen
#   bash abc-alphabets/render-all.sh --render-only           # Only render
#   bash abc-alphabets/render-all.sh --from 1 --to 5        # Videos 1-5
#   bash abc-alphabets/render-all.sh --quality 4k            # 4K output
#   bash abc-alphabets/render-all.sh --quality max           # Max quality
# ============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CATALOG="$SCRIPT_DIR/catalog.json"
OUTPUT_DIR="$PROJECT_ROOT/out/abc-alphabets"
LOG_FILE="$SCRIPT_DIR/render-log.txt"

# Defaults
SKIP_AUDIO=false
SKIP_REGISTER=false
RENDER_ONLY=false
FROM=1
TO=0
FOLDER_SIZE=10
QUALITY="hd"

# Parse args
while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-audio)    SKIP_AUDIO=true; shift ;;
    --skip-register) SKIP_REGISTER=true; shift ;;
    --render-only)   RENDER_ONLY=true; shift ;;
    --from)          FROM="$2"; shift 2 ;;
    --to)            TO="$2"; shift 2 ;;
    --folder-size)   FOLDER_SIZE="$2"; shift 2 ;;
    --quality)       QUALITY="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

# ---------- Quality Profiles ----------
case "$QUALITY" in
  hd)
    Q_SCALE=1; Q_CRF=18; Q_CODEC="h264"; Q_BITRATE=""; Q_LABEL="Full HD (1080x1920) CRF 18" ;;
  4k)
    Q_SCALE=2; Q_CRF=16; Q_CODEC="h264"; Q_BITRATE=""; Q_LABEL="4K UHD (2160x3840) CRF 16" ;;
  max)
    Q_SCALE=2; Q_CRF=12; Q_CODEC="h264"; Q_BITRATE="25M"; Q_LABEL="4K MAX (2160x3840) CRF 12, 25Mbps" ;;
  *)
    echo "ERROR: Unknown quality '$QUALITY'. Use: hd, 4k, max"; exit 1 ;;
esac

# ---------- Helpers ----------
to_pascal_case() {
  echo "$1" | sed -E 's/(^|[-_ ])([a-z])/\U\2/g'
}

to_filename_safe() {
  echo "$1" | sed 's/[^a-zA-Z0-9 _-]//g' | sed 's/ \+/-/g'
}

# ---------- Pre-flight checks ----------
if [ ! -f "$CATALOG" ]; then
  echo "ERROR: catalog.json not found at $CATALOG"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

TOTAL=$(node -e "const c=JSON.parse(require('fs').readFileSync('$CATALOG','utf8')); const v=Array.isArray(c)?c:c.videos||[]; console.log(v.length)")
if [ "$TO" -eq 0 ] || [ "$TO" -gt "$TOTAL" ]; then TO=$TOTAL; fi

echo ""
echo "════════════════════════════════════════════════"
echo "  ABC Alphabets Render Pipeline"
echo "════════════════════════════════════════════════"
echo ""
echo "  Videos:  $TOTAL total, rendering $FROM to $TO"
echo "  Quality: $Q_LABEL"
echo "  Output:  $OUTPUT_DIR"
echo ""

echo "========================================" > "$LOG_FILE"
echo "  ABC Alphabets Render Log" >> "$LOG_FILE"
echo "  Started: $(date)" >> "$LOG_FILE"
echo "  Quality: $Q_LABEL" >> "$LOG_FILE"
echo "========================================" >> "$LOG_FILE"

START_TIME=$(date +%s)

# ======================== STEP 1: AUDIO ========================
if [ "$RENDER_ONLY" = false ] && [ "$SKIP_AUDIO" = false ]; then
  echo "──────────────────────────────────────────"
  echo "  STEP 1: Generating Audio"
  echo "──────────────────────────────────────────"

  AUDIO_SCRIPT="$SCRIPT_DIR/generate-audio.js"
  if [ -f "$AUDIO_SCRIPT" ]; then
    AUDIO_ARGS=""
    if [ "$FROM" -gt 1 ] || [ "$TO" -lt "$TOTAL" ]; then
      AUDIO_ARGS="--from $FROM --to $TO"
    fi
    node "$AUDIO_SCRIPT" $AUDIO_ARGS || echo "  ⚠ Audio generation had errors, continuing..."
    echo "  ✅ Audio generation complete!"
  else
    echo "  ⚠ generate-audio.js not found, skipping"
  fi
  echo ""
else
  echo "  STEP 1: Audio generation SKIPPED"
  echo ""
fi

# ======================== STEP 2: REGISTER ========================
if [ "$RENDER_ONLY" = false ] && [ "$SKIP_REGISTER" = false ]; then
  echo "──────────────────────────────────────────"
  echo "  STEP 2: Registering Compositions"
  echo "──────────────────────────────────────────"

  REGISTER_SCRIPT="$SCRIPT_DIR/register-compositions.js"
  if [ -f "$REGISTER_SCRIPT" ]; then
    node "$REGISTER_SCRIPT"
    echo "  ✅ Compositions registered!"
  else
    echo "  ⚠ register-compositions.js not found"
  fi
  echo ""
else
  echo "  STEP 2: Registration SKIPPED"
  echo ""
fi

# ======================== STEP 3: RENDER ========================
echo "──────────────────────────────────────────"
echo "  STEP 3: Rendering Videos"
echo "──────────────────────────────────────────"
echo ""

RENDERED=0
SKIPPED=0
FAILED=0

VIDEO_DATA=$(node -e "
  const c=JSON.parse(require('fs').readFileSync('$CATALOG','utf8'));
  const v=Array.isArray(c)?c:c.videos||[];
  v.forEach((item,i) => console.log(JSON.stringify({idx:i+1, id:item.id, title:item.title})));
")

while IFS= read -r line; do
  IDX=$(echo "$line" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.idx)")
  VIDEO_ID=$(echo "$line" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.id)")
  TITLE=$(echo "$line" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.title)")

  # Range filter
  if [ "$IDX" -lt "$FROM" ] || [ "$IDX" -gt "$TO" ]; then continue; fi

  SERIAL_STR=$(printf "%03d" "$IDX")
  COMP_ID="Abc$(to_pascal_case "$VIDEO_ID")"
  FILENAME_SAFE=$(to_filename_safe "$TITLE")

  # Batch folder
  BATCH_NUM=$(( (IDX - 1) / FOLDER_SIZE + 1 ))
  BATCH_START=$(( (BATCH_NUM - 1) * FOLDER_SIZE + 1 ))
  BATCH_END=$(( BATCH_NUM * FOLDER_SIZE ))
  if [ "$BATCH_END" -gt "$TOTAL" ]; then BATCH_END=$TOTAL; fi
  BATCH_FOLDER="Batch-$(printf '%02d' $BATCH_NUM)_($BATCH_START-$BATCH_END)"

  BATCH_DIR="$OUTPUT_DIR/$BATCH_FOLDER"
  mkdir -p "$BATCH_DIR"
  OUTPUT_FILE="$BATCH_DIR/$SERIAL_STR-$FILENAME_SAFE.mp4"

  # Skip existing
  if [ -f "$OUTPUT_FILE" ]; then
    echo "  [$IDX/$TOTAL] SKIP: $TITLE (exists)"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  echo -n "  [$IDX/$TOTAL] $TITLE ($COMP_ID)..."

  # Build render command
  RENDER_CMD="npx remotion render src/index.ts $COMP_ID \"$OUTPUT_FILE\" --concurrency=100% --log=error --crf=$Q_CRF --codec=$Q_CODEC --pixel-format=yuv420p"

  if [ "$Q_SCALE" -gt 1 ]; then
    RENDER_CMD="$RENDER_CMD --scale=$Q_SCALE"
  fi

  if [ -n "$Q_BITRATE" ]; then
    RENDER_CMD="$RENDER_CMD --video-bitrate=$Q_BITRATE"
  fi

  if eval "$RENDER_CMD" >> "$LOG_FILE" 2>&1; then
    echo " DONE"
    RENDERED=$((RENDERED + 1))
  else
    echo " FAILED"
    FAILED=$((FAILED + 1))
  fi
done <<< "$VIDEO_DATA"

# ======================== SUMMARY ========================
END_TIME=$(date +%s)
ELAPSED=$(( END_TIME - START_TIME ))
HOURS=$(( ELAPSED / 3600 ))
MINS=$(( (ELAPSED % 3600) / 60 ))
SECS=$(( ELAPSED % 60 ))

echo ""
echo "════════════════════════════════════════════════"
echo "  Pipeline Complete!"
echo "════════════════════════════════════════════════"
echo ""
echo "  Quality:  $Q_LABEL"
echo "  Rendered: $RENDERED"
echo "  Skipped:  $SKIPPED"
echo "  Failed:   $FAILED"
echo "  Time:     ${HOURS}h ${MINS}m ${SECS}s"
echo "  Output:   $OUTPUT_DIR"
echo ""

echo "" >> "$LOG_FILE"
echo "========================================" >> "$LOG_FILE"
echo "  Pipeline Complete!" >> "$LOG_FILE"
echo "  Quality: $Q_LABEL" >> "$LOG_FILE"
echo "  Rendered: $RENDERED | Skipped: $SKIPPED | Failed: $FAILED" >> "$LOG_FILE"
echo "  Time: ${HOURS}h ${MINS}m ${SECS}s" >> "$LOG_FILE"
echo "  Finished: $(date)" >> "$LOG_FILE"
echo "========================================" >> "$LOG_FILE"
