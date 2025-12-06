//other way to create functions - rarely used - a function created with a string

const sum = new Function('a', 'b', 'return a + b');
//first values is the arguments, can be infinite, third value, in this case, is the function body

console.log(`1+2=${sum(1,2)}\n3+6=${sum(3,6)}\n8+2=${sum(2,8)}\n`);

