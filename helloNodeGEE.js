/* 
Nodejs minimal example to test a 
callback and a synchronous request (getInfo) to EE
Requires: EETOKEN environment variable.
node_modules: @google/earthengine
*/
var token=process.env.EETOKEN;
if(token){
var ee = require("@google/earthengine");
ee.data.setAuthToken('', 'Bearer', token, 3600, [], 
()=>{
    ee.initialize(null, null, 
    ()=>{
        function print(a){
            console.log(a);
        }
        ee.String("Hello from callback")
        .getInfo(print);
        console.log(
        ee.String("Hello from synchronous request")
        .getInfo()
        );
    }, 
    err=>{console.log(err);}
    , null, null
    );
    }, false);
}else{
    console.log("You need to set the EETOKEN environment variable. "
    +"Use `node printToken.js` to generate one using ~/.config/earthengine/credentials")
};
