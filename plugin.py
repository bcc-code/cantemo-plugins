from portal.pluginbase.core import *
from portal.generic.plugin_interfaces import IPluginBlock

import logging
log = logging.getLogger(__name__)

class ManualRuleButtonPlugin(Plugin):
    implements(IPluginBlock)

    def __init__(self):
        self.name = "MediaViewItemTechMetadataTop"
        self.plugin_guid = "063f4c81-c62b-4362-aec2-16ca5f26215f"
        log.debug("Init ManualRuleButtonPlugin")

    def return_string(self, tagname, *args):
        context = args[1]
        item_id = context['item_id']
        return {
            'guid': self.plugin_guid,
            'template': 'manual_rule_button_plugin.html',
            'context': {
                'item_id': item_id,
            }
        }

ManualRuleButtonPlugin()
