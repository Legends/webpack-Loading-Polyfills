function myapp(age, name) {
    this.age = age;
    this.name = name;
}

myapp.prototype.say = function () {
    console.log(this.name + this.age);
}

myapp.prototype.test = function () {
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}

module.exports =  myapp;