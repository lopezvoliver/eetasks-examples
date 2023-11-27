# Sample GEE test scripts for the vscode [EE Tasks](https://github.com/gee-community/eetasks) extension

This repository contains sample GEE scripts that have been tested to work with the vscode [EE Tasks](https://marketplace.visualstudio.com/items?itemName=gee-community.eetasks) extension. 

Read more about how to use the `EE Tasks: run GEE script` command [here](https://github.com/gee-community/eetasks/blob/main/docs/runGEEscripts.md).

In addition, it contains a minimal node script to demonstrate the authentication and initialization of the earthengine library in node. 

## Sample GEE scripts

To run these scripts in vscode, first install the [EE Tasks vscode extension](https://marketplace.visualstudio.com/items?itemName=gee-community.eetasks) and follow the [sign in instructions](https://github.com/lopezvoliver/eetasks/tree/auth#sign-in-options).

Finally, open the script to run, press `F1` and type `EE Tasks: run GEE script`. 

1. [helloGEE](./helloGEE.js): demonstrates the use of `print` either directly or as a callback function in `.getInfo()`
2. [ExportTableToDrive](./ExportTabletoDrive.js): demonstrates a simple [Export.table.toDrive](https://developers.google.com/earth-engine/apidocs/export-table-todrive) with a call to [Map.addLayer](https://developers.google.com/earth-engine/apidocs/map-addlayer) ignored. 
3. [ExportImageToDrive](./ExportImagetoDrive.js): demonstrates a simple [Export.Image.toDrive](https://developers.google.com/earth-engine/apidocs/export-image-todrive).

## Node example 

The [helloNodeGEE.js](./helloNodeGEE.js) is a minimal node script demonstrating the authentication and initialization of the EE library with one asynchronous and one synchronous request. It requires a valid [access_token](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#callinganapi). 

If you have stored credentials generated by the [python Earth Engine client](https://developers.google.com/earth-engine/guides/python_install#authentication) (`~/.config/earthengine/credentials`), then you can generate a token (valid for one hour) using the `printToken.js` node script. 

> The following instructions are **not** required to run the [sample GEE scripts](#sample-gee-scripts) within the vscode EE Tasks extension. 

You will need to use [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the [google/earthengine](https://www.npmjs.com/package/@google/earthengine) client:

```bash
npm install @google/earthengine
```

Next, generate the token:

```bash
node printToken.js
```

If a valid token is generated, the output should look like this:

```bash
{
  access_token: 'ya29...<VERY LONG STRING HERE>...',
  expires_in: 3599,
  scope: 'https://www.googleapis.com/auth/earthengine https://www.googleapis.com/auth/devstorage.full_control',
  token_type: 'Bearer'
}
```

Copy the `access_token` string and export the `EETOKEN` environment variable:

```bash
export EETOKEN="ya29...<VERY LONG STRING HERE>..."
```

Finally, run the example:

```bash
node helloNodeGEE.js
```

The output should look like this:

```bash
$ node helloNodeGEE.js 
Hello from synchronous request
Hello from callback
```