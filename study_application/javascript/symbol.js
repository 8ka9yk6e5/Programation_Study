//Symbol type
//other value acept as key in object

//creation

const id = Symbol.for('id');//inside of parentheses can be add a description, but is optional

//never ever exist symbols with same value 

//convert to string

console.log(id.toString());
console.log(id.description);//to show only the description of a symbol value

console.log('\n');
//Symbol values can create hidden values inside objects which just this specific value can acess it

const user = {
    [id] : "Cibeli Id"
};

console.log(`with string: ${user?.id}\nwith symbol: ${user?.[id]}\n`);

//symbols inside objects are jumped for loops and object.keys command

//copy with the symbol

const user2 = Object.assign({}, user);

console.log(`${user2?.[id]}\n`);

//to create equals symbols - global symbols

const otherId = Symbol.for('id');

console.log(id === otherId);
console.log('\n');

//to see the key used in a global symbol

console.log(Symbol.keyFor(id));
console.log(Symbol.keyFor(otherId));