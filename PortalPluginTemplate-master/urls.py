"""
URLS for the PortalPluginTemplate plugin
"""

from django.conf.urls import url
from .vmyplugin import (HelloWorldView)

urlpatterns = [
    # The URL defined to a hello world
    url(r'^helloworld/$', HelloWorldView, name='my_plugin_helloworld',
        kwargs={'template': 'portalplugintemplate/hello_world.html'}),
]
