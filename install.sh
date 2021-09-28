#!/bin/bash
set -o pipefail

PORTAL_ROOT="/opt/cantemo/portal"
PLUGIN_NAME="ManualRuleButtonPlugin"

if [ $(id -u) -ne 0 ]
  then echo "Please run as root"
  exit
fi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ "X${DIR}" = "X" ]; then
    echo "Error: Could not figure out your source directory. This should not happen."
    exit 1
fi

mkdir -p $PORTAL_ROOT/portal/plugins/$PLUGIN_NAME
cp -vr $DIR/* $PORTAL_ROOT/portal/plugins/$PLUGIN_NAME
cp -vr $DIR/js/* $PORTAL_ROOT/portal_media/js

echo "Done."

echo "Stopping portal"
systemctl stop portal.target
echo "Syncing data"
cd "$PORTAL_ROOT"
python manage.py syncdata
cd $DIR
echo "Starting portal"
systemctl start portal.target
