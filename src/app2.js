
 var at = require('lodash/at');

function King(name) {
    this.name = name;
}

King.prototype.says = function  (){
    console.log(`My name is ${this.name}`);
}

King.prototype.promises = function (params) {
    return new Promise((res,rej)=>{
       
        res("promise");
    });
}

module.exports = King