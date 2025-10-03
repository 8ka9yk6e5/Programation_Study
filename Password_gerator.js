//get a enter to user to get how much digits to has the password
//create a form to remove the comma

let digits = 12;

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
    
    if (num > alphabet.length) console.log("ERROR - value out of array");//for precaution

    return alphabet[num];
};

function transfer(callbackWhich, callbackLetter, callbackNumber){
    return callbackWhich() ? callbackLetter() : callbackNumber();
}

function creatingPassword(timesToRepeat = 6){
    let password = [];

    for (i = 0; i < timesToRepeat; i++){
        password.push(transfer(numberOrLetter, letterRandomizer, numberRadomizer));
    }

    return String(password);
}

console.log(creatingPassword(10));