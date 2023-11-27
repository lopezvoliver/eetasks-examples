/*
Sample EE Tasks* valid GEE script 
Tests the print functionality
* https://github.com/gee-community/eetasks/blob/main/docs/runGEEscripts.md
*/

//These will use a callback to print, 
//with getInfo called asynchronously,
//so the order is not guaranteed ❗
print(ee.Number(1));
print(ee.Image(1));
print(ee.String("hello"));
print(ee.List([0,1,2]));
print(ee.Dictionary({"FOO":"BAR"}))

// equivalent to:
ee.Number(1).getInfo(print);
ee.Image(1).getInfo(print);
ee.String("hello").getInfo(print);
ee.List([0,1,2]).getInfo(print);
ee.Dictionary({"FOO":"BAR"}).getInfo(print);

// DO NOT USE THESE (in windows) ❗ 
// ee.Number(1).getInfo();
// ee.Image(1).getInfo();
// ee.String("hello").getInfo();
// etc..
