import os

from django.shortcuts import render
from django.http import Http404, HttpResponse
from django.views import View
from django.views.decorators.http import require_GET

import json
import logging
logging.basicConfig(filename='example.log',level=logging.DEBUG)


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# URL: learndjangoreact.com/manifest.json
@require_GET
def manifest_json(request):
    file = open(os.path.join(BASE_DIR, 'manifest.json'), 'r')
    content = file.read()
    file.close()
    return HttpResponse(content, content_type="text/plain")


# URL: learndjangoreact.com/meta.json
@require_GET
def meta_json(request):
    file = open(os.path.join(BASE_DIR, 'meta.json'), 'r')
    content = file.read()
    file.close()
    return HttpResponse(content, content_type="text/plain")


# URL: learndjangoreact.com/robots.txt
@require_GET
def robots_txt(request):
    file = open(os.path.join(BASE_DIR, 'robots.txt'), 'r')
    content = file.read()
    file.close()
    return HttpResponse(content, content_type="text/plain")


# URL: learndjangoreact.com/service-worker.js
@require_GET
def service_worker(request):
    file = open(os.path.join(BASE_DIR, 'service-worker.js'), 'r')
    content = file.read()
    file.close()
    return HttpResponse(content, content_type="text/javascript")


# URL: learndjangoreact.com/sitemap.xml
@require_GET
def sitemap_xml(request):
    file = open(os.path.join(BASE_DIR, 'sitemap.xml'), 'r')
    content = file.read()
    file.close()
    return HttpResponse(content, content_type="text/plain")


# URL: learndjangoreact.com
class App(View):
    title = ""
    template = 'index.html'

    def get(self, request, *args, **kwargs):

        context = {
            'page_title': self.title,
            'page_url': '',
            'props': [],
        }

        return render(request, self.template, context)
