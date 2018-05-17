var init = require("./All-polyfills");
debugger;
console.dir(init)
init()
.then(()=>{require("./app")})
.catch((e)=>{alert(e);})