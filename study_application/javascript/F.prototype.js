//When using new F(), the created object's [[prototype]] is set to F.prototype

'use strict'

//original object
const car = {
    wheels : 4,
    sound : "vruum",
};

//a function constructor, which works to create new objects in a defined style
function ferrari(color){
    this.brand = 'ferrari';
    this.color = color;
}

//define inheritance to the original object
ferrari.prototype = Object.create(car);

//define the constructor to own function, to don't lost de assignment
ferrari.prototype.constructor = ferrari;

//create a new object, which contains the value from original object(inheritance), and the new values from the constructor
const myFerrari = new ferrari('red');
//in case, the __proto__ point to the function prototype

//accessing all values from new object
console.log(`brand : ${myFerrari.brand}
color : ${myFerrari.color}
wheels : ${myFerrari.wheels}
sound : ${myFerrari.sound}\n`);

console.log(myFerrari.constructor);
//now, it's possible to for where this object it's created