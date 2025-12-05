const readline = require('readline');//import the readline

const investmentInformation = {//informations important to code
    quantity : 0,
    taxInPeriod : 0,
    time : 0,
    result : 0,
    interest() {
        this.result = (this.quantity + (this.quantity * this.taxInPeriod * this.time));
        console.warn(`the returned value will be : ${this.result.toFixed(2)}`);//calculate and show to user
        process.exit();
    },//used when don't have a acumulated interest, used in short time
    compoundInterest() {
        this.result = (this.quantity * (1 + this.taxInPeriod) ** this.time);
        console.warn(`the returned value will be : ${this.result.toFixed(2)}`);//calculate and show to user
        process.exit();
    }//with acumulated interest, used in medium or long time
};

const gettingInfo = {//methods to get important values from user
    typeOfInvestment(context, callbackCompound, callback) {//to type of them // need to correct there
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question(`(response with number)\nYour investment is for a:\n1-long period\n2-medium period\n3-short period\n`, (userEnter) => {//bug here
            if(!isNaN(Number(userEnter)) && [1,2,3].includes(Number(userEnter))){
                switch (+userEnter){
                    case 1:
                    case 2:
                        callbackCompound.call(context);
                        rl.close();
                        break;
                    case 3:
                        callback.call(context);
                        rl.close();
                        break;
                } 
            }
            else{
                console.log("ERROR - Invalid argument");//give an error if the value don't correspond w ith others
                rl.close();
                this.typeOfInvestment(context, callbackCompound, callback);
            }
        })
    },

    quantityEnter(context, callback) {//quantity to invest
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("Enter the quantity to Invest:\n", (userEnter) => {//to get the quantity
            if (!Number.isNaN(userEnter) && userEnter > 0) {//see if is a realy a number and is more than 0
                investmentInformation.quantity = Number(userEnter);//save the quantity
                rl.close();
                callback.call(context, this.whichTypeOfTime, context);
            } else {
                console.log("ERROR - The enter is too low or isn't a number");//show an error
                rl.close();
                this.quantityEnter(context, callback);
            }
        })
    },

    gettingTaxInPeriod(callback, context) {
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })

        rl.question("Enter the medium of tax in period(of investment, in months):\n", (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0){
                investmentInformation.taxInPeriod = userEnter/100;//update to a percentage the current tax
                rl.close();
                callback.call(context);
            }
            else {
                console.log("ERROR - The enter is too low or isn't a number");//error if don't correspond of allowed value
                rl.close();
                this.gettingTaxInPeriod(callback, context);
            }
        })
    },

    whichTypeOfTime(){
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        })
        rl.question("What is time type which you want to maintain the investment:\n1-For a time\n2-until the end of investment\n", (userEnter) =>{
            if(!isNaN(Number(userEnter)) && [1, 2].includes(Number(userEnter))){
                switch(Number(userEnter)){
                    case 1:
                        rl.close();
                        timeOfInvestment.enterTheTimeWhichBeMaintained();
                        break;
                    case 2:
                        rl.close();
                        timeOfInvestment.endOfTheInvestment();
                        break;
                }
            }
            else{
                console.log("ERROR - invalid value");
                rl.close();
                this.whichTypeOfTime();
            }
        })
    }
}

const timeOfInvestment = {
    enterTheTimeWhichBeMaintained() {//to enter how much months need pass to remove the investment
        const rl = readline.createInterface({
          input : process.stdin,
          output :process.stdout
        });

        rl.question("How much months the investment will be maintained?\n", (userEnter) => {//bug here
            if (!isNaN(userEnter) && userEnter > 0) {
                investmentInformation.time = Number(userEnter);
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

    dateValidator(str){//to verify if the string is a valid date value
        const [M, D, Y] = str.split('-').map(Number);
        if(!M || !D || !Y) return false;
        return true;
    },

    endOfTheInvestment(){//to get the date which the investment end
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        });

        rl.question("MM-DD-YYYY\nEnter the end date of the investment:\n",(userEnter)=> {
            if(this.dateValidator(userEnter)){
                const date = new Date(userEnter);
                rl.close();
                const timeRemaining = Math.ceil((date - new Date()) / ((1000 * 60 * 60 * 24) *30.44));
                //transform the user enter of end date to how much months will pass
                investmentInformation.time = Number(timeRemaining);
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
    gettingInfo.typeOfInvestment.call(gettingInfo ,investmentInformation,investmentInformation.compoundInterest, investmentInformation.interest)
}

gettingInfo.quantityEnter(gettingInfo, gettingInfo.gettingTaxInPeriod);

//correct the error logs and the error fluxe