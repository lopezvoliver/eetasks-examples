var image = ee.Image('COPERNICUS/S2_SR/20210109T185751_20210109T185931_T10SEG');
Map.setCenter(-121.87, 37.44, 9);

var rgbVis = {
  bands: ['B11', 'B8', 'B3'],
  min: 0,
  max: 3000
};
Map.addLayer(image, rgbVis, 'Multi-band RGB image');

print(image.getInfo());

var geometry = ee.Geometry.Polygon(
        [[[-122.34653198242188, 37.58879763020508],
          [-122.34653198242188, 37.370838030916005],
          [-121.23141967773438, 37.370838030916005],
          [-121.23141967773438, 37.58879763020508]]], null, false);

var imageCollection = ee.ImageCollection('COPERNICUS/S2_SR')
.filterBounds(geometry)
.filterDate("2021-01-09", "2021-01-10")

Map.addLayer(imageCollection, {bands: ['B4', 'B3', 'B2'], min: 0, max: 3000}, 'Image Collection')
Map.addLayer(geometry, {'color': '00ffaa'}, 'Geometry');

Export.image.toDrive({
  image: image.select(['B4', 'B3', 'B2']),
  region: geometry,
  scale: 30,
  crs: 'EPSG:5070'
 });

print("FIN");
