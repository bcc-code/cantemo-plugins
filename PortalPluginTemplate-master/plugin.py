from portal.pluginbase.core import *
from portal.generic.plugin_interfaces import IPluginURL, IPluginBlock,\
    IContextProcessor, IAppRegister, IGetMetadataFieldGroups
from django.template import loader, Context

import logging
log = logging.getLogger(__name__)

#needed or Internal Server Error
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


# Load the URL plugin
MyPluginURL()

#needed for GearboxMenu
class MyGearboxMenuPlugin(Plugin):
    implements(IPluginBlock)

    def __init__(self):
        # The name of the plugin which should match the pluginblock tag in the Portal template
        # For instance as defined in media_view.html: {% pluginblock "MediaViewDropdown" %}
        # This plugin is placed in the gearbox menu for the item.
        self.name = "metadata-summary"#MediaViewDropdown
        # Define a GUID for each plugin.
        # Use e.g. http://www.guidgenerator.com/
        self.plugin_guid = "03eed808-5c6b-42a7-88a1-0336bcf790d1"
        log.debug("Initiated MyGearboxMenuPlugin")

    def return_string(self, tagname, *args):
        return {'guid': self.plugin_guid, 'template': 'portalplugintemplate/gearbox_menu.html'}


MyGearboxMenuPlugin()