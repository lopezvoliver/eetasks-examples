/*
Sample EE Tasks* valid GEE script 
Tests the print functionality
* https://github.com/gee-community/eetasks/blob/main/docs/runGEEscripts.md
*/

var helloString = ee.String("Hello world").getInfo();
print(helloString)

print(ee.String("HEY ").getInfo());

//These will use a callback to print, 
//with getInfo called asynchronously,
//so the order is not guaranteed ❗
print(ee.Number(1));
print(ee.Image(1));
print(ee.String("hello"));
print(ee.List([0,1,2]));
print(ee.Dictionary({"FOO":"BAR"}))

// equivalent to:
//ee.Number(1).getInfo(print);
//ee.Image(1).getInfo(print);
//ee.String("hello").getInfo(print);
//ee.List([0,1,2]).getInfo(print);
//ee.Dictionary({"FOO":"BAR"}).getInfo(print);

