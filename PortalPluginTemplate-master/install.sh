#!/bin/bash
PORTAL_ROOT="/opt/cantemo/portal"
PLUGIN_NAME="PortalPluginTemplate"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ "X${DIR}" = "X" ]; then
    echo "Error: Could not figure out your source directory. This should not happen."
    exit 1
fi

sudo mkdir -p $PORTAL_ROOT/portal/plugins/$PLUGIN_NAME
sudo cp -r $DIR/* $PORTAL_ROOT/portal/plugins/$PLUGIN_NAME
sudo cp -r $DIR/js/* $PORTAL_ROOT/portal_media/js

echo "Done."
echo "Stop Portal: systemctl stop portal.target"
echo "Sync the database: root@mediabox:   /opt/cantemo/portal   python manage.py syncdata"
echo "Start Portal: systemctl start portal.target"
