#!/bin/bash
#
# Setup an interactive session with django to populate the database with the csv
# data in the given file. This replaces "python manage.py shell"--read about it here:
#
#   https://docs.djangoproject.com/en/1.10/intro/tutorial02/
#


function printUsage {
        echo "Usage populateDB.sh -c <csvfile>"
        echo ""
        echo "Note: must use this script in the directory conataining manage.py"
        echo ""
}


# Check for existence of manage.py in the current directory, otherwise bail / warn user
#
if [ ! -f ./manage.py ]; then
    echo ""
    echo "ERROR: Unable to find file 'manage.py' in current directory '`pwd`'"
    echo ""
    printUsage
    exit 0
fi


# Getopts fun below from: http://stackoverflow.com/questions/192249/how-do-i-parse-command-line-arguments-in-bash
#
# A POSIX variable
OPTIND=1         # Reset in case getopts has been used previously in the shell.

csvfile=""

while getopts "h?c:" opt; do
    case "$opt" in
    h|\?)
        printUsage
        exit 0
        ;;
    c)  csvfile=$OPTARG
        ;;
    esac
done

shift $((OPTIND-1))

[ "$1" = "--" ] && shift

if [[ "$csvfile" == "" ]]; then
    printUsage
    exit 0
fi


# Get the python interpreter going to run our script
#
export DJANGO_SETTINGS_MODULE=inphood.settings
export PYTHONPATH=`pwd`:$PYTHONPATH
python ../scripts/importCsvToDb.py -c $csvfile
