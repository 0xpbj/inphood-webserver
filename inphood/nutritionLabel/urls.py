from django.conf.urls import url

from . import views

app_name = 'nutritionLabel'
urlpatterns = [
  # ex: /food/celery/
	url(r'^(?P<food_name>.+?)$', views.foodDetail, name='foodDetail'),
	# ex: /nutritionLabel/5/results/
	url(r'^(?P<nutrition_id>[0-9]+)/results/$', views.results, name='results'),
	# ex: /nutritionLabel/5/
	url(r'^(?P<nutrition_id>[0-9]+)/$', views.detail, name='detail'),
	# ex: /nutritionLabel/
  url(r'^$', views.index, name='index'),
]
