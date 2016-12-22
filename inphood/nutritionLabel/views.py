from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

from django.shortcuts import get_object_or_404, render

from .models import NutritionInfo

def index(request):
  latestNutritionInfoList = NutritionInfo.objects.order_by('-pub_date')[:5]
  context = { 'latestNutritionInfoList': latestNutritionInfoList }
  return render(request, 'nutritionLabel/index.html', context)

def detail(request, nutrition_id):
  nutritionInfo = get_object_or_404(NutritionInfo, pk=nutrition_id)
  return render(request, 'nutritionLabel/detail.html', {'nutritionInfo': nutritionInfo})

def results(request, nutrition_id):
  nutritionInfo = get_object_or_404(NutritionInfo, pk=nutrition_id)
  return render(request, 'nutritionLabel/results.html', {'nutritionInfo': nutritionInfo})

def foodDetail(request, food_name):
  return HttpResponse("Nutrition info for food: " + food_name)
