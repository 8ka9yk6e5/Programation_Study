const readline = require('node:readline');//import the readline

const investmentInformation = {//informations important to code
    quantity : undefined,
    taxInPeriod : undefined,
    time : undefined,
    interest() {return (this.quantity * this.taxInPeriod * this.time)},//used when don't have a acumulated interest, used in short time
    compoundInterest() {return (this.quantity * (1 + this.taxInPeriod) ** this.time)}//with acumulated interest, used in medium or long time
};

const date = {//get the current date values
    day : new Date().getDate(),
    month : new Date().getMonth(),
    year : new Date().getFullYear()
}

const gettingInfo = {//methods to get important values from user
    typeOfinvestment(callbackCompound, callback) {//to type of them
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question(`(response with number)\nYour investment is for a:\n1-long period\n2-medium period\n3-short period\n`, (userEnter) => {
            switch (userEnter){
                case 1:
                case 2:
                    callbackCompound();
                    break;
                case 3:
                    callback();
                    break;
                default:
                    console.log("ERROR - Invalid argument");
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
        rl.question("Enter the quantity to Invest:\n", (userEnter) => {
            if (!Number.isNaN(userEnter) && userEnter > 0) {
                rl.close();
                investmentInformation.quantity = userEnter;//save the quantity
            } else console.log("ERROR - The enter is too low or isn't a number");
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
        })
    },

    whichTypeOfTime(){
        const rl = readline.interface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("What is time type which you want to maintain the investment:\n1-For a time\n2-until the end of investment\n", (userEnter) =>{
            switch(userEnter){
                case 1:
                    timeOfInvestment.enterTheTimeWhichBeMaintained();
                    break;
                case 2:
                    timeOfInvestment.endOfTheInvestment();
                    break;
                default:
                    console.log("ERROR - Invalid argument");
                    break;
            }
        })
    }
}

const timeOfInvestment = {
    enterTheTimeWhichBeMaintained() {
      const rl = readline.interface({
          input : process.stdin,
          output :process.stdout
      })
    },

    endOfTheInvestment(){//to get the date which the investment end
        const rl = readline.Interface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("DD-MM-YYYY\nEnter the end date of the investment:\n",(userEnter)=> {
            const date = new Date(userEnter);
            if(!isNaN(date.getTime())){
                const endInvestmentDate = {
                    day: userEnter.substr(0, 2),
                    month: userEnter.substr(3, 2),
                    year: userEnter.substr(5, 2),
                }
            }
            rl.close();//add a form to calculate the time
        })
    }
}

function controlCode(){

}