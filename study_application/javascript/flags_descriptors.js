'use strict'

/*
property flags - property special values
* writable - if true, value can be changed
* enumerable - if true, is listened in loops
* configurable - if true, the property can be deleted and these attributes can be modified
*/

const obj = {
    value : false,
    value1 : 1,
    value2 : '2',
    value3 : null
};

//allow us to see the informations of the propertyes
console.log(Object.getOwnPropertyDescriptor(obj, 'value3'));
//first value - object; second value - property
console.log('\n');


console.log(Object.getOwnPropertyDescriptors(obj));
//to show all obejcts propertyes
//also used to a deeper clone
console.log('\n');


//to chance a only a vlue
Object.defineProperty(obj, 'value1', { writable: false});
console.log(Object.getOwnPropertyDescriptor(obj, 'value1'));
console.log('\n');


//to change more than one propertye
Object.defineProperties(obj, { value2 : {writable : false, enumerable : false}, value1 : {writable : true}});
console.log(Object.getOwnPropertyDescriptor(obj, 'value2'));
console.log('\n');



//NON-WRITABLE

const user = {
    name : 'John',

    toString(){return this.name}
};

Object.defineProperty(user, 'name', {writable : false});
//can't changed the value from user.name

// user.name = 'Cena';//give an error in strict mode
console.log(user.name);
console.log('\n');

//NON-ENUMERABLE

for(let key in user) console.log(`with numerable - ${key}`);

Object.defineProperty(user, 'name', {enumerable : false});

for(let key in user) console.log(`without enumerable - ${key}`);
//now, loops jump the user value

console.log('\n');


//NON-CONFIGURABLE

Object.defineProperty(user, 'name', {configurable : false});
//now, user.name neither can be deleted or can chage a propertye

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

//sealing an object globally

// Object.preventExtensions(<obj>);
//forbids the addition of new properties

// Object.seal(<obj>);
// sets configurable as false in all properties from object

// Object.freeze(<obj>);
// sets configurable and writable as false in all properties

// Object.isExtensible(<obj>);
// returns false if adding properties is forbidden

// Object.isSealed(<obj>);
// returns true if configurable is false in properties 

// Object.isFrozen(<obj>);
// returns true if all properties has configurable and writable as false
