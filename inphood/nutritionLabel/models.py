from __future__ import unicode_literals

import datetime

from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.

@python_2_unicode_compatible # only if you need to support Python 2
class NutritionInfo(models.Model):
  NDB_NO = models.PositiveIntegerField('National Database Number', default=-1)
  description = models.CharField('Description', max_length=255)
  protein_per_100g = models.DecimalField('Protein(g) Per 100g', max_digits=5, decimal_places=2)
  carb_per_100g = models.DecimalField('Carbohydrate, by difference(g) Per 100g', max_digits=5, decimal_places=2)
  fat_per_100g = models.DecimalField('Fat(g) Per 100g', max_digits=5, decimal_places=2)
  pub_date = models.DateTimeField('Date Published')
  
  def __str__(self):
    return self.description + "  (" \
        + "Protein " + str(self.protein_per_100g) + ", " \
        + "Carbs " + str(self.carb_per_100g) + ", " \
        + "Fat " + str(self.fat_per_100g) + ")"
