"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
# from portfolio.settings import BASE_DIR, STATIC_ROOT, STATIC_URL
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from website import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.MePageView.as_view(), name='me'),
    path('about/', views.AboutPageView.as_view(), name='about'),
    path('projects/', views.ProjectsPageView.as_view(), name='projects',)
] 
# + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 
# only works during development, use nginx to serve statics during deployment

# todo add a conditional env variable to dynamically change serving static files in dev/prod