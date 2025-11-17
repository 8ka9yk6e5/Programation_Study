let number1, number2;

console.time();

number1 = 30;
number2 = 20;

if(number1>number2){
    console.log(`Number 1(${number1}) is greater than number 2(${number2})`);
}
else if (number1<number2){
    console.log(`Number 1(${number1}) is less than number 2(${number2})`);
}
else{
    console.log(`Number 1(${number1}) is equals to number 2(${number2})`);
}

console.log('');
console.timeEnd();