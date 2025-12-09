//way to correct the losing of "this" in a callck as instance for a setTimeout

//example of lost the this value, which binding can enter
const user = {
    name : 'Cibeli',
    myName(){
        console.log(`Hello, I'm ${this.name}\n`);
    }
}

setTimeout(user.myName, 1000);

//solution - wrapper

setTimeout(() => {user.myName();}, 1500);
//this method, can easily lose the object and lose the this

//like this, which give an error because the change
// user = {myName() {console.log('other thing');}};


//other solution - bind

//syntax -- <function name>.bind(<context>);

function sayName() {console.log(`\n${this.name}\n`);}

const bindUser = sayName.bind(user);
//fix the this from the function in the user object, and, adding it to the variable

bindUser();

//example with setTimeout

const bindUserName = user.myName.bind(user);

setTimeout(bindUserName, 2000);


//partial funcitons - way to bind arguments

//syntax -- <funciton name>.bind(<context>, <args>);

function rectangleArea(a, b){
    return a * b;
}

const recAreaBind = rectangleArea.bind(null, 2);
//always, now, the a value is 2

console.log(`${recAreaBind(3)}\n`);
console.log(`${recAreaBind(4)}\n`);
console.log(`${recAreaBind(5)}\n`);