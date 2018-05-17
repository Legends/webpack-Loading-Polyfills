var patching = require("./All-polyfills");

patching()
.then(()=>{require("./app")})
.catch((e)=>{alert(e);})