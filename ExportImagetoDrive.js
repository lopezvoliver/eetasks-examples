/*
Sample EE Tasks* valid GEE script 
Tests Export.image
* https://github.com/gee-community/eetasks/blob/main/docs/runGEEscripts.md
*/

// A Landsat 8 surface reflectance image.
var image = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_044034_20210508')
  .select(['SR_B.']);  // reflectance bands

// A region of interest.
var geom = ee.Geometry.BBox(-122.24, 37.13, -122.11, 37.20);

Export.image.toDrive({
 image: image,
 region: geom,
 scale: 30,
 crs: 'EPSG:5070'
});
