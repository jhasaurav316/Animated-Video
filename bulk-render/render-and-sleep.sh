#!/bin/bash
# ============================================================================
# Render a batch on the VM, then auto-deallocate the VM to stop charges.
#
# Usage (run from your LOCAL Mac, not on the VM):
#   bash bulk-render/render-and-sleep.sh              # Render all
#   bash bulk-render/render-and-sleep.sh 1            # Render batch 1 (rhymes 1-50)
#   bash bulk-render/render-and-sleep.sh 2            # Render batch 2 (rhymes 51-100)
# ============================================================================

set -euo pipefail

# ---------- Configuration ----------
VM_IP="52.224.242.39"
VM_USER="<your-vm-username>"          # Replace with your VM admin username
RESOURCE_GROUP="test-win-vm"
VM_NAME="test-win-vm"
PROJECT_PATH="C:/rhyme-render"        # Path to project on the VM
BATCH="${1:-}"                         # Optional batch number

# ---------- Build render command ----------
if [[ -n "$BATCH" ]]; then
  RENDER_CMD="cd $PROJECT_PATH && bash bulk-render/render-all.sh --batch $BATCH"
  echo "Will render BATCH $BATCH (rhymes $(( (BATCH-1)*50+1 ))-$(( BATCH*50 )))"
else
  RENDER_CMD="cd $PROJECT_PATH && bash bulk-render/run-pipeline.sh --skip-upload"
  echo "Will render ALL rhymes"
fi

echo "VM: $VM_USER@$VM_IP"
echo "Estimated time: 8-9 hours"
echo ""
echo "Starting render... VM will auto-deallocate when done."
echo "============================================"

# ---------- SSH into VM, render, then shutdown ----------
ssh "$VM_USER@$VM_IP" "$RENDER_CMD"
SSH_EXIT=$?

echo ""
echo "============================================"

if [ $SSH_EXIT -eq 0 ]; then
  echo "Render completed successfully!"
else
  echo "Render exited with code $SSH_EXIT"
fi

# ---------- Deallocate VM to stop billing ----------
echo "Deallocating VM to stop charges..."
az vm deallocate \
  --resource-group "$RESOURCE_GROUP" \
  --name "$VM_NAME" \
  --no-wait

echo "VM deallocate initiated. It will stop billing within a few minutes."
echo "============================================"
echo ""
echo "To start the VM again later:"
echo "  az vm start --resource-group $RESOURCE_GROUP --name $VM_NAME"
