const readline = require('node:readline');//import the readline

const investmentInformation = {//informations important to code
    taxInPeriod : undefined,
    time : undefined,
    interest(startValue) {return (startValue * this.taxInPeriod *this.time)},//used when don't have a acumulated interest, used in short time
    compoundInterest(startValue) {return (startValue * (1 + this.taxInPeriod) ** this.time)}//with acumulated interest, used in medium or long time
};

const date = {//get the current date values
    day : new Date().getDate(),
    month : new Date().getMonth(),
    year : new Date().getFullYear()
}

const gettingInfo = {//methods to get important values from user
    typeOfinvestment(callback) {//to type of them
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question(`(response with number)\nYour investment is for a:\n1-long period\n2-medium period\n3-short period\n`, (userEnter) => {
            // if (userEnter == 1 || userEnter == 2) callback();
            // else callback();
            //change to a switch
        })
        rl.close();
    },

    quantityEnter(callback) {//quantity to invest
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("Enter the quantity to Invest:\n", (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0) {
                rl.close();
                callback();
            } else console.log("ERROR - The enter is too low or isn't a number");
        })
    },

    gettingTaxInPeriod() {
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("(max:100%)\nEnter the medium of tax in period:\n", (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0){
                investmentInformation.taxInPeriod(userEnter/100);//update to a percentage the current tax
                rl.close();
            }
        })
    },

    whichTypeOfTime(){
        const rl = readline.interface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("What is time type which you want to maintain the investment:\n1-For a time\n2-until the end of investment\n", (userEnter) =>{
            //add a switch case
        })
    }
}

const timeOfInvestment = {
    timeToPass() {//time which the investment be active

    },

    endOfTheInvestment(){//to get the date which the investment end

    }
}

gettingInfo.quantityEnter();