//ARRAY - object wich support store keyed collection of values

//creation

const Arr1 = new Array();
//can create with values
const Arr2 = new Array('value1','value2','value3');//but is rarely used
//and  can define the length from that array with it
const Arr3 = new Array(5);//now, length is 5

//OR

const Arr4 = [];
//also allow to create with values, like:
const Arr5 = ['value1','value2', 'value3'];

//basic acess

//to acess a value
console.log(Arr3[0]);//always start with 0

//to substitute a value
Arr3[0] = 'value';

//to add a new value
Arr3[3] = 'value4';

//to show how much values had in an array
console.log(Arr3.length);

//to show whole array
console.log(Arr3);

//an array can support any type
const crazyArr = [(a,b) => a+b, {test : 1}];//etc...

//acess last value
console.log(Arr3.at(-1));

//pop;push;shift;unshift

const newArray = ['v1', 'v2', 'v3'];

newArray.push('v4');//adds an element at end of array

newArray.shift();//removes the first value, and add the second as first, make the array "walk" a value

newArray.pop();//removes the last value

newArray.unshift('v1');//add a new value at start and reorganize the other values

//here, the push/pop is faster than shift/unshift because of index change

console.log('\n\n');

//loops

const loopArr = ['L1','L2','L3','L4','L5'];

for (let value of loopArr){
    console.log(`Now is: ${value}`);
}

//multidimensional arrays

const mDArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(mDArr[0][2])//to acess a value
//is acessed the first array, third value, specificly the number 3

//toString

console.log(`\n${[1,2,3,4].toString()}\n`);//the string is maded with the values separates with a comma

console.log('\n\n');

    //add and remove values
//Splice

const arrTestSplice = ['I', 'go', 'home'];

//syntax - Array.splice(index,deletecount, ...elements)
arrTestSplice.splice(1, 1);//remove from index 1, 1 value
console.log(arrTestSplice+'\n');

//can change the text
arrTestSplice.splice(0,1, "Let's", "dance");
console.log(arrTestSplice+'\n');

//can add some values

arrTestSplice.splice(2,0, 'in');
console.log(arrTestSplice+'\n');

//can save a part out of the array
const removed = arrTestSplice.splice(3,1);
console.log(removed+'\n');

//slice - to get a part from an array

const arrTestSlice = ['t','e','s','t','e','d'];

console.log(arrTestSlice.slice(1,3));

console.log(arrTestSlice.slice(-3));

console.log(arrTestSlice.slice(0,4));

console.log('\n\n');

//concat - to join multiple arrays

const arrTestConcat1 = [1,2];

const arrTestConcat2 = [3,4];

const arrTestConcat = arrTestConcat1.concat(arrTestConcat2);

console.log(`${arrTestConcat}`);

console.log('\n\n');
//forEach loop

const arrLoop = [1,2,3,4,5,6];

arrLoop.forEach((item, index, array) => console.log(`number:${item}\nindex:${index}\n`));

console.log('\n\n');

    //search in array

//indexOf/lastIndexOf

const arrIndex = ['t','e','s','t'];

console.log(`first index of 't': ${arrIndex.indexOf('t')}\nlast index of 't': ${arrIndex.lastIndexOf('t')}\nhad nthe number 3 in array: ${arrIndex.includes(3)}\n`);
/*
    indexOf - find the first value in the array and return the index of it
    lastIndexOf - find the last value in the array and return the index of it
    includes - show if a value exist in array
*/

//find, findIndex adn findLastIndex

const arrToFind = ['need', 'to', '63', 'tested'];

const result = arrToFind.find((item) => {if (!isNaN(Number(item))) return item;});

console.log("number value in array: " + result);

console.log("index of the number: " + arrToFind.findIndex((item)=> {if(!isNaN(Number(item))) return item;}));

console.log("index before the number: " + arrToFind.findLastIndex((item, index, arr) => {if(!isNaN(Number(arr[index + 1]))) return item;}));

//filter

const arrToFilter = ['4','r','r','4','y','1','5','4','l','1','5','7'];

console.log("real letters: " + arrToFilter.filter((item,index) => {if(!isNaN(Number(item))) return item;}));

console.log('\n\n')

    //transform an array

//map

const namesArr = ['John', 'Mark', 'Ana', 'Cibeli'];

const namesLengthArr = namesArr.map((item) => item.length);

console.log(namesArr);
console.log(namesLengthArr);

console.log('\n\n');

//sort

const nums = [3,6,15];

nums.sort();//make in lexicpgraphic form

console.log(nums);

//to correct it add a function with correct order to sort

function order(a,b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

nums.sort(order);

console.log(`correct: ${nums}`);

//or simplyer

console.log(`simple: ${[5,30,25,4,-2].sort((a,b) => a - b)}`);

console.log('\n\n');

//reverse

const rArr = ['first', 'second', 'third', 'fourth'];

console.log(`reverse: ${rArr.reverse()}\n\n`);

//split - string to array

const str = 'John, Mary, Pete, Cibeli';
const strToArr = str.split(', ');

console.log(`str: ${str} - ${typeof str}\narray: ${strToArr} - ${typeof strToArr}\n\n`);

//join - array to string

const arrToStr = ['I','don\'t','be'];
const StrTransformed = arrToStr.join(' ');

console.log(`array: ${arrToStr} - ${typeof arrToStr}\nstring: ${StrTransformed} - ${typeof StrTransformed}\n\n`);

//reduce and reduceRight
//both work equals, but reduceRight start at right and go to left

const numbers = [4,5,6,2,7,12,654,78,-987];

console.log(`sum: ${numbers.reduce((sum, current) => sum + current)}\n\n`);

//isArray - to verify if is an array

console.log(`is an array: ${Array.isArray([])}`);