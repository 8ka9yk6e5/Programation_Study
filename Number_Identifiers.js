let remainder;

//even numbers
console.group("Even numbers");
for(let num = 0; num <= 100; num++){
    
    remainder = num % 2;
    if (remainder == 0){
        console.log(num);
    }
}
console.groupEnd();

//odd numbers
console.group("Odd numbers");
for(let num = 0; num <= 100; num++){
    remainder = num % 2;
    if (remainder != 0){
        console.log(num);
    }
}
console.groupEnd();

//multiple of 3 numbers
console.group("multiple of 3");
for(let num = 0; num <= 100; num++){
    remainder = num % 3;
    if (remainder == 0){
        console.log(num);
    }
}
console.groupEnd();

//multiple of 4 numbers
console.group("multiple of 4");
for (let num = 0; num <= 100; num++){
    remainder = num % 4;
    if (remainder == 0){
        console.log(num)
    }
}
console.groupEnd();

//multiple of 5 numbers
console.group("multiple of 5");
for (let num = 0; num <= 100; num++){
    remainder = num % 5;
    if (remainder == 0){
        console.log(num);
    }
}    
console.groupEnd();

//multiple of 7
console.group("multiple of 7");
for (let num = 0; num <= 100; num++){
    remainder = num % 7;
    if (remainder == 0){
        console.log(num);
    }
}
console.groupEnd();

//prime
console.group("prime numbers");
primeVerificator : for (let num = 2; num <= 100; num++){
    let isPrime = true;
    for (let divisor = 2; divisor < num; divisor++){
        remainder = num % divisor;
        if (remainder == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        console.log(num);
    }
}
console.groupEnd();