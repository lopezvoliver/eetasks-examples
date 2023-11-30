/*
This minimal test uses XmlHttpRequest to create a synchronous request, 
which is what the earthengine Javascript api uses for
.getInfo() without a callback function. 
This small test should simply return "undefined". 
*/
var XmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xmlHttp = new XmlHttpRequest();
xmlHttp.open("GET","",false);
try{
xmlHttp.send("");
console.log(xmlHttp.responseText);
}catch(err){
    console.log(err);
}