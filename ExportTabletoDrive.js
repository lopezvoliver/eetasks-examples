/*
Sample EE Tasks* valid GEE script 
Tests Export.table
* https://github.com/gee-community/eetasks/blob/main/docs/runGEEscripts.md
*/
var fc = ee.FeatureCollection(
    [ee.Feature(
        null, {"foo":"bar"}
    )]
);
print("Feature collection: ", fc);

Export.table.toDrive({
    collection : fc,
    description:"myExportTaskFromVscode",
    fileNamePrefix:"myTableFromVscode"
});
