#!/bin/bash
CONFIG_FILE="/root/cantemo-plugins/js/test-config.js"
# path to config file that you wnat to use
PORTAL_ROOT="/opt/cantemo/portal"
PLUGIN_NAME="ManualRuleButtonPlugin"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


if [ "X${DIR}" = "X" ]; then
    echo "Error: Could not figure out your source directory. This should not happen."
    exit 1
fi

sudo mkdir -p $PORTAL_ROOT/portal/plugins/$PLUGIN_NAME
sudo cp -r $DIR/* $PORTAL_ROOT/portal/plugins/$PLUGIN_NAME
# sudo cp -r $DIR/js/* $PORTAL_ROOT/portal_media/js

find $DIR/js ! -name bccm-example-config.js -exec cp -t $PORTAL_ROOT/portal_media/js {} +

if [ -f "$CONFIG_FILE" ]; then
    echo "$CONFIG_FILE exists."
    sudo cp $CONFIG_FILE $PORTAL_ROOT/portal_media/js
else 
    echo "$CONFIG_FILE does not exist."
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
