//form to reimplement things from one object to other

//to acess the prototype value

const originalObj = {
    exist : true,
    value : 'inheritance is working'
};

console.log(`prototype from originalObj : ${JSON.stringify(originalObj.__proto__)}`);

console.log(`\nfrom inheritanceObj\n`);

const inheritanceObj = {
    num : 8,
};

console.log(`before inherithance : ${JSON.stringify(inheritanceObj)}\n`);

inheritanceObj.__proto__ = originalObj;

console.log(`${inheritanceObj.exist}, ${inheritanceObj.value}\n`)
//now, has more values inside the object

//an inheritance happens when you define an object as prototype from other object

//modern js recomends to use commands from Object instead the __proto__
console.log(Object.getPrototypeOf(inheritanceObj));

//objects with prototype only read the prototype, and just edit itself

inheritanceObj.value = 'my value';
//now instead access the object, not the prototype
console.log(`\n${JSON.stringify(inheritanceObj)}`);

//in loops, are iterates all pairs, including the inherited properties

for(let prop in inheritanceObj) console.log(`\n${prop}`);

//but we can filter the iterates

for(let prop in inheritanceObj){
    let isOwn = Object.hasOwn(inheritanceObj ,prop);

    if(isOwn) console.log(`Own value : ${prop}`);
    else console.log(`Protorype value : ${prop}`);
}