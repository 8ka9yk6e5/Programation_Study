const readline = require('readline');//import the readline

const investmentInformation = {//informations important to code
    quantity : 0,
    taxInPeriod : 0,
    time : 0,
    interest() {return (this.quantity + (this.quantity * this.taxInPeriod * this.time))},//used when don't have a acumulated interest, used in short time
    compoundInterest() {return (this.quantity + (this.quantity * (1 + this.taxInPeriod) ** this.time))}//with acumulated interest, used in medium or long time
};

const gettingInfo = {//methods to get important values from user
    typeOfInvestment(callbackCompound, callback) {//to type of them // need to correct there
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question(`(response with number)\nYour investment is for a:\n1-long period\n2-medium period\n3-short period\n`, (userEnter) => {
            if(!isNaN(Number(userEnter))){
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

            }
        })
        rl.close();
    },

    quantityEnter(context, callback) {//quantity to invest
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("Enter the quantity to Invest:\n", (userEnter) => {//to get the quantity
            if (!Number.isNaN(userEnter) && userEnter > 0) {//see if is a realy a number and is more than 0
                investmentInformation.quantity = userEnter;//save the quantity
                rl.close();
                callback.call(context, this.whichTypeOfTime);
            } else console.log("ERROR - The enter is too low or isn't a number");//show an error
        })
    },

    gettingTaxInPeriod(callback) {
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("Enter the medium of tax in period(of investment, in months):\n", (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0){
                investmentInformation.taxInPeriod = userEnter/100;//update to a percentage the current tax
                rl.close();
                callback();
            }
            else console.log("ERROR - The enter is too low or isn't a number");//error if don't correspond of allowed value
        })
    },

    whichTypeOfTime(){
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("What is time type which you want to maintain the investment:\n1-For a time\n2-until the end of investment\n", (userEnter) =>{
            if(!isNaN(Number(userEnter))){
                switch(Number(userEnter)){
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
            }
            else{
                console.log("ERROR - invalid value");
                this.whichTypeOfTime();
            }
            rl.close();
        })
    }
}

const timeOfInvestment = {
    enterTheTimeWhichBeMaintained() {//to enter how much months need pass to remove the investment
        const rl = readline.createInterface({
          input : process.stdin,
          output :process.stdout
        });

        rl.question("How much months the investment will be maintained?\n", (userEnter) => {
            if (!isNaN(userEnter) && userEnter > 0) {
                investmentInformation.time = userEnter;
                rl.close();
                show();
            }
            else {
                console.log("ERROR - The enter is too low or isn't a number");
                rl.close();
                this.enterTheTimeWhichBeMaintained();
            }
        });
    },

    endOfTheInvestment(){//to get the date which the investment end
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        });

        rl.question("MM-DD-YYYY\nEnter the end date of the investment:\n",(userEnter)=> {
            const date = new Date(userEnter);
            if(!isNaN(date.getTime())){
                rl.close();
                const timeRemaining = Math.ceil((date - new Date()) / ((1000 * 60 * 60 * 24) *30.44));
                //transform the user enter of end date to how much months will pass
                investmentInformation.time = timeRemaining;
                show();
            }
            else {
                console.log("ERROR - this is'nt correspond with a date");
                rl.close();
                this.endOfTheInvestment();
            }//error if the userEnter doesn't correspond to a date
        });
    }
}

function show(){
    const result = gettingInfo.typeOfInvestment(investmentInformation.compoundInterest, investmentInformation.interest)
    console.warn(`the returned value will be : ${result}`);//calculate and show to user
}

gettingInfo.quantityEnter.call(gettingInfo, gettingInfo, gettingInfo.gettingTaxInPeriod);