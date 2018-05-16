//  import * as $ from "jquery"
// import * as myapp from "./myapp"
let app1 = require("./app1");
let King = require("./app2");

var $ = require("jquery");
var $body = $("body");
var $p = $("<p>hi</p>");
$body.append($p);

try {

    let a = new app1(11, "Johan");
    a.say();
    var p = a.test();
    p.then(() => {
        $p.text("success");
    }).catch(() => {
        $p.text("fail");
    });
} catch (e) {
    console.error(e);
}

try {
    let king = new King("Robert");
    king.says();
    king.promises().then(()=>{
        fetch("https://github.com/Legends/webpack-Loading-Polyfills/blob/master/dist/main.js")
        .then((result)=>{return result.text();})
        .then((txt)=>{console.log(txt);})
        .catch((result)=>{console.log(result);});
    });
} catch (error) {
    console.error(error); 
}