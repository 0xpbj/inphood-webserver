#!/usr/bin/python

# See https://docs.python.org/2/library/csv.html for more information.
import csv, sys, getopt

import django
import os
print "DJANGO_SETTINGS_MODULE = " + os.environ['DJANGO_SETTINGS_MODULE']
print "cwd = " + os.getcwd()

django.setup()

from django.utils import timezone

from nutritionLabel.models import NutritionInfo

def zeroIfDashes(numberAsString):
  if numberAsString == '--':
    return '0'
  else:
    return numberAsString

def main(scriptName, argv):
  usageString = 'Usage: ' + scriptName + ' -c <csvFile>'
  csvFileName = ''
  try:
    opts, args = getopt.getopt(argv, "hc:", ["csvFile="])
  except getopt.GetoptError:
    print usageString
    sys.exit(2)

  for opt, arg in opts:
    if opt == '-h':
      print usageString
      sys.exit()
    elif opt in ("-c", "--csvFile"):
      csvFileName = arg

  if (csvFileName == ''):
    print usageString
    sys.exit()

  print 'Importing CSV file "', csvFileName, '" into database ...'

  with open(csvFileName, 'rb') as csvFile:
    # Skip the first 7 lines--they are obnoxious non-csv formatted header info.
    #
    for i in range(7):
      csvFile.next()

    # Now read the csv file using dictionary csv reader, which maps the header row
    # to keys in a dictionary of values that are the remaining rows.
    #
    nutritionCsvReader = csv.DictReader(csvFile, delimiter=',', quotechar='"')
    for row in nutritionCsvReader:
      print("Inserting data into db: ")
      print(row)
      print("--------------------------------------------------------------------------------")

      n = NutritionInfo(NDB_NO=row['NDB_NO'])
      n.description = row['Description']
      n.protein_per_100g = zeroIfDashes(row['Protein(g)Per 100 g'])
      n.carb_per_100g = zeroIfDashes(row['Carbohydrate, by difference(g)Per 100 g'])
      n.fat_per_100g = zeroIfDashes(row['Total lipid (fat)(g)Per 100 g'])
      n.pub_date = timezone.now()
      n.save()

if __name__ == "__main__":
  main(sys.argv[0], sys.argv[1:])
