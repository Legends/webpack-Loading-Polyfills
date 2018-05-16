//  import * as $ from "jquery"
// import * as myapp from "./myapp"
let myapp = require("./myapp");

var $ = require("jquery");

// legends
var $body = $("body");
var $p = $("<p>hi</p>");

$body.append($p);

try {

    let a = new myapp(11, "Johan");
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