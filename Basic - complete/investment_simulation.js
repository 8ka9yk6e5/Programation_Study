const readline = require('node:readline');

const investmentInformation = {
    taxInPeriod : undefined,
    time : undefined,
    interest(startValue) {return (startValue * this.taxInPeriod *this.time)},//used when don't have a acumulated interest, used in short time
    compoundInterest(startValue) {return (startValue * (1 + this.taxInPeriod) ** this.time)}//with acumulated interest, used in medium or long time
};

const date = {
    day : new Date().getDate(),
    month : new Date().getMonth(),
    year : new Date().getFullYear()
}

let Equity;

function typeOfInvestment(){
    const rl = readline.Interface({
        input : process.stdin,
        output : process.stdout
    })

    rl.question(`(response with number)\nYour investment is for a:\n1-long period\n2-medium period\n3-short period\n`, (userEnter) => {
        if (userEnter == 1 || userEnter == 2) 
        else 
    })
}

function getInformationsOfInvestment(){

}