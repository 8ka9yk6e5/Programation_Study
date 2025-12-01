const readline = require('node:readline');

const investmentInformation = {
    taxInPeriod : null,
    time : null,
    interest(startValue) {return startValue * this.taxInPeriod *this.time},//used when don't have a acumulated interest, used in short time
    compoundInterest(startValue) {return startValue * (1 + this.taxInPeriod) ** this.time}//with acumulated interest, used in medium or long time
};

let Equity, income;

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("this working?", (enter) => {console.log(enter) })