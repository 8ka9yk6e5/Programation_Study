//creation of a pomodoro clock only using code, without an API

const readline = require('node:readline');
const {stdin : input, stdout : output} = require('node:process');

const gettingInformations = {
    timeOfSet : 0,
    timeOfRest : 0,
    Sets : 0,
    getTimeOfSet(){
        const rl = readline.createInterface({input, output});

        rl.question('(in minutes)How much time be each set?\n', (userEnter) => {
            if (!isNaN(Number(userEnter)) && userEnter > 0) {
                this.timeOfSet = Number(userEnter);
                rl.close();
            }
            else {
                console.log("ERROR - invalid value");
                rl.close();
                this.getTimeOfSet();
            }
            
        });
        
    },
    getTimeOfRest(){
        const rl = readline.createInterface({input, output});
    },
    getQuantityOfSets(){
        const rl = readline.creationInterface({input, output});
    }
}

gettingInformations.getTimeOfSet();