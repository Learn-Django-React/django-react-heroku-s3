from django.conf import settings
from django.http import HttpResponsePermanentRedirect
from django.utils.deprecation import MiddlewareMixin


class RemoveWWWMiddleware(MiddlewareMixin):
    """
    Based on the REMOVE_WWW setting, this middleware removes "www." from the
    start of any URLs.
    """
    def process_request(self, request):
        host = request.get_host()
        if settings.REMOVE_WWW and host and host.startswith('www.'):
            redirect_url = '%s://%s%s' % (
                request.scheme, host[4:], request.get_full_path()
            )
            return HttpResponsePermanentRedirect(redirect_url)
