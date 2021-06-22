from django.shortcuts import render
from django.views.generic import TemplateView

class MePageView(TemplateView):
    template_name = 'me.html'


class AboutPageView(TemplateView):
    template_name = 'about.html'


class ProjectsPageView(TemplateView):
    template_name = 'projects.html'

