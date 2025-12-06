//Rest parameter - allows to a function had a infinite arguments

function sum(...nums){//rest parameter ever be on last space of arguments, otherwise give an error
    let result = 0;
    
    for(let num of nums) result += num;

    return result
}

console.log(sum(1,2,3,4,5));
console.log(sum(6,7,8,9,10));
console.log("\n");

//arguments - not recommended the use - all functions had this argument

function sumArg(){
    let result = 0;

    for(let arg of arguments) result += arg;

    return result;
}

console.log(`with 'arguments' array-like: ${sumArg(1,3,5,7,9)}\n`);

//Spread parameter - make the reverse from the rest - 'expands' the array

function show(...words){//get an array of values
    console.log(words);
}

show(['hello', ' ', 'dev']);//result in a double array

show(...['hello', ' ', 'dev']);//result in just one array

//spread can used in more than one parameter

show(...['hello', ' '], ...['dev','!'], '!');//and combine with normal values

console.log('\n');

//can used to merge arrays

const numbers = [1,2,3,4];
const numbers2 = [8,9,10];
const numbersComplete = [0, ...numbers, 5, 6, 7, ...numbers2];

console.log(`${numbersComplete}\n`);

//can also used with string

console.log(`${[...'Hello!']}\n`);//same result as using Array.from

//spread can copy array and objects

const numbersCopy = [...numbersComplete];

const obj = {a:1,b:2,c:3};

const objCopy = {...obj};

console.log(`array copy: ${numbersCopy}\nobject copy: ${JSON.stringify(objCopy)}\n`);