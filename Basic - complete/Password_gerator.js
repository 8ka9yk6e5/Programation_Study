const readline = require('node:readline');

let numberOrLetter = () => Boolean(Math.floor(Math.random()*2));
/*
to have more chace to get 1 or 0
true => Letter
false => Number
*/

let numberRadomizer = () => Math.floor(Math.random()*10);

let letterRandomizer = () => {
    const num = Math.floor(Math.random() * (26 - 0) + 0);
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    return alphabet[num];
};

function transfer(callbackWhich, callbackLetter, callbackNumber){
    return callbackWhich() ? callbackLetter() : callbackNumber();
}

function creatingPassword(timesToRepeat){
    let password = [];

    for (let i = 0; i < timesToRepeat; i++){
        password.push(transfer(numberOrLetter, letterRandomizer, numberRadomizer));
    }

    return String(password).replaceAll(',', '');//remove the commas and create the password in a correct format
}

function showPassword(digits = 12){
    console.clear();
    console.log(`How much digits: ${digits}`);
    console.log(`\nPassword: ${creatingPassword(digits)}\n`);
}

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("How much digits this password need has?\n", (digits) => {
    showPassword(Number(digits));
    rl.close();
});