/*
Nodejs minimal example to get a EE token using
the python EE persistent credentials. 
Use this to generate a token for the 
helloNodeGEE example. 
Requires:
    node_modules: node-fetch
    The ~/.config/earthengine/credentials file should exist
    and should have the `client_id`, `client_secret`, and
    `refresh_token` fields. 
*/
const homedir = require('os').homedir();
const fs = require('node:fs');
const fetch = require("node-fetch");
fs.readFile(
    homedir + '/.config/earthengine/credentials', 
'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var credentials = JSON.parse(data);
  credentials["grant_type"] = "refresh_token";
  fetch("https://oauth2.googleapis.com/token",{
    method:'post',
    body:JSON.stringify(credentials),
    headers:{'Content-Type':'application/json'}
  })
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
  })
});
