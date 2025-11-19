//MAP - keyed colection, which allow key of any type

const firstMap = new Map();//to create a map, const is more recommended

const obj = {obj : "test"}, arrowFunc = () => 1+2;

firstMap.set("1", 'str1');//to add a value, call be all type
firstMap.set(true, "bool1");
firstMap.set(5, "Number1")
    .set(obj, "Object1")
    .set(null, "Null1")
    .set(arrowFunc, "ArrowFunc1");//can be connected


console.log("getting values");
const pairGet = firstMap.get("1");//to get a value from map, use the key value to acess
console.log(firstMap.get(true));
console.log(firstMap.get(5));
console.log(firstMap.get(obj));
console.log(firstMap.get(null));
console.log(firstMap.get(arrowFunc));
console.log(pairGet);

console.log("has value");
console.log(firstMap.has(5));//return true if a key exist, and false if don't
console.log(firstMap.has(6));


console.log("delete value");
firstMap.set("deleteValue", "delete");
console.log(`be deleted: ${firstMap.get("deleteValue")}`);
firstMap.delete("deleteValue");//to delete a value
console.log(`be deleted: ${firstMap.get("deleteValue")}`);

console.log("show the size");
console.log(firstMap.size);//return how much value had

// firstMap.clear();//clean the Map

// console.log(firstMap.size);


//map iteration

console.log("\n\n"+firstMap.keys());//to iterate the keys

console.log(firstMap.values());//to iterate the values

console.log(firstMap.entries());//to iterate the pairs

console.log("for keys")
for (let key of firstMap.keys()){
    console.log(key);
}

console.log("for values");
for (let value of firstMap.values()){
    console.log(value);
}

console.log("for entries");
for(let pair of firstMap.entries()){
    console.log(pair);
}

console.log("for each loop")
firstMap.forEach((value, key, map) =>{
    console.log(`${key} : ${value}`);
});//can be used to iterate directly the map

//create a map from an object
console.log("\n");
const array4Map = [
    ['1', 'str1'],
    [true, 'bool1'],
    [3, 'num1']
];

const obj4Map = {
    name : 'John',
    age : 27
};

const mapFromArray = new Map(array4Map);

console.log("map with array");
mapFromArray.forEach((value, key) => console.log(`${key}:${value}`));

const mapFromObj = new Map(Object.entries(obj4Map));

console.log("map with object");
mapFromObj.forEach((values, key) => console.log(`${key}:${values}`));

//create an object from a map

const mapToObj = Object.fromEntries(mapFromObj);

console.log("an object from a map");
console.log(mapToObj);


console.log('\n\n')
//Set - special type collection, a set of values, without keys and reptions

const firstSet = new Set();//to create a set

const john = {name : 'John'};
const pete = {name : 'Pete'};
const mary = {name : 'Mary'};  

firstSet.add(john)//to add a value
    .add(pete)
    .add(mary)
    .add(john)
    .add(mary);//add just one time each, so, the repeat one is ignored

console.log(`size: ${firstSet.size}`)//to get the size

console.log(`has:\nMary:${firstSet.has(mary)}\nJonas:${firstSet.has("jonas")}`);
//to see if a set has a value

const func = () => {firstSet.delete(mary);return firstSet.size};
console.log(`after deleted 'Mary":${func()}`);
//delete: delete a value from set

firstSet.clear();//to clean the set

//iteration of set

const iSet = new Set(['orange', 'apple', 'banana']);

console.log('\nwith loop for');
for (let value of iSet){
    console.log(value);
}

console.log("with for each loop");
iSet.forEach((value, valueAgain, set)=>{
    console.log(value);
});

console.log("\n\n\n");
//weak map - is equal as map, but the key must be an object, doesn't has iteration

const weakMap = new WeakMap();//works equal a map, with set, get and etc

const obj1 = {};

weakMap.set(obj1, "this is an pair");

console.log(`${weakMap.get(obj1)}\n`);

console.log("\n\n");
//weak set - is equals as set, but with only objects, doesn't be an iterator

const weakSet = new WeakSet();

weakSet.add(mary)
    .add(john)
    .add(pete);

console.log(`a value of a weak set: ${weakSet.has(pete)}`);