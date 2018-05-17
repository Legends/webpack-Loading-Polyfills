var poly = require("./All-polyfills");

poly()
.then(()=>{require("./app")})
.catch((e)=>{alert(e);})