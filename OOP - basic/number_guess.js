const readline = require("readline");

const randomNumber = Math.round(Math.random()*100);//number to user descovery

function comparingNumber(userNum = 0, callback) {
    if(userNum > randomNumber) console.log("Number is higher than enter number");
    else if (userNum < randomNumber) console.log("Number is lower than enter number");
    else callback();
}
