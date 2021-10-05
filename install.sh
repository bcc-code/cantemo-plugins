#!/bin/bash
set -o pipefail

CONFIG_FILE="/root/test-config/test-config.js"
# path to config file that you wnat to use
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
cp -r $DIR/* $PORTAL_ROOT/portal/plugins/$PLUGIN_NAME
cp -r $DIR/js/* $PORTAL_ROOT/portal_media/js

if [ -f "$CONFIG_FILE" ]; then
    echo "$CONFIG_FILE exists."
else 
    echo "$CONFIG_FILE does not exist."
    cp $DIR/js/bccm-example-config.js $PORTAL_ROOT/portal_media/js/bccm-config.js
fi

echo "Done."

echo "Stopping portal"
systemctl stop portal.target
echo "Syncing data"
cd "$PORTAL_ROOT"
python manage.py syncdata
cd $DIR
echo "Starting portal"
systemctl start portal.target
