var init = require("./All-polyfills").default;
debugger;
console.dir(init)
init()
.then(()=>{require("./app")})
.catch((e)=>{alert(e);})