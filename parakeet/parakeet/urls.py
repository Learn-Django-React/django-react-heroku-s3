"""parakeet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import RedirectView
from django.urls import path, re_path

from web import views

from .settings import DEBUG

urlpatterns = [
    # path('admin/', admin.site.urls),
    re_path(r'^$', views.App.as_view()),
    re_path(r'^favicon\.ico$', RedirectView.as_view(url='https://d1y53h0rs2bp6k.cloudfront.net/static/favicon.ico'), name='favicon'),
    re_path(r'^robots\.txt$', views.robots_txt),
    re_path(r'^manifest\.json$', views.manifest_json),
    re_path(r'^meta\.json$', views.meta_json),
    re_path(r'^service-worker\.js$', views.service_worker),
    re_path(r'^sitemap\.xml$', views.sitemap_xml),
]

if DEBUG:
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
