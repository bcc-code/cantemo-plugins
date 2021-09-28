from portal.pluginbase.core import *
from portal.generic.plugin_interfaces import IPluginURL, IPluginBlock,\
    IContextProcessor, IAppRegister, IGetMetadataFieldGroups
from django.template import loader, Context
import json

import logging
log = logging.getLogger(__name__)

class MyPluginURL(Plugin):
    """
    URL Plugin that defines new URL's in the system
    Loads the Admin rules URL's
    """
    implements(IPluginURL)
  
    def __init__(self):
        self.name = "MyPluginURL"
        # Should point to the urls.py
        self.urls = 'portal.plugins.PortalPluginTemplate.urls'
        # Defines the URL pattern prefix
        self.urlpattern = r'^myplugin/'
        # Defines the plugin namespace
        self.namespace = 'myplugin'
        # Define a GUID for each plugin.
        # Use e.g. http://www.guidgenerator.com/
        self.plugin_guid = "906ec22a-bfd4-48be-8d57-4cf8f4cb2da8"
        log.debug("Initiated MyPluginURL")


# MyPluginURL()


def safe_serialize(obj):
    default = lambda o: f"<<non-serializable: {type(o).__qualname__}>>"
    return json.dumps(obj, default=default)

class ManualRuleButtonPlugin(Plugin):
    implements(IPluginBlock)

    def __init__(self):
        self.name = "MediaViewItemTechMetadataTop"
        self.plugin_guid = "063f4c81-c62b-4362-aec2-16ca5f26215f"
        log.debug("Init ManualRuleButtonPlugin")

    def return_string(self, tagname, *args):
        context = args[1]
        request = context['request']
        user = context['user']
        user_groups = user.groups.values_list('name', flat = True)
        return {
            'guid': self.plugin_guid,
            'template': 'manual_rule_button_plugin.html',
            'context': { 
                'user_group': 'admin',
                'user_groups': safe_serialize(list(user_groups)),
            }
        }

ManualRuleButtonPlugin()


class ManualRuleButtonJsPlugin(Plugin):
    implements(IPluginBlock)

    def __init__(self):
        self.name = "BaseJS"
        self.plugin_guid = "bbf0772e-8de0-4e0c-884e-8bdebac253e0"
        log.debug("Initiated ManualRuleButtonJsPlugin")

    def return_string(self, tagname, *args):
        context = args[1]
        user = context['user']
        user_groups = user.groups.values_list('name', flat = True)
        item_id = context['item_id']
        return {
            'guid': self.plugin_guid,
            'template': 'manual_rule_button_plugin_js.html',
            'context': {
                'user_groups': safe_serialize(list(user_groups)),
                'item_id': item_id,
            }
        }

ManualRuleButtonJsPlugin()