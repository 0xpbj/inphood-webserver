To populate Firebase with nutrition info, we're using 'firebase-import'.  Read more here:

        https://github.com/firebase/firebase-import

To populate our Firebase DB, here's what I did:

        0. Make sure the rules in firebase are such that you can write to nutritionInfo path
        1. In this directory, install firebase-import: npm install firebase-import
        2. Run firebase import to populate the nutritionInfo part of our db:
                ./node_modules/.bin/firebase-import --database_url https://inphooddb-e0dfd.firebaseio.com --path /global/nutritionInfo --merge --json complete-001.json

TODO:
        The data used was JSON that was processed using a script from our older inPhood App. It massages the CSV and
        outputs JSON in the dictionary key:value style.  The keys are duplicated in the values as the description entry,
        this is handy b/c some of the keys had illegal characters in them--like "." which I simply ripped out.
        This should be automated in future / fixed up to permit data merges etc.
