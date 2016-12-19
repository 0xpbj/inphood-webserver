from django.conf.urls import url

from . import views

app_name = 'nutritionLabel'
urlpatterns = [
	# ex: /nutritionLabel/
    url(r'^$', views.index, name='index'),
	# ex: /nutritionLabel/5/
	url(r'^(?P<nutrition_id>[0-9]+)/$', views.detail, name='detail'),
	# ex: /nutritionLabel/5/results/
	url(r'^(?P<nutrition_id>[0-9]+)/results/$', views.results, name='results'),
]
