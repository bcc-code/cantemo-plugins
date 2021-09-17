from portal.generic.baseviews import ClassView
from django.utils.translation import ugettext as _
from django.contrib import messages

# import logging
# from .models import MyPluginModel
# from django.shortcuts import get_object_or_404
# from .forms import MyPluginForm
# from django.http import HttpResponseRedirect
# from django.urls import reverse
# from portal.vidispine.iuser import UserHelper
# from portal.vidispine.igeneral import performVSAPICall
# log = logging.getLogger(__name__)


class HelloWorldView(ClassView):
    """
    Shows all the format rules
    """
    def __call__(self):
                
        extra_context = {'plugin_message':_("Hello World")}
        messages.success(self.request, message=_("Hello World message successfully sent"))
        log.debug("Hello World message successfully sent")
        return self.main(self.request, self.template, extra_context)
