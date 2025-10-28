const readline = require('readline');//import the readline

const investmentInformation = {//informations important to code
    quantity : undefined,
    taxInPeriod : undefined,
    time : undefined,
    interest() {return (this.quantity + (this.quantity * this.taxInPeriod * this.time))},//used when don't have a acumulated interest, used in short time
    compoundInterest() {return (this.quantity + (this.quantity * (1 + this.taxInPeriod) ** this.time))}//with acumulated interest, used in medium or long time
};

const gettingInfo = {//methods to get important values from user
    typeOfInvestment(callbackCompound, callback) {//to type of them
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question(`(response with number)\nYour investment is for a:\n1-long period\n2-medium period\n3-short period\n`, (userEnter) => {
            switch (userEnter){
                case 1:
                case 2:
                    const compoundResult = callbackCompound();
                    return compoundResult;
                    break;
                case 3:
                    const result = callback();
                    return result;
                    break;
                default:
                    console.log("ERROR - Invalid argument");//give an error if the value don't correspond w ith others
                    break;
            }
        })
        rl.close();
    },

    quantityEnter() {//quantity to invest
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("Enter the quantity to Invest:\n", (userEnter) => {//to get the quantity
            if (!Number.isNaN(userEnter) && userEnter > 0) {//see if is a realy a number and is more than 0
                investmentInformation.quantity = userEnter;//save the quantity
                rl.close();
            } else console.log("ERROR - The enter is too low or isn't a number");//show an error
        })
    },

    gettingTaxInPeriod() {
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("Enter the medium of tax in period(of investment, in months):\n", (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0){
                investmentInformation.taxInPeriod(userEnter/100);//update to a percentage the current tax
                rl.close();
            }
            else console.log("ERROR - The enter is too low or isn't a number");//error if don't correspond of allowed value
        })
    },

    whichTypeOfTime(){
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("What is time type which you want to maintain the investment:\n1-For a time\n2-until the end of investment\n", (userEnter) =>{
            switch(userEnter){
                case 1:
                    timeOfInvestment.enterTheTimeWhichBeMaintained();
                    break;
                case 2:
                    timeOfInvestment.calculateDateRemaining(timeOfInvestment.endOfTheInvestment());
                    break;
                default:
                    console.log("ERROR - Invalid argument");//if are other value which don't is allowed
                    break;
            }
        })
    }
}

const timeOfInvestment = {
    enterTheTimeWhichBeMaintained() {//to enter how much months need pass to remove the investment
        const rl = readline.interface({
          input : process.stdin,
          output :process.stdout
        })

        rl.question("How much months the investment will be maintained?\n", (userEnter) => {
            if (!isNaN(userEnter) && userEnter > 0) {
                investmentInformation.time = userEnter;
            }
            else console.log("ERROR - The enter is too low or isn't a number");//error if doesn't correspond
            rl.close();
        })
    },

    endOfTheInvestment(){//to get the date which the investment end
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("MM-DD-YYYY\nEnter the end date of the investment:\n",(userEnter)=> {
            const date = new Date(userEnter);
            if(!isNaN(date.getTime())){
                return date;
            }
            else console.log("ERROR - this is'nt correspond with a date");//error if the userEnter doesn't correspond to a date
            rl.close();
        })
    },

    calculateDateRemaining(callback) {
        const investmentEndDate = callback();//call the function to user enter that value

        const timeRemaining = Math.Ceil((investmentEndDate - new Date()) / ((1000 * 60 * 60 * 24) * 30.44)); //transform the user enter of end date to how much months will pass

        investmentInformation.time = timeRemaining;//pass to main object
    }
}

function controlCode(){
    gettingInfo.quantityEnter();//get quantity
    gettingInfo.gettingTaxInPeriod();//get the tax
    gettingInfo.whichTypeOfTime(); //get the time
    console.warn(`the returned value will be : ${gettingInfo.typeOfInvestment(investmentInformation.compoundInterest, investmentInformation.interest)}`);//calculate and show to user
}
//corrigir o bug
controlCode();